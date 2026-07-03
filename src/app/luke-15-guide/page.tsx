"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "This Man Receives Sinners",
  "The Lost Sheep",
  "The Lost Coin",
  "The Prodigal Son",
  "The Elder Brother",
  "Videos",
]

const sections = [
  {
    id: "This Man Receives Sinners",
    heading: "This Man Receives Sinners",
    reference: "Luke 15:1&ndash;2",
    paragraphs: [
      "Luke 15 begins with a scene that sets the stage for three of the best-loved parables Jesus ever told. &ldquo;Now the tax collectors and sinners were all drawing near to hear him&rdquo; (15:1). The outcasts of religious society &mdash; the tax collectors despised as collaborators and the &ldquo;sinners&rdquo; written off as beyond the pale &mdash; were the ones pressing in to listen to Jesus. There was something in him that drew the very people the religious establishment had given up on.",
      "&ldquo;And the Pharisees and the scribes grumbled, saying, This man receives sinners and eats with them&rdquo; (15:2). To share a table in that culture was to share fellowship, to accept and welcome. The complaint was meant as an accusation, but it stands as one of the most beautiful descriptions of Jesus in all the Gospels: this man receives sinners. The very thing they despised is the very thing that is our hope.",
      "It is crucial to see that all three parables that follow are spoken in answer to this grumbling. They are not three unrelated stories but a single, threefold reply to the charge that Jesus welcomes sinners. The Pharisees thought receiving sinners was a scandal; Jesus answers that it is the very heart of God, the joy of heaven, and the whole point of his coming.",
      "Each parable shares the same shape: something precious is lost, a costly search recovers it, and the finding overflows into shared celebration. A sheep, a coin, a son &mdash; each is sought, found, and rejoiced over. And in each, Jesus presses the question back upon his critics: if a shepherd, a woman, and a father rejoice like this over what was lost and found, why will you not rejoice that sinners are coming home?",
      "The whole chapter is, in essence, an unveiling of the heart of God toward the lost &mdash; and an invitation, especially to the grumblers, to share that heart. Jesus is not merely defending his table fellowship; he is revealing why he came. He receives sinners because that is what God is like: a Shepherd who seeks, a Woman who searches, a Father who runs.",
    ],
  },
  {
    id: "The Lost Sheep",
    heading: "The Lost Sheep",
    reference: "Luke 15:3&ndash;7",
    paragraphs: [
      "Jesus begins with a question every listener could answer: &ldquo;What man of you, having a hundred sheep, if he has lost one of them, does not leave the ninety-nine in the open country, and go after the one that is lost, until he finds it?&rdquo; (15:4). The math seems lopsided &mdash; ninety-nine left for the sake of one &mdash; but it captures the value God places on the single lost soul. The shepherd does not write off the one as an acceptable loss. He goes after it.",
      "Note the words &ldquo;until he finds it.&rdquo; The search is not a token gesture but a relentless pursuit that does not stop short of success. The shepherd searches the wild and dangerous country, sparing no effort, refusing to give up. This is the seeking love of God in Christ, who came &ldquo;to seek and to save the lost&rdquo; (Luke 19:10).",
      "&ldquo;And when he has found it, he lays it on his shoulders, rejoicing&rdquo; (15:5). There is no scolding, no driving the wayward sheep home with blows. The exhausted, helpless animal is lifted onto the shepherd&rsquo;s own shoulders and carried, and the shepherd&rsquo;s heart is full not of irritation but of joy. The weight of the lost is borne by the one who saves it.",
      "The joy cannot be contained. &ldquo;And when he comes home, he calls together his friends and his neighbors, saying to them, Rejoice with me, for I have found my sheep that was lost&rdquo; (15:6). The finding is not a private relief but a public celebration. The recovery of one lost sheep is occasion for the whole community to share in gladness.",
      "Then Jesus draws the meaning out plainly: &ldquo;Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance&rdquo; (15:7). The grumbling Pharisees, who counted themselves among the righteous, are confronted with heaven&rsquo;s scale of values. What looks to them like Jesus wasting himself on sinners is, in fact, the very thing that makes heaven sing.",
      "There is a gentle irony in the &ldquo;ninety-nine righteous persons who need no repentance.&rdquo; Jesus is not conceding that the Pharisees truly need no repentance; he is exposing those who imagine they do not. The tragedy is not only the lost sheep in the wilderness but the ones in the fold who feel no joy when the lost is found &mdash; who cannot rejoice because they do not see themselves as ever having been sought.",
    ],
  },
  {
    id: "The Lost Coin",
    heading: "The Lost Coin",
    reference: "Luke 15:8&ndash;10",
    paragraphs: [
      "The second parable shifts the scene from the open country to the home. &ldquo;Or what woman, having ten silver coins, if she loses one coin, does not light a lamp and sweep the house and seek diligently until she finds it?&rdquo; (15:8). The coin was likely part of her savings, perhaps part of a treasured headdress; its loss was keenly felt. One coin out of ten is a tenth of all she has, and she will not rest while it is lost.",
      "Her search is painstaking and thorough. She lights a lamp to drive back the shadows of the dim house, takes up her broom, and sweeps every corner, listening for the chink of metal. Again the phrase recurs: she seeks &ldquo;diligently until she finds it.&rdquo; The same patient, persistent love that marked the shepherd now stoops to search the floor of a humble home.",
      "&ldquo;And when she has found it, she calls together her friends and neighbors, saying, Rejoice with me, for I have found the coin that I had lost&rdquo; (15:9). Once more the finding overflows into shared celebration. The joy of recovery is too great to keep to oneself; it must be spread among friends. The pattern is unmistakable, repeated for emphasis: lost, sought, found, rejoiced over.",
      "If the lost sheep pictures the sinner who wanders, the lost coin pictures the sinner who is simply lost &mdash; inert, unable to seek its own way home, dependent entirely on the seeker. A coin cannot stray of its own will, and it cannot find itself; it can only be sought and found. So too there is a lostness from which we cannot rescue ourselves, and a God who lights the lamp and sweeps the house to recover us.",
      "Jesus draws the same conclusion, now lifting our eyes to heaven itself: &ldquo;Just so, I tell you, there is joy before the angels of God over one sinner who repents&rdquo; (15:10). The repentance of a single sinner sets the courts of heaven rejoicing in the presence of the angels. What the Pharisees grumbled about on earth is the occasion of celebration in the very presence of God.",
      "Together the two short parables make the same point with mounting force. A man rejoices over a recovered sheep; a woman rejoices over a recovered coin; and God rejoices &mdash; heaven rejoices &mdash; over a recovered sinner. The repeated refrain of joy is meant to lodge in the conscience of the critics: the welcome of sinners that you despise is the very thing that fills heaven with song.",
    ],
  },
  {
    id: "The Prodigal Son",
    heading: "The Prodigal Son",
    reference: "Luke 15:11&ndash;24",
    paragraphs: [
      "The third parable is the longest and most beloved, and it has a son in place of a sheep or a coin &mdash; a lost one who is fully responsible, fully able to choose. &ldquo;There was a man who had two sons. And the younger of them said to his father, Father, give me the share of property that is coming to me&rdquo; (15:11&ndash;12). To ask for the inheritance while the father still lived was, in effect, to wish him dead. It was a stunning insult, and yet the father grants it.",
      "&ldquo;Not many days later, the younger son gathered all he had and took a journey into a far country, and there he squandered his property in reckless living&rdquo; (15:13). He spends everything in pursuit of pleasure far from his father&rsquo;s house. Then the props are knocked away: &ldquo;a severe famine arose in that country, and he began to be in need&rdquo; (15:14). The far country, so alluring at first, leaves him destitute.",
      "His fall is complete. He hires himself out to a citizen of that country, who sends him into the fields to feed pigs &mdash; an unclean animal, a degradation almost unthinkable for a Jewish son. &ldquo;And he was longing to be fed with the pods that the pigs ate, and no one gave him anything&rdquo; (15:16). The boy who demanded his independence now envies the swine their food. This is where the far country always leads.",
      "Then comes the turning point: &ldquo;But when he came to himself&rdquo; (15:17). In the pigpen, in the wreckage of his rebellion, he wakes as from a dream. He remembers that his father&rsquo;s hired servants have bread enough and to spare while he perishes with hunger. He resolves to return, rehearsing his confession: &ldquo;Father, I have sinned against heaven and before you. I am no longer worthy to be called your son. Treat me as one of your hired servants&rdquo; (15:18&ndash;19). This is repentance &mdash; coming to himself, and turning home.",
      "And here the parable soars. &ldquo;But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him&rdquo; (15:20). The father had been watching the road. He sees the boy while he is still far off, and &mdash; abandoning all dignity, an old man gathering up his robe to run &mdash; he rushes to his son, throws his arms around him, and kisses him before a word of confession is finished. Grace runs to meet the returning sinner.",
      "The son begins his rehearsed speech, but the father interrupts the part about becoming a hired servant and calls to his servants: &ldquo;Bring quickly the best robe, and put it on him, and put a ring on his hand, and shoes on his feet&rdquo; (15:22). The robe is honor, the ring is authority and sonship, the shoes mark him as a son and not a slave. He is not received back grudgingly on probation; he is restored fully, lavishly, instantly, as a son.",
      "Then the celebration: &ldquo;And bring the fattened calf and kill it, and let us eat and celebrate. For this my son was dead, and is alive again; he was lost, and is found. And they began to celebrate&rdquo; (15:23&ndash;24). The third refrain of joy rings out, now over a son. Here is the Father&rsquo;s lavish grace toward all who come home: he does not merely tolerate the returning sinner; he runs, embraces, restores, and throws a feast.",
    ],
  },
  {
    id: "The Elder Brother",
    heading: "The Elder Brother",
    reference: "Luke 15:25&ndash;32",
    paragraphs: [
      "The parable does not end with the feast, and this is the part aimed straight at the grumbling Pharisees. &ldquo;Now his older son was in the field, and as he came and drew near to the house, he heard music and dancing&rdquo; (15:25). Learning that his brother has returned and that the fattened calf has been killed in celebration, &ldquo;he was angry and refused to go in&rdquo; (15:28). While heaven rejoices, the elder brother sulks outside, shut out by his own resentment.",
      "Just as he ran to the younger son, the father now goes out to the elder one and entreats him. But the older brother pours out his bitterness: &ldquo;Look, these many years I have served you, and I never disobeyed your command, yet you never gave me a young goat, that I might celebrate with my friends. But when this son of yours came, who has devoured your property with prostitutes, you killed the fattened calf for him!&rdquo; (15:29&ndash;30).",
      "His words lay bare a heart that is far from the father even while standing in his fields. He speaks of years of service as though he were a slave earning wages, not a son enjoying a relationship: &ldquo;I have served you&hellip; I never disobeyed.&rdquo; He cannot even bring himself to say &ldquo;my brother,&rdquo; only &ldquo;this son of yours.&rdquo; His obedience masked a cold, joyless, self-righteous spirit that resents grace shown to others.",
      "The father&rsquo;s reply is tender and searching: &ldquo;Son, you are always with me, and all that is mine is yours&rdquo; (15:31). The elder son had been heir to everything all along, enjoying the father&rsquo;s constant presence, yet he had lived as a hired hand in his own home. He had the father near and the inheritance secure, but he had no joy, because he had a servant&rsquo;s heart and not a son&rsquo;s.",
      "Then the father presses the necessity of the celebration: &ldquo;It was fitting to celebrate and be glad, for this your brother was dead, and is alive; he was lost, and is found&rdquo; (15:32). Gently the father corrects him &mdash; not &ldquo;this son of yours&rdquo; but &ldquo;this your brother.&rdquo; To refuse to rejoice over the lost being found is to be out of step with the very heart of the father, and with the joy of heaven itself.",
      "Strikingly, the parable is left open. We never learn whether the elder brother went in. Jesus leaves the ending unwritten because the question is aimed at the listeners: Will you, who grumble that this man receives sinners, come in to the feast and rejoice? Will you embrace your brother whom the Father has received? The door stands open, and the Father is still pleading outside with the self-righteous.",
      "Luke 15 thus confronts us with two ways of being lost &mdash; the younger son lost in reckless rebellion, and the elder son lost in cold self-righteousness, lost while never leaving home. Both need the Father&rsquo;s grace; both are pursued by his love. The chapter calls every reader to come to ourselves, to come home to a Father who runs, to receive his lavish grace, and to beware the joyless self-righteousness that cannot rejoice when sinners are found.",
    ],
  },
];

const videoItems = [
  { videoId: "XbN2_aGzd4M", title: "BibleProject - Gospel of Luke Overview" },
  { videoId: "VHAwSypy4yc", title: "The Prodigal Son - A Study of Luke 15" },
  { videoId: "8BdOdpAJ7H0", title: "This Man Receives Sinners - The Lost and Found" },
  { videoId: "p7lQbm7T0FE", title: "The Elder Brother and the Father's Grace" },
];

const data: SectionGuideData = {
  accent: "#3a7d56",
  badge: `New Testament Study`,
  title: `Luke 15`,
  intro: `&ldquo;This man receives sinners&rdquo; &mdash; the great chapter of the lost and found: the lost sheep carried home on the shepherd&rsquo;s shoulders, the lost coin swept from the floor, the prodigal son met by a running Father, and the elder brother left outside the feast. Three parables that unveil the lavish, seeking grace of God.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Luke 15 through visual teaching on the welcome of sinners, the lost sheep and the lost coin, the prodigal son and his running Father, and the warning of the elder brother left outside the feast.`,
  calloutTitle: `The Father Who Runs`,
  calloutBody: `Luke 15 answers the charge that &ldquo;this man receives sinners&rdquo; with three pictures of heaven&rsquo;s joy: a shepherd who seeks, a woman who searches, and a Father who runs. Its enduring call still sounds to the wanderer and the self-righteous alike &mdash; come to yourself, come home to a Father whose grace runs to meet you, and come in to the feast of all who once were lost and now are found.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
