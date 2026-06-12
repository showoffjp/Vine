"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const AMBER = "#F59E0B";

const STORAGE_KEY = "vine_parentingguide_entries";

interface PRNEntry {
  id: string;
  date: string;
  child: string;
  challenge: string;
  gospelMoment: string;
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
    badge: "Proverbs 22:6",
    title: "&ldquo;Train Up a Child in the Way He Should Go&rdquo; — The Nuance",
    paragraphs: [
      "&ldquo;Train up a child in the way he should go; even when he is old he will not depart from it&rdquo; (Proverbs 22:6). This verse is perhaps the most frequently misused passage in the entire parenting literature. It is read as a guarantee — if you raise your child correctly, they will stay in the faith. Parents of prodigal children have carried enormous guilt because the proverb seemed to indict them. But wisdom literature does not function as a promise; it functions as a principle.",
      "The Hebrew for &ldquo;the way he should go&rdquo; is literally &ldquo;according to his way&rdquo; — some scholars read this as &ldquo;in keeping with his God-given bent or temperament.&rdquo; Parenting that works with who the child actually is, rather than forcing the child into a predetermined mold, is the training Proverbs commends. Children are not projects to be completed; they are image-bearers with particular gifts, callings, and tendencies that a wise parent learns to read and cultivate.",
      "The deeper wisdom is this: faithful, attentive, consistent parenting creates conditions in which faith is most likely to take root and flourish — but it cannot guarantee outcome. The child is not clay; she is a person with genuine freedom. The parent who has trained faithfully and still watches a child walk away has not failed the proverb; the proverb was never a control mechanism. It was wisdom for the long game, and the long game includes waiting, praying, and trusting God with what you cannot control.",
    ],
  },
  {
    badge: "Deuteronomy 6:4-9",
    title: "The Shema — Teaching as You Walk",
    paragraphs: [
      "&ldquo;Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise&rdquo; (Deuteronomy 6:4-7). The Shema is the most important passage in the entire parenting canon.",
      "Notice the structure: the commands begin with the parent&rsquo;s own heart (&ldquo;these words shall be on your heart&rdquo;). You cannot transmit what you do not have. The parent who has not genuinely wrestled with who God is and what his commands require has nothing to pass on except religious performance. The first call of Deuteronomy 6 is to the parent&rsquo;s own discipleship — before any strategy, technique, or devotional structure.",
      "The transmission mechanism is then striking: not formal instruction alone (though that is included), but &ldquo;when you sit, walk, lie down, rise.&rdquo; Faith is woven into every ordinary moment of the day. The car ride, the dinner table, the bedtime routine, the spontaneous question while walking to the park — these are the primary classrooms of spiritual formation. Parents who invest in formal devotional structures but ignore the moments are cultivating a compartmentalized faith. Parents who let the ordinary moments be the curriculum are practicing Deuteronomy 6.",
    ],
    callout: {
      label: "The command",
      text: "The Shema is not a curriculum — it is a way of life. Faith is caught more than it is taught, and it is caught in ordinary moments by watching parents who actually believe what they say they believe.",
    },
  },
  {
    badge: "Ephesians 6:4",
    title: "&ldquo;Do Not Exasperate Your Children&rdquo; — The Limit on Parental Authority",
    paragraphs: [
      "Paul&rsquo;s word to fathers in Ephesians 6:4 is not only a command to do something but a command to stop doing something: &ldquo;Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.&rdquo; The word translated &ldquo;provoke&rdquo; or &ldquo;exasperate&rdquo; (parorgizo) means to stir up to anger, to irritate, to frustrate to the point of giving up. Parental authority has a limit — it is not to be exercised in ways that crush the spirit or generate despair.",
      "What exasperates children? Unreasonable standards they cannot meet; discipline that is inconsistent or arbitrary; rules without reasons that make no sense to a growing mind; constant criticism with little affirmation; preferential treatment of siblings; belittling humor; the requirement of perfection. All of these are forms of parental power used in ways that damage rather than form. The parent whose child is chronically angry, withdrawn, or anxious should ask whether their parenting has been in Ephesians 6:4&rsquo;s positive zone (&ldquo;the discipline and instruction of the Lord&rdquo;) or whether it has crossed into exasperation.",
      "The theological grounding is significant: &ldquo;the discipline and instruction of the Lord.&rdquo; The standard of parenting is not cultural expectation, not the parents&rsquo; own ambitions for their children, but the Lord&rsquo;s own way of forming his people. How does God discipline his children? Hebrews 12 says it is always for their good, never for his frustration; it is purposeful, not impulsive; it results in &ldquo;the peaceful fruit of righteousness.&rdquo; Parenting in the image of God the Father means discipline that is consistent, purposeful, warm, and always oriented toward the child&rsquo;s genuine flourishing.",
    ],
  },
  {
    badge: "Theology of the Father",
    title: "The Parent as Icon of God the Father",
    paragraphs: [
      "Parents hold an enormous theological weight that most of them never consciously acknowledge: for a child, the parent&rsquo;s face is the first face that teaches them what it feels like to be loved, to be seen, to be corrected, to be forgiven. Before a child can read theology, they are reading their parents. The emotional texture of the parent-child relationship forms the child&rsquo;s first and most durable intuitions about who God is.",
      "This is both the terror and the glory of parenting. The terror: a parent who is chronically cold, absent, critical, or conditional in love is teaching the child that God is the same way — and that lesson is one of the hardest to unlearn. The glory: the parent who is consistently warm, present, forgiving, and genuinely delighted in their child is giving them a gift that no theology course can replicate — an experiential foundation for believing that God actually loves them.",
      "The prodigal son&rsquo;s father runs. He does not lecture the returning son on the road, does not make him earn his way back in, does not withhold the party until the son has proved himself. He runs, he embraces, he clothes, he feasts. This is the model for the parent who is making visible, in skin and time and concrete action, the character of the God who did not wait for us to be worthy before running to meet us in Christ.",
    ],
  },
  {
    badge: "Luke 15:11-32",
    title: "The Prodigal Father — A Parenting Model",
    paragraphs: [
      "The parable of the Prodigal Son (more accurately: the parable of the Two Sons and the Running Father) is one of the richest parenting texts in the Gospels, even though it is primarily a parable about God. The younger son demands his inheritance, squanders it in reckless living, returns in shame expecting to be received as a servant. The father, who has been watching the road, sees him &ldquo;while he was still a long way off&rdquo; and runs to meet him.",
      "The father&rsquo;s response is a parenting masterclass: compassion first (the emotion comes before the action), physical embrace before verbal welcome, restoration before correction, celebration as the primary instrument of reunion. He does not say &ldquo;I told you so.&rdquo; He does not require a full accounting before restoring relationship. He does not make the son prove himself over time before trusting him again. He throws a party. The best robe, the ring, the fattened calf — these are the father&rsquo;s answer to the son&rsquo;s confession, and they say: you were lost, now you are found; you were dead, now you are alive. Come home.",
      "The elder son&rsquo;s reaction reveals the second failure mode of parenting: the parent who is fair but joyless, obedient but resentful, present but not delighted. The father&rsquo;s response to the elder son is equally tender: &ldquo;Son, you are always with me, and everything I have is yours.&rdquo; Both sons are loved; both are invited in. The father does not choose between justice and grace; he insists on both. The parent who models this — prodigal grace for the wandering child, genuine affirmation for the faithful one — is making the character of God legible in daily life.",
    ],
  },
  {
    badge: "Theology of Discipline",
    title: "Discipline vs. Punishment — The Theological Distinction",
    paragraphs: [
      "Punishment and discipline are not synonyms in Christian theology, though they are treated as interchangeable in much of popular parenting culture. Punishment is backward-looking: it inflicts pain proportional to offense. Its logic is retributive — you did wrong, you will suffer for it. Discipline is forward-looking: its goal is formation, transformation, the development of wisdom and character. Its logic is redemptive — I love you too much to let you remain what you are.",
      "God&rsquo;s treatment of his children is always discipline, never mere punishment. Hebrews 12:10-11 is definitive: &ldquo;He disciplines us for our good, that we may share his holiness. For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness.&rdquo; The criterion is always the child&rsquo;s ultimate good. The purpose is always holiness. The result, when received, is always peace and righteousness — not trauma, not suppressed rage, not learned helplessness.",
      "The practical implication: Christian parenting does not pursue compliance as its goal. A child who behaves correctly because they fear punishment has been managed, not formed. A child who is learning to understand why certain behaviors are harmful, who is growing in wisdom, who sees the connection between their choices and their consequences, who has experienced discipline followed by genuine restoration and joy — that child is being formed. Tedd Tripp&rsquo;s phrase is accurate: the goal is the heart. Behavior modification without heart transformation is Pharisaism in miniature.",
    ],
  },
  {
    badge: "Theology of Grace",
    title: "Grace-Based vs. Law-Based Parenting — Children as Image-Bearers",
    paragraphs: [
      "Law-based parenting operates primarily through rules and consequences: here is what you must do, here is what will happen if you don&rsquo;t. It is not wrong — rules and consequences are necessary. But when rules and consequences are the dominant language of the home, children learn that love is earned by performance, that relationship depends on compliance, and that God is primarily a lawgiver who is watching for violations. This is a distortion of the gospel — it produces either legalism (the child who learns to perform) or rebellion (the child who gives up trying to earn approval).",
      "Grace-based parenting begins with the declaration: you are loved before you perform, accepted before you have earned it, delighted in as you are while also being invited to grow. It does not eliminate standards — grace is not permissiveness. But it ensures that the child hears the gospel before they hear the law, that they know they are beloved children before they are confronted as sinners, that correction always comes in the context of relationship rather than as a transaction.",
      "Children are image-bearers, not projects. Every child carries the dignity of Genesis 1:26-27 — made in the image of God, of infinite worth, not reducible to their performance, their difficulties, their diagnoses, or their failures to meet parental expectations. The parent who sees their child as an image-bearer treats them with a reverence that has nothing to do with the child&rsquo;s behavior. And the child who is consistently treated as a person of inherent worth, rather than as a work-in-progress whose value depends on their output, is being given a foundation for understanding grace that no amount of theological instruction can replace.",
    ],
  },
  {
    badge: "1 Corinthians 7 / Limits of Parenting",
    title: "The Prodigal Child — The Limits of Parenting",
    paragraphs: [
      "Every theology of parenting must eventually reckon with the child who walks away — the son or daughter who was raised in the faith, who knew the Scriptures, who sang the songs, who was prayed over and loved and taught, and who left anyway. The pain of this is among the most acute a Christian parent can experience, and the temptation toward self-blame (&ldquo;what did I do wrong?&rdquo;) or toward harder control (&ldquo;how can I bring them back?&rdquo;) is almost irresistible.",
      "But the Bible&rsquo;s account of human freedom does not allow parenting to be a technology with guaranteed outcomes. Children are not machines; they are persons with genuine wills. The prodigal&rsquo;s father did not chase his son into the far country or chain him to the house. He let him go. He waited. He watched the road. And when the son came to himself (&ldquo;he came to himself&rdquo; — repentance is internal, prior to the action), the father ran to meet him. The parent&rsquo;s job with a prodigal child is to be the father on the porch: praying, present, ready, the relationship kept as open and warm as the child will permit it to be.",
      "Augustine&rsquo;s mother Monica prayed for him for thirty-two years before his conversion. John Newton&rsquo;s mother died when he was seven, yet her prayers and her faith reached him decades later when he was a slave trader at sea. The parent who has planted faithfully and does not see the harvest should not conclude that the seed is dead. They should conclude that the harvest belongs to God, and that the God who began a good work is faithful to complete it in his time, not ours.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Deuteronomy 6 Dinner Table",
    summary:
      "Make the dinner table a daily classroom — not a formal Bible study, but a place where faith is woven into ordinary conversation, where questions are welcome, and where the family pays attention to God together.",
    steps: [
      "Begin the meal with a one-sentence prayer of thanks. Keep it honest and brief: &ldquo;Father, thank you for this food and for this day. We&rsquo;re glad to be together.&rdquo; Children learn to pray by hearing parents pray in ordinary language.",
      "Ask one faith-adjacent question each week: What are you grateful for? What are you worried about? What does God think about the thing that happened at school today? Where did you see something beautiful or good this week? These are Shema questions — they make faith relevant to actual life.",
      "When your child asks a hard question (&ldquo;why did God let that happen?&rdquo;), resist the impulse to answer immediately or to shut the question down. Say: &ldquo;That&rsquo;s a real question. I wonder about that too. Let&rsquo;s think about it together.&rdquo; The habit of thinking about hard things together is more valuable than any answer you give.",
      "Record the conversations that matter in the Journal tab. A record of your child&rsquo;s spiritual questions, their moments of faith, their struggles — this is the history of their formation, and it will be precious to you and possibly to them when they are older.",
    ],
    anchor: "Deuteronomy 6:7 — You shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.",
  },
  {
    number: "02",
    title: "The Gospel Conversation After Correction",
    summary:
      "Every correction is an opportunity to preach the gospel — to move from &ldquo;you did wrong&rdquo; to &ldquo;you need grace&rdquo; to &ldquo;grace is available&rdquo; in a single sequence. This is how discipline becomes formation.",
    steps: [
      "When your child does wrong, address the behavior clearly and without anger: &ldquo;What you did was unkind. It hurt your sister. That matters.&rdquo; Do not minimize or dismiss the wrong — the child needs to know that actions have weight.",
      "Move to the heart: &ldquo;Why do you think you did that? What were you feeling? What did you want that you tried to get that way?&rdquo; Tedd Tripp calls this getting to the root — the behavior is the fruit; the heart issue is the root. You are not satisfied with behavioral compliance; you want the child to understand themselves.",
      "Offer the gospel: &ldquo;We all have that in us — the part that wants what it wants and takes it the wrong way. That&rsquo;s why Jesus came. He knows that about us and loves us anyway. And he helps us do better.&rdquo; The gospel enters the specific situation, not as a formula but as real good news.",
      "Complete the cycle with genuine restoration — not prolonged shame, not an extended cold shoulder, but clear forgiveness and return to warmth. The child who experiences this pattern learns the deepest truth of Christian ethics: sin is serious, grace is real, restoration is possible, and love outlasts failure.",
    ],
    anchor: "Proverbs 22:15 — Folly is bound up in the heart of a child, but the rod of discipline drives it far from him.",
  },
  {
    number: "03",
    title: "Family Worship — The Ancient Practice",
    summary:
      "Reading Scripture, praying, and sometimes singing together as a family — not a performance, not a program, but a daily or weekly rhythm that makes God&rsquo;s presence normal in the household.",
    steps: [
      "Start small and sustainable: ten to fifteen minutes, three to five days per week, is more valuable than an elaborate structure that collapses under the weight of its own ambition. For young children, The Jesus Storybook Bible by Sally Lloyd-Jones is an extraordinary resource — every story whispers his name.",
      "Read, pray, and occasionally sing. The reading can be a passage of Scripture or a devotional guide. The prayer can be a single sentence from each person: one thing you&rsquo;re thankful for, one thing you need. The singing can be a hymn or a worship song the family knows. Simple is the point.",
      "Let the children lead when they are old enough. Have them choose the passage, lead the prayer, pick the song. Children who participate actively in family worship develop ownership of faith rather than passive reception of it.",
      "When life interrupts — travel, illness, conflict, exhaustion — return without drama. The rhythm is more important than any single session. A family that has worshiped together for years, however imperfectly, has built something that irregular sessions cannot create.",
    ],
    anchor: "Psalm 78:4 — We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD.",
  },
  {
    number: "04",
    title: "Praying Over Your Child by Name",
    summary:
      "The most specific and theologically rich parenting practice — praying Scriptural prayers over your child by name, aloud when possible, for their character, their faith, and their relationship with God.",
    steps: [
      "Establish a bedtime prayer ritual that includes your child&rsquo;s name in the prayer: &ldquo;Father, I pray for [name] — that she would know how loved she is by you, that she would grow in wisdom, that she would have courage to do what is right.&rdquo; Children who hear themselves prayed for by name learn that they are known and loved by God specifically.",
      "Pray scripture over them: Ephesians 3:14-19 (the love of Christ dwelling in them), Numbers 6:24-26 (the Aaronic blessing), Philippians 4:7 (peace guarding their hearts). Personalize the texts — insert their name where &ldquo;you&rdquo; appears. This is ancient liturgical practice and it works.",
      "Pray honestly in front of your children when you face difficulty: &ldquo;Lord, I don&rsquo;t know what to do about this. I trust you. Help me.&rdquo; A child who watches a parent pray honestly in need learns that prayer is real, not a performance for Sunday mornings.",
      "Record in the Journal tab the specific prayers you have prayed for each child. Looking back across years of prayers is a record of faith, love, and God&rsquo;s faithfulness — a document that may one day matter enormously to the child you prayed for.",
    ],
    anchor: "Numbers 6:24-26 — The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
  },
  {
    number: "05",
    title: "The Gospel Conversation During Suffering",
    summary:
      "Suffering — the child&rsquo;s own pain, the family&rsquo;s loss, the world&rsquo;s darkness — is one of the most important parenting classrooms. How parents handle pain in front of their children shapes the children&rsquo;s theology more than any formal instruction.",
    steps: [
      "Do not lie to your children about pain. &ldquo;Everything happens for a reason&rdquo; and &ldquo;God wanted another angel&rdquo; are theologically dishonest and emotionally harmful. Children know when something is wrong; they need adults who will acknowledge the truth with them.",
      "Stay present in the hard moment: &ldquo;This is really sad. I&rsquo;m sad too. Let&rsquo;s be sad together for a while.&rdquo; This is lament — the biblical practice of bringing genuine grief to God. Children who learn to lament learn that faith does not require pretending everything is fine.",
      "Move toward hope without minimizing grief: &ldquo;I don&rsquo;t understand why this happened, and I&rsquo;m not going to pretend I do. But I do know that God is with us in this, and that nothing has surprised him. And I know that he is making all things new.&rdquo; The resurrection is the Christian answer to suffering — not an explanation, but a promise.",
      "Point toward service: when appropriate, help your child find a way to respond to suffering with love — a card for the sick friend, a gift for the grieving family, a prayer for the person in pain. The child who learns to respond to suffering with love is learning the deepest discipline of Christian formation.",
    ],
    anchor: "Romans 8:18 — For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
  },
  {
    number: "06",
    title: "The Art of the Non-Anxious Presence",
    summary:
      "The parent who remains calm, curious, and relationally warm in the face of a child&rsquo;s questions, doubts, failures, and rebellion — without collapsing into panic or hardening into judgment — is practicing one of the most difficult and important parenting skills.",
    steps: [
      "When your child expresses doubt about faith, resist the impulse to argue or panic. Say: &ldquo;Tell me more about that. What made you start wondering about that?&rdquo; Curiosity is more powerful than argument in keeping the door open for honest conversation.",
      "When your child fails significantly — moral failure, academic failure, relational breakdown — resist the first impulse (which is usually either anger or problem-solving). Stay present, stay warm: &ldquo;I love you. This is hard. I&rsquo;m not going anywhere. Let&rsquo;s figure this out together.&rdquo;",
      "Regulate your own anxiety before entering hard conversations. The parent who is already flooded by fear cannot be present for the child. Pray first: &ldquo;Lord, help me to see [name] the way you see them. Help me to listen more than I talk. Let your love flow through me right now.&rdquo;",
      "Maintain the relational temperature even when the content is difficult. The relationship is the bridge. Children who know the bridge is intact will eventually walk back across it.",
    ],
    anchor: "1 Peter 5:7 — Casting all your anxieties on him, because he cares for you.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Paul David Tripp",
    role: "Age of Opportunity — Parenting Teenagers",
    quote:
      "God places children in families so that they will be exposed to the gospel. The family is the first and most important arena for doing that. Parents are not primarily behavior managers; they are gospel preachers in the most important mission field on earth.",
    bio: "Paul David Tripp&rsquo;s Age of Opportunity (1997) is the best theological treatment of parenting teenagers in print. Tripp&rsquo;s central argument is that adolescence is not a problem to be managed but an opportunity to be seized: the teenager&rsquo;s instability, questioning, and rebellion are actually occasions for the gospel to become real in ways that childhood&rsquo;s compliance could not provide. His framework — that parents are called to shepherd hearts, not control behavior — runs through all of his parenting writing and has shaped evangelical pastoral practice more than almost any other single source.",
  },
  {
    name: "Tedd Tripp",
    role: "Shepherding a Child&rsquo;s Heart — Formation, Not Behavior Management",
    quote:
      "The goal of parenting is not a well-behaved child. It is a child whose heart is being turned toward God, who is learning to love what God loves and hate what God hates, who understands that the gospel is the solution to every human problem — including their own.",
    bio: "Tedd Tripp&rsquo;s Shepherding a Child&rsquo;s Heart (1995) introduced the phrase &ldquo;shepherding the heart&rdquo; to evangelical parenting literature and has never been surpassed in its influence. His core thesis — that the heart is the wellspring from which all behavior flows, and that the goal of discipline is the heart rather than the behavior — shifted the terms of the entire discussion. His work on the rod passages in Proverbs (understood as the authority of the parent to correct, not limited to physical punishment), on the dangers of behavior modification without gospel, and on the parent&rsquo;s own need for grace in the parenting task are all essential reading.",
  },
  {
    name: "John Piper",
    role: "Don&rsquo;t Waste Your Life — Raising Children for the Kingdom",
    quote:
      "The most important thing I can do for my children is not to give them a good education or a secure future or a happy childhood. It is to love God with everything I have, and let them watch. Faith is caught before it is taught.",
    bio: "John Piper&rsquo;s influence on Christian parenting is less through a single definitive book than through his consistent theological emphasis: the goal of Christian parenting is not the child&rsquo;s comfort, success, or happiness, but their encounter with the living God. His Deuteronomy 6 conviction — that parents transmit faith by genuinely having it themselves, visibly and habitually, in the ordinary course of life — has shaped a generation of Christian parents. His own account of his father&rsquo;s influence on him, and his frank acknowledgment of his failures as a father too absorbed in ministry, give his parenting teaching the texture of lived experience rather than theory.",
  },
  {
    name: "Sally Lloyd-Jones",
    role: "The Jesus Storybook Bible — The Gospel in Every Story",
    quote:
      "Every story in the Bible whispers his name. From the very beginning, this has been a love story. God made the world as the perfect home for his children. And he would move heaven and earth — he would go to the ends of the earth — to get his children back.",
    bio: "Sally Lloyd-Jones&rsquo;s Jesus Storybook Bible (2007) has changed more children&rsquo;s theology — and more parents&rsquo; theology — than any other children&rsquo;s book in recent memory. Its genius is its insistence on reading every story in the Old Testament as pointing toward Jesus: the scarlet cord, the bronze serpent, the ram caught in the thicket, the shepherd who leaves the ninety-nine. Children who grow up with this book absorb a Christ-centered hermeneutic before they know what a hermeneutic is. And parents who read it aloud find themselves moved by the gospel in ways that adult theology books sometimes fail to achieve.",
  },
  {
    name: "Jen Wilkin",
    role: "None Like Him — Raising Children Who Know Who God Is",
    quote:
      "Children need to know who God is before they can know who they are. Theology is not an advanced subject reserved for seminaries. It is the most basic knowledge any human being needs, and children are capable of it from remarkably early ages.",
    bio: "Jen Wilkin&rsquo;s approach to Christian formation — centered on the knowledge of God rather than on self-improvement or behavioral compliance — has had significant influence on how thoughtful evangelical parents approach their children&rsquo;s spiritual education. Her conviction is that children are robbed when they are given a therapeutic Christianity that focuses on their feelings and needs without giving them a robust knowledge of who God actually is. Children who know God&rsquo;s attributes — his holiness, his love, his sovereignty, his faithfulness — have a foundation for faith that survives adolescent deconstruction because it is built on something larger than themselves.",
  },
  {
    name: "Gloria Furman",
    role: "Missional Motherhood — The Everyday Ministry of Motherhood in the Grand Story of God",
    quote:
      "Mothers are not just managing a household. They are participating in the mission of God. Every meal prepared in faith, every prayer whispered over a sleeping child, every hard conversation about sin and grace — these are the acts of a missionary who happens to live in her own home.",
    bio: "Gloria Furman&rsquo;s Missional Motherhood (2016) places the work of mothers within the grand narrative of Scripture: the creation mandate, the covenant with Abraham, the commissioning of the church. Her argument is that the ordinary, repetitive, often invisible work of raising children is not a lesser calling than public ministry — it is a participation in the most important work God is doing in the world. For mothers who feel the weight of their calling and the smallness of their days, Furman offers a theology of significance: the mother on her knees beside a sick child&rsquo;s bed is doing eternal work.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Deuteronomy 6:4-7",
    text: "Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children.",
    reflection:
      "The sequence is the theology: the commands begin with God&rsquo;s identity (&ldquo;the LORD is one&rdquo;), move to the parent&rsquo;s own love (&ldquo;you shall love&rdquo;), and only then to the transmission (&ldquo;you shall teach your children&rdquo;). You cannot give what you do not have. The parent&rsquo;s own discipleship is the foundation of their children&rsquo;s formation.",
  },
  {
    reference: "Proverbs 22:6",
    text: "Train up a child in the way he should go; even when he is old he will not depart from it.",
    reflection:
      "Wisdom literature speaks in principles, not guarantees. The proverb describes what faithful, attentive parenting — parenting that works with the child&rsquo;s God-given bent rather than against it — tends to produce over the long arc of a life. It is not a control mechanism; it is a principle of patient, consistent investment in the direction of genuine faith.",
  },
  {
    reference: "Ephesians 6:4",
    text: "Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.",
    reflection:
      "The negative command is as important as the positive: do not exasperate. Parents have power, and power can crush as well as form. The standard is explicit — the discipline and instruction of the Lord, not cultural expectation or parental ego. The God who disciplines his children for their good and not his gratification is the model.",
  },
  {
    reference: "Luke 15:20",
    text: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.",
    reflection:
      "The father is watching the road. He does not wait to see if the son will come all the way; he runs to meet him. The embrace precedes the speech; the robe and ring precede any account of what happened. This is the model for the parent who receives a returning prodigal: compassion first, celebration second, conversation later.",
  },
  {
    reference: "Psalm 78:4",
    text: "We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD, and his might, and the wonders that he has done.",
    reflection:
      "The psalmist&rsquo;s declaration is both a commitment and a strategy: intergenerational faith transmission requires deliberate storytelling. The &ldquo;glorious deeds of the LORD&rdquo; — in history, in Scripture, in your own family&rsquo;s story — must be told explicitly, not assumed. The God who parted the Red Sea and raised Jesus from the dead is the God who is present in your house, and children need to be told.",
  },
  {
    reference: "Hebrews 12:10-11",
    text: "He disciplines us for our good, that we may share his holiness. For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it.",
    reflection:
      "The purpose of discipline is holiness — shared participation in the very character of God. The fruit is specific: the peaceful fruit of righteousness. Discipline that produces anxiety, suppressed rage, or hollow compliance has missed the mark. The parent who disciplines toward holiness and peace, as God does, is practicing what this text requires.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "FwmCvhB0SUo", title: "Shepherding a Child's Heart — Tedd Tripp" },
  { videoId: "vdqFcr2kN-Q", title: "Gospel-Centered Parenting — Paul David Tripp" },
  { videoId: "QrDe6K2P68g", title: "The Shema and Home Discipleship" },
  { videoId: "mf33TM7CKRI", title: "Grace-Based vs. Law-Based Parenting" },
  { videoId: "YIl6WO-G2d4", title: "Raising Children Who Know God — Jen Wilkin" },
  { videoId: "rjrJFkDalVc", title: "When Your Child Walks Away From Faith" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianParentingGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PRNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [child, setChild] = useState("");
  const [challenge, setChallenge] = useState("");
  const [gospelMoment, setGospelMoment] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PRNEntry[]);
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
    if (!child.trim() || !challenge.trim()) return;
    const entry: PRNEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      child: child.trim(),
      challenge: challenge.trim(),
      gospelMoment: gospelMoment.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setChild("");
    setChallenge("");
    setGospelMoment("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? AMBER : BORDER}`,
    background: active ? "rgba(245, 158, 11, 0.12)" : "transparent",
    color: active ? AMBER : MUTED,
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
    color: AMBER,
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
                color: AMBER,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Marriage &amp; Family
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Train Up a Child: Christian Parenting
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Raising children in the faith is one of the most important and most demanding callings
              God gives. This guide explores the theology of Christian parenting — the Shema, the
              prodigal father as model, discipline vs. punishment, grace-based vs. law-based
              parenting, children as image-bearers, and the limits of parenting — alongside the
              voices, Scriptures, and practices that form children and form parents.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${AMBER}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;The most important thing I can do for my children is not to give them a
                good education or a secure future. It is to love God with everything I have, and
                let them watch.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>John Piper</p>
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
                Before parenting is a technique it is a theology — a set of convictions about who
                children are, who God is, and what parents are called to do. These eight studies
                trace the biblical theology of parenting from Proverbs to Ephesians to the parable
                of the Running Father.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: AMBER,
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
                        background: "rgba(245, 158, 11, 0.07)",
                        border: `1px solid rgba(245, 158, 11, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The Shema, the prodigal father, the exasperation warning, the discipline that
                  yields righteous fruit — these are not separate topics but aspects of a single
                  calling: to make the character of God visible to children in ordinary life. The
                  parent who has genuinely wrestled with who God is, and who loves him genuinely
                  rather than performing that love, is the parent most likely to pass that faith on.
                  Explore the related guide on{" "}
                  <Link href="/christian-marriage-guide" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Marriage
                  </Link>{" "}
                  or go deeper on grace-based living with{" "}
                  <Link href="/christian-kindness" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Kindness
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
                Parenting is a vocation, and every vocation requires practices — rhythms and
                disciplines that give faith somewhere to live and grow in the ordinary course of
                family life. These six practices are drawn from Scripture, theology, and the
                testimony of parents who have built homes where faith flourishes. Start with one.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: AMBER,
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
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the long game
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Parenting yields its most important fruit in the decades after the practices are
                  established. The family that has eaten dinner together and talked about faith for
                  eighteen years has built something that a single retreat cannot create. The parent
                  who has prayed over their child by name every night has given that child a
                  foundation that will hold when the storms come. The practices listed here are not
                  remarkable in themselves; their power is in the repetition. Be faithful in small
                  things. The harvest belongs to God.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses to gospel-centered parenting — theologians, practitioners, and writers
                whose work has shaped how the church thinks about raising children in the faith.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: AMBER,
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
                      background: "rgba(245, 158, 11, 0.06)",
                      borderLeft: `3px solid ${AMBER}`,
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
                Six passages at the center of the Bible&rsquo;s teaching on parenting — to read
                slowly, memorize, pray, and carry into the daily work of raising children.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these over your children
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take one passage per week and pray it over each of your children by name.
                  Adoration: thank God for what the passage reveals about him as Father.
                  Confession: name the ways you have fallen short of the text (&ldquo;I have
                  exasperated where you called me to form&rdquo;). Petition: ask God specifically
                  for what the passage promises or commands (&ldquo;grow the peaceful fruit of
                  righteousness in [name] through the discipline we practice&rdquo;). The parent who
                  prays scripture over their children is doing the most important thing they can do.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions for the ongoing work of parenting: a child&rsquo;s name, a current
                challenge with them, and a gospel moment — a time you reflected God&rsquo;s grace
                or truth to them. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New parenting journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="prn-child" style={labelStyle}>
                    Child&rsquo;s name
                  </label>
                  <input
                    id="prn-child"
                    type="text"
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                    placeholder="The child this entry is about"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="prn-challenge" style={labelStyle}>
                    Current parenting challenge with them
                  </label>
                  <textarea
                    id="prn-challenge"
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="A specific struggle, behavior, heart issue, season of difficulty — name it honestly"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="prn-gospel" style={labelStyle}>
                    A gospel moment
                  </label>
                  <textarea
                    id="prn-gospel"
                    value={gospelMoment}
                    onChange={(e) => setGospelMoment(e.target.value)}
                    placeholder="A time you reflected God's grace, forgiveness, truth, or love to this child — a moment when the gospel showed up in your parenting"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!child.trim() || !challenge.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !child.trim() || !challenge.trim() ? BORDER : AMBER,
                    color: !child.trim() || !challenge.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !child.trim() || !challenge.trim() ? "not-allowed" : "pointer",
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
                      Name a child, the challenge you&rsquo;re facing with them, and a moment when
                      the gospel showed up in your parenting. A journal of your children&rsquo;s
                      formation begins with one honest entry.
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
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: AMBER, marginBottom: 2 }}>
                              {entry.child}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.8rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.child} from ${entry.date}`}
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
                            Challenge
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.challenge}
                          </p>
                        </div>

                        {entry.gospelMoment && (
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
                              Gospel moment
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.gospelMoment}
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
                Teaching on shepherding children&rsquo;s hearts, gospel-centered parenting, the
                Shema and home discipleship, grace-based parenting, and what to do when a child
                walks away from faith.
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
              The parent who prays
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The most important thing you will do as a parent is pray. Not the daily devotional,
              not the right curriculum, not the right school — pray. The parent who prays
              consistently and specifically for their children is doing something no technique can
              replicate: inviting the God who loves their children more than they do to do in their
              children what no parent can do alone. You plant and water; God gives the growth.
              Plant faithfully. Water generously. Give the outcome to God.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link href="/christian-marriage-guide" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Marriage
              </Link>
              , build the home environment with{" "}
              <Link href="/christian-hospitality" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Hospitality
              </Link>
              , or go deeper on grace with{" "}
              <Link href="/christian-kindness" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Kindness
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
