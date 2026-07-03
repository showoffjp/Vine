"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Paul at Mars Hill",
  "Unknown God Athens",
  "The Resurrection Response",
  "Application",
]

const sections = [
  {
    id: "Overview",
    heading: "Acts 17 &mdash; Overview",
    reference: "Acts 17:1&ndash;34",
    paragraphs: [
      "Acts 17 is one of the most remarkable chapters in the New Testament, presenting the apostle Paul at the very heart of the Greco-Roman intellectual world. The chapter divides into three geographical episodes: Thessalonica, where Paul reasons from the Scriptures in the synagogue (17:1&ndash;9); Berea, where the Jews receive the word with extraordinary eagerness and examine the Scriptures daily (17:10&ndash;15); and Athens, where Paul delivers his famous Areopagus address to Greek philosophers &mdash; the climax of the chapter and one of the most studied sermons in Christian history (17:16&ndash;34).",
      "Throughout all three locations, the core of Paul&rsquo;s message remains the same: that Jesus is the Messiah who suffered, died, and rose again. In Thessalonica he &ldquo;reasoned with them from the Scriptures, explaining and proving that it was necessary for the Christ to suffer and to rise from the dead&rdquo; (17:2&ndash;3). The resurrection is the hinge upon which the entire proclamation turns. This was a stumbling block to Jews who expected a conquering king, and sheer foolishness to Greeks who believed the body was a prison from which the soul longed to escape &mdash; yet Paul refused to soften it.",
      "The contrast between Thessalonica and Berea is deliberately instructive. In Thessalonica, some Jews and a great many God-fearing Greeks believed, but jealous Jews stirred up a mob, dragged Jason before the city authorities, and accused Paul&rsquo;s company of acting against Caesar&rsquo;s decrees. In Berea, by contrast, the Jews are commended as &ldquo;more noble&rdquo; (17:11) precisely because they received the message with eagerness while subjecting it to careful examination against the Scriptures &mdash; an enduring model for how Christians should engage with biblical teaching.",
      "Athens represents a different kind of challenge altogether. This was the city of Socrates, Plato, and Aristotle &mdash; a city whose intellectual traditions shaped the entire Western world. By Paul&rsquo;s day Athens had long since lost its political power, but it remained the preeminent cultural and philosophical center of the Mediterranean. Walking through the city, Paul found it overflowing with idols, and his spirit was deeply provoked. What emerges in the Areopagus address is a model of contextualized proclamation that takes the audience seriously without compromising the message.",
      "The chapter ends not with mass conversion but with a mixed response that is thoroughly realistic: some mock, some say they will hear more, and &ldquo;some men joined him and believed&rdquo; (17:34) &mdash; including Dionysius the Areopagite and a woman named Damaris. Acts 17 does not promise that faithful proclamation produces crowds; it promises that the risen Lord will call out his people from every culture and every intellectual tradition, including those the world regards as wise.",
      "For the contemporary church, Acts 17 remains a masterclass in missionary engagement. It shows Paul doing serious cultural homework &mdash; noticing what people worship, reading their poets, and understanding their deepest longings &mdash; without capitulating to their worldview. He starts where they are; he does not end where they are. The goal is always to bring people to the risen Christ, the one appointed judge of all, before whom every philosophical system and every human altar must ultimately bow.",
    ],
  },
  {
    id: "Paul at Mars Hill",
    heading: "Paul at the Areopagus",
    reference: "Acts 17:16&ndash;22",
    paragraphs: [
      "When Paul arrived in Athens, he was waiting for Silas and Timothy to join him from Berea. He was not there to deliver a lecture series &mdash; he was simply killing time. But his observer&rsquo;s eye could not pass over what he saw, and the text records that his spirit was provoked &mdash; the Greek word is &ldquo;paroxysm&rdquo; &mdash; within him as he saw that the city was full of idols. Athens was no ordinary city: ancient estimates suggest it contained more statues of gods than people.",
      "Paul did not respond to this provocation with denunciation alone. He reasoned in the synagogue with Jews and God-fearing Gentiles, and in the marketplace day after day with whoever happened to be there. It was in the marketplace (the agora) that he encountered Epicurean and Stoic philosophers. These two schools represented nearly opposite approaches to life: the Epicureans sought tranquility through the absence of divine interference and the moderation of desire; the Stoics believed in a divine rational principle (the &ldquo;Logos&rdquo;) permeating all things and urged conformity to reason and duty. Both schools had serious objections to the Christian gospel.",
      "The Epicureans and Stoics had a dismissive reaction to Paul, calling him a &ldquo;babbler&rdquo; &mdash; literally a &ldquo;seed-picker,&rdquo; the term used for a bird pecking scraps in the marketplace, implying that Paul was just collecting stray ideas without real understanding. Others thought he was proclaiming foreign divinities, because he preached &ldquo;Jesus and the resurrection&rdquo; &mdash; and &ldquo;resurrection&rdquo; (anastasis) sounded to them like a female deity paired with a male one. Despite their dismissiveness, they brought him to the Areopagus to explain himself.",
      "The Areopagus was the ancient hill of Ares (Mars) to the northwest of the Acropolis, and it served as the venue for Athens&rsquo; most solemn council. By Paul&rsquo;s day the council met not always on the hill itself but in the Royal Stoa in the agora below, though formal discussions could still convene on the hill. Either way, this was the council that, centuries earlier, had condemned Socrates. Paul was now standing in essentially the same dock, charged with introducing foreign divinities to Athens.",
      "Paul&rsquo;s opening is a rhetorical masterpiece. He does not begin with accusation, condemnation, or direct scriptural citation &mdash; his audience had no shared commitment to the Hebrew Scriptures. Instead he begins as an observant guest: &ldquo;Men of Athens, I perceive that in every way you are very religious&rdquo; (17:22). The word translated &ldquo;religious&rdquo; (deisidaimonesterous) is deliberately ambiguous and could mean either reverent or superstitious. Paul uses it not as a compliment or an insult but as a point of common ground: you are searchers. I have found what you seek.",
      "This opening establishes the tone for the entire address: Paul is not talking at the Athenians but with them. He has done his homework. He has walked through their city. He has read their poets. He has observed their altars. He is meeting them in the midst of their own religious quest and claiming that the God he proclaims is the very God their searching &mdash; at its best &mdash; was always gesturing toward. This approach &mdash; beginning with what the audience already acknowledges, then leading them through it toward Christ &mdash; is the fundamental pattern of what theologians call &ldquo;contextualization.&rdquo;",
    ],
  },
  {
    id: "Unknown God Athens",
    heading: "The Altar to the Unknown God",
    reference: "Acts 17:23&ndash;29",
    paragraphs: [
      "Among the many altars Paul passed through Athens, one caught his eye above all others: an altar bearing the inscription &ldquo;To an unknown god&rdquo; (17:23). Ancient sources confirm that such altars existed in Athens and elsewhere in the Greek world &mdash; dedicated to cover the possibility that some deity had been omitted from the pantheon, lest any god be inadvertently offended by neglect. It was an act of philosophical insurance, a hedge against divine displeasure.",
      "Paul seizes on this inscription not to mock it but to proclaim: &ldquo;What therefore you worship as unknown, this I proclaim to you.&rdquo; The unknown God is not one more deity to be added to the Greek pantheon. He is the God who made the world and everything in it, who is Lord of heaven and earth, and who &ldquo;does not live in temples made by man&rdquo; (17:24). This is a direct and radical claim. It means that every Greek temple &mdash; including the glorious Parthenon visible on the Acropolis above &mdash; fundamentally misunderstands the nature of God.",
      "Paul continues with a sustained polemic against idolatry drawn from the Jewish tradition (echoing Isaiah and the Psalms), but expressed in terms that would resonate with Greek philosophy. God does not need anything from human hands, &ldquo;as though he needed anything, since he himself gives to all mankind life and breath and everything&rdquo; (17:25). The Stoics would have recognized this: the divine Logos or Providence that sustains all things cannot itself be dependent on human provision. The Epicureans believed the gods were unmoved by human offerings. Paul agrees &mdash; but for radically different reasons.",
      "The climax of this section is Paul&rsquo;s citation of Greek poetry. He quotes the Cretan philosopher Epimenides (&ldquo;in him we live and move and have our being&rdquo;) and the Stoic poet Aratus (&ldquo;for we are indeed his offspring&rdquo;). This is a stunning move: Paul is not quoting Scripture. He is quoting their own poets, acknowledging that pagan thinkers had sometimes grasped truths about God, and showing that those truths, properly understood, lead to Christ &mdash; not to idolatry.",
      "The logical conclusion Paul draws from the poets is devastating to the Greek religious system: &ldquo;Being then God&rsquo;s offspring, we ought not to think that the divine being is like gold or silver or stone, an image formed by the art and imagination of man&rdquo; (17:29). If we are God&rsquo;s offspring, then God is greater than us &mdash; not less. If God is our Father, he cannot be a statue we carve. The poets themselves, read carefully, point beyond their own culture&rsquo;s idolatry. Paul is calling Athens to follow its own best insights to their proper conclusion.",
      "This section of the address represents one of the most sophisticated intellectual moves in the New Testament. Paul demonstrates that general revelation &mdash; the witness to God embedded in creation, in human longing, and even in pagan religious intuition &mdash; is not salvation, but it is a point of contact. The Unknown God for whom the Athenians built an altar was not a fiction; he was the God of Abraham, Isaac, and Jacob, who had been at work in the world long before the gospel reached Athens, leaving traces of himself even in altars erected by hands that did not know his name.",
    ],
  },
  {
    id: "The Resurrection Response",
    heading: "Repentance and the Resurrection",
    reference: "Acts 17:30&ndash;34",
    paragraphs: [
      "Having established a point of contact through the altar to the Unknown God and the witness of Greek poetry, Paul now pivots to the distinctively Christian demand: repentance. &ldquo;The times of ignorance God overlooked, but now he commands all people everywhere to repent&rdquo; (17:30). The word &ldquo;now&rdquo; is theologically explosive: with the coming of Jesus Christ, the era of accommodation has ended. There is a new moment in history that makes a new claim on every human being on earth.",
      "The basis for this universal call to repentance is the appointment of a day of judgment and a judge: &ldquo;because he has fixed a day on which he will judge the world in righteousness by a man whom he has appointed; and of this he has given assurance to all by raising him from the dead&rdquo; (17:31). The resurrection is not introduced as a side point. It is the proof &mdash; the &ldquo;assurance&rdquo; or pledge &mdash; that judgment is real, that this man Jesus truly has cosmic authority, and that history is moving toward an appointed end rather than cycling endlessly through philosophical epochs.",
      "The reaction is immediate and divided. Some mocked. The Greek word for &ldquo;mocked&rdquo; is used of those who openly derided the notion of bodily resurrection &mdash; precisely because for the Greek mind, the body was a prison, and release from the body at death was devoutly to be wished for. The idea that God would raise the body and restore it was not merely puzzling but repugnant to Greek sensibility. This is the point at which Paul&rsquo;s contextualization reaches its limit: he could find common ground with Greek philosophy on the nature of God, but on the resurrection there is no common ground, only the bare proclamation.",
      "Others said, &ldquo;We will hear you again about this.&rdquo; This response is more sympathetic but still uncommitted. They are intrigued but not yet convinced. Acts records this not as a failure but as a realistic picture of how genuine curiosity about the gospel sometimes operates: people need time, additional conversations, and the continuing work of the Holy Spirit. The door was left open.",
      "And some believed. Luke names two: Dionysius the Areopagite &mdash; a member of the very council that was judging Paul &mdash; and a woman named Damaris. Both are significant. Dionysius represents conversion from the highest levels of Athenian civic and intellectual life. Damaris, who must have been a person of some prominence to be named alongside an Areopagite, represents the inclusion of women in the gospel&rsquo;s reach. The &ldquo;others with them&rdquo; suggests a small but genuine community began to form.",
      "The resurrection is not an embarrassment to be apologized for in educated company &mdash; it is the centerpiece of Paul&rsquo;s address to the most intellectually sophisticated audience he ever faced. Every other element of the sermon &mdash; the Unknown God, the self-sufficient Creator, the quotations from Greek poetry &mdash; was designed to clear the ground and prepare the soil. The seed itself was always the same: Jesus is risen, judgment is coming, and all people everywhere are called to repent and believe. Athens is not exempt from this call; neither is any other culture, no matter how refined its philosophy.",
    ],
  },
  {
    id: "Application",
    heading: "Application for Today",
    reference: "Acts 17 &mdash; Living the Message",
    paragraphs: [
      "Acts 17 confronts the contemporary church with a question it cannot evade: how do we proclaim an unchanging gospel to cultures whose starting assumptions are radically different from the biblical worldview? Paul&rsquo;s answer in Athens was not to deliver a synagogue sermon to a Greek audience. He started where they were. He noticed what they cared about. He read what they read. He found the places where their own best thinking was reaching &mdash; however imperfectly &mdash; toward truth, and he used those places as bridges. The bridge always led to the same destination: the risen Christ.",
      "One of the most important lessons of Acts 17 is that contextualization is not compromise. Paul did not tell the Athenians that their altars were fine and their poets sufficient. He told them that their poets had grasped something real &mdash; and that what they had grasped was pointing beyond itself to a God their idols could not contain. He affirmed what was true in their tradition precisely in order to show them what was missing: the God who had now made himself fully known in Jesus of Nazareth.",
      "The Bereans provide a complementary model. Where the Athenians needed a messenger who would meet them in their philosophical world, the Bereans needed &mdash; and eagerly embraced &mdash; rigorous engagement with the Scriptures. They examined Paul&rsquo;s teaching against the Bible daily. This is not skepticism; it is the appropriate diligence of people who understand that truth matters and that spiritual authority must always be tested against the revealed word of God. Every generation of Christians needs both models: the missionary imagination of Athens and the scriptural seriousness of Berea.",
      "The mixed response at the Areopagus &mdash; mockery, curiosity, and belief &mdash; is also deeply instructive. Many pastors and evangelists have been tempted to adjust the gospel to reduce the mockery. The history of liberal theology is largely a history of making the resurrection optional, treating it as a myth that stands for something else, in order to remain credible to educated audiences. Paul&rsquo;s example is the opposite: he was willing to build the most sophisticated possible approach to his audience precisely so that the resurrection could be proclaimed with maximum clarity &mdash; and then he let the chips fall where they would.",
      "There is also a social lesson in Acts 17. The gospel found its first Athenian converts not in the masses of the marketplace but in the Areopagus itself &mdash; among the intelligentsia, the civic leaders, the philosophers. Christianity has never been the exclusive property of the poor or uneducated, and it need not make itself less intellectually rigorous to be faithful. Dionysius the Areopagite became a Christian. The tradition that he later became bishop of Athens and was martyred suggests that conversion at that level has real costs and real depth.",
      "For the individual believer, Acts 17 invites serious engagement with the culture. Paul was not content to remain in the Jewish community of Athens; he went into the agora, he talked with the philosophers, he noticed the altars, he read the poets. This is not accommodation &mdash; it is mission. To reach people, we must understand people. And to understand people, we must take seriously what they worship, what they fear, what they long for, and what they have &mdash; however dimly &mdash; perceived about God. Every person Paul met in Athens was already reaching for something. His task, and ours, is to show them what they have been reaching for all along.",
    ],
  },
];

const videoItems = [
  { videoId: "Mc4MHxHo88Q", title: "Acts 17 - Paul at Mars Hill - Areopagus Sermon" },
  { videoId: "V3xHxJCEoGQ", title: "The Unknown God - Acts 17 Athens Explained" },
  { videoId: "oJpVpHjXDuo", title: "Paul in Athens - BibleProject Acts Overview" },
  { videoId: "nLCWYGNKoNE", title: "Mars Hill and the Resurrection - Gospel in Athens" },
];

const data: SectionGuideData = {
  accent: "#3B82F6",
  badge: `New Testament Study`,
  title: `Acts 17 &mdash; Paul at Mars Hill`,
  intro: `Paul&rsquo;s brilliant contextualization of the gospel to Greek philosophers at the Areopagus in Athens &mdash; engaging the Unknown God, quoting their own poets, and calling all people everywhere to repentance grounded in the resurrection of Jesus Christ.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Acts 17 through visual teaching on Paul&rsquo;s Mars Hill sermon, the Unknown God altar in Athens, and the power of the resurrection proclamation.`,
  calloutTitle: `What You Worship as Unknown, This I Proclaim`,
  calloutBody: `Acts 17 shows that the gospel is for every culture and every intellectual tradition. Paul engaged Athens on its own terms, found the traces of God in their poetry and altars, and led them through their own seeking toward the risen Christ. The resurrection cannot be contextualized away &mdash; it is the ground of judgment, the proof of Christ&rsquo;s authority, and the hinge on which all of history turns. Every generation is called to the same bold, careful, culturally engaged, resurrection-centered proclamation.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
