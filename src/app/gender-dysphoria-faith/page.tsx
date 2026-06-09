"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Every Person Is Made in the Image of God", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. The imago Dei is stamped on every human person — including those who experience gender dysphoria. Severe suffering related to one's body and gender does not remove or diminish the image of God that person bears. Whatever theological conclusions one holds about gender identity, the dignity and worth of the person experiencing dysphoria is not negotiable. They are loved by God, made in his image, and worthy of pastoral care — not first of doctrinal correction." },
  { title: "The Body Is Fallen and Not Yet Fully Redeemed", verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sons, the redemption of our bodies. Paul names bodily suffering as part of the present age — the groan of bodies that are not yet fully redeemed. People with gender dysphoria often describe profound suffering in and with their bodies. That suffering is real, it is not self-inflicted, and it deserves compassionate pastoral accompaniment rather than dismissal. The redemption of the body is an eschatological promise, not a present achievement for any of us." },
  { title: "The Church Is Called to Pastoral Presence, Not Just Positional Statements", verse: "John 13:35", text: "By this everyone will know that you are my disciples, if you love one another. The measure of the church's faithfulness to people experiencing gender dysphoria is not the clarity of its positional statements but the quality of its pastoral presence. Many people with gender dysphoria have left the church not because of the church's theology but because they experienced contempt, rejection, and isolation from the community claiming to represent the God who came to seek and save the lost." },
  { title: "Suffering and Sanctification Occur Together in the Body", verse: "2 Corinthians 4:11", text: "For we who are alive are always being given over to death for Jesus's sake, so that his life may also be revealed in our mortal body. The Christian life is not a life in which the body is transcended or escaped — it is a life in which God works through bodies, including bodies that suffer. Whatever one holds about gender identity theology, people with gender dysphoria navigating the complexity of embodiment, identity, and faith are not in a lower category of Christian. They are in the full human condition of groaning and waiting." },
  { title: "Kindness Leads to Repentance, Not Contempt", verse: "Romans 2:4", text: "Or do you show contempt for the riches of his kindness, forbearance and patience, not realizing that God's kindness is intended to lead you to repentance? The pastoral strategy for walking with people in complex theological territory is kindness — God's own method. A church that approaches gender dysphoria with contempt, ridicule, or distance is operating by a method Scripture explicitly names as a departure from God's method." },
];

const voices = [
  { id: "v1", name: "Preston Sprinkle", role: "Author, Theologian", quote: "The question for the church is not just what we believe about gender — it is whether we can hold that belief with the kind of love and presence that would actually reach the person in pain.", bio: "Preston Sprinkle is the founder of the Center for Faith, Sexuality, and Gender and the author of Embodied: Transgender Identities, the Church, and What the Bible Has to Say. His work addresses gender dysphoria and transgender identity from a theologically conservative but pastorally serious perspective — one that attempts to take both biblical fidelity and human suffering with full seriousness." },
  { id: "v2", name: "Mark Yarhouse", role: "Professor, Regent University", quote: "Gender dysphoria is a condition that involves significant suffering. That suffering calls for pastoral care, not just theological positioning — and the two are not the same thing.", bio: "Mark Yarhouse is a professor at Regent University and one of the foremost Christian psychologists on gender dysphoria. His book Understanding Gender Dysphoria provides both clinical and theological frameworks for churches seeking to accompany people experiencing gender dysphoria with informed care — distinguishing between the experience of dysphoria, responses to that experience, and theological conclusions about gender." },
  { id: "v3", name: "Rachel Gilson", role: "Author, Ministry Leader", quote: "The person experiencing gender dysphoria is not primarily a theological problem to be solved. They are a person to be loved — and the love must come first, or the theology never reaches them.", bio: "Rachel Gilson is the author of Born Again This Way and works in ministry with people navigating sexuality and gender and faith. While her focus is primarily on same-sex attraction, her approach to holding theological conviction alongside genuine pastoral presence is directly applicable to ministry with people experiencing gender dysphoria." },
  { id: "v4", name: "Vaughan Roberts", role: "Author, Rector", quote: "The goal is not for the church to win arguments about gender. The goal is for broken, confused, suffering people to encounter the grace of Jesus — and for the church to be the community that makes that encounter possible.", bio: "Vaughan Roberts is a rector at St. Ebbe's, Oxford and the author of Transgender. His brief, theologically careful work provides a framework for engaging gender dysphoria with both biblical fidelity and pastoral compassion — avoiding both the errors of dismissiveness and of theological accommodation." },
];

const practices = [
  { icon: "👂", title: "Listen Before Positioning", text: "The first pastoral call is to listen — to understand the specific experience of the person in front of you before applying a theological framework. What is their suffering? What is their history? What have they already tried? What do they believe? Listening is not endorsement; it is the prerequisite for genuine pastoral contact." },
  { icon: "🤝", title: "Stay Present Regardless of Where Someone Lands", text: "People navigating gender dysphoria and faith may make decisions you disagree with. The question of whether to remain in relationship is not determined by their decisions. The church's presence to people in complex circumstances is not contingent on those people reaching the conclusions the church prefers." },
  { icon: "📖", title: "Read Before Responding", text: "Preston Sprinkle's Embodied and Mark Yarhouse's Understanding Gender Dysphoria are the most responsible starting points for Christians who want to engage gender dysphoria with both theological and clinical literacy. Reading before speaking protects both the person and the community from poorly-informed pastoral responses." },
  { icon: "🏥", title: "Connect with Trained Counselors", text: "Gender dysphoria involves significant psychological suffering that benefits from clinical support alongside pastoral care. Finding a counselor who is both clinically trained and theologically informed is available through organizations like the Christian Association for Psychological Studies (CAPS) and the Center for Faith, Sexuality, and Gender." },
  { icon: "⛪", title: "Advocate for Your Church to Train on This", text: "Most pastors have not been adequately trained to respond to gender dysphoria with either clinical accuracy or pastoral wisdom. Advocating for your church to engage training — from credible, theologically serious, clinically informed sources — is a form of care for the people who will eventually arrive at your church's doors." },
  { icon: "🙏", title: "Pray for Those Who Suffer in Their Bodies", text: "Romans 8:23 — the groan of bodies not yet redeemed — is a prayer posture available to all, including those with gender dysphoria. Praying honestly about suffering in the body, and for wisdom and grace in the midst of it, is the prayer God invites. You can pray this even in the midst of theological uncertainty." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sons, the redemption of our bodies." },
  { verse: "Romans 2:4", text: "Or do you show contempt for the riches of his kindness, forbearance and patience, not realizing that God's kindness is intended to lead you to repentance?" },
  { verse: "John 13:35", text: "By this everyone will know that you are my disciples, if you love one another." },
  { verse: "2 Corinthians 4:11", text: "For we who are alive are always being given over to death for Jesus's sake, so that his life may also be revealed in our mortal body." },
];

type GDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function GenderDysphoriaFaithPage() {
  const [tab, setTab] = useState("theology");
  const [gdJournal, setGdJournal] = useState<GDEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setGdJournal(JSON.parse(localStorage.getItem("vine_genderdysphoriaj_entries") ?? "[]")); } catch { setGdJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: GDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...gdJournal];
    setGdJournal(updated);
    localStorage.setItem("vine_genderdysphoriaj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = gdJournal.filter(e => e.id !== id);
    setGdJournal(updated);
    localStorage.setItem("vine_genderdysphoriaj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Gender Dysphoria and Faith</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Suffering in the body, loving the person — pastoral presence before positional statements.</p>
        <div style={{ background: "#1a0a3e", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: PURPLE }}>Crisis support:</strong> 988 Lifeline (press 3 for LGBTQ+) &nbsp;|&nbsp; Crisis Text: text START to 678-678
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What am I experiencing right now? What does this feel like to carry?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I believe about God's presence in my suffering right now?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One step toward support — pastoral, clinical, or relational:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {gdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "jJPVNIAFmvA", title: "Theology of the Body and Difference", channel: "Joni and Friends", description: "A theological framework for understanding embodiment, suffering in the body, and what it means to be made in the image of God in a body that causes distress." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on how shame shapes identity and self-perception — essential for understanding the experience of many people navigating gender dysphoria and faith." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, the Body, and Pastoral Care", channel: "Diane Langberg", description: "Diane Langberg on what faithful, trauma-informed pastoral care looks like for people experiencing significant bodily and identity distress." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how genuine Christian community holds complexity — including the people in it who are navigating the hardest forms of suffering and self-understanding." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
