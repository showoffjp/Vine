"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "vHzXxdPOivs", title: "Isaiah 32 - The Reign of Righteousness" },
  { videoId: "L7WXAW3ONKE", title: "The Outpouring of the Spirit Isaiah 32" },
  { videoId: "U3ZVkJ7v6aI", title: "Isaiah 32 Commentary and Reflection" },
  { videoId: "Yx2XtLqO_aM", title: "Peace and Justice in Isaiah 32" },
];

const VERSE_SECTIONS = [
  {
    id: "vs1",
    ref: "Isaiah 32:1-2",
    title: "The Coming King Who Reigns in Righteousness",
    color: GREEN,
    content:
      "See, a king will reign in righteousness and rulers will rule with justice. Each one will be like a shelter from the wind and a refuge from the storm, like streams of water in the desert and the shadow of a great rock in a thirsty land. The chapter opens with a royal messianic vision: a king who rules not by might alone but by righteousness (Hebrew: tsaddiq, the quality of being in right moral order). This king is not merely a better politician but a categorically different ruler. His subordinate leaders likewise execute mishpat (justice). The imagery in verse 2 is remarkable for its sensory power: shelter from the wind, refuge from the storm, streams in the desert, rock shadow in scorched land. The king is not described as someone to whom the people owe tribute, but as one who provides for the vulnerable. This is royal theology inverted: the king serves. The NT consistently applies this vision to Jesus, who described himself as one who came not to be served but to serve (Matthew 20:28). The shelter and refuge language echoes Psalms 46 and 91 -- God himself as refuge -- and here a human king embodies those divine qualities.",
  },
  {
    id: "vs2",
    ref: "Isaiah 32:3-4",
    title: "Clarity of Sight and Speech",
    color: TEAL,
    content:
      "Then the eyes of those who see will no longer be closed, and the ears of those who hear will listen. The fearful heart will know and understand, and the stammering tongue will be fluent and clear. Verses 3-4 describe the effect of the righteous king's reign on the people. The closed eyes, the stopped ears, the fearful heart, and the stammering tongue -- these are all images of spiritual and moral incapacity. Isaiah has used these images earlier (6:9-10; 29:9-12) to describe Israel's condition of willful blindness under divine judgment. Under the righteous king, those deficits are reversed. This is not merely political improvement but anthropological restoration. People will see clearly, hear truly, understand what they could not grasp before, and speak with confidence rather than stammering fear. The connection to Isaiah 35 is important: the healing of eyes and ears in that chapter also follows from the coming of God to his people. The messianic age reverses the curses of the judgment age. Luke 4:18-19 (Jesus reading Isaiah 61) belongs in this constellation -- the anointed king's arrival changes what people can perceive and say.",
  },
  {
    id: "vs3",
    ref: "Isaiah 32:5-8",
    title: "The Fool and the Noble: Social Reversal",
    color: GOLD,
    content:
      "No longer will the fool be called noble nor the scoundrel be highly respected. For fools speak folly, their hearts are bent on evil: they practice ungodliness and spread error concerning the LORD; the hungry they leave empty and from the thirsty they withhold water. The scoundrel's methods are wicked, he makes up evil schemes to destroy the poor with lies, even when the plea of the needy is just. But the noble make noble plans, and by noble deeds they stand. Isaiah here addresses a pervasive social pathology: the misidentification of character. In the present disordered age, the fool (nabal) is called noble (nadib) and the scoundrel (kesil) is treated with honor. This is not merely confusion -- it is a fundamental inversion of the moral order. The description of the fool's behavior (vv.6-7) is morally specific: they speak folly, their hearts bend toward evil, they practice godlessness, they spread false doctrine about God, they starve the hungry and deny drink to the thirsty, they use legal schemes to victimize the poor. These are not abstract sins but concrete violations of the covenant obligations to the vulnerable. The scoundrel weaponizes the legal system to crush the very people the system was supposed to protect. The contrast in verse 8 is beautiful in its simplicity: the noble (nadib) makes noble (nadiboth) plans and on noble deeds he rises. Character produces corresponding action, which produces corresponding standing. Under the righteous king, the social vocabulary will be recalibrated: names will match realities again.",
  },
  {
    id: "vs4",
    ref: "Isaiah 32:9-14",
    title: "Warning to the Complacent Women",
    color: ROSE,
    content:
      "You women who are so complacent, rise up and listen to me; you daughters who feel secure, hear what I have to say! In a little more than a year you will tremble, you complacent women; for the grape harvest will fail, and the fruit harvest will not come. Tremble, you complacent women; shudder, you daughters who feel secure! Strip off your fine clothes and wrap yourselves in rags. Beat your breasts for the pleasant fields, for the fruitful vines and for the land of my people, a land overgrown with thorns and briers -- yes, mourn for all houses of joy and for this city of revelry. The fortress will be abandoned, the noisy city deserted; citadel and watchtower will become a wasteland forever, the delight of donkeys, a pasture for flocks. This passage is one of the most direct prophetic confrontations in Isaiah -- addressed specifically to the women of Jerusalem who have embraced complacency in the face of coming judgment. Isaiah 3:16-4:1 similarly addressed the women of Zion for their vanity. The complacency (sha'anan) is not merely contentment -- it is the dangerous security of those who assume the future will look like the present. The coming judgment will disrupt agricultural abundance (vv.10-11) and urban stability (v.14). The call to beat the breast and put on sackcloth (v.11) is a call to lamentation -- the appropriate response to genuine moral and spiritual crisis. The social critique is embedded in this economic language: when the harvest fails and the city falls, those who were comfortable in their privileges will be exposed. The prophetic tradition consistently challenges comfort that is built on unjust structures.",
  },
  {
    id: "vs5",
    ref: "Isaiah 32:15-18",
    title: "The Outpouring of the Spirit from on High",
    color: PURPLE,
    content:
      "Till the Spirit is poured on us from on high, and the desert becomes a fertile field, and the fertile field seems like a forest. The LORD's justice will dwell in the desert, his righteousness live in the fertile field. The fruit of that righteousness will be peace; its effect will be quietness and confidence forever. My people will live in peaceful dwelling places, in secure homes, in undisturbed places of rest. Verse 15 is the great theological pivot of the chapter. The desolation described in vv.9-14 is not the final word. The word till introduces the reversal: the outpouring of the Spirit (Hebrew: ruach) from on high transforms everything. The desert becomes a fertile field; the fertile field expands to forest abundance. Note the sequence: Spirit poured out, then justice dwelling in the desert, then righteousness in the fertile field, then peace (shalom) as the fruit of that righteousness. This is not a political peace achieved by negotiation or military balance -- it is the organic consequence of justice and righteousness operating in social life. The Hebrew shalom encompasses wholeness, wellbeing, right relationships, and material flourishing. When the Spirit creates justice and righteousness, shalom is the necessary harvest. Peter quotes Joel 2:28-32 at Pentecost as the fulfillment of the Spirit-outpouring promise (Acts 2:17-21). Isaiah 32:15 belongs in that same prophetic cluster. The NT community understood itself to be living in the initial fulfillment of these Spirit-outpouring promises -- and living toward their complete realization.",
  },
  {
    id: "vs6",
    ref: "Isaiah 32:19-20",
    title: "The Final Verses: Hail on the Forest, Blessed Farmers",
    color: TEAL,
    content:
      "Though hail flattens the forest and the city is leveled completely, how blessed you will be, sowing your seed by every stream, and letting your cattle and donkeys range free. The final two verses are somewhat puzzling -- the hail on the forest and the leveled city seem to contradict the peaceful vision of vv.15-18. Several interpretations exist: (1) the city leveled is the enemy city, the oppressive power that had threatened God's people -- its destruction is the precondition for the flourishing described; (2) the hail represents ongoing historical disruption that does not ultimately negate the Spirit's transforming work; (3) this is a further development of the theme from vv.9-14 -- judgment falls, but those who have received the Spirit's transformation continue to flourish. The final image of verse 20 is striking in its ordinariness: farmers sowing beside streams, cattle and donkeys ranging free. The sign of messianic blessing is not supernatural fireworks but the quiet productivity of sustainable agriculture -- work done in freedom, without fear, in land that is fruitful. This is the Old Testament vision of shalom: children, animals, land, and humans all in right relationship, productive, unafraid. The kingdom of God comes not to destroy created order but to restore it.",
  },
];

const THEMES = [
  {
    color: GREEN,
    title: "Tsaddiq: The Coming Righteous King (v.1)",
    body:
      "The Hebrew word tsaddiq (righteous, or one who is in right moral order) appears in verse 1 to describe the coming king. This is not merely a moral quality but a covenantal one -- the king who rules in tsaddiq is the king who acts in accordance with the covenant obligations binding him to God and to the people. The OT expectation of a messianic king builds across the prophets: Isaiah 9:6-7 (the Prince of Peace on David's throne), Isaiah 11:1-5 (the Spirit-filled Branch who judges with righteousness), Jeremiah 23:5-6 (the Branch who is called 'The LORD our Righteous Savior'), Ezekiel 34 (the shepherd-king). Isaiah 32 belongs in this cluster. The NT identification of Jesus as this king is consistent and explicit -- Paul in Romans 3:26 calls God 'just and the justifier' of those who have faith in Jesus, using the same root.",
  },
  {
    color: PURPLE,
    title: "Ruach: The Spirit Poured from on High (v.15)",
    body:
      "The Hebrew ruach (spirit, breath, wind) is used throughout Isaiah in connection with both the Spirit of God and the breath of life. In Isaiah 32:15, the specific phrase 'poured from on high' (from the root shaphak, to pour out) anticipates the Joel 2:28 language of 'pouring out the Spirit on all people.' This outpouring is not an internal individual experience alone but a social and ecological transformation: the desert becomes fertile, justice dwells in the wilderness, peace follows righteousness. The Spirit is not merely the source of religious experience but the agent of new creation. This theology of the Spirit as the agent of social transformation (not just personal piety) is crucial for understanding both Isaiah and the NT. The early church at Pentecost understood itself to have received the promised Spirit and to be the community in which the desert-to-garden transformation was beginning.",
  },
  {
    color: GOLD,
    title: "Shalom: Peace as the Fruit of Righteousness (v.17)",
    body:
      "Isaiah 32:17 gives one of the most theologically dense formulations of peace in the entire Old Testament: 'The fruit of that righteousness will be peace (shalom); its effect will be quietness and confidence forever.' The sequence is deliberate -- righteousness (tsedaqah) produces shalom. This means peace is not the starting point but the outcome. You cannot achieve shalom by negotiating for it directly; it comes as the harvest of justice and righteousness operating in social life. The Hebrew shalom encompasses far more than the absence of conflict: it includes wholeness, health, material prosperity, right relationships, and communal flourishing. The word translated 'quietness' (hashqet) and 'confidence' (betah) add two more dimensions -- a settled interior tranquility and an outward security that does not need to be defended by anxiety. This vision of shalom shapes the NT teaching on peace: Romans 5:1 (peace with God through justification), Ephesians 2:14-17 (Christ our peace who reconciles Jew and Gentile), and Revelation 21-22 (the new creation where there is no more crying or pain).",
  },
  {
    color: ROSE,
    title: "Complacency: The Warning Against False Security (vv.9-14)",
    body:
      "The prophetic challenge to complacency (sha'anan) in Isaiah 32 is one of the most direct confrontations in the book. The complacent are not described as actively wicked -- they are simply inattentive to the reality of their situation. They feel secure (batach -- the same word used for genuine trust in God, but here displaced onto false foundations) in a world that is about to be disrupted. Amos 6:1 offers a parallel: 'Woe to you who are complacent in Zion.' Jesus's parable of the rich fool (Luke 12:16-21) -- the man who builds larger barns and says 'eat, drink and be merry' before dying that very night -- inhabits this same prophetic tradition. The complacency Isaiah warns against is not laziness but the spiritual numbness of those who have organized their lives around the assumption that the present comfortable order will continue indefinitely. The prophetic word disrupts that assumption not to cause despair but to create the possibility of genuine repentance and hope.",
  },
  {
    color: TEAL,
    title: "Social Reversal: When the Vocabulary of Honor Is Recalibrated (vv.5-8)",
    body:
      "Isaiah 32:5-8 addresses the chronic problem of misaligned social honor -- the fool called noble, the scoundrel respected. This is not merely an Isaiah theme; it runs throughout Scripture. The Beatitudes (Matthew 5:3-12) describe the blessed as those whom the present world overlooks or persecutes. Luke's Magnificat (1:46-55) celebrates God scattering the proud and lifting up the humble. Revelation's letters to the seven churches repeatedly distinguish between those who are 'rich' in worldly estimation and poor in God's, and those who are 'poor' in worldly terms but rich toward God (Revelation 2:9; 3:17). Under the righteous king, the social vocabulary itself is reformed: the nadib (noble) is defined by noble deeds, not by birth or wealth. The fool's claim to honor is exposed as empty because his actions -- withholding food and water from the hungry, using legal schemes to victimize the poor -- contradict the covenant obligations that define genuine nobility.",
  },
];

export default function Isaiah32GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Major Prophet &middot; Isaiah 32
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Isaiah 32: The Coming Righteous King and the Outpouring of the Spirit
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 32 is a chapter of remarkable theological density: a vision of the coming righteous king (vv.1&ndash;2), a social critique of misaligned honor and complacency (vv.3&ndash;14), and the climactic promise of the Spirit poured out from on high that transforms desert into garden and produces shalom as its harvest (vv.15&ndash;20)." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Isaiah", color: GREEN },
              { label: "Chapter", value: "32 (20 verses)", color: TEAL },
              { label: "Period", value: "~700 BC", color: GOLD },
              { label: "Key Word", value: "Ruach / Spirit", color: PURPLE },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                background: activeTab === t.id ? `${GREEN}22` : "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
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

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32 sits within the larger section of Isaiah 28&ndash;35, a sequence of six woes against various forms of unfaithfulness and misplaced trust. Chapter 31 ends with a call to return to the LORD and the announcement that Assyria will fall. Chapter 32 begins with the positive corollary: not merely Assyria&rsquo;s defeat, but the vision of what the world looks like when a righteous king reigns." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter falls into three clear movements: (1) The vision of the coming righteous king and his effect on society (vv.1&ndash;8); (2) The prophetic confrontation with the complacent women of Jerusalem and the coming desolation (vv.9&ndash;14); (3) The reversal through the Spirit poured from on high, producing justice, righteousness, peace, and security (vv.15&ndash;20)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What makes this chapter theologically important is the explicit connection between the Spirit&rsquo;s outpouring and social transformation. The Spirit does not merely create individual spiritual experience &mdash; the Spirit&rsquo;s arrival transforms the ecological and social order: deserts bloom, justice takes up residence in the wilderness, and peace is the fruit of righteousness operating in community life." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Context in the Book of Isaiah</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32 belongs to the first half of Isaiah (chs. 1&ndash;39), the section primarily characterized by oracles of judgment against Israel, Judah, and the surrounding nations. But within that judgment section there are persistent shafts of messianic and eschatological hope: the Immanuel prophecy (7:14), the Prince of Peace (9:6&ndash;7), the Spirit-filled Branch of Jesse (11:1&ndash;9), and the new exodus glimpsed in chapters 35 and 40." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32:15 with its Spirit-outpouring language connects forward to Isaiah 44:3 (&ldquo;I will pour water on the thirsty land, and streams on the dry ground; I will pour out my Spirit on your offspring&rdquo;) and to Joel 2:28&ndash;32, which Peter cites at Pentecost as fulfilled. The chapter thus stands at a crucial intersection: rooted in the historical crisis of Assyrian threat, but pointing forward to the eschatological renewal that the NT will identify with the ministry of Jesus and the coming of the Holy Spirit." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Tsaddiq", transliteration: "tsad-DEEK", meaning: "Righteous, in right moral order", verse: "v.1 &mdash; the king who reigns in righteousness", color: GREEN },
                  { word: "Ruach", transliteration: "ROO-akh", meaning: "Spirit, breath, wind", verse: "v.15 &mdash; the Spirit poured from on high", color: PURPLE },
                  { word: "Shalom", transliteration: "sha-LOM", meaning: "Peace, wholeness, wellbeing, right relationships", verse: "v.17 &mdash; fruit of righteousness will be shalom", color: TEAL },
                  { word: "Mishpat", transliteration: "mish-PAT", meaning: "Justice, right judgment, legal order", verse: "v.1 &mdash; rulers who rule with justice", color: GOLD },
                  { word: "Sha'anan", transliteration: "sha-ah-NAN", meaning: "Complacent, at ease, carelessly secure", verse: "v.9 &mdash; the complacent women", color: ROSE },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 32</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32 weaves together four major theological threads that recur throughout the prophetic literature and find their fulfillment in the New Testament: the coming righteous king, the transforming Spirit, the fruit of shalom, and the prophetic challenge to complacency." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Spirit-Justice-Shalom Sequence</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "One of the most important theological contributions of Isaiah 32 is the explicit three-stage sequence in verses 15&ndash;17:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { step: "1", label: "Spirit poured from on high (v.15)", desc: "The divine initiative -- the ruach descends and transforms", color: PURPLE },
                  { step: "2", label: "Justice and righteousness take root (vv.15-16)", desc: "Mishpat and tsedaqah dwell in what was desert and fertile field", color: GREEN },
                  { step: "3", label: "Shalom is the fruit (v.17)", desc: "Peace, quietness, and confidence are the harvest of righteousness", color: TEAL },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ color: MUTED, fontSize: 13 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This sequence resists two common distortions: the purely individualistic reading (the Spirit only produces personal holiness) and the purely political reading (justice is achieved by human effort alone). Isaiah 32 insists that genuine social transformation &mdash; real shalom &mdash; requires the Spirit&rsquo;s prior outpouring and that the Spirit&rsquo;s outpouring produces justice and peace as its necessary social fruit." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 32</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32&rsquo;s twenty verses are grouped below by thematic unit. Click any section to expand the commentary. The accordion covers all verses 1&ndash;20." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Isaiah 32:1", "Isaiah 32:2", "Isaiah 32:5", "Isaiah 32:8", "Isaiah 32:9", "Isaiah 32:15", "Isaiah 32:17", "Isaiah 32:18", "Isaiah 32:20"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Living in the Already and Not Yet</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 32 raises the central question for the Christian community: how do we live in the tension between the coming righteous king who is already identified as Jesus, and the world we currently inhabit that still looks far more like vv.9&ndash;14 than vv.15&ndash;18? How do we live in hope of the full coming of the king while the Spirit is already poured out?" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The NT answer is the &ldquo;already and not yet&rdquo; of the kingdom. The Spirit has been poured out (Acts 2). The righteous king has come in Jesus and will come in final glory. The community of the Spirit already manifests justice, righteousness, and peace as the fruit of the Spirit&rsquo;s work &mdash; imperfectly, partially, as a foretaste &mdash; and lives toward the day when the king&rsquo;s rule is total and uncontested." }}
              />
            </div>

            {[
              {
                color: GREEN,
                title: "Refusing Complacency: Staying Alert to What the Spirit Is Doing",
                icon: "01",
                body: "Isaiah's warning to the complacent women (vv.9-14) is a warning that applies to every comfortable community in every age. Complacency is not malice -- it is inattention. The complacent are not opposed to justice; they are simply not paying attention to the gap between the vision and the reality. The prophetic discipline Isaiah models is sustained attention: to the condition of the poor (vv.6-7), to the misalignment between honor and character (vv.5-8), and to the signs that the present comfortable order cannot sustain itself. For the contemporary church, this means developing a prophetic imagination -- the capacity to see the world as it is (not through the lens of our own comfort) and to name both its failures and its possibilities honestly.",
              },
              {
                color: PURPLE,
                title: "Seeking the Spirit's Outpouring: Prayer as the Act of Turning Toward God",
                icon: "02",
                body: "The outpouring of the Spirit in verse 15 is not something the people achieve by effort -- it is something that comes 'from on high,' from outside the human system. But the chapter's context (the call to lamentation in vv.9-14, the broader Isaiah context of returning to the LORD) makes clear that the reception of the Spirit requires a certain posture: turning away from misplaced trust (Isaiah 31:1, trusting Egypt), from complacency, and toward God in honest prayer. The church prays for the Spirit not as a magical formula but as the expression of genuine dependence on God to do what only God can do: transform deserts into gardens, make justice dwell where it currently cannot survive.",
              },
              {
                color: GOLD,
                title: "Pursuing Justice and Righteousness as Spirit-Produced Fruit",
                icon: "03",
                body: "Isaiah 32:17 insists that shalom is the fruit of righteousness, not a substitute for it. This has concrete implications: a church community cannot simply pray for peace without cultivating justice. It cannot celebrate God's presence while ignoring the hungry whom the fool leaves empty (v.6) and the poor whom the scoundrel victimizes through legal mechanisms (v.7). The fruit of the Spirit in Galatians 5:22-23 and the Spirit-produced righteousness and peace of Isaiah 32:16-17 are the same theological reality: the Spirit creates in the community the character of the righteous king. Christians participate in the messianic community by embodying the king's character -- sheltering the vulnerable, pursuing mishpat, and practicing the quietness and confidence that are marks of genuine shalom.",
              },
              {
                color: TEAL,
                title: "Hoping in the Full Coming of the King: Eschatological Confidence",
                icon: "04",
                body: "The vision of Isaiah 32:1-2 has not been fully realized. There are still fools called noble and scoundrels respected. There is still desert without rivers. The Spirit has been poured out (Acts 2), but the creation still groans (Romans 8:22). The Christian lives with this tension as a matter of eschatological hope, not disappointment. The hope is not wishful thinking -- it is grounded in the resurrection of Jesus, which is the firstfruit of the new creation (1 Corinthians 15:20-23), the guarantee that what God has begun in the outpouring of the Spirit will arrive at its completion. The farmer in Isaiah 32:20, sowing beside every stream and letting the animals range free, is a picture of quiet, confident, non-anxious productivity: the life of those who trust the king's promises and act accordingly, even before those promises are fully visible.",
              },
              {
                color: ROSE,
                title: "Recalibrating Honor: Seeing Character Where the World Sees Status",
                icon: "05",
                body: "Isaiah 32:5-8 calls for a community that names reality accurately: the fool is a fool, the noble is noble, based on deeds not status. This is countercultural in every age. The contemporary church faces the same temptation Isaiah named: honoring people for their wealth, influence, platform, or institutional position rather than for their character and the quality of their service to the vulnerable. The righteous king's community practices what Paul articulates in Romans 12:10 (honor one another above yourselves) and James 2:1-4 (no favoritism based on appearance or wealth). The recalibration of honor is not cynicism about human achievement -- it is a restoration of the covenant vocabulary in which genuine nobility is defined by how one treats the most vulnerable.",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Where in your life or community have you settled into the complacency Isaiah warns against in vv.9-14? What does the prophetic call to lamentation look like in that context?",
                  "Isaiah 32:17 says shalom is the fruit of righteousness. Where do you see communities trying to achieve peace without the root of justice? What does it look like to pursue the root instead of shortcutting to the fruit?",
                  "The Spirit has already been poured out (Acts 2). How does that reality shape how you pray for the Spirit now? What are you expecting the Spirit to do?",
                  "Isaiah 32:1-2 describes the coming king as one who provides shelter, refuge, water, and shade. In what practical ways does your church community embody those provisions for the vulnerable?",
                  "The fool is called noble and the scoundrel is honored (v.5). What cultural mechanisms in your context make it easy to honor the wrong things? How does the gospel reorient that?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${GREEN}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Isaiah 32.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
