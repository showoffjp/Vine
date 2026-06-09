"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TYPES = [
  { number: 1, name: "The Reformer", tagline: "The Principled Perfectionist", color: "#EF4444", desc: "Ones have a deep sense of right and wrong and a powerful inner critic. They are motivated by a desire to be good, correct, and to improve things. Their core fear is being corrupt, evil, or defective.", sin: "Anger / Resentment", virtue: "Serenity", gospel: "You are already justified — not by your perfection but by Christ's. The restless demand for improvement can find rest in the truth that your standing before God is complete.", scriptureVerse: "Romans 8:1", scriptureText: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { number: 2, name: "The Helper", tagline: "The Caring, Interpersonal Type", color: "#F97316", desc: "Twos are warm, empathetic, and deeply motivated by being needed and loved. They struggle to acknowledge their own needs and can give in order to receive love. Their fear is being unloved or unwanted.", sin: "Pride / Manipulation", virtue: "Humility", gospel: "You do not need to earn love through service. You are loved completely before you give anything. Your worth is not in your usefulness — it is grounded in your Maker.", scriptureVerse: "1 John 4:10", scriptureText: "In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins." },
  { number: 3, name: "The Achiever", tagline: "The Success-Oriented Type", color: "#F59E0B", desc: "Threes are driven, adaptable, and image-conscious. They are motivated by a desire for success, affirmation, and the validation of achievement. Their fear is failure and being without value.", sin: "Deceit / Self-Deception", virtue: "Authenticity", gospel: "Your identity is not constructed from your achievements. You were given a name before you accomplished anything. The love of God for you has nothing to do with your performance.", scriptureVerse: "Ephesians 2:10", scriptureText: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them." },
  { number: 4, name: "The Individualist", tagline: "The Sensitive, Introspective Type", color: "#8B5CF6", desc: "Fours have a deep sense of uniqueness and longing for what is missing. They are moved by beauty, depth, and authenticity. They fear being ordinary or having no personal significance.", sin: "Envy / Melancholy", virtue: "Equanimity", gospel: "You are not missing anything essential. The longing that defines the Four is, at its deepest level, a longing for God — and that longing is met in him. You have been seen and known fully.", scriptureVerse: "Psalm 139:14", scriptureText: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { number: 5, name: "The Investigator", tagline: "The Intense, Cerebral Type", color: "#3B82F6", desc: "Fives are perceptive, innovative, and intensely private. They withdraw in order to think and conserve energy. Their fear is being overwhelmed, invaded, or incapable — they hoard inner resources.", sin: "Avarice / Detachment", virtue: "Non-Attachment", gospel: "You do not need to understand everything before you can trust or connect. The God who has all knowledge and all power invites you into relationship — not a system but a person.", scriptureVerse: "Proverbs 3:5", scriptureText: "Trust in the LORD with all your heart, and do not lean on your own understanding." },
  { number: 6, name: "The Loyalist", tagline: "The Committed, Security-Oriented Type", color: "#14B8A6", desc: "Sixes are reliable, responsible, and highly attuned to threat. They are motivated by security and the need for support. Their fear is being without support and guidance — they can either cling to authorities or rebel against them.", sin: "Fear / Anxiety", virtue: "Courage", gospel: "The object of faith is not your own certainty but the faithfulness of God. You are not called to eliminate fear but to trust the one who is perfectly trustworthy in the midst of it.", scriptureVerse: "Isaiah 41:10", scriptureText: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." },
  { number: 7, name: "The Enthusiast", tagline: "The Busy, Fun-Loving Type", color: "#10B981", desc: "Sevens are spontaneous, versatile, and acquisitive. They are motivated by the desire for new experience and the avoidance of pain and limitation. Their fear is being deprived or trapped in suffering.", sin: "Gluttony / Escapism", virtue: "Sobriety", gospel: "The feast you are seeking will not be found in the next experience. The joy of the Lord — deep, rooted, and independent of circumstance — is available now, in the present moment you keep fleeing.", scriptureVerse: "Philippians 4:11–12", scriptureText: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound." },
  { number: 8, name: "The Challenger", tagline: "The Powerful, Dominating Type", color: "#EF4444", desc: "Eights are powerful, decisive, and confrontational. They are motivated by the desire to be strong and avoid any vulnerability or weakness. Their fear is being controlled or harmed by others — they protect themselves with strength.", sin: "Lust / Excess", virtue: "Innocence", gospel: "True strength is not the elimination of vulnerability but the willingness to be vulnerable from a place of secure love. Jesus, the most powerful being who ever lived, wept at Lazarus's tomb.", scriptureVerse: "2 Corinthians 12:9", scriptureText: "My grace is sufficient for you, for my power is made perfect in weakness." },
  { number: 9, name: "The Peacemaker", tagline: "The Easy-Going, Self-Effacing Type", color: "#6B4FBB", desc: "Nines are receptive, reassuring, and agreeable. They are motivated by peace and harmony — inward and outward — and by the avoidance of conflict. Their fear is loss of connection and fragmentation.", sin: "Sloth / Self-Forgetting", virtue: "Action", gospel: "Your presence matters. You are not called to disappear for the sake of peace — you are called to show up fully and offer your whole self, as Christ gave himself fully for the peace he came to bring.", scriptureVerse: "Ephesians 4:15", scriptureText: "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ." },
];

const DEBATE = [
  { stance: "For Cautious Engagement", color: GREEN, icon: "✅", points: [
    "Personality frameworks can serve self-understanding, which is the beginning of spiritual wisdom",
    "The Enneagram, whatever its origins, is now a widely-used secular and Christian psychological tool",
    "Ian Cron, Suzanne Stabile, Richard Rohr, and others have developed rich Christian applications",
    "Understanding sin patterns and defensive structures is compatible with sanctification theology",
    "The types can illuminate blindspots that would otherwise remain invisible to the individual",
  ]},
  { stance: "For Serious Caution", color: "#EF4444", icon: "⚠️", points: [
    "The historical origins are murky — claims of ancient Christian or Sufi provenance are largely unsupported",
    "Modern form developed by George Gurdjieff (esotericist) and Oscar Ichazo (influenced by occult teaching)",
    "Richard Rohr's popularization comes from a framework that critics argue is incompatible with orthodox Christianity",
    "The Enneagram has no empirical validation as a personality system in academic psychology",
    "Risk of self-absorption masquerading as self-knowledge — using the system to justify rather than transform",
    "Critics: Don Riso, Christopher Heuertz, Robert Lyman, and many Reformed and evangelical leaders",
  ]},
];

const VOICES = [
  { name: "Ian Cron & Suzanne Stabile", work: "The Road Back to You (2016)", stance: "Engaged", color: GREEN, desc: "The most popular Christian introduction to the Enneagram. Cron and Stabile present the system as a tool for self-knowledge and compassion, with explicit Christian integration. Their approach is pastoral rather than academic, and has been widely adopted in evangelical, Catholic, and mainline Protestant communities. They focus primarily on the nine types as descriptions of sin patterns and paths toward virtue." },
  { name: "Richard Rohr", work: "The Enneagram: A Christian Perspective (1990)", stance: "Engaged", color: GREEN, desc: "Franciscan friar whose work popularized the Enneagram in Christian spirituality. His framework integrates the types with contemplative spirituality and the Christian understanding of the soul. Critics note that Rohr's broader theology has significant departures from orthodox Christianity — users should engage his Enneagram work with that theological context in mind." },
  { name: "Don Riso & Russ Hudson", work: "The Wisdom of the Enneagram (1999)", stance: "Secular", color: "#F59E0B", desc: "The most comprehensive academic-style treatment of the Enneagram from a secular psychology perspective. Riso and Hudson developed the 'Levels of Development' framework that gives each type a spectrum from healthy to unhealthy expression. Their work provides the psychological depth that many Christian treatments draw on, without the theological framework." },
  { name: "Todd Wilson & Gregory Coles", work: "The Enneagram Goes to Church (2021)", stance: "Cautious", color: "#EF4444", desc: "A measured evangelical assessment of the Enneagram that commends some of its insights while raising significant theological concerns. Wilson and Coles argue for careful evaluation rather than wholesale adoption, and offer criteria for discerning how personality tools can be used in ways consistent with Scripture." },
];

type Tab = "overview" | "types" | "debate" | "voices" | "howto";

export default function EnneagramPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_enneagram_tab", "overview");
  const [selectedType, setSelectedType] = usePersistedState("vine_enneagram_type", "1");
  const type = TYPES.find(t => t.number === parseInt(selectedType)) ?? TYPES[0];

  const TABS: { id: Tab; label: string }[] = [
    { id: "overview", label: "📋 Overview" },
    { id: "types", label: "🔢 The Nine Types" },
    { id: "debate", label: "⚖️ The Debate" },
    { id: "voices", label: "📚 Key Voices" },
    { id: "howto", label: "🧭 How to Use It" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>⭕</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            The Enneagram & Christianity
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            A balanced Christian guide — the history, the theological debate, the nine types through a gospel lens, and how to use it wisely without being used by it.
          </p>
          <div style={{ maxWidth: 600, margin: "20px auto 0", padding: "12px 16px", background: "rgba(239,200,68,0.06)", border: "1px solid rgba(239,200,68,0.2)", borderRadius: 12, fontSize: 13, color: MUTED }}>
            <strong style={{ color: TEXT }}>Note:</strong> Significant theological debate surrounds the Enneagram within Christianity. This page presents multiple perspectives and encourages discernment — not uncritical adoption or reflexive rejection.
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto" }}>
            {TABS.map(t => (
              <button key={t.id} type="button" onClick={() => setTab(t.id)}
                style={{ padding: "16px 18px", fontSize: 13, fontWeight: 700, background: "transparent", border: "none",
                  borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                  color: tab === t.id ? GREEN : MUTED, cursor: "pointer", whiteSpace: "nowrap" }}
              >{t.label}</button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>

          {tab === "overview" && (
            <div style={{ display: "grid", gap: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 14 }}>What Is the Enneagram?</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                  The Enneagram (from Greek: ennea = nine, gramma = figure) describes nine distinct patterns of personality — ways of seeing the world, relating to others, and managing the fundamental anxieties of human existence. Each type is defined by a core motivation (what it deeply desires), a core fear (what it most dreads), and a characteristic pattern of attention and behavior.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                  Unlike the Myers-Briggs (which describes behavioral preferences) or the Big Five (which measures trait dimensions), the Enneagram focuses on unconscious motivations — the deeper why beneath the surface behavior. This is one reason it resonates with spiritual formation frameworks: Christian sanctification is ultimately about transformation at the level of desire, not just behavior.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                  The nine types are organized in a circle with connecting lines (the enneagram figure), and each type connects to two others — a direction of stress and a direction of growth. Types also have &ldquo;wings&rdquo; (influence from adjacent types) and levels of development from healthy to average to unhealthy expression.
                </p>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 14 }}>Brief History</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                  <strong style={{ color: TEXT }}>Ancient claims are overstated.</strong> Some proponents claim the Enneagram is an ancient Christian or Sufi teaching. Scholars have largely debunked these claims: the Enneagram as a personality typology is a 20th-century invention with no verified ancient source.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                  <strong style={{ color: TEXT }}>Modern origins.</strong> George Ivanovich Gurdjieff (1866–1949), a Greek-Armenian spiritual teacher with esoteric leanings, introduced the enneagram symbol. Oscar Ichazo (1931–2020) later developed the nine-type personality system at the Arica Institute, with influence from various esoteric traditions. Claudio Naranjo, a Chilean psychiatrist, brought it to California in the early 1970s where it was adopted by Jesuit priests (including Robert Ochs) who introduced it to Christian spiritual direction.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: TEXT }}>Contemporary popularization.</strong> Helen Palmer (The Enneagram, 1988), Don Riso and Russ Hudson (Personality Types, 1987; The Wisdom of the Enneagram, 1999), and Richard Rohr made the Enneagram widely available. Ian Cron and Suzanne Stabile&apos;s The Road Back to You (2016) introduced it to mainstream evangelical Christianity.
                </p>
              </div>
            </div>
          )}

          {tab === "types" && (
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {TYPES.map(t => (
                  <button key={t.number} type="button" onClick={() => setSelectedType(String(t.number))}
                    style={{ padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700,
                      border: `1px solid ${selectedType === String(t.number) ? t.color : BORDER}`,
                      background: selectedType === String(t.number) ? `${t.color}15` : "transparent",
                      color: selectedType === String(t.number) ? t.color : MUTED, cursor: "pointer" }}>
                    {t.number}. {t.name}
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${type.color}30`, borderRadius: 20, padding: 32 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${type.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: type.color, flexShrink: 0, border: `1px solid ${type.color}30` }}>
                    {type.number}
                  </div>
                  <div>
                    <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT, margin: 0 }}>Type {type.number}: {type.name}</h2>
                    <p style={{ fontSize: 14, color: type.color, fontWeight: 700, margin: "4px 0 0" }}>{type.tagline}</p>
                  </div>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>{type.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  <div style={{ padding: "14px 16px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Capital Sin / Pattern</p>
                    <p style={{ color: TEXT, fontSize: 15, fontWeight: 700, margin: 0 }}>{type.sin}</p>
                  </div>
                  <div style={{ padding: "14px 16px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 12 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Virtue / Direction of Growth</p>
                    <p style={{ color: TEXT, fontSize: 15, fontWeight: 700, margin: 0 }}>{type.virtue}</p>
                  </div>
                </div>
                <div style={{ padding: "20px 24px", background: `rgba(107,79,187,0.06)`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 14, marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Gospel Word for Type {type.number}</p>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, margin: 0 }}>{type.gospel}</p>
                </div>
                <div style={{ padding: "14px 18px", background: `rgba(58,125,86,0.04)`, border: `1px solid rgba(58,125,86,0.12)`, borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{type.scriptureVerse}</p>
                  <p style={{ color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.6, margin: 0 }}>&ldquo;{type.scriptureText}&rdquo;</p>
                </div>
              </div>
            </div>
          )}

          {tab === "debate" && (
            <div style={{ display: "grid", gap: 20 }}>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, padding: "16px 24px", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 14 }}>
                Significant debate exists in Christianity about whether to use the Enneagram, and if so, how. Here are the strongest arguments on each side — presented fairly.
              </p>
              {DEBATE.map((d, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${d.color}25`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontSize: 22 }}>{d.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{d.stance}</h3>
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 10 }}>
                    {d.points.map((p, j) => (
                      <li key={j} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>
                        <span style={{ color: d.color, fontWeight: 700 }}>→</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div style={{ padding: "20px 24px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 14 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, marginBottom: 10 }}>A Principled Middle Path</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                  Most thoughtful Christians who engage with the Enneagram acknowledge both its real insight into human motivation and its murky origins. A principled approach holds: (1) tools can be useful regardless of their origin, as long as they are evaluated by Scripture; (2) self-knowledge in service of sanctification is legitimate; (3) the Enneagram should be used as a tool for transformation, not as an identity or excuse; (4) the theological content of some popular Enneagram teachers requires critical evaluation.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Test all things. Hold fast to what is good (1 Thessalonians 5:21).
                </p>
              </div>
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "grid", gap: 20 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${v.color}25`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{v.name}</h3>
                      <p style={{ fontSize: 13, color: v.color, fontWeight: 700, margin: "3px 0" }}>{v.work}</p>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: `${v.color}12`, color: v.color }}>{v.stance}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "howto" && (
            <div style={{ display: "grid", gap: 20 }}>
              {[
                { title: "Start with the motivation, not the behavior", color: GREEN, body: "The most common mistake in Enneagram use is identifying your type by what you do, not why you do it. Two people can behave identically for entirely different reasons. A Type 1 and a Type 3 may both be high achievers, but the 1 is driven by a need to be correct and the 3 by a need to succeed. Read descriptions of core motivations and fears, not behavior patterns, to find your type." },
                { title: "Use it for self-awareness, not self-justification", color: PURPLE, body: "One of the most common misuses of the Enneagram is using your type as an excuse: 'I am a 6 — I will always be anxious.' The point of type awareness is not to explain why you cannot change; it is to understand what specifically needs to change, where your defenses are strongest, and what your particular path toward virtue looks like. The type names your sin pattern; it does not ordain it." },
                { title: "Hold your type lightly", color: "#3B82F6", body: "Many people change their type identification over time as they grow in self-knowledge. If you are certain of your type after reading one book, you may be identifying with the positive descriptions of a type rather than doing the harder work of honest self-examination. Read descriptions with a close friend who knows you. Invite challenge." },
                { title: "Do not reduce people to their type", color: "#F59E0B", body: "The Enneagram is most dangerous when it becomes a way of sorting and labeling people. 'He is such a 4' — said with knowing condescension — is a misuse of the tool. The goal is empathy and understanding, not categorization. The Enneagram should increase your compassion for others as you understand the fears and motivations behind their behavior — not give you a sorting mechanism." },
                { title: "Evaluate teachers critically", color: "#EF4444", body: "The Enneagram has been popularized by teachers with widely varying theological frameworks. Richard Rohr writes from a theological perspective that many orthodox Christians find problematic. Ian Cron and Suzanne Stabile write from a broadly evangelical and Catholic framework. Don Riso and Russ Hudson write from a secular psychology framework. Know who you are reading and evaluate their framework alongside the content." },
                { title: "Pair Enneagram insight with spiritual direction or counseling", color: GREEN, body: "The Enneagram is a map, not a journey. It shows you terrain to explore; the exploration itself requires a guide. Spiritual directors, counselors, and accountability partners help translate Enneagram insight into actual transformation. Self-knowledge without community and accountability tends to produce clever self-analysis rather than genuine change." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: item.color, flexShrink: 0, paddingTop: 1 }}>0{i + 1}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
