"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Be Strong and Courageous",
  "Crossing the Jordan",
  "The Fall of Jericho",
  "The Question of Conquest",
  "Choose Whom You Will Serve",
  "Videos",
]

const sections = [
  {
    id: "Be Strong and Courageous",
    heading: "Be Strong and Courageous",
    reference: "Joshua 1&ndash;2",
    paragraphs: [
      "The Book of Joshua opens in the shadow of a great loss. &ldquo;Moses my servant is dead,&rdquo; the LORD declares, and with those words an era ends. The towering prophet who led Israel out of Egypt, through the sea, and across forty years of wilderness has died on Mount Nebo. Now the weight of leadership falls upon Joshua, his faithful aide, who must carry the people across the Jordan into the land of promise. The book is the story of a successor stepping into an impossible calling.",
      "Into Joshua&rsquo;s fear God speaks a commission that has steadied believers ever since: &ldquo;Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go&rdquo; (1:9). Three times in the opening chapter the call to courage is repeated, and each time it rests not on Joshua&rsquo;s own strength but on the presence of God. The command to be brave is grounded in a promise: &ldquo;I will be with you. I will not leave you or forsake you.&rdquo;",
      "Courage in Joshua is never mere bravado; it is faith that acts upon the word and presence of God. Because the LORD goes with him, Joshua can face the fortified cities and giant foes of Canaan without dismay. The same assurance undergirds the believer&rsquo;s courage today, for the promise &ldquo;I will never leave you nor forsake you&rdquo; is taken up in the New Testament and applied to all who follow Christ. Boldness is born of God&rsquo;s nearness, not our adequacy.",
      "Alongside the call to courage comes a call to the word: &ldquo;This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it&rdquo; (1:8). Joshua&rsquo;s success will rest not on military genius but on saturating his life in God&rsquo;s word. The leader who would prosper must be a person shaped by Scripture, meditating on it continually until it governs both heart and hand.",
      "The narrative then turns to an unexpected figure: Rahab, a Canaanite prostitute in Jericho. When Joshua sends two spies into the city, she hides them on her roof and turns away the king&rsquo;s men, declaring her conviction that &ldquo;the LORD your God, he is God in the heavens above and on the earth beneath&rdquo; (2:11). A pagan woman, by faith, confesses the God of Israel while the great city around her trembles in unbelief.",
      "Rahab&rsquo;s request is the request of faith seeking refuge: she pleads for the lives of her household and binds a scarlet cord in her window as the sign of the promise. In a book full of warriors, it is this outsider who models true faith &mdash; risking everything on the conviction that Israel&rsquo;s God will surely give them the land. Her courage mirrors and even surpasses the courage God commands of Joshua.",
      "So the opening chapters set the tone for the whole book. Conquest will come, but the deeper story is one of faith and faithfulness &mdash; God&rsquo;s faithfulness to his promises and the courage of those who trust him, whether a newly appointed leader or a Canaanite woman with a scarlet cord. &ldquo;Be strong and courageous,&rdquo; the LORD says, and the rest of Joshua shows what that courage looks like when grounded in his abiding presence.",
    ],
  },
  {
    id: "Crossing the Jordan",
    heading: "Crossing the Jordan",
    reference: "Joshua 3&ndash;4",
    paragraphs: [
      "Before Israel can take a single city, they must first cross the Jordan &mdash; and they arrive at its banks at the worst possible moment, &ldquo;in the time of harvest&rdquo; when the river overflows its banks (3:15). There is no bridge and no ford. The barrier between the people and the promise is a flooded river, and only God can bring them over. The crossing becomes the threshold miracle that opens the conquest.",
      "At the center of the crossing stands the ark of the covenant, the throne of God&rsquo;s presence, carried by the priests at the head of the people. The instruction is striking: the priests are to step into the rushing water first, before anything happens. Only &ldquo;as soon as those bearing the ark&hellip; dipped in the brink of the water&rdquo; (3:15) does the river respond. Faith must take the first step into the flood; the miracle follows obedience, it does not precede it.",
      "Then the waters part. The Jordan is cut off far upstream, the flow piling up in a heap, and the riverbed lies dry while all Israel passes over (3:16&ndash;17). The echo of the Red Sea is unmistakable and deliberate. As God once opened the sea to bring Israel out of Egypt under Moses, so now he opens the river to bring them into the land under Joshua. The God of the exodus is the God of the conquest; the deliverance that began at the sea is completed at the river.",
      "To mark the moment forever, God commands that twelve stones be taken from the middle of the Jordan, one for each tribe, and set up as a memorial (chapter 4). These stones are to stand as a lasting witness, &ldquo;that all the peoples of the earth may know that the hand of the LORD is mighty, and that you may fear the LORD your God forever&rdquo; (4:24). The pile of stones turns the riverbank into a place of remembrance.",
      "The purpose of the memorial is explicitly generational. Moses had taught Israel to pass faith to their children, and here that teaching takes stone form: &ldquo;When your children ask in time to come, &lsquo;What do these stones mean to you?&rsquo; then you shall tell them&rdquo; the story of how the LORD dried up the Jordan (4:6&ndash;7). The stones exist to provoke a question, and the question exists to occasion testimony. Faith is kept alive when one generation tells the next what God has done.",
      "There is poignancy in who crosses over. This is the new generation &mdash; the children of those who died in the wilderness because of unbelief. Their parents saw the Red Sea but never the Jordan; they refused to enter, and so they perished outside the land. Now their children step onto the promised soil, a living testimony that though one generation may fail, God&rsquo;s purposes do not. The promise delayed is not the promise denied.",
      "The crossing of the Jordan thus stands as a hinge in Israel&rsquo;s story: the wilderness is behind, the land is ahead, and God has proven once more that no barrier can stop his promise. For the Christian, the dry path through the waters has long been read as a picture of passing from death to life, from wandering to rest &mdash; with the ark, the presence of God, going first to make a way where there was none.",
    ],
  },
  {
    id: "The Fall of Jericho",
    heading: "The Fall of Jericho",
    reference: "Joshua 6",
    paragraphs: [
      "Jericho was the first and most formidable obstacle in the land &mdash; an ancient fortified city with high walls, &ldquo;shut up inside and outside&rdquo; against the people of Israel. By every military reckoning, a nation of former slaves and wilderness wanderers had no means to breach such a stronghold. The fall of Jericho would therefore be a sign at the very outset of the conquest that the land is given by God, not seized by human strength.",
      "The battle plan God gives is unlike any in the annals of war. Israel is not to build siege ramps or batter the gates, but simply to march. Once a day for six days the army is to circle the city in silence, the priests carrying the ark and blowing trumpets of ram&rsquo;s horns. On the seventh day they are to march around it seven times, and then, at a long blast of the trumpet, the whole people are to shout (6:3&ndash;5). It is a plan that makes sense only as obedience and faith.",
      "Imagine the strangeness of it &mdash; a silent army circling a hostile city day after day, the only sound the blast of horns, while the watchmen on the walls look down in bewilderment. The discipline required is immense; the temptation to doubt the plan must have been constant. Yet Israel obeys to the letter, and the long days of silent marching become an extended act of trust in a God whose ways are not our ways.",
      "Then comes the seventh day and the seventh circuit. The trumpets sound, the people raise a great shout, &ldquo;and the wall fell down flat, so that the people went up into the city&rdquo; (6:20). No ram touched the stone; the victory is entirely the LORD&rsquo;s. The writer of Hebrews captures the meaning exactly: &ldquo;By faith the walls of Jericho fell down, after they had been encircled for seven days.&rdquo; The city falls not to Israel&rsquo;s might but to Israel&rsquo;s faith expressed in obedience.",
      "Amid the judgment, mercy shines. Rahab and her household are spared, for she had hidden the spies and bound the scarlet cord in her window as agreed. The spies bring her out safely, &ldquo;and she has lived in Israel to this day&rdquo; (6:25). The Canaanite woman who confessed Israel&rsquo;s God is grafted into the people of God &mdash; a vivid sign that faith, not bloodline, marks the true Israel, and that grace reaches even into a condemned city.",
      "Rahab&rsquo;s story reaches further than she could have known. She appears in the genealogy of Jesus in the Gospel of Matthew, named among the ancestors of the Messiah. A foreign woman of Jericho, rescued by faith, becomes part of the line that leads to Christ. The fall of the city that opens the conquest also opens a window onto the gospel: that those once outside the covenant may be brought in and find a place in the family of God.",
      "Jericho thus teaches a lesson that runs through all of Joshua and into the Christian life: the victories that matter come by faith and obedience, not by human power. God&rsquo;s people are called to do what often looks foolish to the world &mdash; to march, to trust, to obey &mdash; and to leave the toppling of walls to him. Where faith obeys, the LORD himself brings down the strongholds that stand against his promise.",
    ],
  },
  {
    id: "The Question of Conquest",
    heading: "The Question of Conquest",
    reference: "Joshua 6&ndash;12",
    paragraphs: [
      "No honest reader of Joshua can avoid its hardest theme: the commands to devote the Canaanite cities to destruction. The Hebrew term is herem &mdash; a placing of people and things under the ban, set apart for total destruction. These passages trouble many believers deeply, and they deserve to be faced honestly rather than explained away. The question is real: how do we reconcile the God of the conquest with the God who is love?",
      "A first consideration is that the conquest is presented in Scripture not as ethnic cleansing but as divine judgment upon entrenched wickedness. Generations earlier, God had told Abraham that his descendants would not yet receive the land because &ldquo;the iniquity of the Amorites is not yet complete&rdquo; (Genesis 15:16). God waited some four hundred years, giving the Canaanite nations time. The conquest comes only when their wickedness &mdash; including child sacrifice and grotesque idolatry &mdash; has reached its full measure. It is judgment long delayed, not impulse.",
      "A second consideration is that the conquest is a unique, unrepeatable moment in redemptive history, not a pattern for the people of God in any later age. Israel is acting as the appointed instrument of God&rsquo;s judgment at a particular hinge of history, much as the flood or the destruction of Sodom were singular acts of divine justice. Crucially, the New Testament never authorizes God&rsquo;s people to take up the sword against the nations; the church&rsquo;s weapons are spiritual, and its mission is to proclaim grace, not to wage war.",
      "Many scholars also note the conventions of ancient Near Eastern war language, in which sweeping totals (&ldquo;all,&rdquo; &ldquo;utterly destroyed,&rdquo; &ldquo;left none remaining&rdquo;) functioned as the standard rhetoric of decisive victory rather than literal census. The book itself shows Canaanites still living in the land afterward, suggesting the language describes a real but rhetorically heightened defeat of cities and military strongholds. This does not remove every difficulty, but it cautions against reading the accounts more woodenly than the writers intended.",
      "There is also the typological reading the church has long offered: the conquest of Canaan foreshadows a deeper warfare. The land is a picture of God&rsquo;s rest, and the driving out of its corruptions a picture of the holiness God requires and the final judgment he will bring. Sin must be utterly dealt with, not coddled. Read this way, Joshua sobers us about the seriousness of evil and the certainty that God will one day set all things right, purging his creation of every defilement.",
      "Holding these together, faithful readers refuse two errors. They refuse to soften the seriousness of sin and judgment, as if God were indifferent to the evil that destroys human life. And they refuse to make Joshua a template for violence today, as though God now calls his people to conquer in his name. The cross stands between us and any such reading: there the judgment we deserved fell on Christ, and from there his people go out armed only with the gospel of peace.",
      "Ultimately the conquest drives us toward the greater story. The real and final enemy is not the Canaanite but sin, death, and the powers of darkness &mdash; and the true Joshua (the Hebrew form of the name Jesus) wages the decisive war not by shedding the blood of others but by shedding his own. He wins the land that cannot be lost and brings his people into a rest that the earthly Canaan only foreshadowed. The hard questions of Joshua find their resolution not in evasion but in Christ.",
    ],
  },
  {
    id: "Choose Whom You Will Serve",
    heading: "Choose Whom You Will Serve",
    reference: "Joshua 23&ndash;24",
    paragraphs: [
      "After the land is conquered and divided among the tribes, the book draws to its close with Joshua, now old and full of days, gathering all Israel one last time. As Moses had given farewell sermons on the plains of Moab, so Joshua now gives his farewell at Shechem &mdash; a place heavy with covenant history, where Abraham first built an altar and where the tribes had earlier renewed the covenant. The aged leader prepares to press upon the people the great decision of their lives.",
      "Joshua begins not with command but with testimony, rehearsing the long story of God&rsquo;s faithfulness (chapter 24). He recounts how the LORD took Abraham from beyond the river, multiplied his descendants, delivered them from Egypt, sustained them in the wilderness, and gave them a land for which they did not labor, cities they did not build, and vineyards they did not plant. The summons to faithfulness rests, as always, on the remembrance of grace already received.",
      "Then comes the ringing challenge that has echoed down the centuries: &ldquo;Choose this day whom you will serve, whether the gods your fathers served in the region beyond the River, or the gods of the Amorites in whose land you dwell. But as for me and my house, we will serve the LORD&rdquo; (24:15). Joshua will not let the people drift in vague allegiance. Service to God must be chosen deliberately, and he stakes his own household publicly on that choice.",
      "Joshua even tests the seriousness of the people&rsquo;s response. When they eagerly declare that they too will serve the LORD, he presses back: &ldquo;You are not able to serve the LORD, for he is a holy God.&rdquo; He will not accept a glib commitment. True covenant loyalty must reckon with the holiness of God and the cost of devotion. Only when the people insist again, &ldquo;No, but we will serve the LORD,&rdquo; does he make a covenant with them and set up a stone as a witness.",
      "Behind Joshua&rsquo;s challenge stands the book&rsquo;s great theme: the unfailing faithfulness of God to his promises. The narrator declares it plainly: &ldquo;Not one word of all the good promises that the LORD had made to the house of Israel had failed; all came to pass&rdquo; (21:45). Every pledge given to the patriarchs &mdash; land, descendants, rest &mdash; God has kept. The conquest is, at bottom, the story of a promise-keeping God doing exactly what he said he would do.",
      "This is the foundation on which Joshua bids the people choose. Because God has been so faithful, undivided service to him is the only fitting response. The choice is not a leap into uncertainty but a response to a God whose track record is flawless. To serve other gods would be to forget all that the LORD has done; to serve him is simply to live in keeping with the faithfulness one has already seen and tasted.",
      "The call still stands. Joshua&rsquo;s &ldquo;choose this day&rdquo; refuses to let faith remain a matter of inheritance or habit; it must be personally owned, deliberately chosen, and lived out in the home. And it rests on the same ground for us as for Israel: a God who keeps every promise, who has now given his Son and not one of whose good words will fail. &ldquo;As for me and my house, we will serve the LORD&rdquo; remains the believer&rsquo;s glad and clear-eyed confession.",
    ],
  },
];

const videoItems = [
  { videoId: "JqOqJlFF_eU", title: "BibleProject - Book of Joshua Overview" },
  { videoId: "kJ5h9N9JmDk", title: "The Fall of Jericho - Joshua 6" },
  { videoId: "lQXkDxjQVZM", title: "As for Me and My House - Joshua 24" },
];

const data: SectionGuideData = {
  accent: "#3a7d56",
  badge: `Old Testament Study`,
  title: `The Book of Joshua`,
  intro: `Israel enters the Promised Land &mdash; the call to be strong and courageous, the crossing of the Jordan, the fall of Jericho, the hard questions of the conquest, and Joshua&rsquo;s ringing challenge to choose whom you will serve.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Joshua through visual teaching on the conquest of the Promised Land, the fall of Jericho, and Joshua&rsquo;s farewell challenge to serve the LORD.`,
  calloutTitle: `As for Me and My House`,
  calloutBody: `Joshua testifies that not one of God&rsquo;s good promises ever failed &mdash; all came to pass. On that unfailing faithfulness rests his timeless challenge: be strong and courageous, remember what the LORD has done, and choose this day whom you will serve. &ldquo;As for me and my house, we will serve the LORD.&rdquo;`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
