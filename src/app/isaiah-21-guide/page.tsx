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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "mNt7Fxs3MHo", title: "Isaiah 21 - The Burden of Babylon Explained" },
  { videoId: "R4xWLDEkQ7Y", title: "Watchman What of the Night - Isaiah 21 Study" },
  { videoId: "Xk9pKu4Jb1c", title: "Fallen is Babylon - Isaiah 21 and Revelation 18" },
  { videoId: "wB3P0gLmE8s", title: "The Arabian Oracle - Isaiah 21 Verses 13-17" },
];

export default function Isaiah21GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Major Prophet &middot; OT
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            Isaiah 21: The Burden of the Wilderness of the Sea
          </h1>
          <p
            style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, margin: "0 0 8px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 21 contains three distinct oracles&mdash;against Babylon, Edom (Dumah), and Arabia&mdash;each carrying the weight of divine sovereignty over empires. The haunting cry &ldquo;Fallen, fallen is Babylon!&rdquo; echoes across Scripture into the book of Revelation, while the Watchman&rsquo;s dialogue with the night remains one of the most stirring images of prophetic calling in the Hebrew Bible." }}
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            {[["Chapters", "21:1-17"], ["Genre", "Oracle of Judgment"], ["Nations Addressed", "Babylon, Edom, Arabia"], ["Key Echo", "Revelation 18:2"]].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 16px", minWidth: 120 }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>{k}</div>
                <div style={{ color: TEXT, fontSize: 13, fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>
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
                border: `1px solid ${activeTab === t.id ? ROSE : BORDER}`,
                background: activeTab === t.id ? `${ROSE}20` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Three Oracles in One Chapter</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 21 is one of the most concentrated oracle chapters in the prophetic literature. It addresses three distinct regions in rapid succession, each receiving a &ldquo;burden&rdquo; (massa in Hebrew &mdash; a word that carries the sense of a heavy, laden announcement). The chapter opens with what scholars call the oracle of the Wilderness of the Sea, almost certainly a cryptic reference to Babylon, the great empire sitting astride the lower Mesopotamian rivers and marshlands." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The vision Isaiah receives is violent and disturbing enough to cause him physical distress. He is not a dispassionate announcer of judgment. His heart reels, horror has appalled him, the twilight of his pleasure is turned to trembling. This is a feature of biblical prophecy: the prophet is not a machine that outputs oracles; he is a person who bears the weight of the word he speaks. Jeremiah will describe a similar agony. Ezekiel will lie bound on his side. Isaiah here is shaken by what he sees before the nation to whom he speaks has any idea what is coming." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The second oracle (vv. 11-12) is the briefest and most enigmatic in the entire book &mdash; the Watchman, what of the night? exchange with a voice from Seir (Edom/Dumah). The third oracle (vv. 13-17) turns to the Arabian tribes, specifically Dedan and Kedar, announcing that their military glory will diminish within a year." }}
              />
            </div>

            {/* Three Oracles at a Glance */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 22 }}>
              {[
                { ref: "vv. 1-10", title: "Wilderness of the Sea", subtitle: "The Babylon Oracle", color: ROSE, desc: "A terrifying vision of Babylon&rsquo;s fall announced before it happens. Isaiah is physically overcome. The watchman at his post finally cries: Fallen, fallen is Babylon!" },
                { ref: "vv. 11-12", title: "Dumah (Edom)", subtitle: "The Night Oracle", color: PURPLE, desc: "The shortest oracle in Isaiah. A mysterious voice from Seir cries into the night. The watchman gives an ambiguous answer: morning comes, and also the night." },
                { ref: "vv. 13-17", title: "Arabia", subtitle: "The Desert Oracle", color: GOLD, desc: "The caravans of Dedan must hide. Kedar&rsquo;s glory will be diminished within one year. The LORD himself vouches for the timeframe." },
              ].map(item => (
                <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "inline-block", background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 10, color: item.color, fontWeight: 700, marginBottom: 10 }}>{item.ref}</div>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: item.color, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>{item.subtitle}</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>

            {/* Historical Context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, margin: "0 0 14px" }}>Historical and Literary Context</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 21 is usually dated to the late eighth century BC, during the period when Assyria under Sargon II and then Sennacherib dominated the Near East. Babylon was at this time a vassal or tributary under Assyrian power, and there were periodic revolts. Some scholars link the oracle to the fall of Babylon to Sennacherib in 689 BC; others see it as predictive of the later Neo-Babylonian period and Babylon&rsquo;s eventual fall to the Medes and Persians in 539 BC." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The designation &ldquo;Wilderness of the Sea&rdquo; is cryptic but likely refers to Babylon, whose region in southern Mesopotamia was characterized by extensive marshlands and seasonal flooding where the Euphrates and Tigris converged. The oracle alludes to Elam and Media as the attackers (v. 2), which fits historically with the Medo-Persian coalition that ultimately overthrew Babylon under Cyrus the Great." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The resonance with Revelation 18 is theologically significant: John&rsquo;s vision of &ldquo;Fallen, fallen is Babylon the Great&rdquo; in Revelation 18:2 directly echoes Isaiah 21:9. In Revelation, Babylon functions as a symbol for any empire that sets itself against God&rsquo;s people &mdash; and Isaiah&rsquo;s oracle becomes the template for that enduring prophetic motif." }}
              />
            </div>

            {/* Key Verse */}
            <div style={{ background: `${ROSE}12`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: ROSE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Key Verse &mdash; Isaiah 21:9</div>
              <blockquote
                style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 12px", padding: "0 0 0 18px", borderLeft: `4px solid ${ROSE}` }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;And behold, here come riders, horsemen in pairs!&rdquo; And he answered, &ldquo;Fallen, fallen is Babylon; and all the carved images of her gods he has shattered to the ground.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This cry&mdash;Fallen, fallen is Babylon&mdash;reverberates through Scripture for over seven hundred years, finding its ultimate echo in Revelation 18:2. It is a declaration not merely of military defeat but of theological verdict: the empire that set itself above the Lord of hosts has been brought down by the very God it defied." }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Key Themes in Isaiah 21</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 21 packs several major theological themes into just seventeen verses. These are not merely historical predictions about ancient empires; they are enduring patterns that the rest of Scripture develops and applies to every era where God&rsquo;s people live in proximity to worldly power." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "God&rsquo;s Sovereignty Over Empires",
                icon: "01",
                body: "The most foundational theme of Isaiah 21 is the absolute sovereignty of the LORD of hosts over the mightiest empires of the ancient world. Babylon was the superpower&mdash;its walls were legendary, its armies feared, its gods honored. Yet Isaiah announces its fall not with trembling uncertainty but with the matter-of-fact confidence of a man who has been shown the end of a story before the protagonist has even reached the midpoint. God does not hold council with empires before deciding their fate; they rise and fall at his word. This is a counter-cultural claim in every era: no government, no military force, no economic system operates outside the governance of the sovereign Lord.",
              },
              {
                color: GOLD,
                title: "The Watchman&rsquo;s Calling",
                icon: "02",
                body: "Isaiah&rsquo;s use of the watchman figure in Isaiah 21 (and its development in Ezekiel 33) is one of the defining images for the prophetic vocation. A watchman stands at his post, scans the horizon, and announces what he sees&mdash;without editorializing, softening, or withholding. The watchman of Isaiah 21 is posted by God himself: &ldquo;Go, post a lookout, let him announce what he sees&rdquo; (v. 6). The announcement, when it comes, is not pleasant: fallen is Babylon, idols shattered. But the watchman&rsquo;s task is not to curate pleasant news; it is to faithfully report what the LORD shows him. Faithful preaching and witness in every era requires this watchman character&mdash;the courage to announce unwelcome truth because God has commissioned the announcement.",
              },
              {
                color: PURPLE,
                title: "The Fall of Every Babylon",
                icon: "03",
                body: "Isaiah 21:9 does not merely predict a sixth-century BC political event. It establishes a pattern that Scripture returns to repeatedly. In Revelation 14:8, an angel announces: &ldquo;Fallen, fallen is Babylon the great!&rdquo; In Revelation 18:2, the same cry comes with elaboration. John is drawing on Isaiah&rsquo;s exact words to announce the ultimate fall of every system that opposes God&mdash;whether that system is the historical Babylon, the Roman Empire, or the cultural and political powers of any subsequent age. Every Babylon falls. The question Isaiah poses is: will you trust the kingdoms of this world or the kingdom of God?",
              },
              {
                color: TEAL,
                title: "The Urgency of Divine Warning",
                icon: "04",
                body: "The oracle is not spoken in detachment. Isaiah is physically overwhelmed: &ldquo;Therefore my loins are filled with anguish; pangs have seized me, like the pangs of a woman in labor&rdquo; (v. 3). This anguish reflects the urgency of the divine word&mdash;a word that is not merely information but crisis. God gives warnings because he is a God who desires that people hear and respond before the hammer falls. The Arabian oracle (vv. 13-17) adds temporal urgency: &ldquo;within a year, according to the years of a hired worker, all the glory of Kedar will come to an end.&rdquo; God names a timeframe. The warning is not indefinite.",
              },
              {
                color: BLUE,
                title: "Idols Shattered",
                icon: "05",
                body: "The climax of the Babylon oracle is not merely political but theological: &ldquo;all the carved images of her gods he has shattered to the ground&rdquo; (v. 9). Babylon&rsquo;s military defeat is simultaneously the defeat of the Babylonian gods. This pattern runs throughout the Exodus narrative as well: the plagues against Egypt are targeted against specific Egyptian deities, demonstrating that the LORD of hosts reigns over all rival claimants to divine authority. Isaiah&rsquo;s oracle against Babylon is thus an act of cosmic clearing: when the empire falls, so do its gods. The implication for Israel&mdash;and for every believer in every era&mdash;is that the things in which we trust apart from God will ultimately be exposed and shattered.",
              },
              {
                color: GREEN,
                title: "The Threshed and Humbled People",
                icon: "06",
                body: "Verse 10 contains a deeply pastoral turn. Having announced Babylon&rsquo;s doom, Isaiah addresses his own people: &ldquo;O my threshed and winnowed one, what I have heard from the LORD of hosts, the God of Israel, I announce to you.&rdquo; Israel is the threshed people&mdash;beaten under the weight of Babylonian oppression and exile. But Isaiah is not announcing meaningless suffering. He is passing on exactly what the LORD of hosts has told him. The God who announces Babylon&rsquo;s fall is the same God who sees and speaks to his threshed, winnowed, suffering people. The judgment on their oppressors is inseparable from God&rsquo;s care for them.",
              },
            ].map(theme => (
              <div key={theme.icon} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "22px 24px", marginBottom: 14, display: "flex", gap: 18 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: `${theme.color}20`, border: `1px solid ${theme.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 13 }}>{theme.icon}</div>
                <div>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.78, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Verse by Verse: Isaiah 21</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 21 moves in three distinct oracular units. Below is a close reading of each section, noting the Hebrew imagery, the theological weight, and the scriptural resonances that make this chapter far more than a narrow historical prediction." }}
              />
            </div>

            {/* Section 1: vv. 1-4 */}
            <div style={{ background: CARD, border: `1px solid ${ROSE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: ROSE, fontWeight: 700 }}>vv. 1-4</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>The Vision Breaks In &mdash; Isaiah Is Undone</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;As whirlwinds in the Negeb sweep on, it comes from the wilderness, from a terrible land. A stern vision is told to me; the traitor betrays, and the destroyer destroys. Go up, O Elam; lay siege, O Media; all the sighing she has caused I bring to an end.&rdquo; (vv. 1-2)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The oracle opens with a simile drawn from the natural world: the vision comes like a Negeb whirlwind&mdash;sudden, violent, unstoppable. The Negeb is the dry desert region south of Judah; its storms are notorious. By comparing the vision to this phenomenon, Isaiah signals that what is coming for Babylon will be as irresistible as a desert storm." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The command &ldquo;Go up, O Elam; lay siege, O Media&rdquo; (v. 2) is remarkable. God is calling Elam and Media to attack Babylon. These nations are the instruments of divine judgment; they do not know they are serving the LORD of hosts, but they are. This is consistent with Isaiah&rsquo;s broader theology: God uses Assyria as a rod of his anger (10:5) and Cyrus as his shepherd (44:28). The nations act; God governs." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;All the sighing she has caused I bring to an end.&rdquo; This phrase at the close of verse 2 is an act of divine compassion wrapped in an oracle of judgment. Babylon has caused sighing&mdash;grief, suffering, the groan of exiles and conquered peoples. God brings that sighing to an end by bringing the sighing&rsquo;s source to an end." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Verses 3-4 are extraordinary for their psychological honesty: &ldquo;Therefore my loins are filled with anguish; pangs have seized me, like the pangs of a woman in labor; I am bowed down so that I cannot hear; I am dismayed so that I cannot see. My heart reels; horror has appalled me; the twilight I longed for has been turned for me into trembling.&rdquo; Isaiah is physically and emotionally overwhelmed. He is not performing distress; the vision is genuinely devastating. The prophetic calling involves receiving and bearing truth before others are ready to hear it&mdash;and the weight of that truth is real." }}
              />
            </div>

            {/* Section 2: vv. 5-9 */}
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: BLUE, fontWeight: 700 }}>vv. 5-9</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>The Watchman and the Announcement</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;They prepare the table, they spread the rugs, they eat, they drink. Arise, O princes; oil the shield! For thus the Lord said to me: Go, post a lookout, let him announce what he sees.&rdquo; (vv. 5-6)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Verse 5 depicts a Babylonian feast&mdash;the rulers eating, drinking, at ease. Historians have long connected this with the Belshazzar narrative in Daniel 5, where the Babylonian king holds a feast on the very night the city falls. The juxtaposition is theologically pointed: while Babylon banquets, God is positioning his instruments for invasion." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The divine command to &ldquo;post a lookout&rdquo; (v. 6) is the heart of the watchman theology that Ezekiel will later develop in full (Ezekiel 33). The watchman is not given authority to decide what to announce; he is given a post and told to report what he sees. The content of the announcement is not within his discretion. Faithfulness, not creativity, is his vocation." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Verses 7-8 describe the watchman waiting. He is diligent; he stands at his post faithfully, night after night, watching for the signal. And then it comes: &ldquo;Here come riders, horsemen in pairs, riders on donkeys, riders on camels! And he listened diligently, very diligently.&rdquo; The urgency of the repetition (&ldquo;very diligently&rdquo;) signals that the critical moment has arrived." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Verse 9 contains the great announcement: &ldquo;Fallen, fallen is Babylon; and all the carved images of her gods he has shattered to the ground.&rdquo; The double &ldquo;fallen, fallen&rdquo; is emphatic and final. The Hebrew qatal (perfect) tense can carry a prophetic past&mdash;so certain is the event that it is spoken as already accomplished. The fall of Babylon is the simultaneous humiliation of its gods: when the city falls, the idols fall with it. Military defeat and theological verdict are inseparable." }}
              />
            </div>

            {/* Section 3: v. 10 */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GREEN, fontWeight: 700 }}>v. 10</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>The Threshed People &mdash; A Word of Comfort in Judgment</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;O my threshed and winnowed one, what I have heard from the LORD of hosts, the God of Israel, I announce to you.&rdquo; (v. 10)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "This single verse is a pivot of pastoral tenderness within an oracle of cosmic judgment. After announcing Babylon&rsquo;s fall, Isaiah turns to address the people of Israel. He does not call them Israel, or Judah, or Jacob&mdash;he calls them &ldquo;my threshed and winnowed one.&rdquo; The agricultural metaphor is precise: threshing beats the grain to separate it from the chaff; winnowing tosses it into the wind to complete the separation. Israel has been beaten by Babylonian power, separated from land and temple and king." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "But the grammar is intimate: &ldquo;my threshed one.&rdquo; God calls this suffering people his own. And what he announces to them is not their punishment but Babylon&rsquo;s. The oracle of judgment on the oppressor is simultaneously an oracle of vindication for the oppressed. This is the pattern throughout the prophets: God&rsquo;s judgment and God&rsquo;s salvation are two sides of the same coin." }}
              />
            </div>

            {/* Section 4: vv. 11-12 */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: PURPLE, fontWeight: 700 }}>vv. 11-12</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>The Dumah Oracle &mdash; Watchman, What of the Night?</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;The oracle concerning Dumah. One is calling to me from Seir, &lsquo;Watchman, what time of the night? Watchman, what time of the night?&rsquo; The watchman says: &lsquo;Morning comes, and also the night. If you will inquire, inquire; come back again.&rsquo;&rdquo; (vv. 11-12)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Dumah&rdquo; is a place in Arabia (see Genesis 25:14), but the Hebrew word also means &ldquo;silence&rdquo;&mdash;a wordplay that may shadow the oracle with ominous ambiguity. &ldquo;Seir&rdquo; is the mountainous region of Edom, east and south of the Dead Sea. A voice from Edom calls urgently to the watchman, twice asking the same question: what time is it in the night? The repetition signals desperation." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The watchman&rsquo;s answer is deliberately enigmatic: &ldquo;Morning comes, and also the night.&rdquo; This is not mere ambiguity for its own sake. The answer is both promise and warning: light is coming, but not only light. For those who will repent and seek the LORD, morning comes; for those who will not, night persists. The watchman invites further inquiry: &ldquo;If you will inquire, inquire; come back again.&rdquo; The door is not closed, but the moment for decision is urgent." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This is perhaps the most existentially haunting exchange in all of Isaiah. It captures something universal in the human condition: the darkness that surrounds us, the desperate desire to know whether dawn is coming, and the watchman&rsquo;s honest, open-ended answer that requires the questioner to keep seeking." }}
              />
            </div>

            {/* Section 5: vv. 13-17 */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GOLD, fontWeight: 700 }}>vv. 13-17</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>The Arabian Oracle &mdash; Kedar&rsquo;s Glory Diminished</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;In the thickets in Arabia you will lodge, O caravans of Dedanites. To the thirsty bring water; meet the fugitive with bread, O inhabitants of the land of Tema.&rdquo; (vv. 13-14)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The third oracle turns to the Arabian peninsula. The Dedanites were a trading people who ran caravan routes through the Arabian desert; Tema was a prominent oasis settlement; Kedar was a nomadic tribal confederation known for its archers and warriors (mentioned alongside Ishmael in Genesis 25:13). These were not peripheral nations&mdash;they were significant commercial and military actors in the ancient Near East." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The oracle describes fugitives&mdash;warriors fleeing &ldquo;from the drawn sword, from the bent bow, and from the press of battle&rdquo; (v. 15). The caravan routes that were once channels of trade have become escape routes for refugees. The inhabitants of Tema are called to show hospitality to these fleeing people&mdash;a humanitarian note within the oracle of judgment." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The climax is in verse 16-17: &ldquo;For thus the Lord said to me: Within a year, according to the years of a hired worker, all the glory of Kedar will come to an end. And the remainder of the archers of the mighty men of the people of Kedar will be few, for the LORD, the God of Israel, has spoken.&rdquo; Two things are notable: first, God gives a precise timeframe, measured in the prosaic units of a labor contract (&ldquo;years of a hired worker&rdquo;); second, the oracle is sealed with the full title &ldquo;the LORD, the God of Israel.&rdquo; This is not anonymous fate but the personal, covenantal God making a declaration that will stand." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Living the Lessons of Isaiah 21</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 21 is not primarily a chapter about ancient geopolitics. It is a chapter about the character of God, the nature of prophetic faithfulness, and the posture that his people should hold toward earthly power. The following application sections draw out the chapter&rsquo;s enduring relevance for Christian discipleship." }}
              />
            </div>

            {[
              {
                color: ROSE,
                num: "01",
                title: "No Empire Is Permanent",
                body: "Babylon&rsquo;s walls were considered impregnable; its gods were thought powerful; its military was the most feared in the world. Isaiah&rsquo;s oracle announces its fall before it occurs&mdash;and centuries later, in one night, the Medo-Persians took the city. This pattern has repeated throughout history: the Egyptian empire, the Assyrian empire, the Babylonian empire, the Persian empire, Alexander&rsquo;s empire, Rome, the Ottoman Empire, the Soviet Union. Every earthly kingdom has a fixed term. The believer&rsquo;s stability is not anchored to any human empire but to the kingdom that cannot be shaken (Hebrews 12:28). This is not political disengagement; it is theological reorientation. We work for the good of the cities we inhabit (Jeremiah 29:7) while knowing they are not our permanent home.",
              },
              {
                color: GOLD,
                num: "02",
                title: "Be a Faithful Watchman",
                body: "The watchman theology of Isaiah 21 and Ezekiel 33 raises a searching question for every believer who has received the word of God: are you faithfully announcing what God has shown you? The watchman does not decide what to say; he announces what he sees. He does not soften the warning to protect his reputation; he calls out what is coming. In a cultural moment when Christian witness is often shaped more by social acceptability than by prophetic fidelity, Isaiah 21 calls the church to watchman courage. This does not mean harshness or contempt; Isaiah himself is physically distressed by the oracle he bears. But it does mean that love for others includes the courage to say what God has said, even when it is unwelcome.",
              },
              {
                color: PURPLE,
                num: "03",
                title: "The Idols Fall with the Empire",
                body: "Isaiah 21:9 announces not just Babylon&rsquo;s fall but the shattering of her idols. This is a pattern worth meditating on. The things we trust apart from God do not merely disappoint us; when the framework that supports them collapses, they collapse with it. Wealth trusted instead of God becomes worthless when economic systems fail. Status trusted instead of God becomes meaningless when the social system that granted it dissolves. Power trusted instead of God is revealed as borrowed authority when God withdraws it. The call of this text is to examine where we have placed ultimate trust&mdash;and to dislodge any idol before it falls on us.",
              },
              {
                color: TEAL,
                num: "04",
                title: "Morning Comes&mdash;Keep Seeking",
                body: "The Dumah oracle&rsquo;s answer&mdash;&ldquo;Morning comes, and also the night&rdquo;&mdash;is not a satisfying answer, but it is an honest one. There are seasons of the Christian life that feel like deep darkness: grief, confusion, suffering, the silence of God. Isaiah&rsquo;s watchman does not pretend dawn has already come; he says morning is coming, and invites the questioner to keep inquiring. This is the posture the Psalms model in lament: honest about the darkness, persistent in seeking, trusting that the one who made morning is trustworthy. Keep seeking. Come back again. The dawn belongs to God.",
              },
              {
                color: BLUE,
                num: "05",
                title: "God Sees the Threshed and Winnowed",
                body: "One of the most tender phrases in the chapter is verse 10&rsquo;s address to Israel as &ldquo;my threshed and winnowed one.&rdquo; If you have been under pressure&mdash;beaten by circumstances, stripped of what you thought was essential, reduced to something far smaller than what you were&mdash;this phrase is for you. God calls his suffering people his own. He does not look on the threshed with contempt or distance; he calls them &ldquo;my&rdquo; people and announces what he has heard from the LORD of hosts specifically for their sake. The sovereign God who brings empires down is also the God who sees the individual suffering of his threshed and winnowed ones.",
              },
              {
                color: GREEN,
                num: "06",
                title: "Hospitality in the Crisis",
                body: "In the Arabian oracle, God commands the inhabitants of Tema to bring water to the thirsty and bread to the fugitive (vv. 13-14). Even within an oracle of geopolitical judgment, there is a command for concrete, embodied hospitality to people in crisis. This is consistent with the prophetic tradition: the same God who judges nations also commands his people to care for the displaced, the refugee, the fugitive. Isaiah 21 does not allow a clean separation between &ldquo;big picture theology&rdquo; and practical neighbor-love. The refugee fleeing the sword needs bread and water&mdash;and God tells his people to provide it.",
              },
            ].map(app => (
              <div key={app.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 26px", marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: `${app.color}20`, border: `1px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 900, fontSize: 14 }}>{app.num}</div>
                  <div>
                    <h3 style={{ color: app.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{app.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: app.body }} />
                  </div>
                </div>
              </div>
            ))}

            {/* Discussion Questions */}
            <div style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h3 style={{ color: BLUE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Discussion &amp; Reflection Questions</h3>
              <ol style={{ color: MUTED, fontSize: 14, lineHeight: 2.0, margin: 0, paddingLeft: 20 }}>
                <li dangerouslySetInnerHTML={{ __html: "Isaiah is physically distressed by the vision he receives (vv. 3-4). What does this tell you about the relationship between prophetic truth-telling and emotional engagement? What does it cost to carry a difficult message faithfully?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The watchman is commanded to announce what he sees&mdash;nothing more, nothing less. What &ldquo;watchman&rdquo; responsibilities do you carry in your family, church, or community? Where might you be tempted to soften or delay the announcement?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The oracle on Babylon declares that her idols are shattered when the city falls. Where in your own life are there things you trust in that would crumble if the systems supporting them collapsed?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;Morning comes, and also the night.&rdquo; How does this phrase speak to a current season of difficulty or uncertainty in your life? What does it look like to keep inquiring and coming back to God in that season?" }} />
                <li dangerouslySetInnerHTML={{ __html: "God calls Israel &ldquo;my threshed and winnowed one.&rdquo; Has there been a season in your life when you felt threshed? How did God&rsquo;s presence or word meet you in that season?" }} />
              </ol>
            </div>

            {/* Prayer */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>A Prayer from Isaiah 21</h3>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord of hosts, you are sovereign over every empire that rises and every power that claims to rule. You announced Babylon&rsquo;s fall before her walls were cold, and your word stood. Teach us to hold earthly kingdoms loosely, knowing they are temporary&mdash;and to hold your kingdom with our whole hearts, knowing it is eternal. Give us watchman courage: the willingness to announce what you have shown us, even when the announcement is unwelcome, even when it costs us. And in the seasons when we are threshed and winnowed, remind us that you call us &lsquo;mine.&rsquo; Morning comes. We will inquire; we will come back again. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Videos Section */}
        <section style={{ marginTop: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Isaiah 21</h2>
            <p
              style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: "Sermons, lectures, and studies on the Babylon oracle, the watchman vision, and the enduring relevance of Isaiah 21 for the church today." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 4px", lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 12, margin: 0 }}>Isaiah 21 Study</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div style={{ marginTop: 52, background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 10px" }}>Continue Your Study of Isaiah</h3>
          <p
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 18px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 21 is one chapter in a book that has shaped Christian theology more than any other Old Testament text. Explore the Servant Songs, the Comfort Oracles, and the New Creation vision in our full Isaiah guide." }}
          />
          <a href="/isaiah-guide" style={{ display: "inline-block", background: ROSE, color: "#fff", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Explore the Full Isaiah Guide &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
