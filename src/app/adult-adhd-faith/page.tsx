"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Fearfully and Wonderfully Made Includes the ADHD Brain",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made. The ADHD brain is not a broken version of a neurotypical brain — it is a distinct neurological profile with its own gifts and genuine challenges. God made it. It is not a moral failure, a spiritual deficit, or a discipline problem that prayer should have resolved by now. It is a brain, made by the One who makes all things."
  },
  {
    title: "The Body That Cannot Focus Is Still a Temple",
    verse: "1 Corinthians 6:19-20",
    text: "Your body is a temple of the Holy Spirit who is in you. The Spirit does not require a neurotypical nervous system as his habitation. The ADHD person who struggles with sustained attention is not less inhabited by God, less beloved, or less capable of holiness. The temple has a particular architecture — and God chose to dwell there."
  },
  {
    title: "Different Kinds of Minds in the Body of Christ",
    verse: "1 Corinthians 12:17-18",
    text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be. The body of Christ requires diverse cognitive profiles — not just diverse ethnicities and genders. The ADHD brain brings gifts of creativity, energy, hyperfocus, and pattern recognition that neurotypical structures consistently undervalue."
  },
  {
    title: "Shame Is Not the Appropriate Response to a Brain Difference",
    verse: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus. The years of missed deadlines, forgotten responsibilities, interpersonal friction, and failed attempts to be different — these have often accumulated into a specific ADHD-related shame. No condemnation. The shame is not from God. The diagnosis is not a verdict."
  },
  {
    title: "Weakness Is Where Grace Appears",
    verse: "2 Corinthians 12:9",
    text: "My power is made perfect in weakness. Many adults with ADHD carry a lifetime of having been told they are not trying hard enough. Paul's theology flips this: the place of genuine limitation is precisely where divine power shows up. Not because the limitation was planned as a test — but because God works with what is actually there."
  }
];

const voices = [
  {
    id: "v1",
    name: "Edward Hallowell",
    role: "Author, Driven to Distraction; psychiatrist with ADHD",
    quote: "ADHD is not a problem of knowing what to do. It is a problem of doing what you know. The person with ADHD usually knows exactly what they should be doing — and cannot reliably do it. This is not laziness or sin. It is neurology.",
    bio: "Edward Hallowell has ADHD himself and is the co-author of the landmark Driven to Distraction. His work gives adults with ADHD both scientific grounding and the self-compassion that decades of shame often preclude. His framework consistently normalizes the ADHD experience without dismissing its challenges."
  },
  {
    id: "v2",
    name: "Jennie Allen",
    role: "Author, Get Out of Your Head; founder, IF:Gathering",
    quote: "I have wrestled with whether my brain's tendency toward racing thoughts and difficulty staying present is spiritual disorder or something neurological. The answer is: both need attending to — but they need different kinds of attention.",
    bio: "Jennie Allen has spoken openly about her own mental health and the intersection of neurological reality with spiritual practice. She helps Christians understand that attending to brain function (including diagnosis and treatment) is not a shortcut around spiritual discipline — it may be what makes spiritual discipline possible."
  },
  {
    id: "v3",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, Anatomy of the Soul",
    quote: "The ADHD brain has spent years being the 'problem' in every room. The healing work is not just managing symptoms — it is rewriting the story of who you are. That is inherently theological work.",
    bio: "Curt Thompson's integration of neuroscience and theology is especially relevant for adults with ADHD who carry a shame story that has been reinforced their entire lives. His work helps reframe the ADHD experience as a neurological reality that needs pastoral and medical care — not more willpower."
  },
  {
    id: "v4",
    name: "Gina Pera",
    role: "Author, Is It You, Me, or Adult A.D.D.?; ADHD advocacy",
    quote: "Late diagnosis — especially in women — often comes with a specific grief: the grief of all the years of struggling without understanding, of blaming yourself for things that were not your fault.",
    bio: "Gina Pera's work on adult ADHD, including late diagnosis, is particularly important for those who received a diagnosis in midlife. She addresses the specific grief and re-storying that late diagnosis requires — and the particular experience of women whose ADHD went unrecognized for decades."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Get a Thorough Evaluation and Consider Medication",
    text: "Adult ADHD diagnosis requires a comprehensive evaluation — not just a symptom checklist. A psychiatrist or psychologist specializing in adult ADHD is ideal. ADHD medication has the strongest evidence base of any psychiatric medication. Considering it is not a failure of faith; it is caring for the brain God gave you."
  },
  {
    icon: "🏗️",
    title: "Build External Systems Because Your Internal Ones Are Different",
    text: "The ADHD brain does not reliably self-generate the structure neurotypical people have internally. External structure — calendars, reminders, body doubling, written lists, scheduled routines — is not compensating for laziness. It is accommodation for a real neurological difference. Build what your brain needs rather than shaming yourself for needing it."
  },
  {
    icon: "🙏",
    title: "Reshape Your Spiritual Practices for Your Brain",
    text: "Spiritual practices designed for sustained quiet attention (long Bible readings, prolonged still prayer) may be genuinely difficult for the ADHD brain. This is not spiritual failure. Walking prayer, audio Scripture, liturgical prayer (structured, short), and short prayer throughout the day are equally valid and may be more accessible. The goal is connection with God — not compliance with a neurotypical format."
  },
  {
    icon: "💬",
    title: "Address the Shame Story With a Therapist",
    text: "Adults with ADHD typically have years of internalized shame from educational, relational, and professional failures attributed to character rather than neurology. Cognitive-behavioral therapy specifically adapted for ADHD (CBT-ADHD) and EMDR can address the shame that medication does not touch."
  },
  {
    icon: "👥",
    title: "Find ADHD-Literate Community",
    text: "CHADD (chadd.org) and the ADHD Foundation maintain support groups for adults with ADHD. Online communities (r/ADHD, ADHD Christians Facebook groups) provide connection with others navigating faith and ADHD. Being known by someone who understands from the inside reduces the shame that isolation amplifies."
  },
  {
    icon: "📖",
    title: "Grieve the Lost Years Honestly",
    text: "Late ADHD diagnosis often brings grief for the years of struggling without understanding. This grief is legitimate and worth naming — with a therapist, in prayer, or in writing. The grief, properly processed, can transform into the beginning of a more truthful self-understanding."
  }
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:17-18", text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be." },
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "2 Corinthians 12:9-10", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { verse: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart." }
];

type ADHDEntry = { id: string; date: string; struggle: string; strength: string; prayer: string };

export default function AdultADHDFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ADHDEntry[]>([]);
  const [struggle, setStruggle] = useState("");
  const [strength, setStrength] = useState("");
  const [prayer, setPrayer] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_adultadhdfaithj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!struggle.trim()) return;
    const entry: ADHDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle, strength, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultadhdfaithj_entries", JSON.stringify(updated));
    setStruggle(""); setStrength(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultadhdfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Neurodiversity & Faith</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Adult ADHD & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the diagnosis finally explains a lifetime of struggling — and when the relief is followed by grief for all the years of unnecessary shame. When you don't know if your spiritual dryness is a faith problem or a neurology problem. When you are tired of trying harder with a brain that works differently. God made this brain.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the Christian with ADHD — addressing the shame, validating the diagnosis, and finding where God is in the neurological difference.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Psychiatrists, advocates, and teachers who take adult ADHD seriously — including its spiritual and identity dimensions.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Medical, practical, and spiritual practices for living well with ADHD — building what your brain needs rather than shaming yourself for needing it.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — ADHD carries elevated risk of depression and anxiety.<br />
                CHADD (adult ADHD organization): <strong style={{ color: TEXT }}>chadd.org</strong><br />
                ADDitude Magazine (resource hub): <strong style={{ color: TEXT }}>additudemag.com</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the Christian with ADHD — releasing shame, receiving grace, and finding the God who made this brain.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the struggles, notice the gifts, and bring your prayer to God. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What ADHD-related struggle am I carrying today?</label>
                <textarea value={struggle} onChange={e => setStruggle(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What gift or strength does my ADHD brain bring?</label>
                <textarea value={strength} onChange={e => setStrength(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What short prayer can I offer from where I actually am right now?</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.struggle && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>STRUGGLE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.struggle}</p></div>}
                  {e.strength && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>STRENGTH</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.strength}</p></div>}
                  {e.prayer && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>PRAYER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.prayer}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on ADHD, neurodiversity, and integrating faith with a differently wired brain.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>ADHD and the Christian: Neurology, Not Moral Failure</div>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="ADHD and the Christian: Neurology, Not Moral Failure" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Anatomy of the Soul: Curt Thompson on Neuroscience and Faith</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="The Anatomy of the Soul: Curt Thompson on Neuroscience and Faith" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Fearfully and Wonderfully Made: Neurodiversity in the Body of Christ</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Fearfully and Wonderfully Made: Neurodiversity in the Body of Christ" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Shame, ADHD, and the Gospel of Grace</div>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Shame, ADHD, and the Gospel of Grace" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
