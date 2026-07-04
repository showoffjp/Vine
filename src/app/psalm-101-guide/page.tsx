"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: A Psalm of David)" },
  { label: "Genre", value: "Royal psalm -- the king's vow of integrity" },
  { label: "Historical Use", value: "Read for centuries as a 'mirror for princes' -- the charter of godly leadership" },
  { label: "Structure", value: "vv. 1-2 the vow of the heart and the house; vv. 3-5 what the king refuses; vv. 6-8 whom the king welcomes and whom he removes" },
  { label: "Key Verse", value: "v. 2 -- I will ponder the way that is blameless... I will walk with integrity of heart within my house" },
  { label: "Companion", value: "Psalm 15 (who may dwell on your holy hill) and Psalm 24 (clean hands, pure heart)" },
  { label: "NT Connection", value: "Revelation 21:27 -- nothing unclean will ever enter the city of the Lamb; 1 Timothy 3 -- leadership qualified by household integrity" },
];

const THEMES = [
  {
    color: GOLD,
    title: "I Will Sing of Steadfast Love and Justice: Worship Before Ethics",
    body: `Psalm 101 opens not with a resolution but with a song: "I will sing of steadfast love and justice; to you, O LORD, I will make music." Before David vows anything about his conduct, he worships. The order is deliberate and deeply theological. The king's ethics flow out of the king's doxology; the standards he will keep in his house and court are not abstract moral principles but the character of the God he adores, set to music. Hesed (steadfast covenant love) and mishpat (justice) are the two great attributes of the LORD's own reign (Psalm 89:14 -- "righteousness and justice are the foundation of your throne; steadfast love and faithfulness go before you"). David sings them first because he intends to mirror them.
<br/><br/>
This ordering rebukes two opposite errors. The first is worship without ethics -- the piety that sings of God's love and justice on Sunday and practices neither on Monday. Psalm 101 will not allow praise to float free of practice: the same voice that sings verse 1 makes the vows of verses 2-8. The second error is ethics without worship -- moral seriousness that has forgotten its source, integrity pursued as self-improvement rather than as reflection of the God we love. David's integrity is doxological from the first line. He does not aspire to be good in general; he aspires to walk in the ways of the God to whom he makes music.
<br/><br/>
Charles Spurgeon called this "the Psalm of the household," and observed that David "begins his intended reformation with himself and his own house, and begins it with song." Reformation that begins anywhere else -- with the neighbor, the culture, the opposition -- skips the only ground the psalmist recognizes. Matthew Henry notes that those who would "walk in a perfect way" must first "sing of mercy and judgment": gratitude for mercy and reverence for judgment are the twin springs of holy living.
<br/><br/>
For the Christian, this theme lands with double force, because we sing of a steadfast love and justice that met at the cross. The mercy we sing is mercy that cost the blood of the Son; the justice we sing was satisfied, not suspended, at Calvary (Romans 3:26). Worship of the crucified and risen Christ is therefore the engine of all Christian ethics: "we love because he first loved us" (1 John 4:19). Where obedience has grown cold, Psalm 101 prescribes not first a new resolve but a new song.`,
  },
  {
    color: GREEN,
    title: "Integrity of Heart Within My House: Character Begins at Home",
    body: `The center of David's vow is startlingly domestic: "I will walk with integrity of heart within my house" (v. 2). Not on the battlefield, not on the throne, not in public ceremony -- within my house. The Hebrew tamim (integrity, blamelessness, wholeness) describes a life without moral compartments, and David locates its test in the one place where no crowd is watching. The king who will judge the land begins by judging his own hallway.
<br/><br/>
This is the Bible's consistent doctrine of character. The private person is the real person. Jesus taught that it is "out of the heart" that evil proceeds (Mark 7:21), and Paul made household conduct the first qualification for church leadership: an overseer "must manage his own household well" (1 Timothy 3:4-5), for how a man lives behind his own front door is the truth about him. Psalm 101 anticipates all of this by a thousand years. The wistful cry embedded in verse 2 -- "Oh when will you come to me?" -- shows David knew he could not keep this vow alone; the presence of the LORD in his house is the condition of integrity in his house.
<br/><br/>
Derek Kidner observes that this psalm "searches the conscience of every ruler, and indeed of every householder" -- the standards scale down as well as up. Every believer governs some small kingdom: a home, a desk, a classroom, a browser, a budget. Verse 3 extends the vow to the eyes: "I will not set before my eyes anything that is worthless." The word for "worthless" (beliyya'al) is strong -- the stuff of Belial, the trash of the soul. David vows curation of his gaze centuries before the screen made that vow daily and urgent.
<br/><br/>
The tragedy, of course, is that David broke this vow -- from his own roof, with his own eyes, in the matter of Bathsheba (2 Samuel 11). The psalm's ideals are real, but the psalmist could not sustain them, and Scripture does not hide it. This is why Psalm 101 finally preaches Christ rather than mere self-discipline: the vow stands, the vower falls, and the heart is thrown forward to a King who would keep it.`,
  },
  {
    color: ROSE,
    title: "No Slander, No Haughty Eyes: The Purged Court",
    body: `Verses 3-5 and 7 list what the king will not tolerate near him: the worthless thing before the eyes, the work of those who fall away, the perverse heart, the secret slanderer, the haughty look and arrogant heart, the practicer of deceit, the teller of lies. The catalogue is a portrait of court corruption in every age -- flattery, gossip, spin, self-promotion -- and David vows to starve it of oxygen: "Whoever slanders his neighbor secretly I will destroy. Whoever has a haughty look and an arrogant heart I will not endure" (v. 5).
<br/><br/>
The principle beneath the purge is that leaders are constituted by their companions. Power attracts the ambitious and the false; a ruler who tolerates slanderers will govern by slander, and one who rewards flattery will be ruled by flatterers. So David chooses his court by character: "I will look with favor on the faithful in the land, that they may dwell with me; he who walks in the way that is blameless shall minister to me" (v. 6). The faithful of the land -- not the brilliant, not the connected, not the useful -- are the ones invited close. Proverbs 22:11 states the same royal wisdom: "He who loves purity of heart, and whose speech is gracious, will have the king as his friend."
<br/><br/>
Calvin draws the application beyond the palace: every household and every church "has its own economy," and those who preside in them are bound by David's rule -- to deny falsehood a seat at the table. The church that platforms the arrogant because they are gifted, or tolerates the slanderer because he is effective, has inverted Psalm 101. Paul's instructions about divisive people (Titus 3:10) and Jesus' teaching on confronting sin in the community (Matthew 18:15-17) are this psalm's New Testament descendants.
<br/><br/>
For the individual believer, the purged court becomes the curated life: the voices we allow near us form us. "Do not be deceived: bad company ruins good morals" (1 Corinthians 15:33). Psalm 101 calls every Christian to Davidic deliberateness about influence -- what we watch, whom we platform in our attention, which voices get daily access to our hearts.`,
  },
  {
    color: PURPLE,
    title: "Morning by Morning: The Vow Only Christ Kept",
    body: `The psalm closes with the king's most sweeping resolve: "Morning by morning I will destroy all the wicked in the land, cutting off all the evildoers from the city of the LORD" (v. 8). "Morning by morning" evokes the ancient practice of holding court at the city gate at dawn -- justice as a daily discipline, not an occasional gesture. The king vows that evil will find no permanent residence in the city of God.
<br/><br/>
Read honestly, this verse exposes the gap between the psalm and its author. David did not purge evil from the land morning by morning; he could not even purge it from his own house. His court knew Joab's violence, Amnon's outrage, Absalom's conspiracy -- and his own throne was stained by the matter of Uriah. The psalm is a true ideal sung by a failing king, and Scripture lets the dissonance stand, because the dissonance is the point: Israel's monarchy was a signpost, not a destination.
<br/><br/>
Only one Son of David ever prayed this psalm without irony. Jesus of Nazareth walked with perfect integrity of heart in his Father's house (John 8:29 -- "I always do the things that are pleasing to him"); no deceit was found in his mouth (1 Peter 2:22); he drove the corrupt commerce from the temple courts with a whip of cords (John 2:15); and at his return he will do finally what David vowed daily -- "he will gather out of his kingdom all causes of sin and all law-breakers" (Matthew 13:41). Revelation 21:27 is Psalm 101:8 consummated: in the new Jerusalem "nothing unclean will ever enter it, nor anyone who does what is detestable or false."
<br/><br/>
Tremper Longman notes that royal psalms like this one "kept alive the hope of a king who would actually embody the ideal" -- they are Messianic by trajectory. The believer therefore reads Psalm 101 three ways at once: as Christ's own manifesto, perfectly kept; as the standard for all who hold any authority; and as the promise of a city, coming down out of heaven, where the vow is finally and forever fulfilled.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "I will sing of steadfast love and justice; to you, O LORD, I will make music. I will ponder the way that is blameless. Oh when will you come to me? I will walk with integrity of heart within my house.",
    comment: `The psalm's foundation is laid in worship: hesed (steadfast love) and mishpat (justice) are sung before they are practiced, because the king's ethic is the character of his God set to music. "I will ponder the way that is blameless" makes integrity a matter of deliberate meditation, not accident. The parenthetical cry "Oh when will you come to me?" is easy to miss and impossible to overstate: David knows the vow is unkeepable without the presence of the LORD in his house -- integrity is a grace sought, not merely a discipline mustered. The sphere of the vow, "within my house," locates character where no audience applauds. Spurgeon: "He resolves to begin his good rule where all good rule must begin -- at home, and in his own heart."`,
  },
  {
    ref: "vv. 3-4",
    text: "I will not set before my eyes anything that is worthless. I hate the work of those who fall away; it shall not cling to me. A perverse heart shall be far from me; I will know nothing of evil.",
    comment: `The vow moves from the house to the eyes to the heart -- the Bible's anatomy of temptation (compare Genesis 3:6 and 1 John 2:16). "Anything that is worthless" (devar beliyya'al) is literally "a thing of Belial": David refuses to give destructive things the platform of his gaze. "It shall not cling to me" pictures sin as adhesive -- what the eyes entertain, the soul wears. The resolve "I will know nothing of evil" is not naivete but non-intimacy: evil may be understood, but it will not be a companion. The verse reads with uncomfortable precision in an age of infinite scrolling; Psalm 101 makes the curation of attention an act of covenant faithfulness.`,
  },
  {
    ref: "v. 5",
    text: "Whoever slanders his neighbor secretly I will destroy. Whoever has a haughty look and an arrogant heart I will not endure.",
    comment: `Two sins are singled out for royal intolerance, and both are sins of the strong: slander (the weapon of the tongue wielded from the shadows) and arrogance (the "haughty look" -- literally lofty eyes -- and wide heart of self-importance). These are precisely the vices that thrive near power, where whispered accusation can end a rival and pride wears the costume of confidence. The king vows that neither will find employment in his administration. Matthew Henry observes that slander is here treated as a capital crime against community, "for a false tongue breaks bones and kingdoms alike." Psalm 15:3 and Proverbs 6:16-19 stand in the same tradition: God's community is constituted by truthful speech and lowly hearts.`,
  },
  {
    ref: "vv. 6-7",
    text: "I will look with favor on the faithful in the land, that they may dwell with me; he who walks in the way that is blameless shall minister to me. No one who practices deceit shall dwell in my house; no one who utters lies shall continue before my eyes.",
    comment: `The purge has a positive face: the king actively seeks "the faithful in the land" -- ordinary covenant-keepers, not celebrities -- and gives them proximity: "that they may dwell with me... shall minister to me." Character, not talent or connection, is the qualification for closeness. Verse 7 states the inverse with total clarity: deceit disqualifies from the house, lies disqualify from the presence. Together the verses teach that every leader builds a culture by two decisions -- whom to draw near and whom to remove -- and that both decisions are moral before they are strategic. The church reads this as Christ's own practice: he chose the lowly faithful for his inner circle, and it was the deceiver among the twelve who "went out" from the presence (John 13:30).`,
  },
  {
    ref: "v. 8",
    text: "Morning by morning I will destroy all the wicked in the land, cutting off all the evildoers from the city of the LORD.",
    comment: `The closing verse widens the vow from house to land: daily justice at the gate ("morning by morning" -- the hour when courts convened), so that "the city of the LORD" would not become a safe harbor for evil. As history, the verse indicts its own author -- David's reign never achieved this, and his own sins forbade it. As prophecy, it awaits the Son of David: he cleansed the temple courts in his first advent, and at his return "he will gather out of his kingdom all causes of sin" (Matthew 13:41) so that Revelation 21:27 comes true -- nothing unclean shall enter the city. Kidner: the psalm "outruns every ruler who has sung it, and rests only on the King whose right it is." Prayed by the believer, verse 8 becomes daily repentance: a morning-by-morning expulsion of evil from the city of one's own heart.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Sing Before You Resolve",
    body: `Psalm 101 begins with music, not willpower. If you want to grow in integrity, the biblical order is worship first: behold and adore the steadfast love and justice of God -- supremely displayed at the cross -- and let the vows rise out of the song. Moral resolve divorced from worship curdles into either self-righteousness (when we succeed) or despair (when we fail). Resolve that grows out of doxology has a different root system entirely: it is gratitude taking shape in conduct.
<br/><br/>
Practically: attach your resolutions to your worship. Before you review your habits, your screen-time, your speech, spend unhurried time rehearsing who God is and what he has done for you in Christ. Let every "I will" in your life be preceded by a "You are."
<br/><br/>
<em>Prayer prompt</em>: LORD, I sing of your steadfast love and your justice -- of mercy that met me at the cross and righteousness that never bends. Before I promise you anything, I praise you. Let every resolve in me grow out of this song, so that my obedience is gratitude and not performance. Come to me, as David longed for you to come; I cannot walk blamelessly unless you dwell in my house. Amen.`,
  },
  {
    color: GREEN,
    title: "Audit the House and the Eyes",
    body: `David's vow targets the two most unguarded territories in any life: the home (where no one is watching) and the eyes (through which everything enters). Take the psalm as an audit. At home: is there a gap between your public faith and your private conduct -- the tone you use behind your own door, the person you become when the performance stops? Integrity (tamim) means wholeness: one person in every room.
<br/><br/>
At the eyes: verse 3 -- "I will not set before my eyes anything that is worthless" -- may be the most directly applicable line of Scripture to the smartphone age ever written. What do you set before your eyes daily? Not what ambushes you -- what you deliberately set there? Curate ruthlessly. Cancel, unfollow, and filter not as legalism but as covenant loyalty: the gaze is a gate, and you are its keeper.
<br/><br/>
<em>Practical challenge</em>: choose one worthless thing you have been setting before your eyes and remove it this week -- and replace the vacated time with something that feeds the song of verse 1.`,
  },
  {
    color: ROSE,
    title: "Choose Your Court",
    body: `Every life has a court -- the handful of voices granted daily access to your heart. David staffed his by character: the faithful of the land drew near; the slanderer, the arrogant, and the deceiver were shown the door. Most of us drift into our courts instead: we give access to whoever is entertaining, useful, or simply present, and then wonder why our inner life sounds like theirs.
<br/><br/>
Apply the psalm in both directions. Positively: seek out "the faithful in the land" -- unglamorous, truthful, godly people -- and deliberately give them proximity and influence. Ask one of them to speak honestly into your life. Negatively: identify the influences that traffic in slander, contempt, and pride (including digital voices -- the mocking podcast, the outrage feed), and withdraw their access. This is not self-isolation; it is the stewardship of formation. "Bad company ruins good morals" (1 Corinthians 15:33) -- and good company, over years, quietly builds a soul.
<br/><br/>
For anyone who leads -- a family, a team, a small group, a church -- the stakes double: your tolerance sets the culture. What you permit near you, you will eventually govern by.`,
  },
  {
    color: PURPLE,
    title: "Rest in the King Who Kept the Vow",
    body: `Read to the end, Psalm 101 is designed to drive you out of yourself. David made these vows and broke them; so will you. The point of the psalm's impossible standard is not to crush but to redirect hope: there is a Son of David who walked with perfect integrity of heart, whose eyes never rested on the worthless, whose mouth held no deceit, and who is coming to cut off evil from the city of God forever.
<br/><br/>
So pray this psalm without despair. When it exposes you -- and it will -- let it take you to the gospel: Christ kept the king's vow on your behalf, and his righteousness is counted to those who take refuge in him (2 Corinthians 5:21). Then let it put you back to work, not to earn a standing but to reflect a King. And let verse 8 teach you hope for history: the city is coming in which nothing unclean will ever dwell, because its King is worthy in every way that David was not.
<br/><br/>
<em>Prayer prompt</em>: Lord Jesus, Son of David, you alone sang this psalm with a clean heart. Cover my broken vows with your kept ones. Make my house a place you are pleased to enter, my eyes gates you are pleased to guard, my friendships a court you are pleased to rule. And hasten the day when you cut off evil from your city forever, morning by morning giving way to a morning with no more night. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: GOLD,
  heroGradientEnd: "#171007",
  badge: "Psalm 101",
  metaLine: "Royal Psalm of David &bull; 8 Verses",
  title: "I Will Sing of Steadfast Love and Justice",
  heroIntro: "David&rsquo;s vow of integrity -- the king&rsquo;s manifesto for his own heart, his house, and his court. Worship comes before ethics, character begins at home, the court is purged of slander and pride, and the whole psalm leans forward to the one Son of David who kept every word of it.",
  blockquote: "&ldquo;I will ponder the way that is blameless. Oh when will you come to me? I will walk with integrity of heart within my house.&rdquo;",
  blockquoteRef: "&mdash; Psalm 101:2",
  overviewHeading: "Overview of Psalm 101",
  overviewParagraphs: [
    `Psalm 101 is a royal psalm -- the king&rsquo;s own charter for how he intends to live and govern. The superscription attributes it to David, and its content fits a king establishing (or renewing) the moral character of his reign: many scholars connect it to the early days of David&rsquo;s kingship, perhaps as he prepared to bring the ark to Jerusalem and longed for the LORD to &ldquo;come to&rdquo; him (v. 2; compare 2 Samuel 6:9 -- &ldquo;How can the ark of the LORD come to me?&rdquo;). It is a coronation sermon preached by the king to himself.`,
    `The psalm&rsquo;s structure moves outward in widening circles. It begins in worship (v. 1: singing of steadfast love and justice), narrows to the king&rsquo;s own heart and household (v. 2), lists what he refuses to tolerate in himself (vv. 3-4), then in his court (vv. 5-7), and finally in the land itself (v. 8). The order is the whole theology: public justice grows from private integrity, and private integrity grows from doxology. A ruler who skips the first circles has nothing real to offer the last.`,
    `For centuries the church read Psalm 101 as a &ldquo;mirror for princes&rdquo; -- the text preached before kings at coronations and set before magistrates as the standard of godly office. But its reach is wider than palaces. Everyone presides over some small kingdom: a household, a team, a classroom, a feed. The psalm&rsquo;s questions are universal: What do you sing? What do you set before your eyes? Whom do you allow close? What evil do you tolerate because it is useful?`,
    `Honest readers also feel the psalm&rsquo;s tragedy: David broke nearly every vow in it. From his own rooftop his eyes rested on what they should not have; deceit and murder followed; his court knew slander, conspiracy, and blood. Scripture does not soften the dissonance, because the monarchy itself was a signpost pointing beyond every failed occupant of the throne. The psalm&rsquo;s ideal remained standing precisely so that Israel would keep looking for the King who could embody it.`,
    `That is why the New Testament reads a psalm like this Christologically. Jesus of Nazareth, great David&rsquo;s greater Son, walked with integrity of heart in his Father&rsquo;s house; no deceit was found in his mouth (1 Peter 2:22); he cleansed the temple courts; and at his return he will do finally what David vowed daily -- gather every cause of sin out of his kingdom (Matthew 13:41), until the city comes in which &ldquo;nothing unclean will ever enter&rdquo; (Revelation 21:27). Psalm 101 is at once Christ&rsquo;s manifesto, the leader&rsquo;s standard, and the believer&rsquo;s hope.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 101 shapes worship, private character, leadership, and hope in the true King.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
