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

const JOURNAL_KEY = "vine_sibling_estrangement_entries";
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

export default function SiblingEstrangement() {
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
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Sibling Estrangement and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the person who shared your childhood is now a stranger — grief, guilt, faith, and the possibility of peace.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Psychology Today Therapist Finder: psychologytoday.com &nbsp;|&nbsp; Open Path Collective (affordable therapy): openpathcollective.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Scripture Is Full of Estranged Siblings</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Cain and Abel. Jacob and Esau. Joseph and his brothers. The prodigal son and his older brother who refused to come inside. Scripture does not pretend that siblings always get along, or that family bonds are automatically sacred and self-maintaining. The biblical narrative is actually quite honest about how destructive sibling dynamics can become, and about how long estrangements can last. Esau and Jacob go decades without reconciling. Joseph&apos;s brothers live with their guilt and their lie for years. What Scripture also shows is that reconciliation is possible — sometimes decades later — and that God can work in those long silences in ways that are not visible from the outside.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Not All Estrangement Is Sin</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Church culture can apply Matthew 18 and other reconciliation passages in ways that pressure people to maintain contact with siblings who are abusive, unsafe, or genuinely harmful. This misreads the text. Reconciliation in Scripture requires both parties — genuine acknowledgment, changed behavior, and restored trust. It is not the same as forced contact or pretending harm did not happen. Maintaining distance from a sibling who is dangerous, who abuses you or your children, who is actively in an addiction and using the relationship for manipulation — this can be an act of wisdom and self-protection, not a failure of Christian love. You are not obligated to let someone harm you in the name of family.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Grief of a Living Loss</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Estrangement from a sibling is a form of ambiguous loss — the person is alive but not present in your life. Holidays, family gatherings, milestone events all carry the shape of their absence. This is real grief, and it deserves to be named and mourned. Many people find that estrangement grief is disenfranchised — others do not understand why you would be sad about someone you chose to cut off, or they assume the estrangement must be your fault. The psalms of lament (Psalm 13, Psalm 22, Psalm 88) offer language for grief that has no easy resolution and no social recognition. You are allowed to mourn.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Forgiveness Without Restoration</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian teaching on forgiveness is often conflated with reconciliation, as if forgiving someone necessarily means resuming full relationship with them. These are related but distinct. Forgiveness is a decision to release your claim on vengeance and to stop allowing the other person&apos;s sin to define your story. It is primarily about your own spiritual freedom, not the other person&apos;s vindication. Reconciliation requires both parties — genuine accountability, changed behavior, rebuilt trust. You can forgive a sibling completely while maintaining wise distance. You can release bitterness without pretending the harm did not happen or that nothing needs to change.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>When Reconciliation Becomes Possible</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Joseph&apos;s reunion with his brothers (Genesis 45) is one of the most emotionally complex moments in Scripture. He did not deny what they had done. He wept. He tested them. And when he saw they had genuinely changed, he revealed himself and embraced them. The reconciliation happened — but only after years of separation and only after genuine transformation was evident. If reconciliation with an estranged sibling becomes possible, it does not require you to pretend the rupture never happened. Honest conversation about what occurred, genuine acknowledgment of harm, and the slow rebuilding of trust are the path. There is no shortcut. And God can bring people through it.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Karl Pillemer", title: "Fault Lines: Fractured Families and How to Mend Them", quote: "Family estrangement is one of the most common and least discussed forms of grief in American life. Millions of people are living with a sibling they no longer speak to, and most of them feel both justified and bereft." },
              { name: "Harriet Lerner", title: "The Dance of Anger", quote: "Cutoffs and distancing manage anxiety in the short term, but they don't resolve the underlying patterns. The real work — whether in contact or from a distance — is about how we define ourselves." },
              { name: "Miroslav Volf", title: "Exclusion and Embrace", quote: "Forgiveness is not forgetting. It is refusing to let the past determine the future. It is an act of freedom — yours, not just theirs — and it is the only way through." },
              { name: "Bessel van der Kolk", title: "The Body Keeps the Score", quote: "Family wounds shape us at the deepest level. Healing requires naming what happened, grieving what was lost, and finding a way to carry the past without being ruled by it." },
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
              { title: "Therapy — Individual First", body: "Before attempting any contact with an estranged sibling, working with a therapist who understands family systems is invaluable. You need to understand your own patterns, clarify your own needs, and determine what you actually want — not what guilt or obligation tells you to want. Psychology Today (psychologytoday.com) and Open Path Collective (openpathcollective.org) help find affordable therapists." },
              { title: "Grief Processing for Ambiguous Loss", body: "Estrangement is grief — acknowledge it as such. Pauline Boss, who coined the term ambiguous loss, has developed a framework that does not require resolution or contact. Read her book Ambiguous Loss. Consider a grief group, either in person or online. Your grief is legitimate even if the person is still alive and even if you chose the distance." },
              { title: "Lament Practices", body: "The Psalms of lament (Psalm 13, 22, 42, 88) provide a template for bringing unresolved sorrow to God without pretending to have answers. Praying or writing in the style of lament — naming the grief, directing it to God, holding the tension without forced resolution — is a spiritually grounded way to process estrangement grief." },
              { title: "Boundaries Clarity", body: "If you are considering resuming contact, get clear on what you need before making contact: What would need to be different? What would reconciliation require? What are you not willing to return to? Brene Brown and Harriet Lerner both have frameworks for articulating boundaries that come from values rather than punishment." },
              { title: "Family Mediation (if both are willing)", body: "When both parties want reconciliation but cannot get there alone, a family therapist or mediator can structure the conversations. The Gottman Institute (gottman.com) and AAMFT (therapistlocator.net) both have directories for family therapists. This process takes time — months, not meetings." },
              { title: "Chosen Family and Community", body: "Sibling estrangement often creates a gap in the belonging structure of life, especially during holidays. Intentionally investing in chosen family — close friends, faith community, neighbors — is not a consolation prize. It is the church doing what the church was designed to do: provide kin beyond blood." },
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
              { ref: "Genesis 45:4–5", text: "I am your brother Joseph, the one you sold into Egypt! And now, do not be distressed and do not be angry with yourselves for selling me here, because it was to save lives that God sent me ahead of you." },
              { ref: "Psalm 13:1–2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?" },
              { ref: "Matthew 5:9", text: "Blessed are the peacemakers, for they will be called children of God." },
              { ref: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
              { ref: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." },
              { ref: "Luke 15:28–30", text: "The older brother became angry and refused to go in. So his father went out and pleaded with him. But he answered his father, Look! All these years I have been slaving for you and never disobeyed your orders. Yet you never gave me even a young goat." },
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
                placeholder="What do you miss? What are you relieved to be free of? What do you wish could be different?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Forgiveness, Reconciliation, and the Difference Between Them" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="When Family Wounds Run Deep — A Christian Perspective" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Joseph and His Brothers — Scripture and Estrangement" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Grief Without a Grave — Ambiguous Loss and Faith" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
