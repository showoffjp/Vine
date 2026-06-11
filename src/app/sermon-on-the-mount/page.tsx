"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState, useEffect, useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Color tokens ───────────────────────────────────────────────────────────
const BG     = "#07070F";
const CARD   = "#12121F";
const BORDER = "#1E1E32";
const TEXT   = "#F2F2F8";
const MUTED  = "#9898B3";
const GREEN  = "#3a7d56";
const GOLD   = "#D97706";
const PURPLE = "#6B4FBB";

// ─── Tab type ───────────────────────────────────────────────────────────────
type SotmTab =
  | "overview"
  | "beatitudes"
  | "law"
  | "piety"
  | "lordsprayer"
  | "anxiety"
  | "kingdom"
  | "journal"
  | "videos";

// ─── Journal entry type ──────────────────────────────────────────────────────
interface JEntry {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const BEATITUDES = [
  {
    ref: "5:3",
    beatitude: "Blessed are the poor in spirit",
    promise: "for theirs is the kingdom of heaven.",
    color: GREEN,
    content: `The Greek word ptochos ("poor") does not simply mean having modest income — it means utterly destitute, a beggar with nothing. The poor in spirit are those who recognize, before God, that they have absolutely nothing to bring to the table. No spiritual capital, no accumulated merit, no reservoir of religious achievement. This is the foundational beatitude: all the others rest on it. You cannot hunger for righteousness (v. 6) if you do not first know your poverty; you cannot be a peacemaker if you still trust your own strength to maintain peace. Dallas Willard observed that the Beatitude is not addressed to the financially poor as such — Jesus is describing a spiritual condition, a posture of absolute dependence on God. The announcement is stunning in its reversal: the one who has nothing is declared to own everything — "theirs is the kingdom of heaven." The present tense ("is," not "will be") underscores the immediacy: this is a kingdom already arrived, already theirs. The poor in spirit inherit the kingdom precisely because they are ready to receive it as gift rather than demand it as reward.`,
  },
  {
    ref: "5:4",
    beatitude: "Blessed are those who mourn",
    promise: "for they will be comforted.",
    color: PURPLE,
    content: `Mourning here carries the weight of genuine grief — the Greek penthountes is used for the sorrow of bereavement. In the Sermon's context it most naturally refers to mourning over sin: one's own sin, the brokenness of the world, the distance between what is and what God intended. This is not the melancholy of despair but the honest grief of those who take both God's holiness and human failure seriously. The prophets mourned over Israel's rebellion (Amos 5:16; Isa. 61:2-3). Isaiah 61 is the background Jesus is drawing on: "to comfort all who mourn" is the very commission of the Servant of the Lord. The promise — "they will be comforted" — uses the same divine passive (God is the agent) and future tense found throughout the beatitudes: these promises are not merely psychological reassurance but eschatological certainties. Paul writes that "godly sorrow produces repentance" (2 Cor. 7:10) — the mourning the Sermon blesses is precisely this productive, honest grief that turns to God rather than self-justification.`,
  },
  {
    ref: "5:5",
    beatitude: "Blessed are the meek",
    promise: "for they will inherit the earth.",
    color: GOLD,
    content: `Meekness is routinely misunderstood as weakness or passivity. The Greek praus was used in antiquity for a horse broken to the bridle — full power under control and at the disposition of the rider. Meekness in the biblical sense is strength held in submission to God. Moses was described as the meekest man on earth (Num. 12:3) — this is the man who confronted Pharaoh, managed a nation of complainers for forty years, and interceded for Israel when God threatened to destroy them. Jesus described himself as "gentle and humble in heart" (Matt. 11:29) using the same word. The promise — inheriting the earth — is drawn directly from Psalm 37:11, which insists that those who trust God rather than seizing outcomes by force will receive what they await. The meek inherit the earth not because they are passive but because they refuse to grasp it on their own terms, and so they are trusted with it on God's terms.`,
  },
  {
    ref: "5:6",
    beatitude: "Blessed are those who hunger and thirst for righteousness",
    promise: "for they will be filled.",
    color: GREEN,
    content: `Hunger and thirst in the ancient world were not metaphors for mild interest — they were the most urgent physical drives a person could experience, the sensations of approaching death. Jesus uses the most intense possible language for longing: the kingdom person's desire for righteousness is not a hobby but a consuming need. The righteousness in view is both forensic (right standing before God) and transformational (right character and conduct). It is also, in Matthew's Gospel, profoundly social: righteousness is the justice the prophets cried for, the situation where the vulnerable are protected and the powerful are held accountable. The promise is the passive "will be filled" — again, God is the one who fills. This beatitude connects forward to Matthew 6:33 ("seek first his kingdom and his righteousness") as the sermon's central organizing principle: the one who hungers for righteousness above everything else is the one the entire Sermon is describing.`,
  },
  {
    ref: "5:7",
    beatitude: "Blessed are the merciful",
    promise: "for they will receive mercy.",
    color: PURPLE,
    content: `Mercy in both Hebrew (hesed) and Greek (eleos) carries the sense of covenant loyalty and compassionate action toward the needy. This beatitude sits at the center of the eight, and its principle — the connection between mercy given and mercy received — echoes throughout the Sermon (6:14-15: "forgive and you will be forgiven") and throughout Matthew's Gospel (18:21-35, the parable of the unmerciful servant). The "blessed are the merciful" does not teach that we earn mercy by being merciful. Rather, it describes the spiritual reality that those who have truly received God's mercy cannot remain unmerciful — and those who withhold mercy from others reveal that they have not truly grasped the mercy they have received. Mercy is the outflow of the prior beatitudes: the poor in spirit, the mourner, the meek all know their need — and those who know their own need become capable of extending compassion to others in need.`,
  },
  {
    ref: "5:8",
    beatitude: "Blessed are the pure in heart",
    promise: "for they will see God.",
    color: GOLD,
    content: `The "heart" in Hebrew thought (lev) is not the seat of emotion but the command center of the person: will, mind, and motive together. A pure heart is an undivided heart — one not split between serving God and serving something else, one whose motivation is not performance for human approval. The connection to the Sermon is direct: Jesus will repeatedly warn against religious practices performed for human audience (6:1-18). The pure in heart do everything before God alone. Augustine connected this beatitude to the beatific vision — seeing God is the highest human end, and it belongs only to those whose vision is unclouded by idolatry and divided loyalty. The OT background is Psalm 24:4: "He who has clean hands and a pure heart... shall receive blessing from the LORD." David's prayer in Psalm 51:10 — "create in me a pure heart, O God" — shows that purity of heart is not achieved by willpower but is a divine gift to those who ask for it.`,
  },
  {
    ref: "5:9",
    beatitude: "Blessed are the peacemakers",
    promise: "for they will be called children of God.",
    color: GREEN,
    content: `The word is peacemakers (eirēnopoioi) — not peacekeepers. Peacekeeping avoids conflict; peacemaking actively works to establish right relationship where it has been broken. The Hebrew shalom behind the Greek eirene is not mere absence of conflict but the comprehensive well-being of rightly ordered relationships — with God, with neighbors, within oneself, with creation. Peacemakers are those who work to bring about this shalom, and in doing so they act like God himself, who through Christ "reconciled all things to himself" (Col. 1:20). The promise — "they will be called children of God" — is not a reward of adoption but a recognition of resemblance. They are called God's children because they act like him: they are peace-making people because they belong to the peace-making God. In the Sermon's context, this beatitude connects directly to the later commands to reconcile with a brother before offering worship (5:23-24) and to love enemies (5:44).`,
  },
  {
    ref: "5:10-12",
    beatitude: "Blessed are those who are persecuted for righteousness",
    promise: "for theirs is the kingdom of heaven.",
    color: PURPLE,
    content: `The eighth beatitude returns to the present tense ("theirs is the kingdom") that opened the first beatitude, forming a literary bracket around all eight: the kingdom belongs to the poor in spirit and to those persecuted for righteousness. Jesus expands this final beatitude most fully (vv. 11-12) because it is the one that will challenge his disciples most concretely. The persecuted are blessed not because suffering is intrinsically good but because it marks their alignment with the prophets who went before them, with Jesus himself (who will be crucified), and with the Father's own purposes. The exhortation "rejoice and be glad" is not a demand for emotional masochism but an invitation to see persecution in its eschatological light: those who are opposed for righteousness' sake are in the lineage of the prophets, and their reward is sure. This beatitude warns the hearer from the opening pages of the Sermon that kingdom life is not a prosperity program — it leads through the cross, not around it.`,
  },
];

const ANTITHESES = [
  {
    title: "Murder and Anger",
    ref: "5:21-26",
    you_heard: "Do not murder, and anyone who murders will be subject to judgment.",
    but_i_say: "Anyone who is angry with a brother or sister will be subject to judgment.",
    content: `Jesus does not abolish the prohibition on murder — he exposes its root. The outward act of killing begins in an interior act of dehumanizing the other person. The Greek orgizomenos ("angry") here refers not to a momentary flash of feeling but to a settled harboring of contempt. The words Jesus prohibits — "Raca" (empty-head) and "fool" (moron) — are words that dismiss the humanity of the other, that reduce a person made in the image of God to a non-entity. The kingdom standard is not simply keeping your hands clean but refusing the contempt that, if unchecked, produces violence. The practical application is immediate: before worship, reconcile. "Leave your gift there in front of the altar" (5:24) — liturgy cannot substitute for broken relationship. This is among the most demanding of the antitheses precisely because we typically hold anger without considering it in the same category as violence.`,
  },
  {
    title: "Adultery and Lust",
    ref: "5:27-30",
    you_heard: "Do not commit adultery.",
    but_i_say: "Anyone who looks at a woman lustfully has already committed adultery with her in his heart.",
    content: `The second antithesis moves the standard of sexual integrity from behavior to attention. The "look" Jesus prohibits (ho blepon... pros to epithumēsai) is the sustained, purposeful gaze cultivated to feed desire — not the involuntary noticing of attraction. Jesus recognizes the difference between temptation and sin: what he prohibits is the choice to entertain and cultivate the desire. The hyperbolic language about the eye and hand (5:29-30) — "gouge it out," "cut it off" — is deliberate shock: Jesus is not prescribing self-mutilation but using the most vivid possible language to make the point that no sacrifice is too great to avoid the destruction of the soul. The scandal of Jesus's teaching here was not its severity but its democratization: sexual sin was not only committed by those who acted outwardly. The inner life carries the same moral weight as the outer act.`,
  },
  {
    title: "Divorce",
    ref: "5:31-32",
    you_heard: "Anyone who divorces his wife must give her a certificate of divorce.",
    but_i_say: "Anyone who divorces his wife, except for sexual immorality, causes her to become an adulteress.",
    content: `The Mosaic certificate of divorce (Deut. 24:1-4) was in Jesus's day debated between two rabbinic schools: Shammai allowed divorce only for sexual immorality; Hillel allowed it for nearly any displeasure. Jesus's position aligns more closely with Shammai but goes deeper: the certificate of divorce was a concession to human hard-heartedness (Matt. 19:8), not a positive endorsement of the practice. The concern in 5:31-32 is for the woman: in a first-century context, a divorced woman had extremely limited social and economic options and was profoundly vulnerable. Jesus's teaching protects her by refusing to make her dismissal easy for a husband with a trivial complaint. This antithesis must be read in canonical context: Matthew 19:3-9 provides the fuller discussion, and throughout the NT grace and forgiveness are available for all who have experienced the failure of a marriage.`,
  },
  {
    title: "Oaths",
    ref: "5:33-37",
    you_heard: "Do not break your oath, but fulfill to the Lord the vows you have made.",
    but_i_say: "Do not swear an oath at all... Simply let your 'Yes' be 'Yes,' and your 'No,' 'No.'",
    content: `The rabbinic tradition had developed an elaborate system of oaths sworn by heaven, earth, Jerusalem, and one's own head — some binding and some not, depending on the formula used. This system was, at its root, a device for managing truthfulness: it implied that ordinary speech was not fully binding, that only the formalized oath carried the full weight of commitment. Jesus cuts through the entire structure: the kingdom person's word is simply their word. "Let your yes be yes" is not a prohibition on legal oaths in civil courts (Paul swore by God, Rom. 1:9; God himself swears by his own name in Hebrews) but a description of the character of those whose integrity requires no supplementary formula. The vision is a community where trust is so foundational that oath-swearing is unnecessary.`,
  },
  {
    title: "Retaliation",
    ref: "5:38-42",
    you_heard: "An eye for an eye and a tooth for a tooth.",
    but_i_say: "Do not resist an evil person. If anyone slaps you on the right cheek, turn to them the other cheek also.",
    content: `The lex talionis ("eye for eye") was not a license for revenge — it was a limitation on retaliation, ensuring that punishment matched the offense and prevented escalating cycles of vengeance. Jesus moves beyond limiting retaliation to transcending it entirely. The "turn the other cheek" must be read in its social context: a slap on the right cheek (from a right-handed person) was a backhanded slap — a gesture of insult, not a punch thrown in a fight. Jesus is not teaching passivity in the face of violence but a response that refuses to be drawn into the cycle of retaliation, a response that retains dignity and agency. Walter Wink's analysis is instructive: each of Jesus's examples (cloak, going the second mile) is a creative act of non-compliance that refuses both violent resistance and passive victimhood. This is not naivety but a third way.`,
  },
  {
    title: "Love Your Enemies",
    ref: "5:43-48",
    you_heard: "Love your neighbor and hate your enemy.",
    but_i_say: "Love your enemies and pray for those who persecute you.",
    content: `The sixth antithesis is the climax of the entire section and arguably the most radical command in the entire New Testament. "Hate your enemy" is not a direct OT quotation — it reflects certain strands of sectarian practice (the Qumran community explicitly taught hatred of the sons of darkness). Jesus not only expands the definition of neighbor (as in the parable of the Good Samaritan, Luke 10) but extends the demand to those actively hostile. The motivation is theological: "that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous" (5:45). God's love is not conditioned on the worthiness of the recipient — and God's children are called to reflect this character. The closing standard — "be perfect as your heavenly Father is perfect" (5:48) — uses teleios, meaning complete or whole, not sinlessly flawless. The perfection in view is the completeness of love: loving without exception, as God loves without exception.`,
  },
];

const LORD_PRAYER_LINES = [
  {
    phrase: "Our Father in heaven",
    type: "Address",
    color: GREEN,
    content: `The address of the Lord's Prayer holds a creative tension that defines its entire theology: "Father" (pater — or in Jesus's Aramaic, Abba, a term of intimacy used within a family) alongside "in heaven" (the realm of divine transcendence and holiness). Neither half of this address can be separated from the other without distorting the prayer. "Our Father" alone risks a sentimental deity who is simply a resource for our needs. "In heaven" alone risks a distant deity who demands religious performance. Together they hold intimacy and transcendence, nearness and awe, relationship and reverence. The word "Our" is also significant: this is a communal prayer. Even when prayed in private, it is prayed as a member of the community of disciples. "My Father" exists within "Our Father."`,
  },
  {
    phrase: "Hallowed be your name",
    type: "1st Petition",
    color: PURPLE,
    content: `The first petition is God-directed and places the posture of the entire prayer at the feet of God's own honor. To "hallow" the name (hagiasthētō to onoma sou) means to treat it as holy, to give it the reverence it deserves — and in the OT tradition, a name is not merely a label but a person's character and reputation. "Your name" = who you truly are. The petition is therefore a request that God's character be honored, acknowledged, and reflected in the world. It is eschatological (a longing for the day when all creation acknowledges God) and also present-tense (a commitment to hallow that name in how the one praying lives). It also establishes the order of all true prayer: before we bring our needs, we orient ourselves toward God's purposes and God's glory.`,
  },
  {
    phrase: "Your kingdom come, your will be done on earth as it is in heaven",
    type: "2nd & 3rd Petitions",
    color: GOLD,
    content: `These two petitions are most naturally read as parallel — the coming of the kingdom and the doing of God's will describe the same reality from different angles. "Kingdom" (basileia) in Jewish apocalyptic thought referred to the active reign of God — not a geographical location but a dynamic event, God's sovereignty becoming visible and effective in the world. "On earth as it is in heaven" is the petition's most radical clause: heaven (where God's will is already perfectly enacted by the angels) should become the template for earth's reality. This is not a prayer of escapism — it is a prayer for transformation. It is also a prayer of self-commitment: to pray "your will be done" is to surrender one's own agenda, as Jesus himself prayed in Gethsemane ("not my will but yours," Matt. 26:39) using language that directly echoes this petition.`,
  },
  {
    phrase: "Give us today our daily bread",
    type: "4th Petition",
    color: GREEN,
    content: `The petition turns to human need — but the turn is carefully staged. Three God-centered petitions precede the human-centered ones, establishing the proper context: we come to our needs only after we have oriented ourselves toward God. "Daily bread" (arton epiousion) carries the echo of the manna in Exodus 16: God provided exactly enough for each day, and Israel was instructed not to hoard. The Greek word epiousion is found almost nowhere in ancient Greek literature outside this prayer — it may mean "for today," "for tomorrow," or "for sustenance." The prayer is for sufficiency, not abundance: enough for today. This is the anti-anxiety petition, connecting forward to Matthew 6:25-34. The prayer for bread is also a prayer of dependence — an acknowledgment that the provision of basic sustenance is ultimately in God's hands, even when it comes through ordinary means.`,
  },
  {
    phrase: "Forgive us our debts as we also have forgiven our debtors",
    type: "5th Petition",
    color: PURPLE,
    content: `The fifth petition is the only one with a qualifying clause appended to it — and the Sermon will immediately return to it in 6:14-15 as the most critical of the human-need petitions. The language "debts" (opheilēmata — Luke uses "sins") reflects the Jewish metaphor of sin as something owed that cannot be repaid. The connection between receiving forgiveness and extending forgiveness is not a merit transaction (we don't earn God's forgiveness by forgiving others) but a spiritual reality: those who have truly grasped the magnitude of what God has forgiven them are transformed by that encounter and become capable of extending forgiveness. Those who remain incapable of forgiving reveal that they have not yet truly encountered the grace they are asking for. This petition stands behind the parable of the unmerciful servant (Matt. 18:21-35) as its interpretive key.`,
  },
  {
    phrase: "And lead us not into temptation, but deliver us from the evil one",
    type: "6th Petition",
    color: GOLD,
    content: `The Greek peirasmos can be translated "trial," "test," or "temptation" — the word covers the full range from moral temptation to catastrophic ordeal. The petition is not suggesting that God might otherwise lead us into sin (James 1:13 is clear: God does not tempt anyone). Rather, it is the prayer of those who know their own fragility: "Do not allow us to enter into the kind of situation in which we will be overwhelmed." The petition connects to Jesus's own prayer in Gethsemane (26:41: "pray that you will not fall into temptation") and looks ahead to the persecution the disciples will face. "Deliver us from the evil one" (apo tou ponērou — can also be "from evil") adds a cosmic dimension: the prayer recognizes that the struggle is not only against personal weakness but against a spiritual adversary. The petition is an act of humility: an acknowledgment that we need divine preservation, not merely divine assistance.`,
  },
  {
    phrase: "For yours is the kingdom, the power and the glory, forever. Amen.",
    type: "Doxology",
    color: GREEN,
    content: `The doxology does not appear in the oldest Greek manuscripts of Matthew 6 and is absent from Luke's version of the prayer entirely. It appears to have entered the tradition early from liturgical use — perhaps from 1 Chronicles 29:11 ("Yours, Lord, is the greatness and the power and the glory and the majesty and the splendor"). Its absence from the earliest manuscripts does not make it wrong — it is entirely fitting as a close, returning from the requests back to the orientation with which the prayer began. The prayer opens by addressing the transcendent Father and ends by returning all kingdom, power, and glory to him. This is the shape of genuine prayer: it begins with God, moves through our needs in his light, and returns to him.`,
  },
];

const ANXIETY_SECTIONS = [
  {
    title: "Two Masters",
    ref: "6:19-24",
    color: GREEN,
    content: `Jesus opens the anti-anxiety section not with reassurance but with a reorientation of desire. "Do not store up treasures on earth" (6:19) — the Greek thesaurizete is a present imperative negated, meaning "stop the ongoing practice." Earth's treasures are vulnerable by their nature: moth and rust destroy, thieves break in and steal. Heavenly treasure (acts of generosity, righteousness, love) cannot be touched by the agents of decay. The "eye" saying in 6:22-23 (the lamp of the body) connects what you see with what fills you: an eye focused on God ("good" / haplous, literally "single, generous") admits light; an eye divided between God and wealth is blind. The climax is 6:24: "No one can serve two masters." The Greek word is douleuein — to be a slave to, to be in complete ownership of. The argument is not that money is evil but that money as lord is incompatible with God as Lord. Anxiety about provision, Jesus will argue, is often the symptom of this divided allegiance.`,
  },
  {
    title: "The Birds and the Flowers",
    ref: "6:25-30",
    color: GOLD,
    content: `The two nature illustrations — birds of the air (6:26) and lilies of the field (6:27-29) — are not simply pastoral pleasantries. They are theological arguments from the lesser to the greater (qal wa-homer in rabbinic logic). If God feeds birds, who neither sow nor reap nor store in barns, how much more will he feed those made in his image? If God clothes the grass — which exists for a single day and is then thrown into the fire — how much more will he clothe those he has redeemed? Jesus is not arguing that provision will always be abundant or that suffering does not exist. He is arguing about the character of God: the God revealed in creation's provision is reliable, generous, and attentive to his creatures' needs. The rhetorical question "Who by worrying can add a single hour to his life?" (6:27) is not a taunt but a gentle reduction to absurdity: worry does not affect the outcome but it does consume the present.`,
  },
  {
    title: "Seek First the Kingdom",
    ref: "6:31-34",
    color: PURPLE,
    content: `The resolution to the anxiety section is not a technique but a reorientation: "But seek first his kingdom and his righteousness" (6:33). The contrast is between the nations (the Gentiles) who run after food and clothing as their ultimate concern, and disciples who have a different first principle. This does not mean disciples ignore practical necessities — it means they are not dominated by them. When kingdom priorities occupy the first position, everything else "will be given to you as well" — not in a prosperity-gospel sense of automatic material abundance but in the sense that the person whose ordering is right finds that provision follows. The final verse (6:34) is among Jesus's most practical: "each day has enough trouble of its own." Anxiety about tomorrow colonizes today with suffering that has not yet arrived. The kingdom antidote to anxiety is not optimism or willpower but the discipline of living fully within the present day, trusting the Father with the next.`,
  },
];

const KINGDOM_SECTIONS = [
  {
    title: "The Narrow Gate and Two Ways",
    ref: "7:13-14",
    color: GREEN,
    content: `"Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it." The two-ways motif is ancient in Jewish wisdom literature (Ps. 1; Deut. 30:15-20) — life and death, the way of the righteous and the way of the wicked. Jesus reframes the motif around his own teaching: the narrow gate is not mere moral strenuousness but the difficult entry into kingdom life as the Sermon has described it. It is "narrow" because it requires the abandonment of self-sufficiency and the willing embrace of everything the Beatitudes describe. Many prefer the wide road not because they are consciously evil but because they want the benefits of the kingdom without its demands. The Sermon's audience-response question is framed in this image: which gate are you heading for?`,
  },
  {
    title: "False Prophets",
    ref: "7:15-23",
    color: PURPLE,
    content: `The warning against false prophets (7:15-20) uses the image of fruit: trees are identified by what they produce, not by their claim to be a particular kind of tree. A teacher or leader's authenticity is not assessed by the impressiveness of their ministry or the power of their speech but by the quality of life their ministry produces. The most alarming verses in the entire Sermon are 7:21-23: "Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name and in your name drive out demons and in your name perform many miracles?' Then I will tell them plainly, 'I never knew you. Away from me, you evildoers!'" Remarkable activity in Jesus's name — even genuine miraculous activity — is no guarantee of authentic relationship. The criterion of judgment is not success or spiritual power but "doing the will of my Father in heaven." The Sermon is relentlessly concerned with authenticity over performance.`,
  },
  {
    title: "The Wise and Foolish Builder",
    ref: "7:24-27",
    color: GOLD,
    content: `The concluding parable is the Sermon's call to response. Every person who hears Jesus's words chooses — consciously or by default — which foundation to build on. The rock is not a creed accepted or a conversion experience claimed: it is "hearing these words of mine and putting them into practice." The foolish builder also hears the words — and does nothing with them. The storm (rain, floods, wind — all three elements) comes to both houses. The difference in outcome is not the quality of the storm but the quality of the foundation. This parable is a final, urgent warning against the possibility of religious engagement with the Sermon that produces no behavioral transformation — of admiring the Sermon on the Mount without being shaped by it. The reaction of the crowds (7:28-29) — "astonished at his teaching, because he taught as one who had authority" — marks the Sermon's impact but does not itself constitute the response Jesus called for.`,
  },
];

const SCHOLARS = [
  {
    id: "stott-jrw",
    name: "John R.W. Stott",
    era: "1921-2011",
    context: "The Message of the Sermon on the Mount (1978) — the defining evangelical exposition",
    bio: "John Stott's The Message of the Sermon on the Mount remains the most widely read evangelical commentary on the Sermon — precise, pastoral, and theologically grounded. Stott argued that the Sermon describes the character of subjects of the kingdom of God: not a program for earning salvation but a portrait of those who have received it. He wrote against both antinomian dismissals of the Sermon's demands and perfectionist over-readings. His treatment of the Beatitudes as a description of kingdom character (rather than entry requirements) became the standard evangelical framework. Stott's clear, accessible prose made the Sermon's demands both audible and livable to a generation of evangelical readers.",
    quote: "The Beatitudes describe the ideal citizen of the kingdom of God. They portray what every Christian is and should be, not what only some Christians are.",
    contribution: "The Message of the Sermon on the Mount set the terms for evangelical interpretation for two generations. Its structure — carefully exegetical, contextually sensitive, and directly applicational — influenced how evangelical preachers worldwide approach Matthew 5-7.",
    color: GREEN,
  },
  {
    id: "willard-dc",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "The Divine Conspiracy (1998) — reframes the Sermon as a description of kingdom life available now",
    bio: "Dallas Willard's The Divine Conspiracy is the most important late-20th-century treatment of the Sermon on the Mount in evangelical circles. Willard argued that the Sermon has been domesticated — either dismissed as unreachable idealism or reduced to interior attitudes without behavioral consequence. His central claim: Jesus is offering an actual description of what human life looks like when the Kingdom of the Heavens has truly taken hold of a person. The Beatitudes are not commands to achieve but declarations about those who belong to the kingdom. The antitheses are not harder laws but descriptions of life lived from the inside out. Willard recovered the Sermon as practical, daily guide rather than impossible ideal.",
    quote: "The Sermon on the Mount is not a list of requirements for the righteous life but a description of what the righteous life actually looks like when God has moved into a person's life.",
    contribution: "The Divine Conspiracy catalyzed the spiritual formation movement within evangelicalism. Willard's reading gave the Sermon back to ordinary Christians as a practical guide to kingdom living — not a moral ceiling to despair under but a picture of transformation available through discipleship.",
    color: PURPLE,
  },
  {
    id: "lloyd-jones",
    name: "D. Martyn Lloyd-Jones",
    era: "1899-1981",
    context: "Studies in the Sermon on the Mount (1959-60) — 2-volume Reformed exposition",
    bio: "Lloyd-Jones preached through the Sermon on the Mount over two years at Westminster Chapel, London. The resulting two volumes are among the most thorough Reformed expositions of Matthew 5-7 ever produced. Against Luther's 'impossible ideal' reading, Lloyd-Jones argued that the Sermon is addressed to Christians and describes genuine Christian character — made possible not by human effort but by the regenerating work of the Holy Spirit. His treatment of the Beatitudes is especially celebrated: eight marks of the Christian who has truly seen himself and his need before God.",
    quote: "The Sermon on the Mount is addressed to Christians. It is not primarily an appeal to the unconverted. It is describing what every Christian is and is meant to be.",
    contribution: "Studies in the Sermon on the Mount remains the standard Reformed pastoral commentary on the text. Its influence on British and American Reformed preaching was enormous, establishing the reading that the Sermon describes actual attainable Christian character under the Spirit.",
    color: GOLD,
  },
  {
    id: "wright-nt",
    name: "N.T. Wright",
    era: "b. 1948",
    context: "Matthew for Everyone (2002); After You Believe (2010) — virtue ethics reading of the Sermon",
    bio: "N.T. Wright approaches the Sermon through virtue ethics and the Kingdom of God. In After You Believe, Wright argues that the Beatitudes describe the habits and character of those being fitted for eventual resurrection life — not arbitrary moral demands but the shape of genuine human flourishing. His reading emphasizes the eschatological context: these are not just descriptions of present Christian life but the formation of the character required for the coming kingdom. Wright also stresses the deeply Jewish roots of the Sermon, seeing Jesus as renewing Israel's vocation for the sake of the whole world.",
    quote: "The Beatitudes describe people who are going to inherit the earth; that is, they describe the character of those who are being shaped for eventual resurrection life and new creation.",
    contribution: "Wright's reading gave the Sermon an eschatological and virtue-ethical dimension that earlier evangelical readings often missed. His emphasis on character formation rather than law-code has significantly influenced younger evangelical scholars and preachers.",
    color: GREEN,
  },
  {
    id: "augustine-sm",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "De Sermone Domini in Monte (c. 394) — the earliest systematic Christian commentary on the Sermon",
    bio: "Augustine's On the Lord's Sermon on the Mount (c. 394) is the earliest comprehensive Christian commentary on Matthew 5-7, written when he was a newly ordained priest. Augustine read the Sermon Christologically — the Beatitudes correspond to the seven gifts of the Holy Spirit in Isaiah 11, and each stage of the Sermon deepens the soul's movement toward God. He was especially influential on the church's interpretation of 'Blessed are the pure in heart, for they will see God' — connecting the Sermon's ethics to the beatific vision, the soul's ultimate end. His reading dominated Western interpretation for over a millennium.",
    quote: "The whole pattern of Christian life is presented in this Sermon. It is the perfect standard of the Christian life, compared to which nothing more perfect can be found.",
    contribution: "Augustine's commentary established the interpretive framework for the Sermon in Western Christianity for a thousand years. His connection of the Beatitudes to the gifts of the Spirit, and his reading of the Sermon as a path toward the beatific vision, shaped Catholic moral theology and influenced Protestant readings even after the Reformation.",
    color: PURPLE,
  },
];

const JOURNAL_PROMPTS = [
  "Which beatitude most describes where you are right now — or where you want to be?",
  "Which antithesis (murder/anger, adultery/lust, retaliation, etc.) challenges you most inwardly this week?",
  "What would it mean for you to 'seek first the kingdom' in this season of your life?",
  "Where are you building on rock, and where on sand?",
  "Is there a debt of forgiveness you are withholding from someone? What does the Lord's Prayer ask of you?",
  "Where does anxiety most grip you? What does Jesus say to that specific fear in Matthew 6?",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionHeader({ color, ref: refText, title }: { color: string; ref: string; title: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, flexWrap: "wrap", gap: 8 }}>
      <h2 style={{ color, fontWeight: 900, fontSize: 26, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{refText}</span>
    </div>
  );
}

function Callout({ color, label, children }: { color: string; label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 10, padding: "14px 18px", marginBottom: 18 }}>
      <div style={{ color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
      <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}

function VerseBlock({ ref: refText, text, color = GREEN }: { ref: string; text: string; color?: string }) {
  return (
    <div style={{ background: `${color}06`, border: `1px solid ${color}18`, borderRadius: 8, padding: "12px 16px", display: "flex", gap: 12, marginBottom: 10 }}>
      <span style={{ color, fontWeight: 800, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>{refText}</span>
      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{text}</p>
    </div>
  );
}

function Accordion({ title, subtitle, color, children, open, onToggle }: {
  title: string;
  subtitle?: string;
  color: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ border: `1px solid ${open ? color : BORDER}`, borderRadius: 10, overflow: "hidden", marginBottom: 8, transition: "border-color 0.2s" }}>
      <button
        type="button"
        onClick={onToggle}
        style={{ width: "100%", background: open ? `${color}12` : CARD, border: "none", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: 12 }}
      >
        <div style={{ textAlign: "left" }}>
          <div style={{ color: open ? color : TEXT, fontWeight: 700, fontSize: 15 }}>{title}</div>
          {subtitle && <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{subtitle}</div>}
        </div>
        <span style={{ color: open ? color : MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
      </button>
      {open && (
        <div style={{ background: BG, padding: "18px 20px", borderTop: `1px solid ${color}20` }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SermonOnTheMountPage() {
  const [activeTab, setActiveTab] = usePersistedState<SotmTab>("vine_sermon-on-the-mount_tab", "overview");
  const [selectedScholar, setSelectedScholar] = usePersistedState("vine_sermon-on-the-mount_selected_scholar", "stott-jrw");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Journal state
  const [journalEntries, setJournalEntries] = useState<JEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("vine_sotm_journal") ?? "[]");
    } catch {
      return [];
    }
  });
  const [jVerse, setJVerse] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jPrayer, setJPrayer] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("vine_sotm_journal", JSON.stringify(journalEntries));
    } catch {}
  }, [journalEntries]);

  const saveJournalEntry = useCallback(() => {
    if (!jVerse.trim() && !jReflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      verse: jVerse,
      reflection: jReflection,
      prayer: jPrayer,
    };
    setJournalEntries(prev => [entry, ...prev]);
    setJVerse("");
    setJReflection("");
    setJPrayer("");
  }, [jVerse, jReflection, jPrayer]);

  function deleteJournalEntry(id: string) {
    setJournalEntries(prev => prev.filter(e => e.id !== id));
  }

  function toggleAccordion(id: string) {
    setOpenAccordion(prev => (prev === id ? null : id));
  }

  const scholarItem = SCHOLARS.find(s => s.id === selectedScholar) ?? SCHOLARS[0];

  const TABS: { id: SotmTab; label: string; icon: string }[] = [
    { id: "overview",    label: "Overview",      icon: "⛰️" },
    { id: "beatitudes",  label: "Beatitudes",    icon: "✦" },
    { id: "law",         label: "Law Fulfilled",  icon: "⚖️" },
    { id: "piety",       label: "Piety",         icon: "🙏" },
    { id: "lordsprayer", label: "Lord's Prayer",  icon: "✝" },
    { id: "anxiety",     label: "Don't Worry",   icon: "🕊️" },
    { id: "kingdom",     label: "Kingdom",       icon: "🏰" },
    { id: "journal",     label: "Journal",       icon: "📓" },
    { id: "videos",      label: "Videos",        icon: "▶" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <main>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>⛰️</div>
              <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.02em" }}>
                The Sermon on the Mount
              </h1>
              <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.8 }}>
                Matthew 5–7 is the longest recorded teaching of Jesus — the constitution of the kingdom. It opens with blessing and closes with a question: on what foundation are you building?
              </p>
              <div style={{ display: "inline-block", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 20, padding: "8px 20px", color: GREEN, fontSize: 14, fontWeight: 700 }}>
                Matthew 5:3 – 7:29
              </div>
            </div>

            {/* ── Tab bar ──────────────────────────────────────────────────── */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 6, marginBottom: 32, display: "flex", flexWrap: "wrap", gap: 4 }}>
              {TABS.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => { setActiveTab(t.id); setOpenAccordion(null); }}
                  style={{
                    flex: "1 1 auto",
                    padding: "9px 10px",
                    borderRadius: 8,
                    border: "none",
                    background: activeTab === t.id ? PURPLE : "transparent",
                    color: activeTab === t.id ? "#fff" : MUTED,
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>

            {/* ════════════════════════════════════════════════════════════════
                TAB: OVERVIEW
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "overview" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 30px", marginBottom: 20 }}>
                  <SectionHeader color={GREEN} ref="Matthew 5–7" title="The Constitution of the Kingdom" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
                    The Sermon on the Mount was delivered on a hillside in Galilee, early in Jesus's public ministry. Matthew records it as the first of five great discourses in his Gospel (5–7; 10; 13; 18; 23–25), a structure that deliberately evokes the five books of Moses. Jesus sits to teach — the posture of a rabbi — and the disciples come to him, while the crowd listens from behind. The Sermon is simultaneously addressed to disciples (those who have begun to follow) and overheard by the world.
                  </p>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
                    The setting matters: a hillside echoes Sinai. Moses received the law on a mountain; Jesus gives the law's fulfillment on a mountain. The audience hears the echo. But where Moses descended with commandments written in stone, Jesus speaks as one who has authority in himself — "You have heard... but I say to you." This is not the voice of a prophet transmitting a word from outside himself. This is the voice of the Lawgiver.
                  </p>
                  <Callout color={GOLD} label="Key Verse">
                    &ldquo;But seek first his kingdom and his righteousness, and all these things will be given to you as well.&rdquo; — Matthew 6:33
                  </Callout>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 0 }}>
                    The Sermon opens with blessing (the Beatitudes, 5:3-12) and closes with a parable about building: the man who hears and does builds on rock; the man who hears and does not builds on sand. The Sermon demands response, not merely admiration. It is not primarily a set of ethical ideals to respect from a distance — it is a call to genuine transformation.
                  </p>
                </div>

                {/* Structure */}
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Structure of the Sermon</h3>
                  {[
                    { ref: "5:3-12",  label: "The Beatitudes",           desc: "Eight kingdom announcements — the character of those who belong to God's reign", color: GREEN },
                    { ref: "5:13-16", label: "Salt and Light",            desc: "The identity and calling of kingdom people: transformative presence in the world", color: GOLD },
                    { ref: "5:17-20", label: "The Law Fulfilled",         desc: "Not abolition but fulfillment — a righteousness exceeding that of the Pharisees", color: PURPLE },
                    { ref: "5:21-48", label: "The Six Antitheses",        desc: "Six deepenings of Torah: anger, lust, divorce, oaths, retaliation, love of enemies", color: GREEN },
                    { ref: "6:1-18",  label: "Three Acts of Piety",       desc: "Giving, prayer, and fasting practiced before God, not for human audience", color: GOLD },
                    { ref: "6:19-34", label: "Treasure, Masters, Anxiety", desc: "Kingdom economics: where your heart is, who you serve, why anxiety is answered by trust", color: PURPLE },
                    { ref: "7:1-12",  label: "Relationships",             desc: "Judge not hypocritically; ask-seek-knock; do to others what you would have them do to you", color: GREEN },
                    { ref: "7:13-27", label: "The Two Ways",              desc: "Narrow vs. broad gate; false prophets; 'Lord, Lord'; wise and foolish builders", color: GOLD },
                  ].map(item => (
                    <div key={item.ref} style={{ display: "flex", gap: 14, padding: "11px 0", borderBottom: `1px solid ${BORDER}` }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 12, width: 56, flexShrink: 0, paddingTop: 3 }}>{item.ref}</span>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.label}</div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interpretations */}
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 6 }}>How Has the Sermon Been Interpreted?</h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>
                    How you interpret the Sermon on the Mount determines whether it functions as law, mirror, program, or portrait.
                  </p>
                  {[
                    { view: "Interim Ethic (Schweitzer)", color: "#EF4444", desc: "Jesus expected the end of the world imminently. The Sermon is a radical ethic for a short crisis period — not for normal life. Once the end did not come, this framework collapsed. Most scholars reject it as historically inadequate." },
                    { view: "Impossible Ideal (Luther)", color: GOLD, desc: "The Sermon presents a standard impossible to meet — its purpose is to drive us to recognize our sinfulness and trust in Christ's righteousness. The Sermon is not a program for behavior but a mirror for self-knowledge. Criticized for separating salvation from ethics too sharply." },
                    { view: "Dispensational (Scofield)", color: PURPLE, desc: "The Sermon applies to the future millennial kingdom, not the present church age. Jesus was offering the kingdom to Israel; when rejected, the kingdom was postponed. Most evangelicals no longer hold this view." },
                    { view: "Kingdom Ethic for Now (Stott, Willard, Wright)", color: GREEN, desc: "The Sermon describes how life in the kingdom of God actually looks — not as an impossible ideal or future program but as the real character of those indwelt by the Spirit. It is demanding but not impossible, especially as the community embodies it together. The majority evangelical view." },
                  ].map((item, i) => (
                    <div key={i} style={{ background: BG, border: `1px solid ${item.color}25`, borderRadius: 10, padding: "14px 18px", marginBottom: 10 }}>
                      <div style={{ color: item.color, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{item.view}</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: BEATITUDES
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "beatitudes" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={GREEN} ref="Matthew 5:3-12" title="The Beatitudes" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                    The eight Beatitudes open the Sermon not with commands but with declarations — &ldquo;Blessed are...&rdquo; The Greek makarios is often translated &ldquo;blessed&rdquo; or &ldquo;happy,&rdquo; but it carries a divine weight: these are not wishes for happiness but royal announcements about those who belong to the king. The Beatitudes are not a ladder to climb but a portrait of the person who has already come under God&apos;s reign.
                  </p>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                    The eight Beatitudes form a complete unit. The first and the last both promise &ldquo;the kingdom of heaven&rdquo; in the present tense, forming a literary bracket (inclusio) around the whole. Together they describe a single coherent character: the person who has abandoned self-sufficiency and placed everything on God. Each beatitude is, in a different key, the same music.
                  </p>
                  <Callout color={GREEN} label="Luke's Parallel">
                    Luke 6:20-26 contains four beatitudes (blessing the poor, hungry, weeping, and persecuted) alongside four corresponding woes (to the rich, satisfied, laughing, and praised). Luke&apos;s version is more materially concrete; Matthew&apos;s more spiritually internalized. Together they hold economic reality and spiritual disposition in tension: kingdom reversal operates on both planes.
                  </Callout>
                </div>

                {BEATITUDES.map((b, i) => (
                  <Accordion
                    key={b.ref}
                    title={b.beatitude}
                    subtitle={`${b.ref} — ${b.promise}`}
                    color={b.color}
                    open={openAccordion === `beat-${i}`}
                    onToggle={() => toggleAccordion(`beat-${i}`)}
                  >
                    <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 12 }}>{b.ref} — &ldquo;{b.beatitude}, {b.promise}&rdquo;</p>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{b.content}</p>
                  </Accordion>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: LAW FULFILLED
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "law" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={PURPLE} ref="Matthew 5:17-48" title="The Law Fulfilled" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                    &ldquo;Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them&rdquo; (5:17). This is one of the most debated sentences in the New Testament. What does &ldquo;fulfill&rdquo; (plēroō) mean? In Matthew&apos;s Gospel, plēroō consistently refers to bringing something to its intended completion — as a prophecy is fulfilled when its full meaning is enacted. Jesus is not abolishing Torah or simply intensifying it — he is revealing its telos, its full intended depth.
                  </p>
                  <Callout color={PURPLE} label="The New Moses">
                    The six antitheses that follow (5:21-48) are each introduced with a double formula: &ldquo;You have heard that it was said to the people long ago...&rdquo; followed by &ldquo;But I say to you.&rdquo; No prophet in the OT spoke this way — prophets said &ldquo;thus says the LORD.&rdquo; Jesus speaks in his own name, with his own authority. The crowds recognize it: &ldquo;he taught as one who had authority, and not as their teachers of the law&rdquo; (7:29).
                  </Callout>
                  <VerseBlock ref="5:17" text="Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them." />
                  <VerseBlock ref="5:20" text="For I tell you that unless your righteousness surpasses that of the Pharisees and the teachers of the law, you will certainly not enter the kingdom of heaven." />
                  <VerseBlock ref="5:48" text="Be perfect, therefore, as your heavenly Father is perfect." />
                </div>

                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14, marginTop: 4 }}>The Six Antitheses</h3>

                {ANTITHESES.map((a, i) => (
                  <Accordion
                    key={a.ref}
                    title={a.title}
                    subtitle={a.ref}
                    color={PURPLE}
                    open={openAccordion === `anti-${i}`}
                    onToggle={() => toggleAccordion(`anti-${i}`)}
                  >
                    <div style={{ background: `${BORDER}`, borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
                      <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>YOU HAVE HEARD</div>
                      <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", margin: 0 }}>&ldquo;{a.you_heard}&rdquo;</p>
                    </div>
                    <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}25`, borderRadius: 8, padding: "10px 14px", marginBottom: 14 }}>
                      <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>BUT I SAY TO YOU</div>
                      <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", margin: 0 }}>&ldquo;{a.but_i_say}&rdquo;</p>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{a.content}</p>
                  </Accordion>
                ))}

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginTop: 20 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>&ldquo;Be perfect as your heavenly Father is perfect&rdquo; (5:48)</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 0 }}>
                    The word teleios (&ldquo;perfect&rdquo;) does not mean morally flawless — the Greek word for that would be anamartētos. Teleios means complete, whole, mature — it is the perfection of arriving at one&apos;s intended end. God&apos;s perfection here is described in terms of his love: he sends sun and rain on the righteous and the unrighteous alike (v. 45). The &ldquo;perfection&rdquo; Jesus calls for is the completeness of love — love that extends even to enemies, that sets no limits on who qualifies for kindness. It is not a demand for sinless achievement but a call to the wholeness of love that reflects the Father&apos;s own character.
                  </p>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: THREE ACTS OF PIETY
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "piety" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={GOLD} ref="Matthew 6:1-18" title="Three Acts of Piety" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                    Chapter 6 opens with the Sermon&apos;s overarching principle for religious practice: &ldquo;Be careful not to practice your righteousness in front of others to be seen by them. If you do, you will have no reward from your Father in heaven&rdquo; (6:1). Three practices follow — giving, prayer, and fasting — each addressed with exactly the same structural pattern. The warning is not against the practices themselves but against the audience.
                  </p>
                  <Callout color={GOLD} label="The Hypokrites Principle">
                    The word &ldquo;hypocrite&rdquo; (hypokritēs) in ancient Greek was the technical term for a theatrical actor — someone who wore a mask and played a role for an audience. When Jesus calls religious performers hypocrites, he is saying precisely this: they are wearing a spiritual mask, playing a role for the crowd. Religious performance is the substitution of reputation for reality. The &ldquo;reward&rdquo; Jesus says they already have — the Greek apechousin was used on commercial receipts to mean &ldquo;paid in full.&rdquo; They have been paid: the applause of the audience. That is all they will get.
                  </Callout>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 0 }}>
                    Importantly, Jesus never says &ldquo;if you give/pray/fast&rdquo; — he says &ldquo;when.&rdquo; These are assumed practices for the people of God. The question is not whether but how and before whom.
                  </p>
                </div>

                {[
                  {
                    title: "Giving (Almsgiving)",
                    ref: "6:2-4",
                    color: GOLD,
                    id: "piety-give",
                    content: `"When you give to the needy, do not announce it with trumpets, as the hypocrites do in the synagogues and on the streets, to be honored by others" (6:2). The image of trumpet-blowing is almost certainly hyperbolic — a comic exaggeration of the performance of piety. The alternative is giving "in secret" (6:3-4): not literally hiding the act (good deeds will sometimes be visible, as 5:16 acknowledges) but acting without regard for human recognition. "Your Father, who sees what is done in secret, will reward you." This phrase repeats in each of the three practices, anchoring the claim: the only audience that ultimately matters is God. Giving done for the approval of others is hollow even when it benefits the recipient — it is a transaction for reputation, not an act of love.`,
                  },
                  {
                    title: "Prayer",
                    ref: "6:5-15",
                    color: GREEN,
                    id: "piety-pray",
                    content: `"When you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others" (6:5). Prayer is the most intimate communication of the soul with God — and it can be performed entirely for human observers. The alternative Jesus prescribes is the room with the closed door (6:6): prayer as a private meeting with the Father, not a speech addressed to those nearby. "When you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words" (6:7). Pagan religion assumed that the gods needed to be convinced by verbal quantity or incantation. God already knows what you need before you ask (6:8) — prayer is not information transfer but relational communication with a Father who is already attentive. The Lord's Prayer (6:9-13) then follows as the model of what genuine prayer looks like.`,
                  },
                  {
                    title: "Fasting",
                    ref: "6:16-18",
                    color: PURPLE,
                    id: "piety-fast",
                    content: `"When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting" (6:16). The distortion of the face — unwashed, with ash or dust — was a visible signal of religious devotion, a walking advertisement of piety. Jesus's alternative: wash your face, put oil on your head (the normal grooming of a person who is not fasting), and let only your Father know. Fasting in the biblical tradition is an act of humility and mourning before God — a physical expression of spiritual dependence. When it is performed for an audience, the physical act remains but the spiritual reality is evacuated. The Sermon's concern with fasting anticipates Jesus's later teaching about the appropriate time for fasting in his disciples' life (Matt. 9:14-17): when the bridegroom is taken away, then they will fast.`,
                  },
                ].map(item => (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    subtitle={item.ref}
                    color={item.color}
                    open={openAccordion === item.id}
                    onToggle={() => toggleAccordion(item.id)}
                  >
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{item.content}</p>
                  </Accordion>
                ))}

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginTop: 16 }}>
                  <h3 style={{ color: MUTED, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>The Common Pattern</h3>
                  {[
                    ["When you [give/pray/fast]...", "Assumes the practice — not optional"],
                    ["...do not be like the hypocrites who do it to be seen.", "The audience diagnosis"],
                    ["They have received their reward in full.", "Apechousin — paid in full, no further credit"],
                    ["But when you [give/pray/fast] in secret...", "The kingdom alternative"],
                    ["...your Father who sees in secret will reward you.", "God alone is the ultimate audience"],
                  ].map(([phrase, meaning], i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: i < 4 ? `1px solid ${BORDER}` : "none" }}>
                      <span style={{ color: GOLD, fontSize: 13, fontStyle: "italic", width: "55%", flexShrink: 0 }}>{phrase}</span>
                      <span style={{ color: MUTED, fontSize: 13 }}>{meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: LORD'S PRAYER
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "lordsprayer" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={GOLD} ref="Matthew 6:9-13" title="The Lord's Prayer" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                    The Lord&apos;s Prayer is given not as a formula to recite but as a pattern for prayer — &ldquo;This, then, is how you should pray&rdquo; (6:9). It is remarkably compact. In seven petitions (six plus the doxology), it covers the full range of genuine prayer: orientation toward God, alignment with God&apos;s purposes, dependence for daily provision, the reality of forgiveness, preservation through trial, and a final return to God&apos;s sovereignty. Its structure is instructive: three God-centered petitions precede three human-need petitions, establishing that prayer begins by entering God&apos;s world, not by bringing God into ours.
                  </p>
                  <div style={{ background: BG, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px", marginBottom: 16 }}>
                    <p style={{ color: GREEN, fontSize: 16, lineHeight: 2.0, margin: 0, fontStyle: "italic", textAlign: "center" }}>
                      Our Father in heaven,<br />
                      hallowed be your name,<br />
                      your kingdom come,<br />
                      your will be done,<br />
                      on earth as it is in heaven.<br />
                      Give us today our daily bread.<br />
                      And forgive us our debts,<br />
                      as we also have forgiven our debtors.<br />
                      And lead us not into temptation,<br />
                      but deliver us from the evil one.<br />
                      <span style={{ color: GOLD }}>For yours is the kingdom and the power<br />and the glory forever. Amen.</span>
                    </p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <Callout color={GREEN} label="Three God-Centered Petitions">
                      Hallowed be your name · Your kingdom come · Your will be done. Before human need is named, the soul orients itself entirely toward God.
                    </Callout>
                    <Callout color={PURPLE} label="Three Human-Need Petitions">
                      Daily bread · Forgiveness · Deliverance. Body, relationship, and spiritual warfare — the full range of creaturely need.
                    </Callout>
                  </div>
                </div>

                {LORD_PRAYER_LINES.map((line, i) => (
                  <Accordion
                    key={i}
                    title={`"${line.phrase}"`}
                    subtitle={line.type}
                    color={line.color}
                    open={openAccordion === `lp-${i}`}
                    onToggle={() => toggleAccordion(`lp-${i}`)}
                  >
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{line.content}</p>
                  </Accordion>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: DO NOT WORRY
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "anxiety" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={GREEN} ref="Matthew 6:19-34" title="Do Not Worry" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                    The passage on anxiety follows directly from the Lord&apos;s Prayer, and the connection is deliberate. The one who has prayed &ldquo;give us today our daily bread&rdquo; and &ldquo;your kingdom come&rdquo; has already placed provision and governance in the Father&apos;s hands. Matthew 6:19-34 is not simply emotional advice about reducing worry — it is a theological argument about who God is, what his kingdom means, and how trust displaces anxiety as the operating principle of kingdom life.
                  </p>
                  <VerseBlock ref="6:25" text="Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?" />
                  <VerseBlock ref="6:33" text="But seek first his kingdom and his righteousness, and all these things will be given to you as well." />
                  <VerseBlock ref="6:34" text="Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." />
                </div>

                {ANXIETY_SECTIONS.map((sec, i) => (
                  <Accordion
                    key={i}
                    title={sec.title}
                    subtitle={sec.ref}
                    color={sec.color}
                    open={openAccordion === `anx-${i}`}
                    onToggle={() => toggleAccordion(`anx-${i}`)}
                  >
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{sec.content}</p>
                  </Accordion>
                ))}

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 26px", marginTop: 16 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Why This Is Not Naivety</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Jesus&apos;s anti-anxiety teaching is vulnerable to being dismissed as the advice of someone who never experienced real poverty, real illness, or real threat. But the Sermon is not preached from comfort — it is preached by one who will be crucified, to disciples who will be persecuted. The birds and lilies argument is not &ldquo;things will always turn out fine.&rdquo; The argument is about who God is and what relationship with him means for how we inhabit the present moment.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    The teaching also differs from toxic positivity. Jesus does not say &ldquo;don&apos;t feel worried&rdquo; or &ldquo;worry less.&rdquo; He says &ldquo;do not worry&rdquo; — an imperative, a choice about where to direct the mind&apos;s attention. The alternative to worry is not confidence that circumstances will improve; it is the active reorientation of the mind toward the kingdom and the Father&apos;s character. This is why the Sermon pairs the anti-anxiety teaching with &ldquo;seek first his kingdom&rdquo; — anxiety is often displaced by replacing it with something of greater weight, not by simply suppressing it.
                  </p>
                  <Callout color={GOLD} label="The 'This Day' Principle">
                    Matthew 6:34 &mdash; &ldquo;Each day has enough trouble of its own&rdquo; &mdash; is one of Jesus&apos;s most practically wise statements. Anxiety is almost always about tomorrow; suffering is almost always in today. The discipline of living fully within the present day (which does not deny planning or preparation) is the Sermon&apos;s answer to anxiety&apos;s attempt to colonize the present with imagined future trouble.
                  </Callout>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: KINGDOM LOGIC
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "kingdom" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                  <SectionHeader color={PURPLE} ref="Matthew 7:1-27" title="The Kingdom Logic of the Sermon" />
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                    The Sermon is not a miscellany of moral advice — it has a coherent theological logic throughout. The kingdom (basileia) is the Sermon&apos;s controlling category: it has arrived in Jesus, it belongs to those with nothing to offer (the poor in spirit), it transforms how one relates to enemies, to money, to one&apos;s own prayer life, and to the anxiety that results from not trusting God&apos;s provision. Matthew 7 brings the Sermon to its close through a series of warnings and through the most famous parable of all: the house on the rock.
                  </p>
                  <Callout color={PURPLE} label="Cross-Cutting Kingdom Themes">
                    Kingdom present AND future · Social embodiment (peacemakers, forgivers, servants) · Authenticity over performance · Wholeness of character versus external compliance · The cost of discipleship (persecution, narrow gate) · God as the reliable Father rather than an indifferent power
                  </Callout>
                </div>

                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>The Closing Sections</h3>

                {KINGDOM_SECTIONS.map((sec, i) => (
                  <Accordion
                    key={i}
                    title={sec.title}
                    subtitle={sec.ref}
                    color={sec.color}
                    open={openAccordion === `king-${i}`}
                    onToggle={() => toggleAccordion(`king-${i}`)}
                  >
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{sec.content}</p>
                  </Accordion>
                ))}

                {/* Scholars section */}
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Scholars on the Sermon</h3>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 160 }}>
                      {SCHOLARS.map(v => (
                        <button
                          type="button"
                          key={v.id}
                          onClick={() => setSelectedScholar(v.id)}
                          style={{
                            background: selectedScholar === v.id ? PURPLE : CARD,
                            border: `1px solid ${selectedScholar === v.id ? PURPLE : BORDER}`,
                            borderRadius: 8,
                            padding: "10px 12px",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                          <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                        </button>
                      ))}
                    </div>
                    <div style={{ flex: 1, minWidth: 260 }}>
                      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "22px 24px" }}>
                        <h2 style={{ color: scholarItem.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{scholarItem.name}</h2>
                        <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{scholarItem.era}</div>
                        <div style={{ color: MUTED, fontSize: 12, marginBottom: 14 }}>{scholarItem.context}</div>
                        <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>{scholarItem.bio}</p>
                        <div style={{ background: BG, borderLeft: `3px solid ${scholarItem.color}`, borderRadius: "0 8px 8px 0", padding: "12px 16px", marginBottom: 16 }}>
                          <p style={{ color: scholarItem.color, fontStyle: "italic", fontSize: 14, lineHeight: 1.7, margin: 0 }}>&ldquo;{scholarItem.quote}&rdquo;</p>
                        </div>
                        <div style={{ background: `${PURPLE}12`, borderRadius: 8, padding: 14 }}>
                          <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>Legacy</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{scholarItem.contribution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practices */}
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Engaging the Sermon</h3>
                  <p style={{ color: MUTED, fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
                    The Sermon ends with a man who built on rock — one who heard and did. Engagement that stops at admiration falls on the same sand as no engagement at all.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                    {[
                      { icon: "📖", title: "Read It Weekly for a Month", desc: "Matthew 5-7 takes 15-20 minutes to read aloud. Do this weekly for a month. Each reading surfaces something new. The familiarity of individual verses often prevents engagement with the whole — reading it in one sitting restores its cumulative force." },
                      { icon: "🎯", title: "One Section at a Time", desc: "Take a single paragraph and live with it for a week. What specifically would change in your life if you took this seriously? Don't try to implement the entire Sermon simultaneously." },
                      { icon: "🙏", title: "Pray the Lord's Prayer as Designed", desc: "Pray it slowly, phrase by phrase. 'Your kingdom come' — what would that look like today? 'Forgive us' — what do I need to confess? Let each petition open into its full meaning." },
                      { icon: "💰", title: "Identify Your Treasure", desc: "'Where your treasure is, there your heart will be also.' Look at your calendar and bank account — they show where your treasure actually is. The Sermon is designed to surface the gap between claimed values and actual behavior." },
                      { icon: "⚖️", title: "Practice One Antithesis", desc: "Choose the antithesis most relevant to your current struggle — anger, lust, retaliation — and practice its positive alternative intentionally. Jesus is not just prohibiting the negative; he is prescribing the positive." },
                      { icon: "🧠", title: "Memorize the Beatitudes", desc: "The eight Beatitudes are a portrait of kingdom character. Memorized, they become a lens for self-examination: Am I poor in spirit? Mourning? Meek? Hungry for righteousness? Merciful?" },
                    ].map((p, i) => (
                      <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 20px" }}>
                        <div style={{ fontSize: 22, marginBottom: 8 }}>{p.icon}</div>
                        <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{p.title}</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: JOURNAL
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "journal" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 8 }}>Sermon on the Mount Journal</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    The Sermon ends with a choice about foundations. Use this space to record where the Sermon is meeting you, shaping you, and calling you to action.
                  </p>

                  {/* Prompts */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>REFLECTION PROMPTS</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {JOURNAL_PROMPTS.map((prompt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setJReflection(prompt)}
                          style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}25`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 12, cursor: "pointer", textAlign: "left" }}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <input
                      value={jVerse}
                      onChange={e => setJVerse(e.target.value)}
                      placeholder="Verse or passage (e.g. Matthew 5:3, 6:33)"
                      style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }}
                    />
                    <textarea
                      value={jReflection}
                      onChange={e => setJReflection(e.target.value)}
                      placeholder="What is Jesus teaching you here? Where does it challenge or encourage you?"
                      rows={4}
                      style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }}
                    />
                    <textarea
                      value={jPrayer}
                      onChange={e => setJPrayer(e.target.value)}
                      placeholder="How are you responding in prayer? What specific step of obedience is this calling you toward?"
                      rows={3}
                      style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }}
                    />
                    <button
                      type="button"
                      onClick={saveJournalEntry}
                      style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}
                    >
                      Save Entry
                    </button>
                  </div>
                </div>

                {journalEntries.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "48px 20px", color: MUTED }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📓</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7 }}>No journal entries yet. Begin recording how the Sermon on the Mount is shaping your life.</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {journalEntries.map(entry => (
                      <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 22px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                          <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>{entry.verse || "Reflection"}</span>
                          <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                        </div>
                        {entry.reflection && (
                          <div style={{ marginBottom: 10 }}>
                            <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>REFLECTION</div>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{entry.reflection}</p>
                          </div>
                        )}
                        {entry.prayer && (
                          <div style={{ marginBottom: 12 }}>
                            <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>PRAYER / RESPONSE</div>
                            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{entry.prayer}</p>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => deleteJournalEntry(entry.id)}
                          style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                TAB: VIDEOS
            ════════════════════════════════════════════════════════════════ */}
            {activeTab === "videos" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 24, marginBottom: 8 }}>Teaching Videos</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                    Sermons, lectures, and teachings from trusted Christian scholars and pastors on the Sermon on the Mount.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    {
                      videoId: "ccNvwDPguNU",
                      title: "The Inside Out Kingdom",
                      channel: "Timothy Keller",
                      section: "Overview",
                      description: "Tim Keller opens his Sermon on the Mount series, examining how Jesus contrasts two groups who appear the same on the outside but have radically different motivations. Keller unpacks the meaning of the Beatitudes as the inward character of kingdom people rather than ethical achievement.",
                    },
                    {
                      videoId: "57LVVwba6_8",
                      title: "The Upside Down Kingdom",
                      channel: "Timothy Keller",
                      section: "Beatitudes",
                      description: "Keller unpacks how Jesus introduces a revolutionary kingdom in the Sermon on the Mount — one that subverts every human expectation of power and greatness. The poor in spirit, the mourners, the meek: how the Beatitudes redefine blessing from the ground up.",
                    },
                    {
                      videoId: "r1WNYT9Rxs4",
                      title: "Authentic Christianity",
                      channel: "Timothy Keller",
                      section: "Piety & Conclusion",
                      description: "The concluding sermon in Keller's Sermon on the Mount series, drawing together the radical demands of Jesus and the grace that makes obedience possible. Examines the gap between religious performance and the authentic interior life Jesus calls for in Matthew 6.",
                    },
                    {
                      videoId: "Bp2MzyoHa7k",
                      title: "The Sermon on the Mount: True Happiness (Matt. 5:1-12)",
                      channel: "Gospel Teaching",
                      section: "Beatitudes",
                      description: "A verse-by-verse exposition of the Beatitudes — the counter-intuitive blessings of the kingdom that redefine what it means to flourish. Why makarios ('blessed') is a divine declaration rather than moral advice.",
                    },
                    {
                      videoId: "QDZr4P9VbV4",
                      title: "Blessed Are the Meek",
                      channel: "Desiring God / John Piper",
                      section: "Beatitudes",
                      description: "John Piper's classic exposition of the third Beatitude, exploring what meekness means in the kingdom of God — not weakness but strength under God's control — and why it is the meek who inherit the earth.",
                    },
                  ].map(v => (
                    <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                      <div style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
                          <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
                          <span style={{ background: `${GREEN}15`, color: GREEN, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>{v.section}</span>
                        </div>
                        <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>{v.channel}</p>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
