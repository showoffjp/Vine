"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Micah4Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "FzRcN8wZmQo", title: "Micah 4: Swords into Plowshares (Full Study)" },
    { id: "HbTtP5vJbNs", title: "The Mountain of the LORD &mdash; Micah 4:1-2 Explained" },
    { id: "JdVpY7uBwLk", title: "Neither Shall They Learn War Anymore &mdash; Micah 4:3 Study" },
    { id: "LfXrT3xZfVm", title: "Micah 4 Commentary &mdash; Exile and Restoration" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: TEXT,
  };

  const h3Style: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: TEXT,
  };

  const pStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.75,
    marginBottom: "1rem",
    fontSize: "1rem",
  };

  const quoteStyle: React.CSSProperties = {
    borderLeft: `4px solid ${GREEN}`,
    paddingLeft: "1rem",
    color: TEXT,
    fontStyle: "italic",
    margin: "1rem 0",
    lineHeight: 1.7,
  };

  const tagStyle = (color: string): React.CSSProperties => ({
    display: "inline-block",
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 999,
    padding: "0.2rem 0.75rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginRight: "0.4rem",
    marginBottom: "0.4rem",
  });

  const verseItems = [
    {
      id: "v1",
      ref: "Micah 4:1-2",
      title: "In the Latter Days &mdash; The Mountain Exalted, Nations Stream",
      text: "It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains, and it shall be lifted up above the hills; and peoples shall flow to it.",
      body: "The opening of Micah 4 is one of the most breathtaking reversals in all prophetic literature. Micah 3 closed with the devastation of Zion: &ldquo;Zion shall be plowed as a field; Jerusalem shall become a heap of ruins, and the mountain of the house a wooded height&rdquo; (3:12). Now, immediately, the prophetic voice pivots: &ldquo;It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains&rdquo; (4:1). The same mountain that was just threatened with destruction becomes the mountain exalted above all others. The contrast is deliberate and stunning. The phrase &ldquo;in the latter days&rdquo; (Hebrew &lsquo;b&rsquo;acharit hayyamim&rsquo;) is a marker of eschatological expectation throughout the Hebrew Bible &mdash; it points to a decisive future moment of divine action, not merely the next historical event. The exaltation of the mountain is cosmic: it becomes higher than all the hills, visible to all nations. And the nations respond not with military assault but with pilgrimage. The verb &lsquo;nahar&rsquo; (flow, stream) is unusual for human movement &mdash; it is the word for rivers flowing. The nations stream to the mountain the way rivers flow downhill, irresistibly drawn. Verse 2 gives the content of the nations&rsquo; speech: &ldquo;Come, let us go up to the mountain of the LORD, to the house of the God of Jacob, that he may teach us his ways and that we may walk in his paths.&rdquo; This is the desire for Torah. The nations come not to conquer but to learn. They want instruction in the ways of the God of Jacob. The initiative is theirs, but the teaching is God&rsquo;s: &ldquo;For out of Zion shall go forth the law, and the word of the LORD from Jerusalem.&rdquo; The mountain that was a symbol of Israel&rsquo;s particular election becomes the center of universal instruction.",
    },
    {
      id: "v2",
      ref: "Micah 4:3",
      title: "He Shall Judge Between Many Peoples &mdash; Swords into Plowshares",
      text: "He shall judge between many peoples, and shall decide disputes for strong nations far away; and they shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.",
      body: "Verse 3 is arguably one of the most quoted lines in all prophetic literature, and for good reason. It describes a world transformed at the root level: not merely a cessation of hostilities but a reorientation of the means of violence into instruments of cultivation. Swords become plowshares. Spears become pruning hooks. The machinery of war is repurposed for agriculture &mdash; for feeding, for growing, for the patient work of tending the earth. The phrase is nearly identical in Micah 4:3 and Isaiah 2:4, and the scholarly debate over which text is primary (or whether both draw from a common source) remains unresolved. What is clear is that both prophets understood this vision as central to the eschatological hope of Israel. The political mechanism described in verse 3a is equally remarkable: &ldquo;He shall judge between many peoples, and shall decide disputes for strong nations far away.&rdquo; The reason nations can beat their swords into plowshares is that they no longer need to resolve disputes through violence. The LORD himself adjudicates. When the divine judge is accepted as the arbiter of international relations, the arms race becomes unnecessary. The final phrase &mdash; &ldquo;neither shall they learn war anymore&rdquo; &mdash; is particularly striking. War is described as something learned, a curriculum that nations teach and study. The eschatological vision is not merely the end of war as a practice but the end of war as a discipline, a subject of study, an art to be mastered. The whole apparatus of military education, strategy, and training ceases. Nations unlearn what they have spent centuries perfecting.",
    },
    {
      id: "v3",
      ref: "Micah 4:4",
      title: "Every Man Under His Vine and Fig Tree &mdash; None Shall Make Them Afraid",
      text: "But they shall sit every man under his vine and under his fig tree, and no one shall make them afraid, for the mouth of the LORD of hosts has spoken.",
      body: "Verse 4 adds a detail absent from Isaiah 2 that is uniquely Micah&rsquo;s and which became one of the most famous images of peace in Western history. After the universal peace of verse 3, the camera &mdash; so to speak &mdash; zooms in from the international to the personal. The grand movement of nations streaming to Zion gives way to a single domestic image: a man sitting under his own vine and his own fig tree. This image is not decorative. The vine and the fig tree are the two quintessential products of the Promised Land, mentioned together throughout the Hebrew Bible as symbols of covenantal prosperity and security (cf. 1 Kings 4:25; Zechariah 3:10; John 1:48). To sit under your own vine and fig tree means that the land is yours, the harvest is yours, and you are at peace. No army has burned your crops. No enemy has stripped your vines. No creditor has seized your land. &ldquo;And no one shall make them afraid&rdquo; &mdash; this is the exact inversion of the curses of Deuteronomy 28, where disobedience would result in fear and trembling. The eschatological peace is freedom from fear, the most basic of human psychological states. The authority for this vision is absolute: &ldquo;for the mouth of the LORD of hosts has spoken.&rdquo; It is not a human hope or a political program. It is a divine promise, and the divine speaker is the LORD of hosts &mdash; the commander of the armies of heaven. The one with the greatest military power promises a world where military power is unnecessary. The image entered American political rhetoric in George Washington&rsquo;s letters and correspondence, where he frequently invoked the vine-and-fig-tree image as a description of the peaceful private life he longed for and the liberty he hoped the new nation would secure.",
    },
    {
      id: "v4",
      ref: "Micah 4:5",
      title: "All Peoples Walk in Their Gods &mdash; We Will Walk in the Name of the LORD",
      text: "For all the peoples walk each in the name of its god, but we will walk in the name of the LORD our God forever and ever.",
      body: "Verse 5 is a remarkable statement of covenantal distinctiveness, and its placement after the universal vision of verses 1-4 is theologically important. The nations have been invited to stream to the mountain of the LORD to learn his ways. Yet verse 5 acknowledges that, at the present moment, each people walks in the name of its own god. This is descriptive, not prescriptive &mdash; Micah is not endorsing religious pluralism. He is acknowledging the current state of affairs. The gods of the nations are real spiritual forces in the prophetic worldview; the question is which is the true and living God. Against that backdrop, the covenantal community makes its declaration: &ldquo;but we will walk in the name of the LORD our God forever and ever.&rdquo; The contrast is between &ldquo;all peoples&rdquo; and &ldquo;we.&rdquo; The &ldquo;we&rdquo; is Israel, the covenant people who have been called to walk in God&rsquo;s ways distinctively. The verb &ldquo;walk&rdquo; (Hebrew &lsquo;halak&rsquo;) is the standard Old Testament term for the life of obedience and discipleship: not a burst of religious enthusiasm but the sustained, ordinary movement of life in a particular direction. &ldquo;Forever and ever&rdquo; &mdash; this is not a temporary religious affiliation but an eternal covenant commitment. In the context of the chapter, this verse functions as a bridge between the eschatological vision (vv. 1-4) and the present calling. The future will be what verses 1-4 describe. But now, in the present, before that future arrives, the covenant people are called to walk distinctively in the name of their God even as the nations walk in the names of theirs.",
    },
    {
      id: "v5",
      ref: "Micah 4:6-7",
      title: "The Lame Gathered &mdash; The Driven Away Made a Remnant",
      text: "In that day, declares the LORD, I will assemble the lame and gather those who have been driven away and those whom I have afflicted; and the lame I will make the remnant, and those who were cast far off, a strong nation; and the LORD will reign over them in Mount Zion from this time forth and forevermore.",
      body: "The second movement of Micah 4 (vv. 6-13) shifts focus from the universal pilgrimage of the nations to the particular situation of Israel herself. The transition is marked by &ldquo;In that day&rdquo; &mdash; connecting this passage to the eschatological moment of verses 1-5, but now applying it specifically to Israel&rsquo;s exiled and wounded. The image of the lame is deliberately paradoxical. In the ancient world, the lame were not warriors, not leaders, not the population from which you built an empire. They were the vulnerable, the excluded, those who had been left behind or cast off. But God declares that he will assemble the lame. The word for &ldquo;driven away&rdquo; (Hebrew &lsquo;niddachah&rsquo;) is the same word used in Deuteronomy 30:4 for those scattered to the ends of the earth. These are not the powerful remnant who preserved themselves. These are the broken ones, the ones excluded and scattered. God will make them the remnant. The remnant in prophetic theology is the community through whom God&rsquo;s purposes continue &mdash; not a large majority but a faithful core. Here, paradoxically, the remnant consists of the lame and the driven away. God&rsquo;s metrics of selection are the inverse of human metrics of strength. The chapter closes this section with a declaration of divine sovereignty: &ldquo;and the LORD will reign over them in Mount Zion from this time forth and forevermore.&rdquo; The governance of the gathered remnant is not a human king, not a political arrangement, but the direct reign of the LORD from Zion. This is the theocratic hope of Israel in its purest form.",
    },
    {
      id: "v6",
      ref: "Micah 4:8",
      title: "To You O Tower of the Flock &mdash; The Former Dominion Shall Come",
      text: "And you, O tower of the flock, hill of the daughter of Zion, to you shall it come, the former dominion shall come, kingship for the daughter of Jerusalem.",
      body: "Verse 8 introduces a new address: &ldquo;O tower of the flock&rdquo; (Hebrew &lsquo;Migdal-eder&rsquo;). This phrase has geographical and symbolic weight. Migdal-eder was a watchtower near Bethlehem, mentioned in Genesis 35:21 in the context of Jacob&rsquo;s journey near Bethlehem (where Rachel died). The tower was used by shepherds to watch over their flocks. Its association with Bethlehem will be important in the larger context of Micah 5, where the ruler from Bethlehem is promised (5:2). Here in 4:8, the address functions as a promise to the humble, rural, shepherding inheritance of Israel: the &ldquo;daughter of Zion&rdquo; addressed from the perspective of a shepherd&rsquo;s watchtower. The content of the promise is the restoration of &ldquo;former dominion&rdquo; &mdash; the sovereignty and kingship that Jerusalem once exercised. The kingdom of David, the city of the great king, the dominion that seemed to have ended &mdash; all of this will return. The &ldquo;former dominion&rdquo; is not merely a nostalgic return to the Davidic past. It is the fulfillment of the Davidic covenant, the realization of what God promised to David in 2 Samuel 7. In the context of chapters 4-5, this promise points forward to the ruler from Bethlehem (5:2) who will exercise a dominion greater than David&rsquo;s, extending &ldquo;to the ends of the earth&rdquo; (5:4).",
    },
    {
      id: "v7",
      ref: "Micah 4:9-10",
      title: "Why Do You Cry? &mdash; Go to Babylon &mdash; There You Shall Be Rescued",
      text: "Now why do you cry aloud? Is there no king in you? Has your counselor perished, that pain seized you like a woman in labor? Writhe and groan, O daughter of Zion, like a woman in labor, for now you shall go out from the city and dwell in the open country; you shall go to Babylon. There you shall be rescued; there the LORD will redeem you from the hand of your enemies.",
      body: "Verses 9-10 contain one of the most striking and historically specific prophecies in the Hebrew Bible. Micah, writing in the eighth century BC, names Babylon as the place of Israel&rsquo;s exile and redemption. This is remarkable because in Micah&rsquo;s day, Babylon was not the dominant power &mdash; Assyria was. The great Babylonian exile would not come until 605-586 BC, more than a century after Micah&rsquo;s ministry. The prophecy of Babylonian exile was so surprising that critics have sometimes used it as evidence for a later date of composition, but there is no textual reason to deny it to Micah. Prophets do predict specific events; this is part of what prophecy is. The labor metaphor is significant. The experience of exile is compared to a woman in labor: painful, disorienting, but not final. Labor pains end in birth. The exile to Babylon &mdash; terrible as it is &mdash; is not the end of the story. &ldquo;There you shall be rescued; there the LORD will redeem you from the hand of your enemies.&rdquo; The word &ldquo;redeem&rdquo; (Hebrew &lsquo;ga&rsquo;al&rsquo;) is the term for the kinsman-redeemer in Israelite law &mdash; the one who pays the price to release a family member from debt or servitude. The LORD is Israel&rsquo;s kinsman-redeemer, the one who will pay whatever is necessary to bring his people home. The exile-to-redemption pattern here becomes one of the defining patterns of biblical theology, fulfilled ultimately not just in the return from Babylon but in the redemption accomplished by the Messiah.",
    },
    {
      id: "v8",
      ref: "Micah 4:11-13",
      title: "Many Nations Assembled Against You &mdash; Arise and Thresh, O Daughter of Zion",
      text: "Now many nations are assembled against you, saying, &lsquo;Let her be defiled, and let our eyes gaze upon Zion.&rsquo; But they do not know the thoughts of the LORD; they do not understand his plan, that he has gathered them as sheaves to the threshing floor.",
      body: "The chapter closes with a scene of apparent vulnerability that becomes, in reality, a scene of divine strategy. Many nations are assembled against Zion, expecting to watch her destruction. Their gloating is expressed in verse 11: &ldquo;Let her be defiled, and let our eyes gaze upon Zion.&rdquo; They anticipate spectacle &mdash; the sight of a conquered city, humiliated and defiled. But verse 12 introduces the decisive reversal: &ldquo;But they do not know the thoughts of the LORD; they do not understand his plan.&rdquo; The nations gathered against Zion have badly misread the situation. They think they are the hunters; they are in fact the prey. The LORD has gathered them as sheaves to the threshing floor. The threshing floor image is powerful: it is where grain is separated from chaff, where the final sorting takes place. The nations who assembled to devour Zion have actually assembled themselves for divine judgment. Verse 13 then addresses Zion directly: &ldquo;Arise and thresh, O daughter of Zion, for I will make your horn iron, and I will make your hoofs bronze; you shall beat in pieces many peoples; and shall devote their gain to the LORD, the whole earth.&rdquo; The lame and driven-away gathered in verses 6-7 are now, by divine empowerment, a threshing force. The horn (strength) is made iron. The hoofs (the means of threshing) are made bronze. Israel does not act in her own power but in the power God supplies, devoting the gain not to herself but to the LORD of the whole earth. The chapter that opened with nations streaming peacefully to Zion closes with nations assembled against Zion &mdash; and devoting the gain of both movements to the same LORD who reigns from Zion.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: PURPLE,
      title: "The Mountain of the LORD Exalted Above All Hills",
      body: "The opening image of Micah 4 &mdash; the mountain of the LORD&rsquo;s house established as the highest of mountains &mdash; draws on a deep current of ancient Near Eastern cosmology in which mountains are the dwelling places of the gods and the meeting points between heaven and earth. Mount Zion, in Israelite theology, was not merely a geographical feature but the cosmic mountain par excellence: the place where heaven and earth met, where the LORD&rsquo;s glory dwelt. In Micah 4:1, this theological claim is extended to an eschatological one. In the present age, other mountains compete with Zion &mdash; the high places of idolatrous worship, the sacred mountains of the nations (Baal at Baal-Peor, the mountain shrines of Canaan, the ziggurats of Mesopotamia). But in the latter days, all competition ends. Zion is established as the highest, visibly supreme over every other claim to sacred space. This is not merely a matter of altitude; it is a statement about the supremacy of the God who dwells there. The exaltation of the mountain is the exaltation of the LORD himself. The fact that nations stream to the exalted mountain rather than being conquered by it is theologically significant: the drawing power of divine glory is greater than the coercive power of human armies. Nations are not marched to Zion at sword-point. They come because they have seen something they want to be near.",
    },
    {
      id: "t2",
      color: TEAL,
      title: "The Pilgrimage of the Nations &mdash; Learning Torah at Zion",
      body: "The movement of the nations to Zion in Micah 4:1-2 is one of the great themes of prophetic eschatology, appearing in Isaiah (chapters 2, 60, 66), Zechariah (chapters 8, 14), and Revelation (chapter 21). What is distinctive about Micah&rsquo;s version is the explicit content of what the nations seek: instruction. &ldquo;That he may teach us his ways and that we may walk in his paths. For out of Zion shall go forth the law, and the word of the LORD from Jerusalem&rdquo; (4:2). The nations come as students. They want Torah &mdash; God&rsquo;s instruction, the revelation of his ways. This is a remarkable claim for a small, beleaguered nation. Micah is writing in the eighth century BC, when Israel is being dismembered by Assyrian expansion. There is nothing politically impressive about Zion at this moment. Yet the prophet sees a future in which the greatest nations of the earth will journey to this city to receive instruction. The word &lsquo;Torah&rsquo; (law, instruction) does not mean merely legal regulations. In its broadest sense it is the revelation of God&rsquo;s character and ways, the disclosure of who he is and what he requires. The nations who come to Zion are not seeking a legal code to copy; they are seeking to know the God of Jacob by learning to walk in his paths. The pilgrimage of the nations anticipates the Great Commission of Matthew 28: the same LORD whose word goes forth from Jerusalem now sends his people to all nations with the same instruction.",
    },
    {
      id: "t3",
      color: ROSE,
      title: "Universal Peace &mdash; Swords to Plowshares, Unlearning War",
      body: "The swords-to-plowshares vision of Micah 4:3 has been the most politically influential passage in the entire book, inspiring pacifist movements, disarmament advocates, and peacemakers across two millennia. A famous bronze sculpture by Evgeniy Vuchetich, &ldquo;Let Us Beat Our Swords into Plowshares,&rdquo; stands outside the United Nations building in New York &mdash; a testament to the lasting power of Micah&rsquo;s image. But the prophetic vision is more radical than its political appropriations usually acknowledge. The mechanism of the peace in verse 3 is divine adjudication: &ldquo;He shall judge between many peoples, and shall decide disputes for strong nations far away.&rdquo; The swords are beaten into plowshares because the LORD himself has become the judge of nations. When disputes are resolved by the LORD&rsquo;s justice, the arms that were needed to enforce or contest those disputes become superfluous. The deeper point is not disarmament as a political program but the sufficiency of divine justice. The eschatological peace is possible not because human nature has changed (though it has, in the scenario of nations seeking Torah) but because the ultimate cause of war &mdash; disputes unresolvable by any agreed authority &mdash; has been eliminated. Where the LORD judges, war ends. The phrase &ldquo;neither shall they learn war anymore&rdquo; points to the cultural transmission of violence: war is a skill, a discipline, an education. Generations pass it on. The eschatological hope is not merely that particular wars end but that the curriculum of war is abolished.",
    },
    {
      id: "t4",
      color: GOLD,
      title: "The Vine and Fig Tree &mdash; Personal Peace and Covenantal Prosperity",
      body: "The vine-and-fig-tree image of Micah 4:4 operates on multiple levels simultaneously. At the literal level, it describes agricultural security: your own land, your own crops, your own harvest, undisturbed by enemy raids or economic exploitation. At the covenantal level, it invokes the specific promises of Deuteronomy: the land flowing with milk and honey, the abundance of grape and fig as signs of covenant faithfulness (Deut 8:8). At the social level, it describes a world where land tenure is secure &mdash; where the encroachments on ancestral land that Micah condemns in chapter 2 have been reversed, and every family sits securely under their own inheritance. The phrase &ldquo;none shall make them afraid&rdquo; is the specific reversal of the Deuteronomic curses (Deut 28:25-26, 64-67). The covenant blessings that were always conditional &mdash; dependent on Israel&rsquo;s obedience &mdash; become, in the eschatological vision, unconditional gifts of divine grace. The image became influential in American political thought through the Founding Fathers. George Washington wrote letters invoking this phrase at least forty times in his private correspondence. He saw it as a description of the private liberty and domestic peace that a republic should secure for its citizens. Thomas Jefferson invoked it similarly. The image traveled from a Hebrew prophet to American political imagination because it captures something universal: the human longing for a home that is genuinely one&rsquo;s own, a rest that is not threatened, a peace that is real and not merely a pause between wars.",
    },
    {
      id: "t5",
      color: PURPLE,
      title: "Walking in the Name of the LORD &mdash; Covenantal Distinctiveness",
      body: "Micah 4:5 is a declaration of covenantal identity in the midst of a pluralistic world. The verse acknowledges without apology that different peoples walk in the name of different gods. It does not pretend the religious landscape is empty. But it stakes a claim: &ldquo;we will walk in the name of the LORD our God forever and ever.&rdquo; The concept of &ldquo;walking in the name&rdquo; is rich in the Hebrew Bible. To walk in someone&rsquo;s name is to act under their authority, to represent them, to carry their reputation in how you move through the world. Walking in the name of the LORD means living in a way that the LORD&rsquo;s character, claims, and covenant shape every step. This is not merely religious observance but an identity claim: we are the people of this God, and our movement through the world reflects that. The &ldquo;forever and ever&rdquo; is eschatological: this commitment is not contingent on favorable circumstances or cultural acceptability. In a world where the nations are still walking in the names of their gods, Israel makes a permanent covenant declaration. This verse has been read in Jewish liturgy as a confession of faith &mdash; the commitment to walk in the LORD&rsquo;s name regardless of what the surrounding culture does. It anticipates Paul&rsquo;s language in Romans 8 and Galatians 5 about walking in the Spirit: the sustained, directional movement of covenant life in the presence and name of God.",
    },
    {
      id: "t6",
      color: GREEN,
      title: "The Lame and Driven Away &mdash; God&rsquo;s Preferential Gathering",
      body: "The gathering of the lame and driven away in Micah 4:6-7 reveals a fundamental pattern in God&rsquo;s way of working: he builds his remnant not from the strongest but from the weakest. The lame cannot run, cannot fight, cannot impress. The driven away are the exiles, those who have been expelled from their land and their community. In human terms, these are the raw materials of a defeated people, not a restored nation. But the LORD declares that he will assemble precisely these &mdash; and that &ldquo;the lame I will make the remnant, and those who were cast far off, a strong nation.&rdquo; This pattern recurs throughout Scripture: God chooses the younger son over the older (Jacob over Esau, David over his brothers). He calls a stutterer to speak for him (Moses). He builds his church on a fisherman who denied him three times (Peter). The reversal of the lame becoming the remnant is the divine logic of 1 Corinthians 1:27: &ldquo;God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong.&rdquo; The lame remnant of Micah 4:7 becomes a strong nation &mdash; not by their own resources but by the gathering and empowering of the LORD. His strength is perfected in their weakness (2 Cor 12:9). This theme invites the church to look for God&rsquo;s remnant-forming activity not in the most impressive institutions but in the gathered broken, the driven away, the lame who could not make it on their own.",
    },
    {
      id: "t7",
      color: TEAL,
      title: "The Exile-to-Redemption Pattern &mdash; Babylon as Promise",
      body: "Micah 4:10 introduces the startling prophecy of the Babylonian exile: &ldquo;you shall go to Babylon.&rdquo; In its historical context this was a shocking prediction. Babylon was not yet the world power it would become; Assyria dominated the eighth century. But Micah sees past Assyria to a further exile, a deeper catastrophe, and a more complete redemption. The labor-pain metaphor that frames this prophecy is theologically precise. A woman in labor is in genuine agony &mdash; the pain is real, not imagined, not metaphorical. But the pain has a purpose. It is birth pain, not death pain. The exile to Babylon is not the end of Israel&rsquo;s story but the excruciating transition to a new chapter. &ldquo;There you shall be rescued; there the LORD will redeem you from the hand of your enemies.&rdquo; The redemption happens in the very place of exile, not after escape from it. The word &lsquo;ga&rsquo;al&rsquo; (redeem) is kinsman-redeemer language &mdash; the God who pays the price to release his family member from bondage. This pattern &mdash; exile-to-redemption, captivity-to-release, death-to-resurrection &mdash; becomes the master pattern of biblical theology. It structures the Exodus narrative (slavery in Egypt, redemption at the sea). It structures the book of Ruth (famine and exile, then redemption through the kinsman-redeemer). It structures the gospel: the death of exile from God, the redemption through Christ&rsquo;s own descent into captivity and his rising. Micah 4:10 is a prophecy; it is also a pattern.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${GREEN}22, ${TEAL}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <span style={tagStyle(GOLD)}>Minor Prophets</span>
          <span style={tagStyle(GREEN)}>Eschatological Hope</span>
          <span style={tagStyle(TEAL)}>Old Testament</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Micah 4 &mdash; They Shall Beat Their Swords into Plowshares</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem" }}>
          The mountain of the LORD established above all hills, nations streaming to learn God&rsquo;s ways,
          universal peace as swords become plowshares, the lame gathered as a remnant, and Daughter Zion&rsquo;s exile
          ending in redemption.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GREEN }}>~735 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Prophetic Date</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: TEAL }}>13 Verses</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Chapter Length</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD }}>Isaiah 2:2-4</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Parallel Passage</div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400 }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>The Vision of the Latter Days &mdash; From Ruin to Radiance</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4 opens in jarring contrast to the chapter that precedes it. Micah 3 closes with one of the most devastating pronouncements in the prophetic canon: &ldquo;Zion shall be plowed as a field; Jerusalem shall become a heap of ruins, and the mountain of the house a wooded height&rdquo; (3:12). The corrupt leaders, the false prophets, the bribe-taking judges &mdash; all have been indicted. And then, without pause, the prophecy pivots: &ldquo;It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains&rdquo; (4:1). The same mountain threatened with ruin becomes the mountain exalted above all the earth." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This juxtaposition is not accidental. It is the essential movement of prophetic hope. Judgment is real; it is not the last word. The chapter immediately following the worst that human sin can bring &mdash; the complete corruption of every institution of leadership, prophecy, and justice &mdash; is the most luminous vision of peace in the Hebrew Bible. This is the logic of Micah: human failure is total, and God&rsquo;s redemptive purpose persists through and beyond that failure." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The chapter divides into two broad movements. The first (4:1-5) is the universal eschatological vision: the nations streaming to Zion to learn God&rsquo;s ways, the conversion of weapons into agricultural tools, every person resting under vine and fig tree, and the covenant community&rsquo;s declaration to walk in the name of the LORD. The second movement (4:6-13) focuses more specifically on Israel: the lame and driven away gathered, the remnant constituted from the weakest, Daughter Zion going to Babylon but being redeemed there, and the nations who assemble against Zion unknowingly gathering themselves to the divine threshing floor." }} />
              <div style={quoteStyle} dangerouslySetInnerHTML={{ __html: "&ldquo;They shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.&rdquo; &mdash; Micah 4:3" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The passage shares its core vision (4:1-3) with Isaiah 2:2-4, and the relationship between these two texts has been debated by scholars for centuries. Whether Micah quotes Isaiah, Isaiah quotes Micah, or both draw from a common liturgical or prophetic tradition cannot be determined with certainty. What is certain is that the vision was considered so important that two of the greatest eighth-century prophets both included it at or near the opening of their collections of oracles. The eschatological vision of the nations streaming to Zion was not a peripheral hope in ancient Israel. It was central." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Chapter at a Glance</h2>
              {[
                { ref: "4:1-2", color: PURPLE, title: "The Mountain Exalted &mdash; Nations Stream to Learn", body: "In the latter days the mountain of the LORD&rsquo;s house is highest of all. All nations stream to it, saying: Let us go up to learn God&rsquo;s ways. Torah goes forth from Zion." },
                { ref: "4:3", color: GREEN, title: "Swords into Plowshares &mdash; Neither Shall They Learn War", body: "God judges between the nations. Weapons are converted to farm tools. Nations stop studying and practicing war." },
                { ref: "4:4", color: TEAL, title: "Every Man Under His Vine and Fig Tree", body: "Personal, domestic peace. No one makes them afraid. The mouth of the LORD of hosts has spoken this." },
                { ref: "4:5", color: GOLD, title: "We Will Walk in the Name of the LORD Forever", body: "Covenantal distinctiveness in a pluralistic world. All peoples walk in their gods; we walk in the LORD&rsquo;s name." },
                { ref: "4:6-7", color: PURPLE, title: "The Lame Gathered &mdash; The LORD Reigns from Zion", body: "God assembles the lame and driven away, makes them the remnant, makes them a strong nation. The LORD reigns over them forever." },
                { ref: "4:8", color: ROSE, title: "Tower of the Flock &mdash; Former Dominion Returns", body: "Address to Migdal-eder. The former kingship and dominion of Jerusalem shall be restored." },
                { ref: "4:9-10", color: TEAL, title: "Go to Babylon &mdash; There You Will Be Redeemed", body: "Labor-pain metaphor for the exile. You will go to Babylon. There &mdash; in the place of exile &mdash; the LORD will redeem you." },
                { ref: "4:11-13", color: GREEN, title: "Nations Assembled Against You &mdash; Arise and Thresh", body: "Nations gather expecting to devour Zion. They do not know God&rsquo;s plan. They are gathered as sheaves to a threshing floor. Zion will thresh them." },
              ].map(item => (
                <div key={item.ref} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ minWidth: 52, height: 52, borderRadius: 8, background: item.color + "22", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 700, fontSize: "0.8rem", textAlign: "center", flexShrink: 0 }}>{item.ref}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Historical Context &mdash; Micah 4 After Micah 3</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The placement of Micah 4 immediately after Micah 3 is one of the most striking editorial decisions in the Minor Prophets. Micah 3 is a relentless indictment: rulers who eat the flesh of God&rsquo;s people (3:3), false prophets who give oracles for payment (3:5-7), priests who teach for a price (3:11). The chapter closes with the prophecy that Zion itself will be plowed like a field (3:12). By the end of Micah 3, every human institution has failed. The religious leadership, the political leadership, the prophetic leadership &mdash; all have been corrupted by money, power, and the abandonment of justice." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The deliberate placement of the eschatological vision of chapter 4 immediately after this comprehensive indictment is a theological statement: God&rsquo;s purposes are not defeated by human failure. The very mountain that will be plowed as a field (3:12) is the mountain that will be established as the highest of the mountains (4:1). The contrast is not softened or explained; it is simply presented. This is how prophetic hope works: not by minimizing the catastrophe of human sin but by placing it in the larger frame of divine purpose." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Historically, Micah ministered during the reigns of Jotham, Ahaz, and Hezekiah (1:1), roughly 740-700 BC. The Assyrian threat dominated the political horizon. Yet Micah looks past Assyria (the present threat) and past the coming Babylonian exile (the future threat, named explicitly in 4:10) to an ultimate horizon of peace. The eschatological vision of chapter 4 is not escapism from the political realities of the eighth century. It is the proclamation that those realities, however catastrophic, are not the final word." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Micah 4 and Isaiah 2 &mdash; Twin Visions of Eschatological Peace</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The relationship between Micah 4:1-3 and Isaiah 2:2-4 is one of the most discussed questions in Minor Prophets scholarship. The texts are nearly identical, with minor variations. Both describe the mountain of the LORD&rsquo;s house established as highest of the mountains, nations streaming to it, the LORD judging between nations, and the conversion of weapons to agricultural tools. The differences are minor: Micah adds verse 4 (the vine-and-fig-tree image) and verse 5 (the covenant declaration), which are absent from Isaiah 2." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Three main theories have been proposed: (1) Micah quotes Isaiah (who was his contemporary and may have had greater access to court circles and scribal traditions); (2) Isaiah quotes Micah; (3) both draw from a common liturgical tradition, perhaps a Zion hymn or Temple oracle that was known to both prophets. The third option has attracted significant scholarly support. The passage may have been a kind of prophetic commonplace &mdash; an established oracle about the future of Zion that circulated in prophetic circles and which both Micah and Isaiah incorporated into their collections, each adding their own distinctive material around it." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Whatever the source relationship, the significance of the double attestation is clear: the vision of the nations streaming to Zion, learning God&rsquo;s ways, and beating their swords into plowshares was not a private insight of one prophet. It was a shared eschatological conviction of the prophetic movement of eighth-century Israel. Two great prophets, from different social locations, with different audiences, both placed this vision at or near the opening of their work. It was that central." }} />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${GREEN}11, ${CARD})` }}>
              <h2 style={h2Style}>Key Themes in Micah 4</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4 is the theological heart of the book of Micah, and one of the most theologically dense chapters in the Minor Prophets. Its themes span the universal and the particular, the eschatological and the historical, the cosmic and the domestic. Together they form a vision of what God&rsquo;s governance of the world ultimately looks like." }} />
            </div>
            {themeItems.map(theme => (
              <div key={theme.id} style={{ ...cardStyle, borderLeft: `4px solid ${theme.color}` }}>
                <h3 style={{ ...h3Style, color: theme.color }}>{theme.title}</h3>
                <p style={pStyle} dangerouslySetInnerHTML={{ __html: theme.body }} />
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Thematic Connections Across Scripture</h2>
              {[
                { color: GREEN, from: "Micah 4:1-2", to: "Isaiah 2:2-4", note: "Near-identical twin passage &mdash; the mountain of the LORD, nations streaming, swords to plowshares. The shared vision of two eighth-century prophets." },
                { color: TEAL, from: "Micah 4:3", to: "Joel 3:10", note: "Joel reverses the image: &ldquo;Beat your plowshares into swords&rdquo; &mdash; a call to the nations to prepare for the day of judgment, the inverse of Micah&rsquo;s eschatological peace." },
                { color: GOLD, from: "Micah 4:4", to: "1 Kings 4:25", note: "Every man under his vine and fig tree &mdash; the same image describes the prosperity of Solomon&rsquo;s reign, pointing back to a historical golden age and forward to its eschatological fulfillment." },
                { color: PURPLE, from: "Micah 4:6-7", to: "Zephaniah 3:19", note: "God gathering the lame and outcast, making the lame a remnant &mdash; Zephaniah uses nearly identical language of the divine gathering of the scattered and afflicted." },
                { color: ROSE, from: "Micah 4:10", to: "Isaiah 40:1-2", note: "The Babylonian exile and its end &mdash; Isaiah&rsquo;s great consolation oracles begin precisely where Micah&rsquo;s prophecy points: the comfort of Zion after Babylonian captivity." },
                { color: GREEN, from: "Micah 4:12", to: "Psalm 2:1-4", note: "Nations raging against the LORD&rsquo;s anointed, not knowing his plan &mdash; Psalm 2 describes the same dynamic: the nations plot in vain while the LORD laughs from heaven." },
              ].map((conn, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: 3, minHeight: 40, background: conn.color, borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(conn.color)}>{conn.from}</span>
                      <span style={{ color: MUTED, fontSize: "0.85rem", alignSelf: "center" }}>{"->"}</span>
                      <span style={tagStyle(conn.color)}>{conn.to}</span>
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: conn.note }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Verse by Verse Commentary</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Work through Micah 4 section by section. Click each passage to expand the commentary. The chapter moves from the eschatological vision of the mountain of the LORD (4:1-5) through the gathering of the lame remnant (4:6-8), the prophecy of Babylonian exile and redemption (4:9-10), and the final vision of nations assembled for divine threshing (4:11-13)." }} />
            </div>
            {verseItems.map(item => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "left", gap: "1rem" }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(GREEN)}>{item.ref}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: "1.05rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginTop: "0.35rem", fontStyle: "italic", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <div style={{ color: GREEN, fontSize: "1.4rem", fontWeight: 700, flexShrink: 0, marginTop: 4 }}>{open === item.id ? "-" : "+"}</div>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ ...pStyle, marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Reading Micah 4 as a Unified Whole</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4 holds two apparently opposite movements in tension throughout. The first is the universal &mdash; the nations streaming, the international peace, the divine adjudication between peoples. The second is the particular &mdash; the lame remnant of Israel gathered, Daughter Zion going to Babylon, the specific city of Jerusalem receiving specific promises. This double movement is characteristic of biblical eschatology: the universal hope is worked out through the particular history of a covenant people." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "A second tension runs through the chapter: the peaceful (vv. 1-5) and the conflictual (vv. 11-13). The vision opens with nations streaming peacefully to learn Torah and ends with nations assembled against Zion being gathered for divine threshing. These are not contradictory but sequential: before the eschatological peace, there is eschatological conflict. Before the nations submit to the LORD&rsquo;s instruction, there is a gathering for judgment. The chapter encompasses both." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The exile-to-redemption movement (vv. 9-10) provides the personal application of the cosmic vision. The nations will be gathered; but first Israel herself must go through the dark passage of Babylonian exile. The chapter promises that this dark passage is not the end &mdash; that God is the kinsman-redeemer who will ransom his people from exactly the place where they are captive. The vine and fig tree of verse 4 is the destination; the labor pains of verse 10 are the passage. Both are encompassed in the same divine plan." }} />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Living Micah 4 Today</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4 is not merely ancient prophecy to be interpreted from a historical distance. It speaks directly to the contemporary life of faith: how we pray, how we engage the political world, how we understand weakness and suffering, how we hold hope in periods that look like defeat. Five areas of application emerge with particular clarity." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GREEN}` }}>
              <h3 style={{ ...h3Style, color: GREEN }}>1. Praying and Working for the Swords-to-Plowshares Vision</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The eschatological vision of Micah 4:3 is not simply a prediction to be passively awaited. It is a vision that shapes the way the covenant community prays and acts in the present. If this is where history is going &mdash; if the LORD himself will judge between nations and convert weapons to tools &mdash; then working toward that end in the present is participating in God&rsquo;s purposes rather than swimming against history&rsquo;s current." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This does not mean naive political pacifism that ignores the reality of evil in the present age. Micah himself acknowledges in 4:11-13 that nations will assemble against Zion before the final peace. The kingdom of God is not yet fully come. But the coming of the kingdom is certain, and that certainty should shape how we engage the political world. Peace is not just a human aspiration that may or may not succeed; it is a divine promise that will ultimately be fulfilled. Working for peace &mdash; between nations, within communities, in families &mdash; is eschatological work: work whose ultimate success is guaranteed by the word of the LORD of hosts (4:4)." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Practically, this means praying with the swords-to-plowshares text as a focus. It means supporting peacemaking work at every level: conflict resolution in families, reconciliation across ethnic and political divides, advocacy for diplomatic solutions to international conflicts. It means naming the violence that is present and calling for its transformation &mdash; not with na&iuml;vet&eacute; but with prophetic hope that the LORD of hosts has spoken what will come." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>2. The Calling to Walk in the Name of the LORD Distinctively</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4:5 is a declaration that still has full force in the contemporary context: &ldquo;For all the peoples walk each in the name of its god, but we will walk in the name of the LORD our God forever and ever.&rdquo; We live in a pluralistic world in which many different ultimate commitments compete for human allegiance &mdash; secular ideologies, political movements, consumerism, nationalism, religious traditions of every kind. The verse does not call us to be hostile to this pluralism. It calls us to be clear about our own walking." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Walking in the name of the LORD means allowing the character of God &mdash; his justice, his steadfast love, his faithfulness, his holiness &mdash; to determine the direction and quality of our daily movement through the world. It means that how we conduct business, how we treat the poor, how we speak about those who are different from us, how we use our money, how we prioritize our time &mdash; all of these are shaped by the LORD whose name we bear." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The &ldquo;forever and ever&rdquo; of verse 5 is important: this commitment is not situational or conditional on favorable social circumstances. It is a permanent covenant declaration. In seasons when walking in the LORD&rsquo;s name is culturally expensive &mdash; when it means being out of step with prevailing values, when it costs social standing or economic advantage &mdash; Micah 4:5 is the text to return to. We chose to walk here, and the forever-ness of that choice means present difficulty does not alter it." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ ...h3Style, color: PURPLE }}>3. Hope for the Lame and Driven Away</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4:6-7 speaks a specific word of hope to those who feel excluded, driven away, or too broken to be useful to God&rsquo;s purposes: &ldquo;I will assemble the lame and gather those who have been driven away and those whom I have afflicted; and the lame I will make the remnant.&rdquo; The LORD&rsquo;s remnant &mdash; the core community through whom his purposes advance &mdash; will be composed of those the world has excluded and those God himself has afflicted. This is counterintuitive by every human metric of community building." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For those who feel they are the lame &mdash; spiritually impaired, emotionally wounded, socially marginalized, too far gone to be gathered &mdash; Micah 4:6-7 is a direct address. You are exactly who God assembles. The gathering is an act of divine initiative: God assembles, God gathers. The lame do not gather themselves by achieving sufficient strength. They are gathered by the one who specializes in making the weak strong and the driven-away remnant the centerpiece of his purposes." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Congregations that take this text seriously will look different from communities built around visible strength, impressive credentials, and social respectability. They will be communities that make space for the lame, that actively seek and include those who have been driven away, and that recognize in that gathering the specific shape of God&rsquo;s eschatological work. The remnant of Micah 4:7 is a strong nation not because of its members&rsquo; strength but because the LORD reigns over them from Mount Zion." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${ROSE}` }}>
              <h3 style={{ ...h3Style, color: ROSE }}>4. The Exile-to-Redemption Pattern in Our Own Lives</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4:10 describes the Babylonian exile using the metaphor of labor pains: &ldquo;writhe and groan, O daughter of Zion, like a woman in labor.&rdquo; Labor is real pain. Anyone who has witnessed childbirth knows that the metaphor does not minimize the suffering; it contextualizes it. The pain has direction. It is purposeful pain, pain in the service of something new coming into the world." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Many seasons of the Christian life feel like exile: extended periods of suffering, loss, or waiting in which God seems absent or inactive, in which the promises feel remote, in which we are far from the home we long for. Micah 4:10 names this experience honestly (&ldquo;you shall go to Babylon&rdquo;) and then promises the redemption within it (&ldquo;there you shall be rescued; there the LORD will redeem you&rdquo;). The redemption does not happen after escape from the exile; it happens in the place of exile. God meets his people where they are captive, not only at the destination they are trying to reach." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This has pastoral significance. We are often tempted to tell ourselves and others that God will act once we have escaped the current difficulty &mdash; once the illness is healed, once the relationship is restored, once the financial crisis is resolved. Micah 4:10 challenges this: &ldquo;there&rdquo; &mdash; in Babylon, in the place of captivity &mdash; &ldquo;the LORD will redeem you.&rdquo; The kinsman-redeemer comes to the captive; the captive does not first free themselves and then receive the redeemer." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ ...h3Style, color: GOLD }}>5. Trusting God&rsquo;s Plan Through Periods That Look Like Defeat</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 4:12 contains a phrase that deserves to be memorized: &ldquo;But they do not know the thoughts of the LORD; they do not understand his plan.&rdquo; The nations assembled against Zion are confident. They expect to watch her destruction. They are wrong not because they lack military intelligence but because they lack theological intelligence: they do not know what the LORD is planning. What looks like a gathering for conquest is actually a gathering for divine judgment." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This perspective offers a crucial reorientation for seasons when the visible evidence seems to favor the enemies of God&rsquo;s purposes. When the church is persecuted, when wickedness seems to prosper, when evil appears to advance without check &mdash; the observer who does not know the thoughts of the LORD will conclude that God is defeated or absent. But the observer who does know those thoughts understands that the enemy is gathering to the threshing floor, not to triumph." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The practical disposition this cultivates is patience &mdash; not passive resignation but active trust in the governance of a God who is operating on a plan the surface of history does not reveal. Joseph&rsquo;s brothers did not know the thoughts of the LORD when they sold him into slavery. Pharaoh did not know the thoughts of the LORD when he ordered the death of Hebrew infants. Herod did not know the thoughts of the LORD when he ordered the massacre of the innocents. In each case, what looked like the defeat of God&rsquo;s purposes was in fact their advance. Micah 4 invites us to inhabit this perspective in our own moment." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Questions for Reflection and Discussion</h2>
              {[
                { num: "1", q: "Micah 4:3 envisions swords beaten into plowshares &mdash; weapons of war converted into tools of cultivation. What &lsquo;swords&rsquo; in your own life, community, or nation most need to be converted into &lsquo;plowshares&rsquo;? What would that conversion require?" },
                { num: "2", q: "Verse 4 describes every man sitting under his own vine and fig tree with none making him afraid. What is the equivalent of &lsquo;none shall make them afraid&rsquo; in your own life? What fears most persistently threaten your experience of peace?" },
                { num: "3", q: "Verse 5 declares: &ldquo;we will walk in the name of the LORD our God forever and ever.&rdquo; In what specific areas of your life does walking in the LORD&rsquo;s name put you out of step with the prevailing direction of your culture? How do you navigate that tension?" },
                { num: "4", q: "God declares in 4:6-7 that he will make the lame the remnant. Who are the &lsquo;lame and driven away&rsquo; in your community? How might your congregation more actively gather and include them?" },
                { num: "5", q: "Micah 4:12 says the nations &ldquo;do not know the thoughts of the LORD; they do not understand his plan.&rdquo; Where in your own situation do you need the perspective shift of trusting God&rsquo;s hidden plan rather than the visible evidence?" },
              ].map(item => (
                <div key={item.num} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: GREEN + "22", color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{item.num}</div>
                  <p style={{ ...pStyle, marginBottom: 0, alignSelf: "center", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.q }} />
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={{ ...h2Style, marginBottom: "1.5rem" }}>Video Resources</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${GREEN}11, ${TEAL}11)`, textAlign: "center" }}>
              <h2 style={h2Style}>A Prayer from Micah 4</h2>
              <p style={{ ...pStyle, fontStyle: "italic", maxWidth: 560, margin: "0 auto 1rem" }} dangerouslySetInnerHTML={{ __html: "LORD God of hosts, you have spoken and your word does not fail: the mountain of your house will be established, the nations will stream to learn your ways, and swords will be beaten into plowshares. We confess that we often live as though that vision is impossible &mdash; as though violence has the final word and the nations will never turn from war. Strengthen our hope. Gather those of us who are lame and driven away and make us the remnant of your purposes. In the seasons when our circumstances feel like Babylon, remind us that you are our kinsman-redeemer and you meet us there. And when we cannot see your plan, grant us the patience to trust that your thoughts are higher than our thoughts, and your purposes will not be defeated. We choose to walk in your name today, and forever, and ever. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
