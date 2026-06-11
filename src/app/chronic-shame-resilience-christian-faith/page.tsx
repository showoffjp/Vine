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
const JOURNAL_KEY = "vine_chronic_shame_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function ChronicShamePage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Chronic Shame & Shame Resilience</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Are Not the Worst Thing About Yourself
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Shame says you are fundamentally defective at the core. The gospel says that is a lie. Naming shame, understanding it, and building resilience against it is not self-indulgence — it is theological work.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide & Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-950-6264</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Brené Brown resources: </span>
          <strong style={{ color: TEXT }}>brenebrown.com</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Shame and Guilt Are Not the Same Thing", body: "The Bible distinguishes between conviction (I did something wrong — guilt) and condemnation (I am something wrong — shame). Guilt is directional — it points toward repair, restitution, and forgiveness. Shame is totalizing — it says the self is the problem. Paul's distinction between godly sorrow (2 Cor. 7:10) and the sorrow that destroys is exactly this difference. The gospel addresses guilt; it names shame as a lie." },
              { title: "Chronic Shame Is Often Inflicted, Not Chosen", body: "Many people carry shame that was put on them by others — abusive parents, cruel communities, religious institutions that weaponized condemnation, cultures that assigned worth by performance or body or income. Shame that was externally imposed is not yours to carry. It belongs to those who placed it. Naming the source is not blame-shifting; it is forensic accuracy about where the wound originated." },
              { title: "The Church Has Sometimes Made Shame Worse", body: "When preaching uses shame as a motivational tool, or when sins are ranked in ways that leave certain people permanently marked, or when community life creates an implicit hierarchy of the acceptable and the unacceptable — the church becomes a shame machine rather than a grace community. This is a theological failure, not a feature. God does not traffic in shame." },
              { title: "Imago Dei Is the Anti-Shame Foundation", body: "The Christian doctrine of imago dei — that every human being bears the image of God — is the fundamental challenge to shame's claim that you are defective at your core. You cannot be fundamentally worthless if you are image-bearing. The work of shame resilience is building experiential access to what you already theologically believe: that you were made, are known, and are loved." },
              { title: "Vulnerability Is Not Weakness in God's Economy", body: "Shame thrives in hiding. The shame of Adam and Eve in Genesis 3 produces immediate concealment. Recovery from shame requires moving toward connection despite the risk of exposure — which is what Brené Brown calls vulnerability. This movement is not a psychological trick; it is a theological act. The incarnation is God choosing vulnerability. The cross is God absorbing shame to destroy its power." },
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
              { name: "Brené Brown", role: "Research professor, author of Daring Greatly and I Thought It Was Just Me", quote: "Shame is the intensely painful feeling or experience of believing that we are flawed and therefore unworthy of love and belonging. Guilt says I did something bad. Shame says I am bad.", note: "Brown's decade of research on shame identifies empathy as the antidote — not accountability, not more confession, but someone saying 'me too.' Her Shame Resilience Theory maps directly onto Christian practices of honest community." },
              { name: "Lewis Smedes", role: "Reformed theologian, author of Shame and Grace", quote: "Shame is the vague, undefined feeling that you are not good enough. Not good enough as a person. Not good enough to deserve to exist. Grace is the only cure for shame.", note: "Smedes was one of the first theologians to take shame seriously as a distinct category requiring a distinct theological response — not more law, not more willpower, but the experience of being accepted before performing." },
              { name: "Curt Thompson", role: "Psychiatrist, author of The Soul of Shame", quote: "Shame is the primary tool the enemy uses to disrupt God's mission in the world. It targets the self — not just what we do but who we are — and when it succeeds, it silences us and drives us into hiding.", note: "Thompson integrates interpersonal neuroscience with theological anthropology to show how shame affects the brain and how being known — by God and by community — is the neurological and spiritual corrective." },
              { name: "Kelly Brown Douglas", role: "Episcopal priest and womanist theologian", quote: "The bodies that have been shamed — Black bodies, female bodies, queer bodies, poor bodies — are the bodies God chooses to inhabit. The incarnation is a direct challenge to every system that assigns shame by embodiment.", note: "Douglas's work connects individual shame with systemic shame — the shame inflicted on entire communities by structures of power. Her theology insists that the resurrection vindicates the shamed body." },
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
              { title: "Name It to Defuse It", body: "Shame loses some power when named precisely. The practice: when you feel the contraction, hiding urge, or flooding sense of being fatally flawed — say it out loud or write it down. 'I am feeling shame right now because I believe ___.' The naming is not wallowing; it is the first move toward examination. What you can see, you can evaluate. What stays unnamed runs you." },
              { title: "Find One Safe Witness", body: "Shame heals in relationship, not in isolation. The practice of shame resilience involves finding at least one person who can hear your shame story without flinching — who can respond with empathy rather than advice, judgment, or their own discomfort. This is what small groups should be but often are not. It may be a therapist, a spiritual director, or one carefully chosen friend." },
              { title: "Therapy for Shame-Based Patterns", body: "Chronic shame (as opposed to situation-specific guilt) often has roots in attachment wounds and early childhood messaging that require professional address. Internal Family Systems (IFS), schema therapy, and EMDR are particularly effective for shame. Look for therapists who explicitly list shame, self-worth, or inner critic work in their specialties." },
              { title: "Distinguish God's Voice from the Shame Voice", body: "A formative spiritual practice for shame survivors is learning to distinguish divine conviction (directional, specific, restorative in tone) from internalized shame (global, permanent, crushing, focused on identity rather than behavior). Conviction says: you did this, here is repair. Shame says: you are this, there is no repair. God does not speak to you in shame. Full stop." },
              { title: "Body-Based Practices for Shame Response", body: "Shame is physiological — it involves cortisol, posture, gaze aversion, and nervous system shutdown. Practices that interrupt this pattern include: lifting the gaze, deliberately taking up physical space, touch (hand on heart), slow exhale, and cold water on the face. These are not replacements for inner work, but they interrupt the physical shame spiral enough to create space for a different response." },
              { title: "Reconstruct Your Narrative", body: "Shame often maintains its grip through a fixed story: I am the person who [failed, was rejected, was abused, did that thing]. Shame resilience involves telling the full story — including what happened, what you did with it, what it cost, and what you are doing now. The story does not erase the shame event, but it refuses to let the shame event be the whole story." },
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
              { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus.", note: "Condemnation (katakrima) is the legal vocabulary of shame — the verdict that says you are found wanting at the deepest level. Paul declares this verdict null. There is no theological basis for chronic self-condemnation." },
              { ref: "2 Corinthians 7:10", text: "Godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.", note: "Paul distinguishes productive grief (guilt leading to change) from destructive grief (shame that consumes without restoring). God does not ask for the latter." },
              { ref: "Isaiah 54:4", text: "Fear not, for you will not be ashamed; be not confounded, for you will not be disgraced; for you will forget the shame of your youth, and the reproach of your widowhood you will remember no more.", note: "God speaks directly to shame — naming it, seeing it, and promising its end. The prophet does not pretend the shame was not real. He addresses it head-on." },
              { ref: "Hebrews 12:2", text: "...looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.", note: "Jesus did not avoid shame — he endured it and then despised it, treating it as the thing it actually is: a tool of powers that sought to silence him. The resurrection is the definitive answer to shame." },
              { ref: "Psalm 34:5", text: "Those who look to him are radiant, and their faces shall never be ashamed.", note: "Radiance and shame are opposites. The Psalm locates the source of un-shame in turning toward God — not in self-improvement or performance but in orientation." },
              { ref: "1 John 3:19–20", text: "By this we shall know that we are of the truth and reassure our heart before him; for whenever our heart condemns us, God is greater than our heart, and he knows everything.", note: "When your own heart condemns you — which is the experience of chronic shame — God is greater than that voice. The self-condemning inner critic is not speaking for God." },
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
                placeholder="What does your shame voice tell you most often? Where did you first hear it?"
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
            <VideoEmbed videoId="G-2e9mMf7E8" title="Breaking the Power of Shame — Elevation Church" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="You Are Not Your Shame — Freedom in Christ" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Grace Over Guilt: What God Actually Says About You" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Shame, Identity, and the Gospel" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Shame is not your identity. You are known and you are loved.</p>
          <p style={{ marginTop: 8 }}>brenebrown.com &nbsp;|&nbsp; NAMI: 1-800-950-6264 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
