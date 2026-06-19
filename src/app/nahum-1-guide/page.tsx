"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
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
    heading: "Superscription and the Weight of the Oracle",
    reference: "Nahum 1:1",
    accent: PURPLE,
    paragraphs: [
      "Nahum 1:1 introduces the entire book with a double identification: &ldquo;The burden of Nineveh. The book of the vision of Nahum the Elkoshite.&rdquo; Two words in this single verse set the tone for everything that follows. First, &lsquo;burden&rsquo; (Hebrew: massa&rsquo;) &mdash; the same word used in Isaiah and Jeremiah for weighty oracles of judgment. This is not a pleasant message; it is a burden, a word that presses down with the full weight of divine displeasure. Second, &lsquo;vision&rsquo; (Hebrew: chazon) &mdash; what Nahum speaks has its origin in divine revelation, not human speculation. He is not pronouncing his own opinion on international politics but delivering the word the LORD has shown him.",
      "Nineveh was the capital of the Neo-Assyrian Empire, the most powerful military force the ancient Near East had ever seen. Named at the outset, Nineveh is both the explicit subject of judgment and an implicit comfort to Judah, which had suffered under Assyrian aggression for over a century. Nahum of Elkosh &mdash; a village whose precise location is disputed but likely in Judah &mdash; brings this word to the people who most needed to hear it: the covenant community living under the shadow of a superpower that seemed invincible.",
      "The structure of the book suggests Nahum wrote after the fall of Thebes (No-Amon) in 663 BC, which he references as a past event in 3:8, and before the fall of Nineveh in 612 BC. Many scholars place his ministry during the reign of King Josiah (640&ndash;609 BC), a period of religious reform in Judah that coincided with Assyria&rsquo;s gradual weakening. To a generation that could not yet see Nineveh&rsquo;s end, Nahum&rsquo;s oracle arrived as pure prophecy &mdash; a declaration of certainty about what had not yet occurred.",
    ],
  },
  {
    heading: "The Avenging Jealous God and the Theophany of Power",
    reference: "Nahum 1:2&ndash;6",
    accent: ROSE,
    paragraphs: [
      "The poem that opens chapter 1 is one of the most theologically concentrated passages in the Minor Prophets. Nahum draws on the deepest vocabulary of Israel&rsquo;s covenant theology to describe the God who is about to act: &ldquo;The LORD is a jealous and avenging God; the LORD is avenging and wrathful; the LORD takes vengeance on his adversaries and keeps wrath for his enemies.&rdquo; Each element of this description is deliberately chosen. &lsquo;Jealous&rsquo; (Hebrew: qanna&rsquo;) does not denote petty insecurity; it is the jealousy of a covenant God who will not share his glory with rivals and will not abandon his people to those who oppress them. It is the same word used at Sinai when God declared himself a jealous God in the context of the second commandment.",
      "The theophanic verses that follow (1:3b&ndash;6) describe God&rsquo;s coming in terms drawn from Israel&rsquo;s earliest poetry. His way is in whirlwind and storm; clouds are the dust of his feet. He rebukes the sea and makes it dry; he dries up all the rivers. Bashan and Carmel wither; the flower of Lebanon withers. Mountains quake before him; hills melt. The earth heaves. These images deliberately echo the Song of the Sea (Exodus 15), the Song of Deborah (Judges 5), and Psalm 18 &mdash; the great theophanic poems of Israel. By invoking this tradition, Nahum insists that the God who parted the Red Sea and who descended on Sinai in fire and smoke is the same God who is now moving against Nineveh.",
      "Verse 3 contains the crucial theological key: &ldquo;The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.&rdquo; This is an unmistakable echo of Exodus 34:6&ndash;7, where God proclaimed his name to Moses at Sinai. The very formula that declares God&rsquo;s mercy also declares his justice: he is compassionate and slow to anger, but he does not leave the guilty unpunished. Nahum draws on the full Sinai declaration rather than the partial version Jonah had hoped for. Nineveh&rsquo;s earlier repentance (in Jonah&rsquo;s day) had secured a stay of judgment, but that generation had passed, and Nineveh&rsquo;s guilt had accumulated to the point that the patience of a slow-to-anger God was now exhausted.",
      "The rhetorical climax in 1:6 poses two unanswerable questions: &ldquo;Who can stand before his indignation? Who can endure the heat of his anger?&rdquo; The answer, implied by the totality of the description, is no one. Mountains quake and rocks are shattered before him. The mightiest empire on earth is no more secure before the wrath of the God of Israel than a mountain is before a volcano.",
    ],
  },
  {
    heading: "The Good LORD: Refuge and Ruin",
    reference: "Nahum 1:7&ndash;8",
    accent: GREEN,
    paragraphs: [
      "The sudden shift in verse 7 is one of the most beautiful turns in the Minor Prophets: &ldquo;The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.&rdquo; After five verses of relentless theophanic power and judgment, Nahum pauses to announce the most fundamental truth about this God &mdash; he is good. The goodness of God is not in tension with his wrath against Nineveh; it is the very foundation of it. He judges Nineveh precisely because he is good to his people, and he cannot be good to his people while allowing those who destroy them to go unanswered.",
      "The word &lsquo;stronghold&rsquo; (Hebrew: ma&rsquo;oz) occurs repeatedly in the Psalms and wisdom literature to describe the place of divine protection. To those who take refuge in him &mdash; the Hebrew word for &lsquo;knows&rsquo; (yada&rsquo;) carries relational weight, not merely informational knowledge; he intimately recognizes his own &mdash; the LORD is an impregnable fortress in the very day when trouble is greatest. For Judah, facing an empire that had already devastated their land and deported their northern brothers, the day of trouble was not hypothetical. The promise of verse 7 is addressed directly to those who have nowhere else to turn.",
      "Verse 8 completes the contrast: &ldquo;But with an overflowing flood he will make a complete end of the adversaries, and will pursue his enemies into darkness.&rdquo; The image of the flood is both poetic and, as history would record, literal &mdash; ancient sources report that a flooding of the Tigris River contributed to the breach of Nineveh&rsquo;s walls when the Babylonian-Median coalition attacked in 612 BC. The phrase &lsquo;complete end&rsquo; appears repeatedly in Nahum and signals the finality of what is coming. There will be no partial judgment, no further warning, no second chance. The ones who make their refuge in the LORD will be protected; the adversaries will be swept away.",
    ],
  },
  {
    heading: "The Oracle to Judah: The Yoke Will Be Cut Off",
    reference: "Nahum 1:9&ndash;15",
    accent: GOLD,
    paragraphs: [
      "The final section of chapter 1 shifts into direct address, though the targets alternate between Nineveh (the enemy) and Judah (the comforted). Verse 9 poses the challenge: &ldquo;What do you plot against the LORD? He will make a complete end; trouble will not rise up a second time.&rdquo; The phrase &lsquo;affliction will not rise twice&rsquo; became one of Nahum&rsquo;s most memorable statements. The judgment God brings on Nineveh will be so total that there will be no need for a second blow. Empires that seem to threaten forever can be brought down completely in a single divine act.",
      "Verses 10 through 12 are among the most difficult in the book textually, but their thrust is clear: those who oppose the LORD, however strong they appear &mdash; like thorns tangled together, like those drunk with wine &mdash; will be consumed like dry stubble. Verse 12 contains an oracle that directly addresses Judah: &ldquo;Though I have afflicted you, I will afflict you no more. And now I will break his yoke from off you and will burst your bonds apart.&rdquo; This is stunning theology. God acknowledges that the Assyrian oppression of Judah was itself under his sovereign governance &mdash; &lsquo;I have afflicted you&rsquo; &mdash; while announcing that the affliction has served its purpose and will now end.",
      "Verse 14 turns to deliver the oracle against the one who &lsquo;plots evil against the LORD&rsquo; &mdash; a reference most likely to the Assyrian king. His name will be cut off, his carved images and metal images will be destroyed, and his grave will be made, &lsquo;for you are vile.&rsquo; This is the divine death sentence on an empire. And then, with breathtaking contrast, verse 15 pivots to the gospel announcement for Judah: &ldquo;Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off.&rdquo; The one who has plotted against God is cut off; the one who brings good news has feet that are beautiful on the mountains.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The Jealousy of God as Covenant Faithfulness",
    accent: ROSE,
    paragraphs: [
      "Modern readers sometimes stumble at the word &lsquo;jealous&rsquo; applied to God, as though it denotes an insecurity unworthy of the divine. But the jealousy of God in the biblical vocabulary is inseparable from his covenant loyalty. In Exodus 20:5, God identifies himself as &lsquo;a jealous God&rsquo; in the context of commanding exclusive worship &mdash; his jealousy is the jealousy of a covenant Lord who will not share his people with idols, not because he is insecure, but because the covenant relationship is the deepest reality of his people&rsquo;s existence and anything that corrupts it destroys them.",
      "In Nahum&rsquo;s context, this covenant jealousy expresses itself as the refusal to allow Nineveh&rsquo;s violence against his people to go unanswered. The Assyrians had devastated Samaria, deported the northern tribes, and invaded Judah. They had done so as God&rsquo;s instrument of discipline (see Isaiah 10), but they had done so with a cruelty and arrogance that exceeded their mandate. The jealousy of God that Nahum announces is not the pique of a wounded deity; it is the covenant faithfulness of a God who sees his people afflicted and will not remain passive forever.",
      "This theme connects to Paul&rsquo;s description of God as the one who will &lsquo;repay&rsquo; (Romans 12:19, quoting Deuteronomy 32:35): &lsquo;Vengeance is mine, I will repay, says the Lord.&rsquo; The New Testament does not soften the divine jealousy but redirects it: believers are not to exact vengeance themselves precisely because God himself will judge. Nahum&rsquo;s oracle stands at the back of this theology, showing that divine jealousy is the guarantee of ultimate justice for the oppressed.",
    ],
  },
  {
    heading: "Theophany: God&rsquo;s Power Over All Creation",
    accent: PURPLE,
    paragraphs: [
      "The theophanic passage in Nahum 1:2&ndash;6 is deliberately cast in the tradition of Israel&rsquo;s great hymns of divine appearing. When God came to defeat Egypt at the Red Sea, the waters piled up and the deep trembled. When he descended on Sinai, the mountain shook and the people feared. When he went to war for Deborah and Barak, the stars fought from heaven. Nahum&rsquo;s poem belongs to this tradition, presenting the coming judgment on Nineveh not as a geopolitical event among many but as a theophany &mdash; a direct intervention of the Creator God in the affairs of nations.",
      "The specific images Nahum uses &mdash; whirlwind and storm, mountains quaking, hills melting, earth heaving &mdash; place the coming judgment of Nineveh in the same category as the exodus and the conquest. What God is about to do is not less significant than what he did at Sinai; it is of the same order. The God who commands the sea and dries up the rivers is not impressed by Nineveh&rsquo;s walls, armies, or chariots. His power over creation is the basis for confidence that he can and will act against the most powerful human empire.",
      "For Christian readers, this theophanic tradition reaches its definitive expression in the incarnation and resurrection. The God who makes mountains quake and rivers dry has entered creation in Jesus Christ and demonstrated his power over death itself. The theophany of Nahum 1 finds its ultimate fulfillment not in the fall of Nineveh but in the resurrection morning when the earth shook and the stone was rolled away (Matthew 28:2).",
    ],
  },
  {
    heading: "The Goodness of God as the Ground of Judgment",
    accent: GREEN,
    paragraphs: [
      "Nahum 1:7 &mdash; &ldquo;The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him&rdquo; &mdash; is the theological center of the chapter, and it is placed precisely where it is for a reason. It follows five verses of terrifying divine power and precedes the announcement of Nineveh&rsquo;s destruction. The message is that God&rsquo;s goodness and God&rsquo;s judgment are not opposites; they are two sides of the same divine character.",
      "A God who was not good would not judge Nineveh: he would be indifferent to Judah&rsquo;s suffering, content to let the powerful do what the powerful do. A God who is truly good must be moved by the suffering of the innocent and the cruelty of the oppressor. Nahum 1:7 insists that the same God whose wrath presses against Nineveh is the God who is a fortress for those who run to him. His judgment against the enemy is itself an act of goodness toward the covenant people.",
      "This theme resonates across the whole of Scripture. Psalm 136 alternates between the acts of God in creation and history and the refrain &lsquo;for his steadfast love endures forever.&rsquo; Even the plagues on Egypt and the division of the Red Sea are works of the God whose hesed &mdash; covenant loyalty and goodness &mdash; never wavers. In Romans 8:28, Paul&rsquo;s great declaration that all things work together for good to those who love God carries the same structural logic: the God who is good governs all things, including suffering, toward good ends for his people.",
    ],
  },
  {
    heading: "The Good News of Nahum and Isaiah&rsquo;s Gospel",
    accent: GOLD,
    paragraphs: [
      "Nahum 1:15 announces: &ldquo;Behold, upon the mountains, the feet of him who brings good news, who publishes peace!&rdquo; This verse stands in unmistakable echo of Isaiah 52:7: &ldquo;How beautiful upon the mountains are the feet of him who brings good news, who publishes peace, who brings good news of happiness, who publishes salvation, who says to Zion, &lsquo;Your God reigns.&rsquo;&rdquo; Isaiah&rsquo;s verse was itself one of the great evangelistic texts of the Old Testament, and the apostle Paul quotes it in Romans 10:15 in the context of the gospel of Jesus Christ: &ldquo;And how are they to preach unless they are sent? As it is written, &lsquo;How beautiful are the feet of those who preach the good news!&rsquo;&rdquo;",
      "The connection between these three texts reveals a pattern of fulfillment across the canon. For Judah under Assyrian threat, the good news was that Nineveh would fall and the yoke would be removed. For Isaiah&rsquo;s exilic audience, the good news was that Babylon would fall and the exiles would return. For Paul and the New Testament church, the good news is that sin, death, and Satan &mdash; the ultimate oppressors &mdash; have been defeated in the death and resurrection of Jesus Christ. The pattern is consistent: the LORD reigns, his enemies are brought down, and those who take refuge in him are delivered.",
      "Nahum thus functions not merely as a historical oracle about Nineveh but as a stage in the unfolding of the gospel &mdash; the announcement that God is good and that his goodness will ultimately triumph over every form of evil and oppression. The feet on the mountains in Nahum 1:15 anticipate the apostles sent out in Matthew 28:19&ndash;20 to announce the ultimate good news: that all authority has been given to the risen Christ, and that in him the affliction of his people will not rise a second time.",
    ],
  },
  {
    heading: "The Slow Anger of God and the Patience That Has a Limit",
    accent: TEAL,
    paragraphs: [
      "Nahum 1:3 is the crucial verse for understanding the relationship between God&rsquo;s patience and his judgment: &ldquo;The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.&rdquo; This is a direct echo of Exodus 34:6&ndash;7, the great Sinai self-disclosure, and it carries a double edge. The same God who declared himself slow to anger at Sinai is the God who also declared that he would not leave the guilty unpunished across generations.",
      "For Nineveh, this means that the repentance of Jonah&rsquo;s generation had secured a stay of judgment but not a permanent acquittal. The slowness of God&rsquo;s anger is a mercy, but it is not an unlimited patience. Nineveh had returned to its violence and idolatry; the guilt had accumulated again; and now the patience of the slow-to-anger God was at its end. The very character of God that once delayed the judgment is now the guarantee that the judgment will come: a God great in power does not tolerate the guilty forever.",
      "Peter reflects on this same dynamic in 2 Peter 3:9, where the apparent delay of the Lord&rsquo;s return is explained as patience: &ldquo;The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.&rdquo; The slowness of God&rsquo;s anger is always mercy extended toward repentance. But Peter immediately follows this with the warning that the day of the Lord will come like a thief, and the elements will be dissolved. The patience of Nahum&rsquo;s God has an end, and when that end comes, the judgment is final.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verse 1: The Oracle, the Vision, the Prophet",
    reference: "Nahum 1:1",
    accent: PURPLE,
    paragraphs: [
      "The superscription of Nahum introduces the book with two parallel descriptions. It is simultaneously &lsquo;the burden of Nineveh&rsquo; and &lsquo;the book of the vision of Nahum the Elkoshite.&rsquo; The word &lsquo;burden&rsquo; or &lsquo;oracle&rsquo; (massa&rsquo;) signals a weighty pronouncement of judgment. The word &lsquo;vision&rsquo; (chazon) grounds the oracle in divine revelation rather than human analysis. Together they establish that what follows is both divinely authorized and directed with deadly seriousness against the greatest city of the ancient world.",
      "Nahum&rsquo;s name means &lsquo;comfort&rsquo; or &lsquo;consolation,&rsquo; which is significant: this book of fierce judgment against Nineveh is simultaneously a book of comfort for Judah. The same oracle that declares the destruction of the oppressor declares the relief of the oppressed. Elkosh is mentioned only here in the Bible, and its location is debated, but Nahum&rsquo;s very identity as a Judahite prophet anchors the oracle in the covenant community&rsquo;s experience of Assyrian violence.",
    ],
  },
  {
    heading: "Verses 2 to 6: The Jealous, Avenging, Unstoppable God",
    reference: "Nahum 1:2&ndash;6",
    accent: ROSE,
    paragraphs: [
      "Verse 2 opens with a triple drumbeat: jealous, avenging, avenging and wrathful. The repetition is not redundancy but intensification, piling up the vocabulary of divine judgment to make unmistakably clear what is coming. &lsquo;Jealous&rsquo; (qanna&rsquo;) connects to the covenant language of Exodus 20 and Deuteronomy 4. &lsquo;Avenging&rsquo; (naqam) is the language of justice rendered; not revenge in the petty human sense but the covenant Lord&rsquo;s righteous response to those who violate his people. The statement that he &lsquo;keeps wrath for his enemies&rsquo; uses the same root (napar) that appears in Leviticus 19:18 where humans are forbidden from keeping a grudge &mdash; God alone reserves this prerogative because only he exercises it justly.",
      "Verse 3 introduces the crucial qualification: he is slow to anger. This does not soften the preceding verses; it amplifies them. A God who is quick to anger might strike in haste and without full justification. A God who is slow to anger and yet who still acts in judgment demonstrates that the judgment is fully warranted &mdash; it has survived the long patience. &lsquo;Great in power&rsquo; (gadol koach) means that when this slow-to-anger God does finally act, nothing can resist him. And he will by no means clear the guilty: the acquittal of the wicked is not in his character.",
      "Verses 3b through 6 describe a theophany so comprehensive that every element of creation is subject to the divine advance. His way is in whirlwind and storm; the clouds are dust beneath his feet. He rebukes the sea &mdash; recalling the Red Sea and the Reed Sea &mdash; and it dries up; the rivers &mdash; recalling the Jordan &mdash; are made desolate. Bashan, Carmel, and Lebanon, the great symbols of natural abundance and beauty in the ancient Near East, wither before him. Mountains quake; hills melt; the earth heaves. The rhetorical questions of verse 6 close the section: &lsquo;Who can stand before his indignation? Who can endure the heat of his anger?&rsquo; The implied answer echoes through the silence: no one.",
    ],
  },
  {
    heading: "Verses 7 to 8: The Good Stronghold and the Overflowing End",
    reference: "Nahum 1:7&ndash;8",
    accent: GREEN,
    paragraphs: [
      "Verse 7 is the pivotal declaration of Nahum: &lsquo;The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.&rsquo; The word &lsquo;good&rsquo; (tob) is the same word God used in Genesis 1 to evaluate each stage of creation. The Lord who pronounced each created thing good is himself the source and standard of goodness. As a ma&rsquo;oz &mdash; a stronghold or place of refuge &mdash; he is the one secure place when trouble arrives. The word &lsquo;knows&rsquo; (yada&rsquo;) carries the weight of intimate relational knowledge: he recognizes, acknowledges, and watches over those who are his.",
      "The phrase &lsquo;in the day of trouble&rsquo; (beyom tsarah) appears frequently in the Psalms as a description of the moment of maximum crisis. Psalm 20:1 prays that the LORD will &lsquo;answer you in the day of trouble.&rsquo; Psalm 46:1 declares God to be &lsquo;a very present help in trouble.&rsquo; Nahum 1:7 stands in this tradition, assuring the Judahite community that the day of trouble is not the day of abandonment. The God who brings judgment on Nineveh is the same God who shelters his own in the storm.",
      "Verse 8 completes the double portrait: the same God who is a stronghold for the trusting is an overwhelming flood for his adversaries. &lsquo;He will make a complete end of the adversaries, and will pursue his enemies into darkness.&rsquo; The darkness (choshek) here is the darkness of total defeat, the obscurity of those swept from history. This is not poetic exaggeration &mdash; within a generation of Nahum&rsquo;s oracle, Nineveh had fallen so completely that by the time of the Greek historian Xenophon (c. 400 BC), soldiers marched past its ruins without knowing what city it had been.",
    ],
  },
  {
    heading: "Verses 9 to 11: What Do You Plot Against the LORD?",
    reference: "Nahum 1:9&ndash;11",
    accent: GOLD,
    paragraphs: [
      "Verse 9 opens with a direct challenge to those who oppose the LORD: &lsquo;What do you plot against the LORD? He will make a complete end; trouble will not rise up a second time.&rsquo; The question is ironic &mdash; whatever plot the adversary has devised, it cannot ultimately succeed against the one whose way is in whirlwind and storm. The phrase &lsquo;trouble will not rise up a second time&rsquo; is one of Nahum&rsquo;s most distinctive declarations: the judgment about to fall on Nineveh will be so final that there will be no second wave of Assyrian threat. One divine blow will be sufficient.",
      "Verse 10 uses two vivid similes to describe the adversaries: they are like thorns tangled together &mdash; easy to burn in a heap &mdash; and like those who are drunk with wine. The drunkard staggers without clarity or strength; the thorns provide only the appearance of a barrier before they ignite. The military might of Assyria, which had seemed impenetrable for a century, will turn out to be as insubstantial as tangled thorns and as incapacitated as a drunk when the LORD acts.",
      "Verse 11 refers to one who goes out from Nineveh &lsquo;who plots evil against the LORD and counsels wickedness.&rsquo; Many interpreters see here a reference to Sennacherib, the Assyrian king who invaded Judah in 701 BC, surrounded Jerusalem, and sent his envoy the Rabshakeh to taunt Hezekiah and blaspheme the LORD (2 Kings 18&ndash;19; Isaiah 36&ndash;37). The historical particularity of the reference roots the prophecy in specific acts of aggression against the covenant people.",
    ],
  },
  {
    heading: "Verses 12 to 15: The Oracle of Comfort for Judah",
    reference: "Nahum 1:12&ndash;15",
    accent: TEAL,
    paragraphs: [
      "Verses 12 and 13 contain a direct word to Judah from the LORD. Though Assyria is many and strong, they will be cut down and pass away. And then the stunning theological admission: &lsquo;Though I have afflicted you, I will afflict you no more.&rsquo; God himself owns the Assyrian oppression as his sovereign work. The same God who sent Assyria as the rod of his anger against Israel (Isaiah 10:5) now announces that the purpose of the affliction is complete. The yoke of Assyria has been God&rsquo;s instrument of discipline; that instrument will now be removed from Judah&rsquo;s neck. &lsquo;Now I will break his yoke from off you and will burst your bonds apart.&rsquo;",
      "Verse 14 turns to address the Assyrian king directly. His name will be cut off &mdash; a profound humiliation in a culture where name-preservation through descendants was essential to honor. His carved and cast images will be destroyed. He will be made a grave because he is vile. The word translated &lsquo;vile&rsquo; or &lsquo;dishonored&rsquo; (qalal) is the same root used in Genesis 12:3 where God promises Abraham that those who dishonor him will be cursed. The king who has dishonored the LORD of Israel will receive the exact judgment the covenant promised to those who do.",
      "Verse 15 arrives as the chapter&rsquo;s culmination, and it arrives as gospel: &lsquo;Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off.&rsquo; The herald racing across the mountains is announcing the fall of Nineveh. Judah can resume its appointed feasts, fulfill its vows, worship freely. The one who has been a worthless destroyer &mdash; the Assyrian empire &mdash; is cut off forever. This is the good news of Nahum, and it anticipates every future announcement of divine victory: God reigns, the enemy is defeated, the people are free.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "The God of Nahum Is the God of the New Testament",
    accent: ROSE,
    paragraphs: [
      "Modern Christians sometimes struggle with the fierce God of Nahum, as though the anger and vengeance of the Old Testament have been replaced by a gentler deity in the New. But Nahum 1 draws explicitly on the Sinai self-disclosure of Exodus 34, the same text that Paul quotes in 2 Corinthians 3. The God who is slow to anger and great in power is the same God who &lsquo;did not spare his own Son but gave him up for us all&rsquo; (Romans 8:32). The cross does not eliminate divine wrath; it absorbs it. The God of Nahum is the Father of Jesus Christ.",
      "This matters for the way we read the Minor Prophets devotionally. Nahum is not a strange outlier in the biblical canon that we must apologize for or explain away. It is a revelation of the character of God &mdash; his jealousy, his slowness to anger, his power over creation, his goodness to those who take refuge in him. All of these attributes are fully present in the New Testament, most clearly in the cross and resurrection of Jesus and in the book of Revelation.",
    ],
  },
  {
    heading: "Taking Refuge in the LORD in Days of Trouble",
    accent: GREEN,
    paragraphs: [
      "Nahum 1:7 is one of the Bible&rsquo;s clearest invitations to trust: &lsquo;The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.&rsquo; This verse addresses those for whom the day of trouble is not a future possibility but a present reality &mdash; people living under oppression, in grief, in fear, in situations that human strength cannot resolve. The same God whose power can make mountains quake is the one who offers himself as a fortress to the weak.",
      "The call to take refuge is an active posture, not a passive resignation. The Hebrew word for refuge (chasah) describes running to a place of shelter. Nahum 1:7 invites those under pressure to actively run toward the LORD &mdash; in prayer, in trust, in the reading of his word, in community with his people. The promise is not that trouble will immediately cease but that the God who is a stronghold will be known intimately by those who run to him in it.",
    ],
  },
  {
    heading: "The God Who Sees Injustice and Will Not Ignore It",
    accent: GOLD,
    paragraphs: [
      "Nahum&rsquo;s oracle was addressed to a community that had watched power operate without accountability for generations. The Assyrians had destroyed Samaria, scattered the northern tribes, and invaded Judah &mdash; all without meaningful consequence. To a people whose experience suggested that the powerful simply do what the powerful do, Nahum announces that there is a God who sees, who remembers, and who acts.",
      "This has profound application in every era where injustice appears to triumph. The book of Nahum stands in the biblical canon as a permanent testimony that the God of Israel is not indifferent to cruelty, that his patience with the oppressor is not passive approval, and that his justice is certain even when it is delayed. For those who suffer injustice today and wonder whether God sees, Nahum 1:7 and 1:2 stand together: he is good to those who trust him, and he will by no means clear the guilty.",
    ],
  },
  {
    heading: "The Beautiful Feet of the Gospel Messenger",
    accent: TEAL,
    paragraphs: [
      "Nahum 1:15 anticipates Isaiah 52:7, which in turn is quoted by Paul in Romans 10:15 in the context of the Great Commission. The runner on the mountains announcing the fall of Nineveh prefigures the apostles and every subsequent proclaimer of the gospel announcing the victory of Jesus Christ over sin, death, and the powers of darkness. The connection is not incidental; it is canonical: the pattern of divine victory and the announcement that follows is woven through the whole of Scripture.",
      "This means that evangelism and gospel proclamation are not addenda to the Christian life but are the voice of the divine victory. Every time the gospel is preached, the dynamic of Nahum 1:15 is replicated: the enemy has been defeated, the yoke has been broken, and the news of that victory must be carried to those who have not yet heard. The Christian has been entrusted with feet that can be beautiful on the mountains.",
    ],
  },
];

const reflectionQuestions = [
  "Nahum 1:3 says God is slow to anger but will by no means clear the guilty. How does holding both of these truths together &mdash; divine patience and divine justice &mdash; shape the way you think about your own sin and about the sins committed against you?",
  "The theophany of Nahum 1:2&ndash;6 portrays God as sovereign over all creation. In what area of your life do you most need to remember that the God who makes mountains quake is the same God who is your stronghold?",
  "Nahum 1:7 declares that God is good and that he &lsquo;knows&rsquo; those who take refuge in him. What would it look like for you to actively take refuge in the LORD this week rather than relying on your own resources?",
  "God says to Judah, &lsquo;Though I have afflicted you, I will afflict you no more&rsquo; (1:12). Can you identify a season of difficulty in your own life that, looking back, you can see God was sovereign over? What did you learn about him in that season?",
  "Nahum 1:15 and Romans 10:15 connect the announcement of God&rsquo;s victory to the beauty of those who carry the good news. Who in your life has not yet heard the gospel of Christ&rsquo;s victory over sin and death, and what is one step you could take to carry that news to them?",
  "Nineveh&rsquo;s earlier repentance under Jonah postponed judgment, but the repentance was not lasting. What does this warn us about the difference between momentary contrition and genuine, lasting transformation?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Nahum 1 - The Jealousy and Power of God" },
  { videoId: "tszFhiOPgPk", title: "The Good LORD: Stronghold in the Day of Trouble" },
  { videoId: "WZ0bB-GXFQU", title: "Nineveh and the Justice of God - Nahum Overview" },
  { videoId: "fNk_zzaMoSs", title: "Beautiful Feet: Nahum 1:15, Isaiah 52, and the Gospel" },
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
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Nahum1Guide() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GOLD}22`,
              color: GOLD,
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
            Nahum Chapter 1
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
            The Divine Character as the Foundation for Judgment
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
                "&ldquo;The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.&rdquo; &mdash; Nahum 1:7",
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
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
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
              Overview of Nahum 1
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 1 opens one of the most concentrated books in the Minor Prophets: a divine oracle against Nineveh, the capital of the Assyrian Empire that had dominated the ancient Near East for over a century. The chapter is structured around three movements. It begins with the theophanic poem of verses 2&ndash;6, which draws on Israel&rsquo;s oldest poetry to portray the avenging, jealous, and unstoppable God. It pivots at verse 7 to the declaration that this same God is good, a stronghold for those who trust him. And it closes in verses 9&ndash;15 with the oracle of comfort for Judah: the yoke of Assyria will be cut off, the enemy will be destroyed, and the feet of the good-news messenger will appear on the mountains. The theological architecture is precise: God&rsquo;s character is the foundation for both his judgment of Nineveh and his comfort of Judah.",
              }}
            />
            {overviewBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 1 is a chapter of extraordinary theological density, touching on the jealousy of God as covenant faithfulness, the theophany as the expression of divine sovereignty over creation, the inseparability of God&rsquo;s goodness and his judgment, and the connection between the ancient oracle against Nineveh and the New Testament gospel announced by Paul in Romans 10. These themes are not peripheral to biblical theology; they are central to the understanding of who God is and how he acts in history.",
              }}
            />
            {themeBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Walking through Nahum 1 verse by verse reveals a carefully constructed movement from the divine character (verses 2&ndash;6) to the divine promise (verse 7) to the divine judgment and comfort (verses 9&ndash;15). Each section builds on what precedes it, so that by the time the good-news messenger appears on the mountains in verse 15, the theological foundations for that announcement have been fully laid: the God who brings good news is the same jealous, avenging, good, and all-powerful God described at the chapter&rsquo;s opening.",
              }}
            />
            {verseBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 1 challenges comfortable assumptions about a God who is only ever gentle and accommodating. It insists that the God of the Bible is simultaneously jealous for his covenant people, patient beyond human expectation, powerful beyond all creaturely resistance, and genuinely good to those who take refuge in him. These truths have immediate practical weight for anyone living in a world where injustice appears to prosper and divine silence appears to be indifference.",
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
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>
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
          style={{
            marginTop: "3.5rem",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Nahum 1 with these video teachings on the character of God, the theophany of divine power, the promise of refuge for those who trust him, and the connection between the good news of Nahum and the gospel announced in Isaiah 52 and Romans 10.",
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
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${GREEN}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Closing Prayer
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Lord God, you are jealous for your covenant people and great in power, yet slow to anger &mdash; and you will by no means clear the guilty. We confess that we sometimes prefer a diminished version of you, a God whose anger never rises and whose patience has no purpose. But Nahum shows us the full truth of who you are: the God who makes mountains quake and rivers dry, and the same God who is good and who knows those who take refuge in you. We run to you as our stronghold in the day of trouble. We trust that your patience toward us has always been mercy, and we tremble at the thought of abusing it. Make us people who carry beautiful feet &mdash; who announce your victory over sin and death to those who have not yet heard. We pray in the name of Jesus, in whom your wrath was satisfied and your peace proclaimed. Amen.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
