"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Paul in Corinth",
  "Before Gallio",
  "Apollos Instructed",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Acts 18",
    reference: "Acts 18:1&ndash;28",
    paragraphs: [
      "Acts chapter 18 carries the story of the gospel&rsquo;s westward advance into one of its most strategic settings: the great commercial city of Corinth. Having reasoned with the philosophers at Athens, Paul now arrives in a teeming, cosmopolitan port notorious for its wealth and its immorality, and there he plants a church that will become one of the most significant &mdash; and most troubled &mdash; of all the congregations he founded. The chapter spans the close of the second missionary journey and the opening of the third, showing the steady, patient labor by which the early mission took root.",
      "The first movement introduces Aquila and Priscilla and Paul&rsquo;s settled ministry in Corinth (18:1&ndash;4). Paul meets a Jewish couple recently expelled from Rome by the edict of Claudius, and because they share the trade of tentmaking he stays and works with them. Every Sabbath he reasons in the synagogue, seeking to persuade both Jews and Greeks. Here the apostle supports himself with his own hands while devoting his rest days to proclaiming Christ, a portrait of bivocational, tireless ministry.",
      "When opposition mounts, Paul makes a decisive turn (18:5&ndash;11). The arrival of Silas and Timothy frees him to give himself wholly to the word, but when the synagogue resists and reviles him, he shakes out his garments and declares that he will now go to the Gentiles. The Lord himself appears to him in a vision by night, commanding him not to be afraid but to keep speaking, &ldquo;for I have many in this city who are my people.&rdquo; Encouraged by this promise, Paul remains in Corinth a year and six months, teaching the word of God.",
      "The third movement brings Paul before the Roman proconsul Gallio (18:12&ndash;17). The Jews unite to accuse Paul of persuading people to worship contrary to the law, but Gallio refuses to adjudicate what he regards as an internal Jewish dispute and drives them from the tribunal. When Sosthenes, the ruler of the synagogue, is beaten before the judgment seat, Gallio pays it no attention. This Roman ruling effectively shields the Christian mission, treating it as a matter beyond the reach of the magistrate&rsquo;s sword.",
      "The chapter then narrates Paul&rsquo;s return and the beginning of his third journey (18:18&ndash;23). He sails for Syria with Priscilla and Aquila, cutting his hair at Cenchreae because of a vow, pauses briefly at Ephesus to reason in the synagogue, lands at Caesarea, greets the church, and goes down to Antioch. After spending some time there he sets out again, traveling through the region of Galatia and Phrygia, strengthening all the disciples. The mission is never static; it is always pressing onward and circling back to build up what has been planted.",
      "Finally the chapter turns to Apollos, an eloquent and learned Alexandrian Jew who teaches accurately about Jesus yet knows only the baptism of John (18:24&ndash;28). Priscilla and Aquila take him aside and explain to him the way of God more accurately, a quiet act of private discipleship that equips a gifted teacher for far greater usefulness. Apollos crosses to Achaia and there powerfully refutes the Jews in public, showing from the Scriptures that Jesus is the Christ. The chapter closes by celebrating teamwork, hospitality, and the careful handing-on of sound doctrine.",
    ],
  },
  {
    id: "Paul in Corinth",
    heading: "Paul in Corinth: Aquila and Priscilla",
    reference: "Acts 18:1&ndash;11",
    paragraphs: [
      "Paul leaves Athens and comes to Corinth, a city that could hardly differ more from the philosophical quiet of the Areopagus (18:1). Corinth was a bustling Roman colony astride the trade routes of two seas, rich, diverse, and morally lax, its very name a byword for sexual immorality. It is here, in this unlikely soil, that Paul will labor longest, and here that the gospel will demonstrate its power to take root among sailors, merchants, slaves, and the well-to-do alike.",
      "In Corinth Paul finds Aquila and Priscilla, a Jewish couple recently come from Italy because the emperor Claudius had ordered all the Jews to leave Rome (18:2). They share Paul&rsquo;s trade, for they are tentmakers, and so he stays with them and works (18:3). This partnership in labor and in faith becomes one of the great friendships of the New Testament; Aquila and Priscilla will travel with Paul, host a church in their home, and risk their own necks for his life. The mission advances not through Paul alone but through faithful companions.",
      "Paul&rsquo;s pattern in Corinth shows the rhythm of his ministry: he works through the week at his trade and reasons in the synagogue every Sabbath, trying to persuade Jews and Greeks (18:4). He refuses to be a financial burden, earning his own bread so that the gospel might go out free of charge. The dignity of honest manual work and the urgency of proclamation stand side by side; the apostle is no idle professional but a craftsman who preaches.",
      "A shift comes when Silas and Timothy arrive from Macedonia (18:5). Freed perhaps by the gifts they bring, Paul becomes &ldquo;occupied with the word,&rdquo; devoting himself wholly to testifying to the Jews that the Christ is Jesus. The intensity rises, and with it the resistance. When the synagogue opposes and reviles him, Paul shakes out his garments &mdash; a prophetic gesture of separation &mdash; and declares, &ldquo;Your blood be on your own heads! I am innocent. From now on I will go to the Gentiles&rdquo; (18:6).",
      "This turn is not abandonment but obedience to the pattern of the mission: to the Jew first, and then to the Gentile. Paul moves next door to the house of Titius Justus, a worshiper of God, hard by the synagogue itself (18:7). And then comes a remarkable fruit: &ldquo;Crispus, the ruler of the synagogue, believed in the Lord, together with his entire household&rdquo; (18:8). Even as the institution resists, its own leader is won, and many Corinthians who hear believe and are baptized.",
      "In a moment of vulnerability the Lord comes to Paul in a vision by night (18:9). &ldquo;Do not be afraid, but go on speaking and do not be silent, for I am with you, and no one will attack you to harm you&rdquo; (18:9&ndash;10). The command is matched by a promise that anchors the whole enterprise: &ldquo;for I have many in this city who are my people&rdquo; (18:10). Before they have believed, God already names them as his own; the harvest is assured by his electing grace, and Paul&rsquo;s task is simply to keep speaking.",
      "Strengthened by this assurance, Paul settles in for the long work: &ldquo;And he stayed a year and six months, teaching the word of God among them&rdquo; (18:11). Eighteen months of patient, grounded ministry build a congregation deep enough to receive the great letters Paul would later send it. The vision did not promise ease but presence, and on the strength of that presence the apostle endures, plants, and waters, trusting the Lord to gather the people he has already claimed as his own.",
    ],
  },
  {
    id: "Before Gallio",
    heading: "Before Gallio and the Return to Antioch",
    reference: "Acts 18:12&ndash;23",
    paragraphs: [
      "The settled ministry in Corinth is tested when &ldquo;Gallio was proconsul of Achaia&rdquo; and the Jews make a united attack upon Paul, bringing him before the tribunal (18:12). The charge is carefully framed for a Roman court: &ldquo;This man is persuading people to worship God contrary to the law&rdquo; (18:13). They hope to have the Roman authority declare Paul&rsquo;s message an illegal religion, distinct from the protected faith of Israel, and so to crush the young church with the weight of imperial law.",
      "The outcome turns on Gallio&rsquo;s judgment. Before Paul can even open his mouth in defense, Gallio dismisses the case (18:14). &ldquo;If it were a matter of wrongdoing or vicious crime, O Jews, I would have reason to accept your complaint. But since it is a matter of questions about words and names and your own law, see to it yourselves. I refuse to be a judge of these things&rdquo; (18:14&ndash;15). The proconsul regards the dispute as an internal Jewish affair, beyond the proper concern of Rome, and drives them from the tribunal (18:16).",
      "This ruling carried weight far beyond the moment. Gallio was the brother of the philosopher Seneca, and his decision, recorded as the verdict of a respected proconsul, set a precedent that the Christian message fell within the bounds of the tolerated Jewish religion and was not a crime against Rome. In God&rsquo;s providence, the indifference of a Roman judge became a legal shield, protecting the mission across the empire in the crucial years of its expansion.",
      "The scene ends with a sharp irony. When the crowd seizes Sosthenes, the ruler of the synagogue, and beats him before the tribunal, &ldquo;Gallio paid no attention to any of this&rdquo; (18:17). The accusers, who had hoped to see Paul beaten, see instead their own leader struck, while the magistrate looks on unmoved. The persecutors are confounded, and the apostle, untouched, is free to continue the work the Lord had promised to guard.",
      "After this Paul remains many days longer and then takes his leave, sailing for Syria with Priscilla and Aquila (18:18). At Cenchreae, the eastern port of Corinth, &ldquo;he had cut his hair, for he was under a vow&rdquo; (18:18). This Nazirite-style vow shows Paul, the apostle to the Gentiles, still moving freely within the devotional life of his own people, expressing personal thanksgiving and consecration to God in a thoroughly Jewish way.",
      "Arriving at Ephesus, Paul leaves his companions and himself goes into the synagogue to reason with the Jews (18:19). They ask him to stay longer, but he declines, promising, &ldquo;I will return to you if God wills&rdquo; (18:21). The brief visit plants a seed in Ephesus that will later become one of the most fruitful chapters of his ministry, and it leaves Priscilla and Aquila behind in the city to continue the work and to disciple others in his absence.",
      "Paul lands at Caesarea, goes up and greets the church, and then goes down to Antioch, the home base from which his journeys began (18:22). After spending some time there, he sets out once more, beginning the third missionary journey by traveling &ldquo;from place to place through the region of Galatia and Phrygia, strengthening all the disciples&rdquo; (18:23). The mission is restless and pastoral at once: ever pressing into new territory, yet always returning to build up and establish the believers already won.",
    ],
  },
  {
    id: "Apollos Instructed",
    heading: "Apollos Instructed in the Way of God",
    reference: "Acts 18:24&ndash;28",
    paragraphs: [
      "The chapter closes with a vivid portrait of a remarkable man. &ldquo;Now a Jew named Apollos, a native of Alexandria, came to Ephesus. He was an eloquent man, competent in the Scriptures&rdquo; (18:24). Alexandria was a center of learning and of a rich tradition of Jewish scholarship, and Apollos arrives with formidable gifts: persuasive in speech and mighty in the Scriptures. He is exactly the kind of polished, capable teacher a young movement might prize.",
      "His knowledge, however, was incomplete. &ldquo;He had been instructed in the way of the Lord. And being fervent in spirit, he spoke and taught accurately the things concerning Jesus, though he knew only the baptism of John&rdquo; (18:25). Apollos taught truly as far as he understood, with real fervor and accuracy, but his understanding stopped at the threshold of John&rsquo;s preparatory baptism. He had the message of repentance and expectation but had not yet grasped the fullness of what had come in Christ and at Pentecost.",
      "It is here that Priscilla and Aquila step quietly forward. Hearing Apollos speak boldly in the synagogue, &ldquo;they took him aside and explained to him the way of God more accurately&rdquo; (18:26). The scene is a model of gentle, private discipleship. They do not publicly humiliate this gifted teacher or correct him before the crowd; they take him aside, in the dignity of private conversation, and fill out what was lacking in his knowledge with patience and grace.",
      "The detail that Priscilla is named &mdash; often first, before her husband &mdash; is striking and significant. Here is a woman engaged, alongside her husband, in teaching theology to one of the most learned men of the age. The early church drew on the gifts of all its members; the careful instruction of Apollos came through a couple working in partnership, and a woman&rsquo;s grasp of the way of God proved essential to equipping a future leader of the church.",
      "Equipped and corrected, Apollos desires to cross over to Achaia, and the brothers encourage him, writing to the disciples there to welcome him (18:27). This is the church working as a network of trust: a letter of commendation, the welcome of a stranger, the sending of a gifted teacher to where he is needed. The discipleship he received in private now overflows into public usefulness, and the body of Christ functions as one connected whole across the cities of the empire.",
      "When he arrives, the fruit is immediate and powerful. &ldquo;He greatly helped those who through grace had believed&rdquo; (18:27). The same gifts that made him eloquent now serve the strengthening of the saints, building up those who had already trusted Christ. What grace had begun in the believers of Achaia, Apollos was used to deepen and confirm, watering where Paul had planted.",
      "His public ministry is equally forceful: &ldquo;for he powerfully refuted the Jews in public, showing by the Scriptures that the Christ was Jesus&rdquo; (18:28). The man once limited to John&rsquo;s baptism now wields the whole counsel of God, proving from the Scriptures the very point at the heart of the gospel. The chapter ends as a celebration of teamwork, hospitality, and the careful handing-on of sound doctrine &mdash; a gifted teacher made greater by humble correction, and a church strengthened by the faithful labor of many hands.",
    ],
  },
];

const videoItems = [
  { videoId: "Vc4xMr8Pw2d", title: "BibleProject - Acts 18 Overview and the Corinth Mission" },
  { videoId: "Wn7bLv3Tz9H", title: "Paul in Corinth with Aquila and Priscilla" },
  { videoId: "Xp1cKm6Yx5L", title: "Before Gallio - Roman Law and the Christian Mission" },
  { videoId: "Yz8dBn2Qv0N", title: "Apollos Instructed in the Way of God More Accurately" },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: `New Testament Study`,
  title: `The Acts of the Apostles, Chapter 18`,
  intro: `Paul arrives in Corinth, meets Aquila and Priscilla, and labors as a tentmaker while reasoning in the synagogue &mdash; encouraged by the Lord&rsquo;s vision to stay, vindicated before the proconsul Gallio, returning to Antioch to begin his third journey, and watching as Apollos is instructed in the way of God more accurately.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Acts 18 through visual teaching on Paul&rsquo;s ministry in Corinth, the partnership of Aquila and Priscilla, the ruling of Gallio that shielded the Christian mission, and the gentle, private discipleship that equipped Apollos for a powerful public ministry.`,
  calloutTitle: `Many People in This City`,
  calloutBody: `Acts 18 shows the gospel taking root in a hard city through patient labor, faithful partnership, and the providential protection of God. Paul works with his hands and reasons in the synagogue, the Lord encourages him with the promise of a people already his own, a Roman proconsul unwittingly shields the mission, and a gifted teacher is made greater by humble, private correction. Through teamwork, hospitality, and the careful handing-on of sound doctrine, the word of God spreads and is strengthened.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
