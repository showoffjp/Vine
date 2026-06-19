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
    id: "praise",
    title: "Praise Waits for You in Zion",
    body: "The psalm opens on a quiet, expectant note: &ldquo;Praise is due to you, O God, in Zion, and to you shall vows be performed&rdquo; (v.1). The Hebrew of this first line carries the sense of praise waiting in stillness, like worshipers gathered and hushed before God, ready to sing. Worship here is both a debt that is due and a vow that is kept &mdash; the people had cried to God in their need, made their promises, and now they come to fulfill them in the place where God had set his name. Praise is not a casual overflow but a sacred obligation gladly paid. Before the psalm turns to the wonders of creation and harvest, it grounds everything in this posture of reverent waiting: the right response to the God who hears prayer and provides for the earth is a people gathered in worship, vows on their lips, ready to give him what they owe.",
    refs: "Psalm 65:1; Psalm 76:11; Ecclesiastes 5:4&ndash;5",
  },
  {
    id: "prayer",
    title: "O You Who Hear Prayer",
    body: "&ldquo;O you who hear prayer, to you shall all flesh come&rdquo; (v.2). This is one of the great titles of God in the Psalter: the One who hears prayer. It is his settled character, not an occasional kindness, and it is the reason the worshipers gather. But the verse widens astonishingly in its second half &mdash; &ldquo;to you shall all flesh come.&rdquo; The God of Israel, who hears the prayers of his covenant people, is the God to whom all humanity will finally come. This is a missionary note sounded centuries before the gospel went to the nations: the hearing God is not a tribal deity but the hope of every people. The psalm anticipates the day when prayer and praise will rise to him not from Zion alone but from every tongue and tribe. The God who bends his ear to one trembling worshiper is the same God to whom all flesh is destined to come.",
    refs: "Psalm 65:2; Isaiah 56:7; 1 Timothy 2:1&ndash;4",
  },
  {
    id: "atonement",
    title: "You Atone for Our Transgressions",
    body: "Before the psalm sings of mountains and seas and harvests, it deals with the deepest human need of all: &ldquo;When iniquities prevail against me, you atone for our transgressions&rdquo; (v.3). David is honest about sin &mdash; iniquities do prevail, they overwhelm, they press in until they seem too strong to overcome. There is no pretense here of self-sufficiency before God. And yet the answer is not despair but atonement: God himself covers, purges, and removes the transgression that the worshiper could never deal with. This is the foundation under all the blessings the psalm will go on to celebrate. Before God crowns the year with bounty, he forgives the sinner. The forgiveness celebrated here in shadow is fulfilled in the cross of Christ, where God provided the perfect atonement, covering our transgressions once for all so that we might be brought near to dwell in his courts.",
    refs: "Psalm 65:3; Psalm 32:1; Hebrews 9:14&ndash;15; Romans 5:11",
  },
  {
    id: "near",
    title: "Blessed Is the One You Bring Near",
    body: "&ldquo;Blessed is the one you choose and bring near, to dwell in your courts! We shall be satisfied with the goodness of your house, the holiness of your temple!&rdquo; (v.4). The greatest blessing the psalm names is not rain or harvest but nearness to God. To be chosen by God and drawn into his courts &mdash; to dwell where he dwells &mdash; is the highest privilege a creature can know. And the result is satisfaction: the soul that comes near to God is filled with the goodness of his house. Notice that the initiative is entirely God&rsquo;s &mdash; he chooses, he brings near. We do not storm the courts of heaven by our own merit; we are invited in by grace. For the believer this finds its fullest meaning in Christ, who by his blood brings near those who were once far off, opening the way into the very presence of God where the soul finds its deepest satisfaction.",
    refs: "Psalm 65:4; Psalm 16:11; Ephesians 2:13; James 4:8",
  },
  {
    id: "power",
    title: "The Hope of All the Ends of the Earth",
    body: "&ldquo;By awesome deeds you answer us with righteousness, O God of our salvation, the hope of all the ends of the earth and of the farthest seas&rdquo; (v.5). God answers prayer not with bare words but with awesome deeds &mdash; mighty acts of salvation that vindicate his people. And again the horizon stretches to the ends of the earth: the God of Israel&rsquo;s salvation is the hope of every distant shore. The psalm then displays his cosmic power: &ldquo;the one who by his strength established the mountains, being girded with might, who stills the roaring of the seas, the roaring of their waves, the tumult of the peoples&rdquo; (vv.6&ndash;7). The God who set the unshakable mountains in place and who hushes the chaos of the raging sea also stills the roaring tumult of the nations. The same power that orders creation governs history, and the One who quiets the storm is the hope of the whole troubled world.",
    refs: "Psalm 65:5&ndash;8; Job 38:8&ndash;11; Mark 4:39&ndash;41",
  },
  {
    id: "provision",
    title: "You Visit the Earth and Water It",
    body: "From cosmic power the psalm turns to tender, intimate care: &ldquo;You visit the earth and water it; you greatly enrich it; the river of God is full of water; you provide their grain, for so you have prepared it&rdquo; (v.9). God does not set the world running and then withdraw; he visits the earth, drenches its furrows, softens it with showers, and blesses its growth (v.10). The picture is of a God personally tending his fields, opening the heavens to pour down rain and bring forth bread for his creatures. Every harvest is a visitation of God. The grain that fills the storehouse and the bread on the table are not the bare mechanics of nature but the daily, hands-on provision of a Father who feeds his world. The same God who established the mountains stoops to water a single furrow, and in his providence the believer learns to trace every loaf back to the hand that opened the sky.",
    refs: "Psalm 65:9&ndash;10; Matthew 5:45; Acts 14:17",
  },
  {
    id: "harvest",
    title: "You Crown the Year With Your Bounty",
    body: "The psalm reaches its joyful climax in a vision of the whole creation overflowing with abundance and bursting into song: &ldquo;You crown the year with your bounty; your wagon tracks overflow with abundance&rdquo; (v.11). The image is of a year garlanded like a king, and of carts so loaded with the harvest that they leave a trail of plenty wherever they pass. Then the landscape itself comes alive: &ldquo;the pastures of the wilderness overflow, the hills gird themselves with joy, the meadows clothe themselves with flocks, the valleys deck themselves with grain, they shout and sing together for joy&rdquo; (vv.12&ndash;13). Pastures overflow, hills wrap themselves in gladness, valleys dress in waving grain &mdash; and all of it shouts and sings. This is exuberant praise put into the mouth of creation itself. The harvest is not merely useful; it is a hymn, the visible joy of a world tended by a generous God whose bounty crowns the turning year.",
    refs: "Psalm 65:11&ndash;13; Psalm 96:11&ndash;12; Isaiah 55:12",
  },
];

const VERSES: VerseItem[] = [
  {
    id: "v1",
    reference: "Psalm 65:1&ndash;4",
    label: "Praise, Prayer, Atonement, and Nearness",
    body: "The opening movement gathers four great truths in quick succession. &ldquo;Praise is due to you, O God, in Zion, and to you shall vows be performed&rdquo; (v.1) &mdash; worship waits in reverent stillness, a debt gladly paid. &ldquo;O you who hear prayer, to you shall all flesh come&rdquo; (v.2) &mdash; the hearing God is the hope of every people. Then the psalm faces sin honestly: &ldquo;When iniquities prevail against me, you atone for our transgressions&rdquo; (v.3) &mdash; the deepest need met by atoning grace. And it crowns the section with the highest blessing of all: &ldquo;Blessed is the one you choose and bring near, to dwell in your courts! We shall be satisfied with the goodness of your house, the holiness of your temple!&rdquo; (v.4). The structure is deliberate: before God provides rain and harvest, he hears prayer, forgives sin, and draws the worshiper near. Spiritual blessing comes first, and it is all of grace &mdash; God chooses, God atones, God brings near.",
  },
  {
    id: "v5",
    reference: "Psalm 65:5&ndash;8",
    label: "Awesome Deeds and the Stilling of the Seas",
    body: "&ldquo;By awesome deeds you answer us with righteousness, O God of our salvation, the hope of all the ends of the earth and of the farthest seas&rdquo; (v.5). God answers the prayers of his people with mighty acts, and his salvation reaches beyond Israel to the farthest shores. The psalm then unfolds his cosmic power: &ldquo;the one who by his strength established the mountains, being girded with might, who stills the roaring of the seas, the roaring of their waves, the tumult of the peoples&rdquo; (vv.6&ndash;7). The unshakable mountains testify to his strength; the hushing of the raging sea testifies to his sovereignty over chaos; and in the same breath he stills &ldquo;the tumult of the peoples&rdquo; &mdash; the roaring of the nations is no harder for him to quiet than the roaring of the waves. The section ends with worldwide awe: &ldquo;those who dwell at the ends of the earth are in awe at your signs. You make the going out of the morning and the evening to shout for joy&rdquo; (v.8).",
  },
  {
    id: "v9",
    reference: "Psalm 65:9&ndash;10",
    label: "You Visit the Earth and Water It",
    body: "Here the psalm turns from cosmic might to tender provision. &ldquo;You visit the earth and water it; you greatly enrich it; the river of God is full of water; you provide their grain, for so you have prepared it&rdquo; (v.9). The God who established the mountains now stoops to drench the soil and prepare the grain. The &ldquo;river of God&rdquo; that is full of water pictures heaven&rsquo;s inexhaustible supply, never running dry. Verse 10 continues the loving labor: &ldquo;You water its furrows abundantly, settling its ridges, softening it with showers, and blessing its growth.&rdquo; Every verb is personal and intentional &mdash; God waters, settles, softens, blesses. This is not impersonal nature but the hands-on care of a God who tends his fields furrow by furrow. The rain that falls and the seed that swells are his daily gifts, and the worshiper who sees this learns to receive the harvest as a visitation of divine goodness rather than the bare turning of the seasons.",
  },
  {
    id: "v11",
    reference: "Psalm 65:11&ndash;13",
    label: "You Crown the Year With Your Bounty",
    body: "The psalm closes in a burst of joy: &ldquo;You crown the year with your bounty; your wagon tracks overflow with abundance&rdquo; (v.11). The turning year is garlanded like a king, and the very paths of God&rsquo;s harvest-wagons drip with plenty. Then creation itself begins to sing: &ldquo;The pastures of the wilderness overflow, the hills gird themselves with joy, the meadows clothe themselves with flocks, the valleys deck themselves with grain, they shout and sing together for joy&rdquo; (vv.12&ndash;13). Even the wilderness pastures overflow; the hills wrap themselves in gladness as in a robe; the valleys put on waving grain like festal clothing. And the landscape does not merely flourish &mdash; it shouts and sings. This exuberant personification gives the harvest a voice, turning fields and hills and valleys into a choir of praise. The psalm that began with praise waiting in Zion ends with all creation joining the song, a fitting hymn of gratitude for both spiritual salvation and material provision.",
  },
];

const APP_ITEMS: AppItem[] = [
  {
    title: "Come to the God Who Hears Prayer",
    body: "The psalm names God simply as &ldquo;you who hear prayer,&rdquo; and declares that to him all flesh shall come. This is not a God who must be coaxed into listening; hearing prayer is who he is. When your prayers feel like words spoken into an empty room, return to this title. The same God who tends every furrow of the earth bends his ear to your cry. Let this settled truth shape your prayer life &mdash; bring him your need with confidence, knowing that he hears. And let it stir your hope for the nations, for the One who hears your prayer is the hope of all the ends of the earth. Pray boldly for yourself, and pray expectantly for a world that is destined, in his time, to come to the God who hears.",
    accent: TEAL,
  },
  {
    title: "Let Grace Deal With Your Sin First",
    body: "Before Psalm 65 sings of harvest, it confesses: &ldquo;When iniquities prevail against me, you atone for our transgressions.&rdquo; Notice the order. Material blessing is real and good, but the deepest need is forgiveness, and the psalm meets it first. When sin presses in until it feels too strong to overcome, do not look away or pretend; bring it honestly to God, who alone can atone. For us this atonement is no longer a shadow but a finished work in Christ, who covered our transgressions on the cross. Let the gospel order your life as it orders this psalm: receive forgiveness as the foundation of every other blessing. The God who crowns your year with bounty has first dealt with your guilt, and that is the greater gift by far.",
    accent: ROSE,
  },
  {
    title: "Seek Nearness as Your Highest Good",
    body: "&ldquo;Blessed is the one you choose and bring near, to dwell in your courts! We shall be satisfied with the goodness of your house.&rdquo; The psalm calls nearness to God, not abundance of harvest, the truly blessed thing. It is easy to chase a hundred lesser satisfactions and miss the one that fills the soul. Ask yourself where you are seeking to be satisfied. The goodness of God&rsquo;s house, the joy of dwelling in his presence, is the satisfaction every other pleasure only imitates. And remember that you do not earn your way in &mdash; he chooses and brings near. In Christ that nearness is yours; the way into the presence of God stands open. Make it your daily aim to draw near to the One who has drawn you near, and find there the satisfaction nothing else can give.",
    accent: PURPLE,
  },
  {
    title: "Receive the Harvest as a Visitation of God",
    body: "&ldquo;You visit the earth and water it... you crown the year with your bounty.&rdquo; The psalm refuses to see the harvest as mere mechanism. Every drop of rain, every swelling grain, every loaf of bread is a visitation of God, the hands-on provision of a generous Father. In a world that takes its food for granted, this psalm trains us to give thanks. Look at what fills your table, your home, your life, and trace it back to the hand that opened the sky. Let gratitude become a habit rather than an afterthought. Whether your year has overflowed or been lean, the God who waters the furrows is at work, and seeing his care behind your daily provision turns ordinary meals into occasions of worship and contentment.",
    accent: GREEN,
  },
  {
    title: "Join the Song of Creation",
    body: "The psalm ends with pastures overflowing, hills girding themselves with joy, and valleys decked in grain that &ldquo;shout and sing together for joy.&rdquo; If the fields and hills can rejoice in the bounty of God, how much more should we who know him as Father and Savior? Psalm 65 is a perfect song for harvest and thanksgiving, but its gladness is meant for every season. When you see the goodness of God in creation and in your own life, do not let it pass in silence. Add your voice to the chorus that the meadows and valleys are already singing. Let your gratitude be vocal and your praise exuberant, for you have more reason to sing than the hills &mdash; you have been forgiven, brought near, and satisfied by the God who crowns the year with his bounty.",
    accent: GOLD,
  },
];

const REFLECTION: string[] = [
  "The psalm calls God &ldquo;you who hear prayer.&rdquo; How does knowing that hearing prayer is part of God&rsquo;s very character change the way you approach him?",
  "Psalm 65 deals with atonement (v.3) before it celebrates harvest. Why is it significant that forgiveness comes first, and how does the cross of Christ fulfill this?",
  "Verse 4 calls nearness to God the truly blessed thing. Where in your life are you seeking satisfaction in lesser things instead of in the goodness of God&rsquo;s house?",
  "God &ldquo;stills the roaring of the seas... and the tumult of the peoples&rdquo; (v.7). How does his power over both nature and nations encourage you in a turbulent world?",
  "The psalm pictures God personally watering each furrow (vv.9&ndash;10). How might seeing your daily provision as a visitation of God reshape your gratitude?",
  "Creation itself shouts and sings for joy (vv.12&ndash;13). What would it look like for your own praise to become as exuberant as the rejoicing of the hills and valleys?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 65 - The God Who Crowns the Year With Bounty" },
  { videoId: "OjJ7GkWCHvA", title: "O You Who Hear Prayer - A Study of Psalm 65" },
  { videoId: "pHBzJ2dVXgk", title: "Grace, Power, and Providence in Psalm 65" },
  { videoId: "3sO5FH2ybPY", title: "When Creation Sings - The Harvest Joy of Psalm 65" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm65Guide() {
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
          <div style={{ display: "inline-block", background: GREEN + "22", color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 65
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "A thanksgiving psalm that celebrates the grace of God in atonement, the power of God in creation, and the providence of God in the harvest. It moves from forgiveness and nearness in Zion, through the stilling of the seas and the tumult of the peoples, to a vision of valleys and hills so laden with bounty that they &ldquo;shout and sing together for joy.&rdquo;" }} />
          <blockquote style={{ borderLeft: `4px solid ${GREEN}`, background: CARD, margin: 0, padding: "1.25rem 1.5rem", borderRadius: "0 10px 10px 0" }}>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;You crown the year with your bounty; your wagon tracks overflow with abundance.&rdquo;" }} />
            <cite style={{ color: GREEN, fontWeight: 700, fontStyle: "normal", fontSize: 14, letterSpacing: 0.5 }}>Psalm 65:11</cite>
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
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                background: tab === t ? GREEN : CARD,
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
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Grace, Power, and Providence</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Psalm 65 is one of the great thanksgiving songs of the Psalter, a hymn that celebrates the goodness of God in three widening circles &mdash; his grace in atonement, his power in creation, and his tender providence in the harvest. It is a psalm to sing at the gathering in of the crops, but its gratitude reaches far beyond a single season, for it traces every blessing, spiritual and material alike, back to the generous hand of God." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The structure moves with a deliberate logic from the deepest need outward. It begins in Zion with praise waiting in stillness and vows ready to be performed (v.1), and names God as the One &ldquo;who hears prayer,&rdquo; to whom &ldquo;all flesh shall come&rdquo; (v.2) &mdash; a missionary note sounded long before the gospel went to the nations. Then it faces the honest truth of sin met by grace: &ldquo;When iniquities prevail against me, you atone for our transgressions&rdquo; (v.3), and it crowns this first movement with the highest blessing of all &mdash; to be chosen and brought near to dwell in God&rsquo;s courts (v.4)." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "From forgiveness the psalm rises to God&rsquo;s cosmic power (vv.5&ndash;8). He answers prayer with &ldquo;awesome deeds,&rdquo; he is &ldquo;the hope of all the ends of the earth,&rdquo; he established the mountains by his strength, and he stills both the roaring of the seas and &ldquo;the tumult of the peoples.&rdquo; The same power that orders creation governs the nations, and the One who quiets the storm is the hope of the whole troubled world." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The final movement turns from cosmic might to intimate care (vv.9&ndash;13). &ldquo;You visit the earth and water it; you greatly enrich it; the river of God is full of water.&rdquo; God waters the furrows, softens the soil with showers, and blesses its growth. Then the psalm bursts into joy: &ldquo;You crown the year with your bounty; your wagon tracks overflow with abundance.&rdquo; Pastures overflow, hills gird themselves with joy, valleys deck themselves with grain, and all of it &ldquo;shouts and sings together for joy&rdquo; &mdash; an exuberant personification of creation rejoicing in the bounty of its Maker." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Read as a whole, Psalm 65 teaches us how to give thanks. It will not let us celebrate the harvest while ignoring our sin, nor will it let us receive forgiveness without seeing the generous God who also feeds the world. The line &ldquo;O you who hear prayer, to you shall all flesh come&rdquo; points outward to the nations, and &ldquo;you atone for our transgressions&rdquo; points forward to the cross. It is a psalm of gratitude for both spiritual salvation and material provision &mdash; grace, power, and providence woven into a single song." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Seven threads run through this great song of thanksgiving, moving from atonement and nearness to cosmic power and overflowing harvest. Select each to open the full reflection and its cross-references." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEMES.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? GREEN : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.1rem", fontWeight: 700, textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                      <span style={{ color: GREEN, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: isOpen ? "&#8722;" : "&#43;" }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem" }}>
                        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: "0 0 1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                        <div style={{ display: "inline-block", background: GREEN + "1A", color: GREEN, borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: "Cross references: " + item.refs }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 65 in four movements, from praise and atonement in Zion to the joyful song of a creation crowned with bounty." }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 65 is a school of gratitude, teaching us to receive both forgiveness and provision from the generous hand of God. Here are five ways to bring its truth into your life." }} />

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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Psalm 65 through visual teaching on the God who hears prayer, the grace of atonement, the power that stills the seas, and the harvest joy of a creation that shouts and sings." }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: "3rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GREEN}22, ${GOLD}18)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.9rem 2rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.9, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "O God who hears prayer, to you all flesh shall come. When my iniquities prevail against me, you atone for my transgressions, and you have chosen me and brought me near to dwell in your courts. Satisfy me with the goodness of your house. You who established the mountains by your strength and still the roaring of the seas, be my hope in every storm and quiet the tumult of my heart. You visit the earth and water it; you crown the year with your bounty. Teach me to receive every gift, forgiveness and daily bread alike, as a visitation of your generous hand, and let my gratitude join the song of the hills and valleys that shout and sing together for joy. Through Jesus Christ, in whom your atoning grace is complete, Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
