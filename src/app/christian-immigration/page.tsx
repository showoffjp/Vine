"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type IMEntry = { id: string; date: string; context: string; response: string; action: string };

const theology = [
  { title: "The Ger — What the Old Testament Actually Says About the Immigrant", verse: "Lev 19:34", text: "The Hebrew word ger (stranger, sojourner, alien) appears over 90 times in the Old Testament. God commands Israel to love the ger (Lev 19:34: love the stranger as yourself), to include the ger in Sabbath rest (Deut 5:14), to include the ger in the tithe feast (Deut 16:11), and to leave gleanings in the field for the ger (Lev 19:10). The frequency and specificity of these commands is staggering. The ger is among the most protected categories in Old Testament law alongside the widow and the orphan." },
  { title: "Israel Was a Refugee Nation — the Memory Command", verse: "Deut 10:19", text: "Deut 10:19 commands Israel to love the stranger, for they were strangers in Egypt (see also Exod 22:21). Israel's identity as a refugee people is the explicit theological ground for their obligation to the sojourner. They know what it is to be foreign, vulnerable, and dependent on another people's mercy. The memory command says: you must never forget that you were once in their position. This memory-based ethic has profound implications for nations and churches with an immigrant heritage." },
  { title: "The Family of God Has No Borders — Galatians 3:28 and the New Community", verse: "Gal 3:28", text: "Gal 3:28 declares that there is neither Jew nor Greek in Christ. The church is the most radical multiethnic community in history — not merely tolerant of diversity but constituted by it. The vision of Rev 7:9 (every nation, tribe, people, and language) is the destination. The local church that reflects this diversity is a preview of heaven. Immigration creates the very conditions in which the church's call to multiethnic community can be realized in a neighborhood, not merely proclaimed as theology." },
  { title: "Render to Caesar — Biblical Ethics and Immigration Law", verse: "Rom 13:1-4", text: "The legitimate authority of the state to regulate immigration (Rom 13:1-4) stands in real tension with the biblical obligation to the stranger. Most serious Christian engagement acknowledges both. There is an important distinction between policy (what laws should govern immigration) and ethics (how Christians should treat individual immigrants). Christians can disagree on policy while agreeing on ethics. Treating a person inhumanely because they are undocumented is not a defensible Christian position regardless of one's political convictions." },
  { title: "The Pastoral Reality — Immigrant Christians in Your Congregation", verse: "Rom 15:7", text: "Many churches already have immigrant members. The question is what it means to welcome, include, and truly integrate immigrant believers into the body rather than treating them as recipients of charity. Immigrant communities often bring deeper faith, more robust community life, and multilingual worship. What your church will be missing until it genuinely reflects the nations is not merely diversity for its own sake — it is the fullness of the body of Christ that no single cultural expression can contain." },
];

const voices = [
  { name: "Matthew Soerens and Jenny Yang", role: "Welcoming the Stranger", quote: "Immigration is a spiritual issue before it is a political one. Christians who engage it only through a political lens will find themselves unable to think clearly, because the Bible speaks too clearly about the stranger for a purely partisan framework to hold.", bio: "Soerens and Yang write from years of direct work with immigrants and refugee resettlement. Their book Welcoming the Stranger is the most widely read evangelical treatment of immigration as a biblical and pastoral issue. They argue that the church must lead on hospitality regardless of where its members land politically on immigration law." },
  { name: "M. Daniel Carroll R.", role: "Christians at the Border", quote: "The Old Testament's extensive and repeated teaching on the sojourner is not a minor theme to be noted and moved past. It is a structural feature of Israel's covenant ethics — and it presses the Christian community to ask hard questions about what faithful obedience looks like when the stranger is at our border.", bio: "Carroll R. is an Old Testament scholar with deep personal and academic roots in Latin American Christianity. His treatment of the ger in Old Testament law and narrative provides the most rigorous biblical-theological foundation for Christian engagement with immigration among evangelical scholars." },
  { name: "Alexia Salvatierra and Peter Heltzel", role: "Faith-Rooted Organizing", quote: "The immigrant community's faith has been among the most vital forces for justice in American history. Again and again it is the churches of the immigrant poor that have modeled the kind of costly, communal, Spirit-empowered discipleship that the wider church talks about but rarely practices.", bio: "Salvatierra and Heltzel approach immigration from the tradition of faith-rooted community organizing. Their work connects the biblical justice tradition with the practical work of advocacy, coalition-building, and accompaniment of immigrant communities." },
];

const practices = [
  "Befriending an immigrant neighbor or family in your actual community (not a program — a relationship)",
  "Learning about the specific immigration journeys of members in your own congregation",
  "Advocating for humane treatment of immigrants and asylum-seekers through your church and local government",
  "Connecting your church with a local immigrant-serving ministry",
  "Praying specifically for immigrants by name",
];

const scriptures = [
  { verse: "Lev 19:34", text: "The stranger who sojourns with you shall be to you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt." },
  { verse: "Deut 10:19", text: "Love the stranger, for you were strangers in the land of Egypt." },
  { verse: "Matt 25:35", text: "I was a stranger and you welcomed me." },
  { verse: "Heb 13:2", text: "Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares." },
  { verse: "Exod 22:21", text: "You shall not wrong a sojourner or oppress him, for you were sojourners in the land of Egypt." },
  { verse: "Gal 3:28", text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus." },
];

const videos = [
  { id: "KWZLZJjFEqw", title: "Immigration and Christian Responsibility" },
  { id: "M7tVRkQMOSc", title: "What Does the Bible Say About Immigration?" },
  { id: "7Hu3PKPy3Bw", title: "The Stranger and the Church" },
  { id: "l3-kXqCM6jM", title: "Welcoming the Immigrant Neighbor" },
];

export default function ChristianImmigrationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_immigration_entries") ?? "[]"); } catch { return []; }
  });
  const [jContext, setJContext] = useState("");
  const [jResponse, setJResponse] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_immigration_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jContext.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), context: jContext, response: jResponse, action: jAction }, ...prev]);
    setJContext(""); setJResponse(""); setJAction("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Immigration and the Bible</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>A Christian theology of the stranger and sojourner — what the Old Testament, Jesus, and the New Testament actually say about the immigrant, and what it means for the church today.</p>

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
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginTop: 2 }}>{i + 1}.</span>
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Immigration and Your Faith</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to engage honestly and prayerfully with the immigration reality around you.</p>
            {[
              { label: "Context — the immigration reality around you or in your church", val: jContext, set: setJContext },
              { label: "Response — how you are responding or want to respond", val: jResponse, set: setJResponse },
              { label: "Action — a specific action you are taking", val: jAction, set: setJAction },
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
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Context:</span> {e.context}</p>
                      {e.response && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Response:</span> {e.response}</p>}
                      {e.action && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Action:</span> {e.action}</p>}
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
