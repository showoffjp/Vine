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

type Tab = "theology" | "voices" | "practices" | "obstacles" | "videos";

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
  "The average American has 300,000 items in their home",
  "Credit card debt: $1.17 trillion in the U.S.",
  "Jesus warns about wealth/possessions more than any other topic",
  "Foster's Celebration of Discipline has sold 2+ million copies",
];

const THEOLOGY_ITEMS: { title: string; body: string }[] = [
  {
    title: "What Simplicity Is — and Is Not",
    body: "Simplicity is not an aesthetic preference (minimalism), not poverty (which is involuntary), not legalism (rigid rules about what you can own), and not escapism (fleeing responsibility). Richard Foster defines it as 'an inward reality that results in an outward lifestyle.' The inward reality is freedom from the tyranny of possessions, status, and appearance. The outward lifestyle is ordered toward what truly matters: God, people, and the work of the Kingdom. Simplicity is about the posture of the heart, not the count of your possessions.",
  },
  {
    title: "Jesus and the Love of Money",
    body: "No topic appears more often in Jesus's teaching than money and possessions. The parable of the rich young ruler, the parable of the rich fool, the Sermon on the Mount's teaching on storing up treasure, the camel through a needle's eye — Jesus consistently warns that wealth competes with God for the center of the human heart. 'You cannot serve both God and money' (Matt 6:24). This is not because money is evil (1 Tim 6:10 says the love of money — not money itself — is a root of all kinds of evil) but because it is a competing lord.",
  },
  {
    title: "The Desert Fathers and Christian Simplicity",
    body: "The early desert fathers and mothers fled to the Egyptian desert in the 3rd and 4th centuries, in part as a protest against the church's growing accommodation to wealth and empire after Constantine. Abba Anthony sold all he owned after hearing Matthew 19:21. The desert tradition developed practices of radical simplicity not as merit but as clearing space for God. Thomas à Kempis, writing in the 15th century, summarized: 'He has great peace who cares for no one thing. But he who is attached to things, and clings to them, is always busy, restless, ready to quarrel.'",
  },
  {
    title: "The Reformation and the Protestant Work Ethic",
    body: "The Reformation's doctrine of vocation affirmed work in the world rather than flight from it, but it also warned against the accumulation of wealth as an end in itself. John Calvin taught that wealth should circulate rather than accumulate — the wealthy hold assets in trust for the common good. The Puritans, known for frugality, combined hard work with modest living and giving. Max Weber famously (if controversially) argued that Protestant values of hard work + restraint generated capitalist accumulation — ironic, since the Reformers intended restraint to prevent exactly that accumulation.",
  },
  {
    title: "The Twentieth Century Renewal: Foster, Willard, Sider",
    body: "Richard Foster's Celebration of Discipline (1978) brought the classical spiritual disciplines — including simplicity — back to a Protestant evangelical audience. Dallas Willard's The Spirit of the Disciplines (1988) gave a theological framework: disciplines are training, not merit. Ronald Sider's Rich Christians in an Age of Hunger (1977) confronted evangelical wealth directly with a prophetic challenge about global poverty. Together these three books represent a 20th-century renewal of practical Christian simplicity in evangelical circles.",
  },
  {
    title: "New Monasticism and Contemporary Communities",
    body: "The New Monasticism movement (Jonathan Wilson-Hartgrove, Shane Claiborne) applies ancient monastic simplicity principles to life in inner-city communities. The Simple Way community in Philadelphia practices radical simplicity in an economically distressed neighborhood. The 12 marks of New Monasticism include 'sharing economic resources with fellow community members and the needy among us.' These communities are not for everyone, but they demonstrate that gospel simplicity is not merely a middle-class lifestyle adjustment.",
  },
];

interface Teacher {
  name: string;
  era: string;
  keyWork: string;
  coreTeaching: string;
  quote: string;
  practicalContribution: string;
}

const TEACHERS: Teacher[] = [
  {
    name: "Richard Foster",
    era: "20th century",
    keyWork: "Celebration of Discipline (1978)",
    coreTeaching: "Simplicity is one of 12 disciplines dividing into inward, outward, and corporate disciplines. The 'outward' disciplines (simplicity, solitude, submission, service) shape the external life.",
    quote: "The grace of simplicity is the freedom to do things for a single reason.",
    practicalContribution: "Made simplicity accessible to evangelical Protestants; offered 10 practical principles of simplicity.",
  },
  {
    name: "Dallas Willard",
    era: "20th century",
    keyWork: "The Spirit of the Disciplines (1988)",
    coreTeaching: "Disciplines including simplicity are 'training in godliness' not ways of earning favor. The body must be trained. Simplicity trains the soul away from the false self propped up by possessions and status.",
    quote: "Spiritual disciplines are activities that make us capable of doing what we cannot do by direct effort.",
    practicalContribution: "Rooted simplicity in a robust theology of spiritual formation rather than mere ethics.",
  },
  {
    name: "Thomas à Kempis",
    era: "15th century",
    keyWork: "The Imitation of Christ (c. 1418)",
    coreTeaching: "'Many words satisfy not the soul, but a good life refresheth the mind.' A Kempis relentlessly strips away attachment to learning, reputation, comfort, and status. The only goal is imitating Christ's humility.",
    quote: "Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
    practicalContribution: "The second-most-read Christian book after the Bible; a masterclass in interior simplicity.",
  },
  {
    name: "Mother Teresa",
    era: "20th century",
    keyWork: "Come Be My Light (letters, posthumous)",
    coreTeaching: "Total simplicity of life as witness and solidarity with the poor. The Missionaries of Charity took vows of poverty, chastity, obedience, and 'wholehearted free service to the poorest of the poor.' Simplicity is not a personal preference but a sacramental act of love.",
    quote: "The more you have, the more you are occupied, the less you give. But the less you have, the more free you are.",
    practicalContribution: "Living example of radical simplicity bearing global fruit.",
  },
  {
    name: "John Wesley",
    era: "18th century",
    keyWork: "Sermons on Several Occasions — 'The Use of Money,' 'Danger of Riches'",
    coreTeaching: "Wesley's famous formula: 'Gain all you can, save all you can, give all you can.' Accumulate through honest work; live frugally; give everything beyond basic needs. Wesley himself died with almost no possessions despite earning substantial income.",
    quote: "When I have money I get rid of it quickly, lest it find a way into my heart.",
    practicalContribution: "A Methodist model of simplicity as stewardship and generosity rather than withdrawal.",
  },
  {
    name: "Shane Claiborne",
    era: "21st century",
    keyWork: "The Irresistible Revolution (2006)",
    coreTeaching: "Radical simplicity as participation in the downward mobility of Jesus ('He who was rich became poor for our sakes'). Living in community with the poor is not charity — it is solidarity. Simplicity is the necessary precondition of real love.",
    quote: "As long as there are people without homes, I am not at home.",
    practicalContribution: "Made simplicity compelling to a younger evangelical generation through memoir and prophetic witness.",
  },
];

interface PracticeCategory {
  title: string;
  practices: string[];
}

const PRACTICE_CATEGORIES: PracticeCategory[] = [
  {
    title: "Money & Finances",
    practices: [
      "Give the first 10% before spending anything.",
      "Set a 'lifestyle cap' — a maximum standard of living you will not exceed regardless of income.",
      "Eliminate one subscription or expense this month.",
      "Do a 30-day buying fast: no non-essential purchases.",
      "Calculate your 'enough' — how much is genuinely enough for your household?",
    ],
  },
  {
    title: "Possessions",
    practices: [
      "Apply the rule: 'For everything you bring in, one thing goes out.'",
      "Each year, give away a significant percentage of your wardrobe, books, and household items.",
      "Borrow or rent before you buy.",
      "Resist upgrading what is still functional.",
      "Practice the one-year rule: have you used it in a year? If not, give it away.",
    ],
  },
  {
    title: "Time",
    practices: [
      "Protect a weekly Sabbath — one day free from productivity.",
      "Leave margin in your calendar: resist filling every hour.",
      "Say no to good things so you can say yes to best things.",
      "Limit screen time to intentional, pre-decided sessions.",
      "Eat a meal daily with no devices.",
    ],
  },
  {
    title: "Communication & Appearance",
    practices: [
      "Stop exaggerating or performing for social approval.",
      "Speak plainly: say what you mean and mean what you say.",
      "Resist the pressure to signal status through clothing, car, or home.",
      "Don't share opinions you haven't thought through.",
      "Be the same person in private as in public.",
    ],
  },
  {
    title: "Food",
    practices: [
      "Eat simple, plain food most days.",
      "Fast one meal per week and give the money saved.",
      "Avoid food as entertainment or comfort.",
      "Grow some of your own food if possible.",
      "Waste nothing: plan meals to use what you have.",
    ],
  },
  {
    title: "Giving",
    practices: [
      "Give anonymously whenever possible.",
      "Give until it changes your lifestyle.",
      "Partner with one ministry long-term rather than scattering small gifts.",
      "Practice spontaneous generosity — carry cash to give freely.",
      "Give to people, not just organizations.",
    ],
  },
];

interface Obstacle {
  title: string;
  problem: string;
  source: string;
  response: string;
}

const OBSTACLES: Obstacle[] = [
  {
    title: "Consumerism as Air We Breathe",
    problem: "Consumer culture is so pervasive it is nearly invisible. We don't feel like consumers — we feel like people making reasonable choices. The market has colonized desire: we want what we're told to want.",
    source: "James K. A. Smith's You Are What You Love: our desires are shaped by 'liturgies' — including shopping malls, advertising, and social media.",
    response: "Counter-liturgies: Sabbath, fasting, giving, community, gratitude practices. Naming consumerism as a spiritual problem, not just a financial one.",
  },
  {
    title: "Status and Identity in Possessions",
    problem: "Our possessions signal to others — and to ourselves — who we are. The house, the car, the brand of coffee shop, the phone model. Stripping possessions feels like stripping identity.",
    source: "Thorstein Veblen's 'conspicuous consumption' — possessions are social signals. For Christians, this is idolatry: deriving worth from things rather than from being loved by God.",
    response: "Anchoring identity in baptism and adoption. 'You are not what you own. You are whom you love.' Regular communion with the community of Christ recalibrates identity.",
  },
  {
    title: "Fear of Scarcity",
    problem: "Even wealthy people resist simplicity from fear: 'What if I need it someday?' Accumulation is often driven not by greed but by anxiety about the future.",
    source: "This is the logic Jesus explicitly names in Matthew 6:25-34 — 'Do not worry about your life... Look at the birds of the air.' The opposite of simplicity is often not greed but anxiety.",
    response: "Practicing trust. The spiritual discipline of giving specifically targets this: you prove to yourself that God provides when you give away what you feared losing.",
  },
  {
    title: "Social Pressure and Family Expectations",
    problem: "Simplicity is countercultural and can generate social friction. Choosing a smaller house, older car, and fewer vacations can feel like judgment to peers who have more. Family pressure ('you owe your kids a good life') is particularly powerful.",
    source: "Keeping up with the Joneses is real and sociologically documented — spending is contagious.",
    response: "Finding community of other people practicing simplicity. Books, groups, spiritual directors who share the value. Having an explicit family conversation about 'enough' and why the family is choosing it.",
  },
  {
    title: "Equating Simplicity With Poverty",
    problem: "Some people confuse voluntary simplicity with poverty and feel guilty enjoying anything — or conversely, reject simplicity as an offensive form of class tourism.",
    source: "This is a real confusion worth naming: simplicity chosen by the wealthy is very different from poverty forced on the poor.",
    response: "Distinguish voluntary simplicity (a spiritual discipline by the materially comfortable) from advocacy for the poor (justice work). Foster is clear: simplicity is not the same as poverty. The goal is freedom, not destitution. The fruit of simplicity should be greater generosity to those in genuine need.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ChristianSimplicityPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-simplicity_tab", "theology");
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<number>(0);
  const [openObstacle, setOpenObstacle] = useState<number | null>(null);

  const totalPractices = PRACTICE_CATEGORIES.reduce((sum, c) => sum + c.practices.length, 0);
  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology" },
    { id: "voices", label: "Voices" },
    { id: "practices", label: `${totalPractices} Practices` },
    { id: "obstacles", label: "Obstacles" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GREEN,
              marginBottom: 16,
            }}
          >
            Christian Spirituality
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              color: TEXT,
            }}
          >
            The Christian Practice of{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Simplicity
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: MUTED,
              maxWidth: 680,
            }}
          >
            Simplicity is not poverty. It is the freedom that comes from ordering
            your life around what matters most. Richard Foster called it{" "}
            <em>
              &ldquo;an inward reality that results in an outward lifestyle.&rdquo;
            </em>
          </p>
        </div>

        {/* ── Stats Banner ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "16px 18px",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 3,
                  borderRadius: 2,
                  background: i % 2 === 0 ? GREEN : PURPLE,
                  marginBottom: 10,
                }}
              />
              <p style={{ fontSize: 13, lineHeight: 1.5, color: TEXT, margin: 0 }}>
                {stat}
              </p>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                border:
                  activeTab === t.id
                    ? `1px solid ${GREEN}55`
                    : `1px solid ${BORDER}`,
                background:
                  activeTab === t.id
                    ? `${GREEN}18`
                    : "rgba(255,255,255,0.03)",
                color: activeTab === t.id ? GREEN : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            TAB 1 — THEOLOGY
        ══════════════════════════════════════════ */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {THEOLOGY_ITEMS.map((item, i) => {
              const isOpen = openTheology === i;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? PURPLE + "55" : BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button type="button"
                    onClick={() =>
                      setOpenTheology(isOpen ? null : i)
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
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
                          borderRadius: 8,
                          background: isOpen
                            ? `${PURPLE}22`
                            : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isOpen ? PURPLE + "44" : BORDER}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          color: isOpen ? PURPLE : MUTED,
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: isOpen ? TEXT : MUTED,
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        color: isOpen ? PURPLE : MUTED,
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      ›
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 22px 22px 60px",
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: MUTED,
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

        {/* ══════════════════════════════════════════
            TAB 2 — VOICES
        ══════════════════════════════════════════ */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left: teacher list */}
            <div
              style={{
                width: 220,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {TEACHERS.map((t, i) => (
                <button type="button"
                  key={i}
                  onClick={() => setSelectedTeacher(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: `1px solid ${selectedTeacher === i ? GREEN + "44" : BORDER}`,
                    background:
                      selectedTeacher === i
                        ? `${GREEN}10`
                        : CARD,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: selectedTeacher === i ? TEXT : MUTED,
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: selectedTeacher === i ? GREEN : "#5A5A78",
                      margin: "3px 0 0",
                    }}
                  >
                    {t.era}
                  </p>
                </button>
              ))}
            </div>

            {/* Right: sticky detail */}
            <div style={{ flex: 1, minWidth: 0, position: "sticky", top: 20 }}>
              {(() => {
                const t = TEACHERS[selectedTeacher];
                return (
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 16,
                      padding: 28,
                    }}
                  >
                    <div style={{ marginBottom: 20 }}>
                      <h2
                        style={{
                          fontSize: 22,
                          fontWeight: 900,
                          color: TEXT,
                          marginBottom: 4,
                        }}
                      >
                        {t.name}
                      </h2>
                      <p style={{ fontSize: 13, color: GREEN, margin: 0 }}>
                        {t.era} &middot; {t.keyWork}
                      </p>
                    </div>

                    <div
                      style={{
                        borderLeft: `3px solid ${PURPLE}`,
                        paddingLeft: 16,
                        marginBottom: 20,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 15,
                          fontStyle: "italic",
                          color: TEXT,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: PURPLE,
                          marginBottom: 6,
                        }}
                      >
                        Core Teaching
                      </p>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                        {t.coreTeaching}
                      </p>
                    </div>

                    <div
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        padding: "12px 16px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: GREEN,
                          marginBottom: 6,
                        }}
                      >
                        Practical Contribution
                      </p>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: MUTED, margin: 0 }}>
                        {t.practicalContribution}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            TAB 3 — PRACTICES
        ══════════════════════════════════════════ */}
        {activeTab === "practices" && (
          <div>
            <p style={{ fontSize: 14, color: MUTED, marginBottom: 24 }}>
              Thirty practices across six domains. A reference sheet for ordering
              life around what matters.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {PRACTICE_CATEGORIES.map((cat, ci) => (
                <div
                  key={ci}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: ci % 2 === 0 ? GREEN : PURPLE,
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: TEXT,
                        margin: 0,
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {cat.practices.map((practice, pi) => (
                      <li
                        key={pi}
                        style={{
                          display: "flex",
                          gap: 10,
                          paddingBottom: pi < cat.practices.length - 1 ? 10 : 0,
                          marginBottom: pi < cat.practices.length - 1 ? 10 : 0,
                          borderBottom:
                            pi < cat.practices.length - 1
                              ? `1px solid ${BORDER}`
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 800,
                            color: ci % 2 === 0 ? GREEN : PURPLE,
                            minWidth: 18,
                            marginTop: 2,
                          }}
                        >
                          {pi + 1}.
                        </span>
                        <span style={{ fontSize: 13, lineHeight: 1.6, color: MUTED }}>
                          {practice}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            TAB 4 — OBSTACLES
        ══════════════════════════════════════════ */}
        {activeTab === "obstacles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {OBSTACLES.map((obs, i) => {
              const isOpen = openObstacle === i;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? GREEN + "44" : BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button type="button"
                    onClick={() =>
                      setOpenObstacle(isOpen ? null : i)
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      padding: "18px 22px",
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
                          fontSize: 13,
                          fontWeight: 700,
                          color: isOpen ? TEXT : MUTED,
                        }}
                      >
                        {obs.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        color: isOpen ? GREEN : MUTED,
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      ›
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 22px 24px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        <div
                          style={{
                            background: "rgba(239,68,68,0.06)",
                            border: "1px solid rgba(239,68,68,0.15)",
                            borderRadius: 10,
                            padding: "12px 16px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 11,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "#EF4444",
                              marginBottom: 6,
                            }}
                          >
                            Problem
                          </p>
                          <p style={{ fontSize: 14, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                            {obs.problem}
                          </p>
                        </div>

                        <div
                          style={{
                            background: `${PURPLE}0D`,
                            border: `1px solid ${PURPLE}22`,
                            borderRadius: 10,
                            padding: "12px 16px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 11,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: PURPLE,
                              marginBottom: 6,
                            }}
                          >
                            Source
                          </p>
                          <p style={{ fontSize: 14, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                            {obs.source}
                          </p>
                        </div>

                        <div
                          style={{
                            background: `${GREEN}0A`,
                            border: `1px solid ${GREEN}22`,
                            borderRadius: 10,
                            padding: "12px 16px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 11,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: GREEN,
                              marginBottom: 6,
                            }}
                          >
                            Response
                          </p>
                          <p style={{ fontSize: 14, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                            {obs.response}
                          </p>
                        </div>
                      </div>
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on simplicity, spiritual disciplines, and freedom from materialism.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "PqAiVyBwsog", title: "Celebration of Discipline: The Path to Spiritual Growth", channel: "Dr. Richard J. Foster", description: "Richard Foster's foundational teaching on spiritual disciplines including simplicity — the full documentary film." },
                  { videoId: "D3724f98vkI", title: "Simplicity — Celebration of Discipline Curriculum", channel: "Richard Foster", description: "Richard Foster specifically on the spiritual discipline of simplicity: what it is, why it matters, and how to practice it." },
                  { videoId: "cYHDDeuqcoU", title: "Spiritual Discipline: Door to Liberation", channel: "Richard Foster", description: "Foster on how spiritual disciplines free us from ingrained habits of sin and possessiveness that keep us from knowing true joy." },
                  { videoId: "vT4XMSgD2_w", title: "David Platt & John Piper — Materialism of Our Hearts", channel: "Desiring God", description: "David Platt and John Piper on how materialism quietly corrupts the Christian heart — and what simplicity as a spiritual discipline looks like in practice." },
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
      </main>
      <Footer />
    </div>
  );
}
