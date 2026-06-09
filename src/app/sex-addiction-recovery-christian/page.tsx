"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "There Is No Condemnation",
    verse: "Romans 8:1",
    text: "\"There is therefore now no condemnation for those who are in Christ Jesus.\" Sexual addiction produces shame in layers — shame about the behavior, shame about the secrecy, shame about having tried and failed again, shame about being a Christian who struggles with this. Romans 8:1 is not a minimization of sin — it is the removal of the verdict. You are not condemned. You are in process. These are very different things."
  },
  {
    title: "The Body Is a Temple, Not a Tool",
    verse: "1 Corinthians 6:18-20",
    text: "\"Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit?\" Paul's call to flee is not shame-based — it is dignity-based. You are a temple of the Holy Spirit. The behavior has been treating the temple as something lesser. Recovery is not just about stopping a behavior; it is about recovering the full dignity of the body you have been given."
  },
  {
    title: "Renewing of the Mind",
    verse: "Romans 12:2",
    text: "\"Do not be conformed to this world, but be transformed by the renewal of your mind.\" Sexual addiction is, in significant part, a brain condition — dopamine pathways that have been repeatedly reinforced through compulsive behavior. The renewal Paul describes is both spiritual and neurological. Rewiring the brain takes time, consistent practice, and professional support. It is also a genuinely spiritual process."
  },
  {
    title: "Integrity in the Hidden Places",
    verse: "Psalm 51:6",
    text: "\"Behold, you delight in truth in the inward being, and you teach me wisdom in the secret heart.\" God delights in integrity — in the inner life matching the outer life. The secrecy of sexual addiction is one of its most destructive features. Recovery begins when the secret enters the light: a therapist, a support group, a sponsor, a trusted pastor. What is brought into the light can be healed."
  },
  {
    title: "The Slow Work of Transformation",
    verse: "Philippians 1:6",
    text: "\"And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.\" Recovery from sexual addiction is not fast. Relapse is common and does not mean failure — it means the work is not complete. Paul's confidence is not in the person's ability to get it right but in God's commitment to finish what he started. You are a work in progress. That is exactly what you are supposed to be."
  }
];

const voices = [
  {
    id: "v1", name: "Jay Stringer", role: "Therapist, Author of 'Unwanted: How Sexual Brokenness Reveals Our Way to Healing'",
    quote: "Unwanted sexual behavior is not random. It has a logic — a story it is trying to tell about what happened to you. Understanding that story is the beginning of freedom.",
    bio: "Jay Stringer is a therapist and researcher who spent years studying the patterns of unwanted sexual behavior in Christian men. His book 'Unwanted' is the most important recent contribution to understanding and treating sexual addiction from a theologically informed, clinically rigorous perspective."
  },
  {
    id: "v2", name: "Mark Laaser", role: "Therapist, Pioneer in Christian Sexual Addiction Treatment",
    quote: "The shame that drives sexual addiction is the same shame that makes people afraid to seek help. Breaking that cycle requires someone to go first — and someone to be there when they do.",
    bio: "Dr. Mark Laaser, who himself recovered from sexual addiction, founded Faithful and True Ministries and wrote 'Healing the Wounds of Sexual Addiction.' He is one of the most respected Christian voices in sexual addiction treatment, with decades of experience working with men and couples in recovery."
  },
  {
    id: "v3", name: "Sheila Wray Gregoire", role: "Author, 'The Great Sex Rescue'",
    quote: "When the church has reduced sexuality to a list of rules, it has failed the very people who need a full theology of the body — including those struggling with addiction.",
    bio: "Sheila Wray Gregoire's research on sexuality and the church speaks to how inadequate Christian sex education leaves people vulnerable to addiction, shame spirals, and inadequate recovery support. Her work calls for a richer theology of sexuality that can actually sustain real people."
  },
  {
    id: "v4", name: "Dan Allender", role: "Therapist, Author",
    quote: "Sexual brokenness is almost always rooted in a story of harm. The person who is acting out is often trying to solve a problem they don't know they have.",
    bio: "Dan Allender's work on trauma, shame, and desire applies powerfully to sexual addiction. His understanding that compulsive sexual behavior is almost always an attempt to manage unprocessed pain — not simply a discipline failure — has reshaped how Christian counselors think about and treat sexual addiction."
  }
];

const practices = [
  {
    icon: "🧠",
    title: "Specialized Therapy — Not Just Accountability",
    text: "Sexual addiction requires a therapist specifically trained in sexual addiction (look for CSAT certification — Certified Sex Addiction Therapist). Accountability partners and church support are helpful but cannot substitute for clinical treatment. The underlying trauma, attachment wounds, and neurological reinforcement patterns require professional intervention."
  },
  {
    icon: "👥",
    title: "A Recovery Group",
    text: "SA (Sexaholics Anonymous), SAA (Sex Addicts Anonymous), and Faithful and True support groups provide peer accountability, story-sharing, and the experience of being known without being rejected. The group format is itself therapeutic: community is an antidote to the isolation that feeds addiction."
  },
  {
    icon: "🔒",
    title: "Digital Accountability Software",
    text: "Covenant Eyes (covenanteyes.com) and similar software create accountability for internet use. This is not a cure — and it is not a substitute for therapy — but it reduces access to pornography during the fragile early phases of recovery. Use it with an accountability partner who is not your spouse."
  },
  {
    icon: "📖",
    title: "Understanding the Story Behind the Behavior",
    text: "Jay Stringer's 'Unwanted' framework: identify the specific content of your unwanted behavior and ask what need it is meeting, what experience it is re-enacting, what emotion it is managing. This is not an excuse — it is a map to the underlying wound that drives the compulsion."
  },
  {
    icon: "💍",
    title: "Couples Therapy When Applicable",
    text: "If you are married and your spouse has discovered or knows about the addiction, couples therapy with a therapist trained in betrayal trauma and sexual addiction is essential. Your spouse needs her own therapist first. The damage to trust is profound and requires professional support to address."
  },
  {
    icon: "✝️",
    title: "Honest Confession",
    text: "Confession — to God, to a confessor, to a sponsor — is not just a spiritual formality in recovery; it is clinically effective. Secrets have power. The act of speaking the truth out loud to another human being who receives it without condemnation is one of the most powerful forces in recovery."
  }
];

const scriptures = [
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "1 Corinthians 6:18-20", text: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body." },
  { verse: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." },
  { verse: "Psalm 51:6", text: "Behold, you delight in truth in the inward being, and you teach me wisdom in the secret heart." },
  { verse: "Philippians 1:6", text: "And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." }
];

type SaEntry = { id: string; date: string; trigger: string; step: string; truth: string };

export default function SexAddictionRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SaEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [step, setStep] = useState("");
  const [truth, setTruth] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_sexaddrecoverychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: SaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger, step, truth };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexaddrecoverychristj_entries", JSON.stringify(updated));
    setTrigger(""); setStep(""); setTruth("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexaddrecoverychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔓</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Sex Addiction Recovery &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians struggling with compulsive sexual behavior — finding the way toward freedom, honesty, and restored dignity in a body that belongs to God.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; SA: sa.org &bull; SAA: saa-recovery.org &bull; Faithful and True: faithfulandtrue.com &bull; IITAP (CSAT): iitap.com &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Recovery Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What triggered me or what was I feeling before I was tempted?</label>
                  <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What step did I take toward recovery today?</label>
                  <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What truth am I standing on today?</label>
                  <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Trigger/Feeling:</strong> {e.trigger}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Step taken:</strong> {e.step}</p>}
                {e.truth && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Standing on:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Unwanted: Jay Stringer</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jay Stringer on the story behind unwanted sexual behavior and the path toward healing</p>
              <VideoEmbed videoId="ZR-J8DQGFOI" title="Unwanted: Jay Stringer" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Sexual Integrity and the Christian Man</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Mark Laaser on shame, secrecy, and the path to recovery for Christian men</p>
              <VideoEmbed videoId="2b0PxJcUCNM" title="Sexual Integrity and the Christian Man" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Trauma and Sexual Addiction</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Dan Allender on the pain beneath compulsive sexual behavior and what healing requires</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Trauma and Sexual Addiction" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>No Condemnation: The Gospel for the Broken</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The specific word of the gospel to those who are stuck in shame cycles and struggling to break free</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="No Condemnation: The Gospel for the Broken" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
