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
  { id: "wG4hUiIjD7z", title: "Isaiah 47 - The Fall of Babylon Explained" },
  { id: "xH9iVjJkE2a", title: "Pride Goes Before the Fall - Isaiah 47 Study" },
  { id: "yI3jWkKlF6b", title: "Isaiah 47 Verse by Verse - God Judges Babylon" },
  { id: "zJ8kXlLmG1c", title: "Your Wisdom Cannot Save You - Isaiah 47 Bible Study" },
];

const keyThemes = [
  {
    id: "theme1",
    color: ROSE,
    title: "The Sudden Fall of the Proud",
    body: "Babylon sat as queen, declaring &#39;I will never be a widow&#39; (v.8). Yet in one day she loses children and widowhood comes. Pride that says &#39;I am and there is no other&#39; is the very sin for which God brings the proud low. The higher the throne, the harder the fall when God judges. Scripture consistently shows that self-exaltation sets a person &mdash; or a nation &mdash; up for the most complete reversal. Babylon&apos;s boast was not merely arrogant rhetoric; it was a theological claim. By saying &#39;I am, and there is none besides me,&#39; Babylon was using language that belongs to God alone. This is why the judgment is so total. The punishment fits the crime: those who claim divine status will learn their creaturely limits in the most devastating way possible. The sudden collapse of what seemed permanent is a recurring biblical pattern &mdash; one that invites every generation to examine what they have made indestructible in their own minds.",
  },
  {
    id: "theme2",
    color: GOLD,
    title: "Cruelty That Does Not Go Unpunished",
    body: "God used Babylon as his instrument of discipline against Israel &mdash; but Babylon exceeded its mandate. It showed no mercy, even to the elderly (v.6). God&apos;s instruments do not escape accountability for how they wield their power. Nations and individuals will answer for cruelty. This is a profound and uncomfortable truth: being used by God for a purpose does not grant immunity from moral accountability. Babylon was genuinely God&apos;s instrument of judgment, and yet Babylon itself would be judged for the manner in which it executed that role. The elderly &mdash; a particularly vulnerable group &mdash; received no mercy. There is a pattern here that recurs throughout Scripture and history: those entrusted with power over others are judged not only for what they did but for how they did it. Ruthlessness is never justified by the righteousness of a cause. The ends do not sanctify the means. God sees both the mission and the method.",
  },
  {
    id: "theme3",
    color: PURPLE,
    title: "Self-Deification: I Am and There Is No Other",
    body: "Babylon speaks the words that belong to God alone (cf. Isaiah 45:5&mdash;6, 18, 22). This is the ultimate human sin &mdash; claiming the place of God. Every form of self-sufficiency and self-exaltation participates in Babylon&apos;s spirit. The result is the same: sudden, complete ruin. The phrase &#39;I am, and there is none besides me&#39; is one of the most distinctive divine self-declarations in Isaiah. When God says it, it is the statement of the only one for whom it is true. When Babylon says it, it is the supreme act of idolatry &mdash; placing oneself in the position of the Absolute. This is not a sin unique to ancient empires. Every person who lives as though they are the center of the universe, every community that acts as if its own survival is the highest value, every nation that believes its power is unchallengeable is speaking, functionally, in Babylon&apos;s voice. The theological point is precise: there is only one being of whom it is true that there is none other, and it is not us.",
  },
  {
    id: "theme4",
    color: TEAL,
    title: "The Failure of Worldly Wisdom",
    body: "Babylon was renowned for its astrologers, sorcerers, and seers. God challenges: let them save you from what is coming. They cannot. The best of human wisdom, technology, and prediction is utterly powerless before divine judgment. Only the living God can save. This theme runs throughout the Old Testament prophets, but it is crystallized with particular sharpness in Isaiah 47. Babylon&apos;s wisdom was not small or primitive &mdash; it was the most sophisticated intellectual tradition of the ancient Near East. Babylon&apos;s astronomers had mapped the heavens. Its diviners had developed complex systems of interpretation. Its court magicians were the elite of the ancient world. And yet God says: let them stand up now, let them save you. The silence is devastating. There is wisdom that can tell you about the stars but cannot tell you about the God who made the stars. There is knowledge that can predict eclipses but cannot predict the movements of the God who judges nations. The chapter is not anti-intellectual; it is a call to locate wisdom properly &mdash; in the fear of the LORD, not in any human system.",
  },
  {
    id: "theme5",
    color: GREEN,
    title: "Stubble and Fire",
    body: "The chapter ends with the image of fire consuming stubble (v.14). There is no warmth, no comfort in that fire &mdash; only destruction. This is judgment&apos;s irreversibility. The enchanters who promised security deliver nothing but ashes. Only God&apos;s word endures. The fire imagery is not incidental. Throughout Isaiah, fire appears as both purifying and consuming &mdash; it burns away what is false and what is wicked. But for Babylon&apos;s wise men, there is no refining. They are stubble, and they simply burn up. What is particularly cutting is the parenthetical observation: &#39;it is not a fire to sit beside.&#39; Their destruction will not even provide warmth. Their wisdom did not save them, and their end does not benefit anyone else. This is the picture of knowledge and counsel divorced from the living God: ultimately impotent, leaving nothing of value in its wake. By contrast, the word of God &mdash; announced through the prophets, fulfilled in Christ &mdash; endures forever. The stubble burns; the word stands.",
  },
];

const verseItems = [
  {
    id: "vv1-3",
    label: "vv. 1-3",
    color: ROSE,
    summary: "Come down from your throne, Daughter Babylon",
    body: "God commands Daughter Babylon to come down from her throne and sit in the dust &mdash; her days of tender luxury are over. She will no longer be called tender or delicate. She must take millstones and grind flour like a slave; she must remove her veil, lift her skirts, wade through the rivers, and expose herself to shame. The imagery moves from the throne to the grinding stone, from royalty to servitude. God declares that he will take vengeance and spare no one. The address &#39;virgin daughter Babylon&#39; is ironic &mdash; she thought herself untouchable, pure, inviolable. The assault on her dignity is the reversal of her arrogance. She who sat enthroned will sit in the dust; she who was served will serve; she who lorded it over captives will herself be exposed. The thoroughness of the reversal is the measure of the pride that preceded it.",
  },
  {
    id: "vv4-7",
    label: "vv. 4-7",
    color: GOLD,
    summary: "Our Redeemer acts; Babylon showed no mercy",
    body: "A brief doxological interruption names who is acting: Our Redeemer, the LORD Almighty, the Holy One of Israel. This is not impersonal fate or historical accident; it is the personal action of the God who covenanted with Israel. Then the address to Babylon resumes: sit in silence, go into darkness, you will no longer be called queen of kingdoms. God explains the situation: he was angry with his people and gave them into Babylon&apos;s hand for discipline. But Babylon showed no mercy. Even on the aged &mdash; the most vulnerable members of the captive population &mdash; Babylon laid a very heavy yoke. And Babylon compounded its cruelty with pride: &#39;I will continue forever, the eternal queen.&#39; But you did not consider these things. Babylon did not consider that it was an instrument in the hands of a God who would call it to account. Instrumentality carries responsibility. The failure to consider what God was doing &mdash; and what God would eventually do &mdash; is itself a form of the pride that leads to destruction.",
  },
  {
    id: "vv8-9",
    label: "vv. 8-9",
    color: PURPLE,
    summary: "The lover of pleasure who would never be a widow",
    body: "God addresses Babylon as &#39;you lover of pleasure, lounging in security.&#39; This is the portrait of a civilization that has mistaken comfort for permanence. Babylon&apos;s internal monologue is quoted directly: &#39;I am, and there is none besides me. I will never be a widow or suffer the loss of children.&#39; This double claim &mdash; divine uniqueness and domestic permanence &mdash; is the height of self-deception. The divine response is devastating in its precision: &#39;Both of these will overtake you in a moment, on a single day.&#39; Loss of children and widowhood together, simultaneously, in a single day. The most feared disasters of the ancient world will come not gradually but in an instant. The speed of the judgment is itself a judgment on the confidence of the boast. What Babylon declared impossible will happen before she has time to prepare. The lover of pleasure will have no time to enjoy her pleasures when the day comes.",
  },
  {
    id: "vv10-11",
    label: "vv. 10-11",
    color: TEAL,
    summary: "Your wisdom and knowledge misled you",
    body: "Babylon trusted in wickedness &mdash; in her power, her sorceries, her political cunning. Her wisdom and knowledge became her undoing: they misled her into the same declaration, &#39;I am, and there is none besides me.&#39; True wisdom would have recognized the limits of power. Instead, Babylon&apos;s knowledge confirmed her in her self-deception. Now the reckoning comes: disaster will fall upon you, and you will not know how to charm it away. Ruin will fall upon you, and you will not be able to ward it off with a ransom. A catastrophe you cannot foresee will suddenly come upon you. Three descriptions of the coming judgment &mdash; disaster, ruin, catastrophe &mdash; each emphasizing its inescapability. Babylon could not charm it away (her sorceries fail). She could not ransom herself (her wealth is useless). She could not foresee it (her diviners are blind). The very resources she trusted are the ones that will fail her most completely at the moment she needs them most.",
  },
  {
    id: "vv12-15",
    label: "vv. 12-15",
    color: GREEN,
    summary: "Let your astrologers come forward &mdash; stubble and fire",
    body: "God closes with devastating irony, inviting Babylon to keep on with her magic spells, perhaps she will succeed, perhaps she will cause terror. The invitation is sarcastic: go ahead, try. Let your astrologers come forward, those stargazers who make predictions month by month &mdash; let them save you from what is coming upon you. And then the verdict: surely they are like stubble; fire will burn them up. They cannot even save themselves. The fire is not a fire to sit beside. Each of the enchanters goes on in his error; there is not one that can save you. The final line is the funeral inscription of all false wisdom: &#39;There is not one that can save you.&#39; Not one of them. Not the chief astrologer, not the most experienced diviner, not the keeper of the most ancient tablets. Salvation belongs to the LORD, and to none other. Every counsel that does not begin and end with God is, in the end, stubble waiting for the flame.",
  },
];

export default function Isaiah47GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0f0008 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "52px 24px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: ROSE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>ISAIAH 47</span>
            <span style={{ color: MUTED, fontSize: 14 }}>15 Verses &mdash; Prophetic Dirge</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15 }}>
            The Fall of Daughter Babylon
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: 0 }}>
            Isaiah 47 is a funeral dirge directed at the empire that held Israel captive. God commands Babylon to come down from her throne &mdash; her days of luxury, pride, and sorcery are over, and all her wisdom cannot save her.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: activeTab === t.id ? ACCENT : MUTED,
                borderBottom: activeTab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 32px", marginBottom: 28 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Overview</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 47 is a funeral dirge and taunt song directed at Babylon, the great empire that held Israel captive. God commands Daughter Babylon to come down from her throne and sit in the dust &mdash; her days of tender luxury are over. The chapter is unique in the prophetic literature for its sustained, almost theatrical address to a foreign empire, walking through the reasons for its fall with the relentless logic of a prosecuting attorney." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter exposes Babylon&apos;s three great sins: (1) cruelty to God&apos;s people &mdash; she showed no mercy, laid a heavy yoke on the elderly; (2) pride and self-deification &mdash; &apos;I am, and there is none besides me. I will never be a widow or suffer the loss of children&apos;; (3) dependence on sorcery and astrology instead of the living God. Each sin is named, and each receives its corresponding judgment." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter ends with devastating irony: all of Babylon&apos;s wisdom and enchanters cannot save her &mdash; they are like stubble that fire burns up. &apos;Each of them goes on in their error; there is not one that can save you.&apos; The funeral dirge form is itself a theological statement: Babylon is already spoken of as dead before she has fallen, because the word of God is as certain as accomplished fact." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Book", value: "Isaiah" },
                { label: "Chapter", value: "47" },
                { label: "Verses", value: "15" },
                { label: "Genre", value: "Funeral Dirge" },
                { label: "Audience", value: "Babylon (taunt); Israel (comfort)" },
                { label: "Key Verse", value: "Isaiah 47:10b" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "24px 28px", marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Babylon&apos;s Three Great Sins</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { num: "1", color: GOLD, title: "Cruelty", desc: "She showed no mercy to God&apos;s people and laid a heavy yoke even on the elderly (v.6). God&apos;s instruments of discipline are still accountable for how they execute that role." },
                  { num: "2", color: ROSE, title: "Self-Deification", desc: "She declared &apos;I am, and there is none besides me&apos; &mdash; using the exclusive divine self-identification. This is the most extreme form of pride: claiming the place of God." },
                  { num: "3", color: PURPLE, title: "False Wisdom", desc: "She trusted in astrologers and sorcerers rather than in the living God. Her counsel of enchanters, for all its sophistication, could not foresee or avert the coming catastrophe." },
                ].map(item => (
                  <div key={item.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color, fontWeight: 800, fontSize: 14 }}>{item.num}</div>
                    <div>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.title}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px", marginBottom: 28 }}>
              <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 17, margin: "0 0 16px" }}>Teaching Videos</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: MUTED, fontSize: 13, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.title }} />
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 32px", marginBottom: 28 }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Key Themes in Isaiah 47</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 47 presses five interlocking theological themes that run through the whole chapter. Each theme is both a description of Babylon&apos;s failure and a warning to every subsequent generation. The dirge over Babylon is also a mirror held up to any community or individual who shares Babylon&apos;s spirit." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {keyThemes.map(theme => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 12, height: 12, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{theme.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>{openTheme === theme.id ? "-" : "+"}</span>
                  </button>
                  {openTheme === theme.id && (
                    <div style={{ padding: "0 24px 22px 50px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: theme.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, margin: "0 0 14px" }}>The Central Theological Point</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "These five themes converge on a single point: the absolute sovereignty and uniqueness of God, and the absolute inadequacy of everything that stands in his place. Babylon failed not merely politically but theologically. It attempted to occupy the space that belongs only to God &mdash; claiming divine identity, claiming divine permanence, claiming divine knowledge. The judgment is the answer of the genuine Holy One of Israel to those pretensions. Isaiah 47 is a warning to empires and a comfort to the captive: the God who judges Babylon is the same God who redeems Israel." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 32px", marginBottom: 28 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Verse by Verse: Isaiah 47</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 47 has 15 verses that fall into five natural units. Each section advances the argument of the dirge, moving from the command to descend (vv.1-3) through the charge of cruelty (vv.4-7) and pride (vv.8-9) to the failure of knowledge (vv.10-11) and the final indictment of false wisdom (vv.12-15). Click each section to expand the commentary." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {verseItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}55`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }}>{item.summary}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>{openVerse === item.id ? "-" : "+"}</span>
                  </button>
                  {openVerse === item.id && (
                    <div style={{ padding: "0 24px 22px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 16, margin: "0 0 14px" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `4px solid ${ROSE}`, paddingLeft: 20, margin: "0 0 14px" }}>
                <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 8px", color: TEXT }}>
                  &ldquo;You have trusted in your wickedness and have said, &apos;No one sees me.&apos; Your wisdom and knowledge mislead you when you say to yourself, &apos;I am, and there is none besides me.&apos;&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13 }}>&mdash; Isaiah 47:10</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This verse captures all three of Babylon&apos;s sins in a single breath: the moral failure (trusted in wickedness), the theological failure (no one sees me &mdash; denying God&apos;s knowledge), and the pride that undergirds both (I am, and there is none besides me). It is the intellectual, spiritual, and moral center of the chapter." }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 32px", marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 47 is not merely ancient history. Every generation has its Babylon &mdash; the system, the power, the mindset that says &apos;I am and there is none besides me&apos; and that trusts in everything except the living God. The applications below are personal and communal, diagnostic and prescriptive." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  color: ROSE,
                  title: "Guard Against the Spirit of Babylon in Your Own Heart",
                  body: "Self-sufficiency, self-deification, and living as though there is none besides you &mdash; these are not just imperial sins. They are the default orientation of the human heart. Every time you act as though God&apos;s input on your decisions is optional, every time you trust your own assessment of a situation without reference to Scripture or prayer, every time you make yourself the center of the moral universe &mdash; you are participating in Babylon&apos;s spirit. The antidote is not self-deprecation but God-recognition: actively, repeatedly acknowledging that the Lord is God and you are not. This is what Isaiah 47 is designed to produce in the reader who takes it personally.",
                },
                {
                  color: GOLD,
                  title: "Do Not Abuse Whatever Power God Gives You",
                  body: "God gave Babylon a role and Babylon exceeded it. This is a pattern that repeats at every level of human organization &mdash; family, workplace, church, government. Those who are given authority over others are given it for specific, limited purposes. When they exceed those purposes &mdash; when they exploit, dominate, crush the vulnerable &mdash; they are doing what Babylon did. And they will be held to account as Babylon was. The charge against Babylon was specific: you showed no mercy even to the aged. Ask honestly: where has God given you power, and how are you exercising it? Are there people under your influence who are bearing a yoke that is heavier than it needs to be?",
                },
                {
                  color: PURPLE,
                  title: "Hold Earthly Security Loosely",
                  body: "Babylon said &apos;I will never be a widow or suffer the loss of children.&apos; What seemed permanent fell in a single day. The security we trust in &mdash; financial, professional, relational, national &mdash; is real but provisional. It is always held in the hand of a God who can remove it in a moment. This is not meant to produce anxiety but wisdom: build your life on what cannot be taken away. The word of God endures; everything else is, in principle, temporary. Babylon&apos;s mistake was not that she enjoyed her prosperity but that she declared her prosperity permanent and built her identity on it. We are invited to enjoy what God gives while holding it with an open hand.",
                },
                {
                  color: TEAL,
                  title: "Test Your Sources of Wisdom Against Scripture",
                  body: "Babylon had the best advisors money could buy. Her astrologers, sorcerers, and diviners were the intellectual elite of the ancient world. And not one of them could save her. Every age has its equivalent &mdash; the systems, ideologies, consultants, and experts that promise to decode the future and navigate the present. None of them can do what only God can do. This does not mean wisdom traditions, professional expertise, or human counsel are worthless. It means they must be tested against God&apos;s word, held loosely, and never trusted as final authorities. The person of faith reads widely and thinks carefully &mdash; but always with the awareness that the fear of the LORD is the beginning of wisdom, not an add-on to it.",
                },
                {
                  color: GREEN,
                  title: "Trust Only in the God Whose Word Endures",
                  body: "The enchanters are stubble. The fire does not comfort; it only consumes. Only the word of God &mdash; the word that announced Babylon&apos;s fall before it happened, the word that promised Israel&apos;s redemption in the depths of captivity &mdash; endures. Isaiah 47 stands in a larger section of the book (chapters 40-55) whose dominant note is comfort and hope. The same God who judges Babylon is the Redeemer of Israel (v.4). The death of Babylon is the life of Israel. For the Christian reader, this pattern points forward to Christ: the one who absorbed judgment so that his people might be freed. Trust him. His word does not return void. His promises do not fail. Everything else is, in the end, stubble before the fire of divine faithfulness.",
                },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "22px 26px" }}>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 12px" }}>{item.title}</h3>
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 16, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Where in your life are you functionally declaring &apos;I am, and there is none besides me&apos; &mdash; acting as though God&apos;s involvement is optional?",
                  "Is there any area where you have been given power over others and may be exercising it with less mercy than God intends?",
                  "What is the thing in your life that feels most permanent and untouchable? What would it look like to hold it with an open hand?",
                  "Where are you tempted to trust human wisdom or expertise over the word of God? What would it look like to test that counsel against Scripture?",
                  "How does the fall of Babylon and the redemption of Israel point you toward Christ? What is the &apos;Babylon&apos; that Christ has judged on your behalf?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 18px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0, fontSize: 14 }}>{i + 1}.</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: "24px 28px", marginTop: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 16, margin: "0 0 12px" }}>A Prayer from Isaiah 47</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, you are the Holy One of Israel, our Redeemer, the LORD Almighty. You alone are God; there is none besides you. We confess that we have often lived as though we were the center of our own universe &mdash; trusting in our own wisdom, our own security, our own sufficiency. Forgive us for the times we have exceeded the authority you gave us, especially toward the vulnerable. Forgive us for trusting in counsel that does not begin with you. Root out of us the spirit of Babylon &mdash; the pride that declares itself permanent, the self-sufficiency that depends on no one. Help us hold what you have given us loosely, knowing that you alone are our security. We trust your word, which does not return void. We trust you, whose plans endure when everything else burns like stubble. Amen." }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
