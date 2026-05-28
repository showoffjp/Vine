"use client";

import { useState, useEffect } from "react";

interface CouplesDevotional {
  id: string;
  day: number;
  title: string;
  theme: string;
  verse: string;
  verseRef: string;
  husbandReflection: string;
  wifeReflection: string;
  togetherDiscussion: string[];
  prayerPrompt: string;
  activity: string;
}

interface Progress {
  completedDays: number[];
  startedAt: string;
  currentPlan: string;
  partnerName: string;
}

const devotionals: CouplesDevotional[] = [
  {
    id: "d1", day: 1,
    title: "Two Becoming One",
    theme: "Unity",
    verse: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    verseRef: "Matthew 19:6",
    husbandReflection: "Unity in marriage isn't automatic — it's chosen, daily. Think about one area where you've been pulling in a different direction from your spouse. Not with blame, but with honesty. What's one step you could take today toward greater alignment?",
    wifeReflection: "God designed marriage as a living parable of the relationship between Christ and the church. That's an extraordinary calling. How does knowing that God is the one who joined you together change how you approach the hard days?",
    togetherDiscussion: [
      "What does 'oneness' look like practically in our daily life?",
      "Where do we feel most unified as a couple right now?",
      "Is there one area of our life where we need to make a decision together that we've been avoiding?",
    ],
    prayerPrompt: "Pray together for unity — not sameness, but a deep alignment of hearts, goals, and purpose. Ask God to show you both one area to work on this week.",
    activity: "Write down three things you genuinely admire about your spouse. Share them out loud.",
  },
  {
    id: "d2", day: 2,
    title: "The Language of Service",
    theme: "Serving Each Other",
    verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.",
    verseRef: "Philippians 2:3",
    husbandReflection: "Jesus modeled servant leadership not as a compromise of authority but as the definition of it. Ask yourself honestly: in our home, do I lead by serving or by expecting service? What would it look like to wash your spouse's feet figuratively today?",
    wifeReflection: "Service in marriage isn't about losing yourself — it's about finding the version of yourself that looks most like Christ. What's one act of service you could do for your husband today that would communicate love in a way he specifically understands?",
    togetherDiscussion: [
      "What does 'feeling served' look like to each of us? (Our answers may be different!)",
      "When do we feel most loved by each other?",
      "Is there an area where one of us feels like the burden has been unequal? How can we address that together?",
    ],
    prayerPrompt: "Each of you pray a sentence for the other — thanking God specifically for something your spouse has done to serve you recently.",
    activity: "Choose one practical task your partner usually handles and do it for them today without being asked.",
  },
  {
    id: "d3", day: 3,
    title: "When Conflict Comes",
    theme: "Conflict Resolution",
    verse: "'In your anger do not sin': Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
    verseRef: "Ephesians 4:26-27",
    husbandReflection: "Paul doesn't say 'don't get angry' — he says don't let it become sin. The difference lies in what we do in the gap between feeling the emotion and choosing our response. What patterns have you noticed in how you handle conflict? What do you want to change?",
    wifeReflection: "The instruction not to let the sun go down on anger is as much about the relationship's health as our own peace. Unresolved conflict gives the enemy a 'foothold' — a small place to gain leverage over time. Are there any old unresolved tensions that need to be addressed honestly?",
    togetherDiscussion: [
      "What does our conflict resolution pattern look like? Do we have a healthy way to 'repair' after a fight?",
      "Are there topics we avoid because they feel too charged? Why?",
      "What's one thing you need from me when we're in conflict?",
    ],
    prayerPrompt: "Pray for peace in your home — but specifically, for the courage to address rather than avoid difficult conversations.",
    activity: "Make a simple 'conflict agreement' together: 3 rules you both commit to in disagreements (e.g., no raised voices, always finish the conversation before bed, one speaker at a time).",
  },
  {
    id: "d4", day: 4,
    title: "Praying Together",
    theme: "Shared Prayer Life",
    verse: "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven.",
    verseRef: "Matthew 18:19",
    husbandReflection: "Research consistently shows that couples who pray together have dramatically lower divorce rates. But prayer together can feel vulnerable — you're exposed. The things you pray for reveal what you actually care about and fear. What's one thing you've been afraid to pray with your spouse about?",
    wifeReflection: "Matthew 18:19 carries extraordinary weight — the promise of agreed prayer. But 'agreeing' requires knowing what the other person is asking for. When did you last really know what your husband was praying about? And vice versa?",
    togetherDiscussion: [
      "Do we have a regular practice of praying together? If not, what gets in the way?",
      "What are the three biggest things on our hearts to pray about as a family right now?",
      "Does praying together feel vulnerable or natural? Why?",
    ],
    prayerPrompt: "Pray out loud together — right now. No structure required. Just each take a turn speaking to God. Two minutes each is enough to start.",
    activity: "Set a recurring 5-minute 'couple prayer' in your calendars — morning or evening. Commit to it for one week.",
  },
  {
    id: "d5", day: 5,
    title: "The Gift of Forgiveness",
    theme: "Forgiveness",
    verse: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
    verseRef: "Colossians 3:13",
    husbandReflection: "Notice the standard: forgive as the Lord forgave you. Not because your spouse deserves it. Not because the offense wasn't real. But because of what God has done for you. Is there anything you've been holding against your wife that you haven't fully released?",
    wifeReflection: "Forgiveness in marriage isn't a one-time event — it's a practice. And it doesn't mean pretending the wound didn't happen. It means choosing the relationship over the score. Is there something you've forgiven in theory but still replay mentally?",
    togetherDiscussion: [
      "Is there anything between us that hasn't been fully forgiven and released?",
      "What makes forgiveness hard? What makes it easier?",
      "How do we make space for each other to apologize well?",
    ],
    prayerPrompt: "This may be a tender prayer. Ask God to help you release anything you've been holding, and thank Him for the model of forgiveness He gave you in Christ.",
    activity: "If there's something unresolved between you, use this as the moment to say 'I forgive you' out loud. If everything is clear, share a memory of a time you felt truly forgiven by the other.",
  },
  {
    id: "d6", day: 6,
    title: "Raising a Legacy",
    theme: "Parenting Together",
    verse: "Start children off on the way they should go, and even when they are old they will not turn from it.",
    verseRef: "Proverbs 22:6",
    husbandReflection: "Fatherhood is one of the most significant things you'll ever do. But it requires intention — children absorb our example far more than our instructions. What is one thing about the way you were fathered that you want to repeat, and one thing you want to do differently?",
    wifeReflection: "There's no role quite like mother. You shape the emotional architecture of your child's life. What kind of home do you want to create — in terms of atmosphere, warmth, faith, honesty? And how do you and your husband align on that vision?",
    togetherDiscussion: [
      "What are our 3 core values we want to pass to our children?",
      "Where do we align well as parents? Where do we need to get on the same page?",
      "What spiritual practices do we want to be normal in our home?",
    ],
    prayerPrompt: "Pray specifically for each of your children by name — their character, their faith, and God's purposes for their lives.",
    activity: "Write a one-paragraph 'vision statement' for your family. What kind of people do you want to raise? What do you want your home to be known for?",
  },
  {
    id: "d7", day: 7,
    title: "Facing the Future Together",
    theme: "Shared Vision",
    verse: "Unless the Lord builds the house, the builders labor in vain.",
    verseRef: "Psalm 127:1",
    husbandReflection: "Vision without God is just ambition. Psalm 127 doesn't discourage work — it reframes its source. Where in our life together have we been building on our own strength and wisdom, without really inviting God into the planning? What would change if we did?",
    wifeReflection: "Shared vision is one of the most powerful bonds in a marriage. When you know where you're going together — your values, your goals, your calling — small decisions become easier and conflict becomes less destabilizing. How aligned do you feel with your husband right now on where your life is headed?",
    togetherDiscussion: [
      "If we could design our life 10 years from now, what would it look like?",
      "Are there dreams we've stopped talking about? Why?",
      "What is God calling us toward together that requires more faith than we're currently walking in?",
    ],
    prayerPrompt: "Pray together for your future — not just the practical details, but for the kind of people you want to be, the legacy you want to leave, and for God to build your house.",
    activity: "Create a simple 'marriage vision board' — write down 5 things you want to experience, build, or give together in the next 5 years.",
  },
];

const plans = [
  { id: "7day", label: "7-Day Foundation Series", description: "Core themes: Unity, Service, Conflict, Prayer, Forgiveness, Parenting, Vision" },
  { id: "romance", label: "30-Day Romance Renewal", description: "Coming soon — daily devotionals focused on rekindling joy and connection" },
  { id: "crisis", label: "When Marriage Is Hard", description: "Coming soon — for couples in a difficult season" },
];

export default function CouplesDevotionalPage() {
  const [progress, setProgress] = useState<Progress>({
    completedDays: [],
    startedAt: "",
    currentPlan: "7day",
    partnerName: "",
  });
  const [selectedDay, setSelectedDay] = useState<CouplesDevotional | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [activeSection, setActiveSection] = useState<"husband" | "wife" | "together">("together");

  useEffect(() => {
    try {
      const p = localStorage.getItem("vine_couples_devotional");
      if (p) setProgress(JSON.parse(p));
    } catch {}
  }, []);

  const saveProgress = (p: Progress) => {
    try { localStorage.setItem("vine_couples_devotional", JSON.stringify(p)); } catch {}
  };

  const handleComplete = (day: number) => {
    const next: Progress = {
      ...progress,
      completedDays: progress.completedDays.includes(day)
        ? progress.completedDays.filter((d) => d !== day)
        : [...progress.completedDays, day],
      startedAt: progress.startedAt || new Date().toISOString(),
    };
    setProgress(next);
    saveProgress(next);
  };

  const handleSaveName = () => {
    const next = { ...progress, partnerName: nameInput };
    setProgress(next);
    saveProgress(next);
    setEditingName(false);
  };

  const completedCount = progress.completedDays.length;
  const totalDays = devotionals.length;
  const progressPct = Math.round((completedCount / totalDays) * 100);

  const nextDay = devotionals.find((d) => !progress.completedDays.includes(d.day));

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>💑</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Couples Devotional</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 20px" }}>
          Daily devotionals designed for two. Individual reflections, shared discussion, and prayer prompts that draw you closer to God and to each other.
        </p>

        {/* Partner setup */}
        {!progress.partnerName && !editingName ? (
          <button onClick={() => setEditingName(true)}
            style={{ padding: "8px 20px", borderRadius: 10, background: "#6B4FBB", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
            + Add Your Partner's Name
          </button>
        ) : editingName ? (
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
              placeholder="Partner's name..."
              style={{ padding: "8px 14px", borderRadius: 8, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
            <button onClick={handleSaveName}
              style={{ padding: "8px 16px", borderRadius: 8, background: "#00FF88", border: "none", color: "#07070F", cursor: "pointer", fontWeight: 700 }}>
              Save
            </button>
          </div>
        ) : (
          <div style={{ fontSize: 14, color: "#9898B3" }}>
            Doing this with <strong style={{ color: "#F2F2F8" }}>{progress.partnerName}</strong>
            <button onClick={() => { setEditingName(true); setNameInput(progress.partnerName); }}
              style={{ marginLeft: 8, fontSize: 11, color: "#6B4FBB", background: "none", border: "none", cursor: "pointer" }}>
              edit
            </button>
          </div>
        )}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
        {/* Progress bar */}
        <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 20, marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>7-Day Foundation Series</div>
            <div style={{ fontSize: 13, color: "#9898B3" }}>{completedCount}/{totalDays} days</div>
          </div>
          <div style={{ height: 8, background: "#1E1E32", borderRadius: 4, marginBottom: 10 }}>
            <div style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #6B4FBB, #00FF88)", width: `${progressPct}%`, transition: "width 0.4s" }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {devotionals.map((d) => (
              <div key={d.day}
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: progress.completedDays.includes(d.day) ? "#00FF88" : d.id === nextDay?.id ? "#6B4FBB" : "#1E1E32",
                  border: `2px solid ${progress.completedDays.includes(d.day) ? "#00FF88" : d.id === nextDay?.id ? "#6B4FBB" : "#1E1E32"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700,
                  color: progress.completedDays.includes(d.day) ? "#07070F" : d.id === nextDay?.id ? "#fff" : "#9898B3",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedDay(d)}>
                {d.day}
              </div>
            ))}
          </div>
        </div>

        {/* Today's devotional CTA */}
        {nextDay && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: "#9898B3", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              {completedCount === 0 ? "Start Here" : "Continue Your Journey"}
            </div>
            <div
              style={{ background: "#12121F", border: "1px solid #6B4FBB40", borderRadius: 16, padding: 22, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setSelectedDay(nextDay)}>
              <div>
                <div style={{ fontSize: 12, color: "#6B4FBB", fontWeight: 600, marginBottom: 4 }}>Day {nextDay.day} · {nextDay.theme}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>{nextDay.title}</div>
                <div style={{ fontSize: 13, color: "#9898B3", fontStyle: "italic" }}>"{nextDay.verse.slice(0, 70)}..."</div>
              </div>
              <div style={{ fontSize: 24, flexShrink: 0, marginLeft: 16 }}>→</div>
            </div>
          </div>
        )}

        {completedCount === totalDays && (
          <div style={{ background: "#00FF8815", border: "1px solid #00FF8840", borderRadius: 14, padding: 20, textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🎉</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#00FF88", marginBottom: 4 }}>You completed the 7-Day Series!</div>
            <div style={{ fontSize: 13, color: "#9898B3" }}>You've built something meaningful. Keep the conversation going.</div>
          </div>
        )}

        {/* All days grid */}
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 14 }}>All Days</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {devotionals.map((d) => {
            const done = progress.completedDays.includes(d.day);
            return (
              <div key={d.id}
                style={{ background: "#12121F", border: `1px solid ${done ? "#00FF8830" : "#1E1E32"}`, borderRadius: 14, padding: 18, cursor: "pointer" }}
                onClick={() => setSelectedDay(d)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 11, color: done ? "#00FF88" : "#6B4FBB", fontWeight: 600, marginBottom: 2 }}>Day {d.day} · {d.theme}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8" }}>{d.title}</div>
                  </div>
                  {done && <div style={{ color: "#00FF88", fontSize: 18 }}>✓</div>}
                </div>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", lineHeight: 1.5 }}>
                  "{d.verse.slice(0, 80)}..."
                </div>
                <div style={{ fontSize: 11, color: "#6B4FBB", marginTop: 6 }}>{d.verseRef}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Devotional Detail Modal */}
      {selectedDay && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelectedDay(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Day {selectedDay.day} · {selectedDay.theme}</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#F2F2F8", marginBottom: 16 }}>{selectedDay.title}</h2>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 16, borderLeft: "4px solid #6B4FBB" }}>
                <div style={{ fontSize: 15, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>"{selectedDay.verse}"</div>
                <div style={{ fontSize: 13, color: "#6B4FBB", fontWeight: 600 }}>{selectedDay.verseRef}</div>
              </div>
            </div>

            {/* Section tabs */}
            <div style={{ display: "flex", gap: 4, background: "#07070F", borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(["husband", "wife", "together"] as const).map((s) => (
                <button key={s} onClick={() => setActiveSection(s)}
                  style={{ flex: 1, padding: "8px 10px", borderRadius: 7, border: "none",
                    background: activeSection === s ? "#6B4FBB" : "transparent",
                    color: activeSection === s ? "#fff" : "#9898B3",
                    cursor: "pointer", fontWeight: 600, fontSize: 12 }}>
                  {s === "husband" ? "Him" : s === "wife" ? "Her" : "Together"}
                </button>
              ))}
            </div>

            {activeSection === "husband" && (
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8 }}>{selectedDay.husbandReflection}</p>
            )}
            {activeSection === "wife" && (
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8 }}>{selectedDay.wifeReflection}</p>
            )}
            {activeSection === "together" && (
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", marginBottom: 12 }}>💬 Discussion Questions</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  {selectedDay.togetherDiscussion.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6B4FBB20", border: "1px solid #6B4FBB", color: "#6B4FBB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <div style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, paddingTop: 3 }}>{q}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: "3px solid #00FF88" }}>
                  <div style={{ fontSize: 11, color: "#00FF88", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>🙏 Prayer Prompt</div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selectedDay.prayerPrompt}</p>
                </div>

                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, borderLeft: "3px solid #F59E0B" }}>
                  <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>⚡ Today's Activity</div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selectedDay.activity}</p>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button onClick={() => { handleComplete(selectedDay.day); setSelectedDay(null); }}
                style={{
                  flex: 1, padding: "12px 16px", borderRadius: 10, border: "none",
                  background: progress.completedDays.includes(selectedDay.day) ? "#1E1E32" : "#00FF88",
                  color: progress.completedDays.includes(selectedDay.day) ? "#9898B3" : "#07070F",
                  cursor: "pointer", fontWeight: 700, fontSize: 15,
                }}>
                {progress.completedDays.includes(selectedDay.day) ? "Mark Incomplete" : "✓ Complete Day " + selectedDay.day}
              </button>
              <button onClick={() => setSelectedDay(null)}
                style={{ padding: "12px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
