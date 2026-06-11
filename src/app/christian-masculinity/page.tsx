"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Masculinity Is Grounded in Being Made in God's Image — Not in Cultural Roles", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. The foundation of Christian masculinity is not cultural convention, evolutionary psychology, or patriarchal tradition. It is the imago Dei — the conviction that maleness, like femaleness, reflects something particular about God. Before the fall, before cultural codes, before any social construction, there is creation: man and woman made in the image of God, distinct and complementary, both image-bearers. Christian masculinity begins here, not with cultural stereotypes." },
  { title: "The Crisis of Masculinity Is Spiritual, Not Just Sociological", verse: "1 Kings 18:21", text: "Elijah went before the people and said, 'How long will you waver between two opinions? If the Lord is God, follow him; but if Baal is Baal, follow him.' But the people said nothing. The passive, spiritually indifferent man is not a new problem — the crisis of masculine spiritual leadership runs through the entire Old Testament narrative. Men who follow cultural winds rather than the living God, who are passive in the face of evil, who fail to provide spiritual direction for their households: this failure predates the modern crisis. The answer is also ancient: the call to decisive covenant faithfulness." },
  { title: "Jesus Is the Definition of Masculinity — and He Does Not Match the Cultural Caricature", verse: "Matthew 11:29", text: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. Jesus overturned tables and wept over Jerusalem. He was unapologetically confrontational with religious hypocrites and tenderly gentle with the broken. He had disciples he loved with fierce devotion and enemies who feared him. He was utterly confident and profoundly humble simultaneously. Christian masculinity is not toughness that never shows weakness, or sensitivity that avoids strength — it is the Jesus-shaped integration of both." },
  { title: "The Provider-Protector Model Requires Grounding in Sacrifice, Not Dominance", verse: "Ephesians 5:25", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her. The husband-as-head in Ephesians 5 is not modeled on corporate authority or military command but on the cross. Christ's headship is defined by kenotic self-giving — he does not accumulate power but empties himself. The man who leads by demanding respect, requiring submission, or withholding vulnerability has confused cultural dominance with gospel leadership. The model is not top-down authority but self-emptying love." },
  { title: "Brotherhood and Male Friendship Are Not Optional — They Are Necessary", verse: "1 Samuel 18:1", text: "After David had finished talking with Saul, Jonathan became one in spirit with David, and he loved him as himself. The friendship of David and Jonathan is one of the most remarkable in all of Scripture — marked by covenant love, mutual vulnerability, fierce loyalty, and explicit affection. The contemporary male loneliness epidemic — men who have no real friendships, who cannot name anyone who truly knows them — is a spiritual crisis with a spiritual answer. Christian men need the kind of covenant brotherhood that David and Jonathan modeled." },
];

const voices = [
  { id: "je", name: "John Eldredge", role: "Author, Wild at Heart; Ransomed Heart Ministries", quote: "Every man is haunted by the question his father was supposed to answer: 'Do I have what it takes? Am I a man?' When that question goes unanswered — or is answered with silence, contempt, or abuse — the boy grows into a man who spends his life trying to prove something that was supposed to be given freely. The wound is real. But so is the healing.", bio: "Eldredge's Wild at Heart became the most widely read book on Christian masculinity of the past generation. Its core insight — that masculine soul-wounds need God-the-Father's answer more than behavioral programs — has resonated with millions of men who felt that Christian culture was asking them to suppress their deepest drives rather than redeem them. His Ransomed Heart ministry has extended and deepened this work." },
  { id: "mk", name: "Mark Driscoll", role: "Pastor; Author, Real Marriage", quote: "The world does not need more men who watch life from the sidelines. The world needs men who are courageous enough to love their wives sacrificially, lead their families spiritually, and serve their communities faithfully — not because they have earned the right but because they have been commissioned by King Jesus to do exactly that.", bio: "Driscoll's provocative preaching on masculinity drew enormous audiences of young men who found few other voices speaking directly to their experience. While his legacy is complicated, his core insistence that men need to be called to something rather than criticized into compliance has influenced Christian discourse on masculinity significantly." },
  { id: "rg", name: "Russell Moore", role: "Editor-in-Chief, Christianity Today; Theologian", quote: "Christian masculinity is not about being tough. It is about being trustworthy. The man who is genuinely safe to his wife, his children, his church, and his neighbors — who can be depended on, who does not need to be managed or protected from — is more masculine in the biblical sense than any display of toughness could produce.", bio: "Moore's more nuanced and politically careful treatment of masculinity provides a needed counterweight to versions that drift toward cultural performance. His emphasis on trustworthiness, covenant faithfulness, and the formation of character rather than the performance of stereotyped masculinity is grounded in a careful reading of biblical manhood." },
];

const practices = [
  { icon: "🙏", title: "Develop a Consistent Prayer Life — The Discipline That Proves Everything Else", text: "The single most reliable indicator of masculine spiritual health is a consistent private prayer life. Not public prayers, not prayer at meals, not emergency prayers in crisis — but the sustained daily practice of coming before God honestly, regularly, with the same discipline that other important things in a man's life receive. The man who prays daily has submitted his ego to something larger than his performance. That submission is the foundation of everything else." },
  { icon: "🤝", title: "Build Brotherhood — One or Two Men Who Actually Know You", text: "Men need other men who know them — not accountability partners who exchange sin reports, but friends who have seen the worst and chosen to stay. The practical work is harder than the theology: finding men willing to go deeper, initiating harder conversations, maintaining consistency across seasons of life, being the kind of friend first that you want to have. The investment is enormous. So is the return." },
  { icon: "📖", title: "Read the Lives of Men Who Went Before — Biography as Formation", text: "The Christian tradition is full of men who embodied something worth imitating: Augustine's restlessness and conversion, Patrick's courage in returning to his captors, Wilberforce's decades-long campaign, Bonhoeffer's costly faithfulness. Reading these lives is not nostalgia — it is formation. The man who has internalized models of Christian faithfulness across multiple centuries has resources against the cultural definitions of masculinity that the man shaped only by his own time lacks." },
  { icon: "🏠", title: "Lead Spiritually in Your Household — Beginning With Your Own Soul", text: "Spiritual leadership in a household begins with the leader's own spiritual formation. The man who expects to spiritually lead others while neglecting his own prayer, Scripture engagement, and formation is attempting to give what he does not have. The order is: your own soul first, then the leadership of others that flows from it. This means protecting time for personal spiritual formation even when — especially when — responsibility for others is heavy." },
  { icon: "✝️", title: "Let God the Father Answer the Question Your Father May Have Left Unanswered", text: "The question every man needs answered — am I loved, am I enough, do I have what it takes — is answered not by achievement, sexual conquest, financial success, or social status, but by the Father's voice. Jesus heard that voice at his baptism before he had done anything: 'This is my beloved Son, in whom I am well pleased.' That declaration — received, not earned — is the foundation that makes the rest possible." },
];

const scriptures = [
  { verse: "1 Corinthians 16:13", text: "Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Ephesians 5:25", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her." },
  { verse: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." },
  { verse: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
  { verse: "Matthew 11:29", text: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
];

type CMEntry = { id: string; date: string; area: string; formation: string; step: string };

export default function ChristianMasculinityPage() {
  const [tab, setTab] = useState("theology");
  const [cmJournal, setCmJournal] = useState<CMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrmasculinity_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jFormation, setJFormation] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_chrmasculinity_entries", JSON.stringify(cmJournal)); } catch {}
  }, [cmJournal]);

  function saveEntry() {
    if (!jArea.trim()) return;
    setCmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, formation: jFormation, step: jStep }, ...prev]);
    setJArea(""); setJFormation(""); setJStep("");
  }
  function deleteEntry(id: string) { setCmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <main id="main-content" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Faith &amp; Identity</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Masculinity</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            What it means to be a man formed by the gospel — the theology of masculinity rooted in the imago Dei, the example of Jesus, and the call to covenant faithfulness.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button type="button" key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? BLUE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: BLUE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: BLUE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${BLUE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: BLUE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Formation Journal</h3>
                <textarea placeholder="What area of my masculinity is the Spirit working on right now?" value={jArea} onChange={e => setJArea(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What model of manhood — from Scripture, a mentor, or a biography — is forming me?" value={jFormation} onChange={e => setJFormation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="One concrete step I want to take this week in my formation as a man" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button type="button" onClick={saveEntry} style={{ background: BLUE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {cmJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : cmJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.area && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Working on:</strong> {e.area}</p>}
                  {e.formation && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Formation:</strong> {e.formation}</p>}
                  {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                  <button type="button" onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "MoZFLdkxV7g", title: "Wild at Heart — John Eldredge on the Masculine Soul", channel: "Ransomed Heart Ministries", description: "Eldredge on the three core desires of the masculine heart — a battle to fight, an adventure to live, a beauty to rescue — and what happens when those desires are driven underground by shame or religion." },
                { videoId: "4H1sMnV6O5g", title: "The Jesus Model of Masculinity", channel: "The Gospel Coalition", description: "How Jesus integrates strength and tenderness, courage and compassion, confrontation and gentleness — and what that integration means for Christian men who have absorbed a caricatured version of either." },
                { videoId: "qH9qY1fAi2g", title: "The Crisis of Fatherlessness and How the Church Responds", channel: "Focus on the Family", description: "The statistical and spiritual reality of the fatherlessness crisis, how it shapes men who grow up without present fathers, and how the church's theology of God-as-Father speaks directly to the wound." },
                { videoId: "oNpTha80yyE", title: "Covenant Faithfulness: What Biblical Manhood Actually Requires", channel: "Ligonier Ministries", description: "R.C. Sproul on the covenant responsibilities of Christian men — not as burdens to perform but as reflections of God's own character and the shape of Christlike leadership in home and church." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: BLUE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
