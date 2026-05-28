"use client";

import { useState, useEffect } from "react";

interface Mentor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  country: string;
  expertise: string[];
  ageGroup: string;
  bio: string;
  yearsInFaith: number;
  denomination: string;
  availability: "Open" | "Limited" | "Full";
  format: ("Video" | "Text" | "In-Person" | "Group")[];
  languages: string[];
  testimonial: string;
  sessions: number;
  rating: number;
  verified: boolean;
}

interface MentorshipRequest {
  id: string;
  mentorId: string;
  topic: string;
  message: string;
  format: string;
  frequency: string;
  sentAt: string;
  status: "Pending" | "Accepted" | "Completed";
}

const mentors: Mentor[] = [
  {
    id: "m1",
    name: "Pastor David Owens",
    avatar: "👨‍💼",
    title: "Senior Pastor & Life Coach",
    location: "Atlanta, GA",
    country: "🇺🇸 USA",
    expertise: ["Spiritual Formation", "Marriage", "Leadership", "Calling"],
    ageGroup: "Mentoring 25–45",
    bio: "20 years in ministry, David specializes in helping Christians navigate major life transitions — career changes, marriage challenges, and discovering God's specific calling. He has walked with over 300 mentees across 4 continents.",
    yearsInFaith: 28,
    denomination: "Non-Denominational",
    availability: "Limited",
    format: ["Video", "Text"],
    languages: ["English"],
    testimonial: "David helped me find clarity when I was stuck between two career paths. His questions always led me back to Scripture and prayer — exactly what I needed.",
    sessions: 312,
    rating: 4.9,
    verified: true,
  },
  {
    id: "m2",
    name: "Dr. Amara Mensah",
    avatar: "👩‍🏫",
    title: "Biblical Scholar & Women's Ministry Leader",
    location: "Accra, Ghana",
    country: "🇬🇭 Ghana",
    expertise: ["Women's Discipleship", "Scripture Study", "Identity", "Grief"],
    ageGroup: "Mentoring 18–40",
    bio: "Amara holds a PhD in Biblical Studies and leads women's conferences across West Africa. She is passionate about helping women understand their identity in Christ beyond cultural pressures and expectations.",
    yearsInFaith: 22,
    denomination: "Anglican",
    availability: "Open",
    format: ["Video", "Text", "Group"],
    languages: ["English", "Twi", "French"],
    testimonial: "She gave me the framework and the courage to read the Bible for myself. Her mentorship changed how I understand who God says I am.",
    sessions: 248,
    rating: 5.0,
    verified: true,
  },
  {
    id: "m3",
    name: "Miguel Santos",
    avatar: "👨",
    title: "Youth Pastor & Apologist",
    location: "São Paulo, Brazil",
    country: "🇧🇷 Brazil",
    expertise: ["Apologetics", "Doubt", "Youth Ministry", "Evangelism"],
    ageGroup: "Mentoring 16–30",
    bio: "Miguel leads one of Brazil's fastest-growing youth networks. He specializes in helping young Christians build a confident, intellectually robust faith that can withstand university-level skepticism and peer pressure.",
    yearsInFaith: 15,
    denomination: "Baptist",
    availability: "Open",
    format: ["Video", "Text"],
    languages: ["Portuguese", "Spanish", "English"],
    testimonial: "I was about to walk away from faith. Miguel didn't give me easy answers — he taught me to ask better questions. Now I'm more confident in what I believe than ever.",
    sessions: 187,
    rating: 4.8,
    verified: true,
  },
  {
    id: "m4",
    name: "Rev. Grace Kim",
    avatar: "👩",
    title: "Counselor & Prayer Ministry Leader",
    location: "Seoul, South Korea",
    country: "🇰🇷 South Korea",
    expertise: ["Inner Healing", "Prayer", "Anxiety", "Family Reconciliation"],
    ageGroup: "Mentoring 20–50",
    bio: "A licensed Christian counselor with 18 years of experience in prayer ministry. Grace integrates clinical insight with deep spiritual discernment to help people find freedom from anxiety, generational patterns, and relational wounds.",
    yearsInFaith: 30,
    denomination: "Presbyterian",
    availability: "Limited",
    format: ["Video", "Text"],
    languages: ["Korean", "English"],
    testimonial: "Grace prays with a precision and tenderness I've never experienced. She helped me identify and release something I'd carried for decades. Completely transformed.",
    sessions: 401,
    rating: 4.9,
    verified: true,
  },
  {
    id: "m5",
    name: "James Okafor",
    avatar: "👨",
    title: "Business Leader & Marketplace Missionary",
    location: "Lagos, Nigeria",
    country: "🇳🇬 Nigeria",
    expertise: ["Faith & Work", "Entrepreneurship", "Stewardship", "Integrity"],
    ageGroup: "Mentoring 22–45",
    bio: "James built a successful tech company while leading a workplace ministry that reached 1,500 employees. He mentors Christian entrepreneurs and professionals on integrating faith and business without compromising either.",
    yearsInFaith: 20,
    denomination: "Pentecostal",
    availability: "Open",
    format: ["Video", "Group"],
    languages: ["English", "Igbo"],
    testimonial: "I struggled with guilt about being successful and Christian. James showed me that business can be a calling, a mission field, and a platform for God's kingdom.",
    sessions: 156,
    rating: 4.7,
    verified: true,
  },
  {
    id: "m6",
    name: "Sarah Christensen",
    avatar: "👩",
    title: "Missionary & Cross-Cultural Discipleship Coach",
    location: "Nairobi, Kenya",
    country: "🇰🇪 Kenya",
    expertise: ["Missions", "Discipleship", "Burnout Recovery", "Calling"],
    ageGroup: "Mentoring all ages",
    bio: "Sarah has spent 14 years on the mission field across East Africa and Southeast Asia. She helps believers discern a missions calling, prepare for cross-cultural ministry, and recover from burnout in full-time ministry.",
    yearsInFaith: 19,
    denomination: "Evangelical",
    availability: "Open",
    format: ["Video", "Text", "In-Person"],
    languages: ["English", "Swahili"],
    testimonial: "She helped me move from 'I think I'm called to missions' to 'I know exactly what God is asking of me and how to take the next step.' She is the real deal.",
    sessions: 203,
    rating: 4.9,
    verified: true,
  },
  {
    id: "m7",
    name: "Dr. Emmanuel Adeyemi",
    avatar: "👨",
    title: "Marriage Counselor & Theologian",
    location: "London, UK",
    country: "🇬🇧 UK",
    expertise: ["Marriage", "Pre-marital Preparation", "Conflict Resolution", "Theology"],
    ageGroup: "Mentoring 22–55",
    bio: "Emmanuel has counseled over 500 couples and teaches theology at a London seminary. He brings both theological depth and practical wisdom to marriage preparation, enrichment, and crisis support.",
    yearsInFaith: 32,
    denomination: "Church of England",
    availability: "Full",
    format: ["Video", "Text"],
    languages: ["English", "Yoruba"],
    testimonial: "He helped us see our marriage as a covenant — not a contract. After three sessions we stopped fighting about symptoms and started addressing the real issues. Our marriage is transformed.",
    sessions: 529,
    rating: 5.0,
    verified: true,
  },
  {
    id: "m8",
    name: "Priya Mathews",
    avatar: "👩",
    title: "Campus Minister & New Believer Coach",
    location: "Bangalore, India",
    country: "🇮🇳 India",
    expertise: ["New Believers", "Foundational Faith", "Family Pressure", "Evangelism"],
    ageGroup: "Mentoring 16–28",
    bio: "Priya leads campus ministry across 12 universities in South India. She specializes in walking new believers through their first years of faith, especially those facing family opposition or coming from non-Christian backgrounds.",
    yearsInFaith: 13,
    denomination: "Pentecostal",
    availability: "Open",
    format: ["Video", "Text", "Group"],
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
    testimonial: "My family was against my faith. Priya helped me love them better while holding firm to Christ. She understood both sides because she'd lived it.",
    sessions: 178,
    rating: 4.8,
    verified: true,
  },
];

const expertiseAreas = [
  "All",
  "Marriage",
  "Calling",
  "Apologetics",
  "Prayer",
  "Missions",
  "Youth Ministry",
  "Inner Healing",
  "New Believers",
  "Faith & Work",
];

const availabilityColor: Record<string, string> = {
  Open: "#00FF88",
  Limited: "#F59E0B",
  Full: "#EF4444",
};

export default function MentorshipPage() {
  const [savedMentors, setSavedMentors] = useState<Set<string>>(new Set());
  const [requests, setRequests] = useState<MentorshipRequest[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestModal, setRequestModal] = useState<Mentor | null>(null);
  const [filterExpertise, setFilterExpertise] = useState("All");
  const [filterAvailability, setFilterAvailability] = useState("All");
  const [activeTab, setActiveTab] = useState<"browse" | "my-mentors">("browse");

  const [form, setForm] = useState({
    topic: "",
    message: "",
    format: "Video",
    frequency: "Weekly",
  });

  useEffect(() => {
    try {
      const s = localStorage.getItem("vine_mentorship_saved");
      if (s) setSavedMentors(new Set(JSON.parse(s)));
      const r = localStorage.getItem("vine_mentorship_requests");
      if (r) setRequests(JSON.parse(r));
    } catch {}
  }, []);

  const handleSave = (id: string) => {
    setSavedMentors((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_mentorship_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleRequest = () => {
    if (!requestModal || !form.topic || !form.message) return;
    const newReq: MentorshipRequest = {
      id: Date.now().toString(),
      mentorId: requestModal.id,
      topic: form.topic,
      message: form.message,
      format: form.format,
      frequency: form.frequency,
      sentAt: new Date().toISOString(),
      status: "Pending",
    };
    const next = [...requests, newReq];
    setRequests(next);
    try { localStorage.setItem("vine_mentorship_requests", JSON.stringify(next)); } catch {}
    setRequestModal(null);
    setForm({ topic: "", message: "", format: "Video", frequency: "Weekly" });
  };

  const filtered = mentors.filter((m) => {
    const expMatch = filterExpertise === "All" || m.expertise.includes(filterExpertise);
    const avMatch = filterAvailability === "All" || m.availability === filterAvailability;
    return expMatch && avMatch;
  });

  const myMentors = mentors.filter((m) => requests.some((r) => r.mentorId === m.id));

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a1a2e 0%, #1a0a3e 60%, #07070F 100%)",
          padding: "60px 24px 48px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 52, marginBottom: 12 }}>🤝</div>
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>Mentorship</h1>
        <p style={{ fontSize: 18, color: "#9898B3", maxWidth: 560, margin: "0 auto 32px" }}>
          Connect with seasoned believers who can walk alongside you in your specific season of faith. Real mentors. Real accountability.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[
            { value: "8", label: "Verified Mentors" },
            { value: "2,500+", label: "Mentorships Started" },
            { value: "12", label: "Languages" },
            { value: "4.9★", label: "Avg. Rating" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, background: "#12121F", padding: 6, borderRadius: 12, border: "1px solid #1E1E32" }}>
          {(["browse", "my-mentors"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                background: activeTab === tab ? "#6B4FBB" : "transparent",
                color: activeTab === tab ? "#fff" : "#9898B3",
              }}
            >
              {tab === "browse" ? "Find a Mentor" : `My Requests${requests.length ? ` (${requests.length})` : ""}`}
            </button>
          ))}
        </div>

        {activeTab === "browse" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Expertise</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {expertiseAreas.map((e) => (
                    <button
                      key={e}
                      onClick={() => setFilterExpertise(e)}
                      style={{
                        padding: "5px 14px",
                        borderRadius: 20,
                        border: `1px solid ${filterExpertise === e ? "#6B4FBB" : "#1E1E32"}`,
                        background: filterExpertise === e ? "#6B4FBB20" : "transparent",
                        color: filterExpertise === e ? "#6B4FBB" : "#9898B3",
                        cursor: "pointer",
                        fontSize: 12,
                      }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 6 }}>Availability</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["All", "Open", "Limited", "Full"].map((a) => (
                    <button
                      key={a}
                      onClick={() => setFilterAvailability(a)}
                      style={{
                        padding: "5px 14px",
                        borderRadius: 20,
                        border: `1px solid ${filterAvailability === a ? "#00FF88" : "#1E1E32"}`,
                        background: filterAvailability === a ? "#00FF8820" : "transparent",
                        color: filterAvailability === a ? "#00FF88" : "#9898B3",
                        cursor: "pointer",
                        fontSize: 12,
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
              {filtered.map((mentor) => {
                const saved = savedMentors.has(mentor.id);
                const hasRequest = requests.some((r) => r.mentorId === mentor.id);
                return (
                  <div
                    key={mentor.id}
                    style={{
                      background: "#12121F",
                      border: `1px solid ${saved ? "#6B4FBB40" : "#1E1E32"}`,
                      borderRadius: 16,
                      padding: 24,
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                    }}
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "#1E1E32",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 28,
                          flexShrink: 0,
                        }}
                      >
                        {mentor.avatar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>
                            {mentor.name}
                          </h3>
                          {mentor.verified && <span style={{ fontSize: 14, color: "#00FF88" }}>✓</span>}
                        </div>
                        <div style={{ fontSize: 12, color: "#9898B3" }}>{mentor.title}</div>
                        <div style={{ fontSize: 12, color: "#9898B3", marginTop: 2 }}>
                          {mentor.country} · {mentor.denomination}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            display: "inline-block",
                            padding: "3px 10px",
                            borderRadius: 20,
                            border: `1px solid ${availabilityColor[mentor.availability]}40`,
                            background: `${availabilityColor[mentor.availability]}15`,
                            color: availabilityColor[mentor.availability],
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {mentor.availability}
                        </div>
                        <div style={{ fontSize: 12, color: "#F59E0B", marginTop: 4 }}>
                          ★ {mentor.rating}
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 14 }}>
                      {mentor.bio.slice(0, 130)}...
                    </p>

                    {/* Expertise tags */}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                      {mentor.expertise.slice(0, 3).map((e) => (
                        <span
                          key={e}
                          style={{
                            padding: "2px 10px",
                            borderRadius: 20,
                            background: "#6B4FBB20",
                            color: "#6B4FBB",
                            fontSize: 11,
                            fontWeight: 500,
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>

                    {/* Format and sessions */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 11, color: "#9898B3" }}>
                        {mentor.format.join(" · ")} · {mentor.sessions} sessions
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleSave(mentor.id); }}
                          style={{
                            padding: "5px 10px",
                            borderRadius: 6,
                            border: "none",
                            background: saved ? "#6B4FBB20" : "#1E1E32",
                            color: saved ? "#6B4FBB" : "#9898B3",
                            cursor: "pointer",
                            fontSize: 14,
                          }}
                        >
                          {saved ? "★" : "☆"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasRequest) setRequestModal(mentor);
                          }}
                          disabled={mentor.availability === "Full" || hasRequest}
                          style={{
                            padding: "5px 14px",
                            borderRadius: 6,
                            border: "none",
                            background:
                              hasRequest
                                ? "#00FF8820"
                                : mentor.availability === "Full"
                                ? "#1E1E32"
                                : "#6B4FBB",
                            color:
                              hasRequest
                                ? "#00FF88"
                                : mentor.availability === "Full"
                                ? "#9898B3"
                                : "#fff",
                            cursor: mentor.availability === "Full" || hasRequest ? "default" : "pointer",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          {hasRequest ? "✓ Requested" : mentor.availability === "Full" ? "Full" : "Request"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {activeTab === "my-mentors" && (
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {requests.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 24px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🤝</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#F2F2F8", marginBottom: 8 }}>No requests yet</h3>
                <p style={{ color: "#9898B3", fontSize: 14 }}>
                  Browse mentors and send your first request to get started.
                </p>
                <button
                  onClick={() => setActiveTab("browse")}
                  style={{
                    marginTop: 20,
                    padding: "10px 24px",
                    borderRadius: 8,
                    background: "#6B4FBB",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Find a Mentor
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {requests.map((req) => {
                  const mentor = mentors.find((m) => m.id === req.mentorId);
                  if (!mentor) return null;
                  return (
                    <div
                      key={req.id}
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: 14,
                        padding: 20,
                      }}
                    >
                      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            background: "#1E1E32",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 22,
                          }}
                        >
                          {mentor.avatar}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, color: "#F2F2F8", fontSize: 15 }}>{mentor.name}</div>
                          <div style={{ fontSize: 12, color: "#9898B3" }}>{mentor.title}</div>
                        </div>
                        <div
                          style={{
                            padding: "4px 12px",
                            borderRadius: 20,
                            background:
                              req.status === "Pending" ? "#F59E0B20" :
                              req.status === "Accepted" ? "#00FF8820" : "#6B4FBB20",
                            color:
                              req.status === "Pending" ? "#F59E0B" :
                              req.status === "Accepted" ? "#00FF88" : "#6B4FBB",
                            fontSize: 12,
                            fontWeight: 600,
                            height: "fit-content",
                          }}
                        >
                          {req.status}
                        </div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 4 }}>
                        Topic: {req.topic}
                      </div>
                      <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 8 }}>
                        {req.message.slice(0, 120)}...
                      </div>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>
                        {req.format} · {req.frequency} · Sent {new Date(req.sentAt).toLocaleDateString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mentor Detail Modal */}
      {selectedMentor && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelectedMentor(null)}
        >
          <div
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 32, maxWidth: 580, width: "100%", maxHeight: "85vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 52, marginBottom: 8 }}>{selectedMentor.avatar}</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>
                {selectedMentor.name}
                {selectedMentor.verified && <span style={{ fontSize: 16, color: "#00FF88", marginLeft: 8 }}>✓ Verified</span>}
              </h2>
              <div style={{ fontSize: 14, color: "#9898B3" }}>{selectedMentor.title}</div>
              <div style={{ fontSize: 13, color: "#9898B3", marginTop: 2 }}>
                {selectedMentor.country} · {selectedMentor.denomination}
              </div>
              <div style={{ fontSize: 14, color: "#F59E0B", marginTop: 6 }}>
                ★ {selectedMentor.rating} · {selectedMentor.sessions} sessions completed
              </div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 20 }}>{selectedMentor.bio}</p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {selectedMentor.expertise.map((e) => (
                <span key={e} style={{ padding: "3px 12px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 12 }}>
                  {e}
                </span>
              ))}
            </div>

            <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 20, borderLeft: "3px solid #00FF88" }}>
              <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 4, fontWeight: 600 }}>Mentee Testimonial</div>
              <div style={{ fontSize: 13, color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.6 }}>
                "{selectedMentor.testimonial}"
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Format", value: selectedMentor.format.join(", ") },
                { label: "Languages", value: selectedMentor.languages.join(", ") },
                { label: "Mentoring", value: selectedMentor.ageGroup },
                { label: "Availability", value: selectedMentor.availability },
              ].map((item) => (
                <div key={item.label} style={{ background: "#07070F", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#F2F2F8", fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => { setSelectedMentor(null); setRequestModal(selectedMentor); }}
                disabled={selectedMentor.availability === "Full" || requests.some((r) => r.mentorId === selectedMentor.id)}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background:
                    requests.some((r) => r.mentorId === selectedMentor.id) ? "#00FF8820" :
                    selectedMentor.availability === "Full" ? "#1E1E32" : "#6B4FBB",
                  color:
                    requests.some((r) => r.mentorId === selectedMentor.id) ? "#00FF88" :
                    selectedMentor.availability === "Full" ? "#9898B3" : "#fff",
                  cursor: selectedMentor.availability === "Full" ? "default" : "pointer",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {requests.some((r) => r.mentorId === selectedMentor.id)
                  ? "✓ Request Sent"
                  : selectedMentor.availability === "Full"
                  ? "Currently Full"
                  : "Request Mentorship"}
              </button>
              <button
                onClick={() => setSelectedMentor(null)}
                style={{ padding: "12px 20px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Modal */}
      {requestModal && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setRequestModal(null)}
        >
          <div
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 32, maxWidth: 520, width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>Request Mentorship</h2>
            <div style={{ fontSize: 14, color: "#9898B3", marginBottom: 24 }}>
              Sending to <strong style={{ color: "#F2F2F8" }}>{requestModal.name}</strong>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Topic / Area you want help with *</label>
              <input
                value={form.topic}
                onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))}
                placeholder="e.g. Navigating a career change with faith"
                style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Your message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Share a bit about where you are and what you're hoping to get out of mentorship..."
                rows={4}
                style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Preferred format</label>
                <select
                  value={form.format}
                  onChange={(e) => setForm((p) => ({ ...p, format: e.target.value }))}
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14 }}
                >
                  {requestModal.format.map((f) => <option key={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Frequency</label>
                <select
                  value={form.frequency}
                  onChange={(e) => setForm((p) => ({ ...p, frequency: e.target.value }))}
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14 }}
                >
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={handleRequest}
                disabled={!form.topic || !form.message}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: !form.topic || !form.message ? "#1E1E32" : "#6B4FBB",
                  color: !form.topic || !form.message ? "#9898B3" : "#fff",
                  cursor: !form.topic || !form.message ? "default" : "pointer",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Send Request
              </button>
              <button
                onClick={() => setRequestModal(null)}
                style={{ padding: "12px 20px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
