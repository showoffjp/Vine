"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const PASSAGES_FOR_MEDITATION = [
  { id: "ps23", title: "The Lord is My Shepherd", reference: "Psalm 23", text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", theme: "Peace & Trust", duration: 8 },
  { id: "john14", title: "Do Not Let Your Hearts Be Troubled", reference: "John 14:1-6", text: "Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.", theme: "Comfort", duration: 7 },
  { id: "isa4031", title: "Those Who Wait on the Lord", reference: "Isaiah 40:28-31", text: "Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", theme: "Strength & Renewal", duration: 9 },
  { id: "phil4", title: "The Peace That Transcends Understanding", reference: "Philippians 4:4-9", text: "Rejoice in the Lord always. I will say it again: Rejoice! Let your gentleness be evident to all. The Lord is near. Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", theme: "Anxiety & Peace", duration: 8 },
  { id: "rom8", title: "Nothing Can Separate Us", reference: "Romans 8:35-39", text: "Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword? No, in all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", theme: "God's Love", duration: 8 },
  { id: "matt6", title: "The Sermon on the Mount - Anxiety", reference: "Matthew 6:25-34", text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? Can any one of you by worrying add a single hour to your life?", theme: "Worry & Trust", duration: 9 },
];

const TECHNIQUES = [
  { id: "lectio", name: "Lectio Divina", icon: "📖", steps: ["Read the passage slowly, twice. Let a word or phrase stand out.", "Reflect: sit with that word or phrase. Repeat it gently. What is God saying?", "Respond: pray naturally from what arose. Converse with God.", "Rest: sit in silence. No agenda. Let God speak."], duration: "15-20 min" },
  { id: "verse", name: "Verse Chewing", icon: "🔄", steps: ["Select a single verse. Read it word by word.", "Emphasize a different word each time: 'GOD so loved...' 'God SO loved...' 'God so LOVED...'", "Ask: What does this word reveal about God, about me, about the situation?", "Pray the verse back to God as a personal declaration."], duration: "5-10 min" },
  { id: "breathe", name: "Breathing Meditation", icon: "🌬️", steps: ["Choose a short phrase from Scripture (e.g., 'You are with me').", "Breathe in slowly on the first half: 'You are...'", "Breathe out on the second half: '...with me.'", "Repeat for 5-10 minutes. Let the truth settle into your body."], duration: "5-10 min" },
  { id: "imagination", name: "Gospel Imagination", icon: "🎨", steps: ["Select a Gospel narrative (e.g., the calming of the storm, the feeding of 5,000).", "Place yourself in the scene. What do you see, hear, smell? Who are you in the story?", "Watch Jesus. What does he do? What does he say to you?", "Write or pray what arose. What did this reveal about Christ? About yourself?"], duration: "15-20 min" },
  { id: "psalm", name: "Psalm Praying", icon: "🎵", steps: ["Choose a psalm (Ps 23, 27, 46, 91, 139 are great starting points).", "Read it once for comprehension.", "Read it again, slowly — pause at each image. Let it evoke feeling.", "Pray the psalm back to God in your own words, as your prayer."], duration: "10-15 min" },
];

const VOICES_MEDITATION = [
  { id: "merton-m", name: "Thomas Merton", era: "1915-1968", context: "New Seeds of Contemplation (1961); The Seven Storey Mountain (1948); Trappist monk at Gethsemani", bio: "Merton is the most widely read Catholic contemplative of the 20th century — and his influence extends deep into evangelical Christianity as well. New Seeds of Contemplation is the most careful account of what Christian meditation is and is not: it is not a technique for achieving spiritual states but an opening of the self to God who is already present. Merton distinguished between the 'false self' — the identity constructed from social performance and achievement — and the 'true self' hidden in God. Meditation, for Merton, is the slow process of dying to the false self and discovering the true self in God.", quote: "The things that we love tell us what we are. And if we love God above all things, then what we are, in our deepest being, is love.", contribution: "Recovered contemplative meditation for Western Christians — both Catholic and Protestant — who had reduced prayer to petition and Bible study to information gathering. New Seeds of Contemplation remains the best introduction to meditative prayer in the Catholic tradition." },
  { id: "guigo", name: "Guigo II", era: "d. c. 1188", context: "The Ladder of Monks (c. 1150); Carthusian Prior", bio: "Guigo II was the Carthusian prior who formalized the four movements of Lectio Divina in his Scala Claustralium (The Ladder of Monks). His four rungs — lectio (reading), meditatio (meditation), oratio (prayer), contemplatio (contemplation) — gave the monastic tradition a vocabulary and structure for what monks had been doing intuitively for centuries. The ladder image is significant: Guigo did not see these as four separate activities but as four interconnected movements in a single ascent, each growing naturally from the one below. His short letter to a friend contains more practical wisdom about meditation than most full-length books on prayer.", quote: "Reading seeks the sweetness of a blessed life, meditation perceives it, prayer asks for it, contemplation tastes it.", contribution: "Created the foundational framework for Christian meditative prayer that has shaped monastic and contemplative practice for 900 years. Lectio Divina as practiced today is essentially Guigo's four-rung ladder, recovered and adapted for contemporary use." },
  { id: "brother-lawrence", name: "Brother Lawrence", era: "c. 1614-1691", context: "The Practice of the Presence of God (posthumously, 1692); lay brother in a Carmelite monastery in Paris", bio: "Brother Lawrence was a former soldier who became a lay brother in a Paris monastery — assigned to work in the kitchen, which he initially hated. His entire spiritual contribution is captured in the thin volume compiled after his death: The Practice of the Presence of God. His insight was simple and revolutionary: one can maintain continuous awareness of God's presence throughout the entire day, not just in formal times of prayer. Washing pots in the monastery kitchen was as sacred as kneeling at the altar — if the heart was oriented toward God. He described his approach not as technique but as habituation: constantly returning the mind to God until it became natural.", quote: "The time of business does not with me differ from the time of prayer. In the noise and clutter of my kitchen, I possess God in as great tranquility as if I were upon my knees.", contribution: "Made contemplative presence accessible to laypeople who would never enter a monastery. The Practice of the Presence of God is probably the most widely read Christian book on prayer after the New Testament itself — readable in an afternoon, comprehensible in a lifetime." },
  { id: "kempis-m", name: "Thomas a Kempis", era: "c. 1380-1471", context: "The Imitation of Christ (c. 1418-1427); Augustinian canon; most copied book in Christian history after the Bible", bio: "The Imitation of Christ — traditionally attributed to Thomas a Kempis — is the most widely read devotional book in Christian history. Its opening line sets its entire orientation: 'What doth it profit a man to enter into deep discussion concerning the Holy Trinity, if he lack humility?' Thomas consistently subordinates intellectual knowledge to inward experience of God. His method of meditation is not technical but moral: the person who meditates on Christ's character and suffering will be gradually conformed to it. Book Two's chapter on 'interior communion' is the most concentrated account of personal meditation on Christ's passion in devotional literature.", quote: "Many words satisfy not the soul, but a good life refresheth the mind, and a pure conscience giveth great confidence towards God.", contribution: "Demonstrated that profound meditation on Christ is accessible to any literate Christian regardless of theological training. The Imitation of Christ has formed the devotional life of every major figure in Western Christian history, from Luther to Ignatius to Wesley." },
  { id: "peterson-m", name: "Eugene Peterson", era: "1932-2018", context: "Eat This Book (2006); The Message translation; pastor for 29 years", bio: "Peterson's Eat This Book makes the case that Scripture was designed for a particular kind of slow, embodied, communal reading — what he calls spiritual reading (as opposed to informational reading). He draws on the metaphor of eating — 'eat this scroll' (Ezekiel 3:1) — to insist that Scripture is meant to be consumed, not merely studied: tasted, chewed, digested, incorporated into the body. His translation of the Bible as The Message was an attempt to make Scripture read the way it would have originally sounded — before it became sacred text — so that it could be received with fresh ears and ruminated upon as if for the first time.", quote: "We don't read the Bible to get information about God; we read it to hear God, to meet God. The Bible is the Spirit's text for spiritual formation.", contribution: "Recovered the category of spiritual reading for Protestant Christians who had reduced Bible engagement to study. His insistence that Scripture is food rather than information reshaped how a generation of evangelicals think about their relationship to the text." },
];

const MEDITATION_SCRIPTURE = [
  {
    id: "ps1v2",
    ref: "Psalm 1:2",
    text: "his delight is in the law of the LORD, and on his law he meditates day and night",
    theme: "Scripture as Delight",
    reflection: "The psalmist describes meditation not as duty but as delight — a posture of the heart that finds joy in returning to God's word again and again. This is the difference between a student who reads to pass an exam and a lover who reads the same letter a hundred times. To meditate day and night is not an ascetic achievement but the natural overflow of a heart captivated by what the law reveals: the character, the promises, and the beauty of God himself. The blessed man of Psalm 1 is not grinding through scripture reluctantly — he is drawn back to it like a river that cannot stop flowing to the sea.",
  },
  {
    id: "josh1v8",
    ref: "Joshua 1:8",
    text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it",
    theme: "Obedience Through Meditation",
    reflection: "God's command to Joshua connects meditation directly to obedience — not as cause and effect in a mechanical sense, but as the organic path by which God's word moves from the page to the life. The mouth speaks what the heart is full of, and the heart is filled by sustained, attentive dwelling on what God has said. Joshua was being sent into a military and political situation of enormous complexity. The antidote was not strategy sessions but meditation. Formation precedes action: the leader who would lead rightly must first be led inwardly by the word he has slowly absorbed.",
  },
  {
    id: "ps119v97",
    ref: "Psalm 119:97",
    text: "Oh, how I love your law! I meditate on it all day long",
    theme: "Love for God's Word",
    reflection: "The exclamation 'Oh, how I love!' is not formal or obligatory — it is the spontaneous overflow of a heart that has tasted something genuinely sweet. Psalm 119, the longest chapter in the Bible, is entirely devoted to this love for God's word. The psalmist meditates all day long not because he has set aside formal meditation hours but because his love for the law spills into every moment. All-day meditation is not a schedule — it is a state of being: a mind that keeps returning to what it loves. What we love occupies us without being summoned. The goal of spiritual formation is precisely this: that God's word becomes the thing we cannot stop thinking about.",
  },
  {
    id: "phil4v8",
    ref: "Philippians 4:8",
    text: "whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — think about such things",
    theme: "What to Meditate On",
    reflection: "Paul's famous catalog of meditation objects is often read as a general positive-thinking prescription, but its context is crucial: it follows his command to bring every anxiety to God in prayer and his promise of the peace that transcends understanding. The mind that has surrendered its worries to God is now to occupy itself with what is true, noble, right, pure, lovely, admirable. Christian meditation is not the emptying of the mind — it is the deliberate, sustained filling of the mind with what is real, good, and beautiful. The Christian meditator is not seeking an altered state of consciousness but a renewed mind (Romans 12:2): a mind increasingly shaped by the character of God.",
  },
  {
    id: "ps46v10",
    ref: "Psalm 46:10",
    text: "Be still, and know that I am God",
    theme: "Contemplative Rest",
    reflection: "The Hebrew word for 'be still' (raphah) carries the connotation of releasing, letting go, ceasing striving. In the context of Psalm 46 — a psalm about God's protection in the midst of nations raging and mountains falling into the sea — the command to stillness is not a call to emotional numbness but to trust. To be still is to stop fighting to control what only God can control. The contemplative tradition in Christianity has always understood this verse as an invitation to a particular quality of presence before God: not active petitioning or even active listening, but the resting of the whole self in the reality that God is God and we are not.",
  },
  {
    id: "col3v2",
    ref: "Colossians 3:2",
    text: "Set your minds on things above, not on earthly things",
    theme: "Heavenly Mindedness",
    reflection: "Paul's command to set the mind on things above is not an escape from earthly responsibility but the prerequisite for fulfilling it rightly. The person whose mind is shaped by heavenly reality — by the fact that they have died with Christ and their life is now hidden with God (3:3) — is the one best equipped to live on earth with genuine love, justice, and patience. Christian meditation on heavenly things is not world-denial; it is world-transformation through the renewal of the mind. The command is in the present tense: keep setting your mind, continuously, as a sustained habit of attention. This is the structural description of what Christian meditation does.",
  },
];

const VOICES_MED = [
  {
    id: "kempis-med",
    name: "Thomas a Kempis",
    era: "1380-1471",
    context: "The Imitation of Christ (c. 1418-1427); Augustinian canon; House of Windesheim, Netherlands",
    bio: "The Imitation of Christ is the most widely copied and distributed Christian devotional book in history after the New Testament. Thomas a Kempis distilled the devotio moderna movement — a 14th-century reform movement emphasizing personal piety over academic theology — into a series of meditations on the interior life. His method is not technique but disposition: the person who truly meditates on Christ's humility and suffering will gradually be conformed to it, not through mystical ascent but through the slow discipline of attentiveness. Thomas consistently distinguishes Christian contemplation from speculation: the question is not what you know about the Trinity but how deeply you have been changed by encounter with the living Christ.",
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?",
    contribution: "Demonstrated that profound Christian meditation is not the exclusive property of monastics or scholars but belongs to every literate believer willing to sit with the text and be changed by it. The Imitation of Christ has shaped the devotional practice of Luther, Loyola, Wesley, and millions of ordinary Christians across six centuries.",
  },
  {
    id: "brlawrence-med",
    name: "Brother Lawrence",
    era: "1614-1691",
    context: "The Practice of the Presence of God (1692, posthumous); lay brother, Discalced Carmelite monastery, Paris",
    bio: "Brother Lawrence's contribution to Christian meditation is a radical democratization: you do not need a monastery, a lectionary, or formal hours of prayer to practice the presence of God. A kitchen worker washing pots can be as continuously aware of God as a monk in choir. His method was not a technique to be learned but a habit to be formed: constantly returning the wandering mind to God, first through deliberate effort and eventually through what he called 'holy freedom.' He drew a deliberate distinction between his approach and Eastern emptying: he was not emptying the mind of content but filling it with one continuous content — the reality of God's presence. The goal was not altered consciousness but natural, unbroken conversation with the living God.",
    quote: "The time of business does not with me differ from the time of prayer. In the noise and clutter of my kitchen, I possess God in as great tranquility as if I were upon my knees.",
    contribution: "Made the contemplative life accessible to every Christian in every circumstance. His insistence that ordinary work performed in continuous awareness of God is as sacred as formal prayer has shaped charismatic, evangelical, and Catholic spirituality alike.",
  },
  {
    id: "tozer-med",
    name: "A.W. Tozer",
    era: "1897-1963",
    context: "The Pursuit of God (1948); Knowledge of the Holy (1961); Christian and Missionary Alliance pastor, Chicago",
    bio: "Tozer was the most influential prophetic voice calling 20th-century American evangelicalism back to contemplation. He was largely self-educated — he never attended seminary — but his writings demonstrate a deep familiarity with the Christian mystical tradition, from Bernard of Clairvaux to Meister Eckhart to William Law. His diagnosis of evangelical Christianity was sharp: it had become noisy, busy, and entertainment-oriented — a culture that could not sit still before God. The Pursuit of God is his prescription: a sustained call to the kind of unhurried, attentive, God-ward meditation that had characterized the saints of every era. He explicitly distinguished biblical meditation from Eastern practices: the Christian is not emptying the mind but directing it toward the God who has revealed himself in Scripture and in Christ.",
    quote: "To have found God and still to pursue Him is the soul's paradox of love, scorned indeed by the too-easily-satisfied religionist, but justified in happy experience by the children of the burning heart.",
    contribution: "Recovered the contemplative tradition for 20th-century evangelical Protestantism, diagnosing the shallowness of a church that had substituted noise and activity for genuine encounter with God. The Pursuit of God remains the most-read evangelical text on the meditative life.",
  },
  {
    id: "willard-med",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "The Spirit of the Disciplines (1988); Renovation of the Heart (2002); Professor of Philosophy, USC",
    bio: "Willard's contribution to the theology of Christian meditation is primarily a philosophical and theological clarification: biblical meditation is spiritual formation, not Eastern emptying. Where Eastern meditation practices aim at the cessation of thought and the dissolution of the self, biblical meditation aims at the transformation of thought and the formation of the self in conformity to Christ. Willard argued that the disciplines of the spiritual life — including meditation, fasting, solitude, and silence — are not ways to earn God's favor but ways to train the whole person (mind, will, body, emotions) to respond naturally and spontaneously to God. Meditation is formation: the slow, patient re-ordering of the inner life around what is real.",
    quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action. Earning is attitude.",
    contribution: "Provided the most rigorous philosophical and theological defense of Christian spiritual disciplines as genuine formation practices, distinguishing them sharply from Eastern emptying and from moralistic self-improvement. The Spirit of the Disciplines changed how a generation of pastors and theologians understand sanctification.",
  },
  {
    id: "barton-med",
    name: "Ruth Haley Barton",
    era: "b. 1956",
    context: "Sacred Rhythms (2006); Strengthening the Soul of Your Leadership (2008); founder of the Transforming Center",
    bio: "Barton is the most influential contemporary guide to contemplative practice for ordinary Christians and Christian leaders. Her work is distinguished by its deeply practical, accessible quality: she is writing not for academics or monastics but for pastors, leaders, and laypeople who are spiritually depleted by the demands of active ministry and life. Sacred Rhythms walks through seven spiritual practices — including solitude, Scripture, prayer, sabbath, and discernment — as a sustainable rhythm for the whole Christian life. Her treatment of meditation consistently distinguishes Christian contemplation from Eastern emptying: the goal is not the absence of thought but the presence of God, engaged through Scripture, silence, and the willing surrender of control.",
    quote: "Solitude is the place where we come to know ourselves as we are known by God. It is not about being alone; it is about being with God in a way that allows the truth to emerge.",
    contribution: "Made contemplative spiritual formation accessible to ordinary Christians and leaders who had no background in the monastic tradition. Sacred Rhythms has become a standard text in spiritual direction programs and seminary formation courses across evangelical and mainline denominations.",
  },
];

const MEDITATION_VIDEOS = [
  {
    id: "mv1",
    title: "Forgotten God Part 1",
    preacher: "Francis Chan",
    videoId: "sWMjg7CxIKk",
    description: "Chan's opening session on the neglected Person of the Holy Spirit — the very one who empowers and guides Christian meditation and contemplation.",
  },
  {
    id: "mv2",
    title: "How Great Is Our God",
    preacher: "Louie Giglio",
    videoId: "X1rPalyUshw",
    description: "Giglio's iconic message on the scale of the universe and the greatness of God — the vision that makes meditation on God's character a lifelong journey, never exhausted.",
  },
  {
    id: "mv3",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    videoId: "v6xk8e7gdMA",
    description: "Sproul's landmark message on the holiness of God — the attribute that, once truly glimpsed, reshapes every other meditation on God's character.",
  },
  {
    id: "mv4",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    videoId: "lsTzXI7cJGA",
    description: "Keller's masterful exposition of Luke 15 — a parable that rewards sustained, meditative reading because its depths cannot be exhausted in a single encounter.",
  },
  {
    id: "mv5",
    title: "Don't Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "Piper's call to a life consumed by the glory of God — the theology of Christian hedonism that undergirds the practice of meditating on God's beauty and greatness.",
  },
  {
    id: "mv6",
    title: "Forgotten God Part 3",
    preacher: "Francis Chan",
    videoId: "SCUEicqda1g",
    description: "Chan's third session exploring what a Spirit-filled, Spirit-attentive life looks like in practice — directly relevant to the practice of listening meditation and contemplative prayer.",
  },
];

type Tab = "practice" | "scripture" | "voices" | "videos";

function TimerDisplay({ seconds }: { seconds: number }) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return <span>{m}:{s}</span>;
}

export default function MeditationPage() {
  const [activeTab, setActiveTab] = useState<Tab>("practice");
  const [tab, setTab] = useState<"practice" | "passages" | "techniques" | "voices">("practice");
  const [selectedVoiceMed, setSelectedVoiceMed] = useState("merton-m");
  const [selectedVoiceNew, setSelectedVoiceNew] = useState("kempis-med");
  const voiceItem = VOICES_MEDITATION.find(v => v.id === selectedVoiceMed)!;
  const voiceNewItem = VOICES_MED.find(v => v.id === selectedVoiceNew)!;
  const [selectedPassage, setSelectedPassage] = useState(PASSAGES_FOR_MEDITATION[0]);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(selectedPassage.duration * 60);
  const [timerDone, setTimerDone] = useState(false);
  const [practiceLog, setPracticeLog] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_meditation_log"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [savedPassages, setSavedPassages] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_meditation_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [reflection, setReflection] = useState("");
  const [savedReflection, setSavedReflection] = useState(false);

  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) { setTimerActive(false); setTimerDone(true); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timerActive, timeLeft]);

  const startSession = (passage: typeof PASSAGES_FOR_MEDITATION[0]) => {
    setSelectedPassage(passage);
    setTimeLeft(passage.duration * 60);
    setTimerActive(false);
    setTimerDone(false);
    setActiveTab("practice");
    setTab("practice");
  };

  useEffect(() => {
    try { localStorage.setItem("vine_meditation_log", JSON.stringify(practiceLog)); } catch {}
  }, [practiceLog]);

  const completeSession = () => {
    const entry = `${new Date().toLocaleDateString()} — ${selectedPassage.reference}`;
    setPracticeLog(prev => [entry, ...prev].slice(0, 50));
    if (reflection.trim()) setSavedReflection(true);
  };

  const toggleSave = (id: string) => {
    setSavedPassages(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_meditation_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const progress = timerDone ? 100 : 100 - (timeLeft / (selectedPassage.duration * 60)) * 100;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🧘</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Biblical Meditation</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>Not emptying the mind &mdash; filling it with God&rsquo;s Word</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(58,125,86,0.1)", color: GREEN, border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {practiceLog.length} Sessions Completed
            </span>
          </div>
        </div>

        {/* Top-level tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {(["practice", "scripture", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "practice" ? "Practice" : t === "scripture" ? "Scripture" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* PRACTICE TAB */}
        {activeTab === "practice" && (
          <div>
            {/* Inner tab bar */}
            <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
              {([["practice", "Meditate Now"], ["passages", "Passages"], ["techniques", "Techniques"], ["voices", "Voices"]] as const).map(([t, label]) => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? GREEN : "#6A6A88", borderBottom: `2px solid ${tab === t ? GREEN : "transparent"}`, marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>

            {tab === "practice" && (
              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <div style={{ background: CARD, borderRadius: 20, padding: 28, border: `1px solid ${BORDER}`, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedPassage.title}</h2>
                      <p style={{ fontSize: 14, color: MUTED }}>{selectedPassage.reference} &middot; {selectedPassage.duration} min &middot; {selectedPassage.theme}</p>
                    </div>
                  </div>
                  <div style={{ background: "#0D0D1A", borderRadius: 14, padding: "24px", marginBottom: 20, textAlign: "center", border: `1px solid ${BORDER}` }}>
                    <div style={{ height: 6, background: BORDER, borderRadius: 3, overflow: "hidden", marginBottom: 16 }}>
                      <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${PURPLE}, ${GREEN})`, borderRadius: 3, transition: "width 1s linear" }} />
                    </div>
                    <div style={{ fontSize: 48, fontWeight: 900, color: timerDone ? GREEN : TEXT, marginBottom: 12, fontVariantNumeric: "tabular-nums" }}>
                      {timerDone ? "Done" : <TimerDisplay seconds={timeLeft} />}
                    </div>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                      {!timerDone && (
                        <button onClick={() => setTimerActive(!timerActive)}
                          style={{ padding: "10px 28px", borderRadius: 12, border: timerActive ? "1px solid rgba(239,68,68,0.3)" : "none", background: timerActive ? "rgba(239,68,68,0.15)" : `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: timerActive ? "#EF4444" : BG, cursor: "pointer", fontWeight: 800, fontSize: 14 }}>
                          {timerActive ? "Pause" : timeLeft < selectedPassage.duration * 60 ? "Resume" : "Begin"}
                        </button>
                      )}
                      <button onClick={() => { setTimeLeft(selectedPassage.duration * 60); setTimerActive(false); setTimerDone(false); }}
                        style={{ padding: "10px 18px", borderRadius: 12, border: "1px solid #2A2A40", background: BORDER, color: MUTED, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                        Reset
                      </button>
                    </div>
                  </div>
                  <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 20, marginBottom: 20, borderLeft: `3px solid ${PURPLE}` }}>
                    <p style={{ fontSize: 16, color: "#C0C0D8", lineHeight: 2, fontStyle: "italic" }}>{selectedPassage.text}</p>
                    <p style={{ fontSize: 13, color: PURPLE, marginTop: 10, fontWeight: 700 }}>&mdash; {selectedPassage.reference}</p>
                  </div>
                  {(timerDone || progress > 0) && (
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>What arose during meditation?</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} rows={4} placeholder="A word that stood out, a feeling, a question, a prayer..."
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: `1px solid ${BORDER}`, color: TEXT, fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
                    </div>
                  )}
                  {timerDone && !savedReflection && (
                    <button onClick={completeSession}
                      style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #3a7d56, #00CC6A)", color: BG, cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                      Complete Session
                    </button>
                  )}
                  {savedReflection && (
                    <div style={{ textAlign: "center", color: GREEN, fontWeight: 700, fontSize: 15 }}>Session logged! Well done.</div>
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: MUTED }}>Choose a different passage:</h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {PASSAGES_FOR_MEDITATION.map(p => (
                      <button key={p.id} onClick={() => startSession(p)}
                        style={{ padding: "6px 14px", borderRadius: 10, border: `1px solid ${selectedPassage.id === p.id ? PURPLE : BORDER}`, background: selectedPassage.id === p.id ? `${PURPLE}26` : "transparent", color: selectedPassage.id === p.id ? "#A080FF" : MUTED, cursor: "pointer", fontSize: 13, fontWeight: selectedPassage.id === p.id ? 700 : 400 }}>
                        <VerseRef reference={p.reference} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "passages" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                {PASSAGES_FOR_MEDITATION.map(p => (
                  <div key={p.id} style={{ background: CARD, border: `1px solid ${savedPassages.has(p.id) ? `${PURPLE}4D` : BORDER}`, borderRadius: 16, padding: 20, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                        <p style={{ fontSize: 13, color: MUTED }}><VerseRef reference={p.reference} /></p>
                      </div>
                      <button onClick={() => toggleSave(p.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedPassages.has(p.id) ? "#A080FF" : "#4A4A68" }}>
                        {savedPassages.has(p.id) ? "♥" : "♡"}
                      </button>
                    </div>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${PURPLE}26`, color: "#A080FF", border: `1px solid ${PURPLE}40`, marginBottom: 12, alignSelf: "flex-start" }}>{p.theme}</span>
                    <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.text}</p>
                    <button onClick={() => startSession(p)}
                      style={{ padding: "10px", borderRadius: 10, border: `1px solid ${PURPLE}4D`, background: `${PURPLE}14`, color: "#A080FF", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                      Meditate on This &rarr; ({p.duration} min)
                    </button>
                  </div>
                ))}
              </div>
            )}

            {tab === "techniques" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
                {TECHNIQUES.map(t => (
                  <div key={t.id} style={{ background: CARD, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontSize: 26 }}>{t.icon}</span>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 700 }}>{t.name}</h3>
                        <p style={{ fontSize: 13, color: MUTED }}>{t.duration}</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {t.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${PURPLE}33`, border: `1px solid ${PURPLE}4D`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#A080FF", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                          <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "voices" && (
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
                  {VOICES_MEDITATION.map(v => (
                    <button key={v.id} onClick={() => setSelectedVoiceMed(v.id)}
                      style={{ background: selectedVoiceMed === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoiceMed === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                    </button>
                  ))}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                    <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                    <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                    <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                    <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                    <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                      <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                    </div>
                    <div style={{ background: `${PURPLE}1A`, borderRadius: 10, padding: 16 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Meditation Practice</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SCRIPTURE TAB */}
        {activeTab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {MEDITATION_SCRIPTURE.map(entry => (
              <div key={entry.id} style={{ background: CARD, borderRadius: 18, padding: 28, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{entry.ref}</p>
                <p style={{ fontSize: 18, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 14 }}>&ldquo;{entry.text}&rdquo;</p>
                <span style={{ fontSize: 12, padding: "3px 12px", borderRadius: 20, background: `${PURPLE}26`, color: "#A080FF", border: `1px solid ${PURPLE}40`, fontWeight: 700, display: "inline-block", marginBottom: 14 }}>{entry.theme}</span>
                <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8 }}>{entry.reflection}</p>
              </div>
            ))}
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_MED.map(v => (
                <button key={v.id} onClick={() => setSelectedVoiceNew(v.id)}
                  style={{ background: selectedVoiceNew === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoiceNew === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceNewItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceNewItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceNewItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceNewItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceNewItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}1A`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Meditation Practice</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceNewItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
            {MEDITATION_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, borderRadius: 18, padding: 20, border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${PURPLE}30`, color: "#A080FF", border: `1px solid ${PURPLE}50`, fontWeight: 700 }}>{v.preacher}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, color: TEXT }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{v.description}</p>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
