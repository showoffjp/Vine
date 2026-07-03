"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "The Prophet and the Marriage",
  "Gomer and Unfaithful Israel",
  "The Lawsuit Against Israel",
  "Judgment and Discipline",
  "Relentless Love",
  "Videos",
]

const sections = [
  {
    id: "The Prophet and the Marriage",
    heading: "The Prophet and the Marriage",
    reference: "Hosea 1&ndash;3",
    paragraphs: [
      "Hosea is among the most emotionally raw books in all of Scripture, for in it God does not merely speak about his love &mdash; he commands his prophet to live it out in the most costly way imaginable. Hosea prophesied in the northern kingdom of Israel during its final, prosperous, and deeply corrupt decades before the Assyrian conquest. Outwardly the nation flourished; inwardly it had abandoned the God who had loved it.",
      "The book opens with a command so startling that it has troubled readers ever since: &ldquo;Go, take to yourself a wife of whoredom and have children of whoredom, for the land commits great whoredom by forsaking the LORD&rdquo; (1:2). Hosea is told to marry Gomer, a woman who would prove unfaithful, so that his own marriage might become a living parable of God&rsquo;s relationship with Israel. The prophet&rsquo;s broken home would preach a sermon no words alone could.",
      "Gomer bore children, and even their names became prophecy. The first, a son, was called Jezreel, after a valley of bloodshed, signaling coming judgment on the royal house. The second, a daughter, was named Lo-ruhamah, meaning &ldquo;No Mercy,&rdquo; for God said he would no longer have mercy on the house of Israel. The third, a son, was named Lo-ammi, meaning &ldquo;Not My People,&rdquo; the most devastating name of all &mdash; a reversal of the ancient covenant promise, &ldquo;I will be your God and you will be my people.&rdquo;",
      "Yet even in these names of judgment, hope is woven through. The same chapter that pronounces &ldquo;Not My People&rdquo; promises a coming day when &ldquo;in the place where it was said to them, &lsquo;You are not my people,&rsquo; it shall be said to them, &lsquo;Children of the living God&rsquo;&rdquo; (1:10). The judgment is real, but it is not God&rsquo;s final word. From the very first chapter the book holds together severity and mercy, the wound and the healing.",
      "The most extraordinary moment comes in chapter 3, when Gomer, having gone astray, is found again in a state of slavery or shame. God commands Hosea: &ldquo;Go again, love a woman who is loved by another man and is an adulteress, even as the LORD loves the children of Israel&rdquo; (3:1). Hosea must not merely tolerate his wayward wife but actively pursue her &mdash; and he buys her back, paying a price to redeem the very one who had betrayed him.",
      "Here the parable reaches its heart. Hosea&rsquo;s purchase of Gomer pictures the redeeming love of God, who will buy back a people who have sold themselves to other lovers. The prophet&rsquo;s marriage is not an embarrassing footnote but the central revelation of the book: that the God of Israel is a wounded, faithful husband who refuses to let his unfaithful bride go. Everything that follows is commentary on this enacted love.",
    ],
  },
  {
    id: "Gomer and Unfaithful Israel",
    heading: "Gomer and Unfaithful Israel",
    reference: "Hosea 2; 4",
    paragraphs: [
      "The marriage of Hosea and Gomer is a window into a deeper marriage &mdash; the covenant between God and Israel &mdash; and the book unfolds the parallel relentlessly. Israel&rsquo;s sin is portrayed not chiefly as the breaking of rules but as the breaking of a heart. It is spiritual adultery: a bride who, lavished with love and provision, has run after other lovers and forgotten the One who wooed her out of Egypt.",
      "Those &ldquo;other lovers&rdquo; were the fertility gods of Canaan, the Baals, whom Israel credited for her grain, wine, and oil. &ldquo;She did not know,&rdquo; God laments, &ldquo;that it was I who gave her the grain, the wine, and the oil&rdquo; (2:8). The tragedy of idolatry is its blindness: Israel took the gifts of the true God and offered thanks to idols, like a wife crediting a stranger for her husband&rsquo;s provision. Her unfaithfulness was also ingratitude of the deepest kind.",
      "Hosea names the root of the nation&rsquo;s ruin with piercing clarity: &ldquo;My people are destroyed for lack of knowledge&rdquo; (4:6). This was not mere ignorance of facts but the loss of intimate, covenant knowledge of God &mdash; a people who no longer knew the One to whom they belonged. From this severed relationship flowed every other corruption: &ldquo;swearing, lying, murder, stealing, and committing adultery&rdquo; broke out, and bloodshed followed bloodshed (4:2).",
      "The unfaithfulness was tragically self-destructive. &ldquo;They sow the wind, and they shall reap the whirlwind&rdquo; (8:7) &mdash; one of Hosea&rsquo;s unforgettable images for the harvest of folly. Israel chained herself in foreign alliances, trusting in Assyria and Egypt rather than in her God, and bowed before calf-idols of her own making. Like a faithless spouse, she scattered her affections everywhere except where they were owed.",
      "Yet even amid the indictment, God&rsquo;s purpose in chapter 2 is not finally to destroy but to win her back. He will &ldquo;hedge up her way with thorns&rdquo; and strip away the false abundance she credited to her idols, until, frustrated in all her pursuits, she says, &ldquo;I will go and return to my first husband, for it was better for me then than now&rdquo; (2:7). The discipline is the strange severity of a love that will not share its beloved with rivals.",
      "And so the chapter turns, astonishingly, toward courtship: &ldquo;I will allure her, and bring her into the wilderness, and speak tenderly to her&rdquo; (2:14). God promises to betroth Israel to himself again &mdash; &ldquo;in righteousness and in justice, in steadfast love and in mercy&hellip; in faithfulness&rdquo; (2:19&ndash;20). The names of judgment will be reversed: &ldquo;No Mercy&rdquo; will receive mercy, and to &ldquo;Not My People&rdquo; he will say, &ldquo;You are my people,&rdquo; and they will answer, &ldquo;You are my God.&rdquo;",
    ],
  },
  {
    id: "The Lawsuit Against Israel",
    heading: "The Lawsuit Against Israel",
    reference: "Hosea 4&ndash;7",
    paragraphs: [
      "Much of Hosea takes the form of a covenant lawsuit &mdash; a legal controversy in which God, as the wronged party, brings formal charges against his people. &ldquo;Hear the word of the LORD, O children of Israel, for the LORD has a controversy with the inhabitants of the land&rdquo; (4:1). The marriage imagery and the courtroom imagery blend together: the betrayed husband is also the righteous Judge who summons the offender to answer.",
      "The indictment is sweeping and specific. There is &ldquo;no faithfulness or steadfast love, and no knowledge of God in the land&rdquo; (4:1). The very foundations of covenant life &mdash; truth, loyalty, and the knowledge of God &mdash; have collapsed, and in their absence society itself has unraveled into deceit, violence, and bloodshed. Where God is not known, the bonds that hold a people together rot from within.",
      "God&rsquo;s charges fall with particular weight on the leaders, the priests and prophets who should have guarded the nation&rsquo;s soul. &ldquo;Because you have rejected knowledge, I reject you from being a priest to me&rdquo; (4:6). The shepherds had fed themselves on the people&rsquo;s sin rather than turning them back to God; the corruption ran from the top down, and those entrusted with the truth had betrayed their trust most grievously of all.",
      "Hosea exposes the shallowness of Israel&rsquo;s repentance as well. The people make a show of returning &mdash; &ldquo;Come, let us return to the LORD&rdquo; (6:1) &mdash; but their devotion evaporates like the morning mist. &ldquo;Your love is like a morning cloud, like the dew that goes early away&rdquo; (6:4), God says of them. Their religion was fervent but fickle, a burst of feeling without lasting change of heart.",
      "Against this hollow ritual God speaks one of the book&rsquo;s most quoted lines: &ldquo;For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings&rdquo; (6:6). The whole controversy turns on this. Israel had multiplied offerings while withholding the one thing God wanted &mdash; covenant faithfulness, mercy, and a heart that truly knew him. Outward worship could never substitute for inward loyalty.",
      "The lawsuit lays bare a people sick at the core. Israel is likened to a &ldquo;cake not turned&rdquo; &mdash; half-baked and useless &mdash; and to a &ldquo;silly dove, without sense&rdquo; (7:8, 11), fluttering to Egypt and Assyria for help while ignoring her God. The charges are not arbitrary; they are the grieved testimony of a God who has been spurned, calling a people to face the truth of what they have become before it is too late.",
    ],
  },
  {
    id: "Judgment and Discipline",
    heading: "Judgment and Discipline",
    reference: "Hosea 8&ndash;10; 13",
    paragraphs: [
      "Because Israel would not turn, judgment must come, and Hosea does not soften it. The covenant lawsuit reaches its verdict: the nation will reap what it has sown. The looming instrument of that judgment was Assyria, the great empire to the east, whose armies would sweep away the northern kingdom and carry its people into exile. The prophet sees it coming like a storm on the horizon.",
      "Hosea&rsquo;s images of judgment are vivid and unsparing. &ldquo;They sow the wind, and they shall reap the whirlwind&rdquo; (8:7); their calf-idol of Samaria will be shattered; their festivals and new moons will cease. Having forgotten their Maker and built palaces and fortified cities while trusting in their own strength, they will see fire sent upon those very strongholds (8:14). The harvest of unfaithfulness is desolation.",
      "Yet even God&rsquo;s judgment is shot through with anguish, for this is no detached sentence but the grief of a wounded love. Nowhere is this clearer than in chapter 11, where God recalls Israel&rsquo;s childhood: &ldquo;When Israel was a child, I loved him, and out of Egypt I called my son&rdquo; (11:1). He remembers teaching Ephraim to walk, taking them up in his arms, leading them &ldquo;with cords of kindness, with the bands of love&rdquo; (11:4).",
      "Then comes one of the most moving passages in all the prophets, as God&rsquo;s heart visibly recoils from the destruction his justice demands: &ldquo;How can I give you up, O Ephraim? How can I hand you over, O Israel?&hellip; My heart recoils within me; my compassion grows warm and tender&rdquo; (11:8). Here we glimpse the inner life of God &mdash; justice and mercy in holy tension &mdash; and mercy refusing to let go.",
      "The judgment in Hosea, then, is best understood as discipline rather than abandonment. Like a parent who must let a wayward child face the consequences of folly, and yet whose love never wavers, God allows Israel to fall into the exile her sins have earned &mdash; but not to be utterly destroyed. The aim of the rod is not annihilation but restoration; the exile is meant to bring a stubborn people, at last, back home.",
      "Chapter 13 sounds the severest warnings, picturing God as a lion, a leopard, and a bear robbed of her cubs, and lamenting that Israel&rsquo;s prosperity led only to pride and forgetting. Yet even here defiant hope breaks through: &ldquo;Shall I ransom them from the power of Sheol? Shall I redeem them from Death?&rdquo; (13:14). The God who disciplines is the same God who, in the end, will redeem &mdash; words the apostle Paul would later take up as a trumpet-call of resurrection victory.",
    ],
  },
  {
    id: "Relentless Love",
    heading: "Relentless Love",
    reference: "Hosea 14",
    paragraphs: [
      "For all its sorrow and severity, Hosea ends not in judgment but in grace, and this is the note that lingers. The final chapter is a tender call to come home: &ldquo;Return, O Israel, to the LORD your God, for you have stumbled because of your iniquity&rdquo; (14:1). The God who has every right to cast off his faithless bride instead pleads with her to return, even putting the words of repentance into her mouth.",
      "He invites them to bring not sacrifices but honest confession &mdash; &ldquo;Take with you words and return to the LORD&rdquo; (14:2) &mdash; and to renounce the false saviors they had trusted: Assyria will not save them, war-horses will not deliver them, and they will no longer call the work of their hands their gods. Repentance, in Hosea, is finally the abandonment of every rival lover and a return to the one faithful Husband.",
      "God&rsquo;s response overflows with healing tenderness: &ldquo;I will heal their apostasy; I will love them freely, for my anger has turned from them&rdquo; (14:4). The love is &ldquo;free&rdquo; &mdash; unearned, ungrudging, springing from God&rsquo;s own heart rather than from anything lovable in Israel. The same nation indicted, judged, and disciplined is now promised love poured out without measure or condition.",
      "The closing imagery is luxuriant and full of life. God promises to be &ldquo;like the dew to Israel,&rdquo; so that his people will &ldquo;blossom like the lily&rdquo; and take deep root, spreading out their shoots in beauty and fragrance like a flourishing garden (14:5&ndash;7). The wilderness of judgment gives way to a flowering of new life; the redeemed bride will grow lovely again under the steadfast care of her returning Lord.",
      "This is the great theme that binds the whole book together: a love that simply will not let its people go. Through betrayal, idolatry, lawsuit, and exile, God&rsquo;s commitment to his covenant people never finally fails. Hosea&rsquo;s own costly love for Gomer was only a faint shadow of this divine, pursuing, redeeming love &mdash; the love that buys back the unworthy at great price.",
      "Christian readers have long seen in Hosea a foreshadowing of the gospel itself. The God who redeemed his adulterous bride at cost would one day, in Christ, redeem an unfaithful humanity by his own blood, making a people who were &ldquo;not my people&rdquo; into &ldquo;sons of the living God&rdquo; &mdash; a promise the New Testament applies directly to the church. Hosea&rsquo;s relentless love is, in the end, the love of the cross, where the faithful Bridegroom gave himself to win back his bride forever.",
    ],
  },
];

const videoItems = [
  { videoId: "kE6SZ1ogOVU", title: "BibleProject - Book of Hosea Overview" },
  { videoId: "rD2N8dVTfg8", title: "Hosea and Gomer - A Living Parable of God-s Love" },
  { videoId: "iXg7ndZ9go0", title: "Steadfast Love Not Sacrifice - The Message of Hosea" },
  { videoId: "_o2VRfX2EXk", title: "Hosea - God-s Relentless, Redeeming Love Explained" },
];

const data: SectionGuideData = {
  accent: "#3a7d56",
  badge: `Old Testament Study`,
  title: `The Book of Hosea`,
  intro: `A prophet&rsquo;s broken marriage becomes a living parable of God&rsquo;s love &mdash; Hosea&rsquo;s command to marry Gomer, Israel&rsquo;s spiritual adultery, the covenant lawsuit against a faithless people, the discipline of judgment, and the relentless, redeeming love that will not let God&rsquo;s people go.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Hosea through visual teaching on the structure of the book, the living parable of Hosea and Gomer, and the relentless, redeeming love of God for his unfaithful people.`,
  calloutTitle: `Love That Will Not Let Go`,
  calloutBody: `Hosea remains the great parable of grace &mdash; a faithful God pursuing a faithless people, buying them back at cost, and refusing to surrender them to the consequences they deserved. Its message still calls every wandering heart home: return to the LORD, for he heals our waywardness and loves us freely.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
