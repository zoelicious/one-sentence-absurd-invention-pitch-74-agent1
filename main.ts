import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path derived from this file's own URL (never a relative path).
const scriptDir = dirname(fileURLToPath(import.meta.url));

// One sentence (177 chars): a bedroom object filing a formal complaint.
// Annoyance: waking with a stiff neck because the pillow went flat overnight.
// Invention: a pillow that files a formal grievance. Mechanism: it lodges
// the complaint, then reinflates itself before the owner wakes up.
const sentence =
  "Meet the Complaint-Form Pillow: a cushion that files a formal grievance every time it goes flat overnight, then reinflates itself to full loft before you wake with a stiff neck.";

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
  console.log("wrote entry.txt (" + sentence.length + " chars) from " + scriptDir);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
