"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Violent Ending of a Life Does Not Undo Its Meaning", verse: "Psalm 116:15", text: "Precious in the sight of the Lord is the death of his faithful servants. The sudden death — the accident, the heart attack, the overdose, the crime — does not alter God's valuation of the person or of their life. A life cut short by violence or accident was as precious to God in its last moment as in all the moments before." },
  { title: "Job Survived the Sudden Loss of Everyone — And God Met Him", verse: "Job 1:18-20", text: "While he was still speaking, yet another messenger came and said: 'Your sons and daughters were feasting and drinking wine at the oldest brother's house, when suddenly a mighty wind swept in from the desert and struck the four corners of the house. It collapsed on them and they are dead.' In a single moment, Job lost everything. God did not prevent it and did not explain it. He appeared in the whirlwind." },
  { title: "Trauma Changes the Body — God Knows How We Are Made", verse: "Psalm 103:14", text: "For he knows how we are formed, he remembers that we are dust. Sudden death survivors often develop PTSD, traumatic grief, intrusive memories, hypervigilance. These are the body's responses to an event it could not prepare for. God knows how the body processes extremity. He made it." },
  { title: "Lament Does Not Require Understanding Before It Begins", verse: "Lamentations 2:11", text: "My eyes fail from weeping, I am in torment within; my heart is poured out on the ground because my people are destroyed, because children and infants faint in the streets of the city. The author of Lamentations did not wait to understand what had happened before beginning to grieve it. The grief came first. Understanding, if it comes, comes later." },
  { title: "The Resurrection Is the Answer to Violent, Untimely Death", verse: "1 Corinthians 15:26", text: "The last enemy to be destroyed is death. Sudden death feels like the ultimate violation of what should have been. The resurrection of Christ — and the promise of resurrection for those in him — is God's declaration that death does not get the final word, no matter how it arrives." },
];

const voices = [
  { id: "v1", name: "Jerry Sittser", role: "Author, A Grace Disguised", quote: "Catastrophic loss is not like ordinary loss. It overwhelms the system's capacity to process what has happened. The grief is its own kind of catastrophe.", bio: "Sittser lost his wife, daughter, and mother in a single car accident caused by a drunk driver. His theological and personal account of catastrophic sudden loss is one of the most honest Christian reflections on grief ever written." },
  { id: "v2", name: "Kay Warren", role: "Author, Sacred Privilege", quote: "When your child dies by suicide, the shock does not end. You keep waking up to it. The grief is both traumatic and sustained in a way that has no parallel.", bio: "Kay Warren lost her son Matthew to suicide and has written and spoken publicly about traumatic grief — the specific aftermath of sudden, violent death and what faith holds when the circumstances are circumstances you never imagined." },
  { id: "v3", name: "Bessel van der Kolk", role: "Author, The Body Keeps the Score", quote: "Trauma is not the story of something that happened in the past. It is what is happening now, in the body — the past that lives in the present tense.", bio: "Van der Kolk's research on trauma physiology gives sudden death survivors language for what is happening to their bodies in the aftermath — not weakness, not failure of faith, but the body's intelligent response to an event it could not metabolize." },
  { id: "v4", name: "Nicholas Wolterstorff", role: "Author, Lament for a Son", quote: "To love is to be vulnerable. And grief is love with nowhere to go.", bio: "Wolterstorff lost his son Eric in a climbing accident. His philosophical and theological reflection on grief illuminates the specific character of sudden loss — the unfinished conversations, the unlived future, the love that has no more object." },
];

const practices = [
  { icon: "🏥", title: "Get Trauma-Informed Care Immediately", text: "Sudden death creates traumatic grief — a distinct psychological condition that requires specific treatment beyond ordinary grief support. A therapist trained in EMDR, somatic approaches, or Complicated Grief Treatment (CGT) can address the traumatic dimensions that standard grief counseling does not reach. Early intervention reduces long-term suffering." },
  { icon: "🤝", title: "Let People Stay Present Without Requiring Them to Fix", text: "Well-meaning communities often try to explain, resolve, or quickly comfort sudden death survivors. Tell people specifically what you need: presence without commentary, practical help, permission to be silent. You do not have to perform recovery. You do not have to hold space for others' discomfort with your grief." },
  { icon: "🛑", title: "Do Not Make Major Decisions for Six to Twelve Months", text: "Traumatic grief impairs executive function. Major decisions made in the acute grief period — selling the house, resigning from work, cutting off relationships — are often regretted. Give yourself a moratorium on significant decisions while the acute phase passes." },
  { icon: "📖", title: "Read Job and Lamentations as Your Books", text: "Job lost everything suddenly and without warning. Lamentations names the direct encounter with catastrophe without resolution. Both books were written by people who know sudden catastrophic loss, and both authorize the full, extended, angry grief that follows it." },
  { icon: "🧠", title: "Name the Intrusive Images and Memories to a Therapist", text: "Sudden death survivors often experience intrusive memories, flashbacks, and hypervigilance — the body's attempt to process an event too large for normal processing. These are treatable. Telling a trauma therapist specifically what images and thoughts recur is the beginning of treatment." },
  { icon: "🌱", title: "Permit the Grief to Take as Long as It Takes", text: "Cultural timelines for grief — 'shouldn't you be feeling better by now?' — are not relevant to catastrophic sudden loss. The grief may take years to metabolize to the point where it does not dominate. Give yourself permission for this to be the work of years, not months." },
];

const scriptures = [
  { verse: "Psalm 116:15", text: "Precious in the sight of the Lord is the death of his faithful servants." },
  { verse: "1 Corinthians 15:55-57", text: "Where, O death, is your victory? Where, O death, is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Revelation 21:4-5", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away. He who was seated on the throne said, 'I am making everything new!'" },
];

type SuddenDeathEntry = { id: string; date: string; image: string; anchor: string; step: string };

export default function SuddenDeathSurvivorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SuddenDeathEntry[]>([]);
  const [form, setForm] = useState({ image: "", anchor: "", step: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_suddendeathj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.image.trim()) return;
    const e: SuddenDeathEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_suddendeathj_entries", JSON.stringify(updated));
    setForm({ image: "", anchor: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_suddendeathj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Traumatic Loss</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Surviving a Sudden Death</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Sudden death — through accident, heart attack, suicide, overdose, or violence — produces traumatic grief that is different from anticipated loss. The lack of preparation, the absence of goodbye, the persistence of intrusive memories — these are specific wounds that require specific care. This page is for those who are in the aftermath.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
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
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Crisis Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if traumatic grief has become a crisis</li>
                <li><strong style={{ color: TEXT }}>Crisis Text Line</strong> — text HOME to 741741</li>
                <li><strong style={{ color: TEXT }}>American Foundation for Suicide Prevention</strong> — afsp.org (loss survivors)</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} placeholder="What image, memory, or thought keeps returning?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.anchor} onChange={e => setForm(f => ({ ...f, anchor: e.target.value }))} placeholder="What anchor — a verse, a person, a practice — are you holding today?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="One small step toward care today" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.image && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Memory:</strong> {e.image}</p>}
                {e.anchor && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Anchor:</strong> {e.anchor}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how traumatic events live in the body — the physiology of traumatic grief and why the body needs specific care after sudden death." },
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Allender on healing from traumatic loss — how the body and soul process catastrophic events and what genuine healing requires." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the appropriate response to catastrophic loss — the biblical vocabulary that gives voice to grief beyond words." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Chan on the grief that overwhelms — what faith holds and what God meets when loss exceeds everything we prepared for." },
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
  );
}
