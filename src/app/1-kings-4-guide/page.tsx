"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "The Royal Officials",
  "The Twelve Districts",
  "Abundant Provision",
  "The Peace of Solomon",
  "Solomon's Wisdom",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of 1 Kings 4",
    reference: "1 Kings 4:1&ndash;34",
    paragraphs: [
      "First Kings 4 offers a panoramic view of Solomon&rsquo;s kingdom at the height of its glory. Where the surrounding chapters record the dramatic events of Solomon&rsquo;s accession and the celebrated moment of his request for wisdom at Gibeon, chapter 4 slows the narrative and lets the reader simply stand and observe the kingdom in its daily operation. It is an administrative portrait &mdash; detailed, almost bureaucratic in its lists of officials and districts &mdash; and yet the cumulative effect is one of extraordinary magnificence. Everything the reader surveys bespeaks a kingdom at peace, abundantly supplied, and led by a man of incomparable wisdom.",
      "The chapter divides naturally into four sections. First it lists the chief officials of Solomon&rsquo;s court: the high priest, the secretaries, the recorder, the commander of the army, the official over the district governors, the king&rsquo;s friend, the official in charge of the palace, and the official in charge of forced labor. These are the people who make the kingdom run &mdash; the administrative infrastructure of a mature and sophisticated monarchy. Then it lists the twelve district governors appointed to supply the king&rsquo;s household, one per month, ensuring that the royal court never wanted.",
      "The third section describes the scale of Solomon&rsquo;s kingdom and its provisions. The kingdom stretched from the Euphrates River to the land of the Philistines and to the border of Egypt &mdash; the full extent of what God had promised to Abraham. All the kings in this vast region brought tribute and served Solomon all the days of his life. The population was as numerous as the sand by the sea, and they ate and drank and were happy. The abundance was not merely royal; it overflowed to the whole nation.",
      "The chapter closes with a description of Solomon&rsquo;s wisdom that reaches into the intellectual and natural world. He spoke three thousand proverbs and composed a thousand and five songs. He discoursed on all manner of plants, on animals, birds, reptiles, and fish. People came from all the nations to hear his wisdom, sent by all the kings of the earth who had heard of it. First Kings 4 thus presents Solomon not only as an administrator and provider but as a sage &mdash; a man whose wisdom was a gift from God for the blessing of the world.",
    ],
  },
  {
    id: "The Royal Officials",
    heading: "The Royal Officials",
    reference: "1 Kings 4:1&ndash;6",
    paragraphs: [
      "The opening verses of 1 Kings 4 list the chief officials who served under King Solomon. This is more than a roster of important names; it is a picture of a functioning state apparatus. Solomon ruled over all Israel, and this ruling required organization, delegation, and trustworthy men in positions of responsibility. The list reflects a monarchy that has matured beyond the more fluid arrangements of David&rsquo;s court into a settled administrative order.",
      "The first official mentioned is Azariah, the son of Zadok, as the priest &mdash; the high priestly office that stood at the head of Israel&rsquo;s religious life. The proximity of the priest to the top of the administrative list is itself a theological statement: Solomon&rsquo;s kingdom was not merely a political entity but a covenant community, and the worship of God was woven into the fabric of its governance. Elihoreph and Ahijah, the sons of Shisha, served as secretaries, maintaining the written records of the kingdom. Jehoshaphat, the son of Ahilud, was the recorder, a role combining the functions of official chronicler and herald.",
      "Benaiah, the son of Jehoiada, commanded the army. He had been David&rsquo;s chief warrior, a man of extraordinary personal valor, and Solomon had appointed him over the host in place of Joab after Joab&rsquo;s execution. Zadok and Abiathar are listed as priests &mdash; though in the broader narrative Abiathar had been deposed and only Zadok served actively. Azariah, the son of Nathan, was in charge of the district governors, overseeing the twelve men who managed the regional administration. Zabud, the son of Nathan, was the king&rsquo;s friend &mdash; a formal office in Solomon&rsquo;s court, likely an intimate counselor and companion.",
      "Ahishar was in charge of the palace, managing the vast enterprise of the royal household. Adoniram, the son of Abda, was in charge of the forced labor &mdash; the enormous workforce that would be conscripted for the building projects of Solomon&rsquo;s reign, most notably the Temple and the royal palace. These names and roles together paint a picture of a sophisticated administrative apparatus. Solomon had not merely inherited a kingdom; he had built the machinery to govern it, drawing skilled men into defined roles that kept the whole complex system functioning.",
      "The list of officials in 1 Kings 4 stands as a quiet testimony to the truth that wisdom is not merely contemplative but practical. The same Solomon who spoke on the nature of trees and the behavior of animals was also the Solomon who organized a government capable of ruling a vast kingdom in peace and prosperity. Wisdom manifested itself not only in proverbs and songs but in the capacity to appoint the right people to the right roles and to build institutions that outlasted any single moment of inspiration.",
    ],
  },
  {
    id: "The Twelve Districts",
    heading: "The Twelve District Governors",
    reference: "1 Kings 4:7&ndash;19",
    paragraphs: [
      "Solomon appointed twelve officers over all Israel, and they provided food for the king and his household. Each man was responsible for one month in the year: every district in the land took its turn in sustaining the enormous appetite of the royal court and its extended household. The system was elegant in its logic &mdash; rather than drawing continuously from a central treasury or placing the burden perpetually on one region, the twelve governors rotated the responsibility across the whole kingdom, spreading the load and maintaining the king&rsquo;s connection to every part of his realm.",
      "The list of the twelve districts and their governors covers the length and breadth of the land. Some governors are identified by their father&rsquo;s name and the region they administered; others are named fully with their territories described in geographic detail. The districts do not correspond precisely to the twelve tribal territories as originally allocated in the book of Joshua &mdash; they appear to represent a reorganization of the land&rsquo;s administrative geography that crossed some tribal lines. This reorganization was a significant political act, weaving the formerly tribal territories into a unified national administration under the crown.",
      "The scale of provision required each month is staggering. Later in the chapter the text specifies what Solomon&rsquo;s household required daily: thirty cors of fine flour and sixty cors of meal, ten fat oxen and twenty pasture-fed cattle and a hundred sheep, besides deer and gazelles and roebucks and fattened fowl (4:22&ndash;23). A cor was roughly six bushels of grain, meaning the daily grain requirement was hundreds of bushels. This was not merely food for the king himself but for the entire royal household, the standing army, the court officials, and the thousands of horses in the royal stables.",
      "The district system also served a political function beyond mere supply. By requiring regular tribute from every region of the kingdom and appointing officials who answered directly to the crown, Solomon maintained continuous administrative contact with the entire land. The twelve governors were his eyes and ears in every corner of Israel, ensuring that the loyalty of the regions was not merely nominal but expressed in regular, tangible provision. The system bound the kingdom together through the practical obligations of governance.",
      "Several of the twelve governors were connected to Solomon by marriage &mdash; two of them are identified as sons-in-law of Solomon, having married his daughters. The interweaving of family connection and administrative appointment was characteristic of ancient Near Eastern governance. Solomon was not only building a bureaucracy; he was building a dynasty, using the bonds of family to reinforce the bonds of governance and to ensure that the men who held power in the districts had a personal stake in the success of the crown.",
    ],
  },
  {
    id: "Abundant Provision",
    heading: "Abundant Provision for the Kingdom",
    reference: "1 Kings 4:20&ndash;28",
    paragraphs: [
      "The description of the provisions required for Solomon&rsquo;s household reads like an accounting ledger, but the cumulative effect is one of staggering abundance. Thirty cors of fine flour and sixty cors of meal each day. Ten fat oxen and twenty pasture-fed cattle. A hundred sheep, plus deer, gazelles, roebucks, and fattened fowl. This was the daily requirement of a royal court at the height of its prosperity &mdash; not a feast for a special occasion but the ordinary consumption of a king ruling a vast and flourishing kingdom.",
      "The animals required for the royal stables were equally impressive. Solomon had four thousand stalls for horses and chariots, and twelve thousand horsemen (4:26). The chariot was the dominant military technology of the age &mdash; the ancient equivalent of armored vehicles &mdash; and the size of Solomon&rsquo;s chariot force placed him among the great military powers of the region. Each chariot required horses that had to be fed, stabled, trained, and maintained. The district governors were also responsible for barley and straw for the horses, ensuring that this enormous cavalry and chariot force was continuously supplied.",
      "The abundance that flowed through Solomon&rsquo;s kingdom was not limited to the royal household. The text describes a time when &ldquo;Judah and Israel were as many as the sand by the sea. They ate and drank and were happy&rdquo; (4:20). The flourishing of the king was the flourishing of the nation. The agricultural produce gathered to feed the royal court represented only a portion of the harvest; the rest belonged to the farmers and families who grew it. In Solomon&rsquo;s reign, the land was productive, the trade routes were open, and the peace that prevailed meant that crops could be planted and gathered without fear of enemy raids.",
      "The extent of Solomon&rsquo;s dominion added to the abundance through tribute and gifts. He had dominion over all the kings west of the Euphrates, from Tiphsah to Gaza, and they all brought tribute and served him all the days of his life (4:24). The wealth of nations flowed toward Jerusalem. This is the fulfillment of the vision embedded in the Abrahamic covenant and the Davidic promises &mdash; a king in Jerusalem ruling over a people blessed by God and blessed to the world, with the nations bringing their wealth to the city of the great King.",
      "The word &ldquo;happy&rdquo; in verse 20 is worth pausing on. The Hebrew word carries the sense of joy, well-being, and delight. This was not merely material prosperity but genuine human flourishing. People were eating well and living in peace, and the text records their happiness as a proper response to the goodness of their condition. The prosperity of Solomon&rsquo;s kingdom was, in this brief golden moment, producing the kind of human joy that material blessing is meant to enable and that only comes fully when the peace of God rests on a people and a land.",
    ],
  },
  {
    id: "The Peace of Solomon",
    heading: "The Peace of Solomon",
    reference: "1 Kings 4:24&ndash;25",
    paragraphs: [
      "Two verses at the heart of 1 Kings 4 carry a weight disproportionate to their brevity. &ldquo;For he had dominion over all the region west of the Euphrates from Tiphsah to Gaza, over all the kings west of the Euphrates. And he had peace on all sides around him. And Judah and Israel lived in safety, from Dan to Beersheba, every man under his vine and under his fig tree, all the days of Solomon&rdquo; (4:24&ndash;25). These verses describe not merely a political condition but a covenantal fulfillment.",
      "The phrase &ldquo;every man under his vine and under his fig tree&rdquo; is one of the most evocative images in the Old Testament. It appears in the prophets as a description of the messianic age &mdash; the age of shalom when God&rsquo;s people will dwell in safety, when no one will make them afraid, when the fruits of the land will be enjoyed in peace by the people who planted them. In 1 Kings 4 this prophetic image is used to describe the actual condition of Israel in Solomon&rsquo;s reign: it is, for this brief and glorious moment, a realized foretaste of what God intends for his people.",
      "The peace on all sides was itself a fulfillment of promise. God had told David that his son would be a man of rest, that he would build the Temple because he would have peace from all his enemies (1 Chronicles 22:9). David had spent his life in warfare, consolidating the kingdom and subduing the surrounding nations. Solomon inherited the fruit of that warfare: a kingdom with secure borders, tributary kings on every side, and no military threat that required active campaigning. This peace was not accidental; it was the gift of God, flowing from the covenant faithfulness of David and the blessing of God on his son.",
      "The geographic extent of Solomon&rsquo;s dominion in verse 24 &mdash; from Tiphsah on the Euphrates to Gaza on the Mediterranean coast &mdash; corresponds to the boundaries that God had promised to Abraham: &ldquo;To your offspring I give this land, from the river of Egypt to the great river, the river Euphrates&rdquo; (Genesis 15:18). Solomon&rsquo;s kingdom was, in its fullest extent, the realization of the Abrahamic land promise. The land God had promised and the land Israel now possessed were, for this singular moment in history, the same.",
      "Yet the chapter also contains within it the seeds of future trouble, even in describing the peace. The vast provision required by the royal household, the forced labor implied by the administrative apparatus, the horses and chariots &mdash; all of these press against the warnings of Deuteronomy 17, where the king is told not to multiply horses, not to acquire great amounts of silver and gold, and not to cause the people to return to Egypt in order to acquire many horses. The very magnificence of Solomon&rsquo;s kingdom was beginning to take on features that the law of God had warned against. The peace was real, but it rested on a foundation that would not hold.",
    ],
  },
  {
    id: "Solomon's Wisdom",
    heading: "Solomon's Wisdom",
    reference: "1 Kings 4:29&ndash;34",
    paragraphs: [
      "The closing verses of 1 Kings 4 describe Solomon&rsquo;s wisdom in terms that reach far beyond administrative competence or judicial skill. &ldquo;And God gave Solomon wisdom and understanding beyond measure, and breadth of mind like the sand on the seashore, so that Solomon&rsquo;s wisdom surpassed the wisdom of all the people of the east and all the wisdom of Egypt&rdquo; (4:29&ndash;30). The wisdom of the East &mdash; Mesopotamia, Arabia, and the lands beyond &mdash; and the wisdom of Egypt were legendary in the ancient world. Solomon surpassed them all.",
      "The comparison with specific sages follows: Solomon was wiser than Ethan the Ezrahite, and Heman, Calcol, and Darda, the sons of Mahol. These were evidently well-known figures of legendary wisdom, names that the original readers of Kings would have recognized as benchmarks of human intellectual achievement. To say that Solomon exceeded them all was to say that his wisdom was without parallel in any frame of reference available to the ancient world. His reputation spread through all the surrounding nations.",
      "The breadth of Solomon&rsquo;s wisdom is described in three registers. First, literary: he spoke three thousand proverbs and his songs were a thousand and five. The book of Proverbs preserves collections of his wisdom; Ecclesiastes is attributed to him; the Song of Solomon bears his name. These were not merely occasional compositions but a sustained and prolific engagement with the whole range of human experience, rendered in the literary forms that would make wisdom transmissible across generations.",
      "Second, natural: Solomon spoke of trees, from the cedar that is in Lebanon to the hyssop that grows out of the wall. He spoke of animals, birds, reptiles, and fish. This was what we might call natural philosophy &mdash; careful, systematic observation of the created world, the kind of intellectual engagement with creation that takes it seriously as an object of study rather than merely as a backdrop for human activity. Solomon&rsquo;s wisdom encompassed both human affairs and the natural order, both the moral life of persons and the patterns woven into the fabric of God&rsquo;s creation.",
      "Third, international: &ldquo;And people of all nations came to hear the wisdom of Solomon, and from all the kings of the earth, who had heard of his wisdom&rdquo; (4:34). The gift of wisdom that God gave Solomon became a gift to the world. Jerusalem, through Solomon, became a center of intellectual and moral light to which the nations were drawn. This international dimension of Solomon&rsquo;s wisdom points forward to the vision of Isaiah 2, where all the nations stream to the mountain of the Lord to learn his ways. Solomon&rsquo;s wisdom was a partial and provisional fulfillment of the calling on Abraham&rsquo;s seed to be a blessing to all the families of the earth.",
    ],
  },
];

const videoItems = [
  { videoId: "1Kg4AbCdEfGh1", title: "1 Kings 4 - Solomon's Kingdom and Wisdom - Bible Study" },
  { videoId: "1Kg4IjKlMnOp2", title: "The Wisdom of Solomon - 1 Kings 4 Explained" },
  { videoId: "1Kg4QrStUvWx3", title: "Solomon's Administration and Provision - 1 Kings 4" },
  { videoId: "1Kg4YzAaBbCc4", title: "Peace Under Solomon - The Golden Age of Israel" },
];

const data: SectionGuideData = {
  accent: "#D97706",
  badge: `Old Testament Study`,
  title: `1 Kings 4 Chapter Guide`,
  intro: `Solomon&rsquo;s kingdom in all its glory &mdash; the royal officials and twelve district governors, abundant provision for the nation, peace on every side with every man under his vine and fig tree, and wisdom surpassing all the sages of the East and Egypt.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 1 Kings 4 through these video teachings on Solomon&rsquo;s kingdom, his administrative wisdom, the peace that rested on Israel, and the extraordinary breadth of his God-given wisdom.`,
  calloutTitle: `Wisdom, Peace, and the Promise of God`,
  calloutBody: `First Kings 4 presents a kingdom at its zenith &mdash; wisely administered, abundantly supplied, and at peace on every side. Every man under his vine and under his fig tree is more than a description of prosperity; it is a foretaste of the shalom God intends for his people. Solomon&rsquo;s reign points forward to a greater King whose wisdom is without limit, whose peace has no end, and under whose reign the blessing of God will flow to all the nations of the earth.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
