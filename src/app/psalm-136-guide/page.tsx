"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm136Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 136: The Great Hallel" },
    { videoId: "OjJ7GkWCHvA", title: "Hesed: God&rsquo;s Steadfast Covenant Love" },
    { videoId: "pHBzJ2dVXgk", title: "Creation and Redemption in the Psalms" },
    { videoId: "3sO5FH2ybPY", title: "His Love Endures Forever: A Litany of Thanks" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "refrain",
      color: ROSE,
      title: "The Relentless Refrain",
      body: "Psalm 136 is unique in the Psalter: every single one of its twenty-six verses is answered by the same line, &ldquo;for his steadfast love endures forever.&rdquo; The Hebrew phrase ki le&rsquo;olam chasdo rings out twenty-six times like a bell. This is an antiphonal litany: a leader or choir would sing the first half of each line, and the whole congregation would answer with the refrain. The repetition is not monotony but intentional design &mdash; it hammers home that the constant ground of every act, in creation and in history, is the covenant love of God. Cross-references: 2 Chronicles 7:3, 6 (the refrain at the dedication of Solomon&rsquo;s temple); Ezra 3:11 (the same words when the second temple&rsquo;s foundation was laid); 1 Chronicles 16:34, 41.",
    },
    {
      id: "threefold",
      color: GOLD,
      title: "The Threefold Opening Call",
      body: "The psalm begins with three parallel calls to thanksgiving: &ldquo;Give thanks to the LORD, for he is good&hellip; Give thanks to the God of gods&hellip; Give thanks to the Lord of lords&rdquo; (vv. 1&ndash;3). The three titles ascend in scope. He is the LORD (Yahweh, the covenant name), the God of gods (supreme over every supposed deity), and the Lord of lords (sovereign over every earthly and heavenly power). Thanksgiving is grounded first in who God is &mdash; good, supreme, and sovereign &mdash; before the psalm turns to what he has done. Cross-references: Deuteronomy 10:17 (&ldquo;the God of gods and Lord of lords&rdquo;); 1 Timothy 6:15 and Revelation 17:14 / 19:16 (Christ as &ldquo;Lord of lords and King of kings&rdquo;).",
    },
    {
      id: "creation",
      color: TEAL,
      title: "Thanksgiving for Creation",
      body: "The psalm gives thanks to the One &ldquo;who alone does great wonders&rdquo; (v. 4) and then surveys the work of creation: who by understanding made the heavens, who spread out the earth above the waters, who made the great lights &mdash; the sun to rule over the day, the moon and stars to rule over the night (vv. 5&ndash;9). This section follows the order of Genesis 1 and Psalm 104, but here each act of making is answered by the refrain: God did not create and walk away &mdash; he made the cosmos in covenant love. The lights that govern day and night are themselves witnesses that his hesed endures forever. Cross-references: Genesis 1:1&ndash;19; Psalm 104:1&ndash;24; Jeremiah 31:35&ndash;36.",
    },
    {
      id: "redemption",
      color: GREEN,
      title: "Thanksgiving for Redemption in the Exodus",
      body: "From creation the psalm turns to redemption, retelling the Exodus: the One who struck down the firstborn of Egypt and brought Israel out from among them with a strong hand and an outstretched arm; who divided the Red Sea in two and made Israel pass through the midst of it; but overthrew Pharaoh and his host in the Red Sea (vv. 10&ndash;15). The same steadfast love that made the great lights also breaks the power of the oppressor and rescues a helpless people. Creation and redemption are held together by the single thread of hesed. Cross-references: Exodus 12:29&ndash;30; Exodus 14:21&ndash;31; Psalm 78:12&ndash;13; the Exodus as the pattern of redemption fulfilled in Christ (Luke 9:31; 1 Corinthians 5:7).",
    },
    {
      id: "land",
      color: PURPLE,
      title: "Thanksgiving for the Gift of the Land",
      body: "The survey of redemptive history continues: the One who led his people through the wilderness, who struck down great kings &mdash; Sihon king of the Amorites and Og king of Bashan &mdash; and gave their land as a heritage, a heritage to Israel his servant (vv. 16&ndash;22). God&rsquo;s steadfast love is not abstract sentiment; it acts in the gritty events of conquest and settlement, giving an inheritance to a people who had none. The promise to Abraham is being kept, link by link, all of it carried by the same enduring love. Cross-references: Numbers 21:21&ndash;35; Deuteronomy 2:24&ndash;3:11; Joshua 21:43&ndash;45; Genesis 12:7.",
    },
    {
      id: "universal",
      color: GOLD,
      title: "The Universal Scope of His Love",
      body: "The psalm broadens to the present and the whole world: &ldquo;It is he who remembered us in our low estate&hellip; and rescued us from our foes&hellip; he who gives food to all flesh&rdquo; (vv. 23&ndash;25). The God of the Exodus still remembers his people in their humiliation, and his providence reaches every living thing &mdash; &ldquo;all flesh,&rdquo; not Israel alone. The psalm closes with a final call that mirrors the opening: &ldquo;Give thanks to the God of heaven, for his steadfast love endures forever&rdquo; (v. 26). The covenant love that runs through creation, exodus, and conquest also sets the table for every creature each day. Cross-references: Psalm 104:27&ndash;28; Psalm 145:15&ndash;16; Acts 14:17; Matthew 5:45.",
    },
  ];

  const verseItems = [
    {
      id: "v1",
      ref: "Psalm 136:1&ndash;3",
      color: GOLD,
      summary: "The threefold call: the LORD, God of gods, Lord of lords",
      body: "&ldquo;Give thanks to the LORD, for he is good, for his steadfast love endures forever. Give thanks to the God of gods&hellip; Give thanks to the Lord of lords&hellip;&rdquo; The psalm opens with three parallel summons to thanksgiving, each capped by the refrain. The titles rise in scope: Yahweh the covenant LORD, then the God above all gods, then the Lord above all lords. Before the psalm recounts a single mighty act, it establishes the foundation &mdash; God is good, supreme, and sovereign, and his hesed endures forever. The opening also echoes Deuteronomy 10:17, anchoring the litany in Israel&rsquo;s confession of the one true God.",
    },
    {
      id: "v4",
      ref: "Psalm 136:4&ndash;9",
      color: TEAL,
      summary: "Great wonders: the heavens, the earth, sun, moon, and stars",
      body: "&ldquo;To him who alone does great wonders&hellip; to him who by understanding made the heavens&hellip; who spread out the earth above the waters&hellip; who made the great lights&hellip; the sun to rule over the day&hellip; the moon and stars to rule over the night.&rdquo; This is creation retold as thanksgiving, following the order of Genesis 1. God alone does these wonders &mdash; not the gods of the nations. He makes the heavens &ldquo;by understanding,&rdquo; the same wisdom celebrated in Psalm 104:24 and Proverbs 8. And after each line of making, the congregation answers: his steadfast love endures forever. Creation itself is an act of covenant love.",
    },
    {
      id: "v10",
      ref: "Psalm 136:10&ndash;15",
      color: GREEN,
      summary: "The Exodus: the firstborn, the Red Sea, Pharaoh overthrown",
      body: "&ldquo;To him who struck the firstborn of Egypt&hellip; and brought Israel out from among them&hellip; with a strong hand and an outstretched arm; to him who divided the Red Sea in two&hellip; and made Israel pass through the midst of it&hellip; but overthrew Pharaoh and his host in the Red Sea.&rdquo; The psalm moves from creation to redemption. The decisive saving event of the Old Testament &mdash; the Exodus &mdash; is recounted in vivid strokes: judgment on Egypt, deliverance through the divided sea, and the destruction of the pursuing army. The same love that made the stars now breaks the chains of slavery. This is the gospel pattern of the Old Testament, fulfilled at last in Christ (Luke 9:31).",
    },
    {
      id: "v16",
      ref: "Psalm 136:16&ndash;22",
      color: PURPLE,
      summary: "Wilderness, great kings, Sihon and Og, the land as heritage",
      body: "&ldquo;To him who led his people through the wilderness&hellip; to him who struck down great kings&hellip; Sihon king of the Amorites&hellip; and Og king of Bashan&hellip; and gave their land as a heritage, a heritage to Israel his servant.&rdquo; Redemption continues into provision and inheritance. God guides his people through the wilderness, defeats the formidable kings who block the way, and grants the promised land as a gift. The naming of Sihon and Og recalls the specific battles of Numbers 21 and Deuteronomy 2&ndash;3. The land is not seized by Israel&rsquo;s strength but given by God&rsquo;s hand &mdash; a &ldquo;heritage&rdquo; flowing from his enduring love and his promise to Abraham.",
    },
    {
      id: "v23",
      ref: "Psalm 136:23&ndash;26",
      color: ROSE,
      summary: "Remembered us; rescued us; food to all flesh; God of heaven",
      body: "&ldquo;It is he who remembered us in our low estate&hellip; and rescued us from our foes&hellip; he who gives food to all flesh&hellip; Give thanks to the God of heaven, for his steadfast love endures forever.&rdquo; The psalm comes home to the present worshiping community and then opens out to the whole world. God remembers his people in their humiliation &mdash; the verbs shift to &ldquo;us,&rdquo; drawing every singer into the story. And his care is not limited to Israel: he &ldquo;gives food to all flesh,&rdquo; sustaining every creature. The final verse echoes the opening call, sealing the litany. From the highest heavens to the daily meal, every line of the song confesses the same truth: his steadfast love endures forever.",
    },
  ];

  const applicationItems = [
    {
      color: ROSE,
      title: "Let the Refrain Become Your Grammar",
      body: "Psalm 136 trains the heart by repetition. Twenty-six times the congregation answers, &ldquo;for his steadfast love endures forever,&rdquo; until the truth sinks below the level of mood and becomes the settled grammar of faith. Consider praying the psalm antiphonally in your family or small group &mdash; one voice naming God&rsquo;s deeds, the rest answering with the refrain. Over time, the line becomes the reflex that meets both blessing and trial: whatever happens, his hesed endures forever.",
    },
    {
      color: TEAL,
      title: "Hold Creation and Redemption Together",
      body: "The psalm refuses to separate the God of nature from the God of salvation. The same hesed that spread out the earth and hung the lights also split the sea and gave the land. For the believer, this means the Creator and the Redeemer are one and the same God, and his character is consistent across both. When you marvel at the cosmos and when you rest in the cross, you are leaning on the same steadfast love (Colossians 1:16&ndash;20).",
    },
    {
      color: GREEN,
      title: "Rehearse the Story of Redemption",
      body: "Psalm 136 is a model of remembering. Israel recited its history not as dry chronicle but as thanksgiving, naming specific deeds &mdash; the firstborn, the Red Sea, Sihon and Og &mdash; and crediting each to God&rsquo;s love. Christians do the same when we recount the greater Exodus accomplished in Christ. Keep a written record of God&rsquo;s faithfulness in your own life, and turn it into thanks. Memory fuels gratitude, and gratitude guards against despair.",
    },
    {
      color: GOLD,
      title: "Trust the Love That Reaches All Flesh",
      body: "The psalm widens at the end to &ldquo;food to all flesh&rdquo; and the &ldquo;God of heaven.&rdquo; The covenant love that rescued a nation also feeds every sparrow and opens its hand to a watching world. This grounds both our daily trust &mdash; God still provides &mdash; and our mission &mdash; his mercy is meant for all peoples. To give thanks with Psalm 136 is to align ourselves with a love that is loyal, faithful, and never lets go (Lamentations 3:22&ndash;23; Romans 8:38&ndash;39).",
    },
  ];

  const reflectionQuestions = [
    "Psalm 136 repeats one truth twenty-six times. What truth about God do you most need to hear repeated until it sinks in &mdash; and how could you build that repetition into your prayer life?",
    "The psalm holds creation and redemption together under the single thread of hesed. Where do you tend to separate the God of nature from the God of salvation, and how does this psalm join them?",
    "How does remembering specific past deliverances &mdash; in Scripture and in your own life &mdash; strengthen your trust in God&rsquo;s steadfast love for the present?",
    "Hesed describes God&rsquo;s loyal, covenant love that does not let go. Where in your life right now do you most need to rest in a love that endures forever?",
    "The psalm ends with God giving &ldquo;food to all flesh.&rdquo; How does the universal scope of God&rsquo;s love shape the way you view people outside your church or family?",
    "If you were to write your own verse for this litany &mdash; &ldquo;to him who ______, for his steadfast love endures forever&rdquo; &mdash; what act of God in your life would you name?",
  ];

  const card: React.CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem", marginBottom: "1.25rem" };
  const html = (s: string) => ({ __html: s });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ROSE, textTransform: "uppercase" }}>Psalms &middot; The Great Hallel</span>
          <h1 style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", fontWeight: 900, lineHeight: 1.12, margin: "0.6rem 0 1rem" }}>
            Psalm 136: His Love Endures Forever
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 700 }} dangerouslySetInnerHTML={html(
            "A litany of thanksgiving in which every line is answered by the congregation&rsquo;s refrain, &ldquo;for his steadfast love endures forever.&rdquo; Across creation, exodus, conquest, and daily provision, Psalm 136 hammers home that God&rsquo;s covenant love (hesed) is the constant ground of every act in history and the world."
          )} />
          <div style={{ marginTop: "1.5rem", background: `${ROSE}12`, border: `1px solid ${ROSE}40`, borderLeft: `4px solid ${ROSE}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: 1.5, color: ROSE, textTransform: "uppercase", marginBottom: "0.5rem" }}>Key Verse &middot; Psalm 136:1</div>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={html(
              "&ldquo;Give thanks to the LORD, for he is good, for his steadfast love endures forever.&rdquo;"
            )} />
          </div>
        </header>

        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.85rem",
                background: tab === t ? ROSE : "transparent", color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ROSE : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: ROSE }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "Psalm 136 is a sustained litany of thanksgiving, and its most striking feature is its form: every one of its twenty-six verses ends with the same refrain, &ldquo;for his steadfast love endures forever.&rdquo; The leader sings the changing first half of each line; the congregation answers with the unchanging second half. Through this antiphonal call and response, the psalm surveys the whole sweep of God&rsquo;s work &mdash; the threefold opening call to thanks, the wonders of creation, the redemption of the Exodus, the gift of the promised land, and God&rsquo;s ongoing care for all flesh. The relentless refrain insists that one reality undergirds them all: the covenant love of God, his hesed, which never runs out and never lets go."
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>Structure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "The psalm falls into clear movements, each line answered by the refrain. Verses 1&ndash;3 give the threefold opening call: give thanks to the LORD, to the God of gods, and to the Lord of lords. Verses 4&ndash;9 give thanks for creation &mdash; the heavens, the earth, and the great lights &mdash; following the order of Genesis 1. Verses 10&ndash;15 recount the Exodus: the firstborn struck, the Red Sea divided, Pharaoh overthrown. Verses 16&ndash;22 trace the wilderness journey, the defeat of Sihon and Og, and the gift of the land as a heritage. Verses 23&ndash;26 bring the story into the present &mdash; God remembering his people, rescuing them, and giving food to all flesh &mdash; closing with a final call to give thanks to the God of heaven."
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={html(
                "Psalm 136 is known as the &lsquo;Great Hallel,&rsquo; distinct from the &lsquo;Egyptian Hallel&rsquo; (Psalms 113&ndash;118), and it was traditionally sung at Passover. The refrain &ldquo;for his steadfast love endures forever&rdquo; (ki le&rsquo;olam chasdo) is repeated twenty-six times &mdash; possibly corresponding to the twenty-six generations from Adam to Moses in Jewish tradition, or simply for liturgical emphasis. The same refrain appears at the dedication of Solomon&rsquo;s temple (2 Chronicles 7:3, 6) and when the foundation of the second temple was laid (Ezra 3:11). The psalm&rsquo;s structure surveys creation and redemption history, with hesed &mdash; covenant love &mdash; as the thread running through all of it. Hesed is one of the great words of the Old Testament: God&rsquo;s loyal, faithful, covenant love that does not let go."
              )} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={html(
              "Six themes carry the litany, from its repeated refrain to the universal reach of God&rsquo;s love. Each is rooted in the text and traced across Scripture. Tap each to expand."
            )} />
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ marginBottom: 10 }}>
                  <button type="button" onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "1rem 1.25rem", background: isOpen ? `${item.color}14` : CARD,
                      border: `1px solid ${isOpen ? item.color + "55" : BORDER}`, borderRadius: 12, cursor: "pointer",
                      color: TEXT, fontWeight: 700, fontSize: "1rem", transition: "all .2s" }}>
                    <span dangerouslySetInnerHTML={html(item.title)} />
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "1.1rem 1.4rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={html(
              "Work through the litany section by section. Remember that in the original, each line was answered by the congregation&rsquo;s refrain &mdash; &ldquo;for his steadfast love endures forever.&rdquo;"
            )} />
            {verseItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ marginBottom: 10 }}>
                  <button type="button" onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "1rem 1.25rem", background: isOpen ? `${item.color}14` : CARD,
                      border: `1px solid ${isOpen ? item.color + "55" : BORDER}`, borderRadius: 12, cursor: "pointer",
                      color: TEXT, fontWeight: 700, fontSize: "0.98rem", transition: "all .2s", gap: "1rem" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                      <span style={{ color: item.color }} dangerouslySetInnerHTML={html(item.ref)} />
                      <span style={{ fontWeight: 500, fontSize: "0.85rem", color: MUTED }} dangerouslySetInnerHTML={html(item.summary)} />
                    </span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "1.1rem 1.4rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            {applicationItems.map((item, i) => (
              <div key={i} style={{ ...card, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: item.color, marginBottom: "0.6rem" }} dangerouslySetInnerHTML={html(item.title)} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={html(item.body)} />
              </div>
            ))}

            <div style={{ ...card }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: GOLD, marginBottom: "1rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} dangerouslySetInnerHTML={html(q)} />
                ))}
              </ol>
            </div>

            <div style={{ ...card }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: TEAL, marginBottom: "1rem" }}>Watch &amp; Reflect</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                    </div>
                    <p style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", textAlign: "center" }} dangerouslySetInnerHTML={html(v.title)} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, background: `${ROSE}10`, border: `1px solid ${ROSE}40` }}>
              <h3 style={{ fontWeight: 900, fontSize: "1.25rem", color: ROSE, marginBottom: "0.75rem" }}>A Closing Prayer</h3>
              <p style={{ color: TEXT, lineHeight: 1.9, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={html(
                "Give thanks to the LORD, for he is good, for his steadfast love endures forever. You made the heavens by understanding and spread out the earth; your love endures forever. You divided the sea and led your people out; your love endures forever. You remembered us in our low estate and gave us a heritage; your love endures forever. You give food to all flesh and remember us still; your love endures forever. Teach us, O God of heaven, to answer every line of our lives with the same confession &mdash; that whatever comes, your covenant love does not let go. Give thanks to the God of heaven, for his steadfast love endures forever. Amen."
              )} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
