"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practice" | "curriculum" | "resources" | "videos";

const theologyPoints = [
  {
    title: "Youth Ministry Begins with Ecclesiology",
    content: "Youth ministry is not a separate track from the church — it is the church at work among its young members. The instinct to silo teenagers into their own subculture, complete with separate worship music, preaching style, and community, often produces adults who never integrate into the wider body. Healthy youth ministry is porous: teenagers worship with adults, are mentored by adults, and serve alongside adults. The church that does this is forming whole Christians, not performers for a youth show."
  },
  {
    title: "Teenagers Need Theology, Not Just Entertainment",
    content: "Research by sociologist Christian Smith found that most American teenagers hold to 'Moralistic Therapeutic Deism' — a vague belief in a god who wants them to be nice and feel good. The church often reinforces this by providing entertainment and community without robust doctrinal formation. Kenda Creasy Dean (Almost Christian): teenagers who have deeply committed faith have been exposed to deeply committed adults and deeply theological content. They need to know what they believe and why."
  },
  {
    title: "The Priority of Relationships in Formation",
    content: "While doctrine is essential, it travels in relationship. Mark DeVries (Family-Based Youth Ministry) and others have found that the single most formative factor for adolescent faith is a meaningful relationship with at least one adult Christian outside their family who takes their faith seriously. Youth ministry's job is not primarily programming — it is creating contexts for these relationships to form and grow."
  },
  {
    title: "Intergenerational Ministry Is Not a Program — It's a Culture",
    content: "Some churches 'do' intergenerational ministry as a quarterly event. But the research (Kara Powell, Sticky Faith) indicates that sustained, natural integration of teenagers into adult community is what makes faith stick. This means: teenagers who serve on worship teams, greeting teams, and hospitality teams with adults. It means Sunday school classes where a 75-year-old and a 16-year-old can discuss Scripture together. It means adults who show up for students' games, recitals, and graduations."
  },
  {
    title: "The Parent Is the Primary Discipler",
    content: "Deuteronomy 6:4-9 (the Shema) places the responsibility for spiritual formation squarely on parents: 'Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.' The church's role is to support and resource parents, not replace them. Youth ministry that ignores parents will form teenagers who have faith in the youth group but not in the home — and homes are where most of life happens."
  },
  {
    title: "Youth Need Both Belonging and Becoming",
    content: "Kara Powell and Brad Griffin (3 Big Questions) identify three essential needs adolescents are working to answer: Who am I? Where do I belong? What difference do I make? The church can uniquely answer all three: identity in Christ (not performance or popularity), belonging in the body (not contingent on social standing), and mission (meaningful contribution to the kingdom). Youth ministry that addresses these deep needs is forming, not entertaining."
  }
];

const practices = [
  {
    area: "Weekly Gatherings",
    color: "#10B981",
    desc: "The regular youth group meeting should be the least important thing on the calendar — but it should be done excellently when it happens.",
    principles: [
      "Prioritize genuine community over polished programming",
      "Include Scripture teaching that does not condescend to teenagers",
      "Create space for honest questions — doubt is not the enemy of faith",
      "Avoid youth-only worship that creates a music ghetto",
      "Make the regular gathering a launching pad for real-life relationships"
    ],
    caution: "If your gathering cannot function without a youth pastor, it is not discipleship — it is performance. Train students to lead."
  },
  {
    area: "Small Groups",
    color: "#8B5CF6",
    desc: "Genuine discipleship happens in small groups (4-8 people) where transparency, accountability, and Scripture engagement can occur.",
    principles: [
      "Divide by gender for deeper vulnerability",
      "Train and empower student leaders as well as adult leaders",
      "Provide guided curriculum but allow for authentic conversation",
      "Use a transparent group agreement: confidentiality, attendance, commitment",
      "Meet weekly — inconsistency kills group trust"
    ],
    caution: "Don't skip the awkward silence by filling it with talk. The pause is where real sharing begins."
  },
  {
    area: "Missions & Service",
    color: "#EF4444",
    desc: "Adolescents' faith is solidified when it is tested in service. Mission trips, local service, and justice projects are not extras — they are essentials.",
    principles: [
      "Local service first: don't neglect your own city for exotic trips",
      "Debrief intentionally: experience without reflection produces impressions, not formation",
      "Partner with long-term mission organizations rather than parachuting",
      "Involve families in mission planning and debrief",
      "Teach the theology of mission before, during, and after service"
    ],
    caution: "Avoid 'poverty tourism' or service that centers the server's experience rather than the dignity of those served."
  },
  {
    area: "Mentoring Relationships",
    color: "#F59E0B",
    desc: "The most powerful thing a youth ministry can do is connect each teenager with an adult mentor outside their family who invests consistently in their faith.",
    principles: [
      "Train mentors: they don't need to be experts, just consistent and honest",
      "Match by interest or life-stage, not just availability",
      "Provide structure: meeting frequency, topics, accountability",
      "Celebrate and highlight mentor relationships in the congregation",
      "Don't let it be optional — build mentoring into the youth group covenant"
    ],
    caution: "Establish clear safeguarding policies for all mentoring relationships: no isolation, parental awareness, regular check-ins with youth leadership."
  },
  {
    area: "Parent Partnership",
    color: "#3B82F6",
    desc: "The youth pastor's most important relationship outside the teenagers themselves is with their parents. Ignoring parents is the fastest path to youth ministry failure.",
    principles: [
      "Communicate proactively: parents should never be surprised",
      "Resource parents: provide dinner-table discussion questions from Sunday's message",
      "Host parent gatherings: discuss adolescent development, faith formation, difficult topics",
      "Pray for and with parents regularly",
      "Encourage parents to attend events when appropriate"
    ],
    caution: "Don't compete with parents or position yourself as the 'cool adult' against them. Your job is to strengthen the family's faith life, not supplement it."
  },
  {
    area: "Transition to Adult Ministry",
    color: "#6B4FBB",
    desc: "The most important goal of youth ministry is not a growing youth group — it is adults who remain in the church and carry their faith into adult life.",
    principles: [
      "Begin transition preparation at 10th grade — not senior year",
      "Connect seniors with adult small groups before graduation",
      "Create 'bridge' programming: young adults who attend both youth and adult community",
      "Partner with college ministries for students leaving the area",
      "Follow up with college students: texts, care packages, visits"
    ],
    caution: "The Sticky Faith research shows that the first year of college is the highest-risk season for faith departure. Plan accordingly."
  }
];

const curriculum = [
  {
    name: "The Gospel Project (Students)",
    publisher: "LifeWay",
    focus: "Chronological Bible study through the whole Bible narrative in 3 years",
    format: "Leader guide + student books + video",
    age: "Middle and High School",
    theology: "Southern Baptist / Evangelical",
    note: "Best for churches wanting systematic biblical theology from a gospel-centered perspective",
    url: "https://gospel-project.com"
  },
  {
    name: "Rooted Curriculum",
    publisher: "Rooted Ministry",
    focus: "Equipping parents to disciple their teenagers alongside the church",
    format: "Parent-church partnership model; app, content, events",
    age: "Middle and High School",
    theology: "Evangelical / Reformed-friendly",
    note: "Best for churches wanting to build a parent-partnership model from the ground up",
    url: "https://rootedministry.com"
  },
  {
    name: "Orange (Curriculum)",
    publisher: "Orange / Think Orange",
    focus: "Family + church partnership; 'Orange' = combining church red and home yellow",
    format: "Full church suite: infants through high school; leader and parent resources",
    age: "All ages",
    theology: "Evangelical / broadly applicable",
    note: "Most popular family-ministry curriculum in the US; excellent family integration tools",
    url: "https://www.thinkorange.com"
  },
  {
    name: "Axis Guides",
    publisher: "Axis",
    focus: "Helping parents understand teen culture: gaming, social media, sexuality, mental health",
    format: "Short PDFs and conversation guides for parents",
    age: "Parents of teenagers",
    theology: "Evangelical / apologetics-minded",
    note: "Invaluable for parents who feel culturally lost; practical, current, theologically grounded",
    url: "https://axis.org"
  },
  {
    name: "Truth & Life (Apologia)",
    publisher: "Apologia Educational Ministries",
    focus: "Classical, presuppositional worldview education for teenagers",
    format: "Textbook + video curriculum",
    age: "High School",
    theology: "Reformed / Classical / Apologetics",
    note: "Best for apologetics-focused youth ministry or homeschool supplement",
    url: "https://www.apologia.com"
  },
  {
    name: "RZIM / Ravi Zacharias Content",
    publisher: "RZIM Legacy Content",
    focus: "Apologetics for teenagers engaging secular university culture",
    format: "Lectures, podcasts, discussion guides",
    age: "High School / College",
    theology: "Evangelical Apologetics",
    note: "The apologetics materials remain valuable despite later controversies; evaluate content on its own merits"
  }
];

const resources = [
  {
    title: "Almost Christian",
    author: "Kenda Creasy Dean",
    type: "Research / Theology",
    desc: "The most important book on youth ministry theology in the past 20 years. Dean responds to Christian Smith's 'Moralistic Therapeutic Deism' research with a theological call: if teenagers have a thin faith, it's because we've given them thin Christianity. The antidote is contagiously committed adult faith.",
    url: ""
  },
  {
    title: "Sticky Faith",
    author: "Kara Powell & Chap Clark",
    type: "Research / Practical",
    desc: "Fuller Youth Institute research on what makes faith 'stick' into adulthood. Key findings: intergenerational community, serving others, honest engagement with doubt, and family discipleship are the most predictive factors. Includes practical application for churches.",
    url: "https://fulleryouthinstitute.org/stickyfaith"
  },
  {
    title: "Family-Based Youth Ministry",
    author: "Mark DeVries",
    type: "Model / Practical",
    desc: "The foundational text for a family-integrated approach to youth ministry. DeVries argues that the church's instinct to isolate teenagers from adult community is counterproductive — genuine faith grows in multigenerational soil.",
    url: ""
  },
  {
    title: "3 Big Questions That Change Every Teenager",
    author: "Kara Powell & Brad Griffin",
    type: "Research / Practical",
    desc: "Addresses the three core questions adolescents are asking: Who am I? Where do I belong? What difference do I make? Shows how the church uniquely — and better than any other institution — can answer each. Practical, accessible, and grounded in research.",
    url: ""
  },
  {
    title: "Fuller Youth Institute",
    author: "Fuller Theological Seminary",
    type: "Research Hub",
    desc: "The most comprehensive evangelical research center on youth and family ministry. Free articles, webinars, and resources on adolescent faith development, cultural trends, and ministry practices. An essential bookmark for any youth worker.",
    url: "https://fulleryouthinstitute.org"
  },
  {
    title: "Rooted Ministry",
    author: "Ben Trueblood",
    type: "Practical Platform",
    desc: "Resources, podcast, and curriculum for youth workers who want to build parent-partnership youth ministry. Regular webinars, conference, and a thoughtful theological approach. One of the best ongoing professional development resources for youth pastors.",
    url: "https://rootedministry.com"
  }
];

export default function YouthMinistryGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedCurriculum, setSelectedCurriculum] = useState(curriculum[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Youth Ministry" },
    { id: "practice", label: "Core Practices" },
    { id: "curriculum", label: "Curriculum Guide" },
    { id: "resources", label: "Resources" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 40, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#F59E0B", color: "#000", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            NEXT GENERATION
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Youth Ministry Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            The teenager who leaves for college without a robust, owned faith is the norm — not the exception. Here is what the research says, and what Scripture demands, for youth ministry that actually works.
          </p>
        </div>

        {/* Stat Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 32 }}>
          {[
            { num: "64%", label: "Of youth leave the church after high school" },
            { num: "1", label: "Caring adult outside family = faith retention" },
            { num: "5:1", label: "Intergenerational relationships needed" },
            { num: "Year 1", label: "Highest-risk season for faith departure" }
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px", textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#F59E0B" }}>{s.num}</div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Before strategy, models, or curriculum, a theology of youth ministry must be established. Why do we do this? What are we actually trying to form?
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`pt-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {activeTab === "practice" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${p.color}` }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 17 }}>{p.area}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ marginBottom: 14 }}>
                  {p.principles.map((pr, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <div style={{ color: GREEN, flexShrink: 0, fontWeight: 700, fontSize: 13 }}>✓</div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{pr}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                  <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>⚠ </span>
                  <span style={{ fontSize: 12, color: MUTED }}>{p.caution}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Curriculum */}
        {activeTab === "curriculum" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {curriculum.map(c => (
                  <div
                    key={c.name}
                    onClick={() => setSelectedCurriculum(c)}
                    style={{
                      background: selectedCurriculum.name === c.name ? PURPLE + "22" : CARD,
                      border: `2px solid ${selectedCurriculum.name === c.name ? PURPLE : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{c.publisher} · {c.age}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800 }}>{selectedCurriculum.name}</h3>
              <div style={{ fontSize: 12, color: PURPLE, fontWeight: 700, marginBottom: 14 }}>{selectedCurriculum.publisher}</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>FOCUS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.focus}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>FORMAT</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.format}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>THEOLOGY</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.theology}</p>
              </div>
              <div style={{ background: BG, borderRadius: 8, padding: 10, marginBottom: selectedCurriculum.url ? 12 : 0 }}>
                <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>{selectedCurriculum.note}</p>
              </div>
              {selectedCurriculum.url && (
                <a
                  href={selectedCurriculum.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", marginTop: 12, fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                >
                  Visit Resource →
                </a>
              )}
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 6 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: PURPLE, marginBottom: 10 }}>{r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: r.url ? 14 : 0 }}>{r.desc}</p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                  >
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
