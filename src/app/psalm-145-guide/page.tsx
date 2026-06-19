"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface AccordionItem {
  id: string;
  title: string;
  accent: string;
  body: string;
}

interface VerseSection {
  id: string;
  reference: string;
  letters: string;
  body: string;
}

const THEME_ITEMS: AccordionItem[] = [
  {
    id: "theme-everyday",
    title: "Every Day and Forever: The Resolve to Bless",
    accent: PURPLE,
    body:
      "<p style='margin:0 0 0.9rem'>Psalm 145 opens with a vow that gathers up the whole of David&rsquo;s life into a single, unbroken stream of praise. &ldquo;I will extol you, my God and King, and bless your name forever and ever. Every day I will bless you and praise your name forever and ever&rdquo; (145:1&ndash;2). Twice within these opening lines the phrase &ldquo;forever and ever&rdquo; rings out, and between the two it is anchored to the concrete reality of &ldquo;every day.&rdquo; The eternal resolve is not an abstraction reserved for some distant age; it is to be lived out in the ordinary succession of mornings and evenings.</p>" +
      "<p style='margin:0 0 0.9rem'>Here is a praise that is both daily and everlasting. The daily keeps the everlasting honest, for a love that claims eternity but cannot summon a single word of blessing today is no love at all. The everlasting keeps the daily from despair, for the worshipper knows that this morning&rsquo;s small offering of praise is a thread woven into a song that will never end. David does not say he will praise God when circumstances improve, when his enemies are subdued, or when his heart finally feels like it. He simply resolves to bless, and the resolve itself becomes an act of worship.</p>" +
      "<p style='margin:0'>The New Testament takes up this same everlasting note when it declares that to God &ldquo;be glory forever and ever. Amen&rdquo; (Galatians 1:5), and when it pictures the redeemed crying out, &ldquo;to him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever&rdquo; (Revelation 5:13). The daily blessing of Psalm 145 is a rehearsal on earth for the song of heaven.</p>",
  },
  {
    id: "theme-greatness",
    title: "Greatness Unsearchable: One Generation to Another",
    accent: GOLD,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Great is the LORD, and greatly to be praised, and his greatness is unsearchable&rdquo; (145:3). David sets the immensity of God before us and then confesses that it cannot be measured. The word &ldquo;unsearchable&rdquo; means there is no end to be found, no bottom to be reached. We may spend a lifetime, and then an eternity, exploring the greatness of God and never arrive at its limit, because it has none. This is not a frustration but a delight: the worshipper is given an infinite ocean to enjoy and will never exhaust it.</p>" +
      "<p style='margin:0 0 0.9rem'>Because no single life can plumb that greatness, praise must be handed on. &ldquo;One generation shall commend your works to another, and shall declare your mighty acts&rdquo; (145:4). The old tell the young; parents tell children; the church of one age tells the church of the next. They &ldquo;pour forth the fame of your abundant goodness and shall sing aloud of your righteousness&rdquo; (145:7). Worship is a relay, a torch passed from hand to hand across the centuries, so that the works of God are never forgotten and his praise is never silenced on the earth.</p>" +
      "<p style='margin:0'>Paul echoes the wonder of this unsearchable greatness: &ldquo;Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!&rdquo; (Romans 11:33). And the charge to pass faith from generation to generation runs all through Scripture, from &ldquo;you shall teach them diligently to your children&rdquo; (Deuteronomy 6:7) to Paul&rsquo;s word that what he received he handed on (1 Corinthians 15:3).</p>",
  },
  {
    id: "theme-character",
    title: "Gracious and Merciful: The Heart of God",
    accent: GREEN,
    body:
      "<p style='margin:0 0 0.9rem'>At the very center of the psalm stands its central confession: &ldquo;The LORD is gracious and merciful, slow to anger and abounding in steadfast love&rdquo; (145:8). This is no new revelation but the oldest one, the words God himself spoke when he passed before Moses on the mountain and proclaimed his own name: &ldquo;The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (Exodus 34:6). David takes the self-portrait God gave of himself and sets it to music. The greatness that is unsearchable is, at its core, a greatness of grace.</p>" +
      "<p style='margin:0 0 0.9rem'>It matters enormously that the heart of infinite power is mercy. A God of unsearchable greatness who was cruel or capricious would be a terror; a God who was kind but weak would be a comfort that could not save. But the LORD is both. His might is the servant of his mercy. He is slow to anger &mdash; not because he is indifferent to evil, but because his patience is making room for repentance. His steadfast love is &ldquo;abounding,&rdquo; overflowing, more than enough for every sinner who turns to him.</p>" +
      "<p style='margin:0'>This confession is quoted again and again across the Old Testament &mdash; by Joel, Jonah, Nehemiah, and the psalmists &mdash; as the bedrock of Israel&rsquo;s hope. And it finds its fullest flesh-and-blood expression in Jesus Christ, in whom &ldquo;the grace of God has appeared, bringing salvation for all people&rdquo; (Titus 2:11), the one who is gracious and merciful made visible.</p>",
  },
  {
    id: "theme-goodness",
    title: "Good to All: Mercy Over All He Has Made",
    accent: TEAL,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD is good to all, and his mercy is over all that he has made&rdquo; (145:9). Here the psalm broadens to its widest horizon. God&rsquo;s goodness is not narrowly confined to the deserving, nor even to humanity alone; it spreads like a covering over the whole of creation. This is the goodness Jesus describes when he says the Father &ldquo;makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust&rdquo; (Matthew 5:45). The kindness of God reaches every creature he has made.</p>" +
      "<p style='margin:0 0 0.9rem'>The psalm turns this universal goodness into a vivid picture of dependence and provision: &ldquo;The eyes of all look to you, and you give them their food in due season. You open your hand; you satisfy the desire of every living thing&rdquo; (145:15&ndash;16). Every sparrow, every beast of the field, every hungry child is fed from the open hand of God. Creation lifts its eyes to its Maker and is satisfied. There is a gentleness to the image &mdash; not a clenched fist of grudging supply, but an open hand of generous abundance.</p>" +
      "<p style='margin:0'>This is the God who &ldquo;did not leave himself without witness, for he did good by giving you rains from heaven and fruitful seasons, satisfying your hearts with food and gladness&rdquo; (Acts 14:17). The same hand that feeds the ravens (Luke 12:24) and clothes the lilies invites the anxious heart to trust that it, too, will not be forgotten.</p>",
  },
  {
    id: "theme-kingdom",
    title: "An Everlasting Kingdom That Will Not Fall",
    accent: ROSE,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;They shall speak of the glory of your kingdom and tell of your power&hellip; Your kingdom is an everlasting kingdom, and your dominion endures throughout all generations&rdquo; (145:11&ndash;13). David was himself a king, and he knew how fragile earthly thrones are &mdash; how dynasties rise and crumble, how the mightiest empires pass into dust. Against that backdrop he lifts his eyes to a kingdom that cannot be shaken. The LORD&rsquo;s reign has no end, no rival who can overthrow it, no generation in which it fails.</p>" +
      "<p style='margin:0 0 0.9rem'>This everlasting kingdom is not a cold and distant sovereignty. It is the reign of the gracious and merciful God, the One who is good to all. So its glory is to be told and its power proclaimed precisely because of what kind of King sits on the throne. The same psalm that exalts the kingdom also shows the King stooping to uphold the falling and feed the hungry. Greatness and gentleness meet in the everlasting throne.</p>" +
      "<p style='margin:0'>Daniel saw the same vision of a kingdom that &ldquo;shall never be destroyed&hellip; it shall stand forever&rdquo; (Daniel 2:44), and the angel promised Mary that of her Son&rsquo;s &ldquo;kingdom there will be no end&rdquo; (Luke 1:33). Every kingdom of this world will be folded up like a worn-out garment, but the kingdom of God endures throughout all generations.</p>",
  },
  {
    id: "theme-near",
    title: "Upholding the Falling, Near to All Who Call",
    accent: GOLD,
    body:
      "<p style='margin:0 0 0.9rem'>The infinite King who reigns over an everlasting kingdom bends low to the weak: &ldquo;The LORD upholds all who are falling and raises up all who are bowed down&rdquo; (145:14). The two participles describe the whole company of the broken &mdash; those who are slipping, stumbling, losing their footing in life, and those who are weighed down, crushed under burdens too heavy to carry. To all of them the LORD comes, not to push them further down, but to hold them up and lift them. His hand catches the falling and straightens the bent.</p>" +
      "<p style='margin:0 0 0.9rem'>And this great God is not far off. &ldquo;The LORD is near to all who call on him, to all who call on him in truth. He fulfills the desire of those who fear him; he also hears their cry and saves them&rdquo; (145:18&ndash;19). The qualification &ldquo;in truth&rdquo; matters: this is not magic but relationship, the cry of a heart that means what it says. To such a cry the LORD is near &mdash; not merely present, but attentive, leaning in to hear and quick to save.</p>" +
      "<p style='margin:0'>This nearness is the heartbeat of the gospel. &ldquo;The Lord is near to the brokenhearted and saves the crushed in spirit&rdquo; (Psalm 34:18); &ldquo;everyone who calls on the name of the Lord will be saved&rdquo; (Romans 10:13). The psalm ends with a final vow that swells outward: &ldquo;My mouth will speak the praise of the LORD, and let all flesh bless his holy name forever and ever&rdquo; (145:21).</p>",
  },
];

const VERSE_SECTIONS: VerseSection[] = [
  {
    id: "v1",
    reference: "Psalm 145:1-3",
    letters: "Aleph - Gimel",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;I will extol you, my God and King, and bless your name forever and ever. Every day I will bless you and praise your name forever and ever. Great is the LORD, and greatly to be praised, and his greatness is unsearchable&rdquo; (145:1&ndash;3).</p>" +
      "<p style='margin:0 0 0.9rem'>David begins with the personal and ends with the immeasurable. He claims God as &ldquo;my God and King&rdquo; &mdash; sovereign over all yet his own &mdash; and then resolves to bless that name &ldquo;forever and ever&rdquo; and &ldquo;every day.&rdquo; The eternal vow is rooted in daily practice. Then his gaze lifts from himself to the sheer magnitude of God: a greatness that is &ldquo;greatly to be praised&rdquo; and yet finally &ldquo;unsearchable,&rdquo; without limit or end.</p>" +
      "<p style='margin:0'>This is the right order of worship: it begins with a God who is mine, and it ends in a God too great to be fathomed. The intimacy does not shrink the majesty, and the majesty does not chill the intimacy. The acrostic form, beginning here with the first letter of the Hebrew alphabet, signals that David intends to praise God from A to Z &mdash; to enlist every letter and every faculty in the work of blessing his name.</p>",
  },
  {
    id: "v2",
    reference: "Psalm 145:4-7",
    letters: "Dalet - Zayin",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;One generation shall commend your works to another, and shall declare your mighty acts&hellip; They shall pour forth the fame of your abundant goodness and shall sing aloud of your righteousness&rdquo; (145:4, 7).</p>" +
      "<p style='margin:0 0 0.9rem'>Praise here becomes a living tradition handed across time. Because no one generation can exhaust the greatness of God, each must tell the next of his &ldquo;works,&rdquo; his &ldquo;mighty acts,&rdquo; his &ldquo;wondrous works,&rdquo; his &ldquo;awesome deeds.&rdquo; The verbs pile up &mdash; commend, declare, meditate, speak, pour forth, sing aloud &mdash; as if a single word could never be enough. Worship overflows; it cannot be contained in one mouth or one age.</p>" +
      "<p style='margin:0'>Notice that the content of this praise is &ldquo;abundant goodness&rdquo; and &ldquo;righteousness.&rdquo; What the generations pass down is not a cold doctrine but a remembered kindness, the testimony of a God who has acted graciously and rightly toward his people. This is the calling of every parent, teacher, and church: to make sure the goodness of God is never lost between the generations, but sung aloud afresh in every age.</p>",
  },
  {
    id: "v3",
    reference: "Psalm 145:8-9",
    letters: "Het - Tet",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD is gracious and merciful, slow to anger and abounding in steadfast love. The LORD is good to all, and his mercy is over all that he has made&rdquo; (145:8&ndash;9).</p>" +
      "<p style='margin:0 0 0.9rem'>This is the theological heart of the psalm and one of the high points of the whole Psalter. Verse 8 deliberately echoes the great self-revelation of God to Moses in Exodus 34:6, the name God proclaimed over himself: gracious, merciful, slow to anger, abounding in steadfast love. David takes that ancient confession and presses on to its widest implication in verse 9 &mdash; this character is not reserved for Israel alone but spills out over &ldquo;all that he has made.&rdquo;</p>" +
      "<p style='margin:0'>Here the unsearchable greatness is given its true content. The infinite God is not infinitely remote or infinitely severe; he is infinitely gracious. His mercy is &ldquo;over all&rdquo; his works like a sheltering canopy. No creature lies outside its shade. For the anxious, the guilty, and the small, there is no better news than this: the God who made you is good to all, and his mercy is over all that he has made.</p>",
  },
  {
    id: "v4",
    reference: "Psalm 145:10-13",
    letters: "Yod - Mem",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;All your works shall give thanks to you, O LORD, and all your saints shall bless you! They shall speak of the glory of your kingdom and tell of your power&hellip; Your kingdom is an everlasting kingdom, and your dominion endures throughout all generations&rdquo; (145:10&ndash;13).</p>" +
      "<p style='margin:0 0 0.9rem'>Now the praise of creation and the praise of the saints join in a single chorus, and its theme is the kingdom of God. Three times in these verses the word &ldquo;kingdom&rdquo; sounds, and once &ldquo;dominion,&rdquo; building to the great declaration that this kingdom is &ldquo;everlasting&rdquo; and endures &ldquo;throughout all generations.&rdquo; David, a king whose own throne would one day pass to another, fixes his hope on a reign that will never be handed off or overthrown.</p>" +
      "<p style='margin:0'>It is in this section that the famous &ldquo;nun&rdquo; verse appears &mdash; &ldquo;The LORD is faithful in all his words and kind in all his works&rdquo; &mdash; supplied from the Dead Sea Scrolls and the ancient Greek translation to complete the acrostic. Its content fits perfectly: the everlasting King is faithful and kind in everything he does. His unending reign is good news precisely because of the kind of King he is.</p>",
  },
  {
    id: "v5",
    reference: "Psalm 145:14-16",
    letters: "Samek - Pe",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD upholds all who are falling and raises up all who are bowed down. The eyes of all look to you, and you give them their food in due season. You open your hand; you satisfy the desire of every living thing&rdquo; (145:14&ndash;16).</p>" +
      "<p style='margin:0 0 0.9rem'>Having proclaimed the everlasting kingdom, David shows the King in action, and his action is tenderness. He &ldquo;upholds all who are falling&rdquo; &mdash; he catches those who are slipping &mdash; and &ldquo;raises up all who are bowed down,&rdquo; lifting those bent low under their burdens. The greatness of God is measured not by how far above us he stands, but by how far he stoops to help.</p>" +
      "<p style='margin:0'>Then comes one of the most beautiful images in all of Scripture: &ldquo;You open your hand; you satisfy the desire of every living thing.&rdquo; The eyes of all creation turn upward in hopeful dependence, and the open hand of God feeds them in due season. There is no scarcity in this picture, no rationing of grace, but an open-handed generosity that satisfies the longing of every creature he has made. The hungry need only look up.</p>",
  },
  {
    id: "v6",
    reference: "Psalm 145:17-21",
    letters: "Tsadi - Tav",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD is righteous in all his ways and kind in all his works. The LORD is near to all who call on him, to all who call on him in truth&hellip; My mouth will speak the praise of the LORD, and let all flesh bless his holy name forever and ever&rdquo; (145:17&ndash;21).</p>" +
      "<p style='margin:0 0 0.9rem'>The acrostic reaches its final letters, and David draws the threads together. God is &ldquo;righteous in all his ways and kind in all his works&rdquo; &mdash; perfectly just and perfectly gentle, with no tension between the two. And he is &ldquo;near to all who call on him&hellip; in truth.&rdquo; The infinite King of the everlasting kingdom is, to the sincere worshipper, as near as a whispered prayer. He hears their cry and saves them.</p>" +
      "<p style='margin:0'>The psalm ends as it began, with a vow of praise &mdash; but now it swells outward from one mouth to all creation: &ldquo;Let all flesh bless his holy name forever and ever.&rdquo; The personal resolve of verse 1 becomes a summons to the whole world. Fittingly, this final psalm of David then ushers in the five closing &ldquo;Hallelujah&rdquo; psalms (146&ndash;150), the great crescendo of praise with which the entire Psalter ends.</p>",
  },
];

const APP_SECTIONS: AccordionItem[] = [
  {
    id: "app-daily",
    title: "Make Praise a Daily Discipline",
    accent: PURPLE,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Every day I will bless you&rdquo; (145:2). Psalm 145 invites us to make praise not an occasional mood but a daily habit. Feelings rise and fall; the resolve to bless God can hold steady beneath them. The Jewish tradition recognized this so deeply that it wove this very psalm into daily prayer, reciting it three times each day as the &ldquo;Ashrei.&rdquo; The wisdom is sound: what we rehearse daily shapes what we believe and how we live.</p>" +
      "<p style='margin:0'>Consider beginning and ending each day with a deliberate word of blessing &mdash; naming one work of God&rsquo;s goodness you have seen, one mercy received. Over time, this daily discipline trains the eyes to notice grace everywhere, and the unsearchable greatness of God becomes the familiar air we breathe rather than a truth we only visit on Sundays.</p>",
  },
  {
    id: "app-generations",
    title: "Pass the Faith to the Next Generation",
    accent: GOLD,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;One generation shall commend your works to another&rdquo; (145:4). Faith is always one generation from being forgotten, and Psalm 145 lays on every believer the joyful duty of passing it on. This is not the task of professional teachers only; it belongs to every parent, grandparent, friend, and mentor who can tell a younger person what God has done.</p>" +
      "<p style='margin:0'>Think of who is watching your life and listening for your testimony &mdash; children, younger believers, those new to the faith. What works of God have you seen that they need to hear? The goodness of God is meant to be poured forth, sung aloud, handed down like a treasure. Resolve to be a link in that unbroken chain, so that the praise of God is never silenced between the generations.</p>",
  },
  {
    id: "app-trust",
    title: "Bring Your Hunger to the Open Hand",
    accent: TEAL,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;You open your hand; you satisfy the desire of every living thing&rdquo; (145:16). For the anxious heart, this verse is a steadying anchor. The God who feeds every sparrow and every beast of the field has not forgotten you. Your daily needs &mdash; for provision, for strength, for meaning &mdash; are not too small for his open hand, nor too great for his abundance.</p>" +
      "<p style='margin:0'>Practice lifting your eyes, as all creation does, to the One who gives food in due season. Bring your real hunger &mdash; physical, emotional, spiritual &mdash; to him in honest prayer, trusting that he is &ldquo;good to all&rdquo; and that his mercy is over all he has made. The open hand of God is not a reward for the worthy; it is the generous provision of a Father for his dependent creatures.</p>",
  },
  {
    id: "app-call",
    title: "Call on Him in Truth",
    accent: GREEN,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD is near to all who call on him, to all who call on him in truth&rdquo; (145:18). The great comfort of this psalm is nearness. The infinite King is not unreachable; he bends close to every honest cry. The only qualification is &ldquo;in truth&rdquo; &mdash; not perfect words or polished prayers, but a heart that means what it says.</p>" +
      "<p style='margin:0'>If you feel far from God, this verse turns the picture around: he is near to all who call. If you are falling, he upholds; if you are bowed down, he raises up. The invitation is simply to call &mdash; honestly, sincerely, as you are. He who is gracious and merciful, slow to anger and abounding in steadfast love, is leaning in to hear. Do not let the greatness of God keep you from the nearness of God.</p>",
  },
];

const REFLECTION_QUESTIONS = [
  "David resolves to bless God &ldquo;every day&rdquo; and &ldquo;forever and ever&rdquo; (145:1&ndash;2). What would it look like to build a daily rhythm of praise into your own life, regardless of how you feel?",
  "The psalm calls God&rsquo;s greatness &ldquo;unsearchable&rdquo; (145:3). How does it change your worship to know that you will never exhaust the greatness of God, but only ever explore it more deeply?",
  "Verse 8 echoes God&rsquo;s self-revelation in Exodus 34:6. Which part of that confession &mdash; gracious, merciful, slow to anger, abounding in steadfast love &mdash; do you most need to believe about God right now?",
  "&ldquo;The LORD is good to all, and his mercy is over all that he has made&rdquo; (145:9). Where have you seen evidence of God&rsquo;s goodness reaching beyond the deserving, even to those who do not yet know him?",
  "Who in your life is part of the next generation that God is calling you to &ldquo;commend his works&rdquo; to (145:4)? What testimony of God&rsquo;s goodness could you share with them?",
  "Verse 18 says God is &ldquo;near to all who call on him in truth.&rdquo; What keeps you from calling on him honestly, and what would it mean to come to him just as you are?",
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 145 Explained: David's Great Acrostic of Praise" },
  { videoId: "Q2oNOlXzBhY", title: "Gracious and Merciful: The Heart of God in Psalm 145" },
  { videoId: "8phkAg8PMHE", title: "You Open Your Hand: God's Goodness Over All He Has Made" },
  { videoId: "fNk_zzaMoSs", title: "An Everlasting Kingdom: The Reign of God in the Psalms" },
];

export default function Psalm145Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: "#b6a4ee", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 145: A Song of Praise
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "David&rsquo;s last psalm in the Psalter &mdash; a great alphabetical acrostic of praise that moves from the resolve to bless God every day and forever, through the unsearchable greatness of God, to the tender heart of his character: gracious, merciful, good to all, and near to every soul who calls on him in truth." }} />
          <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
            <div style={{ color: "#b6a4ee", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
              Key Verse &middot; Psalm 145:8-9
            </div>
            <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD is gracious and merciful, slow to anger and abounding in steadfast love. The LORD is good to all, and his mercy is over all that he has made.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                background: tab === t ? PURPLE : CARD,
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
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: MUTED, fontSize: "1.05rem", lineHeight: 1.85 }}>
              <p dangerouslySetInnerHTML={{ __html: "Psalm 145 is the last psalm in the Psalter that bears the name of David, and it carries a unique heading: &ldquo;A Song of Praise.&rdquo; It is the only psalm in the entire book given the Hebrew title <em>tehillah</em> &mdash; &ldquo;praise&rdquo; &mdash; and from the plural form of that word, <em>Tehillim</em>, the whole book of Psalms takes its Hebrew name. In a real sense, then, this psalm gives the Psalter its very title: the book of praises." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Structure.</strong> Psalm 145 is an alphabetical acrostic: each verse begins with a successive letter of the Hebrew alphabet, from <em>aleph</em> to <em>tav</em> &mdash; David&rsquo;s way of praising God from A to Z, enlisting the whole language in the work of worship. (One letter, <em>nun</em>, is missing in the traditional Hebrew text; its verse, &ldquo;The LORD is faithful in all his words and kind in all his works,&rdquo; is supplied from the Dead Sea Scrolls and the ancient Greek translation.) The psalm moves in waves: a vow of praise, the greatness of God, the character of God, the kingdom of God, the provision of God, and the nearness of God." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Context.</strong> Psalm 145 stands at a hinge in the Psalter. It is the final psalm of David and the gateway to the great climax of the book &mdash; the five closing &ldquo;Hallelujah&rdquo; psalms (146&ndash;150), each of which opens and closes with &ldquo;Praise the LORD.&rdquo; Psalm 145 sounds the keynote that those five psalms will then take up and amplify until the Psalter ends with everything that has breath praising the LORD. Its central confession in verse 8 reaches all the way back to Exodus 34:6, the name God proclaimed over himself to Moses, anchoring the whole psalm in God&rsquo;s own self-revelation." }} />
              <p dangerouslySetInnerHTML={{ __html: "In Jewish tradition this psalm became so beloved that it was woven into daily prayer and recited three times each day as the &ldquo;Ashrei.&rdquo; Its sweep is breathtaking: from one worshipper&rsquo;s daily resolve to bless God, outward to every generation, outward again to &ldquo;all that he has made&rdquo; and &ldquo;every living thing,&rdquo; until at last &ldquo;all flesh&rdquo; is summoned to bless his holy name forever and ever." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Tap each theme to explore the riches of David&rsquo;s great acrostic of praise, with cross-references that trace its threads through the whole of Scripture.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEME_ITEMS.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.accent, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Walk through Psalm 145 section by section, following the unfolding acrostic from <em>aleph</em> to <em>tav</em>. Tap each passage to open the commentary.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSE_SECTIONS.map((vs) => (
                <div key={vs.id} style={{ background: CARD, border: `1px solid ${open === vs.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(vs.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{vs.reference}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: TEAL }}>{vs.letters}</span>
                    </span>
                    <span style={{ color: TEAL, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === vs.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === vs.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: vs.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              How might the praise of Psalm 145 reshape the way you live, pray, and trust? Consider these invitations, then sit with the reflection questions below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "3rem" }}>
              {APP_SECTIONS.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.accent, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
              <h3 style={{ color: "#f0b454", fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your meditation on Psalm 145 through teaching on David&rsquo;s acrostic of praise, the gracious heart of God, his open-handed goodness over all creation, and the everlasting kingdom that will never fall.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: "3rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: "#b6a4ee", fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Gracious and merciful Father, you are great beyond all searching out, and yet you are near to all who call on you in truth. Teach us to bless your name every day and forever, to declare your works to the generation that follows, and to lift our eyes, with all creation, to your open hand. We confess that you are good to all, that your mercy is over all you have made, and that your kingdom is everlasting. Uphold us when we are falling, raise us up when we are bowed down, and satisfy the deepest desires of our hearts with yourself. May our mouths speak your praise, and may all flesh bless your holy name forever and ever, through Jesus Christ our Lord. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
