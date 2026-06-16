"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "WnDVX3kJKoU", title: "Revelation 2 - Letters to the Four Churches" },
  { videoId: "GjGFi0kIBho", title: "The Letter to Ephesus - Lost First Love" },
  { videoId: "RdI8YL8Cfmk", title: "Smyrna and Pergamum - Suffering and Compromise" },
  { videoId: "h3XiKJjMxiY", title: "Thyatira and the Problem of Compromise" },
];

interface AccordionItem {
  id: string;
  label: string;
  color: string;
  body: string;
}

const verseByVerseItems: AccordionItem[] = [
  {
    id: "ephesus-1-3",
    label: "Ephesus, vv.1-3: The Christological Title and Commendation",
    color: TEAL,
    body: "Christ identifies himself to Ephesus as the one &ldquo;who holds the seven stars in his right hand and walks among the seven golden lampstands&rdquo; (2:1) &mdash; the most comprehensive title from chapter 1, emphasizing his intimate presence among the churches and his authority over their messengers. This is not accidental: the title assigned to each church corresponds to what that church most needs to see about Christ.<br><br>The commendation of Ephesus is substantial: &ldquo;I know your deeds, your hard work and your perseverance. I know that you cannot tolerate wicked people, that you have tested those who claim to be apostles but are not, and have found them false. You have persevered and have endured hardships for my name, and have not grown weary&rdquo; (2:2-3). This is a church that has maintained doctrinal integrity under pressure. They have tested the spirits, identified false apostles, and persevered through real hardship without giving up. By any external measure, this is a healthy, orthodox, enduring church. The commendation makes the rebuke that follows more shocking, not less.",
  },
  {
    id: "ephesus-4-7",
    label: "Ephesus, vv.4-7: The Rebuke of Lost First Love and the Call to Return",
    color: ROSE,
    body: "The rebuke cuts to the heart of the church&rsquo;s failure: &ldquo;Yet I hold this against you: You have forsaken the love you had at first&rdquo; (2:4). The Greek <em>agape</em> &mdash; the love that is the defining mark of Christian community (John 13:35) &mdash; has been abandoned. The word translated &ldquo;forsaken&rdquo; or &ldquo;left&rdquo; (<em>aphiemi</em>) is a strong word; it is the same used for abandoning, letting go, divorcing. This is not a drift but a departure.<br><br>What is the &ldquo;first love&rdquo; they have forsaken? Commentators debate whether it is love for God, love for one another, or both. In the context of a church that has maintained doctrinal rigor, the most likely scenario is that their intense focus on orthodoxy and the hard work of discernment has crowded out the warmth, delight, and mutual care that characterized early faith. They have kept the right beliefs but lost the relational heart those beliefs were meant to sustain. Correct theology without love is the very problem Paul addresses in 1 Corinthians 13:1-3.<br><br>The call to repentance is threefold: &ldquo;Consider how far you have fallen! Repent and do the things you did at first&rdquo; (2:5). The three movements &mdash; remember, repent, redo &mdash; are not abstract spiritual exercises but a return to the relational practices of early discipleship: generous love, joyful worship, sacrificial care for the community. The warning is severe: &ldquo;If you do not repent, I will come to you and remove your lampstand from its place.&rdquo; A church can have perfect doctrine and lose its reason for existence. The promise to the overcomer is access to the tree of life in the paradise of God (2:7) &mdash; Eden restored, the deepest fellowship with God renewed.",
  },
  {
    id: "smyrna-8-11",
    label: "Smyrna, vv.8-11: The Suffering Church and the Crown of Life",
    color: GOLD,
    body: "Christ identifies himself to Smyrna as &ldquo;him who is the First and the Last, who died and came to life again&rdquo; (2:8) &mdash; the resurrection identity of 1:17-18 applied directly to a church facing death. The title is perfectly chosen: the church about to face mortal threat needs to see that their Lord has already walked through death and come out the other side, the Living One, holder of the keys of death and Hades.<br><br>The description of Smyrna&rsquo;s condition is striking in its paradox: &ldquo;I know your afflictions and your poverty &mdash; yet you are rich!&rdquo; (2:9). Their outward material poverty is contrasted with their true spiritual wealth. This echoes the beatitudes of Jesus (&ldquo;Blessed are the poor in spirit&rdquo;) and the Pauline paradox of 2 Corinthians 6:10 (&ldquo;poor, yet making many rich&rdquo;). The slander they face comes from &ldquo;those who say they are Jews and are not, but are a synagogue of Satan&rdquo; &mdash; a reference not to ethnic Jews but to a specific community making false claims to covenant faithfulness while persecuting the church. The language is sharp because the stakes are high: at stake is who truly belongs to Abraham&rsquo;s family through faith in the Messiah.<br><br>The call to Smyrna is not to repent of anything but to endure: &ldquo;Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor&rsquo;s crown&rdquo; (2:10). &ldquo;Ten days&rdquo; signals limited, bounded suffering &mdash; not eternal; not beyond God&rsquo;s control; not meaningless. The Greek <em>nikao</em> (overcome, conquer) appears throughout the seven letters: the overcomer is not the one who avoids suffering but the one who remains faithful through it. The promise: &ldquo;the one who is victorious will not be hurt at all by the second death&rdquo; (2:11). The second death (the lake of fire, 20:14) has no power over those who have died faithfully to the world in this age.",
  },
  {
    id: "pergamum-12-13",
    label: "Pergamum, vv.12-13: Where Satan's Throne Is and the Church's Faithfulness",
    color: PURPLE,
    body: "Christ comes to Pergamum as the one &ldquo;who has the sharp, double-edged sword&rdquo; (2:12) &mdash; the word of God that will be the instrument of judgment against compromise. Pergamum was the administrative capital of the Roman province of Asia, the seat of the imperial cult and of worship of Zeus (whose altar was famously large), and a center of Roman power. It was a city where loyalty to Rome was not optional but enforced.<br><br>In this context, Christ&rsquo;s acknowledgment is striking: &ldquo;I know where you live &mdash; where Satan&rsquo;s throne is&rdquo; (2:13). Satan&rsquo;s throne is the concentration of imperial, religious, and cultural power hostile to the lordship of Christ. The church in Pergamum lives at the center of this power. And yet: &ldquo;Yet you remain true to my name. You did not renounce your faith in me, not even in the days of Antipas, my faithful witness, who was put to death in your city &mdash; where Satan lives.&rdquo; Antipas (<em>martys</em> &mdash; witness/martyr) is named as the specific instance of faithfulness under lethal pressure. His death did not break the church&rsquo;s loyalty. Christ sees this, names it, and honors it. Before the rebuke, the commendation: you live in the hardest place and you have not denied my name.",
  },
  {
    id: "pergamum-14-17",
    label: "Pergamum, vv.14-17: Balaam, the Nicolaitans, and the Call to Repentance",
    color: ROSE,
    body: "Despite their courage under persecution, Pergamum faces the subtler danger of internal compromise. Some members hold to &ldquo;the teaching of Balaam, who taught Balak to entice the Israelites to sin so that they ate food sacrificed to idols and committed sexual immorality&rdquo; (2:14). The Balaam reference (Numbers 22-25; 31) is significant: Balaam could not curse Israel directly, so he taught the Moabites to seduce Israel into covenant unfaithfulness through participation in pagan worship and sexual immorality. The danger Pergamum faces is not the sword of Rome but the seduction of accommodation &mdash; finding a way to maintain social and economic position in Roman society by participating in practices incompatible with Christian allegiance.<br><br>The Greek <em>eidolothuton</em> (food sacrificed to idols) was a live issue in the first-century church (1 Corinthians 8-10). Guild meals, civic festivals, household celebrations &mdash; all of these involved food consecrated to pagan deities. Full participation in Roman social life required at least nominal participation in its religious practices. The Nicolaitans may have been a group advocating a theology of accommodation: we can participate in these practices without spiritual harm. Christ&rsquo;s response is a call to repentance: &ldquo;Repent therefore! Otherwise, I will soon come to you and will fight against them with the sword of my mouth&rdquo; (2:16). The same word that saves will judge. The promise to the overcomer is remarkable: &ldquo;hidden manna&rdquo; (the true bread of God, versus the idol meat) and &ldquo;a white stone with a new name written on it, known only to the one who receives it&rdquo; (2:17) &mdash; symbols of true belonging, true sustenance, and intimate personal knowledge in the new creation.",
  },
  {
    id: "thyatira-18-23",
    label: "Thyatira, vv.18-23: The Longest Letter and the Toleration of Jezebel",
    color: GOLD,
    body: "The letter to Thyatira is the longest of the seven, addressed to the smallest and least prominent city of the group. Christ introduces himself as &ldquo;the Son of God, whose eyes are like blazing fire and whose feet are like burnished bronze&rdquo; (2:18) &mdash; combining the divine title &ldquo;Son of God&rdquo; (rare in Revelation) with the penetrating, omniscient gaze and the feet of judgment from chapter 1. This is a church about to be confronted with the hard truth about what their tolerance has produced.<br><br>The commendation is genuine and specific: &ldquo;I know your deeds, your love and faith, your service and perseverance, and that you are now doing more than you did at first&rdquo; (2:19). Unlike Ephesus, which has lost its first love while maintaining orthodoxy, Thyatira shows actual growth in love, faith, service, and endurance. The order of the virtues is significant: love comes first. This is a warm, growing, loving church. The rebuke that follows does not negate the commendation &mdash; it is precisely because this is a genuinely loving church that its toleration of false teaching is so dangerous.<br><br>The rebuke identifies &ldquo;that woman Jezebel, who calls herself a prophet&rdquo; (2:20). The name &ldquo;Jezebel&rdquo; is a symbolic reference to the queen of 1 Kings 16-21, who introduced Baal worship into Israel, persecuted the prophets of God, and led Israel into apostasy. The contemporary Jezebel at Thyatira &ldquo;misleads my servants into sexual immorality and the eating of food sacrificed to idols&rdquo; (2:20). She claims prophetic authority (&ldquo;calls herself a prophet&rdquo;) and has been given time to repent but has not (2:21). The Greek <em>porneia</em> (sexual immorality) may refer to literal sexual sin or, as throughout the Old Testament, to spiritual adultery &mdash; the worship of other gods as unfaithfulness to the divine husband. The two are not mutually exclusive.",
  },
  {
    id: "thyatira-24-29",
    label: "Thyatira, vv.24-29: The Promise to the Faithful Remnant",
    color: PURPLE,
    body: "Not everyone in Thyatira has followed Jezebel. To the faithful remnant &mdash; those who have not followed her teaching, who have not learned &ldquo;Satan&rsquo;s so-called deep secrets&rdquo; (2:24) &mdash; Christ offers remarkable grace: &ldquo;I will not impose any other burden on you, except to hold on to what you have until I come&rdquo; (2:24-25). The false teaching apparently claimed access to deep spiritual knowledge through accommodation to pagan practices. Christ declares the irony: what they call &ldquo;deep things&rdquo; are actually the deep things of Satan. True depth is not found in transgressing boundaries but in faithfulness within them.<br><br>The promise to the overcomer in Thyatira draws on Psalm 2, the royal coronation psalm: &ldquo;To the one who is victorious and does my will to the end, I will give authority over the nations &mdash; that one will rule them with an iron scepter and will dash them to pieces like pottery &mdash; just as I have received authority from my Father&rdquo; (2:26-27). Psalm 2 is a promise to the Davidic king of ultimate authority over the nations; Christ has received this authority from the Father (cf. Matthew 28:18) and now shares it with the faithful overcomer. This is the theology of co-reign: the church that endures faithfully will share in Christ&rsquo;s eschatological authority.<br><br>The final promise is of &ldquo;the morning star&rdquo; (2:28) &mdash; a symbol of the dawning of the new age, of the resurrection, of Christ himself (Revelation 22:16). The church that holds fast in the darkness of compromise will receive the bright light of the new creation. The formula that closes each letter appears: &ldquo;Whoever has ears, let them hear what the Spirit says to the churches&rdquo; &mdash; an invitation that extends each letter&rsquo;s address beyond its original recipients to all who will listen.",
  },
];

const keyThemes = [
  {
    id: "ephesus-theme",
    title: "Ephesus: Lost First Love (vv.1-7)",
    color: TEAL,
    content: "The letter to Ephesus is a study in the danger of orthodoxy without <em>agape</em>. The church has everything right by doctrinal and practical measures: correct doctrine, hard work, perseverance, discernment, and the ability to identify false teachers. These are genuine virtues. And yet something is missing at the center &mdash; the love that is supposed to animate and characterize all of the rest. The theological claim of the letter is that right doctrine cannot substitute for right love; that doctrinal vigilance, while necessary, can itself become a cover for the loss of the very thing doctrine is meant to guard. The warning about removing the lampstand is not a threat against imperfection but against the complete displacement of love by a cold, vigilant, joyless religion that looks like faithfulness from the outside but has lost its heart.",
  },
  {
    id: "smyrna-theme",
    title: "Smyrna: The Suffering Church (vv.8-11)",
    color: GOLD,
    content: "Smyrna is one of only two churches (with Philadelphia) that receives no rebuke. It is also the church facing the most direct and immediate threat: imprisonment and potentially death. The paradox of the letter &mdash; &ldquo;you are poor, yet rich&rdquo; &mdash; reveals the book&rsquo;s fundamental revaluation of worldly and eternal currency. What Rome counts as poverty (material deprivation, social marginalization, political powerlessness) is shown to be wealth in the economy of the kingdom. The letter does not promise escape from suffering but faithfulness through it. The &ldquo;ten days&rdquo; of persecution signals its bounded, limited character. The &ldquo;crown of life&rdquo; (<em>stephanos tes zoes</em>) was the victor&rsquo;s crown in the athletic games &mdash; the crown of ultimate victory given to those who remain faithful to the end. The church that appears most defeated is, in Revelation&rsquo;s vision, most nearly victorious.",
  },
  {
    id: "pergamum-theme",
    title: "Pergamum: Where Satan's Throne Is (vv.12-17)",
    color: PURPLE,
    content: "Pergamum faces a different challenge from Smyrna: not the threat of direct persecution but the temptation of accommodation. The church lives at the seat of Roman imperial power (&ldquo;where Satan&rsquo;s throne is&rdquo;) and has already demonstrated courage under fire. But some members are now flirting with a theology of accommodation &mdash; finding ways to participate in the social and economic life of Roman society by making peace with its religious practices. The Balaam reference is crucial: the most effective strategy against God&rsquo;s people is not frontal assault (which Smyrna has resisted) but seduction from within (which Pergamum is failing to resist). The call to repentance comes before the threat: repent first; the sword of judgment is the last resort, not the first.",
  },
  {
    id: "thyatira-theme",
    title: "Thyatira: Tolerating Jezebel (vv.18-29)",
    color: ROSE,
    content: "Thyatira&rsquo;s problem is not false teaching in the abstract but false teaching from within the community, backed by prophetic claims, that the church has tolerated rather than confronted. The love that is Thyatira&rsquo;s greatest strength has become, paradoxically, the vehicle for its greatest failure: a misguided tolerance that permits destructive teaching to continue because confronting it would seem unloving. The letter addresses a real and recurring temptation: the conflation of love with the refusal to make hard judgments. True love, in the New Testament pattern (cf. 1 Corinthians 13 and John 13-17 together), includes both the warmth of genuine <em>agape</em> and the courage to speak truth even when it causes conflict. Thyatira&rsquo;s growing love needs to include the courage that Ephesus has in abundance; Ephesus&rsquo;s doctrinal courage needs the love that Thyatira has in abundance. Together they would be the complete church.",
  },
  {
    id: "letter-pattern",
    title: "The Pattern of the Seven Letters",
    color: GREEN,
    content: "Each of the seven letters follows a recognizable structural pattern, though with variations: (1) A command to write; (2) A Christological title drawn from chapter 1; (3) &ldquo;I know&rdquo; &mdash; the omniscient witness of Christ to the church&rsquo;s actual condition; (4) Commendation (where applicable); (5) Rebuke (where applicable); (6) Call to repentance or encouragement; (7) The call to &ldquo;hear what the Spirit says to the churches&rdquo;; (8) A promise to &ldquo;the one who overcomes.&rdquo; The Greek <em>nikao</em> (to overcome, conquer) defines the Christian vocation in these letters: not triumph over enemies but faithful endurance through trial. The promises to the overcomer all point toward the new creation described in chapters 21-22: the tree of life, freedom from the second death, hidden manna, the morning star, and more. Present faithfulness secures future inheritance.",
  },
];

const churchAssessment = [
  {
    church: "Ephesus",
    color: TEAL,
    description: "Doctrinally sound, persevering, discerning &mdash; but has lost its first love",
    questions: ["Does your church emphasize correct doctrine and reject false teaching?", "Is there warmth and delight in your community, or has theological vigilance become cold?", "What would it mean to &lsquo;return to your first love&rsquo; in your community context?"],
  },
  {
    church: "Smyrna",
    color: GOLD,
    description: "Poor, persecuted, slandered &mdash; but spiritually rich with no rebuke",
    questions: ["Does your church face material poverty or social marginalization?", "Is your community encouraged to see its apparent weakness as genuine spiritual wealth?", "How does the church prepare its members for the possibility of real suffering?"],
  },
  {
    church: "Pergamum",
    color: PURPLE,
    description: "Faithful under direct persecution &mdash; but tolerating accommodation to the culture",
    questions: ["Is your church embedded in a culture with strong pressure to accommodate its values?", "Are there teachings or practices circulating in the community that make peace with worldly compromise?", "What is the equivalent of &lsquo;food sacrificed to idols&rsquo; in your cultural setting?"],
  },
  {
    church: "Thyatira",
    color: ROSE,
    description: "Growing in love and service &mdash; but tolerating destructive teaching out of misguided love",
    questions: ["Is your church known for love, service, and genuine care for people?", "Are there voices claiming spiritual authority who are leading people into harmful patterns?", "Has your community confused tolerance with love in ways that permit harm?"],
  },
];

const applicationPoints = [
  {
    title: "Which Church Are We? The Self-Assessment Question",
    color: GOLD,
    body: "The question Christ asks through these four letters is not abstract but piercing: &ldquo;I know your deeds&rdquo; is the repeated refrain. He knows the gap between reputation and reality, between what a church thinks it is and what it actually is. The self-assessment these letters invite is not primarily individual (though it applies there too) but communal: Which of these four patterns most closely resembles our church right now? The value of asking the question is not to produce shame but to produce clarity &mdash; to see ourselves as Christ sees us, which is the necessary precondition of repentance and renewal. The remarkable thing about the letters is how specific and varied they are: no two churches receive identical diagnoses. Revelation resists the one-size-fits-all approach to ecclesiology and insists that Christ knows each community in its particularity.",
  },
  {
    title: "The Greek Words That Define Christian Life in the Letters",
    color: PURPLE,
    body: "<strong>Agape</strong> (&alpha;&gamma;&alpha;&pi;&eta;) &mdash; the self-giving love that is both the first virtue Ephesus has lost and the first virtue Thyatira has maintained. In the New Testament, <em>agape</em> is not a feeling but a practice: active, costly, self-spending care for others. <strong>Nikao</strong> (&nu;&iota;&kappa;&alpha;&omega;) &mdash; to overcome, to conquer; the word that defines the overcomer to whom the promises are given. In the context of these letters, overcoming is not military conquest or spiritual triumphalism but faithful endurance through trial, maintained allegiance to Christ even at cost. <strong>Porneia</strong> (&pi;&omicron;&rho;&nu;&epsilon;&iota;&alpha;) &mdash; sexual immorality; used in both Pergamum and Thyatira as a concrete expression of covenant unfaithfulness. In the Old Testament background, sexual immorality and idolatry are often linked as dual expressions of the same fundamental unfaithfulness to the covenant. <strong>Eidolothuton</strong> (&epsilon;&iota;&delta;&omega;&lambda;&omicron;&theta;&upsilon;&tau;&omicron;&nu;) &mdash; food sacrificed to idols; the concrete social pressure point where Christian allegiance to Christ alone came into conflict with participation in Roman civic, commercial, and household religious practices.",
  },
  {
    title: "The Pattern of Love, Doctrine, and Courage",
    color: TEAL,
    body: "Reading the four letters of chapter 2 together reveals a complementary pattern. Ephesus has doctrinal precision and perseverance but lacks love. Smyrna has genuine suffering and no compromise. Pergamum has courage under persecution but is failing to confront internal accommodation. Thyatira has genuine love and growing service but lacks the courage to confront destructive teaching. Taken together, the four letters describe the virtues of a complete church: <em>agape</em> (Thyatira), doctrinal faithfulness (Ephesus), endurance under suffering (Smyrna), and the courage to confront compromise (Pergamum). The church that integrates all four is the church that will remain a burning lampstand in the darkness. The separation of these virtues &mdash; love without doctrine, doctrine without love, courage without warmth &mdash; produces the specific failures Christ addresses.",
  },
  {
    title: "The Promises to the Overcomer: Future Inheritance for Present Faithfulness",
    color: GREEN,
    body: "The promises to the overcomer in each letter are not trivial add-ons but the eschatological horizon that makes present faithfulness possible. Ephesus is promised the tree of life in the paradise of God &mdash; Eden restored, the deepest fellowship with God renewed. Smyrna is promised freedom from the second death &mdash; the ultimate fear (physical death) is swallowed up in the ultimate promise (exemption from eternal separation). Pergamum is promised hidden manna and a white stone with a new name &mdash; true sustenance and intimate, personal belonging in the new creation. Thyatira is promised authority over the nations and the morning star &mdash; co-reign with Christ and the dawn of the new age. Each promise is tailored to the specific struggle of each church: those who lose material security are promised true sustenance; those who face death are promised exemption from the second death; those who endure faithfully are promised co-reign with the risen King.",
  },
];

export default function Revelation2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Revelation Study
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, margin: "0 0 1rem", lineHeight: 1.15, color: TEXT }}>
            Revelation 2: Letters to Ephesus, Smyrna, Pergamum, and Thyatira
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Four letters, four very different churches, one risen Christ who knows each community with total clarity. The church that has lost its first love, the church that has lost everything but Christ, the church that faces the throne of empire, and the church that loves generously but tolerates a prophet it should confront &mdash; together they form a portrait of the universal church in every age." }}
          />
        </header>

        {/* Context Banner */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem", borderLeft: `4px solid ${TEAL}` }}>
          <div style={{ color: TEAL, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.5rem" }}>Historical &amp; Literary Context</div>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "The seven letters of Revelation 2-3 are addressed to actual first-century churches in the Roman province of Asia Minor (modern western Turkey). They are not purely symbolic constructs but real pastoral letters to real congregations facing real pressures: emperor worship, guild membership requiring participation in pagan rites, economic exclusion for refusing to burn incense to Caesar, slander from competing religious communities, and the constant temptation to accommodate rather than confront. Each letter follows a recognizable pattern: a Christological title drawn from chapter 1, a declaration &ldquo;I know your deeds,&rdquo; commendation (where applicable), rebuke (where applicable), a call to repentance or encouragement, and a promise to &ldquo;the one who overcomes.&rdquo; The letters are simultaneously addressed to first-century Asia Minor and to the universal church through the repeated refrain: &ldquo;Whoever has ears, let them hear what the Spirit says to the churches.&rdquo; Chapter 2 covers the first four of the seven." }}
          />
        </div>

        {/* Tabs */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? TEAL : BORDER}`,
                background: activeTab === t ? TEAL : CARD,
                color: activeTab === t ? "#07070F" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <section>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1rem" }}>Overview of Revelation 2</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 2 contains four of the seven letters dictated by Christ to John for the churches of Asia Minor. These letters are remarkable for their specificity: Christ knows each church&rsquo;s particular situation, strength, and failure, and addresses each one with a different diagnosis and a different call. The risen Christ of chapter 1 &mdash; blazing with divine glory, walking among the lampstands, holder of the stars in his right hand &mdash; is the same one who issues these pastoral letters. The vision of chapter 1 is not separated from the letters; the letters flow directly from it. The one who sees all things with eyes like blazing fire says &ldquo;I know your deeds&rdquo; to each church." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The four churches in chapter 2 represent a spectrum of situations. Ephesus (vv.1-7) is doctrinally sound but has lost its first love. Smyrna (vv.8-11) is the poorest and most persecuted, receives only commendation, and is promised the crown of life. Pergamum (vv.12-17) lives at the heart of Roman power, has endured persecution well, but is now facing the seduction of accommodation. Thyatira (vv.18-29) is the most loving and growing church but has allowed a self-proclaimed prophet to lead some members into destructive compromise." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "Together the four letters address the full range of church failure: the loss of love (Ephesus), the seduction of accommodation to empire (Pergamum), and the tolerance of false teaching in the name of love (Thyatira). Smyrna stands as the model of what endurance under suffering looks like when these failures have been avoided. The letters are not meant to be read as self-contained units but as a composite portrait of the church in all its struggles &mdash; a portrait in which every congregation in every age can find its own reflection." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { church: "Ephesus", ref: "vv.1-7", color: TEAL, status: "Rebuke: lost first love" },
                { church: "Smyrna", ref: "vv.8-11", color: GOLD, status: "No rebuke; only encouragement" },
                { church: "Pergamum", ref: "vv.12-17", color: PURPLE, status: "Rebuke: compromise, Balaam" },
                { church: "Thyatira", ref: "vv.18-29", color: ROSE, status: "Rebuke: tolerating Jezebel" },
              ].map((c) => (
                <div key={c.church} style={{ background: CARD, borderRadius: 10, border: `1px solid ${c.color}44`, padding: "1rem" }}>
                  <div style={{ color: c.color, fontWeight: 800, fontSize: "1rem", marginBottom: "0.25rem" }}>{c.church}</div>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.4rem" }}>{c.ref}</div>
                  <div style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.5 }}>{c.status}</div>
                </div>
              ))}
            </div>

            {/* Videos Section in Overview */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1.25rem" }}>Video Teaching on Revelation 2</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1.25rem" }}>Key Themes in Revelation 2</h2>
            <div style={{ display: "grid", gap: "0.875rem", marginBottom: "1.5rem" }}>
              {keyThemes.map((theme) => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                  >
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 }}>{theme.title}</span>
                    <span style={{ color: theme.color, fontSize: "1.3rem", flexShrink: 0, fontWeight: 400 }}>{openTheme === theme.id ? "-" : "+"}</span>
                  </button>
                  {openTheme === theme.id && (
                    <div style={{ padding: "0 1.3rem 1.3rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: theme.content }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GREEN}44`, padding: "1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>Promises to the Overcomer in Chapter 2</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  { church: "Ephesus", promise: "The right to eat from the tree of life, which is in the paradise of God", ref: "2:7", color: TEAL },
                  { church: "Smyrna", promise: "Will not be hurt at all by the second death", ref: "2:11", color: GOLD },
                  { church: "Pergamum", promise: "Hidden manna and a white stone with a new name known only to its recipient", ref: "2:17", color: PURPLE },
                  { church: "Thyatira", promise: "Authority over the nations and the morning star", ref: "2:26-28", color: ROSE },
                ].map((item) => (
                  <div key={item.church} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${item.color}22`, color: item.color, borderRadius: 6, padding: "3px 9px", fontSize: "0.78rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.church}</div>
                    <div>
                      <div style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.promise }} />
                      <div style={{ color: item.color, fontSize: "0.8rem", marginTop: "0.2rem" }}>Rev {item.ref}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Verse-by-Verse Commentary: Revelation 2</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A detailed walkthrough of all twenty-nine verses organized by church. Expand any section to read the commentary. Verse references throughout link to the Bible reader." }}
            />

            {/* Church organization labels */}
            {[
              { church: "Ephesus", color: TEAL, ref: "vv.1-7", items: verseByVerseItems.filter(i => i.id.startsWith("ephesus")) },
              { church: "Smyrna", color: GOLD, ref: "vv.8-11", items: verseByVerseItems.filter(i => i.id.startsWith("smyrna")) },
              { church: "Pergamum", color: PURPLE, ref: "vv.12-17", items: verseByVerseItems.filter(i => i.id.startsWith("pergamum")) },
              { church: "Thyatira", color: ROSE, ref: "vv.18-29", items: verseByVerseItems.filter(i => i.id.startsWith("thyatira")) },
            ].map((group) => (
              <div key={group.church} style={{ marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ height: 2, flex: 1, background: `${group.color}44` }} />
                  <div style={{ color: group.color, fontWeight: 800, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                    {group.church} <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.85rem" }}>({group.ref})</span>
                  </div>
                  <div style={{ height: 2, flex: 1, background: `${group.color}44` }} />
                </div>
                <div style={{ display: "grid", gap: "0.6rem" }}>
                  {group.items.map((item) => (
                    <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                      <button
                        onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                        style={{ width: "100%", textAlign: "left", padding: "1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                      >
                        <span style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4 }}>{item.label}</span>
                        <span style={{ color: item.color, fontSize: "1.3rem", flexShrink: 0, fontWeight: 400 }}>{openVerse === item.id ? "-" : "+"}</span>
                      </button>
                      {openVerse === item.id && (
                        <div style={{ padding: "0 1.3rem 1.3rem" }}>
                          <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.75rem", marginTop: "0.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["Revelation 2:4", "Revelation 2:7", "Revelation 2:9", "Revelation 2:10", "Revelation 2:11", "Revelation 2:13", "Revelation 2:14", "Revelation 2:17", "Revelation 2:19", "Revelation 2:20", "Revelation 2:26", "Revelation 2:28"].map((ref) => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Application: Which Church Are You?</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Which of these four churches best describes your own faith community? What would Christ commend, and what would he rebuke? The self-assessment questions below are not designed to produce condemnation but clarity &mdash; the kind of clear-eyed self-knowledge that is the precondition of genuine repentance and renewal." }}
            />

            {/* Church Self-Assessment */}
            <div style={{ display: "grid", gap: "1.25rem", marginBottom: "1.5rem" }}>
              {churchAssessment.map((item) => (
                <div key={item.church} style={{ background: CARD, borderRadius: 14, border: `1px solid ${item.color}44`, padding: "1.5rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.4rem" }}>{item.church}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 1rem" }} dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    {item.questions.map((q, i) => (
                      <div key={i} style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: "0.875rem" }}>
                        <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Application Points */}
            <div style={{ display: "grid", gap: "1.25rem", marginBottom: "1.5rem" }}>
              {applicationPoints.map((point) => (
                <div key={point.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
                  <h3 style={{ color: point.color, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>{point.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: point.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>Personal and Corporate Reflection Questions</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  "Christ says &ldquo;I know your deeds&rdquo; to each church. If Christ were to write a letter to your church today, what would he say he knows about you? What commendation would he give, and what rebuke?",
                  "The Ephesian church had excellent doctrine but had &ldquo;forsaken its first love.&rdquo; Is there a way in which your community&rsquo;s theological seriousness has come at the cost of warmth, delight, and genuine love for one another and for God?",
                  "Smyrna receives no rebuke because it has nothing left but Christ. What would it look like for your church to hold material poverty and spiritual richness simultaneously &mdash; and what would be revealed about your true values?",
                  "Pergamum had resisted the sword of Rome but was slowly yielding to the seduction of accommodation. Where is the equivalent pressure point in your context &mdash; the thing that seems harmless but asks your church to compromise its distinctive allegiance to Christ?",
                  "Thyatira had genuine <em>agape</em> but allowed a false prophet to continue out of misguided tolerance. Is there a pattern of behavior, a teaching, or a voice in your community that has been tolerated in the name of love but is producing harm?",
                ].map((q, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q}` }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GREEN}44`, padding: "1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>For Further Reading</h3>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                {[
                  { author: "G.K. Beale", title: "The Book of Revelation (NIGTC)", note: "Magisterial commentary; detailed on the Old Testament background of each letter" },
                  { author: "Colin Hemer", title: "The Letters to the Seven Churches of Asia", note: "Definitive historical study of the seven cities and their first-century contexts" },
                  { author: "Eugene Peterson", title: "Reversed Thunder", note: "Meditative and pastoral; excellent on the letters&rsquo; call to faithful endurance" },
                  { author: "Craig Keener", title: "Revelation (NIV Application Commentary)", note: "Accessible and application-focused; strong on the letters&rsquo; contemporary relevance" },
                ].map((book) => (
                  <div key={book.author} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.2, flexShrink: 0 }}>&rsaquo;</span>
                    <div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{book.author}, </span>
                      <em style={{ color: MUTED, fontSize: "0.9rem" }}>{book.title}</em>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }}> &mdash; </span>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: book.note }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer note */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.75rem", textAlign: "center" }}>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "The four letters of Revelation 2 resist reduction to a single lesson. Taken together, they teach that the risen Christ knows each church with piercing clarity, commends genuine faithfulness wherever he finds it, and calls each community to the specific repentance and endurance its particular situation requires. The overcomer in all four letters is not the triumphalist or the escapist but the one who holds fast to Christ through the specific pressures and temptations of their particular time and place, trusting the promises of the one who says: &lsquo;I know your deeds.&rsquo;" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
