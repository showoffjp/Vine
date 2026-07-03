"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Growing in Grace",
  "Confirm Your Calling",
  "The Trustworthy Word",
  "False Teachers",
  "The Day of the Lord",
  "Videos",
]

const sections = [
  {
    id: "Growing in Grace",
    heading: "Growing in Grace",
    reference: "2 Peter 1:1&ndash;4",
    paragraphs: [
      "The Second Letter of Peter carries the weight of a final testament. The apostle writes as a man who knows his time is short: &ldquo;I know that the putting off of my body will be soon, as our Lord Jesus Christ made clear to me&rdquo; (1:14). The Lord himself had foretold the manner of Peter&rsquo;s death, and now, sensing the end drawing near, the apostle pours into this brief letter the truths he most wants the church to remember when he is gone. Like a father&rsquo;s last words to his children, every sentence is chosen with care.",
      "Because it is a farewell, the letter is marked by urgency and repetition. &ldquo;I intend always to remind you of these qualities&hellip; I think it right&hellip; to stir you up by way of reminder&rdquo; (1:12&ndash;13). Peter is not introducing novelties but pressing home things the believers already know, knowing how easily the established truth can slip from memory and how badly the church will need it amid the dangers he sees coming. The good shepherd, soon to depart, wants the flock grounded and unshakable.",
      "The letter opens with a magnificent declaration of what God has already provided. &ldquo;His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence&rdquo; (1:3). Believers are not left to scrape together holiness from their own resources. Everything needed for a godly life has already been given in Christ, granted by God&rsquo;s own divine power, and received through the knowledge of the One who called us.",
      "That word &ldquo;knowledge&rdquo; rings throughout the letter. For Peter, knowing Christ is not cold information but a living, growing relationship with the Lord and Savior. The whole letter begins and ends with it: it opens with all things granted &ldquo;through the knowledge of him&rdquo; and closes with the command to &ldquo;grow in the grace and knowledge of our Lord and Savior Jesus Christ&rdquo; (3:18). To grow in grace is to know Christ more deeply, and to know him more deeply is to be changed by him.",
      "Most astonishing of all is the destiny Peter sets before believers. Through God&rsquo;s &ldquo;precious and very great promises,&rdquo; he writes, &ldquo;you may become partakers of the divine nature, having escaped from the corruption that is in the world because of sinful desire&rdquo; (1:4). This does not mean believers become gods, but that by union with Christ and the indwelling Spirit they come to share in God&rsquo;s own holy character and life. The corruption of sin is being replaced by a participation in the very nature of God.",
      "Here, then, is the foundation of the Christian life as Peter frames it: not striving to earn God&rsquo;s favor, but building on what God has already abundantly given. Grace comes first; growth follows. The believer who grasps that all things needed for life and godliness are already granted in Christ is set free to pursue holiness not in anxious self-effort but in glad response to a generous God.",
      "And growth is no optional extra. The Christian life is meant to be a life on the move, advancing in grace and the knowledge of Christ until the very end. Peter writes as one nearing the finish line, urging the church to keep growing long after he is gone. The opening note of his farewell is therefore a summons: receive all that God has given, and press on to know Christ more, becoming day by day a truer partaker of his divine nature.",
    ],
  },
  {
    id: "Confirm Your Calling",
    heading: "Confirm Your Calling",
    reference: "2 Peter 1:5&ndash;11",
    paragraphs: [
      "Having declared that God has granted everything needed for life and godliness, Peter does not conclude that believers may therefore sit back and do nothing. Just the opposite: precisely because of all God has given, &ldquo;for this very reason, make every effort&rdquo; (1:5). Grace received is meant to be grace pursued. The same letter that grounds everything in God&rsquo;s gift also calls for the most diligent human effort to build upon it. Divine provision and human diligence are not rivals but partners.",
      "Peter then lays out a kind of ladder of Christian character, each virtue building upon the last. &ldquo;Supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love&rdquo; (1:5&ndash;7). The chain begins with faith, the root of all, and climbs through moral excellence, understanding, and discipline toward its summit in love, the crown of all the virtues.",
      "The progression is striking. Faith is where the Christian life starts, but it is never meant to stay there alone. From faith flows moral excellence; from excellence, a deeper knowledge of God&rsquo;s ways; from knowledge, the self-control to live by what we know; from self-control, the steadfastness to endure; from endurance, true godliness; from godliness, warm affection for fellow believers; and from that affection, the self-giving love that mirrors the love of Christ himself. Each grace supports and leads to the next.",
      "These qualities, Peter insists, are not static possessions but living realities meant to grow and abound. &ldquo;If these qualities are yours and are increasing, they keep you from being ineffective or unfruitful in the knowledge of our Lord Jesus Christ&rdquo; (1:8). A faith that produces such fruit is a faith that is alive and useful. But the one who lacks these things, he warns, is &ldquo;so nearsighted that he is blind, having forgotten that he was cleansed from his former sins&rdquo; (1:9) &mdash; a sobering picture of a professing believer who has lost sight of the grace that saved him.",
      "From this Peter draws his central exhortation: &ldquo;Therefore, brothers, be all the more diligent to confirm your calling and election&rdquo; (1:10). God&rsquo;s calling and election are his sovereign work, secure and certain in themselves. Yet believers are to confirm them &mdash; to make them sure and evident &mdash; not by adding to God&rsquo;s work but by living lives that bear the fruit of genuine faith. A growing, fruitful character is the assurance that one&rsquo;s calling is real.",
      "The promise attached to this diligence is rich. &ldquo;For if you practice these qualities you will never fall, and there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ&rdquo; (1:10&ndash;11). The believer who steadily grows in grace is kept from stumbling and is assured of a glad and abundant welcome into the kingdom. The pursuit of holiness is thus also the path of deep assurance.",
      "Peter&rsquo;s teaching here guards against two errors at once. Against those who would make Christianity a matter of faith with no transformation, he insists on growth, effort, and fruit. Against those who would make it a matter of anxious striving with no assurance, he grounds everything in what God has already granted and promised. The Christian life is neither passive presumption nor fearful self-effort, but a diligent, joyful building on grace that confirms the reality of God&rsquo;s call.",
    ],
  },
  {
    id: "The Trustworthy Word",
    heading: "The Trustworthy Word",
    reference: "2 Peter 1:16&ndash;21",
    paragraphs: [
      "Peter knows that everything he has urged depends on whether the Christian message is actually true. So he turns to defend its reliability, beginning with his own credentials as an eyewitness. &ldquo;We did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of his majesty&rdquo; (1:16). The gospel is not a collection of pious legends; it rests on what the apostles actually saw and heard.",
      "In particular, Peter recalls the Transfiguration, when he, James, and John saw the Lord&rsquo;s glory revealed on the holy mountain. &ldquo;He received honor and glory from God the Father, and the voice was borne to him by the Majestic Glory, &lsquo;This is my beloved Son, with whom I am well pleased&rsquo;&hellip; we ourselves heard this very voice borne from heaven, for we were with him on the holy mountain&rdquo; (1:17&ndash;18). Peter writes not as a theorist but as a witness who stood in the cloud and heard the Father&rsquo;s voice.",
      "Yet Peter says something remarkable: that the church has &ldquo;the prophetic word more fully confirmed, to which you will do well to pay attention as to a lamp shining in a dark place&rdquo; (1:19). Even his own eyewitness experience points beyond itself to the written word of God, which is a sure and steady light for believers in this present darkness until &ldquo;the day dawns and the morning star rises in your hearts.&rdquo; The Scriptures are the lamp by which the church walks until Christ returns.",
      "This leads Peter to one of the most important statements in all of Scripture about the nature of Scripture itself. &ldquo;Knowing this first of all, that no prophecy of Scripture comes from someone&rsquo;s own interpretation&rdquo; (1:20). The prophets were not merely sharing their private opinions or religious reflections. Their message did not originate with them, and so it cannot be reduced to the limited insight of its human authors. Its source lies higher.",
      "Peter then explains the origin of prophecy with precision: &ldquo;For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit&rdquo; (1:21). The image is vivid &mdash; the same word is used of a ship borne along by the wind. The human authors truly spoke and wrote, with their own minds and words, yet they were carried by the Spirit so that what they produced was the very word of God. Here is the doctrine of inspiration in a single sentence.",
      "This is why Scripture can be trusted as a lamp in the darkness. Because its words come from God himself, carried by the Spirit, it does not lead astray but lights the way. The believer who pays attention to it is not following human speculation but the sure word of the God who cannot lie. In an age of competing voices and clever myths, Peter anchors the church to the one word that will not fail.",
      "The relevance of this teaching has only grown with time. The same false teachers Peter is about to expose twisted the Scriptures to their own ends, and every generation since has faced those who would dismiss or distort God&rsquo;s word. Peter&rsquo;s answer is to point the church back to the trustworthy word &mdash; confirmed by eyewitnesses, inspired by the Spirit, shining like a lamp &mdash; and to urge believers to pay attention to it until the morning star arises and the long night of this age gives way to the dawn.",
    ],
  },
  {
    id: "False Teachers",
    heading: "False Teachers",
    reference: "2 Peter 2",
    paragraphs: [
      "Having established the trustworthiness of God&rsquo;s word, Peter turns to confront those who would corrupt it. &ldquo;But false prophets also arose among the people, just as there will be false teachers among you, who will secretly bring in destructive heresies, even denying the Master who bought them&rdquo; (2:1). The danger is not always obvious; these teachers work secretly, smuggling in their errors under a cloak of respectability, leading the unwary toward swift destruction.",
      "Peter exposes their true motives, which lie hidden beneath their fair-sounding words. &ldquo;And in their greed they will exploit you with false words&rdquo; (2:3). Their religion is a business, their followers a source of gain. He describes them as bold and willful, &ldquo;blots and blemishes&rdquo; who revel in their deceptions, with &ldquo;eyes full of adultery, insatiable for sin&rdquo; (2:14). Beneath the spiritual veneer lies sensuality, covetousness, and pride &mdash; the very corruption from which the gospel promises escape.",
      "To prove that their judgment is certain, Peter reaches back into Israel&rsquo;s history for three solemn examples. God did not spare the angels when they sinned, but cast them into chains of gloomy darkness. He did not spare the ancient world, but brought the flood upon the ungodly while preserving Noah, a herald of righteousness. And he condemned the cities of Sodom and Gomorrah to ashes, while rescuing righteous Lot (2:4&ndash;7). The lesson is clear and double-edged.",
      "From these examples Peter draws a reassuring conclusion: &ldquo;then the Lord knows how to rescue the godly from trials, and to keep the unrighteous under punishment until the day of judgment&rdquo; (2:9). The same God who judges the wicked also knows how to deliver his own. Believers troubled by the influence of false teachers can take heart that God has not lost control; both the rescue of the righteous and the judgment of the ungodly are secure in his hands.",
      "Peter&rsquo;s description of the false teachers grows scathing. They are &ldquo;like irrational animals, creatures of instinct&rdquo; (2:12), waterless springs and mists driven by a storm, for whom the gloom of utter darkness has been reserved. They entice the unstable with &ldquo;sensual passions of the flesh&rdquo; and loud boasts of folly. Most damning of all, &ldquo;they promise them freedom, but they themselves are slaves of corruption. For whatever overcomes a person, to that he is enslaved&rdquo; (2:19).",
      "That phrase cuts to the heart of their deception. They dangle the bait of freedom &mdash; freedom from restraint, from old-fashioned morality, from the demands of holiness &mdash; while they are themselves enslaved to the very corruption they peddle. True freedom, Peter implies, is found not in casting off Christ&rsquo;s lordship but in escaping the corruption of the world through the knowledge of him. The freedom the false teachers offer is in fact the deepest bondage.",
      "Peter ends the chapter with a sober warning to any who, having known the way of righteousness, turn back from it. For such, &ldquo;it would have been better&hellip; never to have known the way of righteousness than after knowing it to turn back&rdquo; (2:21). The chapter stands as a permanent caution to the church to test every teacher by the trustworthy word, to watch the fruit as well as the words, and to cling to the Master who bought them rather than to those who deny him while promising a hollow liberty.",
    ],
  },
  {
    id: "The Day of the Lord",
    heading: "The Day of the Lord",
    reference: "2 Peter 3",
    paragraphs: [
      "In his final chapter Peter addresses a question that troubled the early church and troubles many still: why has Christ not yet returned? &ldquo;Scoffers will come in the last days with scoffing, following their own sinful desires. They will say, &lsquo;Where is the promise of his coming? For ever since the fathers fell asleep, all things are continuing as they were from the beginning of creation&rsquo;&rdquo; (3:3&ndash;4). The mockers argue that the unbroken sameness of the world disproves any coming judgment.",
      "Peter answers first by reminding them that the world has not, in fact, always continued unchanged. The scoffers &ldquo;deliberately overlook&rdquo; that God once made the heavens and the earth by his word, and that by that same word &ldquo;the world that then existed was deluged with water and perished&rdquo; (3:5&ndash;6). The God who created by his word, and who once judged the world by the flood, has by the same word reserved the present heavens and earth for judgment by fire. History is not a closed loop; it is moving toward a day appointed by God.",
      "Then Peter lifts the question into the perspective of eternity. &ldquo;Do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day&rdquo; (3:8). What seems a long delay to us is nothing to the eternal God, who is not bound by our reckoning of time. The apparent slowness of Christ&rsquo;s coming is not a sign of failure or forgetfulness, but of a divine patience that operates on a scale far larger than human impatience can grasp.",
      "This brings Peter to the tender heart of the matter. &ldquo;The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance&rdquo; (3:9). The delay is mercy. Every day that judgment tarries is another day of opportunity for sinners to turn and be saved. What the scoffers mock as God&rsquo;s tardiness is in truth God&rsquo;s gracious patience, holding back the day so that more may come to repentance.",
      "Yet the day will surely come, and it will come unexpectedly. &ldquo;The day of the Lord will come like a thief, and then the heavens will pass away with a roar, and the heavenly bodies will be burned up and dissolved, and the earth and the works that are done on it will be exposed&rdquo; (3:10). The present order will be unmade in fire, and everything will be laid bare before God. Such a prospect, Peter says, should shape how believers live: &ldquo;what sort of people ought you to be in lives of holiness and godliness&rdquo; (3:11)?",
      "But the dissolution of the old is not the end of the story; it gives way to glorious renewal. &ldquo;According to his promise we are waiting for new heavens and a new earth in which righteousness dwells&rdquo; (3:13). The fire is not mere destruction but purification, clearing the way for a renewed creation where sin and corruption have no place and righteousness is at home. The Christian hope is not escape from the world but the redemption of all things, a cosmos made new and filled with the presence of God.",
      "Peter closes his last letter with the exhortation that has run through the whole of it: &ldquo;Grow in the grace and knowledge of our Lord and Savior Jesus Christ&rdquo; (3:18). As the church waits for the day of the Lord, it is to be diligent to be found by him &ldquo;without spot or blemish, and at peace.&rdquo; The dying apostle&rsquo;s final word is not fear but doxology &mdash; &ldquo;To him be the glory both now and to the day of eternity. Amen&rdquo; &mdash; leaving the church looking forward, growing in grace, until the new heavens and new earth appear.",
    ],
  },
];

const videoItems = [
  { videoId: "wEd4GqfukYg", title: "BibleProject - 2 Peter Overview" },
  { videoId: "8Wo6tZJ2pAo", title: "Growing in Grace - 2 Peter 1" },
  { videoId: "Q4fU8Vq3wXk", title: "The Day of the Lord - 2 Peter 3" },
];

const data: SectionGuideData = {
  accent: "#D97706",
  badge: `New Testament Study`,
  title: `The Book of 2 Peter`,
  intro: `Peter&rsquo;s farewell letter &mdash; growing in grace and the knowledge of Christ, confirming your calling, the trustworthy and Spirit-inspired word, a stern warning against false teachers, and the certain promise of the day of the Lord and the new heavens and new earth.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 2 Peter through visual teaching on the structure of the letter, growing in grace, and the promise of the day of the Lord.`,
  calloutTitle: `Grow in Grace and Knowledge`,
  calloutBody: `From a dying apostle&rsquo;s pen comes a letter that calls the church to build on the grace already given, to confirm its calling by a fruitful life, to hold fast the trustworthy word, to beware false teachers, and to wait in holiness for the day of the Lord. Its closing charge still stands &mdash; grow in the grace and knowledge of our Lord and Savior Jesus Christ, looking for the new heavens and new earth in which righteousness dwells.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
