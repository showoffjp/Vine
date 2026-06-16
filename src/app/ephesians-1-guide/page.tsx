"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const KEY_THEMES = [
  {
    color: PURPLE,
    title: "Election Before the Foundation of the World",
    body: "The opening blessing hymn (vv.3-14) reaches back before creation itself: &ldquo;He chose us in him before the foundation of the world, that we should be holy and blameless before him&rdquo; (v.4). The Greek word for &ldquo;chose&rdquo; (eklegomai) is the standard election term from the LXX, the same root as &ldquo;elect.&rdquo; Paul&rsquo;s point is that God&rsquo;s people are not chosen because of their holiness but chosen &ldquo;that we should be holy&rdquo; &mdash; election is the cause of holiness, not its reward. The temporal reach &mdash; &ldquo;before the foundation of the world&rdquo; &mdash; takes the origin of salvation entirely outside of human history and grounds it in the eternal purpose of God. This is the most unambiguous statement of unconditional election in the Pauline letters.",
  },
  {
    color: GOLD,
    title: "Predestination to Adoption Through Jesus Christ",
    body: "Verse 5 moves from election to predestination: &ldquo;he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will.&rdquo; The Greek word (proorisas) means to mark out a boundary in advance &mdash; the destination was settled before the journey began. The destination is stunning: adoption (huiothesia) &mdash; not mere rescue from sin but transformation of legal standing, from alienated creatures to beloved children. The mediating agent is &ldquo;through Jesus Christ,&rdquo; confirming that adoption is not a general human possibility but is specific to union with the Son. The ultimate ground is &ldquo;the purpose of his will&rdquo; &mdash; not human faith as the cause but as the instrument of receiving what was purposed.",
  },
  {
    color: TEAL,
    title: "Redemption Through His Blood and the Mystery of His Will",
    body: "Verses 7-10 describe the accomplishment of God&rsquo;s purpose in history: &ldquo;In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace, which he lavished upon us.&rdquo; Redemption (apolutrosis) carries the background of the slave market &mdash; to buy someone out of bondage. The price is specific: &ldquo;through his blood.&rdquo; The measure is generous: &ldquo;according to the riches of his grace...lavished upon us.&rdquo; The lavishing is intellectual as well as material: God &ldquo;made known to us the mystery of his will&rdquo; &mdash; a mystery hidden in previous ages but now disclosed. The content of the mystery is the eschatological goal: &ldquo;to unite all things in him, things in heaven and things on earth&rdquo; (v.10). The Greek word (anakephalaiosasthai) means to sum up or bring together under one head. Christ is the cosmic center around whom the fragmented creation will be gathered.",
  },
  {
    color: BLUE,
    title: "The Seal of the Holy Spirit as Guarantee",
    body: "After describing the blessings of election, adoption, and redemption, Paul describes the present reality that seals the whole: &ldquo;you were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it&rdquo; (vv.13-14). The seal in the ancient world was a mark of ownership, authenticity, and protection. The Holy Spirit is God&rsquo;s seal &mdash; marking believers as belonging to him, authenticating their status as children, and protecting them until the final day. The word &ldquo;guarantee&rdquo; (arrabon) is a commercial term: a down payment or earnest money that both confirms the transaction and pledges the remainder. The Spirit is not the fullness of the inheritance but its first installment &mdash; the present experience of the Spirit guarantees the future completeness of what God has promised.",
  },
  {
    color: GREEN,
    title: "Paul&rsquo;s Prayer for Wisdom, Revelation, and Power",
    body: "The chapter concludes (vv.15-23) with one of the most searching prayers in the New Testament. Paul prays not for circumstances to improve but for knowledge to deepen: &ldquo;that the God of our Lord Jesus Christ, the Father of glory, may give you the Spirit of wisdom and of revelation in the knowledge of him, having the eyes of your hearts enlightened.&rdquo; Three things Paul prays they would know: the hope of his calling, the riches of the glory of his inheritance in the saints, and &ldquo;the immeasurable greatness of his power toward us who believe.&rdquo; The power he has in view is not abstract but concrete: it is the same power that raised Christ from the dead and seated him at the Father&rsquo;s right hand &ldquo;far above all rule and authority and power and dominion&rdquo; &mdash; and that power is at work in and toward the church.",
  },
  {
    color: ROSE,
    title: "Christ as Head Over All Things to the Church",
    body: "The climax of Ephesians 1 is the exaltation of Christ: raised from the dead, seated at God&rsquo;s right hand in the heavenly places, &ldquo;far above all rule and authority and power and dominion, and above every name that is named, not only in this age but also in the one to come&rdquo; (v.21). God has &ldquo;put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all&rdquo; (vv.22-23). The logic is stunning: the cosmic Christ who rules over every power is given as head &ldquo;to the church.&rdquo; The church is not merely a gathering of saved individuals &mdash; it is the body of the one who fills all things. To be in the church is to be in union with the cosmic ruler of the universe.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Ephesians 1:1-2 -- The Greeting",
    color: GOLD,
    content: "Paul opens as &ldquo;an apostle of Christ Jesus by the will of God&rdquo; &mdash; a phrase that carries the same weight as Galatians 1:1: his apostleship is divinely ordained, not humanly appointed. The recipients are &ldquo;the saints who are in Ephesus,&rdquo; though the earliest manuscripts lack &ldquo;in Ephesus,&rdquo; suggesting the letter may have been a circular letter to multiple churches in the region. The title &ldquo;saints&rdquo; (hagioi -- holy ones) is remarkable: it applies to ordinary believers, not just an exceptional spiritual class. In biblical theology, holiness is primarily positional (set apart by and for God) before it is behavioral. The greeting of &ldquo;grace and peace&rdquo; is Paul&rsquo;s signature blessing -- grace (charis) as the source and peace (eirene) as the fruit.",
  },
  {
    ref: "Ephesians 1:3-6 -- Blessed with Every Spiritual Blessing",
    color: PURPLE,
    content: "Verse 3 opens what is almost certainly a single extended Greek sentence (vv.3-14 in the Greek text are one sentence of 202 words &mdash; the longest in the New Testament). The opening exclamation: &ldquo;Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places.&rdquo; Three blessings are identified in vv.4-6: first, election (&ldquo;he chose us in him before the foundation of the world, that we should be holy and blameless before him&rdquo;); second, predestination (&ldquo;he predestined us for adoption to himself as sons through Jesus Christ&rdquo;); third, the purpose (&ldquo;to the praise of his glorious grace, with which he has blessed us in the Beloved&rdquo;). Each blessing is rooted &ldquo;in him&rdquo; or &ldquo;in Christ&rdquo; &mdash; the phrase appears over and over throughout the hymn, making union with Christ the ground of every spiritual good. The goal of election is not merely personal salvation but the praise of God&rsquo;s glorious grace &mdash; the saved community is itself a demonstration of grace.",
  },
  {
    ref: "Ephesians 1:7-10 -- Redemption, Forgiveness, and the Mystery",
    color: TEAL,
    content: "The second movement of the blessing hymn (vv.7-10) describes redemption and the cosmic mystery. &ldquo;In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace, which he lavished upon us, in all wisdom and insight.&rdquo; The word &ldquo;have&rdquo; is present tense &mdash; redemption is not merely past accomplishment or future hope; it is a present possession of those in Christ. &ldquo;The riches of his grace&rdquo; is a favorite Ephesian phrase &mdash; grace is not meager, barely adequate, or reluctantly given; it is lavished with abundance. Then the disclosure of the mystery (vv.9-10): God &ldquo;made known to us the mystery of his will, according to his purpose, which he set forth in Christ as a plan for the fullness of time, to unite all things in him, things in heaven and things on earth.&rdquo; The word for &ldquo;unite&rdquo; (anakephalaiosasthai) refers to summing up under a single head. The entire creation &mdash; fragmented by sin, divided between heaven and earth, between Jew and Gentile &mdash; is destined to be gathered and unified under Christ as its head. This is the eschatological goal that gives the universe its coherence.",
  },
  {
    ref: "Ephesians 1:11-14 -- Predestination, Inheritance, and the Seal",
    color: BLUE,
    content: "The third movement (vv.11-14) brings the blessing hymn to its present-moment conclusion. &ldquo;In him we have obtained an inheritance, having been predestined according to the purpose of him who works all things according to the counsel of his will, so that we who were the first to hope in Christ might be to the praise of his glory.&rdquo; The phrase &ldquo;we who were the first to hope&rdquo; likely refers to Jewish believers (the &ldquo;we&rdquo; who first hoped through the promises of Israel), in contrast with &ldquo;you also&rdquo; in v.13 (the Gentile readers). Both groups &mdash; Jewish believers and Gentile converts &mdash; are equal heirs of the same inheritance. Then the seal: &ldquo;In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it.&rdquo; The sequence is hearing the gospel, believing, and being sealed &mdash; the Spirit is given at conversion, not as a second experience. The Spirit as arrabon (guarantee, first installment) means that the present experience of the Spirit is a foretaste of the fullness to come.",
  },
  {
    ref: "Ephesians 1:15-19 -- Paul&rsquo;s Prayer for Knowledge and Power",
    color: GREEN,
    content: "Having described the blessings, Paul now prays that believers would come to know them. &ldquo;For this reason, because I have heard of your faith in the Lord Jesus and your love toward all the saints, I do not cease to give thanks for you, remembering you in my prayers.&rdquo; The content of his prayer (vv.17-19): first, &ldquo;that the God of our Lord Jesus Christ, the Father of glory, may give you the Spirit of wisdom and of revelation in the knowledge of him.&rdquo; The knowledge Paul prays for is not abstract information but personal, relational knowledge of God himself. Second, &ldquo;having the eyes of your hearts enlightened, that you may know what is the hope to which he has called you&rdquo; &mdash; the metaphor of the heart&rsquo;s eyes is striking: there is a kind of seeing that is more than intellectual; it is the perception of the whole person oriented toward God. Third, &ldquo;what are the riches of his glorious inheritance in the saints&rdquo; &mdash; the inheritance belongs not only to the saints but God himself has an inheritance &ldquo;in the saints.&rdquo; The community of believers is God&rsquo;s treasure. Fourth, &ldquo;what is the immeasurable greatness of his power toward us who believe&rdquo; &mdash; the Greek word for immeasurable (huperballon) means surpassing, exceeding, overflowing. Paul wants believers to know that the power at work in them is not modest or barely sufficient but exceeding anything they can measure.",
  },
  {
    ref: "Ephesians 1:20-23 -- The Exaltation of Christ and the Church",
    color: ROSE,
    content: "The prayer concludes with one of the most majestic Christological passages in the New Testament. The power Paul prays they would know is the same power &ldquo;that he worked in Christ when he raised him from the dead and seated him at his right hand in the heavenly places, far above all rule and authority and power and dominion, and above every name that is named, not only in this age but also in the one to come.&rdquo; The resurrection and exaltation of Christ are presented as the supreme demonstration of divine power &mdash; more powerful than any force in the created order, now or future. Then the stunning gift: &ldquo;And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.&rdquo; The church is the body of the cosmic Christ. To be in the church is to be incorporated into the organism that is united to the ruler of all things. The word &ldquo;fullness&rdquo; (pleroma) is one Paul uses for the full divine presence &mdash; Christ who fills all things counts the church as his fullness, his completion, his body through which he makes himself present in the world.",
  },
];

const APPLICATION_POINTS = [
  {
    color: PURPLE,
    title: "Security in God&rsquo;s Eternal Election",
    body: "Ephesians 1:4 places the origin of our salvation &ldquo;before the foundation of the world.&rdquo; This is not merely a theological curiosity; it is a foundation for unshakeable security. If God&rsquo;s choice of his people preceded creation, then nothing within creation &mdash; no sin, no failure, no circumstance &mdash; can undo it. The believer who grasps election as Paul presents it is not freed from moral seriousness (election is &ldquo;that we should be holy and blameless&rdquo; &mdash; it is the cause, not the substitute, for holiness) but from the anxiety of a salvation that depends on the precariousness of human faithfulness. The pastoral application: when assurance falters, the correction is not to try harder but to look further back &mdash; to the eternal purpose of God that initiated everything.",
  },
  {
    color: GOLD,
    title: "Living as Those Adopted into God&rsquo;s Family",
    body: "The language of adoption (v.5) is one of the most personally transforming truths in Scripture. In the Greco-Roman world, adoption conferred full legal standing as a son &mdash; including inheritance rights and the right to bear the family name. Paul uses this precisely: believers are not slaves conditionally tolerated in God&rsquo;s household; they are adopted children with all the standing of the Son himself. Romans 8:15-17 unpacks the same truth: &ldquo;you have received the Spirit of adoption as sons, by whom we cry, &lsquo;Abba! Father!&rsquo;&rdquo; The application is profound: the posture of prayer, the confidence in approaching God, the freedom from striving for divine acceptance &mdash; all of these are shaped by whether one actually believes one is an adopted child. Many believers live as anxious strangers when they are, in fact, beloved sons and daughters.",
  },
  {
    color: TEAL,
    title: "The Spirit as Guarantee of Future Glory",
    body: "The description of the Spirit as arrabon (guarantee, earnest, first installment) in verse 14 has immediate practical implications. Every genuine experience of the Holy Spirit &mdash; answered prayer, fruit of the Spirit, sense of God&rsquo;s presence, conviction of sin, love for the community &mdash; is not a peak experience to be chased or a credential to be earned. It is a down payment on something infinitely greater. This reframes the Christian experience of suffering, limitation, and incompleteness: the reason we &ldquo;groan inwardly&rdquo; (Romans 8:23) is that we have been given the firstfruits of the Spirit, which creates an appetite for the fullness not yet received. The appropriate response to the Spirit as guarantee is not to grasp for more now but to hold what we have received with gratitude and wait in confident hope for what is coming.",
  },
  {
    color: BLUE,
    title: "Praying for Deepened Knowledge of God&rsquo;s Power at Work in Us",
    body: "Paul&rsquo;s prayer in vv.15-23 is a model for Christian intercession. He does not pray for health, wealth, circumstances, or comfort &mdash; he prays for knowledge. Specifically: knowledge of the hope of God&rsquo;s calling, knowledge of the riches of God&rsquo;s inheritance in the saints, and knowledge of the immeasurable greatness of God&rsquo;s power toward believers. The third element is especially striking: Paul wants the Ephesians to know that the power of the resurrection &mdash; the power that defeated death and exalted Christ above every cosmic authority &mdash; is the same power at work in them. The application is not to seek dramatic experiences of power but to pray persistently for the Spirit of wisdom and revelation that progressively opens the eyes of the heart to what is already true in Christ.",
  },
  {
    color: GREEN,
    title: "The Church as the Body of the Cosmic Christ",
    body: "The conclusion of Ephesians 1 (vv.22-23) offers a vision of the church that shatters any reduced understanding of it as a social club, a service organization, or merely a gathering of like-minded individuals. The church is &ldquo;the fullness of him who fills all in all.&rdquo; The cosmic Christ &mdash; who rules over every power in the universe &mdash; is embodied in and through the gathered community of believers. This means that the local church, for all its imperfections, is not peripheral to God&rsquo;s plan; it is the primary theater in which his glory is displayed to the &ldquo;rulers and authorities in the heavenly places&rdquo; (Ephesians 3:10). The application is both humbling and elevating: the mundane life of a local congregation is, in God&rsquo;s economy, cosmic in significance.",
  },
  {
    color: ROSE,
    title: "The Praise of His Glorious Grace as the Goal of All Things",
    body: "Ephesians 1 repeats the phrase &ldquo;to the praise of his glory&rdquo; or &ldquo;to the praise of his glorious grace&rdquo; three times (vv.6, 12, 14) &mdash; at the conclusion of each of the three movements of the blessing hymn. This repetition is not accidental; it is the structural and theological hinge of the entire passage. Election is &ldquo;to the praise of his glorious grace.&rdquo; The Jewish believers&rsquo; hope is &ldquo;to the praise of his glory.&rdquo; The Spirit&rsquo;s seal is &ldquo;to the praise of his glory.&rdquo; The ultimate purpose of salvation is not human happiness (though happiness results) or even human holiness (though holiness is the means) -- it is the endless praise of the grace and glory of God. This reorients every other purpose: life, ministry, suffering, joy &mdash; all are given their proper orientation when they are aimed at the praise of his glory.",
  },
];

const videoItems = [
  { videoId: "Y71r0dPeMkE", title: "The Book of Ephesians Overview -- BibleProject" },
  { videoId: "xGm2HMvTzm4", title: "Ephesians 1 -- Spiritual Blessings in Christ, Teaching Series" },
  { videoId: "mNPt4WbNLtM", title: "Election and Predestination in Ephesians 1 -- Theological Study" },
  { videoId: "p8KlLqp0HxY", title: "Paul&rsquo;s Prayer in Ephesians 1:15-23 -- Sermon and Application" },
];

export default function Ephesians1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0d0920 0%, #07070F 60%, #080e1a 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 16px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ background: `${PURPLE}22`, color: PURPLE, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>Bible Study</span>
            <span style={{ color: MUTED, fontSize: 13 }}>&mdash; Ephesians Series</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.15, letterSpacing: -0.5 }}>
            Ephesians 1: <span style={{ color: PURPLE }}>The Great Blessing Hymn</span>
          </h1>
          <p dangerouslySetInnerHTML={{ __html: "One of the most theologically rich chapters in the entire New Testament &mdash; a single soaring sentence of praise that reaches from eternity past to eternity future, encompassing election, adoption, redemption, the cosmic mystery, and the sealing of the Spirit." }} style={{ color: MUTED, lineHeight: 1.7, fontSize: 16, maxWidth: 650, marginBottom: 24 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Ephesians 1:1-23", color: GOLD },
              { label: "Election &amp; Predestination", color: PURPLE },
              { label: "Redemption by His Blood", color: TEAL },
              { label: "The Seal of the Spirit", color: BLUE },
            ].map((tag) => (
              <span key={tag.label} dangerouslySetInnerHTML={{ __html: tag.label }} style={{ background: `${tag.color}18`, color: tag.color, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, border: `1px solid ${tag.color}35` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Intro callout */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 0" }}>
        <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 12, padding: "20px 24px", marginBottom: 28 }}>
          <p dangerouslySetInnerHTML={{ __html: "&ldquo;Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places, even as he chose us in him before the foundation of the world, that we should be holy and blameless before him.&rdquo;" }} style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 6, fontSize: 15 }} />
          <p style={{ color: MUTED, fontSize: 13 }}>Ephesians 1:3-4 (ESV)</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 20px",
                borderRadius: 24,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                background: activeTab === t.id ? PURPLE : CARD,
                color: activeTab === t.id ? "#fff" : MUTED,
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Introduction to Ephesians 1</h2>

            <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>Historical Setting</h3>
                <p dangerouslySetInnerHTML={{ __html: "Ephesians was written from prison, probably during Paul&rsquo;s Roman imprisonment (c. AD 60-62). Ephesus was the most important city in the province of Asia &mdash; a major commercial hub, home to the Temple of Artemis (one of the Seven Wonders of the ancient world), and a center of occult practice and spiritual power. Acts 19 describes Paul&rsquo;s ministry there: dramatic encounters with sorcery, exorcism, and the riot led by Demetrius the silversmith. The prevalence of spiritual powers in Ephesian culture helps explain why Ephesians speaks so extensively about Christ&rsquo;s supremacy over all cosmic rulers and authorities. The earliest manuscripts lack &ldquo;in Ephesus,&rdquo; suggesting this may have been a circular letter to the churches of Asia." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>Structure of Ephesians 1</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { ref: "vv. 1-2", label: "Apostolic greeting -- saints in Ephesus, grace and peace" },
                    { ref: "vv. 3-6", label: "First blessing -- chosen before the world, predestined for adoption" },
                    { ref: "vv. 7-10", label: "Second blessing -- redemption through his blood, the mystery of summing up all things" },
                    { ref: "vv. 11-14", label: "Third blessing -- inheritance obtained, sealed with the promised Holy Spirit" },
                    { ref: "vv. 15-19", label: "Paul&rsquo;s prayer -- Spirit of wisdom, eyes of heart enlightened, immeasurable power" },
                    { ref: "vv. 20-23", label: "The exaltation of Christ -- above all rule, head over all things to the church" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span dangerouslySetInnerHTML={{ __html: item.ref }} style={{ color: PURPLE, fontWeight: 700, fontSize: 12, minWidth: 60, paddingTop: 2 }} />
                      <span dangerouslySetInnerHTML={{ __html: item.label }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: BLUE, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>The Blessing Hymn (Berakah)</h3>
                <p dangerouslySetInnerHTML={{ __html: "Verses 3-14 form a single Greek sentence of 202 words &mdash; the longest in the New Testament. Scholars call it a berakah (from the Hebrew form &ldquo;Blessed be God who...&rdquo;). The structure follows a Trinitarian pattern: the Father elects and predestines (vv.3-6), the Son redeems and reveals the mystery (vv.7-10), and the Spirit seals and guarantees (vv.11-14). Each section ends with the refrain &ldquo;to the praise of his glory&rdquo; &mdash; the threefold repetition is the structural spine of the hymn. The hymn does not argue or explain; it worships. It is meant to be inhabited and sung before it is analyzed." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Key Words in Ephesians 1</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { word: "Eklegomai (v.4)", def: "To choose, to elect. Used in the LXX for God&rsquo;s choice of Israel; here applied to the church. The basis: &ldquo;in him&rdquo; and &ldquo;before the foundation of the world.&rdquo;" },
                    { word: "Proorisas (v.5)", def: "To predestine, to mark out in advance. The boundary (horos) of the destination was set (pro -- before) from eternity. The destination: adoption as sons." },
                    { word: "Huiothesia (v.5)", def: "Adoption as sons. A legal term giving full sonship status and inheritance rights. Used only by Paul in the NT (also Romans 8:15, 23; 9:4; Galatians 4:5)." },
                    { word: "Apokalupsis (v.17)", def: "Revelation -- an unveiling. Paul prays for the Spirit of apokalupsis -- the same root as the book of Revelation, an ongoing disclosure of God&rsquo;s character." },
                    { word: "Arrabon (v.14)", def: "Guarantee, first installment, earnest money. A Semitic commercial term absorbed into Greek. The Spirit is the arrabon -- the down payment that guarantees the full inheritance." },
                    { word: "Pleroma (v.23)", def: "Fullness, completeness. The church is &ldquo;the fullness of him who fills all in all&rdquo; -- the community through which the cosmic Christ is present in the world." },
                  ].map((item, i) => (
                    <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 12 }}>
                      <p style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{item.word}</p>
                      <p dangerouslySetInnerHTML={{ __html: item.def }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>The &ldquo;In Christ&rdquo; Formula</h3>
                <p dangerouslySetInnerHTML={{ __html: "One of the most striking features of Ephesians 1 is the repeated phrase &ldquo;in him,&rdquo; &ldquo;in Christ,&rdquo; or &ldquo;in the Beloved&rdquo; &mdash; it appears approximately eleven times in the opening fourteen verses. Every spiritual blessing is located &ldquo;in Christ&rdquo; (v.3). Election is &ldquo;in him&rdquo; (v.4). Redemption is &ldquo;in him&rdquo; (v.7). The mystery of God&rsquo;s will is summed up &ldquo;in him&rdquo; (v.10). The inheritance is obtained &ldquo;in him&rdquo; (v.11). The seal of the Spirit is received &ldquo;in him&rdquo; (v.13). This is the doctrine of union with Christ: not that God bestows blessings from a distance upon individuals, but that all blessings are found in and inseparable from Christ himself. To have Christ is to have them all; to be separated from Christ is to lack all of them." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Key Themes in Ephesians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Ephesians 1 is arguably the most theologically concentrated chapter in the New Testament. These six themes are not separate ideas but facets of a single gem &mdash; the grace of God in Christ that runs from eternity past to eternity future." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
            <div style={{ display: "grid", gap: 16 }}>
              {KEY_THEMES.map((theme, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}35`, borderLeft: `4px solid ${theme.color}`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: theme.color, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>{theme.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: theme.body }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginTop: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Theological Debates in Ephesians 1</h3>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  { title: "Election: Unconditional or Conditional?", body: "Reformed theology reads Ephesians 1:4 as unconditional election &mdash; God chose without foreseen faith as the basis. Arminian theology reads it as election &ldquo;in Christ&rdquo; corporately, with individual participation conditioned on faith. The text does not explicitly resolve the debate, but the temporal depth (&ldquo;before the foundation of the world&rdquo;) and the phrase &ldquo;according to the purpose of his will&rdquo; (v.5) push strongly toward unconditionality.", color: PURPLE },
                  { title: "Foreknowledge and Predestination", body: "Romans 8:29 links foreknowledge to predestination; Ephesians 1 does not mention foreknowledge. This absence is itself significant: Paul anchors everything in the will, purpose, and pleasure of God rather than in his prior knowledge of human choices. The difference matters: if predestination is based on foreseen faith, then faith is ultimately the decisive human contribution; if predestination precedes and causes faith, then grace is sovereign all the way through.", color: TEAL },
                  { title: "The Scope of &ldquo;All Things&rdquo; in v.10", body: "The mystery of uniting &ldquo;all things in him, things in heaven and things on earth&rdquo; raises the question of scope. Does this include all people (universalism)? Most interpreters read it as the reconciliation of the cosmic order (not necessarily every individual) under Christ&rsquo;s headship &mdash; consistent with Colossians 1:20 but not implying universal salvation. The focus is on the healing of the creation itself, fragmented by sin, not on the fate of every individual soul.", color: BLUE },
                ].map((item, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${item.color}60`, paddingLeft: 14 }}>
                    <p style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.title}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.body }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "verse" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Verse by Verse: Ephesians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Click each passage to expand the verse-by-verse commentary. Work through each section to understand the full sweep of Paul&rsquo;s soaring blessing hymn and intercessory prayer." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
            <div style={{ display: "grid", gap: 12 }}>
              {VERSE_SECTIONS.map((section, i) => {
                const isOpen = openVerse === section.ref;
                return (
                  <div key={i} style={{ background: CARD, border: `1px solid ${isOpen ? section.color + "60" : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                    <button
                      onClick={() => setOpenVerse(isOpen ? "" : section.ref)}
                      style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0, display: "block" }} />
                        <span dangerouslySetInnerHTML={{ __html: section.ref }} style={{ fontWeight: 700, fontSize: 14 }} />
                      </div>
                      <span style={{ color: MUTED, fontSize: 16, flexShrink: 0 }}>{isOpen ? "^" : "v"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 20px 20px" }}>
                        <div style={{ height: 1, background: `${section.color}30`, marginBottom: 16 }} />
                        <p dangerouslySetInnerHTML={{ __html: section.content }} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 20, marginTop: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>The Trinitarian Structure of the Blessing Hymn</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  { person: "The Father", ref: "vv. 3-6", action: "Elects and predestines -- chooses us before the foundation of the world, predestines us for adoption, freely gives his grace in the Beloved", color: GOLD },
                  { person: "The Son", ref: "vv. 7-10", action: "Redeems and reveals -- his blood purchases our redemption and forgiveness, his work discloses the mystery of uniting all things under his headship", color: TEAL },
                  { person: "The Spirit", ref: "vv. 11-14", action: "Seals and guarantees -- the promised Spirit marks believers as God&rsquo;s own and is the arrabon, the first installment of the full inheritance to come", color: BLUE },
                ].map((item, i) => (
                  <div key={i} style={{ background: `${item.color}10`, border: `1px solid ${item.color}30`, borderRadius: 10, padding: 14 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 14 }}>{item.person}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{item.ref}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: item.action }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} />
                  </div>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Each section concludes with the refrain &ldquo;to the praise of his glory&rdquo; &mdash; the threefold doxology that frames the entire hymn. Salvation is Trinitarian in its execution and doxological in its goal." }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginTop: 14 }} />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Application: Living Ephesians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Ephesians 1 is not primarily a theological lecture &mdash; it is a doxology that seeks to reshape the entire inner life. Paul wants the Ephesians (and us) to inhabit these truths so deeply that they transform how we pray, how we live, and how we see the church." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />

            <div style={{ display: "grid", gap: 16, marginBottom: 28 }}>
              {APPLICATION_POINTS.map((point, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${point.color}35`, borderLeft: `4px solid ${point.color}`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: point.color, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>{point.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: point.body }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
                </div>
              ))}
            </div>

            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Reflection Questions</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "Paul prays that the eyes of your heart would be enlightened (v.18). What does it mean for you that the knowledge he prays for is a perception of the heart, not merely the intellect? What would it look like to ask for this regularly?",
                  "The word &ldquo;lavished&rdquo; (v.8) describes how God gives his grace. Where in your life are you relating to God as though he gives grace reluctantly or sparingly? How does &ldquo;lavished&rdquo; correct that picture?",
                  "The Spirit is described as the &ldquo;guarantee&rdquo; of the full inheritance (v.14). Where in your experience of the Spirit do you most sense the taste of something not yet fully received? How does this make you groan &mdash; and hope?",
                  "The church is described as &ldquo;the fullness of him who fills all in all&rdquo; (v.23). How does this vision of the church change how you show up to your local congregation, with all its imperfections?",
                  "Election is &ldquo;that we should be holy and blameless before him&rdquo; (v.4). How does grounding holiness in God&rsquo;s purpose rather than our effort change how you pursue it?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: `${PURPLE}25`, color: PURPLE, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                    <p dangerouslySetInnerHTML={{ __html: q }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ color: BLUE, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Using Paul&rsquo;s Prayer as Your Own</h3>
              <p dangerouslySetInnerHTML={{ __html: "One of the most formative practices emerging from Ephesians 1 is to pray Paul&rsquo;s prayer (vv.15-19) for specific people in your life. Rather than only praying about circumstances, pray that God would give them &ldquo;the Spirit of wisdom and revelation in the knowledge of him&rdquo; &mdash; that the eyes of their hearts would be opened to see the hope of their calling, the riches of his inheritance, and the immeasurable greatness of his power. This kind of prayer aligns with what God has already purposed (election, predestination, redemption) and participates in the Spirit&rsquo;s work of illumination. It is also humbling: it reminds us that the deepest need of those we love is not circumstantial relief but the knowledge of God." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Suggested Study Practice</h3>
              <p dangerouslySetInnerHTML={{ __html: "Read Ephesians 1 slowly in one sitting, then read vv.3-14 aloud three times, once for each person of the Trinity &mdash; listening first for the Father&rsquo;s work (vv.3-6), then the Son&rsquo;s (vv.7-10), then the Spirit&rsquo;s (vv.11-14). After each reading, pause and name one thing you heard that you had not noticed before. Then spend ten minutes with vv.15-19: read Paul&rsquo;s prayer and write the name of one person beside each request. Finally, return to verse 3 and simply sit with the phrase &ldquo;every spiritual blessing in the heavenly places in Christ&rdquo; &mdash; asking: what would it look like to actually believe this is true of me, right now?" }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
            </div>
          </div>
        )}

        {/* Video Section -- always visible */}
        <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 40, paddingTop: 32, paddingBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
          <p dangerouslySetInnerHTML={{ __html: "Deepen your study of Ephesians 1 with these curated video teachings on the blessing hymn and Paul&rsquo;s prayer." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
          <div style={{ display: "grid", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p dangerouslySetInnerHTML={{ __html: item.title }} style={{ color: TEXT, fontWeight: 600, fontSize: 14, margin: 0 }} />
                  <p dangerouslySetInnerHTML={{ __html: "Ephesians 1 &mdash; Bible Study" }} style={{ color: MUTED, fontSize: 12, marginTop: 4, margin: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Further Study */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 16 }}>Further Study: Related Passages</h3>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { ref: "Romans 8:28-39", desc: "Paul&rsquo;s second great election and assurance passage -- foreknowledge, predestination, calling, justification, glorification, and the unbreakable love of God in Christ" },
              { ref: "Colossians 1:15-20", desc: "The parallel Christological hymn &mdash; Christ as firstborn over all creation, head of the church, the one in whom all the fullness of God dwells" },
              { ref: "John 6:37-44", desc: "Jesus&rsquo; teaching on election and the sovereignty of the Father in drawing people to the Son &mdash; the Gospel parallel to Ephesians 1:4-5" },
              { ref: "Romans 11:33-36", desc: "Paul&rsquo;s doxology at the end of the election chapters &mdash; &ldquo;Oh, the depth of the riches and wisdom and knowledge of God!&rdquo; &mdash; the natural response to Ephesians 1-type theology" },
              { ref: "Ephesians 3:14-21", desc: "Paul&rsquo;s second prayer in Ephesians &mdash; for the power to comprehend the breadth, length, height, and depth of the love of Christ" },
              { ref: "2 Corinthians 1:22 and 5:5", desc: "Paul&rsquo;s other uses of the arrabon (guarantee) language &mdash; the Spirit as the down payment of the coming inheritance, a foretaste of the resurrection life" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, borderLeft: `3px solid ${PURPLE}50`, paddingLeft: 12 }}>
                <div>
                  <p style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{item.ref}</p>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
