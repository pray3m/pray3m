import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const projectRoot = new URL("../", import.meta.url);
const temporaryDirectory = mkdtempSync(join(tmpdir(), "pray3m-package-"));

try {
  const packOutput = execFileSync(
    "npm",
    ["pack", "--json", "--pack-destination", temporaryDirectory],
    { cwd: projectRoot, encoding: "utf8" }
  );
  const [packageDetails] = JSON.parse(packOutput);
  const packagedFiles = packageDetails.files.map(({ path }) => path);

  assert(packagedFiles.includes("src/commands/about.js"));
  assert(packagedFiles.includes("src/commands/projects.js"));
  assert(!packagedFiles.some((path) => path.startsWith(".github/")));

  const installationDirectory = join(temporaryDirectory, "installation");
  const archivePath = join(temporaryDirectory, packageDetails.filename);
  mkdirSync(installationDirectory);

  execFileSync(
    "npm",
    ["install", "--ignore-scripts", "--no-audit", "--no-fund", archivePath],
    { cwd: installationDirectory, stdio: "pipe" }
  );

  const installedCli = join(
    installationDirectory,
    "node_modules",
    "pray3m",
    "bin",
    "pray3m.js"
  );
  const version = execFileSync(process.execPath, [installedCli, "--version"], {
    encoding: "utf8",
  }).trim();

  assert.equal(version, packageDetails.version);
  console.log(`Verified ${packageDetails.id} from a clean installation.`);
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
