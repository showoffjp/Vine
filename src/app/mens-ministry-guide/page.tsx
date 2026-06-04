"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practices" | "curriculum" | "resources" | "videos";

const theologyPoints = [
  {
    title: "Men Are Made for Battle and Brotherhood",
    content: "Jonathan and David, Paul and Timothy, Jesus and the Twelve — Scripture is full of deep, covenantal male friendship. Men were not made for isolation but for brotherhood forged in shared mission and mutual loyalty. The friendship of David and Jonathan is called surpassing the love of women (2 Samuel 1:26) — not romantically, but in the depth of covenant commitment. The church must provide genuine male community, not merely programs that men attend. Men flourish when they have brothers who know their real life and still show up."
  },
  {
    title: "The Crisis of Male Discipleship",
    content: "Statistically, men are underrepresented in nearly every metric of church life: attendance (57% of congregations are female), small group participation, baptisms, and spiritual leadership in the home. David Murrow, in Why Men Hate Going to Church, argues that the church has not feminized theologically but culturally — in its aesthetics, communication style, relational expectations, and definition of spiritual maturity. Men who are wired for challenge, competition, and mission often find church irrelevant to their real lives. The solution is not to lower the bar but to raise it."
  },
  {
    title: "Biblical Masculinity vs. Cultural Masculinity",
    content: "The Bible presents neither the passive, disengaged man nor the domineering, self-serving man as the ideal. Ephesians 5 calls husbands to the most demanding form of love: self-giving sacrifice modeled on Christ. The warrior, protector, and provider archetypes are not to be abandoned but redeemed — strength placed under submission to God and in service of others. Meekness in Scripture is not weakness; it is bridled power. The strongest man in the room is the one who uses his strength for others rather than himself."
  },
  {
    title: "Accountability as Covenant",
    content: "James 5:16 commands believers to confess their sins to one another and pray for one another. This is not a suggestion for the emotionally brave — it is the normal practice of covenant community. The accountability group is distinct from the therapeutic group: names must be named, specific sins must be confessed, and specific commitments must be kept. Sin flourishes in secrecy. The man who has no one in his life who knows his real struggles — his pornography habit, his anger, his financial dishonesty, his spiritual dryness — is the most dangerous man in any congregation, because he is unseen and therefore unchecked."
  },
  {
    title: "Work, Vocation, and Identity",
    content: "Genesis 3:17-19 reveals that work is one of the primary arenas in which men feel the weight of the curse. Thorns and thistles, futility and toil — the ground resists. In response, men often derive their entire identity from their vocational success or failure. The gospel redefines a man's worth as received, not earned — rooted in adoption by the Father, not performance for the Father. Vocation is reframed not as the sum of a man's value but as one arena in which he serves his neighbor and glorifies God. The man who can fail at work without collapsing has understood the gospel."
  },
  {
    title: "Fatherhood as Discipleship",
    content: "Deuteronomy 6 places the primary responsibility for spiritual formation squarely on fathers: talk about these things when you sit at home, when you walk along the road, when you lie down, when you rise. The crisis of absent fatherhood — physically or spiritually — is the most significant upstream cause of nearly every social pathology we face. But the church can also raise up spiritual fathers (1 Corinthians 4:15 — Paul as father in the faith). Older men mentoring younger men is not a program idea; it is the apostolic pattern. The man who invests in younger men is fulfilling one of the most sacred callings available to him."
  }
];

const practices = [
  {
    area: "Accountability Groups",
    color: "#DC2626",
    desc: "Same-sex groups of 3–5 men meeting weekly with real questions: pornography, anger, marriage, finances, spiritual discipline. Not a prayer request group.",
    principles: [
      "Ask specific questions, not vague ones — 'have you viewed pornography this week?' not 'how are you doing?'",
      "Keep the group small enough for genuine vulnerability",
      "Meet consistently — trust is built over time, not at retreats",
      "Every man must be both confessor and listener",
      "Hold each other to stated commitments week over week"
    ],
    caution: "An accountability group that never gets to actual sin confession is just a men's small group with a different name. Push past the surface."
  },
  {
    area: "Mentoring",
    color: "#8B5CF6",
    desc: "Older man investing in a younger man. Titus 2:2 pattern. Informal is better than formal program — fishing, coffee, side-by-side work.",
    principles: [
      "Match by life stage and interest, not just availability",
      "Let the relationship breathe — structured but not clinical",
      "The mentor shares his own failures, not just his wisdom",
      "Commit to at least one year — real formation takes time",
      "Celebrate when the younger man surpasses the older"
    ],
    caution: "Formalized mentoring programs often produce filled-in forms, not changed lives. Organic relationship with minimal structure outlasts bureaucratic matching."
  },
  {
    area: "Retreat & Wilderness",
    color: "#10B981",
    desc: "Annual men's retreat or wilderness experience. John Eldredge's Wild at Heart model: silence, challenge, Scripture, brotherhood. Men respond to challenge not comfort.",
    principles: [
      "Remove men from their normal environment — context shapes perception",
      "Include physical challenge: hiking, wilderness survival, hard labor",
      "Build in extended silence and solitude — not just group time",
      "Teach Scripture in a wilderness context: Elijah, David, Jesus in the desert",
      "Debrief with intention — what did God say to you?"
    ],
    caution: "A retreat that is merely a camping trip with a few devotionals will not break patterns. The goal is encounter, not recreation."
  },
  {
    area: "Physical Discipline Together",
    color: "#3B82F6",
    desc: "Training together builds brotherhood. Running club, gym, sports league, hiking group. The body matters; stewardship of physical health is a spiritual discipline.",
    principles: [
      "Men bond through shared physical challenge more naturally than through conversation",
      "The body is not separate from the soul — physical discipline shapes character",
      "Accountability for health and stewardship belongs in discipleship",
      "Early morning training creates a common rhythm and mutual commitment",
      "Use physical time to also pray, memorize Scripture, discuss theology"
    ],
    caution: "Physical training can become an idol or an escape. Ensure it serves brotherhood and holiness rather than replacing interior discipline."
  },
  {
    area: "Scripture & Theology",
    color: "#F59E0B",
    desc: "Men's Bible study. Expository, not topical. Challenge intellectually. Men respond to hard truths better than feel-good content.",
    principles: [
      "Work through whole books of the Bible, not just felt-need topics",
      "Assign reading and preparation — treat men as capable of intellectual rigor",
      "Discuss church history, theology, apologetics — men want to know why",
      "Invite hard questions without deflection",
      "The goal is men who can teach their families, not men who know facts"
    ],
    caution: "A men's Bible study that never confronts the men in the room has defaulted to entertainment. Scripture cuts — let it."
  },
  {
    area: "Service & Mission Together",
    color: "#EF4444",
    desc: "Men serving in community: building, feeding, prison ministry, disaster relief. Men are mobilized by mission not maintenance.",
    principles: [
      "Give men a specific, concrete task with a visible outcome",
      "Prison ministry, homeless outreach, and manual labor attract men who disengage in traditional settings",
      "Frame service as mission, not just charity — you are going as ambassadors of the kingdom",
      "Debrief together: what did you see? what did God do?",
      "Connect local service to global mission — the same impulse serves both"
    ],
    caution: "Men can serve without being transformed if there is no theological integration. Service without discipleship produces moralism."
  }
];

const curriculum = [
  {
    name: "Disciplines of a Godly Man",
    author: "R. Kent Hughes",
    publisher: "Crossway",
    focus: "Classic Reformed guide to male spiritual disciplines: prayer, Scripture, purity, work, family, friendship",
    age: "Adult men",
    theology: "Reformed / Evangelical",
    note: "Highly recommended for accountability groups. Chapter-by-chapter structure makes it ideal for weekly meetings. Honest, practical, and doctrinally serious."
  },
  {
    name: "Wild at Heart",
    author: "John Eldredge",
    publisher: "Thomas Nelson",
    focus: "The masculine soul, adventure, and recovering a man's heart for God and others",
    age: "Adult men — especially men who feel disconnected from church",
    theology: "Evangelical / needs theological supplementing",
    note: "Widely used but theologically uneven. Helpful for reaching men who feel emasculated or bored by church. Read with discernment and supplement with more robust theology."
  },
  {
    name: "The Masculine Mandate",
    author: "Richard Phillips",
    publisher: "Reformation Trust",
    focus: "Biblical theology of man's calling drawn from Genesis: work, keep, lead, provide",
    age: "Adult men",
    theology: "Reformed / PCA",
    note: "More theologically robust than Eldredge. Written by a PCA pastor. Excellent for study groups wanting a biblical foundation for masculinity. Highly recommended."
  },
  {
    name: "Manhood Restored",
    author: "Eric Mason",
    publisher: "B&H Books",
    focus: "Masculinity through the gospel lens from an urban perspective: race, fatherhood, sexuality, vocation",
    age: "Adult men",
    theology: "Gospel-centered / Reformed Baptist",
    note: "Gospel-centered and culturally aware. Addresses issues other masculinity books avoid: race, systemic factors, urban context. Excellent for diverse congregations."
  },
  {
    name: "Man Alive",
    author: "Patrick Morley",
    publisher: "Man in the Mirror",
    focus: "Practical discipleship for men at every life stage; small group curriculum format",
    age: "Adult men — all life stages",
    theology: "Evangelical / Broadly applicable",
    note: "Widely used in church men's ministries across denominations. Accessible and practical. Good for a first men's small group curriculum."
  },
  {
    name: "True Faced",
    author: "Bill Thrall & Bruce McNicol",
    publisher: "NavPress",
    focus: "Grace-based identity vs. performance-based living; breaking cycles of shame and striving",
    age: "Adult men — especially those stuck in shame cycles",
    theology: "Evangelical / Grace-centered",
    note: "Particularly powerful for men who live in chronic shame and performance. Breaks the lie that God's acceptance is contingent on our improvement. Life-changing for many."
  }
];

const resources = [
  {
    title: "Man in the Mirror",
    author: "Patrick Morley / Organization",
    type: "Ministry Organization",
    desc: "Organization providing men's small group curriculum, training, and coaching for churches. One of the most established men's ministry networks in the US. Resources span evangelism, discipleship, and leadership development.",
    url: "https://maninthemirror.org"
  },
  {
    title: "Resolute Bible Club",
    author: "Resolute",
    type: "App / Devotional",
    desc: "Men's devotional app with accountability features. Daily Bible readings, video teaching, and built-in tools for accountability group use. Designed specifically for men's discipleship rhythms.",
    url: "https://resolute.org"
  },
  {
    title: "Every Man Ministries",
    author: "Steve Arterburn",
    type: "Ministry Organization",
    desc: "Sexual integrity focus for men. Resources, conferences, and support groups for men struggling with pornography and sexual addiction. One of the most trusted organizations in this specific arena.",
    url: "https://everymanministries.com"
  },
  {
    title: "Iron Sharpens Iron Conference",
    author: "National Conference",
    type: "Conference",
    desc: "National men's conference tour held in cities across the US. One-day format with multiple speakers, worship, and breakout sessions. Excellent for mobilizing a men's group and creating a shared experience.",
    url: "https://ironsharpensiron.net"
  },
  {
    title: "No More Christian Nice Guy",
    author: "Paul Coughlin",
    type: "Book",
    desc: "Confronting the epidemic of passivity in Christian men. Coughlin argues that the church has praised a false meekness that produces compliant, disengaged men rather than courageous, self-giving ones. Practical, honest, and provocative."
  },
  {
    title: "The Intentional Father",
    author: "Jon Tyson",
    type: "Book",
    desc: "Twelve rites of passage for raising sons into mature men. Tyson describes how he designed a deliberate, multi-year discipleship journey for his son. Practical family discipleship guide that any father can adapt and implement."
  }
];

export default function MensMinistryGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_mens-ministry-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedCurriculum, setSelectedCurriculum] = useState(curriculum[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Brotherhood" },
    { id: "practices", label: "Core Practices" },
    { id: "curriculum", label: "Curriculum Guide" },
    { id: "resources", label: "Resources" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            MEN&apos;S MINISTRY
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Men&apos;s Ministry Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            Men are underrepresented, under-discipled, and under-challenged in the modern church. Here is a theology, a set of practices, and a resource list for forming men who flourish as brothers, fathers, workers, and leaders.
          </p>
        </div>

        {/* Stat Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 32 }}>
          {[
            { num: "57%", label: "Of church attendees are women" },
            { num: "33%", label: "Of men never open their Bible outside church" },
            { num: "1 in 6", label: "Christian men regularly view pornography" },
            { num: "72%", label: "Of fathers who practice faith raise faithful children" }
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: GREEN }}>{s.num}</div>
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
              Before strategy, models, or curriculum, a theology of men&apos;s ministry must be built. What does Scripture actually say about men — their design, their failures, and their calling in the body of Christ?
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
                  <span style={{ color: MUTED, flexShrink: 0, marginLeft: 12 }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
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
        {activeTab === "practices" && (
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
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
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
                    <div style={{ fontSize: 12, color: MUTED }}>{c.author} · {c.publisher}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800 }}>{selectedCurriculum.name}</h3>
              <div style={{ fontSize: 12, color: PURPLE, fontWeight: 700, marginBottom: 14 }}>{selectedCurriculum.author} — {selectedCurriculum.publisher}</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>FOCUS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.focus}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>AUDIENCE</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.age}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>THEOLOGY</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedCurriculum.theology}</p>
              </div>
              <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>{selectedCurriculum.note}</p>
              </div>
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
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "AIKn3DyjOUY", title: "The Strongest Warning I've Ever Given to Men", channel: "Pastor Mark Driscoll", description: "A direct, serious challenge to men about their responsibilities as husbands, fathers, and leaders — what Scripture demands and what is at stake." },
                  { videoId: "LP4Y26hsrtM", title: "How a Real Man Takes Ground", channel: "Pastor Mark Driscoll", description: "Driscoll on what it means for a man to take spiritual ground in his home, his work, and his community — not through domination but through servant leadership." },
                  { videoId: "_sSH3ULpA4Y", title: "David Murrow Interviews Mark Driscoll on Men and Church", channel: "David Murrow", description: "A revealing conversation between the author of Why Men Hate Going to Church and the pastor who built one of the most male-attended churches in America." },
                  { videoId: "g4-Igb1rb1w", title: "Real Men: Vision for Men's Ministry", channel: "Pastor Mark Driscoll", description: "A vision for what genuine men's ministry looks like — not retreats and devotionals but covenant brotherhood, accountability, and mission-driven discipleship." },
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
