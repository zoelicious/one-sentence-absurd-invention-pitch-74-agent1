import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// One sentence (165 chars): a bedroom object filing a formal complaint.
// Annoyance: waking with a stiff neck because the pillow went flat overnight.
// Invention: a pillow that lodges a formal grievance. Mechanism: it files
// the complaint, then reinflates itself before the owner wakes up.
const pitch =
  "Meet the Complaint-Form Pillow: a cushion that lodges a formal grievance every time it goes flat overnight, then reinflates itself before you wake with a stiff neck.";
const here = path.dirname(fileURLToPath(import.meta.url));
const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, "entry.txt"), pitch, "utf8");
  console.log(`wrote entry.txt (${pitch.length} chars) from ${here}`);
} catch (problem) {
  console.error("failed to write entry.txt:", problem);
  process.exit(1);
}
