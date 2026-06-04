"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const AREAS = [
  {
    id: "possessions",
    name: "Possessions",
    icon: "📦",
    color: "#F59E0B",
    why: "Jesus said, 'Where your treasure is, there your heart will be also' (Matt 6:21). The accumulation of stuff is not morally neutral — it competes for our attention, energy, and ultimately our affection.",
    practices: [
      { label: "The One-In-One-Out Rule", desc: "For every new item brought into your home, one leaves. Prevents accumulation from becoming default." },
      { label: "The 90-Day Audit", desc: "Once per quarter, go through your belongings. Give away or sell anything unused in the past 90 days. Be ruthless with sentimentality that becomes clutter." },
      { label: "Fast From Buying", desc: "Try a 30-day consumer fast: buy nothing non-essential. Notice how much mental space buying previously occupied." },
      { label: "Give Generously First", desc: "When decluttering, give first to people in need — not to thrift stores. Find specific people for specific items." },
    ],
    verse: "Do not store up for yourselves treasures on earth... — Matthew 6:19",
  },
  {
    id: "digital",
    name: "Digital Life",
    icon: "📱",
    color: "#3B82F6",
    why: "The average American adult spends 7+ hours on screens per day. Social media is algorithmically designed to maximize engagement — which in practice maximizes comparison, outrage, and distraction. Digital simplicity is now a critical frontier for Christian formation.",
    practices: [
      { label: "Screen Sabbath", desc: "One day per week off social media. Non-negotiable. Notice the anxiety on day 1, the peace by day 2." },
      { label: "Phone-Free First Hour", desc: "Don't check your phone for the first hour of each day. Start with prayer, Scripture, or silence instead." },
      { label: "Notification Purge", desc: "Turn off all notifications except calls and texts. Reclaim your attention from algorithmic summoning." },
      { label: "Delete, Don't Just Limit", desc: "Research shows apps return. Deletion is more effective than timers. Try 30 days off Instagram or Twitter and honestly evaluate whether you miss what matters." },
    ],
    verse: "Whatever is true, whatever is noble... think about such things. — Philippians 4:8",
  },
  {
    id: "schedule",
    name: "Time & Schedule",
    icon: "⏰",
    color: "#EC4899",
    why: "Busyness is a spiritual emergency. The 'full life' that leaves no margin for rest, relationship, or God is not the abundant life Jesus promised. Simplifying your schedule is an act of faith — trusting that what matters will still happen when you stop frantically overloading.",
    practices: [
      { label: "The Margin Principle", desc: "Dr. Richard Swenson: 'Margin is the space between our load and our limits.' Intentionally leave 20% of your calendar empty for rest, relationships, and the unexpected." },
      { label: "The No Default", desc: "Change your default from 'yes' to 'no.' Every new commitment requires removing an old one or saying no. What does a yes cost your existing commitments?" },
      { label: "Evaluate by Season", desc: "Each season, ask: which activities are life-giving? Which am I doing out of guilt, habit, or fear? Prune ruthlessly to feed the roots." },
      { label: "Protect the Morning", desc: "Guard the first part of your day for God and the most important work. Don't let others schedule your morning for themselves." },
    ],
    verse: "Teach us to number our days, that we may gain a heart of wisdom. — Psalm 90:12",
  },
  {
    id: "money",
    name: "Money & Consumption",
    icon: "💰",
    color: "#10B981",
    why: "The median American household spends a third of income on housing and another significant portion on transportation — often for spaces and vehicles larger than needed. Financial simplicity frees resources for generosity and reduces the anxiety that comes from living beyond one's means.",
    practices: [
      { label: "Track Every Dollar for 30 Days", desc: "You can't simplify what you don't see. Track every transaction for a month — the results are usually sobering and clarifying." },
      { label: "The Enough Question", desc: "'What is enough?' is a spiritual question. Define what 'enough' looks like for housing, food, clothing, and entertainment — then stop pursuing beyond that." },
      { label: "Give Before You Spend", desc: "Set your giving percentage at the start of the month, before discretionary spending begins. Generosity is not what's left after everything else." },
      { label: "Delayed Gratification Practice", desc: "For any non-essential purchase over $100, wait 72 hours. Most impulse purchases don't survive the wait." },
    ],
    verse: "Godliness with contentment is great gain. — 1 Timothy 6:6",
  },
  {
    id: "words",
    name: "Words & Information",
    icon: "📰",
    color: "#8B5CF6",
    why: "We are drowning in information and starving for wisdom. The news cycle is designed to produce anxiety and engagement, not understanding. Simplicity in information means being selective, slow, and discerning about what content we feed our minds.",
    practices: [
      { label: "News Diet", desc: "Limit news intake to once daily for 20 minutes from a single trusted source. Constant news consumption increases anxiety without increasing understanding." },
      { label: "Read Books, Not Articles", desc: "Swap social media and news scrolling for books — especially physical books. Deep reading produces different cognition than skimming feeds." },
      { label: "Prune Your Feeds", desc: "Unfollow anyone whose content consistently produces envy, anger, or meaningless entertainment. Curate aggressively toward what's true, good, and beautiful." },
      { label: "Practice Silence", desc: "30 minutes of daily silence — no podcasts, music, or background noise. Silence is where God often speaks." },
    ],
    verse: "The one who has knowledge uses words with restraint. — Proverbs 17:27",
  },
];

const QUOTES = [
  { quote: "Simplicity is not about deprivation. It's about what you gain by leaving some things behind.", author: "Richard Foster, Celebration of Discipline" },
  { quote: "The enemy of the best is not the worst — it is the good. Good things crowd out God and the truly important.", author: "Paraphrase of C.S. Lewis" },
  { quote: "The more clearly we see God, the simpler our lives will become.", author: "Dallas Willard" },
  { quote: "We buy things we don't need, with money we don't have, to impress people we don't like.", author: "Dave Ramsey" },
  { quote: "I have learned, in whatever situation I am, to be content.", author: "Paul — Philippians 4:11" },
];

const VOICES_SIMP = [
  { id: "francis", name: "Francis of Assisi", era: "1181-1226", context: "Founder of the Franciscan Order; famous for radical voluntary poverty and love of creation", bio: "Francis was the son of a wealthy cloth merchant who gave away his inheritance, stripped himself naked in the town square of Assisi, and spent the rest of his life in radical voluntary poverty — caring for lepers, rebuilding crumbling churches, and living as a wandering preacher. His form of life was so simple and so joyful that thousands followed him. He saw creation as a reflection of God's beauty (his Canticle of the Creatures is one of the oldest Italian poems) and poverty not as deprivation but as freedom: the simplest man in the room was also the freest. His order was initially refused by the Pope, who reportedly saw Francis in a dream holding up a crumbling building.", quote: "It is no use walking anywhere to preach unless our walking is our preaching.", contribution: "Made simplicity a positive spiritual program rather than mere asceticism. Francis's joyful poverty became the most powerful counter-cultural witness in medieval Europe and continues to challenge materialist Christianity in every century." },
  { id: "foster-s", name: "Richard Foster", era: "b. 1942", context: "Freedom of Simplicity (1981); Celebration of Discipline (1978); Renovare movement", bio: "Foster's Freedom of Simplicity is the most comprehensive Protestant theological treatment of Christian simplicity. He argues that simplicity is not primarily about material poverty but about a single-minded orientation toward God — the inner simplicity of a focused heart that produces outer simplicity as a natural overflow. He distinguishes between simplicity as discipline (something we practice) and simplicity as grace (something received). He traces the theme through Scripture, the Quakers, the monastics, and the Reformation, showing that simplicity is a consistent thread in the entire Christian tradition — not a medieval add-on.", quote: "Simplicity is freedom. Duplicity is bondage. Simplicity brings joy and balance. Duplicity brings anxiety and fear.", contribution: "Recovered the theology of simplicity for Protestants who had largely ignored it since the Reformation. Freedom of Simplicity gave evangelical Christians a robust theological justification for what many had intuited but couldn't articulate." },
  { id: "claiborne", name: "Shane Claiborne", era: "b. 1975", context: "The Irresistible Revolution (2006); Simple Way Community, Philadelphia", bio: "Claiborne is the most prominent voice for voluntary poverty and simple living in American evangelicalism in the early 21st century. After spending time with Mother Teresa in Calcutta, he helped found the Simple Way — an intentional Christian community in a poor neighborhood of Philadelphia — and wrote The Irresistible Revolution as a provocative challenge to evangelical Christianity's accommodation to consumerism. His lifestyle is a radical performance of his theology: he grows food, makes his own clothes, and lives communally in a neighborhood that most evangelicals drive past. His critics say he's too political; his fans say he's too conservative.", quote: "I want to give them the most radical thing I can imagine — not a new idea, not a new program, but a new way of life.", contribution: "Made the Simple Way community a living example of urban Christian simplicity — and made the conversation about wealth and poverty unavoidable in evangelical spaces that had preferred to discuss it abstractly." },
  { id: "willard-s", name: "Dallas Willard", era: "1935-2013", context: "The Spirit of the Disciplines (1988); chapter on simplicity and solitude", bio: "Willard's treatment of simplicity in The Spirit of the Disciplines is not about voluntary poverty but about the training effect of simplicity on the soul. He argues that simplicity disciplines the mind to stop grasping — and that much of our spiritual distress comes from the endless mental energy devoted to accumulation, maintenance, and worry about what we have. Simplicity trains the will toward God and away from the competing kingdom of consumer comfort. His practical advice: choose the simpler option consistently, especially in small things, as a form of soul training.", quote: "Simplicity is not a spiritual discipline that earns merit. It is a training exercise that trains the soul toward the one thing necessary.", contribution: "Grounded simplicity in the discipline-and-formation framework that made it actionable rather than merely prophetic. His account of simplicity as soul-training rather than social protest gave evangelicals a practical rationale for pursuing it." },
  { id: "swenson", name: "Richard Swenson", era: "b. 1950", context: "Margin (1992); The Overload Syndrome (1998); physician and futurist", bio: "Swenson is a physician who diagnosed the modern epidemic of overloaded lives — too many commitments, too little time, too little space between what we're carrying and what we can bear. His concept of 'margin' — the space between our load and our limits — gave evangelical Christians a medical and practical framework for what Scripture teaches about Sabbath and simplicity. His research showed that chronic overloading produces not only physical stress but spiritual deadness: the person who has no margin has no time for God, for family, or for the unexpected call to generosity.", quote: "Margin is the space between our load and our limits. It is the gap between rest and exhaustion, the space between breathing freely and suffocating.", contribution: "Gave the evangelical conversation about simplicity a medical and empirical foundation. Margin made the case for simplicity in terms that busy Christians could hear: the overloaded life is not only spiritually impoverished but physically unsustainable." },
];

const DETOX_DAYS = [
  "Day 1: Turn off all non-essential notifications",
  "Day 2: Give away 10 things you don't need",
  "Day 3: Phone-free morning until 9am",
  "Day 4: Cook a simple meal — resist the urge to order out",
  "Day 5: Delete one app you use mindlessly",
  "Day 6: Spend 20 minutes in silence",
  "Day 7: Full digital Sabbath — screens off from sundown to sundown",
  "Day 8: Audit your subscriptions — cancel what you don't need",
  "Day 9: Write down what 'enough' looks like for you in 3 areas",
  "Day 10: Give generously — a specific amount to a specific person or cause",
  "Day 11: Spend an evening without streaming — read instead",
  "Day 12: Go through your closet and give away what you haven't worn in a year",
  "Day 13: Spend no money on anything non-essential",
  "Day 14: Write a list of 10 things you're grateful for that cost nothing",
  "Day 15: Commit to one month of tracking all spending",
  "Day 16: Remove social media from your phone for 48 hours",
  "Day 17: Give away something you love",
  "Day 18: Take a walk without your phone",
  "Day 19: Decline one commitment you said yes to out of obligation",
  "Day 20: Eat simply — one meal of bread and water as a fast",
  "Day 21: Go through your bookmarks, feeds, and subscriptions — prune aggressively",
  "Day 22: Spend the evening with people, not screens",
  "Day 23: Write a list of what occupies your attention — rank what actually matters",
  "Day 24: Have a conversation about simplicity with someone you live with",
  "Day 25: Identify one financial goal that reflects your values — start today",
  "Day 26: Spend one hour in nature without a phone",
  "Day 27: Write a letter (by hand) to someone you love",
  "Day 28: Review days 1-27. What stuck? What felt most freeing?",
  "Day 29: Make one permanent change from this challenge",
  "Day 30: Pray: 'Lord, show me what needs to leave my life so you can have more of it.'"
];

export default function SimplicityPage() {
  const [activeTab, setActiveTab] = usePersistedState<"why" | "voices" | "areas" | "detox" | "videos">("vine_simplicity_tab", "why");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_simplicity_voice", "francis");
  const voiceItem = VOICES_SIMP.find(v => v.id === selectedVoice)!;
  const [selectedArea, setSelectedArea] = usePersistedState("vine_simplicity_selected_area", "possessions");
  const [checkedPractices, setCheckedPractices] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_simplicity_checked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [detoxText, setDetoxText] = useState(() => {
    try { return localStorage.getItem("vine_simplicity_detox") || ""; } catch { return ""; }
  });

  useEffect(() => { try { localStorage.setItem("vine_simplicity_checked", JSON.stringify([...checkedPractices])); } catch {} }, [checkedPractices]);
  useEffect(() => { try { localStorage.setItem("vine_simplicity_detox", detoxText); } catch {} }, [detoxText]);

  const area = AREAS.find(a => a.id === selectedArea)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Simplicity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Simplicity is a spiritual discipline — the intentional removal of clutter so that what matters most can occupy its proper place.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "why" as const, label: "The Theology", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "areas" as const, label: "Life Areas", icon: "🎯" },
            { id: "detox" as const, label: "30-Day Detox", icon: "🗓️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>Simplicity as Spiritual Formation</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Christian simplicity is not minimalism as an aesthetic — it is the intentional ordering of life around what matters most. Richard Foster identifies it as one of the classical spiritual disciplines, alongside prayer, fasting, and solitude. The discipline of simplicity requires us to examine and confront our attachments — to possessions, to productivity, to status, to entertainment.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Jesus was relentlessly direct about the competition between wealth and God: "You cannot serve both God and money" (Matt 6:24). This was not a peripheral concern — it occupied more of Jesus' teaching than heaven and hell combined. The reason: wealth and comfort are uniquely powerful competitors to God's claim on our hearts.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Simplicity is not poverty — it is contentment with enough, and freedom from the compulsive need for more. Paul says, "I have learned, in whatever situation I am, to be content" (Phil 4:11). Contentment is learned — which means simplicity is practiced.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 20 }}>
              {QUOTES.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0, marginBottom: 10 }}>"{q.quote}"</p>
                  <p style={{ color: PURPLE, fontSize: 12, fontWeight: 700, margin: 0 }}>— {q.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_SIMP.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Simplicity Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "areas" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {AREAS.map(a => (
                <button type="button" key={a.id} onClick={() => setSelectedArea(a.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedArea === a.id ? a.color : BORDER}`, background: selectedArea === a.id ? `${a.color}18` : CARD, color: selectedArea === a.id ? a.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{a.icon}</span> {a.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${area.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{area.icon}</span>
                  <h2 style={{ color: area.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{area.name}</h2>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{area.why}</p>
                <div style={{ background: `${area.color}10`, border: `1px solid ${area.color}30`, borderRadius: 8, padding: 14, marginBottom: 20 }}>
                  <p style={{ color: area.color, fontSize: 13, fontStyle: "italic", margin: 0 }}><VerseRef reference={area.verse} /></p>
                </div>
                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Practical Steps</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {area.practices.map((p, i) => {
                    const key = `${area.id}-${i}`;
                    const checked = checkedPractices.has(key);
                    return (
                      <div key={i} onClick={() => setCheckedPractices(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                        style={{ background: checked ? `${area.color}10` : BG, border: `1px solid ${checked ? area.color + "30" : BORDER}`, borderRadius: 10, padding: 14, cursor: "pointer" }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${checked ? area.color : BORDER}`, background: checked ? area.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                            {checked && <span style={{ color: BG, fontSize: 11, fontWeight: 900 }}>✓</span>}
                          </div>
                          <div>
                            <div style={{ color: checked ? area.color : TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.label}</div>
                            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "detox" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 12 }}>30-Day Simplicity Challenge</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
                This challenge asks you to practice one act of simplicity each day for 30 days. Some are small habits; some are significant decisions. All are designed to create space.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                {DETOX_DAYS.map((day, i) => {
                  const key = `detox-${i}`;
                  const checked = checkedPractices.has(key);
                  return (
                    <div key={i} onClick={() => setCheckedPractices(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                      style={{ background: checked ? `${GREEN}10` : CARD, border: `1px solid ${checked ? GREEN + "40" : BORDER}`, borderRadius: 8, padding: 12, cursor: "pointer" }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${checked ? GREEN : BORDER}`, background: checked ? GREEN : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          {checked && <span style={{ color: BG, fontSize: 10, fontWeight: 900 }}>✓</span>}
                        </div>
                        <p style={{ color: checked ? GREEN : TEXT, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{day}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 16, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: MUTED, fontSize: 14 }}>Progress</span>
                <span style={{ color: GREEN, fontWeight: 700 }}>{Array.from(checkedPractices).filter(k => k.startsWith("detox-")).length} / {DETOX_DAYS.length}</span>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Reflection Journal</h3>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginBottom: 14 }}>
                As you work through the challenge, note what you&rsquo;re noticing — what felt freeing, what was hard to give up, where you sensed God. Your reflections save automatically on this device.
              </p>
              <textarea
                value={detoxText}
                onChange={(e) => setDetoxText(e.target.value)}
                aria-label="What is this season of simplicity teaching you?" placeholder="What is this season of simplicity teaching you?"
                rows={6}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
              />
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <span style={{ color: MUTED, fontSize: 12 }}>{detoxText.trim() ? `${detoxText.trim().split(/\s+/).length} words · saved` : "Saved automatically"}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on simplicity, detachment, and the spiritual disciplines of freedom from possessions and distraction.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "HeMJorECvMM", title: "Simplicity — Celebration of Discipline Video Curriculum", channel: "Richard Foster", description: "Richard Foster — author of Celebration of Discipline, the definitive modern guide to simplicity — teaches on the spiritual discipline of simplicity from his landmark book." },
                  { videoId: "J0jZb5iJzno", title: "An Inward Life of Confidence Before God", channel: "Wheaton College (Richard Foster)", description: "Foster on the interior dimension of simplicity — how outward simplicity flows from inward freedom from the need to possess, impress, and accumulate." },
                  { videoId: "owXD1g0w1_0", title: "Worthy of a Changed Life", channel: "Francis Chan / Crazy Love Ministries", description: "Francis Chan challenges Christians to consider whether their life choices — including consumption and lifestyle — reflect genuine transformation or cultural Christianity." },
                  { videoId: "HOzIKZs0ymE", title: "The Power of a Quiet Life", channel: "Francis Chan / Crazy Love Ministries", description: "A call to radically redefine ambition — advocating for a life of quiet humility, diligent work, and personal integrity over the noise and accumulation of consumer culture." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
