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

const STORAGE_KEY = "vine_christianmeditation_entries";

interface MDTEntry {
  id: string;
  date: string;
  passage: string;
  whatHeard: string;
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
    badge: "Psalm 1:2",
    title: "Hagah — Meditation as Rumination and Murmuring",
    paragraphs: [
      "The primary Hebrew word for meditation is hagah (הָגָה) — a word that defies the Western idea of quiet, passive contemplation. In the Hebrew Bible hagah means to murmur, moan, mutter, growl. It describes the low, repetitive sounds a lion makes over its prey (Isaiah 31:4), a dove cooing (Isaiah 38:14), and a person murmuring a text under their breath, turning it over and over. When Joshua 1:8 commands Joshua to meditate on the Law day and night, the image is of a man who cannot stop chewing — who returns to the words compulsively, like the ruminant creature returning to its cud, extracting nourishment from what has already been received.",
      "Psalm 1:2 places hagah at the center of the blessed life: &ldquo;his delight is in the law of the LORD, and on his law he meditates day and night.&rdquo; The righteous person is not someone who reads the Bible rapidly and comprehensively but someone who cannot leave it alone — who murmurs it in the morning, returns to it at noon, rolls it around in the mind before sleep. This is not a strategy for information retention. It is the posture of a soul that has fallen in love with what it is reading and keeps returning the way one returns to a conversation that will not stop yielding.",
      "Psalm 119 — the great meditation psalm — uses several related words: siach (to complain, muse, talk to oneself about), suwach (to meditate, muse), and hagah, all pointing to an active, vocal, repetitive engagement with the text. The Psalmist meditates on God&rsquo;s precepts (119:15), his statutes (119:23), his wonderful works (119:27), his decrees (119:99), and his promises (119:148). Biblical meditation is not a technique for inner peace. It is an engagement with a specific, revealed content: who God is and what he has done.",
    ],
    callout: {
      label: "The word",
      text: "Hagah (הָגָה): to murmur, moan, mutter — the repetitive, almost involuntary turning-over of a word or text in the mind and on the lips, as the ruminant animal returns to chew what it has already swallowed.",
    },
  },
  {
    badge: "Filling vs. Emptying",
    title: "Christian Meditation vs. Eastern Meditation — The Crucial Difference",
    paragraphs: [
      "The most important thing to say about Christian meditation is what it is not. Transcendental Meditation, Zen Buddhism, and Vipassana all share a common goal: the emptying of the mind, the detachment of consciousness from its ordinary objects, the dissolution of the ego-self into a state of pure awareness. Some practitioners describe this state as union with the All, contact with the divine ground of being, or simply mental silence. The method is typically a mantra, a breathing technique, or focused non-attachment to arising thoughts.",
      "Christian meditation is the opposite movement. It is not emptying but filling — not the suppression of content but saturation with specific content. The Christian meditates on the words of Scripture (Psalm 1:2), on the works of God in creation and redemption (Psalm 143:5), on the character of God as revealed in Christ (Philippians 4:8). The goal is not a contentless inner silence but the formation of the mind by revealed truth, such that one&rsquo;s thinking, feeling, and acting are gradually shaped by what is actually true about God and the world.",
      "The difference is not merely technique but ontology. Eastern meditation rests on a particular view of reality: the self is not ultimately distinct from the divine; the goal of spiritual practice is to realize this nonduality. Christian meditation rests on the opposite conviction: God is Creator, we are creatures; he is wholly other and yet personally known; relationship is the goal, not absorption. Dallas Willard put it simply: the Christian does not seek to go beyond content and concepts to a formless awareness — the Christian seeks to know the personal God who has spoken in his Word. When Christian meditation borrows Eastern techniques uncritically, it often borrows the anthropology and cosmology that come with them.",
    ],
  },
  {
    badge: "Lectio Divina",
    title: "Sacred Reading — Four Movements Toward God",
    paragraphs: [
      "Lectio Divina (Sacred Reading) is the most ancient and widely practiced structured form of Christian Scripture meditation. Its roots lie in the Desert Fathers of the 4th century, who encouraged the repetitive, prayerful chewing of brief texts. Guigo II, a 12th-century Carthusian prior, gave it its classical four-movement structure in his Ladder of Monks, describing four rungs: reading, meditation, prayer, and contemplation. These are not stages to be completed once and left behind but movements to be cycled through repeatedly with a short passage of Scripture.",
      "The four movements unfold as follows. Lectio (Reading): read a short passage — four to eight verses — slowly, aloud if possible, listening for the word or phrase that strikes you. Do not rush to finish; the goal is not comprehension of the whole but hearing of the particular. Meditatio (Meditation): take the word or phrase that arrested you and chew it. Ask: what does this say about God? What does it say about me? What does it promise, command, warn, or invite? Return to the text repeatedly; stress different words; let the associations come. Oratio (Prayer): respond to God in the first person. Praise what you have seen. Confess where you have fallen short. Ask for what you need. Let the text become the grammar of your prayer.",
      "The fourth movement, Contemplatio (Contemplation), is the one most misunderstood. It does not mean achieving a mystical state. In its classical sense it means simply resting in the One to whom you have just spoken — ceasing from words and being quietly present to God. Protestant theology exercises appropriate caution here, since the contemplative tradition sometimes describes contemplation as moving beyond Scripture and concepts to a wordless union with God. The Reformation rightly insisted that God meets us in his Word, not beyond it. But the posture of quiet receptivity — having spoken, now listening; having been active, now being still — is itself a biblical posture (Psalm 46:10: &ldquo;Be still and know that I am God&rdquo;).",
    ],
    callout: {
      label: "The four movements",
      text: "Lectio (read slowly) — Meditatio (chew, question, turn over) — Oratio (pray in response) — Contemplatio (rest quietly before God).",
    },
  },
  {
    badge: "Psalm 46:10",
    title: "Be Still and Know — The Contemplative Dimension",
    paragraphs: [
      "&ldquo;Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!&rdquo; (Psalm 46:10). The Hebrew behind &ldquo;be still&rdquo; is raphah — to let drop, release, relax, cease striving. The Psalm is set against a backdrop of cosmic upheaval: mountains thrown into the sea, nations raging, kingdoms tottering. In the middle of this, God commands stillness not as passivity but as trust — a ceasing from human striving because of confidence in God&rsquo;s sovereign action. The stillness is the fruit of knowing, and the knowing is the fruit of meditation.",
      "The verse has been used to support contemplative prayer, and in its proper sense it does. There is a quality of resting attention before God — a quietness in which one is not producing content but receiving presence — that belongs to Christian spirituality. The Desert Fathers prized it. The Reformed tradition&rsquo;s rich theology of God&rsquo;s sovereignty and grace supports it: if God is who he says he is, there is a place to rest. Bernard of Clairvaux and the great medieval mystics explored it. Teresa of Ávila described seven degrees of prayer in Interior Castle, in which the soul moves from active discursive prayer toward an increasingly receptive quiet.",
      "The caution, repeatedly voiced by Protestant and evangelical theologians, is that contemplative stillness must remain tethered to revealed truth — to the Word by which God has actually spoken. The stillness that Psalm 46:10 commends is not formless transcendence but restful confidence in the specific God who has revealed himself in Scripture and supremely in Jesus Christ. Meditation that produces a generic spiritual peace untethered from Christ and his Word is not Christian meditation, however peaceful it may be.",
    ],
  },
  {
    badge: "Desert Fathers & Tradition",
    title: "The Contemplative Tradition — Roots in the Ancient Church",
    paragraphs: [
      "The contemplative tradition within Christianity is not a medieval novelty or a borrowing from Eastern religion. It is rooted in the Desert Fathers of 3rd and 4th century Egypt — Anthony, Pachomius, Abba Moses, Amma Syncletica — who withdrew from the decaying Roman world to practice unceasing prayer, Scripture meditation, and contemplative silence in the Egyptian desert. Their collected sayings (the Apophthegmata Patrum) are the oldest treasury of Christian ascetic wisdom, and meditation on Scripture was their central practice.",
      "Ignatius of Loyola (1491-1556) systematized a different form of Christian meditation in his Spiritual Exercises: the contemplation of Gospel scenes through the disciplined use of the imagination. The retreatant enters a Gospel narrative — the nativity, the Last Supper, the crucifixion — using the senses to see, hear, and smell the scene, engaging Christ personally within it. Ignatian contemplation is not passive emptying but active imaginative engagement with the revealed life of Christ, producing affective and volitional response. Teresa of Ávila (1515-1582) and John of the Cross (1542-1591) are the summit figures of the Carmelite contemplative tradition — their Interior Castle and The Dark Night of the Soul map the soul&rsquo;s journey through purification, illumination, and union with God.",
      "The Protestant Reformers inherited the medieval emphasis on Scripture meditation from the monastic tradition but stripped it of the elaborate hierarchical spirituality. The Puritans — especially Thomas Watson, John Owen, Richard Baxter, and Jonathan Edwards — produced some of the richest Protestant theology of meditation. They called it &ldquo;chewing the cud&rdquo; — the daily, disciplined returning to a short text, pressing it for its implications, applying it to conscience, affections, and will. Puritan meditation was Bible-saturated, theologically rigorous, and pastorally warm — a model that contemporary evangelicals are beginning to rediscover.",
    ],
  },
  {
    badge: "Luke 5:16",
    title: "Jesus Withdrew to Pray — The Pattern of the Master",
    paragraphs: [
      "&ldquo;But he would withdraw to desolate places and pray&rdquo; (Luke 5:16). Luke uses the imperfect tense here — a repeated, habitual action, not a single event. Jesus withdrew to desolate places, habitually. This was not emergency retreat in times of crisis but a pattern woven into the rhythm of his ministry. Before the choosing of the twelve (Luke 6:12), he spent the whole night in prayer. Before the feeding of the five thousand, he sought solitude. After the transfiguration, after the healings, in the garden before his arrest — the pattern is unbroken. The one who was himself the Word of God sustained his ministry by listening.",
      "What did Jesus do in those desolate places? Luke does not say, but the Psalms he was formed by were saturated with meditation language. He would have murmured the Psalms, turned the Torah over, sat in the kind of quiet that Isaiah 30:15 describes: &ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo; He modeled for his disciples what it looks like to be both fully engaged with the crowd and fully rooted in solitude — to alternate between the ministry of presence and the replenishment of prayer.",
      "The implication for Christian meditation practice is direct. If Jesus — who was the Son of God, full of the Spirit without measure — sustained his ministry through withdrawal and prayer, then the disciple who is &ldquo;too busy to pray&rdquo; has simply failed to understand what ministry is. Meditation and contemplative prayer are not luxuries for those with leisure. They are the root system of any ministry that will bear lasting fruit. The branch cannot bear fruit unless it abides in the vine (John 15:4).",
    ],
  },
  {
    badge: "Romans 12:2",
    title: "The Renewing of the Mind — Why Evangelicals Have Neglected Meditation",
    paragraphs: [
      "&ldquo;Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect&rdquo; (Romans 12:2). The word for &ldquo;transformed&rdquo; is metamorphoo — the same word used for the transfiguration. Paul envisions the renewing of the mind as a dramatic, ongoing transformation, not a gradual improvement. The mechanism is clear: the mind is renewed not by willpower but by what it habitually meditates on. The mind takes the shape of its sustained attention. A mind given to Scripture meditation for years becomes a mind that naturally thinks in scriptural categories, feels Scripturally calibrated affections, and makes Scripturally shaped choices.",
      "Why have evangelical Christians — who claim the highest regard for Scripture — so often neglected meditation? Several reasons converge. The Reformation&rsquo;s fierce reaction against works-righteousness made many Protestants suspicious of disciplined practices that could look like merit-earning. The activist bent of American evangelicalism prizes doing over being, and meditation looks unproductive. The culture of speed has made the slow, repetitive discipline of meditation feel wasteful. And the post-Enlightenment equation of Bible study with analytical comprehension has trained Christians to read the Bible for information rather than formation.",
      "Eugene Peterson spent decades calling the church back to a meditative reading of Scripture. His translation of the Bible — The Message — was an attempt to slow readers down, to make the text strange enough that it could not be skimmed. His book Eat This Book borrowed the language of Ezekiel 3 and Revelation 10: Scripture is not first to be understood and applied but to be eaten, ingested, allowed to work from the inside. Dallas Willard was equally direct: the transformation Paul describes in Romans 12 does not happen through information alone. It requires the slow saturation of the mind and memory with revealed truth — which is what meditation does.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Lectio Divina — Sacred Reading",
    summary:
      "The ancient four-movement practice: read a short passage slowly, meditate on a single word or phrase, pray in response to what you have heard, and rest quietly before God.",
    steps: [
      "Choose a short passage — four to eight verses from a Psalm, a Gospel narrative, or an epistle. Read it slowly, aloud if you can. Listen for a word or phrase that arrests you.",
      "Read the passage a second time. Chew the word or phrase: what does it say about God? About your own heart? What is the Spirit surfacing? Let associations come without forcing them.",
      "Read the passage a third time. Respond in prayer — praise what is true, confess where you fall short, ask for what you need. Let the text become the grammar of your conversation with God.",
      "Sit quietly for two to five minutes. Cease from words. Simply be present to the One who is always present to you. When the mind wanders, return gently to the word you received.",
    ],
    anchor: "Psalm 1:2 — His delight is in the law of the LORD, and on his law he meditates day and night.",
  },
  {
    number: "02",
    title: "Single-Verse Rumination",
    summary:
      "The Puritan practice of &ldquo;chewing the cud&rdquo; — taking one verse and returning to it throughout the day, stressing different words, pressing it for every implication it will yield.",
    steps: [
      "Each morning, choose a single verse. Write it on an index card. Read it three times, stressing a different word each time: &ldquo;GOD so loved the world,&rdquo; &ldquo;God SO loved,&rdquo; &ldquo;God so loved THE WORLD.&rdquo; Each stress opens new meaning.",
      "Ask seven questions of the verse: What does this reveal about God? About me? About Christ? What does it command? What does it promise? What does it warn against? What does it invite?",
      "Return to the verse at noon, at a natural pause, and before sleep. Do not look at the card again if you can manage without it. Let the memory do the work.",
      "At the end of the day, record one sentence in the Journal tab: the deepest thing the verse yielded over the course of the day. Note what was different about your returning to it at 5 p.m. compared to 7 a.m.",
    ],
    anchor: "Joshua 1:8 — This Book of the Law shall not depart from your mouth, and you shall meditate on it day and night.",
  },
  {
    number: "03",
    title: "Praying the Psalms",
    summary:
      "The Psalter as personal prayer — reading a Psalm aloud, making its words your own, and letting its full range of emotion become the vocabulary of your approach to God.",
    steps: [
      "Read the Psalm slowly, aloud. The Psalms were written to be spoken; hear yourself say the words and notice what they feel like in your throat and chest.",
      "Where the Psalmist uses &ldquo;I&rdquo; and &ldquo;my,&rdquo; speak it as your own prayer. Where he laments, lament. Where he praises, praise. Where he is confused, be confused before God — do not edit the Psalm toward the emotion you think you should feel.",
      "When the Psalm is finished, pause. What line stayed with you? Stay with it in silence for two minutes. Let it continue working.",
      "Use a Psalm sequence — working through 1, 2, 3 in order — so that over thirty days you have prayed the whole breadth of human experience before God. If you follow the Daily Office, the Psalter typically completes in 30 days.",
    ],
    anchor: "Psalm 19:14 — Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.",
  },
  {
    number: "04",
    title: "Ignatian Gospel Contemplation",
    summary:
      "Entering a Gospel narrative through the disciplined use of the imagination — seeing, hearing, and responding to the living Christ within the scene he inhabits.",
    steps: [
      "Choose a short Gospel narrative: the healing of the blind man, Jesus with Zacchaeus, the woman at the well, the feeding of the five thousand. Read it once for comprehension.",
      "Close your eyes. Place yourself in the scene using all five senses: what do you see? Hear? Smell? What is the temperature? Where are you standing — in the crowd, on the edge, near Jesus?",
      "Watch what Jesus does and says. Let yourself respond: ask him a question, receive his gaze, hear his words as addressed to you. Do not script the encounter; let it unfold.",
      "Come out of the scene and reflect: what was Jesus like? What stirred in you — longing, fear, joy, conviction? Record it in the Journal tab. This is devotional imagination, not exegesis; its goal is encounter, not interpretation.",
    ],
    anchor: "Luke 5:16 — But he would withdraw to desolate places and pray.",
  },
  {
    number: "05",
    title: "The Daily Examen",
    summary:
      "Ignatius&rsquo;s five-step practice of reviewing the day in the presence of God — finding where God was present and where you moved away from him.",
    steps: [
      "Begin in silence. Become aware of God&rsquo;s presence. Ask the Holy Spirit for light to see the day clearly.",
      "Review the day with gratitude: walk through it hour by hour. Where did you receive grace? What gifts did you overlook? Give thanks specifically, not generically.",
      "Look for the movements of the day: consolations (moments of life, love, peace, drawing toward God) and desolations (agitation, self-focus, movement away from God). What patterns emerge?",
      "Choose one moment — a consolation or desolation — and bring it fully before God. Confess what needs confessing. Receive what is offered. Ask for wisdom. Then look to tomorrow: commit it to God and rest.",
    ],
    anchor: "Psalm 4:4 — Ponder in your own hearts on your beds, and be silent.",
  },
  {
    number: "06",
    title: "Memorization as Meditation",
    summary:
      "Scripture memorization as the foundation of all-day meditation — so that the mind has something to chew on wherever it is, without a Bible in hand.",
    steps: [
      "Choose a short, rich passage: a Psalm, a Gospel saying, a passage from the epistles. Aim for completeness — whole paragraphs rather than isolated verses stripped of context.",
      "Memorize slowly. Say the first phrase until you can say it without looking. Add the second. Work in small units — five or six words — and do not move forward until the previous unit is secure.",
      "Return to the passage throughout the day in your mind, not only in your morning time. This is the mechanism of all-day meditation: the verse is in working memory and surfaces during driving, walking, washing dishes.",
      "Review the passage weekly, even after it feels secure. The goal is not performance recall but saturation — that the words become so native to the mind that they arise spontaneously when circumstances call for them.",
    ],
    anchor: "Psalm 119:11 — I have stored up your word in my heart, that I might not sin against you.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Thomas Merton",
    role: "Trappist Monk, Author — New Seeds of Contemplation",
    quote:
      "Contemplation is the highest expression of man's intellectual and spiritual life. It is that life itself, fully awake, fully active, fully aware that it is alive. It is spiritual wonder. It is spontaneous awe at the sacredness of life.",
    bio: "Thomas Merton (1915-1968) entered the Abbey of Gethsemani in Kentucky in 1941 and became the most widely read Catholic spiritual writer of the 20th century. His Seven Storey Mountain (1948) introduced a generation of post-war readers to the contemplative life. New Seeds of Contemplation remains the richest English-language account of Christian meditation&rsquo;s interior landscape. Merton was also a tireless correspondent with Protestant, Eastern Orthodox, and Buddhist teachers, seeking what was genuinely Christian in the contemplative tradition across traditions. Evangelical readers should read him critically but generously: his commitment to the personal, trinitarian God of Scripture is real, even when his late openness to Buddhist dialogue raises questions.",
  },
  {
    name: "Dallas Willard",
    role: "Philosopher, Spiritual Formation Teacher — The Spirit of the Disciplines",
    quote:
      "We must understand that God does not love us without knowing us. He knows us entirely, not just our nice parts, and he loves what he knows. The practice of meditation opens us to being known more fully.",
    bio: "Dallas Willard (1935-2013) — philosopher at USC, evangelical pastor&rsquo;s son, and the most rigorous modern theologian of spiritual formation — argued throughout his career that the spiritual disciplines (including meditation and contemplative prayer) are not optional additions for serious Christians but the means by which disciples actually become like Christ. In The Spirit of the Disciplines and Renovation of the Heart, Willard placed meditation squarely in the evangelical tradition while insisting that it was deeply underused and misunderstood. He was careful to distinguish Christian meditation from its Eastern forms while refusing to abandon the practice to the mystics. His framework: the disciplines are training in grace, not earning of grace; meditation trains the mind for the transformation Romans 12:2 describes.",
  },
  {
    name: "Richard Foster",
    role: "Quaker Theologian — Celebration of Discipline",
    quote:
      "Christian meditation, very simply, is the ability to hear God's voice and obey his word. It is the pioneer of prayer, the revealer of the will of God, the sanctifier of the heart and mind.",
    bio: "Richard Foster&rsquo;s Celebration of Discipline (1978) is the book most responsible for reintroducing the classical Christian spiritual disciplines — including meditation — to Protestant evangelicals. His chapter on meditation carefully distinguished Christian from Eastern meditation while drawing on the full range of the Christian tradition: the Desert Fathers, Ignatius, the Puritans, the Quakers. Foster&rsquo;s Renovaré movement has since produced one of the richest ecumenical spirituality curricula available, grounded in the conviction that the church has resources across its history that contemporary Christians desperately need. He is sometimes criticized for drawing too uncritically on Catholic mysticism, but his commitment to Scripture as the content of Christian meditation is clear.",
  },
  {
    name: "Teresa of Ávila",
    role: "Carmelite Mystic — Interior Castle (1577)",
    quote:
      "Prayer is nothing else but a close sharing between friends; it means taking time frequently to be alone with him who we know loves us.",
    bio: "Teresa of Ávila (1515-1582), Spanish Carmelite nun and Doctor of the Church, wrote Interior Castle as a map of the soul&rsquo;s journey through seven &ldquo;mansions&rdquo; of prayer — from the outer courts of distracted, self-preoccupied prayer to the inner chamber of what she called the prayer of union with God. Her genius was psychological precision: she described the movements of the interior life — dryness, distraction, consolation, and the terrifying stripping away of spiritual props — with a candor that strikes modern readers as contemporary. She is the patron saint of the people who pray and feel nothing: she prayed &ldquo;infelt&rdquo; for nearly twenty years before what she called &ldquo;the water began to flow.&rdquo; Protestant readers should engage her with appropriate doctrinal caution but genuine appreciation for her unmatched account of persevering in prayer.",
  },
  {
    name: "John of the Cross",
    role: "Carmelite Mystic — The Dark Night of the Soul (c. 1578)",
    quote:
      "To reach satisfaction in all, desire satisfaction in nothing. To come to possess all, desire the possession of nothing. To arrive at being all, desire to be nothing.",
    bio: "John of the Cross (1542-1591), Teresa of Ávila&rsquo;s younger colleague and the finest theologian of the contemplative tradition, wrote The Dark Night of the Soul and The Ascent of Mount Carmel while imprisoned by his own Carmelite superiors. His theme is the painful but purifying stripping away of all spiritual consolations — the withdrawal of felt sensory and spiritual experience — that God uses to deepen faith. The &ldquo;dark night&rdquo; is not depression but purgation: the soul being prepared for a deeper, less self-reliant union with God. His poetry, written in the same prison cell, is among the greatest in the Spanish language. For Christians in seasons of spiritual dryness, John of the Cross offers the unusual comfort of a rigorous theology of why feeling nothing in prayer is not the end of prayer.",
  },
  {
    name: "Eugene Peterson",
    role: "Pastor, Scholar — Eat This Book; The Message",
    quote:
      "The Bible is not a book of theological propositions, not primarily. It is a story, a poem, a prayer. It asks to be entered, participated in, prayed. Reading it in this mode is what we call lectio divina.",
    bio: "Eugene Peterson (1932-2018) — pastor of a small Presbyterian congregation in Maryland for thirty years, then professor of spiritual theology — spent his career insisting that the Bible is primarily to be prayed and lived, not merely studied and explained. Eat This Book (2006) is his sustained argument for lectio divina as the normative Protestant approach to Scripture: slow, meditative, prayerful reading that allows the text to read the reader. His translation of the Bible into contemporary American idiom — The Message — was itself an act of meditation: thirty years of sitting with the text until it could be said in a new register without loss. Peterson is the evangelical world&rsquo;s most articulate case that rigorous biblical scholarship and deep contemplative practice belong together, and that their separation has impoverished both.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Psalm 1:1-2",
    text: "Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the LORD, and on his law he meditates day and night.",
    reflection:
      "The blessed life begins not with great achievement but with a posture: turning away from one set of voices and turning toward another. The meditating person is contrasted with the wicked not in their moral performance but in their sustained attention. What we meditate on, we become. The Psalm does not promise that meditation will be easy or immediately rewarding — it promises that the meditating person will be like a tree planted by streams: deeply rooted, quietly nourished, fruit-bearing in season.",
  },
  {
    reference: "Psalm 46:10",
    text: "Be still and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
    reflection:
      "Stillness here is not absence of activity but cessation of striving — the release that comes from trust. The Hebrew raphah means to let drop, let go, release. It is commanded in the middle of a Psalm about cosmic upheaval precisely because the stability it offers is not circumstantial but theological: God will be exalted. The meditating soul does not achieve this stillness by technique; it arrives at it by the sustained weight of truth about who God is. The knowledge precedes the stillness, or rather the two grow together.",
  },
  {
    reference: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    reflection:
      "The transformation Paul describes is metamorphoo — a word of radical change, not gradual improvement. The mechanism is the renewing of the mind. The mind is not renewed by deciding to think differently. It is renewed by sustained saturation in truth — by what it habitually attends to. This is the New Testament&rsquo;s theology of meditation: not a technique for inner peace but the slow, daily formation of a mind increasingly capable of discernment.",
  },
  {
    reference: "Philippians 4:8",
    text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
    reflection:
      "Think about — the Greek is logizomai: to reckon, calculate, set one&rsquo;s mind on. Paul gives a list of what the meditative mind is to attend to: truth, honor, justice, purity, beauty, excellence, praise. This is a curriculum for meditation. The mind left to its own devices meditates on grievance, comparison, desire, and fear. The transformed mind is trained to turn — deliberately, repeatedly — toward the excellent things. Scripture is not the only content of Christian meditation; creation, beauty, and the character of God as displayed in every good thing are also its material.",
  },
  {
    reference: "Joshua 1:8",
    text: "This Book of the Law shall not depart from your mouth, and you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.",
    reflection:
      "The command is to Joshua as he inherits an impossible task: leading Israel into a land full of enemies, with a people full of resistance. God&rsquo;s prescription is not superior military strategy but Scripture meditation — not departing from the mouth (verbal murmuring), not departing from the mind (day and night meditation). The prosperity and success promised are not material rewards but the fruit of a mind so formed by God&rsquo;s Word that it consistently does what that Word says. Obedience is the fruit; meditation is the root.",
  },
  {
    reference: "Psalm 119:97-99",
    text: "Oh, how I love your law! It is my meditation all the day. Your commandment makes me wiser than my enemies, for it is ever with me. I have more understanding than all my teachers, for your testimonies are my meditation.",
    reflection:
      "The meditation the Psalmist describes is not a scheduled appointment with Scripture but a continuous, waking occupation — the text is ever with him, is his meditation all the day. The result is wisdom that exceeds his enemies and understanding that surpasses his teachers. This is not intellectual smugness but the Psalmist&rsquo;s testimony to the formative power of prolonged, loving attention to God&rsquo;s Word: a mind shaped by it over years thinks differently, sees differently, and chooses differently.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "X3O9Bs7LkbI", title: "What Is Christian Meditation?" },
  { videoId: "VzLhMRnXqMg", title: "Lectio Divina: How to Pray with Scripture" },
  { videoId: "HVpY0e-t-08", title: "Biblical Meditation vs. Eastern Meditation" },
  { videoId: "nKqKoHxCrDE", title: "Dallas Willard on Meditation and Spiritual Formation" },
  { videoId: "0Yx1kW4DLWE", title: "The Examen — A Prayer Practice for Every Day" },
  { videoId: "uMnBuHpCOkE", title: "Be Still: Psalm 46 and the Contemplative Life" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianMeditationPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<MDTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [passage, setPassage] = useState("");
  const [whatHeard, setWhatHeard] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as MDTEntry[]);
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
    if (!passage.trim() || !whatHeard.trim()) return;
    const entry: MDTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      passage: passage.trim(),
      whatHeard: whatHeard.trim(),
      response: response.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPassage("");
    setWhatHeard("");
    setResponse("");
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
              Contemplative Life
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Be Still: Christian Meditation and the Listening Heart
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Biblical meditation is ancient, commanded, and transformative — and it is the opposite of
              emptying the mind. The Hebrew word{" "}
              <em style={{ color: TEXT }}>hagah</em> means to murmur and ruminate, as a ruminant
              returns to its cud. Christian meditation fills the mind with revealed truth through
              Scripture, prayer, and quiet attention, forming a heart that can hear the voice of God
              and respond.
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
                &ldquo;Be still, and know that I am God. I will be exalted among the nations,
                I will be exalted in the earth!&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 46:10</p>
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
                Before it is a practice, Christian meditation is a conviction: God has spoken, and his
                speech is alive. These seven studies trace the biblical and historical foundations of
                meditation — from the Hebrew word hagah to the Desert Fathers, from lectio divina to
                the Puritan tradition and the evangelical renewal of contemplative practice.
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
                  Hagah and lectio divina and the Puritan rumination and the Ignatian contemplation are
                  not competing methods but variations on a single conviction: the living God has spoken,
                  and his speech deserves slow, repeated, reverent attention. The mind formed by that
                  attention becomes the mind that Paul describes in Romans 12 — renewed, discerning,
                  capable of proving what is the will of God. Explore the related practice of{" "}
                  <Link href="/christian-prayer" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Prayer
                  </Link>{" "}
                  or go deeper on the Word with{" "}
                  <Link href="/bible-study" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Bible Study
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
                Six structured approaches to Scripture meditation — from the ancient four-movement
                lectio divina to the Puritan single-verse rumination to the Ignatian Gospel
                contemplation. Start with one and give it three weeks before evaluating. The Journal
                tab is built to accompany whichever practice you choose.
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
                  A word about dryness
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Every meditating person encounters extended seasons in which nothing seems to happen —
                  the words feel like words, the silence feels like silence, and God feels absent. John
                  of the Cross called this the dark night of the senses. Teresa of Ávila spent nearly
                  twenty years in it. The Desert Fathers considered the resistance to returning to
                  prayer in dryness (what they called acedia) the primary temptation of the
                  contemplative life. The counsel of the tradition is uniform: return anyway. The
                  discipline is most valuable precisely when the reward is least felt. What grows in
                  dryness is not feeling but faithfulness, which is the deeper thing.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers — spanning fifteen centuries, multiple traditions, and very different
                temperaments — who have illuminated the interior life of Christian meditation. Read
                them carefully, with discernment, and with gratitude for what the whole church has
                been given.
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
                  >
                    {voice.role}
                  </div>
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
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages that command, model, and describe biblical meditation. Read each slowly
                before the reflection. Consider taking one per week and using it as your single-verse
                rumination for those seven days.
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to use these passages
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Do not read all six in a sitting. Take one. Read it three times: once for meaning,
                  once for what arrests you, once in silence. Sit with the arrested word for five
                  minutes. Write one sentence in the Journal tab: what you heard. Come back to the
                  same passage tomorrow. Let it teach you something new. The Psalmist says the blessed
                  person meditates day and night — not because he is a spiritual professional, but
                  because he has discovered that the text will not stop yielding if he will not stop
                  returning.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                A record of your meditation sessions: the passage you sat with, what you heard from
                God in it, and your response. Entries are saved privately in your browser. No one
                sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s meditation entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mdt-passage" style={labelStyle}>
                    Passage meditated on
                  </label>
                  <input
                    id="mdt-passage"
                    type="text"
                    value={passage}
                    onChange={(e) => setPassage(e.target.value)}
                    placeholder="e.g. Psalm 46:10, John 15:1-5, Romans 12:2"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mdt-heard" style={labelStyle}>
                    What you heard from God in it
                  </label>
                  <textarea
                    id="mdt-heard"
                    value={whatHeard}
                    onChange={(e) => setWhatHeard(e.target.value)}
                    placeholder="What word, image, conviction, or comfort surfaced as you sat with this passage?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="mdt-response" style={labelStyle}>
                    Your response
                  </label>
                  <textarea
                    id="mdt-response"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="What did you pray, surrender, commit, or receive as a result of this meditation?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!passage.trim() || !whatHeard.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !passage.trim() || !whatHeard.trim() ? BORDER : INDIGO,
                    color: !passage.trim() || !whatHeard.trim() ? MUTED : "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !passage.trim() || !whatHeard.trim() ? "not-allowed" : "pointer",
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
                      Choose a passage, sit with it for ten minutes, and write one sentence about
                      what you heard. Come back tomorrow and do the same. This is how the meditating
                      life is built.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: INDIGO, marginBottom: 2 }}>
                              {entry.passage}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.passage}`}
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
                            What I heard
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatHeard}
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
                              My response
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
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
                Teaching to watch slowly — on biblical meditation, lectio divina, the contemplative
                tradition, and the interior life. Good companions to the Theology and Practices tabs.
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
              The meditating life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Christian meditation is not a program to complete but a posture to inhabit —
              a slow turning toward the God who is always speaking, always present, always yielding
              more to those who return. The Psalmist says the meditating person is like a tree
              planted by streams. Trees do not grow fast. They grow deep, and deep growth holds when
              the drought comes. Begin small — one verse, ten minutes, one return. Let the practice
              accumulate. The transformation Romans 12 describes is real, but it happens on God&rsquo;s
              schedule and through means that look unhurried.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link href="/christian-prayer" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Prayer
              </Link>
              , practice fasting with our{" "}
              <Link href="/christian-fasting" style={{ color: INDIGO, textDecoration: "underline" }}>
                Fasting guide
              </Link>
              , or study the Word with the{" "}
              <Link href="/bible-study" style={{ color: INDIGO, textDecoration: "underline" }}>
                Bible Study guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
