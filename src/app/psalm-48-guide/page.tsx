"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videos = [
  { videoId: "bQFPxBqpVMk", title: "Psalm 48 Explained -- The City of God" },
  { videoId: "yTZIVMHhDEI", title: "Songs of Zion: Psalms 46-48" },
];

const tabs = ["overview", "themes", "verse", "application"] as const;
type Tab = typeof tabs[number];

export default function Psalm48Guide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0a1a0e 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GREEN, fontSize: "0.78rem" }}>Psalm 48</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(58,125,86,0.12)", border: `1px solid rgba(58,125,86,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "1rem" }}>Song of Zion</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 48: Great Is the Lord,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>and Greatly to Be Praised</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.75, maxWidth: 680, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 48 is one of the great Songs of Zion, a celebration of God&rsquo;s unassailable city and the King who dwells within it. Written by the Sons of Korah, it proclaims that God himself is the reason Jerusalem stands &mdash; not its walls, not its armies, but the LORD of hosts who has established his throne there. The psalm moves from praise to narrative to meditative walk and ends as a permanent testimony: <em>This is God, our God forever and ever.</em>" }} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Songs of Zion", "Korah", "Jerusalem", "Divine Protection", "Worship"].map(t => (
              <span key={t} style={{ background: "rgba(58,125,86,0.08)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 999, padding: "0.2rem 0.75rem", fontSize: "0.72rem", color: GREEN }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: "#09090F", position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem", display: "flex", gap: 0 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: tab === t ? 600 : 400, cursor: "pointer", textTransform: "capitalize", transition: "all 0.2s", letterSpacing: "0.02em" }}>
              {t === "verse" ? "Verse-by-Verse" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Overview: The Unshakeable City of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 48 belongs to a cluster of Songs of Zion (Psalms 46&ndash;48, 84, 87, 122) that celebrate God&rsquo;s dwelling place on earth &mdash; Jerusalem, and specifically Mount Zion. Where Psalm 46 affirms God as refuge amid chaos and Psalm 47 celebrates his universal kingship, Psalm 48 grounds both themes geographically: God reigns <em>here</em>, in this city, and his presence makes it impregnable." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The psalm opens (vv. 1&ndash;3) with a doxological proclamation: the LORD is great and greatly to be praised in his holy mountain. Zion is identified as beautiful in elevation, the joy of all the earth &mdash; language that echoes the ancient Near Eastern imagery of the cosmic mountain where the gods dwell, here fully demythologized and appropriated for Israel&rsquo;s God." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The narrative heart (vv. 4&ndash;8) recalls a historical crisis &mdash; kings assembled against Jerusalem, looked upon it, and fled in terror. The exact occasion is debated: some scholars (Derek Kidner, Tremper Longman) see it as a general liturgical memory encompassing multiple deliverances; John Calvin suggested the Assyrian siege under Sennacherib (2 Kings 19). Whatever the specific event, the theological point is unambiguous: the enemy assembled, saw, and was undone. God did not even need to fight &mdash; his presence alone broke them." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The community then processes around the city (vv. 9&ndash;14), meditating on God&rsquo;s steadfast love (<em>hesed</em>). The processional walk is both liturgical act and theological act: they are learning to read the city &rsquo;s towers and ramparts as testimonies to God&rsquo;s faithfulness. The psalm closes with an eternal affirmation &mdash; &ldquo;This is God, our God forever and ever. He will guide us forever&rdquo; &mdash; making Zion a perpetual proclamation of divine covenant loyalty." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Charles Spurgeon called this psalm &ldquo;a holy song about a holy city, written in holy triumph&rdquo; and noted that its power lies in moving from abstract praise to concrete historical memory to present embodied worship. Matthew Henry observed that the psalm teaches us to praise God not only for who he is in the abstract but for what he has done in specific places and times. The city is not merely praised; it is traversed and counted and told to future generations." }} />
            </section>

            <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(201,162,39,0.06))", border: `1px solid rgba(201,162,39,0.2)`, borderRadius: 10, padding: "1.5rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#c9a227", marginBottom: "0.75rem" }}>The Text: Psalm 48 (ESV)</h3>
              <div style={{ color: MUTED, lineHeight: 2, fontSize: "0.92rem" }}>
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>1</sup> Great is the LORD and greatly to be praised in the city of our God! His holy mountain, <sup>2</sup> beautiful in elevation, is the joy of all the earth, Mount Zion, in the far north, the city of the great King. <sup>3</sup> Within her citadels God has made himself known as a fortress." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>4</sup> For behold, the kings assembled; they came on together. <sup>5</sup> As soon as they saw it, they were astounded; they were in panic, they took to flight. <sup>6</sup> Trembling took hold of them there, anguish as of a woman in labor. <sup>7</sup> By the east wind you shattered the ships of Tarshish. <sup>8</sup> As we have heard, so have we seen in the city of the LORD of hosts, in the city of our God, which God will establish forever." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>9</sup> We have thought on your steadfast love, O God, in the midst of your temple. <sup>10</sup> As your name, O God, so your praise reaches to the ends of the earth. Your right hand is filled with righteousness. <sup>11</sup> Let Mount Zion be glad! Let the daughters of Judah rejoice because of your judgments!" }} />
                <p style={{ margin: "0", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>12</sup> Walk about Zion, go around her, number her towers, <sup>13</sup> consider well her ramparts, go through her citadels, that you may tell the next generation <sup>14</sup> that this is God, our God forever and ever. He will guide us forever." }} />
              </div>
            </div>

            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>New Testament Fulfillment</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The New Testament dramatically relocates the Zion motif. Jesus weeps over Jerusalem (Luke 19:41&ndash;44) because it has failed to recognize its true King. Yet the letter to the Hebrews announces that believers have &ldquo;come to Mount Zion and to the city of the living God, the heavenly Jerusalem&rdquo; (Heb 12:22) &mdash; the ultimate city, of which earthly Jerusalem was always only a shadow and type." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Revelation 21&ndash;22 crowns this trajectory: the New Jerusalem descends from heaven, and God himself dwells with his people. The dimensions, the gates, the walls Psalm 48 bids us count &mdash; all find their perfect antitype in the eternal city whose builder and maker is God (Heb 11:10). The processional walk of Psalm 48 becomes the eternal dwelling of the glorified church in the presence of God and the Lamb." }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "This is why Tremper Longman III argues that the Songs of Zion are not merely historical documents but eschatological hymns &mdash; they sing of a city that keeps pointing beyond itself until it finds its fulfillment in the consummation of all things. Christians sing Psalm 48 not as nostalgia but as anticipation." }} />
            </section>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Book", value: "Book II (Psalms 42-72)" },
                { label: "Author", value: "Sons of Korah" },
                { label: "Type", value: "Song of Zion" },
                { label: "Key Theme", value: "God's city is unshakeable" },
                { label: "Key Verse", value: "v. 14 -- This is God, our God" },
                { label: "NT Echo", value: "Hebrews 12:22; Rev 21" },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.4rem" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: TEXT }}>{value}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Video Commentary</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {videos.map(v => <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Five interlocking themes run through Psalm 48 and anchor it in the larger canonical story of God&rsquo;s dwelling with his people." }} />

            {[
              {
                color: GREEN, title: "1. God&rsquo;s Presence as the City&rsquo;s True Defense",
                body: "The psalm&rsquo;s most striking theological move is its inversion of ancient siege logic. The kings do not flee because Jerusalem has superior armies or walls &mdash; they flee the moment they <em>see</em> the city (v. 5). This is God&rsquo;s presence doing what no fortification can do. John Calvin writes in his commentary that &ldquo;God&rsquo;s glory so beamed forth upon Zion that it struck the minds of enemies with astonishment&rdquo; before any sword was drawn. The city&rsquo;s ramparts (v. 13) are not praised as military engineering but as visible testimony to invisible grace. Matthew Henry notes that we should learn to look through the second causes of our safety &mdash; treaties, walls, armies &mdash; to the first cause who is God himself. For the Christian, this means recognizing that the church is not secured by institutional strength, political favor, or cultural influence but by the presence of its Lord who promised &ldquo;the gates of hell shall not prevail against it&rdquo; (Matt 16:18)."
              },
              {
                color: GOLD, title: "2. Zion as the Joy of All the Earth",
                body: "Verse 2 makes an audacious claim: Mount Zion is &ldquo;the joy of all the earth.&rdquo; This is not national pride &mdash; it is missional declaration. The city of God is not a private possession of Israel but the center of a universal story. Tremper Longman observes that this language directly echoes Genesis 12:3: &ldquo;in you all the families of the earth shall be blessed.&rdquo; God chose Abraham, then Israel, then Zion &mdash; not as an end but as the means of his global redemptive program. Spurgeon comments: &ldquo;Whatever is truly blessed is blessed because God is there; whatever brings joy to men, it is because God is the source of that joy.&rdquo; The New Testament fulfills this when Jesus declares himself the true temple (John 2:19-21) and the Spirit is poured out on &ldquo;all flesh&rdquo; at Pentecost. The church, scattered among the nations, now carries Zion&rsquo;s joy into every culture and tongue."
              },
              {
                color: PURPLE, title: "3. Hesed &mdash; Steadfast Love as the Foundation",
                body: "Verse 9 is the emotional center of the psalm: &ldquo;We have thought on your steadfast love (<em>hesed</em>), O God, in the midst of your temple.&rdquo; The Hebrew word <em>hesed</em> is one of the Old Testament&rsquo;s richest covenant terms &mdash; loyal, unfailing love that persists through every obstacle. The military deliverances recounted in vv. 4&ndash;8 are not random acts of divine power; they are expressions of hesed, the covenant faithfulness God pledged to Abraham and David. Derek Kidner writes that the whole psalm is a meditation on hesed wearing the clothing of history. The towers and ramparts become icons of steadfast love &mdash; every stone a covenant kept. For the Christian, this invites us to trace our own deliverances not to luck or human wisdom but to the unchanging love of God revealed finally and fully in the cross of Jesus Christ, where hesed bore the full cost of our sin."
              },
              {
                color: TEAL, title: "4. Memory, Liturgy, and Intergenerational Testimony",
                body: "The psalm ends with one of Scripture&rsquo;s most beautiful commands: &ldquo;Walk about Zion, go around her, number her towers, consider well her ramparts, go through her citadels, that you may tell the next generation&rdquo; (vv. 12&ndash;13). The walking is not mere sightseeing &mdash; it is embodied theology, a liturgical act of remembrance that will become testimony. Matthew Henry observes that &ldquo;we should study both the history and geography of God&rsquo;s mercies, that we may be the better qualified to publish them.&rdquo; The psalmist is teaching Israel to read architecture as Scripture: every fortified tower is a chapter in the book of God&rsquo;s faithfulness. This theme has profound application for how Christian communities tell their stories &mdash; baptism records, conversion narratives, answered prayers, persecutions survived. Each is a &ldquo;tower&rdquo; to be counted and proclaimed to the next generation."
              },
              {
                color: ROSE, title: "5. The Eternal City and Eschatological Hope",
                body: "The final verse lifts Psalm 48 from history to eternity: &ldquo;This is God, our God forever and ever. He will guide us forever (or: beyond death).&rdquo; The Hebrew word <em>&rsquo;al-mut</em> (forever, or over death) is debated but suggestive &mdash; God&rsquo;s guidance extends beyond the horizon of death itself. Calvin sees here &ldquo;a passage of singular beauty&rdquo; because it moves from the earthly city to the divine character: the city will end, but God will not. Tremper Longman argues this is where Songs of Zion necessarily become eschatological &mdash; the earthly Zion kept failing (it was eventually destroyed), yet the psalmists kept celebrating it because they were, perhaps unconsciously, singing about a city that transcends the earthly. Hebrews 11:10 makes this explicit: Abraham &ldquo;was looking forward to the city that has foundations, whose designer and builder is God.&rdquo; Psalm 48 is ultimately not about Jerusalem&rsquo;s walls but about the God who builds cities that do not fall."
              },
            ].map(({ color, title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${color}`, borderRadius: "0 10px 10px 0", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.25rem", color: "#f2e6c8", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: title }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        )}

        {/* VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "A detailed walk through each section of Psalm 48, drawing on Calvin, Spurgeon, Matthew Henry, and Kidner." }} />

            {[
              {
                ref: "Verse 1&ndash;3", heading: "The Praise of God&rsquo;s Holy Mountain",
                text: "&ldquo;Great is the LORD and greatly to be praised in the city of our God! His holy mountain, beautiful in elevation, is the joy of all the earth, Mount Zion, in the far north, the city of the great King. Within her citadels God has made himself known as a fortress.&rdquo;",
                comment: "The psalm opens as liturgical proclamation, not argument. The greatness of God precedes and grounds every specific claim. Calvin notes that &ldquo;the city of our God&rdquo; shows that Zion&rsquo;s excellence is entirely derivative &mdash; it exists to display God, not the reverse. &ldquo;The far north&rdquo; (<em>yarkete tzaphon</em>) alludes to ancient cosmology&rsquo;s divine mountain in the north &mdash; Israel co-opts the language and says: our God&rsquo;s dwelling surpasses all mythological claims. Spurgeon: &ldquo;He who dwells in Zion has taken up his abode in the fairest of all earthly spots, the beautified reflection of the heavenly holiness.&rdquo; For the New Testament reader, Jesus is the &ldquo;city of the great King&rdquo; &mdash; in him the glory of God dwells bodily (Col 2:9)."
              },
              {
                ref: "Verses 4&ndash;8", heading: "The Kings Who Fled at the Sight of God&rsquo;s City",
                text: "&ldquo;For behold, the kings assembled; they came on together. As soon as they saw it, they were astounded; they were in panic, they took to flight&hellip; As we have heard, so have we seen in the city of the LORD of hosts&hellip;&rdquo;",
                comment: "This is the historical core of the psalm, probably recalling multiple divine deliverances compressed into a single narrative. The key word is &ldquo;as soon as they saw it&rdquo; (v. 5) &mdash; no battle is described because none was needed. The presence of God in the city was itself the weapon. Matthew Henry draws the practical lesson: &ldquo;God needs no instrument when he himself undertakes; the terror of the LORD can in a moment dispirit the mightiest army.&rdquo; The &ldquo;ships of Tarshish&rdquo; (v. 7) is a metaphor for the greatest human power (Tarshish ships were the largest of the ancient world, symbols of imperial reach) shattered by a mere east wind &mdash; God&rsquo;s ordinary weather undoes extraordinary military might. Kidner sees here an echo of the Exodus, where Egypt&rsquo;s military was destroyed not in battle but by water &mdash; God&rsquo;s power operating through creation itself."
              },
              {
                ref: "Verses 9&ndash;11", heading: "Meditation on Steadfast Love",
                text: "&ldquo;We have thought on your steadfast love, O God, in the midst of your temple. As your name, O God, so your praise reaches to the ends of the earth. Your right hand is filled with righteousness&hellip;&rdquo;",
                comment: "The scene shifts from battlefield to sanctuary. The congregation processes into the temple and meditates (<em>dim&rsquo;inu</em>) on God&rsquo;s hesed. Spurgeon notes that meditation is not passive &mdash; it is &ldquo;deliberate, attentive, and adoring rumination upon divine truth.&rdquo; The worshipers link what they have heard (v. 8) with what they now think upon: hesed, faithful covenant love, is the explanation of every military victory. Calvin observes that God&rsquo;s praise reaching &ldquo;to the ends of the earth&rdquo; (v. 10) anticipates the universal mission: Zion is not a local sanctuary but a universal proclamation point. The nations will hear what God has done here and will add their voices to the praise."
              },
              {
                ref: "Verses 12&ndash;14", heading: "The Processional Walk and Eternal Testimony",
                text: "&ldquo;Walk about Zion, go around her, number her towers, consider well her ramparts, go through her citadels, that you may tell the next generation that this is God, our God forever and ever. He will guide us forever.&rdquo;",
                comment: "The psalm ends with an extraordinary command: count the city&rsquo;s towers and ramparts &mdash; not as military audit but as theological act. Each tower says: God was here; God defended; God keeps covenant. Matthew Henry: &ldquo;The fortifications of Zion are to be numbered, not as if the church depended upon them, but that they may be recorded to the glory of God who built and maintained them.&rdquo; The final promise &mdash; &ldquo;He will guide us forever&rdquo; &mdash; extends Zion&rsquo;s story beyond death itself. The Hebrew <em>&rsquo;al-mut</em> may mean &ldquo;even unto death&rdquo; or &ldquo;beyond death.&rdquo; Kidner: &ldquo;The last word about Zion is not a place but a person, not a city but the God who is both its glory and its guide.&rdquo; The psalm that began with a city ends with a Person, and that Person is our dwelling place forever."
              },
            ].map(({ ref, heading, text, comment }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.3rem" }} dangerouslySetInnerHTML={{ __html: ref }} />
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{heading}</h3>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, background: "rgba(201,162,39,0.04)", borderRadius: "0 6px 6px 0", padding: "0.75rem 1rem", margin: "0 0 1rem", fontStyle: "italic", color: "#c9b98a", fontSize: "0.92rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: text }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: comment }} />
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Application & Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 48 is not ancient history &mdash; it is a living word that reshapes how Christians see the church, find security, and tell the story of God&rsquo;s faithfulness." }} />

            {[
              {
                color: GREEN, title: "Finding Your Unshakeable Security",
                body: "The kings who fled at the sight of Zion fled because they encountered the living God &mdash; not Jerusalem&rsquo;s walls. This is the psalm&rsquo;s great challenge to every form of human security. We are prone to building our confidence on careers, savings, health, relationships, reputation. But Psalm 48 invites us to trace our actual security to God himself: &ldquo;within her citadels God has made himself known as a fortress.&rdquo; Where is God currently making himself known as a fortress in your life? What threats are you facing that feel as overwhelming as an assembled army? The psalm promises that when God&rsquo;s presence is your protection, your enemies can assemble and advance &mdash; and still flee at the sight of what God is doing in you.",
                prayer: "Lord, I confess that I often build my security on things that can be shaken. Teach me to see you as my true fortress. When enemies &mdash; fears, failures, accusations &mdash; assemble against me, let the sight of your presence in my life put them to flight. I trust not in walls but in the God who inhabits them."
              },
              {
                color: GOLD, title: "Counting Your Towers: A Practice of Remembrance",
                body: "Verses 12&ndash;13 invite a concrete spiritual practice: walk around your life&rsquo;s history, number its towers, and prepare to testify. The towers are God&rsquo;s specific acts of faithfulness &mdash; answered prayers, unexpected provisions, crises averted, deliverances you cannot explain except by God. Matthew Henry notes that we should be not only <em>hearers</em> of God&rsquo;s mercies but <em>historians</em> of them, able to tell the next generation precisely what God did. Consider keeping a &ldquo;tower journal&rdquo; &mdash; specific, dated records of God&rsquo;s faithfulness. Not vague gratitude, but named towers that you can count and that future generations can tour.",
                prayer: "Father, help me count the towers. Open my eyes to see your specific faithfulness in my specific history. Give me memory for grace. Let me tell my children and my children&rsquo;s children: this is God, our God &mdash; the One who delivered here, provided there, sustained in that season. Make me a faithful historian of your mercy."
              },
              {
                color: PURPLE, title: "The Church as Zion: Belonging to the Unshakeable City",
                body: "Hebrews 12:22 tells believers they have &ldquo;come to Mount Zion and to the city of the living God.&rdquo; This means the local church &mdash; with all its imperfections &mdash; is the outpost of the city that cannot be shaken. Psalm 48&rsquo;s call to walk around Zion and number her towers is, for the Christian, a call to invest deeply in the community of God&rsquo;s people. The towers of the church are its baptisms, its conversions, its acts of mercy, its decades of faithful preaching. These are not to be taken for granted but counted, celebrated, and proclaimed. How are you contributing to the building of this city? Are you walking around it in appreciation and proclamation, or are you a distant observer?",
                prayer: "Lord of the church, thank you that I belong to a city whose walls are your presence. Give me love for your people &mdash; not only for what I receive from the community but for what I contribute to it. Help me count the towers of this local body and tell others: this is what God is doing here, in this city, in this generation."
              },
              {
                color: TEAL, title: "Looking Forward to the City to Come",
                body: "The final verse &mdash; &ldquo;This is God, our God forever and ever. He will guide us forever&rdquo; &mdash; is the psalm&rsquo;s eschatological resolution. Earthly Jerusalem fell. Its towers were leveled. But the God who inhabited it did not fall, and he is building a city that will not be leveled &mdash; the new Jerusalem, the dwelling of God with humanity (Rev 21:3). Psalm 48 trains the heart to hold earthly blessings loosely, because they are signposts, not destinations. When things we have counted on fall &mdash; institutions, relationships, health &mdash; the God who guided Zion still guides. He will guide us <em>beyond death</em>. This is the ultimate security: not a place but a Person who is forever.",
                prayer: "Eternal God, when the cities I have built in my life crumble, remind me that you are the city I am always coming home to. Thank you for guiding me through this life and promising to guide me beyond it. Set my heart on the city whose builder and maker you are, and let me live today as a citizen of that coming kingdom."
              },
            ].map(({ color, title, body, prayer }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                <div style={{ background: `rgba(${color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : color === PURPLE ? "107,79,187" : "13,148,136"},0.06)`, border: `1px solid rgba(${color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : color === PURPLE ? "107,79,187" : "13,148,136"},0.2)`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "0.4rem" }}>Prayer</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.06))", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "1rem" }}>Continue the Songs of Zion</h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {[
                  { label: "Psalm 46 Guide", href: "/psalm-46-guide" },
                  { label: "Psalm 76 Guide", href: "/psalm-76-guide" },
                  { label: "Psalm 87 Guide", href: "/psalm-87-guide" },
                  { label: "Psalm 122 Guide", href: "/psalm-122-guide" },
                  { label: "Psalms Overview", href: "/psalms-guide" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 6, padding: "0.5rem 1rem", fontSize: "0.82rem", color: GREEN, textDecoration: "none" }}>{label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
