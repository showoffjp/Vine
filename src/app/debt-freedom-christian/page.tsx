"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Borrower Is Slave to the Lender — Debt Is a Spiritual Issue", verse: "Proverbs 22:7", text: "The rich rule over the poor, and the borrower is slave to the lender. Scripture does not say debt is always sinful, but it does say debt always costs you something beyond money: it costs you freedom. The person carrying debt works for creditors before they work for their family, their neighbor, or the kingdom. This is not merely a financial observation — it is a theological one. Freedom is part of what Christ purchased on the cross, and debt of every kind is worth examining in that light." },
  { title: "Owe Nothing to Anyone — Paul's Radical Standard for Christian Life", verse: "Romans 13:8", text: "Let no debt remain outstanding, except the continuing debt to love one another. Paul's instruction in Romans 13 is placed in the context of living as citizens of God's kingdom under earthly authorities. The only debt he endorses is the endless one — love. Financial obligations that are borrowed and repaid as agreed are not condemned, but Paul's vision of the Christian life does not include carrying long-term consumer debt as a normal condition. The freedom to love, give, and serve is reduced whenever debt demands its payment first." },
  { title: "Debt Limits Generosity — the Hidden Spiritual Cost of What We Owe", verse: "Luke 21:4", text: "All these people gave their gifts out of their wealth; but she out of her poverty put in all she had to live on. Debt does not just drain money — it drains generosity. The person who owes $40,000 in consumer debt cannot give freely; every dollar of potential generosity is already spoken for. The widow whom Jesus praised had nothing owed to anyone — her giving was unencumbered. The path to radical generosity almost always runs through debt freedom first. Reducing debt is not merely financial prudence; it is preparation for greater faithfulness." },
  { title: "Joseph in Egypt — Prudence, Planning, and Preparation as Faithfulness", verse: "Genesis 41:34-36", text: "Let Pharaoh appoint commissioners over the land to take a fifth of the harvest of Egypt during the seven years of abundance. Store up all the food of these good years that are coming under the authority of Pharaoh, to be kept in the cities for food. This food should be held in reserve for the country, to be used during the seven years of famine. Joseph's model is one of deliberate saving in abundance to prepare for scarcity — the opposite of borrowing against the future to fund present consumption. Wise financial stewardship mirrors Joseph's pattern: live beneath your means, build margins, and let preparation enable generosity when the time comes." },
  { title: "Contentment vs. Keeping Up With Neighbors — the Root of Most Debt", verse: "Hebrews 13:5", text: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' Most personal debt is not the result of catastrophe — it is the result of discontent. The culture of comparison and consumption drives spending beyond income, which drives debt, which drives bondage. The antidote Scripture prescribes is not financial technique first but contentment — a settled conviction that God's presence and provision are sufficient, and that what I have now is enough to be grateful for and faithful with." },
];

const voices = [
  { id: "dr", name: "Dave Ramsey", role: "Author, Financial Peace; Radio Host", quote: "You must gain control over your money or the lack of it will forever control you. Debt is not a tool — it is a product sold by banks. The paid-off home mortgage has replaced the BMW as the status symbol of choice. Live like no one else now so that later you can live — and give — like no one else.", bio: "Ramsey's Financial Peace University has guided millions of Christian households out of debt through his Baby Steps framework — emergency fund, debt snowball, investing, and giving. His program is unapologetically biblical in its framing: debt freedom is not just financial success, it is obedience to the principle that the borrower is slave to the lender. His practical tools are among the most tested and field-proven in Christian financial ministry." },
  { id: "ra", name: "Randy Alcorn", role: "Author, Money Possessions and Eternity; Eternal Perspective Ministries", quote: "The issue is not whether it is legal or even culturally acceptable to go into debt. The question is whether debt reflects the values of God's kingdom — contentment, generosity, freedom, trust in God's provision. In many cases it does not. The deepest problem with debt is not the interest rate; it is what it says about what we believe.", bio: "Alcorn's Money Possessions and Eternity is one of the most theologically thorough treatments of Christian financial stewardship available. He addresses debt not primarily as a budgeting problem but as a discipleship issue — a reflection of what we trust, what we value, and where we believe security comes from. His work situates every financial decision in the context of eternity and the coming kingdom." },
  { id: "cf", name: "Crown Financial Ministries", role: "Founded by Larry Burkett; Biblical Financial Stewardship", quote: "God owns it all. We are managers — stewards — of what he has entrusted to us for a season. Every financial decision is a spiritual decision about whose resources these are and what he would have us do with them. Debt taken on carelessly is a presumption on God's future provision and a claim on resources that belong to him.", bio: "Crown Financial Ministries continues the legacy of Larry Burkett's biblical financial teaching, which was among the first to bring systematic stewardship theology to bear on personal finance. Their Small Group Study walks through Scripture's teaching on ownership, contentment, giving, saving, and debt — providing a complete theological and practical framework for Christians seeking financial faithfulness." },
];

const practices = [
  { icon: "📊", title: "Zero-Based Budgeting — Give Every Dollar a Name Before the Month Begins", text: "A zero-based budget assigns every dollar of income to a specific category before the month starts — income minus all expenses, savings, and giving equals zero. Nothing is unaccounted for. This practice makes financial decisions intentional rather than reactive, and it is the foundation from which debt payoff becomes possible. Many people discover, when they first write out a zero-based budget, that they have been spending significantly more than they realized — and that the margin to begin debt repayment was available all along." },
  { icon: "❄️", title: "The Debt Snowball — Attack Small Debts First for Momentum and Motivation", text: "List all debts smallest to largest by balance, regardless of interest rate. Pay minimums on all debts. Throw every available dollar at the smallest balance until it is gone. Then roll that payment to the next smallest. The snowball method is not mathematically optimal — the avalanche method (highest interest first) saves more in interest. But the snowball wins psychologically: each paid-off debt is a concrete victory that builds confidence, motivation, and momentum. For most people, behavior change requires wins, and the snowball provides them." },
  { icon: "🏦", title: "Emergency Fund — Before Paying Extra on Debt, Build a $1,000 Buffer", text: "Before attacking debt aggressively, save a starter emergency fund of $1,000. This prevents small emergencies — car repairs, medical bills, unexpected expenses — from requiring new debt while you are trying to get out. The emergency fund is not an investment; it is insurance against backward progress. Once all non-mortgage debt is paid off, the emergency fund grows to three to six months of living expenses — at which point you have the margin that makes future debt unnecessary." },
  { icon: "🤝", title: "Accountability — Tell Someone Your Numbers and Your Plan", text: "Financial secrecy enables continued debt. Find an accountability partner — a trusted friend, a financial coach, or a spouse who is equally committed — and share your actual numbers: income, debts, budget, progress. Schedule regular check-ins. The research on behavior change is clear: people who tell someone else their goal and report progress toward it are significantly more likely to achieve it. Financial accountability is not about shame; it is about inviting someone into the process of transformation so that you are not fighting alone." },
  { icon: "🎁", title: "Give First, Even in Debt — Generosity as Faith and Discipline", text: "The instinct when in debt is to cut all giving until the debt is paid. Scripture's pattern is different: the tithe and generosity are exercises of faith that precede and enable financial restoration, not rewards that follow it. Giving first — even a small percentage when in deep debt — keeps the heart rightly ordered, reminds us that we are stewards not owners, and trains the generosity that debt freedom is meant to fund. Many Christians testify that giving during their debt repayment journey was spiritually formative in ways that shaped their long-term stewardship." },
];

const scriptures = [
  { verse: "Proverbs 22:7", text: "The rich rule over the poor, and the borrower is slave to the lender." },
  { verse: "Romans 13:8", text: "Let no debt remain outstanding, except the continuing debt to love one another, for whoever loves others has fulfilled the law." },
  { verse: "Luke 14:28-30", text: "Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost to see if you have enough money to complete it? For if you lay the foundation and are not able to finish it, everyone who sees it will ridicule you, saying, 'This person began to build and wasn't able to finish.'" },
  { verse: "Hebrews 13:5", text: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.'" },
  { verse: "Matthew 6:24", text: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money." },
  { verse: "Philippians 4:11", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation." },
];

type DFEntry = { id: string; date: string; situation: string; vision: string; step: string };

export default function DebtFreedomChristianPage() {
  const [tab, setTab] = useState("theology");
  const [dfJournal, setDfJournal] = useState<DFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_debtfreedom_entries") ?? "[]"); } catch { return []; }
  });
  const [jSituation, setJSituation] = useState("");
  const [jVision, setJVision] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_debtfreedom_entries", JSON.stringify(dfJournal)); } catch {}
  }, [dfJournal]);

  function saveEntry() {
    if (!jSituation.trim() && !jVision.trim()) return;
    setDfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), situation: jSituation, vision: jVision, step: jStep }, ...prev]);
    setJSituation(""); setJVision(""); setJStep("");
  }
  function deleteEntry(id: string) { setDfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Financial Stewardship</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Debt Freedom</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Getting out of debt from a Christian perspective — the theology of financial freedom, the practices that work, and the generosity that debt freedom makes possible.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Financial Stewardship Journal</h3>
                <textarea placeholder="What is my current debt situation, honestly?" value={jSituation} onChange={e => setJSituation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What would financial freedom enable me to do for God's kingdom and ministry?" value={jVision} onChange={e => setJVision(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What is one concrete step I will take this month toward debt freedom?" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {dfJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : dfJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.situation && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Situation:</strong> {e.situation}</p>}
                  {e.vision && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Vision:</strong> {e.vision}</p>}
                  {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "NKbxoqMEEXA", title: "Biblical Principles for Getting Out of Debt", channel: "Dave Ramsey", description: "Ramsey walks through the biblical case for debt freedom and introduces his Baby Steps framework — the practical path from debt bondage to financial peace that has worked for millions of households." },
                { videoId: "9lx1KB9g2co", title: "God's View of Money and Debt", channel: "Crown Financial Ministries", description: "An overview of what Scripture actually teaches about money, debt, and stewardship — situating financial decisions in the larger framework of God's ownership and our role as faithful managers." },
                { videoId: "IKe7S2bJRUo", title: "Contentment and the Secret of Enough", channel: "Desiring God", description: "On Philippians 4 and the theology of contentment — how Paul learned to be content in every circumstance, and what that settled contentment has to do with breaking the debt cycle driven by comparison and consumption." },
                { videoId: "R9HpOGQClMU", title: "Generosity, Debt, and Financial Freedom", channel: "Randy Alcorn / Eternal Perspective Ministries", description: "Alcorn on the relationship between generosity and financial freedom — why the path to radical giving almost always runs through debt freedom, and how to keep giving even while getting out of debt." },
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
