"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

const FOUNDATIONS = [
  { title: "All Work Is Sacred", ref: "Colossians 3:23-24", color: GREEN, content: "'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters' (Col 3:23). The Reformation recovered this — Luther taught that the cobbler's shop is as holy as the cathedral when the cobbler works for God's glory. The sacred/secular divide is a Greek idea, not a biblical one. Every legitimate occupation can be a calling, not just church ministry." },
  { title: "The Theology of Vocation", ref: "Genesis 1:28; Ephesians 2:10", color: PURPLE, content: "Vocation (from Latin 'vocare': to call) means your work is given to you by God. Before sin entered creation, work was already part of what it meant to be human — tending the garden, naming the animals, cultivating creation (Gen 1-2). Ephesians 2:10 says we are 'God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.' Your work life is pre-loaded with divine purpose." },
  { title: "Business as Mission", ref: "Matthew 28:18-20; Acts 18:3", color: GOLD, content: "Paul was a tent-maker. He used business to fund mission, build relationships across social barriers, and model dignified work. Business as Mission (BAM) is a movement recognizing that commercial enterprise in underserved communities is not a compromise of mission — it IS mission. Creating jobs, paying fair wages, building trustworthy institutions — these are kingdom activities." },
  { title: "Wealth as Stewardship", ref: "Luke 16:11; Matthew 25:14-30", color: "#3B82F6", content: "The parable of the talents (Mt 25) is a business parable — three employees given capital to invest on behalf of their employer. The commended employees doubled what they were given. The rebuked one buried it. Jesus presents faithful economic activity as a picture of kingdom faithfulness. Wealth is not evil; hoarding it and refusing to invest it for others' flourishing is what Jesus criticizes." },
  { title: "Integrity Under Pressure", ref: "Daniel 6; Proverbs 11:1", color: "#EF4444", content: "Daniel served in the Babylonian and Persian civil service at the highest levels without compromising his integrity. His excellence in work — 'he distinguished himself above all the other administrators' (Dan 6:3) — was undeniable. The marketplace is one of the most demanding tests of whether what we believe on Sunday shapes how we behave on Monday." },
  { title: "Sabbath and the Refusal to Overwork", ref: "Exodus 20:8-11; Deuteronomy 8:17-18", color: "#10B981", content: "The Sabbath command is anti-anxiety legislation. God knew his people would be tempted to overwork — to believe that their prosperity came from their labor alone. The Sabbath resets this lie weekly: you are not the source of your own provision. God is. The person who cannot stop working has made an idol of their productivity." },
];

const HARD_CASES = [
  { scenario: "When the culture pressures you to compromise", color: GREEN, situation: "Your industry normalizes behavior you know is wrong — exaggerating results, treating workers as disposable, engaging in deals that everyone does.", approach: "Name the pressure clearly. What specifically is being asked? Find mentors who have navigated this. Some compromises are worth the professional cost of refusing. Consider: if your industry cannot survive honest people, the industry has a structural problem the gospel speaks to." },
  { scenario: "Christians in positions of power", color: PURPLE, situation: "You have significant decision-making authority over people, resources, or policy. How does the gospel shape how you use that power?", approach: "Jesus's definition of leadership is service (Mark 10:42-45). Power used for self-protection or to silence dissent is a failure of Christian character regardless of the bottom line. Servant leadership is not a management style — it is a counter-cultural claim about what power is for." },
  { scenario: "Layoffs, restructuring, and hard decisions", color: "#EF4444", situation: "Economic necessity may require decisions that cause real pain to real people. How do Christians make these decisions differently?", approach: "The decision may be unavoidable. How it is made is not. Transparency. Genuine care for transition. Severance beyond the legal minimum where possible. Treating the laid-off with the dignity of image-bearers — not as problems to be eliminated." },
  { scenario: "Fair wages and worker dignity", color: GOLD, situation: "James 5:1-6 is the most severe judgment in the NT against those who withhold wages. The marketplace's treatment of its most vulnerable participants is a direct moral concern.", approach: "Pay above minimum wage where possible. Provide benefits that enable dignity. Fight supply chains that rely on unjust labor. The Christian business owner has a higher standard than legal compliance — the biblical standard of worker dignity." },
  { scenario: "Environmental stewardship in business", color: "#10B981", situation: "Decisions about how your business treats creation — waste, energy, supply chains — are matters of Christian ethics, not just corporate PR.", approach: "Genesis 1-2 assigns humans the role of stewards of creation. The Christian business is not required to be unprofitable, but it must take seriously the true costs of its environmental impact — including costs externalized onto future generations." },
];

const VOICES = [
  { name: "Tim Keller", book: "Every Good Endeavor (2012)", color: GREEN, quote: "Christians should be the best workers in the world, and the most creative workers, because they understand that work is a calling to serve God and neighbor, not just a means to a paycheck.", contribution: "Keller's theology of work is the most influential recent treatment of the sacred/secular divide, vocation, and cultural renewal through excellent work." },
  { name: "Os Guinness", book: "The Call (1998)", color: PURPLE, quote: "Calling is the truth that God calls us to himself so decisively that everything we are, everything we do, and everything we have is invested with a special devotion, dynamism, and direction.", contribution: "Guinness argues that vocation is not just about your job but about your whole life as a response to God's call — the most comprehensive treatment of calling available." },
  { name: "Dorothy Sayers", book: "Why Work? (1942)", color: GOLD, quote: "The very first demand that his religion makes upon the intelligent carpenter is that he should make good tables.", contribution: "Sayers's 1942 essay remains the sharpest critique of the sacred/secular divide and the most compelling case that excellence in craft is itself a Christian calling." },
  { name: "Andy Crouch", book: "Culture Making (2008)", color: "#3B82F6", quote: "The only way to change culture is to create more of it — Christians in the marketplace are called to make artifacts, institutions, and works of quality that embody kingdom values.", contribution: "Crouch's cultural theology shows how Christians in every field create culture rather than merely critiquing it, and why that matters for mission." },
];

const PRACTICAL_TOOLS = [
  { tool: "The Monday Morning Test", color: GREEN, desc: "Before making a significant workplace decision, ask: If this were reported Monday morning — to your family, your church, your community — would you be at peace with it? The Monday test is a practice of integration between your faith identity and your work identity." },
  { tool: "The Work Inventory", color: PURPLE, desc: "Quarterly: What did I create? What did I build, serve, help, fix, make possible? Seeing your work as creation — contribution to others' flourishing — counteracts the meaninglessness that accumulates in corporate environments." },
  { tool: "Marketplace Prayer Groups", color: GOLD, desc: "Many cities have groups of Christians working in the same industry — finance, medicine, law, education, tech — who meet monthly to pray, share challenges, and support each other. Finding or starting one is one of the most practical things a Christian professional can do." },
  { tool: "The Annual Business Audit", color: "#3B82F6", desc: "Once a year, review your business or career through biblical categories: Am I serving or being served? Am I treating workers with dignity? Am I being honest? Am I stewarding wealth or hoarding it? This is a harder audit than a financial one." },
  { tool: "Margin and Boundaries", color: "#EF4444", desc: "Christians in demanding careers must build structural protection for family, church, and personal health. Margin is not laziness — it is the acknowledgment that you are not infinitely expandable. Overwork is a spiritual problem." },
  { tool: "Excellence as Witness", color: "#10B981", desc: "Your professional excellence is not separate from your Christian witness — it is part of it. Daniel's undeniable competence was the ground on which his faith became visible. In a marketplace hungry for trustworthy people, Christians who are genuinely excellent have a natural platform for credibility." },
];

type Tab = "theology" | "hard-cases" | "voices" | "tools" | "videos";

export default function FaithInMarketplacePage() {
  const [tab, setTab] = useState<Tab>("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0a1a10 50%, #07070F 100%)", padding: "100px 24px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(58,125,86,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 6, padding: "5px 16px", fontSize: 11, color: GREEN, fontWeight: 700, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>Work & Calling</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 300, color: "#f2e6c8", marginBottom: 16, lineHeight: 1.1 }}>
            Faith in the Marketplace
          </h1>
          <p style={{ color: "#9a8f72", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
            Monday through Friday is where most of your life happens. A theology of work that transforms how you show up — not just on Sunday morning.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0 28px", overflowX: "auto" }}>
          {([
            { id: "theology" as const, label: "Theology of Work", icon: "📖" },
            { id: "hard-cases" as const, label: "Hard Cases", icon: "⚖️" },
            { id: "voices" as const, label: "Key Voices", icon: "🗣️" },
            { id: "tools" as const, label: "Practical Tools", icon: "🔧" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ]).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 4 }}>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>The most common question Christians ask their pastor is not about sin or suffering — it is &ldquo;How does my faith connect to my work?&rdquo; The sacred/secular divide that plagues modern Christianity is not a biblical idea. It is a Greek inheritance. The Bible knows no such divide.</p>
            </div>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${f.color}25`, borderRadius: 12, padding: 22, transition: "all 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + "60"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = f.color + "25"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <div style={{ color: f.color, fontWeight: 800, fontSize: 16 }}>{f.title}</div>
                  <span style={{ background: `${f.color}15`, color: f.color, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{f.ref}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 14, margin: 0 }}>{f.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "hard-cases" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {HARD_CASES.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 24 }}>
                <div style={{ color: c.color, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>{c.scenario}</div>
                <div style={{ marginBottom: 14, padding: 14, background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>The Situation</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.situation}</p>
                </div>
                <div style={{ padding: 14, background: `${c.color}08`, borderRadius: 8, borderLeft: `3px solid ${c.color}` }}>
                  <div style={{ color: c.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>Biblical Approach</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.approach}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {VOICES.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${v.color}25`, borderRadius: 12, padding: 22, transition: "all 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = v.color + "60"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = v.color + "25"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ color: v.color, fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 14, fontStyle: "italic" }}>{v.book}</div>
                <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15, fontStyle: "italic", color: "#f2e6c8", margin: "0 0 14px", lineHeight: 1.6, borderLeft: `3px solid ${v.color}`, paddingLeft: 12 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.contribution}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "tools" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {PRACTICAL_TOOLS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}25`, borderRadius: 12, padding: 20, transition: "all 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.color + "60"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${t.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.color + "25"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{t.tool}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>Talks and interviews from leading thinkers on faith, work, and vocation — from theological foundations to practical marketplace challenges.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {[
                { title: "Tim Keller — Every Good Endeavor", id: "OEHQ3jH5YZA", desc: "Keller on the theology of work and cultural renewal" },
                { title: "Os Guinness — The Call to Faithfulness", id: "BjGHhzZGWHE", desc: "Guinness on vocation, identity, and life calling" },
                { title: "Dorothy Sayers on Work & Vocation", id: "w1qSfkiRuQk", desc: "Why excellence in work is a Christian calling" },
                { title: "Faith & Work in the Real World", id: "ZtmD-fEEH-0", desc: "Business leaders on faith, ethics, and mission" },
              ].map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
                    <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div style={{ padding: 14 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{v.desc}</div>
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
