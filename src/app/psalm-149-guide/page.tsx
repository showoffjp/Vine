"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A New Song in the Assembly of the Godly",
    body: "Psalm 149 is the fourth of the five great &lsquo;Hallelujah&rsquo; psalms (146&ndash;150) that bring the entire Psalter to its triumphant close. It opens with the call to &lsquo;sing to the LORD a new song&rsquo; &mdash; the fresh praise of a redeemed people who have seen God act anew in their midst. This is not solitary devotion but the worship of a gathered community: his praise is to ring out &lsquo;in the assembly of the godly.&rsquo; The psalm gives us a vivid picture of the joy of God&rsquo;s people in their Maker and their King, a joy so full that it overflows into dancing, music, and exultation. Yet it ends on a startling note of holy warfare, with high praises in the mouth and a two-edged sword in the hand. It is a psalm of exuberant gladness and of fierce, God-honoring zeal.",
  },
  {
    heading: "Glad in Their Maker, Rejoicing in Their King",
    body: "&lsquo;Let Israel be glad in his Maker; let the children of Zion rejoice in their King&rsquo; (149:2). Here is the double ground of the people&rsquo;s joy. God is their Maker &mdash; not only the one who formed the world, but the one who fashioned Israel into a nation and called them into being as his own. And God is their King &mdash; the true and reigning sovereign of Zion. The praise of Psalm 149 is the gladness of a people who know whose they are: made by God and ruled by God. Their joy is not rooted in their circumstances but in the unshakable reality of the One who created and reigns over them. To be glad in your Maker and to rejoice in your King is to find the deepest spring of joy that exists.",
  },
  {
    heading: "The LORD Takes Pleasure in His People",
    body: "At the very center of the psalm stands one of the tenderest statements in all of Scripture: &lsquo;For the LORD takes pleasure in his people; he adorns the humble with salvation&rsquo; (149:4). The praise flows both ways. The people delight in their God, and astonishingly, their God delights in them. The sovereign Maker and King of Zion takes pleasure in his people &mdash; he is not indifferent or merely tolerant, but glad over them, as a bridegroom rejoices over his bride (cf. Zephaniah 3:17). And to the humble &mdash; the lowly, the meek who depend on him &mdash; he gives the most beautiful of all adornments: salvation itself. He clothes and beautifies the humble with his rescue.",
  },
  {
    heading: "High Praises and a Two-Edged Sword",
    body: "The psalm rises to a fierce climax: &lsquo;Let the high praises of God be in their throats and two-edged swords in their hands, to execute vengeance on the nations and punishments on the peoples&rsquo; (149:6&ndash;7). To modern ears this can sound alarming, but the Christian tradition has read this not as a charter for physical violence but as a picture of spiritual warfare. The &lsquo;two-edged sword&rsquo; is supremely the word of God (Hebrews 4:12; Ephesians 6:17; Revelation 1:16), and the church&rsquo;s weapons are not carnal but mighty through God to pull down strongholds (2 Corinthians 10:3&ndash;5). The people of God conquer not with steel but with praise and the Word, binding the powers and proclaiming the King who reigns. This is the &lsquo;honor for all his godly ones.&rsquo;",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t-newsong",
    title: "Sing to the LORD a New Song",
    color: GOLD,
    body: "&lsquo;Sing to the LORD a new song, his praise in the assembly of the godly!&rsquo; (149:1). The &lsquo;new song&rsquo; is a recurring note in the Psalms (33:3; 40:3; 96:1; 98:1) and is always the response to a fresh act of God&rsquo;s salvation. When God does something new, his people must sing something new; old mercies do not call for stale praise. And this new song is not sung alone but &lsquo;in the assembly of the godly&rsquo; &mdash; the gathered congregation of God&rsquo;s faithful people. Worship here is corporate, the shared voice of a redeemed community. The fullest expression of the new song is found in Revelation, where the redeemed sing a new song before the throne and the Lamb (Revelation 5:9; 14:3), the praise of those bought by his blood.",
  },
  {
    id: "t-makerking",
    title: "Glad in Their Maker, Rejoicing in Their King",
    color: TEAL,
    body: "&lsquo;Let Israel be glad in his Maker; let the children of Zion rejoice in their King&rsquo; (149:2). The joy of God&rsquo;s people rests on who God is to them: their Maker and their King. As Maker, he formed them into a people, calling Israel into being and shaping them as his own; the same God who made the heavens made his covenant nation. As King, he reigns over Zion in righteousness and power. This is a joy grounded not in shifting feelings or favorable circumstances but in the fixed identity of God himself. For the church, this gladness deepens: Christ is both the one through whom all things were made (John 1:3; Colossians 1:16) and the King who reigns from David&rsquo;s throne forever (Luke 1:32&ndash;33).",
  },
  {
    id: "t-pleasure",
    title: "The LORD Takes Pleasure in His People",
    color: PURPLE,
    body: "&lsquo;For the LORD takes pleasure in his people; he adorns the humble with salvation&rsquo; (149:4). This is the tender heart of the psalm and one of the most remarkable statements in Scripture. The almighty Maker and King does not merely permit his people &mdash; he delights in them, taking real pleasure in them as a father in his children or a bridegroom in his bride (Zephaniah 3:17; Isaiah 62:5). And he &lsquo;adorns the humble with salvation&rsquo; &mdash; clothing and beautifying the lowly and dependent with the loveliest garment of all, his rescue. The God who is exalted above the heavens stoops to delight in the humble and to dress them in salvation, a picture fulfilled in Christ, who gives the garments of salvation to all who come to him in lowliness (Isaiah 61:10).",
  },
  {
    id: "t-allof-life",
    title: "Praise on Their Beds: Worship in All of Life",
    color: ROSE,
    body: "&lsquo;Let the godly exult in glory; let them sing for joy on their beds&rsquo; (149:5). Having pictured corporate praise in the assembly, the psalm now turns to private and personal worship &mdash; the praise sung &lsquo;on their beds.&rsquo; This is worship that does not end when the congregation disperses but continues in the quiet of the night, in the secret place, in the ordinary moments of life. The joy of God&rsquo;s people fills both the public square and the private chamber. True praise is not confined to the gathered assembly; it overflows into all of life, in waking and in resting, so that the believer&rsquo;s whole existence becomes an offering of glad worship to God (cf. Romans 12:1; 1 Corinthians 10:31).",
  },
  {
    id: "t-twoedged",
    title: "The Two-Edged Sword of Spiritual Warfare",
    color: GREEN,
    body: "&lsquo;Let the high praises of God be in their throats and two-edged swords in their hands&rsquo; (149:6). Read in the light of the whole biblical story, this is a portrait of spiritual rather than carnal warfare. The &lsquo;two-edged sword&rsquo; is supremely the living and active word of God (Hebrews 4:12), the sword of the Spirit (Ephesians 6:17), which proceeds from the mouth of the risen Christ (Revelation 1:16; 19:15). The weapons of God&rsquo;s people are not of the flesh but have divine power to destroy strongholds and take every thought captive to Christ (2 Corinthians 10:3&ndash;5). The church advances by praise and the proclaimed Word, binding the powers of darkness and announcing the reign of the King &mdash; warfare waged in worship.",
  },
  {
    id: "t-honor",
    title: "This Is Honor for All His Godly Ones",
    color: GOLD,
    body: "&lsquo;To execute on them the judgment written! This is honor for all his godly ones. Praise the LORD!&rsquo; (149:9). The psalm ends by declaring that this calling &mdash; to praise God and to wield his Word against the powers of the world &mdash; is itself an honor bestowed on all his faithful people. The lowly and humble whom God adorns with salvation are also dignified with a share in his triumph. They are not passive spectators but participants in the victory of their King. In Christ, the saints are seated with him in the heavenly places (Ephesians 2:6) and will share in his final judgment of the world (1 Corinthians 6:2; Revelation 20:4). The humble are crowned with honor, and their joyful praise becomes their glory.",
  },
];

const verseSections: { id: string; ref: string; label: string; body: string }[] = [
  {
    id: "v-12",
    ref: "Psalm 149:1&ndash;2",
    label: "Sing a new song; be glad in your Maker and King",
    body: "&lsquo;Praise the LORD! Sing to the LORD a new song, his praise in the assembly of the godly! Let Israel be glad in his Maker; let the children of Zion rejoice in their King!&rsquo; (149:1&ndash;2). The psalm opens with its great cry, &lsquo;Hallelujah,&rsquo; and immediately calls for a &lsquo;new song&rsquo; &mdash; fresh praise for the fresh mercies of God &mdash; to be sung &lsquo;in the assembly of the godly,&rsquo; the gathered congregation. Then it names the double ground of all this joy: Israel is to be glad in her Maker, the God who formed her into a people, and the children of Zion are to rejoice in their King, the LORD who reigns over them. This is the deepest spring of worship: to delight in the God who made you and to exult in the King who rules you.",
  },
  {
    id: "v-34",
    ref: "Psalm 149:3&ndash;4",
    label: "Praise with dancing; the LORD takes pleasure in his people",
    body: "&lsquo;Let them praise his name with dancing, making melody to him with tambourine and lyre! For the LORD takes pleasure in his people; he adorns the humble with salvation&rsquo; (149:3&ndash;4). The joy of God&rsquo;s people overflows into the whole body and into music: dancing, the tambourine, the lyre. Praise here is not restrained but exuberant, a celebration that fills voice and hands and feet. And then comes the tender reason for it all: &lsquo;the LORD takes pleasure in his people.&rsquo; The delight is mutual &mdash; they rejoice in him because he first delights in them. To the humble who depend on him, he gives the most beautiful adornment of all: salvation. He clothes the lowly with his rescue, as a king robes the poor in royal garments.",
  },
  {
    id: "v-56",
    ref: "Psalm 149:5&ndash;6",
    label: "Sing on their beds; high praises and a two-edged sword",
    body: "&lsquo;Let the godly exult in glory; let them sing for joy on their beds. Let the high praises of God be in their throats and two-edged swords in their hands&rsquo; (149:5&ndash;6). The praise that filled the assembly now fills the private chamber: the godly &lsquo;sing for joy on their beds,&rsquo; worshiping God in the quiet of the night and in all of life, not only in public. Then the tone turns to holy warfare. The same throats that sing high praises are armed for battle, with two-edged swords in their hands. In Christian understanding this is the sword of the Word and the Spirit (Hebrews 4:12; Ephesians 6:17) &mdash; the people of God going forth not with carnal weapons but with praise on their lips and the living Word in their hands.",
  },
  {
    id: "v-79",
    ref: "Psalm 149:7&ndash;9",
    label: "Judgment on the nations; honor for the godly",
    body: "&lsquo;To execute vengeance on the nations and punishments on the peoples, to bind their kings with chains and their nobles with fetters of iron, to execute on them the judgment written! This is honor for all his godly ones. Praise the LORD!&rsquo; (149:7&ndash;9). The psalm closes with the godly carrying out God&rsquo;s judgment against the rebellious nations and their kings. Read through Christ, this is the church&rsquo;s spiritual conquest: the proclaimed gospel binds the powers of darkness (cf. Matthew 12:28&ndash;29) and announces the reign of the King over all peoples; the saints share in his triumph and will share in his final judgment of the world (1 Corinthians 6:2; Revelation 20:4). This calling &lsquo;is honor for all his godly ones,&rsquo; and so the psalm ends as it began: &lsquo;Praise the LORD!&rsquo;",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Sing a New Song for New Mercies",
    color: GOLD,
    body: "Psalm 149 calls us to &lsquo;sing to the LORD a new song.&rsquo; God&rsquo;s mercies are new every morning (Lamentations 3:23), and they call for fresh praise, not stale routine. When God acts in your life &mdash; answering a prayer, granting a deliverance, opening a door &mdash; let it move you to a new song of thanksgiving. And remember that this song is sung best &lsquo;in the assembly of the godly&rsquo;: do not neglect to gather with God&rsquo;s people, where your private gratitude joins the great corporate voice of worship. The new song is the song of the redeemed, and one day you will sing it before the throne and the Lamb (Revelation 5:9). Begin practicing it now.",
  },
  {
    heading: "Rest in the God Who Delights in You",
    color: TEAL,
    body: "&lsquo;The LORD takes pleasure in his people.&rsquo; This is perhaps the most healing truth in the psalm. Many believers serve God dutifully while secretly fearing that he merely tolerates them. But Psalm 149 says the opposite: the sovereign Maker and King takes genuine pleasure in his people and delights to adorn the humble with salvation. Let this sink deep. You are not barely accepted; you are delighted in. In Christ, the Father looks on you with the same love and pleasure he has for his Son (Zephaniah 3:17; John 17:23). When you feel unworthy or unwanted, return to this verse and rest in the astonishing reality that the God of heaven rejoices over you.",
  },
  {
    heading: "Worship in Public and in Private",
    color: PURPLE,
    body: "The psalm pictures praise both in the gathered assembly and &lsquo;on their beds&rsquo; &mdash; in the quiet, private moments of life. True worship is not confined to Sunday or to the sanctuary; it overflows into the bedroom, the workplace, the commute, the kitchen. Let your praise of God fill all of life, in waking and in resting, in public gathering and in secret devotion. Sing for joy on your bed; meditate on his goodness in the night watches; let gratitude season your ordinary hours. The God who delights in you is worthy of worship that does not clock out, but offers your whole life as a continual sacrifice of praise (Romans 12:1; Hebrews 13:15).",
  },
  {
    heading: "Take Up the Sword of the Word",
    color: ROSE,
    body: "&lsquo;Let the high praises of God be in their throats and two-edged swords in their hands.&rsquo; The believer&rsquo;s warfare is not against flesh and blood, and our weapons are not carnal (Ephesians 6:12; 2 Corinthians 10:4). The two-edged sword is the word of God, the sword of the Spirit (Ephesians 6:17; Hebrews 4:12), and our great offensive weapon is praise joined to the proclaimed truth. When the powers of darkness press in, do not reach for the weapons of this world. Take up the Word, fill your mouth with the high praises of God, and stand. The church conquers the world not by force but by worship and witness, binding the powers and announcing the reign of the risen King.",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 149 calls us to &lsquo;sing a new song&rsquo; for the fresh mercies of God. What recent work of God in your life is calling you to a new song of praise?",
  "The psalm grounds joy in being glad in our Maker and rejoicing in our King. How does anchoring your joy in who God is, rather than in your circumstances, change the way you face this week?",
  "&lsquo;The LORD takes pleasure in his people.&rsquo; Do you truly believe that God delights in you, or do you secretly fear he merely tolerates you? How would resting in his delight change you?",
  "The psalm pictures praise both in the assembly and &lsquo;on their beds.&rsquo; Where is your private, personal worship strong, and where does it need to grow?",
  "The &lsquo;two-edged sword&rsquo; is the word of God for spiritual warfare. In what battle are you currently tempted to use the weapons of the world rather than the Word and praise?",
  "God &lsquo;adorns the humble with salvation.&rsquo; What would it look like to come before God in genuine humility this week, and to receive salvation as your most beautiful adornment?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 149: Sing to the LORD a New Song" },
  { videoId: "Q2oNOlXzBhY", title: "The LORD Takes Pleasure in His People" },
  { videoId: "8phkAg8PMHE", title: "Glad in Their Maker, Rejoicing in Their King" },
  { videoId: "fNk_zzaMoSs", title: "High Praises and the Two-Edged Sword" },
];

export default function Psalm149Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 149: The Praise of God&rsquo;s People
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "The fourth of the five closing Hallelujah psalms &mdash; a call to sing a new song in the assembly of the godly, to be glad in our Maker and rejoice in our King, and to praise with dancing and music. At its heart stands the tender truth that the LORD takes pleasure in his people and adorns the humble with salvation. It ends with high praises in the mouth and a two-edged sword in the hand &mdash; the spiritual warfare of the Word and worship." }}
          />
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 149:4</div>
            <p
              style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;For the LORD takes pleasure in his people; he adorns the humble with salvation.&rdquo;" }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? TEAL : BORDER}`,
                background: tab === t ? TEAL : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {overviewBlocks.map((b, i) => (
              <div key={i}>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "Where Psalm 149 Stands in the Psalter" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 149 is the fourth of the five &lsquo;Hallelujah&rsquo; psalms (146&ndash;150) that crown and conclude the book of Psalms, each beginning and ending with the cry &lsquo;Praise the LORD!&rsquo; Together they form a great fivefold doxology, gathering the whole journey of the Psalter &mdash; its laments, its thanksgivings, its wisdom, and its royal hope &mdash; into unbroken praise. Psalm 149 contributes its own distinct note: the joy of a redeemed community, glad in their Maker and rejoicing in their King, delighted in by God and armed with his Word. It leads directly into the final crescendo of Psalm 150, where every breathing creature joins the song." }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Key Themes of Psalm 149</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {themeItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontSize: "1.1rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </span>
                    <span style={{ color: item.color, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 149 as it moves from the new song of the gathered assembly, to the mutual delight between God and his people, to the joy that fills both public worship and private rest, and finally to the spiritual warfare of praise and the Word. Tap each section to open it." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseSections.map((v) => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${open === v.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}
                  >
                    <span>
                      <span style={{ display: "block", color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: v.ref }} />
                      <span style={{ fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.label }} />
                    </span>
                    <span style={{ color: TEAL, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === v.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === v.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: v.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Living Psalm 149</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {applicationBlocks.map((b, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${b.color}`, borderRadius: 10, padding: "1.3rem 1.6rem" }}>
                    <h3 style={{ color: b.color, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h2>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}33`, color: PURPLE, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.7, margin: 0, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your meditation on Psalm 149 through teaching on the new song of the redeemed, the God who takes pleasure in his people and adorns the humble with salvation, the joy of being glad in our Maker and King, and the spiritual warfare of high praises and the two-edged sword of the Word." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "O LORD our Maker and our King, we sing to you a new song, for your mercies are new every morning. We are glad in you who formed us into a people, and we rejoice in you who reign over us. We marvel that you take pleasure in your people, and that you adorn the humble with salvation. Clothe us in your rescue and beautify us with your grace. Put your high praises in our mouths and the sword of your Word in our hands, that we may stand against the powers of darkness not with the weapons of this world but with worship and the truth of Christ. Let our praise fill the assembly and the secret place alike, until we sing the new song before your throne forever. Praise the LORD! Amen." }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
