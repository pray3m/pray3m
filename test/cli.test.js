import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createRequire } from "node:module";
import { promisify } from "node:util";
import test from "node:test";

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);
const { version } = require("../package.json");

test("CLI help identifies the package", async () => {
  const { stdout, stderr } = await execFileAsync(
    process.execPath,
    ["bin/pray3m.js", "--help"],
    { cwd: process.cwd() }
  );

  assert.equal(stderr, "");
  assert.match(stdout, /CLI portfolio for Prem Gautam/);
  assert.match(stdout, /--version/);
});

test("CLI reports the package version", async () => {
  const { stdout, stderr } = await execFileAsync(
    process.execPath,
    ["bin/pray3m.js", "--version"],
    { cwd: process.cwd() }
  );

  assert.equal(stderr, "");
  assert.equal(stdout.trim(), version);
});
