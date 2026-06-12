"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_selfcontrol_entries";

interface SCEntry {
  impulse: string;    // the impulse or appetite being mastered
  trigger: string;    // what triggers it
  redirect: string;   // the Spirit-led redirect strategy
}

type TabId = "theology" | "practices" | "voices" | "scripture" | "journal" | "videos";

interface TabDef {
  id: TabId;
  label: string;
}

const TABS: TabDef[] = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

interface PracticeCard {
  number: string;
  title: string;
  tagline: string;
  body: string;
  steps: string[];
  verse: string;
  verseRef: string;
}

const PRACTICES: PracticeCard[] = [
  {
    number: "01",
    title: "The Pause Practice",
    tagline: "Ten seconds between impulse and action",
    body:
      "Most defeats in self-control happen in under three seconds — the tap on the app, the second helping, the sharp reply. The pause practice inserts a deliberate gap between the urge and the act. In that gap, the Spirit gets a vote. Ten seconds is short enough to be doable and long enough to remember who you are. You are not your impulse. You are a child of God who can notice an urge without obeying it. The pause is not white-knuckling; it is creating the space where prayer becomes possible before the decision is already made.",
    steps: [
      "When you feel the pull, name it silently: anger rising, craving sugar, reaching for the phone.",
      "Count ten slow seconds, breathing in for four and out for six.",
      "Pray one sentence: Lord, in this moment, what is the better thing?",
      "Then decide. Even if you still choose poorly, you have begun training the gap — and the gap grows.",
    ],
    verse: "Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city.",
    verseRef: "Proverbs 16:32",
  },
  {
    number: "02",
    title: "Trigger Mapping",
    tagline: "Know your moments of weakness",
    body:
      "Temptation is rarely random. It follows patterns — times of day, emotional states, places, people, levels of tiredness. The acronym HALT (hungry, angry, lonely, tired) exists because recovery communities learned that impulses spike under predictable conditions. Trigger mapping is simply paying attention: keeping an honest record of when the impulse hits hardest and what was happening just before. You cannot guard a wall if you do not know where the breaches are. Jesus told his disciples to watch and pray precisely because the spirit is willing but the flesh is weak — watching comes first.",
    steps: [
      "For one week, jot down every time the impulse flares: time, place, mood, what preceded it.",
      "Look for the pattern. Is it 10 p.m. boredom? Post-conflict stress? Scrolling before sleep?",
      "Name your top three triggers out loud to God and to one trusted person.",
      "Build a specific plan for each one — not a vague resolve, but a concrete if-then response.",
    ],
    verse: "Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.",
    verseRef: "Matthew 26:41",
  },
  {
    number: "03",
    title: "Fasting as Training",
    tagline: "Practicing no in order to practice yes",
    body:
      "Fasting is the gymnasium of self-control. When you voluntarily abstain from a good thing — food, media, purchases — for a season, you teach your appetites that they are not in charge. The hunger pang becomes a bell that calls you to prayer instead of the pantry. This is not earning anything from God; it is training the will under grace. Athletes do not lift weights because barbells matter; they lift so that something else becomes possible. A Christian who has practiced saying no to lunch finds it far easier to say no to lust, to outrage, to the impulse purchase. Small voluntary denials build capacity for the involuntary tests.",
    steps: [
      "Start small: skip one meal a week, or fast from one app for a day.",
      "When the craving hits, do not just endure it — convert it. Let every pang prompt a short prayer.",
      "Break the fast with gratitude, not with a binge. The ending is part of the training.",
      "Gradually extend: a full day, a media-free weekend, a no-spend month. Keep it secret where you can (Matthew 6:16-18).",
    ],
    verse: "But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.",
    verseRef: "1 Corinthians 9:27",
  },
  {
    number: "04",
    title: "Environment Design",
    tagline: "Make the wrong thing hard, the right thing easy",
    body:
      "Willpower is a finite resource; environment is a constant one. The wise person does not stand near the edge of the cliff admiring their balance. Proverbs tells the young man not to win the argument with the adulteress but to stay far from her door. Joseph did not negotiate with temptation; he ran, leaving his cloak behind. Environment design means honestly removing the on-ramps: deleting the app, not keeping the snack in the house, leaving the credit card at home, putting the phone in another room at night. This is not weakness — it is wisdom. Every barrier you build while strong is a gift to your future, weaker self.",
    steps: [
      "Identify the shortest path to your besetting sin and make it longer: add friction, distance, delay.",
      "Identify the shortest path to the better habit and make it shorter: Bible on the pillow, shoes by the door.",
      "Use technology against itself: blockers, grayscale screens, app time limits, no devices in the bedroom.",
      "Audit monthly. Environments drift; so do you. Rebuild the fences before you need them.",
    ],
    verse: "Keep your way far from her, and do not go near the door of her house.",
    verseRef: "Proverbs 5:8",
  },
  {
    number: "05",
    title: "Replacement, Not Just Resistance",
    tagline: "Redirect desires toward better joys",
    body:
      "Thomas Chalmers called it the expulsive power of a new affection: you cannot merely evict a desire; you must replace it with a greater one. A vacuum invites relapse. The glutton who only resists food thinks about food all day; the one who learns to feast on Scripture, friendship, and meaningful work finds the old appetite shrinking for lack of attention. Self-control is not the art of wanting nothing — it is the art of wanting the best things most. When the impulse comes, do not simply grit your teeth at the closed door. Walk through a better one. Every no should have a yes ready beside it.",
    steps: [
      "For each impulse you are fighting, write down what legitimate need it pretends to meet: comfort, escape, connection, significance.",
      "Choose a true source for that need: a walk, a psalm, a phone call to a friend, honest rest.",
      "Pre-decide the swap: when I want to doomscroll, I will read one chapter instead.",
      "Savor the replacement deliberately. Joy that is noticed grows; the new affection must be fed.",
    ],
    verse: "Delight yourself in the LORD, and he will give you the desires of your heart.",
    verseRef: "Psalm 37:4",
  },
  {
    number: "06",
    title: "Accountability Covenant",
    tagline: "Invite someone into the struggle",
    body:
      "Sin demands secrecy; grace grows in the light. James does not say confess your sins privately to God alone — he says confess to one another and pray for one another, that you may be healed. An accountability covenant is a standing agreement with one or two trusted believers: full honesty, regular check-ins, specific questions, no shock and no shame. The goal is not surveillance but solidarity. Temptation that thrives in isolation often withers when it must be spoken aloud. And on the day you fall, you will already have someone whose first instinct is to help you up rather than to gasp.",
    steps: [
      "Choose one or two same-season believers you trust — not someone you are trying to impress.",
      "Agree on specifics: what you are fighting, how often you check in, what questions get asked.",
      "Make the questions concrete: Did you act on it this week? When was it strongest? What did you do instead?",
      "Always end with prayer and grace. Accountability without gospel becomes performance review; with gospel, it becomes healing.",
    ],
    verse: "Therefore, confess your sins to one another and pray for one another, that you may be healed.",
    verseRef: "James 5:16",
  },
];

interface Voice {
  name: string;
  years: string;
  work: string;
  quote: string;
  summary: string;
  takeaway: string;
}

const VOICES: Voice[] = [
  {
    name: "John Owen",
    years: "1616–1683",
    work: "The Mortification of Sin",
    quote: "Be killing sin or it will be killing you.",
    summary:
      "The Puritan theologian wrote the most searching treatment of indwelling sin in the English language. For Owen, mortification is not occasional resistance but a daily, deliberate weakening of sin at the root — and it is utterly impossible without the Holy Spirit. He warned that sin never sits still: it is always either being starved or being fed, always growing or dying. Yet Owen was no grim moralist. He insisted that only those who see the beauty of Christ have the power to put sin to death, because mortification by sheer willpower produces only a quieter, prouder sinner.",
    takeaway:
      "Self-control is warfare, not maintenance. Treat your besetting sin as a living enemy that must be actively starved — and fight it by the Spirit, not by self-improvement.",
  },
  {
    name: "Richard Foster",
    years: "1942–present",
    work: "Celebration of Discipline",
    quote: "The disciplines are God's way of getting us into the ground; they put us where he can work within us and transform us.",
    summary:
      "Foster recovered the classical spiritual disciplines — fasting, solitude, simplicity, submission — for a generation of evangelicals who suspected discipline meant legalism. His central image is the farmer: a farmer cannot make a seed grow, but he can prepare the soil. The disciplines do not earn grace; they place us in the path of grace. Foster is especially sharp on consumer appetite, warning that modern culture is a conspiracy to inflame desire, and that simplicity and fasting are acts of joyful rebellion against a world that says you must have more to be whole.",
    takeaway:
      "Disciplines are means of grace, not merit. Practice them as soil preparation — you cannot grow the fruit, but you can tend the field where the Spirit grows it.",
  },
  {
    name: "Jerry Bridges",
    years: "1929–2016",
    work: "The Discipline of Grace",
    quote: "Your worst days are never so bad that you are beyond the reach of God's grace. And your best days are never so good that you are beyond the need of God's grace.",
    summary:
      "Bridges spent his life holding two truths together that the church keeps splitting apart: the pursuit of holiness is a real, sweaty pursuit — and it runs entirely on grace. He coined the phrase preach the gospel to yourself every day, arguing that the person most motivated to fight sin is not the one terrified of God but the one assured of his acceptance in Christ. For Bridges, self-control is dependent responsibility: we work, but we work out what God works in. Grace is not opposed to effort; it is opposed to earning.",
    takeaway:
      "Fight from acceptance, not for it. Begin every day of effort with the gospel, so that discipline flows from gratitude instead of fear.",
  },
  {
    name: "Augustine of Hippo",
    years: "354–430",
    work: "Confessions",
    quote: "He loves Thee too little, who loves anything together with Thee, which he loves not for Thy sake.",
    summary:
      "Augustine diagnosed the human problem as disordered love. We do not sin because we love bad things, mostly; we sin because we love good things in the wrong order — pleasure above purity, approval above truth, the gift above the Giver. His own famous prayer before conversion, give me chastity, but not yet, names the divided will with brutal honesty. For Augustine, self-control is not desire suppressed but desire reordered: when God becomes the supreme love, lesser loves find their proper, smaller places and lose their tyrannical grip.",
    takeaway:
      "Ask not only what am I doing wrong but what am I loving out of order. Reordering love, not erasing it, is the deepest work of self-control.",
  },
  {
    name: "Thomas à Kempis",
    years: "c. 1380–1471",
    work: "The Imitation of Christ",
    quote: "First keep peace with yourself; then you will be able to bring peace to others.",
    summary:
      "From a quiet monastic community in the Netherlands came one of the most widely read Christian books in history. Thomas à Kempis writes with relentless realism about the inner war: how habit is overcome by habit, how the person who has not learned to rule themselves will be ruled by everything, and how the fire of impulse cools when it is not obeyed. His counsel is humble, granular, and daily — resist beginnings, he insists, because the sickness that is easy to cure at first becomes incurable when nursed. Holiness, for Thomas, is built out of ten thousand small refusals and small obediences.",
    takeaway:
      "Resist beginnings. The impulse is weakest at its first appearance — meet it there, in the small moment, before it gathers strength.",
  },
  {
    name: "Tim Chester",
    years: "1967–present",
    work: "You Can Change",
    quote: "We sin because we believe the lie that we are better off without God, that his rule is oppressive, that we will be free without him.",
    summary:
      "Chester brings Reformation theology to street level: behind every persistent sin is a lie we believe and a desire we treat as god. Behavior modification fails because it prunes the fruit while feeding the root. Real change happens when we identify the false promise the sin is making — escape, control, comfort, approval — and answer it with a specific truth about God that is better. Chester is practical to the bone: he asks what do you crave when you are most tempted, and then walks the reader from that craving back to the character of God who satisfies it.",
    takeaway:
      "Every impulse preaches a sermon about where life is found. Self-control means out-preaching it — answering the lie underneath the urge with a better truth about God.",
  },
];

interface ScripturePassage {
  reference: string;
  theme: string;
  text: string;
  context: string;
  application: string;
}

const SCRIPTURES: ScripturePassage[] = [
  {
    reference: "Galatians 5:22-23",
    theme: "The Fruit of the Spirit",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    context:
      "Paul has just listed the works of the flesh — the chaos that erupts when appetite rules. Against that catalog he sets one singular fruit with nine flavors, and self-control stands last, like a clasp that holds the necklace together. Crucially, this is fruit, not works: it grows from the indwelling Spirit rather than being manufactured by effort. The word is egkrateia — inner strength, mastery from within.",
    application:
      "Stop asking only how do I try harder and start asking how do I stay connected to the Vine. Fruit is the byproduct of abiding. Pursue the Spirit through word, prayer, and obedience, and watch self-control grow as a result rather than a resolution.",
  },
  {
    reference: "1 Corinthians 9:24-27",
    theme: "Strict Training, Body as Servant",
    text: "Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable... I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.",
    context:
      "Corinth hosted the Isthmian Games, second only to the Olympics, so Paul's readers knew exactly what ten months of mandatory athletic training looked like. His point cuts: pagan athletes embrace total self-restriction for a celery crown that wilts in a week, while believers run for an eternal prize. Paul includes himself — even the apostle treats his own body as a servant to be directed, not a master to be obeyed.",
    application:
      "Train, do not merely try. An athlete does not attempt a marathon on willpower; they follow a regimen. Build a regimen for your soul — scheduled prayer, fasting, sleep, accountability — and accept that real training always costs something now for a prize later.",
  },
  {
    reference: "Proverbs 25:28",
    theme: "A City Without Walls",
    text: "A man without self-control is like a city broken into and left without walls.",
    context:
      "In the ancient world, a city's walls were its entire security system. A breached city was open to every raider, every wild animal, every enemy with the mildest ambition. The proverb's image is devastating: the person without self-control is not merely weak in one area — they are indefensible everywhere. Whatever wants to come in, comes in.",
    application:
      "Inventory your walls. Where are the breaches — speech, screens, spending, food, temper? A city does not rebuild every wall in a day; it repairs one gate at a time, with watchmen posted. Choose the most dangerous gap and start stacking stones this week.",
  },
  {
    reference: "2 Peter 1:5-8",
    theme: "Add to Knowledge Self-Control",
    text: "Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness...",
    context:
      "Peter builds a ladder of growth, and the rung above knowledge is self-control. The order matters: knowledge without self-control is a library in a burning building. Many believers know far more than they obey. Notice too the phrase make every effort — divine power has granted everything we need (v. 3), and precisely because of that, we labor. Grace funds the effort; it does not replace it.",
    application:
      "Match every input of knowledge with an output of obedience. For each sermon, podcast, or chapter you take in, name one concrete act of self-mastery it calls for. Otherwise study becomes a substitute for change rather than a means to it.",
  },
  {
    reference: "Titus 2:11-12",
    theme: "Grace That Teaches Us to Say No",
    text: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age.",
    context:
      "Here is the verse that demolishes the idea that grace is soft on sin. Grace is a teacher — the Greek word suggests the training of a child — and its curriculum is renunciation. Grace does not merely forgive our lack of self-control; it actively trains us out of it. The cross is not only pardon for the past but a pedagogy for the present age.",
    application:
      "When tempted, do not reach first for rules; reach for grace. Rehearse what God has already done for you in Christ, and let that kindness train your no. People say no most powerfully when they are already full of a better yes.",
  },
  {
    reference: "1 Corinthians 10:13",
    theme: "The Way of Escape",
    text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
    context:
      "Two lies collapse under this verse: nobody struggles like I do, and I literally could not help it. Every temptation is common — shared by millions across history — and every temptation arrives with an exit built into it. The escape may be unglamorous: a door to walk through, a phone to put down, a friend to call, a prayer to pray. But God's faithfulness guarantees it is there.",
    application:
      "In your next moment of temptation, ask one question: where is the exit? It exists; your task is to look for it and take it, usually fast. Practice spotting escapes in small temptations so the reflex is ready for large ones.",
  },
];

interface VideoItem {
  videoId: string;
  title: string;
  note: string;
}

const VIDEOS: VideoItem[] = [
  {
    videoId: "cEjE5KuduDk",
    title: "The Fruit of Self-Control - Galatians 5",
    note: "An exposition of egkrateia as the climactic fruit of the Spirit — why Paul ends the list here and what Spirit-grown mastery looks like in daily life.",
  },
  {
    videoId: "ekHCcMjFA1c",
    title: "John Owen: The Mortification of Sin",
    note: "An introduction to the Puritan classic on killing sin at the root — and why mortification by the Spirit differs from self-improvement by willpower.",
  },
  {
    videoId: "3ZLh0kpUJsI",
    title: "Spirit-Empowered Self-Control vs Willpower",
    note: "The crucial difference between gritting your teeth and walking by the Spirit — how grace produces what resolution alone never can.",
  },
  {
    videoId: "zh17KsXNBjY",
    title: "1 Corinthians 9: Run to Win the Prize",
    note: "Paul's athlete metaphor unpacked — strict training, the imperishable wreath, and what it means to make your body a servant rather than a master.",
  },
  {
    videoId: "kQg-cFmnQHs",
    title: "Mastering Your Appetites - Christian Discipline",
    note: "Practical teaching on food, media, money, and anger — the four arenas where most believers fight their daily battles for self-control.",
  },
  {
    videoId: "hWdaHfM_2bo",
    title: "Grace That Teaches Us to Say No - Titus 2",
    note: "How the grace of God becomes a trainer — renouncing worldly passions not by law but by the appearing of a greater kindness.",
  },
];

const RELATED_LINKS: { href: string; label: string }[] = [
  { href: "/fruit-of-the-spirit", label: "The Fruit of the Spirit" },
  { href: "/christian-fasting", label: "Christian Fasting" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/accountability", label: "Accountability" },
  { href: "/christian-patience", label: "Christian Patience" },
  { href: "/sanctification", label: "Sanctification" },
];

export default function ChristianSelfControlPage() {
  const [tab, setTab] = useState<TabId>("theology");
  const [entries, setEntries] = useState<SCEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [impulse, setImpulse] = useState("");
  const [trigger, setTrigger] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!impulse.trim()) return;
    const entry: SCEntry = {
      impulse: impulse.trim(),
      trigger: trigger.trim(),
      redirect: redirect.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setImpulse("");
    setTrigger("");
    setRedirect("");
  };

  const deleteEntry = (index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    color: TEXT,
    padding: "0.65rem 0.85rem",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: ACCENT,
    marginBottom: "0.4rem",
  };

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "1.5rem",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "1.35rem",
    fontWeight: 800,
    margin: "0 0 0.75rem",
    color: TEXT,
  };

  const pStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.75,
    fontSize: "0.97rem",
    margin: "0 0 1rem",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />

      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* ---------- HERO ---------- */}
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ marginBottom: "0.85rem" }}>
            <span style={{
              background: ACCENT + "22",
              color: ACCENT,
              padding: "0.25rem 0.9rem",
              borderRadius: 20,
              fontSize: "0.76rem",
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}>
              Fruit of the Spirit
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: "0 0 1rem",
          }}>
            Mastered by Nothing: The Fruit of Self-Control
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, margin: 0 }}>
            &ldquo;All things are lawful for me,&rdquo; Paul wrote, &ldquo;but I will not be mastered by anything.&rdquo;
            Self-control &mdash; <em style={{ color: TEXT }}>egkrateia</em> &mdash; is the Spirit&rsquo;s answer to a world
            of unguarded appetites: not the grim suppression of desire, but the glad reordering of it. This guide explores
            what it means to rule your spirit rather than be ruled by your screens, your stomach, your spending, and your
            temper &mdash; and why the restrained life turns out to be the free one.
          </p>
        </header>

        {/* ---------- TAB BAR ---------- */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              style={{
                padding: "0.5rem 1.15rem",
                borderRadius: 22,
                border: `1px solid ${tab === t.id ? ACCENT : BORDER}`,
                background: tab === t.id ? ACCENT + "22" : "transparent",
                color: tab === t.id ? ACCENT : MUTED,
                fontSize: "0.87rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* ---------- THEOLOGY ---------- */}
        {tab === "theology" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={cardStyle}>
              <h2 style={h2Style}>Egkrateia: Strength Turned Inward</h2>
              <p style={pStyle}>
                The last word in Paul&rsquo;s famous list in Galatians 5:22&ndash;23 is the Greek noun
                <em style={{ color: TEXT }}> egkrateia</em> (ἐγκράτεια), built from <em style={{ color: TEXT }}>en</em> (in)
                and <em style={{ color: TEXT }}>kratos</em> (power, dominion &mdash; the same root that gives us words like
                democracy, rule by the people). Egkrateia is literally <em style={{ color: TEXT }}>in-power</em>: strength
                exercised over oneself, dominion turned inward. The Greeks admired the word; their philosophers used it for
                the athlete&rsquo;s regimen and the sage&rsquo;s composure. But Paul does something no philosopher dared.
                He takes the virtue the Stoics said you must achieve and announces that it is
                <em style={{ color: TEXT }}> fruit</em> &mdash; something grown in you by the Spirit of the living God.
              </p>
              <p style={pStyle}>
                The placement matters too. Self-control comes last in the list not because it is least, but because it is
                the clasp on the necklace &mdash; the virtue that protects all the others. Love without self-control decays
                into indulgence; zeal without self-control burns the house down; even joy, unguarded, curdles into
                frivolity. The Spirit ends the list with the fruit that keeps every other fruit on the tree. And then comes
                Paul&rsquo;s quiet, devastating aside: &ldquo;against such things there is no law.&rdquo; No legislature has
                ever needed to pass a statute limiting how self-controlled citizens may be.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Fruit, Not Just Discipline</h2>
              <p style={pStyle}>
                Here is the watershed that separates Christian self-control from every self-help program on the shelf:
                Scripture calls it <em style={{ color: TEXT }}>fruit</em>. Fruit is not manufactured; it is grown. An apple
                tree does not strain to produce apples &mdash; it stays rooted, drinks deeply, and bears in season. This is
                why Jesus says, &ldquo;Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it
                abides in the vine, neither can you, unless you abide in me&rdquo; (John 15:4). Willpower says,
                &ldquo;Try harder.&rdquo; The gospel says, &ldquo;Stay connected.&rdquo;
              </p>
              <p style={pStyle}>
                But notice what this does <em style={{ color: TEXT }}>not</em> mean. Fruit-language is no excuse for
                passivity. The same Paul who calls self-control fruit also says he disciplines his body and keeps it under
                control (1 Corinthians 9:27), and Peter commands us to &ldquo;make every effort&rdquo; to add self-control
                to knowledge (2 Peter 1:5&ndash;6). The resolution of the paradox is the farmer: he cannot make a single
                seed sprout, yet he plows, plants, waters, weeds, and fences from dawn to dusk. Grace does not make effort
                unnecessary; grace makes effort <em style={{ color: TEXT }}>fruitful</em>. We work out what God works in
                (Philippians 2:12&ndash;13). Spirit-empowered discipline differs from mere willpower not in being easier,
                but in having a different engine and a different outcome: willpower exhausts and inflates the self, while
                the Spirit transforms it.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Athlete&rsquo;s Metaphor (1 Corinthians 9:24&ndash;27)</h2>
              <p style={pStyle}>
                Corinth hosted the Isthmian Games, and every reader of Paul&rsquo;s letter had watched athletes who spent
                ten months under oath in strict training &mdash; controlled diet, controlled sleep, controlled everything
                &mdash; all for a wreath of withered celery. &ldquo;Every athlete exercises self-control in all
                things,&rdquo; Paul observes. &ldquo;They do it to receive a perishable wreath, but we an
                imperishable&rdquo; (1 Corinthians 9:25). The logic is from lesser to greater: if pagans will embrace total
                discipline for a prize that wilts in a week, what should those running for eternal glory be willing to
                forgo?
              </p>
              <p style={pStyle}>
                Then Paul turns the lens on himself: &ldquo;I do not box as one beating the air; but I discipline my body
                and keep it under control&rdquo; &mdash; the Greek is vivid, almost violent: <em style={{ color: TEXT }}>I
                give my body a black eye and lead it about as a slave</em> &mdash; &ldquo;lest after preaching to others I
                myself should be disqualified&rdquo; (9:26&ndash;27). The body, for Paul, is a magnificent servant and a
                terrible master. Training, not trying, is the Christian posture: nobody runs a marathon by feeling
                motivated on race day. You build the capacity in a thousand unseen mornings, so that on the day of testing
                the strength is already there.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Suppression vs. Transformation</h2>
              <p style={pStyle}>
                There are two ways to deal with a desire you cannot approve of. The first is suppression: push it down,
                lock the door, stand guard, and hope. Suppression can restrain behavior for a while, but it leaves the
                desire fully alive in the basement, lifting weights. This is the white-knuckle religion Jesus diagnosed in
                the Pharisees &mdash; cups clean on the outside, full of greed within (Matthew 23:25). It is also why
                Paul says that severe asceticism has &ldquo;an appearance of wisdom&rdquo; but is &ldquo;of no value in
                stopping the indulgence of the flesh&rdquo; (Colossians 2:23). Rules can cage an appetite; they cannot
                convert one.
              </p>
              <p style={pStyle}>
                The second way is transformation: the desire itself is gradually re-formed as a greater desire grows
                beside it. Thomas Chalmers called this &ldquo;the expulsive power of a new affection.&rdquo; You do not
                empty a heart of a lesser love by argument; you expel it with a stronger love, the way light expels
                darkness simply by arriving. This is why the biblical strategy is always double: <em style={{ color: TEXT }}>
                put off</em> and <em style={{ color: TEXT }}>put on</em> (Ephesians 4:22&ndash;24), flee <em style={{ color: TEXT }}>
                and</em> pursue (2 Timothy 2:22). Mere resistance leaves a vacuum, and vacuums are where relapses live.
                The Spirit&rsquo;s work is deeper than behavior management: he changes what we want, slowly, the way a
                taste matures &mdash; until the day you realize the old craving has lost not just its permission but its
                appeal.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Lawful but Not Helpful: Liberty and Restraint</h2>
              <p style={pStyle}>
                The Corinthians had turned grace into a slogan: &ldquo;All things are lawful for me.&rdquo; Paul quotes it
                back to them twice and twice attaches a correction: &ldquo;but not all things are helpful... but I will not
                be dominated by anything&rdquo; (1 Corinthians 6:12), and later, &ldquo;but not all things build up&rdquo;
                (10:23). Here is the mature Christian grammar of liberty. The question for the free person is no longer
                merely <em style={{ color: TEXT }}>Is this permitted?</em> but <em style={{ color: TEXT }}>Is this
                profitable? Does it build? And is it quietly becoming my master?</em>
              </p>
              <p style={pStyle}>
                This is the test to run on the gray areas of modern life &mdash; the streaming queue, the second glass,
                the online cart, the endless feed. None of these may be sin in themselves. But anything you cannot put
                down has already picked you up. Christian liberty is not the right to do whatever you want; it is the
                power to do what is good &mdash; including the power to abstain from a lawful thing for the sake of love,
                witness, or your own soul. Freedom that cannot say no is not freedom at all; it is appetite wearing
                freedom&rsquo;s clothes.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Mastered by Nothing: Self-Control as Freedom</h2>
              <p style={pStyle}>
                Our culture tells one story about desire: restraint is repression, and freedom means acting on whatever
                you feel. Scripture tells the opposite story, and honest experience confirms it. Ask anyone enslaved to a
                bottle, a screen, or a temper whether following every impulse made them free. &ldquo;They promise them
                freedom,&rdquo; Peter writes of false teachers, &ldquo;but they themselves are slaves of corruption. For
                whatever overcomes a person, to that he is enslaved&rdquo; (2 Peter 2:19). The man without self-control is
                a breached city (Proverbs 25:28) &mdash; open to every raider, defended against nothing.
              </p>
              <p style={pStyle}>
                Self-control, then, is not the cage; it is the key. The pianist who submitted to years of scales is the one
                free to play anything. The disciple who has learned to rule appetite is the one free to feast without
                gluttony, rest without sloth, speak without wounding, and scroll without sinking. To be
                <em style={{ color: TEXT }}> mastered by nothing</em> is to be available to Someone &mdash; a servant of
                Christ precisely because you are a slave to no lesser thing. &ldquo;For freedom Christ has set us
                free&rdquo; (Galatians 5:1), and the Spirit&rsquo;s last-listed fruit is how that freedom is kept.
              </p>
            </div>
          </section>
        )}

        {/* ---------- PRACTICES ---------- */}
        {tab === "practices" && (
          <section>
            <p style={{ ...pStyle, marginBottom: "1.5rem", maxWidth: 680 }}>
              Self-control is grown by the Spirit &mdash; and the Spirit works through means. These six practices are not
              merit badges; they are training grounds. Think of them as ways of putting yourself where grace can do its
              work, the way a sail does not make the wind but does catch it.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {PRACTICES.map((p) => (
                <article key={p.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: ACCENT, fontWeight: 900, fontSize: "1.5rem", fontVariantNumeric: "tabular-nums" }}>
                      {p.number}
                    </span>
                    <h2 style={{ ...h2Style, margin: 0, fontSize: "1.15rem" }}>{p.title}</h2>
                  </div>
                  <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 700, margin: "0 0 0.85rem", letterSpacing: 0.3 }}>
                    {p.tagline}
                  </p>
                  <p style={pStyle}>{p.body}</p>
                  <h3 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: TEXT, margin: "0 0 0.5rem" }}>
                    How to begin
                  </h3>
                  <ol style={{ margin: "0 0 1rem", paddingLeft: "1.2rem", color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                    {p.steps.map((s, i) => (
                      <li key={i} style={{ marginBottom: "0.35rem" }}>{s}</li>
                    ))}
                  </ol>
                  <blockquote style={{
                    margin: 0,
                    padding: "0.85rem 1rem",
                    borderLeft: `3px solid ${ACCENT}`,
                    background: BG,
                    borderRadius: "0 8px 8px 0",
                    color: MUTED,
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}>
                    &ldquo;{p.verse}&rdquo;
                    <span style={{ display: "block", marginTop: "0.4rem", fontStyle: "normal", color: ACCENT, fontWeight: 700, fontSize: "0.82rem" }}>
                      — {p.verseRef}
                    </span>
                  </blockquote>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ---------- VOICES ---------- */}
        {tab === "voices" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 680 }}>
              The church has fought the battle for self-mastery for two thousand years, and her best teachers left field
              notes. From a fourth-century North African bishop to living writers, these six voices share one conviction:
              sin is killed by the Spirit and fed by neglect &mdash; and grace, rightly understood, is the most demanding
              teacher of all.
            </p>
            {VOICES.map((v) => (
              <article key={v.name} style={cardStyle}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.25rem" }}>
                  <h2 style={{ ...h2Style, margin: 0 }}>{v.name}</h2>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{v.years}</span>
                </div>
                <p style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.9rem" }}>{v.work}</p>
                <blockquote style={{
                  margin: "0 0 1rem",
                  padding: "0.9rem 1.1rem",
                  borderLeft: `3px solid ${ACCENT}`,
                  background: BG,
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={pStyle}>{v.summary}</p>
                <p style={{ ...pStyle, margin: 0 }}>
                  <strong style={{ color: ACCENT }}>Takeaway: </strong>
                  <span style={{ color: MUTED }}>{v.takeaway}</span>
                </p>
              </article>
            ))}
          </section>
        )}

        {/* ---------- SCRIPTURE ---------- */}
        {tab === "scripture" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 680 }}>
              Six passages form the backbone of a biblical theology of self-control. Read them slowly; better yet, commit
              one a month to memory. The Word you have hidden in your heart is the Word available in the moment of
              temptation &mdash; which is exactly how Jesus fought in the wilderness.
            </p>
            {SCRIPTURES.map((s) => (
              <article key={s.reference} style={cardStyle}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.75rem" }}>
                  <h2 style={{ ...h2Style, margin: 0 }}>{s.reference}</h2>
                  <span style={{
                    background: ACCENT + "22",
                    color: ACCENT,
                    padding: "0.15rem 0.7rem",
                    borderRadius: 14,
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                  }}>
                    {s.theme}
                  </span>
                </div>
                <blockquote style={{
                  margin: "0 0 1rem",
                  padding: "0.9rem 1.1rem",
                  borderLeft: `3px solid ${ACCENT}`,
                  background: BG,
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}>
                  &ldquo;{s.text}&rdquo;
                </blockquote>
                <h3 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: TEXT, margin: "0 0 0.4rem" }}>
                  Context
                </h3>
                <p style={pStyle}>{s.context}</p>
                <h3 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: TEXT, margin: "0 0 0.4rem" }}>
                  Living it
                </h3>
                <p style={{ ...pStyle, margin: 0 }}>{s.application}</p>
              </article>
            ))}
          </section>
        )}

        {/* ---------- JOURNAL ---------- */}
        {tab === "journal" && (
          <section>
            <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
              <h2 style={h2Style}>Impulse Journal</h2>
              <p style={pStyle}>
                Owen said sin must be studied before it can be starved. Use this journal to map one impulse at a time:
                name the appetite, identify what sets it off, and write the Spirit-led redirect you will take instead.
                Entries are saved privately on this device only &mdash; nothing is sent anywhere.
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="sc-impulse" style={labelStyle}>The impulse or appetite</label>
                <input
                  id="sc-impulse"
                  type="text"
                  value={impulse}
                  onChange={(e) => setImpulse(e.target.value)}
                  placeholder="e.g. Late-night scrolling, snapping at the kids, impulse spending"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="sc-trigger" style={labelStyle}>What triggers it</label>
                <input
                  id="sc-trigger"
                  type="text"
                  value={trigger}
                  onChange={(e) => setTrigger(e.target.value)}
                  placeholder="e.g. Boredom after 10pm, feeling criticized, payday plus stress"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="sc-redirect" style={labelStyle}>The Spirit-led redirect</label>
                <textarea
                  id="sc-redirect"
                  value={redirect}
                  onChange={(e) => setRedirect(e.target.value)}
                  placeholder="e.g. Phone charges in the kitchen; I read one psalm in bed and pray for the person I wanted to snap at"
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                />
              </div>

              <button
                onClick={saveEntry}
                disabled={!impulse.trim()}
                style={{
                  background: impulse.trim() ? ACCENT : BORDER,
                  color: impulse.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 8,
                  padding: "0.7rem 1.6rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: impulse.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <h2 style={{ ...h2Style, fontSize: "1.15rem" }}>
              Saved entries{" "}
              <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.9rem" }}>
                ({entries.length})
              </span>
            </h2>

            {entries.length === 0 ? (
              <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                <p style={{ ...pStyle, margin: 0 }}>
                  No entries yet. Name your first impulse above &mdash; the unexamined appetite is the unchallenged one.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((entry, index) => (
                  <article key={`${entry.impulse}-${index}`} style={{ ...cardStyle, padding: "1.25rem 1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ fontSize: "1.02rem", fontWeight: 800, margin: "0 0 0.6rem", color: TEXT }}>
                          {entry.impulse}
                        </h3>
                        {entry.trigger && (
                          <p style={{ ...pStyle, margin: "0 0 0.5rem", fontSize: "0.92rem" }}>
                            <strong style={{ color: ACCENT, fontWeight: 700 }}>Trigger: </strong>
                            {entry.trigger}
                          </p>
                        )}
                        {entry.redirect && (
                          <p style={{ ...pStyle, margin: 0, fontSize: "0.92rem" }}>
                            <strong style={{ color: ACCENT, fontWeight: 700 }}>Redirect: </strong>
                            {entry.redirect}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => deleteEntry(index)}
                        aria-label={`Delete entry: ${entry.impulse}`}
                        style={{
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          color: MUTED,
                          borderRadius: 8,
                          padding: "0.35rem 0.85rem",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ---------- VIDEOS ---------- */}
        {tab === "videos" && (
          <section>
            <p style={{ ...pStyle, marginBottom: "1.5rem", maxWidth: 680 }}>
              Teaching to watch slowly. Each video pairs with a section of this guide &mdash; from the exegesis of
              Galatians 5 to the practical war on appetite. Consider watching one per week with your accountability
              partner and discussing one question: what is this asking me to put off, and what to put on?
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {VIDEOS.map((v) => (
                <article key={v.videoId} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "1.1rem 1.25rem 1.25rem" }}>
                    <h2 style={{ fontSize: "1rem", fontWeight: 800, margin: "0 0 0.45rem", color: TEXT, lineHeight: 1.4 }}>
                      {v.title}
                    </h2>
                    <p style={{ ...pStyle, margin: 0, fontSize: "0.88rem" }}>{v.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ---------- RELATED ---------- */}
        <section style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ ...h2Style, fontSize: "1.1rem" }}>Continue the journey</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {RELATED_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.1rem",
                  borderRadius: 20,
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ ...pStyle, marginTop: "1.5rem", fontSize: "0.9rem", maxWidth: 680 }}>
            &ldquo;For God gave us a spirit not of fear but of power and love and self-control&rdquo; (2 Timothy 1:7).
            Whatever appetite has owned your evenings or eaten your peace, it does not get the last word. The Spirit who
            raised Jesus from the dead lives in you &mdash; and his fruit, in season, is a self that is finally, freely,
            mastered by nothing.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
