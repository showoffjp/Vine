"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Body Is Not the Enemy",
    verse: "1 Corinthians 6:19–20",
    text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies. This text is often weaponized as condemnation against sexual sin. It is actually an invitation: your body is a temple, worth honoring. The shame narrative says your body is filthy. Paul says your body is sacred enough to be a dwelling place for God.",
  },
  {
    title: "The Pattern Is Compulsive, Not Simply Sinful",
    verse: "Romans 7:15",
    text: "I do not understand what I do. For what I want to do I do not do, but what I hate I do. Paul's description of the divided will — wanting to do good, doing the opposite — is not merely moral failure. It describes the phenomenology of compulsion. Sexual addiction involves neurological conditioning, shame cycles, and attachment wounds that go beyond simple moral resolution. It requires treatment, not merely repentance.",
  },
  {
    title: "There Is No Condemnation",
    verse: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus. Shame is not a recovery tool — it is a relapse trigger. The shame cycle in sexual addiction typically runs: act out, feel shame, isolate, feel more shame, act out again. Recovery requires breaking this cycle with honesty, accountability, and the deep encounter with grace that interrupts the shame narrative.",
  },
  {
    title: "Healing Requires the Hidden Made Visible",
    verse: "James 5:16",
    text: "Therefore confess your sins to each other and pray for each other so that you may be healed. Sexual addiction thrives in secret. The neurological and spiritual antidote is identical: the hidden must become visible. Confession in community — with a sponsor, a therapist, an accountability group — is not merely moral ritual. It is the specific mechanism by which healing happens.",
  },
  {
    title: "Recovery Is a Long Road with Real Progress",
    verse: "Proverbs 24:16",
    text: "For though the righteous fall seven times, they rise again. Recovery is not linear. Relapse does not erase progress; it is part of the road. What defines recovery is not the absence of stumbling but the refusal to stay down — the continued return to the path, the support system, the therapist, the sponsor, the grace.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Jay Stringer",
    role: "Therapist, author, Unwanted",
    quote: "The question to ask about sexual compulsion is not: why are you so sinful? It is: what is this behavior in service of? What wound is being medicated, what loneliness is being soothed, what shame is being managed? When you understand the function of the behavior, you can address what is actually driving it.",
    bio: "Jay Stringer (Unwanted: How Sexual Brokenness Reveals Our Way to Healing) is a therapist who has done the most clinically rigorous Christian work on sexual compulsion. His argument that sexual brokenness is always in service of something — a wound, a longing, a defense — redirects the recovery conversation from shame to curiosity.",
  },
  {
    id: "v2",
    name: "Mark Laaser",
    role: "Author, founder of Faithful and True",
    quote: "Sexual addiction is not primarily about sex. It is about attachment wounds, emotional regulation, shame, and the neurological conditioning that links a behavior to temporary relief. Recovery from sexual addiction is simultaneously a spiritual, therapeutic, and relational project.",
    bio: "Mark Laaser (Healing the Wounds of Sexual Addiction, Faithful and True Ministries) has been one of the leading Christian voices on sexual addiction since the 1990s. His work integrates recovery principles, attachment theory, and Christian spiritual formation in a framework that has helped thousands of Christian men and women navigate recovery.",
  },
  {
    id: "v3",
    name: "Brené Brown",
    role: "Researcher, author",
    quote: "Shame cannot survive being spoken. The moment you say 'I struggle with this' to someone who responds with warmth rather than judgment, the shame begins to lose its grip. Secrecy is what makes it powerful. Connection is what dismantles it.",
    bio: "Brené Brown (The Gifts of Imperfection, Daring Greatly) on shame resilience — the research-backed principle that shame thrives in silence and is dismantled by empathic connection. This is directly applicable to sexual addiction recovery, where shame-based secrecy is one of the primary obstacles to healing.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "The neural pathways that sexual addiction builds are deep and real. They were built through repetition and reinforced by neurochemistry. They can be rewired — but only through sustained, alternative experience over time. Recovery is literally the construction of new neural pathways.",
    bio: "Curt Thompson (Anatomy of the Soul, The Soul of Shame) uses interpersonal neurobiology to explain both the mechanism of addiction and the mechanism of recovery. His work helps those in recovery understand that the compulsive pull is neurological, not merely moral — and that healing involves the brain, not just the will.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "See a CSAT or Addiction Specialist",
    text: "A Certified Sexual Addiction Therapist (CSAT) is trained specifically in sexual compulsion and recovery. The American Association of Sex Addiction Therapy (AASAT) directory lists certified practitioners. Do not try to recover from sexual addiction with willpower and Bible reading alone — the neurological and psychological complexity requires professional support.",
  },
  {
    icon: "👥",
    title: "Join a Recovery Group",
    text: "Celebrate Recovery, Pure Desire, Sexaholics Anonymous (SA), and Sex Addicts Anonymous (SAA) all offer group support. The specific mechanism of group recovery is accountability and connection — the antidote to the secrecy and shame that drives the cycle. Regular attendance, not just attendance in crisis, is what produces sustainable recovery.",
  },
  {
    icon: "📊",
    title: "Understand Your Acting-Out Cycle",
    text: "Sexual compulsion follows a predictable cycle: trigger (stress, shame, loneliness, boredom) → preoccupation → ritualization → acting out → shame → isolation → trigger. Learn your specific cycle. Where does it begin for you? Intervening early — at the trigger or preoccupation stage — is far more effective than trying to interrupt at ritualization.",
  },
  {
    icon: "🔒",
    title: "Install and Maintain Digital Accountability",
    text: "Covenant Eyes, Bark, or another accountability software sends reports of your online activity to a trusted accountability partner. This is not surveillance — it is a practical tool that makes acting out harder and creates natural accountability conversations. The value is not just catching violations but the relational connection it maintains.",
  },
  {
    icon: "💬",
    title: "Build Genuine Vulnerability in One Relationship",
    text: "Recovery requires at minimum one relationship of complete honesty — a sponsor, a therapist, or a deeply trusted friend who knows the full scope of the struggle. Partial disclosure maintains a hidden self. Complete honesty with one trusted person begins to rewire the brain's association between honesty and safety.",
  },
  {
    icon: "📖",
    title: "Read Romans 7–8 as Recovery Scripture",
    text: "Romans 7 describes the divided will — the compulsion to do what you hate. Romans 8 declares no condemnation. Read them together, slowly, regularly. Let the movement from divided will to freedom be the arc of your own story. The freedom promised in Romans 8 is not the absence of struggle. It is the end of condemnation.",
  },
];

const scriptures = [
  { verse: "Romans 7:15", text: "I do not understand what I do. For what I want to do I do not do, but what I hate I do." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "1 Corinthians 6:19–20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed." },
  { verse: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes." },
  { verse: "John 8:36", text: "So if the Son sets you free, you will be free indeed." },
];

type RecoveryEntry = { id: string; date: string; trigger: string; honest: string; grace: string };

export default function SexAddictionRecoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RecoveryEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [honest, setHonest] = useState("");
  const [grace, setGrace] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_sexaddictionrecovj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: RecoveryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      trigger,
      honest,
      grace,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexaddictionrecovj_entries", JSON.stringify(updated));
    setTrigger(""); setHonest(""); setGrace("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexaddictionrecovj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Recovery & Sexuality</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Sexual Addiction Recovery and Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians struggling with sexual compulsion — pornography, affairs, escort use, or other compulsive sexual behavior. Recovery is real, it is possible, and it requires more than willpower and shame. There is no condemnation for those in Christ Jesus.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Crisis resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Faithful and True: <span style={{ color: GREEN }}>faithfulandtrue.com</span> &nbsp;·&nbsp; AASAT therapist finder: <span style={{ color: GREEN }}>aasat.org</span> &nbsp;·&nbsp; Celebrate Recovery: <span style={{ color: GREEN }}>celebraterecovery.com</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What triggered the urge or the act-out today — be specific.</label>
                <textarea value={trigger} onChange={(e) => setTrigger(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Who will you tell? What will you say?</label>
                <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write Romans 8:1 in your own words for today.</label>
                <textarea value={grace} onChange={(e) => setGrace(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Trigger:</strong> {e.trigger}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Honest:</strong> {e.honest}</p>}
                {e.grace && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grace:</strong> {e.grace}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "psN1DORYYV0", title: "Unwanted: Sexual Brokenness and Healing", channel: "Jay Stringer", description: "Jay Stringer on what drives sexual compulsion — the attachment wounds, shame cycles, and unmet longings that sexual behavior attempts to address. Essential reframe for Christian recovery." },
              { videoId: "dy9nwe9zeU8", title: "The Neuroscience of Sexual Addiction", channel: "Faithful and True Ministries", description: "How pornography and sexual compulsion rewire the brain — the neurological mechanism that explains why willpower alone is insufficient for recovery." },
              { videoId: "4yRlBMcNNjY", title: "Shame, Grace, and Sexual Recovery", channel: "N.T. Wright", description: "Wright on Romans 8 and the end of condemnation — the theological foundation that makes recovery possible when shame has been weaponized against the struggling person." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness and Recovery", channel: "Tim Keller", description: "Keller on forgiveness — both receiving it from God and offering it to yourself — as an essential component of recovery from patterns of compulsive sin." },
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
    </main>
      <Footer />
    </>
  );
}
