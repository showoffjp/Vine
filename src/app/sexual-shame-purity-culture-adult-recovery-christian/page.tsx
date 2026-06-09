"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "What Purity Culture Got Wrong",
    body: "The purity movement of the 1990s and 2000s — True Love Waits, purity rings, chastity pledges, modesty culture — emphasized sexual abstinence before marriage as the cornerstone of Christian identity. While rooted in genuine concern for sexual ethics, the movement produced documented harm: shame-based theology that equated sexual experience with worthlessness, damaged marriages where intimacy became impossible after years of prohibition, and spiritual devastation when the purity standard was broken. These are not fringe complaints — they represent widespread pastoral failures now acknowledged by many of the movement's own proponents.",
  },
  {
    title: "Shame Is Not the Gospel",
    body: "The theological error at purity culture's core was treating shame as a sanctifying tool. But the New Testament consistently distinguishes between guilt (awareness of wrongdoing that leads to repentance) and shame (a global sense of worthlessness as a person). Guilt is addressed by the cross — 'There is therefore now no condemnation for those who are in Christ Jesus' (Romans 8:1). Shame is addressed by adoption — God does not just forgive you; He names you as His beloved child. The gospel does not clean up a broken person; it announces that you were never defined by what you did.",
  },
  {
    title: "The Body Is Good",
    body: "Creation theology (Genesis 1-2) insists that the body is good, that sexual desire is part of the good creation, and that the Song of Solomon — included in Scripture — celebrates physical intimacy without apology. The gnostic impulse to treat the body as inherently problematic or the source of spiritual danger is a heresy, not an orthodox position. A healthy Christian theology of sexuality begins not with prohibition but with affirmation: your body is a gift, your desire is not your enemy, and God designed you as a sexual being.",
  },
  {
    title: "Sexual Ethics Is About Covenant, Not Contamination",
    body: "Biblical sexual ethics is covenantal — it situates sex within committed, mutual relationship — not contamination-based. The language of 'damaged goods,' 'used chewing gum,' or 'deflowered' that appeared in purity culture presentations is not biblical metaphor; it is folklore that distorted many young people's self-understanding. Scripture's concern for sexual ethics flows from the protection of persons, the nature of covenant love, and the embodied reality of intimacy — not from a concept of sexual purity as a finite resource that can be permanently lost.",
  },
  {
    title: "Healing Is Possible and God Is Not Disgusted",
    body: "Many adults who survived purity culture carry the implicit belief that God is fundamentally disgusted by their sexuality — whether they abstained or not. This is projection, not theology. The God revealed in Jesus sought out the woman at the well (five previous husbands), welcomed the sinful woman who anointed his feet, and restored Peter after denial. The pattern is consistent: God's posture toward wounded and broken people is pursuit, not disgust. Your healing is not a return to some pristine pre-sexual state; it is the ongoing reception of a love that was never contingent on your body's history.",
  },
];

const voices = [
  {
    name: "Sheila Wray Gregoire",
    role: "Author, The Great Sex Rescue and She Deserves Better",
    quote: "We surveyed thousands of women and found that the more purity culture messages women absorbed, the more likely they were to have sexual dysfunction in marriage. These teachings did not protect women's sexuality — they damaged it.",
  },
  {
    name: "Joshua Harris",
    role: "Author of I Kissed Dating Goodbye (later retracted the book and apologized)",
    quote: "I am sorry. The book I wrote promoted a legalistic approach to relationships that caused real harm. I want to be honest about this. I apologize to the people my book hurt.",
  },
  {
    name: "Rachael Denhollander",
    role: "Advocate, attorney, and author",
    quote: "Shame and secrecy are the tools of abuse. A theology that treats victims as complicit in their own violation, or shames people into silence about harm done to their bodies, is not the gospel of Jesus Christ.",
  },
  {
    name: "Dan Allender",
    role: "Psychologist and author, Healing the Wounded Heart",
    quote: "Healing from sexual shame is not a matter of achieving moral purity. It is a matter of recovering a true self, beloved by God, who can inhabit their body with dignity and joy. That recovery takes time, community, and often professional help.",
  },
];

const practices = [
  {
    title: "Name the Harm Specifically",
    body: "The first step in healing purity culture wounds is naming what actually happened: which messages, which experiences, which theological distortions caused which specific harm. Many people have a vague sense of being broken but have never articulated it clearly. A therapist or trusted pastor can help you inventory the actual beliefs you absorbed — about your worth, your body, God's view of you — and examine each one against Scripture and sound theology.",
  },
  {
    title: "Find a Trauma-Informed Therapist",
    body: "Purity culture harm often produces outcomes that clinicians recognize as religious trauma: anxiety, shame-based thinking, sexual dysfunction, distorted views of God, and difficulty with intimacy. A therapist trained in religious trauma and/or sexual shame (EMDR practitioners and somatic therapists can be particularly helpful) can assist with the neurological and psychological dimensions of healing that sermons alone cannot reach.",
  },
  {
    title: "Rebuild Your Theology of the Body",
    body: "Intentional theological re-education is often necessary. Read authors who offer a robust, positive Christian sexuality framework: 'The Great Sex Rescue' (Gregoire), 'Embodied' (Preston Sprinkle), 'Real Sex' (Lauren Winner). The goal is not to abandon Christian sexual ethics but to understand them through covenant and love rather than contamination and shame.",
  },
  {
    title: "Address Marital Intimacy Directly",
    body: "For married adults, purity culture wounds often show up most acutely in sexual intimacy — where the years of shame become a blockage the couple cannot explain. Christian sex therapists (AASECT-certified practitioners with faith backgrounds) and couples therapists experienced in religious background are equipped to help. This is not a spiritual problem you should be able to fix by trying harder; it may require specialized professional support.",
  },
  {
    title: "Distinguish Sexual Ethics from Shame",
    body: "Healing does not require abandoning all Christian sexual ethics; it requires separating ethics from shame. You can believe that sexual intimacy belongs within committed covenant relationship while also believing that your body is good, that God is not disgusted by you, and that violations of that ethic — whether yours or others' against you — do not define your worth. These things are not in tension.",
  },
  {
    title: "Find a Faith Community That Holds This Well",
    body: "Not all churches continue purity culture frameworks. Many congregations now offer thoughtful, shame-free teaching on sexuality that takes the body seriously as good, addresses trauma openly, and does not reduce people to their sexual history. If your current community reinforces the shame, finding a community that holds this differently is a legitimate part of healing.",
  },
];

const scriptures = [
  { ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { ref: "Song of Solomon 7:10", text: "I belong to my beloved, and his desire is for me." },
  { ref: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { ref: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { ref: "John 4:17-18,29", text: "The woman replied, 'I have no husband.' Jesus said to her, 'You are right when you say you have no husband. The fact is, you have had five husbands...' Then the woman left her water jar and said, 'Come, see a man who told me everything I ever did.'" },
  { ref: "Isaiah 54:4", text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth." },
];

const videos = [
  { videoId: "6G4Vxe0xLRo", title: "Healing from Purity Culture — The Great Sex Rescue" },
  { videoId: "PVOj3hLW8wA", title: "What Purity Culture Got Wrong: A Christian Critique" },
  { videoId: "hG9oQ_pHbqA", title: "Religious Trauma and Sexual Shame — Dan Allender" },
  { videoId: "T3GWFTiiFqE", title: "Recovering a Theology of the Body After Purity Culture" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_sexualshame_entries";
interface JournalEntry { id: string; date: string; harm: string; body: string; receive: string; }

export default function SexualShamePurityCulturePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ harm: "", body: "", receive: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      harm: form.harm,
      body: form.body,
      receive: form.receive,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ harm: "", body: "", receive: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Healing from Sexual Shame and Purity Culture
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For adults carrying wounds from purity culture theology — reclaiming a gospel that does not shame, a body that is good, and a God who pursues rather than rejects.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: PURPLE }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: PURPLE, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What specific message from purity culture caused you harm?</label>
                <textarea value={form.harm} onChange={(e) => setForm({ ...form, harm: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What is one true thing you want to believe about your body today?</label>
                <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What would it look like to receive God&apos;s love today rather than earn it?</label>
                <textarea value={form.receive} onChange={(e) => setForm({ ...form, receive: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.harm && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Harm named</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.harm}</p></>}
                {e.body && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>True thing about my body</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.body}</p></>}
                {e.receive && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Receiving love</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.receive}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Available 24/7 for any mental health crisis, including religious trauma.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>AASECT</strong> — aasect.org — Find a certified sex therapist with training appropriate for faith-background clients.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Religious Trauma Support</strong> — A licensed therapist with experience in religious trauma and shame-based theology can provide the professional support that this kind of healing often requires.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
