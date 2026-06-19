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
    heading: "The Cosmic Summons to Praise",
    body: "Psalm 148 is the grandest of all the praise psalms &mdash; a sweeping, all-encompassing summons for the entire created order to praise the LORD. Standing in the heart of the &lsquo;Hallelujah&rsquo; cluster (146&ndash;150) that crowns the Psalter, it does not merely praise God; it conscripts the whole universe into a choir. From the highest angels to the deepest sea creatures, from the blazing sun to the creeping things of the ground, from kings on their thrones to children at play, every category of creation is named and called to lift up the name of the LORD. It is one of the great creation-praise psalms, standing alongside Psalm 19, 104, and 150, and it gives us an Old Testament vision of the cosmic worship that the book of Revelation finally fulfills.",
  },
  {
    heading: "Two Great Movements: Heaven and Earth",
    body: "The psalm is built in two grand movements that mirror each other. The first calls for praise &lsquo;from the heavens&rsquo; (148:1&ndash;6): the angels and all his hosts, the sun and moon and shining stars, the highest heavens and the waters above the heavens. The second calls for praise &lsquo;from the earth&rsquo; (148:7&ndash;14): the great sea creatures and all deeps, fire and hail, snow and mist, stormy wind, mountains and hills, fruit trees and cedars, beasts and livestock, creeping things and flying birds, and then every order of humanity &mdash; kings and peoples, princes and rulers, young men and maidens, old men and children. Heaven above and earth below, the whole vertical span of creation, is gathered into a single act of worship.",
  },
  {
    heading: "The Ground of Praise: His Command in Creation",
    body: "Why should all these things praise the LORD? The psalm gives a clear and repeated answer: because he made them by his word. Of the heavenly host it says, &lsquo;Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:5&ndash;6). The basis of praise is creation by the sovereign word of God. He spoke, and it was so. The same word that called the cosmos into being holds it in place forever. All creation owes its existence and its endurance to his command, and so all creation owes him praise.",
  },
  {
    heading: "The Supremacy of His Name and the Horn of His People",
    body: "The psalm climbs to its summit in a single confession: &lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven&rsquo; (148:13). Above the whole double choir of heaven and earth stands the one exalted Name. Then comes a final, surprising note: &lsquo;He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him&rsquo; (148:14). The &lsquo;horn&rsquo; is the biblical symbol of strength and salvation, and this is messianic language &mdash; the very phrase Zechariah took up when he prophesied that God had &lsquo;raised up a horn of salvation for us in the house of his servant David&rsquo; (Luke 1:69). The cosmic praise comes home to God&rsquo;s saving work for his people.",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t-allcreation",
    title: "All Creation Is Summoned to Praise",
    color: GOLD,
    body: "Psalm 148 names creature after creature and calls each to praise: angels, hosts, sun, moon, stars, the highest heavens, sea monsters, the deeps, fire, hail, snow, mist, stormy wind, mountains, hills, trees, beasts, birds, and every order of humanity. Nothing is left out. The psalm assumes that the whole universe exists not as a neutral backdrop but as a vast assembly designed for worship. Even things that cannot speak &mdash; the sun, the mountains, the sea &mdash; declare the glory of their Maker by their very being (cf. Psalm 19:1). This is a breathtaking vision of reality: the cosmos itself is a temple, and every creature in it has a part in the song.",
  },
  {
    id: "t-heavenearth",
    title: "From the Highest Heavens to the Lowest Deeps",
    color: TEAL,
    body: "The structure of the psalm sweeps from top to bottom. It begins in the highest heavens &mdash; with the angels and the hosts, the sun and moon and stars, the waters above &mdash; and then descends to the earth, summoning the great sea creatures and all deeps, the weather and the mountains, the trees and the beasts, and finally every kind of human being. This deliberate movement from the loftiest to the lowliest declares that there is no realm of creation outside the reach of God&rsquo;s glory and no creature too high or too low to praise him. The whole vertical span of the universe is one continuous choir, and the LORD is worthy of praise from every level of it.",
  },
  {
    id: "t-command",
    title: "He Commanded and They Were Created",
    color: PURPLE,
    body: "&lsquo;Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:5&ndash;6). Here is the ground of all the praise: creation by the word of God. He did not labor or struggle to make the world; he spoke, and it was so (Genesis 1; Psalm 33:6, 9). And the same word that created also sustains: he established the heavens forever and gave a decree that shall not pass away. The order and endurance of the universe rest on the reliability of God&rsquo;s command. Because everything owes its existence and stability to his word, everything owes him praise.",
  },
  {
    id: "t-name",
    title: "His Name Alone Is Exalted",
    color: ROSE,
    body: "&lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven&rsquo; (148:13). After cataloging the vast double choir of heaven and earth, the psalm fixes everything on one point: the supremacy of God&rsquo;s name. His name &mdash; alone &mdash; is exalted; his majesty rises above both earth and heaven, above the entire creation that has just been summoned to praise. No creature, however glorious, shares this exaltation; the angels, the sun, and the kings of the earth are all worshipers, not the worshiped. This is the great corrective to every form of idolatry: the proper response to the wonders of creation is not to worship the creature but to praise the name of the Creator, whose majesty is above it all.",
  },
  {
    id: "t-horn",
    title: "He Has Raised Up a Horn for His People",
    color: GREEN,
    body: "&lsquo;He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him. Praise the LORD!&rsquo; (148:14). The vast cosmic praise lands at last on God&rsquo;s particular love for his people. The &lsquo;horn&rsquo; in Scripture is the symbol of strength, dignity, and victory; to &lsquo;raise up a horn&rsquo; is to grant salvation and triumph. This is messianic language: Zechariah, filled with the Holy Spirit, declared that God had &lsquo;raised up a horn of salvation for us in the house of his servant David&rsquo; (Luke 1:69), pointing to Christ. The God whose majesty is above earth and heaven has drawn near to a people and lifted up for them a horn of salvation &mdash; reason enough for the whole creation to praise.",
  },
  {
    id: "t-revelation",
    title: "The Worship That Revelation Fulfills",
    color: GOLD,
    body: "Psalm 148 is an Old Testament foreshadowing of the cosmic worship that the book of Revelation brings to its consummation. John heard &lsquo;every creature in heaven and on earth and under the earth and in the sea, and all that is in them, saying, &ldquo;To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever!&rdquo;&rsquo; (Revelation 5:13). That is Psalm 148 fulfilled &mdash; the very same double choir of heaven and earth, now gathered around the throne and the Lamb. This psalm inspired the ancient canticle &lsquo;Benedicite&rsquo; and Saint Francis&rsquo;s &lsquo;Canticle of the Sun,&rsquo; teaching the church in every age to call all creation into the praise of God.",
  },
];

const verseSections: { id: string; ref: string; label: string; body: string }[] = [
  {
    id: "v-12",
    ref: "Psalm 148:1&ndash;2",
    label: "Praise the LORD from the heavens",
    body: "&lsquo;Praise the LORD! Praise the LORD from the heavens; praise him in the heights! Praise him, all his angels; praise him, all his hosts!&rsquo; (148:1&ndash;2). The psalm opens with its great cry, &lsquo;Hallelujah,&rsquo; and immediately lifts our eyes to the heights. The first to be summoned are the highest creatures of all: the angels and the heavenly hosts, the armies of God who stand in his presence. If the holy angels, who behold his face, are called to praise him, how much more every lesser creature. The psalm begins at the top of the cosmic order, in the courts of heaven, and from there the summons will cascade downward through all of creation. Worship starts in the heights and rolls down to fill the earth.",
  },
  {
    id: "v-36",
    ref: "Psalm 148:3&ndash;6",
    label: "Sun, moon, and stars; he commanded and they were created",
    body: "&lsquo;Praise him, sun and moon, praise him, all you shining stars! Praise him, you highest heavens, and you waters above the heavens! Let them praise the name of the LORD! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away&rsquo; (148:3&ndash;6). The sun, moon, and stars &mdash; the very objects the nations worshiped as gods &mdash; are here put firmly in their place: they are not deities but worshipers, called to praise their Maker. And the reason is given plainly: &lsquo;he commanded and they were created.&rsquo; They exist only because he spoke, and they endure only because his decree upholds them. The great lights of heaven are creatures, and their glory is meant to send our praise past them to the One who made them.",
  },
  {
    id: "v-710",
    ref: "Psalm 148:7&ndash;10",
    label: "Praise the LORD from the earth",
    body: "&lsquo;Praise the LORD from the earth, you great sea creatures and all deeps, fire and hail, snow and mist, stormy wind fulfilling his word! Mountains and all hills, fruit trees and all cedars! Beasts and all livestock, creeping things and flying birds!&rsquo; (148:7&ndash;10). Now the summons turns to the earth, and it spares nothing. The great sea creatures and the ocean depths, the elements of weather that seem so wild &mdash; fire, hail, snow, mist, the stormy wind &lsquo;fulfilling his word&rsquo; &mdash; the towering mountains and rolling hills, the fruit trees and the great cedars, the beasts and livestock, the creeping things and the birds: all are called to praise. Even the untamed forces of nature obey his command, and even the lowliest creeping creature has its place in the choir of creation.",
  },
  {
    id: "v-1112",
    ref: "Psalm 148:11&ndash;12",
    label: "Kings and peoples, young and old",
    body: "&lsquo;Kings of the earth and all peoples, princes and all rulers of the earth! Young men and maidens together, old men and children!&rsquo; (148:11&ndash;12). Having summoned the heavens and the natural world, the psalm now turns to humanity in all its variety. The mighty are named first &mdash; kings, peoples, princes, rulers &mdash; for even the most powerful of men are creatures who owe their breath and their thrones to God. Then come the ordinary and the overlooked: young men and maidens, old men and children. No age, no rank, no station is excluded. Every human being, from the king on his throne to the child at play, is called into the one great act of praise. Before the LORD, all are equal worshipers.",
  },
  {
    id: "v-1314",
    ref: "Psalm 148:13&ndash;14",
    label: "His name alone is exalted; he has raised up a horn",
    body: "&lsquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven. He has raised up a horn for his people, praise for all his saints, for the people of Israel who are near to him. Praise the LORD!&rsquo; (148:13&ndash;14). The psalm gathers its entire universe of worshipers and points them to a single object: the exalted name of the LORD, whose majesty towers above all earth and heaven. And then, at the very end, the cosmic praise comes home. The God whose glory fills the universe has drawn near to a people and raised up for them a &lsquo;horn&rsquo; &mdash; a strength, a salvation &mdash; messianic language fulfilled in Christ (Luke 1:69). The psalm closes as it began, with its great cry: &lsquo;Praise the LORD!&rsquo;",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Join the Choir of All Creation",
    color: GOLD,
    body: "Psalm 148 reveals that you are not alone when you praise God &mdash; you are joining a choir that already includes the angels, the stars, the mountains, the seas, and every living thing. When your own praise feels small or your heart feels cold, remember the vast company you are joining. The sun rising, the storm blowing, the bird singing, the cedar standing tall &mdash; all of it is already praising the Maker, each in its own way. Lift your voice and take your place in the song of creation. Far from being a lonely act, your worship is one small but real part of the cosmic praise that fills heaven and earth.",
  },
  {
    heading: "See Creation as a Call to Worship the Creator",
    color: TEAL,
    body: "&lsquo;He commanded and they were created.&rsquo; The sun, moon, and stars that the nations worshiped are, in this psalm, mere creatures called to praise their Maker. Let Psalm 148 train your eyes. When you marvel at the night sky, the ocean, the mountains, or a newborn child, let that wonder become praise &mdash; not of the creature, but of the Creator whose word made it all. The beauty of the world is not an end in itself; it is a signpost. The proper response to a glorious creation is never to worship the gift but to praise the Giver, whose name alone is exalted and whose majesty is above earth and heaven.",
  },
  {
    heading: "Rest in the Reliability of His Word",
    color: PURPLE,
    body: "&lsquo;He gave a decree, and it shall not pass away.&rsquo; The same word that created the universe holds it in place &mdash; the sun rises, the seasons turn, the stars keep their courses, all by the unfailing decree of God. If his word is reliable enough to govern the cosmos, it is reliable enough to govern your life. When circumstances feel chaotic and uncertain, anchor yourself in the trustworthiness of the God whose command established the heavens forever. His promises to you in Scripture rest on the same sure foundation as the order of creation: a word that shall not pass away, fulfilled and confirmed in Jesus Christ (Matthew 24:35).",
  },
  {
    heading: "Praise Him for the Horn of Salvation",
    color: ROSE,
    body: "&lsquo;He has raised up a horn for his people.&rsquo; The cosmic praise of Psalm 148 lands at last on God&rsquo;s saving love for his people, and for us that horn of salvation has a name: Jesus Christ, born in the house of David (Luke 1:69). The God whose majesty is above earth and heaven has drawn near to you and lifted up a Savior. Let this be the climax of your praise. Worship him not only as the distant Maker of the stars but as the near Redeemer who raised up a horn of salvation for his people. The whole universe praises him as Creator; you have even more reason to praise him as the God who saved you.",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 148 summons every creature &mdash; angels, stars, storms, mountains, animals, and people &mdash; to praise. How does knowing that you join such a vast choir change the way you approach worship?",
  "The psalm calls the sun, moon, and stars &mdash; the very things others worshiped as gods &mdash; to praise their Maker. Where are you tempted to worship the gift rather than the Giver?",
  "The ground of praise is that &lsquo;he commanded and they were created.&rsquo; How does the truth that all things exist by God&rsquo;s word shape your sense of your own life and purpose?",
  "Verse 6 says God &lsquo;gave a decree, and it shall not pass away.&rsquo; In what uncertain area of your life do you most need to rest in the reliability of God&rsquo;s word?",
  "The climax of the psalm is that &lsquo;his name alone is exalted.&rsquo; What would it look like, this week, to let God&rsquo;s name be exalted above your own plans and reputation?",
  "The psalm ends by celebrating that God &lsquo;has raised up a horn for his people&rsquo; &mdash; messianic language fulfilled in Christ (Luke 1:69). How does seeing Jesus as your horn of salvation deepen your praise?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 148: All Creation, Praise the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "From the Heavens and From the Earth" },
  { videoId: "pHBzJ2dVXgk", title: "His Name Alone Is Exalted" },
  { videoId: "3sO5FH2ybPY", title: "He Has Raised Up a Horn for His People" },
];

export default function Psalm148Guide() {
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
            Psalm 148: Let All Creation Praise the LORD
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "The cosmic summons for all creation to praise the LORD &mdash; in two great movements, praise from the heavens (angels, hosts, sun, moon, stars) and praise from the earth (sea creatures, weather, mountains, trees, beasts, birds, and every order of humanity). The ground of praise is that he commanded and they were created; the climax is that his name alone is exalted; and the final note is that he has raised up a horn for his people." }}
          />
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 148:13</div>
            <p
              style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;Let them praise the name of the LORD, for his name alone is exalted; his majesty is above earth and heaven.&rdquo;" }}
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
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "The Canticle of All Things" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 148 has shaped the worship of the church for centuries. It inspired the ancient canticle &lsquo;Benedicite, omnia opera&rsquo; &mdash; &lsquo;O all you works of the Lord, bless the Lord&rsquo; &mdash; and stands behind Saint Francis of Assisi&rsquo;s beloved &lsquo;Canticle of the Sun.&rsquo; Above all, it gives us an Old Testament glimpse of the worship the book of Revelation finally fulfills, when &lsquo;every creature in heaven and on earth and under the earth and in the sea&rsquo; cries out, &lsquo;To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever!&rsquo; (Revelation 5:13)." }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Key Themes of Psalm 148</h2>
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
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 148 as it sweeps from the highest heavens down to the earth and every creature, gathering all into one great act of praise that ends in the exalted name of the LORD and the horn of salvation raised for his people. Tap each section to open it." }} />
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
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Living Psalm 148</h2>
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
              <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your meditation on Psalm 148 through teaching on the cosmic summons for all creation to praise, the God who commanded and they were created, the supremacy of his exalted name, and the horn of salvation raised up for his people." }} />
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
                dangerouslySetInnerHTML={{ __html: "O LORD, your name alone is exalted, and your majesty is above earth and heaven. With the angels and the hosts, with the sun and moon and shining stars, with the seas and the mountains, the storms and the trees, the beasts and the birds, and all the peoples of the earth, we praise your holy name. You commanded, and we were created; you gave a decree that shall not pass away. We thank you that your cosmic glory has come near to us, for you have raised up a horn of salvation for your people in your Son, Jesus Christ. Let our lives join the song of all creation, until the day when every creature in heaven and earth shall praise you forever. Praise the LORD! Amen." }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
