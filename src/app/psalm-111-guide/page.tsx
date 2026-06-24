"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = TEAL;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [];

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
  { label: "Form", value: "Hebrew acrostic -- each half-verse begins with successive letter of the alphabet" },
  { label: "Collection", value: "Book V (Psalms 107-150)" },
  { label: "Genre", value: "Hymn of praise with wisdom conclusion" },
  { label: "Companion", value: "Psalm 112 -- shares acrostic structure and many keywords" },
  { label: "Key Verse", value: "v. 10 -- The fear of the LORD is the beginning of wisdom" },
  { label: "NT Connection", value: "Luke 1:49, 54 (Magnificat echoes vv. 9, 5); Revelation 15:3 great and wonderful are your deeds" },
];

const ACROSTIC_TABLE = [
  { letter: "Aleph", text: "Praise the LORD! I will give thanks to the LORD with my whole heart" },
  { letter: "Bet", text: "...in the company of the upright, in the congregation" },
  { letter: "Gimel", text: "Great are the works of the LORD" },
  { letter: "Dalet", text: "...studied by all who delight in them" },
  { letter: "He", text: "Full of splendor and majesty is his work" },
  { letter: "Vav", text: "...and his righteousness endures forever" },
  { letter: "Zayin", text: "He has caused his wondrous works to be remembered" },
  { letter: "Chet", text: "...the LORD is gracious and merciful" },
  { letter: "Tet", text: "He provides food for those who fear him" },
  { letter: "Yod", text: "...he remembers his covenant forever" },
];

const THEMES = [
  {
    color: TEAL,
    title: "The Acrostic Form: Completeness as a Theological Statement",
    body: `Psalm 111 is an acrostic poem: each of its 22 half-verses begins with a successive letter of the Hebrew alphabet, from aleph to tav. This is not mere literary decoration; the acrostic form makes a theological statement about comprehensiveness. To praise God from A to Z (or aleph to tav) is to praise him with everything -- with the full vocabulary of human language, with all that the structured human mind can order and express.
<br/><br/>
Acrostic psalms in the Psalter (9, 10, 25, 34, 37, 111, 112, 119, 145) consistently use the form to express totality: Psalm 119 uses every letter of the alphabet to declare comprehensive dependence on God's word; Psalm 37 uses the acrostic to present a complete picture of wisdom and folly; Psalms 111-112 use parallel acrostics to present God's character (111) and the blessed person who reflects that character (112). The alphabet represents the totality of human expression; using the whole alphabet to praise God is a way of saying: there is no part of language adequate to contain this praise, so we use it all.
<br/><br/>
Calvin observes: "The variety and ordered form of this psalm is designed to aid the memory as much as to delight the ear. The ancient Hebrews understood that what is difficult to retain must be made memorable, and nothing aids memory more than beautiful structure." The acrostic form is therefore pedagogical as well as aesthetic: this is a psalm designed to be learned by heart, to be internalized as the architecture of praise.
<br/><br/>
For the Christian, the completeness of acrostic praise points toward the eschatological worship of Revelation, where the redeemed "sing the song of Moses...and the song of the Lamb, saying, Great and amazing are your deeds, O Lord God the Almighty! Just and true are your ways, O King of the nations!" (Revelation 15:3). The acrostic rehearsal of God's works in time is a preparation for the unending, comprehensive praise of eternity.`,
  },
  {
    color: PURPLE,
    title: "Great Are the Works of the LORD: The Content of Praise",
    body: `Verses 2-8 form the main body of the psalm, cataloguing the specific attributes of God's works that make them worthy of praise. "Great are the works of the LORD, studied by all who delight in them. Full of splendor and majesty is his work, and his righteousness endures forever." The "works" (ma'asim) of the LORD encompass both his works in creation and his works in salvation history -- the Exodus (alluded to in v. 6 "he has shown his people the power of his works"), the covenant (v. 9), the redemption (v. 9).
<br/><br/>
The verb "studied" (derusim -- from darash, to seek, to inquire) is significant: it is the same verb used for careful Torah study and for seeking the LORD in prayer. The works of the LORD are not to be casually observed but carefully studied, pondered, sought out. The one who "delights in them" (hephets) is one whose pleasure and attention is captured by God's activity in the world. This is the disposition of Sabbath meditation (Psalm 92) and of the blessed man who meditates on God's law day and night (Psalm 1:2).
<br/><br/>
The attributes of God's works listed across verses 3-8 form a character portrait of the LORD himself: splendor and majesty (v. 3), righteousness that endures forever (v. 3), gracious and merciful (v. 4), faithful and just (v. 7), upright (v. 8). Tremper Longman III notes: "Psalm 111 blurs the distinction between God's works and God's character -- the works exhibit the character, and studying the works is a means of knowing the Worker." This is the epistemological structure of natural revelation (Romans 1:20) and of salvation history: God reveals himself through what he does.
<br/><br/>
The catalog of God's works in Psalm 111 finds its NT fulfillment in the person of Jesus, who is described as "the exact imprint of his nature" (Hebrews 1:3) and in whom "the fullness of God was pleased to dwell" (Colossians 1:19). The works of the LORD that the psalmist meditates upon -- provision, redemption, covenant, justice -- are all enacted in the incarnation, ministry, death, and resurrection of Christ.`,
  },
  {
    color: GOLD,
    title: "He Remembers His Covenant: Hesed and Emet in Perpetuity",
    body: `Verse 5 declares: "He provides food for those who fear him; he remembers his covenant forever." Verse 9 elaborates: "He sent redemption to his people; he has commanded his covenant forever. Holy and awesome is his name!" These two verses on covenant are the theological heart of Psalm 111, and they explain the psalmist's comprehensive praise: the works of the LORD are praiseworthy because they are covenantal -- they express the committed, faithful love of a God who has bound himself to his people.
<br/><br/>
The phrase "remembers his covenant" (zakar berito) appears throughout the OT at moments of rescue and restoration (Genesis 9:15-16; Exodus 2:24; Leviticus 26:42; Psalm 105:8; 106:45). God's "remembering" is not mere recollection but active covenant faithfulness -- he acts on his commitment. The covenant is not a historical document that God occasionally consults; it is the living framework of his relationship with his people, which he has "commanded forever" (v. 9 -- tzivvah le'olam).
<br/><br/>
The provision of "food for those who fear him" in verse 5 almost certainly evokes the manna in the wilderness (Exodus 16) and the broader Exodus feeding narrative -- God literally providing daily sustenance for his people out of nothing. But it also points forward to Jesus's feeding of the five thousand (a new Exodus miracle) and to the Lord's Supper, where the covenant is enacted in bread and wine. The command in verse 9 -- "Holy and awesome is his name" -- becomes the central designation of the God who in Christ sent "redemption to his people" (v. 9, using the Hebrew ge'ullah, the very technical term for kinsman-redemption used of Boaz and Ruth).`,
  },
  {
    color: ROSE,
    title: "The Fear of the LORD Is the Beginning of Wisdom: The Axiom of All Knowledge",
    body: `Verse 10 -- "The fear of the LORD is the beginning of wisdom; all those who practice it have a good understanding. His praise endures forever!" -- is the psalm's climax and one of the most important theological statements in all of Scripture. It appears in nearly identical form in Proverbs 1:7, Proverbs 9:10, Job 28:28, and Psalm 112:1 (reversed: "Blessed is the man who fears the LORD"). This repetition across multiple genres and books marks it as a foundational axiom of biblical epistemology.
<br/><br/>
The "fear of the LORD" (yirat YHWH) is not slavish terror but reverential awe -- the appropriate response of a creature who has encountered the holy Creator. It encompasses wonder, humility, moral seriousness, and trust. Proverbs consistently treats it as the starting point of wisdom precisely because wisdom in the biblical sense is not merely intellectual competence but moral and relational skill -- knowing how to live as a human being in relationship with God and neighbor. And that knowledge begins with the recognition of who God is: the LORD, the holy Creator, the covenant God who made and redeemed his people.
<br/><br/>
The word "beginning" (reshit) in "beginning of wisdom" can mean both "first step" (wisdom begins with fear of the LORD) and "chief part" (the most important element of wisdom is fear of the LORD). Both meanings are true: fear of the LORD is both where wisdom starts and what wisdom consists of most essentially. Calvin: "The person who begins with the fear of the LORD begins correctly, for all other knowledge is rightly ordered only when it is subordinated to the knowledge of God. Wisdom that ignores God is not wisdom but cleverness -- and cleverness divorced from reverence is the instrument of destruction."
<br/><br/>
In the NT, Christ is identified as "the wisdom of God" (1 Corinthians 1:24) and as the one "in whom are hidden all the treasures of wisdom and knowledge" (Colossians 2:3). The fear of the LORD that is the beginning of wisdom is therefore fulfilled in the personal knowledge of Jesus Christ -- in whom the character of the LORD described in Psalm 111 (gracious, merciful, faithful, righteous) becomes incarnate and available to personal relationship. "This is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent" (John 17:3).`,
  },
  {
    color: GREEN,
    title: "I Will Give Thanks with My Whole Heart: Wholehearted Corporate Praise",
    body: `The psalm opens with "I will give thanks to the LORD with my whole heart, in the company of the upright, in the congregation." Three elements are immediately specified: (1) the individual heart fully engaged; (2) the company of the upright (a specific community); (3) the congregation (the assembled people of God). Personal worship, community worship, and corporate worship are presented together as the natural habitat of genuine thanksgiving.
<br/><br/>
The phrase "whole heart" (kol-levav) signals the completeness that the acrostic form also signals structurally. Praise from the "whole heart" is not divided or partially attentive; it is the soul fully gathered and directed toward God. This is the opposite of the worship Jesus criticizes in Matthew 15:8 -- "This people honors me with their lips, but their heart is far from me." The acrostic form of Psalm 111 is an attempt to express in structure what "whole heart" means in content: everything ordered and directed toward God.
<br/><br/>
The communal setting is equally important: thanksgiving is not a private spiritual transaction but a communal act. The "company of the upright" (sod yesharim) is the intimate gathering of those who walk in integrity; the "congregation" (qahal) is the larger assembly. Both contexts are appropriate for thanksgiving, and both are necessary: the intimate community where lives are known and testimonies are shared, and the gathered assembly where the whole people of God praise together.
<br/><br/>
Hebrews 13:15-16 calls believers to "offer to God a sacrifice of praise, that is, the fruit of lips that acknowledge his name" -- in the context of "not neglecting to meet together." The wholehearted, communal, comprehensive praise of Psalm 111 is the model for NT worship: personal conviction expressed in communal form, covering all of God's works from A to Z, rooted in the fear of the LORD that is the beginning of wisdom.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "Praise the LORD! I will give thanks to the LORD with my whole heart, in the company of the upright, in the congregation.",
    comment: `The opening "Hallelujah" (Praise the LORD) is a liturgical summons, standard in the Hallel collection. The psalmist immediately personalizes it: "I will give thanks" (odeh) -- first person singular commitment. "With my whole heart" (bekol-levav) is a total commitment formula appearing in Deuteronomy's call to love God with all one's heart (Deuteronomy 6:5) and throughout the Psalter (9:1; 86:12; 138:1). The communal settings specified -- "company of the upright" (sod yesharim, intimate circle) and "congregation" (qahal, larger assembly) -- establish that this wholehearted personal praise will be expressed in both intimate and public communal contexts.`,
  },
  {
    ref: "vv. 2-3",
    text: "Great are the works of the LORD, studied by all who delight in them. Full of splendor and majesty is his work, and his righteousness endures forever.",
    comment: `"Great" (gedolim) and "studied by all who delight in them" (derusim lekhol-hephetsam) together establish the proper posture toward God's works: attentive delight, careful inquiry. The verb darash (to study, seek) is the standard term for diligent Torah study and for seeking God in prayer. It implies active, sustained engagement, not passive observation. "Splendor and majesty" (hod-vehadar) are throne-room vocabulary -- the same terms used of God's heavenly appearance in Psalms 96:6 and 104:1. "Righteousness endures forever" (tsidqato omedet la'ad) is the acrostic's first appearance of a key word that will recur in both Psalm 111 and its companion Psalm 112.`,
  },
  {
    ref: "vv. 4-5",
    text: "He has caused his wondrous works to be remembered; the LORD is gracious and merciful. He provides food for those who fear him; he remembers his covenant forever.",
    comment: `"Wondrous works" (niphla'otav) is the standard OT term for divine miracles and salvific acts, especially the Exodus plagues and sea-crossing. The LORD's character is summarized as "gracious and merciful" (channun verachum) -- the exact pair from the divine name-proclamation at Sinai (Exodus 34:6), the most concentrated statement of God's character in the OT. "Provides food" (natan) -- the manna allusion -- and "remembers his covenant" together form a single theological unit: provision flows from covenant faithfulness. Derek Kidner: "The food and the covenant are not two separate blessings but one: the food is covenantal provision, and the covenant is the reason for all provision."`,
  },
  {
    ref: "vv. 6-8",
    text: "He has shown his people the power of his works, in giving them the heritage of the nations. The works of his hands are faithful and just; all his precepts are trustworthy; they are established forever and ever, to be performed with faithfulness and uprightness.",
    comment: `"Heritage of the nations" (nachalat goyim) refers to the conquest of Canaan -- God demonstrating his power through giving Israel the land of the Canaanites. This was "showing the power of his works" in the most concrete possible way: real land, real history, real displacement of real peoples. Verses 7-8 shift from historical works to the character of God's "precepts" (piqqudim -- detailed instructions, a term associated with Torah). The precepts share the character of the works: "faithful and just," "trustworthy," "established forever," "to be performed with faithfulness and uprightness." God's word and God's deeds are consistent expressions of the same character.`,
  },
  {
    ref: "v. 9",
    text: "He sent redemption to his people; he has commanded his covenant forever. Holy and awesome is his name!",
    comment: `"Sent redemption" (shalaach ge'ulah) uses the technical term for kinsman-redemption (ge'ullah), evoking both the Exodus and the kinsman-redeemer institution of Ruth and Boaz. God acts as the people's nearest relative, paying the price to restore them to their heritage. "Commanded his covenant forever" (tzivvah le'olam berito) is the covenant's permanent, irrevocable character: God has not merely promised but commanded (as an act of sovereign will) that his covenant shall stand forever. "Holy and awesome is his name" (qadosh venora' shemo) culminates the character portrait: the God who is gracious and merciful (v. 4) is also holy and awesome -- attributes that must be held together.`,
  },
  {
    ref: "v. 10",
    text: "The fear of the LORD is the beginning of wisdom; all those who practice it have a good understanding. His praise endures forever!",
    comment: `The psalm's climactic verse and the closing word of the acrostic. "Fear of the LORD" (yirat YHWH) is reverential awe, not terror -- the creature's appropriate response to the holy Creator. "Beginning" (reshit) means both the starting point and the chief part. "Good understanding" (sekhel tov) is practical wisdom -- the ability to navigate life skillfully and righteously, to read situations correctly and act appropriately. "All those who practice it" (le'kol-oseihem) -- wisdom is not merely theoretical but enacted; those who fear the LORD show it in practice. The closing "his praise endures forever" (le'olam) brings the acrostic full circle: the God whose works endure forever deserves praise that endures forever.`,
  },
];

const APPLICATIONS = [
  {
    color: TEAL,
    title: "Studying God's Works: Cultivating Delight in the Divine",
    body: `Psalm 111:2 -- "Great are the works of the LORD, studied by all who delight in them" -- is an invitation to a specific spiritual practice: the study of God's works as an act of worship. This practice is broader than Bible study (though it includes it) and broader than prayer (though it fuels it). It includes the observation of creation (which declares God's glory, Psalm 19:1), the study of church history (which exhibits God's faithfulness across centuries), and the meditation on personal testimony (which provides the most intimate evidence of God's activity).
<br/><br/>
The word "delight" (chephets) is crucial: this study is not duty-driven drudgery but pleasure-driven inquiry. The person who truly delights in God's works cannot stop studying them -- their attention is captured, their imagination engaged, their soul fed. This is the disposition that produces the whole-heart praise of verse 1: when the heart is genuinely delighted by what it has seen of God, praise becomes natural rather than forced.
<br/><br/>
<em>Practical disciplines</em>: (1) Keep a running list of "works of the LORD" you have observed -- in Scripture, in history, in your own life. Review it regularly. (2) Read church history not as a record of human achievement but as the story of God's works across time. (3) Practice the discipline of noticing: what has God done today that I might have passed by without attention? The "studied by all who delight in them" is a lifelong practice.`,
  },
  {
    color: PURPLE,
    title: "Holy and Awesome Is His Name: Holding Mercy and Majesty Together",
    body: `Psalm 111 presents both the intimate ("gracious and merciful," v. 4; "provides food," v. 5) and the transcendent ("holy and awesome is his name," v. 9) sides of God's character -- and holds them together without collapsing either into the other. Many Christian traditions lose this balance: some emphasize God's transcendence so heavily that his intimate provision and covenantal love recede; others emphasize his mercy and nearness so heavily that his holiness and awesomeness are forgotten.
<br/><br/>
The psalmist's acrostic comprehensiveness refuses both reductions. The God who is "gracious and merciful" is also "holy and awesome." The God who "provides food" also has a name that is "holy and awesome." The comprehensive praise of the acrostic requires holding both, because the living God is both. This balance is why the psalm climaxes with "the fear of the LORD is the beginning of wisdom" -- the awe that holds together mercy and majesty is precisely the posture that wisdom requires.
<br/><br/>
For worship planning in the church: Psalm 111 suggests that authentic worship should regularly encompass both intimacy (thanksgiving for specific provisions, covenant love, personal care) and awe (the holiness, majesty, and awesomeness of the name). A worship diet that is exclusively one or the other is deficient by the standard of the acrostic psalm.`,
  },
  {
    color: GOLD,
    title: "The Fear of the LORD in a Post-Fear Culture",
    body: `Psalm 111:10 -- "The fear of the LORD is the beginning of wisdom" -- is one of the most countercultural statements in Scripture for the contemporary West, which has systematically eliminated reverence, awe, and sacred trembling from its public life. The combination of therapeutic culture (which flattens all emotion toward comfort), democratic culture (which flattens all authority toward equality), and consumer culture (which positions the customer as the authority over all goods including spiritual goods) produces a climate profoundly hostile to genuine "fear of the LORD."
<br/><br/>
Yet Psalm 111 insists that this fear is not one option among many but the beginning -- the essential prerequisite -- of wisdom. Without it, all other knowledge is misordered. The sophisticated person who knows everything about psychology, economics, history, and literature but does not fear the LORD has, by the psalm's definition, not yet begun to be wise. This is a radical claim, and it requires the church to be comfortable making it in a culture that will find it offensive.
<br/><br/>
Recovering fear of the LORD practically means: recovering the experience of corporate worship as encounter with the holy (Isaiah 6; Revelation 1 -- falling as though dead before the risen Christ); recovering the practice of confession as honest moral reckoning before the holy God; recovering the theological weight of God's wrath and holiness alongside his love; and recovering the practice of Sabbath, which creates the contemplative space in which awe can develop. C.S. Lewis's image of Aslan -- "he is not a tame lion" -- captures the NT version: Jesus is kind and merciful and inviting, and he is also the one before whom John falls as though dead.`,
  },
  {
    color: GREEN,
    title: "In the Congregation: Why Psalm 111 Requires Community",
    body: `The psalmist commits to thanking God "in the company of the upright, in the congregation" (v. 1). This communal framing of personal thanksgiving is not incidental; it is structural. The acrostic psalm was designed to be learned, sung, and recited together -- its form itself reflects the communal character of its content. Praise from the "whole heart" in the "whole alphabet" of human expression belongs in the "whole company" of God's people.
<br/><br/>
The NT develops this communal character of worship explicitly. Hebrews 10:24-25 ties corporate gathering directly to the practice of encouragement and faithfulness: "Let us consider how to stir up one another to love and good works, not neglecting to meet together...but encouraging one another." Ephesians 5:19-20 presents corporate worship as mutual formation: "addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart, giving thanks always and for everything."
<br/><br/>
Psalm 111's "company of the upright" suggests something smaller and more intimate than the full congregation -- a gathering where lives are known, where the specific works of God in individual lives can be shared and received as testimonies that deepen communal thanksgiving. This points toward the small group, the home church, the community of close disciples where "studied by all who delight in them" becomes a shared and mutually enriching practice. The acrostic from A to Z was not written to be praised alone.`,
  },
];

export default function Psalm111Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #001a1a 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 111</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Hebrew Acrostic &bull; Book V &bull; 10 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Praise the LORD! I Will Give Thanks with My Whole Heart
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A Hebrew acrostic hymn cataloguing the works of the LORD from aleph to tav -- his provision, his covenant, his redemption, his holy name -- culminating in the foundational axiom of all biblical wisdom: the fear of the LORD is the beginning.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;The fear of the LORD is the beginning of wisdom; all those who practice it have a good understanding. His praise endures forever!&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 111:10</span>
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 111</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 111 is a Hebrew acrostic -- each of its 22 half-verses begins with a successive letter of the Hebrew alphabet, from aleph to tav. This elegant literary form is not merely decorative; it signals comprehensiveness and completeness: the psalmist is praising God with the whole alphabet of human language, with everything ordered thought can express. The psalm belongs to Book V (Psalms 107&ndash;150) and forms a pair with Psalm 112, which uses the same acrostic structure to portrait the blessed life of the God-fearer.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The structure of the psalm is straightforward: a personal commitment to wholehearted communal praise (v. 1), followed by a sustained catalogue of God's works and character (vv. 2&ndash;9), climaxing in the wisdom axiom that is both conclusion and foundation: "The fear of the LORD is the beginning of wisdom" (v. 10). The psalm moves from praise to content to wisdom, establishing that authentic praise is grounded in knowledge of God's works and issues in the fear that constitutes wisdom.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The character of God's works as described in verses 2&ndash;9 draws heavily on the Exodus tradition: provision of food (manna, v. 5), showing the power of his works in giving the heritage of nations (conquest, v. 6), sending redemption (v. 9). The divine name-proclamation of Exodus 34:6 is echoed explicitly in verse 4 ("gracious and merciful"). The psalmist is not praising an abstract divine principle but the specific historical God who acted in the Exodus, made a covenant, and commanded that covenant to stand forever.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The wisdom climax of verse 10 connects Psalm 111 to the broader wisdom tradition of the OT. The identical affirmation appears in Proverbs 1:7, 9:10, and Job 28:28, and is reflected in Psalm 112:1. Its repetition across genres signals its foundational status: the fear of the LORD is not one item in wisdom's curriculum but its prerequisite &mdash; without it, no genuine wisdom is possible; with it, all other knowledge is rightly ordered.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For NT readers, Christ is identified as "the wisdom of God" (1 Corinthians 1:24) and the one "in whom are hidden all the treasures of wisdom and knowledge" (Colossians 2:3). The fear of the LORD that is the beginning of wisdom is fulfilled in the personal knowledge of Jesus, who embodies the character described in Psalm 111: gracious, merciful, righteous, the one through whom "he sent redemption to his people" (v. 9) and in whom "the covenant forever" is ratified in his blood (Luke 22:20).` }} />

            {/* Acrostic table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>The Acrostic Structure (first 10 letters)</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Letter", "Text (ESV, condensed)"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ACROSTIC_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: GOLD, fontFamily: "sans-serif", fontWeight: 700, whiteSpace: "nowrap" }}>{row.letter}</td>
                        <td style={{ padding: "0.75rem", color: TEXT, fontStyle: "italic" }}>{row.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Details */}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 111 shapes worship, wisdom, and the community of praise.</p>
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
