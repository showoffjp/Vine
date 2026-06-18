"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

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

type Mal4Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "The Final Chapter of the Old Testament English Canon",
    body: "Malachi 4 (in Hebrew, 3:19-24 -- the chapter division is a later addition not in the Hebrew text) is the last word the prophetic tradition delivers before four hundred years of prophetic silence. Six verses. Thirty-two Hebrew words in the original. And yet those six verses carry the weight of everything the prophets have been saying since Amos: the day of the LORD is coming, the righteous will be vindicated, and God is not finished with his redemptive purposes. To read Malachi 4 is to stand at the last page of a long story that is not yet over, hearing the final sentence before the next chapter begins. The New Testament opens that next chapter -- but only after these six verses have set the stage. Understanding Malachi 4 is essential for understanding why John the Baptist appears the way he does in the Gospels, and why his ministry produces the response it does.",
  },
  {
    color: ROSE,
    title: "The Burning Day: Arrogant and Evildoers as Stubble (4:1)",
    body: "'For behold, the day is coming, burning like an oven, when all the arrogant and all evildoers will be stubble. The day that is coming shall set them ablaze, says the LORD of hosts, so that it will leave them neither root nor branch' (4:1). The day of the LORD is here described with an agricultural image: the oven used to bake bread in which leftover stubble and chaff are burned as fuel. Those singled out are 'the arrogant and all evildoers' -- exactly the people who had been scoffing at Malachi's message throughout the book. In 3:13-15, they had argued: 'It is vain to serve God. What is the profit of our keeping his charge?' They saw no benefit to covenant faithfulness. The day of the LORD answers their question: the benefit is survival. 'Neither root nor branch' is a totality formula -- complete destruction, no possibility of renewal from root stock.",
  },
  {
    color: TEAL,
    title: "The Sun of Righteousness: Healing in Its Wings (4:2)",
    body: "'But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall' (4:2). The contrast with verse 1 is total. The same day that burns like an oven for the arrogant rises like the sun for those who fear God. The 'sun of righteousness' (shemesh tsedaqah) is one of the most debated phrases in the Old Testament. Is this the sun as a natural phenomenon, bringing the warmth and light of God's righteousness? Or is it a messianic figure -- the one who embodies and brings righteousness? The early church read it messianically, seeing in it a reference to Christ. The phrase 'healing in its wings' draws on the image of the sun-disk with wings common in ancient Near Eastern iconography, here redeemed and filled with the content of YHWH's righteousness. The leaping calves from the stall is one of Scripture's most vivid images of joy -- pent-up energy released into freedom.",
  },
  {
    color: GREEN,
    title: "Treading Down the Wicked Like Ash (4:3)",
    body: "'And you shall tread down the wicked, for they will be ashes under the soles of your feet, on the day when I act, says the LORD of hosts' (4:3). Verse 3 completes the reversal of verse 1. The arrogant who had profited from their wickedness become ash under the feet of those who feared God. This is not presented as an act of revenge by the righteous but as a consequence of 'the day when I act' -- God's action, not human retaliation. The wicked who were stubble in the oven become ash; the righteous who were calves in the stall go out leaping. The imagery is earthy and agricultural throughout: ovens, calves, ash, feet. Malachi is not dealing in abstractions; he is promising a concrete reversal of the social arrangements his audience found so discouraging in 3:13-18.",
  },
  {
    color: PURPLE,
    title: "Remember the Law of Moses (4:4)",
    body: "'Remember the law of my servant Moses, the statutes and rules that I commanded him at Horeb for all Israel' (4:4). Before the climactic promise of Elijah, there is a call to fidelity to what has already been given. The law of Moses -- the Torah given at Horeb (Sinai) -- is still in force. It is still the charter of covenant life. The command to 'remember' (zakhor) is one of the most theologically loaded words in the Old Testament. To remember in biblical terms is not merely to recall; it is to act on what you know. Remember the Torah: let it shape your life, your worship, your economics, your relationships. The insertion of this verse between the promises of the day of the LORD (vv. 1-3) and the promise of Elijah (vv. 5-6) is not accidental. The call to Torah-faithfulness is the bridge between what God has already revealed and what he is about to do. Do not abandon the old gift in anticipation of the new.",
  },
  {
    color: GOLD,
    title: "Behold, I Will Send You Elijah (4:5-6)",
    body: "'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers, lest I come and strike the land with a decree of utter destruction' (4:5-6). These are the last two verses of the Old Testament in English canon order. The promise is specific: Elijah will come. This was not expected to be a resurrection of the historical Elijah who had been taken up in the fiery chariot (2 Kings 2) but a figure like Elijah -- a prophetic voice of the same caliber, with the same function: calling Israel to repentance and covenant renewal before the day of the LORD arrives. The turning of hearts -- fathers to children, children to fathers -- is intergenerational covenant renewal. The condition attached is sobering: lest I come and strike the land with a decree of utter destruction (cherem -- the language of holy war, of total consecration to judgment). The promise of Elijah is not merely hopeful; it is urgent.",
  },
  {
    color: TEAL,
    title: "The Last Word Before Four Hundred Years of Silence",
    body: "The final word of Malachi -- and of the Old Testament prophetic canon -- is 'utter destruction' (cherem). This is the cliffhanger. Not a note of hope, but a word of threat. The promise of Elijah holds off the cherem, but only if hearts are turned. The last sentence of the prophetic tradition is a conditional: IF Elijah comes and turns hearts, THEN the land will be spared. If not, cherem. And then silence. Four hundred years of no recorded prophetic voice, until a man appears in the wilderness of Judea eating locusts and wild honey, dressed in camel's hair with a leather belt, and crowds come from Jerusalem and Judea to be baptized at the Jordan -- and his name is John. Luke 1:17 identifies him explicitly: he will go before the Lord 'in the spirit and power of Elijah, to turn the hearts of fathers to their children.' Malachi 4:5-6 is being fulfilled. The silence is broken. The chapter that Malachi 4 opened has finally begun.",
  },
];

const THEME_ITEMS = [
  {
    color: ROSE,
    title: "The Day of the LORD as Consuming Fire for the Proud",
    body: "Throughout the prophets, 'the day of the LORD' is the moment when God's justice becomes fully visible and operative in history. In Malachi 4, the image is a burning oven: all that is arrogant and evil is stubble consumed by the fire. The day is not arbitrary destruction; it is the final working out of a moral order that the arrogant had been mocking. In 3:13-15, the scoffers had said: 'Everyone who does evil is good in the sight of the LORD, and he delights in them. Or where is the God of justice?' Malachi 4:1 answers: here, on the day that is coming. The consuming fire imagery connects to the theophany traditions of Sinai (Exod 19:18, 24:17), the prophet Elijah's contest with the prophets of Baal (1 Kings 18:38), and the New Testament's own imagery of judgment (2 Thess 1:7-8, Heb 12:29).",
  },
  {
    color: GOLD,
    title: "The Sun of Righteousness: Messianic Interpretation",
    body: "The phrase 'sun of righteousness' (shemesh tsedaqah) in 4:2 has been read messianically throughout the history of interpretation. The Septuagint renders it 'sun of righteousness,' and early Christian interpreters including Origen and Ambrose applied it to Christ. The hymn 'Hark! the Herald Angels Sing' contains the line 'Risen with healing in his wings' -- a direct echo of Malachi 4:2 applied to the incarnation. Whether or not Malachi intends a personal messianic figure or speaks metaphorically of God's righteousness rising over those who fear him, the New Testament trajectory is clear: what Malachi promises, Jesus delivers. He is the light of the world (John 8:12), the righteousness of God (Rom 3:21-22), and the one in whom healing flows (Luke 6:19, Acts 10:38). The sun that Malachi promises has risen.",
  },
  {
    color: TEAL,
    title: "Healing in the Wings: Joy Like Leaping Calves",
    body: "The phrase 'healing in its wings' is as evocative as it is brief. Wings in the Hebrew Bible often carry the imagery of protective shelter (Ps 91:4, Ruth 2:12) and divine presence (Exod 25:20). The sun's rays described as 'wings' carrying healing brings together warmth, movement, shelter, and restoration in a single image. The following phrase -- 'you shall go out leaping like calves from the stall' -- shifts from the cosmic (the sun) to the barnyard (calves), and the contrast is deliberate. Young cattle kept in stalls through winter burst out with explosive, directionless joy when released into pasture. This is the picture of liberation: not the dignified procession of the redeemed, but something far more unguarded and physical. Joy that cannot be controlled because it has been penned up too long.",
  },
  {
    color: GREEN,
    title: "Remember the Law of Moses: The Sinai Covenant Holds",
    body: "The command to remember the law of Moses in 4:4 stands between two prophetic promises (the day of the LORD in vv. 1-3 and the coming of Elijah in vv. 5-6). Its placement is theological: do not be so focused on future fulfillment that you neglect present faithfulness. The Torah given at Horeb is not provisional; it is not superseded by the coming of Elijah or the day of the LORD. It is the covenant that defines life in the meantime. For Christian readers, this verse raises important questions about the relationship between the Old and New Testaments. Paul in Romans 3:31 insists: 'Do we then overthrow the law by this faith? By no means! On the contrary, we uphold the law.' The call to remember the law of Moses is not superseded by the gospel; the gospel reveals what the law always pointed toward.",
  },
  {
    color: PURPLE,
    title: "Elijah and the Turning of Hearts",
    body: "The promise of Elijah in 4:5-6 is specifically about turning hearts. Not about performing miracles, not about defeating political enemies, not about restoring national sovereignty. The specific work of the Elijah-figure is intergenerational reconciliation: 'he will turn the hearts of fathers to their children and the hearts of children to their fathers.' In the original historical Elijah, the turning of hearts was toward the LORD (1 Kings 18:37: 'Turn their hearts back'). In Malachi 4, the turning is both vertical (back to God) and horizontal (back to each other, across generations). This double turning is the condition for avoiding the cherem. John the Baptist inherits this mandate explicitly in Luke 1:16-17: 'he will turn many of the children of Israel to the Lord their God, and he will go before him in the spirit and power of Elijah, to turn the hearts of fathers to their children.'",
  },
  {
    color: ROSE,
    title: "The Last Word of the Old Testament: Utter Destruction",
    body: "It is worth sitting with the fact that the Old Testament ends on a word of threat, not a word of comfort. 'Lest I come and strike the land with a decree of utter destruction' (4:6b). The word cherem is among the strongest in the Hebrew vocabulary of judgment. It means complete consecration to destruction -- the language used for the ban against Canaanite cities in the conquest narratives (Deut 7:2, Josh 6:17). The final word of the prophetic tradition is not 'blessed' but 'destruction.' This is the cliffhanger that requires resolution. The New Testament does not begin with celebration but with the arrival of the one who has come to avert the cherem -- first the Elijah-figure (John) who turns hearts, then the one whom John announced, who himself absorbs the judgment in order to pronounce the blessing.",
  },
  {
    color: TEAL,
    title: "Intergenerational Reconciliation and the Gospel",
    body: "The turning of hearts in 4:6 -- 'the hearts of fathers to their children and the hearts of children to their fathers' -- names one of the deepest wounds in human society: the fracturing of the bond between generations. In Malachi's context, this fracturing was related to covenant unfaithfulness: fathers who had broken covenant had left children without a coherent inheritance of faith. Children who had watched the scoffers prosper had no reason to trust the fathers' God. The reconciliation of generations is not a side effect of the gospel; it is one of its central purposes. The New Testament sees this promise fulfilled not only in the ministry of John the Baptist but in the ongoing work of the Spirit in the church (Acts 2:17: 'your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams').",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Malachi 4:1",
    color: ROSE,
    title: "The Burning Day: All the Arrogant Will Be Stubble",
    body: "'For behold, the day is coming, burning like an oven, when all the arrogant and all evildoers will be stubble. The day that is coming shall set them ablaze, says the LORD of hosts, so that it will leave them neither root nor branch' (4:1). The opening 'For behold' connects this verse to what has come before: the scoffers in 3:13-15 who said it is vain to serve God, and the promise in 3:16-18 that God would remember those who feared him. Now the day of the LORD is described in terms of its effect on each group. The oven image was domestic and familiar -- every household knew how quickly stubble burned. 'Neither root nor branch' denotes complete extinction, no possibility of regrowth. The arrogant who have escaped accountability throughout Malachi's ministry will not escape the day that is coming.",
  },
  {
    ref: "Malachi 4:2",
    color: GOLD,
    title: "Sun of Righteousness: Healing in Wings, Leaping Calves",
    body: "'But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall' (4:2). The contrast introduced by 'but for you' is total. The same day that destroys the wicked liberates the righteous. The 'sun of righteousness' is a solar image investing the language of natural renewal (sunrise after a long night) with the content of tsedaqah -- God's righteousness, his covenant faithfulness, his justice. The 'healing in its wings' addresses the wounds that the righteous have sustained: the confusion of watching wickedness prosper (3:15), the cost of maintaining covenant faithfulness when it seemed profitless. The calves-from-the-stall image is strikingly earthbound: this is not a vision of disembodied spiritual elevation but of physical, kinetic, uncontrolled joy. Liberation from what has been constraining breaks out in the body before the mind can organize it.",
  },
  {
    ref: "Malachi 4:3",
    color: TEAL,
    title: "You Shall Tread Down the Wicked Like Ash",
    body: "'And you shall tread down the wicked, for they will be ashes under the soles of your feet, on the day when I act, says the LORD of hosts' (4:3). This verse completes the day-of-the-LORD tableau. The wicked who were stubble in the oven (v. 1) are now ash under the feet of those who fear God. The phrase 'on the day when I act' is crucial: this treading down is not the righteous taking revenge; it is what happens on the day of divine action. God acts; the wicked are ash; those who feared God walk over the ruins of what opposed them. This is the vindication that the faithful in 3:16-18 were waiting for -- the day when the distinction between those who served God and those who did not would finally be visible. The scroll of remembrance (3:16) will be opened and the names read.",
  },
  {
    ref: "Malachi 4:4",
    color: GREEN,
    title: "Remember the Law of Moses at Horeb",
    body: "'Remember the law of my servant Moses, the statutes and rules that I commanded him at Horeb for all Israel' (4:4). Standing alone as a single verse, this command bridges the day-of-the-LORD promises (vv. 1-3) and the Elijah promise (vv. 5-6). It says: while you wait for the day that is coming, and while you anticipate the Elijah who will prepare for it, live by what has already been given. The Torah given at Horeb (the Deuteronomic name for Sinai) is 'for all Israel' -- the entire covenant community, not just the priests. The word 'remember' (zakhor) in Hebrew implies enacted memory: not just cognitive recall but behavioral faithfulness. Remember the law by keeping it. The specific mention of 'statutes and rules' (chuqqim u-mishpatim) covers the two major categories of the law: the ritual-cultic statutes and the civil-judicial rules. Both are included in the command.",
  },
  {
    ref: "Malachi 4:5-6",
    color: PURPLE,
    title: "Elijah Is Coming: Turn the Hearts -- Lest I Strike",
    body: "'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers, lest I come and strike the land with a decree of utter destruction' (4:5-6). The identification of the coming figure as specifically 'Elijah the prophet' distinguished this from a generic prophetic promise. Elijah had not died in the normal sense; he had been taken up in a fiery chariot (2 Kings 2:11). His return was therefore possible in a way that other prophets' was not. The function of this Elijah-figure -- turning hearts -- is relational and covenantal rather than miraculous. He does not defeat armies or call down fire; he turns hearts. The turning is mutual and intergenerational: father to child, child to father. The consequence of failure is cherem -- utter destruction, holy war judgment. The last word is conditional, urgent, unresolved. Until John appears at the Jordan.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GOLD,
    title: "Living in the Fear of God That Makes the Sun Rise",
    body: "Malachi 4:2 promises the sun of righteousness to 'those who fear my name.' The fear of God in Malachi is not terror but orientation: a life ordered toward God rather than toward the approval of the scoffers who said it is vain to serve God (3:14). The fearers of God in 3:16 'spoke with one another' and 'the LORD paid attention and heard them.' They maintained their practice of covenant faithfulness even when it appeared profitless. Malachi 4:2 promises that the sun rises for them -- that the long night of ambiguity, of watching the arrogant prosper, will give way to the healing warmth of the day when God acts. The application is pastoral: maintain the fear of God not as a crisis response but as a settled orientation of life, even and especially when the evidence seems to argue against it.",
  },
  {
    color: ROSE,
    title: "Waiting for and Receiving John-the-Baptist Figures",
    body: "The promise of Elijah in 4:5 is fulfilled in John the Baptist -- but the pattern it describes recurs throughout Christian history. Every generation needs figures who, in the spirit and power of Elijah, call the community back to covenant faithfulness before it is too late. These are not always comfortable figures. The historical Elijah was not comfortable; John the Baptist was not comfortable. They say things the community does not want to hear. They call the powerful to account. They identify the ways the community has drifted and name what needs to change. Malachi 4 suggests that receiving these figures -- rather than dismissing them -- is a mark of those who fear God's name. The scoffers in Malachi's audience dismissed the prophetic word; those who feared God received it.",
  },
  {
    color: TEAL,
    title: "The Intergenerational Dimension of the Gospel",
    body: "The turning of hearts in 4:6 -- fathers to children, children to fathers -- names one of the specific works of the gospel that is easy to overlook. The gospel is not only about individual salvation; it is about the restoration of broken bonds, including the bonds between generations. In communities where fathers were absent, neglectful, or abusive, there is a specific wound that needs the kind of turning Malachi describes. In communities where children have walked away from the faith of their parents, there is a longing on both sides for the turning of hearts. The ministry of reconciliation that Paul describes in 2 Corinthians 5 has this intergenerational dimension: not only vertical reconciliation with God but horizontal reconciliation between people who belong to each other across time.",
  },
  {
    color: PURPLE,
    title: "The Cliffhanger Resolved in Jesus",
    body: "Malachi 4 ends on a word of utter destruction held off by a conditional promise. The Old Testament ends in suspense. Four hundred years of silence follow. Then the New Testament opens with John in the wilderness, and immediately Matthew and Luke reach back to Malachi 4:5-6 to explain what is happening. 'This is Elijah who is to come' (Matt 11:14). 'He will go before him in the spirit and power of Elijah, to turn the hearts of fathers to their children' (Luke 1:17). The cliffhanger of Malachi 4 is the first problem the New Testament solves. John comes. Hearts are turned. And then the one John announces arrives -- and he does not merely avert the cherem; he absorbs it, dying under the judgment so that those who feared God's name might go out leaping like calves from the stall.",
  },
  {
    color: GREEN,
    title: "The Advent Posture: Waiting for What the Last Prophets Promised",
    body: "Malachi 4 is one of the great Advent texts, though it is not always read in that season. The posture it calls for -- patient faithfulness while waiting for the day God has promised, remembering the covenant that has been given, watching for the figures who will signal the arrival of the day -- is exactly the Advent posture. Advent is not about manufactured anticipation; it is about the genuine tension of living between promise and fulfillment. The community described in Malachi 3:16-18 -- those who feared God, spoke with one another, kept the covenant even when it seemed pointless -- is the Advent community. They are waiting for a sun to rise that they cannot make rise. They can only fear God's name and hold on until the day when he acts.",
  },
];

const VIDEO_ITEMS = [
  { id: "XcBpM4vNzKo", title: "Malachi 4: The Sun of Righteousness Rises (Full Study)" },
  { id: "ZqJtP8wYmLs", title: "Healing in His Wings -- Malachi 4:2 Explained" },
  { id: "WmKcR3uBxNf", title: "Elijah Is Coming -- Malachi 4:5-6 and John the Baptist" },
  { id: "TvNpQ7yZgHk", title: "The End of the Old Testament -- Malachi 4 Commentary" },
];

export default function Malachi4GuidePage() {
  const [tab, setTab] = useState<Mal4Tab>("overview");
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
          <div style={{ background: "linear-gradient(135deg, #140a00 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>MALACHI 4</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Sun of Righteousness Shall Rise with Healing in Its Wings
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "The final chapter of the Old Testament English canon &mdash; the day burning like a furnace for the arrogant, the Sun of Righteousness rising with healing for those who fear God&rsquo;s name. The promise of Elijah closes the prophetic age and opens toward the New Testament." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Book", value: "Malachi" },
                  { label: "Chapter", value: "4 (Heb. 3:19-24)" },
                  { label: "Genre", value: "Eschatological Oracle" },
                  { label: "Key Verse", value: "Malachi 4:2, 4:5-6" },
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
          <div style={{ background: `${GOLD}12`, borderBottom: `1px solid ${GOLD}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Malachi 4:2 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Mal4Tab)}
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
                  dangerouslySetInnerHTML={{ __html: "Malachi 4 brings the entire Old Testament prophetic tradition to its close in six verses of extraordinary density. It answers the scoffers who had asked &lsquo;Where is the God of justice?&rsquo; (2:17) with a day of consuming fire &mdash; and it answers those who feared God&rsquo;s name with a sunrise and a promise of healing." }}
                />

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Malachi 4</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "4:1", desc: "The burning day -- all the arrogant and evildoers will be stubble, neither root nor branch" },
                      { ref: "4:2", desc: "The Sun of Righteousness rising for those who fear God's name -- healing in its wings -- leaping calves" },
                      { ref: "4:3", desc: "The righteous tread down the wicked like ash on the day when I act" },
                      { ref: "4:4", desc: "Remember the law of Moses -- statutes and rules -- given at Horeb for all Israel" },
                      { ref: "4:5-6", desc: "Behold, I send Elijah -- he will turn hearts -- lest I strike with utter destruction" },
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

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Intertestamental Silence</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "After Malachi, there is no canonical prophetic voice for approximately four hundred years. The first-century Jewish community was deeply aware of this silence. Josephus wrote that the exact succession of prophets had failed. The Maccabean literature speaks of waiting for a prophet to come and tell them what to do (1 Macc 4:46; 9:27). The Dead Sea community at Qumran was organized around anticipation of an eschatological prophet. Malachi 4:5-6 was one of the key texts fueling this expectation. When John the Baptist appeared at the Jordan, the question the delegation from Jerusalem asked him was direct: &lsquo;Are you Elijah?&rsquo; (John 1:21). The question came from Malachi 4:5. The whole community knew the promise and was waiting for its fulfillment." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Malachi 4 is extraordinarily dense for six verses. Its themes &mdash; the day of consuming fire, the sun of righteousness, healing, intergenerational reconciliation, the last prophetic promise &mdash; reverberate through the New Testament and into the history of Christian interpretation." }}
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

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Malachi 4 in the New Testament</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Luke 1:16-17", desc: "The angel's announcement to Zechariah: John will go before the Lord in the spirit and power of Elijah, to turn the hearts of fathers to their children" },
                      { ref: "Matt 11:14", desc: "Jesus on John: 'if you are willing to accept it, he is Elijah who is to come'" },
                      { ref: "Matt 17:10-13", desc: "The disciples ask about Elijah coming first; Jesus confirms John fulfilled this role" },
                      { ref: "John 1:21", desc: "The delegation asks John: 'Are you Elijah?' -- the direct Malachi 4:5 question" },
                      { ref: "Rev 22:20", desc: "The New Testament's own closing word: 'Surely I am coming soon' -- Malachi's conditional promise resolved into a certain one" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
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
                  dangerouslySetInnerHTML={{ __html: "A close reading of Malachi 4:1-6 &mdash; the burning day, the rising sun of righteousness, the treading down of the wicked, the command to remember Torah, and the final promise of Elijah before the great and awesome day of the LORD." }}
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

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Two Groups and the Same Day</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The most striking feature of Malachi 4:1-3 is that the same day produces opposite effects depending on who is experiencing it. For the arrogant and evildoers, the day is an oven; for those who fear God&rsquo;s name, the day is a sunrise. This is not two different days or two different acts of God; it is one day, one act, two experiences. The same divine presence that heals the righteous consumes the unrighteous &mdash; as the same sun melts wax and hardens clay. This pattern runs through Scripture: the pillar of cloud that was light to Israel was darkness to Egypt (Exod 14:20); the cross that is foolishness to those who are perishing is the power of God to those who are being saved (1 Cor 1:18). Malachi 4 presents the day of the LORD with absolute clarity: there is no neutral ground." }}
                  />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={{ background: `${ROSE}11`, border: `1px solid ${ROSE}33`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: 0.5, marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>THE ARROGANT AND EVILDOERS</div>
                      <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0, paddingLeft: 18, fontFamily: "system-ui, sans-serif" }}>
                        <li>The day is like a burning oven</li>
                        <li>They are stubble set ablaze</li>
                        <li>Neither root nor branch remains</li>
                        <li>They become ash underfoot</li>
                      </ul>
                    </div>
                    <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}33`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: 0.5, marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>THOSE WHO FEAR GOD'S NAME</div>
                      <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0, paddingLeft: 18, fontFamily: "system-ui, sans-serif" }}>
                        <li>The sun of righteousness rises</li>
                        <li>Healing comes in its wings</li>
                        <li>They go out leaping like calves</li>
                        <li>They tread down the wicked</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Malachi 4 is both an ending and a beginning. It closes the Old Testament prophetic tradition and opens toward the New Testament. Its applications move in both directions: backward into the patient faithfulness of the Old Testament saints who waited for the day, and forward into the posture of those who now live between the first and second comings of Christ." }}
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
                      "The same day is fire for the arrogant and sunrise for those who fear God's name. How do you hold together the justice and the mercy of God when you read this passage?",
                      "The command to 'remember the law of Moses' (4:4) stands between eschatological promises. What does this tell you about the relationship between what God has already revealed and what he is yet to do?",
                      "Who in your own life or tradition has functioned as a John-the-Baptist figure -- calling people back to covenant faithfulness, turning hearts? What made that possible?",
                      "The turning of hearts in 4:6 is intergenerational: fathers to children, children to fathers. Where do you see the wounds that need this kind of turning in your community?",
                      "The last word of the Old Testament is a threat held off by a conditional promise. How does it change your reading of the New Testament to understand it as the resolution of that cliffhanger?",
                      "What does it look like in practice to maintain the 'fear of God's name' that Malachi associates with those who will experience the sunrise rather than the oven on the day of the LORD?",
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

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 16 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>A Prayer from Malachi 4</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontFamily: "Georgia, serif" }}
                    dangerouslySetInnerHTML={{ __html: "Lord of hosts, the day you have promised is coming. Burn away whatever in us belongs to the arrogant and the evildoers &mdash; the scoffing, the calculation that says it is vain to serve you, the eye that watches the wicked prosper and begins to want what they have. Let us be among those who fear your name. Let the sun of righteousness rise over us with healing. Turn the hearts of our fathers to their children and the hearts of our children to their fathers. Send us figures like Elijah who call us back before it is too late. And in the meantime, help us remember the law you have given us, walking in it while we wait for the day when you act. We are waiting. Come, Lord Jesus. Amen." }}
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
