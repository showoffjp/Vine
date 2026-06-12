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

const STORAGE_KEY = "vine_christianjoy_entries";

interface JOYEntry {
  id: string;
  date: string;
  sourceOfJoy: string;
  whatStealsIt: string;
  howToGuardIt: string;
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
    badge: "Greek Theology &mdash; Chara vs. Hedone",
    title: "Chara vs. Hedone &mdash; Joy Is Independent of Circumstances",
    paragraphs: [
      "The New Testament uses two distinct Greek words that English translations both render with the broad category of positive feeling. Hedone (ἡδονή) is pleasure &mdash; the feeling that arises from favorable circumstances, from the satisfaction of desire, from things going well. It is not condemned in Scripture, but it is recognized as circumstantial: it rises and falls with the tide of events. Chara (χαρά) is the New Testament word for joy, and it belongs to an entirely different category. It is the settled orientation of a person whose hope is anchored in God regardless of what is happening around them.",
      "The word chara shares its root with charis (grace) and charisma (gift). Joy is, at its root, a grace-word: it is not earned, manufactured, or produced by favorable circumstances. It is received. This is why Paul can command it &mdash; &ldquo;Rejoice in the Lord always. I will say it again: Rejoice!&rdquo; (Phil 4:4) &mdash; in a way that would be cruel if chara were simply hedone. You cannot command a circumstantial feeling. But you can command an orientation. Paul is commanding not a feeling but a posture: the deliberate reorientation of the soul toward the God who is its source and sustainer.",
      "The independence of joy from circumstances is the theme that runs through every New Testament treatment of it. Paul writes from prison (Phil 4:4). James commands joy in trials (Jas 1:2). Peter speaks of &ldquo;inexpressible and glorious joy&rdquo; in suffering (1 Pet 1:8). Jesus connects his joy to laying down his life (John 15:11). The repeated context of joy in the New Testament is hardship &mdash; which makes no sense if joy means hedone, and complete sense if joy means the chara that is grounded in God&rsquo;s character and promise rather than in present comfort.",
    ],
    callout: {
      label: "The distinction",
      text: "Hedone: pleasure, circumstantial and passing. Chara: joy, the settled orientation toward God that is independent of circumstances. Joy is a grace-word: received, not manufactured.",
    },
  },
  {
    badge: "Nehemiah 8:10",
    title: "&ldquo;The Joy of the Lord Is Your Strength&rdquo; &mdash; Joy as Fortifying, Not Decorative",
    paragraphs: [
      "&ldquo;Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the Lord is your strength&rdquo; (Neh 8:10). The context is the reading of the Law to the assembled people of Israel after their return from exile &mdash; a moment of both celebration and grief as the people hear the covenant and recognize how far they have strayed from it. Nehemiah&rsquo;s instruction is striking: do not grieve, because the joy of the Lord is your strength.",
      "The phrase &ldquo;the joy of the Lord is your strength&rdquo; is not decorative. It names something structural about the relationship between joy and the capacity to live faithfully. The people who are returning from exile are about to face the enormous challenges of rebuilding &mdash; the walls, the community, the covenantal life. Nehemiah is not telling them to feel good about it; he is telling them that the joy of the Lord &mdash; the gladness that comes from the restored relationship with God &mdash; is the resource from which their strength for that rebuilding will flow.",
      "Biblical joy is therefore fortifying rather than ornamental. It is not a pleasant feeling added to a life that would otherwise be complete; it is one of the primary sources from which the Christian life draws its capacity to endure, to serve, to love, to persist in the face of difficulty. The person who has lost their joy has not merely lost a pleasant feeling; they have lost one of the primary reserves from which faithfulness in the hard things is drawn. &ldquo;The joy of the Lord is your strength&rdquo; is a pastoral and strategic statement about the energy source of the Christian life.",
    ],
    callout: {
      label: "Key insight",
      text: "Neh 8:10: joy is not decorative but structural &mdash; the energy source from which the capacity for faithful rebuilding is drawn. The person who has lost joy has lost something more important than a pleasant feeling.",
    },
  },
  {
    badge: "Galatians 5:22 &mdash; The Fruit of the Spirit",
    title: "Joy as the Second Fruit of the Spirit &mdash; After Love, Before Peace",
    paragraphs: [
      "&ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; (Gal 5:22-23). Joy appears second in Paul&rsquo;s list of the fruit of the Spirit &mdash; after love, before peace. This placement is theologically significant: joy is not an optional feature of the Spirit-filled life but one of its most fundamental expressions. And its listing as fruit &mdash; not fruits, plural &mdash; indicates that this is the integrated character of a person who is abiding in the Spirit, not a menu of separate qualities to be developed individually.",
      "The implication is profound: joy is not generated by willpower or positive thinking. It is not the result of finding the right life circumstances or achieving the right level of spiritual progress. It grows as the Spirit takes root &mdash; which means the path to joy is not &ldquo;try harder to be joyful&rdquo; but &ldquo;abide in Christ&rdquo; (John 15:4-5). The branch that stays connected to the vine bears fruit, including joy, as a natural overflow of that connection. The branch that is disconnected from the vine cannot manufacture what only the vine produces.",
      "The pairing of joy with love (first) and peace (third) is not accidental. Love is the foundational orientation of the Spirit-filled life; joy is its emotional overflow; peace is its relational and interior fruit. The person who is genuinely loving God and neighbor will experience joy as a natural overflow of that love; the person who is experiencing genuine joy will find that it produces peace &mdash; the settled confidence that God is sovereign and that the present moment is held by the One who holds all things. Joy is the middle term in the most fundamental spiritual sequence.",
    ],
  },
  {
    badge: "Philippians 4:4 &mdash; The Prison Letter",
    title: "Paul&rsquo;s Letter of Joy Written from Prison &mdash; &ldquo;Rejoice in the Lord Always&rdquo;",
    paragraphs: [
      "Philippians is often called the letter of joy: Paul uses the words &ldquo;joy&rdquo; and &ldquo;rejoice&rdquo; sixteen times in four chapters. It was written from prison, possibly while Paul awaited a verdict that could result in his execution. The paradox is the point of the letter: the most sustained New Testament meditation on joy comes from a man in chains who might not survive to see it delivered. The joy Paul describes is not the joy of favorable circumstances; it is the joy that persists and even deepens when circumstances are as unfavorable as they can be.",
      "&ldquo;Rejoice in the Lord always. I will say it again: Rejoice!&rdquo; (Phil 4:4). The doubled command is for emphasis, not redundancy. Paul knows that what he is commanding is difficult &mdash; which is why he commands it twice. The phrase &ldquo;in the Lord&rdquo; is the key: the joy is not in the circumstances but in the Lord who governs all circumstances. This is why it can be commanded: it is not dependent on external conditions but on who the Lord is and what he has done. The command is to orient toward the Lord &mdash; which is always possible, regardless of what is happening.",
      "The passage continues to give the means of the commanded joy: &ldquo;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus&rdquo; (Phil 4:6-7). The alternative to anxiety is not stoic detachment but prayerful engagement &mdash; bringing everything to God with gratitude. The peace that follows is not the peace of resolution but the peace of the guarded heart: the garrison of God&rsquo;s presence holding the interior life against anxiety&rsquo;s assault.",
    ],
  },
  {
    badge: "C.S. Lewis &mdash; Surprised by Joy",
    title: "C.S. Lewis&rsquo;s &ldquo;Surprised by Joy&rdquo; &mdash; Joy as Pointer to God",
    paragraphs: [
      "C.S. Lewis&rsquo;s autobiography of his conversion &mdash; Surprised by Joy &mdash; is built around a specific experience he calls &ldquo;Joy&rdquo; (capitalized throughout): a sudden, unexpected longing for something beyond the present moment, a stab of desire so intense that it is almost painful, that arises from experiences of beauty, music, mythology, or nature. Lewis argues that this experience is not itself the object of desire &mdash; it is a pointer to the object. The thing that produces the longing is not what the longing is for; the longing is for something that no earthly thing can fully satisfy.",
      "The argument is theologically important: if the desire that arises from beauty, music, and nature is a desire for something that no created thing can satisfy, then the desire itself is evidence of a Creator who made us for something beyond creation. Augustine&rsquo;s restless heart and Lewis&rsquo;s Joy are the same phenomenon: the longing for God that has been planted in the human soul and that no created thing can fill. Every experience of profound joy that leaves the person wanting more is not a failure of the joy but a sign of what the joy is pointing toward.",
      "Lewis&rsquo;s treatment of Joy has been influential in apologetics &mdash; the argument from desire &mdash; but it is equally important pastorally. The person who experiences profound joy and then feels empty again is not malfunctioning; they are functioning as designed. The emptiness after the joy is the soul recognizing that the beautiful thing was a pointer, not the destination. The remedy is not to try to hold the created joy longer but to follow the pointer toward the God who is its source &mdash; which is the definition of worship.",
    ],
    callout: {
      label: "Lewis&rsquo;s argument",
      text: "Joy is not satisfied by earthly beauty but pointed by it toward God. Every stab of joy that leaves you wanting more is the soul recognizing that the beautiful thing was a signpost, not the destination.",
    },
  },
  {
    badge: "James 1:2 &mdash; Joy in Suffering",
    title: "&ldquo;Count It All Joy&rdquo; &mdash; Joy in Trials (James 1:2-4)",
    paragraphs: [
      "&ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing&rdquo; (Jas 1:2-4). James does not command the feeling of joy about trials; he commands the orientation of joy in them. The word &ldquo;count&rdquo; is a deliberate cognitive act &mdash; a reasoned reframing of the trial based on what the trial is producing. The joy is not about the pain; it is about the outcome: steadfastness, and through steadfastness, completeness.",
      "James&rsquo;s logic is forward-looking: the trial is unpleasant now, but the person who allows it to produce steadfastness rather than abandonment is building something that will hold under greater pressure in the future. The joy in the trial is therefore not a denial of its painfulness but a confidence in its productivity &mdash; a confidence grounded in knowing what God is doing through the difficulty rather than what is visible on the surface. James 1:2 is perhaps the most demanding command in the epistle precisely because it requires a perspective that runs directly against the natural human response to pain.",
      "The joy of James 1:2 is not the same as the joy of Psalm 16 or Philippians 4, but it belongs to the same family: joy that is grounded in something other than circumstances. In James, the ground of joy is the telos &mdash; the end point of the trial, the completeness that steadfastness produces. The person who has counted enough trials as joy, who has accumulated enough evidence that God is at work in what is difficult, develops the kind of unshakable joy that James&rsquo;s letter calls for throughout &mdash; the joy that is not dependent on the absence of difficulty.",
    ],
  },
  {
    badge: "Luke 15:24 &mdash; The Prodigal Son",
    title: "The Father&rsquo;s Joy &mdash; &ldquo;He Was Lost and Is Found&rdquo; (Luke 15:24)",
    paragraphs: [
      "&ldquo;For this my son was dead, and is alive again; he was lost, and is found.&rsquo; And they began to celebrate&rdquo; (Luke 15:24). The parable of the prodigal son is ultimately a parable about the joy of God &mdash; the delight of the Father at the return of what was lost. Three parables in Luke 15 are organized around the same structure: the lost sheep, the lost coin, the lost son. Each ends in rejoicing &mdash; and in each case, the rejoicing is explicitly related to the joy in heaven over the sinner who repents. The joy of the Father is the theme, and it is overwhelming: running, robe, ring, sandals, fatted calf, music, dancing.",
      "The Father&rsquo;s joy is not measured or restrained. It is extravagant and slightly undignified by the standards of the culture &mdash; a wealthy man running toward a returning son was not the expected behavior of a patriarch in the ancient Near East. The father does not wait for the son to arrive and present his prepared speech; he sees him &ldquo;while he was still a long way off&rdquo; and runs to him. The joy at the return overrides the appropriate protocol of restoration. This is the measure of God&rsquo;s joy at repentance &mdash; and it is the ground of the joy to which those who know themselves to be returned prodigals are invited.",
      "The older son, who refuses to enter the celebration, provides the negative image: a person who has been living in the father&rsquo;s house and working in the father&rsquo;s fields but has not entered into the father&rsquo;s joy. His complaint is about fairness; his failure is the failure to know the father. The person who knows God&rsquo;s joy at the return of the lost &mdash; including their own return &mdash; cannot stay outside the celebration. Christian joy is rooted in the father&rsquo;s joy: the recovered delight of a relationship restored, the music and dancing of new creation beginning in the present.",
    ],
    callout: {
      label: "The image",
      text: "The Father running while the son is still far off &mdash; joy that cannot wait, that overrides protocol, that is extravagant and undignified. This is the measure of God&rsquo;s joy at restoration. Christian joy is rooted in knowing we are the returned son.",
    },
  },
  {
    badge: "John 15:11 &mdash; Jesus&rsquo;s Complete Joy",
    title: "The Complete Joy of Jesus &mdash; Sharing His Own Joy With Us (John 15:11)",
    paragraphs: [
      "&ldquo;These things I have spoken to you, that my joy may be in you, and that your joy may be full&rdquo; (John 15:11). This verse comes at the end of the vine and branches discourse (John 15:1-10) &mdash; Jesus&rsquo;s teaching on abiding. The joy Jesus promises is not a new joy that he creates for the disciples; it is his own joy, shared with them. &ldquo;My joy&rdquo; &mdash; the joy Jesus himself has &mdash; is what he wants to be &ldquo;in&rdquo; the disciples. This is one of the most remarkable statements in the Gospels: Jesus sharing the content of his inner life, including his joy, with his followers.",
      "The joy of Jesus &mdash; what is it? John&rsquo;s Gospel gives us windows into it: the joy of doing the Father&rsquo;s will (John 4:34), the joy of the shepherd who finds the lost sheep (John 10), the joy set before him in the high priestly prayer (John 17:13), the joy of the Father&rsquo;s love (John 15:9). The joy of Jesus is the joy of perfect alignment with the Father, perfect love for the world, perfect trust in the outcome of the mission. It is the joy of a person who knows who they are, who they love, and where they are going. This is the joy he offers to share.",
      "The result, he says, is that &ldquo;your joy may be full&rdquo; &mdash; not partially full, not growing toward fullness, but full. The completeness of the joy is the goal. Dallas Willard argued that one of the most neglected aspects of Christian discipleship is the invitation to share in the joy of Jesus &mdash; that the apprenticeship to Jesus is not primarily about moral conformity but about entering more and more deeply into the life that Jesus himself lives, including the joy that is at its center. Full joy is not a bonus; it is the stated goal of Jesus&rsquo;s teaching.",
    ],
  },
  {
    badge: "Joy vs. Happiness",
    title: "Joy vs. Happiness &mdash; Circumstantial vs. Rooted",
    paragraphs: [
      "The distinction between joy and happiness is one of the most practically important in Christian formation. Happiness (from the Old English &ldquo;hap&rdquo; &mdash; luck, chance) is the feeling that arises when circumstances are favorable. It is good and appropriate &mdash; God is not opposed to happiness. But happiness depends on what is happening. Joy, in the biblical sense, is different: it is the settled orientation of a person whose hope is anchored in God regardless of what is happening. Happiness is weather; joy is climate.",
      "The distinction matters pastorally because the person who expects joy to feel like happiness will be repeatedly disappointed. Joy does not always feel good. Paul&rsquo;s joy in prison (Phil 1:18) does not feel like the happiness of a person whose situation has been resolved. The joy of James 1:2 in trials does not feel like the happiness of a person whose trials have ended. The joy of Hebrews 12:2, for which Jesus endured the cross, does not feel like the happiness of a person who has been spared the pain. Joy and suffering coexist in the New Testament in ways that make no sense if joy means happiness.",
      "The practical implication is significant: the absence of the feeling of happiness in a difficult season does not mean the absence of joy. Joy can be present &mdash; as a conviction, as a grounded hope, as a deliberate orientation toward God &mdash; even when the feelings are grief, exhaustion, or confusion. This is what Paul models in Philippians. The person who has learned the difference between joy and happiness has learned to look for what is actually there rather than waiting for what the culture promises. Joy is deeper than happiness, more durable, and available in precisely the seasons when happiness is not.",
    ],
    callout: {
      label: "The distinction",
      text: "Happiness: circumstantial, dependent on what is happening, rises and falls with events. Joy: rooted, the settled orientation toward God that persists regardless of circumstances. Happiness is weather; joy is climate.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Gratitude as the Path to Joy &mdash; The Discipline of Specific Thanksgiving",
    summary:
      "Joy and gratitude are inseparably connected in Scripture: the path to joy runs through the discipline of noticing and naming what has been given. Gratitude is not a feeling; it is a practice that trains attention.",
    steps: [
      "Begin each day by naming three specific things for which you are grateful &mdash; not the generalized &ldquo;family, health, salvation&rdquo; but specific gifts of the particular day: the conversation yesterday, the coffee that was good, the moment of unexpected grace. Specificity matters more than length. The discipline trains attention toward what is given rather than what is lacking.",
      "Once per week, name one gift that you have been taking for granted &mdash; something so reliably present that you have stopped noticing it. The practice of noticing what is already there is among the most effective paths to joy. G.K. Chesterton called this the recovery of &ldquo;absurd good news&rdquo; &mdash; the astonishment that things exist at all, that beauty is given, that love is possible.",
      "In prayer, bring the specific gratitude explicitly before God. Not the performance of gratitude for its theological correctness but the actual delight in what has been given, brought into the presence of the Giver. Thanksgiving that is specific and directed is worship &mdash; the recognition that what has been received is gift rather than entitlement.",
      "On difficult days, before the gratitude list is written, name what is hard. Do not skip the grief to get to the gratitude. The practice is not positive thinking; it is the honest holding of both what is difficult and what has been given &mdash; which is the biblical pattern of the Psalms.",
    ],
    anchor: "Philippians 4:6 &mdash; &ldquo;In every situation, by prayer and petition, with thanksgiving, present your requests to God.&rdquo;",
  },
  {
    number: "02",
    title: "Sabbath as Joy-Practice &mdash; The Weekly Act of Trust",
    summary:
      "A weekly Sabbath &mdash; a full day of rest, delight, and worship &mdash; is one of the most joy-producing disciplines available. Sabbath interrupts the anxious busyness that crowds out joy and creates space for presence.",
    steps: [
      "Choose one day per week as Sabbath. The specific day matters less than the consistency. The Sabbath is not a day of doing nothing; it is a day of doing different things &mdash; rest, play, worship, meals with people you love, reading for pleasure, sleep. The distinguishing feature is the deliberate cessation of the production and striving that defines the other six days.",
      "Before the Sabbath begins, make a deliberate act of release: name the unfinished work, the unresolved situations, the things that are still pending &mdash; and explicitly entrust them to God for twenty-four hours. The Sabbath is an act of trust: I do not have to manage these things for one day. God is sovereign over them while I rest.",
      "During the Sabbath, identify one thing that produces delight &mdash; not productive delight but the sheer enjoyment of something good for its own sake. A walk. A long meal. Music. A conversation without an agenda. The cultivation of delight is itself a form of worship: the creature enjoying what the Creator has given, as the Creator designed.",
      "Notice, at the end of the Sabbath, whether the rest has produced joy. The connection between rest and joy is physiological as well as spiritual: the person who is chronically exhausted cannot access joy, which requires enough interior spaciousness to notice what is good. Sabbath creates that spaciousness.",
    ],
    anchor: "Nehemiah 8:10 &mdash; &ldquo;Do not be grieved, for the joy of the Lord is your strength.&rdquo;",
  },
  {
    number: "03",
    title: "Abiding in the Vine &mdash; The Primary Practice for Joy",
    summary:
      "John 15 identifies abiding as the source of full joy. The practices of Scripture reading, prayer, and corporate worship are not disciplines that earn joy; they are the means of the abiding from which joy flows as fruit.",
    steps: [
      "Each morning, before the day&rsquo;s demands, spend time in John 15:1-11. Read it slowly. Let the image of the vine and branches be the frame for the day. The question is not &ldquo;what must I do today?&rdquo; but &ldquo;am I abiding?&rdquo; The fruit &mdash; including joy &mdash; is the natural overflow of the branch that stays connected to the vine.",
      "When joy is absent, diagnose rather than strive: is the absence of joy a sign of disconnection from the vine? What has crowded out the time and attention in which abiding happens &mdash; the Scripture, the prayer, the worship, the community? Reconnection, not effort, is the prescribed remedy.",
      "In prayer, explicitly ask for the joy of John 15:11: &ldquo;Lord, let your joy be in me. I am not able to manufacture it. I receive it as the fruit of abiding in you.&rdquo; The prayer acknowledges both the source of joy (Christ) and the means (abiding) and positions the person as receiver rather than producer.",
      "In corporate worship, pay attention to the moments of unexpected joy &mdash; the song that moves something, the word that lands, the prayer that breaks open. These are moments of chara &mdash; the Spirit producing in the community the fruit of the shared abiding. Receive them as gifts rather than performing them as expectations.",
    ],
    anchor: "John 15:11 &mdash; &ldquo;These things I have spoken to you, that my joy may be in you, and that your joy may be full.&rdquo;",
  },
  {
    number: "04",
    title: "The Lectio Divina of Joy &mdash; Praying the Joy Passages",
    summary:
      "A contemplative reading practice with the primary joy texts of Scripture &mdash; allowing them to form not just the mind but the affective orientation of the heart. The Psalms and Paul are the primary teachers.",
    steps: [
      "Choose one joy passage to pray each week: Psalm 16, Psalm 84, Philippians 4:4-7, John 15:9-11, or Nehemiah 8:10. Read it three times. First reading: receive the overall movement. Second reading: notice which phrase names your actual experience or longing most precisely. Third reading: stay with that phrase and let it become your prayer.",
      "Sit with the phrase for five minutes in silence. Not analyzing it but receiving it &mdash; letting its truth settle into the affective layer of the soul rather than remaining in the analytical layer. Joy is not primarily a concept; it is an experience. The contemplative reading creates the conditions for the concept to become experience.",
      "At the end of the week, note: has anything shifted in your orientation toward joy? Not the dramatic transformation but the small movement &mdash; the slightly increased capacity to notice what is good, the slightly decreased anxious striving, the slightly more frequent awareness of God&rsquo;s presence. Formation in joy is cumulative and slow.",
      "Return to the same passage the following week if it has not been fully received. The practice is not to cover as many passages as possible but to let each one do its formative work. Joy, like every spiritual fruit, grows slowly.",
    ],
    anchor: "Psalm 16:11 &mdash; &ldquo;You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.&rdquo;",
  },
  {
    number: "05",
    title: "Following the Pointer &mdash; C.S. Lewis&rsquo;s Practice of Receiving Earthly Joy",
    summary:
      "Practicing the habit Lewis describes in Surprised by Joy: receiving moments of beauty, delight, and longing as pointers toward God rather than trying to hold them or reproduce them.",
    steps: [
      "This week, pay attention to one experience that produces a stab of unexpected joy or longing: beauty in nature, a moment of music, a sunset, a phrase in a book, a conversation that opens something. Notice the experience without trying to hold it or analyze it immediately.",
      "Ask Lewis&rsquo;s question: what is this longing for? The created thing that produced it is not the destination; it is the pointer. The joy that arose from the music is not satisfied by more music; it is pointing toward something the music was made to reflect. Follow the pointer upward in prayer: &ldquo;Lord, this is a glimpse of you. I receive it as gift. I follow it toward the source.&rdquo;",
      "Do not try to reproduce the experience. Lewis was clear: the attempt to capture Joy by returning to the same stimulus that produced it almost always fails. Joy is given, not manufactured. The practice is to receive it when it comes and follow it when it points, not to engineer its arrival.",
      "Build a practice of deliberately encountering beauty each week &mdash; not to produce the experience of Joy on demand but to train the attentiveness that allows it to be received when given. The person who has trained their attention toward the beautiful is more available to receive the moments of unexpected chara than the person who has trained their attention only toward the productive.",
    ],
    anchor: "Romans 15:13 &mdash; &ldquo;May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.&rdquo;",
  },
  {
    number: "06",
    title: "Guarding Joy &mdash; The Weekly Audit of Joy-Stealers",
    summary:
      "A weekly practice for identifying and addressing the specific habits, relationships, and patterns of attention that most consistently steal joy &mdash; adapted from Philippians 4:8&rsquo;s command about what to think about.",
    steps: [
      "Once per week, ask: what has most consistently stolen my joy this week? Not the general &ldquo;stress&rdquo; but the specific: the particular habit of media consumption that leaves you empty, the comparison with a particular person, the anxious rehearsal of a particular fear, the relationship pattern that consistently drains. Name the specific joy-stealer.",
      "For each joy-stealer identified, name the corresponding Philippians 4:8 category that it is displacing: is it crowding out attention to what is true? What is excellent? What is praiseworthy? The practice is not positive thinking but the deliberate reorientation of attention toward what God has given rather than what is lacking, threatening, or inadequate.",
      "Make one specific change this week in the pattern that steals joy. Not the comprehensive life overhaul but the one small adjustment: a change in media consumption, a conversation that has been avoided, a pattern of comparison that can be interrupted. The formation of joy is cumulative; each small adjustment compounds.",
      "At the end of the week, note whether the adjustment produced any movement in joy. The practice is diagnostic: over time, the weekly audit builds a map of the specific conditions under which joy flourishes and the specific conditions under which it is stolen. This map is one of the most practically useful outcomes of intentional attention to joy.",
    ],
    anchor: "Philippians 4:8 &mdash; &ldquo;Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable &mdash; think about such things.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "Surprised by Joy; Letters to Malcolm; The Weight of Glory &mdash; Joy as the Serious Business of Heaven",
    quote:
      "&ldquo;Joy is the serious business of heaven.&rdquo; The experience I call Joy is distinct from both Happiness and Pleasure. It is the stab of longing that arises from beauty and leaves you wanting something that beauty cannot give &mdash; something that nothing in the created world has ever fully satisfied, which is itself the evidence of what we were made for.",
    bio: "C.S. Lewis (1898-1963) was an Oxford and Cambridge literary scholar, lay theologian, and the most widely read Christian apologist of the twentieth century. His autobiography of his conversion, Surprised by Joy, is built around the experience of an intense, unexpected longing he calls &ldquo;Joy&rdquo; &mdash; a stab of desire for something beyond the present moment that he traces through his entire intellectual and spiritual journey. Lewis argues that this experience was ultimately the most important evidence for God in his life: if nothing earthly can satisfy the longing that earthly beauty produces, then the longing is evidence of a Maker who designed the soul for something beyond the earthly. His treatment of joy as a pointer to God &mdash; rather than as a feeling to be pursued for its own sake &mdash; has been among the most influential in modern Christian thought. His broader writing on joy in Letters to Malcolm and The Weight of Glory extends the argument: the deepest pleasures of this life are foretastes of the joy that is our ultimate inheritance, and the spiritual life is the practice of following every joy-pointer toward its source in God.",
  },
  {
    name: "G.K. Chesterton",
    role: "Orthodoxy; Heretics &mdash; Joy as the Secret of God",
    quote:
      "There is the great man who makes every man feel small. But the real great man is the man who makes every man feel great. And the man who makes every man feel great is the man who has given them the joy of being alive &mdash; the absurd good news that the world exists, that they exist, that God is extravagant with being.",
    bio: "G.K. Chesterton (1874-1936) was an English journalist, literary critic, and Catholic apologist whose enormously productive writing career produced more than one hundred books, including Orthodoxy, Heretics, and the Father Brown detective series. His treatment of joy is inseparable from his treatment of wonder: for Chesterton, the recovery of joy is the recovery of the child&rsquo;s ability to be astonished that things exist at all, that the world is given rather than merely there, that beauty is prodigal rather than sparse. His famous argument in Orthodoxy is that the secret of God is joy &mdash; that the divine restraint we perceive is not the restraint of a grudging deity but of a God whose exuberance is so excessive that he must hold it back lest it overwhelm the fragile creatures he loves. Chesterton writes of the &ldquo;monstrous courage&rdquo; of the man who can see the world as a gift and be delighted by it: a courage that is the opposite of despair, because it insists on the absurd goodness of what has been given. His work is a sustained argument that joy is not a pleasant extra but the most accurate perception of reality available to a creature who knows who made the world and why.",
  },
  {
    name: "Brennan Manning",
    role: "The Ragamuffin Gospel; Abba&rsquo;s Child &mdash; Joy in Unconditional Love",
    quote:
      "The ragamuffin who feels that his life is a grave disappointment to God will never know the freedom of the Abba-child. The joy of the Gospel is the joy of someone who has stopped performing and started receiving &mdash; the joy of the person who has been found, not the joy of the person who has achieved.",
    bio: "Brennan Manning (1934-2013) was a Franciscan priest, author, and speaker whose personal history of alcoholism and spiritual struggle gave his writing on grace and joy a credibility that more polished presentations lack. His most influential book, The Ragamuffin Gospel, argues that the joy of the Gospel is specifically the joy of the undeserving &mdash; the joy of a person who has stopped trying to earn what can only be received, who has discovered that God&rsquo;s love is not conditioned on their performance. Manning&rsquo;s treatment of joy is inseparable from his treatment of grace: both are received rather than achieved, and both are most fully experienced by the person who has given up the attempt to be good enough. His work has been particularly influential for people whose religious experience has been dominated by performance anxiety, guilt, or the sense that God&rsquo;s love is conditional. He consistently argues that the joy Jesus promises &mdash; &ldquo;that your joy may be complete&rdquo; &mdash; is most accessible to the person who has abandoned the performance of adequacy and rested in the Abba who runs toward the returning prodigal.",
  },
  {
    name: "Thomas &agrave; Kempis",
    role: "The Imitation of Christ &mdash; The Interior Joy of Union with God",
    quote:
      "What doth it profit thee to enter into deep discussion concerning the Holy Trinity if thou lack humility and be thus displeasing to the Trinity? Many words satisfy not the soul, but a good life refresheth the mind. Better of a surety is a lowly peasant who serveth God than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
    bio: "Thomas &agrave; Kempis (c. 1380-1471) was a German-Dutch Augustinian friar whose Imitation of Christ became one of the most widely-read devotional works in Christian history. His treatment of joy is characteristically interior and unsentimental: he distinguishes consistently between the shallow pleasures of exterior satisfaction &mdash; learning, status, achievement, the approval of others &mdash; and the deep joy that comes from union with God in the interior life. &Agrave; Kempis is particularly instructive on the counterintuitive relationship between suffering and joy: the person who has learned to hold earthly comforts lightly, who has stopped expecting the created world to satisfy what only God can satisfy, has paradoxically become more available to the genuine joy that God offers. His counsel is not ascetic in the sense of condemning created goods but ascetic in the sense of refusing to make them carry the weight of ultimate satisfaction. The person who expects the creature to give what only the Creator can give will be perpetually disappointed; the person who receives the creature as a gift and looks through it to the Giver will find that every good thing becomes a source of quiet joy.",
  },
  {
    name: "Desmond Tutu",
    role: "The Book of Joy &mdash; Joy in the Face of Suffering",
    quote:
      "We are made for joy. I don&rsquo;t mean a frothy, superficial happiness &mdash; I mean the joy of the deep currents of the spirit, the joy that persists when the surface is troubled, the joy that is possible because we know whose we are and where we are going. It is the joy of those who have stared into the abyss and found that they are held.",
    bio: "Desmond Tutu (1931-2021) was the Anglican Archbishop of Cape Town and one of the most important voices in the struggle against apartheid in South Africa. His Book of Joy, written with the Dalai Lama after a week of conversation in 2015, is a sustained meditation on how to live joyfully in the face of suffering, injustice, and mortality. Tutu&rsquo;s life was shaped by decades of costly witness against systemic evil &mdash; the apartheid regime, HIV/AIDS, the continuing injustice of South African society &mdash; and his joy was not the joy of a person whose circumstances were comfortable but of a person who had discovered that joy could persist through the most difficult things because it was rooted in something the circumstances could not reach. His treatment of joy is particularly valuable because it refuses to abstract joy from the concrete realities of suffering and injustice: the joy he describes has been tested in the specific texture of oppression, loss, and the long struggle for human dignity, and it has held. This is the most credible form of Christian joy testimony: not the joy of the comfortable but the joy of the held.",
  },
  {
    name: "Dallas Willard",
    role: "The Divine Conspiracy; The Spirit of the Disciplines &mdash; Joy as the Default Condition of the Kingdom",
    quote:
      "Joy is the settled condition of the person who lives in the Kingdom of God. It is not a mood or a feeling that comes and goes with circumstances; it is the natural state of the person who has found their place in the family of God and who knows that everything they need is provided by the Father who loves them. The apprentice to Jesus does not have to pursue joy; they have to stop fleeing from it.",
    bio: "Dallas Willard (1935-2013) was a philosopher at the University of Southern California and one of the most careful and influential thinkers on Christian spiritual formation of the twentieth century. His major works &mdash; The Divine Conspiracy, The Spirit of the Disciplines, Renovation of the Heart &mdash; are sustained arguments that the goal of Christian discipleship is the transformation of the whole person into someone who lives the life that Jesus modeled: a life of deep interior peace, love for God and neighbor, and settled joy. Willard consistently argued that joy is not an occasional blessing of the Christian life but its default condition: the person who is genuinely living as an apprentice to Jesus, who is genuinely abiding in the Kingdom of God, should be the most joyful person in any room. His challenge to the contemporary church is that much of what passes for Christian formation produces earnest, burdened, guilt-ridden people rather than the people of settled joy and freedom that the New Testament describes. The recovery of joy is, for Willard, inseparable from the recovery of a genuinely transformational understanding of what discipleship is for.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Nehemiah 8:10",
    text: "Do not be grieved, for the joy of the Lord is your strength.",
    reflection:
      "Joy as a structural resource rather than an emotional accessory. The returning exiles need strength for rebuilding, and Nehemiah locates the source of that strength in the joy of the Lord &mdash; the gladness of restored relationship with God. The absence of joy is therefore not merely an emotional problem but an energy problem: the person who has lost joy has lost one of the primary reserves from which faithful endurance is drawn.",
  },
  {
    reference: "Philippians 4:4-7",
    text: "Rejoice in the Lord always. I will say it again: Rejoice! Let your gentleness be evident to all. The Lord is near. Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The structure of commanded joy: commanded twice for emphasis, grounded &ldquo;in the Lord&rdquo; rather than in circumstances, accessed through prayer with thanksgiving rather than through anxiety. The peace that follows is the garrison of God&rsquo;s presence guarding the interior life &mdash; not the peace of resolution but the peace of the held heart. Written from prison, which makes the command credible.",
  },
  {
    reference: "John 15:11",
    text: "These things I have spoken to you, that my joy may be in you, and that your joy may be full.",
    reflection:
      "Jesus shares his own joy &mdash; not a new joy he creates, but the joy he himself has. The goal is not partial joy but full joy. This verse defines the telos of the vine-and-branches discourse: abiding produces fruit, and the fruit is &mdash; among other things &mdash; complete joy. Full joy is not a bonus of the Christian life; it is its stated goal.",
  },
  {
    reference: "James 1:2-4",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    reflection:
      "Joy in suffering grounded not in the feeling of the trial but in the known telos: steadfastness, completeness, maturity. The command is to &ldquo;consider&rdquo; &mdash; a deliberate cognitive reorientation toward what the trial is producing. The most demanding joy-command in the epistle because it requires the most counter-intuitive perspective: not the feeling of joy about pain but the orientation of joy in it.",
  },
  {
    reference: "Psalm 16:11",
    text: "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.",
    reflection:
      "Joy located in God&rsquo;s presence rather than in circumstances, possessions, or achievements. The &ldquo;fullness of joy&rdquo; in God&rsquo;s presence is the eschatological reality toward which all present experiences of joy are pointing. Peter quotes this Psalm at Pentecost as a prophecy of the resurrection &mdash; the ultimate presence that is the ultimate source of the ultimate joy.",
  },
  {
    reference: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    reflection:
      "Joy is God&rsquo;s gift, not our achievement: &ldquo;fill you.&rdquo; The source is God; the means is trust; the instrument is the Holy Spirit; the result is overflow. The image is of a vessel filled to overflowing &mdash; the joy that comes from God&rsquo;s filling is not carefully rationed but abundant enough to spill over into hope and peace. Joy produces overflow.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "CjC9DxYi7sc", title: "What Is Biblical Joy? &mdash; Chara and the Joy Independent of Circumstances" },
  { videoId: "e-T8TKnKLJk", title: "The Joy of the Lord Is Your Strength &mdash; Nehemiah 8 and the Fortifying Power of Joy" },
  { videoId: "YEnKb56vJMU", title: "Surprised by Joy &mdash; C.S. Lewis and Joy as Pointer to God" },
  { videoId: "5w_cqHdBkCE", title: "Joy in Philippians &mdash; Paul&rsquo;s Letter of Joy Written from Prison" },
  { videoId: "xbhCPt6GGWU", title: "The Fruit of the Spirit: Joy &mdash; Galatians 5 and the Abiding Life" },
  { videoId: "zLyMdBqCBwo", title: "Desmond Tutu and the Dalai Lama &mdash; The Book of Joy" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianJoyGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JOYEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [sourceOfJoy, setSourceOfJoy] = useState("");
  const [whatStealsIt, setWhatStealsIt] = useState("");
  const [howToGuardIt, setHowToGuardIt] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as JOYEntry[]);
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
    if (!sourceOfJoy.trim() || !whatStealsIt.trim()) return;
    const entry: JOYEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      sourceOfJoy: sourceOfJoy.trim(),
      whatStealsIt: whatStealsIt.trim(),
      howToGuardIt: howToGuardIt.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setSourceOfJoy("");
    setWhatStealsIt("");
    setHowToGuardIt("");
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
              Joy &amp; Delight
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Joy: The Theology and Practice of Rejoicing in God
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Chara &mdash; the New Testament word for joy &mdash; is a grace-word: received, not
              manufactured, independent of circumstances, the settled orientation of a person whose hope
              is anchored in God. This guide traces the theology of joy from Nehemiah 8 and
              Philippians 4 through the fruit of the Spirit, C.S. Lewis&rsquo;s pointer, James 1, the
              father&rsquo;s extravagant welcome, and the complete joy of Jesus himself.
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
                &ldquo;These things I have spoken to you, that my joy may be in you, and that your joy
                may be full.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>John 15:11</p>
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
                Nine studies in the theology of Christian joy &mdash; from chara vs. hedone and the
                fortifying strength of Nehemiah 8 to the fruit of the Spirit, Paul&rsquo;s prison letter,
                Lewis&rsquo;s pointer, joy in James 1, the father&rsquo;s extravagant welcome, the
                complete joy of Jesus, and the distinction between joy and happiness. Joy is not
                decorative; it is structural.
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
                  Chara, the fruit of the Spirit, the fortifying strength of Neh 8:10, the complete joy
                  of John 15:11, Lewis&rsquo;s pointer, the father running toward the prodigal &mdash;
                  these are not separate topics but one theology of joy seen under different conditions
                  and from different angles. What they share: joy is received rather than manufactured,
                  independent of circumstances, rooted in God&rsquo;s character and promise, and
                  available as the natural overflow of the abiding life. See how joy connects to lament
                  in{" "}
                  <Link href="/christian-lament" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Lament
                  </Link>{" "}
                  or to hope in{" "}
                  <Link href="/christian-hope" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Hope
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
                Six practices for cultivating and guarding Christian joy &mdash; from specific gratitude
                to Sabbath, abiding in the vine, lectio divina with joy passages, Lewis&rsquo;s practice
                of following the pointer, and the weekly audit of joy-stealers. Joy is a fruit, not a
                product; the practices create the conditions for growth.
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
                  A word about pursuing joy
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Joy, like all the fruit of the Spirit, cannot be manufactured by direct effort. The
                  attempt to produce joy by &ldquo;trying to be more joyful&rdquo; almost always fails
                  &mdash; and often produces a performance of joy that is more exhausting than the
                  absence of it. The practices here are not techniques for producing joy but conditions
                  for receiving it: the gratitude that trains attention toward the given, the Sabbath
                  that creates space, the abiding that connects to the source. The Journal tab is
                  designed to support the slow, specific work of noticing joy&rsquo;s sources and
                  guarding them from what most consistently steals it.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian joy
                &mdash; Lewis&rsquo;s pointer, Chesterton&rsquo;s absurd good news, Manning&rsquo;s
                ragamuffin grace, &agrave; Kempis&rsquo;s interior realism, Tutu&rsquo;s joy in
                suffering, and Willard&rsquo;s vision of the joyful apprentice. Each one found that joy
                was more robust and more available than they had expected.
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
                Six passages that form the biblical theology of joy &mdash; Nehemiah 8:10, Philippians
                4:4-7, John 15:11, James 1:2-4, Psalm 16:11, and Romans 15:13. Read one per week
                alongside the Journal practice. Let each text both describe the nature of joy and invite
                you into it.
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
                  Take each passage and bring it into contact with your actual experience of joy &mdash;
                  where it is present, where it is absent, what has been stealing it, what has been
                  producing it. Let the text both name the reality of Christian joy and call you toward
                  it. Close with the prayer of John 15:11: &ldquo;Lord, let your joy be in me. I cannot
                  manufacture it. I receive it as the fruit of abiding in you. Let my joy be
                  full.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions for attending to joy specifically &mdash; a source of deep joy right now,
                what most threatens to steal it, and how you will guard it this week. Entries are stored
                privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New joy entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="joy-source" style={labelStyle}>
                    A source of deep joy right now
                  </label>
                  <textarea
                    id="joy-source"
                    value={sourceOfJoy}
                    onChange={(e) => setSourceOfJoy(e.target.value)}
                    placeholder="Be specific. Not &ldquo;God&rdquo; in the abstract but the concrete, particular gift or experience that has been a source of genuine joy..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="joy-steals" style={labelStyle}>
                    What most threatens to steal my joy
                  </label>
                  <textarea
                    id="joy-steals"
                    value={whatStealsIt}
                    onChange={(e) => setWhatStealsIt(e.target.value)}
                    placeholder="The specific habit, pattern of attention, relationship, or circumstance that most consistently displaces joy..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="joy-guard" style={labelStyle}>
                    How I will guard it this week
                  </label>
                  <textarea
                    id="joy-guard"
                    value={howToGuardIt}
                    onChange={(e) => setHowToGuardIt(e.target.value)}
                    placeholder="One specific, concrete action &mdash; not the comprehensive overhaul but the one small adjustment that protects the joy source..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!sourceOfJoy.trim() || !whatStealsIt.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !sourceOfJoy.trim() || !whatStealsIt.trim() ? BORDER : GOLD,
                    color: !sourceOfJoy.trim() || !whatStealsIt.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !sourceOfJoy.trim() || !whatStealsIt.trim() ? "not-allowed" : "pointer",
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
                      Name a source of deep joy &mdash; specifically. Name what threatens to steal it.
                      Name how you will guard it this week. Over time, these entries become a map of
                      your joy &mdash; where it lives, what threatens it, and how to tend it.
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
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD }}>
                              {entry.sourceOfJoy}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
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
                            What threatens to steal it
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatStealsIt}
                          </p>
                        </div>

                        {entry.howToGuardIt && (
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
                              How I will guard it this week
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.howToGuardIt}
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
                Teaching on biblical joy, the joy of Nehemiah 8, C.S. Lewis and joy as pointer, Paul&rsquo;s
                prison letter, the fruit of the Spirit, and Desmond Tutu on joy in suffering. Good
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
              Joy as the shape of a Kingdom life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Dallas Willard argued that joy is the default condition of the person who is genuinely
              living in the Kingdom of God &mdash; not an occasional blessing but the natural state of
              the person who knows who they are, who they belong to, and where they are going. The goal
              of the practices in this guide is not to produce joy through technique but to create the
              conditions in which the Spirit-given joy of the Kingdom can be received, recognized, and
              guarded. The branch that abides in the vine bears fruit; the fruit includes joy; the joy
              is complete.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how joy and lament coexist in{" "}
              <Link href="/christian-lament" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Lament
              </Link>
              , explore how hope sustains joy in difficulty in{" "}
              <Link href="/christian-hope" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Hope
              </Link>
              , or discover how gratitude connects to joy in{" "}
              <Link href="/christian-gratitude" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Gratitude
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
