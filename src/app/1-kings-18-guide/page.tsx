"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Challenge on Carmel",
  "The Prophets of Baal Fail",
  "Elijah Prepares the Altar",
  "Fire Falls from Heaven",
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
    heading: "Overview of 1 Kings 18",
    reference: "1 Kings 18:1&ndash;46",
    paragraphs: [
      "First Kings 18 is one of the most dramatic chapters in the entire Old Testament &mdash; a chapter of fire and rain, of a lone prophet against an empire of false religion, of a people brought back from the brink of total apostasy by a single act of divine power. It arrives at the climax of Israel&rsquo;s descent into Baal worship under King Ahab and his Phoenician queen Jezebel. Three years have passed since Elijah declared a drought; three years in which the land has dried up, the God of Israel has seemed to be absent, and the prophets of the Lord have been hunted and killed while the prophets of Baal have flourished at the royal court. Then the word of the LORD comes to Elijah: &ldquo;Go, show yourself to Ahab, and I will send rain upon the earth&rdquo; (18:1).",
      "The chapter moves in three distinct acts. The first act (verses 1&ndash;19) is the buildup to the confrontation: Elijah meets Obadiah, a devout official in Ahab&rsquo;s household who has hidden a hundred prophets of the LORD; Elijah confronts Ahab face to face; and Ahab agrees to Elijah&rsquo;s proposal to gather all Israel and the 450 prophets of Baal to Mount Carmel. The second act (verses 20&ndash;40) is the contest itself &mdash; Baal&rsquo;s humiliating silence, Elijah&rsquo;s preparation of the altar, the prayer, the fire, the response of the people, and the execution of Baal&rsquo;s prophets. The third act (verses 41&ndash;46) is the coming of rain after three years of drought, as Elijah prays seven times on the mountain before the cloud appears and the downpour begins.",
      "The theological center of the chapter is the question Elijah poses to the assembled people: &ldquo;How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him&rdquo; (18:21). Israel has not abandoned the LORD formally; they have simply added Baal alongside him, treating the storm-god of the Phoenicians as a supplement to the God of the covenant. Elijah&rsquo;s contest on Carmel is designed to make that compromise impossible &mdash; to force the question to its binary conclusion. By the end of the chapter, the binary has been resolved: &ldquo;The LORD, he is God; the LORD, he is God&rdquo; (18:39).",
      "The chapter also reveals the character of Elijah in ways that make his subsequent collapse in chapter 19 all the more understandable. He is a man of extraordinary spiritual boldness &mdash; willing to confront a king who has been searching for him to kill him, willing to stand alone against 450 prophets, willing to drench his sacrifice with water at what appears to be the worst possible moment. But the very intensity of the Carmel experience, followed by Jezebel&rsquo;s immediate death threat, will leave him in a crater of exhaustion and despair that God will have to address with food, rest, and a still small voice.",
      "For the Christian reader, 1 Kings 18 is an enduring witness to the reality that the God of the Bible is a living God who acts in history &mdash; not merely a theological concept or a moral framework, but the God who answers by fire. The contest on Carmel demonstrates what the rest of Scripture also teaches: that the silence of false gods is not a matter of their absence from the contest but of their absence from existence. Baal was not a real divine being who happened to lose a competition; he was a human projection, a manufactured deity who could receive a thousand prayers and answer none of them because there was no one there to answer. The LORD, by contrast, acts &mdash; in fire, in rain, in the still small voice &mdash; because he is.",
      "The New Testament echo of 1 Kings 18 comes in James 5:17&ndash;18, where James writes, &ldquo;Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth. Then he prayed again, and heaven gave rain, and the earth bore its fruit.&rdquo; James&rsquo; purpose is not to celebrate Elijah&rsquo;s uniqueness but to establish his ordinariness: a man like us, whose prayers moved heaven and earth. The application to the church is direct and urgent: &ldquo;The prayer of a righteous person has great power as it is working&rdquo; (James 5:16).",
    ],
  },
  {
    id: "The Challenge on Carmel",
    heading: "The Challenge on Carmel",
    reference: "1 Kings 18:1&ndash;24",
    paragraphs: [
      "The background to the challenge on Carmel is the spiritual catastrophe that Ahab and Jezebel have presided over in Israel. Jezebel has been systematically killing the prophets of the LORD; Obadiah, a God-fearing official in Ahab&rsquo;s palace, has hidden a hundred of them in caves and supplied them with bread and water at enormous personal risk. The contrast between Obadiah&rsquo;s quiet, costly faithfulness and the public spectacle of the Baal prophets feasting at Jezebel&rsquo;s table is deliberately drawn by the narrator. Faithfulness to the LORD in Ahab&rsquo;s Israel is a dangerous, hidden, survival-mode existence.",
      "Elijah&rsquo;s meeting with Obadiah on the road is charged with tension. When Obadiah recognizes him and falls on his face, Elijah&rsquo;s instructions are simple and terrifying: go tell Ahab that Elijah is here. Obadiah&rsquo;s response reveals how thoroughly Elijah&rsquo;s disappearance over three years has baffled and frightened everyone: &ldquo;As the LORD your God lives, there is no nation or kingdom where my lord has not sent to seek you. And when they would say, &lsquo;He is not here,&rsquo; he would take an oath of the kingdom or nation, that they had not found you&rdquo; (18:10). Elijah has been the most wanted man in Israel, and now he is proposing to walk back into the center of power.",
      "The face-to-face meeting between Elijah and Ahab is brief and electrifying. Ahab&rsquo;s first words are an accusation: &ldquo;Is it you, you troubler of Israel?&rdquo; (18:17). Ahab blames the drought on Elijah, the man who proclaimed it, rather than on the sin that caused it. Elijah&rsquo;s reply redirects the accusation with precision: &ldquo;I have not troubled Israel, but you have, and your father&rsquo;s house, because you have abandoned the commandments of the LORD and followed the Baals&rdquo; (18:18). In two sentences, Elijah defines the terms of the confrontation: the drought is not a weather event or a natural disaster; it is the direct consequence of Israel&rsquo;s apostasy, and the person responsible for that apostasy is not the prophet but the king.",
      "Elijah&rsquo;s proposal for the contest is stated with calm assurance: gather all Israel and the 450 prophets of Baal and the 400 prophets of Asherah who eat at Jezebel&rsquo;s table and bring them to Mount Carmel. The choice of location is significant. Carmel was a place associated with the worship of the LORD &mdash; it would later become one of Elisha&rsquo;s regular haunts &mdash; but it was also a high place where Baal worship had been practiced. Elijah is proposing a contest on contested ground, in a location where Baal should have some advantage as the supposed lord of the mountain heights and storm.",
      "The terms of the contest, once the assembly gathers, are stated publicly and simply: two bulls, two altars, no fire. Each side will call on their god; whichever god answers by fire, he is God. &ldquo;And all the people answered, &lsquo;It is well spoken&rsquo;&rdquo; (18:24). The people recognize the fairness of the test. Baal was worshiped as a storm-god, a deity associated with lightning, thunder, and rain &mdash; precisely the phenomena that involve fire from the sky. If Baal cannot produce fire when directly called upon for it, the claim of his worship is exposed as empty. The test is perfectly calibrated to Baal&rsquo;s own supposed domain.",
      "What makes this moment in the chapter so powerful is the isolation of Elijah&rsquo;s position. He stands alone against 450 prophets of Baal and 400 prophets of Asherah &mdash; 850 official religious functionaries backed by the full power of the royal court against a single fugitive prophet. The people have not declared themselves; they are the audience at a contest whose result will determine the direction of the nation. The asymmetry of human resources is so extreme that any outcome other than Baal&rsquo;s victory would be difficult to explain on human terms &mdash; which is precisely why, when the fire falls, there will be no doubt about its source.",
    ],
  },
  {
    id: "The Prophets of Baal Fail",
    heading: "The Prophets of Baal Fail",
    reference: "1 Kings 18:25&ndash;29",
    paragraphs: [
      "Elijah allows the prophets of Baal to go first, and what follows is one of the most extended scenes of liturgical futility in all of Scripture. The prophets of Baal take the bull, prepare it, and call on the name of Baal from morning until noon. They cry out, they dance, they perform the rituals of their religion with all the intensity of devotees who have every reason to believe their god will answer. They have 450 voices raised in unison, years of priestly training, the prestige of the royal court, and all of Jezebel&rsquo;s authority behind them. &ldquo;But there was no voice, and no one answered&rdquo; (18:26).",
      "The phrase &ldquo;there was no voice, and no one answered&rdquo; recurs like a refrain throughout the passage (verses 26, 29), each repetition driving home the theological reality that Baal worship addresses an empty throne. There is no voice because there is no one to speak. There is no answer because there is no one to answer. The silence of Baal is not a dramatic pause before an eventual response; it is the silence of nonexistence. The narrative gives the prophets of Baal ample time and full credit for their efforts precisely so that the eventual answer of the LORD will be unmistakable: this silence is Baal&rsquo;s final word.",
      "At noon Elijah begins to mock them. The mockery is sharp-edged and deliberate: &ldquo;Cry aloud, for he is a god. Either he is musing, or he is relieving himself, or he is on a journey, or perhaps he is asleep and must be awakened&rdquo; (18:27). Each suggestion is a satire of Baal&rsquo;s supposed divine attributes. A god who must be awakened from sleep, who might be occupied with bodily functions, who might be traveling &mdash; such a being is not the sovereign lord of storm and sky but a pale projection of human limitation. Elijah&rsquo;s mockery is not merely wit; it is theological argument by reduction to absurdity.",
      "The prophets of Baal respond to Elijah&rsquo;s provocation with intensified effort. They cry out louder. They cut themselves with swords and lances &mdash; a practice associated with Baal worship, perhaps a form of blood offering intended to attract the god&rsquo;s attention or to demonstrate the sincerity of their devotion. The blood runs over them. They rave on until the time of the evening sacrifice &mdash; from morning to the middle of the afternoon. The total duration of their efforts spans the entire working day. They have nothing left to give to their god, and their god has nothing left to give them.",
      "The theological significance of the prophets of Baal&rsquo;s failure reaches far beyond the narrative occasion. In the ancient Near Eastern world, Baal was not a marginal deity; he was the dominant storm-god of Canaan, the most powerful figure in the Canaanite pantheon, the god who supposedly controlled the rain and the fertility of the land. The three-year drought that Elijah had declared at the beginning of chapter 17 was already a pointed challenge to Baal&rsquo;s domain. Now, when the supposed lord of lightning cannot produce a spark of fire in response to the sustained cries of his priests, the entire edifice of Baal religion is publicly dismantled.",
      "The contrast between the prophets of Baal&rsquo;s frantic, bloody, exhausting performance and Elijah&rsquo;s subsequent brief, confident prayer is structured by the narrator with deliberate care. The 450 prophets use every technique of religious intensity they know; they offer their own blood; they persist for hours; they are rewarded with nothing. Elijah will use none of these techniques; he will speak simply and briefly to a God he knows personally; and he will receive fire. The contrast is not between two religious styles; it is between the absence of a deity and the presence of one.",
    ],
  },
  {
    id: "Elijah Prepares the Altar",
    heading: "Elijah Prepares the Altar",
    reference: "1 Kings 18:30&ndash;35",
    paragraphs: [
      "When the prophets of Baal have exhausted themselves and the afternoon has come, Elijah says to all the people: &ldquo;Come near to me.&rdquo; And all the people come near. This simple invitation marks the shift in the narrative from the extended failure of Baal to the methodical preparation of Elijah &mdash; and the people&rsquo;s movement toward him is itself significant. The crowd that has watched all day in silence now gathers around the man of God as he begins his preparation. The act of watching Elijah prepare the altar is itself an act of reorientation.",
      "Elijah&rsquo;s first act is to repair the altar of the LORD that had been thrown down. The details matter: he takes twelve stones, one for each of the tribes of the sons of Jacob &mdash; not ten stones for the northern kingdom that is his immediate concern, but twelve, for all of Israel. This is a statement about identity and covenant. The altar Elijah builds is not a new religious innovation; it is the restoration of the true altar, built on the foundation of all twelve tribes, grounded in the covenant that God made with all Israel from the beginning. Elijah is not starting a new religion; he is calling a nation back to its own.",
      "He builds the altar with the twelve stones, digs a trench around it large enough to hold two seahs of seed, arranges the wood, cuts the bull in pieces, and lays it on the wood. This is all standard preparation for a burnt offering. But then Elijah adds something that is not standard &mdash; something that looks, from a purely practical standpoint, like deliberate sabotage: he orders that four large jars of water be filled and poured on the burnt offering and on the wood. Then he orders it done a second time. Then a third time. Twelve jars of water saturate the offering, the wood, and fill the trench.",
      "The soaking of the altar with water has multiple layers of significance. Most practically, it eliminates any suspicion that Elijah has hidden fire beneath the altar or that the offering will ignite through natural means. The fire that comes from heaven must overcome not merely the absence of earthly fire but the active presence of water that would extinguish it. Elijah is not merely accepting a fair test; he is loading the conditions against himself in every observable way, so that when the fire falls, the supernatural character of what has happened will be beyond dispute.",
      "There is also a theological dimension to the water. The drought has been the defining reality of the past three years &mdash; three years in which water has been so scarce that Obadiah has risked his life to keep a hundred prophets alive. For Elijah to pour twelve jars of water over an altar &mdash; water that would have been precious, water that would have cost something to gather &mdash; is an act of extravagant faith. He is not hoarding the water against the drought; he is expending it in an act of worship that declares: the God who controls fire also controls rain, and he will send the rain again after this day&rsquo;s work is done.",
      "The trench full of water adds one more layer of meaning. The trench around the altar creates a boundary between the sacred space and the ground around it, echoing the boundaries that God established around Sinai when he descended in fire to give the law. The altar on Carmel, surrounded by water, is a portable Sinai &mdash; a place where the fire of God will descend upon a mountain and a people will be brought back to the covenant they have abandoned. Elijah&rsquo;s meticulous preparation is not ritual superstition; it is prophetic theology in action, each detail declaring something about the God he is about to call upon.",
    ],
  },
  {
    id: "Fire Falls from Heaven",
    heading: "Fire Falls from Heaven",
    reference: "1 Kings 18:36&ndash;46",
    paragraphs: [
      "At the time of the offering of the evening sacrifice, Elijah the prophet came near and prayed. After hours of Baal&rsquo;s silence and 850 prophets&rsquo; exhausted failure, the contrast of Elijah&rsquo;s prayer is stunning in its brevity and simplicity: &ldquo;O LORD, God of Abraham, Isaac, and Israel, let it be known this day that you are God in Israel, and that I am your servant, and that I have done all these things at your word. Answer me, O LORD, answer me, that this people may know that you, O LORD, are God, and that you have turned their hearts back&rdquo; (18:36&ndash;37). Sixty-three words in English. No liturgical formula, no incantation, no self-cutting &mdash; simply a servant speaking to his master about God&rsquo;s own glory and the people&rsquo;s need to know him.",
      "The prayer is theocentric throughout. Elijah does not ask God to vindicate Elijah; he asks God to reveal himself as God. He does not ask God to demonstrate Israel&rsquo;s righteousness; he asks God to turn the people&rsquo;s hearts back. The entire orientation of the prayer is toward God&rsquo;s honor and the people&rsquo;s knowledge of God. This is the pattern of great intercessory prayer throughout Scripture &mdash; Moses pleading for God&rsquo;s reputation among the nations, Daniel confessing sin and appealing to God&rsquo;s righteousness, Jesus praying that the Father would glorify the Son so that the Son might glorify the Father. Prayer that is truly oriented toward God is irresistible.",
      "Then the fire of the LORD fell. &ldquo;Then the fire of the LORD fell and consumed the burnt offering and the wood and the stones and the dust, and licked up the water that was in the trench&rdquo; (18:38). The description is extraordinary in its completeness. The fire consumes not just the offering and the wood &mdash; what fire does naturally &mdash; but the stones, the dust, and the water in the trench. The fire of the LORD is not merely hot; it is consuming in a manner that leaves nothing behind, not even the framework of the altar, not even the water that should have extinguished it. The twelve stones that Elijah laid with such care are gone. Only God&rsquo;s answer remains.",
      "The people&rsquo;s response is immediate and overwhelming. &ldquo;And when all the people saw it, they fell on their faces and said, &lsquo;The LORD, he is God; the LORD, he is God!&rsquo;&rdquo; (18:39). The doubled declaration &mdash; &ldquo;The LORD, he is God; the LORD, he is God&rdquo; &mdash; is the most emphatic affirmation possible in Hebrew, the language of superlative certainty. The people who could not answer when Elijah asked them to choose between the LORD and Baal are now unable to say anything but this. The silence of the morning has become the confession of the evening. The limp of compromise has been replaced, at least in this moment, by prostration before the true God.",
      "What follows is morally difficult but theologically consistent with the Old Testament framework of covenant faithfulness and its enforcement. Elijah commands the people to seize the prophets of Baal; none escapes; Elijah brings them to the brook Kishon and kills them there. The execution of Baal&rsquo;s prophets is the application of the Mosaic law against false prophets who lead Israel after other gods (Deuteronomy 13:1&ndash;5, 18:20). It is the act of covenant purification that Ahab and Jezebel have not only failed to perform but have actively reversed by killing the prophets of the LORD. The violence is shocking to modern readers, but it is the necessary consequence of taking the covenant seriously.",
      "The chapter ends with the coming of rain. Elijah returns to the top of Carmel and sends his servant seven times to look toward the sea; on the seventh trip the servant reports a cloud &ldquo;as small as a man&rsquo;s hand&rdquo; rising from the sea. Elijah sends him immediately to Ahab: go down before the rain stops you. And then the sky grows black with clouds and wind, and there is a great rain &mdash; ending three years of drought. The same God who sent fire from heaven now sends rain from heaven. The LORD controls both; Baal controls neither. As Ahab rides to Jezreel, the hand of the LORD is on Elijah, and he runs before the chariot all the way to the entrance of Jezreel &mdash; a closing image of prophetic power and divine vindication.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 1 Kings 18 Today",
    reference: "1 Kings 18 &mdash; For the Life of the Church",
    paragraphs: [
      "First Kings 18 presents the church with a challenge that is structurally identical to the one Elijah faced on Carmel: the challenge of exclusive devotion to God in a culture of religious pluralism and compromise. Israel in Ahab&rsquo;s time had not formally renounced the LORD; they were attempting to worship the LORD alongside Baal, to maintain the covenant while also participating in the religious practices of the surrounding culture. Elijah&rsquo;s question &mdash; &ldquo;How long will you go limping between two different opinions?&rdquo; &mdash; is addressed precisely to those who have not made a formal break with God but whose practical allegiance is divided. It is a question that every generation of the church must answer.",
      "The silence of Baal on Carmel is the silence of every false god &mdash; and the church in every age lives in a world full of things that function as Baal functioned for Israel. Wealth, status, security, pleasure, political power &mdash; these are not inherently evil, but they become false gods when they are treated as the source of life, meaning, and deliverance. The characteristic feature of every false god is the one that Baal displayed on Carmel: when you need it most, at the moment of real crisis, there is no voice, and no one answers. The false gods of the modern world are no more able to deliver when the fire falls than Baal was able to deliver on Mount Carmel.",
      "Elijah&rsquo;s prayer is one of the most instructive moments in the chapter for Christian practice. After hours of noise &mdash; 450 priests crying and cutting themselves, the crowd&rsquo;s anxious silence &mdash; Elijah simply speaks to God. The prayer is short, direct, and entirely oriented toward God&rsquo;s glory and the people&rsquo;s knowledge of God. It contains no technique, no manipulation, no attempt to compel or persuade God by the intensity of religious performance. It is the prayer of a servant who knows his master, who trusts his master&rsquo;s character, and who asks his master to act in a way consistent with everything the master has already revealed about himself. This is the model of prayer that the New Testament endorses: &ldquo;And this is the confidence that we have toward him, that if we ask anything according to his will he hears us&rdquo; (1 John 5:14).",
      "The rebuilding of the altar with twelve stones is a detail that rewards careful reflection in the context of the contemporary church. Elijah does not build a new altar; he repairs the one that has been thrown down. The foundation of his worship is not innovation but restoration &mdash; the recovery of what was there before the apostasy, the re-laying of the covenant stones that Jezebel&rsquo;s program had displaced. The church&rsquo;s calling in every generation is not primarily to construct new forms of religion but to return to the apostolic foundation &mdash; the LORD God of Abraham, Isaac, and Israel, revealed definitively in Jesus Christ. Reformation, not innovation, is the perennial prophetic task.",
      "The fire that fell on Carmel is not a phenomenon that the church should expect to reproduce as a liturgical performance. But the God who sent the fire is the same God who fills his church with the Holy Spirit &mdash; and the New Testament uses fire as one of its primary images for the Spirit&rsquo;s presence and activity. At Pentecost, tongues of fire rest on the disciples (Acts 2:3). John the Baptist distinguishes his water baptism from Jesus&rsquo; baptism: &ldquo;He will baptize you with the Holy Spirit and fire&rdquo; (Matthew 3:11). The Carmel narrative points forward to a greater and more interior fire &mdash; the living presence of God in the hearts of his people, a fire that no amount of false religion can produce and no amount of persecution can extinguish.",
      "The postscript of the chapter &mdash; Elijah running before Ahab&rsquo;s chariot to Jezreel as the rain begins &mdash; is a picture of the joy and energy that divine vindication brings. Immediately after, in chapter 19, Elijah will crash into exhaustion and despair under the threat of Jezebel. The contrast is not a contradiction but a human truth: the experience of great spiritual victory does not immunize against subsequent collapse, and the God who sends fire from heaven is equally present in the still small voice that speaks to a broken prophet under a broom tree. The church that draws from 1 Kings 18 must be prepared to draw from 1 Kings 19 as well &mdash; because the God of Carmel is also the God of the wilderness, as attentive to the servant who has nothing left to give as he was to the servant who called down fire.",
    ],
  },
];

const videoItems = [
  { videoId: "BGd2WGS-2us", title: "BibleProject - Overview of 1 Kings" },
  { videoId: "JU2sjkVx0lA", title: "Elijah and the Prophets of Baal at Mount Carmel" },
  { videoId: "vmx4UjRFp0M", title: "BibleProject - Overview - 1 Kings 12 to 2 Kings 25" },
  { videoId: "3oKtasGM_6Y", title: "1 Kings 18 - Fire Falls from Heaven" },
];

export default function Kings18GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Kings 18 &mdash; Elijah and the Prophets of Baal on Mount Carmel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Elijah confronts 450 prophets of Baal on Mount Carmel. Baal does not answer. Elijah repairs the altar, drenches it with water, and prays a simple prayer &mdash; and fire falls from heaven, consuming the offering, the wood, the stones, and the water. The people fall on their faces: &ldquo;The LORD, he is God! The LORD, he is God!&rdquo; Then rain ends three years of drought.
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
              Deepen your study of 1 Kings 18 through these video teachings on Elijah&rsquo;s confrontation with the prophets of Baal, the contest on Mount Carmel, the fire from heaven, and the end of three years of drought.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD, He Is God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 18 stands as one of the great witnesses in Scripture to the reality of the living God who acts in history. The silence of Baal is the silence of every false god; the fire that falls on Carmel is the answer of the God who is. Elijah&rsquo;s question still sounds across the centuries: &ldquo;How long will you go limping between two different opinions? If the LORD is God, follow him.&rdquo; The God who answered by fire on Mount Carmel is the same God who answers today.
          </p>
        </div>
      </main>
    </div>
  );
}
