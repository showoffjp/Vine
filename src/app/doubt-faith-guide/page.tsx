"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "kinds", label: "Kinds of Doubt" },
  { id: "intellectual", label: "Intellectual Doubts" },
  { id: "emotional", label: "Emotional Doubts" },
  { id: "deconstruction", label: "Deconstruction" },
  { id: "dark-night", label: "Dark Night" },
  { id: "rebuilding", label: "Rebuilding Faith" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const KINDS_ITEMS = [
  { color: BLUE, title: "Intellectual Doubt", body: "Questions about the truth of Christian claims: Did Jesus rise from the dead? Is the Bible historically reliable? How can a good God allow evil? Are miracles possible? Intellectual doubt is doubt about evidence, argument, and reasons. It responds to engagement — reading, thinking, discussing, and following the evidence. Most intellectual objections have serious scholarly responses; the problem is usually that people haven't encountered them, not that they don't exist." },
  { color: PURPLE, title: "Emotional Doubt", body: "Doubt driven by pain, disappointment, or unmet expectation: God didn't heal my father. My prayer wasn't answered. The church hurt me. God feels absent. Emotional doubt is not answered by arguments — it is addressed by honest lament, honest prayer, and the presence of trusted community. Trying to argue someone out of emotional doubt usually deepens their sense that no one understands." },
  { color: GOLD, title: "Volitional Doubt", body: "Doubt that is maintained because it serves a purpose — often the desire to live without moral accountability. 'If I'm not sure God is real, I don't have to obey him.' This is the most important kind to be honest about, because it is addressed differently. Intellectual inquiry and emotional support don't help; the question is one of will and honesty. The philosopher says: examine whether you are genuinely asking 'Is this true?' or 'Please help me not believe this is true.'" },
  { color: TEAL, title: "Doubt vs. Unbelief", body: "Doubt and unbelief are not the same. Doubt is internal — it lives within a framework of faith that is struggling. Thomas doubted (John 20:25) but was still a disciple and was met by Jesus. Unbelief is an active rejection of or turning from Christ. Jude 22: 'Have mercy on those who doubt.' The doubter needs mercy, not condemnation. Many people who think they have lost faith have actually moved to a more honest, less comfortable form of faith — which may be exactly what was needed." },
];

const INTELLECTUAL_ITEMS = [
  {
    id: "i1",
    label: "Does God Exist?",
    content: "The existence of God is supported by multiple philosophical arguments: the Cosmological Argument (why is there something rather than nothing? every contingent thing requires an explanation; a necessary being — God — is required); the Teleological Argument (the fine-tuning of the universe for life points to intentional design); the Moral Argument (objective moral facts — which most people believe in — require a moral lawgiver); the Ontological Argument (the greatest conceivable being must exist). No single argument is decisive, but the cumulative case is strong. The leading scholarly defenses: Plantinga's Warranted Christian Belief, Craig's Reasonable Faith.",
  },
  {
    id: "i2",
    label: "Did Jesus Rise from the Dead?",
    content: "The resurrection is the foundation of Christianity (1 Cor 15:14-17). Historically, three facts are agreed upon by virtually all scholars: (1) Jesus was crucified and died; (2) the tomb was found empty; (3) the disciples had experiences they believed were of the risen Jesus, dramatically transforming them. The challenge is to explain all three facts. The naturalistic theories (hallucination, wrong tomb, swoon, legend) all fail to account for the full evidence. N.T. Wright's The Resurrection of the Son of God is the most comprehensive scholarly defense. Gary Habermas's minimal facts argument is the most accessible apologetic.",
  },
  {
    id: "i3",
    label: "Why Does God Allow Suffering?",
    content: "The problem of evil is the most powerful objection to theism. The logical problem (an all-powerful, all-knowing, all-good God is logically incompatible with evil) has been largely answered by Alvin Plantinga's Free Will Defense — no logical contradiction has been demonstrated. The evidential problem (even if not logically impossible, the amount of suffering we observe makes theism improbable) remains a live challenge. Christian responses: free will, soul-making (suffering produces character), eschatological hope (suffering is not the last word), and skeptical theism (we are not in a position to see the full context of God's reasons). The book of Job shows that God's response to suffering is not a philosophical treatise but a theophany — a presence.",
  },
  {
    id: "i4",
    label: "Is the Bible Reliable?",
    content: "The NT documents are among the best-attested ancient texts in terms of manuscript quantity and date proximity to originals. The Gospels were written within the lifetime of eyewitnesses (40-70 AD), too early for legend to develop fully. Archaeological discoveries (the Pool of Bethesda, the Pilate inscription, the Ossuary of Caiaphas) have repeatedly confirmed biblical historical claims. The critical question is whether the Gospel writers were honest — the criterion of embarrassment (they include material that would embarrass the church, like Peter's denial, the women's testimony, and Jesus's suffering) argues for authenticity. F.F. Bruce's The New Testament Documents: Are They Reliable? is the standard accessible resource.",
  },
];

const EMOTIONAL_ITEMS = [
  { title: "When God Feels Absent", color: BLUE, body: "Psalm 88 ends in darkness — no resolution, no comfort, only 'darkness is my closest friend.' This is not spiritual failure. Mother Teresa's diaries revealed decades of interior desolation while she served the poor. John of the Cross described the 'dark night of the soul' as a process of spiritual deepening, not spiritual failure. When God feels absent: bring the absence itself to him. 'Why do you hide your face from me?' (Psalm 44:24) is a prayer, not an accusation of atheism." },
  { title: "When the Church Hurt You", color: GOLD, body: "Church wounds are among the most common triggers of faith crises. The church is simultaneously the body of Christ and a collection of fallen people. A pastor's hypocrisy, abuse, spiritual manipulation, or institutional cover-up can damage faith in God because faith was entangled with faith in a particular community or leader. The untangling requires: separating trust in Christ from trust in institutions; acknowledging the real wound; finding a community where honest healing can happen; and refusing to let human failure define divine character." },
  { title: "When Prayer Feels Pointless", color: TEAL, body: "Unanswered prayer is one of the most common catalysts for doubt. Key considerations: prayer is not a vending machine (the relationship, not the transaction, is the point); God's purposes exceed our vision; 'no' and 'wait' are answers; the Psalms normalize the experience of God not responding when and how we asked. The mature prayer life includes the capacity to bring unanswered prayer to God as a question, rather than as evidence against him." },
  { title: "When Doubt Isolates", color: PURPLE, body: "Doubt tends toward isolation — the doubter feels unable to talk about their questions in church for fear of judgment. This isolation intensifies doubt: questions without community become obsessions. The church's failure to create safe space for doubt drives people to process online (where the loudest voices are often hostile to faith). If your church has no space for honest questions, find a small group, a spiritual director, or a trusted friend who can sit with your uncertainty without panicking." },
];

const DECON_ITEMS = [
  {
    id: "d1",
    label: "What Is Deconstruction?",
    content: "Deconstruction describes the process of examining and questioning the foundations of one's faith — often triggered by encountering new information, experiencing pain, leaving a controlling church, or engaging with broader intellectual perspectives. The term has been used both positively (honest rexamination leading to more grounded faith) and negatively (cover for a rejection of Christianity driven by a desire for different moral commitments). Not all deconstruction ends in deconversion; many people emerge with a faith that is less inherited and more genuinely owned.",
  },
  {
    id: "d2",
    label: "Healthy vs. Unhealthy Deconstruction",
    content: "Healthy deconstruction: driven by honest questions, pursued in community, informed by engagement with serious scholarship (not just social media), open to arriving at difficult answers, and committed to following evidence rather than desired conclusions. Unhealthy deconstruction: driven primarily by moral desires (wanting to justify a lifestyle change), pursued in isolation or only with those who confirm departure, informed primarily by the most hostile voices, and treating every difficulty as grounds for dismissal. The question to ask: am I genuinely asking 'Is this true?' — or am I looking for permission to stop believing?",
  },
  {
    id: "d3",
    label: "Things Worth Keeping Through Deconstruction",
    content: "The fact that some things were wrong doesn't mean everything was. Common casualties of deconstruction that deserve re-examination before abandonment: the resurrection (the historical evidence is real and strong), the person of Jesus (extraordinary by any standard, and his moral teaching is difficult to improve on), the experience of community (imperfect communities are still communities), and prayer (the practice may be worth keeping even while the theology gets revised). Throw out what was truly wrong; be careful about throwing out what was merely unfamiliar or uncomfortable.",
  },
];

const DARK_NIGHT_ITEMS = [
  { color: GREEN, title: "John of the Cross's Dark Night", body: "The 16th-century mystic and poet John of the Cross described the dark night of the soul in two stages: the dark night of the senses (the drying up of spiritual consolation — prayer feels dry, devotions feel empty, God feels distant) and the dark night of the spirit (deeper desolation, apparent abandonment). John's diagnosis: these experiences are not evidence of spiritual failure but of spiritual growth — God is weaning the soul from dependence on spiritual feelings toward trust in God himself. The dark night is a purgation that prepares for deeper union with God." },
  { color: BLUE, title: "The Biblical Precedents", body: "Job endures the complete collapse of his world and cries out to God with no response. Psalms 22, 88, and 42-43 describe the experience of God's hiddenness. Elijah, after his greatest spiritual victory (Mt. Carmel), collapses in suicidal despair (1 Kings 19) — and God's response is sleep, food, and a gentle voice. Paul's thorn in the flesh (2 Cor 12) is not removed. Mother Teresa's decades of interior darkness. The dark night is not an aberration; it is attested throughout the biblical and Christian tradition as a normal, if painful, part of spiritual maturation." },
  { color: GOLD, title: "How to Survive the Dark Night", body: "John of the Cross's counsel: don't force spiritual consolation through effort; keep the practices (prayer, Scripture, community) even when they feel empty; trust the process; find a guide who has been through it. The dark night is not the time to deconstruct doctrine — it is a time when the emotional and sensory dimensions of faith are stripped away so that naked trust in God can grow. Those who have emerged from it consistently report that the faith that survived is more durable, less dependent on feeling, and more genuinely grounded in God than what preceded it." },
  { color: TEAL, title: "When It Is Depression, Not Spiritual Crisis", body: "Clinical depression and the dark night of the soul overlap in experience but differ in cause. Spiritual desolation is the absence of consolation in a person who is spiritually healthy. Depression is a biologically and psychologically driven condition that requires treatment. When physical symptoms (insomnia, appetite changes, inability to function), persistent hopelessness about all of life (not just spiritual life), or suicidal ideation are present, seek clinical help. Good pastoral care knows when spiritual guidance is insufficient and refers appropriately." },
];

const REBUILDING_STEPS = [
  { step: "1", title: "Honest Lament Before God", body: "Bring your doubt, your anger, your confusion to God directly. Psalm 22 — 'My God, my God, why have you forsaken me?' — is a prayer addressed to God. Doubt that keeps you talking to God, even in anger, is not the same as doubt that takes you away from him." },
  { step: "2", title: "Distinguish Faith from Certainty", body: "Faith is not the absence of doubt — it is trust despite uncertainty. The disciple Thomas doubted and was met by the risen Christ. Abraham believed God and it was credited to him as righteousness — despite the evidence suggesting the promise was impossible. Faith is an act of the will, not a state of certainty." },
  { step: "3", title: "Engage Honestly with Evidence", body: "Many people leave Christianity without having engaged seriously with the best scholarship defending it. Before concluding Christianity is false, read N.T. Wright on the resurrection, Alvin Plantinga on God and evil, C.S. Lewis on the rationality of theism. The objections have responses; the responses deserve engagement." },
  { step: "4", title: "Find Safe Community", body: "Doubt in isolation becomes echo chamber. Find one or two people who can hold your uncertainty with you without either dismissing your questions or encouraging wholesale departure. A spiritual director, a mature mentor, or a small group with permission for honest questions are invaluable." },
  { step: "5", title: "Keep the Practices", body: "In seasons of doubt, maintain the practices: prayer (even if it feels empty), Scripture reading, and corporate worship. Not as a performance, but as a tether. C.S. Lewis said the moment he became aware that his prayer felt meaningless was the most important moment to keep praying." },
  { step: "6", title: "Trust the Person, Not Just the Propositions", body: "Christian faith is ultimately trust in a person — Jesus of Nazareth — not just assent to a set of doctrines. The question is not 'Do I have all the answers?' but 'Do I trust this person?' The disciples didn't have all the answers; they had Jesus. Return to him." },
];

const VIDEOS = [
  { videoId: "aWlrMKRk4X0", title: "Dealing with Doubt — Timothy Keller" },
  { videoId: "P0qHBjMXEwY", title: "Intellectual Doubts About Christianity — John Lennox" },
  { videoId: "ZNSmBRb9JpE", title: "Deconstruction and Reconstruction — Preston Sprinkle" },
  { videoId: "eaGwIpWzXkI", title: "The Dark Night of the Soul — John of the Cross Explained" },
  { videoId: "w4x3hGFRuBc", title: "Faith Through Doubt — Francis Collins" },
];

export default function DoubtFaithGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_doubt_tab", "overview");
  const [intOpen, setIntOpen] = usePersistedState<string>("vine_doubt_int", "");
  const [deconOpen, setDeconOpen] = usePersistedState<string>("vine_doubt_decon", "");
  const [journal, setJournal] = usePersistedState<string>("vine_doubt_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: BLUE + "22", color: BLUE, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>FAITH & DOUBT</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Doubt and Christian Faith</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          Doubt is not the enemy of faith — dishonesty is. A compassionate guide for everyone struggling with questions, deconstruction, and the dark night of the soul.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? BLUE : BORDER, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>You Are Not Alone in Your Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Every thoughtful Christian encounters doubt. The disciples doubted even after the resurrection (Matthew 28:17: 'when they saw him, they worshiped him; but some doubted'). Thomas doubted and was met by the risen Christ with compassion, not condemnation. The Psalms are full of honest questions and complaints directed at God. Doubt is part of the life of faith — the question is not whether you will doubt, but what you do with your doubts.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Faith is not", value: "Absence of doubt", color: BLUE },
                { label: "Faith is", value: "Trust through uncertainty", color: GREEN },
                { label: "Doubt needs", value: "Honest engagement", color: GOLD },
                { label: "God's response", value: "Mercy, not condemnation", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 14, padding: "1.3rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: BLUE, marginBottom: "0.5rem" }}>Jude 22 — Have Mercy on Those Who Doubt</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Jude 22 gives the church its posture toward doubters: 'Have mercy on those who doubt.' Not argument first. Not condemnation. Mercy. The church community is the appropriate place for doubt to be processed — not alone, not in hostile online spaces, but in a community that can hold the questions while also holding the faith. If your community cannot receive honest doubt with mercy, that is a failure of the community.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Doubt as Purification</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Many Christians who have passed through serious doubt report that their faith afterwards is more authentic, more personal, and more deeply rooted than the faith they had before. The faith that was never tested was often inherited, cultural, or performative — it looked like faith but functioned as social belonging. Serious doubt strips away that veneer and forces the question: do I actually believe this? The faith that survives honest examination is worth having.
              </p>
            </div>
          </div>
        )}

        {/* KINDS OF DOUBT */}
        {tab === "kinds" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Kinds of Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Not all doubt is the same. Understanding which kind you are dealing with shapes how to address it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {KINDS_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTELLECTUAL DOUBTS */}
        {tab === "intellectual" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Major Intellectual Doubts</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The most common intellectual objections to Christianity — and the serious scholarly responses that deserve engagement before concluding Christianity is false.
            </p>
            {INTELLECTUAL_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${intOpen === item.id ? GREEN : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setIntOpen(intOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{intOpen === item.id ? "−" : "+"}</span>
                </button>
                {intOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* EMOTIONAL DOUBTS */}
        {tab === "emotional" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Emotional Doubts</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Emotional doubts are not answered by arguments — they are addressed by honest lament, honest community, and the presence of a God who has been in the dark himself.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {EMOTIONAL_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DECONSTRUCTION */}
        {tab === "deconstruction" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Deconstruction</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The word 'deconstruction' describes the examination and questioning of inherited faith. It can be healthy and lead to a more grounded faith — or destructive and lead to deconversion.
            </p>
            {DECON_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${deconOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setDeconOpen(deconOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{deconOpen === item.id ? "−" : "+"}</span>
                </button>
                {deconOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* DARK NIGHT */}
        {tab === "dark-night" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Dark Night of the Soul</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The experience of spiritual desolation — God's felt absence, dryness, and loss of consolation — has a name and a place in the Christian tradition.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {DARK_NIGHT_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REBUILDING */}
        {tab === "rebuilding" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Rebuilding Faith</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Six practices for those who want to hold onto faith — or find their way back to it — through a season of doubt.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {REBUILDING_STEPS.map(s => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: BLUE + "22", color: BLUE, fontWeight: 800, fontSize: "1rem", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>A private space to be honest about your doubts and questions.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "What is the doubt that most troubles you right now? Write it out as honestly and specifically as you can.",
                "Is your doubt primarily intellectual (about evidence) or emotional (about experience and pain)? What would addressing each type look like?",
                "Has your doubt brought you closer to God or further away? What does that tell you?",
                "What would you need to believe, see, or experience to rebuild trust?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: BLUE, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write honestly here — this is private, saved only in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on doubt, deconstruction, and faith from trusted guides.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
