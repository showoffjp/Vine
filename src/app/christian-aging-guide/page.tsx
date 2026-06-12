"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_aging_entries";

interface AGEEntry {
  id: string;
  date: string;
  theGift: string;
  theLoss: string;
  theLegacy: string;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "Proverbs 16:31 — The Crown",
    title: "Gray Hair Is a Crown of Glory: Aging as Honor, Not Decline",
    paragraphs: [
      "&ldquo;Gray hair is a crown of glory; it is gained in a righteous life&rdquo; (Prov 16:31). Scripture&rsquo;s opening word on aging is a coronation. Where the modern world reads gray hair as a problem to be dyed, delayed, and denied, the Bible reads it as regalia &mdash; the visible insignia of years walked with God, comparable to the crown on a king. Proverbs doubles down elsewhere: &ldquo;The glory of young men is their strength, but the splendor of old men is their gray hair&rdquo; (Prov 20:29) &mdash; two glories, not one glory and one decline. Youth has its strength; age has its splendor; and the proverb refuses to rank them.",
      "This is a head-on collision with the culture&rsquo;s catechism. A civilization that worships youth must logically dread aging, and ours does, spending billions to disguise it and quietly warehousing those who can no longer manage the disguise. The believer is offered an entirely different account: the lines and the gray are not the erosion of the self but the engraving of a history &mdash; each year of faithfulness recorded in the body the way rings record the seasons in an oak. &ldquo;It is gained in a righteous life&rdquo; means the crown is earned, not merely endured.",
      "Receiving this theology is itself a spiritual discipline. The aging believer must choose, sometimes daily, which story to live in: the culture&rsquo;s story of diminishing assets or Scripture&rsquo;s story of accumulating glory. The same mirror will support either reading. The doctrine of the crown does not deny the real losses of age &mdash; the Bible is bracingly honest about those &mdash; but it establishes the frame around them: what is happening to you, year by year, is not primarily subtraction. It is coronation in slow motion.",
    ],
    callout: {
      label: "Two glories",
      text: "&ldquo;The glory of young men is their strength, but the splendor of old men is their gray hair&rdquo; &mdash; Scripture names two glories and refuses to rank them. Aging is not the erosion of the self but the engraving of a history: coronation in slow motion.",
    },
  },
  {
    badge: "Psalm 92:14 — Fruit in Old Age",
    title: "They Will Still Bear Fruit in Old Age",
    paragraphs: [
      "&ldquo;The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green&rdquo; (Ps 92:12-14). The psalmist chooses his botany deliberately: the date palm bears more heavily as it ages, and the cedar of Lebanon goes on adding girth and height for a thousand years. Against every cultural assumption of decline, the psalm asserts continued productivity &mdash; not despite old age but in it: still bearing, still full of sap, still green.",
      "The condition is in the planting: &ldquo;planted in the house of the LORD.&rdquo; The fruitfulness of the aged righteous is not biological luck but the late harvest of a long rootedness &mdash; decades of worship, Scripture, prayer, and fellowship drawing up water no surface drought can touch. The fruit changes form with the seasons, of course: the fruit of the eighty-year-old is rarely the fruit of the thirty-year-old. It looks like wisdom dispensed at the right moment, prayer sustained for decades, stability that calms a whole congregation, blessing pronounced over the young. But it is fruit, and the psalm says it is still growing.",
      "Verse 15 gives the purpose clause the modern reader misses: they stay green &ldquo;to declare that the LORD is upright; he is my rock.&rdquo; The flourishing old believer is an apologetic &mdash; a living, visible argument that God keeps his people all the way home. Every elderly saint still bearing fruit is a billboard the church cannot purchase and the culture cannot refute: the proof, standing in the third pew, that the LORD is upright and there is no unrighteousness in him.",
    ],
    callout: {
      label: "The late harvest",
      text: "Palms bear more heavily with age; cedars grow for a millennium. The aged righteous &ldquo;still bear fruit&rdquo; &mdash; wisdom, prayer, stability, blessing &mdash; and their staying green is an apologetic: living proof that the LORD keeps his people all the way home.",
    },
  },
  {
    badge: "Exodus 3 &amp; Joshua 14 — Late Beginnings",
    title: "Moses at Eighty, Caleb at Eighty-Five: Give Me This Mountain",
    paragraphs: [
      "Moses was eighty years old when God spoke to him from the burning bush (Ex 7:7) &mdash; eighty, with his résumé apparently closed: a failed deliverer four decades into exile, keeping someone else&rsquo;s sheep on the back side of the desert. Everything the world would call his productive years was spent. And it was precisely then that God assigned him the work for which heaven and earth remember him: confronting Pharaoh, leading the exodus, receiving the law, forty more years of labor that did not end until, at a hundred and twenty, &ldquo;his eye was undimmed, and his vigor unabated&rdquo; (Deut 34:7). In God&rsquo;s economy, eighty was not the epilogue. It was the call.",
      "Caleb is the companion text. At eighty-five, forty-five years after Kadesh-barnea, he stands before Joshua and makes the Bible&rsquo;s greatest old-age speech: &ldquo;I am still as strong today as I was in the day that Moses sent me&hellip; So now give me this hill country of which the LORD spoke on that day&rdquo; (Josh 14:11-12) &mdash; give me this mountain. He is not asking for a pension or a quiet valley; he is requesting the hardest assignment on the map, the hill country of the Anakim, the giants who terrified Israel a generation earlier. The secret is stated five times in the chapter: he &ldquo;wholly followed the LORD.&rdquo; Wholehearted at forty, he is still wholehearted at eighty-five &mdash; the age changed; the following did not.",
      "Together the two old men dismantle the assumption that God&rsquo;s biggest assignments go to the young. Scripture&rsquo;s pattern often runs the other way: Abraham called at seventy-five, Moses at eighty, Anna prophesying at eighty-four, John receiving Revelation as an old exile. The God who is outside time is unimpressed by birthdays, and the believer&rsquo;s later decades are not a holding pattern before heaven. Somewhere in them, for those still wholly following, there may yet be a bush burning &mdash; or a mountain with your name on it.",
    ],
    callout: {
      label: "Give me this mountain",
      text: "Moses was called at eighty; Caleb claimed giant country at eighty-five. God&rsquo;s biggest assignments are not reserved for the young &mdash; for those still wholly following, the later decades may hold a burning bush, or a mountain with your name on it.",
    },
  },
  {
    badge: "Luke 2 — Anna &amp; Simeon",
    title: "The Elderly as the First Evangelists",
    paragraphs: [
      "When the infant Messiah enters his temple, the welcoming committee is two very old people. Simeon, &ldquo;righteous and devout, waiting for the consolation of Israel,&rdquo; takes the baby in his arms and preaches the first Christian sermon: &ldquo;my eyes have seen your salvation&hellip; a light for revelation to the Gentiles&rdquo; (Luke 2:25-32). Anna, a prophetess of eighty-four, widowed after seven years of marriage and worshiping in the temple &ldquo;with fasting and prayer night and day&rdquo; ever since, arrives at that very hour and &ldquo;began to give thanks to God and to speak of him to all who were waiting for the redemption of Jerusalem&rdquo; (2:36-38). Before a single apostle is called, before any miracle is performed, the good news of the incarnate Christ is recognized, announced, and celebrated &mdash; by the elderly.",
      "Luke&rsquo;s casting is not accidental. Recognition of the Messiah required exactly what long, devout age supplies: decades of waiting that had refined hope rather than extinguished it, eyes trained by a lifetime of prayer to see what hurried younger eyes would miss &mdash; God himself, six weeks old, carried in by a poor couple with two pigeons for the sacrifice. The crowds in the temple that day saw a baby. The two old saints saw salvation. Spiritual perception of that caliber is not a gift of youth; it is the compound interest of a lifetime&rsquo;s attention to God.",
      "Anna and Simeon stand as the permanent charter for elderly ministry. The first evangelist of the incarnation was an eighty-four-year-old widow; the first to bless the Christ child outside his family was an old man who had been promised he would not die before he saw the Lord&rsquo;s anointed. The aged believers in any congregation are not the church&rsquo;s past; on Luke&rsquo;s evidence they may be its sharpest eyes &mdash; the ones most likely, after all those years of watching, to recognize what God is doing when he does it quietly.",
    ],
    callout: {
      label: "Trained eyes",
      text: "The crowds saw a baby; Anna and Simeon saw salvation. Recognition of that caliber is the compound interest of a lifetime&rsquo;s attention to God &mdash; the first evangelists of the incarnation were two very old people, and the casting was not accidental.",
    },
  },
  {
    badge: "2 Corinthians 4:16 — The Inner Renewal",
    title: "Though Outwardly We Are Wasting Away",
    paragraphs: [
      "&ldquo;So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day&rdquo; (2 Cor 4:16). Paul refuses both available lies about aging: the flattering one (you&rsquo;re not really declining) and the despairing one (decline is the whole story). The outer self is wasting away &mdash; he concedes the eyes, the joints, the stamina, the diagnoses without a flicker of denial. And simultaneously, on a different ledger, the inner self is being renewed &mdash; not annually, not at major birthdays, but day by day: a daily deposit of glory running concurrently with the daily withdrawal of strength.",
      "The two processes are not merely parallel; verse 17 chains them together: &ldquo;this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison.&rdquo; Preparing &mdash; the wasting is producing something. In Paul&rsquo;s physics, the losses of age are not the random vandalism of time but a workshop in which an eternal weight is being forged, which is why he can call seven decades of affliction &ldquo;light&rdquo; and &ldquo;momentary&rdquo;: he has seen the invoice and the inheritance side by side. The aging body is scaffolding coming down as the permanent structure nears completion.",
      "Hence the practical secret of verse 18: &ldquo;we look not to the things that are seen but to the things that are unseen.&rdquo; The believer who measures by the seen &mdash; the mirror, the chart, the shrinking circle of mobility &mdash; will lose heart on schedule. The believer who has learned to watch the unseen ledger discovers what every observer of godly old saints has noticed: people whose bodies are visibly failing and whose souls are visibly enlarging, often in the same season, often in the same week. The outer wasting is real. So is the inner renewal. Only one of them is permanent.",
    ],
    callout: {
      label: "Two ledgers",
      text: "Paul concedes the decline without denial and announces the renewal without flattery: outer self wasting, inner self renewed day by day &mdash; and the wasting is preparing a weight of glory. The body is scaffolding coming down as the permanent structure nears completion.",
    },
  },
  {
    badge: "Exodus 20:12 — The Fifth Commandment",
    title: "Honor Your Father and Mother: A Society Measured by Its Elders",
    paragraphs: [
      "&ldquo;Honor your father and your mother, that your days may be long in the land&rdquo; (Ex 20:12). The fifth commandment is the hinge of the Decalogue &mdash; first of the commands governing human relationships, and the only one with a promise attached. While it begins with children in the home, its reach in Israel&rsquo;s law extends explicitly to old age: &ldquo;You shall stand up before the gray head and honor the face of an old man, and you shall fear your God: I am the LORD&rdquo; (Lev 19:32). Note the grammar of that verse &mdash; honoring the aged and fearing God stand in the same sentence, as one act. A society&rsquo;s treatment of its old people is, in biblical accounting, a direct readout of its reverence for God.",
      "The command cuts against both ancient neglect and the modern variety. Jesus reserved some of his sharpest words for the religious technicality (corban) by which a man could dedicate his wealth to God and thereby dodge supporting his aging parents &mdash; &ldquo;making void the word of God&rdquo; (Mark 7:9-13). Paul makes provision for aging family members a test of the faith itself: whoever fails to provide for relatives, &ldquo;and especially for members of his household&hellip; has denied the faith and is worse than an unbeliever&rdquo; (1 Tim 5:8). And the command&rsquo;s most tender fulfillment is Jesus himself, who in the agony of crucifixion arranged his mother&rsquo;s care: &ldquo;Behold, your mother&rdquo; (John 19:27).",
      "For the aging believer, the commandment is also a dignity to be received. Your latter years are not a burden the commandment grudgingly manages; they are the object of one of the ten foundation stones of biblical ethics, with divine promise riding on their honor. A culture that segregates and forgets its elders is not merely unkind; by Leviticus&rsquo;s grammar, it is irreverent. The church, wherever it stands up before the gray head &mdash; in its esteem, its budgets, its visitation, its platforms &mdash; is not performing charity. It is keeping commandment number five.",
    ],
    callout: {
      label: "One sentence",
      text: "&ldquo;Stand up before the gray head&hellip; and you shall fear your God&rdquo; &mdash; Leviticus puts honoring the aged and revering God in the same sentence, as one act. A society&rsquo;s treatment of its elders is a direct readout of its reverence for its Maker.",
    },
  },
  {
    badge: "Vocation — No Retirement Clause",
    title: "Vocation Never Retires: A Theology for After the Career",
    paragraphs: [
      "Retirement, as a life stage, is a modern invention &mdash; an artifact of pension systems barely a century old &mdash; and Scripture, unsurprisingly, contains almost no theology of it. The single biblical retirement provision (Levites stepping back from heavy tabernacle labor at fifty, Num 8:25-26) proves the larger rule: the retiring Levite was relieved of the lifting, but he was to &ldquo;minister to his brothers&hellip; by keeping guard.&rdquo; The job ended; the service did not. Scripture knows careers that conclude. It knows no discharged disciples.",
      "This distinction &mdash; career versus calling &mdash; is the load-bearing wall of a Christian theology of the later years. A career is a particular, paid assignment within the larger vocation of following Christ; it can and usually should end. The vocation itself &mdash; to love God, love neighbor, make disciples, do justice, pray without ceasing &mdash; carries no age limit and no severance date. The danger of modern retirement is not rest, which is biblical, but the cultural script that comes bundled with it: that the remaining decades are essentially consumption &mdash; a long weekend at the end of life. For a disciple, twenty or thirty post-career years are not a weekend. They are a deployment &mdash; arguably the freest one of the whole life: financial pressure reduced, schedule liberated, skills at their ripest, and nothing left to prove to anyone.",
      "The question for the aging believer is therefore not &ldquo;when do I retire?&rdquo; but &ldquo;to what is God redeploying me?&rdquo; The answers in any healthy church are visible: the retired teacher tutoring refugee children, the retired builder on the missions team, the retired executive mentoring young fathers, the great-grandmother running the prayer chain like a command center. Moses&rsquo; greatest work began at eighty; Anna&rsquo;s ministry was her ninth decade. The pension may start. The vocation never does stop &mdash; it only changes assignments.",
    ],
    callout: {
      label: "Careers end; callings don&rsquo;t",
      text: "Scripture knows careers that conclude but no discharged disciples. The post-career decades are not a long weekend at the end of life &mdash; they are a deployment, often the freest of the whole life. The question is not &ldquo;when do I retire?&rdquo; but &ldquo;to what is God redeploying me?&rdquo;",
    },
  },
  {
    badge: "Psalm 90:12 — Memento Mori",
    title: "Teach Us to Number Our Days: The Wisdom of a Counted Life",
    paragraphs: [
      "&ldquo;So teach us to number our days that we may get a heart of wisdom&rdquo; (Ps 90:12). The prayer comes from the oldest psalm in the Psalter, attributed to Moses, and it sits inside an unflinching meditation on mortality: our years are &ldquo;like a dream,&rdquo; like grass that flourishes in the morning and withers by evening; &ldquo;the years of our life are seventy, or even by reason of strength eighty&hellip; they are soon gone, and we fly away&rdquo; (90:5-10). Moses does not ask God to extend the days. He asks God to teach him to count them &mdash; because, strangely, the creature who can count everything else avoids this one arithmetic with all his strength.",
      "The church historically called this discipline memento mori &mdash; remember that you die &mdash; and far from morbid, it was understood as the doorway to wisdom the psalm says it is. The uncounted life drifts on the assumption of endlessness: reconciliations postponed, callings deferred, decades dissolved into the trivial, because there will always be time. Numbering the days breaks the spell. The person who knows the days are finite begins, automatically, to weigh them &mdash; and weighty things (love, forgiveness, legacy, God) start crowding out weightless ones. Aging is, in this sense, a severe mercy: it makes the arithmetic harder to avoid. Every funeral of a friend, every new limitation, is the syllabus of Psalm 90.",
      "And for the Christian, the counting is done in daylight. The same Moses prays in the next breath, &ldquo;Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days&rdquo; (90:14) &mdash; numbered days and gladness in the same prayer. Christ has gone through death and come back out the far side; for those in him, the counted days run toward a homecoming, not a cliff edge. The believer numbers his days neither in denial nor in dread, but the way a traveler counts the last miles before home: soberly, and with rising anticipation.",
    ],
    callout: {
      label: "Severe mercy",
      text: "Moses doesn&rsquo;t ask for more days &mdash; he asks to learn to count them, because counted days get weighed, and weighty things crowd out weightless ones. For those in Christ, the arithmetic runs toward a homecoming: the last miles before home, counted with rising anticipation.",
    },
  },
  {
    badge: "Psalm 71:18 — Legacy &amp; Blessing",
    title: "Till I Declare Your Power to the Next Generation",
    paragraphs: [
      "&ldquo;So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come&rdquo; (Ps 71:18). Psalm 71 is the Psalter&rsquo;s great old-age prayer, and its logic is striking: the psalmist asks for continued life not to enjoy it but to finish a transmission. He has a lifetime&rsquo;s evidence in custody &mdash; &ldquo;O God, from my youth you have taught me, and I still proclaim your wondrous deeds&rdquo; (71:17) &mdash; and he regards dying before handing it on the way a courier would regard dying with the dispatches undelivered. The old believer is not a relic of the faith. He is its courier to people not yet born.",
      "This is the Bible&rsquo;s standing pattern for the last season: the aged blessing and equipping the young. Dying Jacob gathers twelve sons and blesses each one (Gen 49); Moses spends Deuteronomy &mdash; the last month of his life &mdash; preaching memory to a generation that never saw Egypt; David stockpiles materials and charges Solomon to build what he himself will never see (1 Chron 28-29); Paul, &ldquo;already being poured out as a drink offering,&rdquo; writes to Timothy of grandmother Lois and mother Eunice, and commands the relay: &ldquo;what you have heard from me&hellip; entrust to faithful men, who will be able to teach others also&rdquo; (2 Tim 1:5, 2:2). In every case the question that organizes old age is not &ldquo;what do I still have?&rdquo; but &ldquo;what must I still hand over?&rdquo;",
      "Legacy, biblically, is therefore mostly not money &mdash; it is testimony, wisdom, and blessing, delivered in person while there is time. One generation &ldquo;shall commend your works to another&rdquo; (Ps 145:4); the things our fathers told us &ldquo;we will not hide from their children, but tell to the coming generation&rdquo; (Ps 78:3-4). Every aging believer holds dispatches no one else carries: answered prayers, survived valleys, sins forgiven, providences observed over decades. The final assignment is to deliver them &mdash; to grandchildren, to the young families in the next pew, to anyone who will listen &mdash; until the courier&rsquo;s bag is empty and the psalmist&rsquo;s prayer is finished: I have proclaimed your might to another generation. Now I can come home.",
    ],
    callout: {
      label: "The courier",
      text: "Psalm 71 asks for old age extended for one purpose: to finish a transmission. The aging believer is not a relic of the faith but its courier to people not yet born &mdash; and the organizing question of the last season is not &ldquo;what do I still have?&rdquo; but &ldquo;what must I still hand over?&rdquo;",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Numbering the Days &mdash; A Psalm 90 Examen",
    summary:
      "A weekly practice of holy arithmetic: facing the finitude of your days before God, not to darken them but to weigh them &mdash; the doorway, the psalm promises, to a heart of wisdom.",
    steps: [
      "Once a week &mdash; Sunday evening suits many &mdash; pray Psalm 90 slowly and aloud, all of it, letting Moses say the hard parts (&ldquo;they are soon gone, and we fly away&rdquo;) so you don&rsquo;t have to find the courage to say them first.",
      "Do the actual arithmetic once, on paper. If the days of our years are seventy or eighty, roughly how many remain at your age &mdash; how many summers, how many family Christmases, how many Sundays? The number will be smaller than the soul assumed. That shock is the medicine, not a side effect.",
      "Ask the weighing question: &ldquo;If the count is right, what becomes urgent &mdash; and what becomes absurd?&rdquo; Write both lists. Reconciliations, words of blessing, and unfinished obedience migrate to the first list; most of what fills the calendar migrates to the second.",
      "Choose one item from the urgent list and put it in the coming week &mdash; the phone call, the letter, the apology, the visit. Numbered days are only wisdom if they change a calendar.",
      "Close with verse 14 &mdash; &ldquo;Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days&rdquo; &mdash; and with the Christian&rsquo;s amendment to the arithmetic: in Christ, the counted days run toward a homecoming. Then record the week&rsquo;s gift, loss, and legacy in the Journal tab.",
    ],
    anchor: "Psalm 90:12 &mdash; &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo;",
  },
  {
    number: "02",
    title: "The Gratitude Inventory &mdash; Naming the Gifts of This Season",
    summary:
      "A discipline of deliberate noticing: regularly naming what this season of life gives that no earlier season could &mdash; because the culture will only ever show you the subtractions.",
    steps: [
      "Daily or several times a week, name one gift that belongs specifically to your current age &mdash; not gifts in spite of it, but gifts of it: freedom from old ambitions, mornings without an alarm, grandchildren, perspective that no longer panics, friendships measured in decades, prayers you&rsquo;ve watched God answer across forty years.",
      "Write them in the Journal tab&rsquo;s first field. The discipline matters because the mind, coached by the culture, keeps an automatic ledger of losses; the gifts must be counted on purpose or they are not counted at all.",
      "Once a month, review the accumulating list and read it aloud as thanksgiving. Psalm 103&rsquo;s structure is the model: &ldquo;Bless the LORD, O my soul, and forget not all his benefits&rdquo; &mdash; the psalmist commands his own soul to remember, because forgetting is the default.",
      "Share the gifts out loud with someone younger. Saying &ldquo;here is what is actually good about being seventy&rdquo; to a thirty-five-year-old is a rare act of counter-cultural witness &mdash; most young people have never once heard aging described by a believer as gain.",
      "When a hard day makes the exercise feel false, do it anyway, smaller: one true thing. The inventory is not a denial of the losses (Practice 03 faces those squarely); it is the refusal to let the losses write the whole account.",
    ],
    anchor: "Psalm 92:14 &mdash; &ldquo;They still bear fruit in old age; they are ever full of sap and green.&rdquo;",
  },
  {
    number: "03",
    title: "Grieving the Losses Honestly &mdash; Lament Without Denial",
    summary:
      "The companion practice to gratitude: bringing the real losses of aging &mdash; strength, roles, people, possibilities &mdash; to God in honest lament, because losses that are never grieved calcify into bitterness or denial.",
    steps: [
      "Name the loss precisely, to God, in private. Not &ldquo;getting older is hard&rdquo; but the specific thing: the career identity that ended, the knees that ended the hiking, the driver&rsquo;s license, the friend buried last spring, the house downsized away, the future that will now not happen. Vague grief cannot be processed; named grief can.",
      "Use the Psalter&rsquo;s lament grammar &mdash; address, complaint, trust, petition. &ldquo;Lord, I loved that work and it is gone, and some mornings I do not know who I am without it. But you have been my hope, O Lord, from my youth (Ps 71:5). Show me what this season is for.&rdquo; Lament is not weak faith; it is faith refusing to either lie or leave.",
      "Refuse the two counterfeit comforts: stoic minimizing (&ldquo;others have it worse&rdquo;) and spiritual bypassing (&ldquo;a Christian shouldn&rsquo;t feel this&rdquo;). Paul&rsquo;s honesty is the warrant &mdash; &ldquo;our outer self is wasting away&rdquo; concedes the loss in full before announcing the renewal. Denial is not faith; it is just denial with verses attached.",
      "Record the loss in the Journal&rsquo;s second field &mdash; honestly grieved, in writing. Over time, the entries become something unexpected: a map of grace, where you can see what God did with each surrendered loss.",
      "Watch for the exchange. The pattern of 2 Corinthians 4:16-17 is that the wasting and the weight of glory run concurrently &mdash; so after each honest lament, ask: &ldquo;What is being renewed in me, day by day, in the same season this was taken?&rdquo; The question does not erase the loss. It locates it inside a larger transaction.",
    ],
    anchor: "2 Corinthians 4:16 &mdash; &ldquo;Though our outer self is wasting away, our inner self is being renewed day by day.&rdquo;",
  },
  {
    number: "04",
    title: "The Redeployment &mdash; Finding the Vocation After the Career",
    summary:
      "A structured discernment for the post-career years (or any late transition): identifying the assignment God has prepared for the freest, ripest decades of a working life &mdash; because careers end and disciples don&rsquo;t.",
    steps: [
      "Take stock of the new capital. List what this season holds that your working decades never did: discretionary time, accumulated skill, a lifetime&rsquo;s relationships, financial margin (whatever its size), and nothing left to prove. This is not a diminished portfolio; it is a different and in some ways richer one.",
      "Ask the redeployment questions in prayer over several weeks: What needs do I now see that I was too busy to see? What did I always sense God nudging me toward that the career crowded out? Where do younger people already seek me out? What would I do for free that someone needs done?",
      "Consult your church&rsquo;s actual needs. Most congregations are critically short of exactly what the retired possess: weekday availability, mentoring capacity, pastoral patience, administrative experience, and intercessors with time to intercede. Ask a pastor directly: &ldquo;If I gave you ten hours a week, where would they matter most?&rdquo;",
      "Start with one commitment, sized honestly to your energy &mdash; Caleb asked for a mountain, but he had scouted it first. A weekly tutoring slot, one young couple mentored, one ministry team joined. Let it grow from faithfulness, not from the guilt of an empty calendar.",
      "Hold it with open hands and review it yearly. Late-season vocations change as health and circumstances change &mdash; the assignment at sixty-eight may not be the assignment at eighty-one. Anna&rsquo;s ministry in her ninth decade was prayer and proclamation within walking distance of the temple court. The faithfulness, not the scale, is the obedience.",
    ],
    anchor: "Joshua 14:12 &mdash; &ldquo;So now give me this hill country of which the LORD spoke on that day.&rdquo;",
  },
  {
    number: "05",
    title: "The Legacy Letters &mdash; Writing Down What Must Not Die With You",
    summary:
      "The deliberate transmission Psalm 71 prays for: putting your testimony, wisdom, and blessing into durable form &mdash; letters, recordings, a written witness &mdash; for the people who will outlive you.",
    steps: [
      "List the dispatches you carry that no one else does: the story of how you came to faith; the answered prayers only you witnessed; the valley God brought you through; the mistakes you&rsquo;d spare your grandchildren; the marriage lessons; the verses that held when nothing else did. You are the only living courier of this material.",
      "Write one legacy letter per recipient &mdash; each child, each grandchild, perhaps a godchild or a young believer you&rsquo;ve mentored. Not a memoir: two or three pages. What I want you to know about God from my life. What I see in you. My blessing on you, by name. Jacob blessed each son individually (Gen 49:28); generic blessing is half a blessing.",
      "Record the voice if you can &mdash; a phone&rsquo;s voice memo of you telling your conversion story or praying for each grandchild by name will one day be among the most treasured artifacts your family owns. Psalm 145:4 is a relay of speech: one generation shall commend your works to another.",
      "Deliver some of it while you are alive. The deathbed letter has its place, but Deuteronomy is Moses blessing Israel to their faces. A spoken word of blessing &mdash; &ldquo;I see God&rsquo;s hand on you; here is what I am asking him for, for you&rdquo; &mdash; lands with a weight no inheritance matches, and you get to see it land.",
      "Use the Journal&rsquo;s third field to build the material: each entry&rsquo;s &ldquo;legacy&rdquo; line &mdash; what I want to pass on &mdash; becomes a quarry for the letters. Review quarterly and ask the courier&rsquo;s question: if the bag had to be handed over this year, what would still be in it undelivered?",
    ],
    anchor: "Psalm 71:18 &mdash; &ldquo;Even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation.&rdquo;",
  },
  {
    number: "06",
    title: "Intercessor-in-Residence &mdash; The Ministry of Anna",
    summary:
      "Adopting the ministry that no infirmity can end and no committee can replace: sustained, informed, persistent prayer for the church and the next generation &mdash; the vocation Anna exercised into her ninth decade.",
    steps: [
      "Claim the office deliberately. Anna &ldquo;did not depart from the temple, worshiping with fasting and prayer night and day&rdquo; (Luke 2:37) &mdash; not a consolation ministry for the sidelined but the engine room of the church. Decide that you are becoming, on purpose, one of your congregation&rsquo;s intercessors-in-residence.",
      "Build the list with names, not categories: your pastor and his family, each grandchild, the church&rsquo;s young families, the missionaries on the wall, the prodigals you know of, the unbelieving friends of fifty years. Specific intercession requires intelligence &mdash; ask people what to pray for them, and tell them you are praying. The phrase &ldquo;I pray for you every day&rdquo; from an elder is, for many young people, an anchor they remember for decades.",
      "Attach the prayer to fixed hours so it survives the days when feeling fails &mdash; morning coffee for the family list, the noon news for the world, evening for the church. The elderly intercessor&rsquo;s great asset is the very thing the working years lacked: time enough to pray without watching the clock.",
      "Keep records and report answers. A prayer notebook with dates turns intercession into testimony &mdash; when the prodigal comes home or the missionary&rsquo;s visa clears, you hold the receipts, and telling the young &ldquo;I prayed for this for eleven years; look what God did&rdquo; is Psalm 71:18 performed live.",
      "Let the ministry scale with your strength, down to the last. When eyes fail, pray the memorized psalms; when the body is housebound, the intercession travels anyway. This is the one assignment aging cannot revoke &mdash; the final form of bearing fruit in old age, ever full of sap and green.",
    ],
    anchor: "Luke 2:37-38 &mdash; &ldquo;She did not depart from the temple, worshiping with fasting and prayer night and day&hellip; and began to give thanks to God and to speak of him to all.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "J.I. Packer",
    role: "Finishing Our Course with Joy &mdash; The Theologian&rsquo;s Charge Against Coasting",
    quote:
      "Aging is not for wimps&hellip; My contention is that, so far as our bodily health allows, we should aim to be found running the last lap of the race of our Christian life, as we would say, flat out. The final sprint, so I urge, should be a sprint indeed&hellip; Racing, of course, is essentially a young man&rsquo;s game; but my point is that older Christians should still embody the running mentality &mdash; should still be found, in spirit, going flat out for God.",
    bio: "J.I. Packer (1926-2020), the British-Canadian theologian whose Knowing God shaped generations of evangelicals, wrote Finishing Our Course with Joy in his late eighties as a deliberate broadside against the most seductive heresy of Christian old age: coasting. Drawing on Hebrews 12&rsquo;s racing imagery, Packer argued that the Western retirement dream &mdash; decades of leisure as the reward for decades of work &mdash; has no standing in discipleship; the New Testament knows finish lines, and finish lines are for sprinting through, not strolling toward. He wrote with the authority of demonstration: into his nineties, half-blind from a childhood head injury that had marked his whole life and finally robbed of the reading that was his oxygen, he kept teaching, writing, and mentoring at Regent College, treating each remaining capacity as a stewardship rather than mourning each lost one as a verdict. His counsel to the aging was bracingly specific &mdash; keep learning, keep serving, keep evangelizing, expect that ripeness of judgment and depth of soul are old age&rsquo;s special endowments for ministry &mdash; and his definition of the goal reframed the entire season: glorifying God in one&rsquo;s aging, he insisted, is the last great assignment of the Christian life, and joy, not mere endurance, is its required spirit. He finished his own course in 2020, having sprinted, by every account, through the tape.",
  },
  {
    name: "Billy Graham",
    role: "Nearing Home &mdash; The Evangelist&rsquo;s Honest Report from Old Age",
    quote:
      "All my life I was taught how to die as a Christian, but no one ever taught me how I ought to live in the years before I die. I wish they had because I am an old man now, and believe me, it&rsquo;s not easy&hellip; But old age is not a surprise to God, and He has a purpose for these years. Growing old has been the greatest surprise of my life &mdash; and I am convinced it can be a time of rich blessing, for God&rsquo;s plan for us doesn&rsquo;t end until He calls us home.",
    bio: "Billy Graham (1918-2018) preached the gospel in person to more human beings than anyone in history, and then, in his nineties &mdash; widowed, housebound, with Parkinson&rsquo;s, macular degeneration, and hearing loss steadily closing the doors of the body &mdash; wrote Nearing Home, the most candid book on aging the evangelical world has produced. Its power is its refusal of triumphalism: the man who had filled stadiums on every continent admitted openly that no one had taught him how to grow old, that the loss of his wife Ruth and of his strength grieved him, and that the temptation to feel useless was real even for him. From inside that honesty he built the book&rsquo;s argument: God&rsquo;s purposes do not retire when the body does. Stripped of crusades and platforms, Graham discovered the ministries that remained &mdash; prayer, testimony, blessing his family, and modeling for a watching world what it looks like to approach death with unshaken hope &mdash; and concluded that these were not the leftovers of his calling but its final chapter, assigned by the same God who had assigned the stadiums. His governing image gave the book its title: old age as nearing home &mdash; not a deterioration to be endured but an approach to be made well, with the traveler packing deliberately, blessing those who will remain, and watching the lights of home grow brighter. He reached it in 2018, at ninety-nine.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "Founder of Joni and Friends &mdash; Five Decades of Glory in a Wasting Body",
    quote:
      "Most people think that living with quadriplegia for over fifty years is a tragedy. But I&rsquo;ve learned that the weaker I am, the harder I must lean on God &mdash; and the harder I lean on Him, the stronger I discover Him to be. My wheelchair was the prison God used to set my soul free&hellip; Outwardly I am wasting away, yet inwardly I am being renewed day by day. I would rather be in this chair knowing Him than on my feet without Him.",
    bio: "Joni Eareckson Tada (b. 1949) broke her neck in a diving accident at seventeen and has now lived more than five decades as a quadriplegic &mdash; decades that added chronic pain, two bouts of cancer, and the accelerating frailties of aging in a paralyzed body &mdash; making her the church&rsquo;s most credentialed living teacher of 2 Corinthians 4:16. Her authority on aging is unique in kind: what most people meet at seventy-five &mdash; dependence on others for dressing and bathing, a body that will not obey, the daily negotiation with pain, the long arithmetic of limitation &mdash; Joni has been living and theologizing since Lyndon Johnson was president, and she reports from that territory not survival but flourishing: bearing fruit on a scale few able-bodied believers approach, through Joni and Friends, which has delivered wheelchairs and the gospel to disabled people in over a hundred countries, through dozens of books, and through a ministry of sung and spoken hope conducted from the wheelchair she once begged God to remove. Her message to the aging church is her life&rsquo;s thesis: the wasting of the outer self is real and may be grieved honestly &mdash; she has never romanticized paralysis or pain &mdash; but it is also the very site where God concentrates inner renewal, since the weaker the vessel, the less ambiguous the source of the power (2 Cor 4:7). For believers watching their own bodies fail, Joni is the proof, half a century deep, that the two ledgers of 2 Corinthians 4 are both true at once &mdash; and that the second one wins.",
  },
  {
    name: "Paul Tournier",
    role: "Learn to Grow Old &mdash; The Physician of the Person on the Second Career",
    quote:
      "The fruitfulness of old age is of a different kind from that of the years of activity&hellip; What matters in the second half of life is no longer what one does, but what one is. Society asks of the old not work, but presence &mdash; wisdom, warmth, the acceptance which the young, harassed by competition, cannot find elsewhere. To learn to grow old is to learn this new vocation: the passage from doing to being.",
    bio: "Paul Tournier (1898-1986), the Swiss physician whose &ldquo;medicine of the person&rdquo; integrated medical practice, psychology, and a deep Protestant faith, wrote Learn to Grow Old in his seventies as both prescription and self-experiment &mdash; the doctor applying to his own aging the whole-person care he had given patients for half a century. His diagnosis remains the sharpest in the literature: Western culture, by reducing persons to their productive function, has made retirement an amputation of identity &mdash; and the epidemic of post-retirement depression, decline, and death he observed clinically was, he argued, less biological than vocational: men and women dying of meaninglessness on schedule. His prescription was the &ldquo;second career&rdquo; &mdash; not a hobby to fill hours but a genuine new vocation, prepared for in middle age and pursued with seriousness: service, mentoring, learning, and above all the cultivation of being over doing, since what the old uniquely offer &mdash; presence, acceptance, wisdom, unhurried attention &mdash; is precisely what a competitive society starves for. An orphan by age six who understood abandonment from inside, Tournier insisted that the deepest preparation for old age is neither financial nor medical but personal and spiritual: the one who has built an interior life with God ages into wealth, while the one who built only a career ages into bankruptcy. His book&rsquo;s thesis compresses into one sentence of standing counsel: growing old is not a fate to be suffered but a vocation to be learned &mdash; and like all vocations, it goes best begun early.",
  },
  {
    name: "John Stott",
    role: "The Radical Disciple &mdash; The Last Chapter: Dependence as Discipleship",
    quote:
      "I sometimes hear old people, including Christian people who should know better, say, &lsquo;I don&rsquo;t want to be a burden to anyone else. I&rsquo;m happy to carry on living so long as I can look after myself, but as soon as I become a burden I would rather die.&rsquo; But this is wrong. We are all designed to be a burden to others. You are designed to be a burden to me and I am designed to be a burden to you. And the life of the family, including the life of the local church family, should be one of &lsquo;mutual burdensomeness.&rsquo;",
    bio: "John Stott (1921-2011), rector of All Souls Langham Place and the chief architect of twentieth-century global evangelicalism &mdash; framer of the Lausanne Covenant, author of Basic Christianity and The Cross of Christ &mdash; wrote his final book, The Radical Disciple, at eighty-eight from the College of St Barnabas, a retirement home for Anglican clergy, and devoted its closing chapters to the discipleship nobody volunteers for: dependence and death. The chapter on dependence is the most countercultural thing the great independent ever wrote. Recently fallen, hospitalized, and needing help with what he delicately declined to specify, Stott turned his own humiliation into exegesis: bearing one another&rsquo;s burdens is how the law of Christ is fulfilled (Gal 6:2), which means someone must do the being-borne &mdash; and the aged disciple&rsquo;s final assignment may be to receive care graciously, modeling for the church that dependence is not the failure of dignity but the design of love. He noted that Jesus himself ended not in activity but in passion &mdash; being done to, handed over &mdash; and that the believer&rsquo;s trajectory from doing to being-done-for follows the Master&rsquo;s. Stott practiced the chapter he preached: he died at the College in 2011, listening to Handel&rsquo;s Messiah, having shown a generation that had watched him model preaching, scholarship, and simplicity how a radical disciple does the last thing too &mdash; letting himself, at the end, be carried.",
  },
  {
    name: "Dallas Willard",
    role: "Renovation of the Heart; The Divine Conspiracy &mdash; Aging as the Ripening of an Eternal Person",
    quote:
      "We should&hellip; think of our destiny as being absorbed in a tremendously creative team effort, with unimaginably splendid leadership, on an inconceivably vast plane of activity. This is the &lsquo;eye hath not seen, neither ear heard&rsquo; that lies before us in the prophetic vision. Your eternal destiny is not cosmic retirement&hellip; The least of us, in the life to come, will have powers and responsibilities &mdash; and growing old here is simply part of the training.",
    bio: "Dallas Willard (1935-2013), the USC philosopher who became the modern church&rsquo;s premier teacher of spiritual formation, gave aging Christians something rarer than comfort: a metaphysic. His central claim &mdash; that every human being is &ldquo;an unceasing spiritual being with an eternal destiny in God&rsquo;s great universe&rdquo; &mdash; quietly detonates the entire cultural framing of old age, for if the person is not the body but an embodied soul in training for an unimaginably active eternity, then the decades the world reads as decline are actually late-stage formation: character heading into its final fitting before larger responsibilities. Willard taught that God&rsquo;s primary project in any life is not the résumé but the person &mdash; &ldquo;the formation of the inner life takes precedence, because the inner life is what we will take with us&rdquo; &mdash; which makes old age, with its enforced subtraction of performance and reputation, not formation&rsquo;s end but its most concentrated phase: the soul, stripped of scaffolding, doing its last and deepest work. His vision of what follows was famously concrete: not clouds and cosmic retirement but reigning with Christ, creative work, responsibility matched to the character formed here &mdash; so that the proper question of one&rsquo;s seventies and eighties is &ldquo;what kind of person am I becoming for what is next?&rdquo; Willard met his own death in 2013 with a serenity colleagues still recount &mdash; his reported last words were &ldquo;thank you&rdquo; &mdash; and his counsel compresses the whole theology of this guide: live your years here, all of them, as the early chapters of an unceasing life.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Proverbs 16:31",
    text: "Gray hair is a crown of glory; it is gained in a righteous life.",
    reflection:
      "Scripture&rsquo;s opening word on aging is a coronation, not a condolence. Where the culture reads gray hair as a problem to be dyed and denied, the Bible reads it as regalia &mdash; the visible record of years walked with God. The aging believer chooses daily which story to live in: diminishing assets or accumulating glory. The same mirror supports either reading; only one of them is true.",
  },
  {
    reference: "Psalm 92:12-14",
    text: "The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green.",
    reflection:
      "The botany is deliberate: date palms bear more heavily with age, and cedars grow for a thousand years. The condition is the planting &mdash; decades of rootedness in God&rsquo;s house drawing up water no drought of age can touch. The fruit changes form (wisdom, intercession, stability, blessing), but it is fruit, still growing &mdash; and verse 15 names its purpose: the flourishing old believer is living proof &ldquo;that the LORD is upright.&rdquo;",
  },
  {
    reference: "Joshua 14:10-12",
    text: "And now, behold, I am this day eighty-five years old. I am still as strong today as I was in the day that Moses sent me&hellip; So now give me this hill country of which the LORD spoke on that day.",
    reflection:
      "Caleb at eighty-five does not request a quiet valley; he claims giant country &mdash; the hardest assignment on the map. The chapter gives his secret five times: he &ldquo;wholly followed the LORD,&rdquo; and the following did not retire when the age changed. Read alongside Moses, called at eighty: God&rsquo;s biggest assignments are not reserved for the young, and somewhere in the believer&rsquo;s later decades there may yet be a mountain with your name on it.",
  },
  {
    reference: "Luke 2:36-38",
    text: "And there was a prophetess, Anna&hellip; advanced in years&hellip; She did not depart from the temple, worshiping with fasting and prayer night and day. And coming up at that very hour she began to give thanks to God and to speak of him to all who were waiting for the redemption of Jerusalem.",
    reflection:
      "The first evangelists of the incarnation were two very old people. The crowds in the temple saw a baby; Anna and Simeon saw salvation &mdash; perception that is the compound interest of a lifetime&rsquo;s attention to God. The aged believers in any congregation are not the church&rsquo;s past; on Luke&rsquo;s evidence they may be its sharpest eyes, the most likely to recognize what God is doing when he does it quietly.",
  },
  {
    reference: "2 Corinthians 4:16-18",
    text: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.",
    reflection:
      "Paul refuses both lies about aging: the flattering one (no real decline) and the despairing one (decline is everything). Two ledgers run concurrently &mdash; outer wasting, daily inner renewal &mdash; and they are chained by &ldquo;preparing&rdquo;: the losses are forging a weight of glory. The believer who measures only by the seen loses heart on schedule; the one watching the unseen ledger finds the body is scaffolding coming down as the permanent structure nears completion.",
  },
  {
    reference: "Psalm 71:17-18",
    text: "O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come.",
    reflection:
      "The Psalter&rsquo;s great old-age prayer asks for extended life for one purpose: to finish a transmission. The old believer is the faith&rsquo;s courier to people not yet born, holding dispatches no one else carries &mdash; answered prayers, survived valleys, providences observed across decades. The organizing question of the last season is not &ldquo;what do I still have?&rdquo; but &ldquo;what must I still hand over?&rdquo; &mdash; and the courier does not rest until the bag is empty.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "kZ8YpVxGFXM", title: "Gray Hair Is a Crown of Glory &mdash; Aging as Honor, Not Decline" },
  { videoId: "Qz5cLPwkR7c", title: "Still Bearing Fruit in Old Age &mdash; Praying Psalm 92" },
  { videoId: "3N4cVxK8s2w", title: "Moses at Eighty, Caleb at Eighty-Five &mdash; Give Me This Mountain" },
  { videoId: "mVx9JdcWQzo", title: "Anna and Simeon &mdash; The Elderly as the First Evangelists" },
  { videoId: "8FjL2pXcN4M", title: "Wasting Away, Renewed Day by Day &mdash; 2 Corinthians 4:16" },
  { videoId: "wZc6T9DqJxA", title: "Numbering Our Days &mdash; Legacy and the Next Generation" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianAgingGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<AGEEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theGift, setTheGift] = useState("");
  const [theLoss, setTheLoss] = useState("");
  const [theLegacy, setTheLegacy] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as AGEEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!theGift.trim() || !theLegacy.trim()) return;
    const entry: AGEEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theGift: theGift.trim(),
      theLoss: theLoss.trim(),
      theLegacy: theLegacy.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheGift("");
    setTheLoss("");
    setTheLegacy("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              The Crown &amp; the Late Harvest
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Aging: Still Bearing Fruit in Old Age
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Bible calls gray hair a crown, called Moses at eighty, gave Caleb a mountain at
              eighty-five, and cast two elderly saints as the first evangelists of the incarnation. In
              a culture that worships youth and dreads every birthday after forty, this guide traces
              Scripture&rsquo;s startlingly different account of aging &mdash; honor, late fruit,
              daily inner renewal, vocation that never retires, days numbered toward home &mdash; and
              builds the practices of a season whose final assignment is to hand the faith, in person,
              to the generation coming after.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;They still bear fruit in old age; they are ever full of sap and green, to
                declare that the LORD is upright; he is my rock.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 92:14-15</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Nine studies in the theology of aging &mdash; the crown of gray hair, the late fruit
                of Psalm 92, Moses and Caleb&rsquo;s old-age assignments, Anna and Simeon as the first
                evangelists, the two ledgers of 2 Corinthians 4:16, the fifth commandment&rsquo;s
                charge to honor the aged, the vocation that survives every retirement, the numbered
                days of Psalm 90, and the courier&rsquo;s final delivery of Psalm 71.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GOLD,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                    dangerouslySetInnerHTML={{ __html: section.badge }}
                  />
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(217, 119, 6, 0.07)",
                        border: "1px solid rgba(217, 119, 6, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Aging, in Scripture, is coronation, late harvest, redeployment, and final delivery
                  &mdash; the one season the culture has wholly miscatalogued. Continue into the
                  vocational questions in{" "}
                  <Link href="/christian-retirement" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Retirement
                  </Link>
                  , explore the broader season in{" "}
                  <Link href="/aging-well-christian" style={{ color: GOLD, textDecoration: "underline" }}>
                    Aging Well
                  </Link>
                  , or face the last enemy in the light of resurrection in the{" "}
                  <Link href="/death-dying-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                    Death &amp; Dying Guide
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices for aging on purpose &mdash; numbering the days, the gratitude inventory
                of the season&rsquo;s gifts, honest lament for its losses, the redeployment after the
                career, the legacy letters, and the intercessor&rsquo;s office that no infirmity can
                revoke. The season is not a waiting room; it has work.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2
                      style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}
                      dangerouslySetInnerHTML={{ __html: practice.title }}
                    />
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about pace
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices are not a program to be completed but a posture to be inhabited, and
                  they scale with strength &mdash; Caleb&rsquo;s mountain for some seasons,
                  Anna&rsquo;s temple-court intercession for others, and at the last, Stott&rsquo;s
                  discipleship of being carried. The Journal tab holds the season&rsquo;s honest
                  threefold record: the gift named (because the culture only counts losses), the loss
                  grieved (because ungrieved losses calcify), and the legacy line (because you are the
                  only courier of your dispatches). Entries accumulated over months become something
                  no one else can write: the documented evidence, from inside one life, that the
                  righteous really do stay full of sap and green.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses on aging in faith &mdash; Packer&rsquo;s flat-out final lap,
                Graham&rsquo;s honest report from nearing home, Joni&rsquo;s five decades of renewal
                inside a wasting body, Tournier&rsquo;s second career, Stott&rsquo;s discipleship of
                dependence, and Willard&rsquo;s eternity that makes old age late-stage training. Each
                one wrote from inside the season, not about it from a distance.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: GOLD,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: voice.quote }} />
                  </blockquote>
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages that form the biblical theology of aging &mdash; the crown of Proverbs,
                the evergreen righteous of Psalm 92, Caleb&rsquo;s mountain, Anna&rsquo;s temple
                ministry, Paul&rsquo;s two ledgers, and the courier&rsquo;s prayer of Psalm 71. Read
                one per week alongside the Journal practice, and let them re-narrate the season the
                culture has miscatalogued.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Pray these texts in the first person and the present tense: &ldquo;Plant me, Lord,
                  that I may still bear fruit&rdquo;; &ldquo;teach me to number my days&rdquo;;
                  &ldquo;do not forsake me until I have declared your power to the next
                  generation.&rdquo; Where the psalmist makes a request of old age, make it yours;
                  where Caleb makes a claim, ask what your mountain is. And pray them aloud where the
                  young can occasionally overhear &mdash; these passages were preserved partly so that
                  every generation could watch the one ahead of it praying them, and learn early what
                  the culture will never teach: that the path of the righteous shines brighter, not
                  dimmer, to the full light of day.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the honest record of this season &mdash; a gift named (the culture
                only counts the losses), a loss grieved (ungrieved losses calcify), and the legacy
                being built, line by line, for the people who come after. Entries are stored privately
                in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="age-gift" style={labelStyle}>
                    A gift of this season of life
                  </label>
                  <textarea
                    id="age-gift"
                    value={theGift}
                    onChange={(e) => setTheGift(e.target.value)}
                    placeholder="Unhurried mornings. The grandchild's phone call. Perspective that no longer panics. A gift of this age, not in spite of it..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="age-loss" style={labelStyle}>
                    A loss I&rsquo;m grieving honestly
                  </label>
                  <textarea
                    id="age-loss"
                    value={theLoss}
                    onChange={(e) => setTheLoss(e.target.value)}
                    placeholder="The strength that ended the hiking. The role that ended with the career. The friend buried last spring. Named precisely — vague grief cannot be processed..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="age-legacy" style={labelStyle}>
                    The legacy I&rsquo;m building &mdash; what I want to pass on
                  </label>
                  <textarea
                    id="age-legacy"
                    value={theLegacy}
                    onChange={(e) => setTheLegacy(e.target.value)}
                    placeholder="The story of the answered prayer in 1987. The blessing I'll speak over each grandchild by name. What I want them to know about God from my life..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theGift.trim() || !theLegacy.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theGift.trim() || !theLegacy.trim() ? BORDER : GOLD,
                    color: !theGift.trim() || !theLegacy.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theGift.trim() || !theLegacy.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name a gift of the season, grieve a loss honestly, and write one line of the
                      legacy &mdash; what you want to pass on. Kept over months, these entries become
                      the quarry for your legacy letters and the documented evidence, from inside one
                      life, that the righteous still bear fruit in old age, ever full of sap and
                      green.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry from ${entry.date}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        <div style={{ marginBottom: 10 }}>
                          <span
                            style={{
                              color: GOLD,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The gift
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theGift}
                          </p>
                        </div>

                        {entry.theLoss && (
                          <div style={{ marginBottom: 10 }}>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              The loss
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theLoss}
                            </p>
                          </div>
                        )}

                        <div>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The legacy
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theLegacy}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on aging in faith &mdash; the crown of gray hair, fruit in old age, the
                late-life callings of Moses and Caleb, Anna and Simeon in the temple, the inner
                renewal of 2 Corinthians 4, and the legacy delivered to the next generation. Good
                companions to the Theology and Practices tabs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              The last lap, run flat out
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Scripture&rsquo;s account of aging is the one the mirror never gives: gray hair as
              coronation, the latter decades as late harvest, the post-career years as redeployment,
              the failing body as scaffolding coming down around a structure being finished day by
              day. The God who called Moses at eighty and stationed Anna in the temple at eighty-four
              has not changed his hiring practices &mdash; and he has promised the carrying personally:
              &ldquo;even to your old age I am he, and to gray hairs I will carry you&rdquo; (Isa
              46:4). The days are numbered, and that is wisdom, not threat: they are the last miles
              before home, and there are dispatches still to deliver on the way.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: discern the post-career assignment in{" "}
              <Link href="/christian-retirement" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Retirement
              </Link>
              , walk the season&rsquo;s griefs in the{" "}
              <Link href="/christian-grief-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Grief Guide
              </Link>
              , or look past the last enemy in the{" "}
              <Link href="/death-dying-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                Death &amp; Dying Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
