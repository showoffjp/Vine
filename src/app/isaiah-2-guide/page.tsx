"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "theology" | "formation" | "videos";

const VERSES = [
  {
    id: "v1",
    ref: "Isaiah 2:1",
    heading: "The Word Isaiah Saw",
    color: TEAL,
    body: "The chapter opens with a superscription that frames everything that follows: &ldquo;The word that Isaiah the son of Amoz saw concerning Judah and Jerusalem.&rdquo; The verb &ldquo;saw&rdquo; (Hebrew: <em>chazah</em>) marks this as prophetic vision &mdash; not merely heard speech but visionary perception. Isaiah is not reporting observation; he is communicating divine disclosure. The same introductory formula appears in Micah 1:1, and Micah 4:1&ndash;3 is virtually identical to Isaiah 2:2&ndash;4, suggesting a shared prophetic tradition about the eschatological destiny of Zion. The double addressee &mdash; &ldquo;Judah and Jerusalem&rdquo; &mdash; signals that this word is aimed at the covenant people in their institutional and geographical particularity. This is not a word to the nations in the first instance; it is a word about them, for Israel&rsquo;s benefit.",
  },
  {
    id: "v2",
    ref: "Isaiah 2:2-3",
    heading: "The Mountain of the LORD Established",
    color: GREEN,
    body: "Verses 2&ndash;3 contain one of the most magnificent eschatological visions in all of Scripture. &ldquo;It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains, and shall be lifted up above the hills; and all the nations shall flow to it.&rdquo; Several details demand attention. First, the phrase &ldquo;latter days&rdquo; (Hebrew: <em>acharit ha-yamim</em>) does not simply mean &ldquo;the future&rdquo; but refers to the eschatological horizon &mdash; the culmination of history under God&rsquo;s sovereign direction. Second, the image of the mountain &ldquo;established as the highest&rdquo; is a claim about cosmic authority. In the ancient Near East, the mountain of the gods was the seat of divine rule; Isaiah is declaring that YHWH&rsquo;s mountain will surpass all rival claims to divine sovereignty. Third &mdash; and most striking &mdash; the nations &ldquo;flow&rdquo; to it. The Hebrew verb <em>nahar</em> means to flow like a river, a word typically used of water running downhill. Here the nations are depicted as a river flowing <em>uphill</em> to the mountain of the LORD &mdash; a reversal of nature that signals the supernatural character of this gathering. It is not military conquest but magnetic attraction: the nations come freely, drawn by the word of God radiating from Zion.",
  },
  {
    id: "v3",
    ref: "Isaiah 2:3",
    heading: "Torah Going Out from Zion",
    color: PURPLE,
    body: "&ldquo;Come, let us go up to the mountain of the LORD, to the house of the God of Jacob, that he may teach us his ways and that we may walk in his paths. For out of Zion shall go forth the law, and the word of the LORD from Jerusalem.&rdquo; The nations speak in the first person plural &mdash; they invite one another. This is a spontaneous, self-generating pilgrimage, not a forced march. They go to be taught: &ldquo;that he may teach us his ways.&rdquo; The goal of the pilgrimage is not ritual performance but instruction in the divine will. The Torah (<em>torah</em>) &mdash; which means instruction, guidance, direction &mdash; goes out from Zion to the world. This is a reversal of the Genesis pattern in which humanity scattered from the center (Babel, Genesis 11). Now the center draws everything back. The New Testament writers read this text as fulfilled in the mission of the church: the word going out from Jerusalem to all nations (Acts 1:8, Luke 24:47). The apostolic mission is the beginning of what Isaiah 2 envisions.",
  },
  {
    id: "v4",
    ref: "Isaiah 2:4",
    heading: "Swords into Plowshares",
    color: GOLD,
    body: "&ldquo;He shall judge between the nations and shall decide disputes for many peoples; and they shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.&rdquo; This is the most celebrated verse in Isaiah 2, and perhaps one of the most famous in all of prophetic literature &mdash; the image of weapons of war remade into tools of agriculture. The logic is precise: because the LORD himself will adjudicate international disputes (&ldquo;he shall judge between the nations&rdquo;), the nations will no longer need to settle them by force. War is, among other things, the effort to impose by violence what one cannot achieve by arbitration. When perfect arbitration exists, the instruments of war become redundant and can be repurposed for life. The inversion of Joel 3:10 (&ldquo;beat your plowshares into swords&rdquo;) is deliberate: Isaiah and Joel describe the same eschatological moment from opposite sides &mdash; Joel the gathering for final judgment, Isaiah the peace that follows. The phrase &ldquo;neither shall they learn war anymore&rdquo; implies that war is a learned behavior, a cultural curriculum that can be unlearned when its conditions are removed.",
  },
  {
    id: "v5",
    ref: "Isaiah 2:5",
    heading: "Walk in the Light of the LORD",
    color: TEAL,
    body: "&ldquo;O house of Jacob, come, let us walk in the light of the LORD.&rdquo; Verse 5 functions as a hinge in the chapter. The vision of the nations streaming to Zion (vv. 2&ndash;4) is followed immediately by a call to Israel: if this is where history is going, then begin now. The nations in the vision say &ldquo;come, let us go up&rdquo; (v. 3); now Isaiah uses the same invitation structure for Israel: &ldquo;come, let us walk.&rdquo; The irony is sharp: the nations are rushing toward the light while God&rsquo;s own people are abandoning it. &ldquo;Light of the LORD&rdquo; is a rich image. In Psalm 27:1, &ldquo;the LORD is my light and my salvation.&rdquo; In Psalm 119:105, the word of God is &ldquo;a lamp to my feet and a light to my path.&rdquo; Walking in the light means ordering one&rsquo;s life by the divine instruction &mdash; the very Torah that will go out from Zion to the nations. The application is painfully ironic: the nations will one day come to learn what Israel already has. Will Israel act on what it knows?",
  },
  {
    id: "v6",
    ref: "Isaiah 2:6-9",
    heading: "Israel&rsquo;s Spiritual Corruption",
    color: ROSE,
    body: "Verses 6&ndash;9 explain why the invitation of verse 5 is so urgent: God has, in some functional sense, &ldquo;rejected his people.&rdquo; The list of corruptions is precise. They are &ldquo;full of things from the east&rdquo; &mdash; Eastern religious practices, occult arts, divination. They are &ldquo;soothsayers like the Philistines&rdquo; &mdash; consulting mediums and fortune-tellers rather than the word of the LORD. Their land &ldquo;is filled with silver and gold, and there is no end to their treasures&rdquo; &mdash; economic confidence replacing trust in God. &ldquo;Their land is filled with horses, and there is no end to their chariots&rdquo; &mdash; military self-reliance replacing trust in divine protection (a theme elaborated in Isaiah 31:1). Their land &ldquo;is filled with idols.&rdquo; Six times the word &ldquo;filled&rdquo; appears (vv. 6&ndash;8): the land is full of everything except the one thing that matters. The contrast with vv. 2&ndash;4 is total: the nations will one day flow to the LORD; Israel has turned away to fill itself with substitutes. Verse 9 announces the consequence: &ldquo;Man is humbled, and each one is brought low.&rdquo;",
  },
  {
    id: "v7",
    ref: "Isaiah 2:10-17",
    heading: "The Day of the LORD",
    color: GOLD,
    body: "The middle section of Isaiah 2 (vv. 10&ndash;17) describes the Day of the LORD with relentless rhetorical force. The refrain &ldquo;the LORD alone will be exalted in that day&rdquo; appears in vv. 11 and 17, framing the whole section. Everything that is proud and lofty will be brought low: the cedars of Lebanon (the tallest trees), the oaks of Bashan, all high mountains, all lofty hills, every high tower, every fortified wall, all the ships of Tarshish, all beautiful craft (vv. 13&ndash;16). The list is comprehensive &mdash; natural, architectural, military, commercial. Nothing that human civilization has built up to make itself feel secure and magnificent will survive the scrutiny of that Day. The theological principle is stated twice: &ldquo;The haughty looks of man shall be brought low, and the lofty pride of men shall be humbled.&rdquo; The Day of the LORD is not primarily an event that happens to the nations; it is an event that happens to pride itself &mdash; wherever it is found, including in Israel. The prophet who sees the nations streaming to Zion in peace (vv. 2&ndash;4) also sees the catastrophic prerequisite: every human pretension must first be demolished.",
  },
  {
    id: "v8",
    ref: "Isaiah 2:18-22",
    heading: "Idols Abolished, Man Humbled",
    color: MUTED,
    body: "The chapter closes with the abolition of idols and a final exhortation. &ldquo;And the idols shall utterly pass away&rdquo; (v. 18). On the Day of the LORD, the idols that Israel has filled its land with (vv. 8&ndash;9) will simply disappear &mdash; not because they are overcome in battle but because they were never real competitors to YHWH in the first place. The wealthy and powerful will flee into holes in the rock and caves (v. 19), hiding from the terror of the LORD &mdash; precisely the opposite of the free, joyful pilgrimage of the nations in vv. 2&ndash;3. The chapter ends with one of the most sober commands in Isaiah: &ldquo;Stop regarding man in whose nostrils is breath, for of what account is he?&rdquo; (v. 22). This is the ultimate anti-idolatry statement: the humiliation of human pride on the Day of the LORD is the necessary soil in which the eschatological peace of vv. 2&ndash;4 can take root. Until pride is abolished, the swords cannot become plowshares.",
  },
];

const THEMES = [
  {
    id: "zion",
    label: "Zion Theology",
    color: GREEN,
    body: "Isaiah 2 is one of the foundational texts of what scholars call &ldquo;Zion theology&rdquo; &mdash; the theological tradition that sees Jerusalem and its temple mount as the earthly locus of divine rule. This tradition is found throughout the Psalms (Psalms 46, 48, 76, 84, 87), in Isaiah, Micah, Ezekiel, and Zechariah. The key claim is not merely that God chose Jerusalem as a residence, but that Zion is the cosmic mountain &mdash; the meeting point of heaven and earth where divine sovereignty is exercised over the entire created order. In Isaiah 2, this cosmic claim is eschatologized: Zion will be revealed as the highest mountain not in its present form but at the culmination of history. The nations will recognize what has always been true: that the LORD&rsquo;s mountain is the true cosmic center. Zion theology does not simply celebrate Jerusalem; it judges it. The same passage that promises Zion&rsquo;s future glory condemns present Jerusalem&rsquo;s idolatry. Zion&rsquo;s destiny stands as judgment on Zion&rsquo;s present.",
  },
  {
    id: "universalism",
    label: "Torah Universalism",
    color: PURPLE,
    body: "Isaiah 2:2&ndash;4 represents one of the most remarkable universalist passages in the Hebrew Bible. The nations &mdash; all nations &mdash; stream to Zion not to be absorbed into Israel but to receive Torah. They come as nations, maintaining their identities, but they come to be taught the ways of the God of Jacob. This is not the universalism of a lowest common denominator religion but of a specific revelation radiating outward from a particular center. The Torah that goes out from Zion is the same Torah given to Israel at Sinai. The vision assumes that what God revealed to Israel is not for Israel alone but carries within it the truth that all peoples need. This creates a profound missiological logic: Israel&rsquo;s election is not for Israel&rsquo;s benefit exclusively but for the world. The particular is the vehicle of the universal. This pattern structures the New Testament as well: the word goes out from Jerusalem (Acts 1:8) through a particular people (the apostles) in a particular language (Greek, via Hebrew) to all the nations.",
  },
  {
    id: "eschatology",
    label: "Eschatological Vision",
    color: GOLD,
    body: "The phrase &ldquo;in the latter days&rdquo; (<em>acharit ha-yamim</em>) marks Isaiah 2 as eschatological &mdash; concerned with the ultimate shape of history rather than merely its near future. But biblical eschatology is not simply prediction of distant events; it is the disclosure of the true direction of history, which shapes how one lives now. Isaiah 2 does not offer a timetable; it offers a destination. And the destination shapes the journey. If the nations will one day beat their swords into plowshares, then the community of God&rsquo;s people is called to begin practicing that peace now &mdash; to be, in the present, the first fruits of the eschatological community. The church has always read Isaiah 2 as partially fulfilled in the mission of Jesus and the Spirit &mdash; the word going out from Jerusalem, the nations streaming in &mdash; and as still awaiting its complete fulfillment at the consummation of all things. This &ldquo;already and not yet&rdquo; reading preserves both the urgency of present obedience and the hope of final completion.",
  },
  {
    id: "pride",
    label: "Pride and Humility",
    color: ROSE,
    body: "The structural center of Isaiah 2 is a theology of pride. The eschatological peace of vv. 2&ndash;4 (swords into plowshares) and the eschatological judgment of vv. 10&ndash;17 (cedars and towers brought low) are two sides of the same coin. Both concern the same event: the exaltation of the LORD alone. Peace is possible when human pride has been dismantled, because war is fundamentally an expression of pride &mdash; the insistence on one&rsquo;s own terms, rights, and supremacy over others. The Day of the LORD does not introduce a new agenda; it enforces the truth that has always been true: &ldquo;the LORD alone shall be exalted.&rdquo; Everything else was always provisional, derivative, and contingent. The practical implication for Israel &mdash; and for the reader &mdash; is that the judgment of the Day of the LORD is already at work in every moment of genuine humility before God. To walk in the light of the LORD (v. 5) is to anticipate the Day: to live now in the acknowledgment that the LORD alone is exalted.",
  },
  {
    id: "parallel",
    label: "Micah 4 Parallel",
    color: TEAL,
    body: "Isaiah 2:2&ndash;4 is almost word-for-word identical to Micah 4:1&ndash;3, one of the most striking literary parallels in the Hebrew prophets. Scholars have debated the direction of dependence &mdash; did Isaiah draw on Micah, or Micah on Isaiah, or did both draw on a common liturgical tradition? The consensus leans toward a shared prophetic tradition, possibly rooted in Zion temple liturgy. What is clear is that both prophets &mdash; who were contemporaries in the eighth century BC &mdash; regarded this vision as foundational. Micah follows the oracle with &ldquo;but we will walk in the name of the LORD our God forever and ever&rdquo; (Micah 4:5), a close parallel to Isaiah 2:5 (&ldquo;let us walk in the light of the LORD&rdquo;). Both prophets, in other words, draw the same practical conclusion from the eschatological vision: if this is where history is going, then begin walking that direction now. The parallel is not a problem to be solved but a testimony to the weight and centrality of this vision within prophetic tradition.",
  },
];

const videoItems = [
  { videoId: "0s7cCKLHS5Y", title: "Isaiah 2 - The Mountain of the LORD and Eschatological Peace" },
  { videoId: "ACO7SRDGPQM", title: "Swords into Plowshares - Isaiah 2:4 in Biblical Theology" },
  { videoId: "b9-8XCbGMGI", title: "Zion Theology in the Old Testament Prophets" },
  { videoId: "M7onSS6bjes", title: "The Day of the LORD - Isaiah and Prophetic Judgment" },
];

const FORMATION = [
  {
    heading: "From Pluralism to Pilgrimage",
    color: GREEN,
    body: "Isaiah 2:2&ndash;4 does not depict the nations abandoning their identities but flowing &mdash; as nations &mdash; to the mountain of the LORD. The eschatological vision is not uniformity but unified worship from diverse peoples. Formation practice: identify one person from a background very different from yours &mdash; culturally, ethnically, theologically &mdash; and pray for them this week by name. Then, if possible, share a meal or a conversation. Isaiah 2 envisions a gathering; begin practicing it now.",
  },
  {
    heading: "The Curriculum of Peace",
    color: PURPLE,
    body: "The nations beat their swords into plowshares because &ldquo;they shall learn war no more.&rdquo; War is a learned curriculum. So is peace. We are formed by what we practice, what we consume, what we rehearse. Formation practice: audit your media consumption this week. What are you learning &mdash; competition, contempt, anxiety about enemies? What would it look like to replace one hour of that curriculum with something that forms you toward the peace of Isaiah 2? This is not naivety; it is deliberate counter-formation.",
  },
  {
    heading: "Walking in What You Know",
    color: GOLD,
    body: "Isaiah 2:5 calls Israel to walk in the light it already possesses while the nations have not yet received it. The rebuke is aimed at the gap between knowledge and practice. Formation practice: identify one clear teaching of Scripture that you know but are not yet walking in. Name it specifically. Write it down. Share it with one person who can hold you accountable. Walking in the light begins with the step you know to take.",
  },
  {
    heading: "Diagnosing What Fills You",
    color: TEAL,
    body: "The land of Israel was &ldquo;filled&rdquo; &mdash; six times &mdash; with substitutes for God. The diagnostic question is not &ldquo;do you have idols?&rdquo; but &ldquo;what fills you?&rdquo; Formation practice: spend fifteen minutes in silence with this question: what do I turn to when I am anxious, bored, or insecure? Make a list without editing or judging. Then bring it to God in honest prayer. The goal is not self-condemnation but accurate diagnosis &mdash; the beginning of repentance.",
  },
  {
    heading: "Ceasing to Trust in Man",
    color: ROSE,
    body: "Isaiah 2:22 ends with one of the starkest commands in the Bible: &ldquo;Stop regarding man in whose nostrils is breath.&rdquo; This is not misanthropy; it is proportionality. Human beings are contingent, mortal, and finite. Formation practice: identify one person or institution you are trusting in a way that belongs to God alone &mdash; a leader, an employer, a political figure, a medical expert. Pray for them with gratitude and then consciously re-locate your ultimate confidence in the LORD. This is not ingratitude for human gifts; it is proper ordering.",
  },
];

export default function Isaiah2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedVerse, setSelectedVerse] = useState("v1");
  const [selectedTheme, setSelectedTheme] = useState("zion");

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const verse = VERSES.find((v) => v.id === selectedVerse) ?? VERSES[0];
  const theme = THEMES.find((t) => t.id === selectedTheme) ?? THEMES[0];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Navbar />
      <main id="main-content">
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>

          {/* Hero */}
          <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
            <div
              style={{
                display: "inline-block",
                background: `${GREEN}18`,
                border: `1px solid ${GREEN}40`,
                borderRadius: 30,
                padding: "4px 18px",
                fontSize: 12,
                fontWeight: 700,
                color: GREEN,
                letterSpacing: "0.08em",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Chapter Guide
            </div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 900,
                marginBottom: 10,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Isaiah 2
            </h1>
            <p
              style={{
                color: GOLD,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              The Mountain of the LORD
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: 15,
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              An eschatological vision of world peace, Torah-centered universalism,
              and the humbling of human pride on the Day of the LORD.
            </p>
          </div>

          {/* Key verse banner */}
          <div
            style={{
              background: `${TEAL}12`,
              border: `1px solid ${TEAL}35`,
              borderRadius: 14,
              padding: "20px 24px",
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: TEAL,
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 8,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Key Verse &mdash; Isaiah 2:4
            </p>
            <p
              style={{
                color: TEXT,
                fontSize: 17,
                lineHeight: 1.75,
                fontStyle: "italic",
                margin: 0,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;They shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.&rdquo;",
              }}
            />
          </div>

          {/* Tab nav */}
          <div
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 32,
              background: CARD,
              borderRadius: 12,
              padding: 6,
              border: `1px solid ${BORDER}`,
            }}
          >
            {(
              [
                { id: "overview" as const, label: "Verse by Verse" },
                { id: "themes" as const, label: "Key Themes" },
                { id: "theology" as const, label: "Theology" },
                { id: "formation" as const, label: "Formation" },
                { id: "videos" as const, label: "Videos" },
              ] as { id: Tab; label: string }[]
            ).map((t) => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  borderRadius: 8,
                  border: "none",
                  background: activeTab === t.id ? GREEN : "transparent",
                  color: activeTab === t.id ? "#fff" : MUTED,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ---- VERSE BY VERSE TAB ---- */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", gap: 20 }}>
              {/* Sidebar */}
              <div style={{ width: 210, flexShrink: 0 }}>
                {VERSES.map((v) => (
                  <button
                    type="button"
                    key={v.id}
                    onClick={() => setSelectedVerse(v.id)}
                    style={{
                      width: "100%",
                      background:
                        selectedVerse === v.id ? `${v.color}14` : "transparent",
                      border: `1px solid ${
                        selectedVerse === v.id ? v.color + "50" : BORDER
                      }`,
                      borderRadius: 10,
                      padding: "10px 12px",
                      marginBottom: 6,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        color:
                          selectedVerse === v.id ? v.color : MUTED,
                        fontWeight: 700,
                        fontSize: 11,
                        marginBottom: 3,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {v.ref}
                    </div>
                    <div
                      style={{
                        color:
                          selectedVerse === v.id ? TEXT : MUTED,
                        fontWeight: 600,
                        fontSize: 12,
                        lineHeight: 1.4,
                      }}
                    >
                      {v.heading}
                    </div>
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${verse.color}30`,
                    borderRadius: 14,
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: `${verse.color}18`,
                      border: `1px solid ${verse.color}40`,
                      borderRadius: 20,
                      padding: "3px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: verse.color,
                      marginBottom: 14,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {verse.ref}
                  </div>
                  <h2
                    style={{
                      color: verse.color,
                      fontWeight: 900,
                      fontSize: 22,
                      marginBottom: 20,
                      lineHeight: 1.3,
                    }}
                  >
                    {verse.heading}
                  </h2>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 15,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: verse.body }}
                  />
                </div>

                {/* nav arrows */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 16,
                  }}
                >
                  {(() => {
                    const idx = VERSES.findIndex((v) => v.id === selectedVerse);
                    const prev = VERSES[idx - 1];
                    const next = VERSES[idx + 1];
                    return (
                      <>
                        <button
                          type="button"
                          disabled={!prev}
                          onClick={() => prev && setSelectedVerse(prev.id)}
                          style={{
                            background: prev ? CARD : "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            padding: "8px 16px",
                            color: prev ? TEXT : MUTED,
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: prev ? "pointer" : "default",
                            opacity: prev ? 1 : 0.35,
                          }}
                        >
                          &larr; Previous
                        </button>
                        <button
                          type="button"
                          disabled={!next}
                          onClick={() => next && setSelectedVerse(next.id)}
                          style={{
                            background: next ? CARD : "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            padding: "8px 16px",
                            color: next ? TEXT : MUTED,
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: next ? "pointer" : "default",
                            opacity: next ? 1 : 0.35,
                          }}
                        >
                          Next &rarr;
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* ---- THEMES TAB ---- */}
          {activeTab === "themes" && (
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ width: 210, flexShrink: 0 }}>
                {THEMES.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setSelectedTheme(t.id)}
                    style={{
                      width: "100%",
                      background:
                        selectedTheme === t.id ? `${t.color}14` : CARD,
                      border: `1px solid ${
                        selectedTheme === t.id ? t.color + "50" : BORDER
                      }`,
                      borderRadius: 10,
                      padding: "12px 14px",
                      marginBottom: 6,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        color:
                          selectedTheme === t.id ? t.color : TEXT,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {t.label}
                    </div>
                  </button>
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: CARD,
                  border: `1px solid ${theme.color}30`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <h2
                  style={{
                    color: theme.color,
                    fontWeight: 900,
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {theme.label}
                </h2>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 15,
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            </div>
          )}

          {/* ---- THEOLOGY TAB ---- */}
          {activeTab === "theology" && (
            <div>
              {[
                {
                  heading: "Hebrew Word Study: nahar",
                  ref: "Isaiah 2:2",
                  color: TEAL,
                  body: "The verb translated &ldquo;flow&rdquo; in Isaiah 2:2 is <em>nahar</em> (&nun;&lrm;&hey;&lrm;&resh;&lrm;), the same root as the Hebrew word for &ldquo;river.&rdquo; In biblical usage <em>nahar</em> always describes water flowing downhill. Isaiah&rsquo;s use of it for the nations flowing <em>up</em> to the mountain of the LORD is therefore an implicit miracle &mdash; a reversal of gravity. The nations do not march to Zion by force of arms; they are drawn upward by something more powerful than gravity: the attractive power of divine revelation radiating from the mountain. The image anticipates the New Testament picture of the Spirit drawing all people to Christ (John 12:32: &ldquo;when I am lifted up from the earth, I will draw all people to myself&rdquo;). The same upward, against-nature movement is described: attraction, not coercion.",
                },
                {
                  heading: "Messianic and Eschatological Readings",
                  ref: "Isaiah 2:2-4",
                  color: PURPLE,
                  body: "The New Testament does not quote Isaiah 2:2&ndash;4 directly, but the vision permeates its eschatological horizon. Acts 1:8 (&ldquo;you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth&rdquo;) is the inverse of Isaiah 2: the word going out from Jerusalem rather than the nations streaming in. Luke 24:47 (&ldquo;repentance for the forgiveness of sins should be proclaimed in his name to all nations, beginning from Jerusalem&rdquo;) is almost a New Testament restatement of Isaiah 2:3. The church fathers read Isaiah 2:2&ndash;4 as fulfilled in Christ and the apostolic mission: the &ldquo;mountain of the house of the LORD&rdquo; is the church, the &ldquo;Torah going out from Zion&rdquo; is the gospel, and the nations streaming to it are the gentile mission. Justin Martyr (c. 150 AD) cited Isaiah 2 as proof of the universal reach of the gospel.",
                },
                {
                  heading: "The Day of the LORD in Isaiah",
                  ref: "Isaiah 2:12",
                  color: GOLD,
                  body: "The phrase &ldquo;the Day of the LORD&rdquo; (<em>yom YHWH</em>) is one of the most important categories in Old Testament prophecy. In Isaiah 2, the Day is characterized by the humbling of everything that is proud and lofty (vv. 12&ndash;17) and the exposure of the vanity of idols (vv. 18&ndash;20). This is consistent with the Day of the LORD as it appears throughout the prophets (Amos 5:18&ndash;20, Joel 1&ndash;2, Zephaniah 1, Obadiah 15). The Day is not simply a day of punishment for Israel&rsquo;s enemies; it is the moment at which all false securities &mdash; human, political, military, economic, religious &mdash; are stripped away and the LORD alone stands. This is simultaneously terrible and liberating: terrible for those who have trusted in substitutes, liberating for those who have learned to trust in the LORD alone. Isaiah 2 holds both possibilities in tension.",
                },
                {
                  heading: "Swords to Plowshares: Original and Inversion",
                  ref: "Isaiah 2:4 / Joel 3:10",
                  color: ROSE,
                  body: "The famous image of beating swords into plowshares (Isaiah 2:4, Micah 4:3) is deliberately inverted in Joel 3:10: &ldquo;Beat your plowshares into swords, and your pruning hooks into spears.&rdquo; This is not a contradiction but a dialectic. Joel 3 describes the gathering of the nations for the final battle of judgment; Isaiah 2 describes the peace that follows judgment. The instruments of agriculture become instruments of war in Joel because the battle must be fought before the peace can be established. Isaiah&rsquo;s vision is the post-battle reality. The sequence matters: there is no cheap peace. The disarmament of Isaiah 2:4 follows the reckoning of the Day of the LORD (vv. 10&ndash;17). Peace is not simply the absence of conflict; it is the fruit of justice having been done.",
                },
              ].map((section, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${section.color}25`,
                    borderRadius: 14,
                    padding: 26,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 14,
                      gap: 12,
                    }}
                  >
                    <h3
                      style={{
                        color: section.color,
                        fontWeight: 800,
                        fontSize: 18,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {section.heading}
                    </h3>
                    <span
                      style={{
                        background: `${section.color}15`,
                        color: section.color,
                        padding: "3px 12px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {section.ref}
                    </span>
                  </div>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 15,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ---- FORMATION TAB ---- */}
          {activeTab === "formation" && (
            <div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 26,
                  marginBottom: 28,
                }}
              >
                <h2
                  style={{
                    color: GREEN,
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 10,
                  }}
                >
                  Spiritual Formation from Isaiah 2
                </h2>
                <p
                  style={{
                    color: MUTED,
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Isaiah 2 moves between eschatological vision and present call. The question it presses on every reader is the same question it pressed on Israel: given that <em>this</em> is where history is going, how are you walking now? Formation is the practice of living toward a destination before you arrive.",
                  }}
                />
              </div>
              {FORMATION.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}25`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: 12,
                    padding: 22,
                    marginBottom: 16,
                  }}
                >
                  <h3
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: 16,
                      marginBottom: 12,
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ---- VIDEOS TAB ---- */}
          {activeTab === "videos" && (
            <div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 26,
                  marginBottom: 28,
                }}
              >
                <h2
                  style={{
                    color: GREEN,
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  Video Teachings
                </h2>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Selected teachings on Isaiah 2 &mdash; the eschatological vision of Zion, the Day of the LORD, and the path from swords to plowshares.",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 18px" }}>
                      <h4
                        style={{
                          color: GREEN,
                          fontWeight: 700,
                          fontSize: 16,
                          margin: "0 0 4px",
                        }}
                      >
                        {v.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
