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

const JOURNAL_KEY = "vine_estranged_adult_child_entries";
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

export default function EstrangedAdultChild() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Family & Relationships</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>When Your Adult Child Is Estranged — A Parent&apos;s Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>The particular grief of a parent whose child has cut contact — the waiting, the questions, and the God who never stops watching the road.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Psychology Today (therapist finder): psychologytoday.com &nbsp;|&nbsp; Stand Alone (UK-based, estrangement-specific): standalone.org.uk
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Waiting Father — Luke 15 from the Parent&apos;s Perspective</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The parable of the prodigal son in Luke 15 is told from the child&apos;s perspective in most sermons. But read it from the father&apos;s perspective: a parent who has been left, who does not know where their child is or whether they are alive, who keeps watching the road. And then — he sees his child when the child was still a long way off. The father was watching. He had not given up. He had not stopped hoping. He ran. If you are a parent whose adult child has cut off contact, you are living the part of the parable that Jesus never dramatized but fully implied: the years of watching the road. The father&apos;s watching posture is your theological permission to keep hoping without requiring it, to keep loving from a distance.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Grief Without Closure — and Without an End Date</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The grief of parental estrangement has no ceremony, no casseroles, no bereavement leave. Your child is alive. Others may not understand why you are in such pain, or may assume it is your fault, or may tell you to give it time as if time alone resolves it. The grief is also cyclical — holidays, graduations, the birth of grandchildren you may not meet, the milestones that arrive with silence on the other side. Pauline Boss&apos;s term for this is ambiguous loss: the person is present in your life emotionally but absent physically, or the relationship exists legally but not functionally. This kind of grief is among the most difficult because it has no clear endpoint and no social script for processing it.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>What Honest Self-Examination Requires</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When an adult child estranges from a parent, the parent&apos;s instinct is often either full self-blame (I must have done something terrible) or full rejection of the child&apos;s account (they are wrong and I did nothing to deserve this). Both are usually incomplete. Research by Karl Pillemer and others on family estrangement finds that estrangements typically involve a genuine rupture with real causes — though the parent&apos;s and child&apos;s accounts of those causes often differ significantly. Genuine self-examination — not performative self-accusation but honest inquiry with a therapist about what the child may have experienced — is part of what watchful love requires. The father in Luke 15 does not perform this examination on the page, but his running toward the child suggests a heart that had been doing the work in the years of waiting.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Respecting Your Child&apos;s Agency While Keeping the Door Open</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>One of the most painful theological and relational tensions of parental estrangement is honoring your child&apos;s agency — their right to make decisions about who they allow into their life — while not simply accepting the silence as permanent or deserved. The father in Luke 15 does not go after the son. He waits. He watches. He stays available. But he does not intrude. The pastoral counsel that has the most consistent research support is: make clear the door is open, do not pursue relentlessly, avoid ultimatums or pressure, keep brief periodic contact that communicates availability without pressure, and work with a therapist on your own grief and self-examination in the meantime.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>What to Do With the Love That Has Nowhere to Go</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>A parent&apos;s love for an estranged child does not diminish because contact has ended. It has nowhere to go — no calls to answer, no visits to make, no daily expressions. One of the spiritual tasks of parental estrangement is finding where to direct that love: prayer, journaling, keeping a relationship with God in which you bring your child regularly, investing in other relationships and forms of generativity, and perhaps — where appropriate — serving in contexts that allow you to offer something of the love you cannot give your own child to others who need it. This is not substitution. It is stewardship of a love that is real and that God holds.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Karl Pillemer", title: "Fault Lines: Fractured Families and How to Mend Them", quote: "Of all the losses parents describe to me, the estrangement of an adult child is among the most painful. It carries a particular shame that makes it hard to speak of, a grief that has no certificate, and an uncertainty that may never fully resolve." },
              { name: "Pauline Boss", title: "Ambiguous Loss", quote: "With ambiguous loss, there is no closure. You must learn to hold two contradictory truths: my child is alive, and I have lost my child. Both are real. The work is learning to live with the tension rather than resolving it." },
              { name: "Henri Nouwen", title: "The Return of the Prodigal Son", quote: "The father of the prodigal did not stand on his dignity. He ran. He interrupted the son&apos;s prepared speech. He gave before anything was asked. Love anticipated. That is the posture we are called to — love that does not keep score, that is ready before the door opens." },
              { name: "Brene Brown", title: "Atlas of the Heart", quote: "Grief requires witness. When we are not allowed to speak of a loss — because the loss seems self-inflicted, or shameful, or too complicated to explain — it festers. Estrangement grief needs someone who will sit with it without trying to fix or explain it." },
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
              { title: "Therapy — For You, Not Just Your Relationship", body: "Working with a therapist on your own grief, self-examination, and emotional health is the most important step — not as a project to reunite with your child but as care for yourself during a genuinely painful season. A therapist familiar with family estrangement and ambiguous loss is most helpful. Psychology Today (psychologytoday.com) allows filtering by specialty." },
              { title: "Brief, Non-Pressure Contact", body: "Research by Joshua Coleman (author of When Parents Hurt) suggests that brief, occasional contact that communicates openness without pressure — a birthday card, a brief text on a significant holiday, a short note saying I love you and the door is open — maintains the possibility of reconnection without escalating the pressure that drove the estrangement. Do not demand response. Do not attach conditions. Just be present at the edge." },
              { title: "Support Groups for Estranged Parents", body: "The grief of parental estrangement is isolating partly because it is invisible and partly because it carries social shame. Support groups specifically for estranged parents provide community with people who understand. Stand Alone (standalone.org.uk) is the leading UK organization; in the US, online communities on Facebook and Reddit (r/EstrangedAdultKids, r/EstrangedAdultFamily) provide peer connection. Joshua Coleman&apos;s resources are widely used." },
              { title: "Journaling to Your Child", body: "Many parents find it helpful to maintain a private journal written to their estranged child — logging what has happened, expressing the love that has nowhere to go, recording what they would want their child to know someday. This is not a letter to send but a container for the ongoing relationship that continues in the parent&apos;s heart regardless of whether it is reciprocated." },
              { title: "Grief Processing — Naming the Multiple Losses", body: "Parental estrangement involves multiple simultaneous losses: the relationship itself, the grandparent role (if grandchildren are involved), the family gatherings that now carry the shape of absence, the vision of what growing old with your children would look like. Each loss deserves specific acknowledgment. A therapist, grief group, or spiritual director can help process each layer rather than treating it as a single undifferentiated pain." },
              { title: "Spiritual Direction", body: "A spiritual director can accompany the long, slow, unresolved nature of this grief in a way that is specifically oriented to the inner life and to God. Bringing your estranged child regularly to prayer — not petitions demanding reconciliation but honest lament and genuine intercession — is a form of continued love that requires nothing from your child and costs everything from you." },
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
              { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
              { ref: "Psalm 13:1–2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?" },
              { ref: "Lamentations 3:21–23", text: "Yet this I call to mind and therefore I have hope: Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
              { ref: "Isaiah 49:15–16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
              { ref: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
              { ref: "1 Corinthians 13:7", text: "Love always protects, always trusts, always hopes, always perseveres." },
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
                placeholder="What do you want your child to know? What are you learning about yourself in the waiting? What are you carrying today?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="The Waiting Father — Luke 15 and Parental Estrangement" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Ambiguous Loss — Grieving What Has Not Ended" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="When Your Adult Child Cuts Off Contact — What Parents Need" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Love That Has Nowhere to Go — Faithfulness in the Long Wait" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
