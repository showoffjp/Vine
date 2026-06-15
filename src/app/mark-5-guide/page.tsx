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

const videoItems = [
  { videoId: "kF3tR8pLmNw", title: "Mark 5: Power Over Demons, Disease, and Death" },
  { videoId: "aZ9qYvXcBnJ", title: "The Gerasene Demoniac and the Mercy of Jesus" },
  { videoId: "sW2mDpKhRtG", title: "Faith That Presses Through - The Bleeding Woman" },
  { videoId: "hL7nQbXvZcM", title: "Talitha Cumi - Jesus and the Raising of Jairus Daughter" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chapter Guide</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Mark Chapter 5</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Mark 5 is one of the most concentrated displays of divine power in the entire New Testament. Three miracles &mdash; each structurally and theologically distinct &mdash; are arranged in a literary pattern scholars call intercalation or the &ldquo;Markan sandwich.&rdquo; A demoniac is freed in Gentile territory. A woman who has suffered for twelve years touches the hem of Jesus&rsquo; garment. A twelve-year-old girl who has died is raised to life. Together these stories make a cumulative argument: Jesus has authority over every power that diminishes and destroys human life &mdash; spiritual, physical, and mortal. Mark&rsquo;s characteristic word <em>euthys</em> (&ldquo;immediately&rdquo;) drives the chapter forward with breathless urgency, insisting that when Jesus acts, he acts at once." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Shape of Mark 5</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Mark 5 opens on the eastern shore of the Sea of Galilee in the region of the Gerasenes &mdash; Gentile territory, beyond the boundary of the Jewish homeland. This geographic detail is not incidental. Jesus has crossed the sea (Mark 4:35-41, where he stilled the storm) and now steps into a world his contemporaries would have regarded as spiritually unclean. The chapter ends with him back in Galilee, but the frame is important: his authority crosses every border, including the border between Jew and Gentile, and between the living and the dead." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The three miracles are arranged in a layered structure. The Jairus story begins (vv.21-24), then is interrupted by the story of the bleeding woman (vv.25-34), and then concludes (vv.35-43). This intercalation is one of Mark&rsquo;s signature techniques: the two stories illuminate each other. Both involve a &ldquo;daughter&rdquo; (the woman is called &ldquo;daughter&rdquo; by Jesus in v.34). Both involve the number twelve (the woman bled for twelve years; the girl was twelve years old). Both require faith; both receive a complete healing." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Gerasene Demoniac: Gentile Territory, Total Restoration</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The first story (vv.1-20) is the longest and most dramatic. A man lives in the tombs &mdash; a place of death &mdash; and cannot be bound by chains. He is beyond human control, beyond community, beyond ordinary social life. His situation is a compressed portrait of what spiritual desolation looks like at the extreme: isolation, self-destruction, uncontrollable violence, residence among the dead. Mark emphasizes repeatedly that he could not be restrained: &ldquo;no one could bind him anymore, not even with a chain&rdquo; (v.3)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "When he sees Jesus, he runs to him and falls at his feet &mdash; a detail that is easy to miss but theologically important. Even in his deranged state, something in this man recognizes divine authority and moves toward it rather than away. The demons themselves, speaking through him, identify Jesus with precision: &ldquo;What have you to do with me, Jesus, Son of the Most High God?&rdquo; The title &ldquo;Most High God&rdquo; (<em>hupsistos</em>) is frequently used by Gentiles and is the language used for God in the book of Daniel, which is itself set in Gentile territory. Mark is hinting that the Gentile world, in its darkest corners, recognizes what Israel&rsquo;s religious establishment will not." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Euthys: The Urgency of Mark</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "One of the most distinctive features of Mark&rsquo;s Gospel is the Greek word <em>euthys</em>, traditionally translated &ldquo;immediately,&rdquo; &ldquo;straightway,&rdquo; or &ldquo;at once.&rdquo; Mark uses it approximately 41 times, far more than any other Gospel. It appears throughout chapter 5 to create a sense of forward momentum and narrative urgency. Healings do not unfold slowly; Jesus does not deliberate. When he acts, he acts at once. This urgency serves a theological function: it communicates that the kingdom of God has irrupted into ordinary time with concentrated force." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "In v.29, the woman&rsquo;s bleeding stops &ldquo;immediately&rdquo; (<em>euthys</em>) when she touches the garment. In v.42, the girl rises &ldquo;immediately&rdquo; (<em>euthys</em>) when Jesus speaks. These immediate responses are not coincidental; they are Mark&rsquo;s theological signature. The power at work in Jesus does not need time to build up; it is not gradual or partial. The kingdom arrives with force, not with slow accumulation." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Do not fear, only believe.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Mark 5:36b (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Decapolis Commission</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "After the healing of the demoniac, the region begs Jesus to leave (v.17). This is one of the most sobering responses to a miracle in the Gospels: the townspeople, seeing the man healed and the pigs drowned, are afraid &mdash; and they want Jesus gone. The economic loss (a herd of pigs) may partly explain the reaction, but the text suggests something deeper: the presence of this level of authority and disruption is simply too much for them to absorb." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The formerly demonized man, however, begs to go with Jesus (v.18). Jesus refuses and gives him an extraordinary commission: &ldquo;Go home to your friends and tell them how much the Lord has done for you, and how he has had mercy on you&rdquo; (v.19). Jesus is not yet ready to preach openly in Galilee; the &ldquo;Messianic Secret&rdquo; motif in Mark generally has him silencing those he heals. But in the Decapolis &mdash; Gentile territory &mdash; he sends this man to proclaim. The man becomes the first missionary of the Gospel, and he goes to ten Gentile cities. Mark notes that &ldquo;everyone marveled.&rdquo;" }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Death Is Only Sleep</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "When the messengers come from Jairus&rsquo;s house with the news that his daughter has died, Jesus says: &ldquo;Do not fear, only believe&rdquo; (v.36). When he arrives and the mourners are weeping loudly, he says: &ldquo;Why are you making a commotion and weeping? The child is not dead but sleeping&rdquo; (v.39). The crowd laughs at him. The laughter is the sound of ordinary human categories of possibility encountering someone who operates beyond those categories." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus&rsquo;s use of &ldquo;sleeping&rdquo; for death is not a denial that the girl has physically died &mdash; Mark clearly intends us to understand she is dead. Rather, it is a statement about the nature of death from the perspective of resurrection power: what is permanent and final for everyone else is merely a temporary condition for Jesus. &ldquo;Talitha cumi&rdquo; &mdash; the Aramaic phrase preserved by Mark in its original form, adding to the vivid, eyewitness texture of the account &mdash; means &ldquo;Little girl, arise.&rdquo; She arises immediately (<em>euthys</em>). Jesus then tells them to give her something to eat &mdash; a detail that is both tenderly practical and theologically significant: she is genuinely, bodily alive." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Power Over the Demonic: Legion and Deliverance</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "When Jesus asks the demon its name, the reply is &ldquo;Legion, for we are many&rdquo; (v.9). A Roman legion consisted of approximately 6,000 soldiers. The name is both literal &mdash; indicating a massive number of unclean spirits &mdash; and suggestive of a military metaphor. In the context of a Jewish audience under Roman occupation, calling the demons &ldquo;Legion&rdquo; would have carried unmistakable political resonance. Jesus does not negotiate with Legion; he commands. The demons&rsquo; request to be sent into the pigs rather than &ldquo;out of the country&rdquo; (v.10) suggests they understood they were being displaced from a territory. Jesus grants their request, and the 2,000 pigs drown in the sea." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The pigs&rsquo; plunge into the sea is rich with symbolic resonance. In Jewish cosmology the sea was associated with chaos and the abyss; the demons return to the realm of chaos from which they came. The number 2,000 &mdash; the largest herd mentioned in the Gospels &mdash; underscores the magnitude of what has been done in one man. A &ldquo;Legion&rdquo; of demons required a herd of 2,000 pigs to contain them in their destruction." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The man is found afterward &ldquo;sitting, clothed and in his right mind&rdquo; (v.15). These three details reverse his prior condition: he had been running naked through the tombs; now he is seated, clothed, sane. The image is of human dignity fully restored. Seated at the feet of Jesus, clothed &mdash; the same language used in Luke 8 for this account &mdash; he is a portrait of what redemption looks like in embodied human terms." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Faith That Presses Through the Crowd</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The woman with the flow of blood (vv.25-34) had been ritually unclean under Levitical law for twelve years (Leviticus 15:25-27). Her uncleanness was not merely a personal medical problem; it had separated her from public worship, from community touch, from ordinary social life. She had spent all she had on physicians and grown worse. When she touches the hem of Jesus&rsquo; garment from behind, it is an act of audacious, desperate faith." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Technically, her touch should have made Jesus unclean under Levitical categories. But in every case in the Gospels where Jesus touches or is touched by something &ldquo;unclean&rdquo; &mdash; a leper (Mark 1:41), a corpse (Mark 5:41), a bleeding woman &mdash; the flow of holiness runs the other direction: the unclean is made clean, not the clean made unclean. Jesus is not susceptible to ritual contamination; he is the source of ritual purification. His purity is not fragile; it is powerful and overflows." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus&rsquo;s question &ldquo;Who touched me?&rdquo; (v.30) is pointed and personal. The disciples are baffled: many people are pressing against him. But Jesus perceives that &ldquo;power had gone out from him&rdquo; &mdash; the Greek word <em>dunamis</em>, from which we get &ldquo;dynamite.&rdquo; He distinguishes between the pressing of the crowd and the touch of faith. Not all contact with Jesus is contact with faith. The woman comes forward in fear and trembling and tells him &ldquo;the whole truth.&rdquo; His response is a declaration and a benediction: &ldquo;Daughter, your faith has made you well; go in peace, and be healed of your disease&rdquo; (v.34)." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Healing on the Way: Intercalation and Providence</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The structural device of intercalation &mdash; inserting the bleeding woman story inside the Jairus story &mdash; is not merely a literary convenience. It makes a theological point: while Jesus was on the way to one urgent mission, he stopped for another. The delay caused by the woman&rsquo;s healing is apparently the reason Jairus&rsquo;s daughter dies before Jesus arrives. From a purely human calculus, the stop was catastrophic: a child died because Jesus paused." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "But Mark uses the structure to make a counter-point: what appeared to be a fatal delay was in fact an expansion of the mission. Jesus did not merely defer Jairus&rsquo;s healing; he upgraded it. A sick girl who would have been healed becomes a dead girl who is raised to life. The woman who received healing on the way was not an interruption; she was part of the journey. The theological implication is that God&rsquo;s purposes are not frustrated by what appears to be delay or complication; they are revealed through it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jairus is called a ruler of the synagogue (<em>archisynagogos</em>), a significant position. He has social standing, authority, religious respectability. He falls at Jesus&rsquo; feet (v.22) &mdash; the same posture as the demoniac (v.6). Mark is quietly noting that before Jesus, the distinctions of social and religious status collapse. The desperate lunge of a social outcast and the deliberate prostration of a synagogue ruler are the same posture before the same Lord." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Fear and Faith: The Two Responses</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Fear and faith are woven through Mark 5 as contrasting responses to the same divine power. The Gerasene townspeople see the miracle and are afraid &mdash; and beg Jesus to leave (v.17). The woman who touches the garment is healed and then falls down &ldquo;in fear and trembling&rdquo; (v.33) &mdash; but this fear is the reverent awe that accompanies encounter with the holy, not the fearful rejection of the townspeople. Jairus is told &ldquo;do not fear, only believe&rdquo; (v.36) when the news of his daughter&rsquo;s death arrives &mdash; the command presupposes that fear is his immediate and natural response." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Jesus&rsquo;s command &ldquo;do not fear, only believe&rdquo; is not a dismissal of Jairus&rsquo;s emotion. It is a redirection of it. The Greek word for &ldquo;only&rdquo; (<em>monon</em>) creates a contrast: instead of fear, one thing &mdash; believe. Faith is not the absence of fear; it is the decision to trust in the face of fear. Jairus has already demonstrated faith by coming to Jesus in the first place; the command calls him to maintain that posture even when the situation has become worse than when he first asked." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The crowd that laughs at Jesus in v.39 represents a third response: contempt, the dismissal of the miraculous as impossible and therefore absurd. Jesus puts them all outside before he raises the girl. The miracle is witnessed only by the parents and the three disciples (Peter, James, and John) who entered with him &mdash; those who have not yet dismissed the possibility of what Jesus can do." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Messianic Secret and the Gentile Exception</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Mark&rsquo;s Gospel is famous for what scholars call the &ldquo;Messianic Secret&rdquo; &mdash; Jesus repeatedly instructs those he heals to tell no one. This pattern appears at the end of Mark 5: after raising Jairus&rsquo;s daughter, Jesus &ldquo;strictly charged them that no one should know this&rdquo; (v.43). The charge to secrecy prevents a premature, politically charged messianic movement from forming before Jesus&rsquo; mission is complete." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast with the Gerasene demoniac is striking. In Gentile territory, Jesus does the opposite: he commands the healed man to go and proclaim (v.19). The reason for the difference may be strategic: in Galilee and Judea, a messianic announcement would be politically explosive and premature; in the Decapolis, Gentile territory, there is no such danger of a messianic uprising. The healed man becomes a herald to the Gentile world that Jesus&rsquo; mission reaches beyond Israel. This is an early signal of what Paul will later call the gospel going &ldquo;to the Jew first and also to the Greek.&rdquo;" }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Address &ldquo;Daughter&rdquo; and the Dignity of the Outcast</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "When the healed woman comes forward trembling, Jesus addresses her as &ldquo;Daughter&rdquo; (v.34). This is the only place in the Synoptic Gospels where Jesus uses this term of address to a woman he heals. The word is not merely affectionate; it is relational and covenantal. It places her inside a family relationship &mdash; she is not merely a recipient of charity or power, but someone welcomed into a belonging." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The parallelism with Jairus&rsquo;s daughter is intentional. The woman is called &ldquo;daughter&rdquo; by Jesus in v.34; the girl is called &ldquo;little daughter&rdquo; (<em>thygatrion</em>) by Jairus in v.23. Both receive the same tenderness, the same attention, the same power. The social chasm between them &mdash; an unclean outcast woman and the daughter of a synagogue ruler &mdash; vanishes in Jesus&rsquo; presence. The address &ldquo;daughter&rdquo; is an equalizing word: it names both as belonging to the same family, under the same care." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-13 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-13: The Gerasene Demoniac</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Among the Tombs</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1-2</strong> &mdash; &ldquo;They came to the other side of the sea, to the country of the Gerasenes.&rdquo; The identification of the location varies in the manuscript tradition &mdash; some read Gadarenes (Matthew 8:28), others Gerasenes (Mark 5:1 ESV), reflecting the fluid geography of the Decapolis. The important point is that Jesus has crossed out of Jewish Galilee into pagan Gentile territory. As he steps out of the boat, he is immediately met by a man from the tombs. Mark&rsquo;s &ldquo;immediately&rdquo; (<em>euthys</em>) sets the pace: there is no period of settling in or preparation. The confrontation begins at once." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3-5</strong> &mdash; Mark describes the man&rsquo;s condition with vivid detail that reads like an eyewitness account: living in the tombs, unable to be restrained even with chains (which he broke), constantly crying out and cutting himself with stones. The self-harm and the chains underscore his total social exclusion and inner torment. The tombs &mdash; places of death and uncleanness &mdash; are his dwelling place. He is a man lost in every category: socially, spiritually, physically." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6-8</strong> &mdash; He sees Jesus from a distance and runs to him, falling in front of him. The demons speak through him: &ldquo;What have you to do with me, Jesus, Son of the Most High God? I adjure you by God, do not torment me.&rdquo; The irony is acute: the demons recognize Jesus with perfect theological precision (&ldquo;Son of the Most High God&rdquo;) while Israel&rsquo;s leaders remain blind. The demon&rsquo;s attempt to use a counter-adjuration formula (&ldquo;I adjure you by God&rdquo;) is a standard element of ancient exorcism practice &mdash; and it fails utterly." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9-10</strong> &mdash; Jesus asks for the name. &ldquo;My name is Legion, for we are many.&rdquo; The name is a confession of magnitude and perhaps of humiliation &mdash; a military term applied to demonic occupation. Their plea not to be sent &ldquo;out of the country&rdquo; is interesting: ancient demonology often assumed that spirits were attached to specific territories. They know their occupation of this Gentile land is about to end." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11-13</strong> &mdash; The great herd of pigs feeding on the hillside &mdash; already a marker of Gentile territory, since pigs were unclean under Jewish law &mdash; becomes the destination the demons request. Jesus gives permission; the unclean spirits enter the pigs; the herd rushes down the bank and drowns in the sea. The sea swallows them as the Red Sea swallowed Pharaoh&rsquo;s army &mdash; chaos returning to chaos, evil consuming itself." }} />
            </div>

            {/* vv.14-20 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 14-20: The Region Begs Jesus to Leave</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Sent to Proclaim</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14-17</strong> &mdash; The herdsmen flee and report it in the city and the countryside. People come out to see. They see the man &ldquo;sitting, clothed and in his right mind&rdquo; &mdash; and they are afraid (v.15). The same word is used for the disciples&rsquo; response to the storm-stilling and the women&rsquo;s response at the resurrection (Mark 16:8): <em>phobeomai</em>, to be seized with fear in the presence of the unexplainable. Those who had seen the pigs drowned add their account, and the community begs Jesus to leave their region (v.17). The economy has been disrupted; the supernatural is too close; comfort requires distance." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.18-20</strong> &mdash; As Jesus is getting into the boat, the healed man begs to go with him. The request is natural &mdash; grateful attachment to his deliverer. But Jesus refuses and gives him a commission instead: &ldquo;Go home to your friends and tell them how much the Lord has done for you, and how he has had mercy on you.&rdquo; The man goes and proclaims in the Decapolis &mdash; the ten-city Hellenistic region east of the Jordan &mdash; and everyone marvels. He is sent back into the community that had chained him, now as a herald of the God who freed him. The first Gentile missionary is a former demoniac." }} />
            </div>

            {/* vv.21-34 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 21-34: Jairus and the Bleeding Woman</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Power Out from Him</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.21-24</strong> &mdash; Jesus crosses back over the sea and a great crowd gathers. Jairus, &ldquo;one of the rulers of the synagogue,&rdquo; falls at Jesus&rsquo; feet and begs earnestly: &ldquo;My little daughter is at the point of death. Come and lay your hands on her, so that she may be made well and live&rdquo; (v.23). The laying on of hands is a standard gesture of blessing and healing in Jewish practice. Jairus asks for a physical act of connection. Jesus goes with him, and the crowd presses around him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.25-28</strong> &mdash; The woman appears mid-journey: twelve years of hemorrhaging, much suffering at the hands of physicians, all her money spent, growing worse. Having heard about Jesus, she comes up in the crowd behind him and touches his garment. &ldquo;For she said, &lsquo;If I touch even his garments, I will be made well.&rsquo;&rdquo; This is a compressed statement of faith: she does not need Jesus to stop, turn, speak, or acknowledge her. She believes that contact with the outer edge of his clothing is sufficient." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.29-30</strong> &mdash; &ldquo;And immediately (<em>euthys</em>) the flow of blood dried up, and she felt in her body that she was healed of her disease.&rdquo; At the same moment, Jesus &ldquo;perceived in himself that power had gone out from him.&rdquo; The Greek is <em>dunamis ex autou exelthousan</em> &mdash; power coming out from himself. This is not unconscious healing; it is a conscious perception of a directed release of healing power in response to a specific touch of faith." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.31-34</strong> &mdash; The disciples&rsquo; baffled response (&ldquo;the crowd presses around you, and yet you say &lsquo;Who touched me?&rsquo;&rdquo;) gives way to the woman coming forward in fear and trembling and falling before him. She tells him &ldquo;the whole truth&rdquo; &mdash; a phrase that suggests a full, unfiltered account. Jesus&rsquo; benediction is layered: &ldquo;Daughter, your faith has made you well; go in peace, and be healed of your disease.&rdquo; The Greek word for &ldquo;made you well&rdquo; (<em>sesoken</em>) is the same word used for salvation throughout the New Testament &mdash; &ldquo;your faith has saved you.&rdquo;" }} />
            </div>

            {/* vv.35-43 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 35-43: The Raising of Jairus&rsquo; Daughter</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Talitha Cumi</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.35-36</strong> &mdash; The messengers arrive while Jesus is still speaking to the woman: &ldquo;Your daughter is dead. Why trouble the Teacher any further?&rdquo; The message is compassionate but fatalistic &mdash; there is a category of problem beyond which even a great teacher or healer cannot help. Death is that category. Jesus overhears and says to Jairus: &ldquo;Do not fear, only believe.&rdquo; He does not acknowledge the messengers&rsquo; verdict. He reframes the situation entirely with a single command: believe." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.37-39</strong> &mdash; Jesus takes only Peter, James, and John with him &mdash; the inner circle of the Twelve. At the house, he encounters the noise of professional mourning: flute players, weeping, wailing (&ldquo;making a commotion&rdquo;). He says: &ldquo;Why are you making a commotion and weeping? The child is not dead but sleeping.&rdquo; The crowd laughs at him (<em>katagelao</em>, to mock or deride). Their laughter is the honest response of people operating inside the ordinary world, where death is final. Jesus is operating inside a different frame of reference entirely." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.40-41</strong> &mdash; Having put the mourners outside, Jesus takes the child&rsquo;s father and mother and his three disciples into the room where the child was lying. He takes her by the hand and says to her: &ldquo;Talitha cumi,&rdquo; which Mark translates: &ldquo;Little girl, I say to you, arise.&rdquo; The preservation of the Aramaic phrase is a mark of the tradition&rsquo;s antiquity and specificity: this is the actual word Jesus spoke, preserved in the original language as a kind of sacred memory." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.42-43</strong> &mdash; &ldquo;And immediately (<em>euthys</em>) the girl got up and began walking (for she was twelve years of age), and they were immediately overcome with amazement.&rdquo; She gets up and walks. Jesus gives two instructions: tell no one (the Messianic Secret), and give her something to eat. The second instruction is practically tender and theologically meaningful &mdash; she is genuinely, bodily, hungrily alive. This is resurrection to ordinary life, not a disembodied spiritual state." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>No Condition Is Beyond His Reach</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The demoniac in Mark 5 represents the outer boundary of human hopelessness: cut off from community, from worship, from human contact, from his own sanity. He lives among the dead because the living have given up on him. The chapter opens with the implicit question: is there anyone so far gone that Jesus cannot reach them?" }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The answer is no. Not Legion. Not twelve years of wasting illness. Not death itself. Mark 5 argues by escalation: Jesus can do what no human can do, then something still more impossible than that, then something beyond impossibility altogether. The person we have given up on &mdash; the situation we have written off &mdash; is not beyond the reach of the God who acted in Mark 5. This is not a promise that every prayer for healing will produce the outcome we want; it is a statement about the nature of the power at work in Jesus." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>The Touch of Desperate Faith</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The bleeding woman did not make an appointment, approach through proper channels, or even announce herself. She came from behind in the crowd and touched the edge of a garment. Her faith was shaped entirely by desperation and by what she had heard about Jesus. &ldquo;Having heard the reports about Jesus&rdquo; (v.27) was sufficient foundation for her to act." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is not that we should approach Jesus furtively or without boldness; it is that the quality of access required is not social standing, religious purity, or doctrinal precision &mdash; it is the willingness to reach out. Jesus noticed her touch not because of its technique but because of its faith. And he stopped a journey, stopped for her, called her out by name (&ldquo;Daughter&rdquo;), and pronounced her healed and at peace. The crowd pressed; she reached. The difference was not proximity but intention." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Do Not Fear, Only Believe</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jairus hears that his daughter has died, and Jesus says: &ldquo;Do not fear, only believe.&rdquo; The command does not tell Jairus his fear is wrong; it tells him what to do with it. Fear is not the opposite of faith; despair &mdash; the cessation of trust &mdash; is the opposite of faith. Jairus can be afraid and still keep walking toward the house. He can feel the weight of the news and still let Jesus continue." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This is the pastoral heart of the verse. When the worst news arrives &mdash; when the situation has moved from &ldquo;at the point of death&rdquo; to &ldquo;she has died&rdquo; &mdash; Jesus&rsquo; words do not minimize the news or offer easy comfort. They offer a different frame of reference. In this frame, death is not the final word; it is the penultimate word. The final word is &ldquo;Talitha cumi.&rdquo;" }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Sent Back Into the Community That Rejected You</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The healed demoniac wants to go with Jesus &mdash; and Jesus sends him back to the people who had chained him. This is one of the harder dimensions of the story. The natural response to radical healing is attachment to the healer and separation from the painful past. Jesus reverses the instinct: go back to your friends; go back to the community; go back to the place where you were known at your worst." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The man who was bound becomes a proclaimer of freedom. His very presence in the Decapolis is an argument for Jesus &mdash; everyone knew what he had been. The authenticity of his testimony was grounded in the contrast between then and now. The most powerful witness is often the person sent back into the community that knew them in their devastation. They cannot argue with the change they can see." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "The Gerasene community begged Jesus to leave after the miracle. Have you ever encountered a response to the work of God that looked like fear and rejection rather than wonder and worship? What produced that response?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The bleeding woman&rsquo;s faith was formed by what she &ldquo;heard about Jesus&rdquo; (v.27). What you have heard about Jesus shapes what you believe he can do. What reports about Jesus have most formed your faith?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Jesus distinguishes between the crowd&rsquo;s pressing and the woman&rsquo;s touch of faith (vv.30-31). What is the difference between proximity to Jesus and genuine contact with him through faith?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The intercalated structure means the &ldquo;delay&rdquo; caused by the woman resulted in an upgraded miracle for Jairus. Have you experienced a situation where what appeared to be a devastating delay turned out to expand rather than frustrate God&rsquo;s purpose?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Jesus tells Jairus &ldquo;do not fear, only believe.&rdquo; How do you practice believing when the worst news arrives? What does &ldquo;only believe&rdquo; look like in a moment of acute grief or loss?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord Jesus, you crossed to the other side of the sea and stepped into a place of death and chains and drove out Legion with a word. You felt the touch of a desperate woman in a pressing crowd and stopped everything to meet her. You took a dead girl by the hand and called her by name into life. Do not let me believe that my situation is beyond you. Give me the courage to press through the crowd and reach for you. When the worst news comes, let your words to Jairus be my anchor: do not fear, only believe. And when you heal and restore, send me back &mdash; as you sent the healed man &mdash; to tell what you have done. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Mark 5.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
