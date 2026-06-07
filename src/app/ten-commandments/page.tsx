"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "commands" | "theologians" | "jesus" | "purpose" | "journal" | "videos";

const THEOLOGIANS = [
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Bishop of Hippo, North Africa",
    bio: "Augustine gave the Western church its primary framework for reading the commandments. He grouped them as 3 + 7 (three commandments concerning God, seven concerning neighbor) and embedded them within his theology of love. For Augustine, the commandments summarize what it means to love God with all one's being and neighbor as oneself. No one keeps the law by external compliance; the commandments expose the poverty of the will and drive us to grace.",
    quote: "Our heart is restless until it rests in Thee. The commandments show us what rest looks like in practice — and how far we are from it.",
    contribution: "Established the two-table structure (duties to God / duties to neighbor), linked law to love, and grounded obedience in grace rather than willpower. His moral theology shaped Western Christianity for a millennium."
  },
  {
    id: "aquinas",
    name: "Thomas Aquinas",
    era: "1225-1274",
    context: "Dominican friar, scholastic theologian",
    bio: "Aquinas situated the Decalogue within his threefold category of law: eternal law (God's reason), natural law (human participation in divine reason), and positive law (specific commands). The commandments, he argued, are an explicit expression of what natural law already implies — which is why all humans are morally accountable even without the Sinai revelation. For Aquinas, the commandments are not arbitrary divine decrees but rational norms that accord with human nature as God created it.",
    quote: "The precepts of the Decalogue are such as the reason of every man readily assents to as soon as they are proposed.",
    contribution: "Grounded the commandments in natural law, making them accessible to all people and cultures. His Summa Theologiae remains the definitive Catholic treatment and profoundly shaped Protestant moral theology as well."
  },
  {
    id: "luther",
    name: "Martin Luther",
    era: "1483-1546",
    context: "Augustinian monk, Reformer",
    bio: "Luther placed the Ten Commandments at the center of his catechetical program — the Large and Small Catechisms both open with the Decalogue. For Luther, the law has a primarily accusatory function: it reveals sin, shatters self-righteousness, and drives the sinner to Christ. He famously insisted that keeping the commandments perfectly is impossible, which is precisely their point. Yet for the Christian, the law also serves as a guide to thankful living in the freedom of the gospel.",
    quote: "The law was given not to make us righteous but to reveal to us our unrighteousness, that we might be humbled before God and cry out for mercy.",
    contribution: "Articulated two uses of the law (civil and spiritual) later expanded to three. Made the Decalogue central to Protestant education. His explanation of each commandment in the Small Catechism remains the standard Lutheran summary."
  },
  {
    id: "calvin",
    name: "John Calvin",
    era: "1509-1564",
    context: "French Reformer, pastor in Geneva",
    bio: "Calvin developed the most comprehensive Protestant treatment of the commandments in the Institutes of the Christian Religion and his Genevan Catechism. He emphasized the threefold use of the law: civil (restraining evil in society), pedagogical (revealing sin and driving to Christ), and normative (guiding the regenerate). The third use was Calvin's distinctive emphasis: the Christian uses the law as a lamp for the path of grateful obedience. Calvin's exposition reads each commandment as demanding not just outward compliance but inward transformation.",
    quote: "The law requires perfect love to God and our neighbors; therefore it condemns whatever we have that is not consistent with perfect love.",
    contribution: "Developed the three-fold use of the law, especially the third use as guide for Christian living. His expository method — reading each commandment both as prohibition and positive command — became standard in Reformed catechesis."
  },
  {
    id: "westminster",
    name: "Westminster Divines",
    era: "1643-1649",
    context: "Assembly of English and Scottish theologians",
    bio: "The Westminster Assembly produced the Larger and Shorter Catechisms (1647-1648), which contain the most detailed Protestant exposition of the Ten Commandments ever written. Each commandment is analyzed for duties required, sins forbidden, and the spiritual scope of the command — inner life as much as outward act. The Larger Catechism's treatment runs to dozens of questions per commandment. Their principle: 'where a duty is commanded, the contrary sin is forbidden; and where a sin is forbidden, the contrary duty is commanded.'",
    quote: "Where a duty is commanded, the contrary sin is forbidden; where a sin is forbidden, the contrary duty is commanded.",
    contribution: "Produced the most thorough systematic exposition of the commandments in Protestant history. The Westminster Standards remain the constitutional documents of Presbyterian and Reformed churches worldwide."
  }
];

const JESUS_ON_LAW = [
  {
    cmd: "You shall not murder",
    ref: "Matthew 5:21-26",
    color: "#DC2626",
    jesus_teaching: "Jesus extended the prohibition from the act of killing to the attitude of contempt. Anger harbored against a brother puts one 'in danger of the judgment.' Insults and contemptuous speech are not preliminary to murder — they share the same root. The commandment is not about behavior management but about the orientation of the heart toward others as image-bearers of God.",
    application: "Where do you treat people as less than human — in private thought, online speech, or political rhetoric? Jesus traces murder back to contempt, which means dehumanizing language is already a violation."
  },
  {
    cmd: "You shall not commit adultery",
    ref: "Matthew 5:27-30",
    color: "#7C3AED",
    jesus_teaching: "Jesus located the violation not in the act but in the desire: 'anyone who looks at a woman with lustful intent has already committed adultery with her in his heart.' The person who avoids the act while feeding the desire has not kept the commandment — they have merely managed its outer expression. The radical surgery Jesus prescribes ('if your eye causes you to sin, tear it out') is not literal but conveys the severity: cut off what feeds the desire.",
    application: "In a pornography-saturated culture, the heart-level nature of this commandment is both more condemning and more clarifying. Lust is not a victimless thought — it treats a person as an object, which is already the essence of the violation."
  },
  {
    cmd: "You shall not swear falsely",
    ref: "Matthew 5:33-37",
    color: "#0EA5E9",
    jesus_teaching: "The Jewish tradition had developed elaborate oath systems to signal when someone was really telling the truth — implying that ordinary speech could be less than truthful. Jesus cut through it: 'Let what you say be simply yes or no.' The need for oaths is itself evidence of a truthfulness deficit. A person of total integrity needs no oath because every word can be trusted equally.",
    application: "When do you use religious or formal language to add weight to statements that should simply be true? 'I promise' and 'I swear to God' often signal that ordinary speech is unreliable — which is the problem Jesus is addressing."
  },
  {
    cmd: "An eye for an eye",
    ref: "Matthew 5:38-42",
    color: "#F59E0B",
    jesus_teaching: "Lex talionis (eye for an eye) was originally a limiting principle — it prevented disproportionate revenge. Jesus pushed past limitation to renunciation: do not resist the evil person, turn the other cheek, go the extra mile. This is not passivity in the face of injustice — it is the refusal to let the other person's evil define your response. It requires something harder than retaliation: the willingness to absorb cost rather than escalate.",
    application: "The instinct to get even, match insult with insult, or 'defend yourself' online is precisely what Jesus forbids. Retaliation feels like justice; Jesus says it is the path of the world, not the kingdom."
  },
  {
    cmd: "Love your neighbor",
    ref: "Matthew 5:43-48",
    color: "#10B981",
    jesus_teaching: "The common tradition had added 'hate your enemy' to 'love your neighbor' — a natural extension if neighbor means 'those like me.' Jesus rejected the addition entirely. The Father sends rain on the just and the unjust; his children are to love with the same impartiality. Loving those who love you back is no achievement — even tax collectors do that. The standard is perfection: being as indiscriminate in love as God is.",
    application: "Who counts as your enemy — the political opponent, the difficult family member, the person who wronged you, the outgroup? Jesus says your posture toward them is the actual test of whether you have understood the law."
  }
];

const LAW_PURPOSES = [
  {
    id: "civil",
    title: "Civil / Curbing Use",
    latin: "Usus civilis",
    icon: "⚖️",
    color: "#3B82F6",
    description: "The law functions as a restraint on evil in society — not because it changes hearts, but because the threat of consequences curbs sinful behavior. Even those who do not believe in God are restrained by laws that reflect the commandments' moral framework. This is the law as external fence rather than internal transformation.",
    theologians: "Luther emphasized this use; it is shared by Reformed and Lutheran traditions.",
    implication: "Civil law and public order derive their moral foundation from the Decalogue. Even secular societies that reject God implicitly legislate many of the commandments' prohibitions because they correspond to natural law."
  },
  {
    id: "pedagogical",
    title: "Pedagogical / Mirror Use",
    latin: "Usus elenchticus",
    icon: "🪞",
    color: "#EF4444",
    description: "The law functions as a mirror that reveals sin and drives the sinner to Christ. Paul says 'through the law comes knowledge of sin' (Romans 3:20) and 'the law was our guardian until Christ came' (Galatians 3:24). The commandments do not produce righteousness — they produce consciousness of its absence. This is the law's most vital theological function in justification.",
    theologians: "Central for Luther; acknowledged in all Reformed confessions. The Heidelberg Catechism opens with three things: knowledge of sin, knowledge of redemption, knowledge of gratitude.",
    implication: "No one can be saved without the law's crushing verdict. Preaching that omits the law's demands produces a gospel without weight — people who accept Jesus as life improvement rather than rescue from condemnation."
  },
  {
    id: "normative",
    title: "Normative / Guide Use",
    latin: "Usus tertius",
    icon: "🧭",
    color: GREEN,
    description: "The third use — distinctive to Reformed theology, emphasized by Calvin — is the law as a guide for the regenerate Christian. After justification, the Christian uses the commandments not as a ladder to earn favor but as a lamp on the path of thankful obedience. The law tells the saved person what loving God and neighbor looks like in practice.",
    theologians: "Calvin's distinctive contribution; central to Reformed/Presbyterian ethics. Luther acknowledged it but de-emphasized it. The Westminster Larger Catechism is largely an extended meditation on this use.",
    implication: "Antinomianism (the idea that Christians are free from the law entirely) mistakes the abrogation of the law as a covenant of works for abrogation of the law as a rule of life. The Christian is free from law's condemnation but not from its guidance."
  },
  {
    id: "summary",
    title: "Jesus' Summary",
    latin: "Matthew 22:37-40",
    icon: "❤️",
    color: PURPLE,
    description: "When asked for the greatest commandment, Jesus did not recite one of the Ten — he synthesized all of them: Love the Lord your God with all your heart, soul, and mind. And love your neighbor as yourself. 'On these two commandments depend all the Law and the Prophets.' The commandments are not an arbitrary list of rules; they are a structured description of what it means to love God and neighbor in every domain of life.",
    theologians: "The Augustinian two-table structure is rooted here: the first four commandments concern love of God; the last six concern love of neighbor.",
    implication: "The question for each commandment is not 'what am I forbidden from doing?' but 'what would love of God and neighbor require here?' This transforms the commandments from restrictions into invitations."
  }
];

const COMMANDMENTS = [
  {
    n: 1,
    cmd: "You shall have no other gods before me",
    ref: "Exodus 20:3",
    color: "#3B82F6",
    meaning: "The first commandment establishes the fundamental posture of all human life: exclusive devotion to the God who rescued Israel from Egypt. 'Before me' can also be translated 'besides me' or 'in addition to me.' God claims total loyalty — not because he needs it but because any other loyalty is a lie that destroys.",
    applications: ["Ask: what am I most afraid to lose? What does my spending pattern reveal about my actual priorities? What would I refuse to give up even if God asked?", "Every idol is a good thing elevated to ultimate thing. Career, family, security, romance — these become idols when they become the primary source of identity, meaning, or security."],
    positiveForm: "Worship and love God with your whole self — exclusively and primarily.",
    catechism: "This commandment requires knowing, loving, and trusting God above all things.",
  },
  {
    n: 2,
    cmd: "You shall not make idols",
    ref: "Exodus 20:4-6",
    color: "#8B5CF6",
    meaning: "The second commandment forbids representing God through images. The ancient context: all surrounding cultures had physical representations of their gods. Israel's God cannot be captured or contained by human craft — he is beyond all created things. Any image reduces him to something manageable, which is the opposite of who he is.",
    applications: ["Modern application: we craft mental images of God rather than physical ones. The god who always agrees with me, who never judges, who exists to improve my life — these are idols made of imagination rather than wood.", "Theology matters: wrong ideas about God are second-commandment violations. Study who God actually is, not who you wish he were."],
    positiveForm: "Know and worship God as he has revealed himself in Scripture and in Jesus Christ.",
    catechism: "God is to be worshipped in the ways he has appointed, not invented by human imagination.",
  },
  {
    n: 3,
    cmd: "You shall not misuse the name of the Lord",
    ref: "Exodus 20:7",
    color: "#EF4444",
    meaning: "Taking God's name 'in vain' means emptying it of its weight — using it carelessly, falsely, or as a mere expression. The name represents the person. To misuse the name is to misrepresent the God who bears it. This includes profanity but extends much further: claiming God's endorsement for your agenda, casual religious language without substance, and performative Christianity.",
    applications: ["Saying 'God told me' when he didn't. Using religious language to impress others without authentic faith behind it. Invoking God's blessing on your preferences.", "This commandment especially condemns false prophecy, spiritual manipulation, and using the name of Christ to cover sin or claim authority you don't have."],
    positiveForm: "Speak of God seriously, truthfully, and with reverence — and let your life give weight to what you say.",
    catechism: "Hallow God's name by using it with reverence and calling on it in true prayer.",
  },
  {
    n: 4,
    cmd: "Remember the Sabbath day by keeping it holy",
    ref: "Exodus 20:8-11",
    color: "#F59E0B",
    meaning: "One day in seven is set apart — not for productivity but for rest and worship. God built rest into creation itself (Genesis 2:2-3). Sabbath is not merely practical (though rest is beneficial) — it is theological: you are not God, you cannot sustain everything, the world does not depend on your constant labor. Sabbath is an act of trust.",
    applications: ["Sabbath is the most violated commandment in modern life. The always-on economy, digital connectivity, and achievement culture make true rest feel irresponsible.", "What would it mean to practice a 24-hour period of genuine rest, worship, and delight — without work, productivity, or obligation?"],
    positiveForm: "Set one day apart for rest, worship, and delight in God and his gifts.",
    catechism: "Keep a holy rest from worldly labor and use the time for worship, service, and recreation in God.",
  },
  {
    n: 5,
    cmd: "Honor your father and your mother",
    ref: "Exodus 20:12",
    color: "#10B981",
    meaning: "'So that you may live long in the land' (Exodus 20:12) — the only commandment with a promise. Honoring parents is not simply obedience for children; it is the posture of respect toward the structure of authority God has embedded in human life. It shapes how we relate to all authority. The breakdown of this commandment produces a generation that honors nothing it did not create.",
    applications: ["Honor does not require obedience to abuse or evil. But it does require respect for the role and the person — even imperfect parents, even estranged parents.", "For adult children: care for aging parents, speak of them with respect, recognize what they gave you even imperfectly. For those with harmful parents: honoring is not the same as pretending abuse didn't happen."],
    positiveForm: "Show respect, care, and gratitude toward parents and those in legitimate authority.",
    catechism: "Honor those in positions of authority by respecting, obeying, and caring for them.",
  },
  {
    n: 6,
    cmd: "You shall not murder",
    ref: "Exodus 20:13",
    color: "#DC2626",
    meaning: "Jesus expanded the sixth commandment in Matthew 5:21-22: 'You have heard it said, Do not murder... But I say to you that everyone who is angry with his brother will be liable to judgment.' Murder is the end of a spectrum that begins with contempt. The commandment forbids not just the act but the attitude: the treatment of another human being as less than a person made in the image of God.",
    applications: ["Where in your life do you treat other humans as obstacles, objects, or less than? Social media contempt, dehumanizing rhetoric about political opponents, and racial prejudice all violate the spirit of this commandment.", "Pro-life ethics — caring for the unborn, the vulnerable, the immigrant, and the prisoner — all flow from the theological foundation that every human being is made in God's image."],
    positiveForm: "Protect, defend, and promote the life and dignity of every human being.",
    catechism: "Preserve your own life and the life of others; avoid all that endangers life.",
  },
  {
    n: 7,
    cmd: "You shall not commit adultery",
    ref: "Exodus 20:14",
    color: "#7C3AED",
    meaning: "The seventh commandment protects the covenant of marriage — a relationship that Scripture consistently uses as a picture of God's faithfulness to his people. Jesus extended it to the heart: 'anyone who looks at a woman lustfully has already committed adultery with her in his heart' (Matthew 5:28). The commandment addresses not just the act but the desire: treating another person as an object for your gratification.",
    applications: ["In a sexually saturated culture, this commandment calls for a counter-cultural discipline: fidelity in marriage, purity in thought, guarding of the eyes and mind.", "For the unmarried: the commandment is broader than adultery — it protects the sanctity of covenant sexuality in all its forms."],
    positiveForm: "Cultivate fidelity, purity of heart, and the sanctity of marriage and sexuality.",
    catechism: "Preserve chastity in heart, mind, speech, and conduct — your own and others'.",
  },
  {
    n: 8,
    cmd: "You shall not steal",
    ref: "Exodus 20:15",
    color: "#B45309",
    meaning: "Theft is taking what belongs to another. The commandment assumes the legitimacy of private property — a theological position: people have a right to the fruits of their labor and to what has been given to them. But it extends beyond direct theft: wage theft, fraud, plagiarism, unfair business practices, and taking advantage of those without power to resist are all violations of this commandment.",
    applications: ["What do you take that isn't yours? Time from your employer. Credit from others. Pirated content. Undeclared income. The application is wider than we usually admit.", "The positive form requires not just refraining from theft but actively ensuring justice — that people receive what is rightly theirs."],
    positiveForm: "Give everyone their due; pursue honest labor and generous sharing.",
    catechism: "Protect and advance the property and livelihood of your neighbor.",
  },
  {
    n: 9,
    cmd: "You shall not give false testimony",
    ref: "Exodus 20:16",
    color: "#0EA5E9",
    meaning: "In the original context: perjury in a legal proceeding, where false testimony could destroy an innocent person. The commandment protects truth as the foundation of community. Jesus sharpened it: 'Let your yes be yes and your no be no' (Matthew 5:37). Lying, exaggeration, misleading by omission, and false impression are all forms of false testimony.",
    applications: ["We live in an era of performative identity — curating a public image that misrepresents the private reality. Social media as a form of continuous false testimony about your actual life.", "This commandment covers gossip (spreading unverified harmful claims), flattery (saying what people want to hear rather than what is true), and reputation management (concealing what should be disclosed)."],
    positiveForm: "Speak truth, defend the reputation of others, and interpret their actions charitably.",
    catechism: "Speak the truth; protect the good name of your neighbor; interpret everything charitably.",
  },
  {
    n: 10,
    cmd: "You shall not covet",
    ref: "Exodus 20:17",
    color: "#6B7280",
    meaning: "The final commandment uniquely addresses the interior life — not actions but desires. Covetousness is the disordered desire for what belongs to another: their spouse, house, status, gifts, relationships, or opportunities. Paul says covetousness is idolatry (Colossians 3:5) because coveting displaces God as the source of sufficiency and looks to possessions and circumstances for what only God can provide.",
    applications: ["Comparison culture — social media, status competition, lifestyle inflation — is the perfect condition for the tenth commandment to be violated continuously and unconsciously.", "The antidote to covetousness is gratitude: the deliberate naming of what is already given. You cannot simultaneously covet what someone else has and be genuinely grateful for what you have."],
    positiveForm: "Cultivate contentment and gratitude; rejoice in what God has given others.",
    catechism: "Be content with your own; rejoice in the prosperity of your neighbor.",
  },
];

const TC_VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "The Ten Commandments — Tim Keller", channel: "Gospel in Life", description: "Keller's landmark series on the Ten Commandments — not as a burden but as a charter for the liberated life." },
  { videoId: "ej_6dVdJSIU", title: "The Law and the Gospel — R.C. Sproul", channel: "Ligonier Ministries", description: "How the Ten Commandments relate to grace, the gospel, and Christian living — not as a way to earn salvation but to know God." },
  { videoId: "4Eg_di-O8nM", title: "What the Ten Commandments Demand", channel: "Desiring God", description: "John Piper on how Jesus deepens the commandments from external behavior to heart motivation in the Sermon on the Mount." },
  { videoId: "gV9JugO_5Mk", title: "The Decalogue and Christian Ethics", channel: "The Gospel Coalition", description: "A theological introduction to how the Ten Commandments function as a moral framework for the New Testament church." },
];

export default function TenCommandmentsPage() {
  const [selected, setSelected] = useState(1);
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_ten-commandments_tab", "commands");
  const [selectedTheologian, setSelectedTheologian] = usePersistedState("vine_ten-commandments_selected_theologian", "augustine");
  const [selectedJesus, setSelectedJesus] = useState(0);

  const cmd = COMMANDMENTS.find(c => c.n === selected)!;
  const theologian = THEOLOGIANS.find(t => t.id === selectedTheologian)!;
  const jesusItem = JESUS_ON_LAW[selectedJesus];

  const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: "commands", label: "The Commands", icon: "📜" },
    { id: "theologians", label: "Theologians", icon: "🏛️" },
    { id: "jesus", label: "Jesus on the Law", icon: "✝️" },
    { id: "purpose", label: "Purpose of Law", icon: "⚖️" },
    { id: "journal", label: "My Journal", icon: "📓" },
    { id: "videos" as Tab, label: "Videos", icon: "▶️" },
  ];

  const [tcEntries, setTcEntries] = useState<{ id: string; date: string; command: string; obeyed: string; struggled: string }[]>(() => {
    try { const s = localStorage.getItem("vine_tc_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [tcForm, setTcForm] = useState({ command: "1st: No other gods", obeyed: "", struggled: "" });
  const [tcSaved, setTcSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_tc_entries", JSON.stringify(tcEntries)); }, [tcEntries]);
  function saveTcEntry() {
    if (!tcForm.obeyed.trim() && !tcForm.struggled.trim()) return;
    setTcEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...tcForm }, ...prev]);
    setTcForm({ command: "1st: No other gods", obeyed: "", struggled: "" });
    setTcSaved(true); setTimeout(() => setTcSaved(false), 2000);
  }
  function deleteTcEntry(id: string) { setTcEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Ten Commandments</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Not a ladder to earn God&apos;s favor &mdash; a charter for the liberated. God gave these commandments to people he had already redeemed, as a pattern for living in the freedom he had given them.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(tab => (
            <button type="button" key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: activeTab === tab.id ? GREEN : "transparent", color: activeTab === tab.id ? BG : MUTED, transition: "all 0.15s" }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "commands" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {COMMANDMENTS.map(c => (
                <button type="button" key={c.n} onClick={() => setSelected(c.n)}
                  style={{ width: "100%", background: selected === c.n ? `${c.color}15` : "transparent", border: `1px solid ${selected === c.n ? c.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: selected === c.n ? `${c.color}25` : "transparent", border: `1px solid ${selected === c.n ? c.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: selected === c.n ? c.color : MUTED, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{c.n}</div>
                  <span style={{ color: selected === c.n ? c.color : MUTED, fontWeight: 600, fontSize: 12, lineHeight: 1.4 }}>{c.cmd.split(' ').slice(0, 5).join(' ')}...</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${cmd.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${cmd.color}20`, border: `2px solid ${cmd.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: cmd.color, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{cmd.n}</div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{cmd.ref}</span>
                </div>
                <h2 style={{ color: cmd.color, fontWeight: 900, fontSize: 20, marginBottom: 20, lineHeight: 1.4 }}>{cmd.cmd}</h2>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{cmd.meaning}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>MODERN APPLICATIONS</div>
                  {cmd.applications.map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < cmd.applications.length - 1 ? 12 : 0 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: cmd.color, flexShrink: 0, marginTop: 7 }} />
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{a}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>POSITIVE FORM</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cmd.positiveForm}</p>
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>CATECHISM</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cmd.catechism}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "theologians" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THEOLOGIANS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedTheologian(t.id)}
                  style={{ width: "100%", background: selectedTheologian === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedTheologian === t.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedTheologian === t.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{t.era}</div>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{theologian.name}</h2>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{theologian.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{theologian.context}</span>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>BIOGRAPHY</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{theologian.bio}</p>
                </div>

                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{theologian.quote}&rdquo;</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION TO DECALOGUE INTERPRETATION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{theologian.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jesus" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>The Sermon on the Mount: &ldquo;You Have Heard...But I Say&rdquo;</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>In Matthew 5:21-48, Jesus did not abolish the law but fulfilled it by showing its true interior demand. Each antithesis (&ldquo;You have heard it was said...but I say to you&rdquo;) penetrates past external compliance to the heart from which behavior flows.</p>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ width: 210, flexShrink: 0 }}>
                {JESUS_ON_LAW.map((item, i) => (
                  <button type="button" key={i} onClick={() => setSelectedJesus(i)}
                    style={{ width: "100%", background: selectedJesus === i ? `${item.color}18` : "transparent", border: `1px solid ${selectedJesus === i ? item.color + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: selectedJesus === i ? item.color : MUTED, fontWeight: 700, fontSize: 13, lineHeight: 1.4 }}>{item.cmd}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 3 }}>{item.ref}</div>
                  </button>
                ))}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${jesusItem.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <h2 style={{ color: jesusItem.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{jesusItem.cmd}</h2>
                    <span style={{ background: `${jesusItem.color}20`, color: jesusItem.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{jesusItem.ref}</span>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>WHAT JESUS TAUGHT</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{jesusItem.jesus_teaching}</p>
                  </div>

                  <div style={{ background: BG, border: `1px solid ${jesusItem.color}25`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: jesusItem.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>APPLICATION</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{jesusItem.application}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "purpose" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>Why Did God Give the Law?</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Reformed and Lutheran theology identify multiple functions the law serves. Understanding these purposes prevents two equal errors: legalism (earning salvation through obedience) and antinomianism (dismissing the law as irrelevant to Christians).</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {LAW_PURPOSES.map(p => (
                <div key={p.id} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 14, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{p.icon}</div>
                  <div style={{ marginBottom: 8 }}>
                    <h3 style={{ color: p.color, fontWeight: 900, fontSize: 16, margin: "0 0 4px" }}>{p.title}</h3>
                    <span style={{ background: `${p.color}15`, color: p.color, padding: "1px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{p.latin}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: "12px 0" }}>{p.description}</p>
                  <div style={{ background: BG, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>THEOLOGIANS</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{p.theologians}</p>
                  </div>
                  <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: p.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>IMPLICATION</div>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, margin: 0 }}>{p.implication}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Ten Commandments are not merely negative prohibitions — they describe a life of love toward God and neighbor. Journal where you obeyed and where you struggled.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Commandment Journal</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Which commandment</label>
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {["1st: No other gods", "2nd: No idols", "3rd: Name in vain", "4th: Sabbath", "5th: Honor parents", "6th: No murder", "7th: No adultery", "8th: No stealing", "9th: No false witness", "10th: No coveting"].map(c => (
                    <button type="button" key={c} onClick={() => setTcForm(f => ({ ...f, command: c }))}
                      style={{ padding: "6px 12px", borderRadius: 20, border: `1px solid ${tcForm.command === c ? GREEN : BORDER}`, background: tcForm.command === c ? `${GREEN}20` : "transparent", color: tcForm.command === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Where I obeyed / lived it today</label>
                <textarea value={tcForm.obeyed} onChange={e => setTcForm(f => ({ ...f, obeyed: e.target.value }))} rows={2}
                  placeholder="A specific moment of obedience, even small..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Where I struggled or failed</label>
                <textarea value={tcForm.struggled} onChange={e => setTcForm(f => ({ ...f, struggled: e.target.value }))} rows={2}
                  placeholder="Honest assessment — the law is meant to show us our need for grace..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveTcEntry}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {tcSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {tcEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Journal ({tcEntries.length})</h3>
                {tcEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deleteTcEntry(e.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ background: `${GREEN}20`, color: GREEN, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{e.command}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    </div>
                    {e.obeyed && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.7, margin: "0 0 4px" }}>{e.obeyed}</p>}
                    {e.struggled && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}><span style={{ color: MUTED, fontWeight: 600 }}>Struggled: </span>{e.struggled}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {TC_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
