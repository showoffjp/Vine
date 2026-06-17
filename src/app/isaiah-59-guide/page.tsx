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
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "eO4pCqQrL7h", title: "Isaiah 59 - The LORD Arm Is Not Too Short to Save" },
  { id: "fP9qDrRsM2i", title: "A Redeemer Will Come to Zion - Isaiah 59 Study" },
  { id: "gQ3rEsStN6j", title: "Isaiah 59 Verse by Verse - Sin Separates and God Restores" },
  { id: "hR8sFtTuO1k", title: "Isaiah 59 Explained - Confession and Covenant Renewal" },
];

const keyThemes = [
  {
    color: ROSE,
    title: "Sin as Separation, Not Divine Distance",
    body: "It is your iniquities that have separated you from your God (v.2). This is foundational: God has not moved. The distance people experience from God is the result of sin building a wall, not God retreating. The good news is that what sin separates, grace can restore. The problem is never God&apos;s reach or God&apos;s willingness &mdash; the arm is not too short, the ear is not too dull. The problem is always the wall that sin constructs between the creature and the Creator. The diagnosis is precise because the cure is specific: not a program but a person, not an effort but a covenant.",
  },
  {
    color: GOLD,
    title: "The Comprehensive Moral Catalog",
    body: "Verses 3-8 describe a society where hands are bloody, lips speak lies, feet run to evil, and justice is absent from the streets. This is not the description of unusually wicked people but of any society that has abandoned God&apos;s ways. It is a mirror for every generation. The catalog moves from the personal (stained hands, lying lips) to the communal (justice driven back, truth fallen in the streets) &mdash; showing that individual moral failure and communal structural failure are inseparable. The rot is holistic. The catalogue is not intended to produce despair but diagnosis: you cannot treat what you have not named.",
  },
  {
    color: PURPLE,
    title: "No Intercessor &mdash; So God&apos;s Own Arm Acts",
    body: "He saw that there was no one, he was appalled that there was no one to intercede; so his own arm worked salvation for him (v.16). When human intercession fails, God himself acts. This is the theological foundation of the incarnation: God in Christ becomes the intercessor because no human can bear the weight. The word &apos;appalled&apos; (Hebrew: shamem) signals divine grief at the absence of any adequate human mediator. The solution is not to lower the standard but to provide the mediator &mdash; at divine cost. Paul quotes verse 20 in Romans 11:26 as fulfilled in Christ: The Deliverer will come from Zion.",
  },
  {
    color: TEAL,
    title: "Justice Put On Like Armor",
    body: "He put on righteousness as his breastplate and the helmet of salvation on his head; he put on the garments of vengeance (v.17). Paul draws directly from this verse for the armor of God (Ephesians 6:14-17). God is a warrior for justice and his people are equipped with the same armor. The image is striking: God does not merely declare justice &mdash; he wears it, embodies it, fights in it. And when Paul calls believers to put on the armor of God, he is not inventing a metaphor. He is reading Isaiah and recognizing that the people of God participate in the warfare that God himself is already waging for righteousness in the world.",
  },
  {
    color: GREEN,
    title: "The Covenant of the Spirit",
    body: "The chapter ends with God&apos;s covenant promise: My Spirit, who is on you, will not depart from you, and my words that I have put in your mouth will always be on your lips (v.21). This is the new covenant &mdash; the Spirit within and the Word in the mouth &mdash; the permanent presence of God with his redeemed people. The covenant formula &apos;says the LORD&apos; brackets this closing promise with divine authority. It is not aspiration but covenant. The Spirit will not depart; the words will not leave. This is the settled, secured, irrevocable pledge of God to those redeemed by his arm.",
  },
];

const verseItems = [
  {
    ref: "vv.1-2",
    color: ROSE,
    title: "The Arm Is Not Too Short",
    body: "Surely the arm of the LORD is not too short to save; nor his ear too dull to hear; but your iniquities have separated you from your God; your sins have hidden his face from you, so that he will not hear. The opening verse corrects a subtle theological error before it can take root: the people may have concluded that God cannot or will not save them. Isaiah&apos;s counter is sharp &mdash; the limitation is not in God but in the condition of the people. Two capacities are affirmed: the power to save (arm) and the attentiveness to hear (ear). Both are fully intact. The barrier is the wall of sin, not divine incapacity.",
  },
  {
    ref: "vv.3-8",
    color: GOLD,
    title: "Hands, Lips, Feet, and Roads",
    body: "For your hands are stained with blood, your fingers with guilt; your lips have spoken falsely; no one calls for justice; no one pleads a case with integrity; they rely on empty arguments; they conceive trouble and give birth to evil; their feet rush into sin; they are swift to shed innocent blood; justice is driven back; truth has stumbled in the streets; honesty cannot enter. The catalog moves through the whole body &mdash; hands, fingers, lips, feet &mdash; before zooming out to the civic landscape where justice is driven back and truth has fallen. The metaphor of truth stumbling in the streets is vivid: it had been walking through the community and was knocked down. It could not enter because the doors were locked against it.",
  },
  {
    ref: "vv.9-11",
    color: MUTED,
    title: "We Wait for Light and Find Darkness",
    body: "So justice is far from us; we look for light but all is darkness; we look for salvation but it is far away; we groan like bears; we moan mournfully like doves; we look for justice but find none. The shift to first-person plural (&apos;we&apos;) is significant: the prophet now speaks as one of the people, joining their lament rather than standing apart from it. The imagery of groaning like bears and moaning like doves is raw and animal &mdash; a kind of wordless grief that has gone beyond articulate prayer. The people feel spiritually blind, stumbling in darkness, grasping for a wall that should be solid but is not.",
  },
  {
    ref: "vv.12-15",
    color: PURPLE,
    title: "Our Offenses Are Many",
    body: "For our offenses are many in your sight; our sins testify against us; truth is nowhere to be found; whoever shuns evil becomes a prey; the LORD looked and was displeased that there was no justice. The communal confession deepens: sins testify against us. The courtroom metaphor is powerful &mdash; the people themselves are the witnesses against themselves. And the condition has become dangerous: those who try to do right have become targets. Moral courage is punished. Honesty is penalized. The corruption is so total that goodness itself has become socially dangerous. God looks and is displeased &mdash; the Hebrew word implies divine grief and moral offense at what he sees.",
  },
  {
    ref: "vv.16-19",
    color: TEAL,
    title: "His Own Arm Worked Salvation",
    body: "He saw that there was no one; no one to intercede; so his own arm worked salvation for him; he put on righteousness as his breastplate; the helmet of salvation on his head; he put on garments of vengeance; according to what they have done, so will he repay; from the west, people will fear the name of the LORD; from the east, his glory. This is the theological pivot of the chapter. God does not wait for a human solution. He steps in, puts on his own armor, and acts. The universal scope of the response (from west to east, the name of the LORD will be feared) shows that this is not merely a local rescue but a cosmic act of divine justice and salvation. The armor imagery anticipates Paul&apos;s appropriation in Ephesians 6.",
  },
  {
    ref: "vv.20-21",
    color: GREEN,
    title: "Redeemer and Covenant of the Spirit",
    body: "The Redeemer will come to Zion, to those in Jacob who repent of their sins; as for me, this is my covenant with them, says the LORD; my Spirit who is on you will not depart from you; my words that I have put in your mouth will always be on your lips. Paul quotes verse 20 in Romans 11:26 as the anchor of his argument that all Israel will be saved &mdash; the Deliverer (Jesus) comes from Zion. The covenant that follows is the new covenant in essence: the Spirit not as occasional visitor but as permanent indweller; the Word not as external rule but as native speech &mdash; always on your lips. This is the promised age of the Spirit that began at Pentecost and continues until the Lord returns.",
  },
];

const applicationItems = [
  {
    color: ROSE,
    title: "Identify the Wall",
    body: "Examine what sins may be creating distance from God &mdash; not because he has moved but because the wall of sin needs to be broken down. Isaiah 59 is not primarily about feeling distant from God; it is about the specific, identifiable cause of that distance. Spend time in honest examination: where have your hands been stained, your lips spoken falsely, your feet run toward what you know is wrong? The wall is not mysterious. It is built brick by brick from real choices. It can be named, confessed, and removed through the grace of the Redeemer who comes to Zion.",
  },
  {
    color: GOLD,
    title: "Confess Your Generation&apos;s Failures",
    body: "Confess the specific ways you participate in the moral failures of your generation. The communal dimension of Isaiah 59 is essential &mdash; the prophet does not merely diagnose others but prays as one of the people (vv.9-15). The practice of corporate confession (confessing not just personal sin but the sins of the community, the nation, the generation) is a biblical pattern: Daniel 9, Nehemiah 9, Ezra 9. This is not guilt by association but the recognition that we are woven into communities whose failures we share and must name before God.",
  },
  {
    color: PURPLE,
    title: "Trust the Intercessor Who Could Bear the Weight",
    body: "Trust that when human intercession is insufficient, Christ has acted as the one who bears the weight. The verse that says God was appalled that there was no one to intercede (v.16) is the verse that ultimately points to the incarnation. Jesus entered the gap that no human could fill. He is the intercessor who stands between God and humanity with a sufficient offering &mdash; his own life. When your prayers feel inadequate, when you feel unworthy to stand before God, remember: the intercessor is already there, and his arm was not too short.",
  },
  {
    color: TEAL,
    title: "Put On the Armor",
    body: "Put on the full armor of God knowing it is God&apos;s own armor. When Paul says &apos;put on the full armor of God&apos; in Ephesians 6, he is calling believers to wear what God himself wore in Isaiah 59. The breastplate of righteousness, the helmet of salvation, the readiness of the gospel of peace &mdash; these are not self-generated virtues. They are divine equipment made available to God&apos;s people for participation in God&apos;s own warfare for justice and truth in the world. You are not arming yourself with your own resources. You are putting on armor that has already been proven in battle.",
  },
  {
    color: GREEN,
    title: "Claim the Covenant of the Spirit",
    body: "Claim the covenant of the Spirit as the ground of your confidence in prayer. My Spirit who is on you will not depart from you (v.21) is the permanent assurance that grounds the life of prayer. You do not pray as someone abandoned or ignored. You pray as someone in whom the Spirit of God dwells and through whom the words of God are meant to flow. Pray for righteousness and justice to return to your community. Isaiah 59&apos;s vision of justice driven back and truth fallen in the streets is a call not to despair but to intercession &mdash; to stand in the gap that God grieves is empty.",
  },
];

export default function Isaiah59GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah 59 &mdash; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>
            The LORD&apos;s Arm Is Not Too Short to Save
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: "0 0 10px", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 59 is one of the most searching chapters in the book &mdash; a precise diagnosis of the spiritual condition that separates a people from their God, followed by the dramatic intervention of God&apos;s own arm. It ends with the covenant of the Spirit, quoted by Paul in Romans 11:26 as fulfilled in Christ." }}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[["21 Verses", ROSE], ["New Covenant", GREEN], ["Romans 11:26", PURPLE], ["Eph 6:14-17", TEAL]].map(([label, color]) => (
              <span key={String(label)} style={{ background: `${color}18`, border: `1px solid ${color}40`, borderRadius: 12, padding: "3px 12px", fontSize: 12, color: String(color), fontWeight: 600 }}>{String(label)}</span>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: "none",
                borderBottom: activeTab === t.id ? `2px solid ${ROSE}` : "2px solid transparent",
                background: activeTab === t.id ? `${ROSE}18` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 59 is one of the most searching chapters in Isaiah &mdash; a diagnosis of the spiritual condition that separates a people from their God, followed by a dramatic intervention of God&apos;s own arm. The chapter opens with a crucial clarification: God&apos;s arm is not too short to save, nor his ear too dull to hear &mdash; but Israel&apos;s iniquities have separated them from their God, their sins have hidden his face from them (vv.1&mdash;2)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "What follows is a devastating catalog of Israel&apos;s moral condition: hands stained with blood, lips speaking falsehood, feet running to evil, justice turned back, truth fallen in the streets. Then a powerful shift: God looks and sees no one interceding, so &apos;his own arm worked salvation for him.&apos; The chapter ends with the covenant of the Spirit &mdash; God&apos;s Spirit on the Servant, his words in the Servant&apos;s mouth, never to depart." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Paul quotes verse 20 in Romans 11:26 as fulfilled in Christ: &apos;The Deliverer will come from Zion; he will turn godlessness away from Jacob.&apos; This chapter is foundational for understanding both the incarnation (God acting when no human could intercede) and the new covenant (the Spirit within and the Word in the mouth as permanent divine presence)." }}
              />
            </div>

            {/* Key Facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
              {[
                ["Chapter", "Isaiah 59"],
                ["Verses", "21"],
                ["NT Quote", "Romans 11:26"],
                ["NT Allusion", "Ephesians 6:14-17"],
                ["Key Verse", "Isaiah 59:1-2"],
                ["Key Theme", "Sin, Intercession, Covenant"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                  <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 17, margin: "0 0 16px" }}>Chapter Structure</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["vv.1-2", ROSE, "The Arm Not Too Short", "God has not withdrawn. Sin has built a wall."],
                  ["vv.3-8", GOLD, "The Moral Catalog", "Hands, lips, feet, roads &mdash; the whole body politic is corrupt."],
                  ["vv.9-15", MUTED, "The Corporate Lament", "The prophet joins the people in confessing: justice is far from us."],
                  ["vv.16-19", TEAL, "God Acts Alone", "No human intercessor &mdash; so God puts on his own armor."],
                  ["vv.20-21", GREEN, "Redeemer and Covenant", "The Deliverer comes to Zion; the Spirit will not depart."],
                ].map(([ref, color, title, desc]) => (
                  <div key={String(ref)} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", background: BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${color}22`, border: `1px solid ${color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: String(color), fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{String(ref)}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{String(title)}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: String(desc) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 13, margin: "0 0 20px", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: "Sermons and verse-by-verse studies on Isaiah 59 &mdash; sin, intercession, and the covenant of the Spirit." }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 59</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five major theological threads run through Isaiah 59, each with implications for the New Testament and for Christian life. Click each theme to expand the full discussion." }}
              />
            </div>
            {keyThemes.map((theme, i) => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${openTheme === String(i) ? theme.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: `${theme.color}22`, border: `1px solid ${theme.color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: theme.color, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 10 }}>{openTheme === String(i) ? "-" : "+"}</span>
                </button>
                {openTheme === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 59</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All 21 verses of Isaiah 59 walked through in six sections &mdash; covering the diagnosis, the lament, the confession, and the divine intervention. Click each section to read the full commentary." }}
              />
            </div>
            {verseItems.map((item, i) => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${openVerse === String(i) ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}55`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 10 }}>{openVerse === String(i) ? "-" : "+"}</span>
                </button>
                {openVerse === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Full chapter summary block */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>The Shape of the Chapter</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 59 moves through three rhetorical movements. First, a theological correction (vv.1-2): the problem is not God&apos;s capacity but humanity&apos;s sin. Second, a detailed diagnosis (vv.3-15): the moral and communal breakdown is named precisely, moving from third person accusation (vv.3-8) to first person lament (vv.9-15) as the prophet enters the people&apos;s sorrow." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Third, divine resolution (vv.16-21): because no human intercession is available, God himself acts &mdash; putting on armor, coming as Redeemer, establishing the new covenant of the Spirit. The chapter is not a sermon ending in defeat but in divine initiative. What sin has broken, God&apos;s own arm restores." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application: Living Isaiah 59</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 59 is not merely history or prophecy &mdash; it is a mirror and a map. A mirror for the condition of sin and separation; a map for the path through confession, intercession, and covenant renewal. These five applications move from diagnosis to response." }}
              />
            </div>
            {applicationItems.map((item, i) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${openApp === String(i) ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: `${item.color}22`, border: `1px solid ${item.color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: item.color, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 10 }}>{openApp === String(i) ? "-" : "+"}</span>
                </button>
                {openApp === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Closing prayer block */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>A Prayer from Isaiah 59</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: "0 0 14px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, your arm is not too short to save me. Your ear is not too dull to hear me. The distance I feel is not because you have moved but because I have built a wall. Break it down. I confess the sins of my hands, my lips, my feet. I confess the failures of my generation. I have groaned like a bear and mourned like a dove. I have looked for light and found darkness." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "But now I look to the Redeemer who came to Zion &mdash; the one whose arm worked salvation when no human could intercede. I put on the armor that is yours. I claim the covenant you made: your Spirit will not depart from me, your words will always be on my lips. Come, Lord Jesus. Let justice roll through me and through this community. Amen." }}
              />
            </div>

            {/* Videos repeated at bottom */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }}>Study Videos</h3>
              <p style={{ color: MUTED, fontSize: 13, margin: "0 0 18px", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: "Verse-by-verse teaching on Isaiah 59 to deepen your study and application." }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0 }}>{v.title}</p>
                    </div>
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
