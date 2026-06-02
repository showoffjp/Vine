"use client";

import { useState, useCallback } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface BiblePromise {
  id: string;
  verse: string;
  reference: string;
  category: string;
  topic: string;
  testament: "Old Testament" | "New Testament";
  condition: boolean;
  conditionText?: string;
  claimCount: number;
  featured: boolean;
}

// ── Seed Data ────────────────────────────────────────────────────────────────

const SEED_PROMISES: BiblePromise[] = [
  {
    id: "p1",
    verse:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    category: "Salvation",
    topic: "God's Love",
    testament: "New Testament",
    condition: true,
    conditionText: "Whoever believes in him",
    claimCount: 48291,
    featured: true,
  },
  {
    id: "p2",
    verse:
      "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
    category: "Provision",
    topic: "God's Provision",
    testament: "New Testament",
    condition: false,
    claimCount: 31204,
    featured: true,
  },
  {
    id: "p3",
    verse:
      "For he will command his angels concerning you to guard you in all your ways.",
    reference: "Psalm 91:11",
    category: "Protection",
    topic: "Angels",
    testament: "Old Testament",
    condition: false,
    claimCount: 19872,
    featured: false,
  },
  {
    id: "p4",
    verse:
      "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:5",
    category: "Healing",
    topic: "Atonement",
    testament: "Old Testament",
    condition: false,
    claimCount: 27340,
    featured: true,
  },
  {
    id: "p5",
    verse:
      "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    category: "Peace",
    topic: "God's Peace",
    testament: "New Testament",
    condition: false,
    claimCount: 24891,
    featured: false,
  },
  {
    id: "p6",
    verse:
      "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    category: "Strength",
    topic: "Hope",
    testament: "Old Testament",
    condition: true,
    conditionText: "Those who hope in the Lord",
    claimCount: 33109,
    featured: true,
  },
  {
    id: "p7",
    verse:
      "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
    reference: "James 1:5",
    category: "Wisdom",
    topic: "Prayer",
    testament: "New Testament",
    condition: true,
    conditionText: "If any of you lacks wisdom, you should ask God",
    claimCount: 18734,
    featured: false,
  },
  {
    id: "p8",
    verse:
      "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'",
    reference: "John 11:25",
    category: "Eternal Life",
    topic: "Resurrection",
    testament: "New Testament",
    condition: true,
    conditionText: "The one who believes in me",
    claimCount: 14520,
    featured: false,
  },
  {
    id: "p9",
    verse:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    category: "Provision",
    topic: "God's Purpose",
    testament: "New Testament",
    condition: true,
    conditionText: "Those who love him, who have been called according to his purpose",
    claimCount: 41872,
    featured: true,
  },
  {
    id: "p10",
    verse:
      "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    reference: "Romans 8:38-39",
    category: "Grace",
    topic: "God's Love",
    testament: "New Testament",
    condition: false,
    claimCount: 38420,
    featured: true,
  },
  {
    id: "p11",
    verse:
      "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'",
    reference: "Jeremiah 29:11",
    category: "Provision",
    topic: "God's Plans",
    testament: "Old Testament",
    condition: false,
    claimCount: 52310,
    featured: true,
  },
  {
    id: "p12",
    verse:
      "The Lord is my shepherd, I lack nothing.",
    reference: "Psalm 23:1",
    category: "Provision",
    topic: "Shepherd",
    testament: "Old Testament",
    condition: false,
    claimCount: 29871,
    featured: false,
  },
  {
    id: "p13",
    verse:
      "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    reference: "Matthew 6:33",
    category: "Provision",
    topic: "Priorities",
    testament: "New Testament",
    condition: true,
    conditionText: "Seek first his kingdom and his righteousness",
    claimCount: 22430,
    featured: false,
  },
  {
    id: "p14",
    verse:
      "'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'",
    reference: "John 16:33",
    category: "Peace",
    topic: "Overcoming",
    testament: "New Testament",
    condition: false,
    claimCount: 17893,
    featured: false,
  },
  {
    id: "p15",
    verse:
      "Never will I leave you; never will I forsake you.",
    reference: "Hebrews 13:5",
    category: "Protection",
    topic: "God's Presence",
    testament: "New Testament",
    condition: false,
    claimCount: 34102,
    featured: true,
  },
  {
    id: "p16",
    verse:
      "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    reference: "1 John 1:9",
    category: "Forgiveness",
    topic: "Confession",
    testament: "New Testament",
    condition: true,
    conditionText: "If we confess our sins",
    claimCount: 25640,
    featured: false,
  },
  {
    id: "p17",
    verse:
      "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reference: "Philippians 4:7",
    category: "Peace",
    topic: "God's Peace",
    testament: "New Testament",
    condition: false,
    claimCount: 20891,
    featured: false,
  },
  {
    id: "p18",
    verse:
      "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    reference: "Isaiah 26:3",
    category: "Peace",
    topic: "Trust",
    testament: "Old Testament",
    condition: true,
    conditionText: "Those whose minds are steadfast, because they trust in you",
    claimCount: 16742,
    featured: false,
  },
  {
    id: "p19",
    verse:
      "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    category: "Peace",
    topic: "Rest",
    testament: "New Testament",
    condition: true,
    conditionText: "Come to me, all you who are weary and burdened",
    claimCount: 36784,
    featured: true,
  },
  {
    id: "p20",
    verse:
      "Take delight in the Lord, and he will give you the desires of your heart.",
    reference: "Psalm 37:4",
    category: "Provision",
    topic: "Delight",
    testament: "Old Testament",
    condition: true,
    conditionText: "Take delight in the Lord",
    claimCount: 23109,
    featured: false,
  },
  {
    id: "p21",
    verse:
      "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
    reference: "2 Corinthians 12:9",
    category: "Grace",
    topic: "Weakness",
    testament: "New Testament",
    condition: false,
    claimCount: 28430,
    featured: false,
  },
  {
    id: "p22",
    verse:
      "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
    reference: "Romans 6:23",
    category: "Eternal Life",
    topic: "Gift of Salvation",
    testament: "New Testament",
    condition: false,
    claimCount: 15320,
    featured: false,
  },
  {
    id: "p23",
    verse:
      "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
    reference: "Revelation 3:20",
    category: "Salvation",
    topic: "Invitation",
    testament: "New Testament",
    condition: true,
    conditionText: "If anyone hears my voice and opens the door",
    claimCount: 19204,
    featured: false,
  },
  {
    id: "p24",
    verse:
      "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
    reference: "John 10:10",
    category: "Eternal Life",
    topic: "Abundant Life",
    testament: "New Testament",
    condition: false,
    claimCount: 26891,
    featured: false,
  },
  {
    id: "p25",
    verse:
      "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    reference: "Lamentations 3:22-23",
    category: "Grace",
    topic: "God's Faithfulness",
    testament: "Old Testament",
    condition: false,
    claimCount: 31078,
    featured: true,
  },
  {
    id: "p26",
    verse:
      "God is our refuge and strength, an ever-present help in trouble.",
    reference: "Psalm 46:1",
    category: "Protection",
    topic: "Refuge",
    testament: "Old Testament",
    condition: false,
    claimCount: 22341,
    featured: false,
  },
  {
    id: "p27",
    verse:
      "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    category: "Peace",
    topic: "Anxiety",
    testament: "New Testament",
    condition: true,
    conditionText: "Cast all your anxiety on him",
    claimCount: 39102,
    featured: true,
  },
  {
    id: "p28",
    verse:
      "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    category: "Strength",
    topic: "Courage",
    testament: "Old Testament",
    condition: false,
    claimCount: 27890,
    featured: false,
  },
  {
    id: "p29",
    verse:
      "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.",
    reference: "2 Chronicles 7:14",
    category: "Healing",
    topic: "Revival",
    testament: "Old Testament",
    condition: true,
    conditionText:
      "If my people humble themselves and pray and seek my face and turn from their wicked ways",
    claimCount: 18234,
    featured: false,
  },
  {
    id: "p30",
    verse:
      "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.",
    reference: "Romans 5:1",
    category: "Salvation",
    topic: "Justification",
    testament: "New Testament",
    condition: false,
    claimCount: 12987,
    featured: false,
  },
];

const ALL_CATEGORIES = [
  "Salvation",
  "Provision",
  "Protection",
  "Healing",
  "Peace",
  "Strength",
  "Wisdom",
  "Eternal Life",
  "Grace",
  "Forgiveness",
];

const CATEGORY_COLORS: Record<string, string> = {
  Salvation: "#6B4FBB",
  Provision: "#00FF88",
  Protection: "#4F8BBB",
  Healing: "#BB4F7A",
  Peace: "#4FBBAA",
  Strength: "#BB874F",
  Wisdom: "#A0BB4F",
  "Eternal Life": "#BB4F4F",
  Grace: "#4F6BBB",
  Forgiveness: "#9B4FBB",
};

// ── localStorage helpers ─────────────────────────────────────────────────────

function loadSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return new Set(arr as string[]);
    return new Set();
  } catch {
    return new Set();
  }
}

function saveSet(key: string, s: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(s)));
  } catch {
    // ignore
  }
}

function loadClaimCounts(): Record<string, number> {
  try {
    const raw = localStorage.getItem("vine_promises_claim_counts");
    if (!raw) return {};
    const obj = JSON.parse(raw);
    if (typeof obj === "object" && obj !== null) return obj as Record<string, number>;
    return {};
  } catch {
    return {};
  }
}

function saveClaimCounts(counts: Record<string, number>) {
  try {
    localStorage.setItem("vine_promises_claim_counts", JSON.stringify(counts));
  } catch {
    // ignore
  }
}

const VOICES_PROM = [
  {
    id: "spurgeon-ch",
    name: "Charles Spurgeon",
    era: "1834–1892 · Particular Baptist",
    context: "Victorian Era Preacher & Promise Devotionalist",
    bio: "Charles Haddon Spurgeon devoted a lifetime to mining the promises of Scripture. His devotional Faith's Checkbook (1888) compiled 365 daily promises, treating them as literal checks to be cashed at the bank of heaven. Spurgeon preached at Metropolitan Tabernacle to 6,000 weekly and produced over 3,500 sermons. His conviction: God's promises are not decorative poetry but contractual obligations the Almighty has bound Himself to keep.",
    quote: "The promises of God are not given that we should fold them up and lock them in the casket of our memories — they are given that we should use them as our daily bread.",
    contribution: "Spurgeon's Faith's Checkbook pioneered daily promise devotionals, treating specific Scripture promises as provisions to be actively claimed for specific situations. His homiletical approach showed believers how to apply promises practically and influenced generations of preachers and laypeople.",
  },
  {
    id: "pink-aw",
    name: "A.W. Pink",
    era: "1886–1952 · Reformed Baptist",
    context: "Covenant Theologian & Exegete",
    bio: "Arthur Walkington Pink was a British Reformed Baptist whose prolific studies outlasted his obscure life. His work The Divine Covenants examined God's promises through covenant theology. Pink insisted that promises must be understood covenantally — not extracted from God's redemptive framework. He brought necessary rigor to popular treatments of the subject, insisting that context and conditions of promises must be carefully discerned.",
    quote: "Before a promise of God can be rightly applied to oneself, the soul must discover to whom it is addressed, under what conditions it is given, and upon what basis it rests.",
    contribution: "Pink's covenant framework helped readers distinguish unconditional promises (rooted in God's sovereign will) from conditional ones (requiring human response), providing a theological map for navigating Scripture's many promises responsibly.",
  },
  {
    id: "carson-da",
    name: "D.A. Carson",
    era: "b. 1946 · Reformed Evangelical",
    context: "NT Scholar, Trinity Evangelical Divinity School",
    bio: "Donald Arthur Carson, Research Professor of NT at Trinity Evangelical Divinity School and co-founder of The Gospel Coalition, is among the most influential evangelical scholars of his generation. His commentary on 2 Corinthians addresses the nature of divine promises centrally. Carson emphasizes that all of God's promises find their yes and amen in Christ (2 Cor. 1:20) — Christ is the hermeneutical key for every promise.",
    quote: "The promises of God are not raw materials to be deployed in theological argument; they are invitations into a person. Every promise points to Christ, and every promise is fulfilled in Christ.",
    contribution: "Carson's Christ-centered hermeneutic for reading God's promises shaped a generation of evangelical preachers. His emphasis on 2 Corinthians 1:20 keeps promise-claiming from becoming transactional and grounds it in relational union with Christ.",
  },
  {
    id: "henry-m",
    name: "Matthew Henry",
    era: "1662–1714 · Nonconformist",
    context: "Author of the Complete Commentary",
    bio: "Matthew Henry, Welsh-born nonconformist minister, produced his monumental six-volume Commentary on the Whole Bible (1704–1714). His practical, devotional approach made the promises of Scripture accessible to ordinary believers. Henry was remarkable for synthesizing doctrinal precision with warm application — rarely commenting on a promise without explaining what it means and how to live in its light.",
    quote: "A promise from God may very well outweigh a thousand dangers. Let us always meet a threatening providence with a promising Scripture.",
    contribution: "Henry's commentary remains among the most read in church history. He modeled how to hold doctrine and devotion together — showing readers how to stand on promises during difficulty. His influence on preachers from Whitefield to Spurgeon (who read it four times on his knees) is incalculable.",
  },
  {
    id: "tada-jet",
    name: "Joni Eareckson Tada",
    era: "b. 1949 · Reformed Evangelical",
    context: "Disability Advocate & Promise Theologian",
    bio: "Joni Eareckson Tada, founder of Joni and Friends, has spent over 55 years as a quadriplegic exploring what it means to stand on the promises of God in severe suffering. Her book A Place of Healing (2010) wrestles directly with promises of healing and sovereignty. Her theology of promise is forged in lived experience — she does not read the promises of God from a comfortable chair.",
    quote: "God's promises are not written in the language of ease. They were written to people in dungeons, on battlefields, in exile, in grief. If they held then, they will hold now.",
    contribution: "Tada's life and writing gave the church a robust theology of suffering and promise. She demonstrated that claiming God's promises does not mean expecting them to eliminate suffering but trusting they are sufficient within it — essential reading for anyone wrestling with unanswered prayer.",
  },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const color = CATEGORY_COLORS[category] ?? "#6B4FBB";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 9999,
        fontSize: 11,
        fontWeight: 600,
        background: color + "22",
        color: color,
        border: `1px solid ${color}44`,
        letterSpacing: "0.03em",
      }}
    >
      {category}
    </span>
  );
}

interface PromiseCardProps {
  promise: BiblePromise;
  claimCount: number;
  isSaved: boolean;
  isClaimed: boolean;
  onClaim: (id: string) => void;
  onSave: (id: string) => void;
  onCopy: (id: string) => void;
  justClaimed: boolean;
  justCopied: boolean;
}

function PromiseCard({
  promise,
  claimCount,
  isSaved,
  isClaimed,
  onClaim,
  onSave,
  onCopy,
  justClaimed,
  justCopied,
}: PromiseCardProps) {
  const [conditionExpanded, setConditionExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#12121F",
        border: "1px solid #1E1E32",
        borderRadius: 16,
        padding: "20px 22px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "border-color 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Featured glow strip */}
      {promise.featured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #6B4FBB, #00FF88)",
          }}
        />
      )}

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          <CategoryBadge category={promise.category} />
          <span
            style={{
              fontSize: 11,
              color: "#9898B3",
              background: "#1E1E32",
              borderRadius: 9999,
              padding: "2px 8px",
            }}
          >
            {promise.testament === "Old Testament" ? "OT" : "NT"}
          </span>
          {promise.condition && (
            <span
              style={{
                fontSize: 11,
                color: "#BB874F",
                background: "#BB874F22",
                border: "1px solid #BB874F44",
                borderRadius: 9999,
                padding: "2px 8px",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => setConditionExpanded((v) => !v)}
              title="This promise has a condition"
            >
              🔐 Conditional
            </span>
          )}
        </div>
        <button
          onClick={() => onSave(promise.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
            color: isSaved ? "#FFD700" : "#9898B3",
            padding: "2px 4px",
            flexShrink: 0,
            transition: "color 0.15s, transform 0.15s",
            transform: isSaved ? "scale(1.15)" : "scale(1)",
          }}
          aria-label={isSaved ? "Unsave promise" : "Save promise"}
          title={isSaved ? "Remove from saved" : "Save to My Claims"}
        >
          ★
        </button>
      </div>

      {/* Verse text */}
      <p
        style={{
          color: "#F2F2F8",
          fontSize: 15,
          lineHeight: 1.7,
          margin: 0,
          fontStyle: "italic",
        }}
      >
        &ldquo;{promise.verse}&rdquo;
      </p>

      {/* Reference */}
      <p
        style={{
          color: "#00FF88",
          fontSize: 13,
          fontWeight: 700,
          margin: 0,
          letterSpacing: "0.04em",
        }}
      >
        — {promise.reference}
      </p>

      {/* Condition text (expanded) */}
      {promise.condition && conditionExpanded && promise.conditionText && (
        <div
          style={{
            background: "#BB874F18",
            border: "1px solid #BB874F44",
            borderRadius: 8,
            padding: "10px 14px",
            fontSize: 13,
            color: "#BB874F",
            lineHeight: 1.6,
          }}
        >
          <span style={{ fontWeight: 700 }}>Condition: </span>
          {promise.conditionText}
        </div>
      )}

      {/* Footer actions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          marginTop: 4,
          flexWrap: "wrap",
        }}
      >
        {/* Claim button */}
        <button
          onClick={() => onClaim(promise.id)}
          style={{
            background: isClaimed
              ? "linear-gradient(135deg, #00FF8844, #6B4FBB44)"
              : "linear-gradient(135deg, #00FF88, #6B4FBB)",
            color: isClaimed ? "#00FF88" : "#07070F",
            border: isClaimed ? "1px solid #00FF8866" : "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          {isClaimed ? "✓ Claimed" : "Claim This Promise"}
          {justClaimed && (
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#00FF88",
                animation: "fadeUp 0.6s ease forwards",
              }}
            >
              +1
            </span>
          )}
        </button>

        {/* Right side: claim count + copy */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "#9898B3", fontSize: 12 }}>
            🙌 {claimCount.toLocaleString()} claimed
          </span>
          <button
            onClick={() => onCopy(promise.id)}
            style={{
              background: justCopied ? "#00FF8822" : "#1E1E32",
              border: `1px solid ${justCopied ? "#00FF88" : "#1E1E32"}`,
              color: justCopied ? "#00FF88" : "#9898B3",
              borderRadius: 6,
              padding: "5px 10px",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            title="Copy verse to clipboard"
          >
            {justCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function PromisesPage() {
  // ── State: localStorage-backed ──────────────────────────────────────────
  const [savedSet, setSavedSet] = useState<Set<string>>(() => loadSet("vine_promises_saved"));
  const [claimedSet, setClaimedSet] = useState<Set<string>>(() => loadSet("vine_promises_claimed"));
  const [claimCounts, setClaimCounts] = useState<Record<string, number>>(() => loadClaimCounts());

  // ── State: UI ────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<"all" | "category" | "myclaims" | "thinkers">("all");
  const [selectedThinker, setSelectedThinker] = useState("spurgeon-ch");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [testamentFilter, setTestamentFilter] = useState<"All" | "Old Testament" | "New Testament">("All");
  const [showConditionalOnly, setShowConditionalOnly] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  // Transient animation state
  const [justClaimed, setJustClaimed] = useState<Record<string, boolean>>({});
  const [justCopied, setJustCopied] = useState<Record<string, boolean>>({});

  // ── Derived counts ───────────────────────────────────────────────────────
  const getClaimCount = (id: string): number => {
    const base = SEED_PROMISES.find((p) => p.id === id)?.claimCount ?? 0;
    return base + (claimCounts[id] ?? 0);
  };

  const userTotalClaims = claimedSet.size;
  const userTotalSaved = savedSet.size;

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleClaim = useCallback(
    (id: string) => {
      setClaimedSet((prev) => {
        const next = new Set(prev);
        if (!next.has(id)) {
          next.add(id);
          saveSet("vine_promises_claimed", next);

          setClaimCounts((prevCounts) => {
            const nextCounts = { ...prevCounts, [id]: (prevCounts[id] ?? 0) + 1 };
            saveClaimCounts(nextCounts);
            return nextCounts;
          });

          setJustClaimed((jc) => ({ ...jc, [id]: true }));
          setTimeout(() => setJustClaimed((jc) => ({ ...jc, [id]: false })), 800);
        }
        return next;
      });
    },
    []
  );

  const handleSave = useCallback((id: string) => {
    setSavedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveSet("vine_promises_saved", next);
      return next;
    });
  }, []);

  const handleCopy = useCallback((id: string) => {
    const promise = SEED_PROMISES.find((p) => p.id === id);
    if (!promise) return;
    try {
      navigator.clipboard.writeText(`"${promise.verse}" — ${promise.reference}`);
    } catch {
      // fallback silent
    }
    setJustCopied((jc) => ({ ...jc, [id]: true }));
    setTimeout(() => setJustCopied((jc) => ({ ...jc, [id]: false })), 1500);
  }, []);

  const toggleCategory = useCallback((cat: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }, []);

  // ── Filtering ────────────────────────────────────────────────────────────
  const filteredPromises = SEED_PROMISES.filter((p) => {
    const q = searchQuery.toLowerCase();
    if (q && !p.verse.toLowerCase().includes(q) && !p.reference.toLowerCase().includes(q) && !p.topic.toLowerCase().includes(q))
      return false;
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (testamentFilter !== "All" && p.testament !== testamentFilter) return false;
    if (showConditionalOnly && !p.condition) return false;
    return true;
  });

  const claimedPromises = SEED_PROMISES.filter((p) => claimedSet.has(p.id));

  const promisesByCategory = ALL_CATEGORIES.map((cat) => ({
    category: cat,
    promises: SEED_PROMISES.filter((p) => p.category === cat),
  })).filter((g) => g.promises.length > 0);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-14px); }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #07070F; }
        ::-webkit-scrollbar-thumb { background: #1E1E32; border-radius: 3px; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#07070F",
          color: "#F2F2F8",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          paddingBottom: 60,
        }}
      >
        {/* ── Hero Header ─────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(160deg, #12121F 0%, #0D0D1A 60%, #07070F 100%)",
            borderBottom: "1px solid #1E1E32",
            padding: "48px 24px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative orbs */}
          <div
            style={{
              position: "absolute",
              top: -60,
              left: "10%",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "radial-gradient(circle, #6B4FBB22 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -40,
              right: "8%",
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, #00FF8818 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#6B4FBB22",
              border: "1px solid #6B4FBB44",
              borderRadius: 9999,
              padding: "6px 16px",
              fontSize: 12,
              color: "#6B4FBB",
              fontWeight: 700,
              marginBottom: 20,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            📖 Scripture Promises
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              margin: "0 0 12px",
              background: "linear-gradient(135deg, #F2F2F8 0%, #00FF88 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            God&rsquo;s Promises
          </h1>
          <p
            style={{
              color: "#9898B3",
              fontSize: 16,
              margin: "0 0 32px",
              fontStyle: "italic",
            }}
          >
            &ldquo;Every promise is yes in Christ Jesus&rdquo; &mdash; 2 Corinthians 1:20
          </p>

          {/* Stats Banner */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Promises Claimed", value: userTotalClaims, color: "#00FF88", icon: "🙌" },
              { label: "Promises Saved", value: userTotalSaved, color: "#6B4FBB", icon: "★" },
              { label: "Total in Collection", value: SEED_PROMISES.length, color: "#4F8BBB", icon: "📖" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: 12,
                  padding: "14px 22px",
                  minWidth: 130,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{stat.icon}</div>
                <div
                  style={{ fontSize: 24, fontWeight: 800, color: stat.color, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 11, color: "#9898B3", marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────── */}
        <div
          style={{
            borderBottom: "1px solid #1E1E32",
            background: "#0A0A16",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              gap: 2,
              overflowX: "auto",
            }}
          >
            {(
              [
                { key: "all", label: "All Promises", count: SEED_PROMISES.length },
                { key: "category", label: "By Category", count: ALL_CATEGORIES.length },
                { key: "myclaims", label: "My Claims", count: userTotalClaims },
                { key: "thinkers", label: "🎓 Thinkers", count: VOICES_PROM.length },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab.key ? "2px solid #00FF88" : "2px solid transparent",
                  color: activeTab === tab.key ? "#F2F2F8" : "#9898B3",
                  fontWeight: activeTab === tab.key ? 700 : 500,
                  fontSize: 14,
                  padding: "14px 18px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {tab.label}
                <span
                  style={{
                    background: activeTab === tab.key ? "#00FF8822" : "#1E1E32",
                    color: activeTab === tab.key ? "#00FF88" : "#9898B3",
                    borderRadius: 9999,
                    padding: "1px 7px",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>
          {/* ── Tab: All Promises ───────────────────────────────────── */}
          {activeTab === "all" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Filters */}
              <div
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: 14,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {/* Search */}
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#9898B3",
                      fontSize: 16,
                      pointerEvents: "none",
                    }}
                  >
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="Search verses, references, topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#07070F",
                      border: "1px solid #1E1E32",
                      borderRadius: 10,
                      padding: "11px 14px 11px 40px",
                      color: "#F2F2F8",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                {/* Category pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["All", ...ALL_CATEGORIES].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        background:
                          selectedCategory === cat
                            ? (CATEGORY_COLORS[cat] ?? "#6B4FBB") + "33"
                            : "#07070F",
                        border: `1px solid ${
                          selectedCategory === cat
                            ? CATEGORY_COLORS[cat] ?? "#6B4FBB"
                            : "#1E1E32"
                        }`,
                        color:
                          selectedCategory === cat
                            ? CATEGORY_COLORS[cat] ?? "#6B4FBB"
                            : "#9898B3",
                        borderRadius: 9999,
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Testament + Conditional row */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    {(["All", "Old Testament", "New Testament"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTestamentFilter(t)}
                        style={{
                          background: testamentFilter === t ? "#6B4FBB33" : "#07070F",
                          border: `1px solid ${testamentFilter === t ? "#6B4FBB" : "#1E1E32"}`,
                          color: testamentFilter === t ? "#6B4FBB" : "#9898B3",
                          borderRadius: 8,
                          padding: "5px 12px",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {t === "Old Testament" ? "OT" : t === "New Testament" ? "NT" : t}
                      </button>
                    ))}
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      cursor: "pointer",
                      color: "#9898B3",
                      fontSize: 13,
                      fontWeight: 600,
                      marginLeft: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={showConditionalOnly}
                      onChange={(e) => setShowConditionalOnly(e.target.checked)}
                      style={{ accentColor: "#6B4FBB", width: 15, height: 15, cursor: "pointer" }}
                    />
                    Show Conditional Only
                  </label>

                  <span style={{ marginLeft: "auto", color: "#9898B3", fontSize: 12 }}>
                    {filteredPromises.length} of {SEED_PROMISES.length} promises
                  </span>
                </div>
              </div>

              {/* Promise grid */}
              {filteredPromises.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#9898B3",
                    fontSize: 15,
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
                  No promises match your filters. Try adjusting your search.
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 18,
                  }}
                >
                  {filteredPromises.map((p) => (
                    <PromiseCard
                      key={p.id}
                      promise={p}
                      claimCount={getClaimCount(p.id)}
                      isSaved={savedSet.has(p.id)}
                      isClaimed={claimedSet.has(p.id)}
                      onClaim={handleClaim}
                      onSave={handleSave}
                      onCopy={handleCopy}
                      justClaimed={!!justClaimed[p.id]}
                      justCopied={!!justCopied[p.id]}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Tab: By Category ────────────────────────────────────── */}
          {activeTab === "category" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {promisesByCategory.map(({ category, promises }) => {
                const isCollapsed = collapsedCategories.has(category);
                const color = CATEGORY_COLORS[category] ?? "#6B4FBB";
                return (
                  <div
                    key={category}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    {/* Category header */}
                    <button
                      onClick={() => toggleCategory(category)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        borderBottom: isCollapsed ? "none" : "1px solid #1E1E32",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        gap: 12,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: "#F2F2F8",
                            fontWeight: 700,
                            fontSize: 16,
                          }}
                        >
                          {category}
                        </span>
                        <span
                          style={{
                            background: color + "22",
                            color: color,
                            borderRadius: 9999,
                            padding: "2px 8px",
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {promises.length}
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#9898B3",
                          fontSize: 16,
                          transform: isCollapsed ? "rotate(0deg)" : "rotate(90deg)",
                          transition: "transform 0.2s",
                          display: "inline-block",
                        }}
                      >
                        ›
                      </span>
                    </button>

                    {/* Promises inside category */}
                    {!isCollapsed && (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                          gap: 16,
                          padding: 16,
                        }}
                      >
                        {promises.map((p) => (
                          <PromiseCard
                            key={p.id}
                            promise={p}
                            claimCount={getClaimCount(p.id)}
                            isSaved={savedSet.has(p.id)}
                            isClaimed={claimedSet.has(p.id)}
                            onClaim={handleClaim}
                            onSave={handleSave}
                            onCopy={handleCopy}
                            justClaimed={!!justClaimed[p.id]}
                            justCopied={!!justCopied[p.id]}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Tab: My Claims ──────────────────────────────────────── */}
          {activeTab === "myclaims" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Summary card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #6B4FBB22, #00FF8818)",
                  border: "1px solid #6B4FBB44",
                  borderRadius: 14,
                  padding: "20px 24px",
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      color: "#00FF88",
                      lineHeight: 1,
                    }}
                  >
                    {userTotalClaims}
                  </div>
                  <div style={{ color: "#9898B3", fontSize: 13, marginTop: 4 }}>
                    Promises Claimed
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      color: "#6B4FBB",
                      lineHeight: 1,
                    }}
                  >
                    {userTotalSaved}
                  </div>
                  <div style={{ color: "#9898B3", fontSize: 13, marginTop: 4 }}>
                    Promises Saved
                  </div>
                </div>
                <p
                  style={{
                    color: "#9898B3",
                    fontSize: 14,
                    margin: 0,
                    maxWidth: 360,
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    marginLeft: "auto",
                  }}
                >
                  &ldquo;He who promised is faithful.&rdquo; &mdash; Hebrews 10:23
                </p>
              </div>

              {/* Claimed promises grid */}
              {claimedPromises.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#9898B3",
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🤲</div>
                  <p style={{ fontSize: 17, fontWeight: 600, color: "#F2F2F8", margin: "0 0 8px" }}>
                    No promises claimed yet
                  </p>
                  <p style={{ fontSize: 14, margin: 0 }}>
                    Browse All Promises and click &ldquo;Claim This Promise&rdquo; to stand on
                    God&rsquo;s Word.
                  </p>
                  <button
                    onClick={() => setActiveTab("all")}
                    style={{
                      marginTop: 20,
                      background: "linear-gradient(135deg, #00FF88, #6B4FBB)",
                      color: "#07070F",
                      border: "none",
                      borderRadius: 10,
                      padding: "10px 24px",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Browse Promises
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 18,
                  }}
                >
                  {claimedPromises.map((p) => (
                    <PromiseCard
                      key={p.id}
                      promise={p}
                      claimCount={getClaimCount(p.id)}
                      isSaved={savedSet.has(p.id)}
                      isClaimed={true}
                      onClaim={handleClaim}
                      onSave={handleSave}
                      onCopy={handleCopy}
                      justClaimed={!!justClaimed[p.id]}
                      justCopied={!!justCopied[p.id]}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "thinkers" && (() => {
            const t = VOICES_PROM.find(v => v.id === selectedThinker)!;
            return (
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                  {VOICES_PROM.map(v => (
                    <button key={v.id} onClick={() => setSelectedThinker(v.id)}
                      style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedThinker === v.id ? "rgba(0,255,136,0.4)" : "#1E1E32"}`, background: selectedThinker === v.id ? "rgba(0,255,136,0.08)" : "#12121F", cursor: "pointer" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: selectedThinker === v.id ? "#00FF88" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                      <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                    </button>
                  ))}
                </div>
                <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
                  <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{t.context}</div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{t.name}</h2>
                  <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{t.era}</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{t.bio}</p>
                  <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #00FF88", marginBottom: 24 }}>
                    <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{t.contribution}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </>
  );
}
