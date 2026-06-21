"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function Psalm113Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a1420 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: TEAL }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book V
            <span style={{ color: BORDER }}>{" > "}</span>
            Egyptian Hallel (113-118)
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 113 &mdash; Who Is Like the LORD Our God?
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            The opening of the Egyptian Hallel &mdash; God&rsquo;s transcendent majesty and stooping condescension, the reversal of the poor and the barren
          </p>
          <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Who is like the LORD our God, who is seated on high, who looks far down on the heavens and the earth?&rdquo; &mdash; Psalm 113:5-6
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 22px", background: "none", border: "none", cursor: "pointer",
                color: activeTab === tab ? TEAL : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${TEAL}` : "2px solid transparent",
                fontFamily: "Georgia, serif", fontSize: 14, fontWeight: activeTab === tab ? 700 : 400,
                whiteSpace: "nowrap", transition: "color 0.2s"
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* -- OVERVIEW -- */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px" }}>
              <h2 style={{ color: TEAL, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 113 opens the Egyptian Hallel, a collection of psalms (113-118) that played a central role in Israel's liturgical life&mdash;sung at the three major pilgrimage festivals (Passover, Pentecost, and Tabernacles) and in the home Passover Seder. Jewish tradition divides the Hallel into two parts: Psalms 113-114 were sung before the Passover meal, and Psalms 115-118 after. This means that on the night of the Last Supper, when Matthew 26:30 records that Jesus and his disciples &ldquo;sang a hymn&rdquo; before going to the Mount of Olives, they very likely concluded with Psalms 115-118. Psalm 113 was among the psalms Jesus sang at the Passover table every year of his life." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm is a masterpiece of compressed theology. In nine verses it moves through a complete arc: from a summons to praise (vv. 1-3), to a statement of God's incomparable transcendence (vv. 4-6), to an extended portrait of his astonishing condescension to the lowest members of society (vv. 7-9). This two-movement structure&mdash;transcendence followed by condescension&mdash;is one of the most important theological patterns in Scripture, and Psalm 113 distills it with exquisite economy." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The opening verses (1-3) contain a triple invocation of &ldquo;Hallelu-Yah&rdquo; (praise the LORD) and identify the worshippers as &ldquo;servants of the LORD.&rdquo; The praise is commanded to extend from the rising to the setting of the sun&mdash;a merism for all time, every moment of every day, in every geography. The name of the LORD is to be praised above all names; no competitor occupies the same category." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The incomparability section (vv. 4-6) asks the great rhetorical question: &ldquo;Who is like the LORD our God, who is seated on high, who looks far down on the heavens and the earth?&rdquo; The phrase &ldquo;looks far down on the heavens and the earth&rdquo; is extraordinary. God sits so high that even the heavens themselves are below him and must be looked down upon. This is not spatial description but theological statement: YHWH occupies a category entirely apart from creation. He is not the highest member of a continuum; he is above the continuum entirely. John Calvin: &ldquo;When the psalmist says God stoops to behold the things in heaven, he does not mean that heaven is near God, but that God is infinitely higher even than the heavens.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "What makes the second movement (vv. 7-9) so theologically stunning is its contrast with the first. The God who is so transcendent that he must stoop to see even the heavens is simultaneously the God who raises the poor from the dust and the needy from the ash heap. The Hebrew word &ldquo;ash heap&rdquo; (ashpoth) refers to the refuse dumps outside city gates where the destitute would gather, searching for scraps. This is the lowest social address imaginable. Yet God lifts from this place to seat the poor &ldquo;with princes, with the princes of his people.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm's climax is the barren woman who is given a home as &ldquo;a joyful mother of children&rdquo; (v. 9). In the ancient Near East, barrenness was social death&mdash;the woman without children had no status, no security, and no future. Yet God specializes in reversals. Derek Kidner observes that this image echoes through the entire OT: Sarah, Rebekah, Rachel, Manoah's wife, Hannah. These are not marginal stories; they are paradigms of how God works. The NT fulfillment comes most explicitly in Mary's Magnificat (Luke 1:46-55), which is a near-quotation of Psalm 113, and in the promise of the new Jerusalem as a rejoicing barren woman (Isaiah 54:1; Galatians 4:27). The God who is high above all stoops to lift the lowest." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: TEAL, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Collection", "Egyptian Hallel (Psalms 113-118)"],
                  ["Used At", "Passover, Pentecost, Tabernacles"],
                  ["Type", "Descriptive Hymn of Praise"],
                  ["Accent Color", "Teal -- transcendence & condescension"],
                  ["NT Echo", "Luke 1:46-55 -- the Magnificat"],
                  ["Key Pattern", "Transcendence then condescension"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: TEAL, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>Psalm 113 and the Magnificat</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 8, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                  <div style={{ color: TEAL, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Psalm 113:7-9</div>
                  <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>"He raises the poor from the dust and lifts the needy from the ash heap... He gives the barren woman a home, making her the joyful mother of children."</p>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                  <div style={{ color: PURPLE, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Luke 1:52-53 (Magnificat)</div>
                  <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>"He has brought down the mighty from their thrones and exalted those of humble estate; he has filled the hungry with good things, and the rich he has sent away empty."</p>
                </div>
              </div>
            </div>

            <VideoEmbed videoId="sXidCtGIols" title="Psalm 113 Study" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: TEAL,
                title: "Hallel: The Theology of Commanded Praise",
                refs: "Psalm 113:1-3; Ephesians 5:19-20; Hebrews 13:15; Revelation 19:1-7",
                body: `The word "Hallel" comes from the Hebrew root halal, which means to boast, shine, or celebrate exuberantly. The Hallelu-Yah that opens Psalm 113 is literally "You all praise Yah!"&mdash;a plural imperative addressed to the community of worshippers. Praise is not left to personal preference; it is commanded. This is theologically significant: praise is not primarily a response to feeling worshipful but a commanded act rooted in who God is, not how we feel.

The address to "servants of the LORD" identifies the worshippers by their relationship to God. They are not consumers of divine services who praise when satisfied; they are servants who praise because they belong to the one who is worthy of praise. This identity precedes and grounds the praise. Matthew Henry: "The servants of God have peculiar obligations to praise him; they have more to praise him for, and they are in covenant with him to do so."

The temporal scope of the praise -- "from the rising of the sun to its setting" -- is a merism encompassing all time. The spatial scope -- "praised above all nations" -- encompasses all people. Together, they assert that the praise of the LORD is not a sectarian activity of one people in one time but the proper occupation of all humanity in all times and places. This is the missionary dimension embedded in the opening verses.

The NT carries this command forward. Hebrews 13:15 defines the Christian's primary sacrifice as "a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name." Ephesians 5:19-20 commands "addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart, giving thanks always and for everything." The Egyptian Hallel's commanded praise becomes the church's ongoing sacrifice.`,
              },
              {
                color: GOLD,
                title: "Divine Incomparability: Who Is Like the LORD?",
                refs: "Psalm 113:4-6; Exodus 15:11; Isaiah 40:18-25; Romans 11:33-36",
                body: `The question "Who is like the LORD our God?" (v. 5) is one of the great incomparability formulas in the Bible. It appears first in the Song of the Sea after the Exodus: "Who is like you, O LORD, among the gods?" (Exodus 15:11). It recurs throughout the Psalter and the prophets as the central assertion of Israelite monotheism: YHWH is not the greatest among many; he is categorically unique.

The answer to the question in Psalm 113 is developed through two stacked descriptions. First, God is "seated on high" -- enthroned above everything. The word "high" (marom) refers to the highest conceivable position. Second, he "looks far down on the heavens and the earth" -- even the heavens require him to stoop. The Hebrew "looks far down" (mashpil lir'ot) is a single word meaning "he who humbles himself to see." Even to observe his own creation, God must accommodate himself to something far beneath him.

Isaiah 40:18 poses the same incomparability question: "To whom then will you liken God, or what likeness compare with him?" The idols are mocked: craftsmen make them, they cannot move. Isaiah 40:25: "To whom then will you compare me, that I should be like him? says the Holy One." Paul's doxology in Romans 11:33-36 captures the same theology: "Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways! For who has known the mind of the Lord, or who has been his counselor?" The incomparability of God is not abstract theology; it is the foundation of all trust and worship.

Tremper Longman III observes that Psalm 113's incomparability formula has apologetic force: in a world of competing religious claims, the assertion "there is none like YHWH" is not triumphalism but precision. The God who "looks far down on the heavens" is not merely Israel's tribal deity; he is the ontological ground of everything that exists. All other divine claimants are either created beings (and therefore not God) or human projections (and therefore fictions). YHWH alone is.`,
              },
              {
                color: ROSE,
                title: "The Great Reversal: From Dust to Princes",
                refs: "Psalm 113:7-8; 1 Samuel 2:8; Luke 1:52; James 2:5; 1 Corinthians 1:26-29",
                body: `Verses 7-8 are quoted almost verbatim from Hannah's prayer in 1 Samuel 2:8, which itself becomes the template for Mary's Magnificat. This intertextual web is not accidental -- it reveals a consistent pattern in how God works: he raises the poor from the dust and lifts the needy from the ash heap, to make them sit with princes. This is not occasional charity but the characteristic mode of divine action.

The "dust" and "ash heap" locate the poor at the absolute bottom of ancient society. In the ancient Near East, the ash heap at the city gate was where beggars gathered, picking through refuse for survival -- the social zero point. But God does not merely lift from the ash heap to a respectable middle position. He lifts "to make them sit with princes, with the princes of his people." The reversal is total: from the lowest to the highest, from the ash heap to the throne room.

This reversal pattern saturates the gospels. The first shall be last and the last first (Matthew 20:16). The exalted shall be humbled and the humble exalted (Luke 18:14). The Beatitudes pronounce blessed those whom the world considers unfortunate: the poor in spirit, the mourning, the meek, the persecuted. James 2:5: "Has not God chosen those who are poor in the world to be rich in faith and heirs of the kingdom, which he has promised to those who love him?"

Paul makes the same point about the composition of the Corinthian church: "Not many of you were wise according to worldly standards, not many were powerful, not many were of noble birth. But God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong" (1 Cor. 1:26-27). God's pattern of working through the lowly is not a temporary accommodation to circumstances; it is his characteristic method of glorifying himself in a world that exalts the powerful.`,
              },
              {
                color: PURPLE,
                title: "The Barren Woman Made Glad: Reversals of Impossibility",
                refs: "Psalm 113:9; Genesis 21:1-7; 1 Samuel 1:11-20; Luke 1:36-37; Isaiah 54:1; Galatians 4:27",
                body: `The psalm's climax is the gift of children to the barren woman. In the ancient world, a woman without children was among the most socially vulnerable and personally bereft. She had no legal standing through a son, no security in old age, no continuation of her name. Barrenness was experienced as divine curse (Deuteronomy 7:14 promises freedom from barrenness as covenant blessing). The barren woman lived at the intersection of physical suffering and social shame.

Yet this is precisely where Psalm 113 places God's most characteristic act. He gives the barren woman "a home" -- the Hebrew is literally "he settles the childless woman in the house" -- and makes her "a joyful mother of children." The reversal is not merely social but physical: the body that could not bear life now teems with it. This is the creation-level power of God at work in the most personal of human griefs.

The biblical gallery of barren women given children constitutes one of Scripture's most coherent themes: Sarah (Gen. 21:1-7), Rebekah (Gen. 25:21), Rachel (Gen. 30:22-24), Hannah (1 Sam. 1:11-20), Elizabeth (Luke 1:36-37). Each story adds layers to the same theological portrait: the impossibility does not frustrate God but showcases him. Calvin: "There is no degree of lowliness so deep that God cannot raise the afflicted one from it, for his power is unlimited, and his compassion is not exhausted by long delay."

The NT fulfillment transcends the literal. Isaiah 54:1 calls the exiled, desolate Jerusalem to sing as a barren woman who is about to be given more children than the wife who had a husband -- and Paul quotes this in Galatians 4:27 as a promise to the new covenant community. The church, born not of human seed but of the Spirit, is the ultimate barren woman given a joyful home of children beyond counting. "Praise the LORD" for what is impossible becomes possible only in him.`,
              },
              {
                color: GREEN,
                title: "The Egyptian Hallel at the Last Supper",
                refs: "Psalm 113 in context; Matthew 26:26-30; Mark 14:22-26; 1 Corinthians 5:7",
                body: `Understanding Psalm 113 as part of the Egyptian Hallel (Psalms 113-118) transforms the experience of reading it. This psalm was not merely ancient liturgy; it was the specific liturgy of the Passover Seder, and Jesus sang it on the night of his betrayal. The connection is made explicit in Matthew 26:30: "And when they had sung a hymn, they went out to the Mount of Olives." In Jewish practice, the "hymn" at the end of the Seder was Psalms 115-118; Psalms 113-114 were sung before the meal.

This means that as Jesus instituted the Lord's Supper, interpreting the Passover bread and cup as his body and blood, the frame around that moment was the Egyptian Hallel. The psalms that had celebrated Israel's Exodus from Egypt were now being sung by the one who would accomplish a greater Exodus -- not from slavery in Egypt but from slavery to sin and death. Paul makes this connection explicit: "Christ, our Passover lamb, has been sacrificed" (1 Corinthians 5:7).

Psalm 113's specific themes resonate powerfully in this Passover context. The poor raised from the dust (vv. 7-8) anticipates the one who would humble himself to the point of death on a cross before being exalted to the highest place (Philippians 2:8-9). The barren woman given children (v. 9) anticipates the church, born out of the death of the one who was betrayed on that very evening. The incomparable God who stoops to see even the heavens (v. 6) is present at that table in human flesh, about to stoop to death itself.

Charles Spurgeon wrote: "We should sing this psalm with peculiar fervor, remembering that our Lord himself sang it, and that what was his praise on earth should be our praise now. If he could raise his voice in Hallel on the night of his betrayal, we can raise ours on any night, however dark."`,
              },
            ].map((theme) => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: theme.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Theme</div>
                <h3 style={{ color: TEXT, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{theme.title}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{theme.refs}</div>
                {theme.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* -- VERSE BY VERSE -- */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 28px" }}>
              <h2 style={{ color: TEAL, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 113 -- 9 verses: summons, incomparability, condescension</p>
            </div>
            {[
              { v: "1", ref: "Hallelu-Yah: Praise the Name", color: TEAL, text: "\"Praise the LORD! Praise, O servants of the LORD, praise the name of the LORD!\" The psalm opens with three rapid praise imperatives. &ldquo;Hallelu-Yah&rdquo; is a plural imperative addressed to the community. The address &ldquo;servants of the LORD&rdquo; is key: the worshippers are defined by relationship before they are defined by activity. Their identity as servants grounds their praise. &ldquo;The name of the LORD&rdquo; is praised rather than merely the LORD himself, because in Hebrew thought the name encapsulates the full character and identity of the person. To praise the name is to acknowledge all that God is. Calvin: &ldquo;When we speak of God's name, we mean his whole revealed character -- his power, wisdom, holiness, goodness, and truth.&rdquo;" },
              { v: "2-3", ref: "Eternal and Universal Praise", color: TEAL, text: "\"Blessed be the name of the LORD from this time forth and forevermore! From the rising of the sun to its setting, the name of the LORD is to be praised!\" Two dimensions of the praise: temporal (from now to forever) and spatial (from east to west, all geography). The word &ldquo;blessed&rdquo; (baruk) is the standard Hebrew word for blessing, but when applied to God it means acknowledging and exalting him rather than conferring benefit. The scope -- all time, all geography -- constitutes a claim to universal lordship. YHWH is not a regional deity; he is the God of all time and all places. This is both a theological claim and a prayer: may his praise fill the whole earth." },
              { v: "4", ref: "Exalted Above All Nations and Glory", color: GOLD, text: "\"The LORD is high above all nations, and his glory above the heavens!\" The verse establishes the spatial hierarchy: YHWH above the nations, YHWH's glory above the heavens. The nations occupy the horizontal plane of earthly existence; God transcends even them. His glory -- the visible manifestation of his character and power -- exceeds even the heavens, which ancient peoples regarded as the highest possible domain. This stacking of superlatives (above all nations, above the heavens) pushes toward the incomparability formulation that follows. Matthew Henry: &ldquo;There is no nation so great but God is greater; there is no heaven so high but his glory is higher.&rdquo;" },
              { v: "5-6", ref: "Who Is Like the LORD? The Double Stoop", color: TEAL, text: "\"Who is like the LORD our God, who is seated on high, who looks far down on the heavens and the earth?\" The incomparability question (Who is like?) reaches back to Exodus 15:11 and forward to Isaiah 40:18. God is &ldquo;seated on high&rdquo; -- the royal posture of enthroned authority -- but he &ldquo;looks far down&rdquo; on the heavens and the earth. The Hebrew &ldquo;looks far down&rdquo; is a participle meaning &ldquo;the one who humbles himself to see.&rdquo; Even to observe the heavens, God must stoop. This is the ontological gap between Creator and creation: even the highest created thing (the heavens) is infinitely below the uncreated God. Kidner: &ldquo;God stoops twice -- first to see the heavens, and then, incredibly, to see the earth.&rdquo;" },
              { v: "7-8", ref: "From Dust to Princes: The Great Reversal", color: ROSE, text: "\"He raises the poor from the dust and lifts the needy from the ash heap, to make them sit with princes, with the princes of his people.\" Nearly identical to Hannah's prayer in 1 Samuel 2:8. The &ldquo;ash heap&rdquo; (ashpoth) was the rubbish dump outside the city gate, the gathering place of the utterly destitute. God does not raise from poverty to adequacy; he raises from the lowest point to sit &ldquo;with princes&rdquo; -- the highest available station. The reversal is total and unearned. The poor are not raised because they deserve it but because God chooses to demonstrate his power and goodness in exactly this way. This becomes the template for the gospel: sinners raised from spiritual death to sit with Christ &ldquo;in the heavenly places&rdquo; (Ephesians 2:6)." },
              { v: "9", ref: "The Barren Woman: Life from Death", color: PURPLE, text: "\"He gives the barren woman a home, making her the joyful mother of children. Praise the LORD!\" The psalm concludes with the most intimate reversal: barrenness to motherhood. The Hebrew literally reads &ldquo;he settles the barren one in the house&rdquo; -- she gains both home and children. &ldquo;Joyful&rdquo; is the same word used for the joy of harvest festivals. The reversal from ash heap (v. 7) to princely company (v. 8) to joyful home (v. 9) completes a picture of total divine generosity toward those the world has written off. The psalm closes with &ldquo;Praise the LORD!&rdquo; -- the same Hallelu-Yah with which it opened, now given its reason. We praise because this is what God does: he reverses hopelessness into abundance." },
            ].map((item) => (
              <div key={item.v} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: item.color, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 13, fontWeight: 700, minWidth: 36, textAlign: "center", flexShrink: 0 }}>
                    {item.v}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -- APPLICATION -- */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h2 style={{ color: TEAL, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 113 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 113 is one of the great short psalms of the Bible&mdash;a perfect distillation of who God is and how he works. Its two movements (transcendence and condescension) are not merely theological propositions but invitations to a particular posture: wonder at God's majesty and confidence in his care for the lowest." }} />
            </div>

            {[
              {
                color: TEAL,
                title: "1. Let God's Incomparability Recalibrate Your Worship",
                body: `Psalm 113's incomparability question -- "Who is like the LORD our God?" -- is meant to stop us in our tracks. In a culture that grades everything on a scale from 1 to 10, we unconsciously place God somewhere near the top of a continuum. But Psalm 113 asserts that God is not on the continuum at all. He sits so high that even the heavens are below him and require him to stoop.

This has practical implications for worship. If God is merely "very great," worship is impressive but optional. If God is categorically incomparable -- if "there is none like him" is a statement about his unique ontological status, not just his exceptional qualities -- then worship is the only rational response to reality. Not to praise this God is not modesty; it is a failure of perception.

The practice: in your next time of prayer or worship, begin not with your needs or even your gratitude, but with the incomparability of God. Ask yourself: Who is like the LORD my God? Then answer it from Scripture, from your own experience, from the creation around you. Let the incomparability be real before you bring anything else. This is what the Hallel does: it establishes who God is before it says anything about what he has done or what you need.`,
                prayer: "Lord, there is none like you. You are high above every heaven, and yet you see me. Let your incomparability be the first thing in my heart this morning. Recalibrate my worship to the size of who you are.",
              },
              {
                color: ROSE,
                title: "2. Trust the God Who Specializes in Reversals",
                body: `The great reversal of Psalm 113 -- from ash heap to prince, from barren to joyful mother -- is not a pleasant story about divine favoritism toward the poor. It is a revelation of the characteristic mode of divine action. God works upside down, and the reason is theological: "God chose what is weak in the world to shame the strong... so that no human being might boast in the presence of God" (1 Cor. 1:27, 29).

This means that your current position at the bottom is not evidence that God has abandoned you. It may be precisely the position from which he intends to demonstrate his glory. The ash heap is not outside God's reach; it is one of his preferred addresses. Sarah waited until it was biologically impossible before Isaac came. Joseph went to prison before the palace. Jesus went to the tomb before the resurrection. The reversal comes after the impossibility is complete.

Practically: identify the area of your life where you are at the "ash heap" -- the place of seeming hopelessness or shame. Bring it to the God of Psalm 113 not as a complaint but as a prayer: "You raise the poor from the dust. You give the barren woman a home. Do this for me." The prayer is grounded in character, not in magical thinking. This is how God works.`,
                prayer: "Lord, you raise the poor from the dust and lift the needy from the ash heap. Here is my ash heap: [specific hopeless situation]. I bring it to the God who reverses what is impossible. I trust not in the circumstances but in your character.",
              },
              {
                color: GOLD,
                title: "3. Sing the Hallel That Jesus Sang",
                body: `One of the most moving ways to engage with Psalm 113 is to remember that Jesus sang it. Not as a metaphor or a pious thought, but literally: at the Last Supper, on the night he was betrayed, he sang the Egyptian Hallel. The words of Psalm 113 were on his lips as he broke the bread and took the cup, knowing what the next twelve hours held.

This means that Psalm 113 is not just an ancient poem but a window into Jesus's own worship. He sang of the God who raises the poor from the dust -- and he was about to descend into the ultimate dust, death itself, before being raised. He sang of the barren woman given children -- and he was about to give birth to the church through his death. He sang of the incomparable God who stoops -- and he himself was the supreme stooping of God into human flesh.

Sing this psalm as he sang it: as both description and anticipation. Let it be your practice to sing it at Communion, to remember that you are participating in the same Passover meal Jesus participated in, now fulfilled. The Hallel that framed his betrayal frames our remembrance. And the one who stooped from heaven to earth, from life to death, is the one we remember and proclaim "until he comes" (1 Cor. 11:26).`,
                prayer: "Lord Jesus, you sang this psalm on the night of your betrayal. Let me sing it with the weight of knowing what it cost you to stoop from highest heaven to the ash heap of a cross. Let my praise be worthy of your condescension.",
              },
              {
                color: PURPLE,
                title: "4. Care for Those the World Has Left on the Ash Heap",
                body: `Psalm 113's portrait of the God who raises the poor from the ash heap is not merely a theological claim; it is a behavioral mandate. If this is who God is -- if his characteristic action is to lift the lowly -- then those who belong to him are called to participate in that action. James 1:27 and Matthew 25:31-46 make this connection between divine character and human obligation explicit.

The "ash heap" of Psalm 113 is populated in every generation. In the ancient world it was the destitute outside the city gate. In our world it is the person in the nursing home with no visitors, the child aging out of foster care with no family, the refugee with no legal standing, the addict who has been written off by everyone who knew her. These are the ash heap addresses that God specifically targets for reversal.

The Christian practice of caring for the vulnerable is therefore not merely humanitarian impulse; it is the imitation of God. We serve the poor because God raises the poor from the dust. We welcome the stranger because God sets the barren woman in a home. We give dignity to the discarded because God seats them with princes. The church is called to be the community that enacts on the horizontal plane what God enacts vertically: the reversal of human hopelessness into divine abundance.`,
                prayer: "Lord, show me the ash heap in my neighborhood. Give me eyes to see those you are about to raise. Use me as an instrument of your reversal -- to lift the poor, welcome the stranger, give dignity to the discarded. Let your character be my practice.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Application</div>
                <h3 style={{ color: TEXT, fontSize: 19, fontWeight: 700, margin: "0 0 14px" }}>{item.title}</h3>
                {item.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                <div style={{ background: BG, border: `1px solid ${item.color}33`, borderRadius: 8, padding: "14px 18px", marginTop: 8 }}>
                  <div style={{ color: item.color, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Prayer</div>
                  <p style={{ color: MUTED, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: 14 }}
                    dangerouslySetInnerHTML={{ __html: item.prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px", textAlign: "center" }}>
              <p style={{ color: MUTED, fontStyle: "italic", fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Who is like the LORD our God, who is seated on high, who looks far down on the heavens and the earth?&rdquo;<br/>Psalm 113:5-6" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
