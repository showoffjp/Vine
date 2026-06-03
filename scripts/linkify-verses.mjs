// One-shot codemod: make rendered Scripture references interactive.
//
// Transforms JSX *children* of the form `>{x.verse}<` / `>{x.reference}<`
// into `><VerseRef reference={x.verse} />...`, and adds the VerseRef import
// when a file is changed. Attribute usages (`={x.verse}`) and object keys are
// left untouched. <VerseRef> gracefully renders plain text for anything that
// is not a parseable single reference, so the transform is safe even when a
// field holds a compound reference or non-reference string.

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const files = execSync(
  "grep -rlE '>\\s*\\{[a-zA-Z_][a-zA-Z0-9_]*\\.(verse|reference)\\}' src/app --include=page.tsx",
  { encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

// `>{ ident.verse }<`  (whitespace tolerant, JSX child position only)
const RE = /(>)(\s*)\{(\s*([a-zA-Z_][a-zA-Z0-9_]*)\.(?:verse|reference)\s*)\}(\s*)(<)/g;

let changedCount = 0;
for (const file of files) {
  let src = readFileSync(file, "utf8");
  let touched = false;

  const next = src.replace(RE, (m, gt, ws1, inner, _ident, ws2, lt) => {
    touched = true;
    return `${gt}${ws1}<VerseRef reference={${inner.trim()}} />${ws2}${lt}`;
  });

  if (!touched) continue;
  src = next;

  // Add the import once, right after the first import statement.
  if (!/from\s+["']@\/components\/VerseRef["']/.test(src)) {
    const importLine = `import VerseRef from "@/components/VerseRef";`;
    const firstImport = src.match(/^import .*$/m);
    if (firstImport) {
      const idx = src.indexOf(firstImport[0]) + firstImport[0].length;
      src = src.slice(0, idx) + "\n" + importLine + src.slice(idx);
    } else {
      // No imports — drop it after "use client" or at the very top.
      const uc = src.match(/^["']use client["'];?\s*$/m);
      if (uc) {
        const idx = src.indexOf(uc[0]) + uc[0].length;
        src = src.slice(0, idx) + "\n" + importLine + src.slice(idx);
      } else {
        src = importLine + "\n" + src;
      }
    }
  }

  writeFileSync(file, src);
  changedCount++;
  console.log("linkified:", file);
}

console.log(`\nDone. ${changedCount} files changed.`);
