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

const videoItems = [
  { id: "eP3rZxQvA7f", title: "Isaiah 44 - God the Only Redeemer and the Folly of Idols" },
  { id: "fQ8tNySwK2g", title: "I Am the First and the Last - Isaiah 44 Study" },
  { id: "gR1bCfMwS6j", title: "Isaiah 44 Verse by Verse - Return to the LORD" },
  { id: "hS5cWvLpT9n", title: "The Idol Maker Exposed - Isaiah 44 Bible Study" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const keyThemes = [
  {
    color: TEAL,
    title: "The Spirit Poured Out on Descendants",
    body: "God promises to pour out his Spirit on Israel&apos;s offspring like water on thirsty ground (v.3). This anticipates Joel 2 and Pentecost. Spiritual renewal comes from God&apos;s initiative, not human striving. The imagery of water on parched land is vivid: the Spirit does not trickle but floods. It falls on the offspring and descendants &mdash; the renewal is not just personal but generational, communal, and prolific. Willows beside flowing streams will spring up &mdash; growth that is lush, visible, and unmistakable.",
  },
  {
    color: PURPLE,
    title: "God&apos;s Unique Monotheistic Claim",
    body: "I am the first and I am the last; apart from me there is no God (v.6). This is not mere tribal preference but ontological claim: only one being has existed from eternity, governs all history, and can be trusted with the future. All other claimants are pretenders. The challenge that follows &mdash; who then is like me? Let him proclaim it &mdash; is a legal deposition demand. God invites any rival deity to step forward and match his predictive power. The silence of every idol is itself the verdict. There are no defendants because there are no other gods.",
  },
  {
    color: ROSE,
    title: "The Devastating Satire on Idolatry",
    body: "The idol-maker passage (vv.9-20) is among the most withering critiques of false religion in Scripture. The irony is sharp: the same tree that warms the man&apos;s body and cooks his food becomes the &quot;god&quot; he bows to. He feeds on ashes; a deluded mind has led him astray (v.20). Paul quotes this tradition in Romans 1. The satire works by following the wood through its uses &mdash; fuel for fire, fuel for cooking, material for an idol &mdash; and letting the absurdity emerge from the simple narration. The critique is not angry; it is almost sad. This is what human beings do when they forget who they are.",
  },
  {
    color: GOLD,
    title: "The Deluded Mind",
    body: "Verse 20 introduces the tragic diagnosis: A deluded mind has led him astray; he cannot deliver himself or say, &quot;Is not this thing in my right hand a lie?&quot; Sin&apos;s deepest effect is not merely moral failure but epistemological corruption &mdash; the inability to see clearly. The idolater cannot see that what he holds is a lie. This is why Scripture must renew the mind (Romans 12:2) rather than merely reform the will. The idol problem is not first a moral problem &mdash; it is a perceptual one. The eye must be healed before the hand will let go.",
  },
  {
    color: GREEN,
    title: "Redemption and the Blotting Out of Sins",
    body: "I have swept away your offenses like a cloud, your sins like the morning mist. Return to me, for I have redeemed you (v.22). This is the gospel in miniature: God acts first in redemption; our response is to return to him. The sequence matters enormously. God does not say: return to me and then I will redeem you. He says: I have redeemed you &mdash; therefore return. Redemption precedes and enables repentance. The cloud swept away and the mist dissolved are images of thoroughness: nothing lingers, nothing is merely hidden. The forgiveness is as complete as the disappearance of morning fog in the sun.",
  },
];

const verseItems = [
  {
    ref: "vv.1-5",
    color: TEAL,
    title: "Do Not Be Afraid, I Have Chosen You",
    body: "But now hear, Jacob my servant; I have chosen you; do not be afraid; I will pour out my Spirit on your offspring; one will say &quot;I belong to the LORD&quot;; another will call himself by the name of Jacob. The opening But now signals a turning &mdash; from whatever fear or despair preceded this word, God speaks with tender reassurance. Three grounds for security are given: God has chosen Israel, God will not abandon Israel, and God will pour out the Spirit in abundance. The triple phrase &quot;I have chosen you, I have formed you, you are my servant&quot; parallels the Servant Song of chapter 42 &mdash; the corporate calling of Israel is grounded in the same divine initiative as the individual Servant&apos;s calling.",
  },
  {
    ref: "vv.6-8",
    color: PURPLE,
    title: "I Am the First and I Am the Last",
    body: "I am the first and I am the last; apart from me there is no God; who then is like me? Let him proclaim it; do not tremble, do not be afraid; did I not proclaim this and foretell it long ago? You are my witnesses. This is one of the strongest monotheistic declarations in the entire Bible. The phrase I am the first and the last recurs in Revelation 1:17 and 22:13 as a title of the risen Jesus &mdash; the New Testament&apos;s most explicit identification of Jesus with the God of Isaiah. The evidentiary argument is also made here: God&apos;s witnesses are Israel itself, the people who have heard the predictions and seen the fulfillments. They are the proof of record.",
  },
  {
    ref: "vv.9-11",
    color: ROSE,
    title: "Those Who Make Idols Are Nothing",
    body: "All who make idols are nothing; the things they treasure are worthless; their witnesses see nothing and know nothing; who shapes a god and casts an idol which can profit nothing? The satire begins with a broad indictment before zooming in to the specific absurdity of the craftsman. The idol&apos;s makers are nothing; the idol&apos;s witnesses know nothing; the idol itself profits nothing. Three layers of nothingness surround the thing worshipped. This is not contemptuous rhetoric for its own sake &mdash; it is the logical outcome of any object that does not have within itself the power of being. Only the living God, who is self-existent and the source of all existence, can be worshipped without embarrassment.",
  },
  {
    ref: "vv.12-17",
    color: GOLD,
    title: "He Warms Himself and Worships the Rest",
    body: "The blacksmith takes a tool and works with it; the carpenter measures with a line; he cuts down cedars; he takes cypress and oak; half of it he burns in the fire; over it he cooks his meal; he roasts his meat and is satisfied; he also warms himself; from the rest he makes a god, his idol; he bows down to it and says &quot;Save me; you are my god.&quot; The narrative slows here to match the craftsman&apos;s own careful, deliberate process. Each step is described with almost tedious detail &mdash; because the tedium is the point. This is all that idolatry is: a man doing ordinary things with wood, and then, with no further ceremony or miracle, deciding that the remaining wood is God. The idol is not even mysterious; it is the leftover from a practical task.",
  },
  {
    ref: "vv.18-20",
    color: ROSE,
    title: "A Deluded Mind Has Led Him Astray",
    body: "They know nothing, they understand nothing; their eyes are plastered over so they cannot see; no one stops to think; a deluded mind has led him astray; he cannot save himself or say &quot;Is not this thing in my right hand a lie?&quot; The diagnosis deepens. The problem is not simply foolishness but incapacity: eyes plastered shut, the inability to think, a mind that has been deceived at its source. The man cannot even form the liberating question: is this a lie? Idolatry is not just an intellectual error &mdash; it is a spiritual bondage that the mind alone cannot break. This is why redemption must come from outside the system. The deluded mind cannot cure its own delusion.",
  },
  {
    ref: "vv.21-23",
    color: GREEN,
    title: "Return to Me, for I Have Redeemed You",
    body: "Remember these things, Jacob; I have made you; you are my servant; I will not forget you; I have swept away your offenses like a cloud; return to me for I have redeemed you; Sing for joy you heavens; burst into song you mountains. After the long, dark satire on idolatry, the chapter pivots suddenly to mercy. The same LORD who exposed the absurdity of idolatry now sweeps away offenses like a cloud. The imperative to return follows the indicative of redemption: because God has already acted in redemption, the call to return is not a demand but an invitation. And the entire creation is called to erupt in song. The forgiveness of Israel is cosmic news.",
  },
  {
    ref: "vv.24-28",
    color: ACCENT,
    title: "Cyrus My Shepherd",
    body: "I am the LORD your Maker; who carries out the words of his servants; who says of Jerusalem &quot;It shall be inhabited&quot;; who says of Cyrus &quot;He is my shepherd and will accomplish all that I please&quot;; he will say of Jerusalem &quot;Let it be rebuilt&quot; and of the temple &quot;Let its foundations be laid.&quot; The chapter ends with one of the most remarkable predictive statements in all of Scripture. Cyrus, the Persian king who would not come to power for roughly 150 years, is named by name as God&apos;s instrument to rebuild Jerusalem and the temple. This is not allegory &mdash; the historical Cyrus of Persia did exactly this (Ezra 1:1-4). The God who names a pagan king a century and a half before his birth is the same God who governs the seemingly random events of your own life.",
  },
];

const applicationPoints = [
  {
    color: ROSE,
    head: "Identify Your Own Modern Idols",
    body: "The idol-maker passage is not a museum piece. What do you warm yourself with that you also bow down to? Comfort, approval, success, security, a relationship, a career &mdash; any good thing can become an idol when it is treated as the source of what only God can give. The diagnostic question of verse 20 is worth sitting with: &quot;Is not this thing in my right hand a lie?&quot; What are you holding that cannot actually save you?",
  },
  {
    color: TEAL,
    head: "Receive the Spirit Poured Out on Your Household",
    body: "God&apos;s promise to pour out his Spirit like water on thirsty ground is not only for Israel &mdash; it is the promise fulfilled at Pentecost and available now. Pray and live faithfully, trusting that the Spirit&apos;s outpouring on your household and your offspring is God&apos;s initiative, not yours to manufacture. Water your household with prayer, Scripture, and worship, and trust the Spirit to produce growth.",
  },
  {
    color: GREEN,
    head: "Return to the LORD Who Has Already Redeemed You",
    body: "The sequence of verse 22 is gospel: I have redeemed you &mdash; now return. If you have drifted, the call back is not to earn your way home but to come home to a Father who has already swept away your sins like a morning cloud. The mist is gone before you even turn around. Return is not performance &mdash; it is acceptance of what God has already done.",
  },
  {
    color: PURPLE,
    head: "Trust the God Who Names Rulers Before They Are Born",
    body: "Cyrus is named by God roughly 150 years before he acts. If God governs the geopolitical architecture of human history with that level of precision and foresight, he also governs the seemingly random events of your own life. The same LORD who said of Cyrus &quot;He is my shepherd&quot; speaks over the events that feel accidental, chaotic, or senseless in your story. There is no event outside his foreknowledge or beyond his capacity to redeem.",
  },
  {
    color: GOLD,
    head: "Resist the Deluded Mind Through Daily Scripture",
    body: "The idol-worshipper&apos;s tragedy is a mind that cannot see clearly &mdash; eyes plastered shut, unable even to ask whether the thing held is a lie. The antidote is the renewing of the mind through Scripture daily (Romans 12:2). This is not optional spiritual hygiene; it is the corrective lens without which we will mistake the leftover wood for God. Read slowly, ask hard questions, let the text expose what the deluded mind would prefer to leave unexamined.",
  },
];

export default function Isaiah44GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}20`,
              border: `1px solid ${PURPLE}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: PURPLE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Major Prophet &middot; Old Testament
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            Isaiah 44 &mdash; God the Only Redeemer
          </h1>
          <p
            style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 660 }}
            dangerouslySetInnerHTML={{
              __html:
                "A chapter of magnificent contrasts: the living God who redeems his servant Israel versus the pathetic futility of idol worship. God declares I am the first and the last, exposes the absurdity of idolatry with devastating satire, and announces redemption &mdash; sweeping away sin like a morning cloud.",
            }}
          />
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {[
            ["Book", "Isaiah"],
            ["Chapter", "44"],
            ["Verses", "28"],
            ["Section", "Isaiah 40-55"],
            ["Key Claim", "Apart from me there is no God"],
            ["NT Echo", "Romans 1, Revelation 1:17"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                {k}
              </div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
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
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}20` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>
                Overview
              </h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 44 is a chapter of magnificent contrasts: the living God who redeems his servant Israel versus the pathetic futility of idol worship. God opens with tender reassurance &mdash; I have chosen you, Do not be afraid, I will pour out my Spirit on your offspring. Then he declares the great monotheistic challenge: I am the first and I am the last; apart from me there is no God (v.6). He challenges any other god to predict the future.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Then follows one of the Bible&apos;s most cutting satires on idolatry (vv.9-20): a man cuts down a tree, uses half for firewood to warm himself and cook his meal, and with the other half carves a god and bows down to it, saying &quot;Save me; you are my god.&quot; The chapter ends with a joyful declaration of redemption and the surprising naming of Cyrus as God&apos;s instrument to rebuild Jerusalem.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The theological movement of the chapter is from identity (who God is) to contrast (what idols are not) to redemption (what God has done and will do). It is one of the most logically structured chapters in Isaiah, moving through reassurance, monotheistic declaration, anti-idolatry satire, redemption proclamation, and prophetic naming of Cyrus.",
                }}
              />
            </div>

            {/* Three movements */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
              {[
                {
                  ref: "vv.1-8",
                  color: PURPLE,
                  label: "God&apos;s Reassurance",
                  desc: "God calls Israel my servant, my chosen, and promises the outpouring of the Spirit. He declares himself the first and the last &mdash; apart from him there is no God. Israel is his witness.",
                },
                {
                  ref: "vv.9-20",
                  color: ROSE,
                  label: "Satire on Idols",
                  desc: "The most devastating critique of idolatry in Scripture. The same tree warms and feeds the craftsman &mdash; and the leftover becomes his god. A deluded mind cannot see the lie it holds.",
                },
                {
                  ref: "vv.21-28",
                  color: GREEN,
                  label: "Redemption and Cyrus",
                  desc: "God sweeps away sin like a cloud and calls Israel to return. He names Cyrus &mdash; a pagan king yet to be born &mdash; as his shepherd who will rebuild Jerusalem and the temple.",
                },
              ].map((s) => (
                <div
                  key={s.ref}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: `${s.color}20`,
                      border: `1px solid ${s.color}40`,
                      borderRadius: 8,
                      padding: "3px 10px",
                      fontSize: 11,
                      color: s.color,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {s.ref}
                  </div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 8 }}
                    dangerouslySetInnerHTML={{ __html: s.label }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: s.desc }}
                  />
                </div>
              ))}
            </div>

            {/* Key verse callout */}
            <div
              style={{
                background: `${PURPLE}12`,
                border: `1px solid ${PURPLE}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Key Verse &mdash; Isaiah 44:6
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  margin: "0 0 10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;This is what the LORD says &mdash; Israel&apos;s King and Redeemer, the LORD Almighty: I am the first and I am the last; apart from me there is no God.&quot;",
                }}
              />
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700 }}>Isaiah 44:6 (NIV)</div>
            </div>

            {/* Redemption verse callout */}
            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Key Verse &mdash; Isaiah 44:22
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  margin: "0 0 10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&quot;I have swept away your offenses like a cloud, your sins like the morning mist. Return to me, for I have redeemed you.&quot;",
                }}
              />
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>Isaiah 44:22 (NIV)</div>
            </div>

            {/* Videos */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>
                Teaching Videos
              </h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Sermons and studies on Isaiah 44 &mdash; the only Redeemer, the folly of idols, and the surprising grace of God.",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 15, margin: 0 }}>
                        {v.title}
                      </h4>
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
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Key Themes in Isaiah 44
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Five major theological threads run through Isaiah 44 &mdash; from the outpouring of the Spirit to the devastating satire on idolatry to the gospel in miniature that closes the chapter.",
                }}
              />
            </div>

            {keyThemes.map((t) => (
              <div
                key={t.title}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === t.title ? t.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
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
                    style={{ color: t.color, fontWeight: 700, fontSize: 15 }}
                    dangerouslySetInnerHTML={{ __html: t.title }}
                  />
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openTheme === t.title ? "-" : "+"}
                  </span>
                </button>
                {openTheme === t.title && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: t.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Idolatry note */}
            <div
              style={{
                background: `${ROSE}12`,
                border: `1px solid ${ROSE}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: ROSE,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Theological Note: Paul and the Idol Satire
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Paul&apos;s argument in Romans 1:18-23 draws directly on the Isaiah 44 tradition. Professing to be wise they became fools, and exchanged the glory of the immortal God for images... (Romans 1:22-23). For Paul, idolatry is not a primitive mistake left behind by sophisticated modernity &mdash; it is the perennial shape of human rebellion against the Creator. Every generation exchanges the truth about God for a lie. The particular form of the exchange changes; the underlying logic does not.",
                }}
              />
            </div>

            {/* Monotheism note */}
            <div
              style={{
                background: `${PURPLE}12`,
                border: `1px solid ${PURPLE}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 14,
              }}
            >
              <div
                style={{
                  color: PURPLE,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Theological Note: I Am the First and the Last
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The title I am the first and I am the last appears in Isaiah 44:6, 41:4, and 48:12. In Revelation 1:17, 2:8, and 22:13, the risen Jesus takes this title as his own: &quot;I am the First and the Last.&quot; This is one of the most direct and explicit ways the New Testament authors assert the full deity of Jesus &mdash; by applying to him the name that in Isaiah belongs unambiguously and exclusively to the LORD God of Israel.",
                }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Verse by Verse &mdash; All 28 Verses
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A section-by-section walk through all 28 verses of Isaiah 44, with commentary on the Hebrew background, NT connections, and the pastoral and theological implications of each passage.",
                }}
              />
            </div>

            {verseItems.map((v) => (
              <div
                key={v.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === v.ref ? v.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === v.ref ? null : v.ref)}
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
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      style={{
                        background: `${v.color}20`,
                        border: `1px solid ${v.color}40`,
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 11,
                        color: v.color,
                        fontWeight: 700,
                      }}
                    >
                      {v.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openVerse === v.ref ? "-" : "+"}
                  </span>
                </button>
                {openVerse === v.ref && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Structural note */}
            <div
              style={{
                background: `${GOLD}12`,
                border: `1px solid ${GOLD}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Structure of the Chapter
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 44 is structured as a diptych with a long central satire. The opening panel (vv.1-8) establishes God&apos;s identity and Israel&apos;s election. The central satire (vv.9-20) exposes the absurdity of idolatry through careful narrative. The closing panel (vv.21-28) returns to election language &mdash; remember, I have not forgotten you &mdash; and adds redemption, cosmic praise, and the astonishing prophetic naming of Cyrus. The contrast between the chapter&apos;s opening comfort and its central satire is deliberate: only the God who is truly first and last can speak this way about every other claimant to his throne.",
                }}
              />
            </div>

            {/* Cyrus note */}
            <div
              style={{
                background: `${ACCENT}12`,
                border: `1px solid ${ACCENT}40`,
                borderRadius: 14,
                padding: "22px 26px",
                marginTop: 14,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                Historical Note: Cyrus the Great
              </div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Cyrus II of Persia conquered Babylon in 539 BC and issued the famous Cyrus Cylinder, which permitted deported peoples to return to their homelands and rebuild their temples. The Bible records his decree in Ezra 1:1-4: &quot;The LORD, the God of heaven, has given me all the kingdoms of the earth and he has appointed me to build a temple for him at Jerusalem in Judah.&quot; Isaiah names him by name approximately 150 years before his birth &mdash; one of the most specific predictive prophecies in all of Scripture and a cornerstone of the argument for Isaiah&apos;s divine inspiration.",
                }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
                Application
              </h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 44 is not an ancient text about ancient people worshipping ancient statues. It is a mirror held up to every human heart, in every generation, that shows us the universal tendency to exchange the Creator for the created &mdash; and the radical grace of the God who redeems us anyway.",
                }}
              />
            </div>

            {applicationPoints.map((a) => (
              <div
                key={a.head}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === a.head ? a.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === a.head ? null : a.head)}
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
                    style={{ color: a.color, fontWeight: 700, fontSize: 15 }}
                    dangerouslySetInnerHTML={{ __html: a.head }}
                  />
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 400 }}>
                    {openApp === a.head ? "-" : "+"}
                  </span>
                </button>
                {openApp === a.head && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: a.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Reflection questions */}
            <div
              style={{
                background: `${ACCENT}12`,
                border: `1px solid ${ACCENT}40`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                Reflection Questions
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "The idol-maker warms himself with half the wood and worships the other half. What good things in your life might be functioning as both legitimate comfort and illegitimate god?",
                  "God says I have swept away your offenses like a cloud &mdash; and then says return to me. What would returning look like for you today, in the specific area where you have drifted?",
                  "If God can name a pagan king 150 years before his birth and use him as his instrument, what does that suggest about the seemingly random or chaotic events in your own story?",
                  "The deluded mind cannot ask &quot;Is not this thing in my right hand a lie?&quot; What practices keep your mind clear enough to ask that question about the things you hold most tightly?",
                  "God promises to pour out his Spirit like water on thirsty ground on your offspring and descendants. How does this promise shape the way you pray for your family and those who come after you?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span
                      style={{
                        color: ACCENT,
                        fontWeight: 800,
                        fontSize: 15,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer */}
            <div
              style={{
                background: `${PURPLE}12`,
                border: `1px solid ${PURPLE}40`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  color: PURPLE,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 14,
                }}
              >
                A Prayer from Isaiah 44
              </div>
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.85,
                  margin: "0 0 10px",
                  fontStyle: "italic",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "LORD, you are the first and you are the last. Apart from you there is no God. Expose in me whatever I have held with warmth and then bowed to &mdash; the comfort that became a rival, the good thing that became a false savior. I cannot see my own delusion from within it. Open my eyes. Sweep away my offenses like a cloud, my sins like the morning mist. I return to you &mdash; not because I have earned my way back, but because you have already redeemed me. Pour out your Spirit on my household, my children, my children&apos;s children, like water on thirsty ground. You are the LORD who says of Jerusalem: it shall be inhabited. Say it over the dry places in my life. Let foundations be laid. Amen.",
                }}
              />
            </div>

            {/* Idol inventory */}
            <div
              style={{
                background: `${ROSE}12`,
                border: `1px solid ${ROSE}40`,
                borderRadius: 14,
                padding: "24px 28px",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  color: ROSE,
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 14,
                }}
              >
                A Modern Idol Inventory
              </div>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The idol of Isaiah 44 is made of wood. Modern idols are made of approval, security, pleasure, power, and productivity. They are not carved &mdash; they are curated. But the diagnostic logic is the same: what do you look to for salvation that cannot actually save you? The following categories, drawn from John Calvin&apos;s observation that the human heart is a perpetual idol factory, may be useful for prayerful self-examination.",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  ["Approval", "Treating the opinion of others as the measure of your worth and safety"],
                  ["Comfort", "Arranging your life to avoid all discomfort, taking few risks for God"],
                  ["Control", "Requiring certainty and predictability before you can have peace"],
                  ["Power", "Needing to be significant, impressive, or in charge to feel secure"],
                  ["Pleasure", "Treating the experience of enjoyment as the purpose of existence"],
                  ["Achievement", "Making your performance the basis of your identity before God and others"],
                ].map(([label, desc]) => (
                  <div
                    key={label}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: "14px 16px",
                    }}
                  >
                    <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                      {label}
                    </div>
                    <p
                      style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: desc }}
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
