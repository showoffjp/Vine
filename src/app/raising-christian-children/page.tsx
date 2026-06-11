"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Deuteronomy 6 — The Family as the Primary Discipleship Context", verse: "Deut 6:4-9", text: "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength. These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. The Shema is the beating heart of Israel's faith, and the command to impress it on children is not separated from it — they belong together. The home was the primary site of faith formation in ancient Israel: the table, the journey, the bedtime, the waking. Early Christianity inherited this instinct. The phrase ecclesia domestica — the domestic church — was used by early church writers to describe the family as a small church. This is not a supplement to the church's work; it is the original form of it." },
  { title: "Faith Is Caught More Than Taught — the Formation Research", verse: "Deut 6:5", text: "Love the Lord your God with all your heart. James K.A. Smith's work on cultural liturgies argues that human beings are primarily shaped not by the ideas they are taught but by the practices they are formed in — by what they do repeatedly and what they desire. Children are no exception. They absorb faith through the emotional register of the home: Do the adults in this house treat prayer as real? Do they read Scripture as if it matters? Are they kind to each other and to strangers? Does Sunday feel different in a meaningful way? These questions are answered not by formal instruction but by embodied practice and example. What this means for parents is both humbling and freeing: being a Christian — actually living it — matters more for your child's faith than any curriculum, devotional, or program you enroll them in." },
  { title: "Addressing Doubt and Hard Questions — Creating a Safe Space for Honest Faith", verse: "Ps 22:1", text: "My God, my God, why have you forsaken me? The research on religious transmission is consistent on one point: children who are allowed to wrestle with doubt and ask hard questions are significantly more likely to remain in the faith as adults than children whose questions were shut down or dismissed. The parent who responds to a child's honest theological question with genuine engagement — I do not know; let us think about that together; here is how I have wrestled with something similar — is doing more for that child's faith formation than the parent who provides a pat answer. The goal is not a faith that has never been questioned but a faith that has been tested and has held. The Psalms of lament teach us that honest wrestling with God is not the opposite of faith — it is one of faith's deepest forms." },
  { title: "Technology, Screens, and the Formation of Children's Souls", verse: "Rom 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. The attention economy is not neutral. It is designed by some of the most sophisticated engineers and psychologists in history to capture and hold the attention of children — and it is working. The research on heavy screen use and child development is now substantial: it is associated with reduced attention spans, increased anxiety and depression, disrupted sleep, and a diminished capacity for the kind of quiet, unhurried attention that both prayer and Scripture reading require. Christian parents face a genuine formation challenge: how to create limits and alternatives that protect the conditions for spiritual growth without becoming isolationist or unnecessarily adversarial toward technology. The question is not whether screens are evil but whether the current patterns of use are forming the kinds of people we want our children to become." },
  { title: "Prodigal Children — When the Faith Does Not Seem to Stick", verse: "Luke 15:11-32", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The parable of the prodigal son is the primary resource for parents whose adult children have walked away from faith. Notice what the father does not do: he does not chase his son into the far country, he does not cut off contact, he does not stop watching the horizon. He stays put, stays connected as best he can, and waits with an open posture. Parents of prodigal children often carry an enormous burden of guilt — wondering what they did wrong, what they could have done differently. Some of that reflection is appropriate. But much of it is the confusion of responsibility for influence with responsibility for outcomes. You cannot control whether your child chooses faith as an adult. You can control whether they know you love them and that the door is always open." },
];

const voices = [
  { name: "James K.A. Smith", role: "You Are What You Love", quote: "The household is a formative institution — perhaps the most powerful formative institution in a child's life. The liturgies of the home: what you do when you wake up, what happens at the table, what you do before sleep, how you spend Sunday, what you celebrate and how — these are not decorations around the real business of instruction. They are the instruction. They form children's loves more deeply than any lesson, because they are absorbed into the body before they are processed by the mind.", bio: "James K.A. Smith is a philosopher at Calvin University whose Cultural Liturgies project — You Are What You Love (2016) and the academic Desiring the Kingdom series — has reshaped how many Christian parents and educators think about formation. His central argument is that human beings are not primarily thinking things but wanting things, and that what we want is shaped by what we repeatedly do. This has profound implications for the home: the family's embodied practices are forming children's fundamental orientations toward God, others, and the world." },
  { name: "Mark Holmen", role: "Faith Begins at Home", quote: "Study after study confirms what Deuteronomy 6 has always said: the single most important factor in a child's faith development is not the quality of the church's children's ministry. It is whether faith is lived out and talked about at home. Parents who practice faith at home — imperfectly, inconsistently, but genuinely — produce children who are dramatically more likely to carry that faith into adulthood. The church can support the home, but it cannot replace it.", bio: "Mark Holmen served as a pastor and has become one of the leading voices on the intersection of church and home in Christian education. His research synthesis in Faith Begins at Home (2005) drew together decades of studies on religious transmission and presented the evidence for what most traditions have always claimed theologically: that the home is the primary site of faith formation, and that church programs cannot substitute for what happens around the table and at the bedside." },
  { name: "Sally Lloyd-Jones", role: "The Jesus Storybook Bible (Introduction)", quote: "Every story in this Bible whispers his name. From the very beginning, this is a Story about a baby. Every part of the Story is leading to him. He is like the missing piece in a puzzle — the piece that makes all the other pieces fit together, and suddenly you can see the whole picture. God wrote the Story. He wrote himself into it. He is the Hero of the Story. And every story in the Bible is really part of that story.", bio: "Sally Lloyd-Jones wrote The Jesus Storybook Bible (2007) with illustrator Jago, and it has become arguably the most beloved children's Bible of its generation. Its genius is theological as much as literary: every story is retold so that it points toward Christ, teaching children from the beginning that the Bible is a unified love story rather than a collection of moral lessons. Reading it aloud to young children is itself a formation practice — shaping their instinct that the whole of Scripture holds together in Jesus." },
];

const practices = [
  { icon: "📖", title: "Family Devotions", text: "Five to ten minutes of shared Scripture, simple prayer, and perhaps a song — kept consistent over years — is worth more than any elaborate program you do intermittently. Consistency matters more than length, and the goal is not theological instruction but the formation of a habit: that in this family, we turn toward God together. The Jesus Storybook Bible is an excellent resource for younger children; a simple read-through of a psalm or a short Gospel passage works well for older ones. Lower the bar enough that you can actually do it, and then do it." },
  { icon: "🌙", title: "Bedtime Prayers", text: "The most consistently available and intimate faith-formation moment in a parent's day is the few minutes before a child sleeps. The child is still, the defenses are down, and the emotional register of the home is quiet. Praying with your child at bedtime — for the people they named during the day, for their fears, for the world — forms both the habit of prayer and the association between faith and security. Many adults trace the deepest roots of their faith to the prayers they heard their parents pray over them as children." },
  { icon: "🕯️", title: "Celebrating Church Seasons at Home", text: "The Christian calendar — Advent, Christmas, Epiphany, Lent, Holy Week, Easter, Pentecost — is an embodied curriculum that shapes how children experience time. When Advent is marked at home with a wreath and candles and daily readings, children learn that time itself is sacred — that the year has a shape, and that shape tells the story of Jesus. When Lent involves a family practice of fasting or prayer, children learn that faith has a cost worth paying. These practices do not require elaborate preparation; they require intentionality and a willingness to mark time differently than the surrounding culture does." },
  { icon: "❓", title: "Answering Hard Questions Honestly and Together", text: "When your child asks a question you cannot answer — Why did God let that happen? Does God really hear prayers? What about people who have never heard of Jesus? — the most formation-rich response is not a prepared answer but an honest engagement: That is a really important question. I do not have a complete answer. Here is what I think I know, and here is what I am still working out. This models that faith is not threatened by honest questions, that adults are still learning, and that the Christian life involves genuine intellectual engagement with difficult realities. Children who grow up in families where questions are welcomed tend to stay." },
  { icon: "🤝", title: "Regular Family Service", text: "Serving others together as a family — at a food pantry, through a neighborhood cleanup, by visiting an elderly neighbor, by supporting a specific child in another country — creates faith-forming memories that no curriculum can replicate. Children who serve alongside their parents absorb a vision of Christian life as outward-facing, costly, and joyful in a way that cannot be communicated abstractly. The experiences become shared stories that the family returns to for years: Remember when we... These shared stories of faithful action are among the most durable forms of faith transmission available to parents." },
];

const scriptures = [
  { verse: "Deut 6:4-7", text: "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength. These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
  { verse: "Prov 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Ps 78:4-7", text: "We will tell the next generation the praiseworthy deeds of the Lord, his power, and the wonders he has done... so the next generation would know them, even the children yet to be born, and they in turn would tell their children. Then they would put their trust in God." },
  { verse: "Eph 6:4", text: "Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord." },
  { verse: "3 John 1:4", text: "I have no greater joy than to hear that my children are walking in the truth." },
  { verse: "Luke 2:52", text: "And Jesus grew in wisdom and stature, and in favor with God and man." },
];

const videos = [
  { id: "vZCIQwBhyVw", title: "Passing Faith to the Next Generation" },
  { id: "s4PaWPl6p8g", title: "Deuteronomy 6 and the Discipleship Home" },
  { id: "4Eq-WxHrW1Y", title: "How to Do Family Devotions That Actually Work" },
  { id: "rOzW8oaSFxo", title: "When Your Child Walks Away from Faith" },
];

type RCEntry = { id: string; date: string; practice: string; child: string; fruit: string };

export default function RaisingChristianChildrenPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_raisingchild_entries") ?? "[]"); } catch { return []; }
  });
  const [jPractice, setJPractice] = useState("");
  const [jChild, setJChild] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => { localStorage.setItem("vine_raisingchild_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPractice.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), practice: jPractice, child: jChild, fruit: jFruit }, ...prev]);
    setJPractice(""); setJChild(""); setJFruit("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Parenting &amp; Family Faith</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Raising Christian Children</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Passing faith to children through discipleship in the home — the theology of family formation, practices that shape children's loves, and wisdom for the long journey of raising faith.</p>

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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Family Faith Practices</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to track what you are trying and what you are noticing in your children.</p>
            {[
              { label: "Practice — which family faith practice you are trying", val: jPractice, set: setJPractice },
              { label: "Child — age and what you noticed (no names needed)", val: jChild, set: setJChild },
              { label: "Fruit — any fruit you are seeing in your child's faith", val: jFruit, set: setJFruit },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GREEN }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Practice:</span> {e.practice}</p>
                      {e.child && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Child:</span> {e.child}</p>}
                      {e.fruit && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GREEN, fontWeight: 600 }}>Fruit:</span> {e.fruit}</p>}
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
