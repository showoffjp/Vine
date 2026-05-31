"use client";

import { useState, useEffect } from "react";

interface CouplesDevotional {
  id: string;
  day: number;
  title: string;
  theme: string;
  verse: string;
  verseRef: string;
  husbandReflection: string;
  wifeReflection: string;
  togetherDiscussion: string[];
  prayerPrompt: string;
  activity: string;
}

interface Progress {
  completedDays: number[];
  startedAt: string;
  currentPlan: string;
  partnerName: string;
}

const devotionals: CouplesDevotional[] = [
  {
    id: "d1", day: 1,
    title: "Two Becoming One",
    theme: "Unity",
    verse: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    verseRef: "Matthew 19:6",
    husbandReflection: "Unity in marriage isn't automatic — it's chosen, daily. Think about one area where you've been pulling in a different direction from your spouse. Not with blame, but with honesty. What's one step you could take today toward greater alignment?",
    wifeReflection: "God designed marriage as a living parable of the relationship between Christ and the church. That's an extraordinary calling. How does knowing that God is the one who joined you together change how you approach the hard days?",
    togetherDiscussion: [
      "What does 'oneness' look like practically in our daily life?",
      "Where do we feel most unified as a couple right now?",
      "Is there one area of our life where we need to make a decision together that we've been avoiding?",
    ],
    prayerPrompt: "Pray together for unity — not sameness, but a deep alignment of hearts, goals, and purpose. Ask God to show you both one area to work on this week.",
    activity: "Write down three things you genuinely admire about your spouse. Share them out loud.",
  },
  {
    id: "d2", day: 2,
    title: "The Language of Service",
    theme: "Serving Each Other",
    verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.",
    verseRef: "Philippians 2:3",
    husbandReflection: "Jesus modeled servant leadership not as a compromise of authority but as the definition of it. Ask yourself honestly: in our home, do I lead by serving or by expecting service? What would it look like to wash your spouse's feet figuratively today?",
    wifeReflection: "Service in marriage isn't about losing yourself — it's about finding the version of yourself that looks most like Christ. What's one act of service you could do for your husband today that would communicate love in a way he specifically understands?",
    togetherDiscussion: [
      "What does 'feeling served' look like to each of us? (Our answers may be different!)",
      "When do we feel most loved by each other?",
      "Is there an area where one of us feels like the burden has been unequal? How can we address that together?",
    ],
    prayerPrompt: "Each of you pray a sentence for the other — thanking God specifically for something your spouse has done to serve you recently.",
    activity: "Choose one practical task your partner usually handles and do it for them today without being asked.",
  },
  {
    id: "d3", day: 3,
    title: "When Conflict Comes",
    theme: "Conflict Resolution",
    verse: "'In your anger do not sin': Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
    verseRef: "Ephesians 4:26-27",
    husbandReflection: "Paul doesn't say 'don't get angry' — he says don't let it become sin. The difference lies in what we do in the gap between feeling the emotion and choosing our response. What patterns have you noticed in how you handle conflict? What do you want to change?",
    wifeReflection: "The instruction not to let the sun go down on anger is as much about the relationship's health as our own peace. Unresolved conflict gives the enemy a 'foothold' — a small place to gain leverage over time. Are there any old unresolved tensions that need to be addressed honestly?",
    togetherDiscussion: [
      "What does our conflict resolution pattern look like? Do we have a healthy way to 'repair' after a fight?",
      "Are there topics we avoid because they feel too charged? Why?",
      "What's one thing you need from me when we're in conflict?",
    ],
    prayerPrompt: "Pray for peace in your home — but specifically, for the courage to address rather than avoid difficult conversations.",
    activity: "Make a simple 'conflict agreement' together: 3 rules you both commit to in disagreements (e.g., no raised voices, always finish the conversation before bed, one speaker at a time).",
  },
  {
    id: "d4", day: 4,
    title: "Praying Together",
    theme: "Shared Prayer Life",
    verse: "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven.",
    verseRef: "Matthew 18:19",
    husbandReflection: "Research consistently shows that couples who pray together have dramatically lower divorce rates. But prayer together can feel vulnerable — you're exposed. The things you pray for reveal what you actually care about and fear. What's one thing you've been afraid to pray with your spouse about?",
    wifeReflection: "Matthew 18:19 carries extraordinary weight — the promise of agreed prayer. But 'agreeing' requires knowing what the other person is asking for. When did you last really know what your husband was praying about? And vice versa?",
    togetherDiscussion: [
      "Do we have a regular practice of praying together? If not, what gets in the way?",
      "What are the three biggest things on our hearts to pray about as a family right now?",
      "Does praying together feel vulnerable or natural? Why?",
    ],
    prayerPrompt: "Pray out loud together — right now. No structure required. Just each take a turn speaking to God. Two minutes each is enough to start.",
    activity: "Set a recurring 5-minute 'couple prayer' in your calendars — morning or evening. Commit to it for one week.",
  },
  {
    id: "d5", day: 5,
    title: "The Gift of Forgiveness",
    theme: "Forgiveness",
    verse: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
    verseRef: "Colossians 3:13",
    husbandReflection: "Notice the standard: forgive as the Lord forgave you. Not because your spouse deserves it. Not because the offense wasn't real. But because of what God has done for you. Is there anything you've been holding against your wife that you haven't fully released?",
    wifeReflection: "Forgiveness in marriage isn't a one-time event — it's a practice. And it doesn't mean pretending the wound didn't happen. It means choosing the relationship over the score. Is there something you've forgiven in theory but still replay mentally?",
    togetherDiscussion: [
      "Is there anything between us that hasn't been fully forgiven and released?",
      "What makes forgiveness hard? What makes it easier?",
      "How do we make space for each other to apologize well?",
    ],
    prayerPrompt: "This may be a tender prayer. Ask God to help you release anything you've been holding, and thank Him for the model of forgiveness He gave you in Christ.",
    activity: "If there's something unresolved between you, use this as the moment to say 'I forgive you' out loud. If everything is clear, share a memory of a time you felt truly forgiven by the other.",
  },
  {
    id: "d6", day: 6,
    title: "Raising a Legacy",
    theme: "Parenting Together",
    verse: "Start children off on the way they should go, and even when they are old they will not turn from it.",
    verseRef: "Proverbs 22:6",
    husbandReflection: "Fatherhood is one of the most significant things you'll ever do. But it requires intention — children absorb our example far more than our instructions. What is one thing about the way you were fathered that you want to repeat, and one thing you want to do differently?",
    wifeReflection: "There's no role quite like mother. You shape the emotional architecture of your child's life. What kind of home do you want to create — in terms of atmosphere, warmth, faith, honesty? And how do you and your husband align on that vision?",
    togetherDiscussion: [
      "What are our 3 core values we want to pass to our children?",
      "Where do we align well as parents? Where do we need to get on the same page?",
      "What spiritual practices do we want to be normal in our home?",
    ],
    prayerPrompt: "Pray specifically for each of your children by name — their character, their faith, and God's purposes for their lives.",
    activity: "Write a one-paragraph 'vision statement' for your family. What kind of people do you want to raise? What do you want your home to be known for?",
  },
  {
    id: "d7", day: 7,
    title: "Facing the Future Together",
    theme: "Shared Vision",
    verse: "Unless the Lord builds the house, the builders labor in vain.",
    verseRef: "Psalm 127:1",
    husbandReflection: "Vision without God is just ambition. Psalm 127 doesn't discourage work — it reframes its source. Where in our life together have we been building on our own strength and wisdom, without really inviting God into the planning? What would change if we did?",
    wifeReflection: "Shared vision is one of the most powerful bonds in a marriage. When you know where you're going together — your values, your goals, your calling — small decisions become easier and conflict becomes less destabilizing. How aligned do you feel with your husband right now on where your life is headed?",
    togetherDiscussion: [
      "If we could design our life 10 years from now, what would it look like?",
      "Are there dreams we've stopped talking about? Why?",
      "What is God calling us toward together that requires more faith than we're currently walking in?",
    ],
    prayerPrompt: "Pray together for your future — not just the practical details, but for the kind of people you want to be, the legacy you want to leave, and for God to build your house.",
    activity: "Create a simple 'marriage vision board' — write down 5 things you want to experience, build, or give together in the next 5 years.",
  },
];

const plans = [
  { id: "7day", label: "7-Day Foundation Series", description: "Core themes: Unity, Service, Conflict, Prayer, Forgiveness, Parenting, Vision" },
  { id: "romance", label: "30-Day Romance Renewal", description: "Coming soon — daily devotionals focused on rekindling joy and connection" },
  { id: "crisis", label: "When Marriage Is Hard", description: "Coming soon — for couples in a difficult season" },
];

const VOICES_CD = [
  {
    id: "keller-t",
    name: "Timothy & Kathy Keller",
    era: "b. 1950 / b. 1951 · Presbyterian",
    context: "The Meaning of Marriage",
    bio: "Timothy Keller's The Meaning of Marriage (2011), co-written with his wife Kathy, is the most influential contemporary evangelical treatment of marriage theology. Drawing on the creation narrative, Paul's letter to the Ephesians, and decades of pastoral experience in New York City, the Kellers argue that marriage is not fundamentally a romantic partnership but a covenant that mirrors Christ's relationship to the church. Their treatment of love as commitment rather than feeling, and of marriage as the place where two sinners pursue holiness together, has shaped a generation of couples.",
    quote: "To be loved but not known is comforting but superficial. To be known and not loved is our greatest fear. But to be fully known and truly loved is — well, a lot like being loved by God. It is what we need more than anything.",
    contribution: "The Meaning of Marriage gave evangelical couples a theological framework that transformed marriage from a personal preference to a covenantal vocation. The Kellers' honest integration of the gospel into the difficulties of actual marriage — not just the ideal — made it the most trusted pastoral resource for engaged and married couples in its generation.",
  },
  {
    id: "thomas-g",
    name: "Gary Thomas",
    era: "b. 1958 · Evangelical",
    context: "Sacred Marriage",
    bio: "Gary Thomas's Sacred Marriage (2000) asked a transforming question: 'What if God designed marriage to make us holy more than to make us happy?' Thomas argued that the difficulties of marriage — the friction, the disappointment, the exposure of our selfishness — are not failures of the institution but its primary mechanism. Marriage is a spiritual discipline, and the spouse who aggravates you most is often doing the most profound formation work on your soul. His book has been given to millions of couples entering or struggling in marriage.",
    quote: "What if God didn't design marriage to be easy? What if God actually designed marriage to make you more like Jesus? And what if your marital problems are God's greatest tool for transforming your soul?",
    contribution: "Thomas's reframing of marriage as spiritual formation rather than romantic fulfillment gave couples in difficult marriages a theologically grounded reason to persevere. His work shifted the question from 'Am I happy?' to 'Am I becoming more Christlike?' — and in doing so, extended the staying power of countless struggling marriages.",
  },
  {
    id: "gottman-j",
    name: "John & Julie Gottman",
    era: "b. 1942 · Research-Based",
    context: "The Seven Principles for Making Marriage Work",
    bio: "John Gottman, psychologist and researcher at the University of Washington, spent 40 years studying what makes marriages succeed or fail. His ability to predict divorce with 90%+ accuracy from brief observation led to the development of his Seven Principles framework. While not written from a Christian perspective, his research on contempt, criticism, defensiveness, and stonewalling (the 'Four Horsemen of the Apocalypse' for marriage) maps remarkably onto biblical warnings about pride, harsh words, and hardness of heart.",
    quote: "The antidote to contempt is a culture of appreciation and respect. Couples who regularly express gratitude and admiration for each other build an emotional buffer that weathers the inevitable conflicts.",
    contribution: "The Gottmans' research-based approach to marriage gave Christian couples and counselors empirical data to accompany theological argument. Their identification of contempt as the single most corrosive force in marriage aligns with the biblical call to honor one another, and their practical repair tools have been integrated into Christian marriage counseling widely.",
  },
  {
    id: "tripp-pd",
    name: "Paul David Tripp",
    era: "b. 1950 · Reformed",
    context: "What Did You Expect?",
    bio: "Paul David Tripp's What Did You Expect? (2010) is the most theologically honest treatment of marriage in print. Tripp begins with an unflinching admission: every marriage is a union of two sinners, and the most dangerous expectations in marriage are the ones about your spouse's perfection. His gospel-centered approach acknowledges that marriage exposes our own sin as much as our spouse's — and that the cross is the only sufficient foundation for forgiveness, renewal, and sustainable love.",
    quote: "Your marriage is always being shaped by some kind of theology. The only question is whether that theology is true or false. Marriage requires a bigger theology than romance.",
    contribution: "Tripp's application of redemptive counseling principles to marriage gave couples and counselors a framework for understanding marital conflict not just as a communication problem but as a gospel problem. His integration of biblical anthropology — particularly the doctrine of indwelling sin — into marital counseling has made What Did You Expect? a standard text in biblical counseling training.",
  },
  {
    id: "chapmant-g",
    name: "Gary Chapman",
    era: "b. 1938 · Baptist",
    context: "The Five Love Languages",
    bio: "Gary Chapman, pastor and marriage counselor in Winston-Salem, North Carolina, wrote The Five Love Languages (1992) after three decades of marriage counseling. His observation that people express and receive love in different ways — words of affirmation, acts of service, receiving gifts, quality time, physical touch — gave couples a practical vocabulary for understanding why they felt unloved even in intact marriages. The book has sold over 20 million copies and been translated into 50 languages.",
    quote: "Seldom do a husband and wife have the same primary love language. We tend to speak our own love language — expressing love in the way we would most want to receive it. But we need to learn our spouse's love language.",
    contribution: "Chapman's Five Love Languages gave ordinary couples a simple, actionable framework for understanding and improving their marriage. While not primarily a theological work, its practical wisdom aligned with the biblical call to know and serve one's spouse, and it has been integrated into virtually every Christian pre-marital counseling curriculum in the English-speaking world.",
  },
];

const PRACTICES_CD: { id: string; title: string; icon: string; frequency: string; time: string; description: string; howto: string[] }[] = [
  {
    id: "daily-prayer",
    title: "Daily Prayer Together",
    icon: "🙏",
    frequency: "Daily",
    time: "5-10 min",
    description: "Praying together as a couple each morning or night is one of the most transformative habits a marriage can build. Shared prayer creates vulnerability, aligns priorities, and invites God into the ordinary rhythms of your life together.",
    howto: [
      "Choose a consistent time — morning before parting or evening before sleep works best for most couples.",
      "Keep it simple: one person leads, the other agrees. No performance required.",
      "Each person shares one thing they are grateful for and one thing they are trusting God with.",
      "Close with a brief prayer for your marriage, your family, and anything pressing on either heart.",
    ],
  },
  {
    id: "scripture-reading",
    title: "Scripture Reading Together",
    icon: "📖",
    frequency: "Daily",
    time: "15-20 min",
    description: "Reading the same passage of Scripture together and sharing one observation each creates a shared spiritual vocabulary and invites the Word into the center of your marriage.",
    howto: [
      "Select a book of the Bible to read through together — start with a shorter epistle like Philippians or Colossians.",
      "Each person reads the passage silently, then one reads it aloud.",
      "Each person shares one observation: something that stood out, convicted, or encouraged them.",
      "Close by asking: 'What is one way we could live this out together this week?'",
    ],
  },
  {
    id: "sabbath-meal",
    title: "Weekly Sabbath Meal",
    icon: "🍽️",
    frequency: "Weekly",
    time: "1-2 hrs",
    description: "An intentional Sabbath practice as a couple — no phones, candles lit, gratitude shared, the week reviewed. This ritual creates a weekly rhythm of reconnection and rest that protects the marriage from the erosion of busyness.",
    howto: [
      "Set a recurring day and time — Friday evening or Sunday lunch are common anchor points.",
      "No phones at the table. Light a candle or set something that marks the meal as intentional.",
      "Each person shares one high and one low from the week, and one thing they are grateful for in the other.",
      "Close with a short prayer of thanksgiving and rest — nothing needs to be solved at this meal.",
    ],
  },
  {
    id: "monthly-checkin",
    title: "Monthly Spiritual Check-in",
    icon: "💬",
    frequency: "Monthly",
    time: "30-60 min",
    description: "A structured monthly conversation on each person's spiritual state — where they feel close to God, where they feel dry, what they are learning, and what they need from their spouse spiritually.",
    howto: [
      "Schedule it like an appointment. Put it on the calendar at the start of each month.",
      "Each person answers: How is your soul right now? Where do you feel God's presence? Where do you feel distance?",
      "Share what you are currently reading, praying about, or struggling to believe.",
      "Ask: 'What is one way I can support your spiritual life this month?' Then actually do it.",
    ],
  },
  {
    id: "quarterly-retreat",
    title: "Quarterly Retreat Day",
    icon: "⛺",
    frequency: "Quarterly",
    time: "Half day",
    description: "Getting away together four times a year — even for a half day — to review your goals, pray over the season ahead, and rest together without the noise of normal life creates a powerful rhythm of intentional marriage leadership.",
    howto: [
      "Book a simple location: a cabin, a hotel room, a friend's empty house, or even a park with good weather.",
      "Review the last three months: What went well? What was hard? What did we learn?",
      "Pray together for each area of life: faith, marriage, children, finances, health, calling.",
      "Set 1-3 intentions for the next quarter. Write them down and revisit them at the next retreat.",
    ],
  },
  {
    id: "covenant-renewal",
    title: "Annual Marriage Covenant Renewal",
    icon: "✝️",
    frequency: "Annual",
    time: "1-2 hrs",
    description: "Once a year — on your anniversary or another chosen date — reread your vows, pray over the year together, and celebrate what God has done in and through your marriage.",
    howto: [
      "Find your wedding vows or write new ones that reflect where you are now.",
      "Read them aloud to each other in a quiet, intentional setting.",
      "Each person prays a prayer of gratitude for the other — specific and personal.",
      "Share one word that describes your hope for the coming year of marriage, then commit it to God together.",
    ],
  },
];

const SCRIPTURE_CD: { id: string; ref: string; text: string; theme: string; reflection: string }[] = [
  {
    id: "gen-2-24",
    ref: "Genesis 2:24",
    text: "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
    theme: "Covenant",
    reflection: "The leaving, cleaving, and weaving of Genesis 2:24 establishes marriage as a covenant act — not a contract of convenience but a permanent bond that reorders loyalties and identities. The word 'hold fast' in Hebrew carries the image of clinging, of determined attachment. Marriage asks both partners to choose each other above every other human relationship, again and again.",
  },
  {
    id: "eph-5-25-33",
    ref: "Ephesians 5:25-33",
    text: "Husbands, love your wives, as Christ loved the church and gave himself up for her... This mystery is profound, and I am saying that it refers to Christ and the church.",
    theme: "Sacrificial Love",
    reflection: "Paul's vision of marriage in Ephesians 5 is not a hierarchy of power but a theology of sacrifice. The husband is called to love with the same costly, self-emptying love that took Christ to the cross. When this passage is read primarily as a call to male authority rather than male sacrifice, the weight of its demand is lost. The mystery Paul points to is breathtaking: Christian marriage is a visible sign of the gospel.",
  },
  {
    id: "1cor-13-4-7",
    ref: "1 Corinthians 13:4-7",
    text: "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
    theme: "Love's Nature",
    reflection: "Every phrase of 1 Corinthians 13 is a mirror held up to the face of a marriage. Patient, kind, not irritable, not resentful — these are not aspirational emotions but active choices made in the daily friction of life together. Paul's love is not a feeling that comes and goes; it is a direction of the will. Read this passage slowly and let each phrase become a question: Is this what our love looks like?",
  },
  {
    id: "col-3-18-19",
    ref: "Colossians 3:18-19",
    text: "Wives, submit to your husbands, as is fitting in the Lord. Husbands, love your wives, and do not be harsh with them.",
    theme: "Mutual Submission",
    reflection: "Read in context of Colossians 3:12-17 — which calls all believers to compassion, humility, meekness, and forbearance — the household code of verses 18-19 is not a hierarchy imposed from outside but an expression of the mutual submission already called for in verse 13. The husband's specific charge is not to lead but not to be harsh. The tenderness required of him is the more demanding call.",
  },
  {
    id: "prov-31-10-12",
    ref: "Proverbs 31:10-12",
    text: "An excellent wife who can find? She is far more precious than jewels. The heart of her husband trusts in her, and he will have no lack of gain. She does him good, and not harm, all the days of her life.",
    theme: "Godly Character",
    reflection: "The Proverbs 31 woman is not a performance standard but a poem of praise — written by a mother to her son about what to look for, and by extension a portrait of character worth cultivating. The word translated 'excellent' is the Hebrew chayil, meaning strength, valor, and capability. The passage begins not with her productivity but with the trust her husband places in her. Trust is the foundation.",
  },
  {
    id: "eccl-4-9-12",
    ref: "Ecclesiastes 4:9-12",
    text: "Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up... And though a man might prevail against one who is alone, two will withstand him — a threefold cord is not quickly broken.",
    theme: "Partnership",
    reflection: "Qohelet's wisdom here is earthy and practical before it is romantic: two people can accomplish more, recover faster, and withstand harder pressure than one person alone. The famous threefold cord is not the couple plus a spiritual principle — it is the couple plus God, the third strand that makes the union more than human. Marriage built on that cord has a resilience that purely human partnership cannot manufacture.",
  },
];

export default function CouplesDevotionalPage() {
  const [progress, setProgress] = useState<Progress>({
    completedDays: [],
    startedAt: "",
    currentPlan: "7day",
    partnerName: "",
  });
  const [selectedDay, setSelectedDay] = useState<CouplesDevotional | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [activeSection, setActiveSection] = useState<"husband" | "wife" | "together">("together");
  const [mainTab, setMainTab] = useState<"devotionals" | "voices" | "practices" | "scripture">("devotionals");
  const [selectedVoice, setSelectedVoice] = useState("keller-t");
  const voiceItem = VOICES_CD.find(v => v.id === selectedVoice)!;

  useEffect(() => {
    try {
      const p = localStorage.getItem("vine_couples_devotional");
      if (p) setProgress(JSON.parse(p));
    } catch {}
  }, []);

  const saveProgress = (p: Progress) => {
    try { localStorage.setItem("vine_couples_devotional", JSON.stringify(p)); } catch {}
  };

  const handleComplete = (day: number) => {
    const next: Progress = {
      ...progress,
      completedDays: progress.completedDays.includes(day)
        ? progress.completedDays.filter((d) => d !== day)
        : [...progress.completedDays, day],
      startedAt: progress.startedAt || new Date().toISOString(),
    };
    setProgress(next);
    saveProgress(next);
  };

  const handleSaveName = () => {
    const next = { ...progress, partnerName: nameInput };
    setProgress(next);
    saveProgress(next);
    setEditingName(false);
  };

  const completedCount = progress.completedDays.length;
  const totalDays = devotionals.length;
  const progressPct = Math.round((completedCount / totalDays) * 100);

  const nextDay = devotionals.find((d) => !progress.completedDays.includes(d.day));

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>💑</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Couples Devotional</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 20px" }}>
          Daily devotionals designed for two. Individual reflections, shared discussion, and prayer prompts that draw you closer to God and to each other.
        </p>

        {/* Partner setup */}
        {!progress.partnerName && !editingName ? (
          <button onClick={() => setEditingName(true)}
            style={{ padding: "8px 20px", borderRadius: 10, background: "#6B4FBB", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
            + Add Your Partner's Name
          </button>
        ) : editingName ? (
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
              placeholder="Partner's name..."
              style={{ padding: "8px 14px", borderRadius: 8, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
            <button onClick={handleSaveName}
              style={{ padding: "8px 16px", borderRadius: 8, background: "#00FF88", border: "none", color: "#07070F", cursor: "pointer", fontWeight: 700 }}>
              Save
            </button>
          </div>
        ) : (
          <div style={{ fontSize: 14, color: "#9898B3" }}>
            Doing this with <strong style={{ color: "#F2F2F8" }}>{progress.partnerName}</strong>
            <button onClick={() => { setEditingName(true); setNameInput(progress.partnerName); }}
              style={{ marginLeft: 8, fontSize: 11, color: "#6B4FBB", background: "none", border: "none", cursor: "pointer" }}>
              edit
            </button>
          </div>
        )}
      </div>

      {/* Main tab bar */}
      <div style={{ borderBottom: "1px solid #1E1E32", background: "#0A0A16", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", gap: 2 }}>
          {([["devotionals", "💑 Devotionals"], ["practices", "✝️ Practices"], ["scripture", "📖 Scripture"], ["voices", "🎓 Voices"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setMainTab(key)}
              style={{ background: "none", border: "none", borderBottom: mainTab === key ? "2px solid #00FF88" : "2px solid transparent", color: mainTab === key ? "#F2F2F8" : "#9898B3", fontWeight: mainTab === key ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer", whiteSpace: "nowrap" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {mainTab === "devotionals" && <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
        {/* Progress bar */}
        <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 20, marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>7-Day Foundation Series</div>
            <div style={{ fontSize: 13, color: "#9898B3" }}>{completedCount}/{totalDays} days</div>
          </div>
          <div style={{ height: 8, background: "#1E1E32", borderRadius: 4, marginBottom: 10 }}>
            <div style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #6B4FBB, #00FF88)", width: `${progressPct}%`, transition: "width 0.4s" }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {devotionals.map((d) => (
              <div key={d.day}
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: progress.completedDays.includes(d.day) ? "#00FF88" : d.id === nextDay?.id ? "#6B4FBB" : "#1E1E32",
                  border: `2px solid ${progress.completedDays.includes(d.day) ? "#00FF88" : d.id === nextDay?.id ? "#6B4FBB" : "#1E1E32"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700,
                  color: progress.completedDays.includes(d.day) ? "#07070F" : d.id === nextDay?.id ? "#fff" : "#9898B3",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedDay(d)}>
                {d.day}
              </div>
            ))}
          </div>
        </div>

        {/* Today's devotional CTA */}
        {nextDay && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: "#9898B3", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              {completedCount === 0 ? "Start Here" : "Continue Your Journey"}
            </div>
            <div
              style={{ background: "#12121F", border: "1px solid #6B4FBB40", borderRadius: 16, padding: 22, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setSelectedDay(nextDay)}>
              <div>
                <div style={{ fontSize: 12, color: "#6B4FBB", fontWeight: 600, marginBottom: 4 }}>Day {nextDay.day} · {nextDay.theme}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>{nextDay.title}</div>
                <div style={{ fontSize: 13, color: "#9898B3", fontStyle: "italic" }}>"{nextDay.verse.slice(0, 70)}..."</div>
              </div>
              <div style={{ fontSize: 24, flexShrink: 0, marginLeft: 16 }}>→</div>
            </div>
          </div>
        )}

        {completedCount === totalDays && (
          <div style={{ background: "#00FF8815", border: "1px solid #00FF8840", borderRadius: 14, padding: 20, textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🎉</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#00FF88", marginBottom: 4 }}>You completed the 7-Day Series!</div>
            <div style={{ fontSize: 13, color: "#9898B3" }}>You've built something meaningful. Keep the conversation going.</div>
          </div>
        )}

        {/* All days grid */}
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 14 }}>All Days</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {devotionals.map((d) => {
            const done = progress.completedDays.includes(d.day);
            return (
              <div key={d.id}
                style={{ background: "#12121F", border: `1px solid ${done ? "#00FF8830" : "#1E1E32"}`, borderRadius: 14, padding: 18, cursor: "pointer" }}
                onClick={() => setSelectedDay(d)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 11, color: done ? "#00FF88" : "#6B4FBB", fontWeight: 600, marginBottom: 2 }}>Day {d.day} · {d.theme}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8" }}>{d.title}</div>
                  </div>
                  {done && <div style={{ color: "#00FF88", fontSize: 18 }}>✓</div>}
                </div>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", lineHeight: 1.5 }}>
                  "{d.verse.slice(0, 80)}..."
                </div>
                <div style={{ fontSize: 11, color: "#6B4FBB", marginTop: 6 }}>{d.verseRef}</div>
              </div>
            );
          })}
        </div>
      </div>}

      {/* Devotional Detail Modal */}
      {selectedDay && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelectedDay(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Day {selectedDay.day} · {selectedDay.theme}</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#F2F2F8", marginBottom: 16 }}>{selectedDay.title}</h2>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 16, borderLeft: "4px solid #6B4FBB" }}>
                <div style={{ fontSize: 15, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>"{selectedDay.verse}"</div>
                <div style={{ fontSize: 13, color: "#6B4FBB", fontWeight: 600 }}>{selectedDay.verseRef}</div>
              </div>
            </div>

            {/* Section tabs */}
            <div style={{ display: "flex", gap: 4, background: "#07070F", borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(["husband", "wife", "together"] as const).map((s) => (
                <button key={s} onClick={() => setActiveSection(s)}
                  style={{ flex: 1, padding: "8px 10px", borderRadius: 7, border: "none",
                    background: activeSection === s ? "#6B4FBB" : "transparent",
                    color: activeSection === s ? "#fff" : "#9898B3",
                    cursor: "pointer", fontWeight: 600, fontSize: 12 }}>
                  {s === "husband" ? "Him" : s === "wife" ? "Her" : "Together"}
                </button>
              ))}
            </div>

            {activeSection === "husband" && (
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8 }}>{selectedDay.husbandReflection}</p>
            )}
            {activeSection === "wife" && (
              <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8 }}>{selectedDay.wifeReflection}</p>
            )}
            {activeSection === "together" && (
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", marginBottom: 12 }}>💬 Discussion Questions</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  {selectedDay.togetherDiscussion.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6B4FBB20", border: "1px solid #6B4FBB", color: "#6B4FBB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <div style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, paddingTop: 3 }}>{q}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: "3px solid #00FF88" }}>
                  <div style={{ fontSize: 11, color: "#00FF88", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>🙏 Prayer Prompt</div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selectedDay.prayerPrompt}</p>
                </div>

                <div style={{ background: "#07070F", borderRadius: 10, padding: 16, borderLeft: "3px solid #F59E0B" }}>
                  <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>⚡ Today's Activity</div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selectedDay.activity}</p>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button onClick={() => { handleComplete(selectedDay.day); setSelectedDay(null); }}
                style={{
                  flex: 1, padding: "12px 16px", borderRadius: 10, border: "none",
                  background: progress.completedDays.includes(selectedDay.day) ? "#1E1E32" : "#00FF88",
                  color: progress.completedDays.includes(selectedDay.day) ? "#9898B3" : "#07070F",
                  cursor: "pointer", fontWeight: 700, fontSize: 15,
                }}>
                {progress.completedDays.includes(selectedDay.day) ? "Mark Incomplete" : "✓ Complete Day " + selectedDay.day}
              </button>
              <button onClick={() => setSelectedDay(null)}
                style={{ padding: "12px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {mainTab === "voices" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_CD.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(0,255,136,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(0,255,136,0.08)" : "#12121F", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#00FF88" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #00FF88", marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {mainTab === "practices" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#F2F2F8", marginBottom: 8 }}>Spiritual Practices for Couples</h2>
          <p style={{ fontSize: 15, color: "#9898B3", lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
            The health of a marriage is shaped by its rhythms. These practices — drawn from spiritual direction, pastoral tradition, and the ordinary wisdom of couples who have built lasting faith together — are designed to be adopted one at a time, not all at once.
          </p>
          {PRACTICES_CD.map(p => (
            <div key={p.id} style={{ marginBottom: 28, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", margin: 0, marginBottom: 4 }}>{p.title}</h3>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#07070F", background: "#00FF88", borderRadius: 6, padding: "2px 8px" }}>{p.frequency}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#9898B3", background: "#1E1E32", borderRadius: 6, padding: "2px 8px" }}>{p.time}</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, marginBottom: 16 }}>{p.description}</p>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>How to Practice</h4>
              <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {p.howto.map((step, i) => (
                  <li key={i} style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.65 }}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {mainTab === "scripture" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#F2F2F8", marginBottom: 8 }}>Marriage in Scripture</h2>
          <p style={{ fontSize: 15, color: "#9898B3", lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
            The Bible does not offer a single theology of marriage but a collection of images, commands, poems, and promises that together form a rich and sometimes surprising vision of what it means to be joined to another person before God.
          </p>
          {SCRIPTURE_CD.map(s => (
            <div key={s.id} style={{ marginBottom: 24, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>{s.ref}</h3>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#6B4FBB", background: "rgba(107,79,187,0.15)", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 6, padding: "3px 10px" }}>{s.theme}</span>
              </div>
              <blockquote style={{ borderLeft: "3px solid #00FF88", paddingLeft: 16, margin: "0 0 12px 0", fontStyle: "italic" }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </blockquote>
              <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.75, marginTop: 12, marginBottom: 0 }}>{s.reflection}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
