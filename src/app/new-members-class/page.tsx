"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "why" | "sessions" | "covenant" | "resources" | "journal" | "videos";

const whyPoints = [
  {
    title: "Membership Is a Mutual Covenant, Not a Club Subscription",
    content: "Church membership in the New Testament is not optional social affiliation — it is the visible expression of a person's belonging to the body of Christ (1 Corinthians 12:12-27). When someone joins a local church, they are making a covenant: they commit to the church's mission, teaching, and accountability; the church commits to care for them, teach them, and shepherd their soul. A new members class is the beginning of that covenant conversation."
  },
  {
    title: "The Church Has the Right and Responsibility to Know Who Belongs",
    content: "Matthew 18:15-20 and 1 Corinthians 5 both assume that the church knows who is 'in' and who is 'out.' Church discipline is impossible without membership; meaningful accountability is impossible without covenant. The new members class is where the church explains what it believes, what it expects, and what it promises in return — creating the foundation for genuine community."
  },
  {
    title: "New Members Need More Than a Tour",
    content: "Many churches reduce membership to a Sunday class about the building, the staff, and the programs. A robust new members process does much more: it gives new members the theological convictions of the church, the means of grace they can expect, the community structures available, and an honest picture of what Christian membership costs. Members who understand what they've joined are far more likely to stay, serve, and grow."
  },
  {
    title: "Belonging Precedes Behaving Which Precedes Believing (in Formation)",
    content: "Research on how people actually form faith — from Kenda Creasy Dean to Robert Webber to Alan Hirsch — confirms a counterintuitive sequence: people belong first, then begin to behave like the community they've joined, then internalize the beliefs. This means the new members class should prioritize welcoming people into genuine community, not just informing them of doctrinal requirements before they're allowed in."
  },
  {
    title: "The New Members Class Is the Most Important Equipping Opportunity",
    content: "For many new members, the membership class is the first sustained theological instruction they receive. It shapes their expectations for the whole arc of their church experience. A class that is theologically rich, relationally warm, and practically clear will produce members who are engaged, committed, and fruitful. A perfunctory class produces passive consumers."
  }
];

const sessions = [
  {
    number: "01",
    title: "The Gospel: What We Believe",
    color: "#8B5CF6",
    duration: "90 minutes",
    goal: "Ensure every prospective member understands and can articulate the core of the Christian gospel",
    content: [
      "God: Creator, holy, personal — Revelation 4:11",
      "Man: Image-bearer, fallen, in need — Romans 3:23",
      "Christ: Fully God and fully man; his life, death, resurrection — 1 Corinthians 15:1-4",
      "Response: Repentance and faith — Acts 20:21",
      "Justification by faith alone — Romans 3:21-26",
      "Assurance of salvation — Romans 8:1, 1 John 5:13",
      "Personal testimony time: share your story in 2 minutes"
    ],
    discussion: "Ask each person to share what they believe the gospel is. Correct gently and lovingly where needed. This is the most important session.",
    materials: "Gospel tract or summary sheet (Two Ways to Live, The Bridge, or similar)"
  },
  {
    number: "02",
    title: "This Church: Who We Are",
    color: "#10B981",
    duration: "90 minutes",
    goal: "Give new members the theological identity, history, and vision of this specific church",
    content: [
      "Church's founding story and vision",
      "Denominational affiliation and what it means",
      "Statement of faith: core doctrines and non-negotiables",
      "What makes us distinct from other healthy churches",
      "Our mission and ministry philosophy",
      "What we will not compromise and why"
    ],
    discussion: "Ask: 'What questions do you have about our statement of faith or our convictions?' Handle disagreements honestly.",
    materials: "Church statement of faith, denominational resources, founding pastor's vision statement"
  },
  {
    number: "03",
    title: "Christian Life: How We Live",
    color: "#F59E0B",
    duration: "90 minutes",
    goal: "Equip new members with the basic means of grace and spiritual disciplines expected of every member",
    content: [
      "The Word: daily Scripture reading — how to read your Bible",
      "Prayer: patterns and practices for a sustainable prayer life",
      "The Lord's Supper: what it is, who should participate, how often",
      "Baptism: what we believe and what we practice",
      "Sabbath and Christian rest",
      "Fellowship and community groups — small group expectation",
      "Giving: the theology and practice of Christian generosity"
    ],
    discussion: "Ask: 'Which of these practices is most underdeveloped in your life right now?' Normalize honesty; this is not a performance review.",
    materials: "Spiritual disciplines guide, reading plan, small group signup"
  },
  {
    number: "04",
    title: "Christian Community: How We Belong",
    color: "#3B82F6",
    duration: "90 minutes",
    goal: "Help new members understand and embrace genuine covenant community, including accountability and mutual care",
    content: [
      "The 'one another' commands of the NT: 59 of them",
      "What biblical community looks like vs. social club",
      "Church discipline: what it is, why it's loving, how it works (Matt 18)",
      "Confession and accountability: James 5:16",
      "Caring for the vulnerable: widows, orphans, poor, sick",
      "Conflict resolution in the body: Romans 12:18, Matthew 18:15",
      "How to leave a church well — if you ever do"
    ],
    discussion: "Ask: 'Have you ever experienced real accountability in a church context? What did that feel like?'",
    materials: "Church discipline policy (brief), small group covenant, connection card"
  },
  {
    number: "05",
    title: "Christian Mission: How We Serve",
    color: "#EF4444",
    duration: "90 minutes",
    goal: "Connect new members to the church's mission and identify their gifts for service",
    content: [
      "The Great Commission: Matthew 28:18-20",
      "Every member a minister: 1 Corinthians 12:7",
      "Spiritual gifts: what they are, how to discover yours",
      "Local service opportunities in the church",
      "Community and mercy ministry opportunities",
      "Giving: financial partnership with the church's mission",
      "Global missions: how this church participates"
    ],
    discussion: "Provide a spiritual gifts assessment. Ask each person to identify one area where they want to serve in the first six months.",
    materials: "Spiritual gifts assessment (SHAPE tool or similar), service directory, missions prayer guide"
  }
];

const covenantElements = [
  {
    element: "Doctrinal Affirmation",
    desc: "The member affirms the church's statement of faith — the essential doctrines held by the congregation. This is not a full systematic theology quiz but a genuine agreement with the core convictions."
  },
  {
    element: "Gospel Commitment",
    desc: "The member affirms their personal trust in Jesus Christ for salvation and their intention to live as a disciple — not as a performance condition but as a statement of intent and direction."
  },
  {
    element: "Community Covenant",
    desc: "The member commits to: regular attendance, participation in a small group, financial giving (tithe as a goal, sacrificial giving as a direction), care for other members, and submission to the church's leadership."
  },
  {
    element: "Accountability Acceptance",
    desc: "The member accepts that the church has the right and responsibility to care for their soul — including confronting sin, as outlined in Matthew 18 — and commits to responding in good faith rather than simply leaving."
  },
  {
    element: "Mutual Care Commitment",
    desc: "The member commits to actively care for others in the congregation — not just receive pastoral care but give it: showing up, praying, serving, encouraging, speaking hard truth in love."
  },
  {
    element: "Sending Well",
    desc: "The member commits that if they ever leave the church, they will leave well: communicating directly with pastoral leadership, not leaving in conflict without reconciliation, and joining another healthy church."
  }
];

const resources = [
  {
    title: "What Is a Healthy Church?",
    author: "Mark Dever",
    type: "Short Book",
    desc: "9Marks founder Mark Dever's concise case for what the church is and what healthy membership looks like. Perfect pre-reading for a new members class. 80 pages."
  },
  {
    title: "Church Membership: How the World Knows Who Represents Jesus",
    author: "Jonathan Leeman",
    type: "Short Book",
    desc: "The best short book on the theology and practice of church membership available. Leeman argues that membership is not optional and explains the covenantal logic with clarity. 9Marks / Crossway."
  },
  {
    title: "9Marks New Member Course (Free)",
    author: "9Marks Ministry",
    type: "Curriculum",
    desc: "Free downloadable new members class curriculum from 9Marks. Covers the gospel, the church, community, and mission. Adaptable for most evangelical church contexts.",
    url: "https://www.9marks.org"
  },
  {
    title: "The Gospel (Two Ways to Live)",
    author: "Phillip Jensen / Matthias Media",
    type: "Gospel Tool",
    desc: "The clearest and most theologically accurate gospel summary tool available. Free online and in print. Perfect for the first session of a new members class to establish a shared gospel vocabulary.",
    url: "https://twowaystolive.com"
  },
  {
    title: "Spiritual Gifts Assessment (SHAPE)",
    author: "Saddleback / Rick Warren",
    type: "Assessment Tool",
    desc: "The SHAPE assessment (Spiritual Gifts, Heart, Abilities, Personality, Experience) is a free, broadly usable tool for helping new members identify where they can serve. Use it in the mission session.",
    url: "https://www.churchgrowth.org"
  },
  {
    title: "The Deliberate Church",
    author: "Mark Dever & Paul Alexander",
    type: "Pastor Resource",
    desc: "For church leaders building or reforming a membership class, this 9Marks book provides the full ecclesiological framework for healthy church practice. Particularly strong on membership, discipline, and community."
  }
];

export default function NewMembersClassPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_new-members-class_tab", "why");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedSession, setSelectedSession] = useState(sessions[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const [nmcJEntries, setNmcJEntries] = useState<{ id: string; date: string; commitment: string; question: string; step: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_nmc_entries") ?? "[]"); } catch { return []; }
  });
  const [nmcJForm, setNmcJForm] = useState({ commitment: "", question: "", step: "" });
  const [nmcJSaved, setNmcJSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_nmc_entries", JSON.stringify(nmcJEntries)); } catch {} }, [nmcJEntries]);
  const saveNmcJEntry = () => {
    if (!nmcJForm.commitment.trim()) return;
    setNmcJEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...nmcJForm }, ...prev]);
    setNmcJForm({ commitment: "", question: "", step: "" });
    setNmcJSaved(true);
    setTimeout(() => setNmcJSaved(false), 2000);
  };
  const deleteNmcJEntry = (id: string) => setNmcJEntries(prev => prev.filter(e => e.id !== id));

  const tabs: { id: Tab; label: string }[] = [
    { id: "why", label: "Why Membership?" },
    { id: "sessions", label: "5-Session Outline" },
    { id: "covenant", label: "The Covenant" },
    { id: "resources", label: "Resources" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            CHURCH MEMBERSHIP
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            New Members Class
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            Church membership is a covenant, not a club card. A robust new members class is the most important equipping opportunity a church offers — shaping every expectation that follows.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", color: MUTED }}>
            "Now you are the body of Christ, and each one of you is a part of it." — 1 Corinthians 12:27
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{ background: activeTab === t.id ? GREEN : CARD, color: activeTab === t.id ? "#000" : TEXT, border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`, borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "why" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Before the curriculum, the theology. Why does formal church membership matter — and why does the onboarding process deserve serious investment?
            </p>
            {whyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`pt-${i}`)}
                  style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 15 }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>{pt.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "sessions" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              {sessions.map(s => (
                <div
                  key={s.number}
                  onClick={() => setSelectedSession(s)}
                  style={{ background: selectedSession.number === s.number ? s.color + "22" : CARD, border: `2px solid ${selectedSession.number === s.number ? s.color : BORDER}`, borderRadius: 10, padding: 16, cursor: "pointer", marginBottom: 10, display: "flex", gap: 14, alignItems: "center" }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#000", flexShrink: 0 }}>
                    {s.number}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{s.duration}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, position: "sticky", top: 20 }}>
              <div style={{ height: 4, background: selectedSession.color, borderRadius: 2, marginBottom: 16 }} />
              <div style={{ fontSize: 11, color: MUTED, marginBottom: 4 }}>SESSION {selectedSession.number} · {selectedSession.duration}</div>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800 }}>{selectedSession.title}</h3>
              <div style={{ background: selectedSession.color + "22", border: `1px solid ${selectedSession.color}44`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                <div style={{ fontSize: 11, color: selectedSession.color, fontWeight: 700, marginBottom: 4 }}>SESSION GOAL</div>
                <p style={{ fontSize: 12, margin: 0, lineHeight: 1.5, color: TEXT }}>{selectedSession.goal}</p>
              </div>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>CONTENT OUTLINE</div>
              {selectedSession.content.map((c, i) => (
                <div key={i} style={{ fontSize: 12, color: MUTED, marginBottom: 5, display: "flex", gap: 6 }}>
                  <span style={{ color: GREEN }}>→</span>{c}
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginTop: 12 }}>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>DISCUSSION PROMPT</div>
                <p style={{ fontSize: 12, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>{selectedSession.discussion}</p>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>MATERIALS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedSession.materials}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "covenant" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              A church membership covenant is not a legal document — it is a mutual pledge between the member and the congregation. These {covenantElements.length} elements form the core of a biblically grounded covenant.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {covenantElements.map((el, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, display: "flex", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: GREEN, color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{el.element}</div>
                    <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 17 }}>Sample Covenant Language</h3>
              <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                <p style={{ fontSize: 14, fontStyle: "italic", lineHeight: 1.8, color: MUTED, margin: 0 }}>
                  "Having received Christ Jesus as Lord, and having been baptized in the name of the Father, Son, and Holy Spirit, I now solemnly and joyfully covenant with the people of this church:
                  <br /><br />
                  I will cherish and seek the fellowship of this church. I will attend faithfully, give sacrificially, serve willingly, and speak truthfully. I will submit to the leadership of this church in matters of discipline and care. I will pursue holiness and encourage others to do the same. And if God calls me elsewhere, I will leave well."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: PURPLE, marginBottom: 10 }}>{r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: (r as { url?: string }).url ? 14 : 0 }}>{r.desc}</p>
                {(r as { url?: string }).url && (
                  <a href={(r as { url?: string }).url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}>
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Membership Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the commitments you are making, questions you still have, and your next concrete step toward covenant membership.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Commitment I am making</label>
                  <textarea rows={2} value={nmcJForm.commitment} onChange={e => setNmcJForm(f => ({ ...f, commitment: e.target.value }))} placeholder="What covenant element is most meaningful to you?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Question I still have</label>
                  <textarea rows={2} value={nmcJForm.question} onChange={e => setNmcJForm(f => ({ ...f, question: e.target.value }))} placeholder="What are you still uncertain about?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Next step toward membership</label>
                  <textarea rows={2} value={nmcJForm.step} onChange={e => setNmcJForm(f => ({ ...f, step: e.target.value }))} placeholder="What will you do this week?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={saveNmcJEntry} style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {nmcJSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
            </div>
            {nmcJEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {nmcJEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteNmcJEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                    </div>
                    {e.commitment && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Commitment</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.commitment}</p></div>}
                    {e.question && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Question</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.question}</p></div>}
                    {e.step && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Next Step</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.step}</p></div>}
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "IvSuGyJQ6oM", title: "Church Membership", channel: "Mark Dever / Faithful Conference 2022", description: "Dever makes the biblical and practical case for meaningful church membership — why it matters, what it commits you to, and what the church commits to you." },
                  { videoId: "sIaT8Jl2zpI", title: "What Is Church Membership? (Part 4)", channel: "Mark Dever / 9Marks", description: "Dever explains what meaningful membership looks like in practice — attendance, giving, prayer, service — and why a covenantal view of membership transforms church culture." },
                  { videoId: "3Dv4-n6OYGI", title: "9Marks at Southeastern 2014: Regaining Meaningful Church Membership", channel: "Mark Dever / 9Marks", description: "Dever on how evangelical churches lost the meaning of membership and how to recover it — with practical guidance for pastors leading a new members class." },
                  { videoId: "5nvVVcYD-0w", title: "9 Marks of a Healthy Church", channel: "Mark Dever", description: "Dever's landmark teaching on what distinguishes a healthy church — the nine marks that any prospective new member should look for before joining." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
      </main>
      <Footer />
    </div>
  );
}
