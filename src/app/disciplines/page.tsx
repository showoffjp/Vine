"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Plus, CheckCircle2, ChevronRight, Star, Flame, X } from "lucide-react";

interface DisciplineRecord {
  id: string;
  lastPracticed?: string;
  timesThisMonth: number;
  notes: string;
  committed: boolean;
}

interface Discipline {
  id: string;
  name: string;
  category: "inward" | "outward" | "corporate";
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  howTo: string[];
  verse: string;
  verseRef: string;
  teachers: string[];
  difficulty: 1 | 2 | 3;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "prayer", name: "Prayer", category: "inward", emoji: "🙏", color: "#6B4FBB",
    tagline: "Conversation with the living God",
    description: "Prayer is the primary way we commune with God — not a religious obligation but a relationship. It encompasses adoration, confession, thanksgiving, and supplication.",
    howTo: ["Set a specific time and place", "Use the ACTS model: Adoration, Confession, Thanksgiving, Supplication", "Pray the Psalms as a framework", "Keep a prayer journal to track requests and answers", "Combine with silence to listen, not just speak"],
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    verseRef: "Philippians 4:6",
    teachers: ["E.M. Bounds", "Richard Foster", "Tim Keller"],
    difficulty: 1,
  },
  {
    id: "bible-reading", name: "Scripture Reading", category: "inward", emoji: "📖", color: "#3B82F6",
    tagline: "Letting God speak through His Word",
    description: "Regular, sustained reading of Scripture — not just for information but for transformation. The goal is to read in such a way that the Word reads us.",
    howTo: ["Use a reading plan (Bible in a year, NT in 90 days)", "Read larger sections for narrative; smaller for poetry and epistles", "Apply OIA: Observe → Interpret → Apply", "Memorize key passages", "Read aloud — especially Psalms and prophets"],
    verse: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    verseRef: "2 Timothy 3:16",
    teachers: ["N.T. Wright", "Tim Keller", "John Piper"],
    difficulty: 1,
  },
  {
    id: "fasting", name: "Fasting", category: "inward", emoji: "✨", color: "#F59E0B",
    tagline: "Hunger for God over hunger for food",
    description: "Voluntarily abstaining from food (or other things) to create space for spiritual attentiveness, intercessory prayer, or repentance. Not performance — but a reorientation of desire.",
    howTo: ["Start with partial fasts (skip one meal)", "Set an intention: What are you seeking God about?", "Spend the hunger time in prayer rather than distraction", "Break the fast with intentional gratitude", "Consider non-food fasts: social media, news, entertainment"],
    verse: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting.",
    verseRef: "Matthew 6:16",
    teachers: ["Richard Foster", "Jentezen Franklin", "Dallas Willard"],
    difficulty: 2,
  },
  {
    id: "meditation", name: "Meditation", category: "inward", emoji: "🌿", color: "#10B981",
    tagline: "Ruminating on God's Word",
    description: "Biblical meditation is distinct from Eastern meditation. Rather than emptying the mind, it means filling and saturating the mind with Scripture — turning it over, dwelling on it, letting it speak.",
    howTo: ["Choose one verse or passage", "Read it slowly 3-4 times", "Ask: What does this reveal about God? About me? About the world?", "Paraphrase it in your own words", "Carry it mentally through the day"],
    verse: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it.",
    verseRef: "Joshua 1:8",
    teachers: ["Dallas Willard", "Richard Foster", "Lectio Divina tradition"],
    difficulty: 2,
  },
  {
    id: "silence", name: "Silence & Solitude", category: "inward", emoji: "🕊️", color: "#8B5CF6",
    tagline: "Creating space to hear",
    description: "Deliberately withdrawing from noise, people, and activity to be alone with God. Jesus practiced this regularly. In silence, we learn to listen rather than only speak.",
    howTo: ["Start with 10-15 minutes of complete silence", "Go somewhere without screens or noise", "Don't fill the silence with a to-do list", "Let thoughts surface and release them to God", "Gradually extend duration as you practice"],
    verse: "Be still and know that I am God.",
    verseRef: "Psalm 46:10",
    teachers: ["Henri Nouwen", "Dallas Willard", "Thomas Merton"],
    difficulty: 3,
  },
  {
    id: "journaling", name: "Journaling", category: "inward", emoji: "✍️", color: "#EC4899",
    tagline: "Writing as a spiritual act",
    description: "Keeping a record of your spiritual journey — prayers, insights from Scripture, how God is working, confession, gratitude. Journaling externalizes the inner life and creates a record of God's faithfulness.",
    howTo: ["Write what you read in Scripture today and what stood out", "Record answered prayers specifically", "Use honest language — God can handle your doubts and anger", "Review past entries periodically to see growth", "Don't stress about style or grammar"],
    verse: "I will remember the deeds of the Lord; yes, I will remember your miracles of long ago.",
    verseRef: "Psalm 77:11",
    teachers: ["Jim Elliot", "George Whitefield", "Richard Foster"],
    difficulty: 1,
  },
  {
    id: "simplicity", name: "Simplicity", category: "outward", emoji: "⚡", color: "#F97316",
    tagline: "Freedom from the tyranny of things",
    description: "Ordering life to hold material possessions lightly and resist consumer culture. Simplicity is not poverty — it's freedom from anxiety about possessions and clarity about what truly matters.",
    howTo: ["Regularly give away things you don't need", "Fast from buying anything non-essential for a month", "Practice gratitude for what you already have", "Evaluate spending: Does this serve God's kingdom or my comfort?", "Resist the comparison trap on social media"],
    verse: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it.",
    verseRef: "1 Timothy 6:6-7",
    teachers: ["Richard Foster", "Francis of Assisi", "Francis Chan"],
    difficulty: 2,
  },
  {
    id: "service", name: "Service", category: "outward", emoji: "🤝", color: "#00FF88",
    tagline: "The discipline of not thinking about yourself",
    description: "Choosing to serve others as a spiritual discipline — not grudgingly or for recognition but as a training ground for crucifying self-centeredness and practicing the way of Jesus.",
    howTo: ["Serve anonymously so only God knows", "Look for the overlooked person in every room", "Say yes to the thing you don't feel like doing", "Serve in ways that cost you something real", "Volunteer for unglamorous roles in your community"],
    verse: "Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all.",
    verseRef: "Mark 10:43-44",
    teachers: ["Henri Nouwen", "Mother Teresa", "Dallas Willard"],
    difficulty: 2,
  },
  {
    id: "generosity", name: "Generosity", category: "outward", emoji: "🎁", color: "#EF4444",
    tagline: "Holding wealth with open hands",
    description: "Systematically and cheerfully giving financial resources, time, and attention. Generosity is a discipline precisely because it feels costly — and that cost is the point.",
    howTo: ["Tithe first before paying anything else", "Give above the tithe when possible", "Give to people, not just institutions", "Give anonymously regularly", "Budget generosity like any other expense — plan it, not feel it"],
    verse: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    verseRef: "2 Corinthians 9:7",
    teachers: ["Randy Alcorn", "Tim Keller", "Richard Foster"],
    difficulty: 2,
  },
  {
    id: "confession", name: "Confession", category: "corporate", emoji: "🔓", color: "#6366F1",
    tagline: "Walking in the light together",
    description: "Regularly confessing sin — both to God and to a trusted person. James 5:16 assumes this is normal Christianity. Confession breaks the power of secrecy and shame.",
    howTo: ["Find a trusted accountability partner", "Confess specifically, not vaguely", "Don't make confession itself a performance", "Follow confession with repentance — changed direction", "Receive forgiveness — don't keep rehearsing confessed sin"],
    verse: "Therefore confess your sins to each other and pray for each other so that you may be healed.",
    verseRef: "James 5:16",
    teachers: ["Dietrich Bonhoeffer", "Richard Foster", "Tim Keller"],
    difficulty: 3,
  },
  {
    id: "worship", name: "Worship", category: "corporate", emoji: "🎵", color: "#BB4F7A",
    tagline: "Orienting yourself toward God",
    description: "Worship is not just Sunday singing — it's a posture of the whole life, continuously reorienting our desires and attention toward God. Congregational worship trains us in corporate praise.",
    howTo: ["Worship with a physical posture: stand, kneel, raise hands", "Sing even when you don't feel it — worship shapes feeling", "Focus on God's character, not your circumstances", "Practice private worship: singing and praying alone", "Attend corporate worship consistently"],
    verse: "God is spirit, and his worshipers must worship in the Spirit and in truth.",
    verseRef: "John 4:24",
    teachers: ["A.W. Tozer", "Matt Redman", "Louie Giglio"],
    difficulty: 1,
  },
  {
    id: "sabbath", name: "Sabbath", category: "corporate", emoji: "🌙", color: "#4FBBAA",
    tagline: "Rest as an act of trust",
    description: "Keeping the Sabbath is one of the Ten Commandments — and one of the most neglected by modern Christians. Sabbath is declaring that the world doesn't depend on you; it depends on God.",
    howTo: ["Choose a consistent day and protect it", "Stop: no productive work", "Rest: do what restores you", "Delight: enjoy God, people, creation", "Worship: use the day for corporate and personal devotion"],
    verse: "There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their works.",
    verseRef: "Hebrews 4:9-10",
    teachers: ["Walter Brueggemann", "Mark Buchanan", "John Mark Comer"],
    difficulty: 3,
  },
];

const today = new Date().toISOString().split("T")[0];
const thisMonth = today.slice(0, 7);

export default function DisciplinesPage() {
  const [records, setRecords] = useState<Record<string, DisciplineRecord>>(() => {
    try {
      const s = localStorage.getItem("vine_disciplines");
      return s ? JSON.parse(s) : {};
    } catch { return {}; }
  });

  const [activeCategory, setActiveCategory] = useState<"all" | "inward" | "outward" | "corporate">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_disciplines", JSON.stringify(records)); } catch {}
  }, [records]);

  const getRecord = (id: string): DisciplineRecord => records[id] ?? { id, timesThisMonth: 0, notes: "", committed: false };

  const toggleCommit = (id: string) => {
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, committed: !rec.committed } };
    });
  };

  const logPractice = (id: string) => {
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, lastPracticed: today, timesThisMonth: rec.timesThisMonth + 1 } };
    });
  };

  const saveNote = (id: string) => {
    if (!noteInput.trim()) return;
    setRecords((prev) => {
      const rec = getRecord(id);
      return { ...prev, [id]: { ...rec, notes: noteInput.trim() } };
    });
    setNoteInput("");
  };

  const filtered = DISCIPLINES.filter((d) => activeCategory === "all" || d.category === activeCategory);
  const committed = DISCIPLINES.filter((d) => getRecord(d.id).committed);
  const practicedToday = DISCIPLINES.filter((d) => getRecord(d.id).lastPracticed === today);
  const selected = DISCIPLINES.find((d) => d.id === selectedId);

  const CATEGORY_LABELS: Record<string, string> = {
    inward: "Inward (Personal)",
    outward: "Outward (Action)",
    corporate: "Corporate (Community)",
  };

  const diffLabel = (d: 1 | 2 | 3) => d === 3 ? "Advanced" : d === 2 ? "Intermediate" : "Beginner";
  const diffColor = (d: 1 | 2 | 3) => d === 3 ? "#EF4444" : d === 2 ? "#F59E0B" : "#00FF88";

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Star size={18} style={{ color: "#00FF88" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Spiritual Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            Train for{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              godliness.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mb-6" style={{ color: "#6A6A88" }}>
            &ldquo;Train yourself to be godly.&rdquo; — 1 Timothy 4:7. The classic disciplines of the Christian life, with practical guides and progress tracking.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { label: `${committed.length} Disciplines committed`, color: "#00FF88" },
              { label: `${practicedToday.length} Practiced today`, color: "#6B4FBB" },
              { label: `${DISCIPLINES.length} Total disciplines`, color: "#4A4A68" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-bold" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detail modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-2xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: `1px solid ${selected.color}30` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selected.emoji}</span>
                  <div>
                    <h2 className="font-black text-xl" style={{ color: "#F2F2F8" }}>{selected.name}</h2>
                    <span className="text-xs capitalize px-2 py-0.5 rounded-full font-bold" style={{ background: `${selected.color}15`, color: selected.color, border: `1px solid ${selected.color}30` }}>
                      {CATEGORY_LABELS[selected.category]}
                    </span>
                  </div>
                </div>
                <button onClick={() => setSelectedId(null)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>

              <p className="text-sm italic mb-3" style={{ color: "#8A8AA8" }}>{selected.tagline}</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#C0C0D8" }}>{selected.description}</p>

              {/* Verse */}
              <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.15)" }}>
                <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{selected.verse}&rdquo;</p>
                <p className="text-xs font-bold" style={{ color: "#9B8FEB" }}>— {selected.verseRef}</p>
              </div>

              {/* How to practice */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-3" style={{ color: "#F2F2F8" }}>How to Practice</h3>
                <div className="space-y-2">
                  {selected.howTo.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5" style={{ background: `${selected.color}20`, color: selected.color }}>{i + 1}</span>
                      <p className="text-sm" style={{ color: "#C0C0D8" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teachers */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-2" style={{ color: "#F2F2F8" }}>Learn From</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.teachers.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-xl font-semibold" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Your notes */}
              <div className="mb-5">
                <h3 className="font-black text-sm mb-2" style={{ color: "#F2F2F8" }}>Your Notes</h3>
                {getRecord(selected.id).notes ? (
                  <div className="p-3 rounded-xl mb-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-sm" style={{ color: "#C0C0D8" }}>{getRecord(selected.id).notes}</p>
                  </div>
                ) : null}
                <div className="flex gap-2">
                  <input value={noteInput} onChange={(e) => setNoteInput(e.target.value)} placeholder="Add a personal note or reflection..." className="flex-1 px-3 py-2 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                  <button onClick={() => saveNote(selected.id)} className="px-3 py-2 rounded-xl text-xs font-bold" style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>Save</button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => { logPractice(selected.id); }}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
                >
                  <CheckCircle2 size={14} /> Log Practice Today
                </button>
                <button
                  onClick={() => toggleCommit(selected.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm"
                  style={{
                    background: getRecord(selected.id).committed ? "rgba(107,79,187,0.15)" : "rgba(255,255,255,0.04)",
                    color: getRecord(selected.id).committed ? "#9B8FEB" : "#6A6A88",
                    border: getRecord(selected.id).committed ? "1px solid rgba(107,79,187,0.35)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {getRecord(selected.id).committed ? "✓ Committed" : "Commit to This"}
                </button>
              </div>

              {getRecord(selected.id).timesThisMonth > 0 && (
                <p className="text-center mt-3 text-xs" style={{ color: "#4A4A68" }}>
                  <Flame size={10} className="inline mr-1" style={{ color: "#F59E0B" }} />
                  Practiced {getRecord(selected.id).timesThisMonth}x this month
                  {getRecord(selected.id).lastPracticed ? ` · Last: ${getRecord(selected.id).lastPracticed}` : ""}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {([["all", "All Disciplines"], ["inward", "Inward"], ["outward", "Outward"], ["corporate", "Corporate"]] as const).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setActiveCategory(k)}
                className="px-4 py-2 rounded-xl text-sm font-bold"
                style={{ background: activeCategory === k ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.04)", border: activeCategory === k ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.08)", color: activeCategory === k ? "#00FF88" : "#6A6A88" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d) => {
              const rec = getRecord(d.id);
              const practicedNow = rec.lastPracticed === today;
              return (
                <div
                  key={d.id}
                  className="rounded-2xl p-5 cursor-pointer transition-all group"
                  style={{ background: rec.committed ? `${d.color}08` : "#12121F", border: rec.committed ? `1px solid ${d.color}25` : "1px solid #1E1E32" }}
                  onClick={() => setSelectedId(d.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{d.emoji}</span>
                    <div className="flex items-center gap-1.5">
                      {rec.committed && <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: `${d.color}15`, color: d.color, border: `1px solid ${d.color}30` }}>✓ Committed</span>}
                      {practicedNow && <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)" }}>Today ✓</span>}
                    </div>
                  </div>

                  <h3 className="font-black text-base mb-1" style={{ color: "#F2F2F8" }}>{d.name}</h3>
                  <p className="text-xs mb-3 italic" style={{ color: "#6A6A88" }}>{d.tagline}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize" style={{ background: "rgba(255,255,255,0.05)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {d.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${diffColor(d.difficulty)}15`, color: diffColor(d.difficulty), border: `1px solid ${diffColor(d.difficulty)}30` }}>
                      {diffLabel(d.difficulty)}
                    </span>
                  </div>

                  {rec.timesThisMonth > 0 && (
                    <p className="text-xs" style={{ color: "#4A4A68" }}>
                      <Flame size={9} className="inline mr-0.5" style={{ color: "#F59E0B" }} />
                      {rec.timesThisMonth}x this month
                    </p>
                  )}

                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: d.color }}>
                    View Guide <ChevronRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
