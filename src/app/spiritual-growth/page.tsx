"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Growth as God's Work", verse: "Philippians 1:6", body: "'He who began a good work in you will carry it on to completion until the day of Christ Jesus' (Philippians 1:6). Spiritual growth is not primarily human effort — it is God's ongoing work in those who belong to him. This does not make human effort irrelevant (Paul also says 'work out your salvation with fear and trembling' in the same letter) but it grounds growth in divine initiative rather than human achievement. You are not the author of your own transformation." },
  { title: "Transformation, Not Behavior Modification", verse: "Romans 12:2", body: "'Do not conform to the pattern of this world, but be transformed by the renewing of your mind' (Romans 12:2). The NT word for growth is metamorphosis — a word that implies a change in nature, not merely behavior. Behavior modification produces people who act differently while remaining the same. Transformation produces people who want differently, love differently, and perceive differently. The goal is not a better performance of Christian behavior but a genuinely changed person." },
  { title: "Conformed to the Image of Christ", verse: "Romans 8:29", body: "God's goal in sanctification is specific: 'to be conformed to the image of his Son' (Romans 8:29). Spiritual growth is not vague self-improvement or generic virtue development — it is increasing Christlikeness. The specific character portrait of Jesus (Galatians 5:22-23, Matthew 5-7, John 13-17) provides the content of the goal. Progress can be measured: am I becoming more loving, more patient, more humble, more courageous than I was?" },
  { title: "Growth Through Means of Grace", verse: "2 Peter 1:3-4", body: "God 'has given us everything we need for a godly life through our knowledge of him' (2 Peter 1:3). The means through which God produces growth are not mysteries — they are accessible and ordinary: Scripture, prayer, community, worship, sacrament, service, and suffering. Dallas Willard called these 'spiritual disciplines' — not means of earning grace but channels through which grace flows. Growth requires input; it does not happen by accident or good intention alone." },
  { title: "The Role of Suffering", verse: "James 1:2-4", body: "James commands rejoicing in trials because 'the testing of your faith produces perseverance' and 'perseverance must finish its work so that you may be mature and complete' (James 1:3-4). Paul agrees: 'we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope' (Romans 5:3-4). Suffering is not an obstacle to growth but one of its primary vehicles. Avoided hardship produces no maturity." },
];

const STAGES = [
  { stage: "New Believer", color: "#EF4444", marks: "Hunger for Scripture, new love, simple trust, joy, sometimes dramatic life change", struggles: "Over-confidence, unformed theology, vulnerability to bad teaching, emotional volatility in faith", practices: "Daily Bible reading, new believer small group, baptism, consistent Sunday worship, one mentor" },
  { stage: "Growing Disciple", color: "#F59E0B", marks: "Increasing consistency, deeper understanding, spiritual disciplines becoming habits, first experiences of sustained trial", struggles: "Legalism, comparing growth rates, disappointment when the initial excitement fades, unexamined sin patterns", practices: "Systematic Bible reading, deeper theological engagement, accountability relationship, service in the church" },
  { stage: "Mature Believer", color: "#8B5CF6", marks: "Long-term faithfulness, capacity to endure without visible fruit, ability to accompany others through difficulty, stability in theological identity", struggles: "Pride in maturity, loss of hunger, routine replacing relationship, becoming a critic rather than a servant", practices: "Spiritual direction, mentoring others, sustained contemplative prayer, remaining in challenging community" },
  { stage: "Seasoned Saint", color: GREEN, marks: "Deep rootedness, peace in suffering, unsentimental love, long memory of God's faithfulness, freedom from ego", struggles: "Isolation from the young, irrelevance, physical decline undermining ministry, loss of contemporaries", practices: "Prayer as primary ministry, intentional transmission of wisdom, legacy planning, preparation for death" },
];

const OBSTACLES = [
  { obstacle: "Busyness", desc: "The most common obstacle: there is simply no margin for the practices through which growth happens. Busyness crowds out everything — prayer, Scripture, community, reflection. It is often unexamined rather than chosen.", response: "Sabbath as structural solution. Schedule the practices before the week fills. Audit what you spend time on against what you say you value. Most people who say they don't have time for spiritual growth do have time — it is allocated differently." },
  { obstacle: "Unconfessed Sin", desc: "Persistent, unaddressed sin is like a weight on the spiritual life — it drains energy, creates shame that distances from God, and blocks the honest relationship that growth requires.", response: "Regular examination of conscience (daily Examen). Confession — to God and to a trusted person. Accountability structures for recurring patterns. Professional help where there are addictive or trauma-based components." },
  { obstacle: "Spiritual Comparison", desc: "Comparing your growth to others' either produces pride (I'm ahead) or despair (I'm behind) — neither of which is conducive to growth. Paul explicitly warns against measuring oneself by others (2 Corinthians 10:12).", response: "Measure your present self against your past self, not against others. Keep a spiritual journal to observe change over time. The question is: am I more like Christ than I was a year ago?" },
  { obstacle: "Consumer Christianity", desc: "Treating church and Christianity as a service provider whose job is to meet your needs rather than a community to which you belong and contribute. Consumers do not grow; contributors do.", response: "Commit to service. Accept responsibility. Stay when it is uncomfortable. The growth happens in the giving, the staying, and the serving — not in finding the best spiritual experience." },
  { obstacle: "Isolation from Community", desc: "Privatized Christianity — personal relationship with Jesus without genuine Christian community — lacks most of the contexts in which growth occurs. Conflict resolution, bearing one another's burdens, and mutual accountability require actual community.", response: "Pursue depth over breadth in relationships. Move from large gathering to small group to one or two deep friendships. Let people know your actual life. Be known." },
];

const THINKERS = [
  {
    id: "willard",
    name: "Dallas Willard",
    era: "20th-21st century",
    bio: "Professor of philosophy at USC and one of the most influential voices on spiritual formation in contemporary Christianity. His books The Spirit of the Disciplines and Renovation of the Heart transformed how many Christians understand growth. He argued that spiritual transformation requires training, not just trying — the same intentional investment of effort that any skilled person gives to developing their craft.",
    quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action; earning is attitude.",
    contribution: "Willard recovered the ancient spiritual disciplines for evangelicals and gave them a rigorous philosophical foundation. His concept of VIM — Vision, Intention, Means — provided a practical framework: you must first see clearly what you want to become, choose it intentionally, and then use the means God provides. Transformation that skips training produces people who want to be good but have no idea how to get there.",
  },
  {
    id: "foster",
    name: "Richard Foster",
    era: "20th-21st century",
    bio: "Quaker author and founder of Renovare. Foster's 1978 book Celebration of Discipline brought the classical spiritual disciplines to a mass evangelical audience at a time when that world had largely abandoned structured spiritual practice. The book has sold over two million copies and introduced millions of Christians to disciplines they had never heard named: meditation, fasting, simplicity, solitude, submission, confession.",
    quote: "Superficiality is the curse of our age. The doctrine of instant satisfaction is a spiritual problem as well as a cultural one.",
    contribution: "Foster catalogued and explained the classical disciplines in three categories: inward disciplines (meditation, prayer, fasting, study), outward disciplines (simplicity, solitude, submission, service), and corporate disciplines (confession, worship, guidance, celebration). By making these practices accessible and non-threatening, he gave a generation of evangelicals their first framework for intentional spiritual formation.",
  },
  {
    id: "peterson",
    name: "Eugene Peterson",
    era: "20th-21st century",
    bio: "Presbyterian pastor in Maryland for 29 years, author of over 30 books, and translator of The Message Bible. His book A Long Obedience in the Same Direction — its title taken from Nietzsche — applied a radical idea to Christian growth: formation is patient, unphotogenic faithfulness practiced over decades, not a series of dramatic spiritual breakthroughs. He was suspicious of everything marketed and spectacular in the spiritual life.",
    quote: "Unspiritual growth is attracted to what is spectacular. Spiritual growth is formed by faithfulness to what is ordinary.",
    contribution: "Peterson gave a theological vocabulary for the spirituality of ordinary pastoral life — the sermon, the visit, the prayer, the Scripture read again. His five-volume spiritual theology (The Contemplative Pastor, Working the Angles, etc.) argued that pastors and laypeople alike are not managers of a religious enterprise but participants in a long, slow, God-initiated story. Depth requires duration.",
  },
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "20th century",
    bio: "Dutch Catholic priest who taught at Notre Dame, Yale, and Harvard Divinity School before leaving academia in 1986 to live among people with intellectual disabilities at the L'Arche Daybreak community in Toronto. His 40+ books draw from his own experience of loneliness, depression, and longing for intimacy to describe the spiritual journey with unusual psychological honesty. He died in 1996 at 64.",
    quote: "The spiritual life does not remove us from the world but leads us deeper into it.",
    contribution: "Nouwen's legacy is the recovery of vulnerability in spiritual writing. His willingness to describe his own darkness — The Inner Voice of Love, written during a severe psychological breakdown, is his most raw work — made him credible precisely where polished spiritual writers are not. He demonstrated that the place of deepest growth is not in achievement or experience but in accepting our own woundedness as the place where we meet the wounded Christ.",
  },
  {
    id: "teresa",
    name: "Teresa of Avila",
    era: "16th century",
    bio: "Spanish Carmelite nun and reformer who cofounded the Discalced Carmelites alongside John of the Cross. Born in 1515 in Avila, she spent two decades in a spiritual plateau before a decisive conversion in midlife that launched her reform movement and prolific writing. Her masterwork The Interior Castle describes the spiritual journey as movement through seven dwelling places of a crystal castle toward the innermost room where God dwells. She was declared a Doctor of the Church in 1970 — the first woman to receive the title.",
    quote: "The soul is like a castle made entirely of diamond or very clear crystal, in which there are many rooms, just as in heaven there are many dwelling places.",
    contribution: "Teresa provided the most systematic and psychologically rich map of contemplative growth in Western Christianity. She normalized the difficulty, dryness, and confusion of the spiritual journey, showing that what feels like failure in prayer is often the transition to a deeper form of relationship with God — one that does not depend on felt experience. Her insight that aridity and suffering are not obstacles to contemplation but essential passages within it has guided countless souls through the dark stretches of the spiritual life.",
  },
];

type Tab = "theology" | "stages" | "thinkers" | "obstacles";

export default function SpiritualGrowthPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedStage, setSelectedStage] = useState("New Believer");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedThinker, setSelectedThinker] = useState("willard");

  const stage = STAGES.find(s => s.stage === selectedStage)!;
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Growth</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            He who began a good work in you will carry it on to completion. Spiritual growth is not self-improvement — it is transformation by One who is at work within you, conforming you to the image of his Son.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "stages" as const, label: "Stages", icon: "📈" },
            { id: "thinkers" as const, label: "Key Thinkers", icon: "💡" },
            { id: "obstacles" as const, label: "Obstacles", icon: "⚠️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "stages" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {STAGES.map(s => (
                <button key={s.stage} onClick={() => setSelectedStage(s.stage)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedStage === s.stage ? s.color : BORDER}`, background: selectedStage === s.stage ? `${s.color}15` : "transparent", color: selectedStage === s.stage ? s.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {s.stage}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${stage.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: stage.color, fontWeight: 900, fontSize: 22, marginBottom: 20 }}>{stage.stage}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MARKS OF THIS STAGE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{stage.marks}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>COMMON STRUGGLES</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{stage.struggles}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY PRACTICES</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{stage.practices}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {THINKERS.map(tk => (
                <button key={tk.id} onClick={() => setSelectedThinker(tk.id)}
                  style={{ width: "100%", background: selectedThinker === tk.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedThinker === tk.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === tk.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{tk.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{tk.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{thinker.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{thinker.era}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{thinker.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{thinker.quote}"</p>
              </blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION TO SPIRITUAL FORMATION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These obstacles are the most common reasons Christians stagnate. Identifying which one is active in your season is the first step toward addressing it.
              </p>
            </div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.obstacle ? null : o.obstacle)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.obstacle ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.obstacle}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.obstacle ? "−" : "+"}</span>
                </button>
                {expanded === o.obstacle && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{o.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
