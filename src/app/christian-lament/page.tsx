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

const STORAGE_KEY = "vine_christianlament_entries";

interface LMTEntry {
  id: string;
  date: string;
  theComplaint: string;
  theAddress: string;
  thePetition: string;
  theTrust: string;
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
    badge: "Psalms — One-Third of the Psalter",
    title: "Lament as the Dominant Voice of the Psalms",
    paragraphs: [
      "Approximately one-third of the 150 Psalms are laments &mdash; individual or communal &mdash; making lament the single most common genre in the Psalter. This is a staggering fact that the modern church has largely ignored. The book that Jesus and the apostles knew best, that the early church sang and prayed, that the Reformers recovered as the backbone of corporate worship, is a book soaked in honest grief, complaint, and raw address to God in the middle of suffering. The Psalter does not model a faith that has found resolution; it models a faith that cries out in the middle of unresolved pain.",
      "Walter Brueggemann, the Old Testament scholar whose work on lament has been most influential in contemporary theology, argues that the modern church has effectively eliminated lament from its repertoire &mdash; replacing it with a &ldquo;rhetoric of triumph&rdquo; that does not match the actual experience of Christian life. The result, he argues, is a pastoral disaster: people whose real experience is grief and disorientation are offered a worship vocabulary of celebration and resolution, and so they conclude either that their experience is not normal Christianity or that they must suppress it to belong. Neither conclusion is faithful to the Psalter.",
      "The recovery of lament is not a marginal concern. It is the recovery of the most honest form of biblical faith &mdash; the faith that refuses to pretend, that insists on bringing the actual experience of the actual person into the actual presence of God, and that trusts that God is large enough to receive it without being threatened or offended. Lament is not faithlessness; it is faith in its most vulnerable and honest form.",
    ],
    callout: {
      label: "The proportion",
      text: "One-third of the Psalms are laments. The book Jesus prayed most was a book soaked in grief and honest address to God in suffering. Lament is not a marginal biblical posture; it is central to biblical faith.",
    },
  },
  {
    badge: "Psalm 13 — Structure of Biblical Lament",
    title: "Address, Complaint, Petition, Trust &mdash; The Four Movements of Lament",
    paragraphs: [
      "Psalm 13 is one of the most compact and complete examples of biblical lament. It opens with the &ldquo;how long&rdquo; cry that appears in dozens of Psalms: &ldquo;How long, O Lord? Will you forget me forever? How long will you hide your face from me?&rdquo; In six verses, it moves through the four movements that characterize almost every biblical lament: address (calling out to God by name), complaint (naming the specific pain honestly), petition (asking God for what is needed), and trust (the turn toward confidence in God&rsquo;s character even before circumstances change).",
      "The address is crucial: lament is not complaint into the void. It is complaint directed at God &mdash; which means it is an act of faith. You do not cry out to someone you have given up on. The very act of addressing God in pain is a confession that you believe he can hear, that he is there, that he is the one to whom this experience belongs. The complaint follows: &ldquo;How long will I take counsel in my soul and have sorrow in my heart all the day?&rdquo; The complaint names the specific experience &mdash; the grief, the disorientation, the felt absence of God &mdash; without softening it into polite theological language. Biblical prayer is not polite; it is honest.",
      "The petition asks for something concrete: &ldquo;Consider and answer me, O Lord my God; light up my eyes.&rdquo; And then the turn &mdash; not a resolution of the circumstances but a turn in orientation: &ldquo;But I have trusted in your steadfast love; my heart shall rejoice in your salvation. I will sing to the Lord, because he has dealt bountifully with me.&rdquo; The trust does not emerge from a change in the situation; it emerges from a remembering of who God has been. This is the most distinctive feature of biblical lament: the complaint and the trust coexist without the complaint being resolved.",
    ],
    callout: {
      label: "The four movements",
      text: "Address (calling God by name), Complaint (naming the pain honestly), Petition (asking for what is needed), Trust (the turn toward God&rsquo;s character before circumstances change). Psalm 13 in six verses.",
    },
  },
  {
    badge: "Mark 15:34 / Psalm 22",
    title: "Jesus Lamenting &mdash; My God, My God, Why Have You Forsaken Me?",
    paragraphs: [
      "&ldquo;And at the ninth hour Jesus cried with a loud voice, &lsquo;Eloi, Eloi, lema sabachthani?&rsquo; which means, &lsquo;My God, my God, why have you forsaken me?&rsquo;&rdquo; (Mark 15:34). This is not a lapse of faith or a momentary weakness. It is a cry of lament in the fullest biblical sense &mdash; the opening line of Psalm 22, which is itself a paradigmatic lament Psalm that moves through the same four movements from dereliction to confidence in God&rsquo;s ultimate vindication. Jesus is praying Psalm 22 on the cross.",
      "The significance is massive. God incarnate lamenting &mdash; not suppressing the experience of abandonment into polite theological resignation but crying it out, loudly, from the cross &mdash; is the most powerful possible validation of the lament tradition. If Jesus can lament, lament cannot be faithlessness. If the Son of God experiences the felt absence of the Father and cries it out in the language of the Psalms, then the person who experiences the felt absence of God and prays in the same language is not outside the Christian tradition; they are in its deepest center.",
      "Hebrews 4:15 says Jesus was &ldquo;tempted in every way as we are, yet without sin.&rdquo; The experience of dereliction, of forsakenness, of the darkness of suffering &mdash; Jesus has been there. He prayed it. The throne of grace to which we are invited to approach boldly is occupied by the one who has been in the same darkness and cried out in the same language. Lament is therefore not only permitted by Jesus; it is modeled by him.",
    ],
  },
  {
    badge: "Theology of Lament &mdash; Walter Brueggemann",
    title: "The Death of Lament in the Modern Church &mdash; The Cost of Its Loss",
    paragraphs: [
      "Walter Brueggemann&rsquo;s argument is that the modern church&rsquo;s elimination of lament from its worship has had a profound and damaging pastoral consequence. When the church can only speak the language of celebration and triumph, it becomes unable to accompany people in their actual suffering. The person in genuine grief who comes to church and finds only triumphant praise learns two things: that their experience is not welcome here, and that faith apparently requires pretending everything is fine. Both lessons are false, and both do damage.",
      "Brueggemann argues that lament is not only a pastoral resource but a theological necessity. Without lament, the church loses its ability to speak truthfully about the reality of suffering &mdash; which means it loses its credibility with suffering people. Without lament, worship becomes a performance of the resolved rather than the honest address of the wrestling. Without lament, prayer becomes a polite transaction rather than the raw encounter that the Psalms model. The loss of lament is, in Brueggemann&rsquo;s phrase, a &ldquo;costly loss&rdquo; &mdash; not a minor impoverishment but a fundamental distortion of the faith.",
      "The recovery Brueggemann calls for is liturgical as much as personal: corporate lament that names specific social and communal suffering &mdash; violence, injustice, pandemic, ecological devastation &mdash; in the presence of God. The prophets did this; the Psalms model it; the early church practiced it. The contemporary church, shaped by entertainment culture and a theology of victory, has largely forgotten it. Recovering lament recovers something central to biblical faith: the refusal to pretend, the insistence on honesty, the conviction that God is large enough to receive the whole truth.",
    ],
    callout: {
      label: "Brueggemann&rsquo;s argument",
      text: "The death of lament in the modern church produces a faith that cannot accompany suffering people, cannot speak truthfully about pain, and cannot worship honestly. The recovery of lament is not optional.",
    },
  },
  {
    badge: "Ruth 1:20 &mdash; Naomi&rsquo;s Lament",
    title: "Call Me Mara &mdash; Naomi&rsquo;s Corporate and Embodied Grief",
    paragraphs: [
      "&ldquo;She said to them, &lsquo;Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me. I went away full, and the Lord has brought me back empty. Why call me Naomi, when the Lord has testified against me and the Almighty has brought calamity upon me?&rsquo;&rdquo; (Ruth 1:20-21). Naomi&rsquo;s lament is among the most direct in Scripture: she names the theological dimension of her loss unflinchingly. She does not say &ldquo;God has a plan.&rdquo; She says &ldquo;the Almighty has dealt very bitterly with me.&rdquo;",
      "The Hebrew name Naomi means &ldquo;pleasant&rdquo; or &ldquo;sweet.&rdquo; Mara means &ldquo;bitter.&rdquo; Naomi&rsquo;s request to be renamed is not passive despair; it is a bold act of lament that insists on naming reality with theological honesty. She has lost her husband and both sons in a foreign land. She is returning empty. And she names the agent of that emptiness as the Almighty &mdash; not in blasphemy but in the honest language of a person who believes God governs all things and therefore must be addressed about all things. Her lament is addressed to God even when it is spoken to her neighbors.",
      "What follows in the book of Ruth is a story of redemption &mdash; but the redemption does not come because Naomi suppressed her lament. It comes through it and after it. Naomi&rsquo;s honesty does not prevent God from working; it is the context in which God&rsquo;s steadfast love becomes visible through Ruth and Boaz. The lament and the redemption are not opposites; the lament is the honest soil in which the redemption grows. The book of Ruth is a study in how honest grief and the movement of God&rsquo;s provision coexist without either canceling the other.",
    ],
  },
  {
    badge: "Lamentations &mdash; Corporate Grief",
    title: "The Book of Lamentations &mdash; A Community Mourning Together",
    paragraphs: [
      "The book of Lamentations is five poems of grief written in the aftermath of Jerusalem&rsquo;s destruction by Babylon in 587 BC. The city is gone, the temple is destroyed, the people are in exile. The book does not rush to explanation or resolution. It sits in the grief. It names the horror. It asks the hard questions. And it does so in the most crafted literary form available: the first four chapters are acrostics, each verse beginning with the next letter of the Hebrew alphabet &mdash; as if to say that the full range of grief must be expressed, from aleph to taw, A to Z, nothing omitted.",
      "Lamentations 3:1-20 is among the most sustained expressions of personal lament in Scripture: &ldquo;I am the man who has seen affliction under the rod of his wrath; he has driven me and brought me into darkness without any light.&rdquo; It continues for eighteen verses of unrelieved grief. And then, in the center of the book, comes the most quoted passage: &ldquo;But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo; (Lam 3:21-23). The turn to hope is not a denial of the preceding grief; it is a turn that happens from within the grief, grounded in the memory of who God has been.",
      "Corporate lament is a form of pastoral care that the modern church has largely lost. When a community suffers &mdash; through injustice, violence, pandemic, or loss &mdash; the biblical response is not immediately to explain or comfort but to lament together. Soong-Chan Rah has argued powerfully that the African American church tradition has preserved this corporate lament tradition in ways that the predominantly white evangelical church has not, and that the larger church needs to learn from it. Lamentations models a faith community processing collective grief together with theological honesty.",
    ],
    callout: {
      label: "The structure of Lamentations",
      text: "Five acrostic poems of grief &mdash; structured grief from A to Z. The steadfast love passage (Lam 3:21-23) comes not after the grief is resolved but from within it. The turn to hope is not a denial of grief but a remembering of God&rsquo;s character from inside the darkness.",
    },
  },
  {
    badge: "Romans 8:22-26 &mdash; The Spirit&rsquo;s Lament",
    title: "Groaning with the Spirit &mdash; Lament in the New Testament",
    paragraphs: [
      "&ldquo;We know that the whole creation has been groaning together in the pains of childbirth until now. And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies&rdquo; (Rom 8:22-23). Paul&rsquo;s theology of lament in Romans 8 is eschatological: the groaning is not a sign of faithlessness but of accurate perception. The world is not yet what it will be. Suffering is real. The longing for redemption is appropriate. And the Spirit participates in the groaning: &ldquo;The Spirit himself intercedes for us with groanings too deep for words&rdquo; (8:26).",
      "The phrase &ldquo;too deep for words&rdquo; is significant. There are experiences of loss and grief for which no adequate language exists &mdash; and the Spirit is present in exactly those moments, taking the inarticulate groan and bringing it before the Father in intercession. This means that the person who has no words for their grief is not outside prayer; they are in the deepest form of it, being carried by the Spirit who prays when we cannot. Lament in the New Testament is not only permitted; it is pneumatological &mdash; the Holy Spirit laments with us and for us.",
      "The hope that follows in Romans 8:28-39 is not a denial of the groaning but its context. &ldquo;All things work together for good&rdquo; is not a promise that all things are good but that God is at work in all things, including the groanings, including the unanswered prayers, including the ongoing suffering. The lament and the hope are not opposites in Paul; they are the two dimensions of a fully Christian experience &mdash; honest about the present, confident about the future, groaning in the Spirit while waiting for the redemption that is coming.",
    ],
  },
  {
    badge: "Habakkuk 1-3 &mdash; Holy Anger",
    title: "Holy Anger as Part of Lament &mdash; Habakkuk&rsquo;s Dialogue with God",
    paragraphs: [
      "Habakkuk is the only prophetic book structured as a dialogue between the prophet and God. It opens with Habakkuk&rsquo;s complaint: &ldquo;O Lord, how long shall I cry for help, and you will not hear? Or cry to you &lsquo;Violence!&rsquo; and you will not save? Why do you make me see iniquity, and why do you idly look at wrong?&rdquo; (Hab 1:2-3). Habakkuk is not only grieving; he is angry. He accuses God of inattention, of permitting injustice, of silence in the face of violence. And God does not rebuke him for the anger; God answers him.",
      "The dialogue continues through two rounds of complaint and divine response. God&rsquo;s first answer &mdash; that he is raising up the Babylonians as an instrument of judgment &mdash; provokes Habakkuk&rsquo;s second and more intense complaint: but the Babylonians are worse than Israel! How can a holy God use an instrument more wicked than the people being punished? The complaint is theologically sophisticated and morally urgent. And God&rsquo;s answer is not &ldquo;be quiet and trust me&rdquo; but a sustained response about the vision that will yet be fulfilled, the certainty of judgment on all wickedness, and the justice that will ultimately prevail.",
      "The book ends with one of the most extraordinary passages in Scripture: Habakkuk has not received all the answers he wanted, the situation has not been resolved, and yet he writes: &ldquo;Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the Lord; I will take joy in the God of my salvation&rdquo; (Hab 3:17-18). The joy at the end is not the resolution of the complaint; it is the choice to trust God&rsquo;s character even in the absence of resolution. Habakkuk is the model for holy anger that has been brought honestly to God and has emerged, not with all answers, but with deeper trust.",
    ],
    callout: {
      label: "Habakkuk&rsquo;s movement",
      text: "From angry complaint to theological dialogue to trust without resolution. Habakkuk models holy anger in the presence of God: the anger is not suppressed but brought, and from the dialogue, deeper trust is forged.",
    },
  },
  {
    badge: "Jeremiah &mdash; The Weeping Prophet",
    title: "Jeremiah&rsquo;s Confessions &mdash; When Faithfulness Costs Everything",
    paragraphs: [
      "Jeremiah is sometimes called the weeping prophet, and the description is apt. The passages known as his &ldquo;Confessions&rdquo; (Jer 11:18-12:6; 15:10-21; 17:14-18; 18:18-23; 20:7-18) are the most personally anguished laments in the prophetic literature. In the most extreme of them, he curses the day of his birth: &ldquo;Cursed be the day on which I was born! The day when my mother bore me, let it not be blessed!&rdquo; (Jer 20:14). And he accuses God directly: &ldquo;O Lord, you have deceived me, and I was deceived; you are stronger than I, and you have prevailed&rdquo; (Jer 20:7).",
      "These complaints are not edited out of Scripture. They are preserved. The theological implication is significant: a person can accuse God of deception in a moment of anguish, can curse the day of their birth in exhaustion and despair, and still be counted faithful &mdash; still be Jeremiah, still be the one through whom God speaks to Israel, still be the weeping prophet who never abandons his post. Faithfulness in the Old Testament is not the absence of anguish; it is the willingness to bring the anguish to God rather than turning from God toward something else.",
      "The Confessions of Jeremiah are a pastoral resource for the person in the darkest extremity of suffering: the person who is angry at God, who feels deceived, who has served faithfully and seen only loss. Jeremiah has been there. He brought it all to God &mdash; the anger, the bitterness, the wish to have never been born. And God continued to speak through him. The capacity of God to receive Jeremiah&rsquo;s most extreme laments without abandoning the relationship is among the most consoling facts in Scripture.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Praying Psalm 13 &mdash; The Four-Movement Structure",
    summary:
      "Using Psalm 13 as a structural template for bringing honest grief to God. The four movements &mdash; address, complaint, petition, trust &mdash; provide a framework that allows both honesty and hope without forcing premature resolution.",
    steps: [
      "Read Psalm 13 slowly. Notice the four movements: Address (&ldquo;How long, O Lord?&rdquo;), Complaint (&ldquo;How long will I take counsel in my soul?&rdquo;), Petition (&ldquo;Consider and answer me, O Lord my God&rdquo;), Trust (&ldquo;I have trusted in your steadfast love&rdquo;). Let the structure of the Psalm become the structure of your prayer.",
      "In the Address: call God by name. Whichever name of God feels most true in this moment &mdash; Lord, Father, Shepherd, Rock. The address names who you are speaking to and is itself an act of faith: you do not cry out to someone you have given up on.",
      "In the Complaint: name the specific pain. Not the generalized difficulty but the precise experience: what has been lost, what has not been given, what feels absent, what feels unjust. The biblical complaint is specific and honest. Soften nothing. The Psalms do not soften anything.",
      "In the Petition: ask for what you actually need. Not the polished, theological prayer but the real request: that the darkness lift, that the grief ease, that the situation change, that God make himself present. The petition is the claim on God that lament makes.",
      "In the Trust: do not resolve the complaint prematurely. The turn in Psalm 13 is not &ldquo;I understand now&rdquo; but &ldquo;I have trusted in your steadfast love.&rdquo; The trust is grounded in who God has been, not in what has been resolved. Name one specific thing God has done that forms the ground of the trust. Even if small. Especially if small.",
    ],
    anchor: "Psalm 13:1-2,5-6 &mdash; &ldquo;How long, O Lord?&hellip; But I have trusted in your steadfast love; my heart shall rejoice in your salvation.&rdquo;",
  },
  {
    number: "02",
    title: "The Complaint Letter &mdash; Writing to God Without Editing",
    summary:
      "A writing practice for the person whose grief or anger is too large for structured prayer. The complaint letter allows the unedited experience to come before God before the theological framing is attempted.",
    steps: [
      "Set aside twenty to thirty minutes in a private space. Get paper and a pen &mdash; not a device. The tactile engagement of handwriting slows the process and allows the full experience to surface.",
      "Write directly to God. Begin &ldquo;Lord&rdquo; or &ldquo;God&rdquo; and do not stop. Do not edit, do not theologize, do not worry about what the prayer should sound like. Write what is actually true: what you are feeling, what you are angry about, what you are grieving, what feels absent, what seems unjust. Write until the complaint is fully externalized.",
      "When the complaint is complete, pause. Read it back to yourself as a prayer. This is what you are bringing to God. It is not irreverent; it is exactly what Jeremiah and the Psalms model. God is large enough to receive it.",
      "Add one line of petition: what you are actually asking for. And one line of address: who you believe is receiving this prayer. End with whatever trust, however small, you can truthfully name &mdash; even if it is only &ldquo;I trust that you can receive this.&rdquo;",
      "Keep the letter. Some people burn it afterward as an act of release. Some keep it and re-read it later to trace the arc of God&rsquo;s provision through the complaint.",
    ],
    anchor: "Jeremiah 20:7-8 &mdash; &ldquo;O Lord, you have deceived me, and I was deceived&hellip; For the word of the Lord has become for me a reproach and derision all day long.&rdquo;",
  },
  {
    number: "03",
    title: "Corporate Lament &mdash; Lamenting in Community",
    summary:
      "Practicing corporate lament with a small group, prayer partner, or in a liturgical setting. The Psalms were composed for communal use; lament that has been held in community is lament that does not have to be carried alone.",
    steps: [
      "Identify a community grief &mdash; something that a group of people share: a loss, an injustice, an unanswered communal prayer, a season of suffering. The corporate lament names a shared experience, not a private one. Lamentations is the model: the whole community processing the same devastation together.",
      "Read Lamentations 3:1-26 together &mdash; beginning with the extended complaint (vv. 1-20) and arriving at the steadfast love passage (vv. 21-26) together, having passed through the grief together. Do not skip to the resolution. Allow the complaint to be heard.",
      "Allow space for members of the community to name specific dimensions of the communal grief aloud. Not to resolve them, not to offer comfort, but to name them into God&rsquo;s presence. The witness of others&rsquo; naming is itself a form of pastoral care.",
      "Pray together using Psalm 22 or Psalm 13 as the community&rsquo;s structure. Each person adding their voice to the complaint and then joining in the turn toward trust. The communal trust is thicker than any individual&rsquo;s trust; the community can hold what individuals cannot.",
    ],
    anchor: "Lamentations 3:22-23 &mdash; &ldquo;The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.&rdquo;",
  },
  {
    number: "04",
    title: "Lectio Divina with the Lament Psalms &mdash; Letting Scripture Give Voice to Grief",
    summary:
      "A contemplative reading practice using the lament Psalms to give scriptural voice to experiences that may have no adequate personal language. The Psalms were designed to do this work.",
    steps: [
      "Choose one of the lament Psalms: Psalms 13, 22, 42, 43, 88, or 102. Read it three times slowly. First reading: listen to the overall movement. Second reading: notice which verse or phrase names your actual experience most precisely. Third reading: stay with that verse and let it become your prayer.",
      "The verse you have chosen is your lament &mdash; the scriptural language that the Spirit has used to name your experience. Pray it back to God directly. You do not need to add to it or improve it. The Psalmist has been there before you and left a path through the darkness.",
      "If no verse in the Psalm matches your experience, sit with that. The experience of finding no adequate language is itself a form of lament. Romans 8:26 says the Spirit &ldquo;intercedes for us with groanings too deep for words.&rdquo; Bring the wordlessness to God as its own prayer.",
      "Close by reading the verse or phrase from the Psalm that represents trust or hope &mdash; even if it does not feel true yet. Hold the complaint and the trust in tension. This is exactly what the Psalms do. The goal is not resolution but honest, faithful holding of both.",
    ],
    anchor: "Psalm 88:1-2 &mdash; &ldquo;O Lord, God of my salvation; I cry out day and night before you. Let my prayer come before you; incline your ear to my cry!&rdquo;",
  },
  {
    number: "05",
    title: "The Lament Examen &mdash; A Nightly Practice of Honest Prayer",
    summary:
      "Adapting the Ignatian Examen for lament: a nightly review practice that brings the day&rsquo;s grief, anger, and confusion honestly before God before sleep, in the tradition of the evening Psalms.",
    steps: [
      "At the end of the day, before sleep, take ten minutes in quiet. Ask the Spirit to show you honestly: where was grief today? Where was confusion about what God is doing? Where was anger at circumstances or at God? Do not suppress or edit; let the day&rsquo;s lament surface.",
      "Name each experience of grief or anger specifically. Not &ldquo;it was a hard day&rdquo; but &ldquo;I grieved the loss of [name it]. I was angry about [name it]. I was confused by [name it].&rdquo; The biblical tradition of lament is specific; vague grief remains unaddressed.",
      "Bring each named experience to God as an address: &ldquo;Lord, I bring you [name it]. I do not understand it. I am [angry/grieving/confused]. I trust that you receive this.&rdquo; The act of address is the act of faith that lament requires.",
      "Identify one moment in the day where God&rsquo;s presence was felt or where something moved toward good. Name it as grace. Not to cancel the lament but to hold both: the grief that is real and the grace that is also real. The Psalms do this simultaneously.",
      "Close with Psalm 4:8: &ldquo;In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.&rdquo; Sleep is an act of trust: the surrender of the day&rsquo;s unresolved grief into the hands of the One who watches through the night.",
    ],
    anchor: "Psalm 4:8 &mdash; &ldquo;In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.&rdquo;",
  },
  {
    number: "06",
    title: "From Naomi to Ruth &mdash; Allowing Others to Witness the Grief",
    summary:
      "A relational practice grounded in the book of Ruth: allowing another person to witness and sit with the lament without trying to fix it, in the tradition of Ruth&rsquo;s accompaniment of Naomi.",
    steps: [
      "Identify one person who is safe enough to receive honest grief &mdash; not someone who will rush to comfort or explain but someone who can sit with you in the darkness without needing to resolve it. Ruth is the model: she follows Naomi into the grief without demanding that Naomi perform hope she does not feel.",
      "Ask them to witness your lament. Not to advise, not to offer scriptures, not to pray over you (yet) &mdash; but simply to hear. &ldquo;Can I tell you what I am actually experiencing?&rdquo; The act of being heard in grief is itself a form of grace, and it is what Naomi received from Ruth before any of the redemption of the book arrived.",
      "After you have been heard, invite them to sit with you in one of the lament Psalms. Read it together. Let the Psalm be the frame. The community created by shared lament is one of the most durable forms of Christian fellowship &mdash; deeper than shared celebration, because it requires a deeper honesty.",
      "Together, identify one thing you are trusting God for in the middle of the grief &mdash; however small. Not the resolution of the situation but the character of the God who is present in it. Name it together. Pray it together. This is what the corporate turn in the Psalms looks like in practice.",
    ],
    anchor: "Ruth 1:16 &mdash; &ldquo;Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Walter Brueggemann",
    role: "The Psalms and the Life of Faith; Spirituality of the Psalms &mdash; The Prophetic Recovery of Lament",
    quote:
      "The loss of lament is costly, for it means that the agenda of prayer must be the agenda of the managing God who must be addressed as if life were not disordered and God were not implicated in the disorder. The Psalms know better. They know that Israel must speak its true life to God, and they refuse to censor that truth even when it is uncomfortable.",
    bio: "Walter Brueggemann (b. 1933) is one of the most influential Old Testament scholars of the twentieth and twenty-first centuries, a Reformed Church minister who spent most of his career at Columbia Theological Seminary and has published more than one hundred books on the Hebrew Bible, preaching, and the life of faith. His work on the Psalms &mdash; particularly The Psalms and the Life of Faith and Spirituality of the Psalms &mdash; recovered the theological importance of lament for pastoral practice in ways that have shaped a generation of preachers and theologians. Brueggemann argues that the Psalms are the church&rsquo;s primary language school for authentic faith, and that the church&rsquo;s neglect of the lament Psalms in favor of praise Psalms represents a fundamental distortion of what biblical faith looks like. His concept of orientation, disorientation, and reorientation as the three movements of the Psalter has been enormously influential: lament belongs to the middle movement of disorientation, which cannot be bypassed on the way to genuine reorientation. The person who insists on singing reorientation songs while in the season of disorientation is not farther ahead; they are avoiding the movement that produces genuine faith.",
  },
  {
    name: "Soong-Chan Rah",
    role: "Prophetic Lament; The Next Evangelicalism &mdash; The Prophetic Tradition of Corporate Grief",
    quote:
      "The American church&rsquo;s triumphalism &mdash; the assumption that the Christian story is always one of victory and blessing &mdash; has made it incapable of lamenting. But the biblical story is not primarily triumphalist. It is a story that takes suffering seriously enough to write five books of Lamentations and one-third of the Psalms from within it. The recovery of lament is the recovery of a more fully biblical church.",
    bio: "Soong-Chan Rah is a professor of church growth and evangelism at Fuller Theological Seminary and one of the most important voices on race, justice, and the theology of suffering in contemporary American evangelicalism. His book Prophetic Lament: A Call for Justice in Troubled Times is a sustained engagement with the book of Lamentations in the context of American racial history and the church&rsquo;s failure to accompany communities of color in their grief. Rah argues that the predominantly white evangelical church has embraced a triumphalist narrative that makes it structurally incapable of lamenting &mdash; incapable of sitting with suffering, naming injustice, or grieving corporate sin. The African American church tradition, he argues, has preserved the lament tradition precisely because it has had to: communities that live with ongoing loss and injustice cannot afford the triumphalism of prosperity theology or the avoidance of praise-only worship. Rah&rsquo;s work connects biblical theology to contemporary racial justice in ways that make the recovery of lament both theologically necessary and prophetically urgent.",
  },
  {
    name: "N.T. Wright",
    role: "The Case for the Psalms; Simply Christian &mdash; Lament and the Grammar of Christian Hope",
    quote:
      "The Psalms give the people of God permission to tell the truth &mdash; not just the nice truth, not just the theological truth, but the raw truth of actual experience. That is what prayer is: the raw truth of actual experience brought into the presence of the living God. The lament psalms are the church&rsquo;s most honest grammar, and we impoverish ourselves when we refuse to use it.",
    bio: "N.T. Wright is a New Testament scholar, former Bishop of Durham, and one of the most prolific and widely read theologians of the late twentieth and early twenty-first centuries. His engagement with lament comes primarily through his work on the Psalms and on Christian hope. In The Case for the Psalms, he argues that the Psalms are not merely ancient religious poetry but the grammar of Christian prayer, providing the language and the structure through which the people of God can address God honestly in every dimension of human experience. Wright is particularly attentive to the way the lament Psalms function eschatologically: the honest cry of &ldquo;how long?&rdquo; is not despair but the appropriate prayer of a people who know that the world is not yet as it will be and who refuse to pretend otherwise. His work on new creation and resurrection provides the theological frame within which lament makes sense: if the present suffering is not the last word, then it is worth lamenting honestly, because the story is not over.",
  },
  {
    name: "Jeremiah",
    role: "Jeremiah 20; Lamentations &mdash; The Weeping Prophet",
    quote:
      "&ldquo;O Lord, you have deceived me, and I was deceived; you are stronger than I, and you have prevailed. I have become a laughingstock all the day; everyone mocks me.&rdquo; (Jer 20:7)",
    bio: "Jeremiah ben Hilkiah was a prophet in Jerusalem from the reign of Josiah through the fall of the city to Babylon (approximately 627-587 BC). He is called the weeping prophet not because he was temperamentally sad but because the nature of his calling required him to preach judgment to a nation that refused to hear, and to live through the catastrophe of Jerusalem&rsquo;s fall. His &ldquo;Confessions&rdquo; &mdash; the passages of intense personal lament scattered through the book bearing his name &mdash; are the most extreme expressions of prophetic anguish in Scripture. He curses the day of his birth (Jer 20:14-18), accuses God of deception (Jer 20:7), and at one point declares he will not speak for God anymore &mdash; only to find the word burning within him (Jer 20:9). Jeremiah is the model of a person whose faithfulness has cost him everything and whose honest anguish about that cost was brought directly and repeatedly to God. The fact that these confessions are preserved in Scripture, and that Jeremiah continued to be the channel of God&rsquo;s word despite them, is among the most consoling facts for people in the extremity of suffering: God does not require the performance of calm or resolution in order to continue working through and with us.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Psalms: The Prayer Book of the Bible; Life Together &mdash; Lament and Solidarity in Suffering",
    quote:
      "It is a dangerous thing to suppress lament. The person who cannot cry out to God in suffering will eventually cease to speak to God at all. The Psalms know this, which is why they give such ample room for the honest voice of grief. The suppression of lament is not faith; it is the death of faith disguised as composure.",
    bio: "Dietrich Bonhoeffer (1906-1945) was a German Lutheran theologian, pastor, and resistance fighter who was executed by the Nazis in April 1945, just weeks before the end of the war. His engagement with the Psalms &mdash; particularly his short book Psalms: The Prayer Book of the Bible &mdash; was deeply formed by his experience of the concrete cost of faithful Christian witness under totalitarianism. Bonhoeffer understood lament not as a spiritual luxury but as a theological necessity: the person who cannot bring their real experience to God has no real relationship with God, only a performance. His prison letters, written during the last years of his life, are themselves a form of extended lament &mdash; honest, searching, full of theological questioning and the raw experience of incarceration and approaching death. Bonhoeffer&rsquo;s work is particularly relevant for communities facing persecution or systemic injustice: he lived the cost of faithful witness and brought it to God with the full honesty the Psalms model.",
  },
  {
    name: "Eugene Peterson",
    role: "Answering God; Praying with the Psalms &mdash; Lament as the Language of Honest Prayer",
    quote:
      "Prayer is not a spiritual exercise performed in protected isolation from the actual facts of our lives. It is the actual facts of our lives addressed to God. The lament psalms insist on this. They refuse to perform a prayer cleaner and more composed than the experience it is drawn from. They are the most honest prayers in the world &mdash; which is why they are the prayers that form an honest faith.",
    bio: "Eugene Peterson (1932-2018) was a pastor, scholar, and writer who spent thirty years as a parish minister in Maryland before translating The Message and writing more than thirty books on the spiritual life. His work on the Psalms &mdash; particularly Answering God: The Psalms as Tools for Prayer &mdash; is among the most practically useful introductions to the Psalter as a prayer resource. Peterson argues that the lament Psalms are the form of prayer most needed by the contemporary church precisely because contemporary culture is most allergic to them: the therapeutic culture wants resolution, positive reframing, and forward momentum, while the lament Psalms insist on naming the actual experience first, bringing it to God as it is, and trusting that honest address is more spiritually productive than premature resolution. Peterson&rsquo;s pastoral experience informs his reading: he saw, repeatedly, what happened when Christians suppressed their grief in the name of faith, and he saw how the Psalms, rightly prayed, created the space for a more durable faith to emerge from the honest naming of the darkness.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Psalm 13:1-2, 5-6",
    text: "How long, O Lord? Will you forget me forever? How long will you hide your face from me? How long must I take counsel in my soul and have sorrow in my heart all the day?&hellip; But I have trusted in your steadfast love; my heart shall rejoice in your salvation. I will sing to the Lord, because he has dealt bountifully with me.",
    reflection:
      "The paradigmatic lament: complaint and trust held together without resolution. The &ldquo;how long&rdquo; is not faithlessness &mdash; it is addressed to God, which makes it faith. The turn to trust in verse 5 is not a resolution of the situation but a remembering of who God has been. The Psalm ends in song while nothing has changed except the orientation of the heart.",
  },
  {
    reference: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.",
    reflection:
      "The Psalm Jesus prayed from the cross. The experience of divine absence named without softening. &ldquo;My God&rdquo; repeated twice &mdash; the address is an act of tenacious faith even in the experience of abandonment. The person who cries &ldquo;my God&rdquo; in the darkness has not abandoned faith; they are in its most demanding form. The Psalm moves ultimately to praise, but the complaint is real before the praise arrives.",
  },
  {
    reference: "Lamentations 3:21-23",
    text: "But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    reflection:
      "These lines come at the center of a book soaked in grief and accusation. The turn is deliberate: &ldquo;But this I call to mind&rdquo; &mdash; not a feeling but a choice to remember. The steadfast love passage is not the end of Lamentations; the book continues in grief after it. The turn is not a resolution but a moment of remembering God&rsquo;s character from inside the darkness. The lament and the trust are both present; neither cancels the other.",
  },
  {
    reference: "Romans 8:22-23, 26",
    text: "We know that the whole creation has been groaning together in the pains of childbirth until now. And not only the creation, but we ourselves&hellip; groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies&hellip; the Spirit himself intercedes for us with groanings too deep for words.",
    reflection:
      "Paul validates the groan. The Christian who suffers and longs for redemption is not behind in faith; they are accurately perceiving the present state of creation. And the Spirit participates in the groaning &mdash; which means the person with no words for their grief is not outside prayer but in its deepest form, carried by the Spirit who prays when we cannot.",
  },
  {
    reference: "Habakkuk 1:2-3",
    text: "O Lord, how long shall I cry for help, and you will not hear? Or cry to you &lsquo;Violence!&rsquo; and you will not save? Why do you make me see iniquity, and why do you idly look at wrong? Destruction and violence are before me; strife and contention arise.",
    reflection:
      "The bold address of holy anger. Habakkuk accuses God of inattention in the presence of injustice. God does not rebuke the accusation; God answers it. The dialogue that follows is the most sustained example in Scripture of God engaging rather than silencing a complaint about injustice. Lament that includes anger is not automatically faithless; it may be the most morally alert form of prayer.",
  },
  {
    reference: "Jeremiah 20:7, 9",
    text: "O Lord, you have deceived me, and I was deceived; you are stronger than I, and you have prevailed. I have become a laughingstock all the day; everyone mocks me&hellip; If I say, &lsquo;I will not mention him, or speak any more in his name,&rsquo; there is in my heart as it were a burning fire shut up in my bones, and I am weary with holding it in.",
    reflection:
      "The most extreme lament in the prophetic literature. Jeremiah accuses God of deception &mdash; and then admits he cannot stop speaking for God anyway. The burning fire is both the burden and the blessing. This passage has consoled countless people in the extremity of suffering: the person who is angry at God, who feels deceived, who has paid the full cost of faithfulness and received pain in return. God receives this prayer. Jeremiah continues to be the channel of God&rsquo;s word.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "z16GDSebDMc", title: "What Is Biblical Lament? &mdash; The Case for Honest Grief" },
  { videoId: "1hQ1CDohVS4", title: "The Lament Psalms &mdash; Reading Psalms 13, 22, and 88" },
  { videoId: "RqpBdwlY5k4", title: "Walter Brueggemann on Lament and the Loss of Honest Prayer" },
  { videoId: "GrLVwB_HNXU", title: "Jesus and Lament &mdash; My God, My God, Why Have You Forsaken Me?" },
  { videoId: "0ZB_SexM_Dk", title: "Corporate Lament &mdash; The Church Grieving Together" },
  { videoId: "nR8dXNP4bOw", title: "Habakkuk &mdash; Holy Anger and the Dialogue with God" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianLamentPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<LMTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theComplaint, setTheComplaint] = useState("");
  const [theAddress, setTheAddress] = useState("");
  const [thePetition, setThePetition] = useState("");
  const [theTrust, setTheTrust] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as LMTEntry[]);
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
    if (!theComplaint.trim() || !theAddress.trim()) return;
    const entry: LMTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theComplaint: theComplaint.trim(),
      theAddress: theAddress.trim(),
      thePetition: thePetition.trim(),
      theTrust: theTrust.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheComplaint("");
    setTheAddress("");
    setThePetition("");
    setTheTrust("");
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
              Grief &amp; Honest Prayer
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Lament: The Theology and Practice of Holy Grief
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              One-third of the Psalms are laments. Lament is not the absence of faith but one of its
              most honest forms &mdash; the refusal to pretend, the insistence on bringing the actual
              experience of suffering into the actual presence of God. This guide traces the theology of
              lament from the Psalms through Lamentations, Jeremiah, and the New Testament, and builds
              the practices that allow honest grief to coexist with faithful trust.
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
                &ldquo;How long, O Lord? Will you forget me forever? How long will you hide your face
                from me?&hellip; But I have trusted in your steadfast love; my heart shall rejoice in
                your salvation.&rdquo;
              </p>
              <p style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 13:1, 5</p>
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
                Nine studies in the theology of lament &mdash; from the dominant voice of the Psalter to
                the four-movement structure of Psalm 13, from Jesus&rsquo;s cry of dereliction to
                Brueggemann&rsquo;s diagnosis of the church&rsquo;s loss, from Naomi and Lamentations to
                Romans 8, Habakkuk, and Jeremiah. Lament is not a spiritual problem; it is a spiritual
                discipline.
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
                        border: "1px solid rgba(107, 79, 187, 0.25)",
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
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Lament is not the opposite of faith but one of its most honest expressions &mdash; the
                  refusal to pretend, the insistence on honest address, the conviction that God is large
                  enough to receive the whole truth. The recovery of lament is the recovery of a more
                  fully biblical faith. See how lament connects to suffering in{" "}
                  <Link href="/christian-suffering" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Christian Suffering
                  </Link>{" "}
                  or to honest prayer in{" "}
                  <Link href="/christian-prayer" style={{ color: PURPLE, textDecoration: "underline" }}>
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
                Six practices for bringing honest grief into God&rsquo;s presence &mdash; from praying
                Psalm 13 to the complaint letter, from corporate lament to lectio divina with the lament
                Psalms, the lament Examen, and the practice of allowing others to witness grief. Start
                with one and let the others build.
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
                      color: PURPLE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about beginning to lament
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  For many Christians, the hardest part of lament is beginning &mdash; the feeling that
                  honest grief is inappropriate in prayer, or that bringing complaint to God is a lack of
                  trust. The Psalms and the prophets correct this. The person who cries &ldquo;how
                  long?&rdquo; is not less faithful than the person who only sings praise; in many
                  seasons of life, they are more honest about the actual state of things. The Journal tab
                  is designed to support the slow, specific work of bringing your actual experience to
                  God &mdash; using the four movements of biblical lament as the structure.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers and voices who have most deeply shaped the theology and practice of
                Christian lament &mdash; Brueggemann&rsquo;s prophetic scholarship, Rah&rsquo;s
                prophetic justice, Wright&rsquo;s biblical grammar, Jeremiah&rsquo;s costly faithfulness,
                Bonhoeffer&rsquo;s solidarity in suffering, and Peterson&rsquo;s pastoral honesty. Each
                one brought their real experience to God without editing it into composure.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
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
                Six passages that form the biblical theology of lament &mdash; Psalms 13 and 22,
                Lamentations 3, Romans 8, Habakkuk 1, and Jeremiah 20. Read one per week alongside the
                Journal practice. Let each text both validate honest grief and demonstrate what faithful
                lament looks like in Scripture.
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
                  Take each passage and bring it into contact with the specific grief or confusion you
                  are carrying. Name the experience, then read the text as God&rsquo;s word to you in
                  that experience &mdash; not as a formula but as a living word that has been where you
                  are. Allow the Psalm or the passage to give voice to what may have been too large or
                  too raw to put into your own words. Close with the act of honest address: &ldquo;Lord,
                  this is where I am. I do not have resolution. I trust that you receive this.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Four fields following the structure of biblical lament &mdash; the complaint (what&rsquo;s
                wrong, honestly), the address (who you&rsquo;re talking to), the petition (what you&rsquo;re
                asking), and the turn toward trust (even small). Entries are stored privately in your
                browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New lament entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lmt-complaint" style={labelStyle}>
                    The complaint &mdash; what&rsquo;s wrong, honestly
                  </label>
                  <textarea
                    id="lmt-complaint"
                    value={theComplaint}
                    onChange={(e) => setTheComplaint(e.target.value)}
                    placeholder="Name the specific pain, loss, confusion, or anger. Soften nothing. The Psalms do not soften anything."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lmt-address" style={labelStyle}>
                    The address &mdash; who you&rsquo;re talking to
                  </label>
                  <input
                    id="lmt-address"
                    type="text"
                    value={theAddress}
                    onChange={(e) => setTheAddress(e.target.value)}
                    placeholder="Lord. Father. Shepherd. Rock. The name that feels true in this moment..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lmt-petition" style={labelStyle}>
                    The petition &mdash; what you&rsquo;re asking
                  </label>
                  <textarea
                    id="lmt-petition"
                    value={thePetition}
                    onChange={(e) => setThePetition(e.target.value)}
                    placeholder="The real request. Not the polished theological prayer but what you actually need..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="lmt-trust" style={labelStyle}>
                    The turn toward trust &mdash; even small
                  </label>
                  <textarea
                    id="lmt-trust"
                    value={theTrust}
                    onChange={(e) => setTheTrust(e.target.value)}
                    placeholder="One thing about who God has been, however small. The trust does not require resolution of the complaint."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theComplaint.trim() || !theAddress.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theComplaint.trim() || !theAddress.trim() ? BORDER : PURPLE,
                    color: !theComplaint.trim() || !theAddress.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theComplaint.trim() || !theAddress.trim() ? "not-allowed" : "pointer",
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
                      Use the four movements of biblical lament &mdash; complaint, address, petition,
                      trust &mdash; to bring your honest experience to God. Over time, these entries
                      become a record of honest prayer and the faithfulness of God in the specific
                      texture of your grief.
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
                              {entry.theAddress}
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
                            The complaint
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theComplaint}
                          </p>
                        </div>

                        {entry.thePetition && (
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
                              The petition
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                              {entry.thePetition}
                            </p>
                          </div>
                        )}

                        {entry.theTrust && (
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
                              The turn toward trust
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theTrust}
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
                Teaching on biblical lament, the lament Psalms, Brueggemann&rsquo;s theology, Jesus and
                lament, corporate grief, and Habakkuk&rsquo;s dialogue with God. Good companions to the
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
              Lament as the shape of honest faith
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The person who has learned to bring honest grief to God has more durable faith than the
              person who has only learned to praise. The lament tradition &mdash; the Psalms,
              Lamentations, Jeremiah, Habakkuk, the groaning of the Spirit in Romans 8 &mdash; is the
              church&rsquo;s inheritance for exactly the seasons when praise alone cannot carry the weight
              of what is being lived. To recover lament is not to become less faithful; it is to become
              more honest, which is the foundation of the more durable faith that demanding seasons
              require.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how lament connects to suffering in{" "}
              <Link href="/christian-suffering" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Suffering
              </Link>
              , explore how patience sustains the long grief in{" "}
              <Link href="/christian-patience" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Patience
              </Link>
              , or discover how joy and lament coexist in{" "}
              <Link href="/christian-joy-guide" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Joy
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
