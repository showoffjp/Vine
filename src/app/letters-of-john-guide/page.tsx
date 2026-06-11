"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", BLUE = "#3B82F6", RED = "#EF4444";

type Tab = "overview" | "light" | "love" | "truth" | "assurance" | "worldview" | "journal" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "light", label: "God Is Light (1 Jn 1-2)" },
  { id: "love", label: "God Is Love (1 Jn 3-4)" },
  { id: "truth", label: "Truth & Deception (2-3 Jn)" },
  { id: "assurance", label: "Assurance Tests" },
  { id: "worldview", label: "The World & the Believer" },
  { id: "journal", label: "My Journal" },
  { id: "videos", label: "Videos" },
];

const VITAL_STATS = [
  ["Author", "John the Apostle"],
  ["Date", "AD 85–95"],
  ["Context", "Ephesian community"],
  ["Audience", "Asian house churches"],
  ["Crisis", "Proto-Gnostic teachers"],
  ["Key Verse", "1 Jn 5:13"],
];

const LIGHT_SECTIONS = [
  {
    ref: "1 Jn 1:1-4",
    color: BLUE,
    title: "The Prologue — What We Have Touched",
    content:
      "\"That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked at and our hands have touched — this we proclaim concerning the Word of life.\" John opens his letter with the same kind of cosmic statement as his Gospel, but here it is immediately grounded in physical sensation: hearing, seeing, touching. The Word of life was encountered bodily. This is no accident — John is already countering the proto-Gnostic tendency to dismiss the physical. The purpose of this proclamation is fellowship: so that you too may have fellowship with us, and our fellowship is with the Father and his Son. Joy made complete is communal joy, not solitary mysticism.",
  },
  {
    ref: "1 Jn 1:5-10",
    color: BLUE,
    title: "God Is Light — Three False Claims and Their Corrections",
    content:
      "\"God is light, and in him is no darkness at all.\" John then examines three self-deceiving claims that some in the community were apparently making. (1) \"We have fellowship with him\" while walking in darkness — we lie and do not practice the truth (1:6). Fellowship with God requires moral alignment with his character. (2) \"We have no sin\" — we deceive ourselves, and the truth is not in us (1:8). Claiming sinlessness is not spiritual achievement but spiritual self-deception. (3) \"We have not sinned\" — we make God a liar (1:10). The antidote to all three is 1:9: if we confess our sins, he is faithful and just to forgive and cleanse. The path is not sinlessness but honesty.",
  },
  {
    ref: "1 Jn 2:1-2",
    color: BLUE,
    title: "Our Advocate — Propitiation for the Whole World",
    content:
      "\"My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.\" The pastoral balance is exact: John calls for holiness without promising perfection. The word \"advocate\" (paraklētos) is the same word used for the Holy Spirit in the Gospel of John — Jesus is our defense attorney before the Father. \"Propitiation\" (hilasmos) carries the weight of the wrath-averting sacrifice: Jesus stands in the gap, absorbing the consequences of human sin. The scope — \"the whole world\" — is the widest possible circle; no one is beyond the reach of this provision.",
  },
  {
    ref: "1 Jn 2:3-11",
    color: BLUE,
    title: "Keeping Commandments — The Old and New",
    content:
      "\"Whoever says 'I know him' but does not keep his commandments is a liar, and the truth is not in him.\" John's epistemological claim is sharp: genuine knowledge of God produces obedience. This is not moralism — the obedience is the overflow of knowing God, not the condition for earning his favor. The commandment in question is ultimately \"love one another\" — called both old (from the beginning) and new (its newness being the eschatological fullness it now carries, filled with the love of Christ). The test of being in the light or darkness is not doctrinal confession alone but relational reality: hating your brother while claiming to be in the light is walking in darkness.",
  },
  {
    ref: "1 Jn 2:12-14",
    color: BLUE,
    title: "Children, Fathers, Young Men",
    content:
      "John addresses three groups — \"little children\" (whose sins are forgiven for his name's sake), \"fathers\" (who have known him who is from the beginning), and \"young men\" (who have overcome the evil one, are strong, and have the word of God abiding in them). Whether these represent stages of spiritual maturity or different age groups in the congregation, the effect is the same: John is asserting to each group that they already possess something real. He is not writing to create anxiety; he is affirming the genuine spiritual capital that each segment of the community holds. The repetition (he addresses each group twice) emphasizes his certainty about their standing.",
  },
  {
    ref: "1 Jn 2:15-17",
    color: BLUE,
    title: "Do Not Love the World",
    content:
      "\"Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.\" John defines the world's content: the desires of the flesh (appetite — wanting what the body wants when the body wants it), the desires of the eyes (acquisition — wanting what belongs to another), and the pride of life (achievement — identity built on status, accomplishment, and comparison). These three categories echo the Eden temptation: \"the woman saw that the tree was good for food [flesh], and a delight to the eyes [eyes], and desirable to make one wise [pride of life]\" (Gen 3:6). The world is passing away. The one who does the will of God abides forever.",
  },
  {
    ref: "1 Jn 2:18-29",
    color: BLUE,
    title: "Antichrists — and the Anointing That Teaches",
    content:
      "\"Children, it is the last hour, and as you have heard that antichrist is coming, so now many antichrists have come.\" The antichrists were once insiders — \"they went out from us, but they were not of us; for if they had been of us, they would have continued with us\" (2:19). Their departure revealed that their membership was never genuine. Against this destabilizing reality, John insists that the community has the \"chrisma\" — the anointing of the Holy Spirit — that teaches all truth. They do not need these departing teachers as sources of superior knowledge; they have the Spirit. The instruction: abide in him, abide in what you heard from the beginning, so that when he appears you may have confidence and not shrink from him in shame.",
  },
];

const LOVE_SECTIONS = [
  {
    ref: "1 Jn 3:1-3",
    color: GOLD,
    title: "Children of God — The Foundation of Christian Identity",
    content:
      "\"See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!\" The exclamation point is John's own, not a translator's addition — the Greek construction carries urgency and wonder. Our identity as children of God is not aspirational or positional-only; it is real. The world does not recognize us because it did not recognize him. What we will be has not yet appeared, but we know that when he appears we will be like him, because we will see him as he is. This eschatological hope — being transformed into the likeness of Christ — is not a distant consolation but a present purifying force: everyone who has this hope purifies himself as he is pure.",
  },
  {
    ref: "1 Jn 3:4-10",
    color: GOLD,
    title: "Two Families — Righteousness vs. Sin, Love vs. Hate",
    content:
      "\"The one born of God does not keep on sinning\" — the present continuous tense in Greek is critical. John is not claiming that Christians never sin (1:8-9 already ruled that out). He is claiming that habitual, unrepentant, continuous sinning is incompatible with genuine new birth. The passage constructs two families: children of God and children of the devil. The distinguishing marks are ethical: the one from God practices righteousness; the one from the devil does not. The devil sinned from the beginning; the Son of God appeared to destroy the devil's works. Those born of God have a seed — the divine nature — remaining in them. The two families are not determined by ethnicity or religious affiliation but by the direction of their moral life.",
  },
  {
    ref: "1 Jn 3:11-18",
    color: GOLD,
    title: "Cain, Hatred, and Love in Deed",
    content:
      "\"For this is the message you have heard from the beginning, that we should love one another.\" John reaches back to Genesis for the archetypal example of what the opposite looks like: Cain, who murdered Abel. Why did Cain murder him? Because his own deeds were evil and his brother's were righteous. The world's pattern is hatred of the righteous. \"We know that we have passed from death to life, because we love each other\" (3:14) — a present-tense assurance rooted in observable love. The death-to-life transition is visible in its fruit. But the definition of love is not sentimental: \"By this we know love, that he laid down his life for us\" (3:16). The cross defines love. The application is immediate: not love in word and tongue but in deed and truth (3:18) — if you see your brother in material need and close your heart against him, how does God's love abide in you?",
  },
  {
    ref: "1 Jn 3:19-24",
    color: GOLD,
    title: "When Our Heart Condemns Us",
    content:
      "\"Whenever our heart condemns us, God is greater than our heart, and he knows everything.\" This is one of the most pastorally powerful sentences in the NT. John does not say: ignore your conscience, or silence your doubts. He says: when your heart condemns you, bring it before the One whose knowledge is complete and whose verdict in Christ is not overturned by internal accusation. God's knowledge is greater than our heart's condemning voice — he knows all the extenuating circumstances, all the growth we cannot see, all the grace at work beneath the surface of our failures. The confidence that follows (3:21-22) is not earned by a quiet conscience but grounded in the one who is greater.",
  },
  {
    ref: "1 Jn 4:1-6",
    color: GOLD,
    title: "Testing the Spirits — The Incarnation Test",
    content:
      "\"Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world.\" The test is Christological and specific: every spirit that confesses that Jesus Christ has come in the flesh is from God; every spirit that does not confess Jesus is not from God (4:2-3). The specific denial — that Jesus came in the flesh — is the proto-Docetic error: the conviction that the divine Christ could not have truly taken a material, mortal human body. If this denial is accepted, the atonement unravels. John's reassurance: \"He who is in you is greater than he who is in the world\" (4:4). The community is not at the mercy of these spirits — the indwelling Spirit of God is greater.",
  },
  {
    ref: "1 Jn 4:7-12",
    color: GOLD,
    title: "God Is Love — Twice Stated",
    content:
      "\"God is love\" appears twice in this passage (4:8 and 4:16) — the most theologically dense claim in the letter. John does not say God is loving (an attribute) or that God loves (an action), but that God is love — love constitutes his being. This is possible because God is eternally triune: love requires a lover, a beloved, and the love between them — the eternal Son beloved by the eternal Father in the bond of the eternal Spirit. The definition of love is not an emotion but an act: \"In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins\" (4:10). The cross is the definition of love, not merely its illustration. The implication: if God so loved us, we ought to love one another.",
  },
  {
    ref: "1 Jn 4:13-21",
    color: GOLD,
    title: "Perfect Love Casts Out Fear",
    content:
      "\"There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love\" (4:18). The fear John has in mind is not the reverent fear of the Lord but the servile terror of one who expects punishment — the fear of one who is not sure God is for them. This fear is not cast out by effort or by suppressing the emotion; it is cast out by the reception of perfect love. The sequence is clear: God loved us first (4:19) → we love God and one another → love without fear. The inability to love the visible brother is evidence that love of the invisible God is absent (4:20) — the vertical and horizontal are inseparable.",
  },
];

const TRUTH_SECTIONS = [
  {
    ref: "2 John Overview",
    color: PURPLE,
    title: "The Elect Lady — Truth and Love Together",
    content:
      "2 John is the second shortest book in the NT (13 verses), written to \"the elect lady and her children\" — almost certainly a local church and its members, not a literal woman. The letter opens with the extraordinary phrase: \"whom I love in truth — and not only I, but also all who know the truth\" (v. 1). Love and truth are inseparable in Johannine thought: love without truth becomes sentimentality that tolerates error; truth without love becomes harsh orthodoxy that destroys relationship. The letter is a miniaturized version of 1 John's central argument, applied to the specific question of hospitality toward traveling teachers.",
  },
  {
    ref: "2 Jn 7-11",
    color: PURPLE,
    title: "The Warning: Do Not Welcome Antichrists",
    content:
      "\"Many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the deceiver and the antichrist\" (v. 7). The practical instruction follows: watch yourselves, do not lose what we have worked for, and do not receive these teachers or give them a greeting. \"For whoever greets him takes part in his wicked works\" (v. 11). In the ancient world, hospitality to itinerant teachers was how their ministry was sustained and their teaching spread. To welcome a false teacher was to become a distribution channel for error. This is not a license for general inhospitality or rudeness; it is a specific instruction about those whose teaching destroys the foundations of the gospel.",
  },
  {
    ref: "3 John Overview",
    color: GREEN,
    title: "Gaius, Diotrephes, and Demetrius",
    content:
      "3 John is the shortest book in the NT (15 verses), addressed to Gaius — a beloved individual whose faithfulness to traveling missionaries has been reported to John. The letter is a study in contrasts: Gaius, who walks in truth and shows hospitality (commended); Diotrephes, who loves to be first, refuses to welcome the brothers, and expels from the church those who do (rebuked); and Demetrius, who has a good testimony from everyone and from the truth itself (recommended). Diotrephes is a warning about the toxicity of ambition within church leadership — his love of preeminence produces a ministry of exclusion rather than welcome.",
  },
  {
    ref: "Walking in Truth",
    color: PURPLE,
    title: "\"Walking in Truth\" as a Johannine Key",
    content:
      "John's highest praise for Gaius is: \"I have no greater joy than to hear that my children are walking in the truth\" (3 Jn 4). He said the same to the elect lady: \"I rejoiced greatly to find some of your children walking in the truth\" (2 Jn 4). \"Walking in truth\" is not primarily a cognitive state (believing the right propositions) but a way of life in alignment with reality as revealed in Christ — truthful relationships, truthful worship, truthful ethics. Truth in the Johannine tradition is concrete and incarnational: it was seen, heard, and touched in the person of Jesus. To walk in truth is to order one's life according to that reality rather than the world's alternative narrative.",
  },
  {
    ref: "Love & Discernment",
    color: RED,
    title: "Love and Discernment — Not a Contradiction",
    content:
      "The letters of John seem to hold in tension a radical command to love (1 John) and a strict command to discriminate (2 John: do not welcome false teachers). This is not a contradiction. Love for the church — including its most vulnerable members who can be led astray by sophisticated teachers — requires refusing to provide platform and resources to those whose teaching destroys faith. The mother who bars the door to someone who would harm her children is not being unloving; she is being loving toward the right people. Genuine love has discernment built in. The same apostle who said \"love one another\" said \"do not receive him into your house\" — because love of the body of Christ demands protecting it from its destroyers.",
  },
  {
    ref: "Modern Equivalents",
    color: RED,
    title: "The Proto-Gnostic Error and Its Modern Forms",
    content:
      "The proto-Gnostic error John addresses has modern equivalents. Whenever the body is declared irrelevant to spirituality (\"it's all about the soul\"), the Docetic instinct re-emerges. Whenever ethics are separated from doctrine (\"I can believe whatever I want privately, as long as I live well\"), or the historical Jesus is replaced with a spiritual principle (\"the Christ-spirit within us all\"), the same basic move is being made: detaching the spiritual from the material and historical. John's answer is always to return to the concrete: the Word became flesh, took on blood and a body, suffered a real death, rose in a physical resurrection. Christianity is irreducibly incarnational — which means irreducibly bodily, historical, and ethical.",
  },
];

const ASSURANCE_TESTS = [
  {
    name: "The Doctrinal Test",
    color: BLUE,
    verses: "1 Jn 2:22; 4:2; 5:1",
    description:
      "Confessing that Jesus is the Christ, that Jesus Christ has come in the flesh, that Jesus is the Son of God. This is the Christological core: a genuine Christian acknowledges the full identity of Jesus — fully divine and fully human, Messiah and Lord.",
    howToApply:
      "Ask yourself: Do I genuinely confess Jesus as Lord and Christ — not merely as a historical figure or moral teacher? Do I affirm the real incarnation, real death, and real resurrection?",
    doesNotMean:
      "This test does not mean that every Christian must be a trained theologian or have sophisticated doctrinal categories. It means a genuine, personal, heart-level confession of the Jesus of the apostolic witness.",
  },
  {
    name: "The Moral Test",
    color: GREEN,
    verses: "1 Jn 2:3-6; 3:6-10; 5:18",
    description:
      "Living in a pattern of righteousness; not continuing in habitual, unrepentant sin; keeping God's commandments as a pattern of life. The one born of God does not make sin the settled direction and orientation of their life.",
    howToApply:
      "Ask yourself: Is there a genuine, observable pattern of growth in obedience? When I sin, do I confess and repent, or do I rationalize and continue? Is my life moving toward God or away from him?",
    doesNotMean:
      "This test does not require sinlessness — John explicitly says \"if we say we have no sin, we deceive ourselves\" (1:8). It means the pattern and direction of life, not perfection. A Christian who sins and confesses is passing the moral test, not failing it.",
  },
  {
    name: "The Love Test",
    color: GOLD,
    verses: "1 Jn 2:9-11; 3:14-18; 4:7-8",
    description:
      "Loving fellow believers concretely and actively; not hating; showing the kind of love that moves from sentiment to deed and truth (3:18). \"We know that we have passed from death to life, because we love each other\" (3:14).",
    howToApply:
      "Ask yourself: Is there genuine, concrete love for other believers — not just those I find easy to love, but the difficult ones? Do I open my heart and my hands to the brother or sister in need? Is my love showing up in deed, or only in word?",
    doesNotMean:
      "This test does not mean the absence of all relational friction or that you will like every Christian. It means a fundamental orientation of goodwill and active care for the community of faith. It is measured in deeds, not feelings.",
  },
];

const WORLDVIEW_SECTIONS = [
  {
    ref: "1 Jn 2:15-17",
    color: RED,
    title: "\"The World\" — Not Creation but a System",
    content:
      "When John says \"do not love the world,\" he does not mean the physical creation (which God declared good — Gen 1) or the people in it (God so loved the world — Jn 3:16). He means the \"kosmos\" in its distinctive Johannine sense: the organized system of human life in rebellion against God — power, pleasure, and prestige as ultimate values, the whole arrangement of human existence that operates without reference to God and in competition with his kingdom. This \"world\" is not primarily out there in secular culture; it is a disposition of the heart that Christians carry into every environment.",
  },
  {
    ref: "1 Jn 2:16",
    color: RED,
    title: "The Three Desires — Flesh, Eyes, Pride",
    content:
      "\"The desires of the flesh\" — appetite: wanting what the body wants when the body wants it, without restraint, without reference to God's ordering of good things. \"The desires of the eyes\" — acquisition: wanting what you see, particularly what belongs to someone else; coveting; the consumerist gaze that turns everything into a potential possession. \"The pride of life\" — achievement: identity built on status, accomplishment, and social comparison; the need to be seen as significant. These three correspond to the triple temptation of Genesis 3:6 (Eve's assessment of the tree), of the wilderness temptation of Jesus, and of the deepest idolatries of every culture.",
  },
  {
    ref: "1 Jn 5:4-5",
    color: BLUE,
    title: "Overcoming the World — The Victory of Faith",
    content:
      "\"Everyone born of God overcomes the world. And this is the victory that has overcome the world — our faith. Who is it that overcomes the world except the one who believes that Jesus is the Son of God?\" The overcoming of the world is not a gradual achievement of moral improvement; it is the definitive victory that comes through faith in Jesus, who himself overcame the world (Jn 16:33). This does not mean that Christians experience no ongoing struggle with worldliness — it means the decisive battle has been won, and believers fight from the position of those who are already on the winning side.",
  },
  {
    ref: "1 Jn 5:18-21",
    color: BLUE,
    title: "The Three 'We Know' Statements",
    content:
      "The letter closes with three definitive \"we know\" statements. (1) \"We know that everyone who has been born of God does not keep on sinning\" — the strong one (Jesus) keeps them, and the evil one does not touch them. (2) \"We know that we are from God, and the whole world lies in the power of the evil one\" — a stark contrast: the community of believers vs. the kosmos under the sway of the evil one. (3) \"We know that the Son of God has come and has given us understanding, so that we may know him who is true.\" Then the striking final verse: \"Little children, keep yourselves from idols\" — not a new topic but the summation of everything. Whatever competes with the true God as the organizing center of your life is an idol.",
  },
  {
    ref: "What Are the Idols?",
    color: GOLD,
    title: "Idols in the Johannine Sense",
    content:
      "John's closing command — \"keep yourselves from idols\" (5:21) — is addressed to Christians in a city full of literal statues (Ephesus with its Artemis temple), but the Johannine idols are not primarily wooden or stone images. They are whatever takes the place of the true God as the organizing center of life: wealth (the world's goods, 3:17, closed against the needy brother), status (Diotrephes's love of preeminence, 3 Jn 9), pleasure (the desires of the flesh, 2:16), achievement (the pride of life, 2:16). The test of idolatry is not what you believe about God in the abstract but what you actually reorganize your life around in practice.",
  },
];

type JEntry = {
  id: string;
  date: string;
  letter: string;
  verse: string;
  word: string;
  change: string;
};

const JOHN_VIDEOS = [
  {
    videoId: "mC-zw0zCCtg",
    title: "1 John Overview",
    channel: "The Bible Project",
    description:
      "The Bible Project's overview of 1 John — the elder's pastoral letter addressing love, light, and assurance in a community facing false teaching.",
  },
  {
    videoId: "kfcVPh2VDhQ",
    title: "God Is Love — 1 John 4",
    channel: "The Bible Project",
    description:
      "What it means that God is love — not a sentiment but the character of the one who sent his Son as a propitiation; how this grounds human love.",
  },
  {
    videoId: "jH_aojNJM3E",
    title: "Testing the Spirits — Discernment in 1 John",
    channel: "The Gospel Coalition",
    description:
      "How to apply John's command to test the spirits — discerning genuine vs. false teaching, the role of the incarnation test, and modern applications.",
  },
  {
    videoId: "krxcqH522uo",
    title: "Perfect Love Casts Out Fear — 1 John 4:18",
    channel: "Timothy Keller",
    description:
      "The famous Keller sermon on 1 John 4:18 — how the gospel-grounded love of a Father, not performance, is the only thing that resolves anxiety at the root.",
  },
  {
    videoId: "ccNvwDPguNU",
    title: "Walking in the Light — 1 John 1",
    channel: "Gospel Coalition",
    description:
      "What walking in the light means in 1 John — not sinless perfection but the openness and confession that keeps the believer in fellowship with God and each other.",
  },
];

const BADGE_STYLE = (color: string) => ({
  background: `${color}20`,
  border: `1px solid ${color}40`,
  borderRadius: 8,
  padding: "3px 10px",
  fontSize: 11,
  color,
  fontWeight: 700,
  whiteSpace: "nowrap" as const,
  alignSelf: "flex-start" as const,
});

const CARD_STYLE = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 12,
  padding: 22,
  marginBottom: 14,
};

const SECTION_HEADER = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 14,
  padding: 28,
  marginBottom: 20,
};

export default function LettersOfJohnGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_1john_tab", "overview");

  const [jForm, setJForm] = useState<Omit<JEntry, "id" | "date">>({
    letter: "1 John",
    verse: "",
    word: "",
    change: "",
  });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_1john_journal");
      if (stored) setJEntries(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("vine_1john_journal", JSON.stringify(jEntries));
    } catch {}
  }, [jEntries]);

  function saveEntry() {
    if (!jForm.verse && !jForm.word) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      ...jForm,
    };
    setJEntries((prev) => [entry, ...prev]);
    setJForm({ letter: "1 John", verse: "", word: "", change: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    setJEntries((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
        paddingTop: "var(--header-height, 80px)",
      }}
    >
      <Navbar />
      <main
        id="main-content"
        style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}
      >
        {/* Page header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${BLUE}20`,
              border: `1px solid ${BLUE}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: BLUE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Epistles · NT
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 8px" }}>
            ✉️ Letters of John: 1, 2, 3 John
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 680,
            }}
          >
            Three letters on love, light, and discernment — written to a community facing
            false teachers and the question of what genuine Christianity looks like
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`,
                background: tab === t.id ? `${BLUE}20` : "transparent",
                color: tab === t.id ? BLUE : MUTED,
                fontWeight: tab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {tab === "overview" && (
          <div>
            {/* Vital statistics */}
            <div style={SECTION_HEADER}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 14,
                  marginBottom: 24,
                }}
              >
                {VITAL_STATS.map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div
                      style={{
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 4,
                      }}
                    >
                      {k}
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                The three letters of John were written late in the apostolic period — among the
                latest NT writings — from a community shaped by the Gospel of John. They share its
                vocabulary (light, darkness, love, truth, word, abide, life) but apply it to an
                urgent pastoral crisis. A group had departed from the community, apparently holding a
                proto-Gnostic theology: denying that Jesus Christ truly came in the flesh (4:2),
                claiming special spiritual knowledge (gnosis), and abandoning the ethical
                requirements of love and holiness. Their departure left the remaining members shaken
                and uncertain.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                John writes with three interlocking purposes: doctrinal (the Word became flesh, which
                matters absolutely), ethical (love one another as the concrete evidence of new birth),
                and assurance (I write these things so that you may know that you have eternal life).
                1 John is the most theologically concentrated of the three. 2 John applies it to
                hospitality toward false teachers. 3 John applies it to the concrete politics of a
                local congregation.
              </p>
            </div>

            {/* The false teachers */}
            <div style={{ ...CARD_STYLE, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div
                style={{ color: RED, fontWeight: 800, fontSize: 17, marginBottom: 14 }}
              >
                The Heresy John Is Addressing
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  [
                    "Docetism",
                    RED,
                    "From the Greek dokein (to seem). Jesus only appeared to be human — his physical body was an illusion or a temporary costume. If the divine cannot truly contact the material, then the incarnation is a spiritual drama, not a historical reality. The blood shed at Golgotha was not real blood; the death was not a real death.",
                  ],
                  [
                    "Cerinthianism",
                    PURPLE,
                    "A variation attributed to Cerinthus: the divine Christ-spirit descended on the human Jesus at baptism and departed before the crucifixion. Jesus was a human vessel temporarily occupied by the divine. This splits Jesus into two beings and makes the cross the death of a mere man, not the Son of God.",
                  ],
                  [
                    "Ethical Implication",
                    GOLD,
                    "If the body does not matter — if the material is beneath the spiritual — then what you do with your body is irrelevant to your spiritual state. The proto-Gnostics drew the conclusion: moral behavior doesn't matter. John's response is that this is precisely backwards: love is the evidence of divine life, and failing to love is evidence of spiritual death.",
                  ],
                ].map(([title, color, text]) => (
                  <div
                    key={String(title)}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "12px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <span style={BADGE_STYLE(color as string)}>{title}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure of 1 John */}
            <div style={{ ...CARD_STYLE, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: BLUE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>
                The Structure of 1 John — A Spiral, Not a Line
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                Readers expecting a linear argument in 1 John are quickly disoriented. The letter does
                not build a case chapter by chapter toward a conclusion. It spirals — the themes of
                light, love, and truth return repeatedly, each time at greater depth. This is not
                poor organization; it is deliberate pastoral strategy. A community under doctrinal
                attack needs to hear the same truths from multiple angles, in multiple contexts,
                until they become deeply lodged.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["1:1-4", BLUE, "Prologue — The incarnate Word we have touched"],
                  ["1:5-2:29", BLUE, "Walk in light, not darkness — test 1 (light/dark); antichrists depart"],
                  ["3:1-24", GOLD, "Children of God love one another — test 2 (righteousness); the cross defines love"],
                  ["4:1-21", GOLD, "Test the spirits — God is love — perfect love casts out fear"],
                  ["5:1-21", BLUE, "Overcoming the world — three witnesses — assurance purpose statement"],
                ].map(([ref, color, label]) => (
                  <div
                    key={String(ref)}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "8px 12px",
                      background: BG,
                      borderRadius: 8,
                    }}
                  >
                    <span style={BADGE_STYLE(color as string)}>{ref}</span>
                    <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relationship to Gospel of John */}
            <div style={{ ...CARD_STYLE, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>
                Relationship to the Gospel of John
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                The same vocabulary saturates both documents: light, darkness, love, truth, Word,
                abide, eternal life, the world, children of God, the devil, new birth. The same
                author wrote both, to the same community, with one critical difference in purpose:
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: 1,
                    minWidth: 200,
                    background: BG,
                    borderRadius: 10,
                    padding: "16px 18px",
                    border: `1px solid ${BLUE}30`,
                  }}
                >
                  <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                    Gospel of John
                  </div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                    &ldquo;These are written so that you may believe that Jesus is the Christ, the
                    Son of God, and that by believing you may have life in his name.&rdquo; (20:31)
                  </div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>
                    Purpose: Evangelistic — so you may believe
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    minWidth: 200,
                    background: BG,
                    borderRadius: 10,
                    padding: "16px 18px",
                    border: `1px solid ${GOLD}30`,
                  }}
                >
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                    1 John
                  </div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                    &ldquo;I write these things to you who believe in the name of the Son of God,
                    that you may know that you have eternal life.&rdquo; (5:13)
                  </div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>
                    Purpose: Pastoral — so you may know you believe
                  </div>
                </div>
              </div>
            </div>

            {/* Three letters at a glance */}
            <div style={{ ...CARD_STYLE, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                The Three Letters at a Glance
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  [
                    "1 John (5 chapters)",
                    GOLD,
                    "Written to a community after a schism — some have left, denying the incarnation. John's purpose: assurance for the remaining believers, criteria for testing spirits, and the twin foundations of God is light (1:5) and God is love (4:8). The spiral structure returns to the same themes repeatedly at increasing depth.",
                  ],
                  [
                    "2 John (13 verses)",
                    BLUE,
                    "Written to the 'elect lady and her children' — almost certainly a local church and its members. Warns against receiving teachers who deny the incarnation: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting' (v. 10). Love and truth held together.",
                  ],
                  [
                    "3 John (15 verses)",
                    GREEN,
                    "Written to Gaius, a beloved individual. Commends Gaius for hospitality to traveling missionaries; rebukes the ambitious Diotrephes who refuses to welcome them and expels those who do; recommends Demetrius. The shortest book in the NT — a window into real church politics.",
                  ],
                ].map(([title, color, desc]) => (
                  <div
                    key={String(title)}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "12px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <span style={BADGE_STYLE(color as string)}>{title}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── GOD IS LIGHT ── */}
        {tab === "light" && (
          <div>
            <div style={SECTION_HEADER}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                God Is Light (1 John 1–2)
              </h2>
              <div
                style={{
                  background: BG,
                  borderRadius: 10,
                  padding: "16px 20px",
                  marginBottom: 18,
                  border: `1px solid ${BLUE}30`,
                }}
              >
                <p
                  style={{
                    color: BLUE,
                    fontSize: 17,
                    fontWeight: 700,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  &ldquo;This is the message we have heard from him and proclaim to you, that God
                  is light, and in him is no darkness at all.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>1 John 1:5</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}>
                The first major theological declaration of 1 John is &ldquo;God is light&rdquo; —
                not a metaphor about God&apos;s knowledge or even his glory, but a claim about his
                moral character. Light in the Johannine framework means absolute transparency,
                nothing hidden, no shadow of distortion. Walking in the light means living in
                that same moral transparency — with nothing concealed from God or from one
                another, particularly nothing concealed about sin.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                John does not expect sinlessness — 1:8 rules that out immediately. He expects
                honesty: the person who claims fellowship with God while walking in moral
                darkness, who claims to have no sin, who rationalizes and conceals — that person
                is self-deceived. The path of genuine Christianity is not the achievement of
                perfection but the practice of confession, which is the act of bringing sin into
                the light.
              </p>
            </div>

            {LIGHT_SECTIONS.map((s) => (
              <div key={s.ref} style={CARD_STYLE}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={BADGE_STYLE(s.color)}>{s.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  {s.content}
                </p>
              </div>
            ))}

            {/* 1:9 promise box */}
            <div
              style={{
                background: `${BLUE}10`,
                border: `1px solid ${BLUE}40`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
                The Promise of 1 John 1:9
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: "0 0 10px",
                }}
              >
                &ldquo;If we confess our sins, he is faithful and just to forgive us our sins and
                to cleanse us from all unrighteousness.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                The basis of forgiveness is God&apos;s faithfulness and justice — not merely his
                mercy. Justice, because the atonement has made forgiveness righteous: the debt was
                paid at the cross. Faithfulness, because God does not go back on his promises.
                Confession (homologeō) means to say the same thing God says — to agree with
                his assessment of what sin is, rather than rationalizing or minimizing. The result
                is twofold: forgiveness (the guilt removed) and cleansing (the stain addressed).
                Both the legal and the relational dimensions of sin are dealt with.
              </p>
            </div>
          </div>
        )}

        {/* ── GOD IS LOVE ── */}
        {tab === "love" && (
          <div>
            <div style={SECTION_HEADER}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                God Is Love (1 John 3–4)
              </h2>
              <div
                style={{
                  background: BG,
                  borderRadius: 10,
                  padding: "16px 20px",
                  marginBottom: 18,
                  border: `1px solid ${GOLD}30`,
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: 17,
                    fontWeight: 700,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  &ldquo;Beloved, let us love one another, for love is from God, and whoever
                  loves has been born of God and knows God. Anyone who does not love does not
                  know God, because God is love.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>1 John 4:7-8</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}>
                &ldquo;God is love&rdquo; (4:8, 4:16) is the second great declarative statement of
                1 John, and it is the most theologically concentrated claim in the letter. John does
                not say God is loving (an attribute among others) or that God loves (an activity).
                He says God is love — love constitutes the divine being. This is possible precisely
                because God is triune: love requires a lover, a beloved, and the love between them
                — all present eternally in the life of the Trinity.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The practical implication is immediate: those who are born of God will love,
                because love is what God is, and the divine life overflows. The failure to love is
                not merely a moral deficiency — it is evidence that the divine life may not be
                present. &ldquo;Anyone who does not love does not know God.&rdquo; The
                Christological center of this love is the cross: John&apos;s definition of love is
                not an emotion but an act — God sending his Son as a propitiation for sin.
              </p>
            </div>

            {LOVE_SECTIONS.map((s) => (
              <div key={s.ref} style={CARD_STYLE}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={BADGE_STYLE(s.color)}>{s.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  {s.content}
                </p>
              </div>
            ))}

            {/* 4:18 callout */}
            <div
              style={{
                background: `${GOLD}10`,
                border: `1px solid ${GOLD}40`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                The Sequence of 1 John 4:19-21
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["He loved us first", "The initiating act — not our love but his. Love flows from God to us before we respond."],
                  ["We love God and brothers", "The responsive act — love received from God produces love for God and for people."],
                  ["Love without fear", "The mature state — perfect love (God's love received and internalized) drives out servile terror."],
                ].map(([step, desc]) => (
                  <div
                    key={String(step)}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        background: `${GOLD}20`,
                        border: `1px solid ${GOLD}40`,
                        borderRadius: 6,
                        padding: "2px 10px",
                        fontSize: 12,
                        color: GOLD,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {step}
                    </span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TRUTH & DECEPTION (2-3 John) ── */}
        {tab === "truth" && (
          <div>
            <div style={SECTION_HEADER}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Truth and Deception (2 John &amp; 3 John)
              </h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}>
                2 John and 3 John are the two shortest books in the NT — together they would fit on
                a single sheet of papyrus. Yet they address some of the most practically urgent
                questions of the early church: How do we relate to teachers who come from outside
                our community? What do we do when a church leader uses his position to serve himself
                rather than the flock? How does love operate when discernment is required?
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Together they show that Johannine love is not naive or undiscriminating. The same
                elder who commands love one another also commands do not receive the one who denies
                the incarnation. Love without truth collapses into enabling error; truth without love
                collapses into cold orthodoxy. John holds them inseparably together: &ldquo;I
                rejoiced greatly to find some of your children walking in the truth, just as we were
                commanded by the Father&rdquo; (2 Jn 4).
              </p>
            </div>

            {TRUTH_SECTIONS.map((s) => (
              <div key={s.ref} style={CARD_STYLE}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={BADGE_STYLE(s.color)}>{s.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  {s.content}
                </p>
              </div>
            ))}

            {/* 2 John 4 callout */}
            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}40`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  color: PURPLE,
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                The Elder&apos;s Greatest Joy — 3 John 4
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: "0 0 10px",
                }}
              >
                &ldquo;I have no greater joy than to hear that my children are walking in the
                truth.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                This is John&apos;s pastoral heart in miniature. Not: I have no greater joy than
                to see large numbers. Not: than to see my congregation growing, or my reputation
                spreading. But: walking in the truth — lives ordered by reality as it has been
                revealed in Christ. This is the mark of a shepherd who genuinely loves the flock
                rather than using the flock for his own ends (the contrast with Diotrephes is
                direct).
              </p>
            </div>
          </div>
        )}

        {/* ── ASSURANCE TESTS ── */}
        {tab === "assurance" && (
          <div>
            <div style={SECTION_HEADER}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Assurance Tests — The Purpose of 1 John
              </h2>
              <div
                style={{
                  background: BG,
                  borderRadius: 10,
                  padding: "16px 20px",
                  marginBottom: 18,
                  border: `1px solid ${BLUE}30`,
                }}
              >
                <p
                  style={{
                    color: BLUE,
                    fontSize: 17,
                    fontWeight: 700,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  &ldquo;I write these things to you who believe in the name of the Son of God so
                  that you may know that you have eternal life.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>
                  1 John 5:13 — the stated purpose of the entire letter
                </p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                The explicit purpose of 1 John is to give believers confident assurance — not
                to create doubters, but to reassure those already shaken by the departure of the
                false teachers. The letter provides multiple interlocking tests (doctrinal, moral,
                and social) that appear repeatedly throughout the spiral structure. These are not a
                checklist for earning salvation; they are the evidence of a life that has been
                genuinely transformed by the divine nature.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Key pastoral point: John is writing to the believer under attack, not to the
                unbeliever seeking entrance. The tests are for assurance of a faith already
                present, not conditions of a faith not yet obtained. The doubter who reads these
                tests and finds genuine evidence of all three has John&apos;s assurance — not their
                own feeling — to stand on.
              </p>
            </div>

            {ASSURANCE_TESTS.map((t) => (
              <div
                key={t.name}
                style={{
                  ...CARD_STYLE,
                  border: `1px solid ${t.color}40`,
                  borderRadius: 14,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    marginBottom: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={BADGE_STYLE(t.color)}>{t.name}</span>
                  <span style={BADGE_STYLE(MUTED)}>{t.verses}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>
                  {t.description}
                </p>
                <div
                  style={{
                    background: BG,
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      color: t.color,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 6,
                    }}
                  >
                    How to Apply This Test
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    {t.howToApply}
                  </p>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: "12px 16px" }}>
                  <div
                    style={{
                      color: RED,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 6,
                    }}
                  >
                    What This Test Does NOT Mean
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    {t.doesNotMean}
                  </p>
                </div>
              </div>
            ))}

            {/* How tests work together */}
            <div
              style={{
                background: `${BLUE}08`,
                border: `1px solid ${BLUE}30`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  color: BLUE,
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                How the Three Tests Work Together
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}>
                The three tests are not independent checklists but interlocking evidence. No single
                test is sufficient by itself: someone might pass the doctrinal test (confessing
                right things) while failing the love test (hating a brother). Someone might appear
                to pass the love test (generous with money) while failing the doctrinal test
                (denying the incarnation). The presence of all three together — genuine confession
                of Christ, a pattern of righteousness, and active love for fellow believers — is
                the convergence John points to as grounds for confident assurance.
              </p>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                The absence of all three is cause for serious self-examination (2 Cor 13:5). The
                presence of genuine struggle with all three — not perfection but direction — is
                itself part of the evidence. The person who is troubled by their sin, who loves
                the brothers even imperfectly, and who genuinely confesses Jesus as Lord is not
                failing the tests; they are passing them.
              </p>
            </div>

            {/* Key assurance verses */}
            <div style={{ ...CARD_STYLE, borderRadius: 14, padding: 26, marginTop: 8 }}>
              <div
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Key Assurance Verses in 1 John
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["3:14", GOLD, "\"We know that we have passed from death to life, because we love each other.\""],
                  ["3:24", BLUE, "\"By this we know that he abides in us, by the Spirit whom he has given us.\""],
                  ["4:13", BLUE, "\"By this we know that we abide in him and he in us, because he has given us of his Spirit.\""],
                  ["5:11-12", GREEN, "\"Whoever has the Son has life; whoever does not have the Son of God does not have life.\""],
                  ["5:13", BLUE, "\"I write these things to you who believe ... that you may know that you have eternal life.\""],
                ].map(([ref, color, verse]) => (
                  <div
                    key={String(ref)}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <span style={BADGE_STYLE(color as string)}>{ref}</span>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                      {verse}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── THE WORLD AND THE BELIEVER ── */}
        {tab === "worldview" && (
          <div>
            <div style={SECTION_HEADER}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                The World and the Believer (1 John 2 &amp; 5)
              </h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}>
                The word &ldquo;world&rdquo; (kosmos) appears 23 times in 1 John — more than in
                any other NT letter. John uses it in a distinctive, Johannine sense: not the
                physical creation (which God declared good) and not the people in it (God so loved
                the world — Jn 3:16), but the organized system of human existence in rebellion
                against God. The world is power, pleasure, and prestige as ultimate values — human
                life arranged without reference to God and in competition with his kingdom.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The tension is not between Christians (good) and worldly people (bad). The tension
                is between two organizing centers of life — the true God and the kosmos — and
                every human heart navigates this tension constantly. The command &ldquo;do not love
                the world&rdquo; is addressed to Christians because Christians are always in danger
                of re-ordering their lives around the world&apos;s values.
              </p>
            </div>

            {WORLDVIEW_SECTIONS.map((s) => (
              <div key={s.ref} style={CARD_STYLE}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={BADGE_STYLE(s.color)}>{s.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  {s.content}
                </p>
              </div>
            ))}

            {/* The three desires diagram */}
            <div
              style={{
                background: `${RED}08`,
                border: `1px solid ${RED}30`,
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  color: RED,
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                The Three Desires of 1 John 2:16 — A Pattern Across Scripture
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                {[
                  {
                    name: "Desires of the Flesh",
                    color: RED,
                    def: "Appetite — wanting what the body wants, when the body wants it, without the ordering of God",
                    gen: "\"Good for food\" (Gen 3:6)",
                    tempt: "Turn stones to bread (Mt 4:3)",
                    modern: "Addiction, sexual immorality, gluttony",
                  },
                  {
                    name: "Desires of the Eyes",
                    color: GOLD,
                    def: "Acquisition — wanting what you see; coveting; the consumerist gaze",
                    gen: "\"Delight to the eyes\" (Gen 3:6)",
                    tempt: "All the kingdoms of the world (Mt 4:8)",
                    modern: "Envy, materialism, comparison",
                  },
                  {
                    name: "Pride of Life",
                    color: PURPLE,
                    def: "Achievement — identity built on status, accomplishment, and social comparison",
                    gen: "\"Desirable to make one wise\" (Gen 3:6)",
                    tempt: "Throw yourself down — spectacular proof (Mt 4:6)",
                    modern: "Ambition, self-promotion, image management",
                  },
                ].map((d) => (
                  <div
                    key={d.name}
                    style={{
                      background: BG,
                      borderRadius: 10,
                      padding: "14px 16px",
                      border: `1px solid ${d.color}30`,
                    }}
                  >
                    <div
                      style={{
                        color: d.color,
                        fontWeight: 700,
                        fontSize: 12,
                        marginBottom: 8,
                      }}
                    >
                      {d.name}
                    </div>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.6, margin: "0 0 8px" }}>
                      {d.def}
                    </p>
                    <div style={{ color: MUTED, fontSize: 11, marginBottom: 3 }}>{d.gen}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginBottom: 3 }}>{d.tempt}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{d.modern}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                The pattern is striking: the three categories of worldly desire in 1 John 2:16
                correspond to the Eden temptation (Gen 3:6) and to the three temptations of Jesus
                in the wilderness (Mt 4 / Lk 4). Where Adam failed and surrendered to all three,
                Jesus resisted all three. Where we continue to be tempted by all three, we find
                in Christ both the model and the power to overcome.
              </p>
            </div>

            {/* Closing callout */}
            <div
              style={{
                background: `${BLUE}08`,
                border: `1px solid ${BLUE}30`,
                borderRadius: 14,
                padding: 24,
                marginTop: 14,
              }}
            >
              <div
                style={{
                  color: BLUE,
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                The Victory Already Won — 1 John 5:4-5
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: "0 0 10px",
                }}
              >
                &ldquo;Everyone born of God overcomes the world. And this is the victory that has
                overcome the world — our faith. Who is it that overcomes the world except the one
                who believes that Jesus is the Son of God?&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                The tense of &ldquo;has overcome&rdquo; is perfect — a completed action with
                ongoing effect. The victory over the world was accomplished in Christ&apos;s
                death and resurrection. The believer participates in that victory through faith —
                not by outperforming the world&apos;s system but by belonging to the one who
                already defeated it.
              </p>
            </div>
          </div>
        )}

        {/* ── JOURNAL ── */}
        {tab === "journal" && (
          <div>
            <div style={{ ...SECTION_HEADER, borderRadius: 14, padding: "22px 28px" }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>
                My Letters of John Journal
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Record what God is saying to you through 1, 2, and 3 John — what struck you,
                what you need to change, and how you are responding.
              </p>
            </div>

            {/* Form */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
                marginBottom: 28,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Letter selector */}
                <div>
                  <label
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Which Letter
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["1 John", "2 John", "3 John"].map((l) => (
                      <button
                        type="button"
                        key={l}
                        onClick={() => setJForm((f) => ({ ...f, letter: l }))}
                        style={{
                          padding: "7px 18px",
                          borderRadius: 20,
                          border: `1px solid ${jForm.letter === l ? BLUE : BORDER}`,
                          background: jForm.letter === l ? `${BLUE}20` : "transparent",
                          color: jForm.letter === l ? BLUE : MUTED,
                          fontWeight: jForm.letter === l ? 700 : 500,
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Verse */}
                <div>
                  <label
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Verse That Struck Me
                  </label>
                  <textarea
                    rows={2}
                    value={jForm.verse}
                    onChange={(e) => setJForm((f) => ({ ...f, verse: e.target.value }))}
                    placeholder="e.g. 1 Jn 1:9 — 4:18 — 5:13 — 3:18"
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      fontSize: 14,
                      padding: "10px 12px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* What God is saying */}
                <div>
                  <label
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    What God Is Saying
                  </label>
                  <textarea
                    rows={4}
                    value={jForm.word}
                    onChange={(e) => setJForm((f) => ({ ...f, word: e.target.value }))}
                    placeholder="What is the Spirit saying to you through this passage? About love, light, assurance, the world, discernment?"
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      fontSize: 14,
                      padding: "10px 12px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* What I need to change */}
                <div>
                  <label
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    What I Need to Change
                  </label>
                  <textarea
                    rows={3}
                    value={jForm.change}
                    onChange={(e) => setJForm((f) => ({ ...f, change: e.target.value }))}
                    placeholder="What specific action, habit, or attitude needs to change in response to what you've read?"
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      fontSize: 14,
                      padding: "10px 12px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={saveEntry}
                  style={{
                    alignSelf: "flex-start",
                    background: BLUE,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 28px",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  {jSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
            </div>

            {/* Saved entries */}
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map((e) => (
                  <div
                    key={e.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: 22,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 14,
                      }}
                    >
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={BADGE_STYLE(BLUE)}>{e.letter}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteEntry(e.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: MUTED,
                          cursor: "pointer",
                          fontSize: 16,
                          padding: "0 4px",
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    {e.verse && (
                      <div style={{ marginBottom: 10 }}>
                        <div
                          style={{
                            color: BLUE,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            marginBottom: 4,
                          }}
                        >
                          Verse
                        </div>
                        <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                          {e.verse}
                        </p>
                      </div>
                    )}
                    {e.word && (
                      <div style={{ marginBottom: 10 }}>
                        <div
                          style={{
                            color: GOLD,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            marginBottom: 4,
                          }}
                        >
                          What God Is Saying
                        </div>
                        <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                          {e.word}
                        </p>
                      </div>
                    )}
                    {e.change && (
                      <div>
                        <div
                          style={{
                            color: GREEN,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            marginBottom: 4,
                          }}
                        >
                          What I Need to Change
                        </div>
                        <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                          {e.change}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {jEntries.length === 0 && (
              <div
                style={{
                  background: CARD,
                  border: `1px dashed ${BORDER}`,
                  borderRadius: 14,
                  padding: 32,
                  textAlign: "center",
                }}
              >
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                  Your journal entries will appear here. Begin by writing a reflection above.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── VIDEOS ── */}
        {tab === "videos" && (
          <div>
            <div style={{ ...SECTION_HEADER, borderRadius: 14, padding: "22px 28px", marginBottom: 28 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>
                Teaching Videos on 1, 2 &amp; 3 John
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Sermons and overviews on love, light, discernment, and assurance in the letters
                of John — from The Bible Project, Timothy Keller, and The Gospel Coalition.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {JOHN_VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <h4
                      style={{
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                        margin: "0 0 4px",
                      }}
                    >
                      {v.title}
                    </h4>
                    <p
                      style={{
                        color: BLUE,
                        fontSize: 13,
                        fontWeight: 600,
                        margin: "0 0 8px",
                      }}
                    >
                      {v.channel}
                    </p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
