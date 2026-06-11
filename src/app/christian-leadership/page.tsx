"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const VOICES = [
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932 – 1996",
    context: "Dutch Catholic priest, professor at Harvard, Yale, and Notre Dame; community member at L'Arche",
    bio: "Henri Nouwen spent decades teaching pastoral theology at elite universities and writing more than 40 books on the spiritual life — then, at the height of his academic success, moved to L'Arche Daybreak near Toronto to live with people with severe intellectual disabilities as their pastor. His In the Name of Jesus (1989), a meditation on Jesus's temptation in the desert, became his most important word on leadership. He argued that Christian leaders face three temptations identical to Jesus's: to be relevant (turning stones to bread), to be spectacular (throwing yourself from the temple), and to be powerful (ruling all the kingdoms of the world). The antidote to each is equally specific: from relevance to prayer, from popularity to ministry, from leading to being led.",
    quote: "The great challenge of the Christian leader is not to do many things, or to do them with great success, but to do them in the name of Jesus.",
    contribution: "Nouwen's downward mobility — the Harvard professor who moved to work with people with severe disabilities — embodied his theology of leadership. He showed that the leader's primary task is not to accumulate influence but to empty themselves for others. His concept of the 'wounded healer' — that leaders lead from their wounds, not from above them — has shaped a generation of pastors who felt their brokenness disqualified them. He taught that vulnerability is a leadership asset, not a liability.",
  },
  {
    id: "sanders",
    name: "J. Oswald Sanders",
    era: "1902 – 1992",
    context: "New Zealand pastor, General Director of Overseas Missionary Fellowship, Spiritual Leadership (1967)",
    bio: "J. Oswald Sanders's Spiritual Leadership (1967) became the standard text in Christian leadership formation for half a century — assigned in seminaries, missionary training programs, and church leader development courses worldwide. Sanders wrote from deep practical experience: he served as General Director of the China Inland Mission/Overseas Missionary Fellowship and traveled internationally until shortly before his death at age 89. His central argument: spiritual leadership cannot be separated from spiritual formation. The leader's prayer life is not one item among many on the leader's agenda — it is the foundation of everything else. Without it, all leadership is merely human effort dressed in religious language.",
    quote: "The spiritual leader influences others not by the power of his own personality alone but by that personality irradiated, interpenetrated, and empowered by the Holy Spirit.",
    contribution: "Sanders gave evangelical and missionary Christianity its most comprehensive theology of spiritual leadership. His treatment of the qualities of a spiritual leader — discipline, vision, decision, courage, humility, integrity, sincerity — became the template for how churches thought about developing leaders. His insistence that prayer is the leader's most important activity (not strategy, not administration, not communication) challenged every generation's tendency to substitute busyness for depth.",
  },
  {
    id: "peterson",
    name: "Eugene Peterson",
    era: "1932 – 2018",
    context: "American pastor and professor, The Contemplative Pastor (1989), The Message",
    bio: "Eugene Peterson spent 30 years as the pastor of Christ Our King Presbyterian Church in Maryland, living what he described in The Contemplative Pastor as the vocation of working the angles. The three angles he worked — prayer, Scripture, and spiritual direction — were, in his analysis, the most important things a pastor does and the most consistently abandoned. The pressure on pastors from their congregations is to be busy, productive, relevant, and administrative. Peterson argued that this pressure must be resisted: the pastor's calling is to be the person in the community who takes the interior life seriously, who refuses to be hurried, who models unhurried attention to God. His message translation of the Bible and his many books on the spiritual life flowed from this pastoral practice.",
    quote: "The pastor's primary task is to keep the community attentive to God. That is not a program. It is a way of being. Busyness is the enemy of that way of being.",
    contribution: "Peterson saved many pastors from what he called the three American pastoral sins: being busy, being relevant, and being successful. His description of the contemplative pastor — who chooses attention over activity, depth over breadth, formation over program — gave permission to pastors who sensed that the church's metrics were wrong but did not have the language to say why. His Working the Angles is among the most important books on pastoral ministry in the twentieth century.",
  },
  {
    id: "crouch",
    name: "Andy Crouch",
    era: "Born 1966",
    context: "Writer and cultural commentator, Playing God: Redeeming the Gift of Power (2013)",
    bio: "Andy Crouch's Playing God is the most rigorous theological treatment of power in recent evangelical literature. Crouch begins with an observation that most Christian thinking about power gets backwards: the problem is not that we have power but that we misuse it. Power — the capacity to make something of the world — is inherent in bearing the image of God. The question is not whether to have power but whether it is exercised in ways that create flourishing or in ways that diminish it. Crouch's analysis of institutional power — how it accumulates, how it corrupts, how it can be redeemed — is essential for anyone leading an organization. His subsequent Strong and Weak (2016) introduced a two-axis framework (authority and vulnerability) that gives leaders a map for understanding both healthy and abusive power dynamics.",
    quote: "The way Jesus exercised power was always to create more flourishing for the people around him — not to extract from them, not to bind them, but to release them into greater capacity for life.",
    contribution: "Crouch gave evangelical leadership a sophisticated framework for thinking about power — not as inherently corrupting but as inherently responsibility-laden. His distinction between power that creates flourishing and power that extracts value helped many leaders identify specific patterns in their own leadership. His writing on how institutions accumulate power and lose accountability is particularly urgent for church leaders, who often assume that Christian organizations are immune to the dynamics that corrupt secular ones.",
  },
  {
    id: "ford",
    name: "Leighton Ford",
    era: "Born 1931",
    context: "Canadian evangelist, brother-in-law of Billy Graham, Transforming Leadership (1991)",
    bio: "Leighton Ford spent decades as an international evangelist and associate to Billy Graham before turning his primary attention to leadership development through the Arrow Leadership Program, which he founded in 1992. His Transforming Leadership (1991) makes a distinctive argument: the world needs not more leaders with better skills but transformed leaders — people who are being conformed to the character of Christ and whose leadership flows from that transformation rather than from technique. Ford draws heavily on the leadership of Jesus: the way he called disciples, formed community, exercised authority, washed feet, and ultimately gave his life. Ford's later reflections on his son Sandy's death from congenital heart disease at 21 — and how suffering shaped his own leadership — gave his work a depth of pastoral wisdom that purely theoretical treatments lack.",
    quote: "The world does not need more savvy, sophisticated leaders who know how to work the system. It needs transformed leaders — people who have been changed by the encounter with Jesus and who lead from that change.",
    contribution: "Ford's Arrow Leadership Program has developed hundreds of Christian leaders across North America and internationally, forming them in a model that integrates character, competence, and call. His insistence that leadership formation is primarily spiritual formation — that you cannot separate the leader's effectiveness from the leader's interior life — shaped a generation of leaders who might otherwise have pursued skill-based development at the expense of soul-based formation.",
  },
];

const MODELS = [
  { name: "Moses", lesson: "Delegation is not weakness — it is wisdom. Moses' father-in-law Jethro saw that Moses was burning out by trying to do everything himself (Exodus 18). He told him to identify capable people and distribute the work. The failure to delegate is often pride disguised as responsibility.", verse: "Exodus 18:21-22" },
  { name: "Nehemiah", lesson: "Great leadership combines vision, prayer, strategy, and resilience against opposition. Nehemiah rebuilt the wall in 52 days not through charisma but through organization, prayer, and refusal to be distracted by critics and threats.", verse: "Nehemiah 6:3" },
  { name: "Paul", lesson: "Paul's leadership was built on sacrifice and transparency. He told the Corinthians to imitate him as he imitated Christ (1 Corinthians 11:1). His authority came not from position but from demonstrated faithfulness in suffering. He also invested deeply in Timothy, Titus, and others.", verse: "1 Corinthians 11:1" },
  { name: "David", lesson: "David is the cautionary tale: gifted, anointed, successful — and catastrophically compromised by unchecked power. His failure with Bathsheba and Uriah shows that leadership without accountability is leadership waiting to fail.", verse: "2 Samuel 11" },
];

const PRACTICES = [
  { title: "Build a Board of Honest Critics", desc: "Identify 2-3 people who have full permission to tell you hard truths. Meet with them regularly. Ask: 'Where do you see me going wrong?' The answer will be more valuable than any leadership book.", icon: "🪞" },
  { title: "Lead from Rest", desc: "The leader who does not Sabbath cannot sustain the pace the work requires. Rest is not a reward for finishing — it is a discipline that makes sustained fruitfulness possible.", icon: "🛌" },
  { title: "Develop Others, Not Just Systems", desc: "Your primary leadership contribution is the people you develop, not the programs you build. Programs outlast you only if people outlast you. Invest your best time in people, not processes.", icon: "🌱" },
  { title: "Decide Slowly on People", desc: "Hire slowly, fire quickly (when necessary). The right people on the team are the most important leadership decision you make. The wrong people in the wrong roles — or people without character — will undo years of work.", icon: "🎯" },
  { title: "Practice Confession in Public", desc: "Leaders who admit failure model the culture they want to create. When you are wrong, say so specifically. When you have hurt someone, repair it publicly if the harm was public. This builds the trust that makes leading possible.", icon: "🙏" },
  { title: "Read Widely and Across Traditions", desc: "Christian leaders who read only within their own tradition produce a narrow, in-bred leadership culture. Read theology, history, psychology, business, and biography. The breadth of your reading shapes the depth of your leadership.", icon: "📚" },
];

type Tab = "theology" | "traps" | "voices" | "practices" | "journal" | "videos";

export default function ChristianLeadershipPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-leadership_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_christian-leadership_voice", "nouwen");

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  const [cldEntries, setCldEntries] = useState<{ id: string; date: string; area: string; strength: string; trap: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cld_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cldForm, setCldForm] = useState({ area: "", strength: "", trap: "" });
  const [cldSaved, setCldSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cld_entries", JSON.stringify(cldEntries)); }, [cldEntries]);
  function saveCldEntry() {
    if (!cldForm.area.trim()) return;
    setCldEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cldForm }, ...prev]);
    setCldForm({ area: "", strength: "", trap: "" });
    setCldSaved(true); setTimeout(() => setCldSaved(false), 2000);
  }
  function deleteCldEntry(id: string) { setCldEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
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
            { id: "traps" as const, label: "Traps", icon: "⚠️" },
            { id: "voices" as const, label: "Voices", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "📓 My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
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
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}><VerseRef reference={m.verse} /></span>
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
                Leadership failure rarely happens suddenly. It develops through accumulated small compromises and unchecked patterns. These {TRAPS.length} traps account for the majority of Christian leadership failures.
              </p>
            </div>
            {TRAPS.map((t, i) => (
              <div role="button" tabIndex={0} key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === t.trap ? null : t.trap)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === t.trap ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{t.trap}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === t.trap ? "-" : "+"}</span>
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

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{voice.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{voice.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Great Christian leadership is not primarily learned from books — it is formed through practice, accountability, and sustained attention to your own soul. These {PRACTICES.length} practices address the formation that books cannot provide.
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

        {activeTab === "journal" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>My Leadership Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Reflect on where you lead, how you are growing, and what traps you are guarding against.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 32 }}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Area of Leadership</label>
                <input value={cldForm.area} onChange={e => setCldForm(f => ({ ...f, area: e.target.value }))} placeholder="e.g. My small group, my team at work, my family..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Where Are You Growing?</label>
                <textarea value={cldForm.strength} onChange={e => setCldForm(f => ({ ...f, strength: e.target.value }))} placeholder="What servant leadership quality is God developing in you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Trap You Are Guarding Against</label>
                <textarea value={cldForm.trap} onChange={e => setCldForm(f => ({ ...f, trap: e.target.value }))} placeholder="Pride, control, people-pleasing, drivenness — what temptation is most present?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCldEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cldSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {cldEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cldEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{e.area}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{e.date}</div>
                      </div>
                      <button type="button" onClick={() => deleteCldEntry(e.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Delete</button>
                    </div>
                    {e.strength && <div style={{ marginBottom: 10 }}><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Growing In</div><div style={{ color: TEXT, fontSize: 13 }}>{e.strength}</div></div>}
                    {e.trap && <div><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Guarding Against</div><div style={{ color: TEXT, fontSize: 13 }}>{e.trap}</div></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on servant leadership and spiritual formation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "GGCF3OPWN14", title: "Advice for Leaders", channel: "Francis Chan", description: "Francis Chan offers direct, gospel-centered counsel for Christian leaders on humility, sacrifice, and serving others." },
                  { videoId: "t6L-F2emwUc", title: "Thrones & Thorns — Week 1", channel: "Matt Chandler / The Village Church", description: "Matt Chandler examines how Jesus leveraged all power, privilege, and position for the good of humanity — the ultimate model of servant leadership." },
                  { videoId: "oNpTha80yyE", title: "The Depth of the Gospel", channel: "Matt Chandler / The Village Church", description: "Matt Chandler on how a deep understanding of the gospel shapes every aspect of Christian character and leadership." },
                  { videoId: "4Eg_di-O8nM", title: "Biblical Christian Worldview", channel: "John MacArthur / Francis Chan / Matt Chandler", description: "John MacArthur, Francis Chan, and Matt Chandler discuss what it means to lead with a truly biblical worldview." },
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
