"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const BLUE = "#3B82F6";

const STORAGE_KEY = "vine_anxietyprayer_entries";

interface APEntry {
  id: string;
  date: string;
  theAnxiety: string;
  thePrayer: string;
  scriptureAnchor: string;
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
    badge: "Philippians 4:6-7 — The Invitation Inside the Command",
    title: "Anxiety as Prayer Invitation — Not Spiritual Failure",
    paragraphs: [
      "&ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God&rdquo; (Phil 4:6). The command &ldquo;do not be anxious&rdquo; is so often read as a rebuke that the invitation embedded in its grammar goes unheard: the antidote Paul offers is not willpower, not positive thinking, not a better theological argument — it is prayer. Anxiety is met with prayer. The Philippian Christians who felt the weight of imprisonment, poverty, and persecution were not told to feel less; they were told to bring what they felt to God. The anxiety is the very thing that becomes the occasion for prayer.",
      "This reframes the experience of anxiety entirely. Many Christians carry a double burden: the anxiety itself, and the shame of having it, because they believe that anxious people are spiritually deficient. But Philippians 4 does not treat anxiety as sin to be confessed before prayer can happen; it treats anxiety as the presenting condition that prayer directly addresses. You do not need to stop being anxious before you pray; you pray because you are anxious. The anxiety is not the obstacle to the relationship with God — it is the doorway.",
      "Paul&rsquo;s phrase &ldquo;in everything&rdquo; is deliberately comprehensive: no anxiety is too small to bring, none too large, none too embarrassing, none too irrational. The person who feels anxious about a social interaction they cannot explain logically is as welcome in prayer as the person facing a life-threatening diagnosis. &ldquo;In everything&rdquo; closes the door on the temptation to sort anxieties into prayable and unprayable categories — all of them qualify.",
    ],
    callout: {
      label: "The reframe",
      text: "Anxiety is not the failure of faith; it is the invitation to prayer. The anxious feeling is not the obstacle — it is the door.",
    },
  },
  {
    badge: "Clinical vs. Spiritual Anxiety",
    title: "Two Kinds of Anxiety — Both Needing Care",
    paragraphs: [
      "Christian writing on anxiety often conflates two distinct realities, and the conflation produces harm. Clinical anxiety — generalized anxiety disorder, panic disorder, OCD, social anxiety disorder, and their relatives — is a neurobiological condition involving dysregulated threat response systems, often with identifiable genetic components, treatable with therapy and sometimes medication. Spiritual anxiety — the soul&rsquo;s felt sense of vulnerability, need, and dependence on God — is the experiential texture of creaturely life before an uncertain future, addressed throughout Scripture as the occasion for prayer and trust.",
      "These two are not opposed and often overlap. A person with clinical anxiety disorder is not thereby spiritually deficient, and a person whose spiritual anxiety is purely &ldquo;existential&rdquo; may benefit from therapeutic support. The error in both directions is costly: the church that tells the clinically anxious person to simply pray more and trust God is dismissing a medical reality; the therapist who treats all anxiety as neurological dysfunction misses the spiritual dimension of human existence that Scripture takes seriously. The wise Christian response is not either/or but both/and — medical care and spiritual care are not competitors.",
      "What this page addresses is the spiritual dimension: the practices of prayer, lament, trust, and Scripture engagement that accompany (not replace) appropriate medical and therapeutic care. The theology of anxiety-as-prayer-invitation applies to both kinds of anxiety; the practices here are meant to be used alongside, not instead of, whatever clinical care a person needs. If you are struggling with clinical anxiety, professional help is not a failure of faith — it is wisdom.",
    ],
  },
  {
    badge: "Psalm 46 — Active Trust, Not Passivity",
    title: "&ldquo;Be Still and Know&rdquo; — What the Psalm Actually Says",
    paragraphs: [
      "Psalm 46 is among the most misread psalms in the Christian tradition. The famous verse &ldquo;Be still, and know that I am God&rdquo; (v. 10) is routinely quoted as a call to peaceful, quiet contemplation — the psalm of serene trust. But the context is catastrophic: &ldquo;the earth gives way,&rdquo; &ldquo;the mountains are moved into the heart of the sea,&rdquo; &ldquo;its waters roar and foam.&rdquo; The psalm is not set in a peaceful garden; it is set in the middle of geological and military catastrophe. The still-knowing happens not after the chaos resolves but in the midst of it.",
      "The Hebrew word translated &ldquo;be still&rdquo; (raphah) means literally to let go, to release, to cease striving. It is the opposite of clutching. And the command is addressed to the nations and the earth — those who are raging against God&rsquo;s purposes — not primarily to the individual anxious soul, though the application extends there. What the psalm calls for is not the passive quiet of someone who feels no anxiety but the active release of the person who is choosing to stop fighting against what God is doing and lean into his exaltation. &ldquo;Be still&rdquo; is an active verb requiring decisive action.",
      "The structure of the psalm shows the progression: God is our refuge and strength (v. 1-3) — the declaration of confidence despite chaos. The city of God stands firm while nations rage (v. 4-7) — the image of protected community. The LORD of hosts is with us (v. 7, 11) — the refrain that anchors both halves. The &ldquo;be still&rdquo; of verse 10 is the command that follows from the declaration: because God is who he is, the desperate clutching of human control can be released. The stillness is the fruit of knowing, not the precondition of it.",
    ],
    callout: {
      label: "Correction",
      text: "&ldquo;Be still and know&rdquo; (Ps 46:10) is not gentle serenity in a quiet room. It is the active release of clutched control in the middle of chaos, grounded in knowing who God is.",
    },
  },
  {
    badge: "1 Peter 5:7 — Epiripsantes",
    title: "Casting Anxiety on God — The Greek Word That Changes Everything",
    paragraphs: [
      "First Peter 5:7 is one of the most beloved verses in the New Testament: &ldquo;Cast all your anxiety on him, because he cares for you.&rdquo; The Greek word translated &ldquo;casting&rdquo; is epiripsantes (ἐπιρίψαντες), a aorist participle from epirip&mdash;to throw upon, to hurl onto. The word is the same used in Luke 19:35 when the disciples &ldquo;threw their cloaks&rdquo; onto the donkey for Jesus&rsquo; entry into Jerusalem — a physical, deliberate, decisive action, not a gentle setting down. Peter is not inviting the reader to gradually, politely hand their anxieties to God; he is calling for something more like throwing them off.",
      "The grammar of the verse is also significant: epiripsantes is an aorist participle modifying the main verb &ldquo;humble yourselves&rdquo; (v. 6). The casting of anxieties is presented as the mechanism or means of the humbling — you humble yourself before God by throwing your anxieties onto him, because the act of throwing them onto God is the acknowledgment that you cannot carry them yourself. Humility and anxiety-casting are the same gesture: the recognition that you are not God and cannot bear what only God can bear.",
      "The ground of the casting is equally important: &ldquo;because he cares for you.&rdquo; The Greek word is melei — it matters to him, it is his concern, he is personally invested. Peter&rsquo;s argument for anxiety-throwing is not God&rsquo;s omnipotence (though that is implied) but God&rsquo;s personal care. You can throw your anxieties on him not only because he is strong enough to bear them but because he actually wants to — because you matter to him specifically, individually, not merely in the abstract. The casting is safe because it is into the hands of one who cares.",
    ],
  },
  {
    badge: "Matthew 26:38-39 — Gethsemane",
    title: "Jesus in Gethsemane — The Model of Anxious Prayer",
    paragraphs: [
      "The most theologically profound thing the Gospels tell us about anxiety is what happened in the Garden of Gethsemane. Jesus said to his disciples, &ldquo;My soul is very sorrowful, even to death&rdquo; (Matt 26:38) — the Greek word perilypos, deeply grieved, overwhelmed with sorrow. Luke&rsquo;s account adds that &ldquo;being in agony he prayed more earnestly, and his sweat became like great drops of blood falling down to the ground&rdquo; (Luke 22:44). This is not serene trust; this is anguished prayer from someone who knows what is coming and dreads it.",
      "And then: &ldquo;My Father, if it is possible, let this cup pass from me; nevertheless, not as I will, but as you will&rdquo; (Matt 26:39). The prayer has two movements: the honest naming of what Jesus wants — relief from the suffering ahead — and the submission of that want to the Father&rsquo;s will. Jesus does not suppress the dread or pretend the cup is not real. He brings the dread honestly into prayer and then releases it: &ldquo;not as I will.&rdquo; This is the model of anxious prayer: fully honest about the fear, fully submitted to the Father.",
      "The significance for Christians struggling with anxiety cannot be overstated: the Son of God prayed from a place of anguish. Anxious prayer — prayer that names the fear honestly, that asks for relief, that brings the full emotional weight of the situation before God — is not the prayer of someone whose faith is weak. It is the prayer of Jesus in his darkest hour. If Gethsemane is the model, then the Christian who brings their anxiety honestly into prayer is doing exactly what Jesus did. The form of the prayer is not confident triumph; it is honest agony submitted to the Father&rsquo;s will.",
    ],
    callout: {
      label: "The model",
      text: "Jesus prayed from anguish in Gethsemane — naming the fear honestly, asking for relief, submitting to the Father&rsquo;s will. Anxious prayer is not weak faith; it is the pattern of Christ himself.",
    },
  },
  {
    badge: "Matthew 6:25-34 — What Jesus Actually Meant",
    title: "&ldquo;Do Not Be Anxious&rdquo; — Reading Jesus Charitably and Carefully",
    paragraphs: [
      "Matthew 6:25-34 is one of the most misused passages in Christian pastoral care. &ldquo;Do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on&rdquo; (v. 25). Read as a simple prohibition, this is either impossible advice or a rebuke of normal human experience. But Jesus is not commanding the suppression of an involuntary psychological response; he is addressing something more specific.",
      "The context is the Sermon on the Mount&rsquo;s extended teaching on the kingdom and its economics. The anxiety Jesus addresses is the anxiety of those whose fundamental trust is misplaced — who are serving money rather than God (v. 24) and therefore must constantly manage their own security because they have no secure Father to trust. The &ldquo;do not be anxious&rdquo; is directed at the anxious accumulation and management of life that flows from having God as a concept rather than a father. The Gentiles who &ldquo;seek all these things&rdquo; (v. 32) are not psychologically disordered; they are operating without the knowledge of a providing Father.",
      "The remedy Jesus offers is equally revealing: &ldquo;But seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; (v. 33). The solution to the anxiety is not willpower applied to the feeling but reorientation of the fundamental trust — from money and self-management to the Father who knows what you need (v. 32). Jesus is addressing the anxious orientation of a life organized around self-provision rather than the neurological experience of anxiety. The distinction matters: Jesus is not telling the clinically anxious person that they are failing; he is calling every person to the deeper trust that reduces the relentless striving of self-managed security.",
    ],
  },
  {
    badge: "Digital Age",
    title: "Anxiety in the Age of Social Media — The Christian Response",
    paragraphs: [
      "Contemporary anxiety has a new amplifier that no previous generation of Christian writers addressed: social media and digital technology. The constant stream of news, social comparison, outrage, and curated image creates the precise psychological conditions for anxiety to thrive — perceived threat (news), social evaluation (comparison), unpredictability (algorithmic feeds), and the impossibility of ever being fully informed or sufficiently engaged. The result is a background hum of low-grade anxiety that the tradition&rsquo;s writers never diagnosed because it did not exist in their time.",
      "The Christian response is not to pretend that technology is neutral or that willpower can simply override its effects. The Philippians 4:8 call to think about what is &ldquo;true, honorable, just, pure, lovely, and commendable&rdquo; is not a thought-replacement exercise; it is a call to deliberate attentional formation — choosing what to place before the mind, rather than allowing the algorithm to choose. The Isaiah 26:3 &ldquo;mind stayed on God&rdquo; requires some degree of protection of the mind&rsquo;s attention from the infinite scroll that fragments and destabilizes it.",
      "Practically, this means that anxiety-prayer in the digital age may require the prior step of digital disengagement — not permanently, but long enough to re-establish the quiet in which honest prayer can happen. The person who scrolls for an hour and then spends three minutes in prayer has not created conditions in which the &ldquo;peace that surpasses understanding&rdquo; can operate. The practices in this guide work best within a life that includes deliberate digital boundaries — not as legalism but as the necessary environmental conditions for the attentional formation that prayer requires.",
    ],
    callout: {
      label: "The unique challenge",
      text: "Social media creates the exact psychological conditions for anxiety: perceived threat, social comparison, unpredictability. The Christian response requires deliberate attentional formation — choosing what the mind dwells on.",
    },
  },
  {
    badge: "Philippians 4:7 — The Peace Promise",
    title: "The Peace That Surpasses Understanding — Gift, Not Technique",
    paragraphs: [
      "&ldquo;And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus&rdquo; (Phil 4:7). The peace Paul describes is architecturally unusual: it surpasses understanding, which means it operates above and beyond the level at which the anxious analysis runs. The mind that is working through worst-case scenarios, rehearsing the evidence for disaster, calculating probabilities of harm — the peace that surpasses understanding does not arrive as the conclusion of that analysis. It arrives despite the analysis, while it is still running.",
      "The peace is also described as a guard — the Greek word phroure&mdash; a military term for a garrison that protects a city. The peace of God stands watch over heart and mind, not as a feeling that replaces anxiety but as a reality that holds the person even when anxiety is present. Many Christians mistake the peace of God for the absence of anxious feelings, and then conclude that they do not have it when anxiety persists. But the peace of God and the presence of anxiety are not mutually exclusive; the peace is the guard that keeps the person from being overwhelmed by the anxiety, not the absence of the feeling.",
      "Crucially, the peace is a gift received through prayer, not a technique achieved through effort. The mechanism Paul describes is &ldquo;by prayer and supplication with thanksgiving let your requests be made known to God&rdquo; — and then the peace guards. The prayer is the human act; the peace is God&rsquo;s response. This means the anxious Christian&rsquo;s task is not to achieve peace by praying correctly but to pray honestly and receive the peace that God gives as the fruit of that prayer. The peace cannot be manufactured; it can only be received. The person who tries harder to feel peaceful is working against the mechanism; the person who prays honestly is positioned to receive it.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Anxiety-to-Prayer Transfer — Phil 4:6 in Practice",
    summary:
      "The foundational practice of this page: the moment you notice anxiety, treat it as an invitation to prayer rather than a problem to be solved. This practice builds the habit of routing anxiety through prayer before through rumination.",
    steps: [
      "When you notice anxiety — the physical sensation, the racing thoughts, the rehearsal of worst cases — pause and name it specifically: &ldquo;I am anxious about [name the specific thing].&rdquo; Vague anxiety cannot be specifically prayed; naming is the first act of bringing it to God.",
      "Say or write a one-sentence prayer that takes the anxiety as its subject: &ldquo;Lord, I bring you [the specific anxiety]. I don&rsquo;t know what to do with it and I don&rsquo;t want to carry it alone.&rdquo; This is enough. The prayer does not need to be eloquent or resolved; it needs to be honest.",
      "Add thanksgiving — not for the anxiety, but in it. Paul&rsquo;s &ldquo;with thanksgiving&rdquo; (Phil 4:6) is not denial of the difficulty but the deliberate acknowledgment that God is present and good even in the difficulty. Name one thing, however small, that is true and good: &ldquo;And I thank you that you are here, that you hear me, that you know this situation completely.&rdquo;",
      "Release and return. The anxiety may return within minutes; when it does, repeat the process. Trust is not built once but repeated. Each return to prayer instead of rumination is the practice working — not a sign that the practice has failed.",
    ],
    anchor: "Philippians 4:6 — In everything by prayer and supplication with thanksgiving let your requests be made known to God.",
  },
  {
    number: "02",
    title: "Gethsemane Prayer — Honest Anguish Before God",
    summary:
      "Following Jesus&rsquo; model in the garden: bringing the full, unfiltered weight of fear and dread into prayer, asking for the relief you actually want, and then submitting to the Father&rsquo;s will. For the anxiety that is too heavy for tidy prayer.",
    steps: [
      "Find a place where you will not be interrupted. Begin by telling God what you are actually afraid of — not the theological version, not the version that sounds acceptable, but the raw one: &ldquo;I am terrified that [name the specific worst fear]. I don&rsquo;t want this to happen. I don&rsquo;t know if I can survive it.&rdquo; Jesus named what he did not want in Gethsemane; you may do the same.",
      "Ask for what you actually want: &ldquo;If it is possible, let this cup pass from me.&rdquo; You may ask for the removal of the feared thing, the healing, the different outcome, the relief. God already knows; speaking it is an act of trust, not an act of demanding. Honest desire before God is more honoring than pious pretense.",
      "After the asking, wait. Do not rush to the submission. Sit in the asking for a moment and allow God to be present with you in the fear. The disciples were asked to watch with Jesus in the garden; the watching with is part of the prayer.",
      "Then, when you are ready — or when you are not but choose it anyway — add the submission: &ldquo;Nevertheless, not as I will, but as you will.&rdquo; This is not the negation of the asking; it is the trust that the Father&rsquo;s will is good, even when it does not match the request. Jesus prayed it three times; you may need to return to it many times before it settles.",
    ],
    anchor: "Matthew 26:39 — &ldquo;My Father, if it is possible, let this cup pass from me; nevertheless, not as I will, but as you will.&rdquo;",
  },
  {
    number: "03",
    title: "The Casting Practice — 1 Peter 5:7 as Physical Exercise",
    summary:
      "Using the physical imagery of epiripsantes — throwing, hurling — to make the act of casting anxiety onto God concrete and embodied, rather than purely intellectual.",
    steps: [
      "Write the anxiety on a piece of paper or in a journal. Make it specific and complete — the full weight of what is being carried. The writing is the first act of externalizing what has been internal.",
      "Hold the paper (or the journal, or simply your hands) and verbalize the casting: &ldquo;Lord, I am throwing this onto you. I am not equipped to carry this. You are. I am releasing my grip on it — the outcome, the timeline, the resolution. You take it.&rdquo; Some people find the physical gesture of opening their hands helpful here.",
      "Then write — or say aloud — what you know to be true about God that makes the casting safe: &ldquo;I cast this on you because you care for me. Not because I feel certain of the outcome but because you are personally invested in what happens to me and you are strong enough to bear what I am not.&rdquo;",
      "The anxiety will likely return. When it does, the practice is not to cast again as though the first casting failed, but to remember: &ldquo;I already gave that to you. You already have it. I don&rsquo;t need to take it back.&rdquo; The repeated return of anxiety does not mean the casting was unsuccessful; it means the casting needs to be remembered and re-affirmed.",
    ],
    anchor: "1 Peter 5:7 — Casting all your anxiety on him, because he cares for you.",
  },
  {
    number: "04",
    title: "The Psalm 46 Stillness Practice — Releasing Control in Chaos",
    summary:
      "A practice for anxiety that stems from the sense that everything is falling apart and you must manage it. Following Psalm 46&rsquo;s call to &ldquo;be still and know&rdquo; in the middle of catastrophe.",
    steps: [
      "Name what you are trying to control: the outcome of the situation, the behavior of others, the timeline of resolution, the management of what might go wrong. Write it down: &ldquo;I am trying to control [name the specific things].&rdquo; Naming the clutching is the first step toward releasing it.",
      "Read Psalm 46 slowly. Notice that the &ldquo;be still&rdquo; comes after the declaration that God is the refuge, the strength, the present help — not before. You can only release control safely because you know who holds what you are releasing it to. Spend a moment naming what you know about God that makes the release possible.",
      "Practice the release physically: for each thing named in step one, say aloud &ldquo;I release [this specific thing] to you. I stop trying to manage it. You are God; I am not. You are exalted among the nations and in the specific chaos of my life right now.&rdquo;",
      "Sit in silence for five minutes afterward. The silence is not passive; it is the practice of not filling the space that has just been emptied with more analysis or more clutching. The &ldquo;knowing&rdquo; in &ldquo;be still and know&rdquo; is cultivated in the silence — the attentional turn toward God that the frantic management of the situation has been crowding out.",
    ],
    anchor: "Psalm 46:10 — &ldquo;Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!&rdquo;",
  },
  {
    number: "05",
    title: "Scripture Anchoring — Finding the Specific Promise for the Specific Fear",
    summary:
      "Building a personal treasury of Scripture verses that speak directly to recurring anxieties, and the practice of deploying them at the moment anxiety arrives.",
    steps: [
      "Identify your two or three most persistent anxiety patterns: fear of abandonment, fear of failure, fear of health crises, fear of financial collapse, fear of the future, fear of what others think. These are not random; they have a shape. Name the shape.",
      "For each pattern, find one or two specific Scripture verses that speak to it. Not general comfort verses — specific ones. For the fear of abandonment: Hebrews 13:5 (&ldquo;I will never leave you nor forsake you&rdquo;). For the fear of the future: Jeremiah 29:11. For the fear of not being enough: Philippians 4:13. For the fear of death: John 11:25-26. The specificity matters.",
      "Memorize them — not as formulas but as internalized realities. The verse you have only read is not available at 3 a.m. when the anxiety is worst. The verse you have memorized is. This is the practical wisdom behind Psalm 119:11: &ldquo;I have stored up your word in my heart.&rdquo;",
      "Practice the deployment: when the anxiety arrives, consciously reach for the specific verse that addresses it. Say it aloud, write it in the journal, pray it back to God: &ldquo;You said you would never leave me. I am claiming that now. I am leaning on that now.&rdquo; The anchor holds precisely because it is specific.",
    ],
    anchor: "Psalm 119:11 — I have stored up your word in my heart, that I might not sin against you.",
  },
  {
    number: "06",
    title: "The Night Office — Midnight Anxiety Turned to Prayer",
    summary:
      "A practice for the anxiety that arrives at night: using the pattern of the ancient night office (nocturns / vigils) to transform nighttime waking from anxious rumination into intentional prayer.",
    steps: [
      "Keep a journal and pen beside your bed. When you wake with anxiety, instead of lying in the dark rehearsing worst cases, turn on a small light and write the anxiety: &ldquo;It is [time] and I am afraid of [name it]. Here is what my mind is doing: [write it].&rdquo; The writing externalizes the internal loop and creates distance from it.",
      "Pray the anxiety: speak it to God in the second person. &ldquo;You see me awake at 3 a.m. with this. You know this fear completely. You are not surprised by it and you are not asleep. I am bringing it to you because I have nowhere else to take it.&rdquo;",
      "Read one psalm — Psalm 23, 46, 62, 91, 121, or 139 are particularly suited to nighttime anxiety. Read it slowly and let the words become your own prayer. The psalms were composed for exactly this kind of distress; they are not decorative but functional.",
      "Then practice the release: &ldquo;I am giving this night to you. I cannot resolve this situation tonight by lying awake with it. You hold the morning and what it brings. I am returning to sleep as an act of trust, not an act of confidence.&rdquo; Sleep itself becomes a form of trust — the willingness to let go of the management of the situation for a few hours.",
    ],
    anchor: "Psalm 4:8 — In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Henri Nouwen",
    role: "The Wounded Healer; Reaching Out; The Return of the Prodigal Son — Anxiety as the Wound That Becomes Ministry",
    quote:
      "The question is not how to get rid of loneliness and anxiety, but how to live them through and transform them into solitude and prayer. The wound is not the end but the beginning of the story.",
    bio: "Henri Nouwen was a Dutch Catholic priest, professor at Notre Dame, Yale, and Harvard, and one of the most widely read spiritual writers of the twentieth century. He left his academic career to live at L&rsquo;Arche Daybreak community in Canada, where he cared for adults with intellectual disabilities for the last decade of his life. Nouwen was himself profoundly anxious — he wrote candidly about his emotional fragility, his desperate need for affirmation, his prolonged periods of anguish — and his writing on anxiety carries the authority of someone who addressed it not from a position of resolution but from within it. His central move is to refuse the therapeutic goal of eliminating the wound: instead, he argues that the very places of pain and anxiety, when brought into the presence of God and carried rather than suppressed, become the source of ministry to others. The anxious person who has learned to take their anxiety to God has something the non-anxious person does not: a practiced dependence, an honest need, a poverty of spirit that the Beatitudes name as blessed. His book The Inner Voice of Love, written during a severe emotional breakdown, is among the most honest accounts of anxiety-in-prayer in the Christian tradition.",
  },
  {
    name: "Ed Welch",
    role: "Running Scared: Fear, Worry, and the God of Rest — Biblical Counseling on Anxiety",
    quote:
      "Worry and fear are not signs that God has abandoned you. They are signs that you need him. They are, in that sense, gifts — not comfortable ones, but gifts that direct you to the one place where help actually lives.",
    bio: "Ed Welch is a biblical counselor and faculty member at the Christian Counseling and Educational Foundation (CCEF), and the author of Running Scared: Fear, Worry, and the God of Rest — widely considered the most practically useful biblical counseling resource on anxiety available. Welch&rsquo;s approach takes anxiety seriously as both a spiritual and psychological reality, refusing to reduce it to either mere sin or mere neurochemistry. His framework begins with what he calls the &ldquo;fear of man&rdquo; — the anxiety that comes from caring too much what people think, needing their approval for the sense of self — and traces how the love of God&rsquo;s approval displaces this. He is particularly good on the difference between the fear that is appropriate (humility before God) and the fear that is excessive (the disordering of the threat-response system), and on the practical steps of bringing each specific anxiety before God in prayer. Running Scared is a book that people with anxiety read multiple times over years, finding different layers at different points in their experience. Welch also addresses the intersection of anxiety and shame, and his chapter on how shame and anxiety compound each other is among the most insightful in the literature.",
  },
  {
    name: "Paul David Tripp",
    role: "Anxiety: Finding the Peace That Passes Understanding — Anxiety as a Theological Condition",
    quote:
      "Anxiety reveals who or what you are trusting. When you are anxious, you are not just having a feeling — you are making a statement about where your hope actually lives, and most of the time it&rsquo;s not living where you thought it was.",
    bio: "Paul David Tripp is a pastor, counselor, and author whose work consistently brings biblical theology to bear on the emotional and psychological realities of human life. His book Anxiety: Finding the Peace That Passes Understanding treats anxiety as a condition that reveals the location of one&rsquo;s actual trust — not just one&rsquo;s stated trust, but the functional trust that drives behavior. Tripp&rsquo;s key insight is that anxiety is a diagnostic: it tells you where you have placed your hope for security and what you believe you cannot survive without. The person who is anxious about finances is revealing that their security is more materially than spiritually founded; the person anxious about relationships is revealing that their sense of worth depends more on human approval than divine acceptance. This is not a moralistic framework — Tripp presents it as a compassionate diagnostic, the first step toward honest prayer that addresses not just the symptom (anxiety) but the underlying trust disorder. His practical guidance on praying through anxiety is grounded in Philippians 4 and 1 Peter 5, and he is particularly insightful on the role of community — other believers who can remind you of truth when anxiety has distorted your own perspective.",
  },
  {
    name: "Thomas à Kempis",
    role: "The Imitation of Christ — Anxiety and the Interior Life",
    quote:
      "What does it profit you to enter into deep discussion concerning the Holy Trinity, if you lack humility and thereby displease the Trinity? Truly it is not deep words that make a man holy and upright; it is a good life which makes a man dear to God. Rather than defining the Trinity, know yourself to be small, and this is wisdom enough.",
    bio: "Thomas à Kempis was a fifteenth-century German-Dutch Augustinian monk whose The Imitation of Christ is, after the Bible, the most widely read Christian devotional in history. His approach to anxiety is indirect but penetrating: he traces most of the soul&rsquo;s disturbance to the same root cause — the restless seeking of things outside rather than the quiet turning inward and upward toward God. His famous counsel &ldquo;Rest from inordinate desire of knowledge, for therein is found much distraction and deceit&rdquo; applies with uncanny precision to the anxious mind that cannot stop searching for more information, more certainty, more evidence that the feared thing will not happen. À Kempis&rsquo;s prescription is radical simplicity: stop the seeking, turn inward, rest in God. His writing is not psychologically sophisticated in the modern sense, but it reaches something the modern literature sometimes misses — the way that anxiety is fed by the ceaseless activity of the self seeking its own security, and how the soul that rests in God can be still not because the circumstances have resolved but because the seeking has stopped. The Imitation of Christ is best read slowly, a few pages at a time, as a manual for the interior life rather than a theological argument.",
  },
  {
    name: "Charles Spurgeon",
    role: "Sermons and Letters on Anxiety — Depression, Trust, and the God Who Is Present in Darkness",
    quote:
      "I have learned to kiss the wave that throws me against the Rock of Ages. The anxiety that drives me to God has accomplished more than the comfort that kept me from him.",
    bio: "Charles Spurgeon was the most influential English-speaking preacher of the Victorian era, delivering sermons to thousands each week at the Metropolitan Tabernacle in London from 1854 until his death in 1892. His voice on anxiety has unusual authority because he suffered from severe depression throughout his ministry — what he described as periods of complete spiritual and emotional darkness that occasionally forced him to withdraw from the pulpit. He wrote with remarkable candor about his own anxiety and despondency, refusing to pretend that faith exempted him from psychological suffering. His sermons on Psalm 88 (&ldquo;I am a man who has no strength&rdquo;), on Elijah under the juniper tree, and on Paul&rsquo;s thorn in the flesh are among the most honest accounts of faith persisting through, rather than eliminating, anxiety and depression. Spurgeon consistently redirected anxious Christians away from the question &ldquo;why do I feel this way?&rdquo; toward the question &ldquo;what is God doing in this?&rdquo; — not as a dismissal of the feeling but as a reorientation of the sufferer toward the divine purpose operating through the suffering. His collected sermons are available in sixty-three volumes, and his private letters to those struggling with depression and anxiety remain models of pastoral compassion.",
  },
  {
    name: "Philip Yancey",
    role: "Where Is God When It Hurts?; Prayer: Does It Make Any Difference? — Anxiety, Suffering, and Honest Prayer",
    quote:
      "I have been struck by how often the psalms, which are nothing if not honest prayers from anxious and suffering people, reach conclusions that the beginning of the psalm makes impossible to predict. God meets the honest prayer in ways that the polished prayer never invites.",
    bio: "Philip Yancey is one of the most widely read Christian authors of the last half-century, known for his willingness to ask the hard questions that polished religious writing typically avoids. His book Where Is God When It Hurts? addresses the intersection of suffering, anxiety, and faith with rare candor, and Prayer: Does It Make Any Difference? takes on the mechanics and honesty of Christian prayer in ways that directly apply to anxiety. Yancey grew up in a fundamentalist environment that rewarded spiritual performance and penalized honest doubt and fear, and his writing career has been a sustained effort to create space for the kind of honest, messy, unresolved faith that the psalms model but that evangelical culture often discourages. His chapters on unanswered prayer and the silence of God are among the most honest in the literature, and his discussion of what it means to bring anxiety honestly into prayer — without the sanitizing filter of what one thinks God wants to hear — is both theologically careful and pastorally freeing. Yancey is not a systematic theologian; he is a journalist who reads widely, asks hard questions, and reports honestly on what he finds. That is precisely what makes him useful for Christians struggling with anxiety: he does not offer easy answers, but he models honest engagement.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The antidote to anxiety is not willpower or positive thinking; it is prayer — specific, honest, thankful prayer. The peace that results is not the resolution of the feared situation but a guard over heart and mind that holds the person even when the anxiety is still present. &ldquo;Surpasses all understanding&rdquo; means the peace arrives not as the conclusion of analysis but despite it — a gift from outside the system, not a product of the system working better.",
  },
  {
    reference: "1 Peter 5:6-7",
    text: "Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxiety on him, because he cares for you.",
    reflection:
      "The casting of anxiety is presented as an act of humility — the acknowledgment that you cannot carry what you have been carrying, and the willingness to give it to the One who can. The ground of the casting is not God&rsquo;s omnipotence alone but his personal care: &ldquo;because he cares for you.&rdquo; The anxious person who throws their anxiety onto God is not performing a spiritual technique; they are trusting a person who is personally invested in them.",
  },
  {
    reference: "Matthew 26:38-39",
    text: "&ldquo;My soul is very sorrowful, even to death; remain here, and watch with me.&rdquo; And going a little farther he fell on his face and prayed, saying, &ldquo;My Father, if it is possible, let this cup pass from me; nevertheless, not as I will, but as you will.&rdquo;",
    reflection:
      "Jesus prayed from anguish. The Gethsemane prayer names the fear honestly (&ldquo;let this cup pass&rdquo;), asks for relief, and then submits to the Father&rsquo;s will — all in the same breath. This is the model of anxious prayer: not confident triumph but honest dread submitted to a Father who is trustworthy. The person who prays from anxiety is following Jesus, not departing from him.",
  },
  {
    reference: "Psalm 46:1-2, 10",
    text: "God is our refuge and strength, a very present help in trouble. Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea... &ldquo;Be still, and know that I am God.&rdquo;",
    reflection:
      "The stillness of verse 10 follows from the refuge of verses 1-2, not the other way around. You can be still because God is the refuge, not in order to discover that he is. The &ldquo;be still&rdquo; is an active release — the deliberate stopping of the frantic self-management — that the knowledge of God makes possible. Stillness is not the absence of chaos but the presence of a secure foundation within it.",
  },
  {
    reference: "Isaiah 41:10",
    text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    reflection:
      "The command &ldquo;fear not&rdquo; is backed by three consecutive divine commitments: I will strengthen, I will help, I will uphold. The ground of fearlessness is not the absence of threatening circumstances but the presence of the God who has committed himself to three specific forms of support. The prayer that anchors on Isaiah 41:10 can name the specific form of God&rsquo;s promised support that is most needed in the specific moment of fear.",
  },
  {
    reference: "Psalm 62:5-8",
    text: "For God alone, O my soul, wait in silence, for my hope is from him. He only is my rock and my salvation, my fortress; I shall not be shaken. On God rests my salvation and my glory; my mighty rock, my refuge is God. Trust in him at all times, O people; pour out your heart before him; God is a refuge for us.",
    reflection:
      "&ldquo;Pour out your heart before him&rdquo; — this is the psalm&rsquo;s permission for anxious, unfiltered prayer. The God who is our fortress and refuge does not require polished, composed, theologically coherent prayer before he will receive us. The heart can be poured out — with all its anxiety, confusion, and fear — before the One who is strong enough to receive it and gracious enough to welcome it. The silence of verse 5 and the outpouring of verse 8 are not contradictions but the two movements of honest prayer.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "KQRG_4Q3lzw", title: "Anxiety and Prayer — Bringing Your Fear to God" },
  { videoId: "C_3V1CzGMGc", title: "Philippians 4:6-7 — The Peace That Surpasses Understanding" },
  { videoId: "OhSFI0yCzXU", title: "Jesus in Gethsemane — The Model of Anxious Prayer" },
  { videoId: "_SftCClHaD4", title: "Casting Your Anxiety on God — 1 Peter 5:7 Explained" },
  { videoId: "fGEzDkLfxgw", title: "Henri Nouwen on Fear, Anxiety, and the Spiritual Life" },
  { videoId: "UYo3mRclyBE", title: "Be Still and Know — Psalm 46 for Anxious Souls" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianAnxietyPrayerPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<APEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theAnxiety, setTheAnxiety] = useState("");
  const [thePrayer, setThePrayer] = useState("");
  const [scriptureAnchor, setScriptureAnchor] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as APEntry[]);
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
    if (!theAnxiety.trim() || !thePrayer.trim()) return;
    const entry: APEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theAnxiety: theAnxiety.trim(),
      thePrayer: thePrayer.trim(),
      scriptureAnchor: scriptureAnchor.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheAnxiety("");
    setThePrayer("");
    setScriptureAnchor("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? BLUE : BORDER}`,
    background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
    color: active ? BLUE : MUTED,
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
    color: BLUE,
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
                color: BLUE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Anxiety &amp; Prayer
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Anxiety &amp; Prayer: Bringing Your Fear Honestly to God
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Anxiety is not a sign of weak faith — it is an invitation to prayer. From Philippians
              4:6 to Jesus in Gethsemane to the midnight psalms, Scripture consistently treats the
              anxious soul not as a failure to be corrected but as a person to be met. This guide
              traces the theology of anxiety-as-prayer, gives you practices for bringing fear
              honestly before God, and helps you build the habit of prayer as the first — not last
              — response to anxious feeling.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Do not be anxious about anything, but in everything by prayer and
                supplication with thanksgiving let your requests be made known to God. And the peace
                of God, which surpasses all understanding, will guard your hearts and your minds in
                Christ Jesus.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>
                Philippians 4:6-7
              </p>
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
                Eight theological studies on anxiety and prayer — from Philippians 4&rsquo;s
                invitation to Gethsemane&rsquo;s model, from Psalm 46&rsquo;s stillness to
                1 Peter&rsquo;s casting, from the distinction between clinical and spiritual anxiety
                to the peace that surpasses understanding. Theology that meets anxiety where it
                actually lives.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: BLUE,
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
                        background: "rgba(59, 130, 246, 0.07)",
                        border: "1px solid rgba(59, 130, 246, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where these threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Philippians 4, Gethsemane, Psalm 46, epiripsantes, Psalm 62&rsquo;s outpouring —
                  these are not separate topics but one theology of anxious prayer seen under
                  different kinds of pressure. The common thread: anxiety is not the enemy of prayer
                  but its occasion. See also how anxiety connects to trust in{" "}
                  <Link href="/christian-trust" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Trust
                  </Link>{" "}
                  and to peace in{" "}
                  <Link href="/christian-peace" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Peace
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
                Six practices for transforming anxiety into prayer — the anxiety-to-prayer transfer,
                Gethsemane-pattern prayer, the casting practice, the Psalm 46 stillness exercise,
                Scripture anchoring, and the night office. Start with one and let it reshape your
                instinctive response to anxious feeling.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: BLUE,
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
                      color: BLUE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A note about clinical anxiety
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices are spiritual disciplines, not medical treatments. If you are
                  struggling with clinical anxiety — persistent, disordered, functionally impairing
                  — these practices work best alongside appropriate professional care. Seeking
                  therapy or medication for anxiety disorder is not a failure of faith; it is wisdom.
                  The spiritual and the medical address different dimensions of the same person, and
                  both matter.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most faithfully addressed anxiety from within the Christian
                tradition — Nouwen&rsquo;s wound-as-ministry, Welch&rsquo;s biblical counseling,
                Tripp&rsquo;s trust diagnostic, à Kempis&rsquo;s interior simplicity,
                Spurgeon&rsquo;s depressive honesty, and Yancey&rsquo;s candid questioning. Each
                speaks from experience, not theory.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: BLUE,
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
                      background: "rgba(59, 130, 246, 0.06)",
                      borderLeft: `3px solid ${BLUE}`,
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
                Six passages that form the biblical theology of anxiety-as-prayer — from
                Philippians 4 to Gethsemane to Psalm 46 to Isaiah 41 to Psalm 62. Read them as
                prayers, not just texts. Each one was written by someone who knew anxiety from the
                inside.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Read each passage aloud and then pray it in the first person — turning the text
                  into prayer addressed directly to God. &ldquo;Lord, I am casting this specific
                  anxiety on you right now, because you have told me you care for me.&rdquo; The
                  psalms especially are designed to be prayed, not just read. Let the words of
                  Scripture become the words of your prayer; often they express the anxiety and the
                  trust more accurately than you could on your own.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that transform anxiety into prayer over time: name the anxiety, write
                the prayer, anchor to Scripture. Entries are stored privately in your browser — no
                account needed. Over time, the journal becomes a record of anxieties brought to God
                and the prayers that met them.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New anxiety-prayer entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="ap-anxiety" style={labelStyle}>
                    The anxiety I&rsquo;m bringing to God
                  </label>
                  <textarea
                    id="ap-anxiety"
                    value={theAnxiety}
                    onChange={(e) => setTheAnxiety(e.target.value)}
                    placeholder="Name it specifically and honestly — what is the actual fear? Don&rsquo;t sanitize it for God; he already knows..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="ap-prayer" style={labelStyle}>
                    My prayer &mdash; honest and specific
                  </label>
                  <textarea
                    id="ap-prayer"
                    value={thePrayer}
                    onChange={(e) => setThePrayer(e.target.value)}
                    placeholder="Write the prayer — what you&rsquo;re asking for, what you&rsquo;re releasing, what you&rsquo;re trusting. Honest and specific beats polished and vague..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="ap-scripture" style={labelStyle}>
                    The Scripture I&rsquo;m anchoring to
                  </label>
                  <input
                    id="ap-scripture"
                    type="text"
                    value={scriptureAnchor}
                    onChange={(e) => setScriptureAnchor(e.target.value)}
                    placeholder="A specific verse or passage — the promise you&rsquo;re leaning on in this moment..."
                    style={inputStyle}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theAnxiety.trim() || !thePrayer.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theAnxiety.trim() || !thePrayer.trim() ? BORDER : BLUE,
                    color: !theAnxiety.trim() || !thePrayer.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theAnxiety.trim() || !thePrayer.trim() ? "not-allowed" : "pointer",
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
                      Name the anxiety, write the honest prayer, anchor it to Scripture. Over time
                      this becomes a record of the fears you brought to God and what he met you with
                      in the bringing.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: BLUE }}>
                              {entry.theAnxiety.length > 80
                                ? entry.theAnxiety.slice(0, 80) + "…"
                                : entry.theAnxiety}
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
                            The anxiety
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theAnxiety}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.scriptureAnchor ? 10 : 0 }}>
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
                            The prayer
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.thePrayer}
                          </p>
                        </div>

                        {entry.scriptureAnchor && (
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
                              Scripture anchor
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.scriptureAnchor}
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
                Teaching on anxiety and prayer — Philippians 4, Gethsemane, 1 Peter 5, Psalm 46,
                and voices from the tradition who have addressed anxiety from within the Christian
                life. Good companions to the Theology and Practices tabs.
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
              Anxiety as the ongoing invitation
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Anxiety does not disappear when faith matures — it changes its relationship to prayer.
              The person who has practiced bringing anxiety to God over years does not stop feeling
              anxious, but they have built a habitual route: anxiety arrives, prayer follows. The
              gap between the arrival of the fear and the turn toward God narrows with practice. That
              narrowing is the fruit of the work this guide is designed to support.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how anxiety connects to trust in{" "}
              <Link href="/christian-trust" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Trust
              </Link>
              , explore the broader theology of peace in{" "}
              <Link href="/christian-peace" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Peace
              </Link>
              , or find resources on clinical anxiety at{" "}
              <Link
                href="/anxiety-disorder-christian-faith"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Anxiety Disorder &amp; Faith
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
