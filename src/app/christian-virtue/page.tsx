"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Virtue Ethics and the Christian Tradition", verse: "Philippians 4:8", body: "'Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things' (Philippians 4:8). Virtue ethics asks not 'what should I do?' but 'what kind of person should I become?' Aristotle identified virtues as stable character dispositions cultivated through practice. The Christian tradition baptized this insight: virtues are not merely human achievements but gifts of grace, transformed by the Spirit, oriented toward God." },
  { title: "The Theological Virtues", verse: "1 Corinthians 13:13", body: "'And now these three remain: faith, hope and love. But the greatest of these is love' (1 Corinthians 13:13). The theological virtues — faith, hope, and love — are so called because they have God as their immediate object and source. They cannot be produced by human effort alone; they are infused by the Holy Spirit. Thomas Aquinas distinguished them from the cardinal virtues (which natural reason can identify) as virtues proper to the life of grace." },
  { title: "The Cardinal Virtues", verse: "Wisdom 8:7", body: "The four cardinal virtues — prudence, justice, fortitude, and temperance — were identified by Greek philosophers and integrated into Christian theology. They are 'cardinal' (from cardo, hinge) because other virtues hinge on them. Prudence (practical wisdom) governs the intellect; justice governs relations with others; fortitude governs fear and desire in difficult situations; temperance governs pleasure and appetite. The Christian tradition holds these are knowable by natural reason but perfected by grace." },
  { title: "Virtue as Formed by Practice", verse: "Hebrews 5:14", body: "'Solid food is for the mature, who by constant use have trained themselves to distinguish good from evil' (Hebrews 5:14). Virtue is not a decision but a formation — a stable disposition toward the good, acquired through repeated practice. Aristotle: we become just by doing just acts, courageous by doing courageous acts. The Christian spiritual disciplines are virtue-formation practices: regular acts of prayer, fasting, giving, confession — repeated until they shape the character that acts naturally from love." },
  { title: "Grace and Virtue Together", verse: "2 Peter 1:5-8", body: "'Make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness, mutual affection; and to mutual affection, love' (2 Peter 1:5-8). The passage holds human effort ('make every effort') and divine foundation ('his divine power has given us everything we need for a godly life,' v.3) together. Virtue formation is not self-improvement; it is Spirit-empowered cooperation with grace." },
];

const VIRTUES = [
  { name: "Faith", category: "Theological", color: GREEN, greek: "Pistis", latin: "Fides", desc: "The virtue of trusting God with the whole self — intellect, will, and affections — in response to his revealed word. Not mere intellectual assent but fiducial trust. Faith is the foundation on which all other theological virtues rest; without it, hope and love lack their proper object and ground.", cultivate: "Regular engagement with Scripture (feeding faith on its promises), prayer (exercising trust in conversation with God), and community (where faith is strengthened by others' testimonies and modeled by mature believers).", opposite: "Unbelief, credulity, or mere intellectual assent without fiducial trust." },
  { name: "Hope", category: "Theological", color: "#F59E0B", greek: "Elpis", latin: "Spes", desc: "The virtue of confident expectation in God's future faithfulness — not wishful thinking but certainty grounded in resurrection. Hope orients the Christian toward the coming kingdom, preventing both despair (when present circumstances are dark) and idolatry (when present pleasures are treated as final goods).", cultivate: "Meditation on the resurrection of Jesus (the proof of the coming resurrection of all), reading Revelation with eschatological imagination, and practicing contentment that releases the grip of present goods.", opposite: "Despair (no expectation) or presumption (treating hope as certain in ways Scripture does not warrant)." },
  { name: "Love (Charity)", category: "Theological", color: "#EF4444", greek: "Agape", latin: "Caritas", desc: "The greatest of the theological virtues — the disposition to will the genuine good of another for their sake. Agape is not primarily an emotion but a settled orientation of the will. Thomas Aquinas defined charity as friendship with God — a participatory sharing in God's own love for himself and his creatures.", cultivate: "Acts of service to difficult people (love is tested and trained by difficulty), giving without expectation of return, and regular meditation on the love of God in the cross (1 John 4:19).", opposite: "Self-love that treats others as means to one's own ends; hatred; indifference." },
  { name: "Prudence", category: "Cardinal", color: PURPLE, greek: "Phronesis", latin: "Prudentia", desc: "Practical wisdom — the virtue that enables right action in concrete situations. Prudence is not timidity or caution; it is the capacity to discern what the good is in this particular situation and to act on that discernment. Aristotle called it the 'charioteer of the virtues' because it governs the application of all other virtues.", cultivate: "Study of wisdom literature (Proverbs, Ecclesiastes); deliberate decision-making practices; seeking counsel from wiser people; reflection on past choices.", opposite: "Foolishness, impulsiveness, excessive caution, or cleverness deployed for wrong ends." },
  { name: "Justice", category: "Cardinal", color: "#3B82F6", greek: "Dikaiosyne", latin: "Iustitia", desc: "The virtue of rendering to each person what they are owed — as an image-bearer of God (dignity), as a neighbor (care), and as a citizen (rights). Justice is both personal (in relationships) and structural (in systems). The prophets' denunciations of injustice and the NT's care for the poor reflect justice as a core virtue of God's character and therefore of his people.", cultivate: "Active engagement with the poor and marginalized, study of structural injustice, and deliberate practice of fair dealing in business and personal relationships.", opposite: "Injustice, partiality, exploitation, indifference to the oppressed." },
  { name: "Fortitude", category: "Cardinal", color: "#10B981", greek: "Andreia", latin: "Fortitudo", desc: "The virtue of facing genuine difficulty with appropriate courage — neither reckless bravado nor cowardly avoidance. Fortitude enables the Christian to maintain faithfulness under persecution, to speak truth in hostile environments, and to endure suffering without being destroyed by it.", cultivate: "Practiced prayer in difficult seasons, exposure to the stories of martyrs and confessors, deliberate action in areas of known fear.", opposite: "Cowardice (fleeing what should be faced) or recklessness (facing what should be avoided)." },
  { name: "Temperance", category: "Cardinal", color: "#8B5CF6", greek: "Sophrosyne", latin: "Temperantia", desc: "The virtue of rightly ordered desire — not the elimination of pleasure but its proper enjoyment within appropriate limits. Temperance governs appetite (food, drink, sex) and brings them into the service of the larger human vocation. It is not asceticism but ordering — the ability to enjoy good things without being mastered by them.", cultivate: "Fasting (practicing freedom from appetite), Sabbath (practicing freedom from productivity), and regular examination of where desire has outrun wisdom.", opposite: "Intemperance (excess), insensibility (refusal of legitimate pleasure), or gluttony." },
];

const FILTERS = ["All", "Theological", "Cardinal"];

export default function ChristianVirtuePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "virtues" | "practices">("theology");
  const [selectedVirtue, setSelectedVirtue] = useState("Faith");
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? VIRTUES : VIRTUES.filter(v => v.category === filter);
  const virtue = VIRTUES.find(v => v.name === selectedVirtue) || VIRTUES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚜️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Virtue</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Virtue ethics asks not what you should do but what kind of person you should become. The seven classical virtues — three theological, four cardinal — form the skeleton of a genuinely Christian character.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "virtues" as const, label: "The Seven Virtues", icon: "⚜️" },
            { id: "practices" as const, label: "Formation", icon: "🌱" },
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

        {activeTab === "virtues" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {FILTERS.map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${filter === f ? GREEN : BORDER}`, background: filter === f ? `${GREEN}15` : "transparent", color: filter === f ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {f}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {filtered.map(v => (
                <button key={v.name} onClick={() => setSelectedVirtue(v.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedVirtue === v.name ? v.color : BORDER}`, background: selectedVirtue === v.name ? `${v.color}20` : "transparent", color: selectedVirtue === v.name ? v.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${virtue.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ color: virtue.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{virtue.name}</h2>
                <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: 12 }}>
                  <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{virtue.category}</span>
                  <span style={{ background: `${virtue.color}15`, color: virtue.color, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{virtue.greek}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{virtue.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>HOW TO CULTIVATE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{virtue.cultivate}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>OPPOSITE VICES</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{virtue.opposite}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>How Virtues Are Formed</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>Virtues are not installed by a decision — they are cultivated through practice. Aristotle: we become what we repeatedly do. The Christian adds: we are transformed by the Spirit working through our deliberate effort. These principles shape virtue formation.</p>
            </div>
            {[
              { title: "Identify Your Dominant Vice", icon: "🔍", desc: "The vice most active in your life is the photographic negative of the virtue you most need. Pride points to humility; lust points to temperance and love; cowardice points to fortitude. Name your vice honestly — don't soften it — and begin pursuing its contrary virtue deliberately." },
              { title: "Practice the Virtue in Small Things", icon: "🌱", desc: "Aristotle's insight: we become just by doing just acts. Don't wait for a dramatic occasion to practice courage or generosity — practice it in the small situations available today. Small consistent acts of the virtue, repeated over time, produce the stable disposition." },
              { title: "Use Failure as Information", icon: "📊", desc: "Failure to act virtuously in a specific situation tells you something: either the virtue is not yet formed, or there is a competing attachment that overrode it. Use failure diagnostically rather than condemnationally. What does this failure reveal about where formation is needed?" },
              { title: "Find a Virtuous Model", icon: "👤", desc: "Aristotle recommended learning virtue by imitating virtuous people. The NT adds: imitate those who imitate Christ (1 Corinthians 11:1). Identify a person in whom a virtue you lack is clearly present and study how they exercise it, ask them about it, and put yourself in situations where you practice alongside them." },
              { title: "Use the Spiritual Disciplines", icon: "🧘", desc: "The spiritual disciplines (fasting, silence, service, simplicity) are virtue-formation practices. Fasting forms temperance; service forms love and justice; silence forms prudence and prayer; simplicity forms freedom from possessiveness. Choose disciplines that target the virtues you most need." },
              { title: "Pray for Character, Not Just Forgiveness", icon: "🙏", desc: "Ask God not only for forgiveness of vice but for transformation of character. 'God, make me patient' is a different prayer than 'forgive my impatience.' The first asks for ongoing change; the second stays transactional. Both are needed, but prayer for character formation is often neglected." },
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 22 }}>{p.icon}</span>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
