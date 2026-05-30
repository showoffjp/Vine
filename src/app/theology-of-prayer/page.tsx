"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "jesus" | "forms" | "obstacles";

const THEOLOGY_ITEMS = [
  {
    title: "What Is Prayer?",
    body: "Prayer is not a technique for bending God's will toward ours — it is relational communication between creature and Creator. E.M. Bounds captured this precisely: \"Prayer is not overcoming God's reluctance but laying hold of His willingness.\" At its core, prayer assumes that God is personal, hearing, and responsive. The structure of biblical prayer is trinitarian: we pray to the Father, through the Son who has opened the way, by the Spirit who enables and intercedes. This means prayer is never a solo performance but a participation in the inner life of God himself.",
  },
  {
    title: "Does God Change His Mind?",
    body: "Divine immutability — the doctrine that God does not change — creates apparent tension with the biblical record. Abraham intercedes for Sodom (Genesis 18) and God agrees to relent if ten righteous are found. Moses pleads for Israel after the golden calf (Numbers 14) and God does not destroy them. Open theism takes these passages at face value: God genuinely adjusts based on creaturely prayer. Classical theism responds that God's eternal decree already included Abraham's intercession and its effects. The pastoral answer holds both: prayer genuinely matters, God genuinely responds, and the mystery of how divine immutability and creaturely prayer coexist is not resolved but honored.",
  },
  {
    title: "Why Pray If God Is Sovereign?",
    body: "The Westminster Larger Catechism (Q. 183) defines prayer as \"an offering up of our desires unto God\" and notes that God requires it as a means of grace. The Reformed answer to the sovereignty objection is that God ordains means as well as ends — prayer is one of the chief means by which he accomplishes his sovereign purposes. Prayer is not a means of giving God information he lacks; it is a means of grace by which we are formed, our desires aligned, and God's ordained outcomes brought to pass. The mystery of providential cooperation — that divine sovereignty and human agency genuinely cooperate — cannot be fully resolved, but both must be affirmed.",
  },
  {
    title: "Unanswered Prayer",
    body: "Paul asked three times for the thorn in the flesh to be removed (2 Corinthians 12:7-10). God said no — and the no was more merciful than any yes could have been: \"My grace is sufficient for you, for my power is made perfect in weakness.\" The categories for unanswered prayer are not just \"yes\" and \"no\" but \"not yet\" and \"something better.\" Philip Yancey's Prayer: Does It Make Any Difference? takes seriously the experience of prayers that seem to bounce off the ceiling. The honest biblical answer: God's agenda is our transformation and his glory, not our comfort. This does not diminish the pain of the unanswered; it reframes it.",
  },
  {
    title: "The Prayer of Jesus (John 17)",
    body: "John 17 preserves the longest recorded prayer of Jesus — the High Priestly Prayer — offered on the night of his arrest. Jesus prays for his own glorification (that the glory he shared before the world began would be restored), for his disciples' protection from the evil one, for their sanctification in truth, and for the unity of all future believers. What is striking is the intercessory character: Jesus prays for others, not for himself, even as he faces the cross. This prayer invites believers into something extraordinary: when we pray, we join the ongoing intercession of Jesus who \"always lives to intercede\" for us (Hebrews 7:25).",
  },
  {
    title: "Prayer and the Holy Spirit",
    body: "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans\" (Romans 8:26-27). The Spirit is the enabler of prayer — not an optional accessory but the one who carries our prayers when we have no words. \"Praying in the Spirit\" (Ephesians 6:18, Jude 20) means praying in alignment with the Spirit's desires, which are always aligned with the Father's will. This means no honest prayer is wasted: even the inarticulate groan of a suffering believer is carried before the throne by the Spirit who interprets it perfectly.",
  },
];

const JESUS_EPISODES = [
  {
    id: "lords-prayer",
    title: "The Lord's Prayer",
    ref: "Matt 6:9-13",
    detail: "The Lord's Prayer is a curriculum, not a recitation — Jesus says 'pray like this,' not 'repeat this.' Each line is a school of prayer. 'Our Father' (not 'my Father') establishes the communal, familial register — the Aramaic Abba behind the Greek Pater signals intimacy. 'Hallowed be your name' is a petition, not a statement: we are asking God to cause his name to be honored in the world. 'Your kingdom come' orients prayer eschatologically: we are asking for what God has promised to do. 'Daily bread' echoes the manna in the wilderness — God's provision is daily, not stockpiled. The petition for forgiveness is the only petition Jesus elaborates in the commentary that follows (Matthew 6:14-15): it is a discipline, not merely a request. 'Deliver us from evil' (or 'the evil one') is a recognition that prayer exists in a war zone.",
  },
  {
    id: "ask-seek-knock",
    title: "Ask, Seek, Knock",
    ref: "Luke 11:9-13",
    detail: "The Lukan context of Ask-Seek-Knock is the parable of the friend at midnight (Luke 11:5-8), which establishes the theme of persistence. Jesus uses a qal v'homer argument (lesser to greater): if a reluctant human friend gives what is needed because of shameless persistence, how much more will the heavenly Father give? The guarantee is not 'whatever you ask' in an unqualified sense — the promise culminates in 'how much more will your Father in heaven give the Holy Spirit to those who ask him' (v. 13). The greatest gift of prayer is not the answered petition but the Giver himself. The verbs ask-seek-knock are in the present imperative in Greek — keep asking, keep seeking, keep knocking.",
  },
  {
    id: "gethsemane",
    title: "Gethsemane",
    ref: "Matt 26:36-46",
    detail: "Gethsemane is the hardest prayer in Scripture. Jesus is 'sorrowful and troubled' — the Greek word (adēmonein) suggests a deep, disorienting anguish. He asks for the cup to pass. The Father says no. This is not a theatrical performance: Hebrews 5:7-8 tells us Jesus 'offered up prayers and petitions with fervent cries and tears to the one who could save him from death, and he was heard because of his reverent submission. Son though he was, he learned obedience from what he suffered.' The prayer was heard — not answered as petitioned. What Gethsemane teaches: bring your real anguish, name your honest desire, submit to the Father's wisdom, and trust that the cross leads to resurrection. 'Not my will but yours' is not resignation — it is the deepest form of faith.",
  },
  {
    id: "persistent-widow",
    title: "The Persistent Widow",
    ref: "Luke 18:1-8",
    detail: "Luke gives us the purpose of the parable before the parable itself: 'Jesus told his disciples a parable to show them that they should always pray and not give up' (Luke 18:1). The unjust judge is not an image of God — he is a contrast to God. If even a corrupt, godless judge grants justice to stop being bothered, how much more will the righteous God who loves his children grant justice to those who cry to him? The parable ends with an eschatological question that cuts unexpectedly: 'When the Son of Man comes, will he find faith on the earth?' Persistent prayer is an expression of faith — it is the refusal to act as if God is not there or does not care.",
  },
  {
    id: "in-my-name",
    title: "Praying in Jesus's Name",
    ref: "John 14:13-14",
    detail: "Praying 'in Jesus's name' is not a formula that functions like a password — as if appending the phrase to any request guarantees fulfillment. To pray in someone's name in the ancient world meant to pray on their behalf, in alignment with their character and authority. Jesus says he will do whatever we ask in his name 'so that the Father may be glorified in the Son' (John 14:13). The purpose clause is the interpretive key: prayers that glorify the Father through the Son are the prayers answered. This is why praying in Jesus's name is a theological act — it is asking: is this prayer consistent with who Jesus is, what he values, and what he is building? That question is itself a school of prayer.",
  },
];

type FormCategory = "Petition" | "Intercession" | "Confession" | "Thanksgiving" | "Contemplation" | "Lament";

const FORM_CATEGORIES: FormCategory[] = ["Petition", "Intercession", "Confession", "Thanksgiving", "Contemplation", "Lament"];

const FORM_CARDS: { type: FormCategory; title: string; desc: string }[] = [
  // Petition
  {
    type: "Petition",
    title: "General Supplication",
    desc: "Bringing broad desires and needs before God without a specific agenda. Supplication is not passive; it is the honest posture of dependence on One who provides. It guards against the self-sufficiency that forgets we receive every good gift.",
  },
  {
    type: "Petition",
    title: "Specific Requests",
    desc: "Naming concrete needs — healing, provision, wisdom, a specific outcome — before God. Specificity builds faith: you can see when God answers, and you must reckon honestly when he does not. Vagueness is comfortable but dishonest.",
  },
  {
    type: "Petition",
    title: "Kingdom-Focused Prayer",
    desc: "Petitions aligned with God's agenda rather than personal comfort — for the advance of the gospel, for laborers in the harvest, for justice, for revival. The Lord's Prayer teaches us to orient our petitions toward what God is building.",
  },
  {
    type: "Petition",
    title: "Arrow Prayers",
    desc: "Short, urgent, mid-situation prayers — Nehemiah's silent prayer before answering the king (Neh 2:4), Peter's 'Lord, save me!' as he sinks (Matt 14:30). Prayer need not be long to be real; the whole day can become a running conversation with God.",
  },
  // Intercession
  {
    type: "Intercession",
    title: "Praying for Others",
    desc: "Standing before God on behalf of another person, naming their needs, presenting them to the Father. Intercession is an act of love — it is the prayer form that most directly serves others. Paul's letters are filled with reports of intercessory prayer for his churches.",
  },
  {
    type: "Intercession",
    title: "Standing in the Gap",
    desc: "The image comes from Ezekiel 22:30 — God looks for someone to 'stand in the gap' before him on behalf of the land. Intercession is priestly: the one who prays represents others before God, presenting their case as an advocate.",
  },
  {
    type: "Intercession",
    title: "Praying for Enemies",
    desc: "Jesus commands it explicitly: 'Pray for those who persecute you' (Matt 5:44). This is the hardest intercession because it requires releasing the offense, wishing good on one who has done harm. It is also, mysteriously, one of the most transformative — for the one who prays.",
  },
  // Confession
  {
    type: "Confession",
    title: "The Daily Examen",
    desc: "The Ignatian practice of reviewing the day with God — where did I sense God's presence? Where did I pull away? Where did I fail? The Examen is not self-torture but honest attention, ending in gratitude and resolution. It makes confession daily rather than crisis-driven.",
  },
  {
    type: "Confession",
    title: "Corporate Confession",
    desc: "Nehemiah 9 and Daniel 9 model prayer that confesses not just personal sin but the sin of a community and its history. 'We have sinned' — not just 'I have sinned.' Corporate confession acknowledges that we are embedded in communities with shared failures before God.",
  },
  {
    type: "Confession",
    title: "1 John 1:9 and Assurance",
    desc: "'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' Confession is followed by promise, not probation. The goal is not guilt management but restored relationship — and the difference between guilt (I did wrong) and shame (I am wrong) is crucial here.",
  },
  // Thanksgiving
  {
    type: "Thanksgiving",
    title: "Gratitude as Disposition",
    desc: "Paul commands thanksgiving 'in all circumstances' (1 Thess 5:18) — not for all circumstances but in them. Thanksgiving is not denial of suffering but the discipline of noticing grace alongside it. It is a reorientation of attention that changes what we see.",
  },
  {
    type: "Thanksgiving",
    title: "Eucharistic Prayer",
    desc: "The word Eucharist comes from the Greek for thanksgiving. The Lord's Supper is a prayer of thanksgiving — for the body broken, the blood poured out, the new covenant sealed. Liturgical thanksgiving trains Christians to see all of life through the lens of what Christ has given.",
  },
  {
    type: "Thanksgiving",
    title: "Counting Specific Blessings",
    desc: "Research in positive psychology and the testimony of the saints converge: naming specific blessings — not generic gratitude — builds faith and reduces anxiety. Keep a running list. The practice reveals how much of life is unearned gift rather than entitled expectation.",
  },
  {
    type: "Thanksgiving",
    title: "Thanksgiving in Suffering",
    desc: "Paul writes his most thanksgiving-saturated letter (Philippians) from prison. Thanksgiving in suffering is not stoic resignation but the hard-won conviction that God is still good and still working. It is the prayer that the enemy most wants to silence.",
  },
  // Contemplation
  {
    type: "Contemplation",
    title: "Centering Prayer (and Its Controversy)",
    desc: "Thomas Keating popularized centering prayer — a method of silent prayer using a sacred word to return attention to God. Conservative evangelical critics (e.g., Tim Challies) worry it imports Eastern religious emptying-of-mind. Defenders argue the tradition is patristic. The debate is real; the hunger for contemplative depth is legitimate.",
  },
  {
    type: "Contemplation",
    title: "Lectio Divina",
    desc: "Lectio Divina (sacred reading) treats Scripture as a conversation with God: read slowly (lectio), meditate on a phrase (meditatio), respond in prayer (oratio), rest in God's presence (contemplatio). It is less controversial than centering prayer because it is explicitly Scripture-anchored.",
  },
  {
    type: "Contemplation",
    title: "The Prayer of Examen",
    desc: "Ignatian contemplation includes the Examen — not merely a technique but a form of receptive presence to God's activity in the day. Be still and know that I am God (Psalm 46:10) — contemplation is the practice of the 'be still,' trusting that God will do the 'knowing.'",
  },
  // Lament
  {
    type: "Lament",
    title: "Psalms of Lament as Model",
    desc: "One third of the Psalms are laments — honest complaints addressed to God. Psalm 13 ('How long, Lord? Will you forget me forever?'), Psalm 88 (which never resolves), and Lamentations model prayer that does not sanitize pain. Lament is addressed to God, not merely about him — it keeps the relationship alive under pressure.",
  },
  {
    type: "Lament",
    title: "Prayer as Protest",
    desc: "Job's comforters tell him to stop complaining; God at the end vindicates Job's honest protest over their pious platitudes (Job 42:7). Lament is not faithlessness — it is the refusal to pretend, directed toward the One who can do something about it. Walter Brueggemann: lament is the 'speech of the powerless to the powerful.'",
  },
  {
    type: "Lament",
    title: "Why God Welcomes Complaint",
    desc: "God does not rebuke the psalmist for 'How long will you hide your face from me?' He preserves these words in inspired Scripture. The willingness to complain to God rather than about him is a form of faith — it assumes God hears, that his justice matters, and that the relationship can bear honesty.",
  },
];

const OBSTACLE_ITEMS = [
  {
    title: "Prayerlessness",
    body: "The most universal obstacle is simply not praying. The confession of most Christians — even pastors — is that their prayer life is thinner than they want it to be. The gap between desire and practice is telling: we say prayer is important and then live as if it is not. The root is rarely theological; it is anthropological — distraction, comfort, self-sufficiency. We do not pray because we do not feel needy enough, and we do not feel needy enough because we are not paying attention to how genuinely dependent we are.",
  },
  {
    title: "Doubt and Unanswered Prayer",
    body: "When prayers seem to bounce off the ceiling — when nothing changes, when the child is not healed, when the marriage still ends — many simply stop praying. John of the Cross named this 'the dark night of the soul': a season of spiritual dryness in which God seems absent. His counsel was not to stop praying but to continue in faith without feeling. What to do: return to the basics (Scripture prayer, fixed rhythms), be honest with God about the doubt, and find a community that holds faith when you cannot.",
  },
  {
    title: "Guilt and Unworthiness",
    body: "'I haven't prayed in weeks, so I can't approach God now.' This is the logic of the older brother in the prodigal son parable — and notice: the older brother never returns home. The prodigal does, and the father runs. The model for approaching God after a drought of prayer is the prodigal who 'came to his senses' and simply got up and went back. God does not require a qualifying performance before prayer; he requires only the turning. The guilt that keeps us from prayer is itself the reason we need it.",
  },
  {
    title: "Busy-ness and Hurry",
    body: "The most commonly attributed quotation to Carl Jung in Christian circles: 'Hurry is not of the devil, it is the devil.' Whether or not Jung said it, the observation is accurate. Hurry is the enemy of prayer because prayer requires presence — and presence requires slowing. The result is a prayer life that is entirely crisis-driven: we pray when things fall apart, not as the daily structure that prevents falling apart. The solution is not finding more time but deciding that prayer is time, not a waste of it.",
  },
  {
    title: "Boredom in Prayer",
    body: "The attention economy — social media, streaming, notification culture — has atrophied the capacity for sustained, non-stimulating attention. Prayer is the opposite of the dopamine loop: it is slow, quiet, non-spectacular, and largely unrewarded in the short term. Practical helps that actually work: keep a prayer journal (giving the wandering mind a task), pray Scripture aloud (engaging the body), walking prayer (using physical motion), and very short sessions that are actually completed rather than long sessions that are not.",
  },
  {
    title: "Theological Uncertainty",
    body: "'What's the point of prayer if God already knows everything and has already decided?' This is the most sophisticated obstacle — and it is best answered not philosophically but relationally. Consider: you do not stop talking to a close friend because they know you well. Knowing does not replace speaking. Prayer is not primarily information transfer; it is relational presence. God ordains prayer as the means by which he works, and he ordains it because relationship — not efficiency — is the point. Prayer is formation, not information delivery.",
  },
];

const CATEGORY_COLORS: Record<FormCategory, string> = {
  Petition: GREEN,
  Intercession: PURPLE,
  Confession: "#EC4899",
  Thanksgiving: "#F59E0B",
  Contemplation: "#8B5CF6",
  Lament: "#3B82F6",
};

export default function TheologyOfPrayerPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedJesus, setSelectedJesus] = useState<string>(JESUS_EPISODES[0].id);
  const [activeFormFilter, setActiveFormFilter] = useState<FormCategory | "All">("All");

  function toggleAccordion(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const visibleCards =
    activeFormFilter === "All"
      ? FORM_CARDS
      : FORM_CARDS.filter((c) => c.type === activeFormFilter);

  const selectedEpisode = JESUS_EPISODES.find((e) => e.id === selectedJesus) ?? JESUS_EPISODES[0];

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Prayer" },
    { id: "jesus", label: "Jesus on Prayer" },
    { id: "forms", label: "Forms of Prayer" },
    { id: "obstacles", label: "Obstacles to Prayer" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: TEXT, margin: "0 0 10px" }}>
            The Theology of Prayer
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Why pray if God already knows? What are we actually doing when we pray? Explore the theology, the teaching of Jesus, the forms, and the honest obstacles.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}` }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 6px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Prayer */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => {
              const key = `theology-${i}`;
              const isOpen = !!expanded[key];
              return (
                <div
                  key={key}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggleAccordion(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 22px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 16, color: isOpen ? GREEN : TEXT }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, marginLeft: 12, flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px", color: TEXT, fontSize: 15, lineHeight: 1.85 }}>
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Jesus on Prayer */}
        {activeTab === "jesus" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ width: 220, flexShrink: 0 }}>
              {JESUS_EPISODES.map((ep) => {
                const active = selectedJesus === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => setSelectedJesus(ep.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 16px",
                      marginBottom: 6,
                      borderRadius: 10,
                      border: `1px solid ${active ? PURPLE : BORDER}`,
                      background: active ? `${PURPLE}22` : CARD,
                      color: active ? TEXT : MUTED,
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 14, color: active ? GREEN : TEXT, marginBottom: 3 }}>{ep.title}</div>
                    <div style={{ fontSize: 11, color: active ? PURPLE : MUTED, fontWeight: 600 }}>{ep.ref}</div>
                  </button>
                );
              })}
            </div>

            {/* Right detail — sticky */}
            <div style={{ flex: 1, position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: GREEN, margin: 0 }}>{selectedEpisode.title}</h2>
                  <span style={{ background: `${PURPLE}25`, color: PURPLE, fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 10 }}>
                    {selectedEpisode.ref}
                  </span>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, margin: 0 }}>{selectedEpisode.detail}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Forms of Prayer */}
        {activeTab === "forms" && (
          <div>
            {/* Filter buttons */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              <button
                onClick={() => setActiveFormFilter("All")}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: `1px solid ${activeFormFilter === "All" ? GREEN : BORDER}`,
                  background: activeFormFilter === "All" ? `${GREEN}18` : "transparent",
                  color: activeFormFilter === "All" ? GREEN : MUTED,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                All
              </button>
              {FORM_CATEGORIES.map((cat) => {
                const active = activeFormFilter === cat;
                const color = CATEGORY_COLORS[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFormFilter(cat)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 20,
                      border: `1px solid ${active ? color : BORDER}`,
                      background: active ? `${color}18` : "transparent",
                      color: active ? color : MUTED,
                      fontWeight: 700,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Card grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
              {visibleCards.map((card, i) => {
                const color = CATEGORY_COLORS[card.type];
                return (
                  <div
                    key={i}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}
                  >
                    <div>
                      <span
                        style={{
                          background: `${color}18`,
                          color,
                          fontSize: 11,
                          fontWeight: 800,
                          padding: "3px 10px",
                          borderRadius: 8,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {card.type}
                      </span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: TEXT }}>{card.title}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Obstacles to Prayer */}
        {activeTab === "obstacles" && (
          <div>
            {OBSTACLE_ITEMS.map((item, i) => {
              const key = `obstacle-${i}`;
              const isOpen = !!expanded[key];
              return (
                <div
                  key={key}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggleAccordion(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 22px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 16, color: isOpen ? PURPLE : TEXT }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, marginLeft: 12, flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px", color: TEXT, fontSize: 15, lineHeight: 1.85 }}>
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
