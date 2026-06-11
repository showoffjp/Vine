"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SBEntry = { id: string; date: string; obstacle: string; practice: string; renewal: string };

const theology = [
  {
    title: "The Fourth Commandment &mdash; Sabbath in Creation and Sinai",
    verse: "Exodus 20:8-11; Genesis 2:2-3",
    body: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a Sabbath to the Lord your God. The Fourth Commandment roots the Sabbath in creation itself: God rested on the seventh day and blessed it and made it holy. The Sinai command does not invent the Sabbath; it restores a rhythm already woven into the fabric of the world before the fall. The creation-basis of Sabbath is significant: it means the Sabbath is not a peculiarly Jewish institution but a human institution &mdash; given to creatures who are finite and made in the image of a God who rested. The Sabbath belongs to the creation order alongside marriage, work, and community.",
  },
  {
    title: "Sabbath as Liberation from Egypt &mdash; the Exodus Grounding",
    verse: "Deuteronomy 5:12-15",
    body: "You shall remember that you were a slave in the land of Egypt, and the Lord your God brought you out from there with a mighty hand. Therefore the Lord your God commanded you to keep the Sabbath day. Deuteronomy grounds the Sabbath not in creation but in the Exodus: you were slaves who could not rest; now you are free people who can. Walter Brueggemann argues compellingly that Sabbath is therefore an act of resistance against every Pharaoh-economy that demands endless productivity. To observe the Sabbath is to declare that you do not belong to any production system &mdash; not Egypt&rsquo;s, not the market economy&rsquo;s, not the culture of busyness. You belong to the God who sets captives free and gives them one day in seven simply to be, not to produce.",
  },
  {
    title: "Is the Sabbath for Christians? Colossians 2:16 and the Fourth Commandment",
    verse: "Colossians 2:16; Hebrews 4:9-11",
    body: "Let no one pass judgment on you in questions of food and drink, or with regard to a festival or a new moon or a Sabbath. These are a shadow of the things to come, but the substance belongs to Christ. The New Testament raises real questions about Sabbath observance for Gentile Christians. Paul includes Sabbath among the ceremonial shadows fulfilled in Christ. Yet Hebrews 4 retains a &ldquo;Sabbath rest for the people of God&rdquo; as an eschatological reality already inaugurated in Christ. The Reformers generally distinguished the ceremonial aspects of the Sabbath (fulfilled in Christ) from its creation-rooted moral core (binding across all humanity). Most evangelical and Reformed traditions hold that the Lord&rsquo;s Day &mdash; the first day of the week, the day of resurrection &mdash; is not the seventh-day Sabbath transposed but a new-creation Sabbath that carries forward the creation rhythm in a resurrection key.",
  },
  {
    title: "The Lord&rsquo;s Day &mdash; Resurrection and the New Creation Sabbath",
    verse: "Acts 20:7; 1 Corinthians 16:2; Revelation 1:10",
    body: "On the first day of the week, when we were gathered together to break bread... The early church moved its primary gathering from the seventh to the first day of the week &mdash; the day of Christ&rsquo;s resurrection &mdash; without explicit dominical command but with apparent apostolic practice. John calls it the Lord&rsquo;s Day. The theological logic is powerful: just as the seventh day marked the completion of the old creation, the first day marks the beginning of the new creation in Christ&rsquo;s resurrection. Lord&rsquo;s Day worship is therefore not merely a weekly meeting but a weekly proclamation: the old order has ended, the new creation has begun, and we gather as citizens of a kingdom already inaugurated and not yet complete.",
  },
  {
    title: "Abraham Joshua Heschel &mdash; a Palace in Time",
    verse: "Exodus 31:17",
    body: "The Sabbath is a palace which we build in time. It is made of soul, of joy and reticence. Heschel&rsquo;s The Sabbath is one of the most theologically profound treatments of Sabbath in any religious tradition. Writing as a Jewish philosopher and theologian, Heschel argues that Hebrew spirituality is rooted not in space but in time: the holy is found not in sacred places (temples, shrines) but in sacred time. The Sabbath is the cathedral built in time &mdash; a sanctuary that returns each week, that requires no special geography, that is equally available to the peasant and the patriarch. For Christians, Heschel&rsquo;s vision deepens Lord&rsquo;s Day theology: Sunday is not merely a Christian habit but a weekly architecture of holiness, a space in time where we dwell with God.",
  },
];

const practices = [
  { icon: "🕯️", title: "Begin Sabbath with a Ritual", text: "Mark the beginning of Sabbath with a deliberate act: light candles, share a meal, read a psalm, or pray together as a family. The Jewish tradition of Shabbat dinner models the importance of marking the transition from ordinary time to sacred time. Without a beginning ritual, Sabbath tends to dissolve into a vaguely less-busy Saturday or Sunday rather than a qualitatively different kind of time. The ritual does not need to be elaborate &mdash; it needs to be intentional. What signals to your body and soul: ordinary time has ended, something different has begun?" },
  { icon: "📵", title: "Define Your Sabbath Prohibitions", text: "Decide in advance what you will not do on the Sabbath. Email, work tasks, and social media are obvious candidates. But also consider: errands that feel like obligation, financial transactions that involve work-thinking, and planning that keeps the mind in production mode. The rabbinic tradition developed detailed lists of prohibited melachot (categories of work) that, while legalistic in application, served a clarifying function: they forced people to think carefully about what counts as work. The question is not whether your list matches the rabbis&rsquo; but whether you have actually stopped." },
  { icon: "🏠", title: "Sabbath for Families with Children", text: "Families with young children often feel that Sabbath rest is simply unavailable &mdash; children do not observe it. But the tradition of Sabbath for families is not primarily about parents getting a day off; it is about creating a family culture of delight, presence, and worship. Children who grow up with Sabbath practices &mdash; special meals, family worship, rest from screens and obligations, extended outdoor time &mdash; absorb a counter-cultural formation that will shape their adult relationship with work, rest, and God. Begin with one protected Sabbath meal per week as a starting point." },
  { icon: "📖", title: "Lord&rsquo;s Day Corporate Worship as Anchor", text: "For Christians, the Lord&rsquo;s Day is not merely individual rest but corporate gathering: the assembly of the Body, the breaking of bread, the hearing of the Word, the prayers of the people. Corporate worship is not the Sabbath&rsquo;s optional add-on but its center. The individual rest practices of Sabbath gain their meaning from the communal anchor of Lord&rsquo;s Day worship. When Sunday becomes merely a personal recovery day disconnected from the gathered church, the resurrection proclamation of the Lord&rsquo;s Day is lost. Rest from labor flows outward from the gathered worship of the risen Christ." },
  { icon: "🌱", title: "Sabbath Economics &mdash; Leviticus 25 and the Jubilee", text: "The Sabbath principle extends beyond the weekly day to the sabbatical year (every seventh year: leave the land fallow, release debts) and the Jubilee (every fiftieth year: return land to original families, free slaves). This economic sabbath embeds in the law a limit on the accumulation of economic power and a periodic reset of inequality. Walter Brueggemann argues that these institutions reveal that Sabbath is not merely personal piety but a comprehensive social ethic: an economy organized around Sabbath logic is one that periodically interrupts the compounding of advantage. Christians attentive to Sabbath must eventually reckon with this economic dimension." },
];

const scriptures = [
  { ref: "Exodus 20:8-10", text: "&ldquo;Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God. On it you shall not do any work, neither you, nor your son or daughter, nor your male or female servant, nor your animals, nor any foreigner residing in your towns.&rdquo;" },
  { ref: "Deuteronomy 5:15", text: "&ldquo;Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand and an outstretched arm. Therefore the Lord your God has commanded you to observe the Sabbath day.&rdquo;" },
  { ref: "Matthew 12:8", text: "&ldquo;For the Son of Man is lord of the Sabbath.&rdquo;" },
  { ref: "Colossians 2:16-17", text: "&ldquo;Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day. These are a shadow of the things that were to come; the reality, however, is found in Christ.&rdquo;" },
  { ref: "Hebrews 4:9-11", text: "&ldquo;There remains, then, a Sabbath-rest for the people of God; for anyone who enters God&rsquo;s rest also rests from their works, just as God did from his. Let us, therefore, make every effort to enter that rest, so that no one will perish by following their example of disobedience.&rdquo;" },
  { ref: "Isaiah 58:13-14", text: "&ldquo;If you keep your feet from breaking the Sabbath and from doing as you please on my holy day, if you call the Sabbath a delight and the Lord&rsquo;s holy day honorable, and if you honor it by not going your own way and not doing as you please or speaking idle words, then you will find your joy in the Lord.&rdquo;" },
  { ref: "Mark 2:27-28", text: "&ldquo;Then he said to them, &lsquo;The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath.&rsquo;&rdquo;" },
];

const voices = [
  {
    name: "Abraham Joshua Heschel",
    work: "The Sabbath: Its Meaning for Modern Man",
    quote: "The Sabbath is not a date but an atmosphere. It is not something we observe but something we enter. Six days a week we live under the tyranny of things of space; on the Sabbath we try to become attuned to holiness in time.",
    bio: "Heschel was a Polish-born Jewish philosopher and rabbi who taught at the Jewish Theological Seminary of America. His short book The Sabbath, published in 1951, is one of the most beloved works of twentieth-century religious writing. His central argument &mdash; that Judaism is a religion of time rather than space, and that the Sabbath is its greatest cathedral &mdash; has influenced Jewish and Christian thinkers across generations. His work is essential reading for any serious engagement with Sabbath theology.",
  },
  {
    name: "Walter Brueggemann",
    work: "Sabbath as Resistance: Saying No to the Culture of Now",
    quote: "Sabbath is not simply the pause that refreshes so that we can return to the rat race on Monday. It is the systematic, regular, disciplined, visible practice of saying that the world does not belong to us, that we are not the engine of its wellbeing, and that its future does not depend on our busyness.",
    bio: "Brueggemann is one of the most influential Old Testament scholars of the twentieth and twenty-first centuries. His reading of Sabbath through the lens of Israel&rsquo;s liberation from Egypt gives the practice an economic and political dimension that purely personal spirituality misses. He argues that the productivity anxiety of contemporary culture is a form of Pharaoh&rsquo;s economy, and that Sabbath observance is the counter-practice that exposes and resists it. His work has made Sabbath theology accessible and urgent for a new generation.",
  },
  {
    name: "Mark Buchanan",
    work: "The Rest of God: Restoring Your Soul by Restoring Sabbath",
    quote: "Sabbath is not primarily about what we stop doing. It is about what we start noticing &mdash; the goodness of God, the richness of the present moment, the sufficiency of grace. We stop so that we can see.",
    bio: "Buchanan is a Canadian pastor and author whose The Rest of God is widely regarded as one of the most practically useful and theologically grounded evangelical treatments of Sabbath. He writes from personal experience of burnout and recovery, making his work particularly valuable for pastors and ministry workers who struggle to practice what they preach about rest. His framing of Sabbath as the practice of noticing &mdash; rather than merely stopping &mdash; gives the discipline a positive, joyful character.",
  },
  {
    name: "Dorothy Bass",
    work: "Receiving the Day: Christian Practices for Opening the Gift of Time",
    quote: "When we receive Sunday as a gift &mdash; not a burden, not merely our day off &mdash; we discover that time itself can be holy. We discover that we are not producers of our lives but receivers of them.",
    bio: "Dorothy Bass is a practical theologian and co-founder of the Valparaiso Project on the Education and Formation of People in Faith. Her work on Christian practices, including Sabbath, approaches the subject through the lens of formation and community rather than individual discipline. She emphasizes that Sunday is a gift to be received rather than a rule to be kept &mdash; a framing that opens Sabbath to joy rather than legalism. Her work is particularly valuable for thinking about Sabbath as a communal and liturgical practice.",
  },
];

const videos = [
  { id: "4jv_Mu7NW3g", title: "Sabbath as Resistance &mdash; Walter Brueggemann on Rest and Culture" },
  { id: "g2f8NOPHrPM", title: "Mark Buchanan on the Rest of God and Sabbath Practice" },
  { id: "3K6OjkMFq5I", title: "The Theology of Sabbath &mdash; Creation, Exodus, and New Creation" },
  { id: "VKII1x3rGDc", title: "Lord&rsquo;s Day Worship &mdash; Why Corporate Gathering Is the Heart of Christian Sabbath" },
];

export default function SabbathGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SBEntry[]>(() => {
    try { const s = localStorage.getItem("vine_sabbathguide_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jObstacle, setJObstacle] = useState("");
  const [jPractice, setJPractice] = useState("");
  const [jRenewal, setJRenewal] = useState("");

  useEffect(() => { localStorage.setItem("vine_sabbathguide_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jObstacle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), obstacle: jObstacle, practice: jPractice, renewal: jRenewal }, ...prev]);
    setJObstacle(""); setJPractice(""); setJRenewal("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Practicing the Sabbath
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The Sabbath is not a burden but a gift &mdash; a palace built in time, a weekly declaration of freedom from every Pharaoh-economy of ceaseless production. From creation ordinance to resurrection Lord&rsquo;s Day, this guide explores the theology and practice of holy rest.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.4rem" }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.97rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: p.title }} />
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.92rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Sabbath Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the biggest obstacle to your Sabbath observance right now?</label>
                  <textarea
                    value={jObstacle}
                    onChange={e => setJObstacle(e.target.value)}
                    placeholder="Work pressure, family demands, restlessness, guilt about stopping..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Which Sabbath practice are you committing to try this week?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="A beginning ritual, a prohibition, a family meal, a day of worship without obligation..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What renewal, rest, or encounter with God are you hoping for?</label>
                  <textarea
                    value={jRenewal}
                    onChange={e => setJRenewal(e.target.value)}
                    placeholder="What would a genuinely restoring Sabbath look and feel like for you?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.obstacle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Obstacle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.obstacle}</p></div>}
                {e.practice && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Practice</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.practice}</p></div>}
                {e.renewal && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Renewal</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.renewal}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: "0.6rem", fontWeight: 600, fontSize: "0.95rem", color: ACCENT }} dangerouslySetInnerHTML={{ __html: v.title }} />
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
