"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  BookOpen,
  Clock,
  Moon,
  Mountain,
  Wind,
  Feather,
  Quote,
  Sparkles,
  VolumeX,
  Sunrise,
  Footprints,
  PenLine,
  ScrollText,
  Compass,
  Hourglass,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Design tokens
// ---------------------------------------------------------------------------
const ACCENT = "#6366F1";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_silencesolitude_entries";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface SSEntry {
  duration: string; // how long the silence/solitude practice was
  noise: string; // what inner noise surfaced
  whisper: string; // what you sensed God saying
}

type TabId = "theology" | "practices" | "voices" | "scripture" | "journal" | "videos";

interface Tab {
  id: TabId;
  label: string;
}

const TABS: Tab[] = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

// ---------------------------------------------------------------------------
// Theology content
// ---------------------------------------------------------------------------
interface TheologySection {
  id: string;
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}

const THEOLOGY_SECTIONS: TheologySection[] = [
  {
    id: "jesus-rhythm",
    icon: <Sunrise size={20} />,
    title: "The Rhythm of Jesus: Withdrawal Before Work",
    paragraphs: [
      "Mark wastes no time. In the very first chapter of his Gospel, after a day so crowded that the whole city gathered at the door, he records this: very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed (Mark 1:35). The Greek phrase is eremon topon — a deserted place, a wilderness place. Before the demands of the day could find him, Jesus went where they could not.",
      "This was not a one-time retreat after an unusually hard week. Luke tells us it was a pattern: Jesus often withdrew to lonely places and prayed (Luke 5:16). The verb tense indicates habitual, repeated action. The more his fame spread and the larger the crowds grew, the more deliberately he withdrew. Where we respond to growing demand by working longer, Jesus responded by retreating further. His public power flowed from his private stillness.",
      "Notice when solitude appears in his life: before choosing the twelve apostles, he spent the night alone in prayer (Luke 6:12). After feeding the five thousand, when the crowd wanted to make him king, he dismissed them and went up on a mountainside by himself (Matthew 14:23). After hearing of John the Baptist's death, he withdrew by boat privately to a solitary place (Matthew 13:13 onward in the narrative of chapter 14). Before the cross, he prayed alone in Gethsemane while his closest friends slept (Matthew 26:36-46). Decision, success, grief, and suffering — at every hinge of his life, Jesus chose solitude. If the sinless Son of God needed regular silence with the Father, our confidence that we can do without it is not maturity. It is delusion.",
    ],
  },
  {
    id: "elijah",
    icon: <Mountain size={20} />,
    title: "Elijah at Horeb: The God Who Whispers",
    paragraphs: [
      "First Kings 19 is one of the strangest and most tender scenes in the Old Testament. Elijah has just won the most spectacular public victory of his career — fire from heaven on Mount Carmel, the prophets of Baal routed. And then a single threat from Jezebel sends him fleeing into the wilderness, suicidal and spent. He has had enough. He wants to die.",
      "God's response is striking. No rebuke. First, sleep and food — an angel touches him and says, get up and eat, for the journey is too much for you. Then a forty-day walk to Horeb, the mountain of God. And there, the famous theophany: a great and powerful wind tore the mountains apart, but the LORD was not in the wind. After the wind an earthquake, but the LORD was not in the earthquake. After the earthquake a fire, but the LORD was not in the fire. And after the fire — a sound of sheer silence, what the King James Version renders as a still small voice (1 Kings 19:11-12).",
      "The Hebrew phrase qol demamah daqqah is almost untranslatable: a voice of thin silence, a sound of gentle stillness. The prophet who called down fire had to learn that God's deepest communication does not come in pyrotechnics. It comes in a whisper so quiet that only a silenced soul can hear it. Elijah wrapped his face in his cloak and went out to meet it. The lesson stands for every burned-out servant of God since: when the noise of your life and ministry has emptied you, God does not shout you back to health. He invites you into a silence where, at last, you can hear him ask the gentle diagnostic question he asked Elijah — what are you doing here?",
    ],
  },
  {
    id: "desert-fathers",
    icon: <Compass size={20} />,
    title: "The Desert Fathers and Mothers: A Counterculture of Quiet",
    paragraphs: [
      "In the late third and fourth centuries, as Christianity moved from persecuted minority to imperial favorite, thousands of men and women did something baffling: they walked out of the cities into the deserts of Egypt, Palestine, and Syria. Antony the Great heard Matthew 19:21 read in church — go, sell your possessions — and obeyed it literally, eventually spending twenty years in solitude in an abandoned fort. Amma Syncletica, Abba Moses, Abba Arsenius, and countless others followed the same call into the wilderness.",
      "Why? They believed the world had grown comfortable in a way that endangered the soul. When martyrdom ended, they sought a different kind of death — the slow death of the false self in silence. Their word for it was hesychia: stillness, quiet of heart. Abba Moses gave the movement its most famous instruction: go, sit in your cell, and your cell will teach you everything. Arsenius, a former tutor in the imperial court, prayed for salvation and heard the answer: flee, be silent, pray always — fuge, tace, quiesce.",
      "The desert tradition is not a museum piece. These men and women became, paradoxically, the most sought-after counselors of their age; pilgrims trekked for weeks to ask an old hermit for a word. Their collected sayings — the Apophthegmata Patrum — remain some of the most psychologically penetrating literature in Christian history. They discovered in silence what we are still discovering: that the desert strips away every prop, every performance, every audience, until only you and God remain. They did not flee people because they hated them. They fled the version of themselves that crowds made possible, so they could return to people with something real to give.",
    ],
  },
  {
    id: "inner-noise",
    icon: <Wind size={20} />,
    title: "Why Silence Is So Uncomfortable",
    paragraphs: [
      "Try sitting in total silence for ten minutes and you will learn something humbling: the noise is not primarily outside you. Within ninety seconds, the inner broadcast begins — the replayed argument, the unfinished to-do list, the anxious forecast, the rehearsed defense, the craving for the phone. Blaise Pascal saw it in the seventeenth century: all of humanity's problems stem from man's inability to sit quietly in a room alone. The diagnosis predates the smartphone by 350 years; the smartphone merely industrialized the escape.",
      "Silence is uncomfortable because it works like a developing tray for the soul. In stillness, what is actually in us rises to the surface — the resentment we have been outrunning, the grief we have postponed, the ambition wearing a ministry costume, the loneliness underneath the busyness. Most of our noise consumption is anesthetic. We do not check our phones one hundred times a day because the content is good. We check them because the silence is hard.",
      "This is precisely why the discipline matters. The discomfort of silence is not a sign that it is failing; it is the sign that it is working. The inner noise that surfaces is not an interruption of the practice — it is the agenda. Each distraction names something that needs to be brought to God. The desert fathers called these surfacing thoughts logismoi and treated them as diagnostic information: here is what owns me, here is what I fear, here is what I worship. Silence does not create the chaos within. It reveals the chaos that was already there, and reveals it in the presence of the only One who can heal it.",
    ],
  },
  {
    id: "solitude-vs-isolation",
    icon: <Footprints size={20} />,
    title: "Solitude Is Not Isolation, Silence Is Not Absence",
    paragraphs: [
      "A crucial distinction guards this discipline from distortion: solitude and isolation can look identical from the outside and be opposites on the inside. Isolation is being alone against your will or alone to escape — alone in a way that curves inward, feeds self-pity, and starves the soul. Loneliness is the pain of unwanted disconnection. Solitude is something else entirely: chosen aloneness for the sake of communion. Paul Tillich put it memorably — language has created the word loneliness to express the pain of being alone, and the word solitude to express the glory of being alone.",
      "Christian solitude is never actually solitary. You withdraw from human company precisely to keep an appointment with Someone. Henri Nouwen called solitude the furnace of transformation — not a private vacation from people but the place where the false self burns away and the beloved self is heard into being. That is why genuine solitude makes us more available to others, not less. The desert hermits became the great counselors of their era; Jesus returned from lonely places to touch lepers and feed crowds. Solitude that makes you colder toward people is not solitude. It is hiding.",
      "The same goes for silence. Biblical silence is not the absence of sound but the presence of attention. It is not an empty room; it is a cleared table set for a guest. The Quakers speak of expectant waiting. The Psalmist says, for God alone my soul waits in silence (Psalm 62:1). The waiting is the point. We are not emptying our minds into a void, as in some Eastern practices; we are quieting our mouths and minds so that a Person who is already speaking can finally be heard. Christian silence is densely relational — it is the silence of two friends who no longer need words, not the silence of an empty house.",
    ],
  },
  {
    id: "attention-economy",
    icon: <VolumeX size={20} />,
    title: "Silence as Resistance to the Attention Economy",
    paragraphs: [
      "We are the first generation of Christians to practice the faith inside an economy explicitly engineered to harvest our attention. Trillion-dollar companies employ the best behavioral scientists alive to make sure you never experience an unstimulated moment. The average person touches their phone over two thousand times a day. Every gap — the elevator, the red light, the bathroom, the first ten seconds of waking — has been colonized. Attention is the new oil, and your inner life is the drilling site.",
      "This is not morally neutral. Whoever forms your attention forms your soul. Jesus said where your treasure is, there your heart will be also; the attention economy has discovered that where your attention is, there your treasure — and your anxiety, your appetite, your sense of self — will follow. A heart that is never quiet cannot be still and know that he is God (Psalm 46:10), because knowing of that kind requires sustained, undistracted beholding, and sustained beholding is exactly what the feed is designed to make impossible.",
      "In this context, silence stops being a quaint monastic hobby and becomes an act of resistance — arguably the most countercultural thing a Christian can do with thirty minutes. To sit in stillness before God is to declare that your attention is not for sale, that your worth is not generated by visibility, and that the most important voice in the universe does not advertise. The early Christians refused to burn a pinch of incense to Caesar. Our generation's refusal may look like a phone left in another room and a soul, slowly and with great difficulty, learning to be quiet enough to hear the still small voice that empires and algorithms cannot counterfeit.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Practices content
// ---------------------------------------------------------------------------
interface Practice {
  id: string;
  icon: React.ReactNode;
  name: string;
  time: string;
  level: string;
  summary: string;
  steps: string[];
  warning: string;
}

const PRACTICES: Practice[] = [
  {
    id: "morning-stillness",
    icon: <Sunrise size={22} />,
    name: "The 5-Minute Morning Stillness",
    time: "5 minutes",
    level: "Beginner",
    summary:
      "The first input of your day disciples you. Before the phone, before the news, before the inbox — five minutes of sitting silently before God. This tiny practice re-orders the entire day around the conviction that you are a beloved child before you are a productive worker.",
    steps: [
      "The night before, charge your phone outside the bedroom or across the room. The practice begins with this decision, not at dawn.",
      "On waking, sit up on the edge of the bed or in a chair. Feet on the floor, hands open on your knees.",
      "Pray one anchoring sentence: 'Father, before I hear anything else today, I want to hear you.'",
      "Sit in silence for five minutes. When thoughts arrive — and they will — do not fight them. Gently return with a single word: 'Father.'",
      "Close by praying Psalm 143:8: 'Let the morning bring me word of your unfailing love.' Then, and only then, pick up the day.",
    ],
    warning:
      "The battle is lost or won the night before. If the phone sleeps next to you, it will win the first moment of your day approximately one hundred percent of the time.",
  },
  {
    id: "silent-commute",
    icon: <Footprints size={22} />,
    name: "The Silent Commute",
    time: "10–60 minutes",
    level: "Beginner",
    summary:
      "Reclaim travel time that is already in your schedule. Drive, walk, or ride without podcasts, music, audiobooks, or calls. The commute becomes a portable monastery — no extra time required, only the courage to leave the silence unfilled.",
    steps: [
      "Choose one regular trip this week — the morning drive, the walk to the train, the school run after drop-off.",
      "Before starting, name the intention out loud: 'Lord, this drive is yours. I am listening.'",
      "Leave every audio source off. Notice the twitch in your hand reaching for the dial — that twitch is data about your soul.",
      "Let the silence do its work. Pray for the drivers and houses you pass. Bring whatever surfaces — worry, irritation, a person's face — directly to God as it comes.",
      "Arrive thirty seconds early in your parking spot or at your door, and sit. Ask: 'What did I notice in the quiet that I never notice in the noise?'",
    ],
    warning:
      "Expect the first three silent commutes to feel unbearably long and strangely boring. Boredom is the withdrawal symptom of an overstimulated soul. Push through it; the quiet becomes spacious around the second week.",
  },
  {
    id: "half-day-retreat",
    icon: <Mountain size={22} />,
    name: "The Half-Day Retreat",
    time: "3–4 hours",
    level: "Intermediate",
    summary:
      "Jesus did not only take five-minute pauses; he withdrew for extended stretches, sometimes whole nights. A quarterly half-day of silence and solitude is the single most transformative rhythm most believers have never tried. It requires planning — which is exactly why it requires planning.",
    steps: [
      "Put it on the calendar two weeks out, like a medical appointment. Tell whoever needs to know that you are unreachable for four hours.",
      "Choose your place: a state park, a quiet chapel, a retreat center, a borrowed cabin, even a library corner or an empty church sanctuary. The key criteria — no errands possible, no people who know you.",
      "Bring only: a Bible, a journal, a pen, water, and a simple lunch. Leave the phone in the car or set it to emergency-only.",
      "Structure loosely in hour-long movements: (1) Unloading — walk or sit and let the mental noise pour out; journal the static. (2) Listening — slow reading of one Psalm or Gospel passage, lectio divina pace. (3) Conversing — honest prayer about what surfaced. (4) Resting — a nap is spiritual; receive it as a gift, not a failure.",
      "End by writing down one sentence you sense God impressed on you and one concrete response. Re-enter slowly — no podcast on the drive home.",
    ],
    warning:
      "Do not over-program the day. The greatest temptation is to turn the retreat into a productivity session with a spiritual theme — sermon prep, planning, goal-setting. The agenda is to be with God, not to get things from God.",
  },
  {
    id: "breath-prayer",
    icon: <Wind size={22} />,
    name: "Breath Prayer in Silence",
    time: "10 minutes",
    level: "Beginner",
    summary:
      "An ancient practice from the desert tradition: a short Scripture phrase synced with breathing, used to anchor the mind during silence. The classic anchor for this discipline is Psalm 46:10 — inhale on 'Be still,' exhale on 'and know.' The prayer gives the wandering mind a home to return to.",
    steps: [
      "Sit comfortably with your back straight. Set a gentle timer for ten minutes so you are not clock-watching.",
      "Spend the first minute simply noticing your breathing without changing it.",
      "Begin the prayer: inhale slowly on 'Be still' — exhale slowly on 'and know.' Some add a second line: inhale 'that I am' — exhale 'God.'",
      "When your mind drifts to your to-do list (it will, dozens of times), do not scold yourself. The return is the prayer. Come back to the breath and the words.",
      "In the final minute, drop the words and sit in open silence. You have swept the room; now leave space for the Guest.",
    ],
    warning:
      "This is not a relaxation technique with a Bible verse attached, and it is not emptying the mind. You are filling your attention with a Person. If it ever becomes mere stress management, return to the words and remember who you are addressing.",
  },
  {
    id: "tech-sabbath",
    icon: <Moon size={22} />,
    name: "The Technology Sabbath",
    time: "24 hours",
    level: "Advanced",
    summary:
      "One day in seven of complete digital silence: no phone, no feeds, no streaming, no email. A twenty-four hour fast from the attention economy that pairs the ancient command to sabbath with the modern need to detox. Most people report the first one feels like losing a limb — and the fourth one feels like getting a soul back.",
    steps: [
      "Choose your twenty-four hours — sundown Friday to sundown Saturday is the classic pattern, but pick what your life allows. Consistency beats perfection.",
      "Prepare like the Israelites gathering double manna: tell key people you will be offline, print directions if needed, write down the phone numbers you might need, queue nothing.",
      "At the starting hour, power the devices fully off and put them in a drawer — out of sight matters; a visible dark screen still pulls attention.",
      "Fill the day with received things rather than consumed things: a long walk, a real meal with people, Scripture on paper, a nap, prayer, making something with your hands.",
      "Before powering back on, sit for ten minutes of silence and ask: 'What did the quiet show me about what these devices are doing to my soul the other six days?' Journal the answer before the notifications bury it.",
    ],
    warning:
      "Expect phantom vibrations, reflexive pocket-reaching, and a wave of restlessness around hour three. These are not reasons to quit; they are the diagnosis. If a full day is genuinely impossible at first, begin with a four-hour block and grow it — but do not negotiate it away forever.",
  },
  {
    id: "night-watch",
    icon: <Hourglass size={22} />,
    name: "The Night Watch",
    time: "10–15 minutes",
    level: "Beginner",
    summary:
      "How you end the day shapes how your soul metabolizes it. Instead of scrolling until unconsciousness, keep a brief silence before sleep — reviewing the day with God and handing the night over to the One who neither slumbers nor sleeps. The Psalmists prayed in the watches of the night; this is their practice in miniature.",
    steps: [
      "Set a digital sunset: all screens off at least thirty minutes before bed. The night watch begins where the glow ends.",
      "Sit on the edge of the bed or in a chair with the lights low. Take three slow breaths and pray: 'Lord, the day is yours — the finished parts and the unfinished parts.'",
      "Review the day gently with God (a simplified examen): Where did I sense your presence today? Where did I run on noise and self-effort?",
      "Name what you are still carrying — the unresolved conversation, tomorrow's meeting, the worry that loops — and place each one, by name, in God's hands for the night.",
      "End with Psalm 4:8 in the silence: 'In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.' Let that be the last sentence of the day.",
    ],
    warning:
      "The phone on the nightstand will undo this practice every time. Charge it in another room. If you use it as an alarm, a ten-dollar alarm clock is the cheapest spiritual direction you will ever buy.",
  },
];

// ---------------------------------------------------------------------------
// Voices content
// ---------------------------------------------------------------------------
interface Voice {
  id: string;
  name: string;
  era: string;
  work: string;
  bio: string;
  quote: string;
  contribution: string;
}

const VOICES: Voice[] = [
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932–1996 · Catholic priest and writer",
    work: "The Way of the Heart",
    bio: "Henri Nouwen left prestigious teaching posts at Yale and Harvard to live among adults with intellectual disabilities at the L'Arche Daybreak community — a trajectory that gave his teaching on solitude an unusual credibility. In The Way of the Heart (1981), his short masterwork on the desert fathers, he distilled their spirituality into three movements: solitude, silence, and prayer. Nouwen argued that without solitude we live ruled by the compulsions of the false self — the relentless need to be relevant, spectacular, and powerful.",
    quote:
      "Solitude is the furnace of transformation. Without solitude we remain victims of our society and continue to be entangled in the illusions of the false self.",
    contribution:
      "Nouwen translated the desert tradition for the modern anxious professional. His insight that ministry without solitude collapses into ego-management — that we cannot give others the peace we do not possess — has shaped a generation of pastors. He reframed solitude not as escape from responsibility but as the place where we discover we are the beloved before we are the busy.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935–2013 · Philosopher and spiritual writer",
    work: "The Spirit of the Disciplines",
    bio: "Dallas Willard spent his career as a professor of philosophy at the University of Southern California while quietly becoming evangelicalism's most rigorous thinker on spiritual formation. In The Spirit of the Disciplines (1988) he classified solitude and silence as the primary disciplines of abstinence — the practices by which we deny lesser appetites to make room for God. Famously, when pastor John Ortberg called him asking what he needed to do to be spiritually healthy, Willard answered slowly: you must ruthlessly eliminate hurry from your life. Ortberg asked what else. Willard replied: there is nothing else.",
    quote:
      "Silence is frightening because it strips us as nothing else does, throwing us upon the stark realities of our life. It reminds us of death, which will cut us off from this world and leave only us and God.",
    contribution:
      "Willard called solitude the most radical of the disciplines because it breaks our deepest addiction — the addiction to other people's opinions and to our own usefulness. He gave the discipline intellectual spine: solitude and silence are not optional intensives for mystics but the foundational training regimen for anyone serious about actually becoming like Christ rather than merely admiring him.",
  },
  {
    id: "barton",
    name: "Ruth Haley Barton",
    era: "b. 1960 · Spiritual director and author",
    work: "Invitation to Solitude and Silence",
    bio: "Ruth Haley Barton founded the Transforming Center, a ministry devoted to the spiritual formation of pastors, after her own experience of ministry burnout drove her into the practices she now teaches. Invitation to Solitude and Silence (2004) walks readers through Elijah's journey in 1 Kings 19 as a map for the burned-out soul. A spiritual director once gave her the image that defines the book: the soul is like a jar of river water all shaken up; only when it sits still does the sediment settle and the water become clear.",
    quote:
      "Solitude is a place. It is a place in time that is set apart for God and God alone, a time when we unplug and withdraw from the noise of interpersonal interactions, from the noise, busyness and constant stimulation associated with life in the company of others.",
    contribution:
      "Barton made the discipline practical and pastoral, especially for ministry leaders who use spiritual work to avoid spiritual life. Her honest account of arriving at silence exhausted and jangled — and her insistence that we begin by simply letting the sediment settle rather than performing for God — has given thousands of driven leaders permission to stop. Her work restored Elijah's story as the great biblical case study in burnout and recovery.",
  },
  {
    id: "merton",
    name: "Thomas Merton",
    era: "1915–1968 · Trappist monk",
    work: "Thoughts in Solitude",
    bio: "Thomas Merton entered the Abbey of Gethsemani in Kentucky in 1941 after a restless, worldly youth, and from inside a monastery vowed to silence he became one of the twentieth century's most influential voices. His autobiography The Seven Storey Mountain was a publishing phenomenon, but it is in works like Thoughts in Solitude and New Seeds of Contemplation that his theology of silence matures. For Merton, contemplative silence was not a technique but a homecoming — the place where the false self constructed for public consumption dies, and the true self hidden with Christ in God comes to light. In his final years he lived as a hermit on the monastery grounds.",
    quote:
      "My life is a listening. His is a speaking. My salvation is to hear and respond. For this, my life must be silent. Hence, my silence is my salvation.",
    contribution:
      "Merton gave contemplative silence back to the wider church and connected it to everything — identity, justice, peacemaking, even technology criticism decades ahead of its time. His distinction between the false self (the performed identity that needs noise and audiences) and the true self (known only in silent communion with God) remains the master key for understanding why silence is so threatening and so healing.",
  },
  {
    id: "tozer",
    name: "A.W. Tozer",
    era: "1897–1963 · Pastor and author",
    work: "The Pursuit of God",
    bio: "Aiden Wilson Tozer pastored in Chicago and Toronto with almost no formal education, yet wrote with a prophet's edge about the shallowness of modern Christianity. The Pursuit of God (1948) — written, it is said, in a single overnight train ride, on his knees — pleads for a faith of direct, first-hand encounter with God rather than second-hand religious activity. Tozer practiced what he preached: he was famous for spending long hours alone on the floor of his study in worship, and he warned relentlessly that the great enemy of the inner life is noise — both the world's and the church's own religious busyness.",
    quote:
      "Stay in the secret place till the surrounding noises begin to fade out of your heart and a sense of God's presence envelops you. Listen for the inward Voice till you learn to recognize it.",
    contribution:
      "Tozer brought the call to stillness into the heart of evangelicalism, a tradition often suspicious of contemplative language. He insisted that God is speaking continuously — not God spoke, but God speaks — and that the problem is never divine silence but human noise. His blunt warning that the church had substituted programs and activity for the presence of God reads more urgently now than when he wrote it.",
  },
  {
    id: "comer",
    name: "John Mark Comer",
    era: "b. 1980 · Pastor and teacher",
    work: "The Ruthless Elimination of Hurry",
    bio: "John Mark Comer was the founding pastor of Bridgetown Church in Portland when he hit the wall — a megachurch leader succeeding outwardly and disintegrating inwardly. The Ruthless Elimination of Hurry (2019), which takes its title from Dallas Willard's famous advice, chronicles his decision to step down, slow down, and rebuild his life around the practices of Jesus. Silence and solitude is the first practice he names, calling it the keystone habit on which the others depend. He later founded Practicing the Way to resource churches in apprenticeship to Jesus.",
    quote:
      "Hurry is the great enemy of spiritual life in our day. Hurry kills relationships. Love takes time; hurry doesn't have it. It kills joy, gratitude, appreciation; people in a rush don't have time to enter the goodness of the moment.",
    contribution:
      "Comer translated the Willard-Nouwen tradition for the smartphone generation, naming the attention economy as a spiritual battlefield with a clarity earlier writers could not have imagined. His framing of silence and solitude as the lead practice in a rule of life — and his insistence that hurry, not heresy, is the great threat to faith in the digital age — has made the desert tradition suddenly legible to millions of distracted believers.",
  },
];

// ---------------------------------------------------------------------------
// Scripture content
// ---------------------------------------------------------------------------
interface Passage {
  id: string;
  ref: string;
  text: string;
  context: string;
  practice: string;
}

const PASSAGES: Passage[] = [
  {
    id: "ps46",
    ref: "Psalm 46:10",
    text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
    context:
      "The most quoted stillness verse in the Bible is set, surprisingly, in a war psalm. Psalm 46 opens with mountains falling into the sea and nations in uproar; the stillness of verse 10 is commanded in the middle of chaos, not in its absence. The Hebrew raphah means to let go, to cease striving, to drop your hands. It is less a spa-day invitation than a battlefield order: stop fighting, stand down, and watch what God alone can do.",
    practice:
      "Use this verse as a breath prayer when circumstances are loud, not just when they are calm. Inhale: 'Be still' — exhale: 'and know.' The verse teaches that stillness is not the result of a controlled environment; it is the fruit of a settled conviction about who is on the throne.",
  },
  {
    id: "kings19",
    ref: "1 Kings 19:11-13",
    text: "After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper. When Elijah heard it, he pulled his cloak over his face and went out and stood at the mouth of the cave.",
    context:
      "Elijah expected God in the spectacular — he had just seen fire fall on Carmel. Instead, wind, earthquake, and fire pass by as empty pyrotechnics, and the LORD arrives in qol demamah daqqah, a sound of sheer silence, a thin whisper. The prophet's response is telling: he covers his face. The whisper carried more holy weight than the hurricane. God then asks, gently, the question silence always asks: what are you doing here?",
    practice:
      "When you sit in silence, you are taking up Elijah's position at the mouth of the cave. Do not demand earthquakes. Most of what God says to his children arrives at whisper-volume — which is why a life lived at hurricane-volume hears so little of it.",
  },
  {
    id: "mark1",
    ref: "Mark 1:35",
    text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.",
    context:
      "The evening before, the whole town had gathered at the door; Jesus healed many and drove out demons late into the night. By every modern metric he had earned a morning off. Instead, before dawn, he slips out to an eremos topos — a deserted, wilderness place. When Simon hunts him down with the modern church's favorite sentence, everyone is looking for you, Jesus answers from the fullness of his solitude: let us go somewhere else. The quiet had already told him who he was and what was next.",
    practice:
      "Note the engineering of the moment: early, dark, away. Jesus had to make solitude logistically possible, and so do you. Decide tonight where and when the solitary place will be tomorrow, because at 6 a.m. willpower alone will lose to the pillow and the phone.",
  },
  {
    id: "luke5",
    ref: "Luke 5:16",
    text: "But Jesus often withdrew to lonely places and prayed.",
    context:
      "Luke places this sentence immediately after a ministry explosion — crowds coming to hear him and be healed of their sicknesses. The grammar is habitual: withdrawing was his settled custom, not his crisis response. The busier the ministry grew, the more he retreated. Luke is showing us the engine room of the most public life ever lived: it ran on hidden hours nobody saw.",
    practice:
      "Put the word often under examination in your own life. Solitude that happens only when you collapse is recovery, not rhythm. Schedule withdrawal the way Jesus practiced it — as a recurring appointment that ministry must bend around, not the other way round.",
  },
  {
    id: "ps62",
    ref: "Psalm 62:1-2",
    text: "Truly my soul finds rest in God; my salvation comes from him. Truly he is my rock and my salvation; he is my fortress, I will never be shaken.",
    context:
      "The Hebrew of verse 1 is starker than most translations show: for God alone, my soul — silence. David writes from under political betrayal, surrounded by men who bless with their mouths and curse inwardly. His response is not a counter-campaign but a silenced soul. Twice in the psalm he repeats the discipline like a man steadying himself: yes, my soul, find rest in God. Silence here is an act of exclusive trust — God alone, no backup plans murmuring in the background.",
    practice:
      "Pray this psalm when you are tempted to defend yourself, manage your reputation, or rehearse comebacks. Waiting in silence is what trust looks like when speaking, posting, and strategizing would all be easier. Let the repeated 'alone' audit your hidden contingency plans.",
  },
  {
    id: "hab2",
    ref: "Habakkuk 2:20",
    text: "The LORD is in his holy temple; let all the earth be silent before him.",
    context:
      "Habakkuk has spent two chapters arguing with God — honest, anguished complaints about violence and injustice. The answer culminates not in an explanation but in a summons: the idols are mute things their makers must speak for, but the living God is present in his temple, and the fitting response of the whole earth is hush. This silence is not the absence of answers; it is the posture of creatures before the Creator. From this hush, Habakkuk emerges into one of Scripture's greatest declarations of trust: though the fig tree does not bud, yet I will rejoice in the LORD.",
    practice:
      "Use this verse to open times of silence, especially in seasons of complaint. There is a time to argue with God — Habakkuk proves it — and a time to let the gavel of this verse fall on the courtroom of the heart. Silence before God is not giving up the questions; it is remembering who sits on the bench.",
  },
];

// ---------------------------------------------------------------------------
// Videos content
// ---------------------------------------------------------------------------
const VIDEOS: { videoId: string; title: string; note: string }[] = [
  {
    videoId: "VK1ZyGwHmDo",
    title: "John Mark Comer: Silence and Solitude",
    note: "Comer on why silence and solitude is the keystone practice of apprenticeship to Jesus in a hurried, distracted age.",
  },
  {
    videoId: "9XCsNHt-Ozk",
    title: "The Discipline of Silence - Dallas Willard",
    note: "Willard explains why solitude and silence are the most radical of the disciplines — and the foundation of all the rest.",
  },
  {
    videoId: "LdkPbnNDIxA",
    title: "Henri Nouwen on Solitude",
    note: "Nouwen on solitude as the furnace of transformation, where the false self dies and the beloved self is heard.",
  },
  {
    videoId: "GHpJDuxECCU",
    title: "Ruth Haley Barton: Invitation to Silence",
    note: "Barton walks through the jar-of-river-water image and Elijah's journey from burnout into the sound of sheer silence.",
  },
  {
    videoId: "vXcVUVK7nDk",
    title: "Be Still: Psalm 46 Meditation",
    note: "A guided meditation on Psalm 46:10 — practicing stillness in the middle of the storm, not the absence of one.",
  },
  {
    videoId: "0NeGZkdX9Bo",
    title: "The Desert Fathers and the Way of Silence",
    note: "An introduction to Antony, Arsenius, and the desert movement that built a counterculture of quiet in the fourth century.",
  },
];

// ---------------------------------------------------------------------------
// Small shared UI helpers
// ---------------------------------------------------------------------------
function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div
        style={{
          color: ACCENT,
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {kicker}
      </div>
      <h2 style={{ color: TEXT, fontSize: "1.6rem", fontWeight: 800, margin: 0, lineHeight: 1.25 }}>{title}</h2>
      {sub && <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.6rem", maxWidth: 720 }}>{sub}</p>}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.2rem 0.65rem",
        borderRadius: 999,
        border: `1px solid ${BORDER}`,
        background: "rgba(99,102,241,0.08)",
        color: ACCENT,
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
      }}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function SilenceAndSolitudePage() {
  const [activeTab, setActiveTab] = useState<TabId>("theology");

  // Journal state ------------------------------------------------------------
  const [entries, setEntries] = useState<SSEntry[]>([]);
  const [duration, setDuration] = useState("");
  const [noise, setNoise] = useState("");
  const [whisper, setWhisper] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);

  // Hydrate once from localStorage after mount. localStorage is unavailable
  // during prerendering, so this cannot live in the useState initializer.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from an external store
          setEntries(parsed as SSEntry[]);
        }
      }
    } catch {
      // Corrupted storage — start fresh rather than crash the page.
    }
  }, []);

  function persist(next: SSEntry[]) {
    setEntries(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage may be unavailable (private mode, quota) — fail silently.
    }
  }

  function addEntry(e: React.FormEvent) {
    e.preventDefault();
    if (!duration.trim() && !noise.trim() && !whisper.trim()) return;
    const entry: SSEntry = {
      duration: duration.trim(),
      noise: noise.trim(),
      whisper: whisper.trim(),
    };
    persist([entry, ...entries]);
    setDuration("");
    setNoise("");
    setWhisper("");
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }

  function deleteEntry(index: number) {
    persist(entries.filter((_, i) => i !== index));
  }

  // Shared styles -------------------------------------------------------------
  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontSize: "0.85rem",
    fontWeight: 700,
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.78rem",
    marginTop: "0.3rem",
    lineHeight: 1.5,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <header
        style={{
          borderBottom: `1px solid ${BORDER}`,
          background: `radial-gradient(ellipse at 50% -20%, rgba(99,102,241,0.18), transparent 60%), ${BG}`,
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "4.5rem 1.5rem 3.5rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              borderRadius: 999,
              border: `1px solid ${BORDER}`,
              background: CARD,
              color: ACCENT,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            <VolumeX size={14} />
            Spiritual Disciplines
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              margin: "0 0 1.2rem",
              color: TEXT,
            }}
          >
            Be Still: The Disciplines of{" "}
            <span style={{ color: ACCENT }}>Silence and Solitude</span>
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 700, margin: "0 auto 1.5rem" }}>
            Jesus often withdrew to lonely places and prayed. In an age engineered for distraction, the oldest
            disciplines in the Christian toolkit — withdrawing from noise and crowds to be alone with God — may be
            the most radical things you ever practice. This guide walks through the theology, the practices, the great
            teachers, and the Scriptures of stillness, and gives you a journal for keeping watch over your own quiet.
          </p>
          <blockquote
            style={{
              maxWidth: 620,
              margin: "0 auto",
              padding: "1.1rem 1.4rem",
              borderLeft: `3px solid ${ACCENT}`,
              background: CARD,
              borderRadius: "0 12px 12px 0",
              textAlign: "left",
            }}
          >
            <p style={{ color: TEXT, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: "0.98rem" }}>
              &ldquo;Be still, and know that I am God.&rdquo;
            </p>
            <footer style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Psalm 46:10</footer>
          </blockquote>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Tab bar                                                             */}
      {/* ------------------------------------------------------------------ */}
      <nav
        aria-label="Page sections"
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 1rem",
            display: "flex",
            gap: "0.25rem",
            overflowX: "auto",
          }}
        >
          {TABS.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent",
                  color: active ? TEXT : MUTED,
                  fontWeight: active ? 700 : 500,
                  fontSize: "0.92rem",
                  padding: "0.95rem 1rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "3rem 1.5rem 4.5rem" }}>
        {/* ---------------------------------------------------------------- */}
        {/* THEOLOGY                                                          */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "theology" && (
          <section>
            <SectionHeading
              kicker="Theology"
              title="Why God Hides His Best Words in Quiet Places"
              sub="From the pre-dawn hills of Galilee to a cave on Mount Horeb to the deserts of fourth-century Egypt, Scripture and church history tell a consistent story: the God who can speak in thunder prefers to whisper — and only the still can hear him."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {THEOLOGY_SECTIONS.map((section) => (
                <article key={section.id} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(99,102,241,0.12)",
                        border: `1px solid ${BORDER}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ACCENT,
                        flexShrink: 0,
                      }}
                    >
                      {section.icon}
                    </div>
                    <h3 style={{ color: TEXT, fontSize: "1.15rem", fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
                      {section.title}
                    </h3>
                  </div>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: i === 0 ? TEXT : MUTED,
                        fontSize: "0.95rem",
                        lineHeight: 1.8,
                        margin: i === section.paragraphs.length - 1 ? 0 : "0 0 1rem",
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>

            <div
              style={{
                ...cardStyle,
                marginTop: "1.5rem",
                background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.03))",
                borderColor: "rgba(99,102,241,0.35)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem" }}>
                <Sparkles size={20} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 style={{ color: TEXT, fontSize: "1.05rem", fontWeight: 800, margin: "0 0 0.5rem" }}>
                    Where this fits in the larger landscape
                  </h3>
                  <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.75, margin: 0 }}>
                    Silence and solitude rarely travel alone. They feed naturally into{" "}
                    <Link href="/sabbath" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                      sabbath
                    </Link>
                    ,{" "}
                    <Link href="/christian-meditation" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                      Christian meditation
                    </Link>
                    ,{" "}
                    <Link href="/lectio-divina" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                      lectio divina
                    </Link>
                    , and{" "}
                    <Link href="/fasting" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                      fasting
                    </Link>
                    . If you are building a whole rule of life, start with the broader{" "}
                    <Link href="/spiritual-disciplines" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                      spiritual disciplines guide
                    </Link>{" "}
                    — but most teachers in this tradition agree on the sequence: stillness first. Everything else grows
                    out of a soul that has learned to be quiet before God.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* PRACTICES                                                         */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "practices" && (
          <section>
            <SectionHeading
              kicker="Practices"
              title="Six Ways Into the Quiet"
              sub="You do not drift into stillness; you build it. These six practices move from five-minute on-ramps to a full day of digital silence. Start small, start tomorrow, and let the practice grow with you. The goal is never the silence itself — it is the Person waiting inside it."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {PRACTICES.map((practice, idx) => (
                <article key={practice.id} style={{ ...cardStyle, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(99,102,241,0.12)",
                        border: `1px solid ${BORDER}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ACCENT,
                      }}
                    >
                      {practice.icon}
                    </div>
                    <span style={{ color: MUTED, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 style={{ color: TEXT, fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.6rem", lineHeight: 1.3 }}>
                    {practice.name}
                  </h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.9rem" }}>
                    <Pill>
                      <Clock size={11} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
                      {practice.time}
                    </Pill>
                    <Pill>{practice.level}</Pill>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1rem" }}>{practice.summary}</p>
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        color: TEXT,
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.6rem",
                      }}
                    >
                      How to practice
                    </div>
                    <ol style={{ margin: 0, padding: "0 0 0 1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {practice.steps.map((step, i) => (
                        <li key={i} style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.65 }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      padding: "0.8rem 0.95rem",
                      borderRadius: 10,
                      background: "rgba(99,102,241,0.07)",
                      border: `1px solid rgba(99,102,241,0.25)`,
                    }}
                  >
                    <span style={{ color: ACCENT, fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.06em" }}>
                      WATCH FOR:{" "}
                    </span>
                    <span style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{practice.warning}</span>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.05rem", fontWeight: 800, margin: "0 0 0.6rem" }}>
                A suggested progression
              </h3>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.75, margin: 0 }}>
                Weeks 1–2: morning stillness daily plus one silent commute. Weeks 3–4: add the night watch and a
                ten-minute breath prayer twice a week. Month two: attempt your first technology sabbath. Month three:
                schedule the half-day retreat. By the end of a quarter you will have tasted every register of the
                discipline — and, more importantly, you will know which inner noises are yours and which whisper keeps
                returning. Log each session in the <strong style={{ color: TEXT }}>Journal</strong> tab so you can see
                the pattern.
              </p>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* VOICES                                                            */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "voices" && (
          <section>
            <SectionHeading
              kicker="Voices"
              title="Teachers of the Quiet"
              sub="Six guides — monks, professors, pastors, and spiritual directors — who learned the way of silence the hard way and left maps for the rest of us. Read them in any order; together they span from the Trappist cloister to the Portland megachurch."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map((voice) => (
                <article key={voice.id} style={cardStyle}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <h3 style={{ color: TEXT, fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>{voice.name}</h3>
                    <span style={{ color: MUTED, fontSize: "0.82rem" }}>{voice.era}</span>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <Pill>
                      <BookOpen size={11} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
                      {voice.work}
                    </Pill>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.75, margin: "0 0 1.1rem" }}>{voice.bio}</p>
                  <blockquote
                    style={{
                      margin: "0 0 1.1rem",
                      padding: "1rem 1.2rem",
                      borderLeft: `3px solid ${ACCENT}`,
                      background: BG,
                      borderRadius: "0 10px 10px 0",
                    }}
                  >
                    <Quote size={16} style={{ color: ACCENT, marginBottom: "0.4rem" }} />
                    <p style={{ color: TEXT, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{voice.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div>
                    <span style={{ color: ACCENT, fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                      WHY IT MATTERS:{" "}
                    </span>
                    <span style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7 }}>{voice.contribution}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* SCRIPTURE                                                         */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "scripture" && (
          <section>
            <SectionHeading
              kicker="Scripture"
              title="The Bible's Vocabulary of Stillness"
              sub="Six passages that anchor the discipline — each with its setting, its surprise, and a way to take it into your own practice. Read them slowly. These are not verses to consume but rooms to sit in."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {PASSAGES.map((passage) => (
                <article key={passage.id} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem" }}>
                    <ScrollText size={18} style={{ color: ACCENT, flexShrink: 0 }} />
                    <h3 style={{ color: ACCENT, fontSize: "1.05rem", fontWeight: 800, margin: 0, letterSpacing: "0.02em" }}>
                      {passage.ref}
                    </h3>
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 1.1rem",
                      padding: "1rem 1.2rem",
                      borderLeft: `3px solid ${ACCENT}`,
                      background: BG,
                      borderRadius: "0 10px 10px 0",
                    }}
                  >
                    <p style={{ color: TEXT, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                      &ldquo;{passage.text}&rdquo;
                    </p>
                  </blockquote>
                  <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.75, margin: "0 0 1rem" }}>{passage.context}</p>
                  <div
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: 10,
                      background: "rgba(99,102,241,0.07)",
                      border: "1px solid rgba(99,102,241,0.25)",
                    }}
                  >
                    <span style={{ color: ACCENT, fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                      INTO PRACTICE:{" "}
                    </span>
                    <span style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {passage.practice}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.05rem", fontWeight: 800, margin: "0 0 0.6rem" }}>
                A memorization path
              </h3>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.75, margin: 0 }}>
                Commit these six passages to memory over six weeks — one per week, recited during your morning
                stillness. A memorized verse is a portable cell, in the desert fathers&rsquo; sense: a quiet room you
                can enter at a red light, in a waiting room, or at 3 a.m. For tools and method, see the{" "}
                <Link href="/scripture-memorization" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                  Scripture memorization guide
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* JOURNAL                                                           */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "journal" && (
          <section>
            <SectionHeading
              kicker="Journal"
              title="Keeping Watch Over the Quiet"
              sub="After each practice of silence or solitude, log three things: how long you stayed, what inner noise surfaced, and what — if anything — you sensed God whispering. Over weeks, the pattern of your noise and the consistency of the whisper become some of the most valuable spiritual data you will ever collect. Entries are stored privately in your browser."
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              {/* Entry form */}
              <form onSubmit={addEntry} style={{ ...cardStyle }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  <PenLine size={18} style={{ color: ACCENT }} />
                  <h3 style={{ color: TEXT, fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>New stillness entry</h3>
                </div>

                <div style={{ marginBottom: "1.1rem" }}>
                  <label htmlFor="ss-duration" style={labelStyle}>
                    How long was the silence?
                  </label>
                  <input
                    id="ss-duration"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 10 minutes before sunrise, a 3-hour half-day retreat..."
                    style={inputStyle}
                  />
                  <div style={hintStyle}>
                    Duration matters less than honesty — five real minutes beats thirty distracted ones.
                  </div>
                </div>

                <div style={{ marginBottom: "1.1rem" }}>
                  <label htmlFor="ss-noise" style={labelStyle}>
                    What inner noise surfaced?
                  </label>
                  <textarea
                    id="ss-noise"
                    value={noise}
                    onChange={(e) => setNoise(e.target.value)}
                    placeholder="The replayed argument, the to-do list, the anxiety about Thursday, the urge to check the phone..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                  <div style={hintStyle}>
                    The desert fathers treated surfacing thoughts as diagnostic, not as failure. Name them without
                    shame — each one is something to hand to God.
                  </div>
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="ss-whisper" style={labelStyle}>
                    What did you sense God saying?
                  </label>
                  <textarea
                    id="ss-whisper"
                    value={whisper}
                    onChange={(e) => setWhisper(e.target.value)}
                    placeholder="A word, a verse that surfaced, a settled impression, a question — or simply 'nothing yet, but I stayed.'"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                  <div style={hintStyle}>
                    Hold impressions loosely and test them against Scripture. And remember: &ldquo;nothing yet&rdquo;
                    is a legitimate entry — the waiting itself is the discipline (Psalm 62:1).
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: ACCENT,
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: 10,
                      padding: "0.75rem 1.4rem",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <Plus size={16} />
                    Save entry
                  </button>
                  {savedFlash && (
                    <span style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>
                      Entry saved to this browser.
                    </span>
                  )}
                </div>
              </form>

              {/* Entry list */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <h3 style={{ color: TEXT, fontSize: "1.05rem", fontWeight: 800, margin: 0 }}>
                    Your entries{" "}
                    <span style={{ color: MUTED, fontWeight: 500, fontSize: "0.9rem" }}>
                      ({entries.length})
                    </span>
                  </h3>
                </div>

                {entries.length === 0 ? (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.5rem 1.5rem" }}>
                    <Feather size={28} style={{ color: MUTED, marginBottom: "0.75rem" }} />
                    <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.98rem" }}>
                      No entries yet — and that is fine.
                    </p>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: "0 auto", maxWidth: 480 }}>
                      Try the 5-minute morning stillness from the Practices tab tomorrow, then come back and log what
                      you noticed. The first entry is usually mostly noise. That is not failure; that is the
                      sediment starting to settle.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {entries.map((entry, index) => (
                      <article key={index} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: "1rem",
                            marginBottom: "0.9rem",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                            <Pill>
                              <Clock size={11} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
                              {entry.duration || "Unrecorded duration"}
                            </Pill>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(index)}
                            aria-label="Delete entry"
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              borderRadius: 8,
                              color: MUTED,
                              padding: "0.4rem 0.55rem",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div style={{ marginBottom: "0.8rem" }}>
                          <div
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              marginBottom: "0.3rem",
                            }}
                          >
                            Inner noise that surfaced
                          </div>
                          <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                            {entry.noise || "—"}
                          </p>
                        </div>
                        <div
                          style={{
                            padding: "0.85rem 1rem",
                            borderRadius: 10,
                            background: "rgba(99,102,241,0.07)",
                            border: "1px solid rgba(99,102,241,0.25)",
                          }}
                        >
                          <div
                            style={{
                              color: ACCENT,
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              marginBottom: "0.3rem",
                            }}
                          >
                            The whisper
                          </div>
                          <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                            {entry.whisper || "Nothing yet — but I stayed."}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* VIDEOS                                                            */}
        {/* ---------------------------------------------------------------- */}
        {activeTab === "videos" && (
          <section>
            <SectionHeading
              kicker="Videos"
              title="Watch and Learn the Way of Quiet"
              sub="Talks and guided meditations from the key voices in this guide. A suggestion that sounds paradoxical but is not: watch one, then practice ten minutes of silence before watching another. Content about stillness is no substitute for stillness."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {VIDEOS.map((video) => (
                <article key={video.videoId} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "1.1rem 1.25rem 1.25rem" }}>
                    <h3 style={{ color: TEXT, fontSize: "1rem", fontWeight: 800, margin: "0 0 0.45rem", lineHeight: 1.35 }}>
                      {video.title}
                    </h3>
                    <p style={{ color: MUTED, fontSize: "0.86rem", lineHeight: 1.65, margin: 0 }}>{video.note}</p>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.05rem", fontWeight: 800, margin: "0 0 0.6rem" }}>
                One last word before you press play
              </h3>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.75, margin: 0 }}>
                There is a quiet irony in ending a guide about silence with a row of videos, and it is worth naming.
                These resources are scaffolding, not the building. The desert fathers would have found it strange that
                we research stillness more readily than we practice it. So set a modest rule for this tab: for every
                video you watch, give God the same number of minutes in actual silence. Then log it in the Journal.
                The teachers above would all say the same thing — the still small voice is not in the video. It is in
                the room with you, waiting for the noise to stop.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* Closing call-to-action                                              */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <Moon size={26} style={{ color: ACCENT, marginBottom: "1rem" }} />
          <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.8rem" }}>
            The quiet is not empty. It is occupied.
          </h2>
          <p style={{ color: MUTED, fontSize: "0.98rem", lineHeight: 1.75, maxWidth: 640, margin: "0 auto 1.75rem" }}>
            Everything in this guide reduces to one invitation: stop, and listen. Five minutes tomorrow morning before
            the phone. One silent drive this week. One day, eventually, wholly unplugged. The God who passed by
            Elijah&rsquo;s cave in a sound of sheer silence has not changed his preferred volume. &ldquo;Be
            still,&rdquo; he says — not because he is far away, but because he is close enough to whisper.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => {
                setActiveTab("practices");
                if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                background: ACCENT,
                color: "#FFFFFF",
                border: "none",
                borderRadius: 10,
                padding: "0.8rem 1.6rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Start with a practice
            </button>
            <Link
              href="/spiritual-disciplines"
              style={{
                display: "inline-block",
                background: "transparent",
                color: TEXT,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: "0.8rem 1.6rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Explore all disciplines
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
