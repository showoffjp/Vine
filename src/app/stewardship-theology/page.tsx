"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "tithing" | "prosperity" | "contentment" | "journal" | "videos";

const theologyItems = [
  {
    id: "ownership",
    title: "God Owns Everything — We Are Stewards",
    content:
      "The foundational principle of Christian stewardship is not the tithe — it is divine ownership. 'The earth is the LORD's, and everything in it' (Psalm 24:1). 'For every animal of the forest is mine, and the cattle on a thousand hills' (Psalm 50:10). The Christian does not own their money — they manage it. Every dollar, every asset, every resource is held in trust from the God who entrusted it. This reframes every financial decision: not 'What do I want to do with my money?' but 'What does the Owner want me to do with His resources?' The parable of the talents (Matthew 25:14-30) makes this explicit: the master entrusts resources, expects a return, and evaluates the steward on their faithfulness.",
  },
  {
    id: "heart",
    title: "Money as a Heart Diagnostic",
    content:
      "Jesus speaks about money more than almost any other topic — not because God needs our money but because money reveals our hearts. 'For where your treasure is, there your heart will be also' (Matthew 6:21). The direction of our spending and giving is not a financial matter — it is a spiritual one. Tim Keller observes that the checkbook and the calendar are more revealing about a person's actual theology than their statement of faith. Where does the money go? What do the patterns reveal? Randy Alcorn, in Money, Possessions, and Eternity, argues that how we handle money is the most reliable external indicator of our spiritual condition — because money competes most directly with God for the heart's allegiance.",
  },
  {
    id: "eternal",
    title: "Eternal Investment: Storing Up Treasure",
    content:
      "Jesus explicitly teaches an investment strategy: 'Do not store up for yourselves treasures on earth... but store up for yourselves treasures in heaven' (Matthew 6:19-20). The logic is investment logic — treasure stored in heaven is eternally secure, while treasure stored on earth is perishable. Giving to Kingdom work is therefore not charity — it is the wisest possible investment. Randy Alcorn developed this into the 'treasure principle': 'You can't take it with you — but you can send it ahead.' Every dollar given to the poor, to missions, to the church's ministry is a deposit in an account that pays eternal dividends. This is not a works-salvation argument — it is a stewardship argument about where we place resources.",
  },
  {
    id: "generosity",
    title: "The Theology of Radical Generosity",
    content:
      "The New Testament's standard for giving is not the tithe — it is the cross. 'For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich' (2 Corinthians 8:9). The Macedonian churches — in extreme poverty — gave 'beyond their ability' (2 Cor 8:3) because they first gave themselves to the Lord. The widow who gave her two mites gave 'out of her poverty... everything she had to live on' (Mark 12:44). The early Jerusalem church had 'not a needy person among them' because those with resources sold property to meet needs (Acts 4:34). This is not communism — it is voluntary, Spirit-led, grace-driven generosity that reorders the entire economy of the community.",
  },
  {
    id: "warning",
    title: "The Danger of Wealth",
    content:
      "Jesus is unambiguous about wealth's spiritual danger: 'It is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God' (Matthew 19:24). The rich young ruler — who was moral, religious, and sincere — went away sorrowful because he 'had great wealth.' Paul warns: 'Those who want to get rich fall into temptation and a trap... the love of money is a root of all kinds of evil' (1 Timothy 6:9-10). This does not mean wealth is sinful — Abraham was wealthy; Job's wealth was restored; Joseph of Arimathea provided Jesus's tomb. But the New Testament is clear: wealth creates unique spiritual dangers — pride, self-sufficiency, hardness of heart toward the poor, and the illusion that security is achievable through accumulation.",
  },
  {
    id: "justice",
    title: "Wealth, Poverty, and Justice",
    content:
      "The Hebrew prophets do not merely warn about personal greed — they indict structural injustice that produces poverty. Amos thunders against those who 'trample the heads of the poor into the dust of the earth' (2:7) and 'sell the righteous for silver, and the needy for a pair of sandals' (2:6). Micah condemns those who 'covet fields and seize them' (2:2). Isaiah pronounces woe on those who 'add house to house and join field to field' (5:8). The New Testament adds: James 5:1-6 is among the most severe passages in Scripture — directed at wealthy believers who have defrauded workers. A Christian theology of wealth that is silent about structural injustice and economic oppression is not the biblical theology — it is a truncated version comfortable to the wealthy.",
  },
];

type TithingView = {
  id: string;
  name: string;
  summary: string;
  scriptures: string[];
  bestArgument: string;
  bestObjection: string;
  proponents: string;
};

const tithingViews: TithingView[] = [
  {
    id: "required",
    name: "Tithe as Required — 10% Floor",
    summary:
      "The tithe (10%) is a continuing moral obligation for Christians, not abrogated by the New Covenant. Tithing pre-dates the Mosaic Law (Abraham tithed to Melchizedek, Genesis 14:20; Jacob vowed a tithe, Genesis 28:22), indicating it is not merely ceremonial. Jesus affirmed tithing without abolishing it: 'You should have practiced these without neglecting the others' (Matthew 23:23). The tithe is the minimum starting point; New Testament grace moves upward from there.",
    scriptures: [
      "Malachi 3:10 — 'Bring the whole tithe into the storehouse'",
      "Leviticus 27:30 — 'A tithe of everything from the land is holy to the LORD'",
      "Matthew 23:23 — Jesus affirms tithing while criticizing misplaced priorities",
      "Genesis 14:20 — Abraham gave a tenth to Melchizedek (pre-Mosaic)",
    ],
    bestArgument:
      "Tithing provides a concrete, achievable starting point for discipline. Without a clear number, giving defaults to whatever is leftover — which is almost always inadequate. The Malachi passage ('Test me in this') suggests tithing is accompanied by a covenant promise.",
    bestObjection:
      "The Mosaic tithe was actually three tithes totaling ~23%, not 10%. The New Testament never commands Christians to tithe. Giving in 2 Corinthians 9 is described as 'each should give what they have decided in their heart' — which is percentage-agnostic.",
    proponents: "John Piper, David Platt (with caveats), Crown Financial Ministries, most Southern Baptist churches",
  },
  {
    id: "spirit",
    name: "Spirit-Led Proportional Giving",
    summary:
      "The New Covenant replaces the Mosaic tithe with Spirit-led, proportional, cheerful giving. 2 Corinthians 9:6-7: 'Whoever sows generously will also reap generously... Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' The 10% figure is not mentioned. Giving is motivated by the grace of the Gospel (2 Cor 8:9), not by a legal obligation. For many Christians, 10% will be far too little; for those in genuine poverty, even 10% may be beyond current means.",
    scriptures: [
      "2 Corinthians 9:7 — 'Each of you should give what you have decided in your heart'",
      "2 Corinthians 8:3 — Macedonians gave 'beyond their ability'",
      "Acts 4:34-35 — Early church gave 'as much as anyone had need'",
      "Luke 21:1-4 — Widow's two mites (100% of all she had)",
    ],
    bestArgument:
      "The New Covenant is characterized by 'much more' (Romans 5:15-17), not the same as the Mosaic covenant. Reducing New Covenant giving to a 10% legal obligation misunderstands the nature of grace. Randy Alcorn: the widow's 100% makes any percentage-based rule look minimal.",
    bestObjection:
      "Spirit-led giving without a concrete benchmark tends to produce under-giving in practice. Most Christians who claim 'Spirit-led giving' give far less than 10%.",
    proponents: "John Stott, Randy Alcorn, Scot McKnight, Tim Keller (who gave beyond 10% as a personal practice)",
  },
  {
    id: "grace",
    name: "Gospel-Motivated Radical Generosity",
    summary:
      "The proper New Testament motivation for giving is the gospel: 'You know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor' (2 Cor 8:9). This gospel logic generates generosity that is not constrained by percentage. The question is not 'Have I given 10%?' but 'Am I living in a way that reflects the generosity of the God who gave his Son?' David Platt (Radical) and Francis Chan argue that Western Christians need a radical rethinking of their standard of living — not a slight adjustment toward 10%.",
    scriptures: [
      "2 Corinthians 8:9 — Christ became poor so we might become rich",
      "Mark 12:44 — The widow gave 'everything she had'",
      "Luke 12:33 — 'Sell your possessions and give to the poor'",
      "Acts 2:44-45 — 'All the believers were together and had everything in common'",
    ],
    bestArgument:
      "If the gospel is true — if Jesus gave everything — then the church in wealthy nations should be dramatically more generous than a 10% benchmark suggests. The early church's radical sharing produced communities of radical witness. Our current standard of living, even with tithing, leaves most Western Christians living far above global standards.",
    bestObjection:
      "Demanding radical generosity without concrete guidance can produce guilt without transformation. A graduated tithe (giving more as income increases, toward a 'finish line' of living expenses) provides a concrete pathway.",
    proponents: "David Platt (Radical), Francis Chan (Crazy Love), Shane Claiborne",
  },
];

const prosperityItems = [
  {
    id: "what",
    title: "What the Prosperity Gospel Teaches",
    content:
      "The prosperity gospel (also called 'health and wealth gospel' or 'name it and claim it') teaches that financial blessing is God's will for all believers, that giving triggers divine financial return, and that poverty or illness indicates insufficient faith. Key teachers: Joel Osteen, Kenneth Copeland, Creflo Dollar, Benny Hinn, and many global evangelists. Its geographic center is the United States, but it has spread across Africa, Latin America, and Asia. The prosperity gospel is the fastest-growing form of Christianity globally by some estimates.",
  },
  {
    id: "biblical",
    title: "What the Bible Actually Teaches About Money",
    content:
      "The prosperity gospel requires systematic misreading of Scripture. Deuteronomy 28 promises blessings for obedience — but it is addressed to the nation of Israel under the Mosaic covenant, not to New Covenant individuals. '3 John 1:2 — 'I pray that you may prosper in all things' — is a personal greeting to Gaius, not a universal promise. Philippians 4:19 — 'God will supply all your needs' — is a promise of sufficiency, not wealth. The NT's actual teaching on money includes: Jesus was homeless ('no place to lay his head,' Matt 8:20); Paul lived in 'want and plenty' (Phil 4:11-12), shipwreck, prison, and near-starvation; the martyrs of Hebrews 11 'wandered in deserts and mountains, in caves and holes in the ground' (11:38).",
  },
  {
    id: "refutation",
    title: "How to Refute the Prosperity Gospel",
    content:
      "Five core objections: (1) It contradicts Paul. 2 Cor 11:23-27 lists Paul's credentials: beatings, imprisonments, shipwrecks, hunger, cold. If prosperity equals faith, Paul had the least faith in the New Testament. (2) It makes Revelation's martyrs failures. Those who 'did not love their lives so much as to shrink from death' (Rev 12:11) — who were poor, imprisoned, and killed — were the most faithful of all. (3) It exports a false gospel to the world's poor. Telling a Nigerian farmer that his poverty is due to insufficient faith is not the gospel — it is victim-blaming with theological language. (4) It cannot account for suffering and lament in Scripture. Psalm 88, Job, Lamentations, and most of the psalms cannot exist in the prosperity gospel's world. (5) It contradicts Jesus. 'Blessed are the poor in spirit' (Matt 5:3). 'Woe to you who are rich' (Luke 6:24).",
  },
  {
    id: "appeal",
    title: "Why the Prosperity Gospel Spreads",
    content:
      "Understanding its appeal is important for pastoral response. The prosperity gospel spreads because: (1) It offers hope to people in desperate poverty who have been told by circumstance that they don't matter. (2) It is emotionally compelling — the sense of God's blessing and divine favor is genuinely desirable. (3) It uses real Scripture even when misapplied. (4) Its leaders are often charismatic and demonstrably 'blessed' (wealthy, successful), which seems to confirm the message. (5) In some Global South contexts, the prosperity gospel's emphasis on divine power over suffering resonates more than a passive acceptance of poverty. Pastoral response must address what the prosperity gospel gets right (God is good, God is powerful, prayer matters) while firmly correcting its errors.",
  },
  {
    id: "books",
    title: "Resources for Understanding and Responding",
    content:
      "Key books: Health, Wealth, and Happiness by David W. Jones and Russell Woodbridge (Kregel — the definitive evangelical refutation); Counterfeit Gospels by Trevin Wax (Moody); Christianity in Crisis by Hank Hanegraaff; God Is Not a Vending Machine by Micah Fries; The Gospel in a Pluralistic Society by Lesslie Newbigin (broader context). For understanding the global spread: The Next Christendom by Philip Jenkins; Blessed by Kate Bowler (Harvard historian's sociological study of the prosperity gospel in America — sympathetic but critical).",
  },
];

const contentmentItems = [
  {
    id: "definition",
    title: "What Biblical Contentment Is",
    content:
      "Contentment is not indifference to one's circumstances — it is the settled peace that comes from finding sufficiency in God rather than in things. Paul's famous statement: 'I have learned, in whatever situation I am, to be content' (Philippians 4:11) was written from a Roman prison. The Greek word autarkeia (contentment, self-sufficiency) was a Stoic virtue — but Paul reorients it: his sufficiency is 'through him who gives me strength' (4:13). Contentment is therefore not achieved by accumulation (getting enough to finally be satisfied) but by reorientation — learning to find in God what no amount of things can provide.",
  },
  {
    id: "consumer",
    title: "Contentment vs. Consumerism",
    content:
      "Consumer culture is structurally designed to prevent contentment. Its economic engine runs on dissatisfaction — the belief that the next purchase will provide what the last one didn't. Advertising's primary function is to make people feel the lack of something they didn't previously feel the lack of. The smartphone upgrade cycle, the fashion season, the home renovation culture — all are built on manufactured desire. The Christian discipline of contentment is profoundly countercultural. It says: 'I have enough. I am enough. God is enough.' Richard Foster: 'The enemy of contentment is the lie that just a little more will satisfy.'",
  },
  {
    id: "gratitude",
    title: "Gratitude as the Practice of Contentment",
    content:
      "Contentment is practiced most directly through gratitude. The person who gives thanks for what they have — naming it specifically, regularly, before God — is practicing the reorientation that contentment requires. '1 Thessalonians 5:18: 'Give thanks in all circumstances, for this is God's will for you in Christ Jesus.' This is not toxic positivity (pretending bad things are good) but the recognition that even in difficulty, God is at work and has given much. A daily gratitude practice — three specific things, written or spoken, to God — is one of the most empirically validated practices for mental health and one of the most theologically grounded practices for spiritual health.",
  },
  {
    id: "enough",
    title: "Discerning What Is 'Enough'",
    content:
      "John Wesley's formula is the most practical stewardship guide ever written: 'Gain all you can. Save all you can. Give all you can.' The key is the third element: give all you can, meaning everything beyond 'enough.' But what is enough? This requires explicit discernment: How much house? How much car? How many vacations? What clothing budget? Many Christians never have this conversation explicitly, which means consumer culture answers it for them by default. Ron Sider (Rich Christians in an Age of Hunger) proposed a 'graduated tithe' — giving 10% on base income and an increasing percentage on each additional tier of income — as a way to formalize the 'enough' question.",
  },
  {
    id: "practice",
    title: "Practical Disciplines of Contentment",
    content:
      "Six practices for cultivating contentment: (1) The 30-day rule — wait 30 days before any non-essential purchase over $50; desire fades with time. (2) Fasting from shopping — one month per year with no non-essential purchases. (3) Gratitude journaling — three specific gifts per day. (4) De-owning — giving away one item per day for 30 days. (5) Comparison fast — one week off social media. (6) The annual 'enough' inventory — sit with your budget annually and ask: Is this oriented around what actually matters? What would I need to change to give more? These are not legalistic obligations — they are tools for the soul.",
  },
  {
    id: "resources",
    title: "Resources on Contentment and Stewardship",
    content:
      "Key books: Money, Possessions, and Eternity by Randy Alcorn (Tyndale — the comprehensive evangelical treatment); Rich Christians in an Age of Hunger by Ronald Sider (IVP — the prophetic challenge); The Treasure Principle by Randy Alcorn (shorter); God and Money by John Cortines and Gregory Baumer (Menlo — MBAs who gave away 99%); Joyful Giving by Scott Preissler; Living Well on Less by Jonni McCoy. Organizations: Crown Financial Ministries (crown.org) — the most widely used Christian financial discipleship program; Dave Ramsey's Financial Peace University (more general, less theologically rigorous but practically effective).",
  },
];

export default function StewardshipTheologyPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_stewardship-theology_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedView, setSelectedView] = useState<TithingView>(tithingViews[0]);

  function toggle(id: string) {
    setExpanded((p) => ({ ...p, [id]: !p[id] }));
  }

  type JournalEntry = { id: string; date: string; area: string; conviction: string; step: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_stj_entries") ?? "[]"); } catch { return []; } });
  const [jArea, setJArea] = useState("");
  const [jConviction, setJConviction] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_stj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jArea.trim() && !jConviction.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, conviction: jConviction, step: jStep };
    setJournalEntries(prev => [entry, ...prev]);
    setJArea(""); setJConviction(""); setJStep("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["💰 Stewardship", "📖 Theology"].map((tag) => (
            <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 13, color: MUTED }}>{tag}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Theology of Money & Stewardship
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 680 }}>
          Jesus speaks about money more than heaven and hell combined. Not because God needs our money — but because money reveals and shapes our hearts. A complete theology of stewardship covers ownership, tithing, the prosperity gospel, and the forgotten grace of contentment.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { num: "2,350", label: "verses in the Bible on money and possessions" },
            { num: "11 of 39", label: "of Jesus's parables touch directly on money" },
            { num: "5%", label: "Average giving among American evangelicals (tithing = 10%)" },
            { num: "$2.5T", label: "Estimated wealth of American evangelicals" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{stat.num}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {(
            [
              { id: "theology", label: "Biblical Theology" },
              { id: "tithing", label: "The Tithing Debate" },
              { id: "prosperity", label: "Prosperity Gospel" },
              { id: "7_CGP-12AE0", label: "Contentment" },
              { id: "journal", label: "📓 My Journal" },
              { id: "videos", label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}18` : CARD,
                color: tab === t.id ? GREEN : MUTED,
                fontWeight: tab === t.id ? 700 : 400,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Biblical Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Biblical Theology of Money and Stewardship</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {theologyItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", color: TEXT, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 600 }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Tithing */}
        {tab === "tithing" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>The Tithing Debate</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>
              Should Christians tithe 10%? Is it a New Covenant obligation, a helpful guideline, or a replacement for more radical gospel generosity? Three serious evangelical positions.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: "0 0 200px", display: "flex", flexDirection: "column", gap: 10 }}>
                {tithingViews.map((v) => (
                  <button type="button"
                    key={v.id}
                    onClick={() => setSelectedView(v)}
                    style={{
                      padding: "13px 15px",
                      borderRadius: 10,
                      border: `1px solid ${selectedView.id === v.id ? GREEN : BORDER}`,
                      background: selectedView.id === v.id ? `${GREEN}18` : CARD,
                      color: selectedView.id === v.id ? GREEN : TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      fontWeight: selectedView.id === v.id ? 700 : 400,
                      fontSize: 13,
                    }}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, position: "sticky", top: 24, alignSelf: "flex-start" }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 14px", color: GREEN }}>{selectedView.name}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 18px" }}>{selectedView.summary}</p>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Key Scriptures</div>
                  <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                    {selectedView.scriptures.map((s) => (
                      <li key={s} style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 4 }}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "12px 14px", marginBottom: 12 }}>
                  <div style={{ color: GREEN, fontSize: 12, marginBottom: 4 }}>Best Argument For</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{selectedView.bestArgument}</p>
                </div>
                <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 8, padding: "12px 14px", marginBottom: 14 }}>
                  <div style={{ color: "#EF4444", fontSize: 12, marginBottom: 4 }}>Best Objection</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{selectedView.bestObjection}</p>
                </div>
                <div style={{ color: MUTED, fontSize: 13 }}><span style={{ color: PURPLE }}>Proponents: </span>{selectedView.proponents}</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Prosperity Gospel */}
        {tab === "prosperity" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>The Prosperity Gospel: Understanding and Refuting</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>
              The prosperity gospel is the fastest-growing Christian movement globally. It teaches that faith, giving, and confession unlock divine financial blessing. Here is what it teaches, why it's wrong, and why it spreads.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {prosperityItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", color: TEXT, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 600 }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Contentment */}
        {tab === "contentment" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>The Forgotten Grace: Contentment</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contentmentItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", color: TEXT, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 600 }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Stewardship Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record convictions God is giving you about money, generosity, and faithful stewardship.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jArea} onChange={e => setJArea(e.target.value)} placeholder="Area (giving, debt, contentment, tithing…)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jConviction} onChange={e => setJConviction(e.target.value)} placeholder="What conviction is God giving you?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Next step of obedience" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording your stewardship journey.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{entry.area || "Stewardship Reflection"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.conviction && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Conviction:</strong> {entry.conviction}</p>}
                    {entry.step && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Next Step:</strong> {entry.step}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "GQI72THyO5I", title: "The Sovereignty of God", channel: "Desiring God", description: "John Piper grounds Christian stewardship in God's absolute ownership — we are managers, not owners, of everything entrusted to us." },
                  { videoId: "t6L-F2emwUc", title: "Hoping in the Meticulous Providence of Our Great God", channel: "Desiring God", description: "John Piper shows how God's providence shapes the Christian's relationship to wealth, provision, and trust in financial uncertainty." },
                  { videoId: "jH_aojNJM3E", title: "R.C. Sproul: The Covenant", channel: "Ligonier Ministries", description: "R.C. Sproul explains the covenantal framework in which God's demands — including the tithe — are grounded in divine ownership and grace." },
                  { videoId: "oNpTha80yyE", title: "The Covenant of Redemption: The Promise Keeper", channel: "Ligonier Ministries", description: "R.C. Sproul traces God's faithfulness in providing for his covenant people — the theological anchor for a biblical theology of generosity." },
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
