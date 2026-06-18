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
const ACCENT = PURPLE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Hos1Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: PURPLE,
    title: "The Shocking Opening Command (1:2)",
    body: "Hosea 1:2 is one of the most startling verses in all of Scripture: 'When the LORD first spoke through Hosea, the LORD said to Hosea, Go, take to yourself a wife of whoredom and have children of whoredom, for the land commits great whoredom by forsaking the LORD.' Before we meet the prophet's theology, his style, or his historical setting, we are confronted with a divine command that would strike any Israelite as scandalous. A prophet's reputation was his prophetic credential. Hosea is told to destroy his social credibility from day one by marrying a woman known for sexual immorality. The reason is given immediately: the land itself has become a prostitute by abandoning the LORD. Hosea's marriage will be a walking, breathing, visible parable of Israel's spiritual condition.",
  },
  {
    color: GOLD,
    title: "Gomer Daughter of Diblaim",
    body: "Hosea marries a woman named Gomer, daughter of Diblaim (1:3). Commentators have debated whether Gomer was already a prostitute before the marriage or became one afterward. The text says Hosea 'went and took Gomer the daughter of Diblaim, and she conceived and bore him a son' -- the sequence suggests an existing relationship, but the grammar allows for either reading. What is not debated is what the marriage meant theologically: it was an enacted prophecy. Hosea was not merely preaching about Israel's unfaithfulness; he was living it. Every morning he woke up to the living illustration of his message. This is what makes Hosea's prophecy so unique: his whole life became the word of God.",
  },
  {
    color: TEAL,
    title: "Jezreel: The First Child (1:4-5)",
    body: "The first child is named Jezreel -- 'God sows' or 'God scatters' -- and his name carries a double meaning. On the one hand, Jezreel is the site of Jehu's violent coup, in which he slaughtered Ahab's entire household (2 Kings 9-10). God declares that he will punish the house of Jehu 'for the blood of Jezreel' and will end the kingdom of Israel in the Valley of Jezreel (1:4-5). The dynasty currently on the throne of Israel (Jeroboam II's line) descended from Jehu, whose coup at Jezreel God had originally commanded but whose political violence had exceeded its mandate and become its own kind of bloodguilt. Jezreel the child embodies both the coming judgment and, in chapter 2, the eventual restoration: 'I will sow her for myself in the land' (2:23).",
  },
  {
    color: ROSE,
    title: "Lo-Ruhamah: No Mercy (1:6-7)",
    body: "The second child is a daughter named Lo-ruhamah -- literally 'Not Pitied' or 'No Mercy.' The LORD announces: 'I will no more have mercy on the house of Israel, to forgive them at all' (1:6). The word ruhamah comes from the Hebrew root racham -- the same root as rachamim, the warm maternal compassion that God elsewhere claims as one of his most essential attributes (Exod 34:6-7, Ps 103:13). To name a child Lo-ruhamah is to announce the withdrawal of the very quality most associated with divine character. This is shocking covenant language. But a distinction is made: Judah will still receive God's mercy (1:7). The oracle against Israel's northern kingdom is paired with a promise that the southern kingdom will be saved -- though not by military might but by the LORD their God.",
  },
  {
    color: PURPLE,
    title: "Lo-Ammi: Not My People (1:8-9)",
    body: "After Lo-ruhamah is weaned, Gomer conceives again and bears a son named Lo-ammi -- 'Not My People.' The LORD's word is devastating in its directness: 'You are not my people, and I am not your God' (1:9). To understand the weight of this, you must know the covenant formula. At Sinai, God said to Israel: 'I will be your God, and you will be my people' (Lev 26:12, Jer 7:23, Ezek 36:28). This formula is the most basic statement of Israel's identity and relationship with God. Lo-ammi is the direct negation of that formula. God is not simply expressing displeasure; he is announcing the formal dissolution of the covenant relationship. The people who were 'my people' are now 'not my people.' This is the darkest name of the three.",
  },
  {
    color: GREEN,
    title: "The Restoration Pivot (1:10-11)",
    body: "And then, with no transition, without even a chapter break in the original Hebrew, the text pivots: 'Yet the number of the children of Israel shall be like the sand of the sea, which cannot be measured or numbered. And in the very place where it was said to them, You are not my people, it shall be said to them, Children of the living God' (1:10). The very site of rejection becomes the site of restoration. The covenant formula is reinstated with even greater force: not merely 'my people' but 'children of the living God.' The sand of the sea echoes the Abrahamic promise (Gen 22:17). What appeared to be the end of the covenant is revealed to be the prologue to its ultimate fulfillment. Lo-ammi will become Ammi. Lo-ruhamah will become Ruhamah. Jezreel will shift from scattering to sowing.",
  },
];

const THEME_ITEMS = [
  {
    color: PURPLE,
    title: "Living Parable and Enacted Prophecy",
    body: "Hosea's marriage to Gomer is the most extensive example of what scholars call 'enacted prophecy' or 'symbolic action' in the prophetic literature -- surpassing even Isaiah's three years of walking naked (Isa 20:3) or Ezekiel's elaborate sign-acts (Ezek 4-5). The difference is that Hosea's symbolic action was not a temporary performance but a lifelong relationship. He did not act out a parable; he lived one. This means the emotional content of Hosea's prophecy was not rhetorical but biographical. When Hosea preaches about God's anguish over Israel's unfaithfulness, he knows what that anguish feels like. His theology is not armchair theology; it was forged in the experience of a broken marriage.",
  },
  {
    color: GOLD,
    title: "The Marriage Metaphor for the Covenant",
    body: "Hosea 1 introduces a metaphor that will become one of the most important in the entire Bible: the covenant between God and Israel as a marriage. The LORD is the husband; Israel is the wife. Faithfulness to God is marital fidelity; idolatry is adultery and prostitution. This metaphor, introduced here and developed through Hosea 2-3, will echo through Jeremiah (2:2, 3:1-10), Ezekiel (16 and 23), Isaiah (54:4-8, 62:4-5), and the Song of Songs (which many read as a celebration of the same covenant love). In the NT, it becomes the image for the relationship between Christ and the church: 'I feel a divine jealousy for you, since I betrothed you to one husband, to present you as a pure virgin to Christ' (2 Cor 11:2, cf. Eph 5:25-32, Rev 19:7).",
  },
  {
    color: TEAL,
    title: "Symbolic Naming as Prophecy",
    body: "The three children of Hosea and Gomer carry the entire theological content of Hosea's message in their names. Jezreel: judgment is coming on the ruling dynasty at the site of its most violent act. Lo-ruhamah: God will no longer extend the mercy that has been the lifeblood of the covenant. Lo-ammi: the covenant itself is being declared null and void. But then the reversal: 'in the place where it was said to them, You are not my people, it shall be said to them, Children of the living God' (1:10). The children who walk around with names of judgment become, in the later chapters, children of promise. Naming in the Old Testament is prophetic speech. To name a child is to announce their destiny. Hosea's children were walking billboards for the entire arc of God's relationship with Israel.",
  },
  {
    color: ROSE,
    title: "The Jezreel Connection: Judgment and Promise",
    body: "Jezreel is a valley in Israel that had become associated with royal violence. Jehu had massacred Ahab's entire household there on God's command (2 Kings 9-10), but the slaughter had metastasized beyond its original scope and become its own kind of sin. Jezreel the child's name signals that this bloodguilt will be repaid and the kingdom of Israel will fall. But in Hosea 2:22-23 and again in 1:10-11, the name Jezreel is transformed: 'I will sow (zara) her for myself in the land.' The same valley that was the site of slaughter becomes the site of planting. God redeems the name of judgment by investing it with the meaning of new life. This double meaning of Jezreel -- scatter and sow -- holds the entire book's dynamic in miniature.",
  },
  {
    color: PURPLE,
    title: "The Horror of Lo-Ammi and the Hope of Restoration",
    body: "The name Lo-ammi ('Not My People') is the theological nadir of Hosea 1. The covenant that defined Israel's entire identity -- that made them Israel and not just another Canaanite people -- is being formally annulled. But the reversal in 1:10 is equally stunning in scope. Not only will they be 'my people' again; they will be 'children of the living God.' The Greek translation (LXX) renders this 'sons of the living God,' and Paul quotes it in Romans 9:26 to show that Gentiles are now being included in the people of God. What was spoken of the northern kingdom of Israel in its rejection becomes, in Paul's reading, a word about the inclusion of all nations in the eschatological people of God. The name that announced rejection now announces adoption.",
  },
  {
    color: GOLD,
    title: "Continuity Between Hosea 1 and Romans 9:25-26",
    body: "Paul's use of Hosea in Romans 9 is one of the most theologically significant intertextual moves in the NT. In Romans 9:25-26 he quotes Hosea 2:23 and 1:10 to demonstrate that God's calling of Gentiles into the covenant people was already foreshadowed in the OT. 'Those who were not my people I will call my people, and her who was not beloved I will call beloved. And in the very place where it was said to them, You are not my people, there they will be called sons of the living God.' Paul is not ripping Hosea out of context; he is reading the restoration of Israel in Hosea as pointing to an even larger restoration that includes the nations. The covenant of grace that Hosea describes is larger than ethnic Israel; it encompasses all who receive God's mercy through Christ.",
  },
  {
    color: TEAL,
    title: "Jezreel as Both Judgment and Promise",
    body: "The valley of Jezreel spans the center of Israel's northern territory and was the breadbasket of the land as well as the site of its most famous battles. In Hosea 1, the name announces judgment; in chapter 2, it announces abundance: 'the earth shall answer the grain, the wine, and the oil, and they shall answer Jezreel' (2:22). This reversal is not arbitrary wordplay. It reflects the prophetic conviction that the places and names associated with Israel's deepest failures are precisely the places that God will redeem. The location of sin becomes the location of restoration. The name of judgment becomes the name of harvest. This pattern -- redemption located at the place of failure -- runs through the prophetic tradition and reaches its climax in the crucifixion: the instrument of execution becomes the instrument of salvation.",
  },
  {
    color: GREEN,
    title: "The Book of Hosea in Its Historical Context",
    body: "Hosea's ministry spans from the reign of Jeroboam II of Israel (died c. 753 BC) into the reigns of several kings of Judah, which means his prophecy likely extended into the 720s BC when the Assyrian empire under Tiglath-pileser III and then Shalmaneser V swallowed the northern kingdom. Hosea prophesied the end of Israel before it happened and watched it approach. His message of unfaithfulness and coming judgment was not abstract theology; it was an announcement of historical catastrophe that was already beginning. The three children's names were not metaphors; they were ticking clocks. And the restoration promised in 1:10-11 was a word of hope spoken into a situation that was visibly deteriorating month by month.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Hosea 1:1",
    color: TEAL,
    title: "Superscription: The Word of the LORD to Hosea",
    body: "The superscription places Hosea's ministry in multiple reigns: 'The word of the LORD that came to Hosea, the son of Beeri, in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah, and in the days of Jeroboam the son of Joash, king of Israel' (1:1). This spans roughly 750 to 715 BC -- some forty years of ministry. Only Uzziah and Jeroboam II overlap, suggesting the book opens at the height of Israel's prosperity and extends into the decades of collapse. The identification of Hosea as 'son of Beeri' is minimal -- we know almost nothing of his background except what the book itself reveals. Unlike Amos, who introduces himself at length, Hosea lets his family life speak for itself.",
  },
  {
    ref: "Hosea 1:2",
    color: ROSE,
    title: "The Shocking Command: Go Take a Wife of Whoredom",
    body: "The command in 1:2 is immediately jarring: 'Go, take to yourself a wife of whoredom and have children of whoredom, for the land commits great whoredom by forsaking the LORD.' The word translated 'whoredom' (zenut in Hebrew) covers a range of sexual immorality and is used frequently in the OT as a metaphor for idolatry. The reason for the command is stated at once: the land commits great whoredom by forsaking the LORD. Hosea's marriage is not a private affair but a public theological statement. Every time an Israelite sees Hosea with Gomer, they see God with Israel. The command does not call Hosea to approve of unfaithfulness; it calls him to embody in his own life the experience of a faithful partner joined to an unfaithful one -- to experience from the inside what it is like to be God in relationship with Israel.",
  },
  {
    ref: "Hosea 1:3-5",
    color: GOLD,
    title: "Gomer and the Birth of Jezreel",
    body: "Hosea obeys immediately: 'So he went and took Gomer, the daughter of Diblaim, and she conceived and bore him a son' (1:3). The oracle attached to the name Jezreel is the most politically specific in the chapter: 'I will punish the house of Jehu for the blood of Jezreel, and I will put an end to the kingdom of the house of Israel' (1:4). In the valley of Jezreel, 'I will break the bow of Israel' (1:5). This is a direct prophecy against the ruling dynasty -- the house of Jehu, in which Jeroboam II reigned. After Jeroboam's death in 753 BC, his son Zechariah reigned only six months before being assassinated by Shallum (2 Kings 15:10) -- the beginning of the rapid collapse of the northern kingdom. Jezreel's name was being fulfilled in real time.",
  },
  {
    ref: "Hosea 1:6-7",
    color: PURPLE,
    title: "Lo-Ruhamah: The Withdrawal of Mercy",
    body: "The second oracle comes with the birth of a daughter: 'She conceived again and bore a daughter. And the LORD said to him, Call her name Lo-ruhamah, for I will no more have mercy on the house of Israel, to forgive them at all. But I will have mercy on the house of Judah, and I will save them by the LORD their God. I will not save them by bow or sword or war or horses or horsemen' (1:6-7). The withdrawal of mercy from Israel is placed in contrast with a promise of mercy for Judah -- and the note that Judah's deliverance will come not through military means but through God himself. This likely points to the deliverance of Jerusalem from the Assyrian siege in 701 BC under Hezekiah (2 Kings 19), when the angel of the LORD struck down 185,000 Assyrian soldiers in a single night.",
  },
  {
    ref: "Hosea 1:8-9",
    color: ROSE,
    title: "Lo-Ammi: The Broken Covenant Formula",
    body: "The third oracle reaches the bottom: 'When she had weaned Lo-ruhamah, she conceived and bore a son. And the LORD said, Call his name Lo-ammi, for you are not my people, and I am not your God' (1:8-9). The last phrase in Hebrew is literally 'I am not I AM for you' -- an echo of the divine name revealed to Moses in Exodus 3:14. To call himself Lo-Ammi's name is to reverse not just a relational formula but the very revelation of God's identity in the exodus. The God who said 'I AM WHO I AM' to Moses is now saying 'I am not I AM for you.' The covenant that began with the divine name is here suspended at the level of the divine name. This is the theological abyss of Hosea 1 -- and it makes the restoration in verse 10 all the more extraordinary.",
  },
  {
    ref: "Hosea 1:10-11",
    color: GREEN,
    title: "The Restoration Pivot: Children of the Living God",
    body: "Verses 10-11 execute one of the most dramatic reversals in prophetic literature. 'Yet the number of the children of Israel shall be like the sand of the sea, which cannot be measured or numbered' (1:10) -- the Abrahamic promise reinstated. 'And in the very place where it was said to them, You are not my people, it shall be said to them, Children of the living God' (1:10). The pivot is spatial as well as relational: the very place of rejection becomes the place of adoption. Verse 11 adds the political dimension: Judah and Israel will be gathered together under 'one head' and 'go up from the land' -- a phrase that echoes the Exodus. The restoration is not just a reversal of the exile; it is a new exodus. The children of Lo-ammi become children of the living God; the people of Lo-ruhamah receive mercy; Jezreel is transformed from scattering to sowing.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: PURPLE,
    title: "Understanding Our Own Spiritual Unfaithfulness",
    body: "Hosea 1 is uncomfortable reading for precisely the reason it was uncomfortable to hear in eighth-century Israel: because it holds up a mirror. The charge of 'whoredom' -- of going after other gods, of spiritual adultery -- was not aimed at people who had formally renounced the LORD. Israel was still worshiping at Bethel. They still offered sacrifices. They still celebrated the festivals. But their hearts were not his alone; they were divided between the LORD and the Baals, between the covenant and the fertility cult, between the God of the exodus and the gods of prosperity and power. The contemporary parallel is not difficult to identify. We too can maintain the forms of faith while directing our deepest allegiances elsewhere -- to security, comfort, status, or power.",
  },
  {
    color: GOLD,
    title: "The Marriage Covenant as a Window into the Covenant of Grace",
    body: "Hosea 1 invites us to understand our relationship with God not through the metaphor of employer and employee, or king and subject, but through the most intimate and vulnerable of human relationships: marriage. This is both encouraging and challenging. Encouraging because it means that God's commitment to us is as personal and as deeply felt as the commitment of a devoted spouse. Challenging because it means our unfaithfulness -- our spiritual wandering, our divided loyalties, our turning to other sources for what only God can give -- is experienced by God as infidelity, not merely as rule violation. The goal is not mere compliance but exclusive, wholehearted love. Hosea's marriage makes the stakes of faith personal, not just propositional.",
  },
  {
    color: TEAL,
    title: "Naming the Places of Lo-Ammi and Claiming Restoration",
    body: "The pivot in Hosea 1:10 -- 'in the very place where it was said to them, You are not my people, it shall be said to them, Children of the living God' -- is one of the most powerful statements of redemptive geography in the Bible. God does not redeem us by erasing the places and times of rejection and failure; he redeems them by showing up there with a new word. For the reader who has experienced profound spiritual dryness, seasons of feeling cut off from God, experiences that felt like Lo-ammi -- 'not my people' -- Hosea 1:10 declares that the very place of that experience is where the new word will be spoken. The location of abandonment becomes the location of adoption. This is not wishful thinking; it is covenant promise.",
  },
  {
    color: ROSE,
    title: "Reading the Old Testament as a Love Story",
    body: "Hosea 1 invites us into a way of reading the entire Old Testament as something more than a history of Israel or a collection of laws and prophecies. It is the story of a love relationship -- passionate, wounded, relentless, costly. God is not a landlord demanding rent; he is a husband whose heart is broken by the wandering of the one he loves. This does not make God sentimental; it makes him tenacious. The God of Hosea keeps pursuing, keeps calling out, keeps offering restoration even after every reason for giving up. The book of Hosea is the prequel to the parable of the prodigal son (Luke 15) and to the entire NT proclamation of God's relentless love in Christ. When Paul writes that 'God demonstrates his own love for us in this: while we were still sinners, Christ died for us' (Rom 5:8), he is finishing the sentence that Hosea 1 began.",
  },
  {
    color: GREEN,
    title: "The Prophetic Imagination: Holding Judgment and Hope Together",
    body: "One of the most striking features of Hosea 1 is the speed with which it moves between judgment and hope. Three children named for rejection and abandonment -- and then immediately a word of extraordinary promise. The prophets consistently refuse to let either pole be the final word in isolation. Judgment without hope is mere doom; hope without judgment is mere sentimentality. The God who names children Lo-ruhamah and Lo-ammi is the same God who promises that those names will be reversed. The prophetic imagination holds these together not by softening either pole but by insisting on the depth and permanence of God's commitment to his people even through and beyond the most severe consequences of their unfaithfulness.",
  },
];

const VIDEO_ITEMS = [
  { id: "Q5dO5B7XqXU", title: "Hosea 1: Go Take a Wife of Whoredom (Explained)" },
  { id: "J4WzLpKN6kc", title: "The Symbolic Children of Hosea 1" },
  { id: "LvMbXuY8jPA", title: "Gomer and Hosea - God's Love for Unfaithful Israel" },
  { id: "aRCzN7tVmFo", title: "Lo-Ammi to Ammi - Hosea 1 and Romans 9" },
];

export default function Hosea1GuidePage() {
  const [tab, setTab] = usePersistedState<Hos1Tab>("vine_hos1_tab", "overview");
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
          <div style={{ background: `linear-gradient(135deg, #0a0015 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>HOSEA 1</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                Go Take a Wife of Whoredom
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "The most shocking opening command in the prophets &mdash; God tells Hosea to marry a woman who will be unfaithful, so that his marriage becomes a living parable of Israel&rsquo;s spiritual adultery. The names of the children decode the covenant drama." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Hosea son of Beeri" },
                  { label: "Setting", value: "Northern Israel, c. 750-715 BC" },
                  { label: "Key Verse", value: "Hosea 1:2, 1:10" },
                  { label: "Genre", value: "Prophetic Biography / Enacted Parable" },
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
          <div style={{ background: `${PURPLE}12`, borderBottom: `1px solid ${PURPLE}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;And in the very place where it was said to them, &lsquo;You are not my people,&rsquo; it shall be said to them, &lsquo;Children of the living God.&rsquo;&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Hosea 1:10 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Hos1Tab)}
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
                  dangerouslySetInnerHTML={{ __html: "Hosea 1 is one of the most theologically dense and emotionally powerful single chapters in the Old Testament. Its eleven verses move through divine command, enacted prophecy, progressive judgment, and astonishing hope &mdash; all organized around the names of three children." }}
                />

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Hosea 1</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "1:1", desc: "Superscription: the word of the LORD to Hosea in the days of Uzziah through Hezekiah" },
                      { ref: "1:2", desc: "The shocking command: go, take to yourself a wife of whoredom" },
                      { ref: "1:3-5", desc: "Gomer and Hosea marry; first child Jezreel born -- blood of Jezreel, end of Israel's kingdom" },
                      { ref: "1:6-7", desc: "Lo-ruhamah (No Mercy) born -- no mercy for Israel but mercy for Judah" },
                      { ref: "1:8-9", desc: "Lo-ammi (Not My People) born -- the broken covenant formula" },
                      { ref: "1:10-11", desc: "The restoration pivot: children of the living God -- one head, go up from the land" },
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
                    { color: ROSE, child: "Jezreel", meaning: "God Sows / God Scatters", oracle: "Judgment on the house of Jehu; end of Israel's kingdom" },
                    { color: GOLD, child: "Lo-Ruhamah", meaning: "No Mercy / Not Pitied", oracle: "God withdraws covenant mercy from Israel" },
                    { color: PURPLE, child: "Lo-Ammi", meaning: "Not My People", oracle: "Formal dissolution of the covenant identity" },
                  ].map(item => (
                    <div key={item.child} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.child}</div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>{item.meaning}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.oracle}</div>
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
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Book of Hosea: Context</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Hosea is the longest of the Minor Prophets and the only one from the northern kingdom of Israel (rather than Judah). His ministry spans the final decades of Israel's existence as a nation &mdash; from the prosperity of Jeroboam II's reign to the years approaching the Assyrian conquest of Samaria in 722 BC. He witnessed in real time the fulfillment of the judgment he was announcing." }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The dominant religious problem in Hosea's era was the syncretism of Baal worship with the worship of the LORD. Israel's farmers had adopted Canaanite fertility religion alongside their covenant faith, turning to the Baals for crop prosperity while maintaining the external forms of Yahwistic worship. Hosea's marriage metaphor cuts directly against this: the LORD is not one option among many; he is the husband, and fidelity to him is exclusive." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 1 introduces themes that run not only through the rest of the book but through the entire biblical canon. The marriage metaphor for the covenant, the pattern of judgment and restoration, the inclusion of the nations &mdash; all are planted in these eleven verses." }}
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

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Marriage Metaphor Through the Canon</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Hosea 2-3", note: "God continues to pursue the unfaithful wife; calls her back with tenderness" },
                      { ref: "Jeremiah 2:2, 3:1-10", note: "Israel's covenant as marriage; spiritual adultery and call to return" },
                      { ref: "Ezekiel 16, 23", note: "Extended allegories of Jerusalem as an unfaithful wife -- the most graphic in Scripture" },
                      { ref: "Isaiah 54:4-8", note: "God as the husband who takes back his forsaken wife with great compassion" },
                      { ref: "2 Corinthians 11:2", note: "Paul presents the church as a pure bride betrothed to Christ" },
                      { ref: "Ephesians 5:25-32", note: "Marriage as a living metaphor for the relationship between Christ and the church" },
                      { ref: "Revelation 19:7, 21:2", note: "The final consummation: the Lamb's marriage to the new Jerusalem" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 1 rewards careful verse-by-verse reading because every element carries theological weight: the names, the sequence, the contrasts between Israel and Judah, and the sudden reversal at the end. Nothing is ornamental." }}
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

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Three Names: A Theological Sequence</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The three names of Hosea's children do not simply repeat the same message three times. They trace a theological sequence: from political judgment (Jezreel), to the withdrawal of relational mercy (Lo-ruhamah), to the dissolution of covenant identity itself (Lo-ammi). Each name cuts deeper than the last. And then the reversal in 1:10-11 runs the sequence backward: identity restored first ('children of the living God'), then the promise of gathering and leadership. By the end of chapter 2, mercy is restored (Ruhamah) and the name Lo-ammi is reversed to Ammi: 'You are my people.'" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { from: "Jezreel (Scatter)", to: "Jezreel (Sow)", ref: "Hos 2:22-23" },
                      { from: "Lo-Ruhamah (No Mercy)", to: "Ruhamah (Mercy)", ref: "Hos 2:23" },
                      { from: "Lo-Ammi (Not My People)", to: "Ammi (My People)", ref: "Hos 2:23" },
                    ].map(item => (
                      <div key={item.from} style={{ display: "flex", gap: 8, alignItems: "center", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
                        <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>{item.from}</span>
                        <span style={{ color: MUTED, fontSize: 16, fontFamily: "system-ui, sans-serif" }}>-&gt;</span>
                        <span style={{ color: GREEN, fontWeight: 700, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>{item.to}</span>
                        <span style={{ color: MUTED, fontSize: 12, marginLeft: "auto", fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Hosea 1:10 in the New Testament</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Paul quotes Hosea 1:10 and 2:23 in Romans 9:25-26 at the climax of his argument about God's sovereignty and the inclusion of Gentiles in the covenant people. His reading is not a proof-text torn from context; it reflects the prophetic logic of the text itself. The restoration Hosea announces is of a people so utterly rejected that the only way to describe their return is as a new creation: 'those who were not my people' becoming 'my people.' Paul sees this new-creation logic being enacted in the inclusion of Gentiles through Christ. What happened to the northern kingdom of Israel at its restoration becomes, in the NT, a pattern for the inclusion of the nations." }}
                  />
                  <div style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: "&ldquo;As indeed he says in Hosea, &lsquo;Those who were not my people I will call my people, and her who was not beloved I will call beloved.&rsquo; And in the very place where it was said to them, &lsquo;You are not my people,&rsquo; there they will be called &lsquo;sons of the living God.&rsquo;&rdquo; &mdash; Romans 9:25-26 (ESV)" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 1 is ancient Scripture with permanent contemporary relevance. The questions it raises about faithfulness, covenant love, spiritual unfaithfulness, and the relentless pursuit of God are not historical curiosities &mdash; they are the questions of every human life lived in relationship with God." }}
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

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "In what areas of your life might you be practicing a divided loyalty -- going through the motions of faith while directing your deepest trust elsewhere?",
                      "How does the marriage metaphor for the covenant change the way you understand what God wants from you?",
                      "Is there a place of 'Lo-ammi' in your life -- a season or area where you felt cut off from God? How does Hosea 1:10 speak to that?",
                      "What does it mean to you that God's love is described as the love of a committed spouse rather than an employer or judge?",
                      "How do you read the Old Testament differently when you understand it as a love story rather than a legal code?",
                      "The three children carry names of judgment. But those names get reversed. Where in your own story have you seen God reverse a name of judgment into a name of promise?",
                    ].map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: PURPLE, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Hosea 1 and the Gospel</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The logic of Hosea 1 is the logic of the gospel. A holy God in covenant with an unfaithful people. Judgment that is real and deserved. And then, in the very place of rejection, a new word of adoption: 'Children of the living God.' The NT does not arrive at this conclusion despite the OT; it arrives at it because of the OT. The cross is where the place of Lo-ammi ('not my people') is permanently reversed: 'But now in Christ Jesus you who once were far off have been brought near by the blood of Christ' (Eph 2:13). The children of Hosea and Gomer are walking previews of the gospel." }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "And the character of Hosea himself -- a faithful husband who continues to love and pursue an unfaithful wife (as we see dramatically in Hosea 3) -- is a type of Christ. Not a perfect analogy; no human can fully embody divine love. But a living enacted sermon about what it looks like when love does not give up, even when every reason for giving up has arrived. This is the love that drove God to the cross." }}
                  />
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Further Study in Hosea</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Hosea 2:14-23", note: "The valley of Achor as a door of hope; covenant renewal and new names" },
                      { ref: "Hosea 3:1-5", note: "God commands Hosea to buy back Gomer from slavery -- love that pays the price" },
                      { ref: "Hosea 6:1-6", note: "'I desire steadfast love and not sacrifice' -- the heart of Hosea's theology" },
                      { ref: "Hosea 11:1-9", note: "The most tender passage in Hosea: 'When Israel was a child, I loved him'" },
                      { ref: "Hosea 14:1-9", note: "The closing call to return and the promise of healing -- 'I will love them freely'" },
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
                      <p style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}>{v.title}</p>
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
