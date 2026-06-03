"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DIFFICULTY_FILTERS = ["All", "Beginner", "Intermediate", "Advanced"];

const CHALLENGES = [
  {
    name: "The One-Year Bible (M'Cheyne Plan)",
    creator: "Robert Murray M'Cheyne",
    difficulty: "Intermediate",
    duration: "1 year",
    daily_time: "~20 minutes",
    color: PURPLE,
    description: "Created by Scottish pastor Robert Murray M'Cheyne in 1842, this plan takes you through the Old Testament once and the New Testament and Psalms twice in one year. Each day you read four passages: an OT chapter, an NT chapter, a Psalm, and a Proverb (or back-and-forth). The beauty is the cross-references that emerge naturally between simultaneously-read passages.",
    daily_reading: "2 Old Testament chapters + 1 New Testament chapter + 1 Psalm passage",
    strengths: "Historic; four concurrent reading tracks keep daily reading varied; cross-references between tracks are illuminating; you read the entire Bible in one year",
    ideal_for: "Christians who want to read the whole Bible in a year with structured variety",
    app: "YouVersion has a M'Cheyne plan; also available at mcheyne.info",
    tip: "Don't try to perfectly analyze every chapter as you go. The goal is breadth — reading large sections of Scripture at a pace that gives you the whole narrative. Notes and study follow later.",
    initials: "MCH",
  },
  {
    name: "The Chronological Bible",
    creator: "Multiple publishers (ESV Chronological, NIV Chronological)",
    difficulty: "Intermediate",
    duration: "1 year",
    daily_time: "~20 minutes",
    color: "#3B82F6",
    description: "Arranges all Bible passages in the order they occurred historically rather than the order they appear in the canon. Job is read during the patriarchal period, the Psalms are integrated with David's life, Paul's letters are read alongside the Acts narrative. This gives you an unprecedented sense of the flow of biblical history and how different books relate to each other.",
    daily_reading: "~3-4 pages per day, following the chronological arrangement",
    strengths: "Dramatically improves understanding of biblical narrative flow; helps you see how the books relate; the Bible Recap podcast by Tara-Leigh Cobble follows this plan perfectly",
    ideal_for: "Christians who want to understand the grand story of Scripture more deeply; those frustrated by jumping back and forth in the canon",
    app: "The Bible Recap podcast follows this plan; YouVersion offers 'Chronological' plans",
    tip: "Pair with Tara-Leigh Cobble's The Bible Recap podcast — she does a 7-10 minute daily recap of the previous day's reading. This is one of the best Bible reading companion tools available.",
    initials: "CHR",
  },
  {
    name: "Canonical Order — New Testament First (30 Days)",
    creator: "Various",
    difficulty: "Beginner",
    duration: "30 days",
    daily_time: "~30 minutes",
    color: GREEN,
    description: "Read the entire New Testament in 30 days — roughly 8-9 chapters per day. This is the ideal starting point for new believers or anyone who wants to read the core Christian documents in a single sustained push. Reading the New Testament in a month rather than a year gives you the narrative sweep in a way that daily chapters never quite achieve.",
    daily_reading: "8-9 New Testament chapters daily",
    strengths: "Achievable; gives you the whole New Testament story; momentum builds; you see connections between books that slow reading misses",
    ideal_for: "New believers; anyone who has never read through the New Testament; as a refresher for experienced Christians",
    app: "Any Bible app with the New Testament; no special plan needed",
    tip: "Read in a narrative translation (NIV, NLT, ESV) rather than a study Bible with heavy notes. The goal is the text, not the footnotes. Read like a novel.",
    initials: "NT30",
  },
  {
    name: "The Bible in 90 Days",
    creator: "Ted Cooper Jr.",
    difficulty: "Advanced",
    duration: "90 days",
    daily_time: "~45-60 minutes",
    color: "#EF4444",
    description: "Read the entire Bible — all 66 books — in 90 days. That's approximately 12-14 pages of Bible text per day. This plan was developed by Ted Cooper Jr. and has been adopted by hundreds of churches as a congregational challenge. The pace is demanding but the effect is transformative: you see the Bible as a unified story rather than a collection of disconnected texts.",
    daily_reading: "12-14 pages daily (~17 chapters)",
    strengths: "Dramatic effect on biblical literacy; forces you to see the Bible whole; many churches do this together as a community experience; 90 days is achievable",
    ideal_for: "Serious students of Scripture; anyone who has never read the whole Bible; church community challenges",
    app: "B90X app; the plan is widely available online; many churches run it as a January-March challenge",
    tip: "Do not use a study Bible. Get a Reader's Bible (no verse numbers, no cross-references, no footnotes) — the ESV Reader's Bible is ideal. This removes the temptation to stop and analyze.",
    initials: "B90",
  },
  {
    name: "The Bible Project Reading Plan",
    creator: "The Bible Project",
    difficulty: "Beginner",
    duration: "1 year",
    daily_time: "~15-20 minutes",
    color: "#F59E0B",
    description: "The Bible Project created a reading plan that pairs daily Scripture passages with their animated video explanations. Each week, you watch a short Bible Project video introducing the book you're reading, then read through that book over the following days. This gives you context before diving into the text.",
    daily_reading: "~3-4 chapters plus optional video each week",
    strengths: "Videos provide excellent context; visually engaging for visual learners; theological themes are highlighted; free",
    ideal_for: "Visual learners; new believers; anyone who gets lost in the Old Testament without context",
    app: "Read Scripture app (by The Bible Project); also available on their website",
    tip: "Watch the video for each book before reading it. The 8-12 minute videos dramatically increase comprehension, especially for OT books like Leviticus, Numbers, and Chronicles.",
    initials: "TBP",
  },
  {
    name: "The Book at a Time (Epistle Immersion)",
    creator: "Various",
    difficulty: "Beginner",
    duration: "Ongoing",
    daily_time: "~15-30 minutes",
    color: "#10B981",
    description: "Read one entire book of the Bible per week (or month). Start with a short epistle: Philippians (4 chapters), Colossians (4), Ephesians (6), Galatians (6). Read the whole book in one sitting on Monday, then read it again every day of the week. By Saturday, you know the book. This is arguably the most effective way to absorb Paul's letters, which were written to be read aloud in a single sitting.",
    daily_reading: "The same book every day, all the way through",
    strengths: "Deep immersion in a single text; you begin to know it by heart; context is always available because you read the whole thing; very effective for epistles",
    ideal_for: "Anyone who wants to know specific books well; particularly effective for Philippians, Galatians, Ephesians, Romans",
    app: "Dwell audio app is excellent for this — listen to the same book repeatedly while commuting or exercising",
    tip: "Start with Philippians (4 chapters). Read it every day for a week. By day 7 you will know it in a way that no commentary can replicate. Then move to Colossians.",
    initials: "BAT",
  },
  {
    name: "The Daily Office (Common Prayer)",
    creator: "Ancient church practice; Anglican Book of Common Prayer",
    difficulty: "Intermediate",
    duration: "Ongoing",
    daily_time: "~20-25 minutes",
    color: "#6366F1",
    description: "The Daily Office — Morning Prayer and Evening Prayer — is the ancient Christian practice of structured daily Scripture reading and prayer inherited from Jewish temple practice. The Anglican lectionary takes you through the Psalms every 30 days and through the entire Bible in two years. Praying the Office connects you to 2,000 years of Christians who have prayed the same words.",
    daily_reading: "2 Scripture passages (OT and NT) + Psalms + set prayers",
    strengths: "Historical continuity with the whole church; structured prayer not just reading; Psalms every month; connects to liturgical calendar",
    ideal_for: "Christians who want to combine structured prayer with Scripture reading; those interested in liturgical Christianity",
    app: "Pray As You Go app (Jesuit); Daily Office app (Anglican); Common Prayer app",
    tip: "The Daily Office is most powerful when done in community — even just two people praying together at home. The 'we' of corporate prayer is part of the point.",
    initials: "DO",
  },
  {
    name: "The 5x5x5 Reading Plan",
    creator: "The Bible App / YouVersion",
    difficulty: "Beginner",
    duration: "1 year",
    daily_time: "~10 minutes",
    color: "#EC4899",
    description: "5 days a week, 5 minutes a day, plus 5 minutes of reflection. This plan prioritizes consistency over quantity — the research on habit formation consistently shows that small, regular practices outperform occasional heroic ones. The 5x5x5 plan builds the habit of daily Bible reading and creates space for reflection, not just consumption.",
    daily_reading: "1 chapter + 5 minutes of reflection",
    strengths: "Extremely achievable; consistent with habit formation research; reflection time; 5 days leaves 2 for catch-up without failure",
    ideal_for: "New believers; anyone trying to build or restore a daily Bible reading habit after a gap",
    app: "YouVersion Bible app has this plan; also can self-direct",
    tip: "The 5 minutes of reflection is the most important part. Don't skip it to read more. Ask: What does this passage teach me about God? What does it teach me about humanity? Is there something to confess, receive, or do?",
    initials: "5X5",
  },
  {
    name: "Read the Bible in a Week (Intensive)",
    creator: "Various challenge organizers",
    difficulty: "Advanced",
    duration: "7 days",
    daily_time: "5-7 hours",
    color: "#A855F7",
    description: "One of the most intense spiritual experiences available: read the entire Bible in 7 days — approximately 5-7 hours of reading per day. This is a retreat-style challenge, not a regular rhythm. Done once, it permanently changes your sense of the Bible's unity and narrative power. Many Christians describe this as the single most transformative week of their spiritual lives.",
    daily_reading: "Day 1: Genesis-Numbers; Day 2: Deuteronomy-1 Samuel; Day 3: 2 Samuel-Psalms; Day 4: Proverbs-Isaiah; Day 5: Jeremiah-Ezekiel; Day 6: Daniel-Malachi + Matthew-Acts; Day 7: Romans-Revelation",
    strengths: "Permanent impact on biblical literacy; extraordinary sense of the Bible's unity; a week you will never forget",
    ideal_for: "Serious students of Scripture; annual vacation challenge; seminary students; clergy retreat",
    app: "Dwell audio app or listening to the Bible on audio while exercising/driving can supplement visual reading",
    tip: "Use an audio Bible for large portions (especially genealogies and lists). YouVersion and the ESV app have full audio. The goal is the narrative experience — you can study details later.",
    initials: "7DAY",
  },
];

export default function BibleReadingChallengesPage() {
  const [difficulty, setDifficulty] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = CHALLENGES.filter(c => difficulty === "All" || c.difficulty === difficulty);

  const DIFFICULTY_COLOR: Record<string, string> = {
    Beginner: GREEN,
    Intermediate: "#F59E0B",
    Advanced: "#EF4444",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible Reading Challenges</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            From reading the whole Bible in 7 days to one chapter a day — every level, every schedule, every goal. The best plan is the one you'll actually do.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, textAlign: "center" }}>
          {[
            { label: "Beginner", desc: "Building the habit", color: GREEN },
            { label: "Intermediate", desc: "Full Bible in a year", color: "#F59E0B" },
            { label: "Advanced", desc: "Intensive immersion", color: "#EF4444" },
          ].map((l, i) => (
            <div key={i}>
              <div style={{ color: l.color, fontWeight: 800, fontSize: 14 }}>{l.label}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>{l.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {DIFFICULTY_FILTERS.map(d => (
            <button key={d} onClick={() => setDifficulty(d)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${difficulty === d ? GREEN : BORDER}`, background: difficulty === d ? `${GREEN}15` : "transparent", color: difficulty === d ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {d}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((c) => (
            <div key={c.name}>
              <button onClick={() => setExpanded(expanded === c.name ? null : c.name)}
                style={{ width: "100%", background: expanded === c.name ? `${c.color}10` : CARD, border: `1px solid ${expanded === c.name ? c.color + "40" : BORDER}`, borderRadius: expanded === c.name ? "12px 12px 0 0" : 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {c.initials}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{c.name}</div>
                    <div style={{ display: "flex", gap: 10, marginTop: 3, flexWrap: "wrap" }}>
                      <span style={{ color: MUTED, fontSize: 11 }}>{c.duration} · {c.daily_time}/day</span>
                      <span style={{ color: DIFFICULTY_COLOR[c.difficulty], fontSize: 11, fontWeight: 700 }}>{c.difficulty}</span>
                    </div>
                  </div>
                </div>
                <span style={{ color: c.color, flexShrink: 0, marginLeft: 8 }}>{expanded === c.name ? "−" : "+"}</span>
              </button>

              {expanded === c.name && (
                <div style={{ background: BG, border: `1px solid ${c.color}20`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 22 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 12, fontStyle: "italic" }}>Created by {c.creator}</div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{c.description}</p>

                  <div style={{ background: `${c.color}08`, border: `1px solid ${c.color}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: c.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>DAILY READING</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{c.daily_reading}</p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STRENGTHS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{c.strengths}</p>
                    </div>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IDEAL FOR</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{c.ideal_for}</p>
                    </div>
                  </div>

                  <div style={{ background: "#F59E0B08", border: "1px solid #F59E0B15", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>APPS & TOOLS</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{c.app}</p>
                  </div>

                  <div style={{ background: `${c.color}08`, border: `1px solid ${c.color}15`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: c.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PRO TIP</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{c.tip}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 24, marginTop: 32 }}>
          <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>Which Plan Should I Choose?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { condition: "If you've never read the whole Bible:", recommendation: "Start with NT Only in 30 Days. Then try Bible in 90 Days. Don't start with a one-year plan — the momentum of reading faster is more sustaining." },
              { condition: "If you've read the Bible before but inconsistently:", recommendation: "5x5x5 plan to rebuild the habit, then graduate to M'Cheyne or Chronological." },
              { condition: "If you want maximum depth in specific books:", recommendation: "Book at a Time / Epistle Immersion. Read Philippians every day for a week." },
              { condition: "If you want the most transformative single experience:", recommendation: "Read the Bible in a Week — intensive retreat. Do it once. It permanently reshapes how you see the whole book." },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ color: GREEN, fontSize: 16, flexShrink: 0, marginTop: 2 }}>→</div>
                <div>
                  <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>{r.condition} </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{r.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
