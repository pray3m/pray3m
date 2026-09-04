import assert from "node:assert/strict";
import test from "node:test";

const captureOutput = (callback) => {
  const messages = [];
  const originalLog = console.log;

  console.log = (...values) => messages.push(values.join(" "));

  try {
    callback();
  } finally {
    console.log = originalLog;
  }

  return messages.join("\n");
};

test("about prints the current public profile", async () => {
  const { about } = await import("../src/index.js");
  const output = captureOutput(about);

  assert.match(output, /Full-Stack Engineer/);
  assert.match(output, /Nepal/);
  assert.match(output, /premgautam\.me/);
  assert.doesNotMatch(output, /Butwal/);
});

test("projects prints the current featured work", async () => {
  const { projects } = await import("../src/index.js");
  const output = captureOutput(projects);

  assert.match(output, /Pikeah/);
  assert.match(output, /Maison & Architecture/);
  assert.match(output, /CRO Scan/);
});
