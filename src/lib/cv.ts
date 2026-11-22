import { existsSync } from "node:fs";
import path from "node:path";
import { cvFiles } from "@/data/site";

/**
 * Returns only the CVs whose PDF is present in /public at build time,
 * so the hero never links to a missing file.
 */
export function availableCvs() {
  return cvFiles
    .filter((cv) => existsSync(path.join(process.cwd(), "public", cv.file)))
    .map((cv) => ({ label: cv.label, href: `/${cv.file}` }));
}
