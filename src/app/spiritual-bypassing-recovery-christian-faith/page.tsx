"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_spiritual_bypassing_entries";
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

export default function SpiritualBypassing() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Spiritual Formation</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Spiritual Bypassing, Toxic Positivity, and Authentic Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When religion is used to avoid feeling rather than to deepen it — recovering an honest, embodied spirituality.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Psychology Today: psychologytoday.com &nbsp;|&nbsp; Open Path Collective: openpathcollective.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>What Spiritual Bypassing Is</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Psychologist John Welwood coined the term spiritual bypassing to describe using spiritual ideas and practices to avoid, suppress, or escape from difficult psychological realities — unresolved trauma, unprocessed grief, legitimate anger, shame, psychological wounds, and difficult relational dynamics. It looks like: responding to grief with just trust God; to anger with forgive and move on; to depression with choose joy; to trauma with pray harder. The problem is not the theology itself — trust, forgiveness, joy, and prayer are all real goods. The problem is using them as conversation-stoppers that prevent engagement with what is actually happening. Real faith is not the absence of difficult inner experience but the willingness to bring it fully into relationship with God.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Psalms as Anti-Bypassing Scripture</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The Psalter contains more raw, unfiltered emotional content than any other book in Scripture — anger at God (Psalm 88), rage at enemies (Psalm 137), despair so deep it imagines God has turned his back (Psalm 22). These are not examples of spiritual immaturity to be outgrown. They are canonized as Scripture, placed in the center of Jewish and Christian worship, and given to us as the authorized language of prayer. The psalmists did not bypass their pain with spiritual affirmations — they brought the pain directly to God and refused to pretend it was something else. That is not less faith. That is more.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Jesus Did Not Bypass Gethsemane</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In the garden of Gethsemane, the night before the crucifixion, Jesus did not compose himself in serene spiritual detachment. He told his disciples that his soul was overwhelmed with sorrow to the point of death (Matthew 26:38). He fell on his face and asked the Father to take the cup away. He was so distressed that Luke records him sweating blood (Luke 22:44). And then he said not my will, but yours — but only after fully entering the distress. The submission came through the anguish, not instead of it. A spirituality that demands we skip to the submission without the anguish is not following Jesus into Gethsemane. It is pretending Gethsemane did not happen.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>How Communities Enforce Bypassing</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Spiritual bypassing is not just an individual problem — it is often enforced communally. Faith communities that do not tolerate grief, doubt, anger, or depression; that respond to every difficulty with Romans 8:28 without pastoral accompaniment; that shame people who need therapy or medication as lacking in faith; that perform collective happiness on Sunday and leave people alone with their struggles during the week — these communities teach bypassing as orthodoxy. Recovering authentic spirituality sometimes means finding or building a community that can tolerate the full range of human experience without flinching. That is not a lower standard for faith. It is a higher one.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Integration, Not Suppression</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Peter Scazzero&apos;s concept of emotionally healthy spirituality argues that emotional maturity and spiritual maturity cannot be separated. A person can be theologically sophisticated and emotionally arrested — and the theological sophistication may actually be preventing emotional development by providing a vocabulary for explaining away what needs to be felt. Genuine integration means bringing the full self — the angry parts, the grieving parts, the confused and doubting parts — into relationship with God and community, rather than presenting only the approved, spiritually polished version. This is harder than bypassing. It is also the path to the freedom that bypassing promises but cannot deliver.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Peter Scazzero", title: "Emotionally Healthy Spirituality", quote: "The emotionally unhealthy person ignores the emotional component of their humanity. It is almost impossible to be spiritually mature while remaining emotionally immature." },
              { name: "John Welwood", title: "Toward a Psychology of Awakening", quote: "Spiritual bypassing uses spiritual ideas and practices to sidestep personal, emotional work. It is a spirituality that tries to transcend the human before being fully human first." },
              { name: "Dan Allender", title: "The Cry of the Soul", quote: "Our emotions are not the problem — they are the map. Anger tells us where our heart has been violated. Grief tells us what we have loved and lost. The path to God runs through our feelings, not around them." },
              { name: "Brene Brown", title: "The Gifts of Imperfection", quote: "You cannot selectively numb emotion. When we numb the dark, we numb the light. Joy, belonging, creativity, gratitude — they require vulnerability. There is no authentic spiritual life without it." },
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
              { title: "Lament as Spiritual Practice", body: "The psalms of lament (Psalm 13, 22, 42, 88, 137) are a template for bringing genuine distress to God without sanitizing it. Lament practice involves naming the grief or anger specifically, bringing it directly to God as a complaint, and remaining in relationship even without resolution. Start by praying Psalm 13 aloud and noticing what the words open in you." },
              { title: "Therapy — Not Instead of Faith, Alongside It", body: "Many people who have practiced spiritual bypassing benefit from working with a therapist who can provide a non-religious space to begin accessing what has been suppressed. This often does not undermine faith — it deepens it by removing the performance layer that was preventing genuine encounter. Psychology Today (psychologytoday.com) and Open Path Collective (openpathcollective.org) help find affordable therapists." },
              { title: "Emotionally Healthy Spirituality Course", body: "Peter Scazzero&apos;s Emotionally Healthy Spirituality course (emotionallyhealthy.org) is specifically designed for people in Christian communities who have been practicing spiritual bypassing. It is run in small groups and provides a structured framework for integrating emotional and spiritual development. Many churches now offer this course." },
              { title: "Examen — The Daily Feelings Review", body: "The Ignatian daily examen asks two questions at the end of each day: when did I feel most alive, most connected to God? When did I feel most distant, most drained? These questions require naming actual emotional experience — not evaluating whether the feelings were appropriate but noticing what was actually felt. Over time this builds emotional literacy as a spiritual practice." },
              { title: "Spiritual Direction", body: "A spiritual director&apos;s role is to notice where God is at work in your life — which often means noticing where you are blocking it. Spiritual directors trained in emotionally healthy spirituality can help identify bypassing patterns specifically within the spiritual life. Spiritual Directors International (sdiworld.org) has a directory." },
              { title: "Community That Allows the Full Range", body: "If your current faith community enforces toxic positivity and shames authentic struggle, that environment itself is a barrier to healing. Finding a community — or a small group within a larger community — that can hold grief, doubt, anger, and confusion as legitimate parts of faith is essential. This is not abandoning faith. It is finding a deeper form of it." },
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
              { ref: "Matthew 26:38", text: "Then he said to them, My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me." },
              { ref: "Psalm 13:1–2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?" },
              { ref: "John 11:35", text: "Jesus wept." },
              { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest." },
              { ref: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
              { ref: "Ecclesiastes 3:4", text: "A time to weep and a time to laugh, a time to mourn and a time to dance." },
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
                placeholder="What have you been using spiritual language to avoid feeling? What would you say to God if you stopped being polite?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Emotionally Healthy Spirituality — Feeling It All" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Lament — The Prayer God Can Handle" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Jesus in Gethsemane — God Does Not Bypass" />
            <VideoEmbed videoId="7_CGP-12AE0" title="When Positivity Becomes a Cage — Authentic Christian Faith" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
