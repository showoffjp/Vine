"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Feeding the Five Thousand",
  "Confession and the Cross",
  "Transfiguration and Beyond",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Luke 9",
    reference: "Luke 9:1&ndash;62",
    paragraphs: [
      "Luke chapter 9 is a pivotal hinge in the Gospel, the chapter where the ministry in Galilee reaches its climax and Jesus begins to turn his face decisively toward Jerusalem and the cross. It gathers together some of the most significant episodes in the life of Jesus &mdash; the sending of the Twelve, the feeding of the five thousand, Peter&rsquo;s confession, the first passion prediction, the Transfiguration, and a series of hard teachings on greatness and the cost of following. By the chapter&rsquo;s end the whole direction of the story has shifted from Galilee toward the road that leads to the cross.",
      "The chapter opens with Jesus sending out the Twelve (9:1&ndash;9). He gives them power and authority over all demons and to cure diseases, and sends them to proclaim the kingdom of God, taking nothing for the journey. Their preaching stirs the whole region, and word reaches Herod the tetrarch, who is perplexed: some say John the Baptist has risen, others that Elijah or one of the old prophets has appeared. &ldquo;Who is this about whom I hear such things?&rdquo; Herod asks, and seeks to see Jesus &mdash; a question the whole chapter is bent on answering.",
      "Next comes the feeding of the five thousand (9:10&ndash;17), the only miracle of Jesus recorded in all four Gospels. The returning Twelve withdraw with Jesus toward Bethsaida, but the crowds follow, and at evening Jesus astonishes the disciples by commanding, &ldquo;You give them something to eat.&rdquo; With five loaves and two fish he feeds the multitude, and twelve baskets of fragments are gathered up. The miracle reveals Jesus as the divine provider and points forward to the messianic banquet.",
      "At the heart of the chapter stands Peter&rsquo;s confession and the first passion prediction (9:18&ndash;27). Jesus asks, &ldquo;Who do the crowds say that I am?&rdquo; and then, more pointedly, &ldquo;But who do you say that I am?&rdquo; Peter answers, &ldquo;The Christ of God.&rdquo; Immediately Jesus begins to teach that the Son of Man must suffer, be rejected, be killed, and on the third day be raised &mdash; and that all who would follow him must take up the cross daily.",
      "The chapter then ascends to the Transfiguration (9:28&ndash;36), where on the mountain Jesus&rsquo; appearance is transformed and Moses and Elijah appear with him, speaking of his &ldquo;departure&rdquo; that he is about to accomplish at Jerusalem. A cloud overshadows them, and the Father&rsquo;s voice declares, &ldquo;This is my Son, my Chosen One; listen to him.&rdquo; Coming down, Jesus heals a boy the disciples could not deliver, and again foretells his betrayal (9:37&ndash;45).",
      "The final movement (9:46&ndash;62) is a cluster of lessons on the upside-down values of the kingdom. The disciples argue about who is greatest, and Jesus answers by placing a child beside him: &ldquo;the one who is least among you all is the one who is great.&rdquo; He rebukes the desire to call down fire on an unwelcoming Samaritan village, and confronts would-be followers with the bracing cost of discipleship: &ldquo;Foxes have holes&hellip; the Son of Man has nowhere to lay his head,&rdquo; and &ldquo;No one who puts his hand to the plow and looks back is fit for the kingdom of God.&rdquo;",
    ],
  },
  {
    id: "Feeding the Five Thousand",
    heading: "Feeding the Five Thousand",
    reference: "Luke 9:10&ndash;17",
    paragraphs: [
      "After the Twelve return from their mission and report all that they have done, Jesus takes them aside privately to withdraw toward a town called Bethsaida (9:10). The disciples are weary from their labors, and Jesus seeks a quiet place of rest and debriefing. But the crowds learn where he has gone and follow him, and rather than turning them away, Jesus welcomes them, speaks to them of the kingdom of God, and heals those in need of healing (9:11). His compassion overrides his own need for rest.",
      "As the day wears toward evening, the practical problem becomes pressing. The Twelve come to Jesus and urge him to send the crowd away so they can find lodging and food in the surrounding villages, for &ldquo;we are here in a desolate place&rdquo; (9:12). The disciples see only the impossibility of the situation: a vast crowd, a remote place, and no resources. Their solution is dismissal &mdash; to send the need away rather than to meet it.",
      "Jesus answers with a command that must have stunned them: &ldquo;You give them something to eat&rdquo; (9:13). It is a deliberate test, designed to expose the gap between human resources and the need at hand. The disciples protest that they have only five loaves and two fish, unless they are to go and buy food for all these people &mdash; an impossibility. The crowd numbered about five thousand men, and Jesus directs the disciples to have them sit down in groups of about fifty each.",
      "Then comes the miracle, described with deliberate, almost liturgical simplicity. &ldquo;Taking the five loaves and the two fish, he looked up to heaven and blessed and broke them and gave them to the disciples to set before the crowd&rdquo; (9:16). The fourfold action &mdash; taking, blessing, breaking, giving &mdash; echoes the language of the Last Supper and the Lord&rsquo;s table. The disciples become the distributors of a bounty they did not create, carrying to the crowd what Jesus has multiplied in his hands.",
      "The result is overwhelming abundance: &ldquo;And they all ate and were satisfied&rdquo; (9:17). This was no token portion but a full meal that left the multitude content. And there is more: when the leftover fragments are gathered up, they fill twelve baskets &mdash; one, fittingly, for each of the Twelve. The very disciples who said it could not be done are left holding baskets of surplus, a tangible lesson in the difference between their poverty and their Master&rsquo;s provision.",
      "The theological weight of the sign is rich. Jesus is revealed as the divine provider, the one who, like the God who fed Israel with manna in the wilderness, satisfies his people in a desolate place. The feeding is a foretaste of the messianic banquet, the great feast of the kingdom promised by the prophets, and a sign that in Jesus the kingdom has drawn near. The crowds are fed by his hand, and the twelve baskets of abundance proclaim that with Jesus there is always more than enough.",
    ],
  },
  {
    id: "Confession and the Cross",
    heading: "Peter&rsquo;s Confession and the Cross",
    reference: "Luke 9:18&ndash;27",
    paragraphs: [
      "The center of the chapter, and arguably its theological turning point, comes as Jesus is praying alone with his disciples nearby. He puts to them the great question of his identity in two stages. First, &ldquo;Who do the crowds say that I am?&rdquo; (9:18). The disciples relay the popular opinions: John the Baptist, Elijah, or one of the prophets of old risen again. The crowds sense that Jesus is a figure of prophetic significance, but their guesses fall short of the truth.",
      "Then Jesus presses the question home: &ldquo;But who do you say that I am?&rdquo; (9:20). This is the question every reader of the Gospel must finally answer. Peter, speaking for the Twelve, responds with a confession that pierces beyond all the popular speculation: &ldquo;The Christ of God&rdquo; &mdash; God&rsquo;s anointed Messiah, the long-promised deliverer. After all the wondering of the crowds and the bafflement of Herod, the disciples have come to see, however imperfectly, who their Master truly is.",
      "Yet Jesus immediately strictly charges and commands them to tell this to no one (9:21). The command to secrecy is striking. The title &ldquo;Messiah&rdquo; was loaded with nationalistic and political expectations of a conquering king, and Jesus must first redefine it before it can be safely proclaimed. The Messiah they have confessed is not the one the people expect, and so the confession must be paired with a teaching that turns those expectations upside down.",
      "For the first time, Jesus speaks openly of the cross: &ldquo;The Son of Man must suffer many things and be rejected by the elders and chief priests and scribes, and be killed, and on the third day be raised&rdquo; (9:22). The word &ldquo;must&rdquo; signals divine necessity; the suffering of the Messiah is no accident or defeat but the very heart of God&rsquo;s saving purpose. The path to glory runs through rejection and death, and the disciples must learn to embrace a crucified Christ.",
      "What is true of the Master must be true of the disciple. &ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me&rdquo; (9:23). Luke alone adds that telling word &mdash; &ldquo;daily.&rdquo; Cross-bearing is not a single heroic moment but a continual, day-by-day dying to self. To follow the crucified Messiah is to walk his road of self-denial each new morning, taking up the cross again and again.",
      "Jesus then sets out the great paradox and its eternal stakes. &ldquo;Whoever would save his life will lose it, but whoever loses his life for my sake will save it&rdquo; (9:24). The self-protective grasping after life forfeits it; the life surrendered for Christ is the life truly found. &ldquo;For what does it profit a man if he gains the whole world and loses or forfeits himself?&rdquo; (9:25). And those who are ashamed of Jesus now will find the Son of Man ashamed of them when he comes in glory. The section closes with a promise both mysterious and sure: &ldquo;there are some standing here who will not taste death until they see the kingdom of God&rdquo; (9:27).",
    ],
  },
  {
    id: "Transfiguration and Beyond",
    heading: "The Transfiguration and Beyond",
    reference: "Luke 9:28&ndash;62",
    paragraphs: [
      "About eight days after these sayings, Jesus takes Peter, John, and James up a mountain to pray, and as he prays, his appearance is transformed. &ldquo;The appearance of his face was altered, and his clothing became dazzling white&rdquo; (9:29). For a moment the veil is drawn back and the glory hidden in the carpenter from Nazareth shines through. The disciples who confessed him as the Christ are now given a glimpse of the divine majesty that confirms their confession.",
      "Two figures appear with him in glory, Moses and Elijah &mdash; the law and the prophets &mdash; and they speak of his &ldquo;departure, which he was about to accomplish at Jerusalem&rdquo; (9:31). The word Luke uses is &ldquo;exodus,&rdquo; rich with meaning: Jesus&rsquo; death will be a new exodus, a deliverance of God&rsquo;s people accomplished not at the Red Sea but at the cross. Even on the mountain of glory, the conversation turns toward Jerusalem and the suffering that awaits.",
      "Peter, heavy with sleep yet overwhelmed by the moment, blurts out a clumsy offer: &ldquo;Master, it is good that we are here. Let us make three tents, one for you and one for Moses and one for Elijah&rdquo; (9:33). Luke gently notes that Peter did not know what he was saying. His instinct is to prolong and domesticate the glory, to build shelters and stay on the mountain, when the path of glory in fact leads back down toward the cross.",
      "Then the divine answer comes. A cloud overshadows them &mdash; the cloud of God&rsquo;s presence &mdash; and they are afraid as they enter it. From the cloud a voice declares, &ldquo;This is my Son, my Chosen One; listen to him&rdquo; (9:35). The Father&rsquo;s testimony both confirms Peter&rsquo;s confession and redirects the disciples: above Moses and Elijah, above their own plans, they are to listen to Jesus &mdash; including his hard words about the cross. When the voice ceases, Jesus is found alone.",
      "The descent from the mountain plunges them straight back into the brokenness of the world. A man begs Jesus to heal his only son, seized and convulsed by an unclean spirit that the disciples could not cast out (9:38&ndash;40). Jesus heals the boy and returns him to his father, and all are astonished at the majesty of God. Yet even in the midst of their wonder, Jesus tells the disciples plainly, &ldquo;The Son of Man is about to be delivered into the hands of men&rdquo; (9:44) &mdash; words they do not understand and are afraid to question.",
      "The chapter&rsquo;s closing scenes drive home the kingdom&rsquo;s reversal of values. When the disciples argue about which of them is the greatest, Jesus takes a child and says, &ldquo;the one who is least among you all is the one who is great&rdquo; (9:48). When James and John want to call down fire on a Samaritan village that will not receive him, Jesus rebukes them. Greatness is found in humble service, not in dominance, and the way of the Son of Man is mercy, not vengeance.",
      "Finally, three would-be followers meet the bracing cost of discipleship (9:57&ndash;62). To one who says he will follow him anywhere, Jesus replies, &ldquo;Foxes have holes and birds of the air have nests, but the Son of Man has nowhere to lay his head.&rdquo; To another he says, &ldquo;Let the dead bury their own dead, but as for you, go and proclaim the kingdom of God.&rdquo; And to a third who wishes first to say farewell at home, he gives the chapter&rsquo;s final word: &ldquo;No one who puts his hand to the plow and looks back is fit for the kingdom of God&rdquo; (9:62). The road to Jerusalem allows no backward glance.",
    ],
  },
];

const videoItems = [
  { videoId: "Lk9rTm2Wq8X", title: "BibleProject - Gospel of Luke Overview" },
  { videoId: "Fd3pBn7Yz1C", title: "Feeding the Five Thousand Explained" },
  { videoId: "Hq6vCx4Lw0M", title: "Peter&rsquo;s Confession and the Daily Cross" },
  { videoId: "Tn8kRp1Bv5Z", title: "The Transfiguration and the Road to Jerusalem" },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: `New Testament Study`,
  title: `The Gospel of Luke, Chapter 9`,
  intro: `A pivotal turning toward Jerusalem &mdash; Jesus sends the Twelve, feeds five thousand from five loaves, draws from Peter the confession &ldquo;the Christ of God,&rdquo; foretells the cross and calls for daily self-denial, is transfigured in glory before the Father&rsquo;s voice, heals the boy his disciples could not, and sets the bracing cost of following him.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Luke 9 through visual teaching on the feeding of the five thousand, Peter&rsquo;s confession and the daily cross, the Transfiguration, and the bracing cost of following Christ toward Jerusalem.`,
  calloutTitle: `Setting His Face Toward Jerusalem`,
  calloutBody: `Luke 9 is the great hinge of the Gospel. The mighty works of Galilee reach their height in the feeding of the multitude and the glory of the mountain, yet at the heart of it all stands the question, &ldquo;Who do you say that I am?&rdquo; and the answer that the Christ of God must suffer. From here the road bends toward Jerusalem and the cross, and the call sounds out to take up that cross daily and follow without looking back.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
