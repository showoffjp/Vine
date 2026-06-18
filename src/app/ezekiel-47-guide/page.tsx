"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "Water from the Threshold: The Vision Begins",
    reference: "Ezekiel 47:1&ndash;2",
    accent: TEAL,
    paragraphs: [
      "After six chapters of meticulous architectural vision describing the restored temple (Ezekiel 40&ndash;46) &mdash; its gates, its courts, its chambers, its regulations &mdash; the concluding vision of the entire temple section begins not with a wall or an altar but with water. Ezekiel is brought to the door of the temple and sees something extraordinary: water is flowing out from below the threshold of the house, going eastward (47:1). The source of the water is the temple itself, specifically the threshold, the point of transition between the sacred and the surrounding world.",
      "The direction matters. The water flows eastward, toward the Arabah and the Dead Sea. This is the direction of the Jordan River, the direction of the great rift valley, the direction of the most desolate and inhospitable terrain in the region. The Dead Sea, which receives water from the Jordan but has no outlet, is the most saline body of water on earth, incapable of supporting fish or plant life. That God should send the waters of his temple precisely toward this symbol of lifelessness and barrenness is not coincidental. The vision is structured around the transformation of the most impossible landscape into one teeming with life.",
      "The guide brings Ezekiel out through the north gate and around to the outer gate, where he can observe the water trickling from the south side of the east gate (47:2). This careful positioning ensures Ezekiel will be able to follow the water on its eastward journey. What begins as a trickle &mdash; almost unworthy of notice, emerging from beneath the great threshold of the most magnificent temple Ezekiel has ever seen &mdash; will become something that can swallow a man and bear him up beyond his ability to cross.",
      "The contrast between the grandeur of the temple and the humble beginning of the river is intentional. The kingdom of God has this quality throughout Scripture: what appears small, ordinary, and easily overlooked at its source grows beyond all expectation as it flows outward. Jesus captures the same dynamic in his parables of the mustard seed and the leaven &mdash; the kingdom begins in hiddenness and ends in dominion. The water from the threshold begins as a trickle and becomes unfordable. That is its nature, and it is the nature of every genuine work of the Spirit of God.",
    ],
  },
  {
    heading: "Progressive Depths: Ankle to Unfordable",
    reference: "Ezekiel 47:3&ndash;5",
    accent: GREEN,
    paragraphs: [
      "The angelic guide takes Ezekiel through the river in four stages, measuring a thousand cubits each time (approximately a third of a mile at each stage). The first measurement brings the water to Ezekiel&rsquo;s ankles (47:3). The water is present and real but barely inconvenient; he can walk through it without effort or concern. The second thousand cubits brings it to his knees (47:4). The third thousand cubits brings it to his waist (47:4). The fourth thousand cubits produces a river he cannot cross &mdash; &ldquo;a river that could not be crossed, for the water had risen. It was deep enough to swim in, a river that could not be crossed on foot&rdquo; (47:5).",
      "The progression is the heart of the vision. The same river, the same source, the same eastward direction &mdash; but the depth changes completely as you go farther from the threshold. What begins navigable and manageable becomes overwhelming and immersive. This is not described as a negative development. The guide is not warning Ezekiel to stay at ankle-depth for safety. He is leading him deeper, inviting him to experience what the water becomes when it has traveled far from its source and gathered all that the land contributes to it.",
      "The question the vision implicitly poses is: where are you in the river? The ankle-deep stage is real encounter with the water of God&rsquo;s presence &mdash; it is genuine, it is not nothing, and it is far better than the desert. But it is not what the river is meant to be. The waist-deep stage is deeper engagement, more transformative, more demanding, requiring more attentiveness to the current. But the unfordable stage is something else entirely &mdash; it is a river you cannot cross on foot, a depth in which you are no longer the one controlling the journey, a water that is deep enough to swim in and carries you rather than merely getting your feet wet.",
      "The vision does not tell us that we must arrive at the unfordable stage immediately or by our own striving. The guide walks with Ezekiel through all four stages, measuring the distance each time, showing him what is true at each depth. But the movement is consistently in one direction: deeper. The river&rsquo;s nature is to grow. The invitation implicit in the vision is to keep moving with it, to go where it goes, to resist the temptation to camp at ankle-depth and call it sufficient.",
    ],
  },
  {
    heading: "The River Enters the Dead Sea: Everything Will Live",
    reference: "Ezekiel 47:6&ndash;12",
    accent: GOLD,
    paragraphs: [
      "Having shown Ezekiel the progressive depths, the guide brings him back to the bank of the river (47:6), where Ezekiel now sees what the water produces as it flows: very many trees on both banks, lining the river like an honor guard of life (47:7). The trees appear without any explanation of how they got there; they are simply the consequence of the water&rsquo;s presence. Where the river goes, life follows in its most visible and permanent forms.",
      "The guide then explains where the river flows: into the Arabah and then into the sea &mdash; the sea here being the Salt Sea, the Dead Sea (47:8). The water entering the Dead Sea does something that no natural process has ever accomplished: it makes the waters fresh. And then comes the central promise of the vision, one of the great statements of restoration theology in Scripture: &ldquo;And wherever the river goes, every living creature that swarms will live, and there will be very many fish. For this water goes there, that the waters of the sea may become fresh; so everything will live where the river goes&rdquo; (47:9).",
      "The phrase &ldquo;everything will live where the river goes&rdquo; is comprehensive in its scope. Not some things, not most things &mdash; everything. The Dead Sea, which by its very name and nature speaks of finality and hopelessness, is not excepted from the river&rsquo;s renewing power. Fishermen will stand from En-gedi to En-eglaim &mdash; places on the western shore of the Dead Sea &mdash; casting nets, and the fish will be as varied and abundant as those of the Great Sea (47:10). Only the swamps and marshes will remain salty (47:11), preserved for their practical value, suggesting that the vision is not describing a complete destruction of what was but a transformation of the dead into the living.",
      "The trees on the banks of this river receive their fullest description in verse 12: &ldquo;And on the banks, on both sides of the river, there will grow all kinds of trees for food. Their leaves will not wither, nor their fruit fail, but they will bear fresh fruit every month, because the water for them flows from the sanctuary. Their fruit will be for food, and their leaves for healing.&rdquo; Leaves that do not wither. Fruit that never fails. Fresh fruit in every month of the year, not just in season. The natural limitations of plant life &mdash; seasons, drought, death, the withering of leaves in winter &mdash; are simply suspended in the presence of the river from the sanctuary. John&rsquo;s vision of the river of life in Revelation 22:1-2 reproduces this passage almost word for word, affirming that Ezekiel&rsquo;s vision is the seed of which Revelation 22 is the fullness.",
    ],
  },
  {
    heading: "Land for Israel and for the Alien",
    reference: "Ezekiel 47:13&ndash;23",
    accent: ROSE,
    paragraphs: [
      "The chapter&rsquo;s closing section pivots from the vision of the river to the practical distribution of the land. God sets the borders of the land that is to be divided among the twelve tribes of Israel, including a portion for Joseph that accounts for both Ephraim and Manasseh as Joseph&rsquo;s two inheriting sons (47:13). The borders are described in careful detail from north to south, east to west (47:15-20), establishing the geographical contours of the restored inheritance.",
      "But the most remarkable provision of this land distribution is not the borders or the tribal allotments; it is the command concerning the aliens living among Israel: &ldquo;So you shall divide this land among you according to the tribes of Israel. You shall allot it as an inheritance for yourselves and for the sojourners who reside among you and have had children among you. They shall be to you as native-born children of Israel. With you they shall be allotted an inheritance among the tribes of Israel. In whatever tribe the sojourner resides, there you shall assign him his inheritance, declares the Lord GOD&rdquo; (47:21-23).",
      "This provision is without parallel in the Mosaic law. Under the Sinai covenant, sojourners (ger, resident aliens) had significant protections and were called to observe many of the same regulations as Israelites, but they did not receive a land inheritance among the tribes. Land inheritance was the mark of belonging, and it was reserved for the native-born or fully incorporated Israelite. Ezekiel&rsquo;s vision of the restored land breaks this boundary: the alien who has settled among Israel and raised children there is to be treated as a native-born Israelite for the purposes of the land inheritance. The river that heals the Dead Sea flows through a community that has itself been healed of its exclusiveness.",
      "This detail connects the vision of the river with the broader prophetic hope for the inclusion of the nations in the worship of the God of Israel. Isaiah 56:6-7 promises that foreigners who hold fast to the covenant will be brought to God&rsquo;s holy mountain and their offerings accepted at his altar. Zechariah 14:16 envisions the nations making pilgrimage to Jerusalem for the Feast of Tabernacles. In Ezekiel 47, this inclusive vision is written into the very land map of the restoration: the river of God&rsquo;s presence does not flow only to benefit the native-born, but transforms the land into a place where the stranger and the sojourner are genuinely at home.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The Life-Giving River from the Sanctuary",
    accent: TEAL,
    paragraphs: [
      "The central image of Ezekiel 47 &mdash; life-giving water flowing from the temple &mdash; stands at the intersection of some of the richest streams of biblical theology. Water from the sanctuary is an ancient symbol of divine presence and blessing. The Garden of Eden had a river flowing from it that watered the earth (Genesis 2:10). Psalm 46:4 speaks of &ldquo;a river whose streams make glad the city of God.&rdquo; Joel 3:18 promises that &ldquo;a fountain shall come forth from the house of the LORD and water the Valley of Shittim.&rdquo; Zechariah 14:8 envisions &ldquo;living waters&rdquo; flowing from Jerusalem in both directions. Ezekiel 47 stands in this tradition and brings it to its most developed expression before Revelation 22.",
      "The theological claim embedded in this image is that life does not originate in the creation itself but flows from God&rsquo;s presence. The temple is the locus of the divine dwelling on earth, and from that dwelling the life of the new creation overflows. This is not a natural river produced by rainfall and runoff; it is a supernatural river whose source is the sanctuary threshold, which flows not because of terrain but because of the presence of God within the temple. Everything the river produces &mdash; fresh water, fish, fruit trees, healing leaves &mdash; is ultimately the product of the divine life overflowing into the created order.",
      "Jesus stands in this tradition when he cries out at the Feast of Tabernacles: &ldquo;If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, &lsquo;Out of his heart will flow rivers of living water&rsquo;&rdquo; (John 7:37-38). John explicitly interprets this as a reference to the Spirit (7:39). The river of Ezekiel 47 is fulfilled in the Holy Spirit flowing from the glorified Christ, the true temple (John 2:19-21), into the lives of believers and through them into the world. What Ezekiel saw in vision becomes personal and present reality in the New Testament&rsquo;s account of the Spirit-filled life.",
    ],
  },
  {
    heading: "Progressive Deepening: The Invitation to Go Deeper",
    accent: GREEN,
    paragraphs: [
      "The four stages of depth in Ezekiel 47:3-5 &mdash; ankle, knee, waist, unfordable &mdash; have become one of the most beloved and widely applied images in Christian spiritual life. They describe not merely a geographical journey with a guide measuring cubits, but a spiritual journey of increasing immersion in the life of God. The ankle-deep Christian has encountered the Spirit; the knee-deep Christian has been significantly affected by him; the waist-deep Christian is more than halfway surrendered to the current; but it is only the one who has gone into the unfordable water who has given up trying to walk on their own and has allowed the river to carry them.",
      "The vision suggests that this progression is both natural and invited. The river&rsquo;s character is to deepen. It does not stay at ankle-depth by accident; it grows because that is what rivers do when they have enough source and enough space to expand. The spiritual life that remains at ankle-depth is not obeying the inner logic of the river it has entered. The invitation of the Spirit, like the invitation of the guide in the vision, is always &ldquo;come deeper.&rdquo; Not to overwhelm or terrify, but because the life of the river is found in its depths, and what it does to the Dead Sea requires the full force of an unfordable river, not a trickle.",
      "There is also a note of grace in the progression. The guide walks with Ezekiel through each stage, measuring the distance, allowing him to experience each depth before moving to the next. There is no accusation that Ezekiel spent too long at ankle-depth. The vision simply moves forward. Christian discipleship has this quality: there is patience for each stage, compassion for the person who is just getting their ankles wet, but also a persistent beckoning toward the deeper water. God meets us where we are and leads us where he is going.",
    ],
  },
  {
    heading: "Everything Lives Where the River Goes",
    accent: GOLD,
    paragraphs: [
      "The promise of Ezekiel 47:9 &mdash; &ldquo;everything will live where the river goes&rdquo; &mdash; is one of the most expansive statements of divine restorative power in the Old Testament. It is not a promise about some things being revived, or about the strong being restored while the weak are left behind. It is an absolute statement about the scope of what the river of God&rsquo;s presence accomplishes: everything lives where it goes. The Dead Sea, the most extreme natural symbol of lifelessness and impossible barrenness, becomes a place where fishermen cast their nets.",
      "The New Testament receives this promise through the lens of the Spirit. The Spirit, poured out from the glorified Christ, goes where the gospel goes, and where the Spirit goes, the dead come to life. Paul writes in Romans 8:11 that the same Spirit who raised Jesus from the dead &ldquo;will also give life to your mortal bodies.&rdquo; The Spirit is the river that gives life, and that life is not partial or probationary but total and renewing. The Dead Sea of a spiritually dead life, a spiritually dead community, or a spiritually dead culture is not beyond the reach of the river that flows from the sanctuary.",
      "The practical application is a call to expectation. When the river of the Spirit flows into a situation &mdash; a prayer, a conversation, a ministry, a community &mdash; the proper expectation is not that things might improve slightly at the margins, but that everything that can live will live. The Dead Sea does not become a slightly less salty pond; it becomes a place teeming with fish. Christian mission, prayer, and ministry are animated by the confidence that the river of God&rsquo;s life is equal to any degree of deadness it encounters, because its source is unlimited and its nature is to give life.",
    ],
  },
  {
    heading: "The Trees: Fruit for Food and Leaves for Healing",
    accent: ROSE,
    paragraphs: [
      "The trees that grow on both banks of the river in Ezekiel 47:12 are described in terms that transcend the natural order: their leaves do not wither, their fruit does not fail, they bear every month rather than seasonally, and their leaves are for healing. The source of all this is explicitly given: &ldquo;because the water for them flows from the sanctuary.&rdquo; The trees are not exceptional in themselves; they are exceptional because of where they are rooted and what they are drinking.",
      "John&rsquo;s vision in Revelation 22:2 reproduces these trees with remarkable fidelity: &ldquo;on either side of the river, the tree of life with its twelve kinds of fruit, yielding its fruit each month. The leaves of the tree were for the healing of the nations.&rdquo; The plural &ldquo;trees&rdquo; of Ezekiel becomes &ldquo;the tree of life&rdquo; in Revelation, a singular tree that spans both banks, evoking the tree of life in the Garden of Eden (Genesis 2:9). Ezekiel&rsquo;s vision is thus explicitly connected to both the beginning and the ending of the biblical story: the river restores what Eden lost, and the leaves of its trees heal what the fall broke.",
      "The detail that the leaves are &ldquo;for healing&rdquo; rather than for food is significant. The fruit sustains life; the leaves restore what is damaged. The full vision encompasses both nourishment and healing, both the positive supply of what is needed and the restoration of what has been harmed. A community that lives in the current of the Spirit is meant to be both nourished and healing &mdash; drawing life from its source and extending that life outward, particularly to those who are broken and in need of restoration. The church is not merely a well-fed community; it is a community whose leaves are for the healing of its surrounding world.",
    ],
  },
  {
    heading: "The Alien&rsquo;s Inheritance: Inclusive Community in the New Creation",
    accent: PURPLE,
    paragraphs: [
      "The land allotment provision for aliens in Ezekiel 47:21-23 is easily overlooked in the drama of the river vision, but it is theologically profound. The inclusion of resident aliens in the full land inheritance of Israel &mdash; not merely as protected sojourners but as native-born heirs of the land &mdash; is the most inclusive such provision in the Old Testament. It represents a breakthrough of the logic of the river into the social ordering of the restored community.",
      "The river that flows from the temple heals the Dead Sea and makes trees grow on barren banks. It does not stay contained within the bounds of the familiar or the expected. It overflows. The same God who says &ldquo;everything will live where the river goes&rdquo; draws up a land map that includes the foreigner alongside the native-born Israelite. The inclusion of the alien in the inheritance is the social and covenantal expression of the river&rsquo;s life-giving flow into every form of barrenness, including the barrenness of exclusion.",
      "Paul draws on this prophetic stream when he writes in Ephesians 2:19 that Gentile believers are &ldquo;no longer strangers and aliens, but fellow citizens with the saints and members of the household of God.&rdquo; The vision of Ezekiel 47 is part of the Old Testament foundation for the New Testament theology of inclusion: the people of God in the new creation is not organized by ethnicity, ancestry, or native-born status, but by participation in the river of life that flows from the throne of God and of the Lamb. The alien who receives the inheritance alongside the native-born Israelite is the prototype of the Gentile who inherits alongside the Jew in the gospel.",
    ],
  },
  {
    heading: "Zechariah, John, and Revelation: The River&rsquo;s Biblical Trajectory",
    accent: TEAL,
    paragraphs: [
      "Ezekiel 47 does not stand alone; it is part of an escalating prophetic river that flows through the entire Bible. Zechariah 14:8 envisions &ldquo;living waters&rdquo; flowing from Jerusalem half toward the eastern sea and half toward the western sea, in summer and in winter alike &mdash; a river that defies seasonal limitations, echoing Ezekiel&rsquo;s trees that bear fruit every month. Joel 3:18 speaks of a fountain coming forth from the house of the LORD to water the Valley of Shittim, another barren place transformed by divine overflow.",
      "Jesus takes up the imagery at the Feast of Tabernacles in John 7:37-38 &mdash; a festival that included a water-pouring ceremony at the temple, explicitly evoking the water from the sanctuary. When Jesus cries &ldquo;If anyone thirsts, let him come to me and drink,&rdquo; he is standing in the temple during the very festival that celebrated divine water provision, identifying himself as the source of the river that Ezekiel and Zechariah had foreseen. The rivers of living water that flow from the believer&rsquo;s heart (7:38) are the personal, embodied fulfillment of the river from the threshold.",
      "Revelation 22:1-2 brings the trajectory to its culmination: &ldquo;Then the angel showed me the river of the water of life, bright as crystal, flowing from the throne of God and of the Lamb through the middle of the street of the city; also, on either side of the river, the tree of life with its twelve kinds of fruit, yielding its fruit each month. The leaves of the tree were for the healing of the nations.&rdquo; Ezekiel&rsquo;s river from the temple threshold has become the river from the throne of God and of the Lamb. The sanctuary and the throne are one. The healing leaves are now for the nations. The vision that began in exile beside the river Chebar has reached its cosmic destination.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 5: Water from the Threshold, Four Depths",
    reference: "Ezekiel 47:1&ndash;5",
    accent: TEAL,
    paragraphs: [
      "The vision of chapter 47 begins immediately after the detailed regulations of the temple service in chapter 46. Ezekiel is brought back to the door of the temple and sees water flowing from below the south side of the threshold, going eastward below the south wall of the house, south of the altar (47:1). The specificity is striking &mdash; it is not flowing from the altar itself or from the interior sanctuary but from the threshold, the point at which the holy house meets the outer world. The life of the sanctuary overflows its own boundaries.",
      "The guide brings Ezekiel out through the north gate and around to the east gate (47:2), positioning him to observe the water emerging from the south side of that gate. This is not a great river emerging with force; the text implies a modest flow, almost seeping from the building. And then begins the progression: a thousand cubits measured, and the water is ankle-deep (47:3). Another thousand, and it is knee-deep (47:4). Another thousand, and it is waist-deep (47:4). The final thousand produces a river that cannot be crossed on foot &mdash; &ldquo;it was deep enough to swim in, a river that could not be crossed on foot&rdquo; (47:5).",
      "The fourfold structure is deliberate and complete. The vision does not stop at three stages or go to five; four is the number of the created order (four directions, four corners of the earth), and four stages of depth describe the full range of engagement with the river. What begins as water lapping at the ankles becomes water that overwhelms the pedestrian entirely. The same source, the same water, the same direction &mdash; but the cumulative effect of travel with the river is complete immersion. This is the spiritual journey the vision is mapping.",
    ],
  },
  {
    heading: "Verses 6 to 7: Many Trees on Both Banks",
    reference: "Ezekiel 47:6&ndash;7",
    accent: GREEN,
    paragraphs: [
      "After leading Ezekiel through the progressive depths, the guide asks him a searching question: &ldquo;Son of man, have you seen this?&rdquo; (47:6). The question is more than a check on Ezekiel&rsquo;s attentiveness. It is an invitation to reflection, to pause and consider what he has just experienced, to let the reality of the deepening river settle into his consciousness before the next stage of the vision begins. Prophetic vision is meant to be seen, not just passed through.",
      "The guide then brings Ezekiel back to the bank of the river (47:6), and when he arrives, he sees what the water has produced on both sides: &ldquo;there were very many trees on the one side and on the other&rdquo; (47:7). The trees are described in the simplest terms at this point &mdash; their full character will be developed in verse 12 &mdash; but their presence is immediate and self-evident. Trees grow on both banks, not just on one side, not just at the source, but along the entire length of the river wherever it has flowed.",
      "The image of trees lining both banks of a river is not unusual in the ancient Near East &mdash; rivers produce riparian vegetation wherever they flow. What is extraordinary is that this river flows into a landscape that should have no trees: the Arabah and the shores of the Dead Sea, among the most barren places on earth. The very presence of trees is already testimony to the transforming power of the water that has preceded them. They are the living evidence of the river&rsquo;s passage, the visible record of where life has gone.",
    ],
  },
  {
    heading: "Verses 8 to 10: The Dead Sea Made Fresh",
    reference: "Ezekiel 47:8&ndash;10",
    accent: GOLD,
    paragraphs: [
      "The guide explains the river&rsquo;s destination: &ldquo;This water flows toward the eastern region and goes down into the Arabah, and enters the sea; when the water flows into the sea, the water will become fresh&rdquo; (47:8). The sea in question is the Salt Sea, the Dead Sea, the terminal body of water in the Jordan rift valley. The Dead Sea has no outlet; water flows in but does not flow out. The result over geological time has been a salt concentration roughly ten times that of the ocean, rendering it incapable of supporting fish or most aquatic life.",
      "The miracle of Ezekiel&rsquo;s vision is precisely that this impossible body of water &mdash; the emblem of ecological finality and spiritual hopelessness &mdash; becomes fresh when the river from the temple flows into it. And when it becomes fresh, everything comes alive: &ldquo;wherever the river goes every living creature that swarms will live, and there will be very many fish. For this water goes there, that the waters of the sea may become fresh; so everything will live where the river goes&rdquo; (47:9). The Hebrew word for &ldquo;fresh&rdquo; (rapha) is also the word for &ldquo;healed&rdquo; &mdash; the Dead Sea is healed.",
      "Verse 10 elaborates the abundance of the restored sea: fishermen will stand from En-gedi to En-eglaim, and the fish will be of very many kinds, like the fish of the Great Sea (the Mediterranean). En-gedi is a famous oasis on the western shore of the Dead Sea; En-eglaim is on the northern end. The entire western coast becomes a place of abundant fishing. What was a place where nothing lived is now a place where fishermen spread their nets. The transformation is not partial; it is the total reversal of the sea&rsquo;s defining characteristic.",
    ],
  },
  {
    heading: "Verse 11: The Swamps and Marshes for Salt",
    reference: "Ezekiel 47:11",
    accent: MUTED,
    paragraphs: [
      "A single verse preserves a small exception to the total transformation of the Dead Sea: &ldquo;But its swamps and marshes will not become fresh; they are to be left for salt&rdquo; (47:11). This detail is easy to overlook but it serves an important interpretive function. The vision is not describing the abolition of everything that was before; it is describing the transformation of death into life. Salt, in the ancient world, was a valuable commodity with its own legitimate uses &mdash; for preservation, for seasoning, for ritual purposes.",
      "The preservation of the salt marshes alongside the miraculous freshening of the main body of water suggests that the new creation does not destroy what was but transforms it purposefully. There is wisdom in the arrangement: the life-giving water that cannot coexist with the salt concentration of the Dead Sea can coexist with smaller, contained salt deposits that serve a different function. The redemption of creation is not a bulldozing of the old but a renewal that retains what is good and useful while transforming what is dead and barren.",
      "In broader theological terms, this detail guards against an overly escapist reading of the vision. The new creation does not leave behind the physical world in favor of a purely spiritual one; it transforms the physical world, including the landscape of the Dead Sea, retaining its salt where salt is useful and healing its waters where water is needed for life. Ezekiel&rsquo;s vision is robustly material, concerned with fish and trees and rivers and land, not merely with invisible spiritual realities.",
    ],
  },
  {
    heading: "Verse 12: Trees Whose Leaves Do Not Wither",
    reference: "Ezekiel 47:12",
    accent: ROSE,
    paragraphs: [
      "Verse 12 provides the fullest description of the trees on the river&rsquo;s banks, and it is one of the most beautiful verses in the book of Ezekiel: &ldquo;And on the banks, on both sides of the river, there will grow all kinds of trees for food. Their leaves will not wither, nor their fruit fail, but they will bear fresh fruit every month, because the water for them flows from the sanctuary. Their fruit will be for food, and their leaves for healing.&rdquo;",
      "Three features exceed natural possibility: the leaves do not wither, the fruit does not fail, and the trees bear fresh fruit every month. In the natural world, leaves wither and fall in autumn; fruit fails in drought, in frost, or in disease; and trees produce fruit in their season, not in every month of the year. The trees in Ezekiel&rsquo;s vision are exempt from all these limitations. Their exemption is explicitly grounded in the source of their water: &ldquo;because the water for them flows from the sanctuary.&rdquo; The supernatural character of the trees is a direct consequence of their supernatural water supply.",
      "The distinction between fruit for food and leaves for healing captures two dimensions of what the people of God are meant to provide to the world. The fruit sustains life; the leaves restore broken life. Nourishment and healing are both expressions of the river&rsquo;s power, taking different forms. This verse becomes the seed of Revelation 22:2, where the leaves of the tree of life are explicitly for the healing of the nations &mdash; the most expansive possible vision of what the river of life, flowing from God&rsquo;s throne, will ultimately accomplish in the new creation.",
    ],
  },
  {
    heading: "Verses 13 to 23: The Land and the Alien&rsquo;s Inheritance",
    reference: "Ezekiel 47:13&ndash;23",
    accent: PURPLE,
    paragraphs: [
      "The final section of the chapter moves from vision to legal provision, outlining the boundaries of the restored land of Israel and the principles by which it will be distributed to the twelve tribes. The borders are described in careful geographical detail, running from Hamath in the north (47:15-17) to the Wadi of Egypt in the south (47:19), and from the Great Sea in the west (47:20) to a line following the Jordan and the eastern coastline in the east (47:18). Joseph is given a double portion through his two sons Ephraim and Manasseh (47:13), ensuring that the twelve tribal allotments are preserved.",
      "The command concerning aliens is embedded in verses 21 through 23 and represents the most extraordinary provision of the chapter outside the river vision itself: &ldquo;So you shall divide this land among you according to the tribes of Israel. You shall allot it as an inheritance for yourselves and for the sojourners who reside among you and have had children among you. They shall be to you as native-born children of Israel. With you they shall be allotted an inheritance among the tribes of Israel&rdquo; (47:21-22). The sojourner who has settled among Israel and raised a family there is to be treated exactly as a native-born Israelite for purposes of land inheritance.",
      "This provision looks both backward and forward. It looks backward to the spirit of the Mosaic law, which commanded Israel to remember that they were sojourners in Egypt and therefore to love the sojourner (Leviticus 19:34; Deuteronomy 10:19). But it goes beyond the Mosaic law, which did not extend land inheritance to sojourners. It looks forward to the New Testament community, where the dividing wall between Jew and Gentile has been broken down (Ephesians 2:14) and where the Gentile believer is a fellow heir, co-member of the body, and co-partner in the promise in Christ Jesus (Ephesians 3:6). The river that heals the Dead Sea flows through a community that is itself being healed of the barriers that divide people from one another.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Going Deeper with God",
    accent: TEAL,
    paragraphs: [
      "The four depths of Ezekiel 47 pose a direct question to every believer: where are you in the river? Ankle-deep is real &mdash; you have touched the water, you are in it, and that is genuinely good. But ankle-deep is not where the river is meant to take you. The invitation of the Spirit in every season of the Christian life is not to consolidate your current depth but to move deeper. What has kept you at ankle-depth when God is calling you to waist-deep? What fears, what habits, what resistance have stalled you at a depth that no longer matches the current the Spirit is setting before you?",
      "Going deeper does not mean frantic spiritual striving. The guide in the vision leads Ezekiel through each stage; he does not demand that Ezekiel leap immediately from ankle to unfordable. The progression is patient and measured. But it is consistently in one direction. The invitation to go deeper is not a condemnation of where you currently are; it is the steady beckoning of a God who has immeasurable depths of himself to share with you and who is not content to let you experience only the surface.",
    ],
  },
  {
    heading: "Everything Lives Where the River Goes: Carrying Life Outward",
    accent: GOLD,
    paragraphs: [
      "The river of Ezekiel 47 does not merely bless those who swim in it; it flows outward into the barrenest landscape imaginable and transforms it completely. This is the pattern of the Spirit&rsquo;s work in and through believers. The life of God that we receive in prayer, in Scripture, in worship, in community is not meant to pool within us; it is meant to flow through us into the Dead Sea situations around us: broken relationships, spiritually dead communities, people who have concluded that nothing can grow in the soil of their lives.",
      "What the river does to the Dead Sea is what the Holy Spirit does through the people of God when they allow the river to flow through them rather than merely accumulating it. The fishermen of En-gedi and En-eglaim casting their nets in the healed sea are not just a beautiful prophetic image; they are the calling of every believer who goes out into the world carrying the life of the Spirit. Where the river goes, everything lives. Where the Spirit flows through you, the same promise holds.",
    ],
  },
  {
    heading: "Nourishment and Healing: Two Dimensions of Fruitfulness",
    accent: ROSE,
    paragraphs: [
      "The trees of Ezekiel 47:12 bear fruit for food and leaves for healing. Both are needed, and a community rooted in the river of God&rsquo;s life should be marked by both. Fruit for food is the sustaining nourishment that comes from genuine encounter with the word and the Spirit &mdash; teaching, prayer, worship, community, the sacraments. Leaves for healing are the restorative presence of God&rsquo;s people in the lives of those who are broken &mdash; compassion, mercy, reconciliation, the ministry of bearing one another&rsquo;s burdens.",
      "The church that is only nourishing but not healing has missed half of what the river produces. The church that is only focused on healing but has neglected its roots in the source of the river will run dry. Both dimensions flow from the same source: the water that comes from the sanctuary. When the river is flowing freely through the community, both fruit and healing follow as natural consequences of the water&rsquo;s presence. The question for any church is not merely &ldquo;Are we nourishing our people?&rdquo; but &ldquo;Are our leaves for healing the world around us?&rdquo;",
    ],
  },
  {
    heading: "The Inclusion of the Alien: Welcoming the Stranger",
    accent: PURPLE,
    paragraphs: [
      "The land allotment provision for resident aliens in Ezekiel 47:21-23 carries a direct application for communities that belong to the river of God&rsquo;s life. The same river that heals the Dead Sea dissolves the distinctions that divide people into those who belong and those who do not. A community shaped by the Spirit&rsquo;s flowing life does not maintain a sharp boundary between the native-born insiders and the strangers who have come to dwell among them; it extends to the stranger the same inheritance it possesses itself.",
      "This is not a counsel of naivety about the real distinctions that exist between people. The passage maintains tribal boundaries and careful geographical borders; it does not abolish structure. What it does is include the alien within that structure as a full participant rather than a permanent outsider. For the church, the application is clear: the gospel creates a community where &ldquo;there is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus&rdquo; (Galatians 3:28). The stranger who comes to dwell among the people of God is not to be kept at arm&rsquo;s length; they are to be welcomed into full participation in the life of the community.",
    ],
  },
  {
    heading: "Allowing the River to Flow Through Us",
    accent: GREEN,
    paragraphs: [
      "The river of Ezekiel 47 does not ask permission to transform what it touches. It flows from the sanctuary threshold and everything in its path is changed. Fish appear, trees grow, the Dead Sea becomes fresh. The river does not negotiate with the landscape about whether it is willing to be changed; it simply flows, and life follows. The question for the believer is not whether the river can transform the Dead Sea situations in and around their life, but whether they will allow themselves to be conduits of its flow.",
      "Being a conduit of the Spirit&rsquo;s life means first allowing the river to go through us rather than attempting to contain or manage it. The person who has gone into the unfordable water of Ezekiel&rsquo;s vision is not guiding the river; they are being carried by it. The deepest dimension of the Spirit-filled life is precisely this surrendered availability &mdash; not passive inactivity but the active willingness to be taken where the river goes, at the depth the river has become, trusting that everything will live where the river goes because it flows from the throne of God himself.",
    ],
  },
];

const reflectionQuestions = [
  "In the imagery of Ezekiel 47, how deep are you currently in the river of God&rsquo;s life &mdash; ankle, knee, waist, or unfordable? What has kept you at the depth you are at, and what is the Spirit calling you toward?",
  "Where is the &ldquo;Dead Sea&rdquo; in your life or your community &mdash; the place that seems most barren, most impossible, most beyond the reach of life? How does the promise that &ldquo;everything will live where the river goes&rdquo; speak into that specific situation?",
  "Are you more naturally a fruit-bearing tree (nourishing others from the life you receive) or a healing-leaf tree (restoring the broken around you)? How might you grow in the dimension that is less natural to you?",
  "Ezekiel 47 commands the inclusion of the alien as a full heir in the restored land. Who are the &ldquo;aliens&rdquo; in your community &mdash; the people who have come to dwell among you but remain on the outside? What would it look like to extend to them the full inheritance of belonging?",
  "The trees of verse 12 bear fruit every month and their leaves never wither, because the water flows from the sanctuary. What does it look like for you to keep your roots in the source of the river rather than drawing on your own reserves?",
];

const videoItems = [
  { videoId: "HjZcN6wZmQo", title: "Ezekiel 47: The River from the Temple (Full Study)" },
  { videoId: "JlBtP3vJbNs", title: "Going Deeper &mdash; Ankle to Unfordable in Ezekiel 47" },
  { videoId: "LnDpY8uBwLk", title: "Everything Lives Where the River Goes &mdash; Ezekiel 47:9" },
  { videoId: "NpFrT5xZfVm", title: "Ezekiel 47 and the River of Life in Revelation 22" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3
        style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }}
        dangerouslySetInnerHTML={{ __html: block.heading }}
      />
      {block.reference && (
        <div
          style={{
            color: block.accent,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: "1.1rem",
          }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          borderLeft: `3px solid ${block.accent}55`,
          paddingLeft: "1.25rem",
        }}
      >
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              color: i === 0 ? TEXT : MUTED,
              fontSize: "1.05rem",
              lineHeight: 1.85,
              margin: 0,
            }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Ezekiel47GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "Georgia, serif",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${TEAL}22`,
              color: TEAL,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Ezekiel Chapter 47
          </h1>
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: TEXT,
              lineHeight: 1.6,
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            Water Flowing from the Temple
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              color: MUTED,
              lineHeight: 1.75,
              margin: 0,
              fontStyle: "italic",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;And wherever the river goes, every living creature that swarms will live, and there will be very many fish. For this water goes there, that the waters of the sea may become fresh; so everything will live where the river goes.&rdquo; &mdash; Ezekiel 47:9",
            }}
          />
        </header>

        <nav
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1rem",
            paddingTop: "0.5rem",
            background: BG,
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? TEAL : BORDER}`,
                background: activeTab === t ? TEAL : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Overview of Ezekiel 47
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Ezekiel 47 is one of the most hopeful visions in all of Scripture. After six chapters of precise architectural detail describing the restored temple, the vision opens to water &mdash; water flowing from the temple threshold, moving eastward through four progressively deeper stages, healing the Dead Sea, making trees grow on barren banks, and restoring life everywhere it goes. The chapter closes with a land allotment that includes, for the first time in the Old Testament, full inheritance rights for the alien living among Israel. The vision is the Old Testament seed of both John 7&rsquo;s rivers of living water and Revelation 22&rsquo;s river of the water of life.",
              }}
            />
            {overviewBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Key Themes
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "The vision of Ezekiel 47 concentrates an extraordinary range of theological themes into a single chapter: the life-giving river from the sanctuary, the progressive deepening that maps the spiritual journey, the promise that everything will live where the river goes, the trees whose leaves are for healing, the inclusive welcome of the alien, and the chapter&rsquo;s place in the biblical river that runs from Eden to Revelation 22.",
              }}
            />
            {themeBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Verse by Verse
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Walking through Ezekiel 47 verse by verse reveals a carefully constructed progression: the humble beginning of the river at the threshold, the four measured depths from ankle to unfordable, the trees on both banks, the healing of the Dead Sea with its fish and fishermen, the single exception of the salt marshes, the climactic description of the ever-fruiting trees with their healing leaves, and finally the land allotment with its revolutionary provision for the resident alien.",
              }}
            />
            {verseBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Application
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Ezekiel 47 is not merely a theological vision to be admired from a distance; it is an invitation to a way of life. It asks where we are in the river, calls us to carry the life of the Spirit outward into the deadest places around us, challenges us to be both fruitful and healing, invites us to welcome the alien as a full member of the community, and calls us to the surrendered availability of one who has gone into unfordable water and is being carried by the current of God&rsquo;s life.",
              }}
            />
            {applicationBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}

            <div
              style={{
                marginTop: "1rem",
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3
                style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}
              >
                Reflection Questions
              </h3>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section
          style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}
        >
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>
            Video Teaching
          </h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Ezekiel 47 with these video teachings on the river from the temple, the four progressive depths, the healing of the Dead Sea, and the connections to the river of life in Revelation 22.",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {videoItems.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p
                  style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                  dangerouslySetInnerHTML={{ __html: v.title }}
                />
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${TEAL}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3
            style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}
          >
            Everything Lives Where the River Goes
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Ezekiel 47 gives the people of God a vision of themselves and their calling: a community through which the life-giving river of the Spirit flows outward into the deadest places of the world. The river begins humbly, at the threshold of the sanctuary, almost unnoticeable. But it deepens as it travels and arrives at the Dead Sea with enough force to heal what nothing else could touch. The trees on its banks bear fruit every month and their leaves are for healing. This is the life the Spirit makes possible &mdash; not a trickle at the ankles but an unfordable river, carrying everything toward the sea, until the Dead Sea itself is filled with fish and the sound of nets being cast from the shore.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
