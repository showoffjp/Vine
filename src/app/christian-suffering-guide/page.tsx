"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const RED = "#EF4444";

const STORAGE_KEY = "vine_sufferingguide_entries";

interface SUFEntry {
  id: string;
  date: string;
  sufferingType: string;
  whereIsGod: string;
  whatISeeNow: string;
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
    badge: "Luther — Heidelberg Disputation, 1518",
    title: "Theologia Crucis vs. Theologia Gloriae",
    paragraphs: [
      "Martin Luther&rsquo;s most radical theological insight was not about indulgences but about where God is found. In the Heidelberg Disputation he named two ways of doing theology: the theologia gloriae, the theology of glory, which looks for God in power, majesty, success, and visible triumph — and the theologia crucis, the theology of the cross, which finds God precisely where he seems most absent: in weakness, humility, suffering, and death.",
      "The theologian of glory calls evil good and good evil. He expects God to show up in the bright places — in healing, in prosperity, in answered prayer that removes the trial. When suffering arrives and the bright places go dark, his theology has no resources. The theologian of the cross, by contrast, has learned from the crucifixion that God is found sub contrario — under his opposite. The hidden God is revealed not despite the darkness but in it.",
      "This does not mean suffering is good in itself or that we should not pray for healing. It means that when the fire does not go out, we have not been abandoned. The God who was most present at Golgotha — where he seemed most absent — is the God who meets us in our Good Fridays. The cross is not the end of the story; but it is always on the way to the resurrection, and there is no shortcut.",
    ],
    callout: {
      label: "The distinction",
      text: "Theologia gloriae: God found in strength, success, and majesty. Theologia crucis: God found in weakness, shame, and the cross — revealed precisely where he is least expected.",
    },
  },
  {
    badge: "James 1:2-4",
    title: "Consider It Pure Joy — The Testing of Faith",
    paragraphs: [
      "&ldquo;Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.&rdquo; James 1:2-4 is one of the most scandalous verses in the New Testament, and also one of the most misread. The command is not to feel happy about pain. It is to consider — to reckon, to evaluate, to look at the trial from a perspective wider than the present moment — and to locate in it the raw material of something precious.",
      "The Greek word for &ldquo;testing&rdquo; here is peirasmos — a trial that reveals and proves what is real. Gold is tested in fire not to destroy it but to show what it is. When James says the testing of your faith produces perseverance, the word translated &ldquo;produces&rdquo; is katergazetai — it achieves, it works out, it accomplishes. The trial is not random. It is working something in you that could not be worked any other way.",
      "James is careful: perseverance must &ldquo;finish its work.&rdquo; The process is not instantaneous. Christian maturity — the state of being complete, not lacking anything — is the destination of a long road that runs through, not around, suffering. This is why the command is to let perseverance do its work, not to cut the trial short by forcing a premature resolution.",
    ],
  },
  {
    badge: "2 Corinthians 12:7-10",
    title: "Paul&rsquo;s Thorn in the Flesh — Power in Weakness",
    paragraphs: [
      "Paul had a &ldquo;thorn in the flesh&rdquo; — its exact nature unknown, which is itself instructive: every sufferer can inhabit the text. He calls it &ldquo;a messenger of Satan to torment me.&rdquo; He prayed three times for its removal. The Lord said no. &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; The Greek for &ldquo;made perfect&rdquo; is teleitai — it reaches its full expression, its complete form. God&rsquo;s power does not merely survive in weakness; it requires weakness as the condition of its fullest display.",
      "This passage fundamentally resets the categories. We assume strength is the vessel God uses and weakness is the obstacle. Paul, who had every reason to resent the thorn, arrives at a different conclusion: &ldquo;Therefore I will boast all the more gladly about my weaknesses, so that Christ&rsquo;s power may rest on me.&rdquo; The word &ldquo;rest&rdquo; is episkenoo — to take up dwelling, to tabernacle. Christ&rsquo;s power does not merely pass through weakness; it makes its home there.",
      "The practical implication for suffering is profound: God&rsquo;s refusal to remove the thorn was not neglect but design. The &ldquo;no&rdquo; to the prayer for removal was the &ldquo;yes&rdquo; to a greater work — a dependency on grace that triumph would have prevented. This is why Paul, counterintuitively, says: &ldquo;For when I am weak, then I am strong.&rdquo; Not strong in spite of weakness but strong through it, because the weakness has emptied space for Christ to fill.",
    ],
    callout: {
      label: "The paradox",
      text: "God&rsquo;s power is made perfect in weakness — not around it, not despite it, but in it. The thorn remains; the grace is sufficient; the power is displayed precisely where the vessel is cracked.",
    },
  },
  {
    badge: "Romans 8:28",
    title: "All Things Work Together — What This Does and Does Not Mean",
    paragraphs: [
      "&ldquo;And we know that in all things God works for the good of those who love him, who have been called according to his purpose.&rdquo; Romans 8:28 is the most quoted and most misapplied verse in the Christian experience of suffering. What it does not mean: that everything happens for a reason in a way that makes sense to us; that bad things are secretly good; that God causes evil; or that the right disposition toward suffering is a forced cheerfulness that insists everything is fine. These readings are dangerous and pastorally brutal.",
      "What it does mean: God is not passive in suffering. He is actively working — the Greek is sunergei, a compound word meaning to cooperate, to work alongside. He is not watching from a distance; he is inside the situation, working it toward a good that is real. The scope is radical: &ldquo;all things,&rdquo; not some things, not the pleasant things. Including the thorn that stays. Including the death that comes too soon. Including the betrayal, the diagnosis, the prodigal who has not come home.",
      "The qualifier matters: &ldquo;for those who love him, who have been called according to his purpose.&rdquo; The promise is covenantal, not generic. And the &ldquo;good&rdquo; is defined in the next verse: conformity to the image of God&rsquo;s Son. The good God is working toward is not comfort or resolution but Christlikeness — a good so large that the most excruciating suffering can be raw material for it without ceasing to be excruciating.",
    ],
  },
  {
    badge: "Hebrews 12:5-11",
    title: "Suffering as Discipline — The Father Who Trains",
    paragraphs: [
      "Hebrews 12 draws on Proverbs 3:11-12 to address suffering as divine discipline: &ldquo;No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.&rdquo; The word for discipline is paideia — the Greek word for education, formation, training. God is not punishing randomly; he is forming deliberately. He disciplines those he loves as a father disciplines a son.",
      "Two errors bracket this passage. The first is to interpret all suffering as discipline for specific sin — the mistake of Job&rsquo;s comforters. Hebrews does not say all suffering is discipline; it says we should not be surprised when it is. The second error is to interpret discipline as punishment without purpose — suffering as retribution rather than formation. Hebrews corrects both: discipline is evidence of sonship (&ldquo;if you are not disciplined — and everyone undergoes discipline — then you are not legitimate children&rdquo;), and its goal is &ldquo;a harvest of righteousness and peace.&rdquo;",
      "The key phrase is &ldquo;for those who have been trained by it.&rdquo; The Greek is gegymnasmenois — the word for athletic training. The training is real and hard. The benefit is not automatic; it comes to those who submit to the process rather than those who endure it with clenched teeth and resentment. The posture of reception — holding suffering openly, asking what God is forming, refusing both denial and despair — is itself part of the training.",
    ],
  },
  {
    badge: "Philippians 3:10",
    title: "The Fellowship of Christ&rsquo;s Sufferings",
    paragraphs: [
      "&ldquo;I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death, and so, somehow, attaining to the resurrection from the dead.&rdquo; Paul uses the word koinonia — fellowship, communion, partnership — for suffering with Christ. He does not say he endures Christ&rsquo;s sufferings or imitates them. He participates in them. Because believers are in Christ, his sufferings are, in some profound sense, their sufferings, and their sufferings participate in his.",
      "This is why Paul calls his sufferings &ldquo;the sufferings of Christ overflow into our lives&rdquo; (2 Corinthians 1:5) and why he writes of &ldquo;filling up in my flesh what is still lacking in regard to Christ&rsquo;s afflictions, for the sake of his body, which is the church&rdquo; (Colossians 1:24). The cross is not a past event that solved a problem and left us to manage alone. It is an ongoing reality that shapes the life of the church as it carries the proclamation of that cross into new places.",
      "The practical weight of this is enormous: our suffering is not random noise outside the purposes of God. When suffered in union with Christ, it carries redemptive freight. It does not mean we seek suffering or that any suffering is inherently redemptive. It means that suffering which is offered to Christ, carried in his company, and oriented toward his purposes becomes part of his story — and therefore part of the story that ends in resurrection.",
    ],
    callout: {
      label: "Koinonia",
      text: "Philippians 3:10 uses koinonia — fellowship, communion — for suffering with Christ. Our suffering is not borne alone but shared with the one who bore all suffering and was raised from the dead.",
    },
  },
  {
    badge: "The Psalms",
    title: "Lament as the Response — Not Explanation",
    paragraphs: [
      "The biblical response to suffering is not explanation but lament. Nearly a third of the Psalter consists of lament psalms — poems of honest complaint addressed directly to God. They do not explain why suffering happens. They do not offer comfort by locating the cause. They do what suffering actually requires: they give it voice in the presence of God. &ldquo;My God, my God, why have you forsaken me?&rdquo; (Psalm 22:1) is not a theological answer. It is the cry of a man in agony who has not stopped talking to God.",
      "The structure of the lament psalm is itself instructive: address (calling out to God by name), complaint (expressing the pain with unflinching honesty), petition (asking God to act), and movement toward trust (not because the pain is gone but because God is real). This movement is not always completed in a single sitting — Psalm 88 ends in darkness, with no resolution — but the address never stops. The very act of crying out to God is itself an act of faith.",
      "Walter Brueggemann has argued that the suppression of lament in Christian worship is pastorally devastating: it tells the suffering that their experience is not permitted in the presence of God, that only praise is allowed. This produces spiritual isolation and a faith that cannot survive honest contact with the world&rsquo;s pain. Recovering lament is not giving up on hope. It is insisting that hope must be honest — that God is large enough for the full weight of human anguish, and that bringing it to him is the most faithful thing we can do.",
    ],
  },
  {
    badge: "Theodicy",
    title: "Redemptive Suffering vs. Meaningless Suffering",
    paragraphs: [
      "Not all suffering is the same. Some suffering is redemptive — it forms character, deepens compassion, produces the fruit that James and Paul describe, participates in Christ&rsquo;s suffering for the sake of others. And some suffering appears to be simply the consequence of a broken world, the random collision of freedom and physics and fallen human nature. The Bible does not demand that every pain be instantly meaningful or that sufferers immediately articulate what God is doing in their trial.",
      "What the Bible does insist is that no suffering is beyond God&rsquo;s reach. Romans 8:28 does not say suffering is good; it says God works in all things. The distinction between active will and permissive will — between what God does and what God allows — is theologically important but ultimately insufficient comfort. The cross is the answer to the problem of meaningless suffering: at Golgotha, the most unjust, arbitrary, and brutal death in history was woven by God into the redemption of the world. If that death was not wasted, then nothing is.",
      "The response to suffering that the Bible actually models is not explanation but presence — staying with the sufferer, absorbing their lament, refusing the false comfort of easy answers, and trusting with them that the God who raised Jesus is present in this darkness too. Job&rsquo;s three friends were right to sit with him in silence for seven days; they went wrong when they opened their mouths and tried to explain. The ministry of presence, of accompanying people into their Good Fridays without rushing them to Easter, is the most honest and the most costly form of Christian love.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Practice of Lament",
    summary:
      "Bringing honest pain to God — using the Psalms to give your suffering language, and learning the discipline of addressing God when you cannot praise him.",
    steps: [
      "Choose a lament psalm: Psalm 22, 42, 43, 77, 88, or Lamentations 3. Read it slowly and let it be a script for your own prayer. Do not skip to the trust section before you have sat in the complaint.",
      "Write your own lament. Follow the psalm&rsquo;s pattern: address God by name, describe the pain specifically and honestly, make a petition (ask for what you actually want), and close with whatever trust you can honestly muster — even if it is very small.",
      "Say it aloud. There is something about voiced prayer that is different from internal prayer — it uses your body, your breath. Lament is physical as well as spiritual.",
      "Do not rush the movement from complaint to trust. Psalm 88 never makes it, and it is still in the canon. If today is a Psalm 88 day, let it be. The address itself — crying out to God rather than withdrawing from him — is the act of faith.",
    ],
    anchor: "Psalm 22:24 — He has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.",
  },
  {
    number: "02",
    title: "Sitting with Others in Suffering",
    summary:
      "The ministry of presence — accompanying someone in their pain without rushing them to resolution, offering what Job&rsquo;s friends offered before they spoke.",
    steps: [
      "Name one person in your life who is suffering. Before you do anything, resist the instinct to fix, explain, or encourage. Ask yourself: have I actually sat in their reality without offering a solution?",
      "Show up and say less than you think you should. &ldquo;I don&rsquo;t know what to say, but I&rsquo;m here&rdquo; is more comforting than most theology. Job&rsquo;s friends were right for seven days; they went wrong when they spoke.",
      "Ask questions rather than offering explanations. &ldquo;What has this been like?&rdquo; opens a person; &ldquo;God must have a reason&rdquo; closes them. Your job is to make it safe for them to tell the truth about their pain.",
      "Return. Sustained presence is more powerful than one dramatic visit. Grief is long. Show up again next week, and the week after. The willingness to stay is itself the gospel enacted.",
    ],
    anchor: "Romans 12:15 — Rejoice with those who rejoice; mourn with those who mourn.",
  },
  {
    number: "03",
    title: "Praying the Cross Over Your Suffering",
    summary:
      "Bringing your specific pain to the cross — practicing the theology of the cross by locating your suffering within the suffering of Christ, not above or outside it.",
    steps: [
      "Name the suffering specifically: not &ldquo;my life is hard&rdquo; but &ldquo;the diagnosis, the estrangement, the grief that will not lift.&rdquo; Specificity is required for the cross to address it.",
      "Bring it to Gethsemane: Jesus prayed three times for the cup to be removed and it was not. Pray your own prayer for removal honestly, and then add &ldquo;not my will but yours&rdquo; — not as resignation but as trust.",
      "Confess what the suffering has revealed in you: the fear, the resentment, the control, the idols that the trial has exposed. The cross that bears your suffering also absorbs your sin in it.",
      "End with an act of small trust — not a declaration of resolved faith but a single step: &ldquo;I will read one psalm today.&rdquo; &ldquo;I will eat breakfast.&rdquo; &ldquo;I will call one person.&rdquo; Resurrection begins with small, embodied acts.",
    ],
    anchor: "2 Corinthians 12:9 — My grace is sufficient for you, for my power is made perfect in weakness.",
  },
  {
    number: "04",
    title: "Gratitude Coexisting with Lament",
    summary:
      "Not toxic positivity — but the discipline of holding both the honest pain and the honest good simultaneously, as the Psalms do.",
    steps: [
      "Do not make gratitude the cure for lament. The goal is not to feel better by listing good things. The goal is to tell the whole truth — which includes both what is broken and what is still gift.",
      "Once a day, name one concrete mercy: warmth, a conversation, breath, a kindness you did not manufacture. Make it small and specific. Gratitude that can only see large blessings will fail in the desert.",
      "Practice what the Psalms practice: the &ldquo;yet&rdquo; construction. &ldquo;I am in the deep — yet you are God.&rdquo; The &ldquo;yet&rdquo; does not cancel the lament; it refuses to let it be the last word.",
      "Record both in the Journal tab on this page: the suffering as it actually is, and one &ldquo;yet&rdquo; that is genuinely true today. Over time, the entries will show you the fidelity of God in the darkness.",
    ],
    anchor: "Lamentations 3:19-23 — I remember my affliction and my wandering... yet this I call to mind and therefore I have hope: because of the LORD&rsquo;s great love we are not consumed.",
  },
  {
    number: "05",
    title: "Learning from Those Who Have Suffered Well",
    summary:
      "The witness of those who have walked through the fire — reading their testimonies as a form of formation, letting their faith teach yours.",
    steps: [
      "Read C.S. Lewis&rsquo;s A Grief Observed — written in real time after his wife&rsquo;s death, not polished theology but raw grief slowly finding its way. Read it slowly and let it give you permission to be honest.",
      "Read Joni Eareckson Tada&rsquo;s A Place of Healing or Lament for a Son by Nicholas Wolterstorff. These are not testimonies of triumphant resolution but of faith that continued through great pain.",
      "Find a person in your congregation or community who has suffered significantly and whose faith survived it. Ask them: what did God give you in the darkness that you could not have received in the light?",
      "Pray for and with those who are suffering now. Intercession is the practice of bearing another&rsquo;s suffering in prayer — carrying it to God on their behalf when they cannot carry it themselves.",
    ],
    anchor: "Philippians 3:10 — I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings.",
  },
  {
    number: "06",
    title: "The Discipline of Waiting",
    summary:
      "Suffering often asks for patience before it asks for anything else — the practice of bearing the sustained, unresolved weight of pain without forcing a resolution.",
    steps: [
      "Resist the impulse to resolve the suffering prematurely — by explaining it away, by forcing praise before grief is finished, by cutting short the time of darkness. Some trials are long. The discipline is to remain.",
      "Practice the posture of Romans 8:25: &ldquo;if we hope for what we do not yet have, we wait for it patiently.&rdquo; Waiting is active, not passive — it requires continuous trust that what is promised is real, even when it is not yet visible.",
      "Set a rhythm of daily small faithfulness: prayer even when prayer feels empty, the reading of a psalm even when psalms seem thin, worship even when worship costs something. These are not performances but practices that maintain the orientation of the soul toward God while the trial lasts.",
      "Name the fear of the long haul honestly: &ldquo;I am afraid this will never end, that God has forgotten, that this is all there is.&rdquo; Bring the fear to God in prayer rather than suppressing it. The God who sustained Job, Jeremiah, Paul, and the whole communion of saints in their sufferings is the same God who is present in yours.",
    ],
    anchor: "Isaiah 40:31 — But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "The Problem of Pain (1940) and A Grief Observed (1961)",
    quote:
      "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is his megaphone to rouse a deaf world.",
    bio: "C.S. Lewis wrote The Problem of Pain as a philosopher constructing a theodicy. He wrote A Grief Observed as a man destroyed by his wife&rsquo;s death from cancer, and the second book largely undoes the tidy confidence of the first. In A Grief Observed, God seems to slam the door and double-bolt it. Lewis records his rage, his doubt, his fear that God was &ldquo;the Cosmic Sadist.&rdquo; And then, slowly, the experience of grief deepens rather than destroys his faith: he concludes that his demands of God had revealed that he had made God into a projection of his own needs. The two books together are the most honest Christian engagement with suffering in modern literature — because they do not resolve cleanly.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "Quadriplegic since 1967; founder of Joni and Friends",
    quote:
      "God permits what he hates to accomplish what he loves. The cross is proof of this.",
    bio: "Joni Eareckson Tada became a quadriplegic at seventeen after a diving accident. Now in her seventies, she has lived more than five decades in a wheelchair, through chronic pain, cancer, and the daily diminishments of disability. Her theology of suffering is not triumphalism — she does not claim her suffering was secretly good. She claims it was transformed. &ldquo;Suffering gets us ready for eternity. It loosens our grip on things down here.&rdquo; Joni&rsquo;s most important contribution may be her insistence on the theology of the body: that disability is not a lesser form of humanity but a site of God&rsquo;s glory, and that the resurrection of the body is the most concrete promise of Christian hope.",
  },
  {
    name: "Paul Brand",
    role: "Surgeon and missionary — leprosy work in India",
    quote:
      "Pain is not the enemy but the loyal scout announcing danger. The leprosy patient who cannot feel is not free from pain — he is defenseless against damage.",
    bio: "Paul Brand spent decades as a surgeon treating leprosy patients in India, and his work produced a profound theological reflection on pain. His book The Gift of Pain (written with Philip Yancey) turns the usual question upside down: instead of asking why God allows pain, it argues that pain is one of God&rsquo;s great gifts — the body&rsquo;s signal system that something is wrong. Leprosy destroys this system, and the result is not relief but catastrophic tissue destruction as patients injure themselves without knowing it. Brand&rsquo;s insight reframes the problem: the question is not why God gives us pain but what pain is trying to tell us — and what we lose when we lose the capacity to feel it.",
  },
  {
    name: "N.T. Wright",
    role: "Evil and the Justice of God (2006); Simply Christian",
    quote:
      "The Christian vocation is not to have an answer to the problem of evil but to live in the light of the solution — to be people in whom and through whom God is already at work dealing with evil.",
    bio: "N.T. Wright argues that the standard framing of the &ldquo;problem of evil&rdquo; — a philosophical puzzle to be solved — misreads both the question and the biblical response. The Bible does not answer evil with a doctrine; it answers evil with a story: the story of the cross and resurrection, in which God himself has entered the darkest place and come out the other side. Wright&rsquo;s contribution is to hold together the honest acknowledgment that evil is real and terrible with the conviction that it has been defeated — not yet fully in experience but decisively in the event of Jesus&rsquo;s death and resurrection. The Christian calling is to live as people who know the ending while still in the middle of the film.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Letters and Papers from Prison (1944-1945)",
    quote:
      "God lets himself be pushed out of the world on to the cross. He is weak and powerless in the world, and that is precisely the way, the only way, in which he is with us and helps us.",
    bio: "Dietrich Bonhoeffer wrote Letters and Papers from Prison in the months before his execution by the SS in April 1945. His theology developed in the cell, under conditions where abstract consolations were unavailable. He came to articulate what he called a &ldquo;this-worldly Christianity&rdquo; — not escapism or a focus on the afterlife, but a full engagement with the suffering of the world, following the God who was pushed out of the world on to the cross. Bonhoeffer&rsquo;s final letters are among the most profound documents in the theology of suffering precisely because he was not writing from a position of resolved answers but of deepening trust in a God who entered darkness and did not come out immediately.",
  },
  {
    name: "Tim Keller",
    role: "Walking with God through Pain and Suffering (2013)",
    quote:
      "If you have a God great and transcendent enough to be mad at because he doesn&rsquo;t stop the evil and suffering in the world, then you have to have a God great and transcendent enough to have good reasons for allowing it that you can&rsquo;t understand.",
    bio: "Tim Keller&rsquo;s Walking with God through Pain and Suffering is the most comprehensive recent evangelical treatment of the subject. Keller grounds the theology of suffering in the character of God, the cross, the resurrection, and the communion of suffering saints throughout history. His pastoral insight is that suffering either destroys faith or deepens it — and that which outcome occurs depends largely on whether we have a robust theology of suffering before the suffering arrives. He encourages pre-emptive formation: reading the lament psalms before you need them, learning the stories of Bonhoeffer and Tada and Lewis before the trial comes, so that you have resources when your own Good Friday arrives.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "James 1:2-4",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    reflection:
      "Joy here is not feeling; it is a posture toward the trial — a recognition that something is being worked. The command is to &ldquo;consider,&rdquo; to reckon from a wider perspective than the immediate pain. The goal is maturity and completeness: the trial is not an interruption of the good life but one of its primary instruments.",
  },
  {
    reference: "Romans 8:18",
    text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    reflection:
      "The comparison is mathematical, not dismissive: Paul is not saying the suffering is small but that the glory is incomparably large. The eschatological perspective is the lens through which suffering is rightly seen — not as the whole story but as one chapter in a story whose ending is glory.",
  },
  {
    reference: "2 Corinthians 12:9",
    text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ&rsquo;s power may rest on me.",
    reflection:
      "God&rsquo;s &ldquo;no&rdquo; to the prayer for removal was the &ldquo;yes&rdquo; to a deeper grace. The thorn that stays is the condition under which Christ&rsquo;s power takes up residence. Weakness is not an obstacle to be overcome before God can work; it is the very thing through which his power is displayed.",
  },
  {
    reference: "Psalm 22:1, 24",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? ... For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.",
    reflection:
      "The same psalm begins in desolation and ends in the conviction that God has heard. The desolation is real — Jesus prays this from the cross — but so is the conviction. Lament does not require the certainty of being heard before it begins; it creates that certainty by beginning.",
  },
  {
    reference: "Lamentations 3:19-23",
    text: "I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Yet this I call to mind and therefore I have hope: Because of the LORD&rsquo;s great love we are not consumed, for his compassions never fail.",
    reflection:
      "The &ldquo;yet&rdquo; is everything. It does not deny the affliction — &ldquo;I well remember them.&rdquo; It introduces a second reality into the same space: the steadfast love that has not failed. Jeremiah writes from the ruins of Jerusalem; the ground under the &ldquo;yet&rdquo; is not circumstances but the character of God.",
  },
  {
    reference: "Philippians 3:10-11",
    text: "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death, and so, somehow, attaining to the resurrection from the dead.",
    reflection:
      "Paul uses koinonia — fellowship, communion — for suffering with Christ. This is not merely endurance but participation: because we are in Christ, his death and resurrection are the shape of our story. The &ldquo;somehow&rdquo; (pos) before &ldquo;attaining to the resurrection&rdquo; is the honest humility of a man who knows the end of the story but has not yet arrived there.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "F_fCrB4EHVE", title: "The Problem of Pain — C.S. Lewis and the Theology of Suffering" },
  { videoId: "7v4SFYS_b0I", title: "Joni Eareckson Tada: Suffering and the Sovereignty of God" },
  { videoId: "9O_V4c_UTQM", title: "Tim Keller: Why Does God Allow Suffering?" },
  { videoId: "RD1bMBLXgJA", title: "The Theology of the Cross — Theologia Crucis" },
  { videoId: "wKJYfm6UZBU", title: "Lament: Recovering Honest Prayer in Suffering" },
  { videoId: "X6T1TrJSGk8", title: "Romans 8:28 — What It Really Means That All Things Work Together" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSufferingGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<SUFEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [sufferingType, setSufferingType] = useState("");
  const [whereIsGod, setWhereIsGod] = useState("");
  const [whatISeeNow, setWhatISeeNow] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as SUFEntry[]);
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
    if (!sufferingType.trim()) return;
    const entry: SUFEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      sufferingType: sufferingType.trim(),
      whereIsGod: whereIsGod.trim(),
      whatISeeNow: whatISeeNow.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setSufferingType("");
    setWhereIsGod("");
    setWhatISeeNow("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? RED : BORDER}`,
    background: active ? "rgba(239, 68, 68, 0.12)" : "transparent",
    color: active ? RED : MUTED,
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
    color: RED,
    marginBottom: 6,
  };

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* Hero */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: RED,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Christian Suffering
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Through the Fire: A Christian Guide to Suffering
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              No theological question presses harder on faith than suffering. The Bible does not
              offer easy answers &mdash; but it offers something better: honest engagement, divine
              solidarity in the cross, and the eschatological certainty that what God began in the
              resurrection will not stop until every tear is wiped away. This guide traces the
              theology of the cross, the lament psalms, Paul&rsquo;s thorn, and the company of
              those who have walked through the fire and come out still holding faith.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${RED}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;My grace is sufficient for you, for my power is made perfect in
                weakness.&rdquo;
              </p>
              <p style={{ color: RED, fontSize: "0.85rem", fontWeight: 600 }}>
                2 Corinthians 12:9
              </p>
            </div>
          </header>

          {/* Tabs */}
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

          {/* Theology */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Before suffering is endured it must be understood — not explained away, but
                theologically located within the story of the cross and resurrection. These eight
                studies trace suffering through Luther&rsquo;s theologia crucis, Paul&rsquo;s
                thorn, Romans 8:28, Hebrews 12, and the biblical practice of lament.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: RED,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: p }}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(239, 68, 68, 0.07)",
                        border: `1px solid rgba(239, 68, 68, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: RED,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${RED}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The theologia crucis, the thorn in the flesh, the lament psalms, and the
                  fellowship of suffering all point in the same direction: the God of the cross is
                  not absent from our pain but present within it, working something that cannot be
                  worked any other way. Suffering does not prove his absence; it may be precisely
                  where his power is most fully displayed. Explore the companion guide on{" "}
                  <Link href="/christian-hope-guide" style={{ color: RED, textDecoration: "underline" }}>
                    Christian Hope
                  </Link>{" "}
                  for the eschatological ground on which this theology stands.
                </p>
              </div>
            </section>
          )}

          {/* Practices */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Suffering is not primarily a problem to be solved but a reality to be accompanied
                &mdash; by God and by others. These six practices are not techniques for removing
                pain but disciplines for bearing it with faithfulness, honesty, and the hope of
                resurrection.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: RED,
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
                      color: RED,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* Voices */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Suffering is best understood through those who have walked through it with faith
                intact. Six witnesses &mdash; philosopher, quadriplegic surgeon, martyr, pastor,
                apologist &mdash; show what it looks like to find God in the fire.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: RED,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {voice.role}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(239, 68, 68, 0.06)",
                      borderLeft: `3px solid ${RED}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* Scripture */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages to read slowly in the dark. These are not verses to make suffering
                pleasant but to make it bearable &mdash; by locating it within the larger story of
                a God who entered darkness and came out the other side.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: RED,
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${RED}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Each of these passages becomes more powerful when prayed than when merely read.
                  Take the text to God in your own words: &ldquo;Lord, this is what you have
                  promised; this is what I am experiencing; I am asking you to be in it.&rdquo; The
                  lament psalms in particular are meant to be spoken aloud &mdash; they were sung by
                  the whole congregation of Israel and by Jesus himself from the cross. Your
                  suffering, given language by Scripture, is placed within the story that ends in
                  resurrection.
                </p>
              </div>
            </section>
          )}

          {/* Journal */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Name the suffering. Ask honestly where God is in it. Write what &mdash; if anything
                &mdash; you see now. Entries are saved privately in your browser. No one sees this
                but you and God. Honesty here is the practice of lament.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  A lament entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="suf-type" style={labelStyle}>
                    Name the suffering
                  </label>
                  <textarea
                    id="suf-type"
                    value={sufferingType}
                    onChange={(e) => setSufferingType(e.target.value)}
                    placeholder="Be specific — not &quot;life is hard&quot; but the actual pain: a diagnosis, a grief, a loss, a betrayal, an unanswered prayer that has been unanswered for a long time"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="suf-god" style={labelStyle}>
                    Where is God in this?
                  </label>
                  <textarea
                    id="suf-god"
                    value={whereIsGod}
                    onChange={(e) => setWhereIsGod(e.target.value)}
                    placeholder="Honest answer — he feels absent, or near, or silent, or I don&apos;t know. The lament psalms give permission for full honesty here."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="suf-see" style={labelStyle}>
                    What do you see now? (if anything)
                  </label>
                  <textarea
                    id="suf-see"
                    value={whatISeeNow}
                    onChange={(e) => setWhatISeeNow(e.target.value)}
                    placeholder="Any glimmer of what God may be doing, any small mercy, any &ldquo;yet&rdquo; — or honestly, nothing yet. Both are valid entries."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!sufferingType.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !sufferingType.trim() ? BORDER : RED,
                    color: !sufferingType.trim() ? MUTED : "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !sufferingType.trim() ? "not-allowed" : "pointer",
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
                      Name one suffering honestly. Ask where God is in it. Over time, the entries
                      become a record of God&rsquo;s faithfulness in the dark.
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
                              {entry.date}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label="Delete this entry"
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
                              color: RED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The suffering
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.sufferingType}
                          </p>
                        </div>

                        {entry.whereIsGod && (
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
                              Where is God?
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.whereIsGod}
                            </p>
                          </div>
                        )}

                        {entry.whatISeeNow && (
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
                              What I see now
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.whatISeeNow}
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

          {/* Videos */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on suffering, the problem of evil, lament, and the theology of the cross.
                Good companions to the Theology tab.
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

          {/* Closing */}
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
              The fire and the furnace
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Shadrach, Meshach, and Abednego did not escape the furnace. God&rsquo;s promise was
              not removal but company: &ldquo;Look! I see four men walking around in the fire,
              unbound and unharmed, and the fourth looks like a son of the gods.&rdquo; The
              Christian hope in suffering is not that the fire will go out on our schedule but that
              we are not alone in it. The God who entered the fire at Golgotha is the God who walks
              with his people through theirs.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link href="/christian-hope-guide" style={{ color: RED, textDecoration: "underline" }}>
                Christian Hope
              </Link>{" "}
              for the resurrection ground that sustains this faith, or the{" "}
              <Link href="/christian-prayer" style={{ color: RED, textDecoration: "underline" }}>
                Christian Prayer guide
              </Link>{" "}
              for the practice of lament and intercession in more depth.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
