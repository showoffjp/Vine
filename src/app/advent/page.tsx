"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WEEKS = [
  {
    week: 1,
    theme: "Hope",
    color: "#6B4FBB",
    candle: "The Prophecy Candle",
    desc: "The first week of Advent focuses on the hope of Israel — centuries of waiting, longing, and prophetic promise. We remember that God's people lived in expectation before the fulfillment came. Hope is not optimism; it is confidence in a promise not yet seen.",
    readings: ["Isaiah 2:1-5", "Isaiah 9:2-7", "Isaiah 11:1-10", "Micah 5:2-5", "Psalm 122"],
    reflection: "What are you waiting for? What promises of God feel distant? Advent begins by acknowledging that waiting is not failure — it is faith in action. The people of Israel waited 400 years of silence between Malachi and Matthew. What does their faithful waiting teach you?",
    practice: "Light one candle. Sit in the partial darkness. Pray: 'Come, Lord Jesus.' Let the incompleteness be part of the practice.",
  },
  {
    week: 2,
    theme: "Peace",
    color: "#6B4FBB",
    candle: "The Bethlehem Candle",
    desc: "The second week turns to peace — the Bethlehem candle commemorates the city of David, the place of promise. The peace of Advent is not the absence of conflict but the shalom of God: the flourishing of all things, the reconciliation of what was broken, the presence of the Prince of Peace.",
    readings: ["Isaiah 40:1-11", "Romans 15:4-13", "Luke 1:26-38", "Isaiah 52:7-10", "Psalm 72:1-8"],
    reflection: "Where do you most need peace — in a relationship, in your mind, in your circumstances? The angel's announcement to Mary came in the middle of an impossible situation. Peace is not the absence of impossibility — it is the presence of God within it.",
    practice: "Write down one area of your life that lacks peace. Surrender it in prayer. Light the second candle alongside the first.",
  },
  {
    week: 3,
    theme: "Joy",
    color: "#F59E0B",
    candle: "The Shepherd Candle (Rose/Pink)",
    desc: "The third week is Gaudete Sunday — from the Latin 'rejoice!' The pink candle signals a pause in the penitential tone: joy breaks through. The shepherds were terrified by the angel's appearance, then filled with joy at the news. Joy is not manufactured — it arrives with the announcement of good news too large to contain.",
    readings: ["Zephaniah 3:14-20", "Philippians 4:4-7", "Luke 2:8-20", "Isaiah 35:1-10", "Psalm 126"],
    reflection: "What good news of the gospel have you been treating as ordinary? The shepherds ran to Bethlehem and could not stop talking about what they had seen and heard. Let the third week be about recovering the sense of amazement at what God has done.",
    practice: "Name three things you are genuinely grateful for this Advent. Light three candles. Let the growing light mark the growing expectation.",
  },
  {
    week: 4,
    theme: "Love",
    color: "#EF4444",
    candle: "The Angel Candle",
    desc: "The fourth week draws the closest to Christmas — love. 'For God so loved the world that he gave his only Son' (John 3:16). The angel candle commemorates the announcement: God broke into history not with power but with vulnerability. Love became flesh. The word most associated with God — love — became the most specific thing imaginable: a baby, in a manger, in Bethlehem.",
    readings: ["John 1:1-14", "Luke 1:46-55", "Galatians 4:4-7", "Isaiah 7:14", "Matthew 1:18-25"],
    reflection: "What does it mean that God did not send a message but a person? Not a plan but a son? The incarnation is the most extravagant act of love in history. Sit with it. Do not move past it quickly this week.",
    practice: "Read Luke 1:46-55 (the Magnificat) aloud. Light all four candles. Let Christmas Eve arrive slowly.",
  },
];

const VOICES_ADVENT = [
  { id: "rutledge", name: "Fleming Rutledge", era: "b. 1937", context: "Episcopal priest; Advent: The Once and Future Coming of Jesus Christ (2018)", bio: "Rutledge's magisterial Advent is the definitive contemporary theological treatment of the season. She argues that Advent is the most radical season of the Christian year because it refuses to let the church avoid the darkness — the darkness of history, of human violence, of judgment, and of the long waiting for redemption. The season does not begin with a baby in a manger; it begins with apocalyptic expectation. She rescues Advent from sentimentality and relocates it in eschatological urgency.", quote: "Advent begins in the dark. That is its proper setting. We do not begin by looking at the manger scene.", contribution: "Recovered Advent's eschatological dimension for mainline Protestants who had domesticated the season into pre-Christmas nostalgia. Her insistence that Advent begins with the Second Coming before the First is theologically decisive." },
  { id: "bonhoeffer", name: "Dietrich Bonhoeffer", era: "1906-1945", context: "Confessing Church theologian; Letters and Papers from Prison", bio: "Bonhoeffer's Advent sermons and letters were written under conditions of genuine waiting — imprisonment, uncertainty, and the threat of death. His reflections on waiting for God, on the silence between promise and fulfillment, carry an authority no comfortable preacher can replicate. He wrote: 'We must learn to wait, as Abraham and Moses and the whole Bible teaches us to wait.' Waiting, for Bonhoeffer, was not passivity but active faith in a God who acts in his own time.", quote: "The celebration of Advent is possible only to those who are troubled in soul, who know themselves to be poor and imperfect, and who look forward to something greater to come.", contribution: "Made Advent theology credible under conditions of real suffering. His writing showed that waiting for God's justice and redemption is not pietistic escapism — it is the form faith takes when it refuses to pretend the world is fixed." },
  { id: "barth", name: "Karl Barth", era: "1886-1968", context: "Reformed theologian; Church Dogmatics; Advent sermons in Basel Prison", bio: "Barth preached Advent sermons regularly to prisoners in Basel from 1954 to 1964 — men who had reason to know what it meant to wait in darkness. His theological framework placed Advent at the center of all Christian existence: the whole of Christian life is a form of waiting for the Lord who has come and will come again. The 'already' and 'not yet' of eschatology is Barth's fundamental structure for understanding history and hope.", quote: "To be a Christian is to be a human being on the way — always on the way toward the One who comes.", contribution: "Grounded Advent's waiting in the full sweep of Reformed eschatology. His prison sermons demonstrated that the hope of Christ's coming is not for the comfortable but for those for whom the world's systems have already failed." },
  { id: "wright", name: "N.T. Wright", era: "b. 1948", context: "Surprised by Hope (2008); For All the Saints; Bishop of Durham", bio: "Wright's contribution to Advent theology comes primarily through his work on resurrection and eschatology. He argues that Christian hope is not about escaping the world but about God's new creation breaking into and renewing the present one. This is decisive for Advent: we are not waiting for rescue from earth but for the coming King who will make all things new. Advent, properly understood, is about the renewal of creation rather than its abandonment.", quote: "Christian hope is not about escaping the present world but about God's new creation — the joining of heaven and earth — which has already begun in Jesus's resurrection.", contribution: "Corrected a Gnostic drift in Protestant Advent piety — the idea that Christ's coming will evacuate the world. Wright's new creation eschatology gives Advent both urgency and groundedness." },
  { id: "alexander", name: "Cecil Frances Alexander", era: "1818-1895", context: "Hymn writer; 'Once in Royal David's City'; 'There Is a Green Hill Far Away'", bio: "Alexander wrote some of the most enduring Advent and Christmas hymns in the English language. 'Once in Royal David's City' — with its opening line linking Bethlehem's stable to the heavenly throne room — is sung every year as the processional at the Festival of Nine Lessons and Carols at King's College, Cambridge. Her gift was for making the theology of Advent and Christmas concrete and accessible without reducing it to sentiment. She wrote hymns to teach doctrine to children, and the doctrine stuck.", quote: "Once in royal David's city stood a lowly cattle shed, where a mother laid her baby in a manger for his bed: Mary was that mother mild, Jesus Christ her little child.", contribution: "Demonstrated that Advent and Christmas theology can be carried by congregational song. Her hymns have shaped the theological formation of millions who could not read systematic theology but could sing it." },
];

const TRADITIONS = [
  { title: "The Advent Wreath", desc: "Four candles on a circular wreath, one lit each Sunday, representing the four weeks of Advent. The circle represents eternity; the evergreen represents life that does not die; the candles represent the growing light of Christ coming into the world. The Christ candle in the center is lit on Christmas Day.", origin: "German Lutheran, 16th century" },
  { title: "The Jesse Tree", desc: "A tree (or branch) on which ornaments are hung daily throughout Advent, each representing a person or story in the genealogy of Jesus — from Adam to Mary. It traces the entire storyline of Scripture that culminates in the Incarnation.", origin: "Medieval, based on Isaiah 11:1" },
  { title: "The O Antiphons", desc: "Seven ancient prayers (December 17-23), each beginning 'O' and addressing Jesus by a different title: O Wisdom, O Lord, O Root of Jesse, O Key of David, O Rising Sun, O King of the Gentiles, O Emmanuel. These form the basis of the hymn 'O Come O Come Emmanuel.'", origin: "Monastic, 7th-8th century" },
  { title: "Advent Fasting", desc: "Some traditions (especially Orthodox and Catholic) practice fasting during Advent similar to Lent — abstaining from meat and rich foods as an act of anticipation. The body participates in the waiting. Simplicity in Advent heightens the celebration of Christmas.", origin: "Eastern and Western Catholic traditions" },
  { title: "Blue vs. Purple", desc: "Advent colors differ by tradition. Purple (associated with penitence and royalty) is used in Roman Catholic and many Anglican/Lutheran traditions. Blue (associated with hope and the Virgin Mary) is used in some Anglican and emerging traditions. Both are legitimate; both carry meaning.", origin: "Liturgical, varies by denomination" },
];

interface AdventDone {
  [key: string]: boolean;
}

export default function AdventPage() {
  const [activeTab, setActiveTab] = usePersistedState<"guide" | "voices" | "traditions" | "tracker" | "videos">("vine_advent_tab", "guide");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_advent_voice", "rutledge");
  const voiceItem = VOICES_ADVENT.find(v => v.id === selectedVoice)!;
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [done, setDone] = useState<AdventDone>(() => {
    try { const s = localStorage.getItem("vine_advent_done"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });

  useEffect(() => { try { localStorage.setItem("vine_advent_done", JSON.stringify(done)); } catch {} }, [done]);

  const week = WEEKS.find(w => w.week === selectedWeek)!;
  const toggleDone = (key: string) => setDone(d => ({ ...d, [key]: !d[key] }));

  const allReadings = WEEKS.flatMap(w => w.readings.map(r => ({ week: w.week, theme: w.theme, reading: r, color: w.color })));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕯️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Advent Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Advent means "coming." Four weeks of anticipation, longing, and preparation — celebrating both the first coming of Christ and awaiting the second. The season reclaims the meaning of waiting.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "guide" as const, label: "Week Guide", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "traditions" as const, label: "Traditions", icon: "⛪" },
            { id: "tracker" as const, label: "Reading Tracker", icon: "✅" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "guide" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              {WEEKS.map(w => (
                <button key={w.week} onClick={() => setSelectedWeek(w.week)}
                  style={{ width: "100%", background: selectedWeek === w.week ? `${w.color}15` : "transparent", border: `1px solid ${selectedWeek === w.week ? w.color + "60" : BORDER}`, borderRadius: 10, padding: "14px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedWeek === w.week ? w.color : MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3 }}>WEEK {w.week}</div>
                  <div style={{ color: selectedWeek === w.week ? w.color : TEXT, fontWeight: 800, fontSize: 16 }}>{w.theme}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${week.color}30`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>WEEK {week.week} OF ADVENT</div>
                    <h2 style={{ color: week.color, fontWeight: 900, fontSize: 28, margin: 0 }}>{week.theme}</h2>
                    <div style={{ color: MUTED, fontSize: 13, marginTop: 4 }}>{week.candle}</div>
                  </div>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[1,2,3,4].map(n => (
                      <div key={n} style={{ width: 12, height: 40, borderRadius: 6, background: n <= week.week ? week.color : `${week.color}20`, border: `1px solid ${week.color}40` }} />
                    ))}
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{week.desc}</p>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>READINGS FOR THIS WEEK</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {week.readings.map(r => (
                      <span key={r} style={{ background: `${week.color}15`, color: week.color, padding: "4px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{r}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>REFLECTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{week.reflection}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{week.practice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_ADVENT.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
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
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Advent Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "traditions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Advent has been observed for over 1,500 years. The traditions that developed are not arbitrary — each is a practice designed to help the body and community participate in the waiting. You can adopt any of these regardless of your tradition.
              </p>
            </div>
            {TRADITIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{t.title}</div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 8 }}>{t.origin}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tracker" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Track your Advent readings across all four weeks.</p>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{Object.values(done).filter(Boolean).length} / {allReadings.length}</div>
              </div>
            </div>
            {WEEKS.map(w => (
              <div key={w.week} style={{ background: CARD, border: `1px solid ${w.color}25`, borderRadius: 12, padding: 18, marginBottom: 12 }}>
                <div style={{ color: w.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>Week {w.week}: {w.theme}</div>
                {w.readings.map(r => {
                  const key = `w${w.week}_${r}`;
                  return (
                    <div key={r} onClick={() => toggleDone(key)}
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on Advent and the incarnation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "cefE418Z9IY", title: "Advent: The Glory of the Incarnation", channel: "Timothy Keller", description: "Keller preaches on the astonishing claim at the center of Advent: that the eternal Word became flesh and dwelt among us." },
                  { videoId: "fVZDBticoZk", title: "The History of Grace", channel: "Timothy Keller", description: "An Advent sermon tracing the thread of God's redeeming grace across the whole sweep of Scripture, from promise to fulfillment." },
                  { videoId: "hOwe-54Bigo", title: "Advent: Born Again", channel: "Timothy Keller", description: "Keller explores the new birth that Advent anticipates — how the coming of Jesus makes possible a complete transformation of the human heart." },
                  { videoId: "RWIYRMJxm8s", title: "Advent: The Power of the Incarnation", channel: "Timothy Keller", description: "A sermon on why the incarnation is not just historically significant but personally transforming — Christ came to dwell with his people." },
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
