"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Joel3Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "fNk_zzaMoSs", title: "Joel Overview - BibleProject" },
    { id: "8phkAg8PMHE", title: "The Holy Spirit and Pentecost" },
    { id: "Kd1-VGSVFPo", title: "The Day of the LORD in the Prophets" },
    { id: "jT2UxBHb5sE", title: "Joel and the Minor Prophets" },
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
      id: "spirit",
      color: PURPLE,
      title: "The Spirit Poured Out on All Flesh (Joel 2:28-29)",
      body: "Joel 2:28&ndash;29 contains one of the most socially radical promises in the Hebrew Bible. The gift of God&rsquo;s Spirit &mdash; previously associated with select kings, priests, and prophets &mdash; will be democratized across every social boundary: sons <em>and</em> daughters, old men <em>and</em> young men, male servants <em>and</em> female servants. In the ancient Near East, social hierarchy was assumed to be permanent. Prophecy, vision, and dream were the prerogatives of the elite or the specially called. Joel shatters this by locating the Spirit&rsquo;s outpouring not in office or lineage but in the sheer grace of God poured out &ldquo;on all flesh.&rdquo; The phrase &ldquo;all flesh&rdquo; (Hebrew: <em>kol-basar</em>) is deliberately universal &mdash; it includes the marginalized, the lowly, the forgotten. Peter quotes this passage on the day of Pentecost in Acts 2:17&ndash;21, announcing that what the disciples have just experienced &mdash; tongues, proclamation, wonders &mdash; is the fulfillment of Joel&rsquo;s oracle. The church is the community of the Spirit-poured-out. Every believer, regardless of gender, age, or social standing, is a prophet in the sense that the Spirit speaks through them. This is not the flattening of all gifts but the democratizing of access to the divine presence.",
    },
    {
      id: "dayofLord",
      color: ROSE,
      title: "Wonders in Heaven and Earth &mdash; The Day of the LORD",
      body: "Joel 2:30&ndash;31 sets the cosmic backdrop for salvation and judgment: blood, fire, columns of smoke, the sun darkened, the moon turned to blood, before the great and awesome Day of the LORD arrives. These &ldquo;wonders in heaven and earth&rdquo; (Hebrew: <em>mophethim</em>) are not decorative apocalyptic imagery &mdash; they are signs that the ordinary boundaries of creation are being overturned by divine action. The Day of the LORD in Joel is simultaneously terrifying and salvific. Joel 2:32 immediately follows with the most intimate promise in the book: &ldquo;And it shall come to pass that everyone who calls on the name of the LORD shall be saved.&rdquo; Paul quotes this in Romans 10:13 to argue that the gospel is for all peoples. The cosmic language does not describe a distant event alone; it describes the magnitude of what God does whenever he acts decisively in history &mdash; at the cross, at Pentecost, and at the final consummation. Calling on the Lord&rsquo;s name is not a small act; it is a response to cosmic-level realities.",
    },
    {
      id: "jehoshaphat",
      color: GOLD,
      title: "The Valley of Jehoshaphat &mdash; Judgment on the Nations (Joel 3:1-17)",
      body: "Joel 3 opens with God gathering all nations to the valley of Jehoshaphat &mdash; whose name means &ldquo;the LORD judges.&rdquo; The judgment is specific and historically rooted: nations are condemned for scattering God&rsquo;s people, dividing up God&rsquo;s land, and selling children into slavery (3:2&ndash;3). Tyre, Sidon, and Philistia are named explicitly (3:4&ndash;8). Their punishment will mirror their crime: their children will be sold to distant peoples. The oracle is not merely ethnic triumphalism &mdash; it is covenant justice on a global scale. God holds nations accountable for their treatment of the vulnerable, for genocide, forced displacement, and the trafficking of human beings. Joel 3:9&ndash;17 escalates to a cosmic confrontation: the nations are summoned to the valley of decision (3:14), the sun and moon are darkened again, and the LORD roars from Zion. The image of the LORD as a lion roaring from his holy mountain (3:16) connects Joel to Amos 1:2 and creates a unified prophetic voice across the minor prophets: divine justice is not silent.",
    },
    {
      id: "plowshares",
      color: TEAL,
      title: "Beat Your Plowshares into Swords &mdash; The Reversal of Micah 4:3",
      body: "Joel 3:10 contains one of the most startling reversals in Scripture: &ldquo;Beat your plowshares into swords, and your pruning hooks into spears.&rdquo; This is the <em>deliberate inversion</em> of Isaiah 2:4 and Micah 4:3, where nations will &ldquo;beat their swords into plowshares.&rdquo; Joel is not contradicting Isaiah &mdash; he is using the image in a different rhetorical context. In Joel, God is summoning the nations to war so that he can defeat them and establish his justice. The agricultural tools becoming weapons signals that the nations who have refused to live in peace have forfeited the peaceful age &mdash; they must now face the warrior God. The contrast is structural: the eschatological age of peace (Isaiah&rsquo;s vision) comes <em>after</em> the judgment Joel describes. The weapons of war will be unnecessary once God has judged; the agricultural tools will return when the land itself is restored (Joel 3:18). The two visions &mdash; Joel&rsquo;s and Isaiah&rsquo;s &mdash; are not contradictory but sequential: judgment precedes the new creation.",
    },
    {
      id: "restoration",
      color: GREEN,
      title: "The Restoration of Judah &mdash; Mountains Dripping Wine (Joel 3:18-21)",
      body: "Joel closes with an image of extraordinary fertility: &ldquo;And in that day the mountains shall drip sweet wine, and the hills shall flow with milk, and all the stream beds of Judah shall flow with water; and a fountain shall come forth from the house of the LORD and water the valley of Shittim&rdquo; (3:18). These images invert the locust plague of Joel 1&ndash;2, where the land was stripped bare and the grain, wine, and oil had failed. The restoration is not merely agricultural recovery but cosmic renewal &mdash; a new creation flowing from the temple itself. The fountain from the house of the LORD echoes Ezekiel 47:1&ndash;12 (the temple stream that grows into a life-giving river) and anticipates Revelation 22:1&ndash;2 (the river of the water of life flowing from the throne of God). Egypt and Edom are condemned (3:19) not out of ethnic hostility but because of specific acts of violence against Judah: Egypt&rsquo;s bloodshed, Edom&rsquo;s shedding of innocent blood. Meanwhile, Judah shall be inhabited forever, and Jerusalem from generation to generation &mdash; the permanence of the redeemed community standing in contrast to the transience of the violent nations.",
    },
  ];

  const verseItems = [
    {
      id: "v2829",
      color: PURPLE,
      title: "Joel 2:28-29 &mdash; The Spirit on All Flesh",
      body: "These two verses form the theological heart of the entire book. &ldquo;And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions. Even on the male and female servants in those days I will pour out my Spirit.&rdquo; The word &ldquo;afterward&rdquo; (<em>acharei-khen</em>) looks back to the restoration of Joel 2:18&ndash;27 &mdash; after the locust plague ends, after the land is restored, a further and greater gift comes. Three pairs of social distinctions are dismantled: sons/daughters (gender), old men/young men (age), male servants/female servants (social class). In the ancient world, prophecy belonged to a narrow class of recognized figures. Joel&rsquo;s vision opens the prophetic experience to the entire covenant community &mdash; and indeed to &ldquo;all flesh,&rdquo; suggesting a scope that extends even beyond Israel. The three modes of divine communication &mdash; prophecy, dreams, visions &mdash; represent the full range of ways God had previously spoken to his select prophets. All of this is now available to all. Peter&rsquo;s use of this passage in Acts 2 is not an accommodation or a typological stretch &mdash; it is a direct claim that Pentecost is the day Joel described.",
    },
    {
      id: "v3032",
      color: ROSE,
      title: "Joel 2:30-32 &mdash; Wonders and Whoever Calls",
      body: "&ldquo;And I will show wonders in the heavens and on the earth, blood and fire and columns of smoke. The sun shall be turned to darkness, and the moon to blood, before the great and awesome day of the LORD comes. And it shall come to pass that everyone who calls on the name of the LORD shall be saved. For in Mount Zion and in Jerusalem there shall be those who escape, as the LORD has said, and among the survivors shall be those whom the LORD calls.&rdquo; The cosmic signs function as the largest possible stage for the smallest possible act: calling on the LORD&rsquo;s name. Against a backdrop of blood and fire and darkened sun, the invitation is intimate and personal. &ldquo;Everyone who calls&rdquo; (<em>kol asher yiqra</em>) is deliberately universal &mdash; not everyone of a certain tribe or status but everyone, full stop. Two complementary movements appear: the human act of calling (v.32a) and the divine act of calling (v.32c &mdash; &ldquo;among the survivors shall be those whom the LORD calls&rdquo;). Both are real; neither cancels the other. The NT writers seize on this verse repeatedly: Peter in Acts 2:21, Paul in Romans 10:13. The universality of the call is the foundation of the universal gospel.",
    },
    {
      id: "v318",
      color: GOLD,
      title: "Joel 3:1-8 &mdash; Restoration of Judah, Judgment on the Nations",
      body: "&ldquo;For behold, in those days and at that time, when I restore the fortunes of Judah and Jerusalem, I will gather all the nations and bring them down to the Valley of Jehoshaphat. And I will enter into judgment with them there, on behalf of my people and my heritage Israel, because they have scattered them among the nations and have divided up my land&rdquo; (3:1&ndash;2). The restoration of Judah and the judgment of the nations are not separate events in Joel &mdash; they are two sides of the same divine action. God&rsquo;s justice for his people requires accountability for those who oppressed them. The specific charges are striking in their concreteness: selling boys for prostitutes and girls for wine (3:3). This is not abstract theological transgression &mdash; it is trafficking in human lives. Tyre and Sidon are named (3:4), and their punishment is the precise reversal of their crime: &ldquo;Your sons and your daughters they shall sell into the hand of the people of Judah, and they will sell them to the Sabeans, to a nation far away&rdquo; (3:8). The principle is lex talionis &mdash; the punishment mirrors the offense. Divine justice is not arbitrary; it is calibrated.",
    },
    {
      id: "v3917",
      color: TEAL,
      title: "Joel 3:9-17 &mdash; The Nations in the Valley of Decision",
      body: "&ldquo;Proclaim this among the nations: Consecrate for war; stir up the mighty men. Let all the men of war draw near; let them come up. Beat your plowshares into swords, and your pruning hooks into spears; let the weak say, &lsquo;I am a warrior.&rsquo;&rdquo; (3:9&ndash;10). The dark irony is palpable: even the weakest are invited to bring their weapons &mdash; because God will destroy them all. The nations gather confidently into the valley of decision, only to find that the &ldquo;decision&rdquo; is not theirs to make: &ldquo;Multitudes, multitudes, in the valley of decision! For the day of the LORD is near in the valley of decision&rdquo; (3:14). The word &ldquo;decision&rdquo; (<em>charuts</em>) can also mean &ldquo;verdict&rdquo; &mdash; God&rsquo;s verdict is being pronounced. Sun and moon are darkened again (3:15), the LORD roars from Zion (3:16), and the mountains shake. But the conclusion is not destruction alone: &ldquo;So you shall know that I am the LORD your God, who dwells in Zion, my holy mountain. And Jerusalem shall be holy, and strangers shall never again pass through it&rdquo; (3:17). The holiness of Jerusalem is not ethnic exclusivity but the inviolability of the place where God dwells.",
    },
    {
      id: "v3821",
      color: GREEN,
      title: "Joel 3:18-21 &mdash; The Fountain from the House of the LORD",
      body: "&ldquo;And in that day the mountains shall drip sweet wine, and the hills shall flow with milk, and all the stream beds of Judah shall flow with water; and a fountain shall come forth from the house of the LORD and water the valley of Shittim&rdquo; (3:18). The agricultural reversal is complete: what the locusts stripped (grain, wine, oil) has been returned in superabundance. The fountain from the house of the LORD is the book&rsquo;s final image &mdash; a stream of life originating in the divine presence and flowing outward. The valley of Shittim (Acacia Valley) was the last stopping point of Israel before entering Canaan under Joshua; the name carries associations of both the wilderness journey and the threshold of the promised land. Now the temple itself becomes the source of a new exodus, a new entry. Egypt and Edom are judged (3:19) for specific violence. Judah and Jerusalem will be permanently inhabited (3:20). The last word of Joel is covenant faithfulness: &ldquo;The LORD dwells in Zion&rdquo; (3:21). After locusts, after cosmic darkness, after the judgment of nations, after blood and fire &mdash; God is still here. Presence is the final word.",
    },
  ];

  const appItems = [
    {
      id: "app1",
      color: PURPLE,
      title: "You Belong to the Community of the Spirit",
      body: "Joel 2:28&ndash;29 means that the Spirit of God is not reserved for the extraordinary Christian &mdash; the theologian, the pastor, the person with unusual gifts. If you have trusted Christ, you are part of the community on whom God has poured out his Spirit. You have access to the same Spirit that raised Jesus from the dead (Romans 8:11). This does not make everyone a preacher or a prophet in the formal sense &mdash; but it does mean that you are not spiritually second-class. Ask: Have I been living as though the Spirit is for others but not really for me? What would it look like to live from the Spirit&rsquo;s presence today rather than from self-effort alone?",
    },
    {
      id: "app2",
      color: ROSE,
      title: "Everyone Who Calls &mdash; The Radical Inclusion of the Gospel",
      body: "Joel 2:32 and its NT citations (Acts 2:21; Romans 10:13) anchor the universal offer of the gospel. &ldquo;Everyone who calls on the name of the LORD shall be saved&rdquo; &mdash; there is no qualifier of ethnicity, education, prior religious performance, or social standing. The call to call on the Lord is itself an act of faith, and it is sufficient. This text challenges both exclusivism (the assumption that only the right kind of person can receive God) and spiritual complacency (the assumption that calling on the Lord is unnecessary because one is already religious). Application: Is there someone in your life whom you have implicitly categorized as beyond reach? How does Joel&rsquo;s &ldquo;everyone&rdquo; challenge that assumption?",
    },
    {
      id: "app3",
      color: TEAL,
      title: "God Holds Nations Accountable",
      body: "Joel 3:1&ndash;8 is one of Scripture&rsquo;s clearest statements that national and political actors are accountable to God for their treatment of the vulnerable. The sins listed &mdash; scattering peoples, dividing land, selling children &mdash; are the sins of power exercised without restraint. The prophetic tradition, from Amos to Joel to Isaiah, insists that the God of Israel is also the Judge of the nations. This has several applications: it is a word of comfort to those who have suffered injustice at the hands of powerful states or systems &mdash; their suffering has not been forgotten. It is also a word of warning to those who hold power: no act of oppression, however normalized by political culture, escapes divine scrutiny.",
    },
    {
      id: "app4",
      color: GOLD,
      title: "Judgment Precedes the New Creation",
      body: "The reversal of the plowshares-into-swords image (Joel 3:10) and the cosmic darkening that precedes the restoration (Joel 3:18&ndash;21) teach a consistent biblical pattern: the new creation comes through and after judgment, not by bypassing it. This is the pattern of the flood, the exodus, the exile, and supremely the cross. If you are in a season of what feels like divine disruption &mdash; things being stripped away, darkness before dawn &mdash; Joel&rsquo;s structure offers theological orientation: God does not skip the valley of decision on the way to the mountains dripping wine. The valley is not evidence that restoration is not coming; it is part of how it comes.",
    },
    {
      id: "app5",
      color: GREEN,
      title: "The Fountain from the House of the LORD",
      body: "Joel&rsquo;s final image &mdash; a fountain flowing from the temple to water the wilderness &mdash; is taken up in Ezekiel 47, Zechariah 14:8, and Revelation 22. Jesus identifies himself as the source of &ldquo;rivers of living water&rdquo; (John 7:38&ndash;39), which John explicitly connects to the Spirit. The application is devotional: the life you long for &mdash; abundance, fruitfulness, the end of spiritual drought &mdash; flows from the presence of God. Not from technique, not from discipline alone, but from nearness to God. Joel&rsquo;s closing image invites a question: Where am I drawing water from? And am I living close to the source?",
    },
  ];

  const reflectionQs = [
    "Joel 2:28 says the Spirit will be poured out on sons and daughters, old and young, servants and free. Which of these categories do you most identify with, and what does it mean to you that the Spirit is poured out specifically on people like you?",
    "Peter announced on the day of Pentecost that Joel&rsquo;s prophecy was being fulfilled (Acts 2:16&ndash;21). How does knowing that you live in the age of fulfillment &mdash; the age of the poured-out Spirit &mdash; change how you approach prayer, community, and daily life?",
    "Joel 2:32 promises that everyone who calls on the name of the LORD shall be saved. Is there someone in your life you have given up on spiritually? How does this verse challenge or encourage you?",
    "Joel 3:9&ndash;17 pictures the nations gathering in the valley of decision for God&rsquo;s judgment. How does awareness of God&rsquo;s ultimate justice over all history &mdash; including injustices you have witnessed or experienced &mdash; shape your emotional and spiritual posture?",
    "The book closes with mountains dripping wine and a fountain from the house of the LORD (3:18). What does a flourishing, Spirit-filled life look like for you concretely? What is one step toward living from that source this week?",
    "Joel&rsquo;s final words are: &ldquo;The LORD dwells in Zion.&rdquo; Presence is the last word. Where in your life do you most need to be reminded that God is present rather than absent?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d0019 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Joel 2:28&ndash;3:21</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Joel 3 Study Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: "0 0 24px" }}>
            The Spirit poured out on all flesh. The Day of the LORD. The valley of Jehoshaphat. A fountain flowing from the house of God.
          </p>
          <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}44`, borderRadius: 10, padding: "16px 20px", maxWidth: 640 }}>
            <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>KEY VERSE &mdash; JOEL 2:28</div>
            <div style={{ fontStyle: "italic", lineHeight: 1.7, color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions.&rdquo;" }} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
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
                color: tab === t ? PURPLE : MUTED,
                borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>Overview</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Joel is one of the shortest and most quoted books in the Hebrew Bible. We do not know exactly when Joel prophesied &mdash; the book gives no Assyrian or Babylonian king as a reference point &mdash; but the content suggests a post-exilic or late pre-exilic setting. What we do know is that Joel uses a locust plague as the canvas for a vision of cosmic proportions: the Day of the LORD is coming, and with it both devastating judgment and unexpected salvation." }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 14, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Joel" },
                { label: "Focus", value: "Joel 2:28 &ndash; 3:21" },
                { label: "Theme", value: "Spirit, Day of the LORD, Restoration" },
                { label: "Key Verse", value: "Joel 2:28" },
                { label: "NT Connection", value: "Acts 2:17&ndash;21; Romans 10:13" },
                { label: "Category", value: "Minor Prophets" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  <div style={{ fontWeight: 600, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>The Structure of Joel 2:28 &ndash; 3:21</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Joel 2:28&ndash;29", desc: "The Spirit poured out on all flesh &mdash; sons, daughters, old men, young men, servants" },
                  { ref: "Joel 2:30&ndash;31", desc: "Wonders in heaven and earth before the Day of the LORD" },
                  { ref: "Joel 2:32", desc: "Everyone who calls on the name of the LORD shall be saved" },
                  { ref: "Joel 3:1&ndash;8", desc: "Restoration of Judah; indictment of nations for scattering God&rsquo;s people" },
                  { ref: "Joel 3:9&ndash;17", desc: "Beat your plowshares into swords &mdash; the nations summoned to the valley of decision" },
                  { ref: "Joel 3:18&ndash;21", desc: "Mountains dripping wine; a fountain from the house of the LORD; Judah inhabited forever" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: p.ref }} />
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: 15, color: GOLD }}>Historical &amp; Canonical Context</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Joel stands at a significant canonical juncture. In the Hebrew canon, Joel is placed between Hosea and Amos, linking the themes of covenant unfaithfulness (Hosea), the Spirit&rsquo;s democratization (Joel), and justice for the poor (Amos). The locust plague of Joel 1&ndash;2 provides the immediate occasion, but Joel 2:28&ndash;3:21 lifts the gaze to the eschatological horizon. The book is remarkable for containing no specific historical references, making it equally applicable across time &mdash; which may explain why NT writers found it so useful." }} />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: 15, color: ROSE }}>New Testament Connections</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Peter&rsquo;s Pentecost sermon (Acts 2:14&ndash;21) quotes Joel 2:28&ndash;32 as the interpretive framework for what the disciples experienced. For Peter, tongues and proclamation are the Spirit being &ldquo;poured out on all flesh.&rdquo; Paul in Romans 10:13 cites Joel 2:32 to ground the universality of the gospel. The cosmic imagery of Joel 2:30&ndash;31 reappears in the Synoptic apocalypse (Matthew 24:29; Luke 21:25) and in Revelation 6:12. Joel is the prophetic DNA of the NT&rsquo;s pneumatology and soteriology." }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>The Versification Note</h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "English Bibles differ from the Hebrew (Masoretic Text) in their chapter divisions for Joel. What is Joel 2:28&ndash;32 in most English Bibles corresponds to Joel 3:1&ndash;5 in the Hebrew. What English Bibles call Joel 3:1&ndash;21 is Joel 4:1&ndash;21 in the Hebrew. This guide uses the standard English versification: Joel 2:28&ndash;32 for the Spirit-outpouring passage, and Joel 3 for the judgment-and-restoration oracles. Cross-referencing with a Hebrew Bible or some European translations may show different chapter numbers." }} />
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Joel 2:28&ndash;3:21 weaves together pneumatology (the doctrine of the Spirit), eschatology (the Day of the LORD), covenant theology (God&rsquo;s faithfulness to his people), and protology (the new creation). These are not separate topics; they form a single, interlocking vision." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {themeItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 14 }}>Cross-References: Joel in Conversation with Scripture</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "Acts 2:17&ndash;21", note: "Peter quotes Joel 2:28&ndash;32 as the interpretation of Pentecost" },
                  { ref: "Romans 10:13", note: "Paul quotes Joel 2:32 &mdash; &ldquo;everyone who calls on the name of the LORD shall be saved&rdquo;" },
                  { ref: "Ezekiel 47:1&ndash;12", note: "The temple stream that becomes a life-giving river &mdash; parallel to Joel 3:18" },
                  { ref: "Isaiah 2:4 / Micah 4:3", note: "Swords into plowshares &mdash; the vision Joel deliberately reverses in 3:10" },
                  { ref: "Amos 1:2", note: "The LORD roars from Zion &mdash; the same image as Joel 3:16" },
                  { ref: "Revelation 22:1&ndash;2", note: "River of life from the throne &mdash; fulfillment of the temple-fountain of Joel 3:18" },
                ].map(cr => (
                  <div key={cr.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 140, paddingTop: 1 }} dangerouslySetInnerHTML={{ __html: cr.ref }} />
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: cr.note }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "A detailed walk through Joel 2:28&ndash;3:21, tracing the movement from the Spirit&rsquo;s outpouring through cosmic wonders to divine judgment and final restoration." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 14 }}>Reading Joel Canonically</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Joel 2:28&ndash;3:21 is best read as the <em>resolution</em> of the locust plague in Joel 1:1&ndash;2:27. The agricultural disaster (stripped vines, failed grain) finds its reversal in the mountains dripping wine (3:18). The ritual mourning of Joel 1:13&ndash;14 is answered by the joyful proclamation of Acts 2. The call to &ldquo;return to the LORD&rdquo; (2:13) is met by God&rsquo;s own initiative: he pours out his Spirit. The shape of the book teaches that repentance does not earn the Spirit &mdash; the Spirit is the gift God gives to the community that has been emptied of self-sufficiency by disaster and has turned back to him in genuine humility." }} />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Joel is not an ancient curiosity &mdash; it is a living word. The Spirit poured out at Pentecost has not been withdrawn. The Day of the LORD is still coming. The fountain from the house of the LORD is still flowing. Here is how these truths address your life today." }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {appItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            {/* Reflection Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQs.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: PURPLE, fontWeight: 800, flexShrink: 0, fontSize: 16, paddingTop: 1 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Joel through these teaching resources on the Spirit, the Day of the LORD, and the minor prophets." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}18 0%, ${CARD} 100%)`, border: `1px solid ${PURPLE}33`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 14 }}>Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 15, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Lord God, you are the one who pours out your Spirit on all flesh &mdash; on sons and daughters, old and young, servants and free. We confess that we often live as though the Spirit is for others, as though prophecy and vision and dreams belong to a special class of people and not to us. Forgive us. You have poured out your Spirit; teach us to live from that abundance.<br/><br/>We thank you that you hold the nations in your hands &mdash; that no act of injustice, no scattering of the vulnerable, no shedding of innocent blood is beyond your knowledge or outside your justice. Give us courage to trust your judgment when we cannot see it working.<br/><br/>And Lord, let the fountain from your house flow through us &mdash; into the dry places of our lives, our communities, the world. Let the mountains drip with your grace. Be the last word over our darkness, as you have promised. The LORD dwells in Zion &mdash; and that is enough. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
