"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#EF4444";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_perseverance_entries";

interface PSVEntry {
  trial: string;      // the trial or weariness being faced
  promise: string;    // the scripture promise being held onto
  nextStep: string;   // the one next faithful step
}

type TabId = "theology" | "practices" | "voices" | "scripture" | "journal" | "videos";

const TABS: { id: TabId; label: string }[] = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

/* ------------------------------------------------------------------ */
/* Shared style helpers                                                */
/* ------------------------------------------------------------------ */

const cardStyle: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 14,
  padding: "1.5rem",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.45rem",
  fontWeight: 800,
  margin: "0 0 0.75rem",
  lineHeight: 1.3,
};

const h3Style: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  margin: "0 0 0.5rem",
  color: TEXT,
};

const pStyle: React.CSSProperties = {
  color: MUTED,
  fontSize: "0.95rem",
  lineHeight: 1.75,
  margin: "0 0 1rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: "uppercase",
  color: MUTED,
  marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: BG,
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  color: TEXT,
  padding: "0.7rem 0.85rem",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  outline: "none",
};

const accentBadge: React.CSSProperties = {
  background: ACCENT + "1F",
  color: ACCENT,
  padding: "0.22rem 0.85rem",
  borderRadius: 20,
  fontSize: "0.76rem",
  fontWeight: 700,
  letterSpacing: 1.2,
  textTransform: "uppercase",
};

/* ------------------------------------------------------------------ */
/* Content data                                                        */
/* ------------------------------------------------------------------ */

const PRACTICES = [
  {
    title: "The “One Next Step” Rule",
    anchor: "Matthew 6:34",
    summary:
      "Faithfulness shrunk to today. Weariness usually comes from carrying tomorrow, next month, and the next decade all at once. The one next step rule refuses that math. You are not asked to endure the whole road today — only the stretch of it under your feet.",
    steps: [
      "Each morning, name the single most faithful thing you can do in the next 24 hours — not the most impressive thing, the most faithful one.",
      "Write it down somewhere you will see it. One line. One step.",
      "When dread about the long haul rises, say out loud: “That day will have its own grace. Today has this step.”",
      "At day’s end, thank God for the step taken — even if it was small, even if it was simply not quitting.",
    ],
  },
  {
    title: "Building a Perseverance Liturgy",
    anchor: "Lamentations 3:22-23",
    summary:
      "Morning verses for hard seasons. In a long trial you cannot rely on feeling your way into hope each morning — you need a track to run on before feelings arrive. A perseverance liturgy is a short, fixed order of words you pray every morning of a hard season, the same way every day, so that repetition does what willpower cannot.",
    steps: [
      "Choose three texts: one that names the hardness honestly (a lament psalm), one that names God’s character (Lamentations 3:22-23), and one that names your hope (Romans 5:3-5).",
      "Read them aloud in the same order every morning — before the phone, before the news, before the day argues with you.",
      "Close with one fixed sentence of surrender, such as: “Father, I do not have to finish today. I only have to be faithful in it.”",
      "Keep the liturgy for the whole season. Do not tinker with it weekly; its power is in its sameness.",
    ],
  },
  {
    title: "The Cloud of Witnesses Exercise",
    anchor: "Hebrews 12:1",
    summary:
      "Learning from saints who endured. Hebrews 11 is not a trophy case; it is a coaching staff. The writer lists the endurers right before telling you to run, because watching someone else finish a hard race changes what you believe is possible in yours.",
    steps: [
      "Pick one saint — biblical (Joseph, Ruth, Jeremiah, Paul) or historical (Bunyan, ten Boom, Spurgeon) — whose trial rhymes with yours.",
      "Spend two weeks with their story: read it slowly, note where they nearly quit, and note what held them.",
      "Write down the single transferable habit you see in them — Joseph’s refusal of bitterness, Jeremiah’s honest lament, Bunyan’s redemption of confinement.",
      "Ask God for that one habit by name in your prayers for the rest of the month.",
    ],
  },
  {
    title: "Weariness Inventory",
    anchor: "Psalm 139:23-24",
    summary:
      "Naming what is draining you before God. Galatians 6:9 assumes weariness will come — the command is not “never be weary” but “do not give up because of it.” You cannot fight a fatigue you have not named. This practice drags the vague gray heaviness into the light, item by item.",
    steps: [
      "Once a week, take fifteen unhurried minutes with paper and pen.",
      "List everything currently draining you — duties, griefs, people, fears, unanswered prayers. Be specific. Vague weariness cannot be prayed over; named weariness can.",
      "Beside each item, mark it: C (carry — this is mine to bear with grace), S (share — this needs another person), or D (drop — this was never assigned to me by God).",
      "Pray through the list: ask for strength for the C items, courage for the S items, and release for the D items.",
    ],
  },
  {
    title: "Anchor Verses",
    anchor: "Psalm 119:11",
    summary:
      "Memorizing for the valley. The valley is the worst place to start looking for rope. Anchor verses are passages committed to memory in the daylight precisely so they are already there at 3 a.m., already there in the waiting room, already there when you cannot form your own words.",
    steps: [
      "Choose three: Isaiah 40:31, Galatians 6:9, and Hebrews 12:1-2 are a strong starting set.",
      "Memorize one at a time — write it on a card, say it at every red light, every kettle boil, every queue.",
      "Recite all three aloud once a day until they come without effort.",
      "When the valley arrives, do not hunt for new verses. Stand on the ones already laid down. That is what anchors are for.",
    ],
  },
  {
    title: "The Companionship Principle",
    anchor: "Ecclesiastes 4:9-12",
    summary:
      "Never endure alone. Elijah’s despair under the broom tree came after his most isolated stretch of ministry, and God’s remedy included food, sleep — and Elisha. Scripture knows nothing of solo endurance as an ideal. Lone perseverance is usually just slow-motion collapse with better posture.",
    steps: [
      "Identify one person who is allowed to ask you, at any time, “How is the long road, really?” — and give them explicit permission to ask.",
      "Set a fixed rhythm of contact for the hard season: a weekly call, a fortnightly walk. Endurance friendships need schedules, not vibes.",
      "Tell them your anchor verses and your one next step, so they can hand your own words back to you when you lose them.",
      "Do the same for someone else. Carrying a corner of another person’s burden mysteriously lightens your own (Galatians 6:2).",
    ],
  },
];

const VOICES = [
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    work: "A Long Obedience in the Same Direction",
    quote:
      "There is a great market for religious experience in our world; there is little enthusiasm for the patient acquisition of virtue, little inclination to sign up for a long apprenticeship in what earlier generations of Christians called holiness.",
    bio: "Peterson pastored one congregation in Maryland for twenty-nine years — itself a quiet act of perseverance in a culture of ministerial restlessness. His classic on the Psalms of Ascent gave the modern church its best-known phrase for endurance: discipleship is “a long obedience in the same direction,” walked out in an instant society that wants everything now. Peterson insisted that the Christian life is less like a tourist’s itinerary and more like a pilgrim’s road — unspectacular for long stretches, and holy precisely there.",
  },
  {
    name: "Charles Spurgeon",
    years: "1834–1892",
    work: "Lectures to My Students; sermons at the Metropolitan Tabernacle",
    quote: "By perseverance the snail reached the ark.",
    bio: "The most famous preacher of the Victorian era fought recurring, crushing depression for most of his adult life — what he called “the minister’s fainting fits.” He preached to thousands while sometimes barely able to rise, and he refused to hide it, telling his students that the path to great usefulness often runs through the valley. Spurgeon’s perseverance was not stoic grit; it was a daily, sometimes hourly, casting of himself on Christ. He endured not because he was strong, but because he kept returning to the One who is.",
  },
  {
    name: "Corrie ten Boom",
    years: "1892–1983",
    work: "The Hiding Place",
    quote: "There is no pit so deep that God’s love is not deeper still.",
    bio: "A Dutch watchmaker’s daughter who hid Jews from the Nazis, Corrie was arrested with her family and sent to Ravensbrück concentration camp, where her sister Betsie died. The quote above was Betsie’s, whispered in the camp, and Corrie spent the rest of her life proving it true — traveling to over sixty countries to preach forgiveness, including, famously, to one of her former guards. Her endurance in the camps was sustained by a smuggled Bible and the conviction that the deepest darkness is not deeper than God.",
  },
  {
    name: "J.C. Ryle",
    years: "1816–1900",
    work: "Holiness",
    quote:
      "He that would understand the nature of true holiness must know that the Christian is a man of war. If we would be holy, we must fight.",
    bio: "The first Anglican bishop of Liverpool wrote with a plainness that still lands like a hammer. Ryle’s Holiness frames the Christian life as a long war, not a single battle — a lifetime of fighting sin, doubt, and weariness with the weapons of grace. He had little patience for shortcuts: no instant sanctification, no victory without conflict. For Ryle, perseverance is simply what holiness looks like stretched across decades, and the believer who expects ease has misread the terms of enlistment.",
  },
  {
    name: "Elisabeth Elliot",
    years: "1926–2015",
    work: "Through Gates of Splendor; Suffering Is Never for Nothing",
    quote: "When you don’t know what to do next, do the next thing.",
    bio: "Widowed at twenty-nine when her husband Jim was killed by the Waorani people of Ecuador, Elisabeth did the unthinkable: she went, with her toddler daughter, to live among the very people who had killed him. Widowed a second time years later, she became one of the church’s steadiest voices on suffering and going on. Her counsel was never sentimental — “do the next thing” was an old poem’s line she made her life’s method: in fog and grief, faithfulness does not require a map, only the next obedient step.",
  },
  {
    name: "John Bunyan",
    years: "1628–1688",
    work: "The Pilgrim’s Progress",
    quote:
      "This hill, though high, I covet to ascend; the difficulty will not me offend.",
    bio: "A tinker turned preacher, Bunyan spent over twelve years in Bedford jail for preaching without a license, separated from his wife and children — including a blind daughter he agonized over. From that cell came The Pilgrim’s Progress, the most-printed book in English after the Bible: the story of Christian’s long, stumbling, persevering journey from the City of Destruction to the Celestial City. Bunyan did not write about endurance from a study; he wrote it from a prison, which is why pilgrims have trusted him for three and a half centuries.",
  },
];

const SCRIPTURES = [
  {
    ref: "Hebrews 12:1-3",
    theme: "Run with endurance",
    text: "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God. Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted.",
    reflection:
      "Three commands hold this passage together: lay aside, run, look. The weights to be laid aside are not necessarily sins — they are anything that slows a runner. The race is “set before us,” meaning assigned, not chosen; you do not get to pick your course, only how you run it. And the looking is the engine of the running: endurance is not generated by staring at the road but by fixing the eyes on the One who already finished it.",
  },
  {
    ref: "James 1:2-4",
    theme: "Count it all joy",
    text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    reflection:
      "James does not say the trial is joy; he says count it — an accounting term, a deliberate reckoning of what the trial will produce. The logic only works if verse 3 is true: testing produces steadfastness the way training produces muscle. The hardest phrase is “let steadfastness have its full effect” — the temptation in every trial is to cut it short, to escape before the work is done. James asks for the strangest kind of patience: patience with the process of becoming patient.",
  },
  {
    ref: "Romans 5:3-5",
    theme: "Suffering produces endurance",
    text: "Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God’s love has been poured into our hearts through the Holy Spirit who has been given to us.",
    reflection:
      "Paul builds a four-link chain, and the order matters: suffering is the raw material, endurance is what it forges, character is what endurance settles into, and hope is what character finally dares to hold. Notice that hope comes last, not first — the most hopeful Christians are usually not the ones who have suffered least, but the ones in whom suffering has finished its slow work. And the chain does not hang from willpower; it hangs from poured-out love, the Spirit’s own presence.",
  },
  {
    ref: "Galatians 6:9",
    theme: "Do not grow weary",
    text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    reflection:
      "This verse assumes the very thing it warns against: Paul expects that doing good gets wearying, that sowing without visible harvest grinds the soul. The promise is agricultural and therefore slow — “in due season,” not on demand. There is a gap, sometimes a long one, between sowing and reaping, and almost all quitting happens in that gap. The verse’s entire weight rests on its final clause: the harvest is certain, but it is conditional on one thing only — not giving up.",
  },
  {
    ref: "2 Timothy 4:7",
    theme: "I have finished the race",
    text: "I have fought the good fight, I have finished the race, I have kept the faith.",
    reflection:
      "Paul writes this from a Roman cell, awaiting execution — and the verbs are all completed: fought, finished, kept. He does not claim to have won every battle or run every mile gracefully; he claims to have finished. That is the whole ambition of perseverance: not a spotless record but a completed course. These words are the destination of every other passage on this page — what Hebrews calls running and James calls steadfastness, Paul, at the end, simply calls done.",
  },
  {
    ref: "Isaiah 40:28-31",
    theme: "They shall mount up with wings",
    text: "Have you not known? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable. He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    reflection:
      "The passage begins not with the weary believer but with the unwearied God — perseverance theology always starts there. Then comes the startling honesty: even youths faint; natural strength, however abundant, runs out. The renewal belongs to “those who wait,” and the final sequence is easy to miss: flying, then running, then walking. The order descends on purpose. The greatest miracle of endurance is not soaring; it is walking — one foot, then the other, on the longest days — and not fainting.",
  },
];

const VIDEOS = [
  { videoId: "zXDAYlhdkyg", title: "Hebrews 12: Run with Endurance", caption: "A walk through the race imagery of Hebrews 12 — the witnesses, the weights, and the fixed gaze on Christ." },
  { videoId: "O4ZWmm8YOBg", title: "Eugene Peterson: A Long Obedience", caption: "Peterson on discipleship in an instant society and why the Psalms of Ascent are songs for the long road." },
  { videoId: "2pZqLAbIN0w", title: "When You Want to Give Up - Christian Perseverance", caption: "For the believer in the gap between sowing and reaping — why quitting feels logical and why it is not." },
  { videoId: "lTKj9Iw5PWc", title: "Corrie ten Boom's Story of Endurance", caption: "The Hiding Place, Ravensbrück, and a love deeper than the deepest pit." },
  { videoId: "bUtR1NyptEk", title: "James 1: The Testing of Your Faith", caption: "How trials produce steadfastness, and what it means to let endurance have its full effect." },
  { videoId: "vQbeoVnGCRU", title: "Finishing Well: 2 Timothy 4", caption: "Paul's final letter and the three completed verbs every believer hopes to say: fought, finished, kept." },
];

const RELATED = [
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/hebrews-guide", label: "Book of Hebrews Guide" },
  { href: "/christian-hope", label: "Christian Hope" },
  { href: "/waiting-on-god", label: "Waiting on God" },
  { href: "/spiritual-dryness", label: "Spiritual Dryness" },
  { href: "/assurance-of-salvation", label: "Assurance of Salvation" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ChristianPerseverancePage() {
  const [tab, setTab] = useState<TabId>("theology");

  // Journal state
  const [entries, setEntries] = useState<PSVEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [trial, setTrial] = useState("");
  const [promise, setPromise] = useState("");
  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable; entries stay in memory
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!trial.trim() && !promise.trim() && !nextStep.trim()) return;
    setEntries((prev) => [
      { trial: trial.trim(), promise: promise.trim(), nextStep: nextStep.trim() },
      ...prev,
    ]);
    setTrial("");
    setPromise("");
    setNextStep("");
  };

  const deleteEntry = (idx: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />

      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* ---------------------------------------------------------- */}
        {/* Hero                                                       */}
        {/* ---------------------------------------------------------- */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={accentBadge}>Endurance &amp; Faith</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.7rem)", fontWeight: 900, lineHeight: 1.18, margin: "0.85rem 0 0.85rem" }}>
          Run with Endurance: A Guide to Christian Perseverance
        </h1>

        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75, maxWidth: 680, margin: "0 0 1rem" }}>
          The Christian life is not a sprint to a decision; it is a marathon toward a Person. Scripture
          assumes weariness, expects trials, and warns about fainting — and then it makes a promise:
          &ldquo;in due season we will reap, if we do not give up&rdquo; (Galatians 6:9). This guide is for
          the long road: the theology that explains it, the practices that sustain it, the saints who
          walked it before you, and the Scriptures that carry you when your own strength runs out.
        </p>

        <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, maxWidth: 680, margin: "0 0 2rem" }}>
          Eugene Peterson called discipleship &ldquo;a long obedience in the same direction&rdquo; — not a
          burst of spiritual enthusiasm, but a steady, unglamorous, decades-long walking with God through
          every season. If you are weary today, this page was built for you.
        </p>

        {/* ---------------------------------------------------------- */}
        {/* Tab bar                                                    */}
        {/* ---------------------------------------------------------- */}
        <div
          role="tablist"
          aria-label="Christian perseverance guide sections"
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem" }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? ACCENT : "transparent",
                color: tab === t.id ? "#FFFFFF" : MUTED,
                border: `1px solid ${tab === t.id ? ACCENT : BORDER}`,
                borderRadius: 999,
                padding: "0.5rem 1.1rem",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ---------------------------------------------------------- */}
        {/* THEOLOGY                                                   */}
        {/* ---------------------------------------------------------- */}
        {tab === "theology" && (
          <section aria-label="Theology of perseverance" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Race Set Before Us <span style={{ color: ACCENT, fontSize: "0.95rem", fontWeight: 700 }}>Hebrews 12:1-3</span></h2>
              <p style={pStyle}>
                The Bible&rsquo;s master image for perseverance is athletic: a long-distance race, run in
                an arena, watched by a stadium of finishers. Hebrews 12 gives the runner three
                instructions. First, <em>lay aside every weight</em> — and notice that weights are not the
                same as sins. A weight may be a perfectly good thing that nevertheless slows you down:
                an ambition, a habit, a grievance carried too long. Runners strip down not because
                clothing is evil but because the race is serious.
              </p>
              <p style={pStyle}>
                Second, <em>run the race set before us</em>. The course is assigned, not chosen. Nobody
                consults the runner about the hills. Your particular race — your body, your family, your
                losses, your era — was set before you by a God who knows the course intimately. The
                question of perseverance is never &ldquo;why this course?&rdquo; but &ldquo;how shall I run
                it?&rdquo;
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                Third, and decisively: <em>look to Jesus</em>, the founder and perfecter of faith, who
                &ldquo;for the joy that was set before him endured the cross.&rdquo; Endurance is not
                produced by gritting at the road; it is produced by gazing at the finish — at the One who
                ran the whole race first, through Gethsemane and Golgotha, and now sits enthroned.
                Verse 3 makes the application explicit: <em>consider him</em>&hellip; &ldquo;so that you
                may not grow weary or fainthearted.&rdquo; Weariness is fought with contemplation before
                it is fought with effort.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Testing Produces Perseverance <span style={{ color: ACCENT, fontSize: "0.95rem", fontWeight: 700 }}>James 1:2-4</span></h2>
              <p style={pStyle}>
                James opens his letter with what may be the least intuitive command in the New Testament:
                &ldquo;Count it all joy, my brothers, when you meet trials of various kinds.&rdquo; The key
                word is <em>count</em> — a bookkeeping word. James is not asking you to feel happy about
                suffering; he is asking you to do an honest audit of what suffering, in God&rsquo;s hands,
                actually produces. The testing of faith works steadfastness the way resistance works
                muscle: there is no other way to get it.
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                Then the strangest instruction: &ldquo;let steadfastness have its full effect.&rdquo;
                Every trial comes with an exit sign glowing in the corner — the shortcut, the compromise,
                the numbing agent, the quiet abandonment of hope. James says: do not take it. Endurance
                interrupted produces nothing; endurance completed produces maturity — &ldquo;perfect and
                complete, lacking in nothing.&rdquo; The trial is not the point. What the trial is
                building in you is the point, and God does not abandon construction projects halfway.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Will I Make It to the End? Two Views</h2>
              <p style={pStyle}>
                Every weary believer eventually asks: <em>can I actually fall away — or will God keep me
                to the end?</em> Faithful Christians have answered this differently for centuries, and it
                is worth hearing both traditions at their best, because both are guarding something
                biblical.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ ...h3Style, color: ACCENT }}>Perseverance of the Saints (Reformed)</h3>
                  <p style={{ ...pStyle, fontSize: "0.9rem" }}>
                    The Reformed tradition teaches that all who are truly regenerate will certainly
                    persevere to the end — not because believers are strong, but because God is faithful
                    to finish what he began. Jesus says of his sheep, &ldquo;no one will snatch them out
                    of my hand&rdquo; (John 10:28-29); Paul is &ldquo;sure that he who began a good work
                    in you will bring it to completion&rdquo; (Philippians 1:6); and the golden chain of
                    Romans 8:30 runs unbroken from calling to glorification.
                  </p>
                  <p style={{ ...pStyle, fontSize: "0.9rem", margin: 0 }}>
                    Crucially, this is <em>perseverance</em>, not mere preservation: the saints are kept
                    <em> through</em> their continuing in faith, not apart from it. Those who fall away
                    finally and completely, on this view, show that they were never truly born again
                    (1 John 2:19). The doctrine&rsquo;s pastoral gift is assurance — your endurance rests
                    on God&rsquo;s grip, not yours.
                  </p>
                </div>

                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ ...h3Style, color: ACCENT }}>Conditional Security (Arminian)</h3>
                  <p style={{ ...pStyle, fontSize: "0.9rem" }}>
                    The Arminian tradition teaches that genuine believers are completely secure in
                    Christ — but that this security is enjoyed through continued faith, and that real
                    apostasy is a real possibility. It takes the Bible&rsquo;s warning passages at full
                    face value: Hebrews 6:4-6 and 10:26-29 describe people who were &ldquo;enlightened&rdquo;
                    and &ldquo;sanctified&rdquo; and yet fell away; Jesus warns of branches in him that do
                    not abide (John 15:6).
                  </p>
                  <p style={{ ...pStyle, fontSize: "0.9rem", margin: 0 }}>
                    On this view the warnings are not hypothetical; they are God&rsquo;s appointed means
                    of keeping believers alert and abiding. The doctrine&rsquo;s pastoral gift is
                    seriousness — faith is a living relationship to be nourished, never a transaction to
                    be filed away. No one drifts into heaven.
                  </p>
                </div>
              </div>

              <p style={{ ...pStyle, margin: 0 }}>
                What both traditions agree on matters more than where they differ: perseverance is
                <em> necessary</em> — &ldquo;the one who endures to the end will be saved&rdquo;
                (Matthew 24:13); perseverance is <em>empowered by grace</em>, never self-generated; and
                the warning passages are to be heeded, not explained away. The Reformed believer heeds
                them as God&rsquo;s means of keeping her; the Arminian believer heeds them as God&rsquo;s
                means of warning him. Both, on a weary Tuesday, end up in the same posture: clinging to
                Christ, who is able to keep you from stumbling (Jude 24).
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Chain of Hope <span style={{ color: ACCENT, fontSize: "0.95rem", fontWeight: 700 }}>Romans 5:3-5</span></h2>
              <p style={pStyle}>
                Paul dares to say &ldquo;we rejoice in our sufferings&rdquo; — and then immediately shows
                his work. Suffering produces endurance; endurance produces character (the word means
                <em> testedness</em>, metal proven in fire); and character produces hope. Read the chain
                slowly and notice what it implies: hope is not the naive possession of those who have
                never suffered. Hope, in Paul&rsquo;s economy, is a <em>late-stage</em> virtue — the
                hard-won confidence of people whom suffering has already tested and not destroyed.
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                And the chain does not hang in midair. &ldquo;Hope does not put us to shame, because
                God&rsquo;s love has been poured into our hearts through the Holy Spirit.&rdquo; The
                engine of the whole sequence is not human resilience but divine love, already poured,
                already present. You are not enduring toward God&rsquo;s love; you are enduring
                <em> inside</em> it.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Cloud of Witnesses <span style={{ color: ACCENT, fontSize: "0.95rem", fontWeight: 700 }}>Hebrews 11–12</span></h2>
              <p style={pStyle}>
                Before Hebrews says &ldquo;run,&rdquo; it spends an entire chapter naming runners: Abel,
                Enoch, Noah, Abraham, Sarah, Moses, Rahab — and then the anonymous ones, tortured,
                mocked, sawn in two, &ldquo;of whom the world was not worthy.&rdquo; These are the
                &ldquo;great cloud of witnesses.&rdquo; The word is <em>martyres</em> — witnesses in the
                sense of testifiers, not spectators. They are not leaning over heaven&rsquo;s rail
                watching your form; they are evidence, a stadium full of sworn testimony that God keeps
                faith with those who endure.
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                This is why the church has always told the stories of those who finished — biblical
                saints, martyrs, missionaries, grandmothers. Perseverance is communal and historical.
                Every account of someone who endured to the end quietly resizes your sense of what is
                possible, and Hebrews 11:40 adds the astonishing note that their story is incomplete
                without yours: &ldquo;apart from us they should not be made perfect.&rdquo;
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Why God Allows the Long Road <span style={{ color: ACCENT, fontSize: "0.95rem", fontWeight: 700 }}>Deuteronomy 8:2-3</span></h2>
              <p style={pStyle}>
                The journey from Egypt to Canaan does not require forty years. God could have marched
                Israel in within weeks — and chose not to. Moses gives the reason on the far side of
                the wilderness: &ldquo;Remember the whole way that the LORD your God has led you these
                forty years in the wilderness, that he might humble you, testing you to know what was in
                your heart&hellip; And he humbled you and let you hunger and fed you with manna&hellip;
                that he might make you know that man does not live by bread alone, but by every word
                that comes from the mouth of the LORD.&rdquo;
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                The long road, in other words, is curriculum. The wilderness teaches three things the
                shortcut never could: humility (you are not self-sufficient), revelation (the testing
                shows you your own heart, which you did not know), and dependence (manna comes daily,
                never in warehouses). When God takes you the long way, he has not lost the map. He is
                doing in you, slowly, what cannot be done quickly. The destination was never only
                Canaan; it was a people who knew their God.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Finishing Well vs. Starting Strong</h2>
              <p style={pStyle}>
                Scripture is haunted by strong starters who finished badly. Saul began anointed and
                humble and ended consulting a medium. Solomon began with wisdom from heaven and ended
                with a divided heart and a divided kingdom. Demas was once named alongside Luke as
                Paul&rsquo;s fellow worker — and earned the saddest sentence in the epistles:
                &ldquo;Demas, in love with this present world, has deserted me&rdquo; (2 Timothy 4:10).
                Starting strong, it turns out, predicts very little. The biblical pattern is sobering:
                most great failures are second-half failures.
              </p>
              <p style={pStyle}>
                Against them stands Paul, writing from a cell with the executioner near: &ldquo;I have
                fought the good fight, I have finished the race, I have kept the faith&rdquo;
                (2 Timothy 4:7). Note the modesty of the claim. Not &ldquo;I won every battle&rdquo; or
                &ldquo;I ran every mile beautifully&rdquo; — only <em>fought, finished, kept</em>.
                Finishing well does not require an unblemished record. It requires not abandoning the
                course.
              </p>
              <p style={{ ...pStyle, margin: 0 }}>
                Practically, those who finish well tend to share unglamorous habits: they stay teachable
                into old age, they keep short accounts with sin, they remain embedded in real community,
                and they transfer their hope steadily from this life to the next. The race is not won at
                the starting gun. It is won — by grace, step after step — at the tape.
              </p>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* PRACTICES                                                  */}
        {/* ---------------------------------------------------------- */}
        {tab === "practices" && (
          <section aria-label="Practices for perseverance" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, fontSize: "1rem", maxWidth: 680 }}>
              Endurance is not a mood; it is a set of habits practiced long before the crisis and
              leaned on during it. These six practices are drawn from Scripture and from the saints who
              finished well. Start with one. Faithfulness compounds.
            </p>

            {PRACTICES.map((practice, i) => (
              <div key={practice.title} style={cardStyle}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "1.3rem", lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 style={{ ...h2Style, margin: 0, fontSize: "1.25rem" }}>{practice.title}</h2>
                  <span style={{ color: MUTED, fontSize: "0.82rem", fontStyle: "italic" }}>{practice.anchor}</span>
                </div>
                <p style={pStyle}>{practice.summary}</p>
                <h3 style={{ ...h3Style, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, color: ACCENT }}>How to practice it</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {practice.steps.map((step) => (
                    <li key={step} style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7 }}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}

            <div style={{ ...cardStyle, borderColor: ACCENT + "55" }}>
              <h2 style={{ ...h2Style, fontSize: "1.15rem" }}>A word for the truly exhausted</h2>
              <p style={{ ...pStyle, margin: 0 }}>
                If even these practices feel like one more weight, start smaller still. Elijah&rsquo;s
                recovery under the broom tree began with sleep and food before it included a single
                spiritual word (1 Kings 19:5-8). Sometimes the most faithful next step is rest taken
                without guilt, a meal eaten slowly, and one honest sentence prayed: &ldquo;Lord, I am
                weary. Hold me while I cannot hold on.&rdquo; He is not disappointed in tired runners.
                He gives power to the faint.
              </p>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* VOICES                                                     */}
        {/* ---------------------------------------------------------- */}
        {tab === "voices" && (
          <section aria-label="Voices on perseverance" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, fontSize: "1rem", maxWidth: 680 }}>
              The cloud of witnesses did not stop growing at Hebrews 11. These six endured prison,
              depression, concentration camps, widowhood, and decades of obscurity — and finished. Let
              their testimony resize what you believe is possible in your own race.
            </p>

            {VOICES.map((voice) => (
              <div key={voice.name} style={cardStyle}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h2 style={{ ...h2Style, margin: 0, fontSize: "1.25rem" }}>{voice.name}</h2>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{voice.years}</span>
                </div>
                <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 700, margin: "0 0 0.85rem" }}>{voice.work}</p>
                <blockquote
                  style={{
                    margin: "0 0 1rem",
                    padding: "0.85rem 1.1rem",
                    borderLeft: `3px solid ${ACCENT}`,
                    background: BG,
                    borderRadius: "0 10px 10px 0",
                    color: TEXT,
                    fontSize: "0.97rem",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{voice.quote}&rdquo;
                </blockquote>
                <p style={{ ...pStyle, margin: 0 }}>{voice.bio}</p>
              </div>
            ))}
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* SCRIPTURE                                                  */}
        {/* ---------------------------------------------------------- */}
        {tab === "scripture" && (
          <section aria-label="Scriptures on perseverance" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, fontSize: "1rem", maxWidth: 680 }}>
              Six anchor passages for the long road. Read them slowly; better yet, memorize them in the
              daylight so they are already with you in the valley.
            </p>

            {SCRIPTURES.map((s) => (
              <div key={s.ref} style={cardStyle}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  <h2 style={{ ...h2Style, margin: 0, fontSize: "1.2rem", color: ACCENT }}>{s.ref}</h2>
                  <span style={{ color: MUTED, fontSize: "0.85rem", fontStyle: "italic" }}>{s.theme}</span>
                </div>
                <blockquote
                  style={{
                    margin: "0 0 1rem",
                    padding: "1rem 1.2rem",
                    borderLeft: `3px solid ${ACCENT}`,
                    background: BG,
                    borderRadius: "0 10px 10px 0",
                    color: TEXT,
                    fontSize: "0.96rem",
                    lineHeight: 1.8,
                  }}
                >
                  &ldquo;{s.text}&rdquo;
                </blockquote>
                <h3 style={{ ...h3Style, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1, color: MUTED }}>Reflection</h3>
                <p style={{ ...pStyle, margin: 0 }}>{s.reflection}</p>
              </div>
            ))}
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* JOURNAL                                                    */}
        {/* ---------------------------------------------------------- */}
        {tab === "journal" && (
          <section aria-label="Perseverance journal" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, fontSize: "1rem", maxWidth: 680 }}>
              A simple discipline for hard seasons: name the trial honestly, choose the promise you are
              holding onto, and shrink faithfulness to one next step. Entries are saved privately in your
              browser — no account, no cloud, just you and the page.
            </p>

            <div style={cardStyle}>
              <h2 style={{ ...h2Style, fontSize: "1.2rem" }}>New entry</h2>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="psv-trial" style={labelStyle}>The trial or weariness I am facing</label>
                <textarea
                  id="psv-trial"
                  value={trial}
                  onChange={(e) => setTrial(e.target.value)}
                  placeholder="Name it specifically. What is wearing you down right now?"
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="psv-promise" style={labelStyle}>The promise I am holding onto</label>
                <textarea
                  id="psv-promise"
                  value={promise}
                  onChange={(e) => setPromise(e.target.value)}
                  placeholder="A scripture promise for this season — e.g. Galatians 6:9, Isaiah 40:31"
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="psv-step" style={labelStyle}>My one next faithful step</label>
                <input
                  id="psv-step"
                  type="text"
                  value={nextStep}
                  onChange={(e) => setNextStep(e.target.value)}
                  placeholder="Just one. Small is fine. What will you do today?"
                  style={inputStyle}
                />
              </div>

              <button
                onClick={saveEntry}
                style={{
                  background: ACCENT,
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Save entry
              </button>
            </div>

            <div>
              <h2 style={{ ...h2Style, fontSize: "1.2rem", marginBottom: "1rem" }}>
                Your entries{" "}
                <span style={{ color: MUTED, fontSize: "0.9rem", fontWeight: 600 }}>
                  ({entries.length})
                </span>
              </h2>

              {entries.length === 0 ? (
                <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                  <p style={{ ...pStyle, margin: 0 }}>
                    No entries yet. Weariness named is weariness halved — write your first one above.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map((entry, idx) => (
                    <div key={`${idx}-${entry.trial.slice(0, 24)}`} style={cardStyle}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          {entry.trial && (
                            <div style={{ marginBottom: "0.75rem" }}>
                              <span style={{ ...labelStyle, marginBottom: "0.2rem" }}>Trial</span>
                              <p style={{ ...pStyle, margin: 0, color: TEXT }}>{entry.trial}</p>
                            </div>
                          )}
                          {entry.promise && (
                            <div style={{ marginBottom: "0.75rem" }}>
                              <span style={{ ...labelStyle, marginBottom: "0.2rem", color: ACCENT }}>Promise</span>
                              <p style={{ ...pStyle, margin: 0 }}>{entry.promise}</p>
                            </div>
                          )}
                          {entry.nextStep && (
                            <div>
                              <span style={{ ...labelStyle, marginBottom: "0.2rem" }}>Next faithful step</span>
                              <p style={{ ...pStyle, margin: 0 }}>{entry.nextStep}</p>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => deleteEntry(idx)}
                          aria-label={`Delete entry ${idx + 1}`}
                          style={{
                            background: "transparent",
                            color: MUTED,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            padding: "0.35rem 0.8rem",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            flexShrink: 0,
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* VIDEOS                                                     */}
        {/* ---------------------------------------------------------- */}
        {tab === "videos" && (
          <section aria-label="Videos on perseverance" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, fontSize: "1rem", maxWidth: 680 }}>
              Teaching and testimony for the long road — from the race of Hebrews 12 to the finished
              course of 2 Timothy 4.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {VIDEOS.map((video) => (
                <div key={video.videoId} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                    <h2 style={{ ...h3Style, fontSize: "1rem", marginBottom: "0.4rem" }}>{video.title}</h2>
                    <p style={{ ...pStyle, fontSize: "0.86rem", margin: 0 }}>{video.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------- */}
        {/* Closing word + related guides                              */}
        {/* ---------------------------------------------------------- */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ ...cardStyle, borderColor: ACCENT + "44", marginBottom: "2rem" }}>
            <h2 style={{ ...h2Style, fontSize: "1.2rem" }}>A closing word</h2>
            <p style={{ ...pStyle, margin: 0 }}>
              However tired you are today, hear this: the God who called you does not faint or grow
              weary (Isaiah 40:28). Your perseverance does not finally rest on the strength of your
              grip but on the faithfulness of his. Lay aside the weight you have been carrying alone,
              take the one next faithful step, and keep your eyes on the Founder and Perfecter of your
              faith. In due season you will reap — if you do not give up. And by his grace, you will
              not.
            </p>
          </div>

          <h2 style={{ ...h2Style, fontSize: "1.1rem" }}>Related guides on The Vine</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 999,
                  padding: "0.5rem 1.1rem",
                  color: TEXT,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
