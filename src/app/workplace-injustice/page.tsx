"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Sees What the Powerful Hide", verse: "Psalm 11:7", text: "For the Lord is righteous, he loves justice; the upright will see his face. God's character is bound up with justice. What is done in the boardroom, in the performance review, in the private email, in the meeting where credit is stolen — God sees it. He is not distant from workplace evil. He is a God of justice who will not ultimately be mocked by those who oppress their workers or reward the dishonest. This does not eliminate your suffering now, but it is the theological foundation for enduring it without losing yourself." },
  { title: "Work Has Dignity That Cannot Be Stolen", verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving. Paul wrote this to enslaved people — people with no labor rights, no recourse, no dignity in their work context. His instruction is not 'accept the injustice.' It is: your work has dignity because of who it is ultimately for, regardless of whether your employer sees that dignity. Injustice at work cannot take away the meaning of the work itself." },
  { title: "Lament Is Appropriate Before Wrongdoing", verse: "Jeremiah 20:12", text: "Lord Almighty, you who examine the righteous and probe the heart and mind, let me see your vengeance on them, for to you I have committed my cause. Jeremiah cried out to God about injustice — specifically, he named his persecutors and asked God to act. This is not bitterness; it is prayer. Crying out to God about what has been done to you at work, naming the specific people and specific wrongdoings, is a form of prayer found throughout the Psalms and Prophets. You do not have to pretend it is fine." },
  { title: "Wisdom Knows When to Stay and When to Leave", verse: "Proverbs 14:16", text: "The wise fear the Lord and shun evil, but a fool is hotheaded and yet feels secure. Staying in a toxic or unjust workplace indefinitely is not faithfulness — it is sometimes foolishness. The wise person assesses: Can I address this formally? Is there a path to change? Am I being harmed in ways I cannot recover from? Is my integrity being compromised? When the answer to the last two is yes, leaving is often wisdom, not abandonment of the mission." },
  { title: "Justice Work Is Kingdom Work", verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God. The person who advocates for pay equity, reports workplace discrimination, supports a colleague who is being mistreated, or refuses to participate in unethical business practices is not creating trouble — they are acting justly. This is not optional Christian behavior. It is one of the three things the Lord requires." },
];

const voices = [
  { id: "v1", name: "Tim Keller", role: "Late Author, Pastor", quote: "Christians who think their faith is private and has nothing to do with their work have never understood the biblical vision of shalom — a comprehensive flourishing that includes economic and workplace justice.", bio: "Tim Keller addressed workplace faith extensively in Every Good Endeavor and throughout his ministry at Redeemer Presbyterian. He articulated how the gospel calls Christians to work with integrity and to care about justice in their economic contexts — not as a side project but as an expression of kingdom values in the most concrete possible arena." },
  { id: "v2", name: "Denise Daniels", role: "Organizational Behavior Scholar", quote: "Christians in workplace injustice often feel uniquely trapped — they feel called to stay and serve, but they are also being genuinely harmed. Both can be true, and both deserve pastoral attention.", bio: "Denise Daniels is a professor of organizational behavior at Wheaton College and has written about the intersection of faith, work, and organizational ethics. Her research addresses how Christians navigate workplaces that compromise their values — including how to make wise decisions when calling and integrity are in tension." },
  { id: "v3", name: "David Miller", role: "Professor, Princeton Theological Seminary", quote: "The integration of faith and work is not just about individual ethics. It is about how Christian values reshape organizations — including how organizations treat their most vulnerable workers.", bio: "David Miller is the director of the Princeton University Faith & Work Initiative and author of God at Work. His work addresses how Christian professionals can be agents of organizational change and justice, not merely individual moral exemplars, and provides theological grounding for workplace advocacy and institutional reform." },
  { id: "v4", name: "Mark Labberton", role: "President, Fuller Theological Seminary", quote: "Christians have often confused faithfulness with niceness. Prophetic presence in institutions requires a willingness to name what is wrong — which is not comfortable but is exactly what the gospel calls for.", bio: "Mark Labberton's work on calling, justice, and Christian witness in public life provides a framework for Christians navigating workplaces that require prophetic clarity rather than compliant silence. His book Called addresses what faithful engagement looks like in institutional contexts where values are being violated." },
];

const practices = [
  { icon: "📋", title: "Document Everything", text: "If you are experiencing workplace injustice — discrimination, credit theft, retaliation, harassment — document it in writing. Date, time, what was said or done, who witnessed it. This is not suspicious or litigious; it is wisdom that protects you and serves justice if formal action becomes necessary." },
  { icon: "🤝", title: "Find One Ally Within the Organization", text: "Isolated targets of workplace injustice are more vulnerable and more likely to be gaslit. Finding one trusted colleague who understands the situation creates both support and witness. Choose carefully — someone with integrity who will not be pressured to recant their knowledge of what happened." },
  { icon: "⚖️", title: "Know Your Legal Rights", text: "Workplace discrimination, wage theft, retaliation for reporting illegal activity, and harassment are illegal in most jurisdictions. The EEOC (eeoc.gov), Department of Labor, and state-level equivalents provide guidance and filing options. Filing a complaint is not vengeance — it is the civil legal process that exists precisely for these situations." },
  { icon: "💬", title: "Seek Pastoral and Counseling Support", text: "Workplace injustice causes genuine harm — to self-worth, to trust, to physical health through stress. Do not minimize the impact. Talk to a pastor or counselor, not just a career advisor. The spiritual and emotional dimensions deserve as much attention as the strategic ones." },
  { icon: "🔍", title: "Discern the Right Time to Leave", text: "Ask honestly: Is staying serving my calling, my integrity, and my wellbeing — or am I staying from fear, financial pressure, or a false sense of obligation? Sometimes leaving is the most just thing you can do for yourself. Sometimes staying and advocating is. Discern rather than default." },
  { icon: "🙏", title: "Commit Your Cause to God", text: "Jeremiah 20:12 ends: to you I have committed my cause. The workplace situation that is out of your control — the outcome of a lawsuit, a retaliation you cannot prevent, a boss who will never be held accountable — can be committed to God. Not as a substitute for action, but as the posture of a person who acts faithfully and then trusts the ultimate judge." },
];

const scriptures = [
  { verse: "Psalm 11:7", text: "For the Lord is righteous, he loves justice; the upright will see his face." },
  { verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Psalm 37:6", text: "He will make your righteous reward shine like the dawn, your vindication like the noonday sun." },
  { verse: "James 5:4", text: "Look! The wages you failed to pay the workers who mowed your fields are crying out against you. The cries of the harvesters have reached the ears of the Lord Almighty." },
];

type WIEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function WorkplaceInjusticePage() {
  const [tab, setTab] = useState("theology");
  const [wiJournal, setWiJournal] = useState<WIEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setWiJournal(JSON.parse(localStorage.getItem("vine_workplaceinjusticej_entries") ?? "[]")); } catch { setWiJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: WIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...wiJournal];
    setWiJournal(updated);
    localStorage.setItem("vine_workplaceinjusticej_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = wiJournal.filter(e => e.id !== id);
    setWiJournal(updated);
    localStorage.setItem("vine_workplaceinjusticej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⚖️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Workplace Injustice</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When your workplace violates your dignity or ethics — finding faithfulness, wisdom, and a God who sees.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What has happened? What specifically has been done to me or around me?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does God say about injustice and about my worth?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What is the wisest next step — document, speak, report, or leave?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {wiJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Next: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how the kingdom of God consistently upends power structures and calls Christians to lives of justice rather than accommodation to the powerful." },
              { videoId: "G9B0n0JJoSQ", title: "The Color of Compromise", channel: "The Gospel Coalition", description: "Jemar Tisby on how Christians have historically compromised on justice issues — and what courageous faithfulness requires when institutions are complicit in wrong." },
              { videoId: "OU69so6VjHA", title: "Race, Work, and the Christian", channel: "Keller, Piper, Bradley", description: "A panel on how Christian faith should shape our response to injustice in institutional contexts, including workplaces — and what prophetic witness looks like." },
              { videoId: "vvRGdpBEn6c", title: "Lament and Prophetic Witness", channel: "Fuller Seminary", description: "Mark Charles on what it means to bear witness to injustice faithfully — including how lament is itself a form of prophetic action in unjust systems." },
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
      <Footer />
    </>
  );
}
