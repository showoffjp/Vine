"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Money Is Not Evil — Love of It Is", verse: "1 Timothy 6:10", body: "'For the love of money is a root of all kinds of evil' (1 Timothy 6:10). The text is routinely misquoted as 'money is the root of all evil.' Paul's point is more precise: money itself is morally neutral — it is the heart's orientation toward it that is dangerous. Paul identifies three disorders: the love of money, the desire to get rich, and covetousness. All are problems of the heart, not the bank account." },
  { title: "Wealth as Stewardship", verse: "Deuteronomy 8:17-18", body: "The Israelites entering the Promised Land were warned against the most dangerous prosperity temptation: 'You may say to yourself, My power and the strength of my hands have produced this wealth for me. But remember the Lord your God, for it is he who gives you the ability to produce wealth' (Deuteronomy 8:17-18). All wealth is received, not generated. The productive capacity, the health, the social context, the timing — all are given. Stewardship follows from this: you manage what belongs to another." },
  { title: "The Deceitfulness of Riches", verse: "Mark 4:19", body: "In the parable of the sower, 'the worries of this life, the deceitfulness of wealth and the desires for other things come in and choke the word, making it unfruitful' (Mark 4:19). Wealth is deceitful — it promises security, significance, freedom, and satisfaction, and it cannot deliver on any of these promises. The person who has found their security, significance, and satisfaction in God is free to use money without being used by it." },
  { title: "The Rich Young Ruler", verse: "Mark 10:21-22", body: "The story of the rich young ruler is the most direct confrontation with wealth in the Gospels. He kept all the commandments — but Jesus asked for the one thing he could not give: his possessions. 'He went away sad, because he had great wealth' (10:22). The wealth owned him. Jesus's diagnosis — 'how hard it is for the rich to enter the kingdom of God' (10:23) — applies to virtually every Western Christian. The question is not how much you have but who owns whom." },
  { title: "Generous and Content", verse: "Philippians 4:11-12", body: "Paul's testimony from prison: 'I have learned, in whatever state I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger' (Philippians 4:11-12). Contentment is learned — it is a practiced skill, not a passive feeling. The secret Paul discovered is Christ as the source of sufficiency (4:13). Contentment and generosity are the double fruit of a life secured in God rather than money." },
];

const PITFALLS = [
  { pitfall: "Lifestyle Inflation", desc: "Every pay raise is consumed by higher spending rather than increased giving or saving. The standard of living rises in lockstep with income, leaving the same percentage available for giving and the same sense of scarcity despite more.", response: "Decide in advance that a set percentage of any income increase goes to giving and savings before lifestyle adjusts. The time to decide is before the money arrives, not after you've built new expectations." },
  { pitfall: "Debt as Normal Life", desc: "Consumer debt — car loans, credit cards, student loans, mortgages — is so normalized that carrying significant interest-bearing debt feels like ordinary financial life rather than a constraint on freedom and generosity.", response: "Debt is not neutral; it is future servitude. Pay off consumer debt aggressively and avoid new debt outside of carefully considered mortgage decisions. Freedom from debt creates margin for generosity." },
  { pitfall: "Comparative Spending", desc: "Spending patterns are shaped by social environment — we unconsciously calibrate our lifestyle to match or slightly exceed the people around us. This produces envy, discontent, and financial decisions driven by status rather than values.", response: "Compare your spending to your values, not your neighbors. Write down what you actually believe about money and regularly check your actual spending against those stated beliefs." },
  { pitfall: "Financial Anxiety", desc: "Fear about money — losing it, not having enough, unexpected expenses — can be as consuming as greed. Financial anxiety takes many forms: excessive saving, inability to give, compulsive checking of accounts, catastrophic thinking.", response: "Jesus's address to anxiety (Matthew 6:25-34) is not financial advice but a reorientation of trust. Regular generosity is one of the most effective treatments for financial anxiety — it interrupts the hoarding reflex." },
  { pitfall: "Prosperity Gospel Thinking", desc: "The belief, often implicit and unacknowledged, that faithfulness to God produces financial blessing and that suffering is a sign of spiritual failure or insufficient faith. This reads economic success as divine approval.", response: "The prosperity gospel is directly refuted by the cross, by Paul's poverty (2 Corinthians 11:27), by Hebrews 11's hall of faith (who 'wandered in deserts'). Faithfulness is not always rewarded financially in this age." },
];

const PRACTICES = [
  { title: "Give First, Not Last", desc: "Make giving the first transaction of every paycheck, not what remains after all expenses. Most people intend to give and find nothing left. Giving first establishes your actual priorities, not your theoretical ones. Start at 10% and let generosity grow from there.", icon: "💝" },
  { title: "Create a Spending Plan", desc: "A budget is not a restriction — it is a plan for expressing your values with money. Without a plan, money leaks toward defaults and advertisers' suggestions rather than your genuine priorities. Monthly planning takes 30-60 minutes and increases financial clarity significantly.", icon: "📊" },
  { title: "Eliminate Consumer Debt Aggressively", desc: "Interest-bearing consumer debt (credit cards, car loans, personal loans) creates a hidden tax on your income that reduces both margin and freedom. The debt snowball (smallest debt first) or avalanche (highest interest first) methods both work — consistency is the key variable.", icon: "🏔️" },
  { title: "Practice Anonymous Generosity", desc: "Jesus warns against giving to be seen (Matthew 6:1-4). Give in ways where no one will know — anonymously fund a need, pay for someone's meal without disclosure, contribute to a cause without recognition. This trains the heart toward giving as its own reward.", icon: "🤫" },
  { title: "Have Regular Money Conversations", desc: "If married, monthly money conversations prevent financial secrecy, align priorities, and prevent money from becoming a source of conflict. If single, find a trusted friend or financial counselor who will ask you honest questions about your spending and giving patterns.", icon: "💬" },
  { title: "Fast from Spending Periodically", desc: "Identify a category of spending (restaurants, clothing, entertainment) and abstain for a month. Use the margin created for giving. The discipline surfaces how much emotional weight you have placed on spending in that category and creates space to evaluate whether it serves your values.", icon: "🚫" },
];

export default function ChristianMoneyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "pitfalls" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Money and the Christian Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus talked about money more than heaven and hell combined. This is not because money is the most important thing — it is because money competes with God for the heart more effectively than almost anything else.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "pitfalls" as const, label: "Common Pitfalls", icon: "⚠️" },
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

        {activeTab === "pitfalls" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Financial faithfulness is not just about giving — it includes the whole orientation of the heart toward money. These five pitfalls are the most common patterns that undermine financial discipleship.
              </p>
            </div>
            {PITFALLS.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.pitfall ? null : o.pitfall)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.pitfall ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.pitfall}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.pitfall ? "−" : "+"}</span>
                </button>
                {expanded === o.pitfall && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{o.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
                    </div>
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
                Financial faithfulness is built through habits and structures, not through occasional heroic decisions. These six practices create the conditions for generosity and contentment to grow.
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
