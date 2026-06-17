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
  { id: "aK2lYmMnH5d", title: "Isaiah 56 - My House a House of Prayer for All Nations" },
  { id: "bL7mZnNoI9e", title: "God Welcomes Foreigners and Outcasts - Isaiah 56 Study" },
  { id: "cM1nAoOpJ3f", title: "Isaiah 56 Verse by Verse - Maintain Justice and Righteousness" },
  { id: "dN6oBpPqK8g", title: "Isaiah 56 Explained - The Universal Scope of Salvation" },
];

const keyThemes = [
  {
    id: "theme1",
    color: TEAL,
    title: "Salvation Near Demands Present Righteousness",
    body: "The call to &apos;maintain justice and do what is right&apos; is grounded in the nearness of God&apos;s salvation (v.1). Eschatological expectation is not passive waiting but active righteous living. Because God&apos;s salvation is coming, justice matters now. This is one of the most important structural moves in the whole of Old Testament ethics. The reason for doing right is not merely moral duty; it is the character of the God who is coming in salvation. Because he is righteous and his salvation is near, those who belong to him live righteously in the present. This pattern recurs throughout the New Testament as well &mdash; the imminence of Christ&apos;s return is consistently used as a motivation for present ethical seriousness. The vision of the end does not excuse withdrawal from the world; it demands engagement with it, because God&apos;s salvation is taking shape in the midst of history.",
  },
  {
    id: "theme2",
    color: GREEN,
    title: "The Welcome of the Outcast",
    body: "Both eunuchs and foreigners were excluded from full participation in Israel&apos;s worship by the Mosaic law (Deuteronomy 23:1, 3). Isaiah 56 breaks that wall down prophetically, anticipating the new covenant in Christ where there is neither Jew nor Greek, slave nor free (Galatians 3:28). God&apos;s house is for all who hold fast to his covenant. The prophetic move here is striking: Isaiah does not argue that the Deuteronomic exclusions were wrong. He announces that God is doing something new &mdash; extending the scope of his covenant community in a way that exceeds the boundaries of the Mosaic order. This is consistent with the wider movement of Isaiah 40-66, which repeatedly announces a new exodus, a new thing, a new creation. The welcome of the outcast is not a revision of the law but a fulfillment of the deepest intention of the covenant: that through Israel, all nations would be blessed.",
  },
  {
    id: "theme3",
    color: GOLD,
    title: "A Name Better Than Sons and Daughters",
    body: "To eunuchs who had no biological legacy, God promises &apos;an everlasting name&apos; &mdash; a memorial that sons and daughters cannot give. This is the consolation of covenant community for those whose family structures exclude them from conventional forms of legacy. The promise to eunuchs is one of the most tender passages in all of Isaiah. The eunuch&apos;s complaint, &apos;I am only a dry tree,&apos; is the voice of someone who feels that they have nothing to offer and no future to anticipate. The dry tree produces no fruit, leaves no seed, continues no line. God&apos;s answer is not to resolve the biological situation but to transcend it entirely: within my temple and its walls I will give them a name better than sons and daughters &mdash; an everlasting name that will not be cut off. The legacy that God offers is better than biological continuity. It is participation in the covenant community that will last forever. This is a word of profound hope for anyone who feels that their circumstances exclude them from the fullest expressions of human flourishing.",
  },
  {
    id: "theme4",
    color: ROSE,
    title: "A House of Prayer for All Nations",
    body: "Jesus quotes verse 7 as the reason for cleansing the Temple (Matthew 21:13, Mark 11:17). The Temple had become a commercial hub rather than a prayer sanctuary for the nations. This verse is a perpetual call for the church to be genuinely accessible and welcoming to all who seek God. The full force of the quotation depends on understanding what Jesus was doing in the Temple courts. The Court of the Gentiles &mdash; the one area of the Temple where foreigners could come to pray &mdash; had been converted into a marketplace. The very space designated for the nations to approach God had been crowded out by commercial activity. By quoting Isaiah 56:7, Jesus is not making a general point about reverence in worship; he is making a specific point about inclusion. The Temple was supposed to be a house of prayer for all nations, and the one space set aside for that purpose had been eliminated. The application to the church is direct: any time the practical arrangements of Christian community make it harder for outsiders and outcasts to approach God, something has gone wrong at a deep level.",
  },
  {
    id: "theme5",
    color: PURPLE,
    title: "The Failure of Blind Watchmen",
    body: "The chapter ends with a devastating portrait of Israel&apos;s leaders: blind watchmen, mute dogs, shepherds who pursue their own gain. Those entrusted with spiritual leadership face the highest accountability. The contrast with God&apos;s inclusive welcome makes their failure even more tragic. The watchman&apos;s function in the ancient world was to stand on the city walls and warn of approaching danger &mdash; to see and to bark. Israel&apos;s watchmen are blind (they cannot see) and mute dogs (they cannot bark). They lie around and dream; they never have enough; they each turn to their own way. The contrast with the chapter&apos;s opening is devastating. God opens the chapter by welcoming the excluded &mdash; the foreigner, the eunuch, the outsider &mdash; and closes it by indicting the insiders who have failed in their calling. The people on the margins are entering the house of God while the leaders appointed to guide them are asleep. This is a pattern that runs through the prophets and into the New Testament, where Jesus reserves his sharpest words for the religious leadership of his day.",
  },
];

const verseItems = [
  {
    id: "vv1-2",
    label: "vv. 1-2",
    color: TEAL,
    summary: "Maintain justice; salvation is near",
    body: "The chapter opens with a double imperative grounded in an eschatological promise: maintain justice and do what is right &mdash; for my salvation is close at hand and my righteousness will soon be revealed. The ethical demand is not freestanding; it flows from the character of God and the imminence of his saving action. Then comes a beatitude &mdash; a pronouncement of blessing: blessed is the one who does this, who keeps the Sabbath without desecrating it and keeps their hands from doing any evil. The Sabbath appears here not as a narrow ritual requirement but as a marker of covenant faithfulness &mdash; the sign that distinguishes those who belong to the God who rested on the seventh day from those who do not. Keeping the Sabbath and keeping hands from evil are presented as two expressions of the same fundamental orientation: belonging to the God who is near in salvation. The opening of Isaiah 56 functions as a summary statement for all of Isaiah 56-66, the final section of the book: this is what covenant life looks like while waiting for what God has promised.",
  },
  {
    id: "vv3-5",
    label: "vv. 3-5",
    color: GOLD,
    summary: "Eunuchs welcomed: a name better than sons and daughters",
    body: "Two excluded groups are addressed, each introduced with the same form: &apos;let no [excluded person] say...&apos; First, the foreigner &mdash; let no foreigner who is bound to the LORD say the LORD will surely exclude me from his people. Second, the eunuch &mdash; let no eunuch complain I am only a dry tree. Both complaints are real and understandable; both are grounded in actual provisions of Mosaic law. God&apos;s answer to the eunuchs is given first and at greater length, perhaps because their exclusion was more painful. He addresses it with extraordinary specificity: to the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant &mdash; to them I will give within my temple and its walls a memorial and a name better than sons and daughters. The phrase &apos;better than sons and daughters&apos; directly addresses the eunuch&apos;s deepest anxiety: not just that they will be included, but that what God gives them exceeds the very thing they lack. An everlasting name that will endure forever is the ultimate answer to the fear of being cut off without legacy.",
  },
  {
    id: "vv6-7",
    label: "vv. 6-7",
    color: GREEN,
    summary: "Foreigners welcomed: a house of prayer for all nations",
    body: "The welcome of foreigners is elaborated in verses 6-7. Four characteristics are named: they bind themselves to the LORD (covenant commitment), they minister to him (priestly service), they love the name of the LORD (personal devotion), and they keep the Sabbath (covenant sign). The condition is not ethnic or national identity but relational and ethical commitment to the God of Israel. The promise to such foreigners is comprehensive: I will bring them to my holy mountain and give them joy in my house of prayer. Their burnt offerings and sacrifices will be accepted on my altar. Their worship &mdash; the very activities that the law had restricted &mdash; will be fully accepted. And then the climactic declaration: for my house will be called a house of prayer for all nations. This is the verse Jesus quotes in Matthew 21:13 and Mark 11:17 when he cleanses the Temple. It is the theological ground of everything: the Temple &mdash; and by extension the church &mdash; is not a house for one nation; it is a house for all nations who come to pray to the living God.",
  },
  {
    id: "vv8",
    label: "v. 8",
    color: ACCENT,
    summary: "The Lord will gather still others",
    body: "A single verse stands as a hinge between the promises of inclusion (vv.3-7) and the indictment of the leaders (vv.9-12): The Sovereign LORD declares &mdash; he who gathers the exiles of Israel: I will gather still others to them besides those already gathered. The gathering of the exiles of Israel is already assumed as underway. But God announces that the gathering will not stop with Israel. He will gather still others &mdash; the foreigners just mentioned, and those beyond them. The scope of the divine gathering is explicitly open-ended: besides those already gathered. This is one of the most expansive statements in all of Isaiah. The mission of God is not to restore a remnant to a defined ethnicity; it is to gather a community from every people who will bind themselves to him. Paul&apos;s missionary theology in Romans 9-11 &mdash; the grafting in of the Gentiles alongside the Jewish people &mdash; is the New Testament fulfillment of precisely this verse.",
  },
  {
    id: "vv9-12",
    label: "vv. 9-12",
    color: PURPLE,
    summary: "Blind watchmen, mute dogs, greedy shepherds",
    body: "The chapter ends with one of the most withering portraits of failed leadership in the Bible. The transition is jarring: from the expansive welcome of foreigners and eunuchs to the savage indictment of Israel&apos;s own watchmen. Come all you beasts of the field, come and devour &mdash; the invitation to predators signals that the flock is unprotected. Why? Israel&apos;s watchmen are blind. They lack knowledge. They are all mute dogs who cannot bark. Their job is to see and warn; they can do neither. They lie around and dream, they are dogs with mighty appetites who never have enough. The shepherds &mdash; a metaphor for Israel&apos;s leaders throughout the OT &mdash; lack understanding. They all turn to their own way; each seeks his own gain. The specific failure named here is self-seeking leadership: the shepherd who uses the flock for personal enrichment rather than serving the flock at personal cost. The contrast with the God who gathers the excluded could not be sharper. God&apos;s posture is outward and inclusive; the leaders&apos; posture is inward and self-serving. This indictment does not cancel the promises of vv.1-7; if anything, it makes them more astonishing. God&apos;s inclusive welcome advances not because of Israel&apos;s leadership but in spite of it.",
  },
];

export default function Isaiah56GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #030f0a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "52px 24px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: GREEN, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>ISAIAH 56</span>
            <span style={{ color: MUTED, fontSize: 14 }}>12 Verses &mdash; Prophetic Promise</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15 }}>
            My House a House of Prayer for All Nations
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: 0 }}>
            Isaiah 56 opens the final section of Isaiah with a declaration of radical inclusion. Eunuchs and foreigners &mdash; those previously excluded from Israel&apos;s assembly &mdash; are welcomed into God&apos;s house, while the insiders who were supposed to lead have failed completely.
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Overview</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 56 opens the final section of Isaiah (chapters 56-66) with a striking declaration of God&apos;s inclusive grace. The chapter begins with a call to maintain justice and do what is right &mdash; for salvation is near. This is the ethical foundation for everything that follows: because God&apos;s saving righteousness is on the way, righteousness in the present is the appropriate response." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter then turns to two groups typically excluded from the assembly of Israel: eunuchs (excluded by Deuteronomy 23:1) and foreigners (excluded by Deuteronomy 23:3). God promises both a welcome if they hold fast to his covenant. To eunuchs who keep the Sabbath: &apos;I will give them a memorial and a name better than sons and daughters &mdash; an everlasting name that will endure forever.&apos; To foreigners who love the LORD and keep his Sabbath: &apos;Their burnt offerings and sacrifices will be accepted on my altar; for my house will be called a house of prayer for all nations&apos; (v.7)." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Verse 7 is the verse Jesus quotes when he cleanses the Temple (Matthew 21:13, Mark 11:17). The commercial activity in the Court of the Gentiles had eliminated the one space set aside for the nations to pray &mdash; the very thing this verse promises. The chapter closes with a devastating portrait of Israel&apos;s leadership: blind watchmen, mute dogs, greedy shepherds. The contrast is deliberate and painful: God is gathering the excluded while Israel&apos;s own leaders have abandoned their post." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Book", value: "Isaiah" },
                { label: "Chapter", value: "56" },
                { label: "Verses", value: "12" },
                { label: "Section", value: "Third Isaiah (56-66)" },
                { label: "Key Theme", value: "Radical inclusion" },
                { label: "Key Verse", value: "Isaiah 56:7" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "24px 28px", marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>The Shape of the Chapter</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "vv. 1-2", color: TEAL, desc: "Ethical call: maintain justice and do what is right because salvation is near. Blessing for those who keep the Sabbath and avoid evil." },
                  { label: "vv. 3-5", color: GOLD, desc: "Promise to eunuchs: do not say &apos;I am a dry tree.&apos; God gives them a name better than sons and daughters &mdash; an everlasting memorial within his temple." },
                  { label: "vv. 6-7", color: GREEN, desc: "Promise to foreigners: those who love the LORD and keep his Sabbath will be brought to the holy mountain. Their worship will be accepted. My house will be called a house of prayer for all nations." },
                  { label: "v. 8", color: ACCENT, desc: "Divine declaration: the God who gathers Israel will gather still others besides &mdash; the scope of his gathering is open-ended." },
                  { label: "vv. 9-12", color: PURPLE, desc: "Indictment of Israel&apos;s leaders: blind watchmen, mute dogs, greedy shepherds. The insiders have failed while the outsiders are being welcomed." },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}55`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.label}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Key Themes in Isaiah 56</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 56 presses five theological themes that will shape the rest of Isaiah 56-66. Together they form a picture of what the covenant community looks like when God&apos;s salvation draws near: it is ethical, inclusive, prayerful, globally oriented &mdash; and it stands under the judgment of a God who holds leaders to account for how they have stewarded their calling." }}
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

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 16, margin: "0 0 14px" }}>The Key Verse and Jesus</h3>
              <blockquote style={{ borderLeft: `4px solid ${ROSE}`, paddingLeft: 20, margin: "0 0 14px" }}>
                <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 8px", color: TEXT }}>
                  &ldquo;My house will be called a house of prayer for all nations.&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13 }}>&mdash; Isaiah 56:7b (quoted by Jesus in Matthew 21:13)</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jesus quotes this verse in the context of cleansing the Temple not as a general call for reverence but as a specific charge that the one space designated for the nations to pray had been commodified. The inclusion of the phrase &apos;for all nations&apos; in Mark&apos;s account (Mark 11:17) makes the point explicit: what was meant for everyone had been made inaccessible. This is a perpetual call to the church: the structures and spaces of Christian community must genuinely welcome those they claim to serve." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 32px", marginBottom: 28 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Verse by Verse: Isaiah 56</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 56&apos;s 12 verses divide into five natural units that form a chiastic structure: ethical call (vv.1-2), promise to eunuchs (vv.3-5), promise to foreigners (vv.6-7), hinge declaration (v.8), and indictment of leaders (vv.9-12). The movement from invitation to indictment is deliberate &mdash; what God is offering the excluded, the insiders have forfeited through their failure. Click each section to expand the commentary." }}
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

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: "0 0 14px" }}>Isaiah 56 in the New Testament</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ref: "Matthew 21:13", color: ROSE, desc: "Jesus quotes Isaiah 56:7 when cleansing the Temple: &apos;My house will be called a house of prayer, but you are making it a den of robbers.&apos;" },
                  { ref: "Mark 11:17", color: GOLD, desc: "Mark&apos;s account includes the full phrase &apos;for all nations,&apos; making explicit that the Temple was meant for Gentiles as well as Jews." },
                  { ref: "Acts 8:27-35", color: TEAL, desc: "Philip meets an Ethiopian eunuch reading Isaiah &mdash; the very category Isaiah 56 promises to include. His conversion fulfills Isaiah 56&apos;s promise." },
                  { ref: "Galatians 3:28", color: PURPLE, desc: "Paul announces: there is neither Jew nor Greek, slave nor free, male nor female &mdash; the full realization of Isaiah 56&apos;s inclusive vision in Christ." },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}55`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.ref}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
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
                dangerouslySetInnerHTML={{ __html: "Isaiah 56 is one of the most practically demanding chapters in the Old Testament. It challenges both our personal spiritual lives &mdash; live righteously now because salvation is near &mdash; and our communal structures: is the house of God genuinely welcoming to all nations, or have we made it comfortable only for the already-included? The applications below work through the chapter systematically." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  color: TEAL,
                  title: "Let the Nearness of Salvation Motivate Present-Day Righteousness",
                  body: "Isaiah 56&apos;s first word is not about inclusion &mdash; it is about ethics: maintain justice and do what is right. The motivation is the nearness of God&apos;s salvation. This is the pattern of biblical ethics: the indicative (what God is doing) grounds the imperative (what we should do). Because God&apos;s righteous salvation is coming, we live righteously now. This means justice is not optional for those who are waiting for God&apos;s kingdom &mdash; it is the form that kingdom-waiting takes in the present. Ask yourself: what would it look like to let the imminence of Christ&apos;s return shape how you treat your neighbor, your employee, the stranger, the vulnerable this week?",
                },
                {
                  color: GREEN,
                  title: "Examine Whether Your Church Is Truly a House of Prayer for All Nations",
                  body: "Jesus&apos; quotation of Isaiah 56:7 in the Temple was a structural critique, not merely a devotional one. The space designated for the nations to pray had been taken over by insiders for commercial purposes. The question for every Christian community is the same: are there practical barriers &mdash; cultural, linguistic, economic, social &mdash; that make it harder for outsiders to approach God in our gatherings? This is not a question about theological compromise; it is a question about practical accessibility. The house of prayer is for all nations, and the church that is effectively only for one demographic has missed something central to God&apos;s stated purpose for his community.",
                },
                {
                  color: GOLD,
                  title: "Welcome Those the Religious Establishment Has Excluded",
                  body: "Isaiah 56 names two excluded groups by their Deuteronomic exclusion and promises them inclusion on the basis of covenant faithfulness. The principle is generative: God&apos;s covenant welcome is not limited by existing human structures of exclusion. Every generation has its equivalent of eunuchs and foreigners &mdash; people the religious establishment has told, explicitly or implicitly, &apos;this space is not for you.&apos; Isaiah 56 demands that we ask who those people are in our context and whether we are extending the same inclusive welcome that God extends. Belonging to God&apos;s community is determined by covenant faithfulness, not by social category or background.",
                },
                {
                  color: ROSE,
                  title: "Find Your Legacy in Covenant Community Rather Than Biological Inheritance",
                  body: "The promise to eunuchs is among the most tender in all of Isaiah: a name better than sons and daughters, an everlasting memorial within God&apos;s temple. For people in any era who feel that their circumstances exclude them from conventional forms of legacy &mdash; those who have no children, those who have lost children, those who feel their lives have produced no fruit &mdash; this is a word of profound hope. What God offers is better than biological continuity. The everlasting name that comes from holding fast to God&apos;s covenant outlasts anything that biological reproduction can provide. Your legacy is your faithfulness; your memorial is your participation in the community of the eternally gathered.",
                },
                {
                  color: PURPLE,
                  title: "Pray for Faithful Watchmen and Shepherds",
                  body: "The devastating portrait of Isaiah 56:9-12 is not meant to produce cynicism about leadership but to clarify what faithful leadership looks like by contrast. The blind watchman is not the model; he is the warning. Pray specifically for the spiritual leaders in your life &mdash; pastors, elders, teachers &mdash; that they would see clearly, speak faithfully, and serve sacrificially rather than turning to their own way and seeking their own gain. And if you hold any form of spiritual responsibility &mdash; as a parent, a small group leader, a teacher, a mentor &mdash; let the indictment of chapters 56:9-12 search your own heart. Are you a watchman who can see? Are you a shepherd who is genuinely for the flock?",
                },
                {
                  color: ACCENT,
                  title: "Hold Fast to God&apos;s Covenant as the Basis of Your Belonging",
                  body: "The condition for receiving the promises of Isaiah 56 is consistent throughout the chapter: hold fast to my covenant (v.4, v.6). This is not about earning inclusion through performance but about the orientation of trust and commitment that defines covenant relationship. The eunuch and the foreigner belong not because of their ethnic or physical status but because of their covenantal faithfulness &mdash; keeping the Sabbath, choosing what pleases God, loving his name. For the Christian, holding fast to the covenant means holding fast to Christ &mdash; trusting his faithfulness, living by his word, gathering with his people. This is the only basis of belonging that endures: not family, not nationality, not social status, but the covenant commitment that God himself has made and that we receive by faith.",
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
                  "How does the nearness of God&apos;s salvation change the way you approach the ethical demands of this week? What would it mean to maintain justice today because salvation is near?",
                  "Who are the &apos;eunuchs and foreigners&apos; in your context &mdash; the people your religious community has implicitly or explicitly excluded? What would genuine welcome look like?",
                  "Is your church a house of prayer that is genuinely accessible to all nations, or have practical barriers made it comfortable for only some?",
                  "Where do you tend to ground your sense of legacy and significance? How does the promise of &apos;a name better than sons and daughters&apos; reorient your understanding of what matters most?",
                  "What does it look like in practice to &apos;hold fast to my covenant&apos; in your current season of life? What are the specific ways you are binding yourself to the LORD?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 18px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0, fontSize: 14 }}>{i + 1}.</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: "24px 28px", marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: "0 0 12px" }}>A Prayer from Isaiah 56</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, your salvation is near &mdash; help us live like it. Give us the courage to maintain justice and do what is right in the places where injustice is comfortable and inaction is easy. Thank you that you welcome the excluded, the dry trees, the ones told there is no place for them. Make your church genuinely a house of prayer for all nations &mdash; accessible, welcoming, prayerful, and oriented outward. Forgive us for the times we have been blind watchmen and mute dogs, sleeping when we should have been seeing, silent when we should have been speaking. Raise up in your church faithful shepherds who give their lives for the flock rather than using the flock for themselves. Help each of us to hold fast to your covenant not as a burden but as the very ground of our belonging &mdash; the one thing that cannot be taken from us. Gather us among the ones you are gathering, and gather still others through us. Amen." }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
