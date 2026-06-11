"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GVEntry = { id: string; date: string; conviction: string; step: string; freedom: string };

const THEOLOGY = [
  {
    title: "The Gospel Creates Generosity (2 Cor 9:7)",
    body: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. Christian giving is not law but gospel response. The motivation is not obligation but gratitude: For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich (2 Cor 8:9). The gospel creates generosity by transforming our understanding of ownership: we are not owners but stewards; not earners but receivers. Everything we have was given to us by God, and giving is the practice that keeps us in touch with that reality.",
  },
  {
    title: "The Tithe — Foundation or Ceiling? (Mal 3:10)",
    body: "Bring the whole tithe into the storehouse... Test me in this, says the Lord Almighty. The tithe (10%) appears throughout the Old Testament as the baseline of Israel's giving to God's work. The question for Christians is whether the tithe is still the standard. Most evangelical theologians say: the tithe is the Old Covenant floor, not the New Covenant ceiling. Under the New Covenant of greater grace, we might expect greater generosity, not less. The tithe is a useful starting point — a concrete, countercultural commitment in a culture that treats income as entirely one's own — but the New Testament vision is ultimately one of radical, Spirit-led generosity proportional to one's means.",
  },
  {
    title: "Giving to the Poor — the Eternal Significance (Matt 25:40)",
    body: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me. Jesus identifies himself with the poor, hungry, sick, and imprisoned. Giving to the poor is not a separate category from giving to God — it is giving to God. The prophets are unambiguous: Isaiah (58:6–7), Micah (6:8), Amos (5:21–24), James (2:14–17) all ground justice for the poor in the character of God. The church that is generous in offering but not in generosity to the vulnerable has missed the connection Jesus makes unmistakably clear.",
  },
  {
    title: "Radical Generosity — the Early Church Model (Acts 2:44–45)",
    body: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need. The Jerusalem community practiced extraordinary generosity that made the watching world take notice. This is not a mandate for communal ownership but an illustration of what the Spirit does to possessiveness. The question is not whether we should liquidate assets (most Christians should not) but whether we hold our possessions loosely enough that need in the body can be met with genuine sacrifice. The early church's reputation for generosity was one of the most powerful arguments for the truth of the gospel.",
  },
  {
    title: "Contentment and Simplicity — the Freedom of Enough (Phil 4:11–12)",
    body: "I have learned, in whatever state I am, to be content. Paul learned contentment — it was not natural but acquired through practice. The corollary of generosity is simplicity: the practice of living on less than one could afford in order to give more than is comfortable. Richard Foster, Dallas Willard, and others identify simplicity as a spiritual discipline — a countercultural practice that declares: my security is in God, not possessions; my identity is not my standard of living; there is enough and I can share it. Contentment frees us from the anxiety of accumulation and the exhaustion of more.",
  },
];

const VOICES = [
  {
    name: "Randy Alcorn",
    work: "The Treasure Principle",
    quote: "You can't take it with you — but you can send it on ahead. Every dollar we put in the eternal economy is a dollar that will not be lost to the flood of this world's end. Giving is not a sacrifice; it is an investment in the only portfolio that survives death.",
    bio: "Randy Alcorn is the founder of Eternal Perspective Ministries and a prolific author on money, possessions, and eternity. The Treasure Principle is the most concise and compelling treatment of biblical generosity — grounded in Jesus's teaching about treasure in heaven and the limited time window we have to invest our resources for eternity.",
  },
  {
    name: "Tim Keller",
    work: "Ministries of Mercy",
    quote: "A church that is not generous to the poor has decided, whatever its theology, that Jesus's identification with the poor does not apply to it. It has effectively denied the gospel it claims to preach.",
    bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan and a theological writer of extraordinary influence. Ministries of Mercy makes the exegetical and pastoral case that care for the poor is not optional for the church but integral to the gospel — flowing from the character of God and the pattern of Christ's ministry.",
  },
  {
    name: "Zacchaeus (Luke 19:8)",
    work: "The Gospel of Luke",
    quote: "Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.",
    bio: "Zacchaeus is the supreme New Testament illustration of what the gospel does to possessiveness. He was a chief tax collector — meaning he had enriched himself at the expense of his community through a corrupt system. The encounter with Jesus produced immediate, radical, unsolicited generosity: half his wealth to the poor and quadruple restitution to those he had wronged. Jesus's verdict: Today salvation has come to this house. Generosity is not the precondition of salvation but its evidence.",
  },
];

const PRACTICES = [
  "Calculate your giving as a percentage of gross income and set a concrete goal — whether beginning at 5%, reaching 10%, or stepping beyond — write it down and set up automatic giving.",
  "Give to something that costs you — not just the comfortable surplus but an amount that creates a choice between your own comfort and the need of another.",
  "Explore one additional giving avenue beyond your church: a pregnancy resource center, an overseas ministry among the unreached, a local food bank — let your giving follow your prayer.",
  "Practice micro-generosity daily: paying for someone's meal, giving cash to a person in need without strings, tipping generously — training the habit of open-handedness in small things.",
  "Once a year, review your giving alongside your spending: what do the numbers reveal about what you actually treasure?",
];

const SCRIPTURES = [
  { ref: "2 Cor 9:7", text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." },
  { ref: "Mal 3:10", text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." },
  { ref: "Matt 25:40", text: "The King will reply, Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me." },
  { ref: "Acts 2:44–45", text: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need." },
  { ref: "Luke 19:8", text: "But Zacchaeus stood up and said to the Lord, Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount." },
  { ref: "Prov 11:24–25", text: "One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed." },
];

const VIDEOS = [
  { videoId: "p1V8tfrKh_U", title: "The Treasure Principle — Randy Alcorn on Giving and Eternity" },
  { videoId: "eVMJCHmBzgA", title: "A Biblical Theology of Money and Generosity" },
  { videoId: "fgCBCWAB9Yw", title: "Why Christians Should Give — and How Much" },
  { videoId: "JeGdJA0b7YQ", title: "Radical Generosity: What the Early Church Can Teach Us" },
];

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianGivingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GVEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_giving_entries") ?? "[]"); } catch { return []; }
  });
  const [jConviction, setJConviction] = useState("");
  const [jStep, setJStep] = useState("");
  const [jFreedom, setJFreedom] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => { localStorage.setItem("vine_giving_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jConviction.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), conviction: jConviction, step: jStep, freedom: jFreedom }, ...prev]);
    setJConviction(""); setJStep(""); setJFreedom("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* breadcrumb */}
        <div style={{ fontSize: 12, color: MUTED, marginBottom: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
          Faith &amp; Practice
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 10, color: TEXT }}>Christian Giving</h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.7, maxWidth: 640 }}>
          The theology of generosity, tithing, radical giving, and what the gospel does to our relationship with money.
        </p>

        {/* tab bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                minWidth: 80,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: tab === t.id ? GREEN : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* theology tab */}
        {tab === "theology" && (
          <div>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12, marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* practices tab */}
        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Generosity is a habit, not a feeling. These {PRACTICES.length} practices move giving from occasional impulse to intentional way of life.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, margin: 0 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* voices tab */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {VOICES.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: GREEN, fontWeight: 900, fontSize: 20 }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: 14, marginLeft: 10 }}>{v.work}</span>
                </div>
                <blockquote style={{ margin: "0 0 16px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}0d`, borderRadius: "0 8px 8px 0" }}>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* scripture tab */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SCRIPTURES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* journal tab */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>My Generosity Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Track your growing convictions and steps in biblical generosity. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What conviction about giving is God forming in you?</label>
                <textarea
                  value={jConviction}
                  onChange={e => setJConviction(e.target.value)}
                  placeholder="Tithing, radical generosity, first-fruits, giving to the poor..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What concrete step are you taking?</label>
                <textarea
                  value={jStep}
                  onChange={e => setJStep(e.target.value)}
                  placeholder="A percentage goal, a new giving avenue, an automated gift..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>Where are you experiencing freedom from possessiveness?</label>
                <textarea
                  value={jFreedom}
                  onChange={e => setJFreedom(e.target.value)}
                  placeholder="The loosening of grip, the joy of giving, the peace of enough..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <button
                type="button"
                onClick={saveEntry}
                style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                {saved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button
                        type="button"
                        onClick={() => deleteEntry(e.id)}
                        style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}
                      >&times;</button>
                    </div>
                    {e.conviction && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>CONVICTION </span><span style={{ color: TEXT, fontSize: 14 }}>{e.conviction}</span></div>}
                    {e.step && <div style={{ marginBottom: 8 }}><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>STEP </span><span style={{ color: TEXT, fontSize: 14 }}>{e.step}</span></div>}
                    {e.freedom && <div><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>FREEDOM </span><span style={{ color: TEXT, fontSize: 14 }}>{e.freedom}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* videos tab */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Teachings on biblical generosity, the theology of money, radical giving, and the example of the early church.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {VIDEOS.map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4, marginTop: 0 }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
