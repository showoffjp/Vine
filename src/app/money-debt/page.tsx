"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Money Is a Spiritual Issue", verse: "Matthew 6:24", body: "'You cannot serve both God and money' (Matthew 6:24). Jesus said more about money than about heaven and hell combined. Money is not morally neutral — it tends toward lordship. It promises security, identity, and freedom that only God can provide. The question is not whether you have money but whether money has you." },
  { title: "Debt Is a Form of Slavery", verse: "Proverbs 22:7", body: "'The borrower is slave to the lender' (Proverbs 22:7). Debt is not simply a financial condition — it is a relational one. It limits freedom, constrains generosity, and shapes major life decisions for years or decades. The biblical authors treated debt with deep caution — not as a tool to leverage growth but as a burden to be avoided and eliminated." },
  { title: "The Danger of Wealth", verse: "1 Timothy 6:9-10", body: "'Those who want to get rich fall into temptation and a trap' (1 Timothy 6:9). The danger of wealth is not wealth itself — it is the love of money, which Paul calls 'a root of all kinds of evil.' Wealth amplifies character: it makes generous people more generous and self-centered people more self-centered. The question for the wealthy is not whether to have it but how to hold it." },
  { title: "Contentment as a Discipline", verse: "Philippians 4:11-12", body: "'I have learned, in whatever state I am, to be content' (Philippians 4:11). Paul did not say contentment was natural — he said he learned it. Contentment is not the absence of desire for better things; it is the discipline of finding sufficiency in what God has provided while trusting him for what comes next. It is the alternative to both anxiety and greed." },
  { title: "Generosity as Antidote", verse: "2 Corinthians 9:6-8", body: "'Whoever sows generously will also reap generously' (2 Corinthians 9:6). The primary antidote to money's power is not budgeting — it is giving. Giving breaks money's hold by demonstrating, concretely, that you are not its slave. 'God loves a cheerful giver' — not a reluctant or compelled one. Cheerful generosity is a sign that money is serving you, not ruling you." },
];

const PRINCIPLES = [
  { title: "Spend Less Than You Earn", desc: "This is the foundation. Every financial principle assumes this one. No investment strategy, no debt reduction plan, and no generosity goal is sustainable without a surplus. If your outflow exceeds your income, address this first — through increased income, decreased spending, or both.", color: "#3B82F6" },
  { title: "Build an Emergency Fund First", desc: "Before investing, before extra debt payments, build 1-3 months of living expenses in cash. This is not a luxury — it prevents debt from being your emergency fund. Without it, one car repair or medical bill sends you deeper into debt.", color: "#10B981" },
  { title: "Eliminate High-Interest Debt", desc: "Credit card debt at 20% interest is the biggest financial hole most people dig. Focus all extra income on eliminating high-interest debt using the avalanche (highest rate first) or snowball (smallest balance first) method. Both work — choose the one that motivates you.", color: "#EF4444" },
  { title: "Give Before You Feel Ready", desc: "Waiting until debt is paid to start giving is a strategy that rarely arrives. Begin giving — even 2-3% — now. It creates the habit, breaks money's grip, and trains your heart toward generosity before your income grows and the temptation to accumulate intensifies.", color: GREEN },
  { title: "Avoid Lifestyle Inflation", desc: "Every time income increases, the pressure to spend more increases with it. Fight the automatic expansion of lifestyle. When you get a raise, direct the difference to savings or debt rather than new spending. Contentment is not a feeling — it is a decision.", color: PURPLE },
  { title: "Plan Your Spending", desc: "A budget is not a punishment — it is a plan. Without a plan, money flows to the loudest demand. With a plan, you decide in advance what matters. Zero-based budgeting (every dollar has a job) and the envelope system are proven methods for those who struggle with overspending.", color: "#F59E0B" },
];

interface DebtEntry {
  id: number;
  name: string;
  balance: number;
  rate: number;
  minPayment: number;
}

const SEED_DEBTS: DebtEntry[] = [
  { id: 1, name: "Credit Card", balance: 4200, rate: 22.99, minPayment: 105 },
  { id: 2, name: "Car Loan", balance: 12800, rate: 6.5, minPayment: 240 },
  { id: 3, name: "Student Loans", balance: 28500, rate: 4.75, minPayment: 310 },
];

export default function MoneyDebtPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "principles" | "tracker">("theology");
  const [debts, setDebts] = useState<DebtEntry[]>(() => {
    try { const s = localStorage.getItem("vine_debts"); return s ? JSON.parse(s) : SEED_DEBTS; } catch { return SEED_DEBTS; }
  });
  const [form, setForm] = useState({ name: "", balance: "", rate: "", minPayment: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_debts", JSON.stringify(debts)); } catch {} }, [debts]);

  const addDebt = () => {
    if (!form.name || !form.balance) return;
    const entry: DebtEntry = { id: Date.now(), name: form.name, balance: parseFloat(form.balance) || 0, rate: parseFloat(form.rate) || 0, minPayment: parseFloat(form.minPayment) || 0 };
    setDebts(d => [...d, entry]);
    setForm({ name: "", balance: "", rate: "", minPayment: "" });
    setShowForm(false);
  };

  const removeDebt = (id: number) => setDebts(d => d.filter(x => x.id !== id));

  const totalDebt = debts.reduce((s, d) => s + d.balance, 0);
  const totalMin = debts.reduce((s, d) => s + d.minPayment, 0);
  const sorted = [...debts].sort((a, b) => b.rate - a.rate);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💸</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Money & Debt</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus spoke more about money than about heaven and hell combined. Money is a spiritual issue — not because wealth is evil, but because it tends toward lordship. The gospel frees us to hold it rightly.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology of Money", icon: "📖" },
            { id: "principles" as const, label: "Principles", icon: "📊" },
            { id: "tracker" as const, label: "Debt Tracker", icon: "📉" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
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
                Financial wisdom is not complicated — it is hard. These six principles represent 90% of what you need to know. The challenge is not understanding them but doing them, consistently, over years.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRINCIPLES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 12, padding: 22, display: "flex", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${p.color}15`, border: `2px solid ${p.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{p.title}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tracker" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16, display: "flex", gap: 20 }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 22 }}>${totalDebt.toLocaleString()}</div>
                <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Total Debt</div>
              </div>
              <div style={{ width: 1, background: BORDER }} />
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 22 }}>${totalMin.toLocaleString()}</div>
                <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Monthly Minimums</div>
              </div>
              <div style={{ width: 1, background: BORDER }} />
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 22 }}>{debts.length}</div>
                <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Accounts</div>
              </div>
            </div>

            {sorted.length > 0 && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>AVALANCHE ORDER (highest rate first — pay off fastest)</div>
                {sorted.map((d, i) => (
                  <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < sorted.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: i === 0 ? `${GREEN}20` : `${PURPLE}15`, border: `1px solid ${i === 0 ? GREEN : PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: i === 0 ? GREEN : PURPLE, fontWeight: 800, fontSize: 12 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{d.name}</div>
                        <div style={{ color: MUTED, fontSize: 12 }}>{d.rate}% APR · ${d.minPayment}/mo min</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15 }}>${d.balance.toLocaleString()}</div>
                      <button onClick={() => removeDebt(d.id)} style={{ color: MUTED, fontSize: 11, background: "none", border: "none", cursor: "pointer", padding: 0 }}>remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showForm ? (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Add Debt Account</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <input placeholder="Name (e.g. Chase Visa)" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }} />
                  <input placeholder="Balance ($)" type="number" value={form.balance} onChange={e => setForm(f => ({ ...f, balance: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }} />
                  <input placeholder="Interest Rate (%)" type="number" step="0.01" value={form.rate} onChange={e => setForm(f => ({ ...f, rate: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }} />
                  <input placeholder="Min Payment ($)" type="number" value={form.minPayment} onChange={e => setForm(f => ({ ...f, minPayment: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={addDebt} style={{ flex: 1, background: GREEN, color: "#000", fontWeight: 700, border: "none", borderRadius: 8, padding: "10px", cursor: "pointer", fontSize: 13 }}>Add Debt</button>
                  <button onClick={() => setShowForm(false)} style={{ flex: 1, background: "transparent", color: MUTED, fontWeight: 700, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px", cursor: "pointer", fontSize: 13 }}>Cancel</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setShowForm(true)} style={{ width: "100%", background: "transparent", border: `1px dashed ${BORDER}`, borderRadius: 12, padding: 14, color: MUTED, fontSize: 14, cursor: "pointer", fontWeight: 600 }}>+ Add a Debt Account</button>
            )}

            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 18, marginTop: 16 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>DEBT ELIMINATION STRATEGY</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Pay minimums on all debts. Then put every extra dollar toward the top-ranked debt (highest interest rate). When it is paid off, add its payment to the next one. This "avalanche" method minimizes interest paid. The "snowball" method (smallest balance first) costs more but provides faster psychological wins.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
