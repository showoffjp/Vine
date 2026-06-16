"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "2a_RLi3p5HE", title: "Isaiah 37 - Hezekiah's Prayer and God's Deliverance" },
  { videoId: "g9zqBMiVVoo", title: "The Angel of the LORD - Isaiah 37 Commentary" },
  { videoId: "bDdaVkMr9ug", title: "Sennacherib's Defeat - Historical Evidence" },
  { videoId: "3u5CUZ5tK2U", title: "Prayer in Crisis - Learning from Hezekiah" },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "37:1-4",
    title: "Hezekiah Tears His Clothes and Goes to the Temple",
    color: ROSE,
    content: "When King Hezekiah heard this, he tore his clothes and put on sackcloth and went into the temple of the LORD. The response to the Rabshakeh&rsquo;s speech is immediate, physical, and liturgical. Hezekiah does not call a military council or draft a diplomatic response. He tears his clothes &mdash; the ancient gesture of grief and crisis &mdash; and goes to the temple. The temple in Isaiah&rsquo;s theology is the place of divine presence, the point of contact between heaven and earth. Hezekiah is going to where God is. He sent Eliakim the palace administrator, Shebna the secretary, and the leading priests, all wearing sackcloth, to the prophet Isaiah son of Amoz. The king gathers the senior officials and the priests &mdash; the same delegation that had faced the Rabshakeh &mdash; and sends them in sackcloth to Isaiah. This is significant: Hezekiah seeks prophetic intercession alongside his own prayer. He knows that the crisis requires both personal prayer and the prophetic word. The message they carry is remarkable: This day is a day of distress and rebuke and disgrace, as when children come to the point of birth and there is no strength to deliver them. It may be that the LORD your God will hear the words of the field commander, whom his master, the king of Assyria, has sent to ridicule the living God, and that he will rebuke him for the words the LORD your God has heard. Hezekiah&rsquo;s message articulates the theological core of the crisis: the Rabshakeh has ridiculed the living God. The phrase &ldquo;living God&rdquo; is pointed &mdash; it is the direct counter to the Rabshakeh&rsquo;s catalogue of dead gods who could not save their cities. Hezekiah does not know what God will do; he says &ldquo;it may be that the LORD your God will hear.&rdquo; This is honest, humble prayer: not a claim on divine performance, but a request for divine attention."
  },
  {
    id: "v2",
    ref: "37:5-7",
    title: "Isaiah's First Oracle: Do Not Be Afraid",
    color: GOLD,
    content: "When King Hezekiah's officials came to Isaiah, Isaiah said to them: Tell your master, &lsquo;This is what the LORD says: Do not be afraid of what you have heard &mdash; those words with which the underlings of the king of Assyria have blasphemed me.&rsquo; The prophetic response is immediate and direct. Isaiah does not need to consult or deliberate; the word of the LORD comes through him at once. The oracle has three elements: first, do not be afraid. This is the most common command in Isaiah 40-55, but it appears here in the crisis narrative of chapter 37 as well. The theological basis for fearlessness is not the absence of danger but the presence and activity of God. Second, the description: the underlings of the king of Assyria have blasphemed me. Isaiah&rsquo;s oracle reframes the Rabshakeh&rsquo;s speech entirely. What presented itself as geopolitical analysis is revealed as blasphemy &mdash; not primarily an attack on Hezekiah or on Judah, but on God himself. This reframing is crucial: the Rabshakeh&rsquo;s arguments can be debated at the political level indefinitely, but when they are seen as blasphemy, they become a different kind of problem. Listen! I am going to put a spirit in him so that when he hears a certain report, he will return to his own country, and there I will have him cut down with the sword. The divine response to blasphemy is action: a spirit will be put in Sennacherib that will cause him to withdraw and die in his own land. The fulfillment comes at the end of chapter 37: the Assyrian army is struck, Sennacherib returns to Nineveh, and he is assassinated by his own sons. The oracle does not predict a dramatic battle; it predicts a withdrawal and a remote death. God&rsquo;s responses to our crises are not always the dramatic intervention we expect."
  },
  {
    id: "v3",
    ref: "37:8-13",
    title: "The Second Assyrian Letter: Do Not Let Your God Deceive You",
    color: TEAL,
    content: "When the field commander heard that the king of Assyria had left Lachish, he withdrew and found the king fighting against Libnah. Now Sennacherib received a report that Tirhakah, the king of Cush, was marching out to fight against him. The narrative resumes with military developments: Sennacherib is fighting elsewhere, and intelligence arrives that the Egyptian army is moving under Tirhakah of Cush. This is the crisis that will force Sennacherib to deal with Jerusalem quickly or withdraw. When he heard this, he sent messengers to Hezekiah with this word: Do not let the god you depend on deceive you when he says, &lsquo;Jerusalem will not be given into the hands of the king of Assyria.&rsquo; The written letter reprises the Rabshakeh&rsquo;s speech in condensed form but with an important difference: it now explicitly targets prophetic promises. The phrase &ldquo;when he says Jerusalem will not be given into the hands of the king of Assyria&rdquo; sounds like a direct reference to Isaiah&rsquo;s oracle in vv. 5-7. Sennacherib knows that a prophet has spoken a word of deliverance. His response is to attack the reliability of the oracle itself. Have the gods of the nations that were destroyed by my predecessors delivered them? The letter deploys the same list of conquered nations: Gozan, Haran, Rezeph, the people of Eden in Tel Assar. Where is the king of Hamath or the king of Arpad or the kings of Lair, Sepharvaim, Hena and Ivvah? Each name represents a people group Assyria had absorbed. None of their gods saved them. The letter is a masterpiece of its kind: specific, documented, unanswerable at the level of comparative religion. What it cannot account for is the category difference between the LORD and every other god &mdash; which is exactly the point of Hezekiah&rsquo;s prayer."
  },
  {
    id: "v4",
    ref: "37:14-20",
    title: "Hezekiah's Prayer: Spreading the Letter Before the LORD",
    color: PURPLE,
    content: "Hezekiah received the letter from the messengers and read it. Then he went up to the temple of the LORD and spread it out before the LORD. The act of spreading the letter before the LORD is one of the most vivid prayer images in the entire Bible. Hezekiah does not summarize the letter or paraphrase it in prayer. He brings the physical document into the presence of God and lays it open. This is a theology of prayer as honest presentation: bringing the exact threat, in its exact form, into the presence of the living God and saying: read this. And Hezekiah prayed to the LORD: LORD Almighty, the God of Israel, enthroned between the cherubim, you alone are God over all the kingdoms of the earth. You have made heaven and earth. The address is the most theologically loaded part of the prayer. Hezekiah names God as LORD Almighty &mdash; the Lord of all heavenly hosts, the Lord of all armies. He names him as God of Israel &mdash; the covenant God who has specific relationship with this people. He names him as &ldquo;enthroned between the cherubim&rdquo; &mdash; the God whose throne is the mercy seat in the holy of holies, whose presence fills the temple Hezekiah has entered. And then the theological hammer: you alone are God over all the kingdoms of the earth. This is the direct counter to the Rabshakeh&rsquo;s argument. You have made heaven and earth. The Creator is not comparable to the gods of Hamath and Arpad. Listen, LORD, and hear; look, LORD, and see; listen to all the words Sennacherib has sent to ridicule the living God. Hezekiah asks God to do exactly what the Rabshakeh was trying to prevent: hear the blasphemy, see the threat, and respond. It is true, LORD, that the Assyrian kings have laid waste to all these peoples and their lands. They have thrown their gods into the fire and destroyed them, for they were not gods but only wood and stone, fashioned by human hands. Hezekiah makes the most important concession in the prayer: everything the Rabshakeh said about the other nations is true. Their cities were destroyed. Their gods did not save them. But those were not gods &mdash; they were wood and stone, manufactured objects. They had no power because they had no existence. The contrast with the LORD could not be more pointed. Now, LORD our God, deliver us from his hand, so that all the kingdoms of the earth may know that you, LORD, are the only God. The petition is remarkably unself-centered. Hezekiah does not ask for deliverance so that his dynasty will survive, or so that his people will be safe, though both are implied. He asks for deliverance so that all the kingdoms of the earth may know that you, LORD, are the only God. The purpose of the miracle is missional: the knowledge of God spreading through the nations."
  },
  {
    id: "v5",
    ref: "37:21-35",
    title: "Isaiah's Second Oracle: The Mocking Taunt Against Sennacherib",
    color: GREEN,
    content: "Then Isaiah son of Amoz sent a message to Hezekiah: This is what the LORD, the God of Israel, says: Because you have prayed to me concerning Sennacherib king of Assyria, this is what the LORD says against him. The connection is explicit: because you prayed, here is the response. Prayer moved God to respond with one of the longest oracles in the book. The oracle has three main sections: a taunt against Sennacherib, a word of comfort for Jerusalem, and a promise of Sennacherib&rsquo;s defeat. The taunt begins with one of the most audacious images in prophetic literature: The Virgin Daughter Zion despises you and mocks you. The Daughter Jerusalem tosses her head as you flee. The city that Sennacherib expected to grovel at his feet is described as a young woman who tosses her head in contempt at his retreating army. This is divine mockery &mdash; and it mirrors the Rabshakeh&rsquo;s own mockery in chapter 36. Who is it you have ridiculed and blasphemed? Against whom have you raised your voice and lifted your eyes in pride? Against the Holy One of Israel! The oracle identifies the fundamental error: Sennacherib has not merely threatened a vassal state; he has blasphemed the Holy One of Israel. Because you rage against me and because your insolence has reached my ears, I will put my hook in your nose and my bit in your mouth, and I will make you return by the way you came. The imagery of the hook and bit is drawn from Assyrian military practice &mdash; Assyrian reliefs show conquered peoples being led by hooks through the lips. Isaiah turns the image on its creator: Sennacherib will be led back by the power he typically exercises over others. This will be the sign for you, Hezekiah: This year you will eat what grows by itself, and the second year what springs from that; but in the third year sow and reap, plant vineyards and eat their fruit. The oracle includes a natural calendar: the first two years of recovery from siege conditions (eating whatever grows without cultivation), and the third year the restoration of normal agricultural life. The sign is earthbound and agricultural &mdash; the healing of the land as evidence of the healing of the crisis. Therefore this is what the LORD says concerning the king of Assyria: He will not enter this city or shoot an arrow here. He will not come before it with shield or build a siege ramp against it. By the way that he came he will return; he will not enter this city, declares the LORD. For I will defend this city and save it, for my sake and for the sake of my servant David. The promise is total: Sennacherib will not enter Jerusalem. Not one arrow will be fired into the city. No siege works will be built. The city is inviolable &mdash; not because of its fortifications or its garrison, but because the LORD has pledged himself to defend it. The reason given is double: for my sake (the honor and glory of God) and for the sake of my servant David (the covenant with the Davidic dynasty). God acts both for his own name and in faithfulness to his promises."
  },
  {
    id: "v6",
    ref: "37:36-38",
    title: "The Angel of the LORD and Sennacherib's Death",
    color: ROSE,
    content: "Then the angel of the LORD went out and put to death a hundred and eighty-five thousand in the Assyrian camp. When the people got up the next morning &mdash; there were all the dead bodies! The fulfillment is immediate and total. The night after Isaiah&rsquo;s oracle, the angel of the LORD strikes the Assyrian camp. One hundred and eighty-five thousand soldiers are dead by morning. The army does not retreat; it collapses. The brevity of the description is striking: one sentence. No battle, no heroism, no human agency. The angel of the LORD went out. Then it was over. Herodotus records a tradition (Histories II.141) that mice overran the Assyrian camp and destroyed their bowstrings and quivers &mdash; apparently his version of the same event. Ancient Near Eastern tradition agreed that something catastrophic happened to Sennacherib&rsquo;s army. The theological description is angel of the LORD; the natural description may have been plague. The text does not explain the mechanism; it attributes the result to divine action. So Sennacherib king of Assyria broke camp and withdrew. He returned to Nineveh and stayed there. One day, while he was worshiping in the temple of his god Nisrok, his sons Adrammelech and Sharezer killed him with the sword, and they escaped to the land of Ararat. And Esarhaddon his son succeeded him as king. The end is as the oracle predicted: Sennacherib withdrew to Nineveh and was killed there. The irony is precise: the great king who mocked the gods that could not save their cities is murdered while worshiping in a temple. The gods of Assyria cannot protect Sennacherib from his own sons. The living God, enthroned between the cherubim, has defended Jerusalem. The gods of wood and stone have not defended Nineveh."
  },
];

const KEY_THEMES = [
  {
    title: "The Structure of Hezekiah's Prayer (vv. 16-20)",
    color: PURPLE,
    text: "Hezekiah&rsquo;s prayer is one of the best-structured prayers in the Old Testament, and it serves as a model for crisis prayer. It begins with an address that establishes who God is (LORD Almighty, God of Israel, enthroned between the cherubim, alone God over all the earth, Creator of heaven and earth). It then moves to the specific petition: listen and see, hear the blasphemy. Then comes the acknowledgment of what is true in the enemy&rsquo;s claim (Assyria really has conquered those nations; their gods really were not gods). The petition proper is brief (deliver us from his hand). And the prayer ends with a stated purpose that is larger than Hezekiah&rsquo;s personal survival: so that all the kingdoms of the earth may know that you alone are God. Hebrew scholars note that the Hebrew word tefillah (prayer, petition) appears in connection with this passage &mdash; it is the formal term for intercessory prayer brought to God in the sanctuary."
  },
  {
    title: "You Alone Are God: The Theological Counter to the Rabshakeh",
    color: TEAL,
    text: "The Rabshakeh&rsquo;s argument assumed that the LORD was one national deity among others. Hezekiah&rsquo;s prayer dismantles this assumption at its root: you alone are God over all the kingdoms of the earth. The Hebrew word elil (worthless idol, nothingness) is cognate with the Akkadian ilani (gods) but is used in prophetic literature as a dismissal &mdash; the &ldquo;gods&rdquo; of the nations are not really gods at all. Isaiah had already developed this argument in chapters 40-46 (where he would go on to describe at length the absurdity of idol-worship). Hezekiah&rsquo;s prayer is theologically precise: the reason the LORD can do what the gods of Hamath and Arpad could not is ontological, not merely a matter of power. He is God; they are not. Their failure to save does not imply anything about his ability to save."
  },
  {
    title: "The Hebrew Word Cherpah: Reproach and Shame",
    color: ROSE,
    text: "The Hebrew word cherpah (reproach, shame, disgrace) appears in Hezekiah&rsquo;s initial message to Isaiah: this day is a day of distress and rebuke and disgrace (v. 3). The same word recurs through the prophets in the context of God vindicating his people and removing their shame. The Rabshakeh&rsquo;s speech was not only a military threat; it was a public shaming &mdash; delivered in Hebrew, in hearing of the people on the wall, designed to humiliate Hezekiah and his faith. Hezekiah&rsquo;s prayer brings this shame before God. The subsequent miracle is not just military deliverance; it is the removal of cherpah &mdash; God vindicates his people and his name in the face of the contempt that was poured on them."
  },
  {
    title: "Isaiah's Mocking Taunt Against Sennacherib",
    color: GREEN,
    text: "Isaiah&rsquo;s second oracle (vv. 22-35) is a taunt song &mdash; a poetic form used in the ancient Near East to humiliate a defeated enemy. The Virgin Daughter Zion despises and mocks Sennacherib; Jerusalem tosses her head as he flees. The imagery reverses the entire rhetorical situation of chapter 36: the city that was supposed to be terrified and demoralized is instead described as laughing at the retreating army. This is the nasi (prince / lifted-up one) laid low &mdash; the great king who raised his eyes in pride against the Holy One of Israel is brought down. The oracle&rsquo;s most devastating line: Who is it you have ridiculed and blasphemed? Against the Holy One of Israel! The answer to the Rabshakeh&rsquo;s speech is not another argument; it is the events of the night when 185,000 soldiers died."
  },
  {
    title: "For My Sake and for the Sake of David",
    color: GOLD,
    text: "The stated reason for the deliverance is double: for my sake and for the sake of my servant David (v. 35). The first ground is theological &mdash; the honor and glory of God are at stake. The Rabshakeh has ridiculed the living God; if God does not act, the blasphemy goes unanswered and the false narrative prevails. The second ground is covenantal &mdash; God made promises to David, and those promises are the foundation of the Davidic dynasty that Hezekiah represents. The word yasha (save, deliver) runs through Isaiah and reaches its fullest expression in the name of Jesus (Yeshua &mdash; the LORD saves). The deliverance of Jerusalem in 701 BC is a preview of the salvation that comes through the one who is both David&rsquo;s greater son and the LORD himself."
  },
];

const APPLICATION = [
  {
    question: "Spreading the Letter Before the LORD",
    color: PURPLE,
    text: "Hezekiah&rsquo;s act of spreading the letter before the LORD is a physical embodiment of the principle: bring the specific threat, in its specific form, into the presence of God. This is the antidote to vague, anxious prayer. Hezekiah does not ask God to help him with his &lsquo;situation&rsquo; &mdash; he reads Sennacherib&rsquo;s letter aloud in the temple. The practice of naming the specific fear, the specific blasphemy, the specific threat in prayer is what the narrative models. What letter do you need to spread before the LORD right now? What specific challenge have you been carrying in anxious generality that needs to be named and placed in the presence of God?"
  },
  {
    question: "The Structure of Prayer in Crisis",
    color: GOLD,
    text: "Hezekiah&rsquo;s prayer offers a model: begin with who God is (not what you need), acknowledge reality honestly (including what is true in the enemy&rsquo;s account), make the specific petition, and state the larger purpose beyond your own survival. This structure guards against prayer becoming either wishful thinking or self-centered bargaining. The starting point &mdash; you alone are God over all the kingdoms of the earth &mdash; establishes the theological framework in which the petition makes sense. If God is not the Creator, the prayer is wishful thinking. If he is, then deliverance is possible regardless of what the Assyrian annals say."
  },
  {
    question: "When the Answer Is Not What We Expected",
    color: TEAL,
    text: "Isaiah&rsquo;s first oracle (vv. 5-7) promises that Sennacherib will hear a report and return to his own land. The deliverance does not come through a dramatic confrontation or a military victory. It comes through a plague in the night and an Assyrian withdrawal. Hezekiah did not know what form the answer would take. He prayed; God acted in his own way and time. We often have mental pictures of how God should answer our prayers &mdash; the specific outcome, the specific timing, the specific mechanism. Hezekiah&rsquo;s story is a reminder that the promise of deliverance does not require that we know the mechanism. Pray; trust that God has heard; watch for the morning."
  },
  {
    question: "The Larger Purpose: So That All May Know",
    color: ROSE,
    text: "Hezekiah&rsquo;s prayer does not end with &lsquo;so that we may survive.&rsquo; It ends with &lsquo;so that all the kingdoms of the earth may know that you, LORD, are the only God.&rsquo; This missional framing of a prayer for personal deliverance is remarkable. Hezekiah sees his crisis as a moment with implications beyond Jerusalem, beyond Judah, beyond 701 BC. The deliverance of Jerusalem is not just a political event &mdash; it is a revelation of God&rsquo;s character and power to the watching nations. Our crises are rarely so nationally significant, but the principle applies: the way God rescues us can be a witness to those around us. How we respond to crisis &mdash; with prayer rather than panic, with faith rather than compromise &mdash; is itself a testimony."
  },
  {
    question: "The God Who Defends: For My Sake",
    color: GREEN,
    text: "God&rsquo;s stated reason for defending Jerusalem includes &lsquo;for my sake&rsquo; &mdash; for the honor of his name, in response to the blasphemy against him. This is a feature of biblical prayer that modern Western Christianity is often uncomfortable with: the appeal to God&rsquo;s own glory and honor. Moses uses this argument in Numbers 14: if you destroy Israel, the nations will say you were unable to save them. Hezekiah uses it here: if you do not act, the Rabshakeh&rsquo;s blasphemy goes unanswered. The appeal to God&rsquo;s glory is not manipulation; it is the recognition that God has staked his own reputation on his promises. We are permitted &mdash; even encouraged &mdash; to pray on the basis of God&rsquo;s honor, not only on the basis of our own need."
  },
];

export default function Isaiah37GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Page header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: TEAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah &bull; Chapter 37 &bull; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 30, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.25 }}>
            Isaiah 37: Hezekiah&rsquo;s Prayer and the Miraculous Deliverance of Jerusalem
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
            The crisis of Isaiah 36 reaches its peak when Sennacherib sends a letter threatening Jerusalem. Hezekiah spreads the letter before the LORD in the temple and prays. Isaiah delivers oracles of deliverance. The Angel of the LORD strikes 185,000 soldiers. Sennacherib returns to Nineveh and is assassinated by his own sons.
          </p>
        </div>

        {/* Quick-facts strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            ["Date", "701 BC"],
            ["Parallel", "2 Kings 19"],
            ["Setting", "Jerusalem / Nineveh"],
            ["Key Figure", "Hezekiah"],
            ["Key Prayer", "Isaiah 37:16-20"],
            ["Outcome", "Miraculous Deliverance"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                background: activeTab === t.id ? `${TEAL}20` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB: OVERVIEW */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Chapter Summary</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 37 is the resolution of the crisis begun in chapter 36. Where chapter 36 is the attack, chapter 37 is the response &mdash; and the response operates on two levels simultaneously: the human level (Hezekiah&rsquo;s prayer, Isaiah&rsquo;s oracles, the people&rsquo;s endurance) and the divine level (the angel of the LORD, the death of 185,000 soldiers, the assassination of Sennacherib). The chapter is carefully structured to show that the human response that matters is prayer, and that what prayer does is place the crisis in God&rsquo;s hands." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The parallel account in 2 Kings 19 is nearly identical to Isaiah 37, which suggests a common source. Scholars debate whether the event belongs primarily to Kings&rsquo; narrative of Hezekiah or to Isaiah&rsquo;s prophetic book, but the placement in Isaiah is deliberate: this historical event is the bridge between the first and second halves of the book, between judgment and comfort. The God who delivers Jerusalem from Assyria is the same God who will deliver the exiles from Babylon." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Archaeological evidence partially confirms the narrative. Sennacherib&rsquo;s annals (the Taylor Prism, now in the British Museum) record his campaign against Hezekiah and his siege of Jerusalem, but conspicuously do not claim the capture of Jerusalem &mdash; a significant omission in documents that typically boast of every conquest. The account says Hezekiah was &lsquo;shut up like a caged bird&rsquo; in Jerusalem but does not say Jerusalem fell. This is consistent with the biblical account: the city survived." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Narrative Structure of Isaiah 37</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ref: "vv. 1-4", title: "Hezekiah tears his clothes, goes to the temple, sends to Isaiah", color: ROSE },
                  { ref: "vv. 5-7", title: "Isaiah's first oracle: do not be afraid; Sennacherib will withdraw and die", color: GOLD },
                  { ref: "vv. 8-13", title: "The second Assyrian letter: do not let your god deceive you", color: TEAL },
                  { ref: "vv. 14-20", title: "Hezekiah spreads the letter before the LORD and prays", color: PURPLE },
                  { ref: "vv. 21-35", title: "Isaiah's second oracle: taunt against Sennacherib; promise of deliverance", color: GREEN },
                  { ref: "vv. 36-38", title: "The Angel of the LORD strikes 185,000; Sennacherib withdraws and is killed", color: ROSE },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Hezekiah&rsquo;s Prayer: The Model in Detail</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The prayer of Isaiah 37:16-20 is one of the most carefully structured prayers in the Old Testament. It has five distinct movements that together form a complete model of crisis prayer:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Address (v. 16a)", desc: "LORD Almighty, the God of Israel, enthroned between the cherubim &mdash; naming who God is before making any request", color: TEAL },
                  { label: "Appeal to Uniqueness (v. 16b)", desc: "You alone are God over all the kingdoms of the earth; you have made heaven and earth &mdash; the theological counter to the Rabshakeh's argument", color: PURPLE },
                  { label: "The Petition to See (vv. 17)", desc: "Listen, LORD, and hear; look, LORD, and see &mdash; asking God to attend to the specific situation and the specific blasphemy", color: GOLD },
                  { label: "Acknowledgment of Reality (vv. 18-19)", desc: "It is true that the Assyrian kings have laid waste to all these peoples and their lands &mdash; honest concession of what the enemy got right, followed by the critical distinction: their gods were not gods", color: ROSE },
                  { label: "The Petition and Its Purpose (v. 20)", desc: "Deliver us from his hand, so that all the kingdoms of the earth may know that you, LORD, are the only God &mdash; the request and its larger missional purpose", color: GREEN },
                ].map(item => (
                  <div key={item.label} style={{ padding: "14px 18px", background: BG, borderRadius: 10, borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.label}</div>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Key Scripture References</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { ref: "Isaiah 37:1", note: "Hezekiah tears his clothes and goes to the temple" },
                  { ref: "Isaiah 37:3", note: "Day of distress, rebuke, and disgrace -- cherpah" },
                  { ref: "Isaiah 37:6", note: "Isaiah's oracle: do not be afraid" },
                  { ref: "Isaiah 37:14", note: "Hezekiah spreads the letter before the LORD" },
                  { ref: "Isaiah 37:16", note: "You alone are God over all the kingdoms of the earth" },
                  { ref: "Isaiah 37:20", note: "So that all the kingdoms of the earth may know" },
                  { ref: "Isaiah 37:35", note: "For my sake and for the sake of my servant David" },
                  { ref: "Isaiah 37:36", note: "The angel of the LORD struck 185,000 Assyrian soldiers" },
                  { ref: "2 Kings 19", note: "The parallel account in the historical books" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <VerseRef reference={item.ref} inline={false}>{item.ref}</VerseRef>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: KEY THEMES */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 37</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 37 resolves the crisis of chapter 36 by demonstrating what biblical faith looks like under extreme pressure &mdash; not intellectual certainty, not political strategy, but honest prayer to the living God. The themes below trace the theological logic of the chapter." }}
              />
            </div>
            {KEY_THEMES.map((theme, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === String(i) ? theme.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === String(i) ? null : String(i))}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: 15 }}>{theme.title}</span>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openTheme === String(i) ? "-" : "+"}</span>
                </button>
                {openTheme === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.text }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Hebrew Words Worth Knowing</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { word: "tefillah", meaning: "Prayer, petition", usage: "The formal term for intercessory prayer brought to God in the sanctuary; related to palal (to intercede)" },
                  { word: "cherpah", meaning: "Reproach, shame, disgrace", usage: "Used in v. 3 -- the Rabshakeh's speech was not just a threat but a public shaming of God and his people" },
                  { word: "elil", meaning: "Worthless idol, nothingness", usage: "The word for the &ldquo;gods&rdquo; of the nations in vv. 18-19 -- gods that are not gods, manufactured objects with no existence" },
                  { word: "nasi", meaning: "Prince, lifted-up one", usage: "The word for the arrogant ruler (Sennacherib) who is brought low -- cognate with nasa (to lift up)" },
                  { word: "yasha", meaning: "Save, deliver", usage: "The root of both Isaiah&rsquo;s name (Yeshayahu) and Jesus&rsquo;s name (Yeshua) -- the LORD saves" },
                ].map(item => (
                  <div key={item.word} style={{ padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ color: TEAL, fontWeight: 800, fontSize: 15, fontStyle: "italic" }}>{item.word}</span>
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: 12 }}>&mdash; {item.meaning}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.usage }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: VERSE BY VERSE */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 37:1&ndash;38</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 38 verses of Isaiah 37, organized by the major movements of the chapter. Click any section to expand the commentary." }}
              />
            </div>
            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === section.id ? section.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === section.id ? null : section.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${section.color}20`, border: `1px solid ${section.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>{section.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openVerse === section.id ? "-" : "+"}</span>
                </button>
                {openVerse === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>The Timeline of Events in Isaiah 37</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "1", event: "Hezekiah hears the Rabshakeh's report and tears his clothes (v. 1)" },
                  { step: "2", event: "Hezekiah goes to the temple and sends officials to Isaiah (vv. 2-4)" },
                  { step: "3", event: "Isaiah delivers the first oracle: do not be afraid (vv. 5-7)" },
                  { step: "4", event: "Sennacherib hears of Tirhakah and sends the written letter to Hezekiah (vv. 8-13)" },
                  { step: "5", event: "Hezekiah reads the letter and goes to the temple to pray (v. 14)" },
                  { step: "6", event: "Hezekiah spreads the letter before the LORD and prays (vv. 15-20)" },
                  { step: "7", event: "Isaiah delivers the second oracle -- the taunt against Sennacherib (vv. 21-35)" },
                  { step: "8", event: "The angel of the LORD strikes 185,000 in the night (v. 36)" },
                  { step: "9", event: "Sennacherib breaks camp and returns to Nineveh (v. 37)" },
                  { step: "10", event: "Sennacherib is assassinated by his sons in the temple of Nisrok (v. 38)" },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 800, fontSize: 12, borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{item.step}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: APPLICATION */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living with Isaiah 37</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 37 is the chapter that the crisis of Isaiah 36 was waiting for. Every sophisticated attack on faith eventually demands a response, and Hezekiah&rsquo;s response is the model: grief, then prayer, then trust in God&rsquo;s word through his prophet, then watching for the morning." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The act of spreading the letter before the LORD is an image that has resonated with Christians for millennia because it captures something essential about prayer: it is not about finding the right words or the right emotional state. It is about bringing the specific reality of your situation into the presence of the specific God who is able to act in it." }}
              />
            </div>

            {APPLICATION.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === String(i) ? item.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === String(i) ? null : String(i))}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.question}</span>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openApp === String(i) ? "-" : "+"}</span>
                </button>
                {openApp === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Hezekiah goes to the temple immediately on hearing the crisis. Where do you go first when crisis hits?",
                  "What specific &ldquo;letter&rdquo; do you need to spread before the LORD right now? Can you name it specifically in prayer?",
                  "In Hezekiah&rsquo;s prayer, the address (who God is) comes before the petition (what Hezekiah needs). How does this order change the nature of prayer?",
                  "Hezekiah acknowledges what is true in Sennacherib&rsquo;s letter before making his petition. Is there anything true in the challenges facing your faith that you have been reluctant to acknowledge before God?",
                  "The deliverance Hezekiah asked for was &lsquo;so that all kingdoms may know.&rsquo; Is your prayer life shaped by the missional purpose of God, or primarily by your personal needs?",
                ].map((q, qi) => (
                  <div key={qi} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <span style={{ color: TEAL, fontWeight: 900, fontSize: 15, minWidth: 22, paddingTop: 1 }}>{qi + 1}.</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos on Isaiah 37</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video teaching on Hezekiah&rsquo;s prayer, God&rsquo;s deliverance, and the lessons of Isaiah 37 for crisis faith.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0 }}>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
