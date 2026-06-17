"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";

export default function Micah5Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "sT9VvBAkTzo", title: "Micah 5: The Ruler from Bethlehem (Verse by Verse)" },
    { id: "mYQ5kI7mJlM", title: "Micah 5:2 Explained -- Bethlehem and the Messiah" },
    { id: "wOqiZsJkC0A", title: "The Shepherd King of Micah 5 -- Bible Study" },
    { id: "hgTTbVPClh8", title: "Micah 5 and the Coming of Christ -- Commentary" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: TEXT,
  };

  const h3Style: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: TEXT,
  };

  const pStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.75,
    marginBottom: "1rem",
    fontSize: "1rem",
  };

  const quoteStyle: React.CSSProperties = {
    borderLeft: `4px solid ${GREEN}`,
    paddingLeft: "1rem",
    color: TEXT,
    fontStyle: "italic",
    margin: "1rem 0",
    lineHeight: 1.7,
  };

  const tagStyle = (color: string): React.CSSProperties => ({
    display: "inline-block",
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 999,
    padding: "0.2rem 0.75rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginRight: "0.4rem",
    marginBottom: "0.4rem",
  });

  const verseItems = [
    {
      id: "v1",
      ref: "Micah 5:1",
      title: "Strike the Ruler on the Cheek",
      text: "Now muster your troops, O daughter of troops; siege is laid against us; with a rod they strike the judge of Israel on the cheek.",
      body: "The chapter opens in crisis. Jerusalem is under siege. The king of Israel &mdash; the judge, the highest authority &mdash; is struck on the cheek in humiliation. This is a profound reversal. The one who was meant to defend and rule is himself shamed and helpless before the enemy. The image evokes a courtroom or royal hall where the judge is publicly disgraced. The very institution Israel trusted has collapsed. Micah does not soften the moment. He lets the shame stand &mdash; because into this void, a very different ruler will come. The contrast between verse 1 and verse 2 is one of the most dramatic reversals in all the prophets.",
    },
    {
      id: "v2",
      ref: "Micah 5:2",
      title: "But You, Bethlehem Ephrathah",
      text: "But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.",
      body: "This is perhaps the most well-known verse in Micah &mdash; quoted by the chief priests and scribes in Matthew 2:6 when Herod asks where the Messiah is to be born. But the shock of it cannot be overstated. After describing a humiliated king in verse 1, God points not to Jerusalem, not to a powerful clan, not to a warrior prince &mdash; but to Bethlehem. Bethlehem Ephrathah was the smallest, the least, the village you overlooked on the map. It was David&rsquo;s hometown, yes &mdash; but David himself had been the overlooked youngest son. The pattern of divine reversal runs deep: God consistently chooses the small, the despised, the unexpected to accomplish his purposes. And then the text says something startling: &ldquo;whose coming forth is from of old, from ancient days.&rdquo; The Ruler who comes from this tiny village has an origin that stretches back into eternity. The Hebrew phrase &lsquo;miqedem, mimei olam&rsquo; points to a pre-existence that cannot be contained within human genealogy. This is not merely a great man &mdash; this is the Ancient One entering the stream of history through the humblest possible door.",
    },
    {
      id: "v3",
      ref: "Micah 5:3",
      title: "The Time of Abandonment and the Birth",
      text: "Therefore he shall give them up until the time when she who is in labor has given birth; then the rest of his brothers shall return to the people of Israel.",
      body: "Verse 3 introduces a period of waiting &mdash; of abandonment. Between the humiliation of verse 1 and the triumph of verse 4, there is a gap. God gives Israel up &ldquo;until the time.&rdquo; This language of abandonment appears elsewhere in the prophets (cf. Hosea 1:9; Isaiah 54:7) and always carries the shadow of covenant discipline: not final rejection, but painful waiting. The image of &ldquo;she who is in labor&rdquo; draws from Isaiah&rsquo;s birth imagery (Isa 7:14; 9:6) and echoes the Genesis 3:15 promise of a seed coming through travail. Labor is not comfortable. It is painful, exhausting, and uncertain &mdash; but it has an end. The child comes. The &ldquo;rest of his brothers&rdquo; returning to the people of Israel points to the reunion of the scattered remnant under the coming ruler &mdash; a theme Micah has been developing since chapter 4.",
    },
    {
      id: "v4",
      ref: "Micah 5:4",
      title: "He Shall Stand and Shepherd",
      text: "And he shall stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God. And they shall dwell secure, for now he shall be great to the ends of the earth.",
      body: "If verse 2 is the great messianic prediction, verse 4 is the great messianic portrait. The ruler does not swagger or command from a throne &mdash; he stands and shepherds. The pastoral image is deliberate: this is the work of one who tends, who protects, who leads with patient care. But the resources are entirely divine: &ldquo;in the strength of the LORD, in the majesty of the name of the LORD his God.&rdquo; He does not shepherd in his own strength. He operates in the power and authority of the LORD himself. The result is security: &ldquo;they shall dwell secure.&rdquo; This security is not the product of better fortifications or stronger armies &mdash; it flows from the shepherd&rsquo;s presence and divine power. And his greatness extends &ldquo;to the ends of the earth&rdquo; &mdash; this is not a local king but a universal ruler. Micah is painting the portrait that the New Testament will fill in with Jesus Christ, the good shepherd who lays down his life and shepherds in the power of the resurrection.",
    },
    {
      id: "v5",
      ref: "Micah 5:5-6",
      title: "The Assyrian and the Seven Shepherds",
      text: "And he shall be their peace. When the Assyrian comes into our land and treads in our palaces, then we will raise against him seven shepherds and eight princes of men.",
      body: "The phrase &ldquo;he shall be their peace&rdquo; &mdash; &lsquo;wehayah zeh shalom&rsquo; &mdash; is compact and powerful. The ruler himself IS the peace. Not merely the bringer of peace, not the negotiator of peace treaties, but the embodiment of shalom. In the face of Assyrian threat &mdash; the great superpower of the day that had already crushed the northern kingdom &mdash; the answer is not military strategy but this person. The &ldquo;seven shepherds and eight princes of men&rdquo; who arise to meet the Assyrian may sound like a military coalition, but the number seven in the ancient world signified completeness and sufficiency. God will not be caught short of defenders. The remnant under the messianic ruler will have ample shepherds to lead them. The land of Nimrod (Assyria/Babylon) is a synecdoche for all the world powers that threaten God&rsquo;s people. The promise: the Messiah&rsquo;s people will not be left exposed.",
    },
    {
      id: "v6",
      ref: "Micah 5:7-9",
      title: "The Remnant Like Dew and Like a Lion",
      text: "Then the remnant of Jacob shall be in the midst of many peoples like dew from the LORD, like showers on the grass, which delay not for a man nor wait for the children of man.",
      body: "Micah gives the remnant two striking images: dew from the LORD and a lion among beasts. The dew image in 5:7 is one of the most beautiful in the prophets. Dew does not wait for permission. It does not ask whether the grass wants it. It comes from the LORD as a sovereign, irresistible gift &mdash; life-giving and refreshing in a dry land. The remnant of Israel will be like this among the nations: a blessing that comes not by human initiative but by divine sending. Then in verses 8-9, the image shifts dramatically: the same remnant is like a lion tearing through a flock. No one can stop it. Both images together suggest that the remnant will be both a blessing and an unstoppable force &mdash; a community that brings life to the nations while prevailing over every adversary. This tension between blessing and overcoming is part of the messianic mission. The people of the shepherd-king carry his character into the world.",
    },
    {
      id: "v7",
      ref: "Micah 5:10-15",
      title: "The Purging of False Securities",
      text: "And in that day, declares the LORD, I will cut off your horses from among you and will destroy your chariots; and I will cut off the cities of your land and throw down all your strongholds.",
      body: "The final section of Micah 5 might seem like judgment, but it is more precisely purification. God lists what he will remove: horses and chariots (military power), cities and strongholds (civic security), sorceries and tellers of fortunes (spiritual counterfeits), carved images and pillars (religious idols). Each item on this list represents something Israel was trusting instead of the LORD. Horses and chariots were the ancient equivalent of nuclear arsenals &mdash; the ultimate military technology. Strongholds were the fortified cities that made people feel safe. Sorceries and idols were the spiritual technologies people used to try to control their futures. God says: in the day of the messianic ruler, all of these will be stripped away. Not because they are all intrinsically evil, but because they have become replacements for trust in him. The purging is an act of love &mdash; clearing away every competing loyalty so that the people can rest fully in the shepherd-king and his peace.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: PURPLE,
      title: "The Messianic Ruler from Bethlehem",
      body: "Micah 5:2 stands as one of the clearest pre-Christian messianic prophecies in the Hebrew Bible. The specificity is remarkable: not just &ldquo;a descendant of David&rdquo; but a ruler who will come from Bethlehem &mdash; the very village David was anointed in. When the Magi arrived in Jerusalem asking about the king of the Jews, the chief priests and scribes turned immediately to Micah 5:2 (Matt 2:4-6). The prophecy had been treasured for seven centuries. But the chapter adds something to the biography of this ruler that transcends normal human categories: &ldquo;whose coming forth is from of old, from ancient days.&rdquo; Whatever the precise interpretation, the text points to a figure whose origin exceeds the normal bounds of human birth. He comes from Bethlehem &mdash; and he comes from eternity.",
    },
    {
      id: "t2",
      color: GREEN,
      title: "Smallness as Divine Instrument",
      body: "The logic of Micah 5 runs counter to every human intuition about power. The world chooses the great, the strong, the well-resourced. God consistently chooses the small. Bethlehem Ephrathah &mdash; &ldquo;too little to be among the clans of Judah&rdquo; &mdash; is precisely the right location for the divine ruler to emerge. This is the hermeneutic of 1 Corinthians 1:27-29: God chooses the foolish to shame the wise, the weak to shame the strong, &ldquo;so that no human being might boast in the presence of God.&rdquo; The smallness is the point. If God had chosen Jerusalem, or the greatest clan, or the most celebrated dynasty, human pride would have claimed credit. Bethlehem ensures that the source of the ruler&rsquo;s significance is entirely God, not location or lineage. The pattern runs through all of Scripture: Jacob over Esau, Joseph in the pit, Moses the stutterer, Gideon the weakest in the weakest clan, David the youngest son, and finally &mdash; Jesus born in a manger in Bethlehem because there was no room in the inn.",
    },
    {
      id: "t3",
      color: TEAL,
      title: "Shepherd-King Imagery",
      body: "The image of the ruler who shepherds in verse 4 draws on one of the deepest veins of biblical theology. Kings in the ancient Near East were regularly called shepherds &mdash; but in Israel the image was charged with particular meaning because David, the paradigmatic king, was literally a shepherd before he was anointed. The shepherd image in Micah 5 anticipates Ezekiel 34, where God condemns the false shepherds of Israel who have scattered and exploited the flock, and then promises: &ldquo;I myself will be the shepherd of my sheep&rdquo; (Ezek 34:15). And it anticipates John 10, where Jesus says &ldquo;I am the good shepherd&rdquo; and &ldquo;I lay down my life for the sheep.&rdquo; The shepherd does not exploit the flock for wool and meat; he gives himself for the flock. The shepherd-king of Micah 5 rules by serving, by standing watch, by laying down his own resources for the security of his people.",
    },
    {
      id: "t4",
      color: GOLD,
      title: "The Remnant Among the Nations",
      body: "Micah 5:7-9 develops the theme of the remnant that has been central to prophetic theology since Isaiah. After the judgments of history have done their work, a faithful remnant remains &mdash; small in number, purified in character, carrying the mission of God into the world. The two images Micah uses for this remnant are dew and lion. Dew is gentle, life-giving, sovereign &mdash; not produced by human effort but dropped from heaven. A lion is powerful, purposeful, unstoppable. The remnant is not defined by its size but by its source and its calling. It comes from the LORD (dew), and it cannot be overcome by its enemies (lion). This remnant theology culminates in the New Testament in the image of the Church as a small mustard seed that becomes a great tree, or leaven that spreads through the whole lump. The remnant does not win by being large; it wins by being from God.",
    },
    {
      id: "t5",
      color: PURPLE,
      title: "The Purging of False Trust",
      body: "The inventory in Micah 5:10-15 reads like a diagnostic of the human heart. Horses and chariots &mdash; military might. Cities and strongholds &mdash; civic security. Sorceries and fortune-tellers &mdash; spiritual manipulation. Carved images and pillars &mdash; religious substitutes. Each of these represents a way that human beings try to secure their future apart from dependence on God. The prophet does not say these things are eliminated from history. He says God will cut them off from his people. In the day of the messianic ruler, the community of the remnant will not need these props because they will have the shepherd-king himself. The purging is a grace &mdash; it removes everything that would divert trust from the one who truly gives security. Theologically, this is the logic of the cross: God strips away everything we have trusted so that we come to trust Christ alone.",
    },
    {
      id: "t6",
      color: TEAL,
      title: "Pre-Existence and Eternal Origin",
      body: "The phrase in Micah 5:2 &mdash; &ldquo;whose coming forth is from of old, from ancient days&rdquo; &mdash; has generated centuries of theological reflection. The Hebrew words &lsquo;miqedem&rsquo; and &lsquo;mimei olam&rsquo; can refer to ancient historical times (as in Amos 9:11, where &lsquo;as in the days of old&rsquo; refers to the Davidic era). But in combination with the fact that this ruler&rsquo;s &ldquo;goings out&rdquo; or &ldquo;origins&rdquo; are being traced, many interpreters across Jewish and Christian traditions have seen here a pointer to something more than historical antiquity. The early church fathers consistently read this as a reference to the pre-existence of the Son of God. Whatever the full range of meaning in the Hebrew, the text at minimum asserts that this ruler cannot be explained by the normal categories of human origin. He comes from Bethlehem &mdash; and he comes from somewhere else entirely.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${GREEN}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <span style={tagStyle(GOLD)}>Minor Prophets</span>
          <span style={tagStyle(PURPLE)}>Messianic Prophecy</span>
          <span style={tagStyle(GREEN)}>Old Testament</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Micah 5 &mdash; But You, Bethlehem Ephrathah</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem" }}>
          The paradox of the Messiah &mdash; he comes from the smallest of clans yet his origin is from of old, from ancient days.
          After siege and shame, a shepherd-king will arise to stand and feed his flock in the strength of the LORD.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GREEN }}>~760 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Prophetic Date</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: PURPLE }}>15 Verses</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Chapter Length</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD }}>Matt 2:6</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>NT Fulfillment</div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400 }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>From Crisis to Messianic Dawn</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5 arrives in the wake of devastation. Chapter 4 has described the siege of Jerusalem, the humiliation of Israel, and the long road into exile. The people have watched their institutions crumble and their king stripped of dignity. Into this darkness, chapter 5 speaks &mdash; not with cheap comfort, but with a promise that rewrites what power looks like and where it comes from." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The chapter opens in verse 1 with the image of a king struck on the cheek &mdash; the ancient symbol of deepest dishonor. The one who should have been administering justice has himself been publicly shamed. But verse 2 pivots with one of the most startling contrasts in prophetic literature: &ldquo;But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah &mdash; from you shall come forth for me one who is to be ruler in Israel.&rdquo; The answer to the humiliated king is not a greater king by worldly standards. It is a ruler from the least significant village, whose origin is from eternity." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The structure of the chapter moves outward from this center: the ruler&rsquo;s identity (5:2-3), his shepherding work (5:4), the Assyrian threat and the divine response (5:5-6), the remnant&rsquo;s role among the nations (5:7-9), and the purging of false securities from God&rsquo;s people (5:10-15). Each section builds on the one before, culminating in a vision of a community whose trust has been completely redirected from human props to the living God." }} />
              <div style={quoteStyle} dangerouslySetInnerHTML={{ __html: "&ldquo;And he shall stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God. And they shall dwell secure, for now he shall be great to the ends of the earth.&rdquo; &mdash; Micah 5:4" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah was a contemporary of Isaiah, prophesying during the reigns of Jotham, Ahaz, and Hezekiah (Micah 1:1) &mdash; roughly 740 to 700 BC. The Assyrian empire under Tiglath-Pileser III and then Sennacherib was the dominant world power, and the northern kingdom of Israel had already fallen (722 BC). Micah&rsquo;s prophecies address both the northern and southern kingdoms, and he sees Bethlehem not through the lens of Davidic nostalgia but as the unlikely source of a divine intervention that will outrun all of history." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Chapter at a Glance</h2>
              {[
                { ref: "5:1", color: PURPLE, title: "The King&rsquo;s Humiliation", body: "Jerusalem is besieged. The judge of Israel &mdash; the king &mdash; is struck on the cheek. Human authority has failed." },
                { ref: "5:2-3", color: GREEN, title: "The Ruler from Bethlehem", body: "The messianic ruler comes from the smallest clan, yet his origin is from of old. A period of abandonment precedes his coming." },
                { ref: "5:4", color: TEAL, title: "The Shepherd-King&rsquo;s Work", body: "He stands and shepherds in the strength of the LORD. The people dwell secure. His greatness reaches to the ends of the earth." },
                { ref: "5:5-6", color: GOLD, title: "The Assyrian Threat Answered", body: "The ruler is their peace. Seven shepherds and eight princes arise. The Assyrian is defeated and the land of Nimrod subdued." },
                { ref: "5:7-9", color: PURPLE, title: "The Remnant Among Nations", body: "The remnant is like dew from the LORD &mdash; sovereign, life-giving. Also like a lion &mdash; unstoppable among the nations." },
                { ref: "5:10-15", color: GREEN, title: "The Purging of False Trust", body: "God strips away horses, chariots, strongholds, sorceries, and idols &mdash; everything Israel trusted instead of him." },
              ].map(item => (
                <div key={item.ref} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ minWidth: 52, height: 52, borderRadius: 8, background: item.color + "22", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 700, fontSize: "0.8rem", textAlign: "center", flexShrink: 0 }}>{item.ref}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Historical and Canonical Context</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah prophesied in the eighth century BC, a period of enormous political upheaval. The Assyrian empire was expanding aggressively, and Israel (the northern kingdom) had already been conquered and its people deported (722 BC). Judah survived but under constant threat. King Hezekiah, who received Micah&rsquo;s ministry, was one of the better kings of Judah, but even he faced the catastrophic siege of Sennacherib described in Isaiah 36-37 and 2 Kings 18-19." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Within the canon, Micah 5 stands in conversation with Isaiah 9 (the child born to us, the government on his shoulders), Isaiah 11 (the shoot from the stump of Jesse), Zechariah 9:9 (the king riding on a donkey), and Ezekiel 34 (the divine shepherd). Together these texts build a portrait of a coming ruler who is both human and divine, both humble and universal, both servant and sovereign." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The New Testament explicitly quotes Micah 5:2 in Matthew 2:6 (the Magi&rsquo;s destination) and alludes to the shepherding imagery of 5:4 throughout the Gospels. John 7:42 shows that ordinary Jews in Jesus&rsquo;s day knew the Messiah was to come from Bethlehem and from the line of David &mdash; which means Micah 5 had shaped popular messianic expectation for centuries before the first Christmas." }} />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${PURPLE}11, ${CARD})` }}>
              <h2 style={h2Style}>Key Themes in Micah 5</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5 is a theologically dense chapter whose major themes shape the entire prophetic tradition and find their fulfillment in Jesus Christ. Each theme explored below is a thread that runs through the whole tapestry of Scripture." }} />
            </div>
            {themeItems.map(theme => (
              <div key={theme.id} style={{ ...cardStyle, borderLeft: `4px solid ${theme.color}` }}>
                <h3 style={{ ...h3Style, color: theme.color }}>{theme.title}</h3>
                <p style={pStyle} dangerouslySetInnerHTML={{ __html: theme.body }} />
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Thematic Connections Across Scripture</h2>
              {[
                { color: PURPLE, from: "Micah 5:2", to: "Matthew 2:6", note: "Bethlehem as the birthplace of the Messiah &mdash; quoted directly by the chief priests and scribes to Herod." },
                { color: GREEN, from: "Micah 5:4", to: "John 10:11", note: "The shepherd-king who shepherds in divine strength &mdash; fulfilled in Jesus as the good shepherd who lays down his life." },
                { color: TEAL, from: "Micah 5:4", to: "Ezekiel 34:15", note: "God himself will be the shepherd of his sheep &mdash; the promise Micah begins and Ezekiel amplifies." },
                { color: GOLD, from: "Micah 5:7", to: "1 Peter 2:12", note: "The remnant as dew among the nations &mdash; the pattern of living among the Gentiles as a blessing and witness." },
                { color: PURPLE, from: "Micah 5:2", to: "Revelation 1:8", note: "The eternal origin of the ruler &mdash; &lsquo;I am the Alpha and the Omega&rsquo; completes the portrait Micah begins." },
                { color: GREEN, from: "Micah 5:10-15", to: "Philippians 3:7-8", note: "The purging of false securities &mdash; Paul considers all worldly advantages loss for the surpassing worth of knowing Christ." },
              ].map((conn, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: 3, minHeight: 40, background: conn.color, borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(conn.color)}>{conn.from}</span>
                      <span style={{ color: MUTED, fontSize: "0.85rem", alignSelf: "center" }}>-&gt;</span>
                      <span style={tagStyle(conn.color)}>{conn.to}</span>
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: conn.note }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Verse by Verse Commentary</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Work through Micah 5 section by section. Click each passage to expand the commentary. The chapter moves from crisis (5:1) through messianic promise (5:2-4) to community application (5:5-15)." }} />
            </div>
            {verseItems.map(item => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "left", gap: "1rem" }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(GREEN)}>{item.ref}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: "1.05rem" }}>{item.title}</div>
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginTop: "0.35rem", fontStyle: "italic", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <div style={{ color: GREEN, fontSize: "1.4rem", fontWeight: 700, flexShrink: 0, marginTop: 4 }}>{open === item.id ? "-" : "+"}</div>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ ...pStyle, marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Reading Micah 5 as a Unified Whole</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5 is not a collection of disconnected oracles. It has a narrative logic. Verse 1 establishes the crisis: the current king has failed. Verses 2-3 announce the solution: a ruler from Bethlehem with eternal origins, after a period of waiting. Verse 4 describes his work: shepherding in divine strength. Verses 5-9 show the result for his people: peace in the face of threats, blessing among the nations. Verses 10-15 describe the interior renovation his coming requires: all false props must go." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The movement is from outside-in: God deals with the external enemies (Assyria), then the internal enemies (false trust). The same sequence appears in the New Testament: Jesus first announces that the kingdom of God has come near (dealing with the cosmic powers), and then calls his followers to internal transformation &mdash; &ldquo;Repent, for the kingdom of heaven is at hand.&rdquo; Micah 5 is a compressed version of the entire gospel story: humiliation, messianic intervention, communal security, and the ongoing purification of God&rsquo;s people." }} />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Living Micah 5 Today</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The ancient words of Micah 5 do not remain locked in the eighth century BC. They speak with vivid directness to how we live as followers of Jesus &mdash; the Bethlehem shepherd-king &mdash; in the twenty-first century. Four areas of application rise naturally from the text." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ ...h3Style, color: PURPLE }}>1. Trusting God&rsquo;s Choices of the Small and Unlikely</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5:2 teaches us that God&rsquo;s categories for choosing are opposite to ours. We gravitate toward the impressive, the well-credentialed, the already-successful. God chose Bethlehem. God chose David the youngest son. God chose Mary the unknown teenager. God chose a carpenter from Nazareth." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This has immediate practical implications. When you feel too small for what God is calling you to, Micah 5 invites you to reframe the feeling. Your smallness is not a disqualifier &mdash; it is often the very quality that makes God&rsquo;s power most visible. Paul writes in 2 Corinthians 12:9: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; Micah 5 is the prophetic backstory of that apostolic theology." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "It also shapes how we see others. The person in your congregation who seems insignificant, the community that looks unimportant on the map, the ministry that has no social media presence &mdash; these may be precisely where the next move of God is emerging. Micah 5 retrains our eyes to look where God looks: down, not up; small, not large; the forgotten places, not the celebrated ones." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GREEN}` }}>
              <h3 style={{ ...h3Style, color: GREEN }}>2. Laying Down False Securities</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5:10-15 lists the things God will cut off from his people: horses, chariots, strongholds, sorceries, idols. Each of these was a legitimate or semi-legitimate resource that had become a substitute for trusting the LORD. The problem was not having horses &mdash; the problem was trusting in them instead of God (cf. Psalm 20:7: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God&rdquo;)." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Our modern equivalents might include: savings accounts (not wrong to have, but do we trust them more than God?), professional reputation (not wrong to care for, but does our identity depend on it?), health and physical strength (not wrong to steward, but are we afraid of anything that threatens it?), relationships and community (not wrong to cherish, but have they become our true source of security?). Any good gift can become a false trust if it occupies the place only God should hold." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The invitation of Micah 5 is not to become careless or imprudent. It is to hold every resource with an open hand &mdash; using it gratefully, stewarding it wisely, but not depending on it for our deepest security. That place belongs to the shepherd-king alone." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>3. Receiving Jesus as the Bethlehem Shepherd</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The most direct application of Micah 5 is to receive Jesus for who he claims to be: the fulfillment of the Bethlehem promise, the eternal Son who entered history through the humblest door, the shepherd who stands and tends his flock in the strength of the LORD." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5:4 says &ldquo;they shall dwell secure.&rdquo; This is not a promise about circumstances. In the context of Micah&rsquo;s ministry, the Assyrian army was still a real threat, exile was still coming, and life was not safe by any external measure. But there is a security that transcends circumstances &mdash; the security of being shepherded by one who operates in the majesty of the name of the LORD. The sheep are safe not because the pasture is safe but because the shepherd is sovereign." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "To receive Jesus as shepherd is to stop running the operation of your own life and to trust his leading, his timing, his paths. The shepherd does not consult the sheep about the route. He knows the terrain, he knows the wolves, he knows where the water is. Following the shepherd means accepting his pace, his direction, and even his paths through dark valleys." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ ...h3Style, color: GOLD }}>4. The Remnant Calling</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 5:7 describes the remnant as &ldquo;dew from the LORD, like showers on the grass.&rdquo; Dew does not ask whether the grass wants moisture. It comes, by sovereign gift, and brings life. This is a portrait of the Church &rsquo;s vocation among the nations: to be a blessing that comes not by our persuasiveness or attractiveness, but by the sending of God." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The remnant does not try to survive by blending in. It does not gain acceptance by compromising the distinctives of covenant life. It is dew &mdash; surprising, refreshing, coming from above. This is countercultural in a church culture that often tries to make the gospel palatable by softening its edges. The dew does not worry about being acceptable. It simply arrives as the gift it is." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For you personally, the remnant calling might look like: being the person in your workplace who brings unexpected grace into tense situations, being the family in your neighborhood whose home is a place of welcome and peace, being the community in your city that stands with the poor and the overlooked &mdash; not because it is strategically effective, but because the shepherd-king you follow is drawn to the small and forgotten places." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Questions for Reflection and Discussion</h2>
              {[
                { num: "1", q: "Where in your life are you tempted to rely on &ldquo;horses and chariots&rdquo; &mdash; your own resources, plans, or systems &mdash; instead of trusting God&rsquo;s strength?" },
                { num: "2", q: "How does the image of the shepherd-king who &ldquo;stands and shepherds in the strength of the LORD&rdquo; change your understanding of leadership &mdash; whether you lead a family, a small group, or a workplace team?" },
                { num: "3", q: "Bethlehem was &ldquo;too little to be among the clans of Judah.&rdquo; Can you identify a &ldquo;Bethlehem&rdquo; in your own life &mdash; something you have dismissed as too small or unimportant that God might be using?" },
                { num: "4", q: "Micah 5:7 describes the remnant as dew &mdash; life-giving, sovereign, not waiting for human permission. What would it look like for your church community to be dew in your city or town?" },
                { num: "5", q: "The chapter ends with God purging idols and sorceries. What modern equivalents to spiritual manipulation (sorceries) might you be tempted to use to try to control your future?" },
              ].map(item => (
                <div key={item.num} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: GREEN + "22", color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{item.num}</div>
                  <p style={{ ...pStyle, marginBottom: 0, alignSelf: "center", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.q }} />
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={{ ...h2Style, marginBottom: "1.5rem" }}>Video Resources</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${GREEN}11, ${PURPLE}11)`, textAlign: "center" }}>
              <h2 style={h2Style}>A Prayer from Micah 5</h2>
              <p style={{ ...pStyle, fontStyle: "italic", maxWidth: 560, margin: "0 auto 1rem" }} dangerouslySetInnerHTML={{ __html: "Lord Jesus, you are the ruler from Bethlehem &mdash; the one the smallest place gave the world. Forgive us for despising what is small and trusting what is large. Forgive us for the horses and chariots we have assembled in our hearts. Shepherd us in the strength of your own name. Let us dwell secure &mdash; not because our circumstances are safe, but because you stand and watch over us. Strip away every false trust. Let your greatness reach to the ends of our lives, and through us, to the ends of the earth. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
