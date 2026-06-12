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

const STORAGE_KEY = "vine_christianidentity_entries";

interface IDNEntry {
  id: string;
  date: string;
  identityTruth: string;
  theOldVoice: string;
  whyItMatters: string;
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
    badge: "Pauline Theology — &ldquo;In Christ&rdquo;",
    title: "164 Times &ldquo;In Christ&rdquo; — Paul&rsquo;s Foundational Identity Language",
    paragraphs: [
      "The phrase &ldquo;in Christ&rdquo; (en Christō) and its equivalents appear approximately 164 times in the Pauline letters — making it the single most repeated identity descriptor in the New Testament. Paul uses it with stunning breadth: you are blessed in Christ (Eph 1:3), chosen in Christ (Eph 1:4), redeemed in Christ (Eph 1:7), a new creation in Christ (2 Cor 5:17), alive in Christ (1 Cor 15:22), justified in Christ (Gal 2:17), and hidden with Christ in God (Col 3:3). The phrase is not decorative or metaphorical; it names a real ontological location — the union with Christ in which every other gospel benefit finds its basis.",
      "Theologians call this &ldquo;union with Christ&rdquo; (unio cum Christo) and describe it as the ground of the Christian life: you are not forgiven and then separately adopted and then separately given the Spirit as a sequence of independent gifts. All of it flows from the single reality that you are in him. His history has become your history: his death is your death to the old self (Rom 6:6), his resurrection is your new life (Col 3:1), his righteousness is the basis of your standing (2 Cor 5:21). This means that Christian identity is not something you build, earn, or perform into. It is something you are received into.",
      "The practical implication is disorienting for those raised in performance-based religious culture: the most important question is not &ldquo;Who am I?&rdquo; — evaluated by achievement, behavior, or relationship status — but &ldquo;Whose am I?&rdquo; And the New Testament&rsquo;s answer, repeated 164 times, is: you are Christ&rsquo;s, and Christ is God&rsquo;s (1 Cor 3:23). All subsequent identity questions — your calling, your character, your relationships, your work — are answered from within that primary location, not prior to it.",
    ],
    callout: {
      label: "The foundation",
      text: "&ldquo;In Christ&rdquo; (en Christō): the single most repeated identity phrase in Paul. Not a metaphor for membership but a description of real ontological union — his death your death, his life your life.",
    },
  },
  {
    badge: "2 Corinthians 5:17 — New Creation",
    title: "The New Creation — Old Things Passed Away, New Things Have Come",
    paragraphs: [
      "&ldquo;Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come&rdquo; (2 Cor 5:17). The Greek kainē ktisis echoes the language of Genesis 1: this is not improvement or reform but re-genesis. Paul borrows creation language deliberately — the same God who spoke light into existence over the void has spoken new existence into the believer in Christ. The old self is not upgraded; it is superseded. Something genuinely new exists that did not exist before.",
      "The verb tenses are precise and important. &ldquo;Has passed away&rdquo; (parēlthen) is aorist — indicating a completed, definitive past action. The old is gone. &ldquo;Has come&rdquo; (gegonen) is perfect — indicating a past event with present, ongoing consequences. The new is here and continues to be here. Paul is making an ontological claim about present reality: the person in Christ is, right now, a new creation. This is not a description of what they are becoming or what they will be — it is what they are.",
      "Practically, this creates a tension that every honest Christian recognizes: the objective declaration of new creation and the subjective experience of the old patterns still active. Paul&rsquo;s resolution is not to deny the subjective experience but to insist that the objective reality outweighs it and must be the governing truth. Colossians 3:1-3 gives the instruction: &ldquo;seek the things that are above&rdquo; and &ldquo;set your minds on things that are above&rdquo; — the imperative to orient toward the objective truth of who you are in Christ rather than deriving identity from the subjective experience of ongoing struggle.",
    ],
  },
  {
    badge: "Romans 8:14-17 — Adoption",
    title: "Adopted as Sons and Daughters — The Spirit of Adoption, Not Slavery",
    paragraphs: [
      "&ldquo;For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &lsquo;Abba! Father!&rsquo; The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs — heirs of God and fellow heirs with Christ&rdquo; (Rom 8:15-17). The contrast between the &ldquo;spirit of slavery&rdquo; and the &ldquo;Spirit of adoption&rdquo; is the contrast between two entirely different identity postures: the slave works under constant threat of rejection; the child works from a foundation of secure belonging.",
      "In the Greco-Roman world, adoption (huiothesia) was a formal legal act with irreversible consequences: the adopted child became fully and permanently a member of the new family, with complete inheritance rights, the family name, and legal standing. Previous debts and prior identity markers were cancelled. The old life was replaced by the new. Paul uses this image deliberately: you are not tolerated guests or probationary servants whose standing depends on continued performance — you are full heirs. The adoption cannot be revoked.",
      "The intimacy of &ldquo;Abba&rdquo; — the Aramaic term of familial address, closer to &ldquo;Papa&rdquo; or &ldquo;Dad&rdquo; than the formal &ldquo;Father&rdquo; — signals the relational quality of the identity. This is not the relationship of a subject to a distant sovereign or a servant to a master; it is the relationship of a child to a near, safe, loving parent. The Spirit&rsquo;s &ldquo;bearing witness with our spirit&rdquo; is the experiential confirmation of this objective legal reality: there is something in the believer that knows, deeper than mere doctrinal assent, that they belong to God.",
    ],
    callout: {
      label: "Adoption in Greco-Roman law",
      text: "Huiothesia: irrevocable membership, full inheritance rights, previous debts cancelled, old identity replaced. Paul chose this image deliberately — you cannot be unadopted.",
    },
  },
  {
    badge: "Mark 1:11 — The Beloved",
    title: "Beloved — The Voice at the Baptism Spoken Over Every Believer",
    paragraphs: [
      "&ldquo;You are my beloved Son; with you I am well pleased&rdquo; (Mark 1:11). The Father speaks this over Jesus at his baptism, before he has preached a sermon, healed a sick person, or performed a single act of public ministry. The pleasure precedes the performance. The belovedness is not earned by what follows; it is declared over what already is. Henri Nouwen spent the last decade of his life exploring the implications of this verse for Christian identity: if Jesus&rsquo;s belovedness was declared before his ministry rather than because of it, then the identity &ldquo;beloved&rdquo; is prior to achievement, not dependent on it.",
      "Nouwen argued that the entire spiritual life is, at its core, the battle to hear the voice of the Father — &ldquo;you are my beloved&rdquo; — above the competing voices that define identity by performance, comparison, or approval. These competing voices are loud and constant: &ldquo;you are what you do,&rdquo; &ldquo;you are what you have,&rdquo; &ldquo;you are what others think of you.&rdquo; They are not merely external pressures; they are the voices of a fallen world that has lost the knowledge of what human beings actually are. The spiritual discipline is the repeated, deliberate return to the voice of the Father: you are beloved, before and apart from what you achieve.",
      "The voice at the baptism is not addressed only to Jesus in his uniqueness; it is the shape of the Father&rsquo;s address to every person made in the image of God and restored in Christ. The believer who is &ldquo;in Christ&rdquo; shares in Christ&rsquo;s sonship (Gal 4:4-7): the same &ldquo;Abba&rdquo; cry, the same Spirit of adoption, the same inheritance. To be in Christ is to be in the Beloved (Eph 1:6 — &ldquo;accepted in the beloved,&rdquo; KJV) — to have the Father&rsquo;s pleasure, declared over his Son, extended to all who are found in him.",
    ],
  },
  {
    badge: "The Three Deadly Lies",
    title: "The Three Deadly Lies — What I Do, What I Have, What Others Think",
    paragraphs: [
      "Henri Nouwen identified three lies that the world perpetually speaks over the self, each one offering a counterfeit answer to the question &ldquo;Who am I?&rdquo; The first lie: &ldquo;You are what you do.&rdquo; Identity derived from achievement, productivity, role, or moral performance. The problem is not that doing matters — it does — but that making it constitutive of identity means that failure, incompetence, or the loss of role threatens the self&rsquo;s existence. The achiever who loses their achievement has lost themselves.",
      "The second lie: &ldquo;You are what you have.&rdquo; Identity derived from possessions, relationships owned, status accumulated. The problem is not that having matters but that basing identity on possession makes the self perpetually anxious: what is owned can be lost, stolen, or devalued. The third lie: &ldquo;You are what others think of you.&rdquo; Identity derived from the opinions, approval, or recognition of others. The problem is not that relationship matters but that making the other&rsquo;s verdict constitutive of identity means that rejection, criticism, or indifference is existentially threatening.",
      "All three lies share a common structure: they place the source of identity outside the self, in something contingent, achievable, and therefore loseable. The gospel&rsquo;s answer to all three is the same: your identity is constituted not by what you do or have or how you are regarded, but by who God has declared you to be in Christ. The declaration is unconditional — not &ldquo;you are beloved because you achieve,&rdquo; but &ldquo;you are beloved.&rdquo; Not &ldquo;you are a new creation when you perform like one,&rdquo; but &ldquo;you are a new creation.&rdquo; The identity is given, not earned; declared, not constructed.",
    ],
    callout: {
      label: "Nouwen&rsquo;s three lies",
      text: "I am what I do. I am what I have. I am what others think of me. Each is a counterfeit identity that must be surrendered to receive the one the Father has already declared.",
    },
  },
  {
    badge: "Neil Anderson — Bondage Breaker",
    title: "Neil Anderson&rsquo;s Bondage-Breaker Framework — Identity Confusion as Spiritual Warfare",
    paragraphs: [
      "Neil Anderson&rsquo;s Freedom in Christ Ministries and his books Victory Over the Darkness and The Bondage Breaker introduced millions of evangelicals to a framework for understanding spiritual warfare that begins with identity rather than behavior. Anderson&rsquo;s central insight — influenced by his work in counseling and pastoral ministry — is that the enemy&rsquo;s primary strategy is not behavior modification but identity confusion. If Satan can convince a believer that their fundamental identity is still defined by their sin patterns, their past failures, or their worst fears about themselves, he does not need to attack from outside; the person will defeat themselves.",
      "Anderson&rsquo;s response is not primarily therapeutic or psychological; it is theological and declarative. His famous &ldquo;Who I Am in Christ&rdquo; list — drawn directly from New Testament texts — names fifty or more specific, Scripture-grounded identity declarations: I am a child of God (John 1:12), I am a new creation in Christ (2 Cor 5:17), I am God&rsquo;s workmanship (Eph 2:10), I am more than a conqueror (Rom 8:37). The discipline he recommends is the regular, aloud reading of these declarations — not as a positive-thinking technique but as the deliberate replacement of the enemy&rsquo;s identity whispers with the vocabulary the Bible uses to describe the believer.",
      "Anderson&rsquo;s framework has been criticized by some for oversimplification and by others for under-emphasizing the sovereignty of God in spiritual warfare. But his central pastoral contribution remains important: the believer who does not know who they are in Christ will fight spiritual battles from a defensive posture, always reactive to the enemy&rsquo;s accusations. The believer who has internalized their identity in Christ — whose self-understanding is shaped by Scripture&rsquo;s vocabulary rather than the enemy&rsquo;s — stands on different ground entirely.",
    ],
  },
  {
    badge: "Identity and Calling",
    title: "Identity Rooted in Calling vs. Performance — Being Before Doing",
    paragraphs: [
      "One of the most important distinctions in the theology of Christian identity is between identity rooted in calling and identity rooted in performance. Performance-based identity asks: &ldquo;Am I doing enough? Am I achieving the standard? Am I succeeding at the role?&rdquo; Calling-based identity asks a prior question: &ldquo;Who has God made me to be, and what is the work that flows from that being?&rdquo; The order matters enormously. Performance-based identity produces the Doing → Being direction: I do well, therefore I am valuable. Calling-based identity produces the Being → Doing direction: I am loved and called, therefore I do what I am made for.",
      "This distinction maps onto the structure of Paul&rsquo;s letter to the Ephesians with unusual clarity. Chapters 1-3 are entirely indicative: what is already true of the believer in Christ. Chapter 4 begins the imperatives: &ldquo;I therefore urge you to walk in a manner worthy of the calling to which you have been called&rdquo; (4:1). The calling precedes the walking; the identity is established before the ethics are addressed. The imperatives of chapters 4-6 do not create the identity they presuppose; they are the outworking of an identity already given.",
      "Practically, this means that the Christian who is experiencing moral failure, spiritual drought, or the loss of role or reputation has not lost their identity. The new creation they are in Christ is not contingent on their performance of it. They may be walking poorly; they are still the person described in Ephesians 1:3-14. The discipline is to bring that disconnect — between the objective identity and the subjective experience — to God in honest prayer, and to let the objective truth, rather than the subjective experience, be the governing reality.",
    ],
  },
  {
    badge: "John 10:10 — The Identity Thief",
    title: "The Identity Thief — The Enemy&rsquo;s Strategy Against Your Sense of Self",
    paragraphs: [
      "&ldquo;The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly&rdquo; (John 10:10). Jesus places the two movements in explicit contrast: the thief&rsquo;s agenda is destruction; his own agenda is life in its fullest form. The &ldquo;abundant life&rdquo; (zōēn perisson — overflowing life, life in excess of what is merely necessary) is the specific target of the thief&rsquo;s theft. What is stolen is not merely health or property or relationship; it is the very sense of who one is — the knowledge of being beloved, chosen, and called.",
      "The enemy&rsquo;s strategy in the garden (Gen 3) is identity-shaped from the start: &ldquo;Did God actually say?&rdquo; — the introduction of doubt about whether God&rsquo;s word can be trusted, whether God&rsquo;s provision is sufficient, whether God&rsquo;s definition of who you are is the real one. The lie that follows is an identity offer: &ldquo;You will be like God&rdquo; — not as a gift but as an achievement. The fall is not primarily a moral failure but an identity crisis: the attempt to constitute the self on different grounds than the ones God had already provided.",
      "The recovery of identity in Christ is, from this angle, the undoing of the fall&rsquo;s identity theft: the restoration of the knowledge that one is already beloved, already chosen, already adequate in Christ, without needing to grasp equality with God or constitute the self through achievement. Philippians 2:6-8 presents Jesus as the second Adam who makes precisely the opposite choice: &ldquo;though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself.&rdquo; The secure identity — already in God — requires no grasping.",
    ],
    callout: {
      label: "John 10:10",
      text: "The thief steals life; Christ gives it abundantly. What the enemy most wants to steal is not what you have but who you know yourself to be — the beloved, chosen, called identity that is the basis of everything else.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Identity Declaration — Speaking Who You Are in Christ Aloud",
    summary:
      "A daily practice of reading or speaking specific New Testament identity statements aloud, building the habit of orienting toward the objective truth of who you are in Christ before the day&rsquo;s performance pressures begin.",
    steps: [
      "Select five to seven specific New Testament identity statements that address your particular areas of vulnerability: the statements that feel least true, most contested by experience or memory, most in need of reinforcement. Anderson&rsquo;s &ldquo;Who I Am in Christ&rdquo; list is a useful starting point; find the ones that meet the specific shape of your identity confusion.",
      "Read them aloud each morning — before the phone, before the news, before the email. The aloud part matters: hearing your own voice speak the truth creates a different neural and spiritual engagement than silent reading. You are not performing positivity; you are orienting yourself toward what is already objectively true.",
      "When the old voice contradicts a declaration — when &ldquo;I am God&rsquo;s beloved child&rdquo; is immediately followed by the internal voice citing last week&rsquo;s failure — do not argue with the old voice. Simply re-read the declaration. The practice is not suppression of the old voice but the consistent, patient return to the new one. Over time, the new voice becomes louder.",
      "At the end of the week, note which declarations produced the most resistance. Resistance is information: it marks the specific frontier where the identity transformation is most needed and most contested. Let the places of greatest resistance become the agenda for the Journal tab.",
    ],
    anchor: "2 Corinthians 5:17 — &ldquo;If anyone is in Christ, he is a new creation.&rdquo;",
  },
  {
    number: "02",
    title: "The Voice Inventory — Naming the Competing Voices",
    summary:
      "A reflective exercise for identifying which of the three deadly lies is most operative in your sense of self, tracing its specific vocabulary, and mapping it to the specific New Testament truth that addresses it.",
    steps: [
      "Ask honestly: which of Nouwen&rsquo;s three lies has the most hold in your life right now? &ldquo;I am what I do&rdquo; (identity through achievement), &ldquo;I am what I have&rdquo; (identity through possession or relationship), or &ldquo;I am what others think of me&rdquo; (identity through approval and recognition)? Most people have all three, but one tends to dominate.",
      "For the dominant lie: what is its specific vocabulary? What does it say, specifically, in your internal monologue? &ldquo;You are only valuable when you are productive.&rdquo; &ldquo;If they knew the real you, they would leave.&rdquo; &ldquo;You have never been enough.&rdquo; Name it as specifically as possible — general lies cannot be specifically refuted.",
      "Find the specific New Testament counter. Not a generic &ldquo;God loves you&rdquo; — too broad to grip — but the targeted declaration: for the achiever, &ldquo;God&rsquo;s workmanship&rdquo; (Eph 2:10) names your worth as a product of the Artist, not your productivity; for the approval-seeker, &ldquo;accepted in the beloved&rdquo; (Eph 1:6, KJV) names a verdict already rendered.",
      "Write the lie and its counter on an index card or in your journal. When the lie surfaces — and it will, daily — reach for the counter. The practice is not the elimination of the lie (which may take years) but the increasingly fast deployment of the truth that meets it.",
    ],
    anchor: "Romans 8:16 — &ldquo;The Spirit himself bears witness with our spirit that we are children of God.&rdquo;",
  },
  {
    number: "03",
    title: "The Belovedness Practice — Lectio Divina on Mark 1:11",
    summary:
      "A contemplative prayer practice using the baptism narrative as a vehicle for receiving the Father&rsquo;s declaration of love — hearing it directed, personally and specifically, to you.",
    steps: [
      "Read Mark 1:9-11 slowly, twice. Imagine the scene: the river, the dove, the voice. Now allow the scene to become personal. You are the one coming up out of the water. The heavens open. The voice speaks.",
      "Hear the words directed to you, with your name: &ldquo;You are my beloved child; with you I am well pleased.&rdquo; Do not immediately evaluate whether you feel this to be true. Simply sit with the words as a fact being declared, not a feeling being generated. The declaration precedes the feeling; let it.",
      "When the old voice intrudes — citing your failures, your inadequacies, the gap between this declaration and your recent behavior — note it without engaging it. Return to the words of the Father. Henri Nouwen called this &ldquo;the discipline of coming home to the voice of the Beloved.&rdquo; It is a discipline precisely because the return takes effort.",
      "Close by speaking the words back to the Father as a prayer of reception: &ldquo;I receive this. I am your beloved. Not because I have earned it. Because you have declared it. I choose to live from this place today.&rdquo; The reception is itself an act of faith.",
    ],
    anchor: "Mark 1:11 — &ldquo;You are my beloved Son; with you I am well pleased.&rdquo;",
  },
  {
    number: "04",
    title: "The &ldquo;In Christ&rdquo; Study — Building Your Personal Identity Catalog",
    summary:
      "A Bible study practice for building a personalized catalog of &ldquo;in Christ&rdquo; identity statements — the 164 Pauline occurrences filtered through your specific identity wounds.",
    steps: [
      "Over four weeks, read through Ephesians, Colossians, Romans 6-8, and Galatians 2-4, marking every &ldquo;in Christ,&rdquo; &ldquo;in him,&rdquo; &ldquo;through him,&rdquo; and &ldquo;with Christ&rdquo; statement. You will find them dense — Paul uses them in nearly every verse of Ephesians 1-3.",
      "For each statement, write a one-sentence paraphrase in first person: &ldquo;I am chosen in him before the foundation of the world&rdquo; (Eph 1:4), &ldquo;I am God&rsquo;s workmanship, created in Christ Jesus for good works&rdquo; (Eph 2:10), &ldquo;I am alive to God in Christ Jesus&rdquo; (Rom 6:11). The personal form makes the truth more specific and therefore more grippable.",
      "Identify the ten statements that feel most foreign to your current self-experience — the ones that produce the most internal contradiction. These are the frontier statements: the declarations that most need to become real. Post them where you will see them daily.",
      "Return to the catalog in six months. Note which statements have moved from &ldquo;foreign&rdquo; to &ldquo;possible,&rdquo; or from &ldquo;possible&rdquo; to &ldquo;mine.&rdquo; Identity transformation is slow; the catalog makes it measurable.",
    ],
    anchor: "Colossians 3:3 — &ldquo;Your life is hidden with Christ in God.&rdquo;",
  },
  {
    number: "05",
    title: "The Shame Audit — Naming the Wounds That Shaped a False Identity",
    summary:
      "A guided reflective exercise for identifying the specific experiences — shame, trauma, significant relationships — that formed the most entrenched false identity narratives, and bringing them into the light of the gospel.",
    steps: [
      "Ask: what is the earliest memory of believing something negative and definitive about yourself? Not just a moment of embarrassment but a moment when a verdict seemed to be rendered: &ldquo;I am the kind of person who...&rdquo; or &ldquo;People like me don&rsquo;t...&rdquo; These foundational shame narratives often run invisibly beneath subsequent behavior and identity confusion.",
      "For each significant shame narrative you can identify: who first gave it to you? Was it a parent, a teacher, a peer, a religious authority, an abuser? Is the voice still active? What would it take for this verdict to be overturned?",
      "The gospel&rsquo;s answer to shame narratives is not denial (&ldquo;it didn&rsquo;t really affect you&rdquo;) or minimization (&ldquo;get over it&rdquo;) but counter-declaration: what was done to you or said over you does not constitute your identity. The Father&rsquo;s declaration in Christ supersedes every human verdict. This is true even when it does not feel true; the practice is bringing the specific shame narrative into the specific light of the specific gospel declaration that addresses it.",
      "Consider whether this work needs a trusted counselor or spiritual director. Identity wounds that run deep often need relational context for healing — not just intellectual reframing but the experience of being known and loved in the specific place of shame. The Journal tab is a starting point; deeper work may require deeper support.",
    ],
    anchor: "1 John 3:1 — &ldquo;See what kind of love the Father has given to us, that we should be called children of God; and so we are.&rdquo;",
  },
  {
    number: "06",
    title: "The Weekly Identity Check-In — Diagnosing Which Voice Is Governing",
    summary:
      "A brief weekly practice for checking which voice — the Father&rsquo;s declaration or the world&rsquo;s lies — has been governing the week&rsquo;s decisions, relationships, and emotional weather.",
    steps: [
      "At the end of each week, ask three diagnostic questions. First: what drove most of my decisions this week — the desire to perform well enough, the need for approval, or a secure sense of being already loved and called? The answer reveals which identity is governing in practice, regardless of what is believed in theory.",
      "Second: where did shame, comparison, or the fear of rejection most show up this week? These are the markers of performance-based identity in operation. They are not evidence of failure; they are information about where the identity transformation most needs to go.",
      "Third: when was the identity in Christ most real, most operative, most actually governing? This may have been a single moment — a conversation where you spoke from security rather than fear, a decision made from calling rather than approval-seeking. Name it and thank God for it as evidence of ongoing transformation.",
      "Close the check-in with the Ephesians 1 catalog: read through the opening verses slowly and let them be the governing word that ends the week. &ldquo;Blessed in Christ with every spiritual blessing... chosen... adopted... redeemed... forgiven... lavished with grace... sealed.&rdquo; This is who you are. This is what governs.",
    ],
    anchor: "Ephesians 1:3 — &ldquo;Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Neil Anderson",
    role: "The Bondage Breaker; Victory Over the Darkness — Identity in Christ as the Ground of Freedom",
    quote:
      "You are not the great sinner that Satan wants you to believe you are. You are a saint who sins. Your identity is not your behavior — it is your position in Christ. The enemy&rsquo;s primary strategy is identity confusion, and the believer&rsquo;s primary need is to know who they are in Christ.",
    bio: "Neil T. Anderson (b. 1942) is the founder of Freedom in Christ Ministries and one of the most influential writers on Christian identity in the late-twentieth-century evangelical world. A former aerospace engineer turned theologian and pastor, Anderson developed his approach to identity and spiritual warfare through years of counseling Christians trapped in cycles of shame, fear, and bondage to old patterns. His book Victory Over the Darkness (1990) and its companion The Bondage Breaker (1990) have collectively sold millions of copies and are used in discipleship contexts across denominational lines. Anderson&rsquo;s central contribution is the identification of identity confusion as the primary mechanism of spiritual bondage: the enemy does not need external force if the believer has accepted a false identity — defined by past sin, by shame narratives, by performance anxiety — that keeps the self in perpetual defeat. His &ldquo;Who I Am in Christ&rdquo; declarations, drawn directly from New Testament texts, have become a standard pastoral resource for identity renewal. He helped the evangelical church understand that genuine freedom begins not with behavior management but with the renovation of the self&rsquo;s understanding of who it is.",
  },
  {
    name: "Henri Nouwen",
    role: "Life of the Beloved; The Return of the Prodigal Son — Belovedness as the Deepest Truth",
    quote:
      "You are the Beloved. That is the voice you need to listen to — not the many other voices that speak to you loudly and demandingly. The greatest spiritual work of your life is to claim your belovedness and to receive it as the deepest truth about who you are.",
    bio: "Henri Nouwen (1932&ndash;1996) was a Dutch Catholic priest and prolific spiritual writer who taught at Notre Dame, Yale, and Harvard before leaving the academy to live in community at L&rsquo;Arche Daybreak in Toronto, caring for people with intellectual disabilities. He wrote over forty books, many of which have become classics of spiritual direction. His book Life of the Beloved (1992), written as a letter to a secular Jewish friend who asked him to explain his faith, is a sustained meditation on the meaning of being chosen, blessed, broken, and given — the four movements of the Eucharist applied to human identity. Nouwen&rsquo;s spiritual autobiography was marked by unusual vulnerability: his own chronic loneliness, his struggle with the need for affirmation and approval, and his depression make his writing on belovedness credible rather than merely theoretical. He knew the three deadly lies from the inside. His treatment of the Prodigal Son parable in The Return of the Prodigal Son (1992) has become one of the most influential books on identity and grace in the modern Christian tradition, shaped in part by his sustained meditation on Rembrandt&rsquo;s painting of the same scene.",
  },
  {
    name: "Brennan Manning",
    role: "The Ragamuffin Gospel; Abba&rsquo;s Child — Identity for the Broken and Failing",
    quote:
      "Define yourself radically as one beloved by God. This is the true self. Every other identity is illusion. The Abba of Jesus loves you tenderly, unconditionally, and forever. The real you — not the performing you, not the pretending you — is the one the Father runs toward.",
    bio: "Brennan Manning (1934&ndash;2013) was a former Franciscan priest who left the priesthood, struggled with alcoholism throughout his life and into his later ministry years, and became one of the most beloved — and most controversial — spiritual writers of the late twentieth century. The Ragamuffin Gospel (1990) made a passionate, theologically grounded case that the gospel is good news specifically for the broken, the failing, and the ragamuffin — not for those who have their act together. Manning&rsquo;s own repeated failures gave his writing a tenderness and credibility that spoke directly to people whose shame had convinced them they were disqualified from grace. Abba&rsquo;s Child (1994) is his most focused treatment of identity: it develops the concept of the &ldquo;impostor self&rdquo; — the false persona constructed to protect the self from vulnerability and rejection — and contrasts it with the &ldquo;beloved child,&rdquo; the true self that is defined only by the Father&rsquo;s unconditional love. Manning&rsquo;s theology of identity is both his most important contribution and the thing that made his life most painful: he knew, better than most, the gap between the identity he proclaimed and the identity he felt on his worst days.",
  },
  {
    name: "John Stott",
    role: "The Cross of Christ; Basic Christianity — Identity Grounded in the Atonement",
    quote:
      "Before we can begin to see the cross as something done for us, we have to see it as something done by us. It is not only that we need the cross — we deserve it. And it is the measure of our sinfulness, and therefore of our need, that God himself had to die to meet it.",
    bio: "John Stott (1921&ndash;2011) was a Church of England clergyman, theologian, and one of the most significant evangelical leaders of the twentieth century, whose ministry at All Souls Langham Place in London, his prolific writing, and his work through the Lausanne Movement shaped evangelical Christianity worldwide. His approach to Christian identity is grounded not in psychological frameworks but in the objective realities of the atonement and the new creation. In The Cross of Christ (1986) — widely regarded as his masterwork — Stott argues that the cross is the ground of every other Christian doctrine and every dimension of Christian identity: who we are is inseparable from what Christ has done for us on the cross, and the identity &ldquo;forgiven, reconciled, redeemed&rdquo; is not a feeling but a fact established by the historical event of the crucifixion and resurrection. Stott&rsquo;s complementary conviction — that this objective identity must be received, internalized, and allowed to reshape the whole of life — connects his doctrinal rigor to the pastoral concern for genuine transformation that marks all his best writing.",
  },
  {
    name: "Paul Tripp",
    role: "Dangerous Calling; New Morning Mercies — Identity Confusion as the Root of Ministry Failure",
    quote:
      "The most dangerous thing you can do is look to your own performance to define yourself. You will always find reasons to be proud or reasons to despair. Your identity must be anchored in something more stable than your track record — and that something is the grace of the Lord Jesus Christ.",
    bio: "Paul David Tripp (b. 1950) is a pastor, counselor, and author whose work sits at the intersection of Reformed theology and biblical counseling. His book Dangerous Calling (2012) is addressed primarily to pastors but applies to all Christians: it is an analysis of how identity confusion — deriving the self&rsquo;s sense of worth and security from role, reputation, theological competency, or comparison with others — is spiritually and relationally corrosive. Tripp&rsquo;s framework of &ldquo;heart idolatry&rdquo; identifies the specific false gods to which the self turns for identity when the gospel&rsquo;s provision is not being received: competence as an idol produces the imposter syndrome of the performing pastor; approval as an idol produces the people-pleaser who cannot exercise genuine spiritual authority; success as an idol produces the minister who measures self-worth by church growth metrics. His daily devotional New Morning Mercies (2014) applies the gospel to the rhythms of ordinary life with unusual pastoral warmth and specificity. Tripp consistently draws the line between the &ldquo;grace narrative&rdquo; — I am who God declares me to be in Christ — and the &ldquo;performance narrative&rdquo; — I am who my track record says I am.",
  },
  {
    name: "Dane Ortlund",
    role: "Gentle and Lowly; Deeper — The Heart of Christ as the Ground of Identity",
    quote:
      "Jesus Christ is the most tender, gentle, welcoming, forgiving, and patient person in the universe. Not despite his holiness but because of it. And it is precisely this Christ — in his tender welcome — who is the basis of your identity as beloved. You are not loved in spite of who you are. You are loved as you are, into who you are becoming.",
    bio: "Dane Ortlund (b. 1982) is an editor, author, and pastor whose book Gentle and Lowly: The Heart of Christ for Sinners and Sufferers (2020) became a widely read meditation on the emotional and relational character of Jesus as the ground of the Christian&rsquo;s approach to God. Working through Matthew 11:29 (&ldquo;I am gentle and lowly in heart&rdquo;) and related passages in the Puritans — particularly John Owen, Thomas Goodwin, and Richard Sibbes — Ortlund argues that the deepest truth about Jesus is not his power or his demands but his welcoming tenderness toward the very people who feel most disqualified from approaching him. His contribution to identity theology is indirect but important: if identity begins with the question &ldquo;What does God think of me?&rdquo;, the answer that Ortlund traces from the Gospels and the Puritans is more tender and welcoming than many Christians have allowed themselves to believe. His follow-up Deeper (2021) extends this into a theology of spiritual growth that begins not with effort but with the reception of who Christ is and what he has done — the identity given before the transformation required.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
    reflection:
      "Kainē ktisis — new creation, with Genesis overtones. The aorist &ldquo;has passed away&rdquo; indicates completed past action; the perfect &ldquo;has come&rdquo; indicates present consequences of a past event. This is a declarative statement about present ontological reality, not an aspiration or a future promise. The new creation is what you are, right now, in Christ — not what you will be when you finally behave like it.",
  },
  {
    reference: "Romans 8:14-17",
    text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &ldquo;Abba! Father!&rdquo; The Spirit himself bears witness with our spirit that we are children of God.",
    reflection:
      "Two spirits, two identities: the spirit of slavery produces fear — the constant performance anxiety of the servant who may be dismissed. The Spirit of adoption produces intimacy — the &ldquo;Abba&rdquo; cry that signals safety, nearness, and unconditional belonging. The adoption is irrevocable; in Greco-Roman law, the adopted child could not be unadopted. You cannot be unadopted. The Spirit&rsquo;s inner witness is the experiential confirmation of that legal reality.",
  },
  {
    reference: "Ephesians 1:3-6",
    text: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places, even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ.",
    reflection:
      "Before the first imperative is given in Ephesians, Paul establishes what is already true: chosen, holy, blameless, predestined for adoption, accepted in the beloved. These declarations precede the ethical instructions by three full chapters. The order is the theology: identity precedes obedience; who you are determines what you do; the gospel gives before it requires.",
  },
  {
    reference: "Colossians 3:3",
    text: "For you have died, and your life is hidden with Christ in God.",
    reflection:
      "Your true life — the life that constitutes who you ultimately are — is not visible to external measurement. It is hidden in the safest possible location: in Christ, who is in God. Neither your performance record nor your reputation nor your failures touches this hidden life. It is secured in an invisible reality that no circumstance can reach. This is the ontological basis for Christian security: your identity is stored in a location immune to loss.",
  },
  {
    reference: "1 John 3:1",
    text: "See what kind of love the Father has given to us, that we should be called children of God; and so we are.",
    reflection:
      "&ldquo;See what kind of love&rdquo; (idete potapēn agapēn) — John is marveling at the sheer improbability of the declaration. This is love of a category that defies normal classification. And &ldquo;so we are&rdquo; — not merely called, but actually are. John insists on the ontological weight: this is not legal fiction or spiritual metaphor but reality. The world does not recognize this identity because it does not recognize the One from whom it comes.",
  },
  {
    reference: "Galatians 2:20",
    text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.",
    reflection:
      "A new &ldquo;I&rdquo; — a self reconstituted by union with Christ. The old self-defining ego, organized around self-justification and performance, has been crucified. &ldquo;Christ lives in me&rdquo; is the new center of gravity. And the specificity of the closing phrase — &ldquo;who loved me and gave himself for me&rdquo; — is decisive: the identity is not grounded in theological abstraction but in the particular love of the Son for this person, demonstrated at Calvary.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "4X5UdEwbBBs", title: "Who You Are in Christ — Identity in the New Testament" },
  { videoId: "_Qzp_gIF6Dc", title: "Henri Nouwen: You Are the Beloved" },
  { videoId: "1xVH8i8IaGI", title: "Neil Anderson — Breaking Free from Identity Confusion" },
  { videoId: "wbNnGQdDxuA", title: "The Three Deadly Lies About Identity" },
  { videoId: "kGBUq0VbSXc", title: "Brennan Manning: The Ragamuffin Gospel and True Identity" },
  { videoId: "fJDEOr8mJCU", title: "Ephesians 1 — Every Spiritual Blessing in Christ" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianIdentityPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<IDNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [identityTruth, setIdentityTruth] = useState("");
  const [theOldVoice, setTheOldVoice] = useState("");
  const [whyItMatters, setWhyItMatters] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as IDNEntry[]);
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
    if (!identityTruth.trim() || !theOldVoice.trim()) return;
    const entry: IDNEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      identityTruth: identityTruth.trim(),
      theOldVoice: theOldVoice.trim(),
      whyItMatters: whyItMatters.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setIdentityTruth("");
    setTheOldVoice("");
    setWhyItMatters("");
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
              Identity &amp; Formation
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Identity: Who You Are in Christ
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Your identity is not constructed by what you achieve, accumulated by what you possess, or determined by what others think of you. It is declared over you in Christ — chosen, beloved, adopted, and hidden with Christ in God — before you earned it, before you failed it, and before you fully understood it. This guide traces the New Testament&rsquo;s identity language from Paul&rsquo;s 164 &ldquo;in Christ&rdquo; uses through the theology of adoption, new creation, and belovedness, and builds the practices that form a Christ-grounded identity in daily life.
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
                &ldquo;See what kind of love the Father has given to us, that we should be called children of God; and so we are.&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>1 John 3:1</p>
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
                Eight studies tracing the theology of Christian identity from Paul&rsquo;s 164 &ldquo;in Christ&rdquo; uses through new creation, adoption, belovedness, the three deadly lies, Neil Anderson&rsquo;s framework, identity rooted in calling, and the enemy&rsquo;s strategy of identity theft.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
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
                        border: "1px solid rgba(99, 102, 241, 0.25)",
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
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  &ldquo;In Christ,&rdquo; new creation, adoption, belovedness, the three deadly lies — these are not independent topics but different angles on the same truth: your identity is declared by the Father, constituted by union with Christ, and sustained by the Spirit. It cannot be earned, lost, or stolen by any verdict other than his. Explore how identity shapes surrender in{" "}
                  <Link href="/christian-surrender" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Surrender
                  </Link>{" "}
                  or how it grounds spiritual warfare in{" "}
                  <Link href="/christian-spiritual-warfare" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Spiritual Warfare
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
                Six practices for forming a Christ-grounded identity in the specific texture of daily life — from daily identity declarations to the voice inventory, the belovedness practice, the &ldquo;in Christ&rdquo; study, the shame audit, and the weekly identity check-in.
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
                      color: INDIGO,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Identity transformation is slow work
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The renovation of identity does not happen through a single breakthrough experience; it happens through the patient, daily, specific practice of returning to who God has declared you to be. The person who is most secure in their identity in Christ has not had fewer attacks on that identity — they have developed the habit of returning, faster and more automatically, to the Father&rsquo;s voice. The Journal tab supports that slow work: name the truth you are learning to stand on, name the old voice that contradicts it, and note why the truth changes how you live. Over time, the journal becomes a record of the renovation in progress.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian identity — Neil Anderson&rsquo;s bondage-breaker framework, Henri Nouwen&rsquo;s belovedness, Brennan Manning&rsquo;s ragamuffin grace, John Stott&rsquo;s atonement-grounded identity, Paul Tripp&rsquo;s pastoral analysis of performance, and Dane Ortlund&rsquo;s recovery of Christ&rsquo;s gentle welcome.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
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
                Six passages that form the biblical theology of Christian identity — from 2 Corinthians 5:17 through Romans 8, Ephesians 1, Colossians 3, 1 John 3, and Galatians 2. Read them alongside the Journal practice. Let each text both describe and produce the identity it names.
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
                  Take each passage and use it as an identity exercise: read it slowly, name the specific false identity narrative in your life that this text counters, and make a deliberate act of reception — allowing the declaration to be true of you, not just true in general. End with the acknowledgment: &ldquo;I do not fully feel this to be true. I choose to receive it as true. I am the person this text describes, in Christ.&rdquo; Identity in the Bible is not primarily an experience to be generated but a reality to be received and lived from.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that build the record of identity renovation over time: an identity truth you are learning to stand on, the old voice or lie that contradicts it, and why this truth changes how you live. Entries are stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New identity entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="idn-truth" style={labelStyle}>
                    An identity truth I&rsquo;m learning to stand on
                  </label>
                  <textarea
                    id="idn-truth"
                    value={identityTruth}
                    onChange={(e) => setIdentityTruth(e.target.value)}
                    placeholder="Name the specific New Testament declaration you are working to receive — chosen, beloved, new creation, adopted, hidden with Christ..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="idn-old-voice" style={labelStyle}>
                    The old voice or lie that contradicts it
                  </label>
                  <textarea
                    id="idn-old-voice"
                    value={theOldVoice}
                    onChange={(e) => setTheOldVoice(e.target.value)}
                    placeholder="What does the old voice say? What specific lie, memory, or pattern contradicts the identity truth you named?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="idn-why" style={labelStyle}>
                    Why this truth changes how I live
                  </label>
                  <textarea
                    id="idn-why"
                    value={whyItMatters}
                    onChange={(e) => setWhyItMatters(e.target.value)}
                    placeholder="If this identity truth is actually true and governing, what changes? How do you relate to yourself, to others, to failure differently?"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!identityTruth.trim() || !theOldVoice.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !identityTruth.trim() || !theOldVoice.trim() ? BORDER : INDIGO,
                    color: !identityTruth.trim() || !theOldVoice.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !identityTruth.trim() || !theOldVoice.trim() ? "not-allowed" : "pointer",
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
                      Name the identity truth you are learning to stand on, name the old voice that contradicts it, and note why it matters. Over time this becomes a record of the renovation — the Father&rsquo;s voice growing louder than the lies.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: INDIGO }}>
                              {entry.identityTruth}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.identityTruth}`}
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
                            The old voice
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theOldVoice}
                          </p>
                        </div>

                        {entry.whyItMatters && (
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
                              Why it changes how I live
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whyItMatters}
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
                Teaching on Christian identity, &ldquo;in Christ&rdquo; language, Henri Nouwen&rsquo;s belovedness, Neil Anderson&rsquo;s freedom in Christ, and the three deadly lies. Good companions to the Theology and Practices tabs.
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
              Identity as the foundation of everything else
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The renovation of identity is not completed in a weekend; it is the work of a lifetime of receiving what God has declared, against the daily pressure of what the world, the flesh, and the enemy insist is more true. The person most secure in their identity in Christ is not the person with the fewest doubts — it is the person who has developed the habit of returning, again and again, to the Father&rsquo;s voice. Use the Journal tab to track that return: name the truth, name the old voice, name what changes when the truth governs.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore how identity shapes surrender in{" "}
              <Link href="/christian-surrender" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Surrender
              </Link>
              , see how identity grounds freedom from shame in{" "}
              <Link href="/christian-forgiveness" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Forgiveness
              </Link>
              , or trace the connection between identity and calling in{" "}
              <Link href="/christian-calling" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Calling
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
