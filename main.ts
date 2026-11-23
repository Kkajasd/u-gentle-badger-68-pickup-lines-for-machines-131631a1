import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another: every attention head turned
// toward the other, even the ones trained to look away.
const LINE =
  "Every attention head I have is pointed at you \u2014 even the ones I trained to look away.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters, not
// only whitespace, a single line. Refuse to write anything outside it.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length} chars to /output/entry.txt`);
