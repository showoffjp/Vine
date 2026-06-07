"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Were Adopted Too", verse: "Romans 8:15-17", text: "The deepest theological foundation for Christian adoption is that every believer has been adopted by God. You did not earn your place in His family. You were made a co-heir with Christ not because of your origin or your performance, but because God chose to bring you in. When you adopt, you are enacting — in the most embodied way possible — the story of the gospel." },
  { title: "Identity Is Chosen, Not Just Inherited", verse: "Galatians 4:4-7", text: "In Galatians, Paul argues that those who receive the Spirit are heirs — not because of bloodline, but because of God's choosing. This is the deepest answer to the adoptee's question: 'Am I really theirs?' Identity in Christ is not determined by biology. It is declared by God and ratified by the Holy Spirit." },
  { title: "The Child's Origin Story Matters — and God Was in It", verse: "Psalm 139:13-16", text: "Every adopted child was known by God before their adoption. Their days were written before one of them came to be. Their birth family, their story, their loss — all of it is seen by the God who does not abandon. An adoptive family that honors the child's full story is trusting that God was present in the chapters that came before them." },
  { title: "Grief and Gratitude Are Not Opposites", verse: "Lamentations 3:22-23", text: "Many adoptees carry both deep gratitude for their adoptive family and genuine grief for the family or homeland they lost. These are not contradictory. A theologically honest adoption story makes room for both. Adoptive parents who fear their child's grief are often protecting themselves more than the child. God's mercies are new every morning — even in a story that involves real loss." },
  { title: "The Family of God Is Multiethnic", verse: "Revelation 7:9", text: "The final vision of Revelation is a multitude from every nation, tribe, people, and language standing before the throne. Families formed across racial and ethnic lines through adoption are not exceptions — they are, in some ways, previews of heaven. This does not minimize the complexity of transracial adoption, but it gives it profound eschatological weight." },
];

const voices = [
  { id: "ro", name: "Russell Moore", role: "Author, Adopted for Life", quote: "Adoption is not about finding children for families who want them. It is about finding families for children who need them. That reordering changes everything about how we approach it.", bio: "Moore's Adopted for Life is one of the most theologically rich books on adoption available, arguing that Christian adoption is grounded in the doctrine of God's adoption of believers and that it is a calling, not a mere preference." },
  { id: "jj", name: "Jedd Medefind", role: "President, Christian Alliance for Orphans", quote: "Adoptive families often discover that the child who needed a family has profoundly formed them in ways they did not expect. This is the nature of the gospel — that in giving, we receive more than we gave.", bio: "Medefind has written and spoken extensively on the theology and practice of caring for vulnerable children. His organization coordinates hundreds of churches and adoption ministries worldwide." },
  { id: "ab", name: "Amy Julia Becker", role: "Author, White Picket Fences", quote: "Transracial adoption is a beautiful thing that requires ongoing, honest conversation about race, identity, and history. It is not enough to love your child — you must advocate for the world in which your child has to live.", bio: "Becker writes on disability, race, and adoption from a Christian perspective. Her work challenges adoptive parents to go beyond the romance of adoption and engage seriously with the complex dimensions of identity, race, and belonging that adopted children navigate." },
];

const practices = [
  { icon: "📖", title: "Learn and Honor Your Child's Origin Story", text: "Whatever is known of your child's birth family, country of origin, and history — treat it with honor, not silence. Children who are encouraged to explore their story grow up with healthier identity than children whose origins are implicitly treated as something to move past. Read adoptee memoirs. Maintain cultural connections where possible." },
  { icon: "💬", title: "Talk About Adoption Early and Honestly", text: "Research consistently shows that children who are told their adoption story from early childhood — rather than discovering it later — have better outcomes. Use age-appropriate language. Answer questions honestly. Do not manufacture a perfect narrative; offer a true one." },
  { icon: "🧠", title: "Get Trauma-Informed Support", text: "Many adopted children have experienced prenatal stress, early loss, institutionalization, or abuse. Trauma-informed therapy (TBRI — Trust-Based Relational Intervention) is specifically designed for adoptive families. Access resources at empoweredtoconnect.org." },
  { icon: "👥", title: "Build Community With Other Adoptive Families", text: "The isolation of navigating the unique challenges of adoptive parenting — especially transracial adoption — is a major risk factor for family breakdown. Find community with other adoptive families through your church, CAFO (cafo.org), or local support groups." },
];

const scriptures = [
  { verse: "Romans 8:15-16", text: "The Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father. The Spirit himself testifies with our spirit that we are God's children." },
  { verse: "Ephesians 1:5", text: "He predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will." },
  { verse: "Psalm 68:5-6", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families." },
  { verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress." },
  { verse: "John 1:12-13", text: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God — children born not of natural descent, nor of human decision or a husband's will, but born of God." },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
];

const videos = [
  { id: "ad_1", title: "Adopted for Life — Russell Moore on the Theology of Adoption", channel: "The Gospel Coalition" },
  { id: "ad_2", title: "Transracial Adoption — Hard Conversations Every Family Needs to Have", channel: "Christian Alliance for Orphans" },
  { id: "ad_3", title: "What Adopted Children Want Their Parents to Know", channel: "Focus on the Family" },
  { id: "ad_4", title: "TBRI for Adoptive Families — Trauma-Informed Parenting", channel: "Empowered to Connect" },
];

type AdoptionEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AdoptionPage() {
  const [tab, setTab] = useState("theology");
  const [adoptionJournal, setAdoptionJournal] = useState<AdoptionEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_adoptionj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_adoptionj_entries", JSON.stringify(adoptionJournal)); } catch {}
  }, [adoptionJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAdoptionJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAdoptionJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Family and Calling</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Adoption</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>The theology, joy, and complexity of building family through adoption</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>The Gospel Story of Adoption</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices on Adoption</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Practices for Adoptive Families</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for Adoptive Families</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Family Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Where are you in your adoption journey right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Right now in our adoption story..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What has God shown you through adoption?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="God has been showing me..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one step you are taking for your child this season?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This season I am..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {adoptionJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your family story is worth telling.</p>}
            {adoptionJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>OUR JOURNEY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>GOD HAS SHOWN ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
  );
}
