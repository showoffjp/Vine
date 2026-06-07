"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_acoa_entries";

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

export default function AcoaPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Adult Child of an Alcoholic</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            What Was Done to You Was Real
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Growing up in an alcoholic home leaves marks the church rarely names. Your confusion, vigilance, and pain are not character flaws — they are logical responses to an illogical childhood.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide & Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Al-Anon/Alateen: </span>
          <strong style={{ color: TEXT }}>1-888-425-2666</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; ACOA World Service: </span>
          <strong style={{ color: TEXT }}>acawso.com</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Your Childhood Was Not Normal, and God Knows It", body: "The church often asks ACOA adults to simply forgive and move on. But Scripture names the transmission of harm across generations (Exodus 20:5 — not as punishment but as consequence) and calls the community to break those chains. What happened in your home was not God's will for children. God sees the child who learned to walk on eggshells." },
              { title: "The Rules of the Alcoholic Home Were Real Rules", body: "ACOAs typically absorbed three unspoken laws: don't talk, don't trust, don't feel. These were survival strategies. They worked — in that context. Bringing them into adult life and faith causes problems not because you are broken, but because you are still using tools built for a war that is technically over." },
              { title: "Vigilance and Hyperawareness Are Not Sins", body: "Many ACOAs developed an almost supernatural ability to read rooms — to feel tension before it showed. This hypervigilance was protective. In Scripture, discernment is a gift; healing does not mean becoming oblivious. It means the vigilance becomes a choice rather than a constant, compulsive scanning." },
              { title: "You Did Not Cause It and Could Not Control It", body: "Children of alcoholics carry shame that does not belong to them. The three ACA truths — I did not cause it, I cannot control it, I cannot cure it — are deeply consonant with a theology that locates sin in the agent, not the witness. A child who hid under a bed during a violent episode was not failing a spiritual test." },
              { title: "Recovery Is Not a Betrayal of Your Family", body: "Naming harm done by a parent feels like disloyalty. But the biblical command to honor parents (kavod — to give weight, to take seriously) is not a command to deny reality or protect a parent from consequences. You can grieve what you did not receive, seek healing, and still love your family honestly. These are not in conflict." },
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
              { name: "Janet Woititz", role: "Author, Adult Children of Alcoholics (1983)", quote: "Adult children of alcoholics guess at what normal is. They judge themselves without mercy. They have difficulty with intimate relationships. They react rather than act. They are either super responsible or super irresponsible.", note: "Woititz named the ACOA syndrome before it had a clinical category. Her list of 13 traits is still the foundational reference for this population." },
              { name: "Claudia Black", role: "Therapist, author of It Will Never Happen to Me", quote: "Children in alcoholic families adopt roles — the hero, the scapegoat, the lost child, the mascot — to manage chaos. These roles become cages.", note: "Black's role theory helps ACOAs identify the specific survival strategy they adopted and why it no longer serves them in adult relationships and faith community." },
              { name: "Pete Walker", role: "Therapist, author of Complex PTSD: From Surviving to Thriving", quote: "The inner critic in CPTSD is the internalized voice of the parent who never felt safe. Recovery is largely the project of answering that voice with something truer.", note: "Walker's work on Complex PTSD is particularly applicable to ACOAs. His concept of the four Fs — fight, flight, freeze, fawn — maps directly onto ACOA survival patterns." },
              { name: "Henri Nouwen", role: "Priest and spiritual writer", quote: "You are the beloved. That is the voice you must learn to hear above all others. Not the voice of your wound.", note: "Nouwen's theology of the Beloved — drawn from Jesus's baptism and the parable of the prodigal son — offers ACOAs an alternative identity to the shame-based self-understanding absorbed in childhood." },
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
              { title: "Adult Children of Alcoholics (ACA) Meetings", body: "ACA is a 12-step program specifically for adult children of alcoholics and other dysfunctional families. Unlike Al-Anon, which focuses on present-day alcoholic relationships, ACA focuses on childhood wounds. It offers a Big Red Book, a fellowship, and a sponsor model. Find meetings at acawso.com." },
              { title: "Trauma-Informed Therapy", body: "Standard talk therapy is often insufficient for ACOA healing. Seek therapists trained in complex trauma, Internal Family Systems (IFS), EMDR, or somatic approaches. The wounds are in the body and in the nervous system, not only in the story you can tell about your childhood. Psychology Today's find-a-therapist tool allows filtering by specialty." },
              { title: "The Inner Child Work", body: "ACOAs often have an internal rupture between the adult they appear to be and the child still waiting for a parent to show up reliably. Structured inner-child exercises — writing letters, visualization, naming and nurturing the younger self — can feel embarrassing but are clinically effective. This is not magical thinking; it is engaging the part of the nervous system that formed in childhood." },
              { title: "Naming the Roles You Played", body: "Claudia Black's role framework is diagnostic and liberating. Did you become the Family Hero — the high achiever who made the family look functional? The Scapegoat — the identified problem child? The Lost Child — invisible and alone? The Mascot — humor as survival? Name the role. Understand its function. Then practice being a person rather than a role." },
              { title: "Grief for What Was Not Given", body: "ACOA recovery involves grief — not only for specific incidents but for the childhood that did not happen. The birthday parties that were chaotic. The parent who was physically present and emotionally absent. The trust that could not be formed. Disenfranchised grief (grief without a named loss) is especially hard to process. A therapist or ACA group can provide witness." },
              { title: "Spiritual Direction Alongside Therapy", body: "The wounds of an alcoholic home often have a spiritual dimension — God may have been invoked to shame, to deny, or to demand silence. A spiritual director can help rebuild a relationship with God that is not contaminated by the family's distorted use of religion. This is separate from therapy and addresses the specifically spiritual grief." },
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
              { ref: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me.", note: "The most direct biblical acknowledgment that parents sometimes fail their children — and that God does not." },
              { ref: "Exodus 20:5–6", text: "I, the Lord your God, am a jealous God, visiting the iniquity of the fathers on the children to the third and fourth generation of those who hate me, but showing steadfast love to thousands of those who love me and keep my commandments.", note: "Not a curse but a consequence: harm travels. And the covenant of love is the counter-force. This passage is about cycles and the breaking of cycles." },
              { ref: "Ezekiel 18:20", text: "The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son.", note: "God explicitly refutes inherited guilt. You are not your parent. Their choices were not your fault." },
              { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.", note: "The father in the parable is not the alcoholic parent. He is the God who runs toward the one who returns — toward the adult child still finding their way home to themselves." },
              { ref: "Romans 8:15–16", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, 'Abba! Father!' The Spirit himself bears witness with our spirit that we are children of God.", note: "You have been adopted into a family whose parent is not broken. The spirit of slavery — anxiety, hypervigilance, performance for acceptance — is not your inheritance in Christ." },
              { ref: "Isaiah 43:18–19", text: "Remember not the former things, nor consider the things of old. Behold, I am doing a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert.", note: "God's specialty is making something living out of terrain that seemed dead. The patterns inherited from your family of origin are wilderness, not destiny." },
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
                placeholder="What rules did you learn in your childhood home? Which ones are you still living by?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Healing from Your Past — Elevation Church" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Breaking Family Cycles — Steven Furtick" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="You Are Loved: Knowing Your Identity in Christ" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Father's Love — Finding What Was Missing" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>What you survived was real. What you carry is real. Recovery is real too.</p>
          <p style={{ marginTop: 8 }}>ACA: acawso.com &nbsp;|&nbsp; Al-Anon/Alateen: 1-888-425-2666 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
