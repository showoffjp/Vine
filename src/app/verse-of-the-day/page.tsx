"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DailyVerse = {
  id: number; reference: string; text: string; theme: string; themeColor: string;
  reflection: string; prayer: string; application: string; relatedVerses: string[];
};

const verses: DailyVerse[] = [
  {
    id: 1,
    reference: "Lamentations 3:22-23",
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    theme: "God's Faithfulness",
    themeColor: GREEN,
    reflection: "These verses were written in the darkest chapter of Israel's history — Jerusalem had fallen, the temple was in ruins, and Jeremiah was surrounded by devastation. And yet, in the middle of that catastrophe, he anchors himself to one unchanging reality: God's mercies are new every morning.\n\nWhat makes this remarkable is the context. Jeremiah isn't saying this from comfort — he's saying it while surrounded by rubble. The declaration of God's faithfulness is most powerful when everything visible contradicts it.",
    prayer: "Father, today I receive your new mercies. Whatever weight I carry from yesterday, you don't hold it against me. Your compassions don't run out. Help me to see this day as a fresh gift — not earned by yesterday's performance, not owed for yesterday's failures. Just grace. Just faithfulness. Just you.",
    application: "Write down one specific thing from the past week that felt like failure. Then write: 'New mercies today.' Let the declaration of God's faithfulness speak to that specific failure.",
    relatedVerses: ["Psalm 30:5", "Romans 8:1", "Philippians 4:13"]
  },
  {
    id: 2,
    reference: "Romans 8:38-39",
    text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    theme: "God's Love",
    themeColor: "#EF4444",
    reflection: "Paul doesn't say 'I hope' or 'I believe' — he says 'I am convinced.' This is the language of settled certainty based on evidence. And the list he gives is exhaustive and radical:\n\nDeath can't do it. Life can't do it. Angels and demons can't. Time — past and future — can't. Space itself can't. Nothing in all creation can.\n\nThe logic is airtight: if nothing in creation can separate you from God's love, and you are part of creation, then you cannot separate yourself either. God's love is not contingent on your performance.",
    prayer: "Jesus, I receive this. When I feel far from you — because of sin, doubt, grief, or just the numbness of ordinary life — this is true. You are holding me. Nothing I have done or will do can reach the bottom of your love for me. Let this settle into my bones today.",
    application: "On a piece of paper, write the thing you are most afraid would make God stop loving you. Then cross it out with the words: 'nor anything else in all creation.'",
    relatedVerses: ["John 10:28-29", "Psalm 139:8-10", "Romans 5:8"]
  },
  {
    id: 3,
    reference: "Isaiah 40:31",
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    theme: "Strength & Renewal",
    themeColor: "#F59E0B",
    reflection: "The order here is counterintuitive: soar, then run, then walk. We'd expect the reverse — start slow, build up, then fly. But the biblical pattern is different: the most dramatic expression of God's power comes first, then the sustained middle, then the quiet faithfulness at the end.\n\nNotice too that walking is included as a form of renewal — not just soaring. Sometimes faithfulness looks like just showing up, putting one foot in front of the other when flying feels impossible. God meets us there too.",
    prayer: "Lord, I am tired. The kind of tired that sleep doesn't fully fix. I need your renewal — not just rest, but regeneration. I choose to hope in you today, not in my own strength, not in circumstances changing. Just in you. Renew me from the inside out.",
    application: "What drains you most? Name it specifically. Now ask: what would it look like to 'hope in the Lord' specifically about that thing? Write a one-sentence prayer about it.",
    relatedVerses: ["Psalm 121:1-2", "2 Corinthians 12:9", "Matthew 11:28-30"]
  },
  {
    id: 4,
    reference: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
    theme: "Justice & Mercy",
    themeColor: "#10B981",
    reflection: "This is one of the most compressed summaries of ethics in all of Scripture. Three things: act justly, love mercy, walk humbly.\n\nNote what's not on this list. Not 'perform religious rituals' (Micah has just critiqued empty sacrifice in verse 6-7). Not 'believe correct doctrines.' Not 'feel the right feelings.' Three verbs: act, love, walk.\n\nAlso notice the sequence: justice and mercy together. Justice without mercy is cruelty. Mercy without justice is naivety. The person who embodies both doesn't toggle between them — they hold them simultaneously, rooted in humility before God.",
    prayer: "God, show me where I am choosing comfort over justice. Where I am demanding truth without mercy. And ground both in genuine humility — not as a posture I perform, but as the recognition that I depend on you completely. Let me act, love, and walk faithfully today.",
    application: "Is there someone in your life who needs you to practice justice? Mercy? Identify one concrete action you can take this week.",
    relatedVerses: ["Matthew 23:23", "James 2:13", "Proverbs 21:3"]
  },
  {
    id: 5,
    reference: "John 15:5",
    text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    theme: "Abiding in Christ",
    themeColor: PURPLE,
    reflection: "This is Jesus's metaphor for the entire Christian life: branch on a vine. The branch doesn't produce fruit by effort — it bears fruit naturally when connected to the vine.\n\nThe word 'remain' (meno) means to dwell, to stay, to make your home in. It's not striving; it's settling. The question Jesus is asking is not 'How hard are you working for me?' but 'Where are you at home?'\n\nApart from Jesus, he says, 'you can do nothing.' Not 'less' — nothing. This is a radical claim about the nature of spiritual fruitfulness. It all flows from connection.",
    prayer: "Jesus, I want to remain in you today. Not perform for you, not earn from you — just be with you. Help me to make my home in you: in your words, in your presence, in your way of seeing. Let everything I do today flow from that connection rather than from my own effort.",
    application: "What is one thing you're trying to accomplish today through effort alone that might actually require connection to Jesus? Bring it explicitly to him in prayer before you begin.",
    relatedVerses: ["Psalm 92:12-15", "Galatians 5:22-23", "Colossians 1:10"]
  },
  {
    id: 6,
    reference: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
    theme: "Strength in Weakness",
    themeColor: "#EC4899",
    reflection: "Paul had a 'thorn in the flesh' — something painful and persistent he wanted God to remove. He asked three times. God said no — and then said something more surprising: the weakness is where my power shows up best.\n\nThis inverts everything culture tells us. Culture says: be strong, be capable, eliminate your weaknesses. God says: your weakness is not an obstacle to my power — it's the precise place my power can be most clearly seen.\n\nWhen we are at the end of our strength, God is not — and that gap is where grace becomes visible.",
    prayer: "Lord, I bring you the places where I feel most inadequate today. I don't want to pretend I have it together. I want your power, not my performance. Let my weakness become an occasion for your grace to be more visible than my competence ever could be.",
    application: "Write down your greatest weakness or inadequacy right now. Next to it write: 'God's power is made perfect here.' Carry this verse with you today.",
    relatedVerses: ["Philippians 4:13", "Romans 8:26", "1 Corinthians 1:27-28"]
  },
  {
    id: 7,
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    theme: "Trust & Guidance",
    themeColor: "#3B82F6",
    reflection: "The contrast is 'all your heart' vs. 'your own understanding.' Both are real places you can put your weight. The proverb doesn't say your understanding is worthless — it says don't lean on it exclusively.\n\nTo 'lean' is a posture image: the thing you lean on is what holds you up when you're tired. Lean the wrong way and you fall. The point isn't to distrust your mind — it's to trust God more than your mind, especially when your understanding hits its limits.\n\n'He will make your paths straight' — not smooth, not obstacle-free. Straight. Directed. There's a difference.",
    prayer: "God, I confess that my natural instinct is to trust my own analysis first and ask you second, if at all. Reverse that today. Help me to bring you my decisions, my confusion, my questions — before I've already concluded. I want your direction, not just your confirmation.",
    application: "What decision are you carrying right now? Have you prayed about it specifically, or are you waiting until you've figured it out yourself? Pray about it now.",
    relatedVerses: ["Psalm 37:5", "James 1:5", "Jeremiah 29:11"]
  },
];

type JournalEntry = { date: string; verseId: number; reflection: string; timestamp: number };

export default function VerseOfTheDayPage() {
  const todayIndex = (new Date().getDate() - 1) % verses.length;
  const [selectedId, setSelectedId] = useState<number>(verses[todayIndex].id);
  const [view, setView] = useState<"verse" | "reflection" | "prayer" | "journal">("verse");
  const [journalText, setJournalText] = useState("");
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_votd_journal") || "[]"); } catch { return []; }
  });
  const [journalSaved, setJournalSaved] = useState(false);
  const [copiedVerse, setCopiedVerse] = useState(false);
  const [likedVerses, setLikedVerses] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_votd_liked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_votd_journal", JSON.stringify(journalEntries)); } catch {}
  }, [journalEntries]);
  useEffect(() => {
    try { localStorage.setItem("vine_votd_liked", JSON.stringify([...likedVerses])); } catch {}
  }, [likedVerses]);

  const selectedVerse = verses.find(v => v.id === selectedId) || verses[0];
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const todayStr = new Date().toISOString().slice(0, 10);

  const saveJournal = () => {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { date: todayStr, verseId: selectedId, reflection: journalText.trim(), timestamp: Date.now() };
    setJournalEntries(prev => [entry, ...prev.filter(e => !(e.date === todayStr && e.verseId === selectedId))]);
    setJournalSaved(true);
    setTimeout(() => setJournalSaved(false), 2000);
  };

  const copyVerse = () => {
    navigator.clipboard?.writeText(`"${selectedVerse.text}" — ${selectedVerse.reference}`).catch(() => {});
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  const toggleLike = (id: number) => setLikedVerses(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", borderRadius: 20, padding: "6px 16px", marginBottom: 12 }}>
            <span style={{ fontSize: 14 }}>☀️</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Verse of the Day</span>
          </div>
          <p style={{ fontSize: 14, color: MUTED }}>{today}</p>
        </div>

        {/* Main Verse Card */}
        <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.12), rgba(0,255,136,0.06))`, border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 20, padding: "36px 32px", marginBottom: 24, textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: `${selectedVerse.themeColor}20`, border: `1px solid ${selectedVerse.themeColor}40`, marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: selectedVerse.themeColor }}>{selectedVerse.theme}</span>
          </div>
          <p style={{ fontSize: 20, lineHeight: 1.8, fontStyle: "italic", color: TEXT, marginBottom: 20, fontWeight: 500 }}>
            "{selectedVerse.text}"
          </p>
          <p style={{ fontSize: 15, fontWeight: 800, color: selectedVerse.themeColor, marginBottom: 24 }}>— {selectedVerse.reference}</p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={copyVerse}
              style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${BORDER}`, background: copiedVerse ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)", color: copiedVerse ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
              {copiedVerse ? "✓ Copied!" : "📋 Copy Verse"}
            </button>
            <button onClick={() => toggleLike(selectedId)}
              style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${likedVerses.has(selectedId) ? "#EF4444" + "40" : BORDER}`, background: likedVerses.has(selectedId) ? "rgba(239,68,68,0.08)" : "rgba(255,255,255,0.04)", color: likedVerses.has(selectedId) ? "#EF4444" : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
              {likedVerses.has(selectedId) ? "♥ Loved" : "♡ Love This"}
            </button>
            <a href="/verse-memory"
              style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${PURPLE}40`, background: `${PURPLE}10`, color: PURPLE, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
              🧠 Add to Memory
            </a>
          </div>
        </div>

        {/* View tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "verse", label: "📖 Reflection" },
            { id: "prayer", label: "🙏 Prayer" },
            { id: "reflection", label: "🎯 Apply It" },
            { id: "journal", label: "✍️ Journal" },
          ].map(t => (
            <button key={t.id} onClick={() => setView(t.id as typeof view)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, background: view === t.id ? PURPLE : "transparent", color: view === t.id ? TEXT : MUTED, transition: "background 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content by view */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px", marginBottom: 28, minHeight: 200 }}>
          {view === "verse" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: selectedVerse.themeColor }}>Digging Deeper</h3>
              {selectedVerse.reflection.split("\n").map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.85, marginBottom: 12 }}>{para}</p>
              ))}
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Related Verses</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {selectedVerse.relatedVerses.map(v => (
                    <span key={v} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {view === "prayer" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: selectedVerse.themeColor }}>A Prayer from This Verse</h3>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: "20px", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>{selectedVerse.prayer}</p>
              </div>
              <p style={{ fontSize: 13, color: MUTED, marginTop: 16 }}>Sit with this prayer. Read it slowly, twice. Then speak your own words from where you are right now.</p>
            </div>
          )}
          {view === "reflection" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: selectedVerse.themeColor }}>Apply It Today</h3>
              <div style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.15)", borderRadius: 12, padding: "20px" }}>
                <p style={{ fontSize: 15, color: "#B0F0C0", lineHeight: 1.85, margin: 0 }}>{selectedVerse.application}</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 13, color: MUTED, marginBottom: 12 }}>Ready to journal your response? Switch to the Journal tab.</p>
                <button onClick={() => setView("journal")}
                  style={{ padding: "10px 22px", borderRadius: 10, border: `1px solid ${GREEN}40`, background: "rgba(0,255,136,0.08)", color: GREEN, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                  ✍️ Open Journal →
                </button>
              </div>
            </div>
          )}
          {view === "journal" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6, color: selectedVerse.themeColor }}>Your Reflection</h3>
              <p style={{ fontSize: 13, color: MUTED, marginBottom: 14 }}>What is God saying to you through this verse today?</p>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder="Write your reflection here..."
                rows={6}
                style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", color: TEXT, fontSize: 14, resize: "none", outline: "none", lineHeight: 1.7, marginBottom: 12, boxSizing: "border-box" }} />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={saveJournal} disabled={!journalText.trim()}
                  style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: journalSaved ? "rgba(0,255,136,0.15)" : `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: journalSaved ? GREEN : BG, cursor: "pointer", fontSize: 14, fontWeight: 800 }}>
                  {journalSaved ? "✓ Saved!" : "Save Reflection"}
                </button>
              </div>

              {journalEntries.length > 0 && (
                <div style={{ marginTop: 20 }}>
                  <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Past Reflections</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {journalEntries.slice(0, 5).map((entry, i) => (
                      <div key={i} style={{ padding: "12px 16px", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: `1px solid ${BORDER}` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700 }}>{verses.find(v => v.id === entry.verseId)?.reference || ""}</span>
                          <span style={{ fontSize: 11, color: MUTED }}>{entry.date}</span>
                        </div>
                        <p style={{ fontSize: 13, color: "#A0A0C0", margin: 0, lineHeight: 1.6 }}>{entry.reflection.slice(0, 120)}{entry.reflection.length > 120 ? "..." : ""}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Verse Selector */}
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 14, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>All Verses This Week</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {verses.map((v, i) => (
              <button key={v.id} onClick={() => { setSelectedId(v.id); setView("verse"); }}
                style={{ padding: "14px 16px", borderRadius: 12, border: `1px solid ${selectedId === v.id ? v.themeColor + "50" : BORDER}`, background: selectedId === v.id ? `${v.themeColor}10` : CARD, cursor: "pointer", textAlign: "left", position: "relative" }}>
                {i === todayIndex && (
                  <span style={{ position: "absolute", top: 8, right: 8, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: "rgba(0,255,136,0.15)", color: GREEN }}>Today</span>
                )}
                <p style={{ fontSize: 12, fontWeight: 800, color: v.themeColor, margin: "0 0 4px" }}>{v.reference}</p>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.theme}</p>
                {likedVerses.has(v.id) && <span style={{ fontSize: 10, color: "#EF4444" }}>♥</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
