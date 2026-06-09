"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Every Child Is Made in the Image of God — Without Condition", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. The imago Dei is not a functional category — it is not dependent on cognitive capacity, chromosomal arrangement, physical wholeness, or survival probability. Every child conceived bears the image of God. This theological declaration is the unshakeable foundation when a prenatal diagnosis changes the expected future. The child whose diagnosis you just received bears the full, undiminished image of God, and nothing in the diagnosis changes that." },
  { title: "The God Who Knits in the Womb Knows This Child Specifically", verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. The God who knits does not accidentally include an extra chromosome, a cardiac defect, a metabolic disorder. These are not errors that slipped past the knitter. The psalmist's theology does not resolve the anguish of a difficult diagnosis — but it does locate the child who received it within the specific, personal attention of the God who made them." },
  { title: "Receiving a Difficult Diagnosis Does Not Obligate You to a Single Response", verse: "John 11:35", text: "Jesus wept. When Jesus arrived at Lazarus's tomb — fully knowing what he was about to do — he wept. The weeping was not lack of faith. It was the honest human response to loss, grief, and the weight of suffering in the world. Parents who receive a serious prenatal diagnosis are not required to immediately perform peace, trust, or gratitude. Grief, fear, anger, and disorientation are the honest responses of people who love the child they are receiving. Jesus wept first, then acted." },
  { title: "The Questions This Diagnosis Raises Are Legitimate — Bring Them to God", verse: "Habakkuk 1:2", text: "How long, Lord, must I call for help, but you do not listen? Or cry out to you, 'Violence!' but you do not save? The prophet's honesty to God — his refusal to suppress the questions that pain produces — is the biblical model of faith in extremity. The parent who cries out to God: 'Why this? Why us? Why our child?' is not failing in faith. They are praying the kind of prayer God honors enough to answer, as he answered Habakkuk — not with explanation, but with presence and vision." },
  { title: "This Child's Life Will Have Meaning — Even if the Timeline Is Short", verse: "Psalm 139:16", text: "All the days ordained for me were written in your book before one of them came to be. The theology of the psalm includes children whose days are few. The unborn child who will not survive delivery, the infant who will live only weeks, the child who will face a lifetime of significant limitation — each has days that are ordained, written, purposeful. This is not callousness about the grief. It is the declaration that meaning is not proportional to length, and that every life that receives God's image is, in the truest sense, not a mistake." },
];

const voices = [
  { id: "jt", name: "Joni Eareckson Tada", role: "Author, Joni and Friends; Disability Theologian", quote: "When people receive a diagnosis that their child will have a disability or will not survive, the world around them often rushes to resolve the grief quickly — with platitudes, with decisions, with moving on. What most families need is something much simpler and harder: someone to be with them in it. The incarnation is the model: God did not fix the problem from a distance. He entered it.", bio: "Tada's five decades of living with quadriplegia give her unparalleled credibility on the theology of disability, the meaning of a limited life, and what God's purposes in suffering look like when they are not the purposes you would have chosen. Her work through Joni and Friends has served thousands of families navigating severe diagnoses." },
  { id: "ep", name: "Ellen Painter Dollar", role: "Author, No Easy Choice; Medical Ethics Writer", quote: "When you are in the middle of a difficult prenatal diagnosis, everyone around you has an opinion about what you should do and what your faith requires. What you actually need is space to be honest about the complexity — to grieve, to ask hard questions, to sit with uncertainty without being rushed to resolution. The God of the Psalms gives that space. The people around you often don't.", bio: "Dollar's work on medical ethics, disability, and prenatal diagnosis from a Christian perspective is among the most honest and practically useful available. Her personal experience with a heritable condition that she has passed to her daughter gives her a vantage point that is neither dismissive of the complexity nor ideologically rigid in its conclusions." },
  { id: "bk", name: "Kate Bowler", role: "Duke Divinity Professor, Author of Everything Happens for a Reason", quote: "Prosperity theology tells us that if we have enough faith, bad things won't happen. It is one of the cruelest theologies for the family who just received a terrible diagnosis. The Christianity that actually helps is the one that doesn't require you to explain away the hardness — the one that meets you in the darkness and says 'I know this is not how it was supposed to be.'", bio: "Bowler's work critiquing prosperity theology and her personal experience with terminal cancer give her a platform for addressing the specific theological harm done to families in crisis by well-meaning people. Her ability to articulate what the gospel actually offers in the face of irreducible suffering — presence, not explanation — is exactly what families navigating prenatal diagnoses need." },
];

const practices = [
  { icon: "🤝", title: "Contact a Specialist in Your Specific Diagnosis Immediately", text: "Every diagnosis has a community of families who have navigated it before you. Organizations like Joni and Friends (disability), SOFT (trisomy conditions), Heart Moms/Dads (congenital heart conditions), AFSP, and condition-specific foundations can connect you with families, provide accurate information (not just statistics), and offer practical guidance about what the road ahead actually looks like. Medical statistics are averages; the families who have lived this know the real story." },
  { icon: "🛑", title: "Take Time Before Making Any Major Decisions", text: "A prenatal diagnosis creates enormous pressure to make decisions quickly. Whenever possible, give yourself time before any irreversible decision. Seek a second opinion from a specialist in the specific condition. Contact families who have continued pregnancies with this diagnosis. Contact families who made other choices. The 48 hours after a diagnosis are among the worst times to make permanent decisions. Most genuine decisions are not as immediately time-constrained as they feel in the moment." },
  { icon: "💬", title: "Find a Counselor or Chaplain Who Specializes in Perinatal Loss and Grief", text: "Perinatal grief — grief surrounding pregnancy, diagnosis, or the death of an infant — is a distinct specialty. Many hospitals now have perinatal palliative care teams. Chaplains with this specialty have walked with many families and can provide both spiritual support and practical guidance. If your hospital does not have this service, Now I Lay Me Down to Sleep (nilmdts.org) and Sufficient Grace Ministries (sufficientgraceministries.org) serve families facing serious prenatal diagnoses." },
  { icon: "🙏", title: "Pray the Psalms of Lament — They Were Written for This", text: "Psalm 88 ends without resolution. Psalm 22 begins in forsakenness. Psalm 13 asks 'How long?' four times. The lament psalms exist because God knew his people would be in places where neat prayers are false prayers. Praying them — reading them aloud, inserting your own specific grief — is not lack of faith. It is the opposite: it is bringing the real thing to God rather than performing trust you do not feel. God receives honest lament. He has heard it before." },
  { icon: "📋", title: "Plan for the Child You Are Receiving, Not the Child You Expected", text: "Regardless of what decisions are made, there is planning to do: for the birth, for the medical team, for the postpartum period, for the extended family's response, for the specific support the child may need. The perinatal care team can help you understand what to expect and plan for it. Families who have walked this road uniformly report that the anticipatory grief before the birth is often worse than the actual experience — that the child who arrives is a specific, beloved person, not a diagnosis." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze." },
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
];

type PDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PrenatalDiagnosisPage() {
  const [tab, setTab] = useState("theology");
  const [pdJournal, setPdJournal] = useState<PDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prenataldiagnosisj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prenataldiagnosisj_entries", JSON.stringify(pdJournal)); } catch {}
  }, [pdJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setPdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Pregnancy &amp; Family</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Prenatal Diagnosis</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When pregnancy brings an unexpected diagnosis — theology for the darkness, resources for the road, and pastoral presence in the hardest waiting.
        </p>
        <div style={{ background: "#1a2a1a", border: "1px solid #2a5a2a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          <strong>Support:</strong> Joni and Friends joniand friends.org · SOFT trisomy-support.org · Now I Lay Me Down to Sleep nilmdts.org · 988 Crisis Line
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
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

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What am I feeling right now — honestly, without filtering?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What theological truth is most sustaining me right now?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One concrete step or support I can reach for today" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {pdJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : pdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Feeling:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Sustaining:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and God's Grace", channel: "Desiring God", description: "Joni speaks from over five decades of disability about what she has learned of God's grace — offering families receiving a prenatal diagnosis the perspective of someone who has lived what they are entering." },
              { videoId: "jJPVNIAFmvA", title: "The Theology of Disability and Weakness", channel: "Joni and Friends", description: "A theological framework for understanding disability as part of God's design — every person bearing the full imago Dei, the church's calling toward those with disabilities, and what God's purposes in limitation look like." },
              { videoId: "FV0Kb14TnPU", title: "Grieving a Difficult Diagnosis — Lament as Prayer", channel: "The Gospel Coalition", description: "How biblical lament provides a framework for processing a devastating diagnosis — giving grief its honest voice, bringing the anger and the questions to God, without abandoning faith." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical language for sustained suffering — how to pray honestly in the darkness of a difficult prenatal diagnosis, and why God invites this kind of prayer rather than performance." },
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
