"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christianlistening_entries";

interface LSTEntry {
  id: string;
  date: string;
  whatIHeard: string;
  howIHeard: string;
  myResponse: string;
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
    badge: "1 Samuel 3",
    title: "&ldquo;Speak, Lord, for Your Servant Is Listening&rdquo; — Samuel&rsquo;s Call",
    paragraphs: [
      "The call of Samuel is one of the most tender narratives in the Old Testament, and it is a study in the education of a listening soul. Three times God speaks; three times Samuel mistakes the voice for Eli&rsquo;s. He is not disobedient — he runs to Eli each time, attentive and responsive — but he does not yet know the voice of the LORD, &ldquo;for the word of the LORD had not yet been revealed to him&rdquo; (1 Sam 3:7). The problem is not willingness but inexperience: he has not yet learned to distinguish the divine voice from the human voices that surround it.",
      "Eli&rsquo;s instruction is simple and decisive: &ldquo;Go, lie down, and if he calls you, you shall say, &lsquo;Speak, LORD, for your servant hears.&rsquo;&rdquo; (v. 9). What Eli gives Samuel is not a theological lecture on divine communication but a posture — the posture of the receptive soul: lying down (not striving), responding (not initiating), naming himself a servant (not a seeker of information), and saying &ldquo;I hear&rdquo; as an act of faith before the word has come again. The posture precedes the hearing.",
      "Samuel obeys, and God comes and speaks — &ldquo;Samuel! Samuel!&rdquo; — and Samuel replies with the words Eli taught him, and the word of the LORD comes to him fully. The narrative does not end there: &ldquo;And Samuel grew, and the LORD was with him and let none of his words fall to the ground&rdquo; (v. 19). The listening life is not a one-time event but a growth — a long education in distinguishing the voice that has been speaking all along from the noise that surrounds it.",
    ],
    callout: {
      label: "The posture",
      text: "Before God speaks, you must be lying down — receptive, servant-postured, willing to hear rather than striving to understand. &ldquo;Speak, Lord, for your servant hears&rdquo; is not a technique; it is a disposition that must be cultivated over time.",
    },
  },
  {
    badge: "1 Kings 19:12",
    title: "The Still Small Voice — Elijah After the Fire",
    paragraphs: [
      "Elijah comes to Mount Horeb in a state of complete collapse. He has just witnessed the dramatic vindication of God on Mount Carmel — fire from heaven, the false prophets of Baal destroyed — and has promptly run for his life from Jezebel&rsquo;s threat. He sits under a broom tree and asks to die. God feeds him twice, sends him on a forty-day journey, and brings him to a cave in Horeb, the mountain of God. There, God asks: &ldquo;What are you doing here, Elijah?&rdquo; (1 Kings 19:9).",
      "Then comes one of the most famous theophanies in Scripture. A great wind tears the mountains apart — but God is not in the wind. An earthquake — but God is not in the earthquake. Fire — but God is not in the fire. And then &ldquo;a still small voice&rdquo; (v. 12), or in other translations &ldquo;a low whisper&rdquo; or &ldquo;the sound of a gentle blowing.&rdquo; Elijah wraps his face in his cloak and stands at the mouth of the cave. The spectacular manifestations of divine power were not the medium of personal address; the still small voice was.",
      "The lesson is not that God never speaks in the dramatic. It is that in the moment when Elijah most needed to hear God personally — not as a crowd-compelling spectacle but as a word addressed specifically to him in his exhaustion and despair — God came in the gentle whisper. The listening life requires the capacity to be still enough to hear what the storm cannot carry: the word that is addressed to you, by name, in the quiet that the noise makes impossible.",
    ],
  },
  {
    badge: "Scripture, Prayer, Creation, Community",
    title: "How God Speaks — The Many Channels of Divine Communication",
    paragraphs: [
      "The Christian tradition has recognized multiple channels through which God communicates: Scripture (the primary, normative, and most reliable medium — all other words must be tested against it), prayer (the interior conversation in which the Spirit speaks to the spirit of the believer), creation (Psalm 19 — &ldquo;The heavens declare the glory of God&rdquo; — and Romans 1:20 — &ldquo;his invisible attributes... have been clearly perceived, ever since the creation of the world, in the things that have been made&rdquo;), community (the counsel of wise, Spirit-filled believers who speak into our lives), and circumstances (the situations God orchestrates or permits that create the conditions in which his purposes become visible).",
      "Dreams and visions are also recognized in Scripture as channels of divine communication — Joel 2:28 promises that in the last days &ldquo;your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions.&rdquo; The New Testament records multiple instances of divine guidance through dreams (Matt 1:20, Matt 2:12, Acts 16:9). These are not the primary or most reliable channel — they require the same careful discernment as any subjective experience — but their presence in the canonical record means that dismissing them categorically is not a biblical position.",
      "The key insight about these multiple channels is that they are not in competition — they are in harmony. The word that comes in prayer will not contradict the word that comes in Scripture; the circumstance that seems to be divine guidance will not persist in pointing in a direction that Scripture prohibits. God speaks in multiple registers, but the score is coherent: what he says in one medium is consistent with what he says in another, because the speaker is the same.",
    ],
    callout: {
      label: "The grid",
      text: "When you think you have heard something from God — through any channel — ask: does this align with Scripture? Does it point toward Christlikeness? Would mature, wise Christians affirm it? Does it produce peace, love, and a spirit of power, not fear? Legitimate divine communication tends to pass all four tests.",
    },
  },
  {
    badge: "1 John 4:1 / 1 Thess 5:21",
    title: "Discernment — Testing What You Hear",
    paragraphs: [
      "The New Testament command to test what we hear is not a counsel of skepticism but a mark of spiritual maturity. John writes: &ldquo;Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world&rdquo; (1 John 4:1). Paul writes: &ldquo;Do not quench the Spirit. Do not despise prophecies, but test everything; hold fast what is good&rdquo; (1 Thess 5:19-21). Both commands hold together the openness to hearing God and the responsibility to test what is heard.",
      "The primary test is always Scripture: does what I believe I have heard align with what God has already said in his written word? A &ldquo;word from God&rdquo; that contradicts clear biblical teaching is not from God, regardless of how supernatural the experience felt. The Reformation principle of sola scriptura is not a rejection of the Holy Spirit&rsquo;s present activity — it is a guardrail that protects the experience of that activity from the distortions of wishful thinking, manipulation, and spiritual counterfeiting.",
      "Secondary tests include: the fruit it produces (Matt 7:16 — &ldquo;you will recognize them by their fruits&rdquo;), the character of the one speaking (is this person walking with God, marked by humility and love?), the confirmation of the community (do wise, mature Christians affirm what you believe you have heard?), and the peace or dis-ease it produces in the Spirit (Colossians 3:15 — &ldquo;let the peace of Christ rule in your hearts&rdquo;, used as a decision-making tool). Discernment is not a single test but a multi-factor evaluation practiced over time by people who have immersed themselves in Scripture and cultivated spiritual sensitivity.",
    ],
  },
  {
    badge: "Contemplative vs. Talking",
    title: "Contemplative Listening vs. Talking-Only Prayer",
    paragraphs: [
      "Much of what passes for prayer in evangelical Christianity is monologue: a list of requests addressed to God without any structured time for listening. This is not meaningless — God is honored by the child who brings their needs to the Father — but it is incomplete. It is, as Dallas Willard observed, like a person who calls their friend on the phone, delivers a prepared speech, and then hangs up before the friend can respond. The prayer was real; the conversation was not.",
      "Contemplative prayer — the practice of structured silence and receptive attention before God — has deep roots in the Christian tradition. The Desert Fathers practiced it in the third century; the medieval mystics developed its vocabulary; the Quakers built their entire worship structure around it; the Ignatian tradition formalized it as a central spiritual practice. The common thread is the deliberate creation of space — interior and sometimes exterior — in which the speaking self falls quiet enough for the listening self to function.",
      "This does not require mystical experience or any particular tradition. It requires, primarily, silence and time: ten minutes in the morning before the day starts, in which you are not bringing requests but attending — reading a text slowly, sitting with a question, or simply being present before God without an agenda. The discipline of contemplative listening is the discipline of converting prayer from a delivery mechanism into a relationship.",
    ],
    callout: {
      label: "The invitation",
      text: "After you have spoken your prayers, stop. Stay. Wait. You may not hear anything. You may have a sense, a word, an image, a Scripture that surfaces. You may simply feel the presence of the one you have been addressing. Any of these is a form of the conversation that one-directional prayer cannot reach.",
    },
  },
  {
    badge: "Lectio Divina",
    title: "Lectio Divina — Scripture as a Listening Practice",
    paragraphs: [
      "Lectio divina is Latin for &ldquo;sacred reading,&rdquo; and it is one of the oldest Christian listening practices: a method of reading Scripture slowly and attentively, not primarily for information but for personal address — for the word within the Word that speaks to you, in your situation, today. It has four movements: lectio (reading), meditatio (meditation — pondering, chewing on the text), oratio (prayer — responding to what you have read), and contemplatio (resting in the presence of the God who has spoken).",
      "The discipline of lectio divina reshapes the relationship to Scripture. Instead of reading as coverage — moving through the text to fulfill a plan or accumulate knowledge — lectio slows reading to a pace at which a single verse can hold the attention for ten minutes. The question it asks is not &ldquo;what does this text mean?&rdquo; but &ldquo;what is this text saying to me, today, in my situation?&rdquo; The two questions are not in competition; exegetical understanding serves personal application. But lectio keeps the personal application in view as the goal, not the byproduct.",
      "For a listening journal, lectio divina entries are among the most valuable: a brief record of the text read, the word or phrase that caught the attention, what it seemed to mean in the context of the listener&rsquo;s life, and the prayer it generated. Over time these entries reveal a pattern — the themes that recur, the words God seems to return to, the areas of life that Scripture keeps addressing — that becomes a form of spiritual direction received directly from the text.",
    ],
  },
  {
    badge: "Mark 1:35",
    title: "Silence and Solitude — Jesus&rsquo; Early Morning Withdrawals",
    paragraphs: [
      "Mark 1:35 is a startling verse: &ldquo;And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.&rdquo; The context is important: the day before had been one of the most active in Jesus&rsquo;s ministry — teaching in the synagogue, casting out a demon, healing Peter&rsquo;s mother-in-law, healing the sick and casting out demons until evening. The whole town came. And before the next day could begin, Jesus was already gone — alone, in the dark, in a desolate place, praying.",
      "The Son of God, whose relationship with the Father was perfect and unbroken, chose deliberately to withdraw from the noise of successful ministry in order to be alone with the Father before the day began. If the perfect communion of the Trinity required this, it is difficult to argue that imperfect human beings can manage without it. The pattern that Mark records — early, dark, alone, desolate — is not accidental. Each element is the deliberate creation of conditions in which the listening can happen: early (before the day has filled with noise and obligation), dark (before the visual world has asserted itself), alone (without the mediating presence of others), desolate (without the comforts and distractions of inhabited space).",
      "Jesus&rsquo; pattern does not prescribe the exact conditions for everyone — not everyone can pray before dawn in a wilderness. But the principle is universal: listening to God requires the deliberate subtraction of noise and the addition of silence. The specific form of that subtraction will differ from person to person; the necessity of it is the same for everyone. The disciple who is too busy to be alone with the Father in silence is too busy to hear what the Father has to say.",
    ],
  },
  {
    badge: "Why Listening Is Hard",
    title: "Why We Find It Hard to Listen",
    paragraphs: [
      "The honest answer to why listening to God is difficult is multi-layered. At the surface, it is technological and cultural: modern life is designed to capture and hold attention, and the discipline of sustained, un-stimulated attention is increasingly counter-cultural. Social media, push notifications, and the ambient noise of connected life have shortened the attention span to a degree that makes ten minutes of contemplative silence feel genuinely difficult. This is a new problem in its intensity, though not in its kind.",
      "Deeper than the technological layer is a theological one: we often find it hard to listen because we are afraid of what we might hear. Samuel hesitated before telling Eli the word he had received, &ldquo;for he was afraid to tell the vision to Eli&rdquo; (1 Sam 3:15). The fear of the divine word — the possibility that God might call us to something costly, might name something we have been avoiding, might address us about an area we have been protecting — is a significant reason why prayer remains monologue. If we never stop talking, we never have to hear the answer.",
      "The deepest layer is spiritual: the unrenewed self is not naturally oriented toward God. Augustine&rsquo;s &ldquo;restless until it rests in Thee&rdquo; captures the problem — the soul is restless, always in motion, seeking satisfaction in things that do not satisfy. The spiritual discipline of listening is the discipline of bringing the restless self to stillness in the presence of God, which requires both grace and practice, and which will always feel, at first, like doing nothing in a world that rewards doing something.",
    ],
    callout: {
      label: "The honest acknowledgment",
      text: "The difficulty of listening to God is not a sign that you are doing it wrong. It is a sign that you are human, living in a noisy world, with a restless soul. The practice is the practice: return to the silence, return to the posture of listening, return as many times as you leave. The capacity to be still before God grows with use.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Samuel Posture — Beginning a Listening Practice",
    summary:
      "The posture before the listening is as important as the listening itself. Samuel lay down. He stopped striving and received. This practice establishes the physical and interior conditions that make sustained listening possible.",
    steps: [
      "Choose a time and place: ideally before the day&rsquo;s demands have fully asserted themselves, and somewhere with minimal sensory interruption. The conditions do not need to be perfect — Jesus prayed in a desolate place partly because there was nowhere quiet in a house full of people. The commitment to find what stillness is available is itself a form of seeking.",
      "Begin with a brief spoken or written acknowledgment of what you are doing: &ldquo;Speak, Lord, for your servant hears.&rdquo; This is not a formula — it is an orientation of the will. You are signaling to yourself, and to God, that you are in a receptive mode, not a performance mode. You have come to listen, not to deliver.",
      "Use the first five minutes simply to set down the concerns and preoccupations of the day. Do not pray them in detail — simply name them: &ldquo;I am carrying this, and this, and this.&rdquo; Imagine setting each one down, temporarily, at the door. You will pick them up again; for now, you are attending to something else.",
      "Sit in silence for five to ten minutes. Do not try to manufacture a word from God. Simply be present. When thoughts intrude — and they will — notice them gently and return your attention to the posture of receptive waiting. The practice is the return, not the achievement of perfect stillness.",
    ],
    anchor: "1 Samuel 3:10 — Speak, for your servant hears.",
  },
  {
    number: "02",
    title: "Lectio Divina — Slow Reading as a Listening Practice",
    summary:
      "Lectio divina is the ancient practice of slow, receptive reading of Scripture. It does not replace systematic Bible study but complements it: where study asks &ldquo;what does this mean?&rdquo; lectio asks &ldquo;what is God saying to me through this today?&rdquo;",
    steps: [
      "Choose a short passage — four to eight verses is sufficient. Read it through once slowly, aloud if possible. Notice what word or phrase catches your attention or seems to pulse with energy. Do not force this; what catches the attention is often the beginning of what God is addressing.",
      "Read the passage a second time. Sit with the word or phrase that caught your attention. Repeat it slowly, turn it over, ask what it might mean in the context of your actual life today. &ldquo;Be still&rdquo; — what would being still mean for you in the specific busyness of this week? &ldquo;I will never leave you&rdquo; — in which specific situation of the past days have you most needed to hear this?",
      "Read the passage a third time. Move from the pondering to prayer: respond to what the text has surfaced. If the word was a promise, receive it and thank God for it. If the word was a challenge, acknowledge honestly where you fall short of it and ask for what you need. If the word was a comfort, receive the comfort and name the specific place in which you need it.",
      "Rest in silence for a final few minutes — not in the pondering or the praying but in the presence of the one who has spoken. Contemplatio is not an achievement; it is simply the extension of the attention toward God rather than toward the text. Record a brief note in the listening journal: the passage, the word or phrase, what it seemed to mean, and the prayer it generated.",
    ],
    anchor: "Psalm 1:2 — His delight is in the law of the LORD, and on his law he meditates day and night.",
  },
  {
    number: "03",
    title: "The Listening Prayer Walk",
    summary:
      "Creation is one of God&rsquo;s speaking channels (Ps 19, Rom 1:20), and physical movement through the created world can be a form of listening prayer. This practice combines the attentiveness of contemplative prayer with the physical engagement of walking.",
    steps: [
      "Take a walk — thirty minutes is sufficient — with the explicit intention of listening rather than planning, problem-solving, or listening to audio. Leave headphones behind. The walk is not exercise or entertainment; it is attention.",
      "Begin by bringing your current question, situation, or need to mind: what are you most needing to hear God about right now? Hold it lightly — not as an interrogation of God but as the context in which you are walking and attending.",
      "Pay attention to what you notice. Creation speaks in multiple registers: a word or verse that surfaces unbidden, a detail of the natural world that arrests attention and holds it, a sense of comfort, challenge, or direction that arises in the quiet. Not every walk will produce a word; the discipline is the attentiveness, not the frequency of reception.",
      "After the walk, record what you noticed in the listening journal. What came to mind? What caught your attention? What sense, if any, did you receive of God&rsquo;s address to the situation you brought? Over time the pattern of what God says, and how he says it, in the specific medium of walking-prayer becomes visible.",
    ],
    anchor: "Psalm 19:1-2 — The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge.",
  },
  {
    number: "04",
    title: "The Discernment Conversation",
    summary:
      "Listening to God should not only be solitary. The body of Christ is a listening community, and the practice of bringing what you believe you have heard to wise, trusted, Spirit-filled Christians is one of the most reliable forms of discernment. This practice structures that conversation.",
    steps: [
      "Identify one or two people in your community — older in faith, marked by wisdom, not simply agreeable, not prone to spiritual inflation — with whom you can share what you believe you are hearing from God. The selection of these people matters as much as the conversation itself.",
      "When you bring a significant sense of divine direction to them, be specific: what did you hear, how did it come, what does it seem to be calling you toward, and what is your own evaluation of it? The more specific you are, the more useful the discernment conversation can be.",
      "Listen to their response with genuine openness. The point of bringing your hearing to others is not confirmation but testing. If their response is largely affirmative, receive that as one piece of evidence. If they are uncertain or concerned, take that seriously — do not simply dismiss it as spiritual timidity. The community&rsquo;s hesitation is data.",
      "Bring the question to Scripture. After the conversation, read the passages most relevant to what you believe you heard, and ask: does Scripture confirm, qualify, or challenge the direction? The discernment process is not complete until the Word has been brought directly to bear on the word.",
    ],
    anchor: "Proverbs 11:14 — Where there is no guidance, a people falls, but in an abundance of counselors there is safety.",
  },
  {
    number: "05",
    title: "The Daily Examen for Listening",
    summary:
      "At the end of each day, spend five minutes reviewing it as a listening exercise: where did God speak today, and how did you respond? This practice cultivates the habit of retrospective noticing that, over time, sharpens prospective attentiveness.",
    steps: [
      "Each evening, ask: where in the events of today did I sense something that might have been God speaking? A Scripture that came to mind at a specific moment. A word from a person that landed with unusual weight. A circumstance that seemed to be more than accident. A sense of disquiet or peace that oriented a decision.",
      "For each instance you identify, ask: did I respond, or did I dismiss it? If you responded, how? If you dismissed it, why? The pattern of your responses — which forms of divine communication you tend to receive and which you tend to filter — is important spiritual information.",
      "If you believe you received something important today, record it in the listening journal now, while it is fresh. The details fade quickly; the record preserves them. Tomorrow you may have a different perspective on what today seemed to be saying.",
      "Close with a brief prayer: &ldquo;Lord, tomorrow — give me ears to hear. Let me not miss what you are saying through the ordinary things of the day. Tune my attention to your frequency.&rdquo; The prayer of attentiveness, offered before sleep, shapes the attentiveness of the next day.",
    ],
    anchor: "Revelation 2:7 — He who has an ear, let him hear what the Spirit says to the churches.",
  },
  {
    number: "06",
    title: "Extended Silence — A Half Day of Listening",
    summary:
      "Daily listening practices accumulate into a life of attentiveness, but occasionally a longer period of uninterrupted silence is necessary — a half day or full day in which the normal demands of life are set aside and the soul can settle into a depth of listening that shorter practices cannot reach.",
    steps: [
      "Schedule a half day — four to six hours — of extended silence once a month or once a quarter. Choose a place that is quiet and, if possible, beautiful: a park, a garden, a chapel, a retreat house. Bring your Bible, your journal, and nothing else that connects you to ordinary demands.",
      "The first hour will often be turbulent: the mind will surface the unfinished business of regular life, the concerns that usually fill the prayer time, the plans and anxieties that attach themselves to quiet space. Do not fight this; let it surface and settle. The turbulence is the price of admission to the depth.",
      "After the initial settling, move through several forms of listening in the extended time: lectio divina with a passage or psalm you have been sitting with, a listening walk through whatever outdoor space is available, a period of journaled reflection on a specific question you have brought, and an extended period of simply being present in silence.",
      "At the end, record the main themes, words, images, or senses that came during the day. Not all of them will be clear immediately; some will become clear only over the following days or weeks. The extended silence is not a guarantee of a dramatic word but a clearing of the conditions in which the gentle voice — the still small voice — can be heard.",
    ],
    anchor: "1 Kings 19:12 — And after the fire the sound of a low whisper.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Leanne Payne",
    role: "Listening Prayer &mdash; Recovering the Practice of Hearing God",
    quote:
      "Listening prayer is the heart of Christian spirituality. Without learning to listen, we can know about God through Scripture and theology, but we will not know him.",
    bio: "Leanne Payne (1932-2015) was an American teacher and author whose work centered on the healing of the soul through prayer and the presence of Christ. Her book Listening Prayer (1994) is one of the most theologically serious and practically useful treatments of the subject in the twentieth century. Payne was trained in the Anglican tradition and deeply influenced by C. S. Lewis, whose writings she credited with introducing her to a robust sacramental imagination — the sense that the material world is charged with spiritual meaning and that God can be encountered in specific, concrete experiences. Her approach to listening prayer is neither charismatic nor mystical in the sense of bypassing Scripture; it is deeply grounded in the incarnation and in the particular promises of the New Testament about the Spirit&rsquo;s presence within the believer. Payne&rsquo;s pastoral experience, developed through decades of prayer ministry for people in deep psychological and spiritual need, convinced her that the majority of Christian dysfunction is related to an inability to receive — to hear God&rsquo;s word of love and affirmation and to rest in it. Listening prayer, for Payne, is not a spiritual add-on but the healing center of the Christian life.",
  },
  {
    name: "Dallas Willard",
    role: "Hearing God &mdash; Developing a Conversational Relationship with God",
    quote:
      "God&rsquo;s speaking is not the oddity; our failure to recognize it is. We have been trained not to expect it, and so we do not hear it. But the voice is there, and it is speaking.",
    bio: "Dallas Willard (1935-2013) was a philosopher at the University of Southern California and one of the most important Christian writers on the spiritual life of the twentieth century. His book Hearing God: Developing a Conversational Relationship with God (originally published as In Search of Guidance in 1984) is the most carefully reasoned contemporary treatment of the question of how God speaks to individual human beings. Willard approaches the topic as a philosopher: What would it mean for God to speak? What kind of communication would be appropriate to the nature of God and the nature of human beings? What distinguishes genuine divine address from wish-fulfillment or psychological projection? His conclusion is that a God who is personal, relational, and present in the Spirit should be expected to communicate personally, relationally, and specifically — and that the Christian who does not experience this is not experiencing a higher form of faith but a diminished one. Willard&rsquo;s theological framework for hearing God is grounded in the idea of the &ldquo;with-God life&rdquo; — the life of continuous companionship with the Trinity that is the normal Christian existence described in the New Testament — and listening is the form of attention that makes that companionship real rather than theoretical.",
  },
  {
    name: "Mark Buchanan",
    role: "The Rest of God &mdash; Sabbath, Stillness, and the Space to Hear",
    quote:
      "Sabbath is not primarily about rest from something. It is about rest in something — rest in God himself, which is the only rest that is genuinely restoring. And it is in that rest that we become capable of hearing the voice we have been too busy to notice.",
    bio: "Mark Buchanan (born 1963) is a Canadian pastor and author whose books explore the intersection of ordinary Christian life with the deeper rhythms of the spiritual life. His book The Rest of God: Restoring Your Soul by Restoring Sabbath (2006) argues that the epidemic of spiritual deafness in contemporary Western Christianity is closely related to the epidemic of busyness — that God has never stopped speaking but that the pace of modern life has made it effectively impossible to hear him. Buchanan writes as a working pastor who has experienced both the exhaustion of over-activity and the unexpected gift of forced stillness, and his work has the credibility of testimony rather than the abstraction of theory. His treatment of the relationship between Sabbath rest and listening prayer is one of the most practically helpful available: he argues that Sabbath — weekly, intentional, non-productive silence and rest — is not a luxury for those with time but a necessity for those who want to hear God. The soul that is never still cannot hear the still small voice. Buchanan&rsquo;s pastoral work in British Columbia and his writing have made him one of the most influential Canadian voices in contemporary evangelical spirituality.",
  },
  {
    name: "John Eldredge",
    role: "Walking with God &mdash; Conversation as the Heart of the Christian Life",
    quote:
      "I am convinced that God speaks to us every day. I am also convinced that most Christians miss most of what he says, not because he is silent but because we are not listening — and because we have not been taught to expect that he will speak personally to us.",
    bio: "John Eldredge (born 1960) is the founder of Ransomed Heart Ministries in Colorado and the author of Wild at Heart, Walking with God, and numerous other works on the heart, masculinity, and the interior Christian life. His book Walking with God (2008) is a journal of a year of attempting to live in genuine conversation with God — recording what he believed God said in response to specific questions and situations, the results of acting on what he heard, and the process of learning to distinguish genuine divine communication from his own projections. Eldredge&rsquo;s approach is more experiential and less theologically systematic than Willard&rsquo;s, which has attracted both a wide popular following and some theological criticism. What he contributes to the conversation on listening is the accessibility of a practitioner&rsquo;s account: not a theory of how God speaks but a journal of attempting to hear and act on what is heard, with its failures and uncertainties included. His influence on how a generation of younger evangelicals thinks about personal prayer and divine communication has been significant.",
  },
  {
    name: "Ruth Haley Barton",
    role: "Strengthening the Soul of Your Leadership &mdash; Solitude and Listening in Ministry",
    quote:
      "Solitude is the place where we become capable of hearing the voice of God rather than merely the echo of our own desires. In solitude, we find ourselves in the presence of the One who knows us as we are and calls us by name.",
    bio: "Ruth Haley Barton (born 1956) is the founder of the Transforming Center and a former associate pastor at Willow Creek Community Church. She is one of the primary voices introducing the contemplative tradition — particularly the disciplines of solitude, silence, and listening prayer — to evangelical pastors and leaders who were formed in activist, program-driven church environments. Her books — Strengthening the Soul of Your Leadership, Sacred Rhythms, Invitation to Solitude and Silence, and others — draw on the Desert Fathers, the Ignatian tradition, and the wider contemplative stream while remaining firmly grounded in evangelical theology. Barton&rsquo;s particular contribution is her work with church leaders: she argues, from both Scripture and experience, that the inability to lead well in ministry is almost always rooted in an inability to be still in God&rsquo;s presence — to hear his word rather than simply generating activity from their own resources. Her retreat work and writing have introduced thousands of evangelical leaders to the listening practices that their formation had not included.",
  },
  {
    name: "Frank Laubach",
    role: "Letters by a Modern Mystic &mdash; The Experiment of Constant Attentiveness",
    quote:
      "I am trying to be a Christian in the only sense that seems to me to mean anything — trying to put God&rsquo;s will absolutely first in every thought and action, trying to make every minute a listening post.",
    bio: "Frank Laubach (1884-1970) was an American missionary in the Philippines who, in his forties, undertook what he called &ldquo;the game with minutes&rdquo; — an experiment in maintaining conscious awareness of God&rsquo;s presence throughout every hour of every day. His private letters describing this experiment, published as Letters by a Modern Mystic (1937), are one of the most remarkable documents in twentieth-century Christian spirituality. Laubach describes, with disarming simplicity and honesty, the attempt to think of God every minute of the day — not in long concentrated periods of prayer but in a continuous low-level attentiveness that transformed the quality of his daily interactions, his work, and his prayer. He found that as he became more consistently attentive to God, God seemed to become more consistently present — that the listening, even when it produced no audible word, produced a quality of divine accompaniment that changed everything. Laubach later founded the Laubach Literacy International organization, which taught more than sixty million people to read in the twentieth century; he regarded the literacy work as a direct fruit of his experiment in listening prayer. The &ldquo;game with minutes&rdquo; remains one of the most practical and accessible introductions to continuous attentiveness to God available in English.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Samuel 3:9-10",
    text: "And Eli said to Samuel, &ldquo;Go, lie down, and if he calls you, you shall say, &lsquo;Speak, LORD, for your servant hears.&rsquo;&rdquo; So Samuel went and lay down in his place. And the LORD came and stood, calling as at other times, &ldquo;Samuel! Samuel!&rdquo; And Samuel said, &ldquo;Speak, for your servant hears.&rdquo;",
    reflection:
      "The posture of the listening soul is receptive, not striving. Samuel lay down; he did not position himself to receive a vision. The words Eli gave him — &ldquo;Speak, Lord, for your servant hears&rdquo; — are not a technique for summoning God but a disposition of the will: I am here, I am ready, I am yours. This posture must be cultivated by anyone who wants to hear God, because it runs against the activist grain of a life oriented toward producing rather than receiving.",
  },
  {
    reference: "1 Kings 19:12",
    text: "And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper.",
    reflection:
      "God spoke to Elijah in his exhaustion and despair not through the spectacular but through the still small voice. This is simultaneously encouraging and demanding: encouraging because it means God can and does speak in the quiet moments of ordinary life; demanding because it requires the cultivation of an interior stillness that makes the low whisper audible. The person whose inner life is full of noise will hear the spectacular and miss the voice.",
  },
  {
    reference: "John 10:27",
    text: "My sheep hear my voice, and I know them, and they follow me.",
    reflection:
      "Jesus assumes that his sheep can hear his voice — not that they might, if they achieve a sufficient level of spiritual development, but that they do. This is both a promise and a diagnostic: if you cannot recognize the voice of the Shepherd, something has gone wrong with the listening, not with the speaking. The capacity to hear him is a mark of the sheep&rsquo;s relationship with the Shepherd, and it can be cultivated or neglected.",
  },
  {
    reference: "Isaiah 30:21",
    text: "And your ears shall hear a word behind you, saying, &ldquo;This is the way, walk in it,&rdquo; when you turn to the right or when you turn to the left.",
    reflection:
      "The promise of divine guidance in Isaiah 30:21 has a particular texture: the word comes from behind, after you have already started moving. This is not guidance through advance revelation of every detail; it is guidance through a voice that speaks at the decision point — &ldquo;this is the way.&rdquo; The prerequisite is that you are moving, attending, and willing to be redirected. The promise is to those who are walking, not to those who are waiting for certainty before they take the first step.",
  },
  {
    reference: "Psalm 46:10",
    text: "Be still, and know that I am God.",
    reflection:
      "The command to be still is not a passive invitation but a counter-cultural imperative. In the context of Psalm 46 — a psalm of national crisis, of earth giving way and mountains falling into the sea — the instruction to be still is staggering. Not: be still because everything is fine. But: be still in the middle of the crisis, because it is only in the stillness that the knowledge of who God is becomes accessible. The knowing follows the stilling.",
  },
  {
    reference: "Romans 8:26",
    text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    reflection:
      "The listening that hears God and the listening that does not know how to speak are both forms of genuine communion with the Spirit. When the words fail — when you come to prayer and have nothing, or the situation is too large for language — the Spirit is already in the silence, interceding. The listening practice does not require verbal fluency; it requires presence. And presence before God, even inarticulate presence, is the place where the Spirit is at work.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "Y1lE8P1WKJA", title: "How God Speaks: An Overview of Divine Communication" },
  { videoId: "WNaxdMoF6_o", title: "Dallas Willard on Hearing God in the Ordinary" },
  { videoId: "rQ6vGFGWXbU", title: "Lectio Divina: How to Read Scripture as a Listening Practice" },
  { videoId: "Bm8qBM7cxD4", title: "The Still Small Voice: Discernment in an Age of Noise" },
  { videoId: "K9CqhCJfUVU", title: "Ruth Haley Barton on Solitude and Listening in Ministry" },
  { videoId: "ZS4n2hRfS1M", title: "Frank Laubach and the Game with Minutes" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianListeningPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<LSTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatIHeard, setWhatIHeard] = useState("");
  const [howIHeard, setHowIHeard] = useState("");
  const [myResponse, setMyResponse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as LSTEntry[]);
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
    if (!whatIHeard.trim()) return;
    const entry: LSTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatIHeard: whatIHeard.trim(),
      howIHeard: howIHeard.trim(),
      myResponse: myResponse.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatIHeard("");
    setHowIHeard("");
    setMyResponse("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
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
    color: TEAL,
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
                color: TEAL,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Prayer &amp; Spiritual Disciplines
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Speak, Lord, for Your Servant Is Listening: Christian Listening
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Most prayer is monologue. We bring our requests, confessions, and praise — and then
              we close our eyes and close the conversation. But the God of Scripture is not silent,
              and the life he invites his people into is not a one-way transmission. Samuel heard a
              voice in the night. Elijah heard a still small voice after the fire. Jesus withdrew
              before dawn to be alone with the Father. This guide explores the theology of listening
              prayer, the practices that cultivate a hearing heart, and the discipline of recording
              what you sense God is saying so that you can test, remember, and respond to it.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Speak, LORD, for your servant hears.&rdquo;
              </p>
              <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>
                1 Samuel 3:9
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
                Eight studies on the theology of listening prayer — from Samuel&rsquo;s call and
                Elijah&rsquo;s still small voice, through the multiple channels by which God speaks
                and the discernment required to test what is heard, to the contemplative tradition
                and Jesus&rsquo;s own pattern of withdrawal into silence. The final section addresses
                honestly why listening is so difficult for contemporary Christians.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: TEAL,
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
                        background: "rgba(13, 148, 136, 0.07)",
                        border: `1px solid rgba(13, 148, 136, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Listening to God is not a spiritual achievement for the especially gifted — it is
                  the other half of a conversation that God has been conducting since creation. The
                  practices of silence, solitude, lectio divina, and the listening journal build, over
                  time, the capacity to hear the still small voice that has been speaking all along.
                  Explore the related practice of recording what you hear in{" "}
                  <Link href="/christian-prayer-journal" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Prayer Journal
                  </Link>{" "}
                  or deepen the silence that listening requires in{" "}
                  <Link href="/christian-holiness" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Holiness
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
                Six practices for the listening life — the Samuel posture, lectio divina, the prayer
                walk, the discernment conversation, the daily examen for listening, and the extended
                half-day of silence. These are practices, not techniques: they create the conditions
                for hearing, but they do not compel God to speak on any schedule.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: TEAL,
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
                      color: TEAL,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  On patience
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The listening life takes time to develop. Eli did not recognize God&rsquo;s voice
                  immediately in Samuel&rsquo;s experience; Samuel did not recognize it at all until
                  Eli named it. The process of learning to hear God is a long education, not a single
                  breakthrough. Start with one practice, stay with it for a month, and use the Journal
                  tab to record what you sense and test it over time. The accumulation of entries is
                  itself a form of discernment.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six voices on listening to God — from Leanne Payne&rsquo;s healing-centered listening
                prayer, through Dallas Willard&rsquo;s philosophical account of the conversational
                life, to Frank Laubach&rsquo;s extraordinary experiment in minute-by-minute
                attentiveness. Each developed their understanding through sustained practice, not only
                study.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: TEAL,
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
                      background: "rgba(13, 148, 136, 0.06)",
                      borderLeft: `3px solid ${TEAL}`,
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
                Six passages on listening to God — from Samuel&rsquo;s call and Elijah&rsquo;s still
                small voice, through Jesus&rsquo;s promise that his sheep hear his voice and Isaiah&rsquo;s
                promise of guidance at the turning point, to the psalmist&rsquo;s command to be still
                and Paul&rsquo;s assurance that the Spirit intercedes in the silence.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: TEAL,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Praying these passages
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each passage into a listening session as a lectio divina text. Read it slowly,
                  stay with the word or phrase that catches you, and then sit in silence for five
                  minutes after the pondering — not trying to produce a word but simply being present
                  before the God who spoke to Samuel, who addressed Elijah by name, who promises
                  that his sheep know his voice. Record what you notice in the Journal tab.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Record what you sense God is saying here. Writing it down is not claiming certainty —
                it is beginning the process of discernment. Entries stored here allow you to return to
                them, test them against what happened, and see the patterns of how God speaks to you
                over time. All entries are stored privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New listening entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lst-heard" style={labelStyle}>
                    What I heard or sensed from God
                  </label>
                  <textarea
                    id="lst-heard"
                    value={whatIHeard}
                    onChange={(e) => setWhatIHeard(e.target.value)}
                    placeholder="Write what you sensed, heard, or received — a Scripture that arrived with weight, an impression during prayer, a word that came in conversation, a sense of direction or comfort. Be specific; generality is the enemy of discernment."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lst-how" style={labelStyle}>
                    How it came &mdash; Scripture, prayer, person, creation, impression
                  </label>
                  <input
                    id="lst-how"
                    type="text"
                    value={howIHeard}
                    onChange={(e) => setHowIHeard(e.target.value)}
                    placeholder="e.g. Scripture reading, lectio divina, prayer, conversation with a friend, creation, dream, impression, sermon..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="lst-response" style={labelStyle}>
                    My response / what I will do
                  </label>
                  <textarea
                    id="lst-response"
                    value={myResponse}
                    onChange={(e) => setMyResponse(e.target.value)}
                    placeholder="What is your response to what you heard? What will you do, change, pursue, or trust? Hearing without response is incomplete; the listening life leads to action."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatIHeard.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatIHeard.trim() ? BORDER : TEAL,
                    color: !whatIHeard.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatIHeard.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your listening entries{" "}
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
                      Begin a listening practice from the Practices tab, then return here to record
                      what you sensed. Over time, the entries reveal the patterns of how God speaks
                      to you specifically — the channels he uses most, the themes he returns to, the
                      forms of address that are distinctively yours.
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
                            marginBottom: 12,
                          }}
                        >
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label="Delete entry"
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

                        <div style={{ marginBottom: 12 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 4,
                            }}
                          >
                            What I heard
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.93rem" }}>
                            {entry.whatIHeard}
                          </p>
                        </div>

                        {entry.howIHeard && (
                          <div style={{ marginBottom: 12 }}>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 4,
                              }}
                            >
                              How it came
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.howIHeard}
                            </p>
                          </div>
                        )}

                        {entry.myResponse && (
                          <div
                            style={{
                              padding: "0.75rem 1rem",
                              background: "rgba(13, 148, 136, 0.06)",
                              borderLeft: `3px solid ${TEAL}`,
                              borderRadius: 6,
                            }}
                          >
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 4,
                              }}
                            >
                              My response
                            </span>
                            <p
                              style={{
                                color: TEXT,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.myResponse}
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
                Teaching to watch on listening to God — on how God speaks, Dallas Willard&rsquo;s
                account of the conversational life, lectio divina as a listening practice, discernment
                in the noise, Ruth Haley Barton on solitude and ministry, and Frank Laubach&rsquo;s
                game with minutes.
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
              The listening life begins with returning
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The most honest thing to say about listening to God is that it is primarily a practice
              of returning: returning to silence when you have been loud, returning to stillness when
              you have been restless, returning to the posture of the servant when you have been
              striving. Samuel had to return three times before he heard. Elijah had to pass through
              wind, earthquake, and fire before the still small voice. The listening life does not
              require spiritual achievement — it requires the willingness to keep returning, in the
              confidence that the God who called Samuel by name is calling yours.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: record what you hear in{" "}
              <Link href="/christian-prayer-journal" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Prayer Journal
              </Link>
              , respond to what you hear in{" "}
              <Link href="/christian-obedience" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Obedience
              </Link>
              , or explore the interior life that hearing requires in{" "}
              <Link href="/christian-holiness" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
