"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Haggai1Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "3sO5FH2ybPY", title: "The Book of Haggai" },
    { id: "rNcERbkSTXU", title: "Haggai: Rebuilding the Temple" },
    { id: "OjJ7GkWCHvA", title: "Consider Your Ways &mdash; Haggai 1" },
    { id: "CE8QbkUCNK4", title: "Haggai and the Glory of God" },
  ];
  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = { overview: "Overview", themes: "Key Themes", verse: "Verse by Verse", application: "Application" };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "priorities",
      color: GOLD,
      title: "Misplaced Priorities: Paneled Houses vs. the Ruined Temple",
      body: "The central accusation of Haggai 1 is delivered with surgical precision in verse 4: &ldquo;Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?&rdquo; The word translated &ldquo;paneled&rdquo; (<em>sapher</em>) refers to houses lined with expensive cedarwood &mdash; the same cedar used in Solomon&rsquo;s Temple and palace (1 Kings 6:9; 7:3). The returned exiles were not living in bare survival conditions. They were building comfortable, even luxurious homes. Their domestic priorities had advanced; the priority of God&rsquo;s house had stalled. This is not an accusation of idolatry or gross immorality. It is an accusation of misplaced priority &mdash; a community ordering its life around its own comfort while God&rsquo;s dwelling place lay desolate. The diagnostic force of Haggai&rsquo;s question has not diminished. Every generation of God&rsquo;s people faces a version of the same question: What takes priority in the way we spend our time, energy, money, and attention? The issue is not that houses or material provision are wrong. The issue is the ordering &mdash; the question of what comes first. When the church (the community of God&rsquo;s people, the living temple of the Spirit) is treated as secondary to personal comfort, professional advancement, or domestic security, Haggai&rsquo;s question echoes forward across the centuries: &ldquo;Is it a time for you to dwell in your paneled houses while my house lies in ruins?&rdquo; The question is designed not to condemn but to awaken &mdash; to shake the community out of the comfortable amnesia that causes them to forget who they are and what they are for.",
    },
    {
      id: "consider",
      color: TEAL,
      title: "The &ldquo;Consider Your Ways&rdquo; Refrain: A Prophetic Call to Self-Examination",
      body: "The phrase &ldquo;Consider your ways&rdquo; (<em>simu levavkhem al-darkekem</em>) appears twice in Haggai 1, at verses 5 and 7. Literally the Hebrew says &ldquo;set your heart upon your ways&rdquo; &mdash; a call not merely to intellectual reflection but to a whole-person, integrated examination of the direction one&rsquo;s life has been taking. This is not the guilt-inducing self-scrutiny of performance anxiety. It is the prophetic invitation to wisdom &mdash; to stop, look honestly at the results of one&rsquo;s choices, and let the evidence lead to conviction. The method Haggai uses is essentially the method of lived consequences: look at your harvests (v. 6), look at your clothing (v. 6), look at your wages (v. 6). The evidence of misplaced priority is written in the fabric of daily economic life. The people have sown much but harvested little; eaten but not been satisfied; drunk but not been filled; earned wages but found those wages disappearing into bags with holes. Haggai does not need to make a theological argument from first principles; he simply points to observable reality and asks the people to think about it carefully. The refrain functions as a structural device that brackets the first oracle (vv. 5&ndash;6) and introduces the second (vv. 7&ndash;11). Its repetition signals that this is not a minor suggestion but the central demand of the chapter: Stop. Think. Examine the direction of your life in light of what you know to be true about God and his priorities. The double use of the phrase also anticipates the double oracle structure of the chapter &mdash; the first &ldquo;consider&rdquo; diagnoses the problem (wrong priorities producing economic frustration), the second &ldquo;consider&rdquo; issues the prescription (go up, build, that God may be glorified).",
    },
    {
      id: "economic",
      color: ROSE,
      title: "Economic Consequences of Wrong Priorities: Bags with Holes",
      body: "Haggai 1:6 contains one of the most vivid economic images in the prophetic literature: &ldquo;You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill. You clothe yourselves, but no one is warm. And he who earns wages does so to put them into a bag with holes.&rdquo; The image of wages going into a bag with holes is almost comic in its specificity &mdash; and devastating in its theological implication. The people are working hard. They are sowing seed, earning wages, tending flocks. But the returns are consistently less than the inputs. The economy is not producing what it should. Haggai&rsquo;s diagnosis is not economic but theological: the drought and shortage are consequences of the desolation of God&rsquo;s house (v. 11). This connection between the condition of the temple and the condition of the land is not a novelty in Haggai. It runs through the entire prophetic and wisdom tradition. Deuteronomy 28 makes explicit the connection between obedience and agricultural blessing, disobedience and shortage (Deut 28:15&ndash;24). Hosea 4:3 connects Israel&rsquo;s unfaithfulness to a withered land. Leviticus 26:20 warns that disobedience will cause the land to produce nothing. Haggai is applying a well-established theological principle to a specific situation: the community has organized its economic life around self-provision while neglecting the priority of God&rsquo;s house, and the result is an economy that cannot satisfy. The bags with holes are not primarily an agricultural phenomenon. They are a symptom of a disordered relationship with God. The prescription is not economic reform but theological reordering: put God&rsquo;s house first, and the land will respond.",
    },
    {
      id: "hostsname",
      color: PURPLE,
      title: "The LORD of Hosts: The Cosmic King Rebuilds His House",
      body: "One of the most striking features of Haggai&rsquo;s prose is the frequency with which he uses the divine title &ldquo;the LORD of hosts&rdquo; (<em>YHWH Tseva&rsquo;ot</em>). The title occurs fourteen times in Haggai&rsquo;s thirty-eight verses &mdash; an extraordinary concentration. The title &ldquo;LORD of hosts&rdquo; evokes the divine warrior who commands the armies of heaven: the angelic beings, the stars, and the forces of creation that are subject to YHWH&rsquo;s sovereign will. This is the God who parted the Red Sea, who brought Israel through the wilderness, who toppled Jericho&rsquo;s walls, who moved the heart of Cyrus of Persia to release the exiles (Ezra 1:1&ndash;4). The repeated use of this title in Haggai is theologically deliberate. The people may have been discouraged by their smallness &mdash; a tiny community of returned exiles in a province of the Persian Empire, without the resources or political power to undertake a great building project. The title &ldquo;LORD of hosts&rdquo; answers that discouragement: the God commanding the rebuilding of his house is not a tribal deity limited by Persian politics. He is the LORD of the armies of heaven, the cosmic king whose interests in his earthly dwelling place are backed by all the force of his sovereign power. When the LORD of hosts says &ldquo;Go up to the hills and bring wood and build the house, that I may take pleasure in it and that I may be glorified&rdquo; (v. 8), it is not a suggestion from a limited deity. It is a command from the most powerful being in the universe, who takes the rebuilding of his house personally and who has the resources to bring it to completion &mdash; as the sequel will confirm when he stirs the spirits of Zerubbabel, Joshua, and all the remnant (v. 14).",
    },
    {
      id: "spiritresponse",
      color: GREEN,
      title: "The Stirring of the Spirit: God&rsquo;s Work in Response to Obedience",
      body: "Haggai 1:14 is one of the most theologically significant verses in the chapter: &ldquo;And the LORD stirred up the spirit of Zerubbabel the son of Shealtiel, governor of Judah, and the spirit of Joshua the son of Jehozadak, the high priest, and the spirit of all the remnant of the people. And they came and worked on the house of the LORD of hosts, their God.&rdquo; The sequence in Haggai 1 moves from prophetic word (vv. 1&ndash;11) to human response of fear and obedience (vv. 12&ndash;13) to divine stirring (v. 14). The word &ldquo;stirred&rdquo; (<em>ur</em>) is used throughout the OT for the awakening of divine or human energy for a significant task (cf. 2 Chronicles 36:22; Ezra 1:1; Isaiah 41:2; 45:13). God stirs the spirits of the leaders and the people &mdash; not by overriding their will but by working within and through it, awakening an energy for the task that human resolution alone could not have sustained. This sequence is deeply pastoral. The people&rsquo;s initial response to the prophetic word is fear: &ldquo;the people feared before the LORD&rdquo; (v. 12). This is not terror but the reverential awe that accompanies genuine encounter with divine truth. They heard the word, they recognized its authority, and they were afraid &mdash; because the word exposed something true and uncomfortable about their lives. God&rsquo;s response to their fear is immediate and personal: &ldquo;I am with you, declares the LORD&rdquo; (v. 13). The promise of divine presence precedes and enables the divine stirring. The rebuilding of the temple is not a human project that God endorses; it is a divine project that God enables, through the preaching of his word, the obedient response of his people, and the stirring of his Spirit in their midst.",
    },
    {
      id: "newtemple",
      color: TEAL,
      title: "The Physical House and the New Covenant Temple",
      body: "Haggai&rsquo;s theology of the physical house of God &mdash; a specific building in a specific location where God&rsquo;s glory dwells &mdash; stands in interesting tension with the New Testament&rsquo;s development of the temple theme. The New Testament does not abandon the category of the temple; it radicalizes it. Paul teaches in 1 Corinthians 3:16&ndash;17 that the community of believers is the temple of God and that the Spirit of God dwells in them. Ephesians 2:19&ndash;22 extends this: the whole church, built on the foundation of apostles and prophets with Christ Jesus himself as the cornerstone, is growing into a holy temple in the Lord, a dwelling place for God by the Spirit. Revelation 21:3 describes the new creation in terms that echo the temple: &ldquo;Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God.&rdquo; In this trajectory, Haggai&rsquo;s insistence on the priority of God&rsquo;s dwelling place is not superseded but fulfilled. What Haggai applied to a physical building in Jerusalem, the New Testament applies to the community of the Spirit and ultimately to the entire renewed creation. The question Haggai asked &mdash; is the priority of God&rsquo;s dwelling place being honored? &mdash; does not become obsolete in the new covenant era; it is reapplied to the living temple. Are we &mdash; individually and corporately &mdash; tending the dwelling place of God&rsquo;s Spirit? Are we ordering our lives so that the community of the Spirit, the new covenant temple, flourishes and grows? The paneled houses vs. the ruined temple becomes: our personal comfort vs. the health and growth of the Spirit-indwelt community.",
    },
  ];

  const verseItems = [
    {
      id: "v1-2",
      ref: "1:1&ndash;2",
      title: "The Date and the People&rsquo;s Excuse: &ldquo;The Time Has Not Yet Come&rdquo;",
      body: "Haggai 1:1 opens with exceptional chronological precision: &ldquo;In the second year of Darius the king, in the sixth month, on the first day of the month.&rdquo; This date corresponds to August 29, 520 BC. Haggai is the most precisely dated of all the prophetic books; four separate oracles are given with exact dates across a period of roughly four months (1:1; 2:1; 2:10; 2:20). The precision is theologically significant: this is not timeless religious discourse. It is word from God addressed to a specific community in a specific historical moment, with specific political, social, and economic conditions. The historical context matters: Darius I had recently come to power after a period of political turmoil in the Persian Empire (522&ndash;520 BC). The returning exiles, under the leadership of Zerubbabel (the governor, of the Davidic line) and Joshua (the high priest), had returned to Judah after Cyrus&rsquo;s decree in 538 BC. Ezra 4 records that the initial attempt to rebuild the temple had been opposed and eventually halted by adversaries who wrote to the Persian court; the rebuilding had stalled. Haggai is commissioned by God to break through that stalemate. The word of the LORD came through Haggai to Zerubbabel and Joshua. The message immediately quotes what the people have been saying: &ldquo;The time has not yet come to rebuild the house of the LORD.&rdquo; This is their excuse for inaction &mdash; not &ldquo;we cannot&rdquo; but &ldquo;it is not yet time.&rdquo; The excuse of timing is one of the most common forms of spiritual procrastination: not now, not yet, when conditions are better, when we have more resources, when the opposition quiets down, when the economy improves. Haggai&rsquo;s response to this excuse is to redirect the community&rsquo;s attention from the timing of the project to the ordering of their priorities.",
    },
    {
      id: "v3-6",
      ref: "1:3&ndash;6",
      title: "First Oracle: Paneled Houses and the Ruined Temple; Consider Your Ways",
      body: "The first prophetic oracle (vv. 3&ndash;6) follows directly from the people&rsquo;s excuse with a devastating question: &ldquo;Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?&rdquo; (v. 4). The rhetorical force of the question is considerable. The people have just said it is not the right time to build the temple. Haggai points out that they have found it quite opportune to build comfortable homes for themselves. If there is time and resource for paneled houses, why is there no time for God&rsquo;s house? The contrast between &ldquo;your paneled houses&rdquo; (emphatic pronoun: &ldquo;you yourselves&rdquo;) and &ldquo;this house&rdquo; (God&rsquo;s house) sets up the moral and theological contrast that drives the whole chapter. Verse 5 issues the first &ldquo;consider your ways&rdquo; command, followed by the evidence of what misplaced priorities have produced (v. 6): &ldquo;You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill. You clothe yourselves, but no one is warm. And he who earns wages does so to put them into a bag with holes.&rdquo; The pattern in verse 6 is a series of antitheses: much sown / little harvested; eating / not satisfied; drinking / not filled; clothing / not warm; earning / losing. In each case, the expected return is not forthcoming. The economy is not meeting expectations. Haggai&rsquo;s interpretation of this shortfall is theological: the connection between the condition of God&rsquo;s house and the fertility of the land goes back to the covenant promises of Deuteronomy and Leviticus. When God&rsquo;s house is desolate, the land reflects that desolation. The connection is not mechanical or magical; it reflects the covenantal relationship between YHWH and his people&rsquo;s land. Where God is honored, blessing flows; where he is neglected, the created order itself reflects that neglect.",
    },
    {
      id: "v7-11",
      ref: "1:7&ndash;11",
      title: "Second Oracle: Go Up and Build; Drought and Shortage Because the House Is Desolate",
      body: "The second oracle begins with the repeated &ldquo;consider your ways&rdquo; (v. 7) and moves immediately to the prescription: &ldquo;Go up to the hills and bring wood and build the house, that I may take pleasure in it and that I may be glorified, says the LORD&rdquo; (v. 8). The command is concrete and actionable: go to the hills, cut timber, build. The goal is stated in two parallel clauses: that God may &ldquo;take pleasure in it&rdquo; (<em>ertsah bo</em>) and that he may be &ldquo;glorified&rdquo; (<em>ekaved</em>). The word <em>kaved</em> (glorified, honored, heavy) connects to the <em>kavod</em> (glory) of God that filled the tabernacle and the first temple (Exodus 40:34&ndash;35; 1 Kings 8:10&ndash;11). God&rsquo;s desire is for a dwelling place in which his glory can rest and from which it can radiate. Verses 9&ndash;11 provide the theological explanation for the economic shortfall described in verse 6. &ldquo;You looked for much, and behold, it came to little. And when you brought it home, I blew it away. Why? declares the LORD of hosts. Because of my house that lies in ruins, while each of you busies himself with his own house&rdquo; (v. 9). The phrase &ldquo;I blew it away&rdquo; is anthropomorphic and vivid &mdash; God actively diminishing what they had gathered, not passively withdrawing blessing. Verses 10&ndash;11 extend the judgment: the heavens withhold dew, the earth withholds its produce, there is drought on the land, the hills, the grain, the new wine, the oil, on everything that the ground brings forth. The comprehensive scope of the judgment &mdash; touching every category of agricultural produce &mdash; mirrors the comprehensive scope of the people&rsquo;s misplaced priority. Nothing is untouched because everything is out of order. The remedy is equally comprehensive: rebuild the house of the LORD, and the created order will respond.",
    },
    {
      id: "v12-15",
      ref: "1:12&ndash;15",
      title: "The Remnant&rsquo;s Response: They Feared, They Obeyed, the LORD Stirred Their Spirit",
      body: "Haggai 1:12 records one of the most beautiful moments in the post-exilic literature: &ldquo;Then Zerubbabel the son of Shealtiel, and Joshua the son of Jehozadak, the high priest, with all the remnant of the people, obeyed the voice of the LORD their God, and the words of Haggai the prophet, as the LORD their God had sent him. And the people feared before the LORD.&rdquo; The response is immediate, comprehensive, and properly ordered. They obeyed &ldquo;the voice of the LORD their God, and the words of Haggai the prophet.&rdquo; They did not separate the prophet&rsquo;s words from the divine voice; they received Haggai&rsquo;s message as God&rsquo;s own word. And their response was fear &mdash; the reverential awe that marks genuine encounter with divine truth. God&rsquo;s response to their obedient fear is immediate: &ldquo;Then Haggai, the messenger of the LORD, spoke to the people with the LORD&rsquo;s message, &lsquo;I am with you, declares the LORD&rsquo;&rdquo; (v. 13). The divine presence &mdash; <em>immanuel</em>, God with us &mdash; is the most fundamental form of divine blessing. It is what made the tabernacle significant, what made the temple meaningful. And God promises it here, in response to the trembling obedience of a small community of returned exiles in a Persian province, before the first stone of the temple has been relaid. The promise of presence enables the stirring of verse 14: &ldquo;The LORD stirred up the spirit of Zerubbabel the son of Shealtiel, governor of Judah, and the spirit of Joshua the son of Jehozadak, the high priest, and the spirit of all the remnant of the people. And they came and worked on the house of the LORD of hosts, their God, on the twenty-fourth day of the sixth month, in the second year of Darius the king.&rdquo; The chapter ends with another precise date: September 21, 520 BC. Twenty-three days after the oracle was delivered (August 29), the work has begun. Word, obedience, divine stirring, and action: this is the pattern of Spirit-led community renewal.",
    },
  ];

  const appItems = [
    {
      id: "priorities",
      color: GOLD,
      title: "Examining Our Own Paneled Houses",
      body: "The question of Haggai 1:4 is timeless in its form and piercing in its application: &ldquo;Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?&rdquo; For Christians, the house of God is no longer a building in Jerusalem but the community of the Spirit &mdash; the church, the body of Christ, the living temple in which God&rsquo;s Spirit dwells. The question becomes: Where am I investing my best time, energy, financial resources, and creative attention? Is it in building and beautifying the circumstances of my own personal life &mdash; my career, my home, my leisure, my comfort &mdash; while the community of God&rsquo;s people is neglected, underfunded, under-attended, and under-prayed-for? This is not a call to asceticism or to the denigration of home and family life. It is a call to ordering. God&rsquo;s priorities come first; personal comfort comes afterward. The diagnostic question for personal examination is not &ldquo;am I providing for my family?&rdquo; (that is right and good) but &ldquo;what does the ordering of my resources reveal about what I actually value most?&rdquo; Where your treasure is, there your heart will be also (Matthew 6:21). Haggai&rsquo;s question is designed to expose the gap between our professed priorities and our actual priorities as revealed by where we spend what we have.",
    },
    {
      id: "consider",
      color: TEAL,
      title: "The Practice of Self-Examination: &ldquo;Consider Your Ways&rdquo;",
      body: "Haggai&rsquo;s twice-repeated command &ldquo;consider your ways&rdquo; introduces a spiritual discipline that the Christian tradition has practiced under various names: the examination of conscience, the daily examen (in the Jesuit tradition), or the biblical practice of self-judgment described by Paul in 1 Corinthians 11:28&ndash;31. The practice involves stopping, looking honestly at the direction of one&rsquo;s life, examining the fruits of one&rsquo;s choices, and allowing that honest examination to lead to repentance and reordering. Haggai&rsquo;s method is empirical: look at the harvests, look at the wages, look at the economy of your life. What are the results of the choices you have been making? Do those results tell you something about whether your priorities are rightly ordered? This kind of honest self-examination is not an exercise in self-condemnation. It is an exercise in wisdom &mdash; the wisdom of seeing clearly enough to make a course correction before the consequences of misplaced priority deepen further. A regular practice of &ldquo;considering your ways&rdquo; might include questions like: What has occupied most of my attention and energy this week? What do my bank statements and calendar reveal about my actual priorities? Where am I experiencing the &ldquo;bag with holes&rdquo; phenomenon &mdash; working hard but not finding satisfaction &mdash; and what might that be pointing to?",
    },
    {
      id: "presence",
      color: GREEN,
      title: "I Am with You: The Promise That Makes Everything Possible",
      body: "The most important verse in Haggai 1 may be verse 13: &ldquo;I am with you, declares the LORD.&rdquo; It is the shortest verse in the chapter and the most theologically weighty. The people have obeyed the prophetic word; they have feared before the LORD; and God&rsquo;s first response is not a building plan or a resource provision. It is a promise of presence. &ldquo;I am with you.&rdquo; This promise of divine presence runs like a golden thread through the entire Bible. God says it to Isaac (Genesis 26:24), to Jacob (Genesis 28:15), to Moses (Exodus 3:12), to Joshua (Joshua 1:5, 9), to Gideon (Judges 6:16), to Jeremiah (Jeremiah 1:8), to Paul (Acts 18:10). It is the content of Immanuel: &ldquo;God with us&rdquo; (Isaiah 7:14; Matthew 1:23). And it is the final promise of the risen Jesus: &ldquo;Behold, I am with you always, to the end of the age&rdquo; (Matthew 28:20). What makes the rebuilding of the temple possible is not the availability of cedar from the hills or the political will of Zerubbabel. It is the presence of the LORD who commands it. What makes any act of obedience to God&rsquo;s call possible is not our strength or resources or readiness. It is the same promise: I am with you. When God calls us to build something &mdash; a marriage, a family, a church, a work of justice, a community of discipleship &mdash; the enabling reality is not our competence but his presence.",
    },
    {
      id: "stirring",
      color: PURPLE,
      title: "The Stirring of the Spirit: Human Obedience and Divine Initiative",
      body: "Haggai 1:14 describes a remarkable theological movement: the people obey, God responds with the promise of presence, and then God stirs their spirits to work. The stirring (<em>ur</em>) of Zerubbabel and Joshua and all the remnant is a sovereign divine act &mdash; God awakening in his people an energy and willingness for the task that goes beyond what human resolution alone could produce. This pattern &mdash; human obedience followed by divine empowerment &mdash; appears throughout Scripture and runs counter to both passivity (waiting for God to move before we do anything) and self-reliance (acting entirely in our own strength). The people of Haggai 1 neither waited passively for inspiration nor attempted to rebuild in their own strength alone. They heard the word, they feared before the LORD, they obeyed &mdash; and God stirred their spirits. The stirring came in response to the obedience, not instead of it. This is the pattern of Spirit-led action: we step out in response to the word, and God supplies the energy and effectiveness that our obedience alone cannot produce. Practically, this means that waiting for enthusiasm or emotional readiness before obeying is usually the wrong approach. We obey with whatever willingness we have, and God stirs the spirit that is already in motion. The engine of obedience starts the car; the Spirit is the fuel that sustains the journey.",
    },
    {
      id: "lordofhosts",
      color: ROSE,
      title: "The LORD of Hosts: Why the Building Project Matters Cosmically",
      body: "Haggai calls God &ldquo;the LORD of hosts&rdquo; (<em>YHWH Tseva&rsquo;ot</em>) fourteen times in thirty-eight verses. This title carries enormous theological weight and is directly relevant to the discouraged community of returned exiles. They are small. The empire is vast. Their resources are limited. Their opposition is real. The building they are trying to construct will look nothing like Solomon&rsquo;s Temple (Haggai 2:3). Why does this project matter? Because the LORD of hosts &mdash; the sovereign of all creation, the commander of every angelic army, the one who moves the hearts of kings and directs the course of empires &mdash; has declared that his glory is at stake in the rebuilding of his earthly dwelling place. When the LORD of hosts says &ldquo;that I may be glorified,&rdquo; he is staking his cosmic reputation on the completion of the project. This should remove every excuse about insufficient resources. The one who commands the rebuilding is himself the LORD of the resources of heaven and earth. The exiles are not building in their own strength; they are building at the command of and with the backing of the cosmic king. The same is true for every project undertaken at God&rsquo;s initiative: the local church plant in a difficult neighborhood, the ministry to the marginalized, the work of reconciliation in a divided community. These are not human projects hoping for divine assistance. They are divine projects executed through human agents, backed by all the authority and resources of the LORD of hosts.",
    },
  ];

  const reflectionQs = [
    "Haggai asked: &ldquo;Is it a time for you to dwell in your paneled houses while my house lies in ruins?&rdquo; If you honestly examine how you spend your time, money, and energy, what does the distribution reveal about your actual priorities versus your stated ones?",
    "The phrase &ldquo;consider your ways&rdquo; is repeated twice as a call to self-examination. What evidence in your own life &mdash; in the &lsquo;harvests&rsquo; and &lsquo;wages&rsquo; of your spiritual, relational, and vocational life &mdash; might God be using to call you to examine your direction?",
    "The people&rsquo;s excuse was &ldquo;the time has not yet come.&rdquo; Where in your own discipleship, service, or obedience are you using timing as a reason for inaction? What would it look like to obey now rather than wait for better conditions?",
    "God&rsquo;s first response to the people&rsquo;s obedience was &ldquo;I am with you.&rdquo; What project or calling in your life needs the reassurance of divine presence more than better resources, timing, or preparation? How does the promise &ldquo;I am with you&rdquo; change your posture toward it?",
    "Haggai&rsquo;s theology connects the physical house of God to the new covenant community of the Spirit (1 Corinthians 3:16&ndash;17; Ephesians 2:19&ndash;22). In what practical ways are you investing in the health, growth, and flourishing of the living temple &mdash; the community of God&rsquo;s people?",
    "The LORD stirred the spirit of Zerubbabel, Joshua, and the remnant after their obedience. Have you experienced a moment when obedience preceded enthusiasm &mdash; when you stepped out in obedience and found God supplying the energy and willingness you lacked at the start? What happened?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d1200 0%, #12121F 60%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: GOLD, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ background: TEAL + "22", color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>HAGGAI 1</span>
            <span style={{ color: MUTED, fontSize: 14 }}>15 Verses &bull; 520 BC</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Haggai 1: Consider Your Ways
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: "0 0 24px" }} dangerouslySetInnerHTML={{ __html: "The post-exilic prophet calls a community of returned exiles to examine their priorities and rebuild what they have neglected &mdash; the house of the LORD of hosts." }} />
          <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 10, padding: "16px 20px", maxWidth: 640 }}>
            <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>KEY VERSES &mdash; HAGGAI 1:7&ndash;8</div>
            <p style={{ margin: 0, fontStyle: "italic", lineHeight: 1.7, color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;Thus says the LORD of hosts: Consider your ways. Go up to the hills and bring wood and build the house, that I may take pleasure in it and that I may be glorified, says the LORD.&rdquo;" }} />
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview of Haggai 1</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Haggai 1 is a prophetic call to reordering &mdash; a word from the LORD of hosts to a community that has settled into comfortable domesticity while the project God commissioned them to complete has stalled. In fifteen verses, it diagnoses the spiritual and economic consequences of misplaced priority, commands the rebuilding of God&rsquo;s house, and records one of the most encouraging sequences in the prophetic literature: the community hears, fears, obeys, and receives the divine presence and the stirring of the Spirit." }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Haggai" },
                { label: "Chapter", value: "1 of 2" },
                { label: "Verses", value: "15" },
                { label: "Date", value: "August 29, 520 BC" },
                { label: "King", value: "Darius I of Persia" },
                { label: "Leaders", value: "Zerubbabel &amp; Joshua" },
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
                  { ref: "1:1&ndash;2", desc: "Date, recipients, and the people&rsquo;s excuse: the time has not yet come" },
                  { ref: "1:3&ndash;6", desc: "First oracle: is it time for paneled houses? Consider your ways; the bag with holes" },
                  { ref: "1:7&ndash;11", desc: "Second oracle: consider your ways; go up and build; drought because the house is desolate" },
                  { ref: "1:12", desc: "The remnant&rsquo;s response: Zerubbabel, Joshua, and all the people obeyed; they feared before the LORD" },
                  { ref: "1:13", desc: "God&rsquo;s response: I am with you, declares the LORD" },
                  { ref: "1:14&ndash;15", desc: "The LORD stirred their spirits; they came and worked on the house of the LORD of hosts" },
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
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "In 538 BC, Cyrus the Great of Persia issued a decree allowing the Jewish exiles to return to Judah and rebuild the temple (Ezra 1:1&ndash;4; Isaiah 44:28). A first wave of exiles returned under Sheshbazzar and began laying the foundation. But opposition from local peoples led to a halt in construction (Ezra 4:1&ndash;24). For roughly sixteen years (536&ndash;520 BC) the temple foundation sat unfinished while the community built its own homes. In 520 BC, Darius I issued a confirmation of Cyrus&rsquo;s decree (Ezra 6:1&ndash;12), and Haggai and Zechariah were raised up to stir the community. The temple was completed in 516 BC, exactly seventy years after its destruction in 586 BC. Haggai is one of only two post-exilic prophets named in the historical books (Ezra 5:1; 6:14)." }} />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 22px" }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, color: PURPLE }}>Four Oracles in Four Months</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Haggai delivers four precisely dated oracles between August and December 520 BC. Oracle 1 (1:1&ndash;11): August 29 &mdash; the call to rebuild. Oracle 2 (2:1&ndash;9): October 17 &mdash; the glory of the new temple will be greater than the former. Oracle 3 (2:10&ndash;19): December 18 &mdash; the turning point; from this day I will bless you. Oracle 4 (2:20&ndash;23): December 18 &mdash; Zerubbabel as God&rsquo;s signet ring. The four oracles span approximately four months, during which the community goes from paralysis to active construction. Haggai is one of the shortest books in the OT (38 verses) but one of the most chronologically precise." }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>The LORD of Hosts: Title and Theology</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The divine title &ldquo;LORD of hosts&rdquo; (<em>YHWH Tseva&rsquo;ot</em>) occurs 14 times in Haggai&rsquo;s 38 verses &mdash; roughly one occurrence for every three verses. The title designates God as the commander of all the armies of heaven and earth: the angelic hosts, the stars, the forces of the created order. It is the name of the God who is sovereign over all powers, human and spiritual, who uses empires and stars and prophets and weather systems to accomplish his purposes. Its frequency in Haggai is pastorally significant: the returned exiles were a tiny, underpowered community in a provincial backwater of the Persian Empire. The repeated insistence that it is the LORD of hosts &mdash; not merely &lsquo;God&rsquo; &mdash; who is commanding and enabling the rebuilding project is a constant reminder that the force behind the work is infinitely greater than the visible resources of the community undertaking it." }} />
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Haggai 1 develops several interlocking theological themes that connect the post-exilic situation to the broader story of God&rsquo;s relationship with his people and, through the New Testament, to the church and the new creation." }} />
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
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16 }}>Cross-References: The Temple Theme in Scripture</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "Exodus 40:34&ndash;35", desc: "The glory of the LORD filled the tabernacle &mdash; the original divine dwelling" },
                  { ref: "1 Kings 8:10&ndash;11", desc: "The cloud fills Solomon&rsquo;s Temple; the priests cannot stand to minister" },
                  { ref: "Ezra 1:1&ndash;4", desc: "Cyrus&rsquo;s decree: let the people go up and rebuild the house of the LORD" },
                  { ref: "1 Corinthians 3:16&ndash;17", desc: "Do you not know that you are God&rsquo;s temple and that God&rsquo;s Spirit dwells in you?" },
                  { ref: "Ephesians 2:19&ndash;22", desc: "The whole church grows into a holy temple in the Lord, a dwelling place for God by the Spirit" },
                  { ref: "Revelation 21:3", desc: "Behold, the dwelling place of God is with man &mdash; the final fulfillment of the temple" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8 }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 180, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
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
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "A close reading of Haggai 1:1&ndash;15, examining the historical background, the Hebrew text, and the theological significance of each section." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggle(item.id + "-v")}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ background: GOLD + "22", color: GOLD, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
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
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Hebrew Word <em>ur</em>: The LORD Stirred Their Spirits</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The verb <em>ur</em> translated &ldquo;stirred up&rdquo; in Haggai 1:14 carries the sense of awakening from sleep or arousing from inactivity. It is used of the LORD stirring the spirit of Cyrus to issue his decree (2 Chronicles 36:22; Ezra 1:1), of God arousing a king from the north (Isaiah 41:2, 25), and of the divine warrior awakening for battle (Psalm 44:23; Isaiah 51:9). When the LORD &ldquo;stirs&rdquo; a human spirit in Haggai 1:14, he is awakening in Zerubbabel, Joshua, and the people a desire, energy, and resolve for the task of rebuilding that transcends what human motivation alone could produce. This is the inner work of the Spirit that corresponds to the outer work of the prophetic word. The word comes through Haggai; the stirring happens within the community. The result is that they &ldquo;came and worked on the house of the LORD of hosts.&rdquo; Obedience becomes action; action flows from divine awakening; and the awakening is God&rsquo;s gracious response to a community that has heard his word and feared before him." }} />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Haggai 1 speaks to every generation of God&rsquo;s people that has settled into comfortable inertia while God&rsquo;s priorities have gone unmet. Its call to examine our ways, to honor God&rsquo;s dwelling place, and to trust the promise of divine presence is as urgent and alive today as it was in 520 BC." }} />

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
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 16 }}>Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: "LORD of hosts, sovereign over every army of heaven and earth &mdash; we confess that we have been more diligent in building and furnishing our own paneled houses than in tending your dwelling place among us. We have been quick with the excuse that the time has not yet come, while finding time for everything else we value. You have sent us lean harvests and bags with holes, and we have blamed the economy and the seasons rather than examining our own ways.<br/><br/>Speak to us now as you spoke to Zerubbabel and Joshua and the remnant. Let us hear your word and fear before you. Let the two great truths of this chapter settle into us: that you are calling us to build, and that you are with us as we build. That you are the LORD of hosts &mdash; not merely a tribal deity of modest means, but the cosmic king who commands the resources of heaven and earth &mdash; and that you have declared your intent to be glorified in the building of your house among us.<br/><br/>Stir our spirits, Lord. Awaken in us an energy for your priorities that we do not naturally possess. Let us rise and go to the hills and bring wood and work on the house of the LORD of hosts &mdash; the living temple of your Spirit, the community of your people &mdash; with the confidence that you are with us and that the latter glory of this house will be greater than the former.<br/><br/>In the name of Jesus, in whom all the fullness of God was pleased to dwell, and through whose body the veil of the temple was torn and the way into the presence of God was opened forever. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
