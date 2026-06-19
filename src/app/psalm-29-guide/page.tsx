"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Theme {
  id: string;
  title: string;
  reference: string;
  body: string;
}

interface VerseBlock {
  id: string;
  reference: string;
  label: string;
  body: string;
}

interface AppSection {
  title: string;
  accent: string;
  body: string;
}

export default function Psalm29Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 29 &mdash; The Voice of the LORD in the Storm" },
    { videoId: "OjJ7GkWCHvA", title: "Ascribe to the LORD Glory and Strength" },
    { videoId: "pHBzJ2dVXgk", title: "The Seven Thunders: Qol YHWH" },
    { videoId: "3sO5FH2ybPY", title: "Enthroned Over the Flood, Giver of Peace" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themes: Theme[] = [
    {
      id: "t-council",
      title: "The Call to the Heavenly Beings",
      reference: "Psalm 29:1&ndash;2",
      body:
        "The psalm opens not on earth but in heaven, summoning the &ldquo;heavenly beings&rdquo; &mdash; the sons of God, the angelic host gathered before the throne &mdash; to give the LORD his due: &ldquo;Ascribe to the LORD, O heavenly beings, ascribe to the LORD glory and strength. Ascribe to the LORD the glory due his name; worship the LORD in the splendor of holiness&rdquo; (29:1&ndash;2). The threefold repetition of &ldquo;ascribe&rdquo; presses the command home with rising intensity. If the very angels are commanded to render glory to God, how much more should we. Worship begins in the heavenly council and descends to earth; the whole created order, visible and invisible, is called to bow before the splendor of his holiness.&nbsp;",
    },
    {
      id: "t-voice",
      title: "The Sevenfold Voice of the LORD",
      reference: "Psalm 29:3&ndash;9",
      body:
        "Seven times the psalm thunders the phrase &ldquo;the voice of the LORD&rdquo; (in Hebrew, qol YHWH), and this sevenfold drumbeat structures the entire storm-theophany. The voice is &ldquo;over the waters&rdquo; (v.3), &ldquo;powerful&rdquo; and &ldquo;full of majesty&rdquo; (v.4); it &ldquo;breaks the cedars&rdquo; (v.5), &ldquo;flashes forth flames of fire&rdquo; (v.7), &ldquo;shakes the wilderness&rdquo; (v.8), and &ldquo;makes the deer give birth&rdquo; (v.9). Seven is the number of fullness and completion; the seven thunders declare that the LORD&rsquo;s voice is sovereign over every region of creation &mdash; sea, sky, mountain, desert. The same voice that spoke creation into being still speaks, and all things tremble.&nbsp;",
    },
    {
      id: "t-storm",
      title: "The Storm Sweeping From Sea to Desert",
      reference: "Psalm 29:3&ndash;9",
      body:
        "The psalm paints a single magnificent picture: a thunderstorm born over the Mediterranean, sweeping inland across the towering cedars of Lebanon in the north, making the mountains skip like frightened calves, flashing with lightning, and finally rolling down into the southern wilderness of Kadesh, shaking the desert and stripping the forests bare. It is a poetic depiction of a real meteorological event &mdash; the believer watching a storm advance across the land and reading in its power the majesty of the God who governs it. Nature is not divine, but it is eloquent; the storm is a sermon, and its text is the glory of the LORD.&nbsp;",
    },
    {
      id: "t-enthroned",
      title: "Enthroned Over the Flood as King Forever",
      reference: "Psalm 29:10",
      body:
        "After the storm has spent its fury, the psalm rises to its theological summit: &ldquo;The LORD sits enthroned over the flood; the LORD sits enthroned as king forever&rdquo; (29:10). The word translated &ldquo;flood&rdquo; appears elsewhere in the Old Testament only for the waters of Noah&rsquo;s deluge &mdash; the chaos-waters that once threatened to unmake creation. The psalm declares that even over those waters, even over the most fearsome forces of disorder, the LORD sits enthroned, calm and sovereign, as king forever. The storm rages, but the King is seated. Nothing has shaken his throne.&nbsp;",
    },
    {
      id: "t-peace",
      title: "Strength and Peace for His People",
      reference: "Psalm 29:11",
      body:
        "The psalm of the storm ends, astonishingly, with the word shalom: &ldquo;May the LORD give strength to his people! May the LORD bless his people with peace!&rdquo; (29:11). The same overwhelming power that thunders over the waters and shatters the cedars is given as strength to God&rsquo;s people, and the storm-King&rsquo;s final gift to his own is peace. This is the great surprise of the psalm. The awesome power that ought to terrify becomes the very source of the believer&rsquo;s security. The God of the storm is the God of shalom, and the strength that breaks cedars is the strength that upholds his children.&nbsp;",
    },
    {
      id: "t-yhwh",
      title: "The LORD Alone Is God of the Storm",
      reference: "Psalm 29:1&ndash;11",
      body:
        "Considered one of the oldest psalms, Psalm 29 may have been adapted from older Canaanite storm-god hymnody and decisively repurposed to exalt YHWH alone as the true God of the storm and the cosmos. Where the surrounding nations attributed thunder and lightning to Baal, the psalm insists that there is only one voice in the storm &mdash; the voice of the LORD. It strips the pagan gods of their thunder and lays it at the feet of Israel&rsquo;s covenant God. The polemic is unmistakable: the LORD, not Baal, rides the storm; the LORD, not Baal, sits enthroned over the flood; and the LORD alone gives peace to his people.&nbsp;",
    },
  ];

  const verses: VerseBlock[] = [
    {
      id: "v1",
      reference: "Psalm 29:1&ndash;2",
      label: "Ascribe to the LORD in the Splendor of Holiness",
      body:
        "&ldquo;Ascribe to the LORD, O heavenly beings, ascribe to the LORD glory and strength. Ascribe to the LORD the glory due his name; worship the LORD in the splendor of holiness.&rdquo; The psalm begins in the heavenly throne room, commanding the angelic host to render to God the glory and strength that are his by right. The threefold &ldquo;ascribe&rdquo; builds like a swelling chord, and the call climaxes in worship offered &ldquo;in the splendor of holiness&rdquo; &mdash; worship clothed in reverence, beauty, and awe. Before a single thundercloud appears, the psalm has already established who deserves the praise: not the storm, but the One whose voice the storm obeys.&nbsp;",
    },
    {
      id: "v2",
      reference: "Psalm 29:3&ndash;4",
      label: "The God of Glory Thunders",
      body:
        "&ldquo;The voice of the LORD is over the waters; the God of glory thunders, the LORD, over many waters. The voice of the LORD is powerful; the voice of the LORD is full of majesty.&rdquo; The storm gathers over the great sea. Three of the seven thunderclaps sound in these two verses, announcing the voice that is &ldquo;over the waters,&rdquo; &ldquo;powerful,&rdquo; and &ldquo;full of majesty.&rdquo; The &ldquo;many waters&rdquo; that pagan myth feared as the realm of chaos are simply the floor over which the God of glory thunders. There is no rival deity here, no struggle &mdash; only the sovereign voice rolling across the deep, powerful and majestic, commanding the storm it created.&nbsp;",
    },
    {
      id: "v3",
      reference: "Psalm 29:5&ndash;7",
      label: "Breaking the Cedars, Flashing Forth Fire",
      body:
        "&ldquo;The voice of the LORD breaks the cedars; the LORD breaks the cedars of Lebanon. He makes Lebanon to skip like a calf, and Sirion like a young wild ox. The voice of the LORD flashes forth flames of fire.&rdquo; The storm now strikes the land. The cedars of Lebanon were the mightiest trees known to the ancient world, symbols of permanence and strength &mdash; and the voice of the LORD snaps them like twigs. The towering mountains themselves skip like startled calves before his power, and the lightning splits the sky as the voice &ldquo;flashes forth flames of fire.&rdquo; What seems most immovable to us is weightless before the word of God.&nbsp;",
    },
    {
      id: "v4",
      reference: "Psalm 29:8&ndash;9",
      label: "Shaking the Wilderness, All Cry Glory",
      body:
        "&ldquo;The voice of the LORD shakes the wilderness; the LORD shakes the wilderness of Kadesh. The voice of the LORD makes the deer give birth and strips the forests bare, and in his temple all cry, &lsquo;Glory!&rsquo;&rdquo; The storm rolls south into the desert, shaking the wilderness of Kadesh and stripping the forests bare. So overwhelming is the power that even the wild deer are sent into early labor. And then, at the center of the heavenly temple, every voice responds to the one Voice with a single word: &ldquo;Glory!&rdquo; The storm that began in the heavens returns the heavens to praise. Creation&rsquo;s only fitting answer to the voice of the LORD is worship.&nbsp;",
    },
    {
      id: "v5",
      reference: "Psalm 29:10&ndash;11",
      label: "Enthroned Over the Flood, Giver of Peace",
      body:
        "&ldquo;The LORD sits enthroned over the flood; the LORD sits enthroned as king forever. May the LORD give strength to his people! May the LORD bless his people with peace!&rdquo; The storm subsides and the psalm reaches its calm, towering conclusion. Over the flood-waters of chaos the LORD sits enthroned, unshaken, king forever. And from that throne flows the psalm&rsquo;s final, astonishing gift: strength and peace for his people. The God whose voice shatters cedars stoops to bless his own with shalom. The terror of the storm becomes the security of the saints. The same power that governs the cosmos guards the people of God.&nbsp;",
    },
  ];

  const appSections: AppSection[] = [
    {
      title: "Seeing God in the Storm",
      accent: PURPLE,
      body:
        "Psalm 29 trains us to read the natural world as a theater of God&rsquo;s glory. The next time thunder rolls across the sky and lightning splits the dark, the psalm invites us not to cower in mere superstition but to worship. The storm is not a rival power to be feared on its own terms; it is a sermon preached by the voice of the LORD. Behind every clap of thunder is the One whose word created the heavens and still upholds them. Let creation enlarge your vision of God &mdash; if his voice does this to cedars and mountains, how worthy he is of your reverence and praise.&nbsp;",
    },
    {
      title: "Worship in the Splendor of Holiness",
      accent: GOLD,
      body:
        "If the heavenly beings &mdash; the very angels of God &mdash; are commanded to ascribe glory and strength to the LORD, then our worship is not optional or casual. The psalm calls us to worship &ldquo;in the splendor of holiness&rdquo; (29:2), with reverence and beauty befitting the King of the cosmos. So much of our worship is small, distracted, and self-focused. Psalm 29 lifts our eyes to the throne room and bids us join the angelic chorus, giving God the glory due his name. Ask yourself whether your worship reflects the splendor of the One you address, or whether it has shrunk to fit your convenience.&nbsp;",
    },
    {
      title: "The King Is Seated Over Your Flood",
      accent: TEAL,
      body:
        "&ldquo;The LORD sits enthroned over the flood&rdquo; (29:10). Whatever chaos threatens to overwhelm you &mdash; the rising waters of grief, fear, illness, or loss &mdash; the King is seated above it. The flood that once unmade the world in Noah&rsquo;s day could not unseat the LORD, and your flood cannot either. He is not pacing the throne room in panic; he is enthroned, calm, sovereign, king forever. When your circumstances rage, fix your eyes not on the height of the waters but on the One who sits above them. The storm has a Master, and the Master is on his throne.&nbsp;",
    },
    {
      title: "The God of Power Is the God of Peace",
      accent: GREEN,
      body:
        "The most striking turn in the whole psalm is its ending: the God whose voice breaks cedars and shakes the wilderness blesses his people with peace (29:11). The awesome power of the storm is not aimed at his children to destroy them but is the very strength that secures them. Because God is this powerful, his peace is unshakable; the shalom he gives rests on omnipotence. When you feel weak and the world feels chaotic, remember that the strength which governs the storm is given to you, and the peace which crowns the psalm is your inheritance. Power and peace meet in the same God.&nbsp;",
    },
    {
      title: "One Voice in Every Storm",
      accent: ROSE,
      body:
        "Israel&rsquo;s neighbors credited the thunder to many gods, but Psalm 29 insists there is only one voice in the storm &mdash; the voice of the LORD. For us this is an invitation to dethrone every rival that competes for our trust and to confess that the living God alone reigns over all things. We are tempted to scatter our fear and our hope among many lesser powers &mdash; politics, money, health, human approval. The psalm calls us back to the single, sovereign Voice. There is one God of the storm and the cosmos, and he alone is worthy of our worship, our awe, and our undivided trust.&nbsp;",
    },
  ];

  const questions = [
    "Psalm 29 commands even the heavenly beings to ascribe glory to the LORD. How does picturing the angelic worship in the throne room reshape the way you approach worship?",
    "The &ldquo;voice of the LORD&rdquo; sounds seven times across the psalm. Where in creation have you most vividly sensed the power and majesty of God?",
    "Verse 10 says the LORD &ldquo;sits enthroned over the flood.&rdquo; What chaotic &ldquo;flood&rdquo; in your life do you need to entrust to the King who is seated above it?",
    "The psalm moves from the terror of the storm to the gift of peace in verse 11. How does knowing that the God of power is also the God of shalom change the way you face fear?",
    "Psalm 29 insists there is only one voice in the storm. What rival &ldquo;gods&rdquo; or lesser powers compete for your trust, and how can you return your worship to the LORD alone?",
    "Worship in the splendor of holiness is the psalm&rsquo;s call. What would it look like for your daily life to ascribe to the LORD the glory due his name?",
  ];

  const headingStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: TEXT,
  };

  const paraStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.85,
    fontSize: "1.02rem",
  };

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "1.6rem 1.7rem",
    marginBottom: "1.4rem",
  };

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1rem",
        }}
      >
        <p
          style={{
            color: TEAL,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "0.82rem",
            marginBottom: "0.6rem",
          }}
        >
          A Study in the Psalms
        </p>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "0.9rem",
          }}
        >
          Psalm 29
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.18rem",
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          A hymn to the LORD&rsquo;s glory revealed in the thunderstorm &mdash;
          from the seven thunders of his voice to the gift of peace.
        </p>
        <div
          style={{
            marginTop: "1.8rem",
            background: `linear-gradient(135deg, ${CARD}, #0c0c18)`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${TEAL}`,
            borderRadius: 12,
            padding: "1.5rem 1.6rem",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.22rem",
              lineHeight: 1.65,
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;May the LORD give strength to his people! May the LORD bless his people with peace!&rdquo;",
            }}
          />
          <p
            style={{
              marginTop: "0.8rem",
              color: TEAL,
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            Psalm 29:11
          </p>
        </div>
      </header>

      <nav
        style={{
          maxWidth: 980,
          margin: "1.5rem auto 0",
          padding: "0 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
          borderBottom: `1px solid ${BORDER}`,
          paddingBottom: "0.9rem",
        }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={{
              background: tab === t ? TEAL : "transparent",
              color: tab === t ? "#fff" : MUTED,
              border: `1px solid ${tab === t ? TEAL : BORDER}`,
              borderRadius: 999,
              padding: "0.55rem 1.2rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </nav>

      <main
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "2.2rem 1.5rem 5rem",
        }}
      >
        {tab === "overview" && (
          <section>
            <div style={cardStyle}>
              <h2 style={headingStyle}>A Hymn to the God of the Storm</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 29 is a thunderous hymn of praise that takes a single thunderstorm and turns it into a sustained meditation on the glory of God. It begins in the heavenly throne room, calling the &ldquo;heavenly beings&rdquo; to ascribe to the LORD glory and strength and to worship him &ldquo;in the splendor of holiness&rdquo; (29:1&ndash;2). Then the storm breaks. Seven times the psalm cries &ldquo;the voice of the LORD&rdquo; (qol YHWH) as the tempest thunders over the waters, breaks the mighty cedars of Lebanon, flashes forth flames of fire, shakes the wilderness, and makes the deer give birth.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "When the storm has passed, the psalm rises to its calm summit: &ldquo;The LORD sits enthroned over the flood; the LORD sits enthroned as king forever&rdquo; (29:10). And then comes the great surprise &mdash; the psalm of overwhelming power ends with the gift of peace: &ldquo;May the LORD give strength to his people! May the LORD bless his people with peace!&rdquo; (29:11). The God of the storm is the God of shalom.",
                }}
              />
            </div>

            <div style={cardStyle}>
              <h2 style={headingStyle}>Structure of the Psalm</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "The psalm moves in three movements. First, the <strong style='color:#F2F2F8'>heavenly council</strong> (vv.1&ndash;2): the angelic host is summoned to give the LORD glory. Second, the <strong style='color:#F2F2F8'>storm-theophany</strong> (vv.3&ndash;9): the sevenfold &ldquo;voice of the LORD&rdquo; sweeps from the Mediterranean across the cedars of Lebanon to the southern desert of Kadesh. Third, the <strong style='color:#F2F2F8'>enthroned King and the gift of peace</strong> (vv.10&ndash;11): the LORD sits above the flood as king forever and blesses his people with strength and shalom.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The sevenfold repetition of qol YHWH &mdash; &ldquo;the voice of the LORD&rdquo; &mdash; is the literary spine of the whole poem. Seven is the number of completeness, declaring that the LORD&rsquo;s voice rules over every region of creation, from the deep sea to the high mountains to the trackless desert.",
                }}
              />
            </div>

            <div style={cardStyle}>
              <h2 style={headingStyle}>Context and Background</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 29 is widely considered one of the oldest psalms in the Psalter. Many scholars believe it was adapted from older Canaanite storm-god hymnody and decisively repurposed to exalt YHWH alone as the true God of the storm and the cosmos. Where Israel&rsquo;s neighbors credited the thunder and lightning to Baal, the psalm insists there is only one voice in the storm &mdash; the voice of the LORD. It is a polemic in the form of a hymn: the LORD, not Baal, rides the tempest and sits enthroned over the flood.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The deepest contrast in the psalm is between the awesome, destructive power of the storm and the gift of peace (shalom) to God&rsquo;s people. The same strength that breaks cedars and shakes the desert is given to the saints as security. The God whose power could terrify becomes the source of his people&rsquo;s deepest rest.",
                }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <p
              style={{
                ...paraStyle,
                marginBottom: "1.6rem",
                fontSize: "1.08rem",
              }}
            >
              Six themes carry Psalm 29 from the heavenly council, through the
              seven thunders of the storm, to the enthroned King and his gift of
              peace. Tap each to explore.
            </p>
            {themes.map((th) => (
              <div
                key={th.id}
                style={{
                  background: CARD,
                  border: `1px solid ${open === th.id ? TEAL : BORDER}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden",
                  transition: "border-color 0.15s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(th.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.3rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "1.12rem",
                        color: TEXT,
                      }}
                    >
                      {th.title}
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: TEAL,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        marginTop: "0.25rem",
                      }}
                      dangerouslySetInnerHTML={{ __html: th.reference }}
                    />
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {open === th.id ? "-" : "+"}
                  </span>
                </button>
                {open === th.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p
                      style={paraStyle}
                      dangerouslySetInnerHTML={{ __html: th.body }}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p
              style={{
                ...paraStyle,
                marginBottom: "1.6rem",
                fontSize: "1.08rem",
              }}
            >
              Walk through Psalm 29 section by section, from the call to the
              heavenly beings to the blessing of peace.
            </p>
            {verses.map((v) => (
              <div
                key={v.id}
                style={{
                  background: CARD,
                  border: `1px solid ${open === v.id ? GOLD : BORDER}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden",
                  transition: "border-color 0.15s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(v.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.3rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <span
                      style={{
                        display: "block",
                        color: GOLD,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                      dangerouslySetInnerHTML={{ __html: v.reference }}
                    />
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: TEXT,
                        marginTop: "0.25rem",
                      }}
                    >
                      {v.label}
                    </span>
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {open === v.id ? "-" : "+"}
                  </span>
                </button>
                {open === v.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p
                      style={paraStyle}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "application" && (
          <section>
            <div style={{ marginBottom: "2.2rem" }}>
              {appSections.map((a, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    borderLeft: `4px solid ${a.accent}`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "0.8rem",
                      color: TEXT,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={paraStyle}
                    dangerouslySetInnerHTML={{ __html: a.body }}
                  />
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                  color: TEXT,
                }}
              >
                Questions for Reflection
              </h3>
              <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {questions.map((q, i) => (
                  <li
                    key={i}
                    style={{
                      color: MUTED,
                      lineHeight: 1.75,
                      marginBottom: "1rem",
                      fontSize: "1.02rem",
                      paddingLeft: "0.4rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.3rem",
                color: TEXT,
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.3rem",
                marginBottom: "2.4rem",
              }}
            >
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
                  <p
                    style={{
                      padding: "0.9rem 1.1rem",
                      color: MUTED,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #0c0c18)`,
                border: `1px solid ${BORDER}`,
                borderTop: `4px solid ${TEAL}`,
                borderRadius: 14,
                padding: "2rem 1.9rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: TEXT,
                }}
              >
                A Closing Prayer
              </h3>
              <p
                style={{
                  ...paraStyle,
                  fontStyle: "italic",
                  color: TEXT,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, God of glory, your voice thunders over the waters and breaks the mighty cedars; you sit enthroned over the flood as king forever. We ascribe to you glory and strength, and we worship you in the splendor of holiness. When the storms of life rage around us, remind us that you are seated above them, calm and sovereign. And as you blessed your people of old, give us your strength and bless us with your peace &mdash; the shalom that flows from your unshakable throne. Through Jesus Christ our Lord, who spoke to the wind and the waves and they obeyed him. Amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
