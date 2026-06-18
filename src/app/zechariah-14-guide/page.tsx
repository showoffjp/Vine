"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Zechariah14Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "a9CRs7VHcPE", title: "Zechariah 14: The LORD Will Be King over All the Earth" },
    { id: "Q2xdVWkY3tM", title: "The Mount of Olives Splits &mdash; Zechariah 14 Explained" },
    { id: "BkJuH8MfNLo", title: "Living Waters from Jerusalem &mdash; Zechariah 14:8 Study" },
    { id: "mPKtRbYzQcs", title: "Zechariah 14 and the Second Coming &mdash; Bible Commentary" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const verses = [
    {
      id: "v1",
      ref: "Zechariah 14:1-2",
      title: "The Day of the LORD &mdash; Jerusalem Pillaged",
      body: "Behold, a day is coming for the LORD, when the spoil taken from you will be divided in your midst. For I will gather all the nations against Jerusalem to battle, and the city shall be taken and the houses plundered and the women raped. Half of the city shall go out into exile, but the rest of the people shall not be cut off from the city. The chapter opens with Jerusalem at its lowest point &mdash; besieged, taken, looted, half its population in exile. The language deliberately echoes the worst moments of Judah&rsquo;s history: the Babylonian destruction, the Assyrian siege. This is the darkness before the dawn. God allows the nations to gather, allows the catastrophe to reach its climax &mdash; and then intervenes. The structure of the chapter is cruciform: deepest suffering, then decisive divine action.",
    },
    {
      id: "v2",
      ref: "Zechariah 14:3-5",
      title: "The LORD Fights &mdash; Mount of Olives Splits",
      body: "Then the LORD will go out and fight against those nations as when he fights on a day of battle. On that day his feet shall stand on the Mount of Olives that lies before Jerusalem on the east, and the Mount of Olives shall be split in two from east to west by a very wide valley, so that one half of the Mount shall move northward, and the other half southward. And you shall flee to the valley of my mountains, for the valley of the mountains shall reach to Azal. And you shall flee as you fled from the earthquake in the days of Uzziah king of Judah. Then the LORD my God will come, and all the holy ones with him. The Mount of Olives &mdash; the hill east of Jerusalem where David fled barefoot in mourning (2 Samuel 15), where Jesus prayed before his arrest, where he ascended (Acts 1) &mdash; becomes the stage for the LORD&rsquo;s decisive stand. The splitting of the mountain creates an escape route for Jerusalem&rsquo;s survivors. The earthquake reference (Uzziah&rsquo;s earthquake in Amos 1:1) connects this cosmic event to Israel&rsquo;s historical memory. &ldquo;All the holy ones with him&rdquo; echoes Deuteronomy 33:2 and anticipates NT imagery of Christ returning with his angels.",
    },
    {
      id: "v3",
      ref: "Zechariah 14:6-7",
      title: "A Unique Day &mdash; Neither Darkness Nor Light",
      body: "On that day there shall be no light, cold, or frost. And there shall be a unique day, which is known to the LORD, neither day nor night, but at evening time there shall be light. The extraordinary nature of the day is captured in paradox: not day and not night, yet at evening there will be light. The normal rhythms of creation &mdash; day following night, light following darkness &mdash; are suspended. This &ldquo;unique day known to the LORD&rdquo; belongs to a category outside human time. The evening light echoes the creation narrative (Gen 1) where light existed before the sun. Only God knows the timing and character of this day, which is why Jesus said of that day and hour no one knows &mdash; not even the angels &mdash; but only the Father (Matt 24:36).",
    },
    {
      id: "v4",
      ref: "Zechariah 14:8",
      title: "Living Waters Flowing from Jerusalem",
      body: "On that day living waters shall flow out from Jerusalem, half of them to the eastern sea and half of them to the western sea. It shall continue in summer as in winter. The image of living waters flowing from Jerusalem east to the Dead Sea and west to the Mediterranean connects directly to Ezekiel 47&rsquo;s vision of the river flowing from the temple, and ultimately to Revelation 22&rsquo;s river of the water of life from God&rsquo;s throne. Water that flows in summer and winter &mdash; not seasonal but perpetual. The Dead Sea made fresh. The desert made fruitful. This is the consummation of creation&rsquo;s original goodness: God&rsquo;s life-giving presence flowing out from the center to the ends of the earth.",
    },
    {
      id: "v5",
      ref: "Zechariah 14:9",
      title: "The LORD Will Be King over All the Earth",
      body: "And the LORD will be king over all the earth. On that day the LORD will be one and his name one. This single verse is the theological summit of the entire chapter and arguably of all prophetic eschatology. The universalism is unambiguous: not king over Israel alone, not king over one region, but over all the earth. &ldquo;The LORD will be one and his name one&rdquo; is the Shema (Deuteronomy 6:4 &mdash; &ldquo;Hear O Israel, the LORD our God, the LORD is one&rdquo;) applied eschatologically: the confession that Israel makes daily will become the universal reality. All competing gods, all rival allegiances, all fragmentary loyalties will be resolved into the singular, undivided lordship of the one true God.",
    },
    {
      id: "v6",
      ref: "Zechariah 14:10-11",
      title: "The Land Transformed &mdash; Jerusalem Lifted Up",
      body: "The whole land shall be turned into a plain from Geba to Rimmon south of Jerusalem. But Jerusalem shall remain aloft on its site from the Gate of Benjamin to the place of the former gate, to the Corner Gate, and from the Tower of Hananel to the king&rsquo;s winepresses. And it shall be inhabited, for there shall never again be a decree of utter destruction. Jerusalem shall dwell in security. The surrounding landscape is flattened while Jerusalem alone rises &mdash; geographical exaltation as theological statement. The city that was so often threatened, taken, destroyed, besieged &mdash; Babylon, Assyria, Antiochus, Rome &mdash; now inhabits permanent security. &ldquo;Never again a decree of utter destruction&rdquo; reverses every catastrophe the city has known. This is not merely political security but the peace of God&rsquo;s permanent presence.",
    },
    {
      id: "v7",
      ref: "Zechariah 14:12-15",
      title: "The Plague on the Nations",
      body: "And this shall be the plague with which the LORD will strike all the peoples that wage war against Jerusalem: their flesh will rot while they are still standing on their feet, their eyes will rot in their sockets, and their tongues will rot in their mouths. On that day a great panic from the LORD shall fall on them, so that each will seize the hand of another, and the hand of the one will be raised against the hand of the other. The plague on the attacking nations is horrific &mdash; flesh rotting while still alive, eyes and tongues dissolving. The divine warrior imagery is at its most vivid. The panic that causes armies to fight each other echoes the great Jehoshaphat victory (2 Chronicles 20) and Gideon&rsquo;s battle (Judges 7). Jerusalem&rsquo;s enemies do not need to be defeated by human armies &mdash; God himself routs them. This is holy war in its eschatological form.",
    },
    {
      id: "v8",
      ref: "Zechariah 14:16-19",
      title: "The Nations Come to Worship at the Feast of Booths",
      body: "Then everyone who survives of all the nations that have come against Jerusalem shall go up year after year to worship the King, the LORD of hosts, and to keep the Feast of Booths. And if any of the families of the earth do not go up to Jerusalem to worship the King, the LORD of hosts, there will be no rain on them. The survivors of the attacking nations &mdash; those who came to destroy Jerusalem and were routed by God &mdash; now come to worship. The Feast of Booths (Sukkot) is chosen: the harvest festival of dwelling in temporary shelters, recalling wilderness wandering, celebrating God&rsquo;s provision. The festival that began as Israel&rsquo;s private commemoration becomes universal. All nations keep Sukkot. The consequences for non-observance (no rain, plague) indicate that worship is not optional in the new world order &mdash; it is the structure of creaturely existence.",
    },
    {
      id: "v9",
      ref: "Zechariah 14:20-21",
      title: "Everything Holy &mdash; Even the Cooking Pots",
      body: "And on that day there shall be inscribed on the bells of the horses, &ldquo;Holy to the LORD.&rdquo; And the pots in the house of the LORD shall be as the bowls before the altar. And every pot in Jerusalem and Judah shall be holy to the LORD of hosts, so that all who sacrifice may come and take of them and boil the meat in them. And there shall no longer be a trader in the house of the LORD of hosts on that day. The holiness inscribed on the high priest&rsquo;s turban (&ldquo;Holy to the LORD&rdquo; in Exodus 28:36) will appear on the bells of horses. The sacred vessels of the temple will be matched by every cooking pot in Jerusalem. The distinction between sacred and secular disappears &mdash; not because nothing is holy but because everything is. This is the fulfillment of the priestly vision: a kingdom of priests, a holy nation (Exodus 19:6). The &ldquo;no more trader&rdquo; ending echoes Jesus&rsquo;s cleansing of the temple (quoting Jeremiah 7) and points toward the new creation where commerce has no place in worship.",
    },
  ];

  const themes = [
    {
      id: "t1",
      title: "The Day of the LORD: Darkness Before Dawn",
      color: PURPLE,
      body: "Zechariah 14 follows the pattern of prophetic eschatology: things get worse before they get better, and the worst moment is immediately before the decisive divine intervention. Jerusalem is fully taken (14:2) before God steps onto the Mount of Olives (14:3). This pattern appears throughout Scripture &mdash; the darkness of Gethsemane and the cross before the resurrection. It teaches us that God&rsquo;s intervention often comes at the moment of deepest helplessness, precisely when human resources are exhausted. The day of the LORD is terrible before it is glorious.",
    },
    {
      id: "t2",
      title: "The Mount of Olives: Sacred Geography",
      color: TEAL,
      body: "The Mount of Olives is one of Scripture&rsquo;s most theologically loaded locations. David fled barefoot over it in mourning (2 Sam 15:30). Ezekiel saw the glory of the LORD depart over it (Ezek 11:23). Jesus delivered his eschatological discourse from it (Matt 24). He agonized and was arrested on its slopes (Gethsemane). He ascended from it (Acts 1:12). When the angels told the disciples he would return &ldquo;in the same way you saw him go&rdquo; &mdash; from the Mount of Olives &mdash; they were echoing Zechariah 14:4. Sacred geography in the Bible is not accidental; it is the terrain of divine history.",
    },
    {
      id: "t3",
      title: "Living Waters: The River from the Temple",
      color: GOLD,
      body: "The living waters of Zechariah 14:8 form a biblical thread that runs from Eden&rsquo;s four rivers (Gen 2) through Ezekiel&rsquo;s temple river (Ezek 47) to Revelation&rsquo;s river of life (Rev 22). In each case, life-giving water flows from God&rsquo;s presence outward to the world. The water heals the Dead Sea, makes the desert bloom, flows in every season. Jesus applied this imagery to himself: &ldquo;Whoever believes in me, as the Scripture has said, rivers of living water shall flow from his heart&rdquo; (John 7:38). The eschatological river is already available in the Spirit.",
    },
    {
      id: "t4",
      title: "One LORD, One Name: Universal Kingship",
      color: GREEN,
      body: "The declaration of 14:9 &mdash; &ldquo;The LORD will be one and his name one&rdquo; &mdash; is the eschatological form of the Shema. Israel confessed daily that the LORD is one; Zechariah promises that this will become universal reality. All competing claims to sovereignty &mdash; political, religious, cultural &mdash; will be resolved. This is not the conquest of one religion by another but the final demonstration that the LORD who created all things is the one to whom all things belong. The political implications of universal divine kingship were not lost on the early Christians who confessed Jesus as Lord in an empire that claimed Caesar was lord.",
    },
    {
      id: "t5",
      title: "Holiness Pervading Everything",
      color: ROSE,
      body: "The final vision of Zechariah 14:20-21 is one of the most radical pictures of holiness in the Old Testament. The words inscribed on the high priest&rsquo;s turban appear on horses&rsquo; bells. Every cooking pot becomes as holy as the temple vessels. The distinction between sacred and secular is not abolished because nothing is holy &mdash; it is abolished because everything is. This is the fulfillment of the Exodus vision: a kingdom of priests. Peter echoes it for the church (1 Pet 2:9). It means that ordinary life &mdash; cooking, farming, commerce &mdash; can and must be lived in the presence of God as an act of worship.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${GOLD}22, ${PURPLE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${GOLD}22`, border: `1px solid ${GOLD}44`, borderRadius: 8, padding: "0.3rem 1rem", marginBottom: "1rem", color: GOLD, fontSize: "0.85rem", letterSpacing: "0.1em" }}>ZECHARIAH 14</div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>The LORD Will Be King over All the Earth</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>The final battle, the Mount of Olives splitting, living waters flowing, and the declaration that unites all prophetic hope: on that day the LORD will be one and his name one.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontSize: "0.9rem" }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GOLD, fontSize: "1.4rem", marginBottom: "1rem", fontWeight: 700 }}>Chapter Overview</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Zechariah 14 is the climax not just of the book of Zechariah but of the entire prophetic tradition&rsquo;s vision of God&rsquo;s ultimate purposes. It follows the oracles of chapters 12 and 13 (the mourning over the pierced one, the fountain opened for sin and uncleanness, the shepherd struck and the sheep scattered) to arrive at the day when all of history converges: the LORD standing on the Mount of Olives, the earth reorganized, living waters flowing from Jerusalem, and the universal declaration that the LORD alone is King and his name alone is confessed." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The chapter moves through several distinct scenes: the crisis (14:1-2), the divine warrior&rsquo;s intervention (14:3-5), the cosmic transformation of day, water, and land (14:6-11), the judgment on the nations (14:12-15), the conversion of the survivors (14:16-19), and finally the consecration of all life (14:20-21). Each scene builds on the others to create a comprehensive vision of what it looks like when God sets everything right." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The New Testament engages Zechariah 14 at multiple points. The disciples&rsquo; question after the Ascension (&ldquo;will you at this time restore the kingdom to Israel?&rdquo;, Acts 1:6) reflects awareness of this chapter. The angels&rsquo; promise that Jesus would return &ldquo;in the same way&rdquo; from the Mount of Olives (Acts 1:11) echoes Zech 14:4. Revelation&rsquo;s river of life (Rev 22:1-2) draws from Zech 14:8. The final holiness of all things (Zech 14:20-21) informs the vision of the new creation where there is no temple because God himself is the temple (Rev 21:22)." }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Author", value: "Zechariah son of Berechiah", color: GOLD },
                { label: "Period", value: "c. 520&ndash;480 BCE", color: TEAL },
                { label: "Setting", value: "Post-exilic Jerusalem", color: PURPLE },
                { label: "Key Verse", value: "Zechariah 14:9", color: GREEN },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ color: item.color, fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{item.label.toUpperCase()}</div>
                  <div style={{ color: TEXT, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Structure of Zechariah 14</h3>
              {[
                { ref: "14:1-2", desc: "The crisis &mdash; Jerusalem taken and half its people in exile" },
                { ref: "14:3-5", desc: "Divine warrior intervenes &mdash; Mount of Olives splits" },
                { ref: "14:6-7", desc: "A unique day &mdash; neither day nor night" },
                { ref: "14:8", desc: "Living waters flow from Jerusalem east and west" },
                { ref: "14:9", desc: "The LORD will be King over all the earth &mdash; one LORD, one name" },
                { ref: "14:10-11", desc: "The land flattened, Jerusalem lifted up and secure" },
                { ref: "14:12-15", desc: "The plague on the nations" },
                { ref: "14:16-19", desc: "Survivors worship at the Feast of Booths" },
                { ref: "14:20-21", desc: "Holy to the LORD on everything &mdash; even cooking pots" },
              ].map(s => (
                <div key={s.ref} style={{ display: "flex", gap: "1rem", padding: "0.5rem 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 70, fontSize: "0.9rem" }}>{s.ref}</span>
                  <span style={{ color: MUTED, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>

            <div style={{ background: `${PURPLE}11`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontSize: "1rem", marginBottom: "0.75rem", fontWeight: 700 }}>New Testament Connections</h3>
              {[
                { ref: "Zech 14:4 / Acts 1:11-12", text: "The disciples watch Jesus ascend from the Mount of Olives; angels promise he will return the same way" },
                { ref: "Zech 14:8 / Rev 22:1-2", text: "John&rsquo;s vision of the river of life from God&rsquo;s throne echoes the living waters from Jerusalem" },
                { ref: "Zech 14:9 / Phil 2:10-11", text: "Every knee bowing and tongue confessing is the personal form of the universal kingship" },
                { ref: "Zech 14:21 / John 2:16", text: "Jesus cleansing the temple of traders echoes the &ldquo;no more trader in the house of the LORD&rdquo; vision" },
              ].map(c => (
                <div key={c.ref} style={{ display: "flex", gap: "1rem", padding: "0.5rem 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: PURPLE, fontWeight: 700, minWidth: 120, fontSize: "0.85rem" }}>{c.ref}</span>
                  <span style={{ color: MUTED, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: c.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Key Themes in Zechariah 14</h2>
            {themes.map(theme => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "1.25rem", overflow: "hidden" }}>
                <button onClick={() => toggle(theme.id)} style={{ width: "100%", background: "transparent", border: "none", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                  <span style={{ fontWeight: 700, fontSize: "1rem", textAlign: "left", color: theme.color }}>{theme.title}</span>
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: "1.2rem", marginLeft: "1rem" }}>{open === theme.id ? "-" : "+"}</span>
                </button>
                {open === theme.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Verse by Verse &mdash; Zechariah 14</h2>
            {verses.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "1.25rem", overflow: "hidden" }}>
                <button onClick={() => toggle(v.id)} style={{ width: "100%", background: "transparent", border: "none", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{v.ref}</div>
                    <div style={{ fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                  <span style={{ color: GOLD, fontWeight: 700, fontSize: "1.2rem", marginLeft: "1rem" }}>{open === v.id ? "-" : "+"}</span>
                </button>
                {open === v.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Application &mdash; Living Zechariah 14</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Trusting God&rsquo;s Final Victory</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Zechariah 14 gives Christians a frame for history: it is moving toward a decisive divine intervention. The nations may rage (Ps 2:1), powers may seem overwhelming, but the trajectory is fixed &mdash; the LORD will be king over all the earth. This is not passive fatalism but active hope: because the outcome is certain, we can engage the present with courage rather than despair." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The pattern of Zechariah 14 &mdash; crisis before intervention, darkness before dawn &mdash; helps us interpret difficult seasons. The worst moments are not the final moments. The city being taken is not the last word. God&rsquo;s standing on the Mount of Olives is." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Drinking from the Living Waters Now</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The living waters of 14:8 are promised for the eschatological day, but Jesus&rsquo; offer in John 7:38 (&ldquo;rivers of living water shall flow from his heart&rdquo;) indicates that the Spirit is the present-tense form of this gift. We do not have to wait for the full river to drink from its beginnings. The Holy Spirit flowing in the life of the believer and the church is the first installment of the eschatological river." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Practically, this means staying connected to the source: prayer, Scripture, community, worship. The living water does not flow automatically; it flows from the throne of God through the channel of a life oriented toward him." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Consecrating Ordinary Life</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The vision of Zechariah 14:20-21 &mdash; &ldquo;Holy to the LORD&rdquo; on every horse bell and every cooking pot &mdash; is the most radical vision of sanctified ordinary life in the Old Testament. It means that the categories of sacred and secular are not permanent; they are provisional. In the new creation, cooking is as holy as sacrifice, commuting as holy as temple service, work as holy as worship." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul applies this anticipatorily: &ldquo;Whether you eat or drink or whatever you do, do all to the glory of God&rdquo; (1 Cor 10:31). The believer who cooks with that awareness is already living the eschatology of Zechariah 14. Every moment can be inscribed &ldquo;Holy to the LORD&rdquo; through intentional consecration." }} />
            </div>

            <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1rem", marginBottom: "1rem", fontWeight: 700 }}>Reflection Questions</h3>
              {[
                "What current crisis in your life or the world feels like Zechariah 14:1-2 &mdash; the worst before the turn? How does this chapter give you courage?",
                "Where are you drinking from the living waters &mdash; and where have you been trying to satisfy yourself at broken cisterns instead?",
                "What does &ldquo;the LORD will be one and his name one&rdquo; (14:9) mean for your own competing loyalties and divided allegiances?",
                "Is there an ordinary area of your life &mdash; work, family, creative output &mdash; that you have not yet consecrated as &ldquo;Holy to the LORD&rdquo;? What would that look like?",
                "How does Zechariah 14 shape the way you understand the Lord&rsquo;s Prayer petition &ldquo;Your kingdom come, your will be done on earth as in heaven&rdquo;?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            <h2 style={{ color: TEXT, fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => <VideoEmbed key={v.id} videoId={v.id} title={v.title} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
