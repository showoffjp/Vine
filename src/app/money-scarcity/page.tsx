"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Sees the Poor and Is Not Silent", verse: "Psalm 34:6", text: "This poor man cried, and the Lord heard him; he saved him out of all his troubles. Poverty is not invisible to God. Scripture is saturated with his attention to those without means — he hears, he acts, he delivers." },
  { title: "Scarcity Is a Spiritual Reality, Not Just Economic", verse: "Philippians 4:11-12", text: "Paul learned the secret of contentment in need and in plenty — it was learned, not given. Scarcity tests the roots of our trust. It reveals what we actually believe about God's provision and our own worth." },
  { title: "Jesus Was Poor and Understood Want", verse: "2 Corinthians 8:9", text: "Though he was rich, yet for your sake he became poor, so that you through his poverty might become rich. The incarnation was an act of voluntary scarcity. Jesus knew hunger, homelessness, and dependence on others' generosity." },
  { title: "The Kingdom Inverts the World's Scarcity Logic", verse: "Luke 6:20", text: "Blessed are you who are poor, for yours is the kingdom of God. This is not spiritualized poverty — Jesus spoke to the materially poor. The kingdom belongs to those the world has written off. That is a present-tense promise." },
  { title: "Provision Comes Through Community, Not Just Individual Miracle", verse: "Acts 2:44-45", text: "They sold property and possessions to give to anyone who had need. The early church's answer to scarcity was shared abundance. God often provides through the body. Asking for help is not weakness; it is how the church was designed to function." },
];

const voices = [
  { id: "v1", name: "Shane Claiborne", role: "Author, The Irresistible Revolution", quote: "The great tragedy in the church is not that rich Christians do not care about the poor but that rich Christians do not know the poor.", bio: "Shane Claiborne co-founded The Simple Way, a faith community in inner-city Philadelphia, and has written extensively on voluntary poverty, solidarity, and the economics of the kingdom." },
  { id: "v2", name: "Tim Keller", role: "Author, Ministries of Mercy", quote: "The Bible tells us that God's grace is in opposition to self-sufficiency. The poor are uniquely positioned to know they need God.", bio: "Keller's work on justice argues that the church has a theological obligation to the poor — not from guilt but from gospel logic. Mercy ministry is as central as evangelism." },
  { id: "v3", name: "Kathryn Edin", role: "Sociologist, $2.00 a Day", quote: "Poverty is not just a lack of money. It is a lack of security, of voice, of power, of predictability.", bio: "Edin's research with Luke Shaefer documents extreme poverty in America and challenges Christians to see poverty not as a personal failure but as a systemic condition requiring systemic response alongside personal care." },
  { id: "v4", name: "Christine Pohl", role: "Author, Making Room: Recovering Hospitality", quote: "Hospitality is the practice through which we embody the kingdom — it makes abstract theology visible and costly.", bio: "Pohl's theological account of hospitality connects the Old Testament mandate to care for strangers with Christian community practice, showing how welcoming the poor is central to biblical faith." },
];

const practices = [
  { icon: "📋", title: "Make a Bare-Bones Budget", text: "When money is scarce, clarity reduces panic. List income and every fixed cost. Cut everything non-essential. Seeing the actual numbers — even frightening ones — creates space for a plan instead of ongoing dread." },
  { icon: "🤝", title: "Contact a Local Church Benevolence Fund", text: "Most churches have discretionary funds for exactly this kind of crisis. Call the church office and ask to speak with a pastor or deacon about practical assistance. Do not let pride prevent access to help that was set aside for you." },
  { icon: "🏛️", title: "Apply for Every Available Resource", text: "Food banks, SNAP, utility assistance, LIHEAP, 211.org — these exist because the community has decided to pool resources for crisis. Using them is not shameful. It is accepting provision from your neighbors." },
  { icon: "📖", title: "Pray Psalm 34 Aloud Daily", text: "Read it as a liturgy of trust: 'The Lord is close to the brokenhearted.' Praying scripture during financial crisis is not denial — it is anchoring your mind in what is true about God's character when circumstances contradict it." },
  { icon: "🗣️", title: "Tell One Trusted Person the Full Truth", text: "Financial shame isolates. Isolation prevents help. Name the situation to one safe person — a pastor, elder, or trusted friend. You do not need to perform okayness. The help you need often comes through honesty." },
  { icon: "💼", title: "Pursue One Step, Not the Whole Staircase", text: "When scarcity is severe, the full solution feels impossible. Identify the next single step: the phone call to make, the application to fill out, the person to contact. Do that one thing. Then the next." },
];

const scriptures = [
  { verse: "Psalm 34:6", text: "This poor man called, and the Lord heard him; he saved him out of all his troubles." },
  { verse: "Matthew 6:31-33", text: "Do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?' But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
  { verse: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
  { verse: "Proverbs 19:17", text: "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done." },
  { verse: "Luke 12:7", text: "Indeed, the very hairs of your head are all numbered. Don't be afraid; you are worth more than many sparrows." },
  { verse: "Psalm 37:25", text: "I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread." },
];

type ScarcityEntry = { id: string; date: string; need: string; trust: string; step: string };

export default function MoneyScarcityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ScarcityEntry[]>([]);
  const [form, setForm] = useState({ need: "", trust: "", step: "" });
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_moneyscarcityj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.need.trim()) return;
    const e: ScarcityEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_moneyscarcityj_entries", JSON.stringify(updated));
    setForm({ need: "", trust: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_moneyscarcityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Financial Crisis</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When There Is Not Enough</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Money scarcity is not just a practical problem — it is a spiritual weight. Fear, shame, and isolation compound the material crisis. Scripture speaks directly to this place, and the church was designed for it.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Crisis Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>211.org / Call 2-1-1</strong> — local food, housing, and utility assistance</li>
                <li><strong style={{ color: TEXT }}>SNAP (food assistance)</strong> — benefits.gov or your local DHHS office</li>
                <li><strong style={{ color: TEXT }}>LIHEAP</strong> — Low Income Home Energy Assistance Program for utilities</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if financial stress is affecting mental health</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.need} onChange={e => setForm(f => ({ ...f, need: e.target.value }))} placeholder="What is the specific need or fear right now?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.trust} onChange={e => setForm(f => ({ ...f, trust: e.target.value }))} placeholder="What truth about God can you anchor to right now?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="What is one next step you can take today?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.need && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Need:</strong> {e.need}</p>}
                {e.trust && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Anchor:</strong> {e.trust}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Next step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller unpacks the Beatitudes and Jesus's radical economic reversal — why the poor are blessed and what the kingdom means for those in want." },
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how gospel joy frees us from the slavery of money anxiety and enables generous, trusting contentment." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "Ligonier Ministries", description: "R.C. Sproul on God's sovereign providence — including provision and lack — and how biblical trust is grounded in God's character, not outcomes." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon", channel: "Desiring God", description: "A meditation on sabbath and provision, the manna principle — why striving beyond what God provides produces anxiety rather than abundance." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
