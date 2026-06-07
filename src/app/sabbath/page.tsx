"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", GOLD = "#c9a227";
const TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundation" | "history" | "practice" | "benefits" | "objections" | "log" | "videos";

const BIBLICAL_FOUNDATION = [
  {
    title: "Creation Sabbath — Before the Law",
    passage: "Genesis 2:1-3",
    body: "The Sabbath is older than Israel, older than the law, older than sin. 'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done' (Genesis 2:2-3). Three verbs define the first Sabbath: God finished, rested, and blessed. The seventh day is the only day of creation declared holy. Before Moses ever received tablets on Sinai, the rhythm of work and rest was woven into the structure of time itself. The Sabbath is not legislation; it is cosmology.",
    significance: "Sabbath is a creation ordinance — universal in scope, not limited to the Jewish covenant.",
  },
  {
    title: "The Fourth Commandment",
    passage: "Exodus 20:8-11",
    body: "'Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God. On it you shall not do any work...' (Exodus 20:8-10). The Fourth Commandment is the longest commandment in the Decalogue — God knew we would need convincing. The grounding is explicitly creation: 'For in six days the Lord made the heavens and the earth... but he rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy' (v.11). Sabbath-keeping mirrors and participates in the divine rest of creation.",
    significance: "The Sabbath commandment is grounded in creation, not only in Mosaic law.",
  },
  {
    title: "Deuteronomy's Second Grounding — Liberation",
    passage: "Deuteronomy 5:12-15",
    body: "In the Deuteronomic retelling, the Sabbath commandment is grounded not in creation but in liberation: 'Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand... Therefore the Lord your God has commanded you to observe the Sabbath day' (v.15). Slaves cannot rest; free people can. Sabbath is an enacted reminder that you are no longer under Pharaoh's production quotas. Every week, ceasing work is a liturgical declaration: I am not a slave. My identity is not my productivity. I belong to the God who liberates.",
    significance: "Sabbath is also the weekly practice of freedom — defiance against the slave-driver of production culture.",
  },
  {
    title: "Jesus and the Sabbath Controversies",
    passage: "Mark 2:23-28",
    body: "Jesus had more recorded controversies over the Sabbath than over almost any other issue. His healings on the Sabbath were deliberate provocations — he was making a theological point. His summary declaration is definitive: 'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath' (Mark 2:27-28). Jesus was not abolishing the Sabbath but restoring it to its original gift-character. The Pharisees had turned a gift into a burden; Jesus turned it back. He did not say 'Sabbath is abolished' but 'I am its Lord — and I am giving it back to you as it was always meant to be.'",
    significance: "Jesus restores the Sabbath's gift character without abolishing it.",
  },
  {
    title: "The Sabbath Rest of Hebrews 4",
    passage: "Hebrews 3-4",
    body: "The author of Hebrews develops the Sabbath theologically around the concept of God's rest: 'There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their works, just as God did from his' (Hebrews 4:9-10). The Sabbath points toward eschatological rest — the final Sabbath when God's kingdom comes in fullness. The weekly Sabbath is a foretaste, a rehearsal, an enacted parable of the rest that is coming. To keep Sabbath is to live in the direction of the kingdom.",
    significance: "Weekly Sabbath is a foretaste of the eschatological rest of God's kingdom.",
  },
  {
    title: "Isaiah's Vision of Sabbath Delight",
    passage: "Isaiah 58:13-14",
    body: "'If you keep your feet from breaking the Sabbath and from doing as you please on my holy day, if you call the Sabbath a delight and the Lord's holy day honorable... then you will find your joy in the Lord' (Isaiah 58:13-14). Isaiah's framing is striking: the Sabbath is not a duty to be endured but a delight to be savored. The Hebrew word oneg — delight, pleasure — is the same word used for Eden. The Sabbath is a weekly Eden: a day of pleasure in God's presence, of restored relationship with the Creator, of tasting what the world was made to be.",
    significance: "Sabbath is called a 'delight' — designed for joy, not mere duty.",
  },
];

const HISTORY = [
  { era: "Ancient Israel", content: "Sabbath observance was central to Israelite identity, especially after the exile when it became a boundary marker distinguishing Israel from surrounding nations. The prophets repeatedly indicted Israel for Sabbath violation as a sign of covenant unfaithfulness. Nehemiah 13 describes enforcing Sabbath-keeping after the return from Babylon." },
  { era: "Second Temple Judaism", content: "Sabbath practice became elaborately codified by the rabbis, eventually producing the tractate Shabbat in the Mishnah listing 39 categories of prohibited work. This legal precision was motivated by genuine piety, not merely legalism — the rabbis understood the Sabbath as a gift worth protecting carefully. They developed the concept of 'building a fence around the Torah' — adding prohibitions to prevent accidentally violating the commandment." },
  { era: "Early Church", content: "The early church gathered on the first day of the week (Sunday) for worship and the Lord's Supper — the day of resurrection (Acts 20:7; 1 Corinthians 16:2; Revelation 1:10). This shift from Saturday to Sunday reflected the theological conviction that the resurrection inaugurated a new creation order. Many Gentile Christians had no background in Sabbath observance, creating early debates about how the fourth commandment applied." },
  { era: "Patristic Period", content: "Justin Martyr (2nd century) wrote of Christians gathering on 'the day of the sun' for worship. Ignatius of Antioch contrasted the Jewish Sabbath with the Lord's Day. The Didache (early 2nd century) describes Sunday worship practices. The Sabbath principle — rest and worship — was maintained, but the day shifted to Sunday and the mode became distinctly resurrection-centered." },
  { era: "Reformation", content: "The Reformers debated Sabbath vigorously. Luther held that the Sabbath commandment's ceremonial element was fulfilled in Christ but the principle of regular worship remained. Calvin argued more strongly for Sunday observance as carrying the Sabbath's moral force. The Puritans developed a thoroughgoing 'Christian Sabbatarianism' — strict Sunday observance as the Christian Sabbath, regulated by the fourth commandment." },
  { era: "Contemporary Recovery", content: "After decades of marginalization in much of evangelicalism, Sabbath practice is experiencing significant recovery. Theologians like Marva Dawn (Keeping the Sabbath Wholly, 1989) and Walter Brueggemann have helped the church reclaim Sabbath as prophetic resistance to consumer culture. Pastors and spiritual directors increasingly identify Sabbath-keeping as the most countercultural and transformative spiritual practice available to contemporary Christians." },
];

const HOW_TO_PRACTICE = [
  {
    category: "Stop",
    color: "#EF4444",
    desc: "Sabbath begins with ceasing — stopping work, stopping productivity, stopping the compulsive management of everything. For most contemporary people, this is the hardest movement. We have made an idol of busyness and find the silence threatening. The practice of stopping is itself an act of faith: trusting that the world will not fall apart if I am not managing it for 24 hours.",
    practices: ["Put work email on auto-reply and don't check it", "Close all work-related apps and tabs", "Prepare for Sabbath on Friday — finish what you can", "Write a 'done list' — acknowledging what is complete, not what remains", "Physically leave the workspace: shut the door, close the laptop"],
  },
  {
    category: "Rest",
    color: "#3B82F6",
    desc: "Rest is not merely sleep — it is the restoration of the whole person: body, mind, and spirit. What restores you? Not what is productive, educational, or useful — what restores? The answer varies by person. For the extrovert, it may be connection; for the introvert, solitude. For the physical worker, rest may be reading; for the knowledge worker, it may be physical activity. Sabbath rest is personalized restoration.",
    practices: ["Sleep as long as your body needs — without an alarm", "Walk without a destination, podcast, or agenda", "Sit outside and observe the created world", "Do something creative that is purely for joy: garden, draw, cook slowly", "Take an afternoon nap without guilt"],
  },
  {
    category: "Worship",
    color: PURPLE,
    desc: "Sabbath rest is not self-directed rest — it is rest oriented toward God. Worship distinguishes Sabbath from a day off: it reorients the day away from self-indulgence toward the God who made us for himself. Corporate worship — gathering with the church — is at the center of Christian Sabbath practice, but worship extends beyond the service into the whole day.",
    practices: ["Attend gathered corporate worship with your church community", "Read Scripture slowly and meditatively — not to study but to receive", "Pray without a list: simply be with God", "Sing worship songs in your home, alone or with family", "Engage a great sermon or teaching — not for information but for encounter"],
  },
  {
    category: "Delight",
    color: GOLD,
    desc: "Isaiah 58:13 calls the Sabbath a 'delight' — the Hebrew oneg suggests pleasure, enjoyment, Eden-like satisfaction. Sabbath should include things you genuinely enjoy. The Sabbath is not merely a day of avoidance (no work, no screens) — it is a day of positive pleasure in God's gifts. God delights in your delight in his creation. Sabbath is weekly practice in the joy that is the destiny of all things.",
    practices: ["Share a long, unhurried meal with people you love", "Play with your children without watching the clock", "Read a book purely for pleasure — not for self-improvement", "Pursue a hobby with no productivity value whatsoever", "Enjoy creation: a hike, a park, a sunset, a garden"],
  },
];

const BENEFITS = [
  { title: "Spiritual Depth", desc: "Regular Sabbath-keeping builds a reservoir of God's presence that sustains the rest of the week. Those who practice Sabbath consistently report that their prayer, Scripture reading, and awareness of God deepen over months and years. The stillness of Sabbath teaches attentiveness that carries into the work week." },
  { title: "Physical and Mental Health", desc: "The science is unambiguous: regular rest and disengagement from work reduce cortisol levels, improve sleep quality, enhance cognitive performance, and reduce burnout. The human body and brain are not designed for constant productivity. The fourth commandment is not only theology — it is physiology. God designed us to need rest." },
  { title: "Relational Richness", desc: "Sabbath creates protected time for relationships — the long meal, the unhurried conversation, the undivided attention. Many families discover that Sabbath becomes the relational anchor of the week: the day when phones are down and people are actually present with each other. This relational depth cannot be replicated in the margins of a busy week." },
  { title: "Prophetic Counter-Witness", desc: "In a culture that defines human worth by productivity and treats people as economic units, Sabbath-keeping is prophetic. It declares: human beings are made for more than work. We have worth beyond our output. We are creatures, not machines. A community that visibly rests one day in seven is testifying to a different account of human dignity." },
  { title: "Freedom from Idolatry", desc: "Walter Brueggemann argues that Sabbath is ultimately about freedom from the 'Pharaoh' of the production economy — the relentless demand for more output. The chronic overworker is not more virtuous but often more enslaved. Sabbath is the weekly act of declaring: I am not a slave. My productivity does not define me. God's provision is sufficient." },
  { title: "Eschatological Anticipation", desc: "Hebrews 4 connects weekly Sabbath to the great rest that is coming — the final Sabbath of God's kingdom. When we rest on the Sabbath, we are rehearsing the future. We are practicing for the life that is coming. We are enacting our belief that history is moving toward a rest that will make all our present restlessness look like what it is: the longing of creation for its consummation." },
];

const OBJECTIONS = [
  { objection: "Isn't Sabbath abolished in the New Covenant?", answer: "Jesus declared himself 'Lord of the Sabbath' (Mark 2:28) — not its abolisher. The New Testament clearly shows the early church gathering on Sunday. Colossians 2:16 warns against judging others on Sabbath observance — this is about liberty in the specific day and mode, not a declaration that rest is no longer needed. The fourth commandment's moral core (regular rest, worship, and recognition of our creaturely limits) is not abolished but fulfilled and reoriented by Christ's resurrection. The day shifts; the principle deepens." },
  { objection: "Every day should be the Lord's — why set apart one day?", answer: "This noble-sounding argument typically produces neither every day as the Lord's nor one day as the Lord's — it simply produces no Sabbath. The principle that 'all of life is worship' is theologically true but practically requires anchoring in specific practices at specific times. The same logic applied to prayer ('I should pray all day') tends to produce no structured prayer. The Sabbath disciplines the week; without it, 'every day' tends to drift toward no day." },
  { objection: "I can't afford to take a day off",  answer: "This objection takes several forms: the entrepreneur who believes the business will collapse, the parent who cannot see when rest is possible, the minister whose congregation never stops needing. But the question is not whether you can afford to rest — it is whether you can afford not to. The evidence from both Scripture and neuroscience is that sustained productivity requires regular rest. Those who do not take Sabbath tend to produce less, more poorly, and at greater cost to health and relationship than those who do." },
  { objection: "Sabbath feels legalistic",  answer: "The legalistic version of Sabbath (a list of prohibitions to be monitored, a performance to be evaluated) is not Christian Sabbath — it is the distortion Jesus opposed. Jesus said the Sabbath was made for man, not man for the Sabbath (Mark 2:27). The question to ask is not 'Am I following all the Sabbath rules?' but 'Am I receiving the gift that God is offering?' Legalism distorts the Sabbath; the solution is not to throw the gift away but to receive it rightly." },
  { objection: "What about essential workers and shift workers?",  answer: "The principle of one day in seven for rest and worship applies even when Saturday or Sunday is not possible. Many Christians in essential services observe Sabbath on Monday or Friday or whatever day the week allows. The specific day is a matter of Christian liberty (Romans 14:5-6); the principle is a creation ordinance. The goal is a regular rhythm of complete rest and worship — when that falls depends on each person's circumstances and conscience." },
];

const MARVA_DAWN = `Marva Dawn's Keeping the Sabbath Wholly (1989) remains the most comprehensive Protestant theology of Sabbath in the modern era. Her four-movement framework — Ceasing, Resting, Embracing, Feasting — corresponds to the four elements of Sabbath practice outlined here. Dawn argues that Sabbath is not primarily about rules but about a total orientation of life: ceasing our work and worry, resting in God's care, embracing the values of the kingdom, and feasting on God's grace. Her book is essential reading for any Christian serious about recovering this neglected discipline.`;

const VIDEOS = [
  { id: "KwX1f2gYKZ4", title: "Lord of the Sabbath", teacher: "R.C. Sproul" },
  { id: "YNd-PbVhnvA", title: "Work and Rest", teacher: "Timothy Keller" },
  { id: "XtwIT8JjddM", title: "The Origin of the Sabbath", teacher: "W. Robert Godfrey" },
  { id: "jH_aojNJM3E", title: "The Lord's Day as Sabbath", teacher: "W. Robert Godfrey" },
  { id: "kfcVPh2VDhQ", title: "Sabbath: The Practice of Rest", teacher: "Walter Brueggemann" },
  { id: "57LVVwba6_8", title: "Why Christians Should Keep the Sabbath", teacher: "John Piper" },
];

export default function SabbathPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_sabbath_tab", "foundation");
  const [expandedObj, setExpandedObj] = useState<number | null>(null);
  const [sabbathLogs, setSabbathLogs] = useState<{ id: string; date: string; ceased: string; rested: string; feasted: string; }[]>(() => {
    try { const s = localStorage.getItem("vine_sabbath_logs"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [sbForm, setSbForm] = useState({ ceased: "", rested: "", feasted: "" });
  const [sbSaved, setSbSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_sabbath_logs", JSON.stringify(sabbathLogs)); } catch {} }, [sabbathLogs]);

  const saveSbLog = () => {
    setSabbathLogs(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...sbForm }, ...prev]);
    setSbForm({ ceased: "", rested: "", feasted: "" });
    setSbSaved(true);
    setTimeout(() => setSbSaved(false), 2000);
  };

  const deleteSbLog = (id: string) => setSabbathLogs(prev => prev.filter(l => l.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0a0a1a 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "6px 18px", color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>
            Spiritual Disciplines
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 6vw, 58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.5px" }}>
            The Sabbath
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 580, margin: "0 auto 28px" }}>
            One day in seven belongs to rest, worship, and delight — woven into creation before there was law, commandment, or even sin. The Sabbath is God&apos;s weekly gift to his creatures: come, stop, rest, and remember who you are and whose you are.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {["Creation Ordinance", "Fourth Commandment", "Marva Dawn", "Countercultural Rest"].map(tag => (
              <span key={tag} style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30`, color: GREEN, borderRadius: 12, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 36, marginBottom: 36, background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}` }}>
          {([ { id: "foundation" as Tab, label: "Biblical Foundation" }, { id: "history" as Tab, label: "History" }, { id: "practice" as Tab, label: "How to Practice" }, { id: "benefits" as Tab, label: "Benefits" }, { id: "objections" as Tab, label: "Objections Answered" }, { id: "log" as Tab, label: "My Sabbath Log" }, { id: "videos" as Tab, label: "Videos" } ]).map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? GREEN : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* BIBLICAL FOUNDATION */}
        {activeTab === "foundation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The Sabbath is one of the most richly attested themes in all of Scripture — from the first page of Genesis to the eschatological vision of Hebrews. Understanding its biblical foundations is essential to receiving it as the gift it is, rather than the burden it has so often become. The six texts below trace the Sabbath from creation to consummation.
              </p>
            </div>
            {BIBLICAL_FOUNDATION.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 16, transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}50`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 12 }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontWeight: 700, fontSize: 20, margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                  <span style={{ background: `${GREEN}20`, color: GREEN, padding: "4px 12px", borderRadius: 12, fontSize: 11, fontWeight: 700, flexShrink: 0, whiteSpace: "nowrap" }}>{item.passage}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.85, marginBottom: 14 }}>{item.body}</p>
                <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}25`, borderRadius: 10, padding: "10px 14px" }}>
                  <span style={{ color: GOLD, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Significance: </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{item.significance}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* HISTORY */}
        {activeTab === "history" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The Sabbath has been observed, debated, legislated, and recovered across 3,500 years of Jewish and Christian history. Understanding how different eras have practiced it illuminates both its enduring importance and the variety of legitimate forms it can take.
              </p>
            </div>
            {HISTORY.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${PURPLE}22`, border: `2px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  {i < HISTORY.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, margin: "8px 0", minHeight: 24 }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", flex: 1, marginBottom: 16 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{item.era}</h3>
                  <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.8, margin: 0 }}>{item.content}</p>
                </div>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}15, ${PURPLE}10)`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: "26px 30px", marginTop: 8 }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GREEN, fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Marva Dawn and the Contemporary Recovery</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{MARVA_DAWN}</p>
            </div>
          </div>
        )}

        {/* HOW TO PRACTICE */}
        {activeTab === "practice" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 24, fontWeight: 700, marginBottom: 14 }}>Four Movements of Sabbath</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 12 }}>
                Marva Dawn&apos;s framework of Ceasing, Resting, Embracing, and Feasting — adapted here as Stop, Rest, Worship, and Delight — provides a comprehensive structure for Sabbath practice. The four movements are not a checklist but a description of what a full Sabbath looks like. Begin where you can; the practice deepens over time.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                A practical note: Sabbath begins at sundown on Friday and ends at sundown Saturday in Jewish tradition; most Christians observe it from Saturday evening to Sunday evening (including gathered worship Sunday morning), or from Sunday morning through Sunday evening. Choose a consistent 24-hour period and protect it.
              </p>
            </div>
            {HOW_TO_PRACTICE.map((cat, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 16, transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = cat.color + "40")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: cat.color + "20", border: `2px solid ${cat.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant, Georgia, serif)", color: cat.color, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 20, margin: 0 }}>{cat.category}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.85, marginBottom: 16 }}>{cat.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
                  {cat.practices.map((p, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 12px", background: cat.color + "08", border: `1px solid ${cat.color}18`, borderRadius: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.6 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 26px", marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: 17, marginBottom: 14 }}>A Sabbath Liturgy for Beginning and Ending</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Beginning (Friday/Saturday Evening)</div>
                  <p style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>Light a candle. Pray: &ldquo;Creator God, I stop my work and enter your rest. What I have done is done; what remains undone I entrust to you. Thank you for the gift of this day. I receive it with open hands.&rdquo; Share a meal unhurriedly with those you love.</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Ending (Saturday/Sunday Evening)</div>
                  <p style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>Light a candle (Havdalah tradition). Pray: &ldquo;Lord, thank you for this Sabbath. I have rested and been restored. I return now to the week with renewed purpose, bearing what I have received of your presence and peace. Send me forth.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BENEFITS */}
        {activeTab === "benefits" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The benefits of regular Sabbath-keeping are well-documented across theology, neuroscience, and practical experience. The case for Sabbath is not merely biblical (though that alone is sufficient) — it is physiological, relational, and social. What God designed for human flourishing turns out to actually work for human flourishing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${GREEN}50`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 16, marginBottom: 14 }}>{i + 1}</div>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{b.title}</h3>
                  <p style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.8, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <blockquote style={{ margin: "28px 0 0", padding: "20px 26px", borderLeft: `4px solid ${GOLD}`, background: `${GOLD}10`, borderRadius: "0 12px 12px 0" }}>
              <p style={{ color: TEXT, fontStyle: "italic", fontSize: 16, lineHeight: 1.75, margin: "0 0 8px", fontFamily: "var(--font-cormorant, Georgia, serif)" }}>
                &ldquo;Sabbath is not primarily about keeping rules but about receiving a gift that God has been trying to give his people since the beginning — the gift of rest, delight, and his own company.&rdquo;
              </p>
              <cite style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>— Marva Dawn, Keeping the Sabbath Wholly</cite>
            </blockquote>
          </div>
        )}

        {/* OBJECTIONS */}
        {activeTab === "objections" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Sabbath-keeping faces more theological and practical objections than almost any other spiritual discipline. Many of these objections are sincere — they arise from genuine engagement with Scripture and real life circumstances. Each deserves a careful answer. Click any objection to read the full response.
              </p>
            </div>
            {OBJECTIONS.map((item, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expandedObj === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, marginBottom: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button type="button" onClick={() => setExpandedObj(expandedObj === i ? null : i)}
                  style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EF444422", border: "1px solid #EF444440", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>?</div>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15, textAlign: "left" }}>{item.objection}</span>
                  </div>
                  <span style={{ color: GREEN, fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{expandedObj === i ? "−" : "+"}</span>
                </button>
                {expandedObj === i && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${GREEN}22`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontSize: 14, fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</div>
                      <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SABBATH LOG */}
        {activeTab === "log" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Marva Dawn's four movements: Ceasing, Resting, Embracing, Feasting. Log what you actually did on your Sabbath — the practice deepens through reflection.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>This Sabbath</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What I ceased (work, worry, productivity)</label>
                <textarea value={sbForm.ceased} onChange={e => setSbForm(f => ({ ...f, ceased: e.target.value }))} rows={2}
                  placeholder="Email, tasks, screens, a specific anxiety I chose to put down..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>How I rested and delighted</label>
                <textarea value={sbForm.rested} onChange={e => setSbForm(f => ({ ...f, rested: e.target.value }))} rows={2}
                  placeholder="Sleep, walk, conversation, reading for pleasure, time in creation..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>How I feasted (worship, Scripture, community, food)</label>
                <textarea value={sbForm.feasted} onChange={e => setSbForm(f => ({ ...f, feasted: e.target.value }))} rows={2}
                  placeholder="Church, Scripture passage that struck me, a meal shared, a moment of worship..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveSbLog}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {sbSaved ? "Saved ✓" : "Log This Sabbath"}
              </button>
            </div>
            {sabbathLogs.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Sabbath History</h3>
                {sabbathLogs.map(l => (
                  <div key={l.id} style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deleteSbLog(l.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{l.date}</div>
                    {l.ceased && <p style={{ color: TEXT, fontSize: 13, margin: "0 0 6px" }}><strong style={{ color: PURPLE }}>Ceased:</strong> {l.ceased}</p>}
                    {l.rested && <p style={{ color: TEXT, fontSize: 13, margin: "0 0 6px" }}><strong style={{ color: GREEN }}>Rested:</strong> {l.rested}</p>}
                    {l.feasted && <p style={{ color: TEXT, fontSize: 13, margin: 0 }}><strong style={{ color: GOLD }}>Feasted:</strong> {l.feasted}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 26px", marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Video teachings on the Sabbath — its biblical foundation, historical development, and what it looks like to practice Sabbath in the contemporary world. These represent Reformed, evangelical, and scholarly perspectives on one of Christianity&apos;s most important and underappreciated gifts.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 14 }}>Essential Reading on the Sabbath</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {[
                  { title: "Keeping the Sabbath Wholly", author: "Marva Dawn", desc: "The defining Protestant theology of Sabbath for the contemporary church. Comprehensive, practical, and deeply biblical." },
                  { title: "The Sabbath", author: "Abraham Joshua Heschel", desc: "The poet-theologian's meditation on Sabbath as 'a palace in time.' Beautifully written; essential reading across traditions." },
                  { title: "Subversive Sabbath", author: "A.J. Swoboda", desc: "An accessible contemporary case for Sabbath as prophetic counter-witness to consumer culture." },
                  { title: "Sabbath as Resistance", author: "Walter Brueggemann", desc: "A short, incisive theological argument that Sabbath is resistance to the anxiety-driven production economy." },
                ].map((book, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{book.title}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{book.author}</div>
                    <p style={{ color: MUTED, fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>{book.desc}</p>
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
