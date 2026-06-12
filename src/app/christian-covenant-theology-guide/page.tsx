"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

const tabs = [
  { id: "what", label: "What Is a Covenant" },
  { id: "ot", label: "Old Testament Covenants" },
  { id: "new", label: "The New Covenant" },
  { id: "debate", label: "Covenant vs. Dispensationalism" },
  { id: "grace", label: "The Covenant of Grace" },
  { id: "videos", label: "Videos" },
];

const whatItems = [
  {
    title: "The Hebrew Berith",
    text: "The backbone of covenant theology is the Hebrew word <em>berith</em> (בְּרִית), which appears over 300 times in the Old Testament. It denotes a solemn, binding agreement &mdash; not a casual promise but a sworn commitment sealed by oath, sacrifice, or ceremony. In the Ancient Near East, suzerain-vassal treaties followed a recognizable literary pattern: the great king (suzerain) identified himself and his acts of benevolence toward the vassal, stated his requirements, listed blessings for compliance and curses for violation, and invoked divine witnesses. Biblical scholars including Klaus Baltzer and Meredith Kline have demonstrated that Exodus and Deuteronomy map directly onto this treaty form &mdash; God as the Great King, Israel as the vassal nation. A biblical covenant has identifiable structural elements: (1) the parties involved, (2) the conditions stipulated, (3) the oaths sworn (often accompanied by the formula &ldquo;may it be done to me as to this animal if I break faith&rdquo;), and (4) the signs or ratifying acts. Understanding <em>berith</em> as treaty rather than mere contract or promise opens up the legal and relational architecture of the entire Old Testament.",
  },
  {
    title: "Covenants in the Ancient Near East",
    text: "The discovery of Hittite suzerainty treaties (second millennium BC) in the twentieth century transformed biblical scholarship. These political treaties between a great king and his subject peoples follow a six-part pattern: (1) preamble identifying the suzerain; (2) historical prologue rehearsing the king&rsquo;s past acts of benevolence; (3) stipulations binding the vassal; (4) document clause (where the treaty is deposited and read); (5) list of divine witnesses; (6) blessings and curses. Meredith Kline&rsquo;s groundbreaking work <em>Treaty of the Great King</em> (1963) showed that Deuteronomy follows this exact structure &mdash; and, crucially, that this structure dates it to the second millennium, not the late first millennium as critical scholars had assumed. The theological implication is profound: when Israel heard the covenant at Sinai, they recognized the form. God was presenting himself as the Great King who had acted in grace (the Exodus), now calling his people to covenant loyalty. The biblical covenant is not invented ex nihilo; God uses the legal forms of the ancient world to communicate his relationship with his people.",
  },
  {
    title: "Covenant vs. Contract",
    text: "The distinction between covenant and contract is not merely semantic &mdash; it is the difference between two entirely different understandings of relationship. A contract is transactional: two parties of roughly equal standing exchange goods, services, or promises, and the contract is conditional on mutual performance. Breach by one party releases the other. Contracts are about what I get. Covenants are categorically different. A covenant binds you to another person&rsquo;s good independent of whether they fulfill their obligations. In marriage, the paradigmatic human covenant, you do not say &ldquo;I will love you as long as you love me.&rdquo; You say &ldquo;I will love you&rdquo; &mdash; period. Covenants are relational at their core: they create a new identity for the parties (husband, wife, son, daughter, people of God). This is why covenant-breaking in the Bible is never merely a legal infraction; it is a personal betrayal, a breach of self. Hosea&rsquo;s language for Israel&rsquo;s idolatry is not contract violation but adultery &mdash; because the covenant is a marriage. The covenant framework positions all of God&rsquo;s dealings with humanity within a relational, not merely transactional, frame.",
  },
  {
    title: "The Structure of a Covenant",
    text: "Every major biblical covenant exhibits a recognizable structure, even when not all elements are equally explicit. First, the <strong>parties</strong>: covenants are always between two parties, but in biblical covenants the asymmetry is decisive &mdash; God is always the sovereign initiator. Second, the <strong>conditions</strong>: some covenants are unconditional (Noahic, Abrahamic in its foundational grant) while others are conditional (Mosaic, with explicit blessings and curses). Third, the <strong>oath or ratification</strong>: in Genesis 15, God himself passes between the halved animals &mdash; an ancient oath ceremony meaning &ldquo;may what happened to these animals happen to me if I break this covenant.&rdquo; God swears by himself because there is no higher authority (Heb 6:13-17). Fourth, the <strong>sign</strong>: each major covenant has a physical sign that anchors the promise in the material world &mdash; rainbow (Noahic), circumcision (Abrahamic), Sabbath (Mosaic), throne (Davidic), bread and cup (New Covenant). The sign does not create the covenant reality but seals and confirms it to the embodied covenant people.",
  },
  {
    title: "The Covenant as Relational Bond",
    text: "A covenant is not primarily a legal instrument but a relational bond &mdash; one that uses legal form to establish and secure a personal relationship. The Hebrew word <em>hesed</em> (חֶָסֶד), variously translated lovingkindness, steadfast love, loyal love, or covenant faithfulness, names the moral texture of this relationship. <em>Hesed</em> is not sentimental affection; it is the commitment to act for the covenant partner&rsquo;s good when the situation demands it, especially when it is costly. The book of Ruth is the supreme human illustration: Ruth&rsquo;s declaration &ldquo;Where you go I will go&rdquo; is <em>hesed</em> &mdash; covenant loyalty that exceeds all legal obligation. God&rsquo;s <em>hesed</em> is the theological anchor of the Psalms and Prophets: when Israel repeatedly breaks the covenant, God does not simply execute the covenant curses and walk away. He pursues, laments, disciplines, and ultimately restores, because his <em>hesed</em> is not contingent on Israel&rsquo;s performance. The famous refrain of Psalm 136 &mdash; &ldquo;his steadfast love endures forever&rdquo;, repeated 26 times &mdash; is a liturgical proclamation that God&rsquo;s covenant faithfulness outlasts every human failure.",
  },
  {
    title: "Covenant Theology as the Spine of the Bible",
    text: "O. Palmer Robertson, in his landmark work <em>The Christ of the Covenants</em>, defines a covenant as &ldquo;a bond in blood sovereignly administered.&rdquo; This spare definition captures the essential features: relational (a bond), mortal (in blood), and asymmetrical (sovereignly administered). Robertson&rsquo;s contribution was to show that the entire biblical canon &mdash; from the implicit covenant with Adam in Eden to the New Covenant inaugurated in Luke 22 &mdash; is one unfolding covenant story. The covenants are not unrelated episodes but a progressive, organic development: each builds on the previous, each adds new elements, each moves the story forward toward the same goal &mdash; a redeemed people living in God&rsquo;s presence in a renewed creation. Covenant theology thus gives Scripture a genuine unity without flattening its diversity. The Old Testament is not a collection of religious documents that happen to precede the New; it is the record of God building the covenant foundations that Christ brings to fulfillment.",
  },
  {
    title: "The Covenant of Redemption (Pactum Salutis)",
    text: "The <em>pactum salutis</em> (Latin: covenant of salvation, or covenant of redemption) is the most contested concept in Reformed covenant theology. It is not explicitly named in Scripture but is inferred from passages that speak of the Father &ldquo;giving&rdquo; people to the Son (John 17:6-9), the Son pledging to do the Father&rsquo;s will in redemption (Ps 40:6-8, cited in Heb 10:5-7), and the election of believers &ldquo;before the creation of the world&rdquo; (Eph 1:4). The concept attempts to answer: what is the ultimate ground of the covenant of grace? The answer: an eternal, intra-Trinitarian agreement in which the Son voluntarily undertook the role of covenant mediator, the Father committed to receive all whom the Son redeems, and the Spirit committed to apply the redemption. If true, salvation was secured before history began &mdash; every historical covenant is the outworking of an eternal Trinitarian purpose. Critics argue this reads too much into texts that do not use covenant language, or inappropriately introduces &ldquo;negotiation&rdquo; into the divine life. Defenders argue it preserves the gratuity of grace and gives the historical covenants their ultimate foundation in the eternal love of the triune God.",
  },
];

const otItems = [
  {
    title: "The Adamic / Creation Covenant (Gen 1-2)",
    text: "The Reformed tradition speaks of a creation covenant (sometimes called the covenant of works or covenant of life) implicit in Genesis 1-2. God created Adam and Eve in his image, placed them in the garden, and gave them a mandate: work the garden and keep it (Gen 2:15), be fruitful and multiply, fill the earth and have dominion over it (Gen 1:28). The command not to eat from the tree of the knowledge of good and evil (Gen 2:17) carried a life-or-death condition: obedience would secure life; disobedience would bring death. Whether Genesis 1-2 uses the word <em>berith</em> is disputed (Hosea 6:7 may allude to it: &ldquo;like Adam, they have broken the covenant&rdquo;), but Reformed theologians have seen the covenantal structure as clearly present: parties (God and Adam), stipulation (the command), and sanction (death for disobedience, life for obedience). Adam as federal head stood in covenant on behalf of all humanity &mdash; his failure plunged all into condemnation (Rom 5:12-21). The creation covenant establishes the pattern that Christ, as the second Adam, comes to fulfill.",
  },
  {
    title: "The Noahic Covenant (Gen 9)",
    text: "After the flood, God established a covenant with Noah, his descendants, and every living creature (Gen 9:8-17) &mdash; the most universally scoped covenant in Scripture. Its content is common grace: God will never again destroy all life by a global flood; the regular rhythms of creation (seedtime and harvest, cold and heat, summer and winter, day and night) will continue. The sign is the rainbow, posted in the clouds as God&rsquo;s own memorial &mdash; a remarkable anthropomorphism in which God sets a reminder for himself. The covenant is unconditional: no human performance is required for God to maintain it. Its theological significance is foundational: the world, despite its fallenness, is being sustained by God for his redemptive purposes. The Noahic covenant establishes the stability of creation as the platform on which the entire history of redemption can proceed. Creation care finds one of its theological roots here: the world is held in covenant by a God who has committed his own word to its preservation.",
  },
  {
    title: "The Abrahamic Covenant (Gen 12, 15, 17)",
    text: "The Abrahamic covenant is the pivot of the entire Old Testament. God called Abram out of Ur (Gen 12:1-3) and promised him three things: land (Canaan), seed (innumerable descendants, including the Messiah), and blessing (to all nations through Abraham). The covenant was ratified in Genesis 15 by one of the most dramatic ceremonies in Scripture: animals were halved, and in ancient treaty-making both parties would walk between them, invoking the curse &ldquo;may this happen to me if I break faith.&rdquo; When Abraham falls into a deep sleep and only God (as a smoking firepot and flaming torch) passes through the pieces, God is taking both obligations upon himself. If either party breaks the covenant, God bears the curse &mdash; a theological anticipation of the cross. Circumcision (Gen 17) was added as the sign of covenant membership, applied to every male in Abraham&rsquo;s household. The covenant is unconditional in its foundational grant (secured by God&rsquo;s self-oath) and conditional in its administrative requirements. Paul&rsquo;s argument in Galatians 3 is that this prior, unconditional promise cannot be annulled by the later Mosaic law: the blessing to all nations through Abraham&rsquo;s seed is fulfilled in Christ, available to all who share Abraham&rsquo;s faith (Gal 3:29).",
  },
  {
    title: "The Mosaic Covenant (Exodus, Deuteronomy)",
    text: "The Mosaic (Sinaitic) covenant, established at Sinai and elaborated in Deuteronomy, is the most debated covenant in biblical theology. It is a suzerainty treaty between God as Great King and Israel as vassal nation: God has redeemed Israel from Egypt (Ex 20:2 &mdash; redemption precedes requirement), and now stipulates the terms of covenant life. The law defines the life of the already-redeemed people; it is not a works-salvation system. Its structure follows the Hittite treaty pattern exactly. It is explicitly conditional: Deuteronomy 28 spells out blessings for obedience and curses for disobedience in breathtaking detail. The covenantal curses &mdash; exile, defeat, humiliation &mdash; are precisely what the prophets announce and what historically occurred (722 BC, northern kingdom; 586 BC, southern kingdom). The Mosaic covenant was a national-constitutional arrangement for Israel as a theocratic kingdom, not a timeless soteriological covenant. Jeremiah 31:31-32 explicitly says the New Covenant will be &ldquo;not like the covenant I made with their ancestors when I took them by the hand to lead them out of Egypt.&rdquo; Hebrews 8:13 declares it obsolete. The New Covenant does not abolish the moral content of the Mosaic law but fulfills and internalizes it in Christ.",
  },
  {
    title: "The Davidic Covenant (2 Sam 7; Ps 89, 132)",
    text: "In 2 Samuel 7, God promises David through the prophet Nathan that his dynasty will endure forever: &ldquo;Your house and your kingdom will endure forever before me; your throne will be established forever.&rdquo; The covenant narrows the redemptive focus from the nation of Israel to a specific royal line &mdash; and within that line, to one ultimate King. The father-son language is decisive: &ldquo;I will be his father, and he will be my son&rdquo; (2 Sam 7:14), applied in the New Testament to Jesus (Heb 1:5) and to all who are in him (2 Cor 6:18). The apparent failure of the Davidic covenant &mdash; the Babylonian exile terminates the dynasty &mdash; becomes the context for the great messianic hope. Isaiah, Jeremiah, Ezekiel, and Zechariah all anticipate a coming Son of David who will reign over a restored and expanded kingdom. Luke&rsquo;s genealogy and angelic announcement (&ldquo;The Lord God will give him the throne of his father David&rdquo; &mdash; Luke 1:32) are deliberate fulfillment markers. Jesus is the Davidic king whose throne is not in Jerusalem but in the new creation, where he reigns at the right hand of the Father (Acts 2:29-36).",
  },
];

const newCovenantItems = [
  {
    title: "Jeremiah 31:31-34 &mdash; The Promise",
    text: "Jeremiah 31:31-34 is the only place in the Old Testament where God explicitly announces a &ldquo;new covenant.&rdquo; Its context is devastating: the Babylonian exile is imminent, the Mosaic covenant has been irreparably broken by Israel&rsquo;s persistent idolatry, and the future looks hopeless. Into this darkness God speaks one of the most extraordinary promises in all of Scripture. The New Covenant will be categorically different from the Mosaic: &ldquo;not like the covenant I made with their ancestors when I took them by the hand to lead them out of Egypt, because they broke my covenant.&rdquo; Its distinguishing features are three: (1) Internalization &mdash; &ldquo;I will put my law in their minds and write it on their hearts.&rdquo; Covenant obedience will flow from transformed desire rather than external coercion. (2) Universal knowledge &mdash; &ldquo;they will all know me, from the least of them to the greatest.&rdquo; The mediating priesthood dissolves; direct access to God becomes the common possession of the entire covenant community. (3) Complete forgiveness &mdash; &ldquo;I will forgive their wickedness and will remember their sins no more.&rdquo; A finality the repeated Levitical sacrifices could never achieve (Heb 10:1-4).",
  },
  {
    title: "Ezekiel 36:26-27 &mdash; New Heart, New Spirit",
    text: "Ezekiel 36:26-27 is the companion passage to Jeremiah 31, and together they form the Old Testament&rsquo;s fullest picture of New Covenant transformation: &ldquo;I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. And I will put my Spirit in you and move you to follow my decrees and be careful to keep my laws.&rdquo; The language is surgical and radical: not behavioral improvement but ontological transformation. The stony, unresponsive heart &mdash; which could hear God&rsquo;s law and remain unmoved &mdash; is replaced by a living heart capable of loving response. More than that, God&rsquo;s own Spirit will indwell his people, not merely come upon them for specific tasks as in the old order. This is the pneumatological basis of New Covenant obedience: not willpower but the Spirit&rsquo;s empowerment. Paul&rsquo;s contrast in 2 Corinthians 3 between &ldquo;tablets of stone&rdquo; and &ldquo;tablets of human hearts&rdquo; is a direct Ezekiel 36 allusion, identifying the New Covenant community as the fulfillment of this ancient promise.",
  },
  {
    title: "Institution at the Last Supper (Luke 22:20)",
    text: "Jesus&rsquo; words at the Last Supper are the hinge between Old and New Covenant: &ldquo;This cup is the new covenant in my blood, which is poured out for you&rdquo; (Luke 22:20). The language is dense with covenantal significance. The cup of wine, poured out as Jesus&rsquo;s blood, is the covenant ratification ceremony &mdash; like the blood of animals in Exodus 24:8 when Moses sprinkled the people and said &ldquo;this is the blood of the covenant.&rdquo; Jesus is announcing that the New Covenant Jeremiah promised is being inaugurated &mdash; not in ink, not in animal blood, but in his own blood. He is simultaneously the covenant mediator and the covenant sacrifice. The word &ldquo;new&rdquo; (<em>kainē</em>) in Luke 22:20 and 1 Corinthians 11:25 is the same word used in the Septuagint translation of Jeremiah 31:31 &mdash; the connection is explicit and deliberate. Every celebration of the Lord&rsquo;s Supper is a participation in the New Covenant and a proclamation of its ratification: &ldquo;Whenever you drink it, do this in remembrance of me&rdquo; (1 Cor 11:25).",
  },
  {
    title: "Hebrews 8-10 &mdash; Christ the Mediator of a Better Covenant",
    text: "The letter to the Hebrews is the New Testament&rsquo;s sustained theological exposition of the New Covenant, and its argument builds to a decisive conclusion: Jesus is &ldquo;the mediator of a better covenant, which was established on better promises&rdquo; (Heb 8:6). The Mosaic covenant, with its Levitical priesthood and repeated animal sacrifices, was never designed to be the final word &mdash; its very structure (daily, weekly, annual sacrifices that could never finally remove sin) pointed beyond itself to a once-for-all sacrifice. Hebrews 10:1-4 is unambiguous: &ldquo;it is impossible for the blood of bulls and goats to take away sins.&rdquo; The entire Levitical system was a shadow, not the reality. Christ, as both High Priest and sacrifice, enters the true holy of holies &mdash; not the earthly copy but heaven itself &mdash; with his own blood and achieves eternal redemption (Heb 9:11-12). He is the mediator whose death secures the promised inheritance: &ldquo;For this reason Christ is the mediator of a new covenant, that those who are called may receive the promised eternal inheritance&rdquo; (Heb 9:15). The old covenant is declared obsolete (Heb 8:13).",
  },
  {
    title: "What Is New About the New Covenant",
    text: "The New Covenant is genuinely new &mdash; not merely an upgrade of the Mosaic but a qualitatively different arrangement. Four features mark the newness. (1) <strong>Internalized law</strong>: under the old covenant, the law was external and could be heard without transforming. Under the New Covenant, the Spirit writes the law on the heart, so that covenant obedience flows from regenerated desire. (2) <strong>Universal knowledge of God</strong>: &ldquo;they will all know me, from the least to the greatest&rdquo; dissolves the mediating structures of the Levitical priesthood. Every believer has direct access to God; every believer is a priest (1 Pet 2:9). (3) <strong>Complete and final forgiveness</strong>: &ldquo;I will remember their sins no more&rdquo; &mdash; a forgiveness the Levitical sacrifices could never achieve (Heb 10:3-4). (4) <strong>The indwelling Spirit</strong> (Ezek 36:27): not the Spirit coming upon selected leaders for specific tasks, but the permanent, universal indwelling of all covenant members. The New Covenant community is, by definition, a community of the regenerate &mdash; this is why Jeremiah can promise that &ldquo;they will all know me.&rdquo;",
  },
  {
    title: "How the New Covenant Relates to the Old",
    text: "The relationship between the New Covenant and the Old is the most contested question in Christian hermeneutics. Three main positions have emerged. (1) <strong>Continuity with transformation</strong> (Covenant Theology): the New Covenant is the final, fullest administration of the one covenant of grace. The substance is the same (grace, faith, Christ); the administration is new. The Old Testament is not abolished but fulfilled. (2) <strong>Fulfillment and supersession</strong> (Progressive Covenantalism, New Covenant Theology): the New Covenant genuinely fulfills and thereby transcends the old covenants. The Mosaic covenant as covenant &mdash; including the Ten Commandments as a covenant document &mdash; is ended. Christians are under the &ldquo;law of Christ&rdquo; (1 Cor 9:21; Gal 6:2), not the Mosaic law. (3) <strong>Discontinuity with parallel programs</strong> (Classic Dispensationalism): the New Covenant is specifically with Israel and awaits literal future fulfillment; the church participates in its spiritual blessings but is not the primary covenant community. Hebrews 8 addresses Jeremiah 31 &mdash; the debate is whether &ldquo;Israel&rdquo; there is ethnic Israel, the church as the new Israel, or both.",
  },
];

const debateItems = [
  {
    title: "Covenant Theology &mdash; The Reformed Framework",
    text: "Covenant Theology, articulated most fully in the Westminster Confession of Faith (1647) and the works of John Owen, Francis Turretin, Herman Witsius, and later Louis Berkhof, organizes Scripture around three overarching covenants: (1) The Covenant of Works &mdash; made with Adam before the Fall, promising life on the condition of perfect obedience; (2) The Covenant of Redemption (Pactum Salutis) &mdash; the eternal intra-Trinitarian agreement in which the Son undertakes to redeem the elect; (3) The Covenant of Grace &mdash; the single covenant through which God saves sinners from the Fall onward, administered differently (Abrahamic, Mosaic, Davidic, New) but substantially one covenant with the same mediator (Christ), the same condition (faith), and the same promise (salvation). The unity of the covenant of grace across both Testaments is the theological basis for infant baptism: just as circumcision was applied to infants as members of the covenant community in the Abrahamic administration, so baptism is applied to infants of believers in the New Covenant administration. Key figures: Calvin, Owen, Turretin, Witsius, Hodge, Berkhof, John Murray.",
  },
  {
    title: "Dispensationalism &mdash; Distinct Programs for Israel and the Church",
    text: "Dispensationalism, systematized by John Nelson Darby in the nineteenth century and popularized through the Scofield Reference Bible (1909) and figures like Charles Ryrie and John Walvoord, organizes history into distinct epochs in which God relates to humanity according to different governing principles. The most theologically significant feature is the sharp distinction between Israel and the Church as two distinct peoples of God with two distinct programs. Old Testament covenant promises to Israel &mdash; land, national restoration, Davidic kingdom &mdash; are not spiritualized or transferred to the Church; they await literal fulfillment in a future millennial kingdom. This entails a pre-tribulational rapture of the church, followed by a seven-year tribulation during which God resumes his program with national Israel, followed by the literal millennial reign of Christ in Jerusalem. The Church, in this system, is a parenthesis in God&rsquo;s prophetic program for Israel. Progressive Dispensationalism (Bock, Saucy) has significantly revised these claims, allowing for partial present fulfillment of Davidic promises in Christ&rsquo;s resurrection and ascension. Key figures: Darby, Scofield, Chafer, Ryrie, Walvoord; Progressive: Bock, Saucy.",
  },
  {
    title: "Progressive Covenantalism &mdash; A Mediating Position",
    text: "Progressive Covenantalism (PC), developed by Peter Gentry and Stephen Wellum in <em>Kingdom through Covenant</em> (2012), charts a path between Covenant Theology and Dispensationalism by doing careful exegetical work on each individual covenant. Its key claim is that the biblical covenants are progressive &mdash; each builds upon, develops, and partially fulfills the previous, moving toward the climactic New Covenant in Christ. Against Classic Dispensationalism: there is one people of God, and Israel&rsquo;s covenant promises are fulfilled in Christ and the multinational church. Against Covenant Theology: the covenants are genuinely distinct and develop progressively; the systematic constructs &ldquo;Covenant of Works&rdquo; and &ldquo;Covenant of Grace&rdquo; are not directly exegeted from individual covenant texts; and the continuity between Old and New Covenant community does not support infant baptism, since the New Covenant community is constituted of regenerate believers only. PC is gaining significant traction in evangelical biblical scholarship and among younger Reformed Baptists. Key figures: Gentry, Wellum, Parker, Naselli.",
  },
  {
    title: "How Each View Reads Galatians 3 and Romans 9-11",
    text: "Galatians 3 and Romans 9-11 are the exegetical battlegrounds for the Israel-Church question. In Galatians 3:7-9, Paul identifies &ldquo;those who have faith&rdquo; as children of Abraham, and declares that the blessing of Abraham has come to the Gentiles in Christ. Covenant Theology reads this as the church being the continuation and expansion of the covenant community; all who believe are Abraham&rsquo;s children, so the covenant community is one across both Testaments. Dispensationalism argues that Paul is speaking of spiritual blessing only &mdash; the national, ethnic, land dimensions of the Abrahamic covenant still await literal fulfillment with ethnic Israel. Progressive Covenantalism argues that Christ is the ultimate seed of Abraham (Gal 3:16), and that all who are in Christ share in the Abrahamic inheritance &mdash; which is not the strip of land in Canaan but the whole renewed world (Rom 4:13: &ldquo;heir of the world&rdquo;). Romans 9-11 adds complexity: Paul argues that God has not rejected his people (Rom 11:1), that there is a future for ethnic Israel (&ldquo;all Israel will be saved&rdquo;, Rom 11:26), and that Gentile inclusion does not annul Jewish privilege. The interpretation of &ldquo;all Israel&rdquo; (ethnic Israel? the elect from Jews and Gentiles? the full number of Jewish elect?) is disputed across all three systems.",
  },
  {
    title: "Practical Consequences &mdash; Eschatology, Israel, and the Land",
    text: "The practical theological consequences of the covenant-dispensationalism debate are enormous and felt in every pew. Eschatology: Covenant Theology tends toward amillennialism or postmillennialism (Revelation 20 as symbolic of the present gospel age, or of a future golden age of gospel success). Dispensationalism is committed to premillennialism &mdash; and specifically to a pre-tribulational rapture, a literal seven-year tribulation, a literal millennium with Christ reigning in Jerusalem. Progressive Covenantalism is typically premillennial but not dispensational. Israel and the Land: Covenant Theology spiritualizes the land promises (they are fulfilled in Christ and the new creation), reads the Church as the new Israel, and tends toward critical neutrality on the modern State of Israel. Dispensationalism sees the modern State of Israel as prophetically significant, the land promise as literally unfulfilled, and Jewish evangelism as having eschatological urgency. Progressive Covenantalism distinguishes the Old Testament land typology from its New Testament antitype (the renewed world) and is cautious about assigning prophetic significance to current events. These are not abstract disagreements; they shape how millions of Christians pray for the Middle East, understand world history, and await the return of Christ.",
  },
];

const graceItems = [
  {
    title: "The Covenant of Works and the Covenant of Grace",
    text: "The most important systematic distinction in Reformed covenant theology is the contrast between the Covenant of Works (pre-Fall) and the Covenant of Grace (post-Fall). The Covenant of Works, made with Adam as federal head of humanity, offered life on the condition of perfect obedience. The sanction was death: &ldquo;in the day you eat of it you shall surely die&rdquo; (Gen 2:17). Adam failed; all humanity fell. The Covenant of Grace, inaugurated in Genesis 3:15 with the proto-evangelion (&ldquo;I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel&rdquo;), is God&rsquo;s gracious response to the Fall. Its terms are radically different: not perfect obedience as the condition, but faith in the promised Redeemer. The Covenant of Grace is not a second chance at the Covenant of Works; it operates on entirely different grounds &mdash; grace rather than merit, faith rather than perfect performance, Christ&rsquo;s obedience rather than Adam&rsquo;s. Westminster Confession 7.3: &ldquo;Man, by his fall, having made himself incapable of life by that covenant, the Lord was pleased to make a second, commonly called the covenant of grace; wherein he freely offereth unto sinners life and salvation by Jesus Christ.&rdquo;",
  },
  {
    title: "One Covenant of Grace, Many Administrations",
    text: "A key Reformed claim is that the various Old Testament covenants (Abrahamic, Mosaic, Davidic) are all administrations of the single Covenant of Grace, not separate covenants. The substance is the same across all periods: Christ as mediator, faith as the condition, salvation as the promise. What changes is the form of administration &mdash; the degree of clarity with which Christ is revealed, the specific covenant signs, the scope of the covenant community. Abraham believed God and it was credited to him as righteousness (Gen 15:6; Gal 3:6) &mdash; justification by faith is not a New Testament innovation but the consistent pattern of the Covenant of Grace from the beginning. This unity has enormous interpretive consequences: Old Testament saints were saved by the same faith in the same Savior, not by keeping the law. The difference is not in the substance of salvation but in the degree of revelation: they trusted in a Redeemer yet to come; we trust in a Redeemer who has come.",
  },
  {
    title: "Why Christians Are Not Under the Mosaic Law",
    text: "The covenant framework explains one of the most practically important questions in Christian ethics: why are Christians not obligated to keep the Mosaic law? The answer in Covenant Theology is not arbitrary. The Mosaic covenant was a specific historical administration of the covenant of grace for the theocratic nation of Israel. It had a built-in obsolescence: Jeremiah 31 promised it would be superseded, and Hebrews 8 declares it so. The Mosaic law as a covenant document &mdash; the entire package of legislation &mdash; is not binding on New Covenant Christians, who are not members of the Israelite theocracy. However, Covenant Theology classically distinguishes three types of Mosaic law: moral (the Ten Commandments as an expression of God&rsquo;s moral character, applicable across all ages), ceremonial (sacrifices and rituals, fulfilled in Christ and therefore ended), and civil (the political legislation for the theocratic state of Israel, which ended with that state). New Covenant Theology and Progressive Covenantalism reject this three-fold division as exegetically arbitrary; for them, the Mosaic covenant is one unified covenant, now wholly superseded, and Christian ethics is governed by the &ldquo;law of Christ&rdquo; (1 Cor 9:21).",
  },
  {
    title: "The Signs of the Covenant and What They Mean",
    text: "The covenant of grace has always had signs that seal and confirm its promises to the covenant community. In the Abrahamic administration, circumcision was the covenant sign: applied to every male in Abraham&rsquo;s household, including infants and servants, marking them as belonging to the covenant community. Circumcision did not confer regeneration; many circumcised Israelites were not truly God&rsquo;s people (Rom 9:6-8). It was the outward sign of covenant membership, which needed to be matched by inward circumcision of the heart (Deut 10:16; Rom 2:28-29). In the Old Covenant, Passover was the covenant meal that re-enacted redemption from Egypt. In the New Covenant, baptism succeeds circumcision as the sign of covenant membership (Col 2:11-12 makes this typological connection explicit), and the Lord&rsquo;s Supper succeeds Passover as the covenant meal. The debate about infant baptism turns on whether the New Covenant community is structured like the Abrahamic (households, including infants) or whether the New Covenant&rsquo;s promise that &ldquo;they will all know me&rdquo; (Jer 31:34) means the community is constituted only of the regenerate, making infant inclusion inappropriate.",
  },
  {
    title: "Genesis 3:15 &mdash; The Protoevangelion",
    text: "Genesis 3:15 is the seed of the entire redemptive story: &ldquo;I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.&rdquo; Covenant Theology has traditionally called this the <em>protoevangelion</em> (first gospel) &mdash; the inaugural promise of the Covenant of Grace given in the very moment of the Fall. The &ldquo;offspring&rdquo; (Hebrew: <em>zera</em>, seed) of the woman will be in ongoing conflict with the offspring of the serpent, but ultimately one descendant of the woman will deal the serpent a fatal blow, though he himself will be wounded in the process. The ambiguity of &ldquo;offspring&rdquo; &mdash; singular or collective? &mdash; is theologically rich. Paul sees it as singular in Galatians 3:16 (applying similar logic to Abraham&rsquo;s seed: &ldquo;he does not say &lsquo;seeds,&rsquo; meaning many people, but &lsquo;your seed,&rsquo; meaning one person, who is Christ&rdquo;). Revelation 12 draws on Genesis 3 imagery: the great dragon pursuing the woman and her offspring. Genesis 3:15 establishes the conflict that drives the entire biblical narrative, and promises its resolution in a coming champion &mdash; who turns out to be both the seed of the woman and the Son of God.",
  },
  {
    title: "From Abraham to Christ &mdash; The Progressive Unfolding of Grace",
    text: "The Covenant of Grace unfolds progressively through history, each administration adding clarity and specificity to the promise. The promise to Eve (Gen 3:15) is vague: a seed of the woman will defeat the serpent. The Abrahamic covenant (Gen 12, 15, 17) narrows it geographically (a specific family in a specific land), numerically (a great nation), and universally (blessing to all nations). The Mosaic covenant provides the legal framework within which the holy people of God are to live while awaiting the fulfillment. The Davidic covenant narrows the promise further: the coming deliverer will be a king from David&rsquo;s line, reigning on an eternal throne. The prophets elaborate and intensify: Isaiah&rsquo;s Servant Songs (Isaiah 42, 49, 50, 52-53) portray a figure who will both restore Israel and be a light to the nations, who will suffer vicariously for the sins of many. Then, in the fullness of time, Jesus arrives &mdash; the seed of the woman, the son of Abraham, the son of David, the Servant of the Lord &mdash; and in his life, death, resurrection, and ascension, every thread of the covenant story converges and finds its yes (2 Cor 1:20: &ldquo;For no matter how many promises God has made, they are &lsquo;Yes&rsquo; in Christ&rdquo;).",
  },
];

const videoItems = [
  { videoId: "yDQFDkXCXoA", title: "Tim Keller on Covenant Theology" },
  { videoId: "iqbKWOPD0CA", title: "RC Sproul on Covenant Theology" },
  { videoId: "PAalZ7SXEQY", title: "Michael Horton on Covenant Theology" },
];

function getTabColor(id: string): string {
  switch (id) {
    case "what": return GREEN;
    case "ot": return GOLD;
    case "new": return TEAL;
    case "debate": return PURPLE;
    case "grace": return "#E11D48";
    default: return MUTED;
  }
}

export default function ChristianCovenantTheologyGuidePage() {
  const [activeTab, setActiveTab] = useState("what");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const activeColor = getTabColor(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Theology</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Covenant Theology Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 640 }}>
          The covenants of Scripture &mdash; from the garden of Eden to the new creation &mdash; and how they structure the entire biblical story of redemption.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t.id ? getTabColor(t.id) : BORDER}`,
                background: activeTab === t.id ? getTabColor(t.id) + "28" : "transparent",
                color: activeTab === t.id ? getTabColor(t.id) : MUTED,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: activeTab === t.id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB: What Is a Covenant */}
        {activeTab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GREEN, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The word &ldquo;covenant&rdquo; appears over 300 times in Scripture. Understanding what it means is the key to understanding the entire Bible &mdash; from creation to new creation.
              </p>
            </div>
            {whatItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Old Testament Covenants */}
        {activeTab === "ot" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GOLD + "18", border: `1px solid ${GOLD}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GOLD, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Five major covenants form the progressive backbone of Old Testament redemptive history &mdash; each building toward the New Covenant in Christ.
              </p>
            </div>
            {otItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: The New Covenant */}
        {activeTab === "new" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: TEAL + "18", border: `1px solid ${TEAL}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: TEAL, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;The days are coming,&rdquo; declares the LORD, &ldquo;when I will make a new covenant with the people of Israel and with the people of Judah.&rdquo; &mdash; Jeremiah 31:31
              </p>
            </div>
            {newCovenantItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Covenant vs. Dispensationalism */}
        {activeTab === "debate" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The covenant-dispensationalism debate shapes how you read the entire Bible, understand Israel and the church, and anticipate the return of Christ.
              </p>
            </div>
            {debateItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: The Covenant of Grace */}
        {activeTab === "grace" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#E11D4818", border: "1px solid #E11D4840", borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#E11D48", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                After the Fall, God initiates one covenant of grace &mdash; differently administered across epochs, but always grounded in the same promise: the seed of the woman who will crush the serpent.
              </p>
            </div>
            {graceItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoItems.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: PURPLE, margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
