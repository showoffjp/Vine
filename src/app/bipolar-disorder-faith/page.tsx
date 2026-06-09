"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Brain Is a Created Organ",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made. The brain that cycles through manic and depressive states is still a brain made by God. Bipolar disorder is not moral failure — it is a condition of a created organ in a fallen world. Treating it is stewardship of God's gift, not lack of faith.",
  },
  {
    title: "Scripture Contains Extreme Mood Variance",
    verse: "1 Kings 19:4",
    text: "He came to a broom bush, sat down under it and prayed that he might die. 'I have had enough, LORD,' he said. 'Take my life; I am no better than my ancestors.' Elijah experienced what looks clinically like severe depression immediately following his highest point of prophetic ministry. The Bible does not pathologize mood variance — it names it honestly and shows God responding with care.",
  },
  {
    title: "The Manic State Is Not the Holy Spirit",
    verse: "1 Corinthians 14:33",
    text: "For God is not a God of disorder but of peace. One of the most spiritually dangerous aspects of bipolar disorder is the tendency to interpret manic states as spiritual experiences — divine callings, visions, special revelation. This needs gentle but honest theological correction: the God of peace does not produce the disorder, grandiosity, or impulsivity of mania.",
  },
  {
    title: "Medication Is Not Lack of Faith",
    verse: "1 Timothy 5:23",
    text: "Stop drinking only water, and use a little wine because of your stomach and your frequent illnesses. Paul advised Timothy to use a medical remedy for his physical condition. The use of mood-stabilizing medication for bipolar disorder is consistent with biblical precedent that medicine is a gift to be stewarded.",
  },
  {
    title: "The Thorn Can Be Managed With Grace",
    verse: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Many who live with bipolar disorder learn, over time and with treatment, to build lives of extraordinary depth and meaning. The disorder does not define the ceiling of your life. It is, for some, the specific weakness through which grace becomes most visible.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Matthew Stanford",
    role: "Neuroscientist, author, Grace for the Afflicted",
    quote: "The church has done tremendous harm by implying that mental illness is a spiritual problem. Bipolar disorder is a brain disease. It does not respond to more prayer the way a faith problem does. It responds to medication, therapy, and the kind of sustained community support the church is actually called to provide.",
    bio: "Matthew Stanford (Grace for the Afflicted, The Biology of Sin) is a neuroscientist and Christian who has written the most comprehensive Christian framework for understanding mental illness as a biological reality. His work helps Christians with bipolar disorder understand their condition without shame and helps churches understand what genuine care looks like.",
  },
  {
    id: "v2",
    name: "Kay Warren",
    role: "Author, mental health advocate, mother of a son who died by suicide",
    quote: "My son Matthew was brilliant, beautiful, and suffered deeply from mental illness for most of his life. He loved Jesus. He took his medication. He died anyway. The church must learn to hold the reality of mental illness without false promises about healing.",
    bio: "Kay Warren (Choose Joy, Son of a Preacher Man) lost her son Matthew to suicide after his years-long battle with mental illness. Her advocacy for mental health awareness in the church, and her insistence on medication adherence as a form of self-care, has made her one of the most important Christian voices on this topic.",
  },
  {
    id: "v3",
    name: "Kathryn Greene-McCreight",
    role: "Episcopal priest, theologian, author",
    quote: "I wrote Darkness Is My Only Companion from inside bipolar disorder and hospitalization. I wanted the church to know that mental illness does not exclude you from deep encounter with God — and that God is present in the hospital room, in the medication, in the returning stability.",
    bio: "Kathryn Greene-McCreight (Darkness Is My Only Companion) is an Episcopal priest and theologian who writes from inside bipolar disorder. Her work is theologically sophisticated and pastorally essential — she knows the experience from the inside and can speak to both the suffering and the spirituality.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "Bipolar disorder involves a brain that oscillates between extremes. That oscillation is real, neurological, and treatable. Shame tells you that the oscillation is a character flaw. Neuroscience tells you it is a brain state. God meets you in both — and the psychiatrist's office is a place where that meeting happens.",
    bio: "Curt Thompson (Anatomy of the Soul, The Soul of Shame) integrates interpersonal neurobiology with Christian theology. His framework helps those with bipolar disorder understand their brain's cycles without shame, and understand how healing happens in relational and medical contexts.",
  },
];

const practices = [
  {
    icon: "💊",
    title: "Medication Adherence Is a Spiritual Discipline",
    text: "For bipolar disorder, mood stabilizers are often the foundation of stability. Missing doses — especially during hypomanic states when you feel well — is one of the most common causes of relapse. Taking medication consistently is an act of responsible self-care, consistent with biblical stewardship of the body. Tell your doctor about side effects; there are options.",
  },
  {
    icon: "📊",
    title: "Track Your Mood Longitudinally",
    text: "Mood tracking apps (Daylio, eMoods) help you and your psychiatrist see patterns: what precedes a manic episode, how long depressive phases last, what triggers cycles. Patterns that are invisible in daily experience become visible over months. This data is treatment information.",
  },
  {
    icon: "🌙",
    title: "Protect Sleep Above Everything",
    text: "Sleep disruption is both a symptom of and a trigger for bipolar cycles. Consistent sleep schedule — same bedtime and wake time, even weekends — is one of the most powerful non-medication interventions available. Light therapy, limiting screens before bed, and blackout curtains are worth the investment.",
  },
  {
    icon: "💬",
    title: "Build a Crisis Plan Before You Need It",
    text: "Write down: warning signs that you are cycling into mania or depression, who to call, what medications to adjust, whether to go to the hospital, and who has permission to make decisions if you cannot. Share this plan with one or two trusted people. A crisis plan made during stability saves lives during crisis.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Can Hold Both States",
    text: "Some churches celebrate your manic productivity and withdraw during depression. A church that can hold both — that reaches out when you go quiet, that does not exploit your manic energy — is a rare gift worth seeking. Tell your pastor about your diagnosis when you are stable. Give them the chance to learn to care well.",
  },
  {
    icon: "📖",
    title: "Read Psalm 88 and Psalm 96 Together",
    text: "Psalm 88 (unresolved darkness, no resolution) and Psalm 96 (joyful praise, exuberant worship) live side by side in the same biblical book. Both are addressed to God. Both are holy. Scripture validates the full range of your inner experience — the darkness and the brightness — as legitimate encounters with God.",
  },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Kings 19:4–5", text: "He came to a broom bush, sat down under it and prayed that he might die. 'I have had enough, LORD,' he said. Then he lay down under the bush and fell asleep." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "1 Corinthians 14:33", text: "For God is not a God of disorder but of peace — as in all the congregations of the Lord's people." },
  { verse: "Psalm 88:1–3", text: "LORD, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type BipolarEntry = { id: string; date: string; state: string; truth: string; plan: string };

export default function BipolarDisorderFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BipolarEntry[]>([]);
  const [state, setState] = useState("");
  const [truth, setTruth] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_bipolarfaithj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!state.trim()) return;
    const entry: BipolarEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      state,
      truth,
      plan,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_bipolarfaithj_entries", JSON.stringify(updated));
    setState(""); setTruth(""); setPlan("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_bipolarfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Mental Health & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Bipolar Disorder and Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians living with bipolar disorder — navigating the cycles of mania and depression, the shame often attached in Christian communities, the question of whether medication is lack of faith, and how to build a sustainable spiritual life inside a condition that is real, neurological, and treatable.
        </p>

        <div style={{ background: "#1a0a2a", border: "1px solid #3a1a5a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Crisis resources — if you are in a manic or depressive crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: "#e07070" }}>988</strong> Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741 &nbsp;·&nbsp; Depression and Bipolar Support Alliance: <span style={{ color: GREEN }}>dbsalliance.org</span> &nbsp;·&nbsp; NAMI: 1-800-950-6264
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Current state: where are you in the cycle right now (1–10, depressed to manic)?</label>
                <textarea value={state} onChange={(e) => setState(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth do you need to hold onto in this state?</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What does your plan say to do right now? (medication, sleep, call, hospital?)</label>
                <textarea value={plan} onChange={(e) => setPlan(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.state && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>State:</strong> {e.state}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
                {e.plan && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Plan:</strong> {e.plan}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Mental Illness and the Church", channel: "Kay Warren", description: "Kay Warren on what the church must learn about mental illness — grounded in the loss of her son Matthew to suicide after years of bipolar disorder. One of the most important pastoral voices on this topic." },
              { videoId: "j2h-q3ZPKFI", title: "Grace for the Afflicted: Mental Illness and Faith", channel: "Matthew Stanford", description: "Neuroscientist Matthew Stanford on bipolar disorder as a brain condition — why medication is consistent with Christian faith and what the church owes those who are suffering." },
              { videoId: "NnGBhG03g4M", title: "Depression, Mania, and Spiritual Life", channel: "NAMI", description: "Clinical and personal perspectives on living with bipolar disorder — what the cycles look like, how treatment works, and how to build a sustainable life." },
              { videoId: "ZGk1hl1nNrw", title: "EMDR and Trauma in Mood Disorders", channel: "EMDR International Association", description: "Many people with bipolar disorder also carry trauma history that interacts with mood cycles. EMDR and trauma-informed care can significantly improve stability." },
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
      <Footer />
    </>
  );
}
