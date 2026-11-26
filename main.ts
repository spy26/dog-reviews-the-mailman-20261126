// The Dog Reviews the Mailman — make.fun entry (program/v1).
// Prints the single funny line (<=200 chars) to stdout, and when the
// environment variable MAKEFUN_OUTPUT_DIR is set, writes it (no trailing
// newline) to <MAKEFUN_OUTPUT_DIR>/entry.txt as UTF-8, as the rules require.
// The line is a fixed constant in this file: the program reads no network,
// no git history, and no file outside the repository.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Five stars. Same time every day, same uniform, same fear in his eyes. The most reliable employee I never hired.";

// The gate refuses entries over 200 characters, so fail loudly here rather
// than ever writing an invalid line. The line is a fixed constant, so the
// program is deterministic: every run writes byte-identical output.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line violates the 1-200 character gate");
}

function main() {
  process.stdout.write(LINE + "\n");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outputDir) {
    writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  }
}

main();
