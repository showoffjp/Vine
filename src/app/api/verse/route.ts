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
  { reference: "Isaiah 41:10", book: "Isaiah", chapter: 41, verse: 10, text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", translation: "NIV", tags: ["fear", "courage", "strength", "God's presence", "help"] },
  { reference: "Psalm 23:4", book: "Psalms", chapter: 23, verse: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", translation: "NIV", tags: ["fear", "comfort", "death", "valley", "presence"] },
  { reference: "Psalm 46:10", book: "Psalms", chapter: 46, verse: 10, text: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'", translation: "NIV", tags: ["stillness", "peace", "God's sovereignty", "anxiety", "rest"] },
  { reference: "Lamentations 3:22-23", book: "Lamentations", chapter: 3, verse: 22, endVerse: 23, text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.", translation: "NIV", tags: ["mercy", "faithfulness", "morning", "hope", "grief"] },
  { reference: "Psalm 121:1-2", book: "Psalms", chapter: 121, verse: 1, endVerse: 2, text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the LORD, the Maker of heaven and earth.", translation: "NIV", tags: ["help", "trust", "God's power", "creation", "protection"] },
  { reference: "2 Corinthians 12:9", book: "2 Corinthians", chapter: 12, verse: 9, text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.", translation: "NIV", tags: ["grace", "weakness", "power", "suffering", "sufficiency"] },
  { reference: "Matthew 11:28-29", book: "Matthew", chapter: 11, verse: 28, endVerse: 29, text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.", translation: "NIV", tags: ["rest", "weariness", "burden", "Jesus", "peace"] },
  { reference: "John 3:16-17", book: "John", chapter: 3, verse: 16, endVerse: 17, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.", translation: "NIV", tags: ["love", "salvation", "eternal life", "gospel", "grace"] },
  { reference: "Romans 8:38-39", book: "Romans", chapter: 8, verse: 38, endVerse: 39, text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", translation: "NIV", tags: ["love", "assurance", "security", "eternal", "separation"] },
  { reference: "Psalm 139:13-14", book: "Psalms", chapter: 139, verse: 13, endVerse: 14, text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.", translation: "NIV", tags: ["identity", "creation", "worth", "praise", "wonder"] },
  { reference: "John 15:5", book: "John", chapter: 15, verse: 5, text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.", translation: "NIV", tags: ["abiding", "fruitfulness", "dependence", "vine", "branches"] },
  { reference: "1 Corinthians 10:13", book: "1 Corinthians", chapter: 10, verse: 13, text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.", translation: "NIV", tags: ["temptation", "faithfulness", "endurance", "escape", "trial"] },
  { reference: "Hebrews 11:1", book: "Hebrews", chapter: 11, verse: 1, text: "Now faith is confidence in what we hope for and assurance about what we do not see.", translation: "NIV", tags: ["faith", "hope", "assurance", "unseen", "belief"] },
  { reference: "James 1:2-4", book: "James", chapter: 1, verse: 2, endVerse: 4, text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.", translation: "NIV", tags: ["trials", "joy", "perseverance", "maturity", "faith"] },
  { reference: "Psalm 34:18", book: "Psalms", chapter: 34, verse: 18, text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.", translation: "NIV", tags: ["grief", "brokenness", "comfort", "salvation", "nearness"] },
  { reference: "Isaiah 40:28-31", book: "Isaiah", chapter: 40, verse: 28, endVerse: 31, text: "Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", translation: "NIV", tags: ["strength", "renewal", "hope", "weariness", "eagles"] },
  { reference: "Colossians 3:2", book: "Colossians", chapter: 3, verse: 2, text: "Set your minds on things above, not on earthly things.", translation: "NIV", tags: ["mind", "heaven", "focus", "priorities", "renewal"] },
  { reference: "1 Peter 5:7", book: "1 Peter", chapter: 5, verse: 7, text: "Cast all your anxiety on him because he cares for you.", translation: "NIV", tags: ["anxiety", "care", "prayer", "trust", "peace"] },
  { reference: "Psalm 46:1", book: "Psalms", chapter: 46, verse: 1, text: "God is our refuge and strength, an ever-present help in trouble.", translation: "NIV", tags: ["refuge", "strength", "trouble", "help", "safety"] },
  { reference: "Revelation 21:4", book: "Revelation", chapter: 21, verse: 4, text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", translation: "NIV", tags: ["heaven", "grief", "hope", "eternity", "comfort"] },
  { reference: "John 14:6", book: "John", chapter: 14, verse: 6, text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", translation: "NIV", tags: ["salvation", "truth", "life", "Jesus", "exclusivity"] },
  { reference: "Romans 5:8", book: "Romans", chapter: 5, verse: 8, text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.", translation: "NIV", tags: ["love", "gospel", "grace", "atonement", "sinners"] },
  { reference: "Ephesians 2:8-9", book: "Ephesians", chapter: 2, verse: 8, endVerse: 9, text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.", translation: "NIV", tags: ["grace", "faith", "salvation", "gift", "works"] },
  { reference: "Genesis 1:1", book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heavens and the earth.", translation: "NIV", tags: ["creation", "beginning", "God", "universe", "sovereignty"] },
  { reference: "Psalm 103:12", book: "Psalms", chapter: 103, verse: 12, text: "As far as the east is from the west, so far has he removed our transgressions from us.", translation: "NIV", tags: ["forgiveness", "guilt", "mercy", "cleansing", "compassion"] },
  { reference: "Romans 12:1-2", book: "Romans", chapter: 12, verse: 1, endVerse: 2, text: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", translation: "NIV", tags: ["worship", "transformation", "sacrifice", "renewal", "holiness"] },
  { reference: "Psalm 91:1-2", book: "Psalms", chapter: 91, verse: 1, endVerse: 2, text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, 'He is my refuge and my fortress, my God, in whom I trust.'", translation: "NIV", tags: ["protection", "refuge", "trust", "shelter", "safety"] },
  { reference: "1 John 4:19", book: "1 John", chapter: 4, verse: 19, text: "We love because he first loved us.", translation: "NIV", tags: ["love", "gospel", "response", "relationship", "God's love"] },
  { reference: "Hebrews 4:16", book: "Hebrews", chapter: 4, verse: 16, text: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.", translation: "NIV", tags: ["prayer", "grace", "mercy", "confidence", "need"] },
  { reference: "John 11:25-26", book: "John", chapter: 11, verse: 25, endVerse: 26, text: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?'", translation: "NIV", tags: ["resurrection", "life", "death", "belief", "hope"] },
  { reference: "Philippians 1:6", book: "Philippians", chapter: 1, verse: 6, text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.", translation: "NIV", tags: ["sanctification", "confidence", "perseverance", "faithfulness", "completion"] },
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
