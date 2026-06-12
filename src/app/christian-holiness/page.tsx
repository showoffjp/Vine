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

const STORAGE_KEY = "vine_christianholiness_entries";

interface HLNEntry {
  id: string;
  date: string;
  holinessArea: string;
  graceReceived: string;
  nextStep: string;
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
    badge: "1 Peter 1:15-16 / Leviticus 11:44",
    title: "&ldquo;Be Holy as I Am Holy&rdquo; — The Call Re-Applied to the Church",
    paragraphs: [
      "The command is ancient before it is new. &ldquo;Be holy, for I am holy&rdquo; runs through Leviticus like a refrain — it is the ground note of the entire sacrificial and purity system Israel received at Sinai. To be holy was to be set apart: from other nations, from defilement, from anything that did not belong in the presence of a God whose consuming fire would not tolerate mixture. Holiness in the Mosaic code was concrete, embodied, and communal — it shaped what Israel ate, wore, planted, built, and how they treated the alien in their midst.",
      "Peter lifts the Leviticus text and re-addresses it to scattered, suffering Gentile Christians: &ldquo;As he who called you is holy, you also be holy in all your conduct, since it is written, &lsquo;You shall be holy, for I am holy&rsquo;&rdquo; (1 Pet 1:15-16). The move is deliberate. The new covenant has not lowered the standard — it has relocated the power. Under Sinai, Israel was commanded to be holy; under the new covenant, the Holy Spirit has been poured out to make holiness possible from the inside. The call is the same. The means of grace have multiplied.",
      "The rationale — &ldquo;for I am holy&rdquo; — is the key. Christian holiness is not a morality project; it is a family resemblance project. The reason you should be holy is not social respectability, not fear of punishment, not earning favor. It is that you were born of a holy Father, and children grow to look like their parents. Holiness is what it looks like when the image of God, distorted by sin, is being restored to its original likeness.",
    ],
    callout: {
      label: "The word",
      text: "Hagios (ἅγιος): set apart, consecrated, different in kind from what surrounds it — not morally superior by effort but genuinely other by participation in the divine nature.",
    },
  },
  {
    badge: "The Two Traditions",
    title: "Progressive Sanctification vs. Entire Sanctification — Reformed and Wesleyan",
    paragraphs: [
      "Two great streams of Protestant thought have shaped the doctrine of holiness, and understanding both prevents the errors of each. The Reformed tradition speaks of progressive sanctification: the Spirit begins the work of holiness in regeneration and carries it forward throughout the believer&rsquo;s life, but complete freedom from sin is not attained in this life. We are simultaneously justified and sinners (simul iustus et peccator, in Luther&rsquo;s phrase), and humility before our ongoing fallenness is the appropriate posture. The emphasis is on perseverance, means of grace, and the long obedience in the same direction.",
      "The Wesleyan-Holiness tradition — rooted in John Wesley&rsquo;s doctrine of entire sanctification, or the &ldquo;second blessing&rdquo; — holds that the Holy Spirit can purify the heart of the dominant reign of sin in a decisive work subsequent to conversion, making perfect love (not sinless perfection in the sense of incapacity for error, but love unmixed with the ruling desire to sin) attainable before death. Wesley called it going on to perfection, grounding it in Paul&rsquo;s prayer in 1 Thessalonians 5:23: &ldquo;May God himself, the God of peace, sanctify you through and through.&rdquo; The emphasis is on full surrender, crisis experience, and the Spirit&rsquo;s power to change the heart&rsquo;s fundamental direction.",
      "Where the traditions agree is more important than where they differ: holiness is possible because God commands it and God enables it; sin need not reign; the Christian is called to active cooperation with the Spirit&rsquo;s sanctifying work through the means of grace; and the goal is love — of God and neighbor — not rule-keeping. The debate about timing and crisis should not obscure the shared conviction that the Spirit&rsquo;s work in the believer is a real work producing real transformation.",
    ],
  },
  {
    badge: "Hebrews 12:14 / Romans 6",
    title: "Positional vs. Progressive Holiness — What Christ Has Made Us vs. What We Are Becoming",
    paragraphs: [
      "Scripture speaks of holiness in two tenses simultaneously, and confusing them produces both false security and false despair. Positional holiness — what we are in Christ — is the ground. Paul addresses the Corinthians, a congregation famous for its disorders, as &ldquo;those sanctified in Christ Jesus, called to be saints&rdquo; (1 Cor 1:2). They are already set apart, already consecrated, already holy in the representative standing of the One who is perfectly holy and who is now their life. This positional reality is not earned and cannot be improved upon; it is received by faith and rests on Christ&rsquo;s record alone.",
      "Progressive holiness — what we are becoming — is the trajectory. &ldquo;Strive for peace with everyone, and for the holiness without which no one will see the Lord&rdquo; (Heb 12:14). The verb is pursue — it implies movement, effort, and a destination not yet reached. Paul in Romans 6 grounds the pursuit in the positional reality: we have died to sin (positional), therefore do not let sin reign in your mortal body (progressive). The indicative precedes the imperative. We do not become holy in order to be accepted; we pursue holiness because we already are accepted, and because the nature we have been given in Christ is holy and must find its expression in a holy life.",
      "The danger of dwelling only on positional holiness is a quietism that mistakes forensic status for experiential transformation: &ldquo;God sees me as holy, so practical disobedience doesn&rsquo;t matter much.&rdquo; The danger of dwelling only on progressive holiness is a works-righteousness that forgets the foundation: exhausted striving for a standing we already possess in Christ. The mature Christian holds both — resting in the first, pressing into the second, and never confusing the engine with the fuel.",
    ],
    callout: {
      label: "Key verse",
      text: "\"Without holiness no one will see the Lord\" (Heb 12:14) — the pursuit is not optional, but it flows from grace, not toward it.",
    },
  },
  {
    badge: "The Means of Grace",
    title: "Word, Prayer, Sacrament, and Community as the Instruments of Holiness",
    paragraphs: [
      "Holiness does not happen in a vacuum. The Spirit works through means — ordinary, repeatable, ecclesial practices through which God has promised to act on the soul. Scripture and preaching: the Word of God is the Spirit&rsquo;s sword, cutting between soul and spirit, exposing the hidden places where sin still reigns and shaping the mind to know God truly. Prayer: not just petition but the daily act of presenting the self to God in honesty, opening the will to the Spirit&rsquo;s recalibrating work, and spending time in the presence that gradually transforms those who linger there (&ldquo;we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image&rdquo; — 2 Cor 3:18).",
      "The sacraments — Baptism and the Lord&rsquo;s Supper — are the Spirit&rsquo;s dramatized speech acts: water that enacts dying with Christ and rising to new life, bread and cup that nourish union with the holy Christ who gives himself to us. Holiness grows at the table not because the elements contain magic but because the Spirit uses visible, tangible means to do what words alone sometimes cannot reach — to feed the faith that unites us to the holy One. Community rounds out the means: the &ldquo;one anothers&rdquo; of the New Testament are not optional extras but the irreplaceable environment of sanctification. You cannot grow in holiness in isolation; you need people who see what you cannot see, speak what you will not say to yourself, and bear the weight of who you are while you are still becoming who you will be.",
    ],
  },
  {
    badge: "The Danger",
    title: "The Danger of Perfectionism — Trying Harder vs. Receiving Grace",
    paragraphs: [
      "The pursuit of holiness can become, by a subtle and devastating inversion, a pursuit of self-approval — a project of the ego rather than a gift of the Spirit. The perfectionist is not someone who loves holiness too much; she is someone who has confused holiness with achievement, and who therefore uses the command &ldquo;be holy&rdquo; as fuel for a striving that never rests, never receives, and never quite trusts that what Christ has done is enough. The anxiety that drives perfectionism is not zeal; it is fear — fear that God&rsquo;s acceptance depends on daily performance, that grace is provisional, that the ground might give way.",
      "The corrective is not lower standards but a different foundation. J.C. Ryle, whose book Holiness set the standard for a generation, was clear that holiness requires real effort — he warned against cheap-grace quietism. But he also grounded the effort entirely in the work of Christ: &ldquo;The main thing is, see that you look to Christ as the foundation and root of all holiness, as well as of all pardon.&rdquo; Holiness grows when we receive grace, not when we manufacture goodness. The soul that rests in the finished work of Christ and then, from that rest, cooperates with the Spirit makes faster progress than the striving perfectionist, because it is not fighting on two fronts simultaneously — against sin and against the fear of God&rsquo;s rejection.",
      "Dallas Willard&rsquo;s distinction between discipline and willpower is decisive here: the spiritual disciplines are not the same as gritting your teeth. They are practices that place the soul in the path of grace — that put us where God can work on us. The effort is real; the producing is God&rsquo;s. &ldquo;Work out your own salvation with fear and trembling, for it is God who works in you, both to will and to work for his good pleasure&rdquo; (Phil 2:12-13). Both halves are true, and neither cancels the other.",
    ],
  },
  {
    badge: "Union with Christ",
    title: "Union with Christ as the Foundation of Holiness",
    paragraphs: [
      "Every doctrine of holiness that loses union with Christ eventually collapses into moralism. Paul&rsquo;s great argument in Romans 6 does not begin with commands; it begins with ontology: &ldquo;Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death?&rdquo; (Rom 6:3). We are not people trying to become holy by imitating a distant model; we are people who have been joined to a living person, and that person is holy. Sanctification, on this account, is not addition — acquiring virtues we did not have before — but expression: the holy life of Christ, in which we now participate by the Spirit, breaking through the remaining crust of the old self.",
      "Sinclair Ferguson, following Calvin, identifies union with Christ as the hinge on which the whole ordo salutis turns. Justification and sanctification are not two separate transactions but two benefits that flow simultaneously from the same union. You cannot have Christ for forgiveness without having him for transformation; you receive the whole Christ or none of him. This is why Ferguson warns that any approach to sanctification that effectively sidelines Christ — that makes holiness a program to follow rather than a Person to abide in — will eventually prove exhausting and fruitless. &ldquo;Abide in me,&rdquo; Jesus says, &ldquo;and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me&rdquo; (John 15:4).",
    ],
    callout: {
      label: "Key insight",
      text: "Holiness is not achieved by trying to be more like Christ from the outside; it is expressed by being in Christ from the inside. The Vine produces holiness in branches that remain.",
    },
  },
  {
    badge: "Galatians 5 / The Goal",
    title: "The Fruit of the Spirit as Evidence of Holiness, and Why Holiness Is About Love, Not Rules",
    paragraphs: [
      "The clearest sign that holiness has been misunderstood is when it shrinks to rule-compliance and the avoidance of a list of prohibited behaviors. Biblical holiness is not primarily a set of prohibitions; it is the character of God, expressed in the life of the one who has been joined to God through Christ. Paul&rsquo;s description of the sanctified life in Galatians 5 is a harvest of relational qualities — love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control — not a checklist of religious performances. The holy person is recognizable not by their abstentions but by their warmth.",
      "Jesus himself flattens the entire law onto two commands: love God with your whole self and love your neighbor as yourself (Matt 22:37-40). Paul echoes: &ldquo;Love is the fulfilling of the law&rdquo; (Rom 13:10). Holiness, therefore, is not the enemy of love — as though to be holy means to be cold and separate — but its highest expression. The holy person is the one who loves as God loves: freely, persistently, toward the undeserving, at cost. The purity laws of Leviticus were pedagogical, pointing toward a day when the Spirit would write the law of love on the heart itself (Jer 31:33). That day has come. Holiness now looks like love, because love looks like God.",
      "This means that the most powerful test of progress in holiness is not whether you have kept the rules but whether you love the people in your life more than you did before — more patiently, more generously, more honestly, more sacrificially. If growing in holiness is making you harder, colder, more judgmental, and more certain of your own superiority, the root is not healthy. Holiness that does not make you more tender is not yet the holiness of God.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Examen for Holiness",
    summary:
      "An ancient prayer practice adapted for sanctification: a daily review of where the Spirit was at work, where the old self resisted, and where grace made the difference.",
    steps: [
      "Set aside ten minutes in the evening. Begin by sitting quietly and asking the Spirit to show you the day honestly — not to condemn but to illuminate.",
      "Review the day in order: where did love, patience, or integrity show up in your actions? Name it and thank God. Where did the old self prevail — irritability, self-protection, dishonesty, indulgence? Name it without self-condemnation, confess it, and receive the forgiveness that Hebrews 4:16 offers at the throne of grace.",
      "Ask one pointed question: in the moments I chose the holy path, was it the Spirit&rsquo;s grace or my own willpower that held me? Note the difference — grace-produced holiness is sustainable; willpower-produced holiness is not.",
      "Close by naming one area where you want to cooperate with the Spirit tomorrow and one means of grace (Word, prayer, table, community) you will use to do it.",
    ],
    anchor: "Psalm 139:23-24 — Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting.",
  },
  {
    number: "02",
    title: "Disciplined Engagement with the Means of Grace",
    summary:
      "The Spirit grows holiness through ordinary channels. Building a structured week around Scripture, prayer, and the Lord&rsquo;s Table is not legalism; it is staying on the path where God walks.",
    steps: [
      "Protect a daily block for Scripture — not devotional skimming but the kind of slow reading that allows the text to surface questions, confessions, and wonder. Read a chapter, ask what it reveals about God&rsquo;s holiness, and let it shape one concrete intention for the day.",
      "Pray the prayer of consecration daily — something like Wesleyan covenant prayer: &ldquo;I am no longer my own, but thine.&rdquo; The surrender is not once-for-all but daily, because the self reasserts its ownership every morning.",
      "Receive the Lord&rsquo;s Supper as often as your church allows, not as a rote ritual but as a renewing encounter with the holy Christ who gives himself to be your life. Come confessed, come hungry.",
      "Choose at least one person in your church community who knows you well enough to ask hard questions. Schedule regular honest conversation — not accountability in the punitive sense but in the familial sense: this is who I am, and I need someone to see it.",
    ],
    anchor: "2 Corinthians 3:18 — We all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another.",
  },
  {
    number: "03",
    title: "Mortification — Naming and Starving the Sin Patterns",
    summary:
      "John Owen&rsquo;s counsel: be killing sin or it will be killing you. Not dramatic warfare but the daily, patient practice of refusing to feed what must die.",
    steps: [
      "Name the patterns honestly. Most people have two or three dominant sin tendencies — particular forms of pride, lust, anger, fear, or indulgence that recur across decades. General repentance of &ldquo;sin&rdquo; is often a way of not repenting of anything specific. Name yours.",
      "Identify the triggers and the feeding patterns. What situations, people, or emotional states reliably open the door? What choices earlier in the chain make the sin feel inevitable? Mortification begins upstream.",
      "Cut off the supplies. If a particular form of screen use fuels lust, the phone goes to another room. If certain social contexts reliably produce contempt or pride, decrease their frequency. Jesus&rsquo; hyperbole about cutting off the hand is not literal but it is serious: radical inconvenience in the service of holiness is wisdom, not extremism.",
      "Replace the starved pattern with its holy opposite — not just absence but presence. The swept and empty house invites seven worse demons (Matt 12:45). Fill the space vacated by sin with the corresponding virtue, nourished by the corresponding means of grace.",
    ],
    anchor: "Romans 8:13 — If by the Spirit you put to death the deeds of the body, you will live.",
  },
  {
    number: "04",
    title: "Study of the Holiness of God",
    summary:
      "You cannot pursue what you do not behold. A regular, sustained contemplation of the holiness of God — in the Psalms, the prophets, and in Revelation — is the fire that makes holiness desirable rather than merely required.",
    steps: [
      "Spend one week per month with texts that describe the holiness of God in its full weight: Isaiah 6 (the seraphim, the glory, Isaiah&rsquo;s undoing), Revelation 4-5 (the throne, the four living creatures, the ceaseless Holy Holy Holy), Psalm 99, Habakkuk 1:13 (&ldquo;your eyes are too pure to look on evil&rdquo;).",
      "Let the vision produce its natural effect: awe, humility, and the long uncomfortable silence in which you see your distance from what God is and what he is making you. Do not rush past the discomfort. Isaiah did not rush past it; it was the discomfort that made room for the coal from the altar.",
      "After the humbling, receive the gospel with fresh ears: that this God — this one, holy, blazing, other God — is &ldquo;our Father&rdquo;; that the seraphim&rsquo;s fire that frightened Isaiah cleanses rather than destroys those who are in Christ; that Revelation&rsquo;s throne room is not where we are excluded but where we are heading.",
      "Let the study produce aspiration, not merely description. Holiness becomes desirable when we have seen the One who is holy and been undone by the beauty of it.",
    ],
    anchor: "Isaiah 6:3 — Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory.",
  },
  {
    number: "05",
    title: "Practicing Entire Consecration",
    summary:
      "Whether from the Reformed or Wesleyan tradition, the practical step is the same: a daily, deliberate surrender of the whole self — will, desires, plans, reputation — to the sanctifying work of the Spirit.",
    steps: [
      "Begin each day with the Wesley Covenant Prayer or a similar act of full surrender: Lord, I am yours today — my time, my body, my ambitions, my fears, my relationships. Do in me what I cannot do in myself.",
      "When you encounter resistance during the day — a moment when your will digs in against what love requires — recognize it as the frontier of sanctification. This is where the Spirit is working. Submit in that specific point.",
      "Do not wait for feelings of holiness before obeying. The obedience precedes the experience. The disciples did not feel ready to walk on water; they stepped out anyway. Many of the great advances in holiness happen in moments of scared, dry, feeling-free obedience.",
      "At the end of the week, note any moment when you yielded in a way that surprised you — where your typical response was replaced by something that felt like grace. These are the Spirit&rsquo;s fingerprints, and naming them builds faith for the next surrender.",
    ],
    anchor: "1 Thessalonians 5:23-24 — May God himself, the God of peace, sanctify you through and through... The one who calls you is faithful, and he will do it.",
  },
  {
    number: "06",
    title: "Community Accountability for Holiness",
    summary:
      "The New Testament knows nothing of solo sanctification. The body of Christ is the environment in which holiness is produced — through confession, mutual exhortation, bearing burdens, and the friction of real relationships.",
    steps: [
      "Find one or two people — same sex, close enough to be honest — with whom you will share what you are actually working on in sanctification. Not a support group for sin but a fellowship of people who want to be holy and will help each other get there.",
      "Practice James 5:16 explicitly: &ldquo;Confess your sins to one another and pray for one another, that you may be healed.&rdquo; The verse promises healing as the outcome of communal confession — something individual, private confession does not always produce. The spoken word before another person has an accountability that the internal thought does not.",
      "Receive the exhortations of community without defensiveness. Hebrews 3:13 instructs believers to &ldquo;exhort one another every day, as long as it is called &lsquo;today,&rsquo; that none of you may be hardened by the deceitfulness of sin.&rdquo; The community that will not speak the truth lovingly will watch each other harden.",
      "Celebrate each other&rsquo;s growth. Name it when you see it. Holiness pursued in community is encouraged by community; point out the fruit you see appearing in those around you.",
    ],
    anchor: "Hebrews 10:24 — And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "J.C. Ryle",
    role: "Holiness (1877) — The Anglican Evangelical on the Long Road of Sanctification",
    quote:
      "Do we know the meaning of sanctification? It is not a thing we are to get from God at our conversion, and then to sit still and enjoy... It is a daily, habitual, constant battle.",
    bio: "J.C. Ryle, Bishop of Liverpool, wrote Holiness in 1877 as an alarm against the cheap-grace tendencies he saw in parts of the Keswick holiness movement. He was not against the pursuit of holiness — quite the opposite. He thundered for it. But he insisted that genuine holiness requires earnest, lifelong effort, a clear-eyed understanding of indwelling sin, and an unbroken dependence on Christ as both foundation and power. His chapter on &ldquo;Growth&rdquo; remains one of the finest treatments of progressive sanctification in English: holiness grows like a tree, slowly and imperceptibly but really, and the evidence of growth is visible in the fruit. Ryle&rsquo;s corrective to both perfectionism and passivity — strive, but strive in the strength of another — has lost nothing in a century and a half.",
  },
  {
    name: "John Wesley",
    role: "A Plain Account of Christian Perfection — The Wesleyan Vision of Entire Sanctification",
    quote:
      "By perfection I mean the humble, gentle, patient love of God and our neighbor, ruling our tempers, words, and actions. I do not mean an exemption from ignorance, mistake, infirmity, or temptation; but the right disposition of the heart.",
    bio: "John Wesley spent fifty years defending and clarifying his doctrine of entire sanctification against misunderstanding from every direction. A Plain Account of Christian Perfection (1766) is his most sustained treatment: a definition of &ldquo;perfection&rdquo; as perfect love rather than sinless incapacity for error, a survey of his own changing understanding, and a pastoral account of how the second blessing might be sought. Wesley&rsquo;s holiness theology launched the global Holiness and Pentecostal movements; his insistence that the Holy Spirit&rsquo;s power is sufficient to purify the dominant disposition of the heart, making love the ruling affection rather than self-will, remains one of the most demanding and hopeful claims in Christian history. The goal is not a person who never fails but a person whose heart has been turned all the way toward God.",
  },
  {
    name: "R.C. Sproul",
    role: "The Holiness of God — The Reformed Tradition on God&rsquo;s Utter Otherness",
    quote:
      "Before we can begin to see the cross as something done for us... we have to see it as something done by us. It is our sin that put Christ there.",
    bio: "R.C. Sproul&rsquo;s The Holiness of God begins not with human holiness but with the holiness of God himself — the utter otherness, the consuming fire, the tremendum that caused Isaiah to cry &ldquo;I am undone!&rdquo; Sproul argued that the church has domesticated God, and that until we recover the vision of God&rsquo;s holiness — his radical difference from everything creaturely and sinful — our pursuit of personal holiness will remain cosmetic. The book traces God&rsquo;s holiness through Scripture, through the medieval mystery (mysterium fascinans et tremendum), through Luther&rsquo;s terrified breakthrough in the tower. Sproul&rsquo;s great contribution is to make holiness theocentric before it is anthropological: you pursue holiness not to feel better about yourself but because you have seen God and you cannot bear the distance.",
  },
  {
    name: "Sinclair Ferguson",
    role: "Devoted to God — Blueprint for Sanctification Rooted in Union with Christ",
    quote:
      "Sanctification divorced from the person of Christ and from union with him always leads to some form of the law of karma — what we put in, we get out. But the New Testament knows nothing of this. It knows only Christ.",
    bio: "Sinclair Ferguson&rsquo;s Devoted to God is perhaps the best single-volume treatment of sanctification in recent Reformed theology. His central argument is that all genuine progress in holiness is grounded in an ever-deepening appreciation of what is already true of us in Christ. Ferguson resists both the moralism that makes holiness a human project and the quietism that makes it God&rsquo;s project alone; instead, he traces the interconnection of justification, adoption, and sanctification as three inseparable blessings of union with Christ. Particularly valuable is his treatment of mortification and vivification — the twin movements of putting off and putting on that constitute the rhythmic pattern of the sanctified life — and his pastoral account of why so many believers plateau in their growth.",
  },
  {
    name: "Dallas Willard",
    role: "The Spirit of the Disciplines — Training for Godliness, Not Trying Harder",
    quote:
      "Grace is not opposed to effort; it is opposed to earning. Effort is action. Earning is attitude.",
    bio: "Dallas Willard&rsquo;s The Spirit of the Disciplines dismantles the tacit assumption that Christian growth happens by direct intention alone — that if you simply want to be kind enough, you will become kind. Willard&rsquo;s insight is that the spiritual disciplines are analogous to physical training: a pianist practices scales not to perform scales but to perform Beethoven; a Christian practices the disciplines not to become disciplined but to become like Christ in the spontaneous responses of daily life. Holiness, on this account, is cultivated rather than willed, trained rather than resolved. His list of disciplines — both &ldquo;abstinence&rdquo; disciplines (fasting, solitude, silence) and &ldquo;engagement&rdquo; disciplines (study, worship, service) — remains the most useful catalogue of the means of grace available in contemporary evangelical literature.",
  },
  {
    name: "John Ortberg",
    role: "The Life You&rsquo;ve Always Wanted — Spiritual Disciplines for Ordinary People",
    quote:
      "The goal is not to get people to do spiritual exercises but to become transformed, the way an athlete training for competition becomes transformed. Spiritual formation is not a program — it is a way of life.",
    bio: "John Ortberg&rsquo;s The Life You&rsquo;ve Always Wanted brings Willard&rsquo;s framework into accessible, pastoral form for ordinary congregations. Ortberg is particularly good on the enemy of holiness that nobody names in polite company: hurry. Hurry, he argues (borrowing from his mentor Willard), is the great enemy of spiritual formation because holiness requires unhurried attention — to God, to neighbor, to the interior movements of the soul. His chapter on &ldquo;slowing&rdquo; as a spiritual discipline is among the most practically useful pieces of spiritual writing in recent decades. Ortberg also insists that holiness must result in joy — that the sanctified life is recognizable not by its rigidity but by a deepening capacity for wonder, gratitude, and delight. Joyless holiness is a contradiction in terms.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Peter 1:15-16",
    text: "But as he who called you is holy, you also be holy in all your conduct, since it is written, &ldquo;You shall be holy, for I am holy.&rdquo;",
    reflection:
      "The command is as wide as life: &ldquo;in all your conduct.&rdquo; Not in religious exercises only, but in the commute, the inbox, the difficult conversation, the unobserved moment. The rationale is familial: the holy One has called you into his family, and family members resemble each other. Holiness is not conformity to a code but conformity to a Father.",
  },
  {
    reference: "Hebrews 12:14",
    text: "Strive for peace with everyone, and for the holiness without which no one will see the Lord.",
    reflection:
      "The word pursue is the same Greek word used of hunting and athletic competition. Holiness in Hebrews is not passive reception but active chase. And the stakes the writer names are ultimate: without holiness, no vision of God. Not as a threat but as a description of reality — only the pure in heart see God (Matt 5:8), and the Spirit&rsquo;s work is to produce that purity.",
  },
  {
    reference: "Romans 6:11-13",
    text: "So you also must consider yourselves dead to sin and alive to God in Christ Jesus. Let not sin therefore reign in your mortal body... but present yourselves to God as those who have been brought from death to life.",
    reflection:
      "Two imperatives built on one indicative: you are dead to sin (indicative), therefore do not let sin reign (imperative), and present yourself to God (imperative). Paul does not say sin has been abolished from your life; he says it need not reign. The tyrant has been dethroned; the Christian&rsquo;s work is to refuse to re-enthrone him by yielding to his remaining demands.",
  },
  {
    reference: "2 Corinthians 3:18",
    text: "And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.",
    reflection:
      "Transformation is by beholding, not by striving. We become what we look at. The unveiled face — the direct access to God that the new covenant opens — produces sanctification as the Spirit mediates the glory of Christ to the gazing soul. The verse is both a method (behold) and a confidence (the Spirit is the agent; you are not doing this alone).",
  },
  {
    reference: "1 Thessalonians 5:23-24",
    text: "Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ. He who calls you is faithful; he will surely do it.",
    reflection:
      "Paul&rsquo;s prayer is comprehensive (&ldquo;completely,&rdquo; &ldquo;whole spirit and soul and body&rdquo;) and confident (&ldquo;he will surely do it&rdquo;). The ground of confidence is not human progress but divine faithfulness. The God who calls is the God who sanctifies; he does not issue commands he is unwilling to enable. Entire sanctification, whether understood as crisis or as the trajectory of a lifetime, is God&rsquo;s promise and God&rsquo;s work.",
  },
  {
    reference: "Galatians 5:22-25",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control... And those who belong to Christ Jesus have crucified the flesh with its passions and desires. If we live by the Spirit, let us also keep in step with the Spirit.",
    reflection:
      "The ninefold fruit is the character of a holy person — and it is the Spirit&rsquo;s produce, not the flesh&rsquo;s achievement. &ldquo;Keep in step with the Spirit&rdquo; is the practical instruction: not running ahead in self-effort, not lagging behind in passivity, but the attentive walk of a person who knows they are following someone. Holiness is a cooperative movement, not a solo performance.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "bMmAG1JKe5g", title: "What Is Holiness? The Biblical Doctrine of Sanctification" },
  { videoId: "5IZkePNEBdk", title: "Progressive Sanctification vs. Entire Sanctification" },
  { videoId: "pRJaXvkZk4g", title: "Union with Christ and the Pursuit of Holiness" },
  { videoId: "7y3pFuX0EsY", title: "J.C. Ryle on Holiness — The Classic Text Explained" },
  { videoId: "YKoSsJXU5pM", title: "Dallas Willard: Grace, Effort, and Spiritual Formation" },
  { videoId: "X1YqWYkUexo", title: "The Holiness of God — Why Otherness Matters" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianHolinessPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<HLNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [holinessArea, setHolinessArea] = useState("");
  const [graceReceived, setGraceReceived] = useState("");
  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as HLNEntry[]);
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
    if (!holinessArea.trim() || !graceReceived.trim()) return;
    const entry: HLNEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      holinessArea: holinessArea.trim(),
      graceReceived: graceReceived.trim(),
      nextStep: nextStep.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setHolinessArea("");
    setGraceReceived("");
    setNextStep("");
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
              Sanctification &amp; Holiness
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Be Holy as I Am Holy: The Pursuit of Christian Holiness
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The command &ldquo;be holy, for I am holy&rdquo; runs from Leviticus to 1 Peter
              without lowering its standard. What changes in the new covenant is not the call but
              the power — the Holy Spirit poured out to transform from the inside what the law
              commanded from the outside. This guide traces the theology of sanctification across
              the Reformed and Wesleyan traditions, the means of grace that grow holiness, the
              voices who have walked the road, and the daily practices that keep you on it.
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
                &ldquo;Strive for peace with everyone, and for the holiness without which no one
                will see the Lord.&rdquo;
              </p>
              <p style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>Hebrews 12:14</p>
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
                Before holiness is a practice, it is a doctrine about God. These seven studies
                trace the command &ldquo;be holy&rdquo; from Leviticus through Peter, examine the
                Reformed and Wesleyan traditions, explore union with Christ as the foundation, and
                answer why holiness is finally about love and not rules.
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
                        background: "rgba(107, 79, 187, 0.07)",
                        border: `1px solid rgba(107, 79, 187, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: PURPLE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The Leviticus call, the Spirit&rsquo;s power, union with Christ, the means of
                  grace, the fruit of love — these are not competing theories of holiness but a
                  single doctrine seen from different angles. God commands what he enables; the
                  Spirit applies what Christ accomplished; the means of grace are the ordinary paths
                  where transformation happens; and the destination is not rule-keeping but
                  resemblance — looking more like the holy God who called you. Explore how holiness
                  intersects with other virtues in our{" "}
                  <Link href="/fruit-of-the-spirit" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Fruit of the Spirit guide
                  </Link>{" "}
                  or go deeper on the interior life in{" "}
                  <Link href="/contemplative-prayer" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Contemplative Prayer
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
                Holiness is pursued, not stumbled into. These six practices — drawn from the
                classical and evangelical traditions — are the ordinary means through which the
                Spirit&rsquo;s sanctifying work takes shape in a real life. Start with one and
                build from there. The Journal tab accompanies the whole.
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
                  A word about effort and grace
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Every practice here requires effort. None of them produces holiness by that
                  effort. They are channels, not engines — means through which the Spirit who is the
                  actual engine of sanctification can do his work. The believer who engages these
                  practices in that spirit — actively, humbly, expecting God to act rather than
                  expecting the activity itself to transform — will find that Philippians 2:12-13
                  is true: you work out, and God works in, and the two are not in tension.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have shaped the doctrine and practice of holiness — from John
                Wesley&rsquo;s Aldersgate to J.C. Ryle&rsquo;s Victorian pulpit, from Sinclair
                Ferguson&rsquo;s Reformed systematics to Dallas Willard&rsquo;s philosophy of
                spiritual formation. Read them in order or follow the thread that pulls you.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: PURPLE,
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
                Six passages that form the spine of the biblical doctrine of holiness. Read them
                slowly, one per week, alongside the Journal practice. Let each text name what the
                Spirit is working on in you.
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, you are
                  holy — utterly, blazingly other — and you have called me to share that
                  nature&rdquo;), confession (&ldquo;I have treated sin as smaller than it is and
                  holiness as more optional than you say&rdquo;), and petition (&ldquo;sanctify me
                  through and through; do what I cannot do in myself by your Spirit&rdquo;).
                  Scripture memorized without prayer informs; Scripture prayed transforms.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The holiness journal asks three questions: where are you actively pursuing holiness
                right now, what grace have you received in that pursuit (not just willpower), and
                what is the next step? Entries are saved privately in your browser. No one sees
                this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New holiness entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hln-area" style={labelStyle}>
                    Area of holiness you&rsquo;re pursuing
                  </label>
                  <input
                    id="hln-area"
                    type="text"
                    value={holinessArea}
                    onChange={(e) => setHolinessArea(e.target.value)}
                    placeholder="E.g. patience with my children, purity of mind, honesty at work, anger patterns"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hln-grace" style={labelStyle}>
                    Grace received — not just willpower
                  </label>
                  <textarea
                    id="hln-grace"
                    value={graceReceived}
                    onChange={(e) => setGraceReceived(e.target.value)}
                    placeholder="Where did the Spirit show up? What means of grace helped? What was given, not manufactured?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="hln-next" style={labelStyle}>
                    Next step in this area
                  </label>
                  <textarea
                    id="hln-next"
                    value={nextStep}
                    onChange={(e) => setNextStep(e.target.value)}
                    placeholder="One concrete, specific step — a practice to begin, a sin pattern to name, a means of grace to return to"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!holinessArea.trim() || !graceReceived.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !holinessArea.trim() || !graceReceived.trim() ? BORDER : PURPLE,
                    color:
                      !holinessArea.trim() || !graceReceived.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !holinessArea.trim() || !graceReceived.trim() ? "not-allowed" : "pointer",
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
                      Name one area, trace where grace showed up, and name the next step. The
                      journal becomes a record of the Spirit&rsquo;s work over time.
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
                              {entry.holinessArea}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.holinessArea}`}
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
                            Grace received
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.graceReceived}
                          </p>
                        </div>

                        {entry.nextStep && (
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
                              Next step
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.nextStep}
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
                Teaching to watch slowly — on sanctification, union with Christ, the Reformed and
                Wesleyan traditions, and the practical pursuit of holiness. Good companions to the
                Theology and Practices tabs.
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
              Holiness as the goal of the Christian life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              &ldquo;Without holiness no one will see the Lord&rdquo; is not a threat to be feared
              by those who are in Christ — it is a horizon to be pursued, a destination the Spirit
              is already moving you toward. Every act of obedience, every moment of surrender,
              every means of grace faithfully used is a step nearer the God who called you holy
              before you felt holy, and who will present you holy at the last (Col 1:22). The work
              is his; the cooperation is yours. Neither is sufficient without the other.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how holiness expresses itself in the{" "}
              <Link href="/fruit-of-the-spirit" style={{ color: PURPLE, textDecoration: "underline" }}>
                Fruit of the Spirit
              </Link>
              , practice the interior life in{" "}
              <Link href="/contemplative-prayer" style={{ color: PURPLE, textDecoration: "underline" }}>
                Contemplative Prayer
              </Link>
              , resist the disordered heart in{" "}
              <Link href="/christian-diligence" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Diligence
              </Link>
              , or explore what holiness looks like in community in{" "}
              <Link href="/christian-community" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Community
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
