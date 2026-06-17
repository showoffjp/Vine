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
const ACCENT = "#a78bfa";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "iT6uDhNwQ4m", title: "Isaiah 49 - The Second Servant Song Explained" },
  { id: "jU1vEiOxR8n", title: "Can a Mother Forget Her Child - Isaiah 49 Study" },
  { id: "kV5wFjPyS2o", title: "I Have Engraved You on My Hands - Isaiah 49 Bible Study" },
  { id: "lW9xGkQzT6p", title: "Isaiah 49 Verse by Verse - God Never Forgets His People" },
];

const keyThemes = [
  {
    id: "t1",
    color: GREEN,
    title: "Called from the Womb",
    body: "The Servant&apos;s vocation is not an afterthought but an eternal purpose. God forms and calls before birth (cf. Jeremiah 1:5, Galatians 1:15). This is the basis for the dignity and purposefulness of every human life. Before Isaiah or any prophet could choose God, God had already chosen them &mdash; named them, shaped their mouth, and set their purpose. The same is true of every person made in his image. The call precedes the consciousness of calling.",
  },
  {
    id: "t2",
    color: PURPLE,
    title: "Light to the Gentiles",
    body: "The mission of the Servant expands beyond Israel to encompass all nations. This universal scope is the heartbeat of Isaiah&apos;s prophetic vision and the mandate Paul takes directly from this verse (Acts 13:47) for his Gentile mission. The God of Israel was never only the God of Israel; from Abraham onwards the blessing was always intended to flow out to all the families of the earth. Isaiah 49 is the place where that universal scope receives its clearest pre-Christian articulation.",
  },
  {
    id: "t3",
    color: GOLD,
    title: "The Seeming Failure of Ministry",
    body: "&quot;I have labored in vain; I have spent my strength for nothing and emptiness&quot; (v.4). The Servant experiences what every faithful servant of God has felt. Yet he commits his cause to God. This is one of the most honest portraits of the experience of ministry in Scripture. The feeling of futility is not proof of failure &mdash; it is the normal terrain of faithful work in a resistant world. The Servant does not resolve the tension by pretending he feels successful; he resolves it by trusting the one who judges justly.",
  },
  {
    id: "t4",
    color: TEAL,
    title: "God&apos;s Engraving Love",
    body: "&quot;See, I have engraved you on the palms of my hands&quot; (v.16). In the ancient world, a servant might tattoo a master&apos;s name on their hand as a sign of belonging. Here God reverses it: he has written his people&apos;s names on his own hands. This is a love that cannot be erased. The image carries extraordinary weight: God&apos;s hands are always before him; he cannot act without seeing your name. Zion&apos;s walls are ever before him &mdash; your situation is never out of his sight.",
  },
  {
    id: "t5",
    color: ACCENT,
    title: "The Restoration of Zion&apos;s Children",
    body: "Despite apparent desolation, God promises Zion will be too small for the children who will return. Walls will be rebuilt. Oppressors will bow. This is the eschatological hope that fuels present faithfulness &mdash; the God who promises restoration will deliver it. Zion asks who bore her these children when she was bereaved and barren; the answer is: the sovereign Lord, who does not need favorable circumstances to produce impossible fruitfulness. The barren woman will have more children than the married wife.",
  },
];

const verseGroups = [
  {
    id: "vg1",
    ref: "vv.1-4",
    color: GREEN,
    title: "The Servant Speaks: Called and Seemingly Spent",
    body: "Listen to me, you islands; hear this, you distant nations; before I was born the LORD called me; from my mother&apos;s womb he has spoken my name; he made my mouth like a sharpened sword; yet I said I have labored in vain; my reward is with the LORD. The Servant opens by addressing the distant nations &mdash; not Israel alone. This is a cosmic announcement. The call from the womb establishes the eternal dimension of the Servant&apos;s vocation; it did not originate in historical circumstance but in divine purpose before time. The sharpened sword is the prophetic word, the tool of the Servant&apos;s work. And yet: the complaint arrives early. Labor, apparent futility, exhausted strength &mdash; these are the honest textures of faithful ministry. The Servant does not hide this from God or from the nations. But the complaint ends not in despair but in trust: my reward is with the LORD.",
  },
  {
    id: "vg2",
    ref: "vv.5-7",
    color: PURPLE,
    title: "The Servant&apos;s Mission Expanded to the Nations",
    body: "And now the LORD says who formed me in the womb to be his servant to bring Jacob back to him; he says it is too small a thing for you to be my servant to restore the tribes of Jacob; I will also make you a light for the Gentiles; that my salvation may reach to the ends of the earth; kings will see you and rise up; princes will bow down; because of the LORD who is faithful, the Holy One of Israel who has chosen you. The divine logic is stunning: the task of restoring Israel is too small for the Servant &mdash; the scope of his mission is nothing less than the salvation of all peoples. The Servant begins rejected (despised, abhorred by nations, a servant of rulers), but the trajectory is toward universal recognition: kings and princes will rise and bow. This reversal is grounded in the faithfulness of the Holy One &mdash; not in the Servant&apos;s merit or strategy.",
  },
  {
    id: "vg3",
    ref: "vv.8-12",
    color: GOLD,
    title: "Covenant Restoration and the New Exodus",
    body: "In the time of my favor I will answer you; I will keep you; I will restore the land and assign desolate inheritances; say to the captives &quot;Come out&quot; and to those in darkness &quot;Be free&quot;; they will neither hunger nor thirst; he who has compassion on them will guide them; he will lead them beside springs of water. These verses draw on the imagery of the Exodus and the wilderness wandering: the people pass through mountains, receive springs of water, travel from distant lands. But this is a new and greater exodus. The Servant does not only proclaim freedom &mdash; he becomes the covenant to the people, embodying the relationship that God is restoring. The compassion of God is active and directive; he will guide them, lead them, and ensure their provision through the wilderness.",
  },
  {
    id: "vg4",
    ref: "v.13",
    color: TEAL,
    title: "The Whole Creation Invited to Rejoice",
    body: "Shout for joy, you heavens; rejoice, you earth; burst into song, you mountains; for the LORD comforts his people and will have compassion on his afflicted ones. This single verse functions as a doxological interlude between the Servant&apos;s oracle and Zion&apos;s complaint. The announcement of God&apos;s saving action is so significant that all of creation is summoned to respond &mdash; heavens, earth, mountains. The pattern of calling creation to worship at moments of divine redemption runs throughout Isaiah and the Psalms. God&apos;s comfort of his people is a cosmic event, not merely a private transaction.",
  },
  {
    id: "vg5",
    ref: "vv.14-16",
    color: ACCENT,
    title: "Zion&apos;s Complaint and God&apos;s Unforgetting Answer",
    body: "But Zion said the LORD has forsaken me, the Lord has forgotten me; can a mother forget the baby at her breast? Though she may forget, I will not forget you; see, I have engraved you on the palms of my hands; your walls are ever before me. This is among the most tender passages in all of Scripture. Zion voices the deepest human fear &mdash; that God has abandoned and forgotten her. God&apos;s response is not a scolding but a question: can a mother forget the infant at her breast? The rhetorical expectation is no &mdash; such forgetting would be monstrous. But even if she could, God cannot. The engraving on the palms is permanent and visible: God&apos;s hands bear your address, your situation, your walls &mdash; always before him, never out of mind.",
  },
  {
    id: "vg6",
    ref: "vv.17-21",
    color: GREEN,
    title: "Zion Overwhelmed by Returning Children",
    body: "Your children hasten back; your destroyers will depart; your ruins will seem too small for the people; you will ask in your heart who bore me these? Then you will know I am the LORD. The irony is exquisite: Zion thought herself bereaved, barren, forgotten &mdash; and she will be overwhelmed by the abundance of returning children. She will ask in astonishment who bore these for her. The answer is the one who seemed to have forsaken her. The desolation was not abandonment; it was the context in which God would demonstrate his power to restore beyond what was lost. Zion&apos;s ruins will be too small &mdash; the restoration will exceed the original.",
  },
  {
    id: "vg7",
    ref: "vv.22-26",
    color: PURPLE,
    title: "The Nations Bring Zion&apos;s Children Home",
    body: "This is what the Sovereign LORD says: I will beckon to the nations; they will bring your sons; kings will be your foster fathers; those who hope in me will not be disappointed. The reversal is total: the same nations that oppressed and exiled Zion&apos;s children will now become their servants and escorts home. Kings who enslaved will become foster fathers; queens who lorded it over will bow down. The oppressors will eat their own flesh and be drunk on their own blood &mdash; a vivid image of the self-destruction that comes when God rises to contend for his people. And the chapter ends on a note of personal promise: those who hope in the LORD will not be put to shame. The waiting is not futile; the hope is warranted.",
  },
];

const applicationPoints = [
  {
    id: "a1",
    color: GREEN,
    title: "Find Comfort in God&apos;s Engraved Love",
    body: "Your name is on his hands. This is not metaphor designed to be admired from a distance &mdash; it is a promise designed to be received personally. When the feeling of abandonment or forgetfulness descends, the answer is not to manufacture better feelings but to return to what is true: God cannot act without seeing you. Your walls are ever before him. Let this truth do its slow, deep work in the places where you have believed the lie that God has moved on.",
  },
  {
    id: "a2",
    color: PURPLE,
    title: "Resist the Lie That Your Ministry Labor Is Wasted",
    body: "The Servant says &quot;I have labored in vain&quot; and then commits his cause to God. That sequence is important: he does not deny the feeling, but he does not let it define the verdict. If you are in a season of apparently fruitless ministry, Isaiah 49 gives you permission to name that honestly &mdash; and then to refuse its conclusion. The final judge of faithful labor is not the visible fruit but the LORD in whom the Servant trusted.",
  },
  {
    id: "a3",
    color: GOLD,
    title: "Pray for God&apos;s Salvation to Reach the Ends of the Earth",
    body: "Isaiah 49:6 is not only a prophecy &mdash; it is a mandate. Paul uses it to justify his Gentile mission (Acts 13:47). The church exists to be an instrument of this universal reach. Let the vision of God&apos;s salvation extending to islands and distant nations shape your prayer life, your giving, your partnerships, and your own sense of calling. The God who said &quot;it is too small a thing&quot; to restore only Israel is still the God who desires all peoples to know him.",
  },
  {
    id: "a4",
    color: TEAL,
    title: "Speak Hope to Those Who Feel Forsaken",
    body: "Zion&apos;s complaint in verse 14 is the voice of many people in your life: &quot;the LORD has forsaken me; the Lord has forgotten me.&quot; God does not rebuke this cry &mdash; he answers it with tenderness. You can do the same. When someone says &quot;God has abandoned me,&quot; the answer is not correction but the gentle, persistent witness of Isaiah 49: look at his hands; see your name there; your walls are always before him.",
  },
  {
    id: "a5",
    color: ACCENT,
    title: "Trust the God Who Restores What Has Been Devastated",
    body: "Zion&apos;s ruins will be too small for the returning children. The place that looked permanently broken will be overwhelmed by abundance. This is the pattern of God&apos;s work throughout Scripture &mdash; not modest recovery but superabundant restoration. What has been devastated in your life, your community, your church? Isaiah 49 invites you to hold those ruins with open hands and trust the God who makes desolate places overflow.",
  },
  {
    id: "a6",
    color: GREEN,
    title: "Receive Your Calling as Formed Before Birth and Unretractable",
    body: "The Servant was called from the womb. Circumstances did not originate the call and circumstances cannot retract it. If God has given you a sense of calling &mdash; to a person, a work, a place, a people &mdash; the difficulty you face in living it out is not evidence that you misheard. It may be the normal terrain that every called person walks. The same God who formed the Servant in the womb and called him before birth is with you in the middle of the arduous middle of your vocation.",
  },
];

export default function Isaiah49GuidePage() {
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
              background: `${GREEN}22`,
              border: `1px solid ${GREEN}44`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 11,
              color: GREEN,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: 14,
            }}
          >
            Isaiah 49 &mdash; Bible Study Guide
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
            Isaiah 49: The Second Servant Song and God&apos;s Unforgetting Love
          </h1>
          <p
            style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, maxWidth: 660, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Isaiah 49 contains the second Servant Song alongside some of the most tender words God has ever spoken. The Servant is called from the womb, given a mouth like a sharpened sword, and sent as a light to the Gentiles &mdash; while Zion cries that she has been forgotten. God&apos;s answer is the engraved name: &quot;I have engraved you on the palms of my hands.&quot;",
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
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                background: activeTab === t.id ? `${GREEN}22` : "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
                Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 49 contains the second Servant Song (vv.1&ndash;7) alongside some of the most tender words God has ever spoken to his people. The Servant speaks: God called him from the womb, made his mouth like a sharp sword, but he has labored in vain &mdash; or so it seems. Yet God says: &quot;It is too small a thing for you to be my servant to restore the tribes of Jacob; I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth.&quot;",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Then in vv.14&ndash;26, Zion complains that God has forgotten and forsaken her. God&apos;s response is among the most moving in all of Scripture: &quot;Can a mother forget the baby at her breast? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands.&quot;",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter moves from the Servant&apos;s universal mission to God&apos;s personal, unbreakable commitment to every individual who belongs to him. It is the chapter that holds together the cosmic scope of redemption and the intimate particularity of God&apos;s love for each named person.",
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
                ["Chapter", "Isaiah 49"],
                ["Verses", "26"],
                ["Section", "Isaiah 40-55 (Comfort)"],
                ["Key Image", "Name Engraved on Palms"],
                ["NT Reference", "Acts 13:47 (Paul)"],
                ["Central Promise", "I will not forget you"],
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
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}33`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 12,
                padding: "20px 24px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  marginBottom: 8,
                }}
              >
                Key Verse &mdash; Isaiah 49:15-16
              </div>
              <p
                style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands; your walls are ever before me.&quot;",
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
                    "Four video studies on Isaiah 49 &mdash; the Servant Song, the engraved name, and God&apos;s unforgetting love for his people.",
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Key Themes in Isaiah 49
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five major theological themes run through Isaiah 49. Each one has deep roots in the rest of Scripture and profound implications for Christian faith and practice.",
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

            {/* Additional context */}
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
                Christological Connection
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The New Testament writers understood the Servant of Isaiah 49 to be fulfilled in Jesus Christ. Luke 2:32 applies &quot;a light for revelation to the Gentiles&quot; to the infant Jesus. Acts 13:47 has Paul and Barnabas cite verse 6 as their mandate for the Gentile mission. John 1:14 echoes the servant&apos;s formation and mission in the incarnation. The Servant who labored in apparent vain is the one who bore the cross &mdash; and whose resurrection vindicated his cause before all peoples.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Reading Isaiah 49 through the lens of Jesus does not erase the historical dimension &mdash; the Servant spoke to Israel in exile &mdash; but it opens the passage to its fullest meaning: the one engraved on God&apos;s palms is also the one with pierced palms, who bears our names forever.",
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
                Verse by Verse: Isaiah 49 (26 Verses)
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A verse-by-verse walkthrough of all 26 verses in seven natural sections. Click each section to expand the commentary.",
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

            {/* Summary of the chapter structure */}
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
                    "Isaiah 49 divides naturally into two movements. The first movement (vv.1&ndash;13) is the Servant&apos;s oracle: his vocation (vv.1&ndash;4), his expanded mission (vv.5&ndash;7), the covenant restoration he will accomplish (vv.8&ndash;12), and the creation&apos;s doxological response (v.13).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The second movement (vv.14&ndash;26) is God&apos;s answer to Zion&apos;s complaint: the engraved name (vv.14&ndash;16), the promise of children beyond reckoning (vv.17&ndash;21), and the reversal of the nations&apos; role (vv.22&ndash;26). The chapter ends with the declaration that all flesh will know the LORD is Savior, Redeemer, and Mighty One of Jacob.",
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
                Application: Living Isaiah 49
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 49 is not a historical curiosity &mdash; it is a living word addressed to God&apos;s people in every generation. Six areas of application for personal and communal reflection.",
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
                background: `${ACCENT}10`,
                border: `1px solid ${ACCENT}30`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 8,
              }}
            >
              <div
                style={{ color: ACCENT, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 12 }}
              >
                Prayer Response
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord, I confess that I have believed the lie that you have forgotten me. I receive what you say instead: my name is engraved on your palms. I am never out of your sight. The labor I have found discouraging &mdash; I commit it to you, the one who judges. Expand my vision for your salvation reaching to the ends of the earth. Give me words to speak hope to those who feel forsaken. Restore what has been devastated in ways that overwhelm me with abundance. You are the God who forms before birth and calls with a purpose that circumstances cannot retract. I am yours.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Based on Isaiah 49:1, 4, 6, 15-16, 25-26. Use these verses as a personal prayer by reading them aloud and adding your own name, circumstances, and honest response.",
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
                  { ref: "Isaiah 42:1-9", note: "The First Servant Song &mdash; the Servant introduced", color: GREEN },
                  { ref: "Isaiah 50:4-11", note: "The Third Servant Song &mdash; the Servant who does not retreat", color: PURPLE },
                  { ref: "Isaiah 52:13-53:12", note: "The Fourth Servant Song &mdash; the Suffering Servant", color: GOLD },
                  { ref: "Isaiah 54", note: "The fruit of the Servant&apos;s work applied to the barren woman", color: TEAL },
                  { ref: "Acts 13:44-49", note: "Paul cites Isaiah 49:6 as his Gentile mission mandate", color: ACCENT },
                  { ref: "Jeremiah 1:4-5", note: "The prophet called from the womb &mdash; parallel to the Servant", color: GREEN },
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
