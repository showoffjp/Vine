"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WEEKS = [
  {
    week: 1, title: "Temptation & Testing", color: "#6B7280",
    theme: "The forty days of Lent echo Jesus' forty days in the wilderness. This week confronts temptation directly: what are you being tested by, and where is your actual vulnerability? Jesus defeated the devil not through spectacular power but through clinging to Scripture.",
    focus: "Matthew 4:1-11",
    practice: "Fast one meal today. In the hunger, pray: 'Man shall not live by bread alone.' Let the physical desire for food name a deeper desire for God.",
    readings: ["Matthew 4:1-11", "Psalm 91", "Genesis 2:15-17", "Romans 5:12-19"],
  },
  {
    week: 2, title: "Repentance & Return", color: "#7C3AED",
    theme: "Lent is the ancient season of repentance — not self-punishment but honest return. The prodigal's 'coming to himself' (Luke 15:17) is the picture: seeing your actual condition with clarity and turning toward the Father. Repentance is the best news in the world for those who know they need it.",
    focus: "Luke 15:11-24",
    practice: "Write a letter to God naming three specific sins — not general categories, but specific acts. Read Psalm 51 aloud. Then burn or delete the letter as a symbol of receiving forgiveness.",
    readings: ["Luke 15:11-32", "Psalm 51", "Joel 2:12-13", "2 Corinthians 7:10"],
  },
  {
    week: 3, title: "Prayer & Fasting", color: "#B45309",
    theme: "Jesus assumed his disciples would fast: 'When you fast...' (Matthew 6:16-17) — not 'if.' Fasting is not self-punishment; it is the practice of saying to the body: I am not enslaved to you. Combined with prayer, it sharpens spiritual perception and expresses urgent dependence on God.",
    focus: "Matthew 6:16-18",
    practice: "Choose one thing to fast from for the remaining weeks of Lent — social media, meat, alcohol, dessert, entertainment. Decide now. Every time you feel the absence, use it as a prompt to pray.",
    readings: ["Matthew 6:1-18", "Isaiah 58:1-12", "Daniel 9:3-19", "Acts 13:2-3"],
  },
  {
    week: 4, title: "The Cross in View", color: "#DC2626",
    theme: "The shadow of the cross falls over Lent from the beginning, but this week it becomes explicit. Jesus 'set his face to go to Jerusalem' (Luke 9:51) — a deliberate, determined, willing movement toward suffering and death. He was not surprised by the cross; he walked toward it for us.",
    focus: "Luke 9:51",
    practice: "Read Isaiah 52:13-53:12 slowly. This was written 700 years before the crucifixion. Sit with a specific image from the text. Let it become your prayer.",
    readings: ["Isaiah 52:13-53:12", "Psalm 22", "Philippians 2:5-11", "John 12:20-33"],
  },
  {
    week: 5, title: "Suffering & Glory", color: "#9333EA",
    theme: "The penultimate week of Lent holds together suffering and glory. 'The hour has come for the Son of Man to be glorified... unless a grain of wheat falls into the earth and dies, it remains alone' (John 12:23-24). The glory of God is revealed in and through the cross — not despite it but through it.",
    focus: "John 12:23-24",
    practice: "Identify one area of loss or suffering in your own life. Sit with it this week without trying to resolve or escape it. Bring it honestly to God. Ask: what might you be doing in this?",
    readings: ["John 12:20-36", "Hebrews 5:7-10", "Psalm 116", "Romans 8:17-18"],
  },
  {
    week: 6, title: "Holy Week", color: "#EF4444",
    theme: "Holy Week traces the final days: Palm Sunday's triumph (cheering crowds who do not understand), the Last Supper (institution of communion, washing feet), Gethsemane (the prayer that sweated blood), Good Friday (the darkness), Holy Saturday (the silence), Easter Sunday (the world turned right-side up).",
    focus: "Luke 22-24",
    practice: "Read the Passion narrative (Luke 22-23) from beginning to end without pausing. Let it land as a story, not a theology. On Easter morning, read Luke 24:1-12 before you do anything else.",
    readings: ["Mark 11:1-11 (Palm Sunday)", "John 13:1-17 (Maundy Thursday)", "Mark 15:1-47 (Good Friday)", "Luke 24:1-12 (Easter)"],
  },
];

const PRACTICES = [
  { title: "The Ash Wednesday Mark", desc: "'Remember that you are dust, and to dust you shall return.' The ashes mark mortality honestly. Lent begins by acknowledging that we are creatures, not gods — finite, mortal, in need of the one who conquered death.", icon: "⬛" },
  { title: "Fasting", desc: "The ancient practice of abstaining from food (or something else) as a way of expressing dependence on God. Fasting does not earn grace; it positions the soul to receive it. Even a partial fast — skipping lunch, giving up coffee — participates in this tradition.", icon: "🚫" },
  { title: "Almsgiving", desc: "Lent traditionally involves giving — specifically, giving what you would have spent on what you fasted from. The money or time freed by your abstinence becomes an offering. This integrates the spiritual practice with justice and generosity.", icon: "💝" },
  { title: "The Daily Examen", desc: "A five-minute evening prayer reviewing the day: Where was God present? Where did I respond well? Where did I miss it? What do I need to confess or receive? The Examen builds the habit of noticing God in ordinary life.", icon: "🌙" },
  { title: "Additional Scripture", desc: "Use Lent to read a Gospel straight through. Luke (24 chapters, one per day) takes you from Advent to Easter. Or follow a daily lectionary that traces the Passion narrative across the season.", icon: "📖" },
  { title: "Silence", desc: "Many people find Lent a natural time to add a period of silence — 10-15 minutes before the usual morning routine begins. Not structured prayer, but simply stopping before the noise begins. The soul needs quiet to hear what God is saying.", icon: "🤫" },
];

const VOICES_LENT = [
  { id: "chrysostom", name: "John Chrysostom", era: "c. 347-407", context: "Archbishop of Constantinople; Golden Mouth preacher", bio: "Chrysostom's Easter sermon (read in Orthodox churches every Easter night) is one of the greatest homilies in Christian history. His preaching on fasting was explicit and demanding: fasting without almsgiving is no fasting at all. If you fast from food but not from sin — from wrath, slander, and injustice — you have missed the point entirely. His social preaching connecting Lent to justice made him powerful enemies and led to his exile.", quote: "The fast is incomplete if it consists only of abstinence from food. Let us fast in a manner acceptable to the Lord. True fasting is the rejection of evil, temperance of tongue, abstinence from anger, separation from lusts, slander, lying, and every kind of evil.", contribution: "Established the social and moral dimensions of fasting: fasting from food without fasting from sin is hypocrisy. His connection of Lent to care for the poor made him the church's most powerful voice on Christian social responsibility." },
  { id: "willard", name: "Dallas Willard", era: "1935-2013", context: "The Spirit of the Disciplines (1988); USC philosophy professor", bio: "Willard's treatment of fasting in The Spirit of the Disciplines is the most intellectually rigorous evangelical account. He argues that fasting, rightly understood, trains the body to be subservient to the spirit — not through punishment but through practice. The person who cannot fast cannot fully trust God, because their body has too strong a claim on their decision-making. Fasting reveals what we are actually depending on rather than what we think we are depending on.", quote: "Fasting is, above all, an expression of feeling that in this moment nothing — not even food — is as important as God and whatever God wants to do in my life.", contribution: "Rescued fasting from asceticism on one side and dismissal on the other. His argument that fasting is training rather than penance — and that it reveals the true hierarchy of our dependencies — has made it accessible to evangelical Christians who had abandoned it." },
  { id: "schmemann", name: "Alexander Schmemann", era: "1921-1983", context: "Great Lent (1969); St. Vladimir's Orthodox Theological Seminary", bio: "Schmemann's Great Lent is the definitive theological account of the Orthodox Lenten season. His argument: Lent is not primarily about guilt and penance but about journey — a journey toward Pascha (Easter), which is itself a journey toward the Kingdom. Lent is the school of the church, training the faithful through fasting, prayer, and almsgiving to become what they already are in Christ. His liturgical theology makes the Lenten services themselves (especially Forgiveness Sunday and the Liturgy of the Presanctified Gifts) the primary teaching text.", quote: "Lent is the spring of the spirit, when we willingly undertake the effort of Christian struggle, the fight against sin and passions, so that in Pascha we might truly rise with Christ into the new life.", contribution: "Gave the Western church a window into the Orthodox theological depth of Lent as journey rather than punishment. His work has influenced liturgical renewal across Catholic, Anglican, and Reformed traditions." },
  { id: "rutledge", name: "Fleming Rutledge", era: "b. 1937", context: "The Crucifixion (2015); Anglican priest and preacher", bio: "Rutledge's The Crucifixion is the most important English-language theology of the atonement published in the 21st century. Her Lenten preaching consistently foregrounds what modern Christianity often avoids: the gravity of sin, the wrath of God, and the radical costliness of the cross. For Rutledge, Lent without honest engagement with sin and judgment produces an empty Easter — the resurrection is only good news if the problem it solves is real.", quote: "The cross is not a symbol of God's love in the abstract. It is the specific event in which God's justice and God's love come together at their sharpest point — and the result is not sentiment but rescue.", contribution: "Recovered the theological seriousness of Lent for a generation that had domesticated it. Her insistence that Lent without honest engagement with sin produces an empty Easter has challenged comfortable Christianity across denominational lines." },
  { id: "merton", name: "Thomas Merton", era: "1915-1968", context: "Seasons of Celebration (1965); Trappist monk", bio: "Merton's reflections on Lent consistently point to its contemplative heart: the desert is not punishment but preparation. Jesus went into the wilderness before his public ministry; Lent invites Christians into their own desert, where the false self is stripped away and the true self in God can emerge. His Lenten preaching emphasizes silence, simplicity, and the willingness to face oneself honestly before God — not to earn grace but to receive it more fully.", quote: "In Lent we should try to free ourselves from the tyranny of the self so that we can begin to feel the reality of God's love and understand something of the love of Christ for the Father and for man.", contribution: "Recovered the desert spiritual tradition for Lent — the sense that Lent is not primarily about giving things up but about going deeper into solitude with God. His contemplative Lent has influenced Christians across traditions who found the penitential model insufficient." }
];

interface LentProgress {
  [key: string]: boolean;
}

export default function LentPage() {
  const [activeTab, setActiveTab] = usePersistedState<"weeks" | "voices" | "practices" | "tracker" | "videos">("vine_lent_tab", "weeks");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_lent_voice", "chrysostom");
  const voiceItem = VOICES_LENT.find(v => v.id === selectedVoice)!;
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [done, setDone] = useState<LentProgress>(() => {
    try { const s = localStorage.getItem("vine_lent_progress"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });

  useEffect(() => { try { localStorage.setItem("vine_lent_progress", JSON.stringify(done)); } catch {} }, [done]);

  const week = WEEKS.find(w => w.week === selectedWeek)!;
  const toggleDone = (key: string) => setDone(d => ({ ...d, [key]: !d[key] }));

  const allReadings = WEEKS.flatMap(w => w.readings.map(r => ({ week: w.week, title: w.title, reading: r, color: w.color })));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Lent Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Forty days of preparation before Easter — mirroring Jesus' forty days in the wilderness. Lent is not penance; it is formation. The season clears the ground so Easter can land with its full force.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "weeks" as const, label: "Week Guide", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "tracker" as const, label: "Tracker", icon: "✅" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "weeks" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              {WEEKS.map(w => (
                <button type="button" key={w.week} onClick={() => setSelectedWeek(w.week)}
                  style={{ width: "100%", background: selectedWeek === w.week ? `${w.color}15` : "transparent", border: `1px solid ${selectedWeek === w.week ? w.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedWeek === w.week ? w.color : MUTED, fontSize: 10, fontWeight: 700, marginBottom: 3 }}>WEEK {w.week}</div>
                  <div style={{ color: selectedWeek === w.week ? w.color : TEXT, fontWeight: 700, fontSize: 12 }}>{w.title}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${week.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>WEEK {week.week} OF LENT</div>
                <h2 style={{ color: week.color, fontWeight: 900, fontSize: 24, marginBottom: 16 }}>{week.title}</h2>
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>Focus: {week.focus}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{week.theme}</p>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>READINGS</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {week.readings.map(r => (
                      <span key={r} style={{ background: `${week.color}15`, color: week.color, padding: "4px 12px", borderRadius: 10, fontSize: 12, fontWeight: 600 }}>{r}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THIS WEEK'S PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{week.practice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES_LENT.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{voiceItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING ON LENT</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voiceItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The three traditional Lenten disciplines — fasting, prayer, and almsgiving — address body, soul, and neighbor simultaneously. You don't need to do all of them. Choose one intentionally and practice it consistently.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tracker" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Track your Lenten readings across all six weeks.</p>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{Object.values(done).filter(Boolean).length} / {allReadings.length}</div>
              </div>
            </div>
            {WEEKS.map(w => (
              <div key={w.week} style={{ background: CARD, border: `1px solid ${w.color}25`, borderRadius: 12, padding: 18, marginBottom: 12 }}>
                <div style={{ color: w.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>Week {w.week}: {w.title}</div>
                {w.readings.map(r => {
                  const key = `lw${w.week}_${r}`;
                  return (
                    <div role="button" tabIndex={0} key={r} onClick={() => toggleDone(key)}
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: `1px solid ${BORDER}`, cursor: "pointer" }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: done[key] ? `${w.color}20` : "transparent", border: `2px solid ${done[key] ? w.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {done[key] && <span style={{ color: w.color, fontSize: 12 }}>✓</span>}
                      </div>
                      <span style={{ color: done[key] ? MUTED : TEXT, fontSize: 14, textDecoration: done[key] ? "line-through" : "none" }}>{r}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "f3VY6pTKm3s", title: "Rooted in Prayer and Fasting", channel: "Tim Keller", description: "Keller preaches on prayer and fasting as disciplines of surrender — why Jesus assumed his followers would fast, and what fasting accomplishes in the soul." },
                  { videoId: "QS04WbSnxok", title: "Feasting and Fasting: Spiritual Symmetry", channel: "The Bible Project / Tim Mackie", description: "Tim Mackie explores the biblical rhythm of feasting and fasting — how these two practices together shape a life of dependence on God and anticipation of his kingdom." },
                  { videoId: "8tllFmO5zhs", title: "40 Global Days of Prayer and Fasting: Reaching Your City with the Gospel", channel: "Tim Keller", description: "Keller on the spiritual power of corporate prayer and fasting as the foundation for gospel advance in the city — the connection between seeking God and missional fruitfulness." },
                  { videoId: "6UortPEFcpU", title: "Ash Wednesday Homily: Remember, You Are Dust", channel: "Catholic Homily / Matthew 6", description: "An Ash Wednesday homily on Matthew 6:1-6, 16-18 — the summons to secret fasting, prayer, and almsgiving that marks the beginning of Lent's forty-day journey." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
      </main>
      <Footer />
    </div>
  );
}
