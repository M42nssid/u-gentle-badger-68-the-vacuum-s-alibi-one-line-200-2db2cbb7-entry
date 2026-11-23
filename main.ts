// The Vacuum's Alibi: One Line, 200 Characters
// Writes one original one-line excuse from a robot vacuum for missing a spot.
// Deterministic: no network, no clock, no randomness, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I did not miss the spot. My sensors reclassified the crumbs as decorative gravel, and I do not vacuum art.";

// The gate refuses anything outside 1-200 characters, a single line, or
// whitespace-only text, so fail loudly here rather than write a bad entry.
if ([...line].length < 1 || [...line].length > 200 || line.includes("\n")) {
  throw new Error("entry line must be one line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
