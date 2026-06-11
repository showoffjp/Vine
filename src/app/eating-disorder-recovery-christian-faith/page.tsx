"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "The Body Is Not an Enemy",
    body: "Eating disorders often involve a profound war against the body — using restriction, purging, or compulsive eating as weapons against flesh perceived as wrong, too much, not enough. The Christian vision of the body is counter-cultural here. God created the body and called it 'very good' (Gen 1:31). The Son of God took on a body. The resurrection of Christ was bodily — not a ghost, but flesh that ate fish and bread (Luke 24:42–43). The Spirit dwells in a body (1 Cor 6:19). The body is not the enemy. The body is the dwelling place of God.",
  },
  {
    title: "Food Is a Gift, Not a Moral Category",
    body: "The New Testament makes explicit what Genesis implied: food itself is good. Jesus went to dinner parties. He turned water into wine and multiplied bread and fish. Paul writes that 'everything created by God is good, and nothing is to be rejected if it is received with thanksgiving' (1 Tim 4:4). The legalistic relationship with food that eating disorders enforce — 'good' foods and 'bad' foods, earned meals, punished excess — is a false religious system. Food is a gift. Eating is an act of receiving God's provision.",
  },
  {
    title: "Thin Is Not Holy",
    body: "The prosperity gospel has a body-image equivalent that has infected much of Christian culture: the implication that discipline, control, and physical fitness are marks of spiritual maturity. Fasting, in particular, can be weaponized by those with eating disorders as a spiritual cover for restriction. The biblical purpose of fasting is to redirect attention toward God — it is self-forgetfulness, not self-punishment. A body that is chronically starved cannot pray, love, serve, or know God well. Medical recovery from an eating disorder is a prerequisite, not an opposition, to spiritual health.",
  },
  {
    title: "Eating Disorders Involve the Brain, Not Just the Will",
    body: "Eating disorders are recognized by the American Psychiatric Association as serious mental illnesses with significant biological components. Anorexia has one of the highest mortality rates of any psychiatric condition. The neurological effects of malnutrition (including changes in brain chemistry, cognitive distortion, and impaired judgment) make recovery extremely difficult without medical intervention. Telling someone with anorexia to 'just eat' is as helpful as telling someone with a broken leg to 'just walk.' Medical and psychological treatment is not optional — it is urgent.",
  },
  {
    title: "Recovery Is Holy Work",
    body: "Every meal chosen in the direction of recovery is an act of defiance against a disorder that wants to kill. Every time a person with anorexia eats when the disorder says not to, they are choosing life. Every time a person with bulimia resists purging, they are choosing the body God made. Recovery is not easy, and it is not fast. But it is holy work — the slow, costly, daily choice to inhabit the life and the body God has given, rather than destroy them.",
  },
];

const voices = [
  {
    name: "Jenni Schaefer",
    title: "Author, 'Life Without Ed: How One Woman Declared Independence from Her Eating Disorder'",
    quote: "I used to think Ed (my eating disorder) was protecting me. Keeping me safe, keeping me in control. What I eventually learned is that Ed was killing me. And the God I thought wanted me perfect and small actually wanted me alive. Really, fully, messily alive.",
  },
  {
    name: "Constance Rhodes",
    title: "Author, 'Life Inside the Thin Cage' — Faith and Eating Disorders",
    quote: "The Christian community often does more harm than good when it talks about bodies. Well-meaning comments about weight, discipline, and appearance compound the shame that eating disorders thrive on. Recovery requires communities that see the person, not the body they're in.",
  },
  {
    name: "Carolyn Costin",
    title: "Eating Disorder Therapist, Author of 'Eight Keys to Recovery from an Eating Disorder'",
    quote: "There is a healthy self inside every person who has an eating disorder — a part that knows the disorder is wrong, that wants to be free. Recovery is the process of helping that healthy self get louder than the eating disorder voice. It takes time, support, and tremendous courage.",
  },
  {
    name: "Lauren Winner",
    title: "Author, 'Still: Notes on a Mid-Faith Crisis' — Speaking on Body and Faith",
    quote: "The church taught me to be suspicious of my body. It took years to learn that my body is not the site of sin — it is the site of incarnation. God became embodied. He had a stomach that growled. He ate. He drank. The body is where God chose to show up. We should inhabit ours accordingly.",
  },
];

const practices = [
  {
    title: "Seeking Medical Evaluation First",
    body: "Eating disorders have serious medical consequences including cardiac arrhythmia, electrolyte imbalances, bone density loss, and organ failure. A physician evaluation — including labs, an EKG, and weight assessment — is the essential first step. Depending on severity, residential, intensive outpatient, or regular outpatient treatment may be needed. The National Eating Disorders Association (NEDA) Helpline (1-800-931-2237) can help identify appropriate level of care and local treatment options.",
  },
  {
    title: "Finding a Registered Dietitian Who Specializes in EDs",
    body: "Nutrition rehabilitation — learning to eat regular meals without restriction or compensation — is a core component of eating disorder recovery and should be guided by a registered dietitian (RD) who specializes in eating disorders. An RD who is unfamiliar with eating disorders may inadvertently reinforce disordered thinking by discussing calories or 'healthy eating' in ways that are counterproductive. Look for an RD who practices intuitive eating or HAES (Health at Every Size) approaches.",
  },
  {
    title: "Therapy — FBT, CBT-E, DBT",
    body: "The evidence-based therapies for eating disorders include Family-Based Treatment (FBT) for adolescents, Enhanced Cognitive Behavioral Therapy (CBT-E) for adults with bulimia or binge-eating disorder, and Dialectical Behavior Therapy (DBT) which addresses the emotional dysregulation that often underlies eating disorders. A therapist who specializes in eating disorders is essential — general therapists are often not trained in ED-specific treatment. The Academy for Eating Disorders (aedweb.org) maintains a treatment directory.",
  },
  {
    title: "Dismantling Food Rules One at a Time",
    body: "Most eating disorders are governed by rigid, often unconscious rules about food ('I can never eat X,' 'I must exercise after eating Y,' 'I can only eat if I've done Z'). Identifying these rules — writing them down — and then gradually challenging them in a safe context (often with a therapist or dietitian) is a core part of recovery. Each violated rule is evidence against the disorder's power. Each safe experience with a feared food reduces the fear.",
  },
  {
    title: "Community and Transparency",
    body: "Eating disorders are disorders of isolation and secrecy. Recovery is strengthened by transparency — telling at least one safe person, joining a recovery group (NEDA's online community, Eating Disorders Anonymous groups), or working with a recovery coach. The disorder wants you isolated. Recovery requires community. This is consistent with the Christian theology of the body of Christ: 'Bear one another's burdens' (Gal 6:2) includes the burden of healing.",
  },
  {
    title: "Practicing Gratitude for the Body",
    body: "A spiritual practice for the body in recovery: each day, thank God for one thing your body allowed you to do — to hug someone, to walk outside, to laugh, to sing. This is not toxic positivity or denial of struggle. It is the deliberate practice of receiving the body as a gift rather than an enemy. Over time, in recovery, this practice shifts the interior relationship with the body — slowly, imperfectly, but genuinely.",
  },
];

const scriptures = [
  {
    ref: "Genesis 1:31",
    text: "And God saw everything that he had made, and behold, it was very good.",
    note: "The body was created and called very good by the God who made it. This is not a statement about a perfect body by cultural standards — it is a statement about the goodness of embodied human life as God designed it.",
  },
  {
    ref: "1 Corinthians 6:19–20",
    text: "Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.",
    note: "The body is the Spirit's temple. Destroying the temple is not glorifying God — caring for it is. Recovery from an eating disorder is an act of glorifying God in the body.",
  },
  {
    ref: "Psalm 139:14",
    text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
    note: "This was written before the age of Instagram. It is a declaration about the handiwork of God in the body He created — and He calls it wonderful. Your body is wonderful. The disorder lies about this.",
  },
  {
    ref: "1 Timothy 4:4",
    text: "For everything created by God is good, and nothing is to be rejected if it is received with thanksgiving.",
    note: "Food is created by God. It is good. Receiving it with thanksgiving — rather than fear, guilt, or compensatory punishment — is the theological norm. The legalistic food system the eating disorder creates contradicts Scripture.",
  },
  {
    ref: "Matthew 6:25",
    text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on.",
    note: "Jesus knew that the body and food would be sites of anxiety. He addresses it directly. The antidote He offers is trust in a God who clothes the lilies and feeds the sparrows — and values us more.",
  },
  {
    ref: "Luke 24:42–43",
    text: "They gave him a piece of broiled fish, and he took it and ate before them.",
    note: "The risen Christ ate fish. The resurrection was not escape from the body — it was the redemption of the body. Jesus ate after the resurrection. Eating is not unspiritual. It is what the risen Lord did.",
  },
];

const videos = [
  { id: "sIaT8Jl2zpI", title: "You Say — Lauren Daigle" },
  { id: "nQWFzMvCfLE", title: "What A Beautiful Name — Hillsong Worship" },
  { id: "GfVd5x9W1Xc", title: "So Will I (100 Billion X) — Hillsong Worship" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
];

const JOURNAL_KEY = "vine_eating_disorder_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What does the eating disorder tell me about my body? What does Scripture actually say?",
    "What is one thing my body allowed me to do today that I can be genuinely grateful for?",
    "What is the eating disorder trying to manage? What emotion or need is it responding to?",
    "What would I say to a friend who treated her body the way I treat mine?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (<li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>))}
        </ul>
      </div>
      <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write freely — your words are private and stay only on your device..." rows={5} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EatingDisorderRecoveryChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Body & Recovery</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>Eating Disorder Recovery<br /><span style={{ color: ACCENT }}>The Body God Called Good</span></h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>For Christians battling anorexia, bulimia, binge-eating disorder, or disordered eating — the body is not the enemy, thin is not holy, and recovery is among the holiest work you will ever do. God wants you alive. Really, fully, messily alive.</p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>NEDA Helpline: <a href="tel:18009312237" style={{ color: ACCENT }}>1-800-931-2237</a><br /><span style={{ fontWeight: 400, color: MUTED }}>Crisis text: text NEDA to 741741 | nationaleatingdisorders.org | 988 Crisis: call or text 988</span></p>
            </div>
          </div>
        </div>
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (<button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>{t}</button>))}
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {activeTab === "Theology" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{theology.map((item, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p></div>))}</div>)}
          {activeTab === "Voices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{voices.map((v, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p><div><div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div><div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div></div></div>))}</div>)}
          {activeTab === "Practices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{practices.map((p, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p></div>))}</div>)}
          {activeTab === "Scripture" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{scriptures.map((s, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}><div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div><p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p></div>))}</div>)}
          {activeTab === "Journal" && <JournalTab />}
          {activeTab === "Videos" && (<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>{videos.map((v) => (<div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}><VideoEmbed videoId={v.id} title={v.title} /><div style={{ padding: "1rem 1.2rem" }}><p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p></div></div>))}</div>)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
