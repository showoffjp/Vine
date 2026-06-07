"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "This Is a Battle, Not a Character Flaw",
    body: "Pornography activates the same neurological reward pathways as cocaine and alcohol. The dopamine surge, the tolerance that builds requiring more stimulation over time, the withdrawal anxiety, the inability to stop despite genuine desire to — these are addiction mechanisms, not simply moral weakness. Understanding this does not eliminate moral responsibility; it reframes the battle honestly. Christians who struggle with pornography are not uniquely depraved. They are fighting an addiction that is more easily triggered and harder to avoid than almost any substance addiction in history.",
  },
  {
    title: "Shame Fuels the Cycle, Grace Breaks It",
    body: "The shame cycle of pornography addiction is well-documented: use → intense shame → isolation → craving as relief from shame → use again. Shame does not produce lasting sobriety; it produces hiding, which enables continued use. The gospel's reversal of shame — 'Therefore there is now no condemnation for those who are in Christ Jesus' (Rom 8:1) — is not a minimization of sin. It is the only force strong enough to break the shame cycle, because it removes the very engine that keeps the cycle spinning.",
  },
  {
    title: "Accountability Without Shaming",
    body: "The difference between healthy accountability and spiritual abuse is shame versus truth. Healthy accountability partners speak truth about behavior while maintaining the dignity of the person. They ask specific questions, notice patterns, celebrate progress, and respond to relapse with renewed commitment rather than disgust. An accountability partner who uses your failure to feel superior, or who withholds relationship until you achieve a threshold of sobriety, is not helping — they are adding to the shame load that fuels the addiction.",
  },
  {
    title: "Sexuality Is Good — Pornography Hijacks Something Good",
    body: "The Christian understanding of sexuality is not that it is inherently bad and the goal is to suppress it. Sexuality is a good gift, designed by God to bond people, to generate life, to reflect the covenant love of Christ and the church. Pornography does not create sexual desire — it hijacks existing desire and redirects it toward images that exploit, objectify, and ultimately desensitize. Recovery is not the suppression of sexuality but its redemption: learning to direct desire toward what is true, beautiful, and good.",
  },
  {
    title: "Recovery Requires More Than Willpower",
    body: "The vast majority of people who attempt recovery from pornography through willpower alone — 'I'm just going to stop' — relapse. This is consistent with addiction science across all addictions. Sustainable recovery from pornography requires multiple forms of support: community, accountability, often professional counseling, understanding the underlying emotional triggers, and replacement practices for the moments when the urge is strongest. Planning for failure — knowing in advance how you will respond to a slip — is not faithlessness. It is wisdom.",
  },
];

const voices = [
  {
    name: "Dr. Mark Laaser",
    title: "Author, 'Healing the Wounds of Sexual Addiction' — Pastoral Recovery Specialist",
    quote: "Sexual addiction is not a moral failure requiring more repentance. It is a wound requiring healing. Most people who struggle with pornography are self-medicating something — loneliness, shame, anxiety, unprocessed trauma. The addiction is the symptom. The wound underneath is what requires attention.",
  },
  {
    name: "Noel Bouché",
    title: "Director, Covenant Eyes — Pornography Recovery Advocate",
    quote: "The church's silence on pornography has been catastrophically expensive. When Christians have nowhere safe to bring this struggle, they carry it alone, in secret, with accumulating shame. The shame grows heavier than the behavior. Naming it, in a safe community, is the most courageous and often most effective first step.",
  },
  {
    name: "Josh McDowell",
    title: "Author, 'The Porn Epidemic' — Research and Advocacy",
    quote: "The average age of first exposure to internet pornography is now 11. We are not talking about a fringe issue in the church. We are talking about something affecting teenagers in youth groups, spouses in marriages, and elders in leadership — the full spectrum. Silence is not protection. It is abandonment.",
  },
  {
    name: "Sam Black",
    title: "Author, 'The Healing Church' — Covenant Eyes",
    quote: "The turning point for most people in pornography recovery is not a moment of greater willpower — it is the experience of being fully known and fully accepted by another human being. That acceptance breaks the isolation that feeds the addiction.",
  },
];

const practices = [
  {
    title: "Naming the Triggers",
    body: "Most pornography use is not random — it follows patterns. Common triggers: late nights alone, stress, loneliness, anger, boredom, relationship conflict, travel. Identify your specific trigger pattern over several weeks. When you know what precedes use, you can plan for those moments: an alternative behavior, a call to an accountability partner, a change of environment. Pornography use thrives on automatic response. Disrupting the automaticity requires advance planning.",
  },
  {
    title: "Covenant Eyes and Technical Accountability",
    body: "Covenant Eyes (covenanteyes.com) is the leading Christian accountability and filtering software. It reports all browser activity to a selected accountability partner and can block known pornography sites. Accountability software is not a cure — a determined person can circumvent it — but it disrupts the ease of access that supports compulsive use and creates relational accountability. For those serious about recovery, it is one of the most practical tools available.",
  },
  {
    title: "Professional Counseling for Sexual Addiction",
    body: "A counselor certified by the American Association of Sexuality Educators, Counselors and Therapists (AASECT) or the Society for the Advancement of Sexual Health (SASH) has specific training in sexual addiction and compulsivity. Many offer faith-integrated approaches. Recovery from pornography addiction — especially when it has patterns of escalation, shame-based secrecy, or roots in early-life trauma — almost always benefits from professional therapeutic support beyond accountability and willpower.",
  },
  {
    title: "Group Recovery — Pure Desire, XXXchurch, SA",
    body: "Pure Desire Ministries (puredesire.org) runs faith-based recovery groups specifically for pornography and sexual addiction. XXXchurch (xxxchurch.com) offers resources and online community for all genders. Sexaholics Anonymous (sa.org) is a 12-step program with chapters in many cities. Group recovery is consistently more effective than individual effort — the shared experience of struggle and the communal accountability are therapeutic in ways that private effort cannot replicate.",
  },
  {
    title: "Understanding What the Pornography Was Medicating",
    body: "Many people who struggle with pornography are using it to manage an underlying emotional state: loneliness, anxiety, shame, depression, stress, or unprocessed trauma. Recovery work that addresses only the behavior — without exploring what the behavior was managing — has lower long-term success rates. A therapist can help identify the underlying wounds and develop healthier ways to regulate the emotional states that previously triggered pornography use.",
  },
  {
    title: "Rebuilding Intimacy With Your Spouse",
    body: "For those in relationships, pornography use causes specific harm to the spouse — often described as a form of betrayal trauma — and to the intimacy of the relationship. Recovery includes rebuilding trust, which requires sustained honesty over time, not a single conversation. Resources for couples navigating pornography recovery include 'Restored Promises' by Dr. Mark Laaser and 'Your Sexually Addicted Spouse' by Barbara Steffens. Some couples find joint counseling necessary before individual recovery work can be effective.",
  },
];

const scriptures = [
  {
    ref: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus.",
    note: "The shame cycle requires condemnation to spin. Paul's declaration is the direct counter. Not minimization — liberation. The one fighting pornography addiction is not condemned. They are covered.",
  },
  {
    ref: "1 Corinthians 6:18–20",
    text: "Flee from sexual immorality... Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.",
    note: "Paul's call is to flee — not to stand and fight with sheer willpower, but to change environments, break patterns, run. The body matters to God. It is the dwelling place of the Spirit.",
  },
  {
    ref: "Hebrews 4:15–16",
    text: "For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin. Let us then with confidence draw near to the throne of grace.",
    note: "Jesus was tempted. He understands the pull. The throne of grace — not the throne of judgment — is where those in the midst of this battle are invited to come. With confidence, not cowering.",
  },
  {
    ref: "Galatians 6:1–2",
    text: "Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted. Bear one another's burdens.",
    note: "The church's posture toward those caught in sin — including pornography addiction — is meant to be restoration in gentleness. Not shame, not exile, not disgust. Restoration. Burden-bearing.",
  },
  {
    ref: "Philippians 4:8",
    text: "Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable... think about these things.",
    note: "The battle for pornography addiction is partly a battle of imagination. Paul's prescription is not mere willpower but the deliberate cultivation of a mind fed with what is true, beautiful, and good.",
  },
  {
    ref: "Lamentations 3:22–23",
    text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    note: "Every morning is a new mercy — including the morning after a relapse. The steadfast love does not run out. Recovery is non-linear, and God's faithfulness to the one fighting it is not exhausted by failure.",
  },
];

const videos = [
  { id: "Sc6SSHuZvQE", title: "Reckless Love — Bethel Music" },
  { id: "KwX1f2gYKZ4", title: "Graves Into Gardens — Elevation Worship" },
  { id: "oE9qqW1-BkU", title: "Philippians Overview — BibleProject" },
  { id: "xrAdbH28gIg", title: "RATTLE! — Elevation Worship" },
];

const JOURNAL_KEY = "vine_porn_recovery_entries";

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
    "What is the pattern around my use? What typically happens in the hours before?",
    "What am I medicating with pornography? What emotional state does it temporarily relieve?",
    "Who knows about this struggle? What would happen if I told one trusted person today?",
    "What does freedom from this look like in my life? What would be different?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
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

export default function PornographyAddictionRecoveryChristian() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Sexual Integrity & Recovery
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Pornography Recovery<br />
              <span style={{ color: ACCENT }}>Breaking Free in Christ</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians fighting pornography addiction — this is a battle, not a character flaw. Shame fuels the cycle; grace breaks it. Real recovery requires community, accountability, and the kind of honesty the church often doesn't make space for. It starts here.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Crisis: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Pure Desire Ministries: puredesire.org | Covenant Eyes: covenanteyes.com | SA: sa.org</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Journal" && <JournalTab />}
          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
