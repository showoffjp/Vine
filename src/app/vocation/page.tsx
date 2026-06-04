"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Luther's Revolution: Reforming How We See Work", body: "Martin Luther shattered the medieval hierarchy that divided 'sacred' (priest, monk) from 'secular' (farmer, cobbler) callings. Every legitimate occupation, Luther argued, is a divine vocation — a calling through which God cares for the world. The farmer who grows food is God's hand feeding the hungry. The mother nursing a child is God's hand caring for the weak. No work done faithfully is unspiritual." },
  { title: "The Parable of the Talents: Faithfulness Over Outcome", body: "Matthew 25:14–30 is not primarily about money — it is about stewardship of God-given capacity. The servants are held accountable not for what they produce but for whether they used what they were given. God evaluates our work by faithfulness, not by worldly metrics of success. The smallest work, done faithfully, pleases the Master." },
  { title: "Colossians 3:23 — Audience of One", body: "'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters' (Col. 3:23). Paul is writing to slaves — the lowest rung of Roman society. Even in this degraded position, work can be done as worship. The audience changes everything. You are not working for a boss, a paycheck, or a reputation. You are working for Christ." },
  { title: "Image-Bearing Through Making", body: "God's first described action in Scripture is work — creating, ordering, naming, evaluating (Genesis 1-2). Humans made in his image are called to continue that work: cultivating the garden, naming animals, exercising dominion. Work is not the curse; thorns and thistles are the curse. Work was given before the Fall as a gift, not a punishment." },
  { title: "Vocation Includes All of Life", body: "Your vocation is not only your career. Luther identified multiple vocations each person holds simultaneously: worker, spouse, parent, citizen, neighbor, church member. The stay-at-home parent fulfilling the vocation of nurture is not 'less called' than the pastor. The retired person living out the vocation of intercessor and mentor may be in their most fruitful season." },
];

const CALLINGS = [
  { name: "Primary Calling", icon: "✝️", color: "#6B4FBB", desc: "To know, love, and follow Jesus Christ.", examples: ["Personal holiness", "Worship and prayer", "Growing in Christlikeness", "Bearing witness to the gospel"] },
  { name: "Secondary Calling", icon: "🎯", color: "#3B82F6", desc: "The specific domain(s) where God places you to serve.", examples: ["Career or profession", "Marriage and family", "Ministry role", "Community engagement"] },
  { name: "Temporary Callings", icon: "🌱", color: "#10B981", desc: "Seasons of service that are real but not permanent.", examples: ["Caring for aging parent", "Leading a project", "Serving in a short-term role", "Interim leadership"] },
  { name: "Context of Calling", icon: "🌍", color: "#F59E0B", desc: "The place, people, and time into which God has placed you.", examples: ["Your city or neighborhood", "Your cultural background", "This moment in history", "Your specific opportunities and constraints"] },
];

const DISCERNMENT_QUESTIONS = [
  { q: "What are you uniquely gifted to do?", note: "Not just what you can do, but what you do that others recognize and affirm as distinctive." },
  { q: "What breaks your heart?", note: "The intersection of your grief and your capacity often points toward calling." },
  { q: "Where do you consistently find yourself needed?", note: "Providence shapes calling through the pattern of needs that keep appearing before you." },
  { q: "What would you do even if it cost you rather than paid you?", note: "Core vocation persists through reward structures — it is intrinsic, not instrumental." },
  { q: "What do trusted mentors and community see in you?", note: "Calling is rarely discovered in isolation. The body confirms what the Spirit has given." },
  { q: "Where have your greatest failures and suffering led you?", note: "Brokenness often births the most specific vocations — we are comforted so we can comfort." },
];

const WORK_PROBLEMS = [
  { problem: "Idolizing Work", sign: "Identity collapses without achievement. Rest feels guilty. Worth is measured in productivity.", remedy: "Remember: you are not what you do. You are a child of God before you are a worker. Rest is obedience." },
  { problem: "Despising Work", sign: "You clock in and coast. You feel your job is beneath you or pointless. You give minimum effort.", remedy: "Every faithful act of work is an act of worship. Colossians 3:23 was written to people in the worst jobs. Excellence is a witness." },
  { problem: "Escapism through Busyness", sign: "You use work to avoid relationships, hard emotions, or the presence of God.", remedy: "Work is meant to be engaged, then released. The rhythms of Sabbath are a diagnostic of whether work owns you or serves you." },
  { problem: "Misalignment", sign: "Your gifts are unused. You feel chronically frustrated in your work. This has persisted for years.", remedy: "Honest vocational discernment — with community, prayer, and counsel — may reveal that you are in the wrong context, not the wrong field." },
];

interface VocationEntry {
  id: string;
  date: string;
  q: string;
  a: string;
}

export default function VocationPage() {
  const [activeTab, setActiveTab] = usePersistedState<"theology" | "calling" | "discern" | "journal" | "videos">("vine_vocation_tab", "theology");
  const [journal, setJournal] = useState<VocationEntry[]>(() => {
    try { const s = localStorage.getItem("vine_vocation_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_vocation_journal", JSON.stringify(journal)); } catch {} }, [journal]);

  const saveAnswers = () => {
    const filled = Object.entries(answers).filter(([, v]) => v.trim());
    if (!filled.length) return;
    const entry: VocationEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      q: `Vocation Discernment — ${filled.length} question(s) answered`,
      a: filled.map(([k, v]) => `${k}\n${v}`).join("\n\n"),
    };
    setJournal(prev => [entry, ...prev].slice(0, 30));
    setAnswers({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚒️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Vocation & Calling</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            You are not just employed — you are called. Every faithful act of work is an act of worship offered to the God who himself creates, orders, and sustains.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology of Work", icon: "📖" },
            { id: "calling" as const, label: "Types of Calling", icon: "🎯" },
            { id: "discern" as const, label: "Discernment", icon: "🧭" },
            { id: "journal" as const, label: "My Journal", icon: "✍️" },
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
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{t.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Common Work Problems & Gospel Remedies</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {WORK_PROBLEMS.map((w, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{w.problem}</div>
                    <p style={{ color: MUTED, fontSize: 13, marginBottom: 8 }}><strong style={{ color: TEXT }}>Sign: </strong>{w.sign}</p>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}><strong style={{ color: GREEN }}>Remedy: </strong>{w.remedy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "calling" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CALLINGS.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{c.icon}</span>
                  <div>
                    <h3 style={{ color: c.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{c.name}</h3>
                    <p style={{ color: MUTED, fontSize: 14, margin: "4px 0 0" }}>{c.desc}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.examples.map(e => (
                    <span key={e} style={{ background: `${c.color}15`, color: c.color, padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>The Key Distinction</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                Primary calling (to Christ) never changes and doesn't depend on circumstances. Secondary callings are real but changeable — they are not your identity, and failing at one doesn't mean failing at life. Keep primary calling primary, and let secondary callings flow from it.
              </p>
            </div>
          </div>
        )}

        {activeTab === "discern" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{DISCERNMENT_QUESTIONS.length} Questions for Vocational Discernment</h3>
              <p style={{ color: MUTED, fontSize: 14 }}>These questions are not a test with right answers. They are invitations to prayerful reflection. Work through them slowly over days or weeks.</p>
            </div>
            {DISCERNMENT_QUESTIONS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.q}</div>
                    <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.note}</div>
                  </div>
                </div>
                <textarea
                  value={answers[item.q] || ""}
                  onChange={e => setAnswers(prev => ({ ...prev, [item.q]: e.target.value }))}
                  aria-label="Reflect here..." placeholder="Reflect here..."
                  style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                />
              </div>
            ))}
            <button type="button" onClick={saveAnswers}
              style={{ width: "100%", padding: "12px", background: saved ? GREEN : PURPLE, border: "none", borderRadius: 8, color: saved ? BG : "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
              {saved ? "✓ Saved to Journal" : "Save Reflections to Journal"}
            </button>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Vocation Journal</h3>
              <p style={{ color: MUTED, fontSize: 14 }}>Your saved discernment reflections appear here. Use the Discernment tab to add new entries.</p>
            </div>
            {journal.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60, color: MUTED }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🧭</div>
                <div>No entries yet. Answer the discernment questions to begin.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {journal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <div style={{ color: GREEN, fontWeight: 700 }}>{e.q}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                    </div>
                    <pre style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{e.a}</pre>
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on vocation and calling.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "fGH5bhUwMB4", title: "Redefining Work", channel: "Timothy Keller / The Gospel Coalition", description: "Tim Keller unfolds a theology of vocation at The Gospel Coalition's Faith at Work conference — showing how all work participates in God's redemptive purposes." },
                  { videoId: "rTVIvdBIuLE", title: "Why Work Matters", channel: "Timothy Keller", description: "Keller argues that all Christians are engaged in God's work, not merely those in full-time ministry — and shows what faithful vocation looks like in every sphere of life." },
                  { videoId: "cFBt5LKClsk", title: "How Can We Discern Our Own Vocation or Calling in Life?", channel: "Christian Teaching", description: "A practical discussion of vocation discernment — how to understand what God is calling you to and how to test that sense of calling against Scripture and community." },
                  { videoId: "UvSBbOnIeTE", title: "The Theology of Work: What the Bible Says About Vocation", channel: "Christian Teaching", description: "A biblical theology of vocation tracing God's design for work from creation through fall to redemption — and what each stage means for how Christians work today." },
                  { videoId: "eBLa0s8Nr8o", title: "What Is the Practice of Vocation?", channel: "Christian Teaching", description: "A practical exploration of how to live out your calling day by day — integrating faith, work, and the specific gifts and opportunities God has given you." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
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
      <Footer />
    </div>
  );
}
