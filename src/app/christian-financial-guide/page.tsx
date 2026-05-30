"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Owns Everything", verse: "Psalm 24:1", body: "The earth is the Lord's, and everything in it (Psalm 24:1). The foundational biblical conviction about money is that none of it is ours. We are stewards — managers of resources that belong to God — not owners who happen to occasionally donate. This shifts the question from 'How much of my money should I give to God?' to 'How does the owner want me to manage his resources?' The practical difference is enormous: a steward answers to the owner; an owner answers to no one. Every financial decision is therefore a theological decision about who is lord." },
  { title: "The Tithe: Bringing the First Tenth", verse: "Malachi 3:10", body: "The tithe (ten percent of income, given to God's purposes) appears throughout the Bible as a baseline giving pattern. Leviticus 27:30-32, Deuteronomy 14:22-23, Malachi 3:10-12, and Matthew 23:23 all reference tithing. Debate exists over whether the New Covenant tithe is obligatory in the same way the Mosaic tithe was. But the pattern of giving the first and best — first fruits rather than leftovers — is clear throughout both Testaments. Many Christians find that deciding to tithe in advance (before all other spending) removes the temptation to let expenses crowd out giving." },
  { title: "Giving Cheerfully, Not Under Compulsion", verse: "2 Corinthians 9:7", body: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver (2 Corinthians 9:7). Paul is raising funds for the Jerusalem church and explicitly says that giving should not be pressured or calculated to maximize a perceived return. The cheerfulness Paul has in mind is not an emotional state we summon but a theological conviction — we give freely because we have freely received, because our security rests in God and not in our accounts." },
  { title: "Contentment: The Foundation of Generosity", verse: "Philippians 4:11-13", body: "I have learned to be content in all circumstances (Philippians 4:11). Paul's contentment is not temperament but discipline — he learned it. Biblical contentment is not indifference to circumstances but freedom from defining one's security, identity, or worth by material things. Without contentment, generosity is impossible — every gift is perceived as a threat to security. With contentment, generosity becomes easy — we give from abundance even when our account is small, because our abundance is in God." },
  { title: "The Danger of Wealth", verse: "1 Timothy 6:9-10", body: "Those who want to get rich fall into temptation and a trap and into many foolish and harmful desires that plunge people into ruin and destruction (1 Timothy 6:9). The Bible is remarkably direct about the spiritual danger of wealth — not because money is inherently evil (6:10 clarifies: 'the love of money is a root of all kinds of evil') but because the accumulation of wealth creates an illusion of security that competes directly with trust in God. The Rich Young Ruler (Mark 10:17-22) is asked to give up not just possessions but the false security they provided." },
];

const PRINCIPLES = [
  { title: "Spend Less Than You Earn", desc: "The foundation of financial health is a surplus — money left over after expenses. Without a surplus, there is nothing to give, save, or invest. Creating a surplus often requires both increasing income and reducing spending. The biblical pattern of Proverbs wisdom consistently commends the ant (Proverbs 6:6-8) who stores in summer for winter — planning for future needs from present surplus." },
  { title: "Eliminate Consumer Debt", desc: "The borrower is servant to the lender (Proverbs 22:7). Consumer debt (credit cards, car loans, personal loans) is financial servitude — future income is already owed to lenders before it arrives. The freedom to give, save, and direct your resources requires eliminating this servitude. Dave Ramsey's debt snowball method (smallest balance first for psychological wins) is widely used by Christians to eliminate consumer debt systematically." },
  { title: "Give First, Save Second", desc: "The first-fruits pattern of Scripture — giving the first and best, not the leftovers — applies practically to financial planning. Automate giving and saving before discretionary spending. What comes first gets done; what comes last gets spent. Many Christians find that automating a tithe eliminates the monthly emotional battle over whether to give." },
  { title: "Build a 3-6 Month Emergency Fund", desc: "Proverbs wisdom consistently commends foresight — preparing for unexpected needs. An emergency fund (3-6 months of living expenses in a liquid savings account) provides the margin to absorb unexpected job loss, medical expenses, or car repairs without accumulating new debt or disrupting giving. Financial crises become inconveniences rather than catastrophes." },
  { title: "Invest for the Long Term", desc: "The Parable of the Talents (Matthew 25:14-30) does not just commend giving — it commends productive stewardship that generates return. Low-cost index fund investing (total stock market or S&P 500 index funds through Vanguard, Fidelity, or Schwab) takes advantage of compound growth over decades. Starting early is the most powerful variable — time matters more than amount." },
  { title: "Give Generously, Then Give More", desc: "Many financially wise Christians practice percentage increases: give 10%, then find one year to give 11%, then 12%, working upward as income and debt freedom allow. The goal is generosity that costs something — the widow's offering (Mark 12:41-44) is not commended for its amount but for the proportion. Systematic increases in giving counteract the lifestyle inflation that tends to absorb every income increase." },
];

const RESOURCES_LIST = [
  { name: "Financial Peace University", org: "Dave Ramsey", desc: "The most widely used Christian financial literacy program in America. 9-week course covering budgeting, debt elimination, saving, investing, and giving. More than 10 million families have completed it. Available at most evangelical churches and online.", url: "https://www.ramseysolutions.com/ramseyplus/financial-peace", color: GREEN },
  { name: "Crown Financial Ministries", org: "Crown", desc: "Founded by Larry Burkett, Crown provides Biblical financial principles through resources, budgeting tools, career assessment, and small group studies. One of the oldest and most trusted Christian financial education organizations.", url: "https://www.crown.org/", color: PURPLE },
  { name: "Art of Manliness (Christian Finance Articles)", org: "Various", desc: "While not exclusively Christian, AoM has published some of the clearest practical guides to budgeting, investing, and financial wisdom that align well with biblical principles of stewardship. Complement with explicitly Christian resources.", url: "https://www.artofmanliness.com/money/", color: "#3B82F6" },
  { name: "Generous Giving", org: "Generous Giving", desc: "Focused specifically on cheerful, sacrificial generosity rather than financial management. Generous Giving produces testimonies, resources, and gatherings that challenge wealthy Christians to discover the freedom of radical generosity. Transformative for high-earners wrestling with how much is enough.", url: "https://www.generousgiving.org/", color: "#F59E0B" },
  { name: "The Total Money Makeover", org: "Dave Ramsey", desc: "Ramsey's core book summarizing the Baby Steps system. Practical, motivating, and widely credited with helping hundreds of thousands of families get out of debt and build wealth. Best read alongside a more theologically rich treatment of stewardship.", url: "https://www.amazon.com/Total-Money-Makeover-Classic-Financial/dp/1595555277/", color: "#EC4899" },
  { name: "Money, Possessions and Eternity", org: "Randy Alcorn", desc: "The most comprehensive Christian treatment of biblical stewardship available. Alcorn covers treasure in heaven, the theology of giving, contentment, debt, and lifestyle choices with unusual depth. 450 pages but worth every one.", url: "https://www.amazon.com/Money-Possessions-Eternity-Randy-Alcorn/dp/1414300336/", color: "#10B981" },
];

export default function ChristianFinancialGuidePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "principles" | "resources">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Financial Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus talked about money more than almost any other subject. The biblical vision of stewardship — God owns everything, we manage it for his purposes — transforms how we earn, spend, save, give, and invest.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "principles" as const, label: "Principles", icon: "📊" },
            { id: "resources" as const, label: "Resources", icon: "🔗" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "principles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Practical principles for stewarding money faithfully — in order of priority. Build from the foundation up: surplus, freedom from debt, giving, saving, investing.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRINCIPLES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: 0 }}>{p.title}</h3>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The best Christian financial education resources — from Dave Ramsey's debt elimination system to Randy Alcorn's comprehensive theology of money.
              </p>
            </div>
            {RESOURCES_LIST.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h3 style={{ color: r.color, fontWeight: 800, fontSize: 17, margin: "0 0 2px" }}>{r.name}</h3>
                    <div style={{ color: MUTED, fontSize: 12 }}>{r.org}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{r.desc}</p>
                <a href={r.url} target="_blank" rel="noopener noreferrer"
                  style={{ background: `${r.color}12`, border: `1px solid ${r.color}25`, color: r.color, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  🔗 Visit Resource
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
