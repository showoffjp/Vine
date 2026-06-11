"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "All Truth Is God's Truth — Integration of Faith and Psychology", verse: "John 8:32", text: "Augustine's principle — that all truth, wherever it is found, belongs to God — has a long history in Christian thought. Applied to psychology, it means that genuine insights about human behavior, the nature of trauma, the effects of attachment, or the mechanics of cognitive distortion are not foreign to faith but part of the general revelation God has embedded in creation and human experience. Christians need not fear psychology as such. The question is not whether psychology has anything to offer but which of its claims are well-supported, which frameworks are compatible with a Christian anthropology, and where integration must give way to critique. Augustine himself drew freely on pagan philosophy where it aligned with truth; the same discernment is required when engaging psychological research." },
  { title: "The Soul Needs a Doctor — Pastoral Care and Professional Counseling Together", verse: "Matt 9:12", text: "Jesus told the Pharisees: it is not the healthy who need a doctor, but the sick. The analogy is apt. Pastoral care is indispensable — the community of faith, regular preaching of the word, the sacraments, prayer, and genuine friendship in the body of Christ address dimensions of human suffering that no clinical intervention touches. But pastoral care is not the same as clinical treatment, and it was never meant to substitute for it. A pastor equipped to preach through grief is not necessarily equipped to treat PTSD. A small group can provide belonging but not clinical intervention for obsessive-compulsive disorder. The stigma many Christians attach to therapy — the implication that seeking counseling is a sign of insufficient faith — does real harm. Jesus's own analogy commends the use of healing wherever it is available." },
  { title: "Biblical Counseling vs. Christian Counseling vs. Christian-Friendly Counseling — What Are the Differences?", verse: "Prov 15:22", text: "These three categories are often confused. Biblical counseling (associated with organizations like ACBC and CCEF) uses Scripture as the primary and sufficient resource for addressing all human problems — it ranges from the careful, scholarly work of CCEF to simpler approaches that may minimize psychological complexity. Christian counseling (associated with AACC) integrates psychological theory and clinical method with Christian faith — practitioners are typically licensed clinicians who also bring theological convictions to their work. Christian-friendly counseling describes secular clinicians who are themselves Christians and who can engage questions of faith sensitively even if their clinical method is not explicitly theological. Each has appropriate uses: the choice depends on the nature of the presenting concern, the depth of clinical training required, and the role of explicit theological integration the person needs." },
  { title: "Medication, Therapy, and Prayer — Are These Options Compatible?", verse: "1 Tim 5:23", text: "Paul told Timothy to use a little wine for his stomach. The Apostle to the Gentiles was not embarrassed to recommend a material remedy for a physical condition. The body-soul connection in human beings is real and complex: depression has both spiritual and neurological dimensions; anxiety involves both sin and biology; trauma affects the body as much as the mind. Treating the physical dimensions of mental illness with medication is not a failure of faith — it is stewardship of the body God made. Similarly, using evidence-based psychological therapies is using the means God has provided. Prayer and community remain essential — they address what medication and therapy cannot. But refusing treatment because 'God is my healer' and then suffering preventable damage is not greater faith; it is a misunderstanding of how God providentially provides healing through natural and medical means." },
  { title: "Finding the Right Therapist — What to Look For as a Christian", verse: "Prov 12:25", text: "Not every therapist is a good fit for every person, and for Christians the fit involves both clinical and spiritual dimensions. Look for: proper licensure (LPC, LCSW, PhD, PsyD, LMFT) and appropriate specialty training for your concern (trauma, addiction, marriage, eating disorders, etc.); clarity about their approach to faith integration — do they see your faith as a resource or an obstacle? denominational and theological compatibility, especially for questions where theology and psychology directly intersect; experience with the specific issue you are bringing. Red flags include: pressure to abandon faith commitments as part of treatment; claims about guaranteed outcomes; reluctance to discuss their approach or training; dual relationships. Green flags include: transparency about their method, genuine interest in your whole person, willingness to collaborate with your pastor if appropriate, and the absence of a formula." },
];

const voices = [
  { id: "dl", name: "Dr. Diane Langberg", role: "Author, Suffering and the Heart of God; Trauma Specialist", quote: "Trauma does not stay in the mind. It lives in the body, in the nervous system, in the way a person flinches or freezes or cannot speak. To heal the whole person, we must attend to the whole person — body, soul, and spirit. This is not a departure from Christian care. It is what Christian care has always meant, when it is done faithfully.", bio: "Langberg is one of the most respected voices in Christian psychology, with decades of clinical experience treating trauma survivors including clergy abuse victims. Her work integrates rigorous clinical training with deep theological reflection. Suffering and the Heart of God is essential reading for anyone who accompanies others through trauma — whether as a pastor, counselor, or friend. Her insistence that the body's suffering deserves the same pastoral attention as the soul's is both clinically sound and theologically grounded." },
  { id: "lc", name: "Dr. Larry Crabb", role: "Author, Understanding People; Psychologist and Theologian", quote: "The deepest need of the human soul is not psychological health. It is relationship — with God and with others. But that does not make psychological insight useless. It makes it a tool in the service of something larger: helping people come alive to the relationship for which they were made.", bio: "Crabb's Understanding People attempts one of the most serious integrations of biblical anthropology with psychological insight — working from a Christian view of the soul, its longings, and its distortions to understand what therapy can and cannot address. His later work moved toward an emphasis on spiritual community and soul care within the body of Christ, while maintaining that clinical expertise has genuine and appropriate contributions to make. He is a careful guide for navigating the integration question." },
  { id: "ej", name: "Dr. Eric Johnson", role: "Author, Foundations for Soul Care; Professor, Houston Baptist University", quote: "The goal of soul care is not the absence of symptoms. It is the formation of persons who are more fully alive to God, to themselves, and to others. Psychology offers real tools for that project. But the frame — the understanding of what a person is, what they are for, and what heals them at the deepest level — must come from Scripture and the Christian tradition.", bio: "Johnson's Foundations for Soul Care is the most comprehensive academic treatment of the integration of psychology and Christian faith, covering the history of Christian soul care from the Patristic period through the present and evaluating the major models of integration on offer. His framework for 'Christian psychology' — as distinct from both secular psychology and reductive biblical counseling — offers the most sophisticated account of how the disciplines can be related without losing either." },
];

const practices = [
  { icon: "✍️", title: "Write Out Your Concerns Before the First Session", text: "Before meeting a potential therapist for the first time, spend time writing out what you are struggling with and what you are hoping to find. This serves two purposes. It helps you articulate something that may feel overwhelming or vague, giving it form and language. And it gives you a concrete way to assess whether the therapist you meet is actually equipped for your specific concern. A good therapist will engage what you bring with genuine curiosity and will not try to redirect you toward what they prefer to treat. Coming prepared protects you from therapists who match you poorly and helps you find one who can genuinely help." },
  { icon: "❓", title: "Ask Potential Therapists Screening Questions", text: "Before committing to work with a therapist, ask: What is your clinical training and licensure? What do you specialize in? How do you approach faith as it relates to the issues I'm bringing? How do you typically structure sessions and measure progress? A good therapist will welcome these questions — they demonstrate that you are taking your care seriously, and answering them is part of the therapist's professional responsibility. Reluctance to answer, defensiveness, or vague non-answers are themselves information. You are hiring someone to do a specific job; you are entitled to know whether they are qualified for it." },
  { icon: "📊", title: "Track Your Progress Over Time", text: "Therapy is not a passive experience; it is active work. Keep a simple record of what you bring to each session, what you discover or work through, and whether you notice change over time in the areas that brought you to therapy. Many validated measures (like the PHQ-9 for depression or GAD-7 for anxiety) are publicly available and can give you a structured way to track where you are. If after a reasonable period (typically three to six months of regular sessions) you see no movement, name this with your therapist and discuss whether the approach should change or whether a different therapist might be more helpful." },
  { icon: "🤝", title: "Involve Your Pastor Alongside Therapy If Possible", text: "Therapy and pastoral care are not in competition; they address overlapping but distinct dimensions of the whole person. With your permission, a therapist and a pastor can collaborate — the pastor attending to your spiritual formation, community, and theological questions while the therapist addresses clinical dimensions. At minimum, keeping your pastor informed that you are in therapy (without necessarily sharing clinical details) allows them to support you well. If your pastor is skeptical of counseling, consider whether a direct conversation about what therapy involves and what you hope to gain might help. Many pastors become advocates once they understand the difference between secular reductionism and skilled Christian or Christian-friendly clinical care." },
  { icon: "📓", title: "Journal Between Sessions", text: "The work of therapy does not happen only in the therapy room. Between sessions, notice what comes up — memories triggered by the session, emotions that resurface, patterns you begin to recognize in yourself. A brief journal practice — even five minutes of writing after a session or when something significant arises — creates a record that you can bring back to therapy and deepens the work. It also practices the capacity for self-reflection that therapy is trying to build. You are learning to become a more honest and attentive witness to your own inner life; journaling is a laboratory for that practice." },
];

const scriptures = [
  { verse: "Prov 15:22", text: "Plans fail for lack of counsel, but with many advisers they succeed." },
  { verse: "Matt 9:12", text: "On hearing this, Jesus said, It is not the healthy who need a doctor, but the sick." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Ps 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "2 Cor 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
  { verse: "Prov 12:25", text: "Anxiety weighs down the heart, but a kind word cheers it up." },
];

const videoIds = ["pWQGpMQGBsQ", "f3hEHaU4kS8", "JRQpMD5-FBA", "3jYvEAoRvCk"];

type CTEntry = { id: string; date: string; concern: string; seeking: string; notes: string };

export default function ChristianTherapyGuidePage() {
  const [tab, setTab] = useState("theology");
  const [ctJournal, setCtJournal] = useState<CTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrtherapy_entries") ?? "[]"); } catch { return []; }
  });
  const [jConcern, setJConcern] = useState("");
  const [jSeeking, setJSeeking] = useState("");
  const [jNotes, setJNotes] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_chrtherapy_entries", JSON.stringify(ctJournal)); } catch {}
  }, [ctJournal]);

  function saveEntry() {
    if (!jConcern.trim() && !jSeeking.trim()) return;
    setCtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), concern: jConcern, seeking: jSeeking, notes: jNotes }, ...prev]);
    setJConcern(""); setJSeeking(""); setJNotes("");
  }
  function deleteEntry(id: string) { setCtJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Mental Health &amp; Healing</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Therapy Guide</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Finding and working with a Christian counselor or therapist — the theology of healing, how faith and psychology integrate, and practical guidance for choosing care that serves your whole person.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? BLUE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: BLUE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: BLUE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${BLUE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
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
                  <div style={{ color: BLUE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Counseling Search Journal</h3>
                <textarea placeholder="What are you struggling with and want help with?" value={jConcern} onChange={e => setJConcern(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What are you looking for in a counselor — faith integration, specialty, approach?" value={jSeeking} onChange={e => setJSeeking(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="Anything you've noticed from sessions or your search so far" value={jNotes} onChange={e => setJNotes(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: BLUE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {ctJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ctJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.concern && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Concern:</strong> {e.concern}</p>}
                  {e.seeking && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Seeking:</strong> {e.seeking}</p>}
                  {e.notes && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Notes:</strong> {e.notes}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoIds.map(id => (
                <div key={id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={id} title={`Christian Therapy — ${id}`} />
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
