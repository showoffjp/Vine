"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

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
  Open: "#3a7d56",
  Limited: "#F59E0B",
  Full: "#EF4444",
};

const VOICES_MENT = [
  { id: "stanley-p", name: "Paul Stanley & J. Robert Clinton", era: "1992", context: "Connecting: The Mentoring Relationships You Need to Succeed in Life — the foundational modern framework for Christian mentoring", bio: "Paul Stanley and J. Robert Clinton's Connecting is the most cited academic treatment of mentoring in Christian contexts. Drawing on extensive biographical research into the lives of Christian leaders, Clinton and Stanley developed a typology of mentoring relationships — from intensive mentoring (discipleship) to occasional mentoring (a timely counselor) — and argued that every leader needs a constellation of different mentors at different life stages. Their framework distinguished between upward mentors (those ahead of you), peer mentors (co-journeyers), and downward mentors (those you pour into), creating a model for lifelong mentoring relationships that has influenced Christian leadership development worldwide.", quote: "Leaders who finish well are those who have maintained a learning posture throughout their lives — and that posture is sustained by mentoring relationships. No one finishes well alone.", contribution: "Stanley and Clinton's typology of mentoring relationships has shaped how Christian leadership development programs, seminaries, and churches think about mentoring. Their concept of the mentoring constellation — multiple mentors serving different functions — has replaced the older idea that one mentor can meet all of a mentee's needs, and has made mentoring more accessible by lowering the expectation that any single relationship must do everything." },
  { id: "engstrom-t", name: "Ted Engstrom", era: "1916-2006", context: "The Fine Art of Mentoring (1989) — a pioneering call for intentional Christian mentoring", bio: "Ted Engstrom was president of World Vision and Youth for Christ and one of the earliest voices to call the evangelical church to recover intentional mentoring. His The Fine Art of Mentoring argued that the church had lost the ancient practice of one generation deliberately investing in the next, and that the recovery of mentoring was essential for developing the leaders the church needed. Engstrom drew on his own experience of being mentored and mentoring others to articulate a vision of the mentoring relationship as both strategic and deeply personal — a combination of wisdom-transfer, friendship, and accountability.", quote: "The greatest thing I can do for the next generation is not to give them a program or a curriculum but to give them my life — my failures, my successes, my hard-won wisdom. That is mentoring.", contribution: "Engstrom was among the first evangelical leaders to use the language of mentoring deliberately and to call for its recovery in the church. His work preceded the broader mentoring revival of the 1990s and gave subsequent writers a framework and a vocabulary for the practice." },
  { id: "biehl-b", name: "Bobb Biehl", era: "b. 1944", context: "Mentoring: Confidence in Finding a Mentor and Becoming One (1996) — practical guide to starting mentoring relationships", bio: "Bobb Biehl has focused on making mentoring practically accessible — removing the mystique and the barriers that prevent people from either seeking or offering mentoring relationships. His work insists that mentoring does not require a formal program or a credentialed professional: it requires one person with more experience being willing to share it with one person with less. Biehl's particular contribution is in helping people identify who their natural mentors are (the people they already turn to), how to formalize those relationships, and how to approach someone about becoming a mentor.", quote: "The biggest barrier to mentoring is not lack of qualified mentors — it is the fear of asking. Most people who could mentor you would be honored if you asked. Most people who need a mentor never ask.", contribution: "Biehl's accessible, practical approach to mentoring has helped thousands of churches and organizations implement mentoring programs. His focus on removing barriers to asking — rather than building complex matching systems — has made mentoring relationships more common in contexts where formal programs have failed." },
  { id: "crabb-l", name: "Larry Crabb", era: "b. 1944", context: "Connecting: Healing for Ourselves and Our Relationships (1997) — the relational foundation of Christian community and soul care", bio: "Larry Crabb's Connecting argued that the most powerful source of healing for human brokenness is not therapy or programs but genuine Christian community — people who know each other deeply and who speak truth and grace into each other's lives. Crabb's vision of Christian mentoring and community is more than skill transfer; it is the release of what he calls the 'connecting grace' that flows when one person truly sees another with the eyes of Christ. His work challenged both the over-professionalization of care and the superficiality of much church community, calling for the kind of deep relational investment that looks more like the New Testament than a counseling session.", quote: "We were not designed for programs — we were designed for community. The deepest change in human beings happens not in therapy offices but in rooms where people know each other's names and carry each other's burdens.", contribution: "Connecting helped reframe Christian mentoring and care as fundamentally relational rather than professional. Crabb's vision of the 'connecting community' has influenced how churches think about small groups, pastoral care, and the role of ordinary believers in each other's formation — not just what happens in formal mentoring programs." },
  { id: "coleman-r", name: "Robert Coleman", era: "b. 1928", context: "The Master Plan of Evangelism (1963) — Jesus as the model of discipling/mentoring", bio: "Robert Coleman's The Master Plan of Evangelism is the most read analysis of Jesus's discipleship method, and it has shaped how the evangelical church thinks about mentoring and intentional investment in others. Coleman argued that Jesus's primary strategy for reaching the world was not mass proclamation (though he did preach to crowds) but intensive investment in twelve men who would then reproduce themselves. The eight principles Coleman identified — selection, association, consecration, impartation, demonstration, delegation, supervision, reproduction — constitute a model of Christian mentoring that has influenced millions of pastors, missionaries, and ministry leaders.", quote: "Jesus concentrated himself on a few chosen men. Everything else he did was supplementary to this main objective. He came to train men who would carry his gospel to the ends of the earth.", contribution: "The Master Plan of Evangelism has sold millions of copies and shaped the discipleship and mentoring philosophy of generations of evangelical pastors and missionaries. Its analysis of Jesus's intentional investment in the Twelve has given the church a biblical framework for mentoring that is both theologically grounded and practically imitable." },
];

const MENTORSHIP_VIDEOS = [
  { videoId: "4Eg_di-O8nM", title: "The Art of Mentoring", channel: "The Gospel Coalition", description: "What biblical mentorship looks like — how Paul's relationship with Timothy models intentional, life-on-life discipleship." },
  { videoId: "oNpTha80yyE", title: "Discipleship That Transforms", channel: "Desiring God", description: "John Piper on what it means to walk alongside someone in the long, slow work of spiritual formation and gospel growth." },
  { videoId: "ej_6dVdJSIU", title: "Finding and Being a Mentor", channel: "Crossway", description: "Practical wisdom on how to find a mentor, how to be a mentor, and what a fruitful discipleship relationship looks like in practice." },
  { videoId: "gV9JugO_5Mk", title: "Women Discipling Women", channel: "Ligonier Ministries", description: "Titus 2 in practice — older women teaching younger women, and how this pattern strengthens the whole church." },
];

export default function MentorshipPage() {
  const [savedMentors, setSavedMentors] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_mentorship_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [requests, setRequests] = useState<MentorshipRequest[]>(() => {
    try { const r = localStorage.getItem("vine_mentorship_requests"); return r ? JSON.parse(r) : []; } catch { return []; }
  });
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestModal, setRequestModal] = useState<Mentor | null>(null);
  const [filterExpertise, setFilterExpertise] = usePersistedState("vine_mentorship_filter_expertise", "All");
  const [filterAvailability, setFilterAvailability] = usePersistedState("vine_mentorship_filter_availability", "All");
  const [activeTab, setActiveTab] = usePersistedState<"browse" | "my-mentors" | "voices" | "guide" | "journal" | "videos">("vine_mentorship_tab", "browse");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_mentorship_voice", "stanley-p");
  const voiceItem = VOICES_MENT.find(v => v.id === selectedVoice)!;

  const [form, setForm] = useState<{ topic: string; message: string; format: string; frequency: string }>(() => {
    try { const s = localStorage.getItem("vine_mentorship_form_draft"); return s ? JSON.parse(s) : { topic: "", message: "", format: "Video", frequency: "Weekly" }; } catch { return { topic: "", message: "", format: "Video", frequency: "Weekly" }; }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_mentorship_form_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  const [mentJEntries, setMentJEntries] = useState<{ id: string; date: string; mentor: string; insight: string; applying: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ment_entries") ?? "[]"); } catch { return []; }
  });
  const [mentJForm, setMentJForm] = useState({ mentor: "", insight: "", applying: "" });
  const [mentJSaved, setMentJSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_ment_entries", JSON.stringify(mentJEntries)); } catch {} }, [mentJEntries]);
  const saveMentJEntry = () => {
    if (!mentJForm.mentor.trim()) return;
    setMentJEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...mentJForm }, ...prev]);
    setMentJForm({ mentor: "", insight: "", applying: "" });
    setMentJSaved(true); setTimeout(() => setMentJSaved(false), 2000);
  };
  const deleteMentJEntry = (id: string) => setMentJEntries(prev => prev.filter(e => e.id !== id));

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

  // myMentors removed - unused

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
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
            { value: String(mentors.filter((m) => m.verified).length), label: "Verified Mentors" },
            { value: "2,500+", label: "Mentorships Started" },
            { value: String(new Set(mentors.flatMap((m) => m.languages)).size), label: "Languages" },
            { value: `${(mentors.reduce((s, m) => s + m.rating, 0) / mentors.length).toFixed(1)}★`, label: "Avg. Rating" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#3a7d56" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, background: "#12121F", padding: 6, borderRadius: 12, border: "1px solid #1E1E32" }}>
          {(["browse", "my-mentors", "guide", "voices", "journal", "videos"] as const).map((tab) => (
            <button type="button"
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
              {tab === "browse" ? "Find a Mentor" : tab === "my-mentors" ? `My Requests${requests.length ? ` (${requests.length})` : ""}` : tab === "guide" ? "📖 Guide" : tab === "voices" ? "🎓 Voices" : tab === "journal" ? "📓 My Journal" : "🎬 Videos"}
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
                    <button type="button"
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
                    <button type="button"
                      key={a}
                      onClick={() => setFilterAvailability(a)}
                      style={{
                        padding: "5px 14px",
                        borderRadius: 20,
                        border: `1px solid ${filterAvailability === a ? "#3a7d56" : "#1E1E32"}`,
                        background: filterAvailability === a ? "#3a7d5620" : "transparent",
                        color: filterAvailability === a ? "#3a7d56" : "#9898B3",
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
                          {mentor.verified && <span style={{ fontSize: 14, color: "#3a7d56" }}>✓</span>}
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
                        <button type="button"
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
                        <button type="button"
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
                                ? "#3a7d5620"
                                : mentor.availability === "Full"
                                ? "#1E1E32"
                                : "#6B4FBB",
                            color:
                              hasRequest
                                ? "#3a7d56"
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
                <button type="button"
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
                              req.status === "Accepted" ? "#3a7d5620" : "#6B4FBB20",
                            color:
                              req.status === "Pending" ? "#F59E0B" :
                              req.status === "Accepted" ? "#3a7d56" : "#6B4FBB",
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
        {activeTab === "guide" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>How to Be Mentored Well</h2>
            <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Most mentoring fails not because of bad mentors but because mentees don&apos;t know how to use the relationship well.
            </p>
            {[
              { title: "Be Specific About What You Need", icon: "🎯", desc: "The most common mentoring mistake is vagueness. Don't say 'I want to grow.' Say 'I'm stuck in a career decision between X and Y and need someone who has navigated that.' Specific needs attract specific help. Mentors can help you with what they can see — tell them what you're carrying." },
              { title: "Prepare Before Every Meeting", icon: "📝", desc: "Come with questions. Come with updates on what happened since the last meeting. Come having thought through the issue you're bringing. Nothing communicates disrespect for a mentor's time more than showing up empty-handed. Nothing accelerates mentoring faster than a prepared mentee." },
              { title: "Apply What You Learn", icon: "⚡", desc: "If you never do anything with what your mentor tells you, you'll exhaust their goodwill and learn nothing. The meeting is not the product — the changed behavior is. Report back on what you tried, what worked, and what didn't. This turns advice into accountability." },
              { title: "Honor the Relationship", icon: "🤝", desc: "Mentoring is a gift. Write the thank-you note. Show up on time. Don't cancel repeatedly. Keep what's shared confidential. Your mentor is investing something irreplaceable — their time and experience. Honor that investment by taking it seriously." },
              { title: "Broaden Your Constellation", icon: "⭐", desc: "Don't expect one mentor to meet every need. Stanley and Clinton's research shows that flourishing leaders have a constellation of mentors — a spiritual director, a career guide, a peer, a counselor. Let different people speak into different areas of your life." },
              { title: "Eventually, Become a Mentor", icon: "🌱", desc: "The best mentees become mentors. What you have received, you pass on. Look for the person five years behind you who needs what you've learned — and give it away freely. This is how the chain of discipleship that Jesus started continues in your generation." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#3a7d56", margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_MENT.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : "#12121F", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#3a7d56" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #3a7d56", marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Mentorship Journal</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20 }}>Record conversations with mentors and what you're carrying forward.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input value={mentJForm.mentor} onChange={e => setMentJForm(f => ({ ...f, mentor: e.target.value }))}
                  placeholder="Who is your mentor or model?" aria-label="Mentor"
                  style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14 }} />
                <textarea value={mentJForm.insight} onChange={e => setMentJForm(f => ({ ...f, insight: e.target.value }))}
                  placeholder="What insight or challenge did you receive?" aria-label="Insight"
                  style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={mentJForm.applying} onChange={e => setMentJForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="How are you applying this? (optional)" aria-label="Applying"
                  style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #1E1E32", background: "#07070F", color: "#F2F2F8", fontSize: 14 }} />
                <button type="button" onClick={saveMentJEntry}
                  style={{ padding: "10px 20px", background: "#6B4FBB", border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {mentJSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {mentJEntries.length === 0 && <p style={{ color: "#9898B3", fontSize: 14 }}>No entries yet. Record your first mentorship reflection above.</p>}
              {mentJEntries.map(e => (
                <div key={e.id} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: "#9898B3", fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteMentJEntry(e.id)} style={{ background: "none", border: "none", color: "#9898B3", cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{e.mentor}</p>
                  {e.insight && <p style={{ color: "#F2F2F8", fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>{e.insight}</p>}
                  {e.applying && <p style={{ color: "#3a7d56", fontSize: 13, fontStyle: "italic", margin: 0 }}>→ {e.applying}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {MENTORSHIP_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
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
                {selectedMentor.verified && <span style={{ fontSize: 16, color: "#3a7d56", marginLeft: 8 }}>✓ Verified</span>}
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

            <div style={{ background: "#07070F", borderRadius: 10, padding: 16, marginBottom: 20, borderLeft: "3px solid #3a7d56" }}>
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
              <button type="button"
                onClick={() => { setSelectedMentor(null); setRequestModal(selectedMentor); }}
                disabled={selectedMentor.availability === "Full" || requests.some((r) => r.mentorId === selectedMentor.id)}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background:
                    requests.some((r) => r.mentorId === selectedMentor.id) ? "#3a7d5620" :
                    selectedMentor.availability === "Full" ? "#1E1E32" : "#6B4FBB",
                  color:
                    requests.some((r) => r.mentorId === selectedMentor.id) ? "#3a7d56" :
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
              <button type="button"
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
                aria-label="Topic or question" placeholder="e.g. Navigating a career change with faith"
                style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Your message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                aria-label="Share a bit about where you are and what you're hoping to get out of mentorship..." placeholder="Share a bit about where you are and what you're hoping to get out of mentorship..."
                rows={4}
                style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Preferred format</label>
                <select aria-label="Preferred format"
                  value={form.format}
                  onChange={(e) => setForm((p) => ({ ...p, format: e.target.value }))}
                  style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 14px", color: "#F2F2F8", fontSize: 14 }}
                >
                  {requestModal.format.map((f) => <option key={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, color: "#9898B3", display: "block", marginBottom: 6 }}>Frequency</label>
                <select aria-label="Frequency"
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
              <button type="button"
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
              <button type="button"
                onClick={() => setRequestModal(null)}
                style={{ padding: "12px 20px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
