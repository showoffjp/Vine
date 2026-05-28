"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Tithe", verse: "Malachi 3:10", body: "The tithe — ten percent — is the baseline of OT giving, predating the Mosaic law (Abraham tithed to Melchizedek in Genesis 14) and woven throughout it. The prophetic challenge of Malachi 3:10 ('Bring the whole tithe into the storehouse') frames giving as an act of trust and covenant faithfulness. Jesus affirms tithing in Matthew 23:23 while insisting it should not displace justice and mercy. For most Christians, the tithe is the floor of generosity, not the ceiling." },
  { title: "Hilarious Giving", verse: "2 Corinthians 9:7", body: "Paul's word for the giving God loves is hilaros — 'cheerful' in most translations, but more accurately joyful or even hilarious. 'God loves a cheerful giver' (2 Corinthians 9:7). The giving God is pleased by is not grudging compliance but delighted participation in what he is doing. The cheerfulness is not manufactured; it comes from actually believing what Paul says in the surrounding verses: that God is lavishly generous and that what you give is seed, not a loss." },
  { title: "Proportional to Blessing", verse: "2 Corinthians 8:12", body: "'For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have' (2 Corinthians 8:12). The NT does not set a fixed amount for everyone but proportionality to what has been received. The Macedonian churches in 2 Corinthians 8 gave out of extreme poverty — 'beyond their ability' — not out of abundance. Generosity is not correlated with income; it is correlated with the understanding of grace." },
  { title: "Treasure in Heaven", verse: "Matthew 6:19-21", body: "'Do not store up for yourselves treasures on earth, where moths and vermin destroy and where thieves break in and steal. But store up for yourselves treasures in heaven' (Matthew 6:19-20). Jesus frames giving as investment — not loss. What is given away in his name is not consumed; it is transferred to an account that cannot be seized or devalued. The logic of generosity is eschatological: you are trading depreciating assets for eternal ones." },
  { title: "The Gospel's Generous Logic", verse: "2 Corinthians 8:9", body: "'For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich' (2 Corinthians 8:9). Paul does not ground giving in obligation or guilt but in the gospel. The movement of God in Christ is always downward and outward — from abundance toward need. Giving is not a transaction but a participation in the same movement. Generosity is the gospel lived out in material form." },
];

const QUESTIONS = [
  { q: "Should I tithe on gross or net income?", a: "The question assumes a tax system the ancient world did not have, so Scripture doesn't address it directly. The more important question is: does the amount I give reflect a genuine first-fruits posture — trusting God with the first portion rather than giving from what's left? Whether gross or net, the tithe is a starting orientation, not a formula." },
  { q: "What if I can't afford to give 10%?", a: "Begin where you are and grow. Paul's instruction is proportionality: give according to what you have, not what you don't. Even giving 1-2% intentionally and prayerfully is more honoring to God than giving 10% mechanically. But also examine the budget honestly — most people who say they cannot give have not yet looked hard at what they spend on entertainment, dining, or impulse purchases." },
  { q: "Should I give to my local church or to other organizations?", a: "The NT pattern is local church first: 'Bring the whole tithe into the storehouse' (the local worshipping community). This funds the ministry you are part of and provides accountability. Giving beyond the tithe (offerings) can and should extend to parachurch organizations, mission work, and direct neighbor care. Think of it as: tithe to the church, offer beyond it." },
  { q: "How do I handle giving when I disagree with how the church uses money?", a: "If your disagreement is substantial and persistent, raise it through legitimate channels — speak to an elder or finance team. If the problem is systemic, it may be a reason to reconsider church membership. But most disagreement about budget allocations should not interrupt giving — you are not hiring a manager for your donation; you are participating in a covenant community whose leadership you trust." },
  { q: "What about giving to individuals vs. organizations?", a: "Both are valid and complementary. Direct giving to people in need has New Testament precedent (Acts 2:44-45, 4:34-35). Organizations bring efficiency, expertise, and accountability. Combining both — giving to organizations you trust and responding directly to needs you see — reflects the breadth of NT generosity. Proximity matters: you cannot ignore the need in front of you." },
  { q: "Is giving anonymous or should it be acknowledged?", a: "Jesus warns against giving 'to be seen by others' (Matthew 6:1) — giving for reputation is its own reward and forfeits the eternal one. At the same time, open generosity can inspire others (2 Corinthians 9:2). The question is motive: is the acknowledgment about inspiring others or about being seen? Anonymous giving trains the right posture; some acknowledged giving is genuinely others-oriented." },
];

const PRACTICES = [
  { title: "Give First", desc: "Budget your giving before your spending — not as a spiritual discipline to feel good about but as a statement of trust. The first-fruits principle is that giving first expresses dependence on God rather than self. Automated giving makes this concrete.", icon: "🥇" },
  { title: "Give Regularly", desc: "Irregular giving is emotionally volatile. Regular giving — weekly, monthly — builds the habit and removes the emotional negotiation about whether to give today. Paul's instruction in 1 Corinthians 16:2 is to set aside on the first day of every week.", icon: "📅" },
  { title: "Give Sacrificially Once a Year", desc: "The Macedonians gave 'beyond their ability' in a moment of particular generosity. Once a year, give an amount that requires actual sacrifice — that requires you to forgo something. This stretches faith and resets the baseline of what is possible.", icon: "🔥" },
  { title: "Give to People Directly", desc: "Keep cash or gift cards available for direct giving to people you encounter. The man who stopped for the wounded stranger (Luke 10) did not write a check to a charitable organization. Proximity-based giving develops the compassion muscle and keeps generosity human.", icon: "🤝" },
  { title: "Teach Your Children", desc: "Give children an allowance structured for giving, saving, and spending. Let them decide which organizations to support. Take them with you when you give directly to people. Generosity is caught, not just taught — which means it happens in visible practice.", icon: "👶" },
  { title: "Track It and Review It", desc: "At year end, look at what you gave — the total, to whom, and why. Did your giving reflect your actual values? Were there opportunities you missed? Does the amount represent genuine sacrifice or trivial rounding? Annual review prevents giving from going on autopilot.", icon: "📊" },
];

export default function ChurchGivingPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💛</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Giving</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God loves a cheerful giver. Giving is not a tax, not a transaction, and not an obligation — it is the gospel lived out in material form, participating in the same movement of grace that brought Christ to us.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Common Questions", icon: "❓" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
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

        {activeTab === "questions" && (
          <div>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === q.q ? null : q.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === q.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{q.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.q ? "−" : "+"}</span>
                </button>
                {expanded === q.q && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Generosity is a habit, not a feeling. These six practices move giving from occasional impulse to intentional way of life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
