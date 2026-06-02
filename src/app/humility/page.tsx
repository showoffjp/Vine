"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "teachers" | "pride" | "practices" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "definition",
    title: "What Humility Actually Is",
    body: "Humility is not low self-esteem or self-deprecation — it is accurate self-knowledge. Paul's definition in Romans 12:3: 'Do not think of yourself more highly than you ought, but rather think of yourself with sober judgment, in accordance with the faith God has distributed to each of you.' The humble person sees themselves clearly: their genuine gifts and their genuine limits, their real strengths and their real dependence. False modesty that refuses to acknowledge gifts God has given is not humility — it is a different form of self-centeredness. True humility frees you to receive praise without becoming inflated by it and to receive criticism without being destroyed by it.",
  },
  {
    id: "incarnation",
    title: "Humility as the Shape of the Incarnation",
    body: "The NT's most profound statement of humility is not a command but a story. Philippians 2:5-8: 'In your relationships with one another, have the same mindset as Christ Jesus: Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant, being made in human likeness. And being found in appearance as a man, he humbled himself by becoming obedient to death — even death on a cross!' Humility is not a personality disposition — it is the movement of the eternal Son downward, into flesh, into weakness, into death. The incarnation is the definitive example of what humility looks like when it is full and free.",
  },
  {
    id: "ground",
    title: "The Ground and Fruit of Humility",
    body: "True humility is not achieved through willpower — it is the natural posture of someone who actually sees God clearly. Isaiah saw the Lord 'high and exalted' and immediately said 'Woe to me! I am ruined! For I am a man of unclean lips' (Isaiah 6:1-5). The vision of God produces the right assessment of self. This is why intellectual knowledge about humility often fails to create it: the knowledge must be accompanied by genuine encounter with the God who is infinitely greater. C.S. Lewis: 'Humility is not thinking less of yourself but thinking of yourself less' — possible only when something greater has captured your attention.",
  },
  {
    id: "exaltation",
    title: "The Paradox: Humility Is Exalted",
    body: "Jesus's consistent teaching reverses cultural hierarchy: 'whoever humbles himself will be exalted' (Matthew 23:12, Luke 14:11, Luke 18:14). James 4:10: 'Humble yourselves before the Lord, and he will lift you up.' 1 Peter 5:6: 'Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time.' The promise is consistent: God exalts the humble. Not because humility is a tactic (that would not be humility) but because God's kingdom reverses the value systems of fallen culture. The last are first; the servants are the greatest; the meek inherit the earth.",
  },
  {
    id: "community",
    title: "Humility as the Foundation of Community",
    body: "Paul connects humility directly to community health: 'Be completely humble and gentle; be patient, bearing with one another in love' (Ephesians 4:2). The four qualities he lists — humility, gentleness, patience, forbearance — are all relational virtues that make genuine community possible. Pride is the great destroyer of community: it produces contempt for others, defensiveness, competition, and division. Humility creates the space in which others can exist without being evaluated, dismissed, or competed with. The unity Paul prays for in Ephesians 4:3 is preserved not by agreement on all things but by the humble posture toward one another.",
  },
];

const TEACHER_ITEMS = [
  {
    id: "murray",
    name: "Andrew Murray",
    work: "Humility: The Beauty of Holiness (1895)",
    color: "#3B82F6",
    quote: "Humility is not thinking less of yourself; it is thinking of yourself less.",
    contribution: "Murray's classic remains the most concentrated theological treatment of humility available. His central claim: humility is not a virtue to be cultivated among others but the root of all other virtues. Without humility, no virtue is genuine — it will be contaminated by pride. Murray traces humility through the life of Jesus, showing that Jesus's entire earthly life was an expression of humble dependence on the Father: 'I do nothing on my own... I always do what pleases him' (John 5:30, 8:29). Humility, for Murray, is not self-contempt but radical orientation toward God.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "Mere Christianity, The Screwtape Letters",
    color: "#F59E0B",
    quote: "The real test of being in the presence of God is that you either forget about yourself altogether or see yourself as a small, dirty object.",
    contribution: "Lewis identified pride as 'the great sin' — 'the essential vice, the utmost evil.' His insight was that pride is essentially competitive: it is not pleasure in having something but in having more than the person next to you. This is why the proud person cannot be satisfied: the target keeps moving. He also noted that the humble person is a delight to be around — not because they constantly speak of their own worthlessness but because they are genuinely interested in you. They have forgotten to worry about their own status.",
  },
  {
    id: "bernard",
    name: "Bernard of Clairvaux",
    work: "Steps of Humility and Pride (1120s)",
    color: GREEN,
    quote: "Learn the humility that comes from truth, the truth that comes from self-knowledge.",
    contribution: "Bernard described twelve steps of humility drawn from the Rule of Saint Benedict, but his more psychologically acute contribution was the twelve steps of PRIDE — the ascending degrees by which a person moves from curiosity to curiosity about others' sin, to arrogance, to contempt, to boasting, to singularity (insisting on being different), and ultimately to the open declaration of independence from God. The descending steps are helpful diagnostically: where are you on this staircase?",
  },
  {
    id: "ignatius",
    name: "Ignatius of Loyola",
    work: "Spiritual Exercises (1548)",
    color: PURPLE,
    quote: "Ask for the grace of true knowledge of self, humility, and the grace to live out this understanding.",
    contribution: "In the Spiritual Exercises, Ignatius describes three degrees of humility. The first: avoiding serious sin to serve God. The second: indifference to wealth, health, and honor when they are no longer connected to God's glory. The third (the highest): actively choosing poverty, humiliation, and apparent failure if Jesus would so choose them — not masochistically but as the deepest identification with the incarnate Lord who chose the same. Most Christians live at the first degree; Ignatius invites consideration of the third.",
  },
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    work: "Life Together (1939)",
    color: "#EC4899",
    quote: "We prevent God from giving us the great spiritual gifts he has in store for us, because we do not give thanks for daily gifts.",
    contribution: "Bonhoeffer's analysis of community in Life Together shows how pride destroys spiritual friendship. The 'wish dream' — the idea of what community ought to be like — is an expression of pride that prevents receiving the actual community God provides. His concept of 'spiritual' gratitude versus 'psychic' love shows how the proud person relates to others as mirrors for their own self-image rather than as actual people. Genuine community requires 'every member of the community to be willing to be the very least.'",
  },
];

const PRIDE_ITEMS = [
  {
    id: "disguises",
    title: "Pride's Disguises",
    body: "Pride rarely announces itself. It arrives wearing costumes: self-deprecation (which draws attention to itself as much as boasting), perfectionism (which refuses to accept less than what would justify pride), spiritual pride (which takes satisfaction in one's own spiritual progress), busyness (which signals one's own indispensability), and victimhood (which places oneself at the center of all narratives). C.S. Lewis noted that the devil's most successful work is done under cover — and pride is most dangerous when it calls itself humility.",
  },
  {
    id: "intellectual",
    title: "Intellectual Pride",
    body: "One of the most common forms in educated Christian circles: the subtle contempt for those who have not read the right books, mastered the right theology, or hold the wrong positions. It manifests as correction without relationship, public disagreement for the pleasure of being right, and the subtle enjoyment of others' intellectual errors. Paul's antidote in 1 Corinthians 8:1 is blunt: 'knowledge puffs up while love builds up.' The question is not only 'Am I right?' but 'Am I right in a way that serves this person?'",
  },
  {
    id: "religious",
    title: "Religious Pride",
    body: "Jesus's sharpest critique was reserved for the most religiously observant: the Pharisee who prayed 'I thank you, God, that I am not like other people' (Luke 18:11). Religious pride takes the good things of faith — consistent church attendance, theological knowledge, moral consistency, spiritual discipline — and converts them into instruments of self-congratulation or instruments for evaluating others. It is particularly dangerous because the person afflicted often genuinely cannot see it: they are simply being faithful.",
  },
  {
    id: "subtle",
    title: "Subtle Signs You May Be Struggling with Pride",
    body: "You are frequently irritated by people who don't do things as well as you. You find it harder to celebrate others' success when they are in a similar field. You replay conversations in your head and always come out looking better. You cannot receive a compliment without deflecting (false humility) or savoring it too much. You rarely ask questions; you make statements. You feel slighted by perceived disrespect from people 'below' your status. You find it very hard to say 'I was wrong' without adding explanations that reframe the mistake.",
  },
];

const PRACTICE_ITEMS = [
  {
    title: "Serve without recognition",
    icon: "🤲",
    color: "#3B82F6",
    verse: "Matthew 6:1",
    desc: "Do something significant this week that no one will ever know about. Take credit for nothing. Let the act itself be sufficient. Jesus's instruction: 'do not let your left hand know what your right hand is doing' — the goal is internal integrity, not public display.",
  },
  {
    title: "Ask for help",
    icon: "🙏",
    color: GREEN,
    verse: "Ecclesiastes 4:9-10",
    desc: "Deliberately ask someone for help with something you could handle alone. Needing others is not weakness — it is designed by God and denied by pride. Practice the vulnerability of genuine dependence.",
  },
  {
    title: "Listen more than you speak",
    icon: "👂",
    color: PURPLE,
    verse: "James 1:19",
    desc: "In conversations this week, aim for two questions per statement. Real listening is a posture of valuing the other person's experience above your own commentary. Count: how many questions did you ask today?",
  },
  {
    title: "Celebrate others' success",
    icon: "🎉",
    color: "#F59E0B",
    verse: "Romans 12:15",
    desc: "Notice when you feel threatened by someone else's achievement — that feeling is pride. Actively celebrate what would otherwise trigger competition. Write a note of genuine congratulation.",
  },
  {
    title: "Confess promptly",
    icon: "💬",
    color: "#EC4899",
    verse: "James 5:16",
    desc: "Pride delays or avoids confession. Humility confesses quickly. Practice admitting specific wrongs — to God, and to the person affected — within 24 hours. No mitigating clauses, no counter-complaints.",
  },
  {
    title: "Meditate on Philippians 2",
    icon: "📖",
    color: "#10B981",
    verse: "Philippians 2:1-11",
    desc: "Read the Christ-hymn in Philippians 2:5-11 weekly for a month. Not to extract information but to let the shape of the incarnation — downward, into weakness, into service — become the template for how you inhabit your own life.",
  },
];

export default function HumilityPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedTheology, setSelectedTheology] = useState("definition");
  const [selectedTeacher, setSelectedTeacher] = useState("murray");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  const theologyItem = THEOLOGY_ITEMS.find(t => t.id === selectedTheology)!;
  const teacherItem = TEACHER_ITEMS.find(t => t.id === selectedTeacher)!;

  const TABS = [
    { id: "theology" as Tab, label: "What Humility Is", icon: "📖" },
    { id: "teachers" as Tab, label: "Teachers on Humility", icon: "🎓" },
    { id: "pride" as Tab, label: "Pride's Disguises", icon: "🎭" },
    { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
    { id: "videos" as Tab, label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙇</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Virtue of Humility</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
            C.S. Lewis called pride the great sin — the root from which every other sin grows. And yet humility, its remedy, is perhaps the most misunderstood virtue in the Christian life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Humility is not weakness, self-deprecation, or timidity. It is the virtue that sees clearly — clearly enough about God that self takes its proper place. Philippians 2 shows us what it looks like at full strength.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
                {THEOLOGY_ITEMS.map(t => (
                  <button key={t.id} onClick={() => setSelectedTheology(t.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedTheology === t.id ? GREEN : BORDER}`, background: selectedTheology === t.id ? `${GREEN}18` : CARD, color: selectedTheology === t.id ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {t.title}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{theologyItem.title}</h2>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{theologyItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "teachers" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Five of the most penetrating Christian teachers on humility — from medieval monks to modern analysts — each illuminating a different facet of this foundational virtue.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {TEACHER_ITEMS.map(t => (
                  <button key={t.id} onClick={() => setSelectedTeacher(t.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedTeacher === t.id ? t.color : BORDER}`, background: selectedTeacher === t.id ? `${t.color}18` : CARD, color: selectedTeacher === t.id ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {t.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${teacherItem.color}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ color: teacherItem.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{teacherItem.name}</h2>
                    <span style={{ color: MUTED, fontSize: 13 }}>{teacherItem.work}</span>
                  </div>
                  <div style={{ background: `${teacherItem.color}10`, border: `1px solid ${teacherItem.color}25`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                    <p style={{ color: teacherItem.color, fontSize: 15, fontStyle: "italic", margin: 0 }}>"{teacherItem.quote}"</p>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{teacherItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "pride" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                You cannot address pride until you can see it. Pride is distinguished among the seven deadly sins by its capacity for self-concealment — the proud person is nearly always the last to know. These are its most common disguises.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRIDE_ITEMS.map(p => (
                <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => toggleExpand(p.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", color: TEXT }}>
                    <div style={{ fontWeight: 800, fontSize: 16, textAlign: "left" }}>{p.title}</div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{expanded[p.id] ? "−" : "+"}</div>
                  </button>
                  {expanded[p.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 24, marginTop: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>THE REMEDY</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                You cannot cure pride by thinking harder about humility — that becomes a project for pride to hijack. The cure is encounter: genuine, sustained encounter with God as he is (Isaiah 6), with your own actual limits and failures, and with other people as genuinely more interesting and valuable than your self-narrative. Augustine's prayer: 'Grant, Lord, that I may know myself and that I may know thee.' This is the prayer that produces the cure.
              </p>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Humility is not a feeling or an insight — it is a disposition formed through habitual practices that orient the self correctly. These six practices are the classical Christian training for humility.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {PRACTICE_ITEMS.map(p => (
                <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 22 }}>{p.icon}</span>
                    <div>
                      <div style={{ color: p.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{p.verse}</span>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
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
                  { videoId: "wQ5cclvdWjo", title: "If God Is Sovereign, How Can Man Be Free?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul examines the relationship between divine sovereignty and human freedom — foundational for understanding humility before a sovereign God." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller explores how Jesus's kingdom reverses the world's pride-driven hierarchies, calling his followers to the posture of the humble." },
                  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", channel: "Desiring God / John Piper", description: "John Piper shows how genuine humility flows not from self-contempt but from being captured by the greatness and joy of God." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Francis Chan strips away religious performance and pride to return to the simple, humble posture the gospel demands." },
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
    </div>
  );
}
