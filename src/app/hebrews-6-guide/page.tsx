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

const ACCENT = GOLD;

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
  "The writer urges his readers to leave the elementary teaching and press on to maturity. Where in your own walk have you remained at the foundation when God is calling you forward into deeper things?",
  "The warning passage of verses 4 to 6 has troubled and tested believers for centuries. Rather than using it to measure others, how does it function as a summons to you personally to hold fast and not drift?",
  "The land that drinks the rain and bears a useful crop receives a blessing. What rain of grace, teaching, and providence have you received, and what fruit is growing in the soil of your life as a result?",
  "God bound himself with both a promise and an oath so that you might have strong encouragement. When your feelings are unsteady, can you rest on the two unchangeable things in which it is impossible for God to lie?",
  "Hope is called a sure and steadfast anchor of the soul that reaches behind the curtain where Jesus has gone. What storms are you facing in which you most need to feel the holding power of that anchor?",
  "Jesus has gone ahead as a forerunner on your behalf. How does knowing that he has already entered the inner place change the way you face death, suffering, and the long road of faithfulness?",
];

const tabs: TabContent[] = [
  {
    id: "Overview",
    intro: "Hebrews 6 stands at one of the great hinges of the whole letter. It contains a tender exhortation to grow up into maturity, one of the most solemn and debated warnings in all of Scripture, a homely picture drawn from the soil, a warm word of pastoral confidence, and finally a soaring meditation on the unbreakable oath of God and the anchor of the soul. Few chapters in the New Testament travel such emotional and theological distance in so few verses.",
    blocks: [
      {
        heading: "Overview of Hebrews 6",
        reference: "Hebrews 6:1&ndash;20",
        paragraphs: [
          "Hebrews 6 cannot be understood apart from the verses that immediately precede it. At the end of chapter 5 the writer has just rebuked his readers for becoming dull of hearing, for needing milk when by this time they ought to be teachers, and for being unskilled in the word of righteousness like infants. Chapter 6 opens with the word &ldquo;therefore,&rdquo; gathering up that rebuke and turning it into a summons: since you are stalled, let us press on. The whole chapter is a single sustained pastoral movement from a stern diagnosis to a strong consolation.",
          "The opening verses (1 to 3) call the readers to leave behind the elementary doctrine of Christ and to go on to maturity. The writer then lists what he regards as the foundation, the basic catechism of the faith: repentance from dead works, faith toward God, instruction about washings, the laying on of hands, the resurrection of the dead, and eternal judgment. These are not to be despised; they are the foundation. But a foundation laid again and again is never built upon, and the writer longs for his readers to rise into the fuller structure of Christian understanding.",
          "Then comes the passage that has occupied interpreters for two thousand years (verses 4 to 6). It speaks of those who have once been enlightened, who have tasted the heavenly gift, who have shared in the Holy Spirit, who have tasted the goodness of the word of God and the powers of the age to come, and who then have fallen away. Of such the writer says it is impossible to restore them again to repentance, since they are crucifying once again the Son of God and holding him up to contempt. The severity of these words is matched only by the care required to interpret them rightly.",
          "Immediately the writer reaches for an image from the farm (verses 7 to 8). Land that drinks in the rain that often falls upon it and produces a useful crop receives a blessing from God. But land that bears thorns and thistles is worthless, near to being cursed, and its end is to be burned. The same rain falls on both fields; the difference lies in what each brings forth. The analogy interprets the warning: the test of genuine grace is the fruit that grows in the soil of a life.",
          "Yet having sounded the alarm, the writer hastens to reassure (verses 9 to 12). &ldquo;Though we speak in this way,&rdquo; he says, &ldquo;yet in your case, beloved, we feel sure of better things, things that belong to salvation.&rdquo; He grounds his confidence not in their feelings but in God&rsquo;s justice and in the visible evidence of their love shown for his name in serving the saints. He then exhorts them to show the same earnestness to the very end, so that they may not become sluggish but be imitators of those who through faith and patience inherit the promises.",
          "The chapter closes on its highest note (verses 13 to 20). The writer turns to Abraham, to whom God made a promise and then swore an oath, swearing by himself because he had no one greater by whom to swear. By these two unchangeable things, in which it is impossible for God to lie, those who have fled for refuge have strong encouragement to hold fast to the hope set before them. This hope is a sure and steadfast anchor of the soul, one that enters into the inner place behind the curtain, where Jesus has gone as a forerunner on our behalf, having become a high priest forever after the order of Melchizedek. With that name the writer reaches forward into chapter 7.",
        ],
      },
      {
        heading: "The Shape and Purpose of the Chapter",
        reference: "Hebrews 5:11&ndash;6:20",
        paragraphs: [
          "It helps to read Hebrews 6 as a sermon within a sermon, complete with its own structure of accusation, warning, encouragement, and assurance. The pastor who wrote Hebrews is not detached. He moves from the sharpest words in the letter to the warmest, and the rapid shift is not a contradiction but the very logic of pastoral love. A shepherd who never warns is negligent; a shepherd who only warns is cruel. This chapter holds both in a single breath.",
          "The genre of the warning is what theologians call paraenesis, exhortation designed to produce a particular response in the hearer. The writer is not constructing an abstract doctrine of whether a true believer can lose salvation; he is preaching to a congregation in real danger of drifting back into their old life under social and religious pressure. Some of his first hearers were Jewish believers tempted to retreat from Christ back into the familiar shelter of the synagogue. The whole letter exists to keep them pressing forward, and chapter 6 is its emotional center.",
          "Because the chapter is pastoral rather than systematic, it resists being read as a flat set of propositions. Its warnings and its assurances belong together; neither cancels the other. The warning is real, the danger is real, and the assurance is equally real. The God who warns is the same God who has bound himself by oath. To feel the full weight of the chapter, the reader must let both the trembling and the comfort do their work without rushing to resolve the tension prematurely.",
          "Structurally the chapter divides into three movements. First, the call to maturity and the listing of the foundational doctrines (verses 1 to 3). Second, the warning passage and its agricultural illustration (verses 4 to 8). Third, the word of confidence and the meditation on God&rsquo;s oath and the anchor of hope (verses 9 to 20). Each movement flows naturally into the next, and together they form one of the most pastorally rich passages in the entire New Testament.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro: "Beneath the surface of Hebrews 6 run several deep theological currents: the call to grow up into maturity, the nature and meaning of the severe warning, the fruitfulness that marks genuine faith, the absolute faithfulness of a God who cannot lie, and the picture of hope as an anchor reaching into the very presence of God. Each theme repays slow and prayerful attention.",
    blocks: [
      {
        heading: "Pressing On to Maturity",
        reference: "Hebrews 6:1&ndash;3",
        paragraphs: [
          "The first great theme is the call to leave the elementary doctrine of Christ and go on to maturity. The word translated maturity carries the sense of completeness, of reaching the goal for which something was made. The writer is not asking his readers to abandon the foundation but to build upon it. A foundation is precious, but a house is more than a foundation, and a believer who never moves beyond the basics has never truly inhabited the faith.",
          "The six items the writer lists as the foundation form a kind of early Christian catechism: repentance from dead works, faith toward God, instruction about washings, the laying on of hands, the resurrection of the dead, and eternal judgment. These are the ABCs of the faith, the spiritual alphabet that every believer must learn. They cover conversion, ritual, ordination or commissioning, and the last things. They are the doorway into Christian understanding, not the whole house.",
          "Notice that the writer says &ldquo;and this we will do if God permits&rdquo; (verse 3). Even the move toward maturity is held under the sovereignty of God. Growth is a gift as well as a duty. The believer is responsible to press on, yet the very capacity to press on depends upon the permission and provision of God. This gentle qualification keeps the call to maturity from collapsing into mere self-improvement; it is a divinely enabled progress.",
          "The danger the writer addresses is the danger of spiritual arrest, of a faith that stops growing and so begins to wither. To remain perpetually at the foundation, repeatedly relaying the same first principles, is a symptom of dullness. Maturity is not optional decoration for the advanced; it is the intended trajectory of every Christian life. The seed that does not grow is not safe; it is in danger of being lost.",
        ],
      },
      {
        heading: "The Severe Warning Against Apostasy",
        reference: "Hebrews 6:4&ndash;6",
        paragraphs: [
          "The second theme is the most sobering: the warning that for those who have once been enlightened and then have fallen away it is impossible to restore them again to repentance. The description piles up rich experiences: enlightenment, tasting the heavenly gift, sharing in the Holy Spirit, tasting the goodness of the word of God and the powers of the age to come. These are not the words used of casual onlookers; they describe people who have come remarkably close to the realities of the gospel.",
          "The reason given for the impossibility is striking: such people are crucifying once again the Son of God to their own harm and holding him up to contempt. Apostasy, in this picture, is not a neutral departure but an active repudiation. It is to side with those who nailed Jesus to the cross, to declare by one&rsquo;s defection that he was rightly rejected. To turn away after such knowledge is to treat the Son of God with public scorn, and there is no further sacrifice or fresh foundation that can reach a heart so set.",
          "Throughout the centuries believers have asked who exactly is in view here. Are these genuine Christians who lose their salvation? Are they those who came near but were never truly saved? Is this a hypothetical case meant to warn rather than to describe an actual possibility? The chapter itself does not pause to answer these systematic questions; it sounds the alarm and moves on. The various interpretive views, examined fairly in the verse by verse section, all wrestle honestly with the terrifying realism of these words.",
          "Whatever conclusion one reaches about the precise theological mechanics, the pastoral function of the warning is unmistakable. It is meant to keep the hearer from ever testing the edge. A cliff with a real drop is more effective at keeping travelers safe than a painted one. The writer does not want his readers analyzing the warning from a safe distance; he wants them to feel its force and to press on toward Christ with renewed earnestness, never drifting toward the precipice.",
        ],
      },
      {
        heading: "The Fruitfulness of Genuine Faith",
        reference: "Hebrews 6:7&ndash;8",
        paragraphs: [
          "The third theme is given through the parable of the two fields. Land that drinks in the rain that often falls upon it and bears a useful crop receives a blessing from God. The same land, receiving the same rain, may instead bear thorns and thistles, in which case it is worthless, near to being cursed, and its end is to be burned. The image is drawn from the everyday world of the farmer, yet it carries the weight of eternal realities.",
          "The decisive point of the analogy is that the rain is the same in both cases. Both fields receive the gracious gift of heaven&rsquo;s water. The difference lies entirely in what each brings forth. So it is with those who hear the gospel and share in the privileges of the believing community. The privileges, the teaching, the fellowship, the experiences of grace fall like rain on every member alike. The test of the soil is the harvest.",
          "This agricultural picture interprets the warning that precedes it. The genuineness of a profession of faith is shown not by the intensity of past experiences but by the present and continuing fruit. Thorns and thistles are not merely an absence of crop; they are a contrary growth, a productivity that runs against the purpose of the field. A life that, having received so much grace, produces only the works of the flesh has shown what kind of ground it always was.",
          "Yet the picture also contains hope, for the blessed field is simply the one that bears a useful crop. The writer is not demanding spectacular yields but genuine fruit, the ordinary harvest of a life truly watered by grace. The reader is invited to examine the soil of his own heart, not in despair but in honest hope, asking what is actually growing there in response to all the rain that has fallen.",
        ],
      },
      {
        heading: "God's Faithfulness and the Anchor of Hope",
        reference: "Hebrews 6:13&ndash;20",
        paragraphs: [
          "The final theme is the most consoling: the unbreakable faithfulness of God and the hope that anchors the soul. When God made his promise to Abraham, he confirmed it with an oath, swearing by himself because he had no one greater by whom to swear. Thus there stand two unchangeable things, the promise and the oath, in both of which it is impossible for God to lie. On these two pillars the believer&rsquo;s confidence rests.",
          "The image of the anchor is unforgettable. Hope is called a sure and steadfast anchor of the soul. An anchor holds a ship steady amid the surge of wind and wave, fastened not to anything on the tossing surface but to something firm below. So the Christian&rsquo;s hope is fastened not to the shifting circumstances of this life but to a fixed point above and beyond the storm, in the very presence of God.",
          "Most wonderful of all, this anchor enters into the inner place behind the curtain. In the old tabernacle the curtain veiled the holy of holies, the place of God&rsquo;s presence, into which only the high priest could pass and that only once a year. The writer says the believer&rsquo;s hope reaches into that very place, because Jesus has gone there as a forerunner on our behalf. The anchor of the soul is fastened to the throne of God himself.",
          "And so the theme of hope flows directly into the theme of Christ&rsquo;s priesthood. Jesus has become a high priest forever after the order of Melchizedek. With that name the writer reaches forward to the great argument of chapters 7 through 10, in which the superiority of Christ&rsquo;s priesthood is unfolded. The anchor is not an impersonal force; it is a Person who has gone ahead, who holds the line fast, and who will draw his people safely through.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro: "A closer walk through Hebrews 6 rewards careful attention to its movement from exhortation to warning to assurance. Here we trace the chapter in its natural sections, lingering especially over the famous warning passage and the various ways faithful interpreters have understood it, before resting in the great closing meditation on God's oath and the anchor of the soul.",
    blocks: [
      {
        heading: "Verses 1 to 3: Leaving the Foundation to Build",
        reference: "Hebrews 6:1&ndash;3",
        paragraphs: [
          "&ldquo;Therefore let us leave the elementary doctrine of Christ and go on to maturity, not laying again a foundation of repentance from dead works and of faith toward God.&rdquo; The therefore links back to the rebuke of chapter 5. The remedy for dullness is not to camp at the basics but to advance. The word leave does not mean to abandon or despise but to move on from, the way a builder leaves the laying of the foundation behind in order to raise the walls.",
          "The foundation comprises six elements arranged in three pairs. Repentance from dead works and faith toward God describe conversion itself, the turning from and the turning to. Instruction about washings and the laying on of hands describe the ritual and ordering of the believing community. The resurrection of the dead and eternal judgment describe the last things, the great realities that await all. Together they form a compact summary of the first principles every believer must know.",
          "The phrase dead works appears again later in Hebrews (9:14), where the blood of Christ cleanses the conscience from dead works to serve the living God. Dead works are deeds that have no life in them, religious or moral activity that cannot give life because it is severed from God. Repentance from such works is the first step of the gospel, and the writer assumes his readers already stand upon it.",
          "&ldquo;And this we will do if God permits&rdquo; (verse 3). With a single phrase the writer places the whole enterprise of growth under the will of God. Progress in the faith is both a human resolve and a divine gift. The believer presses on, yet does so in dependence, knowing that even the desire and the power to advance come from the God who works in his people both to will and to do.",
        ],
      },
      {
        heading: "Verses 4 to 6: The Impossibility of Renewal",
        reference: "Hebrews 6:4&ndash;6",
        paragraphs: [
          "&ldquo;For it is impossible, in the case of those who have once been enlightened, who have tasted the heavenly gift, and have shared in the Holy Spirit, and have tasted the goodness of the word of God and the powers of the age to come, and then have fallen away, to restore them again to repentance.&rdquo; The sentence is built to crescendo. Five participles describe the experience, one describes the fall, and then comes the dreadful verdict of impossibility.",
          "The phrases describing the experience are remarkably full. To be enlightened is to have the truth shine upon the mind. To taste the heavenly gift and the goodness of the word is to have known something of their sweetness. To share in the Holy Spirit and to taste the powers of the age to come is to have stood within the very sphere of the Spirit&rsquo;s working. The cumulative effect is to describe people who have come about as close to salvation as words can express.",
          "The reason renewal is impossible is then given: &ldquo;since they are crucifying once again the Son of God to their own harm and holding him up to contempt.&rdquo; The present tense matters; it is while they persist in this repudiation that restoration is impossible. To fall away after such knowledge is to join the crowd that mocked the crucified Christ, to declare him worthy of the cross. There remains no other sacrifice and no fresh starting point for one who has trampled the only one there is.",
          "It is worth noting what the verse does not say. It does not say that such people, if they should repent, would be refused; it describes those who while crucifying the Son of God afresh cannot be renewed to repentance, for they have set themselves against the very thing repentance requires. The impossibility lies not in any limit to God&rsquo;s mercy but in the impossibility of restoring to a fresh foundation those who deliberately reject the only foundation there is.",
        ],
      },
      {
        heading: "The Major Interpretive Views of the Warning",
        reference: "Hebrews 6:4&ndash;6",
        paragraphs: [
          "Because these verses are among the most debated in the whole Bible, it is worth setting out fairly the main ways faithful readers have understood them. The first view is the hypothetical reading. On this view the writer describes a case that, given the full security of the believer, cannot actually occur, and presents it precisely to underline the seriousness of the danger. The warning is real in its force even if the falling away of a true believer is, in the end, impossible.",
          "The second view, often associated with the Reformed tradition, holds that true believers cannot finally fall away, but that the warning itself is one of the very means God uses to keep them from falling. On this reading the warnings are not idle; they are the appointed instruments by which the elect are preserved. The runner is kept on the path partly by the real fear of the cliff. The certainty of perseverance and the necessity of the warning belong together.",
          "The third view, common among many evangelical interpreters, holds that those described in verses 4 to 6 were never truly regenerate. They had come near, tasted, been enlightened, and shared in the community&rsquo;s privileges, yet had never been born again. Their falling away revealed what they always were. This reading appeals to the parable of the soils and to John&rsquo;s words that those who went out from us were never truly of us.",
          "A fourth view, held by some, sees the passage as describing genuine believers who can indeed fall away and lose what they had. On this reading the warning is to be taken at full face value, and the privileges described are the genuine privileges of real Christians. Yet another nuance, suggested by some, takes the loss in view to be a loss of rewards or of usefulness rather than of salvation itself. Each of these readings wrestles seriously with the text, and humble believers have held each. What unites them all is the recognition that the warning is meant to be heeded, not analyzed at a safe distance.",
        ],
      },
      {
        heading: "Verses 7 to 8: The Parable of the Two Fields",
        reference: "Hebrews 6:7&ndash;8",
        paragraphs: [
          "&ldquo;For land that has drunk the rain that often falls on it, and produces a crop useful to those for whose sake it is cultivated, receives a blessing from God.&rdquo; The picture is of a field repeatedly watered by heaven. The rain falls often, generously, without partiality. Good ground responds to that grace with a useful crop, and so it is blessed. The blessing is the natural fruit of a soil that received the rain rightly.",
          "&ldquo;But if it bears thorns and thistles, it is worthless and near to being cursed, and its end is to be burned.&rdquo; The very same field, the very same rain, but a different result. Thorns and thistles are the marks of the ground cursed in Eden, the produce of soil that resists its purpose. Such land is near to being cursed, and its destiny is fire. The contrast could hardly be sharper or more solemn.",
          "The parable interprets the warning that precedes it. The rain stands for all the privileges and graces showered upon those within the believing community: the teaching, the experiences, the fellowship, the powers of the age to come. These fall upon every hearer alike. The decisive matter is the response of the soil. Genuine faith drinks in the rain and bears fruit; false profession, having received the same rain, produces only the thorns of a heart that was never truly changed.",
          "Notice the mercy hidden in the language. The worthless field is only near to being cursed, not yet cursed. The warning still holds open a door. The picture is meant to drive the reader to examine the soil of his own heart while there is yet time, to drink in the rain of grace, and to bring forth the useful crop that proves the ground was good.",
        ],
      },
      {
        heading: "Verses 9 to 12: A Word of Confidence",
        reference: "Hebrews 6:9&ndash;12",
        paragraphs: [
          "Having sounded the alarm, the writer turns and addresses his readers with great tenderness: &ldquo;Though we speak in this way, yet in your case, beloved, we feel sure of better things, things that belong to salvation.&rdquo; This is the only place in the letter where he calls them beloved, and the word lands precisely at the moment of greatest reassurance. The warning was severe, but it was the severity of love, and now love speaks its confidence.",
          "His confidence rests on solid ground: &ldquo;For God is not unjust so as to overlook your work and the love that you have shown for his name in serving the saints, as you still do&rdquo; (verse 10). The writer points to the visible fruit of their faith, their service to fellow believers, as evidence of the better things. He grounds his assurance not in their emotions but in the justice of God, who does not forget the love shown for his name.",
          "&ldquo;And we desire each one of you to show the same earnestness to have the full assurance of hope until the end&rdquo; (verse 11). The writer longs for them to keep on, to bring the same diligence they have shown to the very finish line. Assurance is not a single experience but a settled confidence that endures, and it is nourished by perseverance. He wants no one to coast, no one to grow careless near the end of the race.",
          "&ldquo;So that you may not be sluggish, but imitators of those who through faith and patience inherit the promises&rdquo; (verse 12). The opposite of the dullness of chapter 5 is the lively imitation of the faithful. The promises are inherited through faith and patience, the two virtues that hold fast when the road is long. The writer points them to a great cloud of examples, the first of whom he is about to name: Abraham.",
        ],
      },
      {
        heading: "Verses 13 to 20: The Oath of God and the Anchor of the Soul",
        reference: "Hebrews 6:13&ndash;20",
        paragraphs: [
          "&ldquo;For when God made a promise to Abraham, since he had no one greater by whom to swear, he swore by himself&rdquo; (verses 13 to 14). The writer reaches back to the moment after Abraham had offered Isaac, when God confirmed his promise with an oath. God, who needs no one to guarantee his word, condescended to swear, binding himself in the strongest terms human language knows. Abraham, having patiently waited, obtained the promise.",
          "&ldquo;So God guaranteed it with an oath, so that by two unchangeable things, in which it is impossible for God to lie, we who have fled for refuge might have strong encouragement to hold fast to the hope set before us&rdquo; (verses 17 to 18). Here are the two unchangeable things: the promise and the oath. God&rsquo;s bare word would have been enough, for he cannot lie, yet he added his oath to give double assurance. Those who have fled for refuge, like the manslayer fleeing to the city of refuge, find here strong encouragement to hold fast.",
          "&ldquo;We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain&rdquo; (verse 19). The metaphor shifts from the legal world of oaths to the maritime world of anchors and then to the sacred world of the tabernacle. Hope is the anchor, and it does not catch on the sea floor but reaches up and in, behind the curtain, into the holy of holies where God dwells. No storm on the surface can move what is fastened there.",
          "&ldquo;Where Jesus has gone as a forerunner on our behalf, having become a high priest forever after the order of Melchizedek&rdquo; (verse 20). The Greek word for forerunner, prodromos, describes the one who runs ahead to prepare the way. Jesus has entered the inner sanctuary not merely as the high priest who goes in alone but as a forerunner, the pledge that his people will follow. And he is high priest forever after the order of Melchizedek, a phrase that opens the door into the great argument of the chapters to come.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro: "Hebrews 6 is not a museum piece for theological debate but a living word for the present life of faith. Its call to maturity, its solemn warning, its picture of fruitful soil, and its anchor of hope all press upon the reader with searching and sustaining force. Here we ask how this rich chapter shapes the way we live, persevere, and hope today.",
    blocks: [
      {
        heading: "Press On Rather Than Settle",
        reference: "Hebrews 6:1&ndash;3, 11&ndash;12",
        paragraphs: [
          "The first application of Hebrews 6 is a summons out of spiritual complacency. Many believers reach a plateau and quietly settle there, content to rehearse the basics they learned long ago without ever building upon them. The writer&rsquo;s word to such is to press on toward maturity, to leave the perpetual relaying of the foundation and to rise into the fuller structure of Christian understanding and obedience.",
          "Maturity is not the same as the accumulation of information. It is the deepening of faith, the strengthening of patience, the growing skill in the word of righteousness that comes only with practice. The writer pairs faith and patience as the means by which the promises are inherited. To press on is to keep believing and to keep waiting, especially when the road is long and the destination is not yet in sight.",
          "The danger of settling is real because faith that stops growing begins to wither. The seed that does not push upward toward the light is not safe; it is in peril. The same energy that once carried a believer through conversion must carry him through the whole journey, with the same earnestness shown to the very end. There is no honorable retirement from the pursuit of Christ.",
          "Practically, pressing on means deliberately seeking the deeper things: searching the Scriptures beyond the familiar verses, taking up the disciplines that stretch the soul, accepting the responsibilities that mature the believer, and refusing the comfortable stagnation that masquerades as contentment. The reader is invited to ask honestly where he has settled, and to take the next step forward that God permits.",
        ],
      },
      {
        heading: "Take the Warning to Heart Without Despair",
        reference: "Hebrews 6:4&ndash;8",
        paragraphs: [
          "The warning passage is meant to be applied, not merely debated. Its first and proper use is to provoke a holy seriousness about the danger of drifting away from Christ. The reader is not invited to use these verses to measure the standing of others or to torment himself with endless self-examination, but to feel the weight of the cliff and so to keep far from its edge by pressing toward Christ.",
          "There is a wrong way to apply the warning, which is to fall into paralyzing fear and constant doubt of one&rsquo;s salvation. The very next paragraph (verses 9 to 12) shows that this is not the writer&rsquo;s intent. He follows the warning with warm assurance, persuaded of better things in his readers because of the visible fruit of their love. The warning and the assurance are meant to be held together; the warning keeps us watchful, the assurance keeps us from despair.",
          "The right way to apply the warning is to let it drive renewed earnestness. The same writer who warns of the impossibility of renewal also urges full assurance of hope until the end. The proper response to the danger is not to question whether one has fallen but to press more firmly toward the One who keeps his people from falling. Fear that drives us to Christ is healthy; fear that drives us from him is not.",
          "The parable of the two fields gives a concrete test: what is growing in the soil of your life? Not the intensity of past experiences but the present fruit reveals the nature of the ground. The reader is invited to examine, with honest hope, what the rain of grace is producing in him, and to drink that rain more deeply so that the useful crop may abound.",
        ],
      },
      {
        heading: "Rest in the God Who Cannot Lie",
        reference: "Hebrews 6:13&ndash;18",
        paragraphs: [
          "Against the storms of doubt the chapter sets the two unchangeable things in which it is impossible for God to lie: his promise and his oath. The application here is profoundly consoling. When feelings rise and fall, when circumstances darken, when the heart accuses, the believer may rest not on the shifting evidence of his own emotions but on the bare faithfulness of a God who has bound himself by word and oath.",
          "God did not need to swear. His word alone is utterly reliable, for he cannot lie. Yet in his kindness he added his oath, condescending to our weakness, giving double assurance so that those who have fled to him for refuge might have strong encouragement. The application is to take that encouragement, to let the certainty of God&rsquo;s character outweigh the uncertainty of our feelings.",
          "Abraham&rsquo;s example shows how this works in practice. He patiently waited, and having waited, he obtained the promise. Faith that rests on God&rsquo;s oath is a patient faith, willing to wait through the long delay, confident that the One who promised is faithful. The believer today inherits the promises through the same faith and patience that marked the friend of God.",
          "To apply this is to make God&rsquo;s unchangeable word, rather than our changeable selves, the ground of our assurance. When the soul is tossed, the answer is not to look inward at the storm but outward and upward to the God who cannot lie. He has fled to refuge, and the refuge holds. That is where strong encouragement is found.",
        ],
      },
      {
        heading: "Hold Fast to the Anchor Behind the Curtain",
        reference: "Hebrews 6:19&ndash;20",
        paragraphs: [
          "The crowning application of the chapter is to take hold of hope as the anchor of the soul. In every storm of suffering, loss, fear, and uncertainty, the believer has an anchor that is sure and steadfast, fastened not to anything on the heaving surface of this life but to the very throne of God behind the curtain. The application is to let that anchor hold us when everything else is shaking.",
          "What makes this anchor secure is that Jesus has gone ahead as a forerunner on our behalf. He has already entered the inner place where our hope is fastened. This changes the way we face death itself, for the One who has gone before has promised to draw us after. We do not sail toward an unknown harbor; we are anchored to a place where our forerunner already stands.",
          "Because Jesus is high priest forever after the order of Melchizedek, the anchor will never be raised. His priesthood does not lapse; it does not pass to a successor; it holds forever. The hope that depends on him therefore cannot fail, for it depends on a Person who lives always to intercede. The reader is invited to fasten his whole confidence to this unfailing High Priest.",
          "Practically, holding fast to the anchor means returning again and again, in prayer and in trust, to the finished work and present ministry of Jesus behind the curtain. When the waves rise, the believer does not need a stronger grip of his own; he needs to remember that the anchor is already set in unmovable ground and that the One who set it there will bring him safely home. That is the steadfast hope to which Hebrews 6 calls every weary traveler.",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "MMOahsBfASA", title: "Hebrews 6 - Pressing On to Maturity (Bible Study)" },
  { videoId: "1fNWTZZwgbs", title: "BibleProject - Book of Hebrews Overview" },
  { videoId: "GWE3PThaApk", title: "The Warning Passage of Hebrews 6 Explained" },
  { videoId: "AqU_qWqJ3sM", title: "The Anchor of the Soul - Hope in Hebrews 6" },
];

export default function HebrewsSixGuidePage() {
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
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: "Hebrews 6 &mdash; Pressing On to Maturity and the Anchor of the Soul" }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain, where Jesus has gone as a forerunner on our behalf.&rdquo; &mdash; Hebrews 6:19&ndash;20" }} />
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
              <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.3rem" }}>Reflection Questions</h3>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem", color: TEXT }}>Video Teaching on Hebrews 6</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Sure and Steadfast Anchor</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Hebrews 6 moves from a stern call to maturity, through one of Scripture&rsquo;s most solemn warnings, to a soaring word of comfort. Whatever storm is breaking over your life, the gospel sets before you an anchor that is sure and steadfast, fastened not to the heaving surface of your circumstances but to the throne of God behind the curtain &mdash; where Jesus has gone ahead as your forerunner and lives forever as your great High Priest after the order of Melchizedek." }} />
        </div>
      </main>
    </div>
  );
}
