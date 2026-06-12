"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

type Tab = "theology" | "sufficiency" | "vs-complacency" | "suffering" | "practices" | "videos";

const TAB_LABELS: Record<Tab, string> = {
  theology:       "Biblical Theology",
  sufficiency:    "The Hebrew Concept",
  "vs-complacency": "Contentment vs. Complacency",
  suffering:      "Contentment in Suffering",
  practices:      "Gratitude Practices",
  videos:         "Videos",
};

const VIDEOS = [
  {
    videoId: "5RoFuNZKptI",
    title: "The Secret of Contentment — John Piper",
    channel: "Desiring God",
    description:
      "Piper unpacks Philippians 4:11 — why contentment is not a personality trait but a learned discipline rooted in Christ as the all-sufficient treasure.",
  },
  {
    videoId: "4ZdmNMuIYMs",
    title: "Christian Contentment — Jeremiah Burroughs",
    channel: "Ligonier Ministries",
    description:
      "A walk through Burroughs&rsquo;s classic The Rare Jewel of Christian Contentment — what the Puritans understood about the soul&rsquo;s rest that modern culture has forgotten.",
  },
  {
    videoId: "nIoiXKEKFXk",
    title: "Contentment in a Culture of Comparison",
    channel: "The Gospel Coalition",
    description:
      "How social media and consumer culture weaponize discontentment — and how the gospel reshapes desire toward sufficiency and gratitude.",
  },
];

const THEOLOGY_POINTS = [
  {
    title: "I Have Learned — The Grammar of Contentment",
    color: GREEN,
    ref: "Philippians 4:11",
    body: "Paul&rsquo;s statement is grammatically precise and theologically explosive: &ldquo;I have learned, in whatever state I am, to be content.&rdquo; The verb is memathaeka — perfect tense, indicating a completed learning that continues to shape the present. Contentment is not a gift Paul was born with. It was not a temperamental default. It was a discipline acquired through experience — through being humiliated and through abounding, through imprisonment and shipwreck and stoning and betrayal. The man who wrote this letter was in chains. He had been beaten with rods five times, flogged thirty-nine times, stoned once and left for dead, shipwrecked three times. His contentment is not the contentment of the man with no problems. It is the contentment of the man who has been through everything and found Christ sufficient through all of it.",
  },
  {
    title: "The Secret: Strength Through Christ",
    color: PURPLE,
    ref: "Philippians 4:12-13",
    body: "The famous verse — &ldquo;I can do all things through Christ who strengthens me&rdquo; — is not about athletic achievement or business success. It is the secret of contentment. The word &ldquo;secret&rdquo; (memuemai) means to be initiated — as into a mystery cult. Paul has been initiated into a secret knowledge that the world does not possess: that Christ is sufficient for every state. He strengthens (endunamounti — present participle, continual ongoing strengthening) both the humbling and the abounding. The secret of contentment is not a technique; it is a Person. The soul that finds its satisfaction in Christ is free from the tyranny of circumstances, because circumstances do not determine whether Christ is sufficient — he always is.",
  },
  {
    title: "The God Who Is Enough",
    color: GOLD,
    ref: "Genesis 17:1; 2 Corinthians 12:9",
    body: "El Shaddai — one of the oldest names of God in Scripture — is most often translated &ldquo;God Almighty,&rdquo; but many scholars connect it to the Hebrew root shadad (to be sufficient, to be enough). God introduces himself to Abraham as the God who is enough. This is not a name about power alone — it is a name about sufficiency. When Paul pleads for the removal of his thorn in the flesh and is answered, &ldquo;My grace is sufficient for you,&rdquo; the Greek word is arkei — it is enough. God does not promise to remove every trial. He promises himself as sufficient for every trial. This is the foundation of contentment: the character of God himself as the always-enough one.",
  },
  {
    title: "Godliness With Contentment Is Great Gain",
    color: TEAL,
    ref: "1 Timothy 6:6-8",
    body: "Paul writes to Timothy that &ldquo;godliness with contentment is great gain,&rdquo; then immediately locates the logic: &ldquo;We brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.&rdquo; This is not an ascetic denial of material goods — it is a theological recalibration of desire. The word for &ldquo;gain&rdquo; (porismos) is the language of commerce: a profitable enterprise. Paul is making an economic argument. The person who compounds godliness with contentment has found the only investment that actually pays. The competitor — the drive for more, for status, for financial security beyond sufficiency — is not neutral. Paul says it is a trap, a snare, and a root that produces all manner of evil (6:9-10). Contentment is not poverty. It is freedom.",
  },
  {
    title: "The Rare Jewel — Burroughs on Contentment",
    color: BLUE,
    ref: "The Rare Jewel of Christian Contentment (1648) — Jeremiah Burroughs",
    body: "Burroughs defines Christian contentment as &ldquo;that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God&rsquo;s wise and fatherly disposal in every condition.&rdquo; Several elements are worth unpacking. First: it is inward — not a performance of happiness for others but a genuine orientation of soul. Second: it is quiet — not the loud resignation of stoicism, but the peace of a child in its father&rsquo;s arms. Third: it freely submits — not coerced by circumstances but freely given, because the contented Christian has understood that God&rsquo;s disposal is wise and fatherly. Fourth: it delights — not merely tolerates. Burroughs says the contented Christian does not merely endure his circumstances but learns to find God in them, and finding God in them, finds them sufficient. The Rare Jewel remains the greatest extended treatment of contentment ever written. It is four centuries old and has never been superseded.",
  },
];

const SUFFICIENCY_POINTS = [
  {
    title: "Dayenu — It Would Have Been Enough",
    color: GOLD,
    ref: "Exodus Passover Liturgy",
    body: "The Hebrew Passover hymn Dayenu is a sustained meditation on sufficiency. Each stanza recounts one act of God&rsquo;s deliverance and declares: Dayenu — &ldquo;It would have been enough.&rdquo; If God had only brought us out of Egypt, dayenu. If he had only given us the Sabbath, dayenu. If he had only brought us to the Land, dayenu. The liturgy is training in a particular posture of soul: the recognition that each gift was already sufficient, that God was not obligated to give the next one, and that the accumulation of gifts is an act of superabundant grace. This is the antithesis of the entitlement that fuels discontentment. The contented soul has learned dayenu — to stop at each gift and say: this was enough. Everything after this is more than I deserved.",
  },
  {
    title: "Shalom — Wholeness, Not Merely Peace",
    color: GREEN,
    ref: "Numbers 6:24-26; Jeremiah 29:11",
    body: "The Hebrew word shalom is inadequately translated &ldquo;peace.&rdquo; It means comprehensive wholeness — the flourishing of every dimension of life in right relationship. The Aaronic blessing (&ldquo;The LORD bless you and keep you; the LORD make his face shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you shalom&rdquo;) is not a wish for the absence of trouble. It is a declaration of comprehensive well-being. When Jeremiah writes to the exiles in Babylon, he tells them God knows the plans he has for them — plans for shalom and not for evil. This was written to people in exile, who had lost their land, their temple, and their king. Shalom was not the promise of restored circumstances. It was the promise of God&rsquo;s comprehensive care within those circumstances. Contentment is the human posture that corresponds to divine shalom.",
  },
  {
    title: "The Manna Principle — Daily Bread",
    color: TEAL,
    ref: "Exodus 16:14-20; Matthew 6:11",
    body: "The manna in the wilderness came every morning. It could not be stored; what was kept overnight bred worms and stank (Exodus 16:20). The provision was deliberately structured to prevent accumulation and to train a daily trust. This is why Jesus teaches us to pray for today&rsquo;s bread — not this week&rsquo;s bread, not a month&rsquo;s supply. The prayer is a practice of dependence, a daily reorientation of the soul toward God as provider. The anxiety that drives discontentment is usually anxiety about tomorrow: what if this is not enough? The manna principle answers: it was enough today. God gave enough today. Tomorrow you will rise and find enough again. The contented soul has internalized this pattern: daily sufficiency is the design, not a defect.",
  },
  {
    title: "Enough Is a Theological Word",
    color: PURPLE,
    ref: "Proverbs 30:7-9; Hebrews 13:5",
    body: "Agur&rsquo;s prayer in Proverbs 30 is one of the most theologically profound passages in Wisdom literature: &ldquo;Give me neither poverty nor riches; feed me with the food that is needful for me, lest I be full and deny you and say, &lsquo;Who is the LORD?&rsquo; or lest I be poor and steal and profane the name of my God.&rdquo; This is the prayer of a man who understands himself — he knows what abundance does to him, and he knows what poverty does to him. He asks for the middle: enough. The writer to the Hebrews grounds contentment explicitly in God&rsquo;s character: &ldquo;Keep your life free from love of money, and be content with what you have, for he has said, &lsquo;I will never leave you nor forsake you.&rsquo;&rdquo; (Heb 13:5). Contentment is possible because of the promise. Enough is a theological word — it describes what God has given, not just what circumstances provide.",
  },
];

const VS_COMPLACENCY = [
  {
    color: GREEN,
    title: "What Contentment Is",
    desc: "Contentment is the settled peace of a soul that has found its rest in God and is not dependent on circumstances to supply what only God can give. It is compatible with grief, with longing for change, with ambitious labor, and with honest acknowledgment that things are not as they should be. Paul was content in prison while simultaneously praying for release and working to plant churches. The contented person is not passive — he acts, labors, and pursues legitimate goods. But his peace does not depend on obtaining them.",
    points: [
      "Contentment is active — it pursues change where change is right",
      "Contentment grieves loss — it does not deny that suffering is real",
      "Contentment is rooted in God&rsquo;s character, not in circumstances",
      "Contentment longs for a better world while trusting God in this one",
      "Contentment is learned — it grows through trial and through grace",
    ],
  },
  {
    color: "#EF4444",
    title: "What Contentment Is Not",
    desc: "Contentment is not complacency. Complacency is the refusal to labor for what is right — the passive acceptance of injustice, sin, suffering, or mediocrity because fighting would be uncomfortable. Complacency is the slave master&rsquo;s favorite theology: &lsquo;Be content.&rsquo; It is the abuser&rsquo;s tool and the oppressor&rsquo;s friend. Biblical contentment is never an excuse for inaction. The prophets were not content with Israel&rsquo;s idolatry. Paul was not content with the Corinthians&rsquo; divisions. Nehemiah was not content with Jerusalem&rsquo;s broken walls. Holy discontent — the refusal to accept what God refuses to accept — is not the opposite of contentment. It is its companion.",
    points: [
      "Contentment does not mean accepting injustice as God&rsquo;s will",
      "Contentment does not mean suppressing grief or longing",
      "Contentment does not mean refusing to pray for change",
      "Contentment does not mean complacency about sin — yours or others&rsquo;",
      "Contentment does not mean the world is fine as it is",
    ],
  },
  {
    color: GOLD,
    title: "Holy Discontent",
    desc: "C.S. Lewis wrote that if we find in ourselves a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world. The longing that drives us — the sense that things are not as they should be, that we were made for something more — is not a failure of contentment. It is the ache of a world that is not yet fully redeemed. The contented Christian holds two things at once: deep peace in God&rsquo;s present sufficiency, and fierce longing for the world as it will be. These are not contradictions. They are the twin marks of a soul that is simultaneously at rest in God and straining toward the coming Kingdom.",
    points: [
      "Longing for heaven is not discontentment — it is eschatological hope",
      "Mourning over sin is not discontentment — it is righteousness",
      "Working for justice is not discontentment — it is obedience",
      "Praying for healing is not discontentment — it is faith",
      "The Kingdom is not yet — and the Christian lives in that tension with peace",
    ],
  },
];

const SUFFERING_POINTS = [
  {
    color: PURPLE,
    title: "The Thorn in the Flesh",
    ref: "2 Corinthians 12:7-10",
    body: "Three times Paul pleaded with God to remove the thorn. Three times God answered: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; Paul does not explain what the thorn was — and the ambiguity is instructive. Whatever your thorn — chronic pain, depression, a broken relationship, a disability, a fear that never quite goes away — the answer is the same. Not removal, but sufficiency. Paul&rsquo;s response is extraordinary: &ldquo;Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.&rdquo; The contented sufferer does not pretend the thorn is not there. He has discovered that the thorn is the site of the most intense experience of Christ&rsquo;s power. The weakness that he once prayed away has become the ground of his deepest contentment.",
  },
  {
    color: TEAL,
    title: "The Peace That Passes Understanding",
    ref: "Philippians 4:6-7",
    body: "Immediately before his statement about contentment, Paul writes: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; This peace is not the peace of good circumstances. It &lsquo;surpasses understanding&rsquo; — it cannot be explained by reference to one&rsquo;s situation. It is a peace that does not make sense from the outside. It was Paul&rsquo;s peace in prison. It was Stephen&rsquo;s peace at his stoning. It was the peace of the early martyrs who sang as they died. This is the most verifiable supernatural phenomenon in church history: the peace of the dying Christian who has found Christ sufficient. It passes understanding because it transcends circumstances entirely.",
  },
  {
    color: GREEN,
    title: "Suffering as School",
    ref: "Romans 5:3-5; James 1:2-4",
    body: "Paul says we rejoice in suffering, because suffering produces endurance, endurance produces character, character produces hope, and hope does not put us to shame. James says to count it all joy when trials come, because the testing of faith produces steadfastness. The grammar matters: James does not say if you fall into trials but when. Trials are not anomalies in the Christian life. They are the curriculum. Contentment is not a virtue you develop in comfort — it is a virtue you develop through the school of suffering. The same suffering that tempts you to believe God is insufficient is, in God&rsquo;s strange economy, the very means by which you discover that he is not. Every suffering endured in faith becomes evidence. The man who has been through the worst and found God faithful there is the man who has earned the right to say he is content.",
  },
  {
    color: GOLD,
    title: "Lament and Contentment Together",
    ref: "Psalm 88; Lamentations 3:21-26",
    body: "Psalm 88 is the darkest psalm in the psalter. It ends with &ldquo;darkness is my closest friend.&rdquo; There is no resolution, no uplift, no turn to praise. It is raw, honest, desolate. And it is Scripture. Biblical contentment does not require the suppression of lament. Jeremiah lamented. Job lamented. Jesus lamented (&ldquo;My God, my God, why have you forsaken me?&rdquo;). Lament is not the opposite of contentment — it is faith in the form of honest pain directed toward a God who hears. Lamentations 3 moves from the depths of &ldquo;he has driven me into darkness&rdquo; to the anchor of &ldquo;The steadfast love of the LORD never ceases.&rdquo; The contented soul in suffering does not perform peace. It brings the real pain to the real God, and finds — sometimes slowly — that he is still enough.",
  },
];

const PRACTICES = [
  {
    color: GREEN,
    title: "The Daily Examen of Gratitude",
    desc: "Ignatius of Loyola&rsquo;s daily Examen traditionally closes with a review of consolations — moments of grace, gifts received, evidence of God&rsquo;s presence in the ordinary. This practice is not positive thinking — it is attentional training. The discontented soul scans for what is lacking. The grateful soul scans for what has been given. Over time, the practice rewires what you notice first.",
    steps: [
      "Set aside 10 minutes at day&rsquo;s end",
      "Ask: where did I experience grace today — even in small things?",
      "Name three specific gifts, not categories: not &lsquo;health&rsquo; but &lsquo;the conversation with my daughter at breakfast&rsquo;",
      "Offer each gift back to God with a word of thanks",
      "Practice this for 30 consecutive days and observe what changes",
    ],
  },
  {
    color: PURPLE,
    title: "Scripture Saturation",
    desc: "Paul&rsquo;s contentment was not a technique — it was the fruit of a mind saturated with the truth about God. &ldquo;Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable — think about these things&rdquo; (Phil 4:8). The anxious, discontented mind will default to whatever it has been fed most. Feed it Scripture, and over time the defaults change.",
    steps: [
      "Memorize Philippians 4:6-13 as a single unit — not individual verses",
      "When anxiety rises, speak the text aloud, not silently",
      "Keep a card with Hebrews 13:5 and 2 Cor 12:9 in your wallet or phone case",
      "Read Psalm 23 slowly, once per day, for a week",
      "Journal what each phrase of &lsquo;The LORD is my shepherd&rsquo; means for your actual circumstances",
    ],
  },
  {
    color: GOLD,
    title: "The Sufficiency Audit",
    desc: "Discontentment thrives in vagueness — the generalised sense that things are not enough, that you are falling short, that life should be different. The Sufficiency Audit is a practice of specificity: writing down exactly what you have, and measuring it against what you actually need.",
    steps: [
      "List everything you have today that is genuinely sufficient: shelter, food, health, relationships, faith",
      "List what you are anxious you do not have",
      "For each item in the second list, ask: is this a genuine need or a manufactured desire?",
      "Ask: if this were removed, would I still have God, and is he enough?",
      "Read Agur&rsquo;s prayer (Proverbs 30:7-9) as a closing prayer",
    ],
  },
  {
    color: TEAL,
    title: "Fasting as Contentment Training",
    desc: "Fasting is voluntary practice in want. It is the deliberate choice to experience a legitimate lack — food, social media, entertainment — in order to train the soul to find God sufficient in the absence. Dallas Willard wrote that fasting reveals what controls us. The thing you cannot fast from without anxiety is the thing that owns you. Regular fasting trains the appetite to submit to the will, and the will to submit to God.",
    steps: [
      "Begin with a 24-hour food fast once per month",
      "During the fast, every hunger pang becomes a moment to pray &lsquo;Lord, you are my bread&rsquo;",
      "Try a technology fast — 24 hours without screens — and observe the anxiety it produces",
      "Journal what you discovered about what you were relying on for contentment",
      "Break the fast with deliberate gratitude, not relief",
    ],
  },
  {
    color: BLUE,
    title: "Practising Generosity",
    desc: "The most powerful antidote to the scarcity mindset that drives discontentment is giving. Every act of genuine generosity is a declaration: I have enough to give away. I trust the God who gave this to provide again. Generosity is contentment made visible in action. It is the behavior of a person who has stopped believing the lie that accumulation equals security.",
    steps: [
      "Give something away this week that you have been holding &lsquo;just in case&rsquo;",
      "Tithe before you feel ready — readiness is usually a form of fear",
      "When you feel most anxious about money, make a gift — small or large — as an act of faith",
      "Practise anonymous giving, which removes the social reward and leaves only the spiritual one",
      "Notice whether your anxiety level changes in the week after a significant act of generosity",
    ],
  },
];

export default function ChristianContentmentGuide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0d1a12 0%, ${BG} 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 18, textTransform: "uppercase" }}>
            Philippians 4:11
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 18 }}>
            The Christian Guide to Contentment
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 640, margin: "0 auto 28px" }}>
            &ldquo;I have learned, in whatever state I am, to be content.&rdquo; Paul wrote those words from a Roman prison. Contentment is not a temperament &mdash; it is a learned discipline, and the school is real life.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {(["theology", "sufficiency", "vs-complacency", "suffering", "practices", "videos"] as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: `1px solid ${tab === t ? GREEN : BORDER}`,
                  background: tab === t ? GREEN : "transparent",
                  color: tab === t ? "#fff" : MUTED,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "all 0.15s",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* ── Tab 1: Biblical Theology ── */}
        {tab === "theology" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>The Biblical Theology of Contentment</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                Paul&rsquo;s contentment was not a disposition &mdash; it was a discovery. Here is what he discovered, and how Scripture frames it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEOLOGY_POINTS.map((point) => (
                <div
                  key={point.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${expanded[point.title] ? point.color + "50" : BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleExpanded(point.title)}
                    style={{
                      width: "100%",
                      padding: "20px 22px",
                      cursor: "pointer",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ color: point.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: point.title }} />
                      <div style={{ color: MUTED, fontSize: 11 }}>{point.ref}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 24, flexShrink: 0 }}>
                      {expanded[point.title] ? "−" : "+"}
                    </span>
                  </button>
                  {expanded[point.title] && (
                    <div style={{ padding: "0 22px 24px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "20px 0 0" }} dangerouslySetInnerHTML={{ __html: point.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pull-quote */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: "28px 32px", marginTop: 40, textAlign: "center" }}>
              <p style={{ color: GREEN, fontSize: 20, fontWeight: 700, fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>
                &ldquo;Christian contentment is that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God&rsquo;s wise and fatherly disposal in every condition.&rdquo;
              </p>
              <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>
                JEREMIAH BURROUGHS &mdash; THE RARE JEWEL OF CHRISTIAN CONTENTMENT (1648)
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: Hebrew Concept of Sufficiency ── */}
        {tab === "sufficiency" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>The Hebrew Concept of Sufficiency</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                Long before Paul wrote from prison, the Hebrew Scriptures were training Israel in the posture of &ldquo;enough.&rdquo; Dayenu. Shalom. The manna principle. Agur&rsquo;s prayer.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
              {SUFFICIENCY_POINTS.map((point) => (
                <div
                  key={point.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${point.color}30`,
                    borderRadius: 14,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ width: 32, height: 3, background: point.color, borderRadius: 2, marginBottom: 12 }} />
                    <div style={{ color: point.color, fontWeight: 900, fontSize: 15, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: point.title }} />
                    <div style={{ color: MUTED, fontSize: 11 }}>{point.ref}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: point.body }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 3: Contentment vs. Complacency ── */}
        {tab === "vs-complacency" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Contentment vs. Complacency</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                Contentment is not passivity. It is not the theological cover for injustice or indifference. Understanding what contentment is &mdash; and is not &mdash; is essential to living it rightly.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {VS_COMPLACENCY.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: 26,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                    <div style={{ color: item.color, fontWeight: 900, fontSize: 17 }}>{item.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {item.points.map((point, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, flexShrink: 0, marginTop: 6 }} />
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: point }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 4: Contentment in Suffering ── */}
        {tab === "suffering" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Contentment in Suffering</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                The hardest test of contentment is not abundance but adversity. These are the passages and principles that have sustained Christians through the worst seasons of their lives.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SUFFERING_POINTS.map((point) => (
                <div
                  key={point.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${point.color}30`,
                    borderLeft: `4px solid ${point.color}`,
                    borderRadius: 14,
                    padding: 26,
                  }}
                >
                  <div style={{ color: point.color, fontWeight: 900, fontSize: 15, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: point.title }} />
                  <div style={{ color: MUTED, fontSize: 11, marginBottom: 14 }}>{point.ref}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: point.body }} />
                </div>
              ))}
            </div>

            {/* Closing encouragement */}
            <div style={{ background: `${PURPLE}14`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: "30px 28px", marginTop: 40 }}>
              <h3 style={{ color: PURPLE, fontWeight: 900, fontSize: 18, marginBottom: 12 }}>A Word to the Suffering Reader</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                If you are in the deepest part of your suffering right now, these truths may feel theoretical &mdash; even cruel. That is honest, and it is allowed. Contentment in suffering is not found in a moment of understanding. It is found, slowly and painfully, through bringing the real pain to the real God and discovering &mdash; again and again, over years &mdash; that he is still there, and still enough. The thorn may not be removed. The peace that passes understanding is not the peace of answered prayer in every form we specified. It is the peace of the God who says: I am here. And that, in the end, is more than enough.
              </p>
            </div>
          </div>
        )}

        {/* ── Tab 5: Gratitude Practices ── */}
        {tab === "practices" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Gratitude Practices for the Discontented Soul</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                Paul said he &ldquo;learned&rdquo; contentment. Learning requires practice. These are tried disciplines for training the soul toward sufficiency.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
              {PRACTICES.map((practice) => (
                <div
                  key={practice.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${practice.color}30`,
                    borderRadius: 14,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div>
                    <div style={{ color: practice.color, fontWeight: 900, fontSize: 15, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: practice.title }} />
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: practice.desc }} />
                  <div style={{ background: `${practice.color}0f`, border: `1px solid ${practice.color}20`, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: practice.color, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", marginBottom: 8 }}>HOW TO START</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      {practice.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <div style={{ color: practice.color, fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i + 1}.</div>
                          <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: step }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing call */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: "32px 28px", marginTop: 40, textAlign: "center" }}>
              <h3 style={{ color: GREEN, fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Begin Today</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
                Contentment is not a destination you arrive at &mdash; it is a practice you maintain. Paul wrote from prison. You can begin from wherever you are. Pick one practice above, start today, and give it thirty days. The God who was enough for Paul in chains is enough for you today.
              </p>
            </div>
          </div>
        )}

        {/* ── Tab 6: Videos ── */}
        {tab === "videos" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Video Teaching on Contentment</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
                Trusted teachers on the biblical theology and practical discipline of Christian contentment.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "18px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
