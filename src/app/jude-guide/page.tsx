"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

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
const RED = "#EF4444";

type JudeTab =
  | "overview"
  | "contend"
  | "apostates"
  | "examples"
  | "doxology"
  | "michael"
  | "themes"
  | "journal"
  | "videos";

const TABS: { id: JudeTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "contend", label: "Contend for the Faith" },
  { id: "apostates", label: "False Teachers" },
  { id: "examples", label: "OT Examples" },
  { id: "doxology", label: "The Doxology" },
  { id: "michael", label: "Michael & Moses" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const OVERVIEW_FACTS = [
  ["Author", "Jude, brother of James and Jesus"],
  ["Date", "c. AD 60–65"],
  ["Length", "25 verses — one of the shortest NT letters"],
  ["Audience", "Called, beloved, kept for Jesus Christ"],
  ["Key Verse", "Jude 3 — contend for the faith"],
  ["Theme", "Urgent defense against false teaching"],
];

const CONTEND_ITEMS = [
  {
    q: "The Greek Word: Epagōnizesthai",
    a: "The verb translated 'contend' in Jude 3 is epagōnizesthai — a compound of agonizesthai (to agonize, to struggle) and epi (upon, intensively). This is not a casual defense or a polite disagreement. It is athletic language: the agonist in the Greek arena gave everything to win. Jude calls the community to that kind of intense, costly, fully-committed struggle on behalf of the faith. The English word 'agonize' is the direct descendant. The faith demands that level of energy from its defenders.",
  },
  {
    q: "The Faith Once for All Delivered",
    a: "'The faith that was once for all delivered to the saints' — 'once for all' (hapax) signals finality and completeness. The faith is not a developing tradition or an evolving consensus; it was delivered (paradidōmi — the technical term for handing on received tradition, the same word Paul uses in 1 Cor 15:3 and 11:23) as a fixed deposit. It was given to the saints — not to a hierarchy or elite, but to the whole community of the consecrated. What is being contended for is not one's own opinions but the apostolic deposit, the body of Christian truth transmitted from the first witnesses.",
  },
  {
    q: "Jude Changes His Plan",
    a: "Jude's pastoral urgency is evident in a revealing admission: 'Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith' (v.3). He had planned a different letter — a celebration of shared salvation. But something changed his mind: the false teachers had crept in. The letter we have is not the letter Jude wanted to write. It is the letter the crisis demanded. This flash of pastoral realism — a plan interrupted by urgent need — gives the letter its sense of emergency.",
  },
  {
    q: "The Antinomian Problem",
    a: "The false teachers are characterized in verse 4 as people who 'pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ.' The word for 'pervert' (metatithēmi) means to change or transfer — they have repositioned grace from its proper function (forgiveness and freedom from the power of sin) to a license for immorality. This is the antinomian problem that Paul also confronts in Romans 6:1-2: 'Shall we go on sinning so that grace may increase? By no means!' Using grace as a theological cover for moral indulgence is not an edge case — it is a perennial temptation.",
  },
  {
    q: "How to Contend: The Positive Program (vv.17–23)",
    a: "Jude does not only describe what to contend against; he describes how believers are to build themselves up. In verses 17–23 he gives a five-part program: (1) Remember the apostolic teaching — the warnings about mockers in the last time are not surprises. (2) Build yourselves up in your most holy faith — the image is architectural; faith is the material with which you build your interior life. (3) Pray in the Holy Spirit — the Spirit-enabled prayer is the source of spiritual power for the struggle. (4) Keep yourselves in the love of God — this is not passive but active maintenance; stay positioned where divine love is operative. (5) Wait for the mercy of our Lord Jesus Christ — the eschatological hope anchors the present struggle.",
  },
  {
    q: "Mercy While Contending (vv.22–23)",
    a: "'Have mercy on those who doubt; save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh.' Jude's pastoral heart surfaces here. Contending for the faith is not the same as treating everyone caught in error as an enemy. He distinguishes between doubters who need compassionate engagement, those who are in immediate spiritual danger and need to be snatched out (like pulling someone from a fire), and those who have gone deeper into defilement and require mercy mixed with appropriate caution. The pastoral balance — fierce defense of truth, tender care for persons — is the letter's final ethical note.",
  },
];

const APOSTATES_ITEMS = [
  {
    q: "The Stealth Entry: Pareisedysan",
    a: "Verse 4 describes the false teachers as those who 'crept in unnoticed.' The Greek word pareisedysan is a vivid compound — it carries the sense of slipping in alongside, stealthily, like a spy infiltrating through a side door. They did not announce themselves as opponents; they came as members. This is part of what makes Jude's warning so urgent: the threat is internal, not external. The church was not stormed — it was infiltrated. Jude's audience must learn to recognize the enemy within the community of faith.",
  },
  {
    q: "Three Defining Characteristics",
    a: "Jude's description of the false teachers in verse 4 gives three overlapping marks. First, they are 'ungodly' (asebeis — the root of impiety, the opposite of eusebes/godliness). Second, they 'pervert the grace of our God into sensuality' — they use the reality of grace to justify immoral behavior, inverting its purpose. Third, they 'deny our only Master and Lord, Jesus Christ' — this denial may be formal (doctrinal) or practical (living as if he has no authority), likely both. These three characteristics form a coherent pattern: theological distortion produces ethical distortion, which produces a practical rejection of Christ's lordship.",
  },
  {
    q: "The Three Analogies: Cain, Balaam, Korah (v.11)",
    a: "'Woe to them! For they walked in the way of Cain and abandoned themselves for the sake of gain to Balaam's error and perished in Korah's rebellion.' Three OT anti-patterns are compressed into a single verse of devastating judgment. Cain: jealous hatred of the righteous, willingness to destroy rather than acknowledge God's verdict. Balaam: willingness to exploit religious position for financial gain, prophesying for money (cf. 2 Pet 2:15; Num 22–24; Rev 2:14). Korah: rebellion against divinely-ordained authority, the pride that refuses to accept God's appointment of leaders (Num 16). All three resulted in severe divine judgment.",
  },
  {
    q: "Four Metaphors of Spiritual Emptiness (vv.12–13)",
    a: "Jude uses four vivid natural images to describe the false teachers. Hidden reefs: at the love feasts (the shared community meals that included the Lord's Supper), they are like submerged rocks — invisible dangers that can wreck a ship from underneath, caring only for themselves. Waterless clouds: they appear to offer spiritual nourishment but are swept along by winds, yielding nothing, like clouds that promise rain but bring only drought. Fruitless trees uprooted in late autumn: trees that had their chance to produce fruit and failed, now uprooted — doubly dead, no roots, no fruit. Wild waves casting up the foam of their own shame: the turbulent, restless sea was an ancient image of chaos; their moral disorder foams to the surface. Wandering stars reserved for eternal darkness: probably a reference to planets (which appear to wander against the fixed stars), they have no true course and head toward darkness.",
  },
  {
    q: "Relying on Dreams, Rejecting Authority (v.8)",
    a: "'Yet in like manner these people also, relying on their dreams, defile the flesh, reject authority, and blaspheme the glorious ones.' Verse 8 introduces the present application of the three OT examples (Israel, angels, Sodom). Three parallel failures: defiling the flesh (like Sodom), rejecting authority (like Korah), and blaspheming the glorious ones — probably angelic beings or spiritual authorities. The phrase 'relying on their dreams' suggests they justified their behavior by claiming prophetic revelations or ecstatic experiences. Experiential authorization — 'God showed me this in a dream' — is being used to undercut apostolic authority and ethical norms.",
  },
];

const EXAMPLES_ITEMS = [
  {
    q: "The Exodus Generation (v.5)",
    a: "'Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe.' This verse has one of the most theologically charged textual variants in the NT: the best manuscripts read 'Jesus' (Iēsous) rather than 'Lord' or 'God.' This may mean Joshua — his name in Hebrew and Greek is the same — leading the conquest. But a growing number of scholars believe Jude is making a stunning theological claim: it was Jesus who led the Exodus generation, connecting to Paul's statement in 1 Corinthians 10:4 that the rock from which Israel drank 'was Christ.' The pre-incarnate Christ, present with Israel in the wilderness, destroyed the unbelievers who refused to trust him.",
  },
  {
    q: "The Fallen Angels (v.6)",
    a: "'And the angels who did not stay within their own position of authority, but left their proper dwelling, he has kept in eternal chains under gloomy darkness until the judgment of the great day.' The phrase 'did not stay within their own position of authority' translates a single Greek word — archē (their original domain/rank). These angels abandoned the sphere God assigned them and 'left their proper dwelling' (oikētērion — literally, their habitation). Jude's reference connects to the tradition in Genesis 6:1-4 where 'sons of God' took human wives, which Jewish tradition (including 1 Enoch) interpreted as angelic beings crossing the boundary between heaven and earth. They are now in eternal chains, awaiting final judgment — a sobering reminder that even angelic beings are subject to divine judgment when they transgress boundaries.",
  },
  {
    q: "Sodom and Gomorrah (v.7)",
    a: "'Just as Sodom and Gomorrah and the surrounding cities, which likewise indulged in sexual immorality and pursued unnatural desire (heteras sarkos — literally, strange flesh), serve as an example by undergoing a punishment of eternal fire.' The word 'likewise' (hōs) connects Sodom's sin to the angels of verse 6 — both involved crossing divinely established boundaries of nature and propriety. Sodom is not merely a cautionary tale; Jude uses the past event as ongoing evidence, framing it as a 'deigma' — a public display, a permanent example. The punishment of eternal fire is the paradigmatic fate of those who are unrestrained in transgression.",
  },
  {
    q: "Enoch's Prophecy (vv.14–15)",
    a: "'It was also about these that Enoch, the seventh from Adam, prophesied, saying, \"Behold, the Lord comes with ten thousands of his holy ones, to execute judgment on all and to convict all the ungodly of all their deeds of ungodliness that they have committed in such an ungodly way, and of all the harsh things that ungodly sinners have spoken against him.\"' Jude quotes this passage from 1 Enoch 1:9, an apocryphal Jewish text written probably in the 2nd–1st century BC. This is the only explicit NT quotation from a non-canonical Jewish book. Jude treats Enoch's words as genuine prophecy — not necessarily endorsing everything in 1 Enoch, but affirming this specific text as an authentic voice pointing to judgment. Jewish writers commonly cited respected texts from outside the Torah; Jude does so here with theological confidence.",
  },
  {
    q: "Jude's Use of Apocryphal Sources",
    a: "Two of Jude's most vivid illustrations come from non-canonical Jewish texts: the 1 Enoch quotation (vv.14–15) and the dispute over Moses' body (v.9, from the Assumption of Moses). This has raised questions in Christian history about the status of these texts — did Jude 'canonize' them? The most careful answer is no. Jude affirms specific traditions or passages as containing genuine prophetic truth, without endorsing the whole of these works. This was common practice in Second Temple Judaism. The early church debated whether Jude's use of 1 Enoch affected its own canonical status — Tertullian accepted 1 Enoch as Scripture precisely because Jude cited it; the broader church did not. Jude's letter itself was occasionally disputed in early church lists before being accepted as canonical.",
  },
];

const DOXOLOGY_ITEMS = [
  {
    q: "The Text of the Doxology (vv.24–25)",
    a: "'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.' This doxology is one of the most beautiful in Scripture — dense with Christological, soteriological, and eschatological content compressed into two verses. It is structured as an ascription of praise to God, mediated through Christ, spanning all of time.",
  },
  {
    q: "'Able to Keep You from Stumbling'",
    a: "The Greek word translated 'keep from stumbling' is aphylaxai aptaistous — to guard so as to be without stumbling. Aptaistos literally means 'without striking the foot,' non-stumbling, faultless. This single phrase is the pastoral climax of the entire letter. Jude has spent 23 verses describing people who stumbled catastrophically — the unbelieving Israelites, the fallen angels, Sodom, Cain, Balaam, Korah, the false teachers now threatening the community. After all that, the doxology announces: God is able to keep you from the very thing that destroyed them all. The contrast is breathtaking. The threat is real — but the Keeper is greater than the threat.",
  },
  {
    q: "'To Present You Blameless Before His Glory'",
    a: "The verb 'present' (histēmi) in this context carries priestly overtones — it is the language of presenting an offering before God, placing it before the divine presence as acceptable. The community that has been warned about people who are 'hidden reefs at love feasts' and 'waterless clouds' will one day stand before the presence of God's glory — and they will stand blameless (amōmos — without blemish, the very word used of the unblemished sacrificial animal in Leviticus). God will accomplish what no amount of human effort could: making the community fit to stand in his glory.",
  },
  {
    q: "'With Great Joy'",
    a: "The presentation before God is not a moment of terrified examination but of great joy. The word used is agalliasis — exultant, leaping joy, the kind of rejoicing that characterized the Psalms and the eschatological vision of Scripture. The sheep is presented by the shepherd with great joy; the bride is presented before the Father with great joy. After a letter soaked in warning, urgency, and the vocabulary of judgment, the doxology lands on joy. This is not naive optimism but the well-grounded theological certainty that what God begins, he completes, and what he completes, he celebrates.",
  },
  {
    q: "Four Attributes and Three Time Dimensions",
    a: "The doxology ascribes four attributes to God: glory (doxa), majesty (megalōsynē), dominion (kratos), and authority (exousia). These four together cover what belongs to God from every angle — his brightness and honor, his transcendent greatness, his ruling power, and his rightful authority. The time-scope is threefold: 'before all time and now and forever.' Before creation, there was no moment when these belonged to anyone else. Now, in the present history of false teaching and suffering communities, they still belong to God. And forever — beyond the judgment that Jude has described — they will belong to God alone. The doxology situates the community's present crisis within an eternal landscape where God's sovereignty is never in question.",
  },
  {
    q: "The Doxology as Answer to Anxiety",
    a: "There is a pastoral logic to ending this way. Jude has described an urgent, potentially frightening situation: stealth infiltrators, judgment on apostasy, the examples of divine wrath from Israel to Sodom to fallen angels. A letter that began with 'I found it necessary to write' could have ended with further exhortation or stern warning. Instead it ends with a doxology that redirects the reader's gaze from the threat to the Protector, from the false teachers to the God who is able. Many Christians through history have committed these two verses to memory and used them as a daily anchor — the God who kept the universe before time began is able to keep you from stumbling today.",
  },
];

const MICHAEL_ITEMS = [
  {
    q: "The Text and Its Source (v.9)",
    a: "'But when the archangel Michael, contending with the devil, was disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, \"The Lord rebuke you.\"' This story does not appear anywhere in the canonical OT. It derives from the Assumption of Moses (also called the Testament of Moses), a Jewish apocryphal work known from citations in Origen, Didymus, and the Stichometry of Nicephorus. The original text of the Assumption of Moses has been partially preserved, but the specific passage about Michael and Moses' body is known only from Jude's citation and early church references to it. It apparently narrated the dispute at the burial site of Moses on Mt. Nebo.",
  },
  {
    q: "Why Does Moses' Body Matter?",
    a: "The significance of Moses' burial is already heightened in Deuteronomy 34:6, which states that God himself buried Moses and 'no one knows his burial place to this day.' The secrecy of the burial location prevented the site from becoming a shrine or object of veneration. Jewish tradition speculated that the devil sought to claim Moses' body — either as a means of establishing a cult site, or based on a claim that Moses had committed murder (striking the Egyptian) and thus his body belonged to death. Whatever the precise claim, Michael was willing to dispute it but not to render a self-authorizing judgment of condemnation against the devil. He deferred to God: 'The Lord rebuke you' — the same words the angel uses in Zechariah 3:2.",
  },
  {
    q: "The Point Jude Is Making",
    a: "The contrast Jude draws is precise and devastating: Michael the archangel — a being incomparably greater than any human — did not dare to pronounce a 'blasphemous judgment' (blasphēmias krisin) against the devil. He invoked God's authority rather than exercising his own. But the false teachers 'blaspheme whatever they do not understand' (v.10). They speak contemptuously about spiritual authorities and realities that exceed their comprehension. The irony: the highest angelic being models humility and deference; the false teachers — far below angels — model presumption and contempt. The archangel says 'The Lord rebuke you'; the false teachers slander whatever they do not understand.",
  },
  {
    q: "'The Lord Rebuke You' — Zechariah 3:2",
    a: "The phrase 'The Lord rebuke you' appears verbatim in Zechariah 3:2, where the angel of the Lord speaks to Satan who is accusing Joshua the high priest. In that context, the rebuke is God's, not the angel's — the angel is not generating the condemnation but channeling divine authority. Michael's use of the same formula means he recognizes that the ultimate verdict over the devil belongs to God alone. This is a theologically sophisticated form of restraint: not passivity, but reverence — knowing where one's authority ends and God's begins. It serves as a model for how believers should engage even with dark spiritual powers: in the authority of God's name, not their own.",
  },
  {
    q: "What They Don't Understand vs. What They Do Know (v.10)",
    a: "'But these people blaspheme all that they do not understand, and they are destroyed by all that they, like unreasoning animals, know by instinct.' The verse draws a contrast between two kinds of knowledge. In the spiritual realm — the domain of angels, authorities, and transcendent realities — the false teachers are ignorant but presumptuous: they blaspheme what they don't understand. In the bodily realm — appetites, desires, physical instincts — they are like irrational animals, knowing only by instinct and destroyed by it. The double failure is complete: spiritually ignorant and morally bestial. The very things they thought gave them freedom (bodily desires, liberated from apostolic constraints) are the instruments of their destruction.",
  },
];

const THEMES_ITEMS = [
  {
    color: PURPLE,
    title: "Contending for the Faith: Active Struggle",
    text: "Genuine faith in Jude does not float passively in a container of grace. It contends — it struggles, agonizes, pushes back. The verb epagōnizesthai in verse 3 frames the Christian life as athletic contest. This is not aggression toward people but engagement with ideas, worldviews, and teachings that distort the apostolic deposit. The Reformers spoke of the 'faith once delivered' as the objective content of Christian confession (the regula fidei); Jude implies that every generation must actively guard and contend for this deposit, not assuming it will simply survive by inertia.",
  },
  {
    color: RED,
    title: "Grace Is Not a License",
    text: "The letter's core theological warning is about the weaponization of grace. The false teachers pervert the grace of God into sensuality — they use the genuine Christian teaching that we are not saved by moral performance as a license for any and all moral behavior. Paul confronts the same move in Romans 6:1-2 and Galatians 5:13. Grace properly understood does not remove the ethical demands of the kingdom; it empowers fulfillment of them. The Spirit of grace produces the fruit of righteousness. Those who use 'grace' as a theological justification for immorality have not grasped grace at all — they have constructed a caricature of it.",
  },
  {
    color: GOLD,
    title: "Judgment Is Real and Historical",
    text: "Jude's use of three OT examples — Israel in the wilderness, the fallen angels, Sodom and Gomorrah — plus the analogies of Cain, Balaam, and Korah, and the natural metaphors of verses 12-13, builds a cumulative case that judgment on apostasy and ungodliness is not hypothetical. It has historical precedent. The divine judgments of the past are what Jude calls 'examples' (v.7 — deigma, public display) — they were meant to be seen and heeded by subsequent generations. The eschatological judgment of 'the great day' (v.6) will be the culmination of a pattern already visible in history.",
  },
  {
    color: TEAL,
    title: "The Kept Community",
    text: "The word 'keep/guard' (tēreō/phylassō) runs through Jude like a thread. In the opening address, believers are described as 'kept for Jesus Christ' (v.1). In verse 6, the fallen angels 'did not keep' their own position and are now 'kept in eternal chains.' In verse 13, the wandering stars have 'the gloom of utter darkness kept for them forever.' In verse 21, believers are called to 'keep yourselves in the love of God.' In verse 24, God is the one 'able to keep you from stumbling.' The word appears in both divine and human frames: God keeps his people; his people are called to keep themselves in his love; those who refuse to be kept face being kept for judgment. Keeping and being kept are the spiritual axis of the letter.",
  },
  {
    color: BLUE,
    title: "Mercy Alongside Warning",
    text: "Jude 22-23 is often overlooked in treatments of Jude that focus on its warnings. But Jude deliberately closes his body of exhortation with the pastoral balance of mercy. The same people who contend for the faith are to have mercy on doubters, snatch others from fire, and show mercy even to those deeply stained — though with appropriate care. This pastoral balance is the NT's distinctive contribution to the problem of heresy: it is not enough to define and condemn error; the goal is always the rescue and restoration of persons. Jude is not a manual for heresy-hunting but a call to both courageous truth-keeping and compassionate truth-sharing.",
  },
  {
    color: GREEN,
    title: "Doxology as Theological Answer",
    text: "After 23 verses of warning, urgency, and judgment vocabulary, the letter ends with praise. The doxology of verses 24-25 is not an afterthought or liturgical convention — it is the theological climax and the pastoral resolution. All the threats the letter has described are real; but the God who keeps is greater. The enemy entered through a side door; but the God who guards is omnipotent. The false teachers will be judged; but the community will be presented blameless before his glory with great joy. The doxology is Jude's final argument: the security of the believer rests not in their theological vigilance but in the God who is able.",
  },
];

export default function JudeGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<JudeTab>("vine_jude_tab", "overview");

  const [openContend, setOpenContend] = useState<string | null>(null);
  const [openApostates, setOpenApostates] = useState<string | null>(null);
  const [openExamples, setOpenExamples] = useState<string | null>(null);
  const [openDoxology, setOpenDoxology] = useState<string | null>(null);
  const [openMichael, setOpenMichael] = useState<string | null>(null);

  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_jude_journal");
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_jude_journal", JSON.stringify(jEntries)); } catch {}
  }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      verse: jForm.verse,
      reflection: jForm.reflection,
      prayer: jForm.prayer,
    };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const deleteJEntry = useCallback((id: string) => {
    setJEntries(prev => prev.filter(e => e.id !== id));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        {/* Page Header */}
        <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.18) 0%, rgba(13,148,136,0.08) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Link href="/new-testament-survey" style={{ color: MUTED, fontSize: "0.82rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.25rem" }}>
              ← NT Survey
            </Link>
            <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 11, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}>
              JUDE · NT LETTER
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: TEXT, margin: "0 0 0.75rem" }}>
              The Book of Jude
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 660, lineHeight: 1.75, margin: "0 0 1.5rem" }}>
              Twenty-five verses of urgent, theologically dense warning — a letter that changed its own plan to call the church to contend for the faith once for all delivered to the saints.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {[
                { label: "25 Verses", color: PURPLE },
                { label: "General Epistle", color: TEAL },
                { label: "c. AD 60–65", color: GOLD },
                { label: "Contend for the Faith", color: GREEN },
              ].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.78rem", fontWeight: 600 }}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Tab Bar */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}EE`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem", scrollbarWidth: "none" }}>
            {TABS.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "0.9rem 1.1rem",
                  fontSize: "0.82rem",
                  fontWeight: activeTab === t.id ? 700 : 500,
                  color: activeTab === t.id ? PURPLE : MUTED,
                  borderBottom: `2px solid ${activeTab === t.id ? PURPLE : "transparent"}`,
                  background: "none",
                  border: "none",
                  borderBottomWidth: 2,
                  borderBottomStyle: "solid",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 150ms",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 5rem" }}>

          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
                  {OVERVIEW_FACTS.map(([k, v]) => (
                    <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                      <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                  The Letter of Jude is one of the shortest documents in the New Testament — 25 verses — yet few NT letters pack more theological density per sentence. Its author identifies himself as "Jude, a servant of Jesus Christ and brother of James," which most scholars take to mean the Jude named in Matthew 13:55 as one of the brothers of Jesus. Notably, he does not claim apostolic authority ("apostle of Jesus Christ"), calling himself only a "servant" — a deliberate humility that may reflect the early church's careful distinction between those who knew the risen Christ firsthand and those who served in other capacities.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                  The letter is addressed with remarkable warmth to "those who are called, beloved in God the Father and kept for Jesus Christ." Three participial phrases — called, beloved, kept — summarize the entire status of the believer before God. Before a single warning is issued, the community is defined by what God has done: called (summoned into covenant), beloved (held in divine love), and kept (guarded for the purpose of Jesus Christ's return). The body of the letter will describe enormous threats; but the address establishes the foundation on which the community stands.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  The occasion is urgent and specific: false teachers have "crept in unnoticed" (v.4) — the Greek suggests a covert infiltration, like a spy entering through an unlocked door. Jude had planned to write about the shared salvation of the community; instead he writes to sound an alarm. The letter is often studied in tandem with 2 Peter, which uses much of Jude's material (particularly the OT examples and the judgment language), suggesting either literary dependence or a shared tradition responding to a similar crisis in overlapping communities.
                </p>
              </div>

              {/* Structure */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Structure of the Letter</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    ["vv. 1–2", PURPLE, "Greeting — called, beloved, kept; mercy, peace, love multiplied"],
                    ["vv. 3–4", GOLD, "Reason for writing — contend for the faith; false teachers have crept in"],
                    ["vv. 5–7", RED, "Three OT examples of judgment — Israel, fallen angels, Sodom"],
                    ["vv. 8–13", TEAL, "Application to the false teachers — dreamers who defile, reject authority, blaspheme"],
                    ["vv. 14–16", GREEN, "Enoch's prophecy; the grumblers and fault-finders"],
                    ["vv. 17–23", BLUE, "Exhortation to the faithful — build up, pray, keep, wait, show mercy"],
                    ["vv. 24–25", PURPLE, "Doxology — the God who is able to keep and to present blameless"],
                  ].map(([ref, color, desc]) => (
                    <div key={String(ref)} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                      <span style={{ background: `${color as string}22`, border: `1px solid ${color as string}44`, borderRadius: 8, padding: "2px 10px", fontSize: 11, color: color as string, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{ref}</span>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Quote */}
              <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem" }}>
                <p style={{ color: PURPLE, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 10px" }}>
                  &ldquo;Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Jude 3 — the pivot verse that defines the letter&apos;s purpose</p>
              </div>
            </div>
          )}

          {/* ── CONTEND FOR THE FAITH ── */}
          {activeTab === "contend" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: 20 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Contend for the Faith (Jude 3–4, 17–23)</h2>
                <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                  <p style={{ color: PURPLE, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                    &ldquo;I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Jude 3</p>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  The call to contend is not a call to belligerence but to courageous fidelity. The faith that was once for all delivered is a fixed deposit — apostolic, complete, given to the whole community of saints. To contend for it is to refuse to let it be quietly redefined, diluted, or co-opted by those who have crept in with an agenda. The Greek word draws from the language of the athletic arena: the agonist contends with everything he has. Jude calls the church to that same quality of fully-invested, costly, unrelenting engagement on behalf of the truth.
                </p>
              </div>

              {CONTEND_ITEMS.map(item => (
                <div key={item.q} style={{ background: CARD, border: `1px solid ${openContend === item.q ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenContend(openContend === item.q ? null : item.q)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: PURPLE, fontSize: "1.1rem", flexShrink: 0 }}>{openContend === item.q ? "▲" : "▼"}</span>
                  </button>
                  {openContend === item.q && (
                    <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.85, fontSize: 14 }}>{item.a}</div>
                  )}
                </div>
              ))}

              {/* Five-fold positive program highlight */}
              <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem", marginTop: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>The Positive Program: Jude 20–21</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
                  {[
                    "Build up in holy faith",
                    "Pray in the Holy Spirit",
                    "Keep in God's love",
                    "Wait for Christ's mercy",
                    "Show mercy to doubters",
                  ].map(step => (
                    <div key={step} style={{ background: `${PURPLE}18`, borderRadius: 8, padding: "0.6rem 0.9rem", color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── FALSE TEACHERS ── */}
          {activeTab === "apostates" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: 20 }}>
                <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>False Teachers in Jude (vv. 4, 8–13, 16)</h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                  Jude devotes more than half his letter to a precise and damning description of the false teachers who have entered the community. His technique is not systematic theological refutation but characterization — he builds a portrait so vivid and so anchored in recognizable OT precedents that the community will know exactly what kind of people they are dealing with. The portrait is not incidental; it is the center of the letter.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  The vocabulary Jude uses is carefully chosen. &apos;Ungodly&apos; (asebeis) appears four times in the letter (vv.4, 15 twice, 18) — it is Jude&apos;s signature word for the false teachers. The root word refers to people who have no reverence for the divine, who live as if there is no God whose character sets the boundaries of human behavior. All their other failures — the sensuality, the rejection of authority, the blasphemy — flow from this foundational posture of irreverence.
                </p>
              </div>

              {APOSTATES_ITEMS.map(item => (
                <div key={item.q} style={{ background: CARD, border: `1px solid ${openApostates === item.q ? RED : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenApostates(openApostates === item.q ? null : item.q)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: RED, fontSize: "1.1rem", flexShrink: 0 }}>{openApostates === item.q ? "▲" : "▼"}</span>
                  </button>
                  {openApostates === item.q && (
                    <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.85, fontSize: 14 }}>{item.a}</div>
                  )}
                </div>
              ))}

              {/* Three Analogies Summary */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginTop: 16 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Three OT Anti-Types (v.11)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { name: "Cain", color: RED, desc: "Jealous hatred of the righteous brother; violence rather than repentance" },
                    { name: "Balaam", color: GOLD, desc: "Exploiting prophetic office for financial gain; spiritual power for hire" },
                    { name: "Korah", color: TEAL, desc: "Rebellion against God-ordained leadership; self-promotion over divine appointment" },
                  ].map(t => (
                    <div key={t.name} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44`, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{t.name}</span>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── OT EXAMPLES ── */}
          {activeTab === "examples" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: 20 }}>
                <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Old Testament Examples in Jude</h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                  Jude uses more OT and apocryphal material per verse than any other NT letter. In 25 verses, he draws on the Exodus narrative, the Genesis 6 tradition, the destruction of Sodom, the dispute over Moses&apos; body, the prophecy of Enoch, and the stories of Cain, Balaam, and Korah. This density of Jewish tradition reflects Jude&apos;s background and his assumption that his audience shares it. For Jude, the OT is not background color — it is the primary evidence for how God deals with the ungodly.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  The three examples in verses 5-7 form a deliberate pattern: a community delivered by God but destroyed for unbelief (Israel), spiritual beings who overstepped their divinely-assigned domain (the angels), and cities that violated the created order in sexual immorality (Sodom). Together they cover the range of divine judgment: against God&apos;s chosen people who became faithless, against spiritual powers who rebelled, and against Gentile civilizations that transgressed natural law. No category of being is exempt.
                </p>
              </div>

              {EXAMPLES_ITEMS.map(item => (
                <div key={item.q} style={{ background: CARD, border: `1px solid ${openExamples === item.q ? GOLD : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenExamples(openExamples === item.q ? null : item.q)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: GOLD, fontSize: "1.1rem", flexShrink: 0 }}>{openExamples === item.q ? "▲" : "▼"}</span>
                  </button>
                  {openExamples === item.q && (
                    <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.85, fontSize: 14 }}>{item.a}</div>
                  )}
                </div>
              ))}

              {/* Three Examples Grid */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginTop: 16 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Three Judgment Examples (vv.5–7)</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { label: "Israel in Wilderness (v.5)", color: BLUE, desc: "Saved from Egypt, destroyed for unbelief — not even redemption history guarantees immunity from judgment" },
                    { label: "Fallen Angels (v.6)", color: PURPLE, desc: "Left their proper domain, kept in eternal chains — overstepping divine boundaries has permanent consequences" },
                    { label: "Sodom & Gomorrah (v.7)", color: RED, desc: "Pursued unnatural desire, suffer the punishment of eternal fire — displayed as a permanent public example" },
                  ].map(c => (
                    <div key={c.label} style={{ background: BG, borderRadius: 10, padding: "1rem" }}>
                      <div style={{ color: c.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{c.label}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── DOXOLOGY ── */}
          {activeTab === "doxology" && (
            <div>
              <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}55`, borderRadius: 14, padding: "2rem", marginBottom: 20, textAlign: "center" }}>
                <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>Jude 24–25</div>
                <p style={{ color: TEXT, fontSize: "1.1rem", fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic", lineHeight: 1.9, margin: "0 0 14px" }}>
                  &ldquo;Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>One of the most beautiful doxologies in all of Scripture</p>
              </div>

              {/* Attribute Grid */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Four Attributes Ascribed to God</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                  {[
                    { attr: "Glory", greek: "doxa", desc: "The radiant honor and brightness that belongs to God alone" },
                    { attr: "Majesty", greek: "megalōsynē", desc: "The transcendent greatness that exceeds all comparison" },
                    { attr: "Dominion", greek: "kratos", desc: "The ruling power that governs all created reality" },
                    { attr: "Authority", greek: "exousia", desc: "The rightful, legitimate claim to command and judge" },
                  ].map(a => (
                    <div key={a.attr} style={{ background: BG, borderRadius: 10, padding: "1rem" }}>
                      <div style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{a.attr}</div>
                      <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic", marginBottom: 6 }}>{a.greek}</div>
                      <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Dimensions */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: 20 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Three Time Dimensions</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { time: "Before all time", color: TEAL, desc: "Before creation existed, before any creature had a name — glory, majesty, dominion, and authority belonged to God alone. There was never a moment when they did not." },
                    { time: "Now", color: BLUE, desc: "In the present history of infiltrated churches, uncertain believers, and threatened communities — these attributes still belong fully to God. Nothing about the present crisis diminishes them." },
                    { time: "Forever", color: PURPLE, desc: "Beyond the judgment described in the letter, beyond the great day of verse 6, into the endless age — the God who keeps will be glorified, majestic, dominant, authoritative forever." },
                  ].map(t => (
                    <div key={t.time} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                      <span style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44`, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{t.time}</span>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion */}
              {DOXOLOGY_ITEMS.map(item => (
                <div key={item.q} style={{ background: CARD, border: `1px solid ${openDoxology === item.q ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenDoxology(openDoxology === item.q ? null : item.q)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: PURPLE, fontSize: "1.1rem", flexShrink: 0 }}>{openDoxology === item.q ? "▲" : "▼"}</span>
                  </button>
                  {openDoxology === item.q && (
                    <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.85, fontSize: 14 }}>{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── MICHAEL AND MOSES ── */}
          {activeTab === "michael" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Michael, Moses, and the Dispute (Jude 9)</h2>
                <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                  <p style={{ color: TEAL, fontSize: 15, fontWeight: 700, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                    &ldquo;But when the archangel Michael, contending with the devil, was disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, &apos;The Lord rebuke you.&apos;&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Jude 9</p>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                  This verse is unique in the NT — it cites a story found nowhere in the canonical Scriptures. The dispute between Michael and the devil over Moses&apos; body comes from the Assumption of Moses (also known as the Testament of Moses), a Jewish apocryphal work composed in the first century BC or early first century AD. The work was known to the early church — Origen, Clement of Alexandria, and others cite it — but was not included in any canonical list. Only fragments survive; the specific passage Jude references is known primarily through his citation and through early church descriptions of the text.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  Jude&apos;s use of this tradition raises important questions about inspiration, canon, and the relationship between revelation and tradition that early Christians were still working through. His use of it shows that apostolic writers were comfortable drawing from a wide range of Jewish literature when those sources contained genuine truth — a practice consistent with Second Temple Jewish hermeneutics.
                </p>
              </div>

              {MICHAEL_ITEMS.map(item => (
                <div key={item.q} style={{ background: CARD, border: `1px solid ${openMichael === item.q ? TEAL : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenMichael(openMichael === item.q ? null : item.q)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: TEAL, fontSize: "1.1rem", flexShrink: 0 }}>{openMichael === item.q ? "▲" : "▼"}</span>
                  </button>
                  {openMichael === item.q && (
                    <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.85, fontSize: 14 }}>{item.a}</div>
                  )}
                </div>
              ))}

              {/* Contrast Summary */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginTop: 16 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>The Contrast Jude Draws</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}33`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Michael the Archangel</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>Did not dare pronounce a blasphemous judgment against even the devil. Deferred to God: &apos;The Lord rebuke you.&apos; Acknowledged the limits of his own authority. Humility in the face of the demonic.</p>
                  </div>
                  <div style={{ background: `${RED}12`, border: `1px solid ${RED}33`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ color: RED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>The False Teachers</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>Blaspheme whatever they do not understand. Reject all authority. Speak contemptuously of realities beyond their comprehension. Presumption in the face of the transcendent.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── KEY THEMES ── */}
          {activeTab === "themes" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem", marginBottom: 20 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Key Themes in Jude</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Though only 25 verses, Jude carries a full theological payload. These themes connect its urgent pastoral warnings to the wider landscape of NT theology.</p>
              </div>
              {THEMES_ITEMS.map(t => (
                <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: 14 }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
                </div>
              ))}

              {/* Jude and 2 Peter */}
              <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Jude and 2 Peter</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                  The relationship between Jude and 2 Peter is one of the most studied questions in NT introduction. Second Peter 2 shares extensive material with Jude — the same OT examples (angels, Sodom, Balaam), similar vocabulary for the false teachers, and a parallel structure. Most scholars believe either that 2 Peter used Jude (the more common view, since Jude reads more urgent and raw while 2 Peter expands and organizes the material), or that both drew from a common tradition. In either case, studying the two letters together illuminates how the apostolic church responded to a persistent threat of antinomian false teaching with both urgency and theological depth.
                </p>
              </div>
            </div>
          )}

          {/* ── JOURNAL ── */}
          {activeTab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem", marginBottom: 24 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Jude Study Journal</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Record your reflections on Jude&apos;s call to contend, his warnings about false teaching, and the great doxology. What does the God who keeps mean for your life today?
                </p>
              </div>

              {/* Prompts */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: 20 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Reflection Prompts</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Where in your community or personal life is the 'faith once for all delivered' most at risk of being quietly redefined? What would it mean to contend for it there?",
                    "How does the antinomian temptation — using grace as a license — show up in the culture around you, or in your own thinking?",
                    "Meditate on the doxology (Jude 24–25). What does it mean to you personally that God is 'able to keep you from stumbling'?",
                    "Jude calls us to 'keep yourselves in the love of God' (v.21). What does active, deliberate positioning in God's love look like in your daily rhythm?",
                  ].map((q, i) => (
                    <p key={i} style={{ color: GOLD, fontSize: "0.85rem", fontStyle: "italic", margin: 0, paddingLeft: "0.75rem", borderLeft: `2px solid ${GOLD}44` }}>
                      {i + 1}. {q}
                    </p>
                  ))}
                </div>
              </div>

              {/* Entry Form */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem", marginBottom: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Verse / Passage</label>
                    <textarea
                      rows={2}
                      value={jForm.verse}
                      onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))}
                      placeholder="e.g. Jude 3, Jude 24–25, Jude 20–21"
                      style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label>
                    <textarea
                      rows={5}
                      value={jForm.reflection}
                      onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))}
                      placeholder="What do you observe in this passage? What does it show you about God, about the nature of the faith, or about yourself?"
                      style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer Response</label>
                    <textarea
                      rows={3}
                      value={jForm.prayer}
                      onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))}
                      placeholder="How is Jude's letter moving you to pray? What do you want to ask the God who is able to keep?"
                      style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={saveJEntry}
                    style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                  >
                    {jSaved ? "Saved ✓" : "Save Entry"}
                  </button>
                </div>
              </div>

              {/* Saved Entries */}
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Saved Entries ({jEntries.length})</div>
                  {jEntries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                        <button type="button" onClick={() => deleteJEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14, lineHeight: 1 }}>✕</button>
                      </div>
                      {e.verse && (
                        <div style={{ marginBottom: 10 }}>
                          <span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.verse}</p>
                        </div>
                      )}
                      {e.reflection && (
                        <div style={{ marginBottom: 10 }}>
                          <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.reflection}</p>
                        </div>
                      )}
                      {e.prayer && (
                        <div>
                          <span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.prayer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── VIDEOS ── */}
          {activeTab === "videos" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: 24 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Jude</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Sermons, overviews, and lectures on Jude&apos;s urgent call to contend for the faith, the warning against false teachers, and the great doxology that closes the letter.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    videoId: "kCfHCHUSIME",
                    title: "The Book of Jude Explained",
                    desc: "A comprehensive overview of Jude's 25 verses — the occasion of the letter, the stealth infiltrators, the OT examples of judgment, and the stunning doxology that closes the most urgent letter in the New Testament.",
                  },
                  {
                    videoId: "ZGk1hl1nNrw",
                    title: "Contending for the Faith — Jude",
                    desc: "An exposition of Jude 3-4 and 17-23 — what the Greek word epagōnizesthai means, what 'the faith once for all delivered' refers to, and how the positive program of verses 20-23 equips believers to contend without losing their pastoral heart.",
                  },
                  {
                    videoId: "NnGBhG03g4M",
                    title: "Jude's Warning About False Teachers",
                    desc: "A close study of Jude's characterization of the false teachers — the three OT anti-types of Cain, Balaam, and Korah, the four natural metaphors of verses 12-13, and what these pictures teach about recognizing destructive teaching inside the church.",
                  },
                  {
                    videoId: "oNpTha80yyE",
                    title: "Jude's Doxology — God Who Keeps",
                    desc: "A meditation on the doxology of Jude 24-25 — the meaning of 'able to keep from stumbling,' the priestly language of 'present you blameless,' the four divine attributes, the three time dimensions, and why Jude ends a letter of warning with exultant praise.",
                  },
                ].map(v => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "1rem 1.25rem" }}>
                      <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, margin: "0 0 8px" }}>{v.title}</h4>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
