"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Parable of the Sower",
  "Authority Over Storm and Demons",
  "Faith That Heals",
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
    heading: "Overview of Luke 8",
    reference: "Luke 8:1&ndash;56",
    paragraphs: [
      "Luke 8 is one of the great action chapters of the Third Gospel, gathering together a remarkable sequence of teaching and miracle that displays the authority of Jesus over every realm &mdash; the human heart, the natural world, the spiritual powers of darkness, chronic disease, and even death itself. The chapter opens not with a sermon but with a portrait of the travelling community that surrounded Jesus, and it closes with a child raised from her deathbed. Throughout, Luke keeps returning to a single insistent theme: what it means to truly hear the word of God and respond to it in faith.",
      "The chapter begins with a detail unique to Luke. As Jesus went through the towns and villages proclaiming the good news of the kingdom of God, the Twelve were with him &mdash; &ldquo;and also some women who had been cured of evil spirits and diseases&rdquo; (8:2). Mary called Magdalene, Joanna the wife of Chuza, Susanna, and many others supported Jesus and his disciples out of their own means. In a world that gave little public honor to women, Luke deliberately names them as faithful disciples and patrons of the mission. The kingdom of God was being carried forward by a community of grateful, transformed people.",
      "At the heart of the chapter stands the Parable of the Sower (8:4&ndash;15), the one parable that Jesus himself stops to explain. The seed is the word of God, and the four soils &mdash; the path, the rocky ground, the thorns, and the good soil &mdash; represent four different responses of the human heart. To the riddle of why he teaches in parables, Jesus answers by quoting Isaiah: &ldquo;though seeing, they may not see&rdquo; (8:10). The parable is immediately followed by the saying about the lamp placed on a stand, with its sober warning that &ldquo;whoever has will be given more&rdquo; (8:18) &mdash; how we listen matters eternally.",
      "Luke then sets two short scenes that redefine the family of God. When Jesus is told that his mother and brothers are standing outside wanting to see him, he responds, &ldquo;My mother and brothers are those who hear God&rsquo;s word and put it into practice&rdquo; (8:21). The true kinship of the kingdom is not by blood but by obedient hearing &mdash; the very response the parable of the sower has just described. To belong to Jesus&rsquo; family is to be the good soil.",
      "From teaching, Luke turns to a string of mighty acts. Jesus calms a violent storm on the lake with a word, leaving the terrified disciples to ask, &ldquo;Who is this? He commands even the winds and the water, and they obey him&rdquo; (8:25). On the far shore he frees a man tormented by a legion of demons, restoring him to his right mind. And finally, on the way to raise the dying daughter of Jairus, a synagogue ruler, he heals a woman who had suffered from bleeding for twelve years. Each miracle answers the disciples&rsquo; question and reveals the identity and compassion of the One who has come.",
      "Reading Luke 8 as a whole, we see the evangelist&rsquo;s careful design. The teaching about the word and the soils is not separated from the miracles but interpreted by them: the storm tests the disciples&rsquo; faith, the demoniac shows the word bearing fruit in a Gentile region, and the intertwined healings of Jairus&rsquo; daughter and the bleeding woman dramatize what it means to &ldquo;just believe.&rdquo; The chapter is, in effect, an extended meditation on faith &mdash; faith that hears, faith that endures the storm, faith that reaches out to touch the hem of his cloak, and faith that holds on in the face of death.",
    ],
  },
  {
    id: "The Parable of the Sower",
    heading: "The Parable of the Sower",
    reference: "Luke 8:4&ndash;18",
    paragraphs: [
      "With a great crowd gathering and people coming to him from town after town, Jesus tells the parable of the sower. A farmer went out to sow his seed, and as he scattered it, some fell along the path and was trampled and eaten by birds. Some fell on rocky ground, and though it sprang up it withered for lack of moisture. Some fell among thorns, which grew up and choked the plants. And some fell on good soil, and it came up and yielded a crop a hundred times more than was sown. Then Jesus called out, &ldquo;Whoever has ears to hear, let them hear&rdquo; (8:8).",
      "When the disciples ask what the parable means, Jesus first answers a deeper question about the purpose of parables themselves. &ldquo;The knowledge of the secrets of the kingdom of God has been given to you, but to others I speak in parables, so that, &lsquo;though seeing, they may not see; though hearing, they may not understand&rsquo;&rdquo; (8:10). The words echo Isaiah 6:9, spoken when the prophet was sent to a people whose hearts had grown calloused. Parables both reveal and conceal: they open the kingdom to the humble and hungry, while leaving the proud and indifferent in the darkness they have chosen.",
      "Jesus then gives the interpretation. The seed is the word of God. The seed on the path represents those who hear, but then the devil comes and takes away the word from their hearts, &ldquo;so that they may not believe and be saved&rdquo; (8:12). The word never penetrates; it is snatched away before it can take root. This is the hearer for whom the gospel is merely something heard and immediately forgotten, never allowed to grip the conscience or the will.",
      "The seed on the rocky ground stands for those who receive the word with joy when they hear it, but who have no root. &ldquo;They believe for a while, but in the time of testing they fall away&rdquo; (8:13). Theirs is an emotional, shallow response that flourishes in fair weather but cannot survive trial or temptation. The thorny ground represents those who hear, but as they go on their way they are choked by life&rsquo;s worries, riches, and pleasures, and they do not mature. The competing affections of the heart slowly strangle the word until it bears no fruit.",
      "The good soil, by contrast, stands for &ldquo;those with a noble and good heart, who hear the word, retain it, and by persevering produce a crop&rdquo; (8:15). Luke&rsquo;s version is especially rich here: genuine discipleship is marked by hearing, holding fast, and patient endurance. Fruitfulness is not instant; it is the slow harvest of a life that keeps the word and refuses to let go. The difference between the soils is not the seed &mdash; the word is the same for all &mdash; but the condition of the heart that receives it.",
      "Jesus immediately reinforces the lesson with the saying about the lamp. No one lights a lamp and hides it under a jar or under a bed; instead they put it on a stand, so that those who come in may see the light. &ldquo;For there is nothing hidden that will not be disclosed, and nothing concealed that will not be known or brought out into the open&rdquo; (8:17). The light of the word is meant to shine, not to be smothered; what is received must be lived out and made visible.",
      "The chapter then delivers its pointed application: &ldquo;Therefore consider carefully how you listen&rdquo; (8:18). Hearing is not a neutral act. &ldquo;Whoever has will be given more; whoever does not have, even what they think they have will be taken from them.&rdquo; The person who genuinely receives and acts on the word grows richer in understanding and grace, while the one who merely hears without responding will lose even the little they imagined they possessed. How we listen is, in Luke&rsquo;s telling, a matter of spiritual life and death.",
    ],
  },
  {
    id: "Authority Over Storm and Demons",
    heading: "Authority Over Storm and Demons",
    reference: "Luke 8:22&ndash;39",
    paragraphs: [
      "One day Jesus said to his disciples, &ldquo;Let us go over to the other side of the lake,&rdquo; and they set out. As they sailed, Jesus fell asleep, and a furious squall came down on the lake, so that the boat was being swamped and they were in great danger. The disciples woke him, crying, &ldquo;Master, Master, we&rsquo;re going to drown!&rdquo; He got up and rebuked the wind and the raging waters; the storm subsided, and all was calm (8:24). The same voice that spoke creation into being now speaks the chaos back into stillness.",
      "Then Jesus turned to his frightened followers with a searching question: &ldquo;Where is your faith?&rdquo; (8:25). The rebuke is gentle but pointed &mdash; they had the Lord of wind and wave in the boat with them, yet they responded to the storm with panic rather than trust. In fear and amazement they asked one another, &ldquo;Who is this? He commands even the winds and the water, and they obey him.&rdquo; It is the central question of the chapter, and indeed of the Gospel: the disciples are being led, miracle by miracle, to discover the true identity of the Man asleep in their boat.",
      "They sailed on to the region of the Gerasenes, Gentile territory on the eastern shore. As Jesus stepped ashore, he was met by a man from the town who was possessed by demons. For a long time this man had worn no clothes and lived not in a house but in the tombs. Driven by the demons into solitary places, he had often been chained hand and foot and kept under guard, but he would break his chains and be driven into the wilderness. He was a portrait of utter human ruin under the power of darkness.",
      "When the man saw Jesus, he cried out and fell at his feet, shouting, &ldquo;What do you want with me, Jesus, Son of the Most High God? I beg you, don&rsquo;t torture me!&rdquo; (8:28). Jesus asked his name, and he replied, &ldquo;Legion,&rdquo; because many demons had gone into him &mdash; a legion being a Roman army unit of thousands. The demons begged not to be sent into the Abyss but instead into a large herd of pigs feeding on the hillside. Jesus gave them permission, and when they entered the pigs, the whole herd rushed down the steep bank into the lake and was drowned.",
      "Those tending the pigs ran off and reported it in the town and countryside, and the people came out to see for themselves. They found the man from whom the demons had gone out, sitting at Jesus&rsquo; feet, &ldquo;dressed and in his right mind&rdquo; (8:35), and they were afraid. The contrast could not be sharper: the wild man of the tombs is now clothed, calm, and seated as a disciple. Yet instead of rejoicing, the people were overcome with fear and asked Jesus to leave them, for they were gripped with great fear. The presence of such power unsettled them more than the demon-possessed man ever had.",
      "As Jesus was getting into the boat, the man who had been delivered begged to go with him. But Jesus sent him away, saying, &ldquo;Return home and tell how much God has done for you&rdquo; (8:39). So the man went and proclaimed throughout the whole town how much Jesus had done for him. In a striking reversal of the secrecy Jesus often urged in Jewish regions, here in Gentile territory the healed man becomes the first missionary to his own people &mdash; a living sermon, sent home to declare the mercy of God to those who had been too afraid to receive it.",
    ],
  },
  {
    id: "Faith That Heals",
    heading: "Faith That Heals: Jairus and the Bleeding Woman",
    reference: "Luke 8:40&ndash;56",
    paragraphs: [
      "When Jesus returned across the lake, a crowd welcomed him, for they were all expecting him. Then a man named Jairus, a ruler of the synagogue, came and fell at Jesus&rsquo; feet, pleading with him to come to his house because his only daughter, a girl of about twelve, was dying. So Jesus set out, pressed in on every side by the crowd. Luke now weaves two stories together &mdash; the so-called &ldquo;sandwich&rdquo; structure &mdash; interrupting the urgent journey to Jairus&rsquo; home with the account of another desperate sufferer, so that the two miracles interpret one another.",
      "In that crowd was a woman who had been subject to bleeding for twelve years &mdash; the very span of Jairus&rsquo; daughter&rsquo;s life. She had spent all she had on physicians, and no one could heal her. Coming up behind Jesus, she touched the edge of his cloak, and immediately her bleeding stopped. Under the law her condition had made her ritually unclean for twelve long years, cutting her off from worship and ordinary human contact; her secret approach reflects both her faith and her shame.",
      "Jesus asked, &ldquo;Who touched me?&rdquo; When everyone denied it, Peter protested that the crowds were pressing all around him. But Jesus said, &ldquo;Someone touched me; I know that power has gone out from me&rdquo; (8:46). The woman, seeing she could not go unnoticed, came trembling and fell at his feet, and in the presence of all the people told why she had touched him and how she had been instantly healed. Jesus did not let her slip away anonymously; he drew her out so that her private healing could become a public confession of faith. &ldquo;Daughter, your faith has healed you. Go in peace&rdquo; (8:48). With one word he names this outcast woman &ldquo;daughter&rdquo; and restores her to the community.",
      "While Jesus was still speaking, someone came from the house of Jairus to say, &ldquo;Your daughter is dead. Don&rsquo;t bother the teacher anymore&rdquo; (8:49). The delay caused by the bleeding woman seems to have cost Jairus everything. But Jesus heard it and said to the grieving father, &ldquo;Don&rsquo;t be afraid; just believe, and she will be healed&rdquo; (8:50). The same faith that healed the woman is now urged upon Jairus at the very edge of the grave. In Luke&rsquo;s narrative the two stories share a single message: do not be afraid; only believe.",
      "When Jesus arrived at the house, he allowed only Peter, John, and James, along with the child&rsquo;s father and mother, to go in with him. Everyone was weeping and mourning for her. &ldquo;Stop wailing,&rdquo; Jesus said. &ldquo;She is not dead but asleep&rdquo; (8:52). They laughed at him, knowing she was dead. But he took her by the hand and said, &ldquo;My child, get up!&rdquo; Her spirit returned, and at once she stood up, and Jesus told them to give her something to eat. In Mark&rsquo;s parallel account the words are preserved in Aramaic, &ldquo;Talitha koum&rdquo; &mdash; &ldquo;Little girl, I say to you, get up&rdquo; &mdash; spoken as tenderly as a parent rousing a sleeping child in the morning.",
      "Both halves of this double miracle turn on faith in the face of the impossible. The woman&rsquo;s twelve years of chronic, hopeless suffering and the sudden death of Jairus&rsquo; only child press the same question the storm had raised: where is your faith? To the woman, faith meant reaching out to touch the hem of his cloak in trembling hope; to Jairus, it meant continuing to believe even after the messengers said it was too late. In both, Jesus shows himself master of what no human power can undo &mdash; the slow wasting of disease and the final enemy of death &mdash; and calls his people to a faith that simply trusts and does not let go.",
    ],
  },
];

const videoItems = [
  { videoId: "Lk8OvwQ7m2A", title: "BibleProject - Gospel of Luke Overview" },
  { videoId: "Sw3rPa1Kx9D", title: "The Parable of the Sower Explained - Luke 8" },
  { videoId: "Jr5tNd8Lq0W", title: "Jesus Calms the Storm and Heals the Demoniac" },
  { videoId: "Mz2bHc6Vp4Y", title: "Jairus' Daughter and the Bleeding Woman - Faith and Healing" },
];

export default function Luke8GuidePage() {
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
            The Gospel of Luke, Chapter 8
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A chapter that reveals the authority of Jesus over the human heart, the storm, the powers of darkness, chronic disease, and death &mdash; the Parable of the Sower, the calming of the lake, the deliverance of the Gerasene demoniac, and the intertwined healings of Jairus&rsquo; daughter and the bleeding woman.
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
              Deepen your study of Luke 8 through visual teaching on the Parable of the Sower, the calming of the storm, the deliverance of the Gerasene demoniac, and the healings of Jairus&rsquo; daughter and the bleeding woman.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Consider Carefully How You Listen</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 8 holds together teaching and miracle to answer one question: who is this, and how will we respond to him? From the soils of the heart to the stilled storm, from Legion freed to a dead child raised, the chapter calls us to be good soil &mdash; to hear the word, retain it, and by persevering produce a crop, trusting the One who commands even the winds and the water.
          </p>
        </div>
      </main>
    </div>
  );
}
