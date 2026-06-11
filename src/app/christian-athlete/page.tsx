"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Made to Move — the Body as Temple and Tool of Worship", verse: "1 Cor 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies (1 Cor 6:19-20). The theology of embodiment is the starting point for every Christian athlete. Scripture does not divide human beings into an important soul and an unimportant body. What we do with our bodies matters. Physical training and athletic competition can be genuine acts of worship — not because sport is sacred by nature, but because the body belongs to God and its full expression honors the One who made it. Stewardship of the physical body includes developing its capacities, maintaining its health, and offering its performance back to God. The athlete who understands this does not need to choose between faith and sport: the track and the field become altars." },
  { title: "Competing for an Audience of One — Col 3:23 and the Athlete", verse: "Col 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters (Col 3:23). This verse reorients the athlete’s entire competitive framework. The question is no longer “Did we win?” but “Did I compete with the full effort and integrity that honors God?” That reorientation does not make winning irrelevant — excellence is part of full-hearted effort. But it distinguishes between competing to glorify God and the subtle distortion of using God as a performance-enhancement resource, treating faith as a means to better stats. The Christian athlete who genuinely competes for an audience of One plays with freedom unavailable to athletes whose worth depends on the scoreboard. Failure does not define them. Victory does not inflate them. Their identity is already settled." },
  { title: "Winning, Losing, and the Gospel — How Faith Shapes Athletic Competition", verse: "Phil 2:3-4", text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others (Phil 2:3-4). The gospel reframes both victory and defeat. Winning is not ultimate — it is a gift to receive with gratitude and humility, not a prize that defines worth. Losing is not ultimate — it is a setback that reveals character and offers formation. The Christian athlete competes with humility in victory and dignity in defeat because neither outcome changes who they are in Christ. Sportsmanship is not a nicety; it is witness. Honoring opponents, accepting officials’ decisions with grace, competing without cheap shots or gamesmanship — these are not weaknesses. They are the visible marks of a life shaped by the gospel in one of the most intense competitive environments a person will enter." },
  { title: "Sports Idolatry — When Athletics Replaces God", verse: "1 John 5:21", text: "Dear children, keep yourselves from idols (1 John 5:21). The Christian tradition is consistent: anything good can become an idol, and sport is one of the most capable candidates. When athletic achievement becomes the primary source of worth, when the identity “I am an athlete” crowds out “I am a child of God,” when time, money, relationships, and Sundays are all sacrificed at the altar of sport without question — idolatry has taken root. The diagnostic questions are simple: Can I take sport as a gift rather than clutch it as a god? Can I step away from competition without an identity crisis? Would I choose a Sabbath over a Sunday tournament? The Christian athlete holds sport with an open hand, genuinely grateful for the gift but not dependent on it for meaning. This posture is rare, countercultural, and deeply attractive to teammates who have staked everything on sport and found it hollow." },
  { title: "Injury, Setback, and the Long Obedience", verse: "Heb 12:1-3", text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith (Heb 12:1-3). Chronic injury, season-ending setbacks, and athletic decline are not interruptions to the Christian athlete’s formation — they are part of it. Hebrews 12 uses the athletic metaphor precisely in the context of suffering and endurance. The race marked out for us is not always the race we would have chosen. Seasons of limitation, enforced rest, and the loss of physical capacity reveal what athletic competition may have been obscuring: where is my identity actually anchored? The athlete who emerges from serious injury with deepened faith and clearer identity has learned something about the long obedience that cannot be learned from winning. The body is temporary. The race Hebrews describes is eternal." },
];

const voices = [
  { name: "Eric Liddell", role: "Chariots of Fire / Recorded Speeches", quote: "I believe God made me for a purpose, but he also made me fast. And when I run, I feel his pleasure.", bio: "Eric Liddell, the Scottish Olympic sprinter immortalized in Chariots of Fire, is the defining figure of the Christian athlete conversation. His refusal to run on Sunday at the 1924 Paris Olympics — giving up his best event for the sake of Sabbath convictions — and his subsequent gold medal in the 400m are the archetypal story of faith and sport. His recorded speeches and the accounts of his life demonstrate a man for whom running was genuinely an act of worship, not merely competition. He later gave his life as a missionary in China, demonstrating that sport had always been the vehicle, not the destination. The famous line attributed to him captures the theology precisely: running as worship, not just competition." },
  { name: "Tim Tebow", role: "Through My Eyes", quote: "My platform as an athlete has never been just about football. It’s about using whatever influence I’ve been given to point people toward something greater than sport.", bio: "Tim Tebow’s memoir Through My Eyes documents his attempt to live a visible, unapologetic Christian faith in the highest-pressure environment of professional sport. Whatever one thinks of his NFL career, his willingness to use athletic platform for Gospel purposes — and to maintain that posture under sustained public scrutiny and mockery — has been formative for a generation of Christian athletes watching from the sidelines. Tebow’s example raises the question every Christian athlete must answer: what is the platform for?" },
  { name: "Tony Dungy", role: "Quiet Strength", quote: "My goal has always been to be successful in a way that I can be proud of — to win consistently, to compete with class and integrity, and to demonstrate that Christian character and competitive excellence are not in conflict.", bio: "Tony Dungy’s Quiet Strength is the most complete account available of what Christian leadership looks like inside professional sport’s highest levels. As the first African American head coach to win a Super Bowl, Dungy brought a distinctive approach: refusing to coach by fear, building cultures of accountability and character, and publicly crediting his faith as the source of his composure in both victory and crisis. His account of maintaining Christian character in professional sport addresses the real pressures athletes face at every level — not the sanitized version." },
];

const practices = [
  { icon: "\u{1F64F}", title: "Pre-Competition Prayer — Alignment, Not Petition for Victory", text: "Pray before competition for the right things: clarity of focus, full effort, clean hands, and honor to God in how you compete — not for the scoreboard result. This posture prevents the instrumentalization of prayer and keeps God properly oriented as Lord rather than performance coach." },
  { icon: "\u{1F3C6}", title: "Competing with Full Effort and Clean Hands", text: "Compete without cheap shots, gamesmanship, or dishonoring opponents. Full effort and clean hands together are the athletic expression of Col 3:23. Neither half without the other is sufficient: full effort without integrity is competitive sin; restraint without full effort is stewardship failure." },
  { icon: "\u{1F4DD}", title: "Post-Game Reflection — How Did I Represent Christ?", text: "After competition, before the adrenaline fully subsides, take five minutes to ask: Did I compete in a way that honored God? Where did I fail? What would I do differently? This practice builds the habit of connecting athletic performance to Christian character over time." },
  { icon: "\u{1F91D}", title: "Using Team as Ministry Field", text: "Your teammates are your primary mission field during your athletic career. Showing up consistently, serving without agenda, and being genuinely present in the locker room through the hard moments is the most effective athletic witness available. Don’t just be the teammate who prays at games; be the teammate who shows up when someone is struggling." },
  { icon: "\u{1F6CC}", title: "Taking Sabbath from Training", text: "Build a genuine rest day into your training week as a theological act, not just a recovery strategy. Sabbath from training is a declaration that your identity and worth are not dependent on your training volume. Athletes who cannot rest without anxiety have a formation problem, not a fitness problem." },
];

const scriptures = [
  { verse: "1 Cor 9:24-27", text: "Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. They do it to get a crown that will not last, but we do it to get a crown that will last forever." },
  { verse: "Heb 12:1-3", text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith. For the joy set before him he endured the cross, scorning its shame, and sat down at the right hand of the throne of God." },
  { verse: "Col 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." },
  { verse: "1 Cor 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "Phil 4:13", text: "I can do all this through him who gives me strength — written from prison, about contentment in all circumstances, not a promise of athletic victory but a declaration of sufficiency in Christ regardless of outcome." },
  { verse: "2 Tim 4:7-8", text: "I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day." },
];

const videos = [
  { id: "ePl6J0X7cJ8", title: "Eric Liddell — Running for God’s Glory" },
  { id: "pxp8Pw6NQPQ", title: "Faith and Sports — The Christian Athlete" },
  { id: "5Y0J0uBnrYQ", title: "Tony Dungy on Competing with Christian Character" },
  { id: "9gxp0S7n9AQ", title: "When Sport Becomes Idol — A Christian Warning" },
];

type CAThEntry = { id: string; date: string; challenge: string; principle: string; application: string };

export default function ChristianAthletePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CAThEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrathletes_entries") ?? "[]"); } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrathletes_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, principle: jPrinciple, application: jApplication }, ...prev]);
    setJChallenge(""); setJPrinciple(""); setJApplication("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Sports &amp; Faith</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>The Christian Athlete</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Integrating Christian identity and athletic competition — competing for an audience of One, stewarding the body as temple, and letting faith shape every dimension of sport.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Athlete Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record your athletic challenges, the faith principle you want to apply, and how you will live it out this week.</p>
            {[
              { label: "Challenge (the athletic challenge you are currently facing)", val: jChallenge, set: setJChallenge },
              { label: "Principle (the faith principle you want to apply)", val: jPrinciple, set: setJPrinciple },
              { label: "Application (how you will live it out this week)", val: jApplication, set: setJApplication },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#F2F2F8", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: GREEN, marginBottom: 4 }}>Past Entries ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.challenge}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.principle && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Principle: {e.principle}</p>}
                    {e.application && <p style={{ fontSize: "0.88rem", color: MUTED }}>Application: {e.application}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GREEN }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
