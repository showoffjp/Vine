"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "The Transfiguration",
  "Faith That Moves Mountains",
  "The Coin in the Fish",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Matthew 17",
    reference: "Matthew 17:1&ndash;27",
    paragraphs: [
      "Matthew chapter 17 holds together two truths that the human heart finds nearly impossible to keep in a single grasp: the radiant glory of the Son of God and the dark road of the cross that he has set himself to walk. The chapter opens on a high mountain, where the veil of Jesus&rsquo; ordinary appearance is drawn back and three astonished disciples behold his hidden divine splendor. It then descends into the valley, where a desperate father and a powerless band of disciples confront a suffering they cannot relieve, and where Jesus once more speaks plainly of his coming death.",
      "The opening scene is the Transfiguration (17:1&ndash;13). Six days after Peter&rsquo;s confession and the first prediction of the passion, Jesus takes Peter, James, and John up a high mountain by themselves. There he is transfigured before them &mdash; his face shining like the sun and his clothes white as light. Moses and Elijah, the Law and the Prophets, appear and speak with him, and the Father&rsquo;s own voice declares from a bright cloud, &ldquo;This is my beloved Son, with whom I am well pleased; listen to him.&rdquo;",
      "From the mountaintop the chapter plunges into the valley and the healing of a demon-possessed boy whom the disciples could not heal (17:14&ndash;21). A father kneels before Jesus, pleading for his son who suffers terribly. Jesus laments the unbelief of the generation, rebukes the demon, and heals the boy instantly. When the disciples ask privately why they had failed, Jesus answers with the famous words about faith like a grain of mustard seed that can move mountains, exposing the smallness of their faith and the greatness of the God in whom faith rests.",
      "Then comes the second passion prediction (17:22&ndash;23). As the disciples gather in Galilee, Jesus tells them that the Son of Man is about to be delivered into the hands of men, who will kill him, and that on the third day he will be raised. The disciples, hearing the announcement of his death yet scarcely grasping the promise of resurrection, are filled with great distress. The shadow of the cross now lies plainly across their path.",
      "The chapter closes with a quietly remarkable episode at Capernaum: the temple tax paid by a coin found in a fish&rsquo;s mouth (17:24&ndash;27). Tax collectors ask whether Jesus pays the two-drachma temple tax. Jesus draws Peter into a lesson about sonship and freedom &mdash; the king&rsquo;s sons are free &mdash; yet, in order not to give offense, he sends Peter to catch a fish, in whose mouth he finds a shekel sufficient to pay the tax for them both.",
      "Read together, the four movements of Matthew 17 form a single tapestry. The glory of the mountain and the agony of the valley belong to the same Lord; the One whose face shines like the sun is the One who will be delivered up and killed. The disciples are tested at every turn &mdash; in their terror on the mountain, in their failure in the valley, in their grief at the cross foretold, and in the small obedience of the temple tax &mdash; and through it all they are being taught to listen to the beloved Son and to trust him utterly. The chapter joins glory and the cross, and tests the disciples&rsquo; faith.",
    ],
  },
  {
    id: "The Transfiguration",
    heading: "The Transfiguration of Christ",
    reference: "Matthew 17:1&ndash;13",
    paragraphs: [
      "&ldquo;And after six days Jesus took with him Peter and James, and John his brother, and led them up a high mountain by themselves&rdquo; (17:1). The careful note of time links this moment to the confession at Caesarea Philippi and the first prediction of the cross. Having just heard that their Master must suffer and die, the inner circle of disciples is now led apart to a mountain &mdash; the place of revelation throughout Scripture &mdash; to behold something that will sustain them through the darkness ahead.",
      "&ldquo;And he was transfigured before them, and his face shone like the sun, and his clothes became white as light&rdquo; (17:2). The word transfigured speaks of a transformation from within; the glory does not fall upon Jesus from outside but radiates outward from his own being. For one breathtaking moment the veil of his humble humanity is lifted, and the disciples glimpse the uncreated splendor of the eternal Son, the glory that was his before the world began and that he had set aside to take the form of a servant.",
      "&ldquo;And behold, there appeared to them Moses and Elijah, talking with him&rdquo; (17:3). Moses, the great lawgiver, and Elijah, the foremost of the prophets, stand for the whole witness of the Law and the Prophets, and now they converse with the One to whom all Scripture points. Their presence testifies that Jesus does not contradict the old covenant but fulfills it; the entire Hebrew Bible finds its meaning and goal in him, and even these towering figures appear as witnesses to his surpassing glory.",
      "Peter, overwhelmed and not knowing what to say, blurts out, &ldquo;Lord, it is good that we are here. If you wish, I will make three tents here, one for you and one for Moses and one for Elijah&rdquo; (17:4). His impulse is reverent yet mistaken, for it places Jesus alongside Moses and Elijah as one of three honored figures. The Father will swiftly correct this, for the beloved Son is not one among equals but the One to whom even the Law and the Prophets must yield.",
      "&ldquo;He was still speaking when, behold, a bright cloud overshadowed them, and a voice from the cloud said, This is my beloved Son, with whom I am well pleased; listen to him&rdquo; (17:5). The bright cloud is the ancient sign of God&rsquo;s own presence, the glory that filled the tabernacle and the temple. The Father&rsquo;s voice echoes the words spoken at Jesus&rsquo; baptism, but now adds a command: listen to him. Above the witness of Moses and Elijah, above Peter&rsquo;s well-meant proposal, stands the authority of the Son, who must be heard, especially when he speaks of his cross.",
      "&ldquo;When the disciples heard this, they fell on their faces and were terrified&rdquo; (17:6). To stand in the unveiled presence of holiness is to be undone, and the disciples collapse in dread. &ldquo;But Jesus came and touched them, saying, Rise, and have no fear&rdquo; (17:7). The same hands that shone with divine light now reach down in gentleness to lift his trembling friends. The glory that terrifies is also the glory that comforts, for it belongs to the One who came not to destroy but to save.",
      "&ldquo;And when they lifted up their eyes, they saw no one but Jesus only&rdquo; (17:8). The vision fades; Moses and Elijah are gone; and Jesus alone remains, the abiding center to whom the disciples must cling. As they descend, Jesus charges them to tell the vision to no one until the Son of Man is raised from the dead, and answers their question about Elijah&rsquo;s coming by pointing to John the Baptist, who came in Elijah&rsquo;s spirit and was rejected, as the Son of Man too will suffer at the hands of men.",
    ],
  },
  {
    id: "Faith That Moves Mountains",
    heading: "The Faith That Moves Mountains",
    reference: "Matthew 17:14&ndash;21",
    paragraphs: [
      "From the dazzling heights of the mountain the scene shifts at once to the troubled valley below, where a crowd has gathered around the disciples in confusion. &ldquo;And when they came to the crowd, a man came up to him and, kneeling before him, said, Lord, have mercy on my son&rdquo; (17:14&ndash;15). The contrast is deliberate and striking: from glory revealed to suffering unrelieved, from the Father&rsquo;s voice to a father&rsquo;s anguished plea. The kneeling man embodies the desperation of a world groaning under afflictions it cannot cure.",
      "&ldquo;He is an epileptic and he suffers terribly. For often he falls into the fire, and often into the water&rdquo; (17:15). Matthew describes the boy&rsquo;s seizures, and the father attributes them to a demonic power that hurls his son toward destruction. The torment is relentless and the danger constant; this is a child caught in the grip of an enemy that means to harm him. &ldquo;And I brought him to your disciples, and they could not heal him&rdquo; (17:16). The disciples, to whom Jesus had given authority over unclean spirits, stand exposed in their helplessness.",
      "Jesus responds with a lament that gathers up the whole faithless age: &ldquo;O faithless and twisted generation, how long am I to be with you? How long am I to bear with you? Bring him here to me&rdquo; (17:17). The rebuke falls not on the suffering father but on the unbelief that surrounds him &mdash; the unbelief of the crowd, and even of the disciples who had failed. Yet within the lament is mercy: bring him here to me. Where human power fails, the compassion of Christ steps in.",
      "&ldquo;And Jesus rebuked the demon, and it came out of him, and the boy was healed instantly&rdquo; (17:18). There is no struggle, no prolonged contest; a single word from the Lord and the oppressing power flees, and the child is made whole that very moment. The contrast with the disciples&rsquo; failure could not be sharper. What had defeated them is overcome in an instant by the authority of Jesus, the same Jesus whose hidden glory had just blazed on the mountain.",
      "Afterward the disciples come to Jesus privately and ask the question that troubles them: &ldquo;Why could we not cast it out?&rdquo; (17:19). It is an honest and searching question, the cry of those who had once cast out demons and now find themselves powerless. Jesus does not spare them, but neither does he leave them without hope; his answer goes straight to the root of their failure, which lies not in technique or formula but in the poverty of their faith.",
      "&ldquo;Because of your little faith. For truly, I say to you, if you have faith like a grain of mustard seed, you will say to this mountain, Move from here to there, and it will move, and nothing will be impossible for you&rdquo; (17:20). The point is not the quantity of faith but its reality and its object. A faith as small as the tiniest seed, if it is genuine and rests wholly upon the living God, taps into a power before which mountains are nothing. The disciples&rsquo; problem was not that their faith was small but that it was hollow, leaning on themselves rather than on God.",
      "Here is the abiding lesson of the valley. Faith is not a force we generate or a confidence in our own ability; it is a trust that clings to the greatness of God and draws everything from him. The mustard seed is small, but the soil it is planted in is the omnipotence of the Almighty. Jesus does not call his disciples to muster heroic feelings but to trust a great and faithful God, who delights to do the impossible through those who depend on him utterly. Even the smallest genuine faith, rooted in such a God, can move what no human strength ever could.",
    ],
  },
  {
    id: "The Coin in the Fish",
    heading: "The Coin in the Fish's Mouth",
    reference: "Matthew 17:22&ndash;27",
    paragraphs: [
      "Before the gentle wonder of the closing scene, Matthew records the second prediction of the passion. &ldquo;As they were gathering in Galilee, Jesus said to them, The Son of Man is about to be delivered into the hands of men, and they will kill him, and he will be raised on the third day&rdquo; (17:22&ndash;23). Once more Jesus speaks plainly of the road before him &mdash; betrayal, death, and resurrection &mdash; binding the glory of the mountain to the suffering that awaits at Jerusalem.",
      "&ldquo;And they were greatly distressed&rdquo; (17:23). The disciples grasp enough to grieve but not enough to hope; the word of his death lands heavily upon them, while the promise of the third day seems not yet to register. Their sorrow is genuine, and it reveals both their love for their Master and the slowness of their understanding. The cross is becoming unmistakable, even as its meaning remains veiled to them.",
      "The scene then turns to Capernaum, where the collectors of the temple tax approach Peter with a question: &ldquo;Does your teacher not pay the tax?&rdquo; (17:24). The two-drachma tax supported the upkeep of the temple, the dwelling place of God among his people. Peter answers without hesitation, &ldquo;Yes&rdquo; &mdash; assuming, naturally, that his Master would honor so sacred an obligation. Yet the question opens onto a deeper truth about who Jesus is.",
      "When Peter comes into the house, Jesus speaks first, reading his thoughts: &ldquo;What do you think, Simon? From whom do kings of the earth take toll or tax? From their sons or from others?&rdquo; (17:25). The image is drawn from royal households, where a king does not tax his own children but those outside the family. The point is gently devastating in its implication, and Jesus draws it out so that Peter may understand.",
      "&ldquo;And when he said, From others, Jesus said to him, Then the sons are free&rdquo; (17:26). Here is the heart of the lesson. The temple is the house of God the Father, and Jesus is the Son. As the Son of the King to whom the temple belongs, Jesus is under no obligation to pay a tax for his own Father&rsquo;s house. His sonship sets him free; he stands within the family, not outside it. The episode quietly affirms the very truth the Father had proclaimed on the mountain: this is my beloved Son.",
      "Yet freedom is not the final word, for love restrains the use of liberty. &ldquo;However, not to give offense to them, go to the sea and cast a hook and take the first fish that comes up, and when you open its mouth you will find a shekel&rdquo; (17:27). Though free, Jesus willingly accommodates himself, lest his rightful liberty become a needless stumbling block to others. It is a portrait in miniature of the whole gospel: the Son who owes nothing nonetheless humbles himself, and bends his freedom to the good of others.",
      "&ldquo;Take that and give it to them for me and for you&rdquo; (17:27). The provision is as miraculous as it is unassuming &mdash; a single coin in the mouth of a single fish, exactly sufficient for two. There is no fanfare, only the quiet sovereignty of the One who commands the creatures of the sea and supplies every need. And there is a tender grace in his words for me and for you, for Jesus links Peter to himself, the free Son providing for the one he has called. The chapter that began with blazing glory ends with this humble, gracious accommodation, and the same Lord shines in both.",
    ],
  },
];

const videoItems = [
  { videoId: "Mt7vKx2Qb9R", title: "BibleProject - Matthew 17 Overview and the Transfiguration" },
  { videoId: "Tr5nGz8Hd3L", title: "Transfigured in Glory - Listen to My Beloved Son" },
  { videoId: "Fm9bYw6Vs1K", title: "Faith Like a Mustard Seed - Healing in the Valley" },
  { videoId: "Cn4dRp0Tx7M", title: "The Coin in the Fish - Sonship, Freedom, and Grace" },
];

const data: SectionGuideData = {
  accent: "#6B4FBB",
  badge: `New Testament Study`,
  title: `The Gospel of Matthew, Chapter 17`,
  intro: `On a high mountain Jesus is transfigured in glory before Peter, James, and John, and the Father&rsquo;s voice commands, &ldquo;Listen to him&rdquo;; in the valley a boy the disciples could not heal is delivered, and Jesus teaches the power of faith like a mustard seed; he foretells his death a second time; and a coin found in a fish&rsquo;s mouth pays the temple tax &mdash; the chapter joins glory and the cross.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Matthew 17 through visual teaching on the Transfiguration and the Father&rsquo;s command to listen to his beloved Son, the healing of the boy in the valley and the faith that moves mountains, and the quiet grace of the coin found in the fish&rsquo;s mouth.`,
  calloutTitle: `Glory and the Cross`,
  calloutBody: `Matthew 17 sets the radiant glory of the mountain beside the suffering of the valley and the shadow of the cross, and insists that they belong to one and the same Lord. The face that shone like the sun is the face that will be marred for our sake; the One the Father calls his beloved Son is the One who will be delivered into the hands of men. Through every scene the disciples are summoned to a single response &mdash; to listen to him, to trust a great God with even the smallest faith, and to follow the beloved Son from the mountain down into the valley and on toward Jerusalem.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
