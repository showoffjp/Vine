"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const tabs = [
  { id: "what-is-grace", label: "What Is Grace" },
  { id: "tulip", label: "TULIP: The Five Points" },
  { id: "arminian", label: "Arminian Response" },
  { id: "grace-and-law", label: "Grace and Law" },
  { id: "means", label: "Means of Grace" },
  { id: "videos", label: "Videos" },
];

const whatIsGraceItems = [
  {
    title: "Charis: Grace in the Greek New Testament",
    text: "The Greek word <em>charis</em> (grace) appears over 150 times in the New Testament and carries a cluster of meanings: gift, favor, goodwill, gratitude, beauty. In classical Greek, it described the favor a patron bestowed on a client &mdash; not because the client deserved it but because the patron was generous and the relationship was one of loving loyalty. Paul appropriates this word and radicalizes it: God&rsquo;s <em>charis</em> is not the favor of a patron who expects reciprocal loyalty from social equals. It is the free, unmerited, unconditional gift of a holy God to rebels who deserve only judgment. <em>Charis</em> in Paul is always unexpected, always unearned, always overwhelming.",
  },
  {
    title: "Chesed: The Old Testament Background",
    text: "The Hebrew word <em>chesed</em> (often translated &ldquo;steadfast love,&rdquo; &ldquo;lovingkindness,&rdquo; or &ldquo;covenant love&rdquo;) is the OT foundation for the NT concept of grace. <em>Chesed</em> is the loyal, persistent, covenant-keeping love of God toward Israel &mdash; a love that does not give up even when Israel is faithless (Lam 3:22-23). It is used 245 times in the OT and is one of the most theologically loaded words in the Hebrew Bible. God&rsquo;s grace in the NT is not a New Testament innovation; it is the fullest expression of the <em>chesed</em> that ran through the entire history of Israel&rsquo;s relationship with Yahweh.",
  },
  {
    title: "Common Grace vs. Saving Grace",
    text: "Theologians distinguish between two kinds of divine grace. <strong>Common grace</strong> is God&rsquo;s unmerited favor extended to all people, regardless of their spiritual status &mdash; the beauty of creation, the restraint of sin in society, the capacity for human beings to do civic good, and the blessings of sun and rain on the unjust as well as the just (Matt 5:45). Common grace does not save; it sustains. <strong>Saving (special) grace</strong> is God&rsquo;s redemptive favor directed toward those he brings to faith &mdash; involving regeneration, justification, adoption, sanctification, and glorification. The distinction matters because it explains how non-Christians can be brilliant, kind, and morally admirable without being reconciled to God, and it prevents Christians from treating grace as an exclusive club rather than a universal reality.",
  },
  {
    title: "Grace and Mercy: Not the Same Thing",
    text: "Grace and mercy are often conflated, but the distinction is theologically precise and pastorally important. <strong>Mercy</strong> withholds deserved punishment &mdash; God does not give us what we deserve. <strong>Grace</strong> gives us what we do not deserve &mdash; God gives us blessing, righteousness, sonship, and eternal life. Mercy is the negative side (punishment withheld); grace is the positive side (blessing given). Both are present in salvation: God in mercy does not condemn us for our sin; God in grace clothes us in Christ&rsquo;s righteousness and adopts us as children. The distinction keeps both concepts from collapsing into a vague divine niceness. God is not merely nice &mdash; he is both just and justifier (Rom 3:26).",
  },
  {
    title: "Ephesians 2:8-9: The Cornerstone Text",
    text: "Ephesians 2:8-9 is the NT&rsquo;s most concentrated statement on grace and salvation: &ldquo;For it is by grace you have been saved, through faith &mdash; and this is not from yourselves, it is the gift of God &mdash; not by works, so that no one can boast.&rdquo; Three things are clear. First, salvation&rsquo;s source is grace (<em>charis</em>) &mdash; God&rsquo;s unmerited favor, not human achievement. Second, salvation&rsquo;s instrument is faith &mdash; the receptive trust through which grace is received, not the meritorious act that earns it. Third, even faith itself is &ldquo;the gift of God&rdquo; &mdash; a contested but important reading that many Reformed theologians use to argue that saving faith is itself a grace given, not generated. The explicit exclusion of boasting defines the pastoral logic: grace levels every human hierarchy of spiritual achievement.",
  },
  {
    title: "Why Grace Is Not the Same as Being Nice",
    text: "A common cultural reduction equates &ldquo;grace&rdquo; with being non-judgmental, easy-going, or broadly affirming. But the biblical concept of grace is far more demanding and more costly. Grace begins with the full acknowledgment of sin &mdash; it requires that we honestly face what we are and what we deserve before we can receive what we have been freely given. Grace is not cheap (Dietrich Bonhoeffer&rsquo;s phrase &ldquo;cheap grace&rdquo; describes the counterfeit). It cost the death of the Son of God. It produces not complacency but profound gratitude that transforms behavior. As Titus 2:11-12 puts it: &ldquo;the grace of God...teaches us to say no to ungodliness and worldly passions, and to live self-controlled, upright, and godly lives.&rdquo; Real grace teaches; it does not excuse.",
  },
];

const tulipItems = [
  {
    letter: "T",
    title: "Total Depravity",
    color: GOLD,
    text: "Total depravity does not mean that humans are as sinful as they could be in every behavior &mdash; it means that sin has affected every part of human nature: intellect, will, emotions, desires, and relationships. No part of the person is left untouched. The will is in bondage to sin (Luther&rsquo;s <em>Bondage of the Will</em>): unregenerate people cannot and will not choose God apart from grace. Key texts: Rom 3:10-12 (none righteous, none who seeks God); John 6:44 (no one can come to Christ unless the Father draws him); Eph 2:1-3 (dead in trespasses and sins). This is the foundation of the entire Calvinist system: because humans cannot initiate their own salvation, God must act first, entirely, and effectually.",
  },
  {
    letter: "U",
    title: "Unconditional Election",
    color: GREEN,
    text: "God chose the elect before the foundation of the world (Eph 1:4-5) &mdash; not based on foreseen faith, foreseen virtue, or any condition in the human being, but according to God&rsquo;s sovereign will and good pleasure alone. Election is &ldquo;unconditional&rdquo; precisely because no human condition triggers or merits it. Key texts: Rom 9:11-16 (Jacob loved, Esau hated before birth &mdash; &ldquo;not because of works but because of him who calls&rdquo;); Acts 13:48 (as many as were appointed to eternal life believed). The Arminian response argues that election is conditional on foreknown faith (1 Pet 1:2) &mdash; God elects those he foreknows will freely respond. This is the central point of Calvinist-Arminian disagreement.",
  },
  {
    letter: "L",
    title: "Limited (Definite/Particular) Atonement",
    color: BLUE,
    text: "Christ&rsquo;s atoning work was specifically intended and effectively accomplished for the elect. Jesus did not merely make salvation possible for all; he actually secured salvation for those given to him by the Father. &ldquo;Definite atonement&rdquo; or &ldquo;particular redemption&rdquo; are preferred terms. Key texts: John 10:11 (lays down life &ldquo;for the sheep&rdquo; &mdash; a particular group); John 17:9 (prays for those the Father gave him, &ldquo;not for the world&rdquo;); Eph 5:25 (Christ loved the church and gave himself up &ldquo;for her&rdquo;). This is the most disputed of the five points &mdash; many who accept TUIP reject L and are called &ldquo;four-point Calvinists&rdquo; or Amyraldians. Arminian texts like 1 John 2:2 (&ldquo;propitiation for the sins of the whole world&rdquo;) are cited against it.",
  },
  {
    letter: "I",
    title: "Irresistible (Effectual) Grace",
    color: PURPLE,
    text: "When God purposes to save someone, his grace effectively and certainly accomplishes its goal. This is not grace forced on an unwilling will but a transformation of the will so that the person freely, gladly, and inevitably comes to Christ. Augustine: our heart is restless until it rests in God. Key texts: John 6:37 (all the Father gives Christ will come to him); Phil 2:13 (God works in you both to will and to act); Acts 16:14 (the Lord opened Lydia&rsquo;s heart to pay attention to Paul). The Arminian counter-text is Acts 7:51 (&ldquo;you always resist the Holy Spirit&rdquo;) &mdash; demonstrating that grace can genuinely be resisted. The Calvinist distinction is between the general call (which can be resisted) and the effectual/inward call (which achieves its purpose).",
  },
  {
    letter: "P",
    title: "Perseverance of the Saints",
    color: TEAL,
    text: "Those whom God has genuinely regenerated and elected will persevere in faith to the end and cannot ultimately fall away and lose their salvation. This is not sinless perfection &mdash; the elect stumble and sin &mdash; but they do not finally and completely apostatize. Key texts: John 10:28-29 (no one can snatch them from Christ&rsquo;s hand); Rom 8:38-39 (nothing can separate us from the love of God); Phil 1:6 (he who began a good work will bring it to completion). The Arminian counter-texts are the warning passages of Hebrews (6:4-6; 10:26-31), which describe real danger of falling away. Both sides take both assurance and warning seriously; they differ on whether the warnings describe genuine believers or apparent believers.",
  },
  {
    letter: "",
    title: "Historical Context: The Arminian Remonstrance (1610)",
    color: GOLD,
    text: "The five points of Calvinism were not formulated in the abstract. They were the response of the Synod of Dort (1618-1619) to the five articles of the Arminian Remonstrance (1610), submitted by followers of Jacob Arminius after his death. The Remonstrants affirmed: (1) conditional election based on foreknown faith; (2) general atonement for all; (3) the necessity of grace for salvation; (4) resistible grace; (5) the possibility of falling away. Dort&rsquo;s response was TULIP, point by point. Understanding this history is essential: TULIP was a polemical response, not a comprehensive statement of Christian faith. Calvinism is not only TULIP; Arminianism is not only the denial of TULIP. Both are rich theological traditions.",
  },
];

const arminiamItems = [
  {
    title: "Jacob Arminius and the Remonstrance",
    text: "Jacob Arminius (1560-1609) was a Dutch Reformed theologian who became increasingly troubled by what he saw as the fatalistic and pastoral problems of strict Calvinist predestination. After his death, his followers formulated the Five Articles of the Remonstrance (1610), challenging the deterministic features of high Calvinism: unconditional election, limited atonement, irresistible grace, and the impossibility of apostasy. Arminius himself never fully systematized his views, and the Arminian tradition has developed considerably beyond his own writings. His central concern was preserving genuine human responsibility in the face of divine sovereignty &mdash; a concern he believed strict Calvinism could not coherently maintain.",
  },
  {
    title: "Prevenient Grace: Restoring the Will",
    text: "The cornerstone of Arminian soteriology is the doctrine of <strong>prevenient grace</strong> (from Latin <em>praevenire</em> &mdash; &ldquo;to go before&rdquo;). Because all humans are spiritually dead and unable to respond to God on their own (Rom 3:11), God graciously goes before every person, convicting them of sin, awakening spiritual awareness, and genuinely making it possible for them to respond to the gospel. Prevenient grace does not save &mdash; it restores enough free will for a real choice. John Wesley called it &ldquo;the grace that goes before all grace&rdquo; and grounded it in Christ&rsquo;s work, which benefits all humanity (Titus 2:11 &mdash; &ldquo;the grace of God...appeared to all people&rdquo;). This preserves the total necessity of grace while maintaining genuine human freedom.",
  },
  {
    title: "Conditional Election and General Atonement",
    text: "Arminians hold that God&rsquo;s election is <strong>conditional</strong> on foreknown faith. God foreknows (not merely foreordains) who will freely respond to the gospel, and elects them on that basis (1 Pet 1:2 &mdash; &ldquo;chosen...according to the foreknowledge of God&rdquo;). This preserves both the graciousness of election (God initiates via prevenient grace) and the genuine freedom of the human response. On the atonement, Arminians hold that Christ died for all people (1 John 2:2; 2 Pet 3:9 &mdash; &ldquo;not wishing that any should perish&rdquo;), making salvation genuinely available to all. The atonement is universal in scope but particular in application &mdash; effective only for those who believe.",
  },
  {
    title: "The Wesley-Whitefield Debate",
    text: "The great evangelical awakening of the eighteenth century produced one of Christianity&rsquo;s most famous theological friendships and debates. George Whitefield was a high Calvinist; John Wesley was an Arminian. Both preached with extraordinary power and genuine partnership in the gospel. Their public disagreement over predestination was sharp and sometimes bitter, but they maintained personal respect. Wesley&rsquo;s famous sermon &ldquo;Free Grace&rdquo; (1739) directly attacked Calvinist predestination as making God the author of sin and destroying the moral motivation for holy living. Whitefield&rsquo;s response defended the doctrines of grace with equal passion. Neither persuaded the other. Their debate continues to define the evangelical landscape.",
  },
  {
    title: "Resistible Grace and Conditional Perseverance",
    text: "Arminians hold that grace is genuinely resistible &mdash; God woos, enables, and draws, but does not compel (Acts 7:51; Matt 23:37 &mdash; &ldquo;how often I wanted to gather your children...but you were not willing&rdquo;). A real choice requires a real possibility of refusal. On perseverance, classical Arminianism holds that genuine believers can apostatize &mdash; the warning passages of Hebrews (6:4-6; 10:26-31) describe real danger for real believers. Wesley himself held that backsliding was possible but that God&rsquo;s grace was always available to restore the fallen. This does not produce insecurity &mdash; Wesleyans typically emphasize the assurance of the Spirit&rsquo;s present witness (Rom 8:16) rather than the logical certainty of perseverance.",
  },
  {
    title: "An Intramural Debate, Not a Salvation Issue",
    text: "The Calvinist-Arminian debate is one of the most significant in Protestant history, but it is crucial to understand what it is not: it is not a debate about whether salvation is by grace through faith. Both traditions affirm that salvation is entirely by grace, that humans contribute nothing meritorious to their justification, and that faith is the only instrument of receiving grace. The debate is about the mechanics and scope of grace &mdash; how God&rsquo;s sovereignty and human freedom relate. Both Calvinists and Arminians have produced great saints, faithful missionaries, and rigorous theologians. Treating this debate as a test of orthodoxy distorts both traditions and damages evangelical unity on the ground that actually matters.",
  },
];

const graceLawItems = [
  {
    title: "The Antinomian Trap: Grace Means No Rules",
    text: "Antinomianism (from Greek <em>anti</em> &mdash; against, <em>nomos</em> &mdash; law) is the heresy that grace abolishes moral obligation. If we are saved by grace alone, not by works, then the moral law no longer applies to us &mdash; we are free to sin. Paul anticipates this objection in Romans 6:1: &ldquo;Shall we go on sinning so that grace may increase?&rdquo; and answers with an emphatic &ldquo;By no means!&rdquo; The antinomian error mistakes the ground of justification (grace alone) for the shape of the justified life (transformed by the Spirit). Grace does not remove obligation; it changes its basis. We obey not to earn standing with God but because we already have standing. The indicative of grace produces the imperative of obedience.",
  },
  {
    title: "The Legalist Trap: Rules Earn Grace",
    text: "Legalism is the error that moral performance earns or maintains God&rsquo;s favor. It treats grace as the reward for sufficient law-keeping rather than the free gift that precedes and enables any good work. Paul&rsquo;s Galatian crisis was precisely this: having begun in grace (faith in Christ), were the Galatians now being completed by human effort (circumcision, law-keeping)? Paul&rsquo;s response was severe: if righteousness comes through the law, Christ died for nothing (Gal 2:21). Legalism is spiritually crushing because the law never satisfied demands enough to produce assurance, and it is theologically incoherent because it treats human performance as contributing to what God alone can provide. Grace and merit are mutually exclusive categories.",
  },
  {
    title: "Luther's Three Uses of the Law",
    text: "Martin Luther articulated three functions of the moral law that clarify its continuing role in the Christian life. The <strong>civil use</strong> (usus civilis): the law restrains sin in society &mdash; the threat of punishment curbs the grossest evils even in non-Christians. The <strong>convicting use</strong> (usus elenchticus): the law exposes sin and drives the sinner to despair of self-righteousness and thus to Christ (Rom 3:20 &mdash; &ldquo;through the law we become conscious of our sin&rdquo;). The <strong>guiding use</strong> (usus didacticus/tertius usus legis): the law guides the regenerate person in the shape of holy living &mdash; not as a means of justification but as the revealed will of God for those who love him. Calvin emphasized the third use more than Luther, who worried about any mixing of law and gospel.",
  },
  {
    title: "Indicative and Imperative in Paul",
    text: "One of Paul&rsquo;s most characteristic theological moves is to ground ethical imperatives in gospel indicatives &mdash; what God has already done in Christ becomes the basis for what we are called to become. Romans 6: &ldquo;You are dead to sin and alive to God in Christ Jesus&rdquo; (indicative) &mdash; &ldquo;therefore do not let sin reign in your mortal body&rdquo; (imperative). Colossians 3: &ldquo;You have been raised with Christ&rdquo; (indicative) &mdash; &ldquo;set your hearts on things above&rdquo; (imperative). Ephesians 4: &ldquo;You were taught...to put off your old self&rdquo; (indicative) &mdash; &ldquo;put on the new self&rdquo; (imperative). The structure is always: who you ARE in Christ informs what you DO in Christ. Grace does not make obedience optional; it makes obedience possible and motivated by love rather than fear.",
  },
  {
    title: "The New Covenant: Law Written on the Heart",
    text: "Jeremiah 31:31-34 and Ezekiel 36:26-27 are the Old Testament&rsquo;s most explicit anticipations of the New Covenant relationship with God&rsquo;s law. Jeremiah: &ldquo;I will put my law in their minds and write it on their hearts.&rdquo; Ezekiel: &ldquo;I will give you a new heart and put a new spirit in you...I will put my Spirit in you and move you to follow my decrees.&rdquo; The New Covenant does not abolish the law&rsquo;s moral content; it relocates its motivating power from external coercion to internal transformation. The Spirit&rsquo;s work in regeneration and sanctification is precisely the fulfillment of these prophecies: the law is no longer a list of demands from outside but a desire from within, the shape of a renewed nature that delights in what God delights in.",
  },
  {
    title: "Grace as the Motivation for Obedience",
    text: "The deepest insight of Reformed and evangelical ethics is that grace motivates obedience rather than replacing it. Gratitude is the engine of holy living. Because we have been forgiven much, we love much (Luke 7:47). Because Christ has died for us, we live not for ourselves but for him (2 Cor 5:15). Because we have been adopted as children of God, we seek to honor our Father. This is neither antinomianism (no rules) nor legalism (rules earn standing) &mdash; it is the ethics of grace: obedience as the natural overflow of a heart that has been captured by the love of God. This is also why pastoral motivation matters: a congregation driven by fear of punishment will behave differently from one driven by gratitude for grace, even if they follow the same rules.",
  },
];

const meansItems = [
  {
    title: "What Are the Means of Grace?",
    text: "The means of grace are the God-ordained channels through which divine grace is ordinarily received and spiritual growth is nourished. They are not ways to earn grace but vehicles by which grace is conveyed. The language of &ldquo;means&rdquo; preserves two truths simultaneously: God is the only source of grace (it cannot be produced by human effort), and God has chosen to work through concrete, particular practices rather than bypassing human instrumentality. Grace is received, not achieved &mdash; but it is received through definite means. The classic Protestant list includes the Word, the sacraments, and prayer; Wesley expanded the list significantly.",
  },
  {
    title: "The Word: Preaching and Scripture",
    text: "The proclaimed and written Word of God is the primary means of grace in both Reformed and Wesleyan traditions. Romans 10:17 &mdash; &ldquo;faith comes from hearing, and hearing through the word of Christ.&rdquo; The Reformers placed the preached Word at the center of Protestant worship because they believed the Spirit works through the proclamation of the gospel to produce faith, conviction, repentance, and growth. Luther: the church is a &ldquo;mouth-house&rdquo; (Mundhaus) &mdash; constituted by the spoken Word. Scripture read, studied, memorized, and meditated upon is the ongoing nourishment of the life of grace. Hebrews 4:12 &mdash; &ldquo;the word of God is alive and active,&rdquo; which implies it is not merely information but a living instrument of transformation.",
  },
  {
    title: "The Sacraments: Baptism and the Lord's Supper",
    text: "The sacraments (or ordinances) are physical, visible acts that convey grace through the promise of God attached to them. Reformed theology (Calvin): the sacraments are visible words &mdash; seals of the covenant promise, through which the Spirit uses material signs to confirm and strengthen faith. Lutheran theology: the sacraments are genuine means of grace where Christ is truly present and active. Baptism marks entry into the covenant community; the Lord&rsquo;s Supper is the ongoing meal of remembrance, communion, and anticipation. Both traditions (against mere memorialism) insist that sacraments are not merely symbols &mdash; they do something, because God has promised to work through them. The question is precisely <em>what</em> they do and how, which generates the deepest ecumenical divisions.",
  },
  {
    title: "Prayer, Fasting, and Community",
    text: "John Wesley catalogued the means of grace in greater detail than any other Protestant theologian. His list included: the Lord&rsquo;s Supper, family and private prayer, Scripture reading and searching, fasting, and Christian conference (intentional fellowship). His class meetings &mdash; small groups of twelve meeting weekly for accountability, mutual confession, and exhortation &mdash; were designed as structured means of grace that prevented the Wesleyan revival from becoming merely emotional without producing lasting transformation. Wesley&rsquo;s distinctive contribution was institutionalizing community as a means of grace: God&rsquo;s grace works through the mutual accountability and encouragement of the covenant community in addition to the individual&rsquo;s private practices.",
  },
  {
    title: "The Reformed Tradition: Word and Sacrament",
    text: "The Reformed tradition characteristically emphasizes Word and sacrament as the two primary marks of the true church (along with church discipline). Calvin&rsquo;s <em>Institutes</em> devote significant attention to the Lord&rsquo;s Supper as a genuine means of grace by which the believer spiritually feeds on Christ. Calvin&rsquo;s position (the &ldquo;spiritual presence&rdquo; view) is carefully distinguished from both Luther&rsquo;s sacramental union and the memorialist position of Zwingli: Christ is truly present in the Supper but in a spiritual (pneumatic), not corporal, manner. The Spirit lifts the believer&rsquo;s heart to heaven where Christ is, and Christ communicates himself through the eating and drinking. For Calvin, regular reception of the Lord&rsquo;s Supper was essential to spiritual health.",
  },
  {
    title: "Why Grace Is Received Through Concrete Practices",
    text: "The doctrine of the means of grace resists two opposing errors. Against quietism (do nothing &mdash; the Spirit does everything), it insists that God has ordained specific practices as channels of grace and that neglecting them is not spiritual humility but spiritual negligence. Against activism (spiritual growth is a human project), it insists that the practices are means through which grace is received, not techniques by which grace is produced. The Puritan tradition spoke of &ldquo;waiting on God in the means of grace&rdquo; &mdash; an image that captures both the active posture of the one who attends and the passivity of one who waits for what only God can give. Spiritual disciplines are not the ladder we climb to God; they are the place where we position ourselves to be found by him.",
  },
];

const videoItems = [
  {
    videoId: "YoHKTe_v0X4",
    title: "Tim Keller on Grace",
    description: "Tim Keller unpacks the radical nature of grace &mdash; why it is neither cheap nor obvious, and how it differs from every human religion&rsquo;s logic of earning.",
  },
  {
    videoId: "sBDbgFwxsHA",
    title: "RC Sproul &mdash; What Is Grace?",
    description: "RC Sproul offers a systematic and pastoral explanation of grace: its meaning in Scripture, its relationship to mercy, and why Ephesians 2:8-9 is the cornerstone of Christian salvation.",
  },
  {
    videoId: "pMSmzhgCNnA",
    title: "John Piper on Irresistible Grace",
    description: "John Piper explains the Reformed doctrine of effectual calling &mdash; what it means for grace to be irresistible, and why this doctrine produces humility rather than fatalism.",
  },
];

function getTabColor(tabId: string): string {
  switch (tabId) {
    case "what-is-grace": return GOLD;
    case "tulip": return PURPLE;
    case "arminian": return TEAL;
    case "grace-and-law": return GREEN;
    case "means": return BLUE;
    case "videos": return MUTED;
    default: return MUTED;
  }
}

export default function ChristianTheologyOfGracePage() {
  const [activeTab, setActiveTab] = useState("what-is-grace");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const activeColor = getTabColor(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Christian Theology</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Theology of Grace</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 660 }}>
          The doctrine of grace &mdash; from the Hebrew <em>chesed</em> to Ephesians 2:8-9, from TULIP to prevenient grace, from law and gospel to the means by which grace is received in the life of the Christian.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t.id ? getTabColor(t.id) : BORDER}`,
                background: activeTab === t.id ? getTabColor(t.id) + "28" : "transparent",
                color: activeTab === t.id ? getTabColor(t.id) : MUTED,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: activeTab === t.id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB: What Is Grace */}
        {activeTab === "what-is-grace" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GOLD + "18", border: `1px solid ${GOLD}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GOLD, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;For it is by grace you have been saved, through faith &mdash; and this is not from yourselves, it is the gift of God.&rdquo; &mdash; Ephesians 2:8
              </p>
            </div>
            {whatIsGraceItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: TULIP */}
        {activeTab === "tulip" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                TULIP was not a systematic theology written in advance &mdash; it was a point-by-point response to the Arminian Remonstrance of 1610, formulated at the Synod of Dort (1618&ndash;1619). Understanding the debate it was answering is essential for understanding what it claims.
              </p>
            </div>
            {tulipItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  {item.letter && (
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: item.color + "28",
                      border: `2px solid ${item.color}60`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      color: item.color, fontWeight: 900, fontSize: "1.1rem",
                    }}>
                      {item.letter}
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8, color: item.color || TEXT }}>{item.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB: Arminian Response */}
        {activeTab === "arminian" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: TEAL + "18", border: `1px solid ${TEAL}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: TEAL, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The Calvinist-Arminian debate is an intramural evangelical disagreement, not a salvation issue. Both traditions affirm that salvation is entirely by grace through faith and that humans contribute nothing meritorious to justification.
              </p>
            </div>
            {arminiamItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Grace and Law */}
        {activeTab === "grace-and-law" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#6fcf97", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Grace does not make obedience optional; it makes obedience possible and motivated by love rather than fear. The antinomian and the legalist are mirror errors, and the gospel corrects both.
              </p>
            </div>
            {graceLawItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Means of Grace */}
        {activeTab === "means" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: BLUE + "18", border: `1px solid ${BLUE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: BLUE, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Spiritual disciplines are not the ladder we climb to God; they are the place where we position ourselves to be found by him. Grace is received, not achieved &mdash; but it is received through concrete, God-ordained practices.
              </p>
            </div>
            {meansItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoItems.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: activeColor, margin: "0 0 0.4rem" }}>{v.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
