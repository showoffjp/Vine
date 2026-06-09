"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Bible Is Full of People Who Were Incarcerated", verse: "Genesis 39:20", text: "Joseph was falsely imprisoned. Jeremiah was thrown in a cistern. John the Baptist was beheaded in prison. Paul wrote multiple epistles from prison. Peter was imprisoned and miraculously freed. The biblical story does not pretend that incarceration does not happen — it runs right through it. You are in the company of people God was deeply present with." },
  { title: "There Is No Condemnation for Those in Christ", verse: "Romans 8:1", text: "Whatever you did, whatever was done to you, whatever the justice system recorded about you — if you are in Christ, there is now no condemnation. Not conditional on future performance. Not dependent on whether the church accepts you. Not subject to reversal. The legal verdict of God over you in Christ is permanent and final." },
  { title: "New Creation Means New Beginning Is Real", verse: "2 Corinthians 5:17", text: "If anyone is in Christ, the new creation has come: the old has gone, the new is here. This is not a platitude — it is the boldest claim of the New Testament. The person who walks out of prison in Christ is not required to carry the identity of their past into the future. This is not denial of history; it is the claim that history does not have the final word." },
  { title: "The Church Is Supposed to Visit Those in Prison", verse: "Matthew 25:36-40", text: "Jesus lists visiting those in prison as among the works by which the sheep are recognized from the goats. Caring for people who are incarcerated and people who are rebuilding after incarceration is not a special calling for a few — it is the normal expression of Christian community. If the church is absent at reentry, the church has failed Matthew 25." },
  { title: "God Restores What Was Destroyed", verse: "Joel 2:25", text: "God promises to restore the years the locusts have eaten. Prison does real damage — to families, relationships, skills, mental health, and decades of life. The promise of restoration does not pretend this damage did not happen. It claims that God is in the business of rebuilding from rubble. What was lost is not necessarily permanent." },
];

const voices = [
  { id: "cf", name: "Charles Colson", role: "Founder, Prison Fellowship", quote: "I found God in prison — and I found that the church's failure to engage with those behind bars was one of the greatest failures of the twentieth-century church. That is what drove me to spend my life trying to fix it.", bio: "Colson was Nixon's 'hatchet man' who was imprisoned for Watergate-related crimes and came to faith in prison. He founded Prison Fellowship, which has become the largest Christian prison ministry in the world, and was a tireless voice for criminal justice reform from a Christian perspective." },
  { id: "bs", name: "Bryan Stevenson", role: "Author, Just Mercy", quote: "We are all more than the worst thing we have ever done. The opposite of poverty is justice. We are all implicated in a system that has devastated communities — and we all have a role in changing it.", bio: "Stevenson is a Christian attorney and founder of the Equal Justice Initiative who has spent his career defending people on death row and advocating for criminal justice reform. His book Just Mercy is one of the most compelling accounts of injustice and mercy in the American legal system." },
  { id: "ll", name: "Lecrae", role: "Artist, Prison Advocate", quote: "The church used to be the institution in the community where people who had been through the system could come home. We need to get back to being that place.", bio: "Lecrae has spoken and written extensively about the church's calling to those affected by incarceration and criminal justice. His own story of grace and transformation has been a powerful witness in communities affected by mass incarceration." },
];

const practices = [
  { icon: "🏠", title: "Find Housing Before You Need It Desperately", text: "Housing is the single greatest practical barrier at reentry. Research halfway houses, transitional housing programs, and church-based reentry housing in your area before release if possible. Prison Fellowship (prisonfellowship.org) has reentry resources by state. Do not leave housing until you have no other option." },
  { icon: "⛪", title: "Find a Church That Will Receive You — Before You Perform", text: "You need a church that welcomes you with your record, not one that will accept you once you prove yourself. This exists. Ask reentry programs, Prison Fellowship, or Call to Freedom (calltofreedominc.org) for church referrals. The right church community is the single greatest predictor of successful reintegration." },
  { icon: "📋", title: "Know Your Legal Rights and Obligations", text: "Reentry comes with a complex web of supervision conditions, employment restrictions, and obligations. Know exactly what your conditions are. Probation and parole violations can return you to prison for technical issues. National Reentry Resource Center (nationalreentryresourcecenter.org) provides legal information by state." },
  { icon: "💪", title: "Accept Help As an Act of Courage", text: "Many people coming out of prison have learned not to trust help and not to show need — survival skills inside that become liabilities outside. Accepting help from reentry programs, churches, and family is an act of courage and wisdom, not weakness. You cannot rebuild alone." },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { verse: "Isaiah 61:1-3", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners, to proclaim the year of the Lord's favor." },
  { verse: "Psalm 107:13-14", text: "Then they cried to the Lord in their trouble, and he saved them from their distress. He brought them out of darkness, the utter darkness, and broke away their chains." },
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten." },
  { verse: "Matthew 25:36", text: "I was in prison and you came to visit me." },
];

const videos = [
  { id: "pr_1", title: "Charles Colson — From Watergate to Prison Fellowship", channel: "Prison Fellowship" },
  { id: "pr_2", title: "Just Mercy — Bryan Stevenson on Justice and the Gospel", channel: "Equal Justice Initiative" },
  { id: "pr_3", title: "Coming Home — The Church and Prison Reentry", channel: "Prison Fellowship" },
  { id: "pr_4", title: "No Condemnation — Romans 8 and Starting Over", channel: "Desiring God" },
];

type PREntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PrisonReentryPage() {
  const [tab, setTab] = useState("theology");
  const [prJournal, setPrJournal] = useState<PREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prisonreentryj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prisonreentryj_entries", JSON.stringify(prJournal)); } catch {}
  }, [prJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPrJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPrJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Restoration and New Life</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Prison Reentry</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, resources, and community for those rebuilding after incarceration</p>

        <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: GREEN }}>Reentry Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>Prison Fellowship Reentry:</strong> prisonfellowship.org/reentry — housing, jobs, church connections<br />
            <strong>National Reentry Resource Center:</strong> nationalreentryresourcecenter.org<br />
            <strong>988 Lifeline:</strong> Call or text 988 — 24/7 crisis support
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>The Gospel for Those Starting Over</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices for Restoration</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Building Your New Life</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for New Beginnings</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your New Beginning Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is the hardest thing about rebuilding right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="The hardest part right now is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Who are you becoming? What does God say about your identity?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="I am becoming..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one concrete step you are taking this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I will..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {prJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Every day you walk in freedom is a day worth marking.</p>}
            {prJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>HARDEST RIGHT NOW</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHO I AM BECOMING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>STEP THIS WEEK</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
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
