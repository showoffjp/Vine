import { NextResponse } from "next/server";
import kjvData from "@/data/kjv.json";

// API.Bible (scripture.api.bible) proxy.
//
// This Route Handler keeps the BIBLE_API_KEY on the server. The client calls
// /api/bible?action=... and never sees the key. Three actions are supported:
//   - ?action=versions
//   - ?action=books&bibleId={id}
//   - ?action=chapter&bibleId={id}&bookId={id}&chapter={N}
//
// The complete KJV (all 66 books, 1,189 chapters, 31,102 verses) is bundled
// locally in src/data/kjv.json and served instantly under the bibleId
// "KJV-LOCAL" — guaranteed to work with no external dependency. Every other
// translation is proxied live from API.Bible when a key is available.

const API_BASE = "https://api.scripture.api.bible/v1";

const KJV_LOCAL_ID = "KJV-LOCAL";

// Bundled KJV: { [bookId]: { [chapter]: string[] } }
const KJV: Record<string, Record<string, string[]>> = kjvData as Record<
  string,
  Record<string, string[]>
>;

// Book id → display name (canonical 66-book order).
const BOOK_NAMES: Record<string, string> = {
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

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BibleVersion {
  id: string;
  abbreviation: string;
  name: string;
  description: string;
  language: string;
}

export interface BibleBook {
  id: string;
  name: string;
  abbreviation: string;
}

export interface BibleVerse {
  num: number;
  text: string;
}

export interface ChapterResponse {
  verses: BibleVerse[];
  reference: string;
  copyright: string;
}

interface ApiError {
  error: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// NOTE: Prefer the BIBLE_API_KEY environment variable (set it in the Vercel
// dashboard). The embedded fallback exists only so the preview deployment works
// out of the box — this key is rate-limited and should be rotated, and a fresh
// one stored as an env var, before going to production.
function apiKey(): string | null {
  return process.env.BIBLE_API_KEY ?? "zU1-mvfpFuax1lJ7EPeqR";
}

/**
 * Fetch a path against the API.Bible base URL with the api-key header.
 */
async function bibleFetch(path: string): Promise<Response> {
  const key = apiKey();
  if (!key) {
    throw new Error("BIBLE_API_KEY is not configured on the server.");
  }
  return fetch(`${API_BASE}${path}`, {
    headers: { "api-key": key },
    // Cache responses for an hour — Bible content is immutable.
    next: { revalidate: 3600 },
  });
}

/**
 * Strip all HTML tags and decode the handful of entities API.Bible emits,
 * then collapse whitespace.
 */
function cleanHtml(fragment: string): string {
  return fragment
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Parse the HTML returned by API.Bible into an array of { num, text } verses.
 *
 * API.Bible emits verse markers like:
 *   <span data-number="1" data-sid="..." class="v">1 </span>verse text here
 *
 * We split the document on the `data-number="N"` marker, then for each segment
 * take everything after the closing tag of that marker span as the verse body.
 */
function parseVerses(html: string): BibleVerse[] {
  // Match each verse-number marker span, capturing the verse number and the
  // start/end offsets of the full marker element.
  const markerRe = /<span[^>]*data-number="(\d+)"[^>]*class="v"[^>]*>.*?<\/span>/g;
  const markers: { num: number; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = markerRe.exec(html)) !== null) {
    markers.push({ num: Number(m[1]), start: m.index, end: markerRe.lastIndex });
  }

  if (markers.length === 0) {
    // No verse markers — return the whole chapter as a single block if there is
    // any readable text.
    const text = cleanHtml(html);
    return text ? [{ num: 1, text }] : [];
  }

  const verses: BibleVerse[] = [];
  for (let i = 0; i < markers.length; i++) {
    // Verse body runs from the end of this marker to the start of the next.
    const bodyStart = markers[i].end;
    const bodyEnd = i + 1 < markers.length ? markers[i + 1].start : html.length;
    const text = cleanHtml(html.slice(bodyStart, bodyEnd));
    if (text) {
      verses.push({ num: markers[i].num, text });
    }
  }

  return verses;
}

// ─── GET /api/bible ───────────────────────────────────────────────────────────

export async function GET(
  request: Request
): Promise<NextResponse<BibleVersion[] | BibleBook[] | ChapterResponse | ApiError>> {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  // The bundled KJV always works — its own version entry, and a fast path in
  // the chapter handler — regardless of whether an API key is configured.
  const LOCAL_KJV: BibleVersion = {
    id: KJV_LOCAL_ID,
    abbreviation: "KJV",
    name: "King James Version",
    description: "1611 Authorized Version — bundled, complete, always available.",
    language: "English",
  };

  try {
    // ── versions ────────────────────────────────────────────────────────────
    if (action === "versions") {
      let remote: BibleVersion[] = [];
      if (apiKey()) {
        try {
          const res = await bibleFetch("/bibles?language=eng");
          if (res.ok) {
            const json = await res.json();
            const raw: unknown[] = Array.isArray(json?.data) ? json.data : [];
            remote = raw
              .map((b) => {
                const v = b as Record<string, unknown>;
                return {
                  id: String(v.id ?? ""),
                  abbreviation: String(v.abbreviationLocal ?? v.abbreviation ?? ""),
                  name: String(v.nameLocal ?? v.name ?? ""),
                  description: String(v.description ?? ""),
                  language: String(
                    (v.language as Record<string, unknown> | undefined)?.name ??
                      "English"
                  ),
                };
              })
              .filter((v) => v.id)
              // Drop any remote KJV — the bundled one is canonical.
              .filter((v) => !/^kjv$/i.test(v.abbreviation))
              .sort((a, b) => a.name.localeCompare(b.name));
          }
        } catch {
          // Ignore remote failures — the local KJV is always returned below.
        }
      }
      // Bundled KJV always first.
      return NextResponse.json([LOCAL_KJV, ...remote]);
    }

    // ── books ───────────────────────────────────────────────────────────────
    if (action === "books") {
      const bibleId = searchParams.get("bibleId");
      if (!bibleId) {
        return NextResponse.json({ error: "Missing bibleId" }, { status: 400 });
      }
      if (bibleId === KJV_LOCAL_ID) {
        const books: BibleBook[] = Object.keys(KJV).map((id) => ({
          id,
          name: BOOK_NAMES[id] ?? id,
          abbreviation: id,
        }));
        return NextResponse.json(books);
      }
      if (!apiKey()) {
        return NextResponse.json(
          { error: "Bible API is not configured. Set BIBLE_API_KEY." },
          { status: 500 }
        );
      }
      const res = await bibleFetch(`/bibles/${encodeURIComponent(bibleId)}/books`);
      if (!res.ok) {
        return NextResponse.json(
          { error: `Failed to load books (${res.status})` },
          { status: res.status }
        );
      }
      const json = await res.json();
      const raw: unknown[] = Array.isArray(json?.data) ? json.data : [];
      const books: BibleBook[] = raw.map((b) => {
        const v = b as Record<string, unknown>;
        return {
          id: String(v.id ?? ""),
          name: String(v.name ?? v.nameLong ?? ""),
          abbreviation: String(v.abbreviation ?? ""),
        };
      });
      return NextResponse.json(books);
    }

    // ── chapter ───────────────────────────────────────────────────────────────
    if (action === "chapter") {
      const bibleId = searchParams.get("bibleId");
      const bookId = searchParams.get("bookId");
      const chapter = searchParams.get("chapter");
      if (!bibleId || !bookId || !chapter) {
        return NextResponse.json(
          { error: "Missing bibleId, bookId or chapter" },
          { status: 400 }
        );
      }

      // ── Bundled KJV fast path — always available, no network ──────────────
      if (bibleId === KJV_LOCAL_ID) {
        const book = KJV[bookId];
        const raw = book?.[String(chapter)];
        if (!raw) {
          return NextResponse.json(
            { error: `KJV chapter not found: ${bookId} ${chapter}` },
            { status: 404 }
          );
        }
        const verses: BibleVerse[] = raw.map((text, i) => ({
          num: i + 1,
          text,
        }));
        return NextResponse.json({
          verses,
          reference: `${BOOK_NAMES[bookId] ?? bookId} ${chapter}`,
          copyright: "King James Version (1611) — Public Domain",
        });
      }

      if (!apiKey()) {
        return NextResponse.json(
          { error: "Bible API is not configured. Set BIBLE_API_KEY." },
          { status: 500 }
        );
      }

      const chapterId = `${bookId}.${chapter}`;
      const query =
        "content-type=html&include-verse-numbers=true&include-verse-spans=false";
      const res = await bibleFetch(
        `/bibles/${encodeURIComponent(bibleId)}/chapters/${encodeURIComponent(
          chapterId
        )}?${query}`
      );

      if (!res.ok) {
        return NextResponse.json(
          { error: `Failed to load chapter (${res.status})` },
          { status: res.status }
        );
      }

      const json = await res.json();
      const data = (json?.data ?? {}) as Record<string, unknown>;
      const content = typeof data.content === "string" ? data.content : "";
      const verses = parseVerses(content);

      return NextResponse.json({
        verses,
        reference: String(data.reference ?? ""),
        copyright: String(data.copyright ?? "").trim(),
      });
    }

    return NextResponse.json(
      { error: "Unknown action. Use versions, books, or chapter." },
      { status: 400 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
