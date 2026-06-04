"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Plus,
  Trash2,
  ChevronRight,
  Heart,
  Calendar,
  Star,
} from "lucide-react";

interface GratitudeEntry {
  id: string;
  date: string;
  items: string[];
  verse?: string;
  mood: 1 | 2 | 3 | 4 | 5;
}

const MOODS: Record<number, { emoji: string; label: string; color: string }> = {
  1: { emoji: "😔", label: "Hard day", color: "#6A6A88" },
  2: { emoji: "😐", label: "Okay", color: "#8B9BCC" },
  3: { emoji: "🙂", label: "Good", color: "#10B981" },
  4: { emoji: "😊", label: "Great", color: "#3a7d56" },
  5: { emoji: "🙌", label: "Blessed", color: "#F59E0B" },
};

const PROMPTS = [
  "What's one small thing that made you smile today?",
  "Who in your life are you most grateful for right now?",
  "What challenge taught you something valuable recently?",
  "What answered prayer can you thank God for today?",
  "What ability or gift did you get to use today?",
  "What part of creation made you feel wonder this week?",
  "What Scripture or truth anchored you recently?",
  "What unexpected kindness did someone show you?",
];

function uid() { return Math.random().toString(36).slice(2, 10); }

const THEOLOGY_GRAT: { id: string; title: string; verse: string; body: string; application: string }[] = [
  {
    id: "eucharistia",
    title: "Eucharistia: More Than Saying Thanks",
    verse: "1 Thessalonians 5:18",
    body: "Gratitude in Scripture is eucharistia — the same root as Eucharist. Thanksgiving is an act of worship, not just a sentiment. When Paul commands us to 'give thanks in all circumstances,' he is not calling us to a positive attitude; he is calling us into the posture of the worshiper who acknowledges that every good thing flows from God.",
    application: "Treat your gratitude journal as a form of worship, not self-help. Each entry is an act of returning thanks to the Giver.",
  },
  {
    id: "resistance",
    title: "Gratitude as Resistance",
    verse: "Philippians 4:4-7",
    body: "Paul wrote 'Rejoice always' from prison. Gratitude is resistance against despair, not denial of suffering. The Philippian letter is not naive optimism — it is the testimony of a man in chains who has found a joy that circumstances cannot confiscate. Gratitude does not say suffering isn't real; it says suffering is not the whole story.",
    application: "Thank God for one specific thing even on hard days. Gratitude is most powerful when it is hardest.",
  },
  {
    id: "all-good-gifts",
    title: "All Good Gifts Come Down",
    verse: "James 1:17",
    body: "Every good thing in your life is a gift from a Father who gives without varying — nothing you have earned entitles you. James anchors gratitude in the character of God: he is a Father of lights in whom there is no shadow of turning. The gifts are consistent because the Giver is constant.",
    application: "Identify one thing you take for granted and name it explicitly in your gratitude today.",
  },
  {
    id: "ungrateful-heart",
    title: "The Ungrateful Heart",
    verse: "Romans 1:21",
    body: "Paul diagnoses ingratitude as the root of spiritual decline. When people knew God but 'did not honor him as God or give thanks to him,' their thinking became futile and their hearts darkened. Ingratitude is not merely a character flaw — it is the beginning of a theological drift away from the reality of God as source.",
    application: "Notice when you feel entitled and name it honestly. Entitlement and gratitude cannot occupy the same heart at the same time.",
  },
  {
    id: "ten-lepers",
    title: "The 10 Lepers",
    verse: "Luke 17:11-19",
    body: "Only one of ten healed lepers returned to thank Jesus. All ten were cleansed, but only one was made whole. Jesus's question — 'Were not ten cleansed? Where are the nine?' — is not just historical. It is a mirror. We receive gifts constantly and return thanks rarely. The one who returned was a Samaritan, an outsider — a reminder that gratitude is not the property of the religiously comfortable.",
    application: "Make returning thanks a deliberate, immediate act. Do not let the gift drift into the background before you acknowledge the Giver.",
  },
];

const VOICES_GRAT: { id: string; name: string; era: string; work: string; bio: string; quote: string; contribution: string }[] = [
  {
    id: "voskamp-a",
    name: "Ann Voskamp",
    era: "b. 1973",
    work: "One Thousand Gifts",
    bio: "Ann Voskamp is a Canadian farmer, author, and speaker who rose to prominence with her memoir One Thousand Gifts, in which she chronicles her practice of listing a thousand things she is grateful for as a discipline of spiritual transformation. Her writing is lyrical and theological, recovering ancient Christian vocabulary for a popular evangelical audience.",
    quote: "Eucharisteo — thanksgiving — always precedes the miracle.",
    contribution: "Recovered the theological depth of gratitude as Eucharist in popular evangelical writing, connecting the practice of thankfulness directly to the sacramental life of the church.",
  },
  {
    id: "chesterton-gk",
    name: "G.K. Chesterton",
    era: "1874-1936",
    work: "Orthodoxy",
    bio: "G.K. Chesterton was an English writer, philosopher, and Christian apologist whose prolific output included journalism, fiction, poetry, and theology. In Orthodoxy, he argues that the proper response to existence is not analysis but gratitude — that the world is a gift and the only sane response to a gift is thanks.",
    quote: "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    contribution: "Argued that gratitude is not sentimental but is the proper response of a rational creature to existence itself — that wonder and thanks are intellectual acts, not merely emotional ones.",
  },
  {
    id: "steindl-rast-d",
    name: "David Steindl-Rast",
    era: "b. 1926",
    work: "Gratefulness, the Heart of Prayer",
    bio: "Brother David Steindl-Rast is an Austrian-American Benedictine monk, author, and lecturer who has spent decades exploring the intersection of contemplative practice and everyday gratitude. His work bridges monastic spirituality and popular culture, arguing that gratefulness is available to every human being in every moment.",
    quote: "It is not happiness that makes us grateful. It is gratefulness that makes us happy.",
    contribution: "Brought contemplative gratitude to popular spirituality, showing that the monastic practice of attentiveness — noticing the gift in each moment — is a discipline available to all, not only to monks.",
  },
  {
    id: "lewis-cs",
    name: "C.S. Lewis",
    era: "1898-1963",
    work: "Letters to Malcolm",
    bio: "C.S. Lewis was a British author, literary scholar, and Christian apologist whose works span fiction, theology, and philosophy. In Letters to Malcolm, written near the end of his life, he wrestles with prayer and praise — arguing that praise and gratitude are not acts we perform for God's benefit, but acts that complete and fulfill our own joy.",
    quote: "I think we delight to praise what we enjoy because the praise not merely expresses but completes the enjoyment; it is its appointed consummation.",
    contribution: "Argued theologically that gratitude and praise are not flattery offered to God but the form our joy takes when it becomes fully alive — that to thank God is to finish receiving the gift.",
  },
  {
    id: "willard-d",
    name: "Dallas Willard",
    era: "1935-2013",
    work: "The Spirit of the Disciplines",
    bio: "Dallas Willard was an American philosopher, theologian, and professor at the University of Southern California whose work on spiritual formation has shaped a generation of Christian practitioners and thinkers. He argued that transformation requires not just willpower but the intentional training of the whole person through spiritual disciplines.",
    quote: "Gratitude to God is a discipline that, when practiced consistently, restructures the soul toward trust, away from anxiety, and into communion with the God who gives.",
    contribution: "Placed gratitude within the broader framework of spiritual formation, arguing that thankfulness is not a spontaneous feeling to be waited for but a discipline to be practiced until it becomes the habitual posture of the soul.",
  },
];

const SAMPLE_ENTRIES: GratitudeEntry[] = [
  {
    id: "g1",
    date: "May 25, 2026",
    items: ["Morning coffee with my wife before the kids woke up", "A kind message from an old friend", "Philippians 4:4 — the reminder to rejoice always"],
    verse: "Philippians 4:4",
    mood: 4,
  },
  {
    id: "g2",
    date: "May 24, 2026",
    items: ["Got through a difficult conversation at work with grace", "My daughter said 'I love you, Daddy' out of nowhere", "Sunny day after a week of rain"],
    mood: 5,
  },
  {
    id: "g3",
    date: "May 23, 2026",
    items: ["Good sermon on Psalm 23", "Health — I often take it for granted"],
    mood: 3,
  },
  {
    id: "g4",
    date: "May 22, 2026",
    items: ["A stranger held the door and smiled", "Made progress on a project I'd been stuck on for weeks", "Isaiah 41:10 — 'Do not fear, for I am with you'"],
    verse: "Isaiah 41:10",
    mood: 4,
  },
  {
    id: "g5",
    date: "May 21, 2026",
    items: ["Quiet time this morning without distraction — rare and sweet", "Phone call with my mom", "The way the light looked through the trees on my walk"],
    mood: 5,
  },
  {
    id: "g6",
    date: "May 20, 2026",
    items: ["A harder day — but I didn't lose my temper", "Romans 8:28 came to mind at exactly the right moment"],
    verse: "Romans 8:28",
    mood: 3,
  },
  {
    id: "g7",
    date: "May 19, 2026",
    items: ["My son asked me to pray with him before bed", "Finished the book of Mark in my reading plan", "Good food, good conversation, and enough rest"],
    mood: 5,
  },
];

export default function GratitudePage() {
  const TODAY = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const TODAY_SHORT = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  type Tab = "journal" | "theology" | "voices" | "practices" | "videos";
  const [activeTab, setActiveTab] = useState<Tab>("journal");
  const [selectedVoice, setSelectedVoice] = useState("voskamp-a");

  const [entries, setEntries] = useState<GratitudeEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_gratitude");
      const saved = s ? (JSON.parse(s) as GratitudeEntry[]) : null;
      return saved && saved.length > 0 ? saved : SAMPLE_ENTRIES;
    } catch { return SAMPLE_ENTRIES; }
  });
  const [todayItems, setTodayItems] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_gratitude_draft_items"); return s ? JSON.parse(s) : ["", "", ""]; } catch { return ["", "", ""]; }
  });
  const [todayVerse, setTodayVerse] = useState<string>(() => {
    try { return localStorage.getItem("vine_gratitude_draft_verse") ?? ""; } catch { return ""; }
  });
  const [todayMood, setTodayMood] = useState<1 | 2 | 3 | 4 | 5>(() => {
    try { const s = localStorage.getItem("vine_gratitude_draft_mood"); return s ? (Number(s) as 1 | 2 | 3 | 4 | 5) : 4; } catch { return 4; }
  });
  const [saved, setSaved] = useState(false);
  const [promptIndex] = useState(() => Math.floor(Math.random() * PROMPTS.length));

  useEffect(() => {
    try { localStorage.setItem("vine_gratitude", JSON.stringify(entries)); } catch {}
  }, [entries]);

  useEffect(() => {
    try { localStorage.setItem("vine_gratitude_draft_items", JSON.stringify(todayItems)); } catch {}
  }, [todayItems]);

  useEffect(() => {
    try { localStorage.setItem("vine_gratitude_draft_verse", todayVerse); } catch {}
  }, [todayVerse]);

  useEffect(() => {
    try { localStorage.setItem("vine_gratitude_draft_mood", String(todayMood)); } catch {}
  }, [todayMood]);

  const hasTodayEntry = entries.some((e) => e.date === TODAY_SHORT);
  const filledItems = todayItems.filter((i) => i.trim());

  const saveEntry = () => {
    if (filledItems.length === 0) return;
    const entry: GratitudeEntry = {
      id: uid(),
      date: TODAY_SHORT,
      items: filledItems,
      verse: todayVerse.trim() || undefined,
      mood: todayMood,
    };
    setEntries((prev) => [entry, ...prev]);
    setTodayItems(["", "", ""]);
    setTodayVerse("");
    try { localStorage.removeItem("vine_gratitude_draft_items"); localStorage.removeItem("vine_gratitude_draft_verse"); localStorage.removeItem("vine_gratitude_draft_mood"); } catch {}
    setSaved(true);
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (saved) setSaved(false);
  };

  const streak = (() => {
    if (entries.length === 0) return 0;
    let count = 0;
    const now = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      if (entries.some((e) => e.date === dateStr)) count++;
      else if (i > 0) break;
    }
    return count;
  })();

  const totalItems = entries.reduce((s, e) => s + e.items.length, 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pb-24" style={{ paddingTop: 80 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={18} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Gratitude Journal</span>
            </div>
            <h1 className="text-3xl font-black mb-2">
              Count Your{" "}
              <span style={{ background: "linear-gradient(135deg, #3a7d56, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Blessings
              </span>
            </h1>
            <p className="text-sm" style={{ color: "#6A6A88" }}>
              Research shows gratitude rewires the brain toward joy. Scripture commands it. Practice it daily.
            </p>
          </div>

          {/* Tab Bar */}
          <div className="flex gap-1 mb-8 p-1 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {([
              { id: "journal" as const, label: "Journal", icon: "✍️" },
              { id: "theology" as const, label: "Theology", icon: "📖" },
              { id: "voices" as const, label: "Voices", icon: "🎓" },
              { id: "practices" as const, label: "Practices", icon: "🙏" },
              { id: "videos" as const, label: "Videos", icon: "🎬" },
            ]).map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className="flex-1 py-2.5 px-2 rounded-lg text-sm font-bold transition-all"
                style={{ background: activeTab === t.id ? "#6B4FBB" : "transparent", color: activeTab === t.id ? "#fff" : "#9898B3", border: "none", cursor: "pointer" }}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Journal Tab */}
          {activeTab === "journal" && (
          <div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Day Streak", value: streak, color: "#F59E0B", emoji: "🔥" },
              { label: "Total Entries", value: entries.length, color: "#3a7d56", emoji: "📋" },
              { label: "Gratitudes", value: totalItems, color: "#6B4FBB", emoji: "🙏" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="text-xl mb-0.5">{s.emoji}</div>
                <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px]" style={{ color: "#6A6A88" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Today's Entry */}
          {!hasTodayEntry ? (
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06), rgba(245,158,11,0.04))", border: "1px solid rgba(58,125,86,0.15)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={14} style={{ color: "#3a7d56" }} />
                <h2 className="font-black" style={{ color: "#F2F2F8" }}>Today — {TODAY}</h2>
              </div>
              <p className="text-xs mb-5 italic" style={{ color: "#4A4A68" }}>
                💡 {PROMPTS[promptIndex]}
              </p>

              {/* Mood */}
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#6A6A88" }}>How are you feeling today?</p>
                <div className="flex gap-2 flex-wrap">
                  {([1, 2, 3, 4, 5] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setTodayMood(m)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        background: todayMood === m ? `${MOODS[m].color}15` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${todayMood === m ? `${MOODS[m].color}40` : "rgba(255,255,255,0.06)"}`,
                        color: todayMood === m ? MOODS[m].color : "#6A6A88",
                      }}
                    >
                      {MOODS[m].emoji} {MOODS[m].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 gratitudes */}
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2.5" style={{ color: "#6A6A88" }}>
                  Three things you&apos;re grateful for today:
                </p>
                <div className="space-y-2">
                  {todayItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-sm font-bold w-5 shrink-0 text-center" style={{ color: "#3a7d56" }}>{i + 1}.</span>
                      <input
                        type="text"
                        placeholder={i === 0 ? "I'm grateful for…" : i === 1 ? "Something good that happened…" : "One more blessing…"}
                        value={item}
                        onChange={(e) => {
                          const next = [...todayItems];
                          next[i] = e.target.value;
                          setTodayItems(next);
                        }}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional verse */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="📖 Scripture you're standing on today (optional)"
                  value={todayVerse}
                  onChange={(e) => setTodayVerse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
              </div>

              <button
                onClick={saveEntry}
                disabled={filledItems.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-black transition-all"
                style={{ background: filledItems.length > 0 ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "#1E1E32", color: filledItems.length > 0 ? "#07070F" : "#4A4A68" }}
              >
                <Heart size={15} /> Save Today&apos;s Gratitude
              </button>
            </div>
          ) : (
            <div
              className="rounded-2xl p-6 mb-8 text-center"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <div className="text-3xl mb-2">🙌</div>
              <h3 className="font-black mb-1" style={{ color: "#F2F2F8" }}>Gratitude logged for today!</h3>
              <p className="text-sm" style={{ color: "#6A6A88" }}>Come back tomorrow to continue your streak. Keep counting the blessings.</p>
            </div>
          )}

          {/* Past entries */}
          {entries.length > 0 && (
            <div>
              <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Past Entries</h2>
              <div className="space-y-4">
                {entries.map((entry) => {
                  const mood = MOODS[entry.mood];
                  return (
                    <div
                      key={entry.id}
                      className="rounded-2xl p-5"
                      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span style={{ color: "#4A4A68", fontSize: 12 }}>{entry.date}</span>
                          <span className="text-sm" title={mood.label}>{mood.emoji}</span>
                        </div>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          style={{ color: "#3A3A58" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <ul className="space-y-1.5 mb-3">
                        {entry.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Star size={12} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                            <span style={{ color: "#C0C0D8" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {entry.verse && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.08)", color: "#00AA55" }}>
                          📜 {entry.verse}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          </div>
          )}

          {/* Theology Tab */}
          {activeTab === "theology" && (
            <div className="flex flex-col gap-6">
              <p className="text-sm" style={{ color: "#9898B3", lineHeight: 1.8 }}>What the Bible actually teaches about gratitude &mdash; deeper than &ldquo;count your blessings.&rdquo;</p>
              {THEOLOGY_GRAT.map(t => (
                <div key={t.id} className="rounded-xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#3a7d56" }}><VerseRef reference={t.verse} /></div>
                  <h3 className="text-lg font-black mb-3">{t.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#F2F2F8" }}>{t.body}</p>
                  <div className="rounded-lg p-3" style={{ background: "#6B4FBB15", border: "1px solid #6B4FBB30" }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#6B4FBB" }}>APPLY</div>
                    <p className="text-sm m-0" style={{ color: "#F2F2F8" }}>{t.application}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Voices Tab */}
          {activeTab === "voices" && (
            <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 20, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
                {VOICES_GRAT.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? "#6B4FBB20" : "#12121F",
                      border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`,
                      borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: selectedVoice === v.id ? "#fff" : "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: "#9898B3", fontSize: 11 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {(() => {
                const v = VOICES_GRAT.find(x => x.id === selectedVoice)!;
                return (
                  <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 28 }}>
                    <h2>{v.name}</h2>
                    <div style={{ color: "#9898B3", fontSize: 13 }}>{v.era} &middot; {v.work}</div>
                    <p style={{ marginTop: 16, lineHeight: 1.8 }}>{v.bio}</p>
                    <blockquote style={{ borderLeft: `3px solid #3a7d56`, paddingLeft: 16, fontStyle: "italic", color: "#9898B3", margin: "20px 0" }}>
                      &ldquo;{v.quote}&rdquo;
                    </blockquote>
                    <div style={{ background: "#6B4FBB10", border: "1px solid #6B4FBB20", borderRadius: 8, padding: 14 }}>
                      <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 11, marginBottom: 6 }}>CONTRIBUTION</div>
                      <p style={{ color: "#F2F2F8", margin: 0 }}>{v.contribution}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Practices Tab */}
          {activeTab === "practices" && (
            <div className="flex flex-col gap-6">
              <p className="text-sm" style={{ color: "#9898B3", lineHeight: 1.8 }}>Proven practices for building a life of gratitude &mdash; simple, repeatable, and spiritually grounded.</p>
              {[
                {
                  icon: "📝",
                  title: "Three Good Things",
                  time: "Nightly &mdash; 5 min",
                  description: "Write 3 specific things you&rsquo;re grateful for each night. The key is specificity &mdash; not &ldquo;my family&rdquo; but &ldquo;my daughter laughed at breakfast today.&rdquo; Specificity forces you to actually pay attention to your life.",
                },
                {
                  icon: "✉️",
                  title: "Gratitude Letter",
                  time: "Once &mdash; 30 min",
                  description: "Write a letter to someone who impacted your life and either send it or read it to them in person. Research shows this is one of the highest-impact gratitude exercises. You will both be changed by it.",
                },
                {
                  icon: "⏳",
                  title: "The Deathbed Test",
                  time: "Quarterly &mdash; 15 min",
                  description: "Imagine yourself at the end of your life &mdash; what would you be most grateful for? Let that clarify priorities today. This exercise has a way of cutting through noise and surfacing what actually matters.",
                },
                {
                  icon: "👁️",
                  title: "God&rsquo;s Hand Today",
                  time: "Nightly &mdash; 2 min",
                  description: "At the end of each day, identify one moment where you saw God working &mdash; an answered prayer, an unexpected provision, a moment of grace. Train your eyes to look for the divine in the ordinary.",
                },
                {
                  icon: "🌅",
                  title: "The Morning Examen of Gratitude",
                  time: "Morning &mdash; 3 min",
                  description: "Before rising, thank God for 3 things before your feet hit the floor. This anchors your first conscious moments in gratitude rather than anxiety, and sets the orientation of the whole day.",
                },
              ].map((p, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl shrink-0">{p.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base font-black m-0">{p.title}</h3>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(107,79,187,0.15)", color: "#6B4FBB" }} dangerouslySetInnerHTML={{ __html: p.time }} />
                      </div>
                      <p className="text-sm leading-relaxed m-0" style={{ color: "#9898B3" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            <div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
                <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                  Sermons, lectures, and teachings from trusted Christian scholars and pastors.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { videoId: "-mnidQuLZ1Y", title: "Christian Gratitude", channel: "John Piper / Desiring God", description: "Piper on the theological depth of gratitude — why thankfulness is not a feeling to be manufactured but a response to the reality of God's character and gifts." },
                    { videoId: "ojsBIxU5dKM", title: "One Thousand Gifts: Session 1 — Attitude of Gratitude", channel: "Ann Voskamp", description: "Ann Voskamp opens her landmark Bible study on eucharistia — why thanksgiving is an act of worship, not just a sentiment, and how to practice it daily." },
                    { videoId: "siAj2cwxdSk", title: "How Thankfulness Can Become Habitual", channel: "Ann Voskamp", description: "Practical teaching on how gratitude moves from occasional feeling to habitual posture — the spiritual discipline of noticing and naming gifts." },
                    { videoId: "dzYfsF1sWVk", title: "Gratitude: A Dare to Cultivate Joy", channel: "Ann Voskamp / The Gospel Coalition", description: "A TGC Women's Conference message on how cultivating gratitude is a daring act of faith — especially in seasons of suffering and loss." },
                  ].map(v => (
                    <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                      <iframe
                        width="100%"
                        style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                        src={`https://www.youtube.com/embed/${v.videoId}`}
                        title={v.title}
                        allowFullScreen
                      />
                      <div style={{ padding: "14px 16px" }}>
                        <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                        <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                        <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer verse */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(58,125,86,0.04))", border: "1px solid rgba(245,158,11,0.15)" }}
          >
            <Sparkles size={18} style={{ color: "#F59E0B" }} className="mx-auto mb-3" />
            <p className="text-sm italic mb-2" style={{ color: "#C0C0D8" }}>
              &ldquo;Give thanks in all circumstances; for this is God&apos;s will for you in Christ Jesus.&rdquo;
            </p>
            <p className="text-xs font-bold mb-4" style={{ color: "#4A4A68" }}>— 1 Thessalonians 5:18</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/journal" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#3a7d56" }}>
                Main Journal <ChevronRight size={11} />
              </Link>
              <Link href="/prayer-list" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#F59E0B" }}>
                Prayer List <ChevronRight size={11} />
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
