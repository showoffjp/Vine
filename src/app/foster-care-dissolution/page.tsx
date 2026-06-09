"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "When a Placement Ends, God Does Not Abandon the Child", verse: "Psalm 68:5-6", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families. God's fatherhood is not contingent on human placement success. The child who cycles through the foster system is not invisible to God or beyond his pursuit. His fatherhood fills the gap that human systems cannot close." },
  { title: "Faithfulness Is Measured by Love Given, Not Permanence Achieved", verse: "Matthew 25:40", text: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me. The care given to a child in foster placement — however long — was received by Christ himself. A placement that ends in disruption is not a failed mission. It is love given to Christ in the form of a vulnerable child." },
  { title: "Grief After Disruption Is Not Failure", verse: "Lamentations 3:49-50", text: "My eyes will flow unceasingly, without relief, until the Lord looks down from heaven and sees. The grief of foster care disruption — for the foster family and for the child — is real. Lamenting what has been lost or disrupted is not unfaith. It is the honest prayer of those who hoped and watched hope complicated." },
  { title: "God Can Redeem What the System Has Broken", verse: "Romans 8:28", text: "We know that in all things God works for the good of those who love him. This is not a promise that disruption will not happen or that harm will be undone. It is a promise that God works in the aftermath of all things — including disrupted placements and wounded children — toward his purposes." },
  { title: "The Church Was Designed to Be Family for the Fatherless", verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress. The care of vulnerable children is not optional for the church — it is defining. When placements end, the church is called to remain in relationship with both the family and, where possible, the child." },
];

const voices = [
  { id: "v1", name: "Jason Johnson", role: "Author, Everything You Need to Know About Foster Care", quote: "Disruption is one of the most painful experiences in foster care. It does not mean you failed. It means you entered into a suffering you could not fully prepare for.", bio: "Johnson has been one of the most honest and theologically grounded voices in the Christian foster care movement, addressing both the calling and the cost with unflinching realism." },
  { id: "v2", name: "Jedd Medefind", role: "President, Christian Alliance for Orphans", quote: "Every child needs not just a placement but a family that will stay — in relationship if not always in legal custody. The church can be that even when the placement ends.", bio: "Medefind leads the largest Christian coalition for orphan care, and his work addresses the systemic realities of foster care alongside the theological commitments that sustain foster families through disruption and difficulty." },
  { id: "v3", name: "Karyn Purvis", role: "Author, The Connected Child", quote: "Children from hard places need more than care. They need co-regulators — people whose nervous systems help theirs settle. Disruption damages those connections. The grief is real.", bio: "Purvis's research on children from traumatic backgrounds provides the scientific grounding for understanding why disrupted attachments are so damaging and why foster families carry grief even when the placement was not successful by the system's metrics." },
  { id: "v4", name: "Diane Langberg", role: "Psychologist", quote: "The foster family that endures a disrupted placement has given something that cannot be quantified. The grief they carry is the mark of genuine love — love that cost something real.", bio: "Langberg addresses the trauma dimensions of foster care disruption — both for children who have experienced it repeatedly and for families who invested deeply and watched a placement end." },
];

const practices = [
  { icon: "🛑", title: "Allow the Full Grief Without Resolution", text: "Foster care disruption produces grief for the family that looks like grief for any loss — shock, sadness, guilt, anger. This grief deserves space without quick resolution. You do not have to arrive at 'it was for the best' before the grief is processed. It may have been for the best and still be devastating." },
  { icon: "🤝", title: "Find Community with Other Foster Families", text: "The grief of disrupted placements is best held by those who understand it. Other foster families — through your agency's support group, a local foster parent association, or Faith to Action networks — understand this grief without needing it explained. Do not grieve in isolation." },
  { icon: "📞", title: "Debrief with Your Agency Worker", text: "A debrief conversation with your case worker or foster care supervisor after a disrupted placement is both your right and your need. Understanding what happened — from the system's perspective — helps you process the experience and assess whether future placements are appropriate and when." },
  { icon: "🧠", title: "Get Trauma-Informed Therapy for the Whole Family", text: "Disrupted placements affect biological children in the family and the adults who gave care. A therapist who understands foster care dynamics can help every member of the family process what happened, including complicated feelings about the child who left." },
  { icon: "📖", title: "Read Psalms of Incomplete Outcomes", text: "Psalm 74 was written after the temple was destroyed — an outcome that was not supposed to happen. Psalm 88 ends in darkness. Lamentations mourns a city that was supposed to stand. These texts hold the experience of faithful investment that produced terrible outcomes. They are your texts too." },
  { icon: "🌱", title: "Discern Together Whether and When to Continue", text: "After a disrupted placement, the question of whether to continue fostering deserves careful, unhurried discernment as a family. This is not a failure of calling — it is wisdom. What did this experience reveal about your family's capacity? What support would make another placement sustainable?" },
];

const scriptures = [
  { verse: "Psalm 68:5-6", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families." },
  { verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world." },
  { verse: "Matthew 25:40", text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'" },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
];

type DissolutionEntry = { id: string; date: string; grief: string; love: string; discernment: string };

export default function FosterCareDissolutionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DissolutionEntry[]>([]);
  const [form, setForm] = useState({ grief: "", love: "", discernment: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_fostercarejdissolutionj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.grief.trim()) return;
    const e: DissolutionEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_fostercarejdissolutionj_entries", JSON.stringify(updated));
    setForm({ grief: "", love: "", discernment: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_fostercarejdissolutionj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Foster Care</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When a Foster Placement Ends</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Disrupted foster care placements — when a child is moved, when reunification happens unexpectedly, when an adoption falls through — are among the least-acknowledged griefs in Christian community. This page is for families who invested in a child and watched the placement end, and who need both grief and grace.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Christian Alliance for Orphans</strong> — cafo.org, support and connection</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if disruption has become a mental health crisis</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} placeholder="What is the grief — about the child, about what happened, about yourself?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.love} onChange={e => setForm(f => ({ ...f, love: e.target.value }))} placeholder="What love did you give that mattered, even if the placement ended?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.discernment} onChange={e => setForm(f => ({ ...f, discernment: e.target.value }))} placeholder="Where is your family in the discernment about what comes next?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Grief:</strong> {e.grief}</p>}
                {e.love && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Love given:</strong> {e.love}</p>}
                {e.discernment && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Discernment:</strong> {e.discernment}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "The biblical vocabulary for bringing the grief of disrupted placements honestly to God — for families who hoped and watched hope complicated." },
              { videoId: "ZGk1hl1nNrw", title: "Resilience and Compassion in Hard Times", channel: "Diane Langberg", description: "Langberg on the cost of genuinely caring for vulnerable people — what it does to caregivers and how the grief of that cost is honored rather than minimized." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Chan on grief that exceeds the frameworks we brought to it — relevant for foster families whose experience of loss was greater than they anticipated." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It's So Difficult", channel: "Tim Keller", description: "Keller on forgiveness in situations of real loss and complicated outcomes — for families navigating resentment toward systems, toward circumstances, and toward themselves." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
