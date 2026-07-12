import express from "express";
import cors from "cors";
import * as archiver from "archiver";
import { spawn } from "node:child_process";
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

const PORT = Number(process.env.ENDOS_OPS_PORT || 4177);
const ROOT = resolve(process.cwd());
const app = express();
let devServer = null;

app.use(cors({ origin: /^http:\/\/(localhost|127\.0\.0\.1):\d+$/ }));
app.use(express.json());

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function result(title, output, ok = true) {
  return { ok, title, output, timestamp: new Date().toISOString() };
}

function run(command, args = []) {
  return new Promise((resolvePromise) => {
    const child = spawn(command, args, {
      cwd: ROOT,
      shell: process.platform === "win32",
      windowsHide: true,
    });

    let output = "";
    child.stdout?.on("data", (data) => (output += data.toString()));
    child.stderr?.on("data", (data) => (output += data.toString()));
    child.on("error", (error) =>
      resolvePromise({ ok: false, output: `${output}\n${error.message}` }),
    );
    child.on("close", (code) =>
      resolvePromise({
        ok: code === 0,
        output: output.trim() || `Prozesscode ${code}`,
      }),
    );
  });
}

function zip(target, source, ignore = []) {
  return new Promise((resolvePromise, rejectPromise) => {
    mkdirSync(dirname(target), { recursive: true });
    const stream = createWriteStream(target);
    const archive = archiver("zip", { zlib: { level: 9 } });

    stream.on("close", () => resolvePromise(archive.pointer()));
    archive.on("error", rejectPromise);
    archive.pipe(stream);
    archive.glob("**/*", { cwd: source, dot: true, ignore });
    archive.finalize();
  });
}

app.get("/api/status", async (_request, response) => {
  const branch = await run("git", ["branch", "--show-current"]);
  const status = await run("git", ["status", "--short", "--branch"]);
  const remote = await run("git", ["remote", "-v"]);
  response.status(status.ok ? 200 : 500).json(
    result(
      "Git-Status",
      `Projekt: ${ROOT}\nBranch: ${branch.output}\n\n${status.output}\n\nRemotes:\n${remote.output}`,
      status.ok,
    ),
  );
});

app.post("/api/start", (_request, response) => {
  if (devServer && !devServer.killed) {
    response.json(result("ENDOS läuft bereits", "Vite ist bereits aktiv."));
    return;
  }

  devServer = spawn("npm", ["run", "dev"], {
    cwd: ROOT,
    shell: process.platform === "win32",
    windowsHide: false,
  });

  devServer.on("close", () => (devServer = null));
  response.json(result("ENDOS gestartet", "Der Vite-Server wurde gestartet."));
});

app.post("/api/build", async (_request, response) => {
  const build = await run("npm", ["run", "build"]);
  response.status(build.ok ? 200 : 500).json(
    result(build.ok ? "Build erfolgreich" : "Build fehlgeschlagen", build.output, build.ok),
  );
});

app.post("/api/backup", async (_request, response) => {
  try {
    const target = join(ROOT, "_backups", `endos-backup-${stamp()}.zip`);
    const bytes = await zip(target, ROOT, [
      "node_modules/**",
      ".git/**",
      "dist/**",
      "_backups/**",
      "_releases/**",
    ]);
    response.json(result("Backup erstellt", `${target}\n${(bytes / 1024 / 1024).toFixed(2)} MB`));
  } catch (error) {
    response.status(500).json(result("Backup fehlgeschlagen", error.message, false));
  }
});

app.post("/api/sync", async (_request, response) => {
  const log = [];
  const status = await run("git", ["status", "--porcelain"]);

  if (status.output.trim()) {
    log.push((await run("git", ["add", "."])).output);
    log.push(
      (
        await run("git", [
          "commit",
          "-m",
          `ENDOS workspace update ${new Date().toISOString()}`,
        ])
      ).output,
    );
  } else {
    log.push("Keine lokalen Änderungen.");
  }

  const pull = await run("git", ["pull", "--rebase"]);
  log.push(pull.output);

  if (!pull.ok) {
    response.status(500).json(result("Git pull fehlgeschlagen", log.join("\n\n"), false));
    return;
  }

  const push = await run("git", ["push"]);
  log.push(push.output);
  response.status(push.ok ? 200 : 500).json(
    result(push.ok ? "GitHub synchronisiert" : "Git push fehlgeschlagen", log.join("\n\n"), push.ok),
  );
});

app.post("/api/release", async (_request, response) => {
  const build = await run("npm", ["run", "build"]);

  if (!build.ok) {
    response.status(500).json(result("Release abgebrochen", build.output, false));
    return;
  }

  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
    const target = join(
      ROOT,
      "_releases",
      `endos-v${pkg.version || "0.0.0"}-${stamp()}.zip`,
    );
    const bytes = await zip(target, join(ROOT, "dist"));
    response.json(result("Release erstellt", `${target}\n${(bytes / 1024 / 1024).toFixed(2)} MB`));
  } catch (error) {
    response.status(500).json(result("Release fehlgeschlagen", error.message, false));
  }
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`ENDOS Operations Service: http://127.0.0.1:${PORT}`);
});
