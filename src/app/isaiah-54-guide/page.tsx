"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = "#a78bfa";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "mX3yHlRaU7q", title: "Isaiah 54 - Sing Barren Woman Your Maker Is Your Husband" },
  { id: "nY8zImSbV2r", title: "No Weapon Formed Against You Shall Prosper - Isaiah 54 Study" },
  { id: "oZ2aJnTcW5s", title: "Isaiah 54 Explained - Covenant of Peace and Everlasting Love" },
  { id: "pA6bKoUdX9t", title: "Isaiah 54 Verse by Verse - Comfort After the Suffering Servant" },
];

const keyThemes = [
  {
    id: "th1",
    color: GREEN,
    title: "Fruitfulness After Desolation",
    body: "The barren woman is commanded to sing before the singing makes sense. God speaks fruitfulness into what appears barren. This is the pattern of resurrection life: the command precedes the reality, faith goes before sight. The entire logic of Isaiah 54 rests on this reversal &mdash; what is desolate becomes more fruitful than what is married; what is bereaved overflows with children; what is abandoned is pursued by an everlasting husband. The command to sing is not an instruction to pretend but an invitation to align with what God is already doing in the unseen realm.",
  },
  {
    id: "th2",
    color: PURPLE,
    title: "God as Husband and Redeemer",
    body: "&quot;For your Maker is your husband &mdash; the LORD Almighty is his name&quot; (v.5). The marriage metaphor for God&apos;s relationship with his people is one of Scripture&apos;s most intimate. He is not a distant ruler but a faithful, passionate, and jealous husband who reclaims his forsaken wife. This image runs from Hosea through Jeremiah through Ezekiel and reaches its New Testament fulfillment in the vision of the Lamb&apos;s wedding supper in Revelation 19. Paul describes the church as the bride of Christ (Ephesians 5:25-32). The intimacy of the marriage metaphor is not hyperbole; it is the precise theological category God chooses for the relationship he intends.",
  },
  {
    id: "th3",
    color: TEAL,
    title: "The Covenant of Peace",
    body: "&quot;My covenant of peace will not be removed&quot; (v.10). This is the new covenant flowing from Isaiah 53 &mdash; more stable than mountains, more permanent than hills. God&apos;s commitment to his redeemed people is non-negotiable. The word for peace here is shalom &mdash; the comprehensive Old Testament vision of wholeness, right relationship, and flourishing. The covenant of peace is not merely the absence of conflict with God; it is the restoration of everything that sin disrupted between God and humanity, between people, and within the creation itself. It is grounded entirely in the work of the Servant in the preceding chapter.",
  },
  {
    id: "th4",
    color: GOLD,
    title: "The Afflicted City Rebuilt",
    body: "Verses 11&ndash;14 describe the afflicted, storm-tossed city rebuilt with precious gems: sapphire foundations, ruby battlements, crystal gates. This vision of the new Jerusalem (quoted in Revelation 21) is the eschatological hope of all who endure suffering in the present age. The afflicted city &mdash; storm-tossed, uncomforted &mdash; is not promised relief from its trials but transformation of its very substance. The stones that rebuild it are more glorious than the original. This is the pattern of resurrection: not restoration to a previous state but transformation to something incorruptibly beautiful.",
  },
  {
    id: "th5",
    color: ROSE,
    title: "No Weapon Shall Prosper",
    body: "&quot;No weapon formed against you will prevail, and you will refute every tongue that accuses you&quot; (v.17). This is not a promise of comfort from all hardship but of ultimate vindication. Every attack on God&apos;s people &mdash; spiritual, physical, verbal &mdash; will ultimately fail because it is God who contends. The heritage language is significant: this is not a special privilege for exceptional saints but the inherited right of all who are servants of the LORD. The accusation of the tongue is included alongside the weapon of war &mdash; slander and false accusation are spiritual weapons that God also defeats.",
  },
];

const verseGroups = [
  {
    id: "vs1",
    ref: "vv.1-3",
    color: GREEN,
    title: "Sing, Barren Woman: Enlarge Your Tent",
    body: "Sing, barren woman, you who never bore a child; the children of the desolate woman will be more than the children of the married wife; enlarge the place of your tent; stretch your tent curtains wide; do not hold back; you will spread to the right and to the left. The opening command is paradoxical: a barren woman is told to prepare for more children than the married woman. She is told to enlarge her tent &mdash; to make room for what does not yet exist. This is the grammar of faith: acting as if the promise is already true, not from naivety but from confidence in the character of the one who made it. The image of stretching tent curtains echoes the imagery of creation &mdash; God stretching out the heavens like a tent (Isaiah 40:22). The fruitfulness of God&apos;s people participates in the generative work of God himself.",
  },
  {
    id: "vs2",
    ref: "vv.4-6",
    color: PURPLE,
    title: "Your Maker Is Your Husband",
    body: "Do not be afraid; you will not be put to shame; the shame of your youth you will remember no more; for your Maker is your husband, the LORD Almighty is his name; the Holy One of Israel is your Redeemer; he is called the God of all the earth; the LORD will call you back as if you were a wife deserted and distressed in spirit. The sequence of divine titles here is deliberate and cumulative. Maker: this one who calls you back made you; your very existence is from him. Husband: the intimacy is not merely contractual but covenantal and personal. LORD Almighty: the one who calls you back has all power. Holy One of Israel: the holiness that separated you has been addressed at the cross. God of all the earth: his authority to reclaim you is universal. Redeemer: he pays the price. The deserted and distressed wife is called back not as a matter of duty but as the expression of who God is.",
  },
  {
    id: "vs3",
    ref: "vv.7-10",
    color: TEAL,
    title: "Everlasting Kindness and the Covenant of Peace",
    body: "For a brief moment I abandoned you, but with deep compassion I will bring you back; in a surge of anger I hid my face from you for a moment, but with everlasting kindness I will have compassion on you; to me this is like the days of Noah; as I swore that the waters of Noah would never again cover the earth, so now I have sworn that I will not be angry with you and rebuke you; though the mountains be shaken and the hills be removed, yet my unfailing love will not be shaken, nor my covenant of peace be removed. These verses contain some of the most astonishing proportions in Scripture. The abandonment was a moment; the compassion is deep. The anger was a surge; the kindness is everlasting. The comparison to Noah is carefully chosen: the covenant with Noah was unconditional and universal &mdash; it required nothing from Noah and was grounded entirely in God&apos;s sovereign decision. The new covenant of peace has the same character. Mountains and hills &mdash; the most stable features of the landscape &mdash; will shake before God&apos;s love shakes.",
  },
  {
    id: "vs4",
    ref: "vv.11-14",
    color: GOLD,
    title: "The City Rebuilt with Precious Stones",
    body: "Afflicted city, lashed by storms and not comforted; I will rebuild you with turquoise, your foundations with lapis lazuli; your battlements with rubies, your gates with sparkling jewels, your walls with precious stones; your children will be taught by the LORD; great will be their peace. The catalogue of gems is visionary poetry at its most extravagant. What was afflicted and storm-tossed will not merely be repaired but transformed. Turquoise, lapis lazuli, rubies, sparkling jewels, precious stones &mdash; the materials of the rebuilt city exceed anything in the original. John sees this vision in Revelation 21:18-21 and draws directly from Isaiah: the new Jerusalem whose walls are jasper, whose gates are pearl, whose foundations are adorned with every precious stone. But the most important verse is v.13: &quot;your children will be taught by the LORD.&quot; The rebuilt city&apos;s greatest treasure is not its architecture but its inhabitants, who will be directly taught by God and will know him fully.",
  },
  {
    id: "vs5",
    ref: "vv.15-17",
    color: ROSE,
    title: "No Weapon Formed Against You Shall Prosper",
    body: "If anyone does attack you, it will not be my doing; whoever attacks you will surrender to you; no weapon formed against you will prevail; every tongue that accuses you, you will refute; this is the heritage of the servants of the LORD, and this is their vindication from me. The final movement of the chapter addresses the ongoing reality of opposition. God does not promise the absence of attack &mdash; he promises the futility of every attack. The weapon will be formed; it will not prevail. The accusation will be made; it will be refuted. This is not a charm or a magic incantation but a covenantal promise grounded in the character of God as contender. &quot;This is their vindication from me&quot; &mdash; the vindication is not self-achieved but God-given. It is the heritage: the inheritance of all servants, not the reward of the especially righteous. The servant&apos;s safety is the same as the Servant&apos;s vindication, flowing from the same everlasting love.",
  },
];

const applicationPoints = [
  {
    id: "ap1",
    color: GREEN,
    title: "Sing Before the Fruitfulness Comes",
    body: "Isaiah 54 opens with a command to sing that precedes any evidence of fruitfulness. The barren woman is not told to sing when she has children; she is told to sing before. This is the grammar of faith &mdash; the declaration that goes ahead of the experience, not because the experience doesn&apos;t matter but because God&apos;s word is more reliable than present circumstances. Where has your life felt barren? Career, relationships, ministry, prayer, spiritual vitality? The invitation of Isaiah 54:1 is to enlarge the tent before you can see who will fill it. Worship before the breakthrough. Prepare for what God has promised.",
  },
  {
    id: "ap2",
    color: PURPLE,
    title: "Receive God as Your Husband: Intimate, Faithful, Pursuing",
    body: "The marriage metaphor in Isaiah 54 is not decoration &mdash; it is the precise category God chooses. He is not a business partner, a distant benefactor, or a cosmic authority; he is a husband who calls back the deserted and distressed wife. If your experience of God has been primarily formal, contractual, or distant, Isaiah 54:5-6 invites you into something more intimate. The God who made you is the same God who pursues you. Receive the tenderness of his calling without deflecting it. The feeling of being pursued by love &mdash; even when you have been unfaithful, even when you felt deserted &mdash; is the truth of your relationship with God as Isaiah describes it.",
  },
  {
    id: "ap3",
    color: TEAL,
    title: "Rest in the Covenant of Peace That Cannot Be Removed",
    body: "The covenant of peace (v.10) is more stable than mountains. When anxiety rises, when spiritual attack intensifies, when the feeling of God&apos;s distance is acute, this is the ground to return to: God has sworn by his own character that the covenant will not be removed. He does not tire of the covenant; he does not revise its terms; he does not find reasons to nullify it. The new covenant sealed by the blood of Jesus is the fulfillment of this promise. Its security is grounded not in your consistency but in his. Rest is not the absence of struggle but the confidence that rests beneath the struggle.",
  },
  {
    id: "ap4",
    color: GOLD,
    title: "Let the Vision of the Rebuilt City Sustain You Through Present Affliction",
    body: "The afflicted, storm-tossed city (v.11) is the present reality; the city rebuilt with precious stones is the promised future. Isaiah 54 invites you to hold both at once &mdash; to name the present affliction honestly without letting it have the final word. The vision of the new Jerusalem in Revelation 21 is not escapism; it is the fuel for present endurance. What is being built from your affliction is more glorious than what you are losing. The foundations being laid beneath your suffering are sapphire; the walls being constructed are precious stone. You cannot see them yet &mdash; but they are being built by the one who makes all things new.",
  },
  {
    id: "ap5",
    color: ROSE,
    title: "Speak the Promise of Isaiah 54:17 Over Spiritual Attacks",
    body: "No weapon formed against you will prevail. This is heritage language &mdash; inheritance, birthright, the settled possession of God&apos;s servants. It is not a slogan but a covenantal declaration that can be spoken, prayed, and stood on in moments of spiritual attack. When accusation comes &mdash; from within, from others, or from the enemy &mdash; the answer is not self-defense but vindication from God. The tongue that accuses will be refuted; not by your eloquence but by the verdict of the one who contends for you. Speak this verse specifically and personally in the face of accusation, shame, fear, and spiritual warfare. It is your heritage.",
  },
  {
    id: "ap6",
    color: ACCENT,
    title: "Allow the Depth of God&apos;s Everlasting Kindness to Replace Shame",
    body: "Isaiah 54:4 speaks directly to shame: &quot;You will not be put to shame&quot; and &quot;the shame of your youth you will remember no more.&quot; Shame is one of the most persistent and corrosive spiritual conditions &mdash; it differs from guilt in that guilt says &quot;I did something wrong&quot; while shame says &quot;I am something wrong.&quot; God&apos;s answer to shame is not correction or behavior improvement but the revelation of his everlasting kindness (v.8). The kindness is everlasting; the shame is temporary. The love is unfailing; the dishonor is passing. Let the proportions of the text work on you: brief moment versus everlasting; surge of anger versus deep compassion. This is not therapeutic reassurance &mdash; it is the word of the living God.",
  },
];

export default function Isaiah54GuidePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              display: "inline-block",
              background: `${ROSE}22`,
              border: `1px solid ${ROSE}44`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 11,
              color: ROSE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: 14,
            }}
          >
            Isaiah 54 &mdash; Bible Study Guide
          </div>
          <h1
            style={{
              color: TEXT,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              margin: "0 0 14px",
            }}
          >
            Isaiah 54: Sing, Barren Woman &mdash; Your Maker Is Your Husband
          </h1>
          <p
            style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, maxWidth: 660, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Isaiah 54 follows immediately after the great Suffering Servant chapter (Isaiah 53) and applies its fruits to God&apos;s people. Because the Servant bore the sin of many, the barren woman can burst into song. Three images: the barren woman commanded to enlarge her tent (vv.1&ndash;3); the forsaken wife restored by an everlasting husband (vv.4&ndash;10); and the city rebuilt with precious stones (vv.11&ndash;17).",
            }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${activeTab === t.id ? ROSE : BORDER}`,
                background: activeTab === t.id ? `${ROSE}22` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.18s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
                Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 54 follows immediately after the great Suffering Servant chapter (Isaiah 53) and applies its fruits to God&apos;s people. Because the Servant bore the sin of many, the barren, desolate woman &mdash; Israel, the church &mdash; can now burst into song.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter uses three powerful images: the barren woman commanded to sing and enlarge her tent (vv.1&ndash;3); the forsaken wife restored by a husband of everlasting love (vv.4&ndash;10); and the city rebuilt with precious stones (vv.11&ndash;17). The chapter is a meditation on what becomes possible because of what the Servant accomplished in chapter 53.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The climax arrives in verses 16&ndash;17: &quot;No weapon formed against you will prevail; this is the heritage of the servants of the LORD, and this is their vindication from me.&quot; This is the fruit of the Servant&apos;s atoning work &mdash; a people who live under God&apos;s unbreakable covenant of peace.",
                }}
              />
            </div>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginBottom: 24,
              }}
            >
              {[
                ["Chapter", "Isaiah 54"],
                ["Verses", "17"],
                ["Context", "After Isaiah 53"],
                ["Three Images", "Barren woman, forsaken wife, rebuilt city"],
                ["NT Connection", "Revelation 21 (precious stones)"],
                ["Key Promise", "No weapon shall prosper"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      color: MUTED,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      marginBottom: 5,
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Key verse callout */}
            <div
              style={{
                background: `${ROSE}12`,
                border: `1px solid ${ROSE}33`,
                borderLeft: `4px solid ${ROSE}`,
                borderRadius: 12,
                padding: "20px 24px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: ROSE,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  marginBottom: 8,
                }}
              >
                Key Verse &mdash; Isaiah 54:17
              </div>
              <p
                style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;No weapon formed against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the LORD, and this is their vindication from me,&quot; declares the LORD.",
                }}
              />
            </div>

            {/* Connection to Isaiah 53 */}
            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 14,
                padding: "22px 26px",
                marginBottom: 24,
              }}
            >
              <div
                style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}
              >
                The Connection to Isaiah 53
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 54 cannot be read in isolation from Isaiah 53. The Servant was stricken, crushed, pierced, led like a lamb to slaughter &mdash; and as a result the barren woman sings, the forsaken wife is reclaimed, and the afflicted city is rebuilt. The connection between the chapters is causal: the fruitfulness of Isaiah 54 flows directly from the substitutionary suffering of Isaiah 53.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Galatians 4:26-27 quotes Isaiah 54:1 and applies it to the church: &quot;But the Jerusalem that is above is free, and she is our mother. For it is written: Be glad, barren woman...&quot; Paul understands the barren woman to be the church that receives the children of the promise. What was impossible by human effort becomes superabundant by the grace of the Servant&apos;s atoning work.",
                }}
              />
            </div>

            {/* Videos */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 32px",
              }}
            >
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
                Teaching Videos
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Four video studies on Isaiah 54 &mdash; the barren woman&apos;s song, the covenant of peace, no weapon formed against you, and the comfort that follows the Suffering Servant.",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p
                        style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: v.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES */}
        {activeTab === "themes" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Key Themes in Isaiah 54
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five major theological themes run through Isaiah 54. Each one flows from the Servant&apos;s work in chapter 53 and has profound implications for the church in every generation.",
                }}
              />
            </div>

            {keyThemes.map((theme) => (
              <div
                key={theme.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`,
                  borderRadius: 14,
                  marginBottom: 12,
                  overflow: "hidden",
                  transition: "border-color 0.18s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        background: `${theme.color}20`,
                        border: `1px solid ${theme.color}44`,
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 11,
                        color: theme.color,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      Theme
                    </span>
                    <span
                      style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                  </div>
                  <span style={{ color: theme.color, fontSize: 20, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>
                    {openTheme === theme.id ? "-" : "+"}
                  </span>
                </button>
                {openTheme === theme.id && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* New Jerusalem connection */}
            <div
              style={{
                background: `${GOLD}10`,
                border: `1px solid ${GOLD}30`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 8,
              }}
            >
              <div
                style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}
              >
                New Jerusalem and Revelation 21
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The description of the rebuilt city in Isaiah 54:11&ndash;12 is one of the direct sources for John&apos;s vision in Revelation 21. The sapphire foundations, the ruby battlements, the crystal and jewel gates &mdash; these appear in Revelation as the foundations adorned with precious stones and the gates of pearl. Isaiah&apos;s vision and John&apos;s vision are describing the same reality: the dwelling of God with his people, transformed beyond what affliction and exile destroyed.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This intertextual connection is not decorative. It tells us that the consolation Isaiah speaks to the exile is the same consolation John offers to the persecuted church: what God builds will be more glorious than what was destroyed. The stones of the rebuilt city are worth more than the stones of the original. Suffering does not lead to equal restoration; it leads to surpassing transformation.",
                }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === "verses" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Verse by Verse: Isaiah 54 (17 Verses)
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A verse-by-verse walkthrough of all 17 verses in five natural sections. Click each section to expand the commentary.",
                }}
              />
            </div>

            {verseGroups.map((vg) => (
              <div
                key={vg.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === vg.id ? vg.color : BORDER}`,
                  borderRadius: 14,
                  marginBottom: 12,
                  overflow: "hidden",
                  transition: "border-color 0.18s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === vg.id ? null : vg.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        background: `${vg.color}20`,
                        border: `1px solid ${vg.color}44`,
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 12,
                        color: vg.color,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {vg.ref}
                    </span>
                    <span
                      style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: vg.title }}
                    />
                  </div>
                  <span style={{ color: vg.color, fontSize: 20, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>
                    {openVerse === vg.id ? "-" : "+"}
                  </span>
                </button>
                {openVerse === vg.id && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: vg.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Structure summary */}
            <div
              style={{
                background: `${TEAL}10`,
                border: `1px solid ${TEAL}30`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 8,
              }}
            >
              <div
                style={{ color: TEAL, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}
              >
                Chapter Structure at a Glance
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 54 moves through three distinct images, each one describing the same theological reality from a different angle. The barren woman (vv.1&ndash;3) emphasizes unexpected fruitfulness. The forsaken wife (vv.4&ndash;10) emphasizes the restoration of relationship and the permanence of God&apos;s covenant love. The afflicted city (vv.11&ndash;17) emphasizes transformation and security.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "All three images converge on the same point: the people of God, who appeared to be finished &mdash; barren, forsaken, afflicted &mdash; are in fact the recipients of an overflowing, unconditional, unbreakable love that will produce outcomes beyond all natural expectation. The chapter is bracketed by expansive promises: enlarge your tent (v.2) and no weapon shall prosper (v.17). Everything in between is the foundation for both.",
                }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === "application" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Application: Living Isaiah 54
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 54 is addressed to people who feel barren, forsaken, and afflicted. Six areas of application for receiving and living out what God declares in this chapter.",
                }}
              />
            </div>

            {applicationPoints.map((ap) => (
              <div
                key={ap.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === ap.id ? ap.color : BORDER}`,
                  borderRadius: 14,
                  marginBottom: 12,
                  overflow: "hidden",
                  transition: "border-color 0.18s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === ap.id ? null : ap.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}
                    dangerouslySetInnerHTML={{ __html: ap.title }}
                  />
                  <span style={{ color: ap.color, fontSize: 20, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>
                    {openApp === ap.id ? "-" : "+"}
                  </span>
                </button>
                {openApp === ap.id && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: ap.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Closing prayer prompt */}
            <div
              style={{
                background: `${ROSE}10`,
                border: `1px solid ${ROSE}30`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 8,
              }}
            >
              <div
                style={{ color: ROSE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 12 }}
              >
                Prayer Response
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, I receive what you say over me in Isaiah 54. I am not forgotten &mdash; I am the barren woman commanded to sing and enlarge. I am not finally forsaken &mdash; I am the wife called back by the husband who made me. I am not permanently afflicted &mdash; I am the city being rebuilt with stones more precious than those I lost. I receive your covenant of peace that cannot be removed. I stand on the heritage of your servants: no weapon formed against me will prosper, no accusation will stand, because you are the one who contends. Let the everlasting kindness you name here replace the shame I have carried. I enlarge my tent today in faith.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Based on Isaiah 54:1-2, 4-5, 8, 10, 17. Use these verses as a declaration by reading them aloud over your life, your household, your church, or your ministry.",
                }}
              />
            </div>

            {/* Related passages */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 24,
              }}
            >
              <div
                style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}
              >
                Related Passages for Further Study
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Isaiah 53", note: "The Suffering Servant whose work makes Isaiah 54 possible", color: ROSE },
                  { ref: "Isaiah 62:1-5", note: "God rejoices over his people as a bridegroom over a bride", color: PURPLE },
                  { ref: "Galatians 4:26-27", note: "Paul applies Isaiah 54:1 to the church as the Jerusalem above", color: GREEN },
                  { ref: "Ephesians 5:25-32", note: "The marriage metaphor: Christ and his church as husband and wife", color: TEAL },
                  { ref: "Revelation 21:1-4, 18-21", note: "The new Jerusalem &mdash; Isaiah 54&apos;s precious stones fulfilled", color: GOLD },
                  { ref: "Hosea 2:14-20", note: "God pursuing his unfaithful wife through the wilderness to restore her", color: ACCENT },
                ].map((item) => (
                  <div
                    key={item.ref}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 14px",
                      background: BG,
                      borderRadius: 10,
                    }}
                  >
                    <span
                      style={{
                        color: item.color,
                        fontWeight: 700,
                        fontSize: 13,
                        flexShrink: 0,
                        minWidth: 140,
                      }}
                    >
                      {item.ref}
                    </span>
                    <span
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: item.note }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
