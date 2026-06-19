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

const THEMES = [
  {
    id: "say-so",
    color: GOLD,
    title: "Let the Redeemed of the LORD Say So",
    body:
      "The psalm opens with a summons: &ldquo;Oh give thanks to the LORD, for he is good, for his steadfast love endures forever! Let the redeemed of the LORD say so, whom he has redeemed from trouble&rdquo; (vv.1-2). Thanksgiving is not optional decoration; it is the proper voice of the rescued. To be redeemed and to stay silent is a kind of ingratitude. The whole psalm is essentially an extended answer to the command &lsquo;say so&rsquo; &mdash; four testimonies of people who were in trouble and were delivered. The redeemed are called not merely to feel gratitude inwardly but to declare it publicly, gathering &ldquo;from the east and from the west, from the north and from the south&rdquo; (v.3) into one chorus of praise. Our redemption is meant to become our testimony.",
    refs: "Psalm 107:1-3; Psalm 116:12-14; Romans 5:8-9; 1 Peter 1:18-19",
  },
  {
    id: "refrain",
    color: TEAL,
    title: "Then They Cried to the LORD &mdash; The Fourfold Refrain",
    body:
      "The literary backbone of the psalm is a refrain repeated four times: &ldquo;Then they cried to the LORD in their trouble, and he delivered them from their distress&rdquo; (vv.6, 13, 19, 28). Each scene of distress is met by the same turning point: they cried, and he delivered. A second refrain follows each rescue: &ldquo;Let them thank the LORD for his steadfast love, for his wondrous works to the children of man&rdquo; (vv.8, 15, 21, 31). The repetition is not monotony but liturgy &mdash; it teaches the pattern of grace by hammering it home. Whatever the trouble, the answer is the same: cry to the LORD, and he delivers; then give thanks. This is the rhythm of the redeemed life.",
    refs: "Psalm 107:6, 13, 19, 28; Psalm 50:15; Psalm 34:6; Jonah 2:2",
  },
  {
    id: "four-scenes",
    color: PURPLE,
    title: "Four Vignettes of Distress and Deliverance",
    body:
      "The psalm paints four vivid pictures of human extremity, each followed by rescue. (1) <em>Wanderers</em> lost in desert wastes, hungry and thirsty, their soul fainting within them (vv.4-9). (2) <em>Prisoners</em> sitting in darkness and the shadow of death, bowed down with hard labor because they rebelled against God&rsquo;s words (vv.10-16). (3) <em>The sick</em> who through their sinful folly loathed all food and drew near to the gates of death (vv.17-22). (4) <em>Sailors</em> on storm-tossed seas who &ldquo;reeled and staggered like drunken men and were at their wits&rsquo; end,&rdquo; until he made the storm be still (vv.23-32). Together these may picture the gathering of exiles from every direction (v.3) &mdash; the redeemed of the LORD brought home from every kind of trouble.",
    refs: "Psalm 107:4-32; Isaiah 43:5-6; Luke 15:17-24; Mark 4:39",
  },
  {
    id: "storm",
    color: ROSE,
    title: "He Made the Storm Be Still",
    body:
      "The fourth vignette is the most dramatic: those who &ldquo;go down to the sea in ships&rdquo; see the wondrous works of the LORD in the deep. He commands a stormy wind that lifts the waves; the sailors mount up to heaven and go down to the depths, reeling and staggering, at their wits&rsquo; end. &ldquo;Then they cried to the LORD in their trouble, and he delivered them from their distress. He made the storm be still, and the waves of the sea were hushed&rdquo; (vv.28-29). This scene anticipates the moment when Jesus stood in a boat and rebuked the wind and the sea, and the disciples marveled, &ldquo;Who then is this, that even the wind and the sea obey him?&rdquo; (Mark 4:41). The LORD who stills the storm in Psalm 107 is the one who walked the waves and brought the disciples to their desired haven.",
    refs: "Psalm 107:23-32; Mark 4:35-41; Matthew 8:23-27; Psalm 65:7",
  },
  {
    id: "wise",
    color: GREEN,
    title: "Whoever Is Wise, Let Him Attend to These Things",
    body:
      "The psalm closes with a wisdom reflection on God&rsquo;s sovereignty over nature and human affairs. He turns rivers into a desert and the desert into pools of water; he raises the needy out of affliction and brings the powerful low (vv.33-42). The final verse issues a call to discernment: &ldquo;Whoever is wise, let him attend to these things; let them consider the steadfast love of the LORD&rdquo; (v.43). The four stories are not merely entertaining rescue tales; they are summonses to <em>see</em> &mdash; to read God&rsquo;s steadfast love (<em>hesed</em>) in the reversals of life. Wisdom is the trained eye that perceives the rescuing love of God woven through every twist of human experience and responds with thanks.",
    refs: "Psalm 107:33-43; Hosea 14:9; Jeremiah 9:23-24; James 1:5",
  },
];

const VERSES = [
  {
    id: "v1-3",
    ref: "Psalm 107:1-3",
    heading: "Let the Redeemed of the LORD Say So",
    body:
      "&ldquo;Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!&rdquo; (v.1). The opening line echoes the great liturgical refrain of Israel (cf. Ps 106:1; 118:1; 136:1) and sets the key for the whole psalm: God&rsquo;s goodness and his enduring <em>hesed</em>. Verse 2 issues the summons that organizes everything that follows: &ldquo;Let the redeemed of the LORD say so, whom he has redeemed from trouble.&rdquo; The redeemed are then identified as those &ldquo;gathered in from the lands, from the east and from the west, from the north and from the south&rdquo; (v.3). This fourfold compass anticipates the four scenes to come and pictures the homecoming of God&rsquo;s scattered people from every direction.",
  },
  {
    id: "v4-9",
    ref: "Psalm 107:4-9",
    heading: "The Wanderers in Desert Wastes",
    body:
      "The first vignette: &ldquo;Some wandered in desert wastes, finding no way to a city to dwell in, hungry and thirsty, their soul fainted within them&rdquo; (vv.4-5). Lost, without direction, at the end of their strength &mdash; &ldquo;then they cried to the LORD in their trouble, and he delivered them from their distress. He led them by a straight way till they reached a city to dwell in&rdquo; (vv.6-7). The section closes with the first thanksgiving refrain and a beautiful summary of God&rsquo;s care: &ldquo;For he satisfies the longing soul, and the hungry soul he fills with good things&rdquo; (v.9). The God who finds the lost and feeds the famished is the shepherd of the wandering.",
  },
  {
    id: "v10-16",
    ref: "Psalm 107:10-16",
    heading: "The Prisoners in Darkness and Irons",
    body:
      "The second vignette: &ldquo;Some sat in darkness and in the shadow of death, prisoners in affliction and in irons&rdquo; (v.10) &mdash; and their captivity is traced to rebellion: &ldquo;because they had rebelled against the words of God, and spurned the counsel of the Most High&rdquo; (v.11). Bowed down with hard labor, they fall with none to help &mdash; &ldquo;then they cried to the LORD in their trouble, and he delivered them from their distress. He brought them out of darkness and the shadow of death, and burst their bonds apart&rdquo; (vv.13-14). The closing verse celebrates God&rsquo;s power over every prison: &ldquo;For he shatters the doors of bronze and cuts in two the bars of iron&rdquo; (v.16). No chain can hold against the LORD who delivers.",
  },
  {
    id: "v17-22",
    ref: "Psalm 107:17-22",
    heading: "The Sick Who Drew Near to Death",
    body:
      "The third vignette: &ldquo;Some were fools through their sinful ways, and because of their iniquities suffered affliction; they loathed any kind of food, and they drew near to the gates of death&rdquo; (vv.17-18). Sickness here is bound up with folly and sin, and the sufferers stand at death&rsquo;s door &mdash; &ldquo;then they cried to the LORD in their trouble, and he delivered them from their distress. He sent out his word and healed them, and delivered them from their destruction&rdquo; (vv.19-20). &ldquo;He sent out his word and healed them&rdquo; anticipates the healing power of the Word made flesh (John 1). The proper response is sacrificial gratitude: &ldquo;Let them offer sacrifices of thanksgiving, and tell of his deeds in songs of joy&rdquo; (v.22).",
  },
  {
    id: "v23-32",
    ref: "Psalm 107:23-32",
    heading: "Those Who Go Down to the Sea in Ships",
    body:
      "The fourth and most vivid vignette: &ldquo;Some went down to the sea in ships, doing business on the great waters; they saw the deeds of the LORD, his wondrous works in the deep&rdquo; (vv.23-24). He raises a stormy wind that lifts the waves; the sailors &ldquo;mounted up to heaven; they went down to the depths&hellip; they reeled and staggered like drunken men and were at their wits&rsquo; end&rdquo; (vv.26-27). &ldquo;Then they cried to the LORD in their trouble, and he delivered them from their distress. He made the storm be still, and the waves of the sea were hushed. Then they were glad that the waters were quiet, and he brought them to their desired haven&rdquo; (vv.28-30). This scene foreshadows Jesus stilling the storm (Mark 4:39).",
  },
  {
    id: "v33-43",
    ref: "Psalm 107:33-43",
    heading: "Whoever Is Wise, Let Him Attend",
    body:
      "The closing reflection turns from the four stories to God&rsquo;s sweeping sovereignty over nature and society. &ldquo;He turns rivers into a desert, springs of water into thirsty ground&hellip; he turns a desert into pools of water, a parched land into springs of water&rdquo; (vv.33-35). He raises up the needy out of affliction and makes their families like flocks, while the princes who oppress are made to wander in trackless wastes (vv.36-42). &ldquo;The upright see it and are glad, and all wickedness shuts its mouth&rdquo; (v.42). The psalm ends with a summons to discernment: &ldquo;Whoever is wise, let him attend to these things; let them consider the steadfast love of the LORD&rdquo; (v.43). To be wise is to read God&rsquo;s <em>hesed</em> in every reversal.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    color: GOLD,
    title: "Say So &mdash; Tell Your Story of Rescue",
    body:
      "The psalm commands the redeemed to &lsquo;say so&rsquo; (v.2). Gratitude that stays silent is incomplete. Where has God delivered you &mdash; from wandering, from bondage, from sickness, from storm? Name it specifically, and tell someone. Your testimony of rescue is meant to be spoken, not merely felt. Consider writing down one concrete deliverance and sharing it this week with a friend, a small group, or a journal of thanksgiving.",
  },
  {
    id: "a2",
    color: TEAL,
    title: "When in Trouble, Cry to the LORD",
    body:
      "Four times the people in this psalm did the one thing that mattered: &ldquo;they cried to the LORD in their trouble.&rdquo; Whatever your distress &mdash; lostness, captivity, sickness, or storm &mdash; the first and best response is to cry out to God. Do not wait until you have solved it yourself or until you feel worthy. The refrain promises that he hears and delivers. Make crying to the LORD your reflex in trouble, not your last resort.",
  },
  {
    id: "a3",
    color: ROSE,
    title: "Trust the One Who Stills the Storm",
    body:
      "The storm scene (vv.23-32) reminds us that the LORD who made the waves be still is the same Jesus who calmed the sea and asked, &lsquo;Why are you so afraid?&rsquo; When your circumstances reel and stagger like a ship in a gale, remember that the storm obeys his voice. He may not always still the storm immediately, but he is sovereign over it &mdash; and he brings his people, at last, to their desired haven.",
  },
  {
    id: "a4",
    color: GREEN,
    title: "Grow Wise by Considering His Steadfast Love",
    body:
      "The psalm ends, &ldquo;Whoever is wise, let him attend to these things; let them consider the steadfast love of the LORD&rdquo; (v.43). Wisdom is the trained habit of seeing God&rsquo;s <em>hesed</em> in the reversals of life. Cultivate the discipline of looking back over your days and weeks and asking: where was God&rsquo;s steadfast love at work, even in the hard turns? Learning to read your story this way is one of the deepest forms of biblical wisdom.",
  },
];

const QUESTIONS = [
  "The psalm commands the redeemed to &lsquo;say so&rsquo; (v.2). What specific deliverance in your life have you been slow to speak about? Who could you tell this week?",
  "Each of the four scenes turns on the same line: &ldquo;then they cried to the LORD.&rdquo; In your current trouble, what would it look like to cry out to God before trying to fix it yourself?",
  "Which of the four vignettes &mdash; the wanderer, the prisoner, the sick, the storm-tossed sailor &mdash; most resembles your present season? Why?",
  "Verses 33-42 describe God reversing fortunes &mdash; raising the needy and humbling the proud. How does this shape the way you view your own circumstances, whether of plenty or of want?",
  "The storm scene anticipates Jesus stilling the sea (Mark 4:39). How does knowing Jesus has authority over the storm change the way you face your fears?",
  "&ldquo;Whoever is wise&hellip; let them consider the steadfast love of the LORD&rdquo; (v.43). Looking back over the past year, where can you now see God&rsquo;s steadfast love that you missed at the time?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 107: Give Thanks to the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "The Fourfold Refrain of Psalm 107" },
  { videoId: "pHBzJ2dVXgk", title: "He Made the Storm Be Still" },
  { videoId: "3sO5FH2ybPY", title: "Steadfast Love: Reading Hesed in the Psalms" },
];

export default function Psalm107Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };
  const accordionBtn = (isOpen: boolean, color: string): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}14` : "transparent",
    border: `1px solid ${isOpen ? color + "55" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.98rem",
    transition: "all .2s",
  });

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
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: 2,
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Opening Book 5 of the Psalter
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem,4vw,2.9rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              marginBottom: "1rem",
            }}
          >
            Psalm 107: The Great Thanksgiving Psalm
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 700 }}>
            A psalm built on a summons and a refrain. Four vivid scenes of distress and rescue
            &mdash; wanderers, prisoners, the sick, and storm-tossed sailors &mdash; each crying
            to the LORD and being delivered, all calling the redeemed to give thanks.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${GOLD}12`,
              border: `1px solid ${GOLD}40`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 1,
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Key Verse &mdash; Psalm 107:1-2
            </div>
            <p
              style={{ color: TEXT, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;Oh give thanks to the LORD, for he is good, for his steadfast love endures forever! Let the redeemed of the LORD say so, whom he has redeemed from trouble.&rdquo;",
              }}
            />
          </div>
        </header>

        {/* Tab bar */}
        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t ? GOLD : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? GOLD : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {/* Overview */}
        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>
                Summary
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 107 opens Book 5 of the Psalter with a ringing summons to thanksgiving: &ldquo;Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!&rdquo; The redeemed are called to &lsquo;say so&rsquo; &mdash; to testify to their rescue. The body of the psalm offers four vivid vignettes of distress and deliverance: wanderers lost in the desert, prisoners in darkness and chains, the sick at death&rsquo;s door, and sailors caught in a storm. Each scene follows the same pattern: trouble, the cry &lsquo;then they cried to the LORD,&rsquo; deliverance, and the refrain &lsquo;Let them thank the LORD for his steadfast love.&rsquo; The psalm closes with a wisdom reflection on God&rsquo;s sovereignty over nature and human affairs.",
                }}
              />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>
                Structure
              </h2>
              <div
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<strong>vv.1-3 &mdash; The summons:</strong> give thanks, for the LORD is good and his steadfast love endures; let the redeemed, gathered from every direction, say so.<br/><br/><strong>vv.4-9 &mdash; The wanderers:</strong> lost in desert wastes, hungry and thirsty; they cried and he led them by a straight way and satisfied the longing soul.<br/><br/><strong>vv.10-16 &mdash; The prisoners:</strong> in darkness and irons because of rebellion; they cried and he burst their bonds apart.<br/><br/><strong>vv.17-22 &mdash; The sick:</strong> drawing near to death through folly; they cried and he sent out his word and healed them.<br/><br/><strong>vv.23-32 &mdash; The sailors:</strong> reeling in the storm; they cried and he made the storm be still and brought them to their desired haven.<br/><br/><strong>vv.33-43 &mdash; The wisdom conclusion:</strong> God reverses fortunes; whoever is wise considers the steadfast love of the LORD.",
                }}
              />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>
                Context: The Homecoming of the Redeemed
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Many read Psalm 107 against the backdrop of the return from exile. Verse 3 speaks of the redeemed &ldquo;gathered in from the lands, from the east and from the west, from the north and from the south&rdquo; &mdash; language echoing the prophetic promises of restoration (cf. Isa 43:5-6). The four scenes may then represent the many kinds of trouble from which God brings his scattered people home. The fourfold refrain structure &mdash; &ldquo;then they cried to the LORD in their trouble, and he delivered them&rdquo; (vv.6, 13, 19, 28) paired with &ldquo;Let them thank the LORD for his steadfast love, for his wondrous works to the children of man&rdquo; (vv.8, 15, 21, 31) &mdash; is the literary backbone. The storm scene (vv.23-32) anticipates Jesus stilling the sea (Mark 4:35-41), and &ldquo;he sent out his word and healed them&rdquo; (v.20) anticipates the healing Word of John 1.",
                }}
              />
            </div>
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five movements that carry the great thanksgiving psalm. Tap each to expand.
            </p>
            {THEMES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionBtn(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    <span style={{ color: item.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${item.color}0A`,
                        border: `1px solid ${item.color}22`,
                        borderRadius: 10,
                        padding: "1.1rem 1.3rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: item.color,
                          borderTop: `1px solid ${item.color}22`,
                          paddingTop: "0.7rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: "Cross-references: " + item.refs }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Verse by Verse */}
        {tab === "verse" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Walk through Psalm 107 section by section. Tap each to expand.
            </p>
            {VERSES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionBtn(isOpen, TEAL)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>
                      <span style={{ color: TEAL, fontWeight: 800 }}>{item.ref}</span>
                      <span style={{ color: MUTED, fontWeight: 500 }}> &mdash; {item.heading}</span>
                    </span>
                    <span style={{ color: TEAL, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${TEAL}0A`,
                        border: `1px solid ${TEAL}22`,
                        borderRadius: 10,
                        padding: "1.1rem 1.3rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: PURPLE }}>
                Living the Psalm
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: `${item.color}0A`,
                      border: `1px solid ${item.color}25`,
                      borderRadius: 12,
                      padding: "1.1rem 1.3rem",
                      borderLeft: `4px solid ${item.color}`,
                    }}
                  >
                    <h3
                      style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>
                Reflection Questions
              </h2>
              <ol style={{ color: MUTED, lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
                {QUESTIONS.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}40`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.75rem", color: GREEN }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, you are good, and your steadfast love endures forever. I am one of the redeemed, and so I will say so. You found me when I wandered, you freed me when I was bound, you healed me when I drew near to death, you stilled the storm when I was at my wits&rsquo; end. In every trouble I cried to you, and you delivered me from my distress. Thank you for your steadfast love and your wondrous works. Make me wise to consider your <em>hesed</em> in all the turns of my life, and bring me at last to my desired haven, where the redeemed give you thanks forever. Amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
