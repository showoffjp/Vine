"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Rehoboam's Folly",
  "The Kingdom Divided",
  "Jeroboam's Golden Calves",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of 1 Kings 12",
    reference: "1 Kings 12:1&ndash;33",
    paragraphs: [
      "First Kings chapter 12 records one of the most consequential and tragic events in the history of God&rsquo;s people: the division of the kingdom that Solomon had ruled in such splendor. With the death of Solomon, the united monarchy that had reached its height under David and his son fractures along ancient fault lines, and the twelve tribes are torn into two rival kingdoms that will never again be joined. What had been one nation under one anointed king becomes the divided realms of Israel in the north and Judah in the south, and the story of decline and judgment that follows runs through the rest of the books of Kings.",
      "The chapter opens with Rehoboam, Solomon&rsquo;s son, going to Shechem to be made king (vv.1&ndash;5). The people, led by Jeroboam, who has returned from exile in Egypt, appeal to the new king to lighten the heavy yoke of forced labor that his father had laid upon them. They promise that if he will ease their burden, they will gladly serve him. Rehoboam asks for three days to consider his answer, and the fate of the kingdom hangs upon his reply.",
      "In the central drama, Rehoboam rejects the wise counsel of the elders who had served his father and instead follows the harsh advice of the young men who had grown up with him (vv.6&ndash;15). He answers the people with threats of even greater burdens, boasting that he will discipline them with scorpions where his father had used whips. The narrator marks this folly as a turn of affairs brought about by the Lord, to fulfill his word of judgment spoken through the prophet Ahijah.",
      "The northern tribes then revolt, crying, &ldquo;To your tents, O Israel!&rdquo; and they make Jeroboam their king, leaving only Judah loyal to the house of David (vv.16&ndash;24). When Rehoboam sends his taskmaster Adoram to them, they stone him to death, and the king flees to Jerusalem. He gathers an army to fight the rebels, but the word of God through Shemaiah forbids the war, declaring that this division is from the Lord, and the people obey and return home.",
      "The chapter closes with Jeroboam&rsquo;s fateful religious innovation (vv.25&ndash;33). Fearing that if the people go up to worship in the temple at Jerusalem their hearts will turn back to Rehoboam, he sets up two golden calves, one at Bethel and one at Dan, and institutes a counterfeit system of worship with its own priests, its own high places, and its own feast. This politically motivated false worship becomes the defining sin of the northern kingdom for generations to come.",
      "Read as a whole, 1 Kings 12 is a sobering study in the consequences of pride, folly, and pragmatism. It shows how the arrogance of a young king and the political calculation of a usurper combined to tear apart the people of God, and how even these human failures served, in the mysterious providence of God, to accomplish his word of judgment. The chapter stands as a perpetual warning that wisdom is found in humility, that worship must not be bent to serve power, and that the sins of leaders may bring lasting ruin upon a whole people.",
    ],
  },
  {
    id: "Rehoboam's Folly",
    heading: "Rehoboam Rejects Wise Counsel",
    reference: "1 Kings 12:1&ndash;15",
    paragraphs: [
      "&ldquo;Rehoboam went to Shechem, for all Israel had come to Shechem to make him king&rdquo; (12:1). The new monarch travels to Shechem, a place heavy with covenant memory, for there Joshua had once gathered the tribes to renew their commitment to the Lord. All Israel assembles to make Rehoboam king, and the occasion that ought to have been a moment of unity becomes instead the stage upon which the kingdom will be torn apart.",
      "Jeroboam, who had fled to Egypt from Solomon, is recalled, and the whole assembly comes to Rehoboam with their appeal: &ldquo;Your father made our yoke heavy. Now therefore lighten the hard service of your father and his heavy yoke on us, and we will serve you&rdquo; (12:4). The people do not refuse to serve; they ask only for relief from the crushing burden of forced labor that Solomon&rsquo;s grand projects had laid upon them, and they pledge their loyalty in return.",
      "&ldquo;He said to them, &lsquo;Go away for three days, then come again to me.&rsquo; So the people went away&rdquo; (12:5). Rehoboam takes time to deliberate, and seeks counsel from two very different quarters. First he consults the old men who had stood before Solomon his father while he was yet alive, asking how he should answer this people. Their wisdom had been seasoned by long years of service in the courts of the wisest of kings.",
      "The old men counsel him: &ldquo;If you will be a servant to this people today and serve them, and speak good words to them when you answer them, then they will be your servants forever&rdquo; (12:7). Their advice is the very wisdom of true kingship, that the ruler who would be served must first be willing to serve, and that gentleness and good words bind a people in lasting loyalty far more surely than threats and force.",
      "But Rehoboam forsakes the counsel the old men gave him and turns instead to the young men who had grown up with him and now stood before him. These companions of his youth, untested and proud, give him advice that flatters his vanity and feeds his desire to assert his power. Their counsel reflects not wisdom but the arrogance of those who have never learned the cost of folly.",
      "&ldquo;My little finger is thicker than my father&rsquo;s thighs... My father disciplined you with whips, but I will discipline you with scorpions&rdquo; (12:10&ndash;11). The young men urge a reply of staggering harshness, that the new king should boast of burdens even heavier than his father&rsquo;s, and threaten the people with scourges far crueler than any they had known. It is the language of a tyrant who mistakes brutality for strength.",
      "&ldquo;So the king did not listen to the people, for it was a turn of affairs brought about by the Lord&rdquo; (12:15). Rehoboam answers the people harshly, following the counsel of the young men, and rejects the appeal of the assembly. Yet the narrator lifts the veil upon the hidden hand of God, declaring that this folly served to fulfill the word the Lord had spoken by Ahijah the Shilonite to Jeroboam. Pride and folly bring disaster, and the king&rsquo;s arrogance becomes the instrument of divine judgment upon the house of Solomon.",
    ],
  },
  {
    id: "The Kingdom Divided",
    heading: "The Northern Tribes Revolt",
    reference: "1 Kings 12:16&ndash;24",
    paragraphs: [
      "&ldquo;And when all Israel saw that the king did not listen to them, the people answered the king&rdquo; (12:16). The harsh reply of Rehoboam falls upon the assembly like a spark upon dry tinder. The people, denied even the smallest relief and threatened with greater cruelty, see plainly that the new king will not hear them, and their patience gives way at last to open and decisive rebellion.",
      "&ldquo;What portion do we have in David? We have no inheritance in the son of Jesse. To your tents, O Israel! Look now to your own house, David&rdquo; (12:16). With this ringing cry the northern tribes renounce their allegiance to the dynasty of David. The very words echo an earlier rebellion in the days of David himself, and they signal the final rupture of the bond that had joined the tribes under one anointed king.",
      "So Israel departs to their tents, and only over the people of Israel who dwelt in the cities of Judah does Rehoboam still reign. The great assembly that had gathered to crown a king now scatters in revolt, and the kingdom that David had won and Solomon had adorned is broken in a single day by the folly of a proud young man and the long-prepared judgment of God.",
      "&ldquo;Then King Rehoboam sent Adoram, who was taskmaster over the forced labor, and all Israel stoned him to death with stones&rdquo; (12:18). In a grievous misreading of the moment, Rehoboam sends the very officer who embodied the hated forced labor, as though the rebellion might yet be put down by the instruments that had provoked it. The people stone Adoram to death, and Rehoboam himself is forced to flee in haste in his chariot to Jerusalem.",
      "&ldquo;So Israel has been in rebellion against the house of David to this day&rdquo; (12:19). The narrator marks the permanence of the breach. The northern tribes make Jeroboam king over all Israel, and there is none that follows the house of David but the tribe of Judah only, together with Benjamin. The division that began at Shechem hardens into a settled and lasting estrangement between the two kingdoms.",
      "Back in Jerusalem, Rehoboam assembles all the house of Judah and the tribe of Benjamin, 180,000 chosen warriors, to fight against the house of Israel and to restore the kingdom by force. He prepares to answer rebellion with war, and to win back by the sword what folly had lost, gathering a great host to march against his own kinsmen in the north.",
      "&ldquo;You shall not go up or fight against your relatives the people of Israel. Every man return to his home, for this thing is from me&rdquo; (12:24). But the word of God comes through Shemaiah the man of God, forbidding the war and declaring that the division is the Lord&rsquo;s own doing. And here, at least, Rehoboam and his people show wisdom, for they hearken to the word of the Lord and turn back from war, accepting in obedience the permanent rupture of the once united kingdom.",
    ],
  },
  {
    id: "Jeroboam's Golden Calves",
    heading: "Jeroboam's Counterfeit Worship",
    reference: "1 Kings 12:25&ndash;33",
    paragraphs: [
      "&ldquo;Then Jeroboam built Shechem in the hill country of Ephraim and lived there. And he went out from there and built Penuel&rdquo; (12:25). The new king of the north sets about securing and fortifying his realm, building up Shechem as a seat of power and strengthening Penuel beyond the Jordan. Outwardly he establishes his kingdom; but inwardly he is gripped by a fear that will lead him into the gravest of sins.",
      "&ldquo;And Jeroboam said in his heart, &lsquo;Now the kingdom will turn back to the house of David. If this people go up to offer sacrifices in the temple of the Lord at Jerusalem, then the heart of this people will turn again to their lord, to Rehoboam&rsquo;&rdquo; (12:26&ndash;27). Here is the root of his transgression, a reasoning of the heart that trusts political calculation rather than the God who had given him the kingdom. He fears that worship at Jerusalem will draw the people&rsquo;s loyalty back to the south, and that he himself will be killed.",
      "&ldquo;So the king took counsel and made two calves of gold. And he said to the people, &lsquo;You have gone up to Jerusalem long enough. Behold your gods, O Israel, who brought you up out of the land of Egypt&rsquo;&rdquo; (12:28). The words are chillingly close to those Aaron had spoken at Sinai before the golden calf, an echo that brands Jeroboam&rsquo;s act as a return to the very idolatry that had once provoked the wrath of God against the nation in the wilderness.",
      "&ldquo;And he set one in Bethel, and the other he put in Dan&rdquo; (12:29). Jeroboam places the two golden calves at the southern and northern extremities of his kingdom, at Bethel near the border with Judah and at Dan in the far north, so that the people might worship near at hand and have no need to go up to Jerusalem. &ldquo;And this thing became a sin, for the people went as far as Dan to be before one of them&rdquo; (12:30).",
      "&ldquo;He also made temples on high places and appointed priests from among all the people, who were not of the Levites&rdquo; (12:31). Jeroboam compounds his idolatry by erecting shrines on the high places and by establishing a priesthood drawn from any of the people, in open defiance of the law that reserved the priesthood to the sons of Levi. The whole structure of true worship is set aside and a counterfeit raised up in its place.",
      "&ldquo;And Jeroboam appointed a feast on the fifteenth day of the eighth month like the feast that was in Judah... he instituted in Bethel the festival that he had devised from his own heart&rdquo; (12:32&ndash;33). He even invents a rival festival, a month after the true Feast of Tabernacles, a feast devised from his own heart rather than commanded by God. Every detail of his worship is a deliberate imitation and corruption of the worship the Lord had ordained.",
      "Jeroboam&rsquo;s politically motivated false worship becomes the defining sin of the northern kingdom, the standard against which every later king of Israel is measured and condemned. Generation after generation, the books of Kings will sound the refrain that the kings of the north walked in &ldquo;the sins of Jeroboam the son of Nebat, who made Israel to sin.&rdquo; His story stands as a sobering study in pragmatism corrupting worship, a warning that when fear and political calculation are allowed to shape the worship of God, the result is idolatry that poisons a whole nation for ages to come.",
    ],
  },
];

const videoItems = [
  { videoId: "Rp3mKx8Hn5W", title: "The Division of the Kingdom in 1 Kings 12" },
  { videoId: "Sq6bLz2Km9D", title: "Rehoboam Rejects the Counsel of the Elders" },
  { videoId: "Tr1cWy4Ln7P", title: "To Your Tents, O Israel: The Northern Tribes Revolt" },
  { videoId: "Uv8gBx3Cn2M", title: "Jeroboam&rsquo;s Golden Calves at Bethel and Dan" },
];

const data: SectionGuideData = {
  accent: "#E11D48",
  badge: `Old Testament Study`,
  title: `The First Book of Kings, Chapter 12`,
  intro: `The tragic division of the kingdom. Rehoboam, Solomon&rsquo;s son, goes to Shechem to be made king; the people, led by Jeroboam, ask him to lighten the heavy yoke of forced labor. Rehoboam rejects the elders&rsquo; wise counsel and follows his young companions&rsquo; harsh advice. The northern tribes revolt, &ldquo;To your tents, O Israel!&rdquo; and make Jeroboam king, leaving only Judah to the house of David. Jeroboam then sets up golden calves at Bethel and Dan and institutes a counterfeit worship system.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 1 Kings 12 through visual teaching on the tragic division of the kingdom at Shechem, the folly of Rehoboam who rejected the wise counsel of the elders for the harsh advice of his companions, the revolt of the northern tribes who cried &ldquo;To your tents, O Israel!&rdquo; and made Jeroboam king, and the counterfeit worship of the golden calves at Bethel and Dan that became the defining sin of the northern kingdom for generations.`,
  calloutTitle: `When Pride and Pragmatism Divide a People`,
  calloutBody: `First Kings 12 is a sobering study in the consequences of pride, folly, and pragmatism. It shows how the arrogance of a young king and the political calculation of a usurper combined to tear apart the people of God, and how even these human failures served, in the mysterious providence of God, to accomplish his word of judgment. The chapter stands as a perpetual warning that wisdom is found in humility, that worship must not be bent to serve power, and that the sins of leaders may bring lasting ruin upon a whole people.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
