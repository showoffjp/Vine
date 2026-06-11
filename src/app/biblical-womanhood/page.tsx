"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Image-Bearers First — the Foundation That Precedes Gender", verse: "Gen 1:27", text: "Male and female he created them, in his image. The most fundamental truth about women is not gender-differentiated — it is shared with all humanity. Imago dei is not qualified by gender. Every theological discussion of womanhood must begin here or it will end somewhere wrong. To be made in the image of God means to bear dignity, rationality, moral agency, and relational capacity — none of which Scripture restricts by sex. The implications are vast: the authority, calling, and worth of women are not derived from their relationship to men but from their direct relationship to the God who made them. What imago dei means for the dignity, calling, and authority of women is the non-negotiable foundation on which everything else must be built." },
  { title: "The Women Who Follow Jesus — the Radical Inclusion Luke Records", verse: "Luke 8:1-3", text: "The women who traveled with Jesus — Mary of Magdala, Joanna, Susanna, and many others — represent a social revolution. In first-century Judaism, having women travel with a rabbi was without precedent. Jesus not only allowed it; he welcomed it. Then, at the resurrection, Mary Magdalene is named first in all four gospel accounts as the first witness to the empty tomb — entrusted by the risen Christ with announcing the resurrection to the disciples. In Roman law and Jewish custom, women could not testify in court. The risen Christ appeared first to women precisely because their testimony would be the least credible in the culture of the day. This is not accident — it is a direct counter-cultural statement about the dignity of women as bearers of truth and heralds of the gospel." },
  { title: "Proverbs 31 — What the Text Actually Says vs. What We Have Made It Say", verse: "Prov 31:25", text: "The Proverbs 31 woman has too often been used as a measuring rod that makes women feel inadequate rather than a poem that celebrates women as strong. Reading the text on its own terms: she is economically active, a businesswoman, a property owner, a wise counselor, strong and capable. The Hebrew phrase eshet chayil — woman of valor — is the same construction used of mighty warriors in the Old Testament. This is not a job description for a domestic assistant. It is a poem celebrating the breadth of a woman of strength: her business acumen, her generosity toward the poor, her wisdom, her community standing, and her fear of the Lord. The church has sometimes used this text to confine women; the text itself is an act of liberation." },
  { title: "The Complementarian-Egalitarian Debate — What Is Actually at Stake", verse: "Gal 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus. Two positions have defined modern evangelical debate: complementarianism holds that men and women have equal dignity but differentiated roles in marriage and the church; egalitarianism holds that gender does not determine role in either domain. Both positions affirm equal dignity. The debate is about role and authority, not worth or value. The key texts are 1 Cor 11:2-16, 1 Tim 2:11-15, and Gal 3:28 — and faithful Christian scholars on both sides have interpreted them carefully and differently for decades. Treating this question as simple — in either direction — does injustice to the text and to women." },
  { title: "Women in Ministry — What History and Scripture Actually Show", verse: "Rom 16:1-3", text: "Paul commends Phoebe as a deacon of the church at Cenchreae — the same word used for male deacons throughout the New Testament. He identifies Junia as outstanding among the apostles (Rom 16:7). Priscilla, named before her husband Aquila in several texts, co-teaches the gifted Apollos (Acts 18:26). Deborah serves as both judge and military leader over all Israel (Judges 4-5). The historical evidence that women exercised significant leadership in the early church is not marginal — it is in the text. How the restrictive passages in 1 Timothy and 1 Corinthians should be interpreted in light of this broader biblical witness is the central exegetical question. What is not in question is that God has consistently gifted women for teaching, leadership, and proclamation throughout Scripture and history." },
];

const voices = [
  { name: "Beth Moore", role: "Chasing Vines", quote: "We have been offered something so enormous in Christ — a life of fruitfulness, of calling, of meaning — and so many women have been handed a trimmed-down version of that calling, as if the vine of Christ produces different fruit for women than for men. The fullness of life in Christ is not a gendered offering. It is for every branch that abides.", bio: "Beth Moore is one of the most widely read and influential Bible teachers in the United States. Her work has shaped the devotional and theological lives of millions of women. Chasing Vines meditates on John 15 and the fullness of fruitful life available to every believer who remains connected to Christ." },
  { name: "Sarah Bessey", role: "Jesus Feminist", quote: "Being a feminist and following Jesus are not merely compatible for me — they are inseparable. The more deeply I have come to know Jesus, the more convinced I have become that he is the great liberator of women, and that the movement of the Spirit in the world is consistently toward the flourishing, the voice, and the full humanity of women.", bio: "Sarah Bessey is a Canadian author and speaker whose book Jesus Feminist became a rallying point for women seeking to hold together deep Christian faith and a commitment to women's full dignity and calling. Her work is characterized by theological seriousness, pastoral warmth, and a refusal to accept false choices." },
  { name: "Aimee Byrd", role: "Recovering from Biblical Manhood and Womanhood", quote: "The church has reduced womanhood to a set of roles, and those roles have been defined largely by what women should not do. Scripture offers something far richer: a vision of women as co-heirs of grace, as full participants in the covenant community, as theological voices whose witness belongs at the center of the church's life, not its margins.", bio: "Aimee Byrd is a Reformed author and speaker who has written critically about how gender complementarianism has been practiced in evangelical churches. Her book is a careful, internally-consistent argument that even within a complementarian framework, women have been under-valued, under-utilized, and theologically under-formed." },
];

const practices = [
  "Reading the biblical women's narratives with fresh eyes — Ruth, Deborah, Mary Magdalene, Lydia — as the full-orbed stories they are, not as supporting characters in a story about men",
  "Naming and pursuing your specific calling without waiting for permission from cultural expectations about what women should or should not do",
  "Honest engagement with the complementarian-egalitarian debate from primary sources, not caricatures — reading the actual texts and the actual arguments on both sides",
  "Building community with women who take both faith and calling seriously — women who refuse the false choice between devotion and vocation",
  "Praying specifically about the ways cultural expectations have limited your understanding of what God has called you to, and asking God to enlarge the vision",
];

const scriptures = [
  { verse: "Gen 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Gal 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Prov 31:25", text: "She is clothed with strength and dignity; she can laugh at the days to come." },
  { verse: "Rom 16:1-3", text: "I commend to you our sister Phoebe, a deacon of the church in Cenchreae... She has been the benefactor of many people, including me. Greet Priscilla and Aquila, my co-workers in Christ Jesus." },
  { verse: "Luke 8:1-3", text: "The Twelve were with him, and also some women who had been cured of evil spirits and diseases: Mary (called Magdalene)... Joanna... Susanna; and many others. These women were helping to support them out of their own means." },
  { verse: "Acts 18:26", text: "He began to speak boldly in the synagogue. When Priscilla and Aquila heard him, they invited him to their home and explained to him the way of God more adequately." },
];

const videos = [
  { id: "KaFiLByG-GI", title: "Women in the Bible — What the Text Actually Says" },
  { id: "3iFl3KvF9DQ", title: "Eshet Chayil — Woman of Valor" },
  { id: "oMtmLp-W5Yg", title: "Mary Magdalene and the First Witness" },
  { id: "GY2mNfHChOg", title: "Women in Ministry — History and Scripture" },
];

type BWEntry = { id: string; date: string; question: string; discovery: string; freedom: string };

export default function BiblicalWomanhoodPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BWEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_biblwomanhood_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jDiscovery, setJDiscovery] = useState("");
  const [jFreedom, setJFreedom] = useState("");

  useEffect(() => { localStorage.setItem("vine_biblwomanhood_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, discovery: jDiscovery, freedom: jFreedom }, ...prev]);
    setJQuestion(""); setJDiscovery(""); setJFreedom("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Identity &amp; Relationships</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Biblical Womanhood</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What Scripture says about women&apos;s identity, calling, and dignity — read on its own terms, without reduction.</p>

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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Calling</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to engage Scripture and your own story honestly.</p>
            {[
              { label: "Question — a question about your calling as a woman you are wrestling with", val: jQuestion, set: setJQuestion },
              { label: "Discovery — something from Scripture that has surprised or freed you", val: jDiscovery, set: setJDiscovery },
              { label: "Freedom — a freedom you are walking into or want to walk into", val: jFreedom, set: setJFreedom },
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
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Question:</span> {e.question}</p>
                      {e.discovery && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Discovery:</span> {e.discovery}</p>}
                      {e.freedom && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ROSE, fontWeight: 600 }}>Freedom:</span> {e.freedom}</p>}
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
