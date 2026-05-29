"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "history" | "practice" | "objections";

const theologyPoints = [
  {
    title: "Sabbath Is Woven Into Creation",
    content: "Genesis 2:2-3: God rested on the seventh day and declared it holy. This is not a concession to divine fatigue — it is a pattern embedded in the structure of creation itself. The rhythm of six-and-one is woven into reality before the Fall, before Sinai, before Israel. Sabbath is not primarily a law; it is a gift. The Creator himself stopped and declared cessation holy."
  },
  {
    title: "The Fourth Commandment Has Two Rationales",
    content: "Exodus 20:11 grounds sabbath in creation: 'For in six days the Lord made the heavens and the earth... therefore the Lord blessed the Sabbath day and made it holy.' Deuteronomy 5:15 grounds it in redemption: 'Remember that you were slaves in Egypt and that the Lord your God brought you out.' Both are true for the Christian: we rest because God rested at creation, and we rest because we are no longer slaves — to work, to productivity, to anxiety."
  },
  {
    title: "Jesus Is Lord of the Sabbath",
    content: "Mark 2:27-28: 'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath.' Jesus does not abolish sabbath — he fulfills and reframes it. He heals on the Sabbath (John 5, Mark 3) to show that sabbath is about restoration, not mere cessation. Colossians 2:16-17 teaches that the Jewish sabbath regulations were 'a shadow of things to come; but the substance belongs to Christ.' Christ is our true rest."
  },
  {
    title: "Hebrews 4: The Deeper Sabbath",
    content: "Hebrews 4:9-11: 'There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their own work, just as God did from his. Let us, therefore, make every effort to enter that rest.' The sabbath points beyond itself to the eschatological rest — the final new creation. Christians who observe a day of rest are practicing eschatology: tasting in time the rest that is coming eternally."
  },
  {
    title: "The Christian Sunday Is Not Identical to the Jewish Sabbath",
    content: "The New Testament church gathered on the first day of the week (Acts 20:7; 1 Corinthians 16:2; Revelation 1:10 — 'the Lord's Day') in celebration of the resurrection. Sunday is not 'the Christian Sabbath' in a strict sense — but it carries sabbath resonance: cease from ordinary labor, gather with the community, worship, rest. The Westminster Confession (XXI.7-8) argues for Sunday as the Christian Sabbath; others (Continental Reformed, Lutherans) distinguish the day of worship from the sabbath principle."
  },
  {
    title: "Rest Is an Act of Faith and Defiance",
    content: "In a productivity-obsessed culture, stopping is radical. The person who rests on the Sabbath is confessing: the world does not depend on me. God does not need my frantic labor to sustain reality. I trust that enough work was done in six days. Abraham Joshua Heschel (The Sabbath): 'The Sabbath is a day of rest, not of withdrawal from the world, but of elevation above it.' The sabbath-keeper is a living protest against the lie that we are what we produce."
  }
];

const historicalDebate = [
  {
    position: "Seventh-Day Sabbatarianism",
    color: "#6B7280",
    tradition: "Seventh-Day Adventists, some messianic Jewish groups",
    claim: "The fourth commandment requires Saturday observance and has never been abrogated. Sunday observance is a human tradition, not biblical.",
    strength: "Takes the continuity of moral law seriously; aligns with the explicit OT commandment day.",
    weakness: "Does not fully reckon with the Hebrews 4 trajectory and the NT pattern of first-day resurrection-celebration.",
    keyText: "Exodus 20:8-11, Deuteronomy 5:15"
  },
  {
    position: "Strict Sabbatarianism (Westminster)",
    color: "#8B5CF6",
    tradition: "Westminster Confession (1647), Scottish Presbyterian, many conservative Reformed",
    claim: "Sunday is the Christian Sabbath, and the fourth commandment applies to it in its moral essence: one day in seven is set apart for worship and rest.",
    strength: "Maintains the moral permanence of the fourth commandment while applying it to the resurrection day. Produces a robust weekly rhythm of rest.",
    weakness: "The explicit NT evidence for treating Sunday as the Sabbath is indirect; relies on the continuity of moral law argument.",
    keyText: "Hebrews 4:9-11, Acts 20:7, Revelation 1:10"
  },
  {
    position: "Continental / Lutheran View",
    color: "#3B82F6",
    tradition: "Luther, Calvin (partially), Westminster Larger Catechism tension",
    claim: "The ceremonial aspects of the Sabbath are fulfilled in Christ; the moral principle of periodic rest remains. Sunday worship is commanded; strict sabbath regulations are not binding in the same way.",
    strength: "Distinguishes between ceremonial law (fulfilled) and the creation pattern of rest (enduring); avoids legalism while honoring rhythm.",
    weakness: "Can slide into treating Sunday as a day of no special obligation if the moral principle is not taken seriously.",
    keyText: "Colossians 2:16-17, Romans 14:5-6, Mark 2:27"
  },
  {
    position: "Every Day as Sacred",
    color: "#F59E0B",
    tradition: "Some Anabaptist streams, certain evangelical approaches",
    claim: "Romans 14:5 ('One person considers one day more sacred than another; another considers every day alike') supports treating every day as holy rather than one day as special.",
    strength: "Emphasizes the permeation of all life by grace; avoids compartmentalization.",
    weakness: "In practice, 'every day is sacred' often becomes 'no day is sacred.' The absence of structured sabbath tends to produce exhaustion, not holiness.",
    keyText: "Romans 14:5-6, Galatians 4:10-11"
  }
];

const practiceSteps = [
  {
    step: "1. Decide When Your Sabbath Begins",
    desc: "Jewish practice begins at sundown. Many Christians use Sunday from morning through evening. Others take Saturday as their rest day (for those in ministry, whose Sunday is the most demanding day). The day matters less than the practice — pick one day and protect it."
  },
  {
    step: "2. Define What You Will Stop",
    desc: "Cessation is the core of sabbath. Make a list: paid work, email, social media, errands, anything that feels like labor or anxiety-management. The list will be different for everyone. The question is: what do you need to put down to actually rest?"
  },
  {
    step: "3. Worship First",
    desc: "Corporate worship anchors the day. The sabbath is not primarily private rest — it begins with gathering with the people of God. The resurrection is celebrated communally. Worship before leisure; community before entertainment."
  },
  {
    step: "4. Do What Restores You",
    desc: "Rest is not identical to sleep or inactivity. For some people, cooking restores; for others, walking in nature; for others, reading. The question is: what activities leave you more alive, more present, more ready for the week? Sabbath is for life, not for productivity guilt."
  },
  {
    step: "5. Involve Your Family",
    desc: "A family sabbath creates shared memory, shared rhythm, and a weekly anchor. Light candles. Read Scripture. Share a meal. Create rituals that children will carry with them. The family that rests together builds something against the current culture of relentless busyness."
  },
  {
    step: "6. End with Gratitude",
    desc: "Jewish Havdalah (separation) marks the end of sabbath with prayer and candle. Christians can end the day by reviewing: what did I receive today? What will I carry into the week? A brief gratitude prayer closes the sabbath and re-enters ordinary time with thankfulness rather than dread."
  }
];

const objections = [
  {
    objection: "I Can't Afford to Take a Day Off",
    answer: "This is precisely the faith question sabbath poses. The person who cannot rest because the work won't survive without them is confessing that God is not sufficient — that their labor, not God's providence, sustains their life. Sabbath is a weekly act of trust: 'You are enough without me working today.' Every generation has said this is impossible; every generation of sabbath-keepers has found it was not."
  },
  {
    objection: "Colossians 2:16 Says No One Should Judge Us on Sabbath",
    answer: "Paul's instruction in Colossians 2:16-17 addresses the Colossian's heretical insistence on specific Jewish feast days and sabbath regulations as requirements for Christian standing. He is not abolishing the practice of rest — he is refusing to make the specific Jewish sabbath regulations binding on Gentile believers. The principle of one-in-seven rest embedded in creation is not what Paul is setting aside."
  },
  {
    objection: "Sunday Is Just Another Day for Modern People",
    answer: "This is descriptively true and prescriptively wrong. That Sunday has been stripped of its distinctiveness by consumer culture does not mean it should be. The Christian practice of Sunday rest is countercultural by design — it refuses the 7-day productivity culture and insists that one day in seven belongs differently. The church's job is not to conform to cultural scheduling but to model a different way of inhabiting time."
  },
  {
    objection: "I Work in Ministry — Sunday Is My Most Strenuous Day",
    answer: "This is a real problem that deserves a real answer. Those who serve on Sunday (pastors, musicians, nursery workers) should take their sabbath on another day — Friday, Saturday, or Monday. The principle is the practice, not the specific day. A pastor who takes no sabbath is modeling unsustainability and will eventually burn out. Pastors of all people need to model the rest they preach."
  },
  {
    objection: "Isn't Sabbath Works-Based Religion?",
    answer: "The opposite is true. Sabbath is the anti-works-based practice: it insists that we are more than our output, that the world does not depend on our effort, that rest is a gift not a reward. The person who cannot stop working because their identity is wrapped in productivity is the one under a works-based system. Sabbath breaks the idolatry of achievement, not creates it."
  }
];

export default function TheologyOfSabbathPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPosition, setSelectedPosition] = useState(historicalDebate[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Theology" },
    { id: "history", label: "Historical Debate" },
    { id: "practice", label: "How to Sabbath" },
    { id: "objections", label: "Common Objections" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 40, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#000", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            REST & RHYTHM
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Theology of the Sabbath
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            In a world that never stops, one day in seven is an act of defiance and trust. Sabbath is not legalism — it is the rhythm God wove into creation and the rest that Christ fulfills and invites.
          </p>
        </div>

        <div style={{ background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600 }}>
            "Remember the Sabbath day, to keep it holy." — Exodus 20:8 &nbsp;|&nbsp; "Come to me, all who are weary and burdened, and I will give you rest." — Matthew 11:28
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{ background: activeTab === t.id ? GREEN : CARD, color: activeTab === t.id ? "#000" : TEXT, border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`, borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`pt-${i}`)}
                  style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 15 }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>{pt.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "history" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              {historicalDebate.map(p => (
                <div
                  key={p.position}
                  onClick={() => setSelectedPosition(p)}
                  style={{ background: selectedPosition.position === p.position ? p.color + "22" : CARD, border: `2px solid ${selectedPosition.position === p.position ? p.color : BORDER}`, borderRadius: 10, padding: 16, cursor: "pointer", marginBottom: 10 }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{p.position}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{p.tradition}</div>
                </div>
              ))}
            </div>
            <div style={{ width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, position: "sticky", top: 20 }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800, color: selectedPosition.color }}>{selectedPosition.position}</h3>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 12 }}>{selectedPosition.tradition}</div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 12 }}>{selectedPosition.claim}</p>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>STRENGTH</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedPosition.strength}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, marginBottom: 4 }}>WEAKNESS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedPosition.weakness}</p>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>KEY TEXT</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedPosition.keyText}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Sabbath is a practice, not just a principle. These six steps give you a starting framework — adapt them to your life, vocation, and season.
            </p>
            {practiceSteps.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: GREEN, color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{s.step.replace(`${i + 1}. `, "")}</div>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "objections" && (
          <div style={{ maxWidth: 720 }}>
            {objections.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`obj-${i}`)}
                  style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 15 }}
                >
                  <span>"{o.objection}"</span>
                  <span style={{ color: MUTED, flexShrink: 0, marginLeft: 12 }}>{expanded[`obj-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`obj-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>{o.answer}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
