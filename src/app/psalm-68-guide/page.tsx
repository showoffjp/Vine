"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 68 Explained &mdash; God Shall Arise" },
  { videoId: "OjJ7GkWCHvA", title: "Father of the Fatherless &mdash; The Tender Power of God" },
  { videoId: "pHBzJ2dVXgk", title: "You Ascended on High &mdash; Psalm 68:18 and Ephesians 4" },
  { videoId: "3sO5FH2ybPY", title: "Who Daily Bears Us Up &mdash; The God Who Carries His People" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Majestic and Difficult Psalm",
    body: "Psalm 68 is one of the grandest and, by common agreement, one of the most difficult texts in the entire Psalter. Its Hebrew is dense and archaic, packed with rare words, abrupt shifts of scene, and ancient names; scholars have long called it a translator&rsquo;s puzzle. Yet through all its difficulty the psalm carries a single soaring vision: the triumphant procession of God, the divine warrior-King, who marches from Sinai to Zion, scatters his enemies, gathers his people, ascends his holy hill, and summons all the kingdoms of the earth to sing his praise. It is a parade of glory, and we are invited to fall in step behind the King.",
  },
  {
    heading: "The Ark Sets Out: A Battle Cry",
    body: "The psalm opens with words drawn straight from the wilderness: &ldquo;God shall arise, his enemies shall be scattered; and those who hate him shall flee before him!&rdquo; (68:1). This echoes the cry that Moses spoke whenever the ark of the covenant set out on the march &mdash; &ldquo;Arise, O Lord, and let your enemies be scattered&rdquo; (Numbers 10:35). From its first line, then, the psalm casts God as the leader of an advancing army, the One before whom all opposition melts like wax before fire. But this same conquering God, as the psalm immediately shows, bends down in tenderness to the weakest of his people.",
  },
  {
    heading: "Structure: From Sinai to Zion to the Nations",
    body: "Psalm 68 moves in a great geographical and theological arc. It begins with God arising and caring for the vulnerable (vv. 1&ndash;6), recalls his march through the wilderness from Sinai (vv. 7&ndash;10), celebrates his victories and his ascent of the holy mountain (vv. 11&ndash;18), blesses the God who daily bears his people and delivers from death (vv. 19&ndash;23), describes the festal procession into the sanctuary with envoys streaming in from Egypt and Cush (vv. 24&ndash;31), and ends by calling all the kingdoms of the earth to ascribe power and sing praise to the awesome God (vv. 32&ndash;35). The movement is from the desert to the temple to the ends of the earth.",
  },
  {
    heading: "Context: The Warrior-King Who Stoops to the Weak",
    body: "The genius of Psalm 68 is the way it holds together two truths that we are tempted to keep apart: overwhelming might and tender mercy. The God who scatters armies and rides through the ancient heavens is the very same God who is &ldquo;Father of the fatherless and protector of widows&rdquo; (68:5), who &ldquo;settles the solitary in a home&rdquo; and &ldquo;leads out the prisoners to prosperity&rdquo; (68:6). His power is not exercised for its own sake but on behalf of the helpless. And the New Testament reveals that the climax of this procession &mdash; &ldquo;You ascended on high, leading a host of captives in your train&rdquo; (68:18) &mdash; finds its fulfillment in the ascended Christ, who, Paul says, &ldquo;gave gifts to men&rdquo; to build up his church (Ephesians 4:8).",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t1",
    title: "God Shall Arise: The Battle Cry",
    color: ROSE,
    body: "&ldquo;God shall arise, his enemies shall be scattered; and those who hate him shall flee before him!&rdquo; (68:1). These opening words deliberately echo the ancient formula Moses spoke each time the ark of the covenant set out to lead Israel through the wilderness: &ldquo;Arise, O Lord, and let your enemies be scattered, and let those who hate you flee before you&rdquo; (Numbers 10:35). The psalm thus opens like a trumpet blast, summoning God to take his place at the head of the march. The imagery is vivid: the wicked are driven away &ldquo;as smoke is driven away&rdquo; and melt &ldquo;as wax melts before fire&rdquo; (68:2). Yet the very same verses that scatter the enemies declare that &ldquo;the righteous shall be glad; they shall exult before God; they shall be jubilant with joy&rdquo; (68:3). The advance of the divine warrior spells terror for his foes but festival for his friends.",
  },
  {
    id: "t2",
    title: "Father of the Fatherless",
    color: GREEN,
    body: "The most tender verses in the psalm sit right beside its most fearsome. The God who scatters armies is described as &ldquo;Father of the fatherless and protector of widows&hellip; in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity&rdquo; (68:5&ndash;6). In the ancient world the orphan, the widow, the lonely, and the prisoner were the most defenseless members of society, the easiest to forget and exploit. Yet God names himself their Father and protector. His power is not cold or distant; it is bent toward the weak. The same strength that topples kings stoops to set a lonely person in a family and to lead captives out into freedom and flourishing. This is the heart of the biblical God: almighty, yet intimately tender toward the broken &mdash; a truth carried straight into the gospel, where Christ welcomes the outcast and adopts orphans into the family of God (cf. Romans 8:15).",
  },
  {
    id: "t3",
    title: "The March from Sinai",
    color: GOLD,
    body: "The psalm recalls the great founding journey of Israel: &ldquo;O God, when you went out before your people, when you marched through the wilderness, the earth quaked, the heavens poured down rain, before God, the One of Sinai, before God, the God of Israel&rdquo; (68:7&ndash;8). The memory of Sinai, where God descended in fire and thunder to meet his people, becomes the pattern for understanding all his later acts. As he led Israel through the desert, providing rain in abundance and restoring his weary inheritance (68:9), so he continues to go before his people and to provide for the needy out of his goodness (68:10). The God of the past is the God of the present; the One who marched through the wilderness still leads his people on their pilgrimage today.",
  },
  {
    id: "t4",
    title: "You Ascended on High (Ephesians 4)",
    color: PURPLE,
    body: "At the psalm&rsquo;s summit stands its most famous line: &ldquo;You ascended on high, leading a host of captives in your train, and receiving gifts among men&rdquo; (68:18). The picture is of a victorious king ascending his throne on the mountain after battle, leading a train of conquered captives and receiving the spoils and tribute of victory. The apostle Paul takes up this very verse in Ephesians 4:8 and applies it to the ascended Christ: &ldquo;When he ascended on high he led a host of captives, and he gave gifts to men.&rdquo; Where the psalm speaks of receiving gifts, Paul speaks of giving them &mdash; for the conquering Christ distributes the spoils of his victory to his church, giving &ldquo;the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints&hellip; for building up the body of Christ&rdquo; (Ephesians 4:11&ndash;12). The triumphant ascent of God in Psalm 68 becomes the ascension of the risen Lord, who pours out gifts upon his people.",
  },
  {
    id: "t5",
    title: "Who Daily Bears Us Up",
    color: TEAL,
    body: "After the heights of victory and ascension, the psalm turns to a quiet, daily comfort: &ldquo;Blessed be the Lord, who daily bears us up; God is our salvation&rdquo; (68:19). The God who scatters armies and ascends in triumph is also the God who carries his people every single day, like a parent lifting a weary child. And the very next verse presses the comfort further: &ldquo;Our God is a God of salvation, and to God, the Lord, belong deliverances from death&rdquo; (68:20). The same mighty arm that won the great victories is the arm that holds us up morning by morning and that has power over death itself. There is no day so heavy, no burden so crushing, that the God who daily bears us up cannot carry us through it &mdash; and at the last, through death into life.",
  },
  {
    id: "t6",
    title: "The Nations Stream to Zion",
    color: PURPLE,
    body: "The festal procession of the psalm draws not only Israel but the nations: &ldquo;Your procession is seen, O God, the procession of my God, my King, into the sanctuary&rdquo; (68:24), and soon &ldquo;envoys shall come from Egypt; Cush shall hasten to stretch out her hands to God&rdquo; (68:31). Egypt &mdash; the old house of bondage &mdash; and Cush, the distant land of the upper Nile, are pictured streaming toward the God of Israel with hands outstretched in worship. The psalm ends with the summons, &ldquo;Sing to God, O kingdoms of the earth; sing praises to the Lord&rdquo; (68:32). This vision of far-off nations turning to God anticipates the spread of the gospel &mdash; not least the conversion of the Ethiopian official in Acts 8, who returns home rejoicing with the good news of Christ. The procession of the King is destined to draw the whole world into worship.",
  },
];

const verseItems: { id: string; ref: string; color: string; quote: string; body: string }[] = [
  {
    id: "v1",
    ref: "Psalm 68:1&ndash;6",
    color: ROSE,
    quote: "God shall arise, his enemies shall be scattered; and those who hate him shall flee before him! But the righteous shall be glad; they shall exult before God. Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.",
    body: "The psalm opens with the ancient battle cry of the ark (cf. Numbers 10:35): God arises, and his enemies scatter like smoke and melt like wax before fire. But the same arising that scatters the wicked makes the righteous &ldquo;glad&rdquo; and &ldquo;jubilant with joy.&rdquo; Then, in a breathtaking turn, the conquering God is named &ldquo;Father of the fatherless and protector of widows.&rdquo; The One who topples armies stoops to settle the lonely in a family and to lead prisoners out into prosperity. In a single breath the psalm holds together overwhelming might and intimate tenderness &mdash; the God before whom enemies flee is the God who gathers up the abandoned and the weak.",
  },
  {
    id: "v2",
    ref: "Psalm 68:7&ndash;10",
    color: GOLD,
    quote: "O God, when you went out before your people, when you marched through the wilderness, the earth quaked, the heavens poured down rain, before God, the One of Sinai. Rain in abundance, O God, you shed abroad; you restored your inheritance as it languished; you provided for the needy.",
    body: "Here the psalm reaches back to the foundational journey of the Exodus and Sinai. God &ldquo;went out before&rdquo; his people, marching at the head of the column through the wilderness; creation itself trembled at his approach, the earth quaking and the heavens pouring down rain. The memory of Sinai &mdash; where God descended in fire to make his covenant &mdash; becomes the lens for seeing all his care. He showered down rain in abundance, revived his weary inheritance, and &ldquo;provided for the needy&rdquo; out of his sheer goodness. The God who led Israel through the desert is the same God who provides for his people still.",
  },
  {
    id: "v3",
    ref: "Psalm 68:11&ndash;18",
    color: PURPLE,
    quote: "The Lord gives the word; the women who announce the news are a great host. The kings of the armies&mdash;they flee, they flee! You ascended on high, leading a host of captives in your train, and receiving gifts among men.",
    body: "This section celebrates the victories of God. &ldquo;The Lord gives the word,&rdquo; and a great company of women proclaim the good news of triumph; the kings of enemy armies flee in panic. The climax comes in verse 18, the psalm&rsquo;s most quoted line: &ldquo;You ascended on high, leading a host of captives in your train, and receiving gifts among men.&rdquo; The victorious King mounts his holy hill, leading a procession of the conquered and receiving the tribute of victory. Paul takes up this verse in Ephesians 4:8 and applies it to the risen and ascended Christ, who, having triumphed, &ldquo;gave gifts to men&rdquo; &mdash; pouring out upon his church the gifts of ministry to build up his body. The ascent of God here becomes the ascension of the Lord.",
  },
  {
    id: "v4",
    ref: "Psalm 68:19&ndash;23",
    color: TEAL,
    quote: "Blessed be the Lord, who daily bears us up; God is our salvation. Our God is a God of salvation, and to God, the Lord, belong deliverances from death.",
    body: "After the heights of victory, the psalm offers one of its most tender and quoted comforts: &ldquo;Blessed be the Lord, who daily bears us up.&rdquo; The mighty God who scatters armies also carries his people, day by day, like a parent lifting a tired child. &ldquo;God is our salvation&rdquo; &mdash; not merely once, but continually. And the comfort reaches its furthest point: &ldquo;to God, the Lord, belong deliverances from death.&rdquo; The same power that won the great victories is the power that holds us up each ordinary morning and that has authority even over the grave. No burden is too heavy for the God who daily bears us up.",
  },
  {
    id: "v5",
    ref: "Psalm 68:24&ndash;31",
    color: GREEN,
    quote: "Your procession is seen, O God, the procession of my God, my King, into the sanctuary. Sing to God, O kingdoms of the earth&hellip; Nobles shall come from Egypt; Cush shall hasten to stretch out her hands to God.",
    body: "Now the scene becomes a grand festal procession into the sanctuary &mdash; singers, musicians, and the tribes of Israel marching before their God and King. But the vision quickly widens beyond Israel. &ldquo;Envoys shall come from Egypt; Cush shall hasten to stretch out her hands to God.&rdquo; Egypt, the old house of bondage, and Cush, a distant land far up the Nile, are pictured streaming toward the God of Israel with hands lifted in worship and surrender. The procession of the King is not a private affair for one nation; it gathers the peoples of the earth. This anticipates the day when the gospel would reach the nations &mdash; foreshadowed in the Ethiopian official of Acts 8, who carried the good news home.",
  },
  {
    id: "v6",
    ref: "Psalm 68:32&ndash;35",
    color: GOLD,
    quote: "Sing to God, O kingdoms of the earth; sing praises to the Lord&hellip; Ascribe power to God, whose majesty is over Israel, and whose power is in the skies. Awesome is God from his sanctuary; he gives power and strength to his people. Blessed be God!",
    body: "The psalm ends with a worldwide summons: &ldquo;Sing to God, O kingdoms of the earth.&rdquo; The God who rides through the ancient heavens, whose voice is mighty, is to be praised by every kingdom. The peoples are called to &ldquo;ascribe power to God,&rdquo; to acknowledge the majesty that towers over Israel and fills the skies. Yet the final note is not only awe but gift: &ldquo;he gives power and strength to his people.&rdquo; The God who is awesome from his sanctuary does not keep his power to himself; he shares it with the weak, strengthening those who belong to him. The psalm closes, fittingly, with a doxology &mdash; &ldquo;Blessed be God!&rdquo; &mdash; the only proper response to such majesty and such grace.",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Trust the God Who Scatters Every Enemy",
    color: ROSE,
    body: "Psalm 68 opens with God arising and his enemies fleeing like smoke before the wind. For the believer who feels surrounded &mdash; by opposition, by temptation, by the powers of darkness, by fear itself &mdash; this is bracing comfort. The same God still arises on behalf of his people. We do not have to win the battle by our own strength; we follow a King who has already triumphed. When the forces arrayed against you feel overwhelming, return to the opening cry of this psalm and remember that, when God arises, no enemy can stand. The risen Christ has &ldquo;disarmed the rulers and authorities&hellip; triumphing over them&rdquo; (Colossians 2:15), and we march behind him in his victory.",
  },
  {
    heading: "Find Your Father in the Mighty God",
    color: GREEN,
    body: "The most striking move of the psalm is that the God who scatters armies is &ldquo;Father of the fatherless and protector of widows&rdquo; (68:5). If you feel alone, forgotten, unprotected, or set apart, hear this: the Almighty names himself your Father and your defender. He &ldquo;settles the solitary in a home.&rdquo; Whatever family you have lost or never had, God brings the lonely into his own household. In Christ this becomes the gospel of adoption, in which we receive &ldquo;the Spirit of adoption as sons, by whom we cry, &lsquo;Abba! Father!&rsquo;&rdquo; (Romans 8:15). The power that holds the universe is bent, in tenderness, toward you.",
  },
  {
    heading: "Receive the Gifts of the Ascended Christ",
    color: PURPLE,
    body: "Paul takes the great ascent of Psalm 68:18 and shows that the victorious Christ, having ascended, &ldquo;gave gifts to men&rdquo; (Ephesians 4:8). The risen Lord pours out upon his church the gifts of ministry &mdash; teachers, shepherds, evangelists &mdash; to build us up into maturity. This means the life of the church is itself a spoil of Christ&rsquo;s victory. Receive these gifts gratefully: the teaching you sit under, the people God has placed around you to strengthen your faith, the very fellowship of the body. And ask how the gifts and strength God has given you might in turn be used to build up others, for the ascended King distributes his gifts so that the whole body may grow.",
  },
  {
    heading: "Let Him Bear You Up, One Day at a Time",
    color: TEAL,
    body: "&ldquo;Blessed be the Lord, who daily bears us up&rdquo; (68:19). Notice the word &ldquo;daily.&rdquo; God does not merely carry us at the great crisis points; he carries us every ordinary morning, through the unglamorous weight of common days. If today feels heavy &mdash; the burden of grief, of work, of weariness, of the long fight against sin &mdash; this verse invites you to lay that weight on the God who has promised to bear you up. You are not asked to carry yourself. The same God who delivers from death is strong enough to carry you through this single day, and the next, and every day until he carries you home.",
  },
  {
    heading: "Join the Procession of All the Nations",
    color: GOLD,
    body: "The psalm widens until envoys come from Egypt and Cush, and all the kingdoms of the earth are summoned to sing. The procession of the King was never meant to be confined to one people. We live in the age when that vision is being fulfilled, as the gospel goes out to every nation. Ask how your life can join and advance that procession &mdash; through prayer for the nations, through generosity, through welcoming the stranger, through carrying the good news near and far. The God who is &ldquo;awesome from his sanctuary&rdquo; is gathering a people from every land, and we are invited to march in that joyful parade and to call others to fall in step.",
  },
];

const reflectionQuestions: string[] = [
  "How does it change your fears to remember that, when God arises, his enemies are scattered like smoke before the wind?",
  "Psalm 68:5 calls God &ldquo;Father of the fatherless and protector of widows.&rdquo; Where in your life do you most need to know God as Father and defender?",
  "Paul applies Psalm 68:18 to the ascended Christ who &ldquo;gave gifts to men.&rdquo; What gifts of ministry and fellowship has Christ given you, and how might you use them to build up others?",
  "What burden are you carrying today that you could entrust to the God &ldquo;who daily bears us up&rdquo;?",
  "How do the verses about Egypt and Cush coming to God stretch your vision of who belongs in the worship of the King?",
  "The psalm ends, &ldquo;he gives power and strength to his people.&rdquo; In what area of weakness do you need to ask God for his strength?",
];

export default function Psalm68Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, color: ROSE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 68: God Shall Arise, His Enemies Be Scattered
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "A majestic and complex psalm of God&rsquo;s triumphant procession &mdash; the divine warrior-King who marches from Sinai to Zion, scatters his foes, yet stoops as Father of the fatherless, ascends on high leading captives in his train (quoted of the risen Christ in Ephesians 4), and daily bears up his people until all the kingdoms of the earth sing his praise." }} />
        </header>

        <div style={{ background: CARD, border: `1px solid ${ROSE}55`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <div style={{ color: ROSE, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 68:5&ndash;6</div>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.&rdquo;" }} />
        </div>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ROSE : BORDER}`,
                background: tab === t ? ROSE : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {overviewBlocks.map((b, i) => (
              <div key={i}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
          </section>
        )}

        {tab === "themes" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Six great threads run through this towering psalm, holding together overwhelming might and intimate tenderness. Click each theme to open it." }} />
            {themeItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.5rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.15rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  <span style={{ color: item.color, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.4rem" }}>
                    <div style={{ height: 2, background: item.color, opacity: 0.4, marginBottom: "1rem" }} />
                    <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "verse" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Move through Psalm 68 section by section, following the procession from Sinai to Zion to the nations. Each panel opens to a quotation and a short reflection." }} />
            {verseItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.5rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.ref }} />
                  <span style={{ color: item.color, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.4rem" }}>
                    <p style={{ color: item.color, fontSize: "1.05rem", lineHeight: 1.7, margin: "0 0 1rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;" + item.quote + "&rdquo;" }} />
                    <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {applicationBlocks.map((b, i) => (
                <div key={i} style={{ borderLeft: `3px solid ${b.color}`, paddingLeft: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem", color: b.color }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: TEAL }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Go deeper into the triumphant procession of Psalm 68 through teaching on the battle cry of the ark, the tender God who fathers the fatherless, the ascended Christ of Ephesians 4, and the God who daily bears us up." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "Mighty God, you arise and your enemies are scattered; the powers of darkness flee before you, and the righteous are jubilant with joy. We thank you that this same overwhelming power stoops in tenderness, for you are Father of the fatherless and protector of widows, and you settle the lonely in a home. We bless you, Lord Jesus, who ascended on high, leading captivity captive, and who gave gifts to your church. Bear us up this day and every day, for to you belong deliverances even from death. Gather the nations into your procession, and give power and strength to your people, until all the kingdoms of the earth sing your praise. Blessed be God! Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
