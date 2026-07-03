"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Phoebe and the Greetings",
  "Warning Against Divisions",
  "Final Greetings and Doxology",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Romans 16",
    reference: "Romans 16:1&ndash;27",
    paragraphs: [
      "Romans chapter 16 is the long and remarkably personal close of Paul&rsquo;s greatest letter. After sixteen chapters that have soared through the heights of sin and grace, justification and sanctification, election and the destiny of Israel, the apostle now descends to the level of named faces and particular friendships. The chapter is a roll call of the early church &mdash; a window into a living, diverse, networked community knit together by the gospel. Far from being a mere appendix, it shows that the towering theology of Romans was always meant to land among real people who loved one another and labored side by side.",
      "The chapter opens with the commendation of Phoebe, a deacon of the church at Cenchreae who very likely carried this very letter to Rome (vv.1&ndash;2). Paul asks the Roman believers to welcome her in the Lord and to help her in whatever she may need, for she has been a patron of many, including Paul himself. In an age without postal services, the carrier of a letter was also its first interpreter, and the apostle entrusts this weighty task to a woman of standing and faith.",
      "There follows an extended series of greetings to some twenty-six named individuals (vv.3&ndash;16), beginning with Priscilla and Aquila, who &ldquo;risked their necks&rdquo; for Paul&rsquo;s life. A striking number of those greeted are women, and many are described as Paul&rsquo;s coworkers and as those who have worked hard in the Lord. The list reveals a church composed of households and house fellowships, of Jews and Gentiles, of the highborn and the enslaved, all bound together in Christ and greeted with the &ldquo;holy kiss.&rdquo;",
      "Into the warmth of these greetings Paul inserts a sharp and sober warning (vv.17&ndash;20). He urges the believers to watch out for those who cause divisions and create obstacles contrary to the teaching they have received, and to avoid them. Such people serve their own appetites and deceive the hearts of the naive with smooth talk. Yet the warning ends in hope: &ldquo;The God of peace will soon crush Satan under your feet,&rdquo; followed by a benediction of grace.",
      "The final movement gathers greetings from Paul&rsquo;s companions (vv.21&ndash;23) &mdash; Timothy, Lucius, Jason, Sosipater, Tertius the scribe who actually penned the letter, Gaius the host, and Erastus the city treasurer. Then the letter rises to one of the most magnificent doxologies in all of Scripture (vv.25&ndash;27), ascribing glory to the God who is able to strengthen the church according to the gospel and the now-revealed mystery, the long-hidden plan to bring all nations to the obedience of faith.",
      "Read as a whole, Romans 16 is a portrait of the gospel made flesh in community. The doctrine of grace expounded in the earlier chapters here bears the fruit of partnership, hospitality, courage, and watchful love. Names we would otherwise never have known are inscribed in Scripture forever because they served Christ and his people. And the whole letter closes where it began &mdash; in the glory of God, who alone is wise, to whom be glory forevermore through Jesus Christ.",
    ],
  },
  {
    id: "Phoebe and the Greetings",
    heading: "Phoebe and the Greetings",
    reference: "Romans 16:1&ndash;16",
    paragraphs: [
      "Paul begins his closing not with a farewell but with a formal commendation: &ldquo;I commend to you our sister Phoebe, a servant of the church at Cenchreae, that you may welcome her in the Lord in a way worthy of the saints, and help her in whatever she may need from you&rdquo; (vv.1&ndash;2). The word translated &lsquo;servant&rsquo; is diakonos, the same term Paul elsewhere uses of recognized ministers, and many understand Phoebe to have held the office of deacon in her local church. She is named first and honored greatly, a woman entrusted with carrying the letter to Rome.",
      "Paul further calls Phoebe a &lsquo;patron&rsquo; of many and of himself &mdash; prostatis, a word suggesting a benefactor of means and standing who used her resources and influence to support the work of the gospel and to protect those who labored in it. In commending her so warmly, Paul models the honor due to those who give themselves to the service of Christ&rsquo;s people, and he sets the tone for the long list of names that follows.",
      "The first greeting goes to a beloved couple: &ldquo;Greet Prisca and Aquila, my fellow workers in Christ Jesus, who risked their necks for my life&rdquo; (vv.3&ndash;4). Priscilla and Aquila appear repeatedly in the New Testament as tentmakers, teachers, and hosts of a house church. Here Paul records that they once put their own lives in mortal danger for his sake, and that not only he but all the Gentile churches are grateful to them. A church meets in their very home.",
      "The list unfolds with affection and specificity. Paul greets Mary, &ldquo;who has worked hard for you,&rdquo; and then Andronicus and Junia, his kinsmen and fellow prisoners, who are &ldquo;well known to the apostles&rdquo; or, as many translate, &ldquo;outstanding among the apostles,&rdquo; and who were in Christ before Paul himself. He greets Apelles, &ldquo;approved in Christ,&rdquo; and the household of Aristobulus, marking how the gospel ran through whole extended families and their servants.",
      "On he goes: Tryphaena and Tryphosa, &ldquo;those workers in the Lord,&rdquo; and the beloved Persis, &ldquo;who has worked hard in the Lord.&rdquo; He greets Rufus, &ldquo;chosen in the Lord,&rdquo; together with his mother, &ldquo;who has been a mother to me as well.&rdquo; The sheer density of names &mdash; men and women, slave and free, Jew and Gentile &mdash; reveals a community richly textured and deeply interwoven, where each laborer is known and valued by name.",
      "Paul rounds off the greetings with a call to mutual affection: &ldquo;Greet one another with a holy kiss. All the churches of Christ greet you&rdquo; (v.16). The holy kiss was the customary sign of family love among the early believers, a tangible expression that those reconciled to God are reconciled to one another. The greeting binds the Roman church not only to Paul but to all the churches scattered across the empire.",
      "This roll call is far more than a postscript. It reveals women serving as deacons, patrons, coworkers, and hard laborers in the gospel; it shows hospitality as a frontline ministry, with homes opened as places of worship; and it displays the relational fabric of the mission, where the spread of the gospel depended on networks of friendship, courage, and shared sacrifice. The grand theology of Romans comes to rest, fittingly, upon a community of named and beloved saints.",
    ],
  },
  {
    id: "Warning Against Divisions",
    heading: "Warning Against Divisions",
    reference: "Romans 16:17&ndash;20",
    paragraphs: [
      "In the midst of warm greetings Paul sounds a sudden and urgent alarm: &ldquo;I appeal to you, brothers, to watch out for those who cause divisions and create obstacles contrary to the doctrine that you have been taught; avoid them&rdquo; (v.17). The tenderness of the chapter does not blunt the apostle&rsquo;s vigilance. Love for the church demands a clear-eyed wariness toward those who would fracture it, and the standard by which such people are to be judged is the apostolic teaching the Romans have already received.",
      "Paul exposes the true motive of these troublemakers: &ldquo;For such persons do not serve our Lord Christ, but their own appetites, and by smooth talk and flattery they deceive the hearts of the naive&rdquo; (v.18). Beneath the surface of their persuasive words lies self-service rather than the service of Christ. Their weapons are not open heresy but charm and flattery, and their victims are the unsuspecting, whose hearts are led astray before their minds are even aware of the danger.",
      "The remedy Paul prescribes is discernment grounded in obedience. He first commends them warmly: &ldquo;For your obedience is known to all, so that I rejoice over you&rdquo; (v.19). Their reputation for faithfulness is a cause of his joy. Yet he immediately adds a careful counsel: &ldquo;but I want you to be wise as to what is good and innocent as to what is evil&rdquo; (v.19). The believer is to be shrewd in recognizing and pursuing the good while remaining unstained and unentangled by evil.",
      "This balance is the very wisdom of Christ, who told his disciples to be &ldquo;wise as serpents and innocent as doves.&rdquo; Paul does not ask the church to become cynical or suspicious of everyone, nor naive and gullible toward smooth-talking deceivers. Rather, he calls for a mature simplicity &mdash; a heart clean of evil and a mind sharp enough to detect it &mdash; so that the unity of the body might be guarded without descending into either harshness or credulity.",
      "Then comes one of the most stirring promises in the letter: &ldquo;The God of peace will soon crush Satan under your feet&rdquo; (v.20). The very title &lsquo;God of peace&rsquo; is set against the divider and deceiver, who is Satan himself working through these false teachers. The promise echoes the first gospel word in Genesis, where the seed of the woman would crush the serpent&rsquo;s head. The church&rsquo;s faithfulness under threat shares in Christ&rsquo;s own victory over the enemy.",
      "The note of warning thus ends not in fear but in triumphant hope. Those who cause divisions may seem formidable, but their defeat is already certain and near; the God of peace will tread Satan down beneath the feet of his people. Paul seals the section with grace: &ldquo;The grace of our Lord Jesus Christ be with you&rdquo; (v.20). Vigilance and grace, warning and blessing, walk together &mdash; for the same Lord who arms his people against deceivers also keeps them in his unfailing favor.",
    ],
  },
  {
    id: "Final Greetings and Doxology",
    heading: "Final Greetings and the Doxology",
    reference: "Romans 16:21&ndash;27",
    paragraphs: [
      "As the letter draws to its close, Paul gathers greetings from those gathered around him: &ldquo;Timothy, my fellow worker, greets you; so do Lucius and Jason and Sosipater, my kinsmen&rdquo; (v.21). Timothy, Paul&rsquo;s most trusted companion and the eventual recipient of two letters of his own, heads the list, joined by three of Paul&rsquo;s kinsmen. The apostle is never alone; he writes from within a circle of fellow laborers who share his greetings and his cause.",
      "Then an unexpected and charming voice breaks in: &ldquo;I Tertius, who wrote this letter, greet you in the Lord&rdquo; (v.22). Tertius was the scribe to whom Paul dictated Romans, and he steps briefly out from behind the apostle&rsquo;s words to send his own greeting. It is a touching reminder that even this monumental letter was a collaborative act, penned by a faithful hand who is honored to be named among the saints.",
      "More greetings follow from the household at Corinth where Paul was lodged: &ldquo;Gaius, who is host to me and to the whole church, greets you&rdquo; (v.23). Gaius opened his home not only to Paul but to the entire local congregation. Alongside him, Paul names &ldquo;Erastus, the city treasurer,&rdquo; and &ldquo;our brother Quartus.&rdquo; The mention of a city treasurer shows that the gospel had reached even into the ranks of civic officials, drawing in people of public standing.",
      "Having concluded the greetings, Paul lifts the whole letter heavenward in a closing doxology of extraordinary grandeur: &ldquo;Now to him who is able to strengthen you according to my gospel and the preaching of Jesus Christ&rdquo; (v.25). The God who is praised is first the God who establishes and upholds his people, and the means of that strengthening is the very gospel Paul has set forth and the proclamation of Jesus Christ that runs through the letter.",
      "The doxology unfolds the mystery at the heart of that gospel: it is &ldquo;according to the revelation of the mystery that was kept secret for long ages but has now been disclosed and through the prophetic writings has been made known to all nations, according to the command of the eternal God, to bring about the obedience of faith&rdquo; (vv.25&ndash;26). The long-hidden plan of God to include the nations is now openly revealed, and its purpose is that all peoples might come to the obedience that springs from faith.",
      "The letter ends as it began, in worship: &ldquo;to the only wise God be glory forevermore through Jesus Christ! Amen&rdquo; (v.27). The God who alone is wise &mdash; whose wisdom devised salvation, governed history, and reconciled Jew and Gentile &mdash; is given glory without end, and that glory ascends through Jesus Christ, the mediator through whom every blessing of the gospel has come.",
      "In these few verses the doxology gathers up the whole theology of Romans. The power of God to save and strengthen, the gospel entrusted to Paul, the mystery of the Gentiles&rsquo; inclusion, the obedience of faith among all nations, and the glory of the only wise God through Jesus Christ &mdash; every great theme of the letter is folded into one final ascription of praise. Romans does not merely end; it crescendos into worship, leaving the church on its knees before the God whose grace it has so gloriously proclaimed.",
    ],
  },
];

const videoItems = [
  { videoId: "Rm16gReETk1", title: "BibleProject - Book of Romans Overview" },
  { videoId: "Pb2QzNvhWc8", title: "Romans 16 - Phoebe and the Greetings of the Early Church" },
  { videoId: "Dv4WkMxr7Yn", title: "Watch Out for Those Who Cause Divisions - Romans 16 Study" },
  { videoId: "Gx9LbZc3pQt", title: "The Doxology of Romans - To the Only Wise God Be Glory" },
];

const data: SectionGuideData = {
  accent: "#6B4FBB",
  badge: `New Testament Study`,
  title: `The Letter to the Romans, Chapter 16`,
  intro: `Paul&rsquo;s long and personal close commends Phoebe, greets some twenty-six named saints including Priscilla and Aquila, warns against those who cause divisions, and gathers greetings from his companions &mdash; before rising to a magnificent doxology: &ldquo;to the only wise God be glory forevermore through Jesus Christ! Amen.&rdquo; The chapter is a window into the early church&rsquo;s diverse, networked community.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Romans 16 through visual teaching on the commendation of Phoebe and the long roll call of named saints, the courage and partnership that carried the gospel forward, the sober warning against those who cause divisions by smooth talk, and the towering doxology that gathers up the whole theology of Romans into glory to the only wise God through Jesus Christ.`,
  calloutTitle: `To the Only Wise God`,
  calloutBody: `Romans 16 shows the gospel made flesh in a community of named and beloved saints &mdash; deacons and patrons, coworkers and hosts, the courageous and the hard-laboring &mdash; guarded against division and crowned with worship. The God of peace will soon crush Satan under your feet, and to the only wise God be glory forevermore through Jesus Christ. Amen.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
