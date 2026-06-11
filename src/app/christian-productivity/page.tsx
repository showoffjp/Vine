"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Are Not What You Produce — Productivity Culture vs. the Gospel", verse: "Matt 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest (Matt 11:28). Productivity culture whispers a lie: your worth is what you accomplish. Your value is your output. If you stop producing, you stop mattering. The gospel says the opposite. Identity in Christ is received, not earned — it is grounded in what God has done in Christ, not in what you have managed to do before 9am. The rest Jesus offers is not laziness or disengagement from work. It is the deep rest of a person who is no longer driven by performance anxiety, no longer defining themselves by their inbox zero or their quarterly metrics. Jesus invites the weary — specifically the weary — to a different kind of existence: one where you work from a place of secure identity, not toward one." },
  { title: "Created to Work — the Cultural Mandate Before the Fall", verse: "Gen 2:15", text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it (Gen 2:15). Before the Fall. Before sin. Before the curse. Work is not punishment — it is vocation. The cultural mandate to tend and keep the garden is the original human calling, and it predates everything that went wrong. What the Fall cursed was not work but the ground: the friction, the frustration, the thorns and thistles that make work hard (Gen 3:17-19). The calling itself remains good. This means that the Christian approach to work does not evacuate it of meaning in favor of ‘spiritual’ activities. Growing a business, writing a book, raising children, building software, cooking a meal — all of it participates in the original human mandate to tend what God has made. Work is not what you do between church services. It is part of what it means to bear the image of God." },
  { title: "The Wisdom of Limits — Why Saying No Is Spiritual", verse: "Ps 127:2; Eccl 4:6", text: "He grants sleep to those he loves (Ps 127:2). Better one handful with tranquility than two handfuls with toil and chasing after the wind (Eccl 4:6). Busyness is not a virtue. The person who is always available, always overcommitted, always adding one more thing to the calendar may be running from something as much as toward it. Wisdom is the discipline of limits — the courageous practice of declining what is not yours to do so that what is yours can receive your full attention and energy. Saying no is not failure; it is stewardship. It is acknowledging that you are finite, that God has not assigned every worthy cause to you personally, and that doing fewer things with genuine excellence serves the kingdom better than doing many things poorly and exhaustedly. The spiritual person is not the one who never rests. It is the one who has learned to recognize what God has actually assigned to them and to hold that assignment with focused faithfulness." },
  { title: "Work as Worship — Col 3:23 and the Spirituality of Excellence", verse: "Col 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters (Col 3:23). Paul’s instruction is extraordinary in its scope: whatever you do. Not just prayer and preaching. Whatever you do — every task, every deliverable, every conversation, every line of code or line of copy or line of argument — is to be done heartily, as to the Lord. This integrates faith and work at the most fundamental level. Excellence in ordinary work is not worldly ambition; it is worship. Treating your work with care and dignity — doing it well because the one you ultimately serve is God — transforms how you approach every task. The Christian is not the one who does the minimum acceptable work while thinking about spiritual things. The Christian is the one who brings the full weight of their gifts and attention to whatever is in front of them, as an offering to God." },
  { title: "Rest Is Productive — the Theology of Sabbath Applied to Daily Life", verse: "Exod 20:8", text: "Remember the Sabbath day by keeping it holy (Exod 20:8). The Sabbath is not a concession to human weakness; it is a creation ordinance built into the rhythm of the cosmos (Gen 2:2-3). God himself rested — not because he was tired, but because rest is part of the order of a flourishing life. The logic of rhythmic rest is counter-cultural but deeply wise: you do not earn rest by being productive enough; rest is the ground on which sustainable productivity grows. Sleep is not wasted time. Play is not irresponsible. Worship is not inefficient. These are the foundations of a life that can produce good work over the long arc of a life, without burning out, breaking down, or becoming a person whose work is all that remains. The Sabbath is God’s weekly reminder that you are not the engine of your own provision. He provides. You receive. That posture of receptivity is the spiritual foundation of everything else." },
];

const practices = [
  { icon: "🗓️", title: "Weekly Review — Aligning Commitments to Actual Priorities", text: "Once a week — ideally Friday afternoon or Sunday evening — review your commitments and outcomes against your actual priorities. Ask: what did I accomplish this week? What did I fail to do? What does my calendar say I value, and does that match what I say I value? The weekly review is not self-condemnation — it is honest stewardship, the practice of holding your time accountable to the things God has actually assigned to you." },
  { icon: "✣️", title: "Daily 3 — Identifying the Three Most Important Tasks", text: "Before checking email in the morning, identify the three most important tasks for the day — the three things that, if completed, would make the day genuinely productive. Write them down. Do them first. Email, notifications, and other people’s priorities will compete for your attention from the moment you open them; protecting the first hours of the day for your most important work is a practical expression of stewardship." },
  { icon: "⏱️", title: "Focus Blocks — Protecting Deep Work Time", text: "Reserve 90-minute blocks of the calendar for undistracted, focused work. Close tabs, silence notifications, and work on one thing. Deep work — the ability to concentrate without distraction on cognitively demanding tasks — is both rare and increasingly valuable. Most meaningful work requires sustained attention that is impossible in a fragmented, always-on environment. Protecting focus blocks is not a productivity hack; it is respecting the work God has given you enough to give it your full attention." },
  { icon: "🖕", title: "Saying No Gracefully — A Script for Declining Non-Essential Commitments", text: "When asked to take on something that is not yours to carry: “Thank you so much for thinking of me — that sounds genuinely important. I’ve had to be very intentional about my commitments this season, and I’m not able to give this the attention it deserves. I hope you find the right person.” Saying no gracefully is a skill. It requires clarity about your own assignments, the courage to disappoint people, and the humility to believe that God will provide someone else for the things he has not assigned to you." },
  { icon: "📵", title: "Sabbath Technology Fast — Total Device Rest as Part of Weekly Sabbath", text: "One day each week, put away all screens and devices as part of Sabbath observance. No email, no social media, no productivity apps — not because technology is evil, but because the constant availability of a connected device makes genuine rest nearly impossible. The Sabbath technology fast is not about technology; it is about rest, presence, and the practice of trusting that the world will continue to turn without your input for twenty-four hours. That trust is itself a form of worship." },
];

const scriptures = [
  { verse: "Col 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." },
  { verse: "Ps 127:1-2", text: "Unless the Lord builds the house, the builders labor in vain. Unless the Lord watches over the city, the guards stand watch in vain. In vain you rise early and stay up late, toiling for food to eat — for he grants sleep to those he loves." },
  { verse: "Matt 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
  { verse: "Gen 2:15", text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it." },
  { verse: "Prov 14:23", text: "All hard work brings a profit, but mere talk leads only to poverty." },
  { verse: "Eccl 3:1", text: "There is a time for everything, and a season for every activity under the heavens." },
];

const voices = [
  { name: "Tim Challies", role: "Do More Better; Blogger and Author", quote: "Productivity is not about getting as much done as possible. It is about rightly stewarding your gifts, time, energy, and enthusiasm in service of love for God and love for your neighbor. The goal is not efficiency for its own sake; it is faithfulness to what God has given you and called you to.", bio: "Challies’ Do More Better is a short, practical, and theologically grounded introduction to productivity from a Reformed evangelical perspective. His central argument is that productivity is a stewardship question — a matter of faithfully managing what God has entrusted to you in service of genuine love. His framework is simple enough to be actionable and honest enough to resist the performance-identity trap that haunts most productivity literature." },
  { name: "Jordan Raynor", role: "Called to Create; Master of One; Author and Entrepreneur", quote: "God is the original worker. He created, called it good, and then rested. We are made in his image — which means that when we create, build, and work with excellence, we are reflecting something true about who God is. The question is not whether your work matters; the question is whether you are doing it with the presence and excellence it deserves.", bio: "Raynor’s Called to Create and Master of One make a compelling biblical case for the integration of faith and work, creative excellence, and focused vocation. His emphasis on doing fewer things with greater presence — resisting the cultural pressure to diversify into every opportunity — is both practically wise and theologically rooted in the idea that God has specific callings for specific people." },
  { name: "Tony Reinke", role: "Competing Spectacles; Author and Journalist", quote: "Our attention is not a neutral resource. It is the faculty by which we commune with God, love our neighbors, and do our work. When we scatter our attention across a thousand trivial stimuli, we impoverish every part of our lives. Protecting attention is not a productivity strategy — it is a spiritual discipline.", bio: "Reinke’s Competing Spectacles addresses attention as a stewardship resource in an age of designed distraction. His argument is that what we habitually attend to shapes who we become — and that the discipline of protecting attention from the noise of digital culture is as much a spiritual matter as a practical one. His work is an important complement to any productivity framework, addressing the upstream question of what your attention is for." },
];

const videos = [
  { id: "j0u2Y4rHXlA", title: "What Does the Bible Say About Work and Productivity?" },
  { id: "BVlbO9DFHkM", title: "Tim Challies on Christian Productivity and Stewardship" },
  { id: "mHGrb0KDLFM", title: "Jordan Raynor: Called to Create — Faith, Work, and Excellence" },
  { id: "FJwrqMGxqkM", title: "The Theology of Rest and the Sabbath" },
];

type CPEntry = { id: string; date: string; goal: string; obstacle: string; insight: string };

export default function ChristianProductivityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrproductivity_entries") ?? "[]"); } catch { return []; }
  });
  const [jGoal, setJGoal] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jInsight, setJInsight] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrproductivity_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jGoal.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), goal: jGoal, obstacle: jObstacle, insight: jInsight }, ...prev]);
    setJGoal(""); setJObstacle(""); setJInsight("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Work &amp; Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Productivity</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Work, rest, and the order of a redeemed life — a biblical and practical guide to stewarding your time, attention, and energy for the glory of God.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Productivity Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Reflect on what you most want to accomplish, what is getting in the way, and what you are learning about yourself and work.</p>
            {[
              { label: "Goal (what do you most want to accomplish in the next season?)", val: jGoal, set: setJGoal },
              { label: "Obstacle (what is getting in the way?)", val: jObstacle, set: setJObstacle },
              { label: "Insight (what are you learning about yourself and work?)", val: jInsight, set: setJInsight },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: AMBER, marginBottom: 4 }}>Past Entries ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.goal.slice(0, 60)}{e.goal.length > 60 ? "…" : ""}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.obstacle && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Obstacle: {e.obstacle}</p>}
                    {e.insight && <p style={{ fontSize: "0.88rem", color: MUTED }}>Insight: {e.insight}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
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
