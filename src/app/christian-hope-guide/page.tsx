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

const STORAGE_KEY = "vine_hopeguide_entries";

interface HPGEntry {
  id: string;
  date: string;
  despairArea: string;
  promiseStandingOn: string;
  forwardStep: string;
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
    badge: "Hebrews 6:19",
    title: "Elpis — Hope as Confident Expectation, Not Wishful Thinking",
    paragraphs: [
      "The Greek word for hope in the New Testament is elpis — and it does not mean what modern English means by &ldquo;hope.&rdquo; In contemporary usage, &ldquo;I hope so&rdquo; is polite uncertainty: I wish it were true but doubt it is. Elpis in the New Testament is closer to confident expectation: a forward-looking trust grounded not in probability but in the character and promise of God. When Paul writes in Romans 5:5 that &ldquo;hope does not put us to shame,&rdquo; the claim is that this hope does not disappoint, does not deceive, does not fail — because its foundation is not human desire but divine faithfulness.",
      "Hebrews 6:19 gives hope its most vivid image: &ldquo;We have this hope as an anchor for the soul, firm and secure.&rdquo; An anchor works against drift — it holds when the current runs hard and the storm rises. But Hebrews locates this anchor not in favorable circumstances, or in the visible world at all, but in the invisible: it &ldquo;enters the inner sanctuary behind the curtain,&rdquo; where Christ has gone as our forerunner and high priest. The anchor is in heaven, and it holds from there. Christian hope is not optimism about the present; it is certainty about the future grounded in the one who is already there.",
      "This distinction matters enormously for suffering. Optimism fails in the face of sufficient bad news. Elpis does not, because its ground is not the news. When everything visible is dark — when the diagnosis is final, the estrangement is complete, the prayer has been unanswered for years — the anchor holds precisely because it is invisible. The hope that cannot survive hard news was never hope in the biblical sense; it was wishful thinking wearing hope&rsquo;s clothing.",
    ],
    callout: {
      label: "The word",
      text: "Elpis: confident expectation grounded in the character and promise of God — not wishful thinking or optimism, but forward-facing trust anchored in Christ who has gone ahead.",
    },
  },
  {
    badge: "1 Corinthians 15",
    title: "The Resurrection as the Ground of All Christian Hope",
    paragraphs: [
      "&ldquo;If Christ has not been raised, your faith is futile; you are still in your sins. Then those also who have fallen asleep in Christ are lost. If only for this life we have hope in Christ, we are of all people most to be pitied.&rdquo; (1 Cor 15:17-19). Paul is unflinching: Christianity is not a philosophy or a set of values that can be abstracted from the resurrection and remain intact. It is a claim about what actually happened on a specific Sunday morning. If the resurrection did not occur, the whole edifice collapses; if it did, everything else follows.",
      "But Christ has been raised, Paul says. And his resurrection is not a private miracle but the &ldquo;firstfruits&rdquo; of a harvest — the guarantee that what happened to him will happen to all who belong to him. The resurrection of Jesus is not a sign that exceptional people escape death; it is the inauguration of the new creation, the first act of God&rsquo;s ultimate renewal of all things. Every Christian hope flows from this single event: not the immortality of the soul, not the perpetuation of consciousness, but the resurrection of the body — a specific, physical, transformed life on a renewed earth.",
      "N.T. Wright has argued that Christianity&rsquo;s great gift to the world&rsquo;s thought about death is neither Platonic escape from the body nor pure dissolution, but new creation: &ldquo;What the whole world now awaits is what God promised and Jesus pioneered — the renewal of the heavens and the earth, and the resurrection of the body.&rdquo; Christian hope is earthy in the best sense: it is not the hope of leaving the world behind but of the world being made right, and of us being raised to inhabit it.",
    ],
    callout: {
      label: "The foundation",
      text: "The resurrection of Jesus is not one doctrine among many but the ground of all Christian hope. Without it, everything fails; with it, everything follows.",
    },
  },
  {
    badge: "2 Corinthians 5:5",
    title: "The Spirit as Down-Payment — Hope Guaranteed",
    paragraphs: [
      "&ldquo;Now the one who has fashioned us for this very purpose is God, who has given us the Spirit as a deposit, guaranteeing what is to come.&rdquo; (2 Cor 5:5). The Greek word translated &ldquo;deposit&rdquo; is arrab&ocirc;n — a commercial term for a down-payment, a first installment that legally commits the payer to completing the transaction. The Spirit is not a vague spiritual feeling; he is God&rsquo;s guarantee, God&rsquo;s contractual deposit, that the full inheritance is coming.",
      "Ephesians 1:13-14 reinforces this: the Spirit is &ldquo;a deposit guaranteeing our inheritance until the redemption of those who are God&rsquo;s possession.&rdquo; The Spirit&rsquo;s presence in the believer is not a consolation prize for missing heaven; it is the first portion of heaven itself, present in the now. Every work of the Spirit — conviction, transformation, love, joy, peace — is a taste of the age to come, present in advance. The arrab&ocirc;n means that what we have now is a genuine portion of what is promised, not a substitute for it.",
      "For Christian hope, this is decisive: we are not hoping for something entirely absent. The Spirit is the mode in which the future has already arrived — partially, provisionally, in the midst of the old creation that is passing away. This is why Paul can say in Romans 8:24 that &ldquo;we are saved in this hope&rdquo; — the saving is real, the Spirit is present, the harvest is guaranteed by its own firstfruits.",
    ],
  },
  {
    badge: "Romans 8:24-25",
    title: "Hoping for What We Do Not See — The Patience of Hope",
    paragraphs: [
      "&ldquo;For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently.&rdquo; Paul&rsquo;s logic is precise: hope by definition is directed toward what is not yet visible. The moment a hoped-for thing arrives, hope gives way to possession. This means that the invisibility of what we hope for is not evidence against it; it is evidence of the nature of hope itself. Faith and hope are always oriented toward the unseen, the not-yet, the coming.",
      "The word Paul uses for &ldquo;patiently&rdquo; is hupomonē — better translated as steadfast endurance, or patient perseverance under pressure. It is the quality of a runner who does not stop when the race is hard, a soldier who does not desert when the battle is prolonged. Christian hope is not passive waiting; it is active endurance, oriented toward a finish line that is real even when it is not visible. The training for this endurance is precisely the experience of suffering — which is why Romans 5:3-4 connects suffering, perseverance, character, and hope in a single chain.",
      "The &ldquo;not yet&rdquo; is not a failure of the promise. It is the form the promise takes in time. The already/not-yet tension is built into the structure of Christian hope: salvation is real and present (we are saved), and salvation is future and coming (we shall be saved in its fullness). Living between these two realities requires a hope that is simultaneously grateful for what has already arrived and expectant for what has not yet come.",
    ],
  },
  {
    badge: "Advent",
    title: "Advent as the Season of Hope — The Church&rsquo;s Annual School",
    paragraphs: [
      "Advent — the four weeks before Christmas — is the church&rsquo;s liturgical school of hope. The season spans two advents simultaneously: the first, the coming of Christ in flesh in Bethlehem, and the second, the coming of Christ in glory to complete the renewal of all things. Advent is the season that refuses to fast-forward from longing to arrival, that insists the waiting is not wasted time but formation time, that the ache of &ldquo;not yet&rdquo; is the shape of the soul being stretched to receive what is promised.",
      "The Advent lectionary returns repeatedly to Isaiah — the prophet of exile and of return, of the ruined city and the renewed creation. &ldquo;Comfort, comfort my people, says your God&rdquo; (Isaiah 40:1) — comfort in this context is not a warm feeling but a promise backed by the character of God: the valleys will be lifted, the mountains leveled, the glory of the Lord revealed. This is the register of Christian hope: not sentimental optimism but eschatological certainty, spoken into the darkness of exile.",
      "To keep Advent rather than skip directly to Christmas is a countercultural act: the culture runs from longing to fulfillment as fast as possible, collapsing the &ldquo;not yet&rdquo; into the &ldquo;now&rdquo; by purchasing and decorating. The church sits with the &ldquo;not yet&rdquo; — prays the O Antiphons, sings &ldquo;O Come O Come Emmanuel,&rdquo; names the exile honestly, and then, and only then, receives the arrival of the infant king as the inaugurated beginning of the answer. Advent teaches the church to hope.",
    ],
    callout: {
      label: "The practice",
      text: "Advent is the church&rsquo;s annual formation in hope: four weeks of deliberate longing, of sitting with the &ldquo;not yet,&rdquo; of learning to live between the first coming and the second.",
    },
  },
  {
    badge: "Romans 8:22-23",
    title: "The Groaning Creation — Hope in the Midst of Suffering",
    paragraphs: [
      "&ldquo;We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies.&rdquo; The groan is everywhere in Romans 8: creation groans, we groan, even the Spirit groans in intercession (v. 26). Paul does not suppress this; he names it. The groaning is the mark of the already/not-yet: we have the firstfruits of the Spirit, the real beginning of redemption — but the body is not yet redeemed, the creation is not yet renewed, the suffering is not yet ended.",
      "The metaphor Paul chooses is labor — the groaning of childbirth, not of a death rattle. The suffering is purposeful and directional: it is moving toward a birth. The new creation is being born, and the present suffering is part of the labor. This does not make the pain less real — labor is genuinely agonizing — but it means the groaning is not the whole story. There is a child coming. The suffering that lacks this context produces despair; the same suffering within this context produces patient hope.",
      "The Spirit&rsquo;s groaning in intercession (v. 26) is one of Paul&rsquo;s most astonishing claims: even when we do not know what to pray for, the Spirit articulates our deepest need before the Father with &ldquo;wordless groans.&rdquo; Hope is therefore not a solo enterprise. The Spirit prays for what we cannot name, and the Father who searches hearts understands the Spirit&rsquo;s intercession. In our deepest despair, when hope seems impossible, the triune God is at work on our behalf in ways that exceed our vocabulary.",
    ],
  },
  {
    badge: "Theology",
    title: "Why Despair Is a Theological Problem",
    paragraphs: [
      "Christian despair is not primarily an emotional problem but a theological one — a refusal to believe what God has actually promised. This is not a rebuke of those who suffer or grieve; grief and lament are legitimate and biblical. It is a recognition that sustained, final despair is at bottom a declaration that God&rsquo;s promises are not trustworthy, that the resurrection is not real, that the Spirit&rsquo;s down-payment will not be honored. Despair says the darkness has the last word. Christian hope says it does not.",
      "J&uuml;rgen Moltmann, who survived a German POW camp and wrestled with the problem of hope in the post-Holocaust world, put it this way: &ldquo;The sin of hopelessness is often underestimated. Hope is not a side issue in Christianity but is the very key to understanding what Christianity is.&rdquo; Despair is the refusal of the resurrection&rsquo;s claim on the present. It is not atheism exactly, but it is a practical atheism that lives as if the cross were the end of the story.",
      "The antidote to despair is not emotional manipulation or forced cheerfulness. It is the reorientation of attention toward what is actually true: the empty tomb, the Spirit&rsquo;s presence, the promised renewal, the company of the communion of saints who have lived and died in this hope. Corrie ten Boom, writing from the ruins of Auschwitz, said: &ldquo;No pit is so deep that God&rsquo;s love is not deeper still.&rdquo; This is not sentimentality; it is a theological claim grounded in the character of the God who went into the deepest darkness and came back.",
    ],
    callout: {
      label: "The claim",
      text: "Despair is not merely sadness — it is a theological position: a declaration that God&rsquo;s promises will not be kept. Christian hope is the counter-declaration that they will.",
    },
  },
  {
    badge: "Already/Not Yet",
    title: "The Tension That Defines Christian Life",
    paragraphs: [
      "The central tension of Christian existence is the already/not-yet: the kingdom of God has already broken in with Jesus&rsquo;s resurrection, and it has not yet arrived in its fullness. We are already justified, already indwelt by the Spirit, already seated &ldquo;in the heavenly realms in Christ Jesus&rdquo; (Ephesians 2:6) — and we are not yet glorified, not yet freed from the presence of sin, not yet living in the renewed creation. Both the &ldquo;already&rdquo; and the &ldquo;not yet&rdquo; are essential to Christian hope.",
      "Collapse the tension toward the &ldquo;already&rdquo; and you produce triumphalism: the expectation that healing must come now, that the Christian life is the best life now, that suffering is always the result of insufficient faith. This reading has given enormous harm to those who suffer without visible deliverance. Collapse the tension toward the &ldquo;not yet&rdquo; and you produce a passive escapism: a spirituality that has given up on the present world and is simply waiting to be extracted from it. Neither does justice to the apostolic witness.",
      "The third way — holding both — is the most demanding and the most honest: we act as citizens of the coming kingdom now (justice, love, mercy, restoration) while acknowledging that the kingdom&rsquo;s completion is not yet. We pray for healing while accepting that it may not come in this life. We grieve genuinely while hoping genuinely. We live as people who know the ending of the story while still in the middle of it — neither pretending it is already resolved nor despairing that it never will be.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Anchoring Daily to a Promise",
    summary:
      "The practice of beginning each day with a specific biblical promise — not a generic optimism but a named, concrete word from God, held against the specific weight of the day.",
    steps: [
      "Before the day begins, identify the specific fear or area of despair that presses hardest. Do not suppress it — name it. Then open to a specific promise of Scripture that addresses it directly.",
      "Write the promise on something physical: a card, a notebook, a whiteboard in your sight line. The physicality matters; it moves hope from the abstract into the world of objects and routines.",
      "Return to the promise throughout the day, especially when the fear resurfaces. Not as a magical formula but as an act of will: &ldquo;I am choosing to believe what God said over what I feel.&rdquo;",
      "Record it in the Journal tab: the area of despair, the promise, and one small forward step. A month of entries becomes a record of God&rsquo;s faithfulness across your specific fears.",
    ],
    anchor: "Hebrews 6:18 — It is impossible for God to lie... we who have fled to take hold of the hope set before us may be greatly encouraged.",
  },
  {
    number: "02",
    title: "Praying Through the Psalms of Ascent",
    summary:
      "Psalms 120-134 are pilgrimage songs — prayers sung on the way to Jerusalem, on the way toward worship. Walking toward God is itself the practice of hope.",
    steps: [
      "Read one Psalm of Ascent per day for fifteen days. Read it as a pilgrim: you are on the way, not yet arrived, but moving. The direction matters more than the distance covered.",
      "Notice what the psalms hold together: present distress and future confidence, the long journey and the certain destination, the enemies along the road and the God who neither slumbers nor sleeps (Psalm 121).",
      "Pray each psalm aloud, slowly, letting the direction of the prayer form the direction of your attention. The psalms are not merely descriptions of hope; they are exercises in it — the act of praying them is itself the practice.",
      "On the fifteenth day, read Psalm 134 — the final psalm of ascent, the arrival at the temple — and let it be your own arrival, however provisional and partial, at the place of renewed trust.",
    ],
    anchor: "Psalm 121:1-2 — I lift up my eyes to the mountains — where does my help come from? My help comes from the LORD, the Maker of heaven and earth.",
  },
  {
    number: "03",
    title: "The Practice of Advent Waiting",
    summary:
      "Keeping the Advent season as a school of hope — deliberately sitting with longing rather than rushing to resolution, learning the discipline of forward-facing faith.",
    steps: [
      "In the four weeks before Christmas, resist the cultural pressure to skip the longing. Light the Advent candles, read the O Antiphons or the daily lectionary, sing &ldquo;Come Thou Long Expected Jesus&rdquo; before you sing &ldquo;Joy to the World.&rdquo;",
      "Name one area of your life where you are waiting for something that has not yet come. Pray it as an Advent prayer: &ldquo;Come, Lord Jesus, into this — the estrangement, the illness, the waiting that has been long.&rdquo;",
      "Receive the arrival of Christmas on December 25 not as the end of the hope but as its confirmation: the first advent guarantees the second, the incarnation guarantees the resurrection, the manger guarantees the empty tomb.",
      "Carry the Advent posture beyond December: practice the &ldquo;not yet&rdquo; throughout the year by refusing both despair (it will never come) and presumption (it must come now). The Christian life is permanently Advent-shaped.",
    ],
    anchor: "Isaiah 40:31 — Those who hope in the LORD will renew their strength. They will soar on wings like eagles.",
  },
  {
    number: "04",
    title: "Resurrection Imagination — Living Toward Eternity",
    summary:
      "The practice of allowing the resurrection hope to reshape present decisions, relationships, and priorities — living now as a citizen of the coming kingdom.",
    steps: [
      "Once a week, ask: what does resurrection hope require of me today? Not what will I feel in heaven but what does the certainty of renewal demand of me now — in a relationship, a decision, a habit, a fear.",
      "Practice the economics of resurrection: invest in what will last. Acts of justice, love, mercy, and beauty are not wasted by death — Paul says our &ldquo;labor in the Lord is not in vain&rdquo; (1 Cor 15:58). Act accordingly.",
      "When a grief is fresh — a death, a loss — resist the impulse to resolve it quickly into a &ldquo;they are in a better place&rdquo; that bypasses the actual grief. But do allow the resurrection hope to be spoken, eventually, as the final word: not escape but transformation, not disappearance but return.",
      "Read Revelation 21-22 slowly once a month — not as a code to be decoded but as a vision of the world remade, the city that comes down, God dwelling with his people. Let it be the destination that shapes the journey.",
    ],
    anchor: "1 Corinthians 15:58 — Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
  },
  {
    number: "05",
    title: "The Community of Hope",
    summary:
      "Hope is not a solo enterprise — it is practiced in community, sustained by the witness of those who have hoped before us and those who hope alongside us now.",
    steps: [
      "Read a biography of someone who maintained hope under pressure: Corrie ten Boom, Dietrich Bonhoeffer, Harriet Tubman, Martin Luther King Jr. Let their testimony be evidence that hope is possible in your circumstances too.",
      "Seek out one person in your community who is struggling with despair. Do not offer explanations; offer company. Sit with them, pray with them, speak the specific promises that address their specific fear.",
      "Participate in a faith community that practices corporate hope: baptism, communion, the Apostles&rsquo; Creed, corporate prayer. These are not performances but practices — each one is an exercise in corporate hope, a community-sized act of forward-facing faith.",
      "Share your own hope honestly — not triumphantly but genuinely. When someone asks how your own waiting is going, tell the truth: &ldquo;I have not received what I am hoping for; I still believe it is coming; here is what I am standing on.&rdquo; This testimony strengthens others and strengthens you.",
    ],
    anchor: "Hebrews 10:23-25 — Let us hold unswervingly to the hope we profess, for he who promised is faithful. And let us consider how we may spur one another on toward love and good deeds.",
  },
  {
    number: "06",
    title: "The Discipline of Gratitude as Hope&rsquo;s Training Ground",
    summary:
      "Gratitude and hope are related virtues — both refuse to let the present darkness be the final word. The practice of daily gratitude trains the attention toward what is real and good even when much is broken.",
    steps: [
      "Name three specific, concrete mercies each evening — not abstract blessings but named particulars: warmth, a conversation, a meal, a moment of unexpected peace. Make the list honest; if it is a genuinely dark day, one mercy is enough.",
      "Practice the &ldquo;yet&rdquo; construction from Lamentations 3: &ldquo;I remember my affliction — yet I call this to mind and therefore I have hope.&rdquo; The &ldquo;yet&rdquo; does not deny the affliction; it refuses to let it be the only reality.",
      "Notice the pattern over time. A month of gratitude journals in a dark season will begin to show a pattern that is invisible in the moment: God has been faithful in small ways even when the large prayer is still unanswered.",
      "Let gratitude anchor your theology of hope: every past mercy is evidence that the one who promised is faithful. The God who provided this morning&rsquo;s mercy is the same God who has promised the resurrection of the body and the renewal of all things.",
    ],
    anchor: "1 Thessalonians 5:18 — Give thanks in all circumstances; for this is God&rsquo;s will for you in Christ Jesus.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Jürgen Moltmann",
    role: "Theology of Hope (1964) — Grounding hope in the resurrection",
    quote:
      "From first to last, and not merely in the epilogue, Christianity is eschatology, is hope, forward looking and forward moving, and therefore also revolutionizing and transforming the present.",
    bio: "Jürgen Moltmann wrote Theology of Hope in 1964 as a German theologian trying to rebuild faith in the post-war, post-Holocaust world. He had spent years in a British POW camp, where he encountered the gospel through the psalms and found in it not consolation but a radical forward-looking hope that refuses to let the present word be the final word. His central argument is that Christian hope is not a private feeling or a flight from reality but a revolutionary orientation toward God&rsquo;s promised future that makes the present transformation of the world both possible and necessary. Hope, for Moltmann, is the engine of love: we act for justice and renewal because we expect God to complete it.",
  },
  {
    name: "N.T. Wright",
    role: "Surprised by Hope (2008) — Resurrection, not rapture",
    quote:
      "Jesus&rsquo;s resurrection is the beginning of God&rsquo;s new project not to snatch people away from earth to heaven but to colonize earth with the life of heaven.",
    bio: "N.T. Wright&rsquo;s Surprised by Hope is the most important recent re-articulation of Christian hope, arguing that the dominant image of heaven as an ethereal afterlife where souls float in bliss is a Platonic import, not a biblical claim. The biblical hope is the resurrection of the body and the renewal of the earth — not escape from creation but its transformation. Wright argues this reshapes everything: if the final destination is a renewed earth, then what we do now with art, justice, relationships, and the care of creation matters and will be &ldquo;taken up into&rdquo; God&rsquo;s final renewal. Christian hope is not escapist; it is the most materially engaged hope imaginable.",
  },
  {
    name: "C.S. Lewis",
    role: "The Weight of Glory; Mere Christianity — Longing and the world to come",
    quote:
      "If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.",
    bio: "C.S. Lewis&rsquo;s treatment of hope is woven through his entire work. In The Weight of Glory he argues that the deepest human longing — the ache of beauty, the nostalgia for something never quite experienced — is a clue to our destination: we were made for a world we have not yet seen. He is careful to distinguish this from a mere escape from earth: in The Last Battle, the &ldquo;further up and further in&rdquo; of Aslan&rsquo;s country is more real than anything left behind, not less. Lewis rescues hope from sentimentality and roots it in the doctrine of creation: the world is real, the body is real, and the resurrection promises not their abolition but their fulfillment.",
  },
  {
    name: "Karl Barth",
    role: "Church Dogmatics — Hope grounded in the election of grace",
    quote:
      "The command of God is that we should hope — and that this hope should be directed toward his kingdom, his righteousness, his love.",
    bio: "Karl Barth&rsquo;s theology of hope is inseparable from his theology of grace: because the God of the gospel is the God who says yes to humanity in Jesus Christ, despair is theologically impermissible. Barth wrote the Church Dogmatics in the shadow of two world wars, against the German Christians who had baptized Nazism, and his theology is a sustained argument that the God revealed in Christ is different in kind from every human projection of power. The God who chose humanity in the covenant of grace, who entered death and came out the other side, is the God whose yes to creation is final. Hope is not a nice addition to Christian life; it is the required response to who this God actually is.",
  },
  {
    name: "Corrie ten Boom",
    role: "The Hiding Place — Hope in Auschwitz and after",
    quote:
      "No pit is so deep that God&rsquo;s love is not deeper still. They will need to hear it again and again.",
    bio: "Corrie ten Boom survived Ravensbrück concentration camp after her family hid Jews from the Nazis; her sister Betsie died there. She spent the rest of her life carrying the message that hope is not disproved by the worst suffering human beings can inflict. Her testimony is not that God prevented the horror; it is that God was present within it — in the fleas of the barracks that paradoxically kept the guards away and allowed an illegal Bible study to flourish, in Betsie&rsquo;s deepening peace, in the strange mercy of survival. Her hope is not naive; it is post-Ravensbrück hope, the only kind worth having.",
  },
  {
    name: "Henri Nouwen",
    role: "Our Greatest Gift; The Return of the Prodigal Son — Hope in diminishment",
    quote:
      "Hope means to keep living amid desperation and to keep humming in the darkness. Hoping is knowing that there is love, it is trust in tomorrow, it is falling asleep and waking again when the sun rises.",
    bio: "Henri Nouwen was a Dutch priest and prolific author who spent the last decade of his life in L&rsquo;Arche Daybreak, living in community with severely disabled people. He wrote extensively about the hope that is discovered not in achievement or comfort but in weakness, failure, and the company of the poor. His experience of clinical depression, his struggles with loneliness, and his encounter with Rembrandt&rsquo;s The Return of the Prodigal Son became the material for a profound theology of hope grounded in the Father&rsquo;s welcome. Nouwen&rsquo;s hope is not abstract; it is practiced in the returning — the daily, embodied turning toward the Father who runs to meet us.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Hebrews 6:19",
    text: "We have this hope as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain, where our forerunner, Jesus, has entered on our behalf.",
    reflection:
      "The anchor metaphor says everything: hope holds, not because of favorable conditions, but because it is fixed in heaven, where Christ has already gone as our forerunner. The anchor is invisible; its effect is visible — the held life, the soul that does not drift when the current runs hard.",
  },
  {
    reference: "Romans 8:24-25",
    text: "For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently.",
    reflection:
      "The invisibility of hope is not its weakness but its nature. Hope always faces forward, always reaches beyond the present. The patience required — hupomonē, steadfast endurance — is not passive; it is the active, sustained orientation of a life toward what is promised but not yet received.",
  },
  {
    reference: "1 Corinthians 15:20",
    text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep.",
    reflection:
      "&ldquo;Firstfruits&rdquo; is an agricultural image: the first sheaf of the harvest is the guarantee of the whole harvest to come. Christ&rsquo;s resurrection is not an isolated miracle; it is the first act of the new creation, the guarantee that what happened to him will happen to all who belong to him.",
  },
  {
    reference: "2 Corinthians 5:4-5",
    text: "For while we are in this tent, we groan and are burdened, because we do not wish to be unclothed but to be clothed instead with our heavenly dwelling, so that what is mortal may be swallowed up by life. Now the one who has fashioned us for this very purpose is God, who has given us the Spirit as a deposit, guaranteeing what is to come.",
    reflection:
      "The deposit — arrabōn in Greek — is a legal term for a first installment that commits the payer to the full amount. The Spirit is God&rsquo;s financial guarantee. The groan is real; the guarantee is real; the future is certain.",
  },
  {
    reference: "Lamentations 3:21-23",
    text: "Yet this I call to mind and therefore I have hope: Because of the LORD&rsquo;s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    reflection:
      "Written in the ashes of Jerusalem&rsquo;s destruction, this is not optimism but hope: the deliberate, willful turning of attention toward what is still true about God when everything visible is in ruins. &ldquo;I call to mind&rdquo; — hope is an act, not a feeling.",
  },
  {
    reference: "Revelation 21:4-5",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away. He who was seated on the throne said, I am making everything new!",
    reflection:
      "The final vision: not escape from creation but its renewal. The tears that God wipes away were real tears. The mourning that ends was real mourning. &ldquo;Everything new&rdquo; — not everything replaced, but everything transformed. This is the destination that gives Christian hope its specific, earthy, embodied weight.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "HMjF0OiLVBE", title: "N.T. Wright: Surprised by Hope — The Resurrection and New Creation" },
  { videoId: "IwF9bCWKJ2k", title: "The Already and Not Yet of Christian Hope" },
  { videoId: "9-hWz4KP0Gc", title: "Hebrews 6:19 — Hope as an Anchor for the Soul" },
  { videoId: "F_aMpWXKVg8", title: "1 Corinthians 15 — The Resurrection as the Ground of Hope" },
  { videoId: "hU_zBumSCxI", title: "Why Despair Is a Theological Problem" },
  { videoId: "bLiS0PxUzc0", title: "Living Toward Eternity — Advent and Christian Hope" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianHopeGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<HPGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [despairArea, setDespairArea] = useState("");
  const [promiseStandingOn, setPromiseStandingOn] = useState("");
  const [forwardStep, setForwardStep] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as HPGEntry[]);
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
    if (!despairArea.trim()) return;
    const entry: HPGEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      despairArea: despairArea.trim(),
      promiseStandingOn: promiseStandingOn.trim(),
      forwardStep: forwardStep.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setDespairArea("");
    setPromiseStandingOn("");
    setForwardStep("");
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
          {/* Hero */}
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
              Christian Hope
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Anchor for the Soul: A Christian Guide to Hope
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Biblical hope is not wishful thinking &mdash; it is elpis, confident expectation
              grounded in the resurrection of Jesus Christ. It is the anchor that holds when
              everything visible fails, the Spirit&rsquo;s down-payment on a future that is
              already guaranteed. This guide explores the theology of hope from the resurrection
              to the already/not-yet, the voices who have hoped under pressure, and the practices
              that train a soul to hold the anchor.
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
                &ldquo;We have this hope as an anchor for the soul, firm and secure. It enters the
                inner sanctuary behind the curtain, where our forerunner, Jesus, has entered on our
                behalf.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>Hebrews 6:19-20</p>
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
                Christian hope is a doctrine before it is a feeling. These eight studies trace
                elpis from the Greek word itself through the resurrection, the Spirit&rsquo;s
                down-payment, the groaning creation, and the theological problem of despair.
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
                        background: "rgba(59, 130, 246, 0.07)",
                        border: `1px solid rgba(59, 130, 246, 0.25)`,
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
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Elpis, the resurrection, the Spirit&rsquo;s arrabōn, the groaning creation,
                  Advent, and the already/not-yet are not eight separate topics but one: the
                  forward-facing confidence of a people who know the end of the story because they
                  know the God who writes it. Explore the companion guide on{" "}
                  <Link href="/christian-suffering-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Suffering
                  </Link>{" "}
                  for the other side of this same faith.
                </p>
              </div>
            </section>
          )}

          {/* Practices */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Hope is a virtue that is practiced into existence. These six disciplines are not
                techniques for manufacturing good feelings but structures for training the
                attention toward the God who keeps promises.
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
            </section>
          )}

          {/* Voices */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Hope is best understood through those who have maintained it under pressure. Six
                witnesses &mdash; from a German POW camp to Ravensbrück, from the Dutch
                Resistance to L&rsquo;Arche &mdash; show what elpis looks like in embodied life.
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
                  >
                    {voice.role}
                  </div>
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
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* Scripture */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages to read slowly, memorize, and anchor to. Each pairs the text with a
                short reflection. The hope they carry is not aspirational but declarative &mdash;
                these are not &ldquo;I hope so&rdquo; verses but &ldquo;I know this is true&rdquo;
                verses.
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Each passage becomes an act of hope when prayed rather than merely read. Take the
                  text to God in your own words: &ldquo;This is what you have promised. This is what
                  I am currently experiencing. I am choosing to hold your promise over my
                  circumstances.&rdquo; Repeat the anchor verse of Hebrews 6:19 aloud whenever
                  despair rises: the anchor holds from heaven, not from here.
                </p>
              </div>
            </section>
          )}

          {/* Journal */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Name an area of despair. Name the specific Bible promise you are anchoring to. Name
                one forward step. Entries are saved privately in your browser. Over time, this
                journal becomes a record of what God sustained you through and what he promised you
                in the dark.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  A hope entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hpg-despair" style={labelStyle}>
                    Name an area of despair
                  </label>
                  <textarea
                    id="hpg-despair"
                    value={despairArea}
                    onChange={(e) => setDespairArea(e.target.value)}
                    placeholder="Be specific: the relationship that has not been restored, the prayer that has been prayed for years, the fear that keeps returning — the place where hope is hardest"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hpg-promise" style={labelStyle}>
                    The specific promise you are anchoring to
                  </label>
                  <textarea
                    id="hpg-promise"
                    value={promiseStandingOn}
                    onChange={(e) => setPromiseStandingOn(e.target.value)}
                    placeholder="A specific verse or promise of God that addresses this despair directly — not a vague sense that things will work out, but a named word from God"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="hpg-step" style={labelStyle}>
                    One forward step
                  </label>
                  <textarea
                    id="hpg-step"
                    value={forwardStep}
                    onChange={(e) => setForwardStep(e.target.value)}
                    placeholder="One small, concrete act in the direction of hope: pray this promise today, call this person, read this psalm, take this next step even though I cannot see the one after it"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!despairArea.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !despairArea.trim() ? BORDER : BLUE,
                    color: !despairArea.trim() ? MUTED : "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !despairArea.trim() ? "not-allowed" : "pointer",
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
                      Name one area of despair, one promise, one step. Over time the record
                      becomes evidence that the anchor held.
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
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                            }}
                          >
                            {entry.date}
                          </span>
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
                              color: BLUE,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            Area of despair
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.despairArea}
                          </p>
                        </div>

                        {entry.promiseStandingOn && (
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
                              The promise
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.promiseStandingOn}
                            </p>
                          </div>
                        )}

                        {entry.forwardStep && (
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
                              Forward step
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.forwardStep}
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
                Teaching on the resurrection, the already/not-yet, and the biblical theology of
                hope. Good companions to the Theology and Voices tabs.
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
              The anchor holds
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The anchor of Hebrews 6:19 works precisely because it is fixed not in this world but
              in the inner sanctuary where Christ has gone as forerunner. Everything visible is
              temporary; the anchor is eternal. Every storm that has ever come to a Christian soul
              has encountered the same fixed point &mdash; the resurrection of Jesus, the
              faithfulness of God, the Spirit&rsquo;s arrabōn &mdash; and the anchor has held.
              It will hold for you.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link href="/christian-suffering-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Suffering
              </Link>{" "}
              for the companion theology of the cross, or the{" "}
              <Link href="/christian-prayer" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Prayer guide
              </Link>{" "}
              for the practice of praying these promises in the dark.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
