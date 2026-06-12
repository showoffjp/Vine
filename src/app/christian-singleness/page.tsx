"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const INDIGO = "#6366F1";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christiansingleness_entries";

interface SLNEntry {
  id: string;
  date: string;
  challenge: string;
  freedomFound: string;
  giftExpressed: string;
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
    badge: "1 Corinthians 7:7-8",
    title: "The Charisma of Singleness — Paul&rsquo;s High View of Celibacy",
    paragraphs: [
      "In 1 Corinthians 7:7-8 Paul writes: &ldquo;I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do.&rdquo; The word Paul uses for gift is charisma — the same word used elsewhere for prophecy, healing, and tongues. Singleness is not a deficiency or a waiting state; it is a supernatural endowment given by God for his purposes.",
      "The evangelical church has largely forgotten this. It treats marriage as the default adult life and singleness as a problem to be solved, a parenthesis before the real story begins. But Paul sees the opposite. Writing to the Corinthians, he presents singleness as freedom — freedom for undistracted devotion to God, for mobility in mission, for the kind of deep availability to people and to God that a household cannot easily provide. He wishes more had this gift.",
      "That does not mean singleness is superior to marriage in an absolute sense — Paul also honors marriage throughout chapter 7. What it means is that they are equal gifts given to different people for different purposes, and the church that honors only one of them has shrunk the kingdom.",
    ],
    callout: {
      label: "The word",
      text: "Charisma (χάρισμα): a gift of grace, a Spirit-given endowment. Paul uses the same word for singleness (1 Cor 7:7) as he uses for prophecy and healing elsewhere. This is not a consolation prize.",
    },
  },
  {
    badge: "Matthew 19:12",
    title: "Eunuchs for the Kingdom — Jesus on Chosen Celibacy",
    paragraphs: [
      "In Matthew 19:12 Jesus says: &ldquo;For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.&rdquo; This is not a throw-away comment. Jesus is identifying a third category of human life that his culture did not have space for: the person who chooses lifelong celibacy because the kingdom is more important than biological family.",
      "The background matters. Jesus has just taught a stringent view of marriage — only death ends it — and the disciples respond by saying it is better not to marry at all. Jesus does not rebuke them. He says: some people receive the gift of celibacy, and for those who can accept it, it is a legitimate and honored path. This is remarkable in a first-century Jewish context where childlessness was associated with shame and exclusion from the covenant blessings.",
      "Jesus himself lived this life. He was never married. He had no children. He died without heirs in the biological sense. And yet he is the most complete, most fully human person who ever lived. Every theology that treats single people as incomplete is an implicit claim that Jesus was incomplete — and that claim destroys itself.",
    ],
  },
  {
    badge: "The Model Person",
    title: "Jesus as the Paradigm Single Human Being",
    paragraphs: [
      "Christian anthropology takes its cue from Christ — he is the second Adam, the template for what human beings are supposed to be. And the second Adam never married. Jesus was fully human, which means he experienced loneliness, friendship, affection, physical need, and the desire for community. He wept at Lazarus&rsquo;s grave. He leaned on John at the Last Supper. He agonized in Gethsemane wanting his closest friends to stay awake with him. He was not solitary, not cold, not unaffectionate. He was single.",
      "This has enormous pastoral implications. If the fullness of human life required marriage, then Jesus did not live a full human life. But the church confesses that he did — that he is the one who lived most fully, loved most freely, and suffered most deeply of any person in history. His singleness was not a defect or a sacrifice of personhood. It was itself a form of radical availability: to the twelve, to the crowds, to the woman at the well, to the thief on the cross.",
      "Saying to a single person &ldquo;your life is incomplete&rdquo; requires you to say the same about Jesus. The church that has said this to its single members — usually implicitly, through the way it structures its programs, preaches its sermons, and assigns social worth — has spoken an anthropological heresy. The correction is not therapy but theology: a recovery of what the church actually believes about the incarnation.",
    ],
    callout: {
      label: "The implication",
      text: "If Jesus was single and fully human, then single people are fully human. The church's treatment of singleness as deficiency is not merely pastorally unkind — it is theologically wrong.",
    },
  },
  {
    badge: "Eschatology",
    title: "Singleness and the Age to Come — the Prophetic Witness of Celibacy",
    paragraphs: [
      "In Matthew 22:30 Jesus says that at the resurrection, people &ldquo;will neither marry nor be given in marriage; they will be like the angels in heaven.&rdquo; Marriage belongs to this age. It is a good gift of creation, but it is temporary. The life of the age to come is not organized around marriage and family — it is organized around the direct relationship between Christ and his people, the marriage for which all earthly marriages are only types and shadows.",
      "This means the celibate person is already living, in a partial but real way, by the conditions of the coming age. Every voluntary celibate is a walking sign of the kingdom — a person whose life says, in the language of embodied existence, that the relationship with Christ is ultimate and sufficient, that the deepest human longing will be satisfied not in a spouse but in God. This is not a message the consumer church wants to hear, but it is a message the world desperately needs.",
      "The early church understood this prophetic dimension of celibacy. The Desert Fathers and Mothers, the monastic tradition, the mendicant orders — they all grasped that voluntary renunciation of marriage was not a rejection of creation but an anticipation of consummation. The Reformers, reacting against clerical celibacy, lost this insight almost entirely. Recovering it would require the Protestant church to do more than add a theology of singleness — it would require rethinking its eschatology.",
    ],
  },
  {
    badge: "Church Culture",
    title: "The Marriage Idol — How the Church Has Failed Single People",
    paragraphs: [
      "The contemporary evangelical church has, by and large, absorbed the cultural assumption that the goal of life is romantic partnership and family formation. Sermons are addressed to &ldquo;husbands and wives&rdquo; when significant portions of the congregation are neither. Small groups divide by marital status and life stage. Singles ministries are often implicitly organized around the goal of ending singleness. The social events, the housing assumptions, the expectation that everyone will eventually &ldquo;settle down&rdquo; — all of it communicates a message no one may be saying out loud: you are incomplete until you marry.",
      "The pastoral damage is real. Single people in their thirties and forties report feeling like second-class church members — tolerated but not fully belonging, included in theology but excluded from community. Many leave. Barry Danylak&rsquo;s research and Sam Allberry&rsquo;s pastoral work both document this: the church is losing its single people not because it rejects them doctrinally but because it marginalizes them practically, relationally, and liturgically.",
      "The failure is more than pastoral — it is theological. When the church treats marriage as the normative Christian life, it implicitly places belonging and worth in something other than union with Christ. It creates a two-tier community in which the married have arrived and the unmarried are still en route. This is a functional distortion of the gospel, which places belonging entirely in Jesus and not at all in family status.",
    ],
  },
  {
    badge: "Loneliness",
    title: "Loneliness, Community, and the Church as Family",
    paragraphs: [
      "The most common pastoral objection to the theology of singleness as gift is honest and important: what about loneliness? Loneliness is real. God himself said in Genesis 2:18 that it is not good for the man to be alone — before the Fall, before sin, in the paradise God called very good. The need for companionship is not a deficiency or a lack of faith. It is part of what it means to be made in the image of a God who exists in community.",
      "The church&rsquo;s answer to this loneliness cannot be &ldquo;get married.&rdquo; For those who remain single, that is no answer at all. The answer the New Testament actually gives is the church — the community of brothers and sisters and mothers and fathers that Jesus promised to everyone who had left biological family for the sake of the kingdom (Mark 10:29-30). The church is not a supplement to the family; it is the family. When it functions as Jesus described, single people are not alone — they are woven into networks of genuine, deep, lasting community that meet the human need for belonging.",
      "This requires the church to change its structure, not just its theology. It requires families who actually include single people in their lives — not as charity but as genuine members of the household. It requires friendships that carry genuine weight — the &ldquo;spiritual friendship&rdquo; Wesley Hill writes about, friendships with real commitment, real history, real sacrifice. It requires a community where the single person is not an edge case but a full participant in the life of the body.",
    ],
    callout: {
      label: "Psalm 68:6",
      text: "God sets the lonely in families — the promise is not that singles will find spouses but that the community of God&rsquo;s people will be the family the lonely need.",
    },
  },
  {
    badge: "Friendship",
    title: "Spiritual Friendship — the Tradition the Church Forgot",
    paragraphs: [
      "The pre-modern church had a category that modernity has largely erased: deep, committed spiritual friendship — a bond of loyalty, love, and shared devotion to God that was not romantic but was genuinely intimate, genuinely covenantal, and genuinely central to the Christian life. Aelred of Rievaulx wrote an entire treatise on it. The vowed friendships of the medieval period — &ldquo;sworn brothers&rdquo; — were not gay marriages in disguise; they were relationships in which two people committed to walk through life together as brothers in Christ.",
      "Wesley Hill&rsquo;s work, especially &ldquo;Spiritual Friendship,&rdquo; argues that recovering this category is urgently needed — not only for same-sex attracted Christians but for all single people, and indeed for the whole church. The problem is not that single people cannot find love; it is that modernity has collapsed all genuine intimacy into one category (romantic partnership) and drained all others of substance. The result is that single people are told to look for everything in one relationship they may never have, while the friendships they do have are constantly devalued as &ldquo;just friends.&rdquo;",
      "The recovery of spiritual friendship would look like this: friendships that are explicitly committed and not just convenient, that have enough history to carry real weight, that include regular presence and not just contact, that are willing to be prioritized over career convenience and residential mobility. These are not lesser substitutes for marriage. They are a distinct and ancient form of Christian love that the church once honored and has largely abandoned.",
    ],
  },
  {
    badge: "Celibacy Traditions",
    title: "Catholic Celibacy, Protestant Marriage, and What Each Gets Right",
    paragraphs: [
      "The Catholic tradition has a robust theology of celibacy — it understands the prophetic dimension of virginity and consecrated life, it has institutional structures for people who choose celibacy as vocation, and it has a long tradition of saints whose celibacy was not despite their humanity but through it. What the Catholic tradition has sometimes gotten wrong is the implicit suggestion that celibacy is holier than marriage — that celibates are on a higher spiritual track. This is what the Reformers rightly rejected.",
      "The Protestant tradition recovered the dignity of marriage, the goodness of sexuality within covenant, and the calling of lay people in ordinary life. What it largely lost was any positive theology of singleness. With the rejection of monasticism and mandatory clerical celibacy came an overcorrection that treated marriage as universally normative and singleness as either a failure or a temporary condition. This is where the contemporary evangelical church finds itself.",
      "What a fully biblical theology requires is what neither tradition fully has: a church that honors both marriage and singleness as genuine callings, that has institutional structures for both, that gives single people genuine belonging and vocation rather than waiting-room status, and that understands both marriage and celibacy as signs pointing toward the ultimate union between Christ and his people. The two callings are not rivals; they are complementary witnesses to the same eschatological reality.",
    ],
  },
  {
    badge: "Sexuality",
    title: "Singleness and Sexuality Are Not the Same Question",
    paragraphs: [
      "One of the persistent confusions in Christian discussions of singleness is the equation of singleness with same-sex attraction. They are not the same question. The vast majority of single people are heterosexual; many same-sex attracted Christians are married. Singleness is a question about vocation — how to live as an unmarried person in light of the gospel. Sexuality is a separate question about the shape of desire and its ordering under God.",
      "The church does both subjects a disservice when it conflates them. Single heterosexual people need a theology of singleness that does not assume they are waiting to marry or that their singleness is provisional. Same-sex attracted people need a theology of sexuality that does not assume the goal is heterosexual marriage. These are different pastoral needs, and addressing them requires distinguishing the questions.",
      "What singleness and same-sex attraction do share is this: both are areas in which the church has historically failed to offer genuine community and genuine theology. The single heterosexual person and the celibate gay Christian both need a church that treats their life as a real life, not a problem awaiting solution. The resources from both conversations — Wesley Hill writing on spiritual friendship, Sam Allberry writing on singleness, Barry Danylak on the Old Testament — speak across the divide precisely because they are addressing the same underlying failure: a church that has placed too much of the human good in marriage.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Name Your Community on Paper",
    summary:
      "The first practice for single flourishing is honest inventory: who are actually your people? Not who you wish were your people, not the abstract community of &ldquo;the church,&rdquo; but the specific people who know you, to whom you are accountable, with whom you share meals and crises.",
    steps: [
      "Write down ten people who know something real about your current life. If you cannot get to ten, that is important data about your isolation — not a judgment, but a starting point.",
      "Note which relationships are mutual: not only who knows you, but whom you actually know. Loneliness and being unknown are different problems. Single people sometimes have many people who know them while knowing few people themselves.",
      "Identify which relationships have genuine commitment — not just warmth or frequency, but the kind of loyalty that would survive geographic inconvenience. These are the relationships worth deepening.",
      "Bring the gaps to God and to your church leadership. The community you need is not something you build alone — it requires the church to take responsibility for structuring belonging, not just offering programs.",
    ],
    anchor: "Mark 10:29-30 — Jesus promised the one who left family for his sake would receive a hundredfold of brothers and sisters and mothers — in this life.",
  },
  {
    number: "02",
    title: "Invest Your Availability Intentionally",
    summary:
      "Paul identifies the particular gift of singleness as undistracted availability — for God and for people. This gift wastes unless it is spent. Name specifically where your singleness gives you freedom, then invest that freedom on purpose.",
    steps: [
      "Make a list of the things you can do because you are single that would be significantly harder married: specific acts of service, specific people to pour into, specific seasons of mission or study. Name them, don&rsquo;t just gesture at them.",
      "Choose one investment for the next three months. It might be a short-term mission trip, fostering a child, taking in a friend in crisis, giving a year to a ministry. The freedom is real — don&rsquo;t let it evaporate in busyness.",
      "Tell someone what you are doing and why. Framing your choices as acts of vocation rather than default scheduling begins to change how you experience them. You are not merely unattached — you are available, and availability is a gift.",
      "Revisit annually. The gift of availability is not static; it has seasons, and investing it well in one season creates the capacity to invest it differently in the next.",
    ],
    anchor: "1 Corinthians 7:35 — Paul&rsquo;s stated goal for single people is undivided devotion to the Lord — complete, unhindered attention.",
  },
  {
    number: "03",
    title: "Cultivate a Committed Spiritual Friendship",
    summary:
      "Recovering the pre-modern category of spiritual friendship — a deep, committed, non-romantic bond of shared devotion to God — is one of the most practical things a single person can do for their flourishing.",
    steps: [
      "Identify one person with whom you want to pursue depth: shared prayer, honest conversation about your actual spiritual lives, willingness to speak hard truths and stay through them. Begin by naming the intention — most friendships deepen by accident rather than by design.",
      "Commit to regular, protected time together — not just when it is convenient, but with the kind of priority that marriage gets in most people&rsquo;s schedules. Friendship that yields to every other priority remains shallow.",
      "Make your commitment explicit. You do not need a formal ceremony, but telling someone &ldquo;I intend to be your friend for life&rdquo; is categorically different from the implicit friendship of shared circumstance. The church&rsquo;s tradition of vowed friendships understood this.",
      "Let the friendship be witnessed and supported by your community. Friendships that exist in isolation are fragile; friendships that the church knows about and honors are more durable. Ask your pastor to pray for it.",
    ],
    anchor: "Proverbs 17:17 — A friend loves at all times, and a brother is born for a time of adversity.",
  },
  {
    number: "04",
    title: "Lament Loneliness Honestly",
    summary:
      "The theological acknowledgment that singleness is a gift does not require pretending that loneliness is not real. Lament is a biblical genre. Single people are invited to bring their loneliness to God without first having resolved it into a silver lining.",
    steps: [
      "Read the lament psalms slowly — Psalm 22, 42, 88, 139. Note that lament is not faithlessness; it is a form of trust. The Psalmist brings pain to God rather than away from God. This is the posture singleness sometimes requires.",
      "Write a lament of your own. Name what is actually hard about your singleness: the specific losses, the specific fears, the specific moments of loneliness. Do not skip to the gratitude. Let the lament be complete before the &ldquo;nevertheless.&rdquo;",
      "Bring the lament to a spiritual director, a trusted pastor, or a therapist who can hold it with you. Loneliness carried entirely alone compounds itself. The gospel answer to isolation is community, even when community is not perfect.",
      "Hold both things: the genuine gift and the genuine difficulty. They are not in contradiction. The person who received the charisma of singleness is not exempt from loneliness any more than the person with the gift of hospitality is exempt from exhaustion. The gift is real. The cost is real. God can hold both.",
    ],
    anchor: "Psalm 68:6 — God sets the lonely in families. The loneliness is real. So is the promise.",
  },
  {
    number: "05",
    title: "Develop a Theology of Your Own Body and Life",
    summary:
      "Single people in a marriage-idolizing culture need to do explicit theological work to hold their life as complete and good — not waiting to become real. This is not self-help; it is theology applied to your biography.",
    steps: [
      "Read Barry Danylak&rsquo;s Redeeming Singleness or Sam Allberry&rsquo;s 7 Myths About Singleness. Let a theologian build the framework. You need more than encouragement — you need a worldview that actually accounts for your life.",
      "Identify the false story you have been told about your own life: &ldquo;You are incomplete.&rdquo; &ldquo;Something is wrong with you.&rdquo; &ldquo;This is temporary.&rdquo; &ldquo;God must be punishing you.&rdquo; Name the specific false narrative, then locate the biblical counter-narrative.",
      "Practice gratitude for the specific goods of your actual life — not gratitude that swallows the hard things, but genuine gratitude for what is genuinely good. Keep a list. Let it be concrete and honest.",
      "Find a community that will affirm this theology back to you. One person holding a countercultural belief in isolation is brittle; a community that honors both marriage and singleness, and that names your life as a real life, provides the social support the theology needs.",
    ],
    anchor: "Isaiah 56:4-5 — God promises to those who keep his covenant a name better than sons and daughters, an everlasting name that will endure forever.",
  },
  {
    number: "06",
    title: "Be Woven into a Family — and Let a Family Be Woven into Your Life",
    summary:
      "Single flourishing is not primarily about building a solo life well — it is about being genuinely embedded in the lives of other people. This requires initiative on the single person&rsquo;s part and genuine invitation on the family&rsquo;s part.",
    steps: [
      "Identify one or two families in your church in whose life you could be genuinely present — not as a charity case or a periodic guest, but as a regular, known, expected presence. Ask for that invitation explicitly if it has not come.",
      "Offer your time and availability in return — for childcare, for presence during illness, for the kind of showing-up that marks genuine belonging. The relationship should flow in both directions. You are not asking to be adopted; you are joining the family of God.",
      "Let yourself be known by the children in those families. The intergenerational dimension of singleness is one of its particular goods: single people can pour into children and young people in ways that parents, absorbed in their own children&rsquo;s needs, often cannot.",
      "Name to yourself and to God what you are doing and why. You are not filling time; you are embodying the New Testament vision of the church as the family of God, in which every member belongs to every other member.",
    ],
    anchor: "1 Timothy 5:1-2 — Paul instructs Timothy to treat older men as fathers, younger men as brothers, older women as mothers, younger women as sisters — the church is a family.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Paul (1 Corinthians 7)",
    role: "The Apostolic Theologian of Singleness",
    quote:
      "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.",
    bio: "Paul&rsquo;s theology of singleness in 1 Corinthians 7 is the most systematic treatment of the subject in the New Testament, and one of the most countercultural passages in the entire Bible. Writing to a Greek city where marriage and childbearing were social obligations, Paul commends singleness as genuinely preferable for those who have the gift — not because marriage is bad, but because undivided devotion to the Lord is a profound good. Paul practiced what he preached: he was single, he suffered the loneliness that entails, and he clearly found in Christ and in community what the married life provides through a different channel. His authority on this subject is not theoretical.",
  },
  {
    name: "Henri Nouwen",
    role: "The Wound of Loneliness Turned Inside Out",
    quote:
      "The movement from loneliness to solitude is the movement from the restless senses to the restful spirit, from the outward search to the inward finding, from the painful experience of absence to the healing experience of presence.",
    bio: "Henri Nouwen was a Dutch Catholic priest and one of the great spiritual writers of the twentieth century. He never married, wrote with unusual candor about his own loneliness and need for affirmation, and spent his final years living in community with people with intellectual disabilities at L&rsquo;Arche Daybreak. His work — &ldquo;Reaching Out,&rdquo; &ldquo;The Inner Voice of Love,&rdquo; &ldquo;Life of the Beloved&rdquo; — returns again and again to the transformation of loneliness into solitude: the discovery that the ache of aloneness, when brought to God, becomes a capacity for presence and a form of love. Nouwen never romanticized the pain, but he testified that God met him in it.",
  },
  {
    name: "Wesley Hill",
    role: "Washed and Waiting / Spiritual Friendship",
    quote:
      "Friendship, when it is taken with full seriousness — when it involves genuine commitment, genuine sacrifice, genuine presence — is not a lesser form of love than marriage. It is a different form of love, and one the church has largely abandoned to its great loss.",
    bio: "Wesley Hill is a New Testament scholar and associate professor of biblical studies at Western Theological Seminary. He is gay, celibate, and one of the most important contemporary voices at the intersection of sexuality, singleness, and Christian community. &ldquo;Washed and Waiting&rdquo; tells his personal story with unusual candor and theological precision. &ldquo;Spiritual Friendship&rdquo; retrieves the pre-modern tradition of vowed, covenantal friendship as a live option for Christians today. Hill writes not as someone who has arrived at ease but as someone who has found a tradition deep enough to sustain a full life.",
  },
  {
    name: "Barry Danylak",
    role: "Redeeming Singleness",
    quote:
      "In Christ, the one who was once excluded by childlessness is now fully included in the covenant family of God. The New Testament does not solve the Old Testament problem of barrenness by giving everyone children — it solves it by giving everyone Christ.",
    bio: "Barry Danylak&rsquo;s &ldquo;Redeeming Singleness&rdquo; is the most rigorous biblical-theological treatment of singleness available from an evangelical perspective. He traces the trajectory from the Old Testament, where childlessness was a form of covenant exclusion and social shame, through the New Testament revaluation in which union with Christ — not biological descent — determines covenant standing and family membership. His argument dismantles the hidden assumption underlying much evangelical discomfort with singleness: that having children is how you participate in the covenant promises of God. In Christ, it is not.",
  },
  {
    name: "Sam Allberry",
    role: "7 Myths About Singleness",
    quote:
      "The church that says singleness is a temporary problem waiting for a marital solution has not heard what Paul said in 1 Corinthians 7. Paul wanted more people to be single. He called it a gift. We have turned a gift into a waiting room.",
    bio: "Sam Allberry is a pastor, speaker, and author who is himself same-sex attracted and committed to biblical celibacy. &ldquo;7 Myths About Singleness&rdquo; systematically dismantles the false stories the church tells about unmarried people: that singleness is a sign of something wrong, that it is a state of incompleteness, that it means a sexless and loveless existence, that it is always temporary. Allberry writes with pastoral urgency and theological precision, drawing on his own experience and on the biblical material Paul and Jesus both provide. His work has done more than almost anyone else&rsquo;s to raise the church&rsquo;s theology of singleness to the level the subject requires.",
  },
  {
    name: "John Stott",
    role: "The Single Anglican Evangelical",
    quote:
      "I believe that singleness can be a gift of God, and I have long believed that it has been given to me. I am not celibate in the Catholic sense of a religious vow. I am simply a Christian man who has not married. I do not consider myself incomplete.",
    bio: "John Stott was one of the most influential evangelical theologians of the twentieth century — author of &ldquo;The Cross of Christ,&rdquo; principal architect of the Lausanne Covenant, and for decades the leading voice of evangelical Anglicanism worldwide. He never married, and toward the end of his life he spoke publicly about his singleness as a gift rather than an accident. His witness matters precisely because it is not apologetic: this was not a man making peace with disappointment but a man who had given his availability entirely to Christ and to the church, and who found that sufficient. The church that produced Stott cannot be embarrassed by singleness.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Corinthians 7:7-8",
    text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do.",
    reflection:
      "Paul&rsquo;s word for gift is charisma — the same word he uses for prophecy and tongues. Singleness is not a default condition but a Spirit-given endowment. The verse also establishes the apostolic precedent: Paul himself was single, and his productivity, availability, and devotion to the churches were inseparable from that fact.",
  },
  {
    reference: "Matthew 19:12",
    text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.",
    reflection:
      "Jesus identifies a third way of life his culture had no category for — voluntary celibacy for the kingdom — and commends it to those who can receive it. In a culture where childlessness was shame and obligation was marriage, this is radical. Jesus himself is the primary example of the life he describes.",
  },
  {
    reference: "Isaiah 56:4-5",
    text: "For this is what the Lord says: To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever.",
    reflection:
      "The Old Testament background for Jesus&rsquo; teaching: those who were excluded from the covenant community by childlessness are promised by God a place better than the one biological family provides. The sign of covenant membership is faithfulness, not fertility. This prophecy is fulfilled in Christ.",
  },
  {
    reference: "Psalm 68:6",
    text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
    reflection:
      "God&rsquo;s answer to loneliness is not marriage — it is family, and in the New Testament that family is the church. The promise is not that every lonely person will find a spouse but that God actively works to place isolated people into communities of genuine belonging. This is a pastoral mandate for the church, not just a comfort for individuals.",
  },
  {
    reference: "Matthew 22:30",
    text: "At the resurrection people will neither marry nor be given in marriage; they will be like the angels in heaven.",
    reflection:
      "Marriage belongs to this age, not the next. In the resurrection, the marriage toward which all earthly marriages point — Christ and his people — will be fully present, and the sacramental sign will no longer be needed. The celibate person already lives by the conditions of the age to come, which is why celibacy can be a form of prophetic witness.",
  },
  {
    reference: "Mark 10:29-30",
    text: "Truly I tell you, no one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age: homes, brothers, sisters, mothers, children and fields — along with persecutions — and in the age to come eternal life.",
    reflection:
      "Jesus does not promise that those who sacrifice biological family for his sake will receive it back. He promises a hundredfold of the same things — which in context means the church, the new family of God, the community of brothers and sisters and mothers that the kingdom creates. This is the community single people are owed by the church, not as charity but as the fulfillment of Jesus&rsquo; promise.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "HF3V2nzHPDk", title: "The Gift of Singleness — A Theological Case" },
  { videoId: "nmxl7c1pPGQ", title: "Sam Allberry on 7 Myths About Singleness" },
  { videoId: "CagN5QFOVLM", title: "Singleness and the Kingdom of God" },
  { videoId: "M7apFvRKSi8", title: "Wesley Hill: Spiritual Friendship and the Single Life" },
  { videoId: "H8B3b2LSJIA", title: "Jesus Was Single — What That Means for the Church" },
  { videoId: "JQ_lMqOkrus", title: "The Church&rsquo;s Failure to Honor Single People" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSinglenessPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<SLNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [challenge, setChallenge] = useState("");
  const [freedomFound, setFreedomFound] = useState("");
  const [giftExpressed, setGiftExpressed] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as SLNEntry[]);
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
    if (!challenge.trim()) return;
    const entry: SLNEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      challenge: challenge.trim(),
      freedomFound: freedomFound.trim(),
      giftExpressed: giftExpressed.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setChallenge("");
    setFreedomFound("");
    setGiftExpressed("");
  }

  function deleteEntry(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
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
              Identity &amp; Vocation
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              The Gift of Singleness: A Theology of the Unmarried Life
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Paul called singleness a <em style={{ color: TEXT }}>charisma</em> — a gift of grace,
              in the same category as prophecy and healing. Jesus himself was single. The church that
              treats unmarried people as incomplete, waiting, or deficient has not listened to its
              own Scriptures. This guide explores the theology of singleness, the tradition of
              spiritual friendship, and the practices of a full life outside marriage.
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
                &ldquo;I wish that all of you were as I am. But each of you has your own gift from
                God; one has this gift, another has that.&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>
                1 Corinthians 7:7
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
                Nine studies tracing the theology of singleness from Paul&rsquo;s charisma to
                Jesus&rsquo; own unmarried life, from the eschatological witness of celibacy to the
                church&rsquo;s practical failures and the recovery of spiritual friendship.
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
                  Where these threads converge
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Paul&rsquo;s charisma, Jesus&rsquo; celibacy, the eunuchs for the kingdom,
                  spiritual friendship, and the eschatological sign of celibacy are not separate
                  topics — they are one theology, and it is a high one. The church that has
                  sentimentalized marriage and patronized singleness has not served either calling
                  well. Explore related topics in{" "}
                  <Link href="/christian-friendship" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Friendship
                  </Link>{" "}
                  or{" "}
                  <Link href="/christian-dating" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Dating
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
                Six practices for living well as a single person — not coping mechanisms but genuine
                investments in the life God has given. Start with the one that most addresses your
                actual situation.
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
                  A word about the church&rsquo;s responsibility
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Most of what single people need cannot be self-provided — it requires the church.
                  Community, genuine belonging, the kind of spiritual friendship that sustains a
                  life: these are not solo projects. If you are a single person, bring these needs
                  to your pastors and leaders. If you are a married person reading this, consider
                  whether your household is genuinely open to the single people in your
                  congregation. The church&rsquo;s single members are not a ministry target. They
                  are your family.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses — from the apostle Paul to John Stott — who have lived or written the
                theology of singleness with integrity. Their lives are arguments.
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${voice.quote}&rdquo;` }}
                  />
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
                Six passages to read, memorize, and pray. These texts form the biblical backbone of
                a theology of singleness — take one per week and let it do its work.
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
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, you gave
                  your Son as the model unmarried person — he was complete&rdquo;), confession
                  (&ldquo;I have believed the false story that I am incomplete or second-class&rdquo;),
                  and petition (&ldquo;give me eyes to see my life as gift, and give my church eyes
                  to honor it&rdquo;). Scripture about singleness prayed regularly begins to rebuild
                  the imagination the culture has damaged.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions: a challenge of singleness you are carrying, a freedom or gift you
                found in it this week, and a specific way you expressed the gift. Entries are saved
                privately in your browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  This week&rsquo;s entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sln-challenge" style={labelStyle}>
                    A challenge of singleness you are carrying
                  </label>
                  <textarea
                    id="sln-challenge"
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="Loneliness, longing, exclusion, the ache of certain moments — be specific and honest"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sln-freedom" style={labelStyle}>
                    A freedom or gift you found in singleness this week
                  </label>
                  <textarea
                    id="sln-freedom"
                    value={freedomFound}
                    onChange={(e) => setFreedomFound(e.target.value)}
                    placeholder="Availability for a person, time with God, mobility for service, depth in a friendship — name it specifically"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="sln-gift" style={labelStyle}>
                    How you expressed the gift this week
                  </label>
                  <textarea
                    id="sln-gift"
                    value={giftExpressed}
                    onChange={(e) => setGiftExpressed(e.target.value)}
                    placeholder="A specific act of service, presence, or investment that your singleness made possible"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!challenge.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !challenge.trim() ? BORDER : INDIGO,
                    color: !challenge.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !challenge.trim() ? "not-allowed" : "pointer",
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
                      Name one challenge, one freedom, one expression — and let the practice of
                      gratitude and honesty begin to do its slow work.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry, index) => (
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
                          <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: MUTED }}>
                            {entry.date}
                          </h3>
                          <button
                            type="button"
                            onClick={() => deleteEntry(index)}
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
                        <div style={{ marginBottom: entry.freedomFound || entry.giftExpressed ? 10 : 0 }}>
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
                        {entry.freedomFound && (
                          <div style={{ marginBottom: entry.giftExpressed ? 10 : 0 }}>
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
                              Freedom found
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                              {entry.freedomFound}
                            </p>
                          </div>
                        )}
                        {entry.giftExpressed && (
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
                              Gift expressed
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.giftExpressed}
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
                Teaching and testimony on the theology of singleness, spiritual friendship, and the
                church&rsquo;s calling to honor its unmarried members.
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
              A complete life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Jesus was single. Paul was single. John Stott was single. Augustine was single after
              his conversion. If the church&rsquo;s single people are incomplete, these men were
              incomplete — and the claim is absurd. What the gospel offers is not a promise of
              marriage but a promise of belonging: a hundredfold of brothers, sisters, mothers, and
              children in the community that bears the name of Christ. That is the church&rsquo;s
              responsibility and the single person&rsquo;s inheritance.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link href="/christian-friendship" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Friendship
              </Link>
              ,{" "}
              <Link href="/christian-community" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Community
              </Link>
              ,{" "}
              <Link href="/christian-dating" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Dating
              </Link>
              , or{" "}
              <Link href="/christian-loneliness" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Loneliness
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
