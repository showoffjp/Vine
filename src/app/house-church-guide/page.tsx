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

type Tab = "theology" | "howto" | "movements" | "faq" | "journal" | "videos";

// ─── Theology Data ────────────────────────────────────────────────────────────

type AccordionItem = {
  title: string;
  content: string;
};

const theologyItems: AccordionItem[] = [
  {
    title: "The Household Church in the New Testament",
    content:
      "The New Testament documents assume the household as the basic unit of church life. Paul's letters are addressed to churches meeting in specific homes: 'the church in your house' (Philemon 1:2, to Philemon); 'Aquila and Priscilla greet you, along with the church that meets at their house' (1 Cor 16:19); 'Greet the church that meets at their house' (Rom 16:5, Priscilla and Aquila). The household (oikos) was not a temporary arrangement until something better could be built — it was the New Testament's normative ecclesiology for its first 300 years. Constantine's legalization of Christianity in 313 AD and the subsequent basilica-building program changed this dramatically.",
  },
  {
    title: "The New Testament Pattern of Gathering",
    content:
      "Acts 2:42-47 describes the early Jerusalem church: devoted to the apostles' teaching, fellowship (koinonia), breaking of bread, and prayer. They broke bread house to house (kat' oikon). This is a picture of Word-centered, sacrament-observing, prayer-saturated, mutually accountable community in ordinary domestic spaces. There were also large gatherings in the temple courts — but the small household gathering was the organic unit. The ekklesia (assembly) was inherently participatory: 'When you come together, each of you has a hymn, or a word of instruction, a revelation, a tongue, or an interpretation' (1 Cor 14:26).",
  },
  {
    title: "What Makes a House Church a Church?",
    content:
      "A house church is a church, not a Bible study or fellowship group. It holds the marks of the church: (1) the Word of God is preached and taught; (2) the sacraments are rightly administered (Baptism and the Lord's Supper); (3) church discipline is practiced. Location is not a mark of the church — a borrowed school gymnasium, a strip mall, or a living room all qualify. A house church should not be confused with a para-church small group, a Bible study attached to a larger congregation, or an unaccountable gathering of friends with no mutual commitment.",
  },
  {
    title: "House Church vs. Institutional Church",
    content:
      "House churches offer genuine advantages: lower cost, higher participation, greater pastoral intimacy, easier multiplication, natural hospitality evangelism, and reduced hierarchy. But they also face genuine challenges: theological drift without accountability to the wider church, limited teaching gifts in a small pool, lack of children's programming, the difficulty of administering church discipline among close friends, and the tendency toward cliquishness or insularity. A house church that remains connected to a network of churches avoids many of these pitfalls without losing its intimacy.",
  },
  {
    title: "The Global House Church Movement",
    content:
      "The house church movement is arguably the largest unreported revival in history. China's underground church — estimated at 60-100 million believers since the 1950s — is entirely organized in house churches. Iran's church, growing rapidly since the 1979 revolution, is almost entirely house churches. The global South's explosive growth in Ethiopia, India, Indonesia, and elsewhere follows house church patterns. In the West, house churches are growing as an alternative to institutional Christianity, particularly among millennials and post-evangelicals. Neil Cole, Wolfgang Simson, Frank Viola, and Alan Hirsch are key Western house church thinkers.",
  },
  {
    title: "The Kingdom of God and Ordinary Spaces",
    content:
      "The house church movement represents a theological conviction: the Kingdom of God advances through ordinary, everyday, incarnational presence — not primarily through institutional excellence or programmatic professionalism. Jesus ate with tax collectors and sinners in their homes. The early church 'had favor with all the people' (Acts 2:47) because they were genuinely in the neighborhood. A house church that is truly present in its neighborhood — hosting, welcoming, caring, praying — is a sign and foretaste of the Kingdom even before a single 'program' is launched.",
  },
];

const faqItems: AccordionItem[] = [
  {
    title: "Is a House Church a Real Church?",
    content:
      "Yes — if it holds the marks of the church: the Word preached, sacraments rightly administered, and discipline practiced. Location is not a mark of the church. The New Testament church was a house church for 300 years.",
  },
  {
    title: "Do We Need an Ordained Pastor?",
    content:
      "This varies by tradition. Presbyterian and Anglican polity require ordained elders for administration of sacraments. Congregational/Baptist polity allows the congregation to call and recognize leaders. Many house churches operate with non-ordained elders who are recognized by the congregation and accountable to a network. The key questions are: Is there qualified leadership (1 Tim 3/Titus 1)? Is there accountability to the wider church?",
  },
  {
    title: "How Do We Handle the Lord's Supper and Baptism?",
    content:
      "The Lord's Supper: most house churches celebrate Communion as part of the weekly meal — restoring the 'feast' character of the Lord's Supper. Baptism: house churches typically baptize in backyard pools, bathtubs, lakes, or community pools. Both sacraments are fully possible outside a traditional church building.",
  },
  {
    title: "What About Children's Ministry?",
    content:
      "Options range from full inclusion (all ages together) to age-appropriate breakout during the teaching. Many house churches favor full inclusion because it trains children in worship and community from birth. For families with many young children, a rotating childcare arrangement during the teaching portion works well.",
  },
  {
    title: "How Do We Handle Conflict?",
    content:
      "More honestly and directly than in larger churches — which is both the blessing and the challenge. House churches benefit from a defined process: private conversation first (Matt 18), then with a witness, then before the community. Having a clear 'constitution' about how decisions are made and what warrants discipline prevents improvised governance during crises. Connection to a network provides outside mediation when needed.",
  },
  {
    title: "Is This Just for People Burned by the Institutional Church?",
    content:
      "House churches can be a gracious landing place for the wounded. But they are not merely reactionary — they are a positive ecclesiological choice. The question to ask is not 'Am I leaving something?' but 'Am I joining a community that practices genuine covenant life together?' House churches that define themselves primarily by what they reject rather than what they practice tend to be unhealthy.",
  },
];

// ─── How-To Steps ─────────────────────────────────────────────────────────────

type HowToStep = {
  number: string;
  title: string;
  content: string;
};

const howToSteps: HowToStep[] = [
  {
    number: "01",
    title: "Clarify Your Ecclesiology First",
    content:
      "Before starting anything, ask: What is a church? Do we hold to the marks of the church (Word, Sacrament, Discipline)? Are we planting a church or forming a fellowship group? The answer shapes everything: accountability structures, baptism practice, Lord's Supper, discipline, relationship to other churches. Read: Frank Viola's Pagan Christianity (provocative, not the final word but forces good questions); Wolfgang Simson's Houses That Change the World.",
  },
  {
    number: "02",
    title: "Find Your Core Group (5-12 People)",
    content:
      "A house church needs a committed core — people who are in for the long haul and share the ecclesiological vision. This is not a consumer group ('I come if I like it') but a covenant community. Ideal starting size is 5-12 adults. Smaller is less stable; larger becomes logistically complicated in a home. The core group needs: at least one gifted teacher, one or more people gifted in pastoral care, and a hosting home with enough space.",
  },
  {
    number: "03",
    title: "Establish Meeting Structure",
    content:
      "A simple meeting pattern: (1) Meal together — house churches historically ate together; the Lord's Supper emerged from a real meal; (2) Corporate prayer and worship — singing, lament, intercession; (3) The Word — one person teaches or you study a passage together using discussion; (4) Sharing, exhortation, testimony — 1 Cor 14:26 participation; (5) The Lord's Supper — brief, reverent, at the table; (6) Practical matters, prayer for one another. Duration: 2-3 hours. The meal component is not optional — it is ecclesiologically significant.",
  },
  {
    number: "04",
    title: "Develop Mutual Accountability",
    content:
      "House churches live or die by honest relationship. Establish early: How will we handle it if someone is living in unrepentant sin? Who has authority to speak? Is there an elder/pastor structure, or are decisions made by consensus? These are not bureaucratic questions — they are pastoral ones. A house church without accountability structures will either tolerate serious sin or fragment when conflict arises. Connect with a house church network (Soma Family, ACNA house church network, or a local network) for accountability.",
  },
  {
    number: "05",
    title: "Children and Youth",
    content:
      "House churches must think intentionally about children and youth. Options: (1) Full inclusion — children participate in the entire gathering (this is the default in many global house church models); (2) Age-appropriate breakout — children go with an adult for age-appropriate teaching during the teaching portion; (3) Rotation — parents take turns with children while others are in the meeting; (4) Partnering with other house churches — occasional combined youth gatherings across several small churches. Don't default to 'children are a problem to be solved' — help them be participants.",
  },
  {
    number: "06",
    title: "When to Multiply",
    content:
      "A house church that grows to 25-35 is at a tipping point: it can become a conventional small church or multiply. Multiplication is the New Testament pattern — Paul planted and moved on; leaders were trained and sent. Plan for multiplication from the beginning: 'We will multiply when we reach X people or Y years.' Identify potential leaders early and invest in them. Multiplication is a sign of health, not failure.",
  },
  {
    number: "07",
    title: "Staying Accountable to the Wider Church",
    content:
      "An isolated house church is an ecclesiological anomaly. The New Testament churches were in relationship — Paul circulated letters among them, sent emissaries, called councils (Acts 15). Join a house church network, maintain relationships with other churches in your area, practice mutual submission, and be willing to be corrected. Insular house churches that consider themselves accountable to no one outside their group are dangerous.",
  },
];

// ─── Movement Cards ────────────────────────────────────────────────────────────

type Movement = {
  name: string;
  location: string;
  description: string;
  keyFigures: string;
  estimatedSize: string;
};

const movements: Movement[] = [
  {
    name: "Underground Church in China",
    location: "China",
    description:
      "Began after Mao's suppression of Christianity (1950s). Illegal gathering in homes, led by laypeople, trained informally. The government's Three-Self Patriotic Movement represents the official church; underground house churches refused state control. Under Xi Jinping's crackdowns (2018+), house churches face increasing persecution.",
    keyFigures: "Wang Mingdao, Watchman Nee, more recently Wang Yi (imprisoned 2019)",
    estimatedSize: "60–100 million",
  },
  {
    name: "Iranian Underground Church",
    location: "Iran",
    description:
      "Since the 1979 Islamic Revolution, Christianity has been illegal for Muslim-background converts. The church has grown from ~500 known converts to an estimated 3-4 million believers, almost entirely in house churches. Farsi Christian media (SAT-7 PARS, Iran Alive Ministries) feeds the movement.",
    keyFigures: "Naghmeh Panahi, Maryam Rostampour and Marziyeh Amirizadeh",
    estimatedSize: "2–4 million (est.)",
  },
  {
    name: "Indian House Church Networks",
    location: "India",
    description:
      "Massive house church networks operate particularly in Andhra Pradesh, Tamil Nadu, and among Dalit communities. Many were catalyzed by Western missions organizations in the 1990s-2000s using Church Planting Movements (CPM) methodology.",
    keyFigures: "Victor Choudhrie, T.E. Koshy",
    estimatedSize: "Unknown, in the tens of millions",
  },
  {
    name: "The Simple Church Network (USA/UK)",
    location: "USA, UK",
    description:
      "Neil Cole's CMA Resources and the Simple Church movement have trained thousands of house church planters in the US and UK. Focus: organic, relational, multiplication-oriented. Strongly influenced by NT patterns.",
    keyFigures: "Neil Cole (Organic Church, Organic Leadership), Alan Hirsch (The Forgotten Ways)",
    estimatedSize: "10,000+ churches in network",
  },
  {
    name: "The Soma Family of Churches",
    location: "USA",
    description:
      "Soma is a network of missional communities and house churches based on a 'being family on mission' model. Led from Tacoma, WA; planted globally. Not strictly house churches but organically structured around small 'microchurches' that gather in homes.",
    keyFigures: "Jeff Vanderstelt (Saturate, Gospel Fluency)",
    estimatedSize: "300+ churches in network",
  },
  {
    name: "New Monasticism (USA)",
    location: "USA",
    description:
      "The New Monasticism movement (influenced by Dietrich Bonhoeffer's Life Together and Dorothy Day's Catholic Worker movement) plants intentional communities in 'abandoned places of empire' — inner cities, impoverished neighborhoods. House-based worship is central.",
    keyFigures:
      "Shane Claiborne (The Simple Way, Philadelphia), Jonathan Wilson-Hartgrove (Rutba House, Durham NC)",
    estimatedSize: "50+ communities",
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────

const stats: string[] = [
  "The NT church met primarily in homes for 300 years",
  "50-100 million Christians meet in house churches today (est.)",
  "House churches are the fastest-growing movement in China",
  "The average house church has 10-30 members",
];

// ─── Sub-Components ────────────────────────────────────────────────────────────

function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? PURPLE : BORDER}`,
              borderRadius: 10,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
          >
            <button type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  color: isOpen ? GREEN : TEXT,
                  fontWeight: 600,
                  fontSize: 15,
                  lineHeight: 1.4,
                  transition: "color 0.2s",
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  color: MUTED,
                  fontSize: 18,
                  flexShrink: 0,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 20px 18px",
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  borderTop: `1px solid ${BORDER}`,
                  paddingTop: 14,
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function HowToTimeline() {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: 23,
          top: 0,
          bottom: 0,
          width: 2,
          background: BORDER,
          zIndex: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {howToSteps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 20,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Number bubble */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: CARD,
                border: `2px solid ${PURPLE}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: GREEN,
                fontWeight: 700,
                fontSize: 13,
                zIndex: 2,
              }}
            >
              {step.number}
            </div>
            {/* Content */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: "16px 20px",
                flex: 1,
              }}
            >
              <div
                style={{
                  color: TEXT,
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </div>
              <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}>
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovementsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 20,
      }}
    >
      {movements.map((m, i) => (
        <div
          key={i}
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div>
            <div style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
              {m.name}
            </div>
            <div
              style={{
                display: "inline-block",
                background: PURPLE + "33",
                color: PURPLE,
                borderRadius: 6,
                padding: "2px 10px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              {m.location}
            </div>
          </div>
          <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            {m.description}
          </p>
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ color: MUTED, fontSize: 12, fontWeight: 600, minWidth: 90 }}>
                Key figures:
              </span>
              <span style={{ color: TEXT, fontSize: 12, flex: 1 }}>{m.keyFigures}</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ color: MUTED, fontSize: 12, fontWeight: 600, minWidth: 90 }}>
                Est. size:
              </span>
              <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>
                {m.estimatedSize}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Biblical & Theological Foundation" },
  { id: "howto", label: "How to Start a House Church" },
  { id: "movements", label: "Movements Worldwide" },
  { id: "faq", label: "FAQ" },
  { id: "journal", label: "📓 Journal" },
  { id: "videos", label: "Videos" },
];

export default function HouseChurchGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_house-church-guide_tab", "theology");

  const [hcgEntries, setHcgEntries] = useState<{ id: string; date: string; question: string; applying: string; step: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_hcg_entries") ?? "[]"); } catch { return []; }
  });
  const [hcgForm, setHcgForm] = useState({ question: "", applying: "", step: "" });
  const [hcgSaved, setHcgSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_hcg_entries", JSON.stringify(hcgEntries)); } catch {} }, [hcgEntries]);
  const saveHcgEntry = () => {
    if (!hcgForm.question.trim()) return;
    setHcgEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...hcgForm }, ...prev]);
    setHcgForm({ question: "", applying: "", step: "" });
    setHcgSaved(true); setTimeout(() => setHcgSaved(false), 2000);
  };
  const deleteHcgEntry = (id: string) => setHcgEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        paddingTop: "var(--header-height, 80px)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* ── Header ── */}
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <h1
            style={{
              color: TEXT,
              fontSize: "clamp(26px, 5vw, 40px)",
              fontWeight: 800,
              margin: "0 0 14px",
              lineHeight: 1.2,
            }}
          >
            The House Church: A Guide
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            The church met in homes for its first 300 years. House churches are not a novelty or a
            reaction — they are a recovery of the New Testament&apos;s baseline pattern of Christian
            community.
          </p>
          <div
            style={{
              width: 48,
              height: 3,
              background: GREEN,
              margin: "22px auto 0",
              borderRadius: 2,
            }}
          />
        </div>

        {/* ── Stats Banner ── */}
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: GREEN,
                  marginTop: 6,
                  flexShrink: 0,
                }}
              />
              <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.55 }}>{stat}</span>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: 6,
            overflowX: "auto",
            marginBottom: 32,
            paddingBottom: 4,
          }}
        >
          {TABS.map((t) => {
            const isActive = tab === t.id;
            return (
              <button type="button"
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  background: isActive ? PURPLE : CARD,
                  border: `1px solid ${isActive ? PURPLE : BORDER}`,
                  borderRadius: 8,
                  padding: "9px 16px",
                  color: isActive ? "#FFFFFF" : MUTED,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        {tab === "theology" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Biblical and Theological Foundation
            </h2>
            <Accordion items={theologyItems} />
          </div>
        )}

        {tab === "howto" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 24,
                marginTop: 0,
              }}
            >
              How to Start and Run a House Church
            </h2>
            <HowToTimeline />
          </div>
        )}

        {tab === "movements" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 24,
                marginTop: 0,
              }}
            >
              House Church Movements Worldwide
            </h2>
            <MovementsGrid />
          </div>
        )}

        {tab === "faq" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
          </div>
        )}

        {tab === "journal" && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: TEXT }}>My House Church Guide Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record questions you are working through, what you are applying, and your next step in planting or growing a house church. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>QUESTION I AM WORKING THROUGH *</label>
                <textarea value={hcgForm.question} onChange={e => setHcgForm(f => ({ ...f, question: e.target.value }))}
                  placeholder="What is your biggest question about starting or leading a house church?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>WHAT I AM APPLYING</label>
                <textarea value={hcgForm.applying} onChange={e => setHcgForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="What principle from this guide are you putting into practice?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>NEXT STEP I AM TAKING</label>
                <textarea value={hcgForm.step} onChange={e => setHcgForm(f => ({ ...f, step: e.target.value }))}
                  placeholder="What specific action will you take this week?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveHcgEntry}
                style={{ background: hcgSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {hcgSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {hcgEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({hcgEntries.length})</h3>
                {hcgEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteHcgEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.question && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>QUESTION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.question}</span></div>}
                    {entry.applying && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>APPLYING: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.applying}</span></div>}
                    {entry.step && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>NEXT STEP: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.step}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "7_CGP-12AE0", title: "Francis Chan On The House Church Movement", channel: "Francis Chan", description: "Francis Chan shares his heart about the house church movement and why he believes smaller, relational gatherings better reflect the New Testament church." },
                  { videoId: "OqwbFGoRYVo", title: "We Are Church Documentary", channel: "Francis Chan / We Are Church", description: "An inside look at Francis Chan's house church network — what it looks like to do church in homes, focused on community and discipleship." },
                  { videoId: "gV9JugO_5Mk", title: "The Leaders of the Church", channel: "Francis Chan", description: "Francis Chan examines what biblical church leadership looks like — servant-hearted elders shepherding small communities rather than institutional hierarchies." },
                  { videoId: "ej_6dVdJSIU", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller explores how the kingdom of God operates through smallness, hiddenness, and ordinary community — exactly the ethos of the house church." },
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
