"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "ethics" | "leaders" | "resources" | "videos";

const THEOLOGY = [
  { title: "Work is not a result of the Fall — it is part of creation's goodness", color: GREEN, ref: "Genesis 1:28; Genesis 2:15; Proverbs 14:23", content: "The mandate to 'fill the earth and subdue it' (Gen 1:28) was given before the Fall, not as a consequence of it. Adam was placed in the garden 'to work it and keep it' (Gen 2:15). Work is a creation ordinance — one of the fundamental ways humans bear the image of God, who himself works (John 5:17). The Fall introduced toil and frustration into work, but it did not create work. A theology of business begins here: enterprise is not a necessary evil but a created good." },
  { title: "The Christian businessperson as vice-regent", color: PURPLE, ref: "Genesis 1:26-28; Psalm 8:5-8; Colossians 3:23-24", content: "The image of God (imago Dei) makes every person a royal steward over the creation domain entrusted to them. A business owner or executive exercises genuine authority and bears genuine responsibility for a domain — employees, customers, communities, resources. Colossians 3:23-24 addresses slaves in the first century but articulates a universal principle: all work is done 'for the Lord, not for human masters.' The audience of your work is ultimately God, not your supervisor or your profit margin." },
  { title: "Profit is not a sin — it is a signal", color: "#3B82F6", ref: "Proverbs 11:1; Luke 19:13-27; Matthew 25:14-30", content: "Jesus's parable of the talents (Matt 25) and the minas (Luke 19) both commend the servants who produced a return. Profit signals that you have created value — that you have served customers, generated something they were willing to pay for. The sin is not profit but the love of money (1 Tim 6:10), the acquisition of profit through injustice (Amos 8:4-6), or the hoarding of profit against the needs of others (Luke 12:16-21). Profit faithfully earned and wisely used is a reflection of good stewardship." },
  { title: "Vocation — the monk's error and the reformer's correction", color: "#EF4444", ref: "1 Corinthians 7:17-24; Martin Luther's theology of vocation", content: "Medieval Christianity created a two-tier system: sacred work (monks, priests) was higher than secular work (merchants, farmers, soldiers). Martin Luther demolished this distinction. In his 1520 'Address to the Christian Nobility' he argued that every Christian has a calling — a vocation from God — regardless of whether that calling is to a monastery or a market. The baker serves God by baking good bread as surely as the priest serves God by offering prayers. Every legitimate calling is a participation in God's ongoing governance of creation." },
  { title: "The city as the arena of Christian cultural engagement", color: "#F59E0B", ref: "Jeremiah 29:7; Genesis 4:17; Revelation 21:2", content: "God tells the Babylonian exiles to 'seek the peace and prosperity of the city to which I have carried you into exile' (Jer 29:7). Business, industry, and commerce are central to a city's shalom. Christian businesspeople are not in exile from God's purposes when they are in the marketplace — they are participating in it. The new creation will be a city (Rev 21:2), not a garden — suggesting that the cultural products of human civilization are somehow taken up into eternity." },
  { title: "Excellence as evangelism", color: "#10B981", ref: "Matthew 5:16; 1 Peter 2:12; Titus 2:10", content: "Titus 2:10 instructs slaves to serve faithfully 'so that in every way they will make the teaching about God our Savior attractive.' This principle extends beyond slavery: excellence in work, integrity in business, and genuine service to customers makes the gospel credible. Christians who cut corners, provide poor service, and treat employees badly are not neutral in their business practices — they are anti-witnesses. Christians who go beyond what is required, keep every promise, and treat employees with dignity are pre-evangelists." },
];

const ETHICS = [
  { issue: "Employee Wages and Treatment", color: GREEN, question: "Am I paying my employees a wage they can actually live on? Am I treating them with the dignity of image-bearers?", principle: "James 5:1-6 pronounces judgment on those who withheld wages from workers. Deuteronomy 24:14-15 requires paying workers the same day. The New Testament abolishes the concept of slaves versus free within the community of Christ — Philemon is the definitive case. A Christian employer who pays minimum wage to maximize personal profit, while their own compensation is excessive, has an answering to do that is theological, not merely economic.", action: "Benchmark your wage floor against living wage data for your region. Consider profit-sharing structures. Involve employees in business success." },
  { issue: "Customer Honesty and Transparency", color: PURPLE, question: "Am I being fully honest with customers about what they are buying, its limitations, and its real cost?", principle: "Proverbs 11:1 — 'Dishonest scales are an abomination to the Lord, but accurate weights are his delight.' The marketplace operates on trust; Christian business operates on trust + conscience. Hidden fees, misleading advertising, engineered obsolescence, and deceptive contracts all violate this principle — regardless of their legality. A Christian is not merely bound by what the FTC prohibits but by what truth requires.", action: "Review your marketing for exaggeration or misleading framing. Disclose limitations proactively. Make cancellation as easy as sign-up." },
  { issue: "Competition and the Treatment of Rivals", color: "#3B82F6", question: "How do I talk about competitors? How do I treat them? Do I celebrate their failures?", principle: "Christians are not exempt from the command to love neighbors when those neighbors are market competitors. Celebrating a competitor's bankruptcy, spreading negative information about them, or engaging in predatory pricing to drive them out of business are all spiritually problematic regardless of their economic efficiency. The marketplace is not a domain where the 'love your neighbor' command is suspended.", action: "Audit how your marketing discusses competitors. Consider: would you say this to their face? Do you pray for their success, or their failure?" },
  { issue: "Environmental Stewardship in Business", color: "#EF4444", question: "What is the cost of my business to the environment that God created and called 'good'?", principle: "Genesis 2:15 gives humans the task of 'working and keeping' creation. The Hebrew shamar (keep/guard) is the same word used for a watchman guarding a city. Businesses that externalize environmental costs — polluting, depleting, degrading — are shifting the real costs of their operations onto creation and onto future generations. This is a justice issue as much as an environmental one.", action: "Assess your supply chain for environmental costs. Consider the long-term community impact of your operations. Measure carbon, water, and waste." },
  { issue: "Business and the Vulnerable", color: "#F59E0B", question: "Does my business model depend on or exploit the vulnerability of any group?", principle: "Amos 8:4-6 pronounces judgment on merchants who can't wait for the Sabbath to end so they can sell wheat 'with a false measure, tilting the scales dishonestly.' Payday lenders, predatory insurance products, marketing to addiction, and supply chains dependent on forced labor are modern equivalents. The prophetic tradition is unanimous: business practices that extract value from the poor and vulnerable are an abomination regardless of their legality.", action: "Audit your entire business model: who bears the cost of your profit? Is any cost borne by people with no power to resist?" },
  { issue: "Sabbath in Business Culture", color: "#10B981", question: "Does my business culture honor rest — for myself, my employees, and my community?", principle: "The Sabbath command (Exod 20:8-11) was revolutionary in the ancient world: it declared that even slaves have a right to rest. An always-on business culture, where employees are expected to be reachable at all hours and pressure is continuous, violates the creation rhythm God built into the cosmos. A Christian business leader who destroys the Sabbath of their employees for productivity is making an idol of the business.", action: "Assess after-hours expectations on your team. Consider explicit policies that protect family time and rest. Model Sabbath yourself." },
];

const LEADERS = [
  { name: "David Green", company: "Hobby Lobby", color: GREEN, desc: "Founder and CEO of Hobby Lobby, the largest privately owned arts and crafts retailer in America (1,000+ stores). Green tithed the company from its earliest days, closes stores on Sundays, and has committed to give away the company — he has no plans to pass it to his children as personal wealth. His legal battles (Burwell v. Hobby Lobby Stores, Supreme Court 2014) over contraception mandate under the ACA brought Christian business ethics to the national stage. His book 'More Than a Hobby' describes his faith convictions about business.", conviction: "Tithe the company; close Sundays; give it all away" },
  { name: "Truett Cathy", company: "Chick-fil-A", color: PURPLE, desc: "Founded Chick-fil-A in 1946 and built it into America's largest fast-food chicken company by closing every Sunday — unprecedented in the fast-food industry. Cathy's conviction that employees and owners deserve one day of rest was not a marketing strategy but a theological commitment. The company's customer service culture (every associate required to say 'my pleasure') reflects Cathy's vision of serving customers with genuine dignity. He also founded WinShape Foundation to strengthen marriages, families, and foster care.", conviction: "Close Sundays; employees deserve rest; serve with dignity" },
  { name: "R.G. LeTourneau", company: "LeTourneau Technologies", color: "#EF4444", desc: "The most dramatic example of business generosity in American industrial history. LeTourneau invented most of the heavy earth-moving equipment used in WWII and built a construction equipment empire. He gave 90% of his income to Christian causes and kept 10% — the inverse of the standard tithe. He was known for saying 'It's not how much money I give to God, but how much of God's money I keep for myself.' Founded LeTourneau University in Longview, Texas.", conviction: "Give 90%, keep 10%; business as a platform for God's purposes" },
  { name: "Max De Pree", company: "Herman Miller", color: "#3B82F6", desc: "Former CEO of Herman Miller and one of the most important Christian voices in business leadership. His books 'Leadership Is an Art' and 'Leadership Jazz' articulate a servant leadership model rooted explicitly in Christian theology. De Pree argued that the leader's first responsibility is to define reality and the last is to say thank you — with the role of servant in between. Under his leadership, Herman Miller became one of the most admired companies in America for its treatment of employees and customers alike.", conviction: "Servant leadership; the leader's role is to define reality and say thank you" },
  { name: "Art Barter", company: "Datron World Communications", color: "#F59E0B", desc: "CEO who transformed a company's culture by implementing servant leadership principles and then sold the company to give the proceeds to charity. His Servant Leadership Institute trains business leaders in servant leadership principles derived from Robert Greenleaf's work and rooted in Christian values. A practical case study for how servant leadership actually functions in a competitive business environment.", conviction: "Sold company to fund servant leadership training; servant leadership is practically superior, not just morally required" },
  { name: "Henry Kaestner", company: "Bandwidth.com / Faith Driven Entrepreneur", color: "#10B981", desc: "Co-founded Bandwidth.com (communications technology company, now publicly traded) and wrote 'Faith Driven Entrepreneur' to articulate a theology of business for Christians in startups and growth-stage companies. The Faith Driven Entrepreneur movement has grown into communities in 80+ countries connecting Christian entrepreneurs. His work addresses the specific spiritual challenges of high-growth business: the idol of metrics, the pressure of investor expectations, and how to steward rapid growth.", conviction: "Business as mission; entrepreneurs need a theology of failure and success" },
];

const RESOURCES_DATA = [
  { name: "Every Good Endeavor", author: "Tim Keller", url: "gospelinlife.com", desc: "The most important book on theology of work written in the twenty-first century. Keller traces the biblical storyline from creation through redemption and shows how the gospel transforms every kind of work — not just ministry work. Essential reading for any Christian thinking seriously about their vocation.", color: GREEN },
  { name: "The Theology of Work Project", author: "Multiple authors", url: "theologyofwork.org", desc: "The most comprehensive online resource for faith and work integration — commentary on every book of the Bible from a work-theology perspective, articles on specific industries and professions, and a growing library of resources for Christian businesspeople. Free online.", color: PURPLE },
  { name: "Faith Driven Entrepreneur", author: "Henry Kaestner et al.", url: "faithdrivenentrepreneur.org", desc: "Community and curriculum for Christian entrepreneurs — weekly podcast, small group curriculum, events in 80+ countries. Particularly valuable for startup founders and early-stage business builders navigating the specific spiritual pressures of entrepreneurship.", color: "#3B82F6" },
  { name: "Made to Flourish", author: "Tom Nelson", url: "madetoflourishorg", desc: "Network of pastors who are actively equipping their congregations for Monday-morning faith. Tom Nelson's 'Work Matters' (Crossway) is an excellent companion. Made to Flourish trains pastors to preach on work/vocation so their congregations don't experience the sacred-secular split.", color: "#EF4444" },
  { name: "Praxis Labs", author: "Andy Crouch et al.", url: "praxislabs.org", desc: "Accelerator and community for faith-driven entrepreneurs and social innovators. Praxis hosts cohorts for Christian entrepreneurs building businesses that explicitly serve human flourishing. Andy Crouch's 'Culture Making' is the intellectual foundation.", color: "#F59E0B" },
  { name: "Biblical Principles of Business (online)", author: "Crown Financial / Liberty University", url: "crown.org", desc: "Crown Financial Ministries and Liberty University have produced business curricula grounded in biblical principles. Crown's business resources address ethics, financial management, and leadership from explicit Scripture application.", color: "#10B981" },
];

export default function FaithInMarketplacePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>💼</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Faith in the Marketplace</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Business theology, workplace ethics, real examples of faith-driven leaders, and resources for Christians who want their Monday to be as sacred as their Sunday.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Colossians 3:23-24 </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving."</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "ethics", "leaders", "resources", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "theology" ? "Theology of Work" : t === "ethics" ? "Business Ethics" : t === "leaders" ? "Faith-Driven Leaders" : t === "resources" ? "Resources" : "🎬 Videos"}
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

        {tab === "ethics" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ETHICS.map((e, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${e.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: e.color, fontWeight: 900, fontSize: 15, marginBottom: 6 }}>{e.issue}</div>
                <div style={{ background: `${e.color}08`, border: `1px solid ${e.color}15`, borderRadius: 8, padding: "8px 12px", marginBottom: 12 }}>
                  <span style={{ color: e.color, fontWeight: 700, fontSize: 11 }}>Key Question: </span>
                  <span style={{ color: TEXT, fontSize: 13, fontStyle: "italic" }}>{e.question}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{e.principle}</p>
                <div style={{ background: `${e.color}08`, border: `1px solid ${e.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: e.color, fontWeight: 700, fontSize: 11 }}>Action: </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{e.action}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "leaders" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {LEADERS.map((l, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${l.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: l.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{l.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{l.company}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{l.desc}</p>
                <div style={{ background: `${l.color}08`, border: `1px solid ${l.color}15`, borderRadius: 6, padding: "6px 10px" }}>
                  <span style={{ color: l.color, fontSize: 10, fontWeight: 800 }}>Core Conviction: </span>
                  <span style={{ color: TEXT, fontSize: 11 }}>{l.conviction}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{r.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{r.author} · {r.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
