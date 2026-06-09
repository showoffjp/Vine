"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "scripture", label: "Scripture & the Mind" },
  { id: "faith-psychology", label: "Faith & Psychology" },
  { id: "anxiety", label: "Anxiety" },
  { id: "depression", label: "Depression" },
  { id: "church", label: "Church's Role" },
  { id: "pastoral", label: "Pastoral Care" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SCRIPTURE_MIND = [
  {
    ref: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?",
    note: "The Psalms model honest emotional expression — despair, anger, abandonment, grief — as legitimate parts of the life of faith.",
  },
  {
    ref: "1 Kings 19:3-5",
    text: "Elijah was afraid and ran for his life... He came to a broom bush, sat down under it and prayed that he might die.",
    note: "Elijah's depression after Carmel: the Bible presents a great prophet in severe mental distress without shame or condemnation.",
  },
  {
    ref: "Matthew 26:38",
    text: "Then he said to them, 'My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.'",
    note: "Jesus himself experienced profound emotional anguish in Gethsemane — distress is not spiritual failure.",
  },
  {
    ref: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewing of your mind.",
    note: "Cognitive renewal is part of Christian transformation — mind, emotion, and will are all engaged in sanctification.",
  },
  {
    ref: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    note: "This is not a command to suppress anxiety but to redirect it — to bring it to God in prayer, trusting his peace.",
  },
];

const FAITH_PSYCH_VIEWS = [
  {
    view: "Biblical Counseling Only",
    desc: "Secular psychology is fundamentally flawed because it is built on anti-Christian assumptions. Scripture is sufficient for all soul-care needs. Professional psychiatric treatment for biological conditions may be acceptable, but counseling must be exclusively biblical.",
    key_figures: "Jay Adams (nouthetic counseling), David Powlison, ACBC",
    color: BLUE,
  },
  {
    view: "Integration",
    desc: "Psychology and biblical theology can be integrated because all truth is God's truth. General revelation (observed in creation through psychology) can complement special revelation (Scripture). Christian counselors use both responsibly.",
    key_figures: "Gary Collins, Mark McMinn, David Entwistle, Biola University",
    color: GREEN,
  },
  {
    view: "Christian Psychology",
    desc: "Develop a distinctly Christian psychology grounded in Scripture, the tradition, and Christian anthropology, rather than integrating secular psychology into a Christian framework. Roberts, Watson.",
    key_figures: "Robert Roberts, Stanton Jones",
    color: TEAL,
  },
  {
    view: "Levels of Explanation",
    desc: "Psychology and theology address different levels of the same reality and do not truly compete. Neuroscience explains brain chemistry; theology explains meaning, sin, and relationship with God. Both can be true simultaneously.",
    key_figures: "Malcolm Jeeves, Warren Brown",
    color: PURPLE,
  },
];

const ANXIETY_THEOLOGY = [
  {
    title: "Anxiety Is Not Always Sin",
    desc: "The NT commands 'do not be anxious' (Philippians 4:6, Matthew 6:25) — but these are gospel invitations, not condemnations of those who struggle. Jesus himself was deeply troubled (John 11:33, 12:27). Anxiety disorder is a neurobiological condition, not simply spiritual failure.",
    color: TEAL,
  },
  {
    title: "Gospel Reorientation",
    desc: "The biblical response to anxiety is not willpower but reorientation: looking to God's provision, remembering his promises, bringing fears to him in prayer. Philippians 4:6-7 offers a practice, not just a prohibition: present your requests with thanksgiving.",
    color: GREEN,
  },
  {
    title: "The Body Matters",
    desc: "Anxiety is partly biological. Sleep deprivation, nutrition, exercise, and trauma all affect anxiety levels. Treating the body is not unfaithfulness — it is stewardship of the temple of the Holy Spirit (1 Corinthians 6:19-20). Medication can be appropriate.",
    color: GOLD,
  },
  {
    title: "Community and Solidarity",
    desc: "Anxiety thrives in isolation. The church is designed to be a community of mutual bearing: 'Bear one another's burdens' (Galatians 6:2). The anxious person needs people who will stay (like Jesus asking his disciples to 'keep watch with me').",
    color: PURPLE,
  },
  {
    title: "Pastoral Wisdom vs. Spiritual Bypassing",
    desc: "Telling an anxious person to 'just trust God' can be spiritual bypassing — using spiritual language to avoid engaging with real suffering. Pastoral wisdom engages both the spiritual and the practical, pointing to God while also addressing concrete circumstances.",
    color: BLUE,
  },
];

const DEPRESSION_THEOLOGY = [
  {
    title: "The Psalms of Lament",
    desc: "One-third of the Psalms are laments — honest, raw cries of pain and complaint to God. Psalm 88 ends with 'darkness is my closest friend.' The Bible validates depression as a genuine human experience, not a sign of weak faith.",
    color: PURPLE,
  },
  {
    title: "Elijah: The Pattern",
    desc: "1 Kings 19 gives the most psychologically realistic account of depression in the Bible. After a great victory, Elijah collapses into despair and asks to die. God's response: food, sleep, and gentle presence before any spiritual challenge. Physical care comes first.",
    color: GREEN,
  },
  {
    title: "Dark Night of the Soul",
    desc: "John of the Cross described the 'dark night of the soul' — a spiritual experience of God's felt absence, not as punishment but as purification. For some Christians, depression is accompanied by this kind of spiritual aridity. Distinguishing the two requires pastoral discernment.",
    color: TEAL,
  },
  {
    title: "Seeking Help Is Not Unbelief",
    desc: "Christians should not face severe depression alone or refuse medical treatment on spiritual grounds. Depression is a medical condition affecting brain chemistry. Seeking a psychiatrist or therapist reflects wisdom, not lack of faith — just as seeking a physician for cancer does.",
    color: GOLD,
  },
  {
    title: "Hope Without Minimizing",
    desc: "Christian hope is real — death is defeated, resurrection is coming, God is sovereign over suffering. But hope must never be weaponized to minimize present pain. 'It will get better' is true but can silence legitimate suffering. Sit with the sufferer first; offer hope in season.",
    color: BLUE,
  },
];

const CHURCH_ROLE = [
  {
    title: "Destigmatize Mental Illness",
    desc: "The church has sometimes made mental illness worse through shame, inadequate responses ('just pray more'), or treating mental health issues as spiritual failures. The first step is destigmatization: making the church a safe place to name struggles.",
    color: GREEN,
  },
  {
    title: "Lament as Liturgy",
    desc: "Incorporating lament into corporate worship gives permission for suffering to be named before God. Churches that only express joy and victory inadvertently communicate that pain is unwelcome. The Psalter models a fuller emotional range.",
    color: TEAL,
  },
  {
    title: "Practical Support",
    desc: "The church can provide meal trains, childcare, transportation, financial assistance, and accompaniment for those in mental health crises. These practical acts of love may matter more than words in a crisis.",
    color: PURPLE,
  },
  {
    title: "Referral Networks",
    desc: "Pastors should know their limits and have relationships with licensed counselors, psychiatrists, and therapists — ideally Christians — to whom they can refer. Not every problem is a pastoral problem; some require professional clinical care.",
    color: GOLD,
  },
  {
    title: "Long-Term Presence",
    desc: "Mental illness often requires long-term support, not quick fixes. The church excels at sustained, relational presence over time — which is exactly what many mental health conditions require. This is a genuine advantage over clinical settings.",
    color: BLUE,
  },
];

const PASTORAL_PRINCIPLES = [
  "Listen before you speak. Understand before you advise. Suffer with before you instruct.",
  "Acknowledge that you might not understand fully — chronic mental illness is hard to comprehend from the outside.",
  "Never tell a depressed person to 'just trust God more' without also addressing practical needs.",
  "Distinguish between situational distress (responding to real circumstances) and clinical disorder (neurobiological condition requiring treatment).",
  "Take suicide risk seriously. Every mention of suicidal ideation should prompt a direct, compassionate question: 'Are you thinking about ending your life?'",
  "Involve the family when appropriate and with consent — mental illness affects the entire relational system.",
  "Pray with the sufferer — not as a substitute for other care, but as part of genuine pastoral presence.",
  "Follow up consistently. Mental health struggles can last years. Don't let the crisis become invisible once it's no longer acute.",
];

const VIDEOS = [
  { videoId: "vT3wSqjPFJo", title: "Faith and Mental Health — The Church's Response" },
  { videoId: "PyrVS4cQWpU", title: "Depression and the Bible — Ed Welch" },
  { videoId: "0e0RHXJXGuc", title: "Anxiety: A Biblical and Pastoral Guide" },
  { videoId: "CFGM7k4L3FQ", title: "Psychology and Christianity — How They Relate" },
];

export default function MentalHealthTheologyPage() {
  const [tab, setTab] = useLocalStorage("vine_mh_tab", "overview");
  const [openFP, setOpenFP] = useLocalStorage("vine_mh_fp", "");
  const [journal, setJournal] = useLocalStorage("vine_mh_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🧠</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Theology of Mental Health</h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto" }}>
            What does Christian faith say about the mind, emotions, and mental illness? A theological and pastoral guide — for those who struggle and those who care for them.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Why Mental Health Matters Theologically</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>One in five adults in the US experiences mental illness in a given year. That means every congregation is filled with people who struggle with anxiety, depression, trauma, grief, and more. How the church responds — whether with grace, understanding, and practical help, or with shame, oversimplification, and avoidance — matters enormously.</p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christian theology has rich resources for understanding the mind, emotions, and suffering. Scripture presents the full range of human emotional experience — including profound darkness — as part of a life of faith. The goal is not stoic invulnerability but honest suffering held in relationship with God and community.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { label: "Mind & Soul", desc: "The Bible presents a holistic anthropology — body, soul, and spirit are not separate parts but aspects of the whole person", color: GREEN },
                { label: "Emotions Are Good", desc: "God is described as having emotions; Jesus wept, was troubled, and felt anguish. Emotions are part of the image of God in us", color: TEAL },
                { label: "Suffering Is Real", desc: "The Psalms and Job validate honest engagement with darkness, not spiritual bypassing or forced positivity", color: PURPLE },
                { label: "Healing Is Holistic", desc: "Healing involves body, soul, relationship, community — not just spiritual practices alone", color: GOLD },
              ].map(c => (
                <div key={c.label} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 10, padding: "1rem", borderTop: `3px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.label}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE & THE MIND */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Scripture and the Mind</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SCRIPTURE_MIND.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAITH & PSYCHOLOGY */}
        {tab === "faith-psychology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Faith and Psychology: The Debate</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christians have debated how the insights of psychology relate to the wisdom of Scripture and Christian theology. This is not a trivial debate — it affects how Christians seek help, how churches counsel, and what Christians think about mental illness.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {FAITH_PSYCH_VIEWS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenFP(openFP === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: v.color, textAlign: "left" }}>{v.view}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openFP === String(i) ? "−" : "+"}</span>
                  </button>
                  {openFP === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.5rem" }}>{v.desc}</p>
                      <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, fontStyle: "italic" }}>Key figures: {v.key_figures}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANXIETY */}
        {tab === "anxiety" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Anxiety: A Theological and Pastoral Guide</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {ANXIETY_THEOLOGY.map(a => (
                <div key={a.title} style={{ background: CARD, border: `1px solid ${a.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${a.color}` }}>
                  <div style={{ fontWeight: 700, color: a.color, marginBottom: "0.4rem" }}>{a.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEPRESSION */}
        {tab === "depression" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Depression: A Theological and Pastoral Guide</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {DEPRESSION_THEOLOGY.map(d => (
                <div key={d.title} style={{ background: CARD, border: `1px solid ${d.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${d.color}` }}>
                  <div style={{ fontWeight: 700, color: d.color, marginBottom: "0.4rem" }}>{d.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHURCH'S ROLE */}
        {tab === "church" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Church&apos;s Role</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CHURCH_ROLE.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASTORAL CARE */}
        {tab === "pastoral" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Pastoral Principles for Mental Health Care</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>These principles are for pastors, counselors, small group leaders, and anyone in a caring role. They are not clinical guidelines — they are pastoral wisdom for engaging thoughtfully with those who suffer.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PASTORAL_PRINCIPLES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, margin: 0, lineHeight: 1.7 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does this theology speak to your own mental and emotional life? What do you need to receive or to give?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your mental and emotional health in light of faith. Where have you struggled to bring your emotional life to God? What would it mean to grieve and be anxious without shame, bringing it all to him?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
