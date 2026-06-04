"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Devotional {
  id: string;
  title: string;
  verse: string;
  verseRef: string;
  body: string;
  prayer: string;
  application: string;
  theme: string;
  audience: string;
  author: string;
  createdAt: string;
  published: boolean;
  likes: number;
  views: number;
}

const themes = [
  "Faith", "Hope", "Love", "Grace", "Forgiveness", "Prayer",
  "Courage", "Identity", "Perseverance", "Gratitude", "Wisdom", "Peace",
  "Obedience", "Worship", "Community", "Healing", "Purpose", "Surrender",
];

const audiences = [
  "Everyone", "New Believers", "Youth", "Young Adults", "Men", "Women",
  "Married Couples", "Parents", "Leaders", "Missionaries", "Seniors",
];

const sampleDevotionals: Devotional[] = [
  {
    id: "sd1",
    title: "When You Feel Like You're Running on Empty",
    verse: "He gives strength to the weary and increases the power of the weak.",
    verseRef: "Isaiah 40:29",
    body: "There are seasons where doing the next right thing feels impossible. The tank is empty — relationally, spiritually, emotionally. You show up to prayer with nothing to say. You open your Bible and the words blur.\n\nHere's what Isaiah 40 doesn't say: it doesn't say God gives strength to those who try harder. Or those who pray longer. It says He gives strength to the weary — to the depleted, the spent, the done.\n\nYour emptiness is not a disqualifier. It's actually a prerequisite. His power is made perfect in weakness (2 Corinthians 12:9). The tank being empty means there's room for Him to fill it.",
    prayer: "Lord, I come to you with nothing to offer today. I'm tired in ways I can't fully explain. I ask for Your strength — not because I've earned it, but because You promised it to the weary. Fill what I've emptied. Renew what has faded. Let me wait on You today.",
    application: "Instead of pushing through with willpower today, pause for 5 minutes. Sit quietly, breathe, and simply say: 'Lord, I need You.' That's not laziness — that's faith.",
    theme: "Perseverance",
    audience: "Everyone",
    author: "Elena Rodriguez",
    createdAt: "2026-05-20T08:00:00Z",
    published: true,
    likes: 847,
    views: 3210,
  },
  {
    id: "sd2",
    title: "The Lie That You Have to Have It All Figured Out",
    verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
    verseRef: "Proverbs 3:5",
    body: "We live in a world obsessed with plans. Five-year plans. Life roadmaps. Knowing your 'why' before your 22nd birthday. Social media shows you peers who seem to have perfect clarity on their calling, career, and Instagram aesthetic.\n\nBut Proverbs 3:5 isn't just a comfort — it's a command with an assumption baked in: there will be things you don't understand. There will be doors that close for no apparent reason. Paths that go dark before they go light.\n\nLeaning not on your own understanding doesn't mean shutting off your brain. It means releasing the death grip of needing to control what you can't see. It means the next step is enough.",
    prayer: "Father, I confess I've tried to understand more than trust. I've made plans and asked You to bless them instead of asking You to lead them. Help me trust You even when the path is unclear. I choose to lean on You today, not on my own ability to figure things out.",
    application: "Write down one area of your life where you've been trying to 'figure it out' on your own. Pray over it specifically and choose to release control of the outcome.",
    theme: "Faith",
    audience: "Young Adults",
    author: "Marcus Webb",
    createdAt: "2026-05-18T07:30:00Z",
    published: true,
    likes: 1204,
    views: 4780,
  },
  {
    id: "sd3",
    title: "Grace Is Not Permission to Stay the Same",
    verse: "What shall we say, then? Shall we go on sinning so that grace may increase? By no means!",
    verseRef: "Romans 6:1-2",
    body: "Grace is the most liberating truth in all of Scripture. It means your sin doesn't have the final word. It means you can come back. It means there is no moral hole so deep that God's love can't reach the bottom of it.\n\nBut somewhere grace got confused with lowered expectations. 'God knows my heart.' 'I'm under grace, not law.' These are true statements used to justify staying comfortable in patterns that hurt us and grieve God.\n\nPaul is emphatic: grace is not a license. It's a launching pad. You've been freed from sin — not freed to keep sinning. The goal of grace isn't just forgiveness, it's transformation.",
    prayer: "Lord, thank You for grace that is greater than my sin. But don't let me stay where I am. Use Your grace not just to cover me but to change me. I want to become more like You — not because I have to, but because I get to.",
    application: "Is there an area of your life where you've been using grace as an excuse rather than a fuel? Confess it specifically to God, and ask for one practical step toward change.",
    theme: "Grace",
    audience: "Everyone",
    author: "Dr. James Obi",
    createdAt: "2026-05-15T09:00:00Z",
    published: true,
    likes: 2103,
    views: 7890,
  },
  {
    id: "sd4",
    title: "Your Marriage Is Not About Your Happiness",
    verse: "Husbands, love your wives, just as Christ loved the church and gave himself up for her.",
    verseRef: "Ephesians 5:25",
    body: "This may sound harsh at first: your marriage was not primarily designed to make you happy. I know — every wedding includes vows about love and joy and partnership. Those things are real and beautiful.\n\nBut Ephesians 5 holds up a different standard entirely: Christ and the church. Jesus didn't love the church when she was lovable. He loved her when she was broken, rebellious, unfaithful, and lost. And He gave Himself up — not just His preferences, but His life.\n\nThat's the template. Marriage is designed to sanctify you more than to satisfy you. It will expose your selfishness, your pride, your fear — and that exposure is the invitation to become more like Christ.",
    prayer: "Lord, forgive me for the ways I've approached my marriage looking for what I can get rather than who I can become. Teach me to love like You love — sacrificially, patiently, without condition. Give us both grace to grow together.",
    application: "Do one thing today that serves your spouse at real personal cost — time, preference, pride. Don't tell them it's a devotional exercise. Just do it.",
    theme: "Love",
    audience: "Married Couples",
    author: "Priscilla & Nathan Kim",
    createdAt: "2026-05-12T06:00:00Z",
    published: true,
    likes: 1567,
    views: 5340,
  },
  {
    id: "sd5",
    title: "You Are Not Behind",
    verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
    verseRef: "Jeremiah 29:11",
    body: "Comparison is a thief. It steals joy, distorts reality, and makes you feel like you're perpetually late to your own life. You look left and see a peer who's already married, promoted, planted a church, written a book. You look right and wonder why your timeline feels slower.\n\nHere's what the enemy doesn't want you to know: you're not running someone else's race. God spoke Jeremiah 29:11 to people in exile — people who had every human reason to believe they were 'behind.' His plans for them were still good.\n\nYour delay is not His denial. Your detour is not His mistake. You are exactly where you need to be for the next step He's prepared.",
    prayer: "Father, I release the pressure of comparing my timeline to others. Your plans for me are good — not despite the waiting, but through it. Help me run my race with patience, knowing You are not late.",
    application: "Name one thing you've been feeling 'behind' on. Write out why you believe God's timing is better than your preferred timeline. Read it when comparison hits again.",
    theme: "Identity",
    audience: "Young Adults",
    author: "Blessing Adeyemi",
    createdAt: "2026-05-08T07:00:00Z",
    published: true,
    likes: 3820,
    views: 14200,
  },
];

const STEP_LABELS = ["Verse & Theme", "Body", "Prayer & Application", "Preview & Publish"];

export default function DevotionalCreatorPage() {
  const [devotionals, setDevotionals] = useState<Devotional[]>(() => {
    try {
      const d = localStorage.getItem("vine_devotionals");
      if (d) {
        const parsed: Devotional[] = JSON.parse(d);
        return [...sampleDevotionals, ...parsed.filter((p) => !sampleDevotionals.find((s) => s.id === p.id))];
      }
    } catch {}
    return sampleDevotionals;
  });
  const [likedIds, setLikedIds] = useState<Set<string>>(() => {
    try { const l = localStorage.getItem("vine_devotionals_liked"); return l ? new Set(JSON.parse(l)) : new Set(); } catch { return new Set(); }
  });
  const [view, setView] = usePersistedState<"browse" | "create" | "detail">("vine_devotional-creator_view", "browse");
  const [selectedDev, setSelectedDev] = useState<Devotional | null>(null);
  const [step, setStep] = useState(0);
  const [filterTheme, setFilterTheme] = usePersistedState("vine_devotional-creator_filter_theme", "All");
  const [filterAudience, setFilterAudience] = usePersistedState("vine_devotional-creator_filter_audience", "All");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [draft, setDraft] = useState({
    title: "",
    verse: "",
    verseRef: "",
    body: "",
    prayer: "",
    application: "",
    theme: "Faith",
    audience: "Everyone",
    author: "",
  });


  const saveDevoToStorage = (list: Devotional[]) => {
    try {
      const custom = list.filter((d) => !sampleDevotionals.find((s) => s.id === d.id));
      localStorage.setItem("vine_devotionals", JSON.stringify(custom));
    } catch {}
  };

  const handleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_devotionals_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handlePublish = () => {
    const isEdit = editingId !== null;
    const newDev: Devotional = {
      id: editingId ?? Date.now().toString(),
      ...draft,
      createdAt: isEdit
        ? (devotionals.find((d) => d.id === editingId)?.createdAt ?? new Date().toISOString())
        : new Date().toISOString(),
      published: true,
      likes: isEdit ? (devotionals.find((d) => d.id === editingId)?.likes ?? 0) : 0,
      views: isEdit ? (devotionals.find((d) => d.id === editingId)?.views ?? 0) : 0,
    };
    const updated = isEdit
      ? devotionals.map((d) => (d.id === editingId ? newDev : d))
      : [newDev, ...devotionals];
    setDevotionals(updated);
    saveDevoToStorage(updated);
    setView("browse");
    setStep(0);
    setEditingId(null);
    setDraft({ title: "", verse: "", verseRef: "", body: "", prayer: "", application: "", theme: "Faith", audience: "Everyone", author: "" });
  };

  const handleEdit = (dev: Devotional) => {
    setDraft({
      title: dev.title,
      verse: dev.verse,
      verseRef: dev.verseRef,
      body: dev.body,
      prayer: dev.prayer,
      application: dev.application,
      theme: dev.theme,
      audience: dev.audience,
      author: dev.author,
    });
    setEditingId(dev.id);
    setStep(0);
    setView("create");
  };

  const handleDelete = (id: string) => {
    if (sampleDevotionals.find((s) => s.id === id)) return;
    const updated = devotionals.filter((d) => d.id !== id);
    setDevotionals(updated);
    saveDevoToStorage(updated);
    if (selectedDev?.id === id) { setSelectedDev(null); setView("browse"); }
  };

  const filtered = devotionals.filter(
    (d) =>
      (filterTheme === "All" || d.theme === filterTheme) &&
      (filterAudience === "All" || d.audience === filterAudience || d.audience === "Everyone")
  );

  const canAdvance = () => {
    if (step === 0) return draft.title && draft.verse && draft.verseRef;
    if (step === 1) return draft.body.length > 50;
    if (step === 2) return draft.prayer && draft.application;
    return true;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #07070F 0%, #120a24 60%, #07070F 100%)",
          padding: "48px 24px 36px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 10 }}>✍️</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Devotional Creator</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 540, margin: "0 auto 24px" }}>
          Write, share, and discover devotionals from believers around the world. Your insight might be exactly what someone needs today.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {view === "browse" && (
            <button type="button"
              onClick={() => { setView("create"); setStep(0); setEditingId(null); setDraft({ title: "", verse: "", verseRef: "", body: "", prayer: "", application: "", theme: "Faith", audience: "Everyone", author: "" }); }}
              style={{ padding: "10px 28px", borderRadius: 10, background: "#6B4FBB", border: "none", color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: 15 }}
            >
              + Write a Devotional
            </button>
          )}
          {view !== "browse" && (
            <button type="button"
              onClick={() => setView("browse")}
              style={{ padding: "10px 24px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
            >
              ← Back to Browse
            </button>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        {/* BROWSE */}
        {view === "browse" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Theme</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["All", ...themes.slice(0, 8)].map((t) => (
                    <button type="button"
                      key={t}
                      onClick={() => setFilterTheme(t)}
                      style={{
                        padding: "4px 12px", borderRadius: 20,
                        border: `1px solid ${filterTheme === t ? "#6B4FBB" : "#1E1E32"}`,
                        background: filterTheme === t ? "#6B4FBB20" : "transparent",
                        color: filterTheme === t ? "#6B4FBB" : "#9898B3",
                        cursor: "pointer", fontSize: 12,
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Audience</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["All", ...audiences.slice(0, 5)].map((a) => (
                    <button type="button"
                      key={a}
                      onClick={() => setFilterAudience(a)}
                      style={{
                        padding: "4px 12px", borderRadius: 20,
                        border: `1px solid ${filterAudience === a ? "#3a7d56" : "#1E1E32"}`,
                        background: filterAudience === a ? "#3a7d5620" : "transparent",
                        color: filterAudience === a ? "#3a7d56" : "#9898B3",
                        cursor: "pointer", fontSize: 12,
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filtered.map((dev) => {
                const liked = likedIds.has(dev.id);
                const isCustom = !sampleDevotionals.find((s) => s.id === dev.id);
                return (
                  <div
                    key={dev.id}
                    style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24, cursor: "pointer" }}
                    onClick={() => { setSelectedDev(dev); setView("detail"); }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ flex: 1, paddingRight: 16 }}>
                        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                          <span style={{ padding: "2px 10px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 11, fontWeight: 600 }}>{dev.theme}</span>
                          <span style={{ padding: "2px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 11 }}>{dev.audience}</span>
                          {isCustom && <span style={{ padding: "2px 10px", borderRadius: 20, background: "#3a7d5620", color: "#3a7d56", fontSize: 11, fontWeight: 600 }}>Yours</span>}
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", margin: "0 0 6px", lineHeight: 1.3 }}>{dev.title}</h3>
                        <div style={{ fontSize: 13, color: "#6B4FBB", fontStyle: "italic", marginBottom: 8 }}>
                          "{dev.verse}" — {dev.verseRef}
                        </div>
                        <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>
                          {dev.body.slice(0, 180)}...
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #1E1E32" }}>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>
                        By {dev.author} · {dev.views.toLocaleString()} views · {new Date(dev.createdAt).toLocaleDateString()}
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        {isCustom && (
                          <>
                            <button type="button"
                              onClick={(e) => { e.stopPropagation(); handleEdit(dev); }}
                              style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: "#1E1E32", color: "#9898B3", cursor: "pointer", fontSize: 12 }}
                            >
                              Edit
                            </button>
                            <button type="button"
                              onClick={(e) => { e.stopPropagation(); handleDelete(dev.id); }}
                              style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: "#EF444420", color: "#EF4444", cursor: "pointer", fontSize: 12 }}
                            >
                              Delete
                            </button>
                          </>
                        )}
                        <button type="button"
                          onClick={(e) => { e.stopPropagation(); handleLike(dev.id); }}
                          style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: liked ? "#3a7d5620" : "#1E1E32", color: liked ? "#3a7d56" : "#9898B3", cursor: "pointer", fontSize: 12 }}
                        >
                          ♥ {dev.likes + (liked ? 1 : 0)}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* DETAIL */}
        {view === "detail" && selectedDev && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ padding: "3px 12px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 12, fontWeight: 600 }}>{selectedDev.theme}</span>
              <span style={{ marginLeft: 8, padding: "3px 12px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 12 }}>{selectedDev.audience}</span>
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#F2F2F8", margin: "12px 0 8px", lineHeight: 1.3 }}>
              {selectedDev.title}
            </h1>
            <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 24 }}>
              By {selectedDev.author} · {new Date(selectedDev.createdAt).toLocaleDateString()} · {selectedDev.views.toLocaleString()} views
            </div>

            {/* Verse block */}
            <div style={{ background: "#12121F", borderRadius: 12, padding: 20, marginBottom: 28, borderLeft: "4px solid #6B4FBB" }}>
              <div style={{ fontSize: 11, color: "#9898B3", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Today's Verse</div>
              <div style={{ fontSize: 18, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.6, marginBottom: 6 }}>
                "{selectedDev.verse}"
              </div>
              <div style={{ fontSize: 13, color: "#6B4FBB", fontWeight: 600 }}>{selectedDev.verseRef}</div>
            </div>

            {/* Body */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#9898B3", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Devotional</div>
              {selectedDev.body.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: "#D0D0E8", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
              ))}
            </div>

            {/* Prayer */}
            <div style={{ background: "#12121F", borderRadius: 12, padding: 20, marginBottom: 24, borderLeft: "4px solid #3a7d56" }}>
              <div style={{ fontSize: 11, color: "#3a7d56", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>🙏 Prayer</div>
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8, margin: 0 }}>{selectedDev.prayer}</p>
            </div>

            {/* Application */}
            <div style={{ background: "#12121F", borderRadius: 12, padding: 20, marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>⚡ Today's Application</div>
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.7, margin: 0 }}>{selectedDev.application}</p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="button"
                onClick={() => handleLike(selectedDev.id)}
                style={{
                  flex: 1, padding: "12px 20px", borderRadius: 10,
                  border: `1px solid ${likedIds.has(selectedDev.id) ? "#3a7d5640" : "#1E1E32"}`,
                  background: likedIds.has(selectedDev.id) ? "#3a7d5620" : "#12121F",
                  color: likedIds.has(selectedDev.id) ? "#3a7d56" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 15,
                }}
              >
                ♥ {likedIds.has(selectedDev.id) ? "Liked" : "Like"} ({selectedDev.likes + (likedIds.has(selectedDev.id) ? 1 : 0)})
              </button>
              <button type="button"
                onClick={() => { setSelectedDev(null); setView("browse"); }}
                style={{ padding: "12px 24px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* CREATE / EDIT */}
        {view === "create" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 6 }}>
              {editingId ? "Edit Devotional" : "Write a Devotional"}
            </h2>
            <p style={{ fontSize: 14, color: "#9898B3", marginBottom: 24 }}>
              Share what God has been teaching you with the Vine community.
            </p>

            {/* Step indicator */}
            <div style={{ display: "flex", gap: 0, marginBottom: 32 }}>
              {STEP_LABELS.map((label, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div
                    style={{
                      height: 4,
                      borderRadius: 2,
                      background: i <= step ? "#6B4FBB" : "#1E1E32",
                      marginBottom: 6,
                      transition: "background 0.3s",
                    }}
                  />
                  <div style={{ fontSize: 10, color: i === step ? "#6B4FBB" : "#9898B3", fontWeight: i === step ? 600 : 400 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Step 0: Verse & Theme */}
            {step === 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Title *</label>
                  <input
                    value={draft.title}
                    onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))}
                    aria-label="Give your devotional a title..." placeholder="Give your devotional a title..."
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Scripture verse *</label>
                  <input
                    value={draft.verse}
                    onChange={(e) => setDraft((p) => ({ ...p, verse: e.target.value }))}
                    aria-label="e.g. For I can do all things through Christ who strengthens me." placeholder="e.g. For I can do all things through Christ who strengthens me."
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Reference *</label>
                  <input
                    value={draft.verseRef}
                    onChange={(e) => setDraft((p) => ({ ...p, verseRef: e.target.value }))}
                    aria-label="e.g. Philippians 4:13" placeholder="e.g. Philippians 4:13"
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Theme</label>
                    <select aria-label="Theme"
                      value={draft.theme}
                      onChange={(e) => setDraft((p) => ({ ...p, theme: e.target.value }))}
                      style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14 }}
                    >
                      {themes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Audience</label>
                    <select aria-label="Audience"
                      value={draft.audience}
                      onChange={(e) => setDraft((p) => ({ ...p, audience: e.target.value }))}
                      style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14 }}
                    >
                      {audiences.map((a) => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Your name</label>
                  <input
                    value={draft.author}
                    onChange={(e) => setDraft((p) => ({ ...p, author: e.target.value }))}
                    aria-label="How should your name appear?" placeholder="How should your name appear?"
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              </div>
            )}

            {/* Step 1: Body */}
            {step === 1 && (
              <div>
                <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>
                  Devotional body * <span style={{ color: draft.body.length < 50 ? "#EF4444" : "#3a7d56" }}>({draft.body.length} chars)</span>
                </label>
                <textarea
                  value={draft.body}
                  onChange={(e) => setDraft((p) => ({ ...p, body: e.target.value }))}
                  placeholder="Share the insight, story, or truth God has put on your heart. Write naturally — as if you're talking to a friend who needs encouragement today.

Break into paragraphs for readability. Aim for 200–600 words."
                  rows={16}
                  style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", lineHeight: 1.7, boxSizing: "border-box" }}
                />
              </div>
            )}

            {/* Step 2: Prayer & Application */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Closing prayer *</label>
                  <textarea
                    value={draft.prayer}
                    onChange={(e) => setDraft((p) => ({ ...p, prayer: e.target.value }))}
                    aria-label="Write a prayer the reader can pray. First person — 'Lord, I...' — works best." placeholder="Write a prayer the reader can pray. First person — 'Lord, I...' — works best."
                    rows={5}
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Today's application *</label>
                  <textarea
                    value={draft.application}
                    onChange={(e) => setDraft((p) => ({ ...p, application: e.target.value }))}
                    aria-label="Give one specific, actionable step the reader can take today based on this devotional." placeholder="Give one specific, actionable step the reader can take today based on this devotional."
                    rows={4}
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Preview */}
            {step === 3 && (
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 16, fontWeight: 600, textTransform: "uppercase" }}>Preview</div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>{draft.title}</h2>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 16 }}>
                  By {draft.author || "You"} · {draft.theme} · For {draft.audience}
                </div>
                <div style={{ borderLeft: "3px solid #6B4FBB", padding: "10px 14px", marginBottom: 16 }}>
                  <div style={{ fontSize: 14, fontStyle: "italic", color: "#F2F2F8" }}>"{draft.verse}"</div>
                  <div style={{ fontSize: 12, color: "#6B4FBB", marginTop: 4 }}>{draft.verseRef}</div>
                </div>
                <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, marginBottom: 12 }}>{draft.body.slice(0, 200)}...</p>
                <div style={{ fontSize: 12, color: "#9898B3", background: "#07070F", padding: 12, borderRadius: 8, marginBottom: 8 }}>
                  🙏 {draft.prayer.slice(0, 100)}...
                </div>
                <div style={{ fontSize: 12, color: "#F59E0B" }}>⚡ {draft.application.slice(0, 100)}...</div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              {step > 0 && (
                <button type="button"
                  onClick={() => setStep((s) => s - 1)}
                  style={{ padding: "11px 24px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
                >
                  ← Back
                </button>
              )}
              {step < 3 ? (
                <button type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  style={{
                    flex: 1, padding: "11px 24px", borderRadius: 10, border: "none",
                    background: canAdvance() ? "#6B4FBB" : "#1E1E32",
                    color: canAdvance() ? "#fff" : "#9898B3",
                    cursor: canAdvance() ? "pointer" : "default",
                    fontWeight: 700, fontSize: 15,
                  }}
                >
                  Continue →
                </button>
              ) : (
                <button type="button"
                  onClick={handlePublish}
                  style={{ flex: 1, padding: "11px 24px", borderRadius: 10, border: "none", background: "#3a7d56", color: "#07070F", cursor: "pointer", fontWeight: 700, fontSize: 15 }}
                >
                  {editingId ? "Save Changes" : "Publish Devotional"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
