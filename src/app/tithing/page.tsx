"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706";

const theology = [
  { title: "The Whole Tithe: Obedience as an Act of Trust in God's Provision", verse: "Malachi 3:10", text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it. Malachi 3:10 is the only place in Scripture where God explicitly invites his people to test him — and he attaches that invitation to the tithe. The command to bring the whole tithe is not first a financial instruction; it is a declaration of where ultimate trust is placed. Withholding the tithe is not prudent money management — it is a statement that God cannot be trusted with the financial margin. Bringing it is a weekly confession that the One who gave the harvest can be trusted with the first portion of it." },
  { title: "Cheerful Giving: The Heart God Looks For", verse: "2 Corinthians 9:7", text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. Paul's word for cheerful is hilaros — from which we get hilarious. The picture is not of a polite smile while signing a check, but of an overflow of delight. Giving that is cheerful is giving that has been transformed at the source: not an obligation extracted from reluctant hands, but a gift offered from a heart that has grasped what it has already received. The theology of the cheerful giver is rooted not in duty but in gratitude — the overflow of a heart that has grasped what it has already been given in Christ. When the gospel has done its work, giving becomes an expression of what you already believe about God's generosity rather than a tax on what you wish you could keep." },
  { title: "First Fruits: Giving That Acknowledges God's Ownership of Everything", verse: "Proverbs 3:9-10", text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine. The first-fruits principle is one of Scripture's most practical and most counter-cultural financial instructions. To give from the first — before the bills are paid, before the savings are set aside — is to make a weekly or monthly declaration of dependence on God rather than on the paycheck. Most people give from what remains after all other obligations are met; first-fruits giving reverses the order entirely. It is not that the bills don't matter; it is that God's portion is not subject to the vagaries of what is left over. The discipline of first-fruits giving consistently forms a trust in God's provision that leftover giving never produces." },
  { title: "The Widow's Mite: Proportionality and the Hidden Arithmetic of Heaven", verse: "Luke 21:1-4", text: "As Jesus looked up, he saw the rich putting their gifts into the temple treasury. He also saw a poor widow put in two very small copper coins. Truly I tell you, he said, this poor widow has put in more than all the others. All these people gave their gifts out of their wealth; but she out of her poverty put in all she had to live on. Jesus introduces a different accounting system — one that measures not the absolute amount given but the proportion and cost to the giver. The widow's two coins were worth a fraction of a penny, yet Jesus declares them the largest gift in the room. This passage does not teach that small gifts are always superior, but it does establish that heaven's ledger is not organized the way the world's is. The person who gives ten percent of a modest income may be giving far more in kingdom terms than the person who gives five percent of a large one." },
  { title: "Treasure in Heaven: Where You Invest Reveals What You Treasure", verse: "Matthew 6:19-21", text: "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also. Jesus does not merely say that your heart determines where your treasure goes — he says the reverse is equally true: where you invest your treasure will form your heart's affections. Giving is therefore a spiritual discipline of the heart, not merely an act of financial management. Randy Alcorn has noted that giving is the cure for materialism — not because poverty is holy, but because the practice of releasing money to kingdom purposes re-orients the heart's loves. The person who gives generously and regularly will find, over time, that their anxieties about money diminish and their joy increases — because their heart has been trained to find its security in the right place." },
];

const voices = [
  { id: "ra", name: "Randy Alcorn", role: "Author, The Treasure Principle", quote: "You can't take it with you — but you can send it on ahead. Every dollar we give is an investment in eternity. God doesn't need our money — he owns everything. But he invites us into the joy of being part of what he's doing in the world. Giving is not a tax; it is a treasure transfer. The question is not whether you will part with your money — you will, either in this life or at death. The question is whether you will strategically invest it in what lasts.", bio: "Alcorn's The Treasure Principle is the most accessible and widely read contemporary treatment of Christian generosity. His framework — that giving is not sacrifice but investment, trading the temporal for the eternal — has helped millions overcome the anxiety that surrounds generous giving. His own practice of giving away nearly all of his book royalties gives credibility to the message. His longer work, Money, Possessions, and Eternity, provides the comprehensive biblical theology underlying the shorter book." },
  { id: "rb", name: "Ron Blue", role: "Founder, Kingdom Advisors; Author, Master Your Money", quote: "The financial decisions you make are a reflection of what you believe about God, about eternity, and about the purpose of your life. Tithing is not a financial strategy — it is a theological statement. It says: I believe God owns it all, I am a steward, and I trust that obedience in giving is the path to both contentment and generosity. The person who cannot give ten percent will never be free to give fifteen or twenty. The discipline of the tithe is where financial faithfulness begins.", bio: "Ron Blue is one of the most respected voices in Christian financial counseling, having advised thousands of families and trained a generation of Christian financial planners through Kingdom Advisors. His approach integrates sound financial planning with a robust biblical theology of stewardship. His books, including Master Your Money and Splitting Heirs, provide practical frameworks for families navigating giving, saving, and spending in light of kingdom priorities." },
  { id: "tk", name: "Tim Keller", role: "Author, Every Good Endeavor; Pastor, Redeemer Presbyterian", quote: "Generosity is not a personality trait for some Christians and not others — it is the shape of the Christian life. The gospel tells us that the Son of God gave up all the riches of heaven to become poor so that through his poverty we might become rich. The response to that gospel is not careful management of what remains after we've secured our own comfort. The response is a generosity that looks to others the way Christ's generosity looked to us — costly, joyful, and freely given.", bio: "Keller's preaching and writing on money and generosity consistently root financial discipleship in the gospel rather than in guilt or obligation. His sermons on the theology of wealth and giving address the heart's tendency to treat money as security rather than as a resource for love. His broader framework in Every Good Endeavor situates financial faithfulness within the Christian's call to work and serve as an act of worship in every sphere of life." },
];

const practices = [
  { icon: "📊", title: "Track Your Giving — What Gets Measured Gets Managed", text: "Few practices reveal the gap between what we say we believe and what we actually do more quickly than honestly tracking our giving as a percentage of income. Take one month to calculate exactly what you gave as a proportion of your gross income. Many Christians who believe they tithe discover they are giving three or four percent when they actually do the math. Tracking giving is not about guilt — it is about clarity. Once you know where you are, you can move deliberately toward where you want to be. A simple spreadsheet or giving tracker in a budgeting app is sufficient; what matters is honest accounting that makes growth possible." },
  { icon: "🌾", title: "Practice First-Fruits Giving — Give Before Anything Else", text: "The single most practical shift in giving practice is moving the tithe from the end of the budget to the beginning. Set up an automatic transfer to your church and charitable giving on the day your paycheck deposits — before the mortgage, before the groceries, before anything else. Most people find that when they give first, the rest of the finances adjust. First-fruits giving trains the heart to trust God's provision by acting in dependence on it before the outcome is clear. The discipline of giving first is not about financial strategy; it is a liturgical act that reorders your week's economics around God's prior claim." },
  { icon: "🤫", title: "Give in Secret — Protect the Purity of Generosity", text: "Jesus's instruction in Matthew 6 to give in secret is not mere modesty — it is spiritual protection. Public giving creates a feedback loop that substitutes social approval for the deeper joy of giving to God alone. Secret giving — whether anonymous church giving, quiet generosity to a person in need, or giving that is never mentioned — trains the heart to find its reward in God rather than in reputation. This does not prohibit all public generosity; it does require that we cultivate a significant practice of giving that only God knows about. The discipline of secret giving is one of the most effective guards against the corruption of generosity by pride." },
  { icon: "➕", title: "Give Beyond the Tithe — Let Generosity Grow Over Time", text: "The tithe is a biblical floor, not a ceiling. The New Testament's vision of generosity — shaped by the second-mile ethic of the Sermon on the Mount and the cheerful-giver instruction of 2 Corinthians 9 — consistently pushes beyond the minimum. Many families who begin tithing find that over time, as they experience God's faithfulness and as their financial situation improves, they are drawn to give fifteen, twenty, or higher percentages. The practice of raising your giving percentage by one point each year is a low-friction way to grow generosity without sudden sacrifice. What begins as obedience often becomes delight over the course of years." },
  { icon: "⛪", title: "Give to Your Church First, Then Beyond", text: "The New Testament consistently locates the primary context of giving in the local church — the community where you worship, are known, and are cared for. Giving to parachurch organizations, missionaries, relief agencies, and neighbors in need is all commended; but the tithe that belongs to the storehouse is generally understood as the local church first. Beyond the local church, Christians are called to respond to needs as they encounter them. A healthy giving practice integrates systematic church giving with responsive, relational generosity to individuals and causes encountered in daily life." },
];

const scriptures = [
  { verse: "Malachi 3:10", text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." },
  { verse: "2 Corinthians 9:7", text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." },
  { verse: "Proverbs 3:9-10", text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing and your vats will brim over with new wine." },
  { verse: "Luke 21:3-4", text: "Truly I tell you, he said, this poor widow has put in more than all the others. All these people gave their gifts out of their wealth; but she out of her poverty put in all she had to live on." },
  { verse: "Matthew 6:19-21", text: "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also." },
  { verse: "Deuteronomy 14:22", text: "Be sure to set aside a tenth of all that your fields produce each year." },
];

type CCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function TithingPage() {
  const [tab, setTab] = useState("theology");
  const [ccJournal, setCcJournal] = useState<CCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_tithing_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_tithing_entries", JSON.stringify(ccJournal)); } catch {}
  }, [ccJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setCcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Financial Stewardship</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Tithing &amp; Giving</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          The theology of tithing, cheerful giving, and first fruits — what Scripture teaches about honoring God with wealth, holding possessions with an open hand, and storing up treasure in heaven.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GOLD : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: GOLD, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Giving Journal</h3>
              <textarea placeholder="How am I currently giving, and where does anxiety or reluctance show up in my giving?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What does my giving pattern reveal about what I believe about God's ownership and my stewardship?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What is one concrete step I want to take toward more faithful, generous giving?" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GOLD, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ccJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ccJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Where I am:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What I see:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "u_3NxJW56jY", title: "The Treasure Principle — Randy Alcorn", channel: "Eternal Perspective Ministries", description: "Alcorn on his core framework for giving: you can't take it with you, but you can send it on ahead. A concise presentation of the theology that has shaped a generation of generous Christians." },
              { videoId: "GDf0MFbPwWU", title: "Cheerful Giving and the Grace of Generosity", channel: "Desiring God", description: "Piper on 2 Corinthians 9 and the grace that produces cheerful, even exuberant generosity — why giving from joy is both commanded and promised, and how to pursue it." },
              { videoId: "R6NN2dWPSYs", title: "What Does the Bible Say About Tithing?", channel: "The Gospel Coalition", description: "A careful walk through the biblical theology of the tithe from Old Testament law through New Testament fulfillment — what carries over, what changes, and what the ten percent principle means for Christians today." },
              { videoId: "3DHXZ8bREKA", title: "Money, Stewardship, and the Kingdom of God", channel: "Ligonier Ministries", description: "A Ligonier teaching on the comprehensive biblical vision of stewardship — why all wealth belongs to God, what faithful management looks like, and how giving fits into the larger Christian life of faithfulness." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
