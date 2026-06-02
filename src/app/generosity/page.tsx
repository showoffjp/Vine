"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Generosity Flows from Who God Is", verse: "John 3:16", body: "The gospel itself is an act of generosity: 'For God so loved the world that he gave his one and only Son.' Generosity is not a spiritual discipline Christians practice toward God — it is participation in the character of a God who is himself defined by giving. Generosity is not the cost of following Jesus; it is the natural expression of being transformed by him." },
  { title: "Everything Belongs to God", verse: "Psalm 24:1", body: "'The earth is the Lord's, and everything in it.' This is the theological foundation for Christian stewardship. We do not own what we give — we manage what belongs to God and return a portion of it in worship. Generosity is not giving our money to God; it is recognizing that it was always his. This shifts giving from sacrifice to celebration." },
  { title: "The Tithe as Floor, Not Ceiling", verse: "Malachi 3:10, 2 Cor 9:7", body: "The tithe (10% to the local church) is the biblical starting point for giving, not the finish line. In the NT, Jesus praised the giving of the entire livelihood (Mark 12:44). Paul calls for giving 'generously' according to what you have decided in your heart (2 Cor. 9:7). The tithe trains the discipline of giving; grace-driven generosity goes further." },
  { title: "Generosity as Freedom from Mammon", verse: "Matthew 6:24", body: "'You cannot serve both God and money.' Jesus names money as a rival lord that makes competing claims on the soul. Generosity is one of the primary disciplines that breaks money's hold on the heart. You cannot both hoard and be free. Giving is not just a financial transaction — it is a spiritual act of declaring that your security is not in your account balance." },
  { title: "The Rich Young Ruler and the Rich Toward God", verse: "Luke 12:21", body: "The rich young ruler went away sad because he had great wealth. Jesus was not teaching that wealth is sinful — he was diagnosing that this man's wealth owned him. The warning against the rich fool (Luke 12:13-21) concludes: 'This is how it will be with whoever stores up things for themselves but is not rich toward God.' Generosity is the practice of becoming rich toward God." },
];

const PRACTICAL = [
  { category: "The Tithe", icon: "⛪", color: "#3B82F6", desc: "10% of income given to your local church. This is the biblical baseline — not a ceiling but a foundation that trains the discipline and posture of giving.", steps: [
    "Calculate 10% of your gross (or net) income",
    "Set up automatic giving to your local church",
    "Commit to the tithe before expenses, not from what remains",
    "If 10% feels impossible, start at 2% and increase 1% per year",
  ]},
  { category: "Offerings", icon: "🎁", color: "#10B981", desc: "Giving above the tithe to ministry, missions, relief organizations, or people in need. This is where grace-driven generosity goes beyond the floor.", steps: [
    "Set a giving budget line item above the tithe",
    "Identify 2-3 ministries or organizations you believe in deeply",
    "Give spontaneously when specific needs arise",
    "Support individuals in your community who are struggling",
  ]},
  { category: "Non-Financial Generosity", icon: "⏰", color: PURPLE, desc: "Time, skills, attention, and presence are resources that can be given as freely as money — and may cost more.", steps: [
    "Volunteer regularly at a ministry or nonprofit",
    "Give the gift of sustained attention to relationships",
    "Share expertise and skills freely with those who need them",
    "Give meals, childcare, transportation, and practical help",
  ]},
  { category: "Secret Giving", icon: "🤫", color: "#F59E0B", desc: "Jesus specifically commended giving that the left hand doesn't know the right is doing (Matthew 6:3-4). Anonymous generosity breaks the pride that can corrupt giving.", steps: [
    "Give anonymously to someone you know is in need",
    "Pay for someone's coffee, meal, or bill without revealing yourself",
    "Give to a cause without seeking recognition",
    "Let no one know the amount of your giving",
  ]},
];

const BARRIERS = [
  { b: "I can't afford to give.", r: "Jesus commended the widow who gave everything from poverty, not the wealthy who gave from surplus. The question is not the amount but the orientation. Start small and trust that obedience precedes abundance." },
  { b: "I'll give more when I earn more.", r: "Studies consistently show that percentage of income given does not increase with income — it typically decreases. The habits you build now at lower income tend to persist. If you cannot give 10% of $30,000, you will likely not give 10% of $100,000." },
  { b: "I don't trust the church/organization with my money.", r: "Investigate before you give — diligent stewardship matters. But distrust of institutions should not become an excuse for non-giving. Find organizations whose integrity you can verify, and give to them." },
  { b: "I give my time, not my money.", r: "Time-giving and money-giving are both valid, but they are not interchangeable. Jesus spoke specifically about the heart and money as rivals. Most people who claim to give time instead find they are giving neither consistently." },
];

const VOICES_GENEROSITY = [
  { id: "muller", name: "George Müller", era: "1805-1898", context: "Bristol orphanages; funded entirely by prayer and faith", bio: "Müller ran orphanages for 2,000 children in Bristol without ever making the need publicly known — only praying and recording the answers. Over his lifetime he received and disbursed the equivalent of tens of millions of dollars, all given by people who heard about the need through his prayer reports rather than fundraising appeals. His journals are a record of extraordinary generosity — both his own and others' — and of a faith that expected God to meet specific needs in specific ways.", quote: "I never remember, in all my Christian course, a period now (in 1861) of about 36 years and 4 months, that I ever sincerely and patiently sought to know the will of God by the teaching of the Holy Ghost, through the instrumentality of the word of God, but I have been always directed rightly.", contribution: "Modeled sacrificial generosity and transparency at a scale that inspired worldwide Christian giving. His practice of need-reporting without direct appeals influenced mission fundraising models for a century." },
  { id: "carmichael", name: "Amy Carmichael", era: "1867-1951", context: "Dohnavur Fellowship, India; 55 years of ministry without furlough", bio: "Carmichael went to India in 1895 and never returned home — 55 years of ministry to rescued children, eventually leading the Dohnavur Fellowship. She refused to raise money through conventional appeals and trusted entirely in God's provision. She rescued hundreds of children from temple prostitution and built a community that was both self-sustaining and lavishly generous. She wrote 35 books from the room in which she was bedbound the last 20 years of her life.", quote: "You can give without loving, but you cannot love without giving.", contribution: "Demonstrated that generosity sustained by prayer rather than fundraising could build institutions of lasting impact. Her refusal to compromise — on both the children's welfare and the financial practices — made Dohnavur a model of mission integrity." },
  { id: "taylor", name: "Hudson Taylor", era: "1832-1905", context: "China Inland Mission; Faith missions pioneer", bio: "Taylor founded the China Inland Mission on the principle of making needs known only to God — not to the public. He identified the needs of inland China (where no missionary had gone) and recruited workers willing to go without guaranteed salary. His personal generosity was extraordinary: he frequently gave away his own food and money to people in greater need. The CIM (now OMF International) still operates on the financial principles he established.", quote: "God's work done in God's way will never lack God's supply.", contribution: "Pioneered the faith mission model — a system of donor-supported Christian mission that avoids public begging while maintaining radical financial transparency. His financial principles have shaped hundreds of mission organizations worldwide." },
  { id: "alcorn", name: "Randy Alcorn", era: "b. 1951", context: "Eternal Perspective Ministries; The Treasure Principle", bio: "Alcorn's The Treasure Principle distills his larger Money, Possessions, and Eternity into a short, accessible call to radical generosity rooted in Jesus's teaching on treasure in heaven (Matthew 6:19-21). His six keys to generosity begin with the recognition that God owns everything and we are stewards, and build toward the conclusion that giving is the antidote to materialism: you cannot serve both God and money, and the way to free yourself from money's grip is to give it away. He lives what he preaches — donating all royalties to charity.", quote: "You can't take it with you, but you can send it ahead. And whatever you invest in God's kingdom yields eternal dividends.", contribution: "Made radical generosity accessible and theologically grounded for ordinary evangelical Christians. The Treasure Principle has sold over a million copies and has initiated the giving practices of countless families who had not considered generosity as a spiritual discipline." },
  { id: "platt", name: "David Platt", era: "b. 1979", context: "Radical (2010); McLean Bible Church; International Mission Board", bio: "Platt's Radical became one of the most controversial evangelical books of the decade it was published — arguing that the American Dream and Christianity are fundamentally incompatible, and that any gospel that does not cost us everything has not been understood. His challenge: if you have more than enough and the majority of the world is without the gospel, what is your obligation? He led McLean Bible Church and the International Mission Board before returning to pastoral ministry, and he lives with unusual simplicity for a figure of his platform.", quote: "In a world where more than a billion people live on less than a dollar a day, what does it say about us when we spend $10 on a latte and think nothing of it?", contribution: "Forced a generation of evangelicals to question the compatibility of material comfort with Christian discipleship. Radical reopened the conversation about sacrifice, generosity, and global mission for churches that had domesticated the gospel." }
];

interface GivingGoal {
  id: string;
  label: string;
  target: number;
  current: number;
}

const SEED_GOALS: GivingGoal[] = [
  { id: "1", label: "Tithe to local church", target: 10, current: 7 },
  { id: "2", label: "Missions giving", target: 3, current: 1 },
  { id: "3", label: "Personal generosity fund", target: 2, current: 0 },
];

export default function GenerosityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "voices" | "practical" | "goals" | "videos">("theology");
  const [selectedVoice, setSelectedVoice] = useState("muller");
  const voiceItem = VOICES_GENEROSITY.find(v => v.id === selectedVoice)!;
  const [goals, setGoals] = useState<GivingGoal[]>(() => {
    try { const s = localStorage.getItem("vine_giving_goals"); return s ? JSON.parse(s) : SEED_GOALS; } catch { return SEED_GOALS; }
  });

  useEffect(() => { try { localStorage.setItem("vine_giving_goals", JSON.stringify(goals)); } catch {} }, [goals]);

  const update = (id: string, field: "current" | "target", val: number) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, [field]: Math.max(0, val) } : g));
  };

  const totalTarget = goals.reduce((s, g) => s + g.target, 0);
  const totalCurrent = goals.reduce((s, g) => s + g.current, 0);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Generosity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Generosity is not what Christians do with leftovers — it is participation in the character of a God who gave his only Son. It is also the primary discipline that breaks money's hold on the heart.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "practical" as const, label: "Practical Guide", icon: "🛠️" },
            { id: "goals" as const, label: "Giving Goals", icon: "🎯" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Excuses and Responses</h3>
              {BARRIERS.map((bar, i) => (
                <div key={i} style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>"{bar.b}"</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{bar.r}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_GENEROSITY.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Generosity Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICAL.map(cat => (
              <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{cat.icon}</span>
                  <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{cat.category}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, marginBottom: 14 }}>{cat.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cat.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 7 }} />
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "goals" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>Total giving goal</div>
                <div style={{ color: MUTED, fontSize: 13 }}>% of income</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: GREEN, fontWeight: 900, fontSize: 24 }}>{totalCurrent}%<span style={{ color: MUTED, fontSize: 16 }}> / {totalTarget}%</span></div>
                <div style={{ width: 120, height: 6, background: BORDER, borderRadius: 3, marginTop: 6 }}>
                  <div style={{ width: `${Math.min(100, (totalCurrent / (totalTarget || 1)) * 100)}%`, height: "100%", background: GREEN, borderRadius: 3 }} />
                </div>
              </div>
            </div>
            {goals.map(g => (
              <div key={g.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 12 }}>{g.label}</div>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Current %</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button onClick={() => update(g.id, "current", g.current - 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 16 }}>−</button>
                      <span style={{ color: GREEN, fontWeight: 800, fontSize: 20, minWidth: 40, textAlign: "center" }}>{g.current}%</span>
                      <button onClick={() => update(g.id, "current", g.current + 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 16 }}>+</button>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Goal %</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button onClick={() => update(g.id, "target", g.target - 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 16 }}>−</button>
                      <span style={{ color: MUTED, fontWeight: 800, fontSize: 20, minWidth: 40, textAlign: "center" }}>{g.target}%</span>
                      <button onClick={() => update(g.id, "target", g.target + 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 16 }}>+</button>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Progress</div>
                    <div style={{ width: "100%", height: 8, background: BORDER, borderRadius: 4 }}>
                      <div style={{ width: `${Math.min(100, (g.current / (g.target || 1)) * 100)}%`, height: "100%", background: g.current >= g.target ? GREEN : PURPLE, borderRadius: 4 }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on Christian generosity, stewardship, and breaking money's hold on the heart — from the Bible and from those who have lived it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "P9AG4VNptUA", title: "The Treasure Principle — Randy Alcorn", channel: "Eternal Perspective Ministries", description: "Alcorn unpacks Jesus's teaching on treasure in heaven — why giving is not sacrifice but investment, and how radical generosity is the primary antidote to materialism's grip on the heart." },
                  { videoId: "YEpfbN5VltI", title: "Why Christians Should Give Generously", channel: "Desiring God", description: "John Piper on the theology of Christian giving — how God's own generous character in the gospel transforms how we hold money and possessions, freeing us to give liberally." },
                  { videoId: "tdqz2DCkisQ", title: "Stewardship: Everything Belongs to God", channel: "The Bible Project", description: "A biblical overview of stewardship — how the concept of human beings as managers of God's world runs from creation through the New Testament and reshapes how we understand ownership and giving." },
                  { videoId: "QqTlFSkuA4w", title: "Radical Generosity: Living Beyond Yourself", channel: "David Platt", description: "Platt's challenge to the compatibility of the American Dream and Christian discipleship — what global need and the gospel together demand of comfortable Western Christians." },
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
