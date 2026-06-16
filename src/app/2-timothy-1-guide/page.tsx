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
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    id: "final-letter",
    title: "Paul&rsquo;s Final Letter",
    color: ROSE,
    body: "Second Timothy is almost certainly the last letter Paul wrote before his execution under Nero, probably in Rome around 66&ndash;67 AD. He writes from prison &mdash; a different kind of imprisonment than what he had experienced before, when he had relative freedom (Philippians, Colossians). Now he expects death: &ldquo;I am already being poured out as a drink offering, and the time of my departure has come&rdquo; (2 Timothy 4:6). This gives the entire letter an urgency, tenderness, and gravity that sets it apart. It is Paul&rsquo;s farewell &mdash; a final transfer of apostolic responsibility to the next generation.",
  },
  {
    id: "timothy",
    title: "Timothy as Paul&rsquo;s Spiritual Son",
    color: GOLD,
    body: "Paul&rsquo;s relationship with Timothy is one of the most clearly personal relationships in all of Paul&rsquo;s letters. He calls him &ldquo;my beloved child&rdquo; (v. 2) and consistently uses father-son language to describe their bond. Timothy was probably converted through Paul&rsquo;s ministry, was circumcised at Paul&rsquo;s request to facilitate ministry among Jewish communities, and had traveled with Paul for years. The emotional warmth of the opening verses &mdash; &ldquo;I long to see you&rdquo; (v. 4), the memory of Timothy&rsquo;s tears &mdash; signals that this is not merely a formal ministerial correspondence but a letter from a father to a beloved son who is facing the same pressures that are about to kill the father.",
  },
  {
    id: "asia",
    title: "Desertions and the Crisis of Shame",
    color: MUTED,
    body: "The emotional and social pressure underlying 2 Timothy 1 is the widespread desertion of Paul by those who were once with him. Verse 15 is stark: &ldquo;all who are in Asia turned away from me.&rdquo; This is not merely a relational rupture; it is a crisis of public association. To be seen with Paul, to defend Paul, to visit Paul in prison, was to share in his shame &mdash; and his shame could cost you your freedom or your life. The letter is written against the backdrop of precisely this social pressure, which makes Paul&rsquo;s charge not to be ashamed (vv. 8, 12, 16) not an abstraction but an immediate, costly, concrete decision.",
  },
  {
    id: "onesiphorus",
    title: "Onesiphorus: The Anti-Shame",
    color: GREEN,
    body: "Set against the backdrop of mass desertion, the brief portrait of Onesiphorus in vv. 16&ndash;18 shines with particular brightness. Onesiphorus &ldquo;was not ashamed of my chains, but when he arrived in Rome he searched for me earnestly and found me.&rdquo; The active effort required to find a prisoner in Rome, to search for him earnestly until he was found, and to refresh him in his imprisonment &mdash; all in a city where Paul was publicly condemned &mdash; is an act of extraordinary courage and love. Paul&rsquo;s prayer for Onesiphorus&rsquo;s household (&ldquo;may the Lord grant mercy to the household of Onesiphorus&rdquo;) suggests that Onesiphorus himself may have since died, making his loyalty to Paul even more poignant.",
  },
];

const KEY_THEMES = [
  {
    id: 1,
    title: "Sincere Faith Passed Through Generations",
    color: GOLD,
    icon: "F",
    summary: "True faith moves through family lines and community &mdash; from Lois to Eunice to Timothy",
    detail: "Paul&rsquo;s thanksgiving in vv. 3&ndash;5 moves from his own faith (&ldquo;God whom I serve from my forebears with a clear conscience&rdquo;) to Timothy&rsquo;s inherited faith (&ldquo;a faith that dwelt first in your grandmother Lois and your mother Eunice&rdquo;). The adjective for &ldquo;sincere&rdquo; (Greek: anypokritos, literally &lsquo;without hypocrisy&rsquo;) describes faith that is real &mdash; not performed for social approval but genuinely held. The three-generation chain &mdash; Lois, Eunice, Timothy &mdash; is remarkable. Paul is not observing a genetic miracle; he is observing the ordinary, powerful, irreplaceable means by which faith travels through time: faithful people who love the next generation.",
    verses: ["2 Timothy 1:3-5"],
  },
  {
    id: 2,
    title: "Fan Into Flame the Gift of God",
    color: ROSE,
    icon: "G",
    summary: "The gift of God given at Timothy&rsquo;s commissioning is not automatic &mdash; it must be actively fanned",
    detail: "The image of &ldquo;fanning into flame&rdquo; (v. 6) is vivid and telling. A fire that is not attended to dies down; it needs to be fed, stirred, aerated. The gift of God &mdash; the capacity for ministry given through the laying on of Paul&rsquo;s hands &mdash; is not a static possession but a living reality that requires ongoing activation. The context suggests that Timothy&rsquo;s spiritual vitality has been somewhat dampened by the pressures he faces. Paul does not rebuke him; he reminds him. The gift is still there; it needs to be fanned. The calling has not been revoked; it needs to be stirred up.",
    verses: ["2 Timothy 1:6"],
  },
  {
    id: 3,
    title: "A Spirit of Power, Love, and Self-Control",
    color: PURPLE,
    icon: "P",
    summary: "God has not given Christians a spirit of fear &mdash; but of power, love, and self-control",
    detail: "Verse 7 is one of the most directly applicable verses in all of Paul&rsquo;s letters, and it deserves to be understood precisely. The &ldquo;spirit of fear&rdquo; (Greek: deilia &mdash; cowardice, timidity) is not the reverent fear of God but the shrinking self-protective cowardice that refuses to act in the face of threat. God has not given this to his people. In its place: &ldquo;power&rdquo; (dynamis &mdash; divine ability to act), &ldquo;love&rdquo; (agape &mdash; the orientation toward the good of others that risks self), and &ldquo;self-control&rdquo; (sophronismos &mdash; sound-mindedness, sober judgment). These three together describe the character needed to face persecution without either cowardice or recklessness.",
    verses: ["2 Timothy 1:7"],
  },
  {
    id: 4,
    title: "Not Ashamed of the Gospel or of Suffering Christians",
    color: TEAL,
    icon: "A",
    summary: "Do not be ashamed of the testimony about our Lord, nor of Paul his prisoner",
    detail: "The shame dynamic that runs through 2 Timothy 1 is not abstract. In Roman culture, imprisonment was itself a mark of social disgrace; association with a prisoner implied complicity in their crime. Paul has already been deserted by &ldquo;all who are in Asia&rdquo; (v. 15) &mdash; people who refused to risk the social consequences of loyalty. Against this backdrop, Paul charges Timothy: do not be ashamed of the testimony about our Lord (the gospel itself), and do not be ashamed of me, his prisoner. The two are inseparable &mdash; the gospel produces suffering, and refusing to be ashamed of suffering Christians is part of not being ashamed of the gospel.",
    verses: ["2 Timothy 1:8-12"],
  },
  {
    id: 5,
    title: "Grace Given Before the Ages Began",
    color: GREEN,
    icon: "C",
    summary: "The salvation Paul proclaims was purposed in God before creation itself &mdash; not because of our works",
    detail: "Paul&rsquo;s doxological digression in vv. 9&ndash;10 is one of the most theologically rich passages in the Pastoral Epistles: God &ldquo;saved us and called us to a holy calling, not because of our works but because of his own purpose and grace, which he gave us in Christ Jesus before the ages began.&rdquo; This locates the grace of the gospel before creation itself &mdash; it is not reactive to human need but expressive of God&rsquo;s eternal purpose. The abolition of death and the &ldquo;bringing of life and immortality to light through the gospel&rdquo; (v. 10) point to the resurrection of Jesus as the event that makes visible what was always true of God&rsquo;s intention.",
    verses: ["2 Timothy 1:9-10"],
  },
  {
    id: 6,
    title: "Guard the Good Deposit",
    color: GOLD,
    icon: "D",
    summary: "The apostolic gospel entrusted to Timothy must be guarded through the Holy Spirit who dwells within",
    detail: "The &ldquo;good deposit&rdquo; (Greek: paratheke) was a technical term in Hellenistic culture for something entrusted to another person for safekeeping &mdash; like property left with a trusted steward. Paul uses it to describe the apostolic gospel that has been entrusted to Timothy. The charge to &ldquo;guard the good deposit&rdquo; (v. 14) implies that it can be lost &mdash; through neglect, through false teaching, through the fear that leads to diluting the gospel to avoid controversy. The means of guarding is not merely Timothy&rsquo;s own resolve but the &ldquo;Holy Spirit who dwells in us&rdquo; &mdash; a reminder that faithfulness is enabled, not merely demanded.",
    verses: ["2 Timothy 1:13-14"],
  },
];

const VERSES = [
  {
    id: "vv1-2",
    range: "vv. 1&ndash;2",
    label: "Greeting",
    color: PURPLE,
    content: "Paul, an apostle of Christ Jesus by the will of God according to the promise of life that is in Christ Jesus, to Timothy, my beloved child: Grace, mercy, and peace from God the Father and Christ Jesus our Lord.",
    exposition: [
      {
        heading: "Apostle by the Will of God (v. 1)",
        body: "Paul&rsquo;s apostolic authority is not self-claimed; it is grounded in the will of God. The phrase &ldquo;by the will of God&rdquo; (kata thel&ecirc;ma theou) appears in several of Paul&rsquo;s letters, but here it carries extra weight: Paul is in prison, apparently abandoned by many, facing execution. His authority is not validated by social position or favorable circumstances but by the divine commission that sent him. The definition of his apostleship &mdash; &ldquo;according to the promise of life that is in Christ Jesus&rdquo; &mdash; connects his commission directly to the resurrection promise that grounds the whole letter.",
      },
      {
        heading: "My Beloved Child (v. 2)",
        body: "The address &ldquo;my beloved child&rdquo; (agap&ecirc;to tekno) is distinctly warmer than the &ldquo;true child in the faith&rdquo; of 1 Timothy 1:2. The addition of &ldquo;beloved&rdquo; signals the depth of personal affection behind what might otherwise read as a formal transmission of ministerial responsibility. Paul is not simply appointing a successor; he is writing to someone he loves. The triad &ldquo;grace, mercy, and peace&rdquo; (unlike most Pauline greetings which have only &ldquo;grace and peace&rdquo;) adds &ldquo;mercy&rdquo; &mdash; a word particularly appropriate to a letter written from the weakest, most vulnerable position of Paul&rsquo;s life.",
      },
    ],
  },
  {
    id: "vv3-5",
    range: "vv. 3&ndash;5",
    label: "Thanksgiving for Timothy&rsquo;s Faith",
    color: GOLD,
    content: "I thank God whom I serve, as did my ancestors, with a clear conscience, as I remember you constantly in my prayers night and day. As I remember your tears, I long to see you, that I may be filled with joy. I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice and now, I am sure, dwells in you as well.",
    exposition: [
      {
        heading: "A Clear Conscience and Ancestral Faith (v. 3)",
        body: "Paul&rsquo;s self-description &mdash; serving God &ldquo;from my forebears with a clear conscience&rdquo; &mdash; is striking in a letter written from prison. Imprisonment in Rome, awaiting execution after a trial he apparently did not receive fairly, would not be the context in which most people claim a clear conscience. Paul can claim it because his conscience is calibrated not by Roman courts or public opinion but by the reality of the God who has commissioned him. The mention of serving from his forebears (as in Romans 11, connecting his faith to the Abrahamic tradition) places his apostolic ministry within the long arc of redemptive history.",
      },
      {
        heading: "Night and Day in Prayer (v. 3)",
        body: "The phrase &ldquo;constantly in my prayers night and day&rdquo; suggests not merely regular but intense, sustained intercession. The word &ldquo;constantly&rdquo; (adialeiptos, &lsquo;without ceasing&rsquo;) is the same word Paul uses in 1 Thessalonians 5:17 (&ldquo;pray without ceasing&rdquo;). Prayer for Timothy was not a scheduled obligation; it was an ongoing reality of Paul&rsquo;s inner life. From prison, cut off from direct involvement in Timothy&rsquo;s ministry, prayer was Paul&rsquo;s primary mode of pastoral engagement. The minister who is physically present can do many things; the imprisoned apostle can do one &mdash; and it is enough.",
      },
      {
        heading: "Your Tears and My Longing (v. 4)",
        body: "The reference to Timothy&rsquo;s tears is unexplained &mdash; we do not know whether they were shed at the farewell when Paul was arrested, at some earlier parting, or in some other context. What we know is that Paul remembers them, that they move him, and that the memory of this emotional man he loves makes him long to see him. The verb used for longing (epitho&ecirc; &mdash; intense desire) is the same root used of the deacon&rsquo;s &ldquo;noble aspiration&rdquo; in 1 Timothy 3:1. Paul does not minimize the emotional texture of ministry relationships; he treasures it.",
      },
      {
        heading: "Sincere Faith: Three Generations (v. 5)",
        body: "The adjective &ldquo;sincere&rdquo; (anypokritos) means literally &lsquo;not hypocritical&rsquo; &mdash; not a performance for others but a genuine reality. The three-generation chain Lois-Eunice-Timothy is one of the most powerful pictures of intergenerational faith in Scripture. We know almost nothing about Lois and Eunice beyond this verse and Acts 16:1 (where Eunice is described as a Jewish believer). But that is enough: they believed, they lived it, they passed it on, and it took root in Timothy. The most important infrastructure of the church is not programs or institutions but faithful grandmothers and mothers.",
      },
    ],
  },
  {
    id: "vv6-7",
    range: "vv. 6&ndash;7",
    label: "Fan Into Flame &mdash; Power, Love, Self-Control",
    color: ROSE,
    content: "For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands, for God gave us a spirit not of fear but of power and love and self-control.",
    exposition: [
      {
        heading: "Fan Into Flame (v. 6)",
        body: "The verb &ldquo;fan into flame&rdquo; (Greek: anaz&ocirc;purein) means literally to rekindle a fire that has begun to die down. The image is of a fire that has coals but needs stirring &mdash; air and fuel to bring it back to full flame. The gift of God is real, present, and effective; it simply needs to be activated. Paul does not say the gift is gone or that Timothy has failed; he reminds him of what he already has and what it requires of him. The difference between 1 Timothy 4:14 (&ldquo;do not neglect the gift&rdquo;) and here (&ldquo;fan into flame&rdquo;) is instructive: 1 Timothy warns against passive neglect; 2 Timothy calls for active stirring.",
      },
      {
        heading: "Through the Laying On of My Hands (v. 6)",
        body: "In 1 Timothy 4:14, the gift came through the laying on of hands by the council of elders with accompanying prophecy; here Paul says &ldquo;the laying on of my hands.&rdquo; These are not contradictory &mdash; Paul led the commissioning, and the elders participated. The reference here to Paul&rsquo;s hands specifically emphasizes the apostolic origin of the gift: Timothy&rsquo;s calling is not merely congregational but apostolically grounded. In a moment when Paul&rsquo;s authority is being contested by some and abandoned by others, this reminder grounds Timothy&rsquo;s calling in the most solid soil possible.",
      },
      {
        heading: "Not Fear but Power, Love, and Self-Control (v. 7)",
        body: "The three qualities Paul contrasts with fearfulness are carefully chosen. &ldquo;Power&rdquo; (dynamis) is the divine enabling to act in the face of opposition &mdash; not natural courage but supernatural capacity. &ldquo;Love&rdquo; (agap&ecirc;) is the orientation toward the other&rsquo;s good that motivates risk &mdash; you face shame for the sake of those you serve. &ldquo;Self-control&rdquo; (sophronismos) is sound judgment &mdash; not recklessness but the clarity of mind that neither panics nor is paralyzed. Together they describe not a superhero but a person whose inner life is ordered by the Spirit so that external threat does not produce collapse.",
      },
    ],
  },
  {
    id: "vv8-10",
    range: "vv. 8&ndash;10",
    label: "Not Ashamed &mdash; The Eternal Purpose of Grace",
    color: TEAL,
    content: "Therefore do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God, who saved us and called us to a holy calling, not because of our works but because of his own purpose and grace, which he gave us in Christ Jesus before the ages began, and which now has been manifested through the appearing of our Savior Christ Jesus, who abolished death and brought life and immortality to light through the gospel.",
    exposition: [
      {
        heading: "Do Not Be Ashamed (v. 8)",
        body: "The command &ldquo;do not be ashamed&rdquo; identifies shame as the primary temptation Timothy faces, and the &ldquo;therefore&rdquo; connects it to v. 7: because God has given a spirit of power, love, and self-control &mdash; not fear &mdash; Timothy can resist the shame pressure. The two objects of potential shame are the gospel itself (&ldquo;the testimony about our Lord&rdquo;) and Paul its imprisoned messenger (&ldquo;nor of me his prisoner&rdquo;). These are inseparable: the gospel produces the kind of people who get imprisoned for it, and refusing to be ashamed of the gospel means refusing to be ashamed of the people the gospel gets into trouble.",
      },
      {
        heading: "Share in Suffering by the Power of God (v. 8)",
        body: "Paul does not promise that not being ashamed will be painless. He calls Timothy to &ldquo;share in suffering for the gospel.&rdquo; The suffering is not incidental to faithfulness; it is part of the calling. But &mdash; and this is the crucial phrase &mdash; it is to be endured &ldquo;by the power of God.&rdquo; The power of v. 7 is not just the power to speak boldly; it is the power to suffer faithfully. The God who gives power does not remove the suffering but accompanies his people through it.",
      },
      {
        heading: "Not Because of Our Works (v. 9)",
        body: "The theological aside of vv. 9&ndash;10 is one of the clearest statements of monergistic grace in the Pastoral Epistles. Salvation is &ldquo;not because of our works but because of his own purpose and grace.&rdquo; This is not Pauline boilerplate &mdash; it is the foundation of everything else in the letter. If grace depended on our fidelity, the mass desertion of v. 15 would be catastrophic for the gospel. But because grace precedes and creates fidelity rather than requiring it, the failures of human faithfulness do not undermine the certainty of God&rsquo;s saving purpose.",
      },
      {
        heading: "Before the Ages Began (vv. 9&ndash;10)",
        body: "The grace given &ldquo;in Christ Jesus before the ages began&rdquo; locates the gospel in eternity &mdash; not as God&rsquo;s backup plan when creation went wrong but as his original intention. The appearing of Christ &ldquo;abolished death and brought life and immortality to light through the gospel&rdquo; means that the resurrection made visible what God had intended from before creation: life in the age to come, given as gift, through the risen Son. For Timothy, who is watching Paul face death, the abolition of death by the appearing of Christ is not a doctrinal formula &mdash; it is the ground of courage.",
      },
    ],
  },
  {
    id: "vv11-14",
    range: "vv. 11&ndash;14",
    label: "Appointed Preacher &mdash; Guard the Good Deposit",
    color: GREEN,
    content: "For this I was appointed a preacher and apostle and teacher, which is why I suffer as I do. But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me. Follow the pattern of the sound words that you have heard from me, in the faith and love that are in Christ Jesus. By the Holy Spirit who dwells within us, guard the good deposit entrusted to you.",
    exposition: [
      {
        heading: "Appointed Preacher, Apostle, and Teacher (v. 11)",
        body: "The three-fold description of Paul&rsquo;s office &mdash; preacher (k&ecirc;rux, a herald), apostle (apostolos, a sent one), and teacher (didaskalos, one who explains) &mdash; covers the full range of his ministry function. The herald announces; the apostle is commissioned by a king; the teacher explains and applies. Paul&rsquo;s suffering is directly connected to this appointment: &ldquo;which is why I suffer as I do.&rdquo; The apostolic office is not a path to privilege but to the fellowship of Christ&rsquo;s sufferings. The same calling that grants authority generates opposition.",
      },
      {
        heading: "I Know Whom I Have Believed (v. 12)",
        body: "This is one of the most celebrated sentences in the letter, and it repays careful attention. Paul does not say &ldquo;I know what I have believed&rdquo; (content) but &ldquo;I know whom I have believed&rdquo; (person). The ground of his confidence is not doctrinal correctness but personal knowledge of a trustworthy God. And the specific trust is: &ldquo;he is able to guard until that day what has been entrusted to me.&rdquo; The &ldquo;deposit&rdquo; language appears twice in this chapter (vv. 12 and 14) &mdash; once describing what God guards on Paul&rsquo;s behalf and once what Timothy must guard on God&rsquo;s behalf. Both guardianships are required.",
      },
      {
        heading: "Follow the Pattern of Sound Words (v. 13)",
        body: "The &ldquo;pattern of sound words&rdquo; (hypotyp&ocirc;sis hygiainont&ocirc;n log&ocirc;n) refers to the apostolic teaching Timothy has received from Paul &mdash; not a precise formula to be repeated verbatim but a shape, a structure, a form of healthy speech that Timothy is to conform his own teaching to. The pattern is to be held &ldquo;in the faith and love that are in Christ Jesus&rdquo; &mdash; meaning that doctrinal fidelity is not cold adherence to a creed but living within the relational reality of trust in Christ and love for others.",
      },
      {
        heading: "Guard the Good Deposit (v. 14)",
        body: "The final command of this section &mdash; &ldquo;guard the good deposit entrusted to you&rdquo; &mdash; is simultaneously demanding and encouraging. Demanding, because Timothy must actively protect the gospel against dilution, distortion, and desertion. Encouraging, because the means of guarding is not Timothy&rsquo;s lone resolve but &ldquo;by the Holy Spirit who dwells within us.&rdquo; The same Spirit who gave the gift (v. 6) and who does not generate fear (v. 7) is the means by which the deposit is guarded. Faithfulness to the gospel is not a heroic solo achievement; it is Spirit-enabled stewardship.",
      },
    ],
  },
  {
    id: "vv15-18",
    range: "vv. 15&ndash;18",
    label: "Deserted and Refreshed &mdash; Phygelus, Hermogenes, and Onesiphorus",
    color: TEAL,
    content: "You are aware that all who are in Asia turned away from me, among whom are Phygelus and Hermogenes. May the Lord grant mercy to the household of Onesiphorus, for he often refreshed me and was not ashamed of my chains, but when he arrived in Rome he searched for me earnestly and found me &mdash; may the Lord grant him to find mercy from the Lord on that day! &mdash; and you well know all the service he rendered at Ephesus.",
    exposition: [
      {
        heading: "All Who Are in Asia (v. 15)",
        body: "The statement &ldquo;all who are in Asia turned away from me&rdquo; is deliberately hyperbolic &mdash; Paul himself will soon mention Onesiphorus and other loyal friends. But the rhetorical weight of &ldquo;all&rdquo; and &ldquo;Asia&rdquo; (the Roman province that included Ephesus, where Timothy was stationed) communicates a pastoral reality: the social and political pressure to distance oneself from an imprisoned, condemned apostle had been highly effective. The names Phygelus and Hermogenes appear nowhere else in the New Testament; their inclusion here &mdash; without explanation of what exactly they did &mdash; suggests that Timothy knew exactly who they were and what had happened.",
      },
      {
        heading: "Onesiphorus Who Refreshed Me (vv. 16&ndash;17)",
        body: "The verb &ldquo;refreshed&rdquo; (Greek: anapsy&aacute;cho, to fan a cooling breeze, to give relief) is vivid and physical &mdash; the kind of refreshment that comes not merely from words but from presence. Onesiphorus &ldquo;often refreshed me&rdquo; (suggesting a pattern, not a single visit) and specifically &ldquo;searched for me earnestly and found me.&rdquo; Finding a specific prisoner in Rome required active effort &mdash; inquiry, persistence, risk. To ask where Paul was imprisoned was to advertise association with a condemned criminal. Onesiphorus bore that risk. His courage is not described in dramatic terms; it is described in practical ones: he searched until he found.",
      },
      {
        heading: "Not Ashamed of My Chains (v. 16)",
        body: "The phrase &ldquo;not ashamed of my chains&rdquo; is the positive image corresponding to the negative command of v. 8 (&ldquo;do not be ashamed of me his prisoner&rdquo;). Onesiphorus models exactly what Paul has charged Timothy to be. His example is not held up as extraordinary heroism but as normal Christian love &mdash; the kind of thing that follows naturally from not being ashamed. Paul presents him to Timothy as a portrait of what unashamed loyalty looks like in practice: not grand speeches but presence, search, persistence, and the willingness to be seen standing with a condemned man.",
      },
      {
        heading: "May the Lord Grant Mercy (v. 18)",
        body: "Paul&rsquo;s prayer for Onesiphorus &mdash; &ldquo;may the Lord grant him to find mercy from the Lord on that day&rdquo; &mdash; and the reference to his &ldquo;household&rdquo; (not to Onesiphorus himself as a living person) have led many interpreters to conclude that Onesiphorus had died by the time Paul wrote. If so, the prayer is an unusual petition for a deceased person, which has been variously interpreted. What is theologically clear is that Paul sees Onesiphorus&rsquo;s act of loyal service as something that will find its full reward at the Day of Judgment &mdash; the mercy shown in time is answered by mercy given in eternity.",
      },
    ],
  },
];

const APPLICATIONS = [
  {
    id: 1,
    title: "The Inheritance of Faith Across Generations",
    color: GOLD,
    icon: "I",
    body: "The three-generation portrait of Lois, Eunice, and Timothy (vv. 3&ndash;5) is one of the most encouraging and convicting passages in Scripture on the subject of intergenerational faith. Encouraging because it shows that sincere faith does pass &mdash; that the faithful grandmother and the faithful mother are doing something that matters eternally. Convicting because it challenges the assumption that institutional programs are the primary means of transmitting faith to the next generation. The most powerful thing a parent or grandparent can do for their children&rsquo;s faith is to hold their own faith sincerely &mdash; without hypocrisy, without performance, with genuine conviction that Jesus is Lord.",
    questions: [
      "Who are the &lsquo;Lois and Eunice&rsquo; in your life &mdash; the people through whom faith came to you? Have you ever told them what their faithfulness has meant?",
      "What does it look like to pass faith on to the next generation in your specific context &mdash; as a parent, grandparent, mentor, or simply as an older member of a congregation?",
      "What is the difference between &lsquo;sincere faith&rsquo; (anypokritos &mdash; without hypocrisy) and performed or social faith? What might make your own faith more genuinely sincere?",
    ],
  },
  {
    id: 2,
    title: "Fanning Into Flame Your Spiritual Gift",
    color: ROSE,
    icon: "F",
    body: "The image of a fire needing to be fanned (v. 6) applies to every Christian, not just ministers. Spiritual gifts are given by the Spirit but must be actively exercised; callings are real but can be allowed to lie dormant; graces are given but can be treated as finished products rather than living realities. The question Paul presses on Timothy &mdash; &lsquo;what has been given to you that you are not currently fanning?&rsquo; &mdash; is a question for every believer. It is not a question of whether the gift is present; it is a question of whether it is being actively tended, used, and developed. The fire is there; it needs attention.",
    questions: [
      "What spiritual gift, calling, or capacity has been given to you that you currently feel is &lsquo;dying down&rsquo; rather than burning brightly? What would fanning it look like in practice?",
      "What specific practices in your life are &lsquo;feeding&rsquo; your spiritual vitality, and what practices are allowing it to cool? What change would be most significant?",
      "Paul connects the gift to a specific moment of commissioning (&ldquo;through the laying on of my hands&rdquo;). What moments of calling or commissioning in your own life do you need to remember and return to?",
    ],
  },
  {
    id: 3,
    title: "Replacing Fear with Power, Love, and Self-Control",
    color: PURPLE,
    icon: "R",
    body: "Second Timothy 1:7 is one of the most practically applicable verses in Scripture for the psychology of Christian courage. Paul does not tell Timothy to &lsquo;be brave&rsquo; or &lsquo;stop being afraid.&rsquo; He tells him to remember what spirit he has been given. This is a theological argument for courage: the same Spirit who indwells every believer is a spirit not of cowardice but of power, love, and self-control. Fear is not conquered by willpower; it is displaced by the active realization of the Spirit&rsquo;s presence and gifts. The three-fold gift &mdash; power to act, love to motivate action for others, and self-control to act wisely &mdash; together describe the inner condition of a person who faces threat without collapse.",
    questions: [
      "In what specific area of your life is cowardly fear (deilia &mdash; self-protective shrinking) currently operative? What would power, love, and self-control look like in that specific situation?",
      "How does love (agape) function as an antidote to fear? What does Paul mean by including love alongside power in this triad?",
      "What would it look like to pray v. 7 back to God specifically &mdash; to ask that the spirit of power, love, and self-control be made vivid in a particular challenge you face?",
    ],
  },
  {
    id: 4,
    title: "Not Being Ashamed of the Gospel or of Suffering Christians",
    color: TEAL,
    icon: "S",
    body: "The shame dynamics of 2 Timothy 1 are not ancient history. Christians in many parts of the world today face the same pressure that drove away &lsquo;all who are in Asia&rsquo; &mdash; the social, professional, or physical cost of being publicly associated with the gospel or with persecuted believers. In Western contexts the cost is usually lower but still real: the career cost of publicly holding orthodox positions, the social cost of defending a Christian in disrepute, the relational cost of maintaining theological convictions that others find offensive. The Onesiphorus principle is portable: he did not do anything dramatic &mdash; he searched until he found, and he was present. Unashamed loyalty often looks like persistent presence.",
    questions: [
      "Who in your community is in a situation analogous to Paul&rsquo;s &mdash; suffering, socially isolated, or carrying a kind of public shame for their faith or conviction? What would Onesiphorus&rsquo;s response look like applied to them?",
      "What specific gospel conviction do you find it most difficult to hold publicly &mdash; the one where you feel most tempted to be ashamed or to soften what you actually believe?",
      "Paul says he is not ashamed because &lsquo;I know whom I have believed&rsquo; (v. 12). How does personal knowledge of God &mdash; not just doctrinal knowledge about him &mdash; function as the ground of unashamed courage?",
    ],
  },
  {
    id: 5,
    title: "Guarding Sound Doctrine",
    color: GREEN,
    icon: "G",
    body: "The charge to &lsquo;guard the good deposit&rsquo; (v. 14) applies not only to ordained ministers but to every Christian who has been entrusted with the gospel. The deposit is the apostolic faith &mdash; the content of what the church received from the apostles and has passed on through every generation. Guarding it does not mean treating it as a museum exhibit; it means actively holding it, teaching it, defending it when it is challenged, and refusing to trade it away for social peace. The means of guarding is the Holy Spirit who dwells within &mdash; which means that guarding the gospel is not a purely intellectual exercise but a spiritual one, requiring prayer, dependence, and community.",
    questions: [
      "What specific aspect of sound doctrine do you feel least equipped to guard or explain in your current context &mdash; and what would it take to grow in that area?",
      "What is the difference between guarding the deposit and clinging to tradition? How do you hold the apostolic faith firmly while engaging a changing culture faithfully?",
      "Paul models both strong theological conviction (&lsquo;follow the pattern of sound words&rsquo;) and deep relational warmth (&lsquo;my beloved child,&rsquo; &lsquo;I long to see you&rsquo;). How do these two things relate to each other in healthy Christian community?",
    ],
  },
];

export default function SecondTimothy1Page() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openVerse, setOpenVerse] = useState<string | null>("vv1-2");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "EhWaG7MKXMI", title: "2 Timothy 1 &mdash; Fan Into Flame the Gift of God" },
    { videoId: "M9tN3o0kGTI", title: "Not Ashamed of the Gospel &mdash; Courage in 2 Timothy 1" },
    { videoId: "XVnKtNDgvHQ", title: "Sincere Faith: Lois, Eunice, and Timothy (2 Timothy 1:3-5)" },
    { videoId: "B4WRUGcNnB4", title: "Guard the Good Deposit &mdash; Paul&rsquo;s Final Charge (2 Timothy 1:13-14)" },
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
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 14px", color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 18 }}>
            <span dangerouslySetInnerHTML={{ __html: "BIBLE STUDY GUIDE &mdash; 2 TIMOTHY 1" }} />
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            <span dangerouslySetInnerHTML={{ __html: "Fan Into Flame the Gift of God" }} />
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, maxWidth: 680, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Second Timothy 1 is Paul&rsquo;s final letter &mdash; written from prison before his execution &mdash; a deeply personal charge to Timothy. It moves through a cascade of gospel convictions: the inheritance of sincere faith, the spirit of power not fear, the eternal grace given before creation, the charge to guard the good deposit, and the portrait of Onesiphorus who was not ashamed of Paul&rsquo;s chains." }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Passage", value: "2 Timothy 1:1&ndash;18", color: ROSE },
              { label: "Author", value: "Paul the Apostle", color: PURPLE },
              { label: "Setting", value: "Roman Prison, c. 66&ndash;67 AD", color: GOLD },
              { label: "Theme", value: "Courage &amp; Faithfulness", color: GREEN },
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
              style={{ background: "transparent", border: "none", color: activeTab === t.id ? ROSE : MUTED, fontWeight: activeTab === t.id ? 800 : 500, fontSize: 14, padding: "16px 20px", cursor: "pointer", borderBottom: activeTab === t.id ? `2px solid ${ROSE}` : "2px solid transparent", whiteSpace: "nowrap", transition: "color 0.15s" }}
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
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 12 }}>
                <span dangerouslySetInnerHTML={{ __html: "CHAPTER OVERVIEW" }} />
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: "Second Timothy 1 is the opening chapter of Paul&rsquo;s final letter, written from imprisonment in Rome while awaiting execution. The chapter&rsquo;s emotional register is unlike anything else in Paul&rsquo;s letters: intense personal affection (vv. 3&ndash;4), deep theological grounding (vv. 9&ndash;10), urgent pastoral charge (vv. 6&ndash;8, 13&ndash;14), and the raw pain of abandonment set against the vivid relief of loyal friendship (vv. 15&ndash;18). It is a letter shaped by the imminence of death." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s organizing theme is the antithesis between shame and courage. Paul has been publicly condemned; most of his Asian supporters have deserted him; one loyal friend found him after an active search. Against this backdrop, Paul presses two charges on Timothy: do not be ashamed of the gospel or of me (v. 8), and guard the good deposit (v. 14). Both charges are grounded not in Timothy&rsquo;s natural courage but in the character of God and the power of the indwelling Spirit." }} />
            </div>

            {OVERVIEW_SECTIONS.map((section) => (
              <div key={section.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
                <h2 style={{ color: section.color, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: section.title }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
              </div>
            ))}

            {/* Key Verse Card */}
            <div style={{ background: `linear-gradient(135deg, ${ROSE}18 0%, ${PURPLE}12 100%)`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 32, marginTop: 28, textAlign: "center" }}>
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>
                <span dangerouslySetInnerHTML={{ __html: "KEY VERSE" }} />
              </div>
              <blockquote style={{ margin: "0 0 16px", padding: 0 }}>
                <p style={{ color: TEXT, fontSize: "clamp(16px, 2.5vw, 20px)", fontStyle: "italic", lineHeight: 1.7, fontFamily: "Georgia, serif", margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For God gave us a spirit not of fear but of power and love and self-control.&rdquo;" }} />
              </blockquote>
              <div style={{ color: MUTED, fontSize: 14, fontWeight: 700 }}>
                <span dangerouslySetInnerHTML={{ __html: "2 Timothy 1:7" }} />
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
                <span dangerouslySetInnerHTML={{ __html: "SIX MAJOR THEMES IN 2 TIMOTHY 1" }} />
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Second Timothy 1 is compact but theologically rich. These six themes trace the major lines of Paul&rsquo;s argument &mdash; from the personal (inherited faith, gifts, courage) to the doctrinal (eternal grace, the abolition of death) to the practical (guarding the deposit, the example of Onesiphorus)." }} />
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
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Click any section to expand its verse-by-verse exposition. The chapter has six literary units, each receiving full exposition. All English quotations are from the ESV." }} />
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
                          <span dangerouslySetInnerHTML={{ __html: "ESV &mdash; 2 TIMOTHY 1:" + section.range.replace("vv. ", "").replace("&ndash;", "-") }} />
                        </div>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: section.content }} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {section.exposition.map((exp, idx) => (
                          <div key={idx} style={{ borderLeft: `3px solid ${section.color}40`, paddingLeft: 18 }}>
                            <h4 style={{ color: section.color, fontWeight: 800, fontSize: 15, margin: "0 0 8px" }} dangerouslySetInnerHTML={{ __html: exp.heading }} />
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
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Second Timothy 1 is one of the most personally searching chapters in the New Testament. These five application sections press Paul&rsquo;s arguments into the concrete texture of Christian life &mdash; from the inheritance of faith to the daily cost of unashamed loyalty. Each section includes reflection questions for personal or group use." }} />
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

            {/* Closing Call-Out */}
            <div style={{ background: `linear-gradient(135deg, ${ROSE}18 0%, ${PURPLE}12 100%)`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 32, marginTop: 32, textAlign: "center" }}>
              <div style={{ color: ROSE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>
                <span dangerouslySetInnerHTML={{ __html: "PAUL&rsquo;S TESTIMONY" }} />
              </div>
              <p style={{ color: TEXT, fontSize: "clamp(15px, 2.2vw, 18px)", fontStyle: "italic", fontFamily: "Georgia, serif", lineHeight: 1.8, margin: "0 0 16px" }} dangerouslySetInnerHTML={{ __html: "&ldquo;But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me.&rdquo;" }} />
              <p style={{ color: MUTED, fontSize: 14, fontWeight: 700, margin: 0 }}>
                <span dangerouslySetInnerHTML={{ __html: "2 Timothy 1:12" }} />
              </p>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 44 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ color: ROSE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
              <span dangerouslySetInnerHTML={{ __html: "VIDEO TEACHINGS" }} />
            </div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: 0 }}>
              <span dangerouslySetInnerHTML={{ __html: "Teaching Videos on 2 Timothy 1" }} />
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
            {["1 Timothy 4", "2 Timothy 2", "2 Timothy 3"].map((link) => (
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
