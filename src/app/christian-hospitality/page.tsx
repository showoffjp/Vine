"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Philoxenia — Love of the Stranger, Not Just Comfort for Friends", verse: "Rom 12:13", text: "The Greek word behind the command to ‘practice hospitality’ in Romans 12:13 is philoxenia — literally, love of the stranger (xenos). This stands in deliberate contrast to philos, love of friends. Biblical hospitality is not primarily hosting people you already know and enjoy; it is opening yourself to the outsider, the newcomer, the vulnerable, and the foreigner. The Old Testament tradition is emphatic: Israel was to welcome the stranger because Israel had been strangers in Egypt (Lev 19:34). That tradition carried directly into the early church, where the household was the primary unit of Christian community and hospitality to traveling missionaries and the poor was an expected feature of Christian life, not an exceptional act of kindness." },
  { title: "The Angels Unawares — Hebrews 13:2 and the Theology of Encounter", verse: "Heb 13:2", text: "Do not forget to show hospitality to strangers, for by so doing some have shown hospitality to angels without knowing it. The tradition behind this verse is rooted in Genesis 18, where Abraham runs to meet three visitors near the oaks of Mamre, offers them bread and water, and discovers he has hosted the Lord himself. The theological weight of the Hebrews verse is not primarily that we might receive something from the stranger, but that welcoming the stranger opens us to an encounter with God that a closed door forecloses. The stranger, the outsider, the person who does not fit — in the biblical imagination, these are precisely the people through whom God most unexpectedly arrives." },
  { title: "Jesus as the Welcomed Guest — Learning Hospitality from Luke", verse: "Luke 14:12-14", text: "Luke is the gospel of meals. Jesus is welcomed by Zacchaeus (who climbs a tree just to see him), by Mary and Martha (where the tension between service and sitting arises), and by the Pharisees (where the table becomes the site of confrontation and teaching). What is remarkable is that Jesus as often receives hospitality as he extends it. He enters other people’s homes, reclines at their tables, allows himself to be served. The spirituality of being hosted — receiving care without defensiveness, entering someone else’s space with genuine presence — is as much a Christian practice as hosting. The table in Luke is always a place of transformation, encounter, and the rearrangement of social hierarchies." },
  { title: "The Kingdom Table — Inclusion, Dignity, and Who Gets Invited", verse: "Luke 14:12-14", text: "When you give a luncheon or dinner, do not invite your friends, your brothers or sisters, your relatives, or your rich neighbors; if you do, they may invite you back and so you will be repaid. But when you give a banquet, invite the poor, the crippled, the lame, the blind, and you will be blessed. The eschatological banquet in Luke 14 is not a metaphor — it is a present ethical demand. Kingdom hospitality inverts the social logic of reciprocity: instead of hosting those who can return the favor, the kingdom table sets a place for those who cannot. This is hospitality as a prophetic act, a visible sign of a world being remade, and a quiet rebuke to every church whose guest list looks exactly like its existing membership." },
  { title: "Hospitality vs. Entertainment — the Critical Distinction", verse: "1 Pet 4:9", text: "Christine Pohl’s foundational insight is that hospitality and entertainment are not the same thing and are in fact in tension. Entertainment asks: how do I look? Is my house presentable? Will the food be impressive? It is organized around the host’s performance. Hospitality asks a completely different question: does this person feel welcome? Do they know they matter? Is there room for them here? It is organized around the guest’s experience. The obstacles to genuine hospitality are largely the obstacles of entertainment culture: perfectionism (the house must be ready), comparison (we cannot host the way they do), and the exhaustion that comes from performing rather than simply being present. Offer hospitality to one another without grumbling (1 Pet 4:9) — the without grumbling is doing a lot of work." },
];

const voices = [
  { name: "Christine Pohl", role: "Making Room: Recovering Hospitality as a Christian Tradition", quote: "For most of the history of the church, hospitality was understood to be a fundamental dimension of Christian life and witness. It was not an optional practice for those with certain personalities or large houses; it was an expected expression of the gospel. We have reduced it to a social grace when it is actually a theological practice — and recovering it transforms both the one who receives and the one who gives.", bio: "Pohl’s Making Room is the most theologically substantial treatment of Christian hospitality in recent decades. Her historical research shows that the church’s early vitality was inseparable from its practice of welcoming strangers — travelers, the poor, the sick, the outcast. Her key distinction between hospitality (giving someone a place) and entertainment (performing for guests) has become the indispensable starting point for all contemporary Christian thinking on the subject." },
  { name: "Rosaria Butterfield", role: "The Gospel Comes with a House Key", quote: "Radically ordinary hospitality — using your home, your table, and your time in regular, consistent, unhurried welcome of neighbors and strangers — is not a strategy for church growth. It is what faithfulness looks like on a Tuesday. It is the ordinary means by which the gospel moves, through the front door and across the dinner table, into the lives of people who would never set foot in a church building.", bio: "Butterfield’s argument is that the church has outsourced hospitality to programs and events when the New Testament locates it in the home. Her practice of the open table — hosting neighbors, strangers, and seekers for regular meals — is both a theological conviction and a form of evangelism. The Gospel Comes with a House Key is a sustained case that ordinary domestic hospitality is the front line of Christian witness in a fragmented and lonely culture." },
  { name: "Henri Nouwen", role: "Reaching Out", quote: "Hospitality means primarily the creation of a free space where the stranger can enter and become a friend instead of an enemy. Hospitality is not to change people, but to offer them space where change can take place. It is not to bring men and women over to our side, but to offer freedom not disturbed by dividing lines.", bio: "Nouwen’s treatment of hospitality in Reaching Out situates the practice in his broader spiritual framework of moving from hostility to hospitality — a movement that begins internally, in our own hearts, before it becomes a posture toward others. His central image of hospitality as ‘creating free space’ corrects the common error of making hospitality a vehicle for agenda rather than a gift of presence. For Nouwen, the hospitable person is one who has done enough inner work to be genuinely present to another without needing to fix or convert them." },
];

const practices = [
  { icon: "🍽️", title: "Regular Open-Table Meals", text: "Commit to inviting one new or unlikely person to your table each month — not a close friend, but a neighbor, a coworker, a person from church you have not gotten to know, or someone in need. The regular rhythm matters more than the occasion being special. The table is where friendship begins; the invitation is the act of faith." },
  { icon: "🚶", title: "Threshold Hospitality", text: "Practice brief, intentional welcoming conversations at the door — your front door at home, the entrance to the church building, the moment someone new appears in a familiar space. Threshold hospitality asks: does this person know they are seen? A name, eye contact, and a genuine question are often enough to communicate that someone belongs." },
  { icon: "📦", title: "Margin for Spontaneous Hospitality", text: "Keep pantry basics stocked for unplanned guests — simple ingredients that can become a meal — and protect some margin in your schedule for unplanned time with people. The Christian tradition of hospitality assumed that the stranger might arrive without notice. A house and a life with no margin for the unexpected is a house and life closed to a major category of grace." },
  { icon: "🧘", title: "Practicing Presence over Performance", text: "When hosting, train your attention on the guest rather than on how the evening is going. Ask one good question and listen fully to the answer. Put the phone away. Let the meal be imperfect. The guest does not need your house to be beautiful — they need to know that being with them is enough to make you happy. Practice the attentive, unhurried presence that communicates: you are worth my full attention." },
  { icon: "🌍", title: "Advocacy Hospitality", text: "Extend the practice of hospitality beyond the home through connection with local organizations that welcome the refugee, support the unhoused, and serve the immigrant. Volunteer. Give. Advocate. The kingdom table is wider than our dining room, and the spirituality of hospitality eventually asks us to bring that welcome to bear on the social and political conditions that make people strangers in the first place." },
];

const scriptures = [
  { verse: "Rom 12:13", text: "Share with the Lord’s people who are in need. Practice hospitality." },
  { verse: "Heb 13:2", text: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it." },
  { verse: "Luke 14:12-14", text: "When you give a luncheon or dinner, do not invite your friends, your brothers or sisters, your relatives, or your rich neighbors... But when you give a banquet, invite the poor, the crippled, the lame, the blind, and you will be blessed." },
  { verse: "Matt 25:35-36", text: "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me." },
  { verse: "1 Pet 4:9", text: "Offer hospitality to one another without grumbling." },
  { verse: "Gen 18:1-3", text: "The Lord appeared to Abraham near the great trees of Mamre while he was sitting at the entrance to his tent in the heat of the day. Abraham looked up and saw three men standing nearby. When he saw them, he hurried from the entrance of his tent to meet them and bowed low to the ground." },
];

const videos = [
  { id: "HMIaGlllVTc", title: "The Theology of Christian Hospitality" },
  { id: "t8R2OdKpfIU", title: "Rosaria Butterfield on Radical Ordinary Hospitality" },
  { id: "N_ZAkS1NVLA", title: "Christine Pohl: Making Room for the Stranger" },
  { id: "2VCo3wy2VPs", title: "Hospitality as Spiritual Practice" },
];

type CHEntry = { id: string; date: string; action: string; obstacle: string; growth: string };

export default function ChristianHospitalityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_hospitality_entries") ?? "[]"); } catch { return []; }
  });
  const [jAction, setJAction] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jGrowth, setJGrowth] = useState("");

  useEffect(() => { localStorage.setItem("vine_hospitality_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jAction.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), action: jAction, obstacle: jObstacle, growth: jGrowth }, ...prev]);
    setJAction(""); setJObstacle(""); setJGrowth("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Community &amp; Service</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Hospitality</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Hospitality as spiritual practice — welcoming the stranger and the neighbor through the lens of Scripture, the Christian tradition, and the practices that make a home a gift.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ROSE : BORDER}`, background: tab === t.id ? ROSE + "22" : "transparent", color: tab === t.id ? ROSE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ROSE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: ROSE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ROSE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Hospitality</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to examine where you are and where you want to grow in the practice of welcome.</p>
            {[
              { label: "Action — a specific hospitality action you took or are planning", val: jAction, set: setJAction },
              { label: "Obstacle — what gets in the way of welcoming others", val: jObstacle, set: setJObstacle },
              { label: "Growth — what you are learning about hospitality and yourself", val: jGrowth, set: setJGrowth },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ROSE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ROSE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Action:</span> {e.action}</p>
                      {e.obstacle && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Obstacle:</span> {e.obstacle}</p>}
                      {e.growth && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ROSE, fontWeight: 600 }}>Growth:</span> {e.growth}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ROSE }}>{v.title}</h3>
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
