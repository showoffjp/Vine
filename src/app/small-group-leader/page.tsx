"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "leading" | "problems" | "resources";

const theologyPoints = [
  {
    title: "The Small Group Is Not a Program — It Is the Church",
    content: "The New Testament knows nothing of the spectator-consumer church model. The 'one another' commands of the New Testament (love one another, confess to one another, bear one another's burdens, pray for one another — at least 59 such commands) are impossible to fulfill in a Sunday morning auditorium. They require proximity, sustained relationship, and mutual knowledge. The small group is not a supplement to the church; in many respects it is where church actually happens."
  },
  {
    title: "The Leader Is a Shepherd, Not a Teacher",
    content: "The small group leader's primary job is not to deliver excellent Bible content — it is to shepherd people. This means: knowing who is struggling, following up on what was shared, noticing who is quiet, challenging those who are growing comfortable, celebrating progress, and creating the conditions for honest community. The leader who prepares excellent questions but never contacts members between meetings has confused the job."
  },
  {
    title: "Vulnerability Is the Currency of Genuine Community",
    content: "Patrick Lencioni (The Five Dysfunctions of a Team) and Brené Brown (from a secular perspective) have both documented what the New Testament assumes: community requires vulnerability. The group that never goes below the surface — that discusses theology without confession, that shares prayer requests without real pain — is producing a social club, not a body of Christ. The leader's vulnerability comes first; it gives others permission."
  },
  {
    title: "Mission Prevents the Group from Becoming Inward",
    content: "Every healthy small group should have an 'empty chair' — a place for someone not yet in the group. Groups that turn inward, becoming comfortable circles of like-minded friends, are dying even when they feel healthy. Mission can be as simple as praying weekly for unchurched neighbors, serving together monthly, or intentionally inviting someone new each semester. The outward orientation keeps the gospel central."
  },
  {
    title: "The Small Group Is Not a Counseling Session",
    content: "Groups can become unhealthily counseling-focused when one member's crises dominate every meeting, when the leader lacks the tools to redirect, or when the culture of the group rewards being a victim over growing in faith. Genuine community includes lament and support — but it also includes laughter, celebration, Bible study, and mission. A leader must hold the tension between pastoral care and forward movement."
  },
  {
    title: "Multiplication Is the Mark of Health",
    content: "A small group that never multiplies is eventually dying. Healthy groups raise up new leaders from within, launch daughter groups, and over years produce a network of discipleship. This requires that leaders identify, train, and deploy the next generation of leaders — ideally giving significant leadership to an apprentice within 18 months of the group's launch. The goal is not a permanent group; it is a permanently reproducing culture."
  }
];

const leadingSkills = [
  {
    skill: "Opening Well",
    color: "#10B981",
    desc: "The first 10-15 minutes set the emotional temperature. A connecting question (not a devotional opener) breaks ice, invites everyone in, and signals: this is a safe place.",
    examples: [
      "What's been the high and low of your week?",
      "What are you most looking forward to this month?",
      "What's one thing you're grateful for right now?",
      "If you could be anywhere in the world this week, where would you be?"
    ],
    tip: "Never skip the opener to 'get more time for Bible study.' The relationship IS the study."
  },
  {
    skill: "Asking Great Questions",
    color: "#8B5CF6",
    desc: "The leader's primary tool. Great questions are open-ended, invite personal application, and create space for honest responses.",
    examples: [
      "Observation: 'What stands out to you in this passage?'",
      "Interpretation: 'Why do you think the author says it this way?'",
      "Application: 'Where does this challenge you personally?'",
      "Prayer: 'What would it look like to pray this passage back to God?'"
    ],
    tip: "After asking a question, wait. Silence is not awkward — it is the group thinking. Don't answer your own questions."
  },
  {
    skill: "Managing the Dominant Voice",
    color: "#EF4444",
    desc: "Every group has one: the person who speaks first, longest, and most often. Left unchecked, they will silence others and own the group's culture.",
    examples: [
      "Use body language: make eye contact with others before the dominant voice",
      "'Great point, John. Sarah, what do you think?'",
      "Create a go-around: 'Let's hear from everyone on this one'",
      "Speak privately after the meeting: 'I love your passion. Can you help me draw others out?'"
    ],
    tip: "Never publicly embarrass a dominant voice — they often don't know they're doing it. A private, kind conversation works best."
  },
  {
    skill: "Drawing Out the Quiet",
    color: "#F59E0B",
    desc: "Quiet members are not uninvolved — they are often the deepest thinkers. They need an explicit invitation, not just an open room.",
    examples: [
      "Direct invitation: 'Maria, you've been listening well — any thoughts?'",
      "Processing question: 'What's one word that comes to mind for you?'",
      "Written response: 'Take 2 minutes to write your answer, then we'll share'",
      "Smaller circles: break into pairs for 5 minutes before group sharing"
    ],
    tip: "Some people need to process before they speak. Give time. Don't rush the silence."
  },
  {
    skill: "Handling Conflict",
    color: "#DC2626",
    desc: "Conflict in a small group is not failure — it is an opportunity for Christlike community. The leader who avoids conflict is not keeping peace; they are avoiding growth.",
    examples: [
      "Name what's happening: 'I sense there's some tension here. Let's slow down.'",
      "Reframe around the text: 'Let's let the Scripture speak to this question'",
      "Use curiosity: 'Help me understand your concern better'",
      "Meet privately when needed: some conflicts need a shepherd's visit, not a group intervention"
    ],
    tip: "The leader who never addresses conflict is actually choosing sides — in favor of the status quo and against those being hurt by it."
  },
  {
    skill: "Closing and Following Up",
    color: "#3B82F6",
    desc: "The 5 minutes after the official closing are often the most important. Who is lingering? Who needs a conversation? What did you notice?",
    examples: [
      "Close with shared prayer — go around, each person prays one sentence",
      "Write down what people shared to follow up during the week",
      "Text members during the week: 'How's the thing you mentioned Monday?'",
      "Celebrate answered prayer at the next meeting — keep a prayer log"
    ],
    tip: "The leader who follows up between meetings creates the culture of genuine care. The one who only shows up on meeting night creates a social club."
  }
];

const problems = [
  {
    problem: "No One Is Being Honest",
    color: "#EF4444",
    desc: "The group gives Christian-sounding answers but never shares real struggle. Prayer requests are shallow. No one admits sin or doubt.",
    causes: "Leader not modeling vulnerability; culture of performance; group too large; unspoken shame",
    solutions: [
      "Leader goes first — share a real struggle before asking others",
      "Break into same-gender pairs for 10 minutes each meeting",
      "Use 'low/high' practice consistently — it normalizes difficulty",
      "Teach explicitly on the gift of community and the practice of confession"
    ]
  },
  {
    problem: "One Person Dominates",
    color: "#F59E0B",
    desc: "One member consistently speaks more than others, answers questions before others can, or redirects conversations to themselves.",
    causes: "Natural personality; unmet need for attention; leader not managing the space; no established group norms",
    solutions: [
      "Private conversation: warm, direct, focused on the group's good",
      "Build in structural safeguards: go-arounds, pairs, written response",
      "Establish group norms at the beginning: 'We want everyone's voice'",
      "Ask the person to help draw others out: convert the problem into a resource"
    ]
  },
  {
    problem: "The Group Is Dying",
    color: "#6B7280",
    desc: "Attendance is declining, energy is low, conversations feel tired, and no one seems to care about growing anymore.",
    causes: "Group too old (closed membership); mission missing; no vision for multiplication; pastoral neglect of individuals",
    solutions: [
      "Open the group to new members immediately — fresh faces bring energy",
      "Add a mission element: serve together, invite someone new",
      "Ask the hard question: 'What would make this group something we couldn't miss?'",
      "Consider a gracious ending and re-launch with a different purpose"
    ]
  },
  {
    problem: "The Bible Study Goes Nowhere",
    color: "#8B5CF6",
    desc: "Discussions wander, land nowhere, produce no change. People enjoy the fellowship but aren't growing in the Word.",
    causes: "Questions too vague; no application; discussion without accountability; curriculum mismatched to group",
    solutions: [
      "End each study with one specific, personal application question",
      "Use SOAP or similar structure: Scripture, Observation, Application, Prayer",
      "Follow up in the next meeting: 'Last week you said you were going to... how did that go?'",
      "Switch curriculum if it's not working — no curriculum is sacred"
    ]
  },
  {
    problem: "The Group Has Become a Counseling Session",
    color: "#DC2626",
    desc: "One or two members' ongoing crises dominate every meeting. Others are exhausted and feel they can't bring their own needs.",
    causes: "Unmet clinical needs misplaced into group; leader lack of boundaries; group culture of crisis-absorption",
    solutions: [
      "Gently refer the person to a counselor or pastor for their primary care",
      "Rebuild group structure: open with lighter question, protect study time",
      "Speak privately: 'I love caring for you. I also need to shepherd the whole group.'",
      "Establish session rhythm that prevents any single issue from owning the time"
    ]
  }
];

const resources = [
  {
    title: "Community",
    author: "Brad House",
    type: "Theology / Practical",
    desc: "Mars Hill's lead small groups pastor wrote the definitive evangelical theology and practice of small group ministry. Covers the 'why' with biblical depth and the 'how' with practical wisdom. One of the best starting points for any small group leader.",
    url: ""
  },
  {
    title: "Leading Small Groups with Purpose",
    author: "Steve Gladen",
    type: "Practical Guide",
    desc: "Saddleback's small groups pastor provides a comprehensive how-to. Strong on practical skills: leading discussion, handling problems, multiplying groups, and connecting groups to the church's overall mission. Accessible and actionable.",
    url: ""
  },
  {
    title: "The Lifegiving Small Group",
    author: "Bill Search",
    type: "Practical Guide",
    desc: "A practical guide to building groups where genuine community happens — not just information transfer. Strong on relational dynamics, vulnerability, and creating a culture of grace.",
    url: ""
  },
  {
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    type: "Leadership (Secular)",
    desc: "While written for corporate teams, Lencioni's framework (trust, conflict, commitment, accountability, results) maps almost perfectly onto small group dynamics. The base of trust through vulnerability is the most useful insight for small group leaders.",
    url: ""
  },
  {
    title: "SmallGroups.com",
    author: "Christianity Today",
    type: "Online Resource",
    desc: "A comprehensive online platform with discussion questions, curriculum, leader training, and articles on small group ministry. Christianity Today's most practical ongoing resource for group leaders.",
    url: "https://www.smallgroups.com"
  },
  {
    title: "3DM Huddles",
    author: "Mike Breen",
    type: "Discipleship Model",
    desc: "Breen's huddle model of small group discipleship (Jesus-style investment in 8-12 people) provides a framework for moving from discussion to genuine apostolic formation. The most demanding and fruitful model for those serious about making disciples.",
    url: "https://3dmovements.com"
  }
];

export default function SmallGroupLeaderPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedSkill, setSelectedSkill] = useState(leadingSkills[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Community" },
    { id: "leading", label: "Leading Skills" },
    { id: "problems", label: "Common Problems" },
    { id: "resources", label: "Resources" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 40, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#000", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            LEAD YOUR GROUP
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Small Group Leader Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            The New Testament's 'one another' commands are impossible to fulfill in a Sunday auditorium. Small groups are where the church actually happens — and leading them well is a sacred calling.
          </p>
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
              Understanding what a small group actually is — theologically — transforms how you lead it. It is not a program; it is the church doing what the church exists to do.
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

        {/* Leading Skills */}
        {activeTab === "leading" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {leadingSkills.map(s => (
                  <div
                    key={s.skill}
                    onClick={() => setSelectedSkill(s)}
                    style={{
                      background: selectedSkill.skill === s.skill ? s.color + "22" : CARD,
                      border: `2px solid ${selectedSkill.skill === s.skill ? s.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>{s.skill}</div>
                    <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{s.desc.substring(0, 80)}…</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: selectedSkill.color }}>{selectedSkill.skill}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{selectedSkill.desc}</p>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>PRACTICAL EXAMPLES</div>
              {selectedSkill.examples.map((ex, i) => (
                <div key={i} style={{ background: BG, borderRadius: 6, padding: "8px 12px", marginBottom: 6, fontSize: 12, color: MUTED }}>
                  {ex}
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginTop: 12 }}>
                <span style={{ fontSize: 11, color: PURPLE, fontWeight: 700 }}>TIP: </span>
                <span style={{ fontSize: 12, color: MUTED }}>{selectedSkill.tip}</span>
              </div>
            </div>
          </div>
        )}

        {/* Problems */}
        {activeTab === "problems" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {problems.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ borderLeft: `4px solid ${p.color}`, padding: "20px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800 }}>{p.problem}</h3>
                    <button
                      onClick={() => toggle(`prob-${i}`)}
                      style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT, padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
                    >
                      {expanded[`prob-${i}`] ? "Hide" : "Solutions"}
                    </button>
                  </div>
                  <p style={{ margin: "0 0 8px", color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ fontSize: 12, color: MUTED }}>
                    <strong style={{ color: "#F59E0B" }}>Common causes: </strong>{p.causes}
                  </div>
                  {expanded[`prob-${i}`] && (
                    <div style={{ marginTop: 16 }}>
                      <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginBottom: 8 }}>SOLUTIONS</div>
                      {p.solutions.map((s, j) => (
                        <div key={j} style={{ background: BG, borderRadius: 6, padding: "8px 12px", marginBottom: 6, display: "flex", gap: 8 }}>
                          <div style={{ color: GREEN, flexShrink: 0, fontWeight: 700 }}>→</div>
                          <div style={{ fontSize: 12, color: MUTED }}>{s}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
