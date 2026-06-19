"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm104Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 104: The Great Creation Hymn" },
    { videoId: "Q2oNOlXzBhY", title: "Creation Care and the Goodness of the World" },
    { videoId: "8phkAg8PMHE", title: "The Spirit and the Renewal of Creation" },
    { videoId: "fNk_zzaMoSs", title: "Wisdom, Christ, and the Making of All Things" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "majesty",
      color: GOLD,
      title: "The Majesty of the Creator",
      body: "Psalm 104 opens not with the creation but with the Creator. &ldquo;Bless the LORD, O my soul! O LORD my God, you are very great! You are clothed with splendor and majesty, covering yourself with light as with a garment&rdquo; (vv. 1&ndash;2). God does not merely make light on the first day; he wears it. The imagery is royal and theophanic: the heavens are stretched out like a tent, the clouds become his chariot, the wind his messenger, and flames of fire his ministers (vv. 2&ndash;4). The psalmist sees the whole cosmos as the robing room and throne hall of an infinitely glorious King. Cross-references: Genesis 1:3 (&ldquo;Let there be light&rdquo;); 1 Timothy 6:16 (God &ldquo;dwells in unapproachable light&rdquo;); Hebrews 1:7, which quotes verse 4 (&ldquo;He makes his angels winds, and his ministers a flame of fire&rdquo;) and applies it to the supremacy of the Son over the angels.",
    },
    {
      id: "ordering",
      color: TEAL,
      title: "The Ordering of Creation (Following Genesis 1)",
      body: "The psalm moves in roughly the same sequence as the six days of Genesis 1: light (vv. 1&ndash;2; Day 1), the heavens and the separation of the waters (vv. 2&ndash;9; Day 2), the dry land and seas with their springs and vegetation (vv. 10&ndash;18; Day 3), the sun and moon to mark seasons and times (vv. 19&ndash;23; Day 4), and the teeming creatures of land and sea (vv. 24&ndash;26; Days 5&ndash;6). But where Genesis 1 narrates the original act, Psalm 104 celebrates God&rsquo;s ongoing, sustaining work. He &ldquo;set the earth on its foundations&rdquo; and &ldquo;set a boundary that the waters may not pass&rdquo; (vv. 5, 9), holding chaos in check moment by moment. Cross-references: Genesis 1; Job 38:8&ndash;11 (God shutting in the sea with doors); Jeremiah 5:22 (the sand as a boundary for the sea); Colossians 1:17 (&ldquo;in him all things hold together&rdquo;).",
    },
    {
      id: "providence",
      color: GREEN,
      title: "God&rsquo;s Provident Care for Every Creature",
      body: "The heart of the psalm is God&rsquo;s tender, particular provision. Springs gush forth in the valleys to give drink to every beast of the field, &ldquo;the wild donkeys quench their thirst&rdquo; (vv. 10&ndash;11). The birds of the heavens nest by the streams and sing among the branches (v. 12). God waters the mountains and causes grass to grow for the livestock and plants for man to cultivate, bringing forth food, wine that gladdens the heart, oil that makes the face shine, and bread that strengthens it (vv. 13&ndash;15). The high mountains are for the wild goats and the rocks a refuge for the badgers (v. 18). Nothing is too small for the Creator&rsquo;s attention. Cross-references: Matthew 6:26&ndash;30 (the Father feeds the birds and clothes the lilies); Matthew 10:29 (not a sparrow falls apart from the Father); Psalm 145:15&ndash;16.",
    },
    {
      id: "due-season",
      color: PURPLE,
      title: "&ldquo;You Open Your Hand&rdquo;: Dependence in Due Season",
      body: "&ldquo;These all look to you, to give them their food in due season. When you give it to them, they gather it up; when you open your hand, they are filled with good things&rdquo; (vv. 27&ndash;28). Every living thing is poised in a posture of dependence, looking up and waiting for an open hand. The same hand that flung the stars also feeds the krill and the lion cub. This is the psalm&rsquo;s vision of providence: not a distant clockmaker but a present, generous Provider whose open hand is the daily source of all life. Cross-references: Psalm 145:16 (&ldquo;You open your hand; you satisfy the desire of every living thing&rdquo;); Acts 14:17 (God &ldquo;did good by giving you rains&hellip; and food&rdquo;); Acts 17:25 (&ldquo;he himself gives to all mankind life and breath and everything&rdquo;).",
    },
    {
      id: "breath-spirit",
      color: ROSE,
      title: "Breath, Spirit, and the Renewal of the Ground",
      body: "Verses 29&ndash;30 reach the theological summit: &ldquo;When you hide your face, they are dismayed; when you take away their breath, they die and return to their dust. When you send forth your Spirit, they are created, and you renew the face of the ground.&rdquo; The Hebrew word ruach means both &ldquo;breath&rdquo; and &ldquo;Spirit.&rdquo; All life hangs on the breath of God; withdraw it and creatures return to dust, send it forth and the world is made new. This connects creation to the Spirit of God who hovered over the waters in Genesis 1:2, and anticipates the Spirit who gives new life. Cross-references: Genesis 1:2; Genesis 2:7 (God breathing the breath of life); Job 34:14&ndash;15; Ezekiel 37:9&ndash;10 (the breath that raises the dry bones); John 20:22 (Jesus breathing the Spirit on his disciples).",
    },
    {
      id: "song",
      color: GOLD,
      title: "The Psalmist&rsquo;s Resolve to Sing",
      body: "The psalm ends as it began, with the soul turned toward God in praise: &ldquo;May the glory of the LORD endure forever; may the LORD rejoice in his works&hellip; I will sing to the LORD as long as I live; I will sing praise to my God while I have being&rdquo; (vv. 31, 33). The right response to a world so full of God&rsquo;s wisdom and care is not detached analysis but doxology &mdash; a life-long song. The final line, &ldquo;Bless the LORD, O my soul!&rdquo; forms a frame with verse 1, sealing the whole meditation as an act of worship. Cross-references: Psalm 103:1 (the same opening call); Revelation 4:11 (&ldquo;Worthy are you&hellip; for you created all things&rdquo;); Romans 11:36.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      ref: "Psalm 104:1&ndash;4",
      color: GOLD,
      summary: "Bless the LORD; clothed with splendor and light",
      body: "&ldquo;Bless the LORD, O my soul! O LORD my God, you are very great! You are clothed with splendor and majesty, covering yourself with light as with a garment, stretching out the heavens like a tent.&rdquo; The psalmist begins with the Creator&rsquo;s own glory before turning to the works of his hands. God lays the beams of his chambers on the waters, makes the clouds his chariot, and rides on the wings of the wind. He makes the winds his messengers and flames of fire his ministers. The opening establishes the tone of the whole psalm: this is a theophany, a vision of the cosmos as the dwelling and royal procession of a glorious King. Verse 4 is quoted in Hebrews 1:7 to magnify the Son above the angels.",
    },
    {
      id: "v5",
      ref: "Psalm 104:5&ndash;9",
      color: TEAL,
      summary: "Earth set on its foundations; the boundary of the waters",
      body: "&ldquo;He set the earth on its foundations, so that it should never be moved.&rdquo; The deep covered the earth like a garment; the waters stood above the mountains. But at God&rsquo;s rebuke they fled, at the sound of his thunder they took to flight, rising up the mountains and sinking down into the valleys to the place appointed for them. &ldquo;You set a boundary that they may not pass, so that they might not again cover the earth&rdquo; (v. 9). This section echoes the second and third days of Genesis 1 and the gathering of the waters. It also reassures the reader: the same God who once flooded the earth has set fixed limits to the chaos. The created order is stable because it is governed, not because it governs itself (cf. Job 38:8&ndash;11; Genesis 9:11).",
    },
    {
      id: "v10",
      ref: "Psalm 104:10&ndash;18",
      color: GREEN,
      summary: "Springs, grass, trees, birds, and wild goats",
      body: "&ldquo;You make springs gush forth in the valleys; they flow between the hills, giving drink to every beast of the field; the wild donkeys quench their thirst.&rdquo; Beside the streams the birds dwell and sing. God waters the mountains from his chambers and satisfies the earth with the fruit of his work. He causes grass to grow for the livestock and plants for man to cultivate, bringing forth food from the earth, wine to gladden the human heart, oil to make the face shine, and bread to strengthen it (vv. 14&ndash;15). The trees of the LORD are watered abundantly, the cedars of Lebanon that he planted; there the birds build their nests, and the stork makes her home in the fir trees. The high mountains are for the wild goats, the rocks a refuge for the badgers. Every habitat is matched to its creature by a wise and caring hand.",
    },
    {
      id: "v19",
      ref: "Psalm 104:19&ndash;23",
      color: PURPLE,
      summary: "Moon and sun mark the seasons and the rhythms of life",
      body: "&ldquo;He made the moon to mark the seasons; the sun knows its time for setting.&rdquo; God appoints darkness, and it becomes night, when all the beasts of the forest creep about. The young lions roar for their prey, seeking their food from God (v. 21). When the sun rises, they steal away and lie down in their dens, &ldquo;Man goes out to his work and to his labor until the evening&rdquo; (v. 23). This passage answers Day 4 of Genesis 1, where the lights are made to mark seasons, days, and years. But the psalmist sees more than astronomy: the daily turning of light and dark choreographs an ordered dance of work and rest, predator and laborer, each in its appointed time. Even the roar of the lion is reframed as a creature looking to God for food.",
    },
    {
      id: "v24",
      ref: "Psalm 104:24&ndash;30",
      color: ROSE,
      summary: "Manifold works; the sea; the open hand; the Spirit renews",
      body: "&ldquo;O LORD, how manifold are your works! In wisdom have you made them all; the earth is full of your creatures&rdquo; (v. 24, the key verse). The psalmist looks to the sea, great and wide, teeming with creatures innumerable, living things both small and great, and even Leviathan, formed to play in it. &ldquo;These all look to you, to give them their food in due season&hellip; when you open your hand, they are filled with good things&rdquo; (vv. 27&ndash;28). Then the turning point: &ldquo;When you hide your face, they are dismayed; when you take away their breath, they die&hellip; When you send forth your Spirit, they are created, and you renew the face of the ground&rdquo; (vv. 29&ndash;30). Creation is not a finished event but a continuing gift, sustained breath by breath, renewed by the Spirit of God.",
    },
    {
      id: "v31",
      ref: "Psalm 104:31&ndash;35",
      color: GOLD,
      summary: "Glory forever; I will sing as long as I live",
      body: "&ldquo;May the glory of the LORD endure forever; may the LORD rejoice in his works.&rdquo; The God who looks on the earth and it trembles, who touches the mountains and they smoke, is also the God who delights in what he has made. The psalmist responds in kind: &ldquo;I will sing to the LORD as long as I live; I will sing praise to my God while I have being. May my meditation be pleasing to him, for I rejoice in the LORD&rdquo; (vv. 33&ndash;34). The single sober note &mdash; &ldquo;Let sinners be consumed from the earth, and let the wicked be no more&rdquo; (v. 35) &mdash; longs for the day when creation will be free of all that mars it. The psalm closes by returning to its opening words, &ldquo;Bless the LORD, O my soul! Praise the LORD!&rdquo;",
    },
  ];

  const applicationItems = [
    {
      color: GREEN,
      title: "A Foundation for Creation Care",
      body: "Psalm 104 is one of the great texts for a biblical theology of creation care. Because the earth is full of God&rsquo;s creatures and he calls them good, the way we treat the created world is not a matter of indifference. &ldquo;Everything created by God is good, and nothing is to be rejected if it is received with thanksgiving&rdquo; (1 Timothy 4:4). To delight in springs and cedars and wild goats, and to steward them well, is to honor the One who made them in wisdom. Care for creation flows not from worshiping nature but from worshiping nature&rsquo;s God.",
    },
    {
      color: PURPLE,
      title: "Living in Daily Dependence",
      body: "&ldquo;These all look to you&hellip; when you open your hand, they are filled with good things.&rdquo; The psalm trains us to receive each day&rsquo;s provision as gift, not entitlement. The food on the table, the breath in your lungs, the rhythm of work and rest &mdash; all come from the open hand of God. This reframes anxiety (Matthew 6:25&ndash;34) and turns ordinary meals into occasions for thanksgiving. To pray &ldquo;give us this day our daily bread&rdquo; is to take our place among the creatures who look up and wait.",
    },
    {
      color: ROSE,
      title: "Creation, the Spirit, and New Life",
      body: "Verse 30 ties the making and renewing of the world to the Spirit of God who hovered over the waters in Genesis 1:2. The same Spirit who renews the face of the ground is the Spirit who raises the dead and makes believers new (Ezekiel 37; John 3:5&ndash;8; Romans 8:11). When we marvel at spring after winter, we glimpse a deeper renewal: the new creation that the Spirit is bringing about in Christ and will one day complete (Romans 8:19&ndash;23).",
    },
    {
      color: GOLD,
      title: "Wisdom, Christ, and the Worship of the Creator",
      body: "&ldquo;In wisdom have you made them all&rdquo; (v. 24) connects to the personified Wisdom of Proverbs 8 and ultimately to Christ, the Word &ldquo;by whom all things were made&rdquo; (John 1:3) and in whom &ldquo;all things were created&rdquo; (Colossians 1:16). To read Psalm 104 with Christian eyes is to see the Son standing behind every spring and star. The fitting response is the psalmist&rsquo;s own: a lifelong song. Let the study of this psalm end where it began, in worship of the wise and generous Creator.",
    },
  ];

  const reflectionQuestions = [
    "Where in your daily life do you most easily forget that you live from the open hand of God? What would it look like to receive that part of your life as gift?",
    "Psalm 104 moves from observing creation to praising the Creator. When you encounter beauty in the natural world, what is your typical response &mdash; and how might this psalm reshape it?",
    "Verse 24 says God made all things &ldquo;in wisdom.&rdquo; How does seeing the order and care in creation strengthen your trust in God&rsquo;s wisdom over the parts of your life that feel chaotic?",
    "How does the truth that all life depends on God&rsquo;s breath (vv. 29&ndash;30) shape the way you think about your own mortality and your hope of renewal?",
    "What is one concrete way you could practice creation care this month as an act of worship rather than mere obligation?",
    "The psalm ends with a resolve to &ldquo;sing to the LORD as long as I live.&rdquo; What would it mean for praise to become the settled posture of your life, not just your good days?",
  ];

  const card: React.CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem", marginBottom: "1.25rem" };
  const html = (s: string) => ({ __html: s });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Psalms &middot; Book Four</span>
          <h1 style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", fontWeight: 900, lineHeight: 1.12, margin: "0.6rem 0 1rem" }}>
            Psalm 104: The Great Creation Hymn
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 700 }} dangerouslySetInnerHTML={html(
            "A poetic meditation on Genesis 1, Psalm 104 walks through the days of creation and celebrates the God who not only made the world but sustains every creature in it &mdash; opening his hand to feed them and sending forth his Spirit to renew the face of the ground."
          )} />
          <div style={{ marginTop: "1.5rem", background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderLeft: `4px solid ${GREEN}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: 1.5, color: GREEN, textTransform: "uppercase", marginBottom: "0.5rem" }}>Key Verse &middot; Psalm 104:24</div>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={html(
              "&ldquo;O LORD, how manifold are your works! In wisdom have you made them all; the earth is full of your creatures.&rdquo;"
            )} />
          </div>
        </header>

        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.85rem",
                background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? GREEN : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GREEN }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "Psalm 104 is a sustained hymn of praise to God as Creator and Sustainer. It is best read as a poetic companion to Genesis 1: the psalmist takes the bare framework of the six days &mdash; light, the heavens and waters, the dry land with its springs and vegetation, the sun and moon for seasons, and the swarming creatures of land and sea &mdash; and fills it with color, motion, and wonder. Yet the psalm&rsquo;s emphasis is not on the original act of creation but on God&rsquo;s ongoing, providential care. He still sets boundaries for the seas, still sends springs into the valleys, still feeds the lions and the wild donkeys, still opens his hand to satisfy every living thing. The whole earth is a stage for the wise generosity of God, and the only fitting response is a lifelong song of praise."
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>Structure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "The psalm unfolds in a sweep that loosely tracks the order of Genesis 1. Verses 1&ndash;4 exalt the Creator clothed in light and riding on the wind. Verses 5&ndash;9 describe the founding of the earth and the bounding of the seas. Verses 10&ndash;18 celebrate springs, vegetation, trees, birds, and the creatures matched to their habitats. Verses 19&ndash;23 turn to the moon and sun that govern seasons and the rhythms of day and night, work and rest. Verses 24&ndash;30 reach the climax: the manifold works made in wisdom, the teeming sea, the open hand that feeds all, and the Spirit who renews the ground. Verses 31&ndash;35 close with a doxology and the psalmist&rsquo;s resolve to sing as long as he lives. The psalm is framed by the same words at beginning and end: &ldquo;Bless the LORD, O my soul!&rdquo;"
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "Psalm 104 closely follows the order of the Genesis 1 creation account, but it celebrates God&rsquo;s ongoing providential care, not just the initial act of creation. Verse 30 (&ldquo;when you send forth your Spirit, they are created&rdquo;) connects creation to the Spirit of God hovering over the waters in Genesis 1:2. Some scholars note a parallel in the Egyptian &lsquo;Great Hymn to the Aten,&rsquo; yet Psalm 104 uniquely centers on the one true Creator God of Israel rather than the sun-disk. This is a foundational text for a biblical theology of creation care and the goodness of the created world (cf. 1 Timothy 4:4). The phrase &ldquo;in wisdom have you made them all&rdquo; (v. 24) connects to the personified Wisdom of Proverbs 8 and ultimately to Christ, &ldquo;by whom all things were made&rdquo; (John 1:3; Colossians 1:16)."
              )} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={html(
              "Six themes carry the weight of the psalm, each anchored in the text and traced through the wider canon of Scripture. Tap each to expand."
            )} />
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ marginBottom: 10 }}>
                  <button type="button" onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "1rem 1.25rem", background: isOpen ? `${item.color}14` : CARD,
                      border: `1px solid ${isOpen ? item.color + "55" : BORDER}`, borderRadius: 12, cursor: "pointer",
                      color: TEXT, fontWeight: 700, fontSize: "1rem", transition: "all .2s" }}>
                    <span dangerouslySetInnerHTML={html(item.title)} />
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "1.1rem 1.4rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={html(
              "Work through the psalm section by section. Each panel pairs the text with a brief commentary that follows the movement from the Creator&rsquo;s glory to the psalmist&rsquo;s closing song."
            )} />
            {verseItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ marginBottom: 10 }}>
                  <button type="button" onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "1rem 1.25rem", background: isOpen ? `${item.color}14` : CARD,
                      border: `1px solid ${isOpen ? item.color + "55" : BORDER}`, borderRadius: 12, cursor: "pointer",
                      color: TEXT, fontWeight: 700, fontSize: "0.98rem", transition: "all .2s", gap: "1rem" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                      <span style={{ color: item.color }} dangerouslySetInnerHTML={html(item.ref)} />
                      <span style={{ fontWeight: 500, fontSize: "0.85rem", color: MUTED }} dangerouslySetInnerHTML={html(item.summary)} />
                    </span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "1.1rem 1.4rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            {applicationItems.map((item, i) => (
              <div key={i} style={{ ...card, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: item.color, marginBottom: "0.6rem" }} dangerouslySetInnerHTML={html(item.title)} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
              </div>
            ))}

            <div style={{ ...card }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: GOLD, marginBottom: "1rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} dangerouslySetInnerHTML={html(q)} />
                ))}
              </ol>
            </div>

            <div style={{ ...card }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: TEAL, marginBottom: "1rem" }}>Watch &amp; Reflect</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                    </div>
                    <p style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", textAlign: "center" }} dangerouslySetInnerHTML={html(v.title)} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, background: `${GREEN}10`, border: `1px solid ${GREEN}40` }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: GREEN, marginBottom: "0.75rem" }}>A Closing Prayer</h3>
              <p style={{ color: TEXT, lineHeight: 1.9, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={html(
                "O LORD my God, you are very great; you are clothed with splendor and majesty. How manifold are your works! In wisdom you have made them all, and the earth is full of your creatures. Open my eyes to see your hand in every spring and star, in every bird and field. Teach me to live from your open hand and to receive each day&rsquo;s breath as your gift. Send forth your Spirit, and renew the face of the ground &mdash; and renew me. As long as I live, I will sing to you; while I have being, I will sing praise to my God. Bless the LORD, O my soul! Amen."
              )} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
