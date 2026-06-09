"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_toxic_family_origin_entries";
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #060610 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ToxicFamilyOrigin() {
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
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Family & Healing</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Toxic Family of Origin and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the family you were born into caused harm — navigating honor, boundaries, forgiveness, and healing.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; RAINN (abuse): <strong>1-800-656-4673</strong> &nbsp;|&nbsp; National DV Hotline: <strong>1-800-799-7233</strong> &nbsp;|&nbsp; Open Path Therapy: openpathcollective.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Honor Your Father and Mother — What It Actually Means</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The fifth commandment has been used to require silence from abuse survivors, to pressure adult children into maintaining contact with dangerous parents, and to keep people in systems that harm them. This is a misreading. The Hebrew word translated honor (kavod) means weightiness, gravity, to give appropriate recognition — not to obey unconditionally, not to pretend harm did not happen, not to remain in proximity to danger. The command was written for children in a society where elders held economic and social power. It was not written as a theological override of personal safety for adult survivors of parental abuse. Jesus himself said to his mother, at Cana: Woman, what does this have to do with me? (John 2:4) — using a distancing address in a moment of boundary-setting. Even Jesus modulated family deference.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>God Did Not Promise Healthy Parents</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The Bible is full of profoundly dysfunctional families. Isaac favored Esau, Rebecca favored Jacob, and their manipulation fractured the family. Jacob&apos;s favoritism of Joseph drove his brothers to attempted murder and decades of deception. David was a negligent and at times abusive father — his son Amnon raped his daughter Tamar, and David&apos;s silence was devastating (2 Samuel 13). Eli&apos;s sons were corrupt and he failed to restrain them. Scripture does not pretend these fathers were good. It does not demand that their children perform gratitude they do not feel or maintain closeness that is unsafe. What it does offer is a God who can be a Father to those whose fathers failed them (Psalm 27:10).</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Trauma of Spiritual Abuse in Families</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When religious language or Scripture is weaponized within families to control, shame, or justify harm, the damage is to both the psyche and the faith. Children told that their abuse is God&apos;s discipline. Adults told that questioning the family patriarch is rebellion against God. Women told that submission means accepting mistreatment. This is not Christianity — it is religious abuse, and it has lasting effects on survivors&apos; ability to trust, to worship, and to hear God&apos;s voice without flinching. Recovery requires separating the abuser&apos;s god — a projection of their own desire for control — from the God who is actually revealed in Christ, who protected children and condemned religious hypocrisy with unmistakable force (Matthew 23).</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Forgiveness Without Forced Reconciliation</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian teaching has often collapsed forgiveness and reconciliation into a single act, pressuring survivors of family harm to resume contact with those who harmed them as proof that forgiveness has occurred. This is neither psychologically nor theologically sound. Forgiveness is a decision to release your claim on vengeance and to refuse to let the other person&apos;s sin define your story. It is an internal act of liberation and does not require the other person&apos;s acknowledgment. Reconciliation is the restoration of relationship, which requires genuine acknowledgment of harm, changed behavior, and rebuilt trust. You cannot manufacture reconciliation alone, and you should not be pressured to pretend you have when you have not.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Psalm 27:10 — A God Who Adopts the Abandoned</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Though my father and mother forsake me, the Lord will receive me (Psalm 27:10). This verse is spoken not as theology in the abstract but as the personal testimony of someone for whom it became necessary to know. The psalm is a song of confidence and fear intertwined — David asking to dwell in God&apos;s house because enemies and adversaries surround him. The promise is not that parents will always be faithful — it is that when they are not, there is One who receives. The God of the Bible has a particular tenderness for those let down by the people who were supposed to protect them. Your family of origin is not your final definition.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Peter Scazzero", title: "Emotionally Healthy Spirituality", quote: "It is not possible to be spiritually mature while remaining emotionally immature. The unprocessed wounds from our families of origin inevitably leak into everything — our relationships, our theology, our ministry." },
              { name: "Dan Allender", title: "The Wounded Heart", quote: "Victims of abuse often become the guardians of their abusers' reputations. They protect the family story at the cost of their own. Healing begins when we stop protecting the story and start telling the truth." },
              { name: "Bessel van der Kolk", title: "The Body Keeps the Score", quote: "Traumatic experiences in childhood become embedded in the body. The nervous system learns what home feels like. Recovery is not just remembering — it is teaching your body a new normal." },
              { name: "Diane Langberg", title: "Suffering and the Heart of God", quote: "God is not honored when we cover sin with silence. He is honored when truth is spoken, when suffering is named, and when those who have been harmed are protected and cared for — not silenced for the comfort of those who harmed them." },
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
              { title: "Trauma-Informed Therapy — Not Just Any Therapy", body: "Healing from toxic family of origin dynamics requires a therapist trained in developmental trauma — not just talk therapy. Look for providers trained in IFS (Internal Family Systems), EMDR, somatic therapy, or attachment-based approaches. Psychology Today (psychologytoday.com) allows filtering by specialization. Open Path Collective (openpathcollective.org) offers reduced-cost therapy for those with financial constraints." },
              { title: "Family Systems Therapy", body: "Murray Bowen&apos;s family systems theory provides a framework for understanding the patterns — triangulation, scapegoating, enmeshment, emotional cutoff — that operate in dysfunctional families. A therapist trained in family systems can help you understand how the system works, your role in it, and how to differentiate yourself without simply cutting off. The goal is not detachment but self-definition." },
              { title: "Limits and Contact Decisions", body: "Deciding how much contact, if any, to maintain with toxic family members is a deeply personal decision with no universal Christian answer. Some situations require full no-contact for safety. Others permit carefully boundaried contact. Still others may permit genuine reconciliation over time. A therapist can help you think through what is wise in your specific situation. Recommended reading: Boundaries by Cloud and Townsend and Adult Children of Emotionally Immature Parents by Lindsay Gibson." },
              { title: "Grief for What Was Never Given", body: "Much of the healing from toxic family of origin work is grief — not just for what happened but for what was never given: the attunement, the safety, the celebration, the protection, the unconditional love that every child deserves and some never received. This grief has no clear endpoint and no social recognition. It deserves to be processed, not bypassed." },
              { title: "Chosen Family and Community", body: "Building an intentional community of people who know you, love you, and treat you with the dignity your family of origin did not always provide is not settling for second best. It is participating in the new creation community that Jesus announced — where family is defined by commitment and love, not only by bloodline." },
              { title: "GRACE and the Religious Trauma Institute", body: "For those who experienced specifically religious abuse within family systems — where Scripture and theology were weaponized to control or harm — the Religious Trauma Institute (religioustraumainstitute.com) and GRACE (netgrace.org) offer specialized resources. These organizations understand the particular complexity of healing when the abuser used God&apos;s name." },
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
              { ref: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
              { ref: "Matthew 23:9", text: "And do not call anyone on earth father, for you have one Father, and he is in heaven." },
              { ref: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
              { ref: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child." },
              { ref: "Matthew 12:49–50", text: "Pointing to his disciples, he said, Here are my mother and my brothers! For whoever does the will of my Father in heaven is my brother and sister and mother." },
              { ref: "Romans 8:15", text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father." },
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
                placeholder="What did your family give you that was good? What did they fail to give you that you needed? What are you still carrying?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Healing from Childhood Wounds — God as Father" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Honor Your Parents — What It Does and Does Not Mean" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Family Systems, Trauma, and the Path to Freedom" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Boundaries, Faith, and Toxic Relationships" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
