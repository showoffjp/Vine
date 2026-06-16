"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "overview" | "themes" | "versebyverse" | "application";

export default function Isaiah26GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "9Xnn2QLZX2Y", title: "Isaiah 26 -- The Song of the Strong City" },
    { videoId: "GbLVPT5H7TA", title: "Isaiah 26:3 -- Perfect Peace for Those Who Trust" },
    { videoId: "kzpMBKqgmFk", title: "Isaiah 24-27 -- The Isaiah Apocalypse" },
    { videoId: "J6vZ8gBEBGc", title: "Isaiah 26:19 -- The Resurrection Hope in the Old Testament" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0d0d1a 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${TEAL}18`, border: `1px solid ${TEAL}40`, borderRadius: 24, padding: "4px 18px", fontSize: 13, color: TEAL, fontWeight: 700, marginBottom: 18, letterSpacing: "0.04em" }}>
            ISAIAH 26
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The Song of the Strong City
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 26 is a song of trust planted inside the Isaiah Apocalypse (chapters 24&ndash;27). While the lofty city of human pride is brought to dust, the people of God sing in the strong city whose walls are salvation itself &mdash; and where the LORD keeps in perfect peace the mind that is stayed on him." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Isaiah 24-27", color: TEAL },
              { label: "Song of Trust", color: PURPLE },
              { label: "Perfect Peace", color: GREEN },
              { label: "Resurrection Hope", color: GOLD },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: badge.color, fontWeight: 700 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key verse banner */}
      <div style={{ background: `${TEAL}12`, borderTop: `1px solid ${TEAL}30`, borderBottom: `1px solid ${TEAL}30`, padding: "20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 18, fontStyle: "italic", color: TEXT, margin: 0, lineHeight: 1.65 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;You will keep him in perfect peace whose mind is stayed on you, because he trusts in you.&rdquo; &mdash; Isaiah 26:3" }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, marginBottom: 36 }}>
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "11px 8px",
                borderRadius: 9,
                border: "none",
                background: activeTab === t.id ? TEAL : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL AND LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 14, margin: "0 0 14px" }}>The Isaiah Apocalypse</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 24&ndash;27 stands apart within the book as a sustained prophetic vision of cosmic judgment and ultimate restoration. Scholars have called it &ldquo;the Isaiah Apocalypse&rdquo; because it shares the sweeping, cosmic scope of later apocalyptic literature: the earth is devastated (24:1), the powers above and below are judged (24:21), and death itself is swallowed up in victory (25:8)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 26 is the second of two songs embedded in this section. After the song of praise in chapter 25, chapter 26 gives us a song to be sung &ldquo;in that day&rdquo; &mdash; the day of the LORD&rsquo;s ultimate vindication &mdash; in the land of Judah (v.1). It is both a future song and a present song: believers rehearse it now as an act of trust in the God who holds the future." }}
              />
            </div>

            {/* Two columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE STRONG CITY</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Walls of Salvation</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The song opens with a declaration: &ldquo;We have a strong city; he sets up salvation as walls and bulwarks&rdquo; (v.1). The city of God is strong not because of its military fortifications but because its walls are salvation itself. This is a theological claim: the defense of God&rsquo;s people is entirely the work of God. The gate opens to the righteous nation that keeps faith." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE LOFTY CITY</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Laid Low to the Dust</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Set against the strong city is the lofty city &mdash; the city of human pride and self-sufficiency. The LORD lays it low (v.5), even to the dust, and the feet of the poor and needy trample it down. This reversal is a recurring prophetic pattern: what exalts itself before God will be humbled; what is humble before God will be exalted. The lofty city need not be identified with one specific historical city &mdash; it is the type of every city that trusts in itself." }}
                />
              </div>
            </div>

            {/* Memory verses */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 16 }}>KEY MEMORY VERSES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${TEAL}` }}>
                  <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 26:3</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;You will keep him in perfect peace whose mind is stayed on you, because he trusts in you.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 26:4</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Trust in the LORD forever, for the LORD GOD is an everlasting Rock.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 26:19</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Your dead shall live; their bodies shall rise. You who dwell in the dust, awake and sing for joy!&rdquo;" }}
                  />
                </div>
              </div>
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 14 }}>STRUCTURE OF THE CHAPTER</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-6", title: "The Song of the Strong City", color: TEAL, summary: "The city whose walls are salvation; the lofty city brought low" },
                  { ref: "vv. 7-10", title: "The Path of the Righteous", color: GREEN, summary: "The level path; the desire of the soul for God; the lesson the wicked fail to learn" },
                  { ref: "vv. 11-15", title: "LORD, Your Hand Is Lifted Up", color: PURPLE, summary: "The blindness of those who do not see God&rsquo;s action; past deliverances" },
                  { ref: "vv. 16-19", title: "Distress and Resurrection", color: GOLD, summary: "Crying out in trouble; the failed birth -- wind; then the great reversal: the dead shall live" },
                  { ref: "vv. 20-21", title: "Hide Until the Fury Passes", color: "#E11D48", summary: "Enter your chambers; the LORD comes to punish the earth&rsquo;s inhabitants" },
                ].map((s) => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ minWidth: 72, color: s.color, fontWeight: 800, fontSize: 13, paddingTop: 1 }}>{s.ref}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.summary }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfect Peace note */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>A NOTE ON &ldquo;PERFECT PEACE&rdquo;</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The Hebrew of verse 3 is shalom shalom &mdash; a doubled word for emphasis. The LORD keeps in shalom shalom the mind (or imagination, yetzer) that is leaned on (samak) God. The word for &ldquo;stayed&rdquo; conveys weight and trust: the mind that rests its full weight on God, that leans into God rather than its own understanding (Proverbs 3:5). This is not a passive emptying of the mind but an active, directed trust &mdash; a turning of the imagination toward God and holding it there. The result is a doubled, overflowing peace that the circumstances cannot supply and cannot take away." }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Key Themes in Isaiah 26</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "The chapter weaves together several interlocking themes that address the question: what does it look like to trust God in a world of collapsing cities and rising powers?" }}
              />
            </div>

            {[
              {
                color: TEAL,
                title: "The Strong City vs. the Lofty City",
                icon: "The Two Cities",
                body1: "Isaiah 26 presents two contrasting cities. The strong city is the city God establishes &mdash; its walls are not stone but salvation (v.1). The gate is opened to the righteous who keep faith (v.2). By contrast, the lofty city (v.5) is brought low &mdash; its pride is its undoing. The Hebrew word for &ldquo;lofty&rdquo; (sagav) can also mean &ldquo;exalted,&rdquo; implying a city that has exalted itself. God brings it to the ground, to the dust, and the feet of the humble trample it.",
                body2: "This two-city contrast runs throughout biblical prophecy: Babylon versus Jerusalem, the city of man versus the city of God (Augustine&rsquo;s great theological framework). Isaiah 26 invites God&rsquo;s people to locate themselves in the strong city &mdash; not by geography but by trust. Those who trust in the LORD are already citizens of the city whose walls are salvation.",
              },
              {
                color: GREEN,
                title: "Perfect Peace for the Stayed Mind",
                icon: "Shalom Shalom",
                body1: "Verse 3 is perhaps the most memorized verse in the entire Isaiah Apocalypse: &ldquo;You will keep him in perfect peace whose mind is stayed on you, because he trusts in you.&rdquo; The Hebrew shalom shalom signals an emphatic, doubled peace &mdash; not merely the absence of distress but an overflowing, stable well-being. The condition is a mind &ldquo;stayed&rdquo; on God &mdash; the yetzer (imagination, inner self) that is leaned against God with its full weight.",
                body2: "This is not automatic. The very next verse issues a command: &ldquo;Trust in the LORD forever.&rdquo; Perfect peace is not a passive experience but the fruit of active, ongoing trust. The mind tends to drift toward anxiety, self-reliance, and the lofty city. Keeping it stayed on God is a discipline &mdash; not a single decision but a daily practice of returning the imagination to its proper home.",
              },
              {
                color: GOLD,
                title: "The Everlasting Rock",
                icon: "Rock of Ages",
                body1: "Verse 4 gives the reason to trust forever: &ldquo;for the LORD GOD is an everlasting Rock.&rdquo; The Hebrew Tsur Olamim (Rock of Ages) became the basis for Augustus Toplady&rsquo;s famous hymn. A rock is what you lean on when everything around you is shifting. The everlasting Rock is the permanent, immovable foundation that neither earthquake nor empire can dislodge.",
                body2: "This metaphor is not merely comfort &mdash; it is a theological claim about the nature of God. The LORD does not change, does not tire, does not fail. Empires rise and fall; the strong city of human achievement turns to dust; but the Rock remains. To trust in the LORD forever is reasonable, because the object of that trust is a Rock that is genuinely eternal.",
              },
              {
                color: PURPLE,
                title: "Righteousness and the Path of the Just",
                icon: "The Level Path",
                body1: "Verses 7&ndash;10 explore the path of the righteous. &ldquo;The path of the righteous is level; you make level the way of the righteous&rdquo; (v.7). The picture is of a road that has been prepared, cleared of obstacles, made straight for travel. God himself is the road-builder, and the righteous walk a path he has prepared.",
                body2: "Verse 8&ndash;9 shift to a first-person declaration of longing: &ldquo;Your name and remembrance are the desire of our soul. My soul yearns for you in the night; my spirit within me earnestly seeks you.&rdquo; This is one of the most intense expressions of godly desire in the Hebrew prophets. The soul that trusts in the everlasting Rock does not merely acknowledge him &mdash; it longs for him. Verse 10 introduces the dark contrast: if favor is shown to the wicked, they still do not learn righteousness. The problem with the unrighteous is not ignorance but orientation.",
              },
              {
                color: "#E11D48",
                title: "Resurrection Hope",
                icon: "The Dead Shall Live",
                body1: "Isaiah 26:19 is one of the clearest affirmations of bodily resurrection in the Old Testament: &ldquo;Your dead shall live; their bodies shall rise. You who dwell in the dust, awake and sing for joy!&rdquo; This comes immediately after the lament of verses 16-18, where Israel confesses that her labors have produced only wind &mdash; she was pregnant with pain but gave birth to nothing. The resurrection promise is the divine answer to this failure.",
                body2: "The connection is essential: the lament of verses 16-18 is not ultimately about political defeat but about the inability of human effort to produce life. The answer is not better strategy but resurrection &mdash; a life that only God can give. Verse 19 anticipates the New Testament affirmation that the last enemy is death, and that God&rsquo;s answer to death is not consolation but victory. Paul&rsquo;s &ldquo;O death, where is your sting?&rdquo; echoes this prophetic soil.",
              },
              {
                color: TEAL,
                title: "Hiddenness Before the Wrath Passes",
                icon: "Enter Your Chambers",
                body1: "The chapter closes in verses 20-21 with an urgent command: &ldquo;Come, my people, enter your chambers, and shut your doors behind you; hide yourselves for a little while until the fury has passed by.&rdquo; This is the hiddenness theme: when divine judgment comes upon the earth, God&rsquo;s people find safety not by escape but by sheltering in God himself.",
                body2: "The &ldquo;chambers&rdquo; have been interpreted as the secret place of prayer, the community of the church, or simply the interior life of trust. What matters is the posture: the people do not try to stop the judgment or flee it &mdash; they enter in, shut the door, and trust that the wrath will pass. This is closely related to the Passover narrative (Exodus 12), where Israel was commanded to stay inside while the destroyer passed over. God&rsquo;s protection is real, but it requires the people to actually take shelter in it.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ color: theme.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 8 }}>{theme.icon}</div>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 19, margin: "0 0 14px" }}>{theme.title}</h3>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Verse by Verse: Isaiah 26</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage study of the chapter&rsquo;s movements, noting key words, connections, and interpretive questions." }}
              />
            </div>

            {[
              {
                ref: "Verses 1-6",
                color: TEAL,
                heading: "The Song of the Strong City",
                verses: [
                  { v: "v.1", text: "\"In that day this song will be sung in the land of Judah: We have a strong city; he sets up salvation as walls and bulwarks.\"", note: "The song is eschatological -- sung &ldquo;in that day,&rdquo; the day of the LORD&rsquo;s action. But it is also sung now, in anticipation. The city&rsquo;s walls are not military works but salvation itself &mdash; God&rsquo;s saving action is the fortress." },
                  { v: "v.2", text: "\"Open the gates, that the righteous nation that keeps faith may enter in.\"", note: "Admission to the strong city is not ethnic or national but ethical: those who keep faith (emunah -- faithfulness, steadiness, trustworthiness) are the ones for whom the gate opens. This anticipates the New Testament theme of faith as the entryway." },
                  { v: "v.3", text: "\"You will keep him in perfect peace whose mind is stayed on you, because he trusts in you.\"", note: "Shalom shalom &mdash; doubled peace &mdash; for the mind (yetzer) stayed (samak, leaning with weight) on God. The perfect peace is not a feeling to be produced but a gift to the trusting mind. The cause is trust; the effect is peace." },
                  { v: "v.4", text: "\"Trust in the LORD forever, for the LORD GOD is an everlasting Rock.\"", note: "Tsur Olamim: the Rock of Ages. The command to trust forever is grounded in the character of the Rock. You can trust forever because the Rock never shifts." },
                  { v: "vv.5-6", text: "\"For he has humbled the inhabitants of the height, the lofty city. He lays it low, lays it low to the ground, casts it to the dust. The foot tramples it, the feet of the poor, the steps of the needy.\"", note: "The inversion: the lofty city is brought to the dust and trampled by the poor. Those who had no standing in the city of human pride now walk over its ruins. This is the Magnificat logic (Luke 1:52): he has brought down the mighty from their thrones and exalted those of humble estate." },
                ],
              },
              {
                ref: "Verses 7-10",
                color: GREEN,
                heading: "The Path of the Righteous",
                verses: [
                  { v: "vv.7-8", text: "\"The path of the righteous is level; you make level the way of the righteous. In the path of your judgments, O LORD, we wait for you; your name and remembrance are the desire of our soul.\"", note: "The level path is not an accident -- it is made by God. The community waiting in the path of God&rsquo;s judgments is not passive resignation but active expectation. The intensity of longing in v.8 is striking: the name and remembrance of God are the desire (avvah, deep craving) of the soul." },
                  { v: "v.9", text: "\"My soul yearns for you in the night; my spirit within me earnestly seeks you. For when your judgments are in the earth, the inhabitants of the world learn righteousness.\"", note: "Night seeking: the longing does not turn off with the day. The prophetic claim is that God&rsquo;s judgments in the earth are pedagogical &mdash; they teach righteousness to those who are willing to learn." },
                  { v: "v.10", text: "\"If favor is shown to the wicked, he does not learn righteousness; in the land of uprightness he deals corruptly and does not see the majesty of the LORD.\"", note: "The problem with the wicked is not that they lack information but that they are not oriented toward God. Even in a land of uprightness, they deal corruptly. Even when grace is shown, they do not learn. This is the hardened heart that sees and does not see." },
                ],
              },
              {
                ref: "Verses 11-15",
                color: PURPLE,
                heading: "LORD, Your Hand Is Lifted Up",
                verses: [
                  { v: "vv.11-12", text: "\"O LORD, your hand is lifted up, but they do not see it. Let them see your zeal for your people, and be ashamed. Let the fire for your adversaries consume them. O LORD, you will ordain peace for us, for you have indeed done for us all our works.\"", note: "God&rsquo;s hand is actively raised &mdash; but the wicked are blind to it. The prayer is that they would be made to see. Then the confession: all our works are from you. This is total dependence: even the good we do is the work of God in us." },
                  { v: "vv.13-15", text: "\"O LORD our God, other lords besides you have ruled over us, but your name alone we bring to remembrance. They are dead, they will not live; they are shades, they will not arise; to that end you have visited them with destruction and wiped out all remembrance of them. But you have increased the nation, O LORD, you have increased the nation; you are glorified; you have enlarged all the borders of the land.\"", note: "The other lords are dead &mdash; literally and ultimately. Empires that ruled over Israel have been destroyed; their remembrance is wiped out. But the LORD has increased the nation. This is historical faith: looking back at what God has done as ground for present trust." },
                ],
              },
              {
                ref: "Verses 16-19",
                color: GOLD,
                heading: "Distress, Failed Birth, and Resurrection",
                verses: [
                  { v: "vv.16-18", text: "\"O LORD, in distress they sought you; they poured out a whispered prayer when your discipline was upon them. Like a pregnant woman who writhes and cries out in her pangs when she is near to giving birth, so were we because of you, O LORD; we were pregnant, we writhed, but we have given birth to wind.\"", note: "One of the most honest confessions in the Prophets. The community cried out in discipline &mdash; they sought God in trouble, not from devotion but from need (a recurring pattern: see Judges&rsquo; cycle). But even their straining produced nothing: wind, emptiness. Human effort, even Spirit-inspired longing, cannot by itself produce the life God intends." },
                  { v: "v.19", text: "\"Your dead shall live; their bodies shall rise. You who dwell in the dust, awake and sing for joy! For your dew is a dew of light, and the earth will give birth to the dead.\"", note: "The divine reversal. The people gave birth to wind; God gives birth to the dead. The dew of light is creation language &mdash; the dew that brings life in a dry land. The earth that received the dead will give them back. This is Old Testament resurrection: bodily, joyful, and entirely the work of God. It anticipates Daniel 12:2 and the New Testament hope." },
                ],
              },
              {
                ref: "Verses 20-21",
                color: "#E11D48",
                heading: "Hide Until the Fury Passes",
                verses: [
                  { v: "v.20", text: "\"Come, my people, enter your chambers, and shut your doors behind you; hide yourselves for a little while until the fury has passed by.\"", note: "The Passover echo is strong: Israel was commanded to stay inside while the destroyer passed (Exodus 12:22-23). God&rsquo;s people are not immune to judgment on the earth, but God provides a shelter &mdash; &ldquo;your chambers&rdquo; -- where they wait in trust. &ldquo;A little while&rdquo; (katon rega) is eschatologically significant: the fury is terrible but bounded. It will pass." },
                  { v: "v.21", text: "\"For behold, the LORD is coming out from his place to punish the inhabitants of the earth for their iniquity, and the earth will disclose the bloodshed on it, and will no more cover its slain.\"", note: "The reason for hiding: the LORD is coming in judgment. The earth itself will testify &mdash; the blood that was shed and covered will be uncovered (see Genesis 4:10, Abel&rsquo;s blood crying from the ground). The judgment is not arbitrary; it is the disclosure of what was hidden, the reckoning that makes creation honest. God&rsquo;s people are not objects of this wrath &mdash; they are sheltered from it while it falls on those who refused the strong city." },
                ],
              },
            ].map((section, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: section.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 6 }}>{section.ref}</div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 20, margin: 0 }}>{section.heading}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {section.verses.map((verse, j) => (
                    <div key={j} style={{ background: BG, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: section.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{verse.v}</div>
                      <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 10px", borderLeft: `2px solid ${section.color}50`, paddingLeft: 12 }}
                        dangerouslySetInnerHTML={{ __html: verse.text }}
                      />
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: verse.note }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Living Isaiah 26 Today</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 26 is not ancient theory &mdash; it is a song to be sung by God&rsquo;s people in every generation when the lofty cities of human pride are collapsing and the path of trust seems difficult. Here is how the chapter&rsquo;s movements speak to daily life." }}
              />
            </div>

            {[
              {
                color: TEAL,
                number: "01",
                title: "Trust God as Your Only City of Refuge",
                verses: "Isaiah 26:1-2",
                body1: "We are all tempted to build our security in lofty cities &mdash; financial stability, reputation, institutional affiliation, political power. Isaiah 26 does not say these things are evil, but it asks: where are your walls? The person who trusts in the strong city is the one who has decided that the walls God builds &mdash; walls of salvation &mdash; are more durable than anything else.",
                body2: "Practically: Name the lofty cities you lean on. What would be left of your sense of security if the career ended, the relationship failed, the institution collapsed? The answer reveals how much of your weight is on the Rock and how much is on lofty structures. The prayer is not to remove all earthly goods but to stop making them your walls.",
                practice: "Psalm 62:5-8 is a companion meditation: &ldquo;For God alone, O my soul, wait in silence, for my hope is from him. He only is my rock and my salvation, my fortress; I shall not be shaken.&rdquo; Pray this when a lofty city in your life shakes.",
              },
              {
                color: GREEN,
                number: "02",
                title: "The Discipline of the Stayed Mind",
                verses: "Isaiah 26:3-4",
                body1: "Verse 3 is a promise, but the verse that follows is a command: &ldquo;Trust in the LORD forever.&rdquo; The perfect peace is not passive &mdash; it comes to the mind that is actively kept stayed on God. The Hebrew yetzer includes the imagination, the inner narrative we tell ourselves, the default channel the mind tunes to when left alone.",
                body2: "The spiritual discipline here is the practice of returning. The mind wanders &mdash; into anxiety, into self-reliance, into the news cycle, into worst-case scenarios. The practice of the stayed mind is not that it never wanders but that it returns. Monastic traditions called this &ldquo;recollection.&rdquo; The mind collects itself around God as its center, again and again throughout the day. Shalom shalom is the fruit of this practice over time.",
                practice: "Choose one point in your day &mdash; morning, lunch, before sleep &mdash; to deliberately return your mind to God. Write Isaiah 26:3 on a card and read it at that moment. Do this for thirty days. The practice is the discipline; the peace is the gift.",
              },
              {
                color: GOLD,
                number: "03",
                title: "Resurrection Hope in the Face of Death",
                verses: "Isaiah 26:16-19",
                body1: "Verses 16-18 name the lament honestly: we sought you in distress, we labored, we gave birth to wind. There is a form of Christian life that is all striving and no fruit &mdash; all effort and no life. The prophetic answer is not more effort but resurrection. The God who gives birth to the dead out of the dust is the one who can take our failed labors and raise something from them that we could not have produced.",
                body2: "Isaiah 26:19 is one of the clearest resurrection texts in the Old Testament. It teaches that resurrection is not a New Testament innovation but the deep logic of who God is. The God who creates ex nihilo is the God who raises the dead. This hope is not escapism but the ground of perseverance: whatever the enemy of death has taken, it is not the last word. The earth will give back its dead, and those who dwell in the dust will awake and sing for joy.",
                practice: "Read 1 Corinthians 15:50-58 alongside Isaiah 26:19. Let the resurrection hope be specific: what has death taken from you &mdash; a person, a dream, a version of yourself &mdash; that you need to entrust to the God who raises the dead? Bring that grief and that hope before God in prayer.",
              },
              {
                color: PURPLE,
                number: "04",
                title: "Hiding in God During Seasons of Judgment",
                verses: "Isaiah 26:20-21",
                body1: "The world is not becoming a safer place. Judgment moves through history &mdash; not always in ways we can identify clearly, but Isaiah 26:21 is frank: the LORD comes to punish the earth&rsquo;s inhabitants, and the blood that has been shed and covered will be uncovered. Christians are not exempt from living in seasons of upheaval and judgment. What they have is a shelter.",
                body2: "The command to &ldquo;enter your chambers&rdquo; is not a command to disengage from the world but to find your center before you engage it. The person who rushes from anxiety to action without entering the chambers first will be driven by the same fear as the world around them. Entering the chambers means: prayer before response, stillness before strategy, trusting that the fury is &ldquo;a little while&rdquo; and that the LORD holds the outcome. This is the peace that surpasses understanding (Philippians 4:7) &mdash; the ability to hold steady in a world that is being shaken.",
                practice: "Before you respond to the next overwhelming news cycle or personal crisis, enter the chambers: take twenty minutes to sit before God in silence, bring the situation to him in specific prayer, and confess that the outcome is his to determine. Then act from that place of shelter rather than from fear.",
              },
              {
                color: "#E11D48",
                number: "05",
                title: "Seeking God in Trouble, Not Just in Comfort",
                verses: "Isaiah 26:8-9, 16",
                body1: "One of the sobering patterns in Isaiah 26 is that the community sought God when his discipline was upon them (v.16) &mdash; but in verse 8-9, the longing for God is not coerced by trouble; it is the natural orientation of the soul that truly trusts. The question Isaiah 26 puts to us is: is our seeking of God primarily reactive (distress-driven) or primary (desire-driven)?",
                body2: "The Psalms of longing &mdash; 42, 63, 84 &mdash; model desire-driven seeking: &ldquo;My soul thirsts for God, for the living God.&rdquo; Isaiah 26:9 belongs in that tradition. The soul that yearns for God in the night is not seeking him merely because trouble has come but because God himself is the desire of the soul. This is the deepest formation: moving from seeking God in trouble to loving God for himself.",
                practice: "Read Psalm 63 slowly. Then ask: do I seek God because of what I need from him, or because of who he is? Both are legitimate starting points &mdash; but formation moves us toward the latter. Write a prayer of longing that is not driven by any specific crisis. Practice seeking God when nothing is wrong.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}50`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{item.number}</div>
                  <div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 4 }}>{item.verses}</div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: item.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.body2 }}
                />
                <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", marginBottom: 6 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.practice }}
                  />
                </div>
              </div>
            ))}

            {/* Closing exhortation */}
            <div style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>SUMMARY</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Isaiah 26 as a Song for Our Moment</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 26 was written for people who could see the lofty cities around them &mdash; the empires, the powers, the institutions &mdash; and wondered whether God&rsquo;s strong city was real. The answer the chapter gives is not political strategy or optimistic prediction; it is a song. The people of God sing this song not because the trouble is over but because the Rock is everlasting, the peace is perfect, and the dead shall live. The song is an act of trust before the outcome is visible. That is what faith is: the substance of things hoped for, the evidence of things not seen. Enter the chambers. Stay your mind. Wait for the fury to pass. The morning is coming." }}
              />
            </div>
          </div>
        )}

        {/* Video section -- always visible below tabs */}
        <div style={{ marginTop: 48, marginBottom: 60 }}>
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 28 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 26 and the Isaiah Apocalypse &mdash; for deeper study and group use." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Isaiah 26 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
