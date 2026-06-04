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

type Tab = "theology" | "seasons" | "calling" | "legacy" | "videos";

const STATS = [
  { label: "Average American retires at 64" },
  { label: "Many retirees report retirement as the most meaningful decade of their life" },
  { label: "'Do not cast me off in old age' — Psalm 71:9" },
  { label: "Psalm 71, 90, 92 are the Bible's 'aging psalms'" },
];

const THEOLOGY_ITEMS = [
  {
    title: "What Retirement Is Not",
    body: "Retirement in its common form — the cessation of meaningful work and the pursuit of leisure until death — has no biblical parallel. The Bible does not envision an extended period of self-focused leisure as the goal of a human life. Israel's priests retired from active tabernacle service at 50 (Numbers 8:25), but they continued to assist — they didn't stop working entirely. The Roman concept of otium (leisured retirement from public life) was specifically critiqued by Stoic philosophers and has even less support in biblical thought. The question is not 'When can I stop?' but 'What is this next chapter for?'",
  },
  {
    title: "The Hebrew Vision of Fruitful Old Age",
    body: "The Bible presents old age as a time of continued fruitfulness, wisdom, and influence — not idleness. Psalm 92:12-14: 'The righteous flourish like the palm tree... They still bear fruit in old age; they are ever full of sap and green.' Caleb at 85: 'I am as strong today as when Moses sent me... Now give me this mountain' (Joshua 14:10-12). Moses led the Exodus in his 80s. Anna, 84 years old, prophesied in the temple (Luke 2:36-38). The Hebrew word for 'elder' (zaqen) literally means the person who deserves to be listened to. Old age is the season of wisdom, not the season of irrelevance.",
  },
  {
    title: "Stewardship of Time in the Final Decades",
    body: "If a person retires at 65 and lives to 85, they have 20 years — as much time as from birth to adulthood. This is an extraordinary gift of time. The stewardship question is acute: What is this time for? Who needs what I uniquely have to offer? The retiree has: (1) time — more discretionary time than any previous period of life; (2) wisdom — accumulated through decades of experience and suffering; (3) relationships — a network built over a lifetime; (4) resources — often the highest wealth accumulation of a lifetime. These are not retirement funds — they are Kingdom resources.",
  },
  {
    title: "The Vocation of Grandparenthood",
    body: "For those with grandchildren, grandparenthood is one of the most significant vocations of the retirement season. Research consistently shows that grandparent involvement — particularly with faith transmission — is a powerful predictor of whether grandchildren retain faith as adults. Psalm 78:4-7: 'We will tell the next generation the praiseworthy deeds of the LORD... even the children yet to be born... so they would put their trust in God.' The grandparent who intentionally passes on faith, character, and the family's story of God's faithfulness is investing in eternity. This is not a secondary calling — it is among the most significant things a person can do.",
  },
  {
    title: "Suffering, Frailty, and the Theology of Weakness",
    body: "Many people in their 70s and 80s experience increasing physical limitation, chronic illness, the death of friends and spouses, and the gradual narrowing of what the body can do. This is not a defeat — it is a vocation. The suffering of the elderly, when received in faith, becomes a form of witness. Paul's 'I have learned in whatever situation I am to be content' (Phil 4:11) was written from prison — a situation of profound limitation. The limitation of age, received in trust, is itself a testimony that our identity and value are not contingent on capacity. The person who dies well — in faith, at peace, with words of grace — is completing a life of witness.",
  },
  {
    title: "Letting Go and Finishing Well",
    body: "The final chapter of life involves a series of necessary relinquishments: positions of authority, physical independence, the ability to drive, the ability to live alone. These relinquishments, resisted, become tragedies; received in faith, they become opportunities. Gordon MacDonald writes about 'finishing well' — passing the baton to the next generation with grace rather than clutching power past the appropriate time. The wise elder trains successors, releases authority, shares credit, and moves into a role of counsel and prayer — the most powerful available — rather than management. Paul's charge to Timothy is the model: 'Guard the good deposit... Hand it on.'",
  },
];

const SEASONS = [
  {
    id: "active",
    label: "The Active Season",
    ages: "Ages 60–72",
    description: "Often the most energetic and externally productive season of retirement. Most retirees have full energy, good health, financial stability, and maximum discretionary time. This is the season for launch: launching new ministries, launching grandchildren, launching the next generation in the church.",
    focus: "Identify the unique contribution you can make in this season — not 'what am I good at?' (you already know) but 'What does the Kingdom need that I am positioned to give?'",
    practices: [
      "Find a local church ministry that needs your primary giftedness.",
      "Mentor 2–3 younger leaders.",
      "Begin intentional grandparent discipleship.",
    ],
    considerations: "Resist the pull toward pure leisure. The 'gray divorce' rate is highest in early retirement — invest in your marriage. Volunteer work is significant but should not replace the depth of church-centered discipleship.",
  },
  {
    id: "transitional",
    label: "The Transitional Season",
    ages: "Ages 72–80",
    description: "Many people in this season experience the first significant physical limitations — a health scare, reduced stamina, hearing or vision loss, the death of a spouse. The season shifts from primarily giving to a mixture of giving and receiving.",
    focus: "Graceful acceptance of increasing limitation while maintaining purposeful engagement in areas of enduring capacity.",
    practices: [
      "Spiritual direction or a prayer partner who can accompany you in the transition.",
      "Annual review of activities — what is it still yours to do?",
      "Writing your memoirs or family history (a profound legacy gift).",
    ],
    considerations: "Grief is common in this season — the losses accumulate. The church's pastoral care must be attentive to the isolated elderly. Depression is under-diagnosed and under-treated in this age group.",
  },
  {
    id: "contemplative",
    label: "The Contemplative Season",
    ages: "Ages 80–90",
    description: "The body's demands increase; mobility decreases; the world shrinks to home, church, and close family. This is the season Thomas Merton called 'the hidden life' — less visible, but potentially more spiritually significant than any previous season.",
    focus: "Prayer, Scripture, and the transmission of wisdom to those who come to you.",
    practices: [
      "Develop a structured daily prayer pattern.",
      "Write letters to grandchildren and great-grandchildren they will read after you are gone.",
      "Receive care gracefully — it is a gift to those who give it.",
    ],
    considerations: "This season requires both the elderly person's acceptance and the community's active pastoral presence. The lonely elderly person in a congregation is an indicator of pastoral failure.",
  },
  {
    id: "dying",
    label: "The Dying Season",
    ages: "Final Years",
    description: "Every season of life ends in this one. The Christian theology of death is resurrection: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live' (John 11:25). The dying Christian is not losing the battle — they are crossing the finish line.",
    focus: "Finishing well: reconciling broken relationships, expressing love explicitly, entrusting unfinished concerns to God, receiving the church's ministry (anointing, communion, prayer), and dying in the confident hope of resurrection.",
    practices: [
      "Advance care planning (healthcare directives that reflect Christian convictions about the sanctity of life).",
      "Regular communion.",
      "The presence of family and the church community at the end.",
    ],
    considerations: "Modern medicine can make dying a prolonged medical experience rather than a personal and pastoral one. Christian families and church communities must reclaim the ministry of dying alongside.",
  },
];

const CALLING_ITEMS = [
  {
    title: "Discovering Your Retirement Calling",
    body: "The retirement calling is not the same as the career calling. The career asked: What am I skilled at, and what will pay me? The retirement calling asks: What has God prepared me, through my entire life, to do now? This involves asking: What experiences have I had that uniquely prepare me? What suffering have I survived that gives me authority to speak? Who has access to me that no one else does (grandchildren, peers in my neighborhood, former colleagues)? The answers will often surprise — many people discover their deepest calling in their 60s and 70s.",
  },
  {
    title: "Mentoring and Discipleship",
    body: "The retiree's most powerful contribution is often not a program or a ministry position — it is the relationship of mentoring. A retiree with 40 years of business experience mentoring a 30-year-old entrepreneur; a retired pastor meeting weekly with a young minister; a grandmother discipling her granddaughter in prayer — these relationships are priceless and irreplaceable. The church that does not deliberately connect its elders with its young adults is failing both groups. Titus 2 assumes this: older men and women teaching the younger.",
  },
  {
    title: "Prayer Ministry",
    body: "The prayer ministry of retirees may be the most significant thing happening in any congregation, and it is almost entirely invisible. People with time, spiritual depth, and experience of answered prayer — who have seen God work over decades — are uniquely gifted for sustained intercession. Consider: joining or forming a church prayer team; adopting specific missionaries, church planters, or pastors to pray for regularly by name; keeping a prayer journal that becomes a record of God's faithfulness.",
  },
  {
    title: "Justice and Mercy Ministry",
    body: "Retirees have time and often resources for justice and mercy work that employed people cannot give. Consider: prison ministry (regular weekly presence requires the kind of long-term commitment a retiree can make); literacy tutoring; food bank volunteering; refugee resettlement assistance; Habitat for Humanity builds. Many of the most effective justice ministry volunteers are retirees. Their consistent presence over years builds the relationships that programs cannot.",
  },
  {
    title: "Church Financial Giving",
    body: "The retirement season is often the highest-wealth period of a person's life — 401k accumulated, house paid off, children independent. Many retirees are in a position to make the largest financial gifts of their lives. Christian financial planners recommend: reviewing estate plans to reflect Kingdom priorities; considering direct charitable gifts (which avoid capital gains) of appreciated stock; planned giving (bequests, charitable remainder trusts) that can fund ministry beyond your lifetime; accelerating giving in the final decades rather than passing maximum wealth to heirs.",
  },
  {
    title: "Writing and Preserving Stories",
    body: "One of the most undervalued callings of the retirement season is the work of writing and preservation. The retiree who writes their memoirs — including their story of faith, the ways God has worked, the failures and redemptions — gives an irreplaceable gift to children, grandchildren, and the church community. Oral tradition has always been the primary means by which faith was transmitted intergenerationally. In the modern family, scattered across geographies, the written memoir may be the primary vehicle for the faith transmission that conversation used to carry.",
  },
];

const LEGACY_ITEMS = [
  {
    title: "What Legacy Actually Is",
    body: "Legacy is not primarily what you leave behind — it is what you build into other people. The most permanent legacies are not financial (which can be squandered) or institutional (which can be misused) but relational and spiritual — people who carry your faith, values, and character into the next generation. Jonathan Edwards's legacy is not the buildings at Princeton or Yale — it is the revival that transformed New England and the theological tradition that shaped American evangelicalism. His personal descendants produced an extraordinary number of pastors, educators, and leaders — not because of his money but because of his spiritual and intellectual formation.",
  },
  {
    title: "Advance Directives and End-of-Life Planning",
    body: "Finishing well requires planning. A Christian advance directive expresses: (1) the conviction that life is sacred and death is real — not to be artificially extended beyond its time; (2) the desire to die in the presence of family and the church's pastoral care; (3) specific instructions about medical intervention, pain management, and resuscitation; (4) designation of a healthcare proxy who shares Christian convictions. Resources: Five Wishes (agingwithdignity.org) and the Christian Medical & Dental Associations provide Christian advance directive forms.",
  },
  {
    title: "Reconciliation Before the End",
    body: "The last season of life is the appointed time for reconciliation. Broken relationships — with adult children, siblings, former friends or colleagues — carry weight that increases with age and accelerates in dying. 'As far as it depends on you, live at peace with everyone' (Romans 12:18). The dying person who initiates reconciliation, even if the other party refuses it, completes something and leaves something for the next generation. The unreconciled family is one of the heaviest legacies a person can leave.",
  },
  {
    title: "Ethical Will and Faith Letter",
    body: "An ethical will (or 'legacy letter') is a document that communicates what you value, what you hope for, and what you believe to the people you love — rather than what you own. This is one of the most powerful gifts an elder can give. Write: your faith story (how you came to know Christ); the most important things you've learned about God; the values you want your family to carry; specific words of blessing for each child and grandchild; the prayers you have prayed for them. This document, read at your death, will likely be the most important thing you ever wrote.",
  },
  {
    title: "The Good Death",
    body: "Christian dying has been an art form across the church's history. The 'ars moriendi' (the art of dying) — a medieval genre of Christian literature — guided people through the process of dying well: accepting death, renouncing the devil, maintaining faith in Christ, expressing love and forgiveness, committing the soul to God. Modern medicine has largely displaced this tradition, turning dying into a medical event. Reclaiming a Christian approach to dying means: dying at home when possible; receiving the last rites or anointing; having Scripture read and hymns sung; speaking words of love and faith to those present; dying with the name of Jesus on your lips.",
  },
  {
    title: "The Resurrection Hope",
    body: "The Christian's final word is not death — it is resurrection. 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live' (John 11:25). 'For to me to live is Christ, and to die is gain' (Phil 1:21). The person who has lived in the hope of resurrection approaches death differently than the person without it: not without grief (resurrection is not the denial of death's reality), not without fear (death is genuinely the last enemy), but with the confidence that the one who raised Jesus from the dead will raise them too. This is the final testimony — and it is often the most powerful.",
  },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Theology of Aging" },
  { id: "seasons", label: "Seasons" },
  { id: "calling", label: "Calling" },
  { id: "legacy", label: "Legacy" },
  { id: "videos", label: "🎬 Videos" },
];

export default function ChristianRetirementPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-retirement_tab", "theology");
  const [expandedTheology, setExpandedTheology] = useState<string | undefined>(undefined);
  const [expandedCalling, setExpandedCalling] = useState<string | undefined>(undefined);
  const [expandedLegacy, setExpandedLegacy] = useState<string | undefined>(undefined);
  const [activeSeason, setActiveSeason] = usePersistedState<string>("vine_christian-retirement_active_season", "active");

  const currentSeason = SEASONS.find((s) => s.id === activeSeason) ?? SEASONS[0];

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              marginBottom: 14,
              lineHeight: 1.25,
              color: TEXT,
            }}
          >
            Retirement as a Christian Vocation
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
            Retirement is not the finish line — it is the beginning of a different chapter of
            fruitfulness. A Christian theology of aging and retirement asks: What does faithfulness
            look like in the final decades?
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
                borderLeft: `3px solid ${GREEN}`,
              }}
            >
              <p style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.55 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tab Bar */}
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
          {TABS.map((t) => (
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
                transition: "background 0.15s",
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
              const isOpen = expandedTheology === item.title;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button type="button"
                    onClick={() =>
                      setExpandedTheology(isOpen ? undefined : item.title)
                    }
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        color: isOpen ? GREEN : TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: 20,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px" }}>
                      <p
                        style={{
                          color: TEXT,
                          lineHeight: 1.8,
                          fontSize: 15,
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2 — Seasons */}
        {activeTab === "seasons" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left column — season buttons */}
            <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {SEASONS.map((s) => (
                <button type="button"
                  key={s.id}
                  onClick={() => setActiveSeason(s.id)}
                  style={{
                    width: "100%",
                    background: activeSeason === s.id ? PURPLE : CARD,
                    border: `1px solid ${activeSeason === s.id ? PURPLE : BORDER}`,
                    borderRadius: 10,
                    padding: "14px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                >
                  <div
                    style={{
                      color: activeSeason === s.id ? "#fff" : TEXT,
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      color: activeSeason === s.id ? "rgba(255,255,255,0.7)" : MUTED,
                      fontSize: 12,
                    }}
                  >
                    {s.ages}
                  </div>
                </button>
              ))}
            </div>

            {/* Right sticky detail panel */}
            <div style={{ flex: 1, position: "sticky", top: 24 }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <h2
                    style={{
                      color: GREEN,
                      fontWeight: 900,
                      fontSize: 22,
                      margin: "0 0 4px 0",
                    }}
                  >
                    {currentSeason.label}
                  </h2>
                  <span
                    style={{
                      background: `${PURPLE}25`,
                      color: PURPLE,
                      padding: "3px 12px",
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {currentSeason.ages}
                  </span>
                </div>

                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>
                  {currentSeason.description}
                </p>

                <div
                  style={{
                    background: `${GREEN}10`,
                    border: `1px solid ${GREEN}30`,
                    borderRadius: 10,
                    padding: "14px 18px",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      color: GREEN,
                      fontWeight: 800,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Focus
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    {currentSeason.focus}
                  </p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 800,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                      textTransform: "uppercase",
                    }}
                  >
                    Key Practices
                  </div>
                  {currentSeason.practices.map((p, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          color: GREEN,
                          fontWeight: 900,
                          fontSize: 14,
                          lineHeight: 1.6,
                          flexShrink: 0,
                        }}
                      >
                        •
                      </span>
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{p}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: `${PURPLE}12`,
                    border: `1px solid ${PURPLE}30`,
                    borderRadius: 10,
                    padding: "14px 18px",
                  }}
                >
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 800,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Considerations
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    {currentSeason.considerations}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 — Calling */}
        {activeTab === "calling" && (
          <div>
            {CALLING_ITEMS.map((item, i) => {
              const isOpen = expandedCalling === item.title;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button type="button"
                    onClick={() =>
                      setExpandedCalling(isOpen ? undefined : item.title)
                    }
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        color: isOpen ? GREEN : TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: 20,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px" }}>
                      <p
                        style={{
                          color: TEXT,
                          lineHeight: 1.8,
                          fontSize: 15,
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4 — Legacy */}
        {activeTab === "legacy" && (
          <div>
            {LEGACY_ITEMS.map((item, i) => {
              const isOpen = expandedLegacy === item.title;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button type="button"
                    onClick={() =>
                      setExpandedLegacy(isOpen ? undefined : item.title)
                    }
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        color: isOpen ? GREEN : TEXT,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: 20,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px" }}>
                      <p
                        style={{
                          color: TEXT,
                          lineHeight: 1.8,
                          fontSize: 15,
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on aging, retirement, and finishing well.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "71DvW_rU3ec", title: "Don't Waste Your Retirement — Part 1", channel: "Desiring God / John Piper", description: "John Piper challenges Christians to think biblically about retirement — not as cessation of meaningful work, but as a new chapter of Kingdom investment." },
                  { videoId: "aBq5HvbrSrU", title: "Seven Resolutions for Aging and Dying Well", channel: "Desiring God / John Piper", description: "John Piper offers seven specific commitments for how to age and die in a way that honors God and blesses others." },
                  { videoId: "9yNK2Xf43mk", title: "John Piper at 80: Personal Reflections on Life and Ministry", channel: "Desiring God", description: "John Piper at 80 years old reflects on what he has learned about God, ministry, suffering, and the Christian life." },
                  { videoId: "JHdB1dYAteA", title: "Don't Waste Your Life", channel: "Desiring God / John Piper", description: "John Piper's foundational challenge to live a life that counts for eternity — relevant at every stage, especially in the final decades." },
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
