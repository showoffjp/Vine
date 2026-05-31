"use client";
import { useState } from "react";

interface BudgetCategory {
  name: string;
  recommended: number;
  actual: number;
  color: string;
}

const PRINCIPLES = [
  {
    id: "ownership",
    title: "God Owns Everything",
    icon: "🌍",
    verse: "The earth is the Lord's, and everything in it, the world, and all who live in it.",
    verseRef: "Psalm 24:1",
    content: `The foundation of Christian financial stewardship is not a budget or a giving percentage—it is a worldview shift. Everything you have belongs to God. Your income, your house, your investments, your time: you are a manager, not an owner. This single conviction changes every financial decision.\n\nWhen you believe God owns it all, generosity becomes natural rather than sacrificial. When you believe you earned it yourself, giving feels like loss. The "owner" mentality produces anxiety (What if I lose it?); the "manager" mentality produces freedom (I hold it loosely because it was never mine).`,
  },
  {
    id: "tithe",
    title: "The Tithe: Foundation of Giving",
    icon: "💸",
    verse: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty.",
    verseRef: "Malachi 3:10",
    content: `The tithe—10% of income—is the biblical starting point for generosity, not the ceiling. Malachi 3:10 is one of the few places in Scripture where God explicitly invites being tested. The challenge: "Try this and see if I won't open the floodgates of blessing."\n\nThe New Testament affirms cheerful generosity (2 Corinthians 9:7) rather than specifying a percentage, but Jesus commends the tithe while condemning legalism (Matthew 23:23). Most financial teachers advise: begin with 10% as a discipline, then grow from there as you experience God's faithfulness and your own transformed relationship with money.`,
  },
  {
    id: "debt",
    title: "Getting Out of Debt",
    icon: "⛓️",
    verse: "The rich rules over the poor, and the borrower is the slave of the lender.",
    verseRef: "Proverbs 22:7",
    content: `Proverbs 22:7 is unflinching: debt is bondage. It limits your options, increases stress, and reduces the margin you need to respond to God's calls—both to give generously and to take career or ministry risks.\n\nThe two most effective debt payoff methods: (1) Debt Snowball—pay minimums on all debt, throw extra at the smallest balance. The psychological wins build momentum. (2) Debt Avalanche—pay minimums on all, throw extra at the highest interest rate first. Mathematically optimal. Both work. Pick the one you'll actually follow.\n\nKey principle: Stop adding debt while paying it off. Cut cards if necessary. This is not legalism—it is wisdom.`,
  },
  {
    id: "generosity",
    title: "Radical Generosity",
    icon: "🎁",
    verse: "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.",
    verseRef: "Luke 6:38",
    content: `Jesus talked about money more than heaven and hell combined—not because money is the most important thing, but because it is the most reliable revealer of our actual affections. Where your treasure is, there your heart will be also (Matthew 6:21).\n\nRadical generosity is not giving out of surplus—it is giving in a way that affects your lifestyle. The widow's two mites (Mark 12:41–44) are celebrated over the large gifts of the rich precisely because she gave sacrificially. The question is not "How much should I give?" but "How much do I really need to keep?"`,
  },
  {
    id: "savings",
    title: "Saving with Wisdom",
    icon: "🏦",
    verse: "The wise man saves for the future, but the foolish man spends whatever he gets.",
    verseRef: "Proverbs 21:20 (NLT)",
    content: `Saving is not hoarding—it is wisdom. Proverbs celebrates the ant who stores food in summer (Proverbs 6:6–8). Joseph stores grain during seven years of plenty to sustain Egypt through seven years of famine (Genesis 41). Planning for the future is not faithlessness; it is stewardship.\n\nPractical savings priorities: (1) Emergency fund: 3–6 months of expenses. This is not savings—it's insurance against debt. (2) Retirement: start early, compound interest is remarkable. (3) Goal savings: house down payment, education, major purchases without debt. Saving is freedom; it gives you options to say yes to God's invitations.`,
  },
  {
    id: "contentment",
    title: "The Secret of Contentment",
    icon: "✨",
    verse: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound.",
    verseRef: "Philippians 4:11–12",
    content: `Paul says he learned contentment—it was not natural to him. Contentment is a spiritual discipline, not a personality trait. In a consumption economy that profits from your discontentment, choosing to be satisfied with what you have is an act of resistance and worship.\n\nContentment does not mean passivity about your circumstances. It means your sense of well-being is not driven by what you have or don't have. It means you can celebrate others' prosperity without envy, and face your own lack without despair. This is only possible if your security is in God rather than in your net worth.`,
  },
];

const GUIDES = [
  { title: "The 10/10/80 Rule", desc: "Give 10%, save 10%, live on 80%. Simple, sustainable, and transformative when practiced consistently.", icon: "📊" },
  { title: "Dave Ramsey's Baby Steps", desc: "7-step financial peace plan: $1K emergency fund → pay off debt → 3-6 months savings → invest 15% → college fund → pay off home → build wealth & give.", icon: "👶" },
  { title: "Crown Financial Principles", desc: "Biblical financial framework from Crown Ministries: distinguishing needs/wants/desires, avoiding debt, contentment practices.", icon: "👑" },
  { title: "Zero-Based Budgeting", desc: "Every dollar assigned a purpose before the month begins. Income minus expenses = 0. Forces intentionality about where money goes.", icon: "0️⃣" },
];

const GIVING_VERSES = [
  { verse: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.", ref: "2 Corinthians 9:7" },
  { verse: "Command those who are rich in this present world not to be arrogant nor to put their hope in wealth, which is so uncertain, but to put their hope in God, who richly provides us with everything for our enjoyment.", ref: "1 Timothy 6:17" },
  { verse: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.", ref: "Matthew 6:24" },
  { verse: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.", ref: "Proverbs 3:9–10" },
  { verse: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it.", ref: "1 Timothy 6:6–7" },
  { verse: "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.", ref: "Proverbs 19:17" },
];

const DEFAULT_BUDGET: BudgetCategory[] = [
  { name: "Giving / Tithe", recommended: 10, actual: 7, color: "#00FF88" },
  { name: "Housing", recommended: 25, actual: 30, color: "#4FC3F7" },
  { name: "Food", recommended: 12, actual: 15, color: "#FF8C42" },
  { name: "Transportation", recommended: 10, actual: 12, color: "#FFB347" },
  { name: "Insurance", recommended: 5, actual: 5, color: "#9898B3" },
  { name: "Savings / Emergency", recommended: 10, actual: 6, color: "#6B4FBB" },
  { name: "Personal", recommended: 5, actual: 8, color: "#FF6B9D" },
  { name: "Entertainment", recommended: 5, actual: 7, color: "#E57373" },
  { name: "Retirement", recommended: 10, actual: 5, color: "#A080FF" },
  { name: "Other", recommended: 8, actual: 5, color: "#78909C" },
];

const VOICES_STEW = [
  { id: "wesley-s", name: "John Wesley", era: "1703-1791", context: "Sermon 50: The Use of Money; Sermon 28: On the Right Use of Money; leader of the Methodist revival", bio: "Wesley's three-part financial maxim is the most quoted Christian financial principle in history: 'Gain all you can, save all you can, give all you can.' But the maxim is often quoted without its qualifications: gain by honest labor, not at the expense of others' health or souls; save by cutting waste and extravagance, not by hoarding; give all you can — and Wesley meant it. He lived on a modest income his entire life despite earning significant royalties, giving away most of what he received. By the time he died, his estate was four silver spoons and a preaching gown. His sermon 'On the Right Use of Money' is the most practically useful piece of financial theology in the evangelical tradition.", quote: "Gain all you can. Save all you can. Give all you can.", contribution: "Established the most memorable and actionable framework for Christian financial stewardship in the English language. Wesley's personal example — living generously throughout his life — gave his financial theology an authority that mere preaching could not." },
  { id: "alcorn-s", name: "Randy Alcorn", era: "b. 1951", context: "Money, Possessions, and Eternity (1989, revised 2003); The Treasure Principle (2001)", bio: "Alcorn's Money, Possessions, and Eternity is the most comprehensive biblical theology of financial stewardship written for a popular evangelical audience. He systematically addresses every financial question from a biblical perspective: ownership, giving, debt, saving, investing, lifestyle choices, prosperity theology, estate planning. His shorter The Treasure Principle distills the entire project into six 'keys' built around Matthew 6:19-21. Alcorn practices what he preaches: after his publishers sued him for giving royalties to pro-life organizations, he structured his life so that he makes minimum wage and donates all royalties to charity.", quote: "You can't take it with you, but you can send it ahead.", contribution: "Provided the most systematic biblical treatment of money and possessions available to evangelical readers. By giving away all his royalties, Alcorn made his financial theology credible in a way that preaching alone never could." },
  { id: "letourneau", name: "R.G. LeTourneau", era: "1888-1969", context: "Mover of Men and Mountains (autobiography, 1960); industrial entrepreneur and philanthropist", bio: "LeTourneau was one of America's greatest industrial inventors — creator of the earthmoving equipment used to build highways, dams, and airports worldwide — and one of its most extraordinary Christian philanthropists. At the height of his business success, he reversed the typical tithing formula: instead of giving 10% and keeping 90%, he gave 90% and kept 10%. His autobiography is one of the most compelling accounts of what happens when a Christian takes radical stewardship seriously: he became wealthier the more he gave. He saw his businesses as 'God's factory' and himself as the manager, not the owner.", quote: "I shovel money out, and God shovels it back — and God has a bigger shovel.", contribution: "Demonstrated in one extraordinary life that radical financial generosity — giving 90% — is both financially possible and spiritually transforming. His story has inspired generations of Christian business leaders to rethink the relationship between profit and generosity." },
  { id: "dayton", name: "Howard Dayton", era: "b. 1943", context: "Your Money Counts (1996); Compass Finances God's Way; Crown Financial Ministries", bio: "Dayton co-founded Crown Financial Ministries (now the world's largest Christian financial organization) after conducting a comprehensive personal study of every biblical passage on money and possessions — discovering more than 2,350 verses on the subject. His Your Money Counts has guided millions of families through a biblically-based approach to budgeting, debt elimination, savings, and giving. His ministry has trained financial counselors in over 50 countries. Dayton's genius is translating theological conviction about stewardship into practical, trackable financial habits.", quote: "The Lord owns it all. Our ownership is an illusion. We are managers, not owners, and one day we will give account for how we managed what he entrusted to us.", contribution: "Built the most successful Christian financial education organization in the world. Crown Financial Ministries has helped millions of families practically apply biblical stewardship principles through structured courses, counseling, and tools." },
  { id: "bluedorn", name: "Ron Blue", era: "b. 1942", context: "Master Your Money (1986); Splitting Heirs (2004); Kingdom Advisors founder", bio: "Ron Blue is a Certified Financial Planner who spent decades as a secular financial planner before committing his practice to Christian clients. His Master Your Money remains the most practically rigorous and biblically grounded personal finance book in the evangelical market — moving from theology to cash flow management, debt, savings, and estate planning with professional precision. He founded Kingdom Advisors, a professional organization for Christian financial planners. His approach: the biblical principles of financial management are better than secular wisdom, and Christians should understand and apply them with the same rigor they apply to other areas of life.", quote: "Financial freedom is not a function of how much money you have, but of how well you manage what God has entrusted to you.", contribution: "Brought professional-grade financial planning methodology into the Christian stewardship tradition. Master Your Money made sophisticated financial planning accessible to ordinary Christians who could not afford professional advice." },
];

export default function StewardshipPage() {
  const [tab, setTab] = useState<"principles" | "voices" | "budget" | "giving">("principles");
  const [selectedVoice, setSelectedVoice] = useState("wesley-s");
  const voiceItem = VOICES_STEW.find(v => v.id === selectedVoice)!;
  const [openPrinciple, setOpenPrinciple] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_stewardship_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [income, setIncome] = useState(() => {
    try { return parseInt(localStorage.getItem("vine_stewardship_income") || "5000", 10); } catch { return 5000; }
  });
  const [budget] = useState<BudgetCategory[]>(DEFAULT_BUDGET);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_stewardship_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const titheAmount = (income * 0.1).toFixed(0);
  const savingsAmount = (income * 0.1).toFixed(0);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Stewardship & Finances</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Biblical wisdom for managing money, debt, and generosity</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {([["principles", "Principles"], ["voices", "Voices"], ["budget", "Budget Calculator"], ["giving", "Giving & Verses"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Principles Tab */}
        {tab === "principles" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {PRINCIPLES.map(p => (
                <div key={p.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openPrinciple === p.id ? "rgba(0,255,136,0.3)" : "#1E1E32"}` }}>
                  <div onClick={() => setOpenPrinciple(openPrinciple === p.id ? null : p.id)}
                    style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center", flex: 1 }}>
                      <span style={{ fontSize: 26 }}>{p.icon}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: openPrinciple === p.id ? "#00FF88" : "#F2F2F8", marginBottom: 4 }}>{p.title}</h3>
                        <p style={{ fontSize: 12, color: "#00FF88", fontStyle: "italic" }}>{p.verseRef}</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0, marginLeft: 12 }}>
                      <button onClick={e => { e.stopPropagation(); toggleSave(p.id); }}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedIds.has(p.id) ? "#FFD700" : "#4A4A68" }}>
                        {savedIds.has(p.id) ? "★" : "☆"}
                      </button>
                      <span style={{ color: "#6A6A88", fontSize: 20 }}>{openPrinciple === p.id ? "−" : "+"}</span>
                    </div>
                  </div>
                  {openPrinciple === p.id && (
                    <div style={{ padding: "0 22px 22px", borderTop: "1px solid #1E1E32" }}>
                      <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, margin: "16px 0", borderLeft: "3px solid #00FF88" }}>
                        <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>"{p.verse}"</p>
                        <p style={{ fontSize: 12, color: "#00FF88", marginTop: 6 }}>— {p.verseRef}</p>
                      </div>
                      {p.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: i > 0 ? 12 : 0 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Frameworks */}
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#F2F2F8" }}>Popular Christian Financial Frameworks</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {GUIDES.map(g => (
                <div key={g.title} style={{ background: "#12121F", borderRadius: 14, padding: 18, border: "1px solid #1E1E32" }}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{g.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{g.title}</h3>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6 }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_STEW.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#00FF88", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #00FF88", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#00FF88", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.1)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Stewardship Theology</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "budget" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ background: "#12121F", borderRadius: 20, padding: 28, marginBottom: 28, border: "1px solid #1E1E32" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#00FF88" }}>Monthly Income</h2>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 20, color: "#9898B3" }}>$</span>
                <input type="number" value={income} onChange={e => {
                  const v = parseInt(e.target.value, 10) || 0;
                  setIncome(v);
                  try { localStorage.setItem("vine_stewardship_income", String(v)); } catch {}
                }}
                  style={{ flex: 1, padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 18, fontWeight: 700, outline: "none" }} />
                <span style={{ fontSize: 14, color: "#9898B3" }}>/ month</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(0,255,136,0.08)", borderRadius: 12, padding: "10px 16px", border: "1px solid rgba(0,255,136,0.2)" }}>
                  <p style={{ fontSize: 11, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1 }}>Tithe (10%)</p>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#00FF88" }}>${titheAmount}</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.08)", borderRadius: 12, padding: "10px 16px", border: "1px solid rgba(107,79,187,0.2)" }}>
                  <p style={{ fontSize: 11, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1 }}>Savings (10%)</p>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#A080FF" }}>${savingsAmount}</p>
                </div>
                <div style={{ background: "rgba(79,195,247,0.08)", borderRadius: 12, padding: "10px 16px", border: "1px solid rgba(79,195,247,0.2)" }}>
                  <p style={{ fontSize: 11, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1 }}>Live On (80%)</p>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#4FC3F7" }}>${(income * 0.8).toFixed(0)}</p>
                </div>
              </div>
            </div>

            {/* Budget breakdown */}
            <div style={{ background: "#12121F", borderRadius: 20, padding: 28, border: "1px solid #1E1E32" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>Recommended Budget Breakdown</h2>
              <p style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>Crown Financial guidelines for a balanced budget</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {budget.map(cat => {
                  const recommendedDollar = (income * cat.recommended / 100).toFixed(0);
                  const actualDollar = (income * cat.actual / 100).toFixed(0);
                  const overBudget = cat.actual > cat.recommended;
                  return (
                    <div key={cat.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>{cat.name}</span>
                        <div style={{ display: "flex", gap: 12 }}>
                          <span style={{ fontSize: 13, color: "#9898B3" }}>Rec: {cat.recommended}% (${recommendedDollar})</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: overBudget ? "#EF4444" : "#00FF88" }}>
                            {overBudget ? "▲" : "✓"} {cat.actual}% (${actualDollar})
                          </span>
                        </div>
                      </div>
                      <div style={{ height: 8, background: "#1E1E32", borderRadius: 4, overflow: "hidden", position: "relative" }}>
                        <div style={{ height: "100%", width: `${cat.recommended}%`, background: `${cat.color}30`, borderRadius: 4, position: "absolute" }} />
                        <div style={{ height: "100%", width: `${Math.min(cat.actual, 100)}%`, background: cat.color, borderRadius: 4, opacity: 0.8 }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Giving & Verses Tab */}
        {tab === "giving" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16, marginBottom: 32 }}>
              {GIVING_VERSES.map((v, i) => (
                <div key={i} style={{ background: "#12121F", borderRadius: 16, padding: 22, border: "1px solid #1E1E32" }}>
                  <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.7, marginBottom: 12 }}>"{v.verse}"</p>
                  <p style={{ fontSize: 13, color: "#00FF88", fontWeight: 700 }}>— {v.ref}</p>
                </div>
              ))}
            </div>

            {/* Giving challenge */}
            <div style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(107,79,187,0.08))", borderRadius: 20, padding: 28, border: "1px solid rgba(0,255,136,0.2)", textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>The 90-Day Giving Challenge</h2>
              <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 20px" }}>
                God says in Malachi 3:10: "Test me in this." Commit to tithing for 90 days. Track what God does. If at the end of 90 days you don't see his faithfulness, you can always go back.
              </p>
              <p style={{ fontSize: 14, color: "#9898B3", fontStyle: "italic" }}>
                "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously." — 2 Corinthians 9:6
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
