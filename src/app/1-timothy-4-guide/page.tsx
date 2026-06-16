"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";

type Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    id: "context",
    title: "Historical and Literary Context",
    color: GREEN,
    body: "First Timothy is a pastoral letter written by the apostle Paul to his young delegate Timothy, who was stationed in Ephesus to guard the church against false teaching and to order its life according to the gospel. Chapter 4 sits at the heart of the letter, following Paul&rsquo;s instructions on worship and leadership (chapters 2&ndash;3) and preceding his further instructions on specific groups within the congregation (chapters 5&ndash;6). The chapter is remarkable for its combination of doctrinal polemic, personal pastoral charge, and direct commands to Timothy about his own life and ministry.",
  },
  {
    id: "false-teaching",
    title: "The False Teaching at Ephesus",
    color: PURPLE,
    body: "The false teachers confronted in 1 Timothy 4 practiced a form of asceticism &mdash; the denial of things God created and declared good, particularly marriage and certain foods. This was not simple dietary restriction; it was a theological position that treated physical creation as spiritually inferior or even evil. Paul&rsquo;s response is not to rebuke ascetic practice as such, but to rebuke the doctrinal error that underlies it: the implicit denial that God&rsquo;s creation is good. The theological ground for this rebuttal is Genesis 1: &ldquo;everything created by God is good, and nothing is to be rejected if it is received with thanksgiving&rdquo; (v. 4).",
  },
  {
    id: "timothy",
    title: "Timothy&rsquo;s Personal Situation",
    color: GOLD,
    body: "A recurring concern in this chapter is Timothy&rsquo;s youth and the vulnerability that youth creates in ministry leadership. Paul&rsquo;s command &mdash; &ldquo;let no one despise you for your youth&rdquo; (v. 12) &mdash; presupposes that the risk was real. Timothy was probably in his thirties, which in the ancient world still counted as young for a position of authority in the congregation. Paul&rsquo;s answer is not to tell Timothy to wait until he is older, but to set an example in every dimension of visible Christian life: speech, conduct, love, faith, and purity. The answer to age-based contempt is exemplary character, not patience.",
  },
  {
    id: "scripture",
    title: "The Public Reading of Scripture",
    color: TEAL,
    body: "Among Paul&rsquo;s most striking commands in this chapter is the instruction to devote himself to &ldquo;the public reading of Scripture, to exhortation, to teaching&rdquo; (v. 13). The public reading of Scripture was central to synagogue worship and was carried over into early Christian assembly. In a world where most people were illiterate and copies of texts were rare, the gathered reading of the Word was the primary way congregations encountered it. Paul&rsquo;s inclusion of the public reading as the first item in this triad &mdash; before exhortation and teaching &mdash; signals that the text itself, heard together, has priority.",
  },
];

const KEY_THEMES = [
  {
    id: 1,
    title: "The Spirit&rsquo;s Prediction of Apostasy",
    color: PURPLE,
    icon: "S",
    summary: "The Holy Spirit expressly foretells that in later times some will depart from the faith",
    detail: "Paul opens the chapter with unusual solemnity: &ldquo;the Spirit expressly says&rdquo; (v. 1) &mdash; invoking the explicit testimony of the Holy Spirit to give prophetic weight to the warning. The departure from the faith is not merely intellectual skepticism but active defection, driven by &ldquo;deceitful spirits and teachings of demons&rdquo; (v. 1). The false teaching has a spiritual origin behind its human teachers. The teachers themselves are described as having their consciences seared, as if cauterized past the capacity for conviction. Apostasy is not always dramatic; it can look like sophisticated spiritual development.",
    verses: ["1 Timothy 4:1-2"],
  },
  {
    id: 2,
    title: "Forbidding Marriage and Foods",
    color: GOLD,
    icon: "F",
    summary: "Asceticism that denies God&rsquo;s creation is demonic, not holy",
    detail: "The specific content of the false teaching is ascetic: forbidding marriage and requiring abstinence from foods (v. 3). This is not the voluntary asceticism of personal discipline; it is the mandatory denial of things God created. Paul&rsquo;s counter-argument is rooted in creation theology: God created these things &ldquo;to be received with thanksgiving by those who believe and know the truth&rdquo; (v. 3). The Eucharistic echo is intentional &mdash; thanksgiving (eucharistia) is the proper posture toward all of God&rsquo;s gifts. There is a kind of false spirituality that confuses rejecting creation with holiness. Paul names it demonic.",
    verses: ["1 Timothy 4:3-5"],
  },
  {
    id: 3,
    title: "Train Yourself for Godliness",
    color: GREEN,
    icon: "T",
    summary: "Godliness, not physical discipline alone, has value for all of life and the life to come",
    detail: "The training metaphor (v. 7 &mdash; the Greek gymnaze, from which we get &lsquo;gymnasium&rsquo;) is deliberately chosen from the athletic world. Paul is not denigrating physical training; he acknowledges it has &ldquo;some value.&rdquo; But the comparison clarifies that spiritual training &mdash; godliness &mdash; has value in every sphere and for every age of life, including the life to come. This is a strong evangelical claim: the spiritual disciplines are not optional accessories but the means of grace by which we are formed into the image of Christ. The labor and striving of v. 10 point to genuine effort, not passive reception.",
    verses: ["1 Timothy 4:7-10"],
  },
  {
    id: 4,
    title: "Let No One Despise Your Youth",
    color: TEAL,
    icon: "Y",
    summary: "The answer to age-based contempt is not waiting but exemplary character in every area of visible life",
    detail: "Paul does not tell Timothy to wait until he is old enough to be taken seriously. He tells him to become so obviously excellent in speech, conduct, love, faith, and purity that his youth becomes irrelevant. The list in v. 12 is a portrait of the whole Christian life made visible: public words (speech), daily life (conduct), disposition toward others (love), trust in God (faith), and moral integrity (purity). Young leaders who are despised are not helped by patience &mdash; they are helped by becoming undeniably exemplary in these five areas so that age ceases to be the most salient fact about them.",
    verses: ["1 Timothy 4:11-12"],
  },
  {
    id: 5,
    title: "Do Not Neglect the Gift",
    color: PURPLE,
    icon: "G",
    summary: "The spiritual gift given to Timothy through prophecy and the laying on of hands must be actively kept alive",
    detail: "Paul&rsquo;s command in v. 14 &mdash; &ldquo;do not neglect the gift you have&rdquo; &mdash; implies that spiritual gifts can be neglected, not just lost. The gift was given through prophecy and the laying on of hands by the council of elders, pointing to its public, ecclesial character. In 2 Timothy 1:6, Paul uses the stronger word &ldquo;fan into flame,&rdquo; suggesting that the danger is not a sudden extinguishing but a gradual cooling. The gift in view is likely Timothy&rsquo;s call and capacity for ministry, made vivid at his commissioning. Ministers must tend what they have been given.",
    verses: ["1 Timothy 4:14"],
  },
  {
    id: 6,
    title: "Devote Yourself to the Public Reading of Scripture",
    color: GOLD,
    icon: "R",
    summary: "The gathered reading of Scripture, exhortation, and teaching are the primary means of congregational formation",
    detail: "The triad of v. 13 &mdash; public reading, exhortation, teaching &mdash; describes the basic liturgical-catechetical pattern of early Christian worship. The &ldquo;public reading&rdquo; refers to the reading aloud of Scripture in the gathered assembly, a practice inherited from the synagogue and functioning as the primary means of biblical access for a largely illiterate congregation. Exhortation applies the text to the will and affections; teaching explains its meaning and implications for belief. The order matters: the text comes first, then its application. This pattern still governs faithful Christian gathered worship today.",
    verses: ["1 Timothy 4:13"],
  },
];

const VERSES = [
  {
    id: "vv1-5",
    range: "vv. 1&ndash;5",
    label: "The Spirit&rsquo;s Warning About Apostasy",
    color: PURPLE,
    content: "Now the Spirit expressly says that in later times some will depart from the faith by devoting themselves to deceitful spirits and teachings of demons, through the insincerity of liars whose consciences are seared, who forbid marriage and require abstinence from foods that God created to be received with thanksgiving by those who believe and know the truth.",
    exposition: [
      {
        heading: "The Spirit Expressly Says (v. 1)",
        body: "The adverb &ldquo;expressly&rdquo; (Greek: rh&ecirc;t&ocirc;s) is unique in the New Testament &mdash; it means &ldquo;in stated terms&rdquo; or &ldquo;explicitly.&rdquo; Paul is not speaking generally about spiritual trends; he is invoking a specific, clear prophetic disclosure from the Holy Spirit. This may refer to words of prophecy delivered in the early churches (compare Acts 20:29-30 and 2 Thessalonians 2:3). The departure is from &ldquo;the faith&rdquo; &mdash; the body of apostolic teaching &mdash; not from mere church attendance. One can leave orthodoxy while appearing visibly religious.",
      },
      {
        heading: "Deceitful Spirits and Teachings of Demons (v. 1)",
        body: "Behind the human teachers of error are spiritual forces. This is not a psychological diagnosis; it is a theological one. Paul locates the ultimate origin of false teaching in the demonic realm. This means that combating false teaching is always, at one level, spiritual warfare &mdash; requiring prayer, the Word, and the Spirit, not merely argument and refutation. The teachers themselves have &ldquo;seared consciences&rdquo; (v. 2), a vivid image of flesh burned past sensation &mdash; no longer capable of registering the warning signals of moral and doctrinal deviance.",
      },
      {
        heading: "Forbidding Marriage and Foods (vv. 3&ndash;4)",
        body: "The specific errors are ascetic: mandatory celibacy and mandatory dietary restriction. Paul&rsquo;s refutation is a creation argument: &ldquo;everything created by God is good, and nothing is to be rejected if it is received with thanksgiving&rdquo; (v. 4, echoing Genesis 1:31). This is not permission for excess; it is a theological argument that God&rsquo;s material creation is not spiritually inferior to some imagined &lsquo;pure&rsquo; spiritual realm. The created order, received with thanksgiving, is itself a form of worship. False spirituality often expresses itself as contempt for the material; genuine Christianity receives the physical world as gift.",
      },
      {
        heading: "Consecrated by the Word of God and Prayer (v. 5)",
        body: "Food is &ldquo;made holy by the word of God and prayer&rdquo; (v. 5). This is not a magical formula but a reference to the whole creation order established by God&rsquo;s word (Genesis 1) and to the practice of giving thanks at meals &mdash; the table prayer that names the giver behind the gift. When a believer gives thanks for food, they are enacting the truth that all of creation is the Lord&rsquo;s, received as his provision rather than grasped as their own. The Eucharist makes this explicit; the daily meal embodies the same truth.",
      },
    ],
  },
  {
    id: "vv6-10",
    range: "vv. 6&ndash;10",
    label: "A Good Servant of Christ Jesus",
    color: GREEN,
    content: "If you put these things before the brothers, you will be a good servant of Christ Jesus, being trained in the words of the faith and of the good doctrine that you have followed. Have nothing to do with irreverent, silly myths. Rather train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.",
    exposition: [
      {
        heading: "A Good Servant of Christ Jesus (v. 6)",
        body: "The first clause of v. 6 is a hinge: if Timothy puts the warnings of vv. 1&ndash;5 before the brothers, he will be a &ldquo;good servant of Christ Jesus.&rdquo; Good ministry, for Paul, begins with doctrinal fidelity. A good servant is not one who makes the congregation comfortable but one who sets before them what they need to hear, including warnings they might prefer to avoid. The servant is defined by whose service he is in &mdash; Christ Jesus &mdash; not by the approval of those he serves.",
      },
      {
        heading: "Nourished on the Words of Faith (v. 6)",
        body: "The word translated &ldquo;trained&rdquo; (NASB: &ldquo;constantly nourished&rdquo;) in v. 6 is the same root as the training metaphor in v. 7 (gymnaze). Timothy is to be continuously nourished on &ldquo;the words of the faith and of the good doctrine.&rdquo; This is not a one-time event &mdash; it is the ongoing, habitual diet of the minister&rsquo;s inner life. The minister who neglects the Word for the sake of practical ministry activity will eventually have nothing to give. What feeds the minister feeds the congregation.",
      },
      {
        heading: "Have Nothing to Do with Myths (v. 7)",
        body: "Paul&rsquo;s dismissal of &ldquo;irreverent, silly myths&rdquo; &mdash; the word &lsquo;silly&rsquo; (Greek: gra&ocirc;d&ecirc;s) literally means &lsquo;fit for old women,&rsquo; a cultural insult for credulous folk tales &mdash; is pointed. He is not being kind; he is being clear. Some things are not worth engaging at length. The minister who debates every speculative claim of the false teachers gives it more dignity than it deserves. The energy spent on irreverent myths is energy not spent on training for godliness. Paul&rsquo;s economy of attention is deliberate.",
      },
      {
        heading: "Train Yourself for Godliness (vv. 7&ndash;8)",
        body: "The athletic metaphor is precise: gymn&aacute;ze seauton &mdash; &ldquo;exercise yourself,&rdquo; &ldquo;train yourself.&rdquo; Physical training is disciplined, effortful, regular, and goal-oriented; spiritual training has the same structure. Godliness is not a disposition that simply develops; it is cultivated through specific practices &mdash; prayer, Scripture, corporate worship, self-examination, acts of love and service. The comparison with bodily training is not dismissive (&ldquo;bodily training is of some value&rdquo;) but clarifying: godliness has the same structure but infinitely greater scope and duration.",
      },
      {
        heading: "For the Present Life and the Life to Come (v. 8)",
        body: "The contrast between bodily training and godliness is temporal as well as qualitative: physical fitness has benefits in this life only; godliness has benefits both for the present life and for the life to come. This is a remarkable claim. Godliness is not merely eschatological preparation &mdash; it shapes the quality of present life as well. The person formed by the spiritual disciplines lives more fully, loves more truly, and suffers more gracefully in the present, as well as inheriting the age to come.",
      },
      {
        heading: "Toil and Strive (v. 10)",
        body: "Verse 10 is bracing: &ldquo;For to this end we toil and strive.&rdquo; Both words &mdash; &lsquo;toil&rsquo; (kopiao, used of physical exhaustion) and &lsquo;strive&rsquo; (agonizomai, the Greek root of &lsquo;agonize&rsquo;) &mdash; describe intense, costly effort. Gospel ministry and the pursuit of godliness are not passive or comfortable. The ground of the striving is the hope set on the living God, &ldquo;who is the Savior of all people, especially of those who believe&rdquo; &mdash; a distinction between the providential goodness of God toward all creation and his saving grace toward those who trust him.",
      },
    ],
  },
  {
    id: "vv11-16",
    range: "vv. 11&ndash;16",
    label: "Set the Believers an Example",
    color: GOLD,
    content: "Command and teach these things. Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity. Until I come, devote yourself to the public reading of Scripture, to exhortation, to teaching. Do not neglect the gift you have, which was given you by prophecy when the council of elders laid their hands on you.",
    exposition: [
      {
        heading: "Command and Teach These Things (v. 11)",
        body: "The imperatives pile up: &ldquo;command and teach.&rdquo; Timothy is not offered the option of suggesting, hinting, or modeling without speaking. Teaching is a primary mode of pastoral authority. The word &ldquo;command&rdquo; (paraggele) is a military term for orders passed down the chain of command. Timothy is under orders himself &mdash; from Paul, who is under orders from Christ &mdash; and he is authorized to transmit those orders to the congregation. Pastoral diffidence about doctrinal instruction is not humility; it is a failure of stewardship.",
      },
      {
        heading: "Let No One Despise Your Youth (v. 12)",
        body: "The command is not passive: Timothy is not told to accept being despised or to wait it out. He is told to become un-despise-able. The five areas listed &mdash; speech, conduct, love, faith, purity &mdash; cover the entire visible Christian life. &lsquo;Speech&rsquo; (logos) encompasses all his public communication; &lsquo;conduct&rsquo; (anastroph&ecirc;) is his manner of living; &lsquo;love&rsquo; (agape) is his orientation toward others; &lsquo;faith&rsquo; (pistis) may refer to faithfulness or trust in God; &lsquo;purity&rsquo; (hagneia) is moral integrity, especially sexual. The young leader who excels in all five areas disarms age-based contempt not by argument but by life.",
      },
      {
        heading: "Devote Yourself to the Public Reading (v. 13)",
        body: "The Greek word prosech&ocirc; (&ldquo;devote yourself&rdquo; or &ldquo;give attention to&rdquo;) implies sustained, intentional focus. The public reading of Scripture came first in the list, before exhortation and teaching. In the early church, before printed Bibles and widespread literacy, the public reading was the primary means by which the congregation encountered the text of Scripture. Timothy was to ensure that the gathered reading happened, was done well, and was heard. Exhortation (paraklesis) applies the text to the will; teaching (didaskalia) clarifies its doctrinal content. The order is: Word, then application.",
      },
      {
        heading: "Do Not Neglect the Gift (v. 14)",
        body: "The spiritual gift is described in two ways: it was given &ldquo;by prophecy&rdquo; (pointing to a Spirit-generated prophetic word in the worshipping community identifying Timothy&rsquo;s calling) and &ldquo;when the council of elders laid their hands on you&rdquo; (pointing to the public, ecclesial act of commissioning). The gift is thus both pneumatic and institutional &mdash; Spirit-given and church-recognized. The danger Paul warns against is not apostasy but neglect: the gradual failure to exercise and develop what has been entrusted. The gift must be used to stay alive.",
      },
      {
        heading: "Practice These Things &mdash; Immerse Yourself (v. 15)",
        body: "Verse 15 introduces the language of total absorption: &ldquo;practice these things, immerse yourself in them.&rdquo; The word translated &ldquo;immerse&rdquo; or &ldquo;give yourself wholly&rdquo; (en toutois isth&icirc;) means literally &ldquo;be in these things.&rdquo; The minister&rsquo;s progress &mdash; in godliness, in knowledge, in skill &mdash; is to be visible to all. The congregation should be able to see that their pastor is growing. This is a remarkable accountability structure: the minister&rsquo;s progress is public, not private.",
      },
      {
        heading: "Watch Your Life and Doctrine (v. 16)",
        body: "The final verse of the chapter is its climax: &ldquo;Keep a close watch on yourself and on the teaching.&rdquo; The two objects of watchfulness are inseparable &mdash; life and doctrine together. The minister who guards doctrine but neglects personal holiness destroys his witness; the one who is personally godly but neglects sound doctrine leaves the congregation without a rudder. Both must be watched, and the watching is persistent: &ldquo;persist in this.&rdquo; The stakes are soteriological: &ldquo;for by so doing you will save both yourself and your hearers.&rdquo;",
      },
    ],
  },
];

const APPLICATIONS = [
  {
    id: 1,
    title: "Recognizing False Asceticism vs. Genuine Holiness",
    color: PURPLE,
    icon: "D",
    body: "Not all abstinence is holiness, and not all indulgence is sin. The key question is doctrinal: does the practice arise from gratitude toward God for his good creation, or from the belief that creation itself is spiritually inferior? Paul&rsquo;s model is thanksgiving: receive what God has made with gratitude and prayer, and it is sanctified. Reject what God has made as unclean, and you have made a theological claim that contradicts Genesis 1. Genuine holiness refuses both license and legalism; false spirituality collapses toward one or the other.",
    questions: [
      "Are there areas of your life where you have adopted rules or restrictions that are not grounded in Scripture but in a vague sense that denial equals holiness?",
      "How does the practice of giving thanks before meals change your relationship to food and to God who provides it?",
      "Where do you see the error of asceticism in contemporary Christianity &mdash; and where do you see its opposite error?",
    ],
  },
  {
    id: 2,
    title: "Prioritizing Spiritual Training Over Physical",
    color: GREEN,
    icon: "T",
    body: "Paul&rsquo;s analogy between athletic training and spiritual formation is generative. Both require regularity, effort, progressive difficulty, and a goal. The spiritual disciplines &mdash; Scripture reading, prayer, fasting, worship, service, solitude &mdash; are not means of earning favor with God but means by which God forms us. The person who invests heavily in physical fitness while neglecting the soul has confused which training has the longer return. Both are legitimate; godliness simply has infinitely greater scope and permanence. The comparison shames the person who disciplines the body rigorously but approaches the soul casually.",
    questions: [
      "What does your current &lsquo;training regimen&rsquo; for spiritual formation actually look like, and is it as disciplined as your approach to physical health?",
      "Which spiritual discipline is most neglected in your current season of life, and what would it take to begin practicing it?",
      "How does Paul&rsquo;s phrase &lsquo;of value in every way&rsquo; &mdash; including for the present life &mdash; challenge the idea that spiritual formation is only about the afterlife?",
    ],
  },
  {
    id: 3,
    title: "Setting an Example in Youth",
    color: GOLD,
    icon: "E",
    body: "The principle of v. 12 applies beyond young ministers to every young Christian who leads &mdash; formally or informally &mdash; in any sphere of life. Age-based dismissal is real, and Paul&rsquo;s answer is not reassurance that it will pass but the challenge to become exemplary in the five dimensions of visible Christian life: speech, conduct, love, faith, and purity. This is intensely practical. Each of the five areas can be assessed: Is my public speech consistent with my faith? Does the way I live daily match what I profess? Do people experience genuine love from me or merely formal duty? Is my faith visible in genuine trust? Is my integrity &mdash; including sexual integrity &mdash; beyond question?",
    questions: [
      "Which of the five areas (speech, conduct, love, faith, purity) is most underdeveloped in your visible Christian life right now?",
      "Have you ever been dismissed because of your age or inexperience? What was the most constructive response available to you?",
      "Who is a person in your life who demonstrates exemplary character across all five of these areas? What can you learn from observing them?",
    ],
  },
  {
    id: 4,
    title: "The Centrality of Scripture Reading in Gathered Worship",
    color: TEAL,
    icon: "W",
    body: "Paul&rsquo;s prioritizing of the public reading of Scripture in v. 13 challenges churches that have allowed other elements of gathered worship &mdash; music, video, announcements, experience &mdash; to crowd out or abbreviate the reading of the text. The early church gathered primarily to hear the Word read and expounded. Exhortation and teaching flow from the reading; they do not substitute for it. Congregations that hear large quantities of Scripture read aloud in their weekly gathering are being formed differently &mdash; and more durably &mdash; than those whose contact with the biblical text is minimal. This is not a call to tedium but to substance.",
    questions: [
      "How much Scripture is actually read aloud in your church&rsquo;s gathered worship each week, and how does that compare with other elements of the service?",
      "What is the difference between hearing Scripture read aloud in community and reading it privately? What does the gathered reading accomplish that private reading does not?",
      "How might Paul&rsquo;s three-fold pattern &mdash; reading, exhortation, teaching &mdash; reshape the way you think about the structure of Christian preaching and worship?",
    ],
  },
];

export default function FirstTimothy4Page() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openVerse, setOpenVerse] = useState<string | null>("vv1-5");
  const [openExposition, setOpenExposition] = useState<number | null>(null);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "Q3oMwOnnqI4", title: "1 Timothy 4 &mdash; Train Yourself for Godliness" },
    { videoId: "7Rk0SDoVDP4", title: "False Teaching and the Warning of the Spirit (1 Timothy 4:1-5)" },
    { videoId: "wFU2TqnJzbo", title: "Set an Example &mdash; Youth and Ministry in 1 Timothy 4" },
    { videoId: "yTb0MQdY_dY", title: "The Public Reading of Scripture and Pastoral Devotion (1 Timothy 4:13-16)" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0e0e1f 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "52px 24px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 14px", color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 18 }}>
            <span dangerouslySetInnerHTML={{ __html: "BIBLE STUDY GUIDE &mdash; 1 TIMOTHY 4" }} />
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            <span dangerouslySetInnerHTML={{ __html: "Train Yourself for Godliness" }} />
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, maxWidth: 680, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "First Timothy 4 addresses the Spirit&rsquo;s prediction of apostasy through false asceticism, gives Timothy the athletic image of training for godliness, and charges him to let no one despise his youth &mdash; but instead to set the believers an example in speech, conduct, love, faith, and purity &mdash; and to devote himself above all to the public reading of Scripture." }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Passage", value: "1 Timothy 4:1&ndash;16", color: GREEN },
              { label: "Author", value: "Paul the Apostle", color: PURPLE },
              { label: "Recipient", value: "Timothy in Ephesus", color: GOLD },
              { label: "Theme", value: "Godliness &amp; Faithfulness", color: TEAL },
            ].map((badge) => (
              <div key={badge.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 14px" }}>
                <span style={{ color: MUTED, fontSize: 10, fontWeight: 700, display: "block" }}>{badge.label}</span>
                <span style={{ color: TEXT, fontSize: 13, fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: badge.value }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", display: "flex", gap: 2, overflowX: "auto" }}>
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{ background: "transparent", border: "none", color: activeTab === t.id ? GREEN : MUTED, fontWeight: activeTab === t.id ? 800 : 500, fontSize: 14, padding: "16px 20px", cursor: "pointer", borderBottom: activeTab === t.id ? `2px solid ${GREEN}` : "2px solid transparent", whiteSpace: "nowrap", transition: "color 0.15s" }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 12 }}>
                <span dangerouslySetInnerHTML={{ __html: "CHAPTER OVERVIEW" }} />
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: "First Timothy 4 is a pivotal chapter in the letter &mdash; the point at which Paul moves from institutional instructions (chapters 2&ndash;3) to personal pastoral charge. It contains three major movements: a doctrinal warning against ascetic false teaching (vv. 1&ndash;5), a personal charge to Timothy concerning his own spiritual formation and ministry (vv. 6&ndash;10), and a set of concrete instructions for his conduct and public ministry (vv. 11&ndash;16). The chapter is remarkable for weaving together systematic theology, personal piety, and ministerial practice into a single integrated vision of faithful Christian ministry." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s three sections share a common concern: the relationship between doctrine and life. False doctrine produces false living (vv. 1&ndash;5); sound doctrine must be cultivated through personal training (vv. 6&ndash;10); and faithful ministry requires both doctrinal integrity and exemplary personal character (vv. 11&ndash;16). You cannot separate what Timothy believes, how Timothy lives, and how Timothy ministers &mdash; they are one integrated whole." }} />
            </div>

            {OVERVIEW_SECTIONS.map((section) => (
              <div key={section.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
                <h2 style={{ color: section.color, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: section.title }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
              </div>
            ))}

            {/* Key Verse Card */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}18 0%, ${GREEN}12 100%)`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 32, marginTop: 28, textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>
                <span dangerouslySetInnerHTML={{ __html: "KEY VERSE" }} />
              </div>
              <blockquote style={{ margin: "0 0 16px", padding: 0 }}>
                <p style={{ color: TEXT, fontSize: "clamp(16px, 2.5vw, 20px)", fontStyle: "italic", lineHeight: 1.7, fontFamily: "Georgia, serif", margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.&rdquo;" }} />
              </blockquote>
              <div style={{ color: MUTED, fontSize: 14, fontWeight: 700 }}>
                <span dangerouslySetInnerHTML={{ __html: "1 Timothy 4:8" }} />
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
                <span dangerouslySetInnerHTML={{ __html: "SIX MAJOR THEMES IN 1 TIMOTHY 4" }} />
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "First Timothy 4 is theologically dense. These six themes represent the key theological and practical concerns that Paul presses in this chapter &mdash; each one with direct implications for how Christians think, live, and minister today." }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {KEY_THEMES.map((theme) => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: `${theme.color}12`, borderBottom: `1px solid ${theme.color}25`, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${theme.color}25`, border: `1px solid ${theme.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>
                      {theme.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                      <p style={{ color: MUTED, fontSize: 13, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.summary }} />
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: theme.detail }} />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {theme.verses.map((v) => (
                        <span key={v} style={{ background: `${theme.color}15`, border: `1px solid ${theme.color}30`, color: theme.color, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v }} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
                <span dangerouslySetInnerHTML={{ __html: "VERSE BY VERSE EXPOSITION" }} />
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Click any passage section to expand its verse-by-verse exposition. Each section includes the passage text, its literary unit label, and detailed exposition of each paragraph or verse." }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSES.map((section) => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${openVerse === section.id ? section.color + "50" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    type="button"
                    onClick={() => setOpenVerse(openVerse === section.id ? null : section.id)}
                    style={{ width: "100%", background: openVerse === section.id ? `${section.color}10` : "transparent", border: "none", padding: "20px 24px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ background: `${section.color}20`, border: `1px solid ${section.color}40`, borderRadius: 8, padding: "4px 12px", color: section.color, fontWeight: 800, fontSize: 13, whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: section.range }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.label }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0 }}>{openVerse === section.id ? "-" : "+"}</span>
                  </button>

                  {openVerse === section.id && (
                    <div style={{ padding: "0 24px 28px" }}>
                      <div style={{ background: `${section.color}08`, border: `1px solid ${section.color}20`, borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
                        <div style={{ color: section.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", marginBottom: 10 }}>
                          <span dangerouslySetInnerHTML={{ __html: "ESV &mdash; 1 TIMOTHY 4:" + section.range.replace("vv. ", "").replace("&ndash;", "-") }} />
                        </div>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: section.content }} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {section.exposition.map((exp, idx) => (
                          <div key={idx} style={{ borderLeft: `3px solid ${section.color}40`, paddingLeft: 18 }}>
                            <button
                              type="button"
                              onClick={() => setOpenExposition(openExposition === idx + section.id.length * 100 ? null : idx + section.id.length * 100)}
                              style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", textAlign: "left", width: "100%" }}
                            >
                              <h4 style={{ color: section.color, fontWeight: 800, fontSize: 15, margin: "0 0 6px" }} dangerouslySetInnerHTML={{ __html: exp.heading }} />
                            </button>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: exp.body }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
                <span dangerouslySetInnerHTML={{ __html: "FROM TEXT TO LIFE" }} />
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "First Timothy 4 is intensely practical. These four application sections move from the text&rsquo;s theological arguments into the concrete questions and habits that shape Christian life and ministry today. Each section includes reflection questions for personal study or group discussion." }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {APPLICATIONS.map((app) => (
                <div key={app.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: `${app.color}10`, borderBottom: `1px solid ${app.color}20`, padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${app.color}25`, border: `1px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>
                      {app.icon}
                    </div>
                    <h3 style={{ color: app.color, fontWeight: 800, fontSize: 17, margin: 0 }} dangerouslySetInnerHTML={{ __html: app.title }} />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 24px" }} dangerouslySetInnerHTML={{ __html: app.body }} />
                    <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                      <div style={{ color: app.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", marginBottom: 14 }}>
                        <span dangerouslySetInnerHTML={{ __html: "REFLECTION QUESTIONS" }} />
                      </div>
                      <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                        {app.questions.map((q, i) => (
                          <li key={i}>
                            <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Call-Out */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${TEAL}12 100%)`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 32, marginTop: 32, textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>
                <span dangerouslySetInnerHTML={{ __html: "CLOSING CHARGE" }} />
              </div>
              <p style={{ color: TEXT, fontSize: "clamp(15px, 2.2vw, 18px)", fontStyle: "italic", fontFamily: "Georgia, serif", lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Keep a close watch on yourself and on the teaching. Persist in this, for by so doing you will save both yourself and your hearers.&rdquo;" }} />
              <p style={{ color: MUTED, fontSize: 14, fontWeight: 700, margin: 0 }}>
                <span dangerouslySetInnerHTML={{ __html: "1 Timothy 4:16" }} />
              </p>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 44 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
              <span dangerouslySetInnerHTML={{ __html: "VIDEO TEACHINGS" }} />
            </div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: 0 }}>
              <span dangerouslySetInnerHTML={{ __html: "Teaching Videos on 1 Timothy 4" }} />
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 48, paddingTop: 28, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13 }}>
            <span dangerouslySetInnerHTML={{ __html: "Part of The Vine&rsquo;s Pastoral Epistles Study Series" }} />
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["1 Timothy Overview", "2 Timothy 1", "Titus 1"].map((link) => (
              <span key={link} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "6px 14px", color: MUTED, fontSize: 13, cursor: "default" }}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
