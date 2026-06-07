"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_perfectionism_entries";

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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function PerfectionismPage() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Perfectionism &amp; Performance Anxiety</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Were Loved Before You Performed Anything
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Perfectionism is not a character strength that needs to be moderated. It is often a survival strategy built on the belief that your worth is conditional on your performance. The gospel says that is wrong at the foundation.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-950-6264</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Open Path Collective (affordable therapy): </span>
          <strong style={{ color: TEXT }}>openpathcollective.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Perfectionism Is a Theological Problem, Not Just a Psychological One", body: "Perfectionism is at its root a belief that your worth is contingent on your performance — that you must earn love, approval, or belonging through achievement, flawlessness, or the avoidance of failure. This is theologically the opposite of grace. The gospel announces that you were loved before you performed anything, that the performance does not produce the love, and that the love cannot be revoked by failure. Perfectionism is grace-resistance in practical form." },
              { title: "Religion Can Intensify Perfectionism", body: "Certain religious environments — those that emphasize performance of spiritual disciplines, doctrinal correctness, visible piety, or adherence to behavioral codes as the basis of approval — can intensify perfectionism rather than address it. The person who already believes their worth depends on performance finds, in these environments, a God who confirms that belief. The pastoral task is to distinguish the God of grace from the God the perfectionist has constructed." },
              { title: "The Command to Be Perfect Is Not About Flawlessness", body: "Matthew 5:48 ('Be perfect as your heavenly Father is perfect') is the verse most commonly weaponized for Christian perfectionism. The Greek word translated 'perfect' is teleios — meaning complete, whole, mature, lacking nothing essential. Jesus is not commanding flawlessness; he is describing a wholeness of love that does not exclude enemies. The context is the love that extends to those who do not return it. This is a command of orientation, not a performance standard." },
              { title: "The Beloved Disciple Was Not the Highest Performer", body: "In John's Gospel, the disciple Jesus loved is specifically contrasted with Peter — who made the greatest declarations and the greatest failures. The beloved disciple is not the most devoted or the most theologically correct or the most courageous (he stayed at the cross, but he also outran Peter to the empty tomb — a detail John includes with evident satisfaction). The relationship of beloved-ness is not earned by performance. It is given." },
              { title: "Perfectionism and Anxiety Are Closely Related", body: "Perfectionism produces anxiety because it requires flawless performance in an imperfect world — an impossible standard that guarantees a constant subjective experience of failure. The perfectionist does not experience their successes (these are merely the expected baseline) but does experience every failure with disproportionate intensity. Treatment for perfectionism often overlaps significantly with treatment for anxiety disorders: CBT, ACT, and self-compassion practices are evidence-based approaches for both." },
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
              { name: "Brené Brown", role: "Research professor and author of The Gifts of Imperfection", quote: "Perfectionism is not the same thing as striving for excellence. Perfectionism is the belief that if we live perfect, look perfect, and act perfect, we can minimize or avoid the pain of blame, judgment, and shame. It's a shield. But it's a twenty-ton shield. It keeps out the joy.", note: "Brown's research distinguishes healthy striving (motivated by internal standards and self-compassion) from perfectionism (motivated by fear of failure and the belief that worth is conditional on performance). Her work is accessible and research-grounded." },
              { name: "Henri Nouwen", role: "Priest and author of The Return of the Prodigal Son", quote: "You are the beloved. That is the first and last truth about you. Not the voice of your performance, not the voice of your critics, not the voice of your failures. You are the beloved of God.", note: "Nouwen's theology of the Beloved — built around Jesus's baptism ('This is my beloved Son, with whom I am well pleased' — spoken before Jesus had performed a single ministry act) is the direct theological antidote to performance-based identity." },
              { name: "Paul (Apostle)", role: "New Testament writer, Philippians 4:11", quote: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound.", note: "Paul's contentment was not achieved by achieving more — it was learned. The learning involved significant failure and loss (imprisonment, beatings, shipwreck, rejection). Contentment despite imperfect circumstances is the alternative to the perfectionist's need to control outcomes." },
              { name: "Kristin Neff", role: "Researcher and author of Self-Compassion: The Proven Power of Being Kind to Yourself", quote: "You can't motivate yourself to do better by beating yourself up. Self-criticism activates the threat-defense system and shuts down the learning system. Self-compassion activates the care system and opens up the capacity to change.", note: "Neff's research on self-compassion demonstrates that treating yourself with the same kindness you would offer a friend — in moments of failure — is associated with higher performance, better mental health, and greater resilience than self-criticism." },
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
              { title: "Identify the Source of the Conditional Message", body: "Perfectionism begins with a message — typically absorbed in childhood or in formative environments — that love, approval, or belonging are conditional on performance. Therapy for perfectionism often begins by identifying where that message came from: which parent, which teacher, which religious environment, which cultural context. Understanding the origin does not dissolve the perfectionism, but it begins the process of evaluating whether the message was ever true." },
              { title: "Practice Deliberate Incompleteness", body: "One behavioral intervention for perfectionism is deliberately practicing doing things imperfectly — sending an email that has a minor error, leaving a project at 80%, arriving somewhere slightly late. The practice is not about embracing mediocrity; it is about testing the belief that catastrophe follows imperfection. When the catastrophe does not come, the belief is challenged. This is the behavioral component of CBT for perfectionism." },
              { title: "Acceptance and Commitment Therapy (ACT)", body: "ACT is particularly well-suited for perfectionism because it targets the relationship to thoughts (defusion) rather than the content of thoughts. The perfectionist thought 'I am not good enough' is not challenged or replaced but observed: 'I notice I am having the thought that I am not good enough.' This defusion allows the person to act in valued directions without first having to resolve the self-critical thought. Psychology Today's therapist finder allows filtering by ACT specialization." },
              { title: "The Beloved Practice", body: "Henri Nouwen's spiritual practice: each morning, sit in silence and hear God say 'You are my beloved. I am pleased with you.' Not 'I will be pleased when you...' Not 'I was pleased before you failed...' Present tense. Before the performance. This is not an affirmation; it is a theological claim about who you are before you do anything. Practice it daily, especially on days after failure." },
              { title: "Self-Compassion Exercises", body: "Kristin Neff's self-compassion break: (1) Name the suffering — 'this is a moment of difficulty'; (2) Name the common humanity — 'struggling like this is part of being human'; (3) Offer kindness — 'may I be kind to myself in this moment.' This three-part practice interrupts the self-critical spiral that perfectionism produces after failure. Research shows it is more effective for sustained improvement than self-criticism." },
              { title: "Examine Your Theology of Failure", body: "What does God do with your failures? If your functional theology is that God is disappointed, withdrawing, or disgusted by your failures — even if your stated theology is grace — you have a perfectionist God. The therapeutic and spiritual work involves bringing stated theology and functional theology into alignment: not 'I believe in grace but experience judgment' but 'I believe in grace and am beginning to experience it.'" },
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
              { ref: "Matthew 3:17", text: "And behold, a voice from heaven said, This is my beloved Son, with whom I am well pleased.", note: "Jesus had not yet performed a single healing, teaching, or miracle. He was loved before the performance. This is the sequence: beloved, then sent. Not sent to earn beloved-ness." },
              { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus.", note: "No condemnation — not even the self-condemnation the perfectionist maintains as a performance motivator. The verdict is not contingent on the performance." },
              { ref: "Ephesians 2:8–9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.", note: "The systematic theological statement: salvation is not by performance. The acceptance is prior to and independent of the performance." },
              { ref: "Matthew 5:48", text: "You therefore must be perfect, as your heavenly Father is perfect.", note: "Teleios — whole, complete, mature. The Greek word does not mean flawless. The context is the wholeness of love that extends to enemies — a quality of orientation, not a performance standard." },
              { ref: "2 Corinthians 12:9–10", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.", note: "God's power is perfected — completed, made whole — in weakness. The perfectionist's refusal of weakness is a refusal of the condition under which God's grace operates." },
              { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.", note: "The father ran while the son was still imperfect — rehearsing his speech, not yet cleaned up, still far off. The embrace preceded the confession. The love preceded the performance." },
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
                placeholder="What is the message your perfectionism tells you? Where did you first hear it? What would it mean to be loved before you performed anything?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="You Are the Beloved — Elevation Church" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Grace Before Performance: Matthew 3:17" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Gifts of Imperfection: Faith and Vulnerability" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Running Father — Luke 15 and Unconditional Love" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You were loved before you performed anything. The performance does not produce the love, and failure cannot revoke it.</p>
          <p style={{ marginTop: 8 }}>Open Path: openpathcollective.org &nbsp;|&nbsp; NAMI: 1-800-950-6264 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
