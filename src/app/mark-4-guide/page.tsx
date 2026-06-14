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
  "The Parable of the Sower",
  "The Four Soils Explained",
  "Seeds and the Kingdom",
  "Peace Be Still",
  "Application",
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
    heading: "Overview of Mark 4",
    reference: "Mark 4:1&ndash;41",
    paragraphs: [
      "Mark 4 stands as one of the most theologically concentrated chapters in the entire Gospel of Mark. It opens beside the Sea of Galilee, where the crowds pressing around Jesus have grown so enormous that he steps into a boat and teaches from the water, the whole multitude ranged on the shore. What follows is a sustained exposition of the kingdom of God conveyed entirely through parable &mdash; a form of teaching that Jesus explicitly describes as both revealing and concealing, given in mercy to those with ears to hear and serving as judgment on those who have eyes but do not see.",
      "The chapter opens with one of the most carefully expounded parables in all of the Gospels: the Parable of the Sower. Unlike most of Jesus&rsquo; parables, this one receives a full private explanation when the disciples ask him what it means. The explanation reveals that the parable is not fundamentally about farming at all; it is about the reception of the word of the kingdom in the human heart, and the four different soils represent four different responses to that word &mdash; from the hard-packed path where Satan immediately snatches the seed, to the good soil that bears fruit thirty, sixty, and a hundredfold.",
      "Three shorter parables follow. The lamp under a basket asserts that what is now hidden will be revealed; nothing in Jesus&rsquo; ministry is concealed as a permanent secret but only as a temporary veil until the right moment of disclosure. The seed growing secretly describes the mysterious, God-directed growth of the kingdom: a farmer scatters seed and then sleeps and rises night and day while the earth produces of itself, and he does not know how. The mustard seed parable celebrates the extraordinary disproportion between tiny beginnings and vast outcome &mdash; the smallest of seeds becoming the greatest of shrubs.",
      "The chapter closes with a scene that shifts from teaching to demonstration. Jesus and his disciples cross the sea, and a fierce windstorm descends without warning. The disciples, some of them experienced fishermen, are terrified; they wake Jesus, who rebukes the wind and commands the sea with two words: &ldquo;Peace! Be still!&rdquo; (4:39). The storm ceases immediately and completely, and the disciples are left with a question that Mark intends his reader to answer: &ldquo;Who then is this, that even the wind and the sea obey him?&rdquo; (4:41). The parables have described the kingdom from within; the stilling of the storm reveals the King from without.",
      "Throughout the chapter Mark emphasizes the theme of hiddenness and revelation. The parable form itself enacts this theme &mdash; it is a kind of seed that either germinates or does not depending on the soil of the heart. The disciples are given &ldquo;the mystery of the kingdom of God&rdquo; (4:11); the crowds hear only in parables. But the mystery is not meant to remain hidden forever. Mark 4 is simultaneously a call to hear carefully and a promise that what is now veiled &mdash; the identity of Jesus, the nature of the kingdom, the outcome of God&rsquo;s purposes &mdash; will be made plain.",
    ],
  },
  {
    id: "The Parable of the Sower",
    heading: "The Parable of the Sower",
    reference: "Mark 4:1&ndash;9",
    paragraphs: [
      "The setting of the Parable of the Sower is deliberately described in Mark. Jesus sits in a boat on the water while a great crowd stands on the shore of the lake &mdash; an arrangement that gives his voice a natural amplification and creates a visual separation between the teacher and the taught. The scene is itself a kind of parable: the word goes out from one center to a wide and mixed reception, landing differently on each hearer. From the boat Jesus begins: &ldquo;Listen!&rdquo; &mdash; a word that functions as the interpretive key to everything that follows in the chapter.",
      "A sower goes out to sow, Jesus says, and what follows is a compressed account of the full range of outcomes. Some seed falls on the path, where the soil is hard-packed by foot traffic, and before it can take root the birds come and devour it. Some falls on rocky ground, where there is little soil over stone; it springs up quickly in the thin earth but when the sun rises it is scorched, and because it has no root it withers. Some falls among thorns, which grow up alongside it and choke it, and it yields no grain. And some &mdash; at last &mdash; falls on good soil and produces a harvest of extraordinary scale: thirtyfold, sixtyfold, a hundredfold.",
      "The parable is carefully constructed around the contrast between the three failures and the one great success, and within that structure around the amplifying series of the harvest: thirty, sixty, a hundred. A harvest of thirty times the seed sown would have been very good in the ancient Near East; sixty would have been remarkable; a hundred would have been almost unbelievable. The exaggeration is deliberate and signals that the fruit of the good soil is not merely adequate but overwhelming, more than compensating for all that was lost on the path, the rock, and among the thorns.",
      "Jesus closes the parable with the most characteristic of all his sayings: &ldquo;He who has ears to hear, let him hear&rdquo; (4:9). The call is not to physical hearing &mdash; the crowd has already heard the words &mdash; but to the kind of interior receptive hearing that allows a parable to penetrate and bear fruit in the life. The very structure of the parable enacts what it describes: those who hear it with good-soil hearts will understand and respond; those whose hearts are hard-packed or shallow or thorny will hear the words without fruit.",
      "The parable is preceded in Mark by the controversy of chapter 3, where Jesus&rsquo; own family thinks he is out of his mind and the scribes from Jerusalem accuse him of casting out demons by Beelzebul. That context is not incidental: the sower is already at work, and the various soils are not a future possibility but a present reality. Some of Jesus&rsquo; own contemporaries &mdash; including religious professionals and family members &mdash; are demonstrating in real time what the path-soil, the rocky soil, and the thorny soil look like. The parable is thus both a description of what is already happening and a warning about what is to come.",
      "The disciples, after the crowd disperses, ask Jesus about the parables. His response in verses 10&ndash;12 is among the most theologically dense passages in Mark. He tells them that the mystery of the kingdom has been given to them, but for those outside, everything is in parables, so that &ldquo;seeing they may see and not perceive, and hearing they may hear and not understand, lest they should turn and be forgiven&rdquo; (4:12, quoting Isaiah 6:9&ndash;10). This is not a statement of indifference to the outsider&rsquo;s salvation; it is a description of the judicial consequence of the prior rejection of the word that has already been proclaimed.",
    ],
  },
  {
    id: "The Four Soils Explained",
    heading: "The Four Soils Explained",
    reference: "Mark 4:13&ndash;20",
    paragraphs: [
      "Jesus&rsquo; explanation of the Parable of the Sower to his disciples is introduced with a mild rebuke: &ldquo;Do you not understand this parable? How then will you understand all the parables?&rdquo; (4:13). The implication is that the Parable of the Sower is in some sense the foundational parable &mdash; the parable about how parables work, or more precisely, about how the word of God works in the human heart. If you do not understand this one, you cannot understand the others, because all of them rest on the same basic question: what kind of soil is your heart?",
      "The sower sows the word, Jesus explains &mdash; and here the shift from agricultural to spiritual registers is made explicit. The seed is the word. The various soils are the various conditions of the human heart in its reception of that word. The first soil, the path, represents those who hear the word but immediately have it taken away by Satan. The hardness is the defining characteristic: the word cannot penetrate, and the enemy can walk along the surface of the heart and take what lies there. There is no struggle, no gradual erosion of faith; the word is simply never received.",
      "The second soil, the rocky ground, represents those who hear the word and immediately receive it with joy. This is not a picture of hypocrisy but of genuine initial enthusiasm &mdash; the joy is real. But it is a joy without root: when tribulation or persecution arises on account of the word, they immediately stumble. The shallow soil over rock cannot sustain the root system that a plant needs to withstand heat. The application is pointed: a response to the gospel that is not prepared to cost anything is not yet genuine faith; enthusiasm without endurance is rocky ground.",
      "The third soil, the thorns, represents those in whom the word is sown but then choked out by the cares of the world, the deceitfulness of riches, and the desires for other things. This is perhaps the most contemporary of the three failed soils. Unlike the path (where the word never penetrates) or the rocky ground (where it never takes deep root), the thorny soil represents a heart in which the word is genuinely present alongside competing loves &mdash; and the competing loves ultimately win. The word is not violently rejected; it is slowly crowded out by the increasing density of other claims on the heart&rsquo;s allegiance.",
      "The fourth soil, the good ground, receives the word, accepts it, and bears fruit &mdash; thirtyfold, sixtyfold, a hundredfold. The description is deliberate in its brevity: there is no dramatic backstory, no list of qualities that make the good soil superior. The good-soil hearer simply hears the word, accepts it, and bears fruit. The accent is entirely on what the word does in a receptive heart rather than on any intrinsic merit of the hearer. The good soil is good because it does not prevent the word from doing what the word is designed to do.",
      "The explanation reveals that the parable is not primarily about agricultural statistics or the success rate of evangelism. It is a diagnostic tool &mdash; an invitation to self-examination. Which soil am I? Is the word of the kingdom able to penetrate, take root, and grow in the conditions of my actual heart and life? Are there hardened patches, shallow spots, or competing thorns that are reducing the word&rsquo;s fruitfulness in me? The parable does not answer these questions for the hearer; it creates the space in which the hearer must answer them honestly.",
    ],
  },
  {
    id: "Seeds and the Kingdom",
    heading: "Seeds and the Kingdom",
    reference: "Mark 4:21&ndash;32",
    paragraphs: [
      "Following the explanation of the Sower, Jesus gives three shorter kingdom sayings and parables that deepen the chapter&rsquo;s exploration of hiddenness, growth, and the nature of God&rsquo;s reign. The first, the saying about the lamp under a basket (4:21&ndash;25), addresses the apparent concealment of the kingdom in Jesus&rsquo; parabolic teaching. Is a lamp brought in to be put under a basket or under a bed? No &mdash; it is put on a stand so that all in the house may see. &ldquo;For nothing is hidden except to be made manifest; nor is anything secret except to come to light&rdquo; (4:22).",
      "The lamp saying reframes what might seem like the darkness of the parabolic concealment. The parables are not a permanent veil; they are a strategic delay. What is now hidden in seed form &mdash; the mystery of the kingdom, the identity of Jesus, the meaning of his death and resurrection &mdash; is hidden precisely in order to be revealed. The concealment is temporary and purposeful, not arbitrary. The appropriate response is not frustration at the difficulty of the parables but a heightened attentiveness, since those who pay attention to what they have been given will receive more, and those who do not will lose even what they have (4:24&ndash;25).",
      "The second parable, the seed growing secretly (4:26&ndash;29), is unique to Mark and has no parallel in Matthew or Luke. A man scatters seed on the ground, then goes about his life &mdash; sleeping, rising, night and day. The earth produces of itself, first the blade, then the ear, then the full grain in the ear. &ldquo;He does not know how&rdquo; (4:27). When the grain is ripe he puts in the sickle, because the harvest has come. The point is not the farmer&rsquo;s inactivity &mdash; he did sow, and he does harvest &mdash; but the mysterious, inherent power of the seed itself to grow without human management or oversight.",
      "This parable is a corrective to both impatience and anxiety about the progress of the kingdom. The disciples of Jesus will not be able to make the kingdom grow by their own efforts; they scatter the word and then watch, trusting that the seed has in itself the life-force of God. The growth is real and it is coming, but it follows its own timeline and operates by its own internal logic. The farmer does not need to understand the biology of grain in order for the grain to produce. The church does not need to comprehend all the workings of grace in order for grace to do its transforming work.",
      "The third parable, the mustard seed (4:30&ndash;32), focuses on the disproportion between beginning and end. The kingdom of God, Jesus says, is like a mustard seed &mdash; the smallest of all seeds, and yet when sown it grows up and becomes greater than all the garden plants, putting out large branches so that the birds of the air can nest in its shade. The contrast is the whole point: tiny origins, vast result. In the context of Jesus&rsquo; ministry, surrounded by opposition from religious authorities, abandoned by crowds who do not understand, teaching in parables to a small group of confused disciples &mdash; the mustard seed parable is a declaration of eschatological confidence. This small, apparently insignificant movement is the kingdom of God, and its ending is already determined.",
      "The image of birds nesting in the shade of the great shrub echoes prophetic imagery from Ezekiel (17:23, 31:6) and Daniel (4:12) where a great tree in whose branches nations shelter is a symbol of a universal empire providing refuge and sustenance to all peoples. Jesus quietly applies this imagery to the kingdom he is inaugurating &mdash; a kingdom that begins as mustard seed and ends as a shelter for all nations. The three parables together &mdash; light revealed, seed growing secretly, mustard seed becoming great &mdash; form a triptych of kingdom confidence that counters every appearance of smallness or failure in the present moment.",
    ],
  },
  {
    id: "Peace Be Still",
    heading: "Peace Be Still &mdash; The Calming of the Storm",
    reference: "Mark 4:35&ndash;41",
    paragraphs: [
      "The final scene of Mark 4 is one of the most dramatic in the Gospel and functions as a climactic demonstration of what the chapter&rsquo;s parables have been pointing toward. After teaching all day in parables, Jesus says to his disciples: &ldquo;Let us go across to the other side&rdquo; (4:35). They take him in the boat just as he was, and other boats are with them. A great windstorm arises. The storm is described in terms that leave no doubt about its severity: the waves are breaking into the boat, and the boat is filling with water. This is not a squall that experienced fishermen could manage; this is a storm that might sink them.",
      "Jesus, meanwhile, is in the stern of the boat, asleep on a cushion. This detail &mdash; the cushion, the specific location in the stern &mdash; has the texture of eyewitness memory, and the contrast between the sleeping Jesus and the panicking disciples is stark. The disciples wake him and say: &ldquo;Teacher, do you not care that we are perishing?&rdquo; (4:38). The question is not merely practical; it is theological. After all the teaching about the kingdom, after the call to trust, after the parables about the mysterious power of the word &mdash; the disciples&rsquo; first response to a life-threatening storm is the accusation that Jesus does not care.",
      "Jesus wakes and rebukes the wind, and says to the sea: &ldquo;Peace! Be still!&rdquo; (4:39). The word translated &ldquo;be still&rdquo; is the Greek word phimoo &mdash; literally, &ldquo;be muzzled&rdquo; &mdash; the same word Jesus uses to silence unclean spirits (1:25). The wind and sea are addressed not as impersonal forces of nature but as powers to be commanded and silenced. The storm obeys immediately and completely: &ldquo;the wind ceased, and there was a great calm.&rdquo; The supernatural speed and completeness of the calming marks this as something entirely beyond natural meteorology.",
      "Jesus then turns to his disciples with a double question: &ldquo;Why are you so afraid? Have you still no faith?&rdquo; (4:40). The questions are not primarily a rebuke but a diagnostic probe into the relationship between fear and faith. The disciples have heard the parables of the Sower, the lamp, the growing seed, the mustard seed. They have been given &ldquo;the mystery of the kingdom of God.&rdquo; And yet when the storm comes, they respond with fear and with the accusation that Jesus does not care. The gap between what they have heard and what they demonstrate is the gap between hearing the word and receiving it in good soil.",
      "The disciples&rsquo; response is equally significant: &ldquo;they were filled with great fear and said to one another, &lsquo;Who then is this, that even the wind and the sea obey him?&rsquo;&rdquo; (4:41). They have exchanged one fear for another &mdash; the fear of the storm for the fear of the one who commands the storm. This second fear is the beginning of wisdom. The question they ask is one that Mark&rsquo;s entire Gospel is designed to answer, and at this stage in the narrative neither they nor the reader is yet prepared for the full answer. But the question has been asked at the right level: not &ldquo;how did he do that?&rdquo; but &ldquo;who is he?&rdquo;",
      "The calming of the storm echoes the Old Testament&rsquo;s depiction of God as the one who rules the sea and stills its waves (Psalm 89:9, 107:23&ndash;30). In the Hebrew tradition, the sea was the symbol of chaos and the power of the uncreated; to command the sea was to exercise the prerogative of the Creator. When Jesus says &ldquo;Peace! Be still!&rdquo; to the waves of Galilee, he is performing an act that the disciples&rsquo; Scriptures reserve for God alone. The chapter that began with Jesus teaching from a boat on the sea ends with him demonstrating, on the same sea, a sovereignty that belongs to the Lord of creation &mdash; and leaving his disciples with a question they will spend the rest of the Gospel learning to answer.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Mark 4 Today",
    reference: "Mark 4 &mdash; For the Life of the Believer",
    paragraphs: [
      "The Parable of the Sower is one of Jesus&rsquo; most personally confronting teachings precisely because it refuses to leave the hearer as a neutral observer. Everyone who hears the word of the kingdom is already one of the soils; there is no fifth category of the uncommitted spectator. The question the parable presses upon the honest reader is not &ldquo;which soil describes other people?&rdquo; but &ldquo;where is the condition of my own heart in relation to the word I am hearing?&rdquo; Are there hard-packed patches &mdash; areas of life where the repeated word has failed to penetrate because of willful resistance or chronic distraction? Are there shallow places where enthusiasm for the things of God evaporates as soon as following Jesus costs something real?",
      "The thorny soil is the form of spiritual failure most characteristic of prosperous and comfortable cultures. Jesus names the specific thorns: the cares of the world, the deceitfulness of riches, and the desires for other things entering in. These are not dramatic vices &mdash; they are the ordinary furniture of a busy, materially comfortable life. The word is not attacked or rejected; it is simply crowded out by the sheer accumulation of other things that claim the heart&rsquo;s attention and energy. The spiritual discipline that corresponds to the thorny soil is not confession of dramatic sin but the regular, intentional pruning of secondary loves that have been allowed to grow too large.",
      "The seed growing secretly (4:26&ndash;29) speaks a word of comfort to every Christian who is anxious about the pace of their own growth or about the apparent slowness of God&rsquo;s purposes. The farmer does not understand how the seed grows; he simply trusts that it does. There are seasons in the Christian life when no visible growth is apparent, when prayer seems to produce nothing, when reading the word feels dry, when service seems fruitless. The parable does not promise constant visible growth; it promises that growth is occurring at a level beneath the visible, and that the harvest is coming according to a timeline that God controls.",
      "The mustard seed parable has direct application to the church in every situation of apparent smallness, weakness, or cultural marginalization. Every generation of Christians is tempted to measure the kingdom by present appearances &mdash; by the size of congregations, the cultural prestige of Christianity, the number of conversions reported. Jesus&rsquo; parable invites a different frame: the kingdom begins as a mustard seed, and its final state &mdash; the great sheltering shrub whose branches receive the birds of all nations &mdash; is already secured. The present smallness does not determine the final outcome; the final outcome is determined by the nature of the seed, which is the word of God.",
      "The stilling of the storm speaks with particular force to every Christian who has ever prayed in the middle of a crisis and felt that Jesus was asleep. The disciples&rsquo; cry &mdash; &ldquo;Teacher, do you not care that we are perishing?&rdquo; &mdash; is one of the most honest prayers in the New Testament, and it is a prayer that every believer has prayed in some form. The response of Jesus does not begin with a rebuke; it begins with action. He stills the storm first, and then he asks about their faith. The ordering matters: he demonstrates that he is Lord of the storm before he calls them to account for their fear of it.",
      "The question with which Mark 4 ends &mdash; &ldquo;Who then is this?&rdquo; &mdash; is the question that the whole chapter has been preparing. The parables have revealed the nature of the kingdom; the storm has revealed the nature of the King. A kingdom whose growth is as mysterious and unstoppable as seed in good ground, whose light is hidden only in order to be revealed, whose beginnings are as small as a mustard seed and whose outcome as large as the great sheltering tree of the prophets &mdash; such a kingdom belongs to one who can speak two words to a churning sea and produce a great calm. Mark 4 is an invitation to stake your life on the answer to that question, and to let the word take root deep enough to survive the storms that will come.",
    ],
  },
];

const videoItems = [
  { videoId: "4OpBP7hMhkA", title: "BibleProject - The Gospel of Mark Overview" },
  { videoId: "GKAJ8sMkFqI", title: "The Parable of the Sower Explained - Mark 4" },
  { videoId: "pRSMXlXCNMc", title: "Jesus Calms the Storm - Mark 4:35-41" },
  { videoId: "1SoE-FJ5E1A", title: "Parables of the Kingdom - Mustard Seed and Growing Seed" },
];

export default function Mark4GuidePage() {
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
            Mark 4 &mdash; Parables of the Kingdom
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus teaches from a boat on the Sea of Galilee &mdash; the Parable of the Sower and the four soils, the lamp under a basket, the seed growing secretly, and the mustard seed &mdash; then demonstrates his authority as Lord of creation by commanding the storm: &ldquo;Peace! Be still!&rdquo;
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
              Deepen your study of Mark 4 through these video teachings on the Parable of the Sower, the parables of the kingdom, and Jesus commanding the storm to be still.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Who Then Is This?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Mark 4 moves from the quiet mystery of a seed in the ground to the commanding voice that stills a sea, and in doing so it presses upon every reader the question the disciples could not yet answer: who is this, that even wind and sea obey him? The parables call for receptive hearts; the storm reveals the King who rules the kingdom they describe. Both demand the same response &mdash; trust in the one whose word is seed, and light, and the voice that silences the chaos.
          </p>
        </div>
      </main>
    </div>
  );
}
