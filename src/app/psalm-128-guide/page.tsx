"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GREEN;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "ps128v01", title: "Psalm 128 -- The Blessing of the God-Fearing Home" },
  { videoId: "ps128v02", title: "Songs of Ascents: Work, Family, and the Fear of the LORD" },
];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous" },
  { label: "Position", value: "Ninth of the 15 Songs of Ascents (Psalm 128)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Wisdom psalm of blessing" },
  { label: "Companion", value: "Psalm 127 -- both treat home, labor, and children" },
  { label: "Key Verse", value: "v. 1 -- Blessed is everyone who fears the LORD, who walks in his ways" },
  { label: "NT Connection", value: "Ephesians 5:22-6:4 household order; 1 Timothy 5:8 providing for one's own" },
];

const THEMES = [
  {
    color: GREEN,
    title: "Blessed Is Everyone Who Fears the LORD: Wisdom for Ordinary Life",
    body: `Psalm 128 opens with the same beatitude foundation as Psalm 112: "Blessed is everyone who fears the LORD, who walks in his ways!" But where Psalm 112 develops the God-fearer's character (generosity, fearlessness, righteousness), Psalm 128 applies the fear of the LORD to the most ordinary spheres of human life: daily work, marriage, children, and the table around which a family gathers. This is wisdom literature at its most domestic.
<br/><br/>
The phrase "everyone who fears the LORD" (kol-yere YHWH) is deliberately universal. This is not a blessing reserved for kings, priests, or prophets; it is available to "everyone" who fears the LORD and walks in his ways. The wisdom tradition consistently democratizes blessing: the flourishing life is not a matter of social rank or extraordinary achievement but of the fundamental orientation of the heart toward God expressed in the conduct of daily life. Derek Kidner notes: "Psalm 128 takes the lofty theology of the fear of the LORD and brings it home to the kitchen, the workplace, and the family table -- showing that the most exalted spiritual reality bears fruit in the most ordinary human spheres."
<br/><br/>
The pairing of "fears the LORD" with "walks in his ways" is significant. Fear of the LORD is the inner disposition; walking in his ways is its outward expression. The two cannot be separated: genuine reverence for God necessarily produces a life conformed to his commands, and a life conformed to his commands flows from genuine reverence. This is the same integration of inner and outer that James insists upon: "faith apart from works is dead" (James 2:26). The God-fearer of Psalm 128 is not merely pious in heart but faithful in conduct.
<br/><br/>
For Christians, this beatitude points to the way the gospel reaches into ordinary life. Salvation is not an escape from the mundane but the transformation of it. The believer who fears the LORD discovers that work, marriage, parenting, and table fellowship become arenas of blessing and means of grace. Colossians 3:17 captures this: "Whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him." The fear of the LORD sanctifies the everyday.`,
  },
  {
    color: GOLD,
    title: "You Shall Eat the Fruit of the Labor of Your Hands: The Dignity of Work",
    body: `Verse 2 declares: "You shall eat the fruit of the labor of your hands; you shall be blessed, and it shall be well with you." This is a profound statement about the dignity and the proper reward of honest work. To "eat the fruit of the labor of your hands" means to enjoy the produce of one's own toil -- not to have it confiscated by oppressors, not to labor in vain for others to consume, but to experience the God-designed connection between work and its fruit.
<br/><br/>
This blessing must be understood against the backdrop of the curses for disobedience in Deuteronomy 28, where one of the threatened judgments is precisely the severing of work from reward: "You shall sow much seed in the field and shall gather in little...You shall build a house, but you shall not dwell in it. You shall plant a vineyard, but you shall not enjoy its fruit" (Deuteronomy 28:38, 30). The blessing of Psalm 128:2 is the reversal of this curse: the God-fearer enjoys what the curse withholds. To eat the fruit of one's own labor is a sign of living under blessing rather than judgment.
<br/><br/>
The theology of work in Psalm 128 affirms the goodness of ordinary labor as a sphere of divine blessing. Work is not presented as a necessary evil or a consequence of the fall to be merely endured; it is a sphere in which the God-fearer experiences God's blessing in tangible form. This affirms the creation-mandate of Genesis 2:15 (humanity placed in the garden "to work it and keep it") and dignifies all honest labor as participation in God's ongoing care for creation.
<br/><br/>
Tremper Longman III observes: "The promise that one will eat the fruit of one's labor is not a prosperity guarantee but a statement about the moral order God has built into the world -- an order in which, generally and over time, faithful labor under God's blessing yields its proper fruit." Paul applies this principle in 2 Thessalonians 3:10 ("If anyone is not willing to work, let him not eat") and 1 Timothy 5:8 ("if anyone does not provide for his relatives...he has denied the faith"). The dignity of work and the provision of family are woven together as expressions of the fear of the LORD.`,
  },
  {
    color: TEAL,
    title: "Your Wife a Fruitful Vine, Your Children Olive Shoots: The Flourishing Family",
    body: `Verse 3 presents one of the most beautiful domestic images in the Psalter: "Your wife will be like a fruitful vine within your house; your children will be like olive shoots around your table." Two agricultural images -- the vine and the olive -- are applied to the flourishing of family life, each carrying rich associations in the ancient Near Eastern and biblical imagination.
<br/><br/>
The "fruitful vine" (gephen poriyah) evokes abundance, beauty, joy, and productivity. The vine is the source of wine, which "gladdens the heart of man" (Psalm 104:15), and is one of the great symbols of God's blessing on the land (Deuteronomy 8:8). To describe the wife as a fruitful vine "within your house" is to celebrate her as a source of life, joy, and flourishing at the heart of the home. The phrase is not reductive (the wife valued only for childbearing) but celebratory -- she is the flourishing center of the household's life.
<br/><br/>
The "olive shoots" (shetile zeitim) around the table picture children gathered for a meal like young olive plants springing up around an established tree. The olive tree was prized for its longevity, its oil (used for food, light, anointing, and healing), and its evergreen endurance. Young olive shoots represent vitality, future productivity, and the continuation of the family line. The image of children "around your table" places this flourishing in the concrete setting of shared meals -- the daily gathering that constitutes family life.
<br/><br/>
Calvin comments on this verse with characteristic warmth: "The Holy Spirit, in describing the blessings of the godly, does not overlook the comforts of domestic life. The presence of a faithful wife and dutiful children around the table is here counted among the chief of earthly blessings -- a foretaste of the harmony and fruitfulness that God intends for human community." For the New Testament, the household becomes a primary sphere of discipleship (Ephesians 5:22-6:4) and a microcosm of the church itself, "the household of God" (1 Timothy 3:15). The flourishing family of Psalm 128 anticipates the flourishing family of God.`,
  },
  {
    color: PURPLE,
    title: "Blessing from Zion: The Source of Domestic Flourishing",
    body: `Verses 5-6 shift the focus from the home to its source: "The LORD bless you from Zion! May you see the prosperity of Jerusalem all the days of your life! May you see your children's children! Peace be upon Israel!" The domestic blessings of verses 1-4 are not self-generated or merely natural; they flow "from Zion" -- from the place where God has chosen to dwell, where the Temple stands, where the covenant community gathers to worship.
<br/><br/>
This connection between domestic flourishing and Zion is theologically crucial. The Songs of Ascents are pilgrimage psalms, sung on the way to Jerusalem. Psalm 128 reminds the pilgrim that the blessings of home and family are bound up with the worship of God in Zion. The family does not flourish in isolation from the worshipping community; its flourishing is sustained by the blessing that flows from God's dwelling place. The private blessing of the home is connected to the public worship of God's people.
<br/><br/>
The phrase "may you see the prosperity of Jerusalem all the days of your life" links individual welfare to the welfare of the covenant community. The God-fearer's personal flourishing is not separable from the flourishing of God's people as a whole. This is the opposite of an individualistic spirituality; it binds the individual's blessing to the community's welfare and to the city where God dwells. Spurgeon: "Our personal prosperity is wrapped up with the prosperity of the church of God. He who would be blessed at home must love the gates of Zion."
<br/><br/>
The vision extends to the third generation: "May you see your children's children!" The God-fearer's hope reaches beyond his own life into the lives of his grandchildren -- a generational vision of covenant continuity. And the whole psalm closes with the same benediction as Psalm 125: "Peace be upon Israel!" (shalom al yisrael). The flourishing home, the prosperous city, the generational legacy -- all of it resolves into the shalom of God's people. For Christians, this blessing flows now from the heavenly Zion (Hebrews 12:22) and the church, and points to the new Jerusalem where God will dwell with his people forever (Revelation 21:2-3).`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "Blessed is everyone who fears the LORD, who walks in his ways! You shall eat the fruit of the labor of your hands; you shall be blessed, and it shall be well with you.",
    comment: `The psalm opens with a wisdom beatitude ('ashrei) identical in spirit to Psalm 112:1 and Psalm 1:1. "Everyone who fears the LORD" universalizes the blessing -- it is not restricted to any rank or office. "Walks in his ways" pairs the inner disposition (fear) with its outward expression (obedient conduct). Verse 2 promises the enjoyment of one's own labor: "you shall eat the fruit of the labor of your hands" reverses the Deuteronomy 28 curse in which enemies consume one's produce. The repeated assurance "you shall be blessed, and it shall be well with you" (ashreikha vetov lakh) combines the language of blessing and wellbeing. Calvin: "God here promises that the godly shall not labor in vain, but shall enjoy the fruit of their toil -- a blessing not to be despised in a world where so many labor only to have their harvest seized by others."`,
  },
  {
    ref: "v. 3",
    text: "Your wife will be like a fruitful vine within your house; your children will be like olive shoots around your table.",
    comment: `Two agricultural images celebrate domestic flourishing. The "fruitful vine" (gephen poriyah) pictures the wife as a source of abundance, joy, and life at the heart of the household ("within your house" -- the inner chambers of the home). The "olive shoots" (shetile zeitim) picture children as young plants springing up around the family table, full of vitality and promise for the future. The olive's associations -- longevity, oil, endurance, evergreen vitality -- make it an apt image for the continuation and flourishing of the family line. Kidner: "The table is the place where these blessings are most visibly enjoyed -- the daily gathering of a flourishing family is itself a sacrament of God's goodness."`,
  },
  {
    ref: "v. 4",
    text: "Behold, thus shall the man be blessed who fears the LORD.",
    comment: `Verse 4 functions as a summary and a seal on the preceding promises. "Behold" (hinneh) is an attention-marker: look at this, take it in. "Thus" (ken) points back to everything described in verses 1-3 -- the enjoyment of labor, the fruitful wife, the olive-shoot children. All of this is the portrait of the blessing that comes to "the man who fears the LORD." The verse reiterates the central thesis: the fear of the LORD is the root, and these domestic and vocational blessings are the fruit. The blessing is not arbitrary or magical; it flows from the moral and spiritual order God has established, in which reverence for God orders all of life rightly.`,
  },
  {
    ref: "vv. 5-6",
    text: "The LORD bless you from Zion! May you see the prosperity of Jerusalem all the days of your life! May you see your children's children! Peace be upon Israel!",
    comment: `The closing benediction shifts from description to prayer, and from the home to its source. "The LORD bless you from Zion" locates the source of all the preceding blessings in God's dwelling place -- domestic flourishing flows from the worship of God in the covenant community. "The prosperity of Jerusalem" binds individual welfare to the welfare of God's people; one cannot flourish in isolation from the flourishing of the church. "May you see your children's children" extends the vision to the third generation -- covenant continuity across the generations. The final "Peace be upon Israel!" (shalom al yisrael) echoes Psalm 125:5, resolving the whole psalm into the comprehensive shalom of God's people. The personal, the communal, and the generational all converge in this benediction.`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "Sanctifying the Ordinary: The Fear of the LORD in Daily Life",
    body: `Psalm 128's great contribution to the Christian life is its insistence that the fear of the LORD bears fruit not primarily in dramatic spiritual experiences but in the faithful conduct of ordinary life -- work, marriage, parenting, shared meals. For believers tempted to think that "real" spirituality happens only in extraordinary moments of prayer or ministry, Psalm 128 is a corrective: the God-fearer's blessing is most visible at the family table and in the satisfaction of honest labor.
<br/><br/>
This has profound implications for how we evaluate a faithful life. The world measures success by achievement, wealth, fame, or influence. Psalm 128 measures blessing by the enjoyment of honest work, the flourishing of family relationships, and the experience of peace within the covenant community. These are blessings available to "everyone who fears the LORD" -- not just the spiritually elite. The ordinary faithful life, lived in the fear of the LORD, is itself a blessed life.
<br/><br/>
<em>Prayer prompt</em>: Lord, teach me to fear you in the ordinary spheres of my life -- in my work, my home, my relationships, my daily routines. Let me not despise the everyday or hunger only for the dramatic. Help me to eat the fruit of my labor with gratitude, to cherish the people around my table, and to experience your blessing in the ordinary faithfulness of walking in your ways. Bless me from Zion, and let my flourishing be bound up with the flourishing of your people. Amen.`,
  },
  {
    color: GOLD,
    title: "A Theology of Work: Eating the Fruit of Your Labor",
    body: `Verse 2's promise -- "you shall eat the fruit of the labor of your hands" -- offers a robust theology of work that resists two distortions. The first distortion despises work as a mere necessity, something to be endured until the weekend or retirement. The second distortion idolizes work, making career achievement the source of identity and meaning. Psalm 128 dignifies work without idolizing it: work is a sphere of God's blessing, and its fruit is to be enjoyed with gratitude, but the work itself flows from and serves the fear of the LORD.
<br/><br/>
The promise that the God-fearer will "eat the fruit" of his labor also carries a note of justice. In a fallen world, the connection between work and reward is often severed -- the laborer is exploited, the harvest is seized, the worker toils while others consume. Psalm 128's blessing is partly the restoration of this just connection: under God's blessing, the worker enjoys what he has produced. This should shape the Christian's concern for just economic structures in which workers genuinely benefit from their labor.
<br/><br/>
Practically, this means approaching work as a God-fearer: doing honest work, enjoying its legitimate fruit with thanksgiving, refusing to make work an idol, and caring about justice for fellow workers. Colossians 3:23-24 provides the NT frame: "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward." Work done in the fear of the LORD is transformed from drudgery into worship.`,
  },
  {
    color: TEAL,
    title: "The Family Table as a Place of Blessing",
    body: `Psalm 128 places the family table at the center of its vision of blessing: the fruitful vine within the house, the olive shoots around the table. In an age of fragmented schedules, screen-saturated meals, and the erosion of shared family time, this image is a quiet but powerful call to recover the table as a place of blessing, formation, and joy.
<br/><br/>
The shared meal is not incidental to family life; it is one of its central sacraments. Around the table, conversation happens, relationships are formed, values are transmitted, gratitude is expressed, and the bonds of family are strengthened. Psalm 128's picture of children like olive shoots "around your table" is a vision of family life at its most ordinary and most blessed -- the daily gathering that constitutes the rhythm of a flourishing household.
<br/><br/>
For Christians, the family table also points beyond itself to the Lord's Table, where the family of God gathers to be fed by Christ. The flourishing of the human family around its table is a sign of the flourishing of God's family around his table. <em>Practical challenge</em>: For families, consider what it would take to recover the shared meal as a regular, protected, screen-free time of conversation and connection. For those without children or extended family, consider how to extend table fellowship to the broader family of God -- the lonely, the single, the widowed, the stranger. The blessing of the table is meant to be shared.`,
  },
  {
    color: PURPLE,
    title: "Bless You from Zion: Binding Personal Flourishing to the Church",
    body: `The benediction of verses 5-6 -- "The LORD bless you from Zion!" -- makes a claim that runs counter to the individualism of much contemporary spirituality: personal flourishing is bound up with the worshipping community. The blessings of home, work, and family do not flow to the isolated individual; they flow "from Zion," from the place where God dwells among his gathered people.
<br/><br/>
This challenges the common modern assumption that one can flourish spiritually in isolation -- the "spiritual but not religious" disposition that seeks God apart from the community of God's people. Psalm 128 insists that the blessing comes from Zion, and that the believer's welfare is tied to "the prosperity of Jerusalem." The health of your home is connected to the health of your church; the flourishing of your family is connected to the flourishing of God's people.
<br/><br/>
Hebrews 12:22-24 declares that Christians have come "to Mount Zion and to the city of the living God, the heavenly Jerusalem...and to the assembly of the firstborn who are enrolled in heaven." The Zion from which blessing flows is now the heavenly Zion, accessed through Christ and embodied in his church. <em>Application</em>: invest in the worshipping community, not merely as a duty but as the source of blessing for your home and family. The believer who would see their children's children walk in faith must love the gates of Zion and bind their family's life to the people of God.`,
  },
];

export default function Psalm128Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #071507 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 128</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; 6 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Blessed Is Everyone Who Fears the LORD
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A Song of Ascents that brings the fear of the LORD home to ordinary life -- the dignity of honest labor, the fruitful vine of a flourishing wife, the olive shoots of children around the table, and the blessing that flows from Zion to the third generation.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;Your wife will be like a fruitful vine within your house; your children will be like olive shoots around your table.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 128:3</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 128</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 128 is the ninth of the fifteen Songs of Ascents and forms a natural pair with Psalm 127, which precedes it. Both psalms treat the themes of home, labor, and children, but from complementary angles: Psalm 127 emphasizes that without the LORD all human building is in vain ("Unless the LORD builds the house, those who build it labor in vain"), while Psalm 128 portrays the positive blessing that flows to the household of the one who fears the LORD. Together they form a meditation on the God-fearing home.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The structure of Psalm 128 is straightforward and symmetrical. It opens with a beatitude (v. 1) establishing the fear of the LORD as the root of all that follows. It then describes the blessings of the God-fearer in two spheres: vocational (v. 2, the enjoyment of one's labor) and domestic (v. 3, the flourishing wife and children). A summary verse seals these promises (v. 4), and the psalm closes with a priestly benediction invoking blessing from Zion, the prosperity of Jerusalem, the sight of grandchildren, and peace upon Israel (vv. 5&ndash;6).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm belongs to the wisdom tradition, sharing the beatitude form and the theme of the fear of the LORD with Psalms 1, 112, and 127. But Psalm 128 is distinctive in its concrete domesticity: it brings the lofty theology of the fear of the LORD down to the kitchen table, the workplace, and the family meal. This is wisdom applied to the most ordinary spheres of human life, affirming that the fear of the LORD bears its fruit not primarily in extraordinary religious experiences but in the faithful conduct of daily life.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `A crucial feature of the psalm is its binding of domestic flourishing to Zion. The blessings of home and family are not self-generated or merely natural; they flow "from Zion" (v. 5) &mdash; from the place where God dwells among his worshipping people. The Songs of Ascents are pilgrimage psalms, and Psalm 128 reminds the pilgrim that the welfare of the home is connected to the worship of God in the covenant community. The private and the public, the domestic and the liturgical, are woven together.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christians, Psalm 128 anticipates the New Testament's vision of the household as a sphere of discipleship (Ephesians 5:22&ndash;6:4) and a microcosm of "the household of God" (1 Timothy 3:15). The blessing that flows "from Zion" now flows from the heavenly Zion (Hebrews 12:22) through Christ and his church. And the closing benediction, "Peace be upon Israel," finds its fullest meaning in the peace Christ has made through his blood, bringing the whole family of God &mdash; Jew and Gentile &mdash; into the flourishing household of the Father.` }} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 128 shapes work, family, and the worshipping community.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
