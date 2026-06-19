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
  accent: string;
  reference: string;
  body: string;
}

interface VerseItem {
  id: string;
  reference: string;
  label: string;
  body: string;
}

interface AppSection {
  heading: string;
  accent: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t1",
    title: "A New Song Sung with Skill",
    accent: GREEN,
    reference: "Psalm 33:1&ndash;3",
    body:
      "<p>The psalm opens not with a complaint or a petition but with a summons to joy: &ldquo;Shout for joy in the LORD, O you righteous! Praise befits the upright&rdquo; (33:1). Praise is presented here as something fitting, even owed &mdash; the natural and proper response of the redeemed to their God. The righteous are not coaxed reluctantly into worship; they are reminded that gladness in God is the very thing for which they were made.</p>" +
      "<p>The call is also a call to excellence: &ldquo;Give thanks to the LORD with the lyre; make melody to him with the harp of ten strings. Sing to him a new song; play skillfully on the strings, with loud shouts&rdquo; (33:2&ndash;3). Worship is to be offered with skill and wholeheartedness, not carelessly. The God who made the heavens is worthy of our best craft, our fullest voice, our most attentive art.</p>" +
      "<p>The &ldquo;new song&rdquo; is a recurring note in the Psalter (Psalm 40:3, 96:1, 98:1, 144:9, 149:1). It marks fresh mercies that call forth fresh praise &mdash; a song renewed every time God acts again in faithfulness. That same new song echoes at the climax of redemption in Revelation 5:9, where the ransomed of every tribe sing a new song to the Lamb who was slain. The praise begun by the upright in Psalm 33 finds its final, eternal voice around the throne.</p>",
  },
  {
    id: "t2",
    title: "Creation by the Word of the LORD",
    accent: PURPLE,
    reference: "Psalm 33:4&ndash;9",
    body:
      "<p>At the heart of the psalm stands its great theme: &ldquo;By the word of the LORD the heavens were made, and by the breath of his mouth all their host&rdquo; (33:6). God did not labor over raw materials or wrestle creation into being; he simply spoke, &ldquo;For he spoke, and it came to be; he commanded, and it stood firm&rdquo; (33:9). The universe leapt into existence at the sound of his voice.</p>" +
      "<p>This is the language of Genesis 1, where again and again &ldquo;God said&rdquo; and it was so. The psalmist meditates on that account and draws out its wonder: the word that frames the heavens is &ldquo;upright,&rdquo; and all God&rsquo;s work is &ldquo;done in faithfulness&rdquo; (33:4). The created order is not arbitrary; it is the expression of a God who loves &ldquo;righteousness and justice&rdquo; and whose &ldquo;steadfast love&rdquo; fills the earth (33:5).</p>" +
      "<p>The New Testament gathers up this theme and reveals its depth. &ldquo;In the beginning was the Word&hellip; All things were made through him&rdquo; (John 1:1&ndash;3). The creating word of Psalm 33 is shown to be the eternal Son, the Logos through whom the worlds were made. Hebrews 11:3 confirms the same mystery from the side of faith: &ldquo;the universe was created by the word of God, so that what is seen was not made out of things that are visible.&rdquo; To meditate on Psalm 33:6 is to stand at the threshold of the deepest truth about the cosmos and the Christ.</p>",
  },
  {
    id: "t3",
    title: "Sovereign over the Counsel of Nations",
    accent: GOLD,
    reference: "Psalm 33:10&ndash;12",
    body:
      "<p>The God who spoke the stars into being is no distant clockmaker. He rules actively over history: &ldquo;The LORD brings the counsel of the nations to nothing; he frustrates the plans of the peoples&rdquo; (33:10). The grand strategies of empires, the schemes of kings, the manifestos of the proud &mdash; all dissolve before the settled purpose of the LORD.</p>" +
      "<p>By sharp contrast, &ldquo;The counsel of the LORD stands forever, the plans of his heart to all generations&rdquo; (33:11). What he speaks does not fail; what he purposes cannot be overturned. The same word that made the heavens firm also makes his purposes firm. Human plans rise and crumble like sandcastles, but the plans of his heart endure unshaken from age to age.</p>" +
      "<p>From this towering truth flows a tender blessing: &ldquo;Blessed is the nation whose God is the LORD, the people whom he has chosen as his heritage!&rdquo; (33:12). To belong to this sovereign God &mdash; to be his chosen heritage &mdash; is the highest happiness a people can know. The verse looks back to Israel chosen at Sinai and forward to the church gathered from every nation, &ldquo;a people for his own possession&rdquo; (1 Peter 2:9).</p>",
  },
  {
    id: "t4",
    title: "The False Hope of Armies and Horses",
    accent: TEAL,
    reference: "Psalm 33:13&ndash;17",
    body:
      "<p>The LORD looks down from heaven and &ldquo;sees all the children of man&rdquo; (33:13). He &ldquo;fashions the hearts of them all and observes all their deeds&rdquo; (33:15). Nothing is hidden from the Maker of every heart; the One who formed us understands us entirely. This watching God is not detached but intimately aware of every life beneath his gaze.</p>" +
      "<p>From that vantage the psalmist exposes the great delusion of human power: &ldquo;The king is not saved by his great army; a warrior is not delivered by his great strength. The war horse is a false hope for salvation, and by its great might it cannot rescue&rdquo; (33:16&ndash;17). Military strength, vast and impressive though it seems, cannot secure ultimate deliverance. The mightiest army is a frail reed when the true crisis comes.</p>" +
      "<p>This is the very contrast drawn in Psalm 20:7 &mdash; &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God.&rdquo; Both psalms strip away the idols of strength and security to leave the soul resting on God alone. The temptation to trust in what we can muster &mdash; armies, money, influence, technique &mdash; is ancient and perennial, and the psalm answers it by pointing to the only sure refuge.</p>",
  },
  {
    id: "t5",
    title: "Waiting on the LORD, Our Help and Shield",
    accent: ROSE,
    reference: "Psalm 33:18&ndash;22",
    body:
      "<p>If armies and horses are false hopes, where is true safety found? &ldquo;Behold, the eye of the LORD is on those who fear him, on those who hope in his steadfast love, that he may deliver their soul from death and keep them alive in famine&rdquo; (33:18&ndash;19). The same eye that searches all humanity rests with tender attention on those who fear and hope in him.</p>" +
      "<p>The proper posture of such people is waiting: &ldquo;Our soul waits for the LORD; he is our help and our shield&rdquo; (33:20). Waiting is not passive resignation but active, trustful expectation &mdash; the soul leaning its whole weight on God as helper and protector. &ldquo;For our heart is glad in him, because we trust in his holy name&rdquo; (33:21). Joy and trust are bound together; gladness springs from confidence in who he is.</p>" +
      "<p>The psalm closes as a prayer: &ldquo;Let your steadfast love, O LORD, be upon us, even as we hope in you&rdquo; (33:22). The whole movement of the psalm &mdash; from creation to providence to deliverance &mdash; comes to rest on the steadfast love (the Hebrew <em>hesed</em>) of God and the hope of his people. It is a fitting end: the God who made the heavens by his word is the God on whose covenant love we may safely stake everything.</p>",
  },
];

const verseItems: VerseItem[] = [
  {
    id: "v1",
    reference: "Psalm 33:1&ndash;3",
    label: "The Call to Praise",
    body:
      "<p>&ldquo;Shout for joy in the LORD, O you righteous! Praise befits the upright. Give thanks to the LORD with the lyre; make melody to him with the harp of ten strings. Sing to him a new song; play skillfully on the strings, with loud shouts&rdquo; (33:1&ndash;3).</p>" +
      "<p>The psalm begins with imperatives of joy. Shout, give thanks, make melody, sing, play. Worship here is not muted or grudging; it is loud, skillful, and glad. The righteous are summoned to bring their whole selves &mdash; voice and instrument, craft and emotion &mdash; into the praise of God.</p>" +
      "<p>That praise &ldquo;befits&rdquo; the upright. There is a fitness, an appropriateness, to the worship of God that nothing else in human experience matches. The &ldquo;new song&rdquo; signals that God&rsquo;s mercies are ever fresh, calling out an ever-renewed response. Skill is commanded too: the God of all beauty is honored by excellence, not carelessness.</p>",
  },
  {
    id: "v2",
    reference: "Psalm 33:4&ndash;9",
    label: "Creation by the Word",
    body:
      "<p>&ldquo;For the word of the LORD is upright, and all his work is done in faithfulness&hellip; By the word of the LORD the heavens were made, and by the breath of his mouth all their host&hellip; For he spoke, and it came to be; he commanded, and it stood firm&rdquo; (33:4, 6, 9).</p>" +
      "<p>Here is the theological heart of the psalm. The reason praise is fitting is that God&rsquo;s word is upright and his works are faithful; he loves righteousness and justice, and the earth is full of his steadfast love (33:4&ndash;5). The grounds of worship are God&rsquo;s character revealed in his works.</p>" +
      "<p>Then the great affirmation: the heavens were made by his word, the starry host by the breath of his mouth. He gathered the seas &ldquo;as in a heap&rdquo; and stored the deeps (33:7). The proper response is reverent awe: &ldquo;Let all the earth fear the LORD; let all the inhabitants of the world stand in awe of him&rdquo; (33:8). This is the language of Genesis 1, illumined by John 1:1&ndash;3 and Hebrews 11:3 &mdash; creation through the living Word.</p>",
  },
  {
    id: "v3",
    reference: "Psalm 33:10&ndash;12",
    label: "Sovereignty over the Nations",
    body:
      "<p>&ldquo;The LORD brings the counsel of the nations to nothing; he frustrates the plans of the peoples. The counsel of the LORD stands forever, the plans of his heart to all generations. Blessed is the nation whose God is the LORD, the people whom he has chosen as his heritage!&rdquo; (33:10&ndash;12).</p>" +
      "<p>The Creator is also the Lord of history. The schemes of the nations come to nothing under his hand, while his own counsel stands forever. The same firmness that holds the stars in place holds his purposes secure across all generations.</p>" +
      "<p>And the climax is a beatitude: blessed &mdash; truly happy &mdash; is the nation whose God is the LORD. To be chosen as his heritage is the supreme privilege. The verse points beyond Israel to the people God gathers from every nation in Christ, his treasured possession.</p>",
  },
  {
    id: "v4",
    reference: "Psalm 33:13&ndash;17",
    label: "The LORD Sees All; Strength Cannot Save",
    body:
      "<p>&ldquo;The LORD looks down from heaven; he sees all the children of man&hellip; he who fashions the hearts of them all and observes all their deeds. The king is not saved by his great army&hellip; The war horse is a false hope for salvation&rdquo; (33:13, 15&ndash;17).</p>" +
      "<p>God&rsquo;s gaze takes in all humanity. He formed every heart and watches every deed; nothing escapes the notice of the Maker. This is at once searching and comforting &mdash; the One who sees all is the One who made us and knows us through and through.</p>" +
      "<p>From that height the psalm punctures every proud confidence. Great armies, mighty warriors, powerful war horses &mdash; all are false hopes for ultimate deliverance. The verse stands as the negative counterpart to Psalm 20:7: not chariots and horses, but the name of the LORD, is our true security.</p>",
  },
  {
    id: "v5",
    reference: "Psalm 33:18&ndash;22",
    label: "The Eye of the LORD; Our Soul Waits",
    body:
      "<p>&ldquo;Behold, the eye of the LORD is on those who fear him, on those who hope in his steadfast love&hellip; Our soul waits for the LORD; he is our help and our shield&hellip; Let your steadfast love, O LORD, be upon us, even as we hope in you&rdquo; (33:18, 20, 22).</p>" +
      "<p>The same all-seeing eye that searches the nations rests in favor on those who fear God and hope in his steadfast love. He delivers their soul from death and keeps them alive in famine (33:19). His watching is, for his people, a watching unto deliverance.</p>" +
      "<p>The fitting response is to wait. The soul leans on God as help and shield, glad in him, trusting his holy name. The psalm ends in prayer, resting its whole hope on the <em>hesed</em> &mdash; the covenant steadfast love &mdash; of the God who made the heavens by his word.</p>",
  },
];

const appSections: AppSection[] = [
  {
    heading: "Let the Word of Creation Steady Your Heart",
    accent: PURPLE,
    body:
      "<p>When the world feels chaotic and out of control, Psalm 33 lifts our eyes to the God who spoke the heavens into being. The same word that made the stars and set the seas in their bounds holds your life and circumstances. If he is faithful in the vast work of creation, he is faithful in the small work of caring for you. Meditate on 33:6 and 33:9 until the sheer power and reliability of God&rsquo;s word begins to quiet your anxious heart.</p>",
  },
  {
    heading: "Examine Where You Place Your Trust",
    accent: TEAL,
    body:
      "<p>Few of us trust in literal war horses, but all of us are tempted to lean on our own version of armies and chariots &mdash; savings, reputation, intelligence, connections, control. Psalm 33:16&ndash;17, like Psalm 20:7, gently exposes these false hopes. Ask honestly: what do I reach for first when fear rises? The psalm does not condemn prudence, but it dethrones every rival to God as the soul&rsquo;s true security. Move your deepest confidence from what you can muster to the One who cannot fail.</p>",
  },
  {
    heading: "Worship with Skill and Gladness",
    accent: GREEN,
    body:
      "<p>The psalm calls for praise that is loud, joyful, and skillful (33:1&ndash;3). This is an invitation to bring your best to God &mdash; not perfectionism, but wholehearted care. Whether you sing, play, write, serve, or create, offer it with attentiveness and joy as worship. And remember the &ldquo;new song&rdquo;: God&rsquo;s mercies are fresh each morning, and our praise can be renewed each day rather than slipping into rote habit.</p>",
  },
  {
    heading: "Learn the Discipline of Waiting",
    accent: ROSE,
    body:
      "<p>&ldquo;Our soul waits for the LORD&rdquo; (33:20). Waiting is one of the hardest disciplines of faith, yet it is the posture the psalm commends. It is not idle passivity but active, hopeful leaning on God as help and shield. In seasons of delay or uncertainty, practice this kind of waiting: trustful, expectant, glad in God&rsquo;s holy name, resting your whole hope on his steadfast love rather than on the speed of your own deliverance.</p>",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 33:6 says the heavens were made &ldquo;by the word of the LORD.&rdquo; How does meditating on God&rsquo;s creative word change the way you face situations that feel chaotic or out of control?",
  "The psalm connects to John 1:1&ndash;3 and Hebrews 11:3, revealing Christ as the creating Word. How does it deepen your worship to know that the same Word who made the universe entered it to redeem you?",
  "Verses 16&ndash;17 call armies and war horses a &ldquo;false hope.&rdquo; What are the modern &ldquo;horses&rdquo; you are most tempted to trust for security, and what would it look like to transfer that trust to the LORD?",
  "&ldquo;Blessed is the nation whose God is the LORD&rdquo; (33:12). What does it mean for you personally to belong to God as part of his chosen heritage?",
  "The psalm commands a &ldquo;new song&rdquo; sung &ldquo;skillfully&rdquo; (33:3). In what area of your life could your worship of God become fresher, more joyful, or more wholehearted?",
  "&ldquo;Our soul waits for the LORD&rdquo; (33:20). Where are you being called to wait right now, and how can you make that waiting active and trustful rather than anxious?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 33 - By the Word of the LORD the Heavens Were Made" },
  { videoId: "Q2oNOlXzBhY", title: "Creation by the Word - Psalm 33, Genesis 1, and John 1" },
  { videoId: "8phkAg8PMHE", title: "The Counsel of the LORD Stands Forever - God's Sovereignty" },
  { videoId: "fNk_zzaMoSs", title: "Our Soul Waits for the LORD - Hope in His Steadfast Love" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm33Guide() {
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
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 33: A Hymn to the Creator and Sovereign LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            A study of the great praise psalm that summons the upright to a new song, marvels at the heavens made by the word of the LORD, declares his counsel sovereign over the nations, exposes the false hope of armies and horses, and rests the soul in waiting on his steadfast love.
          </p>
          <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
              Key Verse &mdash; Psalm 33:6
            </div>
            <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.6, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;By the word of the LORD the heavens were made, and by the breath of his mouth all their host.&rdquo;" }} />
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
              <p dangerouslySetInnerHTML={{ __html: "Psalm 33 is a corporate hymn of praise &mdash; one of the few psalms in Book One with no superscription &mdash; that lifts the congregation&rsquo;s eyes from their own concerns to the greatness of God himself. It moves in a clear progression: a call to joyful, skillful praise (vv.1&ndash;3); the ground of that praise in God&rsquo;s word and works, supremely in creation (vv.4&ndash;9); his sovereignty over the plans of nations (vv.10&ndash;12); his searching gaze over all humanity and the futility of human strength (vv.13&ndash;17); and finally his watchful care over those who hope in him, ending in a prayer of trust (vv.18&ndash;22)." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Structure.</strong> The psalm is a tightly woven whole. It opens and closes with the themes of joy and steadfast love, framing the central declaration of creation by the word. The repeated emphasis on the LORD&rsquo;s &ldquo;word,&rdquo; &ldquo;counsel,&rdquo; and &ldquo;plans&rdquo; binds together creation and providence: the God who speaks worlds into being also speaks history into its appointed course." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Context.</strong> The towering claim of verse 6 &mdash; &ldquo;By the word of the LORD the heavens were made&rdquo; &mdash; reaches back to Genesis 1, where God repeatedly speaks and it is so, and forward to John 1:1&ndash;3, where the eternal Word through whom all things were made is revealed as the Son. Hebrews 11:3 confesses the same truth by faith. The contrast between trusting armies and horses and trusting the LORD (vv.16&ndash;17) parallels Psalm 20:7. The &ldquo;new song&rdquo; (v.3) recurs across the Psalter and reaches its consummation in Revelation 5:9, sung to the Lamb who was slain." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Why it matters.</strong> Psalm 33 anchors worship in the character and works of God rather than in our circumstances. It is a tonic for anxious and fearful hearts: the God whose word made and upholds the universe is the same God whose eye rests in love on those who hope in his steadfast love. To pray this psalm is to learn to wait on the LORD as our help and shield." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Five themes carry the message of Psalm 33, each grounded in the text and traced through the wider witness of Scripture. Tap a theme to open it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {themeItems.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span>
                        <span style={{ display: "block", color: item.accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.reference }} />
                        <span style={{ display: "block", color: TEXT, fontSize: "1.15rem", fontWeight: 700 }}>{item.title}</span>
                      </span>
                      <span style={{ color: item.accent, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Work through Psalm 33 in five movements, from the opening call to praise to the closing prayer of trust. Tap a section to expand it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {verseItems.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? GREEN : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span>
                        <span style={{ display: "block", color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.reference }} />
                        <span style={{ display: "block", color: TEXT, fontSize: "1.15rem", fontWeight: 700 }}>{item.label}</span>
                      </span>
                      <span style={{ color: GREEN, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Psalm 33 is meant to reshape how we worship, where we place our trust, and how we wait. Here are ways to bring its truth into daily life.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: "3rem" }}>
              {appSections.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${s.accent}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: s.accent, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.2rem" }}>{s.heading}</h3>
                  <div style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h3>
            <ol style={{ display: "flex", flexDirection: "column", gap: 14, margin: "0 0 3rem", padding: 0, listStyle: "none", counterReset: "q" }}>
              {reflectionQuestions.map((q, i) => (
                <li key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 14 }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                </li>
              ))}
            </ol>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Go deeper into Psalm 33 with teaching on the word that made the heavens, the connection between Genesis 1 and John 1, the sovereignty of God over the nations, and the call to wait on the LORD in hope.
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
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Sovereign LORD, by your word the heavens were made and by the breath of your mouth all their host. We stand in awe of you, the God whose counsel stands forever and whose plans no nation can overturn. Forgive us for trusting in our own strength &mdash; our armies, our horses, the things we muster to feel safe. Teach us instead to fear you and to hope in your steadfast love. Let our soul wait for you, our help and our shield, and let us be glad in your holy name. Put a new song in our mouths, and let your steadfast love be upon us, even as we hope in you. In the name of Jesus, your eternal Word, we pray. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
