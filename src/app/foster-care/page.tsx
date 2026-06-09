"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Foster Care Is a Reflection of the Gospel", verse: "James 1:27", text: "Pure religion is defined as caring for orphans and widows in their distress. Foster care is one of the most literal embodiments of this call available to Christians today. But it is also one of the hardest — because the children who need it have often been formed by trauma, and the call to love them is costly." },
  { title: "You Are a Picture of Adoption Into God's Family", verse: "Romans 8:15-16", text: "God did not wait for you to be easy to love before He adopted you. He brought you in while you were still spiritually orphaned, still bearing the wounds of a broken world. Foster parents who love traumatized children through their worst behavior are not just doing social work — they are enacting the gospel." },
  { title: "The Child's History Is Real, Not Erased", verse: "Psalm 10:14", text: "God says He is the helper of the fatherless, that He commits Himself to the one whose earthly father has abandoned. He does not pretend the trauma did not happen; He enters it. Foster parenting means acknowledging that the child's history is real, that it shapes them, and that healing is possible through consistent love — not denial of pain." },
  { title: "Attachment Is Theological, Not Just Psychological", verse: "Isaiah 49:15", text: "Can a mother forget the baby at her breast? God uses human attachment as His closest analogy for His own love. Children who have not experienced secure attachment have a deep wound in the place where theology is first learned. Foster parents who provide safe, consistent love are doing primary theological work in a child's soul." },
  { title: "You May Not See the Harvest", verse: "Galatians 6:9", text: "Do not grow weary in doing good, for at the proper time we will reap a harvest if we do not give up. Many foster parents love deeply and see children leave without knowing the outcome. This is a unique form of costly faithfulness — planting seeds in a child's life that someone else may water, and God will grow." },
];

const voices = [
  { id: "ja", name: "Jason Johnson", role: "Author, Reframing Foster Care", quote: "Foster care is not a program you do — it is a family you become. The question is not whether you are qualified, but whether you are willing to be changed by the children God brings into your home.", bio: "Johnson founded the Christian Alliance for Orphans and has become one of the most influential voices calling the church into foster care. His book Reframing Foster Care challenges common misconceptions and provides a theological and practical framework for foster families." },
  { id: "jk", name: "Jamie Finn", role: "Founder, Foster the Family", quote: "Everyone assumes foster parents are saints. We are not. We are ordinary people who say yes, who fall short constantly, who are being stretched and formed just like the children we serve.", bio: "Finn's organization Foster the Family provides practical support and community for Christian foster families. Her honest writing about the grief, joy, and spiritual formation of foster parenting has resonated widely with families who felt isolated in their experience." },
  { id: "dk", name: "Diane Langberg", role: "Psychologist, Author", quote: "Children who come from trauma do not need better behavior management — they need someone who will stay present with them in their chaos, over and over, until their nervous system learns that safety is real.", bio: "Langberg's trauma-informed approach has become foundational for Christian foster and adoptive families. Understanding trauma responses as survival adaptations (not defiance) changes how foster parents interpret challenging behavior and respond with compassion rather than punishment." },
];

const practices = [
  { icon: "📚", title: "Get Trauma-Informed Training", text: "Before or early in fostering, learn the basics of developmental trauma and attachment. Resources: Trust-Based Relational Intervention (TBRI) training by Karyn Purvis Institute (empoweredtoconnect.org), and the book The Connected Child by Karyn Purvis. Understanding why traumatized children behave as they do is essential." },
  { icon: "👥", title: "Build Your Support Community Before You Need It", text: "Foster care attrition is high partly because families try to do it alone. Connect with other foster families through your local church, foster care ministry, or fostering communities online. You need people who understand without explanation." },
  { icon: "💙", title: "Grieve Every Goodbye Without Shame", text: "Reunification is often the goal — and it is right. But grief when a child leaves is also right. You loved them; loss hurts. Suppressing this grief creates burnout. Bring it to God, a counselor, or your support community. Grief is not weakness; it is the cost of love well-given." },
  { icon: "🙏", title: "Pray Specifically Over Each Child's History", text: "Every child who comes into your home carries a specific story — specific losses, specific terrors, specific longings. Pray specifically. Learn their story as much as you can. Ask God to be present in the specific wounds they carry. Foster care ministry is inseparably prayer ministry." },
];

const scriptures = [
  { verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world." },
  { verse: "Psalm 68:5-6", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families." },
  { verse: "Romans 8:15", text: "The Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father." },
  { verse: "Matthew 18:5", text: "And whoever welcomes one such child in my name welcomes me." },
  { verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
];

const videos = [
  { id: "fc_1", title: "Why Every Church Should Be Involved in Foster Care", channel: "Jason Johnson" },
  { id: "fc_2", title: "The Theology of Caring for Orphans", channel: "The Gospel Coalition" },
  { id: "fc_3", title: "Trauma-Informed Parenting for Foster Families — TBRI Overview", channel: "Empowered to Connect" },
  { id: "fc_4", title: "When a Child Leaves — Grief, Foster Care, and God", channel: "Foster the Family" },
];

type FCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function FosterCarePage() {
  const [tab, setTab] = useState("theology");
  const [fcJournal, setFcJournal] = useState<FCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_fostercarej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_fostercarej_entries", JSON.stringify(fcJournal)); } catch {}
  }, [fcJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setFcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setFcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Calling and Caregiving</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Foster Care</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Theology, support, and community for those called to love vulnerable children</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>The Theology of Foster Care</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices for Foster Families</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Sustaining the Call</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for Foster Families</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Foster Family Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is hard right now in your fostering journey?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Right now I am struggling with..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What have you seen God do through this calling?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="I have seen God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you need most from God today?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="God, I need you to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {fcJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. What you are doing is hard — your words matter here.</p>}
            {fcJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>HARD RIGHT NOW</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>GOD AT WORK</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I NEED</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
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
