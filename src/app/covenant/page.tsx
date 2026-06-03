"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "what" | "covenants" | "views" | "application" | "videos";

const WHAT_ITEMS = [
  {
    id: "berith",
    title: "The Hebrew Berith",
    body: "The Hebrew word berith (בְּרִית) is the backbone of covenant theology. It denotes a solemn, binding agreement — not a casual promise but a sworn commitment sealed by oath, sacrifice, or ceremony. In the Ancient Near East, suzerain-vassal treaties followed a recognizable pattern: the great king (suzerain) identified himself and his acts of benevolence, stated his requirements of the vassal, listed blessings for compliance and curses for violation, and invoked divine witnesses. Biblical scholars including Klaus Baltzer and Meredith Kline have shown that Exodus and Deuteronomy map directly onto this treaty form — God as the Great King, Israel as the vassal nation. A covenant has identifiable elements: (1) the parties involved, (2) the conditions stipulated, (3) the oaths sworn (often with the formula 'may it be done to me as to this animal if I break faith'), and (4) the signs or ratifying acts. Understanding berith as treaty rather than contract or mere promise opens up the legal and relational architecture of the entire Old Testament.",
  },
  {
    id: "vs-contract",
    title: "Covenant vs. Contract",
    body: "The distinction between covenant and contract is not merely semantic — it is the difference between two entirely different understandings of human relationship. A contract is transactional: two parties of roughly equal standing exchange goods, services, or promises, and the contract is conditional on mutual performance. Breach by one party releases the other. Contracts are about what I get. Covenants are categorically different. Tim Keller, drawing on the sociologist Robert Bellah, argues that a covenant is a relationship where you bind yourself to another person's good independent of whether they fulfill their obligations. In marriage, the paradigmatic human covenant, you do not say 'I will love you as long as you love me.' You say 'I will love you.' Period. Covenants are relational at their core: they create a new identity for the parties involved (husband, wife, son, daughter, people of God). This is why covenant breaking in the Bible is never merely a legal infraction — it is a personal betrayal, a breach of self, which is why Hosea's language for Israel's idolatry is adultery, not contract violation. The covenant framework thus positions all of God's dealings with humanity within a relational, not merely transactional, frame.",
  },
  {
    id: "god-initiates",
    title: "God Initiates Covenants",
    body: "One of the most theologically loaded features of biblical covenants is that God always initiates them. No human being in Scripture proposes a covenant with God. It is always God who approaches, who establishes the terms, who binds himself by oath. This asymmetry is not incidental — it is the structural expression of grace. Humans contribute nothing to the initiation of the covenant relationship. This is why the Reformed tradition insists that grace is foundational to every biblical covenant, even the Mosaic. Israel did not earn the covenant at Sinai; God redeemed them from Egypt first (Ex 20:2 — 'I am the LORD your God, who brought you out of Egypt, out of the land of slavery' — precedes the Ten Commandments). The covenant is not God saying 'Here are the terms by which you can earn my favor.' It is God saying 'Because I have already acted to save you, here is how you live as my covenant people.' The implication for theology is enormous: human obedience is always a response to divine initiative, never the ground of divine favor. This pattern runs from Noah to Abraham to Moses to David to the New Covenant in Christ.",
  },
  {
    id: "signs",
    title: "Covenant Signs",
    body: "Each major biblical covenant is accompanied by a physical sign that anchors the covenant promise in the material world. Signs are not decorative — they are participatory. They enact, seal, and regularly re-present the covenant promise to the parties. The rainbow (Gen 9:12-17) is God's own sign, posted in the sky as a self-reminder of his promise never again to destroy all life by flood — a remarkable anthropomorphism that points to the seriousness of divine covenant-keeping. Circumcision (Gen 17:11) is the sign of the Abrahamic covenant, applied to the flesh of every male in Abraham's household — an embodied, painful, indelible mark of covenant identity. The Sabbath (Ex 31:13-17) is the sign of the Mosaic covenant, structuring the entire rhythm of Israelite time around covenant fidelity — every seventh day is a lived declaration that Israel belongs to Yahweh. Bread and cup (Luke 22:19-20) are the signs of the New Covenant — 'This cup is the new covenant in my blood, shed for you.' The physical anchoring of covenant promises through signs is not superstition; it is the gracious condescension of a God who knows his people are embodied creatures who need tangible assurance. The sign does not create the covenant reality but seals and confirms it.",
  },
  {
    id: "hesed",
    title: "Covenant Faithfulness (Hesed)",
    body: "The Hebrew word hesed (חֶסֶד) — variously translated lovingkindness, steadfast love, loyal love, covenant faithfulness — is the moral texture of covenant relationship. It is what holds covenant together from the inside. Hesed is not sentimental affection; it is the commitment to act for the covenant partner's good when the situation calls for it, especially when it is costly. The book of Ruth is the supreme human illustration: Ruth's declaration 'Where you go I will go, and where you stay I will stay' (Ruth 1:16) is hesed — covenant loyalty that exceeds all legal obligation. Naomi releases Ruth from any obligation; Ruth persists anyway. God's hesed is the theological anchor of the Psalms and Prophets. When Israel breaks the covenant — as she repeatedly does — God does not simply execute the covenant curses and walk away. He pursues, laments, disciplines, and ultimately restores, because his hesed is not contingent on Israel's performance. The famous 'lovingkindness' of Psalm 136 — 'his steadfast love endures forever,' repeated 26 times — is a liturgical proclamation that God's hesed outlasts every human failure. The New Covenant is the ultimate expression of divine hesed: God in Christ absorbs the covenant curses that Israel deserved so that the covenant blessings can be given to all who trust him.",
  },
  {
    id: "spine",
    title: "Covenant as the Spine of the Bible",
    body: "O. Palmer Robertson, in his landmark work 'The Christ of the Covenants,' defines a covenant as 'a bond in blood sovereignly administered.' This spare definition captures the essential features: it is a bond (relational), it is in blood (ratified by oath and sacrifice, at mortal risk), and it is sovereignly administered (God sets the terms). Robertson's contribution was to show that the entire biblical canon — from the implicit covenant with Adam in Eden to the explicit New Covenant in Jeremiah 31 and its inauguration in Luke 22 — is one unfolding covenant story. The covenants are not unrelated episodes but a progressive, organic development: each covenant builds on and presupposes the previous ones, each adds new elements, each moves the story forward toward the same goal — a redeemed people living in God's presence in a renewed creation. This covenantal reading of the whole Bible gives Scripture a genuine unity without flattening its diversity. The Old Testament is not a collection of religious documents that happen to precede the New; it is the record of God building the covenant foundations that Christ brings to fulfillment. Reading the Bible covenantally means reading it as one story with one hero and one purpose.",
  },
];

const COVENANT_LIST = [
  {
    id: "noahic",
    name: "Noahic Covenant",
    ref: "Genesis 9",
    parties: "God and all creation (Noah, his descendants, and every living creature)",
    promise: "God will never again destroy all life by flood; the regular rhythms of creation will continue",
    sign: "The rainbow — posted in the clouds as God's own memorial sign",
    condition: "Unconditional — no human performance is required for God to maintain this covenant",
    scripture: "Genesis 6:18; 9:8-17",
    significance: "The Noahic covenant establishes the stability of creation as the platform on which redemptive history can proceed. Its scope is universal — not just Israel, not just humanity, but 'every living creature.' This cosmic breadth anticipates the New Covenant's universal reach. The unconditional character sets a pattern: God binds himself without requiring prior human qualification. Theologically, it grounds the Christian conviction that the world, despite its fallenness, is being sustained by God for his redemptive purposes — not careening toward annihilation. Creation care and environmental concern find their theological root here: the world is held in covenant.",
  },
  {
    id: "abrahamic",
    name: "Abrahamic Covenant",
    ref: "Genesis 12, 15, 17",
    parties: "God and Abraham, with his descendants",
    promise: "Land (Canaan), seed (innumerable descendants, including the Messiah), and blessing (to all nations through Abraham)",
    sign: "Circumcision (Gen 17) — applied to every male in Abraham's household as the mark of covenant membership",
    condition: "Unconditional in its foundational grant (Gen 15) — God alone walks through the covenant pieces, bearing both parties' obligations; conditional elements appear in Gen 17 regarding circumcision",
    scripture: "Genesis 12:1-3; 15:1-21; 17:1-27; Romans 4; Galatians 3",
    significance: "Genesis 15 is the pivot of the entire Old Testament. In ancient covenant-making, both parties walked between the halved animals, saying in effect: 'May what happened to these animals happen to me if I break this covenant.' When Abraham falls into a deep sleep and only God (as a smoking firepot and flaming torch) passes through the pieces, God is taking both obligations upon himself. If either party breaks the covenant, God bears the curse. This is the theological anticipation of the cross: on Calvary, God in Christ absorbs the covenant curse that humanity incurred by its infidelity. Paul's argument in Galatians 3 is that the Abrahamic covenant, being prior to and unconditional relative to the Mosaic law, cannot be annulled by it — the promise of blessing to all nations through Abraham's seed is fulfilled in Christ and available to all who share Abraham's faith.",
  },
  {
    id: "mosaic",
    name: "Mosaic / Sinaitic Covenant",
    ref: "Exodus 19-24; Deuteronomy",
    parties: "God (as Great King) and Israel (as vassal nation)",
    promise: "Israel will be God's 'treasured possession,' 'a kingdom of priests and a holy nation'",
    sign: "The Sabbath (Ex 31:13-17) — and the entire Torah as the covenant stipulation",
    condition: "Conditional — Deuteronomy 28 spells out blessings for obedience and curses for disobedience in explicit detail",
    scripture: "Exodus 19:1-24:11; Deuteronomy 28-30; Jeremiah 31:32; Hebrews 8:7-13",
    significance: "The Mosaic covenant is the most debated in covenant theology. It is explicitly conditional in a way the Abrahamic is not, and it is explicitly terminated by Jeremiah 31:31-34 and Hebrews 8. Yet it must not be read as a works-salvation system: the Decalogue begins with 'I am the LORD your God who brought you out of Egypt' — redemption precedes law. The law defines the life of the already-redeemed people, not the way to become redeemed. The Mosaic covenant functions as a kind of national-constitutional arrangement for Israel as a theocratic kingdom — it is not a covenant of works in the soteriological sense. Its conditional character means that exile is the covenant curse for Israel's repeated idolatry, which is precisely what the prophets announce and what actually occurs in 722 BC (northern kingdom) and 586 BC (southern kingdom). The New Covenant does not abolish the moral content of the Mosaic law but fulfills and internalizes it.",
  },
  {
    id: "davidic",
    name: "Davidic Covenant",
    ref: "2 Samuel 7; Psalm 89, 132",
    parties: "God and David's royal line",
    promise: "An eternal throne, an everlasting kingdom, a father-son relationship with the Davidic king",
    sign: "No distinct physical sign, but the Jerusalem temple and the Davidic dynasty serve as its visible expression",
    condition: "Unconditional in its ultimate promise (God will not remove his covenant love as he did from Saul), though individual kings face discipline for disobedience",
    scripture: "2 Samuel 7:8-16; Psalm 89:3-4, 28-37; Luke 1:32-33; Romans 1:3",
    significance: "The Davidic covenant narrows the redemptive focus from the nation of Israel to a specific royal line — and within that line, to one ultimate King. The language of 2 Samuel 7:14 — 'I will be his father, and he will be my son' — is applied in the New Testament to Jesus (Heb 1:5) and to all who are in him (2 Cor 6:18). The apparent failure of the Davidic covenant — the Babylonian exile terminates the Davidic dynasty — becomes the context for the great messianic hope of the prophets. Isaiah, Jeremiah, Ezekiel, and Zechariah all anticipate a coming Son of David who will reign over a restored and expanded kingdom. Luke's genealogy and angelic announcement ('He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David' — Luke 1:32) are deliberate fulfillment markers. Jesus is the Davidic king whose throne is eternal — not in Jerusalem but in the new creation.",
  },
  {
    id: "new",
    name: "New Covenant",
    ref: "Jeremiah 31:31-34; Luke 22:20; Hebrews 8-9",
    parties: "God and all peoples (inaugurated with the church, to be consummated with all creation)",
    promise: "Law written on hearts, full knowledge of God, complete and final forgiveness of sins",
    sign: "Bread and cup (the Lord's Supper) — 'This cup is the new covenant in my blood'",
    condition: "Unconditional in its ultimate fulfillment — secured by Christ's perfect obedience and atoning death",
    scripture: "Jeremiah 31:31-34; Ezekiel 36:25-27; Luke 22:19-20; Hebrews 8:6-13; 2 Corinthians 3",
    significance: "The New Covenant is the eschatological covenant — the one Jeremiah anticipated as categorically different from the Mosaic ('not like the covenant I made with their ancestors'). Its distinguishing features are radical: (1) Internalization — the law is not written on stone tablets but on hearts, meaning covenant obedience flows from transformed desire rather than external coercion. (2) Universality — 'from the least of them to the greatest, they will all know me,' dissolving the mediating priesthood and making direct access to God the common possession of the covenant community. (3) Complete forgiveness — 'I will forgive their wickedness and will remember their sins no more,' a finality that the repeated Levitical sacrifices could not achieve (Heb 10:1-4). The New Covenant is inaugurated at the Last Supper and ratified at Calvary, but it awaits full consummation at the return of Christ and the renewal of all things. The church lives in the overlap — the covenant is real and its blessings are genuinely present, but the fullness is still coming.",
  },
  {
    id: "redemption",
    name: "Covenant of Redemption (Pactum Salutis)",
    ref: "John 17; Ephesians 1:4; Revelation 13:8",
    parties: "The three persons of the Trinity — Father, Son, and Holy Spirit — in an eternal, pre-creation agreement",
    promise: "The Father will give the Son a people; the Son will redeem them through obedience and sacrifice; the Spirit will apply the redemption",
    sign: "No external sign — the covenant is eternal and intra-Trinitarian",
    condition: "Within the Trinitarian life, it is the free overflow of eternal love and purpose",
    scripture: "John 17:4-6; Psalm 2:7-8; Isaiah 42:1, 49:5-8; Ephesians 1:3-14; Revelation 13:8",
    significance: "The Pactum Salutis (Latin: 'covenant of salvation') is the most contested concept in Reformed covenant theology. It is not explicitly named in Scripture, but is inferred from passages that speak of the Father 'giving' people to the Son (John 17:6-9), the Son 'pledging' to do the Father's will in redemption (Ps 40:6-8, cited in Heb 10:5-7), and the election of believers 'before the creation of the world' (Eph 1:4). The concept attempts to answer: what is the ground of the covenant of grace? The answer: an eternal, Trinitarian decision in which the Son voluntarily undertook the role of covenant mediator, the Father committed to receive all whom the Son redeems, and the Spirit committed to apply the redemption. Critics (including some within the Reformed tradition, and notably New Covenant Theology) argue this reads too much into texts that do not use covenant language, or that it inappropriately introduces 'negotiation' into the impassible divine life. Defenders argue it preserves the gratuity of grace (salvation was secured before history began) and gives the historical covenants their ultimate foundation in the eternal purposes of God.",
  },
];

const VIEW_CARDS = [
  {
    id: "covenant-theology",
    title: "Covenant Theology",
    subtitle: "Reformed / Westminster",
    color: GREEN,
    description: "Covenant Theology is the classical Reformed system, articulated most fully in the Westminster Confession of Faith (1647) and the works of John Owen, Francis Turretin, Herman Witsius, and later Louis Berkhof. It organizes Scripture around three overarching covenants: (1) The Covenant of Works (or Covenant of Life) — made with Adam in the Garden before the Fall, promising life on the condition of perfect obedience. Adam as federal head of humanity failed, plunging all into condemnation. (2) The Covenant of Redemption (Pactum Salutis) — the eternal, intra-Trinitarian agreement in which the Son undertakes to redeem the elect. (3) The Covenant of Grace — the single covenant through which God saves sinners from the Fall onward, administered through different dispensations (Abrahamic, Mosaic, Davidic, New) but substantially one covenant with the same mediator (Christ), the same condition (faith), and the same promise (salvation). The unity of the covenant of grace across both Testaments is the theological basis for infant baptism: just as circumcision was applied to infants as members of the covenant community in the Abrahamic administration, so baptism is applied to infants of believers in the New Covenant administration. The two Testaments represent different administrations of one covenant, not two different covenants. Key figures: Calvin, Owen, Turretin, Witsius, Hodge, Berkhof, Murray.",
    figures: "Calvin, Owen, Turretin, Witsius, Hodge, Berkhof, John Murray",
  },
  {
    id: "dispensationalism",
    title: "Dispensationalism",
    subtitle: "Classic / Revised",
    color: PURPLE,
    description: "Dispensationalism, systematized by John Nelson Darby in the 19th century and popularized through the Scofield Reference Bible (1909) and figures like Charles Ryrie and John Walvoord, organizes history into distinct dispensations — epochs in which God relates to humanity according to different governing principles. Classic Dispensationalism identified seven dispensations (Innocence, Conscience, Human Government, Promise, Law, Grace, Kingdom). The most theologically significant feature is the sharp distinction between Israel and the Church as two distinct peoples of God with two distinct programs. Old Testament covenant promises to Israel (land, national restoration, Davidic kingdom) are not spiritualized or transferred to the Church — they await literal fulfillment in a future millennial kingdom. This entails a pre-tribulational rapture of the church, followed by a seven-year tribulation during which God resumes his program with national Israel, followed by the literal millennial reign of Christ in Jerusalem. The Church, in this system, is a parenthesis in God's prophetic program for Israel. Progressive Dispensationalism (Bock, Saucy) has significantly revised these claims, acknowledging more continuity between Israel and the Church and allowing for partial present fulfillment of Davidic promises in Christ's resurrection and ascension. Key figures: Darby, Scofield, Chafer, Ryrie, Walvoord; revised: Bock, Saucy.",
    figures: "Darby, Scofield, Chafer, Ryrie, Walvoord; Progressive: Bock, Saucy",
  },
  {
    id: "nct",
    title: "New Covenant Theology",
    subtitle: "Middle Position",
    color: "#4F8FBB",
    description: "New Covenant Theology (NCT) emerged in the late 20th century as a mediating position between Covenant Theology and Dispensationalism, associated primarily with Tom Wells, Fred Zaspel, and John Reisinger. NCT agrees with Covenant Theology that there is one covenant of grace and that the Bible tells one unified story of redemption. But it disagrees sharply on the continuity of the Mosaic Law. For NCT, the Mosaic covenant — including the Ten Commandments as a covenant document — was a temporary, preparatory administration now wholly superseded by the New Covenant. Christians are not 'under the law' in any sense; they are 'under the law of Christ' (1 Cor 9:21; Gal 6:2), which is the teaching of Jesus and the apostles as recorded in the New Testament. The Third Use of the Law (the law as a guide for Christians) is rejected in its classic form; moral guidance comes from the New Testament directly. This position avoids what NCT sees as the arbitrariness of Covenant Theology's three-fold division of the law (moral/ceremonial/civil) — if the Mosaic covenant is one unified covenant, you cannot selectively retain one 'part' of it. NCT also rejects infant baptism: the New Covenant is a covenant of regenerate members only, which is why it promises that 'they will all know me' — a promise that cannot be made of infants who may or may not come to faith. Key figures: Wells, Zaspel, Reisinger, Lehrer.",
    figures: "Tom Wells, Fred Zaspel, John Reisinger, Blake White",
  },
  {
    id: "progressive-covenantalism",
    title: "Progressive Covenantalism",
    subtitle: "Gentry & Wellum",
    color: "#BB4F8F",
    description: "Progressive Covenantalism is the framework developed by Peter Gentry and Stephen Wellum in 'Kingdom through Covenant' (2012, 2nd ed. 2018) and further by Wellum and Brent Parker in 'Progressive Covenantalism' (2016). It seeks to chart a biblical-theological path between Covenant Theology and Dispensationalism by doing more careful exegetical work on each individual covenant rather than importing systematic categories. Its key claim is that the biblical covenants are progressive — each one builds upon, develops, and partially fulfills the previous, moving toward the climactic New Covenant in Christ. The New Covenant does not merely continue the previous covenants; it transcends and fulfills them in a way that transforms the covenant community (now consisting of regenerate believers from all nations), the covenant sign (baptism applied to believers, not infants, because the New Covenant community is constituted differently), and the covenant law (fulfilled and internalized in Christ). Against Classic Dispensationalism: there is one people of God, and Israel's covenant promises are fulfilled in Christ and the multinational church. Against Covenant Theology: the covenants are genuinely distinct and develop progressively; the 'Covenant of Works' and 'Covenant of Grace' are theological constructs not directly exegeted from individual covenant texts; and the continuity between Old and New Covenant community does not support infant baptism. PC is gaining significant traction in evangelical biblical scholarship and among younger Reformed Baptists. Key figures: Gentry, Wellum, Parker, Naselli.",
    figures: "Peter Gentry, Stephen Wellum, Brent Parker, Jason DeRouchie",
  },
];

const APPLICATION_ITEMS = [
  {
    id: "baptism",
    title: "Baptism and Covenant",
    body: "Baptism is the point at which virtually every major disagreement in covenant theology becomes visible and concrete. The question 'who should be baptized, and why?' is not merely a debate about church practice — it is a debate about the nature of the New Covenant community, the relationship between the Testaments, and the definition of covenant membership. Covenant Theology argues: Since the New Covenant succeeds and continues the Abrahamic covenant, and since the Abrahamic covenant included infants of believers (circumcision on the eighth day), so the New Covenant sign (baptism) should be applied to infants of believers. The household is the covenant unit; children of believers are 'holy' (1 Cor 7:14) and belong to the covenant community. New Covenant Theology and Progressive Covenantalism counter: Jeremiah 31:34 says of the New Covenant that 'they will all know me, from the least to the greatest.' The New Covenant community is constituted of the regenerate — which is why the promise of inward transformation is guaranteed, not aspirational. Infant baptism conflates the sign with the reality and contradicts the New Covenant's defining characteristic. Baptism, in this view, is the public declaration of personal faith and Spirit-given regeneration. The stakes of this debate extend beyond the font: ecclesiology (what is the church?), assurance (what grounds my confidence before God?), and evangelism (how do we speak to those who were baptized as infants but show no evidence of faith?) are all downstream of how one answers the covenant-membership question.",
  },
  {
    id: "assurance",
    title: "Covenant and Assurance",
    body: "One of the pastoral gifts of covenant theology — across its various forms — is the ground it provides for Christian assurance. The question 'How can I know I am saved?' is among the most agonizing in pastoral ministry. The answer that covenant theology offers is not primarily subjective (How do I feel? Do I feel sincere enough?) but objective (What has God promised, and to whom?). Covenant assurance begins with the character of the God who made the covenant: he is the God who swore by himself, who took the covenant curse upon himself in Genesis 15, who fulfilled every promise in Christ. The New Covenant promise is not 'you may receive forgiveness if you are faithful enough' but 'I will forgive their wickedness and remember their sins no more' (Jer 31:34). The ground of assurance is not the strength or quality of my faith but the object of my faith — a God who covenants and keeps covenant. The Lord's Supper, as the covenant sign and seal of the New Covenant, is a physical, recurring assurance: Christ's body broken and blood poured out for you. Many Puritans distinguished between assurance of salvation (knowing you are saved) and assurance of faith (knowing your faith is genuine), and taught that the latter — attained through self-examination and observation of the Spirit's fruit — grounds the former. But the deeper anchor is always the objective promise of the covenant, not the subjective quality of one's spiritual experience.",
  },
  {
    id: "discipline",
    title: "Covenant and Discipline",
    body: "Church discipline, in the New Testament framework, is best understood as covenant enforcement. The community of the New Covenant is a covenant people, and membership in that community carries covenant obligations — to walk in the light, to love one another, to hold fast to the confession. When a member persistently and unrepentantly violates these obligations, the church, acting in Christ's authority, enacts the covenant sanction. Matthew 18:15-20 is the locus classicus: a private rebuke, then witnesses, then the whole church, and finally — if repentance is not forthcoming — the person is to be treated 'as a pagan or a tax collector.' This last step is excommunication: removal from the covenant community, loss of access to the covenant signs (Lord's Supper, covenant fellowship), and a formal declaration that the person is currently outside the covenant in their practice. Paul's language in 1 Corinthians 5 is stark: 'hand this man over to Satan, so that the sinful nature may be destroyed and his spirit saved on the day of the Lord' — the goal is not punitive but restorative. Covenant exclusion is the ultimate warning, designed to wake the sinning member to the gravity of their situation. When discipline is absent from a church, the implicit message is that the covenant makes no demands — that covenant membership is unconditional in the sense that nothing you do can remove it. This is a distortion that ultimately harms both the individual and the community by erasing the real stakes of covenant relationship.",
  },
  {
    id: "marriage",
    title: "Covenant and Marriage",
    body: "The Scriptures present marriage as a covenant from the beginning. Genesis 2:24 — 'a man leaves his father and mother and is united to his wife, and they become one flesh' — is not merely a description of a social arrangement; it is the initiation of a covenant bond, the creation of a new covenant household. Malachi 2:14 makes the covenant language explicit: 'the LORD was witness between you and the wife of your youth. You have been unfaithful to her, though she is your partner, the wife of your marriage covenant.' God is the third party in every marriage — a witness who holds the covenant parties accountable. This is why marriage vows are traditionally sworn before God ('in the presence of God and these witnesses') and why the church has historically solemnized rather than merely witnessed weddings. Understanding marriage as covenant rather than contract transforms every aspect of marital ethics. If marriage is a contract, then breach by one party releases the other — and when the contract no longer 'works' (produces happiness, fulfillment, compatibility), it may be rationally dissolved. If marriage is a covenant, then its binding character is not contingent on its producing desired outcomes. Tim Keller argues that covenant love — love that commits independent of performance — is the only kind of love that can produce the security and depth that marriage promises. Contract-love will always be provisional and therefore can never create the conditions for true vulnerability and trust. The covenant framework also grounds the church's painful task of caring for those whose marriages have broken down, without either dismissing the gravity of the covenant breach or abandoning the wounded parties.",
  },
  {
    id: "discipleship",
    title: "Covenant in Daily Discipleship",
    body: "The covenant framework fundamentally reorders the logic of the Christian life. In many approaches to discipleship, the implicit structure is: 'Obey, and God will bless you.' Performance precedes favor. But the covenant pattern throughout Scripture is precisely the reverse: God acts in grace first, and obedience is the grateful response of those who have been blessed. The Decalogue begins not with a command but with a declaration: 'I am the LORD your God, who brought you out of Egypt, out of the land of slavery' (Ex 20:2). Redemption precedes requirement. The New Covenant follows the same logic: 'We love because he first loved us' (1 John 4:19); 'Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice' (Rom 12:1) — the 'therefore' is doing the work of covenant logic. This means that Christian discipleship is not fundamentally about trying harder to achieve a standard in order to obtain God's favor. It is about living out of the favor already given, standing on promises already secured, being transformed by a love already extended. The practical difference is enormous: the person trying to earn God's approval through spiritual disciplines will oscillate between pride (when performing well) and despair (when failing). The covenant disciple has a stable foundation — God's faithfulness — and obeys from a place of security rather than anxiety. Daily Bible reading, prayer, community, and service are not toll roads to God's presence but pathways for enjoying and deepening a relationship whose foundation God himself has secured.",
  },
  {
    id: "ot-reading",
    title: "Reading the OT as Covenant People",
    body: "One of the most practically significant implications of covenant theology is the way it transforms how Christians read the Old Testament. If the Bible is one covenant story, then Israel's history is not ancient foreign history — it is our history. Paul makes this explicit in 1 Corinthians 10:1-11: 'These things happened to them as examples and were written down as warnings for us, on whom the culmination of the ages has come.' The New Testament authors treat Old Testament covenant promises, histories, and patterns as directly applicable to the New Covenant community — not by flattening or allegorizing them, but by reading them through the lens of Christ's fulfillment. When the Psalmist cries 'How long, O LORD? Will you forget me forever?' (Ps 13:1), he is expressing a covenant lament that belongs to every covenant person in every generation — including us. When Israel is promised restoration after exile (Isa 40-55), the New Testament understands this as finding its ultimate fulfillment in the new exodus accomplished by Christ and the final restoration in the new creation. Practically, this means that the Psalms are our prayer book — these are the Spirit-inspired words given to the covenant community for corporate and individual worship. It means that the histories of Abraham, Moses, David, and the prophets are family stories — their struggles with faith, their failures, their experiences of God's covenant faithfulness are meant to instruct and encourage us. It means that the warnings addressed to Israel — do not harden your hearts (Heb 3-4, citing Ps 95) — are addressed to us. Reading the Old Testament as covenant people is not the same as finding hidden allegories; it is recognizing that we are characters in the same story, now living in the climactic chapter.",
  },
];

function AccordionItem({
  item,
  expanded,
  onToggle,
}: {
  item: { id: string; title: string; body: string };
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        marginBottom: 12,
        background: CARD,
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ color: TEXT, fontWeight: 600, fontSize: 16 }}>{item.title}</span>
        <span
          style={{
            color: GREEN,
            fontSize: 20,
            fontWeight: 700,
            transition: "transform 0.2s",
            display: "inline-block",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "0 22px 22px",
            color: MUTED,
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          {item.body}
        </div>
      )}
    </div>
  );
}

export default function CovenantPage() {
  const [tab, setTab] = useState<Tab>("what");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedCovenant, setSelectedCovenant] = useState<string>(COVENANT_LIST[0].id);

  function toggleExpanded(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const activeCovenant = COVENANT_LIST.find((c) => c.id === selectedCovenant) ?? COVENANT_LIST[0];

  const tabs: { key: Tab; label: string }[] = [
    { key: "what", label: "What Is Covenant?" },
    { key: "covenants", label: "The Biblical Covenants" },
    { key: "views", label: "Theological Views" },
    { key: "application", label: "Application" },
    { key: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-block",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              padding: "4px 14px",
              color: GREEN,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Theology
          </div>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: TEXT,
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Covenant
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            The spine of the Bible — from Eden to the New Jerusalem, God binds himself to his people in covenant.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 6,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                flex: 1,
                minWidth: 140,
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
                background: tab === t.key ? PURPLE : "transparent",
                color: tab === t.key ? "#fff" : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: What Is Covenant */}
        {tab === "what" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>What Is Covenant?</h2>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              The word "covenant" appears over 300 times in Scripture. Understanding what it means is essential to
              understanding the entire Bible.
            </p>
            {WHAT_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleExpanded(item.id)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: The Biblical Covenants */}
        {tab === "covenants" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>The Biblical Covenants</h2>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              Six major covenants form the progressive backbone of redemptive history, each building toward the New
              Covenant in Christ.
            </p>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              {/* Left List */}
              <div
                style={{
                  width: 220,
                  flexShrink: 0,
                  position: "sticky",
                  top: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {COVENANT_LIST.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCovenant(c.id)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: `1px solid ${selectedCovenant === c.id ? GREEN : BORDER}`,
                      background: selectedCovenant === c.id ? "rgba(58,125,86,0.07)" : CARD,
                      color: selectedCovenant === c.id ? GREEN : TEXT,
                      fontWeight: selectedCovenant === c.id ? 700 : 500,
                      fontSize: 14,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.18s",
                    }}
                  >
                    <div>{c.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.ref}</div>
                  </button>
                ))}
              </div>

              {/* Right Detail */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 28,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ color: GREEN, fontSize: 22, fontWeight: 800, margin: "0 0 4px" }}>
                      {activeCovenant.name}
                    </h3>
                    <div style={{ color: MUTED, fontSize: 13 }}>{activeCovenant.ref}</div>
                  </div>

                  {[
                    { label: "Parties", value: activeCovenant.parties },
                    { label: "Promise", value: activeCovenant.promise },
                    { label: "Sign", value: activeCovenant.sign },
                    { label: "Condition", value: activeCovenant.condition },
                    { label: "Key Scripture", value: activeCovenant.scripture },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ marginBottom: 16 }}>
                      <div
                        style={{
                          color: PURPLE,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </div>
                      <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>{value}</div>
                    </div>
                  ))}

                  <div
                    style={{
                      marginTop: 20,
                      paddingTop: 20,
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <div
                      style={{
                        color: PURPLE,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      Theological Significance
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                      {activeCovenant.significance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Theological Views */}
        {tab === "views" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Theological Views</h2>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              How you interpret covenant shapes almost every major area of theology. Four major frameworks have shaped
              the evangelical conversation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {VIEW_CARDS.map((card) => (
                <div
                  key={card.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 28,
                    borderLeft: `4px solid ${card.color}`,
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <h3 style={{ color: card.color, fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>
                      {card.title}
                    </h3>
                    <div
                      style={{
                        display: "inline-block",
                        background: `${card.color}18`,
                        border: `1px solid ${card.color}40`,
                        borderRadius: 5,
                        padding: "2px 10px",
                        color: card.color,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {card.subtitle}
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.85, margin: "0 0 16px" }}>
                    {card.description}
                  </p>
                  <div
                    style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: 14,
                    }}
                  >
                    <span
                      style={{
                        color: PURPLE,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        marginRight: 8,
                      }}
                    >
                      Key Figures:
                    </span>
                    <span style={{ color: TEXT, fontSize: 13 }}>{card.figures}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Application */}
        {tab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              Covenant is not an abstract theological category — it has concrete, pastoral, and daily implications for
              the Christian life.
            </p>
            {APPLICATION_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleExpanded(item.id)}
              />
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "mW1X8j4kCus", title: "Covenant: What Is Reformed Theology?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul introduces covenant theology — the Reformed understanding of how God has structured all of redemptive history around a series of binding covenants." },
                  { videoId: "uKNIPNbnHgw", title: "R.C. Sproul: The Covenant", channel: "Ligonier Ministries", description: "A foundational lecture on what a covenant is in Scripture — how it differs from a contract, and why covenant is the organizing principle of the entire Bible." },
                  { videoId: "C9LWyRuWCFA", title: "The Meaning of Covenant", channel: "Ligonier Ministries", description: "Ligonier teaching on how the history of redemption is shaped by the covenants that God has made with his people from creation to the new covenant in Christ." },
                  { videoId: "SkV5zp873MU", title: "The Covenant of Redemption", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul traces God's plan of salvation back to eternity itself — the covenant of redemption between Father and Son before the foundation of the world." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
