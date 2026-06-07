"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your Identity Was Never Your Job", verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God. The foundational Christian claim is that identity is located in union with Christ, not in role, title, or output. Job loss exposes whether this was actually believed or merely held as a theological proposition. Losing the job reveals what the job was actually carrying." },
  { title: "Work Is a Calling, Not a Salvation", verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. Work is meant to be an expression of calling and service, not the source of worth. When this theology is held clearly, job loss is a severe disruption — but not an annihilation of the self." },
  { title: "God Retains Purpose for Those Whose Role Has Been Stripped Away", verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. This was spoken to exiles — people whose roles, positions, and livelihoods had all been stripped away simultaneously. God's purposes were not paused. They were being worked out in the exile itself." },
  { title: "The Desert Has Always Been Where Identity Is Clarified", verse: "Hosea 2:14", text: "Therefore I am now going to allure her; I will lead her into the wilderness and speak tenderly to her. The wilderness of unemployment or career collapse is not punitive in its design — it is potentially formative. It is the place where the noise of productivity ceases and God speaks." },
  { title: "Moses Was Forty Years in the Desert Before His Actual Calling", verse: "Exodus 3:10", text: "So now, go. I am sending you to Pharaoh to bring my people the Israelites out of Egypt. Moses spent his first 40 years in privilege, his second 40 years in irrelevance, and his final 40 years doing what he was made for. The desert was not a detour from purpose — it was preparation for it." },
];

const voices = [
  { id: "v1", name: "Tim Keller", role: "Author, Every Good Endeavor", quote: "If you make your work your identity, you will always have a fragile self — because work, even good work, can always be taken away.", bio: "Keller's theology of work argues that vocation is a calling to serve God and neighbor through work, not a mechanism for constructing identity. This framework is what job-loss survivors need when the foundations shift." },
  { id: "v2", name: "William Doherty", role: "Family Therapist, Take Back Your Marriage", quote: "When men or women lose a job, they often lose the primary arena through which they understood their worth and their relationship with the world. That is not a career crisis — it is an identity crisis.", bio: "Doherty's work on family and identity addresses how job loss destabilizes not just finances but the entire web of identity, relationship, and purpose that was organized around professional role." },
  { id: "v3", name: "Os Guinness", role: "Author, The Call", quote: "A calling is not a job. A job can be lost. A calling remains. The question is whether you have ever distinguished them.", bio: "Guinness argues that the confusion of vocation with employment is a modern Western distortion that leaves people catastrophically vulnerable to job loss. His theology of calling provides a framework that survives career disruption." },
  { id: "v4", name: "Patrick Lencioni", role: "Author, The Three Signs of a Miserable Job", quote: "Every human being needs to feel that they matter — that their contribution to something larger than themselves is real and valued. Job loss attacks all three of those needs simultaneously.", bio: "Lencioni's organizational work, while practically focused, identifies the psychological dimensions of job loss: the loss of measurability, of connection, and of meaning that employment (at its best) provides." },
];

const practices = [
  { icon: "🔎", title: "Separate What Was Lost from What Cannot Be Lost", text: "Make two lists: what job loss has actually taken (income, role, routine, community, purpose-expression) and what it cannot take (identity in Christ, gifts and capacities, relationships, resurrection hope). The first list deserves grief. The second prevents identity collapse." },
  { icon: "📅", title: "Establish a Daily Structure Immediately", text: "Unemployment removes the external structure that previously organized time. The absence of structure amplifies depression, shame, and passivity. Create a daily routine: wake time, job search hours, meals, exercise, rest, and a defined end to the working day. Structure is not denial of grief — it is a container for it." },
  { icon: "🤝", title: "Tell Your Church Community the Truth", text: "Many Christians hide job loss out of shame, losing access to the network and practical support that community provides. Telling your pastor, elders, or small group creates the possibility of referrals, practical help, and accountability — and breaks the isolation that makes the season harder than it has to be." },
  { icon: "📖", title: "Read the Wilderness Narratives as Your Story", text: "Moses, Elijah, David, John the Baptist, Jesus himself — all spent significant time in wilderness before their calling became clear. Read these narratives as models, not just history. You may be in the wilderness, not the destination. What is being formed in you here?" },
  { icon: "🧠", title: "Consider Vocational Counseling or Career Coaching", text: "Career transitions can be navigated more wisely with professional guidance. A vocational counselor can help you identify what work expresses your actual gifts and calling, not just what you did before. This is especially valuable if the lost job was itself a mismatch for who you are." },
  { icon: "🌱", title: "Name the Grief Without Rushing to the Solution", text: "Job loss involves real grief — of role, of colleagues, of routine, of meaning-making. Rushing to the job search before grieving produces anxiety and poor decisions. Allow the grief a measured space: journaling, prayer, conversation with a trusted person. Grief and job searching can coexist." },
];

const scriptures = [
  { verse: "Colossians 3:3-4", text: "For you died, and your life is now hidden with Christ in God. When Christ, who is your life, appears, then you also will appear with him in glory." },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Matthew 6:26", text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?" },
  { verse: "Psalm 37:5-6", text: "Commit your way to the Lord; trust in him and he will do this: He will make your righteous reward shine like the dawn, your vindication like the noonday sun." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
];

type JobLossEntry = { id: string; date: string; lost: string; remains: string; step: string };

export default function JobIdentityLossPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<JobLossEntry[]>([]);
  const [form, setForm] = useState({ lost: "", remains: "", step: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_jobidentitylossj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.lost.trim()) return;
    const e: JobLossEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_jobidentitylossj_entries", JSON.stringify(updated));
    setForm({ lost: "", remains: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_jobidentitylossj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Career and Calling</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Your Job Was Your Identity</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Job loss is painful in every season. But when your work had become your primary source of identity, purpose, and worth, the loss is more than practical — it is existential. This page is for those whose career loss has become a crisis of self, and who need to find ground that does not shift with employment status.</p>

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
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if job loss has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>CareerOneStop</strong> — careeronestop.org, free career services and job search</li>
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
              <textarea value={form.lost} onChange={e => setForm(f => ({ ...f, lost: e.target.value }))} placeholder="What has actually been lost — role, income, community, meaning?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.remains} onChange={e => setForm(f => ({ ...f, remains: e.target.value }))} placeholder="What remains true about who you are that the job loss cannot touch?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="One step today — not to fix everything, but to move one step forward" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.lost && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Lost:</strong> {e.lost}</p>}
                {e.remains && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Remains:</strong> {e.remains}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how the kingdom of God inverts the world's metrics of value and success — the framework needed when job loss strips away status and role." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how our sense of self must be grounded in being rather than doing — what job loss reveals about where identity was actually located." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on trusting God's purposes in the wilderness seasons — what it means to believe God is still working when the work has been taken away." },
              { videoId: "SqGRnlXplx0", title: "The Rest of God", channel: "Eugene Peterson — Regent College", description: "Peterson on sabbath and identity — how ceasing from work reveals who we actually are when the doing stops, and what God speaks in that silence." },
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
