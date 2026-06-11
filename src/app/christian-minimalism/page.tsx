"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Less as More — the Theological Case for Voluntary Simplicity", verse: "1 Tim 6:6-8", text: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that. The logic of Christian minimalism begins here: the equation of godliness plus contentment, not godliness plus abundance. The tradition of voluntary simplicity argues that subtracting possessions, obligations, and noise is often the addition that produces fullness of life. Jesus himself named the danger: 'life does not consist in an abundance of possessions' (Luke 12:15). Where mainstream culture promises that more is more, the Christian tradition makes a counter-claim — that enough, received with gratitude, is more than plenty, accumulated with anxiety." },
  { title: "Jesus's Radical Detachment from Possessions — What He Actually Said", verse: "Luke 12:15", text: "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions. No serious minimalism teacher is as radical about possessions as Jesus. In the parable of the rich fool (Luke 12:15–21), Jesus condemns not fraud or cruelty but the accumulation of more barns for more grain — ordinary financial prudence by any contemporary measure. In the Sermon on the Mount (Matt 6:19–21), he instructs his followers not to store up treasures on earth at all. In Luke 14:33, he states bluntly that those who do not give up everything they have cannot be his disciples. Modern minimalism suggests owning fewer things; Jesus suggested releasing attachment to everything. Christian minimalism does not aim merely at a tidier home but at a freer heart." },
  { title: "Voluntary Poverty as Spiritual Practice — the Tradition from Francis to Today", verse: "2 Cor 8:9", text: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich. Francis of Assisi's embrace of Lady Poverty in the 13th century was not asceticism for its own sake but freedom for the sake of joy and mission. The evangelical counsels of poverty, chastity, and obedience were formalized for religious communities — but Francis and his first followers demonstrated that the spirit of voluntary poverty could animate a joyful, fruitful life in the world. Lay Christians today cannot and need not take monastic vows, but the spirit of poverty — releasing possessions rather than hoarding them, giving rather than accumulating, holding things lightly — remains a live spiritual practice available to all." },
  { title: "The Joy of Enough — Contentment as Spiritual Attainment, Not Natural Endowment", verse: "Phil 4:11-12", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation. Paul's claim is striking: contentment is learned, not given. He does not say 'I am naturally content' or 'contentment comes easily once you have enough.' He says he has learned it — through need and through plenty, through struggle and through abundance. Christian minimalism is one of the disciplines through which this learning happens. Releasing excess, resisting the next acquisition, living below one's means by choice: these practices train the soul toward contentment not by reducing circumstances to the acceptable minimum but by releasing the assumption that more circumstances would produce more peace." },
  { title: "Digital Minimalism as Spiritual Formation — Devices, Attention, and the Presence of God", verse: "Heb 12:1", text: "Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us. The attention economy — the system by which social media, streaming, and notification-driven apps compete for human attention as a commodity — is one of the primary spiritual formation forces of the 21st century, and it forms us largely away from contemplation, silence, and God. Cal Newport's Digital Minimalism argues for a philosophy of intentional technology use: keep only what serves your deepest values and eliminate the rest. Applied to Christian formation, the question becomes: does this app, this platform, this device, this habit of checking — does it make me more attentive to God and to others, or does it fragment and crowd out that attentiveness? The answer to that question, taken seriously, reshapes daily life." },
];

const voices = [
  { name: "St. Francis of Assisi", role: "Letter to All the Faithful", quote: "Possessing nothing, they were yet possessing all things. Released from what the world called security, they found a security the world cannot give or take away. Holy poverty is not deprivation — it is freedom. It is the joy of those who have learned that the love of God fills every space that things once occupied.", bio: "Francis's embrace of voluntary poverty in 12th-century Assisi was so radical that it caused a scandal in the church and a revival in the surrounding countryside. He did not preach poverty as self-punishment but as liberation — the freedom that comes when one is no longer owned by what one owns. His example remains the most vivid Christian embodiment of minimalism as spiritual practice, and his joy in poverty remains its most convincing argument." },
  { name: "Richard Foster", role: "Celebration of Discipline — Simplicity chapter", quote: "Simplicity is freedom. Duplicity is bondage. Simplicity brings joy and balance. Duplicity brings anxiety and fear. The desire to accumulate is not a neutral preference — it is a spiritual condition that the discipline of simplicity addresses directly. When we stop trying to have more, we discover that we have enough. When we stop trying to appear more, we discover that we are enough.", bio: "Foster's Celebration of Discipline includes one of the most theologically grounded treatments of Christian simplicity available. He distinguishes inner simplicity (an undivided heart, oriented toward God) from outer simplicity (the practices through which that orientation expresses itself). His 'Ten Controlling Principles of Simplicity' remain a practical framework for Christian minimalism, rooted in the conviction that things must never be allowed to replace the Creator as the object of trust." },
  { name: "Cal Newport", role: "Digital Minimalism (secular, but powerfully applicable)", quote: "Digital minimalism is a philosophy of technology use in which you focus your online time on a small number of carefully selected and optimized activities that strongly support things you value, and then happily miss out on everything else. The key word is 'value' — minimalism without a clear account of what matters is just clutter removal. With that account, it becomes transformation.", bio: "Newport is not a Christian writer, but his framework applies with unusual precision to Christian formation. His argument that the attention economy is not neutral — that it actively undermines the capacity for deep thought, meaningful relationship, and sustained focus — maps directly onto the spiritual formation concern about silence, prayer, and attentiveness to God. Christian readers will recognize in Newport's 'deep life' the contemplative tradition under a secular description." },
];

const practices = [
  { icon: "🙏", title: "Seasonal Declutter with Prayerful Discernment", text: "Once each season, walk through your home and ask not 'does this spark joy?' but 'does this own me?' For each category, ask: Does possessing this produce anxiety, pride, or attachment? Is there someone for whom this would be genuinely useful? Does keeping this reflect who I am becoming? Decluttering as a spiritual practice is slower than KonMari and more searching — it is an examination of what one's possessions reveal about one's heart." },
  { icon: "📵", title: "Digital Sabbath — One Day Offline Per Week", text: "Choose one day per week to leave devices off or in airplane mode from waking to sleeping. No social media, no news, no streaming, no email. The point is not productivity — it is attention. A digital Sabbath creates space for the kind of slow, unhurried awareness in which prayer, presence to others, and the enjoyment of the created world become natural rather than effortful. Most people who try this report that the first few weeks are uncomfortable and subsequent weeks are profoundly clarifying." },
  { icon: "🛑", title: "Purchasing Fast — 30 Days, No Non-Essential Purchases", text: "For 30 days, purchase only food, medicine, and genuine necessities. No clothing, no home goods, no entertainment, no subscriptions, no Amazon impulse buys. At the end of the month, review: what did you want but not miss? What impulses surfaced? What did you do with the money or time that would otherwise have gone to shopping? The purchasing fast is a short-term practice that reveals long-term patterns." },
  { icon: "🔢", title: "Owning Less Than _______ in Key Categories", text: "Choose a number for key categories: shirts, books, kitchen gadgets, digital subscriptions. The number is less important than the act of choosing it — of deciding how much is enough before encountering the next appealing thing. This creates a rule that operates in advance of desire, before the emotional momentum of acquisition can override judgment. The question 'does this fit within my chosen limit?' interrupts the default toward more." },
  { icon: "🎁", title: "Give Possessions Away to Those in Need", text: "Christian minimalism is not merely about owning less — it is about the possessions released finding their way to those who need them. Intentionally direct decluttered goods to food banks, shelters, neighbors, or organizations serving the poor. The act of giving transforms decluttering from self-improvement into an act of solidarity. What I release becomes what someone else receives. This is the logic of 2 Corinthians 8:14 — a matter of equality." },
];

const scriptures = [
  { verse: "1 Tim 6:6-8", text: "But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that." },
  { verse: "Luke 12:15", text: "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions." },
  { verse: "Matt 6:19-21", text: "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven... For where your treasure is, there your heart will be also." },
  { verse: "Phil 4:11-12", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation." },
  { verse: "Heb 12:1", text: "Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us." },
  { verse: "2 Cor 8:9", text: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich." },
];

const videos = [
  { id: "G6m0Rx3oOH4", title: "Christian Minimalism — Living With Less" },
  { id: "G36igm7LHNA", title: "The Theology of Enough" },
  { id: "Zb3K3aSPbXs", title: "Digital Minimalism and Spiritual Formation" },
  { id: "UkH6F77GS00", title: "Voluntary Simplicity as a Spiritual Practice" },
];

type CMEntry = { id: string; date: string; area: string; action: string; freedom: string };

export default function ChristianMinimalismPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrminimalism_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jAction, setJAction] = useState("");
  const [jFreedom, setJFreedom] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrminimalism_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jArea.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, action: jAction, freedom: jFreedom }, ...prev]);
    setJArea(""); setJAction(""); setJFreedom("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Simplicity & Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Minimalism</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Intentional minimalism as a spiritual practice — releasing possessions, simplifying digital life, and creating space for undistracted devotion to God.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Minimalism Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record an area you want to simplify, the step you'll take, and the freedom you're seeking.</p>
            {[
              { label: "Area of life to simplify (e.g., clothing, digital, schedule)", val: jArea, set: setJArea },
              { label: "Specific action you will take", val: jAction, set: setJAction },
              { label: "Freedom you hope to gain", val: jFreedom, set: setJFreedom },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem", color: TEAL }}>{e.area}</span>
                        <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                      </div>
                      {e.action && <p style={{ fontSize: "0.85rem", color: MUTED, marginBottom: 2 }}><strong style={{ color: TEXT }}>Action:</strong> {e.action}</p>}
                      {e.freedom && <p style={{ fontSize: "0.85rem", color: MUTED }}><strong style={{ color: TEXT }}>Freedom:</strong> {e.freedom}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
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
