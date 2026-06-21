"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

const STORAGE_KEY = "vine_christiantestimony_entries";

interface TSTEntry {
  id: string;
  date: string;
  beforeChrist: string;
  theEncounter: string;
  sinceChrist: string;
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
    badge: "Martyria",
    title: "Martyria — The Greek Word for Witness and Testimony",
    paragraphs: [
      "The English word &ldquo;testimony&rdquo; translates the Greek martyria (μαρτυρία), and its cognate martys gives us the word &ldquo;martyr.&rdquo; The connection is not accidental. In the ancient world, a witness was someone who had direct personal knowledge of something and who was willing to stake their credibility — and, in extreme cases, their life — on the truth of what they had seen. A witness was not a theorist or a spokesperson; they were someone whose testimony had the authority of direct experience. When the New Testament calls Christians to witness (Acts 1:8 — &ldquo;you will be my witnesses&rdquo;), it is calling them to speak from what they know, not from what they have argued themselves into.",
      "John&rsquo;s Gospel uses martyria with particular precision. In John 1, John the Baptist is described repeatedly as one who &ldquo;came as a witness, to bear witness about the light&rdquo; (v. 7). The Baptist does not argue for Jesus; he points to him. His testimony is personal (&ldquo;I have seen and I bear witness that this is the Son of God&rdquo; — 1:34), specific (it names what he saw), and self-effacing (his purpose is not to draw attention to himself but to direct it toward another). This is the grammar of genuine testimony: first-person, specific, and self-forgetting in its orientation toward the one it bears witness to.",
      "The martyria tradition reaches its most searching expression in Revelation, where the faithful witnesses are those who &ldquo;have conquered [the accuser] by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death&rdquo; (12:11). The word of testimony, here, is not just the content of what is said but the weight of a life behind the words — and the willingness to bear that witness even when it costs everything. The testimony that is truly powerful is the testimony of a person whose life has backed it up.",
    ],
    callout: {
      label: "The word",
      text: "Martyria (μαρτυρία): witness, testimony, the account of a person who has direct personal knowledge of what they are reporting. The word&rsquo;s link to martyrdom is not incidental — the most powerful testimony is backed by a life, and in extreme cases a death, that authenticates it.",
    },
  },
  {
    badge: "Acts 26",
    title: "Paul&rsquo;s Testimony — &ldquo;I Was Not Disobedient to the Heavenly Vision&rdquo;",
    paragraphs: [
      "Acts 26 contains Paul&rsquo;s most complete personal testimony, delivered before King Agrippa. It follows the three-part structure that would later become the standard Christian testimony form: his life before his encounter with Christ (vv. 4-11 — a zealous Pharisee, persecutor of the church, &ldquo;I myself was convinced that I ought to do many things in opposing the name of Jesus of Nazareth&rdquo;), the encounter itself on the road to Damascus (vv. 12-18 — the light, the voice, the commission), and the life that followed (vv. 19-23 — &ldquo;I was not disobedient to the heavenly vision&rdquo;).",
      "What is striking about Paul&rsquo;s testimony is its specificity and its honesty. He does not minimize what he was before; he names it plainly: a persecutor, a man who cast votes against believers being put to death, who &ldquo;punished them often in all the synagogues and tried to make them blaspheme&rdquo; (v. 11). The contrast with what he became — the apostle to the Gentiles, the man in chains before a king — is the whole point. The testimony only works because the before is real. A testimony that softens the before in order to seem more respectable has undercut its own power.",
      "Paul&rsquo;s phrase &ldquo;I was not disobedient to the heavenly vision&rdquo; (v. 19) points to something important: testimony is not just a record of the past but an account of what you did with what you received. The heavenly vision was given; the response to it — the obedience, the life that followed — is the ongoing testimony. Paul&rsquo;s &ldquo;after&rdquo; is not a static state but a continuing narrative of responding to what Christ called him to, even through imprisonment, beatings, and now a trial before royalty. The testimony that keeps being written by a life lived is more powerful than the one told only once.",
    ],
  },
  {
    badge: "John 9:25",
    title: "The Blind Man&rsquo;s Testimony — &ldquo;I Was Blind, Now I See&rdquo;",
    paragraphs: [
      "The man born blind in John 9 is one of the most effective witnesses in Scripture, and notably he is not a theologian. When the Pharisees interrogate him — demanding that he recant his claim about Jesus, insisting that Jesus is a sinner — his response is disarmingly simple: &ldquo;Whether he is a sinner I do not know. One thing I do know: I was blind, now I see&rdquo; (v. 25). He cannot answer the theological questions; he does not pretend to. But the one thing he can speak to with complete authority — the transformation in his own experience — he speaks to with an unmovable simplicity that no amount of religious pressure can dislodge.",
      "The Pharisees press him: how did he open your eyes? The man&rsquo;s response — &ldquo;I have told you already, and you would not listen. Why do you want to hear it again?&rdquo; (v. 27) — has a quality of amused exasperation that John seems to appreciate. The man has nothing but his experience, and his experience is sufficient. They can call Jesus a sinner; they cannot change the fact that this man sees. The internal reality of the transformation is its own evidence.",
      "John Newton, the former slave-trader turned hymn-writer, captured this quality of the blind man&rsquo;s testimony in the most famous hymn in the English language: &ldquo;Amazing grace, how sweet the sound, that saved a wretch like me. I once was lost, but now am found; was blind, but now I see.&rdquo; Newton was quoting John 9 from his own life. He could not explain the theology of grace to every questioner&rsquo;s satisfaction; he could say that he had been a wretch, and that he was no longer lost in the way he had been, and that something had happened that he could only call amazing grace. The simplicity of that testimony has outlasted every sophisticated objection to it.",
    ],
    callout: {
      label: "The principle",
      text: "Personal testimony is powerful where argument fails because it does not depend on the hearer&rsquo;s agreement with theological premises — it depends only on the hearer&rsquo;s ability to observe that someone has changed. &ldquo;I was blind, now I see&rdquo; is a claim that argument cannot easily dislodge.",
    },
  },
  {
    badge: "Why Testimony Works",
    title: "Why Personal Testimony Is Powerful Where Argument Fails",
    paragraphs: [
      "The apologetic tradition of Christianity has produced extraordinary arguments for the faith — from Justin Martyr to Aquinas to C.S. Lewis to N.T. Wright — and those arguments have their proper place. But many people who would never be persuaded by an argument have been moved by a testimony. The difference is the nature of the evidence. An argument asks you to follow a chain of reasoning; a testimony asks you to consider what happened to a specific person in a specific life. The argument can be countered with another argument; the testimony is harder to counter because it is not primarily a claim about abstract reality but about concrete personal history.",
      "Rebecca Manley Pippert, in Out of the Saltshaker, observes that personal evangelism fails most often not because Christians lack good arguments but because they are afraid to be personal — afraid to say &ldquo;this is what happened to me&rdquo; in case it is dismissed or ridiculed. Intellectual discussion can be impersonal and therefore safer; testimony requires vulnerability, the exposure of the self and its history to another person. It is the vulnerability, Pippert argues, that is part of its power: the person who hears a genuine testimony sees that the speaker has skin in the game, that they are not arguing from a theoretical position but from a life.",
      "The sociological research on conversion consistently shows that most people who come to faith do so through relationships with people who have faith, not through arguments presented in impersonal settings. This is not a critique of argument — it is an observation about how human beings actually come to believe things. Beliefs change in the context of trust, and testimony is how trust carries conviction. The person who has seen what God has done in their neighbor&rsquo;s life has been given a kind of evidence that the abstract argument cannot provide.",
    ],
  },
  {
    badge: "Revelation 12:11",
    title: "Testimony and the Blood of the Lamb",
    paragraphs: [
      "Revelation 12:11 places testimony in an eschatological and spiritual warfare context that the New Testament takes with complete seriousness: &ldquo;And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.&rdquo; The &ldquo;him&rdquo; is the accuser of the brethren — Satan — and the weapons of conquest are two: the blood of the Lamb and the word of testimony. These are not parallel weapons; they are the same weapon from two angles. The blood of the Lamb is the objective ground; the word of testimony is the subjective application of that ground to a specific life.",
      "The Reformers identified one of the devil&rsquo;s primary strategies as accusation — the assault on the conscience of the believer with charges of unworthiness, past failure, spiritual inadequacy. The testimony that silences that accusation is the one that says: yes, those charges are true; and the blood of the Lamb is sufficient for them all. I was exactly what you say I was, and what has happened to me is not explainable by my merit but by his mercy. The testimony, in this reading, is not triumphalism but confession combined with proclamation — the humble announcement that what you were is not what defines you.",
      "The phrase &ldquo;they loved not their lives even unto death&rdquo; names the cost at which testimony is most powerful. The martyr-witnesses of Revelation are not simply people who said true things; they are people whose willingness to die for their testimony authenticated it in a way that comfortable testimony cannot. Most Christians will not face death for their testimony; but the principle holds at every level — the testimony that has cost the speaker something is more powerful than the testimony that has cost nothing. The willingness to be vulnerable, to speak plainly about failure and grace, is the everyday form of the martyr&rsquo;s willingness to die.",
    ],
  },
  {
    badge: "Before / Encounter / After",
    title: "The Three-Part Testimony Structure",
    paragraphs: [
      "The three-part structure of Christian testimony — life before the transformation, the encounter that brought it, life since — is not a modern invention. It is the structure of Paul&rsquo;s testimony in Acts 26, of Augustine&rsquo;s Confessions, of John Newton&rsquo;s &ldquo;Amazing Grace,&rdquo; and of the blind man&rsquo;s reply to the Pharisees. It is the structure that testimony naturally takes because it mirrors the structure of the transformation itself: there was a before, something happened, and there is a now that is different from the before. The structure is not a formula; it is the shape of the event.",
      "The before section is often the most uncomfortable to tell honestly — because the &ldquo;before&rdquo; is the self that has been left behind, and our instinct is to minimize it, soften it, or render it respectable enough to admit to. But the testimony that makes the grace of God visible requires a before that is real. If the before is respectable, the grace is not amazing — it is merely agreeable. Paul&rsquo;s testimony works because he was a persecutor who killed Christians; Augustine&rsquo;s works because he was a man of consuming pride and sexual disorder who spent thirty years evading God; Newton&rsquo;s works because he captained slave ships. The specificity of the before is the measure of the grace.",
      "The encounter section is the pivot — the moment when something happened. Not every conversion is dramatic; many are quiet, gradual, almost imperceptible in the moment and only clear in retrospect. But there is always something: a sermon, a friendship, a crisis, a book, a prayer, a moment when the Gospel became personal rather than theoretical. The testimony needs to name this as specifically as possible — not because the mechanism is the point but because the particularity of it authenticates the personal nature of what happened. God met me, not just &ldquo;people generally.&rdquo;",
    ],
    callout: {
      label: "The structure",
      text: "Before: honest about what you were. Encounter: specific about what happened and who was involved. After: honest about what has changed and what is still being changed. The structure is not a formula to fill in — it is the shape of the event itself.",
    },
  },
  {
    badge: "Psalm 107",
    title: "Testimony as Ongoing, Not Just Past — &ldquo;Let the Redeemed of the Lord Tell Their Story&rdquo;",
    paragraphs: [
      "Psalm 107 opens with a command: &ldquo;Oh give thanks to the LORD, for he is good, for his steadfast love endures forever! Let the redeemed of the LORD say so, whom he has redeemed from trouble&rdquo; (vv. 1-2). The Psalm then gives four pictures of the kinds of trouble from which God redeems: wanderers in the desert, prisoners in darkness, the sick and near-death, those caught in a storm at sea. After each picture, the same refrain: &ldquo;Then they cried to the LORD in their trouble, and he delivered them from their distress&rdquo; — and &ldquo;let them thank the LORD for his steadfast love, for his wondrous works to the children of man&rdquo; (vv. 8, 15, 21, 31).",
      "What Psalm 107 describes is not a one-time conversion testimony but an ongoing pattern: the people of God are continually in various kinds of trouble, they cry out, God delivers, and the appropriate response is to tell the story. This means testimony is not just the narrative of how you became a Christian — it is the running account of God&rsquo;s interventions in an ongoing life. The redeemed are to &ldquo;say so&rdquo; not once, at their conversion, but continuously, each time God delivers from a new desert or a new darkness. The testimony is always being updated.",
      "This has practical implications for the Christian who says, &ldquo;I don&rsquo;t have a very dramatic testimony.&rdquo; The question is not whether your conversion was dramatic but whether, in the years since, you have been in trouble and God has delivered you. Have you been a wanderer whom he guided? A prisoner whom he freed? A sick person whom he healed, or at least sustained through suffering? A sailor in a storm whom he stilled? These are the testimonies of an ordinary Christian life, and Psalm 107 says to tell them — to let the redeemed say so, loudly and repeatedly, because the steadfast love that endures forever deserves a testimony that never stops.",
    ],
  },
  {
    badge: "John 10:25",
    title: "The Testimony of Jesus&rsquo; Works",
    paragraphs: [
      "In John 10:25, Jesus responds to the demand that he tell them plainly whether he is the Messiah: &ldquo;I told you, and you do not believe. The works that I do in my Father&rsquo;s name bear witness about me.&rdquo; Jesus appeals to his works as testimony — the healings, the raising of the dead, the feeding of the multitude, the walking on water. These are not arguments; they are events that speak for themselves, that authenticate the claim by the reality they produce. The testimony is in the transformation.",
      "This extends to the testimony of Christians in the world. The works that accompany the proclamation of the Gospel — the care for the poor, the restoration of broken people, the communities of love and forgiveness — are not merely social goods; they are testimony. They bear witness to the reality of what is proclaimed. The church that preaches the Gospel without demonstrating it in visible transformation is like a witness who makes claims without evidence; the church whose life in the world is itself an argument for the reality of Christ has added the testimony of works to the testimony of words.",
      "John 10:38 intensifies this: &ldquo;But if I do them, even though you do not believe me, believe the works, that you may know and understand that the Father is in me and I am in the Father.&rdquo; There is an apologetic function to transformed lives that Jesus himself employed: even if you cannot accept my words, look at what is happening. The testimony of a genuinely changed life, a genuinely loving community, a genuinely forgiving church has evidential weight that pure assertion does not carry on its own.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Writing Your Three-Part Testimony",
    summary:
      "Most Christians have a testimony but have never written it out. The act of writing forces the specificity and honesty that makes testimony powerful. This practice takes you through the three-part structure with the questions that produce genuine testimony rather than sanitized summary.",
    steps: [
      "Write your &ldquo;before.&rdquo; Be honest about the state of your life, heart, and soul before your encounter with Christ — or before the transformation that defines your testimony. What were the patterns of thought, behavior, and relationship? What were you looking for, and where were you looking? What was your relationship to God, if any? The before needs to be real, not the respectable-minimum version. Use the Journal tab on this page to start.",
      "Write your &ldquo;encounter.&rdquo; When and how did it happen — the moment, the conversation, the book, the sermon, the crisis, the prayer? Who was involved? What specifically was said or happened? What was the first thing that changed? Be as specific as the event actually was. If it was gradual, trace the arc: the first thing that moved, then the next, then the moment you could no longer deny it.",
      "Write your &ldquo;since.&rdquo; What is different? This is not a claim to perfection — it is an honest account of what has changed in the patterns of thought, behavior, relationship, and orientation that the before described. What have you been delivered from? What are you still in process with? The since is honest precisely because transformation is always incomplete in this life.",
      "Read the whole testimony aloud to yourself or to one trusted person. Notice where it rings true and where it sounds like a formula. Edit toward the true: cut the Christianese, add the specific, resist the temptation to make yourself either a worse sinner or a more complete saint than you actually were. The testimony that sounds like a real person&rsquo;s real experience is the one that reaches other real people.",
    ],
    anchor: "Acts 26:19 — Whereupon, O King Agrippa, I was not disobedient to the heavenly vision.",
  },
  {
    number: "02",
    title: "The Ongoing Testimony Practice — Telling What God Has Done Recently",
    summary:
      "Psalm 107 calls the redeemed to tell their story not once but continuously. This practice builds the habit of noticing and naming the specific things God has done in your life in the past month, season, or year.",
    steps: [
      "At the end of each month, spend twenty minutes in the Psalm 107 exercise: under each of the four categories — wilderness wandering, darkness and prison, sickness and near-death, storm at sea — ask whether God met you there in the past month. &ldquo;Wilderness wandering&rdquo; might mean confusion about direction; &ldquo;prison&rdquo; might mean a besetting sin or a relationship from which you felt unable to escape; &ldquo;storm at sea&rdquo; might mean a situation that felt out of control. Name specifically what happened and what God did.",
      "Develop the vocabulary to tell small testimonies, not just conversion testimonies. &ldquo;I was worried about [specific situation] and I prayed about it, and what happened was [specific thing].&rdquo; &ldquo;I was struggling with [pattern] and God showed me [specific thing through specific means].&rdquo; The small testimonies of daily God-encounter are often more accessible to the person you are talking to than the grand conversion narrative.",
      "Share one recent testimony per week with someone — a family member, a friend, a small group, a colleague. Not as evangelistic technique but as the natural overflow of gratitude: &ldquo;I wanted to tell you what happened.&rdquo; The practice of sharing testimony regularly keeps the habit of noticing what God is doing active in you, and it creates the relationships in which deeper testimony becomes possible.",
      "Keep a running record of testimonies in the Journal tab — a living account of how God has intervened in your life. This record will serve you in times of drought, when God feels distant: the testimonies of previous seasons remind you of who he is and what he has done, and they become the ground of trust in the current season.",
    ],
    anchor: "Psalm 107:2 — Let the redeemed of the LORD say so, whom he has redeemed from trouble.",
  },
  {
    number: "03",
    title: "Sharing Your Testimony Relationally",
    summary:
      "Testimony is most powerful in the context of relationship and trust. This practice cultivates the relational depth in which testimony flows naturally rather than feeling like a performance.",
    steps: [
      "Identify two or three people in your life who do not know Christ and with whom you have genuine relationship. Not targets for a presentation — people you actually know and care for. Pray for them by name, regularly. Testimony in a real relationship is different from testimony delivered to a stranger; it carries the weight of all the shared history and the evident care.",
      "Look for the natural openings that life creates — a crisis, a question, a conversation about meaning or loss or hope. These are the moments when the testimony fits naturally rather than having to be forced. The person who knows you are a Christian will already be watching to see whether your faith is producing something in you; your testimony confirms what they are already observing.",
      "Practice the art of the short testimony — the two-to-three-minute version that answers the question &ldquo;what difference has it made?&rdquo; without requiring a thirty-minute presentation. The short testimony is often more powerful than the long one because it leaves the listener wanting to ask more rather than feeling that they have received a complete package they can evaluate and set aside.",
      "After sharing your testimony with someone, resist the urge to immediately evaluate the response. Testimony plants; it does not always reap in the same conversation. Trust the work of the Spirit with the words you spoke and the life behind them. The person who hears a genuine testimony has been given something that continues to work after the conversation ends.",
    ],
    anchor: "John 9:25 — One thing I do know: I was blind, now I see.",
  },
  {
    number: "04",
    title: "The Honest Before — Resisting the Temptation to Sanitize",
    summary:
      "The most common way testimony loses its power is in the sanitizing of the before. This practice works against the tendency to present a version of your past that is respectable enough to admit to but not honest enough to need much grace.",
    steps: [
      "Write your before again — but this time, push past the respectable-minimum to the actually true. What were the patterns you are most ashamed of? What were the things you would not want certain people to know? What was the deepest disorder of your life before God intervened? You do not have to share everything with everyone, but you should know what your full before is, and you should be willing to share it with at least a few people in the contexts where it would help them.",
      "Ask yourself: is the grace in my testimony commensurate with the before I&rsquo;m presenting? If the before is mild, the grace will seem mild. If the grace is amazing, the before needs to be real. The Psalms — especially the penitential psalms like Psalm 51 — model what honest self-examination in the presence of God looks like: thorough, specific, and without self-excuse.",
      "Distinguish between private testimony (everything) and public testimony (what is appropriate to share in a given context). You do not need to share every detail of your before with every audience. But the private testimony should always be the full one; the public testimony should be as honest as the context allows, not as sanitized as self-protection prefers.",
      "Read Paul&rsquo;s testimony in 1 Timothy 1:15 before you share your own: &ldquo;I am the foremost of sinners.&rdquo; Paul does not say &ldquo;I was the foremost of sinners&rdquo; — he uses the present tense, even writing decades after his conversion. The humility that says &ldquo;I am still a person who needs grace&rdquo; is part of what makes the testimony powerful; it tells the hearer that they have not been invited into a club for people who have it together.",
    ],
    anchor: "1 Timothy 1:15 — The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost.",
  },
  {
    number: "05",
    title: "Testimony in the Face of Accusation — Revelation 12:11",
    summary:
      "One of the most important uses of testimony is internal: the word of your testimony spoken to yourself in the face of the accuser&rsquo;s charges. This practice applies the logic of Revelation 12:11 to the spiritual warfare of the conscience.",
    steps: [
      "When the accusation comes — &ldquo;you are not good enough, you are not changed enough, what happened to you was not real, God does not accept someone with your history&rdquo; — respond not with argument but with testimony. &ldquo;I was exactly what you say I was. And the blood of the Lamb is sufficient for every word of that charge. I am a testimony to grace, not to merit.&rdquo;",
      "Write out the specific charges you most frequently hear from the accuser — the lies about your identity, your past, your present failures, your worth to God. Then write the testimony that answers each one: not a denial of the charge (often the charge is factually accurate about the past) but the proclamation of what the blood of the Lamb has done with it.",
      "Practice testifying to yourself in the mirror — literally. Say aloud the testimony that answers the accusation. The spoken word of testimony is more powerful than the thought, and the act of speaking it in the first person, to a face, embeds it more deeply than reading or writing alone.",
      "Share the internal testimony practice with a trusted fellow believer. When you are under heavy accusation, it is hard to testify alone; the community of faith speaks the testimony back to you when you cannot speak it for yourself. &ldquo;We have conquered him by the blood of the Lamb and by the word of our testimony&rdquo; is a plural: the testimony is also a shared weapon.",
    ],
    anchor: "Revelation 12:11 — They have conquered him by the blood of the Lamb and by the word of their testimony.",
  },
  {
    number: "06",
    title: "The Works That Bear Witness — Living a Testimony",
    summary:
      "The most persuasive testimony is a life that does not require explanation before it can be observed. This practice cultivates the visible transformation that backs up the spoken testimony.",
    steps: [
      "Identify the specific areas of your life that are most visible to the people in your relational world — the way you respond to conflict, the quality of your generosity, the state of your relationships, the way you handle suffering or failure. These are the areas where your testimony is either being written or being contradicted by observable evidence.",
      "Ask honestly: does the way I actually live give the people who know me evidence of the transformation I would claim in a testimony? Not perfection — but direction. Not arrival — but movement. The person who claims transformation but whose behavior is indistinguishable from the surrounding culture has a testimony that contradicts itself.",
      "Invest specifically in the visible works that most directly bear witness in your community: generosity toward people in need, reconciliation of broken relationships, honesty in situations where dishonesty is expected, fidelity in situations where unfaithfulness is normalized. These are the &ldquo;works that bear witness&rdquo; that Jesus pointed to in John 10:25, and they are available to every Christian in every ordinary life.",
      "Let the works invite the words. When someone notices something different about you — your response to a crisis, your generosity, your forgiveness of someone who did not deserve it — that noticing is the opening for the testimony. &ldquo;What explains that?&rdquo; is the question that your life, when it is genuinely transformed, will eventually generate. Be ready to answer it with the testimony.",
    ],
    anchor: "John 10:25 — The works that I do in my Father&rsquo;s name bear witness about me.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "Surprised by Joy — The Reluctant Convert&rsquo;s Testimony",
    quote:
      "I gave in, and admitted that God was God, and knelt and prayed: perhaps, that night, the most dejected and reluctant convert in all England. I did not then see what is now the most shining and obvious thing; the Divine humility which will accept a convert even on such terms.",
    bio: "C.S. Lewis (1898-1963) described his conversion to theism in 1929 and to Christianity in 1931 in Surprised by Joy (1955), one of the most intellectually substantial conversion testimonies in the tradition. What is remarkable about Lewis&rsquo;s account is its honesty about his resistance: he fought against conversion for years, seeing it coming and trying to prevent it, and when it arrived he described it without triumphalism — &ldquo;the most dejected and reluctant convert in all England.&rdquo; The before in Lewis&rsquo;s testimony is a thoroughgoing atheism maintained with intellectual rigor and considerable investment; the encounter is a prolonged intellectual and existential argument with reality that he ultimately could not win; the after is the vast literary output of a man who spent the rest of his life giving reasons for the hope that had captured him. Lewis&rsquo;s testimony shaped the testimonies of millions who found in his honesty permission to take their own intellectual journey seriously.",
  },
  {
    name: "Augustine of Hippo",
    role: "Confessions — The Greatest Testimony in Church History",
    quote:
      "Thou madest us for Thyself, and our heart is restless, until it repose in Thee. Our heart is restless, until it rests in Thee.",
    bio: "Augustine (354-430) wrote the Confessions between 397 and 400 AD, and it remains the most influential personal testimony in the history of Christianity. It is simultaneously autobiography, prayer, and theology — addressed throughout to God as a sustained act of witness before an audience that God already knows everything about. Augustine&rsquo;s before is eighteen years of searching — through Manichaeism, through academic skepticism, through Neoplatonism, through a sexual relationship that produced a son — and the famous resistance of a man who prayed, &ldquo;Lord, make me chaste — but not yet.&rdquo; The encounter is the garden in Milan in the summer of 386: the voice, the text from Romans 13, the transformation. The after is forty years of North African episcopate, the greatest theological production of the ancient church, and the ongoing Confessions themselves, which model that testimony is not a fixed past event but an ongoing conversation between the soul and the God who found it.",
  },
  {
    name: "John Newton",
    role: "Amazing Grace — The Slave-Trader&rsquo;s Testimony",
    quote:
      "Amazing grace! How sweet the sound that saved a wretch like me! I once was lost, but now am found; was blind, but now I see.",
    bio: "John Newton (1725-1807) is one of history&rsquo;s most dramatic testimonies. He was the captain of a slave ship — a man who trafficked in human beings and who by his own account was as thoroughly immoral as any person of his era could be. His conversion came during a violent storm in 1748, when he cried out to God in desperation and survived. He continued in the slave trade for several years after his conversion — a fact he later acknowledged with agonizing honesty — before eventually leaving the sea, becoming a priest, and eventually adding his testimony to William Wilberforce&rsquo;s campaign against the slave trade. He wrote &ldquo;Amazing Grace&rdquo; in 1772 as a sermon illustration, drawing directly on John 9:25. His testimony before Parliament in 1788, documenting what he had done and seen on the slave ships, was a powerful piece of testimony as moral witness — the kind that Revelation 12:11 describes as conquering through the word of testimony at personal cost. He died in 1807, the year the slave trade was abolished in Britain.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "Joni — Testimony Through Suffering and Transformation",
    quote:
      "I would rather be in this wheelchair knowing God than on my feet without him.",
    bio: "Joni Eareckson Tada (born 1949) became a quadriplegic at seventeen after a diving accident in 1967. Her testimony is not primarily a conversion story — she was a Christian before the accident — but a testimony of transformation under suffering that has reached millions of people with the credibility that only genuine suffering can carry. Her autobiography, Joni (1976), is one of the most widely read Christian testimonies of the twentieth century. What makes her testimony so powerful is its honesty about the process: she does not rush to the redemptive lesson; she spends time in the rage, the depression, the theological crisis, the temptation to suicide. The &ldquo;before&rdquo; in her testimony is not a moral before but an existential one — a person who thought she understood God and suffering, before the accident taught her that she did not. Joni Eareckson Tada went on to found Joni and Friends, a ministry to people with disabilities, and her testimony continues to be written every year by the life she lives.",
  },
  {
    name: "Nicky Gumbel",
    role: "Questions of Life — Alpha and the Power of Testimony in Evangelism",
    quote:
      "People are not argued into the Kingdom. They are drawn in by the testimony of changed lives and the experience of the love of God.",
    bio: "Nicky Gumbel (born 1955) was a barrister who became a Christian at Cambridge and later a Church of England priest at Holy Trinity Brompton in London, where he developed the Alpha Course beginning in 1990. Alpha is built around the insight that testimony is more persuasive than argument: the course begins with shared meals, creates relationship, and uses personal testimony from guests and hosts as one of its primary evangelistic instruments. Over thirty million people have participated in Alpha courses in 169 countries, making it one of the most widely used evangelistic tools in recent church history. Gumbel&rsquo;s own testimony — from skeptical barrister to priest — models the intellectual journey that Alpha is designed to invite. His book Questions of Life presents the core testimony of Christianity in the form of a personal account of how its claims addressed the deepest questions of his own life, and it has been used as the Alpha course text in churches of virtually every denomination.",
  },
  {
    name: "Rebecca Manley Pippert",
    role: "Out of the Saltshaker — Testimony as Natural Overflow",
    quote:
      "Evangelism is not a program or a technique. It is the natural overflow of a person who has been transformed by the Gospel and who lives that transformation openly in the presence of the people around them.",
    bio: "Rebecca Manley Pippert&rsquo;s Out of the Saltshaker and Into the World (1979) became a classic guide to personal evangelism precisely because it made the case that evangelism is not a technique but a testimony — the natural, unselfconscious overflow of a transformed life lived openly in the world. Pippert was concerned that Christians had retreated into Christian subculture and were no longer genuinely present to the people around them; the book is a call to the kind of real, relational presence in which testimony happens naturally. Her own testimony is woven throughout the book — not as a formal narrative but as the examples and stories of her own experience of sharing faith in ordinary settings. Pippert distinguishes between proclamation testimony (the formal three-part account) and witness testimony (the ongoing demonstration of a changed life that creates curiosity), arguing that the second is the necessary foundation of the first. Her book has shaped evangelical thinking about personal evangelism for more than forty years.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Acts 26:19",
    text: "Therefore, O King Agrippa, I was not disobedient to the heavenly vision.",
    reflection:
      "Paul&rsquo;s testimony before Agrippa is a masterclass: before (a zealous persecutor), encounter (the Damascus road), after (&ldquo;I was not disobedient to the heavenly vision&rdquo;). The after in Paul&rsquo;s testimony is not a static state but an ongoing obedience to what he received. Testimony is not just the record of the past — it is the account of what you have done with it.",
  },
  {
    reference: "John 9:25",
    text: "He answered, &ldquo;Whether he is a sinner I do not know. One thing I do know: I was blind, now I see.&rdquo;",
    reflection:
      "The blind man cannot answer the theological questions, and he does not pretend to. What he can speak to is the transformation in his own experience, and he speaks to it with an unmovable simplicity. The testimony that says &ldquo;I was this, and now I am this&rdquo; carries its own authority — it cannot be argued away because it is not an argument but a report.",
  },
  {
    reference: "Revelation 12:11",
    text: "And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.",
    reflection:
      "Testimony is a weapon in spiritual warfare, not merely an evangelistic tool. The accuser is overcome not by silence or by theological counter-argument but by the spoken, personal, costly witness: this is what the blood of the Lamb has done in my specific life. The testimony is most powerful when it has cost the speaker something — when it is backed by a life, and in the extreme case, a death.",
  },
  {
    reference: "Psalm 107:2",
    text: "Let the redeemed of the LORD say so, whom he has redeemed from trouble.",
    reflection:
      "The command is to speak — not just to remember privately but to say so aloud. The testimony of God&rsquo;s deliverance is not only personally meaningful; it is communally necessary. The community of faith is built in part by the accumulated testimonies of what God has done in specific lives; silence about that is a failure of gratitude and a deprivation of the community.",
  },
  {
    reference: "1 Timothy 1:15-16",
    text: "The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life.",
    reflection:
      "Paul presents himself as an example — a testimony — to those who will come after. The mercy shown to the foremost of sinners is an argument for the sufficiency of grace for all sinners. Your testimony is not just your personal story; it is an argument about the character and the reach of God&rsquo;s grace. The worse the before, the larger the argument.",
  },
  {
    reference: "John 10:25",
    text: "Jesus answered them, &ldquo;I told you, and you do not believe. The works that I do in my Father&rsquo;s name bear witness about me.&rdquo;",
    reflection:
      "Jesus pointed to his works as testimony. The works that accompany a Christian life — the generosity, the forgiveness, the love under pressure, the fidelity in crisis — are not separate from the testimony; they are part of it. A life that does not bear witness to transformation has a testimony that contradicts itself. The words and the works together constitute the witness.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "FHjOgq6sYNY", title: "The Power of Personal Testimony in Evangelism" },
  { videoId: "d-ue1S12Jvg", title: "C.S. Lewis: From Atheist to Christian — A Reluctant Conversion" },
  { videoId: "mq_dRgmkqY8", title: "Joni Eareckson Tada: Finding God in Suffering" },
  { videoId: "uiJYHMOCBfI", title: "John Newton and Amazing Grace — The Slave-Trader&rsquo;s Testimony" },
  { videoId: "2UO_W0_JHKM", title: "How to Share Your Testimony — The Three-Part Structure" },
  { videoId: "D87frTJGJRE", title: "Revelation 12:11 — Conquering by the Word of Your Testimony" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianTestimonyPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<TSTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [beforeChrist, setBeforeChrist] = useState("");
  const [theEncounter, setTheEncounter] = useState("");
  const [sinceChrist, setSinceChrist] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as TSTEntry[]);
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
    if (!beforeChrist.trim() || !theEncounter.trim()) return;
    const entry: TSTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      beforeChrist: beforeChrist.trim(),
      theEncounter: theEncounter.trim(),
      sinceChrist: sinceChrist.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setBeforeChrist("");
    setTheEncounter("");
    setSinceChrist("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? ROSE : BORDER}`,
    background: active ? "rgba(225, 29, 72, 0.12)" : "transparent",
    color: active ? ROSE : MUTED,
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
    color: ROSE,
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
                color: ROSE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Witness &amp; Proclamation
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Tell Your Story: Christian Testimony
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Testimony is not a technique — it is the natural overflow of a life that has been
              genuinely transformed. From the blind man&rsquo;s disarmingly simple &ldquo;I was
              blind, now I see&rdquo; to Paul&rsquo;s testimony before kings and the martyrs of
              Revelation conquering the accuser by the word of their witness, Scripture has always
              known that personal testimony reaches where argument cannot. This guide explores the
              theology of testimony, the three-part structure, and the practices that help your
              story become a weapon of grace.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ROSE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;And they have conquered him by the blood of the Lamb and by the word of
                their testimony, for they loved not their lives even unto death.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>
                Revelation 12:11
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
                Eight studies on the theology of testimony — from the Greek word martyria and its
                link to martyrdom, through Paul and the blind man as models, to the ongoing
                testimony that Psalm 107 commands and the works of Christ that carry their own
                witness. Each section illuminates a different dimension of why the personal story
                matters and how God uses it.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: ROSE,
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
                        background: "rgba(225, 29, 72, 0.07)",
                        border: `1px solid rgba(225, 29, 72, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Martyria roots testimony in direct personal knowledge; Paul and the blind man show
                  what it looks like in practice; Revelation 12:11 shows its function in spiritual
                  warfare; Psalm 107 insists it is ongoing not just past; and John 10 reminds us
                  that testimony is carried by works as well as words. Explore what gives testimony
                  its content in{" "}
                  <Link href="/christian-obedience" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Obedience
                  </Link>{" "}
                  or the boldness that makes sharing it possible in{" "}
                  <Link href="/christian-courage" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Courage
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
                Testimony grows with practice — the practices of writing it honestly, sharing it
                regularly, refusing to sanitize it, and learning to wield it in the spiritual
                warfare of the conscience. These six practices address the full range of where
                testimony is needed: in evangelism, in community, in the interior life.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: ROSE,
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
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about vulnerability
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The testimony that costs you nothing probably reaches no one. The willingness to
                  say &ldquo;I was this, and here is what happened to me&rdquo; — in full, without
                  the respectable-minimum version — is an act of vulnerability that the Spirit uses.
                  The listener does not need a performance of spiritual confidence; they need to see
                  that grace is sufficient for the kind of person you actually were, which is usually
                  not so different from the kind of person they are. Be honest. The honesty is the
                  point.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six testimonies — from the reluctant convert C.S. Lewis to the agonized Augustine,
                from Newton&rsquo;s slave-ship to Joni&rsquo;s wheelchair, from Gumbel&rsquo;s
                Alpha to Pippert&rsquo;s call to natural witness. Each paid a real price for what
                they offered and reached millions with the word of their testimony.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: ROSE,
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
                      background: "rgba(225, 29, 72, 0.06)",
                      borderLeft: `3px solid ${ROSE}`,
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
                Six passages on testimony — from Paul before Agrippa and the blind man&rsquo;s
                one-line masterpiece through Revelation&rsquo;s battle-testimony to Psalm 107&rsquo;s
                command to &ldquo;say so.&rdquo; Read one per week alongside the Journal practice.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into a three-part prayer: adoration (&ldquo;Lord, you are the God
                  who transforms — what you do in a person&rsquo;s life is real and visible and
                  worth speaking about&rdquo;), confession (&ldquo;I have been silent when I should
                  have spoken, ashamed of my story when I should have offered it, and reluctant to
                  be vulnerable in the way testimony requires&rdquo;), and petition (&ldquo;give me
                  the courage to say so — to let the redeemed of the Lord say so — in the specific
                  relationships where my testimony is needed&rdquo;). Testimony begins in prayer
                  because it is always an act of trust.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Write your testimony in its three parts — before, encounter, since. The act of
                writing forces the specificity and honesty that makes testimony powerful. Entries are
                saved privately in your browser. No one sees this but you and God — and this may be
                the place to write the version you have never written before, without the
                respectable-minimum edits.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New testimony entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="tst-before" style={labelStyle}>
                    Your life before Christ (or before your transformation)
                  </label>
                  <textarea
                    id="tst-before"
                    value={beforeChrist}
                    onChange={(e) => setBeforeChrist(e.target.value)}
                    placeholder="Be honest about what you were — the patterns, the disorder, the searching, the specific ways your life was not what it should have been. The before needs to be real."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="tst-encounter" style={labelStyle}>
                    The encounter — how it happened
                  </label>
                  <textarea
                    id="tst-encounter"
                    value={theEncounter}
                    onChange={(e) => setTheEncounter(e.target.value)}
                    placeholder="When and how did it happen — the moment, the conversation, the book, the sermon, the crisis, the prayer? Who was involved? Be as specific as the event actually was."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="tst-since" style={labelStyle}>
                    Life since — what has changed
                  </label>
                  <textarea
                    id="tst-since"
                    value={sinceChrist}
                    onChange={(e) => setSinceChrist(e.target.value)}
                    placeholder="What is different now? Not perfect — honest. What patterns have changed? What have you been delivered from? What are you still in process with?"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!beforeChrist.trim() || !theEncounter.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !beforeChrist.trim() || !theEncounter.trim() ? BORDER : ROSE,
                    color: !beforeChrist.trim() || !theEncounter.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !beforeChrist.trim() || !theEncounter.trim() ? "not-allowed" : "pointer",
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
                      Write your testimony in its three parts — before, encounter, since. The act
                      of writing is itself clarifying; many people discover what their testimony
                      actually is only in the process of trying to write it down. Start here, where
                      no one else will see it, and write the real version.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: ROSE }}>
                              Testimony entry
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete testimony entry from ${entry.date}`}
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
                            Before
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.beforeChrist}
                          </p>
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
                            The encounter
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theEncounter}
                          </p>
                        </div>

                        {entry.sinceChrist && (
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
                              Since
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.sinceChrist}
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
                Teaching to watch on testimony — on the power of personal witness, Lewis&rsquo;s
                reluctant conversion, Joni in the wheelchair, Newton&rsquo;s amazing grace, the
                three-part structure, and Revelation 12:11&rsquo;s battle testimony. Good companions
                to the Theology and Practices tabs.
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
              Let the redeemed of the Lord say so
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              You were blind, and now you see. You were lost, and now you are found. You were
              something before, something happened, and you are different now — however imperfectly,
              however incompletely, the direction has changed and the change is real. That is your
              testimony, and the God who brought it about says: say so. The redeemed of the Lord
              are not called to silence. The accuser is overcome by the word of your testimony. The
              person in the room with you tonight may be reached not by your argument but by your
              honest account of what happened to you. Say so.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: understand what gives your testimony its content in{" "}
              <Link href="/christian-obedience" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Obedience
              </Link>
              , explore the Gospel you are testifying to in{" "}
              <Link href="/salvation" style={{ color: ROSE, textDecoration: "underline" }}>
                The Gospel
              </Link>
              , or strengthen the courage to speak in{" "}
              <Link href="/christian-courage" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Courage
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
