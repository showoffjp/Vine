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
    heading: "Hezekiah&rsquo;s Men and the Second Solomonic Collection",
    reference: "Proverbs 25:1",
    accent: GOLD,
    paragraphs: [
      "Proverbs 25 opens with a brief but historically significant superscription: &ldquo;These also are proverbs of Solomon, which the men of Hezekiah king of Judah copied.&rdquo; This single verse tells us more about the transmission of wisdom literature in ancient Israel than almost any other passage in the Old Testament. The proverbs that follow are Solomonic in origin, rooted in the great era of royal wisdom that the Bible associates with the son of David. But they have been preserved and passed on by a scribal circle working centuries later in the court of Hezekiah, who reigned in Jerusalem around 715 to 686 BC.",
      "Hezekiah was himself one of the most reform-minded kings in Judah&rsquo;s history. His reign saw a systematic renewal of the temple worship, the celebration of Passover on a scale not seen since the days of Solomon, and a determined effort to recover what had been lost in the years of faithlessness that preceded him. It is entirely consistent with this reforming spirit that his court scribes would have undertaken the preservation and compilation of the Solomonic wisdom tradition. Copying proverbs was not mere clerical labor; it was an act of cultural and theological retrieval, an effort to pass on to the next generation the wisdom that God had given to Israel&rsquo;s greatest king.",
      "The collection that begins in Proverbs 25 and runs through chapter 29 has a character somewhat different from the chapters that precede it. The proverbs of chapters 10 through 22 tend to be tightly paired antithetical couplets &mdash; the righteous versus the wicked, the wise versus the fool. The Hezekian collection includes longer poetic comparisons, more extended sequences on particular themes, and a wider range of social settings. Court life, domestic relationships, the use of words, and the management of the self all receive extended attention in ways that give this section of Proverbs its distinctive texture.",
      "The opening focus on kings and courts in verses 1 through 7 grounds the whole collection in the social world of the royal household and its satellites. Israel&rsquo;s wisdom tradition was shaped in the royal court and was ultimately for the governance of the community under God&rsquo;s sovereignty. The wisdom collected by Hezekiah&rsquo;s men was not private contemplation; it was the practical and theological knowledge needed to run a kingdom, serve a king, and navigate the complex social world of the ancient Near East.",
    ],
  },
  {
    heading: "The Glory of Kings &mdash; Searching Out What Is Hidden",
    reference: "Proverbs 25:2&ndash;3",
    accent: PURPLE,
    paragraphs: [
      "Verses 2 and 3 set the tone for the collection&rsquo;s opening section with a fascinating contrast: &ldquo;It is the glory of God to conceal things, but the glory of kings is to search things out.&rdquo; This couplet does extraordinary theological and political work in two brief lines. On the one hand, it acknowledges that divine concealment is not a failure of God&rsquo;s communication but a mark of his glory. God is not bound to make all things plain; the hiddenness of divine ways is part of what makes God God rather than a mere oracle to be consulted and managed.",
      "On the other hand, the glory of human kingship &mdash; and by extension, of all responsible human governance and leadership &mdash; is the patient work of searching out what can be known. The king who simply waits for divine revelation without exercising the faculty of inquiry, investigation, and discernment has abdicated a fundamental responsibility of his office. Wisdom in the biblical tradition is never passive. It is the active, energetic pursuit of understanding in the sphere of human responsibility.",
      "Verse 3 extends the point with a complementary image: &ldquo;As the heavens for height, and the earth for depth, so the heart of kings is unsearchable.&rdquo; Where God&rsquo;s concealment is sovereign and unconstrained, the king&rsquo;s heart is unsearchable in a different sense &mdash; it is deep and complex, holding counsel that advisors and subjects cannot fully fathom. This is not a criticism of royal opacity but a recognition that leadership at the highest level carries dimensions of responsibility that cannot be reduced to transparent rule-following. The good king searches out what is hidden; the wise counselor recognizes that the king&rsquo;s heart, like heaven and earth, has depths beyond easy measurement.",
    ],
  },
  {
    heading: "Removing Dross and Removing the Wicked &mdash; Purifying the Court",
    reference: "Proverbs 25:4&ndash;5",
    accent: ROSE,
    paragraphs: [
      "Verses 4 and 5 offer one of the most elegant analogies in the book of Proverbs, linking the metallurgical process of silver-refining to the political process of court purification. When dross is removed from silver, the silversmith can work with pure metal and produce something worthy of a king. When the wicked are removed from the presence of the king, the throne is established in righteousness. The comparison does more than illustrate a political point; it suggests that the work of governance is an art form, like the work of the silversmith &mdash; requiring the patient, skilled removal of what corrupts in order to reveal what is genuinely valuable.",
      "The dross metaphor is particularly apt because dross is not foreign material that has been introduced from outside; it is present in the ore itself, part of what comes up from the ground. The wicked in the king&rsquo;s court are similarly not imports from some other kingdom; they are people who have risen within the system, been appointed to positions of trust, and then used those positions for corrupt purposes. The silversmith does not throw away the ore because it contains dross; he works the dross out. The king does not abandon the institution of court governance because wicked people infiltrate it; he exercises the discipline of removing them.",
      "The promise attached to this work of purification is significant: &ldquo;his throne will be established in righteousness.&rdquo; In the wisdom tradition of the Hebrew Bible, thrones are established not by military force or political cunning alone but by righteousness. Proverbs 16:12 states the principle directly: &ldquo;it is an abomination to kings to do evil, for the throne is established by righteousness.&rdquo; Proverbs 25:4&ndash;5 applies this principle to the specific practice of court purification, suggesting that the long-term stability of any governing institution depends on the willingness of those at the top to do the hard work of removing what corrupts the system from within.",
    ],
  },
  {
    heading: "Honor, Humility, and the Danger of Presumption Before Kings",
    reference: "Proverbs 25:6&ndash;7",
    accent: TEAL,
    paragraphs: [
      "Verses 6 and 7 are among the most practically pointed social instructions in the entire book of Proverbs: &ldquo;Do not put yourself forward in the king&rsquo;s presence or stand in the place of the great, for it is better to be told, &lsquo;Come up here,&rsquo; than to be put lower in the presence of the noble whom your eyes have seen.&rdquo; The instruction is about the management of social ambition in the specific context of royal courts, where the placement of individuals in relation to the king was a visible and carefully managed marker of honor and status.",
      "The wisdom being offered here is counterintuitive in a world that prizes self-promotion. The person who advances to the best seat assumes they deserve it and will be confirmed in their assumption by the event. But the social dynamics of honor in the ancient world were not so simple. Status in a court was not self-declared; it was conferred by the king, and the presumption of claiming a higher place than was warranted could result in a public demotion far more shameful than the modest seat the person had originally refused.",
      "Jesus echoes this proverb almost verbatim in Luke 14:8&ndash;11, in the parable of taking the lowest seat at a wedding feast. The Lukan application moves from the social setting of the royal court to the eschatological setting of the kingdom of God: those who exalt themselves will be humbled, and those who humble themselves will be exalted. What Proverbs 25:6&ndash;7 offers as practical social wisdom, Jesus elevates to a governing principle of the kingdom. The humble posture that waits to be called up is not merely socially smart; it reflects the orientation of the soul that recognizes all true honor comes from above.",
    ],
  },
  {
    heading: "The Art of the Timely Word &mdash; Apples of Gold in Settings of Silver",
    reference: "Proverbs 25:11&ndash;15",
    accent: GOLD,
    paragraphs: [
      "The center of Proverbs 25 is a sustained meditation on the power and beauty of words rightly used. Verse 11 offers one of the most celebrated images in the entire wisdom literature: &ldquo;A word fitly spoken is like apples of gold in a setting of silver.&rdquo; The image is of something crafted with extraordinary skill &mdash; gold fruit set in silver filigree, a piece of art that combines beauty of material with precision of workmanship. The word fitly spoken achieves the same effect in the medium of human communication: it is the right content in the right form delivered at the right moment, and the result is something genuinely beautiful.",
      "Verse 12 extends the image: &ldquo;Like a gold ring or an ornament of gold is a wise reprover to a listening ear.&rdquo; The reproof is gold, the listening ear is the setting that receives it. This is a significant observation: the beauty of a wise reproof depends not only on the skill of the one who offers it but on the receptivity of the one who receives it. A gold ring thrown in the mud is still gold, but its beauty is obscured. A wise reproof delivered to a hardened heart may be equally faithful and equally unappreciated. The creation of something beautiful requires both the skilled maker and the receptive receiver.",
      "Verse 13 pivots to the messenger: &ldquo;Like the cold of snow in the time of harvest is a faithful messenger to those who send him; he refreshes the soul of his masters.&rdquo; In the scorching heat of a Palestinian summer harvest, the cool of snow from the mountains was precious beyond ordinary measure. The faithful messenger who carries the exact word that was entrusted to him, without addition or subtraction, and who arrives at the right time, provides exactly this kind of refreshment to those who depend on him. The connection between faithful speech and refreshment runs through this section of the chapter as a governing theme.",
      "Verse 15 draws the practical conclusions: &ldquo;With patience a ruler may be persuaded, and a soft tongue will break a bone.&rdquo; The juxtaposition is deliberately paradoxical &mdash; patience persuading a ruler (implying the hard work of sustained, respectful engagement over time) and a soft tongue breaking bone (implying that gentle persistence achieves what force cannot). The wisdom on words in this section of Proverbs 25 converges on the point that effective communication is not primarily a matter of volume or force but of timing, gentleness, faithfulness, and patient persistence.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Royal Wisdom &mdash; Leadership That Searches and Purifies",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 25 opens with a cluster of wisdom sayings that together constitute a theology of royal leadership. The king who searches out what is hidden (v. 2), the king who removes the wicked from his presence (v. 5), the king whose heart is as deep as the heavens and the earth (v. 3) &mdash; these images collectively describe what wisdom looks like at the level of governance. It is active, not passive; it is ethical, not merely strategic; and it requires the kind of deep, unsearchable discernment that makes a royal heart genuinely kingly rather than merely powerful.",
      "The dross-and-silver metaphor of verses 4 and 5 is particularly rich for the theology of leadership. The refining process is not a one-time event but a sustained discipline. The silversmith does not remove all the dross in a single pass; he heats, tests, removes, heats again, and tests again until the metal is pure. The king who is serious about establishing his throne in righteousness undertakes the same kind of sustained, patient discipline &mdash; not a single dramatic purge of the court but a constant attentiveness to the presence of corruption and a consistent willingness to remove it.",
      "These opening sayings about kings are not merely advice for monarchs. In the wisdom tradition, the king is the representative human being whose life embodies the qualities that every member of the covenant community is called to cultivate. The glory of searching out what is hidden belongs in principle to every image-bearer who has been given dominion over some sphere of life. The discipline of removing dross from silver is available to every leader, parent, teacher, pastor, or manager who takes seriously their responsibility to purify the sphere they govern.",
    ],
  },
  {
    heading: "The Power of the Well-Timed Word",
    accent: GOLD,
    paragraphs: [
      "No theme is more central to Proverbs 25 than the extraordinary power of words rightly timed and rightly shaped. The chapter returns repeatedly to the image of the right word in the right moment: the apples of gold in settings of silver (v. 11), the wise reproof to the listening ear (v. 12), the faithful messenger who refreshes (v. 13), the soft tongue that breaks a bone (v. 15). The cumulative picture is of a wisdom tradition that takes the spoken and written word with profound seriousness.",
      "The emphasis on timing is especially striking. A word fitly spoken is not only the right word; it is the right word at the right moment. The Hebrew behind &ldquo;fitly spoken&rdquo; (al-ophanav) literally means &ldquo;upon its wheels&rdquo; or &ldquo;on its occasions&rdquo; &mdash; a metaphor drawn from the smooth, effortless movement of a well-made cart or chariot. The well-timed word moves in the right direction at the right speed without friction or resistance. Wisdom in speech is not simply about having the right content; it is about the discernment that knows when to speak, how much to say, and how to shape the words so that they arrive at their destination without unnecessary resistance.",
      "The inverse is also implied throughout this section: words spoken at the wrong time, in the wrong form, without the discipline of patience, do damage proportional to the good that well-timed words could have done. Verse 20 captures this: using a song to a heavy heart is as harmful as vinegar on soda &mdash; the reaction is violent and counterproductive. The wisdom of Proverbs 25 on words is not only about the cultivation of eloquence; it is about the deep attentiveness to persons and situations that enables one to know what is needed in each moment.",
    ],
  },
  {
    heading: "Patience with Enemies &mdash; Coals of Fire",
    accent: ROSE,
    paragraphs: [
      "Verses 21 and 22 contain one of the most demanding and theologically dense instructions in the entire book of Proverbs: &ldquo;If your enemy is hungry, give him bread to eat, and if he is thirsty, give him water to drink, for you will heap burning coals on his head, and the LORD will reward you.&rdquo; The instruction is remarkable on multiple levels. It does not advise ignoring the enemy, maintaining a safe distance, or praying for the enemy in the abstract. It requires active, concrete, generous provision: food and water, the most basic necessities of life.",
      "The image of heaping burning coals on the enemy&rsquo;s head has been interpreted in two main ways across the history of interpretation. One reading, favored in the ancient Near Eastern context, understands the coals as a symbol of shame and conviction &mdash; the Egyptian custom of carrying a pan of burning coals on one&rsquo;s head as a public gesture of penitence. On this reading, the generous act of providing food and water shames the enemy into repentance by demonstrating a quality of character the enemy cannot match. The other reading sees the coals as a metaphor for the divine judgment that the generous act sets in motion &mdash; God&rsquo;s vindication of the one who refuses to take revenge.",
      "The apostle Paul quotes this proverb in Romans 12:20 as part of his extended argument against personal revenge and for the active love of enemies. His framing suggests the first interpretation: the generous provision for the enemy is a way of &ldquo;overcoming evil with good&rdquo; by demonstrating a quality of mercy that has the power to shame and transform the enemy. The LORD&rsquo;s reward mentioned in the proverb is not primarily about the enemy being punished; it is about the generous person being blessed. The wisdom of Proverbs 25:21&ndash;22 is the wisdom of the cross, applied to the texture of daily neighborly life: meet hostility with provision, meet hatred with generosity, and leave the outcome to the LORD.",
    ],
  },
  {
    heading: "Self-Control as the Foundation of Character",
    accent: TEAL,
    paragraphs: [
      "Proverbs 25 closes with one of its most memorable images: &ldquo;A man without self-control is like a city broken into and left without walls.&rdquo; (v. 28) In the ancient world, a city without walls was not merely unprotected; it was fundamentally unable to function as a city. The walls were the boundary between the ordered life of the city and the chaos of the undefended plain. A city whose walls had been breached or left unbuilt was exposed to every threat, unable to maintain the order and security that made civic life possible.",
      "The application to the individual is precise and searching. Self-control &mdash; the capacity to regulate one&rsquo;s own impulses, appetites, and reactions &mdash; is the &ldquo;walls&rdquo; of the human character. Without it, every temptation finds easy entry, every emotion overruns its banks, every appetite demands immediate satisfaction, and the person who might have built something lasting instead remains perpetually vulnerable to the next assault from without or within. The person without self-control is not merely weak in one area; they are fundamentally undefended, a city open to any adversary.",
      "This theme is prepared for throughout the chapter by the various instructions about restraint: do not presume to a higher seat (vv. 6&ndash;7), do not eat too much honey (v. 16), do not visit your neighbor too often (v. 17), do not boast of gifts you have not given (v. 14). All of these are applications of the same governing principle: the wise person exercises discipline over appetites, ambitions, and social habits that, left unchecked, damage relationships and character. The final verse about the wall-less city brings all of these particular applications to their governing image: self-control is not a minor virtue but the structural foundation on which the whole edifice of character stands.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 3 &mdash; The Glory of God, the Glory of Kings",
    reference: "Proverbs 25:1&ndash;3",
    accent: GOLD,
    paragraphs: [
      "Verse 1 provides the historical anchor for the collection: these are Solomonic proverbs preserved by Hezekiah&rsquo;s scribes. The collecting and copying of wisdom is itself a wise act; the tradition does not preserve itself but requires the deliberate labor of those in each generation who recognize its value and take responsibility for its transmission. Hezekiah&rsquo;s court scribes are in this sense models of the kind of wisdom stewardship the collection itself teaches.",
      "Verse 2 offers the governing theological couplet for the section on kings: &ldquo;It is the glory of God to conceal things, but the glory of kings is to search things out.&rdquo; The asymmetry is intentional and theologically important. God&rsquo;s glory is expressed in hiddenness &mdash; in the unsearchable depths of his ways, the mystery of his counsel, the vast reaches of his knowledge that no creature can fully plumb. Human glory, and specifically royal glory, is expressed in the active pursuit of what can be known &mdash; in the tireless work of searching out truth, administering justice, governing wisely.",
      "Verse 3 extends the royal theme with an image of depth: the king&rsquo;s heart is as deep as the heavens and the earth. This is not a criticism but a recognition of the genuine complexity of leadership at the highest level. The advisor or subject who assumes they can fully understand the mind of a good king is as presumptuous as the one who thinks they can measure the height of the sky. Leadership at the royal level involves holding in tension considerations that no outside observer can fully weigh, and the wise counselor respects this depth even while offering their best wisdom.",
    ],
  },
  {
    heading: "Verses 4 to 5 &mdash; Remove Dross, Remove the Wicked",
    reference: "Proverbs 25:4&ndash;5",
    accent: ROSE,
    paragraphs: [
      "The silver-refining analogy of verses 4 and 5 is one of the most complete analogies in Proverbs, functioning on every level of the comparison simultaneously. The dross is to the silver as the wicked are to the king&rsquo;s court. The silversmith&rsquo;s work of removing dross is analogous to the king&rsquo;s work of removing the wicked. The result of purified silver &mdash; material fit for the craftsman to work with &mdash; is analogous to a throne established in righteousness.",
      "The word for &ldquo;dross&rdquo; (Hebrew sigim) refers to the slag and impurities that are burned off in the refining process and that, if left in the metal, make it weak, brittle, and unable to hold the shapes the craftsman intends. The wicked in the court are similarly not just morally bad individuals; they are structural weaknesses in the governing institution, people whose corruption makes the whole system less able to achieve the just outcomes that governance is meant to produce.",
      "The promise of verse 5 &mdash; that the king&rsquo;s throne will be established in righteousness when the wicked are removed &mdash; is not a guarantee of perpetual power for any particular regime. It is a statement about the conditions under which legitimate authority flourishes. The throne that God establishes and sustains is the throne that actively pursues justice and removes what corrupts it. This is the wisdom of Proverbs on governance in its most concentrated form: the long-term stability of authority is a moral achievement, not merely a political one.",
    ],
  },
  {
    heading: "Verses 6 to 10 &mdash; Humility Before Rulers, Caution Before Courts",
    reference: "Proverbs 25:6&ndash;10",
    accent: PURPLE,
    paragraphs: [
      "Verses 6 and 7 offer the memorable instruction about not presuming to a higher seat in the presence of the king. The social dynamics being addressed are specific to the ancient court: the placement of guests in relation to the king was a carefully managed public statement of their status and the king&rsquo;s regard for them. To occupy a place above one&rsquo;s station was not merely an embarrassing social gaffe; it was a presumption against the king&rsquo;s authority to determine the honor order of his own court. The wise person waits to be called up rather than claiming a position that has not been granted.",
      "Verses 8 through 10 shift from the court to the legal setting, warning against the impulsive rush to litigation: &ldquo;Do not hastily bring into court, for what will you do in the end, when your neighbor puts you to shame?&rdquo; The legal system in ancient Israel was the arena in which disputes between neighbors were resolved, and the temptation to use it as a weapon of first resort rather than a last resort was apparently a persistent problem. The wisdom instruction is to work things out first privately and directly with the neighbor, because the public airing of a dispute carries costs that the person who rushes to court has typically not calculated.",
      "Verse 10 adds the social consequence: if you reveal another&rsquo;s secrets in the legal process, your reputation for discretion is permanently damaged and you cannot easily undo it. The privacy of neighbor relationships is a social good that benefits everyone in the community; the person who blows up that privacy in the heat of a dispute has made an enemy not only of the neighbor but of the community norms that make neighborly life possible. The wisdom of these verses is about the discipline of restraint &mdash; not every grievance needs to become a lawsuit, not every conflict needs a public arena.",
    ],
  },
  {
    heading: "Verses 11 to 15 &mdash; Words Fitly Spoken, Faithful Messengers, Soft Tongues",
    reference: "Proverbs 25:11&ndash;15",
    accent: GOLD,
    paragraphs: [
      "Verse 11&rsquo;s image of apples of gold in a setting of silver is the aesthetic peak of the chapter. Gold fruit in silver filigree was a luxury item in the ancient world, the kind of thing that required the skills of a master craftsman and the resources of a wealthy patron. The comparison of a fitly spoken word to such an object elevates good speech to the level of high art &mdash; something that requires skill, taste, and the ability to match content to form with exquisite precision.",
      "Verse 12 turns to the specific case of wise reproof: it is like a gold ring or ornament of gold to the listening ear. The reproof in the wisdom tradition is not the opposite of a kind word; it is one of the highest forms of kindness, delivered by the one who cares enough about the other person to name what is wrong. The comparison to a gold ornament suggests that a wise reproof, received well, is something the hearer carries with them as a permanent adornment &mdash; a piece of wisdom incorporated into the life of the one who was humble enough to accept it.",
      "Verse 14 offers a sharp negative counterpart: &ldquo;Like clouds and wind without rain is a man who boasts of a gift he does not give.&rdquo; In a desert climate, the sight of clouds on the horizon raises genuine hope for the rain that is always needed and often scarce. When those clouds produce no rain, the disappointment is proportional to the expectation they raised. The person who makes promises they do not keep raises the same kind of hope and produces the same kind of bitter disappointment. The image connects the failure of words to the failure of provision: empty promises are a form of drought.",
    ],
  },
  {
    heading: "Verses 16 to 22 &mdash; Honey, Neighbors, Enemies, and Coals of Fire",
    reference: "Proverbs 25:16&ndash;22",
    accent: ROSE,
    paragraphs: [
      "Verses 16 and 17 offer a pair of related instructions about moderation in good things. Honey, which throughout Proverbs and Psalms is an image of sweetness and pleasure, is not to be eaten in excess &mdash; too much of even the best thing produces disgust and satiation. The neighbor&rsquo;s house, which is a blessing of community and mutual support, is not to be visited so often that the neighbor grows weary of one&rsquo;s presence. The principle connecting both instructions is the wisdom of self-regulated restraint: the discipline of not consuming even good things beyond what is genuinely beneficial.",
      "Verses 18 through 20 cluster a series of images for faithlessness and insensitivity. The false witness against a neighbor is a war club, a sword, a sharp arrow &mdash; weapons that inflict serious and lasting damage. The unfaithful person in a time of trouble is a bad tooth and a lame foot &mdash; things that fail precisely when they are most needed and that cause pain in the failing. And the person who sings songs to a heavy heart is as disruptive as vinegar on soda &mdash; the mismatch between what the situation requires and what is offered produces a kind of chaos rather than comfort.",
      "Verses 21 and 22 culminate the section with the most demanding social instruction in the chapter: feed your hungry enemy, give your thirsty enemy water to drink. The rationale is doubled &mdash; the practical effect is coals of fire on the enemy&rsquo;s head (shame or divine judgment that belongs to God alone), and the theological effect is the LORD&rsquo;s reward for the one who practices this costly generosity. The proverb puts the entire practice of enemy-love within the frame of divine sovereignty: the outcome belongs to the LORD, and the act of feeding the enemy is an act of trust that he will handle the consequences.",
    ],
  },
  {
    heading: "Verses 23 to 28 &mdash; Quarrelsome Wives, Cold Water, and the Wall-less City",
    reference: "Proverbs 25:23&ndash;28",
    accent: TEAL,
    paragraphs: [
      "Verse 23 uses the north wind and rain as a comparison for the backbiting tongue and the angry face: just as the north wind produces rain predictably and reliably, the slanderous tongue reliably produces angry and hostile responses. The wisdom observation is about the consequences of speech: slander is not a victimless act whose harm stays with the slanderer. It produces a social atmosphere of anger and suspicion that affects everyone in the community.",
      "Verse 25 is one of the most warmly human verses in all of Proverbs: &ldquo;Like cold water to a thirsty soul, so is good news from a far country.&rdquo; The physical relief of cold water in hot weather is the vehicle for the emotional and relational relief of hearing that someone far away is well, that a distant friend is prospering, that news from the outside world is good rather than bad. The proverb humanizes the wisdom tradition by grounding it in the most immediate physical experiences of the body, using them as transparent analogies for the deepest movements of the heart.",
      "Verse 26 warns about the righteous person who gives way before the wicked: this is like a muddied spring or a polluted fountain. The image is of a water source that should be clean and life-giving but has been compromised at its source. When the righteous capitulate to the wicked rather than standing for what is right, they do not simply become less righteous in themselves; they corrupt the community&rsquo;s access to justice and truth. The chapter closes in verse 28 with the wall-less city image for the person without self-control, bringing the whole collection to its governing principle: the disciplined management of the self is the foundation on which every other virtue is built and maintained.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "The Art of the Well-Timed Word",
    accent: GOLD,
    paragraphs: [
      "The sustained meditation on words in Proverbs 25 calls every reader to a more deliberate relationship with their own speech. The apples-of-gold image is aspirational: words can be things of genuine beauty and extraordinary impact when they are crafted with skill, delivered with care, and timed with wisdom. But most of us, most of the time, speak without the discipline that this kind of speech requires. We say what we think when we think it, without waiting for the right moment, without shaping the content to fit the form, without considering whether the word that is true is also the word that is needed at this moment.",
      "The practical application that Proverbs 25 invites is the discipline of intentional speech &mdash; not silence for its own sake, but the cultivation of the attentiveness to persons and situations that makes well-timed words possible. This requires listening before speaking, understanding the emotional and relational context of the person one is addressing, and developing the patience to wait for the moment when the right word can land well rather than forcing the word into a moment when it will only produce resistance. Verse 15 captures this: a soft tongue breaks a bone. Gentle persistence over time achieves what forceful insistence in a moment cannot.",
      "For those in roles where words carry particular weight &mdash; pastors, teachers, counselors, parents, managers &mdash; the wisdom of this chapter is a call to take the craft of speech with the seriousness of the silversmith taking the craft of refining. The goal is not elaborate eloquence but the simple, beautiful achievement of the right word at the right moment: the apple of gold, fitting perfectly in its silver setting, achieving in the medium of human speech what only genuine wisdom can produce.",
    ],
  },
  {
    heading: "Serving Faithfully Without Self-Promotion",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 25:6&ndash;7 and the broader section on court wisdom speak directly to the temptation of self-promotion that is present in every hierarchical structure, from ancient royal courts to modern workplaces and churches. The instruction not to put yourself forward in the king&rsquo;s presence is not advice about social timidity; it is wisdom about the relationship between true competence and the honor that comes from above. The person who takes the higher seat without being invited has prioritized their own assessment of their worth over the king&rsquo;s judgment, and the results are typically humiliating.",
      "The positive vision implied by the instruction is one of faithful, excellent service that trusts the right authorities to recognize and reward genuine contribution. This is a form of contentment with one&rsquo;s current station combined with the confident investment of one&rsquo;s gifts in the work at hand. The wise courtier does not avoid ambition; he channels it into excellent service rather than into self-promotion. The assumption underlying the instruction is that genuine excellence will be recognized &mdash; &ldquo;Come up here&rdquo; is a real possibility &mdash; but the timing and initiative belong to the king rather than to the courtier.",
      "In the theological register, this wisdom connects directly to the New Testament teaching about the last being first and the humble being exalted. The person who serves faithfully without seeking recognition is operating within the economy of divine recognition, where the LORD who sees in secret rewards openly. Proverbs 25 frames this as practical social wisdom; Jesus and the apostles frame it as eschatological reality. The shape of the wisdom is the same: do excellent work, serve the people in your care, trust the recognition to those above you, and let the Lord handle the final placement.",
    ],
  },
  {
    heading: "Practical Enemy-Love &mdash; Feeding the Hungry Foe",
    accent: ROSE,
    paragraphs: [
      "Proverbs 25:21&ndash;22 is among the most practically demanding verses in the wisdom literature, and the apostle Paul&rsquo;s quotation of it in Romans 12 makes its demands even clearer by placing them in the context of Christian ethics shaped by the cross. The instruction is not to pray for one&rsquo;s enemy in the abstract (though that is also commanded elsewhere) but to act concretely for the enemy&rsquo;s physical welfare. If the enemy is hungry, give bread. If the enemy is thirsty, give water. The basis is not that the enemy deserves it but that God is the one who determines the response to this act of generosity.",
      "The practical difficulty of this instruction is not in understanding it; it is in doing it when the wounds from the enemy are still fresh, when the provocation is recent, when the memory of what the enemy did is most vivid. Proverbs 25 does not pretend that this is easy; it presents it as wisdom, which is to say that it is the kind of thing that requires deliberate choice and the kind of character that has been built through sustained practice. The person who is habitually self-controlled (v. 28), who does not presume to places they have not been given (vv. 6&ndash;7), who exercises patience (v. 15), is also the person capable of feeding a hungry enemy when the moment comes.",
      "The promised outcome &mdash; coals of fire on the enemy&rsquo;s head and the LORD&rsquo;s reward to the giver &mdash; is both a description of what happens in the moral universe when generosity meets hostility, and a tacit instruction to stop trying to manage the outcome oneself. The person who feeds the enemy has given up the project of managing the enemy&rsquo;s response and entrusted it to the God who sees all things and rewards all things rightly. This is the wisdom of trust: doing what is right and leaving what happens next in the hands of the LORD.",
    ],
  },
  {
    heading: "The Discipline of Self-Control &mdash; Restoring the Broken Wall",
    accent: TEAL,
    paragraphs: [
      "Proverbs 25:28 &mdash; &ldquo;A man without self-control is like a city broken into and left without walls&rdquo; &mdash; is one of those verses that functions as a diagnostic tool when read honestly. The image invites a straightforward question: where are my walls broken? In what areas of life do I lack the self-regulation that would make me genuinely defensible against the temptations and pressures that assault me? The wall metaphor is unsparing: a city without walls is not mostly protected; it is fundamentally vulnerable in a way that affects everything within its boundaries.",
      "The practical work of building self-control is the work of establishing habits of restraint in the specific areas where the walls are most broken. Proverbs 25 offers a catalogue of those areas: the appetite for too much honey (v. 16), the tendency to visit the neighbor too often (v. 17), the impulse to rush to court over a grievance (vv. 8&ndash;10), the temptation to claim a higher seat than has been granted (vv. 6&ndash;7). Each of these is a specific domain in which the discipline of restraint builds the walls of character. The cumulative effect of practicing restraint in many small areas is a character that is genuinely defended, genuinely capable of holding the ordered life that wisdom makes possible.",
      "The theological ground for this discipline is not mere willpower but the trust in God that makes self-promotion unnecessary and the experience of God&rsquo;s provision that makes overconsumption irrational. The person who knows that God will provide does not need to grab all the honey at once. The person who trusts that God will honor faithful service does not need to claim the best seat. The self-control that Proverbs 25 holds out as the governing virtue of the wise person is not a stoic achievement of willpower; it is the fruit of a life ordered around the conviction that the LORD is the sovereign over all things, including the outcomes of one&rsquo;s own restrained and faithful action.",
    ],
  },
];

const reflectionQuestions = [
  "Proverbs 25:11 describes a word fitly spoken as apples of gold in a setting of silver. Think of the conversations on your horizon in the coming days. What would it look like to bring that quality of intentionality &mdash; right word, right form, right timing &mdash; to one of those conversations?",
  "Verses 6 and 7 warn against self-promotion in the presence of the king. Where in your life are you most tempted to claim recognition or position that has not yet been granted? What would it mean to trust the right authorities to call you up rather than advancing yourself?",
  "Verses 21 and 22 command feeding the hungry enemy. Is there an enemy, a person who has wronged you, in your life right now? What would concrete provision for that person&rsquo;s welfare look like, and what would it require of you to do it?",
  "Verse 28 compares the person without self-control to a city left without walls. In which specific area of your life are your walls most broken? What is one practical discipline you could begin building to repair that breach?",
  "Verse 25 says good news from a far country is like cold water to a thirsty soul. Who in your life is waiting for good news, encouragement, or a word of faithful love from you? What is preventing you from sending it, and what would it cost you to send it today?",
];

const videoItems = [
  { videoId: "nY7pZ3cQsE9", title: "Proverbs 25 &mdash; Hezekiah&rsquo;s Men and the Second Solomonic Collection" },
  { videoId: "bX4wL8dNqF6", title: "Apples of Gold in Settings of Silver &mdash; The Power of the Well-Timed Word (Proverbs 25)" },
  { videoId: "cP5vM9eKrH3", title: "Feed Your Enemy &mdash; Coals of Fire and Practical Enemy-Love in Proverbs 25" },
  { videoId: "dQ6wN1fLtJ8", title: "The City Without Walls &mdash; Self-Control and Character in Proverbs 25:28" },
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
          style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.1rem" }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", borderLeft: `3px solid ${block.accent}55`, paddingLeft: "1.25rem" }}>
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

export default function Proverbs25GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs Chapter 25
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            Court Wisdom, the Timely Word, and the City Without Walls
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;A word fitly spoken is like apples of gold in a setting of silver.&rdquo; &mdash; Proverbs 25:11" }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem", paddingTop: "0.5rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
                color: activeTab === t ? "#07070F" : MUTED,
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Proverbs 25</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 25 opens the second Solomonic collection, preserved and transmitted by the scribes of King Hezekiah. The chapter is a rich and varied anthology of wisdom sayings covering court conduct, the power of words, relationships with neighbors and enemies, and the discipline of self-control. It moves from the lofty (the glory of God in concealment and the glory of kings in searching) to the intimate (a word fitly spoken, a faithful messenger, a hungry enemy), always returning to the governing conviction that wisdom is practical, relational, and ordered toward the flourishing of the community under God&rsquo;s sovereign care." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Four major themes give Proverbs 25 its theological coherence. Royal wisdom frames the chapter&rsquo;s opening and gives it its governing social setting. The power of the well-timed word runs through the heart of the chapter as its most sustained and beautiful meditation. Patience with enemies in the form of the coals-of-fire instruction offers one of the most demanding and theologically rich applications in all of wisdom literature. And self-control as the structural foundation of character gives the chapter its closing image and its organizing principle." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through Proverbs 25 section by section reveals a carefully arranged movement from court wisdom (vv. 1&ndash;7) through social and legal counsel (vv. 8&ndash;10) to the extended meditation on words (vv. 11&ndash;15) and then through a series of social and domestic instructions (vv. 16&ndash;27) to the governing image of the wall-less city (v. 28). The variety of subjects is unified by the consistent concern with wisdom as the practical management of oneself in relation to others under God&rsquo;s sovereignty." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 25 is a chapter about the practical shape of wisdom in the texture of daily life. It asks what our speech sounds like, whether we manage our ambitions wisely, how we treat the people who have wronged us, and whether we have the self-discipline to hold together the ordered life that wisdom makes possible. Its application is not primarily about acquiring new information but about forming new habits of speech, restraint, generosity, and trust in the God who governs all outcomes." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
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

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into Proverbs 25 with these video teachings on Hezekiah&rsquo;s scribal collection, the art of the well-timed word, the radical enemy-love of verses 21 and 22, and the governing image of the city without walls." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Wisdom Begins in the Fear of the LORD</h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "The court wisdom, the art of timely speech, the discipline of enemy-love, and the self-control that Proverbs 25 holds out as marks of the wise person are not skills that can be cultivated in isolation from the fear of the LORD. They flow from the same source as all wisdom in the biblical tradition &mdash; the settled conviction that God is sovereign over all outcomes, that he sees and rewards what is done in faithfulness, and that trust in him is the most rational and most beautiful foundation for a human life. Hezekiah&rsquo;s scribes preserved Solomon&rsquo;s wisdom because they believed that; they passed it on so that every generation could receive the same invitation to build their lives on the same foundation." }}
          />
        </div>
      </main>
    </div>
  );
}
