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

const STORAGE_KEY = "vine_marriageguide_entries";

interface MRGEntry {
  id: string;
  date: string;
  marriageArea: string;
  christlikeMoment: string;
  prayerTogether: string;
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
    badge: "Theology of Marriage",
    title: "Covenant vs. Contract — The Crucial Distinction",
    paragraphs: [
      "The most important distinction in a theology of marriage is the one between covenant and contract. A contract is a conditional exchange: two parties agree to deliver goods or services, and if either party fails to perform, the other is released from obligation. Contracts are fundamentally self-protective — they exist to ensure that I get what I was promised. Marriage as contract says: I will love you as long as you remain lovable, as long as you meet my needs, as long as this is working for me.",
      "A covenant is something entirely different. In the Old Testament, a covenant (berith) creates a new relationship — it does not merely regulate an existing one. God did not make a contract with Abraham or Israel; he bound himself to them by covenant, by solemn promise, and the binding was unconditional. Malachi 2:14 calls marriage a covenant: &ldquo;the LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant.&rdquo; The covenant is not merely a stronger contract. It is a different category — a promise made before God that creates an obligation that does not dissolve when the feelings do.",
      "This distinction carries enormous practical weight. The covenant-keeping spouse asks not &ldquo;is this still worth it for me?&rdquo; but &ldquo;what does my promise require of me now?&rdquo; The covenant does not ignore pain or rationalize abuse — it is not a trap. But it reshapes the fundamental question from &ldquo;what am I getting?&rdquo; to &ldquo;what am I giving?&rdquo; Covenant love is hesed — the stubborn, persistent, showing-up love that the Old Testament sings from beginning to end. The God who would not abandon Israel despite Israel&rsquo;s faithlessness is the God whose image Christian spouses are learning to bear.",
    ],
    callout: {
      label: "The word",
      text: "Berith (בְּרִית): covenant — a solemn, binding commitment made before God that creates a new relationship and whose obligations do not dissolve with changing feelings or circumstances.",
    },
  },
  {
    badge: "Ephesians 5:22-33",
    title: "Mutual Submission — Not Hierarchy Without Sacrifice",
    paragraphs: [
      "Ephesians 5:22-33 is the New Testament&rsquo;s most sustained treatment of marriage, and it is almost always misread when it is read in isolation from verse 21: &ldquo;submitting to one another out of reverence for Christ.&rdquo; The call to mutual submission is the heading under which the specific instructions to wives and husbands fall. The passage does not begin with hierarchy; it begins with reciprocity.",
      "Wives are called to submit to their husbands &ldquo;as to the Lord&rdquo; (5:22) — an analogy to the church&rsquo;s relationship with Christ. Husbands are called to love their wives &ldquo;as Christ loved the church and gave himself up for her&rdquo; (5:25). Notice the asymmetry of the demands: the wife is asked for trust; the husband is asked for self-giving love even to the point of death. The husband&rsquo;s &ldquo;headship&rdquo; is exercised by sacrifice, not domination. The head who refuses to give himself up has misunderstood his role entirely.",
      "Paul&rsquo;s deepest point is ecclesial: Christian marriage is a living sign of the relationship between Christ and the church. Both spouses are actors in a parable that the world is reading. The husband who loves sacrificially makes the gospel visible; the wife who trusts and respects reflects the church&rsquo;s trust in Christ. The theological stakes of marital health are therefore not merely personal — a Christian marriage is public theology. To flatten the passage to &ldquo;wives obey&rdquo; is to miss the point; to dismiss it as culturally conditioned is to miss the gospel it carries.",
    ],
  },
  {
    badge: "Genesis 2:24",
    title: "The Two Shall Become One Flesh — Leaving, Cleaving, Weaving",
    paragraphs: [
      "&ldquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh&rdquo; (Genesis 2:24). Three verbs organize the entire theology of marriage in this verse: leaving, holding fast (cleaving), and becoming one flesh. Each is essential; skipping any one of them creates a disordered marriage.",
      "Leaving means the marriage bond displaces the parent-child bond as the primary human relationship. The man or woman who cannot leave — who remains emotionally, financially, or practically enmeshed with parents — has not yet entered marriage fully. Cleaving (the Hebrew dabaq — to cling, to be glued to) describes the fierce, exclusive attachment that constitutes the marriage bond. One-flesh union is then the comprehensive result: physical, emotional, spiritual, social — a new human unit that is more than the sum of its parts.",
      "Jesus quotes this text when the Pharisees ask about divorce: &ldquo;what God has joined together, let no man separate&rdquo; (Matthew 19:6). The one-flesh union is not merely a legal arrangement but a divine act — God himself joins the two. This is why divorce is always a tearing, always painful, even when necessary. And it is why the Song of Solomon is in the canon: the physical union of husband and wife, celebrated with full-bodied eros, is not a concession to human weakness but a reflection of the covenant God made with his people — passionate, exclusive, faithful, and delighting in the beloved.",
    ],
  },
  {
    badge: "Theology of Sanctification",
    title: "Marriage as Icon of Christ and the Church — Gary Thomas",
    paragraphs: [
      "Gary Thomas&rsquo;s Sacred Marriage asks the most reorienting question in pastoral writing on marriage: &ldquo;What if God designed marriage to make us holy more than to make us happy?&rdquo; The question is not a rebuke of happiness — it is an elevation of it. It suggests that the happiness built on the foundation of two people being formed into Christlikeness together is incomparably more durable than the happiness built on romantic chemistry and compatible temperaments.",
      "The icon theology is this: Christian marriage is the most intimate school of sanctification God provides for most people. The person you marry will reveal things about your character that no other relationship will surface — your capacity for patience, your instinct for self-protection, your willingness to forgive, the distance between your public Christianity and your private self. A spouse sees all of it. The daily friction of two sinners committed to each other is not a sign that the marriage is broken; it is the instrument of transformation.",
      "The Ephesians 5 logic amplifies this: the husband is to love his wife &ldquo;that he might sanctify her&rdquo; (5:26). The purpose of the husband&rsquo;s love is the wife&rsquo;s growth in holiness. And the reverse is equally true. The marriage that takes this seriously is not just a private arrangement between two people — it is a sanctification project that God is running, using the specific difficulties of this specific person as the curriculum. The question in every conflict is not only &ldquo;who is right?&rdquo; but &ldquo;what is God forming in me through this?&rdquo;",
    ],
  },
  {
    badge: "Matthew 19 / 1 Corinthians 7",
    title: "Divorce, Hardness of Heart, and the Singleness That Is Also Whole",
    paragraphs: [
      "When the Pharisees ask Jesus about the grounds for divorce, he does not answer the legal question directly. He reaches past Moses to Genesis 2 — to God&rsquo;s original design — and says that Moses permitted divorce because of the hardness of hearts (Matthew 19:8). Divorce was a pastoral concession to human sinfulness, not God&rsquo;s creational intent. Jesus permits divorce on grounds of sexual immorality (porneia — a broad term covering serious sexual betrayal); Paul adds the desertion of an unbelieving spouse (1 Corinthians 7:15). These are permissions, not commands.",
      "But the passage also contains one of the New Testament&rsquo;s most neglected statements: &ldquo;Not everyone can receive this saying, but only those to whom it is given... There are eunuchs who have made themselves eunuchs for the sake of the kingdom of heaven. Let the one who is able to receive this receive it&rdquo; (Matthew 19:11-12). Jesus treats singleness as a high calling — not a lesser state but a different gift, one that permits undivided devotion to the kingdom. Paul develops this in 1 Corinthians 7: the single person is not incomplete; she is freed for a particular service. The church that treats singleness as a waiting room for marriage has misread its own scriptures.",
      "The pastoral implication is double: the church must take the permanence of marriage seriously enough to offer real support, counsel, and community to couples in difficulty — not abandoning them to the privacy of their struggle. And the church must honor both callings — marriage and singleness — as genuine gifts from God, neither superior, both whole.",
    ],
  },
  {
    badge: "Hermeneutics",
    title: "Why Christians Cannot Treat Marriage as Just a Social Institution",
    paragraphs: [
      "Contemporary culture increasingly treats marriage as a private arrangement between two consenting adults — a social institution that exists for the mutual benefit of the individuals who enter it, and which can be dissolved when it no longer serves that purpose. This is a reasonable view from within a secular framework. Christians cannot share it, not because they are traditionalists who resist change, but because of the specific theological claims the Bible makes about what marriage is.",
      "Marriage in Scripture is not primarily a social institution — it is a covenant enacted before God, a sign of God&rsquo;s covenant with Israel and Christ&rsquo;s relationship with the church. Its form — one man, one woman, for life — is not a cultural preference but the shape required by what it signifies. The husband represents Christ; the wife represents the church; the permanence represents the faithfulness of God. Change the form and you change (or erase) the sign.",
      "This does not mean Christian couples should be hostile to or dismissive of secular marriage. It means they understand their own marriage differently — as a vocation with a purpose that extends beyond their personal happiness, as a public theology that is being read by their neighbors, their children, and their church. It means that when marriage is hard, the Christian has theological resources that secular culture cannot offer: a God who knows covenant faithfulness at infinite cost, a gospel of forgiveness that can restore what sin has broken, and a community of the church to hold them accountable and carry them through.",
    ],
  },
  {
    badge: "Song of Solomon",
    title: "The Song of Songs — The Celebration of Eros",
    paragraphs: [
      "The Song of Solomon is the most awkward book in the Protestant canon — not because it is difficult to interpret but because it is embarrassingly clear. It is a poem of erotic love between a man and a woman, and it was nearly excluded from the Hebrew canon by rabbis scandalized by its frankness. The Talmud preserves Rabbi Akiva&rsquo;s decisive defense: &ldquo;all the Writings are holy, but the Song of Songs is the Holy of Holies.&rdquo; His confidence was not merely allegorical; it was theological — that the passionate love of a husband for his wife reflects something true about the love of God.",
      "The Song celebrates: physical desire (&ldquo;let him kiss me with the kisses of his mouth&rdquo;), beauty (&ldquo;your eyes are doves&rdquo;), longing (&ldquo;I sought him whom my soul loves&rdquo;), exclusivity (&ldquo;I am my beloved&rsquo;s and my beloved is mine&rdquo;), and the power of love (&ldquo;love is strong as death; its flashes are flashes of fire, the very flame of the LORD&rdquo;). The physical delight in the beloved is not spiritualized away — it is celebrated as God&rsquo;s gift.",
      "The theological implication is significant: eros, physical desire and delight, is not the enemy of Christian marriage but one of its God-given gifts. The church has sometimes fostered a body-soul dualism that treats physical love as tolerated rather than celebrated. The Song of Songs stands against that. The couple who brings their physical life fully into their covenant — who see their desire for each other as a gift to steward rather than a weakness to manage — is reading their marriage more biblically than the couple who has quietly agreed to treat physical intimacy as a transaction.",
    ],
    callout: {
      label: "The verse",
      text: "Song of Solomon 8:6-7 — Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Weekly State of the Union",
    summary:
      "A structured, regular conversation — thirty minutes, same time each week — in which both spouses check the temperature of the marriage in each of its major dimensions: emotional, physical, spiritual, practical.",
    steps: [
      "Set a recurring time and protect it as you would a doctor&rsquo;s appointment. Weekly is the right rhythm — monthly is too infrequent; daily is too urgent. Saturday morning or Sunday evening both work well.",
      "Move through four areas in sequence: How are we doing emotionally (are we connected, or have we been ships passing)? How are we doing spiritually (are we praying together, is faith alive in the home)? How are we doing physically (intimacy, rest, health)? What is coming logistically this week?",
      "Listen more than you report. The goal is not to air grievances but to take each other&rsquo;s pulse. Ask the second question: &ldquo;What else?&rdquo; The first answer is often the safe one; the second is often the real one.",
      "Close with prayer — specifically for each other, for the marriage, and for one concrete thing each person is carrying. A marriage where spouses pray over each other by name has a different texture than one where prayer is a formality.",
    ],
    anchor: "Ephesians 5:21 — Submitting to one another out of reverence for Christ.",
  },
  {
    number: "02",
    title: "Sacred Marriage Reading and Discussion",
    summary:
      "Reading a marriage book together — not as a self-improvement project but as a shared theological exercise — creates common language and mutual expectation.",
    steps: [
      "Start with Gary Thomas&rsquo;s Sacred Marriage or Tim Keller&rsquo;s The Meaning of Marriage. Read a chapter per week independently, then discuss it together for twenty to thirty minutes.",
      "Focus the discussion on what surprised you, what convicted you, and what you want to do differently — not on what your spouse should do differently. The book is a mirror, not a weapon.",
      "Write down one takeaway per chapter in the Journal tab on this page. Over time, your entries will become a record of the marriage&rsquo;s growth — areas worked on, language developed, moments of genuine change.",
      "When you finish one book, choose the next together. The couple that is always learning about marriage together is the couple that does not take the marriage for granted.",
    ],
    anchor: "Proverbs 27:17 — As iron sharpens iron, so one person sharpens another.",
  },
  {
    number: "03",
    title: "The Repair Attempt",
    summary:
      "John Gottman&rsquo;s research identifies repair attempts — behaviors that interrupt a negative cycle before it escalates — as the single strongest predictor of long-term marital success. Practice them consciously.",
    steps: [
      "Learn your own early warning signs of flooding — the physical sensation of escalation: raised heart rate, hot face, clenched jaw. When you notice them, name it: &ldquo;I need five minutes. I want to keep talking but I&rsquo;m too activated right now.&rdquo;",
      "Repair before resolution: humor (when appropriate), a light touch on the arm, &ldquo;I love you even though I&rsquo;m frustrated right now,&rdquo; or &ldquo;I know I&rsquo;m part of this.&rdquo; Repair breaks the cycle; it does not require that the conflict be resolved.",
      "After a conflict, always return to repair — within twenty-four hours at most. A conflict that ends without repair accumulates as emotional residue. Bring it back: &ldquo;I don&rsquo;t think that went well. Can we try again?&rdquo;",
      "Memorize Colossians 3:13 together and pray it over your conflicts: &ldquo;bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.&rdquo;",
    ],
    anchor: "Colossians 3:13 — Forgiving each other; as the Lord has forgiven you, so you also must forgive.",
  },
  {
    number: "04",
    title: "Praying Scripture Over Your Spouse",
    summary:
      "Praying specifically and scripturally for your spouse — by name, with particular passages — is one of the most powerful practices in Christian marriage, and one of the most neglected.",
    steps: [
      "Choose three passages to pray over your spouse this month: Ephesians 3:14-19 (the love of Christ filling them), Philippians 1:9-11 (love abounding in knowledge), and Colossians 1:9-12 (knowing God&rsquo;s will and bearing fruit). Personalize them: &ldquo;Father, I pray that [name] would know the breadth and length and height and depth of the love of Christ.&rdquo;",
      "Pray aloud together when you can. The vulnerability of honest prayer with a spouse — including prayers of confession — deepens intimacy more than almost any other practice. Studies consistently find that couples who pray together report higher marital satisfaction.",
      "When you are angry at your spouse, pray for them anyway. Not as a performance, but as an act of will: &ldquo;Lord, I don&rsquo;t feel this right now, but I pray for [name]&rsquo;s good.&rdquo; Prayer redirects our attention from the grievance to the person.",
      "Record your prayers in the Journal tab. Over time, you will have a history of what you have asked God for on behalf of your spouse — a record of faith, hope, and covenant love.",
    ],
    anchor: "Ephesians 3:16-17 — That according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith.",
  },
  {
    number: "05",
    title: "Shared Sabbath",
    summary:
      "A shared day of rest — protected from work, screens, and demands — is one of the oldest marital health practices in the Christian tradition, and one of the hardest to sustain in a culture of productivity.",
    steps: [
      "Designate one day per week as the family Sabbath and protect it from work email, social media, and obligatory socializing. The Sabbath is not a day of doing nothing — it is a day of doing different things, together.",
      "Build a shared Sabbath liturgy: morning worship (attending church together or worshiping at home), an unhurried meal, outdoor time, reading, conversation. The structure is yours; the rest is the point.",
      "Use the Sabbath for the conversations that the week never has time for: dreams, theology, memories, the children&rsquo;s inner lives, your own. The couple who walks slowly together one day per week knows each other in a way the couple who only meets in logistics does not.",
      "Make it a day of deliberate delight in each other — physical affection, laughter, the things you liked about each other when you met. Eros and Sabbath are not as far apart as we imagine; both involve ceasing from striving and simply being present to the gift in front of you.",
    ],
    anchor: "Genesis 2:3 — God blessed the seventh day and made it holy, because on it God rested from all his work.",
  },
  {
    number: "06",
    title: "Marriage Mentoring — Both Directions",
    summary:
      "Being mentored by a couple further along, and mentoring a couple earlier in the journey, gives marriage theological accountability and practical wisdom in both directions.",
    steps: [
      "Seek an older couple whose marriage you admire — not one that appears perfect but one that appears real, where you can see genuine love and long faithfulness. Ask if they would meet with you four times per year to talk honestly about marriage.",
      "Come prepared with real questions: how do you handle conflict well? What almost broke you, and what held you? What do you wish someone had told you in year five? The best marriage mentoring is honest, not inspirational.",
      "Offer to mentor a younger couple. You do not need to be an expert — you need to be willing to be honest about your experience, to listen well, and to pray with them. The couple mentored most effectively is the couple who knows they are watched and who wants to be worth watching.",
      "Use the Journal tab to record what you are learning from your mentors. Wisdom received but not recorded tends not to stick; wisdom written down becomes part of the marriage&rsquo;s shared memory.",
    ],
    anchor: "Titus 2:3-4 — Older women are to teach what is good, and so train the young women to love their husbands.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Gary Thomas",
    role: "Sacred Marriage — Sanctification as the Purpose of Marriage",
    quote:
      "What if God designed marriage to make us holy more than to make us happy? The holiness God calls us to is not a list of rules to be followed but a transformation of character to be undergone — and marriage is one of his chosen instruments.",
    bio: "Gary Thomas&rsquo;s Sacred Marriage (1999) reoriented evangelical pastoral writing on marriage by asking a question no one was asking: what if the primary purpose of marriage is not happiness but holiness? His thesis is not that happiness is wrong but that it is not the right goal — and that the couple who makes it their primary goal will be disappointed, because marriage is not designed to make selfish people happy. It is designed to make two sinners gradually more Christlike through the daily practice of covenant love. Thomas draws on church history, spiritual formation theology, and pastoral experience to build a vision of marriage as the most intensive sanctification school most Christians will attend.",
  },
  {
    name: "Tim Keller",
    role: "The Meaning of Marriage — Gospel-Centered Covenant",
    quote:
      "In a covenant, you make a promise that you will be faithful regardless of what the other person does. In marriage, you are promising to love, not merely while you are in love. You are promising to love even when you don&rsquo;t feel it. That&rsquo;s the only kind of love that can actually transform you.",
    bio: "Tim Keller&rsquo;s The Meaning of Marriage (2011), co-written with his wife Kathy, is the best single-volume evangelical theology of marriage in print. Keller grounds the entire book in the gospel: the covenant God made with Israel and the covenant Christ made with the church are the templates for what marriage is and how it works. His chapters on the covenant, on friendship in marriage, on sexual exclusivity, and on the roles debate are models of biblical theology applied to pastoral reality. His conviction — that the couple who understands the gospel has the deepest possible resources for building a lasting marriage — runs through every page.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Letters and Papers from Prison — On the Reality of Marriage",
    quote:
      "It is not your love that sustains your marriage, but from now on, the marriage that sustains your love. Marriage is more than your love for each other. It has a higher dignity and power, for it is God&rsquo;s holy ordinance, through which he wills to perpetuate the human race till the end of time.",
    bio: "Dietrich Bonhoeffer wrote one of the most theologically profound short treatments of marriage from his prison cell — a wedding sermon for his niece, written while he was imprisoned by the Nazis, who would execute him the following year. His central insight is that marriage is not sustained by romantic love; it is a divine institution that, when entered faithfully, creates the conditions in which love can grow beyond feeling into something permanent. He saw, from the vantage point of a man who could not marry the woman he loved (Maria von Wedemeyer), with unusual clarity what marriage truly is: not a private arrangement between two people, but God&rsquo;s ordinance through which human life is ordered and the image of covenant love is displayed.",
  },
  {
    name: "C.S. Lewis",
    role: "Mere Christianity — The Logic of Christian Marriage",
    quote:
      "Being in love is a good thing, but it is not the best thing. There are many things below it, but there are also things above it. You cannot make it the basis of a whole life. It is a noble feeling, but it is still a feeling. Now no feeling can be relied on to last in its full intensity, or even to last at all.",
    bio: "C.S. Lewis&rsquo;s chapters on Christian marriage in Mere Christianity remain the most lucid short explanation of why Christian marriage is not a sentimental but a theological institution. His analysis of &ldquo;being in love&rdquo; versus &ldquo;love&rdquo; — the former a feeling that fades, the latter a decision and a discipline — cuts through the romanticism that makes contemporary people so poorly equipped for actual marriage. His account of how the feeling of love is renewed through the decision to act lovingly, and how the Christian structure of marriage is not a cage but a liberation, are among the most practically useful things ever written on the subject.",
  },
  {
    name: "John Gottman",
    role: "The Seven Principles for Making Marriage Work — The Science of Lasting Love",
    quote:
      "The determining factor in whether wives feel satisfied with sex, romance, and passion in their marriage is, by 70 percent, the quality of the couple&rsquo;s friendship. For men, the determining factor is, by 70 percent, the quality of the couple&rsquo;s friendship.",
    bio: "John Gottman is a secular researcher, not a theologian — but his forty years of empirical research on what makes marriages succeed or fail is among the most useful material a Christian couple can read. His discovery that contempt is the single most reliable predictor of divorce, his identification of the Four Horsemen (criticism, contempt, defensiveness, stonewalling) and their antidotes, his research on repair attempts, and his work on the importance of emotional friendship within marriage are all entirely compatible with a Christian theology of marriage. What Gottman shows empirically, the Bible teaches theologically: marriage requires consistent investment, genuine respect, and the willingness to turn toward each other rather than away.",
  },
  {
    name: "Paul David Tripp",
    role: "What Did You Expect? — Marriage Lived in the Real World",
    quote:
      "Your marriage is in the middle of a war. It is not a war with your spouse. It is not a war with your in-laws or with your circumstances. It is a war with sin — yours and your spouse&rsquo;s — and with the spiritual forces of evil that want to destroy what God has joined together.",
    bio: "Paul David Tripp&rsquo;s What Did You Expect? (2010) is the most ruthlessly honest treatment of what makes marriage hard, and why that hardness is the point. Tripp&rsquo;s central argument is that most marriages are damaged not by dramatic crises (infidelity, abuse) but by the accumulation of ordinary selfishness, minor disappointments, small failures of love — and that the gospel is sufficient for all of it. His framework — that every marriage is a war against sin, conducted by two sinners in desperate need of grace — is not pessimistic but liberating. It rescues both spouses from the tyranny of unrealistic expectation and points them toward the grace that is actually available to them in Christ.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Ephesians 5:25-27",
    text: "Husbands, love your wives, as Christ loved the church and gave himself up for her, that he might sanctify her, having cleansed her by the washing of water with the word, so that he might present the church to himself in splendor, without spot or wrinkle or any such thing, that she might be holy and without blemish.",
    reflection:
      "The measure of a husband&rsquo;s love is the love of Christ for the church — a love that gave itself up, that aimed at the beloved&rsquo;s holiness, that did not stop short of death. The purpose of the love is also striking: &ldquo;that he might sanctify her.&rdquo; The husband who loves his wife well is participating in her sanctification. Marriage is not merely a domestic arrangement; it is a spiritual vocation.",
  },
  {
    reference: "Genesis 2:24",
    text: "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
    reflection:
      "Three verbs: leave, hold fast, become. Each is active; each is a choice; each is irreversible in its effect. The one-flesh union that results is not a metaphor — Jesus treats it as a literal divine act (&ldquo;what God has joined together&rdquo;). The verse is the foundation of Christian marriage&rsquo;s permanence and exclusivity.",
  },
  {
    reference: "Song of Solomon 8:6-7",
    text: "Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD. Many waters cannot quench love, neither can floods drown it.",
    reflection:
      "The Song&rsquo;s climactic declaration: love is not a sentiment but a force — &ldquo;the very flame of the LORD,&rdquo; es yahweh in the Hebrew, a flame that belongs to God himself. The love between husband and wife participates in something divine. The exclusivity (&ldquo;set me as a seal&rdquo;), the intensity (&ldquo;strong as death&rdquo;), and the persistence (&ldquo;many waters cannot quench&rdquo;) are all marks of covenant, not merely of romantic feeling.",
  },
  {
    reference: "Malachi 2:14-15",
    text: "The LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant. Did he not make them one, with a portion of the Spirit in their union?",
    reflection:
      "God is named as the witness of the marriage covenant — which means the covenant is made not just between two people but before and with God. Faithlessness in marriage is therefore not only a relational failure but a breach of covenant with God as witness. &ldquo;A portion of the Spirit in their union&rdquo; — the presence of God&rsquo;s Spirit is part of what a covenant marriage contains.",
  },
  {
    reference: "Matthew 19:4-6",
    text: "He answered, Have you not read that he who created them from the beginning made them male and female, and said, Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh? So they are no longer two but one flesh. What therefore God has joined together, let not man separate.",
    reflection:
      "Jesus&rsquo; response to a question about divorce goes back behind Moses to creation — to God&rsquo;s original design. The Pharisees ask about the maximum permissible; Jesus asks about the creational ideal. &ldquo;What God has joined together&rdquo; is a divine passive — God is the one who joins. The permanence of marriage is not a human preference but a divine act.",
  },
  {
    reference: "Colossians 3:18-19",
    text: "Wives, submit to your husbands, as is fitting in the Lord. Husbands, love your wives, and do not be harsh with them.",
    reflection:
      "The simplest statement of the Pauline marital ethic. The prohibition against harshness is the most practical negative command in the New Testament&rsquo;s marriage teaching — and perhaps the most violated. Harshness is the opposite of the love Paul commands. The husband who has mastered the art of &ldquo;do not be harsh&rdquo; has made enormous progress in learning to love as Christ loves.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "0k-iXQHVfCo", title: "The Gospel and Marriage — Tim Keller" },
  { videoId: "wBdLYMpCF3Y", title: "Sacred Marriage — Gary Thomas" },
  { videoId: "7aE5mfE4jXM", title: "Ephesians 5 and Mutual Submission" },
  { videoId: "A1qEi-u9fLc", title: "Covenant Marriage — The Meaning of Your Vows" },
  { videoId: "tVl9Fgjj8j4", title: "Marriage as Sanctification — Paul David Tripp" },
  { videoId: "NuJWTGUzEeM", title: "The Song of Solomon — Celebrating Eros" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianMarriageGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<MRGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [marriageArea, setMarriageArea] = useState("");
  const [christlikeMoment, setChristlikeMoment] = useState("");
  const [prayerTogether, setPrayerTogether] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as MRGEntry[]);
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
    if (!marriageArea.trim() || !christlikeMoment.trim()) return;
    const entry: MRGEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      marriageArea: marriageArea.trim(),
      christlikeMoment: christlikeMoment.trim(),
      prayerTogether: prayerTogether.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setMarriageArea("");
    setChristlikeMoment("");
    setPrayerTogether("");
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
              As Christ Loved the Church: Christian Marriage
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Christian marriage is a covenant before God, a school of sanctification, and a living
              icon of the relationship between Christ and the church. This guide explores the
              theology of marriage — covenant vs. contract, mutual submission, the one-flesh union,
              the Song of Songs, the hardness of heart behind divorce, and the wholeness of
              singleness — alongside the voices, Scriptures, and practices that shape a marriage
              for the long haul.
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
                &ldquo;It is not your love that sustains your marriage, but from now on, the
                marriage that sustains your love.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>
                Dietrich Bonhoeffer, Letters and Papers from Prison
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
                Before marriage is a practice it is a doctrine — something God reveals about himself
                and about what human life is for. These seven studies trace the theology of marriage
                from Genesis to Ephesians to the Song of Songs.
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
                  Covenant and eros, sanctification and sacrifice, permanence and freedom — these are
                  not competing themes in the theology of Christian marriage but aspects of a single
                  reality. The God who covenanted with Israel at Sinai is the God who designed
                  marriage as an icon of that covenant; the Christ who loved the church to death is
                  the pattern for every husband; the Song of Songs that celebrates the body is
                  scripture as surely as Ephesians. Christian marriage holds all of it together and
                  asks two people to live it out, one ordinary day at a time. Explore related guides
                  on{" "}
                  <Link href="/christian-parenting-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Parenting
                  </Link>{" "}
                  or go deeper on covenant love with{" "}
                  <Link href="/christian-kindness" style={{ color: ROSE, textDecoration: "underline" }}>
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
                Marriage is a vocation, and every vocation requires practices — rhythms and
                disciplines that give love somewhere to live when feeling fades. These six practices
                are drawn from theology, research, and the testimony of couples who have built
                marriages that last. Start with one.
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
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about expectations
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Marriage is not improved by grand gestures; it is built by ordinary faithfulness
                  repeated for decades. The couple who does the Weekly State of the Union for twenty
                  years knows each other in a way no weekend retreat can create. The couple who
                  prays scripture over each other daily has a different marriage at year thirty than
                  the couple who meant to start but never did. Choose one practice. Do it for thirty
                  days. Then choose another.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses to covenant marriage — theologians, researchers, and practitioners
                who have thought most deeply about what makes a Christian marriage endure and
                flourish.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: ROSE,
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
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages at the center of the Bible&rsquo;s teaching on marriage — to read
                slowly, memorize, pray, and carry into the daily life of covenant love.
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these together
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take one passage per week and pray it together. Adoration: thank God for what the
                  passage reveals about him (&ldquo;Father, you joined us — you are the one who did
                  this&rdquo;). Confession: name the ways you have fallen short of the text
                  (&ldquo;I have been harsh where you called me to be gentle&rdquo;). Petition:
                  ask God specifically for what the passage commands (&ldquo;form sacrificial love
                  in me for [name] this week&rdquo;). The couple that prays scripture over their
                  marriage reads the map while the journey is happening.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions for the ongoing work of marriage: the area you&rsquo;re working on,
                a moment of Christlike love you showed or received, and a prayer you prayed
                together. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New marriage journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mrg-area" style={labelStyle}>
                    Area of the marriage you&rsquo;re working on
                  </label>
                  <textarea
                    id="mrg-area"
                    value={marriageArea}
                    onChange={(e) => setMarriageArea(e.target.value)}
                    placeholder="Communication, conflict repair, physical intimacy, spiritual rhythm, a specific recurring struggle — name it honestly"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mrg-christlike" style={labelStyle}>
                    A moment of Christlike love you showed or received
                  </label>
                  <textarea
                    id="mrg-christlike"
                    value={christlikeMoment}
                    onChange={(e) => setChristlikeMoment(e.target.value)}
                    placeholder="Sacrifice, patience, forgiveness, kindness, the repair attempt that worked — a concrete moment when the gospel showed up in the marriage"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="mrg-prayer" style={labelStyle}>
                    A prayer you prayed together
                  </label>
                  <textarea
                    id="mrg-prayer"
                    value={prayerTogether}
                    onChange={(e) => setPrayerTogether(e.target.value)}
                    placeholder="Even a short one — what you brought to God together this week"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!marriageArea.trim() || !christlikeMoment.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !marriageArea.trim() || !christlikeMoment.trim() ? BORDER : ROSE,
                    color:
                      !marriageArea.trim() || !christlikeMoment.trim() ? MUTED : "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !marriageArea.trim() || !christlikeMoment.trim()
                        ? "not-allowed"
                        : "pointer",
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
                      Name the area you&rsquo;re working on, a moment of grace you saw, and a
                      prayer you prayed. A journal of your marriage&rsquo;s growth begins with one
                      honest entry.
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
                          <span
                            style={{
                              color: ROSE,
                              fontSize: "0.8rem",
                              fontWeight: 600,
                            }}
                          >
                            {entry.date}
                          </span>
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
                            Working on
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.marriageArea}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.prayerTogether ? 10 : 0 }}>
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
                            Christlike moment
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.christlikeMoment}
                          </p>
                        </div>

                        {entry.prayerTogether && (
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
                              Prayer together
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.prayerTogether}
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
                Teaching on covenant marriage, Ephesians 5, the meaning of vows, marriage as
                sanctification, and the celebration of eros. Good companions to the Theology and
                Practices tabs.
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
              The marriage that preaches
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Every Christian marriage is a public theology. Your neighbors, your children, your
              colleagues, and your church are reading your marriage — watching to see whether the
              gospel you confess is the power you live by. The couple who forgives the unforgivable,
              loves the difficult, persists through what would break a contract, and does it all
              with warmth rather than grimness — that couple is preaching without opening their
              mouths. Keep building the marriage that makes the gospel visible.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link href="/christian-parenting-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Parenting
              </Link>
              , practice covenant love in{" "}
              <Link href="/christian-kindness" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Kindness
              </Link>
              , or go deeper on forgiveness with{" "}
              <Link href="/christian-forgiveness" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Forgiveness
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
