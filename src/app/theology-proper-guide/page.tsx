"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "incommunicable", label: "Incommunicable" },
  { id: "communicable", label: "Communicable" },
  { id: "holiness", label: "Holiness & Wrath" },
  { id: "love", label: "Love & Grace" },
  { id: "names", label: "Names of God" },
  { id: "simplicity", label: "Divine Simplicity" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const GRID_OVERVIEW = [
  { color: PURPLE, icon: "∞", label: "Immensity", text: "God is not contained by space (1 Kings 8:27). He is present everywhere without being limited to any location. This is not pantheism (God is not identical with creation) but omnipresence — God is fully present everywhere simultaneously." },
  { color: TEAL, icon: "α", label: "Aseity", text: "God exists from himself (a se). He is not dependent on anything outside himself for existence, being, or power (Exodus 3:14 — 'I AM'). Everything else exists because of him; he exists because of himself. This is the foundation of all other attributes." },
  { color: GOLD, icon: "👑", label: "Sovereignty", text: "God governs all things according to his will (Psalm 115:3 — 'He does whatever pleases him'). This does not eliminate human freedom but grounds all of history in divine purpose. Nothing that happens is outside his knowledge, power, or permission." },
  { color: BLUE, icon: "❤️", label: "Trinity", text: "The God of the Bible is triune — one God in three persons. The attributes belong to the one divine essence shared by Father, Son, and Spirit. Understanding this prevents us from dividing the attributes between persons (love = Father, wrath = Son) or collapsing the Trinity into a monad." },
];

const INCOMMUNICABLE = [
  {
    id: "aseity", title: "Aseity (Self-Existence)", ref: "Exodus 3:14; Acts 17:25",
    body: "God has life in himself (John 5:26). He does not receive existence from another. He is not dependent on worship, prayer, or creation. The name YHWH — 'I AM WHO I AM' — points to his uncaused, self-sustaining being. Everything else is contingent; God is necessary. This attribute grounds all others: God can be omnipotent because he has unlimited power in himself; omniscient because he has complete knowledge in himself.",
    implication: "God does not need you. He is not enriched by your worship or impoverished by your neglect. This is a profound comfort: his love for you is entirely free, not a response to your worthiness."
  },
  {
    id: "immutability", title: "Immutability (Unchangeableness)", ref: "Malachi 3:6; James 1:17; Psalm 102:27",
    body: "God does not change in his being, perfections, purposes, or promises. 'I the LORD do not change' (Malachi 3:6). James says there is no 'shadow of turning' with God. This is not the immobility of a stone but the constancy of a perfectly actualized being. God does not grow, improve, learn, or decline. The passages that speak of God 'relenting' (like Jonah 3:10) refer to changes in his action, not in his character or ultimate purposes — they are descriptions from the human perspective.",
    implication: "The God who loved you yesterday loves you today with exactly the same love. His promises made 3,000 years ago stand with the same force as the day they were spoken."
  },
  {
    id: "infinity", title: "Infinity (No Limitations)", ref: "Psalm 147:5; 1 Kings 8:27",
    body: "God has no limits in his being. This plays out in three directions: (1) Omnipresence — he is fully present everywhere (Psalm 139:7-10); (2) Eternity — he has no beginning or end, and all of time exists 'before' him (Psalm 90:2 — 'from everlasting to everlasting you are God'); (3) Incomprehensibility — he is beyond full human understanding (Romans 11:33). He is not simply 'very large' — he is in a category of being that is without limit in any direction.",
    implication: "You cannot run from his presence (Jonah learned this). You cannot outlast his patience. You cannot surprise him. You cannot overwhelm him with your need."
  },
  {
    id: "simplicity", title: "Simplicity (Undivided Being)", ref: "Deuteronomy 6:4; James 1:17",
    body: "God is not composed of parts. He does not have love as one part and holiness as another, as if they could be separated or come into tension. His attributes are not additions to his being but descriptions of his one undivided nature. When we say God is love and God is holy, we are not describing two properties that must be balanced — we are describing one Being from two angles. Divine wrath is not the absence of love but the expression of holy love encountering unholiness.",
    implication: "God cannot be partially engaged. When he is present, he is fully present — not his mercy without his holiness, or his power without his love. He deals with us as he is."
  },
  {
    id: "omnipotence", title: "Omnipotence (All-Powerful)", ref: "Genesis 18:14; Matthew 19:26; Revelation 1:8",
    body: "God can do all things that are consistent with his nature (Jeremiah 32:17). The classic question 'Can God make a rock too heavy to lift?' is a category error — such a thing is logically incoherent, not a limit on power. God cannot lie (Hebrews 6:18), deny himself (2 Timothy 2:13), or do evil — these are not limitations of power but expressions of his perfect character. His omnipotence means: no plan he purposes can be thwarted (Job 42:2); his creative and providential power is unlimited.",
    implication: "The God you pray to can actually answer. His hands are not tied by circumstances, probabilities, or secondary causes. 'Nothing will be impossible with God' (Luke 1:37)."
  },
  {
    id: "omniscience", title: "Omniscience (All-Knowing)", ref: "Psalm 139:1-6; Hebrews 4:13; 1 John 3:20",
    body: "God knows all things — past, present, future; actual and possible; the deeds of every creature and the thoughts of every heart (Psalm 139:2-4). His knowledge is not acquired by observation but is constitutive of his being. He does not learn. He does not discover. He does not calculate probabilities — he simply knows. This includes exhaustive foreknowledge of free human choices, which is the heart of the Calvinist-Arminian debate on predestination.",
    implication: "God knows what you are going through right now — in precise detail. 'Even the hairs of your head are all numbered' (Matthew 10:30). His help is never generic; it is always tailored."
  },
];

const COMMUNICABLE = [
  {
    id: "love", title: "Love", ref: "1 John 4:8; John 3:16",
    body: "God is love — not merely loving, but love as a defining characteristic of his nature. This love is eternal (existing in the intra-Trinitarian relations before creation), free (not compelled by anything in the creature), unconditional in source (it flows from who God is, not who we are), and effective (it accomplishes its purposes). Distinguishable expressions: (1) Love of benevolence — general good will toward creation; (2) Redemptive love — special saving love toward the elect; (3) Intra-Trinitarian love — the eternal love between Father, Son, and Spirit.",
    implication: "You are not loved because you are loveable. You are loved because God is love. This is the only stable foundation for identity."
  },
  {
    id: "goodness", title: "Goodness", ref: "Psalm 34:8; Mark 10:18",
    body: "God is good — the ultimate standard of goodness, from which all other goodness derives. When Jesus says 'No one is good except God alone' (Mark 10:18), he is not denying human goodness but pointing to its source. The goodness of creation ('God saw that it was good' — Genesis 1) is a reflection of the Creator's nature. God's goodness includes: (1) His perfection — he is morally complete and flawless; (2) His generosity — he gives good gifts to creatures; (3) His benevolence — he wills the good of his creatures.",
    implication: "God is not capricious or malicious. The circumstances he ordains, even the painful ones, flow from a good nature that intends good ends."
  },
  {
    id: "righteousness", title: "Righteousness & Justice", ref: "Psalm 11:7; Romans 3:25-26",
    body: "God always acts in conformity with what is right — he is the standard of right, not subject to an external moral law. His righteousness expresses itself in two directions: (1) His own moral perfection — he never acts below his own standard; (2) His just governance of creation — rewarding good and punishing evil. The cross is Paul's supreme demonstration of both: God demonstrates his righteousness by justifying the ungodly through the punishment of sin in Christ, so that he is 'just and the justifier' (Romans 3:26).",
    implication: "God will not let injustice stand ultimately. The promise of final judgment is the ground of present endurance for the persecuted."
  },
  {
    id: "faithfulness", title: "Faithfulness", ref: "Lamentations 3:22-23; Psalm 89:8",
    body: "'His mercies are new every morning; great is your faithfulness' (Lamentations 3:22-23). God is fully reliable — his word stands, his promises are kept, his character is consistent. This is the basis of Hebrews' argument about oaths (Hebrews 6:13-18): God swore by himself because nothing is greater than his own faithfulness. The entire structure of covenant theology depends on divine faithfulness — God binds himself to his word and his people.",
    implication: "Scripture is trustworthy because God is faithful. Prayer is not wishful thinking but communication with the one who does not break his word."
  },
  {
    id: "wisdom", title: "Wisdom", ref: "Romans 11:33; Proverbs 8",
    body: "God's wisdom is the perfect application of his knowledge to his purposes. He not only knows all things (omniscience) but orders all things toward the best possible end. Proverbs personifies wisdom as present with God at creation (Proverbs 8:22-31). In the New Testament, Christ is identified as the wisdom of God (1 Corinthians 1:24, 30). God's providential ordering of history — including the cross, which appeared foolish — is the supreme demonstration of his wisdom (Romans 11:33-36).",
    implication: "When God's ways seem confusing, the right response is not suspicion but trust — his wisdom is orders of magnitude beyond ours."
  },
  {
    id: "mercy", title: "Mercy & Grace", ref: "Exodus 34:6-7; Ephesians 2:4-5",
    body: "God's mercy is his compassion toward those in misery and distress; his grace is his undeserved favor toward sinners. The great self-revelation of Exodus 34:6-7 — 'The LORD, the LORD, the compassionate and gracious God, slow to anger, abounding in love and faithfulness, maintaining love to thousands, and forgiving wickedness, rebellion and sin' — is the most quoted text about God's character in all of Scripture (referenced throughout the Psalms, Jonah, Joel, Nehemiah, etc.). Mercy and grace are distinguished: mercy addresses misery; grace addresses guilt.",
    implication: "The God of the Bible is not primarily a judge waiting to condemn. His first self-revelation is as the compassionate and gracious God."
  },
];

const HOLINESS_POINTS = [
  {
    id: "h1", title: "Holiness as Otherness", ref: "Isaiah 6:3; Habakkuk 1:13",
    body: "The primary meaning of holiness (qodesh) is 'set apart, other, different.' God's holiness is first his transcendence — his being in a category above and unlike all creation. When the seraphim cry 'Holy, holy, holy' (Isaiah 6:3), they are not simply saying 'very morally pure' but expressing that God is wholly other, overwhelming in majesty and glory. The effect on Isaiah — 'I am ruined! For I am a man of unclean lips' — is the natural response of creaturely finitude before divine holiness."
  },
  {
    id: "h2", title: "Holiness as Moral Purity", ref: "1 Peter 1:15-16; Leviticus 11:44",
    body: "Holiness also carries the meaning of moral purity — God is entirely without sin, vice, or moral defect. 'Your eyes are too pure to look on evil; you cannot tolerate wrongdoing' (Habakkuk 1:13). This moral holiness is the ground of the command 'Be holy, because I am holy' (Leviticus 11:44; 1 Peter 1:15-16). The moral demands of the law flow from God's holy character — not arbitrary rules but the shape of holy living in the presence of a holy God."
  },
  {
    id: "h3", title: "Divine Wrath as Holy Love", ref: "Romans 1:18; John 3:36",
    body: "God's wrath is not divine anger management or a temperamental outburst. It is the settled, holy opposition of a perfectly good God to everything that is evil, destructive, and contrary to his nature. Romans 1:18 — 'the wrath of God is being revealed from heaven against all the godlessness and wickedness of human beings.' Wrath is not the opposite of love — it is what love looks like when confronted with that which destroys what love values. A God without wrath would be a God indifferent to evil."
  },
  {
    id: "h4", title: "The Cross: Where Holiness and Love Meet", ref: "Romans 3:25-26; 2 Corinthians 5:21",
    body: "The atonement is the supreme demonstration of both God's holiness and his love simultaneously. God did not simply overlook sin (which would compromise his justice) or condemn humanity without recourse (which would compromise his love). Instead, in the cross, the holy God bore in himself the penalty his justice required, so that his love could extend forgiveness without violation of his righteousness. 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God' (2 Corinthians 5:21)."
  },
  {
    id: "h5", title: "Holiness and Human Response", ref: "Hebrews 12:14; Isaiah 6:7",
    body: "Holiness transforms. Isaiah leaves the throne room commissioned and cleansed (Isaiah 6:6-8). The goal of sanctification is to share in God's holiness (Hebrews 12:10) — not to become divine but to become fully and truly human as God intended, patterned after the holy character of God. 'Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord' (Hebrews 12:14)."
  },
];

const LOVE_POINTS = [
  {
    id: "l1", title: "The Love of God Is Not Sentimentalism", ref: "John 3:16; 1 John 4:10",
    body: "Modern culture reduces love to feeling or acceptance. The love of God in Scripture is costly, purposeful, and transforming. '1 John 4:10 defines it: 'not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.' The measure of divine love is not kind words but the cross. This is the agapē love — unconditional, self-giving, other-centered — that is to characterize the Christian community."
  },
  {
    id: "l2", title: "God's Love Is Eternal", ref: "Jeremiah 31:3; Ephesians 1:4-5",
    body: "'I have loved you with an everlasting love' (Jeremiah 31:3). God's love for his people predates creation — 'he chose us in him before the foundation of the world' (Ephesians 1:4). This eternal love is not based on foreseen merit or foreknown faith (in the Calvinist framework) or even on foreknown response (in the Arminian framework) — it is simply the free, sovereign love of God choosing to love. The security of the Christian rests in a love that preceded the universe."
  },
  {
    id: "l3", title: "Grace, Mercy, and Lovingkindness", ref: "Exodus 34:6; Micah 7:18",
    body: "Hebrew hesed (lovingkindness/covenant love/steadfast love) is one of the most important theological terms in the Old Testament — appearing 245 times. It refers to God's loyal covenant love, his commitment to his people despite their unfaithfulness. 'Who is a God like you, who pardons sin and forgives transgression... You do not stay angry forever but delight to show mercy. You will again have compassion on us' (Micah 7:18-19). Hesed is the covenant love that does not quit."
  },
  {
    id: "l4", title: "God's Love and Human Suffering", ref: "Romans 8:38-39; John 11:35",
    body: "The hardest question: if God loves, why is there so much suffering? The New Testament answer is not a philosophical explanation but a person: 'Jesus wept' (John 11:35). God does not love from a distance, untouched by the pain of his creatures. In the incarnation, God entered into suffering. In the cross, God bore the ultimate consequence of sin. Romans 8:38-39 does not say that love means no suffering — it says that neither tribulation, nor distress, nor suffering, can separate us from the love that is in Christ Jesus."
  },
];

const NAMES = [
  { name: "YHWH (I AM / LORD)", ref: "Exodus 3:14-15", meaning: "The personal covenant name of God, revealed to Moses. Often rendered LORD in caps in English. Points to God's absolute, self-existent being — 'I am who I am.' The name too holy to pronounce in Jewish tradition. Jesus's seven 'I am' statements in John echo this name intentionally." },
  { name: "Elohim (God)", ref: "Genesis 1:1", meaning: "The general Hebrew word for God, used in Creation — 'In the beginning, Elohim created.' Plural in form (possibly a 'plural of majesty' or hinting at plurality within unity, later clarified as Trinity). Emphasizes God's transcendence and creative power." },
  { name: "El Shaddai (God Almighty)", ref: "Genesis 17:1; Exodus 6:3", meaning: "The name by which God revealed himself to Abraham, Isaac, and Jacob. Often translated 'God Almighty.' Associated with the patriarchal covenant promises. Emphasizes God's overwhelming power to fulfill his commitments. Used in contexts of covenant promise (Genesis 17, 28, 35)." },
  { name: "Adonai (Lord/Master)", ref: "Psalm 8:1; Isaiah 6:1", meaning: "The title meaning 'Lord' or 'Master,' used in reverential address. When Jews encountered YHWH in reading, they would say Adonai instead. Isaiah sees YHWH Adonai — 'the Lord, the Sovereign Lord' — on his throne (Isaiah 6:1). Emphasizes God's authority and dominion." },
  { name: "El Elyon (God Most High)", ref: "Genesis 14:18; Psalm 91:1", meaning: "Used by Melchizedek when he blesses Abraham: 'Blessed be Abram by El Elyon, Creator of heaven and earth.' Emphasizes God's supreme position above all other powers, rulers, or gods. Psalm 91:1 — 'He who dwells in the shelter of El Elyon.' Used especially in contexts of God's universal sovereignty." },
  { name: "El Roi (God Who Sees)", ref: "Genesis 16:13", meaning: "Hagar's name for God after he met her in the wilderness: 'You are the God who sees me.' A deeply personal name arising from a woman who was marginalized and forgotten encountering a God who sees the invisible, the powerless, and the outcast. One of the most tender names in Scripture." },
  { name: "Yahweh Jireh (The LORD Will Provide)", ref: "Genesis 22:14", meaning: "Abraham's name for the place where God provided the ram in place of Isaac. The name preserves the memory of God's timely provision at the moment of greatest need. Gives theological grounding to trust in God's provision in all circumstances." },
  { name: "Yahweh Shalom (The LORD Is Peace)", ref: "Judges 6:24", meaning: "Gideon's name for the altar he built after God spoke peace to him when he feared death. Shalom is not simply 'absence of conflict' but total well-being, wholeness, flourishing. God himself is the source and content of this shalom." },
];

const SIMPLICITY_POINTS = [
  {
    title: "What Divine Simplicity Means",
    body: "Divine simplicity is the classical doctrine that God is not composed of parts. He does not have distinct properties that are added to his substance. His existence and essence are identical. He is not 'a being that happens to be loving' — he IS love. He is not 'a being that has power' — he IS power. This was the consensus view of the church fathers, Aquinas, and the Protestant Reformers (Westminster Confession 2.1 — 'without body, parts, or passions...')."
  },
  {
    title: "Why It Matters",
    body: "If God had parts, those parts would be prior to God and God would be dependent on them — contradicting aseity. If God's love and holiness were separate properties that needed to be balanced, they could come into conflict — but they cannot, because they are one in God's simple being. Divine simplicity prevents us from playing attributes against each other: 'God's love overrides his holiness.' Both are one in the one God."
  },
  {
    title: "The Attributes Are Real Distinctions",
    body: "Simplicity does not mean the attributes are meaningless or that love and holiness are identical in every way. They are real distinctions corresponding to real aspects of how God relates to creation and how we rightly speak of him. The Reformed tradition speaks of 'virtual distinctions' — distinctions in how we conceive God that correspond to real aspects of his being, without implying that God's being is literally divided."
  },
  {
    title: "Classical vs. Contemporary Theism",
    body: "Open Theism and some forms of process theology reject divine simplicity, holding that God genuinely changes, is passible (capable of suffering), and learns from the future. Classical theism defends impassibility (God does not have uncontrolled emotional responses like humans do) while affirming that the incarnation reveals genuine divine compassion. The difference is not between a cold God and a loving God — it is about the nature of God's love: reactive/changing vs. eternally perfect and free."
  },
];

const VIDEOS = [
  { videoId: "3BotSHbFGbE", title: "The Attributes of God — R.C. Sproul" },
  { videoId: "bRoALBULYa4", title: "What Is God Like? — Tim Keller" },
  { videoId: "HFiTGGlSFcU", title: "The Holiness of God — R.C. Sproul" },
  { videoId: "mz9iRwxYJ5A", title: "The Love of God — John Piper" },
  { videoId: "9MxFmDq6mMg", title: "God's Wrath Is Not His Anger Problem — Paul Tripp" },
];

export default function TheologyProperGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_theo_proper_tab", "overview");
  const [incOpen, setIncOpen] = usePersistedState<string>("vine_theo_proper_inc", "");
  const [commOpen, setCommOpen] = usePersistedState<string>("vine_theo_proper_comm", "");
  const [holOpen, setHolOpen] = usePersistedState<string>("vine_theo_proper_hol", "");
  const [loveOpen, setLoveOpen] = usePersistedState<string>("vine_theo_proper_love", "");
  const [journal, setJournal] = usePersistedState<string>("vine_theo_proper_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string; implication?: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(107,79,187,0.08)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
          {it.implication && (
            <div style={{ marginTop: "0.75rem", padding: "0.75rem 1rem", background: "rgba(58,125,86,0.07)", borderLeft: `3px solid ${GREEN}`, borderRadius: 6 }}>
              <p style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, marginBottom: 2 }}>Implication</p>
              <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{it.implication}</p>
            </div>
          )}
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · THEOLOGY PROPER
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            The Attributes of God
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Who is God, and what is he like? The study of God's attributes — incommunicable (unique to God) and communicable (shared with creatures) — is the foundation of all Christian theology and the heart of genuine worship.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? "rgba(107,79,187,0.15)" : "transparent", color: tab === t.id ? PURPLE : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(107,79,187,0.07)", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>What is Theology Proper?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                Theology proper (from Greek <em>theos</em>, God) is the systematic study of God himself — his existence, nature, and attributes. It is distinct from Christology (the study of Christ), Pneumatology (the Holy Spirit), or Trinity (the three-in-one nature). Theology proper asks: What is God like in himself?
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                The attributes of God are traditionally divided into two categories: <strong style={{ color: TEXT }}>incommunicable attributes</strong> — those unique to God that are not shared with creatures (aseity, immutability, omnipotence, omniscience, omnipresence, infinity) — and <strong style={{ color: TEXT }}>communicable attributes</strong> — those that God shares, in an analogous way, with creatures (love, goodness, mercy, wisdom, righteousness, faithfulness).
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                A.W. Tozer: <em>"What comes into our minds when we think about God is the most important thing about us."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {GRID_OVERVIEW.map((g) => (
                <div key={g.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.label}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Incommunicable */}
        {tab === "incommunicable" && (
          <div>
            {card(
              <div>
                <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Incommunicable Attributes</h2>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>
                  These attributes belong to God alone and cannot be possessed by created beings. They describe what makes God categorically different from everything else. To confuse creatures with the Creator on these points is the essence of idolatry.
                </p>
              </div>
            )}
            <div style={{ marginTop: "1.5rem" }}>
              {accordion(INCOMMUNICABLE, incOpen, setIncOpen)}
            </div>
          </div>
        )}

        {/* Communicable */}
        {tab === "communicable" && (
          <div>
            {card(
              <div>
                <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Communicable Attributes</h2>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>
                  These attributes God "communicates" to his creatures — we can possess them in a creaturely, finite, analogous way. We can be loving, good, wise, and faithful because we bear the image of the God who IS these things infinitely.
                </p>
              </div>
            )}
            <div style={{ marginTop: "1.5rem" }}>
              {accordion(COMMUNICABLE, commOpen, setCommOpen)}
            </div>
          </div>
        )}

        {/* Holiness */}
        {tab === "holiness" && (
          <div>
            {card(
              <div>
                <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Holiness and Wrath</h2>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>
                  Holiness is perhaps God's most distinctive attribute — the seraphim cry "Holy, holy, holy" not "Love, love, love" or "Power, power, power." Understanding divine holiness unlocks the logic of the atonement, the seriousness of sin, and the nature of worship.
                </p>
              </div>
            )}
            <div style={{ marginTop: "1.5rem" }}>
              {accordion(HOLINESS_POINTS, holOpen, setHolOpen)}
            </div>
          </div>
        )}

        {/* Love */}
        {tab === "love" && (
          <div>
            {card(
              <div>
                <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Love, Grace, and Mercy</h2>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>
                  "God is love" (1 John 4:8) — arguably the most compressed and profound statement in Scripture. But the love of God in Scripture is vastly different from the sentimental, unconditional acceptance that modern culture calls "love."
                </p>
              </div>
            )}
            <div style={{ marginTop: "1.5rem" }}>
              {accordion(LOVE_POINTS, loveOpen, setLoveOpen)}
            </div>
          </div>
        )}

        {/* Names */}
        {tab === "names" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Names of God</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>In Hebrew culture, a name was not merely a label but a revelation of character and nature. The names of God in Scripture are theological statements — each name reveals who God is and how he relates to his people.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {NAMES.map((n, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                    <div>
                      <h3 style={{ fontWeight: 800, color: GOLD, fontSize: "1rem", marginBottom: "0.25rem" }}>{n.name}</h3>
                      <span style={{ color: BLUE, fontSize: "0.78rem" }}>{n.ref}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.86rem", lineHeight: 1.65, marginTop: "0.75rem" }}>{n.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Simplicity */}
        {tab === "simplicity" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Divine Simplicity & Classical Theism</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Divine simplicity is one of the most important and most neglected doctrines in contemporary Christianity. Understanding it corrects many distortions of the doctrine of God and safeguards the coherence of all other attributes.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {SIMPLICITY_POINTS.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: TEAL, fontSize: "0.98rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Which attribute of God do you find hardest to believe? Which do you find most comforting? What does the God revealed in Scripture call you to today?</p>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }}
              />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended video resources on the attributes and nature of God.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
