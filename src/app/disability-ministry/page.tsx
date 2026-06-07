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

type Tab = "theology" | "joni" | "practical" | "resources" | "journal" | "videos";

type AccordionItem = {
  title: string;
  body: string;
};

type JoniItem = {
  id: string;
  label: string;
  heading: string;
  detail: string;
  body: string;
};

type ResourceCard = {
  title: string;
  author: string;
  description: string;
};

const statsData = [
  "1 in 4 adults in the US lives with a disability",
  "Joni Eareckson Tada has led Joni and Friends since 1979",
  "85% of people with disabilities report feeling unwelcome in church",
  "“Go out to the highways and hedges and compel people to come in” — Luke 14:23",
];

const theologyItems: AccordionItem[] = [
  {
    title: "The Healing Ministry of Jesus",
    body: "Jesus’s healing ministry is not incidental to his mission — it is a sign of the Kingdom. When John the Baptist sent disciples to ask ‘Are you the one who is to come?’ Jesus’s answer was a list of healing miracles: ‘the blind receive their sight, the lame walk, lepers are cleansed, the deaf hear, the dead are raised’ (Matt 11:5). These miracles are not primarily demonstrations of power — they are signs that the age of restoration has begun. Every healing is a preview of the resurrection — the day when creation will be fully restored and bodies will no longer break.",
  },
  {
    title: "What Disability Theology Is",
    body: "Disability theology is the attempt to read Scripture and develop theological categories through the lens of disability experience. Key questions: What does disability reveal about God? About the human person? About the body of Christ? Amos Yong’s Theology and Down Syndrome (2007) and Disability and the Gospel by Michael Beates are foundational texts. Disability theology challenges two common errors: the prosperity gospel’s implicit equation of faithfulness with physical wholeness, and the traditional ‘healing required for full dignity’ assumption.",
  },
  {
    title: "The Image of God in Every Person",
    body: "Every human being — regardless of cognitive or physical ability — is made in the image of God (Genesis 1:26-27). The imago Dei is not contingent on productivity, communication ability, intellectual function, or physical capacity. A person with profound intellectual disability bears God’s image fully. This is not a sentimental claim — it is a revolutionary theological one, with massive implications for how we structure church life, how we value ‘contribution,’ and what we consider ‘intelligence’ in the community of faith.",
  },
  {
    title: "Paul’s Thorn and the Theology of Weakness",
    body: "Paul’s ‘thorn in the flesh’ (2 Corinthians 12:7-10) — whatever it was — becomes the occasion for one of Scripture’s most profound statements about disability and weakness: ‘My grace is sufficient for you, for my power is made perfect in weakness.’ Paul’s response was not to pray harder for healing (though he did pray three times) but to receive the answer ‘My grace is sufficient’ and to boast in weakness. This is a genuinely countercultural theology: weakness is not a spiritual problem to be overcome but a location of God’s power. Disability ministry rooted in this theology is fundamentally different from disability ministry rooted in pity.",
  },
  {
    title: "The Banquet in Luke 14",
    body: "Jesus’s parable of the great banquet (Luke 14:15-24) is profoundly relevant to disability ministry. When invited guests make excuses, the host tells his servant: ‘Go out quickly to the streets and lanes of the city, and bring in the poor and crippled and blind and lame.’ When there is still room, he sends them further: ‘Go out to the highways and hedges and compel people to come in, that my house may be filled.’ The church that is not intentionally welcoming to people with disabilities has not yet gone out to the highways and hedges. The Kingdom banquet is not complete without them.",
  },
  {
    title: "The Eschatological Body",
    body: "Christian hope includes the resurrection of the body. But what kind of body? The Risen Jesus still bore his wounds (John 20:27). Whether resurrection bodies are ‘healed’ of disability or whether the category of ‘disability’ is itself transfigured is a genuinely open theological question. Joni Eareckson Tada, quadriplegic since 1967, has written beautifully about her hope for a resurrection body — and her equally genuine hope that the glorified body will be ‘more Joni, not less.’ The point: Christian hope for people with disabilities is resurrection hope — not the eradication of personhood but the completion of it.",
  },
];

const joniItems: JoniItem[] = [
  {
    id: "story",
    label: "Joni’s Story",
    heading: "A Living Theology of Suffering",
    detail: "Her story is a living theology of suffering, weakness, and God’s sufficiency — not a triumphalist overcoming narrative but an honest account of ongoing suffering alongside genuine joy.",
    body: "In 1967, at 17, Joni Eareckson dove into the Chesapeake Bay and broke her neck, leaving her a quadriplegic. The years of despair, anger at God, and eventual surrender to Christ are recorded in her autobiography Joni (1976), one of the best-selling Christian books of the 20th century. She became a painter (holding a brush in her mouth), speaker, and radio host, and in 1979 founded Joni and Friends.",
  },
  {
    id: "organization",
    label: "Joni and Friends Organization",
    heading: "Ministry in 60+ Countries",
    detail: "Joni and Friends operates in 60+ countries; Wheels for the World has distributed 260,000+ wheelchairs.",
    body: "Founded 1979. Mission: to accelerate Christian ministry to people affected by disability worldwide. Programs: Family Retreats (disability-adapted vacation camps for families), Wheels for the World (refurbishing and distributing wheelchairs in developing nations), Christian Institute on Disability (training and theological resources), Radio Program (daily broadcast to millions). The organization is deeply Christ-centered and evangelical in theology.",
  },
  {
    id: "books",
    label: "Key Books by Joni",
    heading: "Millions of Copies in 50+ Languages",
    detail: "Her books have sold millions of copies and have been translated into 50+ languages. She received the Templeton Honor Award in 2021.",
    body: "Joni: An Unforgettable Story (1976) — autobiography; A Place of Healing (2010) — her battle with cancer and quadriplegia; Heaven: Your Real Home (1996) — eschatology for those who suffer; When God Weeps (1997, with Steve Estes) — a theology of suffering; The God I Love (2003) — memoir.",
  },
  {
    id: "theology",
    label: "Disability Theology from Joni",
    heading: "Honest Lament and Resurrection Hope",
    detail: "She writes: ‘I would rather be in this wheelchair knowing God than on my feet without him.’",
    body: "Joni’s central theological conviction: ‘God permits what he hates in order to accomplish what he loves.’ She does not believe disability is God’s best or that it is to be celebrated as such — she calls it a ‘light and momentary trouble’ (2 Cor 4:17) even while acknowledging that quadriplegia is neither light nor momentary by human measure. Her theology holds together honest lament and resurrection hope without collapsing into either despair or triumphalism.",
  },
  {
    id: "welcoming",
    label: "Welcoming People with Disabilities",
    heading: "Relational Accessibility Matters Most",
    detail: "Joni and Friends trains churches through the Disability Ministry Institute; the Key Ministry is also an excellent resource.",
    body: "Joni and Friends’ research found that 85% of people with disabilities feel unwelcome in church. Practical barriers: physical accessibility (no ramps, no accessible bathrooms), sensory environments (too loud, too bright for sensory sensitivities), lack of sign language interpretation, no special needs class for children, and — most significantly — the absence of genuine relationship. The most important ‘accessibility’ is relational, not architectural. A wheelchair-accessible building is meaningless if no one with a disability is welcomed into genuine community.",
  },
];

const practicalItems: AccordionItem[] = [
  {
    title: "Start with Relationships, Not Programs",
    body: "The most common mistake in disability ministry is beginning with a program (a special needs Sunday school class, a disability ministry team) before any relationships exist. Start by asking: Who in our congregation or neighborhood has a disability? How are they experiencing our community? Have honest conversations with them before designing anything. Programs designed without the participation of people with disabilities tend to be programs for rather than with — which communicates the wrong message entirely.",
  },
  {
    title: "Physical Accessibility Audit",
    body: "Walk your facility as if you use a wheelchair, as if you are blind, as if you have significant hearing loss. Is every part of the building accessible? Are ramps available at all entrances, not just a side door? Are accessible bathrooms functional and not being used as storage? Is there adequate lighting? Is the sound system adequate for hearing aid users? Is the print in bulletins and screens readable? The ADA provides a checklist — but go beyond compliance to genuine welcome.",
  },
  {
    title: "Sensory-Friendly Worship",
    body: "Many people with autism spectrum disorder, PTSD, or sensory processing differences cannot tolerate typical church worship environments (very loud music, sudden transitions, unpredictable crowd behavior). Practical accommodations: (1) Offer a ‘quiet room’ with a live feed of the service; (2) Provide sensory kits (noise-reducing headphones, fidget tools, sunglasses) at the entrance; (3) Create a sensory-friendly service (lower volume, predictable structure, advance preparation for any dramatic elements like altar calls); (4) Train greeters to welcome everyone including those who seem ‘difficult.’",
  },
  {
    title: "Including Children with Disabilities in Children’s Ministry",
    body: "Every child with a disability deserves to be included in the church’s children’s ministry, not sequestered in a separate room. Practical steps: (1) Hire a disability ministry coordinator; (2) Provide a ‘buddy system’ — a trained volunteer alongside a child with special needs in the regular class; (3) Work with families to understand the specific needs of their child; (4) Partner with Key Ministry, Joni and Friends, or Nathaniel’s Hope for training curricula. The family of a child with significant needs is often spiritually exhausted — welcoming that child into your community is one of the most powerful acts of grace a church can offer.",
  },
  {
    title: "Supporting Caregivers",
    body: "The caregivers of people with disabilities — parents, spouses, siblings — often carry enormous practical and emotional burdens that make regular church participation nearly impossible. They are frequently the ‘invisible disabled’ in the disability conversation. A church that provides: (1) respite care (giving caregivers a break); (2) practical help (meals, transportation, household assistance); (3) a support group for caregivers; (4) a pastor who specifically visits and prays for caregiver families — this church is practicing extraordinary pastoral care.",
  },
  {
    title: "Language and Dignity",
    body: "Disability-inclusive language is a matter of theology, not political correctness. ‘Person with a disability’ (person-first language) emphasizes personhood over condition. Some disability advocates prefer identity-first language (‘disabled person’ or ‘Autistic person’) — follow the lead of the individual. Never use: ‘wheelchair-bound,’ ‘suffering from,’ ‘confined to,’ ‘the handicapped,’ ‘special needs adults’ (when referring to adults). Do use: the person’s name, respectful descriptions, and — most importantly — genuine curiosity about their experience and gifts.",
  },
];

const resourceCards: ResourceCard[] = [
  {
    title: "Joni: An Unforgettable Story",
    author: "Joni Eareckson Tada, Zondervan",
    description: "The landmark autobiography that launched the modern evangelical disability ministry movement.",
  },
  {
    title: "Disability and the Gospel",
    author: "Michael Beates, Crossway",
    description: "A biblical theology of disability and the church’s calling to welcome people with disabilities.",
  },
  {
    title: "The Theology of Down Syndrome",
    author: "Amos Yong, Baylor University Press",
    description: "Academic but accessible theological engagement with intellectual disability.",
  },
  {
    title: "Key Ministry",
    author: "keyministry.org",
    description: "Free training, curricula, and consultation for churches building disability-inclusive programs, especially for children.",
  },
  {
    title: "Joni and Friends Christian Institute on Disability",
    author: "joniandfriends.org",
    description: "The gold standard for evangelical disability ministry training, theology, and practical resources.",
  },
  {
    title: "The Power of Weakness",
    author: "Mitzi Eaker",
    description: "Personal memoir of faith through caregiving, with practical wisdom for caregivers and church leaders.",
  },
];

const resourceColors = [GREEN, PURPLE, "#3B82F6", "#F59E0B", "#10B981", "#EC4899"];

export default function DisabilityMinistryPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_disability-ministry_tab", "theology");
  const [dmEntries, setDmEntries] = useState<{ id: string; date: string; barrier: string; practice: string; prayer: string }[]>(() => {
    try { const s = localStorage.getItem("vine_dm_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [dmForm, setDmForm] = useState({ barrier: "", practice: "", prayer: "" });
  const [dmSaved, setDmSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_dm_entries", JSON.stringify(dmEntries)); }, [dmEntries]);
  function saveDmEntry() {
    if (!dmForm.barrier.trim()) return;
    setDmEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...dmForm }, ...prev]);
    setDmForm({ barrier: "", practice: "", prayer: "" });
    setDmSaved(true); setTimeout(() => setDmSaved(false), 2000);
  }
  function deleteDmEntry(id: string) { setDmEntries(prev => prev.filter(e => e.id !== id)); }

  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openPractical, setOpenPractical] = useState<number | null>(null);
  const [selectedJoni, setSelectedJoni] = usePersistedState<string>("vine_disability-ministry_selected_joni", "story");

  const activeJoni = joniItems.find((item) => item.id === selectedJoni) ?? joniItems[0];

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical & Theological Foundation" },
    { id: "joni", label: "Joni Eareckson Tada" },
    { id: "practical", label: "Practical Guide" },
    { id: "resources", label: "Resources" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,79,187,0.15)", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Disability Ministry</span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 900, marginBottom: 16, lineHeight: 1.15, color: TEXT }}>
            Disability Ministry:{" "}
            <span style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Biblical Guide
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            The body of Christ is not fully the body of Christ without people with disabilities. The church that creates space for every person — regardless of ability — reflects the Kingdom of God more completely.
          </p>
        </div>

        {/* Stats Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 40 }}>
          {statsData.map((stat, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 20px",
                borderLeft: `3px solid ${i % 2 === 0 ? GREEN : PURPLE}`,
              }}
            >
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{stat}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0, flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 16px",
                borderRadius: "10px 10px 0 0",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 13,
                background: tab === t.id ? CARD : "transparent",
                color: tab === t.id ? TEXT : MUTED,
                borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB 1: THEOLOGY */}
        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              A robust biblical and theological foundation is essential for disability ministry that honors people with disabilities as full image-bearers and full members of the body of Christ.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {theologyItems.map((item, i) => {
                const isOpen = openTheology === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? PURPLE + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button type="button"
                      onClick={() => setOpenTheology(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "18px 22px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <span style={{ fontSize: 16, fontWeight: 800, color: TEXT }}>{item.title}</span>
                      <span style={{ fontSize: 18, color: isOpen ? GREEN : MUTED, flexShrink: 0, fontWeight: 700 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, margin: "16px 0 0" }}>{item.body}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: JONI */}
        {tab === "joni" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Joni Eareckson Tada and Joni and Friends have shaped the evangelical church’s understanding of disability ministry more than any other single voice or organization over the past half-century.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, alignItems: "start" }}>
              {/* Left: Button List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {joniItems.map((item) => {
                  const isActive = selectedJoni === item.id;
                  return (
                    <button type="button"
                      key={item.id}
                      onClick={() => setSelectedJoni(item.id)}
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        borderRadius: 12,
                        border: `1px solid ${isActive ? PURPLE + "60" : BORDER}`,
                        background: isActive ? "rgba(107,79,187,0.12)" : "rgba(255,255,255,0.02)",
                        cursor: "pointer",
                        color: isActive ? TEXT : MUTED,
                        fontSize: 14,
                        fontWeight: isActive ? 700 : 500,
                        transition: "all 0.15s",
                        borderLeft: isActive ? `3px solid ${PURPLE}` : `3px solid transparent`,
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Right: Sticky Detail Panel */}
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${PURPLE}30`,
                  borderRadius: 16,
                  padding: 28,
                  position: "sticky",
                  top: 100,
                }}
              >
                <h3 style={{ fontSize: 19, fontWeight: 900, color: TEXT, marginBottom: 8, marginTop: 0 }}>
                  {activeJoni.label}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE, marginBottom: 16 }}>{activeJoni.heading}</p>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}>{activeJoni.body}</p>
                <div
                  style={{
                    background: "rgba(58,125,86,0.05)",
                    border: `1px solid rgba(58,125,86,0.2)`,
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#4a9e6e", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    {activeJoni.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL */}
        {tab === "practical" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Disability ministry is not a specialized program for specialists — it is a dimension of ordinary pastoral faithfulness. These {practicalItems.length} practices represent the most impactful areas for most congregations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {practicalItems.map((item, i) => {
                const isOpen = openPractical === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? GREEN + "40" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button type="button"
                      onClick={() => setOpenPractical(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "18px 22px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: isOpen ? "rgba(58,125,86,0.15)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${isOpen ? GREEN + "50" : BORDER}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 11,
                            fontWeight: 900,
                            color: isOpen ? GREEN : MUTED,
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ fontSize: 15, fontWeight: 800, color: TEXT }}>{item.title}</span>
                      </div>
                      <span style={{ fontSize: 18, color: isOpen ? GREEN : MUTED, flexShrink: 0, fontWeight: 700 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, margin: "16px 0 0" }}>{item.body}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: RESOURCES */}
        {tab === "resources" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              A curated starting point for churches, pastors, and individuals seeking to understand disability ministry more deeply — from foundational theology to practical tools.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {resourceCards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    borderTop: `3px solid ${resourceColors[i]}`,
                  }}
                >
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, margin: 0, lineHeight: 1.4 }}>{card.title}</h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: resourceColors[i], margin: 0 }}>{card.author}</p>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{card.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: 36,
                background: `linear-gradient(135deg, rgba(107,79,187,0.12), rgba(58,125,86,0.08))`,
                border: `1px solid rgba(107,79,187,0.25)`,
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10, marginTop: 0, color: TEXT }}>
                Is Your Church Ready?
              </h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 480, margin: "0 auto 20px", lineHeight: 1.7 }}>
                Joni and Friends offers free church assessments, training resources, and the Disability Ministry Institute for churches ready to take the next step.
              </p>
              <a
                href="https://www.joniandfriends.org"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`,
                  color: BG,
                  fontWeight: 800,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Visit Joni and Friends
              </a>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Disability Ministry Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Reflect on barriers in your church, practices you are implementing, and prayers for people with disabilities in your community. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>BARRIER I AM ADDRESSING *</label>
                <textarea value={dmForm.barrier} onChange={e => setDmForm(f => ({ ...f, barrier: e.target.value }))}
                  placeholder="What barrier to inclusion (physical, relational, cultural) are you working to address?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>PRACTICE I AM IMPLEMENTING</label>
                <textarea value={dmForm.practice} onChange={e => setDmForm(f => ({ ...f, practice: e.target.value }))}
                  placeholder="What specific inclusive practice are you putting in place in your church or community?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>PRAYER FOR SOMEONE WITH A DISABILITY</label>
                <textarea value={dmForm.prayer} onChange={e => setDmForm(f => ({ ...f, prayer: e.target.value }))}
                  placeholder="Who are you praying for? What is your prayer for them and for your community?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveDmEntry}
                style={{ background: dmSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {dmSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {dmEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({dmEntries.length})</h3>
                {dmEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteDmEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.barrier && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>BARRIER: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.barrier}</span></div>}
                    {entry.practice && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>PRACTICE: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.practice}</span></div>}
                    {entry.prayer && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>PRAYER: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.prayer}</span></div>}
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
                  { videoId: "ej_6dVdJSIU", title: "Disability Ministry: Life and Lessons Learned", channel: "Joni Eareckson Tada", description: "Joni Eareckson Tada gives her vision for disability ministry and shares life lessons learned through decades of living with quadriplegia and ministering to people with disabilities." },
                  { videoId: "GQI72THyO5I", title: "Why You Should Start a Disability Ministry", channel: "Joni Eareckson Tada / Joni and Friends", description: "Joni Eareckson Tada makes the compelling biblical and practical case for why every local church should have an intentional disability ministry." },
                  { videoId: "krxcqH522uo", title: "The Indispensable Church", channel: "Joni Eareckson Tada", description: "Joni encourages believers toward a deeper trust in the church as the community where people with disabilities belong and are truly needed." },
                  { videoId: "nQWFzMvCfLE", title: "Beyond Suffering: A Christian View on Disability Ministry", channel: "Joni and Friends", description: "An introduction to the curriculum for studying disability ministry from a biblical perspective — suffering, the body of Christ, and the call to welcome all people." },
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
