"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "practical" | "dangers" | "resources";

const THEOLOGY = [
  { title: "All money belongs to God — you are a steward", color: GREEN, ref: "Psalm 24:1; Deuteronomy 8:17-18; 1 Chronicles 29:14", content: "The earth is the Lord's, and everything in it. Every dollar that passes through your hands is God's before it is yours. This is not a religious platitude but an economic reality that changes everything about how you earn, spend, save, and give. A steward does not ask what is mine and how do I get more — but what has been entrusted to me, and how do I manage it faithfully for its real owner?" },
  { title: "Jesus talked about money more than prayer or heaven", color: PURPLE, ref: "Luke 12:15; Matthew 6:19-24; Luke 16:1-15", content: "Of Jesus's 38 recorded parables, 16 deal directly with money and possessions. More than anything else Jesus taught about, money reveals the heart's actual allegiances. You cannot serve both God and money (Matthew 6:24) — the word translated money here is Mammon, a personified rival god that demands ultimate loyalty. Jesus was not making a suggestion; he was describing a spiritual reality." },
  { title: "The love of money — not money itself — is the root of all evil", color: "#EF4444", ref: "1 Timothy 6:6-10; Acts 4:32-35", content: "Paul's statement is precise: it is the love of money — not money itself — that is the root of all kinds of evil. Wealth is morally neutral; what matters is whether you own your money or your money owns you. The early Jerusalem church demonstrated that a community filled with the Spirit naturally moves toward radical generosity — not because they were commanded to but because they were transformed." },
  { title: "The prosperity gospel is a false gospel", color: "#F59E0B", ref: "Mark 10:17-31; James 5:1-6; 2 Corinthians 6:10", content: "The teaching that financial blessing is the guaranteed result of faith and giving — embedded in much American Christian television and megachurch culture — directly contradicts Jesus. He told the rich young ruler to sell everything and give to the poor. He said it is easier for a camel to go through a needle's eye than for a rich person to enter the kingdom. Paul described himself as having nothing yet possessing everything. The prosperity gospel trades the gospel for a sales pitch." },
  { title: "Generosity is evidence of a transformed heart", color: "#3B82F6", ref: "2 Corinthians 9:6-8; Luke 19:1-10; Matthew 6:21", content: "Zacchaeus's conversion was immediately visible in his giving — half his goods to the poor; four times repayment for what he had defrauded. This is not the cause of his salvation but the evidence of it. Jesus's statement where your treasure is, there your heart will be also works in both directions: your heart follows your treasure, and your treasure reveals your heart. You can track your theology by examining your bank statement." },
  { title: "Contentment is a trained discipline", color: "#10B981", ref: "Philippians 4:11-13; 1 Timothy 6:6-8; Hebrews 13:5", content: "Paul says he has learned to be content in every circumstance — implying that contentment is not a natural disposition but an acquired skill. The consumer economy is designed to prevent contentment — every advertisement is an attack on the peace of sufficiency. Biblical contentment is not passivity or lack of ambition; it is freedom from the anxiety that drives compulsive earning, spending, and accumulating." },
];

const PRACTICAL = [
  { title: "The 10/10/80 Rule", color: GREEN, content: "Give 10% (tithe) to the local church. Save 10% for the future. Live on 80%. This simple framework — advocated by Howard Dayton of Crown Financial Ministries and many others — provides a starting baseline. The goal is to grow both the giving percentage and the savings percentage over time as God prospers you.", action: "Set up automatic tithing to your church; automatic transfer to savings. Remove discretion from both so they happen first." },
  { title: "Emergency Fund First", color: PURPLE, content: "Before investing, before extra debt payoff, establish a 3-6 month emergency fund in a high-yield savings account. Dave Ramsey's Baby Step 1 is $1,000 starter emergency fund; Baby Step 3 is 3-6 months. An emergency fund prevents financial emergencies from becoming spiritual crises — you can act from principle rather than panic when the car breaks down.", action: "Open a separate savings account labeled Emergency Fund. Automate $X per paycheck until you reach your goal." },
  { title: "Get Out of Debt — Aggressively", color: "#EF4444", content: "Consumer debt (credit cards, car loans, personal loans) enslaves — the borrower is servant to the lender (Proverbs 22:7). Interest payments to lenders are resources that cannot be given to God or others. The debt snowball (pay minimum on everything, attack the smallest balance first for psychological wins) or debt avalanche (attack the highest interest rate first) both work; the key is intensity and consistency.", action: "List all debts with balances and rates. Choose a method. Throw every extra dollar at the target debt. Do not take on new consumer debt." },
  { title: "Budget as a Spiritual Practice", color: "#3B82F6", content: "A budget is not a restriction but a plan — an intentional statement of your values in numbers. Every spending category is a theological statement. A budget that has no giving category, no savings, and unlimited eating-out is a theology of self-indulgence. A budget created prayerfully with your spouse is an act of stewardship.", action: "Use EveryDollar (Dave Ramsey), YNAB, or Mint. Make every dollar have a name before the month begins. Review monthly." },
  { title: "Invest for the long term", color: "#F59E0B", content: "Proverbs 21:20 — the wise store up choice food and olive oil, but fools gulp theirs down. Long-term investing (index funds, retirement accounts) is faithful stewardship of future resources. The miracle of compound interest makes small consistent investments over 30 years dramatically more powerful than large late-life investments. Start now, even with small amounts.", action: "Open a Roth IRA. Contribute to your employer 401(k) at least to the match (that is free money). Invest in low-fee total market index funds (Vanguard, Fidelity, Schwab)." },
  { title: "Increase generosity annually", color: "#10B981", content: "If 10% feels impossible, commit to increasing your giving by 1% per year. If you give 3% now, you reach 10% in 7 years — without a dramatic lifestyle change at any one point. Many Christians who have implemented annual giving increases report that the discipline of increasing generosity produced more joy than any of the things they did not give up.", action: "Write down your current giving percentage. Commit to a specific increase date — January 1, your birthday, your work anniversary. Automate the increase." },
];

const DANGERS = [
  { danger: "Lifestyle inflation", color: "#EF4444", sign: "Every raise leads to proportionally more spending rather than more giving and saving", antidote: "Define your lifestyle before you need to. Decide in advance what you will do with increases in income. Most people let lifestyle creep happen unconsciously; it takes intentional decision to prevent it." },
  { danger: "Keeping up with church culture", color: "#F59E0B", sign: "Feeling pressure to drive a certain car, live in a certain neighborhood, give your kids certain experiences because other church families do", antidote: "Your financial decisions should be made before God, not before your social comparison group. The Joneses are spiritually irrelevant to your stewardship account." },
  { danger: "Investment idolatry", color: PURPLE, sign: "Spending more mental and emotional energy on investment portfolios than on the Kingdom; anxiety about market fluctuations as spiritual crisis", antidote: "Jesus explicitly warned against laying up treasures on earth. Investment for future needs is wise; obsession with wealth accumulation is Mammon worship. No Christian should be more distressed by a market drop than they would be by learning a child in their church is going hungry." },
  { danger: "Financial secrets in marriage", color: "#3B82F6", sign: "One spouse handles all finances; the other does not know the family's actual financial state; hidden accounts or spending", antidote: "Total financial transparency in marriage. Both spouses should know: the current bank balances, all debts, all giving, all investments. Financial secrets are a form of control and destroy trust." },
  { danger: "Short-term thinking", color: GREEN, sign: "Making financial decisions based on immediate relief or gratification rather than long-term faithfulness", antidote: "Every financial decision should be evaluated in a 10-year frame rather than a 10-minute frame. Credit card debt feels like relief in the moment; a year of minimum payments on consumer debt feels like imprisonment." },
];

const RESOURCES_DATA = [
  { name: "Crown Financial Ministries", url: "crown.org", desc: "Founded by Howard Dayton — the most comprehensive biblically-based financial education system available. Free online tools, small group curriculum, budget coaching. One of the most trusted names in Christian personal finance.", color: GREEN },
  { name: "Dave Ramsey / Ramsey Solutions", url: "ramsey.com", desc: "Financial Peace University is the most widely attended church-based financial literacy program in America — in 40,000+ churches. Ramsey's Baby Steps framework (7 steps to financial peace) is clear, practical, and built on biblical principles. His advice is conservative and debt-averse.", color: PURPLE },
  { name: "Ron Blue Institute", url: "ronblueinstitute.com", desc: "Founded by Ron Blue, one of the leading Christian financial advisors of the past 40 years. Focuses on giving strategy, estate planning, and integrating faith with wealth management. More sophisticated than Ramsey — for those who already have financial stability.", color: "#3B82F6" },
  { name: "National Christian Foundation", url: "ncfgiving.com", desc: "The largest Christian donor-advised fund — allows Christians to give appreciated assets (stock, real estate) to a tax-advantaged fund and then distribute to ministries over time. The most sophisticated giving vehicle for generous Christians with significant assets.", color: "#F59E0B" },
  { name: "Every Good Endeavor (Keller)", url: "gospelinlife.com", desc: "Tim Keller's theology of work and vocation — how the gospel transforms how we approach earning, career, and the role of money in a life oriented toward the Kingdom. Foundational theological framework.", color: "#EF4444" },
  { name: "YNAB (You Need a Budget)", url: "ynab.com", desc: "The best budgeting tool available regardless of religious commitment. Based on giving every dollar a job before the month begins. 34-day free trial; financial transformation reported by the vast majority of consistent users.", color: "#10B981" },
];

export default function TheologyOfMoneyPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Money</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Jesus talked about money more than prayer or heaven. Stewardship is not a fundraising topic — it is a discipleship topic. Biblical money management starts not with a budget but with a theology.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "practical", "dangers", "resources"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Biblical Theology" : t === "practical" ? "Practical Steps" : t === "dangers" ? "Financial Dangers" : "Resources"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{p.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{p.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "practical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PRACTICAL.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{p.title}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{p.content}</p>
                <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: p.color, fontWeight: 700, fontSize: 11 }}>Action: </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{p.action}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "dangers" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {DANGERS.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${d.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, borderRadius: 3, background: d.color, alignSelf: "stretch", flexShrink: 0, minHeight: 40 }} />
                  <div>
                    <div style={{ color: d.color, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{d.danger}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>Warning sign: {d.sign}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>Antidote: {d.antidote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{r.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{r.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
