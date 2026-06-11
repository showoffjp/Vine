"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Work Before the Fall — What That Means for Your Job", verse: "Gen 2:15", text: "The Lord put the man in the garden to work it and take care of it (Gen 2:15). Work is not a consequence of the Fall — it is a creation ordinance given to humanity before sin entered. The Fall makes work frustrating and painful (Gen 3:17-19) but does not make it evil or merely instrumental. Adam was given meaningful, purposeful labor in a world God had called very good. Recovering the pre-Fall theology of work changes the question from how to endure your job to how to pursue it as a calling. The frustrations are real, but they are not the definition of work — they are its corruption, which the gospel addresses." },
  { title: "Calling vs. Career — What the Protestant Reformation Gave Us", verse: "Col 3:23-24", text: "The Reformers — Luther especially — recovered the doctrine of vocation: every legitimate occupation can be a calling from God. Before the Reformation, vocation was effectively restricted to priests and monks; secular work was spiritually inferior. The sacred-secular divide that relegates faith to Sunday and ignores Monday is a heresy with profound practical consequences. The baker, the teacher, the accountant, and the pastor all stand equally before God in their work. What it means to understand your specific work as your current calling from God — not merely a means of income but an assignment — changes how you show up for it." },
  { title: "Excellence as Worship — Doing Your Work for the Right Audience", verse: "Col 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters (Col 3:23-24). The motivation for work changes entirely when the audience changes. Working for God rather than for human approval or personal advancement means: not cutting corners when no one is watching, bringing full effort to unnoticed work, and defining success by faithfulness rather than recognition. This is not performance anxiety with God substituted for the boss — it is freedom. When God is the audience, the small and unnoticed work carries the same weight as the celebrated work. Excellence is not ambition; it is worship." },
  { title: "Work, Rest, and Rhythm — the Creation Pattern", verse: "Gen 2:2-3", text: "The six-and-one pattern is embedded in creation itself (Gen 2:2-3). The Sabbath commandment is not an arbitrary rule but the built-in limitation on work — the rhythm God wove into the fabric of the week. The person who cannot rest is disobeying as surely as the person who will not work. Rest, recreation, and renewal are not rewards for productivity — they are part of the creation design for human flourishing. The spiritual formation that comes only through stopping — through ceasing — is not available to the person who never stops. Work without Sabbath eventually produces diminished work and a diminished soul." },
  { title: "Work Frustration Is Theological — Not Just Managerial", verse: "Gen 3:17-19", text: "Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life. It will produce thorns and thistles for you (Gen 3:17-19). The thorns and thistles are not metaphors — they are the theological name for every frustrating colleague, every project that goes wrong, every Monday morning that does not go as planned. The person who understands work frustration as part of the Fall's effect is better equipped to endure it without despair and without over-investing identity in career outcomes. This is not fatalism; it is honesty about why work is hard, which is the beginning of wisdom about how to face it." },
];

const voices = [
  { name: "Dorothy Sayers", role: "Why Work?", quote: "The Church has forgotten that work is not primarily a source of income but a service to the community and a fulfillment of human nature. The worker who turns out slipshod work because it is the fastest way to get paid is a liar — he has pretended to give what he has not given. Work exists for the sake of the work, and when the Church teaches workers otherwise, it has corrupted its own witness to the world.", bio: "Dorothy Sayers was a British author, playwright, and theologian best known for her Lord Peter Wimsey detective novels. Her essays on work, creativity, and the Christian mind — collected in Creed or Chaos? — remain some of the sharpest and most readable treatments of the theology of work ever written. Her insistence that work must be done for the work's own sake, not merely for wages, anticipates much later thinking about vocation." },
  { name: "Paul Stevens", role: "The Other Six Days", quote: "Most Christians live as though faith is for Sunday and the other six days are a secular zone beyond God's concern. This is a practical Gnosticism — a split between the sacred and the secular that the incarnation should have destroyed forever. God is as present at the workbench and the desk as at the altar. The question is not whether God cares about Monday morning; the question is whether we have a theology thick enough to meet him there.", bio: "Paul Stevens is a professor emeritus of marketplace theology at Regent College in Vancouver, whose work on the integration of faith and work has shaped a generation of marketplace Christians. The Other Six Days makes the case that the 90 percent of Christians who are not in vocational ministry are called to be the primary ministers of the church — in and through their ordinary daily work in the world." },
  { name: "Lester DeKoster", role: "Work: The Meaning of Your Life", quote: "Work is the form in which we make ourselves useful to others — and how God, through human labor, weaves together the fabric of civilization itself. The food on your table was planted, harvested, processed, shipped, and sold by thousands of workers you will never meet. You are fed by the labor of the world, and the world is fed in part by yours. This is not economics — it is providence. God governs creation through the work of human hands.", bio: "Lester DeKoster was a Reformed theologian and editor whose short book Work: The Meaning of Your Life has become a classic in the theology of work literature. His central insight — that work is the means by which God knits human beings together in mutual service — gives even the most mundane job a profound dignity. DeKoster argues that through work, ordinary people participate in the ongoing providential government of the world." },
];

const practices = [
  "A work audit: examining your current work for places where it aligns with your calling and places where it does not — and praying over both",
  "Bringing your work into prayer regularly — not only asking for help with problems but offering the work itself to God as an act of worship",
  "Identifying the specific ways your work serves others and contributes to human flourishing, so you can hold that meaning when the work is hard",
  "Building a Sabbath practice that genuinely stops the work week — not a softer version of busyness but a real rhythm of rest and renewal",
  "Identifying one person whose faith you can support specifically through your workplace through character witness and intentional friendship",
];

const scriptures = [
  { verse: "Gen 2:15", text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it." },
  { verse: "Col 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward." },
  { verse: "Prov 14:23", text: "All hard work brings a profit, but mere talk leads only to poverty." },
  { verse: "Ecc 9:10", text: "Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom." },
  { verse: "2 Thess 3:10-12", text: "The one who is unwilling to work shall not eat. We hear that some among you are idle and disruptive. They are not busy; they are busybodies. Such people we command and urge in the Lord Jesus Christ to settle down and earn the food they eat." },
  { verse: "Matt 25:23", text: "His master replied, Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master's happiness." },
];

const videos = [
  { id: "QRTG3J7DSCM", title: "The Theology of Work — What Your Job Has to Do with the Kingdom" },
  { id: "rJkQyEodM8g", title: "Vocation: Every Job as a Calling from God" },
  { id: "4r1hNjkrY5o", title: "Work, Rest, and Sabbath — the Creation Rhythm" },
  { id: "m6p3b0Y_NJo", title: "Monday Morning Theology — Faith and the Workplace" },
];

type TWEntry = { id: string; date: string; meaning: string; challenge: string; calling: string };

export default function TheologyOfWorkGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TWEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_theologyofwork_entries") ?? "[]"); } catch { return []; }
  });
  const [jMeaning, setJMeaning] = useState("");
  const [jChallenge, setJChallenge] = useState("");
  const [jCalling, setJCalling] = useState("");

  useEffect(() => { localStorage.setItem("vine_theologyofwork_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jMeaning.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), meaning: jMeaning, challenge: jChallenge, calling: jCalling }, ...prev]);
    setJMeaning(""); setJChallenge(""); setJCalling("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Leadership &amp; Vocation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Work</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What Scripture says about vocation, calling, and Monday mornings — a biblical theology for the other six days of the week.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GOLD, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GOLD, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Work</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your work honestly before God and think through your calling.</p>
            {[
              { label: "Meaning — what meaning you find or are looking for in your work", val: jMeaning, set: setJMeaning },
              { label: "Challenge — a specific work challenge you are bringing to faith", val: jChallenge, set: setJChallenge },
              { label: "Calling — what you sense God calling you to in and through your work", val: jCalling, set: setJCalling },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GOLD }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Meaning:</span> {e.meaning}</p>
                      {e.challenge && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Challenge:</span> {e.challenge}</p>}
                      {e.calling && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GOLD, fontWeight: 600 }}>Calling:</span> {e.calling}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GOLD }}>{v.title}</h3>
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
