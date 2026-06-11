"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Financial Crisis Is Not Spiritual Failure",
    body: "The prosperity gospel teaches that financial blessing is the reward of faith and obedience. By this logic, financial crisis is evidence of spiritual failure. This is not the teaching of Jesus or the apostles. Jesus himself had no place to lay his head (Luke 9:58). Paul described himself as 'in need' and knew both 'plenty and hunger, abundance and need' (Phil 4:11–12). Job lost everything while being the most righteous man of his generation. Financial hardship is not evidence of God's displeasure — it is part of living in a fallen, uncertain world.",
  },
  {
    title: "Money Is a Tool, Not a Measure of Worth",
    body: "The Bible's teaching on money is nuanced: it can be a gift and a resource for good; it can also be an idol that competes with God ('you cannot serve God and money' — Matt 6:24). But at no point does Scripture equate a person's financial status with their spiritual worth or God's favor. The rich young ruler was not blessed because he was wealthy — he was called to give it away. Zacchaeus was transformed and gave half his wealth to the poor. Wealth and poverty are both spiritually neutral categories; what matters is the heart's relationship to money.",
  },
  {
    title: "Bankruptcy Is Rooted in Biblical Law",
    body: "The concept of debt forgiveness is not modern — it is ancient and biblical. The Year of Jubilee (Leviticus 25) mandated the forgiveness of all debts and the return of property every fifty years. The Sabbath year (Deut 15) mandated release of debts every seven years. The underlying principle is that financial catastrophe should not be permanent and should not condemn a person to perpetual bondage. Legal bankruptcy protection is, in its spirit, deeply consonant with biblical economics. Pursuing it, when appropriate, is not a moral failure.",
  },
  {
    title: "God Provides — Often Through Unexpected Channels",
    body: "The Hebrew Bible's narratives of provision are rarely about supernatural multiplication from nowhere. More often, they involve human instrumentality — neighbors sharing, communities gathering, leaders redistributing. Elijah was fed by ravens (supernatural) and then by a widow (human). The early church had 'no one in need' because 'those who had possessions were selling them and giving to all, as any had need' (Acts 4:34–35). When you receive help from a community, a nonprofit, a church, or a food bank, you are experiencing biblical provision — not charity you should be ashamed of.",
  },
  {
    title: "Contentment Is a Spiritual Practice, Not a Financial State",
    body: "Paul writes 'I have learned, in whatever situation I am, to be content' (Phil 4:11). This is a learned skill, not a natural disposition. Contentment does not mean satisfaction with injustice or passive acceptance of poverty. It means that our fundamental security and sufficiency come from God, not from our financial status. Learning contentment in financial crisis is painful spiritual formation — and it is real. The person who discovers that they have God even when they have nothing has discovered something the prosperous cannot always access.",
  },
];

const voices = [
  {
    name: "Dave Ramsey",
    title: "Author, 'The Total Money Makeover' — Personal Finance Radio Host",
    quote: "I've been broke. Not just a little broke — bankrupt, foreclosure, the whole thing. The shame almost killed me. And then I found out that money problems are fixable. It takes time, it takes work, and it requires honesty about what you owe and who you owe it to. But it is fixable. I know because I fixed mine.",
  },
  {
    name: "Lysa TerKeurst",
    title: "Author, 'It's Not Supposed to Be This Way'",
    quote: "When the bottom fell out financially, I had to confront what I actually believed about God's provision. Not what I said I believed in church — what I actually believed when I couldn't pay my bills. What I found, slowly and painfully, is that He is faithful in ways that don't look like what I expected provision to look like.",
  },
  {
    name: "Bob Lotich",
    title: "Founder, SeedTime Money — Christian Personal Finance",
    quote: "Financial crisis is often the beginning of the most important money education of a person's life. We don't learn how money works until we have to. The crisis, as terrible as it is, often becomes the turning point where people build a relationship with money that is actually healthy and sustainable.",
  },
  {
    name: "Chuck Bentley",
    title: "CEO, Crown Financial Ministries",
    quote: "There is no shame in financial hardship. The shame comes when we hide it — from God, from our family, from our community. The moment of telling the truth about where you are financially is the moment real help becomes possible. You cannot fix a problem you won't acknowledge.",
  },
];

const practices = [
  {
    title: "Honest Assessment — Face the Numbers",
    body: "The first step is always clarity: make a complete list of what you owe, to whom, at what interest rate, and the minimum payment. Make a list of monthly income and essential expenses. The numbers, however frightening, are fixed and workable. The anxiety of not knowing is always worse than the reality. Use a spreadsheet, a piece of paper, or a free budgeting app (YNAB, EveryDollar, Mint) to make the picture visible.",
  },
  {
    title: "Non-Profit Credit Counseling",
    body: "NFCC (National Foundation for Credit Counseling, nfcc.org) member agencies offer free or low-cost financial counseling, debt management plans, and bankruptcy guidance from certified counselors. This is different from for-profit debt settlement companies (which often have predatory fee structures). An NFCC counselor can help you assess whether a debt management plan, bankruptcy, debt negotiation, or another approach is appropriate for your situation.",
  },
  {
    title: "Bankruptcy as a Tool, Not a Failure",
    body: "Chapter 7 bankruptcy eliminates most unsecured debt and can provide a genuine fresh start for those who qualify. Chapter 13 allows reorganization and repayment over 3–5 years. Both are legal tools specifically designed for situations of overwhelming debt. A free consultation with a bankruptcy attorney (many offer these) can clarify which option fits your situation. Legal aid organizations in most areas provide bankruptcy assistance at reduced or no cost for low-income individuals.",
  },
  {
    title: "Community and Church Resources",
    body: "Many churches have benevolence funds for members facing acute financial crises. 211 (call or text 211) connects people with local social services including emergency financial assistance, utility assistance, food banks, and housing support. The Salvation Army, St. Vincent de Paul, and local community action agencies also provide emergency financial assistance without religious requirement. Accepting help is not shameful — it is the body of Christ functioning as designed.",
  },
  {
    title: "Rebuilding — One Practical Step at a Time",
    body: "After the crisis stabilizes, rebuilding requires a budget that actually works, a small emergency fund (even $500–$1,000 provides significant stability), and a plan to address remaining debt. Crown Financial Ministries (crown.org) and Dave Ramsey's Financial Peace University (both available in many churches) provide structured paths through this process. The goal is not wealth — it is margin and stability: the ability to handle the next unexpected expense without catastrophe.",
  },
  {
    title: "Addressing the Shame",
    body: "Financial crisis carries significant shame in American culture, and particularly in church culture where prosperity is sometimes conflated with blessing. This shame often prevents people from seeking help until the crisis is much worse than it needed to be. Consider telling your pastor or a trusted friend. Consider seeing a counselor who can help you separate your worth from your financial status. The shame is not the truth. The truth is that you are in a hard situation that is fixable with time and help.",
  },
];

const scriptures = [
  {
    ref: "Philippians 4:11–13",
    text: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.",
    note: "Paul knew both plenty and hunger. Contentment is learned in the fire of experience — not given to those who never face need. The 'all things' he can do through Christ includes facing financial crisis.",
  },
  {
    ref: "Matthew 6:19–21",
    text: "Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven... For where your treasure is, there your heart will be also.",
    note: "Financial crisis often reveals where our real treasure has been. This is not condemnation — it is an invitation. The goods we have lost cannot be our ultimate goods. What remains when everything is gone?",
  },
  {
    ref: "Psalm 37:25",
    text: "I have been young, and now am old, yet I have not seen the righteous forsaken or his children begging for bread.",
    note: "David's testimony across a lifetime: the righteous are not ultimately forsaken. This does not promise immunity from hardship — but it promises that God does not abandon those who belong to Him.",
  },
  {
    ref: "Luke 12:22–24",
    text: "Do not be anxious about your life, what you will eat, nor about your body, what you will put on. For life is more than food, and the body more than clothing. Consider the ravens: they neither sow nor reap, they have neither storehouse nor barn, and yet God feeds them.",
    note: "Jesus knew that food, clothing, and material provision would be a source of genuine anxiety for His followers. He does not dismiss the worry — He redirects it. God who feeds the ravens knows your need.",
  },
  {
    ref: "Deuteronomy 15:1–2",
    text: "At the end of every seven years you shall grant a release. And this is the manner of the release: every creditor shall release what he has lent to his neighbor. He shall not exact it of his neighbor, his brother, because the LORD's release has been proclaimed.",
    note: "Debt forgiveness is not a modern legal invention — it is ancient biblical law. The concept of a fresh start from overwhelming debt is rooted in God's own economic design for His people.",
  },
  {
    ref: "Acts 4:34–35",
    text: "There was not a needy person among them, for as many as were owners of lands or houses sold them and brought the proceeds of what was sold and laid it at the apostles' feet, and it was distributed to each as any had need.",
    note: "The early church's answer to financial need: redistribution through community. This is still the calling. When you receive help from the body of Christ, you are receiving what the body was made to give.",
  },
];

const videos = [
  { id: "mC-zw0zCCtg", title: "Jireh — Elevation Worship & Maverick City" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "QS04WbSnxok", title: "Trust In God — Elevation Worship" },
  { id: "j9phNEaPrv8", title: "Psalms Overview — BibleProject" },
];

const JOURNAL_KEY = "vine_financial_crisis_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What is the most frightening part of my financial situation right now? Can I name it specifically?",
    "What shame am I carrying about money that may not be the truth about my worth?",
    "What is one concrete step I can take this week toward clarity or help?",
    "When has God provided in the past in ways I didn't expect? What does that tell me about now?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (<li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>))}
        </ul>
      </div>
      <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write freely — your words are private and stay only on your device..." rows={5} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FinancialCrisisBankruptcyChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Financial Crisis & Faith</div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>Financial Crisis<br /><span style={{ color: ACCENT }}>God's Economy Is Not Ours</span></h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>For Christians navigating debt, job loss, bankruptcy, or financial collapse — your worth is not your net worth. Bankruptcy law is rooted in Scripture's Year of Jubilee. The early church had no one in need because they shared. Help is available and accepting it is not shameful.</p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Emergency help: Dial <strong>211</strong> for local financial assistance<br />
                <span style={{ fontWeight: 400, color: MUTED }}>NFCC Credit Counseling: nfcc.org | Crown Financial: crown.org | 988 Crisis: call or text 988</span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (<button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>{t}</button>))}
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {activeTab === "Theology" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{theology.map((item, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p></div>))}</div>)}
          {activeTab === "Voices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{voices.map((v, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p><div><div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div><div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div></div></div>))}</div>)}
          {activeTab === "Practices" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{practices.map((p, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}><h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3><p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p></div>))}</div>)}
          {activeTab === "Scripture" && (<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{scriptures.map((s, i) => (<div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}><div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div><p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p></div>))}</div>)}
          {activeTab === "Journal" && <JournalTab />}
          {activeTab === "Videos" && (<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>{videos.map((v) => (<div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}><VideoEmbed videoId={v.id} title={v.title} /><div style={{ padding: "1rem 1.2rem" }}><p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p></div></div>))}</div>)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
