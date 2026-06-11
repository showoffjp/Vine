"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "theology", label: "Theology of Worship" },
  { id: "principles", label: "Regulative vs. Normative" },
  { id: "elements", label: "Elements of Worship" },
  { id: "music", label: "Music & Song" },
  { id: "debates", label: "Contemporary Debates" },
  { id: "private", label: "Private Worship" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_ITEMS = [
  { id: "th1", title: "Worship Is the Chief End of Man", ref: "Psalm 29:2; Revelation 4:11; Westminster Catechism",
    body: "The Westminster Shorter Catechism: 'Man's chief end is to glorify God, and to enjoy him forever.' This is not merely an answer to a catechism question — it is the organizing principle of human existence. Worship is not one activity among many; it is the fundamental orientation of created personhood toward the Creator. C.S. Lewis: 'A man can no more diminish God's glory by refusing to worship him than a lunatic can put out the sun by scrawling the word darkness on the walls of his cell.'" },
  { id: "th2", title: "Worship in Spirit and Truth", ref: "John 4:23-24",
    body: "The Samaritan woman asks about the right place to worship (her mountain or Jerusalem). Jesus's answer is programmatic: the question of location is superseded — 'true worshipers will worship the Father in the Spirit and in truth' (John 4:23). Two dimensions: (1) 'In Spirit' — worship animated and enabled by the Holy Spirit, not mere external performance; (2) 'In truth' — worship shaped by the truth of who God is and what he has done, not by sentiment or entertainment. Both are essential; neither alone is sufficient." },
  { id: "th3", title: "The Sacrifice of Praise", ref: "Hebrews 13:15; Romans 12:1",
    body: "'Through Jesus, therefore, let us continually offer to God a sacrifice of praise — the fruit of lips that openly profess his name' (Hebrews 13:15). The sacrificial language is deliberate: in the new covenant, worship is offered through Christ as our high priest. Romans 12:1 — 'offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship.' Worship is not just what happens on Sunday — it is the posture of a whole life oriented toward God." },
  { id: "th4", title: "The Trinitarian Shape of Worship", ref: "Ephesians 2:18; 2 Corinthians 13:14",
    body: "Christian worship is inherently Trinitarian: we worship the Father (the source of all worship), through the Son (the mediator and high priest through whom we have access), by the Spirit (who enables our response and intercedes within us). Ephesians 2:18 — 'through him [Christ] we both have access to the Father by one Spirit.' The doxology, the benediction, the structure of prayer — all echo this Trinitarian shape. Worship that loses one person of the Trinity becomes distorted." },
];

const PRINCIPLES_DATA = [
  { color: BLUE, principle: "The Regulative Principle of Worship (RPW)", body: "Developed by the Reformed tradition, the RPW states: we are to worship God only in the ways he has commanded in Scripture. What is not commanded is forbidden. The classic expression: 'The acceptable way of worshipping the true God is instituted by himself, and so limited by his own revealed will, that he may not be worshipped according to the imaginations and devices of men' (Westminster Confession 21.1). This principle drove the Reformed churches to strip worship down to what is explicitly commanded: Scripture reading, preaching, prayer, Psalms/hymns, baptism, and the Lord's Supper. Incense, images, many ceremonies, and priestly vestments were removed as 'human inventions.'" },
  { color: TEAL, principle: "The Normative Principle of Worship", body: "Held by Lutherans, Anglicans, and many evangelicals, the normative principle states: whatever is not forbidden in Scripture is permissible if it serves worship. This allows greater flexibility in worship forms, music, liturgical elements, and ceremonies that are not commanded but neither prohibited. Defenders argue that the strict RPW reads too much legislation into silence and leads to unnecessary fragmentation. Critics respond that it leaves the church vulnerable to cultural accommodation and the worship of God on humanity's terms." },
  { color: GOLD, principle: "The Dialogue of Worship", body: "Beyond the debate about what is permitted, the deeper structural principle is that Christian worship is a dialogue — God speaks, we respond. The shape: God's Word (Scripture reading and proclamation) → Our response (prayer, praise, confession). God's invitation (gospel) → Our reception (Lord's Supper, baptism). This dialogical structure helps evaluate worship elements: is this an element of God speaking to us, or us responding to him? It explains why the sermon is central — it is God speaking — and why both sung praise and corporate prayer are essential — they are our response." },
  { color: GREEN, principle: "The Priority of Edification", body: "1 Corinthians 14:26 — 'Everything done for the strengthening of the church.' Paul's governing criterion for what happens in gathered worship is edification — the building up of the congregation. This is the test Paul applies to tongues, prophecy, and all spiritual gifts in corporate worship. Worship that is merely experientially stimulating to the individual but does not build up the community fails Paul's test. The gathering is not primarily for my personal encounter with God — it is for mutual edification, which leads to corporate glorification of God." },
];

const ELEMENTS_DATA = [
  { color: PURPLE, element: "Scripture Reading", body: "'Until I come, devote yourself to the public reading of Scripture, to preaching and to teaching' (1 Timothy 4:13). The public reading of God's word is itself an act of worship — not just a prelude to it. The Reformers restored extensive Scripture reading, which had been reduced in medieval practice. Many churches read from a lectionary covering OT, NT, Psalms, and Gospel portions systematically. The word of God in corporate reading nourishes the community and shapes its imagination." },
  { color: BLUE, element: "Preaching", body: "Preaching occupies the central place in Protestant worship because it is God's speech through human lips. Romans 10:17 — 'faith comes from hearing the message, and the message is heard through the word about Christ.' The Reformed tradition especially emphasizes the centrality of preaching as the primary means of grace in gathered worship. Not lecture, not commentary, not motivational talk — proclamation of the living word of the living God." },
  { color: TEAL, element: "Prayer", body: "Corporate prayer — confession, adoration, thanksgiving, supplication, intercession — is the community's response to the God who has spoken. The Lord's Prayer is both a model and a text for corporate prayer. Many liturgical traditions have developed collects, the General Confession, and responsive prayers that shape the community's prayer life. Matthew 18:19-20 — 'Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them.'" },
  { color: GOLD, element: "The Lord's Supper", body: "The Supper is an act of worship in which the community remembers, proclaims, and participates in Christ's death until he comes (1 Corinthians 11:26). Frequency varies: Calvin wanted weekly communion (overruled by the Genevan council), most Reformed churches moved to quarterly, many churches today recover weekly practice. The Supper is not merely memorial (Zwingli) but a genuine means of grace in which Christ nourishes his people spiritually." },
  { color: GREEN, element: "Baptism", body: "Baptism is the initiatory rite of Christian worship — the public sign and seal of entrance into the covenant community. As a corporate act of worship, baptism involves the whole congregation affirming their own covenant and welcoming the new member. The mode (immersion/sprinkling) and subjects (believers only vs. believers and infants) are disputed, but the worshipful, communal significance is shared." },
  { color: RED, element: "Offering", body: "'Do not forget to do good and to share with others, for with such sacrifices God is pleased' (Hebrews 13:16). The offering is an act of worship — the community returning to God a portion of what he has given them, acknowledging that all belongs to him. It is also an act of care for the poor and the support of ministry. Many churches have moved to digital giving but retain the act of giving as a physical participation in the worship service, including for children." },
];

const MUSIC_ITEMS = [
  { id: "mu1", title: "The Biblical Warrant for Music in Worship", ref: "Psalm 33:1-3; Colossians 3:16; Ephesians 5:18-19",
    body: "Music is not a merely pragmatic means of crowd engagement — it has deep biblical roots. The Psalter is a songbook — 150 songs for corporate and private worship. Colossians 3:16 — 'Let the word of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit.' Music embeds theology in the affections in a way that pure prose cannot. Jonathan Edwards: music is uniquely suited to carry divine truths into the heart because it engages both the intellect and the affections simultaneously." },
  { id: "mu2", title: "The Psalms in Christian Worship", ref: "Psalm 119:54; Ephesians 5:19; Colossians 3:16",
    body: "The Psalms have been the backbone of Christian worship from the beginning. The early church sang Psalms. The Reformers restored Psalmody — Calvin produced a metrical psalter for Geneva. 'Exclusive Psalmody' is held by some Reformed traditions (Presbyterian Church of Scotland historically, Free Presbyterians): only Psalms may be sung in worship. Most evangelicals hold that the Psalms should have a prominent place alongside other biblically grounded hymns and songs. The danger of abandoning the Psalms: losing the lament tradition, the full emotional range of corporate prayer, and the explicitly Christ-anticipating content." },
  { id: "mu3", title: "What Makes Worship Music Good?", ref: "Psalm 33:3; Amos 5:23",
    body: "Criteria for evaluating worship music: (1) Theological content — does it accurately represent God, the gospel, and Scripture? Songs with thin or false theology are harmful regardless of how singable they are; (2) Congregational singability — worship songs are not concert pieces; they should be singable by ordinary people; (3) Emotional authenticity — does the music match the textual content? Triumphant music with lament texts, or mournful music with joyful texts, creates cognitive dissonance; (4) Breadth — does the congregation's repertoire cover the full range of biblical themes (lament, confession, adoration, petition) or only a narrow slice?" },
  { id: "mu4", title: "Instruments in Worship", ref: "Psalm 150; 1 Chronicles 15:16",
    body: "Psalm 150 lists trumpet, harp, lyre, timbrel, strings, pipe, and cymbals — a comprehensive ancient orchestra. The Reformed tradition has debated instruments (the RPW's strictest form excluded instruments as 'uncommanded'); the Reformed churches historically often excluded organs; many recover robust instrumental music today. The question is not whether instruments are permissible but whether they serve congregational singing and the proclamation of the word, or whether they shift the focus to performance and entertainment." },
];

const DEBATES_DATA = [
  { color: PURPLE, title: "Contemporary vs. Traditional Worship", body: "Perhaps no debate divides local churches more consistently. Traditional worship: rooted in centuries-old hymns, liturgy, and musical forms; values continuity with the historical church; concerned that contemporary forms are driven by cultural accommodation rather than Scripture. Contemporary worship: argues that musical forms are culturally relative and should be accessible to the present generation; values emotional engagement and accessibility; at its best, produces genuine community. At its worst, each can become museum (for tradition) or entertainment (for contemporary). The question is not style but substance: who is being worshiped, and on whose terms?" },
  { color: TEAL, title: "Liturgy and Spontaneity", body: "Liturgical worship (set prayers, fixed order, common texts) values: corporate unity (everyone prays the same prayer), continuity with the historical church, and formation through repeated patterns. Spontaneous worship (extemporaneous prayer, flexible order) values: Spirit-led freedom, authenticity, and responsiveness to the congregation's state. The best case for liturgy: it forms people below the level of choice; over years, the words become the worshiper's own. The best case for spontaneity: worship that is fully scripted can become rote, disconnected from the Spirit's present work. Many churches find both values in different elements of a service." },
  { color: GOLD, title: "Charismatic Worship Practices", body: "Tongues, prophecy, and healing in corporate worship are practiced in Pentecostal and charismatic churches. The debate: cessationists (most Reformed, some Baptist) hold that these 'sign gifts' ceased with the apostolic age; continuationists hold that all gifts remain available. Within continuationism, there is further debate about order and accountability: Paul's strict regulation of tongues and prophecy in 1 Corinthians 14 (by turns, interpreted, submitted to judgment) is rarely followed in practice by many charismatic congregations. All traditions agree: worship is not validated by emotional intensity." },
  { color: RED, title: "The Seeker Service Model", body: "Popularized by Willow Creek in the 1980s, the seeker service model designs the gathering primarily for unchurched visitors, with familiar musical styles, cultural references, and avoidance of traditional 'church language.' Critics: Paul's description of corporate worship in 1 Corinthians 14 suggests unbelievers may be present and convicted, but the service is ordered for believers; corporate worship that is primarily entertainment for outsiders may fail both outsiders and insiders. Willow Creek's own research (REVEAL) found that services oriented primarily toward seekers produced consumerism rather than mature disciples. Many have moved toward a 'gathered church' model." },
];

const PRIVATE_POINTS = [
  { color: BLUE, title: "Daily Devotional Life", body: "Private worship — Scripture, prayer, meditation, journaling — is the individual expression of what is celebrated corporately. 'But when you pray, go into your room, close the door and pray to your Father, who is unseen' (Matthew 6:6). The quiet time is not the central Christian practice (that is the gathered assembly) but it feeds the gathered assembly and forms the individual worshiper." },
  { color: GREEN, title: "Psalm-Praying and Lectio Divina", body: "Two ancient practices for private worship: (1) Praying the Psalms — taking a Psalm as your own prayer, speaking its words to God even when they are not your feelings yet; (2) Lectio Divina (sacred reading) — a contemplative approach to Scripture: Read (read slowly), Meditate (what word/phrase arrests you?), Pray (turn it to prayer), Contemplate (rest in God's presence). Both are means of letting Scripture shape private prayer rather than merely reading it as information." },
  { color: GOLD, title: "Sabbath as Worship", body: "'Remember the Sabbath day by keeping it holy' (Exodus 20:8). The Sabbath principle — one day of rest and worship in seven — is the creation ordinance embedded in the Fourth Commandment. Whether this is Saturday (Seventh-day Adventists, some others) or Sunday ('the Lord's Day,' the day of resurrection) is debated. What is clear: a rhythm of ceasing work, gathering for worship, and resting is God's design for human flourishing. The Christian who never Sabbaths is working against the grain of creation." },
  { color: TEAL, title: "Family Worship", body: "The home as the first place of worship is a consistent biblical theme. Deuteronomy 6:6-7 — 'Impress them on your children. Talk about them when you sit at home and when you walk along the road.' Family worship — brief Scripture, prayer, and perhaps song, especially at meals or bedtime — is one of the most powerful formational practices available to Christian families and one of the least commonly practiced." },
];

const VIDEOS = [
  { videoId: "v43bQbAdO3Y", title: "What Is Worship? — John Piper" },
  { videoId: "fh4nUPFGFU4", title: "Spirit and Truth Worship — Tim Keller" },
  { videoId: "WpBl3a6_XKA", title: "Music in Worship — Keith and Kristyn Getty" },
  { videoId: "g2nfAkl5E5w", title: "The Theology of Corporate Worship — Ligon Duncan" },
  { videoId: "8JqT-cLnfRg", title: "Contemporary vs. Traditional Worship — D.A. Carson" },
];

export default function WorshipTheologyGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_wship_tab", "overview");
  const [theolOpen, setTheolOpen] = usePersistedState<string>("vine_wship_theol", "");
  const [musicOpen, setMusicOpen] = usePersistedState<string>("vine_wship_music", "");
  const [journal, setJournal] = usePersistedState<string>("vine_wship_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(212,119,6,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  const cards4 = (items: { color: string; title?: string; principle?: string; element?: string; body: string }[]) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((p, i) => (
        <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
          <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title ?? p.principle ?? p.element}</h3>
          <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(212,119,6,0.12)", border: `1px solid rgba(212,119,6,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · WORSHIP
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            A Theology of Worship
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Worship is the chief end of human existence and the heart of the Christian life. A comprehensive guide to the biblical theology of worship, the principles that govern gathered worship, music, liturgy, and how to worship in spirit and truth.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? "rgba(212,119,6,0.12)" : "transparent", color: tab === t.id ? GOLD : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(212,119,6,0.07)", border: `1px solid rgba(212,119,6,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Why Worship?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                C.S. Lewis observed that he initially found God's demand for praise off-putting — it seemed to reduce the Creator to the vanity of someone who demands compliments. But then he realized: praise is the natural response to value recognized. We praise beauty, excellence, and goodness spontaneously. If God is infinitely good, beautiful, and worthy, then worship is not something demanded against our nature — it is the perfection of our nature.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                Augustine: <em>"You have made us for yourself, O Lord, and our hearts are restless until they rest in you."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: GOLD, icon: "🙌", title: "Chief End", body: "Worship is the purpose of human existence — the chief end toward which all of life is oriented." },
                { color: BLUE, icon: "✝️", title: "Through Christ", body: "We worship the Father through the Son as mediating high priest, by the Holy Spirit who enables our praise." },
                { color: TEAL, icon: "🏛️", title: "Corporate & Private", body: "Gathered corporate worship is the center; private worship feeds it. Both are essential; neither replaces the other." },
                { color: GREEN, icon: "📖", title: "Formed by Scripture", body: "True worship is shaped by the truth of God's word — not by sentiment, entertainment, or cultural preference." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "theology" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Theology of Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Why does worship matter so much? What makes Christian worship distinctively Christian? And what does Jesus mean when he says God seeks worshipers who worship in Spirit and truth?</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(THEOLOGY_ITEMS, theolOpen, setTheolOpen)}</div>
          </div>
        )}

        {tab === "principles" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Principles for Governing Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>How do we know what belongs in corporate worship? The Regulative Principle (RPW), the Normative Principle, and other frameworks for evaluating worship practice.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(PRINCIPLES_DATA)}</div>
          </div>
        )}

        {tab === "elements" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Elements of Gathered Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The standard elements of Christian worship — found across nearly all traditions, though with different emphases and forms.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(ELEMENTS_DATA)}</div>
          </div>
        )}

        {tab === "music" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Music and Song in Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Music is one of the most contested and most formative elements of Christian worship. The biblical case for music, the role of the Psalms, criteria for evaluating worship music, and the place of instruments.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(MUSIC_ITEMS, musicOpen, setMusicOpen)}</div>
          </div>
        )}

        {tab === "debates" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Contemporary Debates in Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Four of the most active debates in the contemporary church about how to worship rightly — with a sober attempt to represent each position fairly.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(DEBATES_DATA)}</div>
          </div>
        )}

        {tab === "private" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Private and Family Worship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Corporate worship is the center; but the individual and family expressions of worship throughout the week are what form the worshiper who enters the assembly on Sunday.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(PRIVATE_POINTS)}</div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>What does your current experience of corporate worship reveal about your theology of worship? Where is your private worship thin? What one change in your approach to worship would bring you closer to worshiping in spirit and truth?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the theology and practice of Christian worship.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
