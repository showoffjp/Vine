"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const TABS = [
  "Overview",
  "The Centurion's Faith",
  "Storm and Exorcism",
  "Following Jesus",
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
    heading: "Matthew 8: The Authority of the King",
    reference: "Matthew 8:1&ndash;34",
    paragraphs: [
      "Matthew 8 opens with Jesus descending from the mountain where he had delivered his great Sermon (Matt. 5&ndash;7), and the transition is not merely geographic &mdash; it is programmatic. Having declared the ethics and expectations of the kingdom in word, Jesus now enacts the power of that kingdom in deed. The crowds who followed him down the mountain witnessed a concentrated display of divine authority over the three greatest enemies of human flourishing: disease, nature, and the demonic.",
      "The chapter opens with the healing of a leper (vv. 1&ndash;4). Leprosy in the ancient world was not merely a physical affliction; it rendered its sufferer ritually unclean and socially exiled. The leper who approaches Jesus violates social norms and religious convention to kneel before him with the words: &ldquo;Lord, if you will, you can make me clean&rdquo; (v. 2). The answer he receives is breathtaking in its directness. Jesus does not speak from a distance; he reaches out and touches the untouchable: &ldquo;I will; be clean&rdquo; (v. 3). Immediately the leprosy is cleansed. Matthew will later quote Isaiah 53:4 (&ldquo;He took our illnesses and bore our diseases,&rdquo; v. 17) to show that these healings are not incidental acts of kindness but the fulfillment of the Servant&rsquo;s suffering mission.",
      "Next comes the healing of the centurion&rsquo;s servant (vv. 5&ndash;13), the most theologically rich episode in the chapter. A Roman military officer &mdash; a Gentile, a representative of the occupying power &mdash; comes to Jesus not for himself but for a paralyzed servant he cares for deeply. The exchange that follows produces one of the most astonishing statements of faith anywhere in the Gospels, and provokes one of Jesus&rsquo; most startling pronouncements about faith among the Gentiles.",
      "The domestic scene in vv. 14&ndash;17 shifts from the public road to the home of Peter. Jesus enters and finds Peter&rsquo;s mother-in-law laid up with a fever. He touches her hand, the fever leaves, and she rises and begins to serve him. By evening the whole town has gathered at the door, bringing to Jesus those who were demon-possessed and all who were sick; &ldquo;he healed all who were sick&rdquo; (v. 16). The fulfillment quotation of Isaiah 53:4 follows as Matthew&rsquo;s interpretive comment: in bearing the diseases of others, the Servant of the Lord enacts his substitutionary mission.",
      "A brief interlude in vv. 18&ndash;22 records two encounters about the cost of discipleship, then the chapter shifts to the lake. Jesus and his disciples get into a boat, and a &ldquo;great storm&rdquo; arises on the sea (v. 24) &mdash; the word Matthew uses is seismos, an earthquake-like upheaval of the waters. While Jesus sleeps, the disciples wake him in panic, and his rebuke of the wind and waves reduces them to instant calm. The disciples&rsquo; bewilderment &mdash; &ldquo;What sort of man is this, that even winds and sea obey him?&rdquo; (v. 27) &mdash; is the chapter&rsquo;s turning point.",
      "The chapter closes at Gadara (vv. 28&ndash;34), where two demoniacs emerge from the tombs in a terrifying encounter. Even demons acknowledge Jesus as &ldquo;Son of God&rdquo; and dread the judgment he represents. They request to be sent into a nearby herd of pigs; Jesus grants their request, the pigs rush into the sea and drown, and the whole city of the Gadarenes comes out &mdash; not to worship, but to beg Jesus to leave their region. The tragedy of Gadara is the preference for swine over the Savior, for economic loss over eternal gain. Matthew 8 thus presents a King whose authority is total, whose compassion is inexhaustible, and whose claims divide humanity into those who marvel and those who turn away.",
    ],
  },
  {
    id: "The Centurion's Faith",
    heading: "The Centurion&rsquo;s Faith: Authority Under Authority",
    reference: "Matthew 8:5&ndash;13",
    paragraphs: [
      "When Jesus entered Capernaum, a Roman centurion came to him, appealing on behalf of a paralyzed servant who was suffering terribly at home. The man&rsquo;s identity is significant: he was a Gentile officer commanding approximately one hundred soldiers in the Roman army of occupation. No Jew was obligated to receive such a man warmly, and yet this centurion comes not with the arrogance of a conqueror but with the posture of a supplicant. His concern for his servant &mdash; not a family member, but a subordinate &mdash; itself marks him as a man of unusual character.",
      "Jesus&rsquo; response is immediate: &ldquo;I will come and heal him&rdquo; (v. 7). But the centurion&rsquo;s reply stops Jesus in his tracks: &ldquo;Lord, I am not worthy to have you come under my roof, but only say the word, and my servant will be healed&rdquo; (v. 8). The centurion&rsquo;s self-assessment &mdash; &ldquo;I am not worthy&rdquo; &mdash; reflects a spiritual perception entirely absent from those who had far more religious privilege. He understood that what Jesus possessed was not a local or material power requiring physical proximity, but genuine sovereign authority that could operate across any distance.",
      "The centurion explains his reasoning by analogy: &ldquo;For I too am a man under authority, with soldiers under me. And I say to one, &lsquo;Go,&rsquo; and he goes, and to another, &lsquo;Come,&rsquo; and he comes, and to my servant, &lsquo;Do this,&rsquo; and he does it&rdquo; (v. 9). The logic is subtle but penetrating. The centurion understands that his own authority to command is derived from and backed by the authority of Caesar and Rome. When he speaks, soldiers obey &mdash; not because of anything intrinsic to his voice, but because of the chain of authority behind him. He perceived, by analogy, that Jesus operated with a similarly derived but infinitely greater delegated authority: the authority of God himself.",
      "Jesus&rsquo; reaction is extraordinary. Matthew uses a strong word: Jesus &ldquo;marveled&rdquo; (v. 10). This is one of only two places in the Gospels where Jesus is said to have marveled at something &mdash; and on both occasions it is over the presence or absence of faith. He turns to those following him and makes a sweeping indictment of Israel&rsquo;s unbelief contrasted with Gentile receptivity: &ldquo;Truly, I tell you, with no one in Israel have I found such faith&rdquo; (v. 10). The nation that had possessed the covenants, the law, the prophets, the promises, and the temple had failed to recognize what a Roman soldier grasped instinctively.",
      "The theological implications that Jesus draws out go far beyond this one healing. He looks forward to the eschatological banquet of the kingdom: &ldquo;I tell you, many will come from east and west and recline at table with Abraham, Isaac, and Jacob in the kingdom of heaven&rdquo; (v. 11). The Gentile centurion is a foretaste of multitudes from every nation who will enter the kingdom of God by faith. Meanwhile, &ldquo;the sons of the kingdom&rdquo; &mdash; those who by birth had seemed to be its natural heirs &mdash; will be cast into &ldquo;outer darkness&rdquo; (v. 12). The criterion for kingdom entrance is not ethnicity or privilege but faith.",
      "The healing is granted at a distance: &ldquo;Go; let it be done for you as you have believed&rdquo; (v. 13). And the servant was healed at that very hour. This miracle requires neither touch nor presence nor ritual &mdash; only the word of Jesus operating through the channel of the centurion&rsquo;s faith. Matthew thus presents this episode as a paradigm of how kingdom blessings flow: not through the external marks of religious identity, but through the posture of humble trust in the authority of Jesus. The centurion&rsquo;s faith became a pattern for the Gentile mission that would fill the rest of Matthew&rsquo;s Gospel, culminating in the Great Commission to &ldquo;all nations&rdquo; (28:19).",
      "What does the centurion&rsquo;s example teach about the mechanics of faith? He came with a clear perception of who Jesus was (one with authority), a clear understanding of his own unworthiness, a specific and focused request, and a complete confidence in Jesus&rsquo; ability to act apart from physical contact. These four elements together constitute what the text presents as exceptional faith &mdash; faith that does not require sight, proximity, or demonstration, but trusts in the character and authority of the one to whom it is directed.",
    ],
  },
  {
    id: "Storm and Exorcism",
    heading: "Storm and Exorcism: Lord of Nature and the Demonic",
    reference: "Matthew 8:23&ndash;34",
    paragraphs: [
      "Having demonstrated his authority over disease in the first half of Matthew 8, Jesus now enacts his sovereignty over two additional realms: the created order and the spiritual powers of darkness. These two episodes &mdash; the calming of the storm and the exorcism at Gadara &mdash; together constitute a theological diptych revealing the identity of Jesus at a level that no healing of human sickness could reach.",
      "The sea-crossing begins simply enough: &ldquo;And when he got into the boat, his disciples followed him&rdquo; (v. 23). But suddenly a great seismos &mdash; a word more often used for earthquakes than storms &mdash; convulses the sea, so that the boat is being swamped by the waves. Matthew&rsquo;s choice of seismos is likely deliberate, evoking the cosmic dimension of the upheaval rather than merely its meteorological character. This is not simply bad weather; it is the kind of chaos that in the Old Testament imagery is the opposite of God&rsquo;s ordered creation.",
      "Jesus is asleep. The disciples, several of whom were experienced fishermen, wake him in panic: &ldquo;Save us, Lord; we are perishing!&rdquo; (v. 25). His response addresses both the disciples and the storm: &ldquo;Why are you afraid, O you of little faith?&rdquo; (v. 26), followed by a rebuke of the winds and sea that produces &ldquo;a great calm.&rdquo; The contrast is deliberate &mdash; the seismos mega becomes a galene megale, a great calm. The same power that created the sea commands it still.",
      "The disciples&rsquo; response is the theological center of the episode: &ldquo;What sort of man is this, that even winds and sea obey him?&rdquo; (v. 27). The Greek word translated &ldquo;what sort&rdquo; (potapos) carries a sense of astonished wonder at the category or kind of being they have encountered. They are not asking about his psychological makeup; they are groping toward an ontological question: what is he? The Old Testament answer to which their question points is found in Psalm 107:29 &mdash; it is YHWH who &ldquo;made the storm be still, and the waves of the sea were hushed.&rdquo; The disciples are in the boat with the one who stilled the storm at creation.",
      "The scene shifts abruptly to the other side of the lake, the Gentile territory of Gadara. Two men possessed by demons come out of the tombs to meet Jesus. The location is triple-defiled in Jewish terms: Gentile territory, a burial place, and demonic habitation. Yet it is here, in maximum uncleanness, that the most explicit christological confession in the chapter is made &mdash; not by the disciples but by the demons: &ldquo;What have you to do with us, O Son of God? Have you come here to torment us before the time?&rdquo; (v. 29).",
      "The demons&rsquo; theology is orthodox if terrified. They know who Jesus is (&ldquo;Son of God&rdquo;), they know their own fate (&ldquo;torment&rdquo;), and they know the timing of their judgment (&ldquo;before the time&rdquo;). Their request to be sent into the pigs rather than the abyss, and Jesus&rsquo; laconic &ldquo;Go&rdquo; (v. 32), is followed by the herd of two thousand rushing down the bank and drowning in the sea. The two men are freed. The pigs are lost.",
      "The townspeople&rsquo;s response is the saddest moment in the chapter. When they hear what happened, they come out and, upon seeing Jesus, &ldquo;begged him to leave their region&rdquo; (v. 34). No rejoicing over the two restored men. No inquiry about this teacher who commands both storms and demons. The loss of the pigs &mdash; the economic disruption &mdash; outweighs the liberation of two human beings from demonic torment. Matthew presents this as the paradigmatic tragedy of those who encounter the King of the kingdom and turn him away because the cost of his presence is higher than they wish to pay. The Gadarenes wanted pigs more than they wanted the Son of God.",
    ],
  },
  {
    id: "Following Jesus",
    heading: "Following Jesus: Foxes Have Holes",
    reference: "Matthew 8:18&ndash;22",
    paragraphs: [
      "Tucked between the healing at Peter&rsquo;s house and the crossing of the sea, Matthew inserts a brief but penetrating passage on the cost of discipleship (vv. 18&ndash;22). It comprises two short encounters with would-be followers, each interrupted by a saying of Jesus so demanding that commentators have wrestled with it ever since. The passage functions as a kind of test case for the radical claims the kingdom makes on those who would enter it.",
      "The first encounter is with a scribe &mdash; a trained interpreter of the law, a man of significant religious status &mdash; who addresses Jesus enthusiastically: &ldquo;Teacher, I will follow you wherever you go&rdquo; (v. 19). The declaration sounds noble, even ardent. But Jesus&rsquo; response deflects the romantic picture of discipleship: &ldquo;Foxes have holes, and birds of the air have nests, but the Son of Man has nowhere to lay his head&rdquo; (v. 20). Jesus does not rebuke the scribe or refuse him. He simply strips away any illusion that following him means security, comfort, or a settled home.",
      "The phrase &ldquo;Son of Man&rdquo; is Jesus&rsquo; most characteristic self-designation in the Gospels, drawn from Daniel 7:13&ndash;14 where the Son of Man receives dominion, glory, and an everlasting kingdom. The irony Matthew highlights here is cosmic: the one to whom all authority in heaven and earth belongs (28:18) currently has no pillow on which to rest his head. The kingdom he brings is real and coming &mdash; but its fullness awaits, and the path to it runs through homelessness, rejection, and a cross.",
      "The second encounter is with a disciple who is already following Jesus but makes what sounds like a reasonable request: &ldquo;Lord, let me first go and bury my father&rdquo; (v. 21). Burial of the dead was one of the most sacred obligations in Jewish culture, overriding nearly every other duty. To deny a son the right to bury his father was, by ancient standards, a breathtaking demand. Jesus&rsquo; response has therefore shocked interpreters across the centuries: &ldquo;Follow me, and leave the dead to bury their own dead&rdquo; (v. 22).",
      "How is this to be understood? The most common interpretive approach distinguishes between two categories of &ldquo;dead&rdquo; in Jesus&rsquo; saying: the physically dead (who can be buried by others who are still alive but spiritually lifeless) and the spiritually dead (those who have not entered the life of the kingdom). On this reading, Jesus is not forbidding filial piety but asserting that the urgency of the kingdom mission &mdash; the proclamation of life &mdash; takes precedence over the administration of death. The spiritually alive have been called to announce life; let those who are still in spiritual death manage the affairs of the physically dead.",
      "Together, these two brief encounters establish a pattern for the demands of the kingdom. The first encounter warns against enthusiasm uncalculated by cost: following Jesus is not romantic adventure but a road of dispossession. The second warns against allowing the legitimate demands of family, culture, and social obligation to become excuses for delaying or avoiding the claims of the kingdom. Jesus is not callous toward grief or irresponsible toward family; he is insisting that the kingdom of God constitutes an absolute priority that relativizes every other allegiance, however sacred those other allegiances may be in ordinary life.",
      "The placement of this passage between miracles of healing and the calming of the sea is not accidental. Matthew frames the call to radical discipleship within a context of demonstrations of Jesus&rsquo; authority and power. The one making these radical demands is the same one who healed the leper with a touch, answered the centurion&rsquo;s faith at a distance, and will shortly command the winds and waves into silence. The invitation to follow him &ldquo;wherever you go&rdquo; is therefore not a reckless leap into the unknown; it is a well-founded trust in one who has shown himself to be the Lord of every domain that threatens human existence. The foxes have their holes and the birds their nests, but the Son of Man offers something infinitely greater than a settled home &mdash; he offers the kingdom of heaven itself.",
    ],
  },
];

const videoItems = [
  { videoId: "Qn6ks2aRMKQ", title: "Matthew Chapter 8 - The Miracles of Jesus" },
  { videoId: "3Hcg7qVp3Yw", title: "The Centurion's Faith - Matthew 8:5-13 Explained" },
  { videoId: "Bk4nPm7ZGFQ", title: "Calming the Storm - Jesus Lord of Creation" },
  { videoId: "r9Xw7JkPf2A", title: "Cost of Discipleship - Matthew 8 Teaching" },
];

export default function Matthew8GuidePage() {
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
            Matthew Chapter 8
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus descends from the Sermon on the Mount and demonstrates his sovereign authority over disease, nature, and the demonic &mdash; healing a leper, answering a centurion&rsquo;s extraordinary faith, calming a storm, and casting out demons at Gadara. The chapter fulfills Isaiah 53:4 and reveals the identity of the King.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && activeTab !== "Videos" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: GOLD, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
               dangerouslySetInnerHTML={{ __html: "Deepen your study of Matthew 8 through visual teaching on the miracles of Jesus, the centurion&rsquo;s faith, the calming of the storm, and the cost of discipleship." }} />
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>With No One in Israel Have I Found Such Faith</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
             dangerouslySetInnerHTML={{ __html: "Matthew 8 establishes the authority of the King whose coming Isaiah prophesied &mdash; one who bears our diseases, commands the storm, and liberates the captive. The question the disciples asked on the lake still echoes: &ldquo;What sort of man is this?&rdquo; The chapter invites us to answer it with the centurion&rsquo;s posture: &lsquo;Only say the word, and it shall be done.&rsquo;" }} />
        </div>
      </main>
    </div>
  );
}
