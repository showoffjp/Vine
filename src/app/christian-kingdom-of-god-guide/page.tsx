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
const BLUE = "#3B82F6";

const tabs = [
  { id: "what", label: "What Is the Kingdom" },
  { id: "already", label: "Already and Not Yet" },
  { id: "parables", label: "Parables of the Kingdom" },
  { id: "church", label: "Kingdom and Church" },
  { id: "ethics", label: "Kingdom Ethics" },
  { id: "videos", label: "Videos" },
];

const whatItems = [
  {
    title: "Basileia Tou Theou &mdash; The Reign of God",
    text: "The Greek phrase <em>basileia tou theou</em> (kingdom of God) &mdash; or in Matthew&rsquo;s more Jewish formulation, <em>basileia t&ocirc;n ouran&ocirc;n</em> (kingdom of heaven) &mdash; appears over 100 times in the Synoptic Gospels alone. It was the central theme of Jesus&rsquo;s preaching. But the word &ldquo;kingdom&rdquo; is misleading to modern ears: it suggests a territory, a realm with borders. The Greek <em>basileia</em> is better translated &ldquo;reign&rdquo; or &ldquo;rule&rdquo; &mdash; the dynamic exercise of kingly authority, not a static domain. When Jesus announces the kingdom, he is announcing that God is asserting his sovereign rule in a new and decisive way through Jesus himself. The kingdom of God is wherever and whenever God&rsquo;s will is being done as it is in heaven (Matt 6:10). It is not primarily a place to go but a power that is coming &mdash; and has already come &mdash; in the person and work of Jesus Christ.",
  },
  {
    title: "The Old Testament Background &mdash; God as King",
    text: "The kingdom of God is not a New Testament novelty. The entire Old Testament is the story of God as King &mdash; of his world, of Israel, of all nations. Psalm 103:19 declares: &ldquo;The LORD has established his throne in heaven, and his kingdom rules over all.&rdquo; God is the cosmic king who reigns eternally. But Israel&rsquo;s covenant history reveals a dramatic tension: God is King, yet his kingship is contested. The nations rebel (Ps 2). Israel herself rebels, demanding a human king &ldquo;like the other nations&rdquo; (1 Sam 8:5) &mdash; a demand that is simultaneously a rejection of God&rsquo;s kingship (1 Sam 8:7). The Davidic monarchy was God&rsquo;s concession and provision: a human king who would represent the divine King, holding the throne as God&rsquo;s vice-regent. But Davidic kings failed; the throne was lost to Babylon. The prophets then looked forward to a day when God would reassert his kingship directly and decisively &mdash; through a coming Davidic son (Isaiah 9, 11), through a new exodus (Isaiah 40-55), through a final judgment that would vindicate the righteous and punish the wicked (Daniel 7). Jesus&rsquo;s announcement of the kingdom is the fulfillment of this entire prophetic vision.",
  },
  {
    title: "Jesus&rsquo;s Announcement &mdash; Mark 1:15",
    text: "Mark 1:15 is the programmatic summary of Jesus&rsquo;s preaching: &ldquo;The time has come. The kingdom of God has come near. Repent and believe the good news.&rdquo; Every word is loaded. &ldquo;The time has come&rdquo; (<em>peplēr&ocirc;tai ho kairos</em>): not merely that time has elapsed, but that the appointed time has been fulfilled &mdash; the time that the prophets announced has now arrived. &ldquo;The kingdom of God has come near&rdquo; (<em>ēggiken hē basileia tou theou</em>): the kingdom is not merely approaching as a future prospect; it has arrived in Jesus&rsquo;s own person and activity. &ldquo;Repent&rdquo; (<em>metanoeite</em>): a complete reorientation of mind, will, and life &mdash; the appropriate response to the arrival of the King. &ldquo;Believe the good news&rdquo; (<em>pisteuete en t&ocirc; euaggelio&ucirc;</em>): trust the announcement; stake your life on the fact that the King has come. The kingdom is thus not a human achievement to be built but a divine gift to be received through repentance and faith.",
  },
  {
    title: "The Two Horizons &mdash; This Age and the Age to Come",
    text: "Jewish eschatology in Jesus&rsquo;s time operated within a two-age framework: &ldquo;this present age&rdquo; (<em>olam hazeh</em>) and &ldquo;the age to come&rdquo; (<em>olam haba</em>). The present age is characterized by sin, death, and the dominion of evil; the age to come &mdash; inaugurated by divine intervention &mdash; will be characterized by resurrection, righteousness, and the full reign of God. These two ages were expected to be sequential: first this age, then (after the Day of the LORD) the age to come. Jesus&rsquo;s ministry shatters this sequential expectation: in him, the powers of the age to come have broken into the present age. Healing, exorcism, and resurrection are not merely compassionate acts; they are signs that the age to come has arrived in advance of its final consummation. The church lives in the overlap of the ages &mdash; the new age has begun in Christ&rsquo;s resurrection, but the old age has not yet fully passed away. This &ldquo;already and not yet&rdquo; tension is not a theological problem to be solved but the shape of Christian existence in the present.",
  },
  {
    title: "The Kingdom and the Person of the King",
    text: "One of the most important insights of twentieth-century New Testament scholarship is that the kingdom of God in Jesus&rsquo;s preaching is inseparable from Jesus himself. The kingdom is not an idea or a program; it is a person. When Jesus heals, the kingdom heals. When Jesus forgives, the kingdom forgives. When Jesus casts out demons, the kingdom is advancing: &ldquo;if it is by the finger of God that I drive out demons, then the kingdom of God has come upon you&rdquo; (Luke 11:20). This identification of the kingdom with the King means that kingdom theology is inescapably christological. You cannot have the blessings of the kingdom without the King. The invitation to enter the kingdom is an invitation to submit to the King &mdash; to recognize his authority, trust his word, and live under his reign. This is why the Great Commission (Matt 28:18-20) begins with Jesus&rsquo;s declaration: &ldquo;All authority in heaven and on earth has been given to me.&rdquo; The mission of the church flows from the reign of the risen King.",
  },
];

const alreadyItems = [
  {
    title: "George Eldon Ladd and The Gospel of the Kingdom",
    text: "No twentieth-century scholar did more to recover the kingdom of God as a central theological category than George Eldon Ladd (1911-1982), professor of New Testament Exegesis and Theology at Fuller Theological Seminary. His 1959 work <em>The Gospel of the Kingdom</em> &mdash; a popular exposition of his more technical <em>Jesus and the Kingdom</em> (1964) &mdash; argued against both the liberal Social Gospel (which reduced the kingdom to a human program of social improvement) and classic Dispensationalism (which postponed the kingdom to a future millennium after the rapture). Ladd&rsquo;s central contribution was the demonstration from the Gospels that the kingdom is both present and future &mdash; genuinely inaugurated in Jesus&rsquo;s ministry but awaiting consummation at his return. The kingdom &ldquo;has come near&rdquo; (Mark 1:15), the kingdom &ldquo;has come upon you&rdquo; (Luke 11:20), and yet the disciples pray &ldquo;your kingdom come&rdquo; (Matt 6:10) &mdash; because it has not yet come in its fullness. This tension, Ladd argued, is not a contradiction but the fundamental structure of New Testament eschatology.",
  },
  {
    title: "The D-Day / V-Day Analogy",
    text: "Ladd, drawing on Oscar Cullmann&rsquo;s earlier work, used the analogy of World War II to illuminate the already-not-yet structure of the kingdom. In June 1944, D-Day (the Normandy landings) was the decisive battle that determined the outcome of the war in Europe. From that point forward, the defeat of Nazi Germany was certain &mdash; the tide had irreversibly turned. Yet V-Day (Victory in Europe Day) did not come until May 1945, nearly a year later. In the intervening months, fierce fighting continued; casualties were heavy; the outcome seemed uncertain to those in the trenches. But from the strategic perspective, the war was already won. Christ&rsquo;s death, resurrection, and ascension are the D-Day of the kingdom: the decisive battle has been fought and won. The enemy (sin, death, Satan) is a defeated foe, though not yet finally and visibly overthrown. The church lives between D-Day and V-Day &mdash; between the decisive victory and its final manifestation. The return of Christ is V-Day: the open, universal acknowledgment of what the resurrection has already secured.",
  },
  {
    title: "Signs of the Kingdom as First Fruits",
    text: "Jesus&rsquo;s miracles of healing, exorcism, and resurrection are not simply demonstrations of his power or acts of compassion (though they are both). They are <em>signs of the kingdom</em> &mdash; intrusions of the age to come into the present age, first fruits of the final renewal of all things. When Jesus heals the blind, the deaf, the lame (Luke 7:22, citing Isaiah 35:5-6), he is enacting in miniature what Isaiah promised for the final age: &ldquo;Then will the eyes of the blind be opened and the ears of the deaf unstopped.&rdquo; When Jesus raises Lazarus, he is not merely a powerful wonderworker; he is the Resurrection and the Life (John 11:25) demonstrating in one body what he will do for all bodies at the last day. When Jesus casts out demons, he is binding &ldquo;the strong man&rdquo; (Mark 3:27) &mdash; the decisive confrontation with the powers of evil that the kingdom brings. These signs are not the kingdom in its fullness; they are foretastes, anticipations, first fruits. They point beyond themselves to the final harvest.",
  },
  {
    title: "Why the Tension Is a Reality to Inhabit, Not a Problem to Solve",
    text: "The already-not-yet tension creates real suffering for the Christian who prays for healing and does not receive it, who works for justice and sees injustice triumph, who longs for peace and finds conflict unresolved. Why does the kingdom come in power but not in fullness? Why is the decisive battle won but the fighting still fierce? Ladd&rsquo;s answer is that this tension is not a theological embarrassment to be explained away but the God-designed shape of redemptive history between the advents. The interval between the first and second coming is the mission of the church: the gospel must be proclaimed &ldquo;in the whole world as a testimony to all nations, and then the end will come&rdquo; (Matt 24:14). The &ldquo;not yet&rdquo; is the space for mission, for repentance, for the patient endurance of the saints. To &ldquo;solve&rdquo; the tension by collapsing it &mdash; either by realizing the kingdom now through political action (over-realized eschatology) or by postponing it entirely to the future and disengaging from the present (under-realized eschatology) &mdash; is to distort both the gospel and the Christian life. The tension is the gift of a God who is patient, not wanting any to perish (2 Pet 3:9).",
  },
  {
    title: "The Spirit as Down Payment on the Kingdom",
    text: "Paul&rsquo;s pneumatology is thoroughly eschatological: the gift of the Holy Spirit is the first fruits and down payment of the kingdom&rsquo;s fullness. In Romans 8:23, Paul describes believers as having &ldquo;the firstfruits of the Spirit&rdquo; while groaning for the redemption of their bodies &mdash; the Spirit&rsquo;s presence is a foretaste, not the feast. In 2 Corinthians 1:22 and 5:5, the Spirit is described as God&rsquo;s &ldquo;deposit, guaranteeing what is to come&rdquo; (the Greek word is <em>arrab&ocirc;n</em>, an earnest payment or down payment that legally commits the payer to the full amount). In Ephesians 1:13-14, the Spirit is &ldquo;a deposit guaranteeing our inheritance until the redemption of those who are God&rsquo;s possession.&rdquo; Every gift of the Spirit &mdash; healing, prophecy, love, righteousness, peace, joy &mdash; is a real but partial anticipation of the fullness that is coming. The charismatic gifts are kingdom gifts; their imperfection (we prophesy in part, we know in part &mdash; 1 Cor 13:9) is precisely the point: they are first fruits, not the harvest.",
  },
];

const parableItems = [
  {
    title: "Reading Kingdom Parables: Analogies, Not Allegories",
    text: "Jesus&rsquo;s kingdom parables (especially the cluster in Matthew 13) have been massively misread throughout church history by treating them as detailed allegories in which every element has a specific referent. The classic corrective, associated with Adolf Jülicher in the nineteenth century and refined by C.H. Dodd and Joachim Jeremias in the twentieth, is that parables are extended analogies or similes: they make one or a few main points, with the illustrative details functioning to enrich the story, not to encode hidden theological information. &ldquo;The kingdom of heaven is like a mustard seed&rdquo; (Matt 13:31) means: the kingdom of God has the character of a mustard seed &mdash; its main point is the contrast between tiny beginning and great end. The kind of mustard (is it the black mustard? what exactly are the birds?), the number of seeds, the size of the bush &mdash; these are narrative details, not theological propositions. Reading kingdom parables correctly means identifying the central point each parable makes within its original context, attending to the audience Jesus was addressing, and refusing to press every detail for symbolic meaning it was never meant to carry.",
  },
  {
    title: "The Sower (Matthew 13:3-23) &mdash; The Kingdom Grows Amid Failure",
    text: "The parable of the Sower (better named the parable of the Soils) is the key to reading all the parables (Mark 4:13: &ldquo;Don&rsquo;t you understand this parable? How then will you understand any parable?&rdquo;). A sower scatters seed; it falls on four types of soil: the path (eaten by birds), rocky ground (scorched by the sun without depth of root), thorns (choked by competing growth), and good soil (producing a harvest of 30, 60, or 100 times what was sown). Jesus himself interprets it: the seed is the word of the kingdom; the soils represent different responses. The parable&rsquo;s central point is both sobering and encouraging: the kingdom of God advances through the proclamation of the word even when that word is rejected, misunderstood, or choked by competing loyalties. Most of the seed does not produce fruit. But where it does &mdash; in the prepared, receptive heart &mdash; the harvest is disproportionately great. The kingdom is not defeated by failure; it advances through faithful sowing.",
  },
  {
    title: "The Mustard Seed and the Leaven (Matthew 13:31-33)",
    text: "The parable of the Mustard Seed and the parable of the Leaven form a pair, each making the same essential point from a different angle. The mustard seed: tiny to the point of invisibility, yet growing into a tree large enough for birds to nest in its branches &mdash; a deliberate echo of Ezekiel 17:23 and 31:6, where the great empires (Babylon, Egypt) are described as great trees sheltering the nations. Jesus is saying: the kingdom of God, beginning in my ministry &mdash; this seemingly insignificant Galilean movement &mdash; will grow into something that shelters all the nations. The leaven: a woman hides a small amount of yeast in a large quantity of flour, and it works through the whole batch invisibly and irresistibly. The kingdom works the same way &mdash; not with spectacular visible power but with hidden, pervasive, unstoppable effect. Both parables address the disciples&rsquo; likely discouragement at the apparent smallness and insignificance of Jesus&rsquo;s movement: do not despise the day of small things (Zech 4:10). God&rsquo;s purposes are not frustrated by small beginnings.",
  },
  {
    title: "The Hidden Treasure and the Pearl (Matthew 13:44-46)",
    text: "The parables of the Hidden Treasure and the Pearl of Great Price are companion parables that make one point with unusual clarity: the kingdom of God is of surpassing, incomparable value &mdash; worth everything else you have. A man stumbles upon treasure hidden in a field; he reburied it and &ldquo;in his joy went and sold all he had and bought that field.&rdquo; A merchant searching for fine pearls finds one of surpassing value and &ldquo;went away and sold everything he had and bought it.&rdquo; The note of joy is crucial: this is not grim, gritted-teeth sacrifice. This is the joy of a man who has found something so valuable that releasing everything else is obvious, natural, gladly done. C.S. Lewis captured the spirit: &ldquo;It would seem that Our Lord finds our desires not too strong, but too weak. We are half-hearted creatures, fooling about with drink and sex and ambition when infinite joy is offered us.&rdquo; The kingdom demands total reorientation &mdash; not as a burden but as the most rational response to its supreme worth.",
  },
  {
    title: "The Weeds and the Wheat (Matthew 13:24-30, 36-43)",
    text: "The parable of the Weeds and the Wheat directly addresses the question of why evil persists in the world if the kingdom has come. A man sows good seed in his field; while everyone is sleeping, an enemy sows weeds (the Greek <em>zizania</em>, darnel, is a weed that closely resembles wheat in early growth). When the weeds appear, the servants ask whether to pull them up. The master says no: &ldquo;while you are pulling the weeds, you may uproot the wheat with them. Let both grow together until the harvest.&rdquo; At harvest, the reapers will separate them. Jesus interprets: the field is the world; the good seed are the sons of the kingdom; the weeds are sons of the evil one; the harvest is the end of the age; the reapers are angels. The theological point is important: the church in this age is not a perfectly pure community. Judgment is God&rsquo;s prerogative at the end, not the church&rsquo;s premature task now. The patience of God &mdash; allowing both to grow together &mdash; is the space for repentance and mission. The kingdom will be purified at the final harvest; our role is faithful witness, not premature separation.",
  },
  {
    title: "The Dragnet (Matthew 13:47-50)",
    text: "The parable of the Dragnet reinforces the Weeds and Wheat: &ldquo;Once again, the kingdom of heaven is like a net that was let down into the lake and caught all kinds of fish. When it was full, the fishermen pulled it up on the shore. Then they sat down and collected the good fish in baskets, but threw the bad away. This is how it will be at the end of the age.&rdquo; The dragnet is indiscriminate in its gathering &mdash; it catches every kind. Only at the end is the separation made. The kingdom in its present form is a mixed reality: the proclamation of the gospel gathers a diverse catch, and the visible church contains both genuine and nominal disciples. The final sorting is not our task but God&rsquo;s. This parable functions as a word of pastoral realism (the church will always be mixed until the end) and a word of eschatological urgency (the sorting will happen; be among the good fish). It guards against both perfectionism (purging the church of all impurity now) and indifferentism (it doesn&rsquo;t matter how you live since judgment is coming anyway).",
  },
];

const churchItems = [
  {
    title: "Is the Kingdom the Same as the Church?",
    text: "A persistent confusion in popular theology is the identification of the kingdom of God with the church. This equation has a long history: Augustine&rsquo;s <em>City of God</em> influenced a tradition in which the institutional church became the visible embodiment of God&rsquo;s kingdom, reaching its apex in medieval Christendom. But the New Testament does not identify the two. The kingdom is the broader reality &mdash; God&rsquo;s sovereign reign over all creation. The church is the community of those who have submitted to that reign and gathered around the risen King. Ladd&rsquo;s classic formulation: the church is not the kingdom, but the church is the community of the kingdom. The church witnesses to the kingdom, embodies the kingdom&rsquo;s values, participates in the kingdom&rsquo;s mission &mdash; but does not exhaust the kingdom. God&rsquo;s kingdom is active in the world beyond the church&rsquo;s walls; his purposes are at work in history in ways the church neither controls nor always recognizes. The church is the servant of the kingdom, not its master.",
  },
  {
    title: "The Church as Sign, Instrument, and Foretaste",
    text: "Lesslie Newbigin&rsquo;s threefold description of the church&rsquo;s relationship to the kingdom has been widely influential. The church is: (1) a <strong>sign</strong> of the kingdom &mdash; its existence as a reconciled, multiethnic, mutually loving community points beyond itself to the reality of God&rsquo;s coming reign. When Ephesians 2 describes Jews and Gentiles, formerly separated by &ldquo;the dividing wall of hostility,&rdquo; now brought together in one body in Christ, this new humanity is a sign that the powers of division have been broken. (2) An <strong>instrument</strong> of the kingdom &mdash; the church is the means through which God advances his purposes in the world: through proclamation, service, advocacy for justice, the practice of reconciliation. (3) A <strong>foretaste</strong> of the kingdom &mdash; the church&rsquo;s common life of worship, fellowship, mutual care, and shared table is an anticipatory experience of the life of the age to come. The Lord&rsquo;s Supper in particular is a kingdom meal &mdash; a foretaste of the great wedding feast of the Lamb (Rev 19:9).",
  },
  {
    title: "The Danger of Kingdom and Nation",
    text: "One of the most persistent temptations in Christian history is the identification of the kingdom of God with a particular nation, culture, or political program. Constantine&rsquo;s conversion transformed Christianity from persecuted minority to imperial religion &mdash; and introduced the temptation to read the Roman Empire as the vehicle of God&rsquo;s kingdom. Medieval Christendom made this identification explicit. American Manifest Destiny, the German Reich, Christian nationalism in various twentieth-century forms &mdash; all represent variations of the same confusion: the kingdom of God as the sacral validation of a particular political order. The critique of Christendom from theologians like Karl Barth, Stanley Hauerwas, and John Howard Yoder is that this confusion always ends in the church&rsquo;s captivity to the state and the distortion of the gospel. The kingdom of God is not the United States, not Western civilization, not any political party or program. It is the reign of the crucified and risen Jesus &mdash; which relativizes, judges, and transcends all human political arrangements.",
  },
  {
    title: "Kingdom Values vs. the Church as Institution",
    text: "There is sometimes a productive tension between &ldquo;kingdom values&rdquo; &mdash; justice, reconciliation, peace, care for the poor, radical welcome of the outsider &mdash; and the church as a particular institution with its own structures, traditions, and self-interest. The prophetic tradition in Scripture consistently holds institutional religion accountable to kingdom values: Amos condemning Israel&rsquo;s elaborate worship while the poor are trampled (Amos 5:21-24); Jesus driving the money-changers from the Temple; the letter of James addressing favoritism and mistreatment of the poor in the Christian assembly (James 2:1-9). The tension is not resolved by abandoning the institution (the church is still the body of Christ, however imperfect) or by spiritualizing kingdom values so they make no concrete demands. It is resolved by the ongoing reformation of the institutional church under the prophetic pressure of kingdom values. The church that has genuinely encountered the kingdom of God will be a church that looks increasingly like the community the Beatitudes describe.",
  },
  {
    title: "The Church&rsquo;s Responsibility to Embody Kingdom Ethics",
    text: "The church&rsquo;s primary contribution to the world is not to fix the world&rsquo;s political problems but to be the kind of community that the world cannot produce by itself: a community of justice, reconciliation, forgiveness, and peace, grounded in the resurrection of Jesus and empowered by the Holy Spirit. This is not a quietist withdrawal from public responsibility. It is, rather, the recognition that the most powerful political act the church can perform is to be the church &mdash; to embody, visibly and publicly, the life of the kingdom. When a congregation practices racial reconciliation, it is a political act. When a church community practices genuine economic sharing, it is a political act. When Christians forgive enemies and pray for persecutors, it is a political act &mdash; the enactment of a different politics than the world knows. The church&rsquo;s social ethics flows from its ecclesiology: what the church is called to be is the embodiment of what the kingdom promises.",
  },
];

const ethicsItems = [
  {
    title: "The Sermon on the Mount as Kingdom Ethics",
    text: "Matthew 5-7, the Sermon on the Mount, is the magna carta of kingdom ethics. Jesus delivers it on a mountain &mdash; a deliberate echo of Moses on Sinai &mdash; with crowds below and disciples close. It is not a new law in the sense of a revised legal code; it is the description of the character and conduct of those who have entered the kingdom. The Sermon does not tell you how to get into the kingdom; it tells you what life looks like for kingdom people. Its ethics are simultaneously impossible (who can consistently love their enemies? who never nurtures anger or lust?) and genuinely demanded (Jesus says these things are required, not merely aspirational). The impossibility is the point: kingdom ethics are impossible apart from the Spirit, impossible apart from the community, impossible apart from the forgiveness that enables us to begin again. They are lived in the &ldquo;already and not yet&rdquo; &mdash; imperfectly now, perfectly in the age to come.",
  },
  {
    title: "The Beatitudes &mdash; The Character of Kingdom Citizens",
    text: "The Beatitudes (Matt 5:3-12) describe, not prescribe: they paint a portrait of the person who has been claimed by the kingdom of God. &ldquo;Blessed&rdquo; (<em>makarios</em>) means not &ldquo;congratulations&rdquo; or &ldquo;you should feel happy&rdquo; but &ldquo;this is the enviable condition of.&rdquo; The person who is &ldquo;poor in spirit&rdquo; &mdash; who has no spiritual capital of their own before God &mdash; is in the enviable condition of receiving the kingdom. The mourners, the meek, the hungry for righteousness, the merciful, the pure in heart, the peacemakers, the persecuted &mdash; these are not moral achievements but descriptions of the kind of person drawn to Jesus: those who know their need, who refuse self-sufficiency, who are willing to be vulnerable and costly in their love of neighbor. Dallas Willard&rsquo;s reading is suggestive: the Beatitudes are not commands but invitations &mdash; &ldquo;blessed are the poor in spirit&rdquo; because the kingdom comes to people exactly like that, and you can be that kind of person. The Beatitudes end where they began: &ldquo;for theirs is the kingdom of heaven&rdquo; (v.3, v.12).",
  },
  {
    title: "The Antitheses &mdash; You Have Heard It Said, But I Say",
    text: "Matthew 5:21-48 contains six &ldquo;antitheses&rdquo;: &ldquo;You have heard that it was said&hellip;but I say to you.&rdquo; Jesus is not contradicting the Old Testament law (he has just said he came to fulfill it, not abolish it &mdash; 5:17); he is radicalizing and interiorizing it in light of the kingdom&rsquo;s arrival. The law said &ldquo;do not murder&rdquo;; Jesus says unresolved anger is murder in the heart. The law said &ldquo;do not commit adultery&rdquo;; Jesus says lust is adultery in the heart. The law permitted divorce with a certificate; Jesus points to God&rsquo;s original intention for marriage. The law said &ldquo;love your neighbor&rdquo;; Jesus extends it to enemies. The trajectory of the antitheses moves consistently inward (from act to heart) and outward (from neighbor to enemy, from kin to stranger). Kingdom ethics is not the management of external behavior but the transformation of desire. The Sermon&rsquo;s summary &mdash; &ldquo;Be perfect, therefore, as your heavenly Father is perfect&rdquo; (5:48) &mdash; is not an impossible demand to drive us to despair but the kingdom&rsquo;s horizon, the telos toward which the Spirit is moving us.",
  },
  {
    title: "How Kingdom Ethics Are Possible",
    text: "The Sermon on the Mount has generated two opposite misreadings. The first makes it an impossible ideal &mdash; meant to crush self-righteousness and drive us to grace, but not actually to be lived. The second makes it a simple practical program &mdash; applicable immediately by any person of goodwill. Both misreadings miss the eschatological key: kingdom ethics are possible <em>by the Spirit, in community, in the already-not-yet</em>. By the Spirit: the Sermon comes before Pentecost in the narrative, but the New Covenant context is clear &mdash; the transformed heart, the internalized law, the empowered obedience are all New Covenant gifts (Ezek 36:27). In community: the Sermon is addressed to &ldquo;you&rdquo; plural &mdash; it is the ethics of a community, not just isolated individuals. Loving enemies is more possible when surrounded by a community practicing the same. In the already-not-yet: kingdom ethics are lived with the grain of the coming new creation and against the grain of the present evil age. They will be imperfect now and perfect then. The church that takes the Sermon seriously will be a community of repentance and forgiveness &mdash; not because it keeps failing, but because it keeps trying.",
  },
  {
    title: "The Social Gospel Debate &mdash; Rauschenbusch and the Kingdom",
    text: "Walter Rauschenbusch (1861-1918), a Baptist pastor who ministered in the Hell&rsquo;s Kitchen neighborhood of New York City, developed the Social Gospel movement&rsquo;s most sophisticated theological expression in <em>A Theology for the Social Gospel</em> (1917). His central claim: the kingdom of God is the core of Jesus&rsquo;s message, and it is a social, political, and economic reality &mdash; not merely a spiritual or other-worldly one. Sin is not only individual but structural: unjust economic systems, political oppression, and racial violence are sins. The gospel demands their transformation. Rauschenbusch was right about several things: the kingdom is indeed social, structural sin is real, and the gospel has political and economic dimensions. But his critics &mdash; including Reinhold Niebuhr and later evangelicals &mdash; argued that he collapsed the &ldquo;not yet&rdquo; into the &ldquo;already,&rdquo; reducing the kingdom to a human social program achievable by moral progress, underestimating the depth of sin and the need for supernatural redemption. The ongoing debate about the relationship between evangelism and social action, individual conversion and structural change, is the continuing legacy of the Social Gospel question.",
  },
  {
    title: "Praying &ldquo;Thy Kingdom Come&rdquo;",
    text: "The Lord&rsquo;s Prayer places the kingdom petition at the center of Christian prayer: &ldquo;Your kingdom come, your will be done, on earth as it is in heaven&rdquo; (Matt 6:10). This is not merely a passive wish for the future; it is an active engagement in the kingdom&rsquo;s present advance. To pray &ldquo;thy kingdom come&rdquo; is to align oneself with the purposes of God and to commit oneself to their embodiment. N.T. Wright has argued that this prayer should be understood as a commissioning: God&rsquo;s answer to &ldquo;thy kingdom come&rdquo; is often to send the pray-er as the agent of its coming &mdash; through acts of justice, mercy, reconciliation, and proclamation. The petition &ldquo;on earth as it is in heaven&rdquo; refuses the dualism that confines God&rsquo;s kingdom to a spiritual realm above. The earth matters; the bodies of the poor matter; the creation matters &mdash; because the kingdom is not an escape from earth but its redemption and renewal. To pray this prayer seriously is to be formed into a person who works for the things prayed for &mdash; justice, reconciliation, forgiveness, and the knowledge of God filling the earth as the waters cover the sea (Hab 2:14).",
  },
];

const videoItems = [
  { videoId: "oOH8CWJBwOY", title: "NT Wright on the Kingdom of God" },
  { videoId: "b8fOqSKqKUU", title: "Tim Keller on Kingdom Theology" },
  { videoId: "j_iHINM7-Gs", title: "George Ladd and the Already / Not Yet" },
];

function getTabColor(id: string): string {
  switch (id) {
    case "what": return GREEN;
    case "already": return GOLD;
    case "parables": return TEAL;
    case "church": return PURPLE;
    case "ethics": return BLUE;
    default: return MUTED;
  }
}

export default function ChristianKingdomOfGodGuidePage() {
  const [activeTab, setActiveTab] = useState("what");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Theology</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Kingdom of God Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 640 }}>
          The kingdom of God &mdash; the central theme of Jesus&rsquo;s preaching &mdash; its meaning, its present reality, its coming fullness, and what it means to live as kingdom people now.
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

        {/* TAB: What Is the Kingdom */}
        {activeTab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GREEN, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;The time has come. The kingdom of God has come near. Repent and believe the good news.&rdquo; &mdash; Mark 1:15. These are the first words of Jesus&rsquo;s public ministry.
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

        {/* TAB: Already and Not Yet */}
        {activeTab === "already" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GOLD + "18", border: `1px solid ${GOLD}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GOLD, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The kingdom has broken into history in Jesus&rsquo;s ministry (already) but awaits its consummation at his return (not yet). This tension is the shape of all Christian existence in the present age.
              </p>
            </div>
            {alreadyItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Parables of the Kingdom */}
        {activeTab === "parables" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: TEAL + "18", border: `1px solid ${TEAL}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: TEAL, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The kingdom parables of Matthew 13 are not allegories but analogies &mdash; each making one or a few main points about the nature, growth, and value of the kingdom of God.
              </p>
            </div>
            {parableItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Kingdom and Church */}
        {activeTab === "church" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The church is not the kingdom &mdash; but the church is the community of the kingdom: its sign, its instrument, and its foretaste in the present age.
              </p>
            </div>
            {churchItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Kingdom Ethics */}
        {activeTab === "ethics" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: BLUE + "18", border: `1px solid ${BLUE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: BLUE, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The Sermon on the Mount is not a new law to be kept by willpower. It is the portrait of the community the Spirit is forming &mdash; kingdom people living kingdom ethics in the already-not-yet.
              </p>
            </div>
            {ethicsItems.map((item, i) => (
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
