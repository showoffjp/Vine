"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

// ─── Constants ────────────────────────────────────────────────────────────────
const GOLD = "#D97706";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

const PETITIONS = [
  "Our Father in heaven",
  "Hallowed be your name",
  "Your kingdom come, your will be done",
  "Give us today our daily bread",
  "Forgive us our debts, as we also have forgiven our debtors",
  "Lead us not into temptation, but deliver us from evil",
  "For yours is the kingdom, the power, and the glory",
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────
interface LPEntry {
  petition: string;
  reflection: string;
  application: string;
}

// ─── Theology Data ────────────────────────────────────────────────────────────
const theologyData = [
  {
    petition: "Our Father in heaven",
    greek: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς",
    transliteration: "Pater hēmōn ho en tois ouranois",
    summary: "The radical fatherhood of God — intimacy without domestication",
    exposition: [
      {
        heading: "The Scandal of Abba",
        body: "Jesus opens the prayer with two words that would have stopped His Jewish audience in their tracks: “Our Father.” In Second Temple Judaism, God was addressed as Father only sparingly and formally — never with the intimate Aramaic “Abba” (the word Jesus used in Gethsemane, Mark 14:36, and that Paul says the Spirit echoes in believers, Romans 8:15). To address the Creator of the cosmos as one addresses a trusted father was a theological revolution. It was not irreverence — it was recovered intimacy.",
      },
      {
        heading: "Corporate, Not Merely Personal",
        body: "Notice: “Our Father” — not “My Father.” Jesus refused to give us a privatized prayer. From the first word, we are inserted into a community. We come to God as siblings, as the family of the kingdom. There is no solitary Christianity in the Lord’s Prayer; even private devotion is voiced in the plural. Kenneth Bailey (Jesus Through Middle Eastern Eyes) notes that the Aramaic social context makes this even starker — you approached a father on behalf of the entire household.",
      },
      {
        heading: "In Heaven — Transcendence Held Together with Immanence",
        body: "The phrase “in heaven” (en tois ouranois) is not a spatial address — it is a theological qualifier. It guards against sentimentality. This Father is not a cosmic buddy; He is the sovereign Lord of all creation. The genius of the prayer’s opening is that it holds together two things that human hearts always pull apart: God is near enough to call Father, and great enough to dwell in the heavens. Dallas Willard wrote that the prayer begins by locating us in reality — we are small creatures addressing an infinite, loving Father.",
      },
      {
        heading: "Adoption Theology",
        body: "The New Testament builds an entire architecture of adoption around this address. Romans 8:15 says we have received the “spirit of adoption” (pneuma huiothesias) by which we cry “Abba, Father.” Galatians 4:4-7 explains that the Son was sent so that we might receive adoption as sons. This is not metaphor — it is legal and relational reality. We are co-heirs with Christ. When we say “Our Father,” we are exercising a right purchased at infinite cost.",
      },
    ],
  },
  {
    petition: "Hallowed be your name",
    greek: "ἁγιασθήτω τὸ ὄνομά σου",
    transliteration: "hagiasthētō to onoma sou",
    summary: "Sanctifying the Name — a petition, not merely praise",
    exposition: [
      {
        heading: "The Grammar of the Petition",
        body: "Most English readers treat “hallowed be your name” as a statement of praise. It is actually a third-person imperative — a petition directed to God: “Let your name be hallowed.” The Greek hagiasthētō is the same root as hagios (holy) and hagiazō (to sanctify). We are asking God to act in the world and in us in such a way that His name — His character, His reputation, His very being — is treated as utterly set apart and magnificent.",
      },
      {
        heading: "The Name in Jewish Thought",
        body: "In the Hebrew Bible, a person’s name was not merely a label — it was an encapsulation of character and identity. The “name” (shem) of God is nearly interchangeable with God Himself. Psalm 8:1 — “How majestic is your name in all the earth!” — is a statement about God’s own glory and presence. The Third Commandment (“Do not take the Lord’s name in vain”, Exodus 20:7) is far richer than avoiding expletives — it is about treating God’s very being as weightless or trivial.",
      },
      {
        heading: "Ezekiel’s Echo",
        body: "N.T. Wright observes that this petition carries heavy Ezekiel resonance. In Ezekiel 36:22-23, God says: “It is not for your sake, people of Israel, that I am going to do these things, but for the sake of my holy name... I will show the holiness of my great name.” The prayer prays for exactly this — the great eschatological sanctification of the Name in the earth. Every time we pray this, we are asking God to bring in His new creation purposes.",
      },
      {
        heading: "Daily Hallowing",
        body: "Hallowing God’s name in daily life means that every word, every decision, every relationship either magnifies or diminishes the reputation of the God we bear the name of. As N.T. Wright writes, this petition asks God to be God — to break into the world in ways that make His reality undeniable. Martin Luther’s catechism exposition puts it beautifully: God’s name is holy in itself; we pray that it may become holy among us too.",
      },
    ],
  },
  {
    petition: "Your kingdom come, your will be done",
    greek: "ἐλθέτω ἡ βασιλεία σου· γενηθήτω τὸ θέλημά σου",
    transliteration: "elthetō hē basileia sou; genēthētō to thelēma sou",
    summary: "Inaugurated eschatology — the kingdom already breaking in, not yet complete",
    exposition: [
      {
        heading: "What Is the Kingdom?",
        body: "The “kingdom of God” (basileia tou theou) was Jesus’ central proclamation. It does not primarily mean a territory — it means the dynamic reign of God, the sphere where His authority is fully operative. When Jesus announced “The kingdom of God has come near” (Mark 1:15), He was saying that the long-awaited sovereign rule of God was breaking in through His own ministry. This petition asks for that breaking-in to continue and increase.",
      },
      {
        heading: "Already and Not Yet",
        body: "New Testament scholars describe the kingdom as “inaugurated eschatology” — it has begun (in the life, death, resurrection of Jesus and the coming of the Spirit), but it is not yet consummated. We live in the overlap of the ages. This prayer is not passive waiting — it is active intercession. We are asking God to extend His reign — into nations, neighborhoods, families, hearts — until the day when He makes all things new (Revelation 21:5).",
      },
      {
        heading: "On Earth as in Heaven",
        body: "The clause “on earth as in heaven” (Matthew’s version) is profoundly important. This is not a prayer for escape from earth, but transformation of earth. Heaven is not the destination that renders earth irrelevant — it is the pattern by which earth is to be renewed. Scot McKnight (Praying with the Church) emphasizes that this petition commits the pray-er to being an agent of what they are praying for. You cannot pray for God’s will on earth and then remain indifferent to injustice, suffering, or the flourishing of human community.",
      },
      {
        heading: "Will Aligned with the Father’s",
        body: "The second clause, “your will be done,” is not resignation — it is alignment. In Gethsemane, Jesus prayed this same prayer with ultimate sincerity: “Not my will, but yours be done” (Luke 22:42). Praying for God’s will is the most dangerous prayer in the world — because it commits the pray-er to being shaped by that will, to having their own preferences bent into conformity with the Father’s good purposes.",
      },
    ],
  },
  {
    petition: "Give us today our daily bread",
    greek: "τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον",
    transliteration: "ton arton hēmōn ton epiousion dos hēmin sēmeron",
    summary: "Radical dependence — manna theology and the economy of enough",
    exposition: [
      {
        heading: "The Mysterious Word Epiousios",
        body: "The word translated “daily” (epiousios) is one of the rarest in the Greek New Testament — it appears only here and in Luke 11:3, and almost nowhere else in ancient Greek literature. Jerome, translating into Latin, was unsure of it. Possible meanings include: “for today,” “for tomorrow,” “for our sustenance,” or “essential/necessary.” The ambiguity is theologically rich: we pray for enough — not stockpiles, not security through accumulation, but the portion that sustains life today.",
      },
      {
        heading: "Manna Theology",
        body: "The echoes of Exodus 16 are unmistakable. In the wilderness, God provided manna — bread from heaven — daily. The Israelites were explicitly instructed not to gather extra (Exodus 16:19-20); hoarding resulted in rot and worms. This was a curriculum in dependence. Jesus feeds this same theology into the prayer: the posture of the disciple is not self-sufficiency but open-handed daily trust. John 6 layers further meaning when Jesus calls Himself “the bread of life” — the true manna.",
      },
      {
        heading: "Material and Eucharistic Dimensions",
        body: "This petition addresses real physical hunger — it is not spiritualized into mere “spiritual sustenance.” The Incarnation means God cares about bodies, meals, and daily provision. At the same time, from the early church, this petition was read eucharistically: the “bread” of the kingdom is supremely found at the Lord’s Table, where Christ gives Himself. Dallas Willard notes that the prayer begins by properly ordering desire — we seek the Father first, then petition for our needs within that relationship.",
      },
      {
        heading: "The Grammar of “Us” Again",
        body: "Once more the plural: “give us.” The prayer for bread is never merely for my own provision. Those who pray this prayer are implicated in the hunger of others. Augustine wrote that you cannot honestly pray “give us our daily bread” while hoarding bread from the hungry. The prayer creates ethical responsibility — if we are asking God to provide for the community’s needs, we become the answer to our own prayer in our generosity toward others.",
      },
    ],
  },
  {
    petition: "Forgive us our debts, as we also have forgiven our debtors",
    greek: "ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν",
    transliteration: "aphes hēmin ta opheilēmata hēmōn, hōs kai hēmeis aphēkamen tois opheiletais hēmōn",
    summary: "The forgiveness economy — receiving and giving mercy are inseparably linked",
    exposition: [
      {
        heading: "Debts, Trespasses, and Sins",
        body: "Different translations use different words: “debts” (Matthew), “sins” (Luke), “trespasses” (traditional liturgy). Matthew’s opheilēmata (“debts”) is striking — it frames sin as an unpayable obligation, a moral deficit. This is not merely relational hurt but ontological debt: we owe God total allegiance, obedience, and love, and we have consistently failed to pay. The prayer asks for the debt to be canceled — not deferred, not reduced, but forgiven (aphiēmi means to send away, to release).",
      },
      {
        heading: "The Shocking Linkage",
        body: "No other petition in the prayer is conditioned on human action. Only this one: “as we also have forgiven our debtors.” Jesus reinforces this immediately after the prayer in Matthew 6:14-15 — if you do not forgive others, your Father will not forgive you. This is not a commercial transaction (as though forgiving others earns divine forgiveness). It is a diagnostic: the person who has genuinely received God’s forgiveness cannot remain unwilling to extend it. Unforgiveness is a sign that the mercy of God has not yet penetrated deeply.",
      },
      {
        heading: "The Parable of the Unforgiving Servant",
        body: "Matthew places the parable of the unmerciful servant (Matthew 18:21-35) in direct relation to Peter’s question about forgiveness — and it functions as an extended meditation on this petition. A servant forgiven an astronomical debt (10,000 talents — effectively infinite) refuses to forgive a colleague’s tiny debt. The king’s verdict: those who do not forgive have not understood the forgiveness they received. The prayer makes the same point daily: each time we ask for forgiveness, we are recommitting to the economy of mercy.",
      },
      {
        heading: "Practicing Forgiveness",
        body: "Forgiveness, as Lewis Smedes famously wrote, is not excusing, condoning, or forgetting — it is releasing the other person from your internal debtor’s prison. It is not a feeling but a decision, though feelings eventually follow. John Calvin observed that this petition humbles us daily — it forces us to acknowledge that we need ongoing forgiveness (contra perfectionist theologies), and it prevents the spiritual pride that refuses to see fault in oneself while judging others.",
      },
    ],
  },
  {
    petition: "Lead us not into temptation, but deliver us from evil",
    greek: "μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ",
    transliteration: "mē eisenenkēs hēmas eis peirasmon, alla rhysai hēmas apo tou ponērou",
    summary: "Divine protection — the reality of temptation, the evil one, and our need for rescue",
    exposition: [
      {
        heading: "Does God Lead Us into Temptation?",
        body: "The petition has puzzled and troubled interpreters for centuries. James 1:13 explicitly says God does not tempt anyone. How then does Jesus tell us to ask God not to lead us into temptation? The answer lies in the meaning of peirasmos, which carries two senses: “trial/test” and “temptation.” The petition may be asking: “Do not bring us into a testing situation that is beyond our capacity to endure.” This is precisely Paul’s promise in 1 Corinthians 10:13 — God will always provide a way of escape from temptation. We are acknowledging our fragility and asking for providence to shield us from overwhelming trial.",
      },
      {
        heading: "The Evil One",
        body: "The Greek tou ponērou could be translated “the evil one” (personal, referring to Satan) or “evil” (impersonal). Most modern scholars favor “the evil one” — it gives the petition eschatological bite. We are not merely asking for deliverance from bad circumstances but from the Adversary himself, who prowls like a lion (1 Peter 5:8), accuses the brethren (Revelation 12:10), and tempted even Jesus in the wilderness (Matthew 4). The prayer takes spiritual warfare seriously without becoming sensationalist.",
      },
      {
        heading: "The Wilderness and the Garden",
        body: "Jesus was led by the Spirit into the wilderness to be tempted (Matthew 4:1). Adam and Eve faced the Tempter in the garden. The prayer situates disciples in this same story — we are people in a world where a real adversary seeks our spiritual destruction. Ephesians 6:10-18 (the armor of God) is the practical commentary on this petition. When we pray “deliver us from the evil one,” we are implicitly putting on that armor, recognizing that our strength is insufficient and divine rescue is our only hope.",
      },
      {
        heading: "Eschatological Urgency",
        body: "N.T. Wright argues that this petition has an eschatological dimension: “Do not bring us through the great tribulation” — the final eschatological testing. The prayer prays against the worst. In the meantime, it is a daily petition for spiritual vigilance. Luther’s catechism notes that while God does not tempt us, we pray that He would guard and keep us so that the devil, the world, and our own flesh may not deceive us or mislead us.",
      },
    ],
  },
  {
    petition: "For yours is the kingdom, the power, and the glory",
    greek: "ὅτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα εἰς τοὺς αἰῶνας",
    transliteration: "hoti sou estin hē basileia kai hē dynamis kai hē doxa eis tous aiōnas",
    summary: "The doxology — ending in worship, not petition",
    exposition: [
      {
        heading: "Textual Question",
        body: "The doxology does not appear in the oldest Greek manuscripts of Matthew and is absent from Luke’s version entirely. This is why modern critical translations (ESV, NIV, NRSV) relegate it to a footnote, while the traditional KJV and liturgical practice retain it. However, the doxology appears in the Didache (the earliest Christian document on liturgy, c. 50-100 AD), showing it entered Christian worship very early. Whether original or not, it captures the spirit of the prayer — all prayer properly ends in adoration.",
      },
      {
        heading: "1 Chronicles 29 and the Davidic Pattern",
        body: "The doxology’s language mirrors David’s great prayer in 1 Chronicles 29:11-13: “Yours, Lord, is the greatness and the power and the glory and the majesty and the splendor... In your hands are strength and power to exalt and give strength to all.” David had collected materials for the temple and ends in extravagant praise. The Lord’s Prayer doxology draws on this royal vocabulary — kingdom (basileia), power (dynamis), glory (doxa) — and gives it back to the Father.",
      },
      {
        heading: "The Reversal at the Heart of the Prayer",
        body: "The prayer that begins with the Father’s name also ends with the Father’s name. We started by asking that His name be hallowed; we end by proclaiming His kingdom, power, and glory. In between — our needs, our failures, our fears. The structure is profoundly pastoral: our needs are sandwiched inside worship. The doxology prevents the prayer from becoming a mere petition list and restores the pray-er to their rightful orientation — not at the center of the universe, but in joyful orbit around the One who is.",
      },
      {
        heading: "Amen — So Be It",
        body: "The prayer closes with Amen (Hebrew: אָמֵן) — “so be it” or “that is firm/true.” It is an act of faith: I am affirming that what I have just prayed is aligned with reality, with the way things actually are under God’s sovereign rule. The Amen does not conclude the prayer and begin ordinary life — it declares that prayer IS ordinary life, the truest frame for all of existence.",
      },
    ],
  },
];

// ─── Practices Data ───────────────────────────────────────────────────────────
const practicesData: LPEntry[] = [
  {
    petition: "Our Father in heaven",
    reflection: "I approach God as a beloved child, not a servant or a stranger. I carry the legal and relational standing of an adopted heir — this changes everything about how I pray.",
    application: "Begin today by sitting quietly for 2 minutes as a child in the Father’s presence before asking for anything.",
  },
  {
    petition: "Hallowed be your name",
    reflection: "Every moment I can bring glory or dishonor to God’s name. My words, my reactions, my integrity — they either magnify or diminish the reputation of the One I call Father.",
    application: "Before each conversation today, pause: how can I make God’s name look beautiful in this?",
  },
  {
    petition: "Your kingdom come",
    reflection: "I am an ambassador of a kingdom that is already but not yet. Every act of justice, mercy, and truth-telling is kingdom work — not just church activities.",
    application: "Identify one situation where I can advance God’s kingdom agenda today — at home, at work, or in my community.",
  },
  {
    petition: "Give us our daily bread",
    reflection: "Anxiety about tomorrow is addressed by gratitude for today. God has been faithful in specific, tangible ways this week that I have taken for granted.",
    application: "List three specific provisions God has given this week before asking for more.",
  },
  {
    petition: "Forgive us as we forgive",
    reflection: "My forgiveness from God is linked to my willingness to forgive. Holding someone in my internal debtor’s prison costs me more than it costs them.",
    application: "Name one person I need to release from my internal debtor’s prison today — and say their name aloud to God.",
  },
  {
    petition: "Deliver us from evil",
    reflection: "Spiritual warfare is real — I need divine protection daily. My own strength is insufficient; rescue must come from outside myself.",
    application: "Pray through the armor of God (Ephesians 6) before going out today, naming each piece as a conscious act of trust.",
  },
];

// ─── Voices Data ──────────────────────────────────────────────────────────────
const voicesData = [
  {
    name: "N.T. Wright",
    work: "The Lord and His Prayer",
    bio: "Bishop, New Testament scholar, and prolific theologian. Wright reads the Lord’s Prayer through the lens of first-century Jewish eschatology and argues it is best understood as a prayer for the kingdom to come — not as a religious formula but as a manifesto of God’s new world breaking in.",
    quote: "The Lord’s Prayer is not primarily a devotional exercise. It is a battle-cry. It is the prayer of those who believe the creator God is reclaiming His world, and who want to be part of that project.",
    contribution: "Wright’s greatest contribution is restoring the Jewish eschatological context. He shows that each petition maps onto a hope from Israel’s scriptures — the hallowing of the Name (Ezekiel 36), the coming of the kingdom (Daniel 7), daily bread (Exodus 16), forgiveness (Jeremiah 31), deliverance from evil (the great eschatological trial). The prayer is a compressed theology of salvation history.",
  },
  {
    name: "John Calvin",
    work: "Institutes of the Christian Religion, Book III, Ch. 20",
    bio: "French Reformer and systematic theologian (1509-1564). Calvin’s treatment of prayer in the Institutes remains one of the most thorough in the Reformed tradition, and his exposition of the Lord’s Prayer anchors Protestant liturgical piety.",
    quote: "We must attend to the rule which directs all prayer aright... that we come into the presence of God with a pure and sincere heart, not relying on our own worthiness but on His mercy alone.",
    contribution: "Calvin insists the prayer teaches us four things simultaneously: what to pray for, how to pray, in what order, and with what disposition. He is particularly brilliant on the forgiveness petition — the conditional clause is not meritorious but diagnostic. He also emphasizes that the prayer is a school: praying it repeatedly trains our desires to conform to God’s.",
  },
  {
    name: "Martin Luther",
    work: "A Simple Way to Pray (1535)",
    bio: "German Reformer and Bible translator (1483-1546). Luther wrote “A Simple Way to Pray” as a letter to his barber, Peter, who had asked how Luther maintained his prayer life. It is one of Luther’s most practical and pastoral documents.",
    quote: "I suckle at the Lord’s Prayer like a child, and as an old man eat and drink from it and never get my fill. It is the best prayer... better than the Psalter, which is so very dear to me.",
    contribution: "Luther’s great contribution is his “garland” method: he takes each petition and wrings four things from it — instruction (what it teaches), thanksgiving (what God has done), confession (where I have failed), and supplication (what I ask). He transforms the Lord’s Prayer from a recitation into a dynamic fourfold conversation with God. He also wrote the catechism explanation that has formed millions of children in prayer.",
  },
  {
    name: "Kenneth Bailey",
    work: "Jesus Through Middle Eastern Eyes",
    bio: "Biblical scholar and Middle Eastern cultural expert (1930-2016). Bailey spent forty years teaching in the Middle East and brought unparalleled cultural insight to the Gospels, particularly to Jesus’ parables and prayers.",
    quote: "When Jesus says ‘Our Father,’ He invites the listener into a web of relationships — obligations, protections, and intimacies — that were among the most profound in the ancient world.",
    contribution: "Bailey illuminates the social world behind “Our Father” and the forgiveness petition. In Middle Eastern culture, a father’s honor was bound up with his children’s behavior, and reconciliation was a complex social event. The father in the prodigal son parable (whom Bailey reads as background to the Lord’s Prayer) runs to meet his son — a culturally shocking act of humility and grace. This is the Father Jesus teaches us to address.",
  },
  {
    name: "Dallas Willard",
    work: "The Divine Conspiracy",
    bio: "Philosopher and spiritual formation theologian (1935-2013). Willard’s “The Divine Conspiracy” reframes the Sermon on the Mount (in which the Lord’s Prayer sits) as a manifesto for life in God’s kingdom — not a new set of rules but an invitation into a new kind of existence.",
    quote: "The aim of God in history is the creation of an all-inclusive community of loving persons, with Himself included in that community as its prime sustainer and most glorious inhabitant.",
    contribution: "Willard reads the Lord’s Prayer as a description of a reality rather than a request to create one. God’s kingdom already is; daily bread already flows from His provision; forgiveness is already available. The prayer aligns us with what is already true. His chapter on the prayer in “The Divine Conspiracy” is a masterpiece of formation theology — he shows how each petition reshapes the pray-er’s interior world over time.",
  },
  {
    name: "Scot McKnight",
    work: "Praying with the Church",
    bio: "New Testament scholar and theologian. McKnight’s work on prayer emphasizes the corporate, ecclesial nature of Christian prayer — that we pray as the church, in the tradition of the church, and not merely as individuals with private requests.",
    quote: "The Lord’s Prayer is not a solo; it is a choir piece. When you pray it alone, you are joining the chorus of millions who have prayed these words across centuries.",
    contribution: "McKnight’s contribution is recovering the communal and liturgical dimension of the prayer. He argues (against purely spontaneous prayer culture) that praying set prayers — especially the Lord’s Prayer — is not vain repetition but formation. The prayer shapes us by its structure: we learn to want what Jesus wants us to want. His book also explores the prayer’s use across different Christian traditions, showing remarkable convergence.",
  },
];

// ─── Scripture Data ───────────────────────────────────────────────────────────
const scriptureData = [
  {
    reference: "Matthew 6:9-13",
    text: "“This, then, is how you should pray: ‘Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.’”",
    exposition: "Matthew’s version of the prayer sits inside the Sermon on the Mount (chapters 5-7), sandwiched between teaching on fasting and teaching on treasures in heaven. Jesus offers it as the antidote to the two prayer extremes he has just condemned: ostentatious public prayer (6:5-6) and vain repetition (6:7-8). It is a model — a framework — not a magical formula. The seven petitions move from God-centered (name, kingdom, will) to human-centered (bread, forgiveness, deliverance).",
  },
  {
    reference: "Luke 11:1-4",
    text: "One day Jesus was praying in a certain place. When he finished, one of his disciples said to him, “Lord, teach us to pray, just as John taught his disciples.” He said to them, “When you pray, say: Father, hallowed be your name, your kingdom come. Give us each day our daily bread. Forgive us our sins, for we also forgive everyone who sins against us. And lead us not into temptation.”",
    exposition: "Luke’s version is shorter (no doxology, no “will be done” clause) and introduces the prayer differently — not as a model in a sermon but as a response to a disciple’s request after watching Jesus pray. This is significant: the prayer arises from observed intimacy. The disciples see Jesus at prayer and want what He has. Luke’s address is simply “Father” (Greek: Pater) — even more intimate, possibly reflecting the Aramaic Abba directly.",
  },
  {
    reference: "Romans 8:15",
    text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, “Abba, Father.”",
    exposition: "Paul’s declaration is the theological foundation for the prayer’s opening word. We do not call God “Father” by presumption — we do so because the Spirit of adoption has been given to us. The word “cry” (kradzō) suggests intensity, even anguish — this is not a polite address but an eruption of the heart that has been made a child of God. Paul uses the same word in Galatians 4:6, where he says the Spirit of the Son cries Abba in our hearts — the Son’s own relationship with the Father is now ours.",
  },
  {
    reference: "Matthew 18:21-35",
    text: "“Therefore, the kingdom of heaven is like a king who wanted to settle accounts with his servants. As he began the settlement, a man who owed him ten thousand bags of gold was brought to him... But when that servant went out, he found one of his fellow servants who owed him a hundred silver coins...”",
    exposition: "This parable immediately follows Jesus’ extended teaching on forgiveness in Matthew 18, and it functions as an extended commentary on the fifth petition of the Lord’s Prayer. The ten thousand talents (an astronomical, unpayable sum) represent our debt to God. The hundred denarii (a few months’ wages) represent what others owe us. The shocking disproportion is the point: the person who has received oceanic forgiveness yet refuses to extend a thimbleful of forgiveness has not really understood what they received.",
  },
  {
    reference: "Psalm 145:10-13",
    text: "All your works praise you, Lord; your faithful people extol you. They tell of the glory of your kingdom and speak of your might, so that all people may know of your mighty acts and the glorious splendor of your kingdom. Your kingdom is an everlasting kingdom, and your dominion endures through all generations.",
    exposition: "This psalm is one of the great kingdom psalms and forms part of the scriptural background for the Lord’s Prayer’s kingdom petitions. The structure mirrors the prayer: God’s name is praised, His kingdom is announced, His power is celebrated. The phrase “everlasting kingdom” (malkhut kol olamim) echoes through the doxology. Jesus’ prayer did not invent kingdom language — it took up a hope already burning in Israel’s worship and redirected it through His own person and mission.",
  },
  {
    reference: "1 Chronicles 29:10-13",
    text: "David praised the Lord in the assembly: “Praise be to you, Lord, the God of our father Israel, from everlasting to everlasting. Yours, Lord, is the greatness and the power and the glory and the majesty and the splendor, for everything in heaven and earth is yours. Yours, Lord, is the kingdom; you are exalted as head over all.”",
    exposition: "This is the most direct Old Testament parallel to the Lord’s Prayer doxology. David, at the end of his life, having gathered materials for the temple he would never build, breaks into extravagant praise that uses exactly the vocabulary of the doxology: kingdom (mamlakhah), power (gevurah), glory (tiferet). The doxology is not an appendix — it is the prayer returning to its source, completing the circle that began with “Our Father.” All prayer ends where it began: in wonder at who God is.",
  },
];

// ─── Video Data ───────────────────────────────────────────────────────────────
const videosData = [
  { videoId: "TdvRHTqBdUI", title: "N.T. Wright: The Lord’s Prayer Explained" },
  { videoId: "gLlXP-LT-0I", title: "Praying the Lord’s Prayer with New Eyes" },
  { videoId: "yIqJlMLdJQ4", title: "The Lord’s Prayer - Matthew 6 Deep Dive" },
  { videoId: "sHmGaQOYV3s", title: "Martin Luther’s Simple Way to Pray" },
  { videoId: "EJQZwe_OAZE", title: "Dallas Willard on the Lord’s Prayer" },
  { videoId: "pJVhDIHzfgk", title: "Our Father: The Radical Prayer of Jesus" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "4px 0 28px",
        borderBottom: `1px solid ${BORDER}`,
        marginBottom: "36px",
      }}
    >
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              border: isActive ? `1.5px solid ${GOLD}` : `1.5px solid ${BORDER}`,
              background: isActive ? `${GOLD}18` : "transparent",
              color: isActive ? GOLD : MUTED,
              fontSize: "14px",
              fontWeight: isActive ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.18s ease",
              letterSpacing: "0.02em",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

function PetitionCard({ data, index }: { data: (typeof theologyData)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "16px",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "24px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: `${GOLD}22`,
              border: `1.5px solid ${GOLD}55`,
              color: GOLD,
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {index + 1}
          </div>
          <div style={{ color: TEXT, fontSize: "18px", fontWeight: 700, lineHeight: 1.3, marginBottom: "6px" }}>
            &ldquo;{data.petition}&rdquo;
          </div>
          <div style={{ color: MUTED, fontSize: "13px", fontStyle: "italic", marginBottom: "4px" }}>
            {data.greek}
          </div>
          <div style={{ color: `${MUTED}88`, fontSize: "12px" }}>{data.transliteration}</div>
          {!open && (
            <div style={{ color: MUTED, fontSize: "14px", marginTop: "8px" }}>{data.summary}</div>
          )}
        </div>
        <span style={{ color: GOLD, fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Body */}
      {open && (
        <div style={{ padding: "0 28px 28px" }}>
          <div
            style={{
              padding: "14px 18px",
              background: `${GOLD}0D`,
              border: `1px solid ${GOLD}33`,
              borderRadius: "10px",
              marginBottom: "20px",
              color: GOLD,
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            {data.summary}
          </div>
          {data.exposition.map((section, si) => (
            <div key={si} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => setOpenSection(openSection === si ? null : si)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  background: openSection === si ? `${GOLD}0D` : `${BORDER}44`,
                  border: `1px solid ${openSection === si ? GOLD + "44" : BORDER}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                  color: openSection === si ? GOLD : TEXT,
                  fontSize: "15px",
                  fontWeight: 600,
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                {section.heading}
                <span style={{ flexShrink: 0, marginLeft: "12px", opacity: 0.7 }}>
                  {openSection === si ? "▲" : "▼"}
                </span>
              </button>
              {openSection === si && (
                <div
                  style={{
                    padding: "18px 18px",
                    background: `${CARD}`,
                    border: `1px solid ${BORDER}`,
                    borderTop: "none",
                    borderRadius: "0 0 10px 10px",
                    color: MUTED,
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {section.body}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TheologyTab() {
  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2
          style={{
            fontSize: "clamp(22px, 4vw, 30px)",
            fontWeight: 800,
            color: TEXT,
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          The Seven Petitions
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          The Lord&rsquo;s Prayer is not a formula — it is a school. Each petition trains our desires, reorders our
          priorities, and situates us within God&rsquo;s grand purposes for creation. Explore every line with Greek
          word studies, historical context, and theological exposition.
        </p>
      </div>

      {/* The full prayer text */}
      <div
        style={{
          background: `linear-gradient(135deg, ${GOLD}0A, transparent)`,
          border: `1px solid ${GOLD}33`,
          borderRadius: "16px",
          padding: "32px 36px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ color: MUTED, fontSize: "13px", letterSpacing: "0.1em", marginBottom: "16px", textTransform: "uppercase" }}>
          Matthew 6:9-13
        </div>
        <blockquote
          style={{
            color: TEXT,
            fontSize: "clamp(16px, 2.5vw, 19px)",
            lineHeight: 2,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Our Father in heaven,
          <br />
          hallowed be your name,
          <br />
          your kingdom come,
          <br />
          your will be done,
          <br />
          on earth as it is in heaven.
          <br />
          Give us today our daily bread.
          <br />
          And forgive us our debts,
          <br />
          as we also have forgiven our debtors.
          <br />
          And lead us not into temptation,
          <br />
          but deliver us from the evil one.
        </blockquote>
      </div>

      {/* Petition cards */}
      {theologyData.map((item, i) => (
        <PetitionCard key={i} data={item} index={i} />
      ))}

      {/* Structure note */}
      <div
        style={{
          marginTop: "40px",
          padding: "28px",
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: "16px",
        }}
      >
        <h3 style={{ color: GOLD, fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>
          The Architecture of the Prayer
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {[
            { label: "God-Centered (Petitions 1–3)", desc: "Name, Kingdom, Will — beginning with who God is and what He is doing" },
            { label: "Human-Centered (Petitions 4–6)", desc: "Bread, Forgiveness, Deliverance — our daily, relational, and spiritual needs" },
            { label: "Doxological Frame", desc: "Opens invoking the Father; closes declaring His kingdom, power, and glory" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "16px",
                background: `${GOLD}0A`,
                border: `1px solid ${GOLD}22`,
                borderRadius: "10px",
              }}
            >
              <div style={{ color: GOLD, fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>{item.label}</div>
              <div style={{ color: MUTED, fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PracticesTab() {
  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: TEXT, marginBottom: "12px" }}>
          Daily Practices
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          Six concrete applications — one for each of the first six petitions — to move the Lord&rsquo;s Prayer from
          recitation into transformation. Each practice is rooted in the theology of its petition.
        </p>
      </div>

      <div style={{ display: "grid", gap: "20px" }}>
        {practicesData.map((entry, i) => (
          <div
            key={i}
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "14px",
              padding: "24px 28px",
              borderLeft: `4px solid ${GOLD}`,
            }}
          >
            <div style={{ color: GOLD, fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px", textTransform: "uppercase" }}>
              Petition {i + 1}
            </div>
            <div style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              &ldquo;{entry.petition}&rdquo;
            </div>
            <div style={{ display: "grid", gap: "12px" }}>
              <div>
                <div style={{ color: GOLD, fontSize: "12px", fontWeight: 700, marginBottom: "4px", letterSpacing: "0.06em" }}>
                  REFLECTION
                </div>
                <div style={{ color: MUTED, fontSize: "14px", lineHeight: 1.7 }}>{entry.reflection}</div>
              </div>
              <div
                style={{
                  padding: "14px 16px",
                  background: `${GOLD}0D`,
                  border: `1px solid ${GOLD}33`,
                  borderRadius: "8px",
                }}
              >
                <div style={{ color: GOLD, fontSize: "12px", fontWeight: 700, marginBottom: "4px", letterSpacing: "0.06em" }}>
                  TODAY&rsquo;S APPLICATION
                </div>
                <div style={{ color: TEXT, fontSize: "14px", lineHeight: 1.7 }}>{entry.application}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VoicesTab() {
  const [activeVoice, setActiveVoice] = useState(0);
  const voice = voicesData[activeVoice];

  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: TEXT, marginBottom: "12px" }}>
          Theologian Voices
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          Six master teachers on the Lord&rsquo;s Prayer — spanning five centuries of the church&rsquo;s reflection.
          Each brings a distinct lens that illuminates what we might otherwise miss.
        </p>
      </div>

      {/* Voice selector */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
        {voicesData.map((v, i) => (
          <button
            key={i}
            onClick={() => setActiveVoice(i)}
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              border: i === activeVoice ? `1.5px solid ${GOLD}` : `1.5px solid ${BORDER}`,
              background: i === activeVoice ? `${GOLD}18` : "transparent",
              color: i === activeVoice ? GOLD : MUTED,
              fontSize: "14px",
              fontWeight: i === activeVoice ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Voice card */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: "16px",
          padding: "36px",
        }}
      >
        <div style={{ marginBottom: "8px", color: GOLD, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>
          {voice.work}
        </div>
        <h3 style={{ color: TEXT, fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>{voice.name}</h3>
        <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>{voice.bio}</p>

        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "20px",
            margin: "0 0 24px",
            fontStyle: "italic",
            color: TEXT,
            fontSize: "17px",
            lineHeight: 1.7,
          }}
        >
          &ldquo;{voice.quote}&rdquo;
        </blockquote>

        <div>
          <div style={{ color: GOLD, fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "8px" }}>
            CONTRIBUTION
          </div>
          <p style={{ color: MUTED, fontSize: "15px", lineHeight: 1.8 }}>{voice.contribution}</p>
        </div>
      </div>
    </div>
  );
}

function ScriptureTab() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: TEXT, marginBottom: "12px" }}>
          Scripture Study
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          Six passages that illuminate the Lord&rsquo;s Prayer — from the prayer itself in Matthew and Luke, to the
          adoption cry of Romans 8, the forgiveness parable, and the Old Testament roots of the doxology.
        </p>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        {scriptureData.map((s, i) => (
          <div
            key={i}
            style={{
              background: CARD,
              border: `1px solid ${openIdx === i ? GOLD + "55" : BORDER}`,
              borderRadius: "14px",
              overflow: "hidden",
              transition: "border-color 0.15s ease",
            }}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: "100%",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ color: openIdx === i ? GOLD : TEXT, fontSize: "16px", fontWeight: 700 }}>
                {s.reference}
              </span>
              <span style={{ color: GOLD, fontSize: "18px" }}>{openIdx === i ? "−" : "+"}</span>
            </button>

            {openIdx === i && (
              <div style={{ padding: "0 24px 24px" }}>
                <blockquote
                  style={{
                    borderLeft: `3px solid ${GOLD}`,
                    paddingLeft: "18px",
                    margin: "0 0 20px",
                    fontStyle: "italic",
                    color: TEXT,
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {s.text}
                </blockquote>
                <div>
                  <div style={{ color: GOLD, fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "8px" }}>
                    EXPOSITION
                  </div>
                  <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}>{s.exposition}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function JournalTab() {
  const STORAGE_KEY = "vine_lordsprayer_entries";

  const [entries, setEntries] = useState<LPEntry[]>([]);
  const [petition, setPetition] = useState<string>(PETITIONS[0]);
  const [reflection, setReflection] = useState("");
  const [application, setApplication] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  function handleSave() {
    if (!reflection.trim() || !application.trim()) return;
    const newEntry: LPEntry = { petition, reflection: reflection.trim(), application: application.trim() };
    const updated = [newEntry, ...entries];
    setEntries(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setReflection("");
    setApplication("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleDelete(index: number) {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: TEXT, marginBottom: "12px" }}>
          Prayer Journal
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          Record your reflections on each petition — which line of the Lord&rsquo;s Prayer is speaking to you today,
          what it stirs in you, and how you will live it out. Your entries are saved locally in your browser.
        </p>
      </div>

      {/* Form */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: "16px",
          padding: "32px",
          marginBottom: "40px",
        }}
      >
        <h3 style={{ color: GOLD, fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>New Entry</h3>

        {/* Petition selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", color: TEXT, fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
            Which petition resonates today?
          </label>
          <select
            value={petition}
            onChange={(e) => setPetition(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              color: TEXT,
              fontSize: "14px",
              outline: "none",
              cursor: "pointer",
            }}
          >
            {PETITIONS.map((p) => (
              <option key={p} value={p} style={{ background: BG, color: TEXT }}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Reflection */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", color: TEXT, fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
            Personal Reflection
          </label>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="What does this petition stir in you? What does it reveal about your heart, your needs, or your relationship with God?"
            rows={4}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              color: TEXT,
              fontSize: "14px",
              lineHeight: 1.7,
              resize: "vertical",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Application */}
        <div style={{ marginBottom: "28px" }}>
          <label style={{ display: "block", color: TEXT, fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
            How will you live this out today?
          </label>
          <textarea
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            placeholder="One concrete step, one specific action, one person to reach, one habit to practice — ground this petition in today."
            rows={3}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              color: TEXT,
              fontSize: "14px",
              lineHeight: 1.7,
              resize: "vertical",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={handleSave}
            disabled={!reflection.trim() || !application.trim()}
            style={{
              padding: "12px 28px",
              background: reflection.trim() && application.trim() ? GOLD : `${GOLD}44`,
              color: reflection.trim() && application.trim() ? "#000" : `${MUTED}88`,
              border: "none",
              borderRadius: "9999px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: reflection.trim() && application.trim() ? "pointer" : "not-allowed",
              transition: "all 0.15s ease",
            }}
          >
            Save Entry
          </button>
          {saved && (
            <span style={{ color: GOLD, fontSize: "14px", fontWeight: 600 }}>
              Saved ✓
            </span>
          )}
        </div>
      </div>

      {/* Entries */}
      {entries.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px",
            color: MUTED,
            fontSize: "15px",
            background: CARD,
            border: `1px dashed ${BORDER}`,
            borderRadius: "16px",
          }}
        >
          No entries yet. Begin by reflecting on a petition above.
        </div>
      ) : (
        <div>
          <h3 style={{ color: TEXT, fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>
            Your Entries ({entries.length})
          </h3>
          <div style={{ display: "grid", gap: "16px" }}>
            {entries.map((entry, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "14px",
                  padding: "24px",
                  borderLeft: `4px solid ${GOLD}`,
                  position: "relative",
                }}
              >
                <button
                  onClick={() => handleDelete(i)}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "transparent",
                    border: `1px solid ${BORDER}`,
                    borderRadius: "6px",
                    color: MUTED,
                    fontSize: "12px",
                    padding: "4px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
                <div style={{ color: GOLD, fontSize: "13px", fontWeight: 700, marginBottom: "10px" }}>
                  &ldquo;{entry.petition}&rdquo;
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ color: TEXT, fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>
                    REFLECTION
                  </div>
                  <div style={{ color: MUTED, fontSize: "14px", lineHeight: 1.7 }}>{entry.reflection}</div>
                </div>
                <div>
                  <div style={{ color: TEXT, fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>
                    APPLICATION
                  </div>
                  <div style={{ color: MUTED, fontSize: "14px", lineHeight: 1.7 }}>{entry.application}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function VideosTab() {
  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: TEXT, marginBottom: "12px" }}>
          Video Teaching
        </h2>
        <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, maxWidth: "640px" }}>
          Six video teachings on the Lord&rsquo;s Prayer — from N.T. Wright and Dallas Willard to expository
          deep-dives on Matthew 6. Watch, pause, journal, and return to the prayer with fresh eyes.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
        {videosData.map((v, i) => (
          <div
            key={i}
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <VideoEmbed videoId={v.videoId} title={v.title} />
            <div style={{ padding: "16px 18px" }}>
              <div style={{ color: TEXT, fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}>{v.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LordPrayerGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, ${GOLD}0D 0%, transparent 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "60px 24px 48px",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: `${GOLD}15`,
              border: `1px solid ${GOLD}44`,
              borderRadius: "9999px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: GOLD, fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em" }}>
              MATTHEW 6:9–13
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: TEXT,
              lineHeight: 1.15,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Our Father:{" "}
            <span style={{ color: GOLD }}>A Deep Guide</span>
            <br />
            to the Lord&rsquo;s Prayer
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: "clamp(15px, 2.5vw, 18px)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginBottom: "28px",
            }}
          >
            A seminary-level, fully interactive study of every petition — Greek word studies, historical context,
            theologian voices, Scripture cross-references, and a personal journal to deepen your daily prayer life.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["7 Petitions", "Greek Word Studies", "6 Theologians", "Personal Journal", "6 Videos"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: `${BORDER}88`,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "9999px",
                  color: MUTED,
                  fontSize: "13px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <TabBar active={activeTab} onChange={setActiveTab} />

        {activeTab === "Theology" && <TheologyTab />}
        {activeTab === "Practices" && <PracticesTab />}
        {activeTab === "Voices" && <VoicesTab />}
        {activeTab === "Scripture" && <ScriptureTab />}
        {activeTab === "Journal" && <JournalTab />}
        {activeTab === "Videos" && <VideosTab />}
      </div>

      {/* Footer nav */}
      <div
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          <Link
            href="/sermon-on-the-mount"
            style={{ color: MUTED, fontSize: "14px", textDecoration: "none" }}
          >
            Sermon on the Mount Guide
          </Link>
          <Link
            href="/prayer"
            style={{ color: MUTED, fontSize: "14px", textDecoration: "none" }}
          >
            Prayer Resources
          </Link>
          <Link
            href="/theology"
            style={{ color: MUTED, fontSize: "14px", textDecoration: "none" }}
          >
            Theology Library
          </Link>
        </div>
        <p style={{ color: `${MUTED}66`, fontSize: "13px", marginTop: "16px" }}>
          &ldquo;Our Father in heaven, hallowed be your name.&rdquo; — Matthew 6:9
        </p>
      </div>
    </div>
  );
}
