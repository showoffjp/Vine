"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "athletes" | "dangers" | "practices" | "journal" | "videos";

const STATS = [
  "Sports is a $500B+ global industry",
  "1 in 3 Americans watches NFL football weekly",
  "Eric Liddell refused to run on Sunday — and still won Olympic gold",
  "'Whether you eat or drink, do all to the glory of God' — 1 Cor 10:31",
];

const THEOLOGY_ITEMS = [
  {
    title: "Play as Gift",
    body: "Josef Pieper, the German Catholic philosopher, argued in Leisure: The Basis of Culture (1948) that leisure — genuine receptive rest and play — is the foundation of culture rather than its interruption. Modern culture defines humanity by work, production, and usefulness. Against this, the Sabbath reminds us that rest and play are goods in themselves, not merely recovery for more work. Children know this instinctively — play is its own reason. Adults need to relearn it. Sport at its best is a form of play: intrinsically valuable activity undertaken for its own sake, not as a means to anything else.",
  },
  {
    title: "The Goodness of Embodied Competition",
    body: "Human beings are embodied creatures — made of dust, given breath, destined for resurrection. The body is not a prison for the soul but its proper home (1 Cor 6:19-20 — 'Your body is a temple of the Holy Spirit'). Sport celebrates and develops the body's capacities: speed, strength, coordination, endurance, skill. The incarnation of Jesus — who took on a real body, worked with his hands, walked 20+ miles per day — is the final word against any gnostic contempt for embodiment. Sport, at its best, glorifies the Creator by developing and displaying the creature's embodied capacities.",
  },
  {
    title: "Competition, Virtue, and Character",
    body: "The Greek word agon (competition, contest) gave us 'agony' — the ancient world recognized that real competition is genuinely difficult and demanding. Competition at its best develops virtue: endurance under suffering (2 Tim 2:5 — 'if anyone competes as an athlete, he is not crowned unless he competes according to the rules'), self-discipline (1 Cor 9:25-27 — 'every athlete exercises self-control in all things'), teamwork and sacrifice (Heb 12:1 — 'let us run with endurance'). Paul reaches for athletic metaphors repeatedly — because sport is one of the contexts where virtue is most visibly formed and tested.",
  },
  {
    title: "Eric Liddell: Sport to the Glory of God",
    body: "Eric Liddell, the Scottish sprinter depicted in Chariots of Fire (1981), famously refused to run in the 100m at the 1924 Paris Olympics because his heat was on Sunday. He switched to the 400m — not his best event — and won Olympic gold. His explanation of why he ran has become one of the most famous statements in the theology of sports: 'I believe God made me for a purpose — for China [he was a missionary]. But he also made me fast. And when I run, I feel his pleasure.' After the Olympics, Liddell returned to China as a missionary and died in a Japanese internment camp in 1945. His life is a theology of sports: sport as vocation, sport as gift, sport with limits.",
  },
  {
    title: "Sports as Mission Field",
    body: "Organized sports brings together people who rarely share other social spaces: communities across class, race, and background join together around a team. Sports chaplains work with professional and college teams around the world. Athletes in Action, Fellowship of Christian Athletes (FCA), and the Sports Ministry network serve millions of athletes. Sports leagues (recreational soccer leagues, golf outings, running clubs) organized by churches are among the most effective outreach vehicles churches have — they create natural, low-pressure contexts for relationships that lead to gospel conversations.",
  },
  {
    title: "The Lord's Day and Professional Sports",
    body: "The question of whether Christians should watch sports on Sunday is one that divides thoughtful believers. Some argue that the weekly NFL game is a competing liturgy — drawing the best of the day's attention and family focus away from worship and rest. Others argue that recreation and family togetherness on Sunday is consistent with the day's purpose. Both perspectives are held by serious Christians. The key questions are: Is Sunday worship being skipped or displaced? Is the Sabbath purpose (rest, worship, restoration) being served or undermined? Is sports consumption driving the rest of the week's consumption patterns?",
  },
];

const ATHLETES = [
  {
    name: "Eric Liddell",
    years: "1902–1945",
    sport: "Track (400m)",
    country: "Scotland",
    faith: "Evangelical Christian, Congregationalist",
    career: "1924 Olympic gold medalist in 400m (refused to run 100m on Sunday). After Olympics: China Inland Mission missionary. Died in Japanese internment camp (Weihsien, 1945).",
    quote: "When I run, I feel his pleasure.",
    legacy: "Depicted in Chariots of Fire (1981 Academy Award winner for Best Picture). Books: Complete Surrender (collected writings), Sally Magnusson's biography The Flying Scotsman.",
  },
  {
    name: "David Robinson",
    years: "b. 1965",
    sport: "Basketball (NBA Center)",
    country: "USA",
    faith: "Evangelical Christian",
    career: "San Antonio Spurs, 2× NBA champion, 1× MVP, 11× All-Star, Olympic gold medalist. Known for consistent witness, mentoring teammates, founding the Carver Academy school in San Antonio for at-risk children ($11M personal donation).",
    quote: "I don't separate the spiritual part of my life from the athletic. God touches everything I do.",
    legacy: "Called 'The Admiral.' Inducted into Basketball Hall of Fame. One of the most respected athletes in NBA history for both character and talent.",
  },
  {
    name: "Tim Tebow",
    years: "b. 1987",
    sport: "Football (QB), then Baseball",
    country: "USA",
    faith: "Evangelical Christian",
    career: "Heisman Trophy winner, NFL with Denver Broncos (famous 2011 playoff run). Known for: Tebowing (kneeling in prayer on field), John 3:16 eye black, outspoken Christian witness, missionary work in Philippines, now minor league baseball.",
    quote: "My faith is not a show. It's who I am.",
    legacy: "Controversial for polarizing reactions to his faith expression; founded Tim Tebow Foundation (orphan care, anti-trafficking, Special Olympics).",
  },
  {
    name: "Reggie White",
    years: "1961–2004",
    sport: "American Football (Defensive End)",
    country: "USA",
    faith: "Evangelical Christian, ordained minister",
    career: "Philadelphia Eagles, Green Bay Packers (1996 Super Bowl champion). Known as 'The Minister of Defense.' 198 career sacks (all-time record at retirement).",
    quote: "Football is what I do, but it's not who I am.",
    legacy: "Died of cardiac arrhythmia at 43. Known for fearless gospel witness to teammates and opponents. Active in church planting and community development.",
  },
  {
    name: "Roger Federer",
    years: "b. 1981",
    sport: "Tennis",
    country: "Switzerland",
    faith: "Catholic/Christian",
    career: "20 Grand Slam titles, considered by many the greatest tennis player ever. Known for: sportsmanship, grace in victory and defeat, longevity.",
    quote: "You want to play with passion, want to give everything every match.",
    legacy: "Recipient of the Laureus Lifetime Achievement Award. His 2022 Dartmouth graduation speech on crying and failure is widely praised. More private about faith but has spoken about prayer and gratitude; his graceful conduct on court reflects character formation.",
  },
  {
    name: "Hakeem Olajuwon",
    years: "b. 1963",
    sport: "Basketball (NBA Center)",
    country: "Nigeria/USA",
    faith: "Muslim (included to illustrate how faith shapes athletic identity across traditions, and as an example for interfaith conversations)",
    career: "Houston Rockets, 2× NBA champion, MVP, Defensive Player of the Year. Known for: The Dream Shake (signature move), deep faith practice including Ramadan fasting during playoffs.",
    quote: "I am a Muslim. My faith means everything to me.",
    legacy: "Example of how serious faith commitment — including fasting during competition — is possible and respected across traditions. Raises important interfaith conversation questions.",
  },
];

const DANGERS = [
  {
    title: "Sports as Identity",
    problem: "When an athlete's entire identity is bound up in their sport — 'I am a runner; I am an athlete' — injury, aging, or the end of a career becomes an existential crisis. Parents who live vicariously through their children's athletic performance create the same trap. The child's value becomes conditional on performance.",
    scripture: "'Do not work for food that spoils, but for food that endures to eternal life' (John 6:27).",
    response: "Help athletes develop identity language rooted in being children of God — 'I am someone who plays basketball' rather than 'I am a basketball player.' Distinction matters: what you do vs. who you are.",
  },
  {
    title: "Sports as Substitute Religion",
    problem: "For millions of people, sport functions as their primary communal identity, ritual practice, and source of transcendence. The stadium is the cathedral; the team kit is the liturgical vestment; the game is the weekly service. This is not coincidental — sport taps the same human needs that religion addresses. When sport functions as religion, it cannot bear the weight. Teams lose; stars are traded; leagues are corrupt. The idols always disappoint.",
    scripture: "'Their idols are silver and gold, the work of human hands' (Psalm 115:4).",
    response: "Recognize and name the religious function sports serves. Use sports conversations as an opportunity to explore deeper longings: community, meaning, glory, transcendence.",
  },
  {
    title: "Winning at All Costs",
    problem: "The 'win at all costs' ethic produces: performance-enhancing drugs, concussion cover-ups (NFL's long scandal), exploitation of athletes (college sports' billion-dollar industry on the backs of unpaid athletes), and the normalization of deception and injury as acceptable means to competitive ends. The coach who teaches young athletes that winning matters more than how you play is teaching a theology — a false one.",
    scripture: "'If anyone competes as an athlete, he is not crowned unless he competes according to the rules' (2 Tim 2:5).",
    response: "Celebrate effort, character, and fair play as genuinely valuable — not as sentimental consolation for losing, but as the primary fruit of sport.",
  },
  {
    title: "Sports Gambling and Addiction",
    problem: "The explosive growth of sports gambling (legalized in most U.S. states since 2018) has created a new addiction crisis intersecting directly with sports culture. DraftKings and FanDuel advertise during every broadcast; in-game betting is available on every phone. Gambling addiction is estimated at 1-3% of the population but is dramatically under-identified.",
    scripture: "'Keep your life free from love of money, and be content with what you have' (Hebrews 13:5).",
    response: "Churches need explicit teaching on gambling and addiction. The Celebrate Recovery and AA models apply. Sports gambling addiction is particularly hard to recognize because the behavior is now normalized and ubiquitous.",
  },
  {
    title: "Sports Violence and Christian Ethics",
    problem: "Some sports (boxing, MMA, American football) involve the intentional infliction of physical harm on another person as the means of winning. Christians disagree on whether participation is ethically permissible. Those who argue against: the deliberate damaging of another person made in God's image cannot be framed as glorifying God. Those who argue for: competition with physical contact is not the same as intentional harm; the athletes consent; risk-taking is part of embodied human life.",
    scripture: "'Do not repay evil for evil... as far as it depends on you, live peaceably with all' (Romans 12:17-18).",
    response: "This is a genuine ethical question without easy answers. Help athletes and parents think through the ethics rather than defaulting to culture's assumed answers in either direction.",
  },
];

const PRACTICES = [
  {
    title: "Pre-Game Prayer",
    desc: "Prayer before competition is not a magic ritual for winning — it is the acknowledgment that the outcome is in God's hands and the commitment to compete to his glory.",
    steps: [
      "Pray specifically for your competitor's safety and a fair contest",
      "Release the outcome: 'Whatever happens, I will honor you'",
      "Ask for full engagement of the gifts you've been given",
    ],
  },
  {
    title: "Faith Integration with Teammates",
    desc: "Your teammates are your mission field.",
    steps: [
      "Invite a teammate to church, not as a project but as a genuine friend",
      "Be the first to affirm a teammate's effort, especially when they fail",
      "If there's an FCA chapter or team Bible study, participate visibly and consistently",
    ],
  },
  {
    title: "Processing Defeat",
    desc: "How you respond to losing is your most visible testimony.",
    steps: [
      "Refuse to make excuses — take responsibility for your contribution to the outcome",
      "Congratulate the winner with genuine respect",
      "After processing the loss, ask: 'What did I learn? What would I do differently?' — and bring God into that conversation",
    ],
  },
  {
    title: "Sabbath Rest from Training",
    desc: "Elite athletes who rest better perform better — but the theological reason for rest is prior to the performance reason.",
    steps: [
      "Take one complete rest day per week — no training, no games",
      "Use that day for worship, family, and unstructured rest",
      "Trust that the God who made your body also built rest into its design",
    ],
  },
  {
    title: "Competing with Integrity",
    desc: "The way you play when no one is looking is who you actually are.",
    steps: [
      "Call your own fouls and violations when officials miss them",
      "Refuse to trash-talk",
      "When you face a competitor who plays dirty, respond with excellence rather than retaliation — this is countercultural and powerful",
    ],
  },
  {
    title: "After the Career",
    desc: "Every athletic career ends.",
    steps: [
      "Begin building identity outside sport while you're still competing",
      "Find mentorship opportunities — coach youth sports, lead a team Bible study",
      "Pray specifically: 'What is next? What did sports prepare me to do in the next chapter?'",
    ],
  },
];

export default function TheologyOfSportsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_theology-of-sports_tab", "theology");
  const [expandedTheology, setExpandedTheology] = useState<string | null>(null);
  const [selectedAthlete, setSelectedAthlete] = useState<number>(0);
  const [expandedDanger, setExpandedDanger] = useState<string | null>(null);

  type JournalEntry = { id: string; date: string; conviction: string; athlete: string; step: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_tosportsj_entries") ?? "[]"); } catch { return []; } });
  const [jConviction, setJConviction] = useState("");
  const [jAthlete, setJAthlete] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_tosportsj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jConviction.trim() && !jAthlete.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), conviction: jConviction, athlete: jAthlete, step: jStep };
    setJournalEntries(prev => [entry, ...prev]);
    setJConviction(""); setJAthlete(""); setJStep("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, lineHeight: 1.2 }}>
            A Theology of Sports and Play
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
            Play is not frivolous — it is one of God's gifts for human flourishing. And sport, at its best, cultivates virtue, community, and the glory of embodied human life. Here is how to think Christianly about competition and play.
          </p>
        </div>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 36 }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${i % 2 === 0 ? GREEN : PURPLE}` }}>
              <p style={{ margin: 0, fontSize: 13, color: TEXT, lineHeight: 1.5 }}>{stat}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(
            [
              { id: "theology" as Tab, label: "Theology of Play" },
              { id: "athletes" as Tab, label: "Athletes of Faith" },
              { id: "dangers" as Tab, label: "Dangers" },
              { id: "practices" as Tab, label: "Practices" },
              { id: "journal" as Tab, label: "📓 My Journal" },
              { id: "videos" as Tab, label: "🎬 Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 6px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1 — Theology */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_ITEMS.map((item) => {
              const open = expandedTheology === item.title;
              return (
                <div
                  key={item.title}
                  style={{ background: CARD, border: `1px solid ${open ? PURPLE : BORDER}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}
                >
                  <button type="button"
                    onClick={() => setExpandedTheology(open ? null : item.title)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                    <span style={{ color: PURPLE, fontSize: 18, fontWeight: 700, marginLeft: 12, flexShrink: 0 }}>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 20px 18px", color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2 — Athletes */}
        {activeTab === "athletes" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left column: athlete list */}
            <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {ATHLETES.map((a, i) => (
                <button type="button"
                  key={a.name}
                  onClick={() => setSelectedAthlete(i)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: `1px solid ${selectedAthlete === i ? PURPLE : BORDER}`,
                    background: selectedAthlete === i ? PURPLE + "22" : CARD,
                    color: selectedAthlete === i ? TEXT : MUTED,
                    cursor: "pointer",
                    textAlign: "left",
                    fontWeight: selectedAthlete === i ? 700 : 400,
                    fontSize: 13,
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{a.name}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{a.years}</div>
                </button>
              ))}
            </div>

            {/* Right sticky detail */}
            <div style={{ flex: 1, position: "sticky", top: 20 }}>
              {(() => {
                const a = ATHLETES[selectedAthlete];
                return (
                  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <div>
                        <h2 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 4px" }}>{a.name}</h2>
                        <span style={{ fontSize: 12, color: MUTED }}>{a.years}</span>
                      </div>
                      <span style={{ background: PURPLE + "33", color: PURPLE, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
                        {a.country}
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                      <div style={{ background: BG, borderRadius: 8, padding: "10px 14px" }}>
                        <div style={{ fontSize: 11, color: MUTED, marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>Sport</div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{a.sport}</div>
                      </div>
                      <div style={{ background: BG, borderRadius: 8, padding: "10px 14px" }}>
                        <div style={{ fontSize: 11, color: MUTED, marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>Faith</div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{a.faith}</div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Career</div>
                      <p style={{ margin: 0, fontSize: 14, color: TEXT, lineHeight: 1.6 }}>{a.career}</p>
                    </div>

                    <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}44`, borderRadius: 8, padding: "12px 16px", marginBottom: 14 }}>
                      <div style={{ fontSize: 11, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, fontWeight: 700 }}>Quote</div>
                      <p style={{ margin: 0, fontSize: 14, fontStyle: "italic", color: TEXT, lineHeight: 1.6 }}>"{a.quote}"</p>
                    </div>

                    <div>
                      <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Legacy</div>
                      <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.6 }}>{a.legacy}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Tab 3 — Dangers */}
        {activeTab === "dangers" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {DANGERS.map((d) => {
              const open = expandedDanger === d.title;
              return (
                <div
                  key={d.title}
                  style={{ background: CARD, border: `1px solid ${open ? "#FF4466" : BORDER}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}
                >
                  <button type="button"
                    onClick={() => setExpandedDanger(open ? null : d.title)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{d.title}</span>
                    <span style={{ color: "#FF4466", fontSize: 18, fontWeight: 700, marginLeft: 12, flexShrink: 0 }}>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 20px 20px" }}>
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>The Problem</div>
                        <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.7 }}>{d.problem}</p>
                      </div>
                      <div style={{ background: BG, borderRadius: 8, padding: "10px 14px", marginBottom: 14, borderLeft: `3px solid ${GREEN}` }}>
                        <div style={{ fontSize: 11, color: GREEN, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4, fontWeight: 700 }}>Scripture</div>
                        <p style={{ margin: 0, fontSize: 14, fontStyle: "italic", color: TEXT, lineHeight: 1.6 }}>{d.scripture}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Pastoral Response</div>
                        <p style={{ margin: 0, fontSize: 14, color: TEXT, lineHeight: 1.7 }}>{d.response}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4 — Practices */}
        {activeTab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {PRACTICES.map((p) => (
              <div
                key={p.title}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 6px", color: TEXT }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((step, si) => (
                    <div key={si} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{
                        flexShrink: 0,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: PURPLE + "33",
                        color: PURPLE,
                        fontSize: 11,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 1,
                      }}>
                        {si + 1}
                      </span>
                      <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 4 }}>My Sports & Faith Journal</h2>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>Record your convictions about faith and competition, athletes who inspire you, and next steps in your walk.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Conviction</label>
                  <textarea value={jConviction} onChange={e => setJConviction(e.target.value)} placeholder="What conviction about faith and sport is growing in you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "10px 14px", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Athlete / Inspiration</label>
                  <textarea value={jAthlete} onChange={e => setJAthlete(e.target.value)} placeholder="An athlete of faith who inspires you and why..." rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "10px 14px", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Next Step</label>
                  <textarea value={jStep} onChange={e => setJStep(e.target.value)} placeholder="One way you'll compete or play to the glory of God this week" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "10px 14px", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={saveJournalEntry} style={{ background: GREEN, color: "#000", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.conviction && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Conviction</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{entry.conviction}</p></div>}
                    {entry.athlete && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Athlete / Inspiration</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{entry.athlete}</p></div>}
                    {entry.step && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Next Step</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{entry.step}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, stories, and teachings on sports, competition, embodiment, and the glory of God in athletics.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "G-2e9mMf7E8", title: "The Story of Eric Liddell — Inspiration for Chariots of Fire", channel: "Christian Biography", description: "The remarkable life of Eric Liddell — Olympic gold medalist who refused to run on Sunday, then gave his life as a missionary in China. The defining story of faith, sport, and sacrifice." },
                  { videoId: "5nvVVcYD-0w", title: "Eric Liddell: Olympian Devoted to God", channel: "Scottish Parliament Exhibition", description: "A documentary portrait of Liddell's life from the 1924 Paris Olympics to his death in a Japanese internment camp — and the extraordinary faith that carried him through both." },
                  { videoId: "f7RJATbobik", title: "Chariots of Fire — A Tribute to Eric Liddell", channel: "Christian Film Tribute", description: "The iconic scenes from Chariots of Fire that capture Liddell's famous words: 'When I run, I feel God's pleasure.' A meditation on why God made us for delight." },
                  { videoId: "zUKzVFQn4Tc", title: "How to Be a Christian Athlete", channel: "The Gospel Coalition", description: "A practical and theological guide for athletes seeking to integrate genuine Christian faith with competitive sport — without the clichés and without compromising either." },
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
