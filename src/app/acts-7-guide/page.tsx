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
  "The History of Israel",
  "Moses and the Wilderness",
  "The Temple Not Made with Hands",
  "Stephen Is Stoned",
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
    heading: "Overview of Acts 7",
    reference: "Acts 7:1&ndash;60",
    paragraphs: [
      "Acts 7 is the longest speech in the book of Acts and one of the most remarkable sermons in all of Scripture. Stephen, a man &ldquo;full of faith and of the Holy Spirit&rdquo; (Acts 6:5), has been seized by members of the synagogue who could not withstand his wisdom. False witnesses testify that he has spoken against Moses, against God, against the Temple, and against the law &mdash; the same categories of accusation once leveled at Jesus. The high priest asks whether the charges are true, and Stephen&rsquo;s answer is not a defense but a theological history of Israel delivered to the very men who are about to condemn him.",
      "The speech is a sweeping retelling of Israel&rsquo;s story from Abraham through Joseph, Moses, the wilderness, the tabernacle, David, Solomon, and the prophets. It is structured around a single, devastating thesis: Israel has a persistent pattern of rejecting the very messengers and deliverers God sends them. They rejected Joseph; they rejected Moses not once but twice; they rejected the prophets; and now they have rejected and murdered &ldquo;the Righteous One&rdquo; (7:52). The people who boast in the law, Stephen charges, are the people who never kept it.",
      "The climax of the speech comes in a direct accusation: &ldquo;You stiff-necked people, uncircumcised in heart and ears, you always resist the Holy Spirit. As your fathers did, so do you. Which of the prophets did your fathers not persecute? And they killed those who announced beforehand the coming of the Righteous One, whom you have now betrayed and murdered &mdash; you who received the law as delivered by angels and did not keep it&rdquo; (7:51&ndash;53). This is not a polished diplomacy; it is prophetic denunciation in the tradition of Moses, Elijah, and Jeremiah.",
      "The response of the Sanhedrin is exactly what Stephen&rsquo;s speech diagnosed: they are enraged, they gnash their teeth, they stop their ears, they rush upon him as one man, and they drag him outside the city to stone him. But before they do, Stephen, full of the Holy Spirit, gazes into heaven and sees the glory of God and Jesus standing at the right hand of God &mdash; standing, as if rising to receive his servant. He declares what he sees. They stone him. He prays the two prayers that reveal his character: &ldquo;Lord Jesus, receive my spirit,&rdquo; and &ldquo;Lord, do not hold this sin against them.&rdquo; Then he falls asleep.",
      "Acts 7 stands at a hinge point in Luke&rsquo;s narrative. The death of Stephen is the event that triggers the great persecution that scatters the Jerusalem church throughout Judea and Samaria &mdash; thus fulfilling the commission of Acts 1:8 in ways the disciples had not anticipated. And there is one more detail the narrator places with care: &ldquo;And the witnesses laid down their garments at the feet of a young man named Saul&rdquo; (7:58). The man who will carry the gospel to the ends of the earth is present at the first Christian martyrdom, consenting to Stephen&rsquo;s death. The great reversal of Saul&rsquo;s life is already in motion.",
      "Stephen is often called the first Christian martyr, and his death is patterned after the death of Jesus in striking detail. Like Jesus, he is accused of speaking against the Temple and the law. Like Jesus, he is brought before the council on false testimony. Like Jesus, he forgives those who kill him. Like Jesus, he commits his spirit into the hands of God. Luke is presenting Stephen&rsquo;s martyrdom as the first reproduction of the pattern of the cross in the life of a follower of Jesus &mdash; and thereby showing what it looks like to take up one&rsquo;s cross and follow.",
    ],
  },
  {
    id: "The History of Israel",
    heading: "The History of Israel",
    reference: "Acts 7:2&ndash;22",
    paragraphs: [
      "Stephen begins his address with a respectful but pointed salutation &mdash; &ldquo;Brothers and fathers, hear me&rdquo; &mdash; and then immediately plants his feet in the narrative of Abraham. &ldquo;The God of glory appeared to our father Abraham when he was in Mesopotamia, before he lived in Haran, and said to him, &lsquo;Go out from your land and from your kindred and go into the land that I will show you&rsquo;&rdquo; (7:2&ndash;3). The stress on Mesopotamia is deliberate: the God of Israel is not localized to the land of Canaan or confined to any particular temple. He appeared to Abraham outside the promised land, in a foreign country, before there was yet a promised land to speak of.",
      "The same point is reinforced in the story of Jacob. The patriarchs went down to Egypt; Jacob died there. And yet God&rsquo;s purpose was not thwarted by geography or by death. Joseph, whom his brothers sold into slavery out of jealousy &mdash; &ldquo;But God was with him&rdquo; (7:9) &mdash; became the instrument of rescue for the very brothers who had betrayed him. Stephen is already building the pattern: God works through the rejected one. The one cast out by his brothers becomes the savior of those brothers. The parallel to Jesus is unmistakable to Luke&rsquo;s reader, even if the Sanhedrin chooses not to see it.",
      "The story of Moses receives the most elaborate treatment in Stephen&rsquo;s speech, and it begins with Moses in Egypt. &ldquo;Moses was instructed in all the wisdom of the Egyptians, and he was mighty in his words and deeds&rdquo; (7:22). Stephen is not diminishing Moses &mdash; he is establishing him as a figure of genuine greatness before narrating his rejection. When Moses, at forty years old, sees an Israelite being mistreated and kills the Egyptian, he acts under the assumption that his brothers will understand that God is giving them salvation by his hand. &ldquo;But they did not understand&rdquo; (7:25). The deliverer is not recognized.",
      "The pattern of rejection is stark. The next day Moses tries to reconcile two quarreling Israelites, and the one in the wrong pushes him aside: &ldquo;Who made you a ruler and a judge over us? Do you want to kill me as you killed the Egyptian yesterday?&rdquo; (7:27&ndash;28). Stephen quotes these words with precision, because the Sanhedrin sitting before him has, in the person of the rulers who condemned Jesus, asked essentially the same question of the Messiah. The rejection of Moses by those he came to deliver is a type of the rejection of Jesus by the nation he came to save.",
      "Moses flees to Midian, where he becomes a sojourner and has two sons. Forty years pass. And then the God who appeared in Mesopotamia appears again &mdash; this time in the wilderness of Sinai, in a burning bush &mdash; and commissions Moses to return to Egypt. &ldquo;I have surely seen the mistreatment of my people who are in Egypt, and have heard their groaning, and I have come down to deliver them&rdquo; (7:34). Stephen&rsquo;s point is again geographical: this divine commission takes place not in the Temple, not in Jerusalem, not in the land of Israel, but in the wilderness, in a foreign country. God is not confined to sacred precincts.",
      "Stephen concludes this section of the speech by identifying Moses explicitly as the one who &ldquo;received living oracles to give to us&rdquo; (7:38) &mdash; the law that the Sanhedrin claims to honor. But he has already set up the accusation he will make explicit at the end: the same Moses who gave them the law was the one they refused. The law did not come from a God confined to a building in Jerusalem; it came through a man whom Israel rejected, in a wilderness outside the land, at the command of a God whose glory had already appeared in Mesopotamia. The whole speech is dismantling the Sanhedrin&rsquo;s confidence that they are the custodians of God&rsquo;s presence.",
    ],
  },
  {
    id: "Moses and the Wilderness",
    heading: "Moses and the Wilderness",
    reference: "Acts 7:35&ndash;43",
    paragraphs: [
      "Having established the pattern of Moses&rsquo; initial rejection, Stephen now narrates Israel&rsquo;s behavior in the wilderness &mdash; and it is devastating. The very Moses whom they had refused with the words &ldquo;Who made you a ruler and a judge?&rdquo; is the one God sent as both ruler and redeemer, with the help of the angel who appeared to him in the bush. He led them out, performing wonders and signs in Egypt and at the Red Sea and in the wilderness, for forty years. He is the Moses who said, &ldquo;God will raise up for you a prophet like me from your brothers&rdquo; (7:37) &mdash; the prophetic word that the early church understood as pointing to Jesus.",
      "But what did Israel do with this great deliverer in the wilderness? &ldquo;Our fathers refused to obey him, but thrust him aside, and in their hearts they turned to Egypt&rdquo; (7:39). The verb &ldquo;thrust aside&rdquo; is the same word used in 7:27 when the quarreling Israelite thrust Moses aside. The rejection is structural: Israel&rsquo;s relationship with its divinely appointed leaders has been a relationship of rejection from the very beginning. And the turning of their hearts to Egypt is not merely a metaphor for nostalgic discontent &mdash; it produced the golden calf.",
      "The golden calf episode is central to Stephen&rsquo;s argument. While Moses was on the mountain receiving the law, Aaron was at the foot of the mountain making a golden image and the people were &ldquo;rejoicing in the works of their hands&rdquo; (7:41). The people who had seen the plagues of Egypt, the crossing of the Red Sea, the pillar of cloud and fire &mdash; those very people made a golden calf at the foot of Sinai. Their idolatry was not the product of ignorance; it was the product of a heart that, even in the immediate presence of God&rsquo;s mighty acts, chose to turn away.",
      "Stephen reaches to the prophet Amos to press the point further. He quotes God&rsquo;s word through Amos: &ldquo;Did you bring to me slain beasts and sacrifices, during the forty years in the wilderness, O house of Israel? You took up the tent of Moloch and the star of your god Rephan, the images that you made to worship; and I will send you into exile beyond Babylon&rdquo; (7:42&ndash;43, quoting Amos 5:25&ndash;27). The wilderness generation was not a golden age of faithfulness; it was a generation that combined the outward form of the tabernacle with the inward reality of idolatry. The judgment of exile was not a rupture in God&rsquo;s relationship with Israel; it was the culmination of a pattern of rejection that began in the wilderness.",
      "The rhetorical force of this section on the wilderness is aimed at the Sanhedrin&rsquo;s claim to be faithful custodians of the Mosaic tradition. Stephen is arguing that the Mosaic tradition itself indicts them. Moses was rejected in the wilderness. The prophets were persecuted. And now they stand in the tradition of their fathers, having betrayed and murdered the Righteous One. To honor Moses, as they claim to do, would require recognizing Jesus as the prophet Moses foretold. Their rejection of Jesus is therefore not faithfulness to Moses but a continuation of Israel&rsquo;s ancient pattern of rejecting the very messengers God sends.",
      "Stephen&rsquo;s treatment of the wilderness is also a challenge to any form of religion that mistakes external observance for internal faithfulness. The wilderness generation had the tabernacle, the sacrifices, the law given through Moses &mdash; and they were still idolaters. The Sanhedrin has the Temple, the law, the tradition of Moses &mdash; and they have killed the prophets and now the Righteous One. Outward religious structures do not guarantee inward fidelity to the God who demands the whole heart. This is the confrontation at the center of Stephen&rsquo;s speech, and it is the confrontation that will cost him his life.",
    ],
  },
  {
    id: "The Temple Not Made with Hands",
    heading: "The Temple Not Made with Hands",
    reference: "Acts 7:44&ndash;50",
    paragraphs: [
      "Stephen turns now to the tabernacle and the Temple &mdash; the heart of the false accusation against him. He was charged with speaking against the holy place. His answer is not to deny that the Temple matters, but to reframe it within the larger story of God&rsquo;s purposes. He begins with the tabernacle in the wilderness &mdash; the tent of witness, made according to the pattern God showed Moses on Sinai. The tabernacle was the authentic dwelling of God&rsquo;s presence among his people in the wilderness, carried with them in their journeys, present in their sojourning. It was portable, not fixed; it moved with the people under the direction of God.",
      "The tabernacle was brought into the land under Joshua, Stephen notes, and was present in Canaan until the time of David. David found favor with God and asked to find a dwelling place for the God of Jacob. But it was Solomon who built the house. Stephen acknowledges this straightforwardly &mdash; he is not denying the reality of the Temple or its place in Israel&rsquo;s history. What he is doing is insisting that the Temple must be understood in the light of the word God himself spoke about it through the prophet Isaiah.",
      "The quotation that follows is the climax of this section: &ldquo;Yet the Most High does not dwell in houses made by hands, as the prophet says, &lsquo;Heaven is my throne, and the earth is my footstool. What kind of house will you build for me, says the Lord, or what is the place of my rest? Did not my hand make all these things?&rsquo;&rdquo; (7:48&ndash;50, quoting Isaiah 66:1&ndash;2). This is not Stephen&rsquo;s invention; it is Scripture&rsquo;s own qualification of the Temple. Solomon himself said at the dedication of the Temple that heaven and the highest heaven cannot contain God (1 Kings 8:27). The prophetic tradition was always clear that God cannot be housed.",
      "The phrase &ldquo;made by hands&rdquo; is theologically charged in both the Old and New Testaments. It is the standard language for idols &mdash; things fashioned by human craft rather than ordained by God. Stephen is not saying the Temple is equivalent to an idol, but he is suggesting that when the Temple is treated as if God is confined to it, as if the presence of the building guarantees the presence and favor of God, it is being used in a way that approaches idolatry. The Temple was meant to be a place of prayer for all nations, a symbolic center pointing to the God who fills heaven and earth, not a magical guarantee of divine protection.",
      "The Sanhedrin is particularly vulnerable to this charge because the Temple theology of the Second Temple period had become deeply entwined with national identity and political power. The Temple was the center of the priestly establishment, the source of the high priest&rsquo;s authority, and the symbol of Jewish distinctiveness under Roman occupation. To question the Temple was to question all of these. Stephen&rsquo;s argument is that the prophets themselves &mdash; the Scripture the Sanhedrin claims to revere &mdash; taught that God cannot be confined to a building. They are defending an institution in a way that contradicts their own Scriptures.",
      "The theological point Stephen is making anticipates the letter to the Hebrews and the Gospel of John. Jesus declared that he would destroy this Temple and raise it in three days (John 2:19), identifying his own body as the true Temple. The author of Hebrews argues that the earthly tabernacle and Temple were always only copies and shadows of the heavenly reality (Hebrews 8:5). What Stephen is arguing in Acts 7 will become the full Christological and ecclesiological claim of the New Testament: the living God dwells not in buildings made by human hands but in the living community of the Spirit, in the body of the risen Christ, and in the hearts of those in whom the Spirit takes up residence.",
    ],
  },
  {
    id: "Stephen Is Stoned",
    heading: "Stephen Is Stoned",
    reference: "Acts 7:51&ndash;60",
    paragraphs: [
      "The speech reaches its most confrontational point in its final verses. Stephen does not soften his conclusion; he sharpens it to a point: &ldquo;You stiff-necked people, uncircumcised in heart and ears, you always resist the Holy Spirit. As your fathers did, so do you. Which of the prophets did your fathers not persecute? And they killed those who announced beforehand the coming of the Righteous One, whom you have now betrayed and murdered &mdash; you who received the law as delivered by angels and did not keep it&rdquo; (7:51&ndash;53). The phrase &ldquo;stiff-necked&rdquo; is drawn from God&rsquo;s description of Israel at Sinai (Exodus 32:9); &ldquo;uncircumcised in heart&rdquo; is the prophetic diagnosis of the covenant people&rsquo;s deep unfaithfulness (Deuteronomy 10:16; Jeremiah 9:26). Stephen is using their own Scriptures to indict them.",
      "The response of the council is visceral and unanimous. &ldquo;When they heard these things they were enraged, and they ground their teeth at him&rdquo; (7:54). The grinding of teeth is the language of helpless, murderous fury &mdash; the same phrase used in the Psalms for the rage of the wicked against the righteous (Psalm 37:12; 112:10). They cannot refute him; they can only silence him. And in their rage they reveal the very pattern Stephen has just described: they are responding to a messenger of God the way their fathers responded to the prophets, the way Israel responded to Moses in the wilderness.",
      "But before the fury of the council can act, Stephen sees something. &ldquo;But he, full of the Holy Spirit, gazed into heaven and saw the glory of God, and Jesus standing at the right hand of God. And he said, &lsquo;Behold, I see the heavens opened, and the Son of Man standing at the right hand of God&rsquo;&rdquo; (7:55&ndash;56). The vision is the counterpoint to the earthly scene. The Sanhedrin sees a man about to be condemned; Stephen sees the risen Jesus, not seated as in the normal description of Psalm 110:1, but standing &mdash; as if to receive his servant, as if witnessing his testimony, as if rising to welcome him home.",
      "The title Stephen uses &mdash; &ldquo;Son of Man&rdquo; &mdash; is the title Jesus used for himself at his own trial before this same council (Luke 22:69). At that trial, Jesus said, &ldquo;From now on the Son of Man shall be seated at the right hand of the power of God.&rdquo; Now Stephen, standing trial before the same council, sees exactly what Jesus described &mdash; the Son of Man, at the right hand of God. The vision confirms Jesus&rsquo; own word. It also constitutes the blasphemy charge all over again, and the council reacts accordingly: they cry out with a loud voice, stop their ears, and rush together at him.",
      "They drag Stephen outside the city &mdash; a detail Luke records because stoning was required to take place outside the walls of Jerusalem &mdash; and begin to stone him. The witnesses who testify against him now become his executioners, as the law prescribed: those who brought the accusation were required to cast the first stone. &ldquo;And as they were stoning Stephen, he called out, &lsquo;Lord Jesus, receive my spirit.&rsquo; And falling to his knees he cried out with a loud voice, &lsquo;Lord, do not hold this sin against them.&rsquo; And when he had said this, he fell asleep&rdquo; (7:59&ndash;60). The two prayers &mdash; for himself and for his murderers &mdash; mirror the two prayers of Jesus on the cross (Luke 23:34, 46).",
      "Luke closes the scene with a final, charged detail: &ldquo;And Saul approved of his execution&rdquo; (8:1). The man standing nearby, watching the garments of the witnesses, is not a passive bystander &mdash; he is consenting. The Greek word used for Saul&rsquo;s approval is the same word used in legal contexts for formal agreement with a judicial verdict. Saul is, in his own mind, doing the right thing; he is a zealous defender of the law and the traditions of his fathers. He will be doing the same thing &mdash; persecuting the church throughout the region &mdash; until the risen Jesus appears to him on the road to Damascus and asks, &ldquo;Saul, Saul, why are you persecuting me?&rdquo; The one who approved Stephen&rsquo;s death will be transformed into the one who bears Stephen&rsquo;s message to the nations.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Acts 7 Today",
    reference: "Acts 7 &mdash; For the Life of the Church",
    paragraphs: [
      "Acts 7 confronts every generation of Christians with a question about the relationship between institutional religion and living faithfulness. The Sanhedrin in Stephen&rsquo;s day were not irreligious men &mdash; they were the custodians of the Temple, the guardians of the law, the leaders of the covenant people. Their problem was not that they lacked religious structures or sacred texts. Their problem was that they had come to mistake the structures for the substance, the building for the God who cannot be housed in buildings. Stephen&rsquo;s question hangs over every church: are we defending the living God, or are we defending our own institutions in God&rsquo;s name?",
      "The pattern Stephen traces &mdash; God sends a deliverer, the people reject the deliverer, the deliverer is nevertheless vindicated &mdash; is a pattern that should shape how Christians read both the Old Testament and their own experience. Joseph was sold by his brothers; God was with him and raised him to rule over them. Moses was rejected by his own people; God sent him back as ruler and redeemer. The prophets were persecuted; their words outlasted the kingdoms that persecuted them. Jesus was betrayed and murdered; God raised him from the dead. The pattern teaches that faithfulness is not measured by immediate acceptance, and that God&rsquo;s purposes are not defeated by human rejection.",
      "Stephen&rsquo;s death also speaks to the question of how to face opposition as a witness for Christ. He does not recant when the opposition intensifies. He does not soften his message when he sees the anger rising in his audience. He does not pray for rescue from the stones. He prays for his murderers. He entrusts his spirit to Jesus. He falls asleep. The portrait of Stephen in his death is a portrait of a man who had internalized the message he preached &mdash; that Jesus, who died forgiving his enemies, had been raised and was standing at God&rsquo;s right hand. Stephen died believing exactly what he preached, and he died in the manner of the one he preached.",
      "The vision Stephen receives &mdash; the heavens opened and Jesus standing at the right hand of God &mdash; is also a pastoral gift to the church in every age of persecution. It is a reminder that the risen Christ is not an absentee sovereign, watching from a distance. He is present to his people in their suffering; he sees; he stands; he receives their spirits. The dying martyr is not alone. The Stephen who prays &ldquo;Lord Jesus, receive my spirit&rdquo; is praying to the one he can see, standing at the right hand of the Father, ready to receive him. This is the faith that enables not just Stephen but every martyr and every suffering saint to face what they must face.",
      "The presence of Saul at Stephen&rsquo;s death is one of the great narrative ironies of the book of Acts, and it has its own application for how we think about God&rsquo;s purposes in apparent defeats. Stephen is dead; Saul is consenting; the church is about to be scattered by a great persecution. From the inside, it looks like a catastrophe for the gospel. But within a chapter, the scattered believers are preaching the word wherever they go (Acts 8:4), and within a few chapters, the great persecutor is himself a convert. God&rsquo;s purposes are not frustrated by the death of his servants. They are sometimes advanced through it in ways no one could have predicted.",
      "Finally, Stephen&rsquo;s prayer for his murderers &mdash; &ldquo;Lord, do not hold this sin against them&rdquo; &mdash; is one of the most searching verses in the New Testament for any Christian who struggles to forgive those who have wronged them. Stephen is praying for the men who are, in that very moment, killing him. He is asking God not to count this sin against them. This is not a sentiment that arises naturally from human psychology; it is the direct fruit of a life soaked in the cross. The community that takes Stephen&rsquo;s prayer seriously must ask itself whether it is willing to pray for those who persecute it &mdash; not metaphorically, but actually, in the manner of the first martyr who followed the Savior into death and into the pattern of forgiving love.",
    ],
  },
];

const videoItems = [
  { videoId: "obdPkXMdQpg", title: "BibleProject - Overview of Acts 1-12" },
  { videoId: "xI3LBGF4pPQ", title: "Stephen's Speech - Acts 7 Study and Commentary" },
  { videoId: "qJNdOj2FZXY", title: "The First Christian Martyr - Stephen in Acts 6-7" },
  { videoId: "VBCM3VYFcMI", title: "Acts 7 - Israel's History and the Stoning of Stephen" },
];

export default function Acts7GuidePage() {
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
            Acts 7 &mdash; Stephen&rsquo;s Speech and Martyrdom
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Falsely accused before the Sanhedrin, Stephen delivers a sweeping sermon tracing Israel&rsquo;s history from Abraham through Moses to the Temple. He concludes: &ldquo;You always resist the Holy Spirit.&rdquo; They stone him. He sees heaven opened, the Son of Man standing at God&rsquo;s right hand, and dies praying for his murderers &mdash; while Saul consents to his death.
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
              Deepen your study of Acts 7 through these video teachings on Stephen&rsquo;s speech before the Sanhedrin, his sweeping history of Israel, his vision of the Son of Man, and his death as the first Christian martyr.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Lord, Do Not Hold This Sin Against Them</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Acts 7 is the chapter of the first martyr and the first great reversal: the man who consents at Stephen&rsquo;s death becomes the apostle to the nations. Stephen&rsquo;s speech shows that God cannot be confined to buildings made by human hands, and his death shows that God&rsquo;s witnesses are not alone in their suffering &mdash; the Son of Man stands at the right hand of God, ready to receive his servant home.
          </p>
        </div>
      </main>
    </div>
  );
}
