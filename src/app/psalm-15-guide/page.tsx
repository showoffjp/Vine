"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion {
  id: string;
  title: string;
  reference: string;
  body: string;
}

interface Block {
  heading: string;
  reference: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "An Entrance Liturgy at the Door of God's House",
    reference: "Psalm 15:1&ndash;5",
    paragraphs: [
      "Psalm 15 is one of the great &ldquo;entrance liturgies&rdquo; of the Psalter, a short and luminous poem that opens with a question asked at the threshold of the sanctuary and answers it with a portrait of the kind of person who may draw near to God. &ldquo;O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill?&rdquo; (15:1). The whole psalm hangs on that double question, and everything that follows is the answer the worshiper receives as he stands at the gate of the LORD&rsquo;s dwelling.",
      "In the ancient world, the great temples and sacred precincts often had inscriptions or priestly examinations that governed who could enter. Worshipers approaching the house of a god would ask the gatekeeper what was required, and the priest would recite the conditions of admission. Psalm 15 echoes this pattern, but it transforms it. The question is not, &ldquo;What ritual must I perform?&rdquo; or, &ldquo;What sacrifice must I bring?&rdquo; The answer the LORD gives is entirely a matter of character &mdash; of how a person walks, speaks, treats his neighbor, keeps his word, and handles his money.",
      "The verbs in verse 1 are deliberate. To &ldquo;sojourn&rdquo; in God&rsquo;s tent is the language of the guest, the temporary resident who is received under the host&rsquo;s protection. To &ldquo;dwell&rdquo; on his holy hill is the language of settled belonging, of being at home in the presence of God. Together they describe the deepest longing of the human heart: to be welcomed into the company of God and to remain there, secure and unshaken.",
      "The psalm is traditionally ascribed to David and likely arose in connection with the worship of Israel at the tabernacle on Mount Zion, the &ldquo;holy hill&rdquo; where the ark of God rested. Whether sung as pilgrims ascended to worship or recited as a teaching psalm in the gathered assembly, its function was to press upon the worshiper that the God of Israel is holy, and that those who would come into his presence are called to reflect his holiness in the ordinary fabric of their lives.",
      "Psalm 15 is sometimes called a &ldquo;torah psalm&rdquo; or an &ldquo;ethical entrance liturgy&rdquo; because it instructs the worshiper in the way of righteousness. It is the close companion of Psalm 24, which asks an almost identical question: &ldquo;Who shall ascend the hill of the LORD? And who shall stand in his holy place?&rdquo; (24:3). Together these two psalms frame the central insight of Israel&rsquo;s worship: communion with a holy God is inseparable from a holy life.",
    ],
  },
  {
    heading: "The Structure: Question, Portrait, Promise",
    reference: "Psalm 15:1&ndash;5",
    paragraphs: [
      "The architecture of Psalm 15 is beautifully simple and can be grasped at a glance. It opens with a question (verse 1), unfolds a tenfold portrait of righteous character (verses 2&ndash;5b), and closes with a sweeping promise (verse 5c): &ldquo;He who does these things shall never be moved.&rdquo; This three-part shape &mdash; question, answer, promise &mdash; gives the psalm the feel of a doorway: you ask to enter, you hear what the threshold requires, and you receive the assurance of a settled place within.",
      "The central portrait is built from a series of descriptions, some positive and some negative, that together sketch the character of the one who may dwell with God. Scholars have often counted ten such marks, mirroring the Ten Commandments and suggesting that the psalm is a meditation on what the law looks like when it is written on a living heart. The marks move outward from the inner life to speech, to the treatment of one&rsquo;s neighbor, to the keeping of one&rsquo;s word, and finally to the use of one&rsquo;s money.",
      "What is striking is how earthy and concrete the portrait is. There is nothing here about elaborate ritual, mystical experience, or religious performance. The righteous person walks blamelessly, tells the truth, refuses to slander, honors the right people, keeps painful promises, and refuses to exploit the vulnerable for financial gain. The holiness God requires is not exotic; it is the holiness of an honest, faithful, generous life lived among neighbors.",
      "The closing promise gathers the whole portrait into a single image of unshakable stability: &ldquo;He who does these things shall never be moved.&rdquo; The person who walks in this way is like a house built on rock, secure against every storm. In a world of shifting alliances and collapsing fortunes, the righteous one is anchored, because his life is anchored in the God whose tent he shares.",
    ],
  },
  {
    heading: "The Context of Israel's Worship",
    reference: "Background and Setting",
    paragraphs: [
      "To feel the force of Psalm 15 we must remember what it meant for Israel that the holy God dwelt in their midst. The tabernacle, and later the temple, was not merely a place of religious activity; it was the dwelling place of the living God, the place where heaven touched earth. To approach it carelessly was perilous, for the same God who welcomed his people in covenant love was a consuming fire to those who treated his holiness with contempt.",
      "The entrance liturgy thus served a profoundly pastoral purpose. As worshipers came up to Zion, the psalm reminded them that they were drawing near to the Holy One, and that the worship of God could never be separated from the way they lived among their neighbors. A person could not slander his neighbor on the way up the hill and then expect to be welcomed into the presence of the God of truth at the top.",
      "This connection between worship and ethics runs throughout the prophets. Isaiah thunders against those who multiply sacrifices while their hands are full of blood (Isaiah 1:11&ndash;17). Micah declares that the LORD requires us &ldquo;to do justice, and to love kindness, and to walk humbly with your God&rdquo; (Micah 6:8). Amos cries that God despises the festivals of those who trample the poor (Amos 5:21&ndash;24). Psalm 15 is the worshiping heart of this same prophetic conviction.",
      "Yet the psalm is not a ladder of self-righteous achievement. It is the song of those who already belong to the covenant people of God, instructing them in the life that fits the presence of God. It assumes the grace of covenant relationship and describes the character that grace produces. The portrait is not the price of admission but the shape of a redeemed life, and it points beyond every imperfect Israelite to the one who would fulfill it perfectly.",
    ],
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "The Question of the Entrance Liturgy",
    reference: "Psalm 15:1; cf. Psalm 24:3&ndash;6",
    body:
      "The psalm opens with the great question of all true religion: &ldquo;O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill?&rdquo; (15:1). This is the question of the worshiper standing at the door of the sanctuary, longing to enter the presence of God and asking what such nearness requires. It is the question behind every altar, every pilgrimage, every prayer: how can a creature draw near to the Holy One and remain there in safety and joy?<br/><br/>The form is that of the ancient entrance liturgy, in which a worshiper at the gate asks the conditions of admission and receives a priestly answer. Psalm 24 preserves the same structure almost word for word: &ldquo;Who shall ascend the hill of the LORD? And who shall stand in his holy place? He who has clean hands and a pure heart&rdquo; (24:3&ndash;4). The two psalms are twin pillars at the entrance of Israel&rsquo;s worship, each insisting that the God of the sanctuary is holy and that those who come to him are called to a holy life.<br/><br/>The words &ldquo;sojourn&rdquo; and &ldquo;dwell&rdquo; carry a tender weight. To sojourn is to be received as a welcomed guest under the host&rsquo;s protection; to dwell is to be settled, at home, secure. The deepest desire of the redeemed heart is voiced here: not merely to visit God but to abide with him, as Psalm 23 ends, &ldquo;I shall dwell in the house of the LORD forever&rdquo; (23:6). The question of Psalm 15 is finally the question of home.",
  },
  {
    id: "t2",
    title: "The Tenfold Portrait of Righteous Character",
    reference: "Psalm 15:2&ndash;5",
    body:
      "The answer to the psalm&rsquo;s question is not a ritual but a portrait. The one who may dwell with God is described in a series of marks that are often counted as ten, echoing the Ten Commandments and suggesting that this is the law written upon a living heart. He &ldquo;walks blamelessly and does what is right and speaks truth in his heart&rdquo; (15:2). He &ldquo;does not slander with his tongue and does no evil to his neighbor, nor takes up a reproach against his friend&rdquo; (15:3).<br/><br/>The portrait continues: in his eyes &ldquo;a vile person is despised, but he honors those who fear the LORD&rdquo; (15:4); he &ldquo;swears to his own hurt and does not change&rdquo; (15:4); he &ldquo;does not put out his money at interest and does not take a bribe against the innocent&rdquo; (15:5). The marks move from the inner life outward &mdash; from the heart to the tongue, from the tongue to the neighbor, from the neighbor to the oath, and finally to the handling of money &mdash; covering the whole field of human life.<br/><br/>What is remarkable is the ordinariness of this holiness. There is no mention of elaborate sacrifice, ecstatic experience, or religious credential. The character God welcomes is woven from honesty, neighborliness, faithfulness, and integrity in the practical affairs of daily life. As Paul would later teach, love &ldquo;does no wrong to a neighbor; therefore love is the fulfilling of the law&rdquo; (Romans 13:10). Psalm 15 shows us what such love looks like in the texture of an ordinary week.",
  },
  {
    id: "t3",
    title: "The Ethics of the Heart: Truth in the Inner Life",
    reference: "Psalm 15:2; cf. Matthew 5:8",
    body:
      "At the center of the portrait stands a phrase of arresting depth: he &ldquo;speaks truth in his heart&rdquo; (15:2). The righteous person is not merely truthful in his speech but truthful in his innermost being. His outward words match his inward thoughts; there is no gap between the man others see and the man he is when no one is watching. He does not lie even to himself.<br/><br/>This is the holiness of integrity, where the word &ldquo;integrity&rdquo; means wholeness, a life integrated and undivided. The opposite is the divided heart, the person who flatters with his lips while plotting in secret, who presents one face to the public and another to himself. Scripture knows this division well: &ldquo;The heart is deceitful above all things&rdquo; (Jeremiah 17:9), and the human capacity for self-deception is bottomless.<br/><br/>The Lord Jesus deepens this theme in the Sermon on the Mount: &ldquo;Blessed are the pure in heart, for they shall see God&rdquo; (Matthew 5:8). The purity God seeks is not first of the hands but of the heart, the inner spring from which all of life flows. Psalm 15 anticipates this teaching by locating righteousness in the heart before it reaches the lips, and by insisting that those who would dwell with the God of truth must be people in whom truth dwells.",
  },
  {
    id: "t4",
    title: "Keeping an Oath When It Hurts",
    reference: "Psalm 15:4; cf. Matthew 5:33&ndash;37",
    body:
      "One of the most searching marks of the righteous person is that he &ldquo;swears to his own hurt and does not change&rdquo; (15:4). He keeps his word even when keeping it costs him dearly. Having made a promise, he does not wriggle free when circumstances shift and the commitment becomes inconvenient or painful. His yes is yes, and his word is as good as a bond, because he reflects the God who keeps covenant even at infinite cost to himself.<br/><br/>This is a rare and precious quality in any age. The temptation to break a costly promise, to renegotiate when the bill comes due, to find a loophole when faithfulness becomes burdensome, is universal. But the one who dwells with God is the one who can be trusted absolutely, whose commitments do not bend before self-interest. He is, in the deepest sense, a reliable person.<br/><br/>The Lord Jesus draws the principle to its conclusion: &ldquo;Let what you say be simply Yes or No&rdquo; (Matthew 5:37). The Christian is to be a person whose bare word carries the weight of an oath, because he belongs to the God who cannot lie. Ultimately this points to the faithfulness of Christ himself, who swore to redeem his people and kept his promise though it cost him his life &mdash; the supreme instance of one who swore to his own hurt and did not change.",
  },
  {
    id: "t5",
    title: "Economic Integrity: No Interest, No Bribe",
    reference: "Psalm 15:5; cf. Exodus 22:25; Deuteronomy 23:19",
    body:
      "The portrait closes where the prophets so often press: on money. The righteous person &ldquo;does not put out his money at interest and does not take a bribe against the innocent&rdquo; (15:5). In ancient Israel the prohibition on charging interest applied especially to loans made to the poor and needy among the covenant people; to lend at interest to a struggling brother was to profit from his distress (Exodus 22:25; Leviticus 25:35&ndash;37). The righteous lend to help, not to exploit.<br/><br/>Likewise, he refuses to &ldquo;take a bribe against the innocent.&rdquo; He will not let money corrupt his judgment or buy his testimony; he cannot be purchased to do injustice. In a world where the vulnerable are routinely sold out for gain, the one who dwells with God keeps his hands clean of such corruption. His treatment of money reveals the truthfulness of his heart, for &ldquo;where your treasure is, there your heart will be also&rdquo; (Matthew 6:21).<br/><br/>That the portrait of holiness ends with economics is deeply instructive. It is easy to imagine that nearness to God is a matter of private spirituality, sealed off from the marketplace. Psalm 15 will not allow it. How a person handles money &mdash; whether he exploits the weak or protects the innocent &mdash; is a spiritual matter of the first order, and it is part of what qualifies a worshiper to stand in the presence of a just and generous God.",
  },
  {
    id: "t6",
    title: "Never Moved: The Promise of the Righteous",
    reference: "Psalm 15:5; cf. Matthew 7:24&ndash;25",
    body:
      "The psalm ends with a promise as solid as the holy hill itself: &ldquo;He who does these things shall never be moved&rdquo; (15:5). The person whose life is shaped by this portrait is granted unshakable stability. He is like a house built on rock, secure when the rains fall and the floods come and the winds beat against it, because his foundation does not give way (Matthew 7:24&ndash;25).<br/><br/>The language of being &ldquo;moved&rdquo; runs through the Psalms as the language of security in God. &ldquo;I have set the LORD always before me; because he is at my right hand, I shall not be shaken&rdquo; (Psalm 16:8). &ldquo;He only is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (Psalm 62:2). The righteous one is anchored not ultimately in his own goodness but in the God whose tent he shares.<br/><br/>This stability is not the promise of an untroubled life. The righteous still face storms; the floods still come. But they are not swept away. They abide, settled and secure, in the presence of the God who is their dwelling place. And for the believer in Christ, this promise reaches its fullness in the eternal security of those who are hidden in him, of whom Jesus says, &ldquo;No one will snatch them out of my hand&rdquo; (John 10:28).",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "The Question: Who Shall Sojourn in Your Tent?",
    reference: "Psalm 15:1",
    body:
      "&ldquo;O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill?&rdquo; The psalm begins where all true worship begins, with a question addressed directly to God. The worshiper stands at the threshold of the sanctuary and asks the most important question a creature can ask: how may I come near to you and remain in your presence?<br/><br/>The &ldquo;tent&rdquo; recalls the tabernacle, the dwelling place of God among his people during Israel&rsquo;s wandering and early settlement; the &ldquo;holy hill&rdquo; is Mount Zion, where the ark of God came to rest. Together they name the place where heaven met earth, where the holy God condescended to dwell with his covenant people. To be welcomed there was the highest privilege and the deepest joy.<br/><br/>The two verbs deserve attention. To &ldquo;sojourn&rdquo; is to be received as a guest under the host&rsquo;s protection, a temporary resident whose welcome depends entirely on the goodness of the one who receives him. To &ldquo;dwell&rdquo; is to be settled, at home, secure. The longing voiced here is the longing of the whole Psalter and the whole human heart: &ldquo;One thing have I asked of the LORD, that will I seek after: that I may dwell in the house of the LORD all the days of my life&rdquo; (Psalm 27:4).<br/><br/>By placing the question first, the psalm establishes that the answer is not something we devise but something God reveals. We do not set the terms of fellowship with the Holy One; he does. And so the worshiper waits at the gate for the answer that only God can give.",
  },
  {
    id: "v2",
    title: "Positive Character: Walks, Does Right, Speaks Truth",
    reference: "Psalm 15:2&ndash;3",
    body:
      "&ldquo;He who walks blamelessly and does what is right and speaks truth in his heart; who does not slander with his tongue and does no evil to his neighbor, nor takes up a reproach against his friend.&rdquo; The answer to the question begins with a portrait, and the first strokes describe the basic orientation of a righteous life.<br/><br/>To &ldquo;walk blamelessly&rdquo; is not to be sinlessly perfect but to be a person of integrity, whose whole manner of life is sound and undivided. The word translated &ldquo;blameless&rdquo; means complete, whole, having no false part. To &ldquo;do what is right&rdquo; is to practice righteousness in concrete deeds, not merely to admire it in theory. And to &ldquo;speak truth in his heart&rdquo; is to be truthful in the innermost being, where no one but God can see &mdash; the holiness of a heart that does not lie even to itself.<br/><br/>From the inner life the portrait moves to the tongue and the neighbor. The righteous person &ldquo;does not slander&rdquo; &mdash; he does not use his words to tear down another&rsquo;s reputation, to carry damaging tales, to wound with gossip. He &ldquo;does no evil to his neighbor,&rdquo; refusing to harm those whose lives are bound up with his. And he &ldquo;takes up&rdquo; no &ldquo;reproach against his friend,&rdquo; declining to spread or believe the worst about those near to him.<br/><br/>How searching this is. The sins named here &mdash; slander, malice, gossip, the eager repetition of another&rsquo;s shame &mdash; are the everyday sins of the tongue that we so easily excuse. Yet the psalm places them at the very gate of God&rsquo;s presence. The God of truth welcomes those whose words and hearts are true.",
  },
  {
    id: "v3",
    title: "Discernment and Integrity: Honoring and Keeping Oaths",
    reference: "Psalm 15:4",
    body:
      "&ldquo;In whose eyes a vile person is despised, but who honors those who fear the LORD; who swears to his own hurt and does not change.&rdquo; The portrait now turns to discernment &mdash; the right valuing of people &mdash; and to faithfulness in keeping one&rsquo;s word.<br/><br/>The righteous person sees clearly. He does not flatter the wicked or fawn over the powerful for what he can gain; in his eyes &ldquo;a vile person is despised.&rdquo; This is not cruelty but moral clarity: he refuses to honor what God dishonors, to praise corruption, to make a hero of a scoundrel. Conversely, he &ldquo;honors those who fear the LORD,&rdquo; esteeming the humble and faithful whom the world overlooks. His value system is set by God&rsquo;s, not by wealth, status, or power.<br/><br/>Then comes one of the most demanding marks of all: he &ldquo;swears to his own hurt and does not change.&rdquo; Having made a promise, he keeps it even when keeping it costs him dearly. He does not renegotiate when the commitment becomes inconvenient, does not search for a loophole when faithfulness grows painful. His word is utterly reliable, because he reflects the covenant-keeping God whose promises never fail.<br/><br/>This is the rare integrity of a person who can be trusted absolutely. In a world of broken contracts and abandoned commitments, the one who dwells with God is the one whose yes means yes, whose word stands though the heavens fall. Ultimately he images Christ, who swore to redeem his people and kept his oath at the cost of his own blood.",
  },
  {
    id: "v4",
    title: "Economic Ethics: No Interest, No Bribe, Never Moved",
    reference: "Psalm 15:5",
    body:
      "&ldquo;Who does not put out his money at interest and does not take a bribe against the innocent. He who does these things shall never be moved.&rdquo; The portrait closes with money and the corruption of justice, and then opens out into a soaring promise.<br/><br/>The righteous person &ldquo;does not put out his money at interest.&rdquo; In Israel this prohibition guarded the poor: to lend to a struggling brother at interest was to profit from his misfortune (Exodus 22:25; Leviticus 25:35&ndash;37; Deuteronomy 23:19). The righteous lend to relieve need, not to enrich themselves at the expense of the vulnerable. And he &ldquo;does not take a bribe against the innocent,&rdquo; refusing to let money buy his judgment or pervert his testimony. He cannot be purchased to do injustice.<br/><br/>That the catalog of holiness ends with economics is no accident. How a person handles money &mdash; whether he exploits the weak or shields the innocent &mdash; reveals the truthfulness of his heart. The marketplace is not sealed off from the sanctuary; it is one of the great arenas in which the worship of God is proved real or shown to be a sham.<br/><br/>Then the promise: &ldquo;He who does these things shall never be moved.&rdquo; The person whose life is shaped by this portrait is granted unshakable stability, like a house built on rock. He may face storms, but he will not be swept away. He abides, secure, in the presence of the God whose tent he shares &mdash; a foretaste of the eternal security of all who are anchored in Christ.",
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Worship That Reaches Into Ordinary Life",
    reference: "Living Psalm 15 Today",
    paragraphs: [
      "Psalm 15 refuses to let us divide our worship from our lives. It will not allow us to imagine that nearness to God is a Sunday matter, sealed off from Monday&rsquo;s words and Tuesday&rsquo;s transactions. The God who welcomes us into his presence is the God before whom we slander or refuse to slander, keep or break our promises, exploit or protect the vulnerable. The whole of life is lived at the door of his tent.",
      "This means that the first application of the psalm is to bring our ethics into the light of our worship. Before we ask how we feel in our devotions, we might ask how we have spoken of others this week, whether we have kept the promises we made, how we have handled money entrusted to us. The psalm makes these practical questions into spiritual questions of the highest order, because they reveal whether the worship of our lips matches the truth of our hearts.",
      "It also calls us to a holiness that is wonderfully ordinary. We are not asked for spectacular religious feats but for honesty, neighborliness, faithfulness, and integrity in the daily round. The person who tells the truth, keeps his word, refuses to gossip, and deals fairly in money is living the holiness that Psalm 15 describes. Such a life is not glamorous, but it is the life that may dwell with God.",
    ],
  },
  {
    heading: "The Tongue and the Neighbor",
    reference: "Guarding Our Words",
    paragraphs: [
      "A striking proportion of the psalm&rsquo;s portrait concerns the tongue and the neighbor: no slander, no evil done to a neighbor, no reproach taken up against a friend. These are the everyday sins we excuse most easily &mdash; the shared confidence that wounds, the eager repetition of another&rsquo;s failure, the quiet pleasure of carrying a damaging tale. Yet the psalm places them squarely at the gate of God&rsquo;s presence.",
      "To apply this is to take responsibility for our words. It is to refuse to spread what we have heard, to decline to believe the worst, to guard the reputation of those who are absent as we would wish ours to be guarded. The Christian who dwells with the God of truth will be known as a person who builds up rather than tears down, who covers a multitude of sins in love rather than broadcasting them (1 Peter 4:8).",
      "It is also to do positive good to our neighbors. The righteous person &ldquo;does no evil to his neighbor&rdquo; &mdash; and in the fuller revelation of the New Testament, he actively loves his neighbor as himself. The holiness of Psalm 15 is finally the holiness of love, the love that &ldquo;does no wrong to a neighbor&rdquo; and so fulfills the whole law (Romans 13:10).",
    ],
  },
  {
    heading: "Fulfilled in Christ, the Fruit of Grace",
    reference: "From Romans 3 to the Imputed Righteousness of Christ",
    paragraphs: [
      "It would be a fatal mistake to read Psalm 15 as a checklist by which we earn our way into God&rsquo;s presence. Measured honestly against this portrait, every one of us falls short. We have slandered; we have broken costly promises; we have loved money more than the innocent. &ldquo;None is righteous, no, not one&rdquo; (Romans 3:10). If admission to God&rsquo;s tent depended on our flawless performance of these marks, the door would be shut to us all.",
      "The portrait is fulfilled perfectly only in one person: Jesus Christ. He alone walked blamelessly, spoke truth in his heart, did no evil to his neighbor, kept his oath though it cost him his life, and could not be bought to harm the innocent. He alone has &ldquo;clean hands and a pure heart&rdquo; (Psalm 24:4). He is the one who may dwell on the holy hill, and he opens the way for us to enter with him.",
      "For the believer, then, Psalm 15 is not the price of admission but the fruit of grace. We enter God&rsquo;s presence clothed in the righteousness of Christ, &ldquo;the righteousness of God through faith in Jesus Christ for all who believe&rdquo; (Romans 3:22). And having entered by grace, we are remade by grace into people who increasingly bear the marks of this portrait &mdash; not to earn a place we already have, but because the Spirit is writing the law upon our hearts. The holiness of Psalm 15 is the shape of a life that grace produces.",
    ],
  },
  {
    heading: "Anchored and Unshaken",
    reference: "The Stability of the Righteous",
    paragraphs: [
      "The psalm ends with a promise that steadies the soul: &ldquo;He who does these things shall never be moved.&rdquo; For the believer in Christ, this promise is not a fragile hope resting on our own consistency but a sure word resting on the faithfulness of our Savior. We are anchored in him, hidden in him, secure in him, and no storm can finally sweep us away.",
      "This does not mean a life without trouble. The righteous still face floods and winds; the storms still come. But they are built on the rock, and they will not collapse. There is a deep stability available to those who walk with God &mdash; a settledness that the world cannot give and cannot take away, because it is grounded in the One who does not change.",
      "And so the psalm sends us back into ordinary life with both a summons and a comfort: the summons to walk in truth, faithfulness, and integrity, and the comfort that those who are anchored in Christ will never be moved. We dwell, even now, in the tent of the living God, and we shall dwell in his house forever.",
    ],
  },
];

const reflectionQuestions: string[] = [
  "The psalm asks, &ldquo;Who shall sojourn in your tent?&rdquo; When you examine your own week against the portrait that follows, where do you most fall short, and where do you sense the Spirit&rsquo;s work?",
  "What does it mean to &ldquo;speak truth in your heart&rdquo;? Are there places where the person others see and the person you are in secret have drifted apart?",
  "The righteous person &ldquo;swears to his own hurt and does not change.&rdquo; Is there a costly promise you are tempted to abandon? What would faithfulness require of you?",
  "Psalm 15 ends its portrait with money &mdash; no interest charged against the poor, no bribe taken against the innocent. How does your handling of money reveal the truthfulness of your heart?",
  "How does seeing Christ as the only one who perfectly fulfills this portrait change the way you read the psalm? How does it free you from earning and call you to grateful obedience?",
  "What would it look like this week to live as one who is &ldquo;never moved&rdquo; &mdash; anchored in Christ amid the storms you are facing?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 15 &mdash; Who May Dwell With God? (Overview)" },
  { videoId: "Q2oNOlXzBhY", title: "The Entrance Liturgy &mdash; Psalm 15 and Psalm 24" },
  { videoId: "8phkAg8PMHE", title: "The Character of the Righteous &mdash; Psalm 15 Verse by Verse" },
  { videoId: "fNk_zzaMoSs", title: "Fulfilled in Christ &mdash; Clean Hands and a Pure Heart" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm15Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: Accordion[], accent: string) =>
    items.map((item) => {
      const isOpen = open === item.id;
      return (
        <div
          key={item.id}
          style={{
            background: CARD,
            border: `1px solid ${isOpen ? accent : BORDER}`,
            borderRadius: 12,
            overflow: "hidden",
            transition: "border-color 0.15s",
          }}
        >
          <button
            type="button"
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "1.1rem 1.4rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "inherit",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{ color: TEXT, fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.3 }}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span
                style={{ color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}
                dangerouslySetInnerHTML={{ __html: item.reference }}
              />
            </span>
            <span
              style={{
                color: accent,
                fontSize: 26,
                lineHeight: 1,
                flexShrink: 0,
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            >
              +
            </span>
          </button>
          {isOpen && (
            <div
              style={{
                padding: "0 1.4rem 1.5rem",
                color: MUTED,
                fontSize: "1.04rem",
                lineHeight: 1.85,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "1.25rem",
              }}
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          )}
        </div>
      );
    });

  const renderBlocks = (blocks: Block[], accent: string) =>
    blocks.map((block, bi) => (
      <section key={bi} style={{ marginBottom: bi === blocks.length - 1 ? 0 : "2.75rem" }}>
        <h2
          style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 6px", lineHeight: 1.25 }}
          dangerouslySetInnerHTML={{ __html: block.heading }}
        />
        <div
          style={{ color: accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.4rem" }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {block.paragraphs.map((para, pi) => (
            <p
              key={pi}
              style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </section>
    ));

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GREEN}22`,
              color: GREEN,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Psalms &mdash; Entrance Liturgy
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 15 &mdash; Who May Dwell With God?
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.75, margin: 0 }}>
            An entrance liturgy at the door of the sanctuary, Psalm 15 asks who may sojourn in the tent of the LORD and answers with a tenfold portrait of righteous character &mdash; a life of truth, faithfulness, and integrity that is fulfilled perfectly only in Christ and grown in us by grace.
          </p>
        </header>

        <div
          style={{
            background: CARD,
            border: `1px solid ${GREEN}44`,
            borderRadius: 14,
            padding: "1.6rem 1.8rem",
            marginBottom: "2.75rem",
          }}
        >
          <div
            style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}
          >
            Key Verse &mdash; Psalm 15:1&ndash;2
          </div>
          <p
            style={{ color: TEXT, fontSize: "1.3rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill? He who walks blamelessly and does what is right and speaks truth in his heart.&rdquo;",
            }}
          />
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1.25rem",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? GREEN : CARD,
                  color: active ? "#fff" : MUTED,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && <div>{renderBlocks(overviewBlocks, GREEN)}</div>}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
              Six themes carry the heart of Psalm 15, from the great question of the entrance liturgy to the unshakable promise of the one who dwells with God. Expand each to explore the text and its cross-references.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {renderAccordion(themeItems, PURPLE)}
            </div>
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
              Move through Psalm 15 section by section &mdash; the question, the positive portrait, the marks of discernment and integrity, and the economic ethics that close with the promise that the righteous shall never be moved.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {renderAccordion(verseItems, GOLD)}
            </div>
          </div>
        )}

        {tab === "application" && (
          <div>
            {renderBlocks(applicationBlocks, TEAL)}

            <section style={{ marginTop: "3rem" }}>
              <h2 style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 1.4rem" }}>
                Questions for Reflection
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 10,
                      padding: "1rem 1.25rem",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: TEAL, fontWeight: 800, fontSize: "1.05rem", flexShrink: 0 }}>{i + 1}.</span>
                    <p
                      style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginTop: "3rem" }}>
              <h2 style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
                Deepen your study of Psalm 15 through these video teachings on the entrance liturgy, the portrait of righteous character, and the fulfillment of clean hands and a pure heart in Jesus Christ.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                      dangerouslySetInnerHTML={{ __html: v.title }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <div
              style={{
                marginTop: "3.5rem",
                background: CARD,
                border: `1px solid ${ROSE}44`,
                borderRadius: 14,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, who alone is holy, you ask who may dwell in your tent, and we confess that we have no claim of our own. We have slandered, broken costly promises, and loved gain more than the innocent. Yet you have opened the way through Jesus Christ, the only one with clean hands and a pure heart, who swore to redeem us and did not change though it cost him his life. Clothe us in his righteousness, and by your Spirit write your law upon our hearts, that we may walk blamelessly, speak truth, keep our word, and deal justly. Make us a people who dwell with you in truth, anchored in Christ and never moved. In his name we pray. Amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
