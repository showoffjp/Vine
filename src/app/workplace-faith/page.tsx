"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Work Is Not a Curse — It Is Calling", verse: "Genesis 2:15", text: "Before the fall, God placed the man in the garden to work it and keep it. Work is not punishment for sin — it was given before sin entered the picture. The curse in Genesis 3 is not work itself but the frustration and toil that now accompany it. This means your labor — in a hospital, a classroom, a cubicle, a warehouse — participates in God's ongoing creative activity. Your work matters not just as income but as calling." },
  { title: "You Are Ambassador, Not Infiltrator", verse: "2 Corinthians 5:20", text: "We are therefore Christ's ambassadors. An ambassador does not hide their origin country — they represent it openly while living within another culture. The Christian in a secular workplace is not an undercover agent trying not to get caught. You are a representative of a kingdom whose values shape how you work, how you treat colleagues, how you respond to pressure, and what you celebrate or refuse to celebrate." },
  { title: "Faithfulness in Small Things Is the Practice", verse: "Luke 16:10", text: "Whoever can be trusted with very little can also be trusted with much. In most workplaces, the most powerful witness to Christian character is not verbal proclamation — it is how you do the work that nobody watches, how you handle credit and blame, how you treat the maintenance staff, how you respond when the project fails. Faithfulness in ordinary moments is the primary form vocational discipleship takes." },
  { title: "Conflict Is Inevitable — Integrity Is Not Optional", verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone. Workplace conflict — with coworkers, bosses, difficult personalities — is not a sign that you are doing something wrong. The qualifier 'as far as it depends on you' acknowledges that peace is not always achievable. What remains constant is your character in the conflict: honest, fair, non-retaliatory, preserving the dignity of the other person." },
  { title: "Rest Is Not Optional — It Is Obedience", verse: "Exodus 20:8-10", text: "Six days you shall labor — but the seventh is for rest. In a culture that valorizes overwork and treats exhaustion as a badge of honor, choosing rest is an act of counter-cultural obedience. You are not your productivity. Your worth is not measured by your output. Practicing Sabbath — whatever form that takes in your work life — is a declaration that God, not your labor, is the source of your provision and identity." },
];

const voices = [
  { id: "dh", name: "Dorothy Sayers", role: "Novelist, Essayist", quote: "The Church's approach to an intelligent carpenter is usually confined to exhorting him not to be drunk and disorderly in his leisure hours and to come to church on Sundays. What the Church should be telling him is this: that the very first demand that his religion makes upon him is that he should make good tables.", bio: "Sayers' 1942 essay 'Why Work?' remains one of the most penetrating Christian meditations on vocation. She argued that work done well is itself an act of worship, and that the Church has largely abdicated its responsibility to speak to Christians about what it means to work faithfully." },
  { id: "tk", name: "Tim Keller", role: "Author, Every Good Endeavor", quote: "Work is not just a platform for witness — it is itself a form of witness. When Christians work with excellence, integrity, and care for others, they are participating in the renewal of creation and displaying the character of the God they serve.", bio: "Keller's book Every Good Endeavor, co-written with Katherine Alsdorf, is the most thorough contemporary theological treatment of work and vocation. It addresses how the gospel transforms motivation, ambition, and identity in work across every industry." },
  { id: "lh", name: "Liz Forkin Bohannon", role: "Founder, Sseko Designs; Author", quote: "You don't have to choose between doing good and doing well. The question isn't whether your work can be meaningful — it's whether you're willing to do it with intention, excellence, and care for the people around you.", bio: "Bohannon built Sseko Designs as a fashion company that creates employment opportunities for women in Uganda. Her work demonstrates how entrepreneurship and marketplace work can be integrated with deep justice and theological values." },
];

const practices = [
  { icon: "🎯", title: "Clarify Your Theology of Work Before Monday", text: "Most workplace struggles — overwork, people-pleasing, ethical compromise, identity in achievement — are rooted in a disordered theology of work. Spend time with resources like Every Good Endeavor (Keller) or the writings of Dorothy Sayers to develop a biblically grounded understanding of what work is for, what it can and cannot give you, and what faithfulness looks like in your specific context." },
  { icon: "🤝", title: "Build Relationships Before You Need Them", text: "Influence in the workplace comes primarily through genuine relationship — not through being the most vocal person about your faith. Learn your colleagues' names, their family situations, their pressures. Be the person who shows up when someone is struggling — not with tracts, but with presence. Most people will ask about your faith if you are consistently kind and trustworthy over time." },
  { icon: "⚖️", title: "Know Your Ethical Limits in Advance", text: "Workplace ethical dilemmas rarely announce themselves — they arrive disguised as small compromises. Know in advance where your lines are: around honesty, around how colleagues are treated, around what you will celebrate or refuse to celebrate. Having thought through these things before the pressure arrives means you are deciding from your values, not reacting in the moment." },
  { icon: "🔋", title: "Practice Sustainable Rhythms — Not Martyrdom", text: "Many Christians in demanding professions mistake overwork for faithfulness. But your family, your health, and your long-term capacity to serve are also stewardship responsibilities. Build in sustainable rhythms — real Sabbath, real vacation, real limits on availability — not as a luxury but as a theological discipline. You are not the messiah of your organization." },
  { icon: "💬", title: "Integrate, Do Not Bifurcate", text: "The pietist instinct is to keep Sunday-you and Monday-you in separate compartments. But the integrated Christian life does not split off 'spiritual' from 'secular.' Bring your full self to work: your commitment to truth, your care for people, your capacity for lament when things go wrong, your joy when they go right. This integration itself is a form of witness." },
];

const scriptures = [
  { verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." },
  { verse: "Proverbs 22:29", text: "Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank." },
  { verse: "Matthew 5:16", text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "1 Thessalonians 4:11-12", text: "Make it your ambition to lead a quiet life: You should mind your own business and work with your hands, just as we told you, so that your daily life may win the respect of outsiders and so that you will not be dependent on anybody." },
  { verse: "2 Corinthians 5:20", text: "We are therefore Christ's ambassadors, as though God were making his appeal through us." },
];

type WorkEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function WorkplaceFaithPage() {
  const [tab, setTab] = useState("theology");
  const [workJournal, setWorkJournal] = useState<WorkEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_workfaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_workfaithj_entries", JSON.stringify(workJournal)); } catch {}
  }, [workJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setWorkJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setWorkJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Faith & Work</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Faith in the Workplace</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Navigating calling, integrity, conflict, and witness in your vocation.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Vocation Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What tension, pressure, or question am I carrying from work right now?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What does God say about who I am and why I work?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One concrete step toward faithful work this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {workJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {workJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Tension: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on why emotional health and spiritual maturity are inseparable — critical for Christians in workplaces that demand high performance and offer little space for integrated, whole-person living." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God changes the motivation for work — from career anxiety and status-seeking to the freedom of working for an audience of One." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Vocation in God's Economy", channel: "Tim Keller / The Gospel Coalition", description: "Keller explores how the Kingdom of God inverts worldly measurements of success — including how we evaluate the meaning and worth of our work." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God Over Your Work", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul on the sovereignty of God over every circumstance — including workplace trials, difficult bosses, and the uncertainty of career — and what it means to trust God in vocational life." },
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
