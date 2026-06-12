"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const INDIGO = "#6366F1";

const STORAGE_KEY = "vine_anxietyguide_entries";

interface ANXEntry {
  id: string;
  date: string;
  worry: string;
  biblePromise: string;
  prayerResponse: string;
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
    badge: "Philippians 4:6-7",
    title: "&ldquo;Be Anxious for Nothing&rdquo; — A Command With a Method",
    paragraphs: [
      "Paul&rsquo;s command in Philippians 4:6 is one of the most quoted and least examined verses in the New Testament: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.&rdquo; The common misreading is that Paul is commanding the suppression of anxious feelings by an act of will — stop feeling this. But the Greek present imperative, combined with what follows, reveals a different logic entirely. The antidote to anxiety is not stoic resolve; it is a specific action: prayer, with supplication, with thanksgiving, before God. The command redirects rather than suppresses.",
      "The promise that follows is extraordinary and precise: &ldquo;And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; This peace is not the peace of resolved circumstances — Paul is writing from prison when he says this. It is a peace that guards the heart and mind from within, while external circumstances remain unchanged. The word &ldquo;guard&rdquo; (phrour&#275;sei) is a military term — a sentinel standing watch over what is entrusted to him. God&rsquo;s peace stands guard over the anxious soul not by removing the threat but by standing between the soul and the threat&rsquo;s power to destabilize it.",
      "And the peace &ldquo;surpasses all understanding&rdquo; — it cannot be produced by reasoning your way to a better cognitive position, though that has value. It is the fruit of relationship with the God who holds the future, given as a gift in the act of bringing your worry to him. This is why anxiety management techniques, while useful, are not the whole answer: the peace Paul describes is available only inside the relationship of prayer.",
    ],
    callout: {
      label: "The method",
      text: "Anxiety redirected toward God in prayer, with supplication and thanksgiving, produces a peace that stands guard over the heart and mind — not the peace of solved problems but the peace of the presence of the One who holds them.",
    },
  },
  {
    badge: "1 Peter 5:7",
    title: "Cast All Your Anxiety on Him — The Deliberate Transfer",
    paragraphs: [
      "&ldquo;Cast all your anxiety on him, because he cares for you&rdquo; (1 Peter 5:7). The Greek word for cast here is epiript&#333; — a strong, deliberate word. It is the same verb used in Luke 19:35, where the disciples throw their cloaks onto a donkey. This is not a gradual release, not a slow learning to worry less. It is a decisive act of transfer: taking the anxiety, holding it consciously, and hurling it onto God. The full weight of what is troubling you — not a curated, acceptable portion, but all of it — is eligible for this transfer.",
      "The basis Peter gives is striking in its simplicity: &ldquo;because he cares for you.&rdquo; Not because he is powerful enough to fix it — though he is. Not because it fits into a sovereign plan — though it does. The ground of the transfer is personal care. He is interested in you. Your anxiety is not too small for his attention, not too irrational to bring, not too chronic to hand over yet again. Many anxious believers delay this prayer because they secretly doubt that their particular anxiety is worth God&rsquo;s attention, or that they have brought it so many times that God must be weary of it. Peter demolishes both hesitations: cast all of it, because his care is not depleted by frequency.",
      "The verse sits in a context of humility: Peter writes immediately before it, &ldquo;Humble yourselves, therefore, under the mighty hand of God, so that at the proper time he may exalt you.&rdquo; Casting anxiety onto God is an act of humility — an acknowledgment that you are not sufficient to carry it yourself, that you are not sovereign over the outcome, that you need someone bigger than your own competence. Anxiety and pride are closer relatives than we usually notice: the anxious person is often trying to carry something she was never designed to carry alone.",
    ],
  },
  {
    badge: "Matthew 6:25-34",
    title: "The Birds of the Air — The Logic of Providence Against Worry",
    paragraphs: [
      "Jesus&rsquo; great sustained argument against anxiety in the Sermon on the Mount is not dismissive of the things people worry about — food, clothing, tomorrow. He takes them seriously as genuine needs. His argument is theological: look at the birds of the air. They neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they? The argument is from lesser to greater: if the Father&rsquo;s providential care extends to birds — and it does, in granular, daily detail — then the argument for his care of his own children is overwhelming.",
      "The phrase Jesus uses — &ldquo;O you of little faith&rdquo; (oligopistoi) — is not a rebuke designed to shame. It is a diagnosis and an invitation: your faith is small because your vision of the Father is small. The disciples&rsquo; anxiety about material provision reveals an implicit belief that the Father might not come through, that he might not notice, that the sparrow-feeding God might lose track of them. Anxiety is, in this framework, a failure of theological imagination — not a moral failure but a perceptual one. The cure is not more willpower but a larger vision of who God is.",
      "The command &ldquo;seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; is the counter-practice to worry. Worry is the practice of seeking first your own provision, your own security, your own management of outcomes. Seeking first the kingdom is the deliberate reorientation of attention and desire toward what is most real and lasting — and the promise is that when the primary orientation is right, the secondary needs are taken care of by the Father who knows you need them (v.32).",
    ],
    callout: {
      label: "The logic",
      text: "If God clothes the grass of the field, which today is here and tomorrow is thrown into the oven, how much more will he clothe you? The Father who feeds sparrows does not lose track of his children.",
    },
  },
  {
    badge: "Psalms",
    title: "Fear vs. Trust Throughout the Psalms — Learning to Lament",
    paragraphs: [
      "The Psalms are the prayer book of the anxious soul, and they are honest in a way that most modern Christian piety is not. Psalm 22 begins with a cry of dereliction — &ldquo;My God, my God, why have you forsaken me?&rdquo; — the words Jesus borrowed from the cross. Psalm 42 asks, &ldquo;Why are you cast down, O my soul, and why are you in turmoil within me?&rdquo; Psalm 88 ends without resolution, in darkness: &ldquo;Darkness is my closest friend.&rdquo; The Psalms do not suppress the experience of fear, anxiety, or abandonment; they bring it to God in full, because the God being addressed can handle it.",
      "Lament is the biblical alternative to both stoic suppression and anxious spiral. Suppression pretends the anxiety is not there; spiral amplifies it without direction. Lament is anxiety turned outward and upward — honest speech to a God who is addressed, not avoided. The structure of most lament psalms moves from complaint to trust not by ignoring the complaint but by anchoring it in memory: &ldquo;Our fathers trusted in you; they trusted, and you delivered them&rdquo; (Ps 22:4). The trust is not produced by the resolution of the present crisis but by the remembered history of God&rsquo;s faithfulness.",
      "Anxiety thrives in silence and isolation. The Psalms model something different: the anxious believer speaks her fear to God out loud, in words, and in doing so she discovers that the God she feared might not be there is, in fact, the One she is speaking to. The act of lament itself is an act of faith — you do not cry out to a void. Learning to lament is one of the most important spiritual disciplines for an anxious age, precisely because it gives anxiety somewhere to go that is neither suppressed nor amplified.",
    ],
  },
  {
    badge: "John 14:27",
    title: "Anxiety and the Holy Spirit — &ldquo;My Peace I Give to You&rdquo;",
    paragraphs: [
      "On the night before his crucifixion, surrounded by disciples whose anxiety was acute, Jesus said: &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.&rdquo; The peace Jesus offers is distinguished from worldly peace by its source and its nature. Worldly peace is the peace of resolved circumstances — the absence of threat. Jesus&rsquo; peace is available inside the threat, because it flows from his presence rather than from the removal of what is threatening.",
      "The context is the promise of the Holy Spirit, the Paraclete — the Comforter, the Advocate, the one who comes alongside. John 14 and 16 describe the Spirit as the ongoing presence of Jesus with the disciples after the ascension: &ldquo;I will not leave you as orphans; I will come to you.&rdquo; The anxiety of the disciples on the night of the arrest was, at its root, the anxiety of abandonment — their source of security, identity, and hope was about to be taken away. Jesus&rsquo; answer is not a solution to the external problem but a promise of presence that is more intimate than even his physical presence: the Spirit dwelling within rather than walking beside.",
      "The practical implication is that Christian anxiety is not primarily a failure of technique but a failure to appropriate the Spirit&rsquo;s presence. The Spirit has been given as comforter, advocate, and the one who intercedes for us &ldquo;with groanings too deep for words&rdquo; (Romans 8:26) — precisely when we are too anxious to pray coherently. The Holy Spirit takes up the petition when anxiety has disabled our verbal prayer, and carries it to the Father who hears.",
    ],
  },
  {
    badge: "Theology",
    title: "Anxiety vs. Sin — The Complex Question",
    paragraphs: [
      "Is anxiety a sin? The question is more complicated than most confident answers on either side allow. Jesus commands, &ldquo;Do not be anxious.&rdquo; Peter commands, &ldquo;Cast your anxiety on him.&rdquo; These imperatives imply moral agency and responsibility. At the same time, Jesus himself was &ldquo;greatly distressed and troubled&rdquo; in Gethsemane (Mark 14:33 — ekthambeisthai, a word of strong emotional agitation) and his Gethsemane prayer is itself a lament: &ldquo;Father, if it is possible, let this cup pass from me.&rdquo; The sinless Son of God experienced acute anxiety. This means anxiety — the feeling, the physiological response, the emotional reality — is not in itself sinful.",
      "Where anxiety becomes a moral category is in what it does to us and what we do with it. Anxiety that we refuse to bring to God, that we nurse into resentment, that we use to justify faithless action or paralysis, that we allow to crowd out trust — this is anxiety that has slipped from the category of temptation into the category of response. The Heidelberg Catechism famously defines sin as &ldquo;missing the mark&rdquo; — and the anxious person who keeps missing the cast of 1 Peter 5:7 is responsible for the accumulation even if not for the initial feeling.",
      "The most pastorally useful distinction is between anxiety disorders (neurological and psychological conditions involving the brain&rsquo;s threat-detection system misfiring, which require professional care alongside spiritual practice) and the anxiety of spirit that results from misplaced trust. Neither is simply a spiritual failure, neither is simply a medical problem, and neither is helped by the false assurance that Christians should not feel anxious. What helps is the sustained practice of bringing every anxious thought to a God who has expressly invited us to throw all of it onto him.",
    ],
    callout: {
      label: "The distinction",
      text: "Anxiety as a feeling is not sin — Jesus himself was greatly distressed in Gethsemane. Anxiety becomes a moral category in what we do with it: whether we bring it to God or nurse it into faithlessness.",
    },
  },
  {
    badge: "Spiritual Practice",
    title: "The Somatic Dimension of Anxiety and Spiritual Practice",
    paragraphs: [
      "Anxiety is not only a spiritual condition or a thought pattern; it is also a bodily experience. Elevated heart rate, shallow breathing, muscle tension, elevated cortisol, heightened startle response — anxiety lives in the body as much as in the mind. The desert fathers and Christian contemplative tradition have long understood this, even without the neuroscience to name it: practices like slow breathing, bodily posture, walking, and rhythm create physiological conditions more hospitable to trust than to fear.",
      "Breath prayer is one of the oldest practices in Christian spirituality and one of the most physiologically sound. Breathing slowly and deeply activates the parasympathetic nervous system — the body&rsquo;s rest-and-digest counterpart to fight-or-flight. Combining this with a short prayer — &ldquo;Lord&rdquo; on the inhale, &ldquo;have mercy&rdquo; on the exhale; &ldquo;You are with me&rdquo; on the inhale, &ldquo;I will not fear&rdquo; on the exhale — anchors the physiological regulation in theological truth. This is not reducing prayer to a relaxation technique; it is taking seriously that we are embodied creatures whose bodies participate in our spiritual practices.",
      "Physical presence with others also has documented anti-anxiety effects. The church&rsquo;s practice of gathered worship — embodied, regular, communal — is not incidental to spiritual formation. Singing together modulates the nervous system; the rhythm of liturgy provides predictable structure in an unpredictable world; the laying on of hands in prayer involves the body in the act of receiving care. The anxious Christian is not well served by a purely cerebral faith that treats the body as irrelevant. Incarnation means the physical matters — and anxiety&rsquo;s treatment is as embodied as its experience.",
    ],
  },
  {
    badge: "Pastoral Care",
    title: "Clinical Anxiety and Spiritual Worry — The Necessary Distinction",
    paragraphs: [
      "Anxiety disorders — generalized anxiety disorder, panic disorder, PTSD, OCD, social anxiety — are real neurological conditions involving the misregulation of the brain&rsquo;s threat-detection system. They are not primarily caused by insufficient faith. Telling a person in the grip of a panic attack to &ldquo;just trust God&rdquo; is as unhelpful as telling a person with a broken leg to &ldquo;just walk in faith.&rdquo; The body is not functioning normally, and spiritual exhortation without appropriate medical care can deepen the shame and delay the healing.",
      "The spiritual worry that the New Testament addresses is different in kind. It is the anxiety of someone with a functioning nervous system who is misplacing trust — treating tomorrow&rsquo;s provision, today&rsquo;s threat, or another person&rsquo;s opinion as though they are ultimate, while losing sight of the God who holds all of it. This anxiety responds to spiritual practice: prayer, Scripture, community, lament, worship. Clinical anxiety also responds to spiritual practice — but it also needs professional care, and there is no theological reason to withhold it.",
      "The most important pastoral move for the anxious person is to refuse to collapse these two categories into one. The Christian who struggles with clinical anxiety is not a second-class believer; she may need therapy, medication, and a skilled professional alongside her faith community, and all of that is compatible with robust Christian faith. Jesus healed the sick; he did not rebuke them for needing healing. The brain is part of the body; caring for it is part of the stewardship of the gift of life.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Cast — Deliberate Prayer of Transfer",
    summary:
      "The practice of 1 Peter 5:7: stopping, naming the specific anxiety, and deliberately handing it to God in prayer. Not gradual release but deliberate transfer.",
    steps: [
      "When anxiety rises, stop and name it specifically in writing or aloud: &ldquo;I am anxious about [specific thing].&rdquo; Vague anxiety expands; named anxiety can be addressed. The specificity is not performative — it is clarifying.",
      "Bring the named anxiety to God in deliberate prayer: &ldquo;Lord, I am casting this onto you. I am throwing it, not just gently setting it down. You care for me. This is yours.&rdquo; The physical gesture of open hands, held out or turned upward, anchors the prayer in the body.",
      "Receive the counter-promise: speak Philippians 4:7 aloud — &ldquo;The peace of God, which surpasses all understanding, will guard my heart and my mind.&rdquo; You are not claiming the peace is already present; you are accepting the promise that the guard is coming.",
      "Record it in the Journal on this page. When the anxiety returns — and it will — you have a record of the cast, a stake in the ground: &ldquo;I have already handed this to him. I am not picking it back up today.&rdquo;",
    ],
    anchor:
      "1 Peter 5:7 — Cast all your anxiety on him, because he cares for you.",
  },
  {
    number: "02",
    title: "Breath Prayer",
    summary:
      "One of the oldest Christian practices — combining physiological regulation (slow breathing activates the rest-and-digest nervous system) with short prayers anchored in Scripture.",
    steps: [
      "Inhale slowly for a count of four, silently or aloud: &ldquo;Lord&rdquo; or &ldquo;You are with me.&rdquo; Hold for a count of two. Exhale slowly for a count of six: &ldquo;have mercy&rdquo; or &ldquo;I will not fear.&rdquo; The longer exhale is physiologically significant — it activates the vagus nerve and the parasympathetic response.",
      "Other pairings: inhale &ldquo;The Lord is my shepherd&rdquo; / exhale &ldquo;I shall not want.&rdquo; Inhale &ldquo;Be still&rdquo; / exhale &ldquo;and know that I am God.&rdquo; Choose a pairing that speaks to your specific anxiety today.",
      "Do this for five minutes before entering an anxious situation: a difficult conversation, a medical appointment, a sleepless night. The prayer is not a magic technique; it is an act of orienting the body and soul toward God before the threat arrives.",
      "Do not evaluate the prayer by how it makes you feel. Evaluate it by whether it re-orients your attention toward God. The peace that surpasses understanding is not a feeling you manufacture; it is a guard God places on duty. Your job is to pray; the guard&rsquo;s deployment is his.",
    ],
    anchor:
      "Psalm 46:10 — Be still, and know that I am God.",
  },
  {
    number: "03",
    title: "Lament — Honest Speech to God",
    summary:
      "The practice the Psalms model: bringing anxiety, fear, and grief to God in honest, directed speech — neither suppressing nor spiraling, but speaking to the One who can hear.",
    steps: [
      "Find a lament psalm that matches your condition: Psalm 22 (abandonment), Psalm 42 (spiritual depression), Psalm 46 (catastrophic fear), Psalm 88 (unresolved darkness), Psalm 91 (protection under threat). Read it aloud, slowly, as your own prayer.",
      "Write your own lament: start with the honest complaint — &ldquo;God, I am afraid of...&rdquo; or &ldquo;Lord, I don&rsquo;t understand why...&rdquo; Do not perform peace you do not have. The Psalms don&rsquo;t; you don&rsquo;t need to either.",
      "Let the lament move, if it can, toward memory: &ldquo;But you have been faithful before. You have not abandoned what you began. Your character has not changed.&rdquo; The movement from complaint to trust is the Psalms&rsquo; pattern — not instant peace, but an anchor in God&rsquo;s remembered character.",
      "Pray the lament with another person when possible. Anxiety thrives in isolation; lament spoken aloud to a trusted friend or spiritual director loses some of the power isolation gives it. You are not alone in your anxiety; the church has prayed these words for three thousand years.",
    ],
    anchor:
      "Psalm 42:5 — Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.",
  },
  {
    number: "04",
    title: "The Kingdom-First Reorientation",
    summary:
      "The counter-practice to worry that Jesus prescribes: deliberately reorienting attention and desire toward God&rsquo;s kingdom when anxiety about secondary things rises.",
    steps: [
      "When worry about provision, future, health, or reputation dominates your mind, name the underlying assumption: &ldquo;I am anxious about X because I am treating X as ultimate — as the thing my security depends on.&rdquo; This is the theological root of Matthew 6 anxiety.",
      "Deliberately redirect attention: spend five minutes in worship — a psalm, a hymn, a prayer of adoration — before returning to the anxiety. Not to avoid it, but to reorder what is most real. &ldquo;Seek first the kingdom of God and his righteousness&rdquo; is the prescription for the anxiety that comes from misplaced first priorities.",
      "Ask: what does it look like today to seek first the kingdom, given my specific anxious circumstance? Sometimes it is a decision; sometimes it is a surrender; sometimes it is simply continuing to do the next right thing while trusting the Father with the outcome you cannot control.",
      "Practice the Philippians 4:8 re-anchor alongside this: whatever is true, honorable, just, pure, lovely, commendable — name one concrete thing in each category. This is not denial of the threat but deliberate broadening of attention beyond the threat&rsquo;s monopoly on your mental field.",
    ],
    anchor:
      "Matthew 6:33 — But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
  },
  {
    number: "05",
    title: "Community as Anxiety Practice",
    summary:
      "The gathered church — embodied, regular, communal worship — is a physiological and spiritual anti-anxiety practice that individual devotion cannot replace.",
    steps: [
      "Show up to gathered worship even when anxiety tells you to stay home. The body needs to be in a room with other bodies singing the same words; the nervous system responds to communal rhythm in ways that solitary practice cannot replicate. This is not sentimentality — it is incarnation taking body life seriously.",
      "Name your anxiety to one trusted person in your congregation. Anxiety&rsquo;s power is inversely proportional to the number of people who know about it. A spoken fear, received by a person who stays and prays with you rather than fixing or dismissing it, loses a portion of its power.",
      "Ask for prayer, including prayer with laying on of hands if your tradition practices it. The physical gesture of hands on shoulders or head is not magic; it is the church&rsquo;s embodied enactment of the promise that &ldquo;where two or three are gathered in my name, there am I among them.&rdquo;",
      "Volunteer to serve someone else in the congregation who is in need. Anxiety is often self-focused — not sinfully, but structurally. Service is the practice that breaks the self-referential loop not by will-power but by reorientation. It is hard to be consumed by your own anxiety while carrying someone else&rsquo;s groceries.",
    ],
    anchor:
      "Hebrews 10:24-25 — And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another.",
  },
  {
    number: "06",
    title: "The Anxiety Journal",
    summary:
      "A structured practice of naming worries, standing on a Bible promise, and recording a prayer response — the journal on this page is built for exactly this practice.",
    steps: [
      "Name the worry specifically and honestly in writing. Not &ldquo;I am anxious about everything&rdquo; but &ldquo;I am worried that [specific outcome] will happen.&rdquo; Externalizing anxiety from the interior monologue to written words changes its character and makes it addressable.",
      "Find and write one Bible promise that speaks to the specific worry: not a generic &ldquo;God is in control&rdquo; but a specific text — Isaiah 41:10, Philippians 4:19, Romans 8:28, Psalm 23 — that addresses the precise shape of your fear. Use a concordance or search if needed.",
      "Write your prayer response: what you are casting, what you are trusting, what you are committing to do and not do as a result. This converts the journal from emotional processing into a spiritual act with a direction.",
      "Review older entries periodically. You will often find that the things you were most anxious about either did not happen, or happened and you survived them with God&rsquo;s help. The journal becomes a history of the Father&rsquo;s faithfulness — the same material the Psalms use to anchor trust in the present.",
    ],
    anchor:
      "Philippians 4:6 — Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Charles Spurgeon",
    role: "Lectures to My Students — The Minister&rsquo;s Fainting Fits",
    quote:
      "I find myself frequently depressed — perhaps more so than any other person here. I would not, however, lose those seasons of depression; they have been nurseries of my richer experiences. The Lord has chosen to exercise many of his most eminent servants in this way.",
    bio: "Charles Spurgeon, the most celebrated Baptist preacher of the Victorian era, suffered from severe depression and anxiety for much of his ministry — including during his most productive years at the Metropolitan Tabernacle. He wrote about his struggles with unusual candor for his era, most memorably in the chapter &ldquo;The Minister&rsquo;s Fainting Fits&rdquo; in Lectures to My Students. He refused to spiritualize his suffering into proof of unfaith, insisting instead that the dark valleys were formative rather than disqualifying. His willingness to name his own darkness while continuing to preach has been a lifeline for generations of Christians who suffer from anxiety or depression and feel ashamed of it in the church.",
  },
  {
    name: "Philip Yancey",
    role: "Where Is God When It Hurts? — The Honest Question",
    quote:
      "Grace means there is nothing we can do to make God love us more, and nothing we can do to make God love us less. It means God already loves us as much as an infinite God can possibly love.",
    bio: "Philip Yancey&rsquo;s long career has been shaped by the experience of suffering and doubt, and his work has given language to millions of anxious and hurting believers. Where Is God When It Hurts? and The Jesus I Never Knew both engage the experience of fear, pain, and divine silence with intellectual honesty and pastoral warmth. Yancey refuses the easy answers that anxious faith often reaches for, insisting instead that the hard questions are not obstacles to faith but invitations to a more honest and durable relationship with God. His own story includes abusive religion, vocational uncertainty, and chronic pain — and his writing carries the authority of experience rather than theory.",
  },
  {
    name: "Ed Welch",
    role: "Running Scared — Fear, Worry, and the God of Rest",
    quote:
      "Worry is the suspicious belief that God might not come through. It rehearses imaginary disasters and loses sight of what is actually happening in the present. The cure is not positive thinking but a larger God.",
    bio: "Ed Welch is a counselor and faculty member at the Christian Counseling and Educational Foundation whose book Running Scared: Fear, Worry and the God of Rest is one of the most careful treatments of anxiety from a biblical counseling perspective. Welch is notable for his refusal to collapse anxiety into sin or to reduce it to a purely medical problem — he holds the spiritual, psychological, and physiological dimensions in genuine tension. He is particularly incisive on the relationship between anxiety and control: the anxious person is typically trying to manage an outcome that she is not equipped to control. The solution Running Scared proposes is not technique but encounter — a God large enough to bear the weight of what we cannot carry.",
  },
  {
    name: "Tim Keller",
    role: "Walking with God through Pain and Suffering",
    quote:
      "The Scripture does not say: be anxious for nothing because you have been given a worry-management strategy. It says: be anxious for nothing, and the peace of God will guard your heart. The guard is not a technique; the guard is a person — the God who keeps what is committed to him.",
    bio: "Tim Keller&rsquo;s Walking with God through Pain and Suffering is his most sustained engagement with the question of why God allows suffering — a question inseparable from anxiety. He brought to the subject his characteristic combination of Reformed theology, cultural engagement, and pastoral experience ministering in New York City to a congregation filled with people for whom anxiety and suffering were daily realities. Keller consistently refused thin comfort, insisting that the gospel offers not a solution to suffering but a companion in it — and that the companion is better than the solution would be. His own death from pancreatic cancer in 2023 was described by those present as a confirmation of everything he had preached.",
  },
  {
    name: "Dane Ortlund",
    role: "Gentle and Lowly — The Heart of Christ Toward the Anxious",
    quote:
      "The Christian life, for many of us, feels like white-knuckling our way to heaven. Jesus says: take my yoke, for I am gentle and lowly. He does not bark at us from above; he gets alongside and carries with us.",
    bio: "Dane Ortlund&rsquo;s Gentle and Lowly (2020) became one of the most widely read Christian books of recent years by doing something simple and necessary: it focused relentlessly on what the New Testament says about Jesus&rsquo; emotional disposition toward struggling people. Ortlund argues that the dominant experience of many anxious Christians is the sense that Jesus is mildly disappointed in them — that they have not believed enough, prayed enough, trusted enough — and that this image is flatly contradicted by the Gospels. Jesus identifies his own heart as &ldquo;gentle and lowly&rdquo; (Matthew 11:29), and Ortlund traces this through the Gospels and Epistles to show that the Christ who invites the anxious to come to him is not waiting to rebuke them for their anxiety but to receive their burden.",
  },
  {
    name: "Paul Tripp",
    role: "Suffering — Eternity Changes Everything",
    quote:
      "Anxiety is what happens when the temporary things of this world are functioning as the things I cannot live without. The antidote is not getting those things secured — it is having a heart that has been freed from their tyranny.",
    bio: "Paul Tripp is a counselor and author whose ministry has focused on the intersection of grace, suffering, and the formation of character. His approach to anxiety in books like Suffering and Awe is consistently to ask the heart question: what is your anxiety telling you about what you are trusting? He argues that most anxiety is a symptom of idolatry — not in the moralistic, shame-inducing sense, but in the diagnostic sense: something good has been elevated to a place it cannot bear, and the anxiety is the warning light. His pastoral counsel consistently moves from diagnosis to gospel: not &ldquo;trust less in that thing&rdquo; but &ldquo;here is the One who is actually able to bear the weight you are placing there.&rdquo;",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The structure of this passage is the prescription: anxiety redirected toward God in prayer, with specificity (supplication) and gratitude (thanksgiving), produces a peace that is given rather than manufactured. The peace stands guard over the heart and mind — the two centers from which anxiety launches its raids. Note that Paul writes this from prison: the peace on offer is not the peace of changed circumstances.",
  },
  {
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him, because he cares for you.",
    reflection:
      "The Greek word for cast is epiript&#333; — a strong, deliberate throw, not a gentle setting down. The ground of the transfer is not God&rsquo;s power or plan but his care: he is personally interested in what is troubling you. There is no category of anxiety too small, too irrational, or too chronic for this verse. The invitation is unconditional: all of it, because he cares.",
  },
  {
    reference: "Matthew 6:25-27",
    text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?",
    reflection:
      "Jesus does not dismiss the things people worry about as unimportant. He reframes them against the backdrop of a Father whose providential care is documented in every bird that ate today. The argument is relentlessly logical: lesser to greater. If the sparrow receives the Father&rsquo;s daily attention, the argument for his care of his own children is overwhelming. The problem anxiety exposes is a vision of God that is too small.",
  },
  {
    reference: "Psalm 42:5",
    text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.",
    reflection:
      "The psalmist does something unusual: he preaches to himself. He names the anxiety honestly — cast down, in turmoil — and then speaks to it with a command: hope in God. The assurance is not that the feeling has lifted but that praise will come again — &ldquo;I shall again.&rdquo; The movement is from present darkness to future hope, anchored in the character of God as &ldquo;my salvation and my God.&rdquo; This is the pattern of lament: honest acknowledgment plus theological anchor.",
  },
  {
    reference: "John 14:27",
    text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    reflection:
      "Jesus speaks this on the night before his death, to disciples whose anxiety is acute. The peace he gives is distinguished from worldly peace — peace as the absence of threat — by its source: it flows from his presence, not from the resolution of circumstances. The command &ldquo;let not your hearts be troubled&rdquo; is not a rebuke for feeling troubled; it is an invitation to receive something that is being actively given.",
  },
  {
    reference: "Isaiah 41:10",
    text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    reflection:
      "One of the most densely packed anti-anxiety verses in Scripture: five verbs of divine action — I am with you, I am your God, I will strengthen, I will help, I will uphold. The ground for &ldquo;fear not&rdquo; is not the absence of threat but the presence and character of God. He does not promise the right hand will remove the danger; he promises it will uphold the person in the middle of it.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "ZToZYOsYhFQ", title: "Philippians 4:6-7 — The Peace That Surpasses Understanding" },
  { videoId: "V5n-aS-FQZE", title: "Cast Your Anxiety on God — 1 Peter 5:7" },
  { videoId: "tHaP4z_VJaQ", title: "Anxiety, Depression, and the Christian Faith" },
  { videoId: "4J3h5TiZYvk", title: "The Birds of the Air — Matthew 6:25-34" },
  { videoId: "qpbRXtLXHyc", title: "Gentle and Lowly: Jesus&rsquo; Heart Toward the Anxious" },
  { videoId: "xJMsmPhDHFU", title: "Lament: The Prayer the Church Forgot" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianAnxietyGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<ANXEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [worry, setWorry] = useState("");
  const [biblePromise, setBiblePromise] = useState("");
  const [prayerResponse, setPrayerResponse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as ANXEntry[]);
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
    if (!worry.trim()) return;
    const entry: ANXEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      worry: worry.trim(),
      biblePromise: biblePromise.trim(),
      prayerResponse: prayerResponse.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWorry("");
    setBiblePromise("");
    setPrayerResponse("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? INDIGO : BORDER}`,
    background: active ? "rgba(99, 102, 241, 0.12)" : "transparent",
    color: active ? INDIGO : MUTED,
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
    color: INDIGO,
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
                color: INDIGO,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Faith &amp; Mental Health
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Cast Your Cares: A Christian Guide to Anxiety
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Anxiety is one of the most common struggles in contemporary life — and one the
              Scripture speaks to with startling directness and pastoral warmth. This guide
              explores the biblical response to anxiety from Philippians 4 and 1 Peter 5 to the
              birds of the air, the Psalms of lament, the peace that surpasses understanding, and
              the honest question of clinical anxiety and spiritual worry.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${INDIGO}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Do not be anxious about anything, but in everything by prayer and supplication
                with thanksgiving let your requests be made known to God. And the peace of God,
                which surpasses all understanding, will guard your hearts and your minds in Christ
                Jesus.&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>
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
                Before anxiety is a practice problem it is a theological problem — a vision of God
                that is too small, a trust that is misplaced, a prayer that has not yet been prayed.
                These eight studies trace anxiety from Philippians 4 and the Sermon on the Mount
                through the Psalms of lament to the distinction between clinical anxiety and
                spiritual worry.
              </p>

              {theologySections.map((section) => (
                <article key={section.badge} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: INDIGO,
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
                        background: "rgba(99, 102, 241, 0.07)",
                        border: `1px solid rgba(99, 102, 241, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: INDIGO,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Philippians 4&rsquo;s &ldquo;be anxious for nothing,&rdquo; 1 Peter&rsquo;s cast,
                  Jesus&rsquo; birds and lilies, the Psalms&rsquo; honest laments, the Spirit&rsquo;s
                  peace that guards from within — these are not separate topics but facets of one
                  truth: God is attentive to what troubles his people, and he has provided in the
                  relationship of prayer and community everything necessary to live inside the anxiety
                  without being consumed by it. Explore the Practices tab for concrete first steps,
                  or go deeper on{" "}
                  <Link
                    href="/christian-forgiveness-guide"
                    style={{ color: INDIGO, textDecoration: "underline" }}
                  >
                    forgiveness
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/christian-kindness"
                    style={{ color: INDIGO, textDecoration: "underline" }}
                  >
                    kindness
                  </Link>
                  , two close companions on the journey.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Anxiety is not overcome by willpower but by practiced redirection. These six
                practices give the command &ldquo;be anxious for nothing&rdquo; a shape — something
                you can actually do when the anxiety rises, not just an aspiration for when it
                subsides.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: INDIGO,
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
                      color: INDIGO,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about professional care
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  If anxiety is chronic, impairing your work or relationships, or accompanied by
                  panic attacks, intrusive thoughts, or trauma responses, please also see a
                  professional. A therapist trained in CBT, ACT, or EMDR can provide care that
                  spiritual practice alone cannot. Seeking that care is not a failure of faith; it
                  is stewardship of the mind and body God gave you. Many Christians find that therapy
                  and spiritual direction work powerfully together — they are not competing but
                  complementary.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Anxiety is best addressed in community, not in isolation. Six witnesses — a
                Victorian preacher who fought depression his entire ministry, a counselor who
                takes the body seriously, a pastor who refused thin comfort — show what living
                with anxiety inside faith looks like in practice.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: INDIGO,
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
                      background: "rgba(99, 102, 241, 0.06)",
                      borderLeft: `3px solid ${INDIGO}`,
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
                Six passages to read slowly, memorize, and pray. Each pairs the text with a short
                reflection. Consider taking one per week and carrying it alongside your anxiety
                journal entries — or turning each one into a breath prayer pairing.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: INDIGO,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, you are
                  the God who feeds sparrows and guards hearts&rdquo;), lament (&ldquo;I am anxious
                  about [specific thing] and I don&rsquo;t have peace yet&rdquo;), and petition
                  (&ldquo;I am casting this onto you now — stand guard&rdquo;). Do not wait until
                  anxiety has subsided to pray; bring it to God while it is acute. The cast is most
                  powerful when the weight is real.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Log a worry, the Bible promise you&rsquo;re standing on, and your prayer response.
                Naming anxiety specifically in writing changes its character — vague anxiety
                expands; named anxiety can be cast. Entries are saved privately in your browser.
                No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New anxiety entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="anx-worry" style={labelStyle}>
                    What are you worried about?
                  </label>
                  <textarea
                    id="anx-worry"
                    value={worry}
                    onChange={(e) => setWorry(e.target.value)}
                    placeholder="Name it specifically — not &ldquo;everything&rdquo; but the concrete thing your mind keeps returning to"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="anx-promise" style={labelStyle}>
                    The Bible promise you&rsquo;re standing on
                  </label>
                  <textarea
                    id="anx-promise"
                    value={biblePromise}
                    onChange={(e) => setBiblePromise(e.target.value)}
                    placeholder="A specific verse or passage — Philippians 4:6-7, Isaiah 41:10, 1 Peter 5:7, Psalm 23..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="anx-prayer" style={labelStyle}>
                    Your prayer response
                  </label>
                  <textarea
                    id="anx-prayer"
                    value={prayerResponse}
                    onChange={(e) => setPrayerResponse(e.target.value)}
                    placeholder="What you are casting to God, what you are trusting him with, what you will do and not do today"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!worry.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !worry.trim() ? BORDER : INDIGO,
                    color: !worry.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !worry.trim() ? "not-allowed" : "pointer",
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
                      Name one worry, one promise, and one prayer. The act of writing it is the
                      beginning of the cast.
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
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
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

                        <div style={{ marginBottom: entry.biblePromise || entry.prayerResponse ? 10 : 0 }}>
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
                            Worry
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.worry}
                          </p>
                        </div>

                        {entry.biblePromise && (
                          <div style={{ marginBottom: entry.prayerResponse ? 10 : 0 }}>
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
                              Bible promise
                            </span>
                            <p
                              style={{
                                color: INDIGO,
                                lineHeight: 1.65,
                                fontSize: "0.92rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.biblePromise}
                            </p>
                          </div>
                        )}

                        {entry.prayerResponse && (
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
                              Prayer response
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.prayerResponse}
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
                Teaching to watch slowly — on Philippians 4, the peace that surpasses
                understanding, lament as a spiritual practice, and the Christ whose heart is gentle
                and lowly toward the anxious. Good companions to the Theology and Journal tabs.
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
              The peace that guards
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Paul&rsquo;s promise in Philippians 4 is not that anxiety will cease but that the
              peace of God will stand guard over the heart and mind that keeps bringing its worries
              to God. The guard does not remove the threat; it stands between the soul and the
              threat&rsquo;s power to destabilize. The practice of casting — deliberate,
              repetitive, honest — is the practice that activates the guard. Cast it today. Cast it
              tomorrow. Cast it again when it comes back. The invitation is unconditional: all of
              it, because he cares.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link
                href="/christian-forgiveness-guide"
                style={{ color: INDIGO, textDecoration: "underline" }}
              >
                Christian Forgiveness
              </Link>
              , practice{" "}
              <Link
                href="/christian-kindness"
                style={{ color: INDIGO, textDecoration: "underline" }}
              >
                Christian Kindness
              </Link>
              , or go deeper on prayer with{" "}
              <Link
                href="/prayer"
                style={{ color: INDIGO, textDecoration: "underline" }}
              >
                The Prayer Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
