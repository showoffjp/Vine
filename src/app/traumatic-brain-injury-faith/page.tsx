"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Still Known After the Injury",
    verse: "Psalm 139:1-2",
    text: "\"O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar.\" God's knowledge of you is not dependent on your neurological function. The person who cannot remember their own name is still fully known. The person whose personality has changed since the injury is still fully loved. God's knowledge of you did not begin with your cognitive capacity and does not end with its loss."
  },
  {
    title: "The Brain as Part of the Body God Redeems",
    verse: "Romans 8:23",
    text: "\"And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies.\" The body we are waiting to have redeemed includes the brain. TBI is a physical injury to a physical organ — not a spiritual condition. The resurrection body Paul describes will be free of every injury, limitation, and neurological damage. This is the Christian hope for those with TBI."
  },
  {
    title: "God's Strength in Genuine Weakness",
    verse: "2 Corinthians 12:9-10",
    text: "\"My grace is sufficient for you, for my power is made perfect in weakness.\" Paul's thorn — whatever its nature — produced ongoing limitation. The grace he received was not removal of the limitation but sustaining presence within it. TBI produces genuine, often permanent limitations. The grace available is not always healing; it is sometimes the stronger thing: the power of Christ made visible in limitation."
  },
  {
    title: "The Grief of Changed Identity",
    verse: "Lamentations 3:20",
    text: "\"My soul continually remembers it and is bowed down within me.\" TBI often changes personality, memory, emotional regulation, and the capacity for work and relationship. Survivors and families grieve someone who is simultaneously still present and irrevocably changed. This grief deserves to be named — not as faithlessness but as an honest reckoning with real loss."
  },
  {
    title: "Present-Moment Grace",
    verse: "Matthew 6:34",
    text: "\"Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.\" TBI makes long-term planning profoundly difficult. Memory impairment, cognitive fatigue, and emotional dysregulation make the future feel impossible. Jesus' invitation to present-moment sufficiency is not a platitude — it is a practice. Today's grace is enough for today. Tomorrow's grace will come tomorrow."
  }
];

const voices = [
  {
    id: "v1", name: "Gabrielle Giffords", role: "Former Congresswoman; TBI Survivor",
    quote: "Recovery is a journey. Be patient with yourself. Take it one day at a time. Speaking is difficult for me. But I have not given up, and I will never give up.",
    bio: "Gabrielle Giffords survived a gunshot wound to the head in 2011. Her public recovery — marked by aphasia, partial paralysis, and extraordinary courage — has been a model for TBI survivors worldwide. Her foundation (giffords.org) advocates for brain injury survivors and their families."
  },
  {
    id: "v2", name: "Michael Paul Mason", role: "Author, 'Head Cases: Stories of Brain Injury and Its Aftermath'",
    quote: "TBI is the most underappreciated epidemic in American medicine. The survivors are invisible — their injuries are hidden, their deficits misread, their suffering unacknowledged.",
    bio: "Michael Paul Mason spent years as a case manager for TBI survivors and wrote 'Head Cases' as a landmark account of what TBI looks like from the inside. His work illuminates the complexity of brain injury and the inadequacy of current support systems."
  },
  {
    id: "v3", name: "Joni Tada", role: "Disability Advocate, Joni and Friends",
    quote: "Disability is not an obstacle to God's purposes. Sometimes it is the vehicle for them. The limitation is real. So is the grace.",
    bio: "Joni Tada's decades of advocacy for those with disabilities — and her own experience of quadriplegia — speak with authority to TBI survivors and their families. Her theology of suffering, disability, and hope is the most tested and most useful framework available."
  },
  {
    id: "v4", name: "Scott Sanes", role: "Chaplain, Traumatic Brain Injury Rehabilitation",
    quote: "The survivors who do best are the ones who have people who will not give up on them — who keep showing up, keep speaking their name, keep treating them as the person they always were.",
    bio: "TBI rehabilitation chaplains work at the intersection of acute medical care, long-term rehabilitation, and spiritual crisis. Their perspective — that presence and persistence are the most healing gifts — is backed by clinical evidence: social connection and meaning-making are primary recovery factors."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Comprehensive Neurological and Rehabilitation Care",
    text: "TBI treatment requires a multidisciplinary team: neurologist, neuropsychologist, occupational therapist, speech therapist, physical therapist, and often a psychiatrist for behavioral and mood sequelae. Ensure your care team includes all relevant specialists. Early intensive rehabilitation produces significantly better outcomes."
  },
  {
    icon: "🧠",
    title: "Cognitive Rehabilitation Therapy",
    text: "Cognitive rehabilitation — therapy specifically designed for the cognitive deficits of TBI (memory, attention, executive function) — is an evidence-based treatment that produces real improvement. Find a neuropsychologist or occupational therapist who specializes in cognitive rehabilitation."
  },
  {
    icon: "📅",
    title: "External Systems and Structure",
    text: "Memory impairment, distractibility, and executive dysfunction are best managed externally: written schedules, alarms, calendars, pill organizers, checklists, and structured routines reduce cognitive load. Do not rely on willpower or memory where a system can do the work."
  },
  {
    icon: "🫂",
    title: "Family Education and Support",
    text: "Families of TBI survivors are secondary victims — they grieve the person they knew while caring for the person who remains. The Brain Injury Association of America (biaa.org) offers family education programs. Caregiver support groups are available through most TBI rehabilitation centers."
  },
  {
    icon: "✝️",
    title: "Adapted Spiritual Practice",
    text: "TBI may make traditional spiritual practices difficult: long services are fatiguing, complex theology is inaccessible, memory impairment makes scripture recall impossible. Adapt: shorter prayers, simple repeated phrases, hymns that bypass executive function and go directly to long-term memory, embodied practices like the sign of the cross or rosary."
  },
  {
    icon: "📿",
    title: "Church Accommodation",
    text: "Talk to your pastor specifically about what accommodations your loved one needs: a quiet seat near the exit, permission to leave when fatigued, a support person, grace for behavioral dysregulation. Most congregations are willing to accommodate but need explicit guidance. Ask directly."
  }
];

const scriptures = [
  { verse: "Psalm 139:1-2", text: "O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar." },
  { verse: "Romans 8:23", text: "And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies." },
  { verse: "2 Corinthians 12:9-10", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
  { verse: "Lamentations 3:20-23", text: "My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
  { verse: "Matthew 6:34", text: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble." }
];

type TbiEntry = { id: string; date: string; hard: string; win: string; prayer: string };

export default function TraumaticBrainInjuryFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TbiEntry[]>([]);
  const [hard, setHard] = useState("");
  const [win, setWin] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_tbifaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const entry: TbiEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard, win, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_tbifaithj_entries", JSON.stringify(updated));
    setHard(""); setWin(""); setPrayer("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_tbifaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🧠</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Traumatic Brain Injury &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For TBI survivors and the families who love them — navigating changed identity, real limitation, and the God who knows us even when we cannot know ourselves.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Brain Injury Association: biaa.org or 1-800-444-6443 &bull; Joni and Friends: joniandfriends.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Daily Recovery Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What was hardest today?</label>
                  <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What was a win today — even small?</label>
                  <textarea value={win} onChange={e => setWin(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>One prayer for tomorrow:</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.hard && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Hard:</strong> {e.hard}</p>}
                {e.win && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Win:</strong> {e.win}</p>}
                {e.prayer && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Disability and Faith: Joni Tada</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Joni Tada on suffering, limitation, and what the resurrection means for broken bodies</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Disability and Faith: Joni Tada" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>TBI Recovery: What Families Need to Know</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The stages of TBI recovery and what realistic hope looks like for survivors and families</p>
              <VideoEmbed videoId="y-DQH-M1HuM" title="TBI Recovery: What Families Need to Know" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Strength in Weakness</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on the power of Christ made visible in human limitation and vulnerability</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Strength in Weakness" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Grief of Changed Identity</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How families grieve someone who is present but changed — and how to love through ambiguous loss</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Grief of Changed Identity" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
