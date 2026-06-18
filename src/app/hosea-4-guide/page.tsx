"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = PURPLE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Hos4Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: PURPLE,
    title: "The Rib Formula: God Files a Lawsuit (4:1)",
    body: "Hosea 4 opens with a Hebrew legal term that scholars call the rib formula: a formal lawsuit lodged by one party against another before the divine court. 'Hear the word of the LORD, O children of Israel, for the LORD has a controversy (rib) with the inhabitants of the land' (4:1). The word rib in Hebrew is a legal dispute, a case brought before a judge. God is not merely expressing displeasure; he is filing a formal indictment. Israel has violated the terms of the covenant that constituted them as his people. The courtroom setting adds gravity to everything that follows. These are not emotional complaints but a structured legal case. The covenant laid out at Sinai included blessings for faithfulness and curses for violation (Deuteronomy 27-28). Hosea 4 activates the curse side of that treaty. The entire chapter is the opening argument of a case that will extend through the rest of the book.",
  },
  {
    color: GOLD,
    title: "The Three Missing Virtues (4:1b)",
    body: "The indictment names what is absent: 'There is no faithfulness (emet), no steadfast love (hesed), and no knowledge of God (da'at Elohim) in the land.' These three terms are among the most theologically loaded in the entire Hebrew Bible. Emet is truth, reliability, covenant fidelity -- the quality of being what you say you are. Hesed is the covenant love that refuses to abandon, the loyal kindness that goes beyond what is owed -- often translated 'steadfast love' or 'lovingkindness.' Da'at Elohim is not intellectual information about God but intimate relational knowledge, the kind that shapes behavior because it comes from an actual encounter with who God is. What Israel lacked was not religious infrastructure. They had temples, priests, sacrifices, and festivals. What they lacked was the interior reality that all of that was meant to produce: faithfulness, love, and genuine knowledge of God.",
  },
  {
    color: ROSE,
    title: "The Cascade of Sins and the Mourning Land (4:2-3)",
    body: "The absence of emet, hesed, and da'at Elohim has concrete consequences. 'There is swearing, lying, murder, stealing, and committing adultery; they break all bounds, and bloodshed follows bloodshed' (4:2). The five sins Hosea lists map closely onto the Ten Commandments -- this is covenant violation in its most recognizable form. The phrase 'bloodshed follows bloodshed' suggests a society where violence has become self-perpetuating, each act of blood generating the next. Then something remarkable: 'Therefore the land mourns, and all who dwell in it languish, and also the beasts of the field and the birds of the heavens, and even the fish of the sea are taken away' (4:3). The land itself becomes a moral patient. The ecological consequences of human covenant-breaking extend to animals, birds, and fish. Creation is not a passive backdrop to human history; it is implicated in it. When human beings violate covenant with God, the created order suffers. This is one of the most striking ecological passages in the prophetic literature.",
  },
  {
    color: TEAL,
    title: "Do Not Contend, Do Not Reprove (4:4)",
    body: "Verse 4 is notoriously difficult to translate. The ESV reads: 'Yet let no one contend, and let none accuse, for with you is my contention, O priest.' One reading is that God is addressing a general atmosphere of futile argument and accusation. Another is that God is speaking directly to the priests and warning that the real accused is not the people in general but the priestly class specifically. Either way, the verse pivots the lawsuit from the general population to the priesthood. The priest -- whose job was to mediate between God and Israel, to teach the Torah, to explain the difference between clean and unclean, holy and profane (Lev 10:10-11, Deut 33:10) -- becomes the primary defendant. The people are destroyed for lack of knowledge, and the lack of knowledge traces back to those who were supposed to provide it.",
  },
  {
    color: GREEN,
    title: "The Central Charge: Destroyed for Lack of Knowledge (4:6)",
    body: "'My people are destroyed for lack of knowledge; because you have rejected knowledge, I reject you from being a priest to me. And since you have forgotten the law of your God, I also will forget your children' (4:6). This is the gravitational center of Hosea 4 and one of the most quoted verses in the prophetic books. The destruction of Israel is traced not to military weakness, political folly, or economic mismanagement, but to the absence of knowledge of God. The priests were supposed to be the custodians of this knowledge. Their job was to teach the Torah and to model what it looks like to know God. Instead, they had rejected knowledge. The word translated 'rejected' (ma'as) implies a deliberate turning away, not an accidental omission. And the divine response mirrors the human action: 'I reject you from being a priest to me.' You rejected knowledge; I reject you. You forgot my law; I will forget your children. The symmetry is terrifying.",
  },
  {
    color: PURPLE,
    title: "The Priests Fed on Israel's Sin (4:7-10)",
    body: "The indictment against the priesthood deepens. 'The more they increased, the more they sinned against me; I will change their glory into shame. They feed on the sin of my people; they are greedy for their iniquity' (4:7-8). The priests had developed a vested economic interest in the people's sin. Certain offerings and sacrifices -- including sin offerings -- provided food for the priests (Lev 6:26). When the people sinned more, the priests ate better. The system that was supposed to create accountability had been turned into a mechanism for profit from transgression. The priests had every incentive to let the people's sinfulness continue and no incentive to do anything about it. The result is the devastating leveling of verse 9: 'And it shall be like people, like priest.' The distinction between spiritual leadership and the people has collapsed. When the leaders become as corrupt as the led, the capacity for covenant renewal is severely damaged.",
  },
  {
    color: GOLD,
    title: "The Spirit of Whoredom and Green Tree Worship (4:11-14)",
    body: "'A spirit of whoredom has led them astray, and they have left their God to play the whore. They sacrifice on the tops of the mountains and burn offerings on the hills, under oak, poplar, and terebinth, because their shade is good. Therefore your daughters play the whore, and your brides commit adultery' (4:11-13). The 'spirit of whoredom' (ruach zenunim) is a condition that has taken over Israel's interior life. The idolatry Hosea describes -- sacrifice on mountaintops, offerings under shade trees, the classic Canaanite fertility cult sites -- is not forced on them from outside. It has become their impulse, their spirit. Green tree worship was the dominant rival to the LORD in Canaan, associated with the Baals and Ashtaroth, with sexual rites performed under sacred trees at the high places. Israel had absorbed this practice so thoroughly that it had become reflexive. Verse 14 adds an unexpected theological note: God says he will not punish the daughters for their sexual sin because the men themselves had been doing the same things with cult prostitutes. Judgment is not merely individual; it is structural.",
  },
  {
    color: TEAL,
    title: "Judah, Do Not Follow (4:15-19)",
    body: "'Though you play the whore, O Israel, let not Judah become guilty. Enter not into Gilgal, nor go up to Beth-aven, and swear not, As the LORD lives' (4:15). Gilgal was a significant cultic site associated with Israel's covenant history; Beth-aven ('house of wickedness') is a mocking alteration of Bethel ('house of God'), suggesting that what was once a place of encounter with God had become a place of idolatry. The warning to Judah not to follow Israel is addressed to the southern kingdom that still has a chance. The chapter closes with imagery of Israel as a stubborn heifer who refuses the yoke (4:16) and with the ominous declaration: 'A wind has wrapped them in its wings, and they shall be ashamed because of their sacrifices' (4:19). The wind -- the ruach that has become a spirit of whoredom -- will carry them away. The chapter that opened with a legal summons closes with judgment in motion.",
  },
];

const THEME_ITEMS = [
  {
    color: PURPLE,
    title: "The Rib (Lawsuit) Form in the Prophets",
    body: "Hosea 4 employs a legal genre that appears throughout the prophetic literature: the divine lawsuit or covenant lawsuit. God summons Israel to court, presents the charges, and pronounces judgment. Similar passages appear in Micah 6:1-8 ('Hear what the LORD says: arise, plead your case before the mountains'), Isaiah 1:2-20, and Jeremiah 2:4-13. The lawsuit form assumes the covenant framework. Israel did not enter a relationship with God casually; they entered a formal treaty at Sinai. The prophets use the rib formula to show that God is not acting arbitrarily. He is enforcing an agreement that Israel accepted and repeatedly violated. The legal genre also establishes that judgment is just and proportionate, not capricious.",
  },
  {
    color: GOLD,
    title: "The Triad: Emet, Hesed, Da'at Elohim",
    body: "The three virtues named in 4:1 -- emet (faithfulness/truth), hesed (steadfast covenant love), and da'at Elohim (knowledge of God) -- form a theological triad that summarizes what covenant life is supposed to look like. These are not three separate items on a checklist; they are three dimensions of a single relationship. Emet is reliability: you are what you say you are. Hesed is loyalty that persists through difficulty and failure. Da'at Elohim is intimate acquaintance with God that produces right behavior, not as external compliance but as the natural expression of who you have become in relationship with him. Hosea will return to all three themes throughout the book. In 6:6, God declares: 'I desire hesed and not sacrifice, and the knowledge of God rather than burnt offerings.' The triad defines the interior life that outward religion is supposed to reflect.",
  },
  {
    color: TEAL,
    title: "The Teaching Responsibility of Priests and Pastors",
    body: "Hosea 4:6 places the responsibility for Israel's ignorance squarely on the priests. This was not accidental. In the Old Testament structure, the Levitical priesthood carried a specific teaching mandate. Deuteronomy 33:10 says of Levi: 'They shall teach Jacob your rules and Israel your law.' Malachi 2:7 states: 'For the lips of a priest should guard knowledge, and people should seek instruction from his mouth.' When priests failed to teach -- when they rejected knowledge -- the people had no reliable access to the knowledge of God. The text is not saying that laypeople bear no responsibility for their own spiritual formation. But it is saying that spiritual leaders bear a particular accountability for the ignorance of those entrusted to their care. James 3:1 echoes this in the New Testament: 'Not many of you should become teachers, my brothers, for you know that we who teach will be judged with greater strictness.'",
  },
  {
    color: ROSE,
    title: "Ecological Mourning: The Land and Its Creatures",
    body: "Hosea 4:3 is one of the most striking ecological passages in the Bible: 'Therefore the land mourns, and all who dwell in it languish, and also the beasts of the field and the birds of the heavens, and even the fish of the sea are taken away.' The ecological dimension of covenant unfaithfulness is not peripheral. In the Old Testament worldview, the land was a participant in the covenant (Lev 26:3-4, 20). A faithful Israel would produce a land of abundance; a covenant-breaking Israel would produce a land of drought and desolation. The beasts, birds, and fish are not punished for Israel's sin; they suffer its consequences. Paul develops this theme in Romans 8:19-22: 'the creation waits with eager longing for the revealing of the sons of God... the creation itself will be set free from its bondage to corruption.' The covenant between God and humanity has always had implications for the rest of creation.",
  },
  {
    color: GREEN,
    title: "Like People, Like Priest: The Collapse of Moral Leadership",
    body: "Hosea 4:9 delivers one of the most devastating social diagnoses in the prophetic literature: 'And it shall be like people, like priest.' The role of the priest in Israel was to be different from the people -- set apart, holy, equipped with the knowledge of God and the law. When the distinction collapses, the community loses its capacity for self-correction. A society in which the leaders are as corrupt as the led has no internal mechanism for renewal. This principle extends beyond the Old Testament priesthood to any form of spiritual or moral leadership. When those who are supposed to hold the community accountable to a higher standard become indistinguishable from the community in their values and behavior, the community drifts without correction. The prophets consistently hold leaders to a higher standard not to create an elite class but because the function of leadership is precisely to embody the standard that calls the community forward.",
  },
  {
    color: PURPLE,
    title: "The Spirit of Whoredom: When Idolatry Becomes a Disposition",
    body: "The 'spirit of whoredom' in Hosea 4:12 is not a description of an occasional lapse. It is a description of a settled disposition, an interior orientation that has taken over. The Hebrew ruach can mean spirit, wind, or breath -- the invisible but powerful force that drives behavior. Israel was not being led astray by an external agent against its will; the spirit of whoredom had become their spirit. They had internalized the orientation toward the Baals and the fertility cults so thoroughly that it now drove them naturally. This is Hosea's diagnosis of advanced spiritual corruption: when what was once a temptation has become a disposition, when idolatry has moved from the periphery of life to its center. The remedy is not willpower but the renewal of the interior life -- which is why Hosea will later speak of God wooing Israel back to the wilderness, speaking tenderly to her heart, and giving her a new door of hope (2:14-15).",
  },
  {
    color: GOLD,
    title: "Wine and Strong Drink: The Loss of Understanding",
    body: "Hosea 4:11 makes a compact but powerful claim: 'whoredom, wine, and new wine, which take away the understanding.' The Hebrew word translated 'understanding' is leb or lebab -- the heart, which in Hebrew thought was the seat of understanding and will, not merely emotion. Hosea lists whoredom (idolatry), wine, and new wine together as things that diminish the capacity for moral discernment. In the immediate context, this likely refers to the ritual use of alcohol in the fertility cult worship that Israel had adopted. But the principle extends further: whatever dulls the capacity to think clearly about God, self, and neighbor is spiritually dangerous precisely because it erodes the knowledge of God. The connection between wine and the destruction of understanding is picked up in Proverbs 20:1 and in Paul's contrast in Ephesians 5:18: 'do not get drunk with wine, for that is debauchery, but be filled with the Spirit.'",
  },
  {
    color: TEAL,
    title: "Judah Warned: Gilgal and Beth-Aven",
    body: "The warning to Judah in 4:15 to avoid Gilgal and Beth-aven (Bethel) is a word of grace as well as warning. Gilgal was the first campsite of Israel after crossing the Jordan (Josh 5) and a site associated with covenant renewal. It had apparently become corrupted. Bethel had been one of Jacob's most significant encounters with God (Gen 28) but had become the site of Jeroboam's golden calves (1 Kings 12:29). By the time of Hosea, these places of covenant memory had become places of covenant violation. The warning to Judah: do not follow Israel's example; do not attach yourself to places that have become centers of idolatry just because they carry a prestigious covenant history. The history of a place does not sanctify its current use. Judah's privilege in having the Jerusalem temple and the Davidic line did not automatically exempt her from the same patterns -- a warning the later prophets would make explicit.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Hosea 4:1-3",
    color: PURPLE,
    title: "The LORD's Lawsuit: No Faithfulness, Love, or Knowledge",
    body: "'Hear the word of the LORD, O children of Israel, for the LORD has a controversy with the inhabitants of the land. There is no faithfulness or steadfast love, and no knowledge of God in the land; there is swearing, lying, murder, stealing, and committing adultery; they break all bounds, and bloodshed follows bloodshed. Therefore the land mourns, and all who dwell in it languish, and also the beasts of the field and the birds of the heavens, and even the fish of the sea are taken away' (4:1-3). The call to 'hear' opens prophetic speeches throughout the OT. The rib formula positions God as plaintiff and Israel as defendant. The absence of emet, hesed, and da'at Elohim is not one problem among many but the root from which all the specific sins grow. The five sins that follow (swearing, lying, murder, stealing, adultery) correspond to the second table of the Decalogue -- the commandments governing horizontal human relationships. The ecological mourning in verse 3 extends the consequences of human sin outward into the created order. Land, beasts, birds, fish: a comprehensive ecological picture of systemic collapse.",
  },
  {
    ref: "Hosea 4:4-6",
    color: GOLD,
    title: "The Priest's Failure: Destroyed for Lack of Knowledge",
    body: "'Yet let no one contend, and let none accuse, for with you is my contention, O priest. You shall stumble by day; the prophet also shall stumble with you by night; and I will destroy your mother. My people are destroyed for lack of knowledge; because you have rejected knowledge, I reject you from being a priest to me. And since you have forgotten the law of your God, I also will forget your children' (4:4-6). The pivot to the priest is the theological hinge of the chapter. The people's destruction is traced to the priest's failure to teach. 'Stumble by day' and 'stumble by night' suggests comprehensive failure -- there is no time of day when the priest functions well. 'Destroy your mother' likely refers to the nation of Israel as the priestly family's origin and support. The verb translated 'rejected' in verse 6 -- ma'as -- is decisive: this was not passive neglect but active refusal. The mirror-image divine response ('I reject you from being a priest') shows that God's judgment follows the shape of human sin. Rejection meets rejection; forgetting meets forgetting.",
  },
  {
    ref: "Hosea 4:7-10",
    color: TEAL,
    title: "They Fed on Israel's Sin: Like People, Like Priest",
    body: "'The more they increased, the more they sinned against me; I will change their glory into shame. They feed on the sin of my people; they are greedy for their iniquity. And it shall be like people, like priest. I will punish them for their ways and repay them for their deeds. They shall eat, but not be satisfied; they shall play the whore, but not multiply, because they have forsaken the LORD to cherish whoredom' (4:7-10). The priests had created a perverse economic arrangement: their income (from sin offerings) increased with the people's sinning. Spiritual leadership had become financially incentivized corruption. The phrase 'like people, like priest' is a devastating leveling -- the distinction between holy and common that the priesthood was supposed to embody had disappeared. The consequences in verses 9-10 are structured as failed satisfactions: eat but not be satisfied, multiply but not succeed. The things they pursued most eagerly -- food, fertility -- will elude them.",
  },
  {
    ref: "Hosea 4:11-14",
    color: ROSE,
    title: "Spirit of Whoredom: Wine, Understanding, and Green Tree Worship",
    body: "'Whoredom, wine, and new wine, which take away the understanding. My people inquire of a piece of wood, and their walking staff gives them oracles. For a spirit of whoredom has led them astray, and they have left their God to play the whore. They sacrifice on the tops of the mountains and burn offerings on the hills, under oak, poplar, and terebinth, because their shade is good. Therefore your daughters play the whore, and your brides commit adultery. I will not punish your daughters when they play the whore, nor your brides when they commit adultery; for the men themselves go aside with prostitutes and sacrifice with cult prostitutes, and a people without understanding shall come to ruin' (4:11-14). The compression in these verses is remarkable. Wine and whoredom together strip away the leb -- the heart-mind capable of moral and spiritual discernment. The sacred trees on the hilltops (oak, poplar, terebinth) were classic Canaanite high places where fertility rites were performed. The 'spirit of whoredom' has led them not to an occasional sin but to a systematic alternative religion. The final indictment -- 'a people without understanding shall come to ruin' -- loops back to the destruction for lack of knowledge in verse 6.",
  },
  {
    ref: "Hosea 4:15-19",
    color: GREEN,
    title: "Judah, Do Not Follow: The Wind Has Wrapped Them",
    body: "'Though you play the whore, O Israel, let not Judah become guilty. Enter not into Gilgal, nor go up to Beth-aven, and swear not, As the LORD lives. Like a stubborn heifer, Israel is stubborn; can the LORD now feed them like a lamb in a broad pasture? Ephraim is joined to idols; leave him alone. When their drink is gone, they give themselves to whoring; their rulers dearly love shame. A wind has wrapped them in its wings, and they shall be ashamed because of their sacrifices' (4:15-19). The appeal to Judah is framed as Israel's example-as-warning. The animal imagery of the stubborn heifer captures Israel's resistance to the divine yoke. 'Ephraim is joined to idols; leave him alone' is chilling: there is a point at which God stops contending with those who have made their choice irrevocably. The closing wind image -- carrying them off in the wings of the ruach that has become their spirit of whoredom -- is one of Hosea's most haunting images. What began as a lawsuit ends as an impending deportation.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: PURPLE,
    title: "The Three Things God Wants: Faithfulness, Love, Knowledge",
    body: "Hosea 4:1 offers a diagnostic framework for every era of the church: Where is there no faithfulness? Where is there no steadfast love? Where is there no knowledge of God? These three are not ornamental additions to a solid religious life; they are the substance of what covenant faithfulness looks like. A church that is busy -- programs running, buildings full, budgets healthy -- but lacks emet (reliability between its members), hesed (the kind of love that refuses to abandon the difficult neighbor), and da'at Elohim (genuine acquaintance with God that transforms behavior) is, according to Hosea, in the same condition as Israel. The question the passage invites is not 'Are we doing enough religious things?' but 'Is the interior reality there that religious practice is supposed to produce?'",
  },
  {
    color: GOLD,
    title: "What Knowledge of God Means in Hosea",
    body: "In Hosea, da'at Elohim is not doctrinal information about God, though it is not less than that. It is the intimate relational knowledge that comes from actual encounter with who God is. The Hebrew verb yada' (to know) is used for the most intimate human relationships, including marital union (Gen 4:1). To know God in Hosea's sense is to have been so shaped by encounter with God that you live differently -- that emet and hesed flow naturally from you because you have experienced God's emet and hesed toward you. The diagnostic question this raises for personal discipleship is not 'How much do I know about God?' but 'Has my knowledge of God changed the way I live, the way I treat people, the way I handle money and power and conflict?' Hosea 4 suggests that knowledge of God that does not produce the fruits of faithfulness and steadfast love is not the knowledge God intends.",
  },
  {
    color: TEAL,
    title: "The Responsibility of Teachers and Pastors",
    body: "Hosea 4:6 is one of the most searching texts in Scripture for those who hold teaching roles in the church. 'Because you have rejected knowledge, I reject you from being a priest to me. And since you have forgotten the law of your God, I also will forget your children.' The stakes of pastoral and teaching ministry are high in the Old and New Testaments alike. People are shaped by what they are taught. A congregation whose pastor and teachers do not provide substantive formation in the knowledge of God will be, in Hosea's language, destroyed for lack of knowledge -- not destroyed by external enemies, but hollowed out from within, incapable of sustained faithfulness because the interior life that faithfulness requires has never been cultivated. This text calls pastors and teachers not merely to deliver information but to model and cultivate the kind of knowing that shapes the whole person.",
  },
  {
    color: ROSE,
    title: "Recognizing Spiritual Ignorance in Our Own Lives",
    body: "It is easier to see the 'destroyed for lack of knowledge' pattern in ancient Israel or in visible church failures than to recognize it in ourselves. Hosea invites a more uncomfortable application: Where in my own life is there a gap between what I claim to know and how I actually live? Where have I 'rejected knowledge' -- not in a dramatic apostasy, but in the quieter forms that look like declining to read and think carefully, avoiding the passages of Scripture that challenge comfortable patterns, surrounding myself with voices that confirm what I already believe rather than voices that expand my knowledge of God? The priest in Hosea 4 did not stage a rebellion against God. He simply stopped doing the work of knowing and teaching. Spiritual ignorance is often the result of gradual neglect rather than dramatic rejection.",
  },
  {
    color: GREEN,
    title: "The Ecological Dimension of Covenant Faithfulness",
    body: "Hosea 4:3 -- 'the land mourns, and all who dwell in it languish, and also the beasts of the field and the birds of the heavens, and even the fish of the sea are taken away' -- is a remarkable ecological statement that deserves sustained attention. In the Old Testament worldview, the covenant between God and Israel was not simply about human flourishing; it was embedded in the created order. Faithfulness produced abundance; unfaithfulness produced desolation. The created world was not a neutral stage on which the human drama played out; it participated in the drama. For the contemporary church thinking about creation care, Hosea 4 offers a prophetic framework: environmental degradation is not only an ecological problem; it is a theological symptom. The ecological crisis and the spiritual crisis are related. A people without knowledge of God, without faithfulness and steadfast love, will treat the creation as carelessly as they treat each other.",
  },
];

const VIDEO_ITEMS = [
  { id: "MvRtP3xZbKo", title: "Hosea 4: Destroyed for Lack of Knowledge (Verse by Verse)" },
  { id: "QwNbY7uJfXm", title: "No Faithfulness Love or Knowledge -- Hosea 4:1-3 Study" },
  { id: "TpKcR8vMnLs", title: "The Priest's Failure in Hosea 4 -- Teaching Responsibility" },
  { id: "VhJqP5wBzGt", title: "Spirit of Whoredom -- Hosea 4 Commentary" },
];

export default function Hosea4GuidePage() {
  const [tab, setTab] = useState<Hos4Tab>("overview");
  const [openOverview, setOpenOverview] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleOverview = (id: string) => setOpenOverview(openOverview === id ? null : id);
  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #0a0015 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>HOSEA 4</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                My People Are Destroyed for Lack of Knowledge
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "Hosea 4 opens with a divine lawsuit against Israel: no faithfulness, no steadfast love, no knowledge of God in the land. The priests who were meant to teach bear special responsibility. The land itself mourns under the weight of covenant-breaking." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Book", value: "Hosea" },
                  { label: "Chapter", value: "4" },
                  { label: "Genre", value: "Prophetic Lawsuit (Rib)" },
                  { label: "Key Verse", value: "Hosea 4:6" },
                ].map(item => (
                  <div key={item.label} style={{ background: "#12121Fcc", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", fontFamily: "system-ui, sans-serif" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Verse Banner */}
          <div style={{ background: `${PURPLE}12`, borderBottom: `1px solid ${PURPLE}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;My people are destroyed for lack of knowledge; because you have rejected knowledge, I reject you from being a priest to me.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Hosea 4:6 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Hos4Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 4 marks the opening of the second major section of the book. After the biographical chapters introducing Hosea and Gomer (chs. 1&ndash;3), chapter 4 begins the prophetic speeches proper &mdash; and it begins with a formal legal indictment that echoes the covenant lawsuit genre used throughout the prophetic tradition." }}
                />

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Hosea 4</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "4:1", desc: "The rib (lawsuit): the LORD has a controversy with the inhabitants of the land" },
                      { ref: "4:1b", desc: "The triple absence: no emet, no hesed, no da'at Elohim" },
                      { ref: "4:2", desc: "The sins: swearing, lying, murder, stealing, adultery -- bloodshed follows bloodshed" },
                      { ref: "4:3", desc: "Ecological mourning: land, beasts, birds, fish" },
                      { ref: "4:4-6", desc: "The priest indicted: destroyed for lack of knowledge" },
                      { ref: "4:7-10", desc: "Like people, like priest: they fed on the sin of the people" },
                      { ref: "4:11-14", desc: "Spirit of whoredom: wine, green tree worship, cultic prostitution" },
                      { ref: "4:15-19", desc: "Warning to Judah: do not follow Israel -- the wind has wrapped them" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 40, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {OVERVIEW_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleOverview(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openOverview === s.title ? "-" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Why This Chapter Matters</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Hosea 4 is the diagnostic chapter of the book. It does not merely catalog Israel's sins; it traces them to their root. The root is the absence of da'at Elohim &mdash; knowledge of God. And the responsibility for that absence falls primarily on those who were appointed to cultivate it: the priests. The chapter holds together what we often separate: the spiritual (knowledge of God), the ethical (faithfulness and steadfast love), the social (the cascade of sins in v. 2), and the ecological (the mourning of creation in v. 3). These are not separate domains; they are dimensions of a single covenant relationship that has broken down at its center." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 4 is one of the theologically richest single chapters in the Minor Prophets. The themes it introduces &mdash; the rib formula, the triad of covenant virtues, the teaching responsibility of priests, the ecological consequences of sin &mdash; reverberate through the rest of Hosea and beyond into the New Testament." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEME_ITEMS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleTheme(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === s.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Hosea 4:6 in the New Testament</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The concern for knowledge in Hosea 4 resonates powerfully in the New Testament. Jesus laments that his opponents 'do not know the Scriptures or the power of God' (Matt 22:29). Paul prays that believers would be 'filled with the knowledge of his will in all spiritual wisdom and understanding' (Col 1:9). John writes, 'This is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent' (John 17:3). The da'at Elohim that Hosea declares missing in Israel is now offered definitively in Christ &mdash; who is the fullness of God's self-revelation. The incarnation is God's answer to the problem of Hosea 4: the knowledge of God that the priests could not give, Jesus gives in his own person." }}
                  />
                </div>
              </div>
            )}

            {/* VERSE BY VERSE */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "A close reading of the five major movements in Hosea 4, from the opening lawsuit through the ecological mourning, the indictment of the priests, the spirit of whoredom, and the warning to Judah." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(s => (
                    <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleVerse(s.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <div>
                            <span style={{ color: s.color, fontWeight: 700, fontSize: 12, letterSpacing: 0.5, fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 2 }}>{s.ref}</span>
                            <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                          </div>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openVerse === s.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === s.ref && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Structure of the Chapter</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Hosea 4 moves through a concentric pattern. The outer frame (vv. 1-3 and vv. 15-19) addresses Israel as a whole: the opening lawsuit and the closing wind-carried judgment. The inner frame (vv. 4-6 and vv. 11-14) addresses the specific corruptions of the priests and the cultic whoredom they permitted. The center (vv. 7-10) delivers the devastating diagnosis: like people, like priest. Everything radiates out from this collapse of the distinction between leaders and led. The structure itself makes the theological argument: when the center fails (the knowledge of God in the priesthood), everything else unravels &mdash; outward into the community and ultimately into the land itself." }}
                  />
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 4 is one of those prophetic texts that reads like a letter addressed to the contemporary church as much as to ancient Israel. The patterns it identifies &mdash; religious activity without interior transformation, leadership without teaching substance, knowledge about God without knowledge of God &mdash; are not confined to the eighth century BC." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                  {APPLICATION_ITEMS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleApp(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openApp === s.title ? "-" : "+"}</span>
                      </button>
                      {openApp === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Study Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      "How would you describe the difference between knowing about God and knowing God in the sense Hosea means?",
                      "Where do you see the pattern of 'like people, like priest' (4:9) in the contemporary church? What enables it?",
                      "The three absent virtues in 4:1 are faithfulness, steadfast love, and knowledge of God. Which of the three do you find most challenging to maintain in your own life?",
                      "Hosea 4:3 says the land mourns when Israel breaks covenant. How does this connect to how you think about environmental responsibility?",
                      "What would it look like in your context to take the teaching responsibility of 4:6 seriously -- whether as a teacher, parent, small group leader, or fellow believer?",
                      "The 'spirit of whoredom' in 4:12 describes idolatry that has become a settled disposition. What contemporary dispositions might function similarly -- pulling us away from knowledge of God without our realizing it?",
                    ].map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20 }}>Video Teaching</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, marginBottom: 16 }}>
                  {VIDEO_ITEMS.map(v => (
                    <div key={v.id}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <p style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}>{v.title}</p>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 24, marginTop: 16 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>A Prayer from Hosea 4</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontFamily: "Georgia, serif" }}
                    dangerouslySetInnerHTML={{ __html: "Lord, search us for the absence of emet &mdash; where we are not what we say we are. Search us for the absence of hesed &mdash; where our love for neighbor has grown calculating and conditional. Search us for the absence of da&rsquo;at Elohim &mdash; where we have accumulated information about you while remaining strangers to you. Do not let us be a people destroyed for lack of knowledge. Give us teachers and pastors who take their calling seriously, and give us hearts willing to receive what they teach. Let us know you &mdash; not as data, but as the living God who speaks and acts and refuses to remain unknown. Amen." }}
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
