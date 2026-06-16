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
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Isaiah25Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "BLDKuM9Fv2k", title: "Isaiah 25 -- The Feast on the Mountain" },
    { videoId: "ACrmQkRVhTk", title: "Death Swallowed Up Forever -- Isaiah 25 Commentary" },
    { videoId: "4VFkFN4NVPI", title: "Isaiah&rsquo;s Song of Praise -- Chapter 25 Explained" },
    { videoId: "QjZQn0hJDhI", title: "The Eschatological Hope of Isaiah 25 and 1 Corinthians 15" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0c1a12 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GREEN, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18 }}>
            Old Testament &mdash; Major Prophets
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Isaiah 25
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "A triumphant song of praise &mdash; anticipating the eschatological feast, the removal of the veil from all nations, and the final swallowing up of death forever." }}
          />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Author:</span> Isaiah ben Amoz
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Date:</span> c. 740&ndash;700 BC
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Genre:</span> Prophetic Praise Psalm
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Context:</span> Follows Isaiah 24 &mdash; the Apocalypse of Isaiah
            </div>
          </div>
        </div>
      </div>

      {/* Key Verse Banner */}
      <div style={{ background: `${GOLD}0f`, borderBottom: `1px solid ${GOLD}22` }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 16, fontStyle: "italic", color: TEXT, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;He will swallow up death forever; and the Lord GOD will wipe away tears from all faces.&rdquo; &mdash; <strong style=\"color:" + GOLD + "\">Isaiah 25:8</strong>" }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", padding: "0 20px", overflowX: "auto" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "16px 24px",
                border: "none",
                borderBottom: activeTab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                background: "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16 }}>What Is Isaiah 25?</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 25 is a triumphant hymn of praise that forms the climax of the so-called &ldquo;Apocalypse of Isaiah&rdquo; &mdash; chapters 24&ndash;27. After the devastating judgment of Isaiah 24 (the earth laid waste, the heavens and earth shaken, the city of chaos broken), chapter 25 erupts into song. The speaker, representing the redeemed people of God, praises the LORD for deeds already accomplished and anticipates the final consummation of salvation." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter moves in three movements. First (vv.1&ndash;5), a personal song of praise: &ldquo;O LORD, you are my God; I will exalt you.&rdquo; God is praised for being a refuge to the poor and needy, a shelter from the storm, a shade from the heat. Second (vv.6&ndash;9), the eschatological vision reaches its summit: on the holy mountain the LORD of hosts will prepare a great feast for all peoples, he will remove the veil of mourning that covers the nations, and &mdash; most gloriously &mdash; he will swallow up death forever. Third (vv.10&ndash;12), the fall of Moab &mdash; the representative of proud, self-sufficient nations that have opposed God&rsquo;s people." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The theological freight of this chapter cannot be overstated. Paul quotes Isaiah 25:8 directly in 1 Corinthians 15:54 as the climax of his argument for the bodily resurrection: &ldquo;When the perishable puts on the imperishable&hellip; then shall come to pass the saying that is written: &lsquo;Death is swallowed up in victory.&rsquo;&rdquo; Isaiah 25 is the Old Testament foundation of Christian resurrection hope." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Literary Context</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Isaiah 24&ndash;27 is a literary unit often called the &ldquo;Isaianic Apocalypse.&rdquo; Chapter 24 depicts cosmic judgment &mdash; the earth laid waste and the heavens shaking. Chapter 25 responds with praise. Chapter 26 continues the song. Chapter 27 returns to prophecy. Isaiah 25 is the praise response that stands at the center of this vision." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Historical Background</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Isaiah ministered in Judah c. 740&ndash;700 BC, spanning the reigns of Uzziah, Jotham, Ahaz, and Hezekiah. He witnessed the Assyrian threat to the northern kingdom (Israel fell in 722 BC) and prophesied into the crisis of Hezekiah&rsquo;s reign. His prophecies range from immediate historical concerns to the most distant eschatological horizons." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>New Testament Connection</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Isaiah 25:8 is quoted in 1 Corinthians 15:54 and alluded to in Revelation 7:17 and 21:4. The &ldquo;feast on the mountain&rdquo; anticipates Jesus&rsquo;s parable of the Great Banquet (Luke 14) and the marriage supper of the Lamb (Revelation 19:9). The &ldquo;veil removed from all nations&rdquo; (v.7) resonates with 2 Corinthians 3:14-16." }}
                />
              </div>
            </div>

            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}28`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 12 }}>Structure at a Glance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-5", label: "Personal Praise", desc: "O LORD, you are my God &mdash; you have been a stronghold to the poor, a shelter in the storm" },
                  { ref: "vv.6-8", label: "The Eschatological Feast", desc: "A feast for all peoples, the veil removed, death swallowed forever, tears wiped away" },
                  { ref: "v.9", label: "The Day of Waiting Rewarded", desc: "Behold, this is our God; we have waited for him that he might save us" },
                  { ref: "vv.10-12", label: "The Fall of Moab", desc: "The hand of the LORD rests on this mountain; Moab is trampled under him" },
                ].map((s) => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ background: `${GOLD}22`, border: `1px solid ${GOLD}44`, borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: GOLD, whiteSpace: "nowrap", flexShrink: 0 }}>{s.ref}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{s.label}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}
                        dangerouslySetInnerHTML={{ __html: s.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Why This Chapter Matters</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 25 is one of the highest peaks of Old Testament hope. In a book full of warnings, oracles of judgment, and difficult chapters on sin and exile, chapter 25 blazes with the certainty of what God will ultimately do. Death &mdash; the last enemy, the great undefeated foe of every civilization &mdash; will not merely be contained or pushed back. It will be swallowed up. Consumed. Annihilated. The God who made the world will not let death have the final word." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "This is why Paul, when he needs to express the climax of resurrection hope in 1 Corinthians 15, reaches for this chapter. Jesus&rsquo;s resurrection was not a one-time miracle &mdash; it was the firstfruits of the harvest Isaiah 25 had been promising for seven centuries. The feast is coming. The veil is being removed. The tears are being dried. Isaiah 25 trains the church&rsquo;s imagination to live toward that horizon." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Key Themes in Isaiah 25</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "Six major theological themes run through Isaiah 25, each contributing to the chapter&rsquo;s vision of God&rsquo;s ultimate purposes for his world." }}
            />

            {[
              {
                color: GREEN,
                icon: "I",
                title: "Praise for God&rsquo;s Wonderful Deeds",
                ref: "Isaiah 25:1",
                body1: "The chapter opens with doxology: &ldquo;O LORD, you are my God; I will exalt you; I will praise your name, for you have done wonderful things, plans formed of old, faithful and sure.&rdquo; The praise is not vague &mdash; it is grounded in specific deeds (v.2: &ldquo;For you have made the city a heap&rdquo;) and in the character of God who plans faithfully and acts decisively.",
                body2: "The phrase &ldquo;plans formed of old, faithful and sure&rdquo; is theologically rich. God&rsquo;s purposes are not reactive &mdash; they were designed before the events unfolded. What looks like chaos in human history is actually the execution of a plan. The praise at the beginning of the chapter is therefore not naive optimism but grounded confidence in the character and purposes of God.",
              },
              {
                color: TEAL,
                icon: "II",
                title: "Refuge for the Poor and Needy",
                ref: "Isaiah 25:4",
                body1: "&ldquo;For you have been a stronghold to the poor, a stronghold to the needy in his distress, a shelter from the storm and a shade from the heat.&rdquo; This theme runs throughout Isaiah and the entire prophetic tradition: God&rsquo;s particular care for those who have nowhere else to turn. The poor and needy are not merely objects of charity &mdash; they are the people who, by their very helplessness, are in the ideal position to receive God&rsquo;s protection.",
                body2: "The metaphors are vivid: shelter from the storm, shade from the blazing heat. When ruthless nations are like a storm against a wall, God is the wall. When the heat of oppression threatens to overwhelm, God is the shade of a cloud. The eschatological hope of this chapter does not float free of historical reality &mdash; it is grounded in the experience of those who have already found God to be a refuge in their distress.",
              },
              {
                color: GOLD,
                icon: "III",
                title: "The Great Feast for All Peoples",
                ref: "Isaiah 25:6",
                body1: "&ldquo;On this mountain the LORD of hosts will make for all peoples a feast of rich food, a feast of well-aged wine, of rich food full of marrow, of aged wine well refined.&rdquo; The eschatological feast is one of the most powerful images in Scripture. The setting is &ldquo;this mountain&rdquo; &mdash; Mount Zion, the holy mountain of God. The scope is &ldquo;all peoples&rdquo; &mdash; not just Israel, but the nations. The quality is superlative &mdash; the richest food, the finest wine.",
                body2: "This image of the feast is central to Jesus&rsquo;s teaching. The parable of the Great Banquet (Luke 14:15-24) directly echoes this passage &mdash; people are invited from the highways and byways so the house may be full. The marriage supper of the Lamb in Revelation 19:9 is the final fulfillment. The feast is a picture of the fully restored community of God, where scarcity, exclusion, and hunger are abolished forever.",
              },
              {
                color: PURPLE,
                icon: "IV",
                title: "The Veil Removed from All Nations",
                ref: "Isaiah 25:7",
                body1: "&ldquo;And he will swallow up on this mountain the covering that is cast over all peoples, the veil that is spread over all nations.&rdquo; The &ldquo;veil&rdquo; or &ldquo;covering&rdquo; is a powerful image. In the ancient world, mourning cloths were worn by those in grief. The image here is of a veil that prevents seeing clearly &mdash; a covering of death, grief, and spiritual blindness that has shrouded the nations.",
                body2: "Paul picks up this image in 2 Corinthians 3:14-16: the same veil remains over Israel when Moses is read, &ldquo;but when one turns to the Lord, the veil is removed.&rdquo; The removal of the veil is both a present reality in Christ (through the Spirit) and a future consummation when all that currently obscures will be removed. The nations will finally see God as he is. The mourning cloth of history will be lifted.",
              },
              {
                color: ROSE,
                icon: "V",
                title: "Death Swallowed Up Forever",
                ref: "Isaiah 25:8",
                body1: "&ldquo;He will swallow up death forever; and the Lord GOD will wipe away tears from all faces, and the reproach of his people he will take away from all the earth, for the LORD has spoken.&rdquo; This is the most theologically explosive verse in the chapter. Death, which has swallowed everything &mdash; every civilization, every loved one, every hope &mdash; will itself be swallowed. The consumer consumed. The devourer devoured.",
                body2: "Paul quotes this verse at the climax of 1 Corinthians 15: &ldquo;When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: &lsquo;Death is swallowed up in victory.&rsquo;&rdquo; (v.54). The resurrection of Jesus is the firstfruits &mdash; the guarantee that what Isaiah announced is not merely a dream but a done deal being executed across time. Every Christian funeral is lived in the light of Isaiah 25:8.",
              },
              {
                color: BLUE,
                icon: "VI",
                title: "Waiting and Trusting God",
                ref: "Isaiah 25:9",
                body1: "&ldquo;It will be said on that day, &lsquo;Behold, this is our God; we have waited for him, that he might save us. This is the LORD; we have waited for him; let us be glad and rejoice in his salvation.&rsquo;&rdquo; The word &ldquo;waited&rdquo; appears twice in this single verse. Waiting is not passive indifference &mdash; it is active, expectant hope directed toward God. The waiting is validated: the God who was waited for appears. The day of vindication is the day of joyful recognition.",
                body2: "This verse teaches that the life of faith is substantially a life of waiting &mdash; waiting for God to act, for justice to arrive, for the promises to be fulfilled. The church has been waiting for the full realization of Isaiah 25 for over two thousand years. This verse promises that the wait will end in recognition: &ldquo;Behold, this is our God.&rdquo; Every prayer for God to act is a form of this waiting.",
              },
            ].map((theme) => (
              <div key={theme.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${theme.color}22`, border: `2px solid ${theme.color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{theme.icon}</div>
                  <div>
                    <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: 0, lineHeight: 1.3 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{theme.ref}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Verse by Verse Commentary</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of Isaiah 25, section by section &mdash; attending to the language, the imagery, and the theological depth of each passage." }}
            />

            {[
              {
                ref: "Isaiah 25:1-5",
                heading: "Personal Praise for God&rsquo;s Wonderful Deeds",
                color: GREEN,
                text: "&ldquo;O LORD, you are my God; I will exalt you; I will praise your name, for you have done wonderful things, plans formed of old, faithful and sure. For you have made the city a heap, the fortified city a ruin; the foreigners&rsquo; palace is a city no more; it will never be rebuilt. Therefore strong peoples will glorify you; cities of ruthless nations will fear you. For you have been a stronghold to the poor, a stronghold to the needy in his distress, a shelter from the storm and a shade from the heat; for the breath of the ruthless is like a storm against a wall, like heat in a dry place. You subdue the noise of the foreigners; as heat by the shade of a cloud, so the song of the ruthless is put down.&rdquo;",
                commentary: "The chapter opens with one of the most personal moments in the entire book of Isaiah: &ldquo;O LORD, you are my God.&rdquo; The prophet speaks in the first person, not as a detached reporter of divine messages but as a worshiper who has been personally encountered by God. The praise is grounded in specific history &mdash; the destruction of &ldquo;the city&rdquo; (likely a composite symbol of all human pride and opposition to God, possibly Babylon). But more specifically, it is grounded in God&rsquo;s character: his plans are &ldquo;formed of old, faithful and sure.&rdquo; Nothing that has happened has taken God by surprise. The destruction of the proud city was always part of the plan.",
                notes: "The contrast between God&rsquo;s treatment of the poor and the powerful is stark. The ruthless are like a storm &mdash; violent, overwhelming, destructive. But God is a shelter from that storm. The powerful press down on the vulnerable like blazing heat in an arid land. But God is like the shadow of a cloud that suddenly brings relief. The image is not abstract &mdash; anyone who has experienced the shade of a cloud on a blazing day in the Middle East knows exactly what relief this describes. God is that relief, on a cosmic scale, for all who have no other refuge.",
              },
              {
                ref: "Isaiah 25:6-8",
                heading: "The Eschatological Feast and the Defeat of Death",
                color: GOLD,
                text: "&ldquo;On this mountain the LORD of hosts will make for all peoples a feast of rich food, a feast of well-aged wine, of rich food full of marrow, of aged wine well refined. And he will swallow up on this mountain the covering that is cast over all peoples, the veil that is spread over all nations. He will swallow up death forever; and the Lord GOD will wipe away tears from all faces, and the reproach of his people he will take away from all the earth, for the LORD has spoken.&rdquo;",
                commentary: "These three verses are the theological climax not only of Isaiah 25 but arguably of the entire Isaianic Apocalypse (chapters 24-27). The setting is &ldquo;this mountain&rdquo; &mdash; the holy mountain of Zion, the place where heaven touches earth, where God dwells. But the scope is universal: &ldquo;for all peoples.&rdquo; This is not a feast for Israel alone. The nations, who have been the source of so much oppression and suffering for God&rsquo;s people, are included in the feast. The veil removed from them is the covering of death, mourning, and spiritual blindness. The goal of God&rsquo;s purposes has always been the blessing of all nations (Genesis 12:3), and here that purpose is consummated.",
                notes: "The threefold action of verses 7-8 is profound: God swallows up the veil, he swallows up death, and he wipes away every tear. The verb &ldquo;swallow up&rdquo; (bila&rsquo;, the same used in v.7) applied to death is deeply ironic &mdash; death is the great swallower of everything, but here it is itself consumed. The one thing that has consumed every human being and every civilization will be consumed by a greater power. Paul quotes this in 1 Corinthians 15:54 as the anthem of resurrection: &ldquo;Death is swallowed up in victory.&rdquo; And Revelation 21:4 echoes the tear-wiping: &ldquo;He will wipe away every tear from their eyes, and death shall be no more.&rdquo; Isaiah 25 is the fountainhead of all New Testament resurrection hope.",
              },
              {
                ref: "Isaiah 25:9",
                heading: "The Day of Waiting Vindicated",
                color: TEAL,
                text: "&ldquo;It will be said on that day, &lsquo;Behold, this is our God; we have waited for him, that he might save us. This is the LORD; we have waited for him; let us be glad and rejoice in his salvation.&rsquo;&rdquo;",
                commentary: "This is one of the most emotionally charged verses in all of Isaiah. The word &ldquo;waited&rdquo; (qavah) appears twice &mdash; deliberately, emphatically. This is not coincidence but insistence: the people have waited. For a long time. Through suffering, through exile, through the silence of God, through the apparent triumph of enemies. They waited. And on that day, the wait ends. The One for whom they waited arrives. And the response is not &ldquo;finally, it is about time&rdquo; but astonishment and joy: &ldquo;Behold, this is our God!&rdquo;",
                notes: "The phrase &ldquo;this is our God&rdquo; is a recognition statement &mdash; like someone recognizing a long-absent friend. The people do not need to be told who this is. They recognize him. He is exactly who they trusted in through all the long years of waiting. The waiting was not wasted. The hope was not foolish. This verse is the eschatological justification of every act of faith ever made in the face of unanswered prayer, delayed justice, or apparent divine silence. The one who waits for God will not be put to shame.",
              },
              {
                ref: "Isaiah 25:10-12",
                heading: "The Hand of the LORD and the Fall of Moab",
                color: ROSE,
                text: "&ldquo;For the hand of the LORD will rest on this mountain, and Moab shall be trampled down in his place, as straw is trampled down in a dunghill. And he will spread out his hands in the midst of it as a swimmer spreads his hands out to swim, but the LORD will lay low his pompous pride together with the skill of his hands. And the high fortifications of his walls he will bring down, lay low, and cast to the ground, to the dust.&rdquo;",
                commentary: "After the glorious heights of vv.6-9, the chapter closes with the fall of Moab. This is jarring &mdash; but intentional. The feast is for all peoples who come; those who resist the LORD&rsquo;s purposes, like Moab, face a different outcome. Moab was a perennial enemy of Israel east of the Dead Sea, and became a symbol in prophetic literature for all who trust in their own pride and fortifications rather than the LORD. The images here are deliberately humiliating: Moab is trampled like straw in a dunghill, flailing like a swimmer going under, its high fortifications brought down to the dust.",
                notes: "The theological point is not cruelty but justice. The feast at the mountain is not for those who stand against God and his people while pressing down on the poor and needy. The same God who is a shelter for the poor (v.4) is a threat to the oppressor (vv.10-12). The hand of the LORD that rests protectively on the mountain (v.10) is the same hand that brings down the proud. Grace and judgment are not contradictions &mdash; they flow from the same holy character of God who loves the poor and resists the proud.",
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: "inline-block", background: `${section.color}18`, border: `1px solid ${section.color}44`, borderRadius: 6, padding: "3px 12px", fontSize: 12, fontWeight: 700, color: section.color, marginBottom: 10 }}>{section.ref}</div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                </div>

                <div style={{ background: BG, border: `1px solid ${section.color}22`, borderRadius: 10, padding: 18, marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 10 }}>Scripture Text (ESV)</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Commentary</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.commentary }}
                  />
                </div>

                <div style={{ background: `${PURPLE}0a`, border: `1px solid ${PURPLE}22`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Notes &amp; Cross-References</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.notes }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "How does Isaiah 25 shape the life and imagination of the Christian today? Four areas of formation from this remarkable chapter." }}
            />

            <div style={{ background: `${ROSE}0c`, border: `1px solid ${ROSE}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${ROSE}22`, border: `1px solid ${ROSE}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: ROSE, flexShrink: 0 }}>1 Cor 15:54</div>
                <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>The Defeat of Death &mdash; Fulfilled in Christ</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 25:8 announces that death will be swallowed up forever. Paul quotes it directly in 1 Corinthians 15:54 as the climax of his argument for the bodily resurrection of believers: &ldquo;When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: &lsquo;Death is swallowed up in victory.&rsquo;&rdquo;" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "Jesus&rsquo;s resurrection is not simply a miracle that happened to one person in first-century Jerusalem. It is the beginning of the end of death. The firstfruits of the harvest that Isaiah 25:8 promised. Every believer who dies in Christ dies in the confidence that the full harvest is coming &mdash; the moment when death itself will be swallowed up, when the last enemy will be destroyed." }}
              />
              <div style={{ background: `${ROSE}10`, borderLeft: `3px solid ${ROSE}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + ROSE + "\">Practice:</strong> Read 1 Corinthians 15 in one sitting, paying attention to how Paul uses Isaiah 25:8 as the climax. Then ask: how does the certainty of death&rsquo;s defeat change the way you face mortality &mdash; your own, and that of those you love? What fears about death are still operating in you that Isaiah 25:8 directly addresses?" }}
                />
              </div>
            </div>

            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${GOLD}22`, border: `1px solid ${GOLD}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: GOLD, flexShrink: 0 }}>Isaiah 25:1</div>
                <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Praising God in Advance for What He Will Do</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The prophet praises God in chapter 25 for what God has done and for the great things God will do &mdash; the feast, the defeated death, the wiped tears. Much of this had not yet happened when Isaiah wrote. He praised in prophetic anticipation. He treated the future promises of God as things so certain they could already be praised." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "This is a discipline of faith that the church has practiced through the ages: giving thanks and praise for promises that are not yet visibly fulfilled. This is what the writer of Hebrews calls &ldquo;faith&rdquo; &mdash; &ldquo;the assurance of things hoped for, the conviction of things not seen.&rdquo; The songs of Revelation 4-5 praise the Lamb for acts that are still in the process of unfolding." }}
              />
              <div style={{ background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + GOLD + "\">Practice:</strong> Write a prayer of thanksgiving for a promise of God that you have not yet seen fulfilled &mdash; perhaps the redemption of a prodigal child, the restoration of a broken relationship, the healing of an illness, or the coming of Christ&rsquo;s kingdom. Praise God for it as though it is certain, because it is. Let Isaiah&rsquo;s prophetic praise be your model." }}
                />
              </div>
            </div>

            <div style={{ background: `${TEAL}0c`, border: `1px solid ${TEAL}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${TEAL}22`, border: `1px solid ${TEAL}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: TEAL, flexShrink: 0 }}>Isaiah 25:6-7</div>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>The Universality of Salvation for All Peoples</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 25:6 is among the most dramatic statements of the universality of God&rsquo;s saving purposes in the entire Old Testament. The feast is not for Israel alone. The veil is removed not from one nation but from &ldquo;all nations.&rdquo; The tears wiped away are from &ldquo;all faces.&rdquo; This is the ancient covenant with Abraham revisited: &ldquo;in you all the families of the earth shall be blessed&rdquo; (Genesis 12:3)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The New Testament picks this up: Jesus&rsquo;s mission is to &ldquo;take away the sin of the world&rdquo; (John 1:29); the great commission sends his people to &ldquo;all nations&rdquo; (Matthew 28:19); the Book of Revelation depicts the redeemed as &ldquo;from every tribe and language and people and nation&rdquo; (Revelation 5:9). The universality of Isaiah&rsquo;s vision is the theological foundation of Christian mission." }}
              />
              <div style={{ background: `${TEAL}10`, borderLeft: `3px solid ${TEAL}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + TEAL + "\">Practice:</strong> Consider the diversity of the global church &mdash; the believers in Nigeria, Korea, Brazil, India, and Indonesia who will sit at the same feast as you. Does your Christianity have the universal horizon of Isaiah 25? Are you praying for and supporting mission to all peoples? The feast you will attend will be more diverse than any meal you have ever shared." }}
                />
              </div>
            </div>

            <div style={{ background: `${BLUE}0c`, border: `1px solid ${BLUE}28`, borderRadius: 14, padding: 28, marginBottom: 36 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${BLUE}22`, border: `1px solid ${BLUE}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: BLUE, flexShrink: 0 }}>Isaiah 25:9</div>
                <h3 style={{ color: BLUE, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Waiting on God: The Discipline of Eschatological Hope</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;We have waited for him&rdquo; &mdash; said twice in a single verse. Waiting on God is not passive resignation; it is active, directed, hopeful trust that God will act in accordance with his character and his promises. The prophets return again and again to this theme: &ldquo;those who wait for the LORD shall renew their strength; they shall mount up with wings like eagles&rdquo; (Isaiah 40:31). Psalm 27:14: &ldquo;Wait for the LORD; be strong, and let your heart take courage; wait for the LORD.&rdquo;" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The waiting of Isaiah 25:9 is waiting for salvation &mdash; the full realization of everything God has promised. The church is presently in this posture: waiting for the return of Christ, the resurrection of the dead, the new creation, the final wiping away of every tear. The tension between what God has already done in Christ and what God has not yet done in full is the defining tension of Christian existence. Isaiah 25 teaches us to wait with confident praise." }}
              />
              <div style={{ background: `${BLUE}10`, borderLeft: `3px solid ${BLUE}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + BLUE + "\">Practice:</strong> What are you waiting for God to do? Name it specifically. Then pray Isaiah 25:9 over it: &ldquo;Lord, I have waited for you. I trust that you will act. Let me be among those who say on that day: &lsquo;Behold, this is our God; we have waited for him, and he has saved us.&rsquo;&rdquo; Let the discipline of waiting become the posture of confident hope rather than anxious impatience." }}
                />
              </div>
            </div>

            {/* Discussion Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 36 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 18 }}>Discussion Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Isaiah 25 praises God for plans that were &ldquo;formed of old, faithful and sure.&rdquo; How does knowing that God&rsquo;s plans are ancient and reliable change how you read current events in your life and in the world?",
                  "In vv.4-5, God is called a &ldquo;stronghold to the poor&rdquo; and &ldquo;a shelter from the storm.&rdquo; Have you ever experienced God as a refuge in this concrete, physical-feeling way? What did that look like?",
                  "The feast in vv.6-7 is for &ldquo;all peoples.&rdquo; What barriers or prejudices in your own heart make it difficult to genuinely celebrate that God&rsquo;s salvation is universal? How does this text confront those barriers?",
                  "Paul quotes Isaiah 25:8 in 1 Corinthians 15 as the climax of resurrection hope. How does the certainty of death&rsquo;s defeat shape your attitude toward grief, illness, aging, and your own mortality?",
                  "&ldquo;We have waited for him&rdquo; (v.9) &mdash; what are you currently waiting for God to do? How do you maintain hope in the waiting without sliding into either complacency or despair?",
                  "The chapter ends with the fall of Moab &mdash; the proud and self-sufficient. How does the inclusion of judgment alongside the feast of grace in the same chapter shape your understanding of God&rsquo;s character?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION (always visible at bottom) */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
          <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 25 &mdash; exploring the feast on the mountain, the defeat of death, and the eschatological hope that this chapter offers to the church." }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Isaiah 25 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Isaiah 25 Bible Study Guide</div>
            <div style={{ color: MUTED, fontSize: 13 }}
              dangerouslySetInnerHTML={{ __html: "Part of The Vine&rsquo;s Scripture library &mdash; deep study for every chapter of the Bible." }}
            />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: GREEN }}>Isaiah 24</div>
            <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}33`, borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: PURPLE }}>Isaiah 26</div>
          </div>
        </div>
      </div>

    </div>
  );
}
