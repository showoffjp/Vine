"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videos = [
  { videoId: "Q5rCZ9qGBQg", title: "Psalm 122 -- I Was Glad When They Said" },
  { videoId: "IK9rHtIQ_ZA", title: "Songs of Ascent: Psalms 120-134 Explained" },
];

const tabs = ["overview", "themes", "verse", "application"] as const;
type Tab = typeof tabs[number];

export default function Psalm122Guide() {
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
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Songs of Ascent</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GREEN, fontSize: "0.78rem" }}>Psalm 122</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>Song of Ascent &mdash; Psalm 122</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 122: I Was Glad<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>When They Said, Let Us Go</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.75, maxWidth: 680, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: "A pilgrimage psalm of David, Psalm 122 captures the moment a worshiper arrives at Jerusalem after the journey and stands within its gates &mdash; struck with gratitude, overwhelmed with the city&rsquo;s beauty, and moved to pray for its peace. It is one of the fifteen Songs of Ascent (Psalms 120&ndash;134) sung by pilgrims ascending to Jerusalem for the three great festivals. Its simple gladness and intercessory love make it among the most beloved psalms of the Psalter." }} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["David", "Song of Ascent", "Jerusalem", "Pilgrimage", "Prayer for Peace"].map(t => (
              <span key={t} style={{ background: "rgba(13,148,136,0.08)", border: `1px solid rgba(13,148,136,0.2)`, borderRadius: 999, padding: "0.2rem 0.75rem", fontSize: "0.72rem", color: TEAL }}>{t}</span>
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
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Overview: Joy of Arrival, Love of the City, Intercession for Peace</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 122 is structured around three movements: the memory of glad anticipation (vv. 1&ndash;2), the present experience of standing in Jerusalem (vv. 3&ndash;5), and the intercessory response of praying for the city (vv. 6&ndash;9). The psalm begins in memory (&ldquo;I was glad&rdquo;), moves to presence (&ldquo;our feet have been standing&rdquo;), and ends in prayer (&ldquo;pray for the peace of Jerusalem&rdquo;). This structure is itself a spiritual lesson: right encounter with God&rsquo;s dwelling moves toward intercession." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The gladness of verse 1 is significant. It is not merely the happiness of a holiday trip but the gladness of one who has been invited to worship. The invitation &mdash; &ldquo;let us go to the house of the LORD&rdquo; &mdash; is what stirred the joy, not the destination itself. Calvin observes: &ldquo;This shows that the gladness arose not from any carnal attachment to the city as such, but from the fact that there God had promised to meet with his people.&rdquo; Spurgeon adds: &ldquo;The gladness was not that they were going to Jerusalem but that they were going to the house of the LORD.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The description of Jerusalem in verses 3&ndash;5 emphasizes two things: its architectural unity (&ldquo;built as a city that is bound firmly together&rdquo;) and its institutional purpose (the place where tribes go up, where thrones of judgment sit). Derek Kidner notes that the closely-bound city is a powerful image of community &mdash; the people of God gathered in one place, drawn by one purpose, worshiping one God. Matthew Henry sees in the thrones of David&rsquo;s line a pointer toward the messianic King whose throne is the ultimate justice." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The famous command to &ldquo;pray for the peace of Jerusalem&rdquo; (v. 6) has been the subject of both devotional meditation and considerable controversy. Tremper Longman III wisely distinguishes the canonical meaning from various contemporary political applications: the psalm calls God&rsquo;s people to intercede for the city where God dwells, trusting that its peace is bound up with the purposes of God. For the New Testament reader, the ultimate Jerusalem we pray for is the city of God whose peace is Christ himself &mdash; the Prince of Peace (Isa 9:6) whose cross made peace between God and humanity (Col 1:20)." }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "The psalm ends (vv. 8&ndash;9) with the pilgrim explaining his motivation for intercession: &ldquo;for the sake of my brothers and companions&rdquo; and &ldquo;for the sake of the house of the LORD our God.&rdquo; The prayer for Jerusalem is not nationalist sentiment but theological love &mdash; love for the community of God&rsquo;s people and love for the dwelling place of God himself." }} />
            </section>

            <div style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(201,162,39,0.06))", border: `1px solid rgba(201,162,39,0.2)`, borderRadius: 10, padding: "1.5rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#c9a227", marginBottom: "0.75rem" }}>The Text: Psalm 122 (ESV)</h3>
              <div style={{ color: MUTED, lineHeight: 2, fontSize: "0.92rem" }}>
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>1</sup> I was glad when they said to me, &lsquo;Let us go to the house of the LORD!&rsquo; <sup>2</sup> Our feet have been standing within your gates, O Jerusalem!" }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>3</sup> Jerusalem &mdash; built as a city that is bound firmly together, <sup>4</sup> to which the tribes go up, the tribes of the LORD, as was decreed for Israel, to give thanks to the name of the LORD. <sup>5</sup> There thrones for judgment were set, the thrones of the house of David." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>6</sup> Pray for the peace of Jerusalem! &lsquo;May they be secure who love you! <sup>7</sup> Peace be within your walls and security within your towers!&rsquo; <sup>8</sup> For my brothers and companions&rsquo; sake I will say, &lsquo;Peace be within you!&rsquo; <sup>9</sup> For the sake of the house of the LORD our God, I will seek your good." }} />
              </div>
            </div>

            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>New Testament Fulfillment</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jesus entered Jerusalem to cries of &ldquo;Hosanna&rdquo; (Save us!) &mdash; the crowd instinctively reached for the Songs of Ascent as they welcomed the King. But Jesus wept over the city (Luke 19:41&ndash;44) because it did not know the things that made for its peace. He came as the Peace it had been asking for in Psalm 122:6 &mdash; and was rejected." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The thrones of David (v. 5) find their ultimate occupant in Jesus, the Son of David, whose throne endures forever (Luke 1:32&ndash;33). The &ldquo;peace of Jerusalem&rdquo; the psalm prays for is the <em>shalom</em> that Colossians 1:20 declares Christ has achieved: &ldquo;making peace by the blood of his cross.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "The church that prays &ldquo;your kingdom come&rdquo; is praying the prayer of Psalm 122 in its ultimate form &mdash; for the coming of the New Jerusalem, the city of peace, the dwelling of the God who makes all things new (Rev 21:1&ndash;5). The pilgrim&rsquo;s arrival at the gates of Jerusalem anticipates the moment John describes: &ldquo;And I saw the holy city, new Jerusalem, coming down out of heaven from God.&rdquo;" }} />
            </section>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Book", value: "Book V (Psalms 107-150)" },
                { label: "Author", value: "David" },
                { label: "Type", value: "Song of Ascent / Pilgrimage Psalm" },
                { label: "Key Theme", value: "Joy in the house of God; pray for peace" },
                { label: "Key Verse", value: "v. 1 -- I was glad when they said" },
                { label: "NT Echo", value: "Luke 19:41; Col 1:20; Rev 21:2" },
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
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Five themes weave through Psalm 122 and make it foundational for Christian ecclesiology and intercessory prayer.</p>

            {[
              {
                color: TEAL, title: "1. The Glad Anticipation of Worship",
                body: "The psalm begins in memory: &ldquo;I was glad when they said to me, &lsquo;Let us go to the house of the LORD!&rsquo;&rdquo; The gladness preceded arrival &mdash; the invitation itself was the joy. This tells us something important about the nature of worship: the gladness that belongs to God&rsquo;s house is not merely the product of what happens there but of the orientation of the heart toward it. Matthew Henry: &ldquo;Good men should express their gladness when they are invited to go to worship.&rdquo; Spurgeon: &ldquo;If we are glad to go to the house of God, then the house of God will be glad to receive us.&rdquo; For the Christian, the Lord&rsquo;s Day summons echoes Psalm 122:1 &mdash; we are the people who are glad when the community gathers, not reluctant, not neutral, but genuinely glad."
              },
              {
                color: GREEN, title: "2. The Unity of the Community in Worship",
                body: "Jerusalem is described as &ldquo;built as a city that is bound firmly together&rdquo; (v. 3) &mdash; and the tribes go up <em>together</em> (v. 4). The togetherness is not incidental; it is the theological point. The Hebrew word <em>yahdav</em> (together, as one) runs through the Songs of Ascent like a refrain. The pilgrimage to Jerusalem was the annual re-enactment of Israel&rsquo;s unity: twelve tribes, one God, one city, one worship. Calvin observed that the tightly-bound city is a metaphor for the church &mdash; diverse members compacted into one body by the Spirit. Kidner: &ldquo;The unity of Jerusalem in stone is a parable of the unity God desires for his people in worship.&rdquo; Paul echoes this in Ephesians 2:21: the church is &ldquo;joined together&rdquo; into a holy temple in the Lord."
              },
              {
                color: GOLD, title: "3. The City as the Place of Justice",
                body: "Verse 5 mentions &ldquo;thrones for judgment&rdquo; in Jerusalem &mdash; this is not an incidental historical footnote but a theological point. The city of God is a city of justice; God&rsquo;s dwelling is also the seat of his righteousness. The throne of David was not merely political; it was meant to embody the justice of God&rsquo;s covenant (2 Sam 8:15). This explains why the prophets so frequently attack Jerusalem for its injustice &mdash; a city that is supposed to be the center of divine justice and yet tolerates oppression is the deepest form of covenant infidelity. The church as &ldquo;the city set on a hill&rdquo; (Matt 5:14) carries this dimension: the community of God&rsquo;s people should be a place where justice is practiced, not merely proclaimed."
              },
              {
                color: PURPLE, title: "4. Intercession for the Peace of God&rsquo;s City",
                body: "The famous command of verse 6 &mdash; &ldquo;Pray for the peace of Jerusalem&rdquo; &mdash; is the psalm&rsquo;s most discussed verse. The Hebrew word shalom (peace) encompasses wholeness, flourishing, security, and right relationship &mdash; not mere absence of conflict but the positive presence of all that is good. Praying for Jerusalem&rsquo;s shalom was praying for the full expression of God&rsquo;s covenant purposes in and through his city. For the Christian, this prayer finds its ultimate target in the coming of God&rsquo;s kingdom, the peace that Christ made through his blood (Col 1:20), and the final city that is entirely at peace with God and within itself. The church that prays the Lord&rsquo;s Prayer is praying Psalm 122:6 in its fullest form: &ldquo;Your kingdom come.&rdquo;"
              },
              {
                color: ROSE, title: "5. Love for the Community and the House of God",
                body: "The final two verses (vv. 8&ndash;9) reveal the motivation for the psalmist&rsquo;s intercession: love for brothers and companions, and love for the house of God. These two loves are inseparable in the Psalms &mdash; love for God and love for his people constitute a single orientation of the heart. Spurgeon: &ldquo;The love of the house of God carries with it love for all who dwell in it.&rdquo; Matthew Henry observes that this is the New Testament standard: &ldquo;If any man love not his brother whom he has seen, how can he love God whom he has not seen?&rdquo; (1 John 4:20). The psalmist&rsquo;s prayer for Jerusalem is the pattern for the believer&rsquo;s love for the church: pray for it, seek its good, intercede for its peace, because it is the dwelling place of God and the community of one&rsquo;s brothers and companions."
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
            <p style={{ color: MUTED, marginBottom: "2rem" }}>A careful walk through each movement of Psalm 122 with the great commentators.</p>

            {[
              {
                ref: "Verses 1&ndash;2", heading: "Glad Arrival at the Gates",
                text: "&ldquo;I was glad when they said to me, &lsquo;Let us go to the house of the LORD!&rsquo; Our feet have been standing within your gates, O Jerusalem!&rdquo;",
                comment: "The psalm opens with a recollection of gladness triggered by an invitation. The joy is communal (&ldquo;they said to me&rdquo;) and the response is shared (&ldquo;our feet&rdquo;). Calvin notes that the psalmist records this gladness as a rebuke to the indifferent: &ldquo;He who finds no joy in the prospect of worship, or who needs to be dragged to it, has reason to examine whether God truly inhabits his heart.&rdquo; The sudden shift from &ldquo;I was glad&rdquo; to &ldquo;our feet have been standing&rdquo; is the literary surprise of arrival &mdash; the memory of anticipation and the reality of presence collapsed into two verses. Spurgeon: &ldquo;The pilgrim hardly knows whether to speak of having been or of now being at the sacred city &mdash; the joy is both past and present, and so he makes both one.&rdquo;"
              },
              {
                ref: "Verses 3&ndash;5", heading: "The City Compact Together &mdash; Unity and Justice",
                text: "&ldquo;Jerusalem &mdash; built as a city that is bound firmly together, to which the tribes go up, the tribes of the LORD&hellip; There thrones for judgment were set, the thrones of the house of David.&rdquo;",
                comment: "The poet surveys the city and finds two defining features: architectural compactness and institutional justice. The &ldquo;bound firmly together&rdquo; image (Hebrew <em>havera lah yahdav</em>) suggests a city without gaps &mdash; every stone serving its purpose, every part connected to every other. Matthew Henry applies this spiritually: &ldquo;The church of God is built compactly &mdash; every living stone in its place, fitted to its neighbors.&rdquo; The &ldquo;thrones of judgment of the house of David&rdquo; (v. 5) points to the Davidic covenant and the messianic expectation. The kings of Jerusalem were meant to be instruments of God&rsquo;s justice &mdash; a purpose fulfilled perfectly and finally in Jesus, the Son of David, who sits on the throne of all judgment (John 5:22)."
              },
              {
                ref: "Verses 6&ndash;7", heading: "Pray for the Peace of Jerusalem",
                text: "&ldquo;Pray for the peace of Jerusalem! &lsquo;May they be secure who love you! Peace be within your walls and security within your towers!&rsquo;&rdquo;",
                comment: "The command to pray is the psalm&rsquo;s climax. The Hebrew <em>shalu shalom Yerushalayim</em> is a wordplay &mdash; &ldquo;ask for the shalom of Shalem&rdquo; &mdash; using related words to create a near-incantatory summons. But the prayer is not magic; it is covenantal: asking God to be faithful to his promises about this city and its people. The promise of verse 6b &mdash; &ldquo;may they be secure who love you&rdquo; &mdash; connects personal flourishing to love for God&rsquo;s city. Those who love what God loves and pray for what God values will find their own security in his provision. Kidner: &ldquo;The promise attached to this prayer is not a bargaining chip but a revelation: to seek the good of God&rsquo;s city is already to be aligned with the source of all good.&rdquo;"
              },
              {
                ref: "Verses 8&ndash;9", heading: "For My Brothers&rsquo; Sake &mdash; Love as the Ground of Intercession",
                text: "&ldquo;For my brothers and companions&rsquo; sake I will say, &lsquo;Peace be within you!&rsquo; For the sake of the house of the LORD our God, I will seek your good.&rdquo;",
                comment: "The psalm ends by naming the motives of intercession: love for community (brothers and companions) and love for God (the house of the LORD our God). Spurgeon finds here a model for all Christian intercession: &ldquo;We pray for the church because we love our brethren who are in it, and because we love the God who is worshipped in it.&rdquo; Matthew Henry notes that &ldquo;seeking the good&rdquo; of the city is active, not merely wishful &mdash; the pilgrim commits to an ongoing posture of care and investment, not merely a tourist&rsquo;s visit. The New Testament fulfillment: Paul&rsquo;s agony for the churches (2 Cor 11:28 &mdash; &ldquo;my daily pressure of concern for all the churches&rdquo;) is Psalm 122:8&ndash;9 lived out in the apostolic mission."
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
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Psalm 122 shapes how we approach worship, love the church, and intercede for God&rsquo;s people.</p>

            {[
              {
                color: TEAL, title: "The Gladness Test: Are You Glad to Go?",
                body: "Psalm 122:1 is a diagnostic tool: &ldquo;I was glad when they said to me, &lsquo;Let us go to the house of the LORD.&rsquo;&rdquo; When you receive the Sunday invitation &mdash; from a family member, a friend, your own spiritual discipline &mdash; what is your immediate internal response? Is there gladness? Or is there reluctance, inconvenience, indifference? The psalmist&rsquo;s gladness was not manufactured &mdash; it arose naturally from a heart that loved what God loves. If gladness is absent, the remedy is not to force the feeling but to ask God to realign the heart&rsquo;s loves: &ldquo;Give me a heart that loves your house and seeks your face.&rdquo;",
                prayer: "Lord, restore to me the gladness of Psalm 122:1. When I hear the invitation to gather with your people, let me respond with joy, not duty. Let worship be a destination I am eager to reach, not an obligation I reluctantly fulfill. Make me someone whose feet stand gladly in your gates."
              },
              {
                color: GREEN, title: "Love Your Local Church as the City of God",
                body: "Psalm 122 is not primarily about Jerusalem as a geographic location but about Jerusalem as the dwelling of God and the gathering place of his people. The New Testament transfers this to the local church &mdash; the gathered assembly of believers in each city. To love the church as the psalmist loved Jerusalem is to: pray for it persistently (v. 6), seek its good actively (v. 9), celebrate its unity (v. 3), appreciate its role as a place of justice (v. 5). Many believers today consume church services without investing in the community. Psalm 122 calls us to something deeper: love for the church that prays for its peace and seeks its good even when it disappoints us.",
                prayer: "Lord, give me the love for your people that the psalmist had for Jerusalem. Let me pray for my church with the fervency of Psalm 122:6. Let me seek its good as in verse 9 &mdash; actively, persistently, for the sake of my brothers and companions and for the sake of your house."
              },
              {
                color: PURPLE, title: "Pray for the Peace of God&rsquo;s Kingdom",
                body: "The command of verse 6 has a New Covenant expansion: we pray for the peace of the Jerusalem to come, the city whose peace is the Prince of Peace himself. This means praying for the spread of the gospel, for the welfare of the worldwide church, for the coming of God&rsquo;s kingdom, for the return of Christ who will finally make all things at peace. Every &ldquo;your kingdom come&rdquo; in the Lord&rsquo;s Prayer is a Psalm 122:6 prayer. This should also shape our concern for the persecuted church: brothers and companions around the world who do not have peace within their walls. Praying for them is praying for the peace of Jerusalem in its global, New Covenant form.",
                prayer: "God of peace, hear our prayer for the peace of your city. We pray for the church under persecution &mdash; in every land where your people suffer for your name. We pray for the coming of your kingdom, when peace will be within every wall and security within every tower. May your kingdom come; may your will be done."
              },
              {
                color: GOLD, title: "The Joy of Arrival &mdash; Anticipating the New Jerusalem",
                body: "The pilgrim of Psalm 122 experiences the joy of arrival: &ldquo;Our feet have been standing within your gates, O Jerusalem!&rdquo; This is a taste of the joy that Revelation 21 describes as the final experience of God&rsquo;s people: arriving at last at the city they have been traveling toward their whole lives, finding that every promise was true and every sacrifice was worth it. The Songs of Ascent as a collection (Psalms 120&ndash;134) describe the journey of the people of God from distant lands to the city of God &mdash; and the New Testament casts the whole of Christian life in these terms: we are pilgrims and exiles (1 Pet 2:11) on the way to a city whose builder and maker is God (Heb 11:10). Every Sunday worship service is a rehearsal for that final arrival.",
                prayer: "Lord of the pilgrimage, keep my feet moving toward your city. On the days when the road is long and the destination feels far, remind me of what waits &mdash; the joy of standing in your gates, the wonder of finding that all you promised is true. Let me live now as one who is already arriving."
              },
            ].map(({ color, title, body, prayer }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                <div style={{ background: `rgba(${color === TEAL ? "13,148,136" : color === GREEN ? "58,125,86" : color === PURPLE ? "107,79,187" : "217,119,6"},0.06)`, border: `1px solid rgba(${color === TEAL ? "13,148,136" : color === GREEN ? "58,125,86" : color === PURPLE ? "107,79,187" : "217,119,6"},0.2)`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "0.4rem" }}>Prayer</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(58,125,86,0.06))", border: `1px solid rgba(13,148,136,0.2)`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "1rem" }}>More Songs of Ascent &amp; Zion Psalms</h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {[
                  { label: "Psalm 48 Guide", href: "/psalm-48-guide" },
                  { label: "Psalm 76 Guide", href: "/psalm-76-guide" },
                  { label: "Psalm 87 Guide", href: "/psalm-87-guide" },
                  { label: "Psalm 121 Guide", href: "/psalm-121-guide" },
                  { label: "Psalms Overview", href: "/psalms-guide" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.25)", borderRadius: 6, padding: "0.5rem 1rem", fontSize: "0.82rem", color: TEAL, textDecoration: "none" }}>{label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
