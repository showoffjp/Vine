"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "lDqz0II_lZA", title: "1 Corinthians - The Bible Project Overview" },
  { videoId: "Ll-jpUZfgQA", title: "Systematic Giving and the Collection for the Saints" },
  { videoId: "Z6Jp9_ohcNA", title: "Be Watchful, Stand Firm, Act Like Men, Be Strong" },
  { videoId: "Qe2Rw3a1d7Q", title: "Maranatha - Our Lord, Come - The Early Christian Prayer" },
];

interface ContentSection {
  heading: string;
  reference: string;
  color: string;
  paragraphs: string[];
}

const overviewSections: ContentSection[] = [
  {
    heading: "The Letter Comes Home to Earth",
    reference: "1 Corinthians 16:1&ndash;24",
    color: GOLD,
    paragraphs: [
      "After fifteen chapters that soared through the deepest waters of the Christian faith &mdash; divisions and the cross, marriage and freedom, the Lord&rsquo;s Supper, spiritual gifts, the hymn to love, and the towering resurrection chapter &mdash; Paul brings his letter down to the most concrete details of church life. There is money to be collected, travel to be arranged, coworkers to be welcomed, and a family of believers to be honored. The chapter shows us that the loftiest theology always lands in ordinary obedience, in the way a congregation handles its offerings, its calendar, and its relationships.",
      "The structure of the chapter is plain and practical. Paul gives instructions about the collection for the saints in Jerusalem (16:1&ndash;4), then shares his own travel plans through Macedonia and his hope to spend the winter in Corinth (16:5&ndash;9). He commends Timothy and explains the situation with Apollos (16:10&ndash;12), issues a stirring fivefold exhortation crowned by love (16:13&ndash;14), urges submission to the household of Stephanas (16:15&ndash;18), and closes with warm greetings, the holy kiss, a solemn word about loving the Lord, the Aramaic prayer Maranatha, and a benediction of grace (16:19&ndash;24).",
      "What ties these scattered topics together is the unity and order of the body of Christ. The same God who is glorified in the resurrection of the dead is glorified in a believer setting aside a sum of money on the first day of the week. The church in Corinth is not an island; it is bound to the saints in Jerusalem by the bond of generosity, bound to the churches of Asia by greetings, and bound to its own faithful workers by honor and submission. Paul is teaching the Corinthians that to belong to Christ is to belong to a worldwide family with real obligations.",
      "The chapter also pulses with affection and urgency. Paul is a missionary on the move, watching for open doors and counting the adversaries; he is a mentor sending a younger man into a difficult church; he is a pastor whose heart is refreshed by faithful friends. And running underneath it all is the great forward lean of the early church toward the return of Jesus, captured in a single Aramaic word that the Corinthians would have understood as a heartbeat of hope: Maranatha, Our Lord, come.",
    ],
  },
  {
    heading: "From the Highest Doctrine to the Daily Offering",
    reference: "1 Corinthians 16:1&ndash;4",
    color: TEAL,
    paragraphs: [
      "It is striking that immediately after the soaring climax of chapter fifteen &mdash; &ldquo;in the Lord your labor is not in vain&rdquo; &mdash; Paul writes, &ldquo;Now concerning the collection for the saints&rdquo; (16:1). The resurrection is not an excuse to float above the practical; it is the engine of generosity. Because the grave has been defeated and our labor is not wasted, we can pour out our resources for the relief of fellow believers without fear of loss. The most heavenly chapter in the Bible flows directly into a fundraising appeal, and that is no accident.",
      "The collection was a relief fund for the poor and famine-stricken believers in Jerusalem, a project Paul carried across his churches as a sign of the unity between Gentile and Jewish Christians. He had given the same instructions to the churches of Galatia, so this was no special burden laid on Corinth alone but a shared act of love across the whole apostolic mission. The Gentile churches, who had received the spiritual riches of the gospel from Jerusalem, were now sending back material help &mdash; a beautiful picture of the body caring for its own.",
      "Paul&rsquo;s method is famous for its simple wisdom: &ldquo;On the first day of every week, each of you is to put something aside and store it up, as he may prosper&rdquo; (16:2). Giving was to be regular, anchored to the day of resurrection worship; personal, with each one taking part; systematic, set aside in advance rather than scraped together in a panic; and proportional, measured by how God had prospered each giver. This is one of the clearest windows in the New Testament into the rhythm of early Christian worship gathered on the first day of the week.",
      "Finally, Paul guards the integrity of the gift. &ldquo;When I arrive, I will send those whom you accredit by letter to carry your gift to Jerusalem&rdquo; (16:3), and if it seemed fitting, he would go along too (16:4). The money would be handled by approved, named representatives, carried with transparent oversight, so that no whisper of mishandling could touch the work. Paul models a financial accountability that protects both the givers and the messengers, treating the Lord&rsquo;s money with scrupulous care.",
    ],
  },
];

const themeSections: ContentSection[] = [
  {
    heading: "Systematic Generosity and the Unity of the Churches",
    reference: "1 Corinthians 16:1&ndash;4",
    color: GOLD,
    paragraphs: [
      "The first great theme of the chapter is the grace of planned, proportional giving. Paul does not appeal to sudden emotion or high-pressure manipulation; he asks for a steady discipline. &ldquo;On the first day of every week, each of you is to put something aside and store it up, as he may prosper&rdquo; (16:2). Every word matters: every week speaks of regularity, each of you of personal responsibility, put something aside of intentional setting apart, and as he may prosper of proportion to income. This is a pattern any believer in any century can follow.",
      "The tie of giving to the first day of the week tells us something precious about the early church. The believers were already gathering on the day Christ rose, and that gathering naturally included the setting aside of gifts for the work of God and the relief of the poor. Worship and generosity belonged together from the very beginning; the people who broke bread in memory of the risen Lord also opened their hands to needy saints far away. Stewardship was woven into the fabric of Christian assembly, not bolted on as an afterthought.",
      "Behind the mechanics lies a deeper unity. The collection bound the wealthy Gentile congregations to the suffering mother church in Jerusalem, healing potential divisions between Jew and Gentile by a tangible act of love. Money became a sacrament of fellowship, a way of saying that the saints in one city truly belonged to the saints in another. Paul insists on transparent handling, approved messengers, and verifying letters, so that the gift would build trust rather than suspicion and the whole church would be knit more tightly together.",
    ],
  },
  {
    heading: "Open Doors and Many Adversaries",
    reference: "1 Corinthians 16:5&ndash;9",
    color: TEAL,
    paragraphs: [
      "Paul&rsquo;s travel plans reveal a second theme: the strange companionship of opportunity and opposition in gospel work. He intended to pass through Macedonia, perhaps spend the whole winter in Corinth, and only then journey on, so that the church might help him on his way wherever he went (16:5&ndash;7). He held his plans loosely, adding &ldquo;if the Lord permits&rdquo; (16:7), a habit of submitting every itinerary to the sovereign will of God rather than presuming on tomorrow.",
      "Then comes one of the most memorable lines in the letter: &ldquo;I will stay in Ephesus until Pentecost, for a wide door for effective work has opened to me, and there are many adversaries&rdquo; (16:8&ndash;9). Notice that the open door and the many adversaries appear in the same breath. Paul does not see opposition as a sign that the door is shut; he sees it as evidence that the door is worth keeping open. Fruitful ministry and fierce resistance are not opposites but frequent companions.",
      "This reframes how believers read difficulty. An open door &mdash; a real chance for effective work &mdash; will almost always be contested by adversaries, because the enemy of souls does not concede ground without a fight. Paul refuses to flee Ephesus despite the danger, choosing to remain precisely because the opportunity is great. For anyone facing pushback in a hard place of service, the lesson is bracing: the presence of adversaries may be a confirmation, not a contradiction, of the calling to stay.",
    ],
  },
  {
    heading: "Honoring Faithful Servants",
    reference: "1 Corinthians 16:10&ndash;12, 15&ndash;18",
    color: PURPLE,
    paragraphs: [
      "A third theme threads through the chapter: the honoring of those who labor faithfully in the Lord. Paul commends Timothy, asking that the Corinthians put him at ease and let no one despise him, &ldquo;for he is doing the work of the Lord, as I am&rdquo; (16:10&ndash;11). Timothy was young and the Corinthian church was proud and difficult, so Paul throws his apostolic weight behind his protege, urging the church to receive him with respect and send him on in peace.",
      "He also addresses Apollos with notable grace. Paul had strongly urged Apollos to visit Corinth with the other brothers, &ldquo;but it was not at all his will to come now&rdquo; (16:12). There is no rivalry or resentment here, even though some Corinthians had played Paul and Apollos against each other earlier in the letter. Paul respects Apollos&rsquo; own sense of timing and freedom in the Lord, showing a humble, non-competitive partnership in ministry.",
      "The household of Stephanas receives the warmest commendation of all. They were &ldquo;the firstfruits of Achaia&rdquo; and &ldquo;have devoted themselves to the service of the saints&rdquo; (16:15). Paul urges the church to &ldquo;be subject to such as these, and to every fellow worker and laborer&rdquo; (16:16). The refreshing arrival of Stephanas, Fortunatus, and Achaicus had refreshed Paul&rsquo;s spirit and the spirit of the Corinthians (16:17&ndash;18). Such people, who pour themselves out in quiet service, are to be recognized and gladly followed.",
    ],
  },
  {
    heading: "The Fivefold Call to Courage and Love",
    reference: "1 Corinthians 16:13&ndash;14",
    color: GREEN,
    paragraphs: [
      "At the heart of the chapter stands a compact, thunderous exhortation: &ldquo;Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love&rdquo; (16:13&ndash;14). Five rapid imperatives, fired like a drumbeat, summarize the whole posture of Christian resolve. They read almost like a military charge to a garrison under siege, calling the church to alertness, steadfastness, courage, strength, and love.",
      "Each command carries weight. &ldquo;Be watchful&rdquo; means stay awake and alert to danger and to the Lord&rsquo;s return, not lulled into spiritual sleep. &ldquo;Stand firm in the faith&rdquo; calls the church to hold its ground in the gospel without drifting. The third imperative translates a single Greek word, andrizomai, literally &ldquo;act like men&rdquo; &mdash; a summons to courage and maturity, to put away cowardice and behave with brave resolve in the face of opposition. &ldquo;Be strong&rdquo; rounds out the call, urging the church to be empowered and resilient in the Lord.",
      "Yet Paul does not let courage curdle into harshness. The fifth command crowns and governs the other four: &ldquo;Let all that you do be done in love&rdquo; (16:14). Watchfulness, firmness, manliness, and strength could easily become cold, combative, or proud; love keeps them tender and Christlike. Here the great love chapter, written just three chapters earlier, comes home to roost. The same congregation that learned that without love it is nothing is now told that everything it does &mdash; every act of courage and strength &mdash; must be soaked in love.",
    ],
  },
  {
    heading: "Love for the Lord and the Hope of Maranatha",
    reference: "1 Corinthians 16:19&ndash;24",
    color: ROSE,
    paragraphs: [
      "The closing greetings overflow with warmth and the final theme of the chapter rises to the surface: the centrality of love for the Lord and the eager hope of his coming. Paul sends greetings from the churches of Asia, from Aquila and Prisca with the church in their house, and from all the brothers, urging the Corinthians to &ldquo;greet one another with a holy kiss&rdquo; (16:19&ndash;20). The kiss was a sign of family affection, a fitting close to a letter that had wrestled with so much division.",
      "Then Paul takes the pen in his own hand and writes a startling line: &ldquo;If anyone has no love for the Lord, let him be accursed. Our Lord, come!&rdquo; (16:22). The word for accursed is anathema, a solemn devotion to judgment; the issue is not failing a minor test but having no love at all for Jesus, which exposes a heart still outside of grace. Love for Christ, Paul insists, is the dividing line of the universe; to be without it is to stand under a curse.",
      "Immediately after the warning comes the prayer that gives the chapter its heartbeat: Maranatha, an Aramaic phrase meaning &ldquo;Our Lord, come.&rdquo; That Paul preserves it untranslated in Aramaic tells us it was a treasured cry of the earliest Jerusalem believers, one of the most ancient prayers of the church, passed even into Greek-speaking Corinth. It looks forward with longing to the return of Jesus, the very hope established by the resurrection chapter just before it. The letter ends not with doctrine but with desire: come, Lord Jesus.",
      "Paul signs off as he always does, with grace: &ldquo;The grace of the Lord Jesus be with you. My love be with you all in Christ Jesus&rdquo; (16:23&ndash;24). After all the rebukes and corrections of this long, hard letter, the final word to the troubled, gifted, divided Corinthian church is grace and love. The man who had to curse loveless hearts ends by pouring out his own love on them, in Christ Jesus, leaving them in the hands of the coming Lord.",
    ],
  },
];

const verseSections: ContentSection[] = [
  {
    heading: "The Collection for the Saints",
    reference: "1 Corinthians 16:1&ndash;4",
    color: GOLD,
    paragraphs: [
      "&ldquo;Now concerning the collection for the saints: as I directed the churches of Galatia, so you also are to do&rdquo; (16:1). Paul moves to a new subject with the phrase he uses throughout the letter, signaling a fresh topic the Corinthians had likely asked about. The collection was a coordinated, multi-church effort, not a one-off appeal, binding congregations across the empire in a shared work of mercy toward the believers in Jerusalem.",
      "&ldquo;On the first day of every week, each of you is to put something aside and store it up, as he may prosper&rdquo; (16:2). This single verse establishes the enduring pattern of Christian giving &mdash; regular, individual, deliberate, and proportional &mdash; and incidentally confirms that believers were already gathering for worship on the first day of the week, the day of resurrection. Setting money aside in advance meant no hasty, grudging collections when Paul arrived.",
      "&ldquo;And when I arrive, I will send those whom you accredit by letter to carry your gift to Jerusalem. If it seems advisable that I should go also, they will accompany me&rdquo; (16:3&ndash;4). Paul builds in careful accountability. The Corinthians themselves would choose and certify the messengers, the gift would travel under transparent oversight, and Paul kept open the option of joining the delegation. Handling the Lord&rsquo;s money with integrity protects the reputation of the gospel and the trust of the church.",
    ],
  },
  {
    heading: "A Wide Door and Many Adversaries",
    reference: "1 Corinthians 16:5&ndash;9",
    color: TEAL,
    paragraphs: [
      "&ldquo;I will visit you after passing through Macedonia, for I intend to pass through Macedonia, and perhaps I will stay with you or even spend the winter, so that you may help me on my journey, wherever I go&rdquo; (16:5&ndash;6). Paul lays out a real itinerary, hoping for an extended stay rather than a hurried visit, so that genuine relationship and partnership could grow. He envisions the Corinthians sending him on his way, sharing in his mission by their support.",
      "&ldquo;For I do not want to see you now just in passing. I hope to spend some time with you, if the Lord permits&rdquo; (16:7). The qualification &ldquo;if the Lord permits&rdquo; is the mark of a man who has surrendered his calendar to God. Paul plans wisely but holds every plan with an open hand, refusing to presume on the future, ready to be redirected by the sovereign Lord at any moment.",
      "&ldquo;But I will stay in Ephesus until Pentecost, for a wide door for effective work has opened to me, and there are many adversaries&rdquo; (16:8&ndash;9). Here is the chapter&rsquo;s great paradox in a single sentence. The door is wide and the work is effective, yet the adversaries are many &mdash; and the two coexist. Paul stays not in spite of the opposition but because the opportunity is so great, teaching us that resistance often accompanies, rather than refutes, a true open door.",
    ],
  },
  {
    heading: "Timothy and Apollos",
    reference: "1 Corinthians 16:10&ndash;12",
    color: PURPLE,
    paragraphs: [
      "&ldquo;When Timothy comes, see that you put him at ease among you, for he is doing the work of the Lord, as I am. So let no one despise him&rdquo; (16:10&ndash;11). Paul knew Corinth could be hard on a young, perhaps timid, minister, so he shields Timothy with his own authority. The phrase &ldquo;he is doing the work of the Lord, as I am&rdquo; places Timothy alongside Paul himself, demanding that the church receive him with full respect.",
      "&ldquo;Help him on his way in peace, that he may return to me, for I am expecting him with the brothers&rdquo; (16:11). Paul asks the church to send Timothy off well, in peace and with support, so that ministry partnership flows back and forth. The care Paul shows for his young coworker models how an older believer can champion and protect a younger one in a difficult assignment.",
      "&ldquo;Now concerning our brother Apollos, I strongly urged him to visit you with the other brothers, but it was not at all his will to come now. He will come when he has opportunity&rdquo; (16:12). Despite earlier Corinthian factions that pitted Paul against Apollos, there is no jealousy here, only honor and freedom. Paul wanted Apollos to come and even pressed him, yet respected his decision to wait. This is mature, non-competitive ministry, free of rivalry.",
    ],
  },
  {
    heading: "The Fivefold Exhortation",
    reference: "1 Corinthians 16:13&ndash;14",
    color: GREEN,
    paragraphs: [
      "&ldquo;Be watchful, stand firm in the faith, act like men, be strong&rdquo; (16:13). Four crisp commands ring out like a charge to soldiers on the wall. Be watchful: stay alert, awake to danger and to the Lord&rsquo;s coming. Stand firm in the faith: do not be moved from the gospel. The third command renders the Greek andrizomai, &ldquo;act like men,&rdquo; a call to courage and mature manliness, to shake off cowardice and meet opposition with brave resolve. Be strong: be empowered and resilient in the Lord.",
      "These imperatives summarize the resolve Paul has been urging through the whole letter. A church torn by division, tempted by the surrounding culture, and threatened by false teaching needs exactly this stance &mdash; alert, anchored, courageous, and strong. The military flavor is unmistakable; the Christian life is a watch to be kept and a line to be held, not a leisurely stroll.",
      "&ldquo;Let all that you do be done in love&rdquo; (16:14). The fifth command crowns and softens the other four. Without it, watchfulness becomes suspicion, firmness becomes rigidity, courage becomes aggression, and strength becomes domination. Love is the atmosphere in which all the rest must operate. The lesson of the great love chapter (1 Corinthians 13) is here pressed into the bricks of everyday conduct: everything, absolutely everything, is to be done in love.",
    ],
  },
  {
    heading: "The Household of Stephanas",
    reference: "1 Corinthians 16:15&ndash;18",
    color: TEAL,
    paragraphs: [
      "&ldquo;Now I urge you, brothers &mdash; you know that the household of Stephanas were the firstfruits of Achaia, and that they have devoted themselves to the service of the saints&rdquo; (16:15). Stephanas and his household were among the very first converts in the region, the firstfruits of the harvest, and they had given themselves wholeheartedly to serving fellow believers. Their faith was old, tested, and expressed in tireless, humble service.",
      "&ldquo;Be subject to such as these, and to every fellow worker and laborer&rdquo; (16:16). Paul calls the church to recognize and submit to those who have proven themselves by self-giving service. Spiritual leadership here is earned through labor and devotion, not seized by ambition; the church is to gladly follow those who pour themselves out for others. Honor flows toward the servants.",
      "&ldquo;I rejoice at the coming of Stephanas and Fortunatus and Achaicus, for they have made up for your absence, for they refreshed my spirit as well as yours. Give recognition to such people&rdquo; (16:17&ndash;18). These three had traveled to Paul, perhaps carrying the Corinthians&rsquo; letter and gifts, and their presence refreshed his weary spirit. Paul ends the passage with a direct command: give recognition to such people. The quiet, faithful servants of the church deserve to be seen and honored.",
    ],
  },
  {
    heading: "Final Greetings and Maranatha",
    reference: "1 Corinthians 16:19&ndash;24",
    color: ROSE,
    paragraphs: [
      "&ldquo;The churches of Asia send you greetings. Aquila and Prisca, together with the church in their house, send you hearty greetings in the Lord. All the brothers send you greetings. Greet one another with a holy kiss&rdquo; (16:19&ndash;20). The greetings knit the Corinthians into the wider fellowship of believers, naming Paul&rsquo;s dear coworkers Aquila and Prisca and the church meeting in their home. The holy kiss seals the letter with family affection, fitting for a community Paul longs to see reconciled.",
      "&ldquo;I, Paul, write this greeting with my own hand. If anyone has no love for the Lord, let him be accursed. Our Lord, come!&rdquo; (16:21&ndash;22). Paul personally pens the ending, then issues a solemn line: the one who has no love for the Lord is anathema, devoted to judgment, for to be loveless toward Christ is to be outside of saving grace. He follows it instantly with Maranatha, the Aramaic prayer &ldquo;Our Lord, come,&rdquo; one of the most ancient cries of the church, preserved untranslated as a treasure from the first believers.",
      "&ldquo;The grace of the Lord Jesus be with you. My love be with you all in Christ Jesus&rdquo; (16:23&ndash;24). The letter that began with thanksgiving and labored through rebuke and correction ends, as all Paul&rsquo;s letters do, with grace. And he adds his own personal love, given to all of them &mdash; even the difficult, the divided, the proud &mdash; in Christ Jesus. The final note is not condemnation but grace, love, and the longing for the Lord&rsquo;s return.",
    ],
  },
];

const applicationSections: ContentSection[] = [
  {
    heading: "Give the Way the First Believers Gave",
    reference: "Practicing 16:1&ndash;4",
    color: GOLD,
    paragraphs: [
      "Paul&rsquo;s instruction to set something aside on the first day of every week, as you may prosper, is a pattern any believer can adopt today. Generosity flourishes when it is planned rather than impulsive, regular rather than occasional, and proportional rather than arbitrary. Consider building giving into the very rhythm of your week and your worship, deciding in advance what to set aside, so that open-handedness becomes a settled habit rather than a reluctant reaction.",
      "Notice too that giving and the gathered worship of the church belonged together from the start. Tie your generosity to your worship; let the day you remember the risen Lord be a day you open your hands to his people and his mission. And follow Paul&rsquo;s concern for integrity by supporting the transparent, accountable handling of money in your own church, knowing that careful stewardship of the Lord&rsquo;s resources guards the witness of the gospel.",
    ],
  },
  {
    heading: "Read Opposition Rightly",
    reference: "Practicing 16:5&ndash;9",
    color: TEAL,
    paragraphs: [
      "When you find an open door for effective work, do not be surprised or discouraged by the many adversaries who appear alongside it. Paul stayed in Ephesus precisely because the opportunity was great, even though the resistance was fierce. Resistance is often a sign that the door is worth keeping open, not a signal to retreat; the enemy of souls contests ground that matters.",
      "At the same time, hold your plans with an open hand, adding &ldquo;if the Lord permits&rdquo; to your own intentions. Plan wisely, work hard, and pursue real opportunities, but surrender your calendar to the sovereign will of God, ready to be redirected at any moment. Faithful ambition and humble submission are not enemies; they walk together in the life of a servant of Christ.",
    ],
  },
  {
    heading: "Live Out the Fivefold Charge",
    reference: "Practicing 16:13&ndash;18",
    color: GREEN,
    paragraphs: [
      "Let the five commands become a daily examination of your soul. Are you watchful, awake to spiritual danger and to the Lord&rsquo;s return, or have you drifted into a comfortable sleep? Are you standing firm in the faith, anchored to the gospel, or being moved by the pressures around you? Are you acting with courage and maturity, putting away cowardice, or shrinking back from what God has called you to do? Are you strong in the Lord, drawing your strength from him?",
      "And over all of it, ask whether everything you do is being done in love. Courage without love grows harsh; firmness without love grows cold. Let love be the air your obedience breathes. Then take Paul&rsquo;s example with the household of Stephanas to heart: notice the quiet servants in your church, the ones who pour themselves out for others, and give them recognition. Honor and gladly follow those who labor in love.",
    ],
  },
  {
    heading: "Examine Your Love for the Lord and Pray Maranatha",
    reference: "Practicing 16:19&ndash;24",
    color: ROSE,
    paragraphs: [
      "Paul&rsquo;s sharpest line in the chapter forces a searching question: do I actually love the Lord Jesus? Not merely admire him, not merely use his name, but love him. Paul says the dividing line of the universe is love for Christ, and to have none is a fearful thing. Let this drive you not to despair but to the cross, where love for Jesus is kindled and rekindled by gazing on his love for us.",
      "Then learn to pray the most ancient prayer of the church: Maranatha, Our Lord, come. Let your heart lean forward into the hope of his return, the very hope secured by the resurrection. In a world of open doors and many adversaries, of collections and travel plans and faithful servants, the church still cries with the first believers, come, Lord Jesus. And the letter assures you that the grace of the Lord Jesus is with you, and Paul&rsquo;s love, in Christ Jesus.",
    ],
  },
];

const reflectionQuestions = [
  "Is my giving planned, regular, and proportional, woven into my worship the way Paul describes, or is it impulsive and occasional?",
  "When I face an open door with many adversaries, do I retreat, or do I see the opposition as a reason the door is worth keeping open?",
  "Which of the five commands - be watchful, stand firm, act like men, be strong - do I most need to grow in right now?",
  "Is everything I do being done in love, or has my courage and conviction grown harsh and cold?",
  "Who are the quiet, faithful servants in my church that I should recognize, honor, and gladly follow?",
  "If love for the Lord is the dividing line, can I honestly say I love him - and am I praying Maranatha, longing for his return?",
];

export default function FirstCorinthians16GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  function renderSections(list: ContentSection[]) {
    return list.map((section, idx) => (
      <section key={idx} style={{ marginBottom: "2.75rem" }}>
        <h3 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }} dangerouslySetInnerHTML={{ __html: section.heading }} />
        <div style={{ color: section.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: section.reference }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {section.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </section>
    ));
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Corinthians 16
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The collection, final exhortations, and Maranatha &mdash; systematic, proportional giving for the saints, a wide door for effective work with many adversaries, the commendation of faithful servants, the fivefold call to be watchful, stand firm, act like men, be strong, and do all in love, and the early church&rsquo;s ancient cry: &ldquo;Our Lord, come!&rdquo;" }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {activeTab === "Overview" && <div>{renderSections(overviewSections)}</div>}
        {activeTab === "Key Themes" && <div>{renderSections(themeSections)}</div>}
        {activeTab === "Verse by Verse" && <div>{renderSections(verseSections)}</div>}

        {activeTab === "Application" && (
          <div>
            {renderSections(applicationSections)}
            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of 1 Corinthians 16 through visual teaching on systematic giving, the wide open door with many adversaries, the fivefold exhortation, and the early Christian prayer Maranatha.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Our Lord, Come</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "1 Corinthians 16 brings the loftiest theology down to the ground &mdash; to offerings set aside on the first day of the week, to travel plans held with an open hand, to young coworkers and faithful servants, and to a church called to be watchful, firm, courageous, strong, and loving. It ends where the whole letter has been leaning: love for the Lord, and the ancient cry of the first believers, Maranatha, Our Lord, come. And so the grace of the Lord Jesus is with you, and Paul&rsquo;s love, in Christ Jesus." }} />
        </div>
      </main>
    </div>
  );
}
