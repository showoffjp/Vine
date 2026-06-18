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

type Joel1Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "Who Was Joel? The Problem of Dating",
    body: "The superscription of Joel is unusually sparse even by prophetic standards: 'The word of the LORD that came to Joel, the son of Pethuel' (1:1). No king is mentioned, no earthquake reference, no historical anchor that places the book in a dateable reign. This has led to one of the most contested debates in Old Testament introduction. Some scholars place Joel very early, in the period before the Assyrian threat (ninth or eighth century BC), on the grounds that Assyria and Babylon are not mentioned as enemies. Others argue for a post-exilic date (fifth or fourth century BC) based on vocabulary, the mention of Greeks (3:6), and the apparent awareness of other prophetic books. The canonical position of Joel between Hosea and Amos in the Hebrew Bible does not resolve the question. What is clear is that the identity of the author matters less than the canonical function of the book: it became the prophetic text through which early Christianity interpreted the outpouring of the Spirit at Pentecost (Acts 2:16-21), making Joel one of the most theologically consequential of the minor prophets.",
  },
  {
    color: TEAL,
    title: "The Locust Plague: Historical Event or Metaphor?",
    body: "Locust plagues were among the most devastating agricultural catastrophes in the ancient Near East. A single swarm of desert locusts can consume tens of thousands of tons of vegetation per day, stripping entire landscapes bare within hours. The description in Joel 1 is so vivid and concrete -- the vine laid waste, the fig tree stripped, the grain destroyed, the wine cut off, the oil languishing -- that most commentators take the locust plague of chapter 1 as a genuine historical event that Joel witnessed or to which he was responding. Yet even if the plague was historical, Joel refuses to let it remain merely natural. The plague is interpreted theologically as a harbinger of something far greater: the Day of the LORD. The four waves of locusts (the cutting locust, the swarming locust, the hopping locust, and the destroying locust, 1:4) are real insects carrying a message from the divine throne. Historical event and theological sign are not alternatives in Joel's mind; they are inseparable.",
  },
  {
    color: ROSE,
    title: "The Four Kinds of Locusts: What the Hebrew Means",
    body: "Joel 1:4 names four distinct terms for the locust or its destructive action: gazam (the cutting locust or perhaps the locust at one stage of its development), arbeh (the swarming locust, the most common Hebrew word for locusts), yeleq (the hopping locust or licking locust), and hasil (the destroying or consuming locust). Ancient interpreters and modern scholars have debated whether these refer to four different species, four stages of the locust's development, or four waves of the same plague at different times. The most likely reading is that they are four terms emphasizing the totality and sequence of destruction: what one wave left, the next consumed. The rhetorical effect of listing four terms where one would do is to emphasize completeness. Nothing was spared. The repetition of 'what... left' creates a chain of devastation in which each link is a further stripping of what remained. By the end of the verse, the land has been wholly consumed.",
  },
  {
    color: PURPLE,
    title: "The Day of the LORD: Joel's Central Theological Concern",
    body: "The phrase 'Day of the LORD' (yom YHWH) appears more frequently in Joel than in any other prophetic book. It is introduced in 1:15 with the cry 'Alas for the day! For the day of the LORD is near, and as destruction from the Almighty it comes.' The phrase itself predates Joel; its earliest occurrence in the writing prophets is Amos 5:18-20, where Amos confronts Israelites who were looking forward to the Day of the LORD as a day of national blessing and divine vindication for Israel over its enemies. Amos reverses this expectation: the Day will be darkness, not light. Joel inherits this theological tradition and develops it with extraordinary range. In Joel 1, the Day of the LORD is primarily a day of catastrophic judgment, anticipated by the locust plague. In Joel 2, it is the day of the northerner's invasion. But then, remarkably, in Joel 2:28-32, the Day of the LORD also becomes the day of Spirit-outpouring, of salvation for everyone who calls on the name of the LORD -- the very text that Peter quotes at Pentecost in Acts 2.",
  },
  {
    color: GREEN,
    title: "The Five Groups Called to Mourn",
    body: "Joel 1 is structured in part by a series of calls to lament addressed to different social groups. Each group is called to mourn the aspect of the disaster that most directly affects their own lives. First, the elders and all the inhabitants of the land (v. 2) are called to recognize the unprecedented nature of what has happened. Then the drunkards (vv. 5-7) are summoned to wake from their stupor because the wine is cut off at the source. Next, the farmers and vinedressers (vv. 11-12) are called to be ashamed because the harvest has perished. Then the priests (vv. 13-14) are called to gird themselves with sackcloth and minister in lamentation before the altar, because the grain and drink offerings have been cut off from the house of the LORD. Finally, the land itself is personified as grieving (v. 10). This pattern of addressed groups creates a comprehensive vision of a society in which every segment -- the civic leaders, the drinkers, the agricultural workers, the religious establishment -- is touched by the catastrophe. No one is exempt from the call to lament.",
  },
  {
    color: GOLD,
    title: "Lament as Liturgical Discipline",
    body: "One of the most significant features of Joel 1 is that the appropriate response to catastrophe is not stoic endurance, not rationalization, not the reassurance that everything will be fine, but lament -- structured, communal, liturgical lament. Joel does not simply tell people to feel bad; he gives them forms for their grief. The call to 'gird yourselves and lament, O priests; wail, O ministers of the altar' (1:13) is a call to take up the ancient Israelite practices of fasting, sackcloth, assembly, and corporate prayer. The prophet recognizes that grief needs to be enacted, not merely felt. The body participates in lament through fasting, through the rough texture of sackcloth against the skin, through the posture of communal assembly before God. This is not theater; it is the honest bringing of genuine suffering into the presence of God through the forms the tradition has preserved for exactly this purpose. Joel 1 is thus a model of what the Psalms of lament enact at the individual level: the movement from honest acknowledgment of loss to cry before God, with no guarantee of immediate resolution.",
  },
];

const THEME_ITEMS = [
  {
    color: GOLD,
    title: "The Locust Plague as Theological Sign",
    body: "The most fundamental theological move in Joel 1 is the refusal to let a natural disaster remain merely natural. The locust plague that Joel describes was, by all evidence, a real agricultural catastrophe. But Joel insists on reading it theologically. The plague is a sign pointing beyond itself to something far more significant: the Day of the LORD. This pattern of reading -- in which historical events become carriers of theological meaning without ceasing to be historical events -- runs through the entire prophetic tradition. It is not the same as allegorizing the plague away. Joel does not say 'the locusts are really a metaphor for something else.' He says 'the locusts are real, and they are also a pointer to something that transcends them.' The connections this creates are rich: the locust plague of Exodus 10 (one of the plagues of Egypt) stands in the background, linking the Joel plague to the tradition of God's decisive intervention in history. Amos 4:9 records that God had previously sent locusts among his people as a warning they had not heeded. And Revelation 9's locust plague, which has clearly drawn on Joel, places the same motif at the climax of redemptive history.",
  },
  {
    color: TEAL,
    title: "The Day of the LORD: Darkness, Not Light",
    body: "The phrase 'Day of the LORD' in Joel 1:15 carries with it a long theological history. Its background in Amos 5:18-20 is crucial: there, Amos confronts Israelites who longed for the Day of the LORD as a day when God would finally act on Israel's behalf against its enemies -- a day of victory and vindication. Amos's response is devastating: 'Why would you have the Day of the LORD? It is darkness, and not light, and gloom with no brightness in it.' Joel inherits this tradition and develops it in both directions. In Joel 1-2, the Day of the LORD is a day of devastating judgment, anticipated in the locust plague and fulfilled in the invasion of the northerner. But then, in a remarkable theological turn, Joel 2:28-32 discloses another dimension of the same Day: it will also be a day of Spirit-outpouring, of visions and dreams, of salvation for all who call on the name of the LORD. Peter's use of this passage in Acts 2:16-21 identifies the Pentecost experience as the fulfillment of Joel's promise -- the Day of the LORD arriving not as pure judgment but as the pouring out of God's Spirit on all flesh. Joel thus holds together, in a way that required the New Testament to fully unfold, both the terrible and the glorious dimensions of God's decisive day.",
  },
  {
    color: PURPLE,
    title: "Covenant Curse and the Stripping of the Land",
    body: "The specific agricultural losses catalogued in Joel 1 -- the grain, the wine, and the oil -- are not random. In the ancient Israelite agricultural economy, these three products were the fundamental measures of covenant blessing. Deuteronomy 7:13 promises that God will bless 'the fruit of your ground, your grain and your wine and your oil' as the reward of covenant faithfulness. Deuteronomy 28:38-42 describes the covenant curses in which these same products will be destroyed: 'You shall carry much seed into the field and shall gather in little, for the locust shall consume it. You shall plant vineyards and dress them, but you shall neither drink of the wine nor gather the grapes, for the worm shall eat them.' Joel 1 reads like a direct fulfillment of this curse. The land that was promised as the place of blessing has been stripped of its most fundamental agricultural goods. The vine is laid waste, the fig tree stripped bare, the grain is destroyed, the wine is cut off, the oil languishes. What should have been the land of promise has become a land of mourning. The catastrophe is not random; it speaks the language of covenant theology, pointing to a broken relationship between the people and the God who gave them the land.",
  },
  {
    color: ROSE,
    title: "Communal Lament as Spiritual Discipline",
    body: "Joel 1 is one of the fullest models of communal lament in the Old Testament. The structure of the chapter is essentially a call to lament: an address to different social groups calling each to recognize and express its grief, followed by the prophet's own lament over the devastation, and culminating in a call to communal assembly and fasting before the LORD. This lament is not a sign of weakness or lack of faith; it is a spiritually disciplined response to genuine loss. The tradition of communal lament in Israel was preserved in texts like Lamentations, in the communal Psalms (such as Psalm 44, 74, and 80), and in the great confessional prayers of Nehemiah 9 and Daniel 9. What these texts share with Joel 1 is the conviction that the appropriate response to catastrophe is not to explain it away, not to rush to premature comfort, but to bring the full weight of the community's grief honestly before God. Joel's lament is a model for what the church has largely lost: the capacity for structured, honest, communal acknowledgment of loss as a spiritual practice in itself, apart from any immediate resolution.",
  },
  {
    color: GREEN,
    title: "The Role of Fasting and Assembly: Joel 1:14 as a Model",
    body: "The climactic call of Joel 1 is the command of verse 14: 'Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.' This verse contains four specific actions: consecrating a fast, calling a solemn assembly (atsarah -- a technical term for a sacred convocation of the whole community), gathering the elders and all the inhabitants, and crying out to the LORD. The actions move from individual discipline (fasting) through communal gathering (assembly) to public intercession (crying out). This is not a private spiritual exercise; it is a public, political, liturgical act of the entire community before its God. Parallels in the Old Testament are illuminating: Nehemiah 9:1-3 describes the whole community gathering in fasting and sackcloth to confess their sins. Jonah 3:5-9 describes all of Nineveh, from the king to the animals, fasting and crying out to God. Jesus's teaching on fasting in Matthew 6:16-18 assumes that fasting is a normal practice while redirecting its motivation away from public display. What Joel commands is a disciplined, ordered, communal turning to God through the body practices of fasting and assembly -- a model of corporate spiritual response that the church in every generation needs to recover.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Joel 1:1-4",
    color: TEAL,
    title: "Superscription and the Unprecedented Devastation",
    body: "The superscription (1:1) is as brief as any in the prophetic literature: 'The word of the LORD that came to Joel, the son of Pethuel.' No king, no date, no historical anchor beyond the name of the prophet and his father. The oracle begins immediately with a command to tell: 'Hear this, you elders; give ear, all inhabitants of the land! Has such a thing happened in your days, or in the days of your fathers? Tell your children of it, and let your children tell their children, and their children to another generation' (1:2-3). The command to remember and transmit is significant: this event is so catastrophic and so theologically significant that it must be lodged in the community's memory across generations. The instruction to tell children and grandchildren echoes the Passover tradition (Exod 13:8) and the Shema's command to teach the next generation (Deut 6:7). Then comes the devastating inventory of verse 4: 'What the cutting locust left, the swarming locust has eaten. What the swarming locust left, the hopping locust has eaten. And what the hopping locust left, the destroying locust has eaten.' The chain of four terms and four waves of consumption creates a rhetorical completeness: nothing has survived. The agricultural basis of the community's life has been wholly destroyed. The fact that this must be told to future generations implies that it will define a before and after in the community's memory.",
  },
  {
    ref: "Joel 1:5-12",
    color: GOLD,
    title: "The Call to All the People: Drunkards, Farmers, Priests",
    body: "Joel 1:5-12 contains three distinct calls to lament, addressed to three different social groups. First, the drunkards (vv. 5-7): 'Wake up, you drunkards, and weep, and wail, all you drinkers of wine, because of the sweet wine, for it is cut off from your mouth.' The locust plague has destroyed the vineyards; there will be no more wine. Even those who might be least inclined to piety are summoned to lament, because the loss touches them at the point of their own desire. The nation described as attacking the land is 'a nation' (v. 6) whose teeth are like a lion's -- the locust swarm personified as an invading army, their power of destruction compared to that of a great lion. The vine and the fig tree are stripped bare. Second, the farmers and vinedressers (vv. 11-12) are called to 'be ashamed' and 'wail' because the wheat and barley harvests have perished and all the trees -- vine, fig, pomegranate, palm, apple -- have dried up. Joy has withered away from the children of man. The language of 'joy withering' (ebash mesos) is striking: joy is treated as an agricultural product that can be destroyed along with the grain and wine. Third, implicitly in this section, the priests stand in the background as those who will be addressed directly in verses 13-14. The structure is one of comprehensive coverage: every stratum of society is touched at its most essential point.",
  },
  {
    ref: "Joel 1:13-14",
    color: PURPLE,
    title: "The Call to the Priests: Sackcloth, Fast, and Solemn Assembly",
    body: "Verses 13-14 are the theological and liturgical heart of the chapter. 'Put on sackcloth and lament, O priests; wail, O ministers of the altar. Go in, pass the night in sackcloth, O ministers of my God! Because grain offering and drink offering are withheld from the house of your God.' The priests are the first addressed in this call because the disaster has struck at the center of their vocation: the altar is empty. There can be no grain offering, no drink offering. The liturgical machinery of the temple has been halted not by apostasy or enemy action but by agricultural catastrophe. The absence of the offerings is itself a sign of broken relationship between the land, the people, and their God. Then comes the command of verse 14: 'Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.' This is a call to public, communal, organized lament. The solemn assembly (atsarah) was a specifically Israelite institution: a sacred gathering of the whole covenant community. The cry to the LORD is the final act -- not analysis, not explanation, but the honest cry of a community in need before its God. This verse is one of the most complete models of corporate spiritual response in the Old Testament.",
  },
  {
    ref: "Joel 1:15-20",
    color: ROSE,
    title: "Lament over the Day of the LORD: Fire, Drought, and Groaning Animals",
    body: "The final movement of Joel 1 (vv. 15-20) is the prophet's own lament, which unfolds the theological significance of the catastrophe. Verse 15 names it directly: 'Alas for the day! For the day of the LORD is near, and as destruction from the Almighty it comes.' The Hebrew plays on 'Almighty' (Shaddai) and 'destruction' (shod): a dense, ominous sound that defies full translation. The Day of the LORD is not merely an idea; it is near. The locust plague is its harbinger. Verses 16-18 describe the present desolation in terms that go beyond even the locust's damage: the storehouses are desolate, the barns are broken down because the grain has dried up. Fire and drought accompany the locusts. Then verses 18-20 accomplish something remarkable: the animals themselves are given a voice in the lament. 'How the beasts groan! The herds of cattle are perplexed because there is no pasture for them; even the flocks of sheep suffer. To you, O LORD, I cry. For fire has devoured the pastures of the wilderness, and flame has burned all the trees of the field. Even the beasts of the field pant for you because the water brooks are dried up, and fire has devoured the pastures of the wilderness.' Creation itself -- from the domestic cattle to the wild beasts, from the vine to the trees -- is caught up in the catastrophe, and all of it is directed toward the LORD in a cosmic cry of need. The chapter ends not with resolution but with this honest, universal cry.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GOLD,
    title: "Reading the Signs: Catastrophe as Invitation to Examine Our Ways",
    body: "Joel 1 models a way of engaging with catastrophe that is neither secular nor superstitious. Joel does not explain the locust plague as purely natural -- a result of weather patterns or ecological conditions -- nor does he engage in the kind of narrow superstition that identifies specific sins as the mechanical cause of specific disasters. What he does is take the catastrophe seriously as a theological event: a moment in which God is saying something to the community, and in which the community is being invited to examine its relationship with the God who gives or withholds the grain and wine and oil. This is a pattern with broad application. Every generation faces catastrophes of various kinds -- ecological, economic, social, personal -- and the default modern response is almost always technical: find the cause, develop a solution, manage the crisis. Joel's approach does not exclude the technical; it insists that the technical response is insufficient by itself. Catastrophe is an invitation to ask theological questions about what is really happening and what it means. Reading the signs is not a form of magical thinking; it is a refusal to let the natural exhaust the meaning of what occurs.",
  },
  {
    color: TEAL,
    title: "The Practice of Communal Lament: What the Church Has Lost",
    body: "One of the most significant practical applications of Joel 1 is the recognition that the church in most of its contemporary forms has lost the practice of communal lament. The dominant modes of corporate worship are praise, thanksgiving, teaching, and celebration. These are not wrong; they are essential. But they are incomplete without the lament tradition that Joel represents, that the Psalms of lament embody, and that Lamentations enacts at book length. A community that can only praise is a community that has no honest way to engage with catastrophe, grief, loss, or the experience of divine absence. It will tend to force premature joy on genuine suffering, to rush past grief to resurrection before allowing the full weight of Good Friday to be felt. Joel 1 is a model for what genuine communal lament looks like: specific acknowledgment of the loss (the grain is destroyed, the wine is cut off, the oil languishes), address to different groups within the community, embodied practices (fasting, sackcloth, assembly), and a cry to God that does not demand immediate resolution. Recovering this tradition is one of the most important practical tasks for the contemporary church.",
  },
  {
    color: PURPLE,
    title: "Fasting as a Corporate Spiritual Discipline",
    body: "Joel 1:14's command to consecrate a fast positions fasting not as an individual spiritual practice but as a corporate, public, community-wide discipline. This is distinct from the way fasting is most often discussed in contemporary Christianity, where it tends to be framed as a personal discipline -- something an individual does privately to seek God more intensely. Joel's fasting is communal: the elders and all the inhabitants of the land gather together in the house of the LORD. It is public: a solemn assembly is called, making the community's dependence on God visible to all. And it is organized: someone has to 'consecrate' the fast, which implies the involvement of the religious leadership in calling and structuring the practice. The Old Testament parallels reinforce this communal dimension. In Nehemiah 9, the whole community gathers in fasting and sackcloth to confess. In Jonah 3, the king of Nineveh issues a decree for a city-wide fast. Jesus's teaching on fasting in Matthew 6:16-18 is not about whether to fast but about the motivation of the heart when fasting -- he assumes it as a practice. What Joel points toward is the recovery of fasting as a dimension of the community's public response to God in times of crisis.",
  },
  {
    color: ROSE,
    title: "The Drunkards, the Farmers, the Priests: Who Is Being Called?",
    body: "The specificity of Joel's summons is one of its most practically instructive features. Joel does not simply call 'everyone' to lament; he addresses specific groups and calls each to recognize the loss that most directly affects its own life. The drunkards are called to weep because the wine they depend on has been cut off. The farmers are called to be ashamed because the harvest they labored to grow has been destroyed. The priests are called to put on sackcloth because the offerings that define their vocation can no longer be made. This pattern suggests a model for pastoral leadership in times of crisis: the wise leader does not speak only in generalities but addresses specific groups within the community about the specific losses they are experiencing. A community facing economic crisis has its farmers (workers, breadwinners); its drunkards (those who cope through numbing); its priests (those responsible for the community's spiritual life). Each needs to be addressed differently, called to recognize their specific experience of loss, and invited to bring that specific loss to God. Joel's pastoral specificity is a model of how genuine lament engages real people in real situations.",
  },
  {
    color: GREEN,
    title: "Lament and Hope: Joel 1 Prepares for Joel 2",
    body: "It is important to read Joel 1 in the context of the whole book, because Joel 1 is not the last word. The chapter ends not with resolution but with the cry of the beasts panting for water in the dried-up wilderness -- an image of desolation and longing. But this desolation is not the end of the story. Joel 2 will contain both the intensification of the threat (the northerner's invasion) and the remarkable turn toward God's response: the call to repent (2:12-13), the hope that God may relent (2:14), and then the great promise of 2:28-32 -- the outpouring of the Spirit on all flesh, the visions and dreams, the sun turned to darkness and the moon to blood, and the declaration that 'everyone who calls on the name of the LORD shall be saved.' Joel 1 is necessary preparation for this. The honest lament of chapter 1 -- the unwillingness to pretend that the destruction is not real -- creates the conditions from which genuine hope can grow. The posture of honest lament before God, of crying out from the depths, is the posture from which God's answer in Joel 2 becomes possible. Hope built on denied grief is fragile. Hope that emerges from honest lament is the kind that can bear the weight of the Day of the LORD.",
  },
];

const VIDEO_ITEMS = [
  { id: "fNk_zzaMoSs", title: "Joel 1: The Locust Plague and the Day of the LORD" },
  { id: "8phkAg8PMHE", title: "Joel 1 &mdash; Unprecedented Devastation and the Call to Lament" },
  { id: "jT2UxBHb5sE", title: "The Day of the LORD in Joel &mdash; A Bible Study" },
  { id: "Kd1-VGSVFPo", title: "Joel 1 Verse by Verse &mdash; Mourning, Fasting, and Assembly" },
];

const CROSS_REFS = [
  { ref: "Deuteronomy 28:38-42", note: "The covenant curses that include locust devastation of grain, vineyards, and olive trees -- the direct background to Joel 1" },
  { ref: "Amos 4:9", note: "God's prior warning through locusts that Israel had not heeded -- Joel stands in the tradition of prior prophetic signs" },
  { ref: "Amos 5:18-20", note: "The earliest use of 'Day of the LORD' in the prophets, where Amos declares it will be darkness, not light -- Joel's direct theological inheritance" },
  { ref: "Acts 2:16-21", note: "Peter's Pentecost sermon quotes Joel 2:28-32, declaring the Day of the LORD has arrived in the Spirit's outpouring" },
  { ref: "Revelation 9:1-11", note: "The locust plague of Revelation 9 draws directly on Joel's imagery, placing the same motif at the climax of cosmic judgment" },
  { ref: "Lamentations 1:4", note: "A parallel tradition of communal lament over the stripping of the land and the silence of the temple" },
  { ref: "Nehemiah 9:1-3", note: "The communal fast and assembly that parallels Joel 1:14 -- the whole people gathering in sackcloth before God" },
  { ref: "Matthew 6:16", note: "Jesus assumes the practice of fasting as a normal spiritual discipline, redirecting its motivation rather than abolishing it" },
];

const REFLECTION_QUESTIONS = [
  "When you face unexpected loss or catastrophe, what is your default response? Do you tend to explain it away, grieve privately, or bring it to God in structured lament?",
  "Joel addresses specific groups -- drunkards, farmers, priests -- and invites each to lament in their own way. What specific loss in your life or community most needs to be brought before God right now?",
  "What does it mean to 'consecrate a fast' (1:14)? Have you ever practiced fasting as a communal, public spiritual discipline? What would that look like for your church?",
  "The locust plague stripped away the grain, the wine, and the oil -- the basic goods of the land. What 'basic goods' of your spiritual or communal life feel stripped away or under threat?",
  "The Day of the LORD appears first in Joel as a threat and then (in Joel 2:28-32) as a day of restoration and Spirit-outpouring fulfilled at Pentecost. How does holding both dimensions of the Day of the LORD shape your understanding of God's judgment and mercy?",
  "Lament is a way of taking God seriously enough to bring our pain honestly to him. Where in your life are you tempted to settle for a superficial peace rather than the deeper healing that comes through honest lament?",
];

export default function Joel1Guide() {
  const [tab, setTab] = usePersistedState<Joel1Tab>("vine_joel1_tab", "overview");
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
          <div style={{ background: "linear-gradient(135deg, #070718 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>JOEL 1</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Locust Plague and the Day of the LORD
              </h1>
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "Joel 1 confronts an unprecedented agricultural catastrophe &mdash; a locust plague that stripped the land bare &mdash; and refuses to let it remain merely natural. The plague becomes a harbinger of the Day of the LORD, and the prophet&rsquo;s response is a call to communal lament, fasting, and solemn assembly before God." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Joel son of Pethuel" },
                  { label: "Setting", value: "Judah (date debated)" },
                  { label: "Key Verse", value: "Joel 1:14" },
                  { label: "Genre", value: "Prophetic Lament and Call to Assembly" },
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
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Joel 1:14 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Joel1Tab)}
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
                  dangerouslySetInnerHTML={{ __html: "Joel 1 opens with an agricultural catastrophe of unprecedented scale &mdash; a locust plague that swept through Judah and stripped the land of its grain, wine, and oil. But the prophet refuses to let the disaster remain merely natural. It is a harbinger of the Day of the LORD, and the appropriate response is not crisis management but communal lament, fasting, and solemn assembly before God." }}
                />

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Joel 1</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "1:1", desc: "Superscription: the word of the LORD to Joel son of Pethuel -- no date, no king, only the prophet's name" },
                      { ref: "1:2-4", desc: "Address to the elders: has anything like this ever happened? Tell your children -- four waves of locusts have consumed everything" },
                      { ref: "1:5-7", desc: "Call to the drunkards: wake and weep -- the sweet wine is cut off; a nation has invaded like a lion" },
                      { ref: "1:8-10", desc: "Lament over the land: like a virgin in sackcloth -- grain offering and drink offering cut off from the house of God" },
                      { ref: "1:11-12", desc: "Call to the farmers and vinedressers: be ashamed and wail -- the harvest has perished; joy has withered from the children of man" },
                      { ref: "1:13-14", desc: "Call to the priests: gird yourselves with sackcloth -- consecrate a fast, call a solemn assembly, cry out to the LORD" },
                      { ref: "1:15-20", desc: "The prophet's lament: the Day of the LORD is near; fire and drought devastate the land; even the beasts groan and pant for God" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 40, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Historical and Canonical Context</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Joel&rsquo;s date is among the most debated in Old Testament scholarship. The superscription mentions only &ldquo;Joel son of Pethuel&rdquo; &mdash; no king, no historically fixed event. Scholars arguing for a pre-exilic date (ninth or eighth century BC) point to the absence of any reference to Assyria or Babylon as threats, the position of Joel in the Hebrew canon between Hosea and Amos, and various vocabulary and thematic arguments. Scholars arguing for a post-exilic date (fifth or fourth century BC) point to the mention of Greeks as slave traders (3:6), apparent familiarity with earlier prophetic books (especially Amos and Obadiah), and the prominence of the priests rather than the king in the community&rsquo;s life. What is not disputed is the canonical significance of the book: Joel became the prophetic lens through which the early church interpreted Pentecost (Acts 2:16-21), making it one of the most theologically consequential texts in the entire prophetic corpus." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The locust plague of Joel 1 is the occasion for the entire book, but it functions as a threshold event: the chapter refuses to allow the disaster to be read only as agricultural catastrophe. From the first reference to the Day of the LORD in verse 15, the locust plague is reframed as a sign pointing toward God&rsquo;s ultimate intervention in history. The book moves from local devastation (ch. 1) through cosmic threat (ch. 2) to eschatological promise (2:28-32) and final judgment of the nations (ch. 3) &mdash; all through the lens of the same theological category: the Day of the LORD." }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { color: TEAL, group: "Elders and Inhabitants", loss: "Unprecedented catastrophe -- an event to be told to future generations" },
                    { color: GOLD, group: "Drunkards", loss: "The wine is cut off -- the sweet wine is gone from their mouths" },
                    { color: ROSE, group: "Farmers and Vinedressers", loss: "Wheat, barley, vine, fig, pomegranate, palm, and apple -- all destroyed" },
                    { color: PURPLE, group: "Priests", loss: "Grain offering and drink offering cut off from the house of the LORD" },
                    { color: GREEN, group: "The Land Itself", loss: "Personified as mourning, stripped of its grain, wine, and oil" },
                  ].map(item => (
                    <div key={item.group} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.group}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.loss}</div>
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
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Joel in the Canon</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The Book of Joel occupies a small but pivotal place in the Old Testament canon. Its central theological category -- the Day of the LORD -- links it backward to Amos and forward to Zephaniah, Malachi, and ultimately to the apocalyptic literature of the New Testament. Its most famous passage (2:28-32) was identified by Peter as the interpretive key to what happened at Pentecost: &lsquo;this is what was uttered through the prophet Joel&rsquo; (Acts 2:16). In this way, Joel became the bridge between Old Testament prophetic expectation and New Testament fulfillment in a way that few other prophetic texts can match." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Joel 1, though it contains none of the famous Pentecost passage, is nevertheless essential groundwork. The lament of chapter 1 -- the honest, communal, embodied acknowledgment of loss and devastation -- creates the conditions from which the hope of chapters 2-3 can grow. A community that skips directly to Joel 2:28 without passing through the grief of Joel 1 has missed the sequence that gives the promise its weight." }}
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
                  dangerouslySetInnerHTML={{ __html: "Joel 1 is theologically dense. Its central themes &mdash; the locust plague as theological sign, the Day of the LORD, covenant curse, communal lament, and the discipline of fasting &mdash; interweave to create a vision of how a community of faith responds honestly to catastrophe without losing its orientation toward God." }}
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
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Cross-References: Joel 1 in the Wider Canon</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {CROSS_REFS.map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 170, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Three Agricultural Products: Grain, Wine, and Oil</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The repeated mention of grain, wine, and oil in Joel 1 is not incidental. These three products form the core of the covenant blessing vocabulary in Deuteronomy. Their presence signals abundance and divine favor; their absence signals curse and broken covenant. Joel 1&rsquo;s catalogue of losses is simultaneously an agricultural description and a theological indictment." }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { product: "Grain (dagan)", significance: "The staff of life -- the fundamental food supply; when grain fails, the people starve; grain offerings to God cease" },
                      { product: "Wine (tirosh / yayin)", significance: "The fruit of the vine -- joy, celebration, covenant meals; the drunkards mourn its loss; drink offerings cease" },
                      { product: "Oil (yitshar)", significance: "The olive harvest -- for food, lamps, anointing; its languishing signals the darkness that accompanies judgment" },
                    ].map(item => (
                      <div key={item.product} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 160, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.product}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.significance}</span>
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
                  dangerouslySetInnerHTML={{ __html: "Joel 1 rewards close reading because its structure is carefully organized: each section addresses a different group, each call to lament names a specific loss, and the prophet&rsquo;s own lament at the end of the chapter gathers everything into a cosmic cry before God. The details are not ornamental; they carry theological weight." }}
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
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Structure of Lament in Joel 1</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The movement of Joel 1 follows a recognizable lament pattern: address (who is being called to mourn), description of loss (what has been destroyed), and cry to God (what the community is to do). This pattern mirrors the individual lament Psalms &mdash; complaint, petition, and trust &mdash; but at the communal level. The chapter does not resolve; it ends with the animals crying out for water. This is intentional: the honest articulation of loss is itself a spiritual act, and it prepares for the divine response that comes in chapter 2." }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { element: "Summons (1:2)", content: "Hear this, O elders -- the widest possible community is addressed first" },
                      { element: "Memory command (1:2-3)", content: "Tell your children -- the event must be lodged in generational memory" },
                      { element: "Description of loss (1:4)", content: "The four waves of locusts -- total devastation catalogued in chains" },
                      { element: "Calls to lament (1:5-14)", content: "Each group addressed, each loss named -- the drunkards, farmers, and priests" },
                      { element: "Theological naming (1:15)", content: "The Day of the LORD is near -- the disaster is given its ultimate meaning" },
                      { element: "Cosmic lament (1:16-20)", content: "Even the beasts groan and pant -- creation itself joins the cry" },
                    ].map(item => (
                      <div key={item.element} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 190, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.element}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.content}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Key Verse: Joel 1:14</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Verse 1:14 is the liturgical climax of the chapter. Its four commands &mdash; consecrate a fast, call a solemn assembly, gather the elders and all the inhabitants, cry out to the LORD &mdash; move from individual discipline through communal gathering to corporate intercession. The solemn assembly (atsarah) was a specific and significant institution in Israelite life: a sacred convocation of the entire covenant community, set apart from ordinary time for concentrated attention to the God of the covenant. The phrase &lsquo;cry out to the LORD&rsquo; uses the Hebrew zaaq, a cry of distress used by those in dire need &mdash; the same word used when the Israelites cried out under Egyptian slavery (Exod 2:23). It is not a polished petition; it is an honest, desperate cry." }}
                  />
                  <div style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: "&ldquo;Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.&rdquo; &mdash; Joel 1:14 (ESV)" }}
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
                  dangerouslySetInnerHTML={{ __html: "Joel 1 speaks to every generation that faces unexpected loss, catastrophe, or the stripping away of what it had counted on. Its model of honest communal lament, its call to specific groups to name their specific losses, and its insistence on bringing the community&rsquo;s grief to God in structured corporate practice are all as needed today as they were in the prophet&rsquo;s own time." }}
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
                    {REFLECTION_QUESTIONS.map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Joel 1 and the Recovery of Lament</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The theologian Walter Brueggemann has argued that the loss of the lament tradition from Christian worship has produced a form of faith that is emotionally dishonest and theologically shallow. When praise and celebration are the only registers available, the community has no vocabulary for the experience of desolation, of unanswered prayer, of catastrophic loss. Joel 1 provides exactly this vocabulary. Its willingness to name specific losses in concrete detail &mdash; the grain, the wine, the oil, even the animals panting for water &mdash; is a model of the theological seriousness that genuine lament requires." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The key insight of Joel 1 is that lament is not the opposite of faith; it is one of faith&rsquo;s most honest expressions. To cry out to the LORD &mdash; as the prophet commands in 1:14 &mdash; is to refuse to let suffering be the last word while also refusing to deny that the suffering is real. It is to hold together, in the same cry, the honest acknowledgment of loss and the implicit trust that God is the one worth crying to." }}
                  />
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>A Closing Prayer</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.9, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif", fontStyle: "italic" }}
                    dangerouslySetInnerHTML={{ __html: "Lord God, we come before you not with answers but with the honesty of Joel&rsquo;s lament. The grain has been stripped. The joy has withered. There are losses in our lives and in our communities that we have been tempted to explain away or rush past. Teach us to bring them to you instead &mdash; to consecrate a fast, to call an assembly, to gather together before you and cry out. Help us to take our suffering seriously enough to bring it to you honestly, and to trust that the God who heard the cry of his people in Egypt hears ours now. May the lament of this chapter prepare us for the hope of what follows &mdash; the promise of your Spirit poured out on all flesh, of salvation for everyone who calls on your name. We call on your name now. Amen." }}
                  />
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
