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
    heading: "The Grand Finale of the Psalter",
    body: "Psalm 150 is the climax and crowning doxology of the entire book of Psalms. The long and varied journey of the Psalter &mdash; through lament and complaint, thanksgiving and praise, wisdom and royal hope &mdash; resolves at last into pure, unbroken, overflowing praise. Every word of this final psalm is praise; there is no petition, no complaint, no instruction, only the summons to worship the LORD. It is the last of the five &lsquo;Hallelujah&rsquo; psalms (146&ndash;150) that conclude the Psalter, and it functions as the doxology not merely of the fifth book but of all 150 psalms together. Whatever the believer has carried into the Psalms &mdash; sorrow, fear, gratitude, longing &mdash; is here gathered up and transformed into a single, glorious shout of praise that draws in all creation.",
  },
  {
    heading: "Where, Why, How, and Who",
    body: "Psalm 150 is beautifully structured around four questions about praise. It tells us WHERE to praise: &lsquo;Praise God in his sanctuary; praise him in his mighty heavens&rsquo; (150:1) &mdash; both the earthly temple and the cosmic temple of the skies. It tells us WHY to praise: &lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness&rsquo; (150:2) &mdash; for what he has done and for who he is. It tells us HOW to praise: with the full temple orchestra &mdash; trumpet, lute, harp, tambourine and dance, strings and pipe, sounding and clashing cymbals (150:3&ndash;5). And it tells us WHO should praise: &lsquo;Let everything that has breath praise the LORD!&rsquo; (150:6). From the place to the reason to the manner to the universal call, the psalm is a complete vision of worship.",
  },
  {
    heading: "The Ten-Fold &lsquo;Praise Him&rsquo;",
    body: "At the heart of Psalm 150 is a deliberate and mounting repetition. The word &lsquo;praise&rsquo; (Hebrew hallelu) rings out again and again &mdash; ten times as a direct imperative, &lsquo;praise him,&rsquo; and thirteen times in all when the framing &lsquo;Hallelujahs&rsquo; are counted. This is not careless repetition but an artful crescendo, each &lsquo;praise him&rsquo; building upon the last until the whole psalm becomes a rising tide of worship. The hammering refrain leaves no room for anything but praise; it sweeps the reader up into its momentum. By the time we reach the final &lsquo;Let everything that has breath praise the LORD,&rsquo; the repeated summons has become irresistible, and all creation is gathered into the song.",
  },
  {
    heading: "From the Two Ways to Universal Praise",
    body: "The Psalter began in Psalm 1 with the &lsquo;two ways&rsquo; &mdash; the way of the righteous and the way of the wicked &mdash; and in Psalm 2 with the rebellion of the nations against the LORD and his Anointed. It now ends, in Psalm 150, with all rebellion silenced and all creation united in one breath of praise. &lsquo;Everything that has breath&rsquo; recalls the breath of life that God first breathed into humanity (Genesis 2:7); now every living thing returns that breath to its Maker in worship. This is the destiny of redeemed creation, the goal toward which the whole story moves, glimpsed in John&rsquo;s vision of every creature crying praise to the One on the throne and to the Lamb (Revelation 5:13). The Psalter ends not in petition but in praise, because praise is the end of all things.",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t-where",
    title: "Where to Praise: Sanctuary and Heavens",
    color: GOLD,
    body: "&lsquo;Praise God in his sanctuary; praise him in his mighty heavens!&rsquo; (150:1). The psalm begins with the place of praise, and it names two: the &lsquo;sanctuary,&rsquo; the earthly temple where God meets his people, and the &lsquo;mighty heavens,&rsquo; the vast cosmic firmament that is itself a temple displaying his glory (Psalm 19:1). Praise rises from earth and from heaven, from the gathered congregation below and the angelic hosts above, in a single harmony. There is no place where God is not worthy of worship. The sanctuary on earth and the sanctuary of the skies together form one great house of praise, and the whole created order, seen and unseen, is summoned to fill it with worship of its Maker.",
  },
  {
    id: "t-why",
    title: "Why to Praise: His Deeds and His Greatness",
    color: TEAL,
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness!&rsquo; (150:2). The psalm gives two grounds for praise, and together they cover everything. We praise God for his &lsquo;mighty deeds&rsquo; &mdash; what he has done in creation and redemption, in delivering his people and ruling the nations. And we praise him for his &lsquo;excellent greatness&rsquo; &mdash; not merely for what he does, but for who he is in himself, the surpassing greatness of his very being. The proper measure of praise is &lsquo;according to&rsquo; that greatness, which means no praise can ever be too much; his greatness is infinite, and so the song of praise can never be exhausted. We worship him both for his acts and for his essence.",
  },
  {
    id: "t-how",
    title: "How to Praise: The Full Orchestra",
    color: PURPLE,
    body: "&lsquo;Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe! Praise him with sounding cymbals; praise him with loud clashing cymbals!&rsquo; (150:3&ndash;5). The psalm summons the entire temple orchestra &mdash; wind, string, and percussion &mdash; along with the whole body in dance. The blast of the trumpet, the strumming of strings, the beat of the tambourine, the ring of the pipe, the crash of the cymbals: every instrument and every movement is enlisted. This is exuberant, full-bodied, unrestrained worship, holding nothing back. Praise is not to be timid or grudging but lavish and joyful, engaging every sense and every gift God has given, until the whole sanctuary resounds with the music of his glory.",
  },
  {
    id: "t-who",
    title: "Who Should Praise: Everything That Has Breath",
    color: ROSE,
    body: "&lsquo;Let everything that has breath praise the LORD! Praise the LORD!&rsquo; (150:6). The psalm ends with the widest possible summons. Not only the temple choir, not only Israel, not only humanity, but &lsquo;everything that has breath&rsquo; is called to praise. The phrase recalls the breath of life God breathed into the first human (Genesis 2:7) and indeed into all living creatures (Genesis 7:22); every breathing thing owes its life to God and is called to return that breath in praise. The very breath we use to live is given so that we may worship the One who gave it. This universal call is the destiny of redeemed creation, fulfilled when every creature in heaven and earth joins the song before the throne and the Lamb (Revelation 5:13).",
  },
  {
    id: "t-doxology",
    title: "The Doxology of the Whole Psalter",
    color: GREEN,
    body: "Each of the five &lsquo;books&rsquo; of the Psalms closes with a doxology &mdash; Psalm 41:13, 72:18&ndash;19, 89:52, and 106:48 &mdash; and Psalm 150 is the grand doxology that closes them all. It is not the conclusion of Book Five only but the final &lsquo;Amen&rsquo; of the entire collection. All the lament and longing, all the thanksgiving and trust, all the wisdom and royal hope of the preceding 149 psalms now resolve into this one sustained note of praise. The Psalter teaches us that the journey of faith, with all its valleys and heights, is moving toward a single destination: the unbroken praise of God. Whatever we bring into the Psalms, we are meant to leave singing Psalm 150.",
  },
  {
    id: "t-breath",
    title: "Praise as the Purpose of Every Breath",
    color: GOLD,
    body: "The final word of the psalm &mdash; and of the whole Psalter &mdash; ties praise to the most basic fact of existence: breath. &lsquo;Everything that has breath&rsquo; is to praise the LORD, which means that as long as there is breath in our lungs, there is a calling on our lives to worship. Praise is not an optional extra for the religious; it is the very purpose for which we were given life. The breath God breathed into us (Genesis 2:7) is meant to return to him in worship. This reframes all of life: every inhale is a gift, and every exhale an opportunity for praise. To live is to be summoned to glorify God, and the believer will find this calling fulfilled and perfected in the everlasting praise of heaven.",
  },
];

const verseSections: { id: string; ref: string; label: string; body: string }[] = [
  {
    id: "v-1",
    ref: "Psalm 150:1",
    label: "The WHERE of praise: sanctuary and mighty heavens",
    body: "&lsquo;Praise the LORD! Praise God in his sanctuary; praise him in his mighty heavens!&rsquo; (150:1). The final psalm opens with its great cry, &lsquo;Hallelujah,&rsquo; and at once names the place of praise. First the &lsquo;sanctuary&rsquo; &mdash; the earthly temple where God dwelt among his people and met them in worship. Then the &lsquo;mighty heavens&rsquo; &mdash; the vast firmament of the skies, the cosmic temple that proclaims his glory (Psalm 19:1). Praise rises from both: from the congregation gathered below and from the angelic hosts above, from earth and from heaven together. The psalm begins by declaring that the whole of creation, the seen and the unseen, the temple of stone and the temple of the stars, is the house in which God is to be praised.",
  },
  {
    id: "v-2",
    ref: "Psalm 150:2",
    label: "The WHY of praise: his deeds and his greatness",
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness!&rsquo; (150:2). Having named the place, the psalm gives the reasons. We praise God first for his &lsquo;mighty deeds&rsquo; &mdash; the great acts of creation and redemption, of deliverance and judgment, by which he has made himself known. And we praise him &lsquo;according to his excellent greatness&rsquo; &mdash; not only for what he has done but for the surpassing greatness of who he is. The standard of our praise is his own infinite greatness, which means there can never be too much praise; his worth exceeds all our songs. We worship him both for his acts in history and for the boundless excellence of his eternal being.",
  },
  {
    id: "v-35",
    ref: "Psalm 150:3&ndash;5",
    label: "The HOW of praise: the full temple orchestra",
    body: "&lsquo;Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe! Praise him with sounding cymbals; praise him with loud clashing cymbals!&rsquo; (150:3&ndash;5). Now the psalm tells us how to praise, and it summons the entire orchestra of the temple. The trumpet that announced the festivals; the lute and harp and strings that were plucked and strummed; the tambourine that accompanied dancing; the pipe that piped its melody; the cymbals, both gentle and loud and clashing. Wind, string, and percussion, with the whole body in dance &mdash; every instrument and every motion is enlisted in worship. This is praise that holds nothing back, exuberant and full-bodied, engaging every gift to magnify the LORD.",
  },
  {
    id: "v-6",
    ref: "Psalm 150:6",
    label: "The WHO of praise: everything that has breath",
    body: "&lsquo;Let everything that has breath praise the LORD! Praise the LORD!&rsquo; (150:6). The Psalter ends with the widest summons imaginable. The call goes out not only to the temple musicians, not only to Israel, not only to humankind, but to &lsquo;everything that has breath.&rsquo; Every living, breathing creature is gathered into the final chorus. The phrase recalls the breath of life God breathed into humanity (Genesis 2:7); the very breath that sustains us is given that we might return it to God in worship. With one last cry of &lsquo;Praise the LORD!&rsquo; the entire book of Psalms comes to rest. The journey that began with the two ways and the raging of the nations ends with all creation united in a single breath of praise &mdash; the destiny of the redeemed (Revelation 5:13).",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Make Praise the End of Your Journey",
    color: GOLD,
    body: "Psalm 150 stands at the end of a long and varied journey through the Psalms &mdash; through grief, fear, doubt, gratitude, and hope &mdash; and shows that all of it is meant to resolve into praise. Whatever you carry today, let it be moving toward worship. The Psalter does not pretend life is easy; it gives full voice to lament. But it ends in unbroken praise, teaching us that praise is the destination of every faithful life. When you are in the valley, remember where the road leads. Bring your sorrows and your joys alike before God, and let them be gathered up, in his time, into the song of Psalm 150.",
  },
  {
    heading: "Praise Him for His Deeds and His Greatness",
    color: TEAL,
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness.&rsquo; Let your worship rest on both grounds. Praise God for what he has done &mdash; recount his mighty deeds in creation, in the cross and resurrection of Christ, and in the particular mercies of your own life. But do not stop at his deeds; praise him also for who he is, for the sheer excellence and greatness of his being, even when you cannot see what he is doing. When his deeds are hidden from you, his greatness remains. Train your heart to praise God not only as a benefactor who acts, but as the infinitely glorious One who is worthy of praise simply for being who he is.",
  },
  {
    heading: "Let Your Worship Be Whole-Hearted",
    color: PURPLE,
    body: "The psalm calls for the full orchestra &mdash; trumpet, strings, cymbals, and dance &mdash; praise that holds nothing back. Let this challenge any worship that is timid, half-hearted, or grudging. God is worthy of our whole selves: voice and hands, mind and body, every gift and every passion. This does not mean every believer must be loud or musical, but it does mean that worship should engage the whole person and the whole life. Bring your energy, your creativity, your joy. Whether in the gathered congregation or in private devotion, offer God praise that is alive and full-bodied, not a reluctant duty but a glad and lavish celebration of his greatness.",
  },
  {
    heading: "Use Your Breath for Praise",
    color: ROSE,
    body: "&lsquo;Let everything that has breath praise the LORD.&rsquo; The closing word of the Psalter ties praise to the most basic gift of all: breath. As long as you are breathing, you are called and equipped to praise God. Every breath is a gift from him and an opportunity to return that gift in worship. This reframes ordinary life: praise is not reserved for special occasions but is the very purpose of your existence. Let gratitude fill your days, let thanksgiving rise with each breath, and let your whole life become an offering of worship to the One who gave you life &mdash; until your final breath gives way to the everlasting praise of heaven.",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 150 is the grand finale of the whole Psalter, resolving every emotion into praise. What burdens or joys do you need to bring before God and let be gathered up into worship?",
  "The psalm tells us to praise God both &lsquo;for his mighty deeds&rsquo; and &lsquo;according to his excellent greatness.&rsquo; Do you find it easier to praise God for what he does or for who he is, and why?",
  "The full temple orchestra is summoned for praise that holds nothing back. Where is your worship timid or half-hearted, and what would whole-hearted praise look like for you?",
  "&lsquo;Let everything that has breath praise the LORD.&rsquo; How does the truth that praise is the purpose of your very breath change the way you see your ordinary days?",
  "The Psalter that began with the rebellion of the nations (Psalm 2) ends with all creation united in praise. How does this final picture give you hope for the future God is bringing about?",
  "Psalm 150 points forward to the day when every creature praises God before the throne and the Lamb (Revelation 5:13). How can your worship now be a rehearsal for that everlasting song?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 150: Let Everything That Has Breath Praise the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "Where, Why, How, and Who of Praise" },
  { videoId: "pHBzJ2dVXgk", title: "The Grand Doxology of the Psalter" },
  { videoId: "3sO5FH2ybPY", title: "Praise as the Purpose of Every Breath" },
];

export default function Psalm150Guide() {
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
            Psalm 150: Let Everything That Has Breath Praise the LORD
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "The grand finale and doxology of the entire book of Psalms &mdash; a climactic, all-encompassing call to praise built around WHERE to praise (sanctuary and mighty heavens), WHY to praise (his mighty deeds and excellent greatness), HOW to praise (the full temple orchestra), and WHO should praise (everything that has breath). The ten-fold &lsquo;praise him&rsquo; rises to a crescendo as the whole journey of the Psalter resolves into unbroken praise." }}
          />
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 150:6</div>
            <p
              style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;Let everything that has breath praise the LORD! Praise the LORD!&rdquo;" }}
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
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "The Five Doxologies of the Psalter" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The book of Psalms is divided into five &lsquo;books,&rsquo; and each one ends with a doxology &mdash; a short burst of praise: Psalm 41:13, 72:18&ndash;19, 89:52, and 106:48. Psalm 150 is the fifth and final doxology, but it is far more than the close of Book Five; it is the grand doxology that crowns the whole collection of 150 psalms. The Hebrew word for &lsquo;praise&rsquo; (hallelu) sounds thirteen times in these six verses &mdash; ten direct imperatives plus the framing Hallelujahs &mdash; building a deliberate crescendo. The Psalter that opened with the two ways (Psalm 1) and the raging nations (Psalm 2) ends with all creation, every breathing thing, united in praise of the LORD." }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Key Themes of Psalm 150</h2>
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
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 150 as it answers four questions about praise &mdash; the where, the why, the how, and the who &mdash; building to the final summons for everything that has breath to praise the LORD and bringing the entire Psalter to its triumphant close. Tap each section to open it." }} />
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
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Living Psalm 150</h2>
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
              <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your meditation on Psalm 150 through teaching on the grand doxology that closes the Psalter, the where and why and how and who of praise, the ten-fold &lsquo;praise him&rsquo; that builds to a crescendo, and the final summons for everything that has breath to praise the LORD." }} />
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
                dangerouslySetInnerHTML={{ __html: "Praise the LORD! We praise you, O God, in your sanctuary and in your mighty heavens. We praise you for your mighty deeds &mdash; for creation and redemption, for the cross and the empty tomb &mdash; and we praise you according to your excellent greatness, for the boundless glory of who you are. Receive the praise of our whole selves, voice and hands and heart, holding nothing back. We bless you that the long journey of the Psalms, through every sorrow and every joy, ends in unbroken praise; and we long for the day when every creature in heaven and earth shall join the song before your throne and the Lamb. As long as we have breath, we will praise you. Let everything that has breath praise the LORD! Praise the LORD! Amen." }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
