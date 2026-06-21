"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_christianfasting_entries";

interface FSTEntry {
  id: string;
  date: string;
  fastType: string;
  intention: string;
  whatGodDid: string;
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
    badge: "Matthew 6:16-18",
    title: "&ldquo;When You Fast&rdquo; — Jesus Assumes It",
    paragraphs: [
      "&ldquo;When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen&rdquo; (Matthew 6:16-18). The grammar of the Sermon on the Mount is decisive. Jesus does not say &ldquo;if you fast&rdquo; — a conditional that would leave fasting optional. He says &ldquo;when you fast,&rdquo; placing fasting in the same category as prayer (Matthew 6:5, &ldquo;when you pray&rdquo;) and giving (Matthew 6:2, &ldquo;when you give&rdquo;). For Jesus, fasting was a normal, assumed dimension of the disciple&rsquo;s life, as unremarkable as prayer.",
      "The context of the Sermon is crucial. Jesus is not introducing fasting as a new practice; he is reforming it. The Pharisees fasted publicly, twice a week (Luke 18:12), as an expression of religious status. Jesus insists that fasting, like all true piety, is between the soul and God — invisible to human observers, seen only by the Father who rewards in secret. The instruction is about motive and audience, not about whether to fast. His disciples were expected to fast, as the question in Matthew 9:14 assumes: the disciples of John fast — why don&rsquo;t yours? Jesus answers that they will fast when the Bridegroom is taken from them. The Bridegroom is now absent. Christians fast.",
      "The universal practice of the early church confirms this reading. The Didache (c. 100 AD) — the earliest surviving Christian manual of practice — prescribes fasting on Wednesdays and Fridays rather than the Pharisaic Mondays and Thursdays. The early church fathers treat fasting as self-evident. The Council of Nicaea (325 AD) assumed its practice in canon law. The absence of fasting in contemporary Western Christianity is not a sign of spiritual maturity or Reformed freedom from works-righteousness — it is a sign of comfort, affluence, and the dulling of spiritual hunger that comes with a life never emptied in order to be filled.",
    ],
  },
  {
    badge: "Isaiah 58:1-12",
    title: "True and False Fasting — What God Requires",
    paragraphs: [
      "Isaiah 58 is the most demanding passage in the Bible about fasting, and the most often overlooked. The people of Israel fast and God does not respond; they complain that God has ignored their devotion. God&rsquo;s answer is devastating: &ldquo;You cannot fast as you do today and expect your voice to be heard on high&rdquo; (58:4). The reason is not that fasting is wrong but that their fasting is disconnected from righteousness. They fast and simultaneously oppress their workers. They humble themselves before God and maintain their injustice before their neighbors.",
      "The fast God requires is described in verses 6-7: &ldquo;Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter — when you see the naked, to clothe them, and not to turn away from your own flesh and blood?&rdquo; The true fast is not an isolated spiritual exercise performed on an empty stomach. It is the total orientation of a life toward God&rsquo;s priorities — the breaking of injustice, the feeding of the hungry, the sheltering of the stranger. Fasting that is disconnected from justice and mercy is precisely what God refuses.",
      "Isaiah 58:8-12 describes what follows the true fast: &ldquo;then your light will break forth like the dawn... then you will call and the LORD will answer.&rdquo; The blessings promised — healing, righteousness, God&rsquo;s nearness, the rebuilding of ancient ruins — are the fruit of a fasting that is truly integrated with the whole life. This passage is the permanent corrective to any fasting that becomes spiritual self-indulgence — a private devotional exercise that soothes the conscience while the neighbor goes unfed. Fasting in the Old Testament is never separable from the care of the poor.",
    ],
    callout: {
      label: "The test",
      text: "Isaiah 58:6-7: Is your fasting loosing the bonds of injustice, feeding the hungry, sheltering the wanderer? A fast that ignores the neighbor is a fast God refuses.",
    },
  },
  {
    badge: "Mark 9:29",
    title: "Fasting and Prayer as Spiritual Warfare",
    paragraphs: [
      "When Jesus casts out the demon the disciples could not defeat, they ask him privately why they had failed. His answer in Mark 9:29 — &ldquo;This kind cannot be driven out by anything but prayer&rdquo; (with many manuscripts adding &ldquo;and fasting&rdquo;) — points to a dimension of fasting that Isaiah 58 and Matthew 6 do not address: fasting as warfare. Some forms of spiritual resistance are broken not by ordinary prayer and faith but by the intensified seeking that combines prayer with fasting. The disciples&rsquo; failure was not a failure of technique but a failure of dependence — they had attempted exorcism without radical reliance on God.",
      "The warfare theology of fasting runs throughout the Bible. Moses fasted forty days before receiving the Torah (Deuteronomy 9:9) and again after Israel&rsquo;s idolatry (Deuteronomy 9:18) — fasting as intercession before God in moments of cosmic consequence. Elijah fasted forty days in the wilderness at a moment of personal and national spiritual collapse (1 Kings 19:8). Daniel fasted to break through a spiritual resistance that had delayed the answer to his prayers for three weeks (Daniel 10:13). The Ninevites fasted corporately in response to Jonah&rsquo;s preaching, and God relented (Jonah 3:5-10). Fasting in these narratives is not a technique for manipulating God but an expression of radical, urgent, embodied seeking in moments when the stakes are high.",
      "For contemporary Christians, fasting as warfare means choosing to fast in moments of genuine spiritual urgency — for a prodigal child, for a church facing crisis, for a mission about to be sent, for a city or nation in need of revival. The physical hunger of the fast becomes the body&rsquo;s way of saying: I mean this. This prayer is not incidental. I am willing to be uncomfortable for the sake of what I am seeking. The coincidence of bodily need and spiritual petition is, in the biblical imagination, a form of spiritual power.",
    ],
  },
  {
    badge: "Joel 2:12 / Ezra 8:21",
    title: "Corporate Fasting in the Old Testament",
    paragraphs: [
      "&ldquo;Yet even now,&rdquo; declares the LORD, &ldquo;return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments&rdquo; (Joel 2:12). Joel calls the whole community — elders, children, nursing infants, the bridegroom, the bride — to a sacred assembly of corporate fasting and prayer in response to the locust plague and the coming Day of the LORD. This is not a private spiritual exercise but a communal act of repentance: the people&rsquo;s hunger is their corporate body language of turning, and the prophet promises that God may relent (Joel 2:13-14).",
      "Ezra 8:21-23 records a specific, historic act of corporate fasting: &ldquo;I proclaimed a fast there, at the river Ahava, that we might humble ourselves before our God, to seek from him a safe journey for ourselves, our children, and all our goods.&rdquo; Ezra had told the king that God&rsquo;s hand was favorable to those who seek him. Now, about to travel through bandit country with enormous wealth, he is unwilling to ask the king for a military escort — it would undercut his testimony. Instead he calls a corporate fast. The people fast and pray, and God grants them safe passage. Corporate fasting here is an act of public witness: the community puts its body where its testimony is.",
      "The Old Testament pattern of corporate fasting — Nehemiah 9, Esther 4, 1 Samuel 7, 2 Chronicles 20 — shows that fasting was the community&rsquo;s natural response to crisis, threat, and the need for God&rsquo;s intervention in history. The local church that never fasts together — that fasts only when individuals feel personally moved — is missing one of the primary postures of the covenant community before God.",
    ],
  },
  {
    badge: "2 Samuel 12",
    title: "Fasting and Grief — The Fast of Mourning",
    paragraphs: [
      "David fasted for seven days when his infant son, born of his adultery with Bathsheba, lay dying (2 Samuel 12:15-23). His servants could not understand why he ate while the child lived but stopped when the child died — the reverse of the expected pattern. David&rsquo;s explanation is startling in its theological clarity: &ldquo;While the child was still alive, I fasted and wept. For I said, &lsquo;Who knows whether the LORD will be gracious to me, that the child may live?&rsquo; But now he is dead. Why should I fast? Can I bring him back again? I shall go to him, but he will not return to me.&rdquo;",
      "David&rsquo;s fast was not a technique for obtaining a desired outcome. It was the natural bodily expression of grief, urgency, and hope before God. While there was reason to seek God&rsquo;s intervention, David&rsquo;s whole body sought it — including his stomach. When the reason for the fast was gone, the fast ended. This captures something important about fasting as a response to grief more broadly: the corporate fasts of Isaiah 58, Joel 2, and Nehemiah 9 are all responses to a sacred moment of loss or threat — moments when the soul&rsquo;s distress is so great that the body joins the mourning.",
      "Scot McKnight, in his careful study of the biblical data, concludes that this is the primary biblical context for fasting: response to a grievous sacred moment. Fasting is not a spiritual technique to be deployed on a schedule. It is what the body naturally does when the soul has been struck by something overwhelming — grief, urgency, repentance, the weight of an intercession. The person who only fasts on schedule has perhaps not yet felt anything heavy enough to make eating seem beside the point.",
    ],
  },
  {
    badge: "Acts 13:2-3",
    title: "Fasting and Discernment — The Sending of Barnabas and Saul",
    paragraphs: [
      "&ldquo;While they were worshiping the Lord and fasting, the Holy Spirit said, &lsquo;Set apart for me Barnabas and Saul for the work to which I have called them.&rsquo; So after they had fasted and prayed, they placed their hands on them and sent them off&rdquo; (Acts 13:2-3). This is one of the most consequential moments in the history of the church: the first deliberate, systematic missionary sending in the New Testament. What preceded it was worship and fasting. The Spirit&rsquo;s direction came in the context of a community seeking God with undivided attention — with the body&rsquo;s hungers suspended so that one hunger might dominate.",
      "The early church consistently combined fasting with major decisions and commissionings. When Paul and Barnabas appointed elders in the newly planted churches, they did so &ldquo;with prayer and fasting&rdquo; (Acts 14:23). The pattern suggests that fasting was the community&rsquo;s way of creating a kind of spiritual emergency — a sustained state of heightened seeking in which the community was more available to God&rsquo;s direction than it would have been in the ordinary rhythm of eating and ordinary activity. Fasting does not manipulate God into speaking; it quiets the noise that prevents hearing.",
      "For discernment in major life decisions — a vocation, a marriage, a move, a ministry commitment — fasting offers a body-level seriousness that mental deliberation alone cannot achieve. The person who prays about a major decision while eating normally has given the decision to his mind and his spirit. The person who also fasts has given it to his body — and the body&rsquo;s participation in the seeking changes the quality of the seeking.",
    ],
  },
  {
    badge: "Types & Cautions",
    title: "What Fasting Is and Is Not — Types and Misconceptions",
    paragraphs: [
      "The Bible describes several types of fasting. The absolute fast — total abstinence from food and water for a short period — appears rarely and in extreme circumstances (Esther 4:16, Acts 9:9). The normal fast — abstaining from food but drinking water — is the most common biblical form. The partial fast — restricting certain foods rather than abstaining entirely — is represented by the Daniel fast (Daniel 10:3: no choice food, meat, or wine for three weeks). Regular fasting — a weekly or twice-weekly rhythm — was the practice of the Pharisees and apparently the early church. Occasional fasting — in response to a specific circumstance or call — is the dominant biblical pattern. Most serious Christian teachers recommend beginning with partial or one-meal fasts before attempting extended fasts.",
      "Christian fasting is not dieting. It is not a weight-loss strategy, a health regimen, or a discipline for strengthening willpower. The physical benefits may be real, but they are incidental; fasting undertaken for its own physical benefits is not fasting in the biblical sense. Christian fasting is not earning God&rsquo;s favor. The Reformed tradition is right to insist that fasting has no merit before God — it does not make us more deserving of answered prayer or more acceptable to him. Isaiah 58 makes this devastatingly clear: God can refuse a fast. Fasting is not a technique for obtaining results; it is an expression of hunger for God himself, which is its own reward.",
      "Christian fasting is not for everyone in the same form. Those with eating disorders, certain medical conditions, or pregnancy should consult with a doctor before fasting. Many find that a partial fast — giving up one category of food or one category of media (social media, entertainment) — is the appropriate starting point. The question is not whether you are fasting in the most demanding way possible. It is whether you are cultivating genuine hunger for God that expresses itself in some form of voluntary deprivation. Why do modern Christians rarely fast? Dallas Willard asked this question throughout his career. His answer: because we are full. We do not feel the urgency, the hunger, the sense that something essential is at stake. The church that recovers fasting will first have to recover its sense of what is at stake.",
    ],
    callout: {
      label: "Types of fasting",
      text: "Absolute (no food or water), Normal (water only), Partial (restricted diet — the Daniel fast), Regular (weekly rhythm), Occasional (in response to a specific call or circumstance).",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The First Fast — Beginning Faithfully",
    summary:
      "Starting where you are, not where you wish you were. The first fast is small, intentional, and rooted in a specific reason for seeking God.",
    steps: [
      "Begin with a partial fast: skip one meal, or fast from breakfast through noon. Drink water. Do not begin with a 24-hour or multi-day fast if you have not fasted before — build the habit gradually.",
      "Choose a specific intention before you begin. What are you bringing to God? A decision, a relationship, a grief, a sin pattern, a need in your church or community? Name it. Write it down.",
      "Use the time you would have spent eating for prayer and Scripture meditation. The physical reminder of hunger is the alarm clock: when your stomach speaks, return to your intention and pray.",
      "Break the fast with a meal that is simple and eaten slowly. Thank God for food, for the fast, and for whatever he met you with during it. Record the experience in the Journal tab.",
    ],
    anchor: "Matthew 6:16-18 — When you fast... your Father, who sees what is done in secret, will reward you.",
  },
  {
    number: "02",
    title: "The Weekly Fast — A Rhythm of Hunger",
    summary:
      "Establishing a regular, weekly fast day that creates a recurring space of heightened seeking in the ordinary rhythm of the Christian life.",
    steps: [
      "Choose a day — Wednesday or Friday follows the early church&rsquo;s pattern (Didache). Mark it in your calendar as a fast day for the next month. Protect it as you would any appointment with God.",
      "Decide what your weekly fast will look like: skipping breakfast and lunch, fasting until evening prayer, or a partial fast of one category of food. The form matters less than the consistency.",
      "Use the fast day for extended prayer, Scripture meditation, and intercession for your church, your city, and those on your heart. Make it the most prayer-saturated day of your week.",
      "Do not discuss the fast with others unless you are fasting together. Matthew 6:17-18 is specific about secrecy. The audience is God. After a month, evaluate: what has the weekly fast done in you?",
    ],
    anchor: "Didache 8:1 — Your fasts should not be with the hypocrites... fast on the fourth day and on the Preparation (Friday).",
  },
  {
    number: "03",
    title: "The Fasting-and-Prayer Vigil — Warfare and Intercession",
    summary:
      "An extended fast of one to three days, combined with sustained prayer, for a specific spiritual burden — a person, a crisis, a decision of consequence.",
    steps: [
      "Name the specific burden. Write it at the top of a page: the person who is far from God, the decision that needs clarity, the church situation that needs God&rsquo;s intervention. Be specific.",
      "Tell one or two trusted people and invite them to join you. Corporate fasting multiplies the spiritual weight. You do not need a crowd — two or three in agreement (Matthew 18:20) is sufficient.",
      "Structure the fast with prayer times at the hours you would normally eat: morning prayer, midday prayer, evening prayer. Use each hunger pang as a trigger to return to the intercession.",
      "Journal during the fast: what thoughts surface, what God seems to be saying, what changes in the quality of your prayer as the fast progresses. After the fast, record what God did — immediately and over subsequent weeks.",
    ],
    anchor: "Mark 9:29 — This kind cannot be driven out by anything but prayer and fasting.",
  },
  {
    number: "04",
    title: "The Corporate Fast — Church and Community",
    summary:
      "Calling the church, a small group, or a family to fast together for a shared burden — prayer for revival, a church decision, a crisis in the community.",
    steps: [
      "Bring the idea of a corporate fast to your pastor, elder, or group leader. Frame it around a specific, shared burden: a church plant, a community need, a member in crisis, a decision about to be made.",
      "Set a time, a length, and a form that is accessible to everyone — a one-day fast is a good starting point. Include those who have medical reasons to fast partially; the form is secondary to the unity.",
      "Gather at the beginning and end. Open with corporate confession and lament (Joel 2:12 is a good text). Close with worship and testimony — what was seen, heard, or experienced during the fast.",
      "Follow the fast with specific, embodied action in the direction of the prayer. Isaiah 58 is clear: fasting that does not produce justice-action is incomplete. What will this community do for its neighbors as a result of this fast?",
    ],
    anchor: "Joel 2:15-16 — Consecrate a fast; call a solemn assembly... gather the people.",
  },
  {
    number: "05",
    title: "The Daniel Fast — Partial Abstinence for an Extended Season",
    summary:
      "Restricting diet to simple, plant-based food for an extended period — typically 21 days — as a sustained form of seeking God combined with daily prayer.",
    steps: [
      "Read Daniel 10:2-3 and set a clear intention for the 21 days. The Daniel fast is not a diet program; it is an extended period of heightened spiritual attention. What are you seeking God about?",
      "Restrict diet to vegetables, fruits, legumes, and water. Avoid meat, dairy, sweeteners, leavened bread, and caffeine as a norm — the exact parameters matter less than the consistency of intentional deprivation.",
      "Begin each morning with extended prayer before eating — 20 to 30 minutes minimum. Let the simplicity of the meals and the reduction of food-related pleasure create more space for prayer throughout the day.",
      "Journal the experience weekly: what has changed in your prayer life, your sense of God&rsquo;s presence, your spiritual clarity? After 21 days, break the fast with a meal of gratitude and record what God did.",
    ],
    anchor: "Daniel 10:3, 12 — I ate no choice food; no meat or wine touched my lips... your words were heard, and I have come because of your words.",
  },
  {
    number: "06",
    title: "The Media Fast — Fasting from Noise",
    summary:
      "Abstaining from social media, news, entertainment, or all screens for a defined period — creating silence in which God can be heard above the constant noise of the digital world.",
    steps: [
      "Choose your fast: all social media, all screens after 8 p.m., all news, or all entertainment media. The specific category matters less than the seriousness of the intention and the consistency of the practice.",
      "Delete the apps or block the sites for the duration. Do not rely on willpower; remove the friction. The time reclaimed — which for most people amounts to two to four hours per day — is the raw material of a renewed prayer life.",
      "Replace the reclaimed time specifically: Scripture meditation in the morning, prayer in the evening, silence in the intervals. Do not simply fill the time with other consumption. Let the quiet do its work.",
      "Observe what the silence reveals. Media fasting is often more unsettling than food fasting, because it reveals how much we have been using noise to avoid the interior life. What anxieties surface? What becomes audible when the noise stops? Bring it all before God.",
    ],
    anchor: "Psalm 46:10 — Be still, and know that I am God.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "John Piper",
    role: "Author — A Hunger for God: Desiring God Through Fasting and Prayer",
    quote:
      "The greatest enemy of hunger for God is not poison but apple pie. It is not the banquet of the wicked that dulls our appetite for heaven, but the endless trivial preoccupations that we pursue.",
    bio: "John Piper&rsquo;s A Hunger for God (1997) is the richest modern theology of Christian fasting. His central argument is eschatological: Christians fast because the Bridegroom is absent (Matthew 9:15), and fasting is the body&rsquo;s declaration that it aches for what is not yet present. Fasting is not a technique for obtaining spiritual results but an expression of genuine hunger for God that transcends appetite for creation. Piper draws on the full biblical witness — Jesus, Paul, the prophets, and the martyrs — to show that fasting is inseparable from a life oriented toward the age to come. He is the most effective voice calling contemporary evangelical Christians to recover the practice, and his own example of regular fasting gives his arguments credibility.",
  },
  {
    name: "Richard Foster",
    role: "Author — Celebration of Discipline: The Path to Spiritual Growth",
    quote:
      "Fasting reveals the things that control us. This is a wonderful benefit to the soul-hungry saint. We cover up what is inside us with food and other pleasures. Fasting brings things to the surface.",
    bio: "Richard Foster&rsquo;s Celebration of Discipline (1978) did more to restore fasting to Protestant evangelical practice than any other single book of the 20th century. His chapter on fasting is both a biblical argument and a pastoral guide, placing fasting within the full context of the spiritual disciplines and firmly distinguishing it from legalism, self-punishment, or merit-earning. Foster draws on the historical Christian practice — the Desert Fathers, the Reformers, the Puritans, the Quakers — to show that fasting has been a normal, unremarkable dimension of Christian piety for most of Christian history. His insistence that fasting is a &ldquo;joyful&rdquo; practice — oriented toward positive hunger rather than negative deprivation — has been both influential and debated.",
  },
  {
    name: "Dallas Willard",
    role: "Philosopher, Spiritual Formation Teacher — The Spirit of the Disciplines",
    quote:
      "Fasting confirms our utter dependence upon God by finding in him a source of sustenance beyond food. Through it, we learn by experience that God's word to us is a life substance, that it is not food alone which gives life, but the word of God.",
    bio: "Dallas Willard&rsquo;s The Spirit of the Disciplines (1988) placed fasting within a rigorous philosophical and theological framework for spiritual formation. His argument: the body is not merely the soul&rsquo;s house but its partner in spiritual transformation; disciplines that engage the body — including fasting — are not optional additions for the spiritually ambitious but the ordinary means by which disciples are conformed to Christ. Willard argued that the contemporary church&rsquo;s neglect of fasting is directly related to its failure to produce deeply transformed disciples: we cannot experience what Matthew 4:4 describes — living by every word that proceeds from God&rsquo;s mouth — without the embodied practice that creates genuine hunger for that word.",
  },
  {
    name: "Arthur Wallis",
    role: "Author — God&rsquo;s Chosen Fast",
    quote:
      "Fasting is calculated to bring a note of urgency and reality into our praying, and to give force to our intercession. When the heart is truly burdened, the need for food is forgotten.",
    bio: "Arthur Wallis&rsquo;s God&rsquo;s Chosen Fast (1968) is the most thorough biblical treatment of fasting written in the 20th century — a comprehensive survey of every significant fasting passage in both Testaments, combined with practical and historical guidance. Wallis&rsquo;s genius is showing how the biblical motifs of fasting — humbling the soul, intensifying prayer, expressing grief, discerning God&rsquo;s will, engaging in spiritual warfare — are all aspects of a single reality: the creature&rsquo;s desperate, embodied seeking of the Creator. The book is out of print and harder to find than it should be; it is among the most valuable resources for anyone who wants to go deep into the biblical theology and historical practice of fasting.",
  },
  {
    name: "Thomas Ryan",
    role: "Author — The Sacred Art of Fasting",
    quote:
      "Fasting is a kind of prayer with the body. It is the body&rsquo;s way of saying what the heart means: I need God more than I need this.",
    bio: "Thomas Ryan, a Paulist priest, wrote The Sacred Art of Fasting as an accessible, ecumenical introduction to fasting from a Catholic perspective, drawing on the full range of the Christian tradition as well as the Jewish practice from which Christianity inherited the discipline. His strength is accessibility: he meets the reader wherever they are — skeptical, curious, spiritually hungry — and walks them step by step into a practice that is both ancient and immediately relevant. His comparison of Christian fasting with Jewish Yom Kippur practice illuminates the depth of the tradition that evangelical Christians have often lost, and his practical guidance on beginning a fasting practice is among the most sensible available.",
  },
  {
    name: "Scot McKnight",
    role: "New Testament Scholar — Fasting (The Ancient Practices Series)",
    quote:
      "Fasting, in the Bible, is the natural, inevitable response of a person to a grievous sacred moment. It is not a spiritual technique for losing weight, gaining power, or manipulating God. It is what the body does when the soul has been struck with something overwhelming.",
    bio: "Scot McKnight&rsquo;s Fasting (2009) — the volume he contributed to Thomas Nelson&rsquo;s Ancient Practices series — is the most exegetically rigorous modern treatment of biblical fasting. His central finding — that fasting is best understood as a bodily response to a grievous sacred moment rather than a technique to be deployed on schedule — reframes the entire discussion. He argues that the evangelical church has often gotten fasting wrong in both directions: either ignoring it entirely or turning it into a spiritual program. The biblical pattern is neither: it is the natural expression of a soul that has encountered something weighty enough to make food irrelevant. McKnight also offers the most careful biblical taxonomy of fasting types and the most honest account of its limits.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Matthew 6:16-18",
    text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.",
    reflection:
      "The word is &ldquo;when,&rdquo; not &ldquo;if.&rdquo; Jesus assumes the practice and reforms the motive. The Pharisees fast for human approval; the disciple fasts for God alone. The instructions about oil and washed faces are instructions about secrecy — and secrecy is the test of whether fasting is genuine hunger for God or performance of religious identity. The reward promised is not material or circumstantial but relational: the Father who sees in secret, seen.",
  },
  {
    reference: "Isaiah 58:6-7",
    text: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter — when you see the naked, to clothe them, and not to turn away from your own flesh and blood?",
    reflection:
      "The fast God accepts is not an isolated spiritual exercise. It is integrated with a whole orientation of life toward justice and mercy. The person who fasts on Wednesday and ignores their hungry neighbor on Thursday has not fasted in a way God recognizes. The text is not merely about charity alongside fasting; it is about fasting as the concentrated expression of a life whose ordinary rhythm is shaped by the justice and mercy God requires.",
  },
  {
    reference: "Mark 9:28-29",
    text: "When Jesus had gone indoors, his disciples asked him privately, &ldquo;Why couldn&rsquo;t we drive it out?&rdquo; He replied, &ldquo;This kind can come out only by prayer.&rdquo;",
    reflection:
      "The failure was not of technique but of dependence. The disciples had attempted exorcism without radical reliance on God. Prayer — and fasting, in many manuscripts — is here associated with the kind of desperate, urgent seeking that creates the conditions for God&rsquo;s power to move. Some battles are lost because the church has not yet fasted for them.",
  },
  {
    reference: "Joel 2:12-13",
    text: "Even now, declares the LORD, return to me with all your heart, with fasting and weeping and mourning. Rend your heart and not your garments. Return to the LORD your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.",
    reflection:
      "The fast is called in response to the Day of the LORD — the approach of judgment. But the ground of the call to fast is not dread of God&rsquo;s wrath; it is the character of God. &ldquo;For he is gracious and compassionate.&rdquo; Corporate fasting in Joel is not mere crisis management but an act of trust: we fast because we believe the God we are returning to is worth returning to. The rending of the heart, not the garments, is the point.",
  },
  {
    reference: "Acts 13:2-3",
    text: "While they were worshiping the Lord and fasting, the Holy Spirit said, &ldquo;Set apart for me Barnabas and Saul for the work to which I have called them.&rdquo; So after they had fasted and prayed, they placed their hands on them and sent them off.",
    reflection:
      "The Spirit spoke in the context of worship and fasting. This does not mean fasting causes prophetic revelation; it means fasting was the community&rsquo;s way of being genuinely available — body and soul — to the Spirit&rsquo;s direction. The sending of Barnabas and Saul, the most consequential mission in the history of the church, was birthed in a community that was hungry for God before it was anything else.",
  },
  {
    reference: "2 Samuel 12:22-23",
    text: "He answered, &ldquo;While the child was still alive, I fasted and wept. I thought, &lsquo;Who knows? The LORD may be gracious to me and let the child live.&rsquo; But now that he is dead, why should I go on fasting? Can I bring him back again? I will go to him, but he will not return to me.&rdquo;",
    reflection:
      "David&rsquo;s explanation is one of the most theologically honest accounts of fasting in Scripture. He did not fast because fasting guaranteed an outcome; he fasted because it was the natural expression of urgency before a God who might be gracious. When the outcome was settled, the fast ended. This is fasting as honest relationship, not as leverage — seeking God with the whole body while the seeking makes sense, and releasing the outcome when God has spoken.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "gA15nLRkxA0", title: "Why Christians Should Fast" },
  { videoId: "VNjOGqSIY2M", title: "John Piper: A Hunger for God — Fasting and Prayer" },
  { videoId: "4j_HV2q9fcE", title: "The Biblical Theology of Fasting" },
  { videoId: "9Kl0X_ZiI1E", title: "How to Fast: A Practical Guide" },
  { videoId: "GrZJiDh4f2I", title: "Isaiah 58 — True and False Fasting" },
  { videoId: "R-8b5dAixs0", title: "Corporate Fasting and Prayer for Revival" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianFastingPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<FSTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [fastType, setFastType] = useState("");
  const [intention, setIntention] = useState("");
  const [whatGodDid, setWhatGodDid] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as FSTEntry[]);
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
    if (!fastType.trim() || !intention.trim()) return;
    const entry: FSTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      fastType: fastType.trim(),
      intention: intention.trim(),
      whatGodDid: whatGodDid.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setFastType("");
    setIntention("");
    setWhatGodDid("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
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
    color: GOLD,
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
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Spiritual Disciplines
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              When You Fast: Hunger, Grief, and the Discipline of Seeking God
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Jesus did not say &ldquo;if you fast&rdquo; — he said &ldquo;when you fast.&rdquo; Fasting
              is assumed, commanded, and practiced throughout Scripture as an expression of grief,
              warfare, discernment, and hunger for God. This guide traces the full biblical theology of
              fasting, the people who have written most wisely about it, and the practices that bring
              it into the ordinary Christian life.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Is not this the kind of fasting I have chosen: to loose the chains of injustice
                and untie the cords of the yoke, to set the oppressed free and break every yoke?&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Isaiah 58:6</p>
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
                Seven theological studies on fasting — from the grammar of Matthew 6 to the warfare
                theology of Mark 9, from the corporate fasts of the Old Testament to the discernment
                fast of Acts 13, and finally to the hard question of why modern Christians so rarely
                practice what the whole of Scripture assumes.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GOLD,
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
                    >
                      {p}
                    </p>
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(217, 119, 6, 0.07)",
                        border: `1px solid rgba(217, 119, 6, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Matthew 6, Isaiah 58, Mark 9, Joel 2, Acts 13, 2 Samuel 12 — these are not seven
                  separate topics but seven facets of a single reality: the creature in urgent,
                  embodied, whole-person seeking of the Creator. Fasting is what happens when the soul
                  takes God seriously enough to involve the body. Explore the related practice of{" "}
                  <Link href="/christian-prayer-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Prayer
                  </Link>{" "}
                  or the interior discipline of{" "}
                  <Link
                    href="/christian-meditation"
                    style={{ color: GOLD, textDecoration: "underline" }}
                  >
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
                Six approaches to fasting — from the first, tentative one-meal fast to the extended
                Daniel fast, from the weekly rhythm of the early church to the corporate fast that
                carries an entire congregation before God. Start where you are. The Journal tab is
                built to accompany any of them.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GOLD,
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
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about medical caution
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Fasting is not for everyone in the same form. Those with eating disorders, diabetes,
                  pregnancy, or certain medications should consult with a doctor before fasting from
                  food. The Daniel fast and the media fast are accessible starting points for anyone
                  for whom food fasting is medically contraindicated. The question is not whether you
                  are fasting in the most demanding way — it is whether you are cultivating genuine,
                  embodied hunger for God. That hunger can be expressed in many forms.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six writers who have done the most to illuminate fasting as a spiritual discipline —
                from the biblical scholar who mapped every fasting text in Scripture to the philosopher
                who showed why fasting is the body&rsquo;s necessary partner in spiritual formation.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: GOLD,
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
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
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
                Six passages that command, model, and explain fasting — from the Sermon on the Mount
                to Isaiah&rsquo;s devastating critique of false fasting to David&rsquo;s honest
                account of why he fasted and when he stopped. Read each slowly before the reflection.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GOLD,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take one of these passages into a fast. Read it in the morning before the fast
                  begins. Return to it each time hunger strikes during the day. Let the hunger and the
                  text interpret each other: the physical emptiness is the body&rsquo;s commentary on
                  what the text describes. At the end of the day, record in the Journal tab what the
                  combination of hunger and text opened in you.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                A record of your fasting practice: the type of fast, the intention behind it, and what
                God did in it. Entries are saved privately in your browser. No one sees this but you
                and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s fasting entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="fst-type" style={labelStyle}>
                    Type of fast
                  </label>
                  <input
                    id="fst-type"
                    type="text"
                    value={fastType}
                    onChange={(e) => setFastType(e.target.value)}
                    placeholder="e.g. One meal, sunrise to sunset, Daniel fast, social media fast"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="fst-intention" style={labelStyle}>
                    The intention behind it
                  </label>
                  <textarea
                    id="fst-intention"
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                    placeholder="What are you bringing before God? A specific prayer, grief, decision, or intercession."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="fst-what-god-did" style={labelStyle}>
                    What God did in it
                  </label>
                  <textarea
                    id="fst-what-god-did"
                    value={whatGodDid}
                    onChange={(e) => setWhatGodDid(e.target.value)}
                    placeholder="What did God show you, give you, or meet you with during or after this fast?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!fastType.trim() || !intention.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !fastType.trim() || !intention.trim() ? BORDER : GOLD,
                    color: !fastType.trim() || !intention.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !fastType.trim() || !intention.trim() ? "not-allowed" : "pointer",
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
                      Skip a meal, name your intention, and bring it before God. Record what happened
                      here afterward. The fasting journal is one of the most honest records a
                      Christian can keep.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: 2 }}>
                              {entry.fastType}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.fastType}`}
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
                        <div style={{ marginBottom: entry.whatGodDid ? 10 : 0 }}>
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
                            Intention
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.intention}
                          </p>
                        </div>
                        {entry.whatGodDid && (
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
                              What God did
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatGodDid}
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
                Teaching to watch prayerfully — on the theology, history, and practice of Christian
                fasting. Good companions to the Theology and Practices tabs.
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
              The fasting life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Fasting always ends in feasting. The biblical pattern is clear: the fast of mourning
              ends when the mourning is satisfied; the Yom Kippur fast ends in celebration; Jesus
              fasted in the desert and then came eating and drinking, announcing the arrival of the
              kingdom. The fasting Christian is not someone in love with deprivation. She is someone
              in love with the feast — and who knows that the path to it runs through hunger.
              Fast not to earn God&rsquo;s favor, which you already have in Christ, but to express
              a hunger for God himself that no meal can satisfy.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: deepen the interior life with{" "}
              <Link href="/christian-meditation" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Meditation
              </Link>
              , strengthen your prayer life with the{" "}
              <Link href="/christian-prayer-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                Prayer guide
              </Link>
              , or practice generosity with the{" "}
              <Link href="/christian-generosity" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Generosity guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
