"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TABS = [
  { id: "what", label: "What Worship Is" },
  { id: "regulative", label: "Regulative vs. Normative" },
  { id: "liturgy", label: "Liturgy & Ritual" },
  { id: "word-sacrament", label: "Word & Sacrament" },
  { id: "contemporary", label: "Contemporary vs. Traditional" },
  { id: "videos", label: "Videos" },
];

const WHAT_CARDS = [
  {
    title: "The Hebrew Words for Worship",
    body: "The Old Testament uses two primary words for worship. <em>Shachah</em> means to bow down, to prostrate oneself &mdash; the posture of one who acknowledges a superior. It is used of Abraham bowing to the Hittites (Gen 23:7), of Israel before God (Ex 34:8), of the nations before the LORD (Ps 86:9). <em>Abad</em> means to serve or labor &mdash; the same word used for the enslaved labor of Israel in Egypt and for the priestly service in the tabernacle. Together they define worship as both posture (bowing, humility, acknowledgment) and activity (service, labor, dedication). Worship is not primarily a feeling or an aesthetic experience; it is an orientation and an act.",
  },
  {
    title: "The Greek Words for Worship",
    body: "The New Testament draws on two main Greek words. <em>Proskuneo</em> &mdash; to kiss toward, to bow down &mdash; is the word used when the Magi fell down and worshipped the child (Matt 2:11), when Jesus was worshipped after the resurrection (Matt 28:17), and in Revelation&rsquo;s throne-room scenes (Rev 4:10; 5:14; 19:4). It denotes the act of reverence and submission. <em>Latreia</em> &mdash; service, ministry, worship &mdash; is used in Romans 12:1 (&ldquo;your spiritual worship&rdquo;) and Hebrews 9:1 (&ldquo;regulations for worship&rdquo;). Together they show that worship is simultaneously intimate (kissing toward) and comprehensive (total service of life).",
  },
  {
    title: "Worship as the Total Orientation of Life &mdash; Romans 12:1",
    body: "Paul&rsquo;s great appeal in Romans 12:1 &mdash; &ldquo;present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship&rdquo; &mdash; redefines the scope of worship. The Greek <em>logiken latreian</em> (&ldquo;spiritual worship&rdquo; or &ldquo;reasonable service&rdquo;) signals that the whole life, offered to God in daily obedience, is worship. The body &mdash; not just the soul, not just the singing voice on Sunday &mdash; is what is presented. This means the Christian&rsquo;s entire existence is potentially worshipful: work, rest, speech, money, relationships. The gathered Sunday service is the concentrated expression of a life that is itself continuous worship. Worship is not an event you attend; it is a posture you inhabit.",
  },
  {
    title: "Corporate Gathered Worship &mdash; John 4:23&ndash;24",
    body: "Jesus&rsquo;s words to the Samaritan woman (John 4:23&ndash;24) remain the deepest New Testament definition of corporate worship: &ldquo;The hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him. God is spirit, and those who worship him must worship in spirit and truth.&rdquo; The word &ldquo;must&rdquo; (Greek <em>dei</em>) is a necessity of nature. Worship in spirit means the whole inner person &mdash; desire, attention, affection, will &mdash; is genuinely engaged, not merely the outward form. Worship in truth means it is shaped by who God actually is, revealed in Scripture and supremely in Christ &mdash; not a projection of who we wish him to be.",
  },
  {
    title: "Worship Is Not Primarily a Feeling",
    body: "One of the most pervasive confusions in contemporary Christianity is the identification of worship with an emotional experience &mdash; typically produced by music. The biblical testimony consistently treats worship as a posture of the whole person toward God, not a subjective inner state. Feelings of awe, joy, gratitude, and love may accompany genuine worship, and are not to be despised; but they are consequences of worship rather than its definition. A congregation that measures its worship by how emotionally moved it felt has confused the weather for the sun. Harold Best, in <em>Unceasing Worship</em>, argues that we are always worshipping something; the question is never whether but whom. Authentic Christian worship is the offering of the whole self to the one true God, regardless of what it feels like.",
  },
];

const REGULATIVE_CARDS = [
  {
    title: "The Regulative Principle of Worship (Reformed)",
    body: "The Regulative Principle holds that the church may only worship God in ways he has explicitly commanded in Scripture. If an element of worship is not commanded (or clearly implied by good and necessary consequence), it is forbidden. This principle emerged from the Reformation, particularly from Calvin and the Puritans, as a response to what they saw as the accumulated human inventions of medieval Catholic worship. The Westminster Confession of Faith (1647) gives the classic formulation: &ldquo;The acceptable way of worshipping the true God is instituted by Himself, and so limited by His own revealed will, that He may not be worshipped according to the imaginations and devices of men, or the suggestions of Satan, under any visible representation, or any other way not prescribed in the Holy Scripture.&rdquo;",
  },
  {
    title: "The Normative Principle (Lutheran, Anglican, Many Others)",
    body: "The Normative Principle holds that the church may worship in any way not explicitly forbidden by Scripture. This approach, characteristic of Lutheran, Anglican, and many evangelical traditions, takes the New Testament&rsquo;s relative silence on specific worship forms as permission rather than prohibition. If Scripture does not forbid an element, the church has freedom to include it. This principle allows much broader liturgical flexibility: vestments, candles, set prayers, instrumental music, the church calendar, processionals &mdash; none of these is forbidden by Scripture, so all may be used. The normative principle values continuity with Christian tradition and pastoral wisdom alongside biblical authority.",
  },
  {
    title: "How This Plays Out: Instruments, Vestments, and Prayers",
    body: "The regulative principle has historically produced stark differences in practice. The Puritans removed organs from churches on the grounds that instruments in worship are not commanded in the New Testament (the Old Testament use of instruments was Levitical and ceremonial, they argued, and therefore abrogated). They rejected set prayers (the Lord&rsquo;s Prayer as a template, not a text to recite), vestments, and most of the church calendar. The normative principle traditions retained all of these. Today many Reformed churches have relaxed the strict application of the regulative principle, accepting instruments and broader musical forms, while still resisting elements they believe contradict Scripture. The debate continues in Presbyterian and Reformed circles, especially around contemporary worship styles.",
  },
  {
    title: "Practical Application Today",
    body: "The regulative vs. normative debate is not merely historical. It shapes contemporary questions: May a church use drama in worship? Interpretive dance? Video clips? Candles and incense? A band with drums? Liturgical seasons not mentioned in the New Testament? Those who apply the regulative principle strictly will answer most of these with caution or no; those who apply the normative principle will evaluate each on its pastoral merits and biblical consistency. Wise churches in both traditions seek what the regulative principle rightly seeks &mdash; worship shaped and governed by Scripture &mdash; while acknowledging that wisdom, contextual sensitivity, and pastoral judgment are not opposed to that goal but essential to it.",
  },
];

const LITURGY_CARDS = [
  {
    title: "The Word Liturgy &mdash; Leitourgia",
    body: "The word liturgy comes from the Greek <em>leitourgia</em> &mdash; literally, the work of the people (<em>laos</em> + <em>ergon</em>). In classical Athens it referred to public service performed by citizens for the community. In the Greek Old Testament (Septuagint) it was used for the priestly service of the temple (Num 8:22; 2 Chr 31:2). In the New Testament it is used for Paul&rsquo;s missionary service (Rom 15:16), for the financial gift of the Philippians (Phil 2:25), and for Christ&rsquo;s high-priestly ministry (Heb 8:2). Christian liturgy is therefore not passive attendance at a performance; it is the people&rsquo;s active, priestly service before God. The congregation is not an audience; it is a liturgical assembly.",
  },
  {
    title: "All Worship Has a Liturgy",
    body: "Every gathered Christian service has a liturgy &mdash; an order, a structure, a sequence of acts that shapes what the congregation does and experiences. The question is not whether a church has a liturgy but whether its liturgy is intentional, theologically rich, and pastorally wise. A contemporary evangelical service with a three-song set, announcements, offering, sermon, and response song has a liturgy &mdash; it is simply an implicit and largely unexamined one. An Anglo-Catholic service with introit, collect, Epistle, Gospel, sermon, creed, eucharistic prayer, and benediction has an explicit liturgy shaped by fifteen centuries of theological reflection. The argument for explicit liturgy is not tradition for its own sake but the claim that form shapes content, and that the forms we inhabit in worship form us.",
  },
  {
    title: "The Fourfold Pattern of Worship",
    body: "Many liturgical scholars identify a fourfold pattern that appears across diverse Christian traditions and arguably in the New Testament itself: (1) Gathering &mdash; the people assemble, are welcomed, confess, and are absolved; (2) Word &mdash; Scripture is read and proclaimed; (3) Table &mdash; the Lord&rsquo;s Supper is celebrated; (4) Sending &mdash; the people are blessed and commissioned to serve in the world. This pattern reflects the movement of the gospel itself: we are called, we hear, we receive, we are sent. It appears in Justin Martyr&rsquo;s description of Sunday worship (c. AD 155), in the ancient liturgies of East and West, and in the theologically reflective contemporary services of many traditions.",
  },
  {
    title: "The Church Calendar as Formative Structure",
    body: "The church calendar &mdash; Advent, Christmas, Epiphany, Lent, Holy Week, Easter, Pentecost, Ordinary Time &mdash; is a pedagogical tool: it tells the whole story of redemption across the year, shaping the imagination of the congregation through repetition and embodiment. Advent forms the posture of waiting and longing; Lent forms the practice of repentance and self-examination; Easter forms the conviction of resurrection as the ground of all Christian existence. Alexander Schmemann argued in <em>For the Life of the World</em> that the Eucharist is the sacrament of the world &mdash; the place where the church enters the time of the kingdom. The calendar places every Sunday within that larger story, resisting the fragmentation of faith into isolated moments.",
  },
  {
    title: "Why Ritual Is Not Deadness",
    body: "The Protestant suspicion of ritual often rests on a confusion: ritual is identified with formalism, and formalism with spiritual deadness, and therefore ritual is treated as the enemy of life. But ritual is embodied theology: it enacts in repeated, physical form what the community believes. The Jewish Passover seder is not empty ritual; it is the annual re-enactment of the Exodus that forms the identity of a people. The Lord&rsquo;s Supper is not empty ritual; it is the enacted gospel. Baptism is not empty ritual; it is dying and rising with Christ in water. The repetition of ritual is not deadness; it is formation. James K.A. Smith, drawing on Augustine, argues in <em>Desiring the Kingdom</em> that we are liturgical animals &mdash; formed by the practices we inhabit, not merely by the ideas we affirm.",
  },
];

const WORD_SACRAMENT_CARDS = [
  {
    title: "The Marks of the True Church",
    body: "The Reformers, particularly Calvin and the Lutheran confessions, identified the true church by two marks: the right preaching of the Word and the right administration of the sacraments. These two marks belong together and mutually define each other. A gathering that preaches the Word without administering sacraments is incomplete; a gathering that administers sacraments without preaching the Word has fallen into superstition. The Nicene Creed does not mention the sermon; the Reformed confessions insist on it alongside the sacraments. This pairing is not an accident of history but a theological conviction about how God has chosen to address his people &mdash; through the proclaimed and enacted Word.",
  },
  {
    title: "Mutual Reinforcement &mdash; Word and Sacrament Together",
    body: "Calvin&rsquo;s famous formulation is that the Word explains what the sacrament enacts, and the sacrament embodies what the Word proclaims. The sermon on atonement is given flesh in the broken bread and poured cup. The baptismal act of washing embodies the proclaimed Word of forgiveness and new birth. Neither is self-sufficient. Augustine called sacraments &ldquo;visible words&rdquo; &mdash; the gospel made tangible, addressed not just to the intellect but to the senses of taste, touch, sight, and smell. The Word, for its part, guards the sacrament from devolving into superstition by explaining what is happening and calling for faith. Together they address the whole person: mind, will, body, and sense.",
  },
  {
    title: "The Danger of Word Without Sacrament",
    body: "A church life dominated by preaching without regular sacramental practice risks what might be called liturgical intellectualism: faith becomes primarily about holding correct beliefs rather than about being formed by enacted patterns of death and resurrection. The preaching-only church tends to produce consumers of doctrinal content rather than participants in a sacramental community. It also tends toward individualism &mdash; the sermon addresses me as an individual; the sacrament constitutes us as a body. Calvin argued that the Lord&rsquo;s Supper should be celebrated every Sunday, precisely because the congregation needs not just to hear about Christ but to feed on him weekly. His wish was denied by the Geneva city council, and the Reformed tradition has lived with quarterly or monthly Communion ever since.",
  },
  {
    title: "The Danger of Sacrament Without Word",
    body: "Conversely, sacramental practice without robust preaching of the Word slides into superstition: the rite itself is thought to convey grace regardless of faith or understanding. Ex opere operato &mdash; grace conveyed by the act itself, apart from the faith of the recipient &mdash; was precisely what the Reformers rejected in late medieval Catholic practice. The sacrament without the Word can become a magical act, a ritual performed for its own sake, disconnected from the gospel it is meant to embody and proclaim. Luther insisted that what made baptism effective was not the water but the Word of God attached to the water: &ldquo;without the Word of God the water is plain water and no baptism, but with the Word of God it is a baptism.&rdquo;",
  },
];

const CONTEMPORARY_CARDS = [
  {
    title: "The Worship Wars of the 1990s and Their Legacy",
    body: "The so-called worship wars of the 1980s and 1990s divided many evangelical churches over the introduction of contemporary music &mdash; praise bands, amplified instruments, screens replacing hymnals, informal style &mdash; alongside or in place of traditional hymns and organs. The conflict was often bitter and produced church splits, demographic segmentation (contemporary services vs. traditional services), and a generation of churchgoers who chose a congregation primarily on the basis of its musical style. The wars have largely cooled, but their legacy persists: many churches now offer multiple service styles; many pastors are wary of the issue; and the underlying theological questions &mdash; about the purpose of worship music, the authority of tradition, and the nature of formation &mdash; have rarely been resolved.",
  },
  {
    title: "What Liturgical Worship Offers",
    body: "Liturgical worship &mdash; structured around creed, confession, fixed prayers, the church calendar, and the regular celebration of the Lord&rsquo;s Supper &mdash; offers the gifts of continuity, density, and participation. It connects the congregation to the whole church across time (praying the same prayers as Christians in every century) and across space (sharing the same calendar and texts with Christians worldwide). Its structures are catechetical: the creed teaches doctrine; the confession teaches repentance and grace; the benediction teaches blessing and sending. Because the liturgy has its own content, it protects against the dominance of the worship leader&rsquo;s personality or the pastor&rsquo;s hobby horses. The congregation participates actively in a form larger than any individual.",
  },
  {
    title: "What Contemporary Worship Offers",
    body: "Contemporary worship &mdash; with its emphasis on accessible musical idiom, emotional expressiveness, and informal relational atmosphere &mdash; offers genuine gifts when practiced with theological intentionality. It can lower barriers for those unfamiliar with traditional Christian culture. It can harness the power of music to engage the emotions in ways that deepen rather than replace conviction. At its best, contemporary worship is not theologically shallow but theologically clear in the vernacular of the culture. The Wesleyan revival, the Salvation Army, the Pentecostal movement, and many contemporary renewal movements have demonstrated that informal, emotionally engaged worship can produce deep discipleship and global mission. The question is not the style but the substance it carries.",
  },
  {
    title: "The Danger of Consumerism in Worship",
    body: "The most serious theological problem with the contemporary worship movement is not its musical style but its tendency to accommodate a consumer logic: the congregation as audience, the worship team as performers, and the test of a good service as whether people felt moved or enjoyed it. When people choose a church primarily because of the music, worship has become a product. Harold Best, in <em>Unceasing Worship</em>, argues that we are always worshipping &mdash; always pouring out ourselves toward something &mdash; and that consumer-driven worship trains us to worship our own preferences. The antidote is not to return to a particular musical style but to form congregations who understand that they come to worship God, not to experience a service.",
  },
  {
    title: "The Theology of Congregational Singing &mdash; Ephesians 5:19 and Colossians 3:16",
    body: "Paul&rsquo;s two great texts on congregational singing &mdash; Ephesians 5:19 (&ldquo;addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart&rdquo;) and Colossians 3:16 (&ldquo;teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God&rdquo;) &mdash; reveal a thick theology of congregational song. Singing is simultaneously horizontal (addressing one another, teaching, admonishing) and vertical (making melody to the Lord, with thankfulness to God). It is pedagogical: the songs teach doctrine. It is formational: it shapes the community&rsquo;s affections. It is embodied: the whole body participates. Both texts ground singing in the Word of Christ dwelling richly in the community &mdash; the songs are not free-floating spiritual expressions but are anchored in revealed truth.",
  },
];

export default function ChristianWorshipTheologyPage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("what");

  useEffect(() => { setLoaded(true); }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: TEAL + "33", color: TEAL, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Theology &amp; Worship</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Worship Theology
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Worship is not a warm-up before the sermon &mdash; it is the central act of the gathered church and the orientation of the whole Christian life. This guide surveys what Scripture says worship actually is, how the church has structured it, and how the debates over form and style touch the deepest questions of theology.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? TEAL : BORDER,
              background: tab === t.id ? TEAL + "22" : "transparent",
              color: tab === t.id ? TEAL : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {tab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {WHAT_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "regulative" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {REGULATIVE_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "liturgy" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {LITURGY_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "word-sacrament" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {WORD_SACRAMENT_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "contemporary" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CONTEMPORARY_CARDS.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.5rem" }}>Videos on Worship Theology</h2>
            <VideoEmbed videoId="8-pMRgLNJxk" title="Tim Keller on Worship" />
            <VideoEmbed videoId="P2SNAWNb_5E" title="NT Wright on Liturgy and the Church" />
            <VideoEmbed videoId="rFcpTkE3gv0" title="Worship Theology &mdash; What It Means" />
          </div>
        )}

      </main>
    </div>
  );
}
