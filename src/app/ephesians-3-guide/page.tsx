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
const TEAL = "#0D9488";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const overviewParagraphs: string[] = [
  "Ephesians 3 stands at the hinge of the letter &mdash; the transition from Paul&rsquo;s great doctrinal exposition of the church as God&rsquo;s new humanity (chapters 1&ndash;3) to the ethical application of those truths for life together (chapters 4&ndash;6). The chapter opens with Paul beginning a prayer (&ldquo;For this reason I, Paul, prisoner of Christ Jesus for you Gentiles&rdquo; &mdash; 3:1) and then immediately interrupting himself with a digression about his own calling. By the time he returns to the prayer at verse 14, he has given one of the most comprehensive accounts in the New Testament of the mystery of the gospel and the role of the church in God&rsquo;s eternal purposes.",
  "The &ldquo;mystery&rdquo; Paul speaks of is a specific revelation: &ldquo;that the Gentiles are fellow heirs, members of the same body, and partakers of the promise in Christ Jesus through the gospel&rdquo; (3:6). This is not a general spiritual truth that was always obvious; it was &ldquo;hidden for ages and generations&rdquo; (Colossians 1:26) and is now revealed. The astonishing news is not merely that Gentiles can be saved &mdash; the Old Testament anticipated that &mdash; but that they are incorporated into the same body as Jewish believers, with equal standing, without having to become Jews. Jew and Gentile together form a single new humanity in Christ.",
  "Paul&rsquo;s description of his own calling in this chapter is one of the most self-aware and self-effacing passages he ever wrote: &ldquo;To me, though I am the very least of all the saints, this grace was given, to preach to the Gentiles the unsearchable riches of Christ&rdquo; (3:8). The man who once persecuted the church and counted himself the chief of sinners (1 Timothy 1:15) is now commissioned to carry the most lavish good news imaginable &mdash; &ldquo;the unsearchable riches of Christ&rdquo; &mdash; to those who had previously been &ldquo;separated from Christ, alienated from the commonwealth of Israel and strangers to the covenants of promise, having no hope and without God in the world&rdquo; (2:12). The gospel Paul preaches is the reversal of all that estrangement.",
  "The church, Paul declares, is not merely a social gathering of believers but God&rsquo;s instrument for displaying his wisdom: &ldquo;so that through the church the manifold wisdom of God might now be made known to the rulers and authorities in the heavenly places&rdquo; (3:10). The word &ldquo;manifold&rdquo; (polypoikilos) appears only here in the New Testament and suggests a richly variegated pattern, like a tapestry woven from many different threads. The diversity of the church &mdash; people from every ethnicity, culture, and background united in Christ &mdash; is itself a display of divine wisdom that astonishes even the angelic powers.",
  "The chapter closes with one of the great prayers of the Bible (3:14&ndash;21) and a doxology that crowns it. Paul prays that the Ephesians will be &ldquo;strengthened with power through his Spirit in the inner being, so that Christ may dwell in your hearts through faith.&rdquo; He prays that they will be &ldquo;rooted and grounded in love&rdquo; and be &ldquo;able to comprehend with all the saints what is the breadth and length and height and depth&rdquo; of the love of Christ and &ldquo;to know the love of Christ that surpasses knowledge.&rdquo; The prayer culminates in the desire that they be &ldquo;filled with all the fullness of God&rdquo; &mdash; one of the most staggering petitions in Scripture.",
  "The doxology that closes the chapter (&ldquo;Now to him who is able to do far more abundantly than all we ask or think, according to the power at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.&rdquo; &mdash; 3:20&ndash;21) is the natural response to a God whose mystery is this large, whose wisdom is this rich, and whose love is this immeasurable. Ephesians 3 invites us to stop living in the shallows of what we can ask or imagine and to trust the God who can do far beyond our best thinking.",
];

const keyThemes: { title: string; color: string; body: string }[] = [
  {
    title: "The Mystery Hidden for Ages &mdash; Now Revealed",
    color: PURPLE,
    body: "The word &ldquo;mystery&rdquo; in Paul&rsquo;s letters refers not to something spooky or incomprehensible but to something that was previously hidden and is now revealed. The specific mystery of Ephesians 3 is the full inclusion of the Gentiles as &ldquo;fellow heirs, members of the same body, and partakers of the promise in Christ Jesus through the gospel&rdquo; (3:6). This is not just that Gentiles can be saved alongside Israel, which the Old Testament anticipated (Genesis 12:3; Isaiah 49:6), but that Gentile and Jewish believers form a single new humanity &mdash; one body &mdash; without ethnic distinction in their covenant standing. This is a new thing in the history of redemption, revealed by the Spirit to apostles and prophets (3:5), and Paul is its principal herald.",
  },
  {
    title: "The Grace Given to Paul: The Least of All Saints",
    color: GREEN,
    body: "Paul&rsquo;s self-description in this chapter is remarkable for its combination of confidence and self-abasement. He speaks of &ldquo;the grace given to me&rdquo; (3:7, 3:8) as the foundation of his ministry &mdash; not his qualifications, zeal, or spiritual achievements but a gift he did not deserve. And in the same breath he calls himself &ldquo;the very least of all the saints.&rdquo; The superlative is deliberate and probably alludes to his history as a persecutor of the church. The man least deserving of the commission has been given the greatest commission: to preach &ldquo;the unsearchable riches of Christ&rdquo; to the whole Gentile world. Paul&rsquo;s ministry is itself a demonstration of the grace he proclaims.",
  },
  {
    title: "The Unsearchable Riches of Christ",
    color: GOLD,
    body: "The phrase &ldquo;unsearchable riches&rdquo; (3:8) uses a word (anexichniastos) that means untraceable, untrackable &mdash; like the footprints of someone who has walked across the sea. There is no bottom to the riches of Christ; no point at which a believer could say, &ldquo;I have now comprehended all that Christ is and all that he has given.&rdquo; Paul himself, after decades of knowing Christ, still speaks of straining forward toward what lies ahead (Philippians 3:13). The riches are the entirety of what Christ is and offers: his righteousness, his adoption, his inheritance, his Spirit, his fellowship, his love, his fullness. To preach these riches is not a task that can be completed; it is an inexhaustible commission.",
  },
  {
    title: "The Manifold Wisdom of God Made Known Through the Church",
    color: TEAL,
    body: "One of the most surprising claims in Ephesians 3 is that the church &mdash; the community of diverse believers united in Christ &mdash; is God&rsquo;s chosen display case for his wisdom, not just to human observers but to &ldquo;the rulers and authorities in the heavenly places&rdquo; (3:10). The church is a cosmic announcement. When Jews and Gentiles, rich and poor, educated and uneducated, people from every nation and tongue, are genuinely united in love around the Lord Jesus Christ, something is being proclaimed in the spiritual realm about the wisdom and power of God that could not be proclaimed any other way. The reconciliation of human enemies through the cross is the masterwork of divine wisdom on display.",
  },
  {
    title: "Strength in the Inner Being &mdash; Christ Dwelling in the Heart",
    color: PURPLE,
    body: "The first petition of Paul&rsquo;s prayer is for strength: &ldquo;that according to the riches of his glory he may grant you to be strengthened with power through his Spirit in the inner being&rdquo; (3:16). The inner being (the inner person, the heart and will) is where spiritual life is generated and where spiritual battle is fought. Paul does not pray for better circumstances or easier paths but for internal strength to meet whatever circumstances arise. The result of that strengthening is &ldquo;that Christ may dwell in your hearts through faith&rdquo; (3:17). This is not Christ&rsquo;s initial indwelling at conversion but a progressive, deepening inhabitation &mdash; a settled making of his home in the believer&rsquo;s inner life.",
  },
  {
    title: "The Love of Christ That Surpasses Knowledge",
    color: "#E11D48",
    body: "The paradox at the heart of Paul&rsquo;s prayer is the invitation to &ldquo;know the love of Christ that surpasses knowledge&rdquo; (3:19). How can you know something that surpasses knowledge? Paul is describing an experiential apprehension that goes beyond propositional information. The &ldquo;breadth and length and height and depth&rdquo; of Christ&rsquo;s love (3:18) are not four measurements Paul expects us to calculate but a fourfold expression of infinitude &mdash; this love extends in every direction without limit. To know it is to be immersed in it, overwhelmed by it, and grounded in it &mdash; not to have catalogued all its dimensions. And the goal is breathtaking: &ldquo;that you may be filled with all the fullness of God&rdquo; (3:19).",
  },
];

const verseByVerse: { ref: string; heading: string; color: string; paras: string[] }[] = [
  {
    ref: "Ephesians 3:1&ndash;7",
    heading: "The Prisoner of Christ Jesus &mdash; The Mystery Made Known",
    color: PURPLE,
    paras: [
      "&ldquo;For this reason I, Paul, prisoner of Christ Jesus for you Gentiles&rdquo; (3:1). The opening is striking: Paul identifies himself not as an apostle or a servant but as a prisoner. He is writing from prison (almost certainly Rome), and yet he does not describe himself as Caesar&rsquo;s prisoner but Christ&rsquo;s prisoner. His imprisonment is, in his understanding, not a setback to his ministry but a consequence of it. He is in prison &ldquo;for you Gentiles&rdquo; &mdash; his mission to the nations is what provoked the conflict that led to his arrest (Acts 21&ndash;22). His chains are the mark of his fidelity to the mystery he is about to describe.",
      "Before completing the thought he has begun, Paul interrupts himself with an account of the revelation he has received. &ldquo;The mystery was made known to me by revelation&rdquo; (3:3). This mystery had been &ldquo;hidden for ages in God who created all things&rdquo; (3:9) &mdash; not partially revealed but kept in divine reserve until the appointed time. Now it has been disclosed: &ldquo;the Gentiles are fellow heirs, members of the same body, and partakers of the promise in Christ Jesus through the gospel&rdquo; (3:6). Three compound words describe their inclusion: fellow heirs, fellow members, fellow partakers. All three carry the prefix &ldquo;together with&rdquo; (syn-), underscoring that Gentile believers are not a separate class or an inferior category but fully incorporated into the same body as Jewish believers.",
      "Paul marvels at his own role in this: &ldquo;Of this gospel I was made a minister according to the gift of God&rsquo;s grace, which was given me by the working of his power&rdquo; (3:7). The language of gift and grace underscores that his apostleship was not achieved but given. The man who once destroyed the church (Galatians 1:13) is now appointed to build it. The &ldquo;working of his power&rdquo; recalls the language of Ephesians 1:19&ndash;20, where the same power is the power of the resurrection &mdash; the same divine energy that raised Christ from the dead is at work in making Paul&rsquo;s ministry fruitful. The gospel advances not by human strategy but by resurrection power.",
    ],
  },
  {
    ref: "Ephesians 3:8&ndash;13",
    heading: "The Least of All Saints &mdash; The Manifold Wisdom of God",
    color: GOLD,
    paras: [
      "&ldquo;To me, though I am the very least of all the saints, this grace was given, to preach to the Gentiles the unsearchable riches of Christ&rdquo; (3:8). Paul&rsquo;s self-designation &ldquo;the very least of all the saints&rdquo; is a superlative that in the Greek is somewhat invented &mdash; he forges a new comparative form to express how completely he disqualifies himself. He is not posturing; this is the authentic self-assessment of a man who persecuted and killed Christians before his conversion (Acts 9:1&ndash;2; Galatians 1:13). And yet this man &mdash; precisely this man &mdash; is commissioned to carry &ldquo;the unsearchable riches of Christ&rdquo; to the nations. The gospel Paul preaches is itself an argument for the gospel: grace given to the least likely is a display of the limitlessness of that grace.",
      "The commission has two dimensions, corresponding to two audiences. First, to Gentile human beings: &ldquo;to preach to the Gentiles the unsearchable riches of Christ, and to bring to light for everyone what is the plan of the mystery hidden for ages in God who created all things&rdquo; (3:8&ndash;9). The plan (oikonomia, household administration) is God&rsquo;s whole saving purpose as it unfolds in history &mdash; previously hidden, now publicly proclaimed. Second, to angelic powers: &ldquo;so that through the church the manifold wisdom of God might now be made known to the rulers and authorities in the heavenly places&rdquo; (3:10). The church is the vehicle through which angelic intelligences learn something new about the wisdom of God.",
      "Paul grounds this cosmic purpose in the eternal divine plan: &ldquo;This was according to the eternal purpose that he has realized in Christ Jesus our Lord&rdquo; (3:11). What is happening through the church is not an improvisation or a backup plan; it is the outworking of what God purposed &ldquo;before the foundation of the world&rdquo; (1:4). In Christ, the eternal purpose finds its fulfillment, and through the church, its display. Paul closes this section with a word of encouragement about his own sufferings: he asks the Ephesians not to lose heart at his tribulations, which are &ldquo;your glory&rdquo; (3:13) &mdash; they are the cost of the mission that brought the gospel to them.",
    ],
  },
  {
    ref: "Ephesians 3:14&ndash;19",
    heading: "Paul&rsquo;s Prayer for Strength, Rooting in Love, and the Fullness of God",
    color: TEAL,
    paras: [
      "Paul finally returns to the prayer he began in verse 1. &ldquo;For this reason I bow my knees before the Father&rdquo; (3:14). The posture is significant: while standing was the usual Jewish and early Christian posture for prayer, kneeling indicated special earnestness and intensity. Paul kneels because what he is about to ask is enormous. He addresses &ldquo;the Father, from whom every family in heaven and on earth is named&rdquo; (3:14&ndash;15). The Greek word for &ldquo;family&rdquo; (patria) plays on the word for &ldquo;father&rdquo; (pater): every family group &mdash; human and angelic &mdash; derives its existence and identity from this Father. He is the archetype and source of all fatherhood.",
      "&ldquo;That according to the riches of his glory he may grant you to be strengthened with power through his Spirit in the inner being&rdquo; (3:16). Paul&rsquo;s first petition is for strength, not ease. The strength he requests is the strength of the Spirit in the inner being &mdash; the seat of will, desire, and character. He does not pray that external pressures would be removed but that internal fortitude would be granted. The measure of this strengthening is &ldquo;according to the riches of his glory&rdquo; &mdash; not according to what we deserve or what seems adequate but according to the limitless resources of God&rsquo;s own glory. The request is for divine-sized strength for human-sized struggles.",
      "The purpose of that strengthening is &ldquo;that Christ may dwell in your hearts through faith&rdquo; (3:17). The word &ldquo;dwell&rdquo; (katoikein) means to settle down and make one&rsquo;s home &mdash; not to visit but to take up permanent residence. Christ already indwells all believers, but Paul prays for a deeper, more settled inhabitation. Then comes the third petition, expressed in the image of a plant: &ldquo;that you, being rooted and grounded in love, may have strength to comprehend with all the saints what is the breadth and length and height and depth, and to know the love of Christ that surpasses knowledge, that you may be filled with all the fullness of God&rdquo; (3:17&ndash;19). &ldquo;Rooted&rdquo; is an agricultural image; &ldquo;grounded&rdquo; is an architectural one. Love is the soil in which believers grow and the foundation on which they are built. The comprehension Paul prays for is corporate (&ldquo;with all the saints&rdquo;) &mdash; this love is too vast to be grasped by any one person; it requires the whole community to begin to plumb its dimensions.",
    ],
  },
  {
    ref: "Ephesians 3:20&ndash;21",
    heading: "The Doxology &mdash; Far More Than All We Ask or Think",
    color: GREEN,
    paras: [
      "The doxology that closes Ephesians 3 is the high-water mark of the entire first half of the letter. It is an eruption of praise prompted by everything that has come before: the mystery revealed, the grace given to the least, the wisdom displayed through the church, the prayer for strength and fullness. &ldquo;Now to him who is able to do far more abundantly than all we ask or think, according to the power at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.&rdquo; (3:20&ndash;21).",
      "The phrase &ldquo;far more abundantly than all we ask or think&rdquo; (hyperekperissou) is Paul&rsquo;s attempt to put language around a reality that exceeds language. The prefix hyper (beyond) is itself added to a word that already means &ldquo;exceedingly.&rdquo; Paul stacks superlatives: God is able to do more than we ask, more than we think, more than we can ask and think combined, and then more beyond that. The goal of the doxology is to recalibrate the expectations of people who have been praying too small and trusting too little. The God to whom Paul writes is not a limited resource to be conserved but an inexhaustible ocean of power and grace.",
      "&ldquo;According to the power at work within us&rdquo; (3:20): the very power that enables God&rsquo;s superabundant works is the power he has already placed within his people through the Spirit. This is not power held at a distance but power imparted. When Paul prays for strength in verse 16, he is praying for the activation and increase of something already begun. The doxology closes with glory given &ldquo;in the church and in Christ Jesus&rdquo; &mdash; not to the church, but in the church. The church is where God is glorified; Christ is the head of that body. Together they are the sphere of God&rsquo;s eternal glorification, &ldquo;throughout all generations, forever and ever.&rdquo;",
    ],
  },
];

const applicationItems: { title: string; color: string; body: string }[] = [
  {
    title: "The Privilege of Carrying the Gospel to All People",
    color: GREEN,
    body: "Paul&rsquo;s description of his calling &mdash; to preach the unsearchable riches of Christ to the Gentiles &mdash; is the apostolic form of a calling that belongs in some sense to all believers. Every Christian is a steward of the mystery: the good news that in Christ, access to God is freely available to all people regardless of background, ethnicity, or history. The application is that we should feel the privilege rather than the burden of this. Paul, the chief of sinners, was given this grace; the least likely person you know might be given the same grace through your willingness to speak. The unsearchable riches you are entrusted with are too large and too generous to keep.",
  },
  {
    title: "Praying Paul&rsquo;s Prayer for Spiritual Strengthening",
    color: PURPLE,
    body: "One of the most practical applications of Ephesians 3 is simply to pray Paul&rsquo;s prayer &mdash; for yourself and for those you love. Stop praying primarily for changed circumstances and start praying for the thing that changes all circumstances: strength in the inner being through the Spirit, Christ dwelling and making his home in the heart, rootedness in love, and the capacity to comprehend the love that surpasses knowledge. These are prayers the Father delights to answer, because they are praying for exactly what he has promised and what Christ&rsquo;s atonement has secured. Write out Ephesians 3:14&ndash;19 with the name of someone you are interceding for inserted, and bring it before God regularly.",
  },
  {
    title: "Knowing the Love of Christ That Surpasses Knowledge",
    color: "#E11D48",
    body: "The paradox &ldquo;to know the love of Christ that surpasses knowledge&rdquo; (3:19) points to the difference between propositional knowledge about love and experiential immersion in it. You can know theologically that God loves you without feeling the settled security and joy that this truth is meant to produce. The application here is devotional: go beyond knowing about the love of Christ and ask the Spirit to make that love experientially real to you. Meditate on the cross until the warmth of it reaches your chest, not just your intellect. Sit with passages like Romans 8:31&ndash;39 or John 15:9&ndash;13 until they become not information but formation. Ask God for what Paul asked for the Ephesians: that you would be filled to the measure of all the fullness of God.",
  },
  {
    title: "The Church as God&rsquo;s Display of Wisdom",
    color: TEAL,
    body: "Ephesians 3:10 is a challenge and a calling for every local congregation: through the church, the manifold wisdom of God is made known to the spiritual powers. A homogeneous church &mdash; one that only reaches people like itself &mdash; is a dim display. A church that genuinely reconciles people across the lines that divide the world &mdash; across ethnic, economic, educational, and political divides &mdash; is a bright display of the very wisdom of God. The application is not just programmatic (what events do we run for different groups?) but relational: do people from genuinely different backgrounds in your church know one another, eat together, bear one another&rsquo;s burdens? The tapestry of manifold wisdom requires many different threads tightly woven together.",
  },
  {
    title: "Living in the Abundance of &ldquo;Far More&rdquo;",
    color: GOLD,
    body: "The doxology of Ephesians 3:20 calls believers to live in the expectation of a God who does &ldquo;far more abundantly than all we ask or think.&rdquo; The practical implication is that we should stop praying timid prayers. Pray for the conversion of the person who seems most hardened to the gospel. Pray for the reconciliation of the relationship that seems most broken. Pray for the transformation of the church that seems most stuck. Pray for the renewal of the city that seems most far from God. The God of Ephesians 3 is not a God who does barely enough; he is a God who exceeds every expectation. Our problem is usually that we do not ask large enough, and we do not trust that the power at work within us is the same power that raised Jesus from the dead.",
  },
  {
    title: "Kneeling Before the Father of Every Family",
    color: PURPLE,
    body: "Paul&rsquo;s posture of kneeling before the Father (3:14) and his identification of God as the one &ldquo;from whom every family in heaven and on earth is named&rdquo; (3:15) invites reflection on what it means to pray with genuine earnestness and genuine understanding of who you are addressing. You are coming to the Father who is the archetype and source of every family &mdash; your family of origin, your church family, the family of the human race. He knows what family means more deeply than any earthly father does. When you pray for your family &mdash; your children, your parents, your small group &mdash; you are praying to the one from whom the very concept of family comes. Kneel before him, and ask boldly.",
  },
];

const videoItems = [
  { videoId: "ZvFWnQ6E3IE", title: "Ephesians 3 - The Mystery of Christ and Paul's Prayer Explained" },
  { videoId: "kRzGahBGMwA", title: "The Unsearchable Riches of Christ - Ephesians 3:8" },
  { videoId: "qPt9rRGNxpE", title: "Paul's Prayer for Strength and Fullness - Ephesians 3:14-19" },
  { videoId: "hLUzNyoVLbI", title: "The Manifold Wisdom of God Through the Church - Ephesians 3" },
];

export default function Ephesians3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [activeVerseIdx, setActiveVerseIdx] = useState(0);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentVerse = verseByVerse[activeVerseIdx];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Page header */}
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
            Prison Letters &mdash; New Testament
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.12 }}>
            Ephesians 3
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "The mystery hidden for ages is now revealed: Gentiles are fellow heirs, members of the same body, partakers of the promise in Christ Jesus. The church displays the manifold wisdom of God. Paul kneels and prays for strength, rootedness in love, and the fullness of God &mdash; to him who is able to do far more abundantly than all we ask or think." }}
          />
        </header>

        {/* Tab navigation */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? PURPLE : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Overview of Ephesians 3" }} />
            </div>
            <div
              style={{ color: PURPLE, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "Ephesians 3:1&ndash;21" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              {overviewParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Structure box */}
            <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "At a Glance: The Structure of Ephesians 3" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ref: "vv. 1&ndash;7", label: "Paul the prisoner &mdash; the mystery made known by revelation; Gentiles are fellow heirs" },
                  { ref: "vv. 8&ndash;13", label: "The least of all saints &mdash; to preach the unsearchable riches; the manifold wisdom displayed through the church" },
                  { ref: "vv. 14&ndash;19", label: "Paul kneels &mdash; prayer for strengthening, Christ dwelling in the heart, knowing the surpassing love, filled with God&rsquo;s fullness" },
                  { ref: "vv. 20&ndash;21", label: "Doxology &mdash; to him who is able to do far more abundantly than all we ask or think; glory in the church forever" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span
                      style={{ background: `${PURPLE}20`, color: PURPLE, borderRadius: 5, padding: "2px 9px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}
                      dangerouslySetInnerHTML={{ __html: item.ref }}
                    />
                    <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Context callout */}
            <div style={{ marginTop: "1.5rem", background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h4 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "Ephesians 3 in the Context of the Letter" }} />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Ephesians divides naturally into two halves. Chapters 1&ndash;3 are doctrinal: the election, redemption, and unification of Jews and Gentiles into one body in Christ. Chapters 4&ndash;6 are ethical: how this new community lives together. Chapter 3 closes the doctrinal half with Paul&rsquo;s doxology &mdash; a burst of praise that functions as a hinge between the indicative (&ldquo;this is what God has done&rdquo;) and the imperative (&ldquo;therefore live this way&rdquo;). The prayer of 3:14&ndash;21 is the fuel for the obedience of 4&ndash;6." }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Key Themes in Ephesians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{ __html: "Six major theological currents run through Ephesians 3, each one essential to understanding what Paul is declaring about the mystery of the gospel, the calling of the church, and the love that exceeds all knowledge." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {keyThemes.map((theme, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 12, padding: "1.6rem 1.75rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.85rem" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <h3
                      style={{ color: theme.color, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                  </div>
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: theme.body }}
                  />
                </div>
              ))}
            </div>

            {/* Cross-reference callout */}
            <div style={{ marginTop: "2rem", background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h4 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "Key Cross-References" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { ref: "Ephesians 1:4", note: "Election before the foundation of the world &mdash; the eternal backdrop of the mystery now revealed" },
                  { ref: "Ephesians 2:11&ndash;22", note: "The near and the far brought together in Christ &mdash; the condition that the prayer of 3:14&ndash;19 assumes" },
                  { ref: "Colossians 1:24&ndash;27", note: "Paul&rsquo;s parallel account of the mystery &mdash; Christ in you, the hope of glory" },
                  { ref: "Romans 8:37&ndash;39", note: "Nothing can separate us from the love of God in Christ Jesus &mdash; the love whose dimensions Paul traces in Ephesians 3" },
                  { ref: "1 Peter 1:12", note: "Angels long to look into the things the gospel announces &mdash; the same heavenly audience as Ephesians 3:10" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ background: `${GOLD}20`, color: GOLD, borderRadius: 4, padding: "1px 8px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Verse by Verse: Ephesians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of each passage in Ephesians 3 &mdash; the mystery revealed, Paul&rsquo;s calling, the cosmic purpose of the church, and the towering prayer for divine fullness." }}
            />

            {/* Section selector */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
              {verseByVerse.map((v, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveVerseIdx(i)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: `1px solid ${activeVerseIdx === i ? v.color : BORDER}`,
                    background: activeVerseIdx === i ? `${v.color}18` : CARD,
                    color: activeVerseIdx === i ? v.color : MUTED,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "inherit",
                  }}
                  dangerouslySetInnerHTML={{ __html: v.ref }}
                />
              ))}
            </div>

            {/* Current section */}
            <div style={{ background: CARD, border: `1px solid ${currentVerse.color}30`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <div
                style={{ color: currentVerse.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}
                dangerouslySetInnerHTML={{ __html: currentVerse.ref }}
              />
              <h3
                style={{ color: TEXT, fontWeight: 700, fontSize: "1.3rem", margin: "0 0 1.5rem" }}
                dangerouslySetInnerHTML={{ __html: currentVerse.heading }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {currentVerse.paras.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.025rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation between sections */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem", gap: 12 }}>
              <button
                type="button"
                onClick={() => setActiveVerseIdx((i) => Math.max(0, i - 1))}
                disabled={activeVerseIdx === 0}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: `1px solid ${BORDER}`,
                  background: activeVerseIdx === 0 ? "transparent" : CARD,
                  color: activeVerseIdx === 0 ? BORDER : MUTED,
                  cursor: activeVerseIdx === 0 ? "default" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
                dangerouslySetInnerHTML={{ __html: activeVerseIdx === 0 ? "&larr; First section" : `&larr; ${verseByVerse[activeVerseIdx - 1].ref}` }}
              />
              <button
                type="button"
                onClick={() => setActiveVerseIdx((i) => Math.min(verseByVerse.length - 1, i + 1))}
                disabled={activeVerseIdx === verseByVerse.length - 1}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: `1px solid ${activeVerseIdx === verseByVerse.length - 1 ? BORDER : PURPLE}`,
                  background: activeVerseIdx === verseByVerse.length - 1 ? "transparent" : `${PURPLE}15`,
                  color: activeVerseIdx === verseByVerse.length - 1 ? BORDER : PURPLE,
                  cursor: activeVerseIdx === verseByVerse.length - 1 ? "default" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
                dangerouslySetInnerHTML={{ __html: activeVerseIdx === verseByVerse.length - 1 ? "Last section &rarr;" : `${verseByVerse[activeVerseIdx + 1].ref} &rarr;` }}
              />
            </div>
          </section>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Application: Living Ephesians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{ __html: "How does the mystery of Christ, the manifold wisdom displayed through the church, and the love that surpasses knowledge change the way we live, pray, and gather? Ephesians 3 is not only doctrine to believe but grace to inhabit." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {applicationItems.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}28`, borderRadius: 12, padding: "1.6rem 1.75rem" }}
                >
                  <h3
                    style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Summary callout */}
            <div style={{ marginTop: "2.25rem", background: `${PURPLE}0e`, border: `1px solid ${PURPLE}35`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "The Breadth and Length and Height and Depth" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "The four dimensions Paul names &mdash; breadth, length, height, depth &mdash; are not a geometry lesson but a declaration of inexhaustibility. Every direction you extend the love of Christ, it extends further. It is wider than your worst failure, longer than your longest struggle, higher than your highest hope, deeper than your deepest fear. This love was not produced by your worthiness; it was demonstrated at the cross when you were still an enemy. And it will not be withdrawn; it is the foundation of the whole edifice of your salvation." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s prayer is that you would know this love &mdash; really know it, experientially and communally, &lsquo;with all the saints.&rsquo; The mystery of Christ is not a puzzle for isolated individuals; it is a treasure for the whole church, comprehended together in the context of love for one another and worship before the Father who is able to do far more abundantly than all we ask or think." }}
              />
            </div>
          </section>
        )}

        {/* Video section - always visible below tabs */}
        <div style={{ marginTop: "3.5rem" }}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Video Teaching on Ephesians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "Deepen your study of Ephesians 3 through video teaching on the mystery of Christ, the unsearchable riches, Paul&rsquo;s prayer for the fullness of God, and the manifold wisdom displayed through the church." }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "To Him Who Is Able" }} />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 14 }}
            dangerouslySetInnerHTML={{ __html: "Ephesians 3 closes with the boldest doxology in Paul&rsquo;s letters, addressed to a God whose ability to act exceeds every limit of human imagination. The mystery he has revealed &mdash; Jew and Gentile one body, the cosmos watching, the church displaying the manifold wisdom of God &mdash; calls for a praise that is equally limitless. The God who has done this can do &ldquo;far more abundantly than all we ask or think.&rdquo; Live in the expectation of that abundance. Pray in the confidence of a child who knows the Father is not small. And to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen." }}
          />
        </div>
      </main>
    </div>
  );
}
