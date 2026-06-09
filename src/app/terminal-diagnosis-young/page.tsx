"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Length of a Life Is Not Its Measure", verse: "Psalm 139:16", text: "All the days ordained for me were written in your book before one of them came to be. Every day was numbered by God before birth, not as constraint but as plan. A shorter life is not an incomplete life — it is a complete life of different shape. This is not a comfortable thought; it is a true one." },
  { title: "Jesus Died at 33 — Unfinished Work Is Not Failure", verse: "John 17:4", text: "I have brought you glory on earth by finishing the work you gave me to do. From a human perspective, Jesus left enormous amounts undone — disciples still confused, the world unchanged, no political or cultural transformation visible. And yet he declared the work finished. A life faithful to its actual calling is complete, whatever its length." },
  { title: "Death Is a Defeated Enemy, Not the Final Word", verse: "1 Corinthians 15:55-57", text: "Where, O death, is your victory? Where, O death, is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ. The resurrection is not a metaphor — it is the factual defeat of the power that makes death terrifying. This is what Paul calls in to hold against the fear." },
  { title: "Grief and Hope Are Not Contradictory", verse: "1 Thessalonians 4:13", text: "We do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. Paul does not say do not grieve. He says grieve, but with hope. Young death is genuinely grief-worthy. And resurrection is genuinely hope-worthy. Both things at once." },
  { title: "God Is Present in the Valley, Not Watching From Outside It", verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. The valley of the shadow of death is walked through with the shepherd. Not followed through, not observed through — walked through alongside. This is the geography of dying faith." },
];

const voices = [
  { id: "v1", name: "Kate Bowler", role: "Author, No Cure for Being Human", quote: "I was 35 with a stage IV cancer diagnosis. What I learned is that I never had more time than right now. That turned out to be the grace I needed.", bio: "Bowler received a terminal cancer diagnosis in her early 30s, while married with a young child and at the height of her academic career. Her writing addresses the specific experience of receiving a terminal diagnosis young — what faith looks like when the timeline has become visible." },
  { id: "v2", name: "BJ Miller", role: "Palliative Care Physician, Author", quote: "The question is not whether suffering is happening but whether we can wrest meaning from it while it is happening.", bio: "Miller, who lost three limbs in a college accident and became a leading palliative care physician, speaks and writes about how people find meaning and beauty in the face of death — including young adults who did not expect to face these questions so soon." },
  { id: "v3", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "Heaven is more real to me than earth. Not because earth is not real — but because I have been pressed close enough to the edge to see what is on the other side.", bio: "Joni's decades of facing her own mortality through progressive health complications, and her later battle with stage III breast cancer, have made her one of the most credible voices on Christian dying and what resurrection hope actually holds." },
  { id: "v4", name: "Nate Pyle", role: "Pastor, Author", quote: "There is no formula for dying well. But there is grace for dying honestly — bringing your fear, your grief, your love, and your questions to God without having to resolve them first.", bio: "Pyle writes about the spiritual dimensions of facing mortality young — what pastoral care looks like for those receiving terminal diagnoses, and what faith can honestly claim in the face of death." },
];

const practices = [
  { icon: "🏥", title: "Get a Palliative Care Team Involved Early", text: "Palliative care is not the same as hospice — it is a layer of supportive care that addresses quality of life alongside any curative treatment. Getting a palliative care team involved early, even while pursuing treatment, is one of the most practical forms of self-care available to those with terminal diagnoses." },
  { icon: "📝", title: "Write What You Want to Be Known", text: "A terminal diagnosis creates an uncommon clarity about what actually matters. Write letters to the people you love. Record your voice and your stories. Write down what you believe and why. These are gifts that outlast the body — and writing them is also a form of living fully in the time that remains." },
  { icon: "🤝", title: "Let People Be Present — Including in the Hard Conversations", text: "People who love someone facing death often protect them from honest conversation. You have the right to name what is happening, to express what you fear, and to receive honest presence rather than performed optimism. Tell the people around you what kind of presence you actually need." },
  { icon: "📖", title: "Pray Psalm 23 Daily — As a Walk, Not a Performance", text: "Psalm 23 is not a recitation for death — it is a prayer for the valley. Read it as your own walk: God's presence with you, the path through the darkness, the restoration on the other side. It was written by someone who knew what the shadow felt like." },
  { icon: "🕊️", title: "Name What You Believe About Resurrection", text: "Write down, specifically, what you believe about what happens when you die. Not in the abstract but personally: what do you think your experience will be? What does resurrection mean for your particular body and life? Articulating it clearly transforms resurrection from background theology into active hope." },
  { icon: "🌱", title: "Live Fully While You Are Living", text: "The temptation with a terminal diagnosis is to stop living before dying. Identify what you want to do, who you want to see, what you want to say, and do those things now — not because time is running out but because it has always been true that today is what you have." },
];

const scriptures = [
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
  { verse: "1 Corinthians 15:55-57", text: "Where, O death, is your victory? Where, O death, is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "John 11:25-26", text: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?'" },
];

type TerminalEntry = { id: string; date: string; fear: string; believe: string; today: string };

export default function TerminalDiagnosisYoungPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [form, setForm] = useState({ fear: "", believe: "", today: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_terminaldiagnosisj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.fear.trim()) return;
    const e: TerminalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_terminaldiagnosisj_entries", JSON.stringify(updated));
    setForm({ fear: "", believe: "", today: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_terminaldiagnosisj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Terminal Illness</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When the Diagnosis Is Terminal and You Are Young</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Receiving a terminal diagnosis in young adulthood — when you expected decades of life — is among the most shattering experiences a person can face. This page is for those navigating it with faith, or trying to, and for those who love them.</p>

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
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if terminal diagnosis has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>NHPCO CaringInfo</strong> — caringinfo.org, palliative care and hospice guidance</li>
                <li><strong style={{ color: TEXT }}>Cancer Care</strong> — cancercare.org for oncology-specific support</li>
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
              <textarea value={form.fear} onChange={e => setForm(f => ({ ...f, fear: e.target.value }))} placeholder="What fear are you bringing to God today?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.believe} onChange={e => setForm(f => ({ ...f, believe: e.target.value }))} placeholder="What do you actually believe about what comes next?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} placeholder="What do you want to do or say or be today?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.fear && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Fear:</strong> {e.fear}</p>}
                {e.believe && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Believe:</strong> {e.believe}</p>}
                {e.today && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Today:</strong> {e.today}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni on what hope and God's sufficiency actually look like when facing extended illness and mortality — testimony from inside sustained suffering." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "A theological and pastoral examination of terminal illness — why God does not always heal and what faith looks like when the answer is no." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on trusting God's purposes when they include death — what sovereignty means at the bedside and in the diagnosis room." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on how to bring terminal illness and the fear of death honestly to God — the biblical model for grief that still holds faith." },
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
