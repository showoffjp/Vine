"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christiancompassion_entries";

interface COMEntry {
  id: string;
  date: string;
  personSeen: string;
  howHelped: string;
  whatItCost: string;
}

const theologySections = [
  {
    title: "Splagchnizomai &mdash; The Gut-Wrenching Compassion of Jesus",
    body: "When the Gospels want to show us what happened inside Jesus as he encountered human suffering, they reach for a word the ancient world reserved for the most visceral of responses: splagchnizomai. The word derives from splagchna &mdash; the bowels, the intestines, the inner organs. In the ancient Mediterranean, the gut was the seat of the deepest emotions, the way we might speak of the heart. To be splagchnizomai is not to feel mild sympathy or intellectual concern; it is to be moved from the deepest interior, to have something turn over inside you at the sight of suffering. The Gospels use this word almost exclusively of Jesus or of characters who represent God. In Matthew 9:36, Jesus looks at the crowds &mdash; harassed and helpless, like sheep without a shepherd &mdash; and is moved with compassion. In Matthew 14:14, he sees a great crowd and is moved with compassion and heals their sick. In Luke 7:13, he sees the widow of Nain weeping over her dead son and is moved with compassion before he raises him. This is not a composed, detached benevolence. It is the God of the universe having his guts wrenched by human pain. Christian compassion is not primarily a moral duty, though it produces moral action. It is a participation in the emotional life of God &mdash; learning to feel toward suffering what God feels.",
  },
  {
    title: "The Good Samaritan &mdash; Luke 10:25-37",
    body: "Jesus told the parable of the Good Samaritan in response to a lawyer who wanted to limit the circle of obligation: &ldquo;And who is my neighbor?&rdquo; The genius of the parable is that Jesus refuses to answer the question as asked. He does not define the neighbor &mdash; he shows the neighbor. A man is beaten, robbed, and left for dead on the Jerusalem-to-Jericho road. A priest passes by on the other side. A Levite passes by on the other side. These are the religious professionals, the publicly righteous, the people with reasons to keep their distance (ritual purity, the demands of their positions, a road well known for bandits who used decoys). Then comes the Samaritan &mdash; a member of a despised ethnic and religious minority, someone a Jewish audience would have considered an enemy. He sees the man, and the text says he &ldquo;had compassion&rdquo; (splagchnizomai). He does not pass by on the other side. He stops. He dresses the wounds. He loads the man on his own animal, goes to an inn, and pays for his care &mdash; and promises to pay whatever more it costs on his return. Every boundary of ethnicity, religion, and self-interest is crossed by the Samaritan&rsquo;s compassion. Jesus then asks: &ldquo;Which of these three do you think was a neighbor to the man who fell into the hands of robbers?&rdquo; The lawyer cannot bring himself to say &ldquo;the Samaritan&rdquo; &mdash; he says &ldquo;the one who had mercy on him.&rdquo; Jesus says: &ldquo;Go and do likewise.&rdquo; The command is not to understand neighborliness but to embody it, across whatever divides we have learned to treat as barriers.",
  },
  {
    title: "Pure Religion &mdash; James 1:27",
    body: "James cuts through religious complexity with a single, dense definition: &ldquo;Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world&rdquo; (James 1:27). The Greek word for &ldquo;look after&rdquo; is episkeptomai &mdash; to visit, inspect, to oversee with care, the same root from which we get &ldquo;bishop.&rdquo; It implies ongoing, attentive presence rather than a one-time rescue. The orphan and widow are the most vulnerable members of the ancient world: those who have lost their economic and social protection, those the system has no category for, those most likely to fall through every crack. James is saying that what God calls true religion &mdash; the real thing, not the imitation &mdash; is measured not by the quality of your theology, the consistency of your liturgy, or the fire of your prayers, but by what you do with your proximity to those who are suffering. This is not a call to replace inner piety with external action; James has already been emphatic that faith without works is dead. It is a call to refuse the separation between devotion and compassion that religious people perpetually reinvent to excuse their inaction.",
  },
  {
    title: "Touching the Untouchable &mdash; Mark 1:41",
    body: "In Mark 1, a man with leprosy approaches Jesus with one of the most desperate sentences in the Gospels: &ldquo;If you are willing, you can make me clean.&rdquo; He is not asking about power; he knows Jesus has it. He is asking about willingness. In the ancient world, leprosy (a term covering various skin diseases) made a person ritually unclean &mdash; excluded from temple worship, from social contact, from the embrace of family. The Levitical law required them to cry &ldquo;Unclean! Unclean!&rdquo; and keep their distance from others. Jesus could have healed him with a word, maintaining the distance that custom demanded. Instead, the text says, Jesus was &ldquo;moved with compassion&rdquo; (splagchnizomai in some manuscripts; &ldquo;moved with pity&rdquo; in others), &ldquo;reached out his hand and touched him.&rdquo; Then he healed him. The touch was not medically necessary. It was morally necessary &mdash; an act of solidarity before the act of healing, the restoration of personhood before the restoration of health. Jesus touched the man that no one would touch. Christian compassion follows this logic: before the solution, there is the solidarity. Before the answer, the willingness to be present in the problem. The person who has been made to feel untouchable needs to be touched before anything else can begin.",
  },
  {
    title: "Compassion Fatigue and the Spiritual Discipline of Rest",
    body: "Jesus, who was splagchnizomai at the sight of suffering, also withdrew repeatedly to lonely places to pray (Luke 5:16). He fell asleep in the boat. He told his disciples who had returned exhausted from ministry, &ldquo;Come away by yourselves to a desolate place and rest a while&rdquo; (Mark 6:31). This is not incidental. Compassion is a costly emotion, and sustained compassion in the presence of unrelenting suffering &mdash; in healthcare, social work, ministry, or caregiving &mdash; produces what researchers call compassion fatigue: a depletion of the emotional and spiritual reserves that make genuine responsiveness possible. The response to compassion fatigue is not to feel less but to be replenished. Henri Nouwen&rsquo;s insight is precise here: compassion is not a skill to be developed but an overflow of the inner life, and the inner life must be continually restored by solitude, prayer, and rest. The person who never withdraws to receive from God will eventually have nothing genuine to give to others; their &ldquo;compassion&rdquo; will become a performance of caring rather than its reality. Sabbath is not a concession to human weakness but a design feature: the God who rested on the seventh day built into creation the rhythm of work and replenishment that compassion requires to remain alive.",
  },
  {
    title: "Why Compassion Without Justice Becomes Enablement",
    body: "Compassion that never asks systemic questions can inadvertently sustain the conditions that produce the suffering it relieves. The church that feeds the poor every week without ever asking why the same people are hungry every week has limited its compassion to the individual while leaving the structural causes untouched. This is the critique from the justice tradition: charity without advocacy can become a way of managing suffering that keeps the compassionate person feeling virtuous while doing nothing to disrupt the systems that manufacture the need. Genuine compassion, as Gary Haugen argues, must eventually follow the suffering person into the system that is harming them and ask what must change. This does not mean that direct service is wrong &mdash; Jesus fed people, healed people, and touched the individual leprosy sufferer without first reforming the Levitical purity laws. But it does mean that the compassionate person who is paying attention will inevitably find themselves asking larger questions. Compassion is the gateway to justice: you cannot stay close to suffering indefinitely without developing an opinion about what is causing it and what must change.",
  },
  {
    title: "The Father in the Prodigal Story &mdash; Luke 15:20",
    body: "Luke 15:20 contains one of the most extraordinary images of compassion in all of Scripture: &ldquo;But while he was still a long way off, his father saw him and was filled with compassion (splagchnizomai); he ran to his son, threw his arms around him and kissed him.&rdquo; A few details reconstruct the force of this scene. In Middle Eastern culture, a man of the father&rsquo;s station did not run; it was undignified. He gathered his robe and ran anyway. The son had taken his father&rsquo;s inheritance &mdash; essentially wishing his father dead &mdash; and then squandered it in a foreign country with reckless living. He had brought shame on the entire family. The village would have lined up to jeer at his return. The father ran past the village before they could reach the son. He covered his son&rsquo;s shame with his embrace before the son could speak his rehearsed apology. He did not make him feel the weight of what he had done before giving him the welcome. This is compassion as preemptive grace: the father&rsquo;s gut moves him toward the son before there is any evidence that the son deserves it. Jesus is telling us something about God &mdash; that he is the father who is watching for us even when we have disgraced him, that his first move when he sees us returning is not judgment but the run. And he is telling us something about how we are to treat the returning prodigals in our own lives.",
  },
  {
    title: "Barriers to Compassion: Busyness, Self-Protection, and Moral Judgment",
    body: "The priest and the Levite in the Good Samaritan parable are not villains. They are busy people with good reasons to keep moving: ritual obligations, the demands of their positions, the fear of being attacked themselves, the suspicion that the man in the road might be a decoy for bandits. The barriers to compassion are rarely pure malice; they are usually legitimate things that have been allowed to take priority over the person in front of us. Busyness is the most common barrier: a relentless schedule that has no margin for the unplanned encounter, the interruption, the person who needs more time than we have. Self-protection is the second: the fear that genuine compassion will cost more than we can afford &mdash; emotionally, financially, temporally &mdash; and the habit of keeping relationships at the depth where they cannot draw too heavily on our reserves. Moral judgment is the third: the rapid assessment of whether the suffering person &ldquo;deserves&rdquo; our help, the categories that allow us to sort human beings into the worthy poor and the unworthy poor before we have even stopped walking. Jesus subverts all three barriers in the Samaritan parable. The Samaritan&rsquo;s schedule was disrupted. His resources were spent. He helped someone who, by all ethnic and religious categories, he had no obligation to help. Compassion, the parable insists, is not the emotion we feel when the barriers are absent; it is the practice of removing the barriers.",
  },
];

const practices = [
  {
    name: "The Pause",
    body: "Compassion begins with stopping. Build into your week one deliberate practice of slowing down at moments that pull at you: the homeless person on the corner, the colleague who seems off, the news story you would normally scroll past. Before you decide whether to act, simply pause and look. Allow the reality of another person&rsquo;s suffering to register rather than bouncing off the protective glass of your schedule. Thomas Merton called this &ldquo;le point vierge&rdquo; &mdash; the virgin point, the moment before we have categorized and filed and moved on. The Samaritan saw the man in the road and was moved before he did anything. Compassion requires that the seeing happen first, which means cultivating the capacity to be present to what is actually in front of you rather than already mentally past it.",
  },
  {
    name: "The Contemplative Companion",
    body: "Henri Nouwen described the discipline of &ldquo;contemplative compassion&rdquo; as learning to be present to another person&rsquo;s pain without immediately trying to fix it. Choose one person in your life who is suffering &mdash; a friend in a long illness, a family member in grief, a neighbor in financial crisis &mdash; and practice being with them without an agenda. Resist the compulsion to offer solutions, silver linings, or spiritual explanations. Ask questions and then be quiet. Bring food and then stay. This is harder than it sounds; most of us manage our discomfort at the suffering of others by talking, advising, and moving toward resolution. Nouwen argues that the ministry of presence &mdash; the willingness to be compassionate company in the dark &mdash; is often more healing than the most brilliant advice. It is also the form of compassion that costs the most: you cannot be a contemplative companion from a safe distance.",
  },
  {
    name: "Touch and Presence",
    body: "Jesus touched the leper before healing him. There are people in your community who are rarely or never touched &mdash; the elderly in care facilities, the disabled, the socially isolated, those marked by illness or addiction in ways that make others keep their distance. Volunteer at a nursing home, a hospice, an L&rsquo;Arche community, or a disability ministry &mdash; and pay attention to the power of physical presence and appropriate touch. Shake the hand, hold the hand, make sustained eye contact, use the person&rsquo;s name. These are not small things; they are signs that the person exists and matters. Jean Vanier, who founded L&rsquo;Arche communities where people with and without disabilities live together, discovered that the transformation flowed both ways: the non-disabled members of the community were healed of their competence-idolatry and their fear of weakness by the proximity of people who could not pretend to be self-sufficient.",
  },
  {
    name: "Crossing the Boundary",
    body: "The Samaritan crossed an ethnic and religious boundary that the culture had declared uncrossable. Identify one group of people from whom you are separated by class, race, religion, political tribe, or life experience &mdash; and pursue one intentional relationship across that divide. Not as a project, not as diversity homework, but as a recognition that Jesus commanded you to see the neighbor you have been trained not to see. Read one book by someone from that group, attend one event in their community, ask one person you meet there to have coffee with you. Begin with curiosity rather than program. The barriers to compassion are often not personal hostility but simple unfamiliarity, and unfamiliarity dissolves in direct proportion to shared time.",
  },
  {
    name: "Replenishing the Well",
    body: "If you are in a season of sustained compassionate labor &mdash; caregiving, ministry in hard places, counseling, social work, emergency medicine &mdash; build explicit replenishment into your schedule as a non-negotiable, not a reward you allow yourself when the work slows down. Identify what replenishes you (solitude, worship, physical exercise, time in creation, deep friendship, sabbath) and protect it with the same seriousness you bring to your responsibilities. The failure to do this is not self-sacrifice; it is a slow withdrawal from the accounts of empathy until there is nothing left to spend, and the people who depend on your compassion are left with someone performing its appearance. Jesus withdrew; you must too. The rhythm of engagement and replenishment is not a failure of devotion but its long-term sustainability.",
  },
  {
    name: "Seeing Christ in the Stranger",
    body: "Matthew 25:40 is one of the most demanding texts in the New Testament: Jesus identifies himself with the hungry, the stranger, the naked, the sick, and the imprisoned. Practice the discipline of approaching encounters with people in need with the deliberate question: where is Christ in this person? This is not a sentimental exercise. It is a theological reframing of the encounter that disrupts the rapid sorting of people into categories of worthiness. The person who is drunk on the sidewalk bears the image of God; Christ has identified himself with him. The undocumented immigrant in the detention facility; the elderly person with dementia who no longer knows your name; the child whose behavior exhausts your patience &mdash; each one is, in the words of Jesus, a place where he is present and waiting to be received. The saint who sees Christ in the poorest of the poor does not do so because it is always emotionally obvious. She does it because she has disciplined her seeing by the word of Christ until it becomes, over years, the first thing she sees.",
  },
];

const voices = [
  {
    name: "Henri Nouwen",
    years: "1932&ndash;1996",
    role: "Compassion",
    body: "Nouwen was a Harvard and Yale professor who spent the last decade of his life as a chaplain at L&rsquo;Arche Daybreak in Toronto, living in community with people with intellectual disabilities. His move from academic celebrity to hidden service was itself a theology of compassion enacted: he went not to give but to receive, and what he received &mdash; the directness, the vulnerability, the inability to pretend of the L&rsquo;Arche members &mdash; undid the false self he had constructed through achievement. His book Compassion (co-written with Donald McNeill and Douglas Morrison) argues that compassion is not a feeling spontaneously generated by good people but a discipline to be cultivated, rooted in the willingness to enter into the vulnerability of another rather than managing it from a safe distance. His most famous line, &ldquo;The greatest illusion of leadership is that one can lead and remain invulnerable,&rdquo; applies with equal force to compassion: you cannot truly be present to another&rsquo;s suffering while remaining safely insulated from it.",
    quote: "Compassion asks us to go where it hurts, to enter into the places of pain, to share in brokenness, fear, confusion, and anguish. Compassion challenges us to cry out with those in misery, to mourn with those who are lonely, to weep with those in tears.",
  },
  {
    name: "Mother Teresa",
    years: "1910&ndash;1997",
    role: "Seeing Christ in the Poorest of the Poor",
    body: "Teresa of Calcutta founded the Missionaries of Charity in 1950 with one charism: to serve &ldquo;the poorest of the poor&rdquo; &mdash; those dying on the streets, those rejected by every other institution, those deemed too broken to be worth the investment. Her theological logic was Matthew 25:40: the hungry, the naked, the sick, the dying were Christ in his most distressing disguise, and to touch them was to touch him. She ran Nirmal Hriday (Pure Heart) in Calcutta as a place where the destitute dying could die with dignity &mdash; not necessarily cured, but held, washed, and loved. Her critics argued that she did not address the systemic causes of poverty; her defenders replied that she did what the critics did not: she went. The publication of her private letters after her death revealed that she had lived for decades in a dark night of the soul &mdash; an experience of God&rsquo;s absence while she continued to serve. This has only deepened her witness: her compassion was sustained not by consolation but by faith and commitment, which is perhaps the most honest account of what compassion costs in the long run.",
    quote: "If you judge people, you have no time to love them.",
  },
  {
    name: "Jean Vanier",
    years: "1928&ndash;2019",
    role: "L&rsquo;Arche and the Wisdom of the Weak",
    body: "Vanier founded L&rsquo;Arche in 1964 when he invited two men with intellectual disabilities to leave the institution where they lived and share a house with him in a small French village. He had no program and no theory; he had only the conviction that these men were full human beings who deserved to live in community rather than in custody. What emerged was a network of communities across the world in which the core members (those with disabilities) and assistants live as equals, sharing meals, prayer, and daily life. Vanier&rsquo;s great theological insight was the reversal: the so-called weak are not the objects of the compassion of the strong but its teachers. They expose the pretension, the performance, and the self-sufficiency of the &ldquo;able&rdquo; and offer in exchange an education in what it means to be human &mdash; dependent, relational, beloved not for productivity but for personhood. His book Becoming Human argues that the heart of the human project is not achievement but belonging, and that communities organized around the weakest members are closer to the kingdom of God than those organized around the strongest.",
    quote: "People with disabilities have taught me more about what it means to be human and to love than all my years of study and work.",
  },
  {
    name: "Gary Haugen",
    years: "1963&ndash;",
    role: "Compassion That Goes All the Way",
    body: "Haugen&rsquo;s work at International Justice Mission provides a case study in the movement from compassion to justice. The original impulse is compassion: a gut-level response to the reality of children being sold into sexual slavery, laborers being held in bonded servitude, families being driven from their land by violent extortion. But Haugen discovered early that compassion without confrontation of the violent systems harming people produces, at best, temporary relief and, at worst, a false comfort that lets donors feel good while the machinery of exploitation continues. IJM&rsquo;s model sends lawyers and investigators, not just aid workers, because compassion for the trafficking victim requires taking on the trafficker, the corrupt official, and the broken legal system that enables them. Haugen&rsquo;s work is a concrete rebuttal to the separation of compassion and justice: genuine care for a person requires caring about what is happening to them and being willing to fight it.",
    quote: "The problem of injustice is not that we don&rsquo;t care; it&rsquo;s that we&rsquo;re not close enough to the suffering to be moved.",
  },
  {
    name: "Bren&eacute; Brown",
    years: "1965&ndash;",
    role: "Vulnerability and Empathy",
    body: "Brown is a research professor whose secular work on shame, vulnerability, and empathy has provided the psychological architecture that many Christians have found illuminating about compassion. Her central finding is that the same vulnerability that makes us capable of genuine connection &mdash; love, belonging, joy, creativity &mdash; is the vulnerability we spend enormous energy trying to armor against. We numb vulnerability by staying busy, by staying on the surface, by never letting ourselves be moved. But, as she argues, you cannot selectively numb: when you numb fear and grief and longing, you also numb gratitude and wonder and compassion. Her concept of empathy as distinct from sympathy &mdash; empathy goes into the hole with the person, sympathy looks down from above &mdash; maps precisely onto the distinction Jesus embodies in the incarnation: God did not look down from above and feel sorry for us, but climbed into the hole.",
    quote: "Empathy has no script. There is no right way or wrong way to do it. It&rsquo;s simply listening, holding space, withholding judgment, emotionally connecting, and communicating that incredibly healing message of &lsquo;You&rsquo;re not alone.&rsquo;",
  },
  {
    name: "Johann Christoph Arnold",
    years: "1940&ndash;2017",
    role: "Seeking Peace",
    body: "Arnold was an elder in the Bruderhof, an Anabaptist intentional community movement, and spent decades working at the intersection of compassion and reconciliation &mdash; with death row prisoners, with families torn by estrangement, with those crushed by shame. His book Seeking Peace gathers testimonies of people who found their way through bitterness and isolation to peace, almost always through the unexpected compassion of another person who chose to enter their darkness rather than flee it. Arnold&rsquo;s work is grounded in the conviction that the incarnation is not a doctrine to be believed but a pattern to be lived: as God entered the darkness of human suffering by becoming human, so those who follow him are sent into the darkness of others&rsquo; suffering by the same Spirit. He particularly emphasized the compassion owed to the most difficult people &mdash; the violent, the addicted, the criminally condemned &mdash; because these were the ones Jesus most consistently sought out.",
    quote: "To find peace we need to have the courage to meet suffering face to face, whether it is our own or someone else&rsquo;s.",
  },
];

const scriptures = [
  {
    ref: "Matthew 9:36",
    text: "When he saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep without a shepherd.",
    note: "The Greek word is splagchnizomai &mdash; a gut-wrenching, visceral movement of compassion. Jesus does not see the crowds with clinical detachment; he is moved in his deepest interior. This is the emotional life of God before it becomes the ministry of God.",
  },
  {
    ref: "Luke 10:33-34",
    text: "But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him.",
    note: "The parable does not end with feeling pity &mdash; it ends with oil and wine, a donkey, an inn, and a promise to return. Compassion crosses every boundary of ethnicity and religion, and it is not complete until the seeing has become the doing.",
  },
  {
    ref: "James 1:27",
    text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world.",
    note: "James defines &ldquo;pure religion&rdquo; by its concrete direction: toward those who have lost their protection in the social order. The word for &ldquo;look after&rdquo; (episkeptomai) implies ongoing, attentive oversight &mdash; not a single act but a sustained relationship of care.",
  },
  {
    ref: "Mark 1:41",
    text: "Jesus was indignant. He reached out his hand and touched the man. &ldquo;I am willing,&rdquo; he said. &ldquo;Be clean!&rdquo;",
    note: "Jesus touched the leper before healing him. The touch was not medically necessary but morally necessary &mdash; the restoration of personhood before the restoration of health. He answered the question the leper was really asking: not &ldquo;Can you?&rdquo; but &ldquo;Are you willing?&rdquo;",
  },
  {
    ref: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
    note: "The father does not wait for the son to arrive and deliver his apology. He is watching &mdash; has been watching. He runs. He covers his shame before he hears his reasons. This is God: splagchnizomai toward the returning sinner, running before the argument is complete.",
  },
  {
    ref: "Colossians 3:12",
    text: "Therefore, as God&rsquo;s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience.",
    note: "Compassion here is splagchna oiktirmou &mdash; bowels of mercy. Paul&rsquo;s metaphor is clothing: you put it on deliberately, daily, as an act of the will before it is an act of the emotion. Compassion is not only a feeling to wait for but a garment to wear.",
  },
];

const videos = [
  { videoId: "PwpMcVcZHcM", title: "Splagchnizomai: The Gut-Wrenching Compassion of Jesus" },
  { videoId: "5_f0GEp_WQI", title: "The Good Samaritan &mdash; Crossing Every Boundary" },
  { videoId: "z5bv9WQkx5c", title: "Henri Nouwen on Compassion and Community" },
  { videoId: "8XA3BNWRDR0", title: "Jean Vanier: The Wisdom of L&rsquo;Arche" },
  { videoId: "q7mXSRBuDLU", title: "Mother Teresa and Seeing Christ in the Poorest" },
  { videoId: "XaGkjRuXXFI", title: "Compassion Without Judgment: The Father&rsquo;s Welcome" },
];

const relatedPages = [
  { href: "/christian-justice", label: "Christian Justice" },
  { href: "/christian-mercy", label: "Christian Mercy" },
  { href: "/incarnation", label: "The Incarnation" },
  { href: "/good-samaritan", label: "The Good Samaritan" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/christian-hospitality", label: "Hospitality" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianCompassionPage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<COMEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [personSeen, setPersonSeen] = useState("");
  const [howHelped, setHowHelped] = useState("");
  const [whatItCost, setWhatItCost] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!personSeen.trim()) return;
    const entry: COMEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      personSeen: personSeen.trim(),
      howHelped: howHelped.trim(),
      whatItCost: whatItCost.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setPersonSeen("");
    setHowHelped("");
    setWhatItCost("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Christian Compassion
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Moved with Compassion: The Gut-Level Response of God
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          The Greek word splagchnizomai &mdash; translated &ldquo;moved with compassion&rdquo; whenever Jesus encounters suffering &mdash;
          means something has been wrenched in the gut. Not mild sympathy. Not intellectual concern. The bowels turn over.
          This is the word the Gospels choose for the emotional life of God made flesh.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the gut-wrenching compassion that drives Jesus in the Gospels, the Good Samaritan who crossed
          every boundary, the Father running down the road, and what it looks like to train ourselves to see &mdash; and be
          moved by &mdash; what God sees.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Compassion
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Eight movements through the Scripture&rsquo;s teaching on compassion &mdash; from the visceral splagchnizomai of Jesus
              to the Good Samaritan, the leper in Mark 1, the running father, and the barriers we build to stay unmoved.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Compassion in the New Testament is not a feeling that good people happen to have; it is a word the Gospel
                writers reserve for God and for those who most closely mirror God. To follow Jesus into compassion is to
                train the gut &mdash; not merely the will &mdash; to be moved by what moves him: harassed and helpless sheep,
                lepers no one will touch, prodigals a long way off. It is the incarnation extended into the present: God
                still wearing skin, still stopping by the road, still running across the field. Through you.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices of Compassion
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Compassion is a spiritual discipline as much as an emotion. These six practices train the eye to see, the
              heart to be moved, and the body to respond before the barriers reassert themselves.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices of Compassion
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; a Dutch priest, an Albanian nun, a Canadian philosopher, an activist lawyer, a shame
              researcher, and an Anabaptist elder &mdash; who have charted the depth and cost of Christian compassion.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.name }}
                  />
                  <span
                    style={{ color: MUTED, fontSize: "0.82rem" }}
                    dangerouslySetInnerHTML={{ __html: v.years }}
                  />
                </div>
                <div
                  style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.role }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Compassion
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six texts where the gut-wrenching compassion of God becomes visible &mdash; to read slowly, to memorize,
              and to carry as lenses through which to see the people in front of you.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice:</strong> read Luke 10:25-37 (the Good Samaritan) and Luke
                15:11-32 (the Prodigal Son) in the same sitting. In the first, compassion crosses the social divide of
                ethnicity. In the second, it crosses the moral divide of disgrace. Ask: which kind of compassion is harder
                for you to practice? The stranger who is different from you, or the person who has made themselves
                contemptible? Both are in the parable. Both are in your week.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Compassion Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log a person in need you saw, how you helped (or honestly why you passed by), and what it cost you &mdash;
              or what it would have cost. Entries are saved privately in your browser &mdash; a record of your encounters
              with the image of God in need, for the Father who sees what is done in secret.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="com-person" style={labelStyle}>The person in need I saw</label>
                <textarea
                  id="com-person"
                  value={personSeen}
                  onChange={e => setPersonSeen(e.target.value)}
                  rows={2}
                  placeholder="e.g. A man asking for food outside the grocery store; a colleague who was visibly struggling and said nothing..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name the person as specifically as you can. The more concrete the seeing, the more likely the acting.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="com-helped" style={labelStyle}>How I helped &mdash; or honestly why I passed by</label>
                <textarea
                  id="com-helped"
                  value={howHelped}
                  onChange={e => setHowHelped(e.target.value)}
                  rows={2}
                  placeholder="e.g. I stopped and bought him lunch; I checked in on her after the meeting; I kept walking because I was late and didn&apos;t want to..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The priest and the Levite had reasons. Honesty about your reasons is the beginning of compassion, not its failure.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="com-cost" style={labelStyle}>What it cost &mdash; or what it would have cost</label>
                <textarea
                  id="com-cost"
                  value={whatItCost}
                  onChange={e => setWhatItCost(e.target.value)}
                  rows={2}
                  placeholder="e.g. Twenty minutes and ten dollars; the awkwardness of showing I noticed; the risk of getting involved in something I couldn&apos;t solve..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The Good Samaritan spent his oil, his wine, his animal, his time, and his money. Compassion is always a spending.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!personSeen.trim()}
                style={{
                  background: personSeen.trim() ? TEAL : BORDER,
                  color: personSeen.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: personSeen.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin recording what you see &mdash; the God who is splagchnizomai is paying attention,
                    and so can you.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      {entry.date && (
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      )}
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Person Seen
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.personSeen}</p>
                      </div>
                      {entry.howHelped && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How I Helped
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.howHelped}</p>
                        </div>
                      )}
                      {entry.whatItCost && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What It Cost
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.whatItCost}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the compassion of Jesus, the Good Samaritan, Henri Nouwen&rsquo;s theology of presence, and what
              it looks like to be moved with compassion in the way the Gospels show us.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;When he saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep
            without a shepherd&rdquo; (Matthew 9:36). The crowds have not changed. The question is whether we have learned
            to see them the way he does &mdash; and whether, having seen, something turns over inside us too.
          </p>
        </div>
      </main>
    </div>
  );
}
