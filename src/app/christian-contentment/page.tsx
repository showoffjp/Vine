"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CNTEntry = { id: string; date: string; discontentment: string; truth: string; practice: string };

export default function ChristianContentmentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CNTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiancontentment_entries") ?? "[]"); } catch { return []; }
  });
  const [jDiscontentment, setJDiscontentment] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiancontentment_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDiscontentment.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), discontentment: jDiscontentment, truth: jTruth, practice: jPractice }, ...prev]);
    setJDiscontentment(""); setJTruth(""); setJPractice("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Character &amp; Virtue</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          The Secret of Contentment
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Contentment is not the absence of desire but the ordering of desire. Paul says he <em>learned</em> contentment &mdash; it is not a temperament but a discipline, not something some people are born with but something every believer can be trained toward in the school of grace.
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
            {[
              {
                title: "I Have Learned Contentment &mdash; Philippians 4:11-13",
                body: "Not that I am speaking of being in need, for I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me. The word translated &lsquo;content&rsquo; &mdash; autarkes &mdash; was a Stoic term for self-sufficiency, but Paul radically transforms it: his sufficiency is not self-derived but Christ-derived. He &ldquo;learned&rdquo; it &mdash; the Greek perfect tense indicates something acquired through a process of experience, not something given at conversion. The school of contentment has tuition paid in both abundance and poverty: Paul has been through both and discovered Christ sufficient in each.",
              },
              {
                title: "Godliness with Contentment Is Great Gain &mdash; 1 Timothy 6:6",
                body: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content. The conjunction matters: not godliness alone, and not contentment alone, but godliness with contentment. A religious life marked by covetousness, comparison, and discontent is not great gain no matter how many spiritual disciplines it includes. Paul grounds contentment in the bare fact of our creatureliness: we arrived with nothing, we leave with nothing. The created world is borrowed, not owned. This theological grounding &mdash; rather than mere positive thinking &mdash; is what makes Christian contentment durable across circumstances.",
              },
              {
                title: "Contentment vs. Complacency &mdash; The Critical Distinction",
                body: "Christian contentment is not the same as complacency, passivity, or the acceptance of injustice. Contentment is an interior posture toward God &mdash; it is what Paul describes as &lsquo;in every situation&rsquo; &mdash; not an exterior posture toward the world. The contented Christian is not one who does not seek to change unjust situations, does not grieve losses, or does not pray for healing and improvement. What changes is the internal orientation: rather than restlessness, grasping, resentment, or anxiety, there is a settled trust in the God who governs all things. Contentment is compatible with active pursuit of justice, grief over real losses, and persistent prayer for change &mdash; it is not the same as indifference.",
              },
              {
                title: "The Rare Jewel &mdash; Jeremiah Burroughs on Contentment",
                body: "Christian contentment is that sweet, inward, quiet, gracious frame of spirit which freely submits to and delights in God&rsquo;s wise and fatherly disposal in every condition. Burroughs&rsquo;s 17th-century masterpiece The Rare Jewel of Christian Contentment unpacks contentment as something that is simultaneously active (submission) and passive (gift), interior (spirit) and theological (in God&rsquo;s disposal). He argues that discontent is actually a form of murmuring against God &mdash; it says, implicitly, that God is not good, not wise, or not in control of my circumstances. Contentment, by contrast, is faith expressing itself in the daily texture of life.",
              },
              {
                title: "Consumerism and the Gospel",
                body: "The consumer culture in which contemporary Christians are formed is systematically opposed to contentment. Advertising is structurally dependent on the creation and maintenance of discontent: its entire business model rests on convincing people they lack what they need to be happy. To be formed by the gospel while being immersed in consumer culture requires deliberate counter-formation &mdash; practices of gratitude, simplicity, and attention that resist the narrative of never-enough. The gospel declares that in Christ, we have been given every spiritual blessing in the heavenly places (Eph 1:3) &mdash; the person who believes this has a different relationship to material want and abundance than the person shaped by consumer desire.",
              },
              {
                title: "Contentment in Singleness, Poverty, and Wealth",
                body: "Paul&rsquo;s contentment spans the full range: abundance and need, poverty and wealth. The New Testament addresses contentment in specific situations that our culture regards as grounds for discontent. Singleness &mdash; Paul argues in 1 Corinthians 7 that the single person has a freedom and undividedness that is its own gift. Poverty &mdash; Jesus pronounces the poor blessed not because poverty is good but because the Kingdom belongs to them. Wealth &mdash; Paul does not command the wealthy to become poor but to not set their hopes on wealth and to be rich in generosity (1 Tim 6:17-18). In each case, contentment is not the denial of the condition but a different relationship to it, grounded in what God has given and promised.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Practice a daily gratitude examen: at day&rsquo;s end, name three specific things you received today &mdash; not generic categories but particular gifts. Gratitude is the soil in which contentment grows; discontent flourishes in soil where nothing specific is ever named or received.",
              "Identify the area of your life where you most feel the pressure of not-enough: finances, relationships, achievement, appearance, status. Bring that specific discontentment to God in prayer rather than distracting yourself from it. Name the false promise underneath it: what are you believing this thing would give you?",
              "Practice a week of reduced consumption: no new purchases beyond necessities, no browsing shopping sites, no comparing yourself to others on social media. Notice what surfaces in the space created. Bring what you discover to God.",
              "Read 1 Timothy 6:6-10 slowly and ask: where is the love of money (the root of all kinds of evil) showing up in my daily habits, anxieties, or aspirations? This is not about guilt but about honest diagnosis before God.",
              "If you are in a season of singleness, poverty, or another condition your culture defines as lack, sit with 1 Corinthians 7:17-24 and Philippians 4:11-13. Ask: what is God giving me in this specific condition that I might not see if I were only focused on what I do not have?",
              "Practice simplicity as a spiritual discipline for one month: simplify your schedule, your possessions, your consumption of news and entertainment. Simplicity creates the interior space in which contentment can develop; complexity and accumulation tend to produce the opposite.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Jeremiah Burroughs",
                work: "The Rare Jewel of Christian Contentment",
                quote: "Christian contentment is that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God&rsquo;s wise and fatherly disposal in every condition... It is not enough to bear your affliction; you must be contented with it, you must be pleased with God&rsquo;s hand.",
                bio: "Jeremiah Burroughs (1600&ndash;1646) was a Puritan pastor and one of the Westminster Assembly divines. His Rare Jewel of Christian Contentment was delivered as a series of sermons during the upheaval of the English Civil War &mdash; a context that makes its emphasis on interior peace amid external chaos particularly striking. Burroughs identifies twelve graces that make up true contentment, twelve lessons through which Paul learned it, and the manifold evils of a murmuring, discontented spirit. It remains the most thorough treatment of contentment in the Christian tradition.",
              },
              {
                name: "Thomas Watson",
                work: "The Art of Divine Contentment",
                quote: "A contented Christian carries heaven about him. He has peace of conscience, joy in the Holy Ghost; and is not this a heaven upon earth? He who has God for his portion needs nothing else. God is a whole ocean of blessedness; the creature is but a drop.",
                bio: "Thomas Watson (c. 1620&ndash;1686) was a Puritan minister whose The Art of Divine Contentment appeared in 1653 alongside Burroughs&rsquo;s Rare Jewel as one of the great Puritan treatments of contentment. Watson&rsquo;s characteristically vivid style &mdash; pithy, concrete, and imagistic &mdash; makes his work especially accessible. His central claim: that the person who has God has everything, and the person who lacks God lacks everything regardless of what else they possess.",
              },
              {
                name: "Richard Foster",
                work: "Celebration of Discipline",
                quote: "Simplicity is freedom. Duplicity is bondage. Simplicity brings joy and balance. Duplicity brings anxiety and fear... The spiritual discipline of simplicity provides the needed corrective without which life would be consumed by an insatiable hunger for more.",
                bio: "Richard Foster&rsquo;s Celebration of Discipline (1978) introduced a generation of evangelicals to the classical spiritual disciplines. His chapter on simplicity is perhaps the most practically oriented treatment of contentment in modern evangelical writing. Foster distinguishes between an inner reality (contentment, freedom from covetousness, the ordering of all things toward the Kingdom) and the outward expressions of that inner reality (modest lifestyle, reduced consumption, generosity). Without the inner work, the outer expressions become legalism; without the outer expressions, the inner work remains theoretical.",
              },
              {
                name: "Augustine of Hippo",
                work: "Confessions",
                quote: "Thou madest us for Thyself, and our heart is restless, until it repose in Thee. The restlessness of discontentment is not ultimately about circumstances &mdash; it is about the heart&rsquo;s search for its true home. Every created thing we seek contentment in will eventually fail us, not because it is evil but because it is not God.",
                bio: "Augustine of Hippo (354&ndash;430) is one of the most formative theologians in the Western church. His Confessions opens with the famous observation that our hearts are restless until they rest in God &mdash; which constitutes perhaps the deepest theological account of both discontentment and contentment. Discontentment is the symptom of a heart displaced from its proper center. Contentment is the fruit of a heart returned to God. All the lesser goods we chase &mdash; wealth, status, pleasure, approval &mdash; cannot satisfy what only God can fill.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em dangerouslySetInnerHTML={{ __html: v.work }} /></div>
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
            {[
              { ref: "Philippians 4:11-13", text: "Not that I am speaking of being in need, for I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me." },
              { ref: "1 Timothy 6:6-8", text: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content." },
              { ref: "Hebrews 13:5", text: "Keep your life free from love of money, and be content with what you have, for he has said, &ldquo;I will never leave you nor forsake you.&rdquo;" },
              { ref: "Matthew 6:25-26", text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?" },
              { ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want." },
              { ref: "Ephesians 1:3", text: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places." },
              { ref: "1 Timothy 6:17-18", text: "As for the rich in this present age, charge them not to be haughty, nor to set their hopes on the uncertainty of riches, but on God, who richly provides us with everything to enjoy. They are to do good, to be rich in good works, to be generous and ready to share." },
            ].map(s => (
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Contentment Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where are you experiencing discontentment right now?</label>
                  <textarea
                    value={jDiscontentment}
                    onChange={e => setJDiscontentment(e.target.value)}
                    placeholder="Name the situation, the longing, or the comparison honestly..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What truth about God or the gospel speaks to this discontentment?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="A promise, a name of God, a gospel reality that reframes this situation..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What practice will you take up this week to cultivate contentment?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="Gratitude, simplicity, reduced consumption, a specific prayer posture..."
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
                {e.discontentment && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Discontentment</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.discontentment}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.practice && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Practice</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.practice}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="LCKMzVALMsc" title="Paul&rsquo;s Secret of Contentment &mdash; Philippians 4:11-13 Explained" />
            <VideoEmbed videoId="d3r7bDpgz3U" title="The Rare Jewel of Christian Contentment &mdash; Jeremiah Burroughs" />
            <VideoEmbed videoId="XrJjeVKMIIc" title="Contentment vs. Complacency: What Is the Difference?" />
            <VideoEmbed videoId="0sQTVPfBWc4" title="Consumerism, Desire, and the Gospel of Enough" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
