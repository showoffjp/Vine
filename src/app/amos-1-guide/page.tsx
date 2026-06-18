"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = GOLD;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Amos1Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "Amos the Shepherd from Tekoa",
    body: "Amos is one of the most distinctive personalities in the prophetic literature. Unlike Isaiah, who came from the Jerusalem establishment, or Jeremiah, who was a priest, Amos was a shepherd (noqed) and a dresser of sycamore figs from Tekoa, a village about ten miles south of Jerusalem in the wilderness of Judah. He was not a professional prophet and makes this explicit in chapter 7: 'I was no prophet, nor a prophet's son, but I was a herdsman and a dresser of sycamore figs. But the LORD took me from following the flock, and the LORD said to me, Go, prophesy to my people Israel' (7:14-15). The divine compulsion overrode social categories. A farmer from the south was sent to preach to the prosperous north. His rural perspective gave him a clear eye for the exploitation of the poor that the urban elites of Samaria had normalized. His outsider status gave him the freedom to say what insiders could not afford to say.",
  },
  {
    color: TEAL,
    title: "The Historical Setting: Prosperity and Injustice",
    body: "Amos prophesied during the reign of Jeroboam II of Israel (c. 786-746 BC), who is briefly mentioned in the superscription (1:1). This was the high-water mark of the northern kingdom's power and prosperity. The Assyrian empire was temporarily weakened by internal struggles, allowing Israel to expand its territory and enjoy an unprecedented period of economic flourishing. Trade was booming, the wealthy class was building houses of carved stone and luxury furniture (3:15, 6:4), and the religious festivals at Bethel were well attended and musically elaborate (5:21-23). On the surface, all appeared well. What Amos saw beneath the surface was a society in which the prosperity of the few had been built on the systematic exploitation of the many: the poor were sold for silver, the needy for a pair of sandals (2:6), and the courts were corrupted to protect the interests of the powerful (5:12). The gap between appearance and reality was exactly the kind of situation in which prophetic speech was necessary.",
  },
  {
    color: ROSE,
    title: "The LORD Roars from Zion",
    body: "The book of Amos opens with one of the most powerful images in the prophetic literature: 'The LORD roars from Zion and utters his voice from Jerusalem; the pastures of the shepherds mourn, and the top of Carmel withers' (1:2). The image of the roaring lion was not merely rhetorical. In the ancient Near East, the roar of a lion was the most terrifying sound a rural person could hear in the night -- the sound that meant death was close. God's voice is here likened to that primal terror, and its effects are immediately visible in creation: the pastures mourn, the top of Carmel (the lush northern promontory, symbol of fertility) withers. God's speech is not merely a message to be heard and evaluated; it is a force that reshapes the landscape. This opening verse sets the entire book at a register of intense seriousness. What follows is not a gentle invitation to reform; it is the roar of the divine sovereign.",
  },
  {
    color: PURPLE,
    title: "The Three-and-Four Formula: Completeness of Iniquity",
    body: "The rhetorical engine of Amos 1-2 is the repeated formula: 'For three transgressions of [X], and for four, I will not revoke the punishment.' This formula appears eight times in chapters 1-2. The 'three and four' pattern is a numerical idiom in Hebrew wisdom literature that means not literally three or four offenses but rather 'the full measure,' 'overflowing,' 'more than enough.' It is a way of saying: this nation has crossed the line past any point of mitigation. The punishment will not be revoked (literally: 'I will not cause it to turn back') -- not because God is inflexible but because the iniquity has run its full course and the consequences are now inevitable. The formula creates a powerful rhetorical rhythm as Amos moves from nation to nation. The audience at Bethel or Samaria would have been nodding along with each oracle against a foreign enemy -- and then, in Amos 2, the formula is applied to Israel itself.",
  },
  {
    color: GREEN,
    title: "The Six Nations and Their Crimes Against Humanity",
    body: "Amos 1 condemns six surrounding nations for specific crimes that are remarkably concrete: Damascus for threshing Gilead with iron sledges (1:3), Gaza for delivering whole populations into exile as slaves (1:6), Tyre for delivering communities to Edom and breaking brotherly covenants (1:9), Edom for pursuing his brother with the sword and suppressing compassion (1:11), Ammon for ripping open pregnant women of Gilead to expand territory (1:13). These are not vague moral failures; they are precise war crimes. The threshing of Gilead suggests the use of iron-toothed threshing sledges on human prisoners -- one of the most brutal forms of torture known in the ancient world. The delivery of whole populations into slavery to Edom is ethnic cleansing. The ripping open of pregnant women is the deliberate destruction of a future generation. God's judgment in Amos 1 is not generic; it is targeted at specific atrocities.",
  },
  {
    color: GOLD,
    title: "The Rhetorical Trap Being Set for Israel",
    body: "The most brilliant feature of Amos 1-2 as a rhetorical composition is the trap it sets for its original audience. The oracles against the six surrounding nations are arranged in a pattern that circles closer and closer to Israel with each one: Damascus (northeast), Gaza (southwest), Tyre (northwest), Edom (southeast), Ammon (east), Moab (southeast). Six foreign nations condemned -- and the audience at Bethel or Samaria would have been applauding each one. Then the formula is applied to Judah (2:4-5) -- the southern kingdom, Israel's rival. And then, finally, the formula falls on Israel itself: 'For three transgressions of Israel, and for four, I will not revoke the punishment' (2:6). By the time the trap closes, the audience has already agreed to the standard of judgment that condemns them. This is the most sophisticated piece of prophetic rhetoric in the entire Hebrew Bible.",
  },
];

const THEME_ITEMS = [
  {
    color: GOLD,
    title: "The Prophetic Opening Roar: God's Voice as Power",
    body: "The opening verse of Amos (1:2) establishes the book's fundamental claim: God's speech has physical consequences in the world. 'The LORD roars from Zion and utters his voice from Jerusalem; the pastures of the shepherds mourn, and the top of Carmel withers.' This is not merely a description of God's emotional state; it is a cosmological claim. When God speaks, creation responds. The pastures mourn -- an anthropomorphizing of the landscape that suggests the whole created order is attentive to the divine voice. Carmel withers -- the most lush and fertile region of Israel dries up at God's word. The prophet's voice is not merely his own opinion; it is the amplification of the divine roar. This is why the prophet cannot remain silent even when silence would be safer: 'The lion has roared; who will not fear? The Lord GOD has spoken; who can but prophesy?' (Amos 3:8).",
  },
  {
    color: TEAL,
    title: "Universal Moral Accountability: Nations Outside the Covenant",
    body: "The most theologically significant feature of Amos 1 is that God holds non-Israelite nations accountable for crimes committed against non-Israelite peoples. Damascus is condemned not for offending Israel but for the treatment of Gilead. Gaza is condemned not for breaking the Mosaic covenant but for human trafficking. Tyre is condemned for breaking a political covenant with a neighboring people. These nations are not covenant partners of the LORD; they have no Torah, no Sinai, no circumcision. Yet God holds them morally accountable for war crimes against humanity. This implies a universal moral law that is written into creation itself, not merely into the specific covenant with Israel. Paul's argument in Romans 1-2 -- that Gentiles have the law written on their hearts (2:15) and are accountable for natural revelation (1:19-21) -- is the New Testament development of exactly this prophetic theme.",
  },
  {
    color: PURPLE,
    title: "The Three-and-Four Formula: Rhetoric and Theology",
    body: "The formula 'for three transgressions... and for four' is both a rhetorical device and a theological statement. Rhetorically, it creates the repetitive rhythm that enables Amos's trap for his audience: each oracle has the same shape, the same escalating expectation. Theologically, it declares that the nations have reached the point of no return -- that the accumulation of iniquity has crossed a threshold beyond which punishment is no longer being held in abeyance. The Hebrew idiom of 'three and four' (like 'six and seven' in Job 5:19) indicates fullness, completeness, the brimming over of a vessel. It is not a legalistic count of exactly three or four offenses; it is a declaration that the moral account is full. This concept of moral saturation or 'the iniquity of the Amorites being full' (Gen 15:16) runs through the entire Old Testament as an explanation for divine judgment.",
  },
  {
    color: ROSE,
    title: "War Crimes as the Primary Charges: God as Defender of the Vulnerable",
    body: "The specific crimes charged against the nations in Amos 1 are all what we would today classify as war crimes and crimes against humanity: atrocity violence against civilians (threshing with iron sledges), mass deportation and enslavement of whole populations, breaking of diplomatic covenants, relentless fratricidal violence, and the deliberate targeting of pregnant women to eliminate a future generation. In every case, the victims are the vulnerable: conquered populations, enslaved peoples, pregnant women. And in every case, God is the one who takes up their case. There is no human court to which the populations of Gilead can appeal; the nations that threshed them are the law in their own territories. But God is not bound by the law of the powerful. He speaks from Zion, and his court transcends the courts of Hazael and Pekah and the lords of Gaza.",
  },
  {
    color: GREEN,
    title: "The Rhetorical Trap: We Too Are Not Exempt",
    body: "Amos 1 sets up the most elaborate rhetorical trap in the prophetic literature, but the trap is not merely for eighth-century Israelites. Any reader who nods along to the condemnation of foreign atrocities -- who applauds God's judgment on the threshers of Gilead and the slave traders of Gaza and the murderers of pregnant women -- must then sit with the fact that the same God, by the same formula, will shortly address the same words to Israel. The trap catches us too. It is easy to affirm God's judgment on the nations; it is harder to receive that same standard turned on our own society, our own institutions, our own comfortable arrangements with injustice. Amos 1 invites not only agreement ('those nations deserve judgment') but examination ('what in our own social arrangements is building the same kind of moral case?').",
  },
  {
    color: GOLD,
    title: "Fire on the Strongholds: The Pattern of Judgment",
    body: "The judgment oracle in each case takes the same form: fire will be sent and will consume the strongholds of the condemned nation. The stronghold (armon) is the royal palace, the seat of the ruling power, the symbol of the nation's strength and pride. God's judgment in Amos does not fall on the common people first; it falls on the power structures that enabled and protected the atrocities. The fire is not described as military conquest by a named enemy in these oracles; it is divine fire, the fire of God's own moral outrage. In historical terms, the Assyrian conquest would provide the instrument of this fire for most of these nations. But Amos does not describe it in those terms; the fire is God's, and the agency of historical powers is secondary to the divine moral judgment that they enact.",
  },
  {
    color: TEAL,
    title: "Damascus, Gaza, Tyre, Edom, Ammon: A Moral Geography",
    body: "The six nations condemned in Amos 1 surround Israel from every direction, and the oracles against them constitute a kind of moral geography of the ancient Near East. Damascus to the northeast -- brutal conquerors. Gaza to the southwest -- slave traders. Tyre to the northwest -- covenant breakers. Edom to the southeast -- implacable fratricidal hatred. Ammon to the east -- territorial aggression through atrocity. Moab (chapter 2) to the southeast -- the desecration of royal remains. By sweeping through the compass points and condemning each nation in turn, Amos establishes that God's moral vision is not parochial or nationalistic. It encompasses the entire political geography of the ancient world. No nation is outside the range of God's moral attention. No atrocity committed far from Israel's borders is invisible to the LORD who roars from Zion.",
  },
  {
    color: PURPLE,
    title: "Amos and the Prophetic Tradition",
    body: "Amos is frequently described as the earliest of the 'writing prophets' -- the prophets whose words were collected into books -- though this priority is debated. His ministry in the mid-eighth century (c. 760-750 BC) predates Isaiah and Micah by a decade and Jeremiah and Ezekiel by well over a century. Yet his theological categories are not primitive; they are remarkably sophisticated. The universality of moral accountability, the critique of empty religious observance, the advocacy for the poor, the concept of the 'day of the LORD' as a day of darkness rather than light for the complacent -- all of these themes will be developed and elaborated by later prophets, but Amos states them with a clarity and force that has rarely been surpassed. The shepherd from Tekoa spoke with the authority of one who had been compelled by the divine roar.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Amos 1:1",
    color: TEAL,
    title: "Superscription: The Shepherd-Prophet from Tekoa",
    body: "The superscription of Amos places the prophet's ministry with unusual biographical specificity: 'The words of Amos, who was among the shepherds of Tekoa, which he saw concerning Israel in the days of Uzziah king of Judah and in the days of Jeroboam the son of Joash, king of Israel, two years before the earthquake' (1:1). The reference to 'the earthquake' suggests that an unusually severe seismic event was a known fixed point for dating in later Israelite memory -- Zechariah 14:5 still refers to 'the earthquake in the days of Uzziah.' The word translated 'shepherds' (noqed) is a rare term that may refer specifically to a sheep-breeder who supplied animals for sacrifice, which would explain Amos's detailed knowledge of both agricultural realities and religious practices. Tekoa was located in the wilderness of Judah, southeast of Bethlehem, in terrain that bred both hardiness and a clear-eyed view of the landscape.",
  },
  {
    ref: "Amos 1:2",
    color: GOLD,
    title: "The LORD Roars from Zion",
    body: "'The LORD roars from Zion and utters his voice from Jerusalem; the pastures of the shepherds mourn, and the top of Carmel withers' (1:2). This verse is the theological key to the entire book. First: God speaks from Zion, not from Bethel or Dan, the northern kingdom's alternative worship sites. The God who is about to judge Israel is the God of Jerusalem, the God of the Davidic covenant. The north's attempt to establish rival sanctuaries has not changed where divine authority resides. Second: the divine speech has immediate environmental effects -- pastures mourn, Carmel withers. Carmel was the lushest and most fertile region of Israel, the site of Elijah's contest with the Baals (1 Kings 18). For Carmel to wither at God's voice is to signal that the divine word will strip away even Israel's most prized natural advantages. Third: this verse is a hinge on which the entire book turns -- every oracle that follows flows from this initial declaration of divine authority and power.",
  },
  {
    ref: "Amos 1:3-5",
    color: ROSE,
    title: "Damascus: Threshing Gilead with Iron Sledges",
    body: "The first oracle is against Damascus, the capital of Aram-Syria, to Israel's northeast: 'For three transgressions of Damascus, and for four, I will not revoke the punishment, because they have threshed Gilead with threshing sledges of iron. So I will send a fire upon the house of Hazael, and it shall devour the strongholds of Ben-hadad. I will break the gate bar of Damascus, and cut off the inhabitants from the Valley of Aven, and him who holds the scepter from Beth-eden; and the people of Syria shall go into exile to Kir, says the LORD' (1:3-5). The image of threshing Gilead with iron sledges is one of the most brutal in the prophets. Threshing sledges were heavy wooden boards studded with iron teeth or stones, dragged over grain to separate the wheat from the chaff. When this instrument was used on human beings, it was a form of torture that reduced them to a similar state. The Aramaeans had used this method on the population of Gilead during their military campaigns. God names the specific instrument of atrocity and declares it the ground of judgment. The exile to Kir (the reverse of the Aramean origin tradition, Amos 9:7) is a prophetic reversal of their national narrative.",
  },
  {
    ref: "Amos 1:6-8",
    color: PURPLE,
    title: "Gaza: Delivering Whole Communities to Edom",
    body: "'For three transgressions of Gaza, and for four, I will not revoke the punishment, because they carried into exile a whole people to deliver them up to Edom. So I will send a fire upon the wall of Gaza, and it shall devour her strongholds. I will cut off the inhabitants from Ashdod, and him who holds the scepter from Ashkelon; I will turn my hand against Ekron, and the remnant of the Philistines shall perish, says the Lord GOD' (1:6-8). The Philistine city-states along the Mediterranean coast had been engaged in large-scale slave-trading, capturing entire communities -- likely from the borderlands of Israel and Judah -- and delivering them to Edom for resale. The phrase 'a whole people' (galut shlemah) indicates not individual captives but the complete deportation of entire villages or districts. This is ethnic cleansing for profit. The judgment falls not just on Gaza but on the entire Philistine coastal system: Ashdod, Ashkelon, Ekron. The remnant of the Philistines will perish -- an ironic echo of the 'remnant' language that elsewhere speaks of God's preserved people.",
  },
  {
    ref: "Amos 1:9-10",
    color: TEAL,
    title: "Tyre: Breaking the Covenant of Brothers",
    body: "'For three transgressions of Tyre, and for four, I will not revoke the punishment, because they delivered up a whole people to Edom, and did not remember the covenant of brothers. So I will send a fire upon the wall of Tyre, and it shall devour her strongholds' (1:9-10). Tyre's crime is similar to Gaza's -- delivering whole communities to Edom as slaves -- but there is an additional element: they 'did not remember the covenant of brothers.' This phrase suggests that Tyre had a standing diplomatic covenant (likely with Israel, given the famous alliance between Hiram of Tyre and Solomon) that was being violated by these transactions. The slave-trading was not only a crime against humanity; it was a betrayal of a specific covenant relationship. The added dimension of covenant breach makes Tyre's guilt compound: they committed the atrocity and also broke the treaty that should have prevented it. The judgment is the same: fire on the wall, fire on the strongholds.",
  },
  {
    ref: "Amos 1:11-12",
    color: GOLD,
    title: "Edom: Pursuing His Brother with the Sword",
    body: "'For three transgressions of Edom, and for four, I will not revoke the punishment, because he pursued his brother with the sword and cast off all pity, and his anger tore perpetually, and he kept his wrath forever. So I will send a fire upon Teman, and it shall devour the strongholds of Bozrah' (1:11-12). Edom is the nation descended from Esau, Jacob's brother -- hence the charge 'pursued his brother.' The long enmity between Edom and Israel (Jacob's descendants) is one of the most theologically fraught sibling relationships in the Old Testament. The specific charge here is not a single military atrocity but a chronic, unrelenting hatred: 'his anger tore perpetually, and he kept his wrath forever.' Edom has not merely committed war crimes; he has made permanent, implacable hatred into a national policy. The suppression of 'all pity' (rachamo) -- the same root as the compassion that characterizes the LORD (Exod 34:6) -- is the moral core of the charge. Edom has become the opposite of the God of Israel in his most characteristic attribute.",
  },
  {
    ref: "Amos 1:13-15",
    color: ROSE,
    title: "Ammon: Ripping Open Pregnant Women to Expand Territory",
    body: "'For three transgressions of the Ammonites, and for four, I will not revoke the punishment, because they have ripped open pregnant women in Gilead, that they might enlarge their border. So I will kindle a fire in the wall of Rabbah, and it shall devour her strongholds, with shouting on the day of battle, with a tempest in the day of the whirlwind. And their king shall go into exile, he and his princes together, says the LORD' (1:13-15). The Ammonite atrocity is among the most horrifying recorded in the Old Testament. The deliberate killing of pregnant women by cutting open their wombs is an act of extermination directed not merely at a present population but at its future -- a calculated attempt to end the possibility of future generations in Gilead. The motive given is territorial expansion: 'that they might enlarge their border.' The atrocity was committed not out of uncontrolled battlefield violence but as a deliberate military strategy for demographic conquest. The judgment extends from the walls of Rabbah (the Ammonite capital) to the exile of the king and his princes -- the entire ruling structure that authorized and executed the policy.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GOLD,
    title: "God Holds All People Morally Accountable",
    body: "The first and most foundational application of Amos 1 is the recognition that God's moral expectations are not limited to people who know the Bible or belong to the church. The nations condemned in Amos 1 had no Torah, no prophets (in most cases), no covenant with the LORD. Yet God holds them accountable for threshing people with iron sledges, for slave-trading, for killing pregnant women. This means that the moral law is not merely a sectarian standard; it is woven into the fabric of creation itself. 'What can be known about God is plain to them, because God has shown it to them' (Rom 1:19). The implication for contemporary life is that we cannot excuse atrocities committed by non-Christian societies on the grounds that they did not know better. There is a law written on the human heart (Rom 2:15), and God reads it with the same attention he brings to the Torah. Accountability is universal.",
  },
  {
    color: TEAL,
    title: "Taking Seriously the Protection of Vulnerable People",
    body: "The charges in Amos 1 are not theological abstractions; they are crimes against specific categories of vulnerable people: conquered civilian populations, enslaved communities, pregnant women, the populations of Gilead caught between greater powers. God's voice roars on their behalf. The implication for the church is not subtle: the protection of the vulnerable is not a peripheral social concern that distracts from the 'real' work of the gospel; it is a concern that the LORD of hosts takes with lethal seriousness. The nations in Amos 1 are not condemned for idolatry or theological error; they are condemned for what they did to the most vulnerable people in their reach. Any community that claims to hear the roar of the LORD from Zion must take account of what that LORD is roaring about.",
  },
  {
    color: PURPLE,
    title: "Recognizing the Rhetorical Setup: We Too Are Not Exempt",
    body: "One of the most important applications of Amos 1 is the recognition of the rhetorical trap and then the honest question: where do we sit in that trap? It is easy and right to affirm that God condemns the threshing of people with iron sledges, the slave-trading of whole populations, the killing of pregnant women. But the same prophet who voices those condemnations will shortly apply the same formula to Israel -- and the charges against Israel in Amos 2-8 are economic exploitation of the poor, corruption of the courts, and the sin of complacent prosperity while injustice accumulates. The application question for a prosperous Western church is not primarily 'those foreign atrocities are terrible' but 'what in our own social arrangements is building the same kind of moral case before the God who roars from Zion?' The trap is meant to catch us, not just to validate our condemnation of others.",
  },
  {
    color: ROSE,
    title: "Responding to the Roar of the LORD with Honest Self-Examination",
    body: "Amos opens with the roar of the LORD, and the appropriate response to a roar is not calm analysis but honest reckoning. The shepherds' pastures mourn and Carmel withers -- creation trembles at the divine voice. What does it mean for us to take seriously a God whose voice has that kind of authority and consequence in the world? It means that our response to prophetic speech cannot be merely intellectual agreement or aesthetic appreciation. Amos 1 is not a text to be admired for its rhetorical sophistication and then filed away. It is an invitation to the kind of self-examination that the Israeli audience at Bethel resisted right up until the Assyrian armies arrived. The roar of the LORD from Zion is not a sound reserved for the nations of chapter 1. It addresses everyone who will hear. The wise response is not applause for the condemnation of others; it is honest self-examination in the light of the same moral standard.",
  },
  {
    color: GREEN,
    title: "Amos 1 and the Prophetic Mandate for Justice",
    body: "Amos 1 is the opening of a book that will go on to deliver some of the most powerful statements about justice in the entire Bible: 'let justice roll down like waters, and righteousness like an ever-flowing stream' (5:24). That famous verse makes no sense in isolation; it makes complete sense in the context of a book that opens with God condemning international war crimes with the same moral force he will apply to domestic economic injustice. The God of Amos is not primarily interested in correct liturgy or sincere sentiment; he is interested in whether the vulnerable are protected and the powerful held accountable. For a community that takes Amos seriously, this means that the pursuit of justice is not a political option but a prophetic imperative -- and that the complacent celebration of one's own prosperity while others suffer is precisely the condition that brought Israel under the same judgment formula that had been applied to its enemies.",
  },
];

const VIDEO_ITEMS = [
  { id: "XrKcN5wZmQo", title: "Amos 1: The LORD Roars from Zion (Full Study)" },
  { id: "ZtMtP8vJbNs", title: "Oracles Against the Nations &mdash; Amos 1 Explained" },
  { id: "BvNpY6uBwLk", title: "Three Transgressions and Four &mdash; The Formula of Amos 1" },
  { id: "DxPrT4xZfVm", title: "Universal Moral Accountability &mdash; Amos 1 Commentary" },
];

export default function Amos1GuidePage() {
  const [tab, setTab] = usePersistedState<Amos1Tab>("vine_amos1_tab", "overview");
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
          <div style={{ background: "linear-gradient(135deg, #1a0f00 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>AMOS 1</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The LORD Roars from Zion
              </h1>
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "Amos opens with a thunderclap &mdash; the LORD roaring from Zion &mdash; followed by a series of oracles against six surrounding nations for crimes against humanity, all using the formula &ldquo;for three transgressions and for four.&rdquo; The rhetorical trap is being set for Israel." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Amos of Tekoa" },
                  { label: "Setting", value: "Northern Israel, c. 760-750 BC" },
                  { label: "Key Verse", value: "Amos 1:2" },
                  { label: "Genre", value: "Prophetic Oracles Against the Nations" },
                ].map(item => (
                  <div key={item.label} style={{ background: `${CARD}cc`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", fontFamily: "system-ui, sans-serif" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Verse Banner */}
          <div style={{ background: `${GOLD}12`, borderBottom: `1px solid ${GOLD}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                <p
                  style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD roars from Zion and utters his voice from Jerusalem; the pastures of the shepherds mourn, and the top of Carmel withers.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Amos 1:2 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Amos1Tab)}
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
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Amos 1 is a masterpiece of prophetic rhetoric. A shepherd from the south opens with the roar of God from Zion, then delivers six oracles against surrounding nations &mdash; each for concrete war crimes &mdash; using a formula that will eventually snap shut on Israel itself." }}
                />

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Amos 1</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "1:1", desc: "Superscription: Amos the shepherd-prophet from Tekoa, two years before the earthquake" },
                      { ref: "1:2", desc: "The opening roar: the LORD from Zion -- pastures mourn, Carmel withers" },
                      { ref: "1:3-5", desc: "Oracle against Damascus: threshing Gilead with iron sledges" },
                      { ref: "1:6-8", desc: "Oracle against Gaza: delivering whole communities to Edom as slaves" },
                      { ref: "1:9-10", desc: "Oracle against Tyre: delivering communities to Edom, breaking brotherly covenants" },
                      { ref: "1:11-12", desc: "Oracle against Edom: pursuing his brother with the sword, suppressing all compassion" },
                      { ref: "1:13-15", desc: "Oracle against Ammon: ripping open pregnant women to enlarge their border" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 40, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { color: TEAL, nation: "Damascus", crime: "Threshing Gilead with iron sledges -- atrocity violence against civilians" },
                    { color: PURPLE, nation: "Gaza", crime: "Delivering whole communities into exile as slaves to Edom" },
                    { color: ROSE, nation: "Tyre", crime: "Delivering communities to Edom, breaking the covenant of brothers" },
                    { color: GOLD, nation: "Edom", crime: "Pursuing his brother with the sword, suppressing all compassion" },
                    { color: GREEN, nation: "Ammon", crime: "Ripping open pregnant women of Gilead to enlarge their border" },
                  ].map(item => (
                    <div key={item.nation} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.nation}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.crime}</div>
                    </div>
                  ))}
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
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openOverview === s.title ? "-" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Book of Amos in Context</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Amos prophesied during the reign of Jeroboam II (c. 786-746 BC), when the northern kingdom of Israel was at the height of its power. The Assyrian empire was temporarily weakened, Israel had recovered territory and prosperity, and the upper classes of Samaria were enjoying unprecedented luxury. Trade flourished. The temples were full. The music was elaborate. Everything appeared well &mdash; and Amos arrived to say that everything was not well." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The strategy of Amos 1 &mdash; beginning with oracles against surrounding nations &mdash; was rhetorically brilliant. An audience at the Bethel sanctuary would have welcomed the condemnation of Syria and the Philistines and Edom. By the time Amos reached Israel in chapter 2, the standard of judgment had already been established by the applause of the audience. The trap had been set." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Amos 1 introduces themes that run through the entire book and through the prophetic tradition: the divine roar, universal moral accountability, the three-and-four formula, war crimes as the ground of judgment, and the rhetorical strategy that makes the audience complicit in the standard that will condemn them." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEME_ITEMS.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleTheme(t.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{t.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openTheme === t.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === t.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{t.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Amos 1 and Universal Moral Accountability in the New Testament</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Romans 1:19-21", note: "What can be known about God is plain to all -- natural revelation creates accountability" },
                      { ref: "Romans 2:14-15", note: "Gentiles who do not have the law show the law's work written on their hearts" },
                      { ref: "Acts 17:30-31", note: "God commands all people everywhere to repent -- universal accountability" },
                      { ref: "Romans 3:9-20", note: "Both Jews and Gentiles are under sin -- the universal reach of God's moral standard" },
                      { ref: "Revelation 16:5-7", note: "The God who judges Babylon for the blood of prophets and saints -- Amos 1 at cosmic scale" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 130, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Oracle Formula: Structure of Each Nation Oracle</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { element: "The opening formula", content: "For three transgressions of [X], and for four, I will not revoke the punishment" },
                      { element: "The specific charge", content: "Because they have [specific atrocity] -- named with concrete detail" },
                      { element: "The fire of judgment", content: "So I will send a fire upon [the strongholds] -- divine fire on the seat of power" },
                      { element: "Political consequences", content: "The king / rulers / people will face specific named consequences" },
                      { element: "The closing signature", content: "says the LORD / says the Lord GOD -- divine authority behind the oracle" },
                    ].map(item => (
                      <div key={item.element} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 160, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.element}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VERSE BY VERSE */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Amos 1 rewards close reading because the details of each oracle are significant: the specific crimes named, the specific nations addressed, the specific consequences decreed. Nothing is ornamental. Each word carries the weight of the divine roar that opened the book." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(s => (
                    <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleVerse(s.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ background: s.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>{s.ref}</span>
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openVerse === s.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === s.ref && (
                        <div style={{ padding: "0 20px 20px 20px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}>{s.body}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Geographic Pattern of Amos 1-2</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The oracles in Amos 1-2 follow a geographic pattern that scholars have mapped as a tightening spiral around Israel. Beginning with distant enemies and moving closer with each oracle, the sequence creates both rhetorical momentum and a sense of divine omniscience: no nation, however distant or powerful, is outside the LORD&rsquo;s sight." }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { nation: "Damascus (Aram-Syria)", dir: "Northeast of Israel", ref: "1:3-5" },
                      { nation: "Gaza (Philistia)", dir: "Southwest of Israel", ref: "1:6-8" },
                      { nation: "Tyre (Phoenicia)", dir: "Northwest of Israel", ref: "1:9-10" },
                      { nation: "Edom", dir: "Southeast of Israel", ref: "1:11-12" },
                      { nation: "Ammon", dir: "East of Israel", ref: "1:13-15" },
                      { nation: "Moab", dir: "Southeast of Israel", ref: "2:1-3" },
                      { nation: "Judah", dir: "South -- Israel's kin", ref: "2:4-5" },
                      { nation: "Israel", dir: "The audience itself", ref: "2:6-16" },
                    ].map(item => (
                      <div key={item.nation} style={{ display: "flex", gap: 12, padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 160, fontFamily: "system-ui, sans-serif" }}>{item.nation}</span>
                        <span style={{ color: MUTED, fontSize: 13, flex: 1, fontFamily: "system-ui, sans-serif" }}>{item.dir}</span>
                        <span style={{ color: MUTED, fontSize: 12, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Opening Roar: Amos 1:2 in Context</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Verse 1:2 is not merely an introduction; it is a theological claim that governs everything that follows. The LORD speaks from Zion &mdash; not from Bethel, not from the high places of the northern kingdom. This positions Amos's prophecy within the Jerusalem/Davidic tradition even though he is addressing the north. The effects on Carmel (the lush northern promontory) anticipate the theme of coming agricultural judgment. And the roar itself establishes the register of the book: this is not a gentle pastoral invitation but the sound of divine authority that makes creation tremble." }}
                  />
                  <div style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: "&ldquo;The lion has roared; who will not fear? The Lord GOD has spoken; who can but prophesy?&rdquo; &mdash; Amos 3:8 (ESV)" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Amos 1 is a text that demands a response beyond intellectual appreciation. Its theological claims about universal accountability, the protection of the vulnerable, and the rhetorical trap it sets are all designed to produce honest self-examination rather than comfortable applause." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {APPLICATION_ITEMS.map(a => (
                    <div key={a.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleApp(a.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{a.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openApp === a.title ? "-" : "+"}</span>
                      </button>
                      {openApp === a.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{a.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "What does it mean to you that God condemns these nations for crimes that had nothing to do with Israel or the covenant? What does this imply about the moral structure of the universe?",
                      "Which of the specific crimes in Amos 1 has a contemporary equivalent that you find it easy to condemn? What about one that implicates your own society more directly?",
                      "The three-and-four formula suggests a threshold of moral saturation. Can you identify social arrangements in your own context that seem to be approaching that threshold?",
                      "What is your equivalent of the Bethel audience nodding along to the condemnation of enemies? Where do you apply God's justice standard enthusiastically to others while resisting it for yourself?",
                      "How does the roar of the LORD from Zion challenge comfortable, domesticated versions of Christianity that emphasize only divine love and never divine moral authority?",
                      "What would genuine response to the roar of Amos 1 look like for your local church community?",
                    ].map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Amos 1 and the Call to Justice</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Amos 1 is the foundation of the justice theology that reaches its most famous expression in Amos 5:24: &lsquo;Let justice roll down like waters, and righteousness like an ever-flowing stream.&rsquo; That famous call can only be heard rightly in the context of a God who, in chapter 1, has already demonstrated his absolute commitment to justice for the victims of war crimes in Gaza and Damascus and Ammon. The justice God calls for in chapter 5 is not a new idea; it is the application to Israel of the same standard by which God has already judged all the surrounding nations." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The God who roars from Zion is not neutral about human suffering. He is specifically attentive to the suffering of those who have no advocate, no court, no power to defend themselves: the populations threshed like grain, the communities sold into slavery, the pregnant women killed to make room for someone else&rsquo;s territorial expansion. This attentiveness is not peripheral to the biblical God; it is one of his most essential characteristics, and Amos 1 displays it at the level of international relations." }}
                  />
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Further Study in Amos</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Amos 2:6-16", note: "The oracle against Israel -- the trap closes; Israel condemned for economic exploitation" },
                      { ref: "Amos 3:1-8", note: "The lion has roared; who will not fear? The prophet compelled to speak" },
                      { ref: "Amos 4:1-3", note: "The cows of Bashan -- the women of Samaria who oppress the poor" },
                      { ref: "Amos 5:18-24", note: "The Day of the LORD as darkness not light; let justice roll down like waters" },
                      { ref: "Amos 7:10-17", note: "Amos and Amaziah at Bethel -- the prophet vs. the establishment priest" },
                      { ref: "Amos 9:11-15", note: "The restoration promise -- the booth of David raised up; the plowman overtakes the reaper" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                  {VIDEO_ITEMS.map(v => (
                    <div key={v.id}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <p
                        style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: v.title }}
                      />
                    </div>
                  ))}
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
