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
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "qA7bKoUdX2t", title: "Isaiah 45 - I Am the LORD and There Is No Other" },
  { id: "rB2cLpVeY6u", title: "Every Knee Shall Bow - Isaiah 45 Study" },
  { id: "sC5dMqWfZ9v", title: "Isaiah 45 Explained - Cyrus and God Sovereign Over History" },
  { id: "tD8eNrXgA3w", title: "Isaiah 45 Verse by Verse - The Potter and the Clay" },
];

const keyThemes = [
  {
    id: "t1",
    color: GOLD,
    title: "Cyrus: The Surprising Instrument",
    body: "God names a pagan king as his &ldquo;anointed&rdquo; (messiah/christ &mdash; same Hebrew word). This destroys any notion that God can only work through the religious. His sovereignty uses unlikely, even unwitting, instruments to accomplish his purposes. Cyrus did not know the LORD, yet the LORD used him to liberate Israel from Babylon and fund the rebuilding of Jerusalem. God&apos;s reach exceeds the boundaries of formal religion.",
  },
  {
    id: "t2",
    color: PURPLE,
    title: "\"I Am the LORD and There Is No Other\"",
    body: "Isaiah 45 contains the most concentrated monotheistic assertions in the Old Testament. Verses 5, 6, 18, 21, and 22 all repeat variations of &ldquo;I am the LORD, and there is no other.&rdquo; This is foundational theology for both Judaism and Christianity. The repetition is not rhetorical excess &mdash; it is a theological drumbeat designed to silence every competing claim. No idol, no nation, no cosmic force can rival the LORD. He alone is God.",
  },
  {
    id: "t3",
    color: ROSE,
    title: "The Creator of Light and Darkness",
    body: "\"I form the light and create darkness, I bring prosperity and create disaster; I, the LORD, do all these things\" (v.7). God&apos;s sovereignty is not partial &mdash; he governs not only the good but also the hard. This challenges any theology that limits God&apos;s control to comfortable outcomes. The verse does not mean God is the author of moral evil, but that no event &mdash; even painful ones &mdash; falls outside his governance and purposeful ordering.",
  },
  {
    id: "t4",
    color: TEAL,
    title: "The Potter and the Clay",
    body: "\"Does the clay say to the potter, &apos;What are you making?&apos;\" (v.9). The creature questioning the Creator&apos;s choices is the height of presumption. This passage is cited by Paul in Romans 9 as the foundation for God&apos;s sovereign freedom in election and mercy. It calls for humble submission to God&apos;s sovereign plans even when they are not understood. The clay does not have a vantage point from which to judge the potter&apos;s wisdom.",
  },
  {
    id: "t5",
    color: GREEN,
    title: "Universal Salvation Offered to All Nations",
    body: "\"Turn to me and be saved, all you ends of the earth\" (v.22). The salvation declared in Isaiah is not tribal or exclusive &mdash; it is an open invitation to every nation and every person. Paul quotes verse 23 in Philippians 2:10-11 as fulfilled in the universal lordship of Christ: at the name of Jesus every knee will bow. The God who declares there is no other is also the God who says turn to me &mdash; his uniqueness is not aloofness but invitation.",
  },
];

const verseItems = [
  {
    id: "v1",
    ref: "vv.1-3",
    color: GOLD,
    title: "The Anointing of Cyrus",
    body: "Thus says the LORD to his anointed, to Cyrus, whose right hand I take hold of; I will go before you and level the mountains; I will give you the treasures of darkness; so that you may know that I am the LORD, who summons you by name. The word &ldquo;anointed&rdquo; (mashiach &mdash; messiah) applied to a pagan king is one of the most startling moments in all of prophecy. God takes hold of Cyrus&apos;s right hand &mdash; a gesture of covenant partnership &mdash; even though Cyrus is unaware of who is guiding him. The treasures of darkness are the hidden riches of Babylon that will fund the return of the exiles and the rebuilding of the temple.",
  },
  {
    id: "v2",
    ref: "vv.4-7",
    color: PURPLE,
    title: "For the Sake of Israel &mdash; I Am the LORD",
    body: "For the sake of Jacob my servant and Israel my chosen, I summon you by name; I am the LORD and there is no other; apart from me there is no God; I will strengthen you though you have not acknowledged me; so that from the rising of the sun to its setting they may know there is none besides me; I form the light and create darkness, I bring prosperity and create disaster; I the LORD do all these things. The purpose clause is crucial: God uses Cyrus not for Cyrus&apos;s benefit primarily but for Israel&apos;s sake &mdash; and for the sake of his own universal recognition. The great monotheistic declaration flows directly out of the act of using an unlikely instrument.",
  },
  {
    id: "v3",
    ref: "v.8",
    color: GREEN,
    title: "Righteousness Raining Down",
    body: "You heavens above, rain down my righteousness; let the clouds shower it down; let the earth open wide; let salvation spring up, let righteousness flourish. This lyrical verse is a bridge between the announcement of Cyrus and the rebuke of complainers. It calls creation itself &mdash; heavens and earth &mdash; to participate in the coming salvation. Righteousness and salvation are paired as divine gifts descending from above and sprouting from below simultaneously. The whole cosmos is enlisted in God&apos;s redemptive purpose.",
  },
  {
    id: "v4",
    ref: "vv.9-13",
    color: ROSE,
    title: "The Potter and the Clay",
    body: "Woe to those who quarrel with their Maker; does the clay say to the potter what are you making? Does your work say the potter has no hands? It is I who made the earth and created mankind on it; I will raise up Cyrus in my righteousness; he will rebuild my city and set my exiles free. The woe oracle addresses those in Israel who were grumbling about God&apos;s choice to use Cyrus. Their complaint is the perennial human error: judging God&apos;s methods from the limited vantage point of the creature. The potter imagery will reappear in Jeremiah 18 and Romans 9 as the definitive answer to the question of divine sovereignty.",
  },
  {
    id: "v5",
    ref: "vv.14-17",
    color: TEAL,
    title: "Surely God Is With You",
    body: "The products of Egypt and the merchandise of Cush will come to you; they will bow down before you; surely God is with you, and there is no other; truly you are a God who has been hiding himself, O God and Savior of Israel; but Israel will be saved by the LORD with an everlasting salvation. The confession &ldquo;truly you are a God who has been hiding himself&rdquo; is remarkable &mdash; it acknowledges God&apos;s hiddenness without doubting his existence or care. The everlasting salvation at the end is a forward-looking declaration: what Cyrus accomplishes historically is a shadow of the everlasting deliverance God will ultimately accomplish.",
  },
  {
    id: "v6",
    ref: "vv.18-21",
    color: ACCENT,
    title: "I Did Not Speak in Secret",
    body: "For this is what the LORD says &mdash; he who created the heavens, he is God; he who fashioned and made the earth; he did not create it to be empty but formed it to be inhabited; I am the LORD and there is no other; I have not spoken in secret; there is no God apart from me; a righteous God and a Savior; there is none but me. God contrasts himself with the idols: unlike the mystery religions and their secret oracles, God has spoken openly, publicly, and consistently. He is both righteous (just, morally pure) and Savior &mdash; the combination is the theological heart of the atonement. How can a righteous God save sinners? Isaiah poses the question that the cross answers.",
  },
  {
    id: "v7",
    ref: "vv.22-25",
    color: GREEN,
    title: "Turn to Me and Be Saved",
    body: "Turn to me and be saved, all you ends of the earth; for I am God, and there is no other; before me every knee will bow; by me every tongue will swear; they will say of me &ldquo;In the LORD alone are deliverance and strength.&rdquo; The universal invitation and the universal lordship are inseparable: because there is no other God, the invitation must go to the ends of the earth, and eventually every knee will bow. Paul quotes verse 23 in Romans 14:11 (every knee shall bow before God) and in Philippians 2:10-11 (every knee shall bow at the name of Jesus) &mdash; explicitly transferring the divine lordship of Isaiah 45 to Jesus Christ.",
  },
];

const applicationItems = [
  { id: "a1", color: GOLD, text: "Trust God to use unlikely instruments in your life &mdash; the person you least expect may be the channel through which God&apos;s provision comes." },
  { id: "a2", color: ROSE, text: "Resist quarreling with God&apos;s sovereign choices you do not understand; the clay does not have the vantage point to judge the potter." },
  { id: "a3", color: PURPLE, text: "Declare the monotheistic truth &mdash; &ldquo;there is no other&rdquo; &mdash; when tempted by lesser allegiances, whether to power, security, approval, or comfort." },
  { id: "a4", color: GREEN, text: "Turn to God personally as the God who saves to the ends of the earth &mdash; the same universality that makes the invitation global makes it specific to you." },
  { id: "a5", color: TEAL, text: "Look for signs of God&apos;s hidden working in the unexpected events of your life; the God who was hidden in the Cyrus episode is the same God working in yours." },
  { id: "a6", color: ACCENT, text: "Yield as clay to the Potter&apos;s shaping; trust that the hands forming you are skilled, purposeful, and working toward an outcome you cannot yet see." },
];

export default function Isaiah45GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah 45 &mdash; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>
            I Am the LORD and There Is No Other
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 660 }}>
            The center chapter of Isaiah&apos;s great monotheistic proclamation: God names Cyrus before his birth, declares his absolute sovereignty over history, rebkes those who quarrel with the Potter, and opens the universal invitation &mdash; &ldquo;Turn to me and be saved, all you ends of the earth.&rdquo;
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            ["Verses", "25"],
            ["Context", "Isaiah 40-48"],
            ["Key Quote", "Isa 45:22-23"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Overview</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 45 is the center chapter of the great monotheistic proclamation that runs through Isaiah 40&ndash;48. God addresses Cyrus by name, calling him his anointed even though Cyrus does not know him &mdash; he will let the exiles go and rebuild Jerusalem. This astounding prediction &mdash; made approximately 150 years before Cyrus was born &mdash; demonstrates God&apos;s absolute sovereignty over world history. Cyrus the Great conquered Babylon in 539 BC and issued a decree permitting the exiled peoples to return to their homelands and rebuild their temples, precisely as Isaiah foretold." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter then pivots to the great declaration: &ldquo;I am the LORD, and there is no other; apart from me there is no God.&rdquo; God is the Creator of light and darkness, of prosperity and disaster. This is the most concentrated monotheism in the entire Old Testament &mdash; the word &ldquo;alone&rdquo; and &ldquo;no other&rdquo; ring through the chapter like a bell. No rival, no alternative, no competitor: the LORD stands alone as God." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The potter-and-clay image in verses 9&ndash;13 rebukes those in Israel who were grumbling about God&apos;s strange choice to use a pagan king as his instrument. Does the clay say to the potter, &lsquo;What are you making?&rsquo; The audacity of the creature questioning the Creator is exposed for what it is: presumption rooted in limited perspective." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter closes with one of the most magnificent universal invitations in all of Scripture: &ldquo;Turn to me and be saved, all you ends of the earth; for I am God, and there is no other. Before me every knee will bow; by me every tongue will swear.&rdquo; Paul quotes this twice in the New Testament &mdash; in Romans 14:11 and in Philippians 2:10&ndash;11 &mdash; applying the universal lordship of the LORD to the risen Jesus Christ." }}
              />
            </div>

            {/* Key verse callout */}
            <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Key Verse &mdash; Isaiah 45:22-23</div>
              <p
                style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, fontStyle: "italic", margin: "0 0 10px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Turn to me and be saved, all you ends of the earth; for I am God, and there is no other. Before me every knee will bow; by me every tongue will swear.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Quoted by Paul in Romans 14:11 and Philippians 2:10&ndash;11, where the universal lordship declared here is applied to the name of Jesus Christ." }}
              />
            </div>

            {/* Context cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {[
                { label: "Historical Background", color: TEAL, body: "Cyrus II of Persia (c. 600&ndash;530 BC) conquered the Babylonian Empire in 539 BC and issued the Cyrus Cylinder, one of the earliest declarations of religious tolerance, permitting exiled peoples to return home. Isaiah names him over a century before his birth, a claim that has made Isaiah 45 one of the most-discussed predictive prophecy passages in biblical scholarship." },
                { label: "New Testament Connections", color: PURPLE, body: "Isaiah 45:23 is quoted in Romans 14:11 and applied to the final judgment before God. In Philippians 2:10&ndash;11, Paul applies the same verse to Jesus &mdash; &ldquo;at the name of Jesus every knee should bow&rdquo; &mdash; one of the most explicit New Testament identifications of Jesus with the divine LORD of the Old Testament." },
              ].map(c => (
                <div key={c.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: c.color, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{c.label}</div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              ))}
            </div>

            {/* Videos section on overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 20px" }}>Teaching Videos</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "10px 12px" }}>
                      <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 45</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 45 contains some of the most theologically dense material in the entire Old Testament. Five major themes converge in this single chapter: the surprise of divine instrumentality, the uniqueness of the LORD, his sovereignty over all events, the humility required of creatures before their Creator, and the universal scope of salvation. Click each theme to expand." }}
              />
            </div>

            {keyThemes.map(theme => (
              <div
                key={theme.id}
                style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Monotheism highlight box */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: "20px 24px", marginTop: 20 }}>
              <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>The Five &ldquo;No Other&rdquo; Declarations</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "v.5", text: "I am the LORD, and there is no other; apart from me there is no God." },
                  { ref: "v.6", text: "There is none besides me. I am the LORD, and there is no other." },
                  { ref: "v.14", text: "Surely God is with you, and there is no other; there is no other God." },
                  { ref: "v.18", text: "I am the LORD and there is no other." },
                  { ref: "v.21-22", text: "There is no God apart from me, a righteous God and a Savior; there is none but me ... for I am God, and there is no other." },
                ].map(d => (
                  <div key={d.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${PURPLE}25`, color: PURPLE, fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "2px 8px", flexShrink: 0, marginTop: 2 }}>{d.ref}</span>
                    <p
                      style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}
                      dangerouslySetInnerHTML={{ __html: d.text }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse &mdash; Isaiah 45 (All 25 Verses)</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 45 runs 25 verses, moving from the commissioning of Cyrus (vv.1&ndash;7) through the potter-clay rebuke (vv.9&ndash;13), the confession of the nations (vv.14&ndash;17), the great monotheistic declarations (vv.18&ndash;21), and the universal invitation (vv.22&ndash;25). Click each section to expand the commentary." }}
              />
            </div>

            {verseItems.map(item => (
              <div
                key={item.id}
                style={{ background: CARD, border: `1px solid ${openVerse === item.id ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Structure summary */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Chapter Structure at a Glance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { range: "vv.1-7", label: "The Commissioning of Cyrus", col: GOLD },
                  { range: "v.8", label: "Lyrical Call for Righteousness to Fall", col: GREEN },
                  { range: "vv.9-13", label: "The Potter and the Clay &mdash; Rebuke of Complainers", col: ROSE },
                  { range: "vv.14-17", label: "The Nations Confess &mdash; Everlasting Salvation", col: TEAL },
                  { range: "vv.18-21", label: "The Great Monotheistic Declaration", col: PURPLE },
                  { range: "vv.22-25", label: "Universal Invitation &mdash; Every Knee Shall Bow", col: ACCENT },
                ].map(s => (
                  <div key={s.range} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${s.col}20`, color: s.col, fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "2px 8px", flexShrink: 0, minWidth: 52, textAlign: "center" }}>{s.range}</span>
                    <p
                      style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 45 is not merely historical or doctrinal &mdash; it is a chapter that calls for concrete response. The God who declares &ldquo;I am the LORD and there is no other&rdquo; is also the God who says &ldquo;turn to me and be saved.&rdquo; Theology and invitation are inseparable here. The following applications draw from each major movement of the chapter." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {applicationItems.map((a, i) => (
                <div key={a.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${a.color}20`, border: `1px solid ${a.color}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ color: a.color, fontSize: 12, fontWeight: 800 }}>{i + 1}</span>
                  </div>
                  <p
                    style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: a.text }}
                  />
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { q: "Where in your life are you &ldquo;quarreling with your Maker&rdquo; &mdash; resisting something God is doing because it does not fit your expectations of how he works?" },
                  { q: "Who is the &ldquo;Cyrus&rdquo; in your situation &mdash; an unlikely person or circumstance God might be using that you have been dismissing?" },
                  { q: "What lesser allegiance is competing with the God who says &ldquo;there is no other&rdquo;? Where are you looking for salvation in something other than him?" },
                  { q: "Have you personally &ldquo;turned to him&rdquo; in the way verse 22 invites? What would it mean to turn more fully today?" },
                  { q: "The chapter ends with every knee bowing and every tongue swearing. How does that future certainty change how you live in the present?" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 800, fontSize: 14, flexShrink: 0, marginTop: 1 }}>Q{i + 1}</span>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing prayer prompt */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Prayer Prompt</div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;LORD, you are the God and there is no other. I confess that I have quarreled with your methods and doubted your sovereignty. Today I choose to yield as clay to the Potter, to trust you with the instruments you choose, and to turn to you as the only Savior. Let me live as one who has heard the universal invitation and responded. Before you, I bow.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 12, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Based on Isaiah 45:5, 9, 22-23" }}
              />
            </div>

            {/* Videos at the bottom of application */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 20 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 20px" }}>Continue Learning &mdash; Teaching Videos</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{v.title}</p>
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
