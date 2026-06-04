"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "what" | "causes" | "voices" | "reconstruction" | "videos";

const WHAT_ITEMS = [
  {
    id: "definition",
    title: "What Is Deconstruction?",
    body: "In contemporary Christian discourse, 'deconstruction' refers to the process of questioning, dismantling, and re-evaluating inherited religious beliefs, practices, and communities. The term is borrowed loosely from the philosophical work of Jacques Derrida — though the popular usage bears little resemblance to his project. For many people, deconstruction is not primarily intellectual but experiential: it begins with a wound (spiritual abuse, moral failure of a leader, perceived hypocrisy), a question that won't go away, or an encounter with new information or different perspectives that makes the previous framework feel unstable.",
  },
  {
    id: "spectrum",
    title: "The Spectrum of Deconstruction",
    body: "Not all deconstruction is the same. On one end: a person working through genuine theological questions who emerges with a deeper, more mature, and more honest faith — what might be called reconstruction. In the middle: prolonged uncertainty and spiritual homelessness, often accompanied by grief and disorientation. On the other end: a person who leaves Christian faith entirely, sometimes with considerable anger at what was left behind. The media tends to focus on the third type; the first type is far more common but less dramatic. Many deconstruction narratives are actually reformation narratives — the shedding of bad Christianity for a better understanding of the real thing.",
  },
  {
    id: "emotions",
    title: "The Emotional Landscape",
    body: "Deconstruction is rarely just intellectual. It is often accompanied by: grief over the loss of a community or certainty that felt like home; anger at deception, abuse, or manipulation; loneliness as friendships that were built on shared belief become strained; relief at setting down a belief system that felt burdensome; fear about where the process will lead. All of these are legitimate emotions. Processing them honestly is part of the work. The mistake is to let the emotional weight of leaving a bad version of Christianity become the reason to reject all versions.",
  },
  {
    id: "faith-crisis",
    title: "Faith Crisis vs. Deconstruction",
    body: "A faith crisis can be sudden — triggered by tragedy, suffering, hypocrisy, or an intellectual challenge. Deconstruction tends to be slower — a gradual erosion under the accumulated weight of unanswered questions, accumulated grievances, or changing social context. Both are real; both deserve serious engagement. The difference matters because the pastoral response differs: a faith crisis may need immediate care and presence; deconstruction may need sustained, honest conversation over a long period. Both need communities that can hold questions without requiring resolution.",
  },
];

const CAUSE_ITEMS = [
  {
    id: "abuse",
    title: "Spiritual Abuse and Toxic Church Cultures",
    color: "#EF4444",
    body: "The most common catalyst for serious deconstruction is experience of spiritual abuse — the use of religious authority to control, manipulate, harm, or exploit. This can take the form of authoritarian leadership, sexual abuse covered up by institutions, shaming, coercive commitment demands, or the weaponization of Scripture against vulnerable people. When the institution that is supposed to represent Christ behaves in ways that contradict him, the scaffolding collapses. Importantly: the deconstruction here is not irrational. The problem is real. The error is to conflate the abusive institution with the faith itself.",
  },
  {
    id: "intellectual",
    title: "Intellectual and Historical Challenges",
    color: "#3B82F6",
    body: "For others, deconstruction begins with exposure to critical scholarship, historical complexity, or philosophical challenges that were not adequately prepared for. The 'Bronze Age genocide' passages in the OT. The historical-critical issues in the Gospels. The problem of evil. The relationship between the Bible and science. Evolution. These questions are genuine and deserve genuine engagement. The failure of many evangelical subcultures to create space for honest intellectual wrestling — treating questions as threats rather than invitations — has pushed many out of faith communities that couldn't hold the questions.",
  },
  {
    id: "social",
    title: "Social and Cultural Shifts",
    color: PURPLE,
    body: "Some deconstruction is less about intellectual questions and more about changing social identity. As the cultural cost of Christian identity has risen in some contexts, the commitment structures that previously held faith in place (community expectation, social belonging, family pressure) have weakened. When belonging no longer requires Christianity, some people discover that faith was more social than it was personal. This is not a trivial observation — it suggests that much of what looked like faith was functional rather than genuine, and that genuine faith requires different foundations.",
  },
  {
    id: "lgbtq",
    title: "LGBTQ+ Questions and Church Teaching",
    color: "#EC4899",
    body: "For many in younger generations, the catalyst for deconstruction is the church's teaching on sexuality — either as gay or lesbian Christians who cannot reconcile their identity with traditional teaching, or as straight allies who find the church's pastoral response to LGBTQ+ people harmful or inconsistent. This is among the most pastorally complex areas of deconstruction, because it involves both genuine theological disagreement and real human cost. The traditional church's often graceless handling of LGBTQ+ people has accelerated deconstruction far more than any theological argument.",
  },
  {
    id: "politics",
    title: "Church and Politics",
    color: "#F59E0B",
    body: "Many people — particularly in the years around 2016-2020 — deconstructed not from philosophical doubt but from the church's visible alignment with political power in ways that seemed incompatible with the gospel. When evangelical Christianity appeared to many to be largely about cultural dominance rather than the way of Jesus, the questions intensified: Was this always what it was? Has the church always been primarily a political vehicle? The answer (historically, no) is often not available to people already outside the communities that could provide it.",
  },
];

const VOICE_ITEMS = [
  {
    id: "kearney",
    name: "The Doubters and Questioners of Scripture",
    book: "Job, Thomas, John the Baptist, David (Psalms 88, 13, 22)",
    color: GREEN,
    quote: "My God, my God, why have you forsaken me? — Psalm 22:1",
    body: "The Bible itself is full of deconstruction narratives. Job dismantles the prosperity theology of his culture. Thomas demands evidence. John the Baptist, from prison, sends messengers asking if Jesus is really the one. The psalmist in Psalm 88 ends without resolution — it is the only lament psalm with no turn toward hope. The canonical inclusion of these voices is itself a statement: honest wrestling with God is not apostasy. It is faith taking its own questions seriously.",
  },
  {
    id: "cs",
    name: "C.S. Lewis",
    book: "Surprised by Joy; A Grief Observed",
    color: "#F59E0B",
    quote: "I am not sure that God wants us to be happy. I think he wants us to be able to love, and be loved. He wants us to grow up.",
    body: "Lewis came to faith through intellectual conversion — he deconstructed atheism, not Christianity. But A Grief Observed is his deconstruction narrative: written after his wife's death, it records the shattering of a comfortable faith and the slow, painful reconstruction of something harder and more honest. 'Not that I am (I think) in much danger of ceasing to believe in God. The real danger is of coming to believe such dreadful things about Him.' Lewis is evidence that deconstruction can deepen faith if the questions are held long enough.",
  },
  {
    id: "doubt",
    name: "St. John of the Cross",
    book: "The Dark Night of the Soul (c. 1577)",
    color: PURPLE,
    quote: "In the dark night of the soul, bright flows the river of God.",
    body: "John of the Cross described a spiritual crisis that he called the 'dark night of the soul' — a period of felt absence of God, loss of spiritual consolation, and the stripping away of comfortable certainties. For John, this was not an attack to be resisted but a divine process to be endured: God removing the scaffolding so that faith could rest on the actual foundation rather than on spiritual experiences and certainties. Many deconstruction experiences fit this pattern — they are the removal of what is false in order to recover what is true.",
  },
  {
    id: "mcnight",
    name: "Scot McKnight & Hauna Ondrey",
    book: "Finding Faith, Losing Faith (2008)",
    color: "#3B82F6",
    quote: "The person who walks away from faith rarely does so because they wanted to leave God — they wanted to leave a version of God that turned out not to be real.",
    body: "McKnight and Ondrey studied deconstruction empirically — interviewing people who had left Christian faith and those who had reconstructed it. Their finding: most people leave not because they studied themselves out of faith but because of relational ruptures, moral failures of institutions, and the loss of community. The implication: deconstruction is not primarily an intellectual problem, and intellectual arguments are not primarily what holds people. Belonging precedes belief; community catastrophe precedes theological doubt.",
  },
  {
    id: "sheldrake",
    name: "Pete Scazzero",
    book: "Emotionally Healthy Spirituality",
    color: "#EC4899",
    quote: "The problem with the church today is not that people don't know enough. The problem is that people are not growing up emotionally.",
    body: "Scazzero's work locates much deconstruction in emotional immaturity — both in the individual and in the church. Christian communities that demand doctrinal conformity but do not cultivate emotional health produce people who follow the script while their inner life remains unaddressed. When the script fails to hold under pressure, people attribute the failure to Christianity rather than to the emotionally immature version of it they were practicing. Reconstruction requires doing the inner work that was skipped.",
  },
];

const RECONSTRUCTION_ITEMS = [
  {
    id: "distinguish",
    title: "Distinguish Christianity from Bad Christianity",
    body: "The most important cognitive move in reconstruction is distinguishing the abuse, institution, or theology that failed you from the faith itself. The prosperity gospel is not Christianity. Spiritual abuse is not Christianity. Authoritarian control is not Christianity. The church that covered up abuse is not the Church. These distinctions are not apologetics tricks — they are accurate descriptions. Jesus himself was most severe toward the religious establishment of his day. The question is: what did Jesus actually teach, actually do, and actually invite people into? That Jesus is available for encounter independently of the failures of his followers.",
  },
  {
    id: "lament",
    title: "Lament Fully Before You Rebuild",
    body: "Premature reconstruction is fragile. People who rush from deconstruction to reconstruction without genuine lament often find themselves in a brittle new structure. The biblical pattern is: lament is not the opposite of faith — it is a form of it. The psalms of lament, Job, Lamentations — all are Scripture. Grief over what was broken, anger at what was done to you, mourning for the community you lost — all are legitimate and necessary. Give them space. Find people who can hold them with you. The Psalms are the divinely provided prayer book for exactly this territory.",
  },
  {
    id: "find",
    title: "Find a Community That Can Hold Questions",
    body: "One of the most isolating aspects of deconstruction is the loss of community — or the fear that the community you have will reject you if they knew your questions. Finding a community that can hold genuine questions without requiring resolution is essential for reconstruction. This community exists — churches that are theologically serious but epistemically humble, that are honest about history, that can say 'that's a hard question and we're not sure' without panicking. They are harder to find but they are real.",
  },
  {
    id: "primary",
    title: "Return to Primary Sources",
    body: "Much deconstruction occurs in response to a cultural Christianity that is several layers removed from the actual text, the actual historical Jesus, and the actual claims of historic orthodox Christianity. Return to primary sources: read the Gospels with fresh eyes. Read N.T. Wright or Tom Wright on the historical Jesus. Read the Nicene Creed and ask what it actually claims. Read Augustine, C.S. Lewis, G.K. Chesterton. Discover that orthodox Christianity is far more intellectually serious than the version you may have left.",
  },
  {
    id: "spiritual-direction",
    title: "Consider Spiritual Direction",
    body: "Deconstruction is usually processed better in relationship than in isolation. A spiritual director — someone trained in accompanying people through the difficult terrain of faith — is often more helpful than a pastor who may feel defensive about the questions. The spiritual director's task is not to answer your questions but to help you stay present to them and to God through them. Many denominations have formal spiritual direction programs; others are accessible through ministries like Renovare, the Ignatian Volunteer Corps, or independent directors.",
  },
  {
    id: "practice",
    title: "Keep Practices Even When Beliefs Are Uncertain",
    body: "One of the most counterintuitive pieces of advice for those in deconstruction: maintain spiritual practices even when you are not sure what you believe. Prayer, Scripture reading, worship attendance, and the Eucharist all have a logic that is independent of settled doctrinal belief. The practices can carry you through the uncertainty in a way that pure intellectual work cannot. Maximus the Confessor: 'The body leads the soul.' William James observed that action often precedes conviction rather than following from it. Keep showing up.",
  },
];

export default function DeconstructionPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_deconstruction_tab", "what");
  const [selectedWhat, setSelectedWhat] = usePersistedState("vine_deconstruction_selected_what", "definition");
  const [selectedCause, setSelectedCause] = usePersistedState("vine_deconstruction_selected_cause", "abuse");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_deconstruction_voice", "kearney");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  const whatItem = WHAT_ITEMS.find(w => w.id === selectedWhat)!;
  const causeItem = CAUSE_ITEMS.find(c => c.id === selectedCause)!;
  const voiceItem = VOICE_ITEMS.find(v => v.id === selectedVoice)!;

  const TABS = [
    { id: "what" as Tab, label: "What Is This?", icon: "❓" },
    { id: "causes" as Tab, label: "Common Causes", icon: "🔍" },
    { id: "voices" as Tab, label: "Voices That Help", icon: "🕊️" },
    { id: "reconstruction" as Tab, label: "Path Forward", icon: "🏗️" },
    { id: "videos" as Tab, label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏗️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Faith Deconstruction & Reconstruction</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.65 }}>
            Many people are in the middle of a faith crisis — questioning, doubting, grieving, and uncertain where the journey leads. This guide is for the honest questioner who is not ready to give up on finding something real.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "what" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The experience of questioning, doubting, and re-evaluating inherited faith is not new — it is as old as Job, as familiar as Thomas, as honest as Psalm 88. This section helps you understand what is happening.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 200 }}>
                {WHAT_ITEMS.map(w => (
                  <button key={w.id} onClick={() => setSelectedWhat(w.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedWhat === w.id ? GREEN : BORDER}`, background: selectedWhat === w.id ? `${GREEN}18` : CARD, color: selectedWhat === w.id ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {w.title}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{whatItem.title}</h2>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{whatItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "causes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Deconstruction rarely has a single cause. Understanding what drove the process is important for knowing what the reconstruction requires. Different causes need different responses.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {CAUSE_ITEMS.map(c => (
                <button key={c.id} onClick={() => setSelectedCause(c.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedCause === c.id ? c.color : BORDER}`, background: selectedCause === c.id ? `${c.color}15` : "transparent", color: selectedCause === c.id ? c.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c.title.split(' ').slice(0, 3).join(' ')}...
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${causeItem.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: causeItem.color, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{causeItem.title}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{causeItem.body}</p>
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                You are not the first to walk this road. These voices — from Scripture, history, and contemporary scholarship — have something to say to those in the middle of the journey.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {VOICE_ITEMS.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, background: selectedVoice === v.id ? `${v.color}18` : CARD, color: selectedVoice === v.id ? v.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {v.name.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${voiceItem.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ color: voiceItem.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{voiceItem.name}</h2>
                    <span style={{ color: MUTED, fontSize: 13 }}>{voiceItem.book}</span>
                  </div>
                  <div style={{ background: `${voiceItem.color}10`, border: `1px solid ${voiceItem.color}25`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                    <p style={{ color: voiceItem.color, fontSize: 15, fontStyle: "italic", margin: 0 }}>"{voiceItem.quote}"</p>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voiceItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "reconstruction" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Deconstruction is not the destination — reconstruction is. Not a return to everything that was, but a faith that is harder, more honest, and more firmly grounded than before. These are the practices and postures that make reconstruction possible.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {RECONSTRUCTION_ITEMS.map(r => (
                <div key={r.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggleExpand(r.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", color: TEXT }}>
                    <div style={{ fontWeight: 800, fontSize: 16, textAlign: "left" }}>{r.title}</div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{expanded[r.id] ? "−" : "+"}</div>
                  </button>
                  {expanded[r.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{r.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>A WORD TO THOSE WHO LOVE SOMEONE DECONSTRUCTING</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The worst thing to do is to panic, argue, or issue ultimatums. The best thing: ask genuine questions and listen. Be curious about their experience without needing to defend the institution. Let them know that your relationship is not contingent on their belief. Pray. Be present. Trust God with the outcome. Most people who deconstruct do not lose faith entirely — they find a better version of it. Your job is not to prevent the process but to be someone they want to stay in relationship with while it happens.
              </p>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "FS-otLUeeTg", title: "Deconstruction & Reconstructing Faith: Navigating a Faith Crisis", channel: "Gospel Teaching", description: "A deep exploration of what deconstruction means, why it happens, and how Christians can navigate a faith crisis toward genuine reconstruction." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller examines how Jesus introduces a revolutionary kingdom that overturns our assumptions about power, worth, and belonging." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Francis Chan shares the core of what Christian faith is — cutting through layers of cultural Christianity to the simple, transforming message of Jesus." },
                  { videoId: "_ChnTOiYXcA", title: "God's Sovereignty: Chosen By God", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul grounds faith in the sovereign grace of God — essential for those rebuilding their understanding of salvation and assurance." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
