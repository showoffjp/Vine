"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FNEntry = { id: string; date: string; area: string; principle: string; action: string };

export default function ChristianFinancesPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FNEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianfinances_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianfinances_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jArea.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, principle: jPrinciple, action: jAction }, ...prev]);
    setJArea(""); setJPrinciple(""); setJAction("");
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
          Christian Personal Finance
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Money is one of the most spiritually significant areas of life &mdash; Jesus spoke about it more than heaven or hell. Biblical stewardship is not merely financial advice but a whole-person posture of holding wealth loosely, giving generously, and trusting God with every dollar as an act of worship.
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
                title: "Biblical Stewardship: We Are Managers, Not Owners (Ps 24:1)",
                body: "The earth is the Lord&rsquo;s, and everything in it. The foundational biblical principle of finance is not ownership but stewardship. We do not own what we earn; we manage what God owns. Every financial decision is therefore a spiritual act &mdash; a declaration of what we actually believe about who holds ultimate title. The parable of the talents (Matt 25:14&ndash;30) assumes this framework: the master entrusts resources to servants and expects a reckoning. Faithful stewardship is not about accumulating the most but managing well what has been entrusted, including giving generously, saving wisely, and spending purposefully.",
              },
              {
                title: "Tithing, Generosity, and the Open Hand (Mal 3:10; 2 Cor 9:6&ndash;8)",
                body: "Bring the whole tithe into the storehouse... Test me in this, says the Lord. The tithe &mdash; ten percent of income &mdash; is a pre-Mosaic practice (Gen 14:20) and a Mosaic law, but generosity in the New Testament is framed not as a legal minimum but as a response to grace. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver (2 Cor 9:7). The tithe is a useful starting point, not a ceiling. Randy Alcorn argues that for many Western Christians, the graduated tithe &mdash; giving a higher percentage as income rises &mdash; better reflects the spirit of biblical generosity. Systematic, pre-committed giving anchors generosity before spending.",
              },
              {
                title: "Debt: Borrower Is Servant to the Lender (Prov 22:7)",
                body: "The rich rule over the poor, and the borrower is slave to the lender. Scripture does not forbid all debt, but the New Testament ethic &mdash; owe no one anything, except to love each other (Rom 13:8) &mdash; points toward a life free from financial bondage. Consumer debt in particular (credit cards, car loans, buy-now-pay-later) fragments the future to satisfy present desire, which is the opposite of the contentment Scripture calls for. Debt freedom is not a prosperity gospel promise but a practical prerequisite to financial generosity: it is difficult to be a radically generous person while servicing significant consumer debt. Dave Ramsey&rsquo;s debt snowball and the biblical pattern of the poor man who builds slowly (Prov 13:11) share the same structure: intensity of focus and patience of pace.",
              },
              {
                title: "Budgeting as Spiritual Discipline and Intentionality (Luke 14:28)",
                body: "For which of you, desiring to build a tower, does not first sit down and count the cost? Budgeting is an act of intentional stewardship &mdash; it assigns mission and meaning to every dollar before it is spent rather than reconstructing where it went after the fact. A budget is not a restriction but a plan; it forces explicit decisions about priorities rather than allowing unconscious drift toward comfort and consumption. The zero-based budget (giving every dollar a name) reflects the theological principle that there is no neutral money: all of it is either purposefully directed or passively wasted. The budget is where theology meets practice &mdash; it is the document that shows what you actually believe about money.",
              },
              {
                title: "Contentment, Materialism, and the Deceitfulness of Riches (Matt 6:19&ndash;21; 1 Tim 6:6&ndash;10)",
                body: "Do not lay up for yourselves treasures on earth&hellip; but lay up for yourselves treasures in heaven. Godliness with contentment is great gain. The love of money &mdash; not money itself &mdash; is the root of all kinds of evil (1 Tim 6:10). The consumer economy is built on manufactured discontent: the systematic creation of desire for things not yet owned. Biblical contentment (autarkeia in Paul &mdash; self-sufficiency, independence from external circumstance) is learned, not natural: I have learned, in whatever state I am, to be content (Phil 4:11). Materialism is a theological error before it is a behavioral one &mdash; it locates security and identity in possessions rather than in God. Addressing it requires not merely budget adjustments but renewed minds (Rom 12:2).",
              },
              {
                title: "Saving, Investing, and the Kingdom Perspective (Prov 21:20; Matt 25:14&ndash;30)",
                body: "The wise store up choice food and olive oil, but fools gulp theirs down. Scripture commends the ant who stores in summer for winter (Prov 6:6&ndash;8) and critiques the man who buries his talent rather than investing it. Saving is not hoarding; it is creating the financial margin that enables future generosity and absorbs future adversity without debt. A fully funded emergency fund, retirement savings adequate to avoid burdening the next generation, and wealth built slowly through consistent investment all reflect sound biblical wisdom. The goal is not wealth accumulation as an end in itself but financial margin that enlarges the capacity for generosity and reduces financial anxiety that crowds out trust in God.",
              },
              {
                title: "Biblical View of Wealth and Poverty: Justice and Generosity (Prov 19:17; Amos 5:24)",
                body: "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done. Scripture holds together two truths often separated: diligent work and wise stewardship generally lead to greater prosperity (Prov 10:4), but systemic injustice creates poverty that is not the poor person&rsquo;s fault (Amos 5:11&ndash;12). Biblical financial ethics includes not only personal responsibility but structural justice &mdash; fair wages, honest scales, not oppressing workers. The Year of Jubilee (Lev 25) built debt cancellation and wealth redistribution into the Israelite social order. For the Christian, financial faithfulness includes advocacy for just economic structures alongside personal generosity and wise management.",
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
              "Set up a zero-based monthly budget before each month begins &mdash; give every dollar a name and assign a category to every anticipated expense. Track actuals against the budget and reconcile weekly. The budget is not a restriction but a spending plan that reflects your actual values.",
              "Automate your giving before any other transaction posts &mdash; set up a recurring automatic transfer to your church or charitable fund on payday. Pre-committed, systematic giving protects generosity from competing priorities and trains the heart away from scarcity-thinking.",
              "List every debt you carry (student loans, car payment, credit cards, personal loans) in order from smallest balance to largest. Attack the smallest with every dollar you can free up while making minimum payments on the rest &mdash; the debt snowball method. Each payoff increases intensity and builds momentum.",
              "Build a starter emergency fund of $1,000 while paying off consumer debt, then return after debt freedom to build a fully-funded emergency fund of 3&ndash;6 months of expenses. The emergency fund prevents debt from re-entering your life when the unexpected arrives.",
              "Conduct an annual &ldquo;generosity review&rdquo;: calculate your giving percentage for the year, and prayerfully ask whether it reflects your actual theology. If your income has grown significantly, consider whether your giving percentage should grow with it &mdash; the graduated tithe principle.",
              "Practice a 48-hour rule for unplanned purchases above a set threshold (say, $50 or $100): wait 48 hours before buying. Most impulse spending does not survive the delay. This one habit disrupts the consumer cycle of manufactured desire and instant gratification.",
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
                name: "Randy Alcorn",
                work: "Money, Possessions, and Eternity",
                quote: "The more you give, the more you realize you can give more. Giving is not just about meeting needs; it is about experiencing the joy of partnering with God in what he is doing in the world.",
                bio: "Randy Alcorn is the founder of Eternal Perspective Ministries and the author of the most comprehensive evangelical treatment of biblical stewardship available. <em>Money, Possessions, and Eternity</em> surveys every major biblical text on wealth, poverty, giving, and contentment. Alcorn gives away all royalties from his books and lives on a modest salary &mdash; his life is a demonstration of the theology he teaches. His concept of the &ldquo;treasure principle&rdquo; &mdash; that eternal investment is more rational than earthly accumulation &mdash; reframes financial decision-making around eternity.",
              },
              {
                name: "Dave Ramsey",
                work: "The Total Money Makeover",
                quote: "Act your wage. Live on less than you make. The borrower is slave to the lender, and freedom requires intensity.",
                bio: "Dave Ramsey is a financial counselor whose seven-step &ldquo;Baby Steps&rdquo; program has helped millions of Americans eliminate debt and build wealth. While his theology is not consistently Reformed and his tone can be harsh toward the poor, his practical financial framework &mdash; emergency fund, debt snowball, investing 15% for retirement, paying off the home &mdash; is consistent with biblical financial wisdom and has transformed household finances for many Christians. His program is best received as a practical tool used within a richer theological framework about generosity, justice, and contentment.",
              },
              {
                name: "John Wesley",
                work: "Sermon: The Use of Money",
                quote: "Gain all you can. Save all you can. Give all you can. The first without the second is folly; the second without the third is sin.",
                bio: "John Wesley was the founder of Methodism and one of the most practically rigorous Christian voices on money in church history. His famous three-part framework &mdash; gain all you can (through honest, diligent labor), save all you can (through avoiding waste and consumption), give all you can (the ultimate purpose of earning and saving) &mdash; is a complete financial theology in three sentences. Wesley himself gave away the great majority of his considerable income and died with almost nothing, having chosen not to accumulate. His framework assumes that earning and saving are morally serious only in relation to giving.",
              },
              {
                name: "Miroslav Volf",
                work: "Free of Charge: Giving and Forgiving in a Culture Stripped of Grace",
                quote: "We are not first givers who then become receivers. We are first receivers who, having been given to lavishly, can afford to give lavishly in return.",
                bio: "Miroslav Volf is a Croatian-American theologian whose <em>Free of Charge</em> locates human generosity within the prior generosity of God. His theological account of giving situates all Christian financial ethics within the doctrine of grace: we give because we have received, and our giving participates in the divine life of the Triune God who is eternally self-giving. This prevents stewardship from collapsing into moralism or performance and grounds it in the gospel.",
              },
            ].map(v => (
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
            {[
              { ref: "Ps 24:1", text: "The earth is the Lord&rsquo;s, and everything in it, the world, and all who live in it." },
              { ref: "Prov 22:7", text: "The rich rule over the poor, and the borrower is slave to the lender." },
              { ref: "Matt 6:19&ndash;21", text: "&ldquo;Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven&hellip; For where your treasure is, there your heart will be also.&rdquo;" },
              { ref: "Luke 14:28", text: "&ldquo;For which of you, desiring to build a tower, does not first sit down and count the cost, whether he has enough to complete it?&rdquo;" },
              { ref: "2 Cor 9:6&ndash;8", text: "Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." },
              { ref: "1 Tim 6:6&ndash;10", text: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that. Those who want to get rich fall into temptation and a trap and into many foolish and harmful desires that plunge people into ruin and destruction." },
              { ref: "Phil 4:11&ndash;13", text: "I have learned, in whatever state I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me." },
              { ref: "Prov 19:17", text: "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: s.ref }} />
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Stewardship Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What area of finances are you examining? (e.g., giving, debt, budgeting, contentment)</label>
                  <textarea
                    value={jArea}
                    onChange={e => setJArea(e.target.value)}
                    placeholder="Name a specific financial area or struggle..."
                    style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What biblical principle applies to this area?</label>
                  <textarea
                    value={jPrinciple}
                    onChange={e => setJPrinciple(e.target.value)}
                    placeholder="A verse, principle, or theological truth that speaks to this area..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What concrete action or decision will you take?</label>
                  <textarea
                    value={jAction}
                    onChange={e => setJAction(e.target.value)}
                    placeholder="A specific, measurable step — adjust the budget, automate giving, start the debt snowball..."
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
                {e.area && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Area</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.area}</p></div>}
                {e.principle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Principle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.principle}</p></div>}
                {e.action && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Action</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.action}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="NkHiDsGbJEQ" title="What Does the Bible Say About Money? Biblical Stewardship Explained" />
            <VideoEmbed videoId="BTl6-L1M2NY" title="Tithing and Generosity: A Biblical Framework for Giving" />
            <VideoEmbed videoId="CUJ67R7LKRU" title="How to Budget as a Christian: Stewardship in Practice" />
            <VideoEmbed videoId="pVp8GHbSJAg" title="Getting Out of Debt: The Christian Case for Financial Freedom" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
