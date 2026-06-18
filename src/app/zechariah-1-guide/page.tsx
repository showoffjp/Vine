"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Zechariah1Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "NhZcN6wZmQo", title: "Zechariah 1: Return to Me Says the LORD (Full Study)" },
    { id: "PjBtP3vJbNs", title: "The Man Among the Myrtle Trees &mdash; Zechariah 1 Vision Explained" },
    { id: "RlDpY8uBwLk", title: "How Long O LORD? &mdash; Angelic Intercession in Zechariah 1" },
    { id: "TnFrT5xZfVm", title: "I Have Returned with Mercy &mdash; Zechariah 1 Commentary" },
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
    borderLeft: `4px solid ${TEAL}`,
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
      ref: "Zechariah 1:1-6",
      title: "The Call to Return &mdash; Unlike Your Fathers",
      text: "In the eighth month, in the second year of Darius, the word of the LORD came to the prophet Zechariah, the son of Berechiah, son of Iddo, saying: &lsquo;Return to me, says the LORD of hosts, and I will return to you, says the LORD of hosts.&rsquo;",
      body: "The opening of Zechariah is remarkably compact for so theologically dense a text. Three genealogical levels are given: Zechariah, son of Berechiah, son of Iddo. The name Iddo appears in Ezra 5:1 and 6:14, and in Nehemiah 12:4, 16, where a priestly family returns from exile under that name. Zechariah was thus a priest as well as a prophet &mdash; a combination also found in Ezekiel. The date given &mdash; the eighth month of the second year of Darius (Darius I, the Great, of Persia) &mdash; places this precisely in October/November 520 BC. Haggai had begun prophesying two months earlier, in the sixth month (Hag 1:1). The two prophets are contemporaries with overlapping but distinct messages. The content of the opening oracle (vv. 2-6) is a highly concentrated covenantal call to repentance. The LORD was &ldquo;exceedingly angry&rdquo; with the fathers &mdash; the previous generation who went into exile because they refused to hear. Now God issues the same call their fathers refused: &ldquo;Return to me, says the LORD of hosts, and I will return to you.&rdquo; The structure is covenantal reciprocity: the people&rsquo;s turn toward God is met by God&rsquo;s turn toward the people. But Zechariah is careful not to let the covenantal reciprocity imply that God&rsquo;s return is contingent on human deserving. The call is grace: God is calling them to return before they have earned the right to ask. Then Zechariah points to what happened to the fathers: the prophets called, the fathers did not listen, the prophets are now dead &mdash; but the word they carried overtook the fathers in judgment. &ldquo;Did they not overtake your fathers?&rdquo; (v. 6). The word of God has more permanence than either the prophets who spoke it or the generation that refused it. The fathers, in the end, acknowledged this: &ldquo;As the LORD of hosts purposed to do to us, for our ways and our deeds, so has he dealt with us&rdquo; (v. 6b). In exile they admitted the prophets were right. Zechariah holds this admission before the present generation: will you wait until exile to admit the same, or will you respond now?",
    },
    {
      id: "v2",
      ref: "Zechariah 1:7",
      title: "The Night Vision Begins &mdash; Eighth Month, Second Year of Darius",
      text: "On the twenty-fourth day of the eleventh month, which is the month of Shebat, in the second year of Darius, the word of the LORD came to the prophet Zechariah, the son of Berechiah, son of Iddo, and said:",
      body: "Verse 7 is a precise chronological marker separating the initial call to return (vv. 1-6) from the series of night visions that occupy the bulk of chapters 1-6. The date given is the twenty-fourth day of the eleventh month (Shebat) of the second year of Darius, which corresponds to February 15, 519 BC. This is three months after the initial call to return. It is also significant that this is the exact day Haggai received his final oracle (Hag 2:20). Whether the two prophets received simultaneous messages or whether the date is used editorially to link the two prophetic ministries is not certain. What the date signals is that the night visions are not vague spiritual experiences without temporal grounding. They are precisely dated events, embedded in the specific history of the early Persian period. The precision of the dating throughout Zechariah (see also 7:1 for another specific date) is a literary strategy: it insists that prophetic vision is not timeless mysticism floating above history. It is historically located revelation, specific to a particular community in a particular crisis at a particular moment. The precision also functions as a truth-claim: these things happened on these days, and the record can be checked.",
    },
    {
      id: "v3",
      ref: "Zechariah 1:8-11",
      title: "The Man Among the Myrtle Trees &mdash; Colored Horses Patrolling the Earth",
      text: "I saw in the night, and behold, a man riding on a red horse! He was standing among the myrtle trees in the glen, and behind him were red, sorrel, and white horses.",
      body: "The first night vision is simultaneously simple and mysterious. A man on a red horse stands among myrtle trees in a glen (a low place, a ravine). Behind him are additional horses: red, sorrel, and white. An angel interpreting the vision is present. Zechariah asks what the horses are. The man among the myrtle trees answers: &ldquo;These are they whom the LORD has sent to patrol the earth&rdquo; (v. 10). The horses and their riders are divine agents who have surveyed the entire earth. The myrtle tree setting is significant. The myrtle was an evergreen associated in Hebrew tradition with paradise and beauty (cf. Isaiah 41:19; 55:13, where God replaces thorns with myrtles in the restored land). The cedars of Lebanon were the great trees of power and status; myrtles were humble, fragrant, unimposing. The LORD&rsquo;s riders rest among myrtles, not among cedars. The report the patrol brings back is the trigger for the angelic intercession of verse 12: &ldquo;We have patrolled the earth, and behold, all the earth remains at rest.&rdquo; This sounds peaceful, but the context makes it ominous. &ldquo;At rest&rdquo; here means the nations are undisturbed, prosperous, comfortable &mdash; while Jerusalem suffers. The Pax Persica (Persian peace) that Cyrus established had brought stability to the empire. The nations were at ease. But Jerusalem, the city of God, was desolate, the temple still unbuilt, the people demoralized. The patrol reports that nothing is changing. No new political movement is arising to pressure the nations into helping restore Jerusalem. The earth is tranquil in a way that is deeply troubling for the people of God.",
    },
    {
      id: "v4",
      ref: "Zechariah 1:12",
      title: "The Angel&rsquo;s Intercession &mdash; O LORD How Long?",
      text: "Then the angel of the LORD said, &lsquo;O LORD of hosts, how long will you have no mercy on Jerusalem and the cities of Judah, against which you have been angry these seventy years?&rsquo;",
      body: "Verse 12 is one of the most remarkable moments in the Hebrew Bible: an angel praying to God on behalf of Jerusalem. The angel of the LORD &mdash; almost certainly a divine being of high rank, perhaps the pre-incarnate Son of God in several Old Testament appearances &mdash; voices the cry of Psalm 13, of Habakkuk 1:2, of the whole tradition of lament prayer: &ldquo;How long?&rdquo; The specific grief is God&rsquo;s anger against Jerusalem and the cities of Judah, which has now lasted seventy years. The seventy years is a reference to the period of Babylonian exile prophesied by Jeremiah (Jer 25:11-12; 29:10). From the first deportations in 605 BC (or the fall of Jerusalem in 586 BC) to the early Persian period represents approximately seventy years. The angel is noting that the prophesied period has elapsed, or is nearly elapsed, and Jerusalem is still desolate. It is a prayer rooted in God&rsquo;s own word: God promised through Jeremiah that the exile would last seventy years. The angel is holding God to his promise. This is intercessory prayer in its purest form: not demanding what God has not promised but appealing to what God has already declared he will do. The &ldquo;how long?&rdquo; is not an accusation that God is failing; it is an appeal that acknowledges the time has come for fulfillment. The prayer of the angel is also our prayer: when God&rsquo;s purposes seem delayed, when the desolation persists beyond what seems reasonable, the appropriate response is not silence but lament &mdash; honest, faith-filled, Scripture-anchored lament.",
    },
    {
      id: "v5",
      ref: "Zechariah 1:13-14",
      title: "Comfortable Words &mdash; God Is Exceedingly Jealous for Jerusalem",
      text: "And the LORD answered the angel who talked with me with gracious and comforting words. So the angel who talked with me said to me, &lsquo;Cry out, Thus says the LORD of hosts: I am exceedingly jealous for Jerusalem and for Zion.&rsquo;",
      body: "The divine response to the angel&rsquo;s intercession is described as &ldquo;gracious and comforting words&rdquo; (v. 13). In the Hebrew, these are &lsquo;devarim tovim divrei nechama&rsquo; &mdash; good words, words of comfort, words of consolation. Before the specific content is given, the quality of the divine response is named: it is comfortable, consoling, good. God does not respond to the angel&rsquo;s &ldquo;how long?&rdquo; with reproof for impatience or with a reminder that God&rsquo;s timeline is not ours. He responds with comfort. The content of the comfort in verse 14 begins with a declaration of divine passion: &ldquo;I am exceedingly jealous for Jerusalem and for Zion.&rdquo; The Hebrew for &ldquo;exceedingly jealous&rdquo; is &lsquo;qinne&rsquo;ti qin&rsquo;ah gedolah&rsquo; &mdash; literally &ldquo;I have been jealous with a great jealousy.&rdquo; The repetition emphasizes intensity. This is not mild divine concern; it is burning, passionate, covenant-possessive love. The jealousy of the LORD for Jerusalem is the jealousy of a husband for a wife, of a parent for a child, of one who has an absolute covenant claim on the beloved. It is the same jealousy that the second commandment forbids Israel to provoke by following other gods (Exod 20:5). God is not indifferent to Jerusalem&rsquo;s desolation. He is not unmoved by the angel&rsquo;s prayer. His silence during the seventy years of exile was not absence of feeling but a controlled restraint now about to be released in mercy.",
    },
    {
      id: "v6",
      ref: "Zechariah 1:15-17",
      title: "Anger at the Nations &mdash; I Have Returned with Mercy &mdash; The Temple Will Be Built",
      text: "And I am exceedingly angry with the nations that are at ease; for while I was angry but a little, they furthered the disaster. Therefore, thus says the LORD, I have returned to Jerusalem with mercy; my house shall be built in it, declares the LORD of hosts.",
      body: "Verses 15-17 contain the fullest statement of the divine response to the angel&rsquo;s intercession. Three elements stand out. First, God names his anger at the nations: &ldquo;I am exceedingly angry with the nations that are at ease.&rdquo; The &ldquo;at rest&rdquo; reported by the patrol in verse 11 is now reframed as moral complacency that God finds offensive. The nations that Babylon used as instruments of divine judgment against Jerusalem &ldquo;furthered the disaster.&rdquo; They exceeded their mandate. God used Babylon to discipline his people; Babylon went further, acting with cruelty and pride. The nations that are now at ease after benefiting from Jerusalem&rsquo;s ruin are under divine displeasure, not divine favor. Second comes the central declaration of the chapter: &ldquo;I have returned to Jerusalem with mercy; my house shall be built in it.&rdquo; The verb &ldquo;have returned&rdquo; is in the perfect tense in Hebrew &mdash; it is stated as an accomplished fact. The decree has been issued. God&rsquo;s return to Jerusalem is as certain as if it had already happened. The concrete expression of this return is the temple: &ldquo;my house shall be built in it.&rdquo; For the discouraged returnees who have stopped building, this is the word they most need to hear. God&rsquo;s return is not a vague spiritual promise; it has a building project attached to it. Third, verse 17 expands the promise: &ldquo;My cities shall again overflow with prosperity, and the LORD will again comfort Zion and again choose Jerusalem.&rdquo; The word &ldquo;again&rdquo; appears three times in verse 17 (in many translations): again overflow, again comfort, again choose. What God has done before, he will do again. The choosing of Jerusalem that began in 2 Samuel 7 and seemed to end in exile is not over. God will again choose the city he chose. The comfort of Zion promised here will be taken up and developed at length in Isaiah 40-55, the great consolation oracles of the exilic prophet.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: TEAL,
      title: "Return and Repentance &mdash; The Covenantal Call",
      body: "The opening oracle of Zechariah (1:1-6) is one of the most concentrated statements of the theology of return in the Hebrew Bible. &ldquo;Return to me, says the LORD of hosts, and I will return to you, says the LORD of hosts&rdquo; (1:3). The covenantal structure is bilateral: the people turn, and God turns. But the sequence is important. God issues the call first. He does not wait for the people to reach some threshold of repentance before extending the invitation. The call is grace, preceding and enabling the response. The Hebrew word &lsquo;shuv&rsquo; (return, repent) is one of the richest theological terms in the Old Testament. It means more than intellectual acknowledgment of sin; it means a change of direction, a reorientation of the entire life toward God. The prophets use it constantly as the term for covenant renewal. Jeremiah uses it throughout his long ministry; Hosea grounds it in the language of marital reconciliation; Joel calls it with fasting and weeping. Zechariah, in the terse opening of his book, states the bilateral structure with elegant simplicity: you return to me, I return to you. The specific warning in 1:4 &mdash; &ldquo;Do not be like your fathers, to whom the former prophets cried out&rdquo; &mdash; turns the call into a historical lesson. The previous generation heard the same call and refused. They are now in the grave, or in exile. The prophets who called them are also dead. But the word they carried outlasted both and overtook the fathers in judgment. The present generation is being given the same opportunity their fathers wasted. The question Zechariah leaves hanging is whether this generation will choose differently.",
    },
    {
      id: "t2",
      color: PURPLE,
      title: "Night Visions as Revelatory Form",
      body: "Zechariah 1-6 contains eight night visions received in a single night, each conveyed through a complex interplay of visual imagery and angelic interpretation. The night vision as a revelatory form is found elsewhere in Scripture &mdash; Jacob at Bethel (Gen 28), Daniel&rsquo;s visions (Dan 7-12), the visions of Amos (Amos 7-9) &mdash; but nowhere with the sustained systematic architecture of Zechariah 1-6. Each vision involves Zechariah seeing something specific, asking a question, receiving angelic interpretation, and hearing a divine oracle. The angel who interprets (&lsquo;malak haddober bi&rsquo; &mdash; the angel who spoke with me) appears throughout as the intermediary between the divine realm and the prophet&rsquo;s understanding. This mediating structure is characteristic of later apocalyptic literature, where the visionary cannot directly interpret what he sees and requires an angelic guide. Zechariah is thus an important bridge between classical prophecy (Isaiah, Jeremiah, Ezekiel) and later apocalyptic (Daniel, Revelation). The night vision form carries its own theological weight. Night is the time when the veil between the visible and invisible worlds thins. What cannot be seen by daylight &mdash; the divine realm of horses and riders, of angelic intercession, of the heavenly court where God issues decrees about Jerusalem &mdash; becomes visible in the night. Zechariah&rsquo;s visions are not dreams; they are explicitly visions seen in the night, received while he is awake and conscious. The distinction matters: the content is presented not as the product of the sleeping mind but as an actual perception of the heavenly realm.",
    },
    {
      id: "t3",
      color: ROSE,
      title: "The Colored Horses and the Patrol of the Earth",
      body: "The horses of Zechariah 1:8 (and more fully in 6:1-8) have generated extensive interpretation across Jewish, Christian, and scholarly traditions. Three colors are mentioned in 1:8: red, sorrel (or reddish-brown), and white. In Revelation 6:1-8, the four horsemen ride white, red, black, and pale horses, and many interpreters have seen a connection between the two texts. In Zechariah, the horses function as divine patrols &mdash; agents who cover the entire earth and report back. The patrol imagery draws on the Persian imperial system that was the political reality of Zechariah&rsquo;s world. Darius the Great had an extensive network of royal couriers and intelligence-gatherers who patrolled the roads of the Persian empire. The divine court, in Zechariah&rsquo;s vision, has its own version of this system: heavenly agents who patrol the earth and report to the divine throne room what they have found. What they find in 1:11 is deeply troubling for the people of God: the earth is at rest. The great world-powers are undisturbed. The Pax Persica has settled over the empire. Jerusalem&rsquo;s suffering does not register in the geopolitical calm. But the vision insists that there is a realm of reality above the geopolitical &mdash; a divine court where the patrol reports are received, where the angel intercedes, and where God&rsquo;s decree overturns the geopolitical tranquility with a word: &ldquo;I have returned to Jerusalem with mercy.&rdquo;",
    },
    {
      id: "t4",
      color: GOLD,
      title: "The Earth at Rest While Jerusalem Mourns &mdash; The Injustice of Geopolitical Comfort",
      body: "One of the most theologically pointed elements of Zechariah 1 is the relationship between the &ldquo;rest&rdquo; of the nations (v. 11) and God&rsquo;s anger at those same nations (v. 15). The earth is at rest &mdash; the nations that dominated, exploited, and devastated Jerusalem are now prosperous and at peace. They have moved on. They are enjoying the fruits of the imperial order. Jerusalem, meanwhile, is still struggling: the temple is unbuilt, the city is unwalled, the people are demoralized. The geopolitical equilibrium has left God&rsquo;s city behind. God&rsquo;s anger at this situation (v. 15) is not arbitrary. The nations were instruments of divine discipline &mdash; they were used by God to bring judgment on his covenant-breaking people. But instruments can exceed their commission. Babylon was permitted to judge Israel; Babylon was not permitted to do so with pride, cruelty, and the assumption that Israel&rsquo;s defeat was the nations&rsquo; permanent triumph. &ldquo;While I was angry but a little, they furthered the disaster.&rdquo; The restraint of divine anger that God exercised in using Babylon as a disciplinary tool was interpreted by Babylon as weakness or absence. They overdid the destruction. This pattern &mdash; of nations used as divine instruments who then exceed their mandate and face judgment for doing so &mdash; recurs throughout the prophetic literature (cf. Isaiah&rsquo;s oracle against Assyria in Isa 10:5-19). It is also a word to any power in any era that mistakes divine patience for divine permission.",
    },
    {
      id: "t5",
      color: PURPLE,
      title: "Divine Jealousy for Jerusalem &mdash; Zeal Motivated by Love",
      body: "The divine declaration of verse 14 &mdash; &ldquo;I am exceedingly jealous for Jerusalem and for Zion&rdquo; &mdash; introduces one of the most distinctive attributes of the God of Israel in prophetic theology. The Hebrew word &lsquo;qanna&rsquo; (jealous) is used of God in the second commandment (Exod 20:5), where it describes God&rsquo;s exclusive claim on Israel&rsquo;s covenant allegiance. In that context, the jealousy is provoked by Israel&rsquo;s unfaithfulness &mdash; by her turning to other gods. Here in Zechariah 1:14, the jealousy is provoked not by Israel&rsquo;s unfaithfulness but by the nations&rsquo; treatment of Jerusalem. God is jealous for his city &mdash; passionately, covenant-possessively committed to its welfare and restoration. The prophetic tradition consistently presents divine jealousy as a function of divine love, not of divine insecurity. A God who was merely powerful but not jealous would be indifferent to what happens to his people. The jealousy of the LORD is the sign that he is not indifferent &mdash; that the suffering of Jerusalem is not lost on him, that the desolation of his house registers in his consciousness as something he cares about with passionate intensity. This jealousy is the fuel of the restoration oracles that follow in verses 16-17. Because God is exceedingly jealous for Jerusalem, he will return there with mercy, rebuild the temple, cause the cities to overflow with prosperity, comfort Zion, and choose Jerusalem again. The jealousy is not an emotion separate from his action; it is the motive force behind it.",
    },
    {
      id: "t6",
      color: TEAL,
      title: "&lsquo;I Have Returned to Jerusalem with Mercy&rsquo; &mdash; The Temple as Concrete Promise",
      body: "The central declaration of Zechariah 1:16 deserves extended meditation: &ldquo;I have returned to Jerusalem with mercy; my house shall be built in it, declares the LORD of hosts, and a measuring line shall be stretched out over Jerusalem.&rdquo; The phrase &ldquo;I have returned&rdquo; uses the same verb (&lsquo;shuv&rsquo;) that God used in calling the people to return to him (v. 3). The covenantal reciprocity runs in both directions: you return to me, I return to you. God&rsquo;s return is announced before the people have finished returning &mdash; it is his movement toward them in grace, not their achievement. The mercy (&lsquo;rachamim&rsquo; &mdash; deep compassion, womb-love) with which God returns is the characteristic love of a parent for a child. It is not a transactional mercy earned by repentance; it is the outflow of the divine nature. The concrete expression of God&rsquo;s return is architectural: &ldquo;my house shall be built in it.&rdquo; For the demoralized returnees who had stopped rebuilding the temple (Ezra 4:24), this is the most practically urgent word in the entire chapter. God&rsquo;s return to Jerusalem is not a vague spiritual presence that exists regardless of whether the temple is built. It has a building project attached. The measuring line that will be stretched out over Jerusalem (v. 16) is the surveyor&rsquo;s tool &mdash; the sign that rebuilding is being planned, that the dimensions are being calculated, that construction is imminent. The word of God precedes and authorizes the work of human hands.",
    },
    {
      id: "t7",
      color: GREEN,
      title: "Zechariah as a Book of Encouragement &mdash; Prophetic Ministry to the Discouraged",
      body: "The historical context of Zechariah is crucial for understanding its pastoral function. The Jewish community of 520 BC had returned from Babylon under Cyrus&rsquo;s edict (538 BC) with high hopes. But the reality of rebuilding was harder than expected. Opposition from surrounding peoples (Ezra 4) had brought the temple reconstruction to a halt. The community was demoralized, focused on building their own houses rather than God&rsquo;s house (Hag 1:4). Prophets like Haggai and Zechariah were called into this discouraged community not to rebuke them further but to re-ignite their vision. Zechariah 1 is structured around what might be called a word of comfort in a season of darkness. The very term used in verse 13 &mdash; &ldquo;gracious and comforting words&rdquo; &mdash; captures the pastoral register of the whole chapter. The uncomfortable call to return (vv. 1-6) is not omitted &mdash; the community still needs to hear that their fathers&rsquo; failure is instructive, not exemplary. But the dominant note of the chapter is comfort: God is jealous for Jerusalem, God has returned with mercy, the temple will be built, the cities will overflow with prosperity, God will comfort Zion and choose Jerusalem again. Prophetic ministry in a discouraged community must combine honest diagnosis with genuine hope. The failure to return (vv. 1-6) and the vision of return (vv. 13-17) are both present because the community needs both. The word that only comforts without calling to faithfulness is not prophetic; the word that only indicts without offering comfort is not merciful. Zechariah holds both.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${TEAL}22, ${PURPLE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <span style={tagStyle(GOLD)}>Minor Prophets</span>
          <span style={tagStyle(TEAL)}>Return and Restoration</span>
          <span style={tagStyle(PURPLE)}>Old Testament</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Zechariah 1 &mdash; Return to Me and I Will Return to You</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem" }}>
          The opening of Zechariah&rsquo;s night visions &mdash; the call to return unlike the fathers, the man among the myrtle trees,
          the angel&rsquo;s intercession for Jerusalem, and God&rsquo;s promise to return with compassion and rebuild the temple.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: TEAL }}>520 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Prophetic Date</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: PURPLE }}>17 Verses</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Chapter Length</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD }}>8 Visions</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Night Vision Series</div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? TEAL : BORDER}`, background: tab === t ? TEAL : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400 }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>A Prophet for a Discouraged Community</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah began prophesying in October/November 520 BC, in the second year of the Persian king Darius the Great. The historical context is crucial: the Jewish exiles had returned from Babylon under Cyrus&rsquo;s edict in 538 BC with high hopes of rebuilding their homeland and the temple of the LORD. But eighteen years had passed, and the temple was still unbuilt. Opposition from surrounding peoples had halted the work (Ezra 4:24). The returned community had become focused on their own houses (Hag 1:4), demoralized by the gap between the glorious prophetic promises and the discouraging reality of a half-rebuilt city surrounded by hostile neighbors." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Into this context, two prophets arose simultaneously: Haggai and Zechariah. Haggai&rsquo;s message was direct and urgent: get back to building (Hag 1:8). Zechariah&rsquo;s message was richer and more visionary: God himself is returning to Jerusalem, and the building of the temple is the visible sign of that divine return. Where Haggai is a prophet of practical urgency, Zechariah is a prophet of cosmic vision &mdash; his night visions open up the heavenly realm to show the people that their earthly discouragement is not the whole story. Behind the scenes of their demoralized city, divine agents are patrolling the earth, an angel is interceding for Jerusalem, and God is speaking comfortable words of mercy and restoration." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Chapter 1 divides cleanly into two parts. The first (vv. 1-6) is an initial oracle, delivered two months before the night visions, calling the community to return to the LORD unlike their fathers who refused to listen to the prophets and went into exile. The second (vv. 7-17) is the first of eight night visions: the man among the myrtle trees, the patrol horses, the angel&rsquo;s intercession, and the divine response of &ldquo;comfortable words.&rdquo;" }} />
              <div style={quoteStyle} dangerouslySetInnerHTML={{ __html: "&ldquo;Therefore, thus says the LORD, I have returned to Jerusalem with mercy; my house shall be built in it, declares the LORD of hosts, and a measuring line shall be stretched out over Jerusalem.&rdquo; &mdash; Zechariah 1:16" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The book of Zechariah is the longest of the Minor Prophets and one of the most complex. Its fourteen chapters fall into two main sections: chapters 1-8 (the night visions and associated oracles, dated to 520-518 BC) and chapters 9-14 (undated oracles often called Deutero-Zechariah by critical scholars, though the unity of the book has been defended). For the New Testament writers, Zechariah was a major source of messianic prophecy: the triumphal entry (Zech 9:9), the thirty pieces of silver (Zech 11:12-13), the piercing of the Messiah (Zech 12:10), and the mourning for the firstborn (Zech 12:10) are all cited in the Passion narratives. Zechariah 1 is where this remarkable book begins." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Chapter at a Glance</h2>
              {[
                { ref: "1:1-3", color: TEAL, title: "The Call to Return &mdash; Opening Oracle", body: "Dated to October/November 520 BC. God issues the covenantal call: return to me and I will return to you. The father of Zechariah is Berechiah, son of Iddo." },
                { ref: "1:4-6", color: PURPLE, title: "Do Not Be Like Your Fathers", body: "The former prophets called; the fathers refused to hear; the fathers went into exile. Even in exile they acknowledged: the word of God overtook us. Will this generation learn from them?" },
                { ref: "1:7", color: GOLD, title: "The Night Vision Begins &mdash; February 15, 519 BC", body: "Precise dating: the twenty-fourth day of Shebat, second year of Darius. Three months after the initial call. The same date as Haggai&rsquo;s final oracle." },
                { ref: "1:8-11", color: ROSE, title: "The Man Among the Myrtles &mdash; Colored Horses", body: "A man on a red horse among myrtle trees in a glen. Behind him: red, sorrel, and white horses. These are the divine patrol that has surveyed the whole earth. Report: the earth is at rest." },
                { ref: "1:12", color: TEAL, title: "The Angel&rsquo;s Intercession &mdash; How Long?", body: "The angel of the LORD prays: O LORD of hosts, how long will you have no mercy on Jerusalem? The seventy years of Jeremiah&rsquo;s prophecy are nearly complete. When will you act?" },
                { ref: "1:13-14", color: PURPLE, title: "Comfortable Words &mdash; Exceedingly Jealous for Zion", body: "God responds with gracious and comforting words. The content: I am exceedingly jealous for Jerusalem and for Zion. Divine passion motivates divine action." },
                { ref: "1:15-17", color: GREEN, title: "Anger at Nations &mdash; Return with Mercy &mdash; Cities Overflow", body: "I am angry with the nations that furthered the disaster. I have returned to Jerusalem with mercy. My house shall be built. Cities will overflow with prosperity. God will comfort Zion and choose Jerusalem again." },
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
              <h2 style={h2Style}>Historical Context &mdash; Post-Exilic Jerusalem in 520 BC</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The world of Zechariah 1 is the early Persian period. In 539 BC Cyrus the Great of Persia conquered Babylon. In 538 BC he issued his famous edict permitting the Jewish exiles to return to Judah and rebuild the temple (2 Chron 36:23; Ezra 1:1-4). This edict was understood by the returnees, and by the prophets Haggai and Zechariah, as the fulfillment of Jeremiah&rsquo;s prophecy that after seventy years God would bring his people back (Jer 25:11-12; 29:10)." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The first wave of returnees came under Sheshbazzar and Zerubbabel. They laid the foundations of the temple (Ezra 3:8-13) amid great celebration. But opposition from &lsquo;the people of the land&rsquo; &mdash; the mixed populations that had settled in the territory during the exile &mdash; discouraged the work and eventually brought it to a halt through political channels (Ezra 4:1-24). The construction stopped for approximately sixteen years, from the reign of Cyrus through the beginning of the reign of Darius. The temple foundation sat exposed and unbuilt, a constant visual reminder of the gap between promise and reality." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Darius I (522-486 BC) came to power after a brief period of political instability following the death of Cambyses. His consolidation of power, and the relative stability of the early Persian empire under his rule, created the political opening that Haggai and Zechariah needed. In the second year of Darius (520 BC), both prophets urged the community to resume building. By 515 BC, the temple was completed (Ezra 6:15) &mdash; a remarkable achievement made possible in part by the prophetic ministry of Zechariah and Haggai." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Zechariah and Haggai &mdash; Twin Prophets of Restoration</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Haggai and Zechariah are explicitly linked in the book of Ezra (5:1; 6:14), which credits both prophets with motivating the resumed temple construction. They prophesied in the same year (520 BC), in the same city (Jerusalem), to the same community (the returned exiles). But their messages are complementary rather than identical." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Haggai is the prophet of immediate application: he confronts the community with the anomaly of paneled houses and an unbuilt temple (Hag 1:4), he challenges them to consider their economic circumstances as evidence of divine discipline (Hag 1:6-11), and he calls them to obey now. His four oracles are urgent, practical, and short. Zechariah is the prophet of visionary depth: his eight night visions open the heavenly realm and place the community&rsquo;s earthly situation in a cosmic frame. Where Haggai says &ldquo;go build,&rdquo; Zechariah says &ldquo;here is what the universe looks like while you build.&rdquo;" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Together they model a principle of prophetic ministry: communities in crisis need both the word of immediate obedience and the word of cosmic perspective. Haggai without Zechariah produces activism without vision. Zechariah without Haggai produces vision without action. The two together produce a community that acts in obedience because it has been given a vision worth acting for." }} />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${TEAL}11, ${CARD})` }}>
              <h2 style={h2Style}>Key Themes in Zechariah 1</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1 establishes the theological agenda for the entire book. Its themes &mdash; return, vision, intercession, divine jealousy, and restoration &mdash; will be developed and expanded through the subsequent seven night visions and the oracles of chapters 7-14. The chapter is both a self-contained unit and an introduction to one of the richest prophetic books in the Hebrew canon." }} />
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
                { color: TEAL, from: "Zechariah 1:3", to: "Malachi 3:7", note: "Both prophets use the identical covenantal formula: &lsquo;Return to me and I will return to you, says the LORD of hosts.&rsquo; It is the standard covenant-renewal call of the post-exilic prophets." },
                { color: PURPLE, from: "Zechariah 1:12", to: "Psalm 13:1-2", note: "&ldquo;How long, O LORD?&rdquo; is the classic lament formula. The angel&rsquo;s intercession uses the language of the lament psalms, connecting heavenly prayer to earthly lament." },
                { color: ROSE, from: "Zechariah 1:14", to: "Exodus 20:5", note: "Divine jealousy (&lsquo;qanna&rsquo;) is first introduced in the Decalogue. There it describes God&rsquo;s exclusive claim on Israel&rsquo;s allegiance; in Zechariah 1 it describes his passionate commitment to Jerusalem&rsquo;s restoration." },
                { color: GOLD, from: "Zechariah 1:16", to: "Isaiah 40:1-2", note: "Both texts open with the theme of divine comfort (&lsquo;nechama&rsquo;) for Jerusalem after judgment. Isaiah 40 is the great prophetic statement of the end of exile; Zechariah 1 is its historically realized counterpart." },
                { color: GREEN, from: "Zechariah 1:17", to: "Zechariah 8:4-8", note: "The promise that Jerusalem&rsquo;s cities will overflow with prosperity is developed extensively in chapter 8, where old men and women fill the streets and children play in the squares of the restored city." },
                { color: TEAL, from: "Zechariah 1:8", to: "Revelation 6:1-8", note: "The colored horses of Zechariah&rsquo;s first night vision reappear in John&rsquo;s apocalyptic vision of the four horsemen, showing the influence of Zechariah&rsquo;s symbolic vocabulary on later apocalyptic literature." },
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
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Work through Zechariah 1 section by section. Click each passage to expand the commentary. The chapter moves from the initial call to return (1:1-6) through the dated introduction to the night visions (1:7), the first vision of the man among the myrtle trees (1:8-11), the angel&rsquo;s intercession (1:12), and God&rsquo;s comfortable words of mercy and restoration (1:13-17)." }} />
            </div>
            {verseItems.map(item => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "left", gap: "1rem" }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(TEAL)}>{item.ref}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: "1.05rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginTop: "0.35rem", fontStyle: "italic", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <div style={{ color: TEAL, fontSize: "1.4rem", fontWeight: 700, flexShrink: 0, marginTop: 4 }}>{open === item.id ? "-" : "+"}</div>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ ...pStyle, marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Reading Zechariah 1 as a Unified Whole</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1 moves between two realms &mdash; the historical and the heavenly &mdash; with a fluency that is characteristic of prophetic literature at its most visionary. The opening oracle (vv. 1-6) is firmly grounded in history: it references specific generations of fathers and specific prophets who are now dead. The night vision (vv. 7-17) opens onto the heavenly realm: divine patrols report to the throne room, an angel intercedes, and God speaks in the language of the heavenly court. The chapter insists that both realms are simultaneously real and that they are related: what happens in the heavenly realm (the divine decree of mercy) determines what will happen in the historical realm (the temple will be built, the cities will overflow)." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "A second structural feature is the movement from accusation to comfort. The chapter opens with the record of the fathers&rsquo; failure and the implicit warning that the present generation could repeat it. It closes with the &ldquo;comfortable words&rdquo; of divine mercy and the specific promises of restoration. This movement &mdash; from the weight of the past to the grace of the future &mdash; is the pastoral arc of the entire chapter. The community is not allowed to forget the lessons of the past (vv. 4-6), but they are also not left in the past. The &ldquo;comfortable words&rdquo; of verses 13-17 are the destination of the chapter." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The angel&rsquo;s intercession (v. 12) is the hinge of the chapter. It represents the exact midpoint between the earthly situation (the desolate Jerusalem reported by the patrol) and the divine response (the comfortable words of vv. 13-17). The intercession takes the earthly situation to the throne room and receives a divine response that transforms the earthly situation. This is the theology of prayer in miniature: bringing the condition of the world to the throne of heaven and receiving from that throne the word that changes what the world will become." }} />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Living Zechariah 1 Today</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1 was written for a specific community in a specific crisis: discouraged Jewish returnees in 520 BC who had stopped building what God had called them to build. But the patterns it establishes &mdash; the call to return, the learning from the fathers&rsquo; failure, the power of intercession, the comfort of divine words in desolation &mdash; are perennial. Five areas of application emerge with particular force for contemporary readers." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>1. Responding to the Call to Return</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The call of Zechariah 1:3 &mdash; &ldquo;Return to me, says the LORD of hosts, and I will return to you&rdquo; &mdash; is addressed to people who have not catastrophically abandoned faith but have drifted. The returned exiles still believed in the LORD. They still identified as his people. But they had allowed discouragement, distraction, and the demands of daily survival to push the things of God to the margins. The temple was not being built not because they had renounced the LORD but because they had quietly deprioritized his purposes." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This is the most common form of spiritual decline: not dramatic apostasy but incremental drift. The morning prayer that slides to afternoon and then to &ldquo;I&rsquo;ll do it tomorrow.&rdquo; The regular gathering with God&rsquo;s people that becomes occasional. The financial generosity that gets squeezed out by the demands of building a comfortable life. The serving of the community that waits until the right season. The call to return is addressed to this kind of drift. It is not a call for dramatic reconversion; it is a call to turn from the direction you have been going and face toward God again." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The promise attached to the call is equally simple and equally radical: &ldquo;I will return to you.&rdquo; The experience of God&rsquo;s distance, the sense that his presence has receded, the spiritual dryness that characterizes periods of drift &mdash; all of this is addressed by the promise that God&rsquo;s return is the response to ours. We turn; he turns. We face him; he faces us. The bilateral structure is a declaration that God is not absent from those who drift. He is waiting, calling, ready to return the moment they return." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ ...h3Style, color: PURPLE }}>2. Not Repeating the Fathers&rsquo; Mistake of Ignoring the Prophets</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1:4-6 contains a sobering historical reflection: the previous generation heard the same call to return, from the same prophets (the &ldquo;former prophets&rdquo; of the pre-exilic period), and refused to listen. The consequence was exile. Even in exile they eventually acknowledged that the prophets were right. But the acknowledgment came too late to prevent the catastrophe. Zechariah is asking the present generation: are you going to wait for your own catastrophe before you admit the word of God was right?" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This has a direct application for how we read and respond to Scripture. The word of God in both testaments carries the same structure: here is what is right, here is what will happen if you go the other direction, here is the call to return. Generations that treat these words as interesting ancient literature rather than living address are making the fathers&rsquo; mistake. The word overtakes: it comes true. The question is whether we align with it before the consequences arrive or after." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Practically, this means taking the prophetic word in Scripture seriously enough to allow it to challenge our actual choices &mdash; not just our doctrinal positions. The fathers did not fail theologically; they failed practically. They heard and did not do. The call of Zechariah 1:4-6 is a call to the practical obedience of people who have learned from the fathers&rsquo; cautionary example." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${ROSE}` }}>
              <h3 style={{ ...h3Style, color: ROSE }}>3. The Power of Angelic Intercession and Our Partnership Through Prayer</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1:12 records an angel praying to God on behalf of Jerusalem: &ldquo;O LORD of hosts, how long will you have no mercy on Jerusalem and the cities of Judah, against which you have been angry these seventy years?&rdquo; This is not merely a curiosity of prophetic vision. It is a disclosure of a dimension of reality that usually remains invisible: the heavenly realm is a realm of intercession, where spiritual beings bring the needs of God&rsquo;s people before his throne and appeal to his faithfulness." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The New Testament builds on this vision. Jesus Christ is our great high priest who &ldquo;always lives to make intercession&rdquo; for those who draw near to God through him (Heb 7:25). The Spirit intercedes with groanings too deep for words (Rom 8:26). The prayers of the saints rise before God as incense (Rev 8:3-4). We are not praying in isolation, directing our words into an empty heaven. We are joining a chorus of intercession that includes the Spirit, the Son, and the angels &mdash; all bringing the needs of God&rsquo;s people before his throne." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For communities of faith today, Zechariah 1:12 is an invitation to pray with genuine expectation. The &ldquo;how long?&rdquo; of the angel is not despair but faith. It is holding God to his own promises, appealing to his declared purposes, bringing the desolation of the present before the throne of the one who has spoken &ldquo;comfortable words&rdquo; about what the future will be. To pray &ldquo;how long?&rdquo; is to pray from inside the divine promise, not outside it." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ ...h3Style, color: GOLD }}>4. Receiving God&rsquo;s Comfortable Words in Seasons of Discouragement</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 1:13 describes God&rsquo;s response to the angel&rsquo;s intercession as &ldquo;gracious and comforting words.&rdquo; The content of those words (vv. 14-17) is specific: God is jealous for Jerusalem, angry at the nations who harmed her beyond their mandate, and has returned with mercy. The temple will be built. The cities will overflow. Zion will be comforted. Jerusalem will be chosen again. These are not vague spiritual generalities; they are specific promises addressing the specific desolation of the community." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "In seasons of discouragement, the temptation is either to avoid the painful reality (false comfort) or to dwell in it without hope (despair). Zechariah models a third way: bringing the painful reality to God in honest lament (as the angel does in v. 12) and then receiving the specific word that addresses that specific pain. The comfortable words of God are not generalities that float above the specifics of human suffering. They are targeted, concrete, addressed to the actual desolation in front of the prophet." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Finding God&rsquo;s comfortable words for our own season of discouragement requires bringing the specific desolation to him in honest prayer and then waiting in his word for the specific address. The Psalms of lament model this: specific grief (Ps 22:1), specific appeal (Ps 22:19-21), specific confidence of being heard (Ps 22:24). Zechariah 1 follows the same pattern. The discomfort is named; the intercession is voiced; the comfortable words come." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GREEN}` }}>
              <h3 style={{ ...h3Style, color: GREEN }}>5. Rebuilding What Is Desolate When God Calls Us To</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The practical application of Zechariah 1 for the original community was clear: get back to building the temple. God has returned to Jerusalem with mercy; his house shall be built. The divine decree of restoration does not bypass human obedience &mdash; it empowers and authorizes it. God&rsquo;s return creates the conditions in which the community&rsquo;s obedient building is effective and fruitful. The measuring line stretched over Jerusalem (v. 16) is not God measuring the city for his own private rebuilding project. It is the survey that precedes the community&rsquo;s own construction." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For contemporary communities of faith, the question Zechariah 1 raises is: what has fallen into desolation that God is calling you to rebuild? It might be a specific ministry that was once flourishing and has stalled. It might be a relationship in the community that has broken down and been left unaddressed. It might be a practice of prayer, of service, of generosity that drift and discouragement allowed to lapse. God&rsquo;s return with mercy does not mean desolate things automatically restore themselves. It means the conditions are now in place for the rebuilding that obedience must undertake." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The moved community in 520 BC was not called to extraordinary heroism. They were called to pick up their tools and go back to work on what they had abandoned. The prophetic word authorized and motivated that ordinary act of obedience. The same word, applied in the same Spirit, can authorize ordinary acts of faithfulness in our own moment: showing up, doing the work, trusting that the measuring line has been stretched over Jerusalem and the building can begin." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Questions for Reflection and Discussion</h2>
              {[
                { num: "1", q: "God calls the community to &ldquo;return to me&rdquo; rather than demanding specific acts of penance or repayment. What does it look like for you personally to &ldquo;return&rdquo; to the LORD right now? What would have to change in your daily orientation?" },
                { num: "2", q: "Zechariah points to the fathers who heard the prophets and did not listen. The word eventually overtook them. What word of God have you been hearing for a season that you have been slow to obey? What is the cost of continued delay?" },
                { num: "3", q: "The patrol reports that the earth is at rest while Jerusalem suffers &mdash; and God is angry with the comfortable nations. Where in your own observation does comfort and ease coexist unjustly with desolation and suffering? How do you bring that to God in prayer?" },
                { num: "4", q: "The angel prays &ldquo;how long, O LORD?&rdquo; from a place of faith in God&rsquo;s promise. What &ldquo;how long?&rdquo; do you need to voice to God right now? What promise of his are you appealing to when you pray it?" },
                { num: "5", q: "God says through Zechariah: &ldquo;I have returned to Jerusalem with mercy; my house shall be built.&rdquo; What is the &lsquo;house&rsquo; &mdash; the desolate thing &mdash; that you sense God calling you or your community to rebuild? What practical first step would picking up the measuring line look like?" },
              ].map(item => (
                <div key={item.num} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: TEAL + "22", color: TEAL, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{item.num}</div>
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

            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${TEAL}11, ${PURPLE}11)`, textAlign: "center" }}>
              <h2 style={h2Style}>A Prayer from Zechariah 1</h2>
              <p style={{ ...pStyle, fontStyle: "italic", maxWidth: 560, margin: "0 auto 1rem" }} dangerouslySetInnerHTML={{ __html: "LORD of hosts, we hear your call to return to you and we come. We confess that we have drifted &mdash; not dramatically, but steadily &mdash; and that the things of your kingdom have slipped to the margins of our days. Like the fathers, we have heard what the prophets said and not always obeyed. Forgive us; lead us to turn. And in the seasons when the earth seems at rest while your purposes seem delayed &mdash; when the comfortable nations prosper and Zion mourns &mdash; give us the angel&rsquo;s courage to cry: how long, O LORD? Remind us that you are exceedingly jealous for your city, that your jealousy is love, and that you have spoken comfortable words over our desolation. You have returned to us with mercy. Help us to receive those words, to pick up the measuring line, and to rebuild what has been left desolate. For the mouth of the LORD of hosts has spoken. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
