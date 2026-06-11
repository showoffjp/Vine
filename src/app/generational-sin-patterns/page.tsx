"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Are Generational Curses Real? — What Scripture Actually Teaches", verse: "Exodus 20:5-6", text: "I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments. The second commandment is the most misunderstood verse in the generational curse discussion. Read in context — and in light of Ezekiel 18, which insists each person dies for their own sin — the text describes the natural consequences of sinful family systems passed down through modeling, wounding, and relational patterns. It is not a magical curse that operates apart from human causality. The verse ends with love to a thousand generations, suggesting the weight is on mercy, not curse." },
  { title: "Galatians 3:13 — Christ Has Redeemed Us From Every Curse", verse: "Galatians 3:13-14", text: "Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: 'Cursed is everyone who is hung on a pole.' He redeemed us in order that the blessing given to Abraham might come to the Gentiles through Christ Jesus, so that by faith we might receive the promise of the Spirit. The New Testament's most direct statement on curse and redemption: the curse Christ bore at the cross encompasses the full weight of sin's consequences — including anything rightly described as a generational curse. What Christ purchased at Golgotha was comprehensive. The person in Christ is not under condemnation (Rom 8:1), is a new creation (2 Cor 5:17), and has been transferred from the dominion of darkness (Col 1:13). This does not erase the need for healing and repentance — it establishes the ground on which they occur." },
  { title: "Ezekiel 18 — Each Person Bears Their Own Responsibility", verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The righteous person will be credited with their own righteousness, and the wicked person with their own wickedness. Ezekiel's proclamation corrects a fatalistic reading of inherited guilt. No child is damned because of a parent's sin apart from their own response. This truth must be held in tension with the Exodus 20 text: family patterns pass down real damage, real tendencies, real wounds — but the person encountering them always faces the choice of whether to repeat or relinquish them. The Bible teaches neither total freedom from family influence nor total determinism by it." },
  { title: "Family Systems and the Gospel — Psychological Reality Meets Theological Truth", verse: "Nehemiah 9:2", text: "Those of Israelite descent had separated themselves from all foreigners. They stood in their places and confessed their sins and the sins of their ancestors. The family systems field — Murray Bowen, Salvador Minuchin, and others — documents how patterns of relating, coping, hiding, and hurting repeat across generations with stunning consistency. Addiction, abandonment, violence, religious performance, emotional unavailability — these do not automatically transfer but do exert powerful gravitational pull. The biblical response is not denial but confessional acknowledgment. Nehemiah 9 models generational confession: naming what happened in the family line, bringing it before God, and choosing a different path. This is not magic; it is wisdom." },
  { title: "New Creation Identity — Who You Are in Christ Supersedes Family History", verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! The most powerful antidote to generational patterns is not a deliverance session or a prayer formula — it is a deep, inhabiting knowledge of who you are in Christ. You have been adopted into God's family (Eph 1:5), given a new nature (2 Pet 1:4), indwelt by the Spirit (1 Cor 6:19), and sealed for the day of redemption (Eph 4:30). Your ancestry has been rewritten at the deepest level. This does not mean old patterns disappear automatically — it means you now have resources, a standing, and a Spirit that your parents and grandparents may not have had. You fight from victory, not toward it." },
];

const voices = [
  { id: "na", name: "Neil T. Anderson", role: "Founder, Freedom in Christ Ministries; Author, Victory Over the Darkness", quote: "You are not the product of your past. You are a product of Christ's work on the cross. Your identity is not determined by what happened to you or what your family modeled — it is determined by what God says about you. The Steps to Freedom in Christ are not a magical formula; they are a structured way of bringing your whole history before the Lord and appropriating what is already yours in Christ.", bio: "Anderson's Steps to Freedom in Christ has been used in thousands of churches and counseling contexts worldwide. His approach combines biblical truth about identity with a structured process of renunciation, forgiveness, and appropriation. He is careful to distinguish between genuine spiritual bondage that requires spiritual solutions and psychological wounds that require therapeutic ones — insisting Christians need not choose between the two." },
  { id: "jmc", name: "John Mark Comer", role: "Author, Live No Lies; Practitioner Institute", quote: "The reason so many of us keep repeating the same patterns — the same fights with our spouses, the same emotional shutdowns, the same compulsions — is not that we lack willpower. It's that we've absorbed lies about reality from our formation, including our family of origin. And lies, once believed, shape our behavior automatically. The path of transformation is not trying harder; it is ruthless honesty about what we actually believe and submitting those beliefs to the truth.", bio: "Comer's Live No Lies draws on the desert fathers, modern spiritual formation literature, and psychology to argue that spiritual warfare is primarily a battle for the mind — and that the most effective enemy tactics involve lies absorbed in childhood and family patterns. His framing of formation, deformation, and transformation gives Christians a framework for understanding why change is hard and what genuine freedom requires." },
  { id: "da", name: "Dr. Dan Allender", role: "Founding President, The Seattle School; Author, The Healing Path", quote: "Our stories are not incidental to who we are — they are the very material God uses to form us. The wounds from our families — the absences, the violations, the failures of love — are not accidents God allowed despite his concern for us. They are the specific terrain on which he meets us, heals us, and draws us toward himself. Avoiding the story never brings freedom; entering it with Christ does.", bio: "Allender is one of the most important voices on the intersection of Christian faith, story, and healing. His work insists that Christians must tell the truth about their family of origin — not to assign blame but to understand the specific ways love was distorted and to allow God to heal those exact places. His approach integrates rigorous psychology, narrative theory, and deep biblical theology." },
];

const practices = [
  { icon: "🌳", title: "Genogram Work — Map Your Family System to See the Patterns Clearly", text: "A genogram is a visual map of your family tree annotated with relationship patterns, key events, mental health history, addiction, loss, and relational dynamics across three or more generations. Creating one — ideally with a therapist or pastor — often reveals patterns that were invisible when you were inside them. Addiction running through the paternal line. Emotional unavailability in every father figure. Anxiety in the women. Once seen, patterns lose some of their power and become something that can be addressed intentionally." },
  { icon: "🙏", title: "Generational Confession and Renunciation Prayer", text: "Following the pattern of Nehemiah 9, Daniel 9, and Ezra 9 — naming the sins of the family line before God, confessing them, and renouncing any claim they have. This is not the same as believing you are personally guilty for your ancestors' sins (Ezek 18 rules that out). It is acknowledging that these patterns are real, that they have affected you, and that you are bringing them explicitly under the lordship of Christ and the power of his cross." },
  { icon: "💬", title: "Trauma-Informed Counseling — Professional Help for Deep Wounds", text: "Generational patterns are often maintained through unprocessed trauma. Effective treatment is not just spiritual — it is often somatic (the body holds trauma), relational (healing happens in safe attachment), and cognitive (beliefs formed in childhood need examination). A trauma-informed Christian counselor who integrates sound theology with evidence-based therapy is often the most effective support. EMDR, IFS (Internal Family Systems), and attachment-focused therapy have all shown effectiveness with deep-rooted family wounds." },
  { icon: "📖", title: "Identity Anchoring — Daily Immersion in Your New Creation Status", text: "Generational patterns persist in part because they feel like identity — like who you are, not just what you've experienced. Countering this requires regular, intentional immersion in Scripture's declarations about your identity in Christ. Romans 8, Ephesians 1, 1 John 3 — reading these not as information but as medicine, speaking them aloud, praying them back to God, and letting them address the specific lies absorbed in childhood." },
  { icon: "🤝", title: "Community as Alternative Family — Receiving What Was Withheld", text: "For many people, the most powerful healing from family wounds comes not through prayer or therapy alone but through being genuinely known and loved in community. A small group, a spiritual director, close friends who know your history — these relationships provide corrective emotional experiences that re-form what was malformed. The church at its best is an alternative family in which those who were never securely attached can learn, late, what attachment feels like." },
];

const scriptures = [
  { verse: "Exodus 20:5-6", text: "I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments." },
  { verse: "Galatians 3:13", text: "Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: 'Cursed is everyone who is hung on a pole.'" },
  { verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Colossians 1:13", text: "For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves." },
];

const videos = [
  { id: "oW3YMb4AGZA", title: "Generational Curses: What the Bible Actually Says" },
  { id: "K7_-9SleqFI", title: "Breaking Family Patterns Through the Gospel" },
  { id: "UhvxqfPTl3w", title: "Identity in Christ vs. Family History" },
  { id: "wQ4jYQ1bCFU", title: "Neil Anderson: Freedom in Christ from Generational Sin" },
];

type GSEntry = { id: string; date: string; pattern: string; rootCause: string; breakthrough: string };

export default function GenerationalSinPatternsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gensins_entries") ?? "[]"); } catch { return []; }
  });
  const [jPattern, setJPattern] = useState("");
  const [jRoot, setJRoot] = useState("");
  const [jBreakthrough, setJBreakthrough] = useState("");

  useEffect(() => { localStorage.setItem("vine_gensins_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPattern.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), pattern: jPattern, rootCause: jRoot, breakthrough: jBreakthrough }, ...prev]);
    setJPattern(""); setJRoot(""); setJBreakthrough("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "voices", label: "Voices" },
    { id: "practices", label: "Practices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Warfare</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Generational Sin &amp; Patterns</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Breaking cycles of sin, wound, and dysfunction through the power of the gospel — understanding what Scripture says about inherited patterns and the freedom Christ provides.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? PURPLE + "22" : "transparent", color: tab === t.id ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "1rem", fontWeight: 700 }}>Reflection Journal</h3>
            {[
              { label: "What generational pattern are you concerned about in your own life?", val: jPattern, set: setJPattern },
              { label: "What do you believe is the root cause or wound behind this pattern?", val: jRoot, set: setJRoot },
              { label: "What breakthrough do you believe Christ has purchased for you here?", val: jBreakthrough, set: setJBreakthrough },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Pattern:</strong> {e.pattern}</p>
                    {e.rootCause && <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Root:</strong> {e.rootCause}</p>}
                    {e.breakthrough && <p style={{ fontSize: "0.88rem" }}><strong>Breakthrough:</strong> {e.breakthrough}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: PURPLE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
