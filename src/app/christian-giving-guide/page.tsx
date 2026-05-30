"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "organizations" | "practical";

const THEOLOGY_POINTS = [
  { title: "Tithing: The Foundation", color: GREEN, reference: "Malachi 3:10; Leviticus 27:30; Matthew 23:23", content: "The tithe — 10% of income given to God through the local church — is the biblical baseline for Christian giving. Jesus affirmed tithing (Matthew 23:23) while calling the Pharisees to combine it with justice and mercy. The Malachi 3 passage contains one of the few places God invites His people to test Him: bring the full tithe and see if I do not open the floodgates of heaven. The tithe belongs to God; giving beyond it is an offering." },
  { title: "Generosity as Gospel Response", color: PURPLE, reference: "2 Corinthians 9:6-8; Luke 19:8-10", content: "The New Testament rarely commands specific percentages but consistently links generosity to transformed hearts. Zacchaeus's conversion was instantly visible in his giving. Paul describes the Macedonian churches — in severe poverty — giving beyond their ability because they first gave themselves to the Lord (2 Corinthians 8:5). Generosity is a fruit of grace, not a mechanism for earning it." },
  { title: "The Cheerful Giver", color: "#3B82F6", reference: "2 Corinthians 9:7; Proverbs 11:24-25", content: "God loves a cheerful giver — the Greek word is hilaros (from which we get hilarious). Giving done grudgingly, under compulsion, or to manage guilt does not align with the biblical model. The goal is giving that flows from abundance of heart — trusting God's provision enough that releasing money feels like freedom rather than deprivation." },
  { title: "Giving and Your Own Accumulation", color: "#EF4444", reference: "Luke 12:15-21; 1 Timothy 6:17-19", content: "Jesus warned against covetousness with more intensity than almost any other sin. His parable of the Rich Fool diagnoses the core problem: accumulating treasure for yourself while not being rich toward God. Paul does not command wealthy Christians to divest but to be generous and willing to share — and warns that the love of money (not money itself) is a root of all kinds of evil." },
  { title: "Giving to the Local Church First", color: "#F59E0B", reference: "1 Corinthians 16:2; Nehemiah 10:38; Hebrews 10:25", content: "The primary recipient of the tithe in both Testaments is the community of God's people — the tabernacle, the Temple, the local church. The local church is the base from which missions, mercy, and ministry flow. Christians who give to parachurch organizations but neglect their local church are building on a foundation they have not helped fund." },
  { title: "Giving to the Poor", color: "#10B981", reference: "Proverbs 19:17; Matthew 25:31-46; James 2:14-17", content: "Scripture treats giving to the poor as giving to God directly (Proverbs 19:17) and identifies care for the poor with authentic faith (James 2). Jesus in Matthew 25 describes the judgment in terms of whether we fed, clothed, and visited those in need — identifying Himself with the poor. This is not a works-salvation text but a character-of-the-kingdom text: those who truly know the King share His heart for the poor." },
  { title: "Giving as Investment in Eternity", color: PURPLE, reference: "Matthew 6:19-21; Luke 16:9; 1 Timothy 6:19", content: "Jesus urges investment in treasure in heaven — wealth that cannot be destroyed, stolen, or inflated away. Luke 16:9 is startling: use worldly wealth to gain friends for yourselves, so that when it is gone, you will be welcomed into eternal dwellings. The implication is that money given to advance the gospel and serve people is converting temporal resources into eternal relationships." },
];

const GIVING_ORGS = [
  { name: "Your Local Church", priority: "First Priority", color: GREEN, why: "The local church is the primary vehicle of God's mission in the world. It is the community where you are formed, accountable, and sent. Your giving makes the preaching, discipleship, mercy ministry, and missions of your church possible. No giving portfolio is complete without consistent, substantial local church support.", how: "Set up recurring giving through your church's online platform or autopay" },
  { name: "Wycliffe Bible Translators", priority: "Bible Translation", color: PURPLE, why: "Over 1,500 languages still have no Scripture. Every $1 invested in Bible translation reaches people groups who have no way to access God's word. Wycliffe has the most proven infrastructure for this task.", how: "wycliffe.org/give — supports translation projects directly; also missionary sponsorship" },
  { name: "Open Doors / Voice of the Martyrs", priority: "Persecuted Church", color: "#EF4444", why: "360 million Christians face persecution globally. Supporting the persecuted church is both a biblical mandate and a fulfillment of 1 Corinthians 12:26 — when one member suffers, all suffer. Both organizations provide verifiable, field-level impact.", how: "opendoorsusa.org; persecution.com — regular or one-time giving" },
  { name: "Samaritan's Purse", priority: "Disaster Relief", color: "#F59E0B", why: "Samaritan's Purse deploys quickly to genuine disaster zones worldwide with medical care, food, and shelter — combining practical relief with clear gospel proclamation. Operation Christmas Child is among the most cost-effective child-to-child gospel deliveries in existence.", how: "samaritanspurse.org — disaster relief fund; Operation Christmas Child shoebox" },
  { name: "International Justice Mission", priority: "Justice / Anti-Slavery", color: "#3B82F6", why: "IJM is the largest international anti-slavery organization in the world, deploying lawyers, investigators, and aftercare workers to prosecute traffickers and rescue victims. Founded by Gary Haugen, IJM models how Christians can pursue biblical justice in the legal system.", how: "ijm.org/give — case work directly prosecuting traffickers in Southeast Asia, Africa, Latin America" },
  { name: "Compassion International", priority: "Child Development", color: "#10B981", why: "Compassion's child sponsorship model provides holistic development (education, nutrition, healthcare, discipleship) through local church partnerships in 29 countries. Independent research has verified that Compassion sponsorship significantly increases children's probability of college completion, higher income, and church leadership.", how: "compassion.com — sponsor a child from $38/month; proven model with decades of research" },
  { name: "Gospel Coalition / Ligonier / The Village Church", priority: "Theological Resources", color: GREEN, why: "Giving to organizations that produce free theological content — TGC, Ligonier, desiringgod.org — extends the reach of sound doctrine worldwide. Much of the best theology available today is free because donors fund it.", how: "thegospelcoalition.org/donate; ligonier.org/give; desiringgod.org/donate" },
];

const PRACTICAL_TIPS = [
  { tip: "Give first, before bills", color: GREEN, detail: "Automated giving at the beginning of the month treats the tithe as a first-fruit (Proverbs 3:9) rather than a leftover. Giving what remains after expenses consistently produces less giving and more guilt." },
  { tip: "Agree on giving as a couple", color: PURPLE, detail: "Giving is one of the top five financial conflict areas in marriage. Discuss and agree on a giving percentage and priority list together. Covert giving — one spouse giving without telling the other — damages trust even when the giving is good." },
  { tip: "Track your giving annually", color: "#3B82F6", detail: "At year-end, look at your actual giving percentage. Most Christians significantly overestimate how much they give. The data is often humbling and clarifying." },
  { tip: "Give to what you know", color: "#F59E0B", detail: "Before increasing giving to any organization, read their annual report, look at their Charity Navigator/GiveWell rating, and understand where the money goes. Informed generosity is more consistent and more sacrificial than reactive giving." },
  { tip: "The 10/10/80 rule", color: "#10B981", detail: "Give 10% to the local church, save 10% for the future, live on 80%. This simple framework — advocated by Howard Dayton and Crown Financial Ministries — creates a foundation for long-term financial faithfulness." },
  { tip: "Consider a giving fund (DAF)", color: "#EF4444", detail: "A Donor Advised Fund (DAF) — available through Fidelity Charitable, National Christian Foundation, etc. — lets you donate in high-income years and distribute over time. You get the tax deduction immediately; you give when the time is right. NCF particularly serves Christian giving." },
  { tip: "Increase by 1% annually", color: PURPLE, detail: "If the tithe feels impossible now, commit to increasing your giving percentage by 1% every year. At that rate, someone giving 3% today reaches the tithe in 7 years — without a dramatic lifestyle shock at any single point." },
];

export default function ChristianGivingGuidePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Giving Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The biblical theology of generosity, the best organizations to support, and practical strategies for making giving a central discipline of Christian life. You cannot out-give God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content" }}>
          {(["theology", "organizations", "practical"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Theology of Giving" : t === "organizations" ? "Where to Give" : "Practical Tips"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_POINTS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{p.reference}</div>
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

        {tab === "organizations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {GIVING_ORGS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${o.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ color: o.color, fontWeight: 800, fontSize: 15 }}>{o.name}</div>
                  <span style={{ background: `${o.color}15`, color: o.color, padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{o.priority}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: "0 0 10px" }}>{o.why}</p>
                <div style={{ background: `${o.color}08`, border: `1px solid ${o.color}15`, borderRadius: 8, padding: "6px 12px" }}>
                  <span style={{ color: o.color, fontWeight: 700, fontSize: 10 }}>HOW: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{o.how}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "practical" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {PRACTICAL_TIPS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{t.tip}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
