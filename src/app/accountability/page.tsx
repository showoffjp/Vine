"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { Users, Plus, X, CheckCircle2, Circle, MessageSquare, Flame, Shield, ChevronRight, Clock } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface CheckIn {
  date: string;
  note: string;
  completed: boolean;
}

interface AccountabilityGoal {
  id: string;
  title: string;
  description: string;
  category: string;
  frequency: "daily" | "weekly" | "monthly";
  partnerName: string;
  partnerInitials: string;
  partnerColor: string;
  startDate: string;
  checkIns: CheckIn[];
  streak: number;
  active: boolean;
}

const CATEGORIES = [
  { id: "prayer", label: "Prayer Life", icon: "🙏", color: "#6B4FBB" },
  { id: "scripture", label: "Bible Reading", icon: "📖", color: "#3B82F6" },
  { id: "purity", label: "Purity", icon: "🛡️", color: "#3a7d56" },
  { id: "sobriety", label: "Sobriety", icon: "🌿", color: "#10B981" },
  { id: "fitness", label: "Physical Discipline", icon: "💪", color: "#F59E0B" },
  { id: "finances", label: "Financial Stewardship", icon: "💰", color: "#EC4899" },
  { id: "relationships", label: "Relationships", icon: "❤️", color: "#EF4444" },
  { id: "work", label: "Work Integrity", icon: "⚡", color: "#8B5CF6" },
  { id: "fasting", label: "Fasting Practice", icon: "✨", color: "#F97316" },
  { id: "other", label: "Other", icon: "⭐", color: "#8A8AA8" },
];

const catMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

function computeStreak(g: AccountabilityGoal): number {
  const doneSet = new Set(g.checkIns.filter((c) => c.completed).map((c) => c.date));
  if (g.frequency === "daily") {
    let s = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      if (doneSet.has(key)) s++;
      else if (i > 0) break;
    }
    return s;
  }
  return doneSet.size;
}

const seedGoals: AccountabilityGoal[] = [
  {
    id: "ag-001",
    title: "Daily morning prayer — 15 minutes minimum",
    description: "Spend at least 15 minutes in prayer every morning before looking at my phone. Using the ACTS model: Adoration, Confession, Thanksgiving, Supplication.",
    category: "prayer",
    frequency: "daily",
    partnerName: "Marcus Thompson",
    partnerInitials: "MT",
    partnerColor: "#3B82F6",
    startDate: "2026-05-01",
    checkIns: [
      { date: "2026-05-21", note: "Did 20 min this morning. Really focused on intercession for James.", completed: true },
      { date: "2026-05-22", note: "Rushed this morning. 8 minutes. Need to get to bed earlier.", completed: true },
      { date: "2026-05-23", note: "Full 20 min. Read Psalm 63 as a launching point.", completed: true },
      { date: "2026-05-24", note: "Missed — family emergency. Back on track tomorrow.", completed: false },
      { date: "2026-05-25", note: "Made up for yesterday. 30 min.", completed: true },
      { date: "2026-05-26", note: "Solid 15 min. Prayed through my list.", completed: true },
    ],
    streak: 5,
    active: true,
  },
  {
    id: "ag-002",
    title: "Read through New Testament in 90 days",
    description: "Following the Reading Plan. Checking in with David every Sunday on what stood out and any questions that came up.",
    category: "scripture",
    frequency: "daily",
    partnerName: "David Kwan",
    partnerInitials: "DK",
    partnerColor: "#10B981",
    startDate: "2026-03-15",
    checkIns: [
      { date: "2026-05-20", note: "Finished Acts this week. The prayer culture of the early church is convicting.", completed: true },
      { date: "2026-05-21", note: "Romans 1-4 today. The doctrine of justification is hitting differently this time.", completed: true },
      { date: "2026-05-22", note: "Romans 5-8. Chapter 8 is extraordinary. Read it twice.", completed: true },
      { date: "2026-05-23", note: "Romans 9-12. Wrestling with election. Good questions to bring to the group.", completed: true },
      { date: "2026-05-24", note: "Romans 13-16. Paul's final greetings — 26 people named. Ministry is personal.", completed: true },
      { date: "2026-05-25", note: "Started 1 Corinthians. The church at Corinth makes me feel better about my church.", completed: true },
      { date: "2026-05-26", note: "1 Cor 12-14. Spiritual gifts chapter. Timely.", completed: true },
    ],
    streak: 12,
    active: true,
  },
  {
    id: "ag-003",
    title: "No social media before 8am or after 9pm",
    description: "Protecting morning and evening as sacred space. Phone stays in kitchen overnight. Checking in weekly with Sarah on how this is impacting our marriage and my sleep.",
    category: "purity",
    frequency: "weekly",
    partnerName: "Sarah (wife)",
    partnerInitials: "SH",
    partnerColor: "#EC4899",
    startDate: "2026-04-01",
    checkIns: [
      { date: "2026-05-04", note: "Week 1: Mostly good. Failed twice — once at 5am, once at 10pm. Sarah noticed I was more present at dinner.", completed: true },
      { date: "2026-05-11", note: "Week 2: Only one slip. Sleep has genuinely improved. Morning time feels different.", completed: true },
      { date: "2026-05-18", note: "Week 3: Perfect week. Sarah said this is the best month of our marriage in years. That's worth more than my Twitter feed.", completed: true },
      { date: "2026-05-25", note: "Week 4: Two slips but catching them faster. Building the muscle.", completed: true },
    ],
    streak: 4,
    active: true,
  },
];

const VOICES_ACCT = [
  {
    id: "wesley-j",
    name: "John Wesley",
    era: "1703–1791 · Methodist",
    context: "Founder of Methodist Class Meetings",
    bio: "John Wesley pioneered one of history's most effective accountability structures: the Methodist class meeting. Small groups of 10–12 believers met weekly, led by a class leader who asked each member searching questions about their spiritual state, sins, and progress. Wesley required attendance for membership. His Bands (more intimate, same-gender groups) gave ordinary people a structured framework for mutual confession and encouragement that drove the 18th-century revival.",
    quote: "Solitary religion is not to be found in the gospel. The Bible knows nothing of a holy hermit. Christianity is essentially a social religion; to turn it into a solitary one is indeed to destroy it.",
    contribution: "Wesley's class meetings gave the modern church its foundational model for small-group accountability. The practice of regular, structured, honest examination in community — where specific questions are asked and answered — is traceable directly to his societies. Virtually every accountability structure since owes a debt to Wesley.",
  },
  {
    id: "bonhoeffer-d",
    name: "Dietrich Bonhoeffer",
    era: "1906–1945 · Lutheran",
    context: "Life Together & Confessing Church",
    bio: "Dietrich Bonhoeffer's Life Together (1939), written from his experience running the underground Finkenwalde seminary, remains the definitive theological account of Christian community. His chapter on confession argues boldly: private confession to a brother breaks the power of secret sin in a way private confession to God alone often does not — because sin loves secrecy, and exposure to a human witness shatters its power.",
    quote: "The more isolated a person is, the more destructive will be the power of sin over him. Sin wants to remain unknown. In the darkness of what is left unsaid it poisons the whole being.",
    contribution: "Bonhoeffer gave the modern accountability movement its theological grounding. His argument that sin loses its power when confessed to a trusted brother, and that breakthrough to community happens through confession, is the foundational theology for why one-on-one accountability works.",
  },
  {
    id: "foster-r",
    name: "Richard Foster",
    era: "b. 1942 · Quaker",
    context: "Celebration of Discipline",
    bio: "Richard Foster's Celebration of Discipline (1978), which has sold over 2 million copies, devoted a full chapter to Confession as a corporate spiritual discipline. Foster emphasized that confession to a trusted, mature Christian is not optional for serious disciples — it breaks patterns of sin that private prayer alone cannot dissolve. He argued that isolated Christianity produces stunted growth.",
    quote: "To confess our sins to one another is to forsake the illusion that we can handle our own failures in the closet. It is to open ourselves to the community's knowledge of us.",
    contribution: "Foster's Celebration of Discipline introduced a generation of evangelicals to spiritual disciplines in an accessible form. His treatment of confession and accountability helped Protestant readers recover a practice largely abandoned since the Reformation, making it theologically respectable in non-Catholic contexts.",
  },
  {
    id: "willard-d",
    name: "Dallas Willard",
    era: "1935–2013 · Evangelical",
    context: "The Spirit of the Disciplines",
    bio: "Dallas Willard's The Spirit of the Disciplines (1988) argued that spiritual transformation requires deliberate training through embodied practices — including fellowship and submission. Willard stressed that accountability structures work because spiritual formation is not merely cognitive: our bodies, habits, and communities must change. He placed accountability within 'disciplines of engagement,' requiring sustained effort within community.",
    quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action, earning is attitude. Grace requires that we show up to the training.",
    contribution: "Willard's philosophical framework gave accountability its best answer to the criticism that it is works-based. His distinction between grace and effort, and his argument that disciplines are training rather than earning, freed evangelicals to embrace structured accountability without theological guilt.",
  },
  {
    id: "cloud-h",
    name: "Henry Cloud",
    era: "b. 1956 · Evangelical",
    context: "Boundaries, Integrity",
    bio: "Henry Cloud, psychologist and Christian author, has written on accountability through Boundaries (with John Townsend), Integrity, and Necessary Endings. Cloud bridges psychological and theological frameworks: healthy accountability requires clear structures, honest feedback, and willingness to face reality about oneself. His work is especially influential in recovery communities, pastoral care, and Christian leadership development.",
    quote: "We are only as sick as our secrets. The things we hide have power over us. The things we expose and bring into the light lose that power.",
    contribution: "Cloud brought psychological literature on accountability, honesty, and self-deception into the Christian framework. His Boundaries framework became foundational in Christian counseling and pastoral care, and his accessible writing style made these concepts available to practitioners who might not engage with more academic theology.",
  },
];

const QUESTIONS_DATA: { id: string; category: string; icon: string; questions: string[] }[] = [
  {
    id: "personal-holiness",
    category: "Personal Holiness",
    icon: "🙏",
    questions: [
      "Have you been with a woman or man anywhere this week that would embarrass you if your spouse or pastor had seen you?",
      "Have you exposed yourself to any sexually explicit material this week?",
      "Have you spent consistent time in Scripture and prayer each day this week?",
      "Are there any sins you are concealing that you have not confessed to God or to a trusted brother?",
      "Have you been covetous, proud, envious, or tempted to manipulate someone this week?",
      "Is there any area of your thought life you would be ashamed to have Jesus observe?",
    ],
  },
  {
    id: "relationships-marriage",
    category: "Relationships & Marriage",
    icon: "❤️",
    questions: [
      "Have you invested genuine, undistracted time with your spouse or closest family members this week?",
      "Have you spoken to your spouse or a family member in a way you regret — critical, dismissive, or harsh?",
      "Are you harboring bitterness, resentment, or unforgiveness toward anyone?",
      "Have you prioritized your phone or work over the people who matter most to you?",
      "Is there a relationship in your life that needs repair, and have you taken any steps toward reconciliation?",
      "Have you prayed for your spouse, children, or close friends by name this week?",
    ],
  },
  {
    id: "work-integrity",
    category: "Work & Integrity",
    icon: "⚡",
    questions: [
      "Have you lied about anything this week — in word, in omission, or by letting a false impression stand?",
      "Have you been diligent and fully present in your work, or have you been lazy or distracted?",
      "Have you taken anything that does not belong to you — time, credit, resources?",
      "Have you treated everyone under your authority with dignity and fairness?",
      "Is there any professional situation in which you compromised your integrity to protect yourself or advance your interests?",
      "Would your colleagues describe your conduct this week as consistent with the person you claim to be on Sunday?",
    ],
  },
  {
    id: "money-stewardship",
    category: "Money & Stewardship",
    icon: "💰",
    questions: [
      "Have you made any financial decisions this week driven by fear, greed, or status rather than wisdom?",
      "Are you giving generously and consistently, or have you found reasons to defer it?",
      "Have you spent money in a way you would be embarrassed to disclose to your accountability partner?",
      "Is debt, spending, or financial anxiety controlling more of your mental energy than you want to admit?",
      "Have you been a faithful steward of what God has entrusted to you — time as well as money?",
      "Is your financial life ordered in a way that reflects your stated values and priorities?",
    ],
  },
  {
    id: "mind-media",
    category: "Mind & Media",
    icon: "🧠",
    questions: [
      "What have you been reading, watching, or listening to this week, and is it building you up or tearing you down?",
      "Have you allowed anger, cynicism, or despair to take root through news or social media consumption?",
      "Have you been feeding your mind on things that are true, honorable, just, pure, and commendable, as Paul commands in Philippians 4?",
      "Have you spent more time consuming content than you have spent in prayer and Scripture?",
      "Is there anything you have been watching or reading in private that you would not want your brothers to know about?",
      "Have you guarded your imagination and your thought life, or have you let your mind drift into destructive territory?",
    ],
  },
  {
    id: "faith-mission",
    category: "Faith & Mission",
    icon: "🌍",
    questions: [
      "Have you had any gospel conversations this week, or have you kept your faith entirely private?",
      "Are you actively discipling someone, and did you invest in that relationship this week?",
      "Is there someone in your sphere of influence who needs to hear about Jesus, and are you praying for them by name?",
      "Have you served anyone this week in a way that cost you something — time, comfort, or resources?",
      "Is your faith growing, plateauing, or declining right now, and what is the honest reason?",
      "Are you living as though eternity is real, or are you functionally living for this life only?",
    ],
  },
];

export default function AccountabilityPage() {
  const [goals, setGoals] = useState<AccountabilityGoal[]>(() => {
    try {
      const s = localStorage.getItem("vine_accountability");
      const list: AccountabilityGoal[] = s ? JSON.parse(s) : seedGoals;
      return list.map((g) => ({ ...g, streak: computeStreak(g) }));
    } catch { return seedGoals.map((g) => ({ ...g, streak: computeStreak(g) })); }
  });

  const [mainTab, setMainTab] = usePersistedState<"goals" | "guide" | "voices" | "questions" | "videos">("vine_accountability_main_tab", "goals");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_accountability_selected_voice", "wesley-j");
  const [showCompose, setShowCompose] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(goals[0]?.id ?? null);
  const [checkInNote, setCheckInNote] = useState("");
  const [activeTab, setActiveTab] = usePersistedState<"active" | "completed">("vine_accountability_active_tab", "active");
  const voiceItem = VOICES_ACCT.find(v => v.id === selectedVoice)!;

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "prayer",
    frequency: "daily" as "daily" | "weekly" | "monthly",
    partnerName: "",
    partnerInitials: "",
    partnerColor: "#3a7d56",
  });

  useEffect(() => {
    try { localStorage.setItem("vine_accountability", JSON.stringify(goals)); } catch {}
  }, [goals]);

  const handleCheckIn = (goalId: string, completed: boolean) => {
    const today = new Date().toISOString().split("T")[0];
    setGoals((prev) => prev.map((g) => {
      if (g.id !== goalId) return g;
      const existing = g.checkIns.find((c) => c.date === today);
      let updatedCheckIns: CheckIn[];
      if (existing) {
        updatedCheckIns = g.checkIns.map((c) => c.date === today ? { ...c, completed, note: checkInNote || c.note } : c);
      } else {
        updatedCheckIns = [...g.checkIns, { date: today, note: checkInNote, completed }];
      }
      const recentStreak = (() => {
        const doneSet = new Set(updatedCheckIns.filter((c) => c.completed).map((c) => c.date));
        if (g.frequency === "daily") {
          let s = 0;
          for (let i = 0; i < 365; i++) {
            const d = new Date(); d.setDate(d.getDate() - i);
            const key = d.toISOString().split("T")[0];
            if (doneSet.has(key)) s++;
            else if (i > 0) break;
          }
          return s;
        }
        return doneSet.size;
      })();
      setCheckInNote("");
      return { ...g, checkIns: updatedCheckIns, streak: recentStreak };
    }));
  };

  const handleCreateGoal = () => {
    if (!form.title.trim() || !form.partnerName.trim()) return;
    const today = new Date().toISOString().split("T")[0];
    const initials = form.partnerInitials.trim() || form.partnerName.trim().split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    const newGoal: AccountabilityGoal = {
      id: `ag-${Date.now()}`,
      title: form.title,
      description: form.description,
      category: form.category,
      frequency: form.frequency,
      partnerName: form.partnerName,
      partnerInitials: initials,
      partnerColor: form.partnerColor,
      startDate: today,
      checkIns: [],
      streak: 0,
      active: true,
    };
    setGoals((prev) => [newGoal, ...prev]);
    setSelectedGoal(newGoal.id);
    setForm({ title: "", description: "", category: "prayer", frequency: "daily", partnerName: "", partnerInitials: "", partnerColor: "#3a7d56" });
    setShowCompose(false);
  };

  const activeGoals = goals.filter((g) => g.active);
  const completedGoals = goals.filter((g) => !g.active);
  const selectedGoalData = goals.find((g) => g.id === selectedGoal);

  const today = new Date().toISOString().split("T")[0];
  const thisWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - 6 + i);
    return d.toISOString().split("T")[0];
  });
  const todayCheckedIn = selectedGoalData?.checkIns.find((c) => c.date === today);
  const recentCheckIns = selectedGoalData?.checkIns.slice(-14).reverse() ?? [];
  const weekCheckIns = selectedGoalData?.checkIns.filter((c) => thisWeek.includes(c.date)) ?? [];
  const weekCompletedCount = weekCheckIns.filter((c) => c.completed).length;

  const PARTNER_COLORS = ["#3a7d56", "#6B4FBB", "#3B82F6", "#EC4899", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"];

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main>
      <div className="pb-20" style={{ paddingTop: 80 }}>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Accountability</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3">
                Iron sharpens{" "}
                <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  iron.
                </span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#6A6A88" }}>
                Private accountability goals with real partners. Track progress, share notes, and stay consistent.
              </p>
            </div>
            <button type="button"
              onClick={() => setShowCompose(true)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
            >
              <Plus size={15} /> New Goal
            </button>
          </div>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>New Accountability Goal</h3>
                <button aria-label="Close" type="button" onClick={() => setShowCompose(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Category</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {CATEGORIES.map((c) => (
                      <button type="button"
                        key={c.id}
                        onClick={() => setForm((f) => ({ ...f, category: c.id }))}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all"
                        style={{
                          background: form.category === c.id ? `${c.color}18` : "rgba(255,255,255,0.03)",
                          border: form.category === c.id ? `1px solid ${c.color}50` : "1px solid rgba(255,255,255,0.06)",
                          color: form.category === c.id ? c.color : "#6A6A88",
                        }}
                      >
                        <span>{c.icon}</span> {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Frequency</label>
                  <div className="flex gap-2">
                    {(["daily", "weekly", "monthly"] as const).map((f) => (
                      <button type="button"
                        key={f}
                        onClick={() => setForm((prev) => ({ ...prev, frequency: f }))}
                        className="flex-1 py-2 rounded-lg text-xs font-bold capitalize"
                        style={{
                          background: form.frequency === f ? "rgba(58,125,86,0.15)" : "rgba(255,255,255,0.03)",
                          border: form.frequency === f ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(255,255,255,0.06)",
                          color: form.frequency === f ? "#3a7d56" : "#6A6A88",
                        }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  aria-label="Goal title" placeholder="Goal title"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  aria-label="Describe your goal and your 'why'..." placeholder="Describe your goal and your 'why'..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />

                <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-black mb-3" style={{ color: "#F2F2F8" }}>Accountability Partner</p>
                  <input
                    value={form.partnerName}
                    onChange={(e) => setForm((f) => ({ ...f, partnerName: e.target.value }))}
                    aria-label="Partner name" placeholder="Partner name"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    value={form.partnerInitials}
                    onChange={(e) => setForm((f) => ({ ...f, partnerInitials: e.target.value.toUpperCase().slice(0, 2) }))}
                    aria-label="Initials (auto-generated if blank)" placeholder="Initials (auto-generated if blank)"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {PARTNER_COLORS.map((c) => (
                      <button type="button"
                        key={c}
                        onClick={() => setForm((f) => ({ ...f, partnerColor: c }))}
                        className="w-7 h-7 rounded-full transition-all"
                        style={{
                          background: c,
                          outline: form.partnerColor === c ? `2px solid ${c}` : "none",
                          outlineOffset: "2px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <button type="button" onClick={() => setShowCompose(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
                  Cancel
                </button>
                <button type="button"
                  onClick={handleCreateGoal}
                  disabled={!form.title.trim() || !form.partnerName.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm"
                  style={{
                    background: (form.title.trim() && form.partnerName.trim()) ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "rgba(255,255,255,0.06)",
                    color: (form.title.trim() && form.partnerName.trim()) ? "#07070F" : "#4A4A68",
                  }}
                >
                  Create Goal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main tab bar */}
        <div style={{ borderBottom: "1px solid #1E1E32", background: "#0A0A16", position: "sticky", top: 0, zIndex: 10, marginBottom: 24 }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: "flex", gap: 2 }}>
            {([["goals", "My Goals"], ["guide", "📖 Guide"], ["voices", "🎓 Voices"], ["questions", "❓ Questions"], ["videos", "🎬 Videos"]] as const).map(([key, label]) => (
              <button type="button" key={key} onClick={() => setMainTab(key)}
                style={{ background: "none", border: "none", borderBottom: mainTab === key ? "2px solid #3a7d56" : "2px solid transparent", color: mainTab === key ? "#F2F2F8" : "#9898B3", fontWeight: mainTab === key ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer", whiteSpace: "nowrap" }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {mainTab === "goals" && <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Left: Goal list */}
            <div className="w-72 shrink-0">
              <div className="flex gap-2 mb-4">
                {(["active", "completed"] as const).map((t) => (
                  <button type="button"
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-bold capitalize"
                    style={{
                      background: activeTab === t ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.03)",
                      border: activeTab === t ? "1px solid rgba(58,125,86,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      color: activeTab === t ? "#3a7d56" : "#6A6A88",
                    }}
                  >
                    {t} ({(t === "active" ? activeGoals : completedGoals).length})
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {(activeTab === "active" ? activeGoals : completedGoals).map((g) => {
                  const cat = catMap[g.category] ?? catMap["other"];
                  const todayDone = g.checkIns.find((c) => c.date === today)?.completed;
                  return (
                    <button type="button"
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className="w-full text-left p-4 rounded-xl transition-all"
                      style={{
                        background: selectedGoal === g.id ? `${cat.color}10` : "#12121F",
                        border: selectedGoal === g.id ? `1px solid ${cat.color}30` : "1px solid #1E1E32",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span>{cat.icon}</span>
                        <span className="text-xs font-bold truncate flex-1" style={{ color: "#F2F2F8" }}>{g.title}</span>
                        {todayDone && <CheckCircle2 size={12} className="shrink-0" style={{ color: "#3a7d56" }} />}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black" style={{ background: g.partnerColor, color: "#07070F" }}>
                          {g.partnerInitials}
                        </div>
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>{g.partnerName}</span>
                        <div className="ml-auto flex items-center gap-0.5">
                          <Flame size={9} style={{ color: "#F59E0B" }} />
                          <span className="text-[10px] font-bold" style={{ color: "#F59E0B" }}>{g.streak}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Detail */}
            {selectedGoalData ? (
              <div className="flex-1 min-w-0">
                {(() => {
                  const g = selectedGoalData;
                  const cat = catMap[g.category] ?? catMap["other"];
                  const todayCI = g.checkIns.find((c) => c.date === today);
                  return (
                    <div>
                      {/* Goal header */}
                      <div className="rounded-2xl p-6 mb-5" style={{ background: `${cat.color}08`, border: `1px solid ${cat.color}25` }}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${cat.color}15` }}>
                            {cat.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}>{cat.label}</span>
                              <span className="text-xs font-semibold capitalize" style={{ color: "#4A4A68" }}>{g.frequency} check-ins</span>
                            </div>
                            <h2 className="font-black text-xl leading-snug mb-2" style={{ color: "#F2F2F8" }}>{g.title}</h2>
                            {g.description && <p className="text-sm" style={{ color: "#8A8AA8" }}>{g.description}</p>}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mt-5">
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#F59E0B" }}>{g.streak}</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>Current streak</p>
                          </div>
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#3a7d56" }}>{weekCompletedCount}/7</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>This week</p>
                          </div>
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#6B4FBB" }}>{g.checkIns.filter((c) => c.completed).length}</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>Total completions</p>
                          </div>
                        </div>
                      </div>

                      {/* Partner */}
                      <div className="rounded-2xl p-5 mb-5 flex items-center gap-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black" style={{ background: g.partnerColor, color: "#07070F" }}>
                          {g.partnerInitials}
                        </div>
                        <div>
                          <p className="font-black text-sm" style={{ color: "#F2F2F8" }}>{g.partnerName}</p>
                          <p className="text-xs" style={{ color: "#4A4A68" }}>Accountability partner · Started {g.startDate}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(107,79,187,0.1)", border: "1px solid rgba(107,79,187,0.2)" }}>
                          <MessageSquare size={12} style={{ color: "#9B8FEB" }} />
                          <span className="text-xs font-bold" style={{ color: "#9B8FEB" }}>Check in with them</span>
                        </div>
                      </div>

                      {/* Today's check-in */}
                      <div className="rounded-2xl p-5 mb-5" style={{ background: "#12121F", border: todayCI ? (todayCI.completed ? "1px solid rgba(58,125,86,0.3)" : "1px solid rgba(239,68,68,0.2)") : "1px solid #1E1E32" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock size={14} style={{ color: "#4A4A68" }} />
                          <h3 className="font-black text-sm" style={{ color: "#F2F2F8" }}>
                            {todayCI ? (todayCI.completed ? "✅ Today — Completed!" : "❌ Today — Missed") : "Today's Check-In"}
                          </h3>
                        </div>
                        {!todayCI ? (
                          <>
                            <textarea
                              value={checkInNote}
                              onChange={(e) => setCheckInNote(e.target.value)}
                              aria-label="Add a note for your partner (optional)..." placeholder="Add a note for your partner (optional)..."
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none mb-3"
                              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                            />
                            <div className="flex gap-3">
                              <button type="button"
                                onClick={() => handleCheckIn(g.id, true)}
                                className="flex-1 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                                style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
                              >
                                <CheckCircle2 size={15} /> Mark Complete
                              </button>
                              <button type="button"
                                onClick={() => handleCheckIn(g.id, false)}
                                className="px-4 py-2.5 rounded-xl font-bold text-sm"
                                style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}
                              >
                                Missed today
                              </button>
                            </div>
                          </>
                        ) : (
                          <p className="text-sm" style={{ color: "#8A8AA8" }}>{todayCI.note || "No note added."}</p>
                        )}
                      </div>

                      {/* Recent check-ins */}
                      <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                        <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>Recent Check-Ins</h3>
                        {recentCheckIns.length === 0 ? (
                          <p className="text-sm text-center py-4" style={{ color: "#4A4A68" }}>No check-ins yet. Start today!</p>
                        ) : (
                          <div className="space-y-3">
                            {recentCheckIns.map((ci) => (
                              <div key={ci.date} className="flex gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.02)" }}>
                                <div className="mt-0.5">
                                  {ci.completed
                                    ? <CheckCircle2 size={14} style={{ color: "#3a7d56" }} />
                                    : <Circle size={14} style={{ color: "#EF4444" }} />
                                  }
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold mb-0.5" style={{ color: "#6A6A88" }}>
                                    {new Date(ci.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                                  </p>
                                  {ci.note && <p className="text-sm" style={{ color: "#C0C0D8" }}>{ci.note}</p>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center" style={{ color: "#4A4A68" }}>
                <div className="text-center">
                  <Shield size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>No goals yet</p>
                  <p className="text-sm mb-4">Create your first accountability goal to get started.</p>
                  <button aria-label="Add" type="button" onClick={() => setShowCompose(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm mx-auto" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}>
                    <Plus size={14} /> Create Goal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>}

        {mainTab === "guide" && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ maxWidth: 720 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, color: "#F2F2F8" }}>How Biblical Accountability Works</h2>
              <p style={{ fontSize: 14, color: "#9898B3", marginBottom: 28, lineHeight: 1.7 }}>Accountability is not surveillance — it is a covenant of mutual encouragement toward holiness. Here are the principles that make it work.</p>
              {[
                { icon: "🤝", title: "Choose Wisely", body: "An accountability partner should be someone who is slightly further along than you spiritually, who will tell you the truth even when it is uncomfortable, and who has demonstrated discretion. Avoid choosing someone you are romantically interested in or someone who will always agree with you. James 5:16 calls for mutual confession — which means both parties are vulnerable, not just one." },
                { icon: "📋", title: "Use Specific Questions", body: "Vague accountability produces vague results. Write out 3–5 specific, concrete questions to ask at each meeting. Wesley's bands asked: 'What known sins have you committed since our last meeting? What temptations have you met with? How were you delivered? What have you thought, said, or done, of which you doubt whether it be sin or not?' Specificity is mercy — it closes the gap where self-deception hides." },
                { icon: "🔒", title: "Maintain Confidentiality", body: "Nothing destroys accountability faster than broken confidence. What is shared in an accountability relationship stays there, period. Before the relationship begins, be explicit: 'What we share here stays here.' The only exception is an immediate threat of harm to self or others. Proverbs 11:13 says a trustworthy person keeps a confidence — this is the bedrock of the entire relationship." },
                { icon: "📅", title: "Meet Regularly and Consistently", body: "The value of accountability compounds with regularity. Monthly meetings produce some fruit. Weekly meetings produce real transformation. Whatever frequency you choose, protect it. Cancel rarely. Treat it like a doctor's appointment for your soul. Wesley's class meetings were weekly without exception — their consistency was a feature, not a burden." },
                { icon: "🌱", title: "Celebrate Progress, Not Just Failure", body: "Accountability is not just about sin management — it is about growth toward Christlikeness. When progress is made, name it and celebrate it. Positive reinforcement of growth is as important as honest confrontation of failure. Hebrews 10:24 says 'spur one another on toward love and good deeds' — the goal is positive trajectory, not just sin elimination." },
                { icon: "✝️", title: "Anchor It in Grace", body: "The accountability relationship must be saturated in the gospel. When failure is confessed, it should be met with the words of 1 John 1:9 and Romans 8:1 — not condemnation, not minimizing, but gospel-grounded grace that simultaneously takes sin seriously and takes the cross more seriously. Partners who become merely moral scorekeepers will produce shame, not transformation." },
              ].map(item => (
                <div key={item.title} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: "20px 24px", marginBottom: 14, display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#F2F2F8" }}>{item.title}</div>
                    <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {mainTab === "voices" && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                {VOICES_ACCT.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : "#12121F", cursor: "pointer" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#3a7d56" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
                <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #3a7d56", marginBottom: 24 }}>
                  <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {mainTab === "questions" && (
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10, color: "#F2F2F8" }}>Accountability Questions</h2>
            <p style={{ color: "#9898B3", marginBottom: 32, fontSize: 15, lineHeight: 1.75, maxWidth: 680 }}>
              These questions are drawn from the Wesleyan band-meeting tradition and the practice of serious disciples across church history.
              Bring them to your next meeting. Ask them honestly. Answer them honestly.
              The goal is not condemnation &mdash; it is the freedom that comes from walking in the light together.
            </p>
            {QUESTIONS_DATA.map(cat => (
              <div key={cat.id} style={{ marginBottom: 28, background: "#12121F", borderRadius: 12, border: "1px solid #1E1E32", padding: 24 }}>
                <h3 style={{ color: "#3a7d56", fontSize: 17, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>{cat.icon} {cat.category}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.questions.map((q, i) => (
                    <li key={i} style={{ padding: "10px 0", borderBottom: i < cat.questions.length - 1 ? "1px solid #1E1E32" : "none", color: "#F2F2F8", fontSize: 15, lineHeight: 1.6 }}>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {mainTab === "videos" && (
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on discipleship, accountability, and spiritual growth.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "t3ZYiRM0PN8", title: "John Piper and Darrin Patrick on Biblical Manhood (Part 1)", channel: "Desiring God", description: "Piper and Patrick discuss what it means to build deep, accountable friendships among Christian men — the kind that ask hard questions." },
                  { videoId: "DUVKRVJYzYc", title: "Helping Relationships: Course Lecture by Ed Welch", channel: "CCEF School of Biblical Counseling", description: "Ed Welch teaches how to build genuine, Christ-centered accountability and care in relationships — drawn from his work at CCEF." },
                  { videoId: "GfdP2o5NXWI", title: "Hope and Power to Change", channel: "CCEF", description: "A CCEF teaching on how the gospel provides the actual power for lasting change — the foundation of any real accountability relationship." },
                  { videoId: "LA7GitzS-bY", title: "What Is Biblical Counseling?", channel: "Edward T. Welch / CCEF", description: "Ed Welch explains what biblical counseling is and how the Scriptures speak practically into the struggles of real life." },
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
      </div>
      </main>
      <Footer />
    </div>
  );
}
