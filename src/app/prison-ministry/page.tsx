"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "howto" | "orgs" | "reentry" | "videos";

const STATS = [
  { value: "2.3 million", label: "incarcerated in the U.S." },
  { value: "65%", label: "of released prisoners re-arrested within 3 years" },
  { value: "1976", label: "Chuck Colson founded Prison Fellowship after Watergate" },
  { value: "Matthew 25:36", label: "'I was in prison and you came to me'" },
];

const THEOLOGY_ITEMS = [
  {
    title: "Matthew 25 and the Least of These",
    body: "Jesus's parable of the sheep and the goats (Matthew 25:31-46) is perhaps the most direct biblical mandate for prison ministry. 'I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.' The striking claim is that Jesus himself is somehow present in the prisoner — not that prisoners are sinless, but that how we treat the vulnerable and marginalized is how we treat Christ. This teaching has motivated Christian prison work from the earliest centuries.",
  },
  {
    title: "God's Concern for Justice and the Incarcerated",
    body: "The Hebrew prophets consistently identified God's covenant faithfulness with justice for the vulnerable: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow's cause' (Isaiah 1:17). Psalm 146:7-8 describes God as one who 'executes justice for the oppressed... sets prisoners free.' The United States incarcerates more people per capita than any nation on earth. A disproportionate number are poor, Black, and mentally ill. Christians engaged with Scripture cannot remain indifferent to what prison policy does to image-bearers of God.",
  },
  {
    title: "The Gospel Inside: Repentance, Forgiveness, and New Life",
    body: "Prison ministry is not primarily social reform — it is gospel proclamation. The incarcerated are people who have often caused real harm and who carry guilt, shame, and spiritual emptiness. The message that Jesus takes away guilt, that forgiveness is real, and that a new identity is possible in Christ is profoundly good news in that context. Many prison ministries report that the incarcerated are among the most receptive audiences to genuine gospel proclamation — stripped of middle-class pretense, they often hear the message with a directness that is rare in suburban churches.",
  },
  {
    title: "Justice and Mercy Are Not Opposites",
    body: "Some Christians emphasize mercy and minimize the real harm that crime causes to victims; others emphasize justice and minimize the image-of-God dignity of those who offend. The biblical vision holds both. Restorative justice — developed largely by Mennonite practitioners like Howard Zehr — asks: What harm was done? Who was harmed? How can it be repaired? This contrasts with the punitive model (how do we punish the offender?). Both justice and mercy are God's character. Prison ministry that ignores victims is not fully Christian; prison ministry that dehumanizes offenders is not fully Christian.",
  },
  {
    title: "Chuck Colson, Prison Fellowship, and the Modern Movement",
    body: "Charles Colson, Nixon's 'hatchet man,' was convicted after Watergate and served 7 months in prison. He became a Christian before his sentence, and the experience transformed him. In 1976, he founded Prison Fellowship — now the world's largest prison ministry, operating in 100+ countries. His book Born Again (1976) remains a classic conversion memoir. The Colson Center for Christian Worldview carries on his intellectual legacy. Prison Fellowship's Angel Tree program provides Christmas gifts to children of prisoners; their Prison Fellowship Academy provides Bible-based life-skills training.",
  },
  {
    title: "The Incarcerated as Part of the Body of Christ",
    body: "The church is not primarily a program for the free and successful. Paul wrote some of his greatest letters from prison. Silas sang hymns in prison at midnight (Acts 16). John Bunyan wrote Pilgrim's Progress in a Bedford jail. The incarcerated members of the body of Christ are not recipients of charity — they are members of the body, with gifts to contribute. Prison ministries that treat prisoners as objects of charity rather than members of the community of faith miss this entirely. The goal is not just better behavior but incorporation into the family of God.",
  },
];

const HOWTO_STEPS = [
  {
    num: 1,
    title: "Understand the Landscape First",
    body: "Visit your local county jail, state prison, or federal facility's chaplain website. Different facilities have different policies for volunteers. County jails house people awaiting trial or serving short sentences. State prisons house people serving longer sentences. Federal prisons are for federal crimes. Each has its own protocol for volunteer clearance, training requirements, and approved programs. The most important first step is to connect with an established ministry rather than trying to start from scratch.",
  },
  {
    num: 2,
    title: "Get Cleared and Trained",
    body: "Most facilities require: (1) a background check; (2) volunteer orientation training (usually 2-4 hours); (3) completion of any facility-specific training. Prison Fellowship, Kairos Prison Ministry, and other established organizations handle much of this process for new volunteers. The training will cover security protocols, what not to bring inside, communication rules, and boundaries. Take it seriously — boundaries protect both you and the people inside.",
  },
  {
    num: 3,
    title: "Choose a Ministry Model",
    body: "Options include: (1) Weekly Bible study or church service — regular presence with the same group over time (highest relationship depth); (2) Event-based — holiday programs (Christmas, Easter), one-time concerts or speakers; (3) Educational — GED tutoring, job skills training, financial literacy; (4) Correspondence — writing letters to prisoners; (5) Reentry support — helping people after release with housing, employment, church connection. Most experienced practitioners recommend relationship-based presence over event-based programs.",
  },
  {
    num: 4,
    title: "Be Consistent",
    body: "The incarcerated have often experienced profound abandonment — by families, systems, and churches. Your consistent presence week after week communicates something that a sermon alone cannot. Many prison ministers report that simply showing up faithfully over years, through holidays and family crises, is the most powerful witness they offer. Consistency also builds the trust necessary for honest gospel conversation.",
  },
  {
    num: 5,
    title: "Learn from the People Inside",
    body: "The best prison ministers are not people who go in to fix others. They go in to encounter people made in God's image, often with profound experience of suffering, injustice, and encounter with God. What will you learn from people who have hit bottom and found the Risen Christ? Prison Fellowship founder Chuck Colson said that the prisoners he worked with taught him more about the grace of God than anyone else in his life. Go to give and be prepared to receive.",
  },
  {
    num: 6,
    title: "Engage Your Church",
    body: "Prison ministry should not be the private project of a few individual Christians — it should be a church-community effort. Bring your church into: (1) commissioning volunteers before they start; (2) praying regularly for specific names of people inside; (3) the Angel Tree program at Christmas; (4) welcoming formerly incarcerated people when they are released. The church that truly opens its doors to returning citizens is practicing Matthew 25 in a powerful way.",
  },
];

const ORGS = [
  {
    name: "Prison Fellowship",
    desc: "Founded 1976 by Chuck Colson. World's largest prison ministry, operating in 100+ countries.",
    url: "prisonfellowship.org",
    programs: ["Angel Tree (Christmas gifts for children of prisoners)", "Prison Fellowship Academy (transformative curriculum)", "Warden Exchange (peer-to-peer network)"],
  },
  {
    name: "Kairos Prison Ministry",
    desc: "A 3-day Christian community experience inside prisons, focused on team-based ministry. Kairos means 'God's special time.' Volunteers spend a weekend inside a prison unit building authentic community. One of the most effective and widely replicated models.",
    url: "kairosprisonministry.org",
    programs: ["3-day inside community weekend", "Ongoing monthly gatherings", "Outside volunteers team approach"],
  },
  {
    name: "Justice Fellowship",
    desc: "Prison Fellowship's policy arm. Focuses on criminal justice reform from a Christian perspective: sentencing reform, prison conditions, the plight of victims, reentry support.",
    url: "justicefellowship.org",
    programs: ["Sentencing reform advocacy", "Prison conditions monitoring", "Reentry policy support"],
  },
  {
    name: "Celebrate Recovery",
    desc: "12-step Christ-centered recovery program operating in many prisons and county jails. Addresses addiction, trauma, and compulsive behavior through the lens of the beatitudes.",
    url: "celebraterecovery.com",
    programs: ["Addiction recovery curriculum", "Trauma healing groups", "Beatitudes-based approach"],
  },
  {
    name: "The Colson Center for Christian Worldview",
    desc: "Chuck Colson's intellectual legacy: BreakPoint commentary, Christian worldview resources, and advocacy for justice. Produces curriculum used in many prison education programs.",
    url: "colsoncenter.org",
    programs: ["BreakPoint commentary", "Worldview curriculum", "Prison education resources"],
  },
  {
    name: "Forgotten Voices International",
    desc: "Focuses on families of prisoners — children, spouses, and parents often forgotten in the conversation about incarceration.",
    url: "forgottenvoices.net",
    programs: ["Support for children of prisoners", "Family care programs", "Community awareness"],
  },
];

const REENTRY_ITEMS = [
  {
    title: "What Reentry Is",
    body: "Reentry is the period when someone is released from incarceration and attempts to reestablish life in the community. It is statistically the most dangerous window — 65% of released prisoners are re-arrested within 3 years. The first 72 hours are the most critical: housing, ID documents, transportation, phone access, and contact with a support system. Without these, the gravitational pull of the previous life is overwhelming.",
  },
  {
    title: "What the Church Can Do",
    body: "The church is uniquely positioned to provide what institutions cannot: genuine relationship, unconditional acceptance, practical support, and the community of the body of Christ. Specific practical supports: (1) Help with housing — church members who can host for 30-60 days; (2) Ride to first appointments (probation, employment, DMV); (3) Employment connections — church members who hire or refer; (4) A mentor/accountability partner who walks alongside for 12+ months; (5) A community that does not require a person to pretend they don't have a record.",
  },
  {
    title: "Barriers to Successful Reentry",
    body: "The systemic obstacles are real: housing (most landlords reject applicants with records), employment (background checks eliminate most jobs), driver's license restoration (often impossible with outstanding fines), loss of voting rights (in many states), inability to receive public benefits (in some states for drug convictions), and mandatory supervision requirements that can trigger re-incarceration for technical violations. A church that engages reentry ministry will confront these realities and may find itself doing advocacy work as well.",
  },
  {
    title: "Welcoming Returning Citizens in Your Church",
    body: "Many churches have returning citizens among their members and don't know it — because the culture of silence around incarceration keeps it hidden. Creating a culture where people can be honest about their history requires explicit pastoral leadership: preaching that names incarceration as part of the human experience, leadership that has a relationship with people who have been inside, and practical structures (small groups, mentoring) that create belonging. The alternative — a church where former prisoners feel they must hide their story — perpetuates shame rather than releasing it.",
  },
  {
    title: "Resources for Reentry",
    body: "Key organizations: Getting Out and Staying Out — a program in Chicago; Hope and a Future — Chicago; Prison Fellowship Reentry Support; local parole offices often have lists of church-based reentry programs. Key books: The New Jim Crow by Michelle Alexander (structural analysis); Redemption: Freed by Faith — Tim Recker; Just Mercy by Bryan Stevenson (death row defense attorney, deeply moving).",
  },
];

const PRISON_VIDEOS = [
  { videoId: "Hr3PkGXYRvI", title: "Prison Ministry: Called to Visit", channel: "The Gospel Coalition", description: "Matthew 25:36 — 'I was in prison and you came to visit me.' A biblical call to prison ministry and what faithful presence looks like." },
  { videoId: "ACZbpLkY8To", title: "Chuck Colson and Prison Fellowship", channel: "Prison Fellowship", description: "The founding vision of Prison Fellowship — how Chuck Colson's conversion transformed his life and led to a global prison ministry movement." },
  { videoId: "KbFKcFxqVlo", title: "The Gospel Behind Bars", channel: "Desiring God", description: "Stories of transformation from prison ministry — how the gospel reaches the incarcerated and produces radical life change." },
  { videoId: "Z8lkuuhVkOI", title: "Restorative Justice and the Church", channel: "Ligonier Ministries", description: "How the biblical vision of justice — restoration, not just punishment — shapes Christian approaches to criminal justice and prison ministry." },
];

export default function PrisonMinistryPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_prison-ministry_tab", "theology");
  const [expandedTheology, setExpandedTheology] = useState<number | null>(null);
  const [expandedReentry, setExpandedReentry] = useState<number | null>(null);

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology" },
    { id: "howto", label: "How to Get Involved" },
    { id: "orgs", label: "Organizations" },
    { id: "reentry", label: "Reentry" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              marginBottom: 14,
              color: TEXT,
              lineHeight: 1.2,
            }}
          >
            Prison Ministry: A Practical Guide
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Jesus said &ldquo;I was in prison and you came to me&rdquo; (Matthew 25:36). Prison
            ministry is not a specialized calling for a few &mdash; it is one of the clearest
            expressions of the Gospel in the New Testament.
          </p>
        </div>

        {/* Stats Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginBottom: 36,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: GREEN,
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 32,
            background: CARD,
            borderRadius: 12,
            padding: 6,
            border: `1px solid ${BORDER}`,
          }}
        >
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1 — Theology */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => {
              const open = expandedTheology === i;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${open ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                  }}
                >
                  <button type="button"
                    onClick={() => setExpandedTheology(open ? null : i)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: open ? GREEN : TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: PURPLE,
                        fontSize: 20,
                        fontWeight: 700,
                        marginLeft: 12,
                        flexShrink: 0,
                      }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div
                      style={{
                        padding: "0 22px 20px",
                        color: TEXT,
                        fontSize: 15,
                        lineHeight: 1.8,
                      }}
                    >
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2 — How to Get Involved */}
        {activeTab === "howto" && (
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 22,
                top: 0,
                bottom: 0,
                width: 2,
                background: BORDER,
              }}
            />
            {HOWTO_STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: 24,
                  position: "relative",
                }}
              >
                {/* Step number circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: PURPLE,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 16,
                    flexShrink: 0,
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {step.num}
                </div>
                {/* Card */}
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "18px 22px",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      color: GREEN,
                      fontWeight: 800,
                      fontSize: 17,
                      margin: "0 0 10px 0",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 15,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3 — Organizations */}
        {activeTab === "orgs" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {ORGS.map((org, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "22px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h3
                  style={{
                    color: GREEN,
                    fontWeight: 800,
                    fontSize: 17,
                    margin: 0,
                  }}
                >
                  {org.name}
                </h3>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {org.desc}
                </p>
                <div
                  style={{
                    background: `${PURPLE}18`,
                    border: `1px solid ${PURPLE}44`,
                    borderRadius: 8,
                    padding: "6px 10px",
                    fontSize: 12,
                    color: PURPLE,
                    fontWeight: 700,
                    display: "inline-block",
                    alignSelf: "flex-start",
                  }}
                >
                  {org.url}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, listStyle: "none" }}>
                  {org.programs.map((prog, j) => (
                    <li
                      key={j}
                      style={{
                        color: MUTED,
                        fontSize: 13,
                        lineHeight: 1.7,
                        paddingLeft: 0,
                        marginBottom: 2,
                        display: "flex",
                        gap: 6,
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: GREEN, flexShrink: 0, marginTop: 2 }}>&#8250;</span>
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4 — Reentry */}
        {activeTab === "reentry" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Reentry is the most critical window in the cycle of incarceration. What the church
                does in the first days, weeks, and months after release can determine whether a
                person builds a new life or returns to prison.
              </p>
            </div>
            {REENTRY_ITEMS.map((item, i) => {
              const open = expandedReentry === i;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${open ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                  }}
                >
                  <button type="button"
                    onClick={() => setExpandedReentry(open ? null : i)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: open ? GREEN : TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: PURPLE,
                        fontSize: 20,
                        fontWeight: 700,
                        marginLeft: 12,
                        flexShrink: 0,
                      }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div
                      style={{
                        padding: "0 22px 20px",
                        color: TEXT,
                        fontSize: 15,
                        lineHeight: 1.8,
                      }}
                    >
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 5 — Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PRISON_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
