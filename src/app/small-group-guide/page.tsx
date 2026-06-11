"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The One Anothers — Community as Discipleship Context", verse: "John 13:34-35", text: "A new command I give you: love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another. New Testament scholars have counted approximately 59 “one another” commands in the NT letters: love one another, bear one another’s burdens, forgive one another, confess to one another, pray for one another, encourage one another. The irreducible observation is that virtually none of these commands can be obeyed in a large-group setting. You cannot bear the burden of someone whose name you do not know. You cannot confess to a crowd. The small group is not an optional program enhancement — it is the necessary context for being the church, not merely attending it." },
  { title: "Iron Sharpens Iron — Accountability as Formation", verse: "Prov 27:17", text: "As iron sharpens iron, so one person sharpens another. The formative power of close Christian friendship is not automatic — it depends on the willingness to be known. Anonymity in church attendance stunts spiritual formation because growth is accelerated by accountability: when someone who knows us asks how we are doing with what we said we were going to do, we are more likely to do it. The small group creates the relational density required for this kind of accountability. The goal is not surveillance but the freedom that comes from being fully known and fully loved — the same dynamic that characterizes our relationship with God." },
  { title: "Where Two or Three Are Gathered — the Promise of Presence", verse: "Matt 18:20", text: "For where two or three gather in my name, there am I with them. The context of this promise in Matthew 18 is the practice of church discipline — the gathered community’s exercise of pastoral authority in love. But the promise itself is broader: Jesus makes a distinctive commitment to the small gathered community. There is something about the intimacy and intentionality of a small group gathered in Jesus’ name — not to consume religious content but to seek him together — that carries a particular spiritual power. The large congregation has its own gifts; the small group has this one: the presence of Jesus promised specifically to the gathered few." },
  { title: "Covenant Community vs. Consumer Community — What Makes a Group Healthy", verse: "Heb 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing. The difference between a healthy and an unhealthy small group often comes down to whether the group operates on a consumer or a covenant model. A consumer group gathers around a curriculum, treats attendance as optional, and disperses when the study ends. A covenant group commits to knowing and serving each other, treats attendance as a form of fidelity, and exists to spur one another toward love and good deeds. High-expectation community — where people are expected to show up, be honest, and invest — produces formation in ways that low-commitment arrangements never can." },
  { title: "Life Together — Bonhoeffer’s Vision of Christian Community", verse: "Gal 6:1-2", text: "Carry each other’s burdens, and in this way you will fulfill the law of Christ. Dietrich Bonhoeffer’s Life Together (1939), written from the context of an illegal seminary under the Nazi regime, is the most searching theological treatment of Christian community in the twentieth century. Bonhoeffer warns against ‘visionary dreaming’ — the idealized community that exists in our imagination and against which actual community is always found wanting. Real community, he argues, is a gift of grace that we receive rather than construct, and it is centered not in warm feelings but in the Word of God, in prayer, in common worship, and in ‘the ministry of the Word to one another’ — the simple act of bringing each other back to what God has said." },
];

const voices = [
  { name: "Dietrich Bonhoeffer", role: "Life Together (1939)", quote: "The physical presence of other Christians is a source of incomparable joy and strength to the believer. The prisoner, the sick person, the Christian in exile sees in the companionship of a fellow Christian a physical sign of the gracious presence of the triune God. Visitor and visited in loneliness recognize in each other the Christ who is present in the body; they receive and meet each other as one meets the Lord.", bio: "Life Together was written in the brief window between the closure of Bonhoeffer’s underground Finkenwalde seminary and his imprisonment. It remains the most theologically serious short treatment of Christian community in print. Bonhoeffer’s central insight is that the brother or sister in Christ mediates the presence of Christ to us — which is why the church gathered, however small, is never merely a social group." },
  { name: "Bill Donahue and Russ Robinson", role: "Building a Church of Small Groups", quote: "The question is not whether your church has small groups, but whether it is a church of small groups. When the small group moves from the program room to the center of the church’s life, everything changes: pastoral care becomes distributed, spiritual formation becomes relational, and the mission of the church is carried not by a staff team but by hundreds of communities living the Jesus life together.", bio: "Donahue and Robinson’s work at Willow Creek Community Church and its documentation in Building a Church of Small Groups has influenced how thousands of churches in the US and globally have reconceived the small group as structural rather than supplemental. Their distinction between a church with small groups (program) and a church of small groups (ecclesiology) is foundational." },
  { name: "M. Scott Boren", role: "Missional Small Groups", quote: "A healthy small group is not a closed circle — it is a spiral. It spirals inward into deeper knowing and love of one another, and it spirals outward into the neighborhood, the city, the world. Groups that exist only for one another eventually turn in on themselves. Groups that exist only for the world lose the inner life that sustains mission. The discipline is holding both together.", bio: "Boren’s contribution is the integration of the missional church movement with small group ministry. His argument is that groups formed purely for internal nurture tend toward introversion and irrelevance, while groups oriented only toward outreach lack the relational depth to sustain people through suffering and failure. Missional small groups hold both inward nurture and outward witness in creative tension." },
];

const practices = [
  { icon: "📋", title: "Group Covenant", text: "A written covenant — agreed to by all members at the group’s formation and revisited annually — sets expectations for attendance, confidentiality, honesty, and mutual care. It communicates that this group is different from a casual gathering: that showing up matters, that what is shared stays in the room, and that we are committed to each other not only when it is convenient. A covenant is not legalistic — it is the structure that makes trust possible." },
  { icon: "🧊", title: "Intentional Intimacy-Building", text: "The difference between groups that stay on the surface and groups that go deep is often the quality of their sharing practice. Ice-breaker questions that ask not just for facts (where did you grow up) but for stories (tell us about a time when you were most afraid / most grateful / most uncertain) build genuine intimacy over time. The group leader sets the tone by going first and going deep." },
  { icon: "🙏", title: "Prayer for Each Member by Name", text: "Praying for each member by name every week — not just at the meeting, but during the week — is one of the simplest and most powerful practices a small group can adopt. It requires knowing each other well enough to know what to pray for. It creates a web of intercessory care that members feel even when they are not together. The group that prays together specifically and regularly is almost always the group that stays together." },
  { icon: "🌍", title: "Shared Ministry or Outreach Project", text: "Groups that serve together bond differently than groups that only study together. A shared outreach project — serving at a food pantry, visiting a care home, sponsoring a child together, adopting a street to pray for — adds a missional dimension to the group’s identity. It gives the group a shared story beyond the room, and it keeps the group’s attention outward rather than exclusively inward." },
  { icon: "🔄", title: "Annual Group Evaluation and Renewal", text: "Healthy groups are not static — they ask periodically whether their current form is still serving their purpose. An annual evaluation — do we want to continue? in what form? with what adjustments? — prevents groups from dying slowly through inertia. It also allows natural transitions: a group that has met its purpose can celebrate, close well, and some members can launch new groups. Intentional evaluation honors what the group has been and makes space for what it might become." },
];

const scriptures = [
  { verse: "Matt 18:20", text: "For where two or three gather in my name, there am I with them." },
  { verse: "Heb 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching." },
  { verse: "John 13:34-35", text: "A new command I give you: love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another." },
  { verse: "Acts 2:42-47", text: "They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer... All the believers were together and had everything in common." },
  { verse: "Prov 27:17", text: "As iron sharpens iron, so one person sharpens another." },
  { verse: "Gal 6:1-2", text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted. Carry each other’s burdens, and in this way you will fulfill the law of Christ." },
];

const videos = [
  { id: "Bv0cSJEBj9I", title: "How to Lead a Healthy Small Group" },
  { id: "q5SIDOuMZUQ", title: "The Power of Christian Community" },
  { id: "RyEIMNb_cAk", title: "Bonhoeffer: Life Together and Christian Fellowship" },
  { id: "KZRE0GVdD04", title: "Building a Small Group That Lasts" },
];

type SGEntry = { id: string; date: string; challenge: string; step: string; outcome: string };

export default function SmallGroupGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_smallgroup_entries") ?? "[]"); } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jStep, setJStep] = useState("");
  const [jOutcome, setJOutcome] = useState("");

  useEffect(() => { localStorage.setItem("vine_smallgroup_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, step: jStep, outcome: jOutcome }, ...prev]);
    setJChallenge(""); setJStep(""); setJOutcome("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Community &amp; Church</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Small Group Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Start, lead, and sustain a healthy small group — the theology of Christian community, practical wisdom for group life, and the practices that make groups go deep.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Group</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think through your small group honestly and prayerfully.</p>
            {[
              { label: "Challenge — the challenge your group or potential group faces", val: jChallenge, set: setJChallenge },
              { label: "Step — a specific step you will take", val: jStep, set: setJStep },
              { label: "Outcome — what you hope to see in your group in 6 months", val: jOutcome, set: setJOutcome },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Challenge:</span> {e.challenge}</p>
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Step:</span> {e.step}</p>}
                      {e.outcome && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Outcome:</span> {e.outcome}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
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
