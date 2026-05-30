"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Servant Leader", verse: "Mark 10:42-45", body: "'Whoever wants to become great among you must be your servant... For even the Son of Man did not come to be served, but to serve' (Mark 10:43-45). Jesus' definition of leadership inverts the world's definition. Secular leadership moves toward power, status, and leverage. Christian leadership moves toward service, sacrifice, and the building up of others. The leader who has not understood this has not understood Christ." },
  { title: "Character Over Competence", verse: "1 Timothy 3:1-7", body: "The qualifications for church eldership in 1 Timothy 3 are almost entirely about character: 'above reproach, faithful to his wife, temperate, self-controlled, respectable, hospitable, able to teach, not given to drunkenness, not violent but gentle, not quarrelsome, not a lover of money' (v.2-3). Only one qualification is skill-based. Character is the prerequisite for Christian leadership, not a supplement to it." },
  { title: "Accountability and Submission", verse: "Hebrews 13:17", body: "'Have confidence in your leaders and submit to their authority, because they keep watch over you as those who must give an account' (Hebrews 13:17). Christian leaders are not autonomous — they are accountable. Accountable to God, to Scripture, to the community of faith, and to other leaders. The leader who resists accountability has already begun to drift." },
  { title: "Leading by Example", verse: "1 Peter 5:3", body: "'Not lording it over those entrusted to you, but being examples to the flock' (1 Peter 5:3). Christian leadership is not primarily directive — it is demonstrative. You are asking people to follow not just your instructions but your life. This is a more demanding standard than secular leadership and a more transformative one. The leader's formation is the organization's formation." },
  { title: "The Danger of Pride in Leadership", verse: "1 Peter 5:5", body: "'God opposes the proud but shows favor to the humble' (1 Peter 5:5). Leadership creates conditions for pride: visibility, influence, deference, and the experience of being right. The leader who has not built structures of humility — confession, accountability, deliberate self-examination — will eventually experience the opposition of God rather than his favor." },
];

const TRAPS = [
  { trap: "Isolation", desc: "Leaders often stop receiving honest feedback because people fear their reaction. The leader who surrounds themselves only with agreers has already made a critical mistake. Seek people who will tell you what you don't want to hear.", sign: "You hear mostly affirmation. Criticism surprises you." },
  { trap: "Results Over People", desc: "The mission is important, but people are more important than the mission. A leader who sacrifices people on the altar of outcomes has confused the kingdom of God with an organization.", sign: "You think of people primarily in terms of their usefulness to goals." },
  { trap: "Confusing Position with Character", desc: "A title does not make a leader. Authority does not produce wisdom. Many leaders assume their position validates their judgment. This is one of the most dangerous confusions in Christian leadership.", sign: "You resent being questioned. You conflate disagreement with disloyalty." },
  { trap: "Neglecting Your Own Soul", desc: "The busiest leaders are often the most spiritually depleted. The irony: you lead others into the presence of God while neglecting your own. No one can give what they do not have. The leader's own formation is the first leadership responsibility.", sign: "Your public life is richer than your private one. You know more about your organization than about yourself." },
  { trap: "Protecting the Institution Over Truth", desc: "When an institution becomes more important than the truth it exists to serve, it has already begun to die. Leaders who cover up failure, silence whistleblowers, or manage reputation over addressing sin have lost the plot.", sign: "You find yourself saying 'we shouldn't make this public' about things that should be addressed." },
];

const PRACTICES = [
  { title: "Build a Board of Honest Critics", desc: "Identify 2-3 people who have full permission to tell you hard truths. Meet with them regularly. Ask: 'Where do you see me going wrong?' The answer will be more valuable than any leadership book.", icon: "🪞" },
  { title: "Lead from Rest", desc: "The leader who does not Sabbath cannot sustain the pace the work requires. Rest is not a reward for finishing — it is a discipline that makes sustained fruitfulness possible.", icon: "🛌" },
  { title: "Develop Others, Not Just Systems", desc: "Your primary leadership contribution is the people you develop, not the programs you build. Programs outlast you only if people outlast you. Invest your best time in people, not processes.", icon: "🌱" },
  { title: "Decide Slowly on People", desc: "Hire slowly, fire quickly (when necessary). The right people on the team are the most important leadership decision you make. The wrong people in the wrong roles — or people without character — will undo years of work.", icon: "🎯" },
  { title: "Practice Confession in Public", desc: "Leaders who admit failure model the culture they want to create. When you are wrong, say so specifically. When you have hurt someone, repair it publicly if the harm was public. This builds the trust that makes leading possible.", icon: "🙏" },
  { title: "Read Widely and Across Traditions", desc: "Christian leaders who read only within their own tradition produce a narrow, in-bred leadership culture. Read theology, history, psychology, business, and biography. The breadth of your reading shapes the depth of your leadership.", icon: "📚" },
];

const MODELS = [
  { name: "Moses", lesson: "Delegation is not weakness — it is wisdom. Moses' father-in-law Jethro saw that Moses was burning out by trying to do everything himself (Exodus 18). He told him to identify capable people and distribute the work. The failure to delegate is often pride disguised as responsibility.", verse: "Exodus 18:21-22" },
  { name: "Nehemiah", lesson: "Great leadership combines vision, prayer, strategy, and resilience against opposition. Nehemiah rebuilt the wall in 52 days not through charisma but through organization, prayer, and refusal to be distracted by critics and threats.", verse: "Nehemiah 6:3" },
  { name: "Paul", lesson: "Paul's leadership was built on sacrifice and transparency. He told the Corinthians to imitate him as he imitated Christ (1 Corinthians 11:1). His authority came not from position but from demonstrated faithfulness in suffering. He also invested deeply in Timothy, Titus, and others.", verse: "1 Corinthians 11:1" },
  { name: "David", lesson: "David is the cautionary tale: gifted, anointed, successful — and catastrophically compromised by unchecked power. His failure with Bathsheba and Uriah shows that leadership without accountability is leadership waiting to fail.", verse: "2 Samuel 11" },
];

export default function ChristianLeadershipPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "traps" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Leadership</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Son of Man came not to be served but to serve. Christian leadership inverts the world's definition — it moves toward sacrifice and the building up of others, not toward power and position.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traps" as const, label: "Leadership Traps", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Biblical Leadership Models</h3>
              {MODELS.map((m, i) => (
                <div key={i} style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{m.name}</div>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{m.verse}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{m.lesson}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "traps" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Leadership failure rarely happens suddenly. It develops through accumulated small compromises and unchecked patterns. These five traps account for the majority of Christian leadership failures.
              </p>
            </div>
            {TRAPS.map((t, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === t.trap ? null : t.trap)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === t.trap ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{t.trap}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === t.trap ? "−" : "+"}</span>
                </button>
                {expanded === t.trap && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                    <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}25`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>WARNING SIGN</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{t.sign}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Great Christian leadership is not primarily learned from books — it is formed through practice, accountability, and sustained attention to your own soul. These six practices address the formation that books cannot provide.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
