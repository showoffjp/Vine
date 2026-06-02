import { NextResponse } from "next/server";

// API.Bible (scripture.api.bible) proxy.
//
// This Route Handler keeps the BIBLE_API_KEY on the server. The client calls
// /api/bible?action=... and never sees the key. Three actions are supported:
//   - ?action=versions
//   - ?action=books&bibleId={id}
//   - ?action=chapter&bibleId={id}&bookId={id}&chapter={N}

const API_BASE = "https://api.scripture.api.bible/v1";

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

function apiKey(): string | null {
  return process.env.BIBLE_API_KEY ?? null;
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

  if (!apiKey()) {
    return NextResponse.json(
      { error: "Bible API is not configured. Set BIBLE_API_KEY." },
      { status: 500 }
    );
  }

  try {
    // ── versions ────────────────────────────────────────────────────────────
    if (action === "versions") {
      const res = await bibleFetch("/bibles?language=eng");
      if (!res.ok) {
        return NextResponse.json(
          { error: `Failed to load versions (${res.status})` },
          { status: res.status }
        );
      }
      const json = await res.json();
      const raw: unknown[] = Array.isArray(json?.data) ? json.data : [];
      const versions: BibleVersion[] = raw
        .map((b) => {
          const v = b as Record<string, unknown>;
          return {
            id: String(v.id ?? ""),
            abbreviation: String(v.abbreviationLocal ?? v.abbreviation ?? ""),
            name: String(v.nameLocal ?? v.name ?? ""),
            description: String(v.description ?? ""),
            language: String(
              (v.language as Record<string, unknown> | undefined)?.name ?? "English"
            ),
          };
        })
        .filter((v) => v.id)
        .sort((a, b) => a.name.localeCompare(b.name));

      return NextResponse.json(versions);
    }

    // ── books ───────────────────────────────────────────────────────────────
    if (action === "books") {
      const bibleId = searchParams.get("bibleId");
      if (!bibleId) {
        return NextResponse.json({ error: "Missing bibleId" }, { status: 400 });
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
