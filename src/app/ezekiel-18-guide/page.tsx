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
    heading: "The Sour Grapes Proverb and the Crisis of Inherited Guilt",
    reference: "Ezekiel 18:1&ndash;4",
    accent: PURPLE,
    paragraphs: [
      "Ezekiel 18 opens onto a specific theological crisis that had settled over the exiles in Babylon like a fog that would not lift. The people had taken a familiar proverb &mdash; &ldquo;The fathers have eaten sour grapes, and the children&rsquo;s teeth are set on edge&rdquo; (18:2) &mdash; and turned it into a theodicy of despair. In their reading, the present generation was suffering not for its own sins but for those of its ancestors. God was unjust; his punishment had fallen on the wrong generation; there was nothing to be done because the sentence had already been passed before they drew their first breath.",
      "God&rsquo;s response is abrupt and absolute. He forbids the proverb: &ldquo;As I live, declares the Lord GOD, this proverb shall no more be used by you in Israel&rdquo; (18:3). The prohibition is not a mere rhetorical maneuver. It announces a fundamental reorientation of moral and spiritual reality. God will no longer permit this framework to govern how his people understand themselves and their relationship to him. The proverb collapses under the weight of a single declaration: &ldquo;Behold, all souls are mine; the soul of the father as well as the soul of the son is mine: the soul who sins shall die&rdquo; (18:4). Every person stands directly before God, unmediated by ancestry.",
      "This opening is revolutionary in its ancient context. Tribal and familial guilt were deeply embedded assumptions throughout the ancient Near East. The idea that a person&rsquo;s fate was bound up with their clan or lineage was not merely cultural sentiment; it was theological bedrock. Ezekiel 18 does not deny that families affect one another &mdash; the rest of Scripture is clear that they do. What it denies is that inherited guilt can be the ultimate explanation for a person&rsquo;s standing before God. God holds individuals accountable for what they themselves have done, and that accountability opens a door of hope that the proverb had sealed shut.",
      "The exile generation needed to hear this word with urgency. If they were simply bearing their fathers&rsquo; punishment with no moral agency of their own, repentance was meaningless and God&rsquo;s call to turn was a cruel joke. But if each person stood before God on their own account, then the word of the prophet to &ldquo;turn and live&rdquo; was not empty rhetoric. It was a real invitation extended to people with real freedom to respond. The abolition of the proverb is thus not only a correction of a theological error; it is an act of grace that returns moral agency to a community that had surrendered it to fatalism.",
    ],
  },
  {
    heading: "The Three-Generation Case Study",
    reference: "Ezekiel 18:5&ndash;18",
    accent: TEAL,
    paragraphs: [
      "Having established the principle, God now illustrates it with a carefully constructed legal case study spanning three generations. The method is deliberate: by walking through three scenarios, God demonstrates that his principle is not an abstraction but a consistent standard that applies in every direction across the full range of human moral choices.",
      "The first man is righteous (18:5-9). The portrait of this man is drawn in careful strokes: he does not eat upon the mountains (a reference to idolatrous feasting), does not defile his neighbor&rsquo;s wife, does not oppress anyone, returns pledges, does not rob, gives bread to the hungry, covers the naked with a garment, does not lend at interest, withholds his hand from iniquity, executes true justice between people, and walks in God&rsquo;s statutes. The portrait is not of sinless perfection but of a life genuinely shaped by covenant faithfulness. Of such a man, God declares: &ldquo;he is righteous; he shall surely live, declares the Lord GOD&rdquo; (18:9). Righteousness is here a way of life, not a legal status, and it issues in life.",
      "The second man is the violent son (18:10-13). He has the righteous father but does none of his works. He sheds blood, eats upon mountains, defiles his neighbor&rsquo;s wife, oppresses the poor, commits robbery, does not return pledges, lifts up his eyes to idols, and lends at interest. The catalog is the dark mirror image of his father&rsquo;s virtues. God&rsquo;s verdict is equally clear: &ldquo;he shall surely die; his blood is on himself&rdquo; (18:13). The father&rsquo;s righteousness does not protect the wicked son. Each account is settled on its own terms.",
      "The third man is the son of the violent man who does not follow his father&rsquo;s evil (18:14-18). He sees all the sins his father committed and does not do likewise. He keeps his hand from iniquity, does not take interest, observes God&rsquo;s statutes, and walks in them. God&rsquo;s verdict: &ldquo;he shall surely live&rdquo; (18:17). The father&rsquo;s violence does not condemn the son who turns from it. The three cases together constitute a complete demonstration of the principle: each soul is judged on its own account, and neither the righteousness of the father nor the wickedness of the father transfers automatically to the child.",
    ],
  },
  {
    heading: "Is the Way of the LORD Not Just?",
    reference: "Ezekiel 18:19&ndash;29",
    accent: GOLD,
    paragraphs: [
      "Having concluded the case study, God anticipates the next objection: &ldquo;Why should not the son suffer for the iniquity of the father?&rdquo; (18:19). The question betrays how deeply the fatalistic proverb had embedded itself. But God presses the same principle again: &ldquo;The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son. The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself&rdquo; (18:20).",
      "The argument then takes a remarkable turn by addressing the dynamics of moral change within a single life. What happens when a wicked person turns from their wickedness? &ldquo;But if a wicked person turns away from all his sins that he has committed and keeps all my statutes and does what is just and right, he shall surely live; he shall not die. None of the transgressions that he has committed shall be remembered against him&rdquo; (18:21-22). The grammar of accountability is reset at conversion. The turned life does not carry the accumulated debt of the wicked life. All the former transgressions are remembered no more.",
      "But the text also warns of the reverse: a righteous person who turns from righteousness to wickedness will not be protected by their former good deeds. &ldquo;When a righteous person turns away from his righteousness and does injustice and does the same abominations that the wicked person does, shall he live? None of the righteous deeds that he has done shall be remembered&rdquo; (18:24). Righteousness, like wickedness, is an ongoing orientation of the whole life, not a banked reserve that covers future defection.",
      "This prompts the accusers to cry &ldquo;The way of the LORD is not just&rdquo; (18:25). God turns the charge back on them with devastating directness: &ldquo;Is my way not just? Is it not your ways that are not just?&rdquo; (18:25). The people who are complaining about divine unfairness are the ones operating by an unjust standard &mdash; insisting that punishment should fall on those who did not earn it and that their own present choices are irrelevant because the sentence was passed before they were born. God&rsquo;s way, by contrast, gives every person exactly what their own moral account requires, in the full knowledge that repentance can open a new account at any moment.",
    ],
  },
  {
    heading: "Turn and Live: The Passionate Imperative",
    reference: "Ezekiel 18:30&ndash;32",
    accent: ROSE,
    paragraphs: [
      "The chapter reaches its climax not in further legal argument but in a passionate personal plea. The shift in tone is palpable. God has been making his case; now he is making his appeal. &ldquo;Therefore I will judge you, O house of Israel, every one according to his ways, declares the Lord GOD. Repent and turn from all your transgressions, lest iniquity be your ruin&rdquo; (18:30). The logic of individual accountability, which might have seemed like a cold legal principle, is here revealed as the basis for an urgent and loving call.",
      "The imperatives pile up with extraordinary force: &ldquo;Cast away from you all the transgressions that you have committed, and make yourselves a new heart and a new spirit! Why will you die, O house of Israel?&rdquo; (18:31). The command to &ldquo;make yourselves a new heart and a new spirit&rdquo; is striking alongside Ezekiel 36:26, where God promises &ldquo;I will give you a new heart and a new spirit.&rdquo; Both are true and both are necessary: the human imperative to turn and the divine gift that makes turning possible are not in competition but in cooperation. God commands what only he can ultimately accomplish, and in that tension the full reality of grace and responsibility are held together.",
      "The deepest note in the chapter is sounded in verse 32: &ldquo;For I have no pleasure in the death of anyone, declares the Lord GOD; so turn, and live.&rdquo; This declaration cuts to the heart of who God is. He is not a deity who enjoys watching the wicked perish. He does not sit in satisfaction when judgment falls. His instructions about individual accountability and his warnings about wickedness are not the communications of a God eager to condemn, but of one who desperately wants his people to turn from the path that leads to death and walk toward the life he holds out to them.",
      "The final two words &mdash; &ldquo;turn and live&rdquo; &mdash; are among the most concentrated expressions of the gospel in the Old Testament. Everything the chapter has built toward arrives here: the abolition of fatalism, the grounding of individual accountability, the demonstration of God&rsquo;s consistent justice, the announcement that repentance resets the moral ledger, and the passionate desire of God that none should perish. The exile is not God&rsquo;s final word. His final word is an invitation.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Individual Accountability vs. Inherited Guilt",
    accent: PURPLE,
    paragraphs: [
      "The central theological move of Ezekiel 18 is the dismantling of inherited guilt as the ultimate moral category. The proverb about sour grapes had given the exile generation a framework for understanding their suffering that was simultaneously self-exonerating and hopeless: they were victims of their fathers&rsquo; sins and there was nothing they could do. God abolishes this framework not because families have no effect on one another &mdash; they clearly do &mdash; but because he refuses to let it be the last word about any person&rsquo;s standing before him.",
      "Individual accountability before God is the foundation of moral seriousness. If I am ultimately just the product of forces beyond my control &mdash; my ancestry, my upbringing, my social location &mdash; then I cannot be genuinely held responsible for anything, but I also cannot be genuinely praised for anything. The freedom that makes blame possible also makes repentance possible, and it is precisely repentance that God is calling his people to in this chapter. The affirmation of individual accountability is thus an act of respect for persons as moral agents, not a coldly punitive legal principle.",
      "The New Testament does not negate this principle. Paul writes in Romans 14:12 that &ldquo;each of us will give an account of himself to God.&rdquo; Jesus warns his disciples not to look to their Abrahamic ancestry as their standing before God (Matthew 3:9). The entire structure of the final judgment in Scripture assumes that individuals will answer for what they personally have done. Ezekiel 18 plants this seed with particular clarity and urgency in the soil of a community that had tried to use ancestry as an excuse for both spiritual paralysis and resentment toward God.",
    ],
  },
  {
    heading: "Righteousness as a Way of Life, Not a Status",
    accent: TEAL,
    paragraphs: [
      "One of the most sobering aspects of Ezekiel 18 is the insistence that righteousness and wickedness are ongoing orientations of the whole life, not permanent statuses established once and for all. The righteous man who turns to wickedness finds that his former righteousness provides no cover: &ldquo;None of the righteous deeds that he has done shall be remembered.&rdquo; The wicked person who turns to righteousness finds that their former wickedness is entirely forgiven: &ldquo;None of the transgressions that he has committed shall be remembered against him.&rdquo;",
      "This bidirectional warning is deeply counter-cultural in both directions. On one side, it confronts the temptation of moral complacency &mdash; the assumption that a history of faithful living creates a spiritual surplus that can absorb future defections. On the other side, it confronts the temptation of moral despair &mdash; the assumption that a history of wickedness has settled the question of one&rsquo;s standing before God once and for all. Both assumptions are false. What matters to God is not merely where you have been but where you are going.",
      "The New Testament echoes this pattern in the letters to the seven churches in Revelation. To Ephesus: &ldquo;you have abandoned the love you had at first&rdquo; &mdash; and the warning of judgment. To Sardis: &ldquo;you are dead&rdquo; despite a reputation for being alive. To Laodicea: the threat of being spat out because of lukewarmness. Conversely, the call to &ldquo;repent and do the works you did at first&rdquo; (Revelation 2:5) assumes that the direction of the life can change, and that the changed direction is what God recognizes. Righteousness is not a trophy displayed on a shelf; it is the practice of the whole life oriented toward God.",
    ],
  },
  {
    heading: "God&rsquo;s Desire for Life, Not Death",
    accent: ROSE,
    paragraphs: [
      "Perhaps the most theologically important verse in Ezekiel 18 is the climactic declaration of verse 32: &ldquo;For I have no pleasure in the death of anyone, declares the Lord GOD.&rdquo; This is not a reluctant concession wrung out of a reluctant deity. It is a spontaneous self-disclosure of the heart of God. He does not delight in condemnation. He does not find satisfaction in the perishing of the wicked. His warnings and his judgments are not expressions of a punitive impulse but of a passionate desire that people would turn from the paths that lead to death and walk toward life.",
      "This verse stands at the center of the Old Testament&rsquo;s testimony to the character of God and anticipates the great declaration of the New Testament: &ldquo;God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life&rdquo; (John 3:16). The God who says in Ezekiel 18 that he has no pleasure in the death of anyone is the same God who in the fullness of time sends his Son to take on himself the death that sinners deserved, so that all who turn to him might live. The chapter&rsquo;s final two words &mdash; &ldquo;turn and live&rdquo; &mdash; are the Old Testament seed of the New Testament gospel.",
      "The pastoral implication is profound. When we preach judgment and repentance, we are not presenting a God who is looking for reasons to condemn. We are representing a God who is looking for reasons to save, who insists on individual accountability precisely because it opens the door to individual repentance, and who declares his own moral character in the words &ldquo;I have no pleasure in the death of anyone.&rdquo; Ezekiel 18 will not allow a picture of God as cold, vindictive, or eager for condemnation. He is the God who pleads: &ldquo;Why will you die, O house of Israel?&rdquo;",
    ],
  },
  {
    heading: "The New Heart and the Mystery of Grace and Responsibility",
    accent: GREEN,
    paragraphs: [
      "The command of Ezekiel 18:31 &mdash; &ldquo;make yourselves a new heart and a new spirit&rdquo; &mdash; creates an interpretive puzzle when set alongside Ezekiel 36:26: &ldquo;And I will give you a new heart, and a new spirit I will put within you.&rdquo; The same new heart is both commanded of the people and promised as God&rsquo;s gift. This is not a contradiction but a profound paradox at the heart of biblical anthropology and soteriology.",
      "The command to make a new heart does not assume that people can accomplish this transformation by sheer willpower. It expresses the genuine responsibility of the moral agent to turn, to repent, to cease doing evil, and to seek God with the whole self. The promise to give a new heart acknowledges that this transformation ultimately requires a divine work that goes beyond human capacity. In the New Testament, the same paradox appears in Philippians 2:12-13: &ldquo;work out your own salvation with fear and trembling, for it is God who works in you, both to will and to work for his good pleasure.&rdquo;",
      "The practical implication is that repentance is neither a human achievement nor a passive waiting for divine transformation. It is a whole-hearted response to God&rsquo;s initiative, a turning that is simultaneously my act and God&rsquo;s work in me. Ezekiel 18 calls people to turn and make a new heart; Ezekiel 36 assures them that God himself will do what they cannot do alone. Both promises lead to the same destination: a people whose hearts are oriented toward God because they have turned to him and he has turned them to himself.",
    ],
  },
  {
    heading: "The Radical Openness of Repentance",
    accent: GOLD,
    paragraphs: [
      "Ezekiel 18 makes one of the boldest claims in all of Scripture about the power of repentance. When the wicked person turns from all their sins and begins to walk in God&rsquo;s statutes, &ldquo;none of the transgressions that he has committed shall be remembered against him&rdquo; (18:22). The language is absolute. Not most of them, not the lesser ones, not the ones that have not yet fully ripened into consequences &mdash; none of them shall be remembered. The turned life receives a completely clean account.",
      "This is not a claim about natural consequences, which often outlast repentance in the physical and social realm. It is a claim about standing before God. The person who turns genuinely to God is not weighted down by a permanent moral debt incurred by their former wickedness. The account is settled. The new life begins without the old life&rsquo;s deficit. This is the Old Testament version of the New Testament declaration: &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come&rdquo; (2 Corinthians 5:17).",
      "For a community in exile who might have concluded that their moral history had permanently disqualified them, this declaration was hope arriving like light in a dark room. Their past wickedness &mdash; whether personal or generational in the sense they had actually participated in it &mdash; did not have to define their future. Repentance was not merely possible; it was effective. God&rsquo;s promise to forget the former transgressions of the turned person was not a legal fiction but a genuine erasure grounded in God&rsquo;s own character as one who &ldquo;delights in steadfast love&rdquo; (Micah 7:18).",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 4: The Proverb Abolished",
    reference: "Ezekiel 18:1&ndash;4",
    accent: PURPLE,
    paragraphs: [
      "The word of the LORD comes to Ezekiel with a direct challenge to the defeatist proverb circulating among the people of Israel. The proverb &ldquo;The fathers have eaten sour grapes, and the children&rsquo;s teeth are set on edge&rdquo; captured the exile community&rsquo;s sense that they were suffering the consequences of a previous generation&rsquo;s sin. God&rsquo;s response is a solemn oath &mdash; &ldquo;As I live, declares the Lord GOD&rdquo; &mdash; the most emphatic form of divine assertion available in this literature. The proverb is not just discouraged; it is banned.",
      "The doctrinal ground for the ban is stated in verse 4: &ldquo;Behold, all souls are mine; the soul of the father as well as the soul of the son is mine: the soul who sins shall die.&rdquo; The argument moves from a claim about divine ownership to a principle of divine justice. Because all souls belong equally to God, the father has no prior claim over the son that would allow his sins to be transferred to the son&rsquo;s account. Each soul stands in direct relationship with its Creator and is judged on that direct relationship alone.",
      "The phrase &ldquo;the soul who sins shall die&rdquo; appears three times in Ezekiel 18 (verses 4, 20, and implicitly throughout), forming the chapter&rsquo;s spine. Taken alone it might sound like a threat, but in context it is a principle of equity. It means that only the soul who sins &mdash; not the soul of the innocent child whose parent sinned &mdash; will bear the judgment. The sentence falls precisely where it belongs, neither more nor less. This precision is not cruelty; it is justice understood as perfect moral correspondence.",
    ],
  },
  {
    heading: "Verses 5 to 9: The Righteous Man",
    reference: "Ezekiel 18:5&ndash;9",
    accent: TEAL,
    paragraphs: [
      "The portrait of the righteous man in verses 5 through 9 is one of the most detailed catalogs of covenant faithfulness in the prophetic literature. It covers four dimensions of righteousness: cultic (not eating on mountains, not lifting up his eyes to idols), sexual (not defiling his neighbor&rsquo;s wife, not approaching a menstruating woman), economic (returning pledges, not robbing, not lending at interest, giving bread to the hungry and clothing to the naked), and judicial (not oppressing anyone, executing true justice between disputants). Together these dimensions paint a picture of a person who honors God in every sphere of life.",
      "The verdict in verse 9 is unqualified: &ldquo;he is righteous; he shall surely live, declares the Lord GOD.&rdquo; The double emphasis &mdash; &ldquo;he is righteous&rdquo; and &ldquo;he shall surely live&rdquo; &mdash; corresponds to the structure of the chapter&rsquo;s principle: character determines destiny. Righteousness is not a legal technicality but a lived reality, and the righteous man who lives it will surely live in the fullest sense. Life here encompasses not merely physical existence but the kind of flourishing relationship with God that Ezekiel elsewhere calls shalom.",
      "It is important to note that the catalog does not describe perfection. This is a person who habitually, characteristically, and deliberately lives by God&rsquo;s statutes. The Old Testament consistently presents righteousness as a pattern of life rather than a flawless score. The same standard is applied in Psalm 15 and Psalm 24, which describe who may dwell on God&rsquo;s holy hill and who may ascend his mountain &mdash; those whose lives are consistently oriented toward God and neighbor, who have turned from idols and from oppression of the poor.",
    ],
  },
  {
    heading: "Verses 10 to 13: The Violent Son",
    reference: "Ezekiel 18:10&ndash;13",
    accent: ROSE,
    paragraphs: [
      "The second case presents the righteous man&rsquo;s son, who has observed his father&rsquo;s life and chosen a diametrically opposite path. The catalog of his vices is the mirror image of his father&rsquo;s virtues: where the father returned pledges, the son does not; where the father gave bread to the hungry, the son oppresses the poor and needy; where the father abstained from idolatry, the son &ldquo;lifts up his eyes to the idols.&rdquo; The son is not simply morally mediocre; he is described as &ldquo;violent&rdquo; (Hebrew parits, a person who breaks through every moral restraint).",
      "The verdict in verse 13 could not be more direct: &ldquo;he shall surely die; his blood is on himself.&rdquo; The phrase &ldquo;his blood is on himself&rdquo; is a legal formula indicating that the responsibility for his death rests entirely on his own actions. He cannot point to his father and claim that his father&rsquo;s righteousness covers him. He cannot claim that social circumstances drove him to violence. The moral account of his life, kept by a just God, reflects exactly what he has done.",
      "This case confronts the complacency of anyone who believes that a godly heritage automatically secures their standing with God. The New Testament parallel is John the Baptist&rsquo;s warning to those who cited Abrahamic ancestry as their protection: &ldquo;Do not presume to say to yourselves, &lsquo;We have Abraham as our father&rsquo;&rdquo; (Matthew 3:9). Spiritual heritage is a gift and a responsibility, not a guarantee. The son who has watched righteousness in action and turned from it has chosen his path with full knowledge of the alternative, and that choice is his to own.",
    ],
  },
  {
    heading: "Verses 14 to 18: The Son Who Turns from His Father&rsquo;s Evil",
    reference: "Ezekiel 18:14&ndash;18",
    accent: GREEN,
    paragraphs: [
      "The third case is perhaps the most hope-giving of the three. The violent son of the second generation has his own son, who &ldquo;sees all the sins that his father has done; he sees, and does not do likewise&rdquo; (18:14). The repetition of &ldquo;sees&rdquo; is important: this young man has grown up watching wickedness at close range and has made a conscious, deliberate choice to not follow it. His character has been formed in the school of bad example, and he has graduated by refusing the lesson.",
      "The catalog of his virtues in verses 15 through 17 closely mirrors those of his righteous grandfather in verses 5 through 9: he does not eat on the mountains, does not defile his neighbor&rsquo;s wife, does not oppress anyone, does not take interest, keeps his hand from iniquity, and executes God&rsquo;s statutes. He has broken the chain. The verdict in verse 17 is the same as for the grandfather: &ldquo;he shall surely live.&rdquo; And the note in verse 18 is pointed: &ldquo;As for his father, because he practiced extortion, robbed his brother, and did what is not good among his people, behold, he shall die for his iniquity.&rdquo; Father and son are judged on their own accounts simultaneously.",
      "This third case is the most radical in its implications for the exile generation. Many of them had grown up watching the sins of the generation before them. Those sins were real and their effects were real. But the pattern of those sins was not their destiny. Each person who had seen wickedness in their family or community and refused to participate in it had, in God&rsquo;s reckoning, established their own moral account. The son who breaks his father&rsquo;s pattern is not disadvantaged by his father&rsquo;s wickedness; he is vindicated by his own faithfulness.",
    ],
  },
  {
    heading: "Verses 19 to 24: The Dynamics of Moral Change",
    reference: "Ezekiel 18:19&ndash;24",
    accent: GOLD,
    paragraphs: [
      "Verses 19 through 20 address the next anticipated objection directly. Having established the three-generation principle, God now defends it explicitly: the son will not bear the iniquity of the father, nor will the father bear the iniquity of the son. The righteous deeds of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself. This restatement is more than repetition; it hammers the principle into a general rule that admits no exceptions and is not qualified by family relationships.",
      "Verses 21 through 22 then introduce the dimension of moral change within a single life. The wicked person who turns from all their sins, keeps God&rsquo;s statutes, and does what is just and right &mdash; that person shall live. More remarkably, &ldquo;none of the transgressions that he has committed shall be remembered against him.&rdquo; The grammar of God&rsquo;s moral accounting is reset by genuine repentance. This is not moral arbitrariness; it is the consistent application of the same principle that says current orientation matters more than past history, applied now to the turning of the wicked.",
      "Verses 23 and 24 hold both directions in tension simultaneously. God affirms that he has &ldquo;no pleasure in the death of the wicked,&rdquo; but immediately notes that the reverse is also true: when a righteous person turns away from righteousness to commit the same abominations as the wicked, none of their former righteous deeds will be remembered. The two sides of the principle are equally real, equally serious, and equally rooted in the same understanding that what God sees is not a static moral ledger but the orientation and direction of the living person before him at this moment.",
    ],
  },
  {
    heading: "Verses 25 to 29: Is My Way Not Just?",
    reference: "Ezekiel 18:25&ndash;29",
    accent: PURPLE,
    paragraphs: [
      "The phrase &ldquo;the way of the LORD is not just&rdquo; (18:25, 29) is one of the most startling accusations in the prophetic literature. The people of Israel, in exile, have concluded that God has acted unjustly toward them &mdash; that he has punished them for things they did not do. God&rsquo;s response does not express wounded pride or angry denial. It simply reverses the charge with a question: &ldquo;Is it not your ways that are not just?&rdquo;",
      "The logic of the reversal is clear from the preceding verses. The people are operating by a framework in which punishment is inherited and moral agency is secondary. They expect the righteous son to benefit from the righteous father, and they expect the children to absorb the consequences of the fathers&rsquo; sins. Under this framework, God&rsquo;s consistent individualized judgment does indeed appear &ldquo;not just&rdquo; &mdash; because it refuses to follow the logic of inherited accountability. But God&rsquo;s response is that their framework is itself the unjust one, because it holds people responsible for what they did not choose and offers them no genuine agency over their own standing.",
      "Verse 29 repeats the exchange as if God is genuinely inviting them to keep pressing the objection and see where it leads. Every time the objection is raised, the same reversal applies. The challenge to God&rsquo;s justice, when examined carefully, is actually a defense of a system that would penalize the innocent and immunize the guilty based on factors beyond anyone&rsquo;s control. God&rsquo;s justice, by contrast, is the only genuine justice &mdash; one that holds people accountable for what they themselves have done and opens the door of repentance to everyone who will turn.",
    ],
  },
  {
    heading: "Verses 30 to 32: Repent and Turn &mdash; Turn and Live",
    reference: "Ezekiel 18:30&ndash;32",
    accent: ROSE,
    paragraphs: [
      "The chapter&rsquo;s conclusion is a masterpiece of prophetic rhetoric. God has spent twenty-nine verses building a case from legal principle and case study. Now he pivots from argument to appeal. &ldquo;Therefore I will judge you, O house of Israel, every one according to his ways, declares the Lord GOD. Repent and turn from all your transgressions, lest iniquity be your ruin&rdquo; (18:30). The word &ldquo;repent&rdquo; (Hebrew shub, to turn back) is the chapter&rsquo;s emotional center, occurring in various forms throughout these final verses.",
      "The command of verse 31 is remarkable in its energy: &ldquo;Cast away from you all the transgressions that you have committed, and make yourselves a new heart and a new spirit!&rdquo; The word &ldquo;cast away&rdquo; (Hebrew hashliku) is a strong, active verb &mdash; not &ldquo;gently set aside&rdquo; but &ldquo;throw off, fling away.&rdquo; The transgressions are not to be gradually reduced or managed; they are to be actively, decisively rejected. And the rhetorical question that follows &mdash; &ldquo;Why will you die, O house of Israel?&rdquo; &mdash; is not cold theological inquiry. It is the cry of a God who cannot understand why anyone would choose death when life is being offered.",
      "Verse 32 provides the theological ground for the entire appeal: &ldquo;For I have no pleasure in the death of anyone, declares the Lord GOD; so turn, and live.&rdquo; The word &ldquo;for&rdquo; is crucial &mdash; the command to turn is grounded in a disclosure of God&rsquo;s character. He is asking them to do what he himself desires with his whole being. There is no gap between what God commands and what God wants. He wants them to live. He has designed the entire structure of individual accountability so that repentance would be meaningful and effective. And he seals it with his own character: a God who has no pleasure in death, who turns toward life with his whole being, and who calls his people to turn with him toward the life he holds out.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Refusing the Comfort of Inherited Blame",
    accent: PURPLE,
    paragraphs: [
      "The sour grapes proverb is still very much alive. We live in a cultural moment that is deeply invested in the language of inherited disadvantage, systemic guilt, and the weight of history on the present. Some of this is right and necessary &mdash; the Bible does not deny that the sins of the fathers have real consequences for their children, or that unjust social structures shape people&rsquo;s lives. What Ezekiel 18 forbids is making that inheritance the final word about our standing before God and our responsibility for our own choices.",
      "When we use our family, our history, or our social context as an explanation that relieves us of moral agency, we are reaching for the same comfort the exiles sought in the sour grapes proverb. And God&rsquo;s response is the same: he forbids it not to be harsh but to restore to us the freedom and responsibility of being genuine moral agents who can turn, repent, and live. The inheritance of a difficult past is real; the power to turn from it in our own choices is equally real.",
    ],
  },
  {
    heading: "The Freedom and Responsibility of Individual Accountability",
    accent: TEAL,
    paragraphs: [
      "To be held individually accountable before God is simultaneously a burden and a liberation. It is a burden because I cannot hide behind my ancestors, my upbringing, or my circumstances when I stand before the God who sees every soul on its own account. But it is a liberation because it means that my future is not determined by my past or my parents. I am not locked into the trajectory that my family, my culture, or my own previous choices have set. I can turn.",
      "This is the freedom that Ezekiel 18 is most urgently trying to give to a community that had convinced themselves they had no freedom left. They had decided that history had settled the question of their moral standing, and they had stopped looking for ways to turn. The prophetic word breaks through this fatalism with the announcement that every soul stands directly before God and that God is not yet finished with any of them. The door of repentance is open to the individual who will walk through it.",
    ],
  },
  {
    heading: "Past Righteousness Does Not Cover Present Sin",
    accent: GOLD,
    paragraphs: [
      "One of the hardest words in Ezekiel 18 for people who have long histories of faithful living is the warning that former righteousness does not cover present sin. The person who has walked faithfully with God for decades and then turns away from that faithfulness to pursue wickedness will find that God does not balance the account in their favor on the basis of what they used to be. He sees the soul as it is now, oriented as it is now.",
      "This is a warning against the spiritual complacency that can settle into long-term Christians. We can begin to assume that our track record with God provides a buffer, that our accumulated faithfulness gives us latitude to drift for a season. Ezekiel 18 cuts against that assumption. God does not keep a running balance in which past good deeds offset present wickedness. He calls us to live faithfully now, to maintain the orientation toward him now, because &ldquo;now&rdquo; is always the moment in which we stand before him.",
    ],
  },
  {
    heading: "Past Sin Does Not Prevent Present Repentance",
    accent: GREEN,
    paragraphs: [
      "The other side of the Ezekiel 18 coin is the most radical good news in the chapter: no matter what a person has done, genuine turning to God opens a completely clean account. &ldquo;None of the transgressions that he has committed shall be remembered against him.&rdquo; This is not a reward for good behavior going forward; it is a statement about the nature of repentance and what it accomplishes before God. The turned life begins fresh.",
      "For anyone weighed down by the accumulated guilt of past choices &mdash; perhaps a history of addiction, moral failure, broken relationships, or years of ignoring God &mdash; this word is life. It does not promise that all natural consequences will evaporate. It promises something more important: that the moral account before God is settled. The one who genuinely turns to God does not carry the weight of every former sin into the new life. They begin again, not because they deserve to but because God, who has no pleasure in anyone&rsquo;s death, is determined to find every reason to give life.",
    ],
  },
  {
    heading: "God Genuinely Wants Us to Live",
    accent: ROSE,
    paragraphs: [
      "The pastoral heart of Ezekiel 18 is the declaration that God has no pleasure in the death of anyone. This truth should fundamentally shape how we understand every warning, every call to repentance, and every announcement of judgment in Scripture. None of these come from a God who is looking for reasons to condemn. They come from a God who is desperately trying to alert people to the path they are on and redirect them before it reaches its end.",
      "When we share the gospel and call people to repentance, we are giving voice to the same heart that speaks in Ezekiel 18:32. We are not the bearers of a God who has reluctantly agreed to offer one last chance to those who meet his conditions. We are the representatives of a God who leans toward his people and cries &ldquo;Why will you die?&rdquo; &mdash; who does not want any of them to perish, and who has constructed the entire architecture of individual accountability and radical repentance precisely so that the way back would always be open to anyone who turns toward him.",
    ],
  },
];

const reflectionQuestions = [
  "In what ways have you been tempted to blame your family background, your upbringing, or your social circumstances for your own moral and spiritual failures? What would it look like to own your choices before God as an individual?",
  "Is there a pattern of sin in your family or community that you have watched for years? Ezekiel 18 promises that you are not bound to repeat it. What specific step of turning might God be calling you to take?",
  "Have you ever relied on a history of faithful living as if it gave you spiritual credit you could draw on during a season of compromise? How does Ezekiel 18 challenge that assumption?",
  "Is there something in your past that you have assumed disqualifies you from a clean standing before God? How does the promise that &ldquo;none of the transgressions he has committed shall be remembered&rdquo; speak to that assumption?",
  "God says &ldquo;I have no pleasure in the death of anyone.&rdquo; How does it change the way you hear his warnings and his calls to repentance when you understand that they come from a God who genuinely wants you to live?",
];

const videoItems = [
  { videoId: "XzRcN8wZmQo", title: "Ezekiel 18: The Soul Who Sins Shall Die (Verse by Verse)" },
  { videoId: "ZbTtP5vJbNs", title: "Individual Accountability &mdash; Ezekiel 18 Study" },
  { videoId: "BdVpY7uBwLk", title: "Turn and Live &mdash; Ezekiel 18:31-32 Explained" },
  { videoId: "DfXrT3xZfVm", title: "Ezekiel 18 &mdash; Is God&rsquo;s Way Just? Commentary" },
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

export default function Ezekiel18GuidePage() {
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
              background: `${PURPLE}22`,
              color: PURPLE,
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
            Ezekiel Chapter 18
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
            The Soul Who Sins Shall Die
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
                "&ldquo;For I have no pleasure in the death of anyone, declares the Lord GOD; so turn, and live.&rdquo; &mdash; Ezekiel 18:32",
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
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? PURPLE : CARD,
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
              Overview of Ezekiel 18
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Ezekiel 18 is one of the most theologically revolutionary chapters in the Old Testament. Written to a community in Babylonian exile who had surrendered to fatalism, it demolishes the proverb of inherited guilt, establishes the principle of individual moral accountability, and closes with one of the most passionate invitations in all of Scripture. God does not want the death of the wicked; he wants them to turn and live. The chapter is simultaneously a work of careful legal reasoning and a heartfelt pastoral plea.",
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
                  "Beneath the legal argument of Ezekiel 18 lie some of the Old Testament&rsquo;s richest theological deposits: the nature of individual accountability, the dynamics of moral change within a life, the radical openness of repentance, the new heart as both human task and divine gift, and the character of a God whose deepest desire is that his people would live.",
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
                  "Walking through Ezekiel 18 section by section reveals a carefully constructed argument that moves from the abolition of a destructive proverb, through three generations of carefully differentiated moral cases, to the reversal of the accusation that God is unjust, and finally to the passionate imperative: repent and turn, cast away your transgressions, make yourselves a new heart &mdash; for God has no pleasure in the death of anyone.",
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
                  "Ezekiel 18 speaks with direct force to several of the deepest temptations of the human heart: the temptation to blame our history for our choices, the temptation to coast on a track record of past faithfulness, the temptation to despair because of a history of failure, and the temptation to misread God as a deity eager to condemn. The chapter confronts all of these and leads us to the same destination: turn and live.",
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
                "Go deeper into Ezekiel 18 with these video teachings on individual accountability, the sour grapes proverb, the three-generation case study, and God&rsquo;s passionate plea to turn and live.",
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
            border: `1px solid ${ROSE}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3
            style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}
          >
            Turn and Live
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Ezekiel 18 is God&rsquo;s great refusal to let his people hide behind inherited guilt or to resign themselves to a fate they did not choose. Every soul stands directly before him, judged on its own account, with the door of repentance open at every moment. The chapter reaches its climax not in a verdict but in an invitation: cast away your transgressions, make yourselves a new heart and a new spirit, and turn &mdash; because God has no pleasure in the death of anyone and genuinely, passionately wants you to live.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
