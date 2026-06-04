"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "'Do Not Fear' — The Most Repeated Command in Scripture", verse: "Isaiah 41:10", body: "The command 'do not fear' and its variants ('do not be afraid,' 'fear not,' 'take courage') appear over 365 times in Scripture — one for every day of the year. This is not coincidence. God knows his people will be afraid. The command is not a rebuke to emotional weakness; it is a promise attached to a reason: 'Do not fear, for I am with you; do not be dismayed, for I am your God' (Isaiah 41:10). The antidote to fear is not absence of threat — it is presence of God." },
  { title: "Fear of God vs. Fear of Everything Else", verse: "Proverbs 29:25", body: "'The fear of man lays a snare, but whoever trusts in the Lord is safe' (Proverbs 29:25). Scripture makes a sharp distinction between two kinds of fear: the fear of God — reverent awe before his holiness, beauty, and power — and the fear of everything else. The fear of God is the beginning of wisdom (Proverbs 9:10) and the foundation of right living. Paradoxically, those who truly fear God find themselves freed from every other fear. You cannot fear both God and man with equal force — one will displace the other." },
  { title: "Fear as an Invitation to Trust", verse: "Psalm 56:3", body: "'When I am afraid, I put my trust in you' (Psalm 56:3). David wrote this while fleeing for his life from Saul — not from a place of safety but from the middle of danger. The Psalms do not pretend fear away; they bring it directly to God. Fear is not the opposite of faith; it is the occasion for it. The man who has nothing to fear has no reason to trust. Fear, brought to God, becomes an invitation to discover his faithfulness in the specific place where you are afraid." },
  { title: "Jesus Was Afraid in Gethsemane", verse: "Mark 14:33", body: "In Gethsemane, Jesus was 'deeply distressed and troubled' — the Greek words suggest horror, anguish, and dread. He fell to the ground and prayed that the hour would pass. He asked the disciples to stay awake with him. The Son of God, in his humanity, experienced the full weight of fear before what was coming. He did not perform courage; he cried out to the Father in honest prayer. He is therefore 'able to empathize with our weaknesses' (Hebrews 4:15) — including the weakness of fear. He did not tell himself to be braver. He told the Father he was afraid." },
  { title: "Perfect Love Drives Out Fear", verse: "1 John 4:18", body: "'There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love' (1 John 4:18). John makes a diagnostic claim: chronic, punishing fear — the fear that cripples and condemns — is a sign of incomplete reception of love. It is not conquered by willpower but by love received and believed. The healing of fear is not a matter of courage training but of coming to believe, deeply, that you are loved by God without condition and without reserve." },
];

const FEAR_TYPES = [
  { type: "Fear of Death", color: "#EF4444", desc: "The fundamental human fear — the fear of nonexistence, loss of self, and the unknown beyond death.", response: "Scripture addresses this directly and repeatedly. Jesus went through death and came out the other side. 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me' (Psalm 23:4). Paul: 'For to me, to live is Christ and to die is gain' (Philippians 1:21). Fear of death loses its grip when eternal life is not a theological abstraction but a living hope. Engage the resurrection with both intellectual seriousness and devotional warmth.", resource: "N.T. Wright, Surprised by Hope; C.S. Lewis, A Grief Observed" },
  { type: "Fear of Rejection", color: PURPLE, desc: "The fear that you are not loved, not accepted, not wanted — by God, by community, by family, by those whose opinion shapes your identity.", response: "Romans 8:38-39 is the most complete answer: nothing in all creation can separate you from the love of God in Christ Jesus. Not death, not angels, not powers, not height, not depth, not anything. The person who fully believes this no longer lives for the approval of anyone whose love is conditional. Rejection by people is real and painful; it is not, however, the final word about your worth.", resource: "Henri Nouwen, The Return of the Prodigal Son" },
  { type: "Fear of the Future", color: "#F59E0B", desc: "Chronic anxiety about what has not yet happened — illness, financial ruin, relationship breakdown, death of loved ones, a world that feels increasingly unstable.", response: "Jesus addresses future-fear directly in Matthew 6:25-34: 'Who of you by worrying can add a single hour to your life?' The antidote he gives is not positive thinking but attention to the Father's care for sparrows and lilies — retraining perception toward what is actually true about God's provision. One day at a time is not a cliché; it is the specific prescription of the Lord's Prayer: 'Give us this day our daily bread.'", resource: "Philippians 4:6-7; Randy Alcorn, Heaven" },
  { type: "Fear of Failure", color: "#10B981", desc: "The fear that you will not be enough — that you will disappoint God, those you love, or yourself; that your best will not be sufficient.", response: "The parable of the talents shows that the only servant rebuked was the one who buried his talent out of fear (Matthew 25:25). The fear of failure, left unaddressed, produces exactly the failure it fears. The gospel frees you to attempt and fail without losing your standing before God. Failure under grace is not condemnation; it is data. The courageous Christian is not fearless — they are free to fail because their identity does not depend on their performance.", resource: "Brené Brown meets Romans 8:1; Dane Ortlund, Gentle and Lowly" },
  { type: "Fear of Suffering", color: "#3B82F6", desc: "The dread of pain, loss, illness, grief, and hardship that might be coming — the terror of what you might have to endure.", response: "The NT consistently addresses suffering not by preventing it but by revealing its purpose. James 1:2-4: trials produce tested faith, perseverance, and maturity. Romans 8:28: all things work together for good. Not that suffering is good — but that God can work through what is not good to produce what is. The person who has walked through suffering with God discovers something the person who has been protected from it does not know: that God is present in the worst of it.", resource: "Tim Keller, Walking with God through Pain and Suffering" },
  { type: "Fear of People", color: "#EC4899", desc: "The fear of what others think — of judgment, criticism, mockery, social exclusion. The most common fear in modern Western culture.", response: "'The fear of man lays a snare, but whoever trusts in the Lord is safe' (Proverbs 29:25). People-pleasing is the predictable outcome of people-fearing. It corrupts witness, deforms relationships, and produces a life lived for an audience that is never satisfied. The cure is not indifference to others but the steady, growing conviction that God's opinion of you in Christ is the only one that is final and true.", resource: "Ed Welch, When People Are Big and God Is Small" },
];

const STORIES = [
  {
    id: "disciples",
    name: "Disciples in the Storm",
    ref: "Mark 4:35-41",
    color: "#3B82F6",
    context: "Sea of Galilee. Night. A sudden violent storm. Jesus asleep in the stern.",
    story: "The disciples were experienced fishermen — they were not easily alarmed by rough water. But this storm was different: the waves were breaking over the boat, and it was swamping. They woke Jesus, terrified: 'Teacher, don't you care if we drown?' (Mark 4:38). Jesus got up, rebuked the wind and the waves. Then he asked them: 'Why are you so afraid? Do you still have no faith?' — not 'why were you afraid?' but 'why are you afraid?' after the calming. As if to say: what you saw happen when you cried out — that should change how you live with the memory of fear.",
    lesson: "The disciples' fear was rational given the storm. Jesus's question was not 'why did you feel fear?' but 'why does fear have the final word when you have already seen who I am?' Fear is not the problem; faith-defeating fear is. The man who says 'Lord, I am terrified — please help me' is not rebuked. The disciples were rebuked for letting the terror override the evidence of who was with them.",
  },
  {
    id: "gideon",
    name: "Gideon: The Smallest, the Least",
    ref: "Judges 6:11-16",
    color: "#F59E0B",
    context: "Israel under Midianite oppression. Gideon threshing wheat in secret to hide it from the enemy.",
    story: "The angel of the Lord appeared to Gideon and said: 'The Lord is with you, mighty warrior.' Gideon's response was essentially: if the Lord is with us, where is all this suffering coming from? The angel's command — 'Go in the strength you have and save Israel out of Midian's hand' — was met with Gideon's objection: 'My clan is the weakest in Manasseh, and I am the least in my family.' God's answer: 'I will be with you.' Note that God did not argue with Gideon's self-assessment. He simply redirected attention from Gideon's strength to God's presence.",
    lesson: "God's response to Gideon's fear is not 'you are stronger than you think' but 'I will be with you.' The Christian answer to inadequacy is not a pumped-up self-confidence but a God-confidence grounded in presence. Gideon was genuinely the weakest. The army God gave him was stripped down to 300 from 32,000. God works through weakness precisely to demonstrate that the outcome is his, not theirs. Fear of inadequacy is addressed not by becoming adequate but by walking with the One who is.",
  },
  {
    id: "elijah",
    name: "Elijah Under the Broom Tree",
    ref: "1 Kings 19:1-8",
    color: GREEN,
    context: "After the great victory on Mount Carmel. Elijah runs from Jezebel's death threat.",
    story: "Elijah had just called fire down from heaven and slaughtered 450 prophets of Baal. The next day, Jezebel sent a message: 'May the gods deal with me severely if I do not make your life like one of those prophets by this time tomorrow.' Elijah fled — a day's journey into the desert — sat under a broom tree, and asked to die: 'I have had enough, Lord. Take my life.' The angel came and fed him, twice. 'The journey is too great for you.' God did not rebuke the fear or the despair. He fed Elijah first and spoke to him second.",
    lesson: "Even Elijah — the fire-calling, rain-stopping, dead-raising prophet — ran from a single threat. Fear does not respect your spiritual résumé. God's response is instructive: before theology, before rebuke, before recommissioning — food and rest. The body's exhaustion is not separate from the soul's fear. Spiritual desolation often follows great exertion. And God's pastoral response is not first to correct the theology but to attend to the body, then gently ask: 'What are you doing here, Elijah?'",
  },
  {
    id: "mary",
    name: "Do Not Be Afraid, Mary",
    ref: "Luke 1:26-38",
    color: PURPLE,
    context: "Nazareth. Gabriel appears to a teenage girl with the most disruptive possible news.",
    story: "Gabriel appeared to Mary and said: 'Greetings, you who are highly favored! The Lord is with you.' Mary was 'greatly troubled at his words and wondered what kind of greeting this might be.' The angel continued: 'Do not be afraid, Mary; you have found favor with God.' Then the announcement: you will conceive the Son of God. How can this be? 'The Holy Spirit will come on you, and the power of the Most High will overshadow you.' Mary's response: 'I am the Lord's servant. May your word to me be fulfilled.' Fear, confusion, and then surrender — in that order.",
    lesson: "Mary's surrender did not wait for fear to resolve. She said yes while still perplexed and afraid. Faith is not the absence of fear — it is acting in accordance with what you trust while fear is still present. Mary's courage was not fearlessness; it was faithful action despite fear. The announcement also demonstrates that God's 'do not fear' is not always followed by easy circumstances. Mary's yes led to scandal, poverty, exile, and eventually watching her son die. 'Do not fear' means God will be with you — not that the difficult thing will not happen.",
  },
  {
    id: "paul-prison",
    name: "Paul's Night Vision in Corinth",
    ref: "Acts 18:9-10",
    color: "#EC4899",
    context: "Corinth. Paul is staying with Aquila and Priscilla, preaching in the synagogue.",
    story: "One night Paul had a vision: 'Do not be afraid; keep on speaking, do not be silent. For I am with you, and no one is going to attack and harm you, because I have many people in this city.' The previous context: Paul had been driven out of Thessalonica, Berea, and Athens by hostility. He had arrived in Corinth alone and anxious. He later wrote to the Corinthians that he had come to them 'in weakness, in fear, and with much trembling' (1 Corinthians 2:3). God gave him a vision not because Paul was naturally bold, but because Paul was genuinely afraid.",
    lesson: "Paul — the man who would eventually be imprisoned, beaten, shipwrecked, and executed — was afraid in Corinth. He admitted it in a letter to the very people he was afraid to face. God's response was personal, specific, and pastoral: 'I am with you. You have more allies here than you know.' The courage of Acts was not Paul's natural temperament; it was the fruit of specific divine reassurance received in specific moments of fear. Spiritual courage is not the elimination of fear but the refusal to let it be the last word.",
  },
];

const PRACTICES = [
  { title: "Name the Specific Fear", icon: "🎯", color: "#EF4444", desc: "Fear gains power from vagueness. Name exactly what you are afraid of: not 'the future' but 'I am afraid that my marriage will end.' Once named, bring it to God specifically — the Philippians 4 prayer pattern — and find a specific promise that speaks to it.", steps: ["Write the fear in a complete sentence", "Identify which category it falls into (death, rejection, failure, etc.)", "Find the Scripture promise that addresses that specific fear", "Pray the promise back to God over the fear"] },
  { title: "Memorize 'Do Not Fear' Passages", icon: "📖", color: PURPLE, desc: "Scripture memorization for fear works by giving the mind specific, true sentences to return to when the emotion spikes. The goal is a reservoir of truth accessible in the moment of acute fear.", steps: ["Start with Isaiah 41:10 — 'Do not fear, for I am with you'", "Add Psalm 23:4, Psalm 56:3, Matthew 6:25-27", "Memorize in context (the surrounding verses)", "Rehearse during non-fearful times so it's accessible during fear"] },
  { title: "Prayer in Real Time", icon: "🙏", color: GREEN, desc: "The disciples called out in the storm. Gideon asked for signs. Mary said 'how can this be?' The NT pattern is immediate, honest cry to God in the moment of fear — not polished prayer but genuine distress brought directly to the Father.", steps: ["Pray the moment fear rises — don't wait until you're calm", "Be specific and honest: 'I am afraid that...'", "Ask for what you need: peace, clarity, presence, protection", "End with an act of trust, even a small one"] },
  { title: "Reframe Through Theology", icon: "🧠", color: "#3B82F6", desc: "Fear is often driven by an incomplete picture. When you are afraid of the future, you are implicitly assuming it is out of God's governance. Deliberate theological reframing — 'what do I believe about God that is relevant to this fear?' — is a spiritual discipline.", steps: ["Ask: what does this fear assume about God?", "Identify the false premise (God is absent, God doesn't care, God can't handle this)", "Replace with the true theological claim from Scripture", "Practice this slowly until it becomes habitual"] },
  { title: "Community as Courage", icon: "🤝", color: "#F59E0B", desc: "Fear is amplified in isolation. The disciples were together when Jesus appeared in the locked room. Elijah's fear escalated after he was alone. Bringing fear into community — not for fixing, but for witness — changes its character.", steps: ["Tell one trusted person what you are afraid of", "Ask them to pray with you specifically about that fear", "Receive their presence as a form of God's reassurance", "Be the community for someone else's fear"] },
  { title: "Professional Help for Chronic Fear", icon: "🩺", color: "#10B981", desc: "Chronic, debilitating fear is often physiological — the nervous system's threat-detection is dysregulated, and addressing it may require therapy, medication, or both. Seeking help is wisdom and stewardship, not a failure of faith.", steps: ["Distinguish situational fear from chronic anxiety disorder", "Consult a doctor if fear is persistent and limiting your life", "Consider a therapist who integrates faith and psychological treatment", "Medical and spiritual care are complementary, not competing"] },
];

type Tab = "theology" | "types" | "stories" | "practices" | "videos";

export default function FearPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_fear_tab", "theology");
  const [selectedType, setSelectedType] = usePersistedState("vine_fear_selected_type", "Fear of Death");
  const [selectedStory, setSelectedStory] = usePersistedState("vine_fear_selected_story", "disciples");

  const fearType = FEAR_TYPES.find(f => f.type === selectedType)!;
  const story = STORIES.find(s => s.id === selectedStory)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🛡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Fear & Courage</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'Do not fear' appears over 365 times in Scripture — one for every day. Fear is not condemned; it is met with presence. The antidote is not willpower but the reality of a God who is with you.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "types" as const, label: "Types of Fear", icon: "🔍" },
            { id: "stories" as const, label: "Bible Stories", icon: "📜" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0, flex: 1 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "types" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {FEAR_TYPES.map(f => (
                <button type="button" key={f.type} onClick={() => setSelectedType(f.type)}
                  style={{ width: "100%", background: selectedType === f.type ? `${f.color}15` : "transparent", border: `1px solid ${selectedType === f.type ? f.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selectedType === f.type ? f.color : TEXT, fontWeight: 700, fontSize: 13 }}>{f.type}</span>
                </button>
              ))}
            </div>
            {fearType && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${fearType.color}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: fearType.color, fontWeight: 900, fontSize: 22, marginBottom: 14 }}>{fearType.type}</h2>
                  <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>WHAT IT IS</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{fearType.desc}</p>
                  </div>
                  <div style={{ background: `${fearType.color}08`, border: `1px solid ${fearType.color}20`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                    <div style={{ color: fearType.color, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>BIBLICAL RESPONSE</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{fearType.response}</p>
                  </div>
                  <div style={{ color: MUTED, fontSize: 13 }}>
                    <span style={{ fontWeight: 700 }}>Further reading: </span>{fearType.resource}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "stories" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {STORIES.map(s => (
                <button type="button" key={s.id} onClick={() => setSelectedStory(s.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedStory === s.id ? `${s.color}18` : CARD, border: `1px solid ${selectedStory === s.id ? s.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedStory === s.id ? s.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{s.ref}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${story.color}40`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <h2 style={{ color: story.color, fontWeight: 900, fontSize: 19, margin: 0 }}>{story.name}</h2>
                <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, marginLeft: 12, whiteSpace: "nowrap" }}><VerseRef reference={story.ref} /></span>
              </div>
              <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{story.context}</div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>THE STORY</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{story.story}</p>
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${story.color}` }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>WHAT FEAR LOOKS LIKE HERE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{story.lesson}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PRACTICES.map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{p.icon}</span>
                  <h3 style={{ color: p.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on fear, courage, and trusting God in the face of what frightens us.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "cajScztdhJA", title: "Why God Says 'Fear Not'", channel: "Timothy Keller", description: "Keller explores why 'do not fear' is the most repeated command in Scripture, and what it means that the antidote to fear is always the presence of God, not the removal of the threat." },
                  { videoId: "Hr3PkGXYRvI", title: "Courage: Fear and Faith", channel: "Ligonier Ministries", description: "R.C. Sproul addresses the relationship between courage and faith — why the courageous Christian is not fearless but fear-conquering through trust in God's sovereignty." },
                  { videoId: "haZPE6KxzPs", title: "Overcoming Fear with Faith", channel: "Desiring God", description: "John Piper on how faith does not eliminate fear but provides the resources to act in spite of it — drawing from Paul's 'weakness, fear, and much trembling' in Corinth." },
                  { videoId: "F9oOD0Hlewo", title: "When Fear Paralyzes: The God Who Is With You", channel: "Timothy Keller Sermons", description: "An exposition of Isaiah 41:10 — 'Do not fear, for I am with you' — and what it means that God's answer to every fear is his presence, not the removal of danger." },
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
      </main>
      <Footer />
    </div>
  );
}
