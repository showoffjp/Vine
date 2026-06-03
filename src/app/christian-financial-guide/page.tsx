"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

type Tab = "theology" | "thinkers" | "principles" | "resources" | "videos";

const THINKERS_FINANCE = [
  {
    id: "wesley",
    name: "John Wesley",
    era: "1703-1791",
    context: "Methodist founder; preacher; social reformer",
    bio: "Wesley's three-rule summary of Christian finance is the most compact biblical financial philosophy ever stated: 'Gain all you can, save all you can, give all you can.' This is not a prosperity gospel — it is a stewardship ethic. Gain (through honest labor) and save (by avoiding waste) exist entirely in service of give. Wesley himself famously kept his personal expenses constant even as his income from publications grew dramatically, directing the surplus entirely to the poor. He died with almost nothing despite earning substantial income because he had given it away.",
    quote: "Make all you can, save all you can, give all you can. And if you do not give all you can, I have no hope that you will ever be saved.",
    contribution: "Wesley's framework made generosity the end toward which all financial prudence points. He prevented his teaching from being captured by either asceticism (don't earn) or prosperity (earn to hoard) by insisting that earning and saving are instruments of giving, not ends in themselves. His own life modeled the teaching — he never accumulated wealth — which gave it credibility that could not be dismissed as theory.",
  },
  {
    id: "letourneau",
    name: "R.G. LeTourneau",
    era: "1888-1969",
    context: "Industrialist; inventor; manufacturer of earth-moving equipment",
    bio: "LeTourneau invented much of the earth-moving technology used in World War II and built a global manufacturing empire — while giving away 90% of his income. He reversed the conventional tithe: instead of giving 10% to God and keeping 90%, he gave 90% and kept 10%. His autobiography 'Mover of Men and Mountains' (1960) tells the story of a man who discovered that the more he gave, the more he earned — not as a prosperity formula but as the experiential testimony of a life radically oriented around generosity. He founded LeTourneau University as a direct expression of his conviction that faith and work belong together.",
    quote: "I shovel it out and God shovels it back — but God has a bigger shovel.",
    contribution: "LeTourneau demolished the argument that radical generosity is only for those without financial responsibilities or business concerns. He was building factories, employing thousands, and managing complex supply chains while giving 90%. His life proved that generosity at scale is possible for businesspeople — and that it does not require abandoning the vocation to build and create. He became a patron saint of the faith-and-work movement before it had a name.",
  },
  {
    id: "alcorn",
    name: "Randy Alcorn",
    era: "1954-present",
    context: "Author; Eternal Perspective Ministries; Money, Possessions and Eternity",
    bio: "Alcorn's 'Money, Possessions and Eternity' (1989, revised 2003) is the most comprehensive biblical treatment of financial stewardship available to evangelical readers. At 450 pages, it addresses the theology of giving, the concept of treasure in heaven, debt, contentment, lifestyle, estate planning, and the prosperity gospel. Alcorn personally restructured his own finances after a legal judgment threatened to divert his royalties — he transferred book royalties to his ministry and took a ministry salary, ensuring that the money served eternal rather than temporal ends. He has given away millions of dollars in royalties.",
    quote: "We are not owners but managers. God is the owner of everything. We are stewards of his resources — and we will give an account of how we managed what he entrusted to us.",
    contribution: "Alcorn integrated eschatology into personal finance in a way that no other evangelical writer has matched. His concept of 'treasure in heaven' — that generous giving is a form of investment with eternal returns — gave high-earners a framework for understanding why giving matters beyond tax benefits or emotional satisfaction. His own financial restructuring made him a credible witness to the sacrifice he was asking others to make.",
  },
  {
    id: "blue",
    name: "Ron Blue",
    era: "1942-present",
    context: "CPA; Kingdom Advisors; Master Your Money",
    bio: "Ron Blue left a successful financial planning career to found a ministry to Christian financial advisors. His book 'Master Your Money' (1986) brought secular financial planning expertise into direct contact with biblical stewardship principles. Blue's five financial principles — spend less than you earn, avoid debt, maintain liquidity, set long-term goals, give generously — are not uniquely Christian, but his framework for understanding them as stewardship principles grounds them in a theological vision. Kingdom Advisors, the organization he co-founded, has trained thousands of Christian financial planners to integrate faith and practice.",
    quote: "Financial freedom is not having more money. It is spending less than you earn, giving generously, saving consistently, and trusting God with the rest.",
    contribution: "Blue gave Christian financial planning professional credibility. He showed that the secular financial industry's best practices — budgeting, debt elimination, savings, long-term planning — are consistent with and enhanced by biblical stewardship principles. His training of Christian financial advisors created a network of counselors who could help ordinary people integrate their faith with their financial decisions in a sophisticated way.",
  },
  {
    id: "platt",
    name: "David Platt",
    era: "1979-present",
    context: "Pastor; Radical (2010); SBC International Mission Board",
    bio: "Platt's 'Radical' (2010) was a direct challenge to the American Dream Christianity that treats material comfort as the expected fruit of following Jesus. Written from his experience as pastor of a wealthy suburban megachurch, it asked what happens when ordinary American Christians take seriously Jesus's actual words about money, possessions, and the poor. His challenge was not to poverty as such but to the unconscious assumption that financial comfort is spiritually neutral — that how we spend our money has no bearing on our faithfulness to the kingdom. The book sold over a million copies and catalyzed significant conversation about consumerism in American Christianity.",
    quote: "We are spending our lives accumulating stuff we do not need, and meanwhile, people are dying — eternally and physically — for want of what we have.",
    contribution: "Platt made the global dimension of Christian stewardship unavoidable for suburban American evangelicals. By connecting comfortable lifestyles to the suffering of the global poor, he challenged the implicit theology that financial success represents divine blessing without any corresponding obligation. His work sparked the 'radical generosity' conversation that influenced a generation of younger evangelical leaders to rethink both what they owned and how they spent.",
  },
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
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedThinker, setSelectedThinker] = useState("wesley");
  const thinker = THINKERS_FINANCE.find(t => t.id === selectedThinker)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
            { id: "thinkers" as const, label: "Thinkers", icon: "💡" },
            { id: "principles" as const, label: "Principles", icon: "📊" },
            { id: "resources" as const, label: "Resources", icon: "🔗" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {THINKERS_FINANCE.map(v => (
                <button key={v.id} onClick={() => setSelectedThinker(v.id)}
                  style={{ background: selectedThinker === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedThinker === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{thinker.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{thinker.era} &middot; {thinker.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{thinker.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{thinker.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{thinker.contribution}</p>
                </div>
              </div>
            </div>
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

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on biblical financial stewardship — generosity, tithing, contentment, and the theology of money.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "VbnJtsF4SII", title: "Stewardship 101: Biblical Principles for Money, Giving & Contentment", channel: "Christian Financial Teaching", description: "An overview of the biblical principles for managing money — stewardship, generosity, contentment, and how money shapes our relationship with God." },
                  { videoId: "GF-405SxcyY", title: "A Biblical Worldview of Tithing and Giving", channel: "Bob & Shawn", description: "An examination of why generosity is central in Scripture — what tithing means, how giving transforms us, and why Jesus talked about money so much." },
                  { videoId: "xS4zJBXswwc", title: "Is Tithing Only for the Old Testament? The Truth About Biblical Giving", channel: "Biblical Finance", description: "Pastor Josh McPherson examines whether New Testament Christians are bound by the tithe — and what a gospel-driven approach to giving actually looks like." },
                  { videoId: "Qlllx4IvujI", title: "Am I Generous? Biblical Giving, Tithing, Offerings & God's Heart for Money", channel: "Money Myths Series", description: "A teaching that goes beyond the tithe to explore God's heart for generous giving and how our finances reveal what we actually treasure." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
