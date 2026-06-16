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

const ACCENT = TEAL;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  intro: string;
  blocks: Block[];
}

const reflectionQuestions: string[] = [
  "Paul appeals by the meekness and gentleness of Christ even as he prepares to confront. Where are you tempted to choose either harshness or cowardice instead of the bold gentleness that Christ models?",
  "The weapons of our warfare are not of the flesh but have divine power to destroy strongholds. What strongholds of thought and argument in your own mind most need to be torn down by the truth of the gospel?",
  "Paul speaks of taking every thought captive to obey Christ. Which thoughts run wild in your inner life, refusing to submit to Christ, and how might you bring them under his authority?",
  "The critics charged that Paul was bold in his letters but weak in person. Is there a gap between the person you appear to be at a distance and the person you actually are when present?",
  "Those who measure themselves by one another are without understanding. In what ways do you compare yourself with others, and how does that comparison distort your sense of God's calling on your life?",
  "Let the one who boasts, boast in the Lord. Whose approval are you living for, and what would change if you sought only the commendation that comes from the Lord himself?",
];

const tabs: TabContent[] = [
  {
    id: "Overview",
    intro: "Second Corinthians 10 opens the final great section of the letter, in which Paul mounts a sustained defense of his apostolic ministry against rival teachers who have unsettled the Corinthian church. The chapter is at once tender and fierce, humble and bold. It gives us the most concentrated picture in all of Paul's writings of the nature of spiritual warfare, the folly of self-commendation, and the single boast that is worth making, the boast in the Lord.",
    blocks: [
      {
        heading: "Overview of 2 Corinthians 10",
        reference: "2 Corinthians 10:1&ndash;18",
        paragraphs: [
          "With chapter 10 the tone of 2 Corinthians changes noticeably. The earlier chapters glowed with reconciliation, comfort, and the joy of restored relationship. Now Paul turns to confront the rival teachers who have infiltrated the Corinthian congregation and undermined his authority. These men, whom Paul will later call false apostles and super-apostles (chapters 11 and 12), have boasted in their own credentials and belittled Paul&rsquo;s. The final four chapters of the letter are his sustained answer, and chapter 10 sets the terms of the whole defense.",
          "Paul begins, strikingly, not with thunder but with meekness: &ldquo;I, Paul, myself entreat you, by the meekness and gentleness of Christ&rdquo; (verse 1). Even as he prepares to confront, he grounds his approach in the character of Christ. He acknowledges the charge his critics have leveled, that he is humble when face to face but bold when away, and he begs that when he comes he may not have to be bold against those who accuse him of walking according to the flesh.",
          "Then comes the heart of the chapter, the great passage on spiritual warfare (verses 3 to 6): &ldquo;For though we walk in the flesh, we are not waging war according to the flesh. For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds. We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ.&rdquo; Few sentences in the New Testament have shaped Christian thinking about the battle for the mind more deeply than these.",
          "Paul next addresses the specific charges against him (verses 7 to 11). His critics say his letters are weighty and strong but his bodily presence is weak and his speech of no account. Paul answers that there is no such inconsistency: &ldquo;what we say by letter when absent, we do when present.&rdquo; He will not be intimidated into proving himself by the standards of showmanship his rivals prize. His authority comes from the Lord and is exercised for building up, not tearing down.",
          "The chapter then exposes the folly of self-commendation and comparison (verses 12 to 16). Paul refuses to classify or compare himself with those who commend themselves. Those who measure themselves by one another are, he says bluntly, without understanding. Paul boasts only within the area of ministry God assigned to him, an area that reached as far as Corinth itself, and he refuses to boast in the labors of others or in another&rsquo;s sphere of influence.",
          "Finally the chapter rises to its great conclusion (verses 17 to 18), quoting Jeremiah: &ldquo;Let the one who boasts, boast in the Lord. For it is not the one who commends himself who is approved, but the one whom the Lord commends.&rdquo; Here is the principle that overturns the whole economy of the false apostles. Self-commendation proves nothing. The only verdict that matters is the Lord&rsquo;s, and the only boast that is safe is the boast that gives all glory to him.",
        ],
      },
      {
        heading: "The Setting of Paul's Defense",
        reference: "2 Corinthians 10:1&ndash;2, 10",
        paragraphs: [
          "To feel the force of chapter 10 we must picture the situation in Corinth. After Paul had founded the church and labored among them, traveling teachers arrived who carried impressive letters of recommendation, spoke with polished rhetorical skill, and projected the kind of commanding presence the ancient world admired. By comparison they made Paul look unimpressive, and they encouraged the Corinthians to think so. Paul&rsquo;s opponents traded on appearances, and the Corinthians were dazzled.",
          "Their criticism of Paul was personal and pointed. They said his letters were weighty and strong but that in person he was weak and his speech contemptible (verse 10). The implication was that Paul was a coward who could only be bold from a safe distance, a man whose pen wrote checks his presence could not cash. They also insinuated that he walked according to the flesh, that his ministry operated by merely human, worldly means.",
          "Paul&rsquo;s reply is not to out-boast his rivals on their own terms but to redefine the terms entirely. He will not measure ministry by rhetorical flash or commanding presence. He will measure it by faithfulness to the commission God gave him and by the divine power that attends a gospel ministry. The whole chapter is a contrast between two understandings of spiritual authority: one that rests on human impressiveness and one that rests on God.",
          "This setting explains why the chapter swings between gentleness and severity. Paul genuinely loves the Corinthians and approaches them in the meekness of Christ. Yet he is also ready, if necessary, to exercise the full authority Christ has given him. The combination is not inconsistency but the very pattern of Christ, who was both gentle and bold, both lowly and Lord. Paul refuses to let his critics force him into a false choice between the two.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro: "Second Corinthians 10 gathers several great themes that run through the whole of Paul's ministry: the gentleness of Christ as the model for confronting opposition, the genuinely spiritual nature of Christian warfare, the demolition of strongholds and the capture of every thought, the folly of self-commendation and comparison, and the single legitimate boast, the boast in the Lord. Together they form a profound theology of how the gospel advances and how its ministers should live.",
    blocks: [
      {
        heading: "The Meekness and Gentleness of Christ",
        reference: "2 Corinthians 10:1&ndash;2",
        paragraphs: [
          "The first theme is the most surprising, given the conflict that fills the chapter. Paul opens his confrontation by appealing &ldquo;by the meekness and gentleness of Christ.&rdquo; He does not begin by asserting his rights or marshaling his credentials. He begins by invoking the character of his Lord, the One who was gentle and lowly in heart, who did not break a bruised reed or quench a smoldering wick. This is the spirit in which Paul intends to approach even those who oppose him.",
          "Meekness in the biblical sense is not weakness. It is strength under control, power harnessed to the will of God. The meekness of Christ was the meekness of one who had legions at his command yet went silently to the cross. To appeal by that meekness is not to abandon authority but to exercise it in the manner of Christ, with patience, restraint, and a refusal to dominate by sheer force.",
          "Yet Paul makes clear that this gentleness is not the whole story. He asks that when he comes he may not have to show the boldness he is prepared to use against those who persist in opposition. Gentleness is his preference, not his only option. The pattern of Christ holds both together: a Lamb who is also a Lion, a Shepherd who is also a King. Paul means to imitate that pattern, leading with gentleness while standing ready for bold confrontation if it is required.",
          "This theme corrects two common distortions of Christian leadership. The first is harshness that mistakes cruelty for courage; the second is cowardice that mistakes spinelessness for gentleness. Paul rejects both. The way of Christ is bold gentleness, a love that is willing to confront and a strength that is clothed in humility. Every Christian called to address conflict is called to this same demanding combination.",
        ],
      },
      {
        heading: "Spiritual Warfare With Divine Weapons",
        reference: "2 Corinthians 10:3&ndash;5",
        paragraphs: [
          "The central theme of the chapter is the nature of spiritual warfare. &ldquo;Though we walk in the flesh, we are not waging war according to the flesh,&rdquo; Paul writes. He concedes the obvious, that he is a frail human being living an ordinary bodily life, but he insists that the battle he fights is not fought by human means. The conflict is real warfare, but its weapons belong to another order entirely.",
          "&ldquo;For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds.&rdquo; The word stronghold pictures a fortress, a fortified position that resists assault. In the spiritual realm these strongholds are not made of stone but of ideas, ideologies, false philosophies, and entrenched patterns of thought that set themselves against God. The weapons that can breach such fortresses are not human persuasion or worldly power but the truth of the gospel wielded in the power of the Spirit.",
          "The decisive point is that this is warfare against ideas, not against people. &ldquo;We destroy arguments and every lofty opinion raised against the knowledge of God.&rdquo; The enemy is the proud reasoning that exalts itself against the true knowledge of God, the lofty opinion that looks down on the gospel as foolishness. Paul does not aim to destroy his opponents but to demolish the false arguments that hold them and others captive. The target is the fortress of error, not the prisoners trapped inside it.",
          "This theme reframes how Christians engage the battle of ideas in every age. The temptation is always to fight with fleshly weapons: manipulation, intimidation, political power, clever rhetoric. Paul insists these cannot truly destroy strongholds; only weapons of divine power, truth and the Spirit and the gospel, can do that. The Christian who would tear down the fortresses of unbelief must lay aside the weapons of the flesh and take up the weapons that God supplies.",
        ],
      },
      {
        heading: "Taking Every Thought Captive",
        reference: "2 Corinthians 10:5&ndash;6",
        paragraphs: [
          "Flowing directly from the warfare passage is the theme of the disciplined mind. Paul&rsquo;s aim is to &ldquo;take every thought captive to obey Christ.&rdquo; The military image continues: after a fortress is breached, its defenders are taken captive and led away in submission. So Paul pictures every rebellious thought being seized and brought under the authority of Christ. The battlefield is, finally, the mind.",
          "This is one of the most practical and searching ideas in all of Paul&rsquo;s letters. The Christian life is lived not only in outward action but in the hidden realm of thought, and thoughts left to run wild become the strongholds from which sin and unbelief operate. To take every thought captive is to refuse to let any idea, suspicion, fear, lust, or proud reasoning remain unchallenged. Each is to be brought to Christ and made to obey him.",
          "The phrase to obey Christ is crucial. The goal of the capture is not merely intellectual but moral and spiritual: obedience. A thought is taken captive when it is brought into submission to the lordship of Jesus, when it is measured against his truth and bent to his will. This is the lifelong discipline of the mind, the daily work of bringing the inner world under the reign of Christ.",
          "Paul adds that he is &ldquo;ready to punish every disobedience, when your obedience is complete&rdquo; (verse 6). The same authority that takes thoughts captive stands ready to address persistent rebellion. Yet the order matters: Paul wants the obedience of the willing to be established first. He does not rush to discipline; he labors first for the glad submission of those who will obey, and only then deals with those who refuse.",
        ],
      },
      {
        heading: "The Folly of Comparison and the Boast in the Lord",
        reference: "2 Corinthians 10:12&ndash;18",
        paragraphs: [
          "The final cluster of themes concerns self-commendation, comparison, and the only legitimate boast. Paul refuses to classify or compare himself with those who commend themselves. Of such people he says they &ldquo;measure themselves by one another and compare themselves with one another&rdquo; and so &ldquo;are without understanding.&rdquo; To take other people as the standard is to enter a closed and foolish circle in which no one is ever measured by the true standard, which is the Lord.",
          "Comparison is a trap because it produces either pride or despair, and both are forms of blindness. Those who compare favorably grow proud; those who compare unfavorably grow discouraged; and neither has looked at the only measure that matters. Paul will not play this game. He boasts only within the field of ministry that God actually assigned to him, a field that genuinely reached to Corinth, and he refuses to take credit for the labors of others or to boast in another&rsquo;s sphere of influence.",
          "Against the whole economy of self-commendation Paul sets the principle of verse 17: &ldquo;Let the one who boasts, boast in the Lord.&rdquo; He is quoting Jeremiah 9:24, where the prophet declares that no one should boast in wisdom, might, or riches, but only in knowing the Lord. The only boast that does not collapse into folly is the boast that gives all glory to God, the boast that says everything I am and have is from him.",
          "The chapter ends with the verdict that decides everything: &ldquo;For it is not the one who commends himself who is approved, but the one whom the Lord commends&rdquo; (verse 18). Self-approval proves nothing. A favorable comparison with others proves nothing. The only commendation that counts is the Lord&rsquo;s, spoken finally on the day when he weighs every ministry and every life. To live for that commendation, and no other, is to be free at last from the exhausting tyranny of human approval.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro: "Walking through 2 Corinthians 10 section by section reveals the careful logic of Paul's defense, moving from his gentle yet firm appeal, through the great passage on spiritual warfare and the captured thought, to his answer to the personal charges against him, and finally to his refusal of comparison and his single boast in the Lord. Each section sharpens the contrast between the way of the flesh and the way of the Spirit.",
    blocks: [
      {
        heading: "Verses 1 to 2: The Gentle Appeal",
        reference: "2 Corinthians 10:1&ndash;2",
        paragraphs: [
          "&ldquo;I, Paul, myself entreat you, by the meekness and gentleness of Christ, I who am humble when face to face with you, but bold toward you when I am away!&rdquo; Paul names himself emphatically, taking the matter personally, yet he opens not with a demand but with an entreaty grounded in the character of Christ. He even quotes, perhaps with a touch of irony, the very charge his critics make against him, that he is meek in their presence and bold in his letters.",
          "The meekness and gentleness of Christ are not random virtues but the deliberate frame for everything that follows. Paul wants the Corinthians to know that even his sternest words flow from a heart shaped by the gentle Lord. He is not approaching them as a tyrant defending wounded pride but as a servant of Christ entreating wayward children.",
          "&ldquo;I beg of you that when I am present I may not have to show boldness with such confidence as I count on showing against some who suspect us of walking according to the flesh&rdquo; (verse 2). Paul would far rather come in gentleness than in severity. He pleads with them to make the bold confrontation unnecessary by setting their hearts in order before he arrives.",
          "The charge that Paul walks according to the flesh is the accusation he is most concerned to refute. His opponents claim his ministry operates by ordinary, worldly means and motives. The verses that follow are his decisive answer, drawing the sharpest possible line between walking in the flesh, which is unavoidable for any mortal, and waging war according to the flesh, which Paul flatly denies.",
        ],
      },
      {
        heading: "Verses 3 to 4: Weapons of Divine Power",
        reference: "2 Corinthians 10:3&ndash;4",
        paragraphs: [
          "&ldquo;For though we walk in the flesh, we are not waging war according to the flesh&rdquo; (verse 3). Paul concedes the first half freely: of course he lives an ordinary human life, subject to weakness, weariness, and limitation. But he sharply denies the second: the warfare he wages is not conducted by fleshly means. The distinction is everything. To live in the flesh is simply to be human; to war according to the flesh is to fight God&rsquo;s battles with the world&rsquo;s weapons.",
          "&ldquo;For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds&rdquo; (verse 4). The weapons Paul wields are charged with divine power. They are mighty not because of who holds them but because of the God who supplies them. The word translated divine power conveys a strength that belongs to God himself, capable of accomplishing what no human force could.",
          "The object of this power is the destruction of strongholds. The image would have been vivid to ancient readers familiar with siege warfare and the pulling down of fortified positions. Spiritual strongholds are the entrenched systems of thought and the proud defenses that the human heart and the surrounding culture raise against God. They are real, formidable, and immune to merely human assault.",
          "Only weapons of divine power can breach such defenses. This is why Paul refuses to fight with the fleshly tools his rivals prize, the rhetorical polish and commanding presence that impress the crowd. Those tools may win applause, but they cannot demolish a single stronghold. The gospel preached in the power of the Spirit can, and that is the weapon Paul wields.",
        ],
      },
      {
        heading: "Verses 5 to 6: Arguments Destroyed, Thoughts Captured",
        reference: "2 Corinthians 10:5&ndash;6",
        paragraphs: [
          "&ldquo;We destroy arguments and every lofty opinion raised against the knowledge of God&rdquo; (verse 5). The strongholds are now defined: they are arguments and lofty opinions, the proud reasonings that exalt themselves against the true knowledge of God. The battlefield is the realm of ideas. The enemy is every system of thought that sets itself up as higher than God&rsquo;s truth and looks down upon the gospel.",
          "&ldquo;And take every thought captive to obey Christ.&rdquo; The siege image reaches its climax. After the walls of false argument are breached, the rebellious thoughts that sheltered behind them are seized and led away in chains to submit to Christ. The goal is total: every thought, not merely some, is to be brought into obedience. Nothing in the inner life is to remain in rebellion against the Lord.",
          "This phrase has become one of the most cherished in Christian devotion, and rightly so. It names the great inward discipline of the Christian life, the daily work of refusing to let any thought run free of Christ&rsquo;s authority. Fears, fantasies, resentments, proud speculations, and creeping doubts are all to be captured and made to obey. The mind is not a neutral space but a battlefield to be conquered for Christ.",
          "&ldquo;Being ready to punish every disobedience, when your obedience is complete&rdquo; (verse 6). Paul holds genuine authority to address persistent rebellion, but he orders his approach with pastoral wisdom. First he labors for the willing obedience of those who will submit; only then does he turn to deal with those who refuse. His authority is real, but it is exercised for building up, never merely to crush.",
        ],
      },
      {
        heading: "Verses 7 to 11: Answering the Personal Charge",
        reference: "2 Corinthians 10:7&ndash;11",
        paragraphs: [
          "&ldquo;Look at what is before your eyes&rdquo; (verse 7). Paul calls the Corinthians to judge by reality rather than by the surface impressions his rivals exploit. If anyone is confident of belonging to Christ, Paul says, let him consider that Paul belongs to Christ just as truly. His apostolic authority is no less genuine for being unaccompanied by worldly flash.",
          "&ldquo;For even if I boast a little too much of our authority, which the Lord gave for building you up and not for destroying you, I will not be ashamed&rdquo; (verse 8). Paul is willing to speak of his authority because it is a real authority, given by the Lord. Yet he carefully names its purpose: it was given for building up, not for tearing down. Even Paul&rsquo;s boldness serves a constructive, pastoral end.",
          "&ldquo;For they say, his letters are weighty and strong, but his bodily presence is weak, and his speech of no account&rdquo; (verses 9 to 10). Here Paul quotes the very words of his critics. They claim he is impressive only on paper, a man whose physical presence and unpolished speech betray the boldness of his pen. The accusation cuts at his credibility and dignity in a culture that prized eloquence and commanding presence.",
          "&ldquo;Let such a person understand that what we say by letter when absent, we do when present&rdquo; (verse 11). Paul answers the charge of inconsistency head on. There is no gap between his letters and his life. The same authority that speaks boldly in writing will act decisively in person if it must. His critics underestimate him at their peril, for the man and the message are one.",
        ],
      },
      {
        heading: "Verses 12 to 16: The Folly of Self-Comparison",
        reference: "2 Corinthians 10:12&ndash;16",
        paragraphs: [
          "&ldquo;Not that we dare to classify or compare ourselves with some of those who are commending themselves&rdquo; (verse 12). Paul declines, with biting irony, to enter the contest of self-promotion. His opponents are busy commending themselves and ranking one another, and Paul refuses to play. He will not measure his ministry by their scale.",
          "&ldquo;But when they measure themselves by one another and compare themselves with one another, they are without understanding.&rdquo; This is Paul&rsquo;s devastating verdict on the whole enterprise of comparison. To take other people as the measure is to lose all true measurement, for the standard itself is faulty. Such comparison is not wisdom but its opposite; those who practice it have lost the only frame of reference that matters.",
          "&ldquo;But we will not boast beyond limits, but will boast only with regard to the area of influence God assigned to us, to reach even to you&rdquo; (verse 13). Paul confines his boasting to the actual sphere of ministry God gave him, a sphere that genuinely included the founding of the Corinthian church. He claims no credit he has not earned and trespasses on no other minister&rsquo;s territory.",
          "&ldquo;We do not boast beyond limit in the labors of others&rdquo; (verse 15). Paul will not, like his rivals, take credit for work others have done or build his reputation in fields he did not plant. His hope is rather that as the Corinthians&rsquo; faith increases, his own ministry may be enlarged so as to preach the gospel in lands beyond, never boasting in work already done in another&rsquo;s sphere. His ambition is for the gospel to advance, not for his own name to be magnified at another&rsquo;s expense.",
        ],
      },
      {
        heading: "Verses 17 to 18: Boasting in the Lord",
        reference: "2 Corinthians 10:17&ndash;18",
        paragraphs: [
          "&ldquo;Let the one who boasts, boast in the Lord&rdquo; (verse 17). Paul reaches his conclusion by quoting Jeremiah 9:24, where the Lord declares that the wise should not boast in wisdom, the mighty in might, or the rich in riches, but only in understanding and knowing him. Paul lifts this ancient word into the heart of his argument: the only boast that is not foolish is the boast that glories in the Lord himself.",
          "This principle dismantles the entire system of the false apostles. They boast in their credentials, their eloquence, their commanding presence, and their favorable comparisons. Paul boasts in the Lord, and so removes himself from the contest altogether. The believer who boasts in the Lord can never be outdone, for his glory rests not in himself but in the inexhaustible greatness of God.",
          "&ldquo;For it is not the one who commends himself who is approved, but the one whom the Lord commends&rdquo; (verse 18). Here is the verdict that overturns every human estimate. Self-commendation is worthless; it proves only what a person thinks of himself. Even the favorable judgment of others is no final guarantee. The only approval that ultimately counts is the Lord&rsquo;s.",
          "This closing word sets the whole chapter in its proper light. Paul has not been defending his pride but pointing the Corinthians to the only standard that matters. On the last day no one will be vindicated by his own boasting or by his comparisons with others, but only by the commendation of the Lord who sees the heart. To labor for that commendation, and to leave the rest in his hands, is the true freedom of the servant of Christ.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro: "Second Corinthians 10 speaks with searching relevance to the contemporary Christian, who lives in a world of self-promotion, endless comparison, and noisy battles of ideas. Paul's vision of bold gentleness, spiritual warfare with divine weapons, the captured thought, the refusal of comparison, and the single boast in the Lord offers a profound and practical guide for living and serving faithfully today.",
    blocks: [
      {
        heading: "Confront in the Spirit of Christ",
        reference: "2 Corinthians 10:1&ndash;2",
        paragraphs: [
          "The first application concerns how we handle conflict and confrontation. Paul models a bold gentleness that neither retreats into cowardice nor lashes out in harshness. When we must address wrong, oppose error, or stand for the truth, we are called to do so by the meekness and gentleness of Christ, leading with humility and patience while remaining ready, if necessary, for firm confrontation.",
          "This corrects two opposite failures. Some Christians, prizing niceness above all, never confront anything and so let error and sin run unchecked. Others, prizing boldness, confront with a harshness that wounds and dominates. Paul rejects both. The way of Christ is to entreat first, to approach in gentleness, and to reserve severity for those who persist in opposition after gentler appeals have failed.",
          "There is also a warning here against being one person at a distance and another in person. Paul&rsquo;s critics accused him of exactly this, and although the charge against him was false, the temptation is real for us. We are called to integrity, to be the same person whether writing online, speaking from a distance, or standing face to face. What we say when absent we should be willing to do when present.",
          "Practically, this means examining our manner whenever we must address conflict. Do we avoid it out of fear, or do we attack out of pride? The narrow path between is the way of Christ: courageous, truthful, and clothed in gentleness. To walk it requires both the humility to entreat and the courage to confront, held together as they were in our Lord.",
        ],
      },
      {
        heading: "Fight the Real Battle With the Right Weapons",
        reference: "2 Corinthians 10:3&ndash;5",
        paragraphs: [
          "The second application is to recognize the true nature of the spiritual battle and to refuse the weapons of the flesh. Christians are constantly tempted to advance God&rsquo;s purposes by worldly means: manipulation, intimidation, political leverage, manufactured outrage, or clever rhetoric designed to win rather than to enlighten. Paul insists that such weapons, however effective they appear, cannot destroy a single stronghold.",
          "The real battle is against ideas and ideologies, not against people. This is a vital distinction in an age of fierce cultural conflict. Our enemies are not the persons who hold false beliefs but the false beliefs themselves, the lofty opinions raised against the knowledge of God. We are called to demolish arguments while loving and seeking to rescue the people held captive by them. To confuse the two, and to make war on persons, is to abandon the way of Christ.",
          "The weapons that can actually destroy strongholds are those of divine power: the truth of the gospel, the word of God, prayer, and the work of the Spirit. These are the only tools that can breach the fortresses of unbelief and proud reasoning. The Christian who would engage the battle of ideas must rely not on the strength of his own cleverness but on the divine power that attends faithful witness.",
          "This reframes how we engage the great debates of our day. We are not called to win at any cost by the world&rsquo;s methods but to bear witness to the truth in the power of the Spirit, trusting God to do what no human weapon can. The temptation to fight fire with fire, to meet worldly power with worldly power, must be resisted. Our warfare is of another order, and so must our weapons be.",
        ],
      },
      {
        heading: "Take Your Thoughts Captive",
        reference: "2 Corinthians 10:5",
        paragraphs: [
          "The third application is intensely personal: the discipline of the mind. Paul calls us to take every thought captive to obey Christ, and nowhere is the battle more constant than in our own inner life. Fears, resentments, lusts, proud speculations, anxious imaginings, and creeping doubts rise unbidden, and left unchallenged they harden into the strongholds from which sin and unbelief operate.",
          "To take a thought captive is to refuse to let it roam free of Christ&rsquo;s authority. When an anxious thought arises, we bring it to Christ and submit it to his promises. When a resentful thought arises, we measure it against his command to love and forgive. When a proud or lustful thought arises, we seize it and lead it away in chains rather than letting it set up its fortress in our minds. This is the daily, hidden work of the Christian life.",
          "This discipline requires both vigilance and dependence. Vigilance, because thoughts must be noticed before they can be captured, and many of us let them run for hours unexamined. Dependence, because the power to take them captive is not finally our own but Christ&rsquo;s, exercised through his word and his Spirit. We watch, and we pray, and we bring every thought to the One who alone can subdue it.",
          "The goal is obedience, the bending of the whole inner world to the lordship of Jesus. A mind brought into captivity to Christ is not a diminished mind but a liberated one, free at last from the tyranny of its own runaway thoughts. The reader is invited to begin this work today, identifying the thoughts that most resist Christ and bringing them, one by one, under his gentle and saving rule.",
        ],
      },
      {
        heading: "Escape Comparison and Boast Only in the Lord",
        reference: "2 Corinthians 10:12&ndash;18",
        paragraphs: [
          "The final application addresses one of the most corrosive habits of the human heart: comparison. In an age of curated images and constant measuring against others, Paul&rsquo;s words land with great force. Those who measure themselves by one another, he says, are without understanding. Comparison breeds either pride or despair, and both blind us to the only measure that matters, the Lord himself.",
          "The cure for comparison is to receive and rejoice in the particular calling and sphere God has given us. Paul boasted only within the area of ministry God assigned to him, and he refused to covet another&rsquo;s field or to take credit for another&rsquo;s labor. So we are freed when we stop measuring our lives against everyone else&rsquo;s and instead seek faithfulness in the place and the work God has actually given us.",
          "Behind comparison lies the deeper question of whose approval we live for. The false apostles lived for self-commendation and the applause of the crowd. Paul lived for the commendation of the Lord. To seek the Lord&rsquo;s approval above all is to be set free from the exhausting and endless pursuit of human approval, which can never be fully secured and never finally satisfies.",
          "So the chapter leaves us with its great liberating command: let the one who boasts, boast in the Lord. Everything we are and have is from him, and the only glory worth seeking is the glory that returns to him. To live for his commendation, and to leave the verdict on our lives in his hands, is to find a freedom and a peace that no comparison, no rivalry, and no human applause can ever give or take away.",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "OBVxRMfaBOI", title: "2 Corinthians 10 - Spiritual Warfare (Bible Study)" },
  { videoId: "3lfPK2vfC54", title: "BibleProject - 2 Corinthians Overview" },
  { videoId: " qIeX6X4zKkY".trim(), title: "Demolishing Strongholds - 2 Corinthians 10 Explained" },
  { videoId: "Hk3cf4P9pYU", title: "Taking Every Thought Captive to Christ" },
];

export default function TwoCorinthiansTenGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: "2 Corinthians 10 &mdash; Spiritual Warfare and Boasting in the Lord" }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ.&rdquo; &mdash; 2 Corinthians 10:5" }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentTab && (
          <section>
            <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.85, margin: "0 0 2.5rem" }} dangerouslySetInnerHTML={{ __html: currentTab.intro }} />
            {currentTab.blocks.map((block, bi) => (
              <div key={bi} style={{ marginBottom: "2.75rem" }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 6px" }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                <div style={{ color: ACCENT, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {block.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              </div>
            ))}

            {activeTab === "Application" && (
              <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.3rem" }}>Reflection Questions</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {reflectionQuestions.map((q, qi) => (
                    <li key={qi} style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem", color: TEXT }}>Video Teaching on 2 Corinthians 10</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Boast Only in the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Second Corinthians 10 calls us out of the exhausting world of self-promotion and endless comparison into the freedom of a single boast, the boast in the Lord. We are summoned to confront in the gentleness of Christ, to fight the real battle with weapons of divine power, to take every thought captive to obey him, and to seek no approval but his. The one whom the Lord commends, and no other, is the one who is truly approved." }} />
        </div>
      </main>
    </div>
  );
}
