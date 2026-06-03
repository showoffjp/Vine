// Shared Bible-reference utilities used by the API route, the <VerseRef>
// component, and the Bible reader. Pure functions, no React, safe on server
// and client.

// Canonical book id → display name (66-book Protestant order).
export const BOOK_NAMES: Record<string, string> = {
  GEN: "Genesis", EXO: "Exodus", LEV: "Leviticus", NUM: "Numbers",
  DEU: "Deuteronomy", JOS: "Joshua", JDG: "Judges", RUT: "Ruth",
  "1SA": "1 Samuel", "2SA": "2 Samuel", "1KI": "1 Kings", "2KI": "2 Kings",
  "1CH": "1 Chronicles", "2CH": "2 Chronicles", EZR: "Ezra", NEH: "Nehemiah",
  EST: "Esther", JOB: "Job", PSA: "Psalms", PRO: "Proverbs",
  ECC: "Ecclesiastes", SNG: "Song of Solomon", ISA: "Isaiah", JER: "Jeremiah",
  LAM: "Lamentations", EZK: "Ezekiel", DAN: "Daniel", HOS: "Hosea",
  JOL: "Joel", AMO: "Amos", OBA: "Obadiah", JON: "Jonah", MIC: "Micah",
  NAM: "Nahum", HAB: "Habakkuk", ZEP: "Zephaniah", HAG: "Haggai",
  ZEC: "Zechariah", MAL: "Malachi", MAT: "Matthew", MRK: "Mark", LUK: "Luke",
  JHN: "John", ACT: "Acts", ROM: "Romans", "1CO": "1 Corinthians",
  "2CO": "2 Corinthians", GAL: "Galatians", EPH: "Ephesians",
  PHP: "Philippians", COL: "Colossians", "1TH": "1 Thessalonians",
  "2TH": "2 Thessalonians", "1TI": "1 Timothy", "2TI": "2 Timothy",
  TIT: "Titus", PHM: "Philemon", HEB: "Hebrews", JAS: "James",
  "1PE": "1 Peter", "2PE": "2 Peter", "1JN": "1 John", "2JN": "2 John",
  "3JN": "3 John", JUD: "Jude", REV: "Revelation",
};

// Number of chapters per book — used to validate parsed references.
export const BOOK_CHAPTERS: Record<string, number> = {
  GEN: 50, EXO: 40, LEV: 27, NUM: 36, DEU: 34, JOS: 24, JDG: 21, RUT: 4,
  "1SA": 31, "2SA": 24, "1KI": 22, "2KI": 25, "1CH": 29, "2CH": 36, EZR: 10,
  NEH: 13, EST: 10, JOB: 42, PSA: 150, PRO: 31, ECC: 12, SNG: 8, ISA: 66,
  JER: 52, LAM: 5, EZK: 48, DAN: 12, HOS: 14, JOL: 3, AMO: 9, OBA: 1, JON: 4,
  MIC: 7, NAM: 3, HAB: 3, ZEP: 3, HAG: 2, ZEC: 14, MAL: 4, MAT: 28, MRK: 16,
  LUK: 24, JHN: 21, ACT: 28, ROM: 16, "1CO": 16, "2CO": 13, GAL: 6, EPH: 6,
  PHP: 4, COL: 4, "1TH": 5, "2TH": 3, "1TI": 6, "2TI": 4, TIT: 3, PHM: 1,
  HEB: 13, JAS: 5, "1PE": 5, "2PE": 3, "1JN": 5, "2JN": 1, "3JN": 1, JUD: 1,
  REV: 22,
};

// Aliases (lower-cased, no spaces) → book id. Covers full names, common
// abbreviations, and a few alternate spellings people type in references.
const ALIASES: Record<string, string> = {};
function alias(id: string, ...names: string[]) {
  for (const n of names) ALIASES[n.toLowerCase().replace(/\s+/g, "")] = id;
}
// Full names first.
for (const [id, name] of Object.entries(BOOK_NAMES)) alias(id, name);
// Common abbreviations / alternates.
alias("GEN", "Gen", "Ge", "Gn");
alias("EXO", "Exod", "Exo", "Ex");
alias("LEV", "Lev", "Lv");
alias("NUM", "Num", "Nm", "Nu");
alias("DEU", "Deut", "Deu", "Dt");
alias("JOS", "Josh", "Jsh");
alias("JDG", "Judg", "Jdg");
alias("RUT", "Ruth", "Rth");
alias("1SA", "1 Sam", "1Sam", "1 Sa", "1Samuel");
alias("2SA", "2 Sam", "2Sam", "2 Sa", "2Samuel");
alias("1KI", "1 Kgs", "1Kgs", "1 Ki", "1Kings");
alias("2KI", "2 Kgs", "2Kgs", "2 Ki", "2Kings");
alias("1CH", "1 Chron", "1Chr", "1 Chr", "1Chronicles");
alias("2CH", "2 Chron", "2Chr", "2 Chr", "2Chronicles");
alias("EZR", "Ezra", "Ezr");
alias("NEH", "Neh", "Ne");
alias("EST", "Esth", "Est");
alias("JOB", "Job", "Jb");
alias("PSA", "Ps", "Psa", "Psalm", "Psalms", "Pslm");
alias("PRO", "Prov", "Prv", "Pr");
alias("ECC", "Eccl", "Ecc", "Qoh");
alias("SNG", "Song", "Sos", "Song of Songs", "Canticles", "Cant");
alias("ISA", "Isa", "Is");
alias("JER", "Jer", "Jr");
alias("LAM", "Lam", "La");
alias("EZK", "Ezek", "Eze", "Ezk");
alias("DAN", "Dan", "Dn");
alias("HOS", "Hos", "Ho");
alias("JOL", "Joel", "Jl");
alias("AMO", "Amos", "Am");
alias("OBA", "Obad", "Ob");
alias("JON", "Jonah", "Jnh", "Jon");
alias("MIC", "Mic", "Mc");
alias("NAM", "Nah", "Na");
alias("HAB", "Hab", "Hb");
alias("ZEP", "Zeph", "Zep", "Zp");
alias("HAG", "Hag", "Hg");
alias("ZEC", "Zech", "Zec", "Zc");
alias("MAL", "Mal", "Ml");
alias("MAT", "Matt", "Mt");
alias("MRK", "Mark", "Mrk", "Mk", "Mr");
alias("LUK", "Luke", "Luk", "Lk");
alias("JHN", "John", "Jhn", "Jn");
alias("ACT", "Acts", "Ac");
alias("ROM", "Rom", "Rm", "Ro");
alias("1CO", "1 Cor", "1Cor", "1Corinthians");
alias("2CO", "2 Cor", "2Cor", "2Corinthians");
alias("GAL", "Gal", "Ga");
alias("EPH", "Eph", "Ephes");
alias("PHP", "Phil", "Php", "Pp", "Philippians");
alias("COL", "Col", "Cl");
alias("1TH", "1 Thess", "1Thess", "1 Thes", "1Thessalonians");
alias("2TH", "2 Thess", "2Thess", "2 Thes", "2Thessalonians");
alias("1TI", "1 Tim", "1Tim", "1Timothy");
alias("2TI", "2 Tim", "2Tim", "2Timothy");
alias("TIT", "Titus", "Tit");
alias("PHM", "Philem", "Phm", "Philemon");
alias("HEB", "Heb", "Hb");
alias("JAS", "James", "Jas", "Jm");
alias("1PE", "1 Pet", "1Pet", "1 Pt", "1Peter");
alias("2PE", "2 Pet", "2Pet", "2 Pt", "2Peter");
alias("1JN", "1 John", "1John", "1 Jn", "1Jn");
alias("2JN", "2 John", "2John", "2 Jn", "2Jn");
alias("3JN", "3 John", "3John", "3 Jn", "3Jn");
alias("JUD", "Jude", "Jud");
alias("REV", "Rev", "Re", "Apocalypse");

export interface ParsedRef {
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number | null;     // null when only a chapter was given
  endVerse: number | null;  // for ranges like "John 3:16-18"
}

// Resolve a book name/abbreviation (any casing/spacing) to a canonical id.
export function resolveBookId(raw: string): string | null {
  const key = raw.trim().toLowerCase().replace(/\s+/g, "").replace(/\.$/, "");
  return ALIASES[key] ?? (BOOK_NAMES[raw.trim().toUpperCase()] ? raw.trim().toUpperCase() : null);
}

// Parse a free-form reference such as:
//   "John 3:16"  "1 John 2:1"  "Psalm 23"  "Romans 8:28-30"  "Song of Solomon 2:1"
// Returns null when it cannot confidently parse a valid reference.
export function parseReference(ref: string): ParsedRef | null {
  if (!ref) return null;
  // Capture: leading book part (digits + letters + spaces), then chapter,
  // optional :verse, optional -endVerse.
  const m = ref
    .trim()
    .match(/^((?:[1-3]\s*)?[A-Za-z][A-Za-z.\s]*?)\s*(\d+)(?:\s*:\s*(\d+)(?:\s*[-–]\s*(\d+))?)?\s*$/);
  if (!m) return null;
  const bookId = resolveBookId(m[1]);
  if (!bookId) return null;
  const chapter = Number(m[2]);
  const maxCh = BOOK_CHAPTERS[bookId] ?? 150;
  if (!chapter || chapter < 1 || chapter > maxCh) return null;
  const verse = m[3] ? Number(m[3]) : null;
  const endVerse = m[4] ? Number(m[4]) : null;
  return { bookId, bookName: BOOK_NAMES[bookId], chapter, verse, endVerse };
}

// Build the Bible-reader deep link for a parsed (or partial) reference.
export function bibleHref(bookId: string, chapter: number, verse?: number | null): string {
  const params = new URLSearchParams({ book: bookId, chapter: String(chapter) });
  if (verse) params.set("verse", String(verse));
  return `/bible?${params.toString()}`;
}
