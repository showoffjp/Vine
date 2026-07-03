"use client";
import TabbedGuideTemplate, { TABBED_COLORS, type TabbedGuideData } from "@/components/TabbedGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = TABBED_COLORS;

const overviewBlocks = [
  {
    heading: "The Cosmic Summons to Praise",
    body: "Psalm 148 is the grandest of all the praise psalms &mdash; a sweeping, all-encompassing summons for the entire created order to praise the LORD. Standing in the heart of the &lsquo;Hallelujah&rsquo; cluster (146&ndash;150) that crowns the Psalter, it does not merely praise God; it conscripts the whole universe into a choir. From the highest angels to the deepest sea creatures, from the blazing sun to the creeping things of the ground, from kings on their thrones to children at play, every category of creation is named and called to lift up the name of the LORD. It is one of the great creation-praise psalms, standing alongside Psalm 19, 104, and 150, and it gives us an Old Testament vision of the cosmic worship that the book of Revelation finally fulfills.",
  },
  {
    heading: "Two Great Movements: Heaven and Earth",
    body: "The psalm is built in two grand movements that mirror each other. The first calls for praise &lsquo;from the heavens&rsquo; (148:1&ndash;6): the angels and all his hosts, the sun and moon and shining stars, the highest heavens and the waters above the heavens. The second calls for praise &lsquo;from the earth&rsquo; (148:7&ndash;14): the great sea creatures and all deeps, fire and hail, snow and mist, stormy wind, mountains and hills, fruit trees and cedars, beasts and livestock, creeping things and flying birds, and then every order of humanity &mdash; kings and peoples, princes and rulers, young men and maidens, old men and children. Heaven above and earth below, the whole vertical span of creation, is gathered into a single act of worship.",
  },
  {
    heading: "The Ground of Praise: His Command in Creation",
    body: "Why should all these things praise the LORD? The psalm gives a clear and repeated answer: because he made them by his word. Of the heavenly host it says, &lsquo;Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:5&ndash;6). The basis of praise is creation by the sovereign word of God. He spoke, and it was so. The same word that called the cosmos into being holds it in place forever. All creation owes its existence and its endurance to his command, and so all creation owes him praise.",
  },
  {
    heading: "The Supremacy of His Name and the Horn of His People",
    body: "The psalm climbs to its summit in a single confession: &lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven&rsquo; (148:13). Above the whole double choir of heaven and earth stands the one exalted Name. Then comes a final, surprising note: &lsquo;He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him&rsquo; (148:14). The &lsquo;horn&rsquo; is the biblical symbol of strength and salvation, and this is messianic language &mdash; the very phrase Zechariah took up when he prophesied that God had &lsquo;raised up a horn of salvation for us in the house of his servant David&rsquo; (Luke 1:69). The cosmic praise comes home to God&rsquo;s saving work for his people.",
  },
];

const themeItems = [
  {
    id: "t-allcreation",
    title: "All Creation Is Summoned to Praise",
    color: GOLD,
    body: "Psalm 148 names creature after creature and calls each to praise: angels, hosts, sun, moon, stars, the highest heavens, sea monsters, the deeps, fire, hail, snow, mist, stormy wind, mountains, hills, trees, beasts, birds, and every order of humanity. Nothing is left out. The psalm assumes that the whole universe exists not as a neutral backdrop but as a vast assembly designed for worship. Even things that cannot speak &mdash; the sun, the mountains, the sea &mdash; declare the glory of their Maker by their very being (cf. Psalm 19:1). This is a breathtaking vision of reality: the cosmos itself is a temple, and every creature in it has a part in the song.",
  },
  {
    id: "t-heavenearth",
    title: "From the Highest Heavens to the Lowest Deeps",
    color: TEAL,
    body: "The structure of the psalm sweeps from top to bottom. It begins in the highest heavens &mdash; with the angels and the hosts, the sun and moon and stars, the waters above &mdash; and then descends to the earth, summoning the great sea creatures and all deeps, the weather and the mountains, the trees and the beasts, and finally every kind of human being. This deliberate movement from the loftiest to the lowliest declares that there is no realm of creation outside the reach of God&rsquo;s glory and no creature too high or too low to praise him. The whole vertical span of the universe is one continuous choir, and the LORD is worthy of praise from every level of it.",
  },
  {
    id: "t-command",
    title: "He Commanded and They Were Created",
    color: PURPLE,
    body: "&lsquo;Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:5&ndash;6). Here is the ground of all the praise: creation by the word of God. He did not labor or struggle to make the world; he spoke, and it was so (Genesis 1; Psalm 33:6, 9). And the same word that created also sustains: he established the heavens forever and gave a decree that shall not pass away. The order and endurance of the universe rest on the reliability of God&rsquo;s command. Because everything owes its existence and stability to his word, everything owes him praise.",
  },
  {
    id: "t-name",
    title: "His Name Alone Is Exalted",
    color: ROSE,
    body: "&lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven&rsquo; (148:13). After cataloging the vast double choir of heaven and earth, the psalm fixes everything on one point: the supremacy of God&rsquo;s name. His name &mdash; alone &mdash; is exalted; his majesty rises above both earth and heaven, above the entire creation that has just been summoned to praise. No creature, however glorious, shares this exaltation; the angels, the sun, and the kings of the earth are all worshipers, not the worshiped. This is the great corrective to every form of idolatry: the proper response to the wonders of creation is not to worship the creature but to praise the name of the Creator, whose majesty is above it all.",
  },
  {
    id: "t-horn",
    title: "He Has Raised Up a Horn for His People",
    color: GREEN,
    body: "&lsquo;He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him. Praise the LORD!&rsquo; (148:14). The vast cosmic praise lands at last on God&rsquo;s particular love for his people. The &lsquo;horn&rsquo; in Scripture is the symbol of strength, dignity, and victory; to &lsquo;raise up a horn&rsquo; is to grant salvation and triumph. This is messianic language: Zechariah, filled with the Holy Spirit, declared that God had &lsquo;raised up a horn of salvation for us in the house of his servant David&rsquo; (Luke 1:69), pointing to Christ. The God whose majesty is above earth and heaven has drawn near to a people and lifted up for them a horn of salvation &mdash; reason enough for the whole creation to praise.",
  },
  {
    id: "t-revelation",
    title: "The Worship That Revelation Fulfills",
    color: GOLD,
    body: "Psalm 148 is an Old Testament foreshadowing of the cosmic worship that the book of Revelation brings to its consummation. John heard &lsquo;every creature in heaven and on earth and under the earth and in the sea, and all that is in them, saying, &ldquo;To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever!&rdquo;&rsquo; (Revelation 5:13). That is Psalm 148 fulfilled &mdash; the very same double choir of heaven and earth, now gathered around the throne and the Lamb. This psalm inspired the ancient canticle &lsquo;Benedicite&rsquo; and Saint Francis&rsquo;s &lsquo;Canticle of the Sun,&rsquo; teaching the church in every age to call all creation into the praise of God.",
  },
];

const verseSections = [
  {
    id: "v-12",
    ref: "Psalm 148:1&ndash;2",
    label: "Praise the LORD from the heavens",
    body: "&lsquo;Praise the LORD! Praise the LORD from the heavens; praise him in the heights! Praise him, all his angels; praise him, all his hosts!&rsquo; (148:1&ndash;2). The psalm opens with its great cry, &lsquo;Hallelujah,&rsquo; and immediately lifts our eyes to the heights. The first to be summoned are the highest creatures of all: the angels and the heavenly hosts, the armies of God who stand in his presence. If the holy angels, who behold his face, are called to praise him, how much more every lesser creature. The psalm begins at the top of the cosmic order, in the courts of heaven, and from there the summons will cascade downward through all of creation. Worship starts in the heights and rolls down to fill the earth.",
  },
  {
    id: "v-36",
    ref: "Psalm 148:3&ndash;6",
    label: "Sun, moon, and stars; he commanded and they were created",
    body: "&lsquo;Praise him, sun and moon, praise him, all you shining stars! Praise him, you highest heavens, and you waters above the heavens! Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:3&ndash;6). The sun, moon, and stars &mdash; the very objects the nations worshiped as gods &mdash; are here put firmly in their place: they are not deities but worshipers, called to praise their Maker. And the reason is given plainly: &lsquo;he commanded and they were created.&rsquo; They exist only because he spoke, and they endure only because his decree upholds them. The great lights of heaven are creatures, and their glory is meant to send our praise past them to the One who made them.",
  },
  {
    id: "v-710",
    ref: "Psalm 148:7&ndash;10",
    label: "Praise the LORD from the earth",
    body: "&lsquo;Praise the LORD from the earth, you great sea creatures and all deeps, fire and hail, snow and mist, stormy wind fulfilling his word! Mountains and all hills, fruit trees and all cedars! Beasts and all livestock, creeping things and flying birds!&rsquo; (148:7&ndash;10). Now the summons turns to the earth, and it spares nothing. The great sea creatures and the ocean depths, the elements of weather that seem so wild &mdash; fire, hail, snow, mist, the stormy wind &lsquo;fulfilling his word&rsquo; &mdash; the towering mountains and rolling hills, the fruit trees and the great cedars, the beasts and livestock, the creeping things and the birds: all are called to praise. Even the untamed forces of nature obey his command, and even the lowliest creeping creature has its place in the choir of creation.",
  },
  {
    id: "v-1112",
    ref: "Psalm 148:11&ndash;12",
    label: "Kings and peoples, young and old",
    body: "&lsquo;Kings of the earth and all peoples, princes and all rulers of the earth! Young men and maidens together, old men and children!&rsquo; (148:11&ndash;12). Having summoned the heavens and the natural world, the psalm now turns to humanity in all its variety. The mighty are named first &mdash; kings, peoples, princes, rulers &mdash; for even the most powerful of men are creatures who owe their breath and their thrones to God. Then come the ordinary and the overlooked: young men and maidens, old men and children. No age, no rank, no station is excluded. Every human being, from the king on his throne to the child at play, is called into the one great act of praise. Before the LORD, all are equal worshipers.",
  },
  {
    id: "v-1314",
    ref: "Psalm 148:13&ndash;14",
    label: "His name alone is exalted; he has raised up a horn",
    body: "&lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven. He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him. Praise the LORD!&rsquo; (148:13&ndash;14). The psalm gathers its entire universe of worshipers and points them to a single object: the exalted name of the LORD, whose majesty towers above all earth and heaven. And then, at the very end, the cosmic praise comes home. The God whose glory fills the universe has drawn near to a people and raised up for them a &lsquo;horn&rsquo; &mdash; a strength, a salvation &mdash; messianic language fulfilled in Christ (Luke 1:69). The psalm closes as it began, with its great cry: &lsquo;Praise the LORD!&rsquo;",
  },
];

const applicationBlocks = [
  {
    heading: "Join the Choir of All Creation",
    color: GOLD,
    body: "Psalm 148 reveals that you are not alone when you praise God &mdash; you are joining a choir that already includes the angels, the stars, the mountains, the seas, and every living thing. When your own praise feels small or your heart feels cold, remember the vast company you are joining. The sun rising, the storm blowing, the bird singing, the cedar standing tall &mdash; all of it is already praising the Maker, each in its own way. Lift your voice and take your place in the song of creation. Far from being a lonely act, your worship is one small but real part of the cosmic praise that fills heaven and earth.",
  },
  {
    heading: "See Creation as a Call to Worship the Creator",
    color: TEAL,
    body: "&lsquo;He commanded and they were created.&rsquo; The sun, moon, and stars that the nations worshiped are, in this psalm, mere creatures called to praise their Maker. Let Psalm 148 train your eyes. When you marvel at the night sky, the ocean, the mountains, or a newborn child, let that wonder become praise &mdash; not of the creature, but of the Creator whose word made it all. The beauty of the world is not an end in itself; it is a signpost. The proper response to a glorious creation is never to worship the gift but to praise the Giver, whose name alone is exalted and whose majesty is above earth and heaven.",
  },
  {
    heading: "Rest in the Reliability of His Word",
    color: PURPLE,
    body: "&lsquo;He gave a decree, and it shall not pass away.&rsquo; The same word that created the universe holds it in place &mdash; the sun rises, the seasons turn, the stars keep their courses, all by the unfailing decree of God. If his word is reliable enough to govern the cosmos, it is reliable enough to govern your life. When circumstances feel chaotic and uncertain, anchor yourself in the trustworthiness of the God whose command established the heavens forever. His promises to you in Scripture rest on the same sure foundation as the order of creation: a word that shall not pass away, fulfilled and confirmed in Jesus Christ (Matthew 24:35).",
  },
  {
    heading: "Praise Him for the Horn of Salvation",
    color: ROSE,
    body: "&lsquo;He has raised up a horn for his people.&rsquo; The cosmic praise of Psalm 148 lands at last on God&rsquo;s saving love for his people, and for us that horn of salvation has a name: Jesus Christ, born in the house of David (Luke 1:69). The God whose majesty is above earth and heaven has drawn near to you and lifted up a Savior. Let this be the climax of your praise. Worship him not only as the distant Maker of the stars but as the near Redeemer who raised up a horn of salvation for his people. The whole universe praises him as Creator; you have even more reason to praise him as the God who saved you.",
  },
];

const reflectionQuestions = [
  "Psalm 148 summons every creature &mdash; angels, stars, storms, mountains, animals, and people &mdash; to praise. How does knowing that you join such a vast choir change the way you approach worship?",
  "The psalm calls the sun, moon, and stars &mdash; the very things others worshiped as gods &mdash; to praise their Maker. Where are you tempted to worship the gift rather than the Giver?",
  "The ground of praise is that &lsquo;he commanded and they were created.&rsquo; How does the truth that all things exist by God&rsquo;s word shape your sense of your own life and purpose?",
  "Verse 6 says God &lsquo;gave a decree, and it shall not pass away.&rsquo; In what uncertain area of your life do you most need to rest in the reliability of God&rsquo;s word?",
  "The climax of the psalm is that &lsquo;his name alone is exalted.&rsquo; What would it look like, this week, to let God&rsquo;s name be exalted above your own plans and reputation?",
  "The psalm ends by celebrating that God &lsquo;has raised up a horn for his people&rsquo; &mdash; messianic language fulfilled in Christ (Luke 1:69). How does seeing Jesus as your horn of salvation deepen your praise?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 148: All Creation, Praise the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "From the Heavens and From the Earth" },
  { videoId: "pHBzJ2dVXgk", title: "His Name Alone Is Exalted" },
  { videoId: "3sO5FH2ybPY", title: "He Has Raised Up a Horn for His People" },
];

const data: TabbedGuideData = {
  accent: TEAL,
  badge: `Psalms Deep Dive`,
  title: `Psalm 148: Let All Creation Praise the LORD`,
  intro: `The cosmic summons for all creation to praise the LORD &mdash; in two great movements, praise from the heavens (angels, hosts, sun, moon, stars) and praise from the earth (sea creatures, weather, mountains, trees, beasts, birds, and every order of humanity). The ground of praise is that he commanded and they were created; the climax is that his name alone is exalted; and the final note is that he has raised up a horn for his people.`,
  keyVerseLabel: `Key Verse &mdash; Psalm 148:13`,
  keyVerse: `&ldquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven.&rdquo;`,
  overviewBlocks,
  overviewClosingHeading: `The Canticle of All Things`,
  overviewClosingBody: `Psalm 148 has shaped the worship of the church for centuries. It inspired the ancient canticle &lsquo;Benedicite, omnia opera&rsquo; &mdash; &lsquo;O all you works of the Lord, bless the Lord&rsquo; &mdash; and stands behind Saint Francis of Assisi&rsquo;s beloved &lsquo;Canticle of the Sun.&rsquo; Above all, it gives us an Old Testament glimpse of the worship the book of Revelation finally fulfills, when &lsquo;every creature in heaven and on earth and under the earth and in the sea&rsquo; cries out, &lsquo;To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever!&rsquo; (Revelation 5:13).`,
  themesHeading: `Key Themes of Psalm 148`,
  themeItems,
  verseIntro: `Walk through Psalm 148 as it sweeps from the highest heavens down to the earth and every creature, gathering all into one great act of praise that ends in the exalted name of the LORD and the horn of salvation raised for his people. Tap each section to open it.`,
  verseSections,
  applicationHeading: `Living Psalm 148`,
  applicationBlocks,
  reflectionHeading: `Questions for Reflection`,
  reflectionQuestions,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your meditation on Psalm 148 through teaching on the cosmic summons for all creation to praise, the God who commanded and they were created, the supremacy of his exalted name, and the horn of salvation raised up for his people.`,
  videos: videoItems,
  closingTitle: `A Closing Prayer`,
  closingBody: `O LORD, your name alone is exalted, and your majesty is above earth and heaven. With the angels and the hosts, with the sun and moon and shining stars, with the seas and the mountains, the storms and the trees, the beasts and the birds, and all the peoples of the earth, we praise your holy name. You commanded, and we were created; you gave a decree that shall not pass away. We thank you that your cosmic glory has come near to us, for you have raised up a horn of salvation for your people in your Son, Jesus Christ. Let our lives join the song of all creation, until the day when every creature in heaven and earth shall praise you forever. Praise the LORD! Amen.`,
};

export default function Page() {
  return <TabbedGuideTemplate data={data} />;
}
