"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Money Is Not Evil — Love of It Is", verse: "1 Timothy 6:10", body: "'For the love of money is a root of all kinds of evil' (1 Timothy 6:10). The text is routinely misquoted as 'money is the root of all evil.' Paul's point is more precise: money itself is morally neutral — it is the heart's orientation toward it that is dangerous. Paul identifies three disorders: the love of money, the desire to get rich, and covetousness. All are problems of the heart, not the bank account." },
  { title: "Wealth as Stewardship", verse: "Deuteronomy 8:17-18", body: "The Israelites entering the Promised Land were warned against the most dangerous prosperity temptation: 'You may say to yourself, My power and the strength of my hands have produced this wealth for me. But remember the Lord your God, for it is he who gives you the ability to produce wealth' (Deuteronomy 8:17-18). All wealth is received, not generated. The productive capacity, the health, the social context, the timing — all are given. Stewardship follows from this: you manage what belongs to another." },
  { title: "The Deceitfulness of Riches", verse: "Mark 4:19", body: "In the parable of the sower, 'the worries of this life, the deceitfulness of wealth and the desires for other things come in and choke the word, making it unfruitful' (Mark 4:19). Wealth is deceitful — it promises security, significance, freedom, and satisfaction, and it cannot deliver on any of these promises. The person who has found their security, significance, and satisfaction in God is free to use money without being used by it." },
  { title: "The Rich Young Ruler", verse: "Mark 10:21-22", body: "The story of the rich young ruler is the most direct confrontation with wealth in the Gospels. He kept all the commandments — but Jesus asked for the one thing he could not give: his possessions. 'He went away sad, because he had great wealth' (10:22). The wealth owned him. Jesus's diagnosis — 'how hard it is for the rich to enter the kingdom of God' (10:23) — applies to virtually every Western Christian. The question is not how much you have but who owns whom." },
  { title: "Generous and Content", verse: "Philippians 4:11-12", body: "Paul's testimony from prison: 'I have learned, in whatever state I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger' (Philippians 4:11-12). Contentment is learned — it is a practiced skill, not a passive feeling. The secret Paul discovered is Christ as the source of sufficiency (4:13). Contentment and generosity are the double fruit of a life secured in God rather than money." },
];

type Tab = "theology" | "voices" | "pitfalls" | "practices" | "journal" | "videos";

const VOICES_MONEY = [
  {
    id: "chrysostom",
    name: "John Chrysostom",
    era: "c. 347-407",
    context: "Archbishop of Constantinople; prolific homilist",
    bio: "Chrysostom (Greek for 'golden-mouthed') was the most prolific and pointed preacher on wealth in the early church. Archbishop of Constantinople from 398, he preached in the capital of the Roman Empire to congregations that included both the extremely wealthy and the destitute poor. His homilies on Matthew, on Romans, and specifically on 1 Timothy 6 are devastating indictments of wealth hoarded while the poor suffer. He did not merely moralize — he argued that the surplus wealth of the rich already belongs, in justice, to the poor who lack necessities. He was eventually exiled after offending the Empress Eudoxia with his preaching.",
    quote: "Not to share what we have with others is to steal from them and to take away their livelihood. The wealth you hold back belongs not to you but to the poor. The bread you store up belongs to the hungry; the coat in your closet belongs to the naked; the shoes rotting in your attic belong to those who have none.",
    contribution: "Chrysostom established the patristic consensus that wealth is not neutral — excess wealth held while others lack necessities is a form of injustice, not merely a missed opportunity for generosity. This is a stronger claim than most evangelical financial teaching makes. His homilies remain the strongest prophetic challenge to comfortable Christianity about wealth, and his exile for preaching them demonstrates the cost of fidelity on this subject.",
  },
  {
    id: "francis",
    name: "Francis of Assisi",
    era: "1181-1226",
    context: "Founder of the Franciscans; son of a wealthy merchant",
    bio: "Francis was the son of a wealthy cloth merchant who, following a dramatic conversion experience, stripped himself naked in the public square, returned his father's clothes, and embraced radical poverty as a vocation. His order — the Friars Minor — was constituted around the poverty of Jesus: owning nothing, working with hands, begging when necessary, serving the poor and the lepers. Francis did not merely counsel moderation with wealth; he believed the imitation of Christ required the literal renunciation of property. His life was a living sermon on the incompatibility of accumulated wealth and the following of Jesus — and his influence on Christian moral imagination about money has been enormous.",
    quote: "It is no use walking anywhere to preach unless our walking is our preaching. I have been all things unholy. If God can work through me, he can work through anyone.",
    contribution: "Francis made voluntary poverty a prophetic sign rather than a private spiritual discipline. By embodying the poverty of Christ before wealthy medieval society, he demonstrated that Christian love for money is a contradiction in terms. His influence on later reform movements (including the Protestant Reformation's critique of ecclesial wealth) was significant. Even for Christians who do not embrace his literal poverty, his life poses the question that wealth tends to suppress: what does following Jesus actually cost?",
  },
  {
    id: "luther",
    name: "Martin Luther",
    era: "1483-1546",
    context: "Reformer; professor of theology; Large Catechism (1529)",
    bio: "Luther's treatment of the Seventh Commandment in the Large Catechism (1529) contains some of the most direct teaching on economic justice in the Reformation. He condemned usury (lending at interest), price-gouging, market manipulation, and the various ways the wealthy extract money from the poor through commerce. His theology of vocation — that all legitimate work is a form of service to the neighbor — provided the foundation for a Protestant work ethic that was emphatically not about personal accumulation but about service. The Reformation critique of indulgences was partly economic: money paid for spiritual benefit was the quintessential example of treating God's grace as a commodity.",
    quote: "Let each person serve his neighbor through his vocation. This is how love works in the world — not through mystical elevation above ordinary life, but through the daily bread given and received, the shoe made and paid for, the sick cared for.",
    contribution: "Luther's theology of vocation desacralized the economy without secularizing it — all work is holy service to the neighbor, which means all economic exchange is subject to moral evaluation. His condemnation of usury and market manipulation challenged the emerging commercial capitalism of his day with the same directness as his challenge to indulgences. This economic theology provided a framework for Protestants to evaluate not just their giving but their entire economic life.",
  },
  {
    id: "wesley_m",
    name: "John Wesley",
    era: "1703-1791",
    context: "Methodist founder; preacher to the poor; social reformer",
    bio: "Wesley's three-word financial ethic — gain all you can, save all you can, give all you can — was not abstract theology but a direct response to the economic conditions of eighteenth-century England. He preached primarily to the poor and working class, and his movement produced widespread economic transformation: alcoholism decreased, savings increased, financial responsibility spread. He opposed slavery as an economic system, warned against the corrupting effects of Methodist prosperity (as Methodists became prosperous through their virtues, they faced the temptation to hoard), and kept his personal spending fixed while directing all additional income to the poor.",
    quote: "When I have money, I get rid of it quickly, lest it find a way into my heart. I earn much, but I give away more. And the more I give, the more I seem to receive.",
    contribution: "Wesley demonstrated that financial transformation follows spiritual transformation — the Methodist movement's social impact was measurable in economic terms. His concern about success-produced complacency ('wherever riches have increased, the essence of religion has decreased in the same proportion') anticipates the dilemma of every affluent Western Christian: how to be prosperous without being captured by prosperity. His own practice of fixed personal expenses with escalating generosity remains one of the most practical financial models in Christian history.",
  },
  {
    id: "piper",
    name: "John Piper",
    era: "1946-present",
    context: "Pastor; Desiring God Ministries; Battling Unbelief",
    bio: "Piper's 'Desiring God' (1986) reframed Christian ethics including financial ethics around the concept of Christian Hedonism: God is most glorified in us when we are most satisfied in him. Applied to money, this means that the satisfaction available in God makes the satisfaction promised by money look cheap. The desire for wealth is not wrong — it is misdirected. Redirect that desire to God, and money loses its power. Piper's 'Battling Unbelief' extends this: anxiety about money is a form of unbelief, because it treats future provision as dependent on our management rather than God's faithfulness. He himself took a modest salary and declined royalties from many speaking engagements.",
    quote: "The battle against the love of money is not the battle to be indifferent to wealth. It is the battle to find in God a satisfaction so superior to wealth that the compulsive power of money is broken.",
    contribution: "Piper integrated financial ethics into his larger theology of desire and satisfaction in God. His framework shifted the question from 'how much should I give?' to 'what am I ultimately seeking?' The person who has found in God a satisfaction greater than money gives freely because money has lost its power to promise what God actually provides. This approach addressed the heart rather than the wallet — which is why Jesus addressed it at the level of treasure ('where your treasure is, there your heart will be').",
  },
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
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-money_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_christian-money_voice", "chrysostom");
  const voiceItem = VOICES_MONEY.find(v => v.id === selectedVoice)!;

  const [cmonEntries, setCmonEntries] = useState<{ id: string; date: string; conviction: string; obedience: string; prayer: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cmon_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cmonForm, setCmonForm] = useState({ conviction: "", obedience: "", prayer: "" });
  const [cmonSaved, setCmonSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cmon_entries", JSON.stringify(cmonEntries)); }, [cmonEntries]);
  function saveCmonEntry() {
    if (!cmonForm.conviction.trim()) return;
    setCmonEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cmonForm }, ...prev]);
    setCmonForm({ conviction: "", obedience: "", prayer: "" });
    setCmonSaved(true); setTimeout(() => setCmonSaved(false), 2000);
  }
  function deleteCmonEntry(id: string) { setCmonEntries(prev => prev.filter(e => e.id !== id)); };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
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
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "pitfalls" as const, label: "Common Pitfalls", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "📓 My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {VOICES_MONEY.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{voiceItem.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voiceItem.era} &middot; {voiceItem.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pitfalls" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Financial faithfulness is not just about giving — it includes the whole orientation of the heart toward money. These {PITFALLS.length} pitfalls are the most common patterns that undermine financial discipleship.
              </p>
            </div>
            {PITFALLS.map((o, i) => (
              <div role="button" tabIndex={0} key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === o.pitfall ? null : o.pitfall)}
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
                Financial faithfulness is built through habits and structures, not through occasional heroic decisions. These {PRACTICES.length} practices create the conditions for generosity and contentment to grow.
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

        {activeTab === "journal" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>My Money Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Record your growing convictions about money, steps of obedience, and prayers for freedom from mammon.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 32 }}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Conviction or Insight</label>
                <input value={cmonForm.conviction} onChange={e => setCmonForm(f => ({ ...f, conviction: e.target.value }))} placeholder="What truth about money has God placed on your heart?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Act of Obedience</label>
                <textarea value={cmonForm.obedience} onChange={e => setCmonForm(f => ({ ...f, obedience: e.target.value }))} placeholder="What specific act of generosity, simplicity, or stewardship are you taking?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Prayer for Freedom</label>
                <textarea value={cmonForm.prayer} onChange={e => setCmonForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Where do you need God to loosen money's grip on your heart?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCmonEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cmonSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {cmonEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cmonEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{e.conviction}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{e.date}</div>
                      </div>
                      <button type="button" onClick={() => deleteCmonEntry(e.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Delete</button>
                    </div>
                    {e.obedience && <div style={{ marginBottom: 10 }}><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Act of Obedience</div><div style={{ color: TEXT, fontSize: 13 }}>{e.obedience}</div></div>}
                    {e.prayer && <div><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Prayer</div><div style={{ color: TEXT, fontSize: 13 }}>{e.prayer}</div></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on money, generosity, and stewardship.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "ccNvwDPguNU", title: "What Does the Bible Say About Giving Money?", channel: "Desiring God", description: "John Piper walks through key biblical texts on giving, generosity, and the heart's relationship to wealth." },
                  { videoId: "j9phNEaPrv8", title: "David Platt & John Piper — Materialism of Our Hearts", channel: "Desiring God", description: "A conversation between David Platt and John Piper on how materialism quietly corrupts the Christian heart." },
                  { videoId: "dy9nwe9zeU8", title: "John Piper Interviews David Platt", channel: "Desiring God", description: "John Piper and David Platt discuss radical generosity, global mission, and what it costs to follow Christ with money." },
                  { videoId: "iK0NjiBXKN4", title: "The Truth About Tithing", channel: "Voddie Baucham", description: "Voddie Baucham examines what the Bible actually teaches about tithing and giving, correcting common misunderstandings." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
      </main>
      <Footer />
    </div>
  );
}
