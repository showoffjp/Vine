"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Mandate Is Not a Universal Calling", verse: "Genesis 1:28", text: "The creation mandate to be fruitful and multiply was given to humanity as a whole, not as an individual command to every person in every circumstance. The New Testament expands the meaning of spiritual fruitfulness far beyond biological reproduction. Celibacy was honored by Paul (1 Cor 7:7) as a gift, and Jesus himself did not have children. Biological parenthood is one honored path, not the only one." },
  { title: "Some Are Given the Gift of Singleness or Childlessness", verse: "1 Corinthians 7:7-8", text: "Each of you has your own gift from God; one has this gift, another has that. Paul describes the unmarried and childless life as a gift that enables undivided devotion to God. The church has sometimes treated this as lesser — a failure rather than a calling. But Paul sees it as a dignified, even advantageous way to serve the kingdom. Not every calling looks the same." },
  { title: "Fruitfulness Is Spiritual, Not Only Physical", verse: "John 15:8", text: "This is to my Father's glory, that you bear much fruit, showing yourselves to be my disciples. The fruit Jesus commands is spiritual, relational, and missional. Disciples, not descendants, are the fruit the gospel produces. A person without children can bear more kingdom fruit than imaginable — in mentorship, care, creative work, missions, and faithful presence in community." },
  { title: "The Question Is Stewardship, Not Permission", verse: "Romans 14:12", text: "So then, each of us will give an account of ourselves to God. The decision whether to have children — when made freely, prayerfully, with full honesty before God — is a stewardship question between the couple and their Creator. Manipulation, shame, or social pressure from church or family is not the voice of God. Ask honestly: what life are we called to steward, and for whom?" },
  { title: "The Church Needs Adults Who Have Capacity for Others", verse: "1 Corinthians 12:25", text: "So that there should be no division in the body, but that its parts should have equal concern for each other. Every local church needs people with margin — time, energy, relational availability — to care for others. Childfree adults often carry enormous capacity for community, hospitality, and ministry that the body desperately needs. This is not a lesser contribution; it is an indispensable one." },
];

const voices = [
  { id: "v1", name: "Sam and Betsy Andreades", role: "Pastoral Counselors, Authors", quote: "When we allow the church culture to shame women who are childfree by choice, we are adding a burden God has not placed, and denying the diversity of callings the Spirit gives.", bio: "Sam Andreades and other pastoral counselors have addressed the church's tendency to treat childbearing as mandatory rather than one honored path among many. Their work explores how families of all shapes — including those without children — image God's hospitality and generativity." },
  { id: "v2", name: "Rachel Gilson", role: "Author, Ministry Leader", quote: "The kingdom of God makes room for many kinds of families that the surrounding culture doesn't recognize as real families — and the church should be ahead of the culture in celebrating this.", bio: "Rachel Gilson is the author of Born Again This Way and writes about sexuality, calling, and identity in Christian life. Her work challenges the church to expand its vision of faithful living beyond the nuclear family norm, making space for single, celibate, and childless adults to be fully honored in the body." },
  { id: "v3", name: "Wesley Hill", role: "Author, Professor of Biblical Studies", quote: "The church is supposed to be the primary family — the place where the lonely are set in families. But we've often let the biological family become the center, and lost the radical kinship the gospel offers.", bio: "Wesley Hill is the author of Spiritual Friendship and Washed and Waiting. He writes about the spiritual richness possible in non-parental relationships, and the New Testament vision of the church as a family that transcends biology. His work is a resource for those seeking theological grounding for a life that looks different from the suburban family template." },
  { id: "v4", name: "Kate Bowler", role: "Professor of American Religious History, Duke Divinity", quote: "Prosperity gospel teaches that the blessed life looks one particular way. But the gospel of Jesus makes room for lives that don't look like the template — and calls them good.", bio: "Kate Bowler researches the prosperity gospel and its effects on Christian identity. Her memoir Everything Happens for a Reason — written during her cancer diagnosis in her 30s — explores how the church's narrative of blessed achievement (including parenthood as fulfillment) fails people whose lives don't fit the expected arc." },
];

const practices = [
  { icon: "🙏", title: "Examine Your Decision Before God, Not Others", text: "Before seeking community approval or defending your choice, bring it honestly to God. Ask not 'what will people think' but 'what have we been given, and what are we called to steward?' Decisions made from that place carry a different peace." },
  { icon: "📖", title: "Read 1 Corinthians 7 Without Skipping", text: "Paul's extended teaching on singleness, marriage, and undivided devotion to God contains a theology of calling that many Christians have never been taught. Reading it carefully will disrupt the assumption that parenthood is the Christian norm." },
  { icon: "🤝", title: "Invest Deeply in Mentorship and Spiritual Parenting", text: "Many of the most formative figures in the New Testament — Paul, Barnabas, Priscilla — poured themselves into spiritual children rather than biological ones. A deliberate investment in younger believers, neighbors, or communities is not a substitute for children; it is a distinct calling." },
  { icon: "🏡", title: "Practice Radical Hospitality", text: "The New Testament family vision is centered on the table. A home that is consistently open to strangers, the marginalized, the lonely, or the young is a profound expression of kingdom life — and requires the kind of capacity that often comes more easily without children." },
  { icon: "💬", title: "Find Language for Unwanted Questions", text: "People will ask. Preparing gentle, honest responses that neither over-explain nor shame the questioner protects your peace and opens space for real conversation. 'We've prayerfully decided that parenthood isn't our calling' is a complete answer." },
  { icon: "⛪", title: "Help Reshape Your Church's Theology of Family", text: "If your church idolizes the nuclear family, you may be uniquely positioned to gently advocate for a more New Testament vision — one where the church is the primary family, and all members, regardless of parenting status, are fully seen and needed." },
];

const scriptures = [
  { verse: "1 Corinthians 7:7", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that." },
  { verse: "Isaiah 56:3-5", text: "Let no eunuch complain, 'I am only a dry tree.' For this is what the Lord says: 'To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever.'" },
  { verse: "John 15:8", text: "This is to my Father's glory, that you bear much fruit, showing yourselves to be my disciples." },
  { verse: "Matthew 12:50", text: "For whoever does the will of my Father in heaven is my brother and sister and mother." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
];

type CFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChildfreePage() {
  const [tab, setTab] = useState("theology");
  const [cfJournal, setCfJournal] = useState<CFEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setCfJournal(JSON.parse(localStorage.getItem("vine_childfreej_entries") ?? "[]")); } catch { setCfJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CFEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...cfJournal];
    setCfJournal(updated);
    localStorage.setItem("vine_childfreej_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = cfJournal.filter(e => e.id !== id);
    setCfJournal(updated);
    localStorage.setItem("vine_childfreej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Childfree by Choice</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Navigating a decision the church often questions — finding theological grounding and freedom from shame.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What am I feeling about this decision right now?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What truth am I standing on about calling and fruitfulness?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="How am I expressing fruitfulness in my current season?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {cfJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Fruitfulness: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on the nature of Christian calling and fruitfulness — a framework for thinking about how God directs individual lives into unique patterns of kingdom service." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how identity and calling must be grounded in God's voice rather than cultural expectations — including the expectation that the blessed life includes children." },
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how the kingdom of God consistently subverts cultural assumptions about what a blessed, successful, or fruitful life looks like." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God and Human Calling", channel: "Ligonier Ministries", description: "R.C. Sproul on how God's sovereignty shapes individual calling — and why trusting his specific guidance for each person matters more than conforming to a template." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
