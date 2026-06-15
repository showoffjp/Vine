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

const ACCENT = TEAL;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  accent: string;
  paragraphs: string[];
}

interface Question {
  q: string;
}

const overviewBlocks: Block[] = [
  {
    heading: "The Hinge of Mark&rsquo;s Gospel",
    reference: "Mark 8:1&ndash;38",
    accent: TEAL,
    paragraphs: [
      "Mark chapter 8 is the great turning point of the second Gospel, the structural and theological center on which the entire narrative pivots. Everything before it has rushed forward in Mark&rsquo;s breathless style, piling miracle upon miracle, controversy upon controversy, as the question &ldquo;Who is this?&rdquo; gathers force. Everything after it bends toward Jerusalem and the cross. At the literal midpoint of the book stands a confession and a correction: Peter declares Jesus to be the Christ, and Jesus immediately begins to teach that the Christ must suffer, die, and rise again. The reader who grasps Mark 8 holds the key to the whole Gospel.",
      "The chapter is framed by two healings that function almost like bookends of sight. It opens with disciples who cannot understand the meaning of the loaves, whose hearts are described as hardened, and it climaxes with a blind man at Bethsaida healed in two distinct stages &mdash; first seeing men &ldquo;like trees walking,&rdquo; then seeing everything clearly. This unique two-stage miracle is no accident of medical detail; Mark has placed it deliberately as a living parable of the disciples themselves, who at Caesarea Philippi will see partially (they confess Jesus as Christ) and yet not clearly (they cannot accept a suffering Messiah).",
      "The movement of the chapter is therefore a movement from blindness toward sight, but a sight that comes in stages. The feeding of the four thousand demonstrates a power the disciples have already witnessed and still fail to comprehend. The demand for a sign from the Pharisees reveals a hardness that no miracle can pierce. The discussion about leaven exposes that even the chosen Twelve still think in terms of physical bread. Only after the blind man is healed does the narrative move to the confession, and only after the confession does Jesus unveil the cross.",
      "Mark writes for a community that knew suffering, very likely the church at Rome under the shadow of persecution. The pastoral aim of the chapter is to teach such a community that following a crucified Lord means taking up a cross of one&rsquo;s own. To confess Jesus as the Christ is the necessary first stage of sight, but it is not the whole of sight. Full vision comes only when the disciple sees that the Messiah&rsquo;s glory runs through Golgotha, and that the path of discipleship runs the same way.",
      "Read as a whole, Mark 8 refuses every triumphalist shortcut. It will not let the reader have a Christ without a cross or a discipleship without self-denial. The crowds are fed, the blind man sees, the great confession is spoken &mdash; and then, almost violently, Jesus turns the disciples&rsquo; expectations upside down with the words &ldquo;Get behind me, Satan.&rdquo; The chapter ends with the most searching question a human being can be asked: what does it profit a man to gain the whole world and forfeit his soul?",
    ],
  },
  {
    heading: "From Galilee to the Region of the Gentiles",
    reference: "The Setting and Movement",
    accent: GREEN,
    paragraphs: [
      "The geography of Mark 8 is itself a sermon. The feeding of the four thousand takes place in the Decapolis, a largely Gentile region on the eastern side of the Sea of Galilee, distinct from the feeding of the five thousand which occurred among the people of Israel. The healing of the blind man happens at Bethsaida, a town on the frontier between Jewish and Gentile territory. The great confession unfolds far to the north at Caesarea Philippi, a thoroughly pagan center at the foot of Mount Hermon, dedicated to Caesar and to the Greek god Pan.",
      "This northward and outward movement signals that the good news Jesus brings is breaking the bounds of one nation. The bread that feeds the crowds is now broken among Gentiles; the leftover baskets in the Gentile feeding number seven, a number rich with the symbolism of completeness and of the nations. Mark, writing to a mixed church, wants his readers to see that the Messiah of Israel is the Lord of all peoples, and that the table he sets has room for those once counted as outsiders.",
      "Caesarea Philippi could hardly be a more provocative backdrop for Peter&rsquo;s confession. In a place soaked in the worship of Caesar as lord and son of god, surrounded by shrines to pagan deities, Jesus asks his disciples who they say that he is. The answer &mdash; &ldquo;You are the Christ&rdquo; &mdash; is spoken in defiance of every rival claim to lordship that towered over that pagan city. The confession is not made in the safety of a synagogue but in the very heartland of imperial and pagan power.",
      "The progression of places mirrors the progression of understanding. As Jesus leads his disciples physically away from familiar Galilee toward the edges of the known world, he leads them spiritually away from comfortable expectations toward the hard truth of the cross. The journey that begins in this chapter will turn decisively toward Jerusalem, and from chapter 8 onward the shadow of the cross falls across every page.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Spiritual Blindness and Gradual Sight",
    reference: "The Controlling Metaphor",
    accent: TEAL,
    paragraphs: [
      "The dominant theme of Mark 8 is sight &mdash; physical and spiritual, partial and complete. The chapter is woven through with the language of seeing and not seeing, understanding and failing to understand. Jesus asks the disciples, &ldquo;Having eyes do you not see, and having ears do you not hear?&rdquo; (8:18), echoing the prophetic indictment of Israel&rsquo;s hardness in Isaiah and Jeremiah. The two-stage healing of the blind man becomes the interpretive lens for the whole passage, a picture of disciples who see something true and yet do not yet see clearly.",
      "Mark presents spiritual sight not as a single instantaneous gift but as a process that God works in stages. The disciples are not fools or unbelievers; they have left everything to follow Jesus and have witnessed his power. Yet their vision is partial. They confess the right thing about Jesus&rsquo; identity and then immediately reveal that they have misunderstood what that identity means. The healing of the blind man assures the reader that partial sight is not the end of the story; the same hand that opened the man&rsquo;s eyes in two stages will bring the disciples to full understanding through the cross and resurrection.",
      "This theme carries enormous pastoral comfort. The Gospel does not require that the disciple see everything perfectly at once. It allows for growth, for the slow clearing of vision, for the patient work of Christ who lays his hands a second time. The believer who confesses Christ truly and yet still wrestles with the implications of that confession stands exactly where the Twelve stood, and is met by the same patient Lord.",
      "At the same time Mark issues a warning. The Pharisees in this chapter represent a hardness that no sign can soften, a blindness that has become willful. There is a difference between the partial sight of the disciple who is still learning and the resolute blindness of the heart that has decided not to see. The chapter holds both possibilities before the reader: the soft heart whose eyes are being opened in stages, and the hard heart that demands signs while refusing the light already given.",
    ],
  },
  {
    heading: "The Messianic Confession",
    reference: "Who Do You Say That I Am?",
    accent: GOLD,
    paragraphs: [
      "At the center of the chapter stands the confession that has rung through twenty centuries of the church: &ldquo;You are the Christ.&rdquo; The Greek word Christos translates the Hebrew Mashiach, the Anointed One, the long-awaited king of David&rsquo;s line who would deliver God&rsquo;s people and reign in righteousness. Peter, speaking for the Twelve, names Jesus as the fulfillment of every messianic hope of Israel. After a whole Gospel of mounting questions, the disciples finally arrive at the right answer.",
      "Yet Mark records the confession with striking restraint. There is no commendation here as there is in Matthew&rsquo;s parallel; instead Jesus sternly charges them to tell no one. This command to secrecy, the so-called messianic secret that runs through Mark, exists precisely because the title Christ was so easily misunderstood. In the popular imagination the Messiah was a conquering deliverer who would drive out Rome and restore the kingdom by force. To proclaim Jesus as Christ without immediately redefining what that meant would have been to spread a dangerous half-truth.",
      "So the confession, right as far as it goes, is only the first stage of sight. Peter sees that Jesus is the Christ, just as the blind man first saw men like trees walking. But what kind of Christ? The very next verses supply the answer that Peter cannot bear: a Christ who must suffer, be rejected, be killed, and rise again. The confession is the door, but Jesus alone defines what lies on the other side of it.",
      "For Mark&rsquo;s readers, and for every generation since, the lesson is that orthodox words about Jesus are necessary but not sufficient. It is possible to call Jesus the Christ and still hold an idea of him shaped more by our own desires than by his self-revelation. The true confession is the one that lets Jesus fill the title with his own meaning &mdash; the meaning of the cross.",
    ],
  },
  {
    heading: "The Necessity of the Cross",
    reference: "The Son of Man Must Suffer",
    accent: ROSE,
    paragraphs: [
      "The first passion prediction in 8:31 introduces a word that will dominate the rest of the Gospel: the Son of Man must suffer. The little word &ldquo;must&rdquo; carries the weight of divine necessity. The suffering of the Messiah is not an accident, not a tragic miscalculation, not a defeat; it is the very purpose of God woven into the fabric of redemption. Jesus does not stumble into the cross; he walks toward it with open eyes as the appointed path of the world&rsquo;s salvation.",
      "Jesus chooses the title &ldquo;Son of Man&rdquo; for himself, a phrase drawn from Daniel 7 where one like a son of man comes with the clouds of heaven to receive an everlasting kingdom. By joining this exalted title to the language of suffering and rejection, Jesus fuses two streams of Old Testament expectation that no one had joined before: the glorious Son of Man of Daniel and the suffering Servant of Isaiah 53. The Messiah will reign, yes, but he will reign through wounds.",
      "Peter&rsquo;s violent rejection of this teaching shows how alien it was. To rebuke the very idea of a suffering Messiah was, in Jesus&rsquo; eyes, to speak with the voice of the tempter who had once offered him the kingdoms of the world without the cross. &ldquo;Get behind me, Satan,&rdquo; Jesus says, &ldquo;for you are not setting your mind on the things of God, but on the things of man&rdquo; (8:33). The cross is the dividing line between God&rsquo;s wisdom and human wisdom.",
      "The necessity of the cross is not only the necessity of an event in history; it becomes the pattern of the Christian life. Because the Messiah saves through suffering, those who follow him are called to a life shaped by the same cross. The theme that begins as a statement about Jesus immediately becomes a summons to his followers: if he must suffer, then those who would come after him must take up their own cross and follow.",
    ],
  },
  {
    heading: "Discipleship as Self-Denial",
    reference: "Take Up Your Cross",
    accent: PURPLE,
    paragraphs: [
      "The closing section of the chapter turns the spotlight from Jesus to those who would follow him. &ldquo;If anyone would come after me, let him deny himself and take up his cross and follow me&rdquo; (8:34). The cross was not yet, for these hearers, a religious symbol; it was an instrument of brutal execution, the most shameful death the Roman world could devise. To take up a cross was to walk the road of the condemned, carrying the beam to the place of one&rsquo;s own death.",
      "To deny oneself is not merely to give up certain pleasures; it is to renounce the self as the center of one&rsquo;s existence, to dethrone the autonomous ego and enthrone Christ in its place. The call is radical and total. It does not ask for a portion of life but for the whole of it, surrendered daily into the hands of the crucified Lord. This is the cost of discipleship that Mark sets before his readers without softening.",
      "Yet the paradox at the heart of the call is also a promise. &ldquo;Whoever would save his life will lose it, but whoever loses his life for my sake and the gospel&rsquo;s will save it&rdquo; (8:35). The way of self-preservation leads to loss; the way of self-surrender leads to life. The economy of the kingdom inverts the calculations of the world. What looks like death is the doorway to true life, and what looks like the safe hoarding of one&rsquo;s life is the surest way to forfeit it.",
      "The chapter ends with the most piercing question in the Gospels: &ldquo;For what does it profit a man to gain the whole world and forfeit his soul?&rdquo; (8:36). Here is the great audit of human existence laid bare. A person may gain everything the world offers and yet lose the one thing that cannot be recovered. The discipleship Mark describes is costly, but the alternative is infinitely more costly: to win the world and lose oneself.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "The Feeding of the Four Thousand",
    reference: "Mark 8:1&ndash;10",
    accent: GREEN,
    paragraphs: [
      "The chapter opens with a great crowd that has been with Jesus three days and has nothing to eat. Jesus is moved with compassion, unwilling to send them away hungry lest they faint on the way, for some have come from far off. The detail that some have come from a great distance, set in the Gentile region of the Decapolis, signals that this is a feeding of those outside the covenant people, a distinct event from the earlier feeding of the five thousand in Jewish territory.",
      "The disciples respond with a question that betrays how little the earlier miracle has taught them: &ldquo;How can one feed these people with bread here in this desolate place?&rdquo; (8:4). They stand in the very presence of the one who multiplied five loaves for five thousand, and yet they see only an impossible problem. Their forgetfulness sets up the rebuke that will come later in the chapter, when Jesus reminds them of the baskets full of fragments they themselves gathered.",
      "Jesus takes the seven loaves, gives thanks, breaks them, and gives them to the disciples to set before the people; a few small fish are likewise blessed and distributed. The numbers in this feeding differ deliberately from the first: seven loaves rather than five, four thousand people rather than five thousand, and seven baskets of fragments left over rather than twelve. Seven, the number of completeness and of the nations, marks this as the bread of the world broken for the Gentiles.",
      "When all have eaten and are satisfied, the disciples take up seven baskets of broken pieces. The abundance is the point: the compassion of Jesus does not merely meet the bare need but overflows it. Then Jesus dismisses the crowd, gets into the boat with his disciples, and goes to the district of Dalmanutha. The bread of heaven has been broken among the nations, and the leftover baskets stand as a sign that there is more than enough in Christ for all peoples.",
    ],
  },
  {
    heading: "The Demand for a Sign",
    reference: "Mark 8:11&ndash;13",
    accent: GOLD,
    paragraphs: [
      "No sooner has Jesus crossed the lake than the Pharisees come and begin to argue with him, seeking from him a sign from heaven to test him. The irony is sharp: Jesus has just multiplied bread in the wilderness, and now those who should be experts in the signs of God demand a sign. Their request is not the seeking of honest faith but the testing of hardened unbelief, a trap dressed as a question.",
      "Mark records that Jesus &ldquo;sighed deeply in his spirit&rdquo; (8:12). The phrase conveys a groan from the depths, a grief at the hardness of heart that no miracle can reach. The same Jesus who was moved with compassion for the hungry crowd is moved with sorrow at the obstinate blindness of the religious leaders. Their demand grieves him not because he cannot do signs but because they refuse the light already given.",
      "&ldquo;Why does this generation seek a sign?&rdquo; he asks, and then declares solemnly, &ldquo;Truly, I say to you, no sign will be given to this generation&rdquo; (8:12). The refusal is deliberate and final. A sign given to satisfy unbelief would only harden it further. Faith that demands proof before it will believe is not faith at all, and Jesus will not feed it. The only sign such a generation will finally receive is the sign of the cross and the empty tomb, and even that they will refuse.",
      "And he left them, got into the boat again, and went to the other side. The abruptness of the departure underscores the verdict. There is a kind of unbelief so settled that the only response is to leave it to its chosen darkness. The Pharisees stand in this chapter as the picture of the hard heart, set in contrast to the blind man of Bethsaida whose eyes Jesus will open.",
    ],
  },
  {
    heading: "The Leaven of the Pharisees",
    reference: "Mark 8:14&ndash;21",
    accent: ROSE,
    paragraphs: [
      "In the boat the disciples realize they have forgotten to bring bread, having only one loaf with them. Jesus, his mind still on the encounter just past, warns them, &ldquo;Watch out; beware of the leaven of the Pharisees and the leaven of Herod&rdquo; (8:15). Leaven, a small hidden agent that spreads through the whole lump of dough, is a fitting image for the corrupting influence of unbelief and worldly power, the hypocrisy of the Pharisees and the godless ambition of Herod.",
      "The disciples completely miss the meaning, concluding that Jesus speaks of literal bread because they have none. Their misunderstanding reveals how earthbound their thinking still is. They have just witnessed a feeding of thousands and gathered baskets of leftovers, yet they worry about a single loaf and cannot rise from the physical to the spiritual. The leaven Jesus warns against is at work even in their own anxious, dull-witted reasoning.",
      "Jesus responds with a rapid series of probing questions that form the heart of the chapter&rsquo;s rebuke: &ldquo;Why are you discussing the fact that you have no bread? Do you not yet perceive or understand? Are your hearts hardened? Having eyes do you not see, and having ears do you not hear?&rdquo; (8:17&ndash;18). The very language once used of outsiders is now turned upon the disciples themselves. Their hearts, like the Pharisees&rsquo;, are in danger of hardness.",
      "He drives the lesson home by recalling the two feedings: how many baskets after the five thousand? Twelve. How many after the four thousand? Seven. &ldquo;Do you not yet understand?&rdquo; (8:21). The arithmetic of grace is meant to teach them that the one who provided so abundantly will surely provide again. Their problem is not lack of bread but lack of sight. This question hangs unanswered over the boat, and it is precisely the failure to understand that the next miracle will address.",
    ],
  },
  {
    heading: "The Two-Stage Healing at Bethsaida",
    reference: "Mark 8:22&ndash;26",
    accent: TEAL,
    paragraphs: [
      "At Bethsaida a blind man is brought to Jesus with the plea that he would touch him. Jesus takes the man by the hand and leads him out of the village, a tender and personal act, separating him from the crowd. Then, in a way found nowhere else in the Gospels, the healing unfolds in two distinct stages. Jesus spits on the man&rsquo;s eyes, lays his hands on him, and asks whether he sees anything.",
      "The man looks up and gives a strange, half-finished answer: &ldquo;I see men, but they look like trees, walking&rdquo; (8:24). His sight has been restored, but only partially; shapes move before him, but he cannot see them clearly. This is the only miracle in the Gospels that comes in two stages, and Mark records it not because Jesus&rsquo; power was insufficient but because the gradual healing carries a meaning the reader is meant to grasp.",
      "Then Jesus lays his hands on the man&rsquo;s eyes again, and this time he looks intently and is restored, seeing everything clearly (8:25). The second touch completes what the first began. The placement of this unique miracle is everything: it falls immediately before Peter&rsquo;s confession, and it functions as an enacted parable of the disciples. They are about to see truly that Jesus is the Christ, the first stage of sight, and yet they will not see clearly until the cross brings them the second touch.",
      "Jesus sends the man home with the instruction not even to enter the village, preserving the messianic secret that runs through Mark. The healed man who now sees clearly stands in deliberate contrast to the Pharisees who demanded a sign and remained blind. Between willful blindness and clear sight lies the in-between condition of the disciples, men whose eyes are open but whose vision is not yet whole.",
    ],
  },
  {
    heading: "Peter&rsquo;s Confession at Caesarea Philippi",
    reference: "Mark 8:27&ndash;30",
    accent: GOLD,
    paragraphs: [
      "On the road to the villages of Caesarea Philippi, in the pagan north, Jesus puts the great question to his disciples: &ldquo;Who do people say that I am?&rdquo; They report the popular opinions &mdash; John the Baptist, Elijah, one of the prophets. The crowds sense that something extraordinary stands before them, yet every answer falls short, placing Jesus among the forerunners rather than recognizing him as the one to whom all the prophets pointed.",
      "Then Jesus sharpens the question to a point: &ldquo;But who do you say that I am?&rdquo; (8:29). The shift from what others say to what the disciples themselves believe is the decisive moment of the Gospel. It is the question that every reader must finally answer, for secondhand opinions about Jesus are not enough. The whole narrative has been building toward this confrontation between Jesus and those closest to him.",
      "Peter answers for them all: &ldquo;You are the Christ&rdquo; (8:29). After a Gospel full of demons who knew his identity and crowds who marveled without understanding, a human disciple at last names Jesus as the Messiah, the Anointed One of God. This confession is the hinge of Mark, the moment when partial sight becomes a true naming of who Jesus is. It is the first stage of the disciples&rsquo; healing, the seeing of men like trees walking.",
      "Yet Jesus strictly charges them to tell no one about him. The confession is right, but it is not yet safe to proclaim, because the disciples do not yet understand what kind of Christ he is. The command to silence prepares for the correction that follows immediately. Peter has spoken the truth, but he has not yet seen clearly, and the very next exchange will reveal how partial his vision still is.",
    ],
  },
  {
    heading: "The First Passion Prediction and Peter&rsquo;s Rebuke",
    reference: "Mark 8:31&ndash;33",
    accent: ROSE,
    paragraphs: [
      "Now, for the first time, Jesus begins to teach plainly what the title Christ truly means: &ldquo;The Son of Man must suffer many things and be rejected by the elders and the chief priests and the scribes and be killed, and after three days rise again&rdquo; (8:31). He says this plainly, openly, no longer in parables. The confession has opened the door to the central revelation of the Gospel, that the Messiah saves not by conquering but by being conquered, not by avoiding death but by passing through it.",
      "Peter, who moments ago confessed so rightly, now takes Jesus aside and begins to rebuke him. The man who named Jesus as Christ cannot accept the kind of Christ Jesus describes. His vision is exactly that of the blind man at the first touch: he sees something true, that Jesus is the Messiah, but he sees it unclearly, with the distortions of his own expectation of a triumphant deliverer who would not suffer or die.",
      "Jesus turns, and seeing his disciples, rebukes Peter with words of startling severity: &ldquo;Get behind me, Satan! For you are not setting your mind on the things of God, but on the things of man&rdquo; (8:33). The rebuke is so sharp because Peter&rsquo;s words echo the temptation in the wilderness, the offer of a crown without a cross. To resist the suffering of the Messiah is to do the work of the adversary, however well-meaning the motive.",
      "Notice that Jesus turns to look at all the disciples as he rebukes Peter; the correction is for them all, and for every reader. The phrase &ldquo;the things of man&rdquo; names the deep human instinct that recoils from the cross and craves a glory without pain. The dividing line of the chapter, and of the Gospel, is whether one will set the mind on the things of God or on the things of man.",
    ],
  },
  {
    heading: "Take Up Your Cross and Follow",
    reference: "Mark 8:34&ndash;38",
    accent: PURPLE,
    paragraphs: [
      "Calling the crowd to him along with his disciples, Jesus universalizes the lesson: &ldquo;If anyone would come after me, let him deny himself and take up his cross and follow me&rdquo; (8:34). What he has just revealed about his own path now becomes the pattern for all who would follow. The cross is not only the means of his saving work; it is the shape of the disciple&rsquo;s life. Self-denial, cross-bearing, and following are the three movements of true discipleship.",
      "The great paradox follows: &ldquo;Whoever would save his life will lose it, but whoever loses his life for my sake and the gospel&rsquo;s will save it&rdquo; (8:35). The clutching, self-protective grasp on life ends in loss; the open-handed surrender of life for Christ ends in true and lasting life. The kingdom operates by an inverted economy in which the way down is the way up and the surrender of the self is the finding of the self.",
      "Then come the two penetrating questions that weigh a human life in the balance: &ldquo;For what does it profit a man to gain the whole world and forfeit his soul? For what can a man give in return for his soul?&rdquo; (8:36&ndash;37). The soul, the true self, is of more value than the entire created order, and once forfeited it cannot be bought back at any price. No bargain in the world can recover a soul that has been traded away for the world&rsquo;s prizes.",
      "Jesus closes with a warning that reaches to the final judgment: &ldquo;Whoever is ashamed of me and of my words in this adulterous and sinful generation, of him will the Son of Man also be ashamed when he comes in the glory of his Father with the holy angels&rdquo; (8:38). The Son of Man who must now suffer will one day come in glory. How one responds to the suffering Christ now determines how the glorious Christ will respond then. The chapter that began with bread in the wilderness ends with the weight of eternity.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Living Mark 8 Today",
    reference: "Personal and Community Application",
    accent: TEAL,
    paragraphs: [
      "Mark 8 confronts every reader with the same question Jesus pressed upon the disciples: who do you say that I am? It is not enough to repeat the opinions of others or to admire Jesus as a great teacher among the prophets. The chapter insists on a personal confession, a naming of Jesus as the Christ that comes from one&rsquo;s own heart. And it warns that even a true confession can be held with a distorted understanding, so that we must constantly let Jesus define for us what kind of Christ he is.",
      "The two-stage healing of the blind man offers deep comfort to every believer who feels that their sight is still partial. Discipleship is rarely a single moment of perfect clarity; it is more often a journey from blindness to dim sight to clear vision, in which Christ lays his hand upon us again and again. If you confess Jesus truly and yet still wrestle to understand his ways, you stand where Peter stood, and the same patient Lord who touched the blind man a second time will bring you to fuller sight.",
      "The chapter also exposes the leaven of unbelief and worldliness that can spread quietly through the heart. Like the disciples in the boat, we are prone to forget the abundant provision of the past and to be consumed with anxiety about the single loaf in front of us. Mark calls us to remember the baskets of fragments, to let the memory of God&rsquo;s past faithfulness teach our anxious hearts that the God who provided before will provide again.",
      "Above all, Mark 8 sets the cross at the center of the Christian life. To follow a crucified Lord is to take up a cross of our own, to deny self, and to discover that the surrender of life is the finding of it. In a culture that prizes self-fulfillment and self-protection, the chapter asks the question that audits every ambition: what does it profit to gain the whole world and lose the soul? The answer reorders every priority of the one who truly hears it.",
    ],
  },
];

const questions: Question[] = [
  { q: "When Jesus asks, &ldquo;Who do you say that I am?&rdquo; how would you answer from your own heart, and does your understanding of the Christ allow for a suffering Messiah?" },
  { q: "The blind man saw in two stages. Where in your own discipleship do you sense that your sight is still partial, that you see truly but not yet clearly?" },
  { q: "The disciples forgot the abundance of the feedings and worried over a single loaf. What past faithfulness of God have you forgotten, and what present anxiety would be answered by remembering it?" },
  { q: "Jesus said the leaven of the Pharisees and of Herod spreads quietly. What hidden attitudes of unbelief or worldly ambition might be at work in your own heart?" },
  { q: "To take up the cross meant to walk the road of the condemned. What would self-denial and cross-bearing concretely look like in your life this week?" },
  { q: "&ldquo;What does it profit a man to gain the whole world and forfeit his soul?&rdquo; What in your life are you tempted to clutch so tightly that you risk losing the one thing of true value?" },
];

const videoItems = [
  { videoId: "HGHqu9hgVtY", title: "BibleProject - Overview: Gospel of Mark" },
  { videoId: "Lm0pQ3R7sWh", title: "Mark 8 - Who Do You Say That I Am? - Verse by Verse" },
  { videoId: "dQw4w9WgXcW", title: "The Turning Point of Mark - Peter&rsquo;s Confession Explained" },
  { videoId: "aB3dE5fG7hJ", title: "Take Up Your Cross - Discipleship and Self-Denial in Mark 8" },
];

const tabContent: Record<Tab, Block[]> = {
  "Overview": overviewBlocks,
  "Key Themes": themeBlocks,
  "Verse by Verse": verseBlocks,
  "Application": applicationBlocks,
};

export default function Mark8GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const blocks = tabContent[activeTab];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: "Mark 8 &mdash; The Turning Point of the Gospel" }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;And he asked them, Who do you say that I am? Peter answered him, You are the Christ.&rdquo; &mdash; Mark 8:29. The hinge of Mark&rsquo;s Gospel, where the great confession meets the first prediction of the cross and discipleship is revealed as the way of self-denial." }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", paddingTop: "0.75rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#ffffff" : MUTED,
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

        <section>
          {blocks.map((block, bi) => (
            <div key={bi} style={{ marginBottom: bi === blocks.length - 1 ? 0 : "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 6, height: 28, borderRadius: 3, background: block.accent, display: "inline-block", flexShrink: 0 }} />
                <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: block.heading }} />
              </div>
              <div style={{ color: block.accent, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem", marginLeft: 18 }} dangerouslySetInnerHTML={{ __html: block.reference }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {block.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {activeTab === "Application" && (
          <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
            <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.3rem" }}>Reflection Questions</h3>
            <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {questions.map((item, i) => (
                <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: item.q }} />
              ))}
            </ol>
          </div>
        )}

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Mark 8 through these video teachings on the great confession, the first passion prediction, and the call to take up the cross and follow the crucified Lord." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Hinge of the Gospel</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Mark 8 stands at the very center of the Gospel, the place where sight comes in stages and the Messiah is revealed as the one who must suffer. The blind man sees men like trees walking and then sees clearly; the disciples confess the Christ and then must learn the meaning of the cross. To follow this Lord is to deny ourselves, take up the cross, and discover that the life surrendered for his sake is the life truly found." }} />
        </div>
      </main>
    </div>
  );
}
