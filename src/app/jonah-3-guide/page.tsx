"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Jonah3Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "tszFhiOPgPk", title: "Jonah and the Great Fish" },
    { id: "Q2oNOlXzBhY", title: "The Book of Jonah Overview" },
    { id: "JKPD1AXf0lg", title: "Jonah: Repentance and Grace" },
    { id: "pHBzJ2dVXgk", title: "Nineveh's Repentance Explained" },
  ];
  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = { overview: "Overview", themes: "Key Themes", verse: "Verse by Verse", application: "Application" };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "recommission",
      color: GOLD,
      title: "The Second Commission: God Recommissions the Failed Prophet",
      body: "Jonah 3:1 opens with one of the most remarkable statements in Scripture: &ldquo;Then the word of the LORD came to Jonah the second time.&rdquo; The phrase &ldquo;a second time&rdquo; is theologically explosive. Jonah had already received the divine commission in chapter 1. He had fled to Tarshish, been swallowed by a great fish, and after three days in the belly of the sea creature, been vomited onto dry land. By any human reckoning, his prophetic career was finished. A prophet who flees from God&rsquo;s call, who must be retrieved by a fish, who has proven himself unwilling and unreliable &mdash; that prophet should be replaced. And yet God comes again. The word of the LORD came to Jonah a second time. This is the pattern of divine grace throughout Scripture: God does not discard what he has commissioned simply because the vessel has failed. Moses murdered a man and fled to Midian; God found him at the burning bush. Peter denied Christ three times; Jesus restored him on the shore of Galilee. The second commission to Jonah is not a minor narrative detail &mdash; it is a window into the character of the God who calls. He is the God of the second word, the renewed commission, the persistent caller who does not revoke his gifts and calling (Romans 11:29). For the reader, this becomes a word of extraordinary comfort: failure does not permanently disqualify. The God who called you the first time is willing to call you again.",
    },
    {
      id: "sermon",
      color: ROSE,
      title: "Five Words, the Whole City: The Brevity of Jonah&rsquo;s Message vs. the Magnitude of the Response",
      body: "Jonah 3:4 records the entirety of Jonah&rsquo;s sermon: &ldquo;Yet forty days, and Nineveh shall be overthrown!&rdquo; In Hebrew this is eight words; in most English translations it collapses to five. It is, by any measure, the shortest recorded sermon that produced the largest recorded revival in the entire Bible. Jonah offers no explanation, no theology of sin and forgiveness, no altar call, no pastoral warmth. He simply announces the countdown to judgment. And the entire city believes. This contrast is one of the book&rsquo;s sharpest satirical edges. Israel&rsquo;s own prophets &mdash; Isaiah, Jeremiah, Amos, Hosea &mdash; preached for decades with elaborate oracles, specific indictments, urgent pleadings, and detailed promises. Israel mostly did not repent. Nineveh hears five words from a sunburned, reluctant, bitter prophet and the entire population puts on sackcloth. The text is asking a devastating question: What does it take for a people to respond to the word of God? Apparently, for Nineveh, five words from an unwilling messenger were enough. This inverts every assumption about the conditions required for revival. Effectiveness in God&rsquo;s kingdom is not measured by the quality of the messenger, the length of the sermon, or the sophistication of the theological argument. It is measured by the work of God&rsquo;s Spirit, who can use the weakest, most reluctant instrument to accomplish the most dramatic results. The five-word sermon of Jonah is a standing rebuke to every preacher who trusts in the power of eloquence and a standing encouragement to every reluctant witness who feels unworthy of the message.",
    },
    {
      id: "repentance",
      color: TEAL,
      title: "Nineveh&rsquo;s Repentance: From King to Animals &mdash; A Model of Genuine Turning",
      body: "The repentance of Nineveh recorded in Jonah 3:5&ndash;9 is one of the most comprehensive pictures of societal repentance in all of Scripture. It moves in concentric circles. First the people believe God and put on sackcloth, from the greatest to the least (v. 5). Then word reaches the king &mdash; the locus of power &mdash; and he responds not by defending his throne but by rising from it, removing his robe, covering himself with sackcloth, and sitting in ashes (v. 6). There is something profoundly important in the king leaving his throne. The throne is the symbol of human sovereignty, power, and authority. The king steps down from it in an act of submission to a higher sovereignty. He issues a royal decree encompassing not only humans but animals &mdash; they too must fast, be covered in sackcloth, and cry mightily to God (vv. 7&ndash;8). The inclusion of animals in the mourning is unusual in the ancient Near East, though not unparalleled (cf. Judith 4:10). It signals the totality of the city&rsquo;s response: even the livestock are enrolled in the corporate act of lamentation. The king&rsquo;s decree also includes the moral dimension that marks genuine repentance: &ldquo;Let everyone turn from his evil way and from the violence that is in his hands&rdquo; (v. 8). Sackcloth and fasting without ethical change would be empty ritual. The king demands both external sign and internal transformation &mdash; the precise combination that the Hebrew prophets consistently require. The king closes with a remarkable statement of faith: &ldquo;Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish&rdquo; (v. 9). This &ldquo;who knows&rdquo; is not hopeless uncertainty; it is humble openness. The king does not presume upon God&rsquo;s mercy, but he also does not despair of it. It echoes Joel 2:13&ndash;14: &ldquo;Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster. Who knows whether he will not turn and relent.&rdquo; Nineveh&rsquo;s repentance becomes a model precisely because it is total &mdash; societal, hierarchical, ethical, and humble.",
    },
    {
      id: "relenting",
      color: GREEN,
      title: "God Relents: The Divine Character and the Theology of Jonah 3:10",
      body: "Jonah 3:10 is the theological pivot of the entire book: &ldquo;When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.&rdquo; The Hebrew word translated &ldquo;relented&rdquo; is <em>nacham</em> &mdash; the same word used of God &ldquo;relenting&rdquo; after Moses&rsquo;s intercession in Exodus 32:14, and the same word embedded in the great Israelite creed quoted repeatedly by the prophets: &ldquo;He is gracious and merciful, slow to anger and abounding in steadfast love, and he relents over disaster&rdquo; (Joel 2:13; cf. Exodus 34:6&ndash;7; Numbers 14:18; Nehemiah 9:17; Psalm 86:15; Psalm 103:8). This verse does not imply that God changes his mind arbitrarily or that his announced judgments are unreliable. Prophetic announcements of judgment are characteristically conditional &mdash; they announce what will happen if the people do not turn. When Nineveh turns, the condition that would have produced the disaster is removed. God is not inconsistent; he is consistently responsive to repentance. This is precisely what enrages Jonah in chapter 4 &mdash; he knew all along that God would do this. He fled to Tarshish originally because he knew God was &ldquo;a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster&rdquo; (4:2). Jonah did not want Nineveh to repent and be saved. The theological shock of verse 10 is not that God relented &mdash; that is entirely consistent with his revealed character. The shock is that the same divine mercy that Israel had claimed as its exclusive possession is now extended without hesitation to the most feared pagan empire of the ancient world. The God who relented over Israel&rsquo;s idolatry in the wilderness is the God who relents over Nineveh&rsquo;s violence. His mercy is not tribal. It does not belong to one nation. It belongs to whoever turns from evil and cries to him.",
    },
    {
      id: "contrast",
      color: PURPLE,
      title: "The Theological Scandal: Pagan Repentance vs. Israelite Stubbornness",
      body: "The book of Jonah sits within the canon of the Minor Prophets as a deliberate counter-narrative. While Amos, Hosea, Isaiah, and Jeremiah record decade after decade of prophetic pleading with Israel &mdash; an Israel that largely refuses to repent &mdash; Jonah records a pagan empire repenting at once, at the word of a single reluctant prophet, after the briefest possible proclamation. This contrast is not accidental; it is the theological heart of the book. Jesus himself draws this contrast explicitly in Matthew 12:41: &ldquo;The men of Nineveh will rise up at the judgment with this generation and condemn it, for they repented at the preaching of Jonah, and behold, something greater than Jonah is here.&rdquo; If Nineveh repented at five words from a prophet who didn&rsquo;t even want to preach, what excuse does Israel have for refusing to repent at the extended, passionate, miraculous preaching of the Son of God himself? The scandal of Jonah 3 for its original Israelite audience would have been profound. Nineveh was the capital of Assyria &mdash; the brutal empire that would eventually conquer the northern kingdom of Israel in 722 BC, scattering the ten tribes. The idea that these enemies of God&rsquo;s people would repent before God&rsquo;s people themselves repented was offensive, even outrageous. And that is precisely the point. The grace of God refuses to be contained by national or ethnic boundaries. The story of Jonah anticipates the story of the Gospels: Jesus announcing the kingdom to Israel, Israel largely refusing, and the nations streaming in from east and west to sit at Abraham&rsquo;s table (Matthew 8:11).",
    },
    {
      id: "christology",
      color: GOLD,
      title: "The Sign of Jonah: Death, Resurrection, and Something Greater",
      body: "Matthew 12:39&ndash;40 records Jesus&rsquo;s own reading of the Jonah story: &ldquo;An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of the prophet Jonah. For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth.&rdquo; Jesus identifies his death and resurrection as the antitype of Jonah&rsquo;s experience in the fish. Jonah went down into the deep and came back; Jesus goes down into death and rises. But the comparison does not stop at the structural parallel. It continues into the result: just as Jonah&rsquo;s return from the deep preceded the repentance of Nineveh, Jesus&rsquo;s resurrection from the dead precedes the call to universal repentance. Acts 17:30&ndash;31 puts it plainly: &ldquo;The times of ignorance God overlooked, but now he commands all people everywhere to repent, because he has fixed a day on which he will judge the world in righteousness by a man whom he has appointed; and of this he has given assurance to all by raising him from the dead.&rdquo; The resurrection of Jesus is the great sign; repentance is the appropriate response; and something greater than Jonah &mdash; infinitely greater, the Son of God himself &mdash; has come to preach. Jonah 3 is thus not merely ancient history. It is a typological rehearsal for the greatest moment in history. Nineveh&rsquo;s repentance points forward to the universal call to repentance that the risen Christ issues to every nation on earth.",
    },
  ];

  const verseItems = [
    {
      id: "v1-3",
      ref: "Jonah 3:1&ndash;3",
      title: "The Second Commission &mdash; Jonah Arose and Went",
      body: "The opening three verses of Jonah 3 are structured to echo &mdash; and complete &mdash; the opening of chapter 1. In 1:1&ndash;2, the word of the LORD came to Jonah, telling him to go to Nineveh and call out against it. In 3:1&ndash;2, the exact same commission is given: &ldquo;Arise, go to Nineveh, that great city, and call out against it the message that I tell you.&rdquo; But where chapter 1 concluded with Jonah rising to flee in the opposite direction, chapter 3 gives us the obedient counterpart: &ldquo;So Jonah arose and went to Nineveh.&rdquo; The simple declarative sentence is the most important sentence in the book. After the storm, the fish, the prayer, the vomiting onto dry land &mdash; Jonah simply arose and went. He does not go joyfully; chapter 4 will make clear that he goes resentfully. But he goes. The narrator adds a parenthetical description of Nineveh: &ldquo;Now Nineveh was an exceedingly great city, three days&rsquo; journey in breadth.&rdquo; The three-day reference may indicate the time required to travel through or around the city, or it may be a conventional description of the city&rsquo;s administrative territory. Nineveh was indeed one of the greatest cities of the ancient world &mdash; the capital of the Neo-Assyrian Empire, located on the east bank of the Tigris River in what is now northern Iraq. Archaeologists have confirmed the grandeur of ancient Nineveh, with its massive walls, palace complexes, and a population that later texts in Jonah suggest numbered in the hundreds of thousands (4:11: &ldquo;more than 120,000 persons who do not know their right hand from their left&rdquo;). The point of the description is scale: this is not a village. This is an empire&rsquo;s capital. The task God is giving the reluctant prophet is staggeringly large.",
    },
    {
      id: "v4",
      ref: "Jonah 3:4",
      title: "The Five-Word Sermon: &ldquo;Yet Forty Days, and Nineveh Shall Be Overthrown!&rdquo;",
      body: "Jonah enters Nineveh and begins preaching. Verse 4 records his entire message: &ldquo;Yet forty days, and Nineveh shall be overthrown!&rdquo; (ESV). In Hebrew: <em>od arba&rsquo;im yom we-Nineveh nehpakhet</em> &mdash; eight words. It is the starkest possible announcement: no preamble, no explanation of who God is, no theological elaboration, no appeal to repentance. Simply a countdown and a verdict. The number forty carries deep resonance in the Hebrew Bible &mdash; forty years in the wilderness, forty days of rain in the flood, forty days of Moses on the mountain, forty days of Jesus in the desert. It is the number associated with testing, transition, and the possibility of transformation. Whether Jonah intends the forty days as a fixed deadline or as an implicit window for response is not stated. But the Ninevites interpret it as the latter. The word translated &ldquo;overthrown&rdquo; (<em>nehpakhet</em>) is the same word used for the destruction of Sodom and Gomorrah (Genesis 19:25, 29; Deuteronomy 29:23; Amos 4:11). The text of verse 4 thus places Nineveh in the same category as the cities of the plain &mdash; cities whose wickedness had reached the point of divine response. But the word <em>hapak</em> also means &ldquo;to turn,&rdquo; and this double meaning may be intentional in the narrative. Nineveh is about to be &ldquo;turned&rdquo; &mdash; but whether in judgment or in repentance is still open. The Ninevites&rsquo; response in the following verses shows that they chose to be turned toward God rather than turned over in judgment.",
    },
    {
      id: "v5-6",
      ref: "Jonah 3:5&ndash;6",
      title: "The People Believed God; the King Rose from His Throne",
      body: "The response to Jonah&rsquo;s sermon is immediate and total. Verse 5 states: &ldquo;And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.&rdquo; The phrase &ldquo;believed God&rdquo; (<em>yaaminu be-Elohim</em>) uses the same Hebrew construction as Genesis 15:6 &mdash; &ldquo;And he believed the LORD, and he counted it to him as righteousness.&rdquo; This is not mere intellectual assent. It is trust, reliance, a taking-seriously of the word that has been spoken. The Ninevites hear Jonah&rsquo;s proclamation and treat it as true. The external signs of their internal response are the traditional marks of mourning and penitence: fasting and sackcloth. These practices are not mere ritual; in the ancient Near East they were understood as visible expressions of the interior posture of humility and submission before a higher power. The phrase &ldquo;from the greatest of them to the least of them&rdquo; signals the comprehensiveness of the repentance &mdash; it crosses every social boundary, every class distinction, every rank and status. Verse 6 then focuses on the king, who hears the word and responds with an even more dramatic gesture: he rises from his throne, removes his robe, covers himself with sackcloth, and sits in ashes. The king rising from his throne is the image of power voluntarily surrendered. He is the most powerful person in the city &mdash; possibly the most powerful person in the world at that time &mdash; and he steps down from the throne of earthly authority to sit in ash, the symbol of mortality and unworthiness before God. This is what genuine repentance looks like at the highest level: the willingness of the powerful to acknowledge that there is a power higher than themselves.",
    },
    {
      id: "v7-9",
      ref: "Jonah 3:7&ndash;9",
      title: "The King&rsquo;s Decree: Fasting for Humans and Animals; &ldquo;Who Knows?&rdquo;",
      body: "The king&rsquo;s decree, issued by royal proclamation throughout Nineveh, is one of the most extraordinary documents in the Bible. It commands: (1) Let neither man nor beast, herd nor flock, taste anything &mdash; no water, no food. (2) Let them be covered with sackcloth &mdash; both humans and animals. (3) Let them call out mightily to God. (4) Let everyone turn from his evil way and from the violence that is in his hands. The inclusion of animals in the fast and in the wearing of sackcloth may strike modern readers as odd, but it serves several functions in the narrative. It emphasizes the totality of the city&rsquo;s response &mdash; absolutely nothing is exempted from the mourning. It also reflects the ancient understanding that animals and humans share a common vulnerability before the divine; their lives are intertwined, and judgment upon a city affects the whole created order within it. The word &ldquo;violence&rdquo; (<em>hamas</em>) in verse 8 is significant &mdash; it is the same word used of the wickedness that provoked the flood (Genesis 6:11, 13), connecting Nineveh&rsquo;s sin to the primal corruption that God judged in Noah&rsquo;s day. The king demands not just ceremonial mourning but ethical change: turning from violence specifically. This is not generic religiosity; it targets the specific evil that characterized Assyrian imperial power. Verse 9 &mdash; &ldquo;Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish&rdquo; &mdash; is the theological climax of the king&rsquo;s speech. The phrase &ldquo;who knows&rdquo; (<em>mi yodea</em>) is not despair; it is appropriate humility. The king does not presume to command God&rsquo;s mercy or claim a covenant promise that Nineveh does not possess. He simply opens himself &mdash; and his entire city &mdash; to the possibility that the God who announced judgment is also a God who responds to repentance. This is genuine faith: acting on the possibility of grace without guaranteeing it. It is precisely this posture that God honors in verse 10.",
    },
    {
      id: "v10",
      ref: "Jonah 3:10",
      title: "God Saw, God Relented &mdash; The Pivot of the Book",
      body: "Jonah 3:10 is the hinge of the entire book of Jonah: &ldquo;When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.&rdquo; Every word in this verse carries weight. &ldquo;When God saw&rdquo; &mdash; the divine gaze is first directed at what they <em>did</em>, not at what they said or wore. The sackcloth and fasting and ashes were signs; the substance was their turning from evil. God sees past the external to the internal, past the ritual to the reality. &ldquo;How they turned from their evil way&rdquo; &mdash; the verb <em>shuv</em>, to turn or return, is the primary Hebrew word for repentance. It is used twice in this chapter (vv. 8, 10) and echoes throughout the prophetic corpus as the central call of prophetic preaching. Nineveh <em>shuv</em>&rsquo;d. They turned. &ldquo;God relented&rdquo; &mdash; <em>nacham</em>, the word used of divine grief and compassionate response throughout the OT. This is not God being inconsistent or unreliable. The announcement of judgment was always conditional on the behavior of those under judgment. When the behavior changes, the condition that would have produced the judgment is removed, and God acts in accordance with his most fundamental character &mdash; the character he declared to Moses on Sinai: &ldquo;The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (Exodus 34:6). &ldquo;And he did not do it.&rdquo; The disaster does not come. Nineveh stands. The text is blunt and triumphant in its brevity. And it is precisely this mercy that will break open the fourth chapter &mdash; Jonah is furious. He knew this would happen. And the rest of the book explores what it means when God&rsquo;s grace extends further than the prophet&rsquo;s preferences.",
    },
  ];

  const appItems = [
    {
      id: "secondchance",
      color: GOLD,
      title: "The God Who Comes a Second Time",
      body: "The opening of Jonah 3 &mdash; &ldquo;the word of the LORD came to Jonah a second time&rdquo; &mdash; is one of the most pastoral statements in the Bible. Most of us live somewhere between the first call and the obedience. We have heard God&rsquo;s voice, understood his call, and run in the other direction &mdash; not necessarily to Tarshish, but into busyness, distraction, fear, or willful disobedience. The message of Jonah 3:1 is that the second word comes. God does not give a single call and then retire in disappointment when we fail. He is persistently, stubbornly, graciously committed to his purposes through us and through the world. If you have experienced a period of disobedience or flight from God&rsquo;s call on your life, Jonah 3 is written for you. The fish may have been your detour, not your destination. The question is not whether God will call again, but whether you will arise and go when he does.",
    },
    {
      id: "obedience",
      color: TEAL,
      title: "Obedience Without Enthusiasm",
      body: "Jonah&rsquo;s obedience in chapter 3 is notable for what it does not include. There is no record of Jonah repenting of his flight, expressing love for the Ninevites, or going with joyful willingness. He arises and goes. He preaches the message God gives him. He does his job. And God uses him enormously. This is both a comfort and a challenge. The comfort is that God can work through imperfect, unwilling, emotionally conflicted obedience. He is not waiting for us to feel enthusiastic before he uses us. The challenge is that chapter 4 will show us that Jonah&rsquo;s internal resistance did not resolve simply because he obeyed externally. Obedience without the transformation of heart is a beginning, not an ending. God&rsquo;s goal is not merely compliant behavior but a heart that genuinely desires what God desires &mdash; the repentance and life of those we might prefer to see judged.",
    },
    {
      id: "mercy",
      color: GREEN,
      title: "Preaching Judgment as an Act of Mercy",
      body: "Jonah&rsquo;s five-word sermon is entirely about judgment: &ldquo;Yet forty days, and Nineveh shall be overthrown.&rdquo; There is no gospel in it, no explanation of the path to repentance, no invitation to trust. And yet it produces the greatest revival recorded in Scripture. This should permanently disabuse us of the idea that the announcement of divine judgment is contrary to mercy. The announcement of coming judgment is itself a form of mercy &mdash; it gives those under judgment the opportunity to respond before the judgment falls. The most merciful thing Jonah does in the entire book is show up in Nineveh and tell the truth about what is coming. Many of us are reluctant to speak of judgment, sin, and accountability because we fear being harsh or unloving. The story of Jonah 3 suggests that failing to speak the truth is the genuinely unloving option. Nineveh needed to know the truth before they could repent. So do the people around us.",
    },
    {
      id: "expectation",
      color: PURPLE,
      title: "God&rsquo;s Grace Is Wider Than Our Expectations",
      body: "The repentance of Nineveh is a scandal &mdash; an empire of violence and idolatry, Israel&rsquo;s greatest enemy, turning to God before Israel does. The book of Jonah is a sustained critique of the assumption that God&rsquo;s grace belongs exclusively to &ldquo;our kind of people.&rdquo; Jonah does not want Nineveh to be saved. He knows God is gracious and merciful, and he does not want that grace extended to Nineveh. He would rather be right about the judgment than wrong about the grace. This is the spiritual danger that Jonah 3&ndash;4 exposes: the religious person who is more committed to the justice of God than to the mercy of God, who would rather see the wicked punished than see them repent. The challenge for us is to examine where we have drawn the boundaries of God&rsquo;s grace &mdash; which people, which nations, which communities we assume are beyond reach &mdash; and to ask whether we are more like Jonah sulking under his booth or like the God who looks at the whole great city with compassion.",
    },
    {
      id: "repentancepractice",
      color: ROSE,
      title: "What Repentance Looks Like: The Nineveh Model",
      body: "The repentance of Nineveh in Jonah 3:5&ndash;9 offers a remarkably concrete picture of what genuine repentance involves: belief that takes the word of God seriously, external signs of internal sorrow (fasting, sackcloth, ashes), social breadth (from the greatest to the least), structural engagement (the king issues a decree that transforms the whole city), and ethical specificity (turn from evil, turn from violence). Modern repentance is often privatized, individualistic, and interior. The Nineveh model suggests that genuine repentance has communal, structural, and ethical dimensions. Personal repentance is not enough if the systems and structures in which we participate remain violent and unjust. The king&rsquo;s decree addresses not just personal sin but the &ldquo;violence that is in your hands&rdquo; &mdash; the active harm being done through the exercise of power. Nineveh&rsquo;s repentance invites us to ask not only &ldquo;what personal sins must I turn from?&rdquo; but &ldquo;what communal violence must I cease to participate in or enable?&rdquo;",
    },
  ];

  const reflectionQs = [
    "God came to Jonah &ldquo;a second time&rdquo; after his failure. Where in your own life have you experienced (or are you waiting for) God&rsquo;s second word after a period of disobedience or flight?",
    "Jonah&rsquo;s sermon was five words &mdash; and God used it powerfully. What does this tell you about the relationship between the quality of the messenger and the effectiveness of God&rsquo;s word? How does this challenge or comfort you in your own witness?",
    "The king of Nineveh stepped down from his throne and sat in ashes. What &ldquo;thrones&rdquo; &mdash; positions of power, status, or self-sufficiency &mdash; might God be calling you to step down from in genuine repentance?",
    "Nineveh repented specifically of &ldquo;the violence that is in their hands.&rdquo; What specific forms of harm, injustice, or violence &mdash; personal or structural &mdash; is God calling you to turn from?",
    "Jesus said &ldquo;something greater than Jonah is here&rdquo; &mdash; and yet people in his day refused to repent while Nineveh repented at five words from a reluctant prophet. What does this tell you about the nature of spiritual hardness? Where do you sense resistance to God&rsquo;s word in your own heart?",
    "Jonah was angry that God showed mercy to Nineveh. Is there a person, group, or community toward whom you harbor a similar resentment &mdash; where you would prefer judgment to mercy? How does Jonah 3:10 speak to that resentment?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d1a12 0%, #12121F 60%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ background: GOLD + "22", color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>JONAH 3</span>
            <span style={{ color: MUTED, fontSize: 14 }}>10 Verses &bull; ~760&ndash;750 BC</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Jonah 3: The Greatest Revival in Scripture
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: "0 0 24px" }}>
            A reluctant prophet, a five-word sermon, and the repentance of an empire. When God saw what they did, how they turned from their evil way, he relented.
          </p>
          <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 10, padding: "16px 20px", maxWidth: 600 }}>
            <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>KEY VERSE &mdash; JONAH 3:10</div>
            <p style={{ margin: 0, fontStyle: "italic", lineHeight: 1.7, color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.&rdquo;" }} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "16px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t ? GOLD : MUTED, borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent", transition: "color 0.15s" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview of Jonah 3</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jonah 3 is one of the most theologically compressed chapters in the entire Bible. In ten verses, it records God recommissioning a failed prophet, the delivery of a five-word sermon, the repentance of a great city from king to cattle, and the divine relenting that makes the rest of the book possible &mdash; and that enrages the prophet who delivered it." }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Jonah" },
                { label: "Chapter", value: "3 of 4" },
                { label: "Verses", value: "10" },
                { label: "Setting", value: "Nineveh, Assyria" },
                { label: "Era", value: "~760&ndash;750 BC" },
                { label: "Key Figure", value: "Jonah; King of Nineveh" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  <div style={{ fontWeight: 600, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Chapter Structure</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "3:1&ndash;2", desc: "The second commission: God sends Jonah again with identical words" },
                  { ref: "3:3", desc: "Jonah obeys and enters Nineveh, a city three days&rsquo; journey across" },
                  { ref: "3:4", desc: "The five-word sermon: &ldquo;Yet forty days, and Nineveh shall be overthrown!&rdquo;" },
                  { ref: "3:5", desc: "The people believe God and put on sackcloth from greatest to least" },
                  { ref: "3:6", desc: "The king rises from his throne, removes his robe, and sits in ashes" },
                  { ref: "3:7&ndash;9", desc: "The royal decree: fast for all, even animals; turn from evil and violence; who knows, God may relent" },
                  { ref: "3:10", desc: "God sees their turning; God relents; the disaster does not come" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 70, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: p.ref }} />
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 22px" }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, color: GOLD }}>Historical Context</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Jonah son of Amittai was a prophet from Gath-hepher in Galilee (2 Kings 14:25), active during the reign of Jeroboam II of Israel (793&ndash;753 BC). Nineveh was the capital of the Neo-Assyrian Empire, one of the most powerful and feared empires in ancient Near Eastern history, known for its military brutality and the suffering it inflicted on conquered peoples &mdash; including Israel (which Assyria conquered in 722 BC). The historical setting of Jonah&rsquo;s mission to Nineveh is probably the early eighth century BC, before Nineveh reached the apex of its power under Sennacherib and Ashurbanipal." }} />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 22px" }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, color: PURPLE }}>Canonical Context</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Jonah sits among the Twelve Minor Prophets and reads as a narrative counterpoint to the oracles of judgment in Amos, Hosea, and Micah. While those books record God&rsquo;s persistent and largely-rejected calls to Israel, Jonah records a pagan empire&rsquo;s immediate response to the briefest possible proclamation. Jesus places Jonah in an explicitly typological role: Jonah&rsquo;s three days in the fish points forward to his own death and resurrection (Matt 12:39&ndash;40), and Nineveh&rsquo;s repentance will stand as testimony against those who reject Jesus&rsquo;s preaching (Matt 12:41; Luke 11:32)." }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>The Theological Surprise</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Jonah 3 is not a comfortable chapter. It presents God extending the same mercy that Israel had claimed as its distinctive possession to a pagan empire that Israel despised and feared. It shows that the greatest single act of repentance in the Bible was performed not by the covenant people but by their enemies. It reveals that a reluctant, resentful prophet preaching a message of pure judgment can be used by God more effectively than comfortable, well-equipped ministers. Every assumption about how revival works, who it happens to, and through whom God speaks is challenged by this chapter. That challenge is entirely intentional." }} />
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jonah 3 compresses several of Scripture&rsquo;s most important theological themes into ten verses. Each theme connects to a broader pattern that runs through the entire biblical canon &mdash; from the Torah to the Prophets to the New Testament." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {themeItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16 }}>Cross-References: The Divine Character</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "Exodus 34:6&ndash;7", desc: "The LORD declared to Moses: gracious, merciful, slow to anger, abounding in steadfast love" },
                  { ref: "Joel 2:13&ndash;14", desc: "Return to the LORD your God, for he is gracious and merciful; who knows whether he will not turn and relent" },
                  { ref: "Psalm 103:8", desc: "The LORD is merciful and gracious, slow to anger and abounding in steadfast love" },
                  { ref: "Matthew 12:39&ndash;41", desc: "The sign of Jonah &mdash; death and resurrection; Nineveh&rsquo;s repentance will condemn this generation" },
                  { ref: "Luke 11:32", desc: "The men of Nineveh will rise at the judgment with this generation and condemn it" },
                  { ref: "Romans 11:29", desc: "The gifts and the calling of God are irrevocable &mdash; the second commission explained" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8 }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 160, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
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
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "A close reading of Jonah 3:1&ndash;10, verse by verse. Each section examines the Hebrew text, literary context, and theological significance of the passage." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggle(item.id + "-v")}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ background: TEAL + "22", color: TEAL, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{open === item.id + "-v" ? "-" : "+"}</span>
                  </button>
                  {open === item.id + "-v" && (
                    <div style={{ padding: "0 20px 20px 20px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Hebrew Word <em>nacham</em>: God Relented</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The word <em>nacham</em> translated &ldquo;relented&rdquo; in Jonah 3:10 is one of the richest theological terms in the Hebrew Bible. It carries the sense of being moved to grief or compassion, of changing one&rsquo;s course of action in response to changed circumstances. It is used of God changing course in response to intercessory prayer (Exodus 32:14; Numbers 14:19&ndash;20), and it is used of God in the great creedal statements about his character (Joel 2:13; Jonah 4:2). Critically, the same word appears in Jeremiah 18:7&ndash;10, where God explicitly articulates the principle: if a nation turns from its evil, God &ldquo;will relent (<em>nacham</em>) of the disaster I intended to bring on it.&rdquo; God&rsquo;s &ldquo;relenting&rdquo; in Jonah 3:10 is thus not an ad hoc decision. It is the outworking of a consistent divine principle rooted in his character as one who is &ldquo;slow to anger and abounding in steadfast love.&rdquo;" }} />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jonah 3 is ancient text with relentlessly contemporary relevance. It speaks to personal failure and divine recommissioning, to reluctant obedience and surprising grace, to the nature of repentance, and to the scandal of a mercy that refuses to stay within the boundaries we draw for it." }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {appItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggle(item.id + "-a")}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{open === item.id + "-a" ? "-" : "+"}</span>
                  </button>
                  {open === item.id + "-a" && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {reflectionQs.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, minWidth: 24 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 20 }}>Video Teaching</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 16 }}>Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: "Lord God, gracious and merciful, slow to anger and abounding in steadfast love &mdash; we confess that we are more like Jonah than we want to admit. We have heard your call and run. We have preached with reluctant hearts. We have drawn borders around your mercy that you have never drawn. We have wanted judgment for those we dislike and grace only for ourselves.<br/><br/>Come to us a second time, as you came to Jonah. Give us the word we need to speak and the courage to speak it, even when we would rather stay silent. Use our five-word faithfulness as you used Jonah&rsquo;s &mdash; in ways far beyond what our reluctance would suggest is possible.<br/><br/>Soften us toward those we have written off. Expand our vision of who you are capable of reaching. And when you relent over those we had consigned to judgment, let us not sulk under the booth but celebrate with you &mdash; because your mercy is the greatest thing in the universe, and we want to love what you love.<br/><br/>In the name of Jesus, who is greater than Jonah, who went down into the deepest darkness and rose again so that all people everywhere might repent and live. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
