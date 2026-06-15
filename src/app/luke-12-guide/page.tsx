"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Fear God, Not Man",
  "The Rich Fool and Anxiety",
  "Watchfulness and Division",
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
    heading: "Overview of Luke 12",
    reference: "Luke 12:1&ndash;59",
    paragraphs: [
      "Luke chapter 12 is one of the great teaching discourses of the Gospel, a sustained address delivered to the disciples while a vast crowd of many thousands presses in around them, &ldquo;so that they were trampling one another.&rdquo; Jesus speaks first to his own followers, then turns to answer questions from the throng, weaving together themes of fear, possessions, providence, watchfulness, and the division his message inevitably brings. It is a chapter that searches the heart, exposing where our security truly lies and calling us to a life ordered by the kingdom of God rather than by anxiety or greed.",
      "The discourse opens with a warning against hypocrisy (vv.1&ndash;12). &ldquo;Beware the leaven of the Pharisees, which is hypocrisy,&rdquo; Jesus says, reminding his hearers that nothing covered will fail to be revealed, and nothing hidden that will not be made known. He calls his friends not to fear those who can only kill the body, but to fear the One who has authority over the soul. Even so, the same God who notes the fall of a sparrow numbers the very hairs of our heads &mdash; &ldquo;you are of more value than many sparrows.&rdquo;",
      "From the crowd a man interrupts, asking Jesus to settle an inheritance dispute, and this becomes the occasion for a solemn warning against covetousness (vv.13&ndash;21). &ldquo;One&rsquo;s life does not consist in the abundance of his possessions.&rdquo; Jesus tells the Parable of the Rich Fool, the man who tears down his barns to build bigger ones, only to hear, &ldquo;This night your soul is required of you.&rdquo; The one who lays up treasure for himself is &ldquo;not rich toward God.&rdquo;",
      "This leads into the well-loved teaching on anxiety and trust (vv.22&ndash;34). &ldquo;Consider the ravens&hellip; consider the lilies,&rdquo; Jesus urges, drawing the disciples&rsquo; eyes to a Father who feeds the birds and clothes the grass of the field. &ldquo;Do not be anxious,&rdquo; he says; instead, &ldquo;seek his kingdom, and these things will be added to you.&rdquo; He calls them to sell their possessions and give to the needy, for &ldquo;where your treasure is, there will your heart be also.&rdquo;",
      "The latter half of the chapter turns to watchfulness and readiness (vv.35&ndash;48). &ldquo;Stay dressed for action and keep your lamps burning,&rdquo; Jesus commands, picturing servants awaiting their master&rsquo;s return from the wedding feast. Blessed are those found awake. He contrasts the faithful and wise manager with the one who presumes upon his master&rsquo;s delay, closing with the sober principle: &ldquo;To whom much was given, of him much will be required.&rdquo;",
      "Finally, Jesus speaks of the fire and division his coming brings (vv.49&ndash;59). &ldquo;I came to cast fire on the earth,&rdquo; he declares, and he speaks of a baptism he must undergo &mdash; his own suffering and death. His gospel will not bring an easy peace but division, even within households. He rebukes the crowds for reading the weather yet failing to interpret &ldquo;the present time,&rdquo; and urges them to settle accounts with their accuser before judgment overtakes them.",
    ],
  },
  {
    id: "Fear God, Not Man",
    heading: "Fear God, Not Man",
    reference: "Luke 12:1&ndash;12",
    paragraphs: [
      "As the crowd swells into the thousands, Jesus first addresses his disciples with a striking image: &ldquo;Beware the leaven of the Pharisees, which is hypocrisy&rdquo; (12:1). Leaven works silently, spreading through the whole lump of dough, and so it is with hypocrisy &mdash; a hidden corruption that quietly permeates the heart and the community. The danger is not always open wickedness but the slow, secret rot of pretending to be what one is not, of wearing a mask of piety over an unconverted heart.",
      "Against this hidden corruption Jesus sets a sobering truth: concealment is ultimately impossible. &ldquo;Nothing is covered up that will not be revealed, or hidden that will not be known&rdquo; (12:2). What is whispered in the dark will be proclaimed in the light; what is spoken in private rooms will be shouted from the housetops. The disciple lives before the eyes of God, for whom all things are open, and the day is coming when every secret will be brought into the daylight of his judgment.",
      "This frees the disciple from the tyranny of human opinion. &ldquo;Do not fear those who kill the body, and after that have nothing more that they can do&rdquo; (12:4). The worst that hostile men can inflict is death of the body, which cannot touch the soul. Rather, Jesus says, fear the One who, after killing, &ldquo;has authority to cast into hell&rdquo; (12:5). The fear of God displaces the fear of man; when the eternal weight of God&rsquo;s authority fills the heart, the threats of mortal enemies lose their grip.",
      "Yet this God who is to be feared is also the God of tender, particular care. &ldquo;Are not five sparrows sold for two pennies? And not one of them is forgotten before God&rdquo; (12:6). Even the smallest, cheapest creature is held in the Father&rsquo;s memory. And the care reaches further still: &ldquo;even the hairs of your head are all numbered&rdquo; (12:7). The God before whom we tremble is the same God who counts our hairs, and so Jesus draws the comforting conclusion: &ldquo;Fear not; you are of more value than many sparrows.&rdquo;",
      "Out of this fearless freedom flows bold confession. &ldquo;Everyone who acknowledges me before men, the Son of Man also will acknowledge before the angels of God&rdquo; (12:8). To own Christ openly now is to be owned by him before the heavenly court; to deny him before men is to be denied before the angels. The disciple&rsquo;s public allegiance to Jesus has eternal consequences, binding the believer&rsquo;s earthly confession to a heavenly acknowledgment.",
      "Jesus adds a solemn warning about blasphemy against the Holy Spirit, which &ldquo;will not be forgiven&rdquo; (12:10) &mdash; the hardened, willful rejection of the Spirit&rsquo;s witness to Christ. Yet he closes with comfort for the persecuted disciple. When brought before synagogues, rulers, and authorities, they are not to be anxious about their defense, &ldquo;for the Holy Spirit will teach you in that very hour what you ought to say&rdquo; (12:12). The Spirit who is not to be blasphemed is the Spirit who stands with the faithful in the moment of trial.",
    ],
  },
  {
    id: "The Rich Fool and Anxiety",
    heading: "The Rich Fool and Anxiety",
    reference: "Luke 12:13&ndash;34",
    paragraphs: [
      "The teaching is interrupted by a voice from the crowd: &ldquo;Teacher, tell my brother to divide the inheritance with me&rdquo; (12:13). The man wants Jesus to be the arbiter of a family dispute over money, but Jesus declines the role: &ldquo;Man, who made me a judge or arbitrator over you?&rdquo; He sees past the legal question to the disease of the heart beneath it, and turns the moment into a warning: &ldquo;Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions&rdquo; (12:15).",
      "To press the point home, Jesus tells the Parable of the Rich Fool (12:16&ndash;21). A certain rich man&rsquo;s land produced plentifully, and he faced the happy problem of where to store his surplus. His solution was entirely self-referential: &ldquo;I will tear down my barns and build larger ones, and there I will store all my grain and my goods.&rdquo; The little parable is crowded with the words &ldquo;I&rdquo; and &ldquo;my&rdquo; &mdash; a man wholly absorbed in his own ease, with no thought of God or neighbor.",
      "He congratulates himself on a future of leisure: &ldquo;Soul, you have ample goods laid up for many years; relax, eat, drink, be merry&rdquo; (12:19). But God&rsquo;s verdict shatters the illusion: &ldquo;Fool! This night your soul is required of you, and the things you have prepared, whose will they be?&rdquo; (12:20). The man has reckoned on years he does not possess. Death exposes the folly of a life built on accumulation, for the hoarded goods cannot follow him, and another will enjoy what he labored to keep.",
      "Jesus draws the lesson: &ldquo;So is the one who lays up treasure for himself and is not rich toward God&rdquo; (12:21). The tragedy of the rich fool is not that he was wealthy but that he was wealthy in the wrong direction &mdash; rich in barns, bankrupt before God. To be &ldquo;rich toward God&rdquo; is to invest one&rsquo;s life in what endures, to hold possessions loosely and the kingdom tightly, storing up treasure where moth and thief cannot reach.",
      "Turning to his disciples, Jesus moves from greed to its anxious cousin, worry. &ldquo;Do not be anxious about your life, what you will eat, nor about your body, what you will put on&rdquo; (12:22). He points them to the natural world: &ldquo;Consider the ravens: they neither sow nor reap&hellip; yet God feeds them&rdquo; (12:24). &ldquo;Consider the lilies, how they grow&hellip; even Solomon in all his glory was not arrayed like one of these&rdquo; (12:27). If God so clothes the grass that is here today and gone tomorrow, how much more will he care for his children?",
      "The remedy for anxiety is not indifference but reordered desire: &ldquo;Seek his kingdom, and these things will be added to you&rdquo; (12:31). &ldquo;Fear not, little flock, for it is your Father&rsquo;s good pleasure to give you the kingdom&rdquo; (12:32). Freed from worry, the disciples are called to open-handed generosity: &ldquo;Sell your possessions, and give to the needy&rdquo; (12:33), providing themselves with treasure in the heavens that does not fail. And Jesus seals it with a searching principle: &ldquo;For where your treasure is, there will your heart be also&rdquo; (12:34).",
    ],
  },
  {
    id: "Watchfulness and Division",
    heading: "Watchfulness and Division",
    reference: "Luke 12:35&ndash;59",
    paragraphs: [
      "From trust Jesus turns to readiness. &ldquo;Stay dressed for action and keep your lamps burning&rdquo; (12:35). The picture is of servants whose master has gone to a wedding feast and may return at any hour of the night. They are to be like men ready to open the door the moment he knocks, with belts fastened and lamps lit. Christian life is to be lived in a posture of constant alertness, leaning forward in expectation of the Master&rsquo;s return rather than dozing in complacency.",
      "Astonishingly, Jesus promises that the watchful servants will be served by their returning Lord. &ldquo;Blessed are those servants whom the master finds awake when he comes&hellip; he will dress himself for service and have them recline at table, and he will come and serve them&rdquo; (12:37). It is a stunning reversal: the Master takes the place of the servant. The reward of faithful watchfulness is to be welcomed and waited upon by the very Lord they have been awaiting, a foretaste of the great banquet of the kingdom.",
      "The certainty of the hour&rsquo;s uncertainty sharpens the call. &ldquo;If the master of the house had known at what hour the thief was coming, he would not have left his house to be broken into&rdquo; (12:39). &ldquo;You also must be ready, for the Son of Man is coming at an hour you do not expect&rdquo; (12:40). Because the timing cannot be calculated, readiness cannot be postponed; the disciple must live each hour as though it might be the hour of the Lord&rsquo;s appearing.",
      "Peter asks whether the parable is for the disciples or for all, and Jesus answers with the figure of the faithful and wise manager (12:42&ndash;48). The trustworthy servant, set over the household and found doing his duty when his master comes, will be blessed and promoted. But the servant who says in his heart, &ldquo;My master is delayed in coming,&rdquo; and begins to beat the other servants and to eat and drink and get drunk, will be cut in pieces and put with the unfaithful. Responsibility is measured by knowledge: &ldquo;Everyone to whom much was given, of him much will be required&rdquo; (12:48).",
      "Then Jesus speaks of the cost and conflict his mission entails. &ldquo;I came to cast fire on the earth, and would that it were already kindled!&rdquo; (12:49). He longs for the purifying, dividing work his coming will accomplish, yet first he speaks of a baptism he must undergo &mdash; &ldquo;and how great is my distress until it is accomplished!&rdquo; (12:50). This is the baptism of his own suffering and death, the cross toward which his whole ministry is bent, and the appointed cost of the fire he will bring.",
      "The gospel, Jesus warns, will not always unite. &ldquo;Do you think that I have come to give peace on earth? No, I tell you, but rather division&rdquo; (12:51). Even households will be split &mdash; father against son, mother against daughter &mdash; as some receive him and others reject him. He closes by rebuking the crowds: they can interpret the clouds and the wind, yet fail to read &ldquo;the present time&rdquo; (12:56). Like a man hurried before a judge, they should settle with their accuser on the way to court (12:58), making peace with God before the day of reckoning arrives.",
    ],
  },
];

const videoItems = [
  { videoId: "Lk12fGm9Xa7", title: "Luke 12 Overview - Fear, Possessions, and Providence" },
  { videoId: "Pw4hBn2Yz8C", title: "The Leaven of the Pharisees and the Fear of God" },
  { videoId: "Rt7vCx5Lq0M", title: "The Parable of the Rich Fool Explained" },
  { videoId: "Zn9kHp3Bv6Q", title: "Watchful Servants and the Master&rsquo;s Return" },
];

export default function Luke12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            The Gospel of Luke, Chapter 12
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A searching discourse on fear, possessions, providence, and readiness &mdash; Jesus warns against the leaven of hypocrisy and the fear of man, tells the Parable of the Rich Fool, calls his &ldquo;little flock&rdquo; to trust the Father who feeds the ravens and clothes the lilies, urges watchfulness for the Master&rsquo;s return, and speaks of the fire and division his gospel brings.
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

        {currentSection && (
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
              Deepen your study of Luke 12 through visual teaching on the fear of God over the fear of man, the warning against covetousness in the Parable of the Rich Fool, the Father&rsquo;s tender providence over ravens and lilies, and the call to watchful readiness for the Master&rsquo;s return.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Where Your Treasure Is</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 12 lays bare the divided heart and calls it home. Fear of man gives way to the fear of God, who numbers the sparrows and our very hairs; the greed of the rich fool gives way to being &ldquo;rich toward God&rdquo;; anxiety gives way to trust in the Father who clothes the lilies; and complacency gives way to lamps kept burning for the Master&rsquo;s return. &ldquo;Where your treasure is, there will your heart be also.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
