"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Micah1Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "3Kl3rKxN7Zw", title: "Micah 1: The LORD Descends in Judgment (Verse by Verse)" },
    { id: "P9HQkXeVlnU", title: "Samaria&rsquo;s Fall and Judah&rsquo;s Warning &mdash; Micah 1 Study" },
    { id: "FJtT2YwvXBc", title: "The Town Puns of Micah 1 Explained" },
    { id: "hTqLkYzN8Wm", title: "Micah&rsquo;s Lament &mdash; Prophetic Grief in Micah 1" },
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
      ref: "Micah 1:1",
      title: "Superscription &mdash; Micah of Moresheth",
      text: "The word of the LORD that came to Micah of Moresheth in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem.",
      body: "The superscription anchors the book in specific history. Micah prophesied across three reigns &mdash; Jotham, Ahaz, and Hezekiah &mdash; a ministry spanning roughly 740 to 700 BC. Moresheth (also called Moresheth-gath in 1:14) was a small town in the Shephelah, the foothills of Judah southwest of Jerusalem, close to Philistine territory. Micah was not a court prophet like those who advised kings from comfortable positions. He was a rural prophet, a man of the land, watching the great political storms from a village perspective. His twin targets are Samaria and Jerusalem: the capitals of the northern and southern kingdoms respectively. The fact that both cities are named from the start signals that neither kingdom is exempt from the LORD&rsquo;s scrutiny. The word that came to Micah was not his own invention &mdash; it was the word of the LORD, received and then proclaimed. The Hebrew verb &lsquo;chazah&rsquo; (saw) indicates prophetic vision: Micah did not merely hear these words, he saw them, perceiving the spiritual reality behind political events.",
    },
    {
      id: "v2",
      ref: "Micah 1:2-4",
      title: "The LORD Comes from His Holy Temple &mdash; Mountains Melt",
      text: "Hear, you peoples, all of you; pay attention, O earth, and all that is in it, and let the Lord GOD be a witness against you, the Lord from his holy temple.",
      body: "Micah opens with a cosmic courtroom summons. &ldquo;Hear, you peoples, all of you&rdquo; &mdash; this is not a message to Israel alone. The whole earth is called to witness what the LORD is about to do. The scope is deliberately universal. The Lord GOD takes his place as witness against the nations, speaking from his holy temple &mdash; probably a reference both to the earthly temple in Jerusalem and to the heavenly throne room from which all divine activity originates. Then comes the theophany: &ldquo;For behold, the LORD is coming out of his place, and will come down and tread upon the high places of the earth. And the mountains will melt under him, and the valleys will split open, like wax before the fire, like waters poured down a steep place&rdquo; (1:3-4). This language draws on the great theophany traditions of the Hebrew Bible &mdash; Sinai, the Song of Deborah (Judges 5), the Psalms of divine coming (Ps 18, Ps 97). When the LORD descends, creation cannot bear it. Mountains are not merely large hills; in the ancient Near East they were the seats of divine power, the high places where gods were worshipped. For them to melt like wax before the LORD is a declaration that no competing spiritual authority can withstand his approach. The image of valleys splitting open suggests a catastrophic breaking open of the created order &mdash; the land itself yields before its maker.",
    },
    {
      id: "v3",
      ref: "Micah 1:5-7",
      title: "Samaria as the Cause &mdash; Her Idols Destroyed",
      text: "All this is for the transgression of Jacob and for the sins of the house of Israel. What is the transgression of Jacob? Is it not Samaria? And what is the high place of Judah? Is it not Jerusalem?",
      body: "After the cosmic theophany, Micah delivers the indictment. The cause of this divine descent is not foreign wickedness but covenant infidelity by God&rsquo;s own people. Jacob&rsquo;s transgression &mdash; meaning all Israel, both kingdoms &mdash; is concentrated in two capitals. Samaria, the capital of the northern kingdom, is named first. It is described as a &ldquo;transgression&rdquo; &mdash; a deliberate covenant rebellion, not merely a sin of ignorance or weakness. Jerusalem, the capital of the southern kingdom, stands as its counterpart: a &ldquo;high place,&rdquo; the very location of unauthorized or idolatrous worship. God does not spare the holy city. Then comes the judgment on Samaria specifically (1:6-7): &ldquo;Therefore I will make Samaria a heap in the open country, a place for planting vineyards, and I will pour down her stones into the valley and uncover her foundations. All her carved images shall be beaten to pieces, all her wages shall be burned with fire, and all her idols I will lay waste, for from the fee of a prostitute she gathered them, and to the fee of a prostitute they shall return.&rdquo; The language is graphic. Samaria will be utterly demolished &mdash; its stones tumbling down the hill, its foundations exposed, nothing left. The description of Samaria&rsquo;s idols as &ldquo;wages of a prostitute&rdquo; draws on the prophetic use of sexual infidelity as a metaphor for covenant betrayal. Israel had taken gifts from false worship systems and used them to finance her idols. Those same idols will be destroyed and their &lsquo;wages&rsquo; scattered. This prophecy was fulfilled when Assyria conquered Samaria in 722 BC and deported its population.",
    },
    {
      id: "v4",
      ref: "Micah 1:8-9",
      title: "Micah&rsquo;s Lament &mdash; The Incurable Wound",
      text: "For this I will lament and wail; I will go stripped and naked; I will make lamentation like the jackals, and mourning like the ostriches.",
      body: "Micah does not proclaim these judgments with detachment. He is undone by them. &ldquo;For this I will lament and wail; I will go stripped and naked&rdquo; &mdash; the prophet publicly mourns, stripping himself of outer garments as an enacted lament (cf. Isaiah walking naked for three years as a sign, Isa 20:2-3). His grief is compared to jackals and ostriches &mdash; animals whose cries in the ancient world were associated with desolation and mourning. The prophet is not separate from his people&rsquo;s catastrophe; he inhabits it physically. Then verse 9 introduces one of the most chilling phrases in chapter 1: &ldquo;For her wound is incurable, and it has come to Judah; it has reached to the gate of my people, to Jerusalem.&rdquo; The word &ldquo;incurable&rdquo; (Hebrew &lsquo;anush&rsquo;) appears elsewhere in Jeremiah (Jer 15:18; 30:12) to describe a wound beyond human healing. Samaria&rsquo;s fall is not merely a northern problem. The wound is spreading. It has already crossed the border and reached the gates of Jerusalem itself. Micah stands at the gateway of the capital watching the disaster approach. The point is devastating: the idolatry and covenant unfaithfulness that destroyed Samaria is present in Judah too. The patient is different but the disease is the same. Only a divine physician could reverse what human sin has set in motion.",
    },
    {
      id: "v5",
      ref: "Micah 1:10-15",
      title: "The Town-Name Puns of Disaster",
      text: "Tell it not in Gath; weep not at all; in Beth-le-aphrah roll yourselves in the dust. Pass on your way, inhabitants of Shaphir, in nakedness and shame...",
      body: "The most distinctive literary feature of Micah 1 is the sustained series of wordplays on Judean town names in verses 10-15. Each town receives a pronouncement that plays on the meaning or sound of its name, creating a grim poetic tour of the Shephelah region &mdash; the very area where Micah himself came from. This is not abstract prophecy; these are Micah&rsquo;s neighbors and home towns. The wordplays include: Gath (meaning &lsquo;tell&rsquo;) &mdash; &ldquo;Tell it not in Gath,&rdquo; echoing David&rsquo;s lament for Saul and Jonathan in 2 Samuel 1:20. Beth-le-aphrah (&lsquo;house of dust&rsquo;) &mdash; &ldquo;roll yourselves in the dust.&rdquo; Shaphir (&lsquo;beautiful, pleasant&rsquo;) &mdash; its inhabitants pass in &ldquo;nakedness and shame,&rdquo; the opposite of beauty. Zaanan (related to &lsquo;going out&rsquo;) &mdash; &ldquo;does not go out,&rdquo; the people are frozen with fear. Beth-ezel (&lsquo;house of proximity&rsquo;) &mdash; loses its standing ground. Maroth (&lsquo;bitterness&rsquo;) &mdash; writhes in pain, waiting for good that does not come. Lachish (related to &lsquo;team of horses&rsquo;) &mdash; &ldquo;harness the steeds to the chariots,&rdquo; addressed as the &ldquo;beginning of sin to the daughter of Zion,&rdquo; suggesting that Lachish&rsquo;s trust in military power (chariots) had been an early source of corruption. Adullam &mdash; the &ldquo;glory of Israel&rdquo; will go to the cave of Adullam, the cave where David hid as a fugitive (1 Sam 22:1). The parade of punning disaster is both artistically brilliant and emotionally shattering. Micah is not enjoying these word games. He is doing what prophets do: making the unbearable real through the most vivid language available.",
    },
    {
      id: "v6",
      ref: "Micah 1:16",
      title: "Shave Your Head for Your Children &mdash; They Go into Exile",
      text: "Make yourselves bald and cut off your hair, for the children of your delight; make yourselves as bald as the eagle, for they shall go from you into exile.",
      body: "The chapter closes with one final command of lament. Shaving the head was a sign of deepest grief in the ancient world &mdash; used at funerals, in mourning for catastrophic loss, as a sign of shame (cf. Job 1:20; Isa 22:12; Amos 8:10). The command is addressed to Judah, and the grief is specifically for &ldquo;the children of your delight&rdquo; &mdash; not abstract political subjects but beloved children. This is parental grief. Micah envisions the mothers and fathers of Judah watching their sons and daughters marched off into exile, the most dreaded fate in the ancient world. To be exiled was to be cut off from land, family, temple, and the visible presence of the covenant God. The image of the eagle going bald is a striking choice: the eagle was associated with power and swiftness, but even this symbol of strength is stripped bare. There is no protective dignity left. The chapter that opened with the cosmic descent of the LORD ends with the intimate image of parents shaving their heads in grief over their children. The cosmic and the domestic are brought together: the same God whose footstep melts mountains is also the God whose covenant people will weep as families are torn apart by the consequences of their sin.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: PURPLE,
      title: "The LORD as Cosmic Judge Descending from His Temple",
      body: "Micah 1 opens with one of the most dramatic portrayals of divine judgment in the Hebrew Bible. The LORD does not send a messenger or speak from a distance &mdash; he comes himself, descending from his holy temple, treading on the high places of the earth. The theophany of verses 3-4 draws on Israel&rsquo;s deepest traditions of divine encounter: Sinai (Exod 19), the Song of Deborah (Judg 5:4-5), and the royal Psalms (Ps 18:7-15). Mountains melting, valleys splitting &mdash; these are not decorative images but theological statements. The LORD of Israel is not merely the God of one small nation. He is the creator and sovereign of the entire created order. When he moves, creation yields. This cosmic framing is not accidental. Micah is not pronouncing a local political opinion. He is declaring that what is about to happen to Samaria and Judah is not the work of chance or of Assyrian military prowess. It is the purposeful descent of the divine Judge. The same God who spoke at Sinai is now speaking again &mdash; and his word carries the same authority and the same consequence.",
    },
    {
      id: "t2",
      color: ROSE,
      title: "The Incurable Wound Spreading from Samaria to Judah",
      body: "Verse 9 introduces a medical metaphor that runs through prophetic literature: &ldquo;her wound is incurable.&rdquo; The Hebrew word &lsquo;anush&rsquo; appears in Jeremiah 15:18 and 30:12 for wounds that have gone beyond human remedy. What makes Micah&rsquo;s use of this image particularly devastating is the direction of spread. The wound begins in Samaria &mdash; the northern capital already under God&rsquo;s judgment &mdash; and moves southward. It has &ldquo;reached to the gate of my people, to Jerusalem.&rdquo; Micah is not saying Judah is about to get a mild version of what Samaria received. He is saying the same infection is already present. The idolatry, the covenant unfaithfulness, the trust in military and political power rather than in the LORD &mdash; these are not northern diseases that stopped at the border. They have spread to Jerusalem. This moral and spiritual contamination is the real crisis. The Assyrian army is merely the instrument by which an incurable internal wound becomes externally visible. The diagnosis raises a question the rest of the book must answer: if the wound is incurable by human means, is there any remedy? Micah&rsquo;s answer, developed through chapters 4-7, is that only God himself can heal what sin has destroyed.",
    },
    {
      id: "t3",
      color: TEAL,
      title: "Prophetic Lament &mdash; Grief as Faithful Response",
      body: "Micah 1:8 is one of the most striking self-descriptions of a prophet in the entire Hebrew canon: &ldquo;For this I will lament and wail; I will go stripped and naked; I will make lamentation like the jackals, and mourning like the ostriches.&rdquo; The prophet does not stand apart from the catastrophe he announces. He enters it. He strips himself &mdash; not as performance but as reality. His body enacts what he is saying. In the tradition of prophetic sign-acts, Micah&rsquo;s nakedness is a lived participation in the shame of exile that is coming for his people. Prophetic lament is a deeply undervalued dimension of biblical spirituality. The prophets do not merely communicate information; they absorb the weight of what they announce. Jeremiah weeps (Jer 9:1). Ezekiel is struck dumb (Ezek 3:26). Isaiah goes naked (Isa 20). Micah mourns like the jackals. This is not weakness &mdash; it is the mark of genuine prophetic empathy. The prophet feels what God feels about the catastrophe of human sin. He is not distant from it; he is in it. Lament is not despair, but it is honest grief, and it is the appropriate response when the consequences of sin become visible in history.",
    },
    {
      id: "t4",
      color: GOLD,
      title: "Wordplay as Prophetic Technique &mdash; The Town Puns",
      body: "The pun-parade of Micah 1:10-15 is one of the most remarkable literary passages in the Minor Prophets. Micah takes the names of towns in his home region &mdash; towns he knew intimately as a native of Moresheth-gath &mdash; and creates devastating wordplays on each one. Tell-it-not in Gath (tell). Roll in the dust in Beth-le-aphrah (house of dust). Pass in nakedness and shame through Shaphir (beautiful). Zaanan does not go out (the one whose name means going-out). This is not wordplay for the sake of cleverness. It is a powerful rhetorical strategy that works at two levels simultaneously. First, it personalizes the judgment: these are not abstract enemy cities. They are Micah&rsquo;s towns, his streets, his neighbors. The prophet makes it impossible to be detached. Second, the wordplays reveal a theological principle: the meaning of a name can become its opposite in the day of judgment. The beautiful city becomes a place of naked shame. The city known for going out is frozen in place. The irony is the point: what human civilization has built up will be reversed, exposed, inverted. This device appears elsewhere &mdash; notably in Isaiah&rsquo;s oracles against Babylon &mdash; but nowhere with the concentrated geographical intimacy of Micah 1.",
    },
    {
      id: "t5",
      color: PURPLE,
      title: "Lachish and the Assyrian Crisis",
      body: "Among the towns named in Micah 1, Lachish receives special attention: &ldquo;Harness the steeds to the chariots, inhabitants of Lachish; it was the beginning of sin to the daughter of Zion, for in you were found the transgressions of Israel&rdquo; (1:13). Lachish was no ordinary town. It was the second most important city in Judah after Jerusalem, a major fortified city guarding the approaches to the Judean highlands. Archaeologically, Lachish is one of the most excavated sites in Israel, and the Assyrian siege of Lachish under Sennacherib (701 BC) is depicted in extensive relief sculptures found at Nineveh, now in the British Museum. That Micah singles out Lachish as &ldquo;the beginning of sin&rdquo; &mdash; specifically connected to chariots and military power &mdash; is theologically pointed. Lachish apparently symbolized Judah&rsquo;s trust in military fortification over trust in the LORD. The city that prided itself on its defenses would be the very place where the consequences of misplaced trust became most visible. The town that said &ldquo;harness the horses&rdquo; trusted in horses. God will hold that trust accountable.",
    },
    {
      id: "t6",
      color: GREEN,
      title: "Exile as the Consequence of Sin &mdash; Parental Grief",
      body: "Micah 1 ends with an image of exile seen from the perspective of parents: &ldquo;Make yourselves bald and cut off your hair, for the children of your delight; make yourselves as bald as the eagle, for they shall go from you into exile&rdquo; (1:16). Exile in the ancient world was not merely a political inconvenience. It was the destruction of everything that gave life meaning: land, family, community, access to the temple and the covenantal presence of God. To be exiled was to be cut off from the promises. The specific focus on children &mdash; &ldquo;the children of your delight&rdquo; &mdash; is deliberate. Exile is not an abstract political event. It is a mother watching her son led away in chains. It is a father unable to protect his daughter. By ending the chapter with this domestic image, Micah grounds the cosmic judgment of verses 3-4 in the most painful of human realities. The LORD who descends and melts mountains is also the one whose people will experience the shattering of family through the consequences of their own covenant unfaithfulness. The connection between idolatry and exile is direct: the generation that trusted idols produced a generation that went into exile.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${ROSE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <span style={tagStyle(GOLD)}>Minor Prophets</span>
          <span style={tagStyle(PURPLE)}>Judgment &amp; Lament</span>
          <span style={tagStyle(GREEN)}>Old Testament</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Micah 1 &mdash; Hear, O Peoples, All of You</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem" }}>
          The LORD descends from his holy temple to judge Samaria and Judah. An incurable wound spreads from the north,
          and Micah mourns like the jackals as the town-name puns of doom echo across the Shephelah.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GREEN }}>~735 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Prophetic Date</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: PURPLE }}>16 Verses</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Chapter Length</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD }}>722 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Samaria Falls</div>
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
              <h2 style={h2Style}>The LORD Descends &mdash; A Cosmic Courtroom Opens</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 is one of the most powerful opening chapters in all the prophetic literature. It begins with a scene of cosmic proportions: all the peoples of the earth are summoned to hear the LORD&rsquo;s testimony. The LORD himself comes down from his holy temple, and the mountains melt like wax before him. But this is not a display of power for its own sake. The LORD has a case to make against his people." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The specific charge is transgression: the transgression of Jacob, concentrated in Samaria and Jerusalem (1:5). Samaria, capital of the northern kingdom, will be made a heap of ruins. Her idols &mdash; described with biting contempt as the wages of prostitution &mdash; will be smashed and scattered (1:6-7). But the wound does not stop at Samaria. Micah declares in verse 9 that the wound is incurable and has already reached the gates of Jerusalem. The same spiritual disease that destroyed the north is alive in the south." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The second half of the chapter (1:10-16) is a remarkable literary tour de force: a series of puns on the names of Judean towns in the Shephelah, Micah&rsquo;s home region. Each town name is twisted into a pronouncement of judgment. The chapter ends with the command to shave the head in grief, because the children of Judah &mdash; &ldquo;the children of your delight&rdquo; &mdash; will go into exile. From cosmic courtroom to parental grief: the sweep of Micah 1 is extraordinary." }} />
              <div style={quoteStyle} dangerouslySetInnerHTML={{ __html: "&ldquo;For behold, the LORD is coming out of his place, and will come down and tread upon the high places of the earth. And the mountains will melt under him, and the valleys will split open, like wax before the fire, like waters poured down a steep place.&rdquo; &mdash; Micah 1:3-4" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah was a native of Moresheth-gath, a small town in the Shephelah southwest of Jerusalem. Unlike the court prophets attached to the royal apparatus, he was a village prophet, a man of the land who watched the great political storms from the margins. His proximity to the towns named in 1:10-15 makes the wordplays especially poignant: these are not enemy cities. They are his home. He is lamenting his own neighborhood." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Chapter at a Glance</h2>
              {[
                { ref: "1:1", color: PURPLE, title: "Superscription", body: "Micah of Moresheth prophesies in the days of Jotham, Ahaz, and Hezekiah &mdash; concerning Samaria and Jerusalem." },
                { ref: "1:2-4", color: ROSE, title: "The Cosmic Courtroom", body: "All peoples summoned. The LORD descends from his holy temple. Mountains melt, valleys split open." },
                { ref: "1:5-7", color: GOLD, title: "Samaria&rsquo;s Indictment", body: "Jacob&rsquo;s transgression is Samaria. Her idols &mdash; the wages of prostitution &mdash; will be smashed. Fulfilled in 722 BC." },
                { ref: "1:8-9", color: GREEN, title: "Micah&rsquo;s Lament", body: "The prophet mourns like jackals and ostriches. The wound is incurable and has reached Jerusalem." },
                { ref: "1:10-15", color: TEAL, title: "The Town-Name Puns", body: "A devastating wordplay tour of Judean towns: Gath, Beth-le-aphrah, Shaphir, Zaanan, Lachish, Adullam." },
                { ref: "1:16", color: PURPLE, title: "Grief and Exile", body: "Shave your head for the children of your delight. They shall go from you into exile." },
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
              <h2 style={h2Style}>Historical Context &mdash; The Assyrian Storm</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The historical backdrop of Micah 1 is the Assyrian expansion under Tiglath-Pileser III (745-727 BC) and his successors Shalmaneser V and Sargon II. Tiglath-Pileser began the systematic dismemberment of the northern kingdom, deporting large segments of the population (2 Kings 15:29). His successor Shalmaneser V besieged Samaria, and Sargon II completed its conquest in 722 BC, deporting 27,290 inhabitants according to his own annals." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah prophesied that Samaria would become &ldquo;a heap in the open country&rdquo; (1:6). This is exactly what happened. The Assyrians did not merely defeat Samaria militarily; they dismantled the social and religious infrastructure of the northern kingdom and replaced its population with settlers from other parts of the empire (2 Kings 17:24-33). What Micah saw in prophetic vision became concrete historical reality within a generation of his ministry." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Sennacherib&rsquo;s subsequent campaign against Judah in 701 BC moved precisely through the Shephelah towns that Micah names in 1:10-15. Lachish, one of the key towns in Micah&rsquo;s wordplay list, was besieged and conquered by Sennacherib &mdash; an event so significant that Sennacherib commissioned an enormous relief panel depicting it for his palace at Nineveh. Micah&rsquo;s geographical detail was not decorative: he was describing the exact route the Assyrian army would travel through his home region." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Micah in the Canon</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah is one of the twelve Minor Prophets and a contemporary of Isaiah. Both ministered in Judah during the reigns of Jotham, Ahaz, and Hezekiah. Where Isaiah prophesied primarily from Jerusalem with access to the royal court, Micah came from the rural Shephelah and brought a more grassroots perspective on the social and spiritual catastrophes of his day." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah is quoted in the New Testament in Matthew 2:6 (the Bethlehem prophecy of Micah 5:2) and alluded to extensively throughout the Gospels. But within the Old Testament itself, Micah&rsquo;s influence is visible in Jeremiah, who cites Micah 3:12 explicitly in Jeremiah 26:18 &mdash; one of the only places in the Hebrew Bible where one prophet is quoted by name by another. That citation occurs in a legal proceeding: Jeremiah&rsquo;s own prophetic ministry is defended partly on the grounds that Micah prophesied similar things and Hezekiah did not kill him." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 establishes the theological framework for the entire book: God is judge, Israel has sinned, judgment is coming &mdash; but the judgment is not the final word. Chapters 4-7 of Micah contain some of the most beautiful promises of restoration in the prophetic canon. The God who descends in judgment (chapter 1) is the same God who promises to &ldquo;cast all our sins into the depths of the sea&rdquo; (7:19). Micah 1 is the darkness before the dawn." }} />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${PURPLE}11, ${CARD})` }}>
              <h2 style={h2Style}>Key Themes in Micah 1</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 is dense with theological freight. Its themes connect to the broadest currents of biblical theology &mdash; the holiness of God, the wages of sin, the spread of moral corruption, the role of the prophet as grief-bearer &mdash; and they anticipate the redemptive arc that the book of Micah traces toward its conclusion." }} />
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
                { color: PURPLE, from: "Micah 1:3-4", to: "Psalm 18:7-15", note: "The theophany of the descending LORD &mdash; mountains quake, foundations of the world tremble. The same divine descent language in a royal psalm." },
                { color: ROSE, from: "Micah 1:9", to: "Jeremiah 30:12", note: "The incurable wound &mdash; Jeremiah uses the same Hebrew word &lsquo;anush&rsquo; for a wound beyond human remedy, and points to God alone as healer." },
                { color: TEAL, from: "Micah 1:8", to: "Isaiah 20:2-3", note: "The prophet walking naked as an enacted sign of coming exile &mdash; Isaiah performed a similar sign for three years." },
                { color: GOLD, from: "Micah 1:10", to: "2 Samuel 1:20", note: "Tell it not in Gath &mdash; Micah&rsquo;s phrase echoes David&rsquo;s lament for Saul and Jonathan, linking the new disaster to the old grief over fallen royalty." },
                { color: GREEN, from: "Micah 1:16", to: "Amos 8:10", note: "The command to shave the head in mourning &mdash; Amos uses the same image for the day of national catastrophe and the grief of parents for children." },
                { color: PURPLE, from: "Micah 1:2", to: "Deuteronomy 32:1", note: "The summons to heaven and earth as witnesses &mdash; Moses&rsquo; song opens identically, establishing Micah in the covenantal lawsuit tradition." },
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
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Work through Micah 1 section by section. Click each passage to expand the commentary. The chapter moves from a universal summons (1:1-4) through specific indictments (1:5-9) to the unforgettable wordplay tour of Judean towns (1:10-16)." }} />
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
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: "1.05rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
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
              <h2 style={h2Style}>Reading Micah 1 as a Unified Whole</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 has a carefully constructed architecture. It opens with the widest possible frame (all peoples, all of the earth), then narrows to two capitals (Samaria and Jerusalem), then narrows further to specific Judean towns, and finally closes on the intimate image of parents grieving for children. This concentric narrowing is not accidental. Micah is moving from the universal to the particular, from cosmic judgment to personal grief." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The chapter also moves geographically from north to south &mdash; from Samaria toward Jerusalem &mdash; tracing the path of the incurable wound. The Assyrian army that will eventually follow this path is anticipated by the prophet&rsquo;s own verbal journey through the Shephelah towns. Micah performs the catastrophe in words before the army performs it in history." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The juxtaposition of the cosmic (mountains melting) and the domestic (children going into exile) is the defining tension of Micah 1. The same God who is Lord of all creation is the one whose covenant children are being marched into captivity. The chapter does not resolve this tension. That is the work of the rest of the book &mdash; and ultimately the work of the gospel." }} />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Living Micah 1 Today</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The warnings and laments of Micah 1 are not locked in the eighth century BC. They address perennial realities of human sin, divine holiness, communal responsibility, and appropriate grief. Five areas of application emerge with particular force from the text." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ ...h3Style, color: PURPLE }}>1. Taking Sin&rsquo;s Consequences Seriously</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 does not allow us to domesticate sin. The prophet announces that transgression has cosmic consequences: the LORD himself comes down, mountains melt, valleys split open. The language is extravagant because the moral reality it describes is serious. We live in a therapeutic culture that tends to understand moral failure primarily as a personal psychological problem to be managed. Micah insists it is a cosmic offense against a holy God." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This does not mean we approach sin with morbid anxiety. But it does mean we approach it with honest weight. The incurable wound of verse 9 is the result of accumulated, unrepented transgression &mdash; not a single catastrophic failure but a pattern of looking to idols instead of to the LORD. Small compromises compound into systemic corruption. A church that takes Micah 1 seriously will cultivate regular practices of repentance &mdash; not as spiritual self-flagellation but as honest acknowledgment that sin is real, its consequences are real, and only God can reverse what it has set in motion." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah&rsquo;s message is also communal. The wound is not Samaria&rsquo;s problem alone; it spreads to Judah. Sin rarely stays contained within the individual or the community that first practices it. The spiritual carelessness of one generation creates the moral environment for the next. Taking sin seriously means taking seriously the responsibility we bear for one another within the community of faith." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${ROSE}` }}>
              <h3 style={{ ...h3Style, color: ROSE }}>2. Idolatry and National Catastrophe &mdash; The Pattern Still Holds</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah identifies the central cause of Samaria&rsquo;s destruction as idolatry: &ldquo;All her carved images shall be beaten to pieces&rdquo; (1:7). The idols are described as the wages of prostitution &mdash; wealth accumulated through covenant betrayal, dedicated to false gods. This is not merely ancient religious history. The pattern &mdash; substitute trust, accumulated misplaced devotion, and then catastrophic consequence &mdash; recurs in every era." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Modern idolatry rarely takes the form of carved images. It takes the form of whatever system we trust to deliver what only God can give: security, identity, significance, future, community. Nations can build entire social and economic systems on substitute trusts &mdash; military power (Lachish and its chariots), economic confidence, technological capability, political arrangements. When those systems fail, the failure is always revelatory: it exposes the misplaced confidence that built them." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The application for communities of faith is to ask honestly: what are the &lsquo;chariots of Lachish&rsquo; in our common life? What are we trusting that is not God? What have we accumulated and called good that is actually a substitute for covenant faithfulness? Micah 1 invites this diagnostic work not to produce paralysis but to clear the ground for genuine trust." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>3. Communal Grief and Lament as Appropriate Responses</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah&rsquo;s response to the coming judgment is not theological analysis or political commentary. It is wailing and stripping naked. He makes &ldquo;lamentation like the jackals, and mourning like the ostriches&rdquo; (1:8). This is a posture the modern church has largely lost. We tend to respond to cultural and moral catastrophe with outrage (political commentary), explanation (theological analysis), or denial (pretending it is not as bad as it looks). Micah models a different response: grief." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Grief is not weakness. Grief is the appropriate response of people who understand what is actually being lost when sin is allowed to run its course. The prophet grieves not because he is defeated but because he knows what human flourishing looks like and what its destruction costs. His lament is the sign of his love for his people &mdash; the same people whose transgression has provoked the judgment he is announcing." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For communities of faith today, recovering the practice of lament means creating space in worship, in small groups, and in personal prayer for honest grief over sin &mdash; our own and our community&rsquo;s. The Psalms of lament (Ps 22, Ps 44, Ps 88) provide the vocabulary. Micah 1 provides the posture: stripped down, honest, unreserved in grief, like the jackals and the ostriches of the wilderness." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ ...h3Style, color: GOLD }}>4. The Spread of Moral Corruption and Its Effect on Communities</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The incurable wound that begins in Samaria and reaches Jerusalem (1:9) illustrates a principle that appears throughout Scripture and history: moral and spiritual corruption spreads. It does not stay contained. The idolatry of the northern kingdom became a template that the southern kingdom adopted. The &ldquo;beginning of sin to the daughter of Zion&rdquo; was Lachish (1:13) &mdash; a Judean city, not a foreign one. The contagion was internal." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This has implications for communities of faith. Sin in leadership spreads to the congregation. Tolerance of injustice in small things creates an environment where larger injustices seem normal. The spiritual practices that slip first are always the ones that seem least important: daily Scripture, prayer, the weekly gathering, accountability with trusted brothers and sisters. But those &lsquo;small&rsquo; disciplines are what build the immune system of the community against the spread of moral corruption." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah&rsquo;s warning is not to cultivate fearful vigilance that sees sin everywhere. It is to cultivate humble attention &mdash; the kind that notices when compromise begins, names it early, and returns to the LORD before the wound becomes incurable. Every community has the capacity for renewal before the wound reaches that point. But renewal requires honesty, and Micah 1 is an invitation to that honesty." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GREEN}` }}>
              <h3 style={{ ...h3Style, color: GREEN }}>5. Hope That Even Incurable Wounds Can Be Healed by God</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Micah 1 calls the wound &ldquo;incurable&rdquo; &mdash; beyond human remedy. But the book of Micah does not end in Micah 1. The same prophet who announces incurable wounds in chapter 1 closes the book with one of the most stunning declarations of divine mercy in the Hebrew Bible: &ldquo;Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love. He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea&rdquo; (Micah 7:18-19)." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The God who descends to judge in chapter 1 is the God who casts sins into the sea in chapter 7. The incurable wound is incurable by human means. By divine means &mdash; by the God who delights in steadfast love &mdash; even the deepest damage can be healed. This is the arc of Micah: from incurable wound to sea-floor forgiveness. And it is the arc of the gospel: from the death our sin deserves to the resurrection that sin cannot touch." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For the reader today, Micah 1 is an invitation to bring what seems incurable to the God who makes the incurable his specialty. The wound you have been carrying &mdash; in your own conscience, in your family, in your community &mdash; is not beyond the reach of the God who treads on the high places of the earth. He comes down to judge; he also comes down to heal. Micah 7:18-19 is the promise that the Judge of chapter 1 is also the Healer." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Questions for Reflection and Discussion</h2>
              {[
                { num: "1", q: "Micah 1:9 says the wound is &ldquo;incurable&rdquo; and has spread from Samaria to Jerusalem. Where in your own life or community do you see a &lsquo;wound&rsquo; spreading that needs to be named and brought to God?" },
                { num: "2", q: "Micah responds to the coming judgment by stripping naked and wailing like jackals. When did you last genuinely grieve over sin &mdash; your own or your community&rsquo;s &mdash; rather than explaining or analyzing it?" },
                { num: "3", q: "Lachish is called &lsquo;the beginning of sin&rsquo; because it trusted in chariots. What modern equivalents to chariots &mdash; systems, resources, or institutions &mdash; might your community be trusting instead of the LORD?" },
                { num: "4", q: "The wordplays of 1:10-15 make judgment specific and local, not abstract. What would it look like to name specific sins in your specific community with the kind of honest particularity Micah uses?" },
                { num: "5", q: "The chapter ends with parents shaving their heads for children going into exile. How does the image of parental grief for children shape your understanding of your responsibility to the next generation in your community?" },
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

            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${PURPLE}11, ${ROSE}11)`, textAlign: "center" }}>
              <h2 style={h2Style}>A Prayer from Micah 1</h2>
              <p style={{ ...pStyle, fontStyle: "italic", maxWidth: 560, margin: "0 auto 1rem" }} dangerouslySetInnerHTML={{ __html: "Lord God, you come down from your holy temple and even mountains melt before you. We confess that we have looked to our own resources, our own structures, our own idols &mdash; and called them security. We confess that the wound of sin is in us and in our communities, spreading in ways we have ignored. Grant us the courage to lament honestly, as Micah lamented. Grant us the grace to see sin clearly before the wound becomes incurable. And remind us that you are the God who casts sin into the depths of the sea. Come, heal what we cannot heal. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
