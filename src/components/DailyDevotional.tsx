"use client";

import { useState } from "react";
import {
  Heart,
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Pen,
  CheckCircle,
  Clock,
} from "lucide-react";

const devotionals = [
  {
    day: 1,
    dayName: "Monday",
    ref: "Lamentations 3:22–23",
    verse: '"Because of the Lord\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."',
    verseRef: "Lamentations 3:22–23 (NIV)",
    title: "Mercies That Never Run Out",
    author: "Dr. Emmanuel Asante",
    authorRole: "Cape Town, South Africa · Theologian & Author",
    authorInitials: "EA",
    authorGradient: "linear-gradient(135deg, #6B4FBB, #4FBBAA)",
    readTime: "5 min read",
    content: [
      "There is a particular kind of mercy that most of us have never fully grasped — the kind that doesn't run dry. The kind that isn't rationed, thinned out, or withheld because of how many times we've needed it before. Jeremiah, writing from the rubble of Jerusalem, discovered this mercy in one of the darkest seasons of his life.",
      '"Because of the Lord\'s great love we are not consumed." This is not the language of someone for whom things are going well. Lamentations is a book of grief, of ruin, of deep spiritual anguish. Jeremiah had watched his people taken captive, the temple destroyed, and every outward sign of God\'s blessing stripped away. Yet somehow, in that wreckage, he found a reason to declare God faithful.',
      'The key word is "new." God\'s compassions are not recycled from yesterday. They are not the leftover grace from a moment when you were more deserving. They are freshly poured out each morning, like manna in the wilderness — exactly enough for today, exactly what you need, exactly on time.',
      "Many of us carry yesterday's shame into today's prayer. We approach God already apologizing for who we are, already bracing for distance. But the morning — specifically the morning — is God's chosen moment to demonstrate that nothing has accumulated against you overnight. His mercy accounts have been reset. The ledger is clean again.",
      "Jeremiah didn't discover this truth in a moment of triumph. He discovered it in the middle of devastation. Which means you don't have to wait until life feels better to access this mercy. You can reach for it right now, in whatever circumstances today holds. The God who kept Jeremiah through the fall of Jerusalem is the same God who meets you this morning.",
    ],
    reflections: [
      "When did you last feel like God's mercies were truly 'new' for you? What circumstances surrounded that moment?",
      "How does Jeremiah's context — writing from devastation — change the way you receive these words today?",
      "Is there a shame from yesterday you've been carrying into today's prayer? What would it look like to let this verse address it?",
    ],
    applications: [
      "Begin your morning with 2 minutes of silence, deliberately receiving God's new mercies before you look at your phone.",
      "Write Lamentations 3:22–23 on a sticky note and place it somewhere you'll see it repeatedly today.",
      "When you notice anxiety or guilt rising during the day, speak this verse aloud and consciously choose to believe it.",
    ],
    prayer:
      "Lord, thank you that your mercies are not dependent on my performance or my track record. I come to you this morning with empty hands and a grateful heart, receiving what you have freshly prepared for me today. Where I have carried yesterday's weight, give me grace to lay it down. Let your faithfulness be the ground I stand on today. Amen.",
    tag: "Mercy",
    tagColor: "#6B4FBB",
  },
  {
    day: 2,
    dayName: "Tuesday",
    ref: "Psalm 23",
    verse: '"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul."',
    verseRef: "Psalm 23:1–3 (ESV)",
    title: "The Shepherd Who Leads You Home",
    author: "Pastor Miriam Osei",
    authorRole: "Accra, Ghana · Lead Pastor, Grace Tabernacle",
    authorInitials: "MO",
    authorGradient: "linear-gradient(135deg, #00FF88, #4FBBAA)",
    readTime: "6 min read",
    content: [
      "Psalm 23 may be the most memorized passage in all of Scripture, but familiarity has a way of making us deaf to what we most need to hear. David wasn't writing from a comfortable study. He was a man who had faced lions, bears, betrayal, exile, and the silence of God — and still he wrote: the Lord is my shepherd.",
      "The verb tense matters enormously here. David doesn't say the Lord was his shepherd when things were good. He says is. Present tense, in every season, in every valley. The rod of correction and the staff of comfort come from the same hand — the hand of a shepherd who knows his sheep by name.",
      '"He makes me lie down in green pastures." Have you ever noticed the word makes? Sheep, left to their own instincts, rarely choose to rest. They are skittish, easily stressed, prone to wandering. The good shepherd doesn\'t wait for us to feel peaceful before giving us rest. He actively creates the conditions for it, even when we would rather keep running.',
      '"He restores my soul." The Hebrew word is nephesh — the whole person, the deep self. Not just your mood or your energy, but the essential you. Shepherds in the ancient world would carry exhausted lambs on their shoulders when they had run themselves to depletion. God meets us at our most tired and carries us the rest of the way.',
      "What valley are you walking through today? The promise of Psalm 23 is not that the valleys disappear, but that you do not walk through them alone. The shepherd who laid down his life for his sheep (John 10:11) walks with you through every shadow — not to remove the darkness, but to make sure you are never lost in it.",
    ],
    reflections: [
      "In which area of your life are you most aware of needing a shepherd right now — guidance, protection, restoration, or provision?",
      "The psalm says 'He makes me lie down.' Is there a rest God is inviting you into that you've been resisting? What makes it hard to accept?",
      "What does it mean to you personally that the same shepherd who 'anoint[s] your head with oil' also walks with you through 'the valley of the shadow of death'?",
    ],
    applications: [
      "Slowly read Psalm 23 aloud three times today — once in the morning, once at midday, and once before bed. Notice what lands differently each time.",
      "Identify one area where you've been 'wandering' away from God's pasture. Bring it specifically to him in prayer today.",
      "Think of someone in your life who is walking through a deep valley. Reach out to them with a text, call, or card — even three sentences of encouragement.",
    ],
    prayer:
      "Good Shepherd, I acknowledge that I am a sheep who wanders, who runs when I should rest, who fears when you have promised presence. Lead me today beside still waters. Restore the parts of my soul that have grown thin and weary. Help me trust that even in the darkest valley, your rod and your staff are with me. Amen.",
    tag: "Guidance",
    tagColor: "#00FF88",
  },
  {
    day: 3,
    dayName: "Wednesday",
    ref: "Romans 8:28–39",
    verse: '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose... For I am convinced that neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord."',
    verseRef: "Romans 8:28, 38–39 (NIV)",
    title: "Nothing Can Separate You",
    author: "Rev. Charles Mwangi",
    authorRole: "Nairobi, Kenya · Theologian & Bible Teacher",
    authorInitials: "CM",
    authorGradient: "linear-gradient(135deg, #BB4F7A, #6B4FBB)",
    readTime: "7 min read",
    content: [
      "Paul writes Romans 8 from a position of hard-won certainty. He had been beaten with rods, shipwrecked, imprisoned, abandoned by friends, and left for dead. He was not a man writing from a padded chair about abstract theology. When he says 'I am convinced,' he means it in the way a soldier means it after surviving a war — not as a theory, but as a testimony.",
      'The famous promise — "all things work together for good" — is one of the most misread verses in Scripture. It does not say all things are good. It does not promise that everything that happens to you will feel good, look good, or end well in the way you define well. What it says is that God is working all things — even the broken, the unjust, the painful — toward a purpose that is ultimately and cosmically good.',
      "That purpose, Paul tells us in verse 29, is this: to conform us to the image of his Son. You are not God's project to make comfortable. You are God's project to make holy — and holiness often comes through fire. The seasons you would have voted to skip are sometimes the seasons that produce the deepest character, the richest compassion, the clearest faith.",
      'But the chapter doesn\'t end there. Paul launches into a crescendo of rhetorical questions: "Who can be against us? Who shall bring any charge? Who shall separate us?" And then he answers them all with the most sweeping declaration in the New Testament: neither death, nor life, nor angels, nor powers, nor the present, nor the future, nor height, nor depth, nor anything else in all creation.',
      "The list is exhaustive by design. Paul is saying: think of every category of threat you can imagine — supernatural, temporal, spatial, cosmic — and none of it can sever you from the love of God in Christ Jesus. You are held not by your grip on God, but by his grip on you. That is the ground of a faith that cannot ultimately fail.",
    ],
    reflections: [
      "What 'all things' are you currently asking God to work together for good? How does it change your perspective to know he is already working — even now?",
      "Paul says our purpose is to be 'conformed to the image of his Son.' Does the difficult season you're in make more sense when viewed through that lens?",
      "Which item in Paul's list — death, life, angels, powers, present, future, height, depth — feels most threatening to you right now? Bring that specifically to God today.",
    ],
    applications: [
      "Write down one 'all things' circumstance in your life — something hard, confusing, or painful. Then write Romans 8:28 next to it as a declaration of faith.",
      "Memorize Romans 8:38–39 this week. Read it aloud once today, and carry it into whatever you face.",
      "Share this passage with someone who is going through a season where they need to hear that they haven't been abandoned.",
    ],
    prayer:
      "Father, I confess that some of what I'm facing today doesn't feel like it's working for my good. Help me to trust your process even when I cannot see your purpose. Anchor me in the unshakable reality that nothing — absolutely nothing — can separate me from your love. I am yours, and that is enough. Amen.",
    tag: "Sovereignty",
    tagColor: "#BB4F7A",
  },
  {
    day: 4,
    dayName: "Thursday",
    ref: "Proverbs 3:5–6",
    verse: '"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."',
    verseRef: "Proverbs 3:5–6 (ESV)",
    title: "Laying Down What You Think You Know",
    author: "Dr. Sarah Whitfield",
    authorRole: "Edinburgh, Scotland · Biblical Counselor & Author",
    authorInitials: "SW",
    authorGradient: "linear-gradient(135deg, #4FBBAA, #4F8FBB)",
    readTime: "5 min read",
    content: [
      'There is a reason this instruction comes in pairs: "trust God" is paired with "don\'t lean on your own understanding." Because for most of us, the primary obstacle to trusting God is not lack of desire — it\'s the competing voice of our own analysis. We have read the situation. We have done the math. We have a plan. And God is asking us to hold it loosely.',
      "The word 'lean' is important. Solomon doesn't say 'don't have understanding' or 'don't think.' He says don't lean on it — don't put your full weight on your own conclusions. Your reasoning isn't necessarily wrong. It's that your perspective is partial, your information is incomplete, and your projections about the future are, at best, educated guesses. God sees the whole board.",
      '"In all your ways acknowledge him" — the Hebrew word for acknowledge here is yada, which means to know intimately. This is not the acknowledgment of a passing nod. It\'s the acknowledgment of a conversation partner: Lord, I have this decision in front of me. What do you see? What do you want me to know? How do you want me to walk through this?',
      "What would it look like to genuinely practice this today? It might mean pausing before responding in a conflict. It might mean sitting with an open Bible before making a financial decision. It might mean praying about a conversation before you have it, rather than after. It means building God into the process, not just bringing him in at the end when your plan isn't working.",
      '"He will make straight your paths." The promise isn\'t that the path will be short, easy, or without obstacles. It\'s that it will be straight — that it will actually lead where it\'s supposed to go. When we acknowledge God in our ways, we are not surrendering our agency; we are accessing a navigation system far more accurate than anything we carry in our own minds.',
    ],
    reflections: [
      "Where in your life are you currently 'leaning on your own understanding' instead of bringing the situation to God? What makes it hard to let go of that analysis?",
      "What does it practically look like for you to 'acknowledge God' in a specific decision or relationship you're navigating right now?",
      "Has there ever been a time when you surrendered your plan to God and found that his path was better than yours? What did that teach you?",
    ],
    applications: [
      "Identify one decision you're facing this week. Write it down, and then spend 5 minutes in prayer before doing any more analysis — asking God what he wants you to see.",
      "Practice the phrase 'I don't fully understand this, but I trust you' at least once today when something goes unexpectedly.",
      "Share Proverbs 3:5–6 with someone in your life who is facing a confusing season and needs a reminder to trust God's navigation over their own.",
    ],
    prayer:
      "Lord, I confess how often my own understanding competes with your voice. I hold my plans loosely today — my analysis of what should happen, my projections about how things will go. Teach me to acknowledge you in every decision, every relationship, every moment. Make straight my path, even when I can't see where it leads. I trust you. Amen.",
    tag: "Trust",
    tagColor: "#4FBBAA",
  },
  {
    day: 5,
    dayName: "Friday",
    ref: "John 15:1–5",
    verse: '"I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing."',
    verseRef: "John 15:5 (ESV)",
    title: "The Fruit That Doesn't Force",
    author: "Pastor Daniel Abara",
    authorRole: "Lagos, Nigeria · Church Planter & Preacher",
    authorInitials: "DA",
    authorGradient: "linear-gradient(135deg, #00FF88, #6B4FBB)",
    readTime: "6 min read",
    content: [
      "Jesus spoke these words the night before his crucifixion, in the upper room, to the people he loved most. He was hours from the cross, and he chose to spend that time talking about abiding. Not about heroic sacrifice. Not about strategic mission. About staying connected — because everything else flows from that.",
      "The metaphor of the vine is deceptively simple. A branch doesn't produce fruit through effort, willpower, or a plan. It produces fruit by staying attached to the vine. The vine does the producing. The branch's one job is to remain in the vine — to stay in the relationship from which life flows.",
      "This is one of the most countercultural truths in Scripture for people who grew up in achievement-oriented homes or churches. We have been trained to believe that spiritual growth comes from doing more, trying harder, attending more services, praying longer. And while those practices matter, they are not the root — connection to Christ is the root. Without that connection, even the most impressive religious activity produces nothing of lasting value.",
      '"Apart from me you can do nothing." This is not primarily a rebuke — it\'s a liberation. It frees you from the exhausting project of manufacturing spiritual fruit through self-improvement. It invites you into something far more restful: presence. Time in the Word. Honest prayer. Silence. Community. The ordinary means of grace that keep you grafted into the one from whom all life comes.',
      "What does it look like for you to abide today? It might look different than it did last year — seasons change, and so do the rhythms that sustain our connection to Christ. The question is not 'am I doing enough spiritual things?' but 'am I genuinely staying connected to the Vine?' From that connection, fruit will come — not manufactured, but grown.",
    ],
    reflections: [
      "What does 'abiding in Christ' look like practically for you right now, in this season of life? What rhythms help you stay connected?",
      "Is there an area of your spiritual life where you've been trying to 'force fruit' through effort rather than abiding? What would it look like to rest instead?",
      "Jesus says 'apart from me you can do nothing.' How does that truth sit with you? Does it feel like a burden, a relief, or both?",
    ],
    applications: [
      "Today, before you begin any major task or project, spend 3 minutes in prayer specifically asking God to do his work through you — consciously placing yourself in the position of a branch.",
      "Identify one spiritual discipline that helps you most 'abide' in Christ. Commit to doing it intentionally today.",
      "Memorize John 15:5 this week. When you feel the pressure to perform or produce, let it remind you where fruit actually comes from.",
    ],
    prayer:
      "Jesus, I acknowledge today that I am the branch and you are the Vine. Forgive me for the times I've disconnected from you and tried to produce fruit on my own. Draw me back into abiding — into the quiet, connected, present place where your life flows into mine. Bear your fruit through me today. Amen.",
    tag: "Abiding",
    tagColor: "#00FF88",
  },
  {
    day: 6,
    dayName: "Saturday",
    ref: "Isaiah 40:28–31",
    verse: '"He gives power to the faint, and to him who has no might he increases strength... They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles."',
    verseRef: "Isaiah 40:29, 31 (ESV)",
    title: "The Gift Hidden in Waiting",
    author: "Bishop James Nkosi",
    authorRole: "Johannesburg, South Africa · Bishop, African Christian Fellowship",
    authorInitials: "JN",
    authorGradient: "linear-gradient(135deg, #E07030, #BB4F7A)",
    readTime: "5 min read",
    content: [
      "We live in an age that has declared war on waiting. Same-day delivery, instant messages, streaming on demand — we have engineered patience out of our daily lives. And this cultural impatience has, quietly, shaped our expectations of God. We want answers quickly. We want prayers resolved efficiently. And when they aren't, we conclude something is wrong — either with us or with him.",
      "Isaiah 40 arrives in the middle of Israel's exile — a community in a season of prolonged waiting. They had prayed for deliverance. It had not come yet. And so Isaiah does not offer a technique for speeding up the process. He offers instead a recalibration of who God is and what waiting actually produces.",
      '"Do you not know? Have you not heard?" — Isaiah begins with a question that reorients the perspective before addressing the problem. God is the everlasting Lord, the Creator of the ends of the earth, who does not faint or grow weary. His understanding is unsearchable. He operates on a timeline and with a wisdom that our impatience cannot access. Waiting is not a defect in the process. It is the process.',
      "The promise to those who wait is threefold: renewed strength, mounted wings, unweary running. But notice the progression — it goes from the extraordinary (eagle wings) to the ordinary (running without fainting, walking without weariness). The deepest gift of waiting is not the spectacular moment when things change. It is the slow formation of a character that can sustain faithfulness in ordinary seasons.",
      "What are you waiting for right now — a relationship, a healing, a direction, a breakthrough? The invitation of this passage is not passive resignation. The Hebrew word for 'wait' (qavah) means to bind together, to be intertwined. You wait by remaining bound to God — in prayer, in Scripture, in community — while the future remains unresolved. And in that binding, strength renews.",
    ],
    reflections: [
      "What are you currently waiting for in prayer? How has that wait shaped your view of God — either positively or negatively?",
      "Isaiah says God 'gives power to the faint' — that strength is given, not earned. How does that change how you approach an area of your life where you feel depleted?",
      "The three gifts of waiting are eagle wings, running without weariness, and walking without fainting. Which do you need most today?",
    ],
    applications: [
      "Write down what you are currently waiting for. Beneath it, write Isaiah 40:31 as a declaration — not a wish, but a promise you choose to believe.",
      "Practice intentional 'binding' today: spend 10 minutes in unhurried prayer without asking for anything — just remaining with God in the wait.",
      "Find someone in your community who is in a difficult season of waiting. Sit with them today — not to fix it, but to model what faithful waiting looks like.",
    ],
    prayer:
      "Lord, I confess my impatience. I have wanted your answers on my timeline, and I have at times interpreted the silence as abandonment. Help me to understand that you do not grow weary, that your timing is wise, and that waiting bound to you produces something no shortcut could ever create. Renew my strength as I rest in you. Amen.",
    tag: "Patience",
    tagColor: "#E07030",
  },
  {
    day: 7,
    dayName: "Sunday",
    ref: "Hebrews 11:1–6",
    verse: '"Now faith is the substance of things hoped for, the evidence of things not seen... And without faith it is impossible to please God, for whoever would draw near to him must believe that he exists and that he rewards those who seek him."',
    verseRef: "Hebrews 11:1, 6 (KJV/ESV)",
    title: "The Evidence of Things Not Seen",
    author: "Dr. Lydia Chen",
    authorRole: "Singapore · New Testament Scholar, Trinity Theological College",
    authorInitials: "LC",
    authorGradient: "linear-gradient(135deg, #4F8FBB, #4FBBAA)",
    readTime: "6 min read",
    content: [
      "The writer of Hebrews offers us one of the most precise definitions of faith in all of Scripture — and then, almost immediately, proceeds to spend the rest of the chapter illustrating it with people who were imperfect, uncertain, and often confused about what God was doing. That is not accidental. The hall of faith in Hebrews 11 is not a museum of religious superhumans. It's a gallery of ordinary people who chose to act on what they couldn't yet see.",
      `”Faith is the substance of things hoped for, the evidence of things not seen.” The word translated “substance” (hypostasis in Greek) was a legal term in the ancient world for a deed of ownership — a document that guaranteed your claim to something you hadn’t yet received. Faith, in this sense, is not wishful thinking or emotional optimism. It is a title deed. It is the documentary evidence that what God has promised is already yours, even before it appears.`,
      "The 'without faith it is impossible to please God' statement is often quoted as a challenge — as if we need to work ourselves into a state of sufficient belief before God will engage with us. But the verse continues: 'for whoever would draw near to him must believe that he exists and that he rewards those who seek him.' The bar is drawing near, and the reward is for seeking. This is not a faith of perfect certainty. It is a faith of direction — turning toward God even in doubt.",
      "Look at the names in Hebrews 11: Abel, Enoch, Noah, Abraham, Sarah. These are not people who had everything figured out. Abraham left for a place 'not knowing where he was going' (v.8). Sarah laughed at the promise before she believed it. Noah built an ark for a flood that had never happened. Their faith was not the absence of questions — it was the presence of a God who was worth following anyway.",
      "Sunday is a fitting day to reflect on faith — because every Sunday we gather with other imperfect believers to act on what we cannot yet see. We sing songs about a kingdom that hasn't fully come yet. We remember a resurrection we didn't witness. We declare truths that the culture around us considers foolishness. This is the ancient, audacious practice of biblical faith. And it still pleases God.",
    ],
    reflections: [
      "The definition of faith includes both 'substance' and 'evidence' — active, not passive. How does that reframe your understanding of what faith is supposed to look like?",
      "Which figure in Hebrews 11 do you most identify with right now? What does their story say to yours?",
      "In what area of your life are you being asked to 'act on what you cannot yet see'? What would a step of faith look like there?",
    ],
    applications: [
      "Read Hebrews 11 in full today — all 40 verses. Let the whole gallery of faith stories wash over you.",
      "Write your own 'faith declaration' for one specific area of your life — what you are trusting God for even before you see evidence of it.",
      "Make Sundays a day of intentional gathering: come to corporate worship today not just to receive, but to add your voice to the declaration that God is real and worth following.",
    ],
    prayer:
      "Father, increase my faith. Not the faith that demands certainty before commitment, but the faith that acts on your word even when I cannot see the outcome. Help me to be one who 'draws near' — consistently, honestly, imperfectly — and trusts that you reward those who seek you. Make me part of the great company of faithful ones who chose you, even in the dark. Amen.",
    tag: "Faith",
    tagColor: "#4F8FBB",
  },
];

export default function DailyDevotional() {
  const [dayIndex, setDayIndex] = useState(() => (new Date().getDay() + 6) % 7);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const [completed, setCompleted] = useState(false);

  const d = devotionals[dayIndex];

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(() => setCompleted(false), 3500);
  };

  return (
    <div>
      {/* Day Navigation Header */}
      <div className="flex items-center justify-between mb-5 rounded-2xl p-3"
        style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
        <button
          onClick={() => { setDayIndex(i => Math.max(0, i - 1)); setLiked(false); setSaved(false); setCompleted(false); }}
          disabled={dayIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all btn-outline-gold"
          style={{ opacity: dayIndex === 0 ? 0.35 : 1, cursor: dayIndex === 0 ? "not-allowed" : "pointer" }}
        >
          <ChevronLeft size={15} /> Prev
        </button>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
            Day {dayIndex + 1} of 7
          </p>
          <p className="text-xs" style={{ color: "#6A6A88" }}>{d.dayName}</p>
        </div>
        <button
          onClick={() => { setDayIndex(i => Math.min(devotionals.length - 1, i + 1)); setLiked(false); setSaved(false); setCompleted(false); }}
          disabled={dayIndex === devotionals.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all btn-gold"
          style={{ opacity: dayIndex === devotionals.length - 1 ? 0.35 : 1, cursor: dayIndex === devotionals.length - 1 ? "not-allowed" : "pointer" }}
        >
          Next <ChevronRight size={15} />
        </button>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="tag-pill">{d.dayName}, {d.ref}</span>
          <span
            className="text-xs font-semibold px-3 py-0.5 rounded-full"
            style={{ background: `${d.tagColor}18`, color: d.tagColor, border: `1px solid ${d.tagColor}30` }}
          >
            {d.tag}
          </span>
        </div>
        <h1 className="text-3xl font-black mb-1" style={{ color: "#F2F2F8" }}>{d.title}</h1>
        <p className="text-base" style={{ color: "#8A8AA8" }}>
          Take a moment to be still. Let God&apos;s Word meet you where you are today.
        </p>
      </div>

      {/* Verse Card */}
      <div className="verse-card rounded-2xl p-8 mb-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.15) 0%, transparent 70%)",
        }} />
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#00FF88" }}>
          Today&apos;s Verse · {d.ref}
        </p>
        <blockquote className="text-xl sm:text-2xl font-bold italic leading-relaxed mb-4" style={{ color: "#F2F2F8" }}>
          {d.verse}
        </blockquote>
        <p className="text-base font-semibold gold-gradient">— {d.verseRef}</p>
      </div>

      {/* Devotional */}
      <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
        {/* Author */}
        <div className="flex items-center gap-3 mb-5 pb-5" style={{ borderBottom: "1px solid #1E1E32" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
            style={{ background: d.authorGradient, color: "#07070F" }}
          >
            {d.authorInitials}
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{d.author}</p>
            <p className="text-xs" style={{ color: "#6A6A88" }}>{d.authorRole}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "#8A8AA8" }}>
            <Clock size={12} />
            <span>{d.readTime}</span>
          </div>
        </div>

        <h2 className="text-xl font-black mb-4" style={{ color: "#F2F2F8" }}>{d.title}</h2>

        <div className="space-y-4 text-base leading-relaxed" style={{ color: "#C0C0D8" }}>
          {d.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 pt-5 space-y-4" style={{ borderTop: "1px solid #1E1E32" }}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(v => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{ color: liked ? "#EC4899" : "#8A8AA8", background: liked ? "rgba(236,72,153,0.08)" : "transparent" }}
            >
              <Heart size={15} fill={liked ? "#EC4899" : "none"} />
              {liked ? "Loved" : "Love"}
            </button>
            <button
              onClick={() => setSaved(v => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{ color: saved ? "#00FF88" : "#8A8AA8", background: saved ? "rgba(0,255,136,0.08)" : "transparent" }}
            >
              <Bookmark size={15} fill={saved ? "#00FF88" : "none"} />
              {saved ? "Saved" : "Save"}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ml-auto"
              style={{ color: shared ? "#00FF88" : "#8A8AA8" }}
            >
              <Share2 size={15} />
              {shared ? "Copied!" : "Share"}
            </button>
          </div>

          {!completed ? (
            <button
              onClick={handleComplete}
              className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
              style={{ border: "1px solid rgba(0,255,136,0.2)", color: "#00FF88", background: "rgba(0,255,136,0.04)" }}
            >
              <CheckCircle2 size={16} /> Mark Day {dayIndex + 1} Complete
            </button>
          ) : (
            <div className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", color: "#00FF88" }}>
              <CheckCircle2 size={16} /> Day {dayIndex + 1} Complete — Streak +1! 🔥
            </div>
          )}
        </div>
      </div>

      {/* Reflect */}
      <div className="rounded-2xl p-6 mb-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={18} style={{ color: "#6B4FBB" }} />
          <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>Reflect</h3>
        </div>
        <div className="space-y-3">
          {d.reflections.map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black"
                style={{ background: "rgba(107,79,187,0.2)", color: "#8B6FDB" }}>
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Apply */}
      <div className="rounded-2xl p-6 mb-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={18} style={{ color: "#4FBBAA" }} />
          <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>Apply Today</h3>
        </div>
        <div className="space-y-3">
          {d.applications.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#4FBBAA" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prayer */}
      <div className="rounded-2xl p-6 mb-6 verse-card">
        <div className="flex items-center gap-2 mb-4">
          <Pen size={18} style={{ color: "#00FF88" }} />
          <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>A Prayer for Today</h3>
        </div>
        <p className="text-sm italic leading-relaxed" style={{ color: "#C0C0D8" }}>{d.prayer}</p>
      </div>
    </div>
  );
}
