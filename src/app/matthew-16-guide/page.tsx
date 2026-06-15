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
  "The Sign and the Leaven",
  "Peter's Confession and the Keys",
  "The Cross and the Cost",
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
    heading: "Overview of Matthew 16",
    reference: "Matthew 16:1&ndash;28",
    paragraphs: [
      "Matthew chapter 16 stands at the hinge of the Gospel. Everything before it has built toward a single question &mdash; who is this Jesus? &mdash; and everything after it flows from the answer given at Caesarea Philippi. The chapter opens with the religious establishment demanding a sign and Jesus warning his disciples against their corrupting influence; it climbs to the great confession of Peter and the promise of the church; and it descends into the shadow of the cross, where Jesus first foretells his death and calls his followers to take up their own crosses and follow him.",
      "The chapter begins with the Pharisees and Sadducees, ordinarily rivals, united in opposition to Jesus and demanding a sign from heaven to test him (16:1&ndash;4). Jesus exposes the irony of men who can read the face of the sky to forecast weather but cannot read the signs of the times unfolding before them. He refuses the spectacle they crave and promises only &ldquo;the sign of Jonah&rdquo; &mdash; a veiled pointer to his death and resurrection &mdash; before leaving them and departing.",
      "On the way across the sea, Jesus warns the disciples, &ldquo;Watch and beware of the leaven of the Pharisees and Sadducees&rdquo; (16:5&ndash;12). They misunderstand, thinking he is rebuking them for forgetting bread. He reminds them of the feedings of the five thousand and the four thousand, where a little became more than enough, and so leads them to see that he is warning not about literal bread but about the corrupting teaching of the religious parties.",
      "Then comes the central scene of the whole Gospel (16:13&ndash;20). At Caesarea Philippi, Jesus asks who people say the Son of Man is, then presses the personal question: &ldquo;But who do you say that I am?&rdquo; Peter answers, &ldquo;You are the Christ, the Son of the living God.&rdquo; Jesus blesses him, declares that this truth was revealed by the Father, and announces that on this rock he will build his church, which the gates of hell shall not overpower, and gives to Peter the keys of the kingdom with the authority to bind and to loose.",
      "From this summit the chapter turns sharply toward the cross (16:21&ndash;23). Jesus begins to show his disciples that he must go to Jerusalem, suffer many things, be killed, and on the third day be raised. Peter, who had just confessed so gloriously, now takes Jesus aside and rebukes him: &ldquo;Far be it from you, Lord! This shall never happen to you.&rdquo; Jesus answers with startling severity, &ldquo;Get behind me, Satan! You are a hindrance to me,&rdquo; exposing how human thinking can resist the very purpose of God.",
      "The chapter closes with the call to discipleship and the promise of judgment and glory (16:24&ndash;28). To follow Jesus is to deny oneself, take up one&rsquo;s cross, and lose one&rsquo;s life in order to find it. What good is it to gain the whole world and forfeit one&rsquo;s soul? The Son of Man will come in the glory of his Father with his angels and repay each according to what he has done. Read as a whole, Matthew 16 binds together confession and cross, glory and suffering, in a single inseparable call.",
    ],
  },
  {
    id: "The Sign and the Leaven",
    heading: "The Sign of Jonah and the Leaven",
    reference: "Matthew 16:1&ndash;12",
    paragraphs: [
      "The chapter opens with an unlikely alliance: the Pharisees and Sadducees come together to test Jesus, asking him to show them a sign from heaven (16:1). These two groups were theological opponents &mdash; the Pharisees devoted to the oral tradition and the resurrection, the Sadducees aristocratic, priestly, and skeptical of both &mdash; yet they unite in their hostility to Jesus. Their demand is not honest inquiry but a trap, a test designed to discredit him rather than to believe.",
      "Jesus answers with a pointed image drawn from their own daily experience: &ldquo;When it is evening, you say, It will be fair weather, for the sky is red. And in the morning, It will be stormy today, for the sky is red and threatening&rdquo; (16:2&ndash;3). They are skilled at reading the face of the sky, forecasting the weather from the color of the clouds, yet they cannot interpret &ldquo;the signs of the times.&rdquo; The healings, the teaching, the very presence of the Messiah among them &mdash; these are signs more than sufficient, and their blindness to them is willful.",
      "&ldquo;An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of Jonah&rdquo; (16:4). Jesus refuses the spectacle they crave. The only sign he will grant is the sign of Jonah, which in Matthew points to his burial and resurrection &mdash; as Jonah was three days in the belly of the fish, so the Son of Man will be three days in the heart of the earth. It is a sign they cannot manufacture and will not be able to deny, yet one that demands faith rather than rewarding unbelief. And with that, he left them and departed.",
      "Crossing to the other side of the sea, the disciples realize they have forgotten to bring bread (16:5). Into this small practical lapse Jesus speaks a warning that they badly misread: &ldquo;Watch and beware of the leaven of the Pharisees and Sadducees&rdquo; (16:6). Leaven, a little yeast that works silently through a whole lump of dough, was a natural image for an influence that spreads invisibly and pervasively. The disciples, however, hear only the word &ldquo;leaven&rdquo; and assume he is scolding them for the missing bread.",
      "Jesus perceives their confusion and gently rebukes their lack of understanding and faith: &ldquo;O you of little faith, why are you discussing among yourselves the fact that you have no bread?&rdquo; (16:8). He points them back to what they have already seen with their own eyes &mdash; the five loaves that fed five thousand with twelve baskets left over, and the seven loaves that fed four thousand with seven baskets remaining (16:9&ndash;10). If he can multiply bread at will, why would he be anxious about a forgotten loaf, and why would they imagine that to be his concern?",
      "&ldquo;How is it that you fail to understand that I did not speak about bread? Beware of the leaven of the Pharisees and Sadducees&rdquo; (16:11). At last the meaning breaks through. &ldquo;Then they understood that he did not tell them to beware of the leaven of bread, but of the teaching of the Pharisees and Sadducees&rdquo; (16:12). The danger he names is doctrinal and spiritual: the corrupting teaching of the religious establishment, which dresses unbelief in piety and substitutes human tradition and political compromise for the living word of God.",
      "The episode rewards careful reflection. The same leaders who demand a sign from heaven are themselves a kind of anti-sign &mdash; a warning of how religion can grow hollow and hostile while remaining outwardly respectable. The disciples, slow to grasp the metaphor, are nonetheless being trained to discern truth from its counterfeits. And the church that Jesus is about to announce will need precisely this discernment, to recognize the quiet, spreading leaven of false teaching before it works its way through the whole loaf.",
    ],
  },
  {
    id: "Peter's Confession and the Keys",
    heading: "Peter's Confession and the Keys of the Kingdom",
    reference: "Matthew 16:13&ndash;20",
    paragraphs: [
      "Jesus leads his disciples to the district of Caesarea Philippi, a region in the far north dotted with pagan shrines and once a center of the worship of the god Pan (16:13). The setting is striking: in a place steeped in idolatry and Roman power, Jesus raises the question of his own identity. &ldquo;Who do people say that the Son of Man is?&rdquo; The disciples report the popular opinions &mdash; John the Baptist, Elijah, Jeremiah, or one of the prophets (16:14). Each guess honors him, yet each falls short of the truth.",
      "Then Jesus presses the question home, making it personal and unavoidable: &ldquo;But who do you say that I am?&rdquo; (16:15). The emphatic &ldquo;you&rdquo; gathers up everything the disciples have witnessed and demands a verdict. It is the question every reader of the Gospel must finally answer, the question on which everything turns. The opinions of the crowd, however respectful, will not do; Jesus calls for confession.",
      "Simon Peter answers for them all, and his words ring out as the high point of the Gospel: &ldquo;You are the Christ, the Son of the living God&rdquo; (16:16). He confesses Jesus as the Messiah, the anointed one Israel had long awaited, and more &mdash; as the Son of the living God, sharing in the very life and being of God himself. In the shadow of dead idols and pagan temples, Peter names the one true and living God&rsquo;s own Son standing before him.",
      "Jesus pronounces a blessing: &ldquo;Blessed are you, Simon Bar-Jonah! For flesh and blood has not revealed this to you, but my Father who is in heaven&rdquo; (16:17). The confession is no human achievement, no conclusion reached by clever reasoning. It is a gift of revelation, granted by the Father. True faith always rests on this: that God opens the eyes to see what flesh and blood could never discover on its own.",
      "Then comes the great and much-debated promise: &ldquo;And I tell you, you are Peter (Petros), and on this rock (petra) I will build my church, and the gates of hell shall not prevail against it&rdquo; (16:18). The wordplay is deliberate &mdash; Petros, a stone, and petra, the bedrock. Interpreters have long differed over what the rock is: Peter himself in his role as confessing apostle, the confession he has just made, or Christ as the foundation to whom that confession points. What is unmistakable is that Jesus, for the first time, speaks of building his church &mdash; a community that even the gates of hell, the very powers of death, will never overpower.",
      "&ldquo;I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven&rdquo; (16:19). Keys signify authority to admit and to exclude, to open the door of the kingdom through the proclamation of the gospel. The language of binding and loosing was a rabbinic idiom for declaring what is forbidden and what is permitted, for authoritative teaching and discipline. To Peter, and later to the whole church, is entrusted the stewardship of the kingdom&rsquo;s message and its boundaries.",
      "This scene is the pivotal turning point of Matthew&rsquo;s Gospel. From here the trajectory bends toward Jerusalem and the cross. Yet Jesus charges the disciples to tell no one that he is the Christ (16:20), for the title was loaded with misunderstanding and false expectation. The crowds longed for a conquering king; they were not ready to learn that the Christ must first suffer and die. The confession is true, but its full meaning can be understood only in the light of the cross that Jesus is about to reveal.",
    ],
  },
  {
    id: "The Cross and the Cost",
    heading: "The Cross and the Cost of Discipleship",
    reference: "Matthew 16:21&ndash;28",
    paragraphs: [
      "&ldquo;From that time Jesus began to show his disciples that he must go to Jerusalem and suffer many things from the elders and chief priests and scribes, and be killed, and on the third day be raised&rdquo; (16:21). The phrase &ldquo;from that time&rdquo; marks a decisive shift. Now that the disciples have confessed him as the Christ, Jesus begins to unfold what kind of Christ he is. The word &ldquo;must&rdquo; is heavy with divine necessity: this is no tragic accident but the appointed path of redemption, set within the purpose of God.",
      "Peter, fresh from his glorious confession, cannot bear the words. He takes Jesus aside and begins to rebuke him: &ldquo;Far be it from you, Lord! This shall never happen to you&rdquo; (16:22). His protest springs from love and from a deep, mistaken certainty about what the Messiah ought to be. A suffering, dying Christ contradicted everything he expected. Yet in trying to protect Jesus from the cross, Peter sets himself against the very heart of God&rsquo;s plan.",
      "Jesus turns and answers with the sharpest rebuke he ever gave a disciple: &ldquo;Get behind me, Satan! You are a hindrance to me. For you are not setting your mind on the things of God, but on the things of man&rdquo; (16:23). The same Peter who moments before spoke by the Father&rsquo;s revelation now speaks, unwittingly, the tempter&rsquo;s words &mdash; offering a crown without a cross, glory without suffering. The lesson is severe: even sincere human reasoning, when it resists the way of the cross, becomes a stumbling block and an instrument of the enemy.",
      "Then Jesus turns from his own cross to the cross of every follower: &ldquo;If anyone would come after me, let him deny himself and take up his cross and follow me&rdquo; (16:24). To deny oneself is to renounce the rule of self; to take up the cross is to embrace a death to one&rsquo;s own claims and comforts; to follow is to walk the very road Jesus walks. Discipleship is not an addition to an otherwise self-directed life but the surrender of that life into his hands.",
      "He presses the paradox at the center of the gospel: &ldquo;For whoever would save his life will lose it, but whoever loses his life for my sake will find it&rdquo; (16:25). The instinct to grasp, hoard, and preserve one&rsquo;s life leads to its loss; the willingness to spend and surrender it for Christ&rsquo;s sake leads to its truest finding. The economy of the kingdom inverts the economy of the world, and the way down is the way up.",
      "Two searching questions drive the point home: &ldquo;For what will it profit a man if he gains the whole world and forfeits his soul? Or what shall a man give in return for his soul?&rdquo; (16:26). The soul is of infinite worth, and the whole world is a poor exchange for it. A man may win every prize the world can offer and still come away bankrupt before God. There is no commodity, no achievement, no pleasure that can buy back a soul once it is forfeited.",
      "The chapter ends with a glimpse of judgment and glory: &ldquo;For the Son of Man is going to come with his angels in the glory of his Father, and then he will repay each person according to what he has done&rdquo; (16:27). The cross is not the end of the story. The one who must suffer will return in glory to judge, and every life lived for self or surrendered for him will be weighed. Jesus closes with a promise that &ldquo;there are some standing here who will not taste death until they see the Son of Man coming in his kingdom&rdquo; (16:28) &mdash; a foretaste of the kingdom&rsquo;s power soon to be glimpsed on the mount of transfiguration that opens the next chapter.",
    ],
  },
];

const videoItems = [
  { videoId: "Wk4mZp7Qr2T", title: "BibleProject - Matthew 16 Overview and the Confession" },
  { videoId: "Br9nXt5Vd8L", title: "The Sign of Jonah and the Leaven of the Pharisees" },
  { videoId: "Cp2dYx6Hs0M", title: "Who Do You Say I Am - Peter and the Keys of the Kingdom" },
  { videoId: "Dz5bRm8Tw7K", title: "Get Behind Me Satan - The Cross and the Cost of Following" },
];

export default function Matthew16GuidePage() {
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
            The Gospel of Matthew, Chapter 16
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Pharisees and Sadducees demand a sign and Jesus warns against their leaven; at Caesarea Philippi Peter confesses Jesus as the Christ, the Son of the living God, and receives the keys of the kingdom; and Jesus foretells his death and calls his followers to take up the cross and follow him &mdash; the pivotal turning point of the Gospel.
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
              Deepen your study of Matthew 16 through visual teaching on the sign of Jonah and the leaven of the Pharisees and Sadducees, the great confession at Caesarea Philippi and the keys of the kingdom, and the call to take up the cross and follow the suffering and risen Christ.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Confession and Cross</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 16 binds together the two truths that the whole Gospel exists to hold: Jesus is the Christ, the Son of the living God, and this Christ must go to the cross. Peter confesses the first gloriously and resists the second fiercely, and in his stumbling we see our own. To know who Jesus is and to follow where he goes are finally one and the same call &mdash; to deny ourselves, take up our cross, and find our life by losing it for his sake.
          </p>
        </div>
      </main>
    </div>
  );
}
