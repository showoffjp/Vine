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

export default function Isaiah20GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "mNv8Qp3XQHE", title: "Isaiah 20 -- The Naked Prophet and Egypt's Shame" },
    { videoId: "r5Kd7ltWS9M", title: "Prophetic Sign Acts in the Old Testament" },
    { videoId: "Tz8XgNGTqVY", title: "Isaiah's Warning: Do Not Trust in Egypt" },
    { videoId: "Wb3pGSPvRhk", title: "Isaiah Chapters 18-20 -- Nations Under God's Judgment" },
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
      <div style={{ background: "linear-gradient(180deg, #0e0e1a 0%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${TEAL}18`, border: `1px solid ${TEAL}40`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: TEAL, letterSpacing: "0.08em", marginBottom: 18 }}>
            ISAIAH 20 &mdash; BIBLE STUDY GUIDE
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            The Naked Prophet and the Folly of Trusting Egypt
          </h1>
          <p dangerouslySetInnerHTML={{ __html: "Isaiah 20 is one of the most startling chapters in all of Scripture. In just six verses, God commands the prophet Isaiah to strip off his garments and walk naked and barefoot for three years &mdash; a living sermon to a nation tempted to place its hope in Egypt rather than in the Lord. This guide walks through every verse, unpacks the sign-act&rsquo;s meaning, and asks what it says to believers today who are tempted to trust worldly powers over God." }} style={{ fontSize: 17, color: MUTED, lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }} />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <div style={{ background: `${TEAL}14`, border: `1px solid ${TEAL}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: TEAL, fontWeight: 700 }}>6 Verses</div>
            <div style={{ background: `${GOLD}14`, border: `1px solid ${GOLD}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: GOLD, fontWeight: 700 }}>Prophetic Sign-Act</div>
            <div style={{ background: `${PURPLE}14`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: PURPLE, fontWeight: 700 }}>circa 711 BC</div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 22px",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${TEAL}` : "2px solid transparent",
                color: activeTab === tab.id ? TEAL : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ===== OVERVIEW TAB ===== */}
        {activeTab === "overview" && (
          <div>
            {/* Context block */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL SETTING</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 14 }}>When and Why Isaiah 20 Was Written</h2>
              <p dangerouslySetInnerHTML={{ __html: "The opening verse pins the chapter to a specific event: the Assyrian commander Tartan&rsquo;s capture of Ashdod, a Philistine city on the Mediterranean coast, in 711 BC during the reign of Sargon II. This conquest sent shockwaves through the small nations of the ancient Near East &mdash; Judah included &mdash; who had been weighing their military options. The dominant question of the day was: should we form a coalition with Egypt and Cush (modern-day Sudan and Ethiopia) to resist Assyrian expansion?" }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }} />
              <p dangerouslySetInnerHTML={{ __html: "Isaiah had already been warning against an Egyptian alliance for years (see Isaiah 18&ndash;19, 30&ndash;31). But God now called for more than words. He called for a living acted parable &mdash; a prophetic sign-act &mdash; that would make the message impossible to miss. For three years the prophet walked through Jerusalem stripped of his outer robe and sandals, in the condition of a prisoner of war, while the people watched and wondered." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }} />
            </div>

            {/* What is a sign-act */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>KEY CONCEPT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 14 }}>What Is a Prophetic Sign-Act?</h2>
              <p dangerouslySetInnerHTML={{ __html: "Across the Old Testament, God sometimes instructed prophets to enact their message rather than merely speak it. These &ldquo;sign-acts&rdquo; were not theatrical stunts &mdash; they were considered effective actions: the doing of the sign was itself a participation in the reality it signified. Ezekiel lay on his side for over a year (Ezekiel 4), shaved his head and divided the hair three ways (Ezekiel 5), and packed exile luggage and dug through a wall (Ezekiel 12). Hosea married an unfaithful woman to embody God&rsquo;s covenant love. Jeremiah bought a field in besieged Jerusalem as an act of confidence in God&rsquo;s promise of restoration." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }} />
              <p dangerouslySetInnerHTML={{ __html: "Isaiah&rsquo;s three-year walk was of this same order. It was a bodily prophecy: the shame that Egypt and Cush would suffer at Assyrian hands was pre-enacted in the prophet&rsquo;s own person. Anyone who saw Isaiah during those three years was seeing a preview of the catastrophe that awaited the nations Judah was tempted to trust." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }} />
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>CHAPTER STRUCTURE</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 20 }}>The Shape of Isaiah 20</h2>
              {[
                { ref: "v. 1", label: "Historical Anchor", desc: "The fall of Ashdod to Sargon II of Assyria sets the geopolitical stage for the oracle that follows. Tartan (a title, not a personal name) is Sargon&rsquo;s commander." },
                { ref: "vv. 2&ndash;3", label: "The Command and Its Duration", desc: "God commands Isaiah to remove his sackcloth outer robe and sandals and walk as a prisoner of war. He obeys for three years. God then explains the sign: it represents what Assyria will do to Egypt and Cush." },
                { ref: "v. 4", label: "The Sign Explained", desc: "Egypt&rsquo;s and Cush&rsquo;s people will be led away by Assyria as captives &mdash; naked, barefoot, and shamed &mdash; both young and old, with buttocks uncovered. This was the humiliation awaiting Judah&rsquo;s would-be allies." },
                { ref: "vv. 5&ndash;6", label: "The Reaction of the Coastlands", desc: "The nations that had looked to Egypt with hope will be dismayed when Egypt fails. The inhabitants of the coastland will ask: &lsquo;Where shall we flee for help?&rsquo; The oracle ends with the stark question and no human answer." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 3 ? 18 : 0 }}>
                  <div style={{ background: `${TEAL}18`, border: `1px solid ${TEAL}30`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: TEAL, whiteSpace: "nowrap", height: "fit-content", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.label}</div>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick-read summary */}
            <div style={{ background: `${TEAL}0a`, border: `1px solid ${TEAL}25`, borderRadius: 14, padding: 26 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>ONE-PARAGRAPH SUMMARY</div>
              <p dangerouslySetInnerHTML={{ __html: "In 711 BC, as Judah weighed an alliance with Egypt against Assyria, God commanded the prophet Isaiah to walk through Jerusalem naked and barefoot for three years as a living prophecy of what Assyria would do to Egypt and Cush: lead them away stripped and shamed as captives. When the day came and Egypt fell, the coastland nations who had placed their confidence there would be devastated. The chapter ends with an open, rhetorical question &mdash; &lsquo;Where shall we flee for help?&rsquo; &mdash; that points implicitly toward the only answer: to the Lord alone." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} />
            </div>
          </div>
        )}

        {/* ===== KEY THEMES TAB ===== */}
        {activeTab === "key-themes" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Key Themes in Isaiah 20</h2>
              <p dangerouslySetInnerHTML={{ __html: "Six verses contain a concentrated theology of trust, power, shame, and divine sovereignty. These four themes run through the chapter and connect it to the broader message of Isaiah&rsquo;s ministry." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {[
              {
                num: "01",
                color: TEAL,
                title: "The Folly of Trusting Earthly Powers",
                icon: "sword",
                body1: "The entire chapter is a warning against a specific political and spiritual temptation: the temptation to seek security in a nation that looks strong but is not. Egypt was the superpower of the ancient world &mdash; a civilization of storied military power, monumental architecture, and cultural prestige. From Judah&rsquo;s perspective, an alliance with Egypt against Assyria was simply prudent foreign policy.",
                body2: "But God called it something else: a misplacement of trust. Isaiah 30:1&ndash;3 makes this explicit: &ldquo;Woe to the rebellious children, declares the Lord, who carry out a plan, but not mine &hellip; who set out to go down to Egypt &hellip; to take refuge in the protection of Pharaoh and to seek shelter in the shadow of Egypt. But the protection of Pharaoh shall turn to your shame, and the shelter in the shadow of Egypt to your humiliation.&rdquo; Isaiah 20 is the enacted version of that warning.",
                body3: "The chapter does not deny that Egypt was powerful. It denies that Egypt&rsquo;s power was reliable from God&rsquo;s perspective. Assyria, the very instrument Judah feared, would be God&rsquo;s tool for humiliating the ally Judah was tempted to run toward. The path to safety did not run through Cairo. The logic of Isaiah&rsquo;s sign-act is this: the nation you want to trust will soon be wearing the same chains you are afraid of.",
              },
              {
                num: "02",
                color: GOLD,
                title: "Prophetic Sign-Acts and Embodied Proclamation",
                icon: "body",
                body1: "Isaiah&rsquo;s naked walk was not metaphorical &mdash; it was literal. He removed his sackcloth outer garment (the rough-woven cloak of a prophet&rsquo;s calling) and his sandals and went about Jerusalem in the minimal clothing of a prisoner of war or a slave. For three full years.",
                body2: "This was embodied proclamation at its most radical. The medium was the message: &ldquo;What you see on me is what you will see on the Egyptians and Cushites when Assyria is done with them.&rdquo; The prophet&rsquo;s body became a walking visual aid &mdash; a three-year object lesson that the comfortable alliance option had a catastrophic downside.",
                body3: "The sign-act also reveals something about how God communicates. He does not limit himself to words. He calls his messengers to sacrifice comfort, dignity, and reputation in order to make the message stick. Isaiah&rsquo;s obedience to this command was itself an act of worship &mdash; and an act of love for the people he was warning.",
              },
              {
                num: "03",
                color: PURPLE,
                title: "God&rsquo;s Sovereignty Over All Nations",
                icon: "crown",
                body1: "Isaiah 20 sits within a larger section of Isaiah (chapters 13&ndash;23) that the editors titled &ldquo;oracles against the nations.&rdquo; Babylon, Philistia, Moab, Damascus, Egypt, Cush, Edom, Arabia &mdash; all come under prophetic scrutiny. The cumulative effect is staggering: the God of Israel is not the tribal deity of a small Levantine nation. He is the Lord of history who directs the rise and fall of superpowers.",
                body2: "In Isaiah 20, Assyria is doing God&rsquo;s bidding, even though Assyria does not know it. Just as Isaiah 10 describes Assyria as the &ldquo;rod of my anger&rdquo; &mdash; a tool in God&rsquo;s hand for judging his own people &mdash; so here Assyria is the instrument that will expose Egypt&rsquo;s weakness and vindicate God&rsquo;s warning through Isaiah.",
                body3: "This theology of divine sovereignty over geopolitics has massive pastoral implications. No empire, no alliance, no military power operates outside God&rsquo;s knowledge and ultimate governance. The nations may rage (Psalm 2), but the Lord &ldquo;who sits in the heavens laughs; the Lord holds them in derision&rdquo; (Psalm 2:4). Isaiah 20 is a small but vivid illustration of that reality.",
              },
              {
                num: "04",
                color: "#E11D48",
                title: "Shame as the Consequence of Misplaced Trust",
                icon: "shame",
                body1: "The language of shame and humiliation runs throughout the chapter. The captives are led away &ldquo;naked and barefoot, with buttocks uncovered&rdquo; (v.4) &mdash; stripped of the dignity that clothing provides, exposed before their captors and the watching world. This is the ancient Near Eastern idiom for total defeat and utter subjugation.",
                body2: "Verse 5 uses two strong verbs: those who trusted Egypt will be &ldquo;dismayed and ashamed&rdquo; (KJV), or &ldquo;shattered and ashamed&rdquo; (ESV). The Hebrew word bosh (shame/put to shame) appears in the psalms repeatedly as the opposite of what happens to those who trust God. &ldquo;Those who trust in him will never be put to shame&rdquo; (Psalm 22:5 echoing Joel 2:27). The implication is pointed: trust in God brings the opposite of what trusting Egypt produces.",
                body3: "The shame is not just personal but communal. The coastland peoples &mdash; all the small nations watching the geopolitical drama &mdash; will be &ldquo;dismayed and ashamed of Ethiopia their hope and of Egypt their boast&rdquo; (v.5 ESV). When the power you boasted in is humiliated, your boast becomes your shame. Isaiah&rsquo;s message is that the direction of trust determines the direction of eventual honor or shame.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ background: `${theme.color}18`, border: `1px solid ${theme.color}35`, borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 900, color: theme.color }}>{theme.num}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: theme.body1 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: theme.body2 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: theme.body3 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            ))}
          </div>
        )}

        {/* ===== VERSE BY VERSE TAB ===== */}
        {activeTab === "verse-by-verse" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Verse-by-Verse Commentary</h2>
              <p dangerouslySetInnerHTML={{ __html: "Isaiah 20 contains just six verses, but each one repays careful study. Below is a close reading with attention to the Hebrew, the historical background, and the theological weight of each passage." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {/* Verse 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${TEAL}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: TEAL, fontWeight: 900, fontSize: 22 }}>v. 1</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Historical Setting</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${TEAL}`, background: `${TEAL}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;In the year that the commander in chief, who was sent by Sargon the king of Assyria, came to Ashdod and fought against it and captured it &mdash;&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + TEAL + "\">Sargon II of Assyria</strong> reigned from 722 to 705 BC and was one of the most powerful rulers of the ancient world. His capture of Samaria and deportation of the northern kingdom of Israel (722 BC) had already happened by this time, making Assyrian power a living terror for Judah. The Assyrian annals confirm the capture of Ashdod, a strategic port city on the Philistine coast, in 711 BC &mdash; a remarkably precise historical correlation that lends this oracle its urgent immediacy." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + TEAL + "\">Tartan</strong> is not a personal name but an Assyrian military title for a commander-in-chief, roughly equivalent to a modern supreme commander. This same title appears in 2 Kings 18:17. The delegation of this mission to a high commander signals that the conquest of Ashdod was official Assyrian policy, not a rogue operation." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The capture of Ashdod was particularly alarming because it happened partly because the city had been conspiring against Assyria &mdash; and Egypt had been involved in encouraging that conspiracy. Egypt offered support, then backed away when Assyria moved. This is precisely the dynamic Isaiah&rsquo;s whole ministry addressed: Egypt promises more than it can deliver." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* Verses 2-3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${GOLD}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: GOLD, fontWeight: 900, fontSize: 22 }}>vv. 2&ndash;3</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>The Command and the Sign</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${GOLD}`, background: `${GOLD}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;At that time the Lord spoke by Isaiah the son of Amoz, saying, &lsquo;Go and loose the sackcloth from your waist and take off your sandals from your feet,&rsquo; and he did so, walking naked and barefoot. Then the Lord said, &lsquo;As my servant Isaiah has walked naked and barefoot for three years as a sign and a portent against Egypt and Cush&hellip;&rsquo;&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The <strong style=\"color:" + GOLD + "\">sackcloth</strong> Isaiah wore was the rough outer garment associated with prophetic ministry and mourning &mdash; the garb of one who stands outside comfortable society to deliver uncomfortable truth (compare Matthew 3:4; Zechariah 13:4). To remove it was to shed his prophetic uniform and take on a more radical visual form: that of a captive stripped for deportation." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The phrase <strong style=\"color:" + GOLD + "\">&ldquo;naked and barefoot&rdquo;</strong> in ancient Near Eastern context specifically evoked the condition of war captives. Prisoners of war were stripped of their clothing and walked barefoot as a mark of their subjugation. Egyptian tomb paintings and Assyrian relief sculptures both depict captives in this condition &mdash; it was the universal iconography of defeat and shame." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The duration &mdash; <strong style=\"color:" + GOLD + "\">three years</strong> &mdash; is striking and unusual. Most prophetic sign-acts were brief demonstrations. Three years suggests a sustained, unavoidable witness to all who passed through Jerusalem during that period. The sign could not be forgotten or dismissed as a single eccentric episode. Isaiah&rsquo;s whole ministry during those years was shaped by his physical appearance. Every person who encountered him was confronted with the prophecy." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The phrase <strong style=\"color:" + GOLD + "\">&ldquo;as a sign and a portent&rdquo;</strong> (Hebrew: &lsquo;ot u-mofet) appears together in several significant Old Testament passages: the plagues of Egypt (Deuteronomy 4:34), the credentials of God&rsquo;s messengers (Deuteronomy 13:1), and the ministry of Isaiah&rsquo;s children whose very names were signs (Isaiah 8:18). The pairing elevates this act beyond a visual illustration to a prophetically efficacious declaration." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* Verse 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${PURPLE}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: PURPLE, fontWeight: 900, fontSize: 22 }}>v. 4</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>The Prophecy Explained</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: `${PURPLE}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;&hellip;so shall the king of Assyria lead away the Egyptian captives and the Cushite exiles, both the young and the old, naked and barefoot, with buttocks uncovered, the nakedness of Egypt.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "This verse is the interpretive key to the entire sign-act. What Isaiah has been performing, Egypt and Cush will physically experience. The language is deliberately stark and humiliating: <strong style=\"color:" + PURPLE + "\">&ldquo;with buttocks uncovered.&rdquo;</strong> This is not gratuitous detail &mdash; it is the language of total subjugation. Victors in the ancient world sometimes stripped their captives to maximize the psychological impact of defeat. The sight of Egypt&rsquo;s people in this condition would shatter the image of invincibility that made Egypt such an appealing ally." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + PURPLE + "\">Cush</strong> (Hebrew: Kush) referred to the territory south of Egypt, encompassing modern-day Sudan and parts of Ethiopia. During this period, Cush had significant influence in Egypt &mdash; the 25th Dynasty of Egypt was Cushite, with Pharaoh Shabaka ruling from approximately 716 to 702 BC. An alliance with Egypt was therefore also implicitly an alliance with Cushite military power, which seemed formidable. The oracle pairs them precisely because they were being considered together as a combined counterweight to Assyria." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The inclusion of <strong style=\"color:" + PURPLE + "\">&ldquo;both the young and the old&rdquo;</strong> emphasizes the totality of the coming defeat. There will be no demographic exemption from Assyria&rsquo;s conquest. This phrase appears in other passages describing comprehensive judgment (Joshua 6:21; Esther 3:13) and functions as a merism &mdash; a literary device indicating the whole by naming the extremes." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* Verses 5-6 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `#E11D4812`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: "#E11D48", fontWeight: 900, fontSize: 22 }}>vv. 5&ndash;6</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>The Nations&rsquo; Dismay</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: "3px solid #E11D48", background: "#E11D4808", borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;And the inhabitants of this coastland will say in that day, &lsquo;Behold, this is what has happened to those in whom we hoped and to whom we fled for help to be delivered from the king of Assyria! And we, how shall we escape?&rsquo;&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s final two verses shift the focus from Egypt and Cush themselves to the smaller nations watching the disaster unfold. The <strong style=\"color:#E11D48\">&ldquo;inhabitants of this coastland&rdquo;</strong> likely refers to Philistia and the Phoenician coastal cities, but the application was clearly meant to include Judah, which had been weighing the same Egyptian alliance. When the mighty fall, those who had pinned their hopes on them are left exposed, asking the question that the whole chapter is designed to provoke." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The verb translated <strong style=\"color:#E11D48\">&ldquo;hoped&rdquo;</strong> (qavah in Hebrew) is the same word used repeatedly in Isaiah for the right kind of waiting &mdash; waiting on God. &ldquo;Those who wait for the Lord shall renew their strength&rdquo; (Isaiah 40:31). The tragic irony is that the coastland peoples &ldquo;qavah&rdquo;-ed Egypt instead of God. They gave to Egypt the posture of trust that belongs to God alone. The chapter reveals this as not merely a political miscalculation but a form of spiritual adultery &mdash; misplaced worship of power." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The question <strong style=\"color:#E11D48\">&ldquo;And we, how shall we escape?&rdquo;</strong> is left without an answer in the text. This is not an oversight but a rhetorical strategy. Isaiah leaves the question hanging so that his listeners &mdash; and his readers throughout history &mdash; must supply the answer. The answer the whole book of Isaiah is pointing toward: escape is found in trusting &ldquo;the Holy One of Israel&rdquo; (a phrase that appears 25 times in Isaiah). The silence at the end of Isaiah 20 is an invitation to look beyond Egypt, beyond Assyria, beyond every human power, to the one who holds all of them in his hand." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* Historical note */}
            <div style={{ background: `${GREEN}0a`, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL FULFILLMENT</div>
              <p dangerouslySetInnerHTML={{ __html: "While Sennacherib&rsquo;s army never completely conquered Egypt in Isaiah&rsquo;s own day, the region was devastated by Assyrian invasions repeatedly across the following century. Esarhaddon invaded Egypt in 671 BC, sacked Memphis, and deported thousands &mdash; the very scene Isaiah had prophesied. Ashurbanipal then sacked Thebes in 663 BC, an event so traumatic that the prophet Nahum used it as a warning to Nineveh itself (Nahum 3:8&ndash;10). Isaiah&rsquo;s oracle, spoken in 711 BC, was historically vindicated across the following decades." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
            </div>
          </div>
        )}

        {/* ===== APPLICATION TAB ===== */}
        {activeTab === "application" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Applying Isaiah 20 Today</h2>
              <p dangerouslySetInnerHTML={{ __html: "Isaiah 20 is not merely ancient history &mdash; it speaks with penetrating relevance to every generation that faces the temptation to trust in visible, powerful, worldly resources instead of in God. Four major applications emerge from the chapter." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {[
              {
                num: "01",
                color: TEAL,
                title: "Identify Your &ldquo;Egypt&rdquo;",
                summary: "Where are you looking for safety in the wrong place?",
                body1: "Every generation has its Egypt: a power, institution, relationship, or resource that seems strong and reliable enough to build your security on. For ancient Judah, it was the military muscle of the Egyptian empire. For us, it might be financial reserves, political alliances, personal reputation, professional security, national power, or any number of other sources of strength that feel more tangible than God.",
                body2: "The question Isaiah 20 poses is not &ldquo;Is Egypt real?&rdquo; Egypt was very real. The question is: &ldquo;Is Egypt trustworthy at the ultimate level?&rdquo; Can Egypt do for you what only God can do? Can it guard your soul, secure your eternity, or sustain you when the great crises come? Isaiah says no &mdash; not because Egypt is weak, but because Egypt is finite, and you are trusting it with infinite weight.",
                body3: "A diagnostic: what is the thing whose loss you most fear? Where do you go first when you feel anxious? These questions reveal the functional Egypt in your life. The goal is not to stop using wise earthly resources &mdash; Isaiah never said Judah should have no army or no allies. The goal is to stop trusting them at the level that belongs only to God.",
                practice: "Journal on this question: &ldquo;What earthly resource am I relying on as my ultimate security rather than God?&rdquo; Be specific. Name it. Then bring it to prayer, releasing your grip on it and asking God to reorder your trust.",
              },
              {
                num: "02",
                color: GOLD,
                title: "God Uses Unusual Means to Deliver His Message",
                summary: "Are you willing to be a sign-act?",
                body1: "Isaiah did not choose to walk through Jerusalem naked and barefoot for three years. God commanded it, and Isaiah obeyed. This is one of the most radical acts of obedience in the entire Old Testament. It cost Isaiah comfort, dignity, and social standing. It made him look foolish by every conventional measure of prophetic respectability.",
                body2: "God sometimes calls his people to deliver his message through their lives rather than their words &mdash; or through lives and words together that cannot be separated. The way you handle suffering, the way you forgive publicly, the way you live simply in an acquisitive culture, the way you persevere in faithfulness when everything is falling apart &mdash; these are sign-acts. They embody a message that words alone cannot carry.",
                body3: "The question Isaiah 20 raises for us is: am I willing to obey God even when obedience makes me look strange? Isaiah&rsquo;s three-year walk was incomprehensible to the people of Jerusalem until God explained it. Our obedience will sometimes be incomprehensible to the world around us. That is part of what it means to be a prophetic community &mdash; people whose lives point beyond themselves to a reality the watching world has not yet understood.",
                practice: "Ask God: &ldquo;Is there a way you are calling me to embody your truth rather than merely speak it? Is there an act of costly obedience or visible countercultural faithfulness that my life is being summoned toward?&rdquo;",
              },
              {
                num: "03",
                color: PURPLE,
                title: "The Shame of Misplaced Hope",
                summary: "What you trust in ultimately shapes your honor or shame.",
                body1: "Isaiah 20:5 says those who trusted Egypt will be &ldquo;dismayed and ashamed.&rdquo; The Psalms consistently contrast the fate of those who trust God with those who trust other things: &ldquo;Those who hope in me will not be disappointed&rdquo; (Isaiah 49:23). &ldquo;No one who waits for you shall be put to shame&rdquo; (Psalm 25:3). The direction of trust determines the direction of shame or honor.",
                body2: "There is a particular kind of devastation that comes when the thing you were counting on publicly fails you. Judah had been watching Egypt with hope, perhaps boasting of the coming alliance. When Egypt fell, that public hope became public shame. The thing they had been pointing to as their security exposed them as having trusted in sand.",
                body3: "This is not a peripheral concern. The New Testament connects this theme directly to faith in Christ: &ldquo;Whoever believes in him will not be put to shame&rdquo; (Romans 10:11, quoting Isaiah 28:16). The logic of Isaiah 20 runs all the way to the cross: misplaced trust produces shame; trust in God produces the opposite. Which makes the question of where we place our ultimate trust not merely existential but eschatological.",
                practice: "Consider: where have you been ashamed because something you trusted in failed you? Bring that memory to God. Ask him to show you whether that experience is pointing you toward a deeper, unashamed trust in him alone.",
              },
              {
                num: "04",
                color: GREEN,
                title: "The Open Question and the Implicit Answer",
                summary: "&ldquo;How shall we escape?&rdquo; is the question every crisis creates.",
                body1: "Isaiah 20 ends without an answer. The coastland peoples ask, &ldquo;And we, how shall we escape?&rdquo; and the chapter closes. But the silence is pregnant &mdash; because the whole book of Isaiah is building toward an answer. The answer is &ldquo;the Holy One of Israel.&rdquo; The God who predicted Egypt&rsquo;s fall, who directed Assyria&rsquo;s movements, who commanded Isaiah&rsquo;s three-year walk &mdash; this God is the only escape that is not itself a trap.",
                body2: "The pattern of Isaiah 20 repeats in every human life. We build our security on something. That something proves insufficient when the real crisis comes. We are left asking, &ldquo;How shall we escape?&rdquo; And the question, if we let it do its work, can become the best question we ever asked &mdash; because it drives us out of our false refuges and into the only genuine one.",
                body3: "The New Testament presses this further: Jesus himself is the answer to the question Isaiah 20 raises. &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28) is Jesus claiming to be what Egypt could never be &mdash; an unfailing refuge, a secure alliance, a strength that will not crumble under Assyrian pressure or any other kind. To trust in Jesus is to trust in one who has already passed through the nakedness and shame of the cross and come out the other side in indestructible life.",
                practice: "Meditate on Isaiah 40:28&ndash;31 alongside Isaiah 20. Let the contrast do its work: one end is dismay and shame; the other end is renewed strength, soaring on wings like eagles. The difference is entirely in what &mdash; in whom &mdash; you are waiting for.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 900, color: item.color }}>{item.num}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.summary }} style={{ color: item.color, fontSize: 14, fontWeight: 600, fontStyle: "italic", marginBottom: 16 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body1 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body2 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body3 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }} />
                <div style={{ background: `${item.color}0a`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", marginBottom: 6 }}>PRACTICE</div>
                  <p dangerouslySetInnerHTML={{ __html: item.practice }} style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} />
                </div>
              </div>
            ))}

            {/* Closing reflection */}
            <div style={{ background: `${TEAL}0c`, border: `1px solid ${TEAL}28`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>CLOSING REFLECTION</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 14 }}>Isaiah 20 in Six Words</h3>
              <p dangerouslySetInnerHTML={{ __html: "The message of Isaiah 20 could be distilled into six words: <strong style=\"color:" + TEAL + "\">Do not trust what cannot save.</strong> Egypt could not save Ashdod. Egypt could not save the Philistines. Egypt could not save itself. And no earthly power, however magnificent, however reliable-seeming, however strategically positioned, can do for us what only God can do." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }} />
              <p dangerouslySetInnerHTML={{ __html: "The miracle of Isaiah&rsquo;s three-year walk is that he obeyed God before the prophecy was fulfilled &mdash; before Egypt actually fell, before the captives were marched away, before the coastland nations were dismayed. He trusted God&rsquo;s word enough to stake his reputation and his dignity on it for three years. That is the walk of faith: acting on what God has said before the visible world catches up with the invisible reality. Isaiah 20 invites us into that same walk." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} />
            </div>
          </div>
        )}

        {/* ===== VIDEO SECTION (always visible below tabs) ===== */}
        <div style={{ marginTop: 48, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 6 }}>Teaching Videos</h2>
          <p dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 20, prophetic sign-acts, and Isaiah&rsquo;s warnings against trusting Egypt &mdash; for deeper study and discussion." }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 28 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.4 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
