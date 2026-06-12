"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const INDIGO = "#6366F1";

const STORAGE_KEY = "vine_sabbatical_entries";

interface SBTEntry {
  id: string;
  date: string;
  whatYouLeftBehind: string;
  whatGodGave: string;
  whatYouCarryBack: string;
}

const theologySections = [
  {
    title: "Selah: The Musical Pause in the Psalms",
    body: "The word selah appears seventy-four times in the Psalms and three times in Habakkuk, always at moments of intensity — after a declaration of trust, a cry of anguish, a vision of judgment, a promise of peace. Scholars debate its precise meaning: a musical rest, an instruction to lift the voice, a signal to pause and meditate. But its function is clear whatever its etymology: selah is a commanded stop in the middle of the song. The psalmist has just said something that cannot be rushed past. The music pauses. The hearer sits with what was said. This is the theology of sabbatical compressed into a single word. God builds stopping into the structure of praise itself. The selah is not a failure of the song; it is part of the song. Ministry workers who never stop are singing without the rests — and what comes out is noise, not music. The sabbatical is the long selah: not the end of the work but a structural pause in the middle of it that honors the weight of what has been given and prepares the soul to receive what comes next.",
  },
  {
    title: "Elijah&rsquo;s Sabbatical &mdash; 1 Kings 19",
    body: "First Kings 19 is the most honest account of ministry burnout in Scripture. Elijah has just won the most spectacular prophetic victory in Israel's history — fire from heaven on Carmel, the prophets of Baal destroyed, rain after three years of drought — and the very next day he is running for his life from Jezebel, sitting under a broom tree, and asking God to let him die: 'It is enough; now, O Lord, take away my life, for I am no better than my fathers.' The achievement cycle feeding into collapse is depressingly familiar to anyone who has done sustained ministry. God's response is not rebuke, not a second sermon, not a new assignment. It is food, water, and sleep. An angel touches him: 'Arise and eat, for the journey is too great for you.' Not a journey ahead — a journey already taken. God acknowledges what Elijah cannot yet see: you have been depleted by a road you did not know was that long. The second provision, at God's instruction, sustains Elijah for forty days in the wilderness to Horeb — the mountain of God, the place where the covenant was given. There God speaks not in wind, earthquake, or fire but in a still, small voice. Elijah receives a new commission and a companion. The sabbatical becomes the place where the exhausted prophet hears what the noise of ministry was drowning out.",
  },
  {
    title: "The Sabbatical Year &mdash; Leviticus 25",
    body: "Leviticus 25 introduces the sabbatical year — shemitah — as a structural provision built into Israel's agricultural economy: every seventh year, the land must rest. No sowing, no pruning, no systematic harvest. 'The land shall have a Sabbath of solemn rest, a Sabbath to the Lord' (Lev 25:4). The provision that the land needs rest is not merely agronomic; it is theological. The land belongs to God, who insists on its restoration. Productivity cannot be extracted indefinitely without cost. The fallow year was also a provision for the poor, who could eat what grew of itself (Lev 25:6), and for the soil, which needed the nitrogen cycle the fallow produces. The sabbatical year was, notably, one of the hardest commands for Israel to keep — the Exile of 70 years is explicitly connected in 2 Chronicles 36:21 to the 70 sabbatical years the land did not receive. The refusal to stop has consequences. This agricultural theology maps directly onto ministry: the person who never allows fallow time does not merely get tired; they become depleted in ways that cannot be quickly remedied. The sabbatical year insists that rest is not a luxury the productive can afford but a mandate built into the structure of creation.",
  },
  {
    title: "Jesus Withdrawing Before and After Ministry",
    body: "The Gospels document a consistent pattern in Jesus' ministry: before major events, he withdrew to pray; after major expenditures of energy, he sought solitude. Before choosing the twelve apostles, he spent the entire night in prayer on a mountain (Luke 6:12). After feeding the five thousand — a day of intense public ministry — he dismissed the crowds, sent the disciples ahead, and withdrew alone to pray (Matthew 14:23). Luke records as a pattern, not an exception: 'But he would withdraw to desolate places and pray' (Luke 5:16). After the disciples returned from their first mission, full of reports and excitement, Jesus said: 'Come away by yourselves to a desolate place and rest a while.' For many were coming and going, and they had no leisure even to eat (Mark 6:31). The word translated 'rest' is anapauō — to give rest, to refresh. This is the founding text for Christian retreat and sabbatical: the Son of God himself, in his humanity, needed rhythms of withdrawal, and he actively invited his disciples into the same rhythm. Ministry that ignores this pattern is not more sacrificial than Jesus; it is simply disobedient to the pattern he modeled.",
  },
  {
    title: "Moses&rsquo; Extended Times with God",
    body: "Moses' encounters with God repeatedly took the form of extended withdrawal from the work of leadership. At Sinai, he ascended the mountain and remained there forty days and forty nights (Exodus 24:18), receiving the law while the people waited below — a people whose impatience produced the golden calf in his absence. The forty days with God produced the covenant, the tabernacle instructions, the entire ordering of Israel's worship. The fruit of the extended withdrawal was not merely information but formation: when Moses came down from the mountain, his face shone with the glory he had been near, so visibly that the people could not look at him. Later, after the covenant was broken and renewed, Moses asked to see God's glory and was hidden in the cleft of the rock while God passed by — a moment of pure receptivity, of being given what you cannot generate. These Mosaic withdrawals are the template for sabbatical as formation: the leader who spends extended time with God comes back changed, having received something the ordinary rhythm of ministry cannot produce. The work that follows the withdrawal is qualitatively different from the work that precedes it — not more efficient but more transparent to the God who was encountered.",
  },
  {
    title: "The Pastor-Burnout Crisis and Its Theology",
    body: "The contemporary crisis of pastoral burnout is well documented. Studies consistently show that ministers leave the profession at high rates, suffer depression and anxiety at rates higher than the general population, and often fail to practice the spiritual disciplines they preach. The theological analysis behind the statistics is less often articulated: much pastoral ministry operates on an implicit theology of functional atheism — the belief that the outcome depends primarily on the minister's effort, availability, and performance. Functionally atheist ministry is exhausting because the minister is carrying the weight that belongs to God. The sabbatical is, among other things, a practice of theological realism: the world did not end while you were away. God managed without you. The church survived your absence. These simple facts, registered during a genuine sabbatical, do the slow work of redistributing the weight back to its proper bearer. Ruth Haley Barton's Strengthening the Soul of Your Leadership documents the cycle with precision: the leader who will not stop is not only burning out personally; they are training the community they lead to believe that stopping is faithless. The sabbatical models for the whole community that God is not dependent on human performance.",
  },
  {
    title: "Sabbatical as Different from Vacation",
    body: "The confusion of sabbatical with vacation produces sabbaticals that do not work. Vacation is recovery from ordinary depletion — a change of scene, a suspension of normal demands, a return to baseline. This is good and necessary, but it is not sabbatical. Sabbatical is intentional spiritual formation during an extended period of freedom from ordinary work demands. It is not the absence of structure but a different structure — ordered toward the things that ordinary ministry work crowds out: extended prayer, unhurried reading, physical restoration, creative work, relationship, and the re-encounter with your own soul without the organizational identity that usually defines you. Fil Anderson, in his account of his own sabbatical recovery, describes the disorientation of the first weeks: without the role, without the schedule, without the meetings, who are you? This disorientation is the beginning of sabbatical's work, not its obstacle. The person who emerges from a genuine sabbatical has rediscovered that their identity is in God, not in their function — which makes them capable of returning to their function without being enslaved to it.",
  },
  {
    title: "How to Design a Sabbatical: Rhythm, Reading, Rest, Renewal",
    body: "Mark Buchanan, in The Rest of God, argues that the Sabbath teaches four practices that scale to the sabbatical: stopping, resting, delighting, and contemplating. Applied to sabbatical design, these suggest a structure. Stopping means genuinely ceasing from the work: no email, no pastoral calls unless crisis-level, no sermon preparation. Resting means attending to bodily restoration: sleep, exercise, unhurried meals, time in nature. Delighting means recovering what you love that is not ministry: creative work, music, reading for pleasure, time with family and friends without an agenda. Contemplating means extended encounter with God: longer prayer than usual, lectio divina, the Psalms read slowly, direction from a spiritual director, a silent retreat within the sabbatical. Gordon MacDonald suggests organizing the sabbatical into thirds — a first third of genuine rest and decompression, a middle third of reading and reflection, a final third of prayer about the future and preparation for return. What all serious sabbatical guides agree on is this: a sabbatical that is merely busy in different directions has not done the work. The test of the sabbatical is whether, by its end, the minister knows again who they are when they are not performing ministry.",
  },
  {
    title: "Returning from Sabbatical: How Organizations Receive People Back",
    body: "The return from sabbatical is as important as the sabbatical itself, and it is the part organizations most consistently get wrong. The minister who has genuinely rested, has encountered God at depth, and has rediscovered their own soul will return changed — sometimes in ways that are disorienting to the organization. They may have revised priorities. They may be willing to say no to things they previously accepted. They may have a different relationship to urgency, to productivity, and to the identity that the institution had built around their availability. Organizations that do not prepare for this return tend to erode the sabbatical's benefit within weeks, pulling the returning minister back into the pre-sabbatical patterns that produced the depletion. Healthy organizational re-entry requires the organization to name what they hoped the minister would receive, to hear what the minister actually received, to discuss what the return will look like, and to protect the integration period. The sabbatical is not simply personal; it is communal — the minister comes back with gifts for the community, and the community must be ready to receive them, including the gift of a minister who is no longer running on empty.",
  },
];

const practices = [
  {
    name: "The Sabbatical Proposal: Naming What You Need",
    body: "If you are in ministry and have never taken a sabbatical, begin by writing a one-page proposal for your own eyes: What would a genuine sabbatical require? What would you stop? What would you do instead? What do you hope to receive? How long would it need to be? The exercise of writing the proposal often reveals how far the current pattern has drifted from sustainable — and how much resistance you feel to the idea of stopping. Bring the proposal to a trusted mentor or spiritual director before you bring it to any board. The inner work of recognizing the need comes before the outer work of arranging the time.",
  },
  {
    name: "The Selah Practice: Daily and Weekly Stops",
    body: "Before a full sabbatical is possible, practice selah in miniature. Build one stop into each day — five minutes of genuine silence after your morning quiet time, before the first task of the day. Build one stop into each week — a genuine Sabbath day in which you do not check ministry messages, do not solve problems, and do not perform. These small stops are training for the larger one: they teach the body and mind that the world does not end when you pause, and they reveal how deep the compulsion to keep going actually runs. If the daily stop is impossible, the sabbatical will be harder than you think. The mini-selah is the first evidence of whether stopping is something you know how to do.",
  },
  {
    name: "The Elijah Prescription: Food, Sleep, Wilderness",
    body: "If you are currently in the Elijah place — depleted after significant ministry expenditure, tempted to quit, emotionally flat — take the angel's prescription before designing a program. You need food (real meals, not eaten at a desk), sleep (addressed seriously, not aspirationally), and time in nature. These are not spiritual disciplines; they are biological necessities that ministry culture tends to spiritualize away. God met Elijah in his body before meeting him at Horeb. The still small voice came after the food and sleep, not instead of them. If you are truly depleted, the first sabbatical practice is not a reading list but a bedtime.",
  },
  {
    name: "The Sabbatical Reading List",
    body: "Design your sabbatical reading in thirds: one third that is devotional and formational (the Psalms, a spiritual classic, lectio divina with the Gospels), one third that is personally renewing (books outside your field, a novel, poetry, natural history — whatever you have been too busy to read), and one third that is professionally generative (the theological reading that will feed your next season of ministry, approached now at leisure rather than urgency). Keep a journal of the sabbatical reading: not summaries but personal responses. What moved you? What disturbed you? What do you want to return to? The reading list is not a curriculum to complete but a river to float on.",
  },
  {
    name: "The Spiritual Director Relationship",
    body: "A sabbatical without a spiritual director is like a pilgrimage without a map: possible, but slower to find its way. Before your sabbatical begins, secure three or four appointments with a spiritual director spread across the sabbatical period. The director's role is not to guide the sabbatical's content but to help you notice what God is doing in it — to hold space for the real movements of the soul rather than the ones you would prefer to report. Many ministry workers discover during sabbatical that the inner life they thought they were maintaining is actually much thinner than they believed, and that the busyness of ministry has been functioning as avoidance. The spiritual director is the one who helps you sit with that discovery rather than flee back into activity.",
  },
  {
    name: "The Re-Entry Conversation",
    body: "Before returning to ministry, spend one full day in prayer and writing asking three questions: What did this sabbatical give me that I must protect when I return? What patterns that led to depletion will I refuse to reinstall? What do I want to carry back into the work that I did not have before I left? Write honest answers and share them with one trusted person before you return. Schedule a one-hour conversation with your supervisor or board within your first week back — not to report what you did but to discuss together how the return will be structured to protect what was given. The re-entry conversation is the organization's side of the sabbatical investment: it completes what the time away began.",
  },
];

const voices = [
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "Pastor and theologian of rest",
    body: "Peterson's Working the Angles addresses the three pastoral acts that, in his diagnosis, are most neglected precisely because they are most essential: prayer, Scripture, and spiritual direction. Sabbath and sabbatical are woven through all three. Peterson was notorious among his pastoral peers for keeping a genuine day off each week — a day he spent with his wife, often hiking, deliberately not being available to the congregation he loved. He saw this as a theological statement: his availability was not the congregation's primary resource. God was. His argument for pastoral rest was not primarily recuperative but missional: the exhausted, depleted pastor is not serving the congregation; they are modeling functional atheism for them. Peterson's own thirty-year pastorate was sustained by this rhythm, and its fruit — both in the congregation and in the extraordinary body of writing he produced on the side — is the argument for it.",
    quote: "Busyness is the enemy of spirituality. It is essentially laziness. It is doing the easy thing rather than the hard thing. It is filling our time with our own actions rather than paying attention to God&rsquo;s actions.",
  },
  {
    name: "Ruth Haley Barton",
    years: "b. 1956",
    role: "Spiritual director and author of Strengthening the Soul of Your Leadership",
    body: "Barton's Strengthening the Soul of Your Leadership is the most practically useful book on pastoral burnout and sabbatical theology available. Written from her own experience of near-collapse in ministry leadership, it is brutally honest about the dynamics that lead gifted, committed people to the Elijah tree: the identity fusion with the leader role, the inability to hear your own soul over the noise of others' needs, the way the outer success of ministry can mask the inner desolation. Barton describes the sabbatical as a return to 'the transforming community with the Trinity' — a phrase that captures what makes sabbatical different from mere vacation. She is also unusually attentive to organizational dynamics: the board that does not give sabbatical is training its leaders to burn out. Her work has shaped sabbatical policy in hundreds of churches and organizations. The underlying theology is simple and demanding: you cannot give what you do not have, and what you need most cannot be acquired in the ordinary rhythm of ministry work.",
    quote: "The most important thing about your leadership is your spiritual life &mdash; not your gifts, not your strategy, not your communication skills.",
  },
  {
    name: "Wayne Muller",
    years: "b. 1953",
    role: "Therapist and theologian of Sabbath rest",
    body: "Muller's Sabbath: Restoring the Sacred Rhythm of Rest, though written from a broadly spiritual rather than specifically evangelical perspective, is one of the most beautiful accounts of the theology and practice of stopping available in any tradition. Muller documents what he calls the 'amnesia of busyness' — the way sustained overwork gradually erodes our capacity to know what we actually love, what we actually believe, who we actually are. His clinical work with people in crisis repeatedly revealed the same pattern: people who had been too busy to maintain their own inner life had gradually become strangers to themselves. The Sabbath, for Muller, is the antidote: a regular practice of remembering, by stopping, that you are not a machine, that the work does not define you, and that the world belongs to God. His stories of Sabbath practice from Jewish, Christian, Buddhist, and indigenous traditions are a rich invitation to broaden and deepen a practice the contemporary church has largely abandoned.",
    quote: "When we are slaves to productivity, we are always behind, always insufficient, always running to catch up.",
  },
  {
    name: "Gordon MacDonald",
    years: "b. 1939",
    role: "Author of Ordering Your Private World",
    body: "MacDonald's Ordering Your Private World has been in continuous print since 1984, and its central diagnosis remains accurate: the busyness that destroys ministry workers is not caused by external demands but by an unordered inner world — by the absence of an interior life capable of withstanding external pressure. MacDonald writes from his own experience of collapse and restoration: a moral failure that cost him his ministry for a season led to the kind of radical interior ordering he had long written about but not fully practiced. His account of rebuilding is among the most honest in the pastoral literature. On sabbatical, MacDonald is practical: he organizes his own sabbatical into the four rhythms of stopping, resting, delighting, and contemplating — not as a program but as a recovery of the natural patterns God built into the human creature. His work insists that the private world is not a luxury the productive leader can defer attending to; it is the foundation from which all lasting work proceeds.",
    quote: "Busyness rapes relationships. It substitutes shallow frenzy for deep friendship. It promises satisfying dreams but delivers hollow nightmares.",
  },
  {
    name: "Fil Anderson",
    years: "Contemporary",
    role: "Author and guide on pastoral exhaustion",
    body: "Anderson's Running on Empty is one of the few first-person accounts of pastoral burnout and sabbatical recovery written with genuine psychological and spiritual honesty. Anderson describes the decade he spent running a large ministry on the fumes of performance, competence, and the unconscious belief that his value lay in his usefulness to God. The collapse, when it came, was not dramatic; it was the quiet recognition that he could no longer feel anything — not joy, not grief, not the presence of God he had preached for years. His sabbatical recovery was slow and disorienting. He describes learning, for the first time, to simply be rather than to do — a competency more foreign to him than any ministry skill. Anderson's account is particularly valuable for its honesty about the false self that ministry can produce: the version of yourself that exists entirely for others and has gradually consumed the person who was called in the first place.",
    quote: "God is not calling you to do more; God is calling you to be more.",
  },
  {
    name: "Mark Buchanan",
    years: "b. 1963",
    role: "Pastor and author of The Rest of God",
    body: "Buchanan's The Rest of God is a theological and pastoral exploration of Sabbath that consistently extends its implications toward sabbatical. His central claim is that Sabbath is not merely a practice but a theology: the God who rested on the seventh day was not tired; he was celebrating. The Sabbath is the day of declaring the world good, of looking at everything made and finding it enough. This has direct sabbatical implications: the minister who cannot stop cannot say 'it is enough.' The stopping itself is a theological declaration. Buchanan is also attentive to the way modern ministry culture uses the language of calling to justify what is functionally workaholism: 'I am doing God's work' becomes the rationalisation for ignoring the God who insists on rest. His chapter on the 'sabbath-shaped heart' — the interior quality of a person who has genuinely received the rest God offers — is the best description available of what sabbatical is ultimately trying to form.",
    quote: "Sabbath is not the break we take from our work. It is the rest that God has already given us, that we keep refusing to receive.",
  },
];

const scriptures = [
  {
    ref: "1 Kings 19:5-8",
    text: "And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, 'Arise and eat.' And he looked, and behold, there was at his head a cake baked on hot stones and a jar of water. And he ate and drank and lay down again. And the angel of the Lord came again a second time and touched him and said, 'Arise and eat, for the journey is too great for you.'",
    note: "God's first response to ministry exhaustion is not a rebuke or a new assignment but provision for the body. The journey is real; the depletion is real; and God meets it with what the body needs before he speaks to the soul.",
  },
  {
    ref: "Mark 6:31",
    text: "And he said to them, 'Come away by yourselves to a desolate place and rest a while.' For many were coming and going, and they had no leisure even to eat.",
    note: "Jesus invites his disciples into retreat after ministry. The busyness described — no leisure even to eat — is the condition the sabbatical is meant to break. The invitation is from Christ himself: come away and rest.",
  },
  {
    ref: "Leviticus 25:4",
    text: "But in the seventh year there shall be a Sabbath of solemn rest for the land, a Sabbath to the Lord. You shall not sow your field or prune your vineyard.",
    note: "The land that never rests becomes exhausted. God builds structural rest into the fabric of creation. The command is not a concession to weakness; it is a declaration about how things are made.",
  },
  {
    ref: "Psalm 46:10",
    text: "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
    note: "The imperative is addressed to people in chaos and conflict. 'Be still' is not a gentle invitation; it is a command to stop fighting, striving, and managing — and to recognize in the stillness who is actually in charge.",
  },
  {
    ref: "Matthew 11:28-30",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.",
    note: "The rest Jesus offers is not the absence of a yoke but a different yoke — his. The sabbatical is the place where the minister's accumulated yokes can be examined and the question asked: am I carrying what he gave me, or what I gave myself?",
  },
  {
    ref: "Exodus 33:14",
    text: "And he said, 'My presence will go with you, and I will give you rest.'",
    note: "God's promise to Moses as the journey continues is presence and rest together. The sabbatical is not a withdrawal from God's mission but a return to the assurance that God's presence goes ahead of the mission. It is rest in motion.",
  },
];

const videos = [
  { videoId: "0Bg3f4t6nAk", title: "The Theology of Sabbatical Rest" },
  { videoId: "sAdwX7vbBdk", title: "Elijah&rsquo;s Burnout and God&rsquo;s Response — 1 Kings 19" },
  { videoId: "bIpkYvLi6q4", title: "Selah: The Pause in the Psalms" },
  { videoId: "YQC3VZKo9j0", title: "Ruth Haley Barton on Pastoral Sustainability" },
  { videoId: "JmMRJB3FGpQ", title: "Sabbath as Theology — The Rest of God" },
  { videoId: "LdPRIMByNkY", title: "Designing a Meaningful Sabbatical" },
];

const relatedPages = [
  { href: "/christian-pilgrimage", label: "Christian Pilgrimage" },
  { href: "/sabbath", label: "The Sabbath" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/pastoral-theology", label: "Pastoral Theology" },
  { href: "/christian-perseverance", label: "Christian Perseverance" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianSabbaticalPage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<SBTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatYouLeftBehind, setWhatYouLeftBehind] = useState("");
  const [whatGodGave, setWhatGodGave] = useState("");
  const [whatYouCarryBack, setWhatYouCarryBack] = useState("");

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
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!whatYouLeftBehind.trim()) return;
    const entry: SBTEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      whatYouLeftBehind: whatYouLeftBehind.trim(),
      whatGodGave: whatGodGave.trim(),
      whatYouCarryBack: whatYouCarryBack.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setWhatYouLeftBehind("");
    setWhatGodGave("");
    setWhatYouCarryBack("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: INDIGO + "22",
            color: INDIGO,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Rest &amp; Renewal
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Selah: The Ministry of Christian Sabbatical
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Selah &mdash; the musical pause woven through the Psalms at moments of greatest weight &mdash; is the theology
          of sabbatical compressed into a single word. God commands stopping into the structure of praise itself. The
          minister who never stops is singing without the rests: and what comes out is noise, not music.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the biblical theology of sabbatical rest, the Elijah precedent for ministry burnout and
          God&rsquo;s response to it, the difference between vacation and genuine sabbatical, and the practices that
          allow a depleted person to stop, receive, and return renewed.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? INDIGO : BORDER,
                background: tab === t.id ? INDIGO + "22" : "transparent",
                color: tab === t.id ? INDIGO : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              A Theology of Sabbatical
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s case for the long stop &mdash; from the Selah of the Psalms to
              Elijah under the broom tree, from the fallow land of Leviticus to Jesus withdrawing before and after
              ministry.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on the same declaration: God is not dependent on human
                performance, and neither is his mission. The sabbatical is the enacted confession of this truth. To stop
                is to say &ldquo;God is God and I am not.&rdquo; And in that saying &mdash; in that long, difficult,
                necessary selah &mdash; something is restored that no amount of continued work could have given.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Practices of Sabbatical Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices for entering, inhabiting, and returning well from a sabbatical season &mdash; whether that
              season is a formal extended leave or the beginning of Elijah-level care for a depleted soul.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: INDIGO + "22",
                  color: INDIGO,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Voices on Sabbatical and Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; pastors, spiritual directors, therapists, and theologians &mdash; who have written from
              experience about the theology and practice of stopping and returning renewed.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${INDIGO}`,
                  background: INDIGO + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${v.quote}&rdquo;` }}
                />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Scripture on Sabbatical Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts &mdash; from Elijah&rsquo;s broom tree to Jesus&rsquo; invitation to rest. Each is paired
              with a reflection for the ministry worker learning to stop.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: INDIGO, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${INDIGO}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Selah practice:</strong> take one of these passages into a twenty-minute
                period of silence. Read it once, slowly. Set it down. Sit in the silence without filling it. Read it
                once more at the end. This is lectio divina in miniature &mdash; the reading that listens rather than
                consumes, and that receives what the word has to give rather than extracting what you came looking for.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Sabbatical Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log what you left behind when you stopped, what God gave in the stopping, and what you carry back into
              your work. Entries are saved privately in your browser. The record of what rest gave you is worth keeping
              &mdash; both as testimony and as protection against the pressures that will, over time, press you back
              toward the patterns that made the sabbatical necessary.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sbt-left-behind" style={labelStyle}>What I left behind when I stopped</label>
                <textarea
                  id="sbt-left-behind"
                  value={whatYouLeftBehind}
                  onChange={e => setWhatYouLeftBehind(e.target.value)}
                  rows={3}
                  placeholder="e.g. The compulsion to check email; the identity of being needed; the anxiety about what would happen if I wasn&rsquo;t there; the sermon I had been avoiding writing; the exhaustion I had been calling faithfulness..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be honest about what stopping required you to release, even temporarily. What was hardest to put down?</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sbt-god-gave" style={labelStyle}>What God gave in the stopping</label>
                <textarea
                  id="sbt-god-gave"
                  value={whatGodGave}
                  onChange={e => setWhatGodGave(e.target.value)}
                  rows={3}
                  placeholder="e.g. Sleep, finally; the still small voice I had not heard in months; a renewed sense of who I am apart from my role; clarity about what actually matters; joy in things I had forgotten I loved..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>What did the selah make room for that the ordinary rhythm could not have given?</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="sbt-carry-back" style={labelStyle}>What I carry back into the work</label>
                <textarea
                  id="sbt-carry-back"
                  value={whatYouCarryBack}
                  onChange={e => setWhatYouCarryBack(e.target.value)}
                  rows={3}
                  placeholder="e.g. A renewed conviction that the work belongs to God; a practice I will protect; one thing I will refuse to reinstall; a clearer sense of my calling beneath the noise of the role..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The sabbatical is not complete until it has shaped the return. Name what you bring back.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!whatYouLeftBehind.trim()}
                style={{
                  background: whatYouLeftBehind.trim() ? INDIGO : BORDER,
                  color: whatYouLeftBehind.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: whatYouLeftBehind.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Sabbatical Record{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. When you have stopped &mdash; or when you return from having stopped &mdash;
                    record what the selah gave. The record is worth keeping.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      {entry.date && (
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      )}
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          What I Left Behind
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.whatYouLeftBehind}</p>
                      </div>
                      {entry.whatGodGave && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What God Gave
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.whatGodGave}</p>
                        </div>
                      )}
                      {entry.whatYouCarryBack && (
                        <div>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What I Carry Back
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.whatYouCarryBack}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the theology of sabbatical and Sabbath rest, pastoral sustainability, and the biblical
              case for the long stop.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Come away by yourselves to a desolate place and rest a while.&rdquo; The invitation stands. God is
            not more honored by your exhaustion than by your rest. Selah.
          </p>
        </div>
      </main>
    </div>
  );
}
