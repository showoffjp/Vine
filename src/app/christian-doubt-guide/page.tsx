"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_doubtguide_entries";

interface DBTEntry {
  id: string;
  date: string;
  doubtQuestion: string;
  whatHelped: string;
  wheresYourFaith: string;
}

const theologySections = [
  {
    title: "Thomas — The Patron Saint of Doubters (John 20:24–29)",
    body: "Thomas was not present when Jesus appeared to the other disciples after the resurrection. When they told him what they had seen, he refused to believe without direct evidence: \"Unless I see the nail marks in his hands and put my finger where the nails were, and put my hand into his side, I will not believe\" (John 20:25). This is not a polite expression of uncertainty — it is a flat refusal based on a specific evidentiary demand. A week later, Jesus appeared again, and his first words were addressed directly to Thomas: \"Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe\" (20:27). Jesus did not rebuke Thomas for his doubt. He met it with evidence. He invited Thomas to touch the wounds. And Thomas&rsquo;s response — \"My Lord and my God!\" — is the highest explicit christological confession in the Gospel of John. The disciple who refused to believe without evidence ends up making the confession that provides the gospel&rsquo;s theological climax. The pattern matters: doubt brought honestly to Jesus, met with patient evidence, produces deepened faith. The church&rsquo;s pastoral response to doubters should mirror Jesus&rsquo;s: not dismissal or panic, but patient, evidential engagement.",
  },
  {
    title: "Doubt vs. Unbelief — They Are Not the Same",
    body: "One of the most damaging confusions in Christian discourse is the conflation of doubt and unbelief. They are not the same. Unbelief is the settled, volitional refusal to trust — the hardened heart that has heard the evidence and rejected it, that has encountered God and turned away. This is what Jesus encountered in Nazareth, where he could do few miracles because of the people&rsquo;s hardened disbelief (Matthew 13:58). Doubt is different: it is the experience of someone who wants to believe but cannot yet get there, who is asking questions because the questions are real, who is still engaged enough with God to bring the uncertainty to him rather than walking away. Doubt lives in the middle — it believes enough to keep asking. The New Testament treats these very differently. Jesus is grieved by unbelief (Mark 6:6) but patient with doubt (John 20:27; Matthew 11:2-6). Jude instructs the church to \"be merciful to those who doubt\" (1:22) — a command that presupposes doubt is a condition deserving of compassion, not condemnation. When the church treats every expression of doubt as incipient apostasy, it drives honest questioning underground, where it festers into the very unbelief it feared.",
  },
  {
    title: "Lord, I Believe — Help My Unbelief (Mark 9:24)",
    body: "A father brings his son to Jesus — the boy has been tormented since childhood by what the text describes as a convulsing spirit. The disciples have tried to cast it out and failed. The man&rsquo;s request to Jesus carries a note of desperation and something approaching resentment: \"If you can do anything, take pity on us and help us.\" Jesus responds: \"Everything is possible for one who believes.\" And the father&rsquo;s answer is one of the most psychologically honest sentences in the Gospels: \"I do believe; help me overcome my unbelief!\" (9:24). This man does not sort out his faith before approaching Jesus. He comes with the faith he has — which is fragile, mixed, uncertain — and asks Jesus to supply what is missing. The prayer is not \"I believe\" but \"I believe AND I need help with the part I don&rsquo;t.\" Jesus heals the boy. The prayer of mixed faith is enough. This passage is the textual home for everyone who finds themselves in the position of wanting to believe more fully than they can manage — who can affirm some things but not all things, who is inside the threshold of faith but struggling with what lies just beyond it. The prayer of the father is the prayer of the honest doubter, and Jesus answered it.",
  },
  {
    title: "Three Categories of Doubt",
    body: "Christian spiritual direction has traditionally distinguished at least three types of doubt, each of which requires a different response. Intellectual doubt arises from unanswered questions: the problem of evil, the reliability of Scripture, the relationship between faith and science, the existence of other religions. This kind of doubt is addressed primarily through engagement with the vast tradition of Christian apologetics and theology. The faith has answers — not always tidy ones — and intellectual doubters deserve to be introduced to the full resources of the tradition: Augustine, Aquinas, Lewis, Plantinga, N.T. Wright, Alvin Plantinga, Timothy Keller. Emotional doubt arises from experience rather than argument: the prayer that was not answered, the healing that did not come, the child who died, the injustice that was never corrected. This kind of doubt is addressed not primarily through argument but through accompaniment, lament, and the long work of learning to trust a God whose ways are often opaque. Moral doubt arises from the sense that the Christian life requires too much — that its demands are unreasonable, that the pleasures it asks us to relinquish are not worth the sacrifice. This kind of doubt is addressed through conversion of desire, through community, and through the gradual discovery that the things Christianity calls us to lay down are genuinely impoverishments rather than deprivations.",
  },
  {
    title: "Faith Seeking Understanding — Anselm",
    body: "Anselm of Canterbury (1033–1109) formulated one of the most important phrases in the history of Christian theology: fides quaerens intellectum — faith seeking understanding. The phrase defines a posture toward both faith and reason that differs from both fideism (believe without thinking) and rationalism (only believe what you can fully understand). For Anselm, faith is not the endpoint of Christian life but the beginning of a lifelong intellectual journey. You believe in order to understand, rather than understanding in order to believe. This means that doubt — in the sense of unresolved questions, of holding open problems within faith rather than resolving them by abandoning it — is not a crisis but a feature. It is what faith looks like on the way to fuller understanding. The doubter who stays inside the faith while wrestling with hard questions is practicing fides quaerens intellectum. The alternative — refusing to believe anything you cannot first fully comprehend — makes faith impossible, because finite minds cannot comprehend the infinite. Anselm&rsquo;s framework gives intellectual doubters a home: you are not deficient for having questions. You are practicing theology as it was always meant to be practiced.",
  },
  {
    title: "Job as a Model of Honest Wrestling",
    body: "Job is the Bible&rsquo;s longest extended treatment of what happens when a person&rsquo;s experience of God dramatically contradicts their theology of God. Job has lived righteously and trusted God; God has allowed Satan to destroy everything Job has. Job&rsquo;s friends respond with theological management: they explain Job&rsquo;s suffering as the consequence of his sin. Job refuses their explanations because they do not match his experience. He brings his protest directly to God: \"I desire to speak to the Almighty and to argue my case with God\" (13:3). He accuses God of hiding, of injustice, of treating him as an enemy. And then comes the divine verdict at the end: God tells Job&rsquo;s friends that Job &ldquo;spoke the truth about me&rdquo; while they did not (42:7). Job&rsquo;s angry, honest, unresolved wrestling with God is the right response. His friends&rsquo; tidy theological management is the wrong one. Job models for us what it looks like to stay in relationship with God while experiencing God as absent, unjust, or silent — which is the precise experience of the existential doubter. He does not walk away. He argues. And the God who receives the argument without destroying Job is the God who can receive honest doubt.",
  },
  {
    title: "The Hiddenness of God — Psalm 44",
    body: "Psalm 44 is one of the most confrontational psalms in Scripture. It opens with a recital of God&rsquo;s historical faithfulness — the great acts of the Exodus, the conquest, the settled life of Israel. Then it pivots: \"But now you have rejected and humbled us... You sold your people for a pittance... All this came upon us, though we had not forgotten you or been false to your covenant\" (44:9, 12, 17). The psalmist is explicit: we did nothing to deserve this. We kept faith. And God has hidden his face. The psalm ends not with resolution but with a petition: \"Awake, Lord! Why do you sleep? Rouse yourself! Do not reject us forever. Why do you hide your face and forget our misery and oppression?\" (44:23-24). The hiddenness of God — the experience of God&rsquo;s silence, of prayers apparently unanswered, of the felt absence of the one who promised to be present — is a biblical category, not a sign of individual spiritual failure. The doubter who says \"I cannot feel God\" is in good scriptural company. The response modeled by Psalm 44 is not to abandon faith but to bring the hiddenness itself to God as a protest, a petition, and an expression of the conviction that God ought to show up and has not yet done so.",
  },
  {
    title: "Honest Lament and Doubt as Faithfulness",
    body: "There is a form of Christian doubt that is actually a higher form of faith than easy certainty — and it is the doubt of someone who has taken God seriously enough to be devastated by the apparent gap between promise and experience. The person who has never doubted may not have staked enough on God for the doubt to arise. It is the person who has prayed and waited and risked and lost who finds themselves in the space of genuine doubt — and that person, precisely because they invested, has more skin in the game than the person who held their faith at comfortable arm&rsquo;s length. Walter Brueggemann argues that the psalms of lament are acts of bold faith — because they address God with the honest expectation that God can handle the truth and ought to respond. The doubter who still prays the lament — who still brings the pain, the confusion, the sense of betrayal directly to God — is more faithfully engaged with God than the person who has concluded that everything is fine and God is always visible. Honest lament and doubt, brought directly to God, are the prayers of those who have not given up on the relationship even while experiencing its most painful seasons.",
  },
  {
    title: "Why Silencing Doubt Is Dangerous",
    body: "Churches that pathologize doubt — that treat every expression of uncertainty as spiritual failure, that reward performative certainty and punish honest questioning — create the conditions for the very outcome they fear. When doubt cannot be expressed in community, it goes underground. It is processed in isolation, without the resources of the tradition, without the accompaniment of wiser believers, without access to the vast library of Christian engagement with hard questions. The isolated doubter, unable to bring their questions to the community, is far more likely to conclude that the questions are unanswerable — and to leave faith behind — than the doubter who brings their questions openly and discovers that the tradition has been wrestling with them for centuries. The church&rsquo;s greatest apologetic asset is not its answers but its willingness to sit with questions. The community that says &ldquo;bring your hardest questions here, and we will wrestle with them together&rdquo; is the community that keeps its doubters. The community that says &ldquo;here we do not doubt&rdquo; is the community that eventually teaches its doubters to leave before speaking.",
  },
];

const practices = [
  {
    name: "Name the Doubt Precisely",
    body: "Write out your doubt as specifically as you can — not a vague unease that something is wrong, but the actual question or experience driving the uncertainty. Is it the problem of evil? A specific unanswered prayer? A passage of Scripture that seems inconsistent with God&rsquo;s character? The sense that you have never had a genuine experience of God&rsquo;s presence? Naming the doubt precisely is the first step toward engaging it, because vague doubt is almost impossible to address while specific doubt can be brought to specific resources, specific people, and specific prayers. Many people have carried a nameless background doubt for years that, when finally articulated, turns out to be a question that has been addressed in depth by serious Christian thinkers. The question is not usually: has anyone ever wrestled with this? The question is usually: has the person doubting ever been introduced to those who have?",
  },
  {
    name: "Identify the Type of Your Doubt",
    body: "Doubt that comes from unanswered intellectual questions needs a different response than doubt that comes from an experience of God&rsquo;s absence, which needs a different response than doubt that comes from the sense that following Christ costs too much. Spending two or three minutes to identify which kind of doubt you are experiencing orients your next steps. If it is primarily intellectual, the next step is finding a serious resource that engages the specific question. If it is primarily emotional or existential, the next step is lament, accompaniment, and the long work of honest prayer in the dark. If it is primarily moral — if what is drawing you away from faith is the desire for something the faith asks you to relinquish — the next step is honest confession and probably community. Misidentifying the type of doubt leads to misdirected responses: giving an intellectual argument to someone in existential anguish, or prescribing lament to someone whose doubt is fully intellectual, rarely helps.",
  },
  {
    name: "Stay in the Practices While the Questions Are Unresolved",
    body: "One of the most destructive patterns in doubt is withdrawing from the practices of the Christian life — prayer, worship, Scripture, community — while waiting for the doubt to resolve. The resolution rarely comes in isolation. Dallas Willard observed that you cannot think your way to faith; you can act your way into different thinking. The practice is to stay: keep praying, even if prayer feels empty; keep showing up to worship, even if it feels hollow; keep reading Scripture, even if it feels distant; keep presenting yourself to the community, even if you feel like a fraud. Not as performance but as the ancient wisdom of perseverance: faith is sustained through the practices, not in spite of them. The doubter who keeps showing up is the doubter who gives faith the conditions it needs to grow back. The doubter who withdraws removes themselves from the very environment where re-engagement becomes possible.",
  },
  {
    name: "Engage Serious Christian Apologetics",
    body: "Intellectual doubt that has never encountered serious Christian thinking deserves to be introduced to it. The tradition of Christian apologetics — rational engagement with the hardest questions against faith — is vast, rigorous, and largely unknown to most doubters in the pew. C.S. Lewis&rsquo;s Mere Christianity, Timothy Keller&rsquo;s The Reason for God, N.T. Wright&rsquo;s The Resurrection of the Son of God, Alvin Plantinga&rsquo;s work on Reformed epistemology, G.K. Chesterton&rsquo;s Orthodoxy — these are resources developed by some of the most formidable intellects of the last century, specifically addressing the questions that produce intellectual doubt. The practice is: identify the specific intellectual question driving your doubt, find one serious resource that engages it, and read it before concluding that no answer exists. Doubt that encounters serious engagement is often transformed — not necessarily resolved, but moved from &ldquo;this question has no answer&rdquo; to &ldquo;this question is harder and more interesting than I realized, and the tradition has resources for it.&rdquo;",
  },
  {
    name: "Bring One Person into the Doubt",
    body: "Isolated doubt festers; accompanied doubt is survivable. The practice is to bring one person — a pastor, a spiritually mature friend, a counselor, a spiritual director — into explicit knowledge of where you are. Not to have them fix it but to walk alongside it. The person you choose should be someone comfortable with unresolved darkness — who will not immediately produce three arguments for why your doubt is wrong, who will not panic, who has known their own seasons of uncertainty and has not been destroyed by them. Tell them specifically: &ldquo;I am struggling with faith and I need someone to walk with me.&rdquo; Then meet regularly with the doubt as the explicit agenda. The experience of being known in the doubt — of not carrying it in secret — is often more sustaining than any argument. You are not the only one. You will not be the last.",
  },
  {
    name: "The Prayer of the Doubting Father",
    body: "Return regularly to Mark 9:24 and pray it as your own: &ldquo;I do believe; help me overcome my unbelief.&rdquo; Do not wait to pray until you feel certain enough to do so sincerely. The point of this prayer is that it is prayed from inside uncertainty, by someone who does not have it together yet. It is addressed to Jesus not as a confession of full assurance but as a petition from someone who has what little faith they have and is asking for more. Pray it in the morning before the day&rsquo;s demands arrive. Pray it in the moments when doubt feels crushing. The prayer does not resolve the doubt immediately. But it keeps the direction of travel correct: bringing the uncertainty toward Jesus rather than away from him. That directional habit, maintained over time, is itself an act of faith — the faith that believes enough to keep asking.",
  },
];

const voices = [
  {
    name: "Os Guinness",
    years: "b. 1941",
    work: "God in the Dark",
    body: "Os Guinness is a social critic and apologist who has written some of the most analytically precise treatments of Christian doubt in the modern era. God in the Dark (originally published as In Two Minds) is the most thorough taxonomy of doubt available in popular Christian literature: Guinness distinguishes between at least seven different types of doubt, each with a specific diagnosis and a specific prescription. He writes from personal wrestling — he is not describing doubt from a distance but from within a life that has taken the questions seriously. What makes the book unusual is its refusal of both easy reassurance and glib resolution: Guinness insists that some questions cannot be answered on this side of eternity, and that the mature response is not to pretend they can be but to learn to hold them within faith rather than in opposition to it. His broader social criticism has consistently identified the cultural conditions that make doubt inevitable for modern Westerners — the pluralism, the plausibility structures that have shifted away from Christianity — which means he understands why you doubt without using that understanding as an excuse to doubt.",
    quote: "Doubt is not the opposite of faith; it is one element of faith. To believe with certainty is to have been denied the spiritual education that only struggle can give.",
  },
  {
    name: "Philip Yancey",
    years: "b. 1949",
    work: "Disappointment with God",
    body: "Philip Yancey is the Christian author who has most consistently written into the gap between the God Christians believe in and the God they actually experience. Disappointment with God directly addresses the experience that generates the most painful and persistent doubt: the sense that God has failed to show up when he was most needed. Yancey asks three questions directly: Is God unfair? Is God silent? Is God hidden? — and pursues honest answers through Scripture, theology, and story. What makes his work valuable for doubters is his refusal to smooth the rough edges: he does not conclude that God always shows up visibly, that prayers are always answered in recognizable ways, or that suffering always makes sense. He concludes instead that the biblical pattern is God&rsquo;s consistent faithfulness beneath experiences of hiddenness — and that the cross is the definitive answer to the question of whether God is present in human darkness. Yancey writes with unusual authority on doubt because he has spent his career refusing to dismiss the experience that generates it.",
    quote: "I have concluded that what I call doubt God might call growth. He is not threatened by my questions. What he asks of me is honesty itself — bringing the full weight of my experience to him rather than hiding it from him.",
  },
  {
    name: "Alister McGrath",
    years: "b. 1953",
    work: "Doubting: Growing Through the Uncertainties of Faith",
    body: "Alister McGrath is one of the most rigorously credentialed Christian scholars alive: a former Oxford professor who holds doctorates in both molecular biophysics and theology, and who came to faith as a committed atheist in his late teens after finding the intellectual case for Christianity more compelling than he expected. His work on doubt is therefore grounded in a personal history of moving from confident unbelief to faith — and then learning to hold that faith across decades of intellectual life at the highest level. His book Doubting takes a pastoral rather than apologetic approach: it is less about answering specific objections and more about normalizing doubt as part of the Christian life and providing practical frameworks for navigating it. McGrath is particularly useful for those whose doubt is intellectual, because he models what it looks like to be a rigorous thinker who nevertheless finds Christianity intellectually compelling — and he does so without suggesting that rigorous thought and Christian faith are in tension.",
    quote: "Doubt is something that virtually all Christians experience at some point in their lives. It is not a sign of weakness or failure. It is simply a part of what it means to be a thinking human being who has chosen to follow Christ.",
  },
  {
    name: "Peter Kreeft",
    years: "b. 1937",
    work: "Christianity for Modern Pagans",
    body: "Peter Kreeft is a philosopher at Boston College who has spent fifty years teaching and writing at the intersection of rigorous argument and pastoral accessibility. He is unusually good at taking the hardest philosophical questions about faith — the problem of evil, the hiddenness of God, the reliability of the resurrection accounts — and engaging them with the same rigor he would bring to any philosophical argument, without sacrificing warmth or pastoral sensibility. His work on doubt is scattered across dozens of books, but the thread running through all of it is his conviction that Christianity is both intellectually defensible and existentially necessary — that the doubter who explores the faith honestly and thoroughly is far more likely to end up inside it than outside it. He is deeply influenced by Pascal, whose Pensées form one of the most sophisticated Christian engagements with the doubting modern mind ever written, and Kreeft&rsquo;s own voice carries something of Pascal&rsquo;s combination of intellectual force and spiritual urgency.",
    quote: "If you do not seek, you will not find. If you do not knock, the door will not open. The seeker is the one who finds. The doubter who seeks is closer to God than the believer who does not.",
  },
  {
    name: "Lesslie Newbigin",
    years: "1909–1998",
    work: "Proper Confidence",
    body: "Lesslie Newbigin was a British bishop who spent decades as a missionary in India and returned to the West with fresh eyes for the epistemological assumptions that make doubt feel mandatory for educated Westerners. His book Proper Confidence is a philosophical argument against the idea that certainty is the only acceptable epistemic standard — and therefore that anything short of certainty should be called doubt. Newbigin argues that all knowledge, including scientific knowledge, rests on unproved assumptions — what Michael Polanyi called &ldquo;fiduciary commitments&rdquo; — and that Christian faith is not epistemically inferior to other forms of knowledge simply because it cannot achieve Cartesian certainty. His argument gives doubters a way to understand their situation that is not simply a concession to secular epistemology: you are not doubting because the evidence for faith is weak; you are doubting because the culture has convinced you that certainty is the only acceptable alternative to doubt, and that anything less than certainty should be surrendered. Proper Confidence offers a third way: responsible, committed belief that neither claims more than it knows nor surrenders to the demand for certainty.",
    quote: "The alternative to doubt is not certainty but faith. And faith is not the absence of questioning but the decision to stake one&rsquo;s life on a trust that has grounds even when it lacks proof.",
  },
  {
    name: "G.K. Chesterton",
    years: "1874–1936",
    work: "Orthodoxy",
    body: "Chesterton came to Christian faith as a journalist who set out to construct his own philosophy of life and discovered, at the end of the project, that he had reinvented Christianity. Orthodoxy is the account of that journey — a book of intellectual autobiography that is simultaneously one of the most brilliant defenses of Christian faith ever written and one of the most entertaining. What makes it valuable for doubters is its starting point: Chesterton takes the doubts seriously. He does not dismiss the case for materialism, determinism, or secular optimism — he engages them and shows why they are internally incoherent. His method is not to argue from the outside that Christianity is true but to argue from inside the skeptical position that it is the only position that actually holds together. His paradoxical style mirrors his theological conviction: Christianity is the only system where the contradictions of human experience — the simultaneous sense of dignity and depravity, of cosmic significance and crushing smallness — actually cohere. Doubters who have dismissed Christianity as too simple often find in Chesterton that it is far stranger, more demanding, and more interesting than they imagined.",
    quote: "It is not merely that God has arbitrarily made us such that we need him; it is that we are the kind of thing that, if it exists at all, logically must need God — as a triangle needs three sides.",
  },
];

const scriptures = [
  {
    ref: "John 20:27–28",
    text: "Then he said to Thomas, \"Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.\" Thomas said to him, \"My Lord and my God!\"",
    note: "Jesus met Thomas&rsquo;s demand for evidence with evidence. The disciple who refused to believe without proof makes the highest confession in the Gospel. Doubt engaged by Jesus becomes worship.",
  },
  {
    ref: "Mark 9:24",
    text: "Immediately the boy's father exclaimed, \"I do believe; help me overcome my unbelief!\"",
    note: "The prayer of mixed faith — \"I believe AND I need help with what I don&rsquo;t\" — is enough. Jesus healed the boy. The prayer from inside honest doubt is prayer Jesus answers.",
  },
  {
    ref: "Psalm 44:23–24",
    text: "Awake, Lord! Why do you sleep? Rouse yourself! Do not reject us forever. Why do you hide your face and forget our misery and oppression?",
    note: "The hiddenness of God is a biblical category, not an individual failure. This psalm accuses God of sleeping. It is in Scripture — which means this prayer is allowed.",
  },
  {
    ref: "Habakkuk 1:2–3",
    text: "How long, Lord, must I call for help, but you do not listen? Or cry out to you, \"Violence!\" but you do not save? Why do you make me look at injustice?",
    note: "Habakkuk&rsquo;s opening complaint is unanswered prayer, injustice, and the silence of God. By the end of the book he chooses joy in God despite unresolved circumstances (3:17-18). The journey matters.",
  },
  {
    ref: "Jude 1:22",
    text: "Be merciful to those who doubt.",
    note: "A direct command. The church is told to respond to doubters with mercy — which presupposes that doubt is a condition deserving compassion, not condemnation or dismissal.",
  },
  {
    ref: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    note: "The definition of faith assumes that what is believed is not seen. Faith and certainty are not the same. Faith is always exercised in the space between what is known and what is hoped for.",
  },
];

const videos = [
  { videoId: "x1AZPrLNPkc", title: "Is Doubt the Enemy of Faith?" },
  { videoId: "R1J41Vu_upc", title: "Os Guinness: Handling Doubt Honestly and Faithfully" },
  { videoId: "z2YWuCp1rX0", title: "Philip Yancey: Disappointment with God" },
  { videoId: "JdR1f5Vb9Ps", title: "Thomas and the Doubting Believer — John 20" },
  { videoId: "CJGnJVCGZLo", title: "G.K. Chesterton on Faith and Doubt" },
  { videoId: "PKFJk0dXZhU", title: "When God Feels Hidden: Faith in the Darkness" },
];

const relatedPages = [
  { href: "/christian-grief-guide", label: "Christian Grief Guide" },
  { href: "/apologetics", label: "Christian Apologetics" },
  { href: "/faith", label: "Theology of Faith" },
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/prayer", label: "Prayer" },
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

export default function ChristianDoubtGuidePage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<DBTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [doubtQuestion, setDoubtQuestion] = useState("");
  const [whatHelped, setWhatHelped] = useState("");
  const [wheresYourFaith, setWheresYourFaith] = useState("");

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
    if (!doubtQuestion.trim()) return;
    const entry: DBTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      doubtQuestion: doubtQuestion.trim(),
      whatHelped: whatHelped.trim(),
      wheresYourFaith: wheresYourFaith.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setDoubtQuestion("");
    setWhatHelped("");
    setWheresYourFaith("");
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

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Faith &amp; Doctrine
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Faith Through Doubt: A Christian Guide to Honest Questioning
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Doubt is not the opposite of faith. It is one element of faith — the honest acknowledgment of what is not yet
          fully seen or understood. Thomas demanded evidence and received it. Job argued his case with God and was
          vindicated. The father cried &ldquo;I believe; help my unbelief&rdquo; and Jesus answered him.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of doubt, the three types of doubt and their different remedies, the voices
          who have wrestled most honestly with faith&rsquo;s hard questions, and the practices that keep faith alive
          while the questions remain open.
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
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Doubt
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on doubt, faith, and honest questioning &mdash; from
              Thomas&rsquo;s demand for evidence to the hiddenness of God in Psalm 44.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Doubt That Deepens Faith
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single conviction: doubt brought honestly to God is not the
                end of faith but one of its most formative passages. Thomas went from refusal to &ldquo;My Lord and my
                God.&rdquo; Job went from protest to encounter. Habakkuk went from lament to trust. The person who
                brings their honest doubts to God &mdash; who keeps showing up even when showing up feels hollow &mdash;
                is practicing the most ancient and demanding form of faith. And the God who met Thomas in the upper room
                has not stopped meeting doubters in theirs.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices for the Doubting Believer
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Doubt is not resolved by willpower or by suppression. These six practices create the conditions for
              honest engagement and, in time, for doubt to deepen rather than destroy faith.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices on Doubt
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six thinkers and writers who have wrestled most honestly with the hard questions of Christian faith &mdash;
              and whose wrestling produced deeper trust rather than departure.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.work}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Doubt
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts that speak directly into the experience of honest questioning &mdash; from Thomas at the
              tomb to Habakkuk&rsquo;s opening complaint.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice for doubt:</strong> take Mark 9:24 and pray it as your own
                prayer each morning this week: &ldquo;I do believe; help me overcome my unbelief.&rdquo; You do not
                have to feel certain to pray it. The prayer is designed to be prayed from inside uncertainty, by someone
                who has not yet arrived. Jesus answered it then. He answers it now.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Doubt Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Write a specific doubt or question honestly. Record what has helped even a little. Then name where your
              faith still stands &mdash; even if it is only a thread. Entries are saved privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="dbt-question" style={labelStyle}>The doubt or question I am carrying</label>
                <textarea
                  id="dbt-question"
                  value={doubtQuestion}
                  onChange={e => setDoubtQuestion(e.target.value)}
                  rows={3}
                  placeholder="Write it as specifically as you can. Not a vague unease but the actual question: Why did God not answer that prayer? How can suffering be consistent with a good God? Why does faith feel absent?..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name the doubt precisely. A named question can be engaged; a vague unease cannot.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="dbt-helped" style={labelStyle}>What has helped, even a little</label>
                <textarea
                  id="dbt-helped"
                  value={whatHelped}
                  onChange={e => setWhatHelped(e.target.value)}
                  rows={2}
                  placeholder="A person, a Scripture, a book, a moment of honest prayer, a conversation — anything that moved the needle even slightly..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Even small lights are worth recording. They show which direction is toward faith.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="dbt-faith" style={labelStyle}>Where my faith still stands</label>
                <textarea
                  id="dbt-faith"
                  value={wheresYourFaith}
                  onChange={e => setWheresYourFaith(e.target.value)}
                  rows={2}
                  placeholder="Even if it is only: I believe Jesus existed. I believe the resurrection happened. I believe God is there even when I cannot feel him..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Start with what you can affirm, however small. That is enough to pray from.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!doubtQuestion.trim()}
                style={{
                  background: doubtQuestion.trim() ? TEAL : BORDER,
                  color: doubtQuestion.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: doubtQuestion.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Your questions are welcome here &mdash; honest doubt is better than performed certainty.
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Doubt or Question
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.doubtQuestion}</p>
                      </div>
                      {entry.whatHelped && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What Helped
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.whatHelped}</p>
                        </div>
                      )}
                      {entry.wheresYourFaith && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Where My Faith Still Stands
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.wheresYourFaith}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on doubt, faith, honest questioning, and the intellectual case for Christianity from scholars
              and pastors who have wrestled with the hard questions and stayed.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
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
            &ldquo;I do believe; help me overcome my unbelief.&rdquo; That prayer is enough. You do not need to have
            it together before you bring the doubt to Jesus. Thomas brought his demands. Job brought his accusations.
            The father brought his mixed faith. All of them were met. Bring yours.
          </p>
        </div>
      </main>
    </div>
  );
}
