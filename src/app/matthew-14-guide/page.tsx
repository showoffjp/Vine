"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Death of John the Baptist",
  "Compassion for the Crowd",
  "Feeding Five Thousand",
  "You Give Them Food",
  "Walking on Water",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Matthew 14",
    reference: "Matthew 14:1&ndash;36",
    paragraphs: [
      "Matthew 14 is one of the most dramatic chapters in the Gospel &mdash; a chapter that moves from the horror of John the Baptist&rsquo;s beheading, through the breathtaking miracle of feeding five thousand people with five loaves and two fish, to the astonishing account of Jesus walking on the water of the Sea of Galilee in the fourth watch of the night. It is a chapter about the power and provision of Jesus in the face of grief, impossibility, and fear.",
      "The chapter opens in the court of Herod Antipas, where a birthday banquet ends in one of the most grotesque scenes in all of the Gospels: a dancing girl, instructed by her mother Herodias, asks for the head of John the Baptist on a platter. Herod, who had imprisoned John for denouncing his unlawful marriage to Herodias, is trapped by his own oath and the spectacle of his guests. He gives the order, and John &mdash; the greatest born of women, according to Jesus himself &mdash; is beheaded in prison. The news reaches Jesus, and he withdraws by boat to a desolate place alone.",
      "But the crowds, on hearing of his movement, follow him on foot from the towns. When Jesus lands and sees the great crowd, he has compassion on them and heals their sick. As evening approaches, the disciples urge Jesus to send the crowd away to buy food for themselves. Jesus responds with a command that turns the disciples&rsquo; reasonableness upside down: &ldquo;You give them something to eat.&rdquo; What follows &mdash; the blessing and breaking of five loaves and two fish, the distribution to five thousand men plus women and children, the gathering of twelve baskets of fragments &mdash; is one of the most beloved miracles in all of Scripture, the only miracle recorded in all four Gospels.",
      "The chapter closes with the account of Jesus walking on the water, an episode that functions as a kind of theological commentary on the feeding miracle. Jesus, having sent the disciples ahead by boat and the crowds away, goes up the mountain alone to pray. In the fourth watch of the night &mdash; between three and six in the morning &mdash; he comes to the disciples walking on the sea. Peter, at Jesus&rsquo;s invitation, steps out of the boat and walks toward him, but his gaze shifts to the wind and waves and he begins to sink. Jesus catches him, asks why he doubted, and when they enter the boat the wind ceases. The disciples worship him: &ldquo;Truly you are the Son of God.&rdquo;",
      "Matthew 14 is therefore a chapter structured around three movements: the shocking power of death and political evil in the world (the beheading of John), the compassionate power of Jesus to heal and provide (the feeding of the five thousand), and the divine power of Jesus over creation itself (walking on water). Taken together, they build a cumulative portrait of Jesus as the one who is greater than every human king and every natural force &mdash; the Son of God whose compassion is inexhaustible and whose power knows no boundary.",
    ],
  },
  {
    id: "Death of John the Baptist",
    heading: "The Death of John the Baptist",
    reference: "Matthew 14:1&ndash;12",
    paragraphs: [
      "The opening of Matthew 14 is colored by the fearful superstition of Herod Antipas, the tetrarch of Galilee. When reports of Jesus&rsquo;s miracles reached him, Herod said to his servants, &ldquo;This is John the Baptist. He has been raised from the dead; that is why these miraculous powers are at work in him&rdquo; (14:2). The guilty conscience of a man who had ordered an unjust execution is a powerful thing: Herod could not see a new prophet at work without imagining that his murdered victim had somehow returned.",
      "Matthew then steps back to explain the backstory. John had been arrested by Herod because he kept saying to him, &ldquo;It is not lawful for you to have her&rdquo; &mdash; a reference to Herodias, who had been the wife of Herod&rsquo;s brother Philip. Herod had taken her for himself, a flagrant violation of the law of Leviticus (18:16, 20:21). John&rsquo;s prophetic conscience would not allow this to pass in silence, and it cost him his freedom. Herod wanted to put him to death, but he feared the crowds, who regarded John as a prophet.",
      "The occasion for John&rsquo;s execution was Herod&rsquo;s birthday celebration. When the daughter of Herodias danced before the assembled guests, she pleased Herod so much that he swore with an oath to give her whatever she might ask, &ldquo;even up to half of his kingdom&rdquo; &mdash; an extravagant promise born of the intoxication of the moment. Prompted by her mother, the girl asked for the head of John the Baptist on a platter. The request is a masterpiece of calculated revenge: Herodias had been waiting for exactly this kind of opportunity.",
      "Herod, the text says, was grieved &mdash; a detail that is both revealing and damning. He did not want to kill John; he knew John was righteous, and he had even liked to hear him speak (Mark 6:20). But he had made his oath publicly, before his guests, and his fear of losing face before the powerful people at his table outweighed his reluctance to commit murder. This is the anatomy of a sin: the momentary oath, the demand of those around him, the calculation of social cost, and the choice of personal status over justice.",
      "John&rsquo;s disciples came and took his body and buried it, then went and told Jesus. The brevity of that account &mdash; a burial, a report &mdash; covers an enormous weight of grief and loss. John had been the forerunner, the voice in the wilderness, the one who prepared the way. He had baptized Jesus in the Jordan, had heard the voice from heaven, had pointed his own disciples toward the Lamb of God. Now he was dead, killed not by a great theological confrontation but by a dancing girl&rsquo;s wish at a birthday party. The kingdom of God had come, and its herald had been beheaded.",
      "The account of John&rsquo;s death sets the chapter&rsquo;s tone with unmistakable clarity: this is a world in which power is abused, the innocent suffer, the righteous are silenced by the powerful, and death can come at the whim of a vindictive woman and a vain man. Into exactly this world, Matthew 14 then shows us Jesus &mdash; the one whose compassion is not defeated by grief, whose provision is not stopped by scarcity, and whose power over creation itself is the sign that the world&rsquo;s last word is not the word of Herod.",
    ],
  },
  {
    id: "Compassion for the Crowd",
    heading: "Compassion When Jesus Needed to Be Alone",
    reference: "Matthew 14:13&ndash;14",
    paragraphs: [
      "When Jesus heard the news of John&rsquo;s death, &ldquo;he withdrew from there in a boat to a desolate place by himself&rdquo; (14:13). This is one of the most humanly touching moments in Matthew&rsquo;s Gospel. Jesus, who has just learned that his cousin and forerunner has been beheaded in prison, seeks solitude. He has grief to carry, and he needs space to carry it. The movement to a &ldquo;desolate place by himself&rdquo; is the movement of a human heart toward what it needs in its sorrow.",
      "But the crowds would not give him that space. When they heard he had left, they followed him on foot from the towns, making their way around the lake to meet him when he landed. The picture is both touching and demanding: thousands of people, many of them sick and desperate, so hungry for what Jesus offered that they were willing to walk miles along the shore to be where he was. They had no food, no plan, and no particular invitation &mdash; only need and the belief that Jesus could meet it.",
      "What happened when Jesus came ashore and saw the great crowd is described in one of the most important words in Matthew&rsquo;s Gospel: &ldquo;he had compassion on them and healed their sick&rdquo; (14:14). The Greek word translated &ldquo;compassion&rdquo; &mdash; esplanchnisthe &mdash; is one of the strongest emotional words in the New Testament, related to the word for internal organs. It describes a feeling that grips the gut, a visceral movement of the whole self toward another in their need. Jesus was not performing a professional duty when he healed the crowds; he was moved in his very depths by what he saw.",
      "The significance of this moment is heightened by what came before it. Jesus had just received devastating personal news. He was a man in grief, seeking rest and solitude. He had the most legitimate possible reason for not being available to the crowd at that moment. And yet, when he saw them, his grief did not produce withdrawal or resentment. It produced compassion and action. This is not the response of someone performing a role; it is the revelation of a character so oriented toward others that even personal sorrow does not close it down.",
      "For those who follow Jesus, this moment carries a challenge and a comfort simultaneously. The challenge is that ministry to others does not wait for our own grief to resolve itself; the crowd was there on the shore whether Jesus was ready for them or not. The comfort is that the one who calls his people to give themselves in compassion is himself the supreme example of that compassion &mdash; and he extends it not only to the crowds on the shore but to every follower who comes to him in their own need and grief. Jesus, who was moved with compassion for the sick, is also the Jesus who comes to us in our weariness and says: come to me, and I will give you rest.",
    ],
  },
  {
    id: "Feeding Five Thousand",
    heading: "Five Loaves, Two Fish, Five Thousand Fed",
    reference: "Matthew 14:15&ndash;21",
    paragraphs: [
      "As evening approached, the disciples came to Jesus with a proposal that sounded entirely sensible: &ldquo;This is a desolate place, and the day is now over; send the crowds away to go into the villages and buy food for themselves&rdquo; (14:15). The calculation was reasonable: too many people, too little food, too late in the day, too far from any market. The disciples were not failing in faith by making this suggestion; they were applying normal human logic to an obvious problem. The only thing they had not factored in was Jesus.",
      "Jesus&rsquo;s response upended their proposal entirely: &ldquo;They need not go away; you give them something to eat&rdquo; (14:16). The disciples&rsquo; answer was a quick inventory of their actual resources: &ldquo;We have only five loaves here and two fish.&rdquo; What they had in their hands was comically insufficient for the need before them. Five flatbreads and two small fish do not feed five thousand men, plus women and children &mdash; a crowd that scholars estimate may have been upward of fifteen or twenty thousand people in total.",
      "What happened next unfolded in a series of deliberate, liturgical-feeling actions. Jesus told the crowds to sit down on the grass. He took the five loaves and the two fish, and looking up to heaven, he said a blessing. He broke the loaves and gave them to the disciples, and the disciples distributed them to the crowds. &ldquo;And they all ate and were satisfied. And they took up twelve baskets full of the broken pieces left over. And those who ate were about five thousand men, besides women and children&rdquo; (14:20&ndash;21).",
      "The sequence of actions &mdash; took, blessed, broke, gave &mdash; would have been immediately recognizable to Matthew&rsquo;s Jewish readers as the standard blessing before a meal. But it anticipates something even more specific: the Last Supper, where Jesus would again take bread, bless it, break it, and give it to his disciples (26:26). The feeding of the five thousand is not merely a miracle of provision; it is a sacramental moment, a foreshadowing of the table at which Jesus would give himself as bread for the world. The multiplication of loaves points toward the breaking of the one body for many.",
      "The twelve baskets of fragments gathered after the meal are not an incidental detail. Twelve is the number of the tribes of Israel &mdash; suggesting that what Jesus did here was sufficient not merely for the crowd on that day but for the whole people of God. The abundance left over after the miraculous meal is a sign that Jesus&rsquo;s provision does not merely meet need; it exceeds it. There is no situation of genuine scarcity in which those who bring what they have to Jesus &mdash; however little and however laughable &mdash; will find that he cannot multiply it beyond what was imagined.",
      "The feeding of the five thousand is the only miracle of Jesus recorded in all four Gospels. Its appearance in Matthew, Mark, Luke, and John signals that the earliest Christian communities understood this event as foundational &mdash; a moment that disclosed something essential about who Jesus is and what the kingdom of God looks like. The kingdom does not send the hungry away to fend for themselves; it commands those who follow Jesus to feed them, trusting that what is brought to Jesus in faith will be more than enough.",
    ],
  },
  {
    id: "You Give Them Food",
    heading: "&ldquo;You Give Them Something to Eat&rdquo;",
    reference: "Matthew 14:16",
    paragraphs: [
      "The single sentence at the center of the feeding miracle &mdash; &ldquo;You give them something to eat&rdquo; (14:16) &mdash; is one of the most demanding and generative commands Jesus ever spoke to his disciples. The emphasis falls on &ldquo;you&rdquo;: not &ldquo;let them go buy food,&rdquo; not &ldquo;I will feed them,&rdquo; but you. The disciples, who had arrived at a reasonable conclusion that the problem was unsolvable with their current resources, are told by Jesus that they are the ones who will solve it.",
      "The disciples&rsquo; response to the command reveals the gap between what they could see and what Jesus knew: &ldquo;We have only five loaves here and two fish.&rdquo; What they were presenting was not a solution but a demonstration of the impossibility of what Jesus was asking. They were showing him the math: this much food divided by this many people does not work. Their &ldquo;only&rdquo; is the key word &mdash; it frames the situation as one of fundamental scarcity, of having less than what the need requires.",
      "But Jesus does not argue with their calculation. He does not say their assessment of the available food is wrong. He says: bring it here to me. The movement from &ldquo;we have only&rdquo; to &ldquo;bring it here&rdquo; is the movement of faith &mdash; from focusing on the inadequacy of what is in hand to placing it in the hands of the one who can multiply it. The disciples did not need to manufacture more food; they needed to release what they had to the one who would transform it.",
      "The command &ldquo;you give them something to eat&rdquo; has echoed down the centuries as more than a narrative detail. It has been read by the church as a standing commission: those who follow Jesus are called to be agents of provision for the hungry, the sick, the needy, the crowd that has no food. The miracle does not absolve the disciples from the command to feed people; it shows them how the command can be fulfilled by those who bring what little they have to Jesus and trust him to do what only he can do with it.",
      "There is also a Eucharistic dimension to this interpretation. The church&rsquo;s ongoing act of feeding the congregation with the bread of the Lord&rsquo;s table is itself a fulfillment of the command to give the people something to eat. Week after week, in churches around the world, followers of Jesus take what seems like an impossibly small thing &mdash; a piece of bread, a cup of wine &mdash; and offer it to crowds of people who are hungry at a level deeper than the stomach. The feeding of the five thousand is not a past event only; it is a pattern for the ongoing ministry of those who trust that Jesus can multiply what they bring.",
      "The miracle also illuminates something about how God typically works in the world. He rarely acts in a way that bypasses human participation entirely. He asked the disciples to bring what they had, to seat the people, to distribute the food. He multiplied it &mdash; but the logistics of obedience fell to them. The kingdom of God advances through the willing, ordinary, sometimes fumbling participation of people who bring their five loaves and two fish to Jesus and trust that his blessing on their small offering will somehow be enough.",
    ],
  },
  {
    id: "Walking on Water",
    heading: "Jesus Walking on the Water",
    reference: "Matthew 14:22&ndash;36",
    paragraphs: [
      "Immediately after the feeding of the five thousand, Jesus did something unexpected: he dismissed the crowds himself, compelled the disciples to get into the boat and go ahead of him to the other side, and then went up on the mountain alone to pray. The sequence is important &mdash; Jesus, who had just performed one of his most staggering miracles, sought solitude and prayer. The mountain, the night, the prayer: these are the context for what followed on the sea.",
      "The disciples, meanwhile, were struggling. The boat was &ldquo;beaten by the waves, for the wind was against them&rdquo; (14:24). The Sea of Galilee was notorious for sudden violent storms that funneled down through the surrounding hills; experienced fishermen among the disciples would have known how dangerous those waters could become. They had been rowing through the night against a headwind, and in the fourth watch &mdash; between three and six in the morning &mdash; they were still far from shore. It was at this point, in the darkness and exhaustion of that final night watch, that they saw someone walking toward them on the water.",
      "Their reaction was immediate and instinctive: &ldquo;they were terrified and said, &lsquo;It is a ghost!&rsquo; and they cried out in fear&rdquo; (14:26). Their fear is entirely understandable. A figure walking on water in the middle of the night, in a storm, was not in any natural category they had available to explain it. Before they could process what they were seeing, Jesus spoke: &ldquo;Take heart; it is I. Do not be afraid.&rdquo; The Greek for &ldquo;it is I&rdquo; &mdash; ego eimi &mdash; is the same phrase used in the Septuagint translation of God&rsquo;s self-disclosure to Moses at the burning bush. This is not merely identification; it is a claim.",
      "Then Peter did something characteristically bold and characteristically vulnerable. &ldquo;Lord, if it is you, command me to come to you on the water.&rdquo; And Jesus said, &ldquo;Come.&rdquo; Peter got out of the boat and walked on the water toward Jesus &mdash; a moment of extraordinary faith and obedience. He was doing what no human being had ever done, and he was doing it because Jesus commanded it. But then, the text says, he &ldquo;saw the wind&rdquo; &mdash; his attention shifted from Jesus to his circumstances &mdash; and he began to sink, crying out, &ldquo;Lord, save me.&rdquo;",
      "Jesus immediately reached out his hand and caught him, saying, &ldquo;O you of little faith, why did you doubt?&rdquo; The rebuke is gentle but real. Peter had done something remarkable &mdash; he had stepped out of the boat at Jesus&rsquo;s word &mdash; and then had been undone not by the waves but by fear of the waves. The wind and the waves did not change between the moment he was walking and the moment he began to sink; what changed was where his eyes were fixed. Little faith is not no faith; it is faith that begins strong and gets distracted by the size of the problem.",
      "When they got into the boat, the wind ceased. And those in the boat worshiped Jesus, saying, &ldquo;Truly you are the Son of God&rdquo; (14:33). This is the first time in Matthew&rsquo;s Gospel that the disciples collectively worship Jesus with this full confession. The walking on water, and especially Jesus&rsquo;s rescuing of Peter and his stilling of the wind, had shown them something that the feeding of the five thousand had pointed toward but not fully disclosed: that Jesus was not merely a prophet or a healer, but the one who commands the sea and the wind &mdash; the one whom the Old Testament described as he who &ldquo;alone stretches out the heavens and treads on the waves of the sea&rdquo; (Job 9:8). The disciples&rsquo; worship in the boat is the right response to what they have seen.",
    ],
  },
];

const videoItems = [
  { videoId: "Matt14AaBbCcD", title: "Matthew 14 - Feeding 5000 and Walking on Water" },
  { videoId: "Matt14EeFfGgH", title: "Matthew 14 Bible Study - Miracles of Compassion and Power" },
  { videoId: "Matt14IiJjKkL", title: "Peter Walks on Water - Faith, Doubt, and the Eyes of Jesus" },
  { videoId: "Matt14MmNnOoP", title: "You Give Them Something to Eat - Matthew 14 Explained" },
];

export default function Matthew14GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Matthew 14 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From the grief of John&rsquo;s beheading to five loaves feeding a multitude &mdash; and then Jesus walking across the sea in the fourth watch of the night &mdash; Matthew 14 is a chapter of miracles that discloses the compassion and power of the Son of God.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && activeTab !== "Videos" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Matthew 14 through these video teachings on the death of John the Baptist, Jesus&rsquo;s compassion for the crowds, the feeding of the five thousand, Peter walking on water, and the disciples&rsquo; worship of the Son of God.
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
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Truly You Are the Son of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 14 moves from political horror to miraculous provision to divine power over nature, building toward the disciples&rsquo; first full confession: &ldquo;Truly you are the Son of God.&rdquo; The chapter shows that Jesus&rsquo;s compassion is not defeated by grief, that what we bring to him in faith is never too little, and that when we begin to sink it is his hand that reaches out to catch us.
          </p>
        </div>
      </main>
    </div>
  );
}
