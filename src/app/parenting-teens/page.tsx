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

type Tab = "theology" | "stages" | "conversations" | "leavingwell" | "videos";

const theologyItems = [
  {
    id: "calling",
    title: "Parenting Teenagers Is Not Parenting Children",
    content:
      "Everything that worked in childhood must be renegotiated in adolescence. The authority structure shifts. The relational currency changes. The goals — which in childhood centered on obedience and formation — now center on preparing a person to step into their own faith, their own conscience, their own life. This is not a failure of the parent-child relationship. It is its fulfillment. The Hebrew Bible marks the transition of young men into adult responsibility with Bar Mitzvah — 'son of the commandment.' The point is not control but formation toward adult ownership. Parents who fail to make this shift often win battles and lose the relationship — and the child.",
  },
  {
    id: "goal",
    title: "The Goal of Parenting Teenagers",
    content:
      "The goal is not a teenager who behaves well in your home. The goal is a young adult who has internalized the values, faith, and relational patterns that will sustain them when they leave. Kara Powell and Brad Griffin of the Fuller Youth Institute identify three factors that predict whether young people retain their faith after leaving home: (1) warm relationships with adults who were honest about their own struggles; (2) a sense of having a significant role in the community of faith; (3) having been given space to ask hard questions without being shut down. These three things require a different kind of parenting than the command-and-control model of childhood.",
  },
  {
    id: "identity",
    title: "Adolescent Identity Formation",
    content:
      "Erik Erikson identified adolescence as the stage of 'identity vs. role confusion' — the developmental task is forming a coherent self. This process involves experimentation, questioning received values, testing authority, and trying on identities. For Christian teenagers, this includes spiritual identity: Is my faith mine or merely inherited? What do I actually believe? These questions are healthy — faith that has not been tested is fragile. The parent's task is to be a secure base from which the teenager can explore without fear of abandonment. This means staying in relationship even when the teenager is pushing against everything you believe.",
  },
  {
    id: "faith",
    title: "Faith Transmission vs. Faith Formation",
    content:
      "Research by Christian Smith and Melinda Lundquist Denton (Soul Searching: The Religious and Spiritual Lives of American Teenagers, 2005) found that most American teenagers who claimed to be Christian actually held something Smith called 'Moralistic Therapeutic Deism': God exists, wants people to be good and feel good, and is not particularly involved unless needed. This is not historic Christianity. Faith transmission passes information; faith formation produces a person whose whole life is oriented around Jesus. The difference is in the depth of relationship: teenagers need adults who are genuinely, vulnerably living out faith — not performing it.",
  },
  {
    id: "conflict",
    title: "Conflict as Discipleship Opportunity",
    content:
      "The most significant discipleship conversations with teenagers often happen inside conflict, not at planned devotional times. When a 16-year-old is furious about a boundary or questioning something you believe, the way you respond is the most powerful formation that can happen. Do you shut down dissent? Do you engage their question with intellectual honesty? Do you model humility — acknowledging when you don't know the answer? Do you stay in the relationship even when they are being unreasonable? James 1:19-20: 'Everyone should be quick to listen, slow to speak, slow to anger.' This is parenting teenagers in one verse.",
  },
  {
    id: "culture",
    title: "The Digital Formation of Teenagers",
    content:
      "Jonathan Haidt's The Anxious Generation (2024) documents the devastating impact of smartphones and social media on adolescent mental health since 2012, particularly for girls. Constant social comparison, algorithmic amplification of anxiety and outrage, chronic sleep deprivation from late-night phone use, and the replacement of embodied relationship with virtual performance have produced record levels of teenage depression, anxiety, and loneliness. Christian parents must engage this not merely as a behavioral issue ('less screen time') but as a spiritual-formation issue: algorithms are discipling our children toward what they want. The question is: will we disciple them more intentionally than the algorithm does?",
  },
];

type Stage = {
  id: string;
  age: string;
  label: string;
  description: string;
  parentTask: string;
  pitfall: string;
  resources: string[];
};

const stages: Stage[] = [
  {
    id: "early",
    age: "Ages 12–14",
    label: "Early Adolescence",
    description:
      "Physical puberty, brain remodeling, intense peer orientation, beginning to differentiate from parents. Still largely home-based but beginning to test limits. Friendships become paramount. Emotional volatility is neurological, not merely attitudinal — the prefrontal cortex (decision-making) is under construction until age 25.",
    parentTask:
      "Stay close without being controlling. Ask questions rather than lecture. Begin transitioning from directive to coaching. Be interested in their world — friends, music, games — without performing enthusiasm. This is the last season when daily closeness is still natural.",
    pitfall:
      "Treating early adolescent behavior (emotional storms, embarrassment at parents, peer obsession) as rebellion requiring suppression rather than development requiring accompaniment.",
    resources: [
      "Age of Opportunity — Paul David Tripp (P&R, 2001)",
      "The Teenage Brain — Frances E. Jensen (HarperCollins)",
      "Sticky Faith — Kara Powell & Chap Clark (Zondervan)",
    ],
  },
  {
    id: "middle",
    age: "Ages 14–16",
    label: "Middle Adolescence",
    description:
      "Peak risk-taking, identity exploration, and parental conflict. Peer relationships intensify. Romantic interests emerge. Questions about faith, sexuality, politics, and vocation surface. The teenage brain is wired for novelty and reward — impulsivity is real, not merely willful. 80% of significant adult decisions will be shaped by what happens in this window.",
    parentTask:
      "Maintain the relationship at all costs — a teenager who is still talking to you is reachable. Choose your battles: not every battle is worth fighting. Be a 'secure base' from which they can explore and return. Introduce them to other trustworthy adults (youth pastor, mentor, family friends) who can speak into their life.",
    pitfall:
      "Escalating conflict over secondary issues (hair, music, clothes) while losing the relationship over primary ones (faith, character, safety). Choosing correctness over connection.",
    resources: [
      "Hurt 2.0 — Chap Clark (Baker Academic)",
      "Parenting Teens with Love and Logic — Foster Cline & Jim Fay",
      "Almost Christian — Kenda Creasy Dean (Oxford University Press)",
    ],
  },
  {
    id: "late",
    age: "Ages 16–18",
    label: "Late Adolescence",
    description:
      "Preparation for launch. College/career decisions, first serious relationships, increasing autonomy. Brain development continues but capacity for long-term planning improves. Many teenagers begin adult responsibility (jobs, driving, financial management) in this window. Faith questions crystallize: Am I a Christian on my own or only because of my family?",
    parentTask:
      "Shift explicitly from parent-as-authority to parent-as-coach. Let natural consequences teach where possible. Have honest, adult conversations about sexuality, vocation, money, and faith. Begin the 'leaving well' process (see next tab). Practice listening more than speaking.",
    pitfall:
      "Failing to release — maintaining childhood rules for a near-adult; treating their legitimate adult decisions as rebellious; not preparing them practically for independence.",
    resources: [
      "Farewell to School — Mark DeVries",
      "Faith for Exiles — David Kinnaman & Mark Matlock (Baker)",
      "The Anxious Generation — Jonathan Haidt (Penguin Press, 2024)",
    ],
  },
];

const conversations = [
  {
    id: "faith",
    topic: "Faith and Doubt",
    color: "#6B4FBB",
    opener: "Have you been thinking about any questions about God or faith that you haven't been able to ask?",
    principles: [
      "Don't panic at doubt — treat it as the beginning of owned faith, not the end of inherited faith",
      "Be honest about your own doubts and struggles: 'I've wrestled with that too'",
      "Distinguish between intellectual questions (which need honest engagement) and moral objections (which need a different conversation)",
      "Point to people who have worked through similar questions: C.S. Lewis, Tim Keller, Francis Collins",
      "End with connection, not verdict: 'I'm glad you're thinking about this. Let's keep talking.'",
    ],
  },
  {
    id: "sexuality",
    topic: "Sexuality and Dating",
    color: "#EF4444",
    opener: "I want us to be able to talk about relationships and sexuality honestly. I know it can be awkward, but I'd rather you hear this from me.",
    principles: [
      "Have the conversation before the crisis, not during it",
      "Affirm the goodness of sexuality as God's gift — don't lead with prohibition",
      "Be honest about the emotional and relational costs of sexual activity outside marriage",
      "If they tell you something hard, stay in the room — reactive anger closes the door permanently",
      "For LGBTQ+ questions: lead with love, listen before you respond, know that the conversation is usually about more than theology",
    ],
  },
  {
    id: "mentalhealth",
    topic: "Mental Health and Anxiety",
    color: "#F59E0B",
    opener: "I've noticed you seem stressed lately. I'm not going to fix anything — I just want to listen. How are you actually doing?",
    principles: [
      "Take mental health struggles seriously — anxiety and depression are not spiritual failures",
      "Don't spiritualize or dismiss: 'Just pray more' is not the complete answer",
      "Distinguish between normal adolescent emotional turbulence and clinical distress requiring professional help",
      "Know warning signs of serious depression or suicidal ideation — and act immediately if present",
      "Normalize therapy: 'We go to doctors for physical health; a counselor helps with emotional health'",
    ],
  },
  {
    id: "screens",
    topic: "Technology and Screens",
    color: "#10B981",
    opener: "I've been reading about how smartphones are affecting teenagers, and I'm genuinely worried. Can we figure this out together?",
    principles: [
      "Collaborative rather than imposed rules work better for teenagers — involve them in creating agreements",
      "Focus on the 'why' behind the boundary, not just the rule: 'Research shows sleep deprivation from phones causes depression'",
      "Model the limits you're asking for — teenagers see exactly when you're on your phone",
      "Distinguish addictive use (scrolling, social media) from productive use (creative work, communication, learning)",
      "No phones in bedrooms at night is the single most impactful rule — enforce it for the whole family",
    ],
  },
  {
    id: "vocation",
    topic: "Calling and Vocation",
    color: "#3B82F6",
    opener: "I'm not going to tell you what to do with your life — but I'd love to help you think through it. What's interesting to you lately?",
    principles: [
      "Ask about gifts and interests, not just career tracks",
      "Don't project your own vocational aspirations or disappointments onto them",
      "Help them see that vocation is about more than a job — it's about what they're made for and who they want to serve",
      "Introduce them to people working in fields they're interested in",
      "Be honest about your own vocational journey — including dead ends and pivots",
    ],
  },
  {
    id: "mistakes",
    topic: "When They Make Serious Mistakes",
    color: "#EC4899",
    opener: "I want you to know that whatever happened, and whatever you did, you can always come to me. I'm your parent before I'm your judge.",
    principles: [
      "Stay in the room — the first reaction to a confession determines whether they'll ever tell you the hard things again",
      "Separate consequence from condemnation: natural consequences should apply, but your love is unconditional",
      "Ask more than you tell: 'What were you thinking? What do you wish you'd done differently?'",
      "Bring grace explicitly: 'This is what Jesus died for. You're forgiven.'",
      "Don't catastrophize: most teenage mistakes are recoverable; treat them as such",
    ],
  },
];

const leavingwellItems = [
  {
    id: "whatis",
    title: "What 'Leaving Well' Means",
    content:
      "Leaving well means that your teenager enters adulthood with: (1) a faith that is genuinely their own, not just inherited compliance; (2) the relational skills to sustain meaningful relationships without you managing them; (3) the practical competence to live independently; (4) a clear sense of your unconditional love, regardless of their choices. Leaving well is a multi-year project, not a graduation event. The Fuller Youth Institute's 'Sticky Faith' research shows that young people who stay in faith through their 20s had parents who talked openly about faith struggles, involved them meaningfully in church community, and maintained warm relationships through conflict.",
  },
  {
    id: "practical",
    title: "Practical Launch Skills",
    content:
      "Many teenagers leave home without basic adulting skills: cooking real meals, managing a bank account, doing laundry, filing taxes, scheduling medical appointments, navigating conflict without a parent as mediator. Use the 16-18 window intentionally: (1) Teach a new 'adult skill' every month (cook one recipe, change a tire, balance a checkbook). (2) Gradually transfer responsibility for their own schedule, appointments, and finances. (3) Let them fail at low-stakes things while you're still present to help them process it. (4) Talk about money explicitly: credit card debt, how rent works, the difference between needs and wants.",
  },
  {
    id: "faith_launch",
    title: "Launching Their Faith",
    content:
      "Teenagers who enter college connected to a campus ministry are significantly more likely to retain faith than those who arrive with no plan. Have an explicit conversation in the last year of high school: 'When you get to college, how will you stay connected to Christian community?' Research InterVarsity, Cru, Reformed University Fellowship, Campus Crusade, Athletes in Action, and other campus ministries at the schools on their list. Visit the campus ministry chapter during college visits. Pray for them by name in their hearing. Give them a Bible with handwritten notes in the margins.",
  },
  {
    id: "relationship",
    title: "The Relationship After Launch",
    content:
      "Many parents experience launch as loss — and it is. But it is also graduation. Your relationship does not end; it transforms. The goal is adult friendship: a relationship characterized by mutual respect, honest conversation, and genuine interest in each other's lives — not obligation or obligation-avoidance. Practical steps: (1) Ask what level of contact they want — don't assume. (2) Learn to give advice only when asked. (3) Show genuine curiosity about their new world (their friends, their work, their spiritual life) without interrogating. (4) Keep showing up: cards, small gifts, quick texts that say 'I'm thinking of you.' (5) Pray for them daily — and tell them you do.",
  },
  {
    id: "prodigal",
    title: "When They Walk Away",
    content:
      "Some teenagers leave home and leave faith. Some make catastrophic choices. The parable of the prodigal son (Luke 15) is the irreplaceable guide: a father who lets the son go, who watches for him daily while he is gone, and who runs to meet him while he is still 'a great way off.' Keep the door open. Don't require repentance as the price of relationship. Maintain honest communication — which sometimes means saying 'I love you too much to pretend I'm not worried about the choices you're making.' The father's love was not conditional — but neither did he chase the prodigal into the far country. He stayed home and waited.",
  },
  {
    id: "prayer",
    title: "Praying for Teenagers",
    content:
      "Nothing replaces prayer. Pray Ephesians 1:17-19 for them by name: 'That the God of our Lord Jesus Christ, the Father of glory, may give you a spirit of wisdom and of revelation in the knowledge of him, having the eyes of your hearts enlightened, that you may know what is the hope to which he has called you.' Pray Colossians 1:9-10: 'That you may be filled with the knowledge of his will in all spiritual wisdom and understanding, so as to walk in a manner worthy of the Lord.' Consider keeping a prayer journal specifically for your teenager — it will be the most precious document in your possession when they are grown.",
  },
];

export default function ParentingTeensPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_parenting-teens_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedStage, setSelectedStage] = useState<Stage>(stages[0]);
  const [openConversation, setOpenConversation] = useState<string | undefined>(undefined);

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["👨‍👩‍👦 Family", "🧑 Teenagers"].map((tag) => (
            <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 13, color: MUTED }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Parenting Teenagers
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 680 }}>
          Parenting a teenager is one of the most spiritually demanding callings a person can receive. The goal is not a compliant teenager but a launched adult with owned faith, relational health, and the knowledge that they are unconditionally loved.
        </p>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { num: "64%", label: "Young adults who attended church as teens are no longer attending" },
            { num: "3", label: "Factors that predict faith retention (warm adults, role, hard questions allowed)" },
            { num: "#1", label: "Jesus warned about wealth/possessions more than any other topic" },
            { num: "25", label: "Age the prefrontal cortex is fully developed" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{stat.num}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {(
            [
              { id: "theology", label: "Theology & Framework" },
              { id: "stages", label: `${stages.length} Adolescent Stages` },
              { id: "conversations", label: "Hard Conversations" },
              { id: "leavingwell", label: "Launching Well" },
              { id: "videos", label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}18` : CARD,
                color: tab === t.id ? GREEN : MUTED,
                fontWeight: tab === t.id ? 700 : 400,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Theological Framework for Parenting Teenagers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {theologyItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Three Stages */}
        {tab === "stages" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>The Three Stages of Adolescence</h2>
            <div style={{ display: "flex", gap: 24 }}>
              {/* Left: stage buttons */}
              <div style={{ flex: "0 0 160px", display: "flex", flexDirection: "column", gap: 10 }}>
                {stages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStage(s)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: `1px solid ${selectedStage.id === s.id ? GREEN : BORDER}`,
                      background: selectedStage.id === s.id ? `${GREEN}18` : CARD,
                      color: selectedStage.id === s.id ? GREEN : TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      fontWeight: selectedStage.id === s.id ? 700 : 400,
                      fontSize: 14,
                    }}
                  >
                    {s.label}
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{s.age}</div>
                  </button>
                ))}
              </div>

              {/* Right: stage detail */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, position: "sticky", top: 24, alignSelf: "flex-start" }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 4px", color: GREEN }}>{selectedStage.label}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{selectedStage.age}</div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>What's Happening</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{selectedStage.description}</p>
                </div>

                <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "12px 16px", marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>Your Task as Parent</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedStage.parentTask}</p>
                </div>

                <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
                  <div style={{ color: "#EF4444", fontSize: 12, marginBottom: 6 }}>Common Pitfall</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedStage.pitfall}</p>
                </div>

                <div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Recommended Resources</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {selectedStage.resources.map((r) => (
                      <li key={r} style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 4 }}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Hard Conversations */}
        {tab === "conversations" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Having the Hard Conversations</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>
              The conversations you avoid are the ones your teenager most needs you to have. Here are guides to {conversations.length} of the most important.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {conversations.map((conv) => (
                <div key={conv.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenConversation(openConversation === conv.id ? undefined : conv.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: conv.color, flexShrink: 0 }} />
                      {conv.topic}
                    </div>
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{openConversation === conv.id ? "−" : "+"}</span>
                  </button>
                  {openConversation === conv.id && (
                    <div style={{ padding: "0 20px 20px" }}>
                      <div style={{ background: `${conv.color}18`, border: `1px solid ${conv.color}44`, borderRadius: 8, padding: "12px 16px", marginBottom: 16 }}>
                        <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>Conversation Opener</div>
                        <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>"{conv.opener}"</p>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Key Principles</div>
                      <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                        {conv.principles.map((p) => (
                          <li key={p} style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 6 }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Launching Well */}
        {tab === "leavingwell" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Launching Your Teenager Well</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {leavingwellItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
                  { videoId: "NfwOd9mbL3U", title: "Become a Little Child", channel: "Tim Keller / Redeemer Presbyterian", description: "Keller on Jesus's radical teaching about children and the Kingdom — a theological foundation for understanding why parenting teenagers toward genuine faith is one of the most important callings." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Tim Keller / Gospel Coalition", description: "Tim Keller on how the Kingdom of God overturns worldly values — including what we believe about success, achievement, and what we most want for our teenagers." },
                  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God — not duty or performance — produces genuine obedience. Speaks to the difference between external compliance and internal transformation in teenagers." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Francis Chan on what it looks like for faith to be real and simple — the kind of faith you hope your teenager will own for themselves as they launch into adult life." },
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
