"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"] as const;
type Tab = (typeof TABS)[number];
const TAB_LABELS: Record<Tab, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { id: "HpVLEPJmZFo", title: "Malachi 1: I Have Loved You Says the LORD (Study)" },
  { id: "CrM7uL9bXcA", title: "Blemished Offerings - Malachi 1 Explained" },
  { id: "QgNsP2Vc8kJ", title: "The Universal Offering in Malachi 1:11" },
  { id: "ZnWqT3oXmLR", title: "What a Weariness - Duty Religion in Malachi 1" },
];

const OVERVIEW_PARAS = [
  "Malachi is the final book of the Old Testament and the last prophetic voice before four centuries of silence. Its name &mdash; which may be a proper name or the Hebrew phrase for &ldquo;my messenger&rdquo; &mdash; establishes from the outset its concern with divine speech and human response. The book is structured around six disputation oracles, sometimes called the &ldquo;riv&rdquo; pattern after the Hebrew word for legal dispute or lawsuit: God makes a statement, the people challenge it or deny it, and God responds with evidence and argument. This is not the thundering prophetic proclamation of an Amos or an Isaiah; it is a dialogue &mdash; measured, patient, and relentless &mdash; between a God who insists on being heard and a people who have learned to push back.",
  "Chapter 1 opens with two of the book's six disputations, and together they set the terms for everything that follows. The first disputation (1:2-5) is the most foundational: &ldquo;I have loved you, says the LORD. But you say, How have you loved us?&rdquo; The response of the people is not an accusation or an act of rebellion; it is a question &mdash; a weary, disillusioned, evidential question. They want proof. The decades since the return from exile have not produced the glorious restoration that Second Isaiah had promised. The Temple has been rebuilt but the kingdom has not returned. The community is under Persian rule, subject to economic hardship, struggling to maintain the sacrificial system. Against this background, the assertion &ldquo;I have loved you&rdquo; does not land as comfort but as challenge. The people want to know: where is the evidence?",
  "God's answer points to the election of Jacob over Esau as the paradigmatic evidence of divine love &mdash; not a love based on merit, since neither Jacob nor Esau had yet done good or evil when the choice was made (as Paul argues in Romans 9), but a love freely given, sovereign in its origin, evident in its effects. The contrast between Jacob's descendants (Israel, returned from exile, still in the land) and Esau's descendants (Edom, now a devastated wasteland) is cited as visible, historical proof that God's love for Jacob has been sustained. When Edom says &ldquo;we are shattered but we will return and rebuild,&rdquo; the LORD responds: their building will be torn down. Their territory will be called &ldquo;the wicked country&rdquo; and &ldquo;the people with whom the LORD is angry forever.&rdquo; The point is not cruelty toward Edom but evidence of faithfulness to Jacob: you will see it with your own eyes and say, &ldquo;Great is the LORD beyond the border of Israel.&rdquo;",
  "The second disputation (1:6-2:9) pivots to the priests. A son honors his father; a servant fears his master. The LORD is Israel's father and master. Therefore: &ldquo;Where is my honor? Where is my fear?&rdquo; The specific charge is blemished offerings. The priests are placing on the altar animals that are blind, lame, or sick &mdash; the dregs of the herd, the animals that could not be sold at market. God's challenge is pointed: try offering that to your governor and see if he accepts you. The governor &mdash; the Persian official to whom the community owed tribute &mdash; would reject such an offering with contempt. Is God less worthy of honor than a Persian governor? The logic cuts through every layer of religious rationalization.",
  "The climax of the chapter is the stunning vision of 1:11: &ldquo;For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the LORD of hosts.&rdquo; This verse has been one of the most exegetically contested in the Old Testament. Some read it as a description of existing Gentile worship of God (whether in the diaspora synagogues or among God-fearing Gentiles). Others understand it as a prediction of eschatological Gentile worship. The early church fathers, from Justin Martyr onward, cited it as a prophecy of the Eucharist &mdash; the pure offering that the church would offer from east to west in every place. Whatever its precise reference, the rhetorical force is clear: Gentile worship of God's name &mdash; wherever it is taking place or will take place &mdash; is contrasted with Israel's defiled worship. The nations honor God more purely than the covenant people.",
  "The chapter closes with devastating precision: &ldquo;You say, What a weariness this is, and you snort at it, says the LORD of hosts.&rdquo; The word translated &ldquo;snort&rdquo; suggests contemptuous dismissal. The worship has become a burden to be endured rather than a delight to be sought. When offering animals for sacrifice, they bring the cheapest they have and mentally calculate the cost. They have become, in the language of later Christian theology, practitioners of duty-religion without delight &mdash; and God names it, refuses to receive it, and calls it what it is.",
];

const THEMES_DATA = [
  {
    id: "election",
    color: GOLD,
    title: "Election as Love, Not Merit",
    body: "The first disputation of Malachi grounds God's love for Israel in the sovereign election of Jacob over Esau &mdash; an election made before either twin had done anything to merit it (Genesis 25:23; Romans 9:11-13). The love God claims (&ldquo;I have loved you&rdquo;) is the love of covenantal election: a prior, unconditional commitment that does not depend on Israel's performance and cannot be revoked by their failure. The people ask for evidence of this love because they have been looking in the wrong place &mdash; for dramatic and immediate fulfillment of all prophetic promises rather than for the quieter but just as real evidence of sustained covenant faithfulness across generations. The answer God gives &mdash; look at Edom; look at what I have not allowed to happen to you &mdash; is the answer of sustained providential care, not spectacular miracle. Learning to read this kind of evidence is itself a spiritual discipline.",
  },
  {
    id: "disputation",
    color: TEAL,
    title: "The Disputation Form",
    body: "The literary structure of Malachi is unprecedented in the prophetic literature: six disputations in which God states a claim, the people challenge it with a question (&ldquo;How?&rdquo; or &ldquo;In what way?&rdquo;), and God responds with evidence. This structure is not mere literary convention; it reflects a theological conviction about the nature of the relationship between God and Israel. God does not simply command and demand submission; he argues, he presents evidence, he submits his claims to the court of reason and history. The disputation form takes the people's questions seriously as questions &mdash; not as signs of rebellion to be suppressed but as expressions of confusion and disillusionment that deserve an answer. The God of Malachi is a God who argues with his people because he takes both them and his covenant obligations seriously.",
  },
  {
    id: "offerings",
    color: ROSE,
    title: "Blemished Offerings: What We Give God vs. What We'd Give the Governor",
    body: "The priestly offense in Malachi 1:6-9 is not spectacular apostasy but mundane calculation: the animals brought to the altar are the ones that could not be sold or used elsewhere &mdash; blind, lame, sick. The Mosaic law was explicit that sacrificial animals must be without blemish (Leviticus 22:20-25); the priests know this. Their offense is not ignorance but the half-conscious rationalization that God won't notice, or doesn't care, or accepts whatever is offered. God's challenge demolishes this: would you offer this to your governor? The governor &mdash; a representative of Persian imperial authority, a powerful human being with no divine claims &mdash; would reject such an offering with contempt. The priests' behavior reveals an operative theology in which human authority is more real and demanding than divine authority. They fear the governor more than they fear God.",
  },
  {
    id: "universal",
    color: GREEN,
    title: "The Universal Pure Offering (Malachi 1:11)",
    body: "The vision of verse 11 is one of the most remarkable in the Old Testament: from east to west, in every place, incense and a pure offering will be offered to God's name. The contrast with Israel's defiled worship is stark and deliberate. The very nations who have no covenant with God are offering what is pure, while the covenant people offer what is defiled. The church fathers from Justin Martyr (Dialogue with Trypho, 41) to Irenaeus to Augustine understood this verse as a direct prophecy of the Eucharist &mdash; the pure offering of bread and wine that the church would present in every place from east to west. Modern interpreters debate the original referent, but the theological logic is consistent: God's name will be honored purely and universally, and the vessel of that universal honor will not necessarily be those who consider themselves most entitled to offer it.",
  },
  {
    id: "weariness",
    color: PURPLE,
    title: "What a Weariness: Duty-Religion Without Delight",
    body: "The closing indictment of Malachi 1 &mdash; &ldquo;you say, What a weariness this is&rdquo; &mdash; names a spiritual condition that is at once ancient and contemporary. The people are not abandoning worship; they are attending worship with a sigh. The offerings are made, the rituals observed, the religious duties performed &mdash; but without joy, without expectation, without the sense that this matters or that God is present. This is the spiritual disease of the long-faithful: the erosion of genuine encounter by the accumulated weight of religious habit. What was once a living practice has become a liturgical chore. God refuses to accept this. The blemished offerings are a material symptom of a deeper blemish: a heart that has stopped expecting to meet the living God in worship and has settled for performing the minimum required to maintain the appearance of faithfulness.",
  },
  {
    id: "priestly",
    color: GOLD,
    title: "Priestly Responsibility and Honoring God as Father and Master",
    body: "The second disputation addresses the priests specifically, because their failure has a multiplier effect: when those who handle holy things treat them as ordinary, the whole community is led astray. The two analogies God uses &mdash; son to father, servant to master &mdash; are drawn from the most basic structures of honor and obligation in the ancient Near Eastern world. A son who disrespects his father dishonors not merely the individual but the entire order of things. The priests are sons and servants of the LORD. Their failure to honor him in the offering is therefore not merely a ritual infraction; it is a statement about the nature of God. When worship is careless, it communicates to the worshiping community that God is not worth being careful about. The priestly vocation is inescapably a matter of theological witness.",
  },
];

const VERSE_DATA = [
  {
    id: "v1",
    ref: "Malachi 1:1",
    heading: "The Burden &mdash; Superscription",
    body: "The opening word of Malachi is &ldquo;massa&rdquo; &mdash; usually translated &ldquo;oracle&rdquo; or &ldquo;burden.&rdquo; The word carries connotations of something heavy, something carried with effort, something weighty. This is not light speech but the weight of divine word pressing on a prophet and then on a people. The addressee is &ldquo;Israel&rdquo; &mdash; not the northern kingdom (long gone by this point) but the post-exilic community in Judah and Jerusalem that has taken on the mantle of all Israel as the covenant people. The medium of the oracle is identified: &ldquo;by the hand of Malachi,&rdquo; or possibly &ldquo;by the hand of my messenger.&rdquo; The ambiguity is probably deliberate: the whole book is about the role of the messenger, and the prophet's identity is subsumed in the function.",
  },
  {
    id: "v2",
    ref: "Malachi 1:2-5",
    heading: "I Have Loved You &mdash; Jacob vs. Esau &mdash; Edom's Failure",
    body: "The first disputation opens without preamble: &ldquo;I have loved you, says the LORD.&rdquo; Five words in Hebrew; an assertion of relationship rather than command. The people's response &mdash; &ldquo;How have you loved us?&rdquo; &mdash; is not impudence but evidence of a community in spiritual crisis: they cannot see it. God's answer operates on three levels. First, the historical: the election of Jacob over Esau (Genesis 25:21-26; 27-28) was not based on merit but on sovereign divine love. Second, the geographical-political: while Israel has been restored to the land after exile, Edom (Esau's descendants) has become a desolation. The specific reference may be to the Nabataean pressure on Edomite territory in the fifth-fourth centuries BC. Third, the theological: even if Edom rebuilds, God will tear it down. They are called &ldquo;the people with whom the LORD is angry forever&rdquo; &mdash; not in personal spite but as a public demonstration of what covenant violation produces. Israel watching this will confess: &ldquo;Great is the LORD beyond the border of Israel.&rdquo; The disputation ends not with condemnation of Israel but with the hope that evidence will produce confession.",
  },
  {
    id: "v3",
    ref: "Malachi 1:6-9",
    heading: "Despising God's Name &mdash; Blemished Offerings &mdash; The Governor Test",
    body: "The second disputation opens with two analogies from social life: sons honor fathers, servants fear masters. God is both Father and Master to Israel, which means his honor and his fear are owed as a matter of elementary social logic. The priests deny that they have despised his name; God responds with evidence: the offerings on the altar. The animals brought are blind (Leviticus 22:22 explicitly prohibits this), lame, and sick. The priests have not merely violated a ritual regulation; they have brought the refuse of the flock to the holy place. The forensic challenge of verse 8 is crushing: &ldquo;Present that to your governor.&rdquo; The Persian governor who administered the province would not for a moment accept such a gift. He would be insulted. The priests have a lower threshold of reverence for God than for the regional Persian administrator. Verse 9 turns the irony fully: &ldquo;And now entreat the favor of God, that he may be gracious to us. With such a gift from your hand, will he show favor to any of you?&rdquo; The sacrifice that is meant to obtain divine favor is the very thing that has forfeit it.",
  },
  {
    id: "v4",
    ref: "Malachi 1:10",
    heading: "Shut the Temple Doors &mdash; Better No Worship Than Defiled Worship",
    body: "Verse 10 is one of the most radical statements in the Old Testament about the nature of acceptable worship: &ldquo;Oh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain! I have no pleasure in you, says the LORD of hosts, and I will not accept an offering from your hand.&rdquo; God says: it would be better if the Temple were closed entirely than to continue this mockery of worship. The Levitical system existed to provide a structured way for the community to approach a holy God; when it becomes a mechanism for performing the minimum while offering defiled worship, it is worse than nothing. It produces in the worshipers a false confidence that they have fulfilled their religious duty and in God the displeasure of one whose generosity has been insulted. This verse stands as one of the prophetic tradition's most unflinching statements that ritual without reality is not neutral worship; it is actively offensive.",
  },
  {
    id: "v5",
    ref: "Malachi 1:11",
    heading: "Pure Offering from Rising to Setting Sun &mdash; My Name Great Among the Nations",
    body: "The vision of verse 11 has the character of a divine oath: the LORD of hosts declares that his name &ldquo;will be great among the nations,&rdquo; and that the evidence will be a pure offering rising everywhere from east to west. The contrast with the defiled altar in Jerusalem is the rhetorical center: while Israel offers blind and lame animals, the nations will offer what is pure. Early interpreters of this verse include it among the most discussed in the patristic period. Justin Martyr, writing in the second century, identifies the pure offering explicitly with the Eucharist and uses Malachi 1:11 to argue that God had transferred the sacrificial worship from the Jewish priesthood to the church (Dialogue with Trypho 41, 116-117). Irenaeus makes a similar argument (Against Heresies 4.17.5). Whether or not one accepts the patristic typological reading, the verse establishes a principle that will be central to the New Testament: the boundaries of true worship are not coextensive with the boundaries of ethnic Israel or geographic Jerusalem. God's name will be honored universally, and the purity of that honor will shame the defiled worship of those who claimed exclusive access to him.",
  },
  {
    id: "v6",
    ref: "Malachi 1:12-14",
    heading: "The Polluted Table &mdash; What a Weariness &mdash; The Cheat Who Vows",
    body: "The closing section of chapter 1 broadens the indictment from the official priestly offering to the individual worshiper. Verse 13 reports what the people say in their hearts when they come to worship: &ldquo;What a weariness this is&rdquo; &mdash; or in some translations, &ldquo;What a weariness!&rdquo; followed by a dismissive snort. The word translated &ldquo;snort&rdquo; or &ldquo;treat with contempt&rdquo; suggests a gesture of disdain, a turning-away of the face. Verse 14 introduces a figure who is called a &ldquo;cheat&rdquo; (rogez &mdash; a deceiver, a fraudster): he has a male animal in his flock that is acceptable for sacrifice, vows to bring it, and then substitutes a blemished animal. This is not ignorant negligence but deliberate fraud. He knows what is acceptable; he chooses not to offer it. God's response is the declaration of the covenant curse: &ldquo;Cursed be the cheat.&rdquo; The chapter ends with the declaration that closes the whole indictment: &ldquo;For I am a great King, says the LORD of hosts, and my name will be feared among the nations.&rdquo; The nations will honor what Israel has despised.",
  },
];

const APPLICATION_PARAS = [
  "Malachi 1 speaks with particular directness to communities that have been practicing Christianity for a long time. The spiritual disease it diagnoses &mdash; weary, half-hearted, calculating religion from people who have stopped expecting to encounter the living God &mdash; is not a condition of pagans or apostates but of people who are still in the pews, still going through the motions, still technically fulfilling their religious obligations while their hearts are elsewhere. The question &ldquo;How have you loved us?&rdquo; is the question of every believer who has prayed faithfully and seen no answer, given generously and experienced no obvious return, served consistently and remained unrecognized. The spiritual discipline Malachi calls for is the discipline of learning to read evidence &mdash; not the dramatic evidence of immediate miraculous response but the quieter evidence of sustained covenant faithfulness across a lifetime and a community.",
  "The governor test of verse 8 is an application that preaches itself: what would you not offer to a human being of authority that you are willing to offer to God? The category is almost infinitely expandable. We give our most distracted attention to prayer while we give our focused attention to work. We give our leftover energy to serving the church while we give our best energy to careers. We give the first fifteen minutes of Sunday morning to worship and the rest of the week to everything else. The Malachi question is not primarily about tithing or sacrifice but about the ordering of what is best: if God is who he claims to be, the Father and Master of the universe, does what we bring to him reflect that reality?",
  "The vision of 1:11 &mdash; the pure offering rising from east to west &mdash; offers a corrective to the parochialism that so easily afflicts Christian communities. The assumption that authentic worship happens in our tradition, our denomination, our congregation, our preferred style, is precisely the assumption that Malachi inverts: God says his name is being honored purely in places and by people you would not expect. The history of revival is in part the history of God raising up genuine worshipers outside the established channels of institutional religion, while those channels went through the motions of duty-worship. The vision should produce humility: we are not the only ones honoring God, and we may not be the ones honoring him most purely.",
  "Receiving God's love when we cannot feel it is perhaps the hardest application of Malachi 1. The people's question &mdash; &ldquo;How have you loved us?&rdquo; &mdash; is asked not in arrogance but in genuine bewilderment. God takes the question seriously enough to answer it with evidence. The discipline of faith includes the practice of actively recalling the evidence of divine love: in Scripture, in history, in personal experience, in the community's accumulated story with God. When the felt sense of being loved is absent, the evidence must serve in its place. The Psalms of lament practice exactly this: begin with the absence, remember the history, end with the declaration. Malachi 1:2-5 is an exercise in this discipline applied to a whole community.",
  "The danger of duty-worship &mdash; &ldquo;What a weariness this is&rdquo; &mdash; is not overcome by trying harder but by recovering what has been lost: the sense that the one being worshiped is actually present, actually attentive, actually worth the best we have. The liturgical and devotional traditions of the church have developed practices specifically designed to address this: the daily office, the examination of conscience, the discipline of gratitude, lectio divina, the practice of the presence of God. The deeper problem Malachi names is not lazy priests but a community that has lost the awareness of standing before the holy. When that awareness is recovered, the question &ldquo;What a weariness&rdquo; gives way to the response of Isaiah 6: &ldquo;Here I am; send me.&rdquo;",
  "The vision of universal worship in Malachi 1:11 also carries an application for evangelism and mission. The promise that God's name will be great from east to west, and that a pure offering will rise in every place, is not a passive prediction but an active commission: the community called to worship him purely is called to be the means by which that universal worship comes to pass. The New Testament takes up this theme explicitly: the Great Commission of Matthew 28 sends the disciples to make disciples of all nations so that the worship of God's name will indeed spread from the rising to the setting of the sun. The defiled worship of Malachi's day is replaced, in the New Testament's vision, not merely by purer Jewish worship but by the worship of every tribe and tongue and people and nation &mdash; the vast choir of Revelation 5 offering the pure offering of praise to the Lamb.",
];

export default function Malachi1GuidePage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a0800 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "52px 24px 44px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ background: GOLD, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>
              Minor Prophets
            </span>
            <span style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
              Malachi 1 &bull; The Last Old Testament Prophet
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", fontWeight: 800, margin: "0 0 18px", lineHeight: 1.13, fontFamily: "Georgia, serif" }}>
            Malachi 1 &mdash; I Have Loved You, Says the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.18rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0, fontFamily: "Georgia, serif" }}
            dangerouslySetInnerHTML={{ __html: "The last book of the Old Testament opens with God&rsquo;s declaration of love &mdash; immediately questioned by a disillusioned people. Polluted worship is exposed, and the chapter ends with a stunning vision of pure offering rising to God from all nations, from the rising to the setting of the sun." }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 880, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif",
                color: tab === t ? GOLD : MUTED,
                borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "44px 24px 96px" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Overview of Malachi 1</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              Six disputation oracles structure the book; the first two begin here, establishing both the form and the stakes.
            </p>

            {/* Fast Facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginBottom: 36 }}>
              {[
                { label: "Book", value: "Malachi" },
                { label: "Chapter", value: "1" },
                { label: "Date", value: "~450 BC" },
                { label: "Context", value: "Post-exilic Judah" },
                { label: "Structure", value: "Two disputations" },
                { label: "Key Verse", value: "Malachi 1:11" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Highlighted verse */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "28px 32px", marginBottom: 36 }}>
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 22, margin: 0 }}>
                <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 10px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;From the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the LORD of hosts.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                  &mdash; Malachi 1:11 (ESV)
                </cite>
              </blockquote>
            </div>

            {/* Overview paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              {OVERVIEW_PARAS.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.87, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Key Passages Quick Ref */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 40 }}>
              <h3 style={{ fontWeight: 700, margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>Key Passages at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Mal 1:1", desc: "Superscription &mdash; the oracle/burden by the hand of Malachi" },
                  { ref: "Mal 1:2", desc: "I have loved you, says the LORD &mdash; first disputation opens" },
                  { ref: "Mal 1:3-5", desc: "Jacob vs. Esau &mdash; election and the fate of Edom" },
                  { ref: "Mal 1:6", desc: "Where is my honor? Where is my fear? &mdash; to the priests" },
                  { ref: "Mal 1:7-8", desc: "Blemished offerings &mdash; the governor test" },
                  { ref: "Mal 1:10", desc: "Would that someone would shut the temple doors" },
                  { ref: "Mal 1:11", desc: "Pure offering from all nations &mdash; east to west" },
                  { ref: "Mal 1:13", desc: "What a weariness this is &mdash; duty-religion without delight" },
                  { ref: "Mal 1:14", desc: "Cursed be the cheat who vows and then deceives" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{p.ref}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.55, fontFamily: "system-ui, sans-serif" }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Key Themes in Malachi 1</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              Six interlocking themes shape the chapter and introduce the central tensions of the whole book.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {THEMES_DATA.map(theme => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 13, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(theme.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 11, height: 11, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>
                      {open === theme.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === theme.id && (
                    <div
                      style={{ padding: "0 22px 22px 47px", color: MUTED, lineHeight: 1.82, fontSize: "0.97rem", fontFamily: "Georgia, serif" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Pullout box */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "26px 28px", marginTop: 40 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 12px", fontSize: "1.1rem", fontFamily: "system-ui, sans-serif" }}>
                The Patristic Reading of Malachi 1:11
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.82, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Justin Martyr, writing around 155 AD, cited Malachi 1:11 in his Dialogue with Trypho (chapters 41 and 116-117) to argue that God had declared the end of Jewish sacrifice and its replacement by the universal Eucharistic offering of the church. Irenaeus (Against Heresies 4.17.5) and Augustine (Against Faustus 20.18) made the same argument. Whatever one thinks of the typological method, the patristic reading identified something real in the logic of the text: the passage establishes a contrast between defiled particular worship and pure universal worship, and the New Testament's announcement of a new covenant offering in bread and wine, made in every place from east to west, is a plausible fulfillment of exactly that contrast." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Verse by Verse &mdash; Malachi 1</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              A detailed walk through each section of the chapter.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VERSE_DATA.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 13, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 110, fontFamily: "system-ui, sans-serif" }}>{v.ref}</span>
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: v.heading }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>
                      {open === v.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === v.id && (
                    <div
                      style={{ padding: "0 22px 24px 22px", color: MUTED, lineHeight: 1.87, fontSize: "0.97rem", fontFamily: "Georgia, serif" }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Structural note */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "26px 28px", marginTop: 40 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 12px", fontSize: "1.05rem", fontFamily: "system-ui, sans-serif" }}>
                Structural Note: The Two Disputations of Chapter 1
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.82, margin: "0 0 14px", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Disputation 1 (1:2-5) establishes the relational foundation: God has loved Israel with a covenantal, elective love that is not contingent on their performance. This is the ground on which everything else stands. Without this foundation, the subsequent accusations would be merely the demands of an impersonal deity." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.82, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Disputation 2 (1:6-2:9) builds on that foundation: because God is Father and Master, his honor is owed. The failure to honor him in worship is not merely ritual negligence but a violation of the most basic relationship of obligation. The chapter moves from love declared (1:2) to love dishonored (1:6-14) &mdash; setting up the rest of the book's call to return." }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Applying Malachi 1 Today</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              The questions Malachi 1 raises are as contemporary as the communities they were addressed to.
            </p>

            {/* Application paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", marginBottom: 56 }}>
              {APPLICATION_PARAS.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.87, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "God answers the question &#8220;How have you loved us?&#8221; with historical and observable evidence. What evidence of God&#8217;s love can you identify in your own life that you may have stopped noticing?",
                  "The governor test asks: what would you not offer to a human of authority that you offer to God? In prayer, in time, in financial giving, in service &mdash; where does this apply to you?",
                  "Have you ever been in a season where worship felt like a weariness? What were the conditions that produced that? What began to shift it?",
                  "The vision of 1:11 suggests that pure worship may be rising from unexpected places. Where have you encountered genuine worship of God in communities or traditions different from your own?",
                  "The cheat of verse 14 vows one thing and delivers another. In what areas of your life with God might there be a gap between what you have promised and what you are actually delivering?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 18px", background: BG, borderRadius: 9, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.65, fontFamily: "system-ui, sans-serif" }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <h3 style={{ fontWeight: 700, margin: "0 0 20px", fontSize: "1.25rem", fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.75, margin: "0 0 28px", fontFamily: "system-ui, sans-serif" }}>
              Explore Malachi 1 through these video studies on God&rsquo;s declaration of love, the blemished offerings, and the universal vision of 1:11.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px", fontFamily: "system-ui, sans-serif" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing pullout */}
        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.85rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.85rem", fontSize: "1.15rem", fontFamily: "system-ui, sans-serif" }}>
            The First Word and the Last Vision
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }}
            dangerouslySetInnerHTML={{ __html: "Malachi 1 opens with an affirmation of love that is questioned and closes with a vision of universal worship that has not yet been fulfilled. Between them lies the confrontation with blemished worship and weary duty-religion. The chapter is structured as an invitation: receive the love that has already been given, respond with the best rather than the worst, and join the vast company of worshipers from east to west who are even now offering what is pure to the God whose name will be great among the nations." }}
          />
        </div>

      </div>
    </div>
  );
}
