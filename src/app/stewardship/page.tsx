"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

interface BudgetCategory {
  name: string;
  recommended: number;
  actual: number;
  color: string;
}

type Tab = "principles" | "giving" | "voices" | "videos";

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

const GIVING_TIERS = [
  {
    id: "tithe-foundation",
    tier: "Tithe Foundation",
    percentage: "10%",
    title: "The Starting Floor",
    description: "Give what the law prescribes as a starting floor, not a ceiling. The tithe is not the summit of generosity — it is the base camp. Most Christians who struggle to give haven't started here consistently.",
    scriptureSupport: "Leviticus 27:30; Malachi 3:10",
    practicalSteps: [
      "Set up automatic transfer of 10% on every paycheck before any other bill",
      "Give to your local church first as the primary storehouse",
      "Track your giving as a discipline for 90 days",
      "Pray over each tithe as an act of worship, not obligation",
    ],
  },
  {
    id: "cheerful-giver",
    tier: "Cheerful Giver",
    percentage: "15-20%",
    title: "Beyond Obligation into Joy",
    description: "Give beyond the tithe as joy and capacity grow. The New Testament pattern is not less than the tithe but more — given freely, not under compulsion. As you experience God's faithfulness, generosity becomes a delight.",
    scriptureSupport: "2 Corinthians 9:6-7",
    practicalSteps: [
      "Identify one cause or ministry beyond your local church",
      "Give in response to specific answered prayers",
      "Increase giving by 1% each year until it creates noticeable lifestyle adjustment",
      "Involve your family in decisions about where the extra giving goes",
    ],
  },
  {
    id: "radical-generosity",
    tier: "Radical Generosity",
    percentage: "30%+",
    title: "Margin Discomfort",
    description: "Give at the level that creates margin discomfort — where you actually feel it. The widow who gave two mites gave everything she had. Jesus said she gave more than all the rich donors. Radical generosity is calibrated to sacrifice, not surplus.",
    scriptureSupport: "Luke 21:1-4 (widow’s mite)",
    practicalSteps: [
      "Ask: what lifestyle change would funding this require?",
      "Consider giving a windfall — bonus, tax return, or inheritance — in full",
      "Live on a 'giving budget': set a lifestyle ceiling and give the rest",
      "Pray specifically about areas where comfort is competing with calling",
    ],
  },
  {
    id: "kingdom-investor",
    tier: "Kingdom Investor",
    percentage: "50%+",
    title: "Living Below Your Means for the Kingdom",
    description: "Those given much are called to live modestly and give the rest. This is not for everyone in the same season — but it is a legitimate call on those with significant income or wealth. The question becomes: what is the minimum I need to live well, and what can I redirect toward eternity?",
    scriptureSupport: "Luke 12:48",
    practicalSteps: [
      "Define your 'enough' number — the lifestyle ceiling you will not exceed",
      "Redirect raises, promotions, and investment returns to giving",
      "Consider donor-advised funds or charitable trusts for tax-effective generosity",
      "Build a team of advisors who share a Kingdom vision for your resources",
    ],
  },
  {
    id: "sacrificial-offering",
    tier: "Sacrificial Offering",
    percentage: "Variable",
    title: "Crisis, Calling, and the Exceptional Gift",
    description: "Times of crisis or special calling that suspend normal giving patterns. The early church in Acts sold possessions to meet the need of the moment. This is not sustainable as a permanent budget line — it is a Spirit-prompted response to an extraordinary opportunity or urgent need.",
    scriptureSupport: "Acts 2:44-45",
    practicalSteps: [
      "Keep a portion of savings designated as 'available for emergency generosity'",
      "Stay alert to specific needs in your church or community that only you can meet",
      "When prompted, act quickly — delayed obedience is often no obedience",
      "Share what you did afterward with someone who can celebrate with you",
    ],
  },
];

const GIVING_VOICES = [
  {
    id: "wesley-gv",
    name: "John Wesley",
    era: "1703-1791",
    practice: "Lived on the same modest income his entire adult life even as his royalties grew — giving away everything above it",
    quote: "Make all you can, save all you can, give all you can.",
  },
  {
    id: "letourneau-gv",
    name: "R.G. LeTourneau",
    era: "1888-1969",
    practice: "Industrial magnate who inverted the tithe: gave 90% of his income to missions and kept 10% for living expenses",
    quote: "I shovel money out, and God shovels it back — and God has a bigger shovel.",
  },
  {
    id: "alcorn-gv",
    name: "Randy Alcorn",
    era: "b. 1951",
    practice: "Author of The Treasure Principle — gives away all royalties to charity; structured his income at minimum wage to enable maximum generosity",
    quote: "You can't take it with you, but you can send it ahead.",
  },
  {
    id: "chan-gv",
    name: "Francis Chan",
    era: "b. 1967",
    practice: "Gave away most royalties from Crazy Love and other books; sold his large home to move into a simpler house and redirect resources to the poor",
    quote: "Our greatest fear should not be of failure, but of succeeding at things in life that don't really matter.",
  },
];

const VOICES_STE = [
  {
    id: "wesley-sv",
    name: "John Wesley",
    era: "1703-1791",
    context: "Sermon 50: The Use of Money; leader of the Methodist revival",
    bio: "Wesley's three-part financial maxim is the most quoted Christian financial principle in history: gain all you can, save all you can, give all you can. But the maxim is often quoted without its qualifications: gain by honest labor, not at the expense of others' health or souls; save by cutting waste and extravagance, not by hoarding; give all you can — and Wesley meant it. He lived on a modest income his entire life despite earning significant royalties, giving away most of what he received. By the time he died, his estate was four silver spoons and a preaching gown.",
    quote: "Gain all you can. Save all you can. Give all you can.",
    contribution: "Established the most memorable and actionable framework for Christian financial stewardship in the English language. Wesley's personal example — living generously throughout his life — gave his financial theology an authority that mere preaching could not.",
  },
  {
    id: "alcorn-sv",
    name: "Randy Alcorn",
    era: "b. 1951",
    context: "Money, Possessions, and Eternity (1989, 2003); The Treasure Principle (2001)",
    bio: "Alcorn's Money, Possessions, and Eternity is the most comprehensive biblical theology of financial stewardship written for a popular evangelical audience. He systematically addresses every financial question from a biblical perspective: ownership, giving, debt, saving, investing, lifestyle choices, prosperity theology, estate planning. His shorter The Treasure Principle distills the entire project into six keys built around Matthew 6:19-21. Alcorn practices what he preaches: after his publishers sued him for giving royalties to pro-life organizations, he structured his life so that he makes minimum wage and donates all royalties to charity.",
    quote: "You can't take it with you, but you can send it ahead.",
    contribution: "Provided the most systematic biblical treatment of money and possessions available to evangelical readers. By giving away all his royalties, Alcorn made his financial theology credible in a way that preaching alone never could.",
  },
  {
    id: "ronblue-sv",
    name: "Ron Blue",
    era: "b. 1942",
    context: "Master Your Money (1986); Splitting Heirs (2004); Kingdom Advisors founder",
    bio: "Ron Blue is a Certified Financial Planner who spent decades as a secular financial planner before committing his practice to Christian clients. His Master Your Money remains the most practically rigorous and biblically grounded personal finance book in the evangelical market — moving from theology to cash flow management, debt, savings, and estate planning with professional precision. He founded Kingdom Advisors, a professional organization for Christian financial planners who integrate biblical principles with financial expertise.",
    quote: "Financial freedom is not a function of how much money you have, but of how well you manage what God has entrusted to you.",
    contribution: "Brought professional-grade financial planning methodology into the Christian stewardship tradition. Master Your Money made sophisticated financial planning accessible to ordinary Christians who could not afford professional advice.",
  },
  {
    id: "ramsey-sv",
    name: "Dave Ramsey",
    era: "b. 1960",
    context: "Financial Peace University; The Total Money Makeover (2003); The Ramsey Show",
    bio: "Ramsey built a personal finance empire on a simple premise: the Bible has practical, actionable financial wisdom that works in the real world. After going bankrupt in his late 20s, he rebuilt his finances using biblical principles and began teaching others. Financial Peace University has been taken by millions of families in churches across America. His Total Money Makeover's seven Baby Steps have guided more ordinary Americans out of debt than any other single program, Christian or secular.",
    quote: "Live like no one else, so later you can live like no one else — and give like no one else.",
    contribution: "Reached tens of millions of Americans with practical biblical financial principles. By packaging stewardship theology into actionable steps taught through local churches, Ramsey made financial discipleship a mainstream ministry category.",
  },
  {
    id: "letourneau-sv",
    name: "R.G. LeTourneau",
    era: "1888-1969",
    context: "Mover of Men and Mountains (autobiography, 1960); industrial entrepreneur and philanthropist",
    bio: "LeTourneau was one of America's greatest industrial inventors — creator of the earthmoving equipment used to build highways, dams, and airports worldwide — and one of its most extraordinary Christian philanthropists. At the height of his business success, he reversed the typical tithing formula: instead of giving 10% and keeping 90%, he gave 90% and kept 10%. His autobiography is one of the most compelling accounts of what happens when a Christian takes radical stewardship seriously: he became wealthier the more he gave.",
    quote: "I shovel money out, and God shovels it back — and God has a bigger shovel.",
    contribution: "Demonstrated in one extraordinary life that radical financial generosity — giving 90% — is both financially possible and spiritually transforming. His story has inspired generations of Christian business leaders to rethink the relationship between profit and generosity.",
  },
];

const STEWARD_VIDEOS = [
  {
    id: "sv1",
    title: "Free from Money, Rich Toward God",
    preacher: "John Piper",
    videoId: "k-3UC4ZAgxI",
    description: "Piper on Matthew 6:19-21: why treasures on earth are a threat to the soul",
  },
  {
    id: "sv2",
    title: "Wealth Is Almost Always a Curse",
    preacher: "John Piper",
    videoId: "5gc3s6TCSVw",
    description: "Piper’s radical challenge to American prosperity assumptions",
  },
  {
    id: "sv3",
    title: "The Pervasive Problem of Loving Money",
    preacher: "John Piper",
    videoId: "evQRQnBPgi8",
    description: "Diagnosing the love of money in the Christian life",
  },
  {
    id: "sv4",
    title: "You Can’t Serve God and Money",
    preacher: "John Piper",
    videoId: "0qS_aQi6Tuk",
    description: "The impossibility of dual loyalty — Matthew 6:24 explained",
  },
  {
    id: "sv5",
    title: "Don’t Waste Your Life",
    preacher: "John Piper",
    videoId: "JHdB1dYAteA",
    description: "What does it mean to waste your financial life? Piper answers with the Passion generation",
  },
  {
    id: "sv6",
    title: "Radical: Passion 2011",
    preacher: "David Platt",
    videoId: "yhiHSf_L6_E",
    description: "Platt challenges the comfortable Christianity that hoards instead of gives",
  },
];

const DEFAULT_BUDGET: BudgetCategory[] = [
  { name: "Giving / Tithe", recommended: 10, actual: 7, color: "#3a7d56" },
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

export default function StewardshipPage() {
  const [activeTab, setActiveTab] = useState<Tab>("principles");
  const [selectedVoice, setSelectedVoice] = useState("wesley-sv");
  const voiceItem = VOICES_STE.find(v => v.id === selectedVoice)!;
  const [openPrinciple, setOpenPrinciple] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_stewardship_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
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

  const tabs: { key: Tab; label: string }[] = [
    { key: "principles", label: "Principles" },
    { key: "giving", label: "Giving Ladder" },
    { key: "voices", label: "Voices" },
    { key: "videos", label: "Videos" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Stewardship &amp; Finances</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Biblical wisdom for managing money, debt, and generosity</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {tabs.map(({ key, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: activeTab === key ? "#3a7d56" : "#6A6A88", borderBottom: `2px solid ${activeTab === key ? "#3a7d56" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Principles Tab */}
        {activeTab === "principles" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {PRINCIPLES.map(p => (
                <div key={p.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openPrinciple === p.id ? "rgba(58,125,86,0.3)" : "#1E1E32"}` }}>
                  <div onClick={() => setOpenPrinciple(openPrinciple === p.id ? null : p.id)}
                    style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center", flex: 1 }}>
                      <span style={{ fontSize: 26 }}>{p.icon}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: openPrinciple === p.id ? "#3a7d56" : "#F2F2F8", marginBottom: 4 }}>{p.title}</h3>
                        <p style={{ fontSize: 12, color: "#3a7d56", fontStyle: "italic" }}>{p.verseRef}</p>
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
                      <div style={{ background: "#0D0D1A", borderRadius: 10, padding: 14, margin: "16px 0", borderLeft: "3px solid #3a7d56" }}>
                        <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{p.verse}&rdquo;</p>
                        <p style={{ fontSize: 12, color: "#3a7d56", marginTop: 6 }}>— {p.verseRef}</p>
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

        {/* Giving Ladder Tab */}
        {activeTab === "giving" && (
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ marginBottom: 28, textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#F2F2F8", marginBottom: 8 }}>The Ladder of Generosity</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
                Biblical generosity is not a fixed percentage&mdash;it is a journey. Where are you on the ladder?
              </p>
            </div>

            {/* Giving Tiers */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 40 }}>
              {GIVING_TIERS.map((tier, idx) => (
                <div key={tier.id} style={{ background: "#12121F", borderRadius: 16, padding: 24, border: "1px solid #1E1E32", display: "flex", gap: 22, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, textAlign: "center", minWidth: 72 }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#6B4FBB", lineHeight: 1 }}>{tier.percentage}</div>
                    <div style={{ fontSize: 10, color: "#6A6A88", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>Level {idx + 1}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#F2F2F8", margin: 0 }}>{tier.tier}</h3>
                      <span style={{ fontSize: 13, color: "#6B4FBB", fontWeight: 600 }}>{tier.title}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 12 }}>{tier.description}</p>
                    <div style={{ background: "#0D0D1A", borderRadius: 8, padding: "8px 12px", marginBottom: 14, borderLeft: "3px solid #6B4FBB" }}>
                      <span style={{ fontSize: 12, color: "#9898B3" }}>Key Scripture: </span>
                      <span style={{ fontSize: 12, color: "#A080FF", fontStyle: "italic" }}>{tier.scriptureSupport}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {tier.practicalSteps.map((step, si) => (
                        <div key={si} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: "#3a7d56", fontSize: 12, flexShrink: 0, marginTop: 2 }}>→</span>
                          <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Famous Givers */}
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#F2F2F8" }}>Famous Radical Givers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
              {GIVING_VOICES.map(v => (
                <div key={v.id} style={{ background: "#12121F", borderRadius: 14, padding: 20, border: "1px solid #1E1E32" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "#F2F2F8" }}>{v.name}</div>
                      <div style={{ fontSize: 12, color: "#6B4FBB", fontWeight: 600 }}>{v.era}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>{v.practice}</p>
                  <div style={{ background: "#07070F", borderLeft: "3px solid #3a7d56", borderRadius: "0 6px 6px 0", padding: "10px 14px" }}>
                    <p style={{ fontSize: 13, color: "#3a7d56", fontStyle: "italic", margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_STE.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#3a7d56", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #3a7d56", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#3a7d56", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.1)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Stewardship Theology</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div style={{ marginBottom: 28, textAlign: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#F2F2F8", marginBottom: 8 }}>Sermons on Money &amp; Generosity</h2>
              <p style={{ color: "#9898B3", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>
                Some of the most challenging and clarifying preaching on wealth, possessions, and radical generosity.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 24 }}>
              {STEWARD_VIDEOS.map(v => (
                <div key={v.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: "1px solid #1E1E32" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ background: "rgba(107,79,187,0.2)", color: "#A080FF", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(107,79,187,0.3)" }}>
                        {v.preacher}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#F2F2F8", marginBottom: 6 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
