"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface ThemeItem {
  id: string;
  title: string;
  body: string;
  refs: string;
}

interface VerseItem {
  id: string;
  reference: string;
  label: string;
  body: string;
}

interface AppItem {
  title: string;
  body: string;
  accent: string;
}

const THEMES: ThemeItem[] = [
  {
    id: "love",
    title: "I Love You, O LORD, My Strength",
    body: "The psalm opens with a startling intimacy: &ldquo;I love you, O LORD, my strength&rdquo; (v.1). The Hebrew verb David uses here for love is a tender, visceral word &mdash; the kind of love that yearns and clings &mdash; and this is the only place in the Old Testament where a worshiper uses this particular verb of God. Most often the Scriptures command us to love God with the more familiar covenant word, but David reaches for something warmer still, the language of a heart bound to its rescuer by gratitude and affection. He does not begin with God&rsquo;s law or even with God&rsquo;s deeds, but with a confession of love. The whole long psalm of deliverance flows out of this single bond: David loves the LORD because the LORD first delighted in him and drew him out of deep waters. Strength is the first thing he names &mdash; not merely a strong God in the abstract, but &ldquo;my strength,&rdquo; the source of every victory he is about to recount.",
    refs: "Psalm 18:1; Deuteronomy 6:5; Mark 12:30",
  },
  {
    id: "refuge",
    title: "My Rock and My Fortress and My Deliverer",
    body: "Verse 2 pours out a cascade of metaphors so dense it almost overwhelms: &ldquo;The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.&rdquo; David, a man who had spent years hiding in the wilderness caves and strongholds of En-gedi, knew the literal meaning of rock and fortress. Now he transfers every image of physical safety to the LORD himself. A rock cannot be moved; a fortress cannot be breached; a shield turns the arrow; the horn of salvation speaks of strength that gores and scatters the enemy. Each name is personal &mdash; my rock, my fortress, my deliverer, my God &mdash; for David has not merely observed that God is a refuge but has run to him and found him so. The piling up of titles is itself an act of worship, the speech of a man who cannot find words enough to describe the One who saved him.",
    refs: "Psalm 18:2; Psalm 46:1; 2 Samuel 22:2&ndash;3",
  },
  {
    id: "theophany",
    title: "He Bowed the Heavens and Came Down",
    body: "When David recounts his rescue, he does not describe a battle in plain terms. Instead he reaches for the language of a cosmic storm and earthquake: &ldquo;the earth reeled and rocked&rdquo; (v.7), smoke went up from God&rsquo;s nostrils, &ldquo;he bowed the heavens and came down&rdquo; (v.9), &ldquo;he rode on a cherub and flew&rdquo; (v.10), &ldquo;the LORD also thundered in the heavens&rdquo; (v.13), and he &ldquo;sent out his arrows and scattered them&rdquo; (v.14). This is theophany &mdash; the appearing of God &mdash; and it deliberately echoes Sinai, where the mountain shook and was wrapped in smoke and fire, and the Exodus, where God parted the sea. David casts his personal deliverance from Saul and his enemies in the grandest possible terms because he understands that the God who fought for him is the same God who shook the earth at Sinai. The imagery is poetic, but the conviction is literal: the living God really did intervene, bending the heavens and descending to rescue one man in distress.",
    refs: "Psalm 18:7&ndash;15; Exodus 19:16&ndash;18; Habakkuk 3:3&ndash;6",
  },
  {
    id: "delight",
    title: "He Rescued Me Because He Delighted in Me",
    body: "At the very heart of the psalm lies a single astonishing line: &ldquo;He brought me out into a broad place; he rescued me, because he delighted in me&rdquo; (v.19). After all the storm and thunder, after the earth has reeled and the arrows have flown, David tells us why God did it. Not because David had bargained for it, not because his strength compelled it, but because God delighted in him. The Hebrew speaks of God taking pleasure in David, finding joy in him. The rescue was an act of love, the overflow of God&rsquo;s affection for his servant. David does go on to speak of his righteousness and the cleanness of his hands (vv.20&ndash;24), but the foundation under all of it is divine delight. This is the gospel in miniature: God saves not because we have earned it but because, by his grace, he delights in his people. The image of being brought &ldquo;out into a broad place&rdquo; captures the relief of one freed from a tight, crushing trap into wide-open freedom.",
    refs: "Psalm 18:16&ndash;19; Zephaniah 3:17; Ephesians 1:4&ndash;5",
  },
  {
    id: "character",
    title: "With the Merciful You Show Yourself Merciful",
    body: "In verses 25 and 26 David lays down a profound principle about the correspondence between God&rsquo;s character and ours: &ldquo;With the merciful you show yourself merciful; with the blameless man you show yourself blameless; with the purified you show yourself pure; and with the crooked you make yourself seem tortuous.&rdquo; God meets people according to the posture of their hearts. To those who come humbly and faithfully, he reveals his faithfulness and mercy; to those who twist away from him in pride and crookedness, he appears as one who resists them. David then states it plainly: &ldquo;you save a humble people, but the haughty eyes you bring down&rdquo; (v.27). This is not a God who can be manipulated, but a God whose dealings with us answer to the truth of who we are before him. The lesson is sobering and hopeful at once: the way we approach God shapes the way we experience him, and the humble will always find mercy.",
    refs: "Psalm 18:25&ndash;27; Proverbs 3:34; James 4:6; 1 Peter 5:5",
  },
  {
    id: "equip",
    title: "He Equipped Me With Strength and Made My Feet Like a Deer's",
    body: "David does not only celebrate being rescued; he celebrates being equipped. &ldquo;It is God who equipped me with strength and made my way blameless. He made my feet like the feet of a deer and set me secure on the heights&rdquo; (vv.32&ndash;33). The deer is sure-footed on dangerous mountain ledges, leaping where others would fall; God gives David that same secure footing in the perilous heights of kingship and warfare. &ldquo;You gave me the shield of your salvation&rdquo; (v.35); &ldquo;you equipped me with strength for the battle&rdquo; (v.39). Every victory David won, he attributes to the God who trained his hands for war and steadied his footing. The believer learns here that God does not merely deliver us from danger and then leave us defenseless; he strengthens, equips, and steadies us for the path ahead, making us able to stand where we could never stand alone.",
    refs: "Psalm 18:32&ndash;36; Habakkuk 3:19; Philippians 4:13",
  },
  {
    id: "anointed",
    title: "Steadfast Love to His Anointed Forever",
    body: "The psalm closes on a note that reaches far beyond David&rsquo;s own lifetime: &ldquo;Great salvation he brings to his king, and shows steadfast love to his anointed, to David and his offspring forever&rdquo; (v.50). The word &ldquo;anointed&rdquo; is messiah, and &ldquo;offspring forever&rdquo; points beyond David to the everlasting King promised in the covenant of 2 Samuel 7. David&rsquo;s song of personal deliverance becomes a window onto the great Deliverer to come. The apostle Paul seizes this messianic horizon when he quotes verse 49 in Romans 15:9 &mdash; &ldquo;I will praise you among the Gentiles, and sing to your name&rdquo; &mdash; to show that the salvation of Israel&rsquo;s anointed King was always meant to overflow to the nations. The God who delighted in David, who bowed the heavens to rescue him, keeps his steadfast love to David&rsquo;s greater Son, and through him to a people drawn from every nation.",
    refs: "Psalm 18:49&ndash;50; 2 Samuel 7:12&ndash;16; Romans 15:9",
  },
];

const VERSES: VerseItem[] = [
  {
    id: "v1",
    reference: "Psalm 18:1&ndash;3",
    label: "I Love You, O LORD, My Strength",
    body: "&ldquo;I love you, O LORD, my strength. The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold&rdquo; (vv.1&ndash;2). The superscription tells us David sang this song &ldquo;on the day when the LORD delivered him from the hand of all his enemies, and from the hand of Saul.&rdquo; It is a backward look over a whole life of rescue, and it begins not with the deeds but with the love. The cascade of names &mdash; rock, fortress, deliverer, God, rock again, shield, horn of salvation, stronghold &mdash; tumbles out faster than the syntax can hold it, the overflow of a heart too full to be tidy. Then comes the simple testimony of verse 3: &ldquo;I call upon the LORD, who is worthy to be praised, and I am saved from my enemies.&rdquo; This is the pattern of the whole psalm in seed form &mdash; the worshiper calls, the LORD answers, and salvation comes.",
  },
  {
    id: "v4",
    reference: "Psalm 18:4&ndash;6",
    label: "In My Distress I Called Upon the LORD",
    body: "&ldquo;The cords of death encompassed me; the torrents of destruction assailed me; the cords of Sheol entangled me; the snares of death confronted me&rdquo; (vv.4&ndash;5). David describes mortal danger with the imagery of being bound and dragged down toward the grave, hunted, trapped, and drowning. There was no escape by his own strength. &ldquo;In my distress I called upon the LORD; to my God I cried for help&rdquo; (v.6). The cry of the helpless is the hinge of the psalm. And the answer is immediate and certain: &ldquo;From his temple he heard my voice, and my cry to him reached his ears.&rdquo; However far off heaven may seem to the one entangled in death, the prayer of the distressed reaches the very throne of God. The enthroned King in his holy temple bends his ear to one man crying out in the dark, and that hearing sets in motion the cosmic rescue described in the verses that follow.",
  },
  {
    id: "v7",
    reference: "Psalm 18:7&ndash;15",
    label: "The Theophany &mdash; He Bowed the Heavens and Came Down",
    body: "This is the great storm-theophany at the center of the psalm. &ldquo;Then the earth reeled and rocked; the foundations also of the mountains trembled and quaked, because he was angry&rdquo; (v.7). Smoke goes up from God&rsquo;s nostrils and devouring fire from his mouth (v.8). &ldquo;He bowed the heavens and came down; thick darkness was under his feet. He rode on a cherub and flew; he came swiftly on the wings of the wind&rdquo; (vv.9&ndash;10). The LORD thunders in the heavens, the Most High utters his voice, and he sends out his arrows and lightnings to scatter the enemy (vv.13&ndash;14). At his rebuke the channels of the sea are seen and the foundations of the world are laid bare (v.15). The whole passage borrows the language of Sinai and the Exodus to insist that the same God who shook the mountain and parted the sea came down in power to rescue David. The poetry is vast; the deliverance was real.",
  },
  {
    id: "v16",
    reference: "Psalm 18:16&ndash;24",
    label: "He Rescued Me Because He Delighted in Me",
    body: "Now the storm resolves into rescue: &ldquo;He sent from on high, he took me; he drew me out of many waters. He rescued me from my strong enemy and from those who hated me, for they were too mighty for me&rdquo; (vv.16&ndash;17). The picture recalls Moses drawn from the Nile &mdash; God reaching down to lift his servant out of the flood. &ldquo;He brought me out into a broad place; he rescued me, because he delighted in me&rdquo; (v.19). Here is the surprising heart of the whole rescue: God acted out of delight. David then speaks of his righteousness and the cleanness of his hands (vv.20&ndash;24), not as a boast that earned the rescue but as the integrity of a man who had kept the ways of the LORD and not turned wickedly from his God. Delight and faithfulness are held together &mdash; God saves the one in whom he delights, and that one walks before him in glad obedience.",
  },
  {
    id: "v25",
    reference: "Psalm 18:25&ndash;36",
    label: "You Save a Humble People",
    body: "&ldquo;With the merciful you show yourself merciful; with the blameless man you show yourself blameless&rdquo; (v.25) &mdash; God answers to the heart that comes to him, and &ldquo;you save a humble people, but the haughty eyes you bring down&rdquo; (v.27). Then David turns to praise the God who strengthens him: &ldquo;For it is you who light my lamp; the LORD my God lightens my darkness&rdquo; (v.28). &ldquo;This God &mdash; his way is perfect; the word of the LORD proves true; he is a shield for all those who take refuge in him&rdquo; (v.30). &ldquo;It is God who equipped me with strength and made my way blameless. He made my feet like the feet of a deer and set me secure on the heights&rdquo; (vv.32&ndash;33). &ldquo;You gave me the shield of your salvation, and your right hand supported me, and your gentleness made me great&rdquo; (v.35). Every gift &mdash; light in the darkness, strength for the battle, sure footing on the heights &mdash; is traced back to the gentleness and power of God.",
  },
  {
    id: "v37",
    reference: "Psalm 18:37&ndash;50",
    label: "The LORD Lives, Blessed Be My Rock",
    body: "The final movement celebrates the victories God granted: &ldquo;I pursued my enemies and overtook them, and did not turn back till they were consumed&rdquo; (v.37). David is careful to credit God throughout &mdash; &ldquo;you equipped me with strength for the battle; you made those who rise against me sink under me&rdquo; (v.39). Then comes the great doxology: &ldquo;The LORD lives, and blessed be my rock, and exalted be the God of my salvation&rdquo; (v.46). The psalm rises to its climax in verses 49 and 50: &ldquo;For this I will praise you, O LORD, among the nations, and sing to your name. Great salvation he brings to his king, and shows steadfast love to his anointed, to David and his offspring forever.&rdquo; Paul quotes verse 49 in Romans 15:9 to show that the praise of Israel&rsquo;s King was always destined to be sung among the Gentiles. The steadfast love promised to David&rsquo;s offspring forever finds its yes and amen in Jesus Christ, great David&rsquo;s greater Son.",
  },
];

const APP_ITEMS: AppItem[] = [
  {
    title: "Begin With Love, Not Merely Duty",
    body: "David begins his psalm of deliverance with the words &ldquo;I love you, O LORD, my strength.&rdquo; Before he recounts a single battle, he confesses affection. So often our walk with God is framed only in terms of duty &mdash; what we must do, what we owe. Psalm 18 invites us to begin elsewhere, with love that flows back to the One who first delighted in us. Ask yourself whether your relationship with God has become a list of obligations or remains, at its root, a love. Let the memory of his rescue rekindle warmth toward him. The God who bowed the heavens to draw you out of deep waters is not merely your employer but your deliverer and your friend, and the right response to such a God is a heart that says, with David, &ldquo;I love you, O LORD.&rdquo;",
    accent: PURPLE,
  },
  {
    title: "Run to the Rock in Your Distress",
    body: "When the cords of death encompassed him, David did one thing: &ldquo;In my distress I called upon the LORD.&rdquo; He did not first try to fight his own way free; he cried out, and from his temple God heard his voice. The whole architecture of the psalm hangs on this cry. When trouble entangles you &mdash; when the torrents of destruction assail and the trap seems to close &mdash; the first and best response is not panic or scheming but prayer. The same God who heard David hears you, and no distress is too deep for his reach. Make calling on the LORD your reflex rather than your last resort. Name him as your rock and your fortress, run to him, and trust that your cry reaches his ears as surely as David&rsquo;s did.",
    accent: TEAL,
  },
  {
    title: "Rest in His Delight, Not Your Performance",
    body: "&ldquo;He rescued me, because he delighted in me.&rdquo; This single line guards us from two errors at once. It guards us from despair, because our rescue does not finally rest on the cleanness of our hands but on the delight of our God. And it guards us from pride, because the same delight is pure grace, not a wage we have earned. When you are tempted to think God could never love someone like you, or tempted to think you have somehow secured his favor by your goodness, return to verse 19. God brought you into a broad place because he delighted in you. In Christ that delight is settled and sure. Let it become the bedrock of your assurance, the wide-open place into which the gospel has set you free.",
    accent: GOLD,
  },
  {
    title: "Let Him Equip You for the Heights",
    body: "David did not only need to be rescued; he needed to be made fit for the dangerous heights of his calling. &ldquo;He made my feet like the feet of a deer and set me secure on the heights.&rdquo; The Christian life is full of perilous ledges &mdash; temptations, trials, responsibilities that would topple us if we stood in our own strength. But the God who delivers also equips. He lights our lamp in the darkness, gives us the shield of his salvation, and makes our footing sure where we would otherwise slip. When you face a task or a season that feels beyond you, do not measure it by your own ability. Ask the God who trained David&rsquo;s hands for war to equip you, and trust his gentleness to make you great enough for the path he has set before you.",
    accent: GREEN,
  },
  {
    title: "Sing His Praise Among the Nations",
    body: "David ends by vowing to praise the LORD &ldquo;among the nations,&rdquo; and Paul lifts that very line to celebrate the salvation now flowing to the Gentiles. The steadfast love shown to God&rsquo;s anointed was never meant to stay locked within one people; it was always headed for the ends of the earth, fulfilled in Jesus, the offspring of David who reigns forever. Your own deliverance is part of that same outward movement. The mercy you have received is meant to be told. Let the testimony of what God has done for you spill over into praise that others can hear, and let your gratitude become a witness that draws the nations toward the great Deliverer, the Son of David in whom God&rsquo;s steadfast love endures forever.",
    accent: ROSE,
  },
];

const REFLECTION: string[] = [
  "David begins with &ldquo;I love you, O LORD.&rdquo; Has your relationship with God become mostly a matter of duty, or is it still rooted in love? What would it look like to recover that warmth?",
  "Verse 19 says God rescued David &ldquo;because he delighted in me.&rdquo; How does it change your sense of security to know that God&rsquo;s rescue flows from his delight rather than your performance?",
  "When the cords of death encompassed him, David&rsquo;s first move was to call on the LORD. When trouble comes, is prayer your reflex or your last resort? Why?",
  "The theophany in verses 7&ndash;15 paints David&rsquo;s rescue in the cosmic language of Sinai and the Exodus. How does seeing God&rsquo;s power on that scale shape the way you bring your own troubles to him?",
  "Verses 25&ndash;27 teach that God meets us according to the posture of our hearts &mdash; merciful to the merciful, resisting the crooked and the proud. Where might pride be shaping the way you experience God?",
  "Paul quotes Psalm 18:49 to show God&rsquo;s salvation reaching the nations through David&rsquo;s greater Son. How does your own deliverance call you to praise God &ldquo;among the nations&rdquo;?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 18 - David's Song of Deliverance" },
  { videoId: "Q2oNOlXzBhY", title: "The Rock, the Fortress, and the Deliverer" },
  { videoId: "8phkAg8PMHE", title: "He Bowed the Heavens and Came Down - The Theophany of Psalm 18" },
  { videoId: "fNk_zzaMoSs", title: "He Delighted in Me - Grace at the Heart of the Rescue" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm18Guide() {
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
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 18
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "David&rsquo;s great royal song of deliverance, sung &ldquo;on the day the LORD delivered him from all his enemies and from the hand of Saul&rdquo; and recorded again near the end of his life in 2 Samuel 22. It moves from an intimate confession of love, through a cascade of refuge metaphors and a cosmic theophany of rescue, to the surprising heart of it all &mdash; &ldquo;he rescued me, because he delighted in me.&rdquo;" }} />
          <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, background: CARD, margin: 0, padding: "1.25rem 1.5rem", borderRadius: "0 10px 10px 0" }}>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.&rdquo;" }} />
            <cite style={{ color: PURPLE, fontWeight: 700, fontStyle: "normal", fontSize: 14, letterSpacing: 0.5 }}>Psalm 18:2</cite>
          </blockquote>
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
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.25rem" }}>A Lifetime of Deliverance in Song</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Psalm 18 is one of the longest songs in the Psalter and one of the most majestic, a royal hymn of thanksgiving that David sang looking back over a whole life of rescue. The superscription tells us he sang it &ldquo;on the day when the LORD delivered him from the hand of all his enemies, and from the hand of Saul.&rdquo; It is remarkable enough that the psalm appears almost word for word in 2 Samuel 22, where it is placed among David&rsquo;s last words &mdash; a sign that this song meant so much to him that it framed both his rise and the close of his reign." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The structure carries us through a great arc. It opens with intimacy &mdash; &ldquo;I love you, O LORD, my strength&rdquo; &mdash; and a torrent of refuge names piled one upon another (vv.1&ndash;3). Then David recalls his peril, the cords of death entangling him, and his cry to God (vv.4&ndash;6). What follows is the dramatic theophany (vv.7&ndash;15): the earth reels, smoke rises from God&rsquo;s nostrils, he bows the heavens and rides on a cherub, he thunders and sends out his arrows &mdash; cosmic imagery for a real deliverance." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "From the storm the psalm turns to rescue (vv.16&ndash;24): &ldquo;He sent from on high, he took me; he drew me out of many waters,&rdquo; and at the center of it all the astonishing reason &mdash; &ldquo;he rescued me, because he delighted in me.&rdquo; David then reflects on the correspondence between God&rsquo;s character and ours (vv.25&ndash;36) &mdash; mercy to the merciful, salvation to the humble &mdash; and celebrates the God who equips him with strength and makes his feet like a deer&rsquo;s. The closing movement (vv.37&ndash;50) recounts his victories and rises to praise the living God whose steadfast love rests on &ldquo;his anointed, to David and his offspring forever.&rdquo;" }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The theophany of verses 7 through 15 deliberately echoes Sinai and the Exodus, casting David&rsquo;s personal deliverance in the grand terms of God&rsquo;s cosmic saving power. The God who shook the mountain and parted the sea is the God who came down to rescue one hunted man. And the psalm carries a messianic horizon: the &ldquo;anointed&rdquo; whose &ldquo;offspring&rdquo; endures &ldquo;forever&rdquo; points beyond David to Christ. The apostle Paul quotes Psalm 18:49 in Romans 15:9 &mdash; &ldquo;I will praise you among the Gentiles&rdquo; &mdash; to show that the salvation of David&rsquo;s King was always meant to overflow to the nations." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Read as a whole, Psalm 18 teaches us how to remember. David does not merely catalog his battles; he interprets them as the saving acts of a God who loves him, weaving his whole story into one long act of worship. For the believer, the psalm becomes a pattern for our own remembering &mdash; to look back over our deliverances, to trace them all to the delight of God, and to let the memory rise into love and praise to the rock in whom we take refuge." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Seven threads run through David&rsquo;s great song of deliverance. Select each to open the full reflection and its cross-references." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEMES.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.1rem", fontWeight: 700, textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                      <span style={{ color: PURPLE, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: isOpen ? "&#8722;" : "&#43;" }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem" }}>
                        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: "0 0 1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                        <div style={{ display: "inline-block", background: PURPLE + "1A", color: PURPLE, borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: "Cross references: " + item.refs }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 18 in six movements, from the opening confession of love to the closing praise of God&rsquo;s steadfast love to his anointed forever." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSES.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }} dangerouslySetInnerHTML={{ __html: item.reference }} />
                        <span style={{ fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                      </span>
                      <span style={{ color: TEAL, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: isOpen ? "&#8722;" : "&#43;" }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem" }}>
                        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 18 is not only a record of David&rsquo;s rescue but a pattern for our own remembering and trust. Here are five ways to bring its truth into your life." }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "3rem" }}>
              {APP_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${item.accent}`, borderRadius: "0 12px 12px 0", padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: item.accent, fontSize: "1.18rem", fontWeight: 700, margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
              <h3 style={{ color: GOLD, fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {REFLECTION.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.8, paddingLeft: 6 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Psalm 18 through visual teaching on the song of deliverance, the refuge metaphors, the theophany of rescue, and the grace at the heart of it all." }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: "3rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${TEAL}18)`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.9rem 2rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.9, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "O LORD, my rock and my fortress and my deliverer, I love you, my strength. You have drawn me out of many waters and brought me into a broad place, not because my hands were clean enough to earn it, but because you delighted in me. Teach me to run to you in every distress, to rest in your delight rather than my own performance, and to let you equip me for the heights you have set before me. Light my lamp in the darkness, set my feet secure, and let the memory of your rescue rise into love and praise. As you keep your steadfast love to your anointed, to David and his offspring forever, so keep me in Christ, great David&rsquo;s greater Son, and let me sing your name among the nations. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
