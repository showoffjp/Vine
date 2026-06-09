"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Faith Cannot Be Inherited — Only Offered", verse: "Deuteronomy 6:7", text: "Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. The command is to saturate children's lives with faith. But the command is to the parents — and the response belongs to the children. Faithful transmission does not guarantee faithful reception. The gap between them is real and painful." },
  { title: "God Is the Pursuer — We Are Not Responsible for What Only He Can Do", verse: "John 6:44", text: "No one can come to me unless the Father who sent me draws them. Ultimately, every person's faith is a work of God, not of parents. Parents who have done everything faithfully and watch a child walk away are not responsible for what only God can do. This releases parents from a weight that was never theirs to carry." },
  { title: "The Prodigal's Father Ran Before the Son Arrived", verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The father did not travel to find his son, did not argue him home, did not stage an intervention. He stayed, he watched, and he ran when the son returned. This is the posture of those who wait." },
  { title: "Praying for Children Who Have Left Faith Is Intercession, Not Failure", verse: "Romans 8:26-27", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. When you do not know how to pray for the child who has left faith, the Spirit intercedes. You do not have to know what to say. You have to show up." },
  { title: "God Has a Long View That Parents Cannot See", verse: "Isaiah 55:11", text: "So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it. The seeds planted in a child's life are not cancelled by their departure from faith. God's word is at work in ways no parent can track. The departure may not be the end of the story." },
];

const voices = [
  { id: "v1", name: "Brennan Manning", role: "Author, The Ragamuffin Gospel", quote: "The grace that covers the prodigal covers those who love prodigals and wait for them in the dark.", bio: "Manning, himself a man of significant failure and return, writes about the parents and loved ones of those who leave faith with the same compassion he extends to those who have left — naming the grief and the grace of long waiting." },
  { id: "v2", name: "Kara Powell", role: "Fuller Youth Institute, Author, Growing Young", quote: "The faith gap between generations is often a formation gap — we handed children information about faith without helping them internalize it. The departure is painful, but it was also predictable.", bio: "Powell's research on faith retention identifies the patterns in faith transmission that tend to produce lasting faith versus those that produce departure. Her work helps parents understand the past without assigning blame, and the future without losing hope." },
  { id: "v3", name: "Mike McHargue (Science Mike)", role: "Author, Finding God in the Waves", quote: "I left faith, was drawn back, and left again before arriving somewhere I could actually stand. The journey of a child who has left is not necessarily over.", bio: "McHargue's public account of faith departure and return gives parents a window into the internal journey of someone who has walked away — including what helped and what did not help during the years of distance." },
  { id: "v4", name: "Paul David Tripp", role: "Author, Parenting", quote: "We are not the Christ of our children. We cannot give them faith. We can only point, and pray, and stay available when they turn to look.", bio: "Tripp's theology of parenting insists on the limits of parental power — children are not projects we complete but people God is pursuing. This framework prevents both guilt-driven despair and manipulative attempts to produce faith." },
];

const practices = [
  { icon: "🙏", title: "Commit to Regular Prayer Without Demanding Results", text: "Pray for your child or family member by name, specifically, consistently. Name what you want for them. Name what God has promised. Do not set a timeline for an answer. The discipline of praying without requiring visible results is itself a form of faith — and it changes the pray-er as much as anything." },
  { icon: "🤝", title: "Keep Relationship Open Without Attaching Faith as Condition", text: "The temptation is to make relationship contingent on returning to faith. This usually accelerates departure and closes the door that might otherwise stay open. Maintain genuine relationship — presence, interest, care — without attaching it to faith expectations. You are not rescinding the invitation; you are leaving the porch light on." },
  { icon: "🛑", title: "Stop Arguing About Theology", text: "Theological argument rarely draws anyone back to faith. It usually hardens positions and damages relationship. Give up winning the argument. Ask questions instead. Be genuinely curious about what they believe and why. You may hear things that help you understand the gap between the faith they received and one they can inhabit." },
  { icon: "📖", title: "Read Luke 15 Weekly", text: "The prodigal son parable is for the waiting parent as much as for the child who left. Read it weekly. Sit with the father's posture: he does not pursue, does not coerce, does not withdraw. He stays available. And when his son is still a long way off, he runs." },
  { icon: "👥", title: "Find Community with Others Who Are Waiting", text: "Parents with children outside faith are often ashamed and isolated. Finding other parents in the same situation — through a church group, a support network, or a Prodigals International community — names the common experience and breaks the isolation." },
  { icon: "🌱", title: "Attend to Your Own Faith During the Waiting", text: "Long waiting erodes the faith of those who wait. Your own spiritual formation during the years of waiting matters — not just for you but because you need to be present and alive in faith when the door opens. Find what sustains you and protect it." },
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Isaiah 55:11", text: "So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Jeremiah 31:17", text: "So there is hope for your descendants, declares the Lord." },
  { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord." },
];

type FaithGapEntry = { id: string; date: string; grief: string; prayer: string; relationship: string };

export default function IntergenerationalFaithGapPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FaithGapEntry[]>([]);
  const [form, setForm] = useState({ grief: "", prayer: "", relationship: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_faithgapj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.grief.trim()) return;
    const e: FaithGapEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_faithgapj_entries", JSON.stringify(updated));
    setForm({ grief: "", prayer: "", relationship: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_faithgapj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Family and Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Your Children Leave the Faith</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Watching children or grandchildren walk away from faith is one of the most sustained griefs a Christian parent can carry. This page is for those who are waiting, praying, maintaining relationship, and finding that faith still holds even as they cannot see the outcome.</p>

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
                <li><strong style={{ color: TEXT }}>Prodigals International</strong> — prodigalsinternational.org, support for parents</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if the grief has become a mental health crisis</li>
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
              <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} placeholder="What grief do you carry today about the faith gap in your family?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} placeholder="What is the prayer you are bringing to God for them today?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.relationship} onChange={e => setForm(f => ({ ...f, relationship: e.target.value }))} placeholder="How are you maintaining relationship without attaching conditions?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Grief:</strong> {e.grief}</p>}
                {e.prayer && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                {e.relationship && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Relationship:</strong> {e.relationship}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "Hq1t7kMjXAY", title: "Parable of the Prodigal Son", channel: "Tim Keller", description: "Keller's definitive exposition of the prodigal son parable — including the father's posture of waiting, running, and receiving — the model for parents who are holding the long vigil." },
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child", channel: "Brennan Manning", description: "Manning on the prayer of parents who love children outside faith — how to intercede without controlling and wait without despairing." },
              { videoId: "LQNbUqVwVlo", title: "Hope for Parents of Prodigals", channel: "The Gospel Coalition", description: "Pastoral encouragement and theological grounding for those in the long wait — what Scripture promises to parents who have prayed faithfully without visible result." },
              { videoId: "j2h-q3ZPKFI", title: "When Your Child Walks Away", channel: "Focus on the Family", description: "Focus on the Family addresses the grief, the questions, and the practical dimensions of maintaining loving relationship with children who have left the faith." },
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
