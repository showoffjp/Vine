"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

type Tab = "All Plans" | "Old Testament" | "New Testament" | "Topical" | "How to Use";
const TABS: Tab[] = ["All Plans", "Old Testament", "New Testament", "Topical", "How to Use"];

interface Plan {
  id: string;
  title: string;
  days: number;
  accent: string;
  category: "ot" | "nt" | "topical" | "full";
  description: string;
  forWhom: string;
  schedule: { week: string; readings: string[] }[];
}

const plans: Plan[] = [
  {
    id: "psalms-30",
    title: "Psalms in 30 Days",
    days: 30,
    accent: GOLD,
    category: "ot",
    description: "A journey through 50 of the most beloved Psalms, reading 5 every three days. Perfect for those who need to anchor their emotions in God&rsquo;s Word.",
    forWhom: "For anyone dealing with grief, anxiety, praise, or lament &mdash; the Psalms meet you exactly where you are.",
    schedule: [
      { week: "Week 1: Praise and Trust", readings: ["Psalm 1, 8, 19, 23, 27", "Psalm 34, 46, 51, 63, 84", "Psalm 90, 91, 100, 103, 118"] },
      { week: "Week 2: Lament and Hope", readings: ["Psalm 22, 42, 43, 55, 62", "Psalm 69, 73, 77, 88, 102", "Psalm 107, 121, 130, 139, 143"] },
      { week: "Week 3: Creation and Law", readings: ["Psalm 2, 16, 24, 33, 37", "Psalm 40, 49, 57, 66, 71", "Psalm 86, 93, 95, 96, 97"] },
      { week: "Week 4: Kingdom and Glory", readings: ["Psalm 110, 111, 112, 113, 115", "Psalm 116, 117, 119 (1-48), 119 (49-112), 119 (113-176)", "Psalm 120-134 (Songs of Ascent), 145, 146, 147, 148, 150"] },
    ],
  },
  {
    id: "gospels-90",
    title: "The Four Gospels in 90 Days",
    days: 90,
    accent: GREEN,
    category: "nt",
    description: "Read all four Gospels from beginning to end, spending approximately three weeks on each. Know Jesus as Matthew, Mark, Luke, and John each present him.",
    forWhom: "For new believers, for those revisiting the Gospels, or for anyone wanting to know Jesus more deeply through his life and words.",
    schedule: [
      { week: "Matthew (Weeks 1-3)", readings: ["Matt 1-5: Birth, baptism, temptation, Beatitudes", "Matt 6-10: Lord&rsquo;s Prayer, Sermon on Mount, commissioning", "Matt 11-16: Kingdom parables, feeding thousands, Peter&rsquo;s confession", "Matt 17-22: Transfiguration, entry into Jerusalem", "Matt 23-28: Woes, Olivet Discourse, Passion, Resurrection"] },
      { week: "Mark (Weeks 4-6)", readings: ["Mark 1-4: The servant king acts with authority", "Mark 5-8: Healings, Gentile mission, bread of life", "Mark 9-12: Transfiguration, service, Jerusalem", "Mark 13-16: End times, Passion, empty tomb"] },
      { week: "Luke (Weeks 7-9)", readings: ["Luke 1-4: Infancy narrative, Nazareth sermon", "Luke 5-9: Calling disciples, miraculous catches, transfiguration", "Luke 10-16: Good Samaritan, Lord&rsquo;s Prayer, Prodigal Son", "Luke 17-24: Ten lepers, Zacchaeus, Passion, Emmaus road"] },
      { week: "John (Weeks 10-13)", readings: ["John 1-4: Prologue, water to wine, woman at the well", "John 5-9: I AM sayings begin, blind man healed", "John 10-14: Good shepherd, Lazarus, Upper Room Discourse", "John 15-21: True vine, High Priestly Prayer, Passion, Resurrection"] },
    ],
  },
  {
    id: "paul-letters-60",
    title: "The Letters of Paul in 60 Days",
    days: 60,
    accent: PURPLE,
    category: "nt",
    description: "Read all thirteen Pauline epistles in order of theological weight, spending more time on the major letters and moving through the shorter ones in single sittings.",
    forWhom: "For those who want theological depth &mdash; the letters of Paul contain the most systematic exposition of the gospel in Scripture.",
    schedule: [
      { week: "Romans (Days 1-10)", readings: ["Rom 1-3: The universal need for righteousness", "Rom 4-5: Justified by faith, peace with God", "Rom 6-8: Dead to sin, alive in Christ, no condemnation", "Rom 9-11: The mystery of Israel&rsquo;s salvation", "Rom 12-16: The living sacrifice and life in community"] },
      { week: "1 & 2 Corinthians (Days 11-20)", readings: ["1 Cor 1-4: The wisdom of the cross", "1 Cor 5-10: Church order, idolatry, freedom", "1 Cor 11-16: Lord&rsquo;s Supper, spiritual gifts, resurrection", "2 Cor 1-7: Weakness, ministry, new covenant", "2 Cor 8-13: Generosity, boasting in weakness"] },
      { week: "Galatians through Ephesians (Days 21-32)", readings: ["Gal 1-3: Only one gospel, the law and faith", "Gal 4-6: Sons of God, freedom, fruit of the Spirit", "Eph 1-3: Chosen, grace, the mystery of Christ", "Eph 4-6: One body, put on the new self, armor of God"] },
      { week: "Philippians through Colossians (Days 33-40)", readings: ["Phil 1-4: Joy in every circumstance, the mind of Christ", "Col 1-4: Supremacy of Christ, hidden with Christ above"] },
      { week: "Thessalonians through Philemon (Days 41-50)", readings: ["1 Thess 1-5: Model church, the return of Christ", "2 Thess, 1 Tim 1-6: Godliness in the church", "2 Tim, Titus, Philemon: Paul&rsquo;s pastoral heart"] },
    ],
  },
  {
    id: "bible-year",
    title: "Through the Bible in a Year",
    days: 365,
    accent: BLUE,
    category: "full",
    description: "The classic plan: read 3-4 chapters per day, moving through the entire Old and New Testaments in one year. Includes alternating between OT and NT to maintain narrative momentum.",
    forWhom: "For believers who want the full sweep of God&rsquo;s redemptive story &mdash; from Genesis to Revelation, every page pointing to Christ.",
    schedule: [
      { week: "Q1 (Jan-Mar): Law and History", readings: ["Jan: Genesis 1 &ndash; Exodus 20", "Feb: Exodus 21 &ndash; Numbers 36", "Mar: Deuteronomy + Joshua + Judges"] },
      { week: "Q2 (Apr-Jun): Wisdom and Prophets", readings: ["Apr: Ruth, 1-2 Samuel, 1 Kings", "May: 2 Kings, Job, Psalms 1-75", "Jun: Psalms 76-150, Proverbs, Ecclesiastes"] },
      { week: "Q3 (Jul-Sep): Major and Minor Prophets", readings: ["Jul: Isaiah 1-39, Song of Solomon", "Aug: Isaiah 40-66, Jeremiah 1-29", "Sep: Jeremiah 30-52, Lamentations, Ezekiel"] },
      { week: "Q4 (Oct-Dec): New Testament", readings: ["Oct: Matthew, Mark, Luke", "Nov: John, Acts, Romans, 1 Corinthians", "Dec: 2 Corinthians through Revelation"] },
    ],
  },
  {
    id: "grief-healing",
    title: "Comfort in Grief &mdash; 21 Days",
    days: 21,
    accent: TEAL,
    category: "topical",
    description: "A gentle 21-day journey through Scripture for those who are grieving. Each reading brings you to passages where God meets the brokenhearted.",
    forWhom: "For those who have lost a loved one, a marriage, a dream, or a season of life. God does not avoid our grief &mdash; he enters it.",
    schedule: [
      { week: "Week 1: God With Us in the Valley", readings: ["Psalm 23 &mdash; The Lord is my shepherd", "Psalm 34:18 &mdash; Near to the brokenhearted", "Psalm 46 &mdash; God is our refuge and strength", "Psalm 62 &mdash; My soul waits for God alone", "Psalm 73 &mdash; When good men suffer", "Isaiah 43:1-7 &mdash; Do not fear, I have redeemed you", "John 11:1-44 &mdash; Jesus wept"] },
      { week: "Week 2: Lament and Honest Prayer", readings: ["Psalm 88 &mdash; The darkest psalm", "Lamentations 3:1-33 &mdash; Affliction and hope", "Psalm 22 &mdash; My God, my God, why?", "Psalm 42-43 &mdash; Why are you cast down, O my soul?", "Job 1-2, 38-42 &mdash; Suffering and encounter with God", "Romans 8:18-39 &mdash; Nothing separates us", "2 Corinthians 1:3-11 &mdash; The God of all comfort"] },
      { week: "Week 3: Hope and New Morning", readings: ["Isaiah 40:1-11 &mdash; Comfort, comfort my people", "Revelation 21:1-7 &mdash; No more tears", "1 Thessalonians 4:13-18 &mdash; Hope of resurrection", "John 14:1-6 &mdash; I am the resurrection and the life", "Psalm 30 &mdash; Weeping endures but joy comes", "Romans 5:1-11 &mdash; Suffering produces hope", "Psalm 16 &mdash; In your presence is fullness of joy"] },
    ],
  },
  {
    id: "anxiety-fear",
    title: "When Fear Overwhelms &mdash; 14 Days",
    days: 14,
    accent: ROSE,
    category: "topical",
    description: "Two weeks of Scripture readings for those battling fear and anxiety. Each passage speaks directly to the anxious soul and points toward the peace that surpasses understanding.",
    forWhom: "For anyone dealing with chronic anxiety, sudden fear, health concerns, relational uncertainty, or the unknown future.",
    schedule: [
      { week: "Week 1: Do Not Fear", readings: ["Isaiah 41:10 &mdash; I will uphold you", "Psalm 23 &mdash; I will fear no evil", "Psalm 91 &mdash; Under the shadow of the Almighty", "Psalm 121 &mdash; The Lord is your keeper", "Matthew 6:25-34 &mdash; Do not be anxious", "John 14:27 &mdash; Peace I leave with you", "Philippians 4:4-9 &mdash; The peace of God"] },
      { week: "Week 2: Trust and Rest", readings: ["Psalm 46 &mdash; Be still and know that I am God", "Isaiah 26:3-4 &mdash; Perfect peace", "Proverbs 3:5-6 &mdash; Trust in the Lord", "1 Peter 5:6-11 &mdash; Cast your anxieties on him", "Matthew 11:28-30 &mdash; Come to me, all who are weary", "Romans 8:31-39 &mdash; If God is for us", "Psalm 139 &mdash; You know me completely"] },
    ],
  },
];

export default function ReadingPlansPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("All Plans");
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const filteredPlans = plans.filter((p) => {
    if (activeTab === "All Plans") return true;
    if (activeTab === "Old Testament") return p.category === "ot";
    if (activeTab === "New Testament") return p.category === "nt";
    if (activeTab === "Topical") return p.category === "topical";
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0A0A18 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: BLUE, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Reading Plans
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, color: TEXT, lineHeight: 1.15, marginBottom: 16 }}>
              Read the Bible with Purpose
            </h1>
            <p style={{ fontSize: 17, color: MUTED, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Structured plans for every season &mdash; whether you are starting fresh, going deep, or finding comfort in a hard season. &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo; &mdash; Ps. 119:105
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, overflowX: "auto" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 0, padding: "0 24px" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "14px 20px",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? `2px solid ${BLUE}` : "2px solid transparent",
                  color: activeTab === tab ? BLUE : MUTED,
                  fontWeight: activeTab === tab ? 700 : 400,
                  fontSize: 14,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px" }}>
          {/* Plans list */}
          {activeTab !== "How to Use" && (
            <div style={{ display: "grid", gap: 24 }}>
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${expandedPlan === plan.id ? plan.accent : BORDER}`,
                    borderRadius: 16,
                    overflow: "hidden",
                    transition: "border-color .2s",
                  }}
                >
                  {/* Plan header */}
                  <div
                    style={{ padding: "24px 28px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 20 }}
                    onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  >
                    <div style={{ minWidth: 56, height: 56, borderRadius: 12, background: `${plan.accent}20`, border: `1px solid ${plan.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: plan.accent }}>{plan.days}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                        <h2 style={{ fontSize: 20, fontWeight: 700, color: TEXT, margin: 0 }}>{plan.title}</h2>
                        <span style={{ fontSize: 11, fontWeight: 700, color: plan.accent, background: `${plan.accent}15`, padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 1 }}>
                          {plan.days} Days
                        </span>
                      </div>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: plan.description }} />
                    </div>
                    <div style={{ color: MUTED, fontSize: 20, flexShrink: 0, paddingTop: 4 }}>
                      {expandedPlan === plan.id ? "▲" : "▼"}
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expandedPlan === plan.id && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px 28px" }}>
                      <div style={{ background: `${plan.accent}10`, border: `1px solid ${plan.accent}30`, borderRadius: 10, padding: "12px 16px", marginBottom: 24 }}>
                        <span style={{ fontSize: 12, color: plan.accent, fontWeight: 700 }}>WHO IS THIS FOR? </span>
                        <span style={{ fontSize: 13, color: MUTED }} dangerouslySetInnerHTML={{ __html: plan.forWhom }} />
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: TEXT, marginBottom: 16 }}>Reading Schedule</h3>
                      <div style={{ display: "grid", gap: 16 }}>
                        {plan.schedule.map((s, i) => (
                          <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 20px" }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: plan.accent, marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: s.week }} />
                            <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                              {s.readings.map((r, j) => (
                                <li key={j} style={{ color: MUTED, fontSize: 13, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: r }} />
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 24, textAlign: "right" }}>
                        <Link
                          href="/bible"
                          style={{ display: "inline-block", padding: "10px 24px", borderRadius: 8, background: plan.accent, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
                        >
                          Start Reading &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* How to Use tab */}
          {activeTab === "How to Use" && (
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 24 }}>How to Use a Reading Plan</h2>
              {[
                {
                  title: "1. Choose a Plan That Fits Your Season",
                  body: "If you are grieving, start with a topical plan built around comfort and lament. If you are new to the Bible, begin with the Gospels. If you are a seasoned believer wanting breadth, try the full-year plan. There is no single right plan &mdash; there is the right plan for where you are right now.",
                },
                {
                  title: "2. Set a Consistent Time",
                  body: "The most effective Bible reading happens at a predictable time. Many believers find mornings most effective &mdash; before the demands of the day crowd in. But if evenings work better for you, commit to that. The goal is consistency, not perfection.",
                },
                {
                  title: "3. Read to Encounter, Not to Finish",
                  body: "Resist the temptation to race through readings just to check a box. Read slowly enough to notice what strikes you. Read looking for Christ &mdash; he is present throughout the whole Bible, from the first verse to the last. Ask: &ldquo;What does this show me about God? About myself? About how to live?&rdquo;",
                },
                {
                  title: "4. Pray Before and After",
                  body: "Open your reading time with a brief prayer of dependence: &ldquo;Lord, open my eyes that I may behold wonderful things out of your law.&rdquo; (Psalm 119:18). After reading, take a moment to respond in prayer &mdash; with gratitude, confession, petition, or simply silence.",
                },
                {
                  title: "5. Miss Days Without Guilt",
                  body: "You will miss days. Life interrupts. Grace means you pick up where you left off without condemnation. The goal is not a perfect streak &mdash; the goal is a lifelong pattern of returning again and again to the Word of God, which &ldquo;shall not return to me empty, but it shall accomplish that which I purpose.&rdquo; (Isaiah 55:11)",
                },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 32px", marginTop: 40 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 12 }}>A Verse for the Journey</h3>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>
                  &ldquo;But his delight is in the law of the Lord, and on his law he meditates day and night. He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers.&rdquo;
                </p>
                <p style={{ color: GOLD, fontSize: 13, marginTop: 8 }}>Psalm 1:2-3</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
