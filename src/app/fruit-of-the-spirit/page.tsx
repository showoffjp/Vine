"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Fruit = {
  id: string;
  name: string;
  greek: string;
  translit: string;
  color: string;
  icon: string;
  meaning: string;
  contrast: string;
  scripture: string;
  scriptureRef: string;
  growth: string;
};

const FRUITS: Fruit[] = [
  {
    id: "love",
    name: "Love",
    greek: "ἀγάπη",
    translit: "agapē",
    color: "#EF4444",
    icon: "❤️",
    meaning: "Agapē is the supreme, self-giving love that seeks the good of the other regardless of merit or return. It is not primarily a feeling but a settled disposition of the will — the same love with which God loved the world (John 3:16) and Christ loved the church (Ephesians 5:25). It heads the list because all the other graces are expressions of it; Paul will say in 1 Corinthians 13 that without love everything else is nothing. The fruit is singular (karpos, not karpoi) precisely because love is the trunk from which the rest grow.",
    contrast: "Against 'enmities, strife, jealousy' (Galatians 5:20) — the works of the flesh that treat others as rivals or means to an end. Where the flesh asks 'what can I get?', agapē asks 'what can I give?'",
    scripture: "Love is patient and kind; love does not envy or boast... Love bears all things, believes all things, hopes all things, endures all things.",
    scriptureRef: "1 Corinthians 13:4–7",
    growth: "Love grows by beholding the love of God for us (1 John 4:19 — 'we love because he first loved us'). Meditate on the cross until your heart is warmed, then practice love in concrete acts toward specific, difficult people. Love is learned in the friction of real relationships, not in the abstract.",
  },
  {
    id: "joy",
    name: "Joy",
    greek: "χαρά",
    translit: "chara",
    color: "#F59E0B",
    icon: "✨",
    meaning: "Chara is a deep gladness rooted not in circumstances but in God himself. It shares a root with charis ('grace') — joy is the natural response of a heart that has received grace. It is the gladness Jesus had 'set before him' even as he endured the cross (Hebrews 12:2), and the joy Paul commands from a prison cell (Philippians 4:4). Christian joy is not the denial of sorrow but a deeper current beneath it, anchored in unshakable realities.",
    contrast: "Against 'sorceries' and the frantic pleasure-seeking of the flesh, which chases sensation because it has no stable gladness. Worldly happiness depends on happenings; biblical joy depends on God.",
    scripture: "Rejoice in the Lord always; again I will say, rejoice.",
    scriptureRef: "Philippians 4:4",
    growth: "Joy grows through gratitude and remembrance — counting God's mercies and rehearsing his promises. Worship, especially in song, stirs it. Joy deepens as we learn that our circumstances are not our identity; the 'joy of the LORD is your strength' (Nehemiah 8:10) is cultivated by feasting on his Word.",
  },
  {
    id: "peace",
    name: "Peace",
    greek: "εἰρήνη",
    translit: "eirēnē",
    color: "#3B82F6",
    icon: "🕊️",
    meaning: "Eirēnē carries the full weight of the Hebrew shalom: not merely the absence of conflict but wholeness, well-being, and right relationship — with God, with others, and within oneself. Its foundation is the peace we have with God through justification (Romans 5:1). From that vertical peace flows the 'peace of God, which surpasses all understanding' (Philippians 4:7) that guards the heart, and the horizontal peace we are to pursue with all people (Romans 12:18).",
    contrast: "Against 'strife... dissensions, divisions' (Galatians 5:20) — the flesh fractures relationships and breeds inner turmoil. The Spirit reconciles and settles.",
    scripture: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled.",
    scriptureRef: "John 14:27",
    growth: "Peace grows by casting anxieties on God in prayer (Philippians 4:6–7) and by trusting his sovereignty. Isaiah 26:3 — 'You keep him in perfect peace whose mind is stayed on you.' Pursue reconciliation actively; unresolved conflict is the great thief of peace.",
  },
  {
    id: "patience",
    name: "Patience",
    greek: "μακροθυμία",
    translit: "makrothymia",
    color: "#10B981",
    icon: "⏳",
    meaning: "Makrothymia is literally 'long-suffering' or 'long-temperedness' — a fuse that is slow to burn. It is the capacity to endure provocation, delay, and the failings of others without retaliating or giving up. It is supremely a divine attribute: God is 'slow to anger' (Exodus 34:6) and patient with us, 'not wishing that any should perish' (2 Peter 3:9). Christian patience extends that same forbearance toward others.",
    contrast: "Against 'fits of anger' and 'rivalries' (Galatians 5:20) — the flesh demands its way now and lashes out when crossed. The Spirit waits, bears, and forgives.",
    scripture: "Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it.",
    scriptureRef: "James 5:7",
    growth: "Patience grows through trials, which 'produce steadfastness' (James 1:3–4). It is cultivated by remembering how patient God has been with us (the parable of the unforgiving servant, Matthew 18). Practically, it grows by deliberately not retaliating, by waiting on God's timing, and by widening our perspective to the long view of his purposes.",
  },
  {
    id: "kindness",
    name: "Kindness",
    greek: "χρηστότης",
    translit: "chrēstotēs",
    color: "#EC4899",
    icon: "🤲",
    meaning: "Chrēstotēs is benevolence in action — a gracious, useful goodness that puts itself at the service of others. The related adjective chrēstos means 'good, kind, easy to deal with'; Jesus uses it of his 'easy' yoke (Matthew 11:30). It is the kindness of God 'meant to lead you to repentance' (Romans 2:4). Kindness is goodness turned outward and made gentle, sensitive to the needs and burdens of others.",
    contrast: "Against the harshness, exploitation, and self-interest of the flesh. Where the flesh uses people, kindness serves them; where the flesh is abrasive, kindness is gracious.",
    scripture: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    scriptureRef: "Ephesians 4:32",
    growth: "Kindness grows by receiving and remembering the kindness of God toward us. It is practiced in small, attentive acts — noticing who is overlooked, speaking gently, serving quietly. Kindness is sharpened by imagination: putting yourself in another's place until compassion moves you to act.",
  },
  {
    id: "goodness",
    name: "Goodness",
    greek: "ἀγαθωσύνη",
    translit: "agathōsynē",
    color: "#84CC16",
    icon: "🌱",
    meaning: "Agathōsynē is moral excellence and uprightness — goodness as a settled quality of character that overflows into generous and righteous action. While kindness emphasizes gentleness, goodness emphasizes integrity and the willingness to do right even when it confronts evil (the same goodness that made Jesus cleanse the temple). It is virtue with backbone: generous toward others, but also opposed to wrong.",
    contrast: "Against 'impurity, sensuality' (Galatians 5:19) — the corruption of the flesh. Goodness is the wholeness of a life conformed to God's character, the opposite of moral decay.",
    scripture: "For at one time you were darkness, but now you are light in the Lord. Walk as children of light (for the fruit of light is found in all that is good and right and true).",
    scriptureRef: "Ephesians 5:8–9",
    growth: "Goodness grows as we are 'created in Christ Jesus for good works' (Ephesians 2:10) and as the Word renews our values. It is cultivated by saturation in Scripture (which is profitable for training in righteousness, 2 Timothy 3:16–17) and by deliberately practicing what is right until it becomes second nature.",
  },
  {
    id: "faithfulness",
    name: "Faithfulness",
    greek: "πίστις",
    translit: "pistis",
    color: "#8B5CF6",
    icon: "🔒",
    meaning: "Here pistis means faithfulness, reliability, trustworthiness — being a person whose word can be trusted and who keeps commitments. It mirrors the covenant faithfulness of God, who 'remains faithful' even when we are faithless (2 Timothy 2:13). The faithful servant is the one the master commends: 'Well done, good and faithful servant' (Matthew 25:21). It is steadfastness over the long haul, dependability when no one is watching.",
    contrast: "Against the fickleness and treachery of the flesh — the broken vows, the abandoned commitments, the betrayals. The Spirit makes us steady; the flesh makes us unreliable.",
    scripture: "Moreover, it is required of stewards that they be found faithful.",
    scriptureRef: "1 Corinthians 4:2",
    growth: "Faithfulness grows by being faithful in little (Luke 16:10), by keeping small promises until reliability becomes character. It is anchored in the faithfulness of God: the more we trust his steadfastness, the more we reflect it. It is built in the daily, unglamorous keeping of commitments.",
  },
  {
    id: "gentleness",
    name: "Gentleness",
    greek: "πραΰτης",
    translit: "prautēs",
    color: "#06B6D4",
    icon: "🌾",
    meaning: "Prautēs (gentleness or meekness) is strength under control. In classical Greek it described a wild animal that had been tamed or a powerful horse responsive to the bit — power harnessed and directed rather than weakness. The gentle person has strength but exercises it with restraint and humility. Jesus is 'gentle and lowly in heart' (Matthew 11:29); Moses, who confronted Pharaoh, was 'very meek' (Numbers 12:3). Gentleness is not spinelessness; it is power submitted to God.",
    contrast: "Against 'fits of anger, rivalries, dissensions' (Galatians 5:20) — the flesh asserts itself harshly. Gentleness responds with restraint, correcting opponents 'with gentleness' (2 Timothy 2:25).",
    scripture: "Let your gentleness be known to everyone. The Lord is at hand.",
    scriptureRef: "Philippians 4:5",
    growth: "Gentleness grows through humility — recognizing our own need for grace makes us gentle with others. It is cultivated by submitting our strength and our rights to God, by responding softly when provoked (Proverbs 15:1), and by imitating the gentleness of Christ toward the weak and the failing.",
  },
  {
    id: "self-control",
    name: "Self-Control",
    greek: "ἐγκράτεια",
    translit: "enkrateia",
    color: "#00FF88",
    icon: "🛑",
    meaning: "Enkrateia is mastery over one's own desires, impulses, and appetites — literally 'holding power within.' It is the inner government that keeps passions in their proper place rather than being ruled by them. Paul compares the Christian life to an athlete who 'exercises self-control in all things' (1 Corinthians 9:25). It comes last not as least but as the crowning evidence that the Spirit, not the flesh, now governs the believer's desires.",
    contrast: "Against the entire catalog of fleshly indulgence — 'sexual immorality... drunkenness, orgies' (Galatians 5:19–21). The flesh is ruled by appetite; the Spirit-led life rules its appetites.",
    scripture: "A man without self-control is like a city broken into and left without walls.",
    scriptureRef: "Proverbs 25:28",
    growth: "Self-control is, paradoxically, a fruit of the Spirit — it is not mere willpower but the Spirit governing our desires. It grows by yielding to the Spirit, by training (the athletic metaphor implies discipline and repetition), by removing occasions for temptation, and by feeding holy desires until they outweigh the unholy ones.",
  },
];

type Tab = "overview" | "nine" | "growing" | "videos";

const GROWING = [
  {
    title: "Fruit, Not Works",
    ref: "Galatians 5:22",
    body: "Paul calls these nine qualities 'the fruit of the Spirit,' deliberately contrasted with 'the works of the flesh' (5:19). Works are produced by effort and self-will; fruit is produced by life. A branch does not strain to produce grapes — it bears fruit naturally by remaining connected to the vine. The single Greek word karpos (fruit, singular) underscores that these are not nine separate achievements to check off but one organic harvest, the integrated character of a Spirit-filled life. You cannot manufacture fruit; you can only abide.",
  },
  {
    title: "Abide in the Vine",
    ref: "John 15:4–5",
    body: "Jesus gives the controlling image: 'Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me... apart from me you can do nothing.' Fruitfulness is the result of union with Christ, maintained through prayer, the Word, worship, and obedience. The branch's only job is to stay connected; the life of the vine does the producing. This is the heart of how the fruit grows — not by trying harder but by abiding more deeply.",
  },
  {
    title: "Walk by the Spirit",
    ref: "Galatians 5:16, 25",
    body: "'Walk by the Spirit, and you will not gratify the desires of the flesh... If we live by the Spirit, let us also keep in step with the Spirit.' The Christian life is a daily, step-by-step walking in dependence on and obedience to the Spirit. The flesh and the Spirit are at war (5:17), and we feed whichever we walk with. Bearing fruit means consciously yielding to the Spirit's leading moment by moment, choosing his promptings over the flesh's demands.",
  },
  {
    title: "Crucify the Flesh",
    ref: "Galatians 5:24",
    body: "'Those who belong to Christ Jesus have crucified the flesh with its passions and desires.' There is a decisive renunciation at conversion and a daily putting to death (mortification) of sinful desires. Fruit grows in soil cleared of weeds. The believer does not merely cultivate virtue; he actively starves and slays the flesh, refusing to feed the appetites that choke the fruit. Growth requires both planting (the Spirit's work) and weeding (our cooperation).",
  },
  {
    title: "Fruit Grows in Community",
    ref: "Galatians 5:13–15, 26",
    body: "Notice the relational shape of the fruit: love, patience, kindness, gentleness — these are virtues that only exist toward other people. Paul frames the whole passage with warnings against 'biting and devouring one another' and 'provoking one another.' The fruit of the Spirit is grown in the soil of community, tested in real relationships, and visible chiefly in how we treat one another. You cannot cultivate patience in isolation.",
  },
  {
    title: "Fruit Grows Slowly",
    ref: "James 5:7",
    body: "Agriculture takes time. The farmer waits patiently for the harvest through the early and late rains. So spiritual growth is gradual, seasonal, and often hidden. There are seasons of apparent dormancy and seasons of visible blossoming. The pressure to produce instant maturity is itself a work of the flesh. The Spirit grows fruit at the pace of life — and the gardener (John 15:1–2) prunes precisely so that we may bear more fruit, even when pruning feels like loss.",
  },
];

export default function FruitOfTheSpiritPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selected, setSelected] = useState("love");

  const fruit = FRUITS.find((f) => f.id === selected)!;

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        <header style={{ textAlign: "center", padding: "48px 0 36px" }}>
          <span style={{ display: "inline-block", background: `${GREEN}1A`, color: GREEN, border: `1px solid ${GREEN}55`, padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
            Galatians 5:22–23
          </span>
          <h1 style={{ fontFamily: SERIF, fontSize: 52, fontWeight: 700, lineHeight: 1.05, margin: "0 0 14px" }}>
            The Fruit of the Spirit
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Nine facets of a single harvest — the character of Christ formed in us by the Holy Spirit. Not works we produce by effort, but fruit we bear by abiding in the Vine.
          </p>
          <blockquote style={{ fontFamily: SERIF, fontStyle: "italic", color: TEXT, fontSize: 22, maxWidth: 760, margin: "28px auto 0", lineHeight: 1.6 }}>
            &ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.&rdquo;
            <span style={{ display: "block", fontFamily: "system-ui, sans-serif", fontStyle: "normal", color: GREEN, fontSize: 13, fontWeight: 700, marginTop: 10 }}>— Galatians 5:22–23</span>
          </blockquote>
        </header>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "overview" as const, label: "Overview", icon: "📖" },
            { id: "nine" as const, label: "The Nine Fruit", icon: "🍇" },
            { id: "growing" as const, label: "Growing in the Spirit", icon: "🌱" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>One Fruit, Nine Flavors</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                Paul writes &ldquo;the fruit of the Spirit <span style={{ fontStyle: "italic" }}>is</span>&rdquo; — singular — not &ldquo;the fruits <span style={{ fontStyle: "italic" }}>are</span>.&rdquo; The nine qualities are not a menu from which to pick favorites but a single, integrated harvest, the unified character of a person in whom the Holy Spirit dwells. Where the Spirit is present, all nine grow together, like a single cluster with many grapes. Their source is not human willpower but the indwelling Spirit producing the life of Christ within.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                This stands in deliberate contrast to &ldquo;the works of the flesh&rdquo; (Galatians 5:19–21) — the fragmented, self-destructive output of human nature in rebellion. Works are manufactured; fruit is grown. The difference between them is the difference between striving and abiding.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>&ldquo;Against Such Things There Is No Law&rdquo;</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Paul ends the list with a wry note: there is no law against these qualities. The Galatians were tempted to return to law-keeping as the path to righteousness. Paul shows them a better way: the law could restrain the works of the flesh, but it could never produce the fruit of the Spirit. No rule can manufacture love or generate joy. Only the Spirit, working from the inside out, can grow what the law could only command. The fruit of the Spirit is the law fulfilled — for &ldquo;love is the fulfilling of the law&rdquo; (Romans 13:10).
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
              {FRUITS.map((f) => (
                <button key={f.id} onClick={() => { setSelected(f.id); setActiveTab("nine"); }}
                  style={{ textAlign: "left", background: BG, border: `1px solid ${f.color}40`, borderRadius: 12, padding: 16, cursor: "pointer" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ color: f.color, fontWeight: 800, fontSize: 15 }}>{f.name}</div>
                  <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", fontFamily: SERIF }}>{f.greek} · {f.translit}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "nine" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {FRUITS.map((f) => (
                <button key={f.id} onClick={() => setSelected(f.id)}
                  style={{ width: "100%", background: selected === f.id ? `${f.color}18` : "transparent", border: `1px solid ${selected === f.id ? f.color + "70" : BORDER}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <span style={{ color: selected === f.id ? f.color : MUTED, fontWeight: 700, fontSize: 13 }}>{f.name}</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${fruit.color}35`, borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 34 }}>{fruit.icon}</span>
                  <span style={{ background: `${fruit.color}20`, color: fruit.color, padding: "3px 12px", borderRadius: 10, fontSize: 13, fontWeight: 700, fontFamily: SERIF, fontStyle: "italic" }}>{fruit.greek} &middot; {fruit.translit}</span>
                </div>
                <h2 style={{ color: fruit.color, fontWeight: 900, fontSize: 28, margin: "0 0 22px" }}>{fruit.name}</h2>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>THE GREEK & ITS MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{fruit.meaning}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 20 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>VERSUS THE WORKS OF THE FLESH</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{fruit.contrast}</p>
                </div>

                <blockquote style={{ margin: "0 0 20px", padding: "14px 18px", borderLeft: `3px solid ${fruit.color}`, background: `${fruit.color}0C`, borderRadius: "0 8px 8px 0" }}>
                  <p style={{ color: TEXT, fontSize: 17, lineHeight: 1.6, margin: 0, fontStyle: "italic", fontFamily: SERIF }}>&ldquo;{fruit.scripture}&rdquo;</p>
                  <span style={{ color: fruit.color, fontSize: 12, fontWeight: 700, display: "block", marginTop: 8 }}>{fruit.scriptureRef}</span>
                </blockquote>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>HOW IT GROWS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{fruit.growth}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "growing" && (
          <div>
            {GROWING.map((g, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{g.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{g.ref}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 8 }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 22, lineHeight: 1.7 }}>
              Teachings on the fruit of the Spirit, abiding in Christ, and walking by the Spirit.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { videoId: "1MIVUMFcVdI", title: "The Fruit of the Spirit", channel: "The Bible Project", description: "An overview tracing how the Spirit produces the character of Christ in the believer, set against the works of the flesh in Galatians 5." },
                { videoId: "Aa1Fv8mDsmw", title: "Walk by the Spirit — Galatians 5", channel: "John Piper / Desiring God", description: "John Piper expounds the contrast between the flesh and the Spirit and what it means to keep in step with the Spirit." },
                { videoId: "2gAfHObZ3LQ", title: "Abiding in the Vine — John 15", channel: "Bible Teaching", description: "A study of Jesus' vine-and-branches teaching, the secret of bearing lasting fruit through union with Christ." },
                { videoId: "T9Mg_zw1pNw", title: "Love, Joy, Peace — Cultivating the Fruit", channel: "Tim Keller Sermons", description: "Tim Keller teaches on how grace produces the fruit of the Spirit from the inside out, transforming character at the root." },
              ].map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, margin: "0 0 4px" }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, margin: "0 0 6px" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
