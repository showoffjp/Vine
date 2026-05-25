import { NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Verse {
  reference: string;
  book: string;
  chapter: number;
  verse: number;
  endVerse?: number;
  text: string;
  translation: string;
  tags: string[];
}

export interface VerseApiResponse {
  success: boolean;
  query: { ref?: string; search?: string };
  results: Verse[];
  count: number;
}

export interface VerseApiError {
  success: false;
  error: string;
}

// ─── Mock verse database ──────────────────────────────────────────────────────

const verseDb: Verse[] = [
  {
    reference: "John 3:16",
    book: "John",
    chapter: 3,
    verse: 16,
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    translation: "NIV",
    tags: ["love", "salvation", "eternal life", "gospel"],
  },
  {
    reference: "Romans 8:28",
    book: "Romans",
    chapter: 8,
    verse: 28,
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    translation: "NIV",
    tags: ["purpose", "hope", "trust", "God's plan"],
  },
  {
    reference: "Philippians 4:13",
    book: "Philippians",
    chapter: 4,
    verse: 13,
    text: "I can do all things through Christ who strengthens me.",
    translation: "NKJV",
    tags: ["strength", "encouragement", "Christ"],
  },
  {
    reference: "Proverbs 3:5-6",
    book: "Proverbs",
    chapter: 3,
    verse: 5,
    endVerse: 6,
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    translation: "NIV",
    tags: ["trust", "guidance", "wisdom", "faith"],
  },
  {
    reference: "Jeremiah 29:11",
    book: "Jeremiah",
    chapter: 29,
    verse: 11,
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    translation: "NIV",
    tags: ["hope", "future", "purpose", "God's plan"],
  },
  {
    reference: "Isaiah 40:31",
    book: "Isaiah",
    chapter: 40,
    verse: 31,
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    translation: "NIV",
    tags: ["hope", "strength", "renewal", "perseverance"],
  },
  {
    reference: "Psalm 23:1",
    book: "Psalms",
    chapter: 23,
    verse: 1,
    text: "The Lord is my shepherd, I lack nothing.",
    translation: "NIV",
    tags: ["provision", "peace", "shepherd", "trust"],
  },
  {
    reference: "Matthew 6:33",
    book: "Matthew",
    chapter: 6,
    verse: 33,
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    translation: "NIV",
    tags: ["kingdom", "priorities", "faith", "provision"],
  },
  {
    reference: "Romans 12:2",
    book: "Romans",
    chapter: 12,
    verse: 2,
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.",
    translation: "NIV",
    tags: ["transformation", "mind", "God's will", "holiness"],
  },
  {
    reference: "Galatians 5:22-23",
    book: "Galatians",
    chapter: 5,
    verse: 22,
    endVerse: 23,
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
    translation: "NIV",
    tags: ["fruit", "spirit", "character", "love", "joy", "peace"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Normalize a reference string for lookup, e.g. "John+3:16" → "john 3:16"
 */
function normalizeRef(ref: string): string {
  return ref.replace(/\+/g, " ").toLowerCase().trim();
}

/**
 * Find a verse by reference (flexible matching).
 */
function findByRef(ref: string): Verse[] {
  const query = normalizeRef(ref);
  return verseDb.filter((v) =>
    v.reference.toLowerCase().replace(/\+/g, " ").startsWith(query) ||
    query.startsWith(v.reference.toLowerCase())
  );
}

/**
 * Search verses by keyword across text and tags.
 */
function searchVerses(keyword: string): Verse[] {
  const q = keyword.toLowerCase().trim();
  return verseDb.filter(
    (v) =>
      v.text.toLowerCase().includes(q) ||
      v.reference.toLowerCase().includes(q) ||
      v.book.toLowerCase().includes(q) ||
      v.tags.some((t) => t.toLowerCase().includes(q))
  );
}

// ─── GET /api/verse ───────────────────────────────────────────────────────────

export async function GET(request: Request): Promise<NextResponse<VerseApiResponse | VerseApiError>> {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get("ref");
  const search = searchParams.get("search");

  if (!ref && !search) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Please provide a `ref` (e.g. ?ref=John+3:16) or `search` (e.g. ?search=hope) query parameter.",
      },
      { status: 400 }
    );
  }

  let results: Verse[] = [];

  if (ref) {
    results = findByRef(ref);
    if (results.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `No verse found for reference "${ref}". Try a reference like "John+3:16" or "Psalm+23".`,
        },
        { status: 404 }
      );
    }
  } else if (search) {
    results = searchVerses(search);
  }

  return NextResponse.json({
    success: true,
    query: { ref: ref ?? undefined, search: search ?? undefined },
    results,
    count: results.length,
  });
}
