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

const STORAGE_KEY = "vine_christiantrust_entries";

interface TRSTEntry {
  id: string;
  date: string;
  whatImTrusting: string;
  theFear: string;
  thePromise: string;
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
    badge: "Hebrew Theology — Psalm 37:5 / Proverbs 3:5",
    title: "Batach — Leaning All Your Weight: The Hebrew Meaning of Trust",
    paragraphs: [
      "The primary Hebrew word for trust is batach (בָּטַח), and its root meaning is physical before it is spiritual: to lean upon, to throw one&rsquo;s full weight against. The image is of a person who stops trying to stand upright by their own strength and instead falls entirely against something — or someone — strong enough to bear them. When Proverbs 3:5 says &ldquo;trust in the LORD with all your heart,&rdquo; the word is batach: lean your whole weight upon him, hold nothing back, allow no hedge of self-reliance to remain.",
      "The word appears over 120 times in the Old Testament, and its opposite is not doubt but self-sufficiency: &ldquo;Cursed is the man who trusts in man and makes flesh his strength&rdquo; (Jer 17:5) — the same batach used of the man who leans on his own arm rather than God&rsquo;s. The contrast is not between the confident and the fearful but between those who lean on reliable weight-bearing realities and those who lean on what will eventually give way. To batach in God is not irrationality; it is an accurate estimate of what the universe can actually support.",
      "The Psalms use batach extensively in contexts of threat: &ldquo;When I am afraid, I put my trust in you&rdquo; (Ps 56:3). Trust in this sense is not the absence of fear but the decision, in the presence of fear, to lean weight onto what is actually trustworthy. The batach Psalms are not triumphalist; they are honest about the precariousness of the situation and confident about the character of the One being leaned upon. This is the grammar of biblical trust: not naive about the danger, clear-eyed about the Refuge.",
    ],
    callout: {
      label: "The word",
      text: "Batach (בָּטַח): to trust, to lean upon, to rely. The image is physical — throwing one&rsquo;s full weight against a support. The opposite is not doubt but self-reliance.",
    },
  },
  {
    badge: "Proverbs 3:5-6",
    title: "&ldquo;Lean Not on Your Own Understanding&rdquo; — The Cognitive Dimension of Trust",
    paragraphs: [
      "&ldquo;Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths&rdquo; (Prov 3:5-6). The verse does not tell us to stop thinking; it tells us to stop treating our own understanding as the final load-bearing wall. &ldquo;Lean not on your own understanding&rdquo; uses the same root as batach in inverted form: do not throw your weight against the limited, fallible, perspective-bound analysis of your own mind as though it were equal to the wisdom of the One who made the universe.",
      "The alternative — &ldquo;in all your ways acknowledge him&rdquo; — is not about pious feelings but about epistemic posture: bringing God into the frame of every decision, every interpretation, every plan, and holding those plans loosely enough to be redirected. The promise is not that God will make every path smooth, but that he will make them straight — directed toward the destination he has determined, which may run through difficulty rather than around it.",
      "The practical implication of Proverbs 3:5-6 is not decision paralysis but decision humility: the willingness to act on the best understanding available while acknowledging that the understanding is partial, that God sees more, and that the outcome is in his hands rather than yours. This is not passivity; it is the active pursuit of wisdom combined with a deliberate releasing of control over outcomes. Many Christians read the verse as a caution against analysis; it is more accurately a caution against idolizing analysis — treating your best thinking as equivalent to God&rsquo;s.",
    ],
  },
  {
    badge: "The Distinction",
    title: "Faith vs. Trust — Knowing About God vs. Leaning On God",
    paragraphs: [
      "Faith and trust are closely related but distinguishable in ways that matter pastorally. Faith, in the New Testament sense, is primarily relational and cognitive: the conviction that what God has said is true, the acceptance of the gospel record as reliable, the doctrinal allegiance to Christ as Lord. Trust is the behavioral and emotional extension of that faith into the specifics of lived experience: not just believing that God is sovereign in the abstract, but leaning weight onto that sovereignty in the particular moment when the diagnosis comes, the marriage fractures, or the finances collapse.",
      "You can have robust orthodox faith and very little practical trust. The theology is correct; the weight is still being held by the self. Oswald Chambers observed that many Christians know about God but do not know God — they have accurate beliefs without the experience of having tested them under actual pressure. Trust is faith field-tested: the kind of confidence that comes not from having memorized the character of God but from having actually leaned on it in situations where leaning was the only option.",
      "Hannah Whitall Smith&rsquo;s The Christian&rsquo;s Secret of a Happy Life is a sustained argument for the distinction: the &ldquo;secret&rdquo; she names is the step from intellectual conviction about God&rsquo;s care to actual, practical, moment-by-moment surrender of the self into that care. She calls it &ldquo;abandonment&rdquo; — not passive resignation but active entrusting, the deliberate releasing of what one has been clutching. Faith is the foundation; trust is the building that must be erected on it.",
    ],
    callout: {
      label: "Key distinction",
      text: "Faith says &ldquo;God is trustworthy.&rdquo; Trust says &ldquo;I am actually leaning on him, right now, with this specific fear.&rdquo; The first is possible without the second; the second is not possible without the first.",
    },
  },
  {
    badge: "Psalm 22",
    title: "Trust as Vulnerability Before God — &ldquo;My God, My God, Why?&rdquo;",
    paragraphs: [
      "Psalm 22 opens with the most naked cry in the psalter: &ldquo;My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?&rdquo; (v. 1). This is the psalm Jesus quotes from the cross (Matt 27:46), and its inclusion in the canon as an act of worship is among Scripture&rsquo;s most radical theological moves: the cry of dereliction — the experience of God&rsquo;s absence — is not the failure of trust but one of its most honest forms.",
      "The psalm holds two things simultaneously throughout: the experience of abandonment and the inherited tradition of God&rsquo;s faithfulness. &ldquo;In you our fathers trusted; they trusted, and you delivered them&rdquo; (v. 4). The psalmist does not resolve the tension by denying either the experience or the tradition; he holds both, and the act of holding both — bringing the abandonment into the presence of God rather than away from it — is itself an act of trust. You do not cry &ldquo;My God&rdquo; to a God you have given up on. The lament is addressed to someone.",
      "The movement of the psalm is not from despair to easy resolution but from lament to praise, through unresolved suffering: by verse 24, the psalmist declares that &ldquo;he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.&rdquo; Something has changed — not the circumstances, but the orientation. The trust that emerges from Psalm 22 is not the trust of smooth sailing; it is the trust of someone who has taken their desolation to God and discovered, in the taking, that God was present in the desolation itself.",
    ],
  },
  {
    badge: "Job",
    title: "Trusting God&rsquo;s Character When Circumstances Are Dark — The Theology of Job",
    paragraphs: [
      "The book of Job is the Old Testament&rsquo;s most sustained confrontation with the question of whether trust can survive catastrophic suffering. Job loses everything — children, wealth, health — and then endures the theological malpractice of three friends who insist his suffering must be proportional to his sin, that God&rsquo;s justice is mechanical and therefore his suffering is deserved. Job refuses their comfort, not because he has lost faith but because he trusts God enough to argue with him: &ldquo;Though he slay me, I will hope in him; yet I will argue my ways to his face&rdquo; (Job 13:15).",
      "The remarkable reversal at the end of Job is not that God vindicates Job by explaining the suffering (he never does) but that God rebukes the three friends for their false theology and endorses Job: &ldquo;You have not spoken of me what is right, as my servant Job has&rdquo; (42:7). What was right about Job&rsquo;s speech? He brought his actual experience — his confusion, his anger, his protest — into the presence of God rather than suppressing it into pious platitude. He trusted God enough to be honest with him. The friends&rsquo; confident explanations were, paradoxically, a failure of trust; they trusted their theological system more than they trusted God&rsquo;s freedom to act outside their system.",
      "Job&rsquo;s trust is not vindicated by explanation but by encounter: the whirlwind chapters (38-41) do not answer Job&rsquo;s questions but overwhelm them with the vision of a God whose ways are beyond Job&rsquo;s comprehension — and that vision, paradoxically, is enough. Job&rsquo;s response is not intellectual satisfaction but worship (40:4-5; 42:1-6): the suffering has not been explained, but Job has seen God, and the seeing is sufficient ground for trust. This is the deepest form of batach: leaning not on understanding but on the person himself.",
    ],
    callout: {
      label: "Key verse",
      text: "Job 13:15 — &ldquo;Though he slay me, I will hope in him.&rdquo; Trust that survives the worst circumstance is not naive; it is the fruit of knowing, through encounter, who God is.",
    },
  },
  {
    badge: "Isaiah 26:3",
    title: "Perfect Peace — The Mind Stayed on God",
    paragraphs: [
      "&ldquo;You keep him in perfect peace whose mind is stayed on you, because he trusts in you&rdquo; (Is 26:3). The Hebrew for &ldquo;perfect peace&rdquo; is shalom shalom — the word doubled for emphasis, the most complete form of the wholeness and well-being that the Hebrew shalom denotes. The condition for receiving it is the &ldquo;mind stayed&rdquo; — the word for stayed means leaned, supported, braced against — on God. The connection to batach is direct: the mind that has thrown its weight onto God, rather than onto its own analysis of the situation, is the mind that receives the doubled peace.",
      "Isaiah 26 is a song sung in the city of God, the community that has trusted God through the long devastation of chapters 1-25 and is now receiving the promise of restoration. The peace is not the peace of those who never suffered; it is the peace of those who trusted through suffering and found that the trust held. The &ldquo;perfect peace&rdquo; is the peace of proven ground — confidence that has been tested and has not given way.",
      "The practical implication is attentional: trust, in this verse, is not primarily a feeling but a direction of thought. The anxious mind is the mind that keeps returning to the problem, rehearsing the worst case, reviewing the evidence for disaster. The trusting mind is the mind that keeps returning to God — to his character, his promises, his track record, his present care. The peace follows not as a direct result of willing it but as the natural consequence of where the attention lands. This is why so many spiritual writers connect Isaiah 26:3 to contemplative prayer: the stayed mind is a practiced mind.",
    ],
  },
  {
    badge: "John of the Cross",
    title: "The Dark Night of the Soul — Trust in the Absence of Felt Presence",
    paragraphs: [
      "The sixteenth-century Spanish mystic John of the Cross described what he called the &ldquo;dark night of the soul&rdquo; — a season in the Christian life characterized by the withdrawal of felt consolation, the apparent absence of God, the drying up of the emotional and spiritual experiences that previously sustained the interior life. Far from representing the failure of faith, John argued that the dark night is a gift: God withdraws the felt experiences of his presence in order to wean the soul from its dependency on spiritual feelings and teach it to trust him purely, without the support of consolation.",
      "In the dark night, trust is stripped of all its props. You cannot trust the feeling of God&rsquo;s presence, because the feeling is absent. You cannot trust your spiritual experiences, because they have dried up. You cannot trust your own understanding of what is happening, because the darkness is, by definition, disorienting. What remains is the naked act of trusting God himself — his character, his promises, his faithfulness recorded in Scripture and tradition — without any experiential confirmation in the present moment. This is the purest form of trust: batach without the comfort of sensible consolation.",
      "John of the Cross does not present the dark night as permanent; he describes it as a passage, a purification, a movement from a less mature to a more mature form of trust. Those who endure it without turning back — who continue to present themselves to God in prayer even when the prayer feels empty, who continue to obey even when the obedience feels meaningless — emerge with a quality of trust that is no longer dependent on spiritual experience and is therefore no longer vulnerable to its absence. The dark night produces the very trust it appears to destroy.",
    ],
    callout: {
      label: "From John of the Cross",
      text: "The dark night is not God&rsquo;s absence but God&rsquo;s transformation: the removal of the soul&rsquo;s dependency on consolation so that trust may rest on character alone.",
    },
  },
  {
    badge: "Anxiety and Control",
    title: "Trust as the Antidote to Control and Anxiety",
    paragraphs: [
      "The deepest root of both control and anxiety is the same: the belief that safety depends on our own management of outcomes. The controlling person and the anxious person are often the same person — the controller manages as long as managing is possible, and the anxious person fears what happens when managing fails. Both are attempting to do what only God can do: guarantee the future. Trust is the theological and psychological antidote to both, because it relocates the responsibility for outcomes from the self to the One who is actually in charge of them.",
      "A.W. Tozer observed that the person who has truly trusted God has been &ldquo;freed from the burden of the future.&rdquo; The future is heavy cargo for human beings to carry; we are not built for it. God is. Trust does not deny that the future is uncertain; it acknowledges that the One who holds it is not. The anxiety that comes from clutching control dissolves — not all at once, not without effort, but gradually — as the practice of releasing specific worries to God builds, over time, a habitual orientation of entrusting rather than clutching.",
      "Corrie ten Boom, who survived the Nazi concentration camps after being arrested for hiding Jews in her family&rsquo;s home in Haarlem, said: &ldquo;Worry does not empty tomorrow of its sorrow; it empties today of its strength.&rdquo; Her capacity to trust in circumstances of extreme suffering was forged over decades of small, daily acts of surrender — practiced in ordinary life long before it was required in extremis. Trust, like every spiritual capacity, is not summoned in the emergency; it is built in the ordinary. The Journal tab is designed for that building.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Trust Transfer — Giving a Specific Fear to God",
    summary:
      "A focused prayer practice for the moment of anxiety: naming the specific fear, identifying the underlying belief, and making a concrete act of entrusting it to God.",
    steps: [
      "When anxiety or control surfaces, stop and name it specifically. Not &ldquo;I&rsquo;m anxious&rdquo; but &ldquo;I am afraid that this diagnosis means my life is about to change permanently and I will not be able to bear it.&rdquo; Specificity is required because vague anxiety cannot be specifically entrusted.",
      "Ask the underlying question: what am I believing that is producing this fear? Common underlying beliefs: &ldquo;I cannot survive this,&rdquo; &ldquo;God has forgotten me,&rdquo; &ldquo;the worst is inevitable,&rdquo; &ldquo;I must stay in control or something terrible will happen.&rdquo; Name the belief honestly.",
      "Find the specific promise that addresses the specific fear. Not a generic &ldquo;God is good&rdquo; — too broad to grip — but the targeted word: Philippians 4:7 for the anxious mind, Isaiah 41:10 for the fear of being overwhelmed, Romans 8:28 for the confusion about outcomes, Psalm 23 for the fear of the valley. Let the specific promise meet the specific fear.",
      "Make the transfer verbally and deliberately: &ldquo;Lord, I give you [name the specific thing]. I acknowledge that I cannot control this outcome. I trust that you are [name the specific aspect of his character that is relevant]. I release my grip.&rdquo; Do this as many times as the anxiety returns. Trust is not once-for-all but repeatedly practiced.",
    ],
    anchor: "1 Peter 5:7 — Casting all your anxieties on him, because he cares for you.",
  },
  {
    number: "02",
    title: "The Examen of Trust — Evening Review of Where Control Appeared",
    summary:
      "An evening practice that identifies where the day&rsquo;s anxiety and control came from, what the underlying fear was, and where trust was available but not taken.",
    steps: [
      "Set aside ten minutes before sleep. Ask the Spirit to show you honestly: where did anxiety or control appear today? Where did you grip rather than release, manage rather than trust, rehearse worst cases rather than returning your mind to God?",
      "For each identified moment: what was the underlying fear? Name it without judgment — the pattern is human and common. What would batach have looked like in that moment? What promise was available and not taken?",
      "Name one moment in the day where you did trust — however small, however brief, however imperfect. Acknowledge it as grace, not achievement. The Spirit produced that moment of surrender; name it and thank God for it.",
      "Close with a deliberate act of entrusting the night to God: the things unresolved, the fears still present, the outcomes still uncertain. The Examen is not about achieving a clean slate; it is about ending the day with your weight on the right support.",
    ],
    anchor: "Psalm 4:8 — In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.",
  },
  {
    number: "03",
    title: "Staying the Mind — The Contemplative Practice of Isaiah 26:3",
    summary:
      "A daily practice of returning the wandering mind to God, building over time the habitual orientation of &ldquo;stayed&rdquo; attention that Isaiah 26:3 describes.",
    steps: [
      "Set aside fifteen to twenty minutes in the morning for what the contemplative tradition calls the prayer of recollection: begin by naming where your mind currently is — the anxieties, the plans, the rehearsed conversations — and deliberately turn it toward God. This is not suppression but redirection.",
      "Use a single short phrase or biblical name as the anchor — &ldquo;You are faithful,&rdquo; &ldquo;Lord Jesus,&rdquo; &ldquo;My Shepherd&rdquo; — and when the mind wanders (it will, immediately and repeatedly), return it to the anchor without self-criticism. The return itself is the practice; it is building the neural and spiritual pathway of &ldquo;stayed&rdquo; attention.",
      "After the morning session, carry the anchor into the day: when anxiety surfaces, use the anchor phrase as the first response rather than the rehearsal of the fear. Not suppressing the fear but intercepting it and redirecting to the object of trust.",
      "At the end of a week, note: is the gap between anxiety&rsquo;s arrival and the redirect getting shorter? Trust is built incrementally; the metric is not the absence of anxiety but the increasing speed of return to God when it arrives.",
    ],
    anchor: "Isaiah 26:3 — You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
  },
  {
    number: "04",
    title: "The Lament Prayer — Bringing Darkness Into God&rsquo;s Presence",
    summary:
      "Following the pattern of Psalm 22 and Job: the practice of bringing the actual darkness — not a sanitized version of it — into the presence of God, trusting him enough to be honest.",
    steps: [
      "Write or pray a lament using Psalm 22 as a structural model: begin with the raw honest statement of the experience — what it feels like, what God seems to be doing or not doing, what you cannot understand. Do not soften it for God&rsquo;s benefit. He knows, and the act of honesty is itself an act of trust.",
      "In the middle of the lament, insert the inherited truth: &ldquo;And yet I know from Scripture and from the record of your faithfulness that you are [name the specific attribute that is in tension with the present experience].&rdquo; Hold the tension. Do not resolve it prematurely.",
      "Wait. The resolution of Job did not come through argument but through encounter. After the lament has been prayed honestly, sit in silence and listen. You may not hear anything. The act of waiting is the act of trust — remaining present to God even when God seems silent.",
      "Close with whatever truth you can honestly affirm, however small: &ldquo;I do not understand this. I am still here. You are still my God.&rdquo; This is the posture of Psalm 22&rsquo;s movement from verse 1 to verse 24 — not resolution, but continued address.",
    ],
    anchor: "Psalm 22:24 — For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.",
  },
  {
    number: "05",
    title: "Identifying the Promises — Building a Personal Treasury of Trust",
    summary:
      "A study and memorization practice for building the reservoir of specific promises from which trust can draw in moments of specific fear.",
    steps: [
      "Over four weeks, identify twelve to fifteen specific promises from Scripture that address your recurring fears. Do not collect generic reassurances; find promises that speak to the specific texture of your anxiety — about provision, about abandonment, about the future, about suffering, about God&rsquo;s presence in the dark.",
      "Memorize them — not as magic formulas but as internalized truth that is available when the anxiety arrives before the Bible is. The person who has Philippians 4:7 memorized can deploy it in the middle of a panic attack; the person who has only read it cannot always access it at 3 a.m.",
      "Practice deploying them: when a specific fear surfaces, mentally reach for the specific promise. &ldquo;This is the fear of abandonment. The promise for abandonment is Hebrews 13:5: &lsquo;I will never leave you nor forsake you.&rsquo;&rdquo; The deployment is not a technique for suppressing the fear but for giving the trusting mind something real to lean on while the fear is present.",
      "Review the promises quarterly: which ones have been most used? Which fears have they addressed? Has the reservoir grown? A treasury of trust is built over years, promise by promise, fear by fear, deployment by deployment.",
    ],
    anchor: "2 Peter 1:4 — He has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature.",
  },
  {
    number: "06",
    title: "The Surrender Prayer — The Daily Practice of Releasing Control",
    summary:
      "A short daily prayer practice that names the specific things being controlled today and makes a deliberate act of surrendering them to God, building the habitual orientation of trust.",
    steps: [
      "Each morning, before the day&rsquo;s activity begins, name three to five specific things you are currently trying to control: an outcome you are managing, a person you are attempting to influence or fix, a situation you are rehearsing how to handle. Naming them is the first act of surrender — admitting that you are holding them.",
      "For each one, make the specific surrender: &ldquo;Lord, I am holding [name it]. I acknowledge I cannot guarantee this outcome. I release it to you. You are [name the specific aspect of his character relevant to this situation — his sovereignty, his care, his wisdom, his power].&rdquo;",
      "Close with the acknowledgment that you will likely pick it back up before the day is over, and that when you do, you will return and surrender it again. Trust is not a one-time transaction but a repeated, daily practice of releasing and returning. The act of repeated surrender is not weakness; it is the form that trust takes in ordinary life.",
      "At the end of the week, review: which items were hardest to release? What does the pattern reveal about the deepest fears, the tightest grips, the places where trust is most needed and most costly? Let the pattern become the agenda for prayer and honest conversation with God.",
    ],
    anchor: "Proverbs 3:5-6 — Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Charles Spurgeon",
    role: "Sermons on Trust — Trusting the God Who Is Greater Than Our Hearts",
    quote:
      "Trust in the Lord. Do not trust your feelings, do not trust your evidences, do not trust your experience — but trust the Lord. Not because everything is clear, but because he is God.",
    bio: "Charles Spurgeon was the most popular preacher of the Victorian era, delivering sermons to thousands each week at the Metropolitan Tabernacle in London. His own life was shadowed by severe depression — what he called the &ldquo;down periods&rdquo; that recurred throughout his ministry — and his sermons on trust have the authority of someone who has learned it under duress rather than in comfort. Spurgeon&rsquo;s theology of trust is thoroughly Calvinist: God&rsquo;s sovereignty is the foundation, and the peace available to the trusting soul rests on the immovability of that sovereignty rather than on the believer&rsquo;s performance. His sermons consistently redirect the anxious Christian away from introspection (&ldquo;do I trust enough?&rdquo;) toward the object of trust (&ldquo;is God trustworthy?&rdquo;) — the shift from subjective feeling to objective character that the biblical batach implies. His collected sermons, available in sixty-three volumes, contain among the most sustained and practically useful treatments of trust in the English preaching tradition.",
  },
  {
    name: "Hannah Whitall Smith",
    role: "The Christian&rsquo;s Secret of a Happy Life — Abandonment as the Gateway to Trust",
    quote:
      "The trouble is that we carry our burdens instead of rolling them upon the Lord. We try to manage our own affairs instead of trusting him to manage them for us. We are so afraid he will not do it rightly.",
    bio: "Hannah Whitall Smith was a nineteenth-century Quaker writer whose The Christian&rsquo;s Secret of a Happy Life (1875) became one of the most widely read evangelical books of the century. The &ldquo;secret&rdquo; she describes is the step from intellectual belief in God&rsquo;s care to actual, practical, moment-by-moment surrender of the self into that care — what she calls &ldquo;abandonment&rdquo; or &ldquo;entire consecration.&rdquo; Smith is particularly acute on the failure mode she describes as &ldquo;practical atheism&rdquo;: the believer who affirms God&rsquo;s sovereignty on Sunday and then spends Monday managing every outcome personally, holding every fear privately, trusting God in principle and themselves in practice. Her counsel is disarmingly direct: &ldquo;Put your trust in him,&rdquo; she writes, &ldquo;and let him carry the burden that is crushing you.&rdquo; Smith wrote from a life that included significant personal sorrow — a husband whose later theology she rejected, children who abandoned the faith — and her trust theology bears the marks of having been tested rather than merely taught.",
  },
  {
    name: "John of the Cross",
    role: "Dark Night of the Soul; Ascent of Mount Carmel — Trust in the Absence of Consolation",
    quote:
      "In the dark night of the soul, bright flows the river of God. The soul that walks in darkness does not walk in falsehood but in faith, and it is faith that God uses to purify and enlarge the soul&rsquo;s capacity for him.",
    bio: "John of the Cross was a sixteenth-century Spanish Carmelite mystic and theologian, reformer alongside Teresa of &Aacute;vila, and prisoner of his own order for his reforming work. His two major works — The Ascent of Mount Carmel and The Dark Night of the Soul — are the most rigorous theological accounts of the purifying work God does in the soul through the withdrawal of consolation. John&rsquo;s contribution to the theology of trust is unique: he maps in careful detail what it feels like when God is stripping the soul of its dependence on spiritual experience, and he names it as progress rather than failure. The soul in the dark night experiences the withdrawal of God&rsquo;s felt presence, the drying up of prayer&rsquo;s consolation, the apparent abandonment — and is invited, precisely in that experience, to discover whether it trusts God or trusts its experience of God. The distinction is decisive: trust that rests on felt consolation is not yet the deep trust of batach; trust that holds in the absence of feeling is trust that has found its proper foundation.",
  },
  {
    name: "Oswald Chambers",
    role: "My Utmost for His Highest — Trust as the Surrender of the Will",
    quote:
      "Trust God and do the next thing. And the next thing may not be impressive or interesting — it may be washing the dishes or cleaning your room. But it is the next thing, and trust is proved in the ordinary.",
    bio: "Oswald Chambers was a Scottish-born Bible teacher whose My Utmost for His Highest — compiled from his lectures and published posthumously in 1927 — has been in continuous print for nearly a century. Chambers died in 1917 at forty-three, serving as a YMCA chaplain in Egypt, and his theology of trust was forged in a life of consistent surrender rather than settled comfort. His approach to trust is radically Christocentric: the foundation is not abstract sovereignty but the specific character of the Jesus who said &ldquo;follow me&rdquo; into situations of cost and uncertainty. Chambers distinguishes consistently between the faith that assents to doctrine and the trust that commits the will — and he is unflinching about the fact that genuine trust requires the death of self-reliance at the level of will, not merely intellect. His counsel to &ldquo;trust God and do the next thing&rdquo; is among the most practically useful pieces of trust theology in the devotional tradition: not waiting for certainty or comfort before acting, but moving forward on the basis of God&rsquo;s faithfulness in the ordinary next step.",
  },
  {
    name: "A.W. Tozer",
    role: "The Pursuit of God; The Knowledge of the Holy — Trust Grounded in the Knowledge of God",
    quote:
      "What comes into our minds when we think about God is the most important thing about us. And a low view of God is the cause of a hundred lesser evils — including the failure to trust.",
    bio: "A.W. Tozer was a self-educated pastor and author whose The Knowledge of the Holy (1961) argues that the root of the church&rsquo;s practical failures — including the failure of practical trust — is a deficient theology of God. Tozer&rsquo;s argument for trust is indirect but devastating: you cannot trust a God you have domesticated, a God who is merely helpful rather than sovereign, a God whose greatness has been reduced to human scale. The recovery of trust requires the recovery of the full biblical picture of God — his omnipotence, his omniscience, his immutability, his perfect goodness — because trust is only as strong as the trustworthiness of the One being trusted. Tozer&rsquo;s sustained attention to the attributes of God is not merely academic; it is practical: the person who has genuinely seen God as God can rest in him as the one who is actually in charge of the outcomes that cause fear. His writing combines the precision of systematic theology with the passion of a revivalist, and his call to pursue God — not his benefits but himself — is the deepest theological grounding of the trust that Proverbs 3:5 requires.",
  },
  {
    name: "Corrie ten Boom",
    role: "The Hiding Place — Trust Forged in the Worst Circumstances",
    quote:
      "Worry does not empty tomorrow of its sorrow; it empties today of its strength. Never be afraid to trust an unknown future to a known God.",
    bio: "Corrie ten Boom was a Dutch watchmaker&rsquo;s daughter who, with her family, hid Jews from the Nazis during the German occupation of the Netherlands. Arrested in 1944, she survived the Ravensbrück concentration camp — where her sister Betsie died — and spent the rest of her long life (she died in 1983 at age ninety-one) testifying to the trustworthiness of God in the worst circumstances human beings encounter. The Hiding Place is her account of that experience, and it is among the most powerful documents of practical trust in Christian literature: not the trust of comfortable theology but of a woman who watched God provide, protect, and sustain — and who watched God also allow suffering that could not be explained or softened. Her famous illustration of the train ticket — her father&rsquo;s counsel that you don&rsquo;t need the ticket until the moment you get on the train, and God provides it then — remains one of the most memorable pictures of trust in the English-speaking Christian tradition: not the provision of certainty in advance, but the sufficiency of grace in the moment.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
    reflection:
      "The command is comprehensive (&ldquo;with all your heart,&rdquo; &ldquo;in all your ways&rdquo;) and the prohibition is precise (&ldquo;do not lean on your own understanding&rdquo;). The verse does not prohibit thought; it prohibits the idolization of thought — treating the self&rsquo;s best analysis as the final load-bearing wall. The promise — &ldquo;he will make straight your paths&rdquo; — is not that the path will be easy but that it will be directed. Trust does not guarantee smooth terrain; it guarantees a reliable guide.",
  },
  {
    reference: "Isaiah 26:3",
    text: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    reflection:
      "Shalom shalom — doubled peace, the fullest form of wholeness and well-being the Hebrew language can express. The condition is attentional: the mind stayed, braced, leaned upon God. The peace is not the absence of trouble but the presence of a mind that has found its resting place in the character of God rather than in the resolution of circumstances. Trust and peace are not sequential here; they are simultaneous — the trust is the staying, and the peace is what the staying produces.",
  },
  {
    reference: "Psalm 22:1-5",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, from the words of my groaning?... Yet you are holy, enthroned on the praises of Israel. In you our fathers trusted; they trusted, and you delivered them.",
    reflection:
      "The grammar of trust in extremis: holding the experience of abandonment and the inherited tradition of faithfulness simultaneously. The psalmist does not resolve the tension; he brings both into the presence of God. &ldquo;My God&rdquo; — the cry of dereliction is still addressed to someone. The trust does not deny the darkness; it refuses to let the darkness be the last word or the only frame.",
  },
  {
    reference: "Job 13:15",
    text: "Though he slay me, I will hope in him; yet I will argue my ways to his face.",
    reflection:
      "The most stripped-down trust statement in Scripture: trust that holds even if the worst happens, combined with the freedom to bring the protest honestly before God. These two — trust and argument — are not contradictory; they are the two movements of a soul that takes God seriously enough to lean on him and to be honest with him. The friends&rsquo; confident explanations were a failure of trust; Job&rsquo;s honest protest was trust in its most mature form.",
  },
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The peace promised is not the resolution of the feared situation but a peace architecturally stronger than understanding — a peace that holds when the circumstances have not changed and the analysis still points to danger. The mechanism is not positive thinking but specific entrusting: naming the fear, bringing it to God with thanksgiving (not denial), and releasing it into the care of the one who is actually in charge of the outcome.",
  },
  {
    reference: "1 Peter 5:6-7",
    text: "Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.",
    reflection:
      "The command to cast anxieties is grounded in the character of God: &ldquo;because he cares for you.&rdquo; Trust is not the heroic suppression of anxiety; it is the deliberate act of throwing anxieties onto one who is both mighty enough to bear them and personal enough to care. &ldquo;Casting&rdquo; is the same language as throwing a burden — it is an active, deliberate, repeated gesture. The humble person is the one who acknowledges they cannot carry what they have been carrying and who is willing to give it to someone who can.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "KGQmQkTxYuI", title: "Trusting God — The Theology of Batach and Biblical Faith" },
  { videoId: "MKdQ4kNJVwI", title: "Proverbs 3:5-6 — Leaning Not on Your Own Understanding" },
  { videoId: "cLbkqNEp3UM", title: "The Dark Night of the Soul — John of the Cross Explained" },
  { videoId: "Y9F9S_EuNb4", title: "When God Seems Silent — Trust in the Valley" },
  { videoId: "zT3lsSmsPaI", title: "Corrie ten Boom — Trust Forged in the Worst Circumstances" },
  { videoId: "y-8xXq4DMQE", title: "Isaiah 26:3 — Perfect Peace and the Stayed Mind" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianTrustPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<TRSTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatImTrusting, setWhatImTrusting] = useState("");
  const [theFear, setTheFear] = useState("");
  const [thePromise, setThePromise] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as TRSTEntry[]);
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
    if (!whatImTrusting.trim() || !theFear.trim()) return;
    const entry: TRSTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatImTrusting: whatImTrusting.trim(),
      theFear: theFear.trim(),
      thePromise: thePromise.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatImTrusting("");
    setTheFear("");
    setThePromise("");
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
              Trust &amp; Faith
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Trusting God: The Theology and Practice of Leaning on What Holds
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Hebrew word batach means to throw your full weight against something — to lean
              without holding back. Biblical trust is not passive optimism or the suppression of
              fear; it is the deliberate, repeated act of placing the self and its specific fears
              onto the character and promises of the God who is actually strong enough to bear them.
              This guide traces the theology of trust from Proverbs 3 through Job and the dark night,
              and builds the practices that form it in ordinary life.
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
                &ldquo;Trust in the LORD with all your heart, and do not lean on your own
                understanding. In all your ways acknowledge him, and he will make straight your
                paths.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>Proverbs 3:5-6</p>
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
                Eight studies tracing the theology of trust from batach and Proverbs 3 through Psalm
                22, Job, Isaiah 26:3, and John of the Cross — exploring the difference between faith
                and trust, trust as vulnerability, and trust as the antidote to control and anxiety.
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
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Batach, Proverbs 3, the dark night, Isaiah 26:3, Job&rsquo;s protest — these are
                  not separate topics but one doctrine of trust seen under different kinds of
                  pressure. What they share: trust is not the absence of fear but the direction of
                  weight; the foundation is God&rsquo;s character, not our feelings; and the
                  practice is daily, specific, and repeated. Explore how trust intersects with
                  anxiety in{" "}
                  <Link href="/christian-anxiety-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Anxiety
                  </Link>{" "}
                  or with peace in{" "}
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
                Six practices for building trust in the specific texture of ordinary life — from the
                Trust Transfer prayer to the stayed-mind contemplative practice, lament prayer, and
                the daily surrender. Start with one and let it build the others.
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
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the slow work of trust
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Trust is not built by a single act of will; it is built by thousands of small
                  surrenders accumulated over years. The person who trusts God deeply in a crisis
                  has almost always been practicing trust in the small things — and failing, and
                  returning, and practicing again. The Journal tab is designed to support that slow,
                  specific work: naming what you are trusting God with, naming the fear underneath
                  it, and naming the promise you are standing on. Over time, the journal becomes a
                  record of God&rsquo;s faithfulness in the specific texture of your life — the
                  best possible foundation for the trust that difficult seasons will require.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian trust
                — Spurgeon&rsquo;s Victorian pulpit, Hannah Whitall Smith&rsquo;s Quaker candor,
                John of the Cross&rsquo;s dark night, Chambers&rsquo;s daily surrender, Tozer&rsquo;s
                pursuit of God&rsquo;s character, and Corrie ten Boom&rsquo;s concentration camp
                faith. Each one learned trust under pressure.
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
                Six passages that form the biblical theology of trust — from Proverbs 3 to Isaiah
                26:3 to Psalm 22 to Job. Read them one per week alongside the Journal practice. Let
                each text both describe and produce the posture of batach.
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
                  Take each passage and use it as a trust exercise: read it slowly, name the
                  specific thing in your life that this text addresses, and make a deliberate act of
                  batach — leaning your weight onto the truth the text names. End with the
                  acknowledgment: &ldquo;I am leaning. I do not feel the ground under me. But I am
                  choosing to lean.&rdquo; Trust in the Bible is rarely the absence of uncertainty;
                  it is the direction of weight in the presence of it.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that build trust over time: what are you trusting God with right now,
                what is the specific fear underneath it, and what promise are you standing on?
                Entries are stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New trust entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="trst-what" style={labelStyle}>
                    What I&rsquo;m trusting God with right now
                  </label>
                  <input
                    id="trst-what"
                    type="text"
                    value={whatImTrusting}
                    onChange={(e) => setWhatImTrusting(e.target.value)}
                    placeholder="Name it specifically — a health situation, a relationship, a decision, a fear about the future..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="trst-fear" style={labelStyle}>
                    The specific fear underneath it
                  </label>
                  <textarea
                    id="trst-fear"
                    value={theFear}
                    onChange={(e) => setTheFear(e.target.value)}
                    placeholder="What is the actual fear? Name it honestly — not the surface anxiety but the deeper one underneath it..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="trst-promise" style={labelStyle}>
                    The promise I&rsquo;m standing on
                  </label>
                  <textarea
                    id="trst-promise"
                    value={thePromise}
                    onChange={(e) => setThePromise(e.target.value)}
                    placeholder="A specific Scripture promise, an aspect of God&rsquo;s character, a past faithfulness — what you are leaning your weight on..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatImTrusting.trim() || !theFear.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatImTrusting.trim() || !theFear.trim() ? BORDER : BLUE,
                    color: !whatImTrusting.trim() || !theFear.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatImTrusting.trim() || !theFear.trim() ? "not-allowed" : "pointer",
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
                      Name what you&rsquo;re trusting God with, name the fear underneath it, and
                      name the promise you&rsquo;re standing on. Over time this becomes a record of
                      God&rsquo;s faithfulness in the specific things that were hard to trust him
                      with.
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
                              {entry.whatImTrusting}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.whatImTrusting}`}
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
                            The fear underneath
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theFear}
                          </p>
                        </div>

                        {entry.thePromise && (
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
                              The promise I&rsquo;m standing on
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.thePromise}
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
                Teaching on biblical trust, batach, Proverbs 3:5-6, the dark night of the soul, and
                the theology of trusting God in suffering. Good companions to the Theology and
                Practices tabs.
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
              Trust as the shape of a Christian life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Trust is not a single decision but a posture that must be taken up daily, specifically,
              and often in the dark. The person who trusts God deeply in a crisis has been practicing
              in the ordinary — the small surrenders, the specific entrusting of particular fears,
              the repeated return of the wandering mind to the God who is actually in charge. Batach
              is not passive; it is the most active thing a person can do with their anxiety:
              deliberately, repeatedly, specifically throw the weight onto the One who can bear it.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how trust relates to peace in{" "}
              <Link href="/christian-peace" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Peace
              </Link>
              , explore what trust looks like in suffering in{" "}
              <Link href="/christian-suffering" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Suffering
              </Link>
              , or see how trust and hope reinforce each other in{" "}
              <Link href="/christian-hope" style={{ color: BLUE, textDecoration: "underline" }}>
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
