"use client";

import { useState, useEffect } from "react";

interface Partner {
  id: string;
  name: string;
  avatar: string;
  location: string;
  timezone: string;
  denomination: string;
  prayerStyle: string[];
  frequency: string;
  ageGroup: string;
  languages: string[];
  focusAreas: string[];
  bio: string;
  yearsInFaith: number;
  availability: string;
  verified: boolean;
  responseRate: number;
}

interface PrayerSession {
  id: string;
  partnerId: string;
  date: string;
  duration: number;
  topic: string;
  verse: string;
  notes: string;
}

const partners: Partner[] = [
  {
    id: "pp1",
    name: "Adaeze O.",
    avatar: "👩",
    location: "Lagos, Nigeria",
    timezone: "WAT (UTC+1)",
    denomination: "Pentecostal",
    prayerStyle: ["Intercession", "Fasting Prayer"],
    frequency: "Daily",
    ageGroup: "25–35",
    languages: ["English", "Igbo"],
    focusAreas: ["Healing", "Family", "Nations", "Revival"],
    bio: "I've been prayer walking my city for 3 years and love interceding for unreached nations. Looking for a partner who takes prayer seriously and wants to see transformation in their community.",
    yearsInFaith: 12,
    availability: "6–7am WAT",
    verified: true,
    responseRate: 98,
  },
  {
    id: "pp2",
    name: "Thomas K.",
    avatar: "👨",
    location: "Berlin, Germany",
    timezone: "CET (UTC+1)",
    denomination: "Lutheran",
    prayerStyle: ["Contemplative", "Scripture-based"],
    frequency: "3x per week",
    ageGroup: "35–45",
    languages: ["German", "English"],
    focusAreas: ["Peace", "Work & Calling", "Marriage", "Mental Health"],
    bio: "I use a liturgical prayer structure and love to meditate on Scripture before praying. I find accountability in prayer partnership deeply transformative.",
    yearsInFaith: 20,
    availability: "Evenings CET",
    verified: true,
    responseRate: 94,
  },
  {
    id: "pp3",
    name: "Maria C.",
    avatar: "👩",
    location: "Manila, Philippines",
    timezone: "PHT (UTC+8)",
    denomination: "Catholic/Charismatic",
    prayerStyle: ["Praise & Worship", "Rosary", "Intercession"],
    frequency: "Daily",
    ageGroup: "20–30",
    languages: ["English", "Filipino"],
    focusAreas: ["Youth", "Family", "Healing", "Evangelism"],
    bio: "I believe in the power of unified prayer across denominations. I love combining praise, Scripture, and intercession in our sessions. Open to praying with anyone who loves Jesus!",
    yearsInFaith: 8,
    availability: "Mornings PHT",
    verified: true,
    responseRate: 91,
  },
  {
    id: "pp4",
    name: "Samuel A.",
    avatar: "👨",
    location: "Atlanta, USA",
    timezone: "EST (UTC-5)",
    denomination: "Baptist",
    prayerStyle: ["Conversational", "Warfare Prayer"],
    frequency: "Weekly",
    ageGroup: "40–55",
    languages: ["English"],
    focusAreas: ["Racial Reconciliation", "Justice", "Leadership", "Missions"],
    bio: "I've been in prayer ministry for 18 years. I believe prayer is the engine of justice and racial healing. Looking for a partner who wants to pray boldly for the church to lead in these areas.",
    yearsInFaith: 25,
    availability: "Saturday mornings EST",
    verified: true,
    responseRate: 87,
  },
  {
    id: "pp5",
    name: "Ji-eun P.",
    avatar: "👩",
    location: "Seoul, South Korea",
    timezone: "KST (UTC+9)",
    denomination: "Presbyterian",
    prayerStyle: ["Early Morning Prayer", "Fasting Prayer"],
    frequency: "Daily",
    ageGroup: "25–35",
    languages: ["Korean", "English"],
    focusAreas: ["North Korea", "Revival", "Scripture Meditation", "Personal Growth"],
    bio: "I do 5am prayer every day — it's the foundation of my faith. I pray specifically for North Korean believers and for the church in Asia. Looking for someone equally committed to daily intercession.",
    yearsInFaith: 14,
    availability: "5–6am KST",
    verified: true,
    responseRate: 99,
  },
  {
    id: "pp6",
    name: "Daniel M.",
    avatar: "👨",
    location: "Nairobi, Kenya",
    timezone: "EAT (UTC+3)",
    denomination: "Anglican",
    prayerStyle: ["Liturgical", "Intercession"],
    frequency: "2x per week",
    ageGroup: "30–40",
    languages: ["English", "Swahili"],
    focusAreas: ["Poverty", "Children", "Education", "East Africa"],
    bio: "I work with street children and use prayer as the backbone of our ministry. I want a partner who will intercede with me for these kids and the families we serve.",
    yearsInFaith: 16,
    availability: "Evenings EAT",
    verified: true,
    responseRate: 90,
  },
  {
    id: "pp7",
    name: "Rachel B.",
    avatar: "👩",
    location: "Toronto, Canada",
    timezone: "EST (UTC-5)",
    denomination: "Non-Denominational",
    prayerStyle: ["Contemplative", "Healing Prayer"],
    frequency: "Weekly",
    ageGroup: "20–30",
    languages: ["English", "French"],
    focusAreas: ["Anxiety & Mental Health", "New Believers", "Creativity", "Gen Z"],
    bio: "I'm passionate about prayer that meets people where they actually are — anxiety, doubt, loneliness, confusion. No pretense, just honest conversation with God.",
    yearsInFaith: 6,
    availability: "Weeknights EST",
    verified: false,
    responseRate: 85,
  },
  {
    id: "pp8",
    name: "Pastor Emmanuel F.",
    avatar: "👨",
    location: "Abidjan, Côte d'Ivoire",
    timezone: "GMT",
    denomination: "Evangelical",
    prayerStyle: ["Warfare Prayer", "Prophetic", "Fasting Prayer"],
    frequency: "Daily",
    ageGroup: "45–60",
    languages: ["French", "English"],
    focusAreas: ["West Africa", "Islam & Christianity", "Revival", "Church Planting"],
    bio: "I've been planting churches in Muslim-majority communities for 20 years. Prayer is our primary weapon and our greatest testimony. Looking for a partner who understands the weight of this work.",
    yearsInFaith: 30,
    availability: "Early mornings GMT",
    verified: true,
    responseRate: 93,
  },
];

const focusAreaOptions = ["All", "Healing", "Family", "Nations", "Youth", "Mental Health", "Missions", "Revival", "Justice", "Marriage"];
const frequencyOptions = ["Any", "Daily", "3x per week", "Weekly", "2x per week"];

export default function PrayerPartnerPage() {
  const [connectedIds, setConnectedIds] = useState<Set<string>>(new Set());
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [sessions, setSessions] = useState<PrayerSession[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [filterFocus, setFilterFocus] = useState("All");
  const [filterFreq, setFilterFreq] = useState("Any");
  const [activeTab, setActiveTab] = useState<"find" | "my-partners" | "sessions">("find");
  const [sessionModal, setSessionModal] = useState<Partner | null>(null);
  const [sessionForm, setSessionForm] = useState({ duration: 20, topic: "", verse: "", notes: "" });

  useEffect(() => {
    try {
      const c = localStorage.getItem("vine_prayer_partner_connected");
      if (c) setConnectedIds(new Set(JSON.parse(c)));
      const s = localStorage.getItem("vine_prayer_partner_saved");
      if (s) setSavedIds(new Set(JSON.parse(s)));
      const ps = localStorage.getItem("vine_prayer_sessions");
      if (ps) setSessions(JSON.parse(ps));
    } catch {}
  }, []);

  const handleConnect = (id: string) => {
    setConnectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_prayer_partner_connected", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_prayer_partner_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLogSession = () => {
    if (!sessionModal || !sessionForm.topic) return;
    const newSession: PrayerSession = {
      id: Date.now().toString(),
      partnerId: sessionModal.id,
      date: new Date().toISOString(),
      duration: sessionForm.duration,
      topic: sessionForm.topic,
      verse: sessionForm.verse,
      notes: sessionForm.notes,
    };
    const next = [newSession, ...sessions];
    setSessions(next);
    try { localStorage.setItem("vine_prayer_sessions", JSON.stringify(next)); } catch {}
    setSessionModal(null);
    setSessionForm({ duration: 20, topic: "", verse: "", notes: "" });
  };

  const filtered = partners.filter((p) => {
    const focusMatch = filterFocus === "All" || p.focusAreas.includes(filterFocus);
    const freqMatch = filterFreq === "Any" || p.frequency === filterFreq;
    return focusMatch && freqMatch;
  });

  const myPartners = partners.filter((p) => connectedIds.has(p.id));
  const totalPrayerMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a1428 0%, #07070F 100%)",
          padding: "56px 24px 40px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 10 }}>🙏</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Prayer Partners</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Find a prayer partner from anywhere in the world. Pray together, hold each other accountable, and see God move.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: "8", label: "Available Partners" },
            { value: sessions.length.toString(), label: "Your Sessions Logged" },
            { value: `${totalPrayerMinutes}m`, label: "Minutes Prayed" },
            { value: myPartners.length.toString(), label: "Your Partners" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 4, gap: 4, marginBottom: 24, maxWidth: 500 }}>
          {([["find", "Find Partners"], ["my-partners", `My Partners (${myPartners.length})`], ["sessions", `Sessions (${sessions.length})`]] as const).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1, padding: "8px 12px", borderRadius: 7, border: "none",
                background: activeTab === tab ? "#6B4FBB" : "transparent",
                color: activeTab === tab ? "#fff" : "#9898B3",
                cursor: "pointer", fontWeight: 600, fontSize: 12,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FIND TAB */}
        {activeTab === "find" && (
          <>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Focus Area</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {focusAreaOptions.map((f) => (
                    <button key={f} onClick={() => setFilterFocus(f)}
                      style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                        border: `1px solid ${filterFocus === f ? "#6B4FBB" : "#1E1E32"}`,
                        background: filterFocus === f ? "#6B4FBB20" : "transparent",
                        color: filterFocus === f ? "#6B4FBB" : "#9898B3" }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Frequency</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {frequencyOptions.map((f) => (
                    <button key={f} onClick={() => setFilterFreq(f)}
                      style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                        border: `1px solid ${filterFreq === f ? "#00FF88" : "#1E1E32"}`,
                        background: filterFreq === f ? "#00FF8815" : "transparent",
                        color: filterFreq === f ? "#00FF88" : "#9898B3" }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
              {filtered.map((p) => {
                const connected = connectedIds.has(p.id);
                const saved = savedIds.has(p.id);
                return (
                  <div key={p.id}
                    style={{ background: "#12121F", border: `1px solid ${connected ? "#00FF8830" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer" }}
                    onClick={() => setSelectedPartner(p)}>
                    <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                        {p.avatar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8" }}>{p.name}</span>
                          {p.verified && <span style={{ fontSize: 13, color: "#00FF88" }}>✓</span>}
                        </div>
                        <div style={{ fontSize: 12, color: "#9898B3" }}>{p.location} · {p.timezone}</div>
                        <div style={{ fontSize: 12, color: "#9898B3" }}>{p.denomination} · {p.ageGroup}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 12, color: "#00FF88", fontWeight: 600 }}>{p.responseRate}%</div>
                        <div style={{ fontSize: 10, color: "#9898B3" }}>response</div>
                      </div>
                    </div>

                    <p style={{ fontSize: 12, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>
                      {p.bio.slice(0, 110)}...
                    </p>

                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                      {p.focusAreas.slice(0, 3).map((f) => (
                        <span key={f} style={{ padding: "2px 8px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 10 }}>{f}</span>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 11, color: "#9898B3" }}>{p.frequency} · {p.availability}</div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={(e) => { e.stopPropagation(); handleSave(p.id); }}
                          style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 13 }}>
                          {saved ? "★" : "☆"}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); handleConnect(p.id); }}
                          style={{ padding: "5px 14px", borderRadius: 6, border: "none",
                            background: connected ? "#00FF8820" : "#6B4FBB",
                            color: connected ? "#00FF88" : "#fff",
                            cursor: "pointer", fontWeight: 600, fontSize: 12 }}>
                          {connected ? "✓ Connected" : "Connect"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* MY PARTNERS TAB */}
        {activeTab === "my-partners" && (
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {myPartners.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 24px" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🙏</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F2F2F8", marginBottom: 8 }}>No partners yet</h3>
                <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20 }}>Connect with a prayer partner to get started.</p>
                <button onClick={() => setActiveTab("find")}
                  style={{ padding: "10px 24px", borderRadius: 8, background: "#6B4FBB", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
                  Find a Partner
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {myPartners.map((p) => {
                  const partnerSessions = sessions.filter((s) => s.partnerId === p.id);
                  return (
                    <div key={p.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 20 }}>
                      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                          {p.avatar}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, color: "#F2F2F8", fontSize: 15 }}>{p.name}</div>
                          <div style={{ fontSize: 12, color: "#9898B3" }}>{p.location} · {p.frequency}</div>
                        </div>
                        <button
                          onClick={() => setSessionModal(p)}
                          style={{ padding: "6px 16px", borderRadius: 8, background: "#6B4FBB", border: "none", color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13, height: "fit-content" }}>
                          + Log Session
                        </button>
                      </div>
                      <div style={{ fontSize: 13, color: "#9898B3" }}>
                        {partnerSessions.length} sessions logged · {partnerSessions.reduce((s, ps) => s + ps.duration, 0)} minutes prayed together
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* SESSIONS TAB */}
        {activeTab === "sessions" && (
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {sessions.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 24px" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>📓</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F2F2F8", marginBottom: 8 }}>No sessions logged yet</h3>
                <p style={{ color: "#9898B3", fontSize: 14 }}>After praying with a partner, log the session to track your prayer journey.</p>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
                  {[
                    { label: "Total Sessions", value: sessions.length },
                    { label: "Total Minutes", value: totalPrayerMinutes },
                    { label: "Partners Prayed With", value: new Set(sessions.map((s) => s.partnerId)).size },
                  ].map((stat) => (
                    <div key={stat.label} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
                      <div style={{ fontSize: 22, fontWeight: 700, color: "#00FF88" }}>{stat.value}</div>
                      <div style={{ fontSize: 11, color: "#9898B3" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {sessions.map((s) => {
                    const p = partners.find((pp) => pp.id === s.partnerId);
                    return (
                      <div key={s.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 16 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <div style={{ fontWeight: 600, color: "#F2F2F8", fontSize: 14 }}>{s.topic}</div>
                          <div style={{ fontSize: 12, color: "#9898B3" }}>{s.duration} min</div>
                        </div>
                        <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 4 }}>
                          With {p?.name ?? "Partner"} · {new Date(s.date).toLocaleDateString()}
                        </div>
                        {s.verse && <div style={{ fontSize: 12, color: "#6B4FBB" }}>📖 {s.verse}</div>}
                        {s.notes && <div style={{ fontSize: 12, color: "#9898B3", marginTop: 4 }}>{s.notes}</div>}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelectedPartner(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 520, width: "100%", maxHeight: "85vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{selectedPartner.avatar}</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#F2F2F8", marginBottom: 2 }}>
                {selectedPartner.name}
                {selectedPartner.verified && <span style={{ fontSize: 14, color: "#00FF88", marginLeft: 8 }}>✓</span>}
              </h2>
              <div style={{ fontSize: 13, color: "#9898B3" }}>{selectedPartner.location} · {selectedPartner.denomination}</div>
              <div style={{ fontSize: 12, color: "#00FF88", marginTop: 4 }}>{selectedPartner.responseRate}% response rate</div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 16 }}>{selectedPartner.bio}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              {[
                { label: "Prayer Style", value: selectedPartner.prayerStyle.join(", ") },
                { label: "Frequency", value: selectedPartner.frequency },
                { label: "Availability", value: selectedPartner.availability },
                { label: "Languages", value: selectedPartner.languages.join(", ") },
              ].map((item) => (
                <div key={item.label} style={{ background: "#07070F", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 10, color: "#9898B3", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "#F2F2F8", fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {selectedPartner.focusAreas.map((f) => (
                <span key={f} style={{ padding: "3px 10px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 11 }}>{f}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => { handleConnect(selectedPartner.id); setSelectedPartner(null); }}
                style={{
                  flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: connectedIds.has(selectedPartner.id) ? "#00FF8820" : "#6B4FBB",
                  color: connectedIds.has(selectedPartner.id) ? "#00FF88" : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15,
                }}>
                {connectedIds.has(selectedPartner.id) ? "✓ Connected" : "Connect"}
              </button>
              <button onClick={() => setSelectedPartner(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Log Session Modal */}
      {sessionModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSessionModal(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 460, width: "100%" }}
            onClick={(e) => e.stopPropagation()}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>Log Prayer Session</h2>
            <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>With {sessionModal.name}</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, color: "#9898B3", display: "block", marginBottom: 5 }}>Duration (minutes)</label>
                <input type="number" value={sessionForm.duration} min={1}
                  onChange={(e) => setSessionForm((p) => ({ ...p, duration: parseInt(e.target.value) || 0 }))}
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "9px 12px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "#9898B3", display: "block", marginBottom: 5 }}>What did you pray about? *</label>
                <input value={sessionForm.topic}
                  onChange={(e) => setSessionForm((p) => ({ ...p, topic: e.target.value }))}
                  placeholder="e.g. Healing for a family member, guidance on career"
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "9px 12px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "#9898B3", display: "block", marginBottom: 5 }}>Scripture used (optional)</label>
                <input value={sessionForm.verse}
                  onChange={(e) => setSessionForm((p) => ({ ...p, verse: e.target.value }))}
                  placeholder="e.g. Philippians 4:6–7"
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "9px 12px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "#9898B3", display: "block", marginBottom: 5 }}>Notes (optional)</label>
                <textarea value={sessionForm.notes} rows={3}
                  onChange={(e) => setSessionForm((p) => ({ ...p, notes: e.target.value }))}
                  placeholder="Anything God highlighted, answered prayers, etc."
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "9px 12px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={handleLogSession}
                disabled={!sessionForm.topic}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: sessionForm.topic ? "#00FF88" : "#1E1E32",
                  color: sessionForm.topic ? "#07070F" : "#9898B3",
                  cursor: sessionForm.topic ? "pointer" : "default", fontWeight: 700, fontSize: 15 }}>
                Log Session
              </button>
              <button onClick={() => setSessionModal(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
