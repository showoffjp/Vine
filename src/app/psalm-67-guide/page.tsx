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

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 67 Explained &mdash; The Missionary Psalm" },
  { videoId: "Q2oNOlXzBhY", title: "Blessed to Be a Blessing &mdash; The Aaronic Blessing and the Nations" },
  { videoId: "8phkAg8PMHE", title: "Let the Peoples Praise You &mdash; The Heart of God for All Nations" },
  { videoId: "fNk_zzaMoSs", title: "The Earth Has Yielded Its Increase &mdash; Harvest and Mission" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Short Psalm with a World-Sized Heart",
    body: "Psalm 67 is one of the briefest psalms in the Psalter, only seven verses long, yet it carries a vision as wide as the whole earth. It opens as a quiet, personal prayer for God&rsquo;s blessing and ends with a thunderous summons for every nation under heaven to praise him. In the space of a few lines the psalm moves from &ldquo;us&rdquo; to &ldquo;all the peoples,&rdquo; from a sanctuary in Israel to the farthest ends of the earth. It is, in the truest sense, a missionary psalm &mdash; a song that takes the blessing of God resting on one people and turns it outward toward the world.",
  },
  {
    heading: "Built on the Aaronic Blessing",
    body: "The opening words &mdash; &ldquo;May God be gracious to us and bless us and make his face to shine upon us&rdquo; (67:1) &mdash; are a deliberate echo of the great priestly benediction of Numbers 6:24&ndash;26: &ldquo;The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you.&rdquo; Every Israelite would have known these words by heart, for the priests spoke them over the congregation. But the psalmist makes one decisive change. Where the Aaronic blessing simply pronounces favor upon the people, Psalm 67 immediately adds a purpose: God blesses us &ldquo;that your way may be known on earth, your saving power among all nations&rdquo; (67:2). The inward-facing benediction becomes an outward-facing mission.",
  },
  {
    heading: "Structure: A Refrain That Frames the Whole",
    body: "The psalm is shaped by a repeated refrain. Twice the poet cries, &ldquo;Let the peoples praise you, O God; let all the peoples praise you!&rdquo; (67:3, 5). These two identical verses act as a frame around the central declaration that God &ldquo;judges the peoples with equity&rdquo; and &ldquo;guides the nations upon earth&rdquo; (67:4). The structure moves in a clear arc: an opening prayer for blessing (vv. 1&ndash;2), the first refrain and its reason (vv. 3&ndash;4), the second refrain (v. 5), and a closing assurance of harvest and worldwide reverence (vv. 6&ndash;7). The refrain is the beating heart of the psalm, calling not merely Israel but all peoples to join the song.",
  },
  {
    heading: "Context: Blessing for the Sake of the Nations",
    body: "Psalm 67 stands in a long biblical line that runs from Abraham to the Great Commission. When God first called Abraham he promised, &ldquo;in you all the families of the earth shall be blessed&rdquo; (Genesis 12:3). Israel was never blessed merely for its own sake; it was chosen to be a channel of blessing to the whole world. Psalm 67 prays that very logic. God&rsquo;s grace to his people is not a private possession to be hoarded but a light to be displayed, so that the nations might see, know, and come to praise the true God. The psalm thus belongs to the same stream that flows on to Jesus&rsquo; command to &ldquo;make disciples of all nations&rdquo; (Matthew 28:19).",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t1",
    title: "The Aaronic Blessing Turned Outward",
    color: GREEN,
    body: "The psalm begins by borrowing the sacred words of the priestly benediction: &ldquo;May God be gracious to us and bless us and make his face to shine upon us&rdquo; (67:1; cf. Numbers 6:24&ndash;26). To have God&rsquo;s face &ldquo;shine&rdquo; upon you is to enjoy his favor, his nearness, his approving smile &mdash; the very opposite of his face being hidden in judgment. Yet the psalmist will not let this blessing rest inward. He immediately attaches a purpose clause: &ldquo;that your way may be known on earth, your saving power among all nations&rdquo; (67:2). The point of being blessed is so that others may come to know God. This is one of the great hinges of Scripture: God&rsquo;s people are blessed not as an end in itself but as a means to a far larger end &mdash; the knowledge of God filling the earth as the waters cover the sea (cf. Habakkuk 2:14). The Aaronic blessing, given to Israel alone, becomes in this psalm a prayer for the world.",
  },
  {
    id: "t2",
    title: "Let All the Peoples Praise You",
    color: PURPLE,
    body: "The refrain &mdash; &ldquo;Let the peoples praise you, O God; let all the peoples praise you!&rdquo; (67:3, 5) &mdash; is the psalm&rsquo;s controlling cry. It is not enough that Israel praise God; the psalmist longs for &ldquo;all the peoples,&rdquo; every tribe and tongue, to join the chorus. This is a vision that the New Testament will bring to fulfillment, when John sees &ldquo;a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne&rdquo; (Revelation 7:9). The doubling of the refrain &mdash; &ldquo;the peoples&hellip; all the peoples&rdquo; &mdash; intensifies the longing. The psalmist is not content with a few converts; he prays for a worldwide harvest of worship. To pray Psalm 67 is to align our hearts with God&rsquo;s own desire that he be praised to the ends of the earth.",
  },
  {
    id: "t3",
    title: "God&rsquo;s Just Rule Is Good News for the Nations",
    color: TEAL,
    body: "At the center of the psalm stands the reason the nations should rejoice: &ldquo;Let the nations be glad and sing for joy, for you judge the peoples with equity and guide the nations upon earth&rdquo; (67:4). To the modern ear, divine &ldquo;judgment&rdquo; can sound only frightening. But here it is presented as the ground of gladness. A world groaning under injustice, oppression, corruption, and cruelty has every reason to long for a Judge who rules &ldquo;with equity&rdquo; &mdash; who cannot be bribed, who shows no favoritism, who sets right every wrong. God&rsquo;s righteous government is not bad news to be dreaded but good news to be sung. The nations are invited to &ldquo;be glad and sing for joy&rdquo; precisely because the One who guides them is perfectly just. This anticipates the gospel announcement that God &ldquo;has fixed a day on which he will judge the world in righteousness by a man whom he has appointed&rdquo; (Acts 17:31), and that this Judge is the crucified and risen Christ.",
  },
  {
    id: "t4",
    title: "Harvest as a Sign of Blessing",
    color: GOLD,
    body: "The psalm closes by tying God&rsquo;s blessing to the fruitfulness of the land: &ldquo;The earth has yielded its increase; God, our God, shall bless us. God shall bless us; let all the ends of the earth fear him!&rdquo; (67:6&ndash;7). The harvest &mdash; grain and grape gathered in from the fields &mdash; is presented as a visible sign and pledge of God&rsquo;s ongoing favor. But notice the direction of the thought: material provision is not the end goal but a witness. God blesses the harvest so that &ldquo;all the ends of the earth&rdquo; might come to fear him. The good gifts of creation are meant to point beyond themselves to the Giver. Every loaf of bread, every cluster of grapes, is a small testimony to the goodness of the God who made and sustains the world, and an invitation for the watching nations to acknowledge and revere him.",
  },
  {
    id: "t5",
    title: "Blessed to Be a Blessing",
    color: ROSE,
    body: "Underneath the whole psalm runs the great Abrahamic logic: &ldquo;in you all the families of the earth shall be blessed&rdquo; (Genesis 12:3). Israel&rsquo;s election was always centrifugal, flinging blessing outward to the world, never centripetal, drawing it inward for private enjoyment. Psalm 67 prays this very pattern. We ask God to be gracious to us, yes &mdash; but the very next breath asks that through us his saving way be made known to every nation. This is the posture the church is called to take up. We receive grace not to clutch it but to channel it; we are saved not merely to be safe but to be sent. The same God who shines his face upon his people commissions them to carry his light to those who sit in darkness, until the ends of the earth fear and praise him.",
  },
];

const verseItems: { id: string; ref: string; color: string; quote: string; body: string }[] = [
  {
    id: "v1",
    ref: "Psalm 67:1&ndash;2",
    color: GREEN,
    quote: "May God be gracious to us and bless us and make his face to shine upon us, that your way may be known on earth, your saving power among all nations.",
    body: "The psalm opens with the cadence of the priestly blessing of Numbers 6, asking God to be gracious, to bless, and to let his face shine &mdash; the language of favor, nearness, and delight. But the prayer does not stop with the comfort of the worshiper. A purpose clause immediately follows: God&rsquo;s blessing is sought &ldquo;that your way may be known on earth, your saving power among all nations.&rdquo; The grammar itself preaches the missionary heart of the psalm. We are blessed in order that others may come to know God&rsquo;s &ldquo;way&rdquo; &mdash; his character and his dealings &mdash; and his &ldquo;saving power,&rdquo; his ability and willingness to rescue. From the very first verse, the horizon is the whole earth and every nation.",
  },
  {
    id: "v2",
    ref: "Psalm 67:3&ndash;4",
    color: PURPLE,
    quote: "Let the peoples praise you, O God; let all the peoples praise you! Let the nations be glad and sing for joy, for you judge the peoples with equity and guide the nations upon earth.",
    body: "Here the great refrain sounds for the first time, a longing that &ldquo;all the peoples&rdquo; would praise God. It is followed by an invitation for the nations themselves to &ldquo;be glad and sing for joy.&rdquo; The reason given is striking: they should rejoice because God &ldquo;judges the peoples with equity and guides the nations upon earth.&rdquo; God&rsquo;s righteous rule is the very thing that should make a broken, unjust world sing. A Judge who is perfectly fair, who guides the nations with wisdom and care, is not a threat to be feared but a hope to be embraced. The justice of God, so often imagined as terrifying, is here the foundation of joy for every people on earth.",
  },
  {
    id: "v3",
    ref: "Psalm 67:5",
    color: TEAL,
    quote: "Let the peoples praise you, O God; let all the peoples praise you!",
    body: "The refrain returns, identical to verse 3, and its repetition is no accident. By framing the central declaration of God&rsquo;s just rule (v. 4) with the same insistent cry on either side, the psalmist makes praise the great envelope of the whole song. Everything &mdash; the blessing, the judgment, the guidance, the harvest &mdash; bends toward this single end: that all peoples might praise God. The repetition has the force of a heartbeat. The poet cannot say it once and be done; he says it again, pressing the longing deeper. This is the proper response to all that God is and does, and the psalm will not let us forget it.",
  },
  {
    id: "v4",
    ref: "Psalm 67:6&ndash;7",
    color: GOLD,
    quote: "The earth has yielded its increase; God, our God, shall bless us. God shall bless us; let all the ends of the earth fear him!",
    body: "The psalm ends where the agricultural year ends &mdash; with the harvest gathered in. &ldquo;The earth has yielded its increase&rdquo; is a testimony that God has been at work, blessing the fields with rain and sun and fruitfulness. The repeated &ldquo;God shall bless us&hellip; God shall bless us&rdquo; rings with confidence: the same God who has provided will go on providing. Yet even this closing celebration of harvest is harnessed to the missionary purpose. The final clause widens the lens one last time: &ldquo;let all the ends of the earth fear him!&rdquo; The blessing on the land is meant to draw the gaze of the watching nations to the God who gives it, until reverence for him reaches the farthest corners of the world. The psalm closes as it opened &mdash; with God&rsquo;s blessing flowing out toward all the earth.",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Pray for the Nations, Not Just for Yourself",
    color: GREEN,
    body: "Psalm 67 reshapes our prayers. It is right to ask God to be gracious to us, to bless us, to make his face shine upon us &mdash; the psalm itself begins there. But it refuses to let the prayer end there. The very next breath asks that through that blessing, God&rsquo;s &ldquo;saving power&rdquo; would be made known &ldquo;among all nations.&rdquo; When we pray, do we move beyond our own needs to the longing that God be known and praised across the earth? This psalm teaches us to lift our eyes from the small circle of our own concerns to the vast harvest field of the world, and to ask God to use even the blessings he gives us as a witness to those who do not yet know him.",
  },
  {
    heading: "See Your Blessings as a Trust, Not a Trophy",
    color: PURPLE,
    body: "The whole movement of the psalm warns against hoarding grace. God blesses his people so that his way may be known on earth; the harvest is given so that all the ends of the earth might fear him. Every good gift we receive &mdash; material provision, spiritual peace, the knowledge of God himself &mdash; is held in trust for a purpose larger than our own comfort. Ask yourself: are the blessings in my life pointing others toward God, or am I clutching them as private trophies? The grace shown to us is meant to overflow. We are, in the words of God&rsquo;s promise to Abraham, blessed in order to be a blessing (Genesis 12:2&ndash;3).",
  },
  {
    heading: "Find Joy in God&rsquo;s Just Rule",
    color: TEAL,
    body: "We live in a world heavy with injustice, where the powerful exploit the weak and wrongs go unanswered. Psalm 67 invites us to lift our heads, because there is a Judge who rules &ldquo;with equity&rdquo; and who &ldquo;guides the nations upon earth.&rdquo; This is cause not for dread but for gladness and song. When you are tempted to despair over the brokenness of the world, let this psalm remind you that God has not abdicated his throne. His judgment will set right every wrong, and his guidance steers the course of history toward his good ends. The same Christ who died for sinners will one day judge the world in righteousness &mdash; and that is good news for all who long to see justice done.",
  },
  {
    heading: "Let the Harvest Lift Your Eyes to the Giver",
    color: GOLD,
    body: "The psalm ends with the gathered harvest as a sign of God&rsquo;s blessing. We can practice the same kind of seeing. Every meal, every provision, every ordinary mercy is a small testimony to the goodness of God &mdash; and an invitation to let that goodness draw us, and those around us, to fear and praise him. Train your eyes to read the gifts of creation as signposts to the Giver. When you sit down to eat, when the bills are paid, when the year&rsquo;s work bears fruit, let gratitude rise not merely for the gift but toward the God who gave it, and let that gratitude become a quiet witness to a watching world.",
  },
];

const reflectionQuestions: string[] = [
  "How does Psalm 67 challenge the way you usually pray for yourself and your own needs?",
  "The Aaronic blessing of Numbers 6 was inward-facing; Psalm 67 turns it outward. What blessings in your life might God intend to flow through you to others?",
  "Why is it good news, rather than bad news, that God &ldquo;judges the peoples with equity&rdquo;? How does that comfort you in the face of the world&rsquo;s injustice?",
  "What would it look like for you to genuinely long that &ldquo;all the peoples&rdquo; &mdash; including those very different from you &mdash; would praise God?",
  "How can you let the ordinary provisions of your life (food, work, harvest) become signposts that point others toward the Giver?",
  "Where is God calling you to be &ldquo;blessed to be a blessing&rdquo; in your family, neighborhood, or among the nations?",
];

export default function Psalm67Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 67: May God Be Gracious to Us and Bless Us
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "A short but world-sized psalm that takes the inward-facing Aaronic blessing of Numbers 6 and turns it outward into a missionary prayer &mdash; that God&rsquo;s saving way be known among all nations, that all the peoples praise him, and that the very harvest of the earth become a sign drawing the ends of the earth to fear him." }} />
        </header>

        <div style={{ background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 67:1&ndash;2</div>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;May God be gracious to us and bless us and make his face to shine upon us, that your way may be known on earth, your saving power among all nations.&rdquo;" }} />
        </div>

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
          <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {overviewBlocks.map((b, i) => (
              <div key={i}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
          </section>
        )}

        {tab === "themes" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Five great threads run through this small psalm, weaving together blessing, mission, justice, and the worship of the nations. Click each theme to open it." }} />
            {themeItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.5rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.15rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  <span style={{ color: item.color, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.4rem" }}>
                    <div style={{ height: 2, background: item.color, opacity: 0.4, marginBottom: "1rem" }} />
                    <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "verse" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Move through Psalm 67 section by section. Each panel opens to a quotation and a short reflection on the text." }} />
            {verseItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.5rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.ref }} />
                  <span style={{ color: item.color, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.4rem" }}>
                    <p style={{ color: item.color, fontSize: "1.05rem", lineHeight: 1.7, margin: "0 0 1rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;" + item.quote + "&rdquo;" }} />
                    <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {applicationBlocks.map((b, i) => (
                <div key={i} style={{ borderLeft: `3px solid ${b.color}`, paddingLeft: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem", color: b.color }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: PURPLE }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Go deeper into the missionary heart of Psalm 67 through teaching on the Aaronic blessing, the call for all peoples to praise, and the harvest as a sign drawing the nations to God." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "Gracious God, be gracious to us and bless us, and make your face to shine upon us &mdash; not that we might hoard your goodness, but that your way may be known on earth and your saving power among all nations. Make us, like Abraham, blessed to be a blessing. Let all the peoples praise you; let the nations be glad and sing for joy, for you judge the peoples with equity and guide the nations upon the earth. As you give us the increase of the field and the daily mercies of life, lift our eyes to you the Giver, and let all the ends of the earth fear and love you, through Jesus Christ our Lord. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
