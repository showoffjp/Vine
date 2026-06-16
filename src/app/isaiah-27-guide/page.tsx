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
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "verse" | "application";

export default function Isaiah27GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "hIGaA_0QEUE", title: "Isaiah 27 -- The Dragon Slain and the Vineyard Restored" },
    { videoId: "8yIODO3QnMQ", title: "The Isaiah Apocalypse: Chapters 24-27 Overview" },
    { videoId: "cVDk5dMRNqg", title: "Leviathan in Scripture -- Chaos, Evil, and God&rsquo;s Victory" },
    { videoId: "xKLNXmIuxoM", title: "The Great Trumpet -- Gathering of the Exiles in Isaiah" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 24, padding: "4px 18px", fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 18, letterSpacing: "0.04em" }}>
            ISAIAH 27
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The Dragon Slain and the Vineyard Restored
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 27 brings the Isaiah Apocalypse (chapters 24&ndash;27) to its thunderous conclusion. The LORD slays Leviathan the fleeing serpent, restores the beloved vineyard he tends with care, gathers his scattered exiles from every corner of the earth, and sounds the great trumpet of redemption. This is the final chapter of cosmic restoration." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Leviathan Slain", color: ROSE },
              { label: "Restored Vineyard", color: GREEN },
              { label: "Israel Blossoming", color: GOLD },
              { label: "Great Trumpet", color: PURPLE },
              { label: "Isaiah Apocalypse", color: TEAL },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: badge.color, fontWeight: 700 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key verse banner */}
      <div style={{ background: `${GREEN}12`, borderTop: `1px solid ${GREEN}30`, borderBottom: `1px solid ${GREEN}30`, padding: "20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 18, fontStyle: "italic", color: TEXT, margin: 0, lineHeight: 1.65 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;In days to come Jacob shall take root, Israel shall blossom and put forth shoots and fill the whole world with fruit.&rdquo; &mdash; Isaiah 27:6" }}
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
                background: activeTab === t.id ? GREEN : "transparent",
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

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL AND LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, margin: "0 0 14px" }}>The Climax of the Isaiah Apocalypse</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 24&ndash;27, often called &ldquo;the Isaiah Apocalypse,&rdquo; is one of the most remarkable sections in all of prophetic literature. It opens with the catastrophic undoing of the earth in chapter 24 &mdash; the earth mourns, the city of chaos is broken down, the moon is confounded and the sun ashamed (24:23). The section then moves through songs of praise (chapter 25), trust (chapter 26), and finally arrives at chapter 27 as its triumphant conclusion." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 provides three sweeping images of salvation: the slaying of the great sea-monster Leviathan (v.1), the restoration of the beloved vineyard (vv.2&ndash;6), and the great trumpet that calls scattered exiles home from Assyria and Egypt (vv.12&ndash;13). Together they answer the cosmic devastation of chapter 24 with cosmic redemption &mdash; the chaos powers are destroyed, the covenant people are renewed, and the scattered are gathered. The chapter is the theological capstone of the entire Isaiah Apocalypse." }}
              />
            </div>

            {/* Leviathan and Vineyard grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSE 1</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Leviathan Slain</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The chapter opens with the most dramatic image in the Isaiah Apocalypse: the LORD takes his &ldquo;hard and great and strong sword&rdquo; and punishes Leviathan &mdash; &ldquo;the fleeing serpent,&rdquo; &ldquo;the twisting serpent&rdquo; &mdash; and slays the dragon that is in the sea. Leviathan is the ancient Near Eastern symbol of chaos, death, and the primordial powers that resist God&rsquo;s creative order. The slaying of Leviathan is not a minor miracle; it is the definitive defeat of chaos itself." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSES 2-6</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>The Pleasant Vineyard</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "After the violence of verse 1, the tone shifts dramatically. &ldquo;A pleasant vineyard, sing of it!&rdquo; The LORD declares himself its keeper, watering it every moment, guarding it night and day. This is a deliberate reversal of the Song of the Vineyard in Isaiah 5, where God threatened to remove the hedge and let the vineyard be trampled. Now the same LORD tends the vineyard with devoted care &mdash; he has no wrath for it." }}
                />
              </div>
            </div>

            {/* Key memory verses */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 16 }}>KEY MEMORY VERSES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${ROSE}` }}>
                  <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 27:1</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;In that day the LORD with his hard and great and strong sword will punish Leviathan the fleeing serpent, Leviathan the twisting serpent, and he will slay the dragon that is in the sea.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 27:3</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;I, the LORD, am its keeper; every moment I water it. Lest anyone punish it, I keep it night and day.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 27:6</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;In days to come Jacob shall take root, Israel shall blossom and put forth shoots and fill the whole world with fruit.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${PURPLE}` }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 27:13</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;And in that day a great trumpet will be blown, and those who were lost in the land of Assyria and those who were driven out to the land of Egypt will come and worship the LORD on the holy mountain at Jerusalem.&rdquo;" }}
                  />
                </div>
              </div>
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 14 }}>STRUCTURE OF THE CHAPTER</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v. 1", title: "Leviathan Slain", color: ROSE, summary: "The LORD&rsquo;s great sword defeats Leviathan, the chaos-dragon of the sea" },
                  { ref: "vv. 2-6", title: "The Pleasant Vineyard", color: GREEN, summary: "The beloved vineyard tended by the LORD -- Jacob takes root, Israel blossoms and fills the world with fruit" },
                  { ref: "vv. 7-11", title: "Measured Discipline and Desolation", color: GOLD, summary: "God&rsquo;s discipline of Israel contrasted with the total destruction of her enemies; the fortified city is solitary" },
                  { ref: "vv. 12-13", title: "The Great Trumpet and the Gathering", color: PURPLE, summary: "The LORD threshes the grain; the great trumpet calls exiles home from Assyria and Egypt to worship on the holy mountain" },
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

            {/* Isaiah 5 reversal note */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE GREAT REVERSAL: ISAIAH 5 VS. ISAIAH 27</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "One of the most striking literary features of Isaiah 27 is its deliberate echo and reversal of Isaiah 5, the famous Song of the Vineyard. In Isaiah 5, the LORD sang a lament about his vineyard: he planted it with care, built a tower and hewed a wine vat, and waited for good grapes &mdash; but it produced wild grapes. His response was devastating: &ldquo;I will remove its hedge, and it shall be devoured; I will break down its wall, and it shall be trampled down&rdquo; (Isaiah 5:5)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 reverses this judgment entirely. Now the LORD declares &ldquo;a pleasant vineyard&rdquo; &mdash; he waters it every moment, guards it night and day, has no wrath against it. The same God who in chapter 5 threatened to let the vineyard be trampled now stands as its personal keeper. This reversal is the theological heart of the chapter: the covenant God who judged his people has also determined to restore them, and the restoration is more complete than the devastation. Jacob shall take root; Israel shall fill the whole world with fruit." }}
              />
            </div>

            {/* Connection to Revelation */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>CONNECTION TO THE NEW TESTAMENT</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 echoes throughout the New Testament. The defeat of Leviathan anticipates Jesus&rsquo; declaration that he saw Satan fall like lightning from heaven (Luke 10:18) and the Revelation imagery of the ancient serpent, the dragon, being bound and finally cast into the lake of fire (Revelation 12, 20). The vineyard imagery reappears in John 15, where Jesus declares himself the true vine &mdash; the restored vineyard of God in person. And the great trumpet of Isaiah 27:13 is cited by Paul in 1 Corinthians 15:52 and 1 Thessalonians 4:16, where the trumpet of God gathers the dead in Christ and those who remain at his coming. Isaiah 27 is not merely ancient prophecy; it is the prophetic seed from which the New Testament&rsquo;s central images grow." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Key Themes in Isaiah 27</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 weaves together four great interlocking themes: the defeat of cosmic evil, the restoration of the covenant community, the world-filling fruitfulness of God&rsquo;s people, and the great eschatological gathering. Each theme is ancient, prophetic, and profoundly New Testament." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "Leviathan Slain -- God&rsquo;s Victory Over Chaos and Evil",
                icon: "COSMIC CONQUEST",
                body1: "The chapter opens with one of the most arresting images in all of Scripture: &ldquo;In that day the LORD with his hard and great and strong sword will punish Leviathan the fleeing serpent, Leviathan the twisting serpent, and he will slay the dragon that is in the sea.&rdquo; Leviathan is the great sea-monster of ancient Near Eastern mythology, the symbol of primordial chaos, the force that opposes God&rsquo;s creative order. In the Ugaritic texts (the literature closest to ancient Israelite culture), Baal defeats the dragon Lotan -- described almost identically as a &ldquo;fleeing serpent&rdquo; and &ldquo;twisting serpent.&rdquo; Isaiah takes up this ancient mythological language deliberately: the LORD will do what no other god can do. He will personally, finally, and definitively defeat the chaos power.",
                body2: "The three descriptions of Leviathan &mdash; &ldquo;fleeing,&rdquo; &ldquo;twisting,&rdquo; and &ldquo;the dragon in the sea&rdquo; &mdash; may refer to three different entities (Babylon, Assyria, and Egypt, as some commentators suggest) or may be poetic tripling for emphasis: Leviathan in every form, however it manifests, will be destroyed. The &ldquo;hard and great and strong sword&rdquo; of the LORD is not a metaphor for political leverage &mdash; it is a divine weapon. The defeat of Leviathan is the LORD&rsquo;s alone to accomplish. This connects directly to the New Testament vision of the final defeat of the ancient serpent (Revelation 20:2, 10), where the dragon who has deceived the nations is finally cast into the lake of fire. Isaiah 27:1 is the Old Testament ground of that New Testament hope.",
              },
              {
                color: GREEN,
                title: "The Beloved Vineyard Restored",
                icon: "COVENANT RENEWAL",
                body1: "After the thunder of verse 1, the mood of the chapter shifts entirely: &ldquo;A pleasant vineyard, sing of it!&rdquo; The LORD speaks as the keeper of his vineyard. He waters it every moment. He guards it night and day. He has no wrath against it. This is the restoration of the covenant relationship &mdash; expressed through the most intimate agricultural metaphor available to an agrarian people. The vineyard is Israel, the LORD&rsquo;s planting (Isaiah 5:7; John 15:1). The tender, constant care he lavishes on it now stands in stark contrast to the judgment of Isaiah 5, where he threatened to let it be trampled.",
                body2: "The vineyard image in Scripture is always about intimacy, fruitfulness, and the relationship between God and his people. In Song of Solomon it becomes a love metaphor. In John 15 Jesus makes himself the vine and his disciples the branches, insisting that apart from him they can do nothing and that in him they bear much fruit. Isaiah 27&rsquo;s vision of the restored vineyard is the prophetic preparation for that New Testament declaration: the God who judges and the God who restores is the same God, and his final purpose is fruitfulness, not desolation. He tends, waters, guards. The vineyard will not fail again because its keeper never fails.",
              },
              {
                color: GOLD,
                title: "Israel Blossoming and Filling the World with Fruit",
                icon: "WORLD-FILLING FRUITFULNESS",
                body1: "Isaiah 27:6 is one of the most expansive promises in the book: &ldquo;In days to come Jacob shall take root, Israel shall blossom and put forth shoots and fill the whole world with fruit.&rdquo; The scope here is astonishing. The vineyard of God, once trampled and desolate, will not merely recover -- it will overflow its boundaries and fill the entire world (literally, &ldquo;the face of the world&rdquo;) with fruit. The imagery shifts from a walled garden to a world-filling agricultural abundance. God&rsquo;s covenant people will become a blessing to the entire human family.",
                body2: "This language deliberately echoes the Abrahamic covenant, where God promised Abraham that his offspring would be a blessing to all the families of the earth (Genesis 12:3; 22:18). Isaiah 27:6 is one of the fulfillments of that ancient promise: through Israel, through the restored vineyard, the whole world will receive the fruit of God&rsquo;s blessing. The New Testament reads this through the lens of the church as the body of Christ, the true Israel extended to all nations (Galatians 3:28-29; Romans 11). The world-filling fruitfulness is not ethno-nationalism but the universal spread of the blessing of Abraham through faith.",
              },
              {
                color: PURPLE,
                title: "The Great Gathering Trumpet",
                icon: "ESCHATOLOGICAL INGATHERING",
                body1: "The chapter closes with two of the most hope-filled verses in all of Isaiah: &ldquo;In that day from the River to the Brook of Egypt the LORD will thresh out the grain one by one, and you will be gleaned one by one, O people of Israel. And in that day a great trumpet will be blown, and those who were lost in the land of Assyria and those who were driven out to the land of Egypt will come and worship the LORD on the holy mountain at Jerusalem.&rdquo; The great trumpet &mdash; the shofar, the ram&rsquo;s horn blown at Jubilee and at the great feasts &mdash; will be blown by God himself, and the scattered exiles will hear it and come home.",
                body2: "The imagery of gleaning is tender and personal: not a mass movement but one by one, like a careful farmer gathering every last grain from the field. No one is lost. No exile is forgotten. The great trumpet does not gather a remnant by accident; it summons every lost one by name. Paul draws on this tradition in 1 Corinthians 15:52 (&ldquo;the trumpet will sound, and the dead will be raised&rdquo;) and 1 Thessalonians 4:16 (&ldquo;the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God&rdquo;). The great trumpet of Isaiah 27 is the prophetic seed of the eschatological trumpet that will gather not just the exiles of Israel but every member of the redeemed from every corner of time and place.",
              },
              {
                color: TEAL,
                title: "The City of Chaos vs. the Fortified City",
                icon: "TWO CITIES",
                body1: "Verses 10-11 introduce another of Isaiah&rsquo;s two-city contrasts: the fortified city (the city of the enemies of God&rsquo;s people) stands solitary, a deserted pasture, a habitation abandoned like the wilderness. The cattle graze there and strip the branches. When its boughs are dry, women come and make fire with them &mdash; for the people have no understanding, and their Maker shows them no favor. This is the end of the &ldquo;city of chaos&rdquo; mentioned in Isaiah 24:10.",
                body2: "The city of chaos is the type of every human power structure that refuses to acknowledge the LORD and oppresses his people. Its final state is desolation &mdash; not even a dramatic destruction but a slow abandonment to uselessness, its branches stripped for firewood by passing women. Against this desolation, the holy mountain at Jerusalem rises (v.13) as the destination of the gathering exiles. The contrast is not political but theological: the city built on human pride and the violence of empire ends in ruin; the holy mountain, where the LORD dwells and is worshipped, is the permanent destination of all who belong to him.",
              },
              {
                color: GOLD,
                title: "Measured Discipline and Atonement",
                icon: "GOD&rsquo;S PURPOSEFUL CHASTENING",
                body1: "Verses 7-9 introduce a careful theological distinction: Has God struck Israel as he struck those who struck Israel? Has he slain them as those who slew them were slain? The answer is no. The affliction of Israel was measured; the destruction of her enemies was total. The discipline of God&rsquo;s covenant people is purposeful and limited; it is not the same as the wrath that falls on those outside the covenant. This is the prophetic anticipation of Hebrews 12:6: &ldquo;The Lord disciplines the one he loves.&rdquo;",
                body2: "The purpose of the discipline is atonement and the removal of sin: &ldquo;By this, therefore, the guilt of Jacob will be atoned for, and this will be the full fruit of the removal of his sin: when he makes all the stones of the altars like chalkstones crushed to pieces, no Asherim or incense altars will remain standing.&rdquo; The exile was not punishment for its own sake; it was the painful removal of the idolatry that had corrupted Israel. When the idols are gone &mdash; crushed to chalkstones &mdash; the atoning work is complete. The discipline produced what the comfortable years could not: the removal of the rival gods and the return to the one LORD.",
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

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Verse by Verse: Isaiah 27</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage study of the chapter&rsquo;s movements, noting key words, theological themes, ancient background, and connections to the rest of Scripture." }}
              />
            </div>

            {[
              {
                ref: "Verse 1",
                color: ROSE,
                heading: "The Slaying of Leviathan",
                verses: [
                  {
                    v: "v.1",
                    text: "\"In that day the LORD with his hard and great and strong sword will punish Leviathan the fleeing serpent, Leviathan the twisting serpent, and he will slay the dragon that is in the sea.\"",
                    note: "The phrase &ldquo;In that day&rdquo; ties this verse to the same eschatological horizon as the rest of the Isaiah Apocalypse -- the day of the LORD&rsquo;s final action. The three descriptions of Leviathan (&ldquo;fleeing,&rdquo; &ldquo;twisting,&rdquo; &ldquo;the dragon in the sea&rdquo;) match almost exactly the Ugaritic description of Lotan, the chaos-monster defeated by Baal in Canaanite mythology. Isaiah is not endorsing Canaanite religion; he is consciously using its imagery to make a superior claim: the LORD, the God of Israel, will do what Baal could not -- definitively and permanently defeat the chaos power. The three adjectives for the LORD&rsquo;s sword (&ldquo;hard and great and strong&rdquo;) emphasize its absolute sufficiency. No form of Leviathan -- political, spiritual, cosmic -- can withstand it."
                  },
                ],
              },
              {
                ref: "Verses 2-6",
                color: GREEN,
                heading: "The Pleasant Vineyard and the Blossoming of Israel",
                verses: [
                  {
                    v: "vv.2-3",
                    text: "\"In that day: A pleasant vineyard, sing of it! I, the LORD, am its keeper; every moment I water it. Lest anyone punish it, I keep it night and day.\"",
                    note: "The opening command &ldquo;Sing of it!&rdquo; (or &ldquo;Answer it&rdquo; in some traditions) launches a new song immediately after the violence of verse 1. The contrast is jarring and intentional: the destroyer is slain; now the keeper cares. The Hebrew for &ldquo;pleasant&rdquo; (chemdah) carries connotations of desirability, loveliness, delight. The LORD&rsquo;s vineyard is not a field of labor to him -- it is his delight. His keeping (&ldquo;I water it every moment&rdquo;) is constant and attentive; his protection (&ldquo;lest anyone punish it&rdquo;) is vigilant and personal. This stands in total contrast to Isaiah 5:6, where God announced he would withdraw his care from the vineyard."
                  },
                  {
                    v: "v.4",
                    text: "\"I have no wrath. Would that I had thorns and briers to battle! I would march against them, I would burn them up together.\"",
                    note: "One of the most remarkable declarations in the book: &ldquo;I have no wrath.&rdquo; God&rsquo;s anger against the vineyard has been exhausted. The discipline is complete. What remains is only devotion. The reference to thorns and briers recalls Isaiah 5:6, where God threatened to let the vineyard be overtaken by thorns. Here the same thorns are mentioned, but as enemies God would fight on the vineyard&rsquo;s behalf. The guardian has replaced the judge."
                  },
                  {
                    v: "vv.5-6",
                    text: "\"Or let them lay hold of my protection, let them make peace with me, let them make peace with me. In days to come Jacob shall take root, Israel shall blossom and put forth shoots and fill the whole world with fruit.\"",
                    note: "The LORD offers peace even to enemies: &ldquo;let them make peace with me.&rdquo; The vine is not exclusive; its blessing is available to all who take hold of the Keeper&rsquo;s protection. Then verse 6 erupts with one of the great universal promises of the Old Testament: Jacob taking root, Israel blossoming, filling the whole world with fruit. The agricultural progression (taking root -- blossoming -- putting forth shoots -- filling the world with fruit) is a picture of unstoppable, God-sustained growth. This vine will not be contained."
                  },
                ],
              },
              {
                ref: "Verses 7-11",
                color: GOLD,
                heading: "Measured Discipline, Atonement, and the Desolate City",
                verses: [
                  {
                    v: "vv.7-8",
                    text: "\"Has he struck them as he struck those who struck them? Or have they been slain as their slayers were slain? Measure by measure, by exile you contended with them; he removed them with his fierce breath in the day of the east wind.\"",
                    note: "The rhetorical questions of verse 7 demand reflection: the answer is clearly &ldquo;no.&rdquo; The destruction of Assyria and Babylon was total; the affliction of Israel was measured (&ldquo;measure by measure&rdquo;). The discipline of the covenant people, while severe, was calibrated. The exile was a &ldquo;fierce breath&rdquo; &mdash; an east wind, the scorching desert wind of the Middle East that withers crops -- but it was not annihilation. There is a fundamental difference between the wrath that destroys enemies and the discipline that refines covenant children."
                  },
                  {
                    v: "v.9",
                    text: "\"Therefore by this the guilt of Jacob will be atoned for, and this will be the full fruit of the removal of his sin: when he makes all the stones of the altars like chalkstones crushed to pieces, no Asherim or incense altars will remain standing.\"",
                    note: "The exile accomplished what no amount of comfortable religion could achieve: the destruction of the idols. The &ldquo;full fruit of the removal of sin&rdquo; is the crushing of the altar stones to chalk and the removal of every Asherah pole and incense stand. Atonement here is not only forensic (guilt declared removed) but transformative (the idols are actually gone). The discipline produced genuine repentance and genuine abandonment of the rival gods. This is the deep logic of why God allows suffering in the lives of his covenant people: it removes what comfort preserves."
                  },
                  {
                    v: "vv.10-11",
                    text: "\"For the fortified city is solitary, a habitation deserted and forsaken, like the wilderness. There the calf grazes; there it lies down and strips its branches. When its boughs are dry, they are broken; women come and make a fire of them. For this is a people without discernment; therefore he who made them will not have compassion on them; he who formed them will show them no favor.\"",
                    note: "The &ldquo;fortified city&rdquo; here is not Jerusalem but the city of the enemies who oppressed Israel &mdash; a parallel to the &ldquo;city of chaos&rdquo; of Isaiah 24:10. Its end is not a dramatic fall but a slow abandonment: the cattle graze among the ruins, women gather the dried branches for firewood. There is no compassion shown to those who &ldquo;have no discernment&rdquo; &mdash; who refused to see and acknowledge their Maker. The contrast with the carefully tended vineyard of verses 2-6 is stark: the vineyard God keeps flourishes; the city that rejects its Maker becomes a pasture for livestock."
                  },
                ],
              },
              {
                ref: "Verses 12-13",
                color: PURPLE,
                heading: "The Threshing and the Great Trumpet",
                verses: [
                  {
                    v: "v.12",
                    text: "\"In that day from the River to the Brook of Egypt the LORD will thresh out the grain one by one, and you will be gleaned one by one, O people of Israel.\"",
                    note: "The &ldquo;River&rdquo; is the Euphrates (the northern boundary of the Promised Land in its fullest extent) and the &ldquo;Brook of Egypt&rdquo; is the Wadi el-Arish on the southern border (Numbers 34:5). The threshing metaphor is tender and precise: the LORD will thresh the grain &ldquo;one by one,&rdquo; and the people will be &ldquo;gleaned one by one.&rdquo; Gleaning is the ancient practice of gathering what remains after the main harvest &mdash; it is careful, slow, and personal. No exile is left behind in the field. The great gathering is not only triumphant; it is intimate."
                  },
                  {
                    v: "v.13",
                    text: "\"And in that day a great trumpet will be blown, and those who were lost in the land of Assyria and those who were driven out to the land of Egypt will come and worship the LORD on the holy mountain at Jerusalem.\"",
                    note: "The great trumpet (shofar gadol) is the climactic sound of the entire Isaiah Apocalypse. Assyria and Egypt represented the two great empires that had displaced and swallowed Israel &mdash; the north and the south, the two directions of exile. The great trumpet reaches both. Those who were &ldquo;lost&rdquo; (Hebrew: ovdim, the perishing, those who seemed irretrievably gone) and those who were &ldquo;driven out&rdquo; (nidachim, the driven or banished) will both hear the trumpet and come home to worship. The destination is not political power but worship on the holy mountain. The chapter that began with cosmic warfare ends with worship. This is the telos of all redemption: the redeemed gathered to praise the one who redeemed them."
                  },
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

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Living Isaiah 27 Today</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 is not an abstract theological vision -- it is a living word that addresses real questions: How do we face the chaos powers of our time? How do we understand God&rsquo;s discipline in our lives? How do we hold onto hope when we feel like exiles? And how do we become the fruitful vineyard God intends? Here is how the chapter&rsquo;s movements speak to everyday discipleship." }}
              />
            </div>

            {[
              {
                color: ROSE,
                number: "01",
                title: "Trust God&rsquo;s Final Victory Over Chaos",
                verses: "Isaiah 27:1",
                body1: "We live in a world full of Leviathan &mdash; chaos powers that seem to operate outside God&rsquo;s control, systems of evil that appear deeply entrenched, forces of darkness that swallow the innocent and reward the wicked. Isaiah 27:1 announces, without qualification, that &ldquo;in that day&rdquo; the LORD will slay the dragon. This is not wishful thinking but a theological certainty: the God who created the cosmos has the authority and power to defeat every force of chaos that has invaded it.",
                body2: "The practical significance of this is enormous. We do not fight our spiritual battles as if the outcome is uncertain. The dragon is already defeated in principle (Colossians 2:15: &ldquo;He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him&rdquo;) and will be defeated in finality (Revelation 20:10). This means we do not have to carry the weight of ultimate victory; we live in the confidence of it. We are called to resist the powers (Ephesians 6:13), but we resist as those who know the end of the story: the hard and great and strong sword of the LORD will have the final word.",
                practice: "When you face a situation that feels overwhelmingly chaotic -- systemic evil, intractable suffering, powers that seem untouchable -- read Isaiah 27:1 and Revelation 20:10 alongside each other. Let the certainty of God&rsquo;s final victory settle into your spirit. Then ask: what does it mean to live today in light of this certain ending?",
              },
              {
                color: GREEN,
                number: "02",
                title: "Receive God&rsquo;s Care as the Beloved Vineyard",
                verses: "Isaiah 27:2-3",
                body1: "One of the deepest struggles in Christian life is believing that God genuinely cares for us &mdash; not just that he has saved us, but that he actively tends us, waters us, guards us. Isaiah 27:3 gives one of the most personal declarations of divine care in all of Scripture: &ldquo;I, the LORD, am its keeper; every moment I water it. Lest anyone punish it, I keep it night and day.&rdquo; Every moment. Night and day. The keeper never sleeps, never looks away, never forgets.",
                body2: "This care is not abstract. It is the care that brings the right trial at the right time to produce the right fruit. It is the care that removes the thorns (the situations and relationships that threaten to choke growth) and provides the water (the Spirit, the Word, the community of faith). To receive this care requires a posture of trust: believing that the difficulties in our lives are not signs that the keeper has abandoned the vineyard, but that he is doing the hard work of tending it. The vine that is never pruned will not bear more fruit (John 15:2); the vine whose keeper prunes it carefully is the one that fills the world with fruit.",
                practice: "Reflect on the most difficult season of your life. Looking back, can you see how God was tending the vineyard even then &mdash; what he was removing, what he was cultivating? Write a brief journal entry naming three specific ways God has kept you &ldquo;night and day&rdquo; that you did not recognize at the time. Let this become a foundation of trust for the seasons of difficulty you will face ahead.",
              },
              {
                color: GOLD,
                number: "03",
                title: "Be a Vine That Fills the World with Fruit",
                verses: "Isaiah 27:6",
                body1: "Isaiah 27:6 is both a promise and a calling. The promise is that Jacob shall take root and Israel shall blossom and fill the whole world with fruit. The calling is to be that vine -- to be the kind of disciple who is so deeply rooted in God that fruitfulness is inevitable and world-reaching. Jesus unpacks this calling explicitly in John 15: &ldquo;Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.&rdquo; The fruit is not manufactured by effort but produced by abiding.",
                body2: "The progression in Isaiah 27:6 is instructive: first Jacob &ldquo;takes root&rdquo; before anything else happens. Root before blossom; depth before breadth. Much Christian fruitlessness comes from trying to produce the blossom and the fruit before the rootedness is in place. The deep root is the life of prayer, Scripture, community, and obedience -- the hidden work that makes visible fruitfulness possible. Only the deeply rooted vine can fill the world with fruit without being exhausted by the effort.",
                practice: "Do an honest audit of your spiritual roots. How deep is your prayer life? How regularly are you drawing on the Word? How embedded are you in a community of faith? Are you trying to produce fruit without the corresponding depth of root? Identify one area where you need to go deeper before you try to go broader. Spend the next month investing there.",
              },
              {
                color: PURPLE,
                number: "04",
                title: "Hear the Trumpet -- You Are Not Lost",
                verses: "Isaiah 27:12-13",
                body1: "The most tender promise in Isaiah 27 may be the one that seems most cosmic: &ldquo;those who were lost.&rdquo; The Hebrew ovdim is the same root used in the parable of the lost sheep (Luke 15) -- the one who is not merely displaced but perishing, seemingly beyond recovery. And yet it is precisely these who hear the great trumpet. The God who gleaned one by one in verse 12 is the God who left the ninety-nine to find the one. No exile is too far, no lostness is too deep.",
                body2: "There are seasons when believers feel deeply exiled &mdash; cut off from community, from the sense of God&rsquo;s presence, from the life of faith they once knew. Isaiah 27:13 speaks directly to that experience: the trumpet that sounds is precisely for the lost, the driven out, those in Assyria and Egypt (the places of captivity and bondage). The sound of the trumpet is not first a call to those who are ready and assembled; it is a call to those who thought they were beyond calling. If you can hear it, it is for you.",
                practice: "Read Luke 15 (the parables of the lost sheep, coin, and son) alongside Isaiah 27:12-13. Spend time in prayer specifically addressing any area of your life where you feel &ldquo;lost in Assyria&rdquo; -- exiled from what God has called you to, or from his felt presence. Hear the trumpet as God&rsquo;s personal summons to you, not just to the assembled people.",
              },
              {
                color: TEAL,
                number: "05",
                title: "Let Discipline Accomplish Its Atonement",
                verses: "Isaiah 27:7-9",
                body1: "Isaiah 27:7-9 teaches one of the most important distinctions in the theology of suffering: the discipline that refines God&rsquo;s covenant people is not the same as the wrath that destroys his enemies. The exile was painful, measured, and purposeful; the total destruction of Assyria was final and without mercy. Understanding this distinction helps believers endure suffering without interpreting it as abandonment or punishment in the ultimate sense.",
                body2: "The goal of the discipline, according to verse 9, is the removal of idols -- the crushing of the altar stones, the pulling down of the Asherim. The hard work of discipline in the life of a believer is always aimed at removing what competes with God for the central place. Financial loss can reveal where we have built our security. Relational failure can expose where we have looked for our worth. Physical suffering can unmask our dependence on comfort. In every case, the discipline is purposeful: the LORD is tending the vineyard, removing the thorns, and cultivating the ground for better fruit. Hebrews 12:11 says it plainly: &ldquo;For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it.&rdquo;",
                practice: "Is there a painful season of discipline in your life right now, or in your recent past? Ask honestly: what idol or rival attachment is God working to remove? What is the &ldquo;altar stone&rdquo; that needs to be crushed to chalk? Bring it before God in prayer with the understanding that he disciplines those he loves and that the end of faithful endurance is the peaceful fruit of righteousness.",
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

            {/* Closing summary */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>SUMMARY</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Isaiah 27 as a Word for Our Moment</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 27 was written for a people living between the chaos they could see and the redemption they could not yet see. The Leviathans of their world &mdash; Assyria, Babylon, the sea of empires and violence &mdash; seemed invincible. The vineyard they were meant to be had been trampled. The exiles were scattered from Assyria to Egypt. And yet the prophet sang: the dragon will be slain, the vineyard will be restored, the world will be filled with fruit, and the great trumpet will call every lost one home. This is our song too. We live between the first coming and the second, between the defeat of the serpent on the cross and his final casting into the lake of fire. We are the vineyard being tended, the vine growing toward world-filling fruitfulness. We are listening for the great trumpet. Isaiah 27 calls us to live now in the confidence of what is coming then &mdash; to be deeply rooted, abundantly fruitful, patient in discipline, and certain that no exile is too far for the trumpet to reach." }}
              />
            </div>
          </div>
        )}

        {/* Videos section -- always visible below tabs */}
        <div style={{ marginTop: 48, marginBottom: 60 }}>
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 28 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 27 and the Isaiah Apocalypse &mdash; for deeper study and group use." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Isaiah 27 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${PURPLE}12 100%)`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: 36, marginBottom: 60, textAlign: "center" }}>
          <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 12 }}>GO DEEPER</div>
          <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 26, margin: "0 0 14px", lineHeight: 1.2 }}>Continue the Isaiah Apocalypse</h2>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 27 is the conclusion of one of the most profound prophetic sequences in all of Scripture. Study the full Isaiah Apocalypse &mdash; chapters 24 through 27 &mdash; to understand the full arc from cosmic devastation to cosmic redemption." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { label: "Isaiah 24 Guide", href: "/isaiah-24-guide", color: ROSE },
              { label: "Isaiah 25 Guide", href: "/isaiah-25-guide", color: GOLD },
              { label: "Isaiah 26 Guide", href: "/isaiah-26-guide", color: TEAL },
              { label: "Full Isaiah Guide", href: "/christian-book-of-isaiah-guide", color: PURPLE },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ background: `${link.color}18`, border: `1px solid ${link.color}40`, borderRadius: 10, padding: "10px 20px", fontSize: 14, color: link.color, fontWeight: 700, textDecoration: "none", display: "inline-block" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
