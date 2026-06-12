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

const STORAGE_KEY = "vine_christiansilence_entries";

interface SILEntry {
  id: string;
  date: string;
  duration: string;
  whatSurfaced: string;
  whatGodSaid: string;
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
    badge: "Psalm 62:1 — The Soul&rsquo;s Posture",
    title: "For God Alone My Soul Waits in Silence",
    paragraphs: [
      "&ldquo;For God alone my soul waits in silence; from him comes my salvation&rdquo; (Ps 62:1). The Hebrew behind &ldquo;waits in silence&rdquo; is a single, untranslatable word &mdash; dumiyyah &mdash; a stillness that is not empty but oriented: hushed expectancy, the quiet of a soul that has stopped negotiating and started trusting. David repeats the posture in verse 5 as a command to himself: &ldquo;For God alone, O my soul, wait in silence, for my hope is from him.&rdquo; Silence here is not the absence of prayer; it is prayer&rsquo;s deepest form &mdash; the form that remains when the soul stops performing and simply waits.",
      "The qualifier matters: God alone. Psalm 62 is a psalm about misplaced reliance &mdash; on people who are &ldquo;a leaning wall, a tottering fence&rdquo; (62:3), on extortion and riches (62:10), on words themselves. Silence before God is the practical renunciation of every other refuge. As long as the soul is talking &mdash; explaining, strategizing, rehearsing, defending &mdash; it is still managing its own salvation. The silence of Psalm 62 is the sound of management ceasing. &ldquo;He alone is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (62:2).",
      "This makes silence a confession of faith before it is a technique of devotion. Every minute of deliberate silence before God says, without words: you are God and I am not; your action matters more than my activity; your word matters more than my commentary. Psalm 46:10 issues the same summons as an imperative &mdash; &ldquo;Be still, and know that I am God&rdquo; &mdash; where the stillness is not relaxation but surrender: the cease-fire of the creature who has been fighting to run the world.",
    ],
    callout: {
      label: "Dumiyyah",
      text: "The silence of Psalm 62 is not emptiness but oriented stillness &mdash; hushed expectancy toward God alone. Silence is a confession of faith: your action matters more than my activity; your word more than my commentary.",
    },
  },
  {
    badge: "The Gospels — The Silences of Jesus",
    title: "The Silences of Jesus: Wilderness, Early Mornings, and Before Pilate",
    paragraphs: [
      "The pattern of Jesus&rsquo; life is rhythmic withdrawal into silence and solitude. Before his public ministry begins, the Spirit drives him into the wilderness for forty days (Matt 4:1-2) &mdash; the place without crowds, noise, or audience, where identity is settled before performance is demanded. After the day of healing in Capernaum, &ldquo;rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed&rdquo; (Mark 1:35). After feeding the five thousand, &ldquo;he went up on the mountain by himself to pray&rdquo; (Matt 14:23). Luke summarizes the rhythm: &ldquo;he would withdraw to desolate places and pray&rdquo; (Luke 5:16) &mdash; would withdraw, habitually, as the crowds grew larger and the demands more pressing.",
      "Notice when the withdrawals come: at the points of maximum acclaim and maximum pressure. When &ldquo;everyone is looking for you&rdquo; (Mark 1:37), Jesus is in the silent place, receiving from the Father what the crowd could neither give nor take away. The silence is where the voice from the baptism &mdash; &ldquo;You are my beloved Son&rdquo; (Mark 1:11) &mdash; is heard again beneath the other voices. If the incarnate Son needed regular silence to sustain his identity and mission, the disciple&rsquo;s claim to be too busy for it collapses.",
      "Then there is the most striking silence of all: before his accusers. &ldquo;But Jesus remained silent&rdquo; before the high priest (Matt 26:63); &ldquo;he gave him no answer, not even to a single charge, so that the governor was greatly amazed&rdquo; before Pilate (Matt 27:14) &mdash; fulfilling Isaiah&rsquo;s portrait: &ldquo;like a sheep that before its shearers is silent, so he opened not his mouth&rdquo; (Isa 53:7). This is silence as strength, not weakness: the composure of a man who does not need to win the argument because he trusts the Judge of all the earth. The one who had withdrawn into silence all his life could stand inside it when everything was at stake.",
    ],
    callout: {
      label: "The rhythm",
      text: "Wilderness before ministry, early mornings during it, silence before Pilate at the end. Jesus&rsquo; silences came at the points of maximum acclaim and pressure &mdash; the place where the Father&rsquo;s voice was heard beneath every other voice.",
    },
  },
  {
    badge: "The Desert Fathers — Hesychia",
    title: "The Desert Fathers and Hesychia: The School of Stillness",
    paragraphs: [
      "In the third and fourth centuries, as Christianity became respectable and then imperial, thousands of men and women fled to the deserts of Egypt, Palestine, and Syria &mdash; not to escape the world but to fight for their souls without the world&rsquo;s anesthetics. At the center of their spirituality was hesychia: stillness, quiet, inner silence &mdash; not mere absence of sound but a settled attentiveness to God. The most famous counsel of the tradition was given to Abba Arsenius, a Roman court tutor turned monk, who heard a voice say: &ldquo;Flee, be silent, pray always.&rdquo; When Abba Macarius was asked for a word, he said: &ldquo;Flee from men, sit in your cell, and your cell will teach you everything.&rdquo;",
      "The desert teachers were under no illusion that silence is pleasant. They went into stillness precisely because stillness is where the soul&rsquo;s real condition surfaces &mdash; the angers, lusts, resentments, and vainglory that noise keeps comfortably submerged. The cell was a furnace, not a spa. &ldquo;Just as it is impossible to see your face in troubled water,&rdquo; the saying went, &ldquo;so the soul cannot pray to God with contemplation unless it is first cleansed of harmful thoughts.&rdquo; Hesychia was the long, unglamorous work of letting the water go still &mdash; staying put while every distraction and demon argued for departure.",
      "The tradition flowed from the desert into the great stream of Christian spirituality &mdash; through John Climacus and the hesychasts of the Christian East, through Benedict&rsquo;s rule of silence in the West &mdash; and its core insight has never expired: there are things God does in a silent soul that he does not do in a noisy one, and there are truths about ourselves we will never meet except in stillness. The desert is portable. Every generation must find its cell.",
    ],
    callout: {
      label: "Hesychia",
      text: "Stillness as settled attentiveness to God. The desert fathers sought silence not because it is pleasant but because it is where the soul&rsquo;s real condition surfaces &mdash; &ldquo;sit in your cell, and your cell will teach you everything.&rdquo;",
    },
  },
  {
    badge: "The Present Age — The Noise Economy",
    title: "Silence as Resistance to the Noise Economy",
    paragraphs: [
      "We are the first generation to carry the noise with us everywhere. The smartphone has made silence not merely rare but countercultural: every empty moment &mdash; the queue, the commute, the first minute of waking &mdash; is now instantly fillable, and an entire economy is engineered to fill it. Attention is the commodity; apps are designed by some of the brightest minds alive to capture and hold it; and the business model works best when the soul is never, ever quiet. What the desert fathers chose to flee, we have volunteered to install in our pockets.",
      "This is not a neutral development, spiritually. A soul that is never silent is a soul that is always being formed by someone &mdash; advertisers, algorithms, outrage merchants, the ambient anxiety of the feed. Blaise Pascal&rsquo;s seventeenth-century diagnosis has become a description of the business model: &ldquo;All of humanity&rsquo;s problems stem from man&rsquo;s inability to sit quietly in a room alone.&rdquo; We do not merely tolerate distraction; we crave it, because distraction shields us from the questions &mdash; mortality, meaning, guilt, God &mdash; that surface the moment the room goes quiet.",
      "In such an age, the deliberate practice of silence is an act of resistance &mdash; a refusal to let the attention merchants have the deepest room of the house. Choosing ten minutes of unplugged stillness before God is now a counter-formation: it declares that my attention belongs first to my Maker, that my worth is not measured in inputs processed, and that the still small voice deserves a hearing the feed never grants it. The discipline that was once one option among many has become, for the digital age, close to a survival skill of the soul.",
    ],
    callout: {
      label: "The resistance",
      text: "An entire economy is engineered to ensure the soul is never quiet &mdash; and a soul never silent is always being formed by someone. Deliberate silence before God is counter-formation: attention returned to its Maker.",
    },
  },
  {
    badge: "1 Kings 19 — Elijah at Horeb",
    title: "Not in the Wind, Earthquake, or Fire: A Sound of Sheer Silence",
    paragraphs: [
      "Elijah, fresh from the fire-from-heaven triumph of Carmel and now fleeing Jezebel&rsquo;s death threat, journeys forty days to Horeb, the mountain of God, exhausted and despairing. There God commands him to stand on the mount: &ldquo;And behold, the LORD passed by, and a great and strong wind tore the mountains and broke in pieces the rocks before the LORD, but the LORD was not in the wind. And after the wind an earthquake, but the LORD was not in the earthquake. And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper&rdquo; (1 Kings 19:11-12) &mdash; in the Hebrew, qol demamah daqqah, rendered unforgettably by the NRSV as &ldquo;a sound of sheer silence.&rdquo;",
      "The irony is deliberate. Elijah is the prophet of spectacle &mdash; drought announced, fire called down, prophets of Baal routed. He has every reason to expect God in the pyrotechnics. And at Horeb, the very mountain where God once appeared to Moses in thunder, smoke, and quaking, the wind, earthquake, and fire pass by empty. God is in none of them. What draws Elijah to the cave&rsquo;s mouth, face wrapped in his cloak, is the paradoxical sound of utter stillness &mdash; a silence so dense it could be heard.",
      "The passage is the Old Testament&rsquo;s deepest lesson on where God is found. Spectacle had not cured Elijah&rsquo;s despair &mdash; the day after Carmel&rsquo;s fire he was suicidal under the broom tree (19:4). What restores him is not a bigger spectacle but the whisper: the personal question (&ldquo;What are you doing here, Elijah?&rdquo;), the corrected perspective (seven thousand have not bowed), the renewed commission. The God who can shatter mountains chooses the sound of sheer silence &mdash; and the servant who would hear him must become quiet enough to notice. Those who only listen for wind, earthquake, and fire will miss most of what God says.",
    ],
    callout: {
      label: "Qol demamah daqqah",
      text: "At the mountain of spectacle, God was not in the wind, earthquake, or fire but in &ldquo;a sound of sheer silence.&rdquo; Spectacle did not cure Elijah&rsquo;s despair; the whisper did. To hear it, the servant must be quiet.",
    },
  },
  {
    badge: "Habakkuk 2:20 — Liturgical Silence",
    title: "The LORD Is in His Holy Temple: Let All the Earth Keep Silence",
    paragraphs: [
      "&ldquo;But the LORD is in his holy temple; let all the earth keep silence before him&rdquo; (Hab 2:20). The verse lands at the end of Habakkuk&rsquo;s five woes against idols &mdash; and the contrast is the point. The idol is mute: &ldquo;Woe to him who says to a wooden thing, Awake&hellip; Can this teach? Behold, it is overlaid with gold and silver, and there is no breath at all in it&rdquo; (2:19). Idolatry inverts the right order of speech: the worshiper talks, pleads, and performs while the god has nothing to say. Before the living God, the order is restored &mdash; he speaks, and all the earth falls silent to listen.",
      "Silence before God is therefore an act of cosmic protocol: the appropriate posture of everything created in the presence of the One who is not. Zephaniah issues the same summons &mdash; &ldquo;Be silent before the Lord GOD!&rdquo; (Zeph 1:7) &mdash; and Zechariah extends it to all flesh: &ldquo;Be silent, all flesh, before the LORD, for he has roused himself from his holy dwelling&rdquo; (Zech 2:13). Even heaven knows the posture: at the opening of the seventh seal &ldquo;there was silence in heaven for about half an hour&rdquo; (Rev 8:1) &mdash; worship suspended in awed stillness before the climactic acts of God.",
      "This is the theology beneath liturgical silence &mdash; the hush before worship, the pause after the reading, the stillness around the Supper. Such silences are not dead air to be filled or awkwardness to be managed; they are obedience to Habakkuk 2:20, the congregation&rsquo;s embodied confession that God is present and has the floor. A church that cannot be silent together has quietly concluded that nothing is happening unless someone is talking &mdash; which is, by Habakkuk&rsquo;s logic, something close to the noise of the idol-house. The recovery of shared silence is the recovery of reverence.",
    ],
    callout: {
      label: "The inversion",
      text: "Idols are silent while their worshipers talk; the living God speaks while all the earth keeps silence. Liturgical silence is not dead air &mdash; it is the congregation&rsquo;s embodied confession that God is present and has the floor.",
    },
  },
  {
    badge: "Willard &amp; Foster — Paired Disciplines",
    title: "Silence and Solitude: The Twin Disciplines of Abstinence",
    paragraphs: [
      "In the modern recovery of the spiritual disciplines &mdash; led above all by Richard Foster&rsquo;s Celebration of Discipline (1978) and Dallas Willard&rsquo;s The Spirit of the Disciplines (1988) &mdash; silence and solitude are treated as a pair, and as foundational. Willard classified them among the disciplines of abstinence: practices of deliberately not doing &mdash; not talking, not consuming, not being available &mdash; that break the grip of the world&rsquo;s formation so that the disciplines of engagement (study, worship, service) have a self to work with. He went further: solitude, with its inseparable companion silence, is &ldquo;generally the most fundamental in the beginning of the spiritual life, and it must be returned to again and again as that life develops.&rdquo;",
      "The two need each other. Solitude without silence is merely relocation &mdash; alone with the same noise, the phone, the inner monologue still performing for an absent audience. Silence without solitude is nearly impossible to sustain &mdash; the presence of others keeps the social self on duty. Together they do what neither does alone: they remove both the audience and the soundtrack, and the constructed self &mdash; the one made of roles, reputations, and reactions &mdash; begins to come apart, which is precisely the point. Foster&rsquo;s formulation: &ldquo;Without silence there is no solitude.&rdquo; And the goal of both is not privacy but transformation: &ldquo;The fruit of solitude,&rdquo; he wrote, &ldquo;is increased sensitivity and compassion for others.&rdquo;",
      "Both teachers ground the pair in Jesus&rsquo; own rhythm of withdrawal and engagement &mdash; the desolate place before the demanding crowd. The disciplines are not escapism; they are the engine room of availability. The person who never withdraws has nothing to give but their own depletion; the person who practices silence and solitude returns to the crowd with something the crowd cannot supply. In Willard&rsquo;s economy of the spiritual life, you do not find time for silence; you arrange your life around it, the way Jesus did, because everything else depends on what happens there.",
    ],
    callout: {
      label: "Why paired",
      text: "Solitude without silence is relocation with the same noise; silence without solitude keeps the social self on duty. Together they remove the audience and the soundtrack &mdash; Willard called them the most fundamental disciplines of the beginning.",
    },
  },
  {
    badge: "The Inner Resistance — Why We Avoid It",
    title: "The Discomfort of Silence: Why We Flee It and What It Reveals",
    paragraphs: [
      "Anyone who attempts ten minutes of true silence discovers the same embarrassing fact: it is hard, and we are bad at it. Within ninety seconds the inner noise begins &mdash; the to-do list, the replayed argument, the rehearsed conversation, the itch to check the phone. The discomfort is so reliable that it must be telling us something. Part of it is simple habituation: attention trained by years of constant input experiences stillness as withdrawal symptoms. But the deeper part is revelation. Silence removes the static that ordinarily masks the soul&rsquo;s actual state, and what surfaces &mdash; anxiety, anger, grief, ambition, lust, the relentless self-referential chatter &mdash; is information. The noise was not neutral; it was anesthetic.",
      "This is why the masters of the tradition all warn that silence gets harder before it gets easier. Henri Nouwen described the discovery with typical honesty: enter solitude, and the inner chaos does not subside at first &mdash; it intensifies, because the props and distractions that held the false self together have been taken away. The temptation at exactly that point is to flee back to the noise, which is what most attempts at silence do. The invitation is to stay &mdash; to let what surfaces surface, to bring it into the light of God&rsquo;s presence rather than back under the anesthetic, and to discover that none of it, once seen, is beyond grace.",
      "Rightly practiced, then, the discomfort of silence is not a malfunction but the treatment working. What surfaces in silence is what God wants to heal; it could not be healed while it was hidden. The journal practice attached to this guide asks &ldquo;what surfaced?&rdquo; for precisely this reason: distractions, emotions, and memories that arise in stillness are not interruptions of the practice &mdash; they are its raw material, the soul&rsquo;s sediment finally visible in still water. The person who endures the noisy first stretch finds, on the far side, what the tradition has always promised: a quiet that is not empty but inhabited.",
    ],
    callout: {
      label: "The diagnostic",
      text: "Silence is uncomfortable because it is revelatory: it removes the anesthetic and lets the soul&rsquo;s actual state surface. What surfaces is not an interruption of the practice &mdash; it is the material God intends to heal.",
    },
  },
  {
    badge: "Luke 1 — Zechariah",
    title: "Zechariah Struck Silent: Silence as Gestation for Praise",
    paragraphs: [
      "When the angel Gabriel announces to the aged priest Zechariah that his barren wife will bear the forerunner of the Messiah, Zechariah answers with the arithmetic of unbelief: &ldquo;How shall I know this? For I am an old man, and my wife is advanced in years&rdquo; (Luke 1:18). The response is striking: &ldquo;Behold, you will be silent and unable to speak until the day that these things take place, because you did not believe my words&rdquo; (1:20). For nine months &mdash; the entire gestation of John the Baptist &mdash; the priest whose vocation was to speak blessing cannot say a word.",
      "It is easy to read the muteness only as punishment, but Luke shapes it as something more: enforced contemplation. For nine months Zechariah can only watch, listen, and ponder &mdash; the promise repeating in his memory, the impossible pregnancy advancing week by week, the words of Gabriel doing their slow work in a heart that had answered too quickly. Silence becomes the womb in which his unbelief is carried to term as faith. He enters the silence asking &ldquo;How shall I know?&rdquo; and emerges from it knowing.",
      "And what emerges is praise. The moment Zechariah writes &ldquo;His name is John,&rdquo; obedient at last to the word he once doubted, &ldquo;immediately his mouth was opened and his tongue loosed, and he spoke, blessing God&rdquo; (1:63-64) &mdash; and out pours the Benedictus (1:68-79), one of the great canticles of the church, sung at morning prayer for two thousand years. Nine months of silence gestated a song. The pattern is offered to every believer: there are seasons when God closes the mouth not to end the speech but to deepen it &mdash; when the silence we did not choose is preparing a praise we could not otherwise have sung. First the stillness, then the Benedictus.",
    ],
    callout: {
      label: "The gestation",
      text: "Zechariah&rsquo;s nine silent months carried his unbelief to term as faith &mdash; and the first words out of his opened mouth were the Benedictus. Some silences are not punishments but pregnancies: God deepening the speech by suspending it.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily Ten &mdash; A Beginner&rsquo;s Rule of Silence",
    summary:
      "A simple, sustainable daily practice: ten minutes of unplugged silence before God, at the same time each day. Small enough to keep, long enough for the noise to settle and the soul to surface.",
    steps: [
      "Choose a fixed time and place &mdash; early morning is the tradition&rsquo;s strong recommendation (Mark 1:35), before the day&rsquo;s noise begins. Same chair, same time. The body learns the appointment before the soul does.",
      "Remove the noise sources, not just the sound. Phone in another room &mdash; not silenced, absent. The presence of the device is itself a noise; some part of attention stands guard over it.",
      "Open with one verse as a doorway &mdash; &ldquo;For God alone my soul waits in silence&rdquo; (Ps 62:1) or &ldquo;Be still, and know that I am God&rdquo; (Ps 46:10) &mdash; then stop talking. No requests, no commentary. You are not performing prayer; you are keeping company.",
      "When distraction comes &mdash; and it will come, every minute at first &mdash; do not fight it or follow it. Notice it, release it (some find it helps to gently return with a single word: &ldquo;Father&rdquo;), and come back to the quiet. Returning is the practice. A session with forty returns is not a failed session; it is forty repetitions of the only move that matters.",
      "Close by noting &mdash; in the Journal tab &mdash; how long you sat, what surfaced, and anything you sensed God saying, including the gift of his simple quiet presence. The record turns scattered minutes into a path.",
    ],
    anchor: "Psalm 62:5 &mdash; &ldquo;For God alone, O my soul, wait in silence, for my hope is from him.&rdquo;",
  },
  {
    number: "02",
    title: "Settling the Water &mdash; Entering Silence Through Breath and Word",
    summary:
      "A practice for the noisy first minutes: using slow breathing and a single scriptural word to let the inner water go still, in the tradition of the short prayers of the desert.",
    steps: [
      "Sit comfortably but alert &mdash; feet on the floor, hands open. The body&rsquo;s posture preaches to the soul: open hands tell the heart it is receiving, not managing.",
      "Breathe slowly and count nothing. For the first two minutes, simply let the breath lengthen. The racing of the mind is partly the racing of the body; the body slows first.",
      "Take one word or short phrase from Scripture as your anchor &mdash; the tradition&rsquo;s favorites: &ldquo;Abba&rdquo;; &ldquo;Lord Jesus Christ, have mercy on me&rdquo;; &ldquo;Be still.&rdquo; When the mind wanders, return to the word once, gently, and let it carry you back into quiet. The word is not a mantra emptying the mind but a tether holding you in presence.",
      "Expect the sediment. As the water settles, what is in it becomes visible &mdash; anxieties, resentments, griefs, desires. Do not flee to the phone and do not start working the problems. Name each one before God in a single silent phrase (&ldquo;Lord &mdash; the meeting&rdquo;; &ldquo;Lord &mdash; my son&rdquo;) and return to stillness. You are not solving; you are surrendering.",
      "End without rushing. Sit for one further moment after you decide to finish &mdash; the unhurried ending is part of the formation, a small protest against the day&rsquo;s tyranny of the urgent.",
    ],
    anchor: "Psalm 131:2 &mdash; &ldquo;But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me.&rdquo;",
  },
  {
    number: "03",
    title: "The Extended Withdrawal &mdash; A Half-Day of Silence and Solitude",
    summary:
      "A monthly or quarterly practice of three to four hours of complete silence and solitude, following Jesus&rsquo; pattern of withdrawal to desolate places. Daily silence maintains the soul; extended silence rearranges it.",
    steps: [
      "Put it on the calendar like an unbreakable appointment, because that is what it is. Willard&rsquo;s counsel: you do not find time for solitude; you arrange your life around it. Three to four hours, a morning or afternoon, somewhere genuinely apart &mdash; a retreat center, a state park, an empty church, a borrowed room.",
      "Go embarrassingly unequipped: a Bible, a notebook, water. No phone (leave word of where you are, then leave it), no books to finish, no project. The poverty of inputs is the point &mdash; an extended fast of stimulation.",
      "Spend the first hour doing nothing but arriving. Walk slowly, sit, look. The first hour of extended silence is usually detox &mdash; restlessness, the phantom phone, the brain offering errands. Let it pass; it does pass. Most people meet real quiet for the first time in hour two.",
      "Let the time have a loose shape, not a schedule: a slow passage of Scripture (Psalm 62, 1 Kings 19, Mark 1 are fitted to the day); unhurried prayer that is mostly listening; honest journaling of what has surfaced from the weeks of accumulated noise; rest, including sleep if it comes &mdash; God ministered to Elijah&rsquo;s exhaustion before his theology (1 Kings 19:5-7).",
      "Re-enter slowly and deliberately. Before you reach for the phone, write down the one or two things from the silence that must not be lost &mdash; what surfaced, what settled, what you sensed God saying. The re-entry note is the bridge between the desolate place and the demanding crowd.",
    ],
    anchor: "Mark 1:35 &mdash; &ldquo;And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.&rdquo;",
  },
  {
    number: "04",
    title: "Silence Around the Word &mdash; Listening Before and After Scripture",
    summary:
      "A practice that wraps Scripture reading in deliberate stillness &mdash; silence before the text to quiet the inner commentator, and silence after it to let the word land. Reading becomes listening.",
    steps: [
      "Before opening the Bible, sit in two minutes of silence with a single prayer: &ldquo;Speak, LORD, for your servant hears&rdquo; (1 Sam 3:9). The silence before reading is the difference between consuming a text and receiving a word &mdash; it dethrones the inner commentator who is already composing opinions.",
      "Read a short passage slowly, preferably aloud, twice. Short is essential: five to ten verses. The goal is not coverage but encounter; the desert fathers lived for weeks on a single verse.",
      "After reading, keep five minutes of complete silence. Do not analyze, cross-reference, or apply &mdash; yet. Let the word sit in the stillness the way Habakkuk 2:20 prescribes: the LORD has spoken from his holy temple; the earth keeps silence. Notice which phrase stays audible in the quiet &mdash; that phrase is usually the day&rsquo;s assignment.",
      "Respond with one sentence &mdash; spoken or written &mdash; and no more. The discipline of the single sentence resists the reflex to bury the word under our own verbosity. Then carry the phrase into the day, returning to it in the gaps the phone used to fill.",
    ],
    anchor: "Habakkuk 2:20 &mdash; &ldquo;But the LORD is in his holy temple; let all the earth keep silence before him.&rdquo;",
  },
  {
    number: "05",
    title: "The Noise Audit &mdash; Fasting from the Feed",
    summary:
      "A practical examination and pruning of the noise sources in an ordinary week &mdash; treating attention as the spiritual resource it is, and reclaiming the natural silences the noise economy has colonized.",
    steps: [
      "For three days, simply observe and record: when is sound or input entering your ears and eyes? Waking to the phone, podcasts on every commute, screens at every meal, video before sleep. No judgment yet &mdash; just the audit. Most people are shocked to find the answer is: every waking gap.",
      "Identify the colonized silences &mdash; the moments that used to be naturally quiet and have been annexed by the feed: the first ten minutes of the morning, the car, the walk, the queue, the last half hour of the night. These are the easiest territory to reclaim because nothing real is lost.",
      "Choose two or three to liberate, and make the rule physical, not aspirational: the phone charges outside the bedroom; the car has a no-audio route; the first ten minutes of the day belong to Psalm 62, not the lock screen. Decisions made once beat resolutions made daily.",
      "Once a week, take one longer technology silence &mdash; an evening or a Sabbath afternoon with every screen dark. Expect the withdrawal symptoms and treat them as data: the strength of the craving is the measure of the colonization.",
      "Fill nothing. The purpose of the audit is not to swap one input for a holier input but to restore actual silence &mdash; space where the soul can hear itself and, in time, the low whisper. Resist the instinct to make the reclaimed quiet productive. It is not for production. It is for presence.",
    ],
    anchor: "Psalm 46:10 &mdash; &ldquo;Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!&rdquo;",
  },
  {
    number: "06",
    title: "Keeping Silence Together &mdash; Shared Stillness in Worship and Friendship",
    summary:
      "A communal practice: recovering deliberate shared silence &mdash; in corporate worship, in small groups, and in friendship &mdash; so that stillness before God becomes something the church does together, not only a private discipline.",
    steps: [
      "In corporate worship, honor the silences that already exist instead of managing them away &mdash; the pause before the service, the space after the sermon, the stillness around the Supper. If you have influence over the liturgy, build in one unhurried silence (ninety seconds is transformative and feels like an eternity the first month) and teach the congregation why: Habakkuk 2:20 &mdash; the LORD is in his holy temple.",
      "In a small group, begin one meeting a month with five minutes of shared silence before God &mdash; no background music, no guided narration. Shared silence is awkward at first precisely because it is intimate: a room full of people consenting together to stop performing. The awkwardness is the threshold, not the verdict.",
      "Practice silence in friendship. Learn from Job&rsquo;s comforters&rsquo; one good week: &ldquo;they sat with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his suffering was very great&rdquo; (Job 2:13). With the grieving, presence outweighs commentary. The ministry of sitting quietly beside someone is a ministry almost no one receives anymore.",
      "Afterward, talk about what happened in the quiet &mdash; what surfaced, what settled, what was heard. Shared silence followed by honest speech knits a community together at a depth that discussion alone never reaches: the group has stopped performing for one another in the presence of God, together.",
    ],
    anchor: "Zephaniah 1:7 &mdash; &ldquo;Be silent before the Lord GOD! For the day of the LORD is near.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Henri Nouwen",
    role: "The Way of the Heart; Out of Solitude &mdash; Silence and the Unmasking of the False Self",
    quote:
      "Silence is the discipline by which the inner fire of God is tended and kept alive&hellip; But silence is above all a quality of the heart that can stay with us even in our conversation with others. It is a portable cell that we carry with us wherever we go, from which we speak to those in need and to which we return after our words have borne fruit.",
    bio: "Henri Nouwen (1932-1996) was a Dutch Catholic priest, psychologist, and one of the most beloved spiritual writers of the twentieth century, whose restless career &mdash; professorships at Notre Dame, Yale, and Harvard &mdash; ended in the place that defined him: L&rsquo;Arche Daybreak in Toronto, a community for people with intellectual disabilities, where the celebrated author spent his final decade as pastor to people who could not read his books. His little classic The Way of the Heart distills the desert fathers&rsquo; spirituality into three words &mdash; solitude, silence, prayer &mdash; and contains his most penetrating analysis of why we avoid the quiet: in silence and solitude the scaffolding of the false self (relevance, popularity, power) comes down, the inner chaos is exposed, and only there can the deeper voice be heard, the one that spoke at the Jordan: you are my beloved. Nouwen wrote about silence as a wounded man rather than a master &mdash; his journals record loneliness, anxiety, and the lifelong ache for affirmation &mdash; and that honesty is precisely his authority: he teaches the discipline from inside the difficulty. His image of silence as a &ldquo;portable cell&rdquo; gave the desert tradition to commuters, and his core insight has only sharpened with the decades: the quiet is where identity is received rather than achieved.",
  },
  {
    name: "Dallas Willard",
    role: "The Spirit of the Disciplines; The Divine Conspiracy &mdash; Solitude and Silence as the Foundational Disciplines",
    quote:
      "Silence is frightening because it strips us as nothing else does, throwing us upon the stark realities of our life. It reminds us of death, which will cut us off from this world and leave only us and God. And in that quiet, what if there turns out to be very little to &lsquo;just us and God&rsquo;? Think what it says about the inward emptiness of our lives if we must always turn on the tape player or radio to make sure something is happening around us.",
    bio: "Dallas Willard (1935-2013) was a professor of philosophy at the University of Southern California for nearly five decades and, improbably from that chair, one of the most influential teachers of Christian spiritual formation in the modern church. His book The Spirit of the Disciplines supplied the theological architecture the renewal movement needed: the disciplines are not merit-earning exercises but training &mdash; arranging life so that grace can do what willpower cannot &mdash; and among them he ranked solitude and its companion silence as &ldquo;generally the most fundamental in the beginning of the spiritual life.&rdquo; Willard&rsquo;s account of why is characteristically unsentimental: constant noise and company keep the false self plausibly employed; silence strips the props and shows us what is actually there, which is why it frightens us and why it is non-negotiable. He practiced long personal retreats of silence and solitude and counseled leaders facing burnout to begin there, famously advising that one must &ldquo;ruthlessly eliminate hurry,&rdquo; since hurry is the great enemy of spiritual life. His vision was never withdrawal for its own sake: the disciple withdraws into quiet with God in order to re-enter ordinary life &mdash; the job, the family, the kingdom at hand &mdash; as a different kind of person.",
  },
  {
    name: "Ruth Haley Barton",
    role: "Invitation to Solitude and Silence; Sacred Rhythms &mdash; The Guide for Restless Modern Souls",
    quote:
      "Solitude is a place. It is a place in time that is set apart for God and God alone, a time when we unplug and withdraw from the noise of interpersonal interactions, from the noise, busyness and constant stimulation associated with life in the company of others. Silence deepens the experience of solitude. In silence we not only withdraw from the demands of life in the company of others but also allow the noise of our own thoughts, strivings and compulsions to settle down so we can hear a truer and more reliable Voice.",
    bio: "Ruth Haley Barton (b. 1960) is the founder of the Transforming Center, a ministry devoted to the spiritual formation of pastors and Christian leaders, and the author of Invitation to Solitude and Silence, the book that has guided more contemporary evangelicals into the practice of silence than perhaps any other. Trained as a spiritual director in a tradition evangelicalism had largely forgotten, Barton writes from the inside of the problem her books address: she describes arriving at the practice as a depleted, overcommitted Christian leader whom a wise mentor diagnosed with the image that became her signature &mdash; a jar of river water, all sediment stirred, that only stillness can clarify. Her teaching is built around Elijah&rsquo;s journey in 1 Kings 19: the exhausted prophet ministered to with sleep and food before words, and met not in wind, earthquake, or fire but in the sound of sheer silence. Barton&rsquo;s particular gift is sequencing &mdash; she offers a patient, staged path into silence for people whose lives and nervous systems are formatted by noise, insisting that the practice begins not with heroic hours but with minutes, faithfully kept. Her work with pastors carries a sober warning the church is slowly hearing: leaders who never enter the silence eventually have nothing left to say worth hearing.",
  },
  {
    name: "Thomas Merton",
    role: "Thoughts in Solitude; New Seeds of Contemplation &mdash; The Monk Who Gave Silence Back to the World",
    quote:
      "There must be a time of day when the man who makes plans forgets his plans, and acts as if he had no plans at all. There must be a time of day when the man who has to speak falls very silent. And his mind forms no more propositions, and he asks himself: Did they have a meaning? There must be a time when the man of prayer goes to pray as if it were the first time in his life he had ever prayed.",
    bio: "Thomas Merton (1915-1968) was a Trappist monk of the Abbey of Gethsemani in Kentucky and the most influential contemplative writer of the twentieth century, whose autobiography The Seven Storey Mountain &mdash; the story of a worldly young intellectual&rsquo;s conversion and flight into monastic silence &mdash; became a postwar phenomenon and drew a generation toward the contemplative life. Merton lived the paradox at the center of his vocation: a man under a rule of silence who could not stop writing, producing more than fifty books from his hermitage, as if the silence itself kept overflowing into speech. His enduring contribution is the insistence that contemplative silence is not the property of monasteries: every person carries a point of pure inner poverty &mdash; le point vierge, he called it &mdash; where the soul meets God beneath all noise, and the deliberate practice of silence is simply the consent to visit it. Merton also saw, earlier and more clearly than almost anyone, what the noise of mass media and frantic activism does to the soul &mdash; his warnings about distraction and the violence of overwork read today like prophecy. In his final years the silence widened his heart rather than narrowing it, opening deep engagement with the civil rights movement, the peace movement, and the contemplatives of Asia. He died in Bangkok in 1968; the monk of silence was, by then, being heard everywhere.",
  },
  {
    name: "Mother Teresa",
    role: "Missionary of Charity &mdash; Silence as the Root of Active Love",
    quote:
      "We need to find God, and he cannot be found in noise and restlessness. God is the friend of silence. See how nature &mdash; trees, flowers, grass &mdash; grows in silence; see the stars, the moon and the sun, how they move in silence&hellip; We need silence to be able to touch souls. The essential thing is not what we say, but what God says to us and through us.",
    bio: "Mother Teresa of Calcutta (1910-1997), born Anjez&euml; Gonxhe Bojaxhiu in Skopje, founded the Missionaries of Charity in 1950 and became the world&rsquo;s most recognized icon of hands-on mercy &mdash; the wrinkled face beside the dying of Calcutta&rsquo;s gutters, Nobel laureate of 1979, canonized in 2016. What the icon obscured, her own teaching insisted on: the activism rested entirely on silence. Her sisters&rsquo; demanding daily schedule was anchored by a non-negotiable hour of silent adoration before the Blessed Sacrament, and she stated the order of operations as a fixed chain: &ldquo;The fruit of silence is prayer. The fruit of prayer is faith. The fruit of faith is love. The fruit of love is service. The fruit of service is peace.&rdquo; Silence stood first; everything the world admired was downstream. The posthumous publication of her letters in Come Be My Light revealed the depth at which she lived this: for roughly fifty years she endured an almost unbroken interior darkness, a felt silence of God himself &mdash; and kept the hour of adoration anyway, loving the divine presence she could no longer feel. Her witness therefore speaks with double authority: to the activist, that love which does not draw from silence runs dry; and to the sufferer in the dark, that faithfulness to the quiet is possible, and fruitful, even when the quiet seems empty.",
  },
  {
    name: "Sister Wendy Beckett",
    role: "Consecrated Hermit; Sister Wendy on Prayer &mdash; The Contemplative Who Taught the World to See",
    quote:
      "Silence is essentially a surrender to the holiness of the divine mystery. We cannot hear God if we are talking, and our talking is so often a defence against hearing. In silence we have nothing to protect us, and that is the point: we are exposed to God, and exposure to God is what prayer is.",
    bio: "Sister Wendy Beckett (1930-2018) was a South African-born British nun who became one of the most improbable television stars of the twentieth century: a consecrated virgin and hermit who lived in a windowless trailer on the grounds of a Carmelite monastery in Norfolk, emerged in her sixties to present BBC documentaries on the history of art, and charmed millions with her toothy smile, wimple, and startlingly perceptive eye. The fame was a thin slice of the life. Sister Wendy&rsquo;s actual vocation, lived for decades, was silence: up at midnight to begin prayer, six or more hours of contemplation daily, a single daily Mass her only community, work limited to a few hours of translating and, later, writing. She insisted the television work was obedience and the trailer was the truth &mdash; and that her capacity to see paintings (and through them, the human heart) was simply what decades of silent attention to God does to a person&rsquo;s eyes. Her little books on prayer are among the most undeceived ever written: prayer, she taught, is not technique or experience-hunting but exposure &mdash; standing defenseless before God in silence and letting him be God. She permitted no romanticizing of her solitude and no pity for it either; she called herself blissfully happy. Her life makes a single, quiet argument: a human being given wholly to silence does not shrink &mdash; she becomes capacious enough to show the whole world how to see.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Psalm 62:1-2",
    text: "For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation, my fortress; I shall not be greatly shaken.",
    reflection:
      "Dumiyyah &mdash; the untranslatable stillness of a soul that has stopped negotiating and started trusting. The qualifier is the theology: God alone. Silence before God is the practical renunciation of every other refuge &mdash; the sound of self-management ceasing. As long as the soul is talking, it is still defending itself; when it goes quiet before God, it has changed fortresses.",
  },
  {
    reference: "1 Kings 19:11-12",
    text: "And behold, the LORD passed by, and a great and strong wind tore the mountains and broke in pieces the rocks before the LORD, but the LORD was not in the wind. And after the wind an earthquake, but the LORD was not in the earthquake. And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper.",
    reflection:
      "Qol demamah daqqah &mdash; a sound of sheer silence. The prophet of spectacle, despairing after his greatest spectacle, is restored not by bigger fire but by the whisper. The passage permanently relocates expectation: God is not obligated to shout over the noise. The servant who would hear him must become quiet enough to notice &mdash; which is the entire case for the discipline of silence in one scene.",
  },
  {
    reference: "Habakkuk 2:20",
    text: "But the LORD is in his holy temple; let all the earth keep silence before him.",
    reflection:
      "The verse closes a satire on idols &mdash; mute gods whose worshipers must do all the talking. Before the living God the order of speech is inverted: he speaks; the earth hushes. Liturgical silence is this verse embodied &mdash; not dead air but protocol, the congregation&rsquo;s confession that God is present and has the floor. A faith that cannot stop talking has quietly forgotten who is in the temple.",
  },
  {
    reference: "Psalm 46:10",
    text: "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
    reflection:
      "The command comes in a psalm of earthquakes and wars &mdash; not a quiet context but a chaotic one. &ldquo;Be still&rdquo; is not a spa instruction; it is a cease-fire order: stop striving, drop the weapons of self-salvation, and know &mdash; in the stillness, as nowhere else &mdash; that God is God and you are not. The knowing is the fruit of the stilling. There are truths about God available only on the far side of the soul&rsquo;s disarmament.",
  },
  {
    reference: "Mark 1:35-37",
    text: "And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed. And Simon and those who were with him searched for him, and they found him and said to him, &ldquo;Everyone is looking for you.&rdquo;",
    reflection:
      "The morning after his most successful day, with the whole town at the door, Jesus is absent &mdash; in the dark, in the desolate place, in the silence. &ldquo;Everyone is looking for you&rdquo; is the permanent voice of demand, and Jesus answers it from the quiet, not from the crowd. If the Son of God arranged his life around silent withdrawal, the disciple&rsquo;s &ldquo;too busy&rdquo; is not a schedule problem but a discipleship problem.",
  },
  {
    reference: "Lamentations 3:25-26",
    text: "The LORD is good to those who wait for him, to the soul who seeks him. It is good that one should wait quietly for the salvation of the LORD.",
    reflection:
      "Spoken from inside the rubble of Jerusalem &mdash; the quiet waiting commended here is not the leisure of the comfortable but the discipline of the devastated. Waiting quietly for the LORD is presented as good in itself, before any outcome arrives. Silence in suffering is not passivity or denial; it is hope&rsquo;s most compressed posture &mdash; the soul holding still in the conviction that God&rsquo;s salvation is coming and cannot be hurried by noise.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "eFGeJDX6Cvo", title: "The Discipline of Silence &mdash; Why the Soul Needs Quiet" },
  { videoId: "eMRdEgPMrAQ", title: "For God Alone My Soul Waits &mdash; Praying Psalm 62" },
  { videoId: "1pbYOIQGtJk", title: "The Desert Fathers &mdash; Hesychia and the School of Stillness" },
  { videoId: "Y3PCY1JPv4M", title: "Elijah at Horeb &mdash; The Sound of Sheer Silence" },
  { videoId: "H6Pj4XSm-1k", title: "Silence and Solitude &mdash; The Twin Disciplines of Withdrawal" },
  { videoId: "1S2gxs6PSDk", title: "Silence in a Noisy Age &mdash; Resisting the Attention Economy" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSilencePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<SILEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [duration, setDuration] = useState("");
  const [whatSurfaced, setWhatSurfaced] = useState("");
  const [whatGodSaid, setWhatGodSaid] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as SILEntry[]);
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
    if (!duration.trim() || !whatSurfaced.trim()) return;
    const entry: SILEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      duration: duration.trim(),
      whatSurfaced: whatSurfaced.trim(),
      whatGodSaid: whatGodSaid.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setDuration("");
    setWhatSurfaced("");
    setWhatGodSaid("");
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
              Stillness &amp; the Listening Heart
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Silence: For God Alone My Soul Waits
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              God was not in the wind, the earthquake, or the fire &mdash; but in a sound of sheer
              silence. In an age engineered to ensure the soul is never quiet, the deliberate practice
              of silence has become both resistance and survival. This guide traces the theology of
              stillness from Psalm 62 and the silences of Jesus through the desert fathers, Elijah at
              Horeb, and Zechariah&rsquo;s nine mute months, and builds the practices by which a noisy
              soul learns to wait for God alone.
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
                &ldquo;For God alone my soul waits in silence; from him comes my salvation. He alone is
                my rock and my salvation, my fortress; I shall not be greatly shaken.&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 62:1-2</p>
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
                Nine studies in the theology of silence &mdash; from the waiting soul of Psalm 62 and
                the rhythmic withdrawals of Jesus, through the desert fathers&rsquo; hesychia and the
                noise economy of the present age, to Elijah&rsquo;s sheer silence, Habakkuk&rsquo;s
                hushed earth, the paired disciplines of silence and solitude, the revealing discomfort
                of the quiet, and Zechariah&rsquo;s nine months of gestating praise.
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
                    dangerouslySetInnerHTML={{ __html: section.badge }}
                  />
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
                  Silence is not the absence of God but one of his favorite addresses &mdash; the
                  posture of Psalm 62, the rhythm of Jesus, the school of the desert, the whisper at
                  Horeb, and the womb of the Benedictus. Go deeper into the paired discipline in{" "}
                  <Link href="/silence-and-solitude" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Silence &amp; Solitude
                  </Link>
                  , learn the contemplative reading of Scripture in{" "}
                  <Link href="/lectio-divina" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Lectio Divina
                  </Link>
                  , or explore the broader practice of stillness in{" "}
                  <Link href="/christian-meditation" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Meditation
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
                Six practices for learning silence in a noisy age &mdash; the daily ten minutes,
                settling the water with breath and word, the extended half-day withdrawal, silence
                wrapped around Scripture, the noise audit, and keeping silence together. Start small;
                the practice is the returning.
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
                  A word about failing at silence
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Everyone fails at silence at first &mdash; the mind races, the body itches for the
                  phone, ten minutes feels like an hour. This is not evidence that you are bad at the
                  practice; it is the practice. Every noticing of distraction and gentle return to
                  quiet is a repetition of the only movement that matters, and the masters of the
                  tradition all testify that the noisy stretch passes for those who stay. The Journal
                  tab is built for the honest record: how long you sat, what surfaced &mdash; without
                  judgment &mdash; and what you sensed God saying, including the times his only word
                  was the gift of quiet presence itself. Over months, the entries become the proof
                  that the water does settle.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses to the discipline of silence &mdash; Nouwen&rsquo;s portable cell,
                Willard&rsquo;s foundational disciplines, Barton&rsquo;s settling jar of river water,
                Merton&rsquo;s overflowing hermitage, Mother Teresa&rsquo;s hour of adoration before
                the slums, and Sister Wendy&rsquo;s six daily hours of exposure to God. Each one
                insists the quiet is where everything else begins.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
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
                Six passages that form the biblical theology of silence &mdash; Psalm 62 and Psalm 46,
                Elijah&rsquo;s whisper at Horeb, Habakkuk&rsquo;s hushed earth, Jesus&rsquo; dark
                early morning, and the quiet waiting of Lamentations. Read one per week alongside the
                Journal practice &mdash; ideally with silence before and after the reading.
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
                  These passages ask to be prayed the way they teach: slowly, with quiet on both
                  sides. Sit in two minutes of stillness, read the text aloud once, and then &mdash;
                  against every instinct &mdash; say nothing. Let the verse have the floor. Notice
                  which phrase remains audible in the silence, and let that phrase be your prayer
                  without enlarging it: &ldquo;For God alone.&rdquo; &ldquo;Be still.&rdquo; &ldquo;A
                  low whisper.&rdquo; The goal is not to extract a lesson but to keep company with the
                  One the texts say is present &mdash; and to practice, for a few minutes, the hushed
                  expectancy they describe.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the honest record of a silence practice &mdash; how long you sat,
                what surfaced in the stillness, and what you sensed God saying (including the gift of
                his quiet presence, which is an answer). Entries are stored privately in your browser.
                No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New silence entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sil-duration" style={labelStyle}>
                    How long I sat in silence
                  </label>
                  <input
                    id="sil-duration"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Ten minutes. Twenty. Three restless minutes that still count..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sil-surfaced" style={labelStyle}>
                    What surfaced &mdash; distractions, emotions, memories
                  </label>
                  <textarea
                    id="sil-surfaced"
                    value={whatSurfaced}
                    onChange={(e) => setWhatSurfaced(e.target.value)}
                    placeholder="The to-do list, the old argument, the unexpected grief. The sediment is not failure — it is the soul becoming visible..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="sil-godsaid" style={labelStyle}>
                    What I sensed God saying &mdash; or the gift of his quiet presence
                  </label>
                  <textarea
                    id="sil-godsaid"
                    value={whatGodSaid}
                    onChange={(e) => setWhatGodSaid(e.target.value)}
                    placeholder="A verse that surfaced, a settled assurance, a question — or simply the quiet itself, which is also an answer..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!duration.trim() || !whatSurfaced.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !duration.trim() || !whatSurfaced.trim() ? BORDER : INDIGO,
                    color: !duration.trim() || !whatSurfaced.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !duration.trim() || !whatSurfaced.trim() ? "not-allowed" : "pointer",
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
                      Sit in the quiet, then record it honestly &mdash; the duration, the sediment
                      that surfaced, and whatever you sensed from God, including his simple presence.
                      Over weeks, these entries become the evidence the practice promises: the water
                      settles, the whisper becomes audible, and the soul learns to wait for God alone.
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
                              {entry.duration}
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
                            What surfaced
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatSurfaced}
                          </p>
                        </div>

                        {entry.whatGodSaid && (
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
                              What God said
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatGodSaid}
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
                Teaching on the discipline of silence &mdash; Psalm 62, the desert fathers, Elijah at
                Horeb, silence and solitude as paired disciplines, and resisting the noise of the
                attention economy. Good companions to the Theology and Practices tabs.
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
              The quiet that is not empty
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The promise of the whole tradition &mdash; from David&rsquo;s dumiyyah to Elijah&rsquo;s
              whisper, from the desert cells to Zechariah&rsquo;s nine mute months &mdash; is that the
              silence the soul fears is in fact inhabited. God is the friend of silence. The noise
              economy will not surrender your attention voluntarily; it must be taken back, ten
              minutes at a time, and given to the One whose low whisper has outlasted every wind,
              earthquake, and fire. Those who keep returning to the quiet find what Zechariah found:
              the silence was never punishment. It was gestation, and what it delivers is praise.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: pair the quiet with withdrawal in{" "}
              <Link href="/silence-and-solitude" style={{ color: INDIGO, textDecoration: "underline" }}>
                Silence &amp; Solitude
              </Link>
              , learn the rhythm of ceasing in the{" "}
              <Link href="/sabbath-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                Sabbath Guide
              </Link>
              , or let stillness become listening prayer in{" "}
              <Link href="/christian-meditation" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Meditation
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
