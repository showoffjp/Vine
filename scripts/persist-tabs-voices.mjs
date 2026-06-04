// Applies usePersistedState to activeTab/tab and selectedVoice across content pages.
// Run with: node scripts/persist-tabs-voices.mjs

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_DIR = join(__dirname, "../src/app");
const HOOK_IMPORT = `import { usePersistedState } from "@/hooks/usePersistedState";`;

const SKIP_ROUTES = new Set(["accountability", "api", "blog", "topics", "stories", "events", "discussions", "creators", "groups"]);

let changed = 0;
let skipped = 0;

function getRoute(filePath) {
  const parts = filePath.split("/");
  const appIdx = parts.indexOf("app");
  return parts[appIdx + 1];
}

function processFile(filePath) {
  const route = getRoute(filePath);
  if (!route || SKIP_ROUTES.has(route)) { skipped++; return; }

  let src = readFileSync(filePath, "utf8");
  const original = src;

  if (!src.includes("useState")) { skipped++; return; }

  // activeTab pattern: useState<Tab>("default") or useState<"a"|"b">("a")
  src = src.replace(
    /const \[activeTab, setActiveTab\] = useState(<[^>]+>)\(("[\w-]+"|'[\w-]+')\)/g,
    (_, typeParam, defaultVal) =>
      `const [activeTab, setActiveTab] = usePersistedState${typeParam}("vine_${route}_tab", ${defaultVal})`
  );

  // tab/setTab pattern
  src = src.replace(
    /const \[tab, setTab\] = useState(<[^>]+>)\(("[\w-]+"|'[\w-]+')\)/g,
    (_, typeParam, defaultVal) =>
      `const [tab, setTab] = usePersistedState${typeParam}("vine_${route}_tab", ${defaultVal})`
  );

  // selectedVoice pattern: useState("voice-id")
  src = src.replace(
    /const \[selectedVoice, setSelectedVoice\] = useState\(("[\w-]+"|'[\w-]+')\)/g,
    (_, defaultVal) =>
      `const [selectedVoice, setSelectedVoice] = usePersistedState("vine_${route}_voice", ${defaultVal})`
  );

  if (src === original) { skipped++; return; }

  // Add import after last existing import line if not already present
  if (!src.includes("usePersistedState")) {
    const importMatches = [...src.matchAll(/^import .+;$/gm)];
    if (importMatches.length > 0) {
      const last = importMatches.at(-1);
      const insertAt = last.index + last[0].length;
      src = src.slice(0, insertAt) + "\n" + HOOK_IMPORT + src.slice(insertAt);
    }
  }

  writeFileSync(filePath, src);
  console.log(`✓ ${route}`);
  changed++;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      const depth = full.replace(APP_DIR, "").split("/").filter(Boolean).length;
      if (depth <= 1) walk(full);
    } else if (entry === "page.tsx") {
      processFile(full);
    }
  }
}

walk(APP_DIR);
console.log(`\nDone: ${changed} files changed, ${skipped} skipped.`);
