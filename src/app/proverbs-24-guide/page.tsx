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
    heading: "Do Not Envy Evil Men &mdash; The Wisdom of the Long View",
    reference: "Proverbs 24:1&ndash;2",
    accent: ROSE,
    paragraphs: [
      "Proverbs 24 opens with a command that appears so natural it can be overlooked: &ldquo;Do not envy wicked men, do not desire their company; for their hearts plot violence and their lips talk about making trouble.&rdquo; The verse addresses something every honest person has felt &mdash; the sneaking suspicion that the wicked have it better, that their willingness to bend the rules, cut the corners, and ignore the conscience gives them an advantage that the righteous are denied by their own integrity.",
      "The antidote the sage offers is not merely &ldquo;try harder not to envy.&rdquo; It is a reorientation of perception. We envy the wicked when we look at the surface of their lives &mdash; the possessions, the ease, the apparent freedom. But the proverb directs our attention beneath the surface to what their hearts are actually doing: plotting violence and scheming trouble. The very energy of their lives is devoted to what destroys. What looks like flourishing is built on sand that is already shifting.",
      "This opening sets the keynote for the entire chapter. Proverbs 24 is a chapter about the long view &mdash; what happens at the end of the paths that various people walk. The wicked have no future (v. 20), the righteous rise again (v. 16), and the sluggard&rsquo;s field tells the story of where negligence ends (vv. 30&ndash;34). Wisdom sees the end from the beginning and makes decisions accordingly. Envy, by contrast, only sees the present moment and is fooled by what glitters on the surface.",
      "The command not to desire the company of the wicked reinforces the social dimension of the choice. Our associations shape our aspirations. To spend time with those who are scheming evil is to begin to find their goals plausible, their methods reasonable, and their prosperity desirable. The sage&rsquo;s wisdom is not merely about thought control but about the cultivation of friendships and community that align with the pursuit of wisdom.",
    ],
  },
  {
    heading: "By Wisdom a House Is Built &mdash; Knowledge Fills the Rooms",
    reference: "Proverbs 24:3&ndash;4",
    accent: GOLD,
    paragraphs: [
      "Verses 3 and 4 are among the most compact and memorable in the book of Proverbs: &ldquo;By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches.&rdquo; The house is simultaneously a literal dwelling, a metaphor for family and household, and an image of any lasting human project. The thesis is that what gives permanence to a structure is not the material from which it is built but the wisdom with which it is designed and maintained.",
      "Three terms are arranged in ascending order: wisdom, understanding, and knowledge. Wisdom (chokmah) is the foundational skill for living well &mdash; the deep perception of how things actually work in God&rsquo;s ordered world. Understanding (binah) is the capacity to discern between options, to reason carefully from principle to practice. Knowledge (da&rsquo;ath) is the intimate acquaintance with reality, including the reality of God, that comes from sustained attention and experience.",
      "The progressive movement in the couplet is significant. Wisdom builds the house &mdash; it is what gets the structure up at all. Understanding establishes it &mdash; it is what gives the structure stability and confirms it as genuinely sound rather than merely impressive in the short term. And knowledge fills the rooms with all precious and pleasant riches &mdash; it is what populates the established structure with what truly enriches life. The image is of a home that is not merely standing but full of good things.",
      "Applied to families, churches, businesses, and friendships, the couplet asks a searching question: What am I building on, and what is filling the rooms? Many structures are built on the foundations of wealth, charisma, or social connection, and they may stand for a time, but without wisdom as the ground and understanding as the frame, they are vulnerable to the first serious test. The house built by wisdom, established by understanding, and filled by knowledge is the one that endures.",
    ],
  },
  {
    heading: "A Wise Man Is Mightier Than a Strong Man",
    reference: "Proverbs 24:5&ndash;6",
    accent: TEAL,
    paragraphs: [
      "&ldquo;A wise man is full of strength, and a man of knowledge enhances his might, for by wise guidance you can wage your war, and in abundance of counselors there is victory.&rdquo; These verses make a claim that runs directly counter to the instinct of every culture that prizes raw power. Strength matters, but wisdom multiplies strength. The soldier who fights wisely will prevail over the one who fights harder but blindly.",
      "The comparison is not simply individual &mdash; wise person versus strong person. The reference to abundance of counselors introduces the social and communal dimension of wisdom. Victory in the most demanding contests of life &mdash; the word translated &ldquo;war&rdquo; covers any serious conflict or difficulty &mdash; comes not to the individual who is strongest but to the community that is wisest and most willing to seek and receive counsel.",
      "This proverb guards against two opposite errors. The first is the pride that refuses counsel, confident in its own strength and judgment. The lone wolf who trusts his instincts alone, who never asks for input and never submits to outside wisdom, is trading genuine advantage for the feeling of independence. The second error is the paralysis that seeks so much counsel it never acts. The proverb is not a call to endless committee work but to the kind of wisdom that actively seeks good counsel and then acts on it decisively.",
      "The New Testament resonance is unmistakable. Paul in Ephesians 6 describes the spiritual armor of the believer and grounds the whole of the Christian warfare not in individual prowess but in the community of those &ldquo;praying at all times in the Spirit, with all prayer and supplication&rdquo; for one another. The abundance of counselors in Proverbs 24 finds its highest expression in the body of Christ, a community of wisdom pooled through prayer, Scripture, and mutual accountability.",
    ],
  },
  {
    heading: "Faint Not in the Day of Adversity",
    reference: "Proverbs 24:10",
    accent: PURPLE,
    paragraphs: [
      "Verse 10 is one of the most searching single-verse assessments in all of Proverbs: &ldquo;If you faint in the day of adversity, your strength is small.&rdquo; The verse is deliberately terse, almost brutal in its brevity. It does not explain or sympathize; it simply states a diagnostic truth. The day of adversity is a test that reveals what was already present in a person. The fainting is not what makes the strength small &mdash; it reveals that the strength was always small.",
      "This is the logic of the trial in biblical wisdom. Adversity does not create character; it exposes it. The person who thought themselves strong and courageous and faithful discovers, when the pressure is actually applied, what they are actually made of. This can be a humiliating and clarifying moment. It is not a reason for despair but for honest self-assessment and the seeking of a strength greater than one&rsquo;s own.",
      "The positive implication of this harsh diagnostic is equally important: those who do not faint in the day of adversity demonstrate that their strength is real. The righteous man of verse 16 falls seven times and rises again. The falling is not the opposite of strength; it is the context in which genuine strength is displayed. Persistence under pressure &mdash; getting up again, continuing to trust, refusing to abandon the path of wisdom even when it costs &mdash; is the mark of the person whose foundation is truly sure.",
      "Christians reading this verse are drawn toward the One who &ldquo;did not faint or grow weary&rdquo; in the language of Isaiah, the Servant who bore the adversity of the cross without fainting and was raised again in the strength of the Spirit. Our strength in the day of adversity is not ultimately our own; it is the strength of the One who has passed through the ultimate adversity on our behalf and now lives to intercede for us in the midst of ours.",
    ],
  },
  {
    heading: "Rescue Those Being Taken Away to Death",
    reference: "Proverbs 24:11&ndash;12",
    accent: GREEN,
    paragraphs: [
      "Verses 11 and 12 deliver one of the most urgent ethical imperatives in the whole of Proverbs: &ldquo;Rescue those who are being taken away to death; hold back those who are stumbling to the slaughter. If you say, &lsquo;Behold, we did not know this,&rsquo; does not he who weighs the heart perceive it? Does not he who keeps watch over your soul know it, and will he not repay man according to his work?&rdquo;",
      "The command to rescue is active and physical &mdash; the words are the language of intervention, of putting oneself between someone and their destruction. The sage does not describe a passive observation of human danger but a call to place oneself at personal cost in the path of someone else&rsquo;s peril. The &ldquo;death&rdquo; and &ldquo;slaughter&rdquo; encompass both literal and figurative endangerment &mdash; the neighbor in mortal danger, the friend spiraling toward self-destruction, the stranger being swept away by forces larger than they can manage alone.",
      "The response anticipated in verse 12 &mdash; &ldquo;we did not know this&rdquo; &mdash; is the classic plea of plausible deniability. I did not see; I did not know; I cannot be held responsible for what I did not notice. The proverb cuts through this excuse with the reminder that there is One who always knows. The God who weighs the heart &mdash; the very image used in Egyptian and Hebrew thought for moral accounting &mdash; perceives whether the not-knowing was genuine ignorance or the willful looking-away that chose comfort over responsibility.",
      "The verse is not a guilt-inducing bludgeon but a clarifying call to the kind of attention that wisdom requires. Wisdom is not only about the management of one&rsquo;s own affairs; it is about seeing and responding to the need of others. The wise person of Proverbs is not a detached philosophical observer but a person embedded in a community, alert to its dangers, and willing to act at personal cost to pull others back from the edge of destruction.",
    ],
  },
  {
    heading: "Wisdom as Sweet to the Soul as Honey",
    reference: "Proverbs 24:13&ndash;14",
    accent: GOLD,
    paragraphs: [
      "&ldquo;My son, eat honey, for it is good, and the drippings of the honeycomb are sweet to your taste. Know that wisdom is such to your soul; if you find it, there will be a future, and your hope will not be cut off.&rdquo; The comparison of wisdom to honey is one of the most attractive images in the book of Proverbs. Honey in the ancient world was among the most prized of natural foods &mdash; rare, sweet, and energizing. The psalmist compared the word of God to honey dripping from the comb. Here Proverbs draws on the same image.",
      "The comparison works on multiple levels. Honey is sweet not because one reasons oneself into appreciating it but because of direct experience. You eat it and you know it is good. Wisdom similarly is not a proposition to be accepted on authority but a reality to be tasted in lived experience. The person who has actually walked in wisdom &mdash; who has experienced the fruit of righteous relationships, of honest dealing, of long-term thinking over short-term gratification &mdash; knows from the inside that wisdom is good.",
      "The future and the hope that wisdom provides are the final and decisive argument for pursuing it. The wicked have no future (v. 20) and their lamp is extinguished. But the person who finds wisdom has a future that cannot be cut off &mdash; a hope that is not contingent on present circumstances or the accidents of fortune. This &ldquo;hope&rdquo; (tiqvah) is the same word used elsewhere for the expectation of God&rsquo;s salvation. Wisdom, rightly understood, is oriented toward the same ultimate good as the covenant promises &mdash; a future secured not by our own cleverness but by the character of the God who made the world with wisdom and invites his people to live wisely within it.",
    ],
  },
  {
    heading: "The Righteous Man Falls Seven Times and Rises",
    reference: "Proverbs 24:16",
    accent: ROSE,
    paragraphs: [
      "Verse 16 is one of the great defining verses of the whole book: &ldquo;for the righteous falls seven times and rises again, but the wicked stumble in times of calamity.&rdquo; The contrast is not between the one who never falls and the one who falls. The contrast is between the one who always rises and the one who ultimately stumbles and stays down. The righteous person is not defined by perfect performance but by persistent return.",
      "Seven times in Hebrew idiom means &ldquo;completely, repeatedly, as many times as it takes.&rdquo; The righteous man does not fall once and get up; he falls over and over and rises over and over. The falling is not presented as a failure of righteousness but as the description of what life in a fallen world looks like for even the most committed person of God. The falls are real; the losses are genuine; the defeats are not minimized. But none of them is final.",
      "The contrast with the wicked is illuminating. The wicked do not fall more often than the righteous; they stumble in times of calamity and do not recover. The difference is not in the number of times they fall but in what happens next. The wicked have no resource beyond themselves &mdash; no God to appeal to, no covenant promises to stand on, no community of faith to help them up. When calamity comes, the self-reliant person discovers that the self is not enough.",
      "Christians read this verse in light of the whole biblical narrative of the one who fell into death for us and rose again for our justification. Our rising after falling is grounded not primarily in our own resilience but in our union with the one who is the Resurrection and the Life. We rise because he rose, and his rising ensures that no fall of ours will ever be the last word about us.",
    ],
  },
  {
    heading: "Do Not Rejoice When Your Enemy Falls",
    reference: "Proverbs 24:17&ndash;18",
    accent: PURPLE,
    paragraphs: [
      "&ldquo;Do not rejoice when your enemy falls, and let not your heart be glad when he stumbles, lest the Lord see it and be displeased, and turn away his anger from him.&rdquo; This proverb strikes at one of the most deeply rooted instincts of fallen human nature: the satisfaction we feel when someone who has wronged us comes to grief. The forbidden response is not just the outward expression of joy but the inward condition of the heart &mdash; &ldquo;let not your heart be glad.&rdquo;",
      "The reason offered is theologically sharp. The Lord sees the heart of the one who gloats. And then &mdash; in a remarkable reversal &mdash; God&rsquo;s response to the gloating heart is to turn away his anger from the enemy. The gloater, in other words, actually interferes with the process of divine justice by making their own heart a bigger problem than the enemy&rsquo;s stumble. The one who rejoices over an enemy&rsquo;s fall becomes an obstacle to the very justice they were hoping to see completed.",
      "This proverb stands in a tradition shared by Ezekiel (&ldquo;I have no pleasure in the death of the wicked&rdquo;) and the New Testament (&ldquo;love your enemies&rdquo;). The wisdom tradition and the prophetic tradition and the teaching of Jesus converge on the same insight: the person who has truly been formed by wisdom does not use others&rsquo; disasters as emotional fuel. They can trust the justice of God to work without needing to cheer its every move.",
      "The practical wisdom embedded here is also psychological. The person who derives pleasure from an enemy&rsquo;s misfortune is still bound to that enemy &mdash; still emotionally dependent on their story, still calculating their own feelings against another person&rsquo;s fate. Wisdom liberates us from that bondage and directs our energy toward building our own life well rather than monitoring someone else&rsquo;s collapse.",
    ],
  },
  {
    heading: "Impartiality in Judgment and the Tongue of Honest Testimony",
    reference: "Proverbs 24:23&ndash;26",
    accent: TEAL,
    paragraphs: [
      "Verses 23 through 26 return to the theme of justice in the community, particularly in the court. &ldquo;These also are sayings of the wise: Partiality in judging is not good.&rdquo; The judge who says to the wicked &ldquo;you are innocent&rdquo; will be cursed by peoples and abhorred by nations. But the one who rebukes the wicked will have delight and a good blessing will come upon them. Verse 26 offers a striking closing image: kissing the lips &mdash; a sign of honor and affection &mdash; is owed to the person who gives an honest answer.",
      "The section is a meditation on the social fabric of trust that honest speech creates and partial speech destroys. When judges decide cases on the basis of who the parties are rather than what the truth is, the entire structure of communal life begins to rot. The person with connections escapes; the person without them suffers. The law of God is the same for all, which is precisely why any deviation from impartiality is not merely a procedural error but a moral catastrophe.",
      "The connection between honest rebuke and blessing is counterintuitive but well-attested in the wisdom tradition. We tend to think of honest rebuke as an unpleasant duty that costs us relationship. Proverbs 24 insists that the courage to speak the truth to a wicked person is not only morally required but morally honored &mdash; it brings delight and blessing. The short-term comfort of avoiding difficult conversations is purchased at the price of long-term complicity in wrong.",
      "The kiss of honest lips in verse 26 is among the most tender images in the book of Proverbs. It locates genuine intimacy and honor not in flattery or pleasant-sounding agreement but in the willingness to tell the truth. The friend who honestly answers, even when the honest answer is uncomfortable, is the friend who actually loves you. Proverbs 24 says: honor them like a kiss. They are giving you something more precious than agreement &mdash; they are giving you truth.",
    ],
  },
  {
    heading: "The Sluggard&rsquo;s Field &mdash; A Sermon in Thorns",
    reference: "Proverbs 24:30&ndash;34",
    accent: GREEN,
    paragraphs: [
      "The chapter closes with one of the most vivid pieces of social observation in the Bible: &ldquo;I passed by the field of a sluggard, by the vineyard of a man lacking sense, and behold, it was all overgrown with thorns; the ground was covered with nettles, and its stone wall was broken down. Then I saw and considered it; I looked and received instruction.&rdquo; The wise person turns a ruined vineyard into a parable. The instruction received is not abstract &mdash; it is read from the ground itself.",
      "The picture of the sluggard&rsquo;s field is devastating in its specificity. The thorns and nettles are not one season&rsquo;s neglect but the accumulated result of ongoing inattention. The broken wall is not a disaster that happened to the field from outside but the consequence of the owner failing to maintain what was already there. Both the growth of weeds and the collapse of walls are the natural outcome of not doing what needed to be done, day after day, season after season.",
      "Verses 33 and 34 identify the self-deception at the heart of the sluggard&rsquo;s ruin: &ldquo;A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber, and want like an armed man.&rdquo; The sleep is always &ldquo;a little&rdquo; in the mind of the one taking it. No one decides to let their field go to ruin; they decide to rest a little more this morning, and then again tomorrow morning, and then again the morning after. The accumulation of small delays produces catastrophic outcomes.",
      "The closing image of poverty arriving like a robber and want like an armed man captures the shocking surprise that accompanies gradual decline. The sluggard did not see it coming &mdash; or rather, he saw it coming but decided there was time to deal with it later. Wisdom, by contrast, is the capacity to see the end from the beginning and to make the small choices today that prevent the large disasters tomorrow. The wise person reads the sluggard&rsquo;s field not with contempt but with instruction, and tends their own field accordingly.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Wisdom Over Strength",
    accent: TEAL,
    paragraphs: [
      "The claim of Proverbs 24:5&ndash;6 &mdash; that a wise man is mightier than a strong man &mdash; runs against the grain of every culture that prizes raw power, athletic dominance, or military force as the supreme human goods. Proverbs does not deny that strength matters; it insists that wisdom multiplies strength and that wisdom without strength is still more effective than strength without wisdom.",
      "The reason is that strength operates on the surface of reality &mdash; on what can be forced, coerced, or overpowered &mdash; while wisdom operates at the level of cause and effect, human nature, and the grain of God&rsquo;s ordered world. The strong person who acts foolishly is working against how things actually work. The less obviously powerful person who acts wisely is working with the grain of reality, and over time the grain of reality wins.",
      "This theme connects to the whole of biblical theology. The wisdom literature of Israel consistently subverts the assumption that bigger armies, stronger kings, and wealthier nations automatically prevail. God chooses the weak to shame the strong, delights to work through unlikely instruments, and builds his purposes on wisdom that looks like foolishness to those who only measure by outward strength. Proverbs 24 is a practical expression of the same theological conviction: wisdom &mdash; especially wisdom grounded in the fear of the Lord &mdash; is the most powerful resource available to a human being.",
    ],
  },
  {
    heading: "Not Envying the Wicked",
    accent: ROSE,
    paragraphs: [
      "The command to not envy the wicked appears twice in Proverbs 24 (vv. 1, 19) and is a major preoccupation of the wisdom literature precisely because it addresses a genuine and persistent spiritual struggle. The wicked often seem to prosper. Their willingness to cheat, to lie, to take advantage, and to disregard God&rsquo;s law appears to pay off in ways the righteous cannot immediately match.",
      "Proverbs 24 offers two antidotes to this envy. The first is the perception of what the wicked are actually doing &mdash; their hearts are plotting violence and their lips are scheming trouble. The surface prosperity conceals a life organized around destruction. The second is the vision of where the wicked end: &ldquo;the lamp of the wicked will be put out&rdquo; (v. 20). The future of the wicked is darkness and the future of the righteous is hope that cannot be cut off.",
      "Psalm 73 is the great Old Testament expansion of this theme. The psalmist confesses that he nearly stumbled because he envied the prosperity of the wicked, until he went into the sanctuary of God and discerned their end. The same logic operates in Proverbs 24: the antidote to envy is not trying harder to suppress the feeling but reorienting the vision &mdash; seeing more clearly what the wicked are building and where it leads, and seeing more clearly what wisdom builds and where it leads.",
    ],
  },
  {
    heading: "Rescuing the Perishing",
    accent: GREEN,
    paragraphs: [
      "Verses 11 and 12 of Proverbs 24 contain perhaps the most ethically demanding single command in the entire book: rescue those being taken away to death. The verse does not describe a passive sympathy but an active intervention, at personal cost, in the deadly trajectory of another person&rsquo;s life. Wisdom is not a private pursuit of self-improvement; it is inherently social and inherently costly.",
      "The excuse of not knowing is decisively refused. The God who weighs the heart knows whether the not-knowing was genuine or whether it was the willful blindness of a person who preferred not to see what seeing would have required them to do. Wisdom includes the willingness to open one&rsquo;s eyes to human need even when what one sees will make demands.",
      "The New Testament does not soften this command but intensifies it. The parable of the Good Samaritan is its narrative expansion. The priest and the Levite passed by on the other side; the Samaritan, seeing clearly, was moved with compassion and acted at his own expense to rescue the one being taken away to destruction. The wisdom of Proverbs 24 anticipates the ethical imperative that Jesus embodies and commands: see clearly and act, even when it costs.",
    ],
  },
  {
    heading: "Persistent Righteousness After Failure",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 24:16 is one of the most hopeful verses in the entire wisdom literature: the righteous falls seven times and rises again. This verse reclaims failure as a category that is consistent with, rather than contradictory to, the life of wisdom and righteousness. The wise person is not the person who never fails; it is the person who never stays down.",
      "The theology of this verse has enormous pastoral significance. Christians struggling with patterns of sin, repeated failures, and the discouragement that comes from not yet being who they know they should be find in this verse both honesty and hope. The honesty is that falling is part of the picture &mdash; seven times, repeatedly, genuinely. The hope is that falling is never the end of the story for the person who has a God to rise to.",
      "The contrast with the wicked is instructive because it is not about the number of falls but about what follows each fall. The wicked stumble in calamity and do not get up &mdash; not because they are weaker people by nature but because they have no resource beyond themselves. The righteous rise again &mdash; not because they are stronger by nature but because they have a covenant God who is their helper and their strength. The rising is fundamentally an act of faith in the God who raises the fallen.",
    ],
  },
  {
    heading: "The Reward of Diligence",
    accent: GOLD,
    paragraphs: [
      "The story of the sluggard&rsquo;s field (vv. 30&ndash;34) is the most sustained treatment of diligence in Proverbs 24 and one of the most memorable passages in the whole book of Proverbs. The wise observer does not simply see a ruined field; he receives instruction from it. The instruction is that small neglects accumulate into great ruins and that the discipline of daily faithfulness is the only protection against the catastrophic surprise of poverty arriving like an armed man.",
      "The four stages of the observation &mdash; seeing the field, seeing the nettles and broken wall, considering it, and receiving instruction &mdash; model the posture of the wise person in the face of observable human experience. Wisdom is not only found in texts and teachers; it is found in paying attention to life. The overgrown field is a text, and the sage reads it with as much care as he reads the scrolls.",
      "The application of the diligence theme is not limited to agricultural or financial management. Proverbs 24 is not merely financial advice. Every domain of life has its version of the sluggard&rsquo;s field: the relationship neglected by small inattentions until it is overgrown with thorns; the spiritual life left unwatered until the walls of character begin to crumble; the vocational craft not practiced until the skills wither from disuse. The parable of the field is a parable of any life where the discipline of consistent faithfulness is absent.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 4: Do Not Envy &mdash; Build on Wisdom",
    reference: "Proverbs 24:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "The chapter opens with the prohibition against envying evil men and desiring their company (vv. 1&ndash;2). The reason is embedded in the description of the wicked themselves: their hearts plot violence and their lips talk about making trouble. What looks like a desirable life from the outside is, on the inside, a project of destruction. The sage invites the student to look beneath the surface before forming desires.",
      "Verses 3 and 4 pivot immediately to the positive alternative. The construction of a lasting and flourishing household requires wisdom as the foundation, understanding as the frame, and knowledge as the interior wealth. The progression from wisdom to understanding to knowledge is not merely rhetorical; it describes the order in which a genuine house is built. Foundation first, then structure, then the filling of the rooms with what makes life rich.",
      "The juxtaposition of the two opening units &mdash; do not envy the wicked house, build wisely your own &mdash; is itself the central pastoral move of the chapter. The antidote to envying what others have built on wrong foundations is to be actively and joyfully engaged in building something better on a right foundation. The student who is genuinely building a house by wisdom has less time and energy for envying the houses built by wickedness.",
    ],
  },
  {
    heading: "Verses 5 to 6: Wise Counsel Wins the Battle",
    reference: "Proverbs 24:5&ndash;6",
    accent: TEAL,
    paragraphs: [
      "The claim that a man of knowledge enhances his might extends the house-building metaphor into the arena of conflict. Wisdom does not make a person weaker in their confrontations with difficulty; it makes them stronger. The wise person brings to every contest a fuller understanding of how the contest actually works, where the leverage points are, and how to deploy available resources most effectively.",
      "The key insight of verse 6 is the plural: abundance of counselors. One counselor brings one perspective; abundance of counselors brings something closer to the full picture. The ancient Israelite king who prepared for battle by consulting many advisors rather than relying on his own judgment was not showing weakness but wisdom. The student who takes difficult decisions to multiple trusted advisors before acting is following the same principle.",
      "The practical wisdom of this verse has been confirmed repeatedly in human experience across every domain from military strategy to business decision-making to pastoral ministry. The leaders and communities that survive and flourish over long periods are almost universally those that maintain robust cultures of honest counsel &mdash; where truth can be spoken upward, where no one person is assumed to see everything, and where the wisdom of many is genuinely sought before major commitments are made.",
    ],
  },
  {
    heading: "Verse 10 and Verses 11 to 12: Adversity Tests, Danger Demands Action",
    reference: "Proverbs 24:10&ndash;12",
    accent: PURPLE,
    paragraphs: [
      "Verse 10 stands alone as a single-verse diagnostic: &ldquo;If you faint in the day of adversity, your strength is small.&rdquo; It does not elaborate, qualify, or soften. The brevity is itself part of the wisdom: some truths are best delivered without cushioning. The day of adversity is always coming, and the only question is what will be revealed when it arrives. The time to deal with small strength is before the day of adversity, not during it.",
      "Verses 11 and 12 move immediately from the test of personal adversity to the test of social responsibility. The command to rescue those being taken away to death is placed directly after the verse about fainting in adversity, which may be intentional: the failure to rescue is precisely the kind of fainting that reveals small strength. It is easy to acknowledge danger from a distance; wisdom requires the courage to intervene.",
      "The structure of verse 12 is a legal interrogation before the divine judge. The excuse &mdash; we did not know this &mdash; is examined by the one who weighs hearts and watches souls and repays according to work. Three divine activities are stacked: weighing, watching, and repaying. The God of Proverbs 24 is not absent from the scene of human responsibility; he is the most observant and most attentive person in the room.",
    ],
  },
  {
    heading: "Verses 13 to 14 and Verse 16: Honey, Wisdom, and Rising Again",
    reference: "Proverbs 24:13&ndash;14, 16",
    accent: GOLD,
    paragraphs: [
      "The honey comparison of verses 13 and 14 is one of the most humanly attractive passages in the chapter. The sage does not argue for wisdom on the basis of duty alone but on the basis of taste. Wisdom is delightful. It is to the soul what honey is to the tongue &mdash; something good that one experiences from the inside rather than merely approves from the outside. And the experience of wisdom&rsquo;s goodness produces hope that cannot be cut off.",
      "The connection between wisdom and hope (tiqvah, the expectation of a good future) is theologically suggestive. The person who walks in wisdom is oriented toward the same future that the covenant promises point toward &mdash; a future secured by the character of a God who made the world with wisdom and who will bring that world to a wise and good conclusion. Wisdom is not merely practical skill; it is alignment with the grain of God&rsquo;s purposes.",
      "Verse 16 follows the intervening warning about not envying the wicked (v. 15) with the great affirmation that the righteous falls seven times and rises again. The falling and the rising are both real. The proverb does not promise that the righteous person will not suffer or fail; it promises that the righteous person will rise. The falling is taken with full seriousness; the rising is what distinguishes the righteous from the wicked who stumble and do not recover.",
    ],
  },
  {
    heading: "Verses 17 to 18 and Verses 23 to 26: Enemy, Judge, and Honest Tongue",
    reference: "Proverbs 24:17&ndash;18, 23&ndash;26",
    accent: TEAL,
    paragraphs: [
      "The prohibition against rejoicing when an enemy falls (vv. 17&ndash;18) is grounded in the divine observation of the heart. Not just the outward behavior but the inward condition of gladness at another&rsquo;s misfortune displeases the Lord. The paradox of verse 18 &mdash; that God may turn away his anger from the enemy in response to the gloating of the righteous &mdash; is a form of divine justice that makes the gloater unexpectedly complicit in the enemy&rsquo;s escape from consequence.",
      "The sayings on partiality in judgment (vv. 23&ndash;26) apply the principle of wisdom to the public arena of communal decision-making. The judge who acquits the guilty is cursed by peoples and abhorred by nations; the judge who rebukes the wicked receives delight and blessing. The public square requires the same commitment to wisdom and truth that the private heart requires. Justice is not merely a public policy preference; it is part of the created order that wisdom discerns and seeks to uphold.",
      "Verse 26 &mdash; that an honest answer is like a kiss on the lips &mdash; elevates honest speech to the level of genuine intimacy and honor. In a culture where flattery was a social lubricant and agreeable speech a way of managing relationships, the proverb insists that honest speech is more loving and more honorable than pleasant falsehood. The wise person is not the smooth talker but the truthful one, and the truthful one is the one worth honoring with the intimacy of a kiss.",
    ],
  },
  {
    heading: "Verse 27 and Verses 28 to 34: Field First, Then House; Truth Always",
    reference: "Proverbs 24:27&ndash;34",
    accent: GREEN,
    paragraphs: [
      "Verse 27 is a compressed proverb about sequencing: &ldquo;Prepare your work outside; get everything ready for yourself in the field, and after that build your house.&rdquo; The agricultural logic is that one secures one&rsquo;s source of income before one builds the residence that depends on that income. The order matters: productive capacity before consumption, provision before comfort, work before rest. To reverse the order is to build a house that one cannot sustain.",
      "Verses 28 and 29 address the integrity of testimony: do not be a witness against your neighbor without cause, and do not deceive with your lips. Do not repay evil with evil &mdash; which is both a legal prohibition against false accusation and a personal prohibition against the revenge that dresses itself as justice. The witness box and the courtroom are not instruments of personal vendetta; they are places where the truth is to be told and justice is to be done regardless of personal interest.",
      "The chapter concludes with the extended parable of the sluggard&rsquo;s field (vv. 30&ndash;34). The wise observer passes the ruined vineyard, looks at it with attention, and receives instruction from what he sees. The thorns, the nettles, and the broken wall are the objective correlatives of what &ldquo;a little sleep, a little slumber&rdquo; accumulates into over time. Poverty and want arrive not by any single dramatic failure but by the accumulated weight of small delays and small refusals to do what the day required. The field is the chapter&rsquo;s final word, and it says: pay attention, be diligent, and do not let the small neglects of today become the large ruins of tomorrow.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Build Life on Wisdom Rather Than Brute Strength",
    accent: TEAL,
    paragraphs: [
      "Proverbs 24:3&ndash;6 presents wisdom as the most powerful building material available to a human life. The house built on wisdom will outlast the house built on raw strength, financial force, or social connection. The community that makes decisions from wisdom will prevail over the community that decides by the power of whoever shouts loudest or has the most resources to throw at a problem.",
      "The practical application begins with an audit of what we are building on. What is the foundation of our key relationships, our work, our financial decisions, our parenting, our spiritual life? Are they built on the kind of wisdom that comes from sustained immersion in Scripture, honest counsel, careful thought about cause and effect, and humble dependence on God? Or are they built on the assumption that if we just work hard enough and are strong enough and smart enough, we can make things go the way we want?",
      "Seeking the abundance of counselors (v. 6) is the specific practical discipline this theme generates. Who are the trusted advisors I bring my significant decisions to? Am I genuinely seeking their honest input or am I presenting decisions already made and looking for affirmation? The community of genuine counsel &mdash; friends, pastors, mentors, even books and history &mdash; is the practical expression of wisdom in the context of real decisions. To build into that community is to multiply one&rsquo;s own strength.",
    ],
  },
  {
    heading: "Persistent Righteousness After Failure",
    accent: PURPLE,
    paragraphs: [
      "Proverbs 24:16 may be the most practically encouraging verse in the chapter for anyone who has known the experience of repeated failure. The righteous falls seven times and rises again. The definition of righteousness here is not moral perfection but persistent return. The person who belongs to God does not stay down, not because they are unusually resilient by temperament but because they have a God who is their helper, a covenant that holds them, and a Spirit who lifts them.",
      "The application is direct and personal. Every person who has stumbled in the same pattern for the tenth time, who has gone back to the same sin, who has failed the same person, who has broken the same promise &mdash; that person is not thereby excluded from the category of the righteous. The seven falls and the seven risings describe the actual texture of the righteous life in a fallen world. The question is not whether you have fallen but whether you are getting up.",
      "The getting up is itself an act of faith. It is the refusal to accept that the fall is the final word about who you are. It is the insistence, grounded in the character of God and the promises of the gospel, that there is still a way forward and that the way forward is available to you. Proverbs 24:16 gives permission to get up again &mdash; not the seventh time, but the hundredth, the thousandth, as many times as it takes &mdash; because the God of the righteous is not done with his people.",
    ],
  },
  {
    heading: "Rescuing Those in Danger",
    accent: GREEN,
    paragraphs: [
      "Proverbs 24:11&ndash;12 is a call to the kind of wisdom that is active and engaged rather than passive and self-enclosed. The command to rescue those being taken away to death pushes against every instinct that prefers safety, convenience, and the preservation of one&rsquo;s own comfort over the risk of costly intervention. The excuse of not knowing is rejected by the God who weighs hearts &mdash; which means the choice to not see is itself a moral act.",
      "The application ranges from the dramatic to the everyday. Rescuing the perishing can look like speaking a hard truth to a friend heading toward a destructive choice. It can look like intervening in a situation of injustice where silence is complicity. It can look like the costly work of helping someone through an addiction, a crisis of faith, or a pattern of behavior that is destroying them. It can look like the global work of serving the poor and oppressed.",
      "The common thread in all these applications is the willingness to pay the cost of seeing clearly and acting accordingly. Wisdom in Proverbs 24 is not a privatized cultivation of one&rsquo;s own flourishing. It is a posture of engaged attention to the world &mdash; to who is in danger, to where one can intervene, to what God is calling his people to do in the face of human need. The wise person of Proverbs 24 has their eyes open and their hands ready.",
    ],
  },
  {
    heading: "The Reward of Diligence Over Time",
    accent: GOLD,
    paragraphs: [
      "The parable of the sluggard&rsquo;s field is the chapter&rsquo;s most extended illustration of a principle that runs through all of Proverbs: the choices made in ordinary time determine the conditions of extraordinary moments. The sluggard&rsquo;s poverty does not arrive suddenly; it arrives after a long sequence of small decisions to rest a little more, to wait until tomorrow, to let this one thing go for now.",
      "The application is simultaneously humbling and empowering. Humbling, because it confronts the comfortable illusions we maintain about our own diligence &mdash; the false belief that we are generally attending to what needs to be attended to, when in fact our field has more nettles than we have allowed ourselves to notice. Empowering, because it means that the correction of the trajectory is available in the small choices of ordinary days.",
      "The wise observer in verses 30 through 34 does not come away from the sluggard&rsquo;s field with contempt for the sluggard; he comes away with instruction for himself. The posture of wisdom is to use every observation &mdash; of others&rsquo; failure, of general human patterns, of the visible outcomes of different ways of living &mdash; as material for self-examination and self-correction. The field is a text to be read, and the wise person reads it with the question: what does this mean for how I tend my own field today?",
    ],
  },
];

const reflectionQuestions = [
  "Where in your life do you find yourself envying the wicked &mdash; wishing you could achieve what others achieve without the constraints of integrity? What does the long view of their end versus your hope look like when you genuinely consider it?",
  "Using the image of a house built by wisdom, established by understanding, and filled by knowledge: how would you describe the current state of the house you are building? What needs more wisdom at the foundation, what needs better understanding in the framing, and what rooms are being filled with what kinds of wealth?",
  "Is there someone in your circle who is being taken away to death &mdash; toward destruction of some kind &mdash; and you have been telling yourself you do not quite know enough to intervene? What would it look like to actually see clearly and act?",
  "Proverbs 24:16 says the righteous falls seven times and rises again. Where in your own story is the rising again most needed right now? What does trusting God enough to get up again look like in that specific area?",
  "The sluggard&rsquo;s field is a story of accumulation &mdash; small neglects adding up to large ruin. Which area of your life most resembles a field that has been under-tended? What would the first act of diligence look like if you began today?",
];

const videoItems = [
  { videoId: "pN8jL3wKzR4", title: "Proverbs 24 - Wisdom, Strength, and the Long View of Life" },
  { videoId: "qM5xT7vBnS9", title: "Rescue the Perishing: Proverbs 24:11-12 and Active Compassion" },
  { videoId: "rK2yW4cDpQ6", title: "The Righteous Falls Seven Times - Persistent Faith in Proverbs 24:16" },
  { videoId: "sL9vX8bEqF3", title: "The Sluggard&rsquo;s Field - Diligence and Poverty in Proverbs 24:30-34" },
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

export default function Proverbs24GuidePage() {
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
            Proverbs Chapter 24
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            Wisdom Over Strength &mdash; Building Life on the Foundation That Lasts
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches.&rdquo; &mdash; Proverbs 24:3&ndash;4" }}
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Proverbs 24</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 24 belongs to the larger section of the Thirty Sayings that begins in Proverbs 22:17 and represents some of the most concentrated and searching ethical teaching in the wisdom literature. The chapter ranges across a remarkable array of human situations &mdash; the temptation to envy the wicked, the building of a household on wisdom, the courage required for battle and for rescue, the honest speech that wisdom demands in the court and in friendship, and the sobering parable of the sluggard&rsquo;s ruined field. Running through all of these is the conviction that wisdom is both more powerful and more beautiful than any of its alternatives, and that the choices made in ordinary time determine the conditions of extraordinary moments." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Five major themes organize the rich material of Proverbs 24 into a coherent vision of the wise life. Wisdom exceeds raw strength, offering a more effective and more lasting kind of power. The prohibition against envying the wicked is grounded in a long-view vision of where different paths actually lead. The command to rescue the perishing extends wisdom into active and costly social engagement. The fall-and-rise pattern of verse 16 defines righteousness by persistence rather than perfection. And the parable of the sluggard&rsquo;s field offers the chapter&rsquo;s most vivid case study in the irreversible accumulation of small neglects." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through Proverbs 24 passage by passage reveals not a random collection of aphorisms but a carefully arranged sequence of wisdom sayings that move from the temptation to envy wicked builders, to the positive project of wise building, to the tests of adversity and danger, to the encouragement of the righteous who keep rising, to the justice of honest speech, and finally to the great field parable that brings the chapter to its unforgettable close." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 24 is not a collection of historical curiosities but a living word addressed to anyone who wants to live wisely in the world God made. Its applications are personal, communal, and public &mdash; covering the inner life of envy and ambition, the communal life of counsel and rescue, the private life of diligence and faithfulness, and the public life of honest speech and impartial judgment. Each section of the chapter calls its reader to a more fully engaged and more deeply grounded kind of life." }}
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
            dangerouslySetInnerHTML={{ __html: "Go deeper into Proverbs 24 with these video teachings on wisdom over strength, rescuing the perishing, the righteous person who falls seven times and rises, and the unforgettable parable of the sluggard&rsquo;s overgrown field." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p
                  style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Wisdom Is Sweeter Than Honey</h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 24 calls us to a life built on wisdom rather than strength, honest rather than flattering, diligent rather than indolent, active rather than passive in the face of human need. It does not promise an easy life but it promises a lasting one &mdash; a house established, rooms filled with precious riches, a hope that cannot be cut off. The righteous person falls, and falls again, and rises. The field is tended, day by day, in the small and unglamorous faithfulness that accumulates into a life of genuine and lasting fruit." }}
          />
        </div>
      </main>
    </div>
  );
}
