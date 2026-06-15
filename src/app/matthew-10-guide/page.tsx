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
  "The Twelve Sent Out",
  "Sheep Among Wolves",
  "Do Not Fear",
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
    heading: "Overview of Matthew 10",
    reference: "Matthew 10:1&ndash;42",
    paragraphs: [
      "Matthew chapter 10 is the first great commissioning of the disciples, the moment when those who have followed Jesus and watched him work are themselves sent out to do the work of the kingdom. Flowing directly from the closing words of chapter 9 &mdash; &ldquo;The harvest is plentiful, but the laborers are few&rdquo; &mdash; this chapter shows the Lord of the harvest beginning to answer his own prayer by sending laborers into the field. He calls the Twelve to himself, names them one by one, and gives them authority over unclean spirits and over every disease and affliction (10:1&ndash;4).",
      "The first major section is the mission charge itself (10:5&ndash;15). Jesus limits the initial mission to &ldquo;the lost sheep of the house of Israel,&rdquo; instructing the Twelve to proclaim that the kingdom of heaven is at hand, to heal the sick, raise the dead, cleanse lepers, and cast out demons. &ldquo;Freely you have received; freely give&rdquo; (10:8). They are to travel light &mdash; no gold, no bag, no extra tunic &mdash; depending entirely on the hospitality of those they serve, and shaking the dust from their feet wherever they are not received.",
      "The tone then shifts from instruction to sober warning (10:16&ndash;25). Jesus does not hide the cost: &ldquo;Behold, I am sending you out as sheep in the midst of wolves&rdquo; (10:16). His messengers will be dragged before councils, flogged in synagogues, and handed over even by their own families. Yet they are not to be anxious about what to say, for the Spirit of their Father will speak through them. The disciple is not above his teacher; if the master of the house was called Beelzebul, his household can expect no kinder treatment.",
      "The third movement is a threefold call not to fear (10:26&ndash;33). Three times Jesus says, in effect, &ldquo;Do not fear.&rdquo; Do not fear those who can only kill the body but cannot touch the soul. Fear God instead, the one who knows even the fall of a sparrow and the number of the hairs on your head. Acknowledge Christ before men, and he will acknowledge you before his Father; deny him, and he will deny you. The fearless witness rests on the Father&rsquo;s detailed, watchful care.",
      "The chapter closes with the sharp paradoxes of discipleship (10:34&ndash;42). &ldquo;I have not come to bring peace, but a sword&rdquo; (10:34) &mdash; the gospel divides even households, for loyalty to Christ must surpass every earthly tie. Whoever does not take up his cross and follow is not worthy of him; whoever loses his life for Christ&rsquo;s sake will find it. And the chapter ends on a note of grace: to receive Christ&rsquo;s messengers is to receive Christ himself, and even a cup of cold water given to a little one will not lose its reward.",
      "Taken together, Matthew 10 is a manual for mission shot through with both realism and hope. It refuses to romanticize discipleship, naming persecution, division, and the cross plainly, yet it surrounds every hard word with the assurance of God&rsquo;s presence, the Spirit&rsquo;s help, and the Father&rsquo;s tender knowledge of each one. The disciples go out not as hired hands but as sent ones, ambassadors whose reception or rejection is bound up with the reception or rejection of the one who sent them.",
    ],
  },
  {
    id: "The Twelve Sent Out",
    heading: "The Twelve Sent Out",
    reference: "Matthew 10:1&ndash;15",
    paragraphs: [
      "The chapter opens with Jesus summoning his twelve disciples and giving them authority &mdash; the same authority he has been exercising throughout the Gospel &mdash; over unclean spirits, to cast them out, and to heal every disease and every affliction (10:1). This is a remarkable delegation. The power that has astonished the crowds is now entrusted to ordinary men, so that the ministry of Jesus might extend beyond his single bodily presence into the towns and villages of Israel through those he has trained.",
      "Matthew then names the Twelve, and the list is carefully ordered. Peter is named first, marked out as the leader among them, and Judas Iscariot is named last, with the haunting note &ldquo;who betrayed him&rdquo; (10:4). Between these two stand fishermen, a tax collector (Matthew names himself among them), and men of varied backgrounds and temperaments. The kingdom is built not on the impressive or the elite but on a band of common men whom Jesus has called by name.",
      "The mission is, at this stage, deliberately limited. &ldquo;Go nowhere among the Gentiles and enter no town of the Samaritans, but go rather to the lost sheep of the house of Israel&rdquo; (10:5&ndash;6). This restriction is a matter of redemptive order, not of exclusion. The gospel must first be offered to the covenant people to whom the promises were made; the wider mission to all nations will come later, after the resurrection, in the Great Commission of Matthew 28. For now, the Twelve are to seek the scattered sheep of Israel.",
      "Their message is concise and urgent: &ldquo;The kingdom of heaven is at hand&rdquo; (10:7). Their ministry is to embody that message in works of mercy &mdash; healing the sick, raising the dead, cleansing lepers, casting out demons. And over all of it Jesus sets one governing principle: &ldquo;You received without paying; give without pay&rdquo; (10:8). The grace they have received is not a commodity to be sold but a gift to be passed on freely. The ministry of the kingdom can never be made into a means of personal gain.",
      "The instructions about provisions reinforce this radical dependence. They are to take no gold, no silver, no copper for their belts, no bag for the journey, no second tunic, no sandals or staff beyond what they wear (10:9&ndash;10). The reasoning is given plainly: &ldquo;the laborer deserves his food.&rdquo; The messengers are to depend on the hospitality of those who receive their message, trusting that God will provide through the people they serve, rather than carrying their own security with them.",
      "Entering a town, they are to find a worthy household and stay there, greeting it with peace. &ldquo;If the house is worthy, let your peace come upon it, but if it is not worthy, let your peace return to you&rdquo; (10:13). The blessing of peace is not magic; it rests on those who receive it and returns to the messenger when refused. And where the messengers and their message are wholly rejected, they are to shake the dust off their feet as a solemn testimony &mdash; a sobering sign that to refuse the kingdom&rsquo;s heralds is no small thing, for &ldquo;it will be more bearable on the day of judgment for the land of Sodom and Gomorrah than for that town&rdquo; (10:15).",
    ],
  },
  {
    id: "Sheep Among Wolves",
    heading: "Sheep Among Wolves: Persecution Foretold",
    reference: "Matthew 10:16&ndash;25",
    paragraphs: [
      "With the mission charge given, Jesus turns to the hard truth his messengers must carry with them: &ldquo;Behold, I am sending you out as sheep in the midst of wolves, so be wise as serpents and innocent as doves&rdquo; (10:16). The image is striking and unsettling. Sheep are defenseless; wolves are predators. Jesus does not send his disciples into a friendly world but into one that will often be hostile, and he wants them to go with clear eyes rather than naive expectations.",
      "Yet within that warning is a call to a particular kind of character. They are to be &ldquo;wise as serpents&rdquo; &mdash; shrewd, alert, prudent, not blundering needlessly into danger &mdash; and &ldquo;innocent as doves&rdquo; &mdash; pure, harmless, free of malice or cunning. The combination is essential. Shrewdness without innocence becomes manipulation; innocence without shrewdness becomes foolishness. The faithful witness holds both together, harmless yet not gullible.",
      "Jesus then grows specific about the forms persecution will take. &ldquo;They will deliver you over to courts and flog you in their synagogues&rdquo; (10:17), and his messengers will be dragged before governors and kings. Strikingly, he reframes even this as opportunity: it will be &ldquo;to bear witness before them and the Gentiles&rdquo; (10:18). What looks like the silencing of the gospel becomes, in God&rsquo;s providence, a platform for it; the courtroom becomes a pulpit.",
      "In the hour of trial they are not to be anxious about their defense. &ldquo;Do not be anxious how you are to speak or what you are to say, for what you are to say will be given to you in that hour&rdquo; (10:19). The reason is profound: &ldquo;it is not you who speak, but the Spirit of your Father speaking through you&rdquo; (10:20). The persecuted disciple is never alone before the magistrate; the Spirit of God supplies the words, making the trial of faith into a testimony of the Father himself.",
      "The cost reaches into the most intimate human bonds. &ldquo;Brother will deliver brother over to death, and the father his child&rdquo; (10:21), and disciples will be hated by all for Christ&rsquo;s name&rsquo;s sake. The gospel that brings peace with God can bring a sword within families, dividing those who follow Christ from those who reject him. To this hard reality Jesus attaches a promise of perseverance: &ldquo;the one who endures to the end will be saved&rdquo; (10:22). Faithfulness, not a single burst of enthusiasm, marks the true disciple.",
      "Finally, Jesus grounds all this suffering in solidarity with himself. &ldquo;A disciple is not above his teacher, nor a servant above his master&rdquo; (10:24). If the world treated the master with contempt &mdash; if they called the master of the house Beelzebul, the very prince of demons &mdash; the household can expect no better (10:25). This is, in a strange way, a comfort: persecution is not a sign that something has gone wrong, but a sign of conformity to Christ. To share his mission is to share his rejection, and to share his rejection is to walk the road he himself walked.",
    ],
  },
  {
    id: "Do Not Fear",
    heading: "Do Not Fear; The Cost of Following",
    reference: "Matthew 10:26&ndash;42",
    paragraphs: [
      "Having named the dangers plainly, Jesus now repeats a single command three times like a refrain: &ldquo;Do not fear.&rdquo; The first reason is the certainty of vindication: &ldquo;Have no fear of them, for nothing is covered that will not be revealed, or hidden that will not be known&rdquo; (10:26). What the disciples whisper now will one day be proclaimed from the housetops, and the truth that the world tries to suppress will be brought fully into the light. The verdict of God, not the verdict of men, is the one that lasts.",
      "The second reason reorders the disciples&rsquo; fears: &ldquo;Do not fear those who kill the body but cannot kill the soul. Rather fear him who can destroy both soul and body in hell&rdquo; (10:28). Human persecutors hold only a limited and temporary power; they can touch the body but cannot reach the soul. The proper object of reverent fear is God himself. Yet this is no cold terror, for the same God who must be feared is the Father who tenderly cares.",
      "That tenderness is captured in the image of the sparrows. Two sparrows are sold for a penny, and yet &ldquo;not one of them will fall to the ground apart from your Father&rdquo; (10:29). And the disciples are worth far more than many sparrows; indeed, &ldquo;even the hairs of your head are all numbered&rdquo; (10:30). The God who attends to the death of a single small bird and counts the hairs of his children is intimately, exhaustively aware of all that befalls them. Fearless witness flows from confidence in this detailed providence.",
      "From comfort Jesus turns to confession: &ldquo;Everyone who acknowledges me before men, I also will acknowledge before my Father who is in heaven, but whoever denies me before men, I also will deny before my Father&rdquo; (10:32&ndash;33). Open allegiance to Christ in this life is bound to his acknowledgment of us in the life to come. The stakes of public faithfulness could not be higher; to confess Christ now is to be confessed by him before the Father, and to deny him now is to be denied.",
      "Then come the chapter&rsquo;s hardest words: &ldquo;Do not think that I have come to bring peace to the earth. I have not come to bring peace, but a sword&rdquo; (10:34). Jesus speaks of division within households &mdash; a man set against his father, a daughter against her mother. He is not commending strife but describing its inevitability: when allegiance to Christ collides with the demands of family, painful division can follow. &ldquo;Whoever loves father or mother more than me is not worthy of me&rdquo; (10:37). Christ must hold the supreme place, above even the dearest human loves.",
      "This supremacy is dramatized in the call of the cross: &ldquo;Whoever does not take his cross and follow me is not worthy of me&rdquo; (10:38). The cross was an instrument of death, and to take it up is to be willing to die to self and even to life itself for Christ&rsquo;s sake. Then comes the great paradox: &ldquo;Whoever finds his life will lose it, and whoever loses his life for my sake will find it&rdquo; (10:39). The grasping, self-protective life is forfeited; the surrendered life is the one truly saved.",
      "The chapter ends, against all this severity, on a note of remarkable grace and identification. &ldquo;Whoever receives you receives me, and whoever receives me receives him who sent me&rdquo; (10:40). The messengers are so united with Christ that to welcome them is to welcome him and the Father. And the smallest kindness shown to the least of his people is seen and rewarded: &ldquo;whoever gives one of these little ones even a cup of cold water&hellip; will by no means lose his reward&rdquo; (10:42). The way of the cross is hard, but it is watched over by a Father who forgets no act of love.",
    ],
  },
];

const videoItems = [
  { videoId: "Mk4tRp9Lw2c", title: "BibleProject - Sending of the Twelve Overview" },
  { videoId: "Vn7dBx1Qz8R", title: "The Mission Charge of Matthew 10 Explained" },
  { videoId: "Pq2cLm5Yw0H", title: "Sheep Among Wolves - Persecution and Witness" },
  { videoId: "Wz9fKt3Bv6N", title: "Do Not Fear and the Cost of Discipleship" },
];

export default function Matthew10GuidePage() {
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
            The Gospel of Matthew, Chapter 10
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The first great commissioning &mdash; Jesus calls and names the Twelve, sends them to the lost sheep of Israel with authority over disease and demons, warns of persecution among wolves, commands them not to fear the one who knows every sparrow, and lays out the cost of taking up the cross to follow him.
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
              Deepen your study of Matthew 10 through visual teaching on the calling of the Twelve, the mission charge, the warning of persecution among wolves, and the call to fearless, cross-bearing discipleship.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Sent as Laborers into the Harvest</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 10 turns watchers into workers. The Twelve who have seen Jesus heal and forgive are now given his authority and sent into a world that will both welcome and resist them. The chapter never softens the cost &mdash; persecution, division, the cross &mdash; yet it surrounds every hard word with the Father&rsquo;s care, the Spirit&rsquo;s help, and the promise that even a cup of cold water given in Christ&rsquo;s name is never forgotten.
          </p>
        </div>
      </main>
    </div>
  );
}
