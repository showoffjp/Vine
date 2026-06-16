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
  { videoId: "bDdaVkMr9ug", title: "Isaiah 36 - Sennacherib Threatens Jerusalem" },
  { videoId: "g9zqBMiVVoo", title: "Hezekiah and Assyria - Historical Context" },
  { videoId: "E7ZUdnKCIBs", title: "The Rabshakeh's Speech - Isaiah 36 Commentary" },
  { videoId: "nIZU6bXA8Z8", title: "Trusting God Under Pressure - Isaiah 36" },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "36:1-3",
    title: "The Assyrian Campaign Reaches Judah",
    color: ROSE,
    content: "In the fourteenth year of King Hezekiah, Sennacherib king of Assyria attacked all the fortified cities of Judah and captured them. The historical setting is 701 BC. Sennacherib had already swept through the northern kingdom of Israel (which fell in 722 BC) and was now pressing deep into Judah. Archaeological evidence from Sennacherib's own annals confirms he captured 46 walled cities of Judah and deported over 200,000 people. Jerusalem was isolated and surrounded. Then the king of Assyria sent his field commander with a large army from Lachish to King Hezekiah at Jerusalem. Lachish was the second most fortified city in Judah after Jerusalem -- Sennacherib devoted an entire room of his palace to commemorating its capture in stone reliefs. The Assyrian delegation included the Tartan (supreme commander), the Rabsaris (chief officer), and the Rabshakeh (field commander / chief cupbearer), the last of whom delivers the speech. They came and stopped at the aqueduct of the Upper Pool, on the road to the Washerman's Field. This is the same location where Isaiah had earlier met Ahaz (Isaiah 7:3) -- a detail suggesting the narrator is making a deliberate connection. The Assyrian diplomatic team is stationed at the city's water supply, a gesture of enormous psychological pressure. Eliakim son of Hilkiah the palace administrator, Shebna the secretary, and Joah son of Asaph the recorder came out to meet them -- three senior officials, a diplomatic counterpart to the Assyrian delegation."
  },
  {
    id: "v2",
    ref: "36:4-10",
    title: "The Rabshakeh's First Speech: Mocking Trust in Egypt and the LORD",
    color: GOLD,
    content: "The field commander said to them: Tell Hezekiah: This is what the great king, the king of Assyria, says: On what are you basing this confidence of yours? The speech begins with a rhetorical attack on the basis of Hezekiah's confidence. The Rabshakeh is not simply a military officer; he is a sophisticated propagandist. He knows the Hebrew language; he knows Judah's theology; and he is skilled at exploiting the gap between what faith claims and what appears to be happening. You say you have strategy and military strength -- but you speak only empty words. On whom are you depending, that you rebel against me? The first target is Egypt: Look, I know you are depending on Egypt, that splintered reed of a staff, which pierces the hand of anyone who leans on it! The image of Egypt as a broken reed recurs in Isaiah's oracles (30:1-7; 31:1-3). Egypt was Judah's habitual temptation -- a great power that seemed to offer protection but repeatedly failed those who trusted it. Then comes the more audacious claim: And if you say to me, 'We are depending on the LORD our God' -- isn't he the one whose high places and altars Hezekiah removed, saying to Judah and Jerusalem, 'You must worship before this altar'? The Rabshakeh is aware that Hezekiah had carried out a religious reform, centralizing worship in Jerusalem and removing the high places. His argument: by destroying these shrines, Hezekiah has actually offended the LORD -- so the LORD will not help you. This is a deliberate misreading of the reform, but it is sophisticated enough to plant doubt in the minds of anyone who is wavering. Come now, make a bargain with my master, the king of Assyria: I will give you two thousand horses -- if you can put riders on them! The Assyrian argument is blunt: even if we gave you military equipment, you have no trained cavalry to use it. How can you repulse one officer of the least of my master's officials, even though you are depending on Egypt for chariots and horsemen? Furthermore, have I come to attack and destroy this place without the LORD? The LORD himself told me to march against this country and destroy it. This final claim is the most shocking of all: the Rabshakeh claims divine authorization for the Assyrian invasion. Whether he believes it, or whether it is pure manipulation, the effect is designed to paralyze: if the LORD sent us, resistance is futile and faithless."
  },
  {
    id: "v3",
    ref: "36:11-12",
    title: "The Exchange in the Field: A Request to Speak Aramaic",
    color: TEAL,
    content: "Then Eliakim, Shebna and Joah said to the field commander: Please speak to your servants in Aramaic, since we understand it. Don't speak to us in Hebrew in the hearing of the people on the wall. This is a revealing moment. Aramaic was the diplomatic lingua franca of the ancient Near East -- the language of international diplomacy and commerce. Hebrew was the common language of the people of Judah. The officials understand perfectly well what the Rabshakeh is doing: he is not negotiating with diplomats, he is broadcasting psychological warfare directly to the soldiers and civilians on the wall. Their request to switch to Aramaic is an attempt to contain the damage. The Rabshakeh's response shows that this is precisely the point: But the commander replied, Was it only to your master and you that my master sent me to say these things, and not to the people sitting on the wall -- who, like you, will have to eat their own excrement and drink their own urine? The reference to siege conditions is brutally specific and deliberately humiliating. The Rabshakeh refuses to speak diplomatically and privately when he can demoralize the population directly. This is the anatomy of psychological warfare: bypass the leadership, target morale, exploit fear of suffering."
  },
  {
    id: "v4",
    ref: "36:13-20",
    title: "The Rabshakeh's Public Address: Do Not Let Hezekiah Deceive You",
    color: PURPLE,
    content: "Then the field commander stood and called out in Hebrew: Hear the words of the great king, the king of Assyria! This is what the king says: Do not let Hezekiah deceive you. He cannot deliver you! The speech now becomes a public address to the people of Jerusalem, conducted in Hebrew to maximize its reach and impact. The Rabshakeh's message has four core arguments: First, Do not let Hezekiah persuade you to trust in the LORD when he says, 'The LORD will surely deliver us; this city will not be given into the hand of the king of Assyria.' This is a direct attack on prophetic faith -- the Rabshakeh knows that Isaiah has been delivering oracles promising divine protection, and he frames those promises as dangerous illusions. Second, Do not listen to Hezekiah. For this is what the king of Assyria says: Make peace with me and come out to me. Then each of you will eat from your own vine and fig tree and drink water from your own cistern. The offer of peace is a temptation that must have been attractive to anyone enduring siege conditions. The imagery of vine and fig tree (abundant agricultural peace) evokes the promise of covenant blessing -- but the Rabshakeh is using covenant language to offer submission rather than faithfulness. Third, until I come and take you to a land like your own -- a land of grain and new wine, a land of bread and vineyards. This is the Assyrian policy of forced resettlement -- and the Rabshakeh presents it as attractive. You will not die here in misery; you will be relocated to productive land. Fourth, and most audacious: Has the god of any nation ever delivered his land from the hand of the king of Assyria? Where are the gods of Hamath and Arpad? Where are the gods of Sepharvaim? Have they rescued Samaria from my hand? Who of all the gods of these countries has been able to save his land from me? How then can the LORD deliver Jerusalem from my hand? This is the heart of the blasphemy. The Rabshakeh catalogues the nations Assyria has conquered and the gods that failed to protect them -- Hamath, Arpad, Sepharvaim, and even Samaria (the northern kingdom of Israel). The implication: the LORD is one more local deity in a long list of deities who have failed their people. The Rabshakeh's theology is perfectly consistent: all gods are equal, all gods are weak, and Assyria has defeated them all. What he fails to understand -- and what Isaiah has spent 35 chapters establishing -- is that the LORD is not a national deity among deities but the Creator and Holy One, in a category entirely his own."
  },
  {
    id: "v5",
    ref: "36:21-22",
    title: "The People's Silence and the Officials' Response",
    color: GREEN,
    content: "But the people remained silent and said nothing in reply, because the king had commanded, 'Do not answer him.' This silence is remarkable. It is not the silence of demoralization or assent; it is the silence of obedience. Hezekiah had instructed the people not to respond, and in the face of one of the most sophisticated rhetorical attacks in the Old Testament, they complied. The silence says something important: morale can be preserved through discipline and trust in leadership even when the enemy's arguments seem unanswerable in the moment. Then Eliakim son of Hilkiah the palace administrator, Shebna the secretary, and Joah son of Asaph the recorder went to Hezekiah, with their clothes torn, and told him what the field commander had said. The tearing of clothes is the conventional gesture of mourning and distress in the ancient Near East. The officials are not ashamed or embarrassed -- they are appropriately grief-stricken by the blasphemy they have heard and by the desperate situation facing Jerusalem. Their action is the hinge on which the narrative turns: they carry the speech back to Hezekiah, and the king's response in chapter 37 is prayer."
  },
];

const KEY_THEMES = [
  {
    title: "The Anatomy of Psychological Warfare",
    color: ROSE,
    text: "The Rabshakeh's speech is one of the most sophisticated pieces of propaganda in the ancient world. It is not simply a military threat -- it is a carefully structured attack on the foundations of faith. He targets Egypt-trust (which Isaiah has also criticized), he exploits the ambiguity of Hezekiah's reform, he claims divine authorization for Assyria's mission, he bypasses the leadership to speak directly to the population, he catalogues previous divine failures, and he offers an attractive alternative to resistance. The speech is designed to answer every possible objection a Judean defender might raise. Recognizing this as propaganda does not make it less dangerous -- it makes it more so. The most effective attacks on faith are not raw power but sophisticated arguments that use our own categories against us."
  },
  {
    title: "Do Not Trust Egypt",
    color: GOLD,
    text: "The Rabshakeh's first argument attacks trust in Egypt -- and it is the same argument Isaiah has been making throughout chapters 28-31. Egypt is a broken reed that pierces the hand of the one who leans on it. What is striking is that the Assyrian propagandist and the Hebrew prophet agree on this point. The difference is what they recommend: Isaiah recommends turning to the LORD; the Rabshakeh recommends surrendering to Assyria. The illegitimacy of a source does not make the argument wrong. Judah was in fact tempted to trust Egypt, and that trust was in fact misplaced. The challenge for the people of Jerusalem was not to dismiss this argument simply because it came from an enemy, but to follow the logic to its proper conclusion -- not surrender, but faith in the LORD."
  },
  {
    title: "Do Not Trust the LORD",
    color: PURPLE,
    text: "The most audacious move in the Rabshakeh's speech is his direct attack on faith in the LORD. He makes two distinct arguments: first, that Hezekiah has actually alienated the LORD by destroying the high places; second, that the LORD has already proven as powerless as every other regional deity by failing to protect Samaria. Both arguments are wrong, but both are sophisticated. The first exploits misunderstanding of Hezekiah's reform. The second commits the category error of treating the LORD as one national deity among others. Isaiah has spent 35 chapters explaining exactly why this category error is fatal: the LORD is the Creator and the Holy One -- there is none like him (Isaiah 40-46 will hammer this point). But in the moment of crisis, with the army outside the walls, the Rabshakeh's argument has genuine psychological force."
  },
  {
    title: "Has Any God Ever Saved a Nation from Assyria?",
    color: TEAL,
    text: "The rhetorical climax of the Rabshakeh's speech is his list of defeated gods: the gods of Hamath, Arpad, Sepharvaim, and Samaria. None of them saved their people. What makes you think your God is different? This argument is structurally sound if you accept the premise that the LORD is one national deity among others. But the entire theology of Isaiah rests on the rejection of that premise. The LORD made heaven and earth. He is the Holy One. He is incomparable. He cannot be put in the same category as Marduk or Baal. The Rabshakeh's argument is devastating against polytheism but completely misses the target when applied to the God of Israel. The tragedy is that many Israelites themselves half-believed the Rabshakeh's premise -- which is precisely why Isaiah had to spend so much time establishing the uniqueness and incomparability of the LORD."
  },
  {
    title: "Make a Deal and Live Well",
    color: GREEN,
    text: "The Rabshakeh offers a seductive alternative to resistance: surrender, and you will each eat from your own vine and fig tree. The imagery is specifically the imagery of covenant blessing (see 1 Kings 4:25; Micah 4:4; Zechariah 3:10). The Rabshakeh is offering the goods of the covenant without the LORD. He is offering material security as a substitute for faithfulness. This is a perennial temptation: the worldly system that offers comfort, security, and prosperity in exchange for loyalty. The implicit message is always the same -- you can have the good things without the relationship with God that is supposed to ground them. Hezekiah's refusal to accept this offer is not naivete; it is the recognition that the goods of life only make sense in the context of the God who gives them."
  },
];

const APPLICATION = [
  {
    question: "When Powerful Voices Mock Our Faith",
    color: ROSE,
    text: "The Rabshakeh represents every sophisticated voice that dismisses faith in God as naive, dangerous, or ineffective. He does not mock God with crude insults but with arguments from history, geopolitics, and comparative religion. Modern equivalents include every confident voice that dismisses prayer as wishful thinking, faith as an evolutionary leftover, or trust in God as a failure to engage with reality. The discipline is not to have a clever counter-argument ready -- the people remained silent. The discipline is to refuse to treat the mockery as the last word, and to bring the situation to God rather than to a debate."
  },
  {
    question: "The Temptation of Worldly Security",
    color: GOLD,
    text: "The Rabshakeh's offer -- come out to me and eat from your own vine and fig tree -- is attractive because it addresses a real need. People under siege are suffering. The offer of relief is genuine, even if what comes after (resettlement in Assyrian territory) amounts to loss of identity and community. We face analogous offers: compromises that offer real short-term relief but require surrendering something essential about who we are as people of God. The question is always: what am I being asked to give up in exchange for this security?"
  },
  {
    question: "Silence as Spiritual Discipline",
    color: PURPLE,
    text: "The people's silence in the face of the Rabshakeh's speech is commanded by Hezekiah and maintained by the people. It is an act of obedience, but it is also a spiritual discipline. Not every attack on faith requires a response. Sometimes the faithful response is to refuse to be drawn into an argument on the enemy's terms, and instead to carry the situation directly to God. The officials tear their clothes and go to Hezekiah -- they do not debate the Rabshakeh on the wall. The movement is from exposure to trauma, to grief, to prayer."
  },
  {
    question: "When the Enemy Uses Our Own Theology Against Us",
    color: TEAL,
    text: "The Rabshakeh knows enough of Judah's theology to exploit it. He knows about the high places, about Isaiah's Egypt-oracles, about the LORD's role in history. He uses this knowledge as a weapon. This pattern appears throughout history: the most effective attacks on faith are not from outside the tradition but from inside it -- from arguments that know our categories, our doubts, our inconsistencies. The response is not defensiveness but depth. A shallow faith cannot withstand a sophisticated attack. The people who can remain silent in the face of the Rabshakeh's speech are those whose faith has deep enough roots not to be uprooted by every wind of argument."
  },
  {
    question: "Spreading the Letter Before the LORD",
    color: GREEN,
    text: "Isaiah 36 ends with crisis and no resolution. The Rabshakeh's speech has been delivered; the officials report to Hezekiah in torn clothes. The chapter does not end with a miracle or a counter-argument -- it ends with grief. What happens next (in chapter 37) is that Hezekiah takes the situation to the temple and spreads the letter before the LORD. This is the model for crisis response: not immediate action, not clever strategy, not despair -- but honest, urgent prayer that brings the specific threat into the presence of God. The practice of taking our Rabshakeh letters to God -- naming the specific challenge, the specific fear, the specific blasphemy -- is the beginning of the response that chapter 37 narrates."
  },
];

export default function Isaiah36GuidePage() {
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
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah &bull; Chapter 36 &bull; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 30, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.25 }}>
            Isaiah 36: Sennacherib&rsquo;s Threat and the Rabshakeh&rsquo;s Blasphemy Against Jerusalem
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
            In 701 BC Assyria&rsquo;s army surrounds Jerusalem. The Rabshakeh delivers one of history&rsquo;s most sophisticated speeches of psychological warfare &mdash; targeting every possible source of trust, including trust in the LORD himself. The people remain silent. The officials tear their clothes. What happens next requires prayer.
          </p>
        </div>

        {/* Quick-facts strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            ["Date", "701 BC"],
            ["Parallel", "2 Kings 18:13-37"],
            ["Setting", "Jerusalem / Lachish"],
            ["Key Figure", "Rabshakeh"],
            ["Key Verse", "Isaiah 36:18"],
            ["Tone", "Crisis / Propaganda"],
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
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Historical Setting</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 36&ndash;39 form a historical narrative interlude between the two major prophetic sections of the book: chapters 1&ndash;35 (largely judgment and warning) and chapters 40&ndash;66 (largely comfort and new creation). This narrative section is also found in 2 Kings 18&ndash;20, with minor variations. The parallel placement of a historical crisis at the center of the book is not accidental &mdash; the deliverance of Jerusalem in 701 BC becomes a model and a pivot: the God who saved Jerusalem from Assyria is the same God who will save his people from Babylon." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Sennacherib came to the throne of Assyria in 705 BC and immediately faced rebellions across the empire. Hezekiah of Judah had joined a coalition of rebellious vassal states, relying partly on promises of Egyptian support (exactly what Isaiah had warned against in chapters 28&ndash;31). In 701 BC Sennacherib marched west, crushed the Philistine and Phoenician coastal cities, defeated the Egyptian army at Eltekeh, and systematically dismantled Judah&rsquo;s fortified cities. His own annals record the capture of 46 walled cities and the deportation of over 200,000 people. Jerusalem alone survived." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The narrative of chapter 36 opens with Jerusalem already isolated &mdash; the Assyrian army has taken everything else. The Rabshakeh&rsquo;s speech is not accompanied by an assault; it is delivered while Sennacherib is still at Lachish, finishing off Judah&rsquo;s second city. The psychological warfare is designed to produce surrender before the assault even begins." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Narrative Structure of Isaiah 36</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ref: "vv. 1-3", title: "The Assyrian delegation arrives at the Upper Pool", color: ROSE },
                  { ref: "vv. 4-10", title: "Rabshakeh's first speech: mock Egypt-trust and LORD-trust", color: GOLD },
                  { ref: "vv. 11-12", title: "The officials request Aramaic; Rabshakeh refuses", color: TEAL },
                  { ref: "vv. 13-20", title: "Public address in Hebrew: Do not let Hezekiah deceive you", color: PURPLE },
                  { ref: "vv. 21-22", title: "The people's silence; the officials report to Hezekiah in torn clothes", color: GREEN },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Assyrian Propaganda Machine</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The Rabshakeh&rsquo;s speech is not mere bluster. It is a masterpiece of ancient psychological operations. Scholars of the ancient Near East have noted that Assyrian diplomacy regularly employed exactly these techniques: the claim to divine commission, the attack on the reliability of allies, the offer of attractive resettlement terms, the public bypassing of leadership to address the population directly. Sennacherib&rsquo;s own annals use the language of gods delivering cities into his hand." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The choice to deliver the speech in Hebrew rather than Aramaic is particularly significant. Aramaic was the diplomatic language; Hebrew was the vernacular. Speaking in Hebrew to the soldiers on the wall was a deliberate decision to go over the heads of the negotiating officials and speak directly to the people. In modern terms: the Rabshakeh is not negotiating &mdash; he is broadcasting." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The reference to eating excrement and drinking urine (v. 12) is not crude shock tactics but a specific invocation of siege conditions: what Sennacherib is describing is the endgame of a siege that refuses to surrender. He is painting the most vivid possible picture of what continued resistance will cost. The offer of vine and fig tree is the inverse of this picture: the reward for surrender is the opposite of siege conditions. The speech works by holding two possible futures before the people and forcing a choice." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Key Scripture References</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { ref: "Isaiah 36:1", note: "The invasion: fourteenth year of Hezekiah, 701 BC" },
                  { ref: "Isaiah 36:6", note: "Egypt as a broken reed -- the Rabshakeh's first argument" },
                  { ref: "Isaiah 36:7", note: "The attack on Hezekiah's religious reform" },
                  { ref: "Isaiah 36:10", note: "The claim that the LORD commanded the invasion" },
                  { ref: "Isaiah 36:15", note: "Do not let Hezekiah persuade you to trust in the LORD" },
                  { ref: "Isaiah 36:18-20", note: "Has any god ever saved his people from Assyria?" },
                  { ref: "Isaiah 36:21", note: "The people remained silent -- the commanded silence" },
                  { ref: "2 Kings 18:13-37", note: "The parallel account in the historical books" },
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 36</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The Rabshakeh&rsquo;s speech is a systematic attack on every possible source of trust. Understanding its structure helps us recognize the same patterns when they appear in our own lives &mdash; the voices that mock our faith, offer alternatives to God, and use our own theology against us." }}
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
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.text }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 20, margin: "0 0 16px" }}>The Four Arguments of the Rabshakeh&rsquo;s Speech</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { num: "1", arg: "Do not trust Egypt", why: "It is a broken reed that pierces your hand (v. 6)", color: ROSE },
                  { num: "2", arg: "Do not trust the LORD", why: "Hezekiah offended him by removing the high places (v. 7); the LORD sent us (v. 10)", color: GOLD },
                  { num: "3", arg: "Make a deal with Assyria and live well", why: "Each of you will eat from your vine and fig tree (vv. 16-17)", color: PURPLE },
                  { num: "4", arg: "Has any god ever saved a city from Assyria?", why: "Hamath, Arpad, Sepharvaim, Samaria -- all failed (vv. 18-20)", color: TEAL },
                ].map(item => (
                  <div key={item.num} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10, border: `1px solid ${item.color}30` }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}50`, color: item.color, fontWeight: 900, fontSize: 16, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.num}</span>
                    <div>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.arg}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                    </div>
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 36:1&ndash;22</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 22 verses of Isaiah 36, organized by the major movements of the chapter. Click any section to expand the commentary." }}
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
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Rabshakeh&rsquo;s Speech: A Summary of Arguments</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { range: "vv. 4-5", point: "Your confidence is misplaced -- you have only empty words" },
                  { range: "v. 6", point: "Egypt is a broken reed that will only wound you" },
                  { range: "v. 7", point: "Your God is angry at Hezekiah for destroying the high places" },
                  { range: "vv. 8-9", point: "Even if we gave you horses, you have no cavalry" },
                  { range: "v. 10", point: "The LORD himself told us to attack Judah" },
                  { range: "vv. 13-14", point: "Do not let Hezekiah deceive you -- he cannot deliver you" },
                  { range: "vv. 16-17", point: "Surrender and live well; each man his own vine and fig tree" },
                  { range: "vv. 18-20", point: "No god has ever saved a nation from Assyria -- will yours?" },
                ].map(item => (
                  <div key={item.range} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 12, minWidth: 60, paddingTop: 2 }}>{item.range}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.point}</span>
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living with Isaiah 36</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 36 is not a historical curiosity. The Rabshakeh&rsquo;s speech is the template for every sophisticated attack on faith: it uses our own categories, exploits our real inconsistencies, offers genuine short-term alternatives, and ends with the unanswerable challenge &mdash; has your God ever really come through?" }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter does not end with a victory. It ends with grief &mdash; torn clothes and a report to the king. But the grief leads to prayer, and the prayer leads to the extraordinary events of chapter 37. The application of Isaiah 36 is not a strategy for winning arguments; it is the recognition that the first response to the Rabshakeh&rsquo;s speech is to bring it to God." }}
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
                  "What is your personal &ldquo;Egypt&rdquo; &mdash; the worldly security you are most tempted to trust instead of God?",
                  "When has a voice used your own theology or the language of faith against you? How did you respond?",
                  "What does the Rabshakeh&rsquo;s offer of &ldquo;vine and fig tree&rdquo; look like in your life right now?",
                  "The people remained silent when commanded to. Are there situations in your life where holy silence is more faithful than counter-argument?",
                  "What &ldquo;letter&rdquo; do you need to take to the temple and spread before the LORD right now?",
                ].map((q, qi) => (
                  <div key={qi} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <span style={{ color: GOLD, fontWeight: 900, fontSize: 15, minWidth: 22, paddingTop: 1 }}>{qi + 1}.</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos on Isaiah 36</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video teaching on the Assyrian crisis, Hezekiah&rsquo;s Judah, and the Rabshakeh&rsquo;s speech.
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
