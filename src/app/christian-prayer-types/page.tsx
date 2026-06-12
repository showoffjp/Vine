"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";

const STORAGE_KEY = "vine_prayertypes_entries";

interface PTPEntry {
  id: string;
  date: string;
  prayerType: string;
  whatPrayed: string;
  response: string;
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
    badge: "The ACTS Model",
    title: "Adoration, Confession, Thanksgiving, Supplication — and Its Limits",
    paragraphs: [
      "The ACTS acronym — Adoration, Confession, Thanksgiving, Supplication — has introduced millions of Christians to structured prayer. Its genius is pedagogical: it forces the novice to do something other than bring a grocery list to God. Adoration orients the heart toward who God is before it reaches for what he gives. Confession clears the relational debris that makes prayer feel like speaking into a wall. Thanksgiving trains the memory on what has already been given. Supplication is last, not because God minds requests, but because requests made from a posture of worship and gratitude are qualitatively different from demands dressed in religious language.",
      "Its limits are real. ACTS can become a rut — a liturgical to-do list completed before &ldquo;real&rdquo; prayer begins. It also squeezes out the harder forms: lament has no letter, nor does the prayer of examen, nor does silent waiting. A tool that builds the habit of turning toward God is invaluable; a grid that locks every conversation into four rooms can shrink the prayer life it meant to expand. The best way to use ACTS is as training wheels — long enough to learn balance, short enough to ride without them.",
      "What ACTS does preserve is the Godward orientation of all genuine prayer. The most common drift in prayer is toward a monologue about our problems rather than a dialogue with the living God. Any structure that begins with &ldquo;You are&rdquo; before &ldquo;I need&rdquo; is doing something right, and ACTS, used with flexibility, keeps doing it.",
    ],
    callout: {
      label: "The model",
      text: "ACTS: Adoration (who God is), Confession (what we have done), Thanksgiving (what God has given), Supplication (what we need). A starting map, not the whole territory.",
    },
  },
  {
    badge: "Ezekiel 22:30",
    title: "Intercessory Prayer — Standing in the Gap",
    paragraphs: [
      "God says something astonishing to Ezekiel: &ldquo;I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none.&rdquo; (Ezek 22:30). The image is siege warfare: a gap in the city wall, through which the enemy enters. God is looking for someone to stand in that gap — to place themselves between the city and the destruction, to hold the breach with their body. The application is intercessory prayer. The intercessor does not counsel God; she stands between God&rsquo;s holy judgment and a people who cannot stand before it, and cries for mercy.",
      "This gives intercession its weight. It is not politely mentioning a need to a God who already knows it. It is what Moses did when God threatened to destroy Israel and make a great nation of Moses alone: he turned down the offer and argued from God&rsquo;s own reputation (Exod 32:11-14). It is what Abraham did, bargaining downward from fifty righteous to ten, buying time for Lot (Gen 18). It is what Paul did, wishing himself accursed for the sake of his people (Rom 9:3). Intercession is costly prayer — it identifies the intercessor with the ones prayed for and will not let go.",
      "The ultimate intercessor is Christ, who &ldquo;always lives to make intercession&rdquo; for us (Heb 7:25) and who in Gethsemane entered the breach himself. Our intercession is a participation in his — we are not creating new mediatorial work but joining the one mediator who has already stood in every gap.",
    ],
    callout: {
      label: "The image",
      text: "Standing in the breach: placing yourself between judgment and those who cannot stand before it — prayer as solidarity, mediation, and costly identification with those prayed for.",
    },
  },
  {
    badge: "Petitionary Prayer",
    title: "Does Prayer Change God&rsquo;s Mind? Petition and Sovereignty",
    paragraphs: [
      "No question in the theology of prayer is sharper: if God is sovereign and his will is unchangeable, what does petitionary prayer actually do? Two bad answers bookend the debate. One says prayer changes nothing — God has already decided, and prayer is just spiritual exercise for us. The other says prayer changes everything — God&rsquo;s decisions are contingent on our asking, and he waits passively until we pray. Both answers, pressed to their conclusions, make prayer incoherent or make God small.",
      "A better answer is found in the relationship between persons rather than in a debate about cause and effect. When Jesus teaches us to ask, seek, and knock (Matt 7:7-8), he is not describing a mechanism for adjusting divine variables — he is describing the posture of a child before a Father. The Father is not a vending machine reprogrammed by prayer, but he is genuinely responsive to his children, and the responsiveness is part of what makes him a Father rather than a force. The mystery is that both are fully true: God&rsquo;s purposes hold, and prayer genuinely matters, because God has chosen to work through the prayers of his people as one of his means.",
      "Moses at Sinai (Exod 32), Hezekiah&rsquo;s prayer and extended life (2 Kings 20), James&rsquo; striking claim that &ldquo;the prayer of a righteous person has great power as it is working&rdquo; (James 5:16) — these passages do not domesticate God, but they insist prayer is not theater. Something real happens. Wisdom holds the mystery without resolving it: pray as though it matters, because it does; trust God&rsquo;s sovereignty, because it holds.",
    ],
  },
  {
    badge: "The Psalms of Lament",
    title: "Lament — The Neglected Prayer of Honest Grief",
    paragraphs: [
      "Roughly a third of the Psalter is lament — raw, unguarded protest addressed to God. &ldquo;How long, O LORD? Will you forget me forever? How long will you hide your face from me?&rdquo; (Ps 13:1). &ldquo;My God, my God, why have you forsaken me?&rdquo; (Ps 22:1, which Jesus quotes from the cross). These are not poems of doubt that snuck into the Bible by accident; they are authorized, canonical forms of prayer, taught to Israel by God himself through inspired poets who refused to spiritually tidy their pain.",
      "The church has largely lost lament. Our worship leans toward triumph and declaration; our prayer tends to move quickly past grief toward resolution. Walter Brueggemann argues that the suppression of lament produces a &ldquo;false triumphalism&rdquo; that has no room for the suffering believer, and that the loss of lament is itself a form of loss of faith — because lament, paradoxically, is addressed to God. The lamenter is not walking away; he is shouting at the ceiling and refusing to let go until he gets an answer. That is faith, not its absence.",
      "Lament follows a pattern in the Psalms: address (calling on God), complaint (telling him exactly what is wrong), confession of trust (even in the dark, remembering who God is), and petition (asking for specific action). It rarely ends in resolution — the situation often stays the same — but it almost always ends in a reorientation toward God. The movement is not from pain to happiness but from isolation to communion, from silence to speech. Giving people permission to lament is giving them permission to pray honestly.",
    ],
    callout: {
      label: "Pattern",
      text: "The lament Psalm: Address — Complaint — Confession of Trust — Petition. Not a formula for getting answers, but a structure for staying in conversation with God while everything is wrong.",
    },
  },
  {
    badge: "Contemplative Prayer",
    title: "Contemplative Prayer — Its Gifts and Its Controversies",
    paragraphs: [
      "Contemplative prayer — in its historic Christian forms, the prayer of quiet, centering prayer, lectio divina, the prayer of examen — is prayer that moves from speaking to listening, from petition to presence. Its roots run deep: Origen, Augustine, the Desert Fathers, Gregory of Nyssa, The Cloud of Unknowing, John of the Cross, Theresa of Avila. For much of Christian history, the contemplative was not a specialist but a normal aspiration of serious prayer.",
      "Its controversies are real and should not be dismissed. Some forms of centering prayer, as popularized in the late twentieth century, have been criticized for borrowing the technique of mantra from Eastern meditation with inadequate theological grounding — the goal becoming the emptying of the mind rather than the filling of it with Christ. The concern is legitimate: Christian prayer is always addressed to the personal God of the Bible, not to an impersonal ground of being. Silence is not the end; presence is. Stillness is not the goal; the living God is.",
      "Rightly practiced, contemplative prayer simply slows the traffic of words and lets the soul attend to God rather than talk at him. &ldquo;Be still, and know that I am God&rdquo; (Ps 46:10) is not a verse for the nervous or the mystically talented; it is a command to everyone whose prayer has become a monologue. The prayer of examen — Ignatius Loyola&rsquo;s twice-daily review of the day&rsquo;s consolations and desolations, looking for God&rsquo;s movement — is perhaps the most practically useful form for the busy modern Christian.",
    ],
  },
  {
    badge: "Romans 8:26-27",
    title: "Praying in the Spirit — When Words Fail",
    paragraphs: [
      "&ldquo;Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.&rdquo; (Rom 8:26-27). Paul&rsquo;s assurance here is for every believer who has sat in a hospital room and had no prayer left — who wanted to pray but could only groan. The Spirit takes the groan and completes it.",
      "This passage does not limit itself to the gift of tongues, though charismatic traditions have rightly seen a connection there (1 Cor 14). It is a universal pastoral promise: prayer is not ultimately a human performance reviewed by a divine audience. The Spirit is praying inside the one who prays — translating inarticulate longing into perfect petition, aligning our cries with God&rsquo;s will in ways we cannot manage ourselves. Prayer, at its roots, is Trinitarian: we speak to the Father, in the Spirit, through the Son.",
      "The practical implication is enormous: prayer is not graded on eloquence. The barely-formed desire, the wordless night-cry, the too-tired-to-think Sunday morning — these are not failed prayers. They are raw material the Spirit intercedes with. Show up, and let the Spirit do what words cannot.",
    ],
  },
  {
    badge: "The Ignatian Examen",
    title: "The Prayer of Examen — Daily Review with God",
    paragraphs: [
      "Ignatius of Loyola prescribed the prayer of examen twice daily — at midday and at the end of the day — as the one prayer he would not dispense a Jesuit from even if all other prayer was forfeited. His reasoning: the examen is where the life and the prayer are integrated. Without it, prayer floats above the day and the day unfolds below it; with it, the whole texture of the day becomes the material of prayer.",
      "The classic form runs in five movements: thanksgiving (begin with gratitude for specific gifts of the day), petition (ask the Spirit for light to see honestly), review (walk through the day — where was God? where did I resist grace? what consoled, what desolated?), sorrow (honest acknowledgment of failure without self-punishment), and hope (choose one thing to carry into tomorrow with God). It takes fifteen minutes. People who practice it for a month routinely report that it has changed not just their prayer but their attentiveness to ordinary life — they begin to notice grace they were walking past.",
      "The examen is ecumenical in practice: it requires no special theology or tradition, only the willingness to end the day with God rather than simply end it. Its gift to modern Christians is the integration of the examined life with the prayed life — the conviction that nothing that happened today is outside the conversation.",
    ],
  },
  {
    badge: "Corporate vs. Private",
    title: "Corporate and Private Prayer — Each Needs the Other",
    paragraphs: [
      "Jesus prays alone on mountain-tops at dawn (Mark 1:35, Luke 6:12) and teaches private prayer in the closed room (Matt 6:6). He also teaches the Lord&rsquo;s Prayer in the plural — &ldquo;Our Father,&rdquo; &ldquo;give us,&rdquo; &ldquo;forgive us,&rdquo; &ldquo;lead us&rdquo; — and in Acts the earliest church prays together with one voice (Acts 4:24-31) until the building shakes. Both registers are commanded, modeled, and promised. Neither substitutes for the other.",
      "Private prayer does what corporate prayer cannot: it forges the individual relationship, the intimacy of the closed room, the unguarded conversation. It is where honesty reaches its maximum, where the secret grief or the private sin or the unnamed fear is finally said aloud. Augustine&rsquo;s Confessions — one long prayer — is the monument of private prayer in Western Christianity. What is said to God in the dark is the deepest thing said.",
      "Corporate prayer does what private prayer cannot: it enacts the body of Christ, the communion of saints, the fact that we are not saved alone. To pray with a congregation is to add your voice to the great river of prayer that has never stopped flowing since Pentecost — and to be held by prayers when you have none of your own. Solitary prayer and gathered prayer are the two lungs of the Christian life; a church of people who only pray alone and a person who only prays with others are both impoverished.",
    ],
  },
  {
    badge: "The Praying Christ",
    title: "Why Jesus Prayed — Model, Not Necessity",
    paragraphs: [
      "The most puzzling fact in the Gospels may be that the eternal Son of God prayed. If Jesus is fully divine, to whom does he pray — himself? The church fathers untangled this by insisting on the distinction between his divine and human natures: it is the human nature of Jesus, the one mediator, that prays to the Father. The Son did not need to pray to be informed of the Father&rsquo;s will — they share it — but the man Jesus, in the weakness and dependency of genuine human nature, prays as the pattern and pioneer of all human prayer.",
      "This makes Jesus&rsquo; prayer life the supreme model. He prays before every significant act: before his baptism (Luke 3:21), before choosing the twelve (Luke 6:12-13), before Peter&rsquo;s confession (Luke 9:18), before the transfiguration (Luke 9:28-29), before raising Lazarus (John 11:41-42), before Gethsemane. Prayer for Jesus is not crisis management; it is the constant thread in a life fully oriented toward the Father. &ldquo;The Son can do nothing of his own accord, but only what he sees the Father doing&rdquo; (John 5:19) — and the seeing happens in prayer.",
      "Gethsemane is the apex of Jesus&rsquo; prayer life: &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.&rdquo; (Luke 22:42). Every element of Christian prayer is here: honest petition, filial address, submission, and trust. Jesus prays what he actually wants and yields to what God wills. He does not perform courage in Gethsemane; he prays himself into it. That is what prayer is for.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "ACTS in Practice — Moving Through All Four Registers",
    summary:
      "Spend fifteen minutes working through all four ACTS movements in order, without rushing to supplication. The goal is to discover what your prayer sounds like when adoration comes first.",
    steps: [
      "Begin with Adoration — three to five minutes speaking or writing who God is, not what he has done. Focus on his attributes: holiness, mercy, faithfulness, sovereignty. Let this be worship before it is anything else.",
      "Move to Confession — not a vague &ldquo;forgive me for anything I did wrong,&rdquo; but specific, named sins. The more concrete the confession, the more tangible the absolution. Receive the forgiveness before moving on.",
      "Thanksgiving next — again, specific. Not &ldquo;thank you for my blessings&rdquo; but &ldquo;thank you for the conversation at breakfast, for the friend who called, for another morning.&rdquo; Specificity trains the eye to see grace.",
      "Supplication last — bring your requests, for yourself and others. Notice how the same requests feel different having come through adoration, confession, and thanksgiving first.",
    ],
    anchor: "Philippians 4:6 — Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
  },
  {
    number: "02",
    title: "Intercession — Building a Prayer List That Lives",
    summary:
      "A structured intercessory practice: five minutes daily for specific people, rotating through different categories, standing in the breach on their behalf.",
    steps: [
      "Make a short list: one person in crisis, one person far from God, one person in leadership, one person you find difficult. Pray for each by name with specific petition — not just &ldquo;bless them&rdquo; but what you actually want God to do.",
      "Once a week, pray Ezekiel 22:30 back to God: &ldquo;Here I am — I will stand in the breach for [name].&rdquo; Let the weight of genuine identification settle. Intercession is not a prayer list; it is choosing solidarity.",
      "Pray Scripture over people by name. Take a promise or a prayer from Paul&rsquo;s letters (Eph 1:17-19, Phil 1:9-11, Col 1:9-12) and insert the person&rsquo;s name. You are aligning your intercession with what the Spirit is already praying.",
      "Keep the list alive: add people, remove them when situations resolve, note answers. An intercession list that never changes is a monument; one that grows and changes is a ministry.",
    ],
    anchor: "Ezekiel 22:30 — I sought for a man among them who should stand in the breach before me for the land.",
  },
  {
    number: "03",
    title: "Learning to Lament — Giving Your Grief to God",
    summary:
      "A structured practice for praying the lament Psalms during seasons of grief, confusion, or anger — moving from silence to honest speech to God.",
    steps: [
      "Choose a lament Psalm that fits your situation: Psalm 13 (how long?), Psalm 22 (abandonment), Psalm 88 (unrelieved darkness), Psalm 130 (out of the depths). Read it aloud slowly — it was written to be spoken.",
      "Write your own lament in the Psalm&rsquo;s structure: Address God by name. Tell him exactly what is wrong — do not soften it. Then, deliberately, name something true about who God is. Finally, make a specific request.",
      "Do not rush toward resolution. The gift of lament is that it lets you stay in the hard place with God rather than leaving the hard place by leaving God. The Psalm does not require you to feel better; it requires you to speak.",
      "Sit in the silence after. Lament often ends not with an answer but with a posture change — from isolated grief to grief in the presence of God. That is enough.",
    ],
    anchor: "Psalm 62:8 — Trust in him at all times, O people; pour out your heart before him; God is a refuge for us.",
  },
  {
    number: "04",
    title: "The Daily Examen — Fifteen Minutes That Change Everything",
    summary:
      "Ignatius&rsquo; prayer of examen, simplified for daily use: a brief end-of-day review that integrates life and prayer by asking where God was in the day just lived.",
    steps: [
      "Thanksgiving: Before reviewing the day, name three specific gifts. This sets the frame — the day you are about to review was a day in which God was present and giving.",
      "Review: Walk back through the day from morning to now. Ask two questions of each significant moment: Where did I sense God&rsquo;s presence or grace? Where did I close off from it? Don&rsquo;t judge — just notice.",
      "Sorrow: Whatever surfaced in the review that needs confession — bring it cleanly. One sentence, honest, no spiral. Receive the absolution and don&rsquo;t return to it tonight.",
      "Hope: Choose one thing to carry into tomorrow with more attention to God&rsquo;s presence. Not a resolution — a direction. Close with the briefest prayer you know.",
    ],
    anchor: "Lamentations 3:40 — Let us test and examine our ways, and return to the LORD.",
  },
  {
    number: "05",
    title: "The Prayer of Silence — Practicing the Presence",
    summary:
      "Ten minutes of structured silence with God — not the absence of prayer but its most concentrated form, practicing attentiveness to the One who is already present.",
    steps: [
      "Choose a short anchor phrase — a name for God or a line of Scripture (&ldquo;You are here,&rdquo; &ldquo;Speak, Lord,&rdquo; &ldquo;Come, Holy Spirit&rdquo;). This is not a mantra emptying the mind; it is an address to the living God.",
      "When thoughts intrude — and they will — do not fight them. Gently return to the anchor phrase. The returning is the prayer. Distractedness is not failure; inattentiveness is the human condition, and each return is a small act of choosing God.",
      "Do not evaluate the time by what you felt or heard. Silence is faithfulness, not technique. The value is cumulative: people who have practiced for months describe a growing sense of God&rsquo;s presence throughout the day, not only in the quiet.",
      "End by praying aloud — a short, simple prayer that reconnects the silence to the rest of your life. Silence that has no edges is escapism; silence that returns to the world is formation.",
    ],
    anchor: "Psalm 46:10 — Be still, and know that I am God.",
  },
  {
    number: "06",
    title: "Corporate Prayer — Praying With the Body",
    summary:
      "Strategies for entering corporate prayer more fully — not as an observer of someone else&rsquo;s conversation with God, but as a genuine participant in the prayer of the body.",
    steps: [
      "Before corporate prayer begins, spend two minutes in silence preparing your heart. The transition from the world&rsquo;s pace to God&rsquo;s presence is not automatic; it requires a small act of deliberate turning.",
      "When someone else is praying aloud, make it your prayer. Track the words, agree inwardly, add specific names and faces to general petitions. &ldquo;Amen&rdquo; is not a period; it means &ldquo;I make this mine.&rdquo;",
      "When you pray aloud in a group, pray simply and briefly enough that others can follow. Corporate prayer is not a solo; it is a choir, and the good pray-er makes room for others rather than filling all the space.",
      "After the gathering, write down one thing that was prayed that you want to carry into the week. Corporate prayer is most formative when it outlasts the gathering.",
    ],
    anchor: "Matthew 18:20 — For where two or three are gathered in my name, there am I among them.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "E.M. Bounds",
    role: "Power Through Prayer — The Apostle of Prayer",
    quote:
      "Prayer is not a little habit pinned on to us while we were tied to our mother&rsquo;s apron strings; neither is it a little decent quarter of an hour&rsquo;s exercise in the morning. Prayer is the practised, passionate, prevailing cry of the soul to God.",
    bio: "Edward McKendree Bounds rose at four in the morning to pray for hours before breakfast — a practice he maintained for decades until his death in 1913. His nine books on prayer were largely published posthumously. What makes Bounds unusual is not his method but his diagnosis: he insisted that the weakness of the church is not a problem of program, personality, or technique — it is a problem of prayer. &ldquo;The men whom God uses most,&rdquo; he wrote, &ldquo;are the men most on their knees.&rdquo; His work is demanding, even uncomfortably so, but no writer has made the stakes of the praying life plainer.",
  },
  {
    name: "Ole Hallesby",
    role: "Prayer — Helplessness as the Condition of Prayer",
    quote:
      "Helplessness is the real secret and the impelling power of prayer. You will never pray with greater fervency or with a stronger faith than when you feel yourself helpless and powerless, as it were, in the grip of sin or need.",
    bio: "Norwegian theologian Ole Hallesby&rsquo;s simply-titled Prayer (1931) has been called one of the most important Christian books of the twentieth century. His central thesis is quietly revolutionary: the only prerequisite for prayer is helplessness. Not eloquence, not worthiness, not spiritual achievement — helplessness. Hallesby draws on Luke 11&rsquo;s friend at midnight and the parable of the persistent widow to argue that God has designed prayer to work precisely when we have nothing to offer but need. His book is a long permission slip for the ordinary, struggling believer to pray.",
  },
  {
    name: "Richard Foster",
    role: "Prayer: Finding the Heart&rsquo;s True Home",
    quote:
      "To pray is to change. Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives. The closer we come to the heartbeat of God the more we see our need and the more we desire to be conformed to Christ.",
    bio: "Richard Foster&rsquo;s Prayer: Finding the Heart&rsquo;s True Home (1992) is a survey of twenty-one types of prayer drawn from across the Christian tradition — from simple prayer through liturgical prayer to the prayer of suffering. What distinguishes Foster&rsquo;s approach is his insistence that the variety of prayer is not a sign of theological confusion but of spiritual richness, and that different seasons of the Christian life require different forms. He also served as the primary modern popularizer of the contemplative tradition among evangelical Protestants, making writers like Thomas Merton and John of the Cross accessible to readers who had never encountered them.",
  },
  {
    name: "Dallas Willard",
    role: "The Divine Conspiracy — Prayer as Conversational Relationship",
    quote:
      "Prayer is a matter of explicitly communicating with God about what we are doing together and what we need. It is not a performance before God or a recitation of needs. It is simply talking with God about what is happening in our lives.",
    bio: "Dallas Willard, philosopher of mind and professor at USC, spent his second career arguing that the Christian life is not a set of obligations but a conversational relationship with God — and that prayer is the ordinary language of that relationship. His account of prayer in The Divine Conspiracy and Hearing God resists the twin temptations of performance (impressing God with fervency) and mechanism (the right technique producing the right result). Prayer, for Willard, is simply talking to God about what is happening, on the assumption that God is present, interested, and responsive. The ordinariness of it is the point.",
  },
  {
    name: "Thomas Merton",
    role: "Contemplative Prayer — The Desert as Inner Landscape",
    quote:
      "Prayer is not just a formula of words, or a series of desires springing up in the heart — it is the orientation of our whole body, mind, and spirit to God in silence, attention, and adoration. All good meditation is a form of prayer.",
    bio: "Thomas Merton, Trappist monk and one of the most influential spiritual writers of the twentieth century, brought the contemplative tradition of the Desert Fathers and the medieval mystics into dialogue with modern experience. His Contemplative Prayer and New Seeds of Contemplation are the most accessible entries into a tradition that many Protestants approach with suspicion. Merton is careful: he insists that Christian contemplation is not an achievement of emptiness but an opening to the presence of the risen Christ. His own prayer life was forged in silence, poverty, and the monastic hours — but his writing makes the case that the same contemplative attention is available, in shorter forms, to anyone willing to be still.",
  },
  {
    name: "Andrew Murray",
    role: "With Christ in the School of Prayer",
    quote:
      "The man who mobilises the Christian church to pray will make the greatest contribution to world evangelisation in history. Prayer is reaching out after the unseen; fasting is letting go of all that is seen and temporal.",
    bio: "Andrew Murray, South African Dutch Reformed pastor and prolific author (over two hundred books), wrote With Christ in the School of Prayer as a thirty-one-day meditation on the Lord&rsquo;s teaching in Matthew 6 and Luke 11. His central conviction is that prayer is learned — and learned specifically by studying the prayer life of Jesus. Murray is particularly strong on the connection between abiding in Christ (John 15) and prayer: the branch that remains in the vine prays naturally and fruitfully, not as effort but as the overflow of union. His persistent theme is that the weakness of the church is the weakness of its prayer, and that the remedy is not technique but deeper union with Christ the intercessor.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Matthew 6:9-13",
    text: "Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.",
    reflection:
      "The Lord&rsquo;s Prayer contains all six types of prayer in seven lines: adoration (hallowed be your name), intercession (your kingdom come), petition (give us our daily bread), confession (forgive us our debts), forgiveness-extended (as we have forgiven), and protection (deliver us from evil). Jesus does not give a technique; he gives a grammar — the basic moves of genuine conversation with the Father.",
  },
  {
    reference: "Romans 8:26-27",
    text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.",
    reflection:
      "The most merciful passage in the theology of prayer: the Spirit completes what we cannot begin. Paul does not say the Spirit helps those who know how to pray; he says the Spirit helps us in our weakness — the weakness being our ignorance of what to ask for. Every wordless prayer, every barely-formed desire, every too-tired-to-speak moment is held by the Spirit and offered perfectly to the Father.",
  },
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "Paul does not say prayer removes the difficulty; he says it replaces anxiety with a peace that exceeds explanation. The Greek word for &ldquo;guard&rdquo; is military — a garrison holding a position. Prayer does not solve the problem; it changes the position from which we face it. Thanksgiving inside the petition is the hinge: it keeps prayer from becoming merely a symptom of anxiety dressed in religious language.",
  },
  {
    reference: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.",
    reflection:
      "This is the language Jesus chose from the cross, and that alone authorizes it as prayer. The Psalmist does not say &ldquo;I feel forsaken&rdquo; — he says &ldquo;you have forsaken me,&rdquo; addressed to God, in second person. The lament is still speech toward God, not away from him. To say &ldquo;why&rdquo; is to believe there might be an answer. That is the thin thread that lament holds, and it is enough.",
  },
  {
    reference: "Ezekiel 22:30",
    text: "And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none.",
    reflection:
      "The verse is a portrait of an empty place — the breach in the wall where the intercessor should be standing, and isn&rsquo;t. It defines intercession not as a spiritual gift for the especially devout but as a vacancy in the community of faith. Somewhere, there is always a breach. The question the verse poses is: will you stand in it?",
  },
  {
    reference: "Luke 22:42",
    text: "Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.",
    reflection:
      "Gethsemane is the complete grammar of Christian prayer in a single sentence: honest petition (&ldquo;remove this cup&rdquo;), filial address (&ldquo;Father&rdquo;), and submission (&ldquo;not my will, but yours&rdquo;). Jesus prays what he actually wants and yields to what God wills — not as performance of courage, but as the fruit of agonized prayer. He is not pretending the cup is easy; he is choosing the Father over the preference. That is the shape of all mature petitionary prayer.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "ZDGQ7NHQMNM", title: "The ACTS Model of Prayer Explained" },
  { videoId: "pJcHAe81sso", title: "Intercessory Prayer — Standing in the Gap" },
  { videoId: "h8NsOF3I2No", title: "The Psalms of Lament: Honest Prayer in Pain" },
  { videoId: "lTlE-9V3_fE", title: "Contemplative Prayer and the Christian Tradition" },
  { videoId: "YD5vvT5YTSA", title: "Romans 8:26-27 — Praying in the Spirit" },
  { videoId: "CmR3MNWCYIY", title: "Ignatius and the Prayer of Examen" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianPrayerTypesPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PTPEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [prayerType, setPrayerType] = useState("");
  const [whatPrayed, setWhatPrayed] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PTPEntry[]);
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
    if (!prayerType.trim() || !whatPrayed.trim()) return;
    const entry: PTPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      prayerType: prayerType.trim(),
      whatPrayed: whatPrayed.trim(),
      response: response.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPrayerType("");
    setWhatPrayed("");
    setResponse("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? "rgba(107, 79, 187, 0.12)" : "transparent",
    color: active ? PURPLE : MUTED,
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
    color: PURPLE,
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
                color: PURPLE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Christian Prayer
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Every Kind of Prayer: A Guide to the Types of Christian Prayer
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Prayer is not one thing. The Psalter contains adoration and lament, confession and
              thanksgiving, petition and silence. The New Testament adds intercession, corporate
              prayer, praying in the Spirit, and the model of Jesus himself. This guide explores
              what each type is, why it matters, and how to practice the full range of the praying
              life — not just the parts that come naturally.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${PURPLE}`,
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
              <p style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>
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
                The theology of prayer begins not with technique but with relationship — who we are
                praying to, and what kind of communication God has opened between himself and his
                creatures. These nine studies move through the main types of Christian prayer and
                the theological questions they raise.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: PURPLE,
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
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(107, 79, 187, 0.07)",
                        border: `1px solid rgba(107, 79, 187, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The whole counsel of prayer
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  No single type of prayer is sufficient by itself. A prayer life confined to
                  petition produces a transactional God. A prayer life confined to contemplation
                  loses the neighbor. A prayer life without lament is not big enough to hold a
                  life. The full range — ACTS, intercession, lament, contemplation, the examen,
                  praying in the Spirit — is the full range of the relationship, because the God
                  being addressed is larger than any single approach to him. Explore more of the
                  spiritual disciplines in our{" "}
                  <Link href="/christian-spiritual-disciplines" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Spiritual Disciplines guide
                  </Link>
                  , or go deeper on listening in{" "}
                  <Link href="/christian-bible-study" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Christian Bible Study
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
                Six practices, one per type of prayer — each a simple, concrete form you can begin
                today. The Journal tab on this page is built to log your experience as you move
                through them.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: PURPLE,
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
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: 10 }}>
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
                      color: PURPLE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Which type to start with
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  If you have never had a structured prayer life, start with ACTS (Practice 01) for
                  two weeks. If your prayer is stuck — mechanical, routine, or emotionally flat —
                  try lament (Practice 03) or the examen (Practice 04). If your prayer is all
                  petition and no listening, add the prayer of silence (Practice 05). If you pray
                  alone but rarely with others, commit to corporate prayer (Practice 06). The type
                  you resist most is usually the one you need most.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers of prayer — from the nineteenth-century Methodist who rose at four in
                the morning to the twentieth-century monk who found God in silence — each with a
                distinctive angle on the praying life.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: PURPLE,
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
                      background: "rgba(107, 79, 187, 0.06)",
                      borderLeft: `3px solid ${PURPLE}`,
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

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages — one for each major type of prayer — to read slowly, memorize, and
                pray. Let each one shape your posture before God as much as your words to him.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: PURPLE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Praying the Psalms
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The Psalter is the church&rsquo;s first and greatest prayer book. It was the prayer
                  book of Jesus — he quotes it from the cross (Ps 22:1), sings it in the upper room
                  (Ps 113-118), and fulfills it throughout his life. Bonhoeffer&rsquo;s short book
                  Psalms: The Prayer Book of the Bible is the best introduction to praying the Psalms
                  rather than merely reading them. The discipline is simple: read a Psalm aloud each
                  day, slowly, as prayer. Over a month the full range of the praying life opens up.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Log the prayer type you practiced, what you actually prayed, and any sense of
                God&rsquo;s response — however faint or absent. Over time, a journal like this
                becomes a record of a relationship. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New prayer entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="ptp-type" style={labelStyle}>
                    Type of prayer practiced
                  </label>
                  <input
                    id="ptp-type"
                    type="text"
                    value={prayerType}
                    onChange={(e) => setPrayerType(e.target.value)}
                    placeholder="e.g. Lament, Intercession, Examen, Contemplative, Adoration, Petition"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="ptp-what" style={labelStyle}>
                    What you prayed
                  </label>
                  <textarea
                    id="ptp-what"
                    value={whatPrayed}
                    onChange={(e) => setWhatPrayed(e.target.value)}
                    placeholder="The substance of your prayer — as honest and specific as you are willing to write"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="ptp-response" style={labelStyle}>
                    Any sense of God&rsquo;s response
                  </label>
                  <textarea
                    id="ptp-response"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="A Scripture that surfaced, a shift in the feeling of the prayer, silence, a word, a memory — or nothing yet. All of these are data."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!prayerType.trim() || !whatPrayed.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !prayerType.trim() || !whatPrayed.trim() ? BORDER : PURPLE,
                    color: !prayerType.trim() || !whatPrayed.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !prayerType.trim() || !whatPrayed.trim() ? "not-allowed" : "pointer",
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
                      Try one type of prayer today — even five minutes of lament or the ACTS
                      pattern — and log what happened. The record starts here.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: PURPLE }}>
                              {entry.prayerType}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete ${entry.prayerType} entry`}
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

                        <div style={{ marginBottom: entry.response ? 10 : 0 }}>
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
                            What I prayed
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatPrayed}
                          </p>
                        </div>

                        {entry.response && (
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
                              God&rsquo;s response
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.response}
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
                Teaching on the major types of prayer — the ACTS model, intercessory prayer, lament,
                contemplative tradition, Romans 8, and Ignatian spirituality. Best watched after
                reading the Theology tab.
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
              A life of prayer is a life of relationship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The types of prayer are not competing theories about the best way to reach God — they
              are different rooms in the same house. Adoration and lament are not opposites; they
              are the two poles of honest relationship with the living God. Petition and
              contemplation are not alternatives; they are inhale and exhale. The Christian who
              learns to pray in all the forms the tradition has preserved will find, over years,
              that prayer has become less a discipline and more a mother tongue — the natural
              language of a life lived in God&rsquo;s presence.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the full{" "}
              <Link href="/christian-spiritual-disciplines" style={{ color: PURPLE, textDecoration: "underline" }}>
                Spiritual Disciplines
              </Link>
              , let Scripture deepen your prayer with{" "}
              <Link href="/christian-bible-study" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Bible Study
              </Link>
              , or practice silence and solitude in{" "}
              <Link href="/christian-fasting" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Fasting
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
