"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GENEntry = { id: string; date: string; area: string; motivation: string; next_step: string };

export default function ChristianGenerosityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GENEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiangenerosity_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jMotivation, setJMotivation] = useState("");
  const [jNextStep, setJNextStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiangenerosity_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jArea.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, motivation: jMotivation, next_step: jNextStep }, ...prev]);
    setJArea(""); setJMotivation(""); setJNextStep("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          The Generous Christian Life
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Generosity is not a budget line but a posture of the soul &mdash; the opposite of the grasping, hoarding spirit that Scripture calls covetousness. To give freely is to participate in the very nature of a God who gave his only Son. This guide explores the theology, practice, and profound freedom of a genuinely generous life.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "The Cheerful Giver &mdash; 2 Corinthians 9:6-8",
                body: "Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. Paul&rsquo;s great text on generosity grounds giving not in guilt or obligation but in a transformed heart. The Greek word for cheerful is hilaros &mdash; the root of our word hilarious. God loves a hilarious giver, one who gives with the buoyant freedom of a person who has understood what they have received. The sowing-reaping metaphor is not prosperity-gospel transactionalism but the picture of a farmer who holds seed loosely &mdash; knowing that what seems like loss is actually planting. Generosity requires faith that God&rsquo;s economy operates on different logic than the world&rsquo;s scarcity.",
              },
              {
                title: "The Widow&rsquo;s Offering &mdash; Luke 21:1-4",
                body: "Jesus looked up and saw the rich putting their gifts into the offering box, and he saw a poor widow put in two small copper coins. And he said, Truly, I tell you, this poor widow has put in more than all of them. For they all contributed out of their abundance, but she out of her poverty put in all she had to live on. Jesus subverts every conventional accounting of generosity. The rich gave large absolute amounts but retained enormous wealth; the widow gave two coins that together were worth less than a penny but represented everything. What God measures is not the amount but the surrender &mdash; how much remains, how much is retained as security, how much the giving costs. The widow&rsquo;s offering challenges every comfortable giver to examine what genuine sacrifice looks like in their own context.",
              },
              {
                title: "Generosity as Spiritual Warfare Against Materialism",
                body: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money (Matthew 6:24). Jesus treats money not merely as a neutral resource but as a rival spiritual power &mdash; Mammon. Materialism is not simply wanting nice things; it is the orientation of the heart toward wealth as security, identity, and ultimate good. Generosity is the practical act of dethroning Mammon &mdash; declaring by your giving that money does not own you. Every significant act of giving is a blow struck against the spiritual power of covetousness. Richard Foster wrote that giving is the only antidote to the spiritual poison of greed, and that no amount of spiritual discipline can substitute for the concrete act of giving money away.",
              },
              {
                title: "Systematic vs. Spontaneous Giving",
                body: "Both systematic and spontaneous generosity have biblical warrant. Systematic giving &mdash; the planned, proportional gift given first before other spending &mdash; guards against the drift of good intentions that never materialize into actual giving. When giving is left entirely to impulse, it tends to happen only when surplus accumulates, which for most people never arrives. Firstfruits giving (Proverbs 3:9: Honor the Lord with your wealth, with the firstfruits of all your crops) is inherently systematic: give before the money is allocated to other uses. Spontaneous generosity &mdash; the responsive gift to a need encountered unexpectedly &mdash; is also vital. The Good Samaritan did not have a planned giving budget for beaten travelers; he responded to what was before him. Mature givers develop both: a systematic baseline and an open hand for what arises.",
              },
              {
                title: "Local Church vs. Parachurch &mdash; Where Does the Money Go?",
                body: "Bring the whole tithe into the storehouse (Malachi 3:10) is one biblical image; the early church&rsquo;s distribution to anyone in need (Acts 2:44-45) is another. The reformers generally identified the local church as the primary recipient of the tithe &mdash; the storehouse from which ministry is funded and the poor cared for. Many evangelicals hold that giving to parachurch ministries, missionaries, and Christian nonprofits qualifies as giving &lsquo;to the church&rsquo; in a broad sense. A reasonable framework: prioritize the local church where you are formed, fed, and cared for; give additionally to parachurch causes that extend the kingdom beyond what the local church can do. The principle of proportionality holds: the local church should not be starved to fund distant causes while the congregation&rsquo;s own ministry and care suffer.",
              },
              {
                title: "Time, Talent, and Treasure &mdash; The Whole-Life Gift",
                body: "Biblical generosity is not limited to money. The New Testament pictures the whole of Christian life as an offering: present your bodies as a living sacrifice (Romans 12:1). Time given to serve others, skills deployed for the common good, and financial gifts are all expressions of the same generosity of spirit. The parable of the talents (Matthew 25) treats abilities and opportunities as gifts entrusted for multiplication, not hoarding. Some people are called to give money they don&rsquo;t have in abundance through the gift of their time and presence. Others have financial capacity but limited time; their giving of treasure may represent their greatest sacrifice. The question is always: what has God entrusted to me, and am I holding it with open hands?",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Begin with the firstfruits discipline: before any other spending this month, set aside a specific percentage of your income as the first transaction &mdash; not what is left over after expenses but what comes first. Do this even if the percentage is smaller than you would like; the posture of first matters more than the amount.",
              "Conduct a generosity audit: review the past twelve months of financial records and calculate what percentage of your income was given away. Then ask whether that percentage reflects your stated values and your theology of money &mdash; and, if not, what would need to change.",
              "Identify one person or family in your immediate community &mdash; church, neighborhood, or workplace &mdash; who is in genuine need, and give directly and secretly to that need this week. No announcement, no tax receipts, just the quiet act of meeting a concrete need.",
              "Practice the Randy Alcorn challenge: for thirty days, each time you feel the impulse to buy something non-essential, pause and ask whether that money might do more good given away. You do not have to give it; the practice is simply to cultivate the habit of comparison.",
              "Give something that costs you something. Examine your current giving to see whether it represents genuine sacrifice or comfortable surplus. Wesley&rsquo;s rule was to save all you can by cutting every unnecessary expense &mdash; not for comfort but in order to give all you can.",
              "Set up automatic giving to your local church and to one additional cause, and then discipline yourself not to turn it off in difficult months. The automatic gift is a form of pre-commitment that protects the giving habit against the thousand reasons not to.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "John Wesley",
                work: "Sermon: The Use of Money",
                quote: "Earn all you can. Save all you can. Give all you can. Having gained all you can, and saved all you can, then give all you can.",
                bio: "John Wesley was the founder of Methodism and one of the most influential figures in 18th-century Christianity. His famous three-rule formula for the Christian use of money was not a prosperity gospel but a radical call to frugality in the service of generosity. Wesley himself died with almost nothing, having given away tens of thousands of pounds during his lifetime. He lived on a fixed income for decades while giving away everything above that amount. His sermon &ldquo;The Use of Money&rdquo; remains one of the most practical and demanding treatments of Christian economics ever written.",
              },
              {
                name: "Randy Alcorn",
                work: "The Treasure Principle",
                quote: "You can&rsquo;t take it with you, but you can send it on ahead. Giving is the only antidote to materialism &mdash; and God is the only audience worth performing for.",
                bio: "Randy Alcorn is the founder of Eternal Perspective Ministries and the author of The Treasure Principle, a brief and enormously influential book on Christian generosity. Alcorn and his wife made a decision decades ago to cap their personal income and give away everything above that amount, a decision that required significant legal creativity because of their pro-life activism. His book argues that giving is not merely a duty but the key that unlocks profound spiritual joy &mdash; that treasure sent ahead is treasure secured rather than treasure lost.",
              },
              {
                name: "Richard Foster",
                work: "Celebration of Discipline",
                quote: "Giving is the only antidote to the spiritual poison of greed. Generosity is an act of worship; it is also an act of war &mdash; a declaration that Mammon does not own us.",
                bio: "Richard Foster is the founder of Renovar&eacute; and the author of Celebration of Discipline, which placed simplicity and generosity among the central disciplines of the Christian life. Foster argues that money is a spiritual power in the biblical sense &mdash; not metaphorically but actually &mdash; and that the Christian&rsquo;s freedom from its grip must be exercised through habitual giving. His treatment of simplicity and generosity together is one of the clearest explanations in modern Christian writing of why giving is a spiritual practice, not merely a financial one.",
              },
              {
                name: "Tim Keller",
                work: "Generous Justice",
                quote: "If you do not rest in God&rsquo;s grace, you will always use your money to try to secure your identity and significance... Generosity is impossible without the gospel, and impossible without gospel-shaped motives.",
                bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential evangelical voices of his generation. His book Generous Justice argues that the gospel inextricably connects personal salvation to concern for the poor, and that a church that does not give generously to the poor has not yet understood the grace it has received. Keller&rsquo;s Redeemer was noted for giving significant percentages of its budget to church planting and mercy ministries even during its own financial difficulty.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "2 Corinthians 9:6-7", text: "Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." },
              { ref: "Luke 21:1-4", text: "Jesus looked up and saw the rich putting their gifts into the offering box, and he saw a poor widow put in two small copper coins. And he said, &ldquo;Truly, I tell you, this poor widow has put in more than all of them. For they all contributed out of their abundance, but she out of her poverty put in all she had to live on.&rdquo;" },
              { ref: "Matthew 6:19-21", text: "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven... For where your treasure is, there your heart will be also." },
              { ref: "Proverbs 3:9-10", text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine." },
              { ref: "Luke 12:15", text: "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions." },
              { ref: "1 Timothy 6:17-19", text: "Command those who are rich in this present world not to be arrogant nor to put their hope in wealth, which is so uncertain, but to put their hope in God, who richly provides us with everything for our enjoyment. Command them to do good, to be rich in good deeds, and to be generous and willing to share." },
              { ref: "Acts 2:44-45", text: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Generosity Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Area of giving (time, money, talent, presence)</label>
                  <textarea
                    value={jArea}
                    onChange={e => setJArea(e.target.value)}
                    placeholder="What area of generosity are you exploring or committing to?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What motivates this act of generosity?</label>
                  <textarea
                    value={jMotivation}
                    onChange={e => setJMotivation(e.target.value)}
                    placeholder="Gospel gratitude, response to need, obedience, joy..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Concrete next step</label>
                  <textarea
                    value={jNextStep}
                    onChange={e => setJNextStep(e.target.value)}
                    placeholder="What specific, dated action will you take this week?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.area && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Area</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.area}</p></div>}
                {e.motivation && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Motivation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.motivation}</p></div>}
                {e.next_step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.next_step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="8HFSn1lIFe0" title="The Treasure Principle &mdash; Randy Alcorn on Biblical Generosity" />
            <VideoEmbed videoId="W_2LSKH0GjA" title="John Wesley: Earn All You Can, Save All You Can, Give All You Can" />
            <VideoEmbed videoId="9b6oE1MNPZY" title="Why Christians Should Be the Most Generous People on Earth" />
            <VideoEmbed videoId="FKPxpjL1Lrk" title="Generosity as Spiritual Warfare Against Materialism" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
