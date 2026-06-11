"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_gambling_addiction_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function GamblingAddictionPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Gambling Addiction &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            The Hole Gambling Fills Is Not a Money Hole
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Gambling disorder is one of the least discussed addictions in the church, despite being among the most financially destructive. The compulsion is neurobiological; the recovery is real; the shame is a barrier to seeking help. Name it. Get help.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; National Problem Gambling Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-522-4700</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Gamblers Anonymous: </span>
          <strong style={{ color: TEXT }}>gamblersanonymous.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Gambling Disorder Is a Brain Disease, Not a Character Defect", body: "Gambling disorder is classified as an addictive disorder (DSM-5) because it activates the same dopaminergic reward circuits as substance addiction. The near-miss effect — when losing almost feels like winning — is a neurological quirk that the gambling industry has deliberately exploited. The person who cannot stop gambling after losing their family's savings is not weak-willed; they have a brain condition that is impairing the very neural circuits that would otherwise produce the stop signal. This requires treatment, not shame." },
              { title: "The Spiritual Root of Gambling Disorder", body: "Underneath the neurological mechanism, gambling disorder often involves the pursuit of something the gambler cannot name: a sense of aliveness, a chance at transformation, an escape from chronic pain or emptiness, or a delusional sense of control over randomness. These are spiritual hungers — for meaning, transcendence, hope, and agency — being met by a destructive substitute. Recovery addresses both the behavioral addiction and the underlying need that the addiction was serving." },
              { title: "Financial Devastation Is a Form of Suffering", body: "Gambling disorder can produce catastrophic financial consequences: depleted retirement accounts, lost homes, family destruction, bankruptcy, and criminal charges related to attempts to fund the gambling. This suffering is real and it is serious. It does not mean the person is beyond redemption, and it does not mean recovery is impossible. It does mean that financial recovery will take years and will require more than sobriety — it will require professional financial help alongside recovery support." },
              { title: "Secrecy Is the Lifeblood of Gambling Disorder", body: "Unlike alcohol or drug addiction, gambling disorder is often completely hidden for years — even from intimate partners and family members. The lies required to conceal the gambling, the borrowed money, the losses, and the time become their own prison. The shame of disclosure — of allowing someone to see the full extent of what has happened — is among the highest barriers to seeking help. But the secret is what gives the addiction its power. Disclosure, with support, is the first step toward freedom." },
              { title: "Recovery Changes Money Relationships", body: "Recovery from gambling disorder requires fundamental changes to the person's relationship with money and financial systems: self-exclusion from casinos and gambling apps, surrendering financial control to a trusted person during early recovery, rigorous daily accounting, and sometimes legal or bankruptcy processes. These are not punishments; they are the structural supports that make sobriety possible while the recovery process addresses the underlying need." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Gamblers Anonymous", role: "Peer support organization founded 1957", quote: "We could not manage our own lives. We could not live and enjoy life as other people do. We had to have something different, and we thought we found it in gambling. We placed gambling on a pedestal and worshiped it like a god.", note: "The GA 20 Questions is the standard self-assessment for gambling disorder. GA's 12-step program addresses both the behavioral compulsion and the spiritual dimension of the addiction — the idol that was placed above everything else." },
              { name: "Dostoevsky", role: "Author of The Gambler (1866), self-described gambling addict", quote: "The main thing is the play itself. I swear that greed for money has nothing to do with it, although Heaven knows I am sorely in need of money.", note: "Dostoevsky wrote The Gambler as a semi-autobiographical account of gambling disorder in the 19th century. His identification of the play itself — the neurological activation — as the object of addiction, not the money, is clinically prescient." },
              { name: "Paul (Apostle)", role: "New Testament writer", quote: "I can do all things through him who strengthens me... I have learned, in whatever situation I am, to be content.", note: "Paul's contentment was learned, not natural — a practice developed over time. The recovery from gambling disorder involves learning a new relationship with uncertainty and with the present moment." },
              { name: "Ecclesiastes writer (Qohelet)", role: "Old Testament wisdom writer", quote: "All is vanity. What does man gain by all the toil at which he toils under the sun? A generation goes, and a generation comes, but the earth remains forever.", note: "Qohelet's meditation on the futility of pursuing gain — the vanity of wealth accumulated and lost — provides a theological frame for examining what the gambling was actually seeking and why it could never deliver it." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Gamblers Anonymous", body: "GA (gamblersanonymous.org) provides free peer-led support groups for people with gambling disorder — in person and online worldwide. The GA 20 Questions provides a straightforward self-assessment. The GA 12-step program specifically addresses gambling compulsion and the underlying spiritual dimensions. Gam-Anon (gam-anon.org) provides equivalent support for family members of people with gambling disorder." },
              { title: "The National Problem Gambling Helpline", body: "The National Council on Problem Gambling operates a 24/7 helpline at 1-800-522-4700 that provides crisis support, information, and referral to local treatment and financial recovery resources. Text support is available by texting 1-800-522-4700. The helpline is confidential and does not require you to have hit bottom or already decided to stop gambling." },
              { title: "Self-Exclusion Programs", body: "Every state in the U.S. and most jurisdictions internationally have self-exclusion programs that allow a person to ban themselves from casinos and online gambling platforms. This is a structural support, not a cure — it removes access while recovery begins. Most online gambling platforms also have self-exclusion options. Tools like Gamban software can block gambling websites on all your devices." },
              { title: "Financial Recovery Is a Long Process", body: "Recovery from gambling-related financial devastation typically takes years. This process may involve: consumer credit counseling (NFCC members at nfcc.org), bankruptcy consultation, working with creditors on payment plans, and legal assistance if criminal charges are involved. The National Foundation for Credit Counseling (nfcc.org) provides free or low-cost financial counseling. Gamblers Anonymous has financial pressure resources specifically designed for this process." },
              { title: "Cognitive Behavioral Therapy for Gambling Disorder", body: "CBT adapted for gambling disorder specifically targets the distorted thinking that sustains the compulsion: the gambler's fallacy, magical thinking about systems and luck, minimization of losses, and the cognitive distortions that enable continued play. A therapist with specific gambling disorder training is preferred. The National Problem Gambling Helpline can provide referrals. Many states also have gambling disorder treatment funds that cover therapy costs." },
              { title: "Accountability and Financial Transparency", body: "Early recovery from gambling disorder almost always requires surrendering financial control — giving a trusted person access to accounts, turning over credit cards, limiting cash access, and providing daily or weekly financial accounting. This is not punishment; it is the structural equivalent of not keeping alcohol in the house. The temporary loss of financial autonomy makes recovery possible. Build a plan with your GA sponsor, your therapist, or a financial counselor." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Timothy 6:6–8", text: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.", note: "Paul's anti-accumulation theology challenges the magical-thinking pursuit of wealth that underlies much gambling disorder. Contentment is the spiritual disposition recovery is working toward." },
              { ref: "Luke 15:11–13", text: "And he divided his property between them. Not many days later, the younger son gathered all he had and took a journey into a far country, and there he squandered his property in reckless living.", note: "The squandering is not the end of the story. The father's response to the return is one of the primary theological images of God's response to recovery — not interrogation or conditions, but celebration." },
              { ref: "Matthew 6:24", text: "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.", note: "Gambling disorder is a form of idol worship — the gambling table becomes the place of ultimate hope. Jesus names the exclusivity: you cannot serve both." },
              { ref: "Philippians 4:11–12", text: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need.", note: "Contentment — with what is, rather than pursuing what might be — is the alternative to gambling's pursuit of transformation through chance. Paul frames it as learned, not natural." },
              { ref: "Proverbs 13:11", text: "Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.", note: "Proverbs is unambiguous about the vanity of wealth-through-chance. The ancient wisdom tradition knew the pattern of gambling disorder before it had a DSM category." },
              { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus.", note: "The shame that gambling disorder produces — the secret, the lies, the devastation — does not have the last word. There is no condemnation. There is a way through." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What were you looking for when you gambled? What has it cost you? What would freedom look like?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="G-2e9mMf7E8" title="Breaking Free from Compulsive Behavior — Elevation Church" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Contentment as Freedom: Philippians 4 and Recovery" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="No Condemnation: Romans 8 and the Path Back" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Prodigal Son and Financial Recovery" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>The secret gives the addiction its power. Naming it is the first step toward freedom.</p>
          <p style={{ marginTop: 8 }}>Problem Gambling Helpline: 1-800-522-4700 &nbsp;|&nbsp; Gamblers Anonymous: gamblersanonymous.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
