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
  { id: "iS3tGuUvP5l", title: "Isaiah 65 - Behold I Create New Heavens and a New Earth" },
  { id: "jT8uHvVwQ9m", title: "The Wolf and the Lamb Feed Together - Isaiah 65 Study" },
  { id: "kU2vIwWxR4n", title: "Isaiah 65 Verse by Verse - The New Creation Explained" },
  { id: "lV7wJxXyS8o", title: "Isaiah 65 Explained - Joy in the New Jerusalem" },
];

const keyThemes = [
  {
    color: ROSE,
    title: "God&apos;s Outstretched Hands to a Rebellious People",
    body: "All day long I have held out my hands to an obstinate people (v.2). This is one of the most poignant images of divine patience in Scripture &mdash; God actively reaching toward people who walk in ways not good. Paul quotes this in Romans 10:21. God&apos;s patience is not indifference but persistent, costly love. The phrase &apos;all day long&apos; emphasizes duration: God does not stretch out his hands for a season or a generation &mdash; he holds them out continuously. The posture is urgent and open, like a parent waiting for a prodigal child at the end of the road. And the people are described not as ignorant but as obstinate &mdash; they know what they are doing and choose otherwise.",
  },
  {
    color: GOLD,
    title: "The Remnant Principle",
    body: "Even within the rebellious nation, God preserves a remnant: as when juice is still found in a cluster of grapes and people say &apos;Don&apos;t destroy it, there is still some good in it&apos; (v.8). God&apos;s judgment is never wholesale destruction of his people &mdash; there is always a seed of promise within the husk of failure. The grape-cluster image is earthy and precise: even in a mostly spoiled harvest, the winemaker preserves what is good. God is the winemaker who does not destroy the whole cluster because it contains good fruit. This principle &mdash; remnant within the larger community &mdash; runs through the entire OT and into Paul&apos;s argument in Romans 9-11.",
  },
  {
    color: TEAL,
    title: "New Heavens and New Earth",
    body: "The new creation is not the repair of the old but the replacement of the old with something radically better. The former things will not be remembered (v.17). This vision drives the eschatological hope of the New Testament (2 Peter 3:13, Revelation 21:1). Creation is not ultimately lost but transformed. The word &apos;create&apos; (Hebrew: bara) is the same word used in Genesis 1:1 &mdash; reserved in the OT for God&apos;s sovereign creative acts. This is not renovation; it is new creation. Revelation 21 explicitly quotes Isaiah 65:17 and 65:19 in its vision of the new Jerusalem. Isaiah is not merely the backdrop for Revelation&apos;s vision &mdash; it is the source text.",
  },
  {
    color: PURPLE,
    title: "Joy and Longevity in the New Jerusalem",
    body: "In the new creation, people will live to the fullness of God&apos;s intended lifespan. They will build houses and live in them; plant vineyards and eat their fruit. The frustration of labor (Genesis 3&apos;s curse) is undone. Joy replaces weeping; answered prayer replaces futile petition. The specific details of Isaiah 65&apos;s new creation vision are deliberately physical and social: houses, vineyards, children, labor, answered prayer. This is not a description of disembodied existence in a non-material heaven. It is the redemption of material life &mdash; work that produces what it promises, community where children flourish, prayer that is answered before the words are finished.",
  },
  {
    color: GREEN,
    title: "Shalom in the Animal Kingdom",
    body: "The wolf and the lamb will feed together; the lion will eat straw like the ox (v.25). This reversal of predator-prey relationships signals the total restoration of creation&apos;s original order &mdash; the peace (shalom) of Eden fully realized. Isaiah 11:6-9 expands on the same vision. The whole creation participates in redemption. Paul picks up this theme in Romans 8:21 &mdash; the creation itself will be liberated from its bondage to decay. The predator-prey reversal is not a detail about animals; it is a signal of the comprehensive scope of God&apos;s redemptive purpose. Nothing in creation falls outside the new creation&apos;s healing reach.",
  },
];

const verseItems = [
  {
    ref: "vv.1-5",
    color: ROSE,
    title: "Here Am I &mdash; To Those Who Did Not Ask",
    body: "I revealed myself to those who did not ask for me; I was found by those who did not seek me; I said here am I, here am I; all day long I have held out my hands to an obstinate people; who walk in ways not good, pursuing their own imaginations; a people who continually provoke me to my very face; who say stand back, don&apos;t come near me, for I am too sacred for you. Paul quotes verses 1-2 in Romans 10:20-21 to describe both the Gentiles finding God (v.1) and Israel&apos;s persistent rejection (v.2). The opening paradox is striking: God is found by those who did not seek, yet he holds out his hands to those who should be seeking and refuse to. The grace that finds the unprepared is the same grace that persists toward the obstinate. Divine initiative is the constant; human response is the variable.",
  },
  {
    ref: "vv.6-7",
    color: GOLD,
    title: "I Will Not Keep Silent",
    body: "I will not keep silent but will pay back in full; I will pay back into their laps both your sins and the sins of your ancestors together; says the LORD. The language of accountability is clear &mdash; God is not indifferent to persistent rebellion. The reference to &apos;sins of your ancestors together&apos; does not mean children are punished for parents&apos; sins but that the accumulated pattern of multi-generational idolatry reaches a point of reckoning. The phrase &apos;I will not keep silent&apos; should be read against the backdrop of God&apos;s patient silence during the long period of Israel&apos;s rebellion. Silence is not absence; God has been witnessing. When he speaks, it will be with precision and completeness.",
  },
  {
    ref: "vv.8-10",
    color: MUTED,
    title: "Do Not Destroy It &mdash; The Good Cluster",
    body: "As when juice is still found in a cluster of grapes; this is what the LORD says: do not destroy it, there is still some good in it; so will I do in behalf of my servants; I will not destroy them all; Sharon will become a pasture for flocks; the Valley of Achor a resting place for herds. The grape cluster image is intimate and earthy &mdash; the kind of image drawn from agricultural observation. Sharon (the coastal plain) and Achor (the valley of trouble, named after Achan&apos;s sin in Joshua 7) will become pasture land &mdash; places of productive peace. The Valley of Achor, a place of curse and failure in Israel&apos;s history, becomes a resting place. Hosea 2:15 makes the same move: the valley of trouble becomes a door of hope. God redeems even the geography of failure.",
  },
  {
    ref: "vv.11-16",
    color: PURPLE,
    title: "Fortune&apos;s Table and a Different Name",
    body: "But as for you who forsake the LORD and forget my holy mountain; who spread a table for Fortune; I will destine you for the sword; I will call my servants by another name; whoever invokes a blessing in the land will do so by the God of truth. The &apos;table for Fortune&apos; refers to the pagan practice of setting out food offerings for luck deities &mdash; a form of hedging spiritual bets. God&apos;s response is categorical: those who serve Fortune will receive their destiny; those who serve God will be called by a new name. The naming motif is significant throughout Isaiah: the servant is called, named, given a new identity. Verse 15 anticipates the new name of Revelation 2:17 and 3:12 &mdash; the redeemed receive a name that signals their belonging to God.",
  },
  {
    ref: "vv.17-20",
    color: TEAL,
    title: "See, I Will Create New Heavens and a New Earth",
    body: "See, I will create new heavens and a new earth; the former things will not be remembered; nor will they come to mind; but be glad and rejoice forever in what I will create; for I will create Jerusalem to be a delight and its people a joy; the sound of weeping and of crying will be heard in it no more; never again will there be in it an infant who lives but a few days. The abolition of infant mortality is one of the most poignant details: a culture that has normalized the premature death of children, whether through poverty, disease, or injustice, will be healed at its most tender point. The sound of weeping will not be muted or suppressed &mdash; it will be genuinely absent because its causes will be absent. Revelation 21:4 quotes this directly: God will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.",
  },
  {
    ref: "vv.21-25",
    color: GREEN,
    title: "Before They Call I Will Answer",
    body: "They will build houses and dwell in them; they will plant vineyards and eat their fruit; no longer will they build houses and others live in them; for as the days of a tree, so will be the days of my people; they will not labor in vain; before they call I will answer; while they are still speaking I will hear; the wolf and the lamb will feed together; the lion will eat straw like the ox; they will neither harm nor destroy on all my holy mountain, says the LORD. The reversal of Genesis 3 is comprehensive: the labor curse (futile work, others taking the fruit) is undone. The communication gap between God and his people is healed: prayer is answered before it is finished being prayed. And the predator-prey reversal signals the restoration of Eden&apos;s original harmony. The chapter ends not with judgment but with the image of a wolf and lamb feeding side by side on God&apos;s holy mountain.",
  },
];

const applicationItems = [
  {
    color: ROSE,
    title: "Receive God&apos;s Outstretched Hands",
    body: "Receive God&apos;s outstretched hands in your own rebellion &mdash; his patience is a gift. Isaiah 65:2 is a description of God&apos;s character, not a single historical moment. God holds out his hands all day long &mdash; and the &apos;all day long&apos; includes today. Whatever the shape of your obstinacy, whatever ways you have been walking that are not good, the posture of God toward you is open hands. This is not the posture of someone who has given up or is waiting to punish; it is the posture of someone who is waiting to embrace. To receive that embrace, you only need to stop walking in the wrong direction and turn toward the outstretched hands.",
  },
  {
    color: GOLD,
    title: "Find Encouragement in the Remnant Principle",
    body: "Find encouragement in the remnant principle: God always preserves a good cluster. If you are part of a church, community, or family that has largely turned from God, the remnant principle is for you. You are not alone. God does not destroy the whole cluster because it has bad fruit; he preserves the good fruit even when it is surrounded by failure. The remnant is not a minority report of defeat &mdash; it is the seed of the future. The servants who remain faithful in vv.8-10 receive the inheritance of Sharon and Achor. What feels like being a lonely good cluster in a spoiled harvest is actually the position of those who will see the new creation.",
  },
  {
    color: TEAL,
    title: "Let the New Creation Vision Fuel Your Endurance",
    body: "Let the new creation vision fuel your endurance in present suffering. Isaiah 65:17-25 is not escapist hope &mdash; it is the destination that makes the journey endurable. Paul says the sufferings of the present time are not worth comparing with the glory that will be revealed (Romans 8:18). He says this immediately after describing creation&apos;s bondage to decay. The new creation vision of Isaiah 65 is the content of that glory. Weeping will end. Futile labor will end. Premature death will end. The wolf and lamb will feed together. This is not wishful thinking &mdash; it is the covenant promise of the God who creates, who bara-ed the first creation and will bara the new one.",
  },
  {
    color: PURPLE,
    title: "Pray for Fruitful Labor",
    body: "Pray for your labor to be fruitful in God&apos;s kingdom, not frustrated. Isaiah 65:22-23 promises: they will not labor in vain, nor will they bear children doomed to misfortune. This is the undoing of Genesis 3:17-19 (cursed is the ground because of you; in painful toil you will eat of it). When you work &mdash; in your vocation, your ministry, your family, your community &mdash; you are working against the grain of a cursed world. Futility is real. But the new creation promise is that God&apos;s servants will not labor in vain. Pray that your labor would be a foretaste of new creation &mdash; that it would bear fruit, last, and matter beyond your own lifetime.",
  },
  {
    color: GREEN,
    title: "Pursue Shalom Now as Witness to the New Creation",
    body: "Live in the light of the new creation&apos;s peace by pursuing shalom in your relationships and community now. The wolf and lamb image is eschatological &mdash; it describes what God will do in the new creation. But the pursuit of shalom (peace, wholeness, right relationship, the absence of predator-prey dynamics) is a present calling for those who believe in the new creation. You do not wait for the new creation to begin living as a new creation person. You become a sign and foretaste: reconciling enemies, bridging divisions, protecting the vulnerable, refusing to prey on others for gain. Before they call I will answer (v.24) &mdash; respond to others&apos; needs before they have to ask. That is new creation shalom practiced now.",
  },
];

export default function Isaiah65GuidePage() {
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
          <div style={{ display: "inline-block", background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: TEAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah 65 &mdash; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>
            Behold, I Create New Heavens and a New Earth
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: "0 0 10px", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 65 is one of the most detailed descriptions of the new creation in the Old Testament &mdash; from God&apos;s outstretched hands to a rebellious people, to the remnant preserved like good grapes, to the glorious vision of new heavens and new earth where the wolf and lamb feed together. The primary source for Revelation 21-22." }}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[["25 Verses", TEAL], ["New Creation", GREEN], ["Rev 21-22 Source", PURPLE], ["Romans 10:20-21", ROSE]].map(([label, color]) => (
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
                borderBottom: activeTab === t.id ? `2px solid ${TEAL}` : "2px solid transparent",
                background: activeTab === t.id ? `${TEAL}18` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
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
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 65 is one of the most detailed descriptions of the new creation in the Old Testament. The chapter opens with God&apos;s lament over Israel&apos;s persistent rebellion &mdash; he stretched out his hands all day to a rebellious people who walked in ways not good. Yet God will not destroy them all &mdash; there is a remnant, like the good clusters in a bunch of grapes." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Then the chapter pivots to the glorious vision of the new creation: &apos;See, I will create new heavens and a new earth. The former things will not be remembered, nor will they come to mind&apos; (v.17). The new Jerusalem will be a place of joy, longevity, fruitfulness, answered prayer, and peace. The famous image: &apos;The wolf and the lamb will feed together, and the lion will eat straw like the ox&apos; (v.25)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter is a central source for Revelation 21-22&apos;s vision of the new Jerusalem. John&apos;s vision in Revelation draws directly on Isaiah 65:17 (new heavens and new earth), Isaiah 65:19 (no more weeping), and Isaiah 65:22 (the longevity and fruitfulness of God&apos;s people). Isaiah 65 is the OT foundation on which the NT&apos;s eschatological hope is built." }}
              />
            </div>

            {/* Key Facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
              {[
                ["Chapter", "Isaiah 65"],
                ["Verses", "25"],
                ["NT Quote", "Romans 10:20-21"],
                ["NT Vision", "Revelation 21-22"],
                ["Key Verse", "Isaiah 65:17"],
                ["Key Theme", "Remnant and New Creation"],
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
                  ["vv.1-5", ROSE, "Outstretched Hands Rejected", "God reveals himself; an obstinate people refuses."],
                  ["vv.6-7", GOLD, "Accountability", "Sins of the people and ancestors will be repaid."],
                  ["vv.8-10", MUTED, "The Good Cluster", "Remnant preserved like good grapes; the land restored."],
                  ["vv.11-16", PURPLE, "Destiny Divided", "Those who serve Fortune vs. those called by God&apos;s new name."],
                  ["vv.17-20", TEAL, "New Heavens and New Earth", "The creative act that abolishes grief and premature death."],
                  ["vv.21-25", GREEN, "Life in the New Creation", "Houses, vineyards, answered prayer, wolf and lamb at peace."],
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

            {/* Connection to NT */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}35`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Isaiah 65 and the New Testament</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  ["Romans 10:20-21", ROSE, "Paul quotes Isaiah 65:1-2 to describe both Gentile salvation (found by those who did not seek) and Israel&apos;s persistent rejection (obstinate people)."],
                  ["Revelation 21:1", TEAL, "I saw a new heaven and a new earth, for the first heaven and the first earth had passed away &mdash; direct echo of Isaiah 65:17."],
                  ["Revelation 21:4", GREEN, "He will wipe every tear from their eyes; there will be no more death or mourning or crying or pain &mdash; fulfilling Isaiah 65:19."],
                  ["2 Peter 3:13", PURPLE, "In keeping with his promise we are looking forward to a new heaven and a new earth, where righteousness dwells &mdash; grounded in Isaiah 65."],
                  ["Romans 8:21", GOLD, "The creation itself will be liberated from its bondage to decay &mdash; the cosmic scope of Isaiah 65&apos;s new creation vision."],
                ].map(([ref, color, note]) => (
                  <div key={String(ref)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: String(color), fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{String(ref)}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: String(note) }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 13, margin: "0 0 20px", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: "Sermons and verse-by-verse studies on Isaiah 65 &mdash; the new creation, the remnant, and the wolf and lamb at peace." }}
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 65</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five major theological threads run through Isaiah 65, from God&apos;s patient love toward the rebellious to the comprehensive vision of new creation. Click each theme to read the full discussion." }}
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

            {/* Famous verse block */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}35`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: "0 0 12px" }}>The Wolf and the Lamb &mdash; Isaiah 65:25</h3>
              <blockquote style={{ color: TEXT, fontSize: 16, fontStyle: "italic", lineHeight: 1.9, margin: "0 0 14px", padding: "0 0 0 16px", borderLeft: `3px solid ${GREEN}` }}
                dangerouslySetInnerHTML={{ __html: "&apos;The wolf and the lamb will feed together, and the lion will eat straw like the ox, and dust will be the serpent&apos;s food. They will neither harm nor destroy on all my holy mountain,&apos; says the LORD." }}
              />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This is among the most striking images in the Bible. The wolf and lamb side by side eating together is the complete inversion of natural order &mdash; which is exactly what new creation is. It is not natural; it is supernatural. Not restored nature but transformed nature. Eden&apos;s original harmony fully realized in the new age. Isaiah 11:6-9 expands on the same vision. The serpent&apos;s food being dust echoes Genesis 3:14 &mdash; the curse pronounced on the serpent after the fall. Even the serpent&apos;s domain is circumscribed in the new creation." }}
              />
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 65</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All 25 verses of Isaiah 65 walked through in six sections &mdash; from God&apos;s lament over Israel&apos;s rebellion, through the remnant principle, to the full vision of new heavens and new earth. Click each section to read the full commentary." }}
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
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
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

            {/* The New Creation described */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>What Isaiah 65 Says the New Creation Will Be</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  [TEAL, "No more weeping", "The sound of weeping and crying will be heard no more (v.19)"],
                  [GREEN, "No infant mortality", "Never again will there be an infant who lives but a few days (v.20)"],
                  [GOLD, "Fruitful labor", "They will not labor in vain; they will enjoy the work of their hands (v.22-23)"],
                  [PURPLE, "Answered prayer", "Before they call I will answer; while they are still speaking I will hear (v.24)"],
                  [ROSE, "Peace in creation", "The wolf and lamb will feed together (v.25)"],
                  [MUTED, "Joy forever", "Be glad and rejoice forever in what I will create (v.18)"],
                ].map(([color, title, desc]) => (
                  <div key={String(title)} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ color: String(color), fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{String(title)}</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: String(desc) }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application: Living Isaiah 65</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 65 moves from divine patience (outstretched hands) to covenant faithfulness (the remnant preserved) to eschatological hope (new creation). These five applications move from receiving God&apos;s patience, through present faithfulness, to living now as people of the new creation." }}
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
            <div style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}40`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>A Prayer from Isaiah 65</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: "0 0 14px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, you have held out your hands to me all day long. When I have been obstinate, you have not withdrawn. When I have walked in ways not good, you have waited. Thank you for your patience, which is not indifference but persistent, costly love. I receive your outstretched hands today." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: "0 0 14px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Preserve me as a good cluster in whatever harvest I am part of. Give me the remnant&apos;s confidence: that you always have a future for those who remain faithful. Let the vision of new heavens and new earth fuel my endurance today. Let me work without despair because you have promised that your servants will not labor in vain." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Before I call, you answer. While I am still speaking, you hear. Teach me to trust that prior knowledge of my needs &mdash; to bring my requests to you before I have finished forming them, confident that you are already at work. Come, Lord Jesus. Make all things new. Let the wolf and lamb feed together on your holy mountain. Amen." }}
              />
            </div>

            {/* Videos at bottom */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }}>Study Videos</h3>
              <p style={{ color: MUTED, fontSize: 13, margin: "0 0 18px", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: "Verse-by-verse teaching on Isaiah 65 to deepen your study and application of the new creation vision." }}
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
