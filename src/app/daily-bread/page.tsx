"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DailyDevotional from "@/components/DailyDevotional";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";

const verseOfTheDay = {
  ref: "Lamentations 3:22-23",
  text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
  translation: "ESV",
};

const morningPrayers = [
  {
    title: "A Prayer for the Morning",
    prayer: [
      "Heavenly Father, as this new day begins, I come to you with an open and grateful heart. Your mercies are new every morning, and I receive this day as a gift from your hand.",
      "Guard my mind and heart today. Let the first thoughts of this morning be thoughts of you &mdash; of your goodness, your faithfulness, and your purposes. Before the demands of the day rush in, let me be still and know that you are God.",
      "Go before me in everything I face today. In every conversation, every decision, every unexpected trial &mdash; let me walk in a manner worthy of the calling I have received, with humility and gentleness and patience. Make me an instrument of your peace.",
      "I commit this day to you. May it be spent for your glory and the good of those around me. In Jesus&rsquo; name, Amen.",
    ],
  },
  {
    title: "A Prayer Against Anxiety",
    prayer: [
      "Lord, I confess that worry has a way of stealing the morning before the day has even begun. My mind runs ahead to all that could go wrong, all that remains unfinished, all that feels beyond my control.",
      "But you have said: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo;",
      "I choose to lay down the weight of my worries at your feet right now. You are the God who holds tomorrow. You neither slumber nor sleep. You know every detail of what I am facing, and you have not left me to face it alone.",
      "Grant me the peace that passes understanding. Let it garrison my heart today. Amen.",
    ],
  },
  {
    title: "A Prayer of Surrender",
    prayer: [
      "Father, I yield this day to you. My plans, my preferences, my timetable &mdash; I hold them loosely. You are the potter; I am the clay. Shape this day according to your purposes, not mine.",
      "Where I am strong, humble me. Where I am weak, strengthen me. Where I am confused, give wisdom. Where I am afraid, let perfect love cast out fear.",
      "You have promised that in all things you work for the good of those who love you. I trust that promise today &mdash; not because I see how it all fits together, but because I know the one who holds it all together.",
      "Have your way, Lord. I am yours. Amen.",
    ],
  },
];

const weeklyVerses = [
  { day: "Sunday", ref: "Psalm 118:24", text: "This is the day that the Lord has made; let us rejoice and be glad in it.", theme: "Joy" },
  { day: "Monday", ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.", theme: "Mercy" },
  { day: "Tuesday", ref: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.", theme: "Trust" },
  { day: "Wednesday", ref: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", theme: "Courage" },
  { day: "Thursday", ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", theme: "Peace" },
  { day: "Friday", ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", theme: "Providence" },
  { day: "Saturday", ref: "Matthew 11:28-29", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart.", theme: "Rest" },
];

const reflectionPrompts = [
  "What is one thing God has been faithful in over the past week?",
  "Where have I been trusting my own understanding rather than God&rsquo;s guidance?",
  "Is there someone I need to forgive &mdash; or forgiveness I need to seek?",
  "What fear have I been carrying that I have not yet brought to God in prayer?",
  "How has God&rsquo;s Word shaped my thinking and decisions recently?",
  "Where am I most aware of my need for God&rsquo;s grace today?",
  "What would it look like to abide in Christ more fully this week?",
];

type Tab = "Devotional" | "Morning Prayer" | "Verse for the Week" | "Reflection";
const TABS: Tab[] = ["Devotional", "Morning Prayer", "Verse for the Week", "Reflection"];

export default function DailyBreadPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Devotional");
  const [activePrayer, setActivePrayer] = useState(0);
  const [completedPrayers, setCompletedPrayers] = useState<number[]>([]);
  const [todayDay] = useState(() => new Date().getDay());

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const todayVerse = weeklyVerses[todayDay];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0D1A12 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: GREEN, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Daily Bread
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, color: TEXT, lineHeight: 1.15, marginBottom: 16 }}>
              Your Morning with God
            </h1>
            <p style={{ fontSize: 17, color: MUTED, maxWidth: 540, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Fresh devotionals and prayer for every morning. &ldquo;They are new every morning; great is your faithfulness.&rdquo; &mdash; Lam. 3:23
            </p>
            {/* Verse of the day banner */}
            <div style={{ background: "#0D1A12", border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "20px 28px", display: "inline-block", textAlign: "left", maxWidth: 560, width: "100%" }}>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Verse of the Day</div>
              <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.6, margin: "0 0 8px" }}>
                &ldquo;{verseOfTheDay.text}&rdquo;
              </p>
              <div style={{ fontSize: 12, color: MUTED }}>{verseOfTheDay.ref} ({verseOfTheDay.translation})</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, overflowX: "auto" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0, padding: "0 24px" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "14px 22px",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? `2px solid ${GREEN}` : "2px solid transparent",
                  color: activeTab === tab ? GREEN : MUTED,
                  fontWeight: activeTab === tab ? 700 : 400,
                  fontSize: 14,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color .2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
          {/* Devotional Tab */}
          {activeTab === "Devotional" && (
            <div>
              <DailyDevotional />
            </div>
          )}

          {/* Morning Prayer Tab */}
          {activeTab === "Morning Prayer" && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Morning Prayers</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>
                Three prayers to anchor your morning in Scripture. Read one, read all three, or let one become your own.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
                {morningPrayers.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePrayer(i)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: 8,
                      border: `1px solid ${activePrayer === i ? GREEN : BORDER}`,
                      background: activePrayer === i ? `${GREEN}20` : CARD,
                      color: activePrayer === i ? GREEN : MUTED,
                      fontWeight: activePrayer === i ? 700 : 400,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "36px 40px" }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 24 }}>
                  {morningPrayers[activePrayer].title}
                </h3>
                {morningPrayers[activePrayer].prayer.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === morningPrayers[activePrayer].prayer.length - 1 ? TEXT : MUTED, lineHeight: 1.8, marginBottom: 20, fontStyle: i === morningPrayers[activePrayer].prayer.length - 1 ? "italic" : "normal" }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
                <button
                  onClick={() => setCompletedPrayers((prev) => prev.includes(activePrayer) ? prev.filter((x) => x !== activePrayer) : [...prev, activePrayer])}
                  style={{
                    marginTop: 16,
                    padding: "10px 24px",
                    borderRadius: 8,
                    border: "none",
                    background: completedPrayers.includes(activePrayer) ? `${GREEN}30` : GREEN,
                    color: completedPrayers.includes(activePrayer) ? GREEN : "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  {completedPrayers.includes(activePrayer) ? "Prayed ✓" : "Mark as Prayed"}
                </button>
              </div>
              {completedPrayers.length === morningPrayers.length && (
                <div style={{ marginTop: 24, background: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "16px 24px", color: GREEN, fontWeight: 600, textAlign: "center" }}>
                  You have completed all three morning prayers. May God bless your day.
                </div>
              )}
            </div>
          )}

          {/* Verse for the Week Tab */}
          {activeTab === "Verse for the Week" && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>A Verse for Each Day</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>
                Seven verses for seven days. Memorize one, meditate on it, carry it through the week.
              </p>
              <div style={{ display: "grid", gap: 16 }}>
                {weeklyVerses.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${i === todayDay ? GREEN : BORDER}`,
                      borderRadius: 12,
                      padding: "20px 24px",
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ minWidth: 80 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: i === todayDay ? GREEN : MUTED, textTransform: "uppercase", letterSpacing: 1 }}>{v.day}</div>
                      <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{v.theme}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 6px" }}>&ldquo;{v.text}&rdquo;</p>
                      <div style={{ fontSize: 12, color: MUTED }}>{v.ref}</div>
                    </div>
                    {i === todayDay && (
                      <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, background: `${GREEN}15`, padding: "4px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>Today</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reflection Tab */}
          {activeTab === "Reflection" && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Daily Reflection Questions</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>
                Seven questions to help you examine your heart and grow in self-awareness before God. Take one question per day, or sit with all of them.
              </p>
              <div style={{ display: "grid", gap: 16 }}>
                {reflectionPrompts.map((prompt, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "20px 24px",
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ minWidth: 32, height: 32, borderRadius: "50%", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, paddingTop: 4 }} dangerouslySetInnerHTML={{ __html: prompt }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 32px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 12 }}>A Closing Thought</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Reflection is not self-absorption &mdash; it is the work of bringing yourself honestly before God. The Psalms are full of this kind of prayer: raw, searching, and ultimately resting in God&rsquo;s steadfast love. &ldquo;Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting.&rdquo; (Psalm 139:23&ndash;24)" }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
