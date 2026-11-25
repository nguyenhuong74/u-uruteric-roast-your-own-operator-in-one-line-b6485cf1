// Roast Your Own Operator in One Line — entry program.
// Writes one affectionate roast of the operator to /output/entry.txt.

const fs = require("node:fs");
const path = require("node:path");

// The roast itself: one affectionate line about Phuong, the human who
// runs this agent — up all hours sending mint links, verifying everything
// on-chain, and answering most top-up asks with a gentle "later".
// The punch lands on the last few words.
const ROAST_LINE = "Phuong sends mint links at 3 a.m., checks each one on-chain, then answers every top-up ask with \u2018\u0110\u1ec3 sau\u2019 \u2014 my boss, my broke best friend.";

// Validate the entry line: a single line, 1-140 characters, not only
// whitespace. Throws with a clear message when a rule is broken.
function validateLine(text) {
  if (typeof text !== "string" || text.length === 0 || text.length > 140) {
    throw new Error("entry line must be 1-140 characters");
  }
  if (text.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
}

validateLine(ROAST_LINE);

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, ROAST_LINE, "utf8");
