"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Your Body's Fear Is Not Faithlessness",
    verse: "Psalm 38:3–4",
    text: "There is no health in my bones because of your anger; there is no soundness in my flesh. This is bodily trauma — terror encoded in tissue. The psalmist does not apologize for the way his body holds suffering. Neither should you. A nervous system that learned to fear medical environments learned something true: terrible things happened there.",
  },
  {
    title: "Jesus Was Medically Traumatized",
    verse: "Isaiah 53:5",
    text: "He was pierced, crushed, flogged. His body bore the instruments of suffering and death. He knows what it is for the body to be subjected to pain by other hands — and to survive it with permanent marks. The incarnation means Christ carries medical trauma too, glorified and redeemed in his risen body.",
  },
  {
    title: "The Spirit Holds What Language Cannot",
    verse: "Romans 8:26",
    text: "Medical PTSD often defies language. The fear precedes words — it is somatic, physiological, a body alarm. The Spirit intercedes with groanings that words cannot express. You do not need a theological vocabulary to be heard by God in the pre-verbal terror of a triggered nervous system.",
  },
  {
    title: "Healing Takes Time — Ask Naaman",
    verse: "2 Kings 5:10–14",
    text: "Naaman expected an immediate, dramatic healing and nearly walked away when told to wash seven times in a muddy river. Trauma recovery is repetitive, undramatic, and often disappointing before it is transformative. God meets us in the slow, ordinary, repeated acts of healing — seven times, not one.",
  },
  {
    title: "God Does Not Require You to Endure What Breaks You",
    verse: "Psalm 31:9–10",
    text: "Be merciful to me, LORD, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. You are not commanded to seek heroic medical endurance. Declining a procedure, requesting sedation, needing accommodation for trauma — none of this is failure. David said his body was in distress and God answered.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Peter Levine",
    role: "Somatic trauma therapist, developer of Somatic Experiencing",
    quote: "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happens to you. Medical procedures can install terror in the body even when they are life-saving.",
    bio: "Peter Levine (Waking the Tiger, In an Unspoken Voice) developed Somatic Experiencing, which focuses on the body's physiological response to trauma. His work is essential for understanding why medical environments trigger terror — and how healing happens through the body, not around it.",
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Christian trauma psychologist",
    quote: "Medical trauma is not talked about in the church. But the body that endured procedures, surgeries, ICU stays — that body needs pastoral care as much as any other wound. The church must learn to hold bodily suffering without rushing to fix it.",
    bio: "Diane Langberg (Suffering and the Heart of God) brings a Christian psychology perspective to all forms of trauma. Her pastoral framing helps survivors understand medical PTSD within a theology of embodiment and suffering.",
  },
  {
    id: "v3",
    name: "Bessel van der Kolk",
    role: "Psychiatrist, trauma researcher",
    quote: "The brain that experienced the trauma — the white coat, the needle, the smell of antiseptic — has learned these mean danger. That learning is protective. Healing means teaching the brain new associations, slowly and safely.",
    bio: "Bessel van der Kolk (The Body Keeps the Score) documents how trauma changes the brain and body, making ordinary stimuli feel life-threatening. His research directly explains why medical PTSD is involuntary and why body-based therapies — EMDR, yoga, somatic work — are often more effective than talk therapy.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "Shame tells you that your terror is weakness. Neuroscience tells you your terror is your brain doing exactly what it learned to do. God does not shame the brain for learning. He heals it with relationship and safety.",
    bio: "Curt Thompson (The Soul of Shame, Anatomy of the Soul) integrates interpersonal neurobiology with Christian theology. He helps trauma survivors understand that the involuntary fear response is not moral failure — and that healing happens in safe relational and spiritual contexts.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Name It as Trauma, Not Weakness",
    text: "Medical PTSD is a clinical reality — not anxious overthinking, not lack of faith. It results from real medical events that overwhelmed the nervous system's capacity to process. Give it its name. Tell your doctor, your therapist, your pastor. Naming changes the story.",
  },
  {
    icon: "🏥",
    title: "Request Medical Accommodations Explicitly",
    text: "You can ask for: additional sedation, a trauma-informed nurse, a support person in the room, procedure pauses, advance explanation of each step. Hospitals are required to accommodate reasonable requests. This is not demanding — it is self-advocacy that enables better care.",
  },
  {
    icon: "🌀",
    title: "Pursue EMDR or Somatic Experiencing",
    text: "Talk therapy alone often cannot process medical trauma because the fear is stored subcortically — below language. EMDR and Somatic Experiencing work directly with the nervous system. Find a therapist trained in one of these methods. The Psychology Today finder filters by specialty.",
  },
  {
    icon: "🫁",
    title: "Practice Titrated Exposure Before Appointments",
    text: "Titrated exposure means approaching feared stimuli in tiny, tolerable steps — not flooding. Walk past the clinic building. Sit in the parking lot. Enter the lobby. Each step, with a safe person, teaches your nervous system that this environment is survivable. Do not push through alone.",
  },
  {
    icon: "📖",
    title: "Read Psalm 88 When You Cannot Pray",
    text: "Psalm 88 ends in darkness — no resolution, no praise, just: darkness is my closest friend. This is the only psalm that ends in unresolved lament. On the days when medical fear is darkest and prayer feels impossible, Psalm 88 gives you permission to end in honesty.",
  },
  {
    icon: "👥",
    title: "Find Your Two or Three",
    text: "Medical trauma is often invisible — others cannot see what an MRI appointment costs you. Find two or three people who understand: a support person for appointments, someone to debrief with afterward, a pastor or counselor who knows the weight. Do not carry this alone.",
  },
];

const scriptures = [
  { verse: "Psalm 38:3–4", text: "There is no health in my bones because of your anger; there is no soundness in my flesh. My wounds fester and are loathsome because of my sinful folly." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Isaiah 53:5", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
  { verse: "Psalm 31:9–10", text: "Be merciful to me, LORD, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning; my strength fails because of my affliction, and my bones grow weak." },
  { verse: "2 Kings 5:14", text: "So he went down and dipped himself in the Jordan seven times, as the man of God had told him, and his flesh was restored and became clean like that of a young boy." },
  { verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
];

type MedEntry = { id: string; date: string; trigger: string; truth: string; request: string };

export default function MedicalPtsdFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MedEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [truth, setTruth] = useState("");
  const [request, setRequest] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_medicalptsdj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: MedEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      trigger,
      truth,
      request,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_medicalptsdj_entries", JSON.stringify(updated));
    setTrigger(""); setTruth(""); setRequest("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_medicalptsdj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Medical Trauma & PTSD</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Medical PTSD & Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For those whose bodies learned to fear hospitals, procedures, needles, or medical environments after traumatic experiences — surgeries, ICU stays, difficult diagnoses, or watching a loved one suffer. Your fear is not weakness. Your nervous system learned something true.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741 &nbsp;·&nbsp; PTSD Alliance: <span style={{ color: GREEN }}>ptsdalliance.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What triggered fear in your body today or recently?</label>
                <textarea value={trigger} onChange={(e) => setTrigger(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth from today do you want to remember?</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One specific accommodation or request you need to make.</label>
                <textarea value={request} onChange={(e) => setRequest(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Trigger:</strong> {e.trigger}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
                {e.request && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Request:</strong> {e.request}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk explains how trauma is stored physiologically in the body — the science behind why medical PTSD is involuntary and why body-based treatments are essential." },
              { videoId: "ZwDlGPCEUoE", title: "Understanding Trauma and the Nervous System", channel: "Trauma Research Foundation", description: "Clinical explanation of how the autonomic nervous system responds to overwhelm — why the fear response in medical settings is automatic and how healing happens." },
              { videoId: "ZGk1hl1nNrw", title: "EMDR and Trauma Processing", channel: "EMDR International Association", description: "Introduction to EMDR therapy — how bilateral stimulation helps the brain reprocess traumatic memories stored in the nervous system, including medical trauma." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical foundation for lament — giving language to suffering when the body holds what words cannot. Essential for medical trauma survivors navigating faith." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
