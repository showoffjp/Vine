"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "The Mission",
  "Exploring Canaan",
  "The Good Report",
  "The Bad Report",
  "Caleb and Joshua",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Numbers 13",
    reference: "Numbers 13:1&ndash;33",
    paragraphs: [
      "Numbers 13 records one of the most consequential chapters in Israel&rsquo;s history &mdash; the moment when a nation that had been miraculously delivered from Egypt, sustained through the wilderness, and brought to the very edge of the Promised Land turned back in fear and unbelief. Twelve men were sent ahead to scout the land of Canaan: men of stature, one from each tribe, representing all of Israel&rsquo;s collective best. What they brought back would determine the fate of an entire generation.",
      "The chapter unfolds in three movements. First, God commissions Moses to send spies into Canaan, and Moses selects twelve leaders to undertake the forty-day mission. Second, the spies explore the land from south to north, gathering evidence of its abundance and its inhabitants. Third, the spies return and deliver their report &mdash; and here the chapter divides: ten men report the land is unconquerable, while two men, Caleb and Joshua, insist that it can be taken. The majority and minority reports set up the crisis of faith that consumes the following chapter.",
      "The story of the twelve spies is ultimately a story about the relationship between what we see and what we believe. All twelve men saw the same land, the same fortified cities, the same powerful inhabitants. But they interpreted what they saw through entirely different frameworks. The ten saw themselves as grasshoppers in the sight of giants and concluded that conquest was impossible. Caleb and Joshua saw the same giants but set them against the backdrop of the God who had already parted the Red Sea, defeated Pharaoh, and promised to give this land to his people. The difference was not information; it was faith.",
      "Numbers 13 has been a defining text for Christian reflection on courage, calling, and the temptation to let fear override trust in God. The minority report of Caleb &mdash; &ldquo;Let us go up at once and occupy it, for we are well able to overcome it&rdquo; (13:30) &mdash; has become a rallying cry for those who face impossible odds with confidence in the God who calls and equips. The chapter ends with the bad report winning the day among the people, but the story does not end there: Caleb and Joshua will outlive their entire generation to enter the land their contemporaries refused.",
    ],
  },
  {
    id: "The Mission",
    heading: "God Commands Moses to Send the Spies",
    reference: "Numbers 13:1&ndash;16",
    paragraphs: [
      "The command to send spies comes directly from the Lord: &ldquo;Send men to spy out the land of Canaan, which I am giving to the people of Israel. From each tribe of their fathers you shall send a man, every one a chief among them&rdquo; (13:2). It is important to note what God has already declared: the land is one he is &ldquo;giving&rdquo; to Israel. This is not an exploratory mission to determine whether the land is worth taking or whether conquest is feasible. The outcome has been promised. The mission is to gather intelligence about a land that is already Israel&rsquo;s by the covenant word of God.",
      "Moses selects twelve men &mdash; one from each tribe &mdash; and the text provides their names in careful order, preserving for posterity the identity of every man who participated in this pivotal mission. Among them are two who will distinguish themselves above all the rest: Caleb son of Jephunneh, from the tribe of Judah, and Hoshea son of Nun, from the tribe of Ephraim. Moses gives Hoshea a new name on this occasion: Joshua &mdash; a name that means &ldquo;the Lord saves,&rdquo; and which in its Greek form is the name Jesus. It is not accidental that the man who will eventually lead Israel into the Promised Land bears the name that means salvation.",
      "The selection of one chief from each tribe reflects the gravity and representational weight of the mission. These are not anonymous scouts; they are the recognized leaders of their communities, men of proven character and standing. Their report will carry the authority of the tribes they represent. When they speak, all Israel will hear itself speaking through them. The stakes of the mission are therefore not merely strategic but covenantal &mdash; Israel&rsquo;s response to the land God has promised will express whether the nation trusts its God.",
      "Moses supplements God&rsquo;s command with his own practical instructions about what the spies are to observe: the character of the land, whether it is fertile or barren, whether the people who live there are strong or weak, few or many, whether their cities are open camps or fortified strongholds, whether the soil is rich or poor, whether there is timber. He adds, &ldquo;And be courageous and bring some of the fruit of the land&rdquo; (13:20). The request for fruit will prove significant: the spies will return with evidence of the land&rsquo;s extraordinary abundance, carried on a pole between two men &mdash; evidence that God had told the truth when he called it a land flowing with milk and honey.",
    ],
  },
  {
    id: "Exploring Canaan",
    heading: "Forty Days in the Land of Canaan",
    reference: "Numbers 13:21&ndash;24",
    paragraphs: [
      "The twelve spies cover the full extent of Canaan on their forty-day reconnaissance, moving from the Wilderness of Zin in the south to Rehob near Lebo-hamath in the far north. The scope of the exploration is comprehensive &mdash; this is not a quick border crossing but a methodical survey of the entire promised territory. For forty days these men moved through the land that God had sworn to give Abraham, Isaac, and Jacob, seeing firsthand what had been promised for centuries.",
      "The text singles out one location for special attention: the Valley of Eshcol, near Hebron. There the spies cut a single cluster of grapes so large that it required two men to carry it on a pole between them. They also took pomegranates and figs. The Valley of Eshcol &mdash; the name means &ldquo;cluster&rdquo; in Hebrew &mdash; was named after this very episode, a geographical memorial to the extraordinary fertility of the land. The fruit is not incidental local color; it is physical evidence that God&rsquo;s description of Canaan as &ldquo;a land flowing with milk and honey&rdquo; was the simple truth.",
      "Hebron itself carries weight in the narrative. It is the city near which Abraham had settled and where the patriarchs are buried &mdash; the Cave of Machpelah. To stand in Hebron was to stand in the heartland of the covenant promises. The text notes that the Anakim, the giant warriors who will so unsettle the ten spies, dwell there. In later chapters, Caleb will specifically request Hebron as his inheritance, and he will drive out the Anakim from it &mdash; a detail that makes the later tradition about his courage even more remarkable. The very place that was most frightening to the ten spies became the home of the one who was not afraid.",
      "The forty-day duration of the mission is not merely a practical matter of time needed to cover the territory. In the biblical imagination, forty is the number of testing &mdash; forty days of flood, forty years in the wilderness, forty days of Jesus&rsquo; temptation. The forty-day reconnaissance is itself a kind of test: will these men see the land through the eyes of faith or fear? And the outcome of their testing will become, as Numbers 14 reveals, the sentence of their generation &mdash; forty years of wilderness wandering, one year for each day of the spies&rsquo; unfaithful report.",
    ],
  },
  {
    id: "The Good Report",
    heading: "The Abundance of the Land",
    reference: "Numbers 13:25&ndash;27",
    paragraphs: [
      "When the spies return after forty days, they come to Moses, Aaron, and the whole congregation of Israel at Kadesh in the Wilderness of Paran, and they present their physical evidence: &ldquo;They told him, &lsquo;We came to the land to which you sent us. It flows with milk and honey, and this is its fruit&rsquo;&rdquo; (13:27). On this point all twelve spies are in complete agreement: the land is everything God promised it would be. The extraordinary cluster of grapes, the pomegranates and figs, are displayed before the assembly as physical testimony to the land&rsquo;s bounty.",
      "The phrase &ldquo;flowing with milk and honey&rdquo; first appears in Exodus 3:8, in God&rsquo;s initial promise to Moses at the burning bush. It has been repeated throughout the Pentateuch as a shorthand for the blessing of Canaan. Milk speaks of productive livestock; honey speaks of wild abundance; together they paint a picture of a land whose natural resources generously sustain those who inhabit it. The land of Canaan was not a consolation prize; it was a place of genuine richness, and the spies&rsquo; unanimous confirmation of this is a moment of powerful affirmation: God had told the truth.",
      "The good report is also significant for what it reveals about God&rsquo;s purposes in sending the spies. He did not send them because he was uncertain whether the land was worth taking. He sent them so that Israel would have firsthand, eyewitness evidence of his faithfulness before the battles began. The spies were to return with proof that the promise was real, that the land was genuinely good, that the God who called them forward was not leading them into a barren wilderness but into abundance. The fruit carried on a pole was meant to be the encouragement of faith, not a prelude to fear.",
      "Tragically, even unanimous agreement on the goodness of the land is not enough to carry the day, because it is immediately followed by the ten spies&rsquo; &ldquo;but.&rdquo; &ldquo;However&rdquo; &mdash; or in many translations &ldquo;nevertheless&rdquo; or &ldquo;but&rdquo; &mdash; that single word pivots the entire report from confidence to capitulation. The land is wonderful; nevertheless the people who live there are strong, the cities are fortified, and the Anakim are there. The &ldquo;but&rdquo; of fear is one of the most dangerous words in the vocabulary of unbelief, and its appearance here signals that the positive evidence is about to be overridden by a failure of faith.",
    ],
  },
  {
    id: "The Bad Report",
    heading: "The Ten Spies' Bad Report",
    reference: "Numbers 13:28&ndash;33",
    paragraphs: [
      "&ldquo;However, the people who dwell in the land are strong, and the cities are fortified and very large. And besides, we saw the descendants of Anak there&rdquo; (13:28). With these words, ten of the twelve spies launch into the bad report that will cost their entire generation the Promised Land. The facts they report are not inaccurate &mdash; Canaan is indeed inhabited by powerful peoples in well-defended cities. But the interpretation they place on those facts reveals a faith entirely disconnected from the God who had already performed mighty deeds on Israel&rsquo;s behalf.",
      "The spies name the peoples they encountered: Amalekites in the Negeb, Hittites and Jebusites and Amorites in the hill country, Canaanites by the sea and along the Jordan. Each name would have carried a fearful weight for Israelites who knew their reputation. But no name carries more dread in the report than the Anakim &mdash; the giants, descendants of Anak, men of great physical stature before whom, the spies claim, Israel would be helpless. The Anakim had become the embodiment of the impossible in the spies&rsquo; imagination.",
      "Caleb attempts to interrupt the counsel of despair: &ldquo;Let us go up at once and occupy it, for we are well able to overcome it&rdquo; (13:30). This is the minority report in its first and most compressed form &mdash; six words of faith against a tide of fear. But the ten men drown it out: &ldquo;We are not able to go up against the people, for they are stronger than we are&rdquo; (13:31). The word &ldquo;we are not able&rdquo; directly contradicts Caleb&rsquo;s &ldquo;we are well able.&rdquo; The battle of the reports is a battle of two fundamentally different assessments of capability &mdash; one grounded in human calculation, one grounded in trust in God.",
      "The ten spies then spread what the text explicitly calls a &ldquo;bad report&rdquo; &mdash; the Hebrew word dibbah carries the connotation of slander or defamation. They say the land &ldquo;devours its inhabitants&rdquo; &mdash; an exaggerated claim that goes beyond what they actually saw and reflects a kind of panic that has distorted their perception. And then comes the most memorable line of the chapter: &ldquo;And we seemed to ourselves like grasshoppers, and so we seemed to them&rdquo; (13:33). The self-image of the ten spies is one of absolute smallness, insignificance, and powerlessness before the giants. They have forgotten who they are: a redeemed people, the chosen of God, those who had watched the sea divide before them.",
      "The grasshopper self-image is the spiritual diagnosis at the heart of the passage. The ten spies were not wrong to observe that the Anakim were large and powerful. They were wrong to evaluate themselves solely in human terms, without reference to the God who had called and equipped them. Faith does not require denying the size of the obstacle; it requires knowing the size of the God who stands behind the promise. When we forget who God is, we inevitably shrink in our own estimation &mdash; and what looked like sober realism is actually a failure of memory, a forgetting of the God who had made the impossible routine throughout Israel&rsquo;s history.",
    ],
  },
  {
    id: "Caleb and Joshua",
    heading: "Caleb and Joshua: The Minority Report",
    reference: "Numbers 13:30; 14:6&ndash;9",
    paragraphs: [
      "Against the tidal wave of fear unleashed by the ten spies, Caleb son of Jephunneh stands up to speak. His report is brief, direct, and grounded in confidence not in Israel&rsquo;s own strength but in the character and word of God: &ldquo;Let us go up at once and occupy it, for we are well able to overcome it&rdquo; (13:30). The word translated &ldquo;at once&rdquo; conveys urgency &mdash; there is no need for delay, no room for more deliberation. The promise has been given, the land has been seen, the time for action is now. Caleb has seen the same giants the others have seen and has reached exactly the opposite conclusion.",
      "In Numbers 14, when the congregation weeps all night and threatens to stone Moses and Aaron and appoint a leader to take them back to Egypt, Joshua son of Nun joins Caleb in his dissent. Together they tear their clothes &mdash; the ancient gesture of grief and horror at what they are witnessing &mdash; and address the whole assembly: &ldquo;The land, which we passed through to spy it out, is an exceedingly good land. If the Lord delights in us, he will bring us into this land and give it to us, a land that flows with milk and honey. Only do not rebel against the Lord. And do not fear the people of the land, for they are bread for us. Their protection is removed from them, and the Lord is with us; do not fear them&rdquo; (14:7&ndash;9).",
      "The theological content of Caleb and Joshua&rsquo;s minority report is precisely what the ten spies&rsquo; report lacked: a reference to God. The ten spoke entirely in human terms &mdash; our strength versus their strength, our size versus their size. Caleb and Joshua speak of what God will do. They do not deny the existence of the giants; they declare that the giants&rsquo; &ldquo;protection is removed from them&rdquo; &mdash; the divine canopy that might otherwise shield them has been withdrawn, because God has promised this land to Israel. The armies of Canaan are formidable by human reckoning; but they stand without God&rsquo;s protection against a people who have it.",
      "The phrase &ldquo;the Lord is with us&rdquo; is the entire argument. It is not that Israel is stronger than Canaan; it is that the God who is with Israel is infinitely stronger than any human army. This is the grammar of faith in the biblical tradition &mdash; not the denial of difficulty, but the insistence that difficulty must be evaluated in the light of who God is and what he has promised. Abraham believed God &ldquo;in hope&rdquo; (Romans 4:18). David approached Goliath in the name of the Lord of hosts. Caleb and Joshua look at Anak&rsquo;s descendants and see not impassable obstacles but bread &mdash; something to be consumed on the way to possessing the inheritance.",
      "Both Caleb and Joshua survive the wilderness years to enter Canaan and receive their inheritance. Caleb, specifically, is commended by God because he &ldquo;followed me fully&rdquo; (Numbers 14:24) &mdash; a phrase that appears repeatedly in the narrative about him, defining his character as wholehearted devotion. At eighty-five years old, Caleb will request the very territory where the Anakim live &mdash; Hebron &mdash; and will drive them out. The man who refused to be paralyzed by the giants at forty years old would still be fighting and winning at eighty-five, because the same God who was with him at Kadesh was with him in the hill country. His story is the long vindication of the minority report.",
    ],
  },
];

const videoItems = [
  { videoId: "Xk3mH9vTqB2", title: "Numbers 13 - The Twelve Spies and the Crisis of Faith" },
  { videoId: "pJL8nZwQY4o", title: "Caleb and Joshua - A Courageous Minority Report" },
  { videoId: "dVmF6sRkT9c", title: "Fear vs. Faith - Lessons from the Spies of Canaan" },
  { videoId: "WqB7cNmEuHs", title: "The Promised Land - Numbers 13 Sermon and Study" },
];

const data: SectionGuideData = {
  accent: "#E11D48",
  badge: `Old Testament Study`,
  title: `Numbers 13 Chapter Guide`,
  intro: `Faith versus fear at the border of Canaan &mdash; twelve spies explore the Promised Land, discover its extraordinary abundance, and return with two radically different reports. Ten see giants and declare conquest impossible; Caleb and Joshua see the same giants and declare, &ldquo;The Lord is with us; do not fear.&rdquo;`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Numbers 13 through these video teachings on the twelve spies, the exploration of Canaan, the cluster of grapes from Eshcol, and the contrast between Caleb&rsquo;s courageous faith and the fear of the ten.`,
  calloutTitle: `We Are Well Able`,
  calloutBody: `Numbers 13 shows us that the difference between faith and fear is not the absence of giants &mdash; both Caleb and the ten saw the same giants. The difference is whether we measure our challenges against our own strength or against the God who promises to go before us. Like Caleb, may we follow the Lord fully, silence the voice of fear with the promise of God, and declare with confidence: the Lord is with us, and we are well able.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
