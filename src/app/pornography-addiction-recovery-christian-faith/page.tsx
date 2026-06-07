"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_pornography_recovery_entries";
interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function PornographyRecovery() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Addiction & Recovery</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Pornography Use, Recovery, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>Beyond shame and willpower — understanding compulsive pornography use and finding a path toward freedom and integrity.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; SAMHSA Behavioral Health: <strong>1-800-662-4357</strong> &nbsp;|&nbsp; Faithful and True (sex addiction): faithfulandtrue.com &nbsp;|&nbsp; SASH: sash.net
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Shame Has Never Produced Freedom</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian responses to pornography have historically been dominated by shame-based approaches: the message that using pornography makes you uniquely defiled, spiritually dangerous, a danger to your marriage, a failed Christian, someone who cannot be trusted in ministry. These approaches are understandable in their intent but counterproductive in their effect. Shame drives behavior underground, prevents help-seeking, and maintains the cycle it claims to address. Romans 8:1 — there is therefore now no condemnation for those who are in Christ Jesus — is not a permission structure for continuing harm. It is the foundation from which change is actually possible. Shame-free accountability, not shame-based punishment, is what actually produces lasting change.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Understanding Compulsive Behavior — Not Just Moral Failure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Compulsive pornography use involves neurobiological reinforcement loops — dopamine, reward circuits, the same processes involved in other compulsive behaviors. For many people, it functions as a coping mechanism: a readily available, temporarily effective way to manage stress, loneliness, anxiety, boredom, shame, or pain. The behavior is often not about the content itself but about the relief it provides. Understanding this does not eliminate personal responsibility — but it does mean that willpower alone is rarely sufficient, and that addressing the underlying emotional needs and patterns is at least as important as cessation. People who recover usually do so by addressing both the behavior and what it was managing.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>What Pornography Does to People Who Are In It</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian ethics about pornography are often focused entirely on the user. But most of the people in pornography are there through paths that involve exploitation, trafficking, poverty, addiction, and abuse. The Exodus Cry and NCOSE organizations have documented the systemic harm in the industry. A Christian theology of human dignity and the image of God requires concern not just for the impact of pornography on the viewer&apos;s soul or marriage but for the human beings being used in its production. This is not a reason for shame — it is a reason for a broader ethical frame that sees the full humanity of everyone in the image.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Disclosure, Spouses, and the Path Forward in Marriage</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Pornography use that has been hidden from a spouse constitutes a form of deception that affects the marriage relationship. Disclosure — with appropriate professional support — is generally part of genuine recovery and genuine integrity. Disclosure without a plan for support and accountability can be re-traumatizing for the spouse. Working with a therapist trained in sexual integrity issues before and during disclosure, ensuring the spouse has their own support, and developing a concrete recovery plan are the responsible pathway. APSATS (apsats.org) certifies therapists specifically in partner betrayal trauma for spouses.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Recovery Is Possible — And Takes Longer Than People Expect</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Genuine recovery from compulsive pornography use is possible — thousands of people have walked this road. It is also slower and more complex than most Christian accountability programs suggest. Research from the sexual addiction recovery field suggests that sustained recovery typically takes two to five years of consistent work, including therapy, community support, and addressing underlying emotional patterns. White-knuckle abstinence without addressing the roots tends to either fail or produce a transferred compulsion. The goal is not just stopping a behavior but developing a full, flourishing inner life that makes the behavior unnecessary.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Mark Laaser", title: "Healing the Wounds of Sexual Addiction", quote: "Every person I have met who struggled with sexual compulsion was not primarily struggling with sex. They were struggling with pain, with loneliness, with shame, with wounds that had never been healed. The sexual behavior was the pain management system." },
              { name: "Jay Stringer", title: "Unwanted: How Sexual Brokenness Reveals Our Way to Healing", quote: "Pornography use is a story. If you want to understand the story, you have to ask: what is this behavior doing for you? What pain is it managing? What longing is it addressing? The answer to that question is where healing begins." },
              { name: "Nadia Bolz-Weber", title: "Shameless", quote: "There is no version of your sexual story that places you outside the love of God. Not because anything goes, but because the grace that covers our worst moments is not stingy or conditional." },
              { name: "Patrick Carnes", title: "Out of the Shadows: Understanding Sexual Addiction", quote: "Addiction is not a moral failure. It is a disorder of attachment. People become addicted to behaviors that manage pain in the absence of healthy connection. Recovery means building the connection that makes the behavior unnecessary." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Therapy with a Sexual Integrity Specialist", body: "Recovery from compulsive pornography use is most effective with a therapist trained specifically in sexual addiction and compulsive behavior. SASH (Society for the Advancement of Sexual Health, sash.net) and IITAP (iitap.com) certify sex addiction therapists. Faithful and True (faithfulandtrue.com) and Pure Desire Ministries (puredesire.org) integrate faith specifically into recovery." },
              { title: "Structured Recovery Programs", body: "Twelve-step programs specifically for sexual compulsivity include Sex Addicts Anonymous (saa.org), Sexaholics Anonymous (sa.org), and Sexual Compulsives Anonymous (sca-recovery.org). These all have in-person and online meetings. Pure Desire Ministries and Celebrate Recovery also offer church-based group programs with explicitly Christian frameworks." },
              { title: "Accountability That Is Actually Helpful", body: "Accountability in Christian contexts often focuses on reporting failure, which drives shame and secrecy rather than recovery. Effective accountability is supportive, non-punitive, and focused on the emotional patterns that precede acting out — what Jay Stringer calls the arousal template. Covenant Eyes (covenanteyes.com) provides internet accountability software; its value depends entirely on the quality of the accountability relationship it supports." },
              { title: "For Spouses — APSATS-Certified Support", body: "Partners of people with compulsive pornography use experience betrayal trauma that is a genuine form of trauma, not just hurt feelings. APSATS (Association of Partners of Sex Addicts Trauma Specialists, apsats.org) certifies therapists specifically trained in partner betrayal trauma. The spouse&apos;s recovery is separate from and as important as the user&apos;s recovery." },
              { title: "Addressing the Underlying Wounds", body: "Recovery research consistently shows that compulsive sexual behavior is often rooted in early attachment wounds, trauma, shame, and unmet emotional needs. Therapy that addresses these roots — IFS (Internal Family Systems), EMDR, trauma-focused CBT — produces more durable outcomes than approaches that focus only on behavioral management. The question to keep asking is: what was the behavior doing for me?" },
              { title: "Community and Honesty", body: "The recovery community is unanimous: you cannot sustain recovery in isolation and in secrecy. Finding at least one person who knows the full truth of your struggle — not just an accountability partner who monitors your browsing but someone who knows the story — is essential. This may be a therapist, a sponsor, a pastor who will not flinch. The recovery literature is full of people who got well because someone held their full story without shame." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
              { ref: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
              { ref: "1 Corinthians 6:18–20", text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?" },
              { ref: "Psalm 51:10", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me." },
              { ref: "Matthew 5:28", text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart." },
              { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!" },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What is the behavior doing for you? What pain or loneliness or fear is it managing? What would you need instead?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Freedom from Pornography — Beyond Willpower and Shame" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="What Is Pornography Use Really About — The Story Behind the Behavior" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Recovery Is Possible — A Faith-Based Perspective" />
            <VideoEmbed videoId="7_CGP-12AE0" title="No Condemnation — Romans 8 and the Path to Freedom" />
          </div>
        )}
      </div>
    </div>
  );
}
