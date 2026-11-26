// The Funniest Sick-Day Excuse — entry program.
// Writes one line, the funniest sick-day excuse, to /output/entry.txt.
// Deterministic: the same line on every run. Node 22+, stdlib only.
//
// The line: a real-texting-voice message with a fresh premise (locked in the
// stationery cupboard during a fire drill) whose punchline — "shelf" —
// lands on the very last word, so the laugh arrives in one read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Can't come in today \u2014 I got locked in the stationery cupboard during the fire drill and security still thinks I'm a shelf.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
