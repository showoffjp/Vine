"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const AMBER = "#F59E0B";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_joyofsalvation_entries";

interface JOSEntry {
  id: string;
  date: string;
  joySource: string;
  whatDimmedIt: string;
  restored: string;
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
    badge: "Galatians 5:22",
    title: "Joy as Fruit of the Spirit — Grown, Not Manufactured",
    paragraphs: [
      "The second fruit listed in Galatians 5:22 is chara (χαρά) — joy. Paul places it immediately after love, suggesting that joy is nearly identical in root to love: it is what love feels like from the inside when it knows it is received. Chara in the New Testament is almost always connected to a cause — the angel announces &ldquo;great joy&rdquo; at the birth of Christ (Luke 2:10), the disciples rejoiced when they saw the risen Lord (John 20:20), Paul writes from a prison cell in Rome with the word &ldquo;rejoice&rdquo; ringing through every paragraph of Philippians. Christian joy is not a mood but a response — the emotional register of someone who knows what has been done for them.",
      "The crucial insight is that joy is listed as fruit, not as discipline. Fruit grows from the vine; it is not nailed to the branch. This means the pursuit of joy is not primarily a program of emotional self-management. It is a question of abiding — remaining close enough to Christ that his life flows through you and produces gladness the way a vine produces grapes. The Puritans sometimes called this &ldquo;the joy of the Lord,&rdquo; a genitive of source: a joy that belongs to God first and overflows into those who are in him.",
      "That said, the New Testament never treats joy as passive. &ldquo;Rejoice in the Lord always,&rdquo; Paul commands (Philippians 4:4). The imperative assumes that joy is something you can direct your will toward — not by manufacturing a feeling, but by choosing repeatedly to attend to the grounds of your gladness. Joy is cultivated by deliberate remembrance, by meditation on what is true, by thanksgiving. The fruit grows wild; the gardener still prunes and waters.",
    ],
    callout: {
      label: "The word",
      text: "Chara (χαρά): joy, gladness — in the New Testament almost always connected to a specific cause: the gospel, the presence of Christ, the hope of glory. Distinguished from mere cheerfulness by its theological object.",
    },
  },
  {
    badge: "Nehemiah 8:10",
    title: "&ldquo;The Joy of the Lord Is Your Strength&rdquo;",
    paragraphs: [
      "When Ezra read the law to the returned exiles and the people wept at what they heard, Nehemiah, Ezra, and the Levites said a strange thing: &ldquo;Do not mourn or weep... Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength&rdquo; (Nehemiah 8:9-10). The context is important: the weeping was real and appropriate. The people were grieving the distance between God's law and their lives. The leaders do not dismiss the grief; they redirect it toward a feast and call that feast the source of their endurance.",
      "The phrase &ldquo;the joy of the LORD&rdquo; is almost certainly a genitive of source — joy that flows from the Lord, or joy that belongs to the Lord and is shared with his people. To say &ldquo;this is your strength&rdquo; is to make a claim about the mechanism of spiritual endurance: people who are sustained by the delight of knowing God have a resilience that willpower, duty, and religious obligation cannot match. Duty tires; delight refreshes. The feast in Nehemiah 8 is not a distraction from seriousness — it is the source of the strength that serious faithfulness requires.",
      "Andrew Murray saw in this verse the secret of continuous service: the person who serves God out of joy is inexhaustible in ways the person who serves out of mere obligation never can be. Joy is not the reward for obedience; it is the fuel for it.",
    ],
  },
  {
    badge: "James 1:2-4 / Romans 5:3-5",
    title: "Joy in Suffering — The Counterintuitive Gift",
    paragraphs: [
      "James opens his letter with a command that has perplexed readers for two millennia: &ldquo;Count it all joy, my brothers, when you meet trials of various kinds&rdquo; (James 1:2). He does not say &ldquo;be happy about the trial&rdquo; or &ldquo;pretend it does not hurt.&rdquo; He says count it joy — a deliberate reckoning, like a bookkeeper assigning the right value to an asset. The grounds are theological: you know that the testing of your faith produces steadfastness, and steadfastness produces maturity. The joy is not in the pain itself but in what the pain is producing.",
      "Paul makes the same argument in Romans 5:3-5 with even greater boldness: &ldquo;We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit.&rdquo; Notice the chain: suffering is not the end of the chain but the beginning. It feeds into endurance, which generates character, which opens into hope, which is sealed by the Spirit's presence. Joy in suffering is not stoic resignation; it is the confidence that you are inside a process God is supervising toward glory.",
      "Corrie ten Boom, C.S. Lewis, and virtually every saint who has written from inside severe suffering confirm the same: the joy available in tribulation is not the kind that removes pain but the kind that transcends it — a gladness grounded in what is unassailable even when everything assailable is gone.",
    ],
    callout: {
      label: "Key distinction",
      text: "Joy in suffering is not the same as happiness about suffering. It is the settled confidence that suffering is not outside God's governance, and that what he is producing through it is worth more than what it costs.",
    },
  },
  {
    badge: "Romans 5:1-2",
    title: "Justification and Joy — Peace as the Foundation of Gladness",
    paragraphs: [
      "Romans 5 begins with the sentence that grounds all Christian joy: &ldquo;Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God.&rdquo; Paul moves in two verses from justification to peace to standing in grace to rejoicing in hope. The sequence is not incidental; each term is load-bearing.",
      "Justification ends the war. The person who was under God's condemnation is now declared righteous — not because of anything she has done but because Christ's righteousness has been credited to her account. This is the foundation of all other joy: the fundamental anxiety, the fear that God is against you, is resolved. You are at peace with the one whose opinion matters infinitely. From that peace flows the ability to stand — to occupy the present moment in grace without defensive posturing or performance anxiety. And from standing in grace flows the ability to rejoice in what is coming: the glory of God, which is not merely a future reward but the full unveiling of the beauty that faith already glimpses.",
      "This is why Martin Luther called justification by faith the article by which the church stands or falls — not merely as a theological proposition but as the existential foundation of Christian joy. Uncertainty about one's standing with God is the deepest damper on gladness. Certainty of grace is its deepest spring.",
    ],
  },
  {
    badge: "Philippians",
    title: "The Epistle of Joy — Paul in Prison",
    paragraphs: [
      "Philippians is the most joy-saturated letter in the New Testament, and it was written from a Roman prison cell. The words &ldquo;joy&rdquo; and &ldquo;rejoice&rdquo; appear sixteen times in four chapters. Paul says he has learned, &ldquo;in whatever situation I am, to be content&rdquo; (4:11) — and uses a word, autarkes, that described Stoic self-sufficiency, only to immediately redefine it: &ldquo;I can do all things through him who strengthens me&rdquo; (4:13). The contentment is not self-generated; it is Christ-supplied.",
      "The letter's climax is a command: &ldquo;Rejoice in the Lord always; again I will say, rejoice. Let your reasonableness be known to everyone. The Lord is at hand; do not be anxious about anything&rdquo; (4:4-6). Paul places the command to rejoice directly before the command to avoid anxiety and directly after the assertion that &ldquo;the Lord is at hand.&rdquo; The connection is causal: you can rejoice, and therefore you need not be anxious, because the Lord is near. Joy and anxiety are not simply emotional opposites; they are competing orientations toward reality. The person oriented toward God's nearness rejoices; the person oriented toward circumstances alone is anxious.",
      "Philippians also teaches joy in partnership: &ldquo;I rejoice in the Lord greatly that now at length you have revived your concern for me&rdquo; (4:10). Joy, for Paul, is partly constituted by community — the shared project, the mutual care, the church that holds together in the gospel. Private gladness is real, but the fullness of Christian joy is ecclesial: it is joy in the body.",
    ],
  },
  {
    badge: "Joy vs. Happiness",
    title: "The Distinction That Changes Everything",
    paragraphs: [
      "The most important distinction in a theology of joy is between joy and happiness. Happiness is a weather condition — it depends on circumstances, on how things are going, on whether the news is good or bad. It is real and welcome when it comes, but it is not within our control and it does not run deep. Joy, in the biblical sense, is something else: a orientation of the whole person toward God and his goodness that persists through circumstances because it is not derived from them.",
      "C.S. Lewis spent much of his early life pursuing what he called &ldquo;Joy&rdquo; — a quality of longing and piercing sweetness that visited him in unexpected moments and which he gradually recognized as a signpost toward God rather than a destination in itself. In Surprised by Joy he traces the way this pursuit eventually led him to Christian faith: the Joy he had chased was always pointing beyond itself to the one who is Joy's source. This is the paradox of Christian joy: it is found most reliably by those who have stopped pursuing it directly and begun pursuing God.",
      "Paul and Habakkuk arrive at the same place from different directions. Habakkuk declares: &ldquo;Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation&rdquo; (Hab 3:17-18). The yet is the hinge of joy — not because circumstances are good, but because God is.",
    ],
  },
  {
    badge: "Revelation 21 / 2 Cor 6:10",
    title: "Eschatological Joy and Sorrow Held Together",
    paragraphs: [
      "Christian joy is not a present achievement to be maintained but an eschatological reality to be anticipated. Revelation 21 unveils what the fullness of joy looks like at the end of all things: &ldquo;He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.&rdquo; The joy that faith receives now is a down payment — real money, but not the full inheritance. To live in hope of this is to find the sorrows of the present age relativized: they are real, but they are not final.",
      "Paul captures the tension beautifully in 2 Corinthians 6:10, describing the apostolic life as &ldquo;sorrowful, yet always rejoicing.&rdquo; The yet is not a denial of the sorrow; it is a simultaneous truth. The Christian life is not one in which joy has replaced grief, but one in which joy and grief coexist — the grief is real and the joy is real, and neither cancels the other. This is why shallow cheerfulness is not the same as Christian joy: joy does not require the absence of sorrow but the presence of hope.",
      "The Beatitudes (Matthew 5:3-12) show Jesus naming as &ldquo;blessed&rdquo; — makarios, the deeply happy, the flourishing — precisely those whom the world marks as losers: the poor in spirit, the mourners, the meek, the persecuted. The blessedness Jesus promises is not circumstantial but eschatological: theirs is the kingdom of heaven, they shall be comforted, they shall inherit the earth. Joy and the Beatitudes meet at the same point: the gladness of those who have nothing the world counts as joy, but who possess everything that lasts.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily Joy Examination",
    summary:
      "A brief evening practice: noticing what kindled joy today, what extinguished it, and where it was restored. Joy tracked becomes joy grown.",
    steps: [
      "Each evening, before the day closes, ask the three questions: What fueled my joy today? What dimmed it? Where was it restored? Even two minutes of honest attention to these questions trains the soul to notice joy's movements.",
      "Record your answers in the Journal tab on this page. Over weeks, patterns will appear — what consistently kindles gladness (often: connection, creation, Scripture, beauty, service) and what consistently dampens it (often: comparison, anxiety about the future, grievance nursed).",
      "Do not treat &ldquo;what dimmed it&rdquo; as purely confessional. Some joy-dampeners are sins to repent of; others are pressures to bring to God in prayer; others are simply the costs of living in a fallen world. Naming them accurately is part of the practice.",
      "Close with thanksgiving for one specific thing. Gratitude and joy are adjacent: the person who has trained the habit of noticing goodness will find joy increasingly native rather than foreign.",
    ],
    anchor:
      "Philippians 4:4 — Rejoice in the Lord always; again I will say, rejoice.",
  },
  {
    number: "02",
    title: "Meditating on the Grounds of Your Joy",
    summary:
      "Joy sustained by feelings alone collapses when feelings are absent. Joy sustained by truth is different. This practice builds the theological foundations that support gladness on dark days.",
    steps: [
      "Choose one ground of joy per week from this list: justification (you are declared righteous); adoption (you are a child of God); presence (the Spirit indwells you); promise (the glory ahead is real). Sit with one at a time rather than rushing through all four.",
      "Meditate on it in the morning using the ancient pattern: read a passage, repeat a phrase slowly, pray it back to God. Romans 8, Philippians 3-4, and Psalm 16 are dense with material for this.",
      "When difficult emotions arrive, test them against what you know to be true. Not to suppress feeling but to interrogate it: &ldquo;Is the thing that is taking my joy also taking my justification? My adoption? The indwelling Spirit?&rdquo; Usually the answer is no — and the no is itself a door back to gladness.",
      "Keep a short list of the truths that consistently restore your joy. These become your spiritual first aid: the sentences you return to when circumstances have stripped everything else.",
    ],
    anchor:
      "Nehemiah 8:10 — Do not be grieved, for the joy of the LORD is your strength.",
  },
  {
    number: "03",
    title: "Seeking Joy in the Right Places — Desiring God",
    summary:
      "John Piper's Christian Hedonism inverts the usual warning: the problem is not that we desire too much happiness but that we are too easily satisfied with the wrong kind. This practice trains desire toward its proper object.",
    steps: [
      "Read Philippians 3:7-11 slowly once a day for a week, noting what Paul counts as gain and what he counts as loss. Ask honestly: where do I actually seek my deepest satisfactions? Work, approval, comfort, achievement, relationships? Are any of these things in the &ldquo;loss&rdquo; column when compared to knowing Christ?",
      "Practice one act of holy dissatisfaction per week: voluntarily set aside a lesser pleasure to make room for a greater one. Fast from social media to feast on Scripture. Cancel something recreational to spend an evening in prayer. The goal is not asceticism but training the palate toward richer food.",
      "Pursue worship as the direct route to joy. Psalm 16:11 says, &ldquo;In your presence there is fullness of joy; at your right hand are pleasures forevermore.&rdquo; The practice is as simple as it is demanding: put yourself in God's presence through prayer, Scripture, and gathered worship, and let joy be what it is — a consequence rather than a target.",
      "Record what you find. Does the joy available in God compare to lesser joys in depth? In duration? In the morning-after feeling? Honest answers here become persuasive arguments for a reordered life.",
    ],
    anchor:
      "Psalm 16:11 — In your presence there is fullness of joy; at your right hand are pleasures forevermore.",
  },
  {
    number: "04",
    title: "Joy in Community — Sharing the Gladness",
    summary:
      "Philippians shows that Christian joy is partly constituted by community. This practice cultivates the shared dimension of gladness — the joy that multiplies when it is given away.",
    steps: [
      "Once a week, speak joy deliberately to another person: not generic pleasantry but specific witness — &ldquo;I was genuinely glad because of this.&rdquo; Tell a friend what fueled your joy this week. Let them know when their presence or faithfulness contributed to your gladness.",
      "Practice rejoicing with those who rejoice (Romans 12:15) — the harder half of the command. Choosing to celebrate someone else's good news when your own situation is difficult is one of the most difficult and most Christlike acts available to us. It is also one of the most joy-generating: sharing in another's gladness doubles it.",
      "Bring your sorrow into community as well. The &ldquo;sorrowful, yet always rejoicing&rdquo; of 2 Corinthians 6 is not a solo act. Find one person you trust enough to be honestly sad with — and let them carry the burden with you. Grief shared is lighter; joy that emerges from shared grief is deeper than any other kind.",
      "Return to the table. Common meals, shared liturgy, the Lord&rsquo;s Supper — Paul&rsquo;s joy in Philippians is inseparable from his joy in the community there. Find the rhythms of fellowship that most reliably produce gladness, and protect them.",
    ],
    anchor:
      "Romans 12:15 — Rejoice with those who rejoice, weep with those who weep.",
  },
  {
    number: "05",
    title: "Counting It All Joy — The Suffering Reframe",
    summary:
      "James 1:2-4 gives a specific practice for suffering: count it joy. Not feel it as joy, but count it — a deliberate theological reckoning. This practice makes that reckoning concrete.",
    steps: [
      "When a difficulty arrives, resist the immediate narrative of victimhood or despair. Instead, ask the James question: What is this testing producing? Endurance? Patience? A dependence on God you had been avoiding? These are not consolations — they are the actual yield of the trial.",
      "Write the James chain: suffering produces endurance (what is the endurance I am being asked to grow?); endurance produces character (what character trait is God targeting here?); character produces hope (what promise of God is this pointing me toward?). The exercise does not remove pain, but it gives it a direction.",
      "Recall the saints who went before you in suffering. Read Corrie ten Boom, or the missionary diary of Jim Elliot, or Paul&rsquo;s catalog of his own suffering in 2 Corinthians 11. You are not in unprecedented territory. The cloud of witnesses who found joy inside tribulation is vast.",
      "Pray specifically for &ldquo;the joy of the LORD as your strength&rdquo; — not joy in the abstract but strength for this day, this difficulty, this season. Nehemiah 8:10 is a prayer as much as a declaration. Bring it as a request.",
    ],
    anchor:
      "James 1:2-4 — Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.",
  },
  {
    number: "06",
    title: "The Eschatological Imagination — Living Forward",
    summary:
      "Christian joy is partly a function of what you believe about the future. This practice cultivates the eschatological imagination — the capacity to feel the weight of glory that is coming.",
    steps: [
      "Read Revelation 21:1-5 slowly twice a week — not as prophecy to decode but as a picture to inhabit. Let it become a place you return to: the new creation, the city of God, every tear wiped away, death abolished. The more vivid this becomes to the imagination, the more it shapes present affect.",
      "Practice the &ldquo;therefore&rdquo; of Romans 8:18: &ldquo;I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.&rdquo; When circumstances are difficult, make the comparison explicit: what I am enduring is real and hard. What is coming is incomparably better. The suffering is temporary; the joy is eternal.",
      "Cultivate anticipation in small things as a rehearsal for great hope. The pleasure of a meal, the joy of reunion, the experience of beauty in music or creation — receive these as previews, not substitutes. Lewis called them &ldquo;patches of Godlight&rdquo;: moments where the veil thins and something of the eternal joy shows through.",
      "Let eschatological joy spill into ethics. The person who believes in the joy of the coming kingdom has a peculiar freedom: she does not need to grasp at happiness now because she knows it is secured. This liberates her to give generously, forgive freely, and serve at cost — the behavioral signature of someone whose joy is not threatened by loss.",
    ],
    anchor:
      "Romans 8:18 — I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "Surprised by Joy — The Shape of My Early Life",
    quote:
      "Joy is not a substitute for sex; sex is very often a substitute for Joy. I sometimes wonder whether all pleasures are not substitutes for Joy.",
    bio: "C.S. Lewis spent decades in pursuit of what he called &ldquo;Joy&rdquo; — a stab of inconsolable longing that visited him in childhood and which he spent most of his adult life trying to recapture. In Surprised by Joy he traces how this pursuit, through Norse mythology, Romanticism, philosophy, and eventually Christianity, led him to recognize that Joy was not itself the destination but an arrow pointing toward God. His account is the great modern phenomenology of Christian joy: it is not a feeling to be manufactured or a state to be maintained but a desire to be directed toward its proper object. Lewis insists that the man who has found God has not lost Joy but has found its source — and the source makes everything else luminous.",
  },
  {
    name: "G.K. Chesterton",
    role: "Orthodoxy — The Secret of Cosmic Hilarity",
    quote:
      "Man is more himself, man is more manlike, when joy is the fundamental thing in him, and grief the superficial. Melancholy should be an innocent interlude, a tender and fugitive frame of mind; praise should be the permanent pulsation of the soul.",
    bio: "G.K. Chesterton argued that joy is the deepest thing in the universe and that Christianity is the only creed that has properly accounted for it. In Orthodoxy he makes the startling claim that the one thing Christ always hid during his earthly life was his mirth — that the Gospels show us his weeping and his sorrow but that the one secret he kept from his disciples was &ldquo;an undefeated gaiety.&rdquo; For Chesterton, Christian joy is not a mood but a metaphysical claim: the universe is fundamentally hospitable because it was made and redeemed by a God who is himself joyful. His writing crackles with this conviction — the paradoxes and reversals of the faith are not problems to be solved but jokes to be appreciated, signs of a divine comedian who loves the surprise ending.",
  },
  {
    name: "John Piper",
    role: "Desiring God — Christian Hedonism",
    quote:
      "God is most glorified in us when we are most satisfied in him. The pursuit of joy in God is not optional. It is our highest duty and our deepest freedom.",
    bio: "John Piper&rsquo;s &ldquo;Christian Hedonism&rdquo; — the thesis of Desiring God — begins from the Westminster Catechism&rsquo;s claim that the chief end of man is to glorify God and enjoy him forever, and argues that the &ldquo;and&rdquo; is actually an &ldquo;by&rdquo;: we glorify God by enjoying him. This reframes joy from a nice side effect of Christian living to its central obligation. The deepest problem is not that we want too much happiness but that we are too easily satisfied with pleasures that cannot bear the weight we put on them. Piper&rsquo;s pastoral urgency — forged in his own years of depression and doubt — gives the theology bite: Christian Hedonism is not a comfortable doctrine but a demanding one, requiring the continual reordering of desire toward the only joy that lasts.",
  },
  {
    name: "Corrie ten Boom",
    role: "The Hiding Place — Joy in the Valley of the Shadow",
    quote:
      "There is no pit so deep that God's love is not deeper still. You can never learn that Christ is all you need, until Christ is all you have.",
    bio: "Corrie ten Boom&rsquo;s account of Ravensbrueck concentration camp in The Hiding Place is one of the most sober and one of the most joyful books in Christian literature — and the combination is its authority. She describes her sister Betsie giving thanks even for the fleas in their barracks (because they kept the guards from entering and allowed the women to hold Bible studies), and the way that gratitude became the hinge of an inexplicable joy even inside horror. Corrie&rsquo;s witness is not a theory of joy but a testimony: she found, at the bottom of the worst circumstances imaginable, that the joy of the Lord was present and was strong. She spent her remaining decades testifying that no pit is too deep for God&rsquo;s love to reach — and that inside that love there is something that can only be called gladness.",
  },
  {
    name: "Richard Baxter",
    role: "The Saints&rsquo; Everlasting Rest — Heaven as the Ground of Present Joy",
    quote:
      "O, how it would transform the nature of the most tiresome duties, and make them, not only tolerable, but delightful, if we did but view them in the light of that approaching glory! Every duty would be then a step nearer to heaven.",
    bio: "Richard Baxter, the seventeenth-century Puritan pastor, wrote The Saints&rsquo; Everlasting Rest while seriously ill, expecting to die soon. The book is a sustained meditation on heaven as the source of present joy — not escapism but the spiritual discipline of &ldquo;heavenly-mindedness,&rdquo; the deliberate practice of contemplating the glory to come in order to sustain gladness in the present. Baxter argued that one reason Christians are joyless is that they have never learned to really think about heaven — they hold it as an abstract future fact rather than as a vivid and motivating reality. His method was precise: set aside daily time to meditate on specific scriptural descriptions of the final joy, and let that meditation flow back into the present like light through a window.",
  },
  {
    name: "Karl Barth",
    role: "Church Dogmatics — The Command to Be Joyful",
    quote:
      "The Christian life, in its totality, is joy. Sadness is not a Christian possibility. One cannot weep before God.",
    bio: "Karl Barth&rsquo;s treatment of joy in the Church Dogmatics is perhaps the most theologically rigorous account in modern theology. Barth grounds joy not in human emotion but in the objective reality of what God has done in Christ: the resurrection is the final word, and the final word is a good one. Therefore, for Barth, joy is not a feeling the Christian manages to sustain but a recognition of what is objectively true — the Christian who is sorrowful without hope is not being honest but is refusing the gospel. This does not mean Barth dismisses grief; he is clear-eyed about the weight of the present age. But he insists that grief has already been overruled, and to live as though it has not is a kind of unbelief. Joy, for Barth, is the epistemological posture appropriate to a world in which the resurrection has happened.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Philippians 4:4-7",
    text: "Rejoice in the Lord always; again I will say, rejoice. Let your reasonableness be known to everyone. The Lord is at hand; do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The command to rejoice is bracketed by two anchors: &ldquo;The Lord is at hand&rdquo; before it and the promise of God&rsquo;s peace after it. Joy is not commanded in a vacuum but in a context — the nearness of Christ, the invitation to prayer, the peace that guards the heart. Anxiety and joy are not simply opposites; they are competing responses to the same reality. The one who knows the Lord is near does not need to be anxious; the one not anxious can rejoice.",
  },
  {
    reference: "Nehemiah 8:10",
    text: "Then he said to them, Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength.",
    reflection:
      "The command not to grieve is not a command to suppress authentic emotion; it is a redirection toward feast after the grief has been felt. The joy of the LORD is described as strength — the particular kind of endurance that comes from delight rather than from willpower. The feast is not a distraction from serious faith; it is its fuel.",
  },
  {
    reference: "James 1:2-4",
    text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    reflection:
      "Count it joy — not feel it as joy. James gives a counting practice, a deliberate theological reckoning that assigns the right value to an unwelcome asset. The grounds are entirely forward-looking: what the trial is producing. This is eschatological joy working backward into the present: the end is so good that the road there, even the painful sections, can be counted as gain.",
  },
  {
    reference: "Romans 5:1-5",
    text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God. Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us.",
    reflection:
      "Paul places joy at three points: we rejoice in hope of glory (the future), we rejoice in sufferings (the present), and we are not put to shame (the past is covered). The foundation is justification — the war is over. From that foundation of peace, joy radiates in every temporal direction. No circumstance can strip the person of what justification has established.",
  },
  {
    reference: "Habakkuk 3:17-18",
    text: "Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation.",
    reflection:
      "The most comprehensive &ldquo;yet&rdquo; in Scripture. Habakkuk strips away every circumstantial source of joy — harvest, livestock, economic security — and then declares that joy remains because God remains. This is the paradigm case of joy that is not derived from circumstances: it is derived from God himself, who is unchanged by the fig tree&rsquo;s failure. The practice of this verse is to name your own &ldquo;fig trees&rdquo; — the things whose absence threatens your gladness — and then say the yet.",
  },
  {
    reference: "2 Corinthians 6:10",
    text: "...as sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, yet possessing everything.",
    reflection:
      "Three paradoxes of the apostolic life, and the central one is the paradox of joy. Paul is not saying he never sorrows — the &ldquo;sorrowful&rdquo; is real. He is describing a life in which two true things coexist: genuine grief about what is hard, and genuine rejoicing in what is true. The &ldquo;always rejoicing&rdquo; is not bravado; it is the deeper register of a life that knows what it possesses even when it appears to have nothing.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "CGdZZBKKNdA", title: "The Joy of the Lord — Biblical Theology of Joy" },
  { videoId: "e4Qu5qCMnrs", title: "C.S. Lewis on Joy and Longing" },
  { videoId: "S2dR_ZULxbI", title: "Philippians — Rejoice in the Lord Always" },
  { videoId: "R1IQCo9Vntk", title: "John Piper: Christian Hedonism and Desiring God" },
  { videoId: "bJ7wEcl0GcA", title: "Joy in Suffering — James 1 and Romans 5" },
  { videoId: "4Ql2eMH7wYc", title: "Eschatological Joy — Living in Light of Revelation 21" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianJoyOfSalvationPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JOSEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [joySource, setJoySource] = useState("");
  const [whatDimmedIt, setWhatDimmedIt] = useState("");
  const [restored, setRestored] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as JOSEntry[]);
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
    if (!joySource.trim()) return;
    const entry: JOSEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      joySource: joySource.trim(),
      whatDimmedIt: whatDimmedIt.trim(),
      restored: restored.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setJoySource("");
    setWhatDimmedIt("");
    setRestored("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? AMBER : BORDER}`,
    background: active ? "rgba(245, 158, 11, 0.12)" : "transparent",
    color: active ? AMBER : MUTED,
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
    color: AMBER,
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
                color: AMBER,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              The Christian Life
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Joy in the Lord: The Deep Gladness of the Saved
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Christian joy is not a mood but a response &mdash; the emotional register of those who
              know what has been done for them. Rooted in justification, fueled by the Spirit,
              sustained through suffering, and stretching forward to the joy of the new creation,
              it is one of the most misunderstood and most necessary realities in the Christian
              life. This guide explores its theology, its witnesses, its Scriptures, and the
              practices that train desire toward the only joy that lasts.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${AMBER}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Do not be grieved, for the joy of the LORD is your strength.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>Nehemiah 8:10</p>
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
                Before joy is a discipline it is a doctrine &mdash; a truth about what God has done
                that makes gladness the appropriate response. These seven studies trace joy from
                the fruit of the Spirit to the feast in Nehemiah, from Paul&rsquo;s prison cell
                to the new creation.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: AMBER,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
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
                        background: "rgba(245, 158, 11, 0.07)",
                        border: `1px solid rgba(245, 158, 11, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: AMBER,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Chara, the feast in Nehemiah, the Philippian prison, the &ldquo;yet&rdquo; of
                  Habakkuk, the eschatological wipe of every tear &mdash; these are not separate
                  doctrines but one. Joy has its source in what God is, its ground in what God has
                  done in Christ, its present expression in the Spirit&rsquo;s work, and its final
                  fullness in the glory to come. Explore the other fruit of the Spirit in our{" "}
                  <Link href="/fruit-of-the-spirit" style={{ color: AMBER, textDecoration: "underline" }}>
                    Fruit of the Spirit guide
                  </Link>
                  , or deepen your prayer life with{" "}
                  <Link href="/christian-prayer-guide" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Prayer
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
                Joy is a fruit of the Spirit, not a product of technique &mdash; but orchards are
                still tended. These six practices are the structures through which joy is cultivated:
                attention, remembrance, desire rightly ordered, community, suffering reframed, and
                eschatological imagination.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: AMBER,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}>
                    {practice.summary}
                  </p>
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
                      <li key={i} style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about seeking joy
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Lewis discovered that Joy could not be grasped directly &mdash; it always
                  arrived as a by-product of attending to something else. The same is true here.
                  None of these practices targets joy as an end in itself; they target God, truth,
                  community, and hope. Joy follows. Use the Journal tab to track your joy&rsquo;s
                  movements, and watch where it is most consistently found.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Joy is best learned from those who have found it in difficult places. Six witnesses
                &mdash; from a Nazi concentration camp to an Oxford study, from a prison cell to
                a Puritan sickbed &mdash; demonstrate what the theology of joy looks like when it
                becomes personal testimony.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: AMBER,
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
                      background: "rgba(245, 158, 11, 0.06)",
                      borderLeft: `3px solid ${AMBER}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
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
                Six passages to read slowly, carry through the week, and pray. Each is chosen
                because it does something specific to the theology of joy: it defines it, commands
                it, situates it in suffering, grounds it in justification, strips it of
                circumstances, or holds it alongside sorrow.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  For each passage: adoration (&ldquo;God, you are the source of joy and you share
                  it with your people&rdquo;), confession (&ldquo;I have sought my gladness in
                  things that cannot hold it&rdquo;), petition (&ldquo;Be my strength today; let
                  your joy be what sustains me when circumstances cannot&rdquo;). Habakkuk 3:17-18
                  is especially suited to praying in your own words &mdash; name your fig trees
                  and then say the yet.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The daily joy examination lives here. Three questions: What fueled your joy today?
                What dimmed it? Where was it restored? Entries are saved privately in your browser.
                No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s joy entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="jos-source" style={labelStyle}>
                    What fueled your joy today?
                  </label>
                  <textarea
                    id="jos-source"
                    value={joySource}
                    onChange={(e) => setJoySource(e.target.value)}
                    placeholder="A specific person, moment, truth, Scripture, beauty, or act of worship that kindled gladness"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="jos-dimmed" style={labelStyle}>
                    What dimmed it?
                  </label>
                  <textarea
                    id="jos-dimmed"
                    value={whatDimmedIt}
                    onChange={(e) => setWhatDimmedIt(e.target.value)}
                    placeholder="Anxiety, comparison, grievance, distraction, or simply the weight of the day — name it honestly"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="jos-restored" style={labelStyle}>
                    Where was it restored?
                  </label>
                  <textarea
                    id="jos-restored"
                    value={restored}
                    onChange={(e) => setRestored(e.target.value)}
                    placeholder="Prayer, Scripture, a conversation, worship, beauty, remembrance — or note if it was not yet restored"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!joySource.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !joySource.trim() ? BORDER : AMBER,
                    color: !joySource.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !joySource.trim() ? "not-allowed" : "pointer",
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
                      Track what fuels and dims your joy and you will begin to know where to tend
                      it. Start with today.
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
                            marginBottom: 12,
                          }}
                        >
                          <span style={{ color: AMBER, fontWeight: 600, fontSize: "0.85rem" }}>
                            {entry.date}
                          </span>
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
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            Fueled by
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.joySource}
                          </p>
                        </div>

                        {entry.whatDimmedIt && (
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
                              Dimmed by
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatDimmedIt}
                            </p>
                          </div>
                        )}

                        {entry.restored && (
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
                              Restored by
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.restored}
                            </p>
                          </div>
                        )}
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
                Teaching to watch slowly &mdash; on joy as fruit of the Spirit, the Christian
                Hedonism of Desiring God, joy in suffering, and the eschatological gladness of
                the redeemed.
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
                      <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>
                        {video.title}
                      </h3>
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
              Joy as witness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              A joyful Christian is one of the most persuasive arguments for the gospel in a
              world that sells happiness and delivers anxiety. The joy that persists through
              suffering, that is present at deathbeds, that sings at midnight in prison &mdash;
              this is not explained by circumstances. It requires an explanation, and the
              explanation is the gospel. Guard your joy not as a personal possession but as a
              public testimony.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the full{" "}
              <Link href="/fruit-of-the-spirit" style={{ color: AMBER, textDecoration: "underline" }}>
                Fruit of the Spirit
              </Link>
              , deepen your peace with{" "}
              <Link href="/christian-peace" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Peace
              </Link>
              , cultivate gratitude with{" "}
              <Link href="/christian-gratitude" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Gratitude
              </Link>
              , or explore{" "}
              <Link href="/christian-hope" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Hope
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
