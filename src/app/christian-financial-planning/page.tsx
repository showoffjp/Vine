"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "All of It Belongs to God — Ownership Theology as the Foundation", verse: "Ps 24:1", text: "The earth is the Lord’s, and everything in it, the world, and all who live in it (Ps 24:1). The foundational shift in Christian financial thinking is not budgeting technique or investment strategy — it is the move from the ownership frame to the stewardship frame. In the ownership frame, it is your money: God gets a percentage as an obligation. In the stewardship frame, it is God’s money: you are a manager responsible for deploying it according to the Owner’s purposes. That single reorientation changes every financial decision. The steward spends differently because every purchase is an allocation of the Owner’s resources. The steward gives differently because generosity is not charity from surplus but faithful management. The steward saves and invests differently because building margin and capacity serves the Owner’s long-term purposes. Ps 24:1 is not a verse for stewardship sermons; it is the operating premise of a Christian financial life." },
  { title: "The Tithe as First Fruits — Why Giving Precedes Planning", verse: "Mal 3:10", text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it (Mal 3:10). The first-fruits principle, established in Proverbs 3:9-10, places giving at the beginning of the financial plan, not the end. The pragmatic budget puts giving last: whatever is left after expenses, savings, and discretionary spending goes to the church. The first-fruits budget reverses the sequence: giving comes off the top, before expenses are tallied, as an act of trust that the remaining 90% is sufficient under God’s provision. This is not a prosperity formula but a theological orientation. Christians who tithe consistently and systematically report a discipline-shaping effect on the rest of their financial life: when giving is non-negotiable, every other spending decision is made with greater intentionality." },
  { title: "Saving, Investing, and the Ant’s Wisdom", verse: "Prov 6:6-8", text: "Go to the ant, you sluggard; consider its ways and be wise! It has no commander, no overseer or ruler, yet it stores its provisions in summer and gathers its food at harvest (Prov 6:6-8). The Bible does not idealize poverty or sanctify financial imprudence. Proverbs celebrates the ant’s instinct for preparation and the wise person who stores provisions against future need. Prov 21:20 adds: the wise store up choice food and olive oil, but fools gulp theirs down. The biblical framework supports saving as preparation and margin-building, and it supports investing as faithful development of the resources entrusted to us (see Matt 25). The key distinction is between saving — which builds capacity and reduces dependence on debt — and hoarding — which accumulates security apart from God and closes the hand to generosity. The Christian saves and invests in order to give more, serve longer, and depend on debt less." },
  { title: "Debt — the Borrower Is Slave", verse: "Prov 22:7", text: "The rich rule over the poor, and the borrower is slave to the lender (Prov 22:7). Scripture does not declare all debt sinful, but it consistently treats debt as a condition to be escaped rather than embraced. The borrower is slave: debt constrains choices, compels labor, and reduces the freedom to respond to kingdom opportunities. Consumer debt — credit cards, car loans on depreciating assets, lifestyle financing — is the form most destructive to Christian generosity and financial peace. When debt payments consume 30-40% of income, the capacity for giving, saving, and kingdom investment is severely limited. Working toward debt freedom is a stewardship goal because debt freedom is freedom: the freedom to give more, to serve without financial compulsion, to take risks for the kingdom without the weight of obligations to lenders. Mortgage debt on appreciating assets is a different category — but even here, the goal of increasing equity and reducing obligation over time reflects the biblical orientation toward freedom." },
  { title: "Legacy Planning — What Christians Leave Behind", verse: "Prov 13:22", text: "A good person leaves an inheritance for their children’s children, but a sinner’s wealth is stored up for the righteous (Prov 13:22). Estate planning is not a morbid concession to mortality; it is a stewardship act. What you do with the resources God entrusted to you after you no longer need them is a significant financial decision. The Christian who leaves no will, designates no beneficiaries, and makes no giving intentions has abdicated the final stewardship decision of their life. Intentional Christian legacy planning asks: How much is enough to leave to children — enough to bless, not so much as to harm? What kingdom causes should receive at death what they could not receive during life? Charitable bequests, donor-advised funds, and charitable remainder trusts are tools that enable the generosity of a lifetime to be expressed in its final act. Every Christian couple over 40 should have current wills, updated beneficiaries, and documented giving intentions — not because death is near, but because stewardship does not end with breath." },
];

const voices = [
  { name: "Ron Blue", role: "Splitting Heirs", quote: "The question is not how much of my money I give to God, but how much of God’s money I keep for myself. That reframing changes everything about how you budget, invest, and plan.", bio: "Ron Blue is one of the most respected voices in Christian financial planning, having founded Ronald Blue Trust and authored more than two dozen books on personal finance from a biblical framework. Splitting Heirs addresses the estate planning question that most Christian financial books avoid: how to leave an inheritance that blesses rather than harms. His approach to intentional, generosity-oriented financial planning has shaped the thinking of Christian financial advisors for decades." },
  { name: "Randy Alcorn", role: "The Treasure Principle", quote: "You can’t take it with you — but you can send it on ahead. Every dollar given to kingdom purposes is an eternal investment. Financial planning from a Christian perspective is not about accumulating the most; it is about deploying the most for eternal purposes.", bio: "Randy Alcorn’s The Treasure Principle is the most widely read short book on Christian giving, having sold over a million copies since its publication. Its central thesis — that giving is not a subtraction from wealth but a transfer to an eternal account — reframes the entire financial planning conversation. Alcorn himself made a decision to cap his lifestyle and give away all royalties from his books, demonstrating that his argument is not abstract." },
  { name: "Howard Dayton", role: "Your Money Counts", quote: "The Bible has more to say about money than about heaven and hell combined. God is deeply interested in how we handle finances because our relationship with money reveals the true condition of our hearts.", bio: "Howard Dayton founded Crown Financial Ministries and authored Your Money Counts, which provides the most comprehensive biblical financial framework available for lay readers. His work covers every stage of the financial life: debt elimination, budgeting, saving, investing, giving, and estate planning — all anchored in specific Scripture. Crown Financial Ministries has trained millions of people worldwide in biblical financial principles through small-group curricula and one-on-one coaching." },
];

const practices = [
  { icon: "📊", title: "Monthly Budget Review with Prayer", text: "Once a month, review your actual spending against your planned budget — and begin that review with prayer, asking: Is our spending aligned with our stated values? Where did we overspend, and what does that reveal? This practice catches drift before it becomes habit and keeps the stewardship frame active throughout the year." },
  { icon: "🎁", title: "Annual Giving Review and Goal-Setting", text: "Once a year, review your total giving against your income. Are you giving as generously as God has provided for? Set a specific giving goal for the coming year, written down and agreed upon by both spouses. Many Christian financial teachers recommend increasing the giving percentage by 1% per year until giving exceeds 10%." },
  { icon: "🏦", title: "Emergency Fund Building", text: "Before investing aggressively, build 3-6 months of living expenses in a liquid savings account. This is not lack of faith; it is the ant’s wisdom. An emergency fund eliminates the need to carry high-interest debt through job loss, medical events, or home repairs. It creates the margin that allows giving to remain consistent through seasons of reduced income." },
  { icon: "📈", title: "Retirement Savings with Kingdom Perspective", text: "Fund retirement to enable generous later-life service, not to hoard. The Christian who builds retirement savings is building the capacity to give time, energy, and money in the final third of life without financial desperation. Maximize employer matches; use tax-advantaged accounts; invest consistently over decades. Retirement is not the finish line — it is the platform for the most unencumbered season of kingdom investment." },
  { icon: "📜", title: "Estate Planning Conversation", text: "Every couple over 40 should have current wills, updated beneficiary designations on all retirement accounts and insurance policies, and documented giving intentions. Schedule a specific meeting with a Christian estate planning attorney. Do not let inertia make the final stewardship decision of your life by default." },
];

const scriptures = [
  { verse: "Ps 24:1", text: "The earth is the Lord’s, and everything in it, the world, and all who live in it." },
  { verse: "Prov 22:7", text: "The rich rule over the poor, and the borrower is slave to the lender." },
  { verse: "Mal 3:10", text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." },
  { verse: "Luke 12:15-21", text: "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions. Then he told them this parable: The ground of a certain rich man yielded an abundant harvest… But God said to him, ‘You fool! This very night your life will be demanded from you.’" },
  { verse: "Matt 25:14-30", text: "It will be like a man going on a journey, who called his servants and entrusted his wealth to them… His master replied, ‘Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.’" },
  { verse: "Prov 13:22", text: "A good person leaves an inheritance for their children’s children, but a sinner’s wealth is stored up for the righteous." },
];

const videos = [
  { id: "Y4PsmQ9wqvA", title: "Biblical Financial Planning — A Christian Framework" },
  { id: "mBzd1sAkSos", title: "Randy Alcorn on The Treasure Principle" },
  { id: "xmLyEwEBJqs", title: "Howard Dayton on Money and the Bible" },
  { id: "rEFJW6OQcZs", title: "Christian Debt Freedom and Stewardship" },
];

type CFPEntry = { id: string; date: string; area: string; current: string; goal: string };

export default function ChristianFinancialPlanningPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CFPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrfinplan_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jCurrent, setJCurrent] = useState("");
  const [jGoal, setJGoal] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrfinplan_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jArea.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, current: jCurrent, goal: jGoal }, ...prev]);
    setJArea(""); setJCurrent(""); setJGoal("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Finance &amp; Stewardship</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Financial Planning</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Budgeting, investing, giving, and legacy from the stewardship frame — managing God’s resources with wisdom, generosity, and eternal perspective.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GOLD, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GOLD, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Financial Planning Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Identify an area of finances you want to improve, where you are now, and where you want to be in 12 months.</p>
            {[
              { label: "Area (which area of finances you want to improve)", val: jArea, set: setJArea },
              { label: "Current (where you are now)", val: jCurrent, set: setJCurrent },
              { label: "Goal (where you want to be in 12 months)", val: jGoal, set: setJGoal },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GOLD, color: "#07070F", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: GOLD, marginBottom: 4 }}>Past Entries ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.area}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.current && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Current: {e.current}</p>}
                    {e.goal && <p style={{ fontSize: "0.88rem", color: MUTED }}>Goal: {e.goal}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GOLD }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
