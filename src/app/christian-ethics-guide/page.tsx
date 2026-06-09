"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "foundations", label: "Foundations" },
  { id: "frameworks", label: "Frameworks" },
  { id: "natural-law", label: "Natural Law" },
  { id: "scripture", label: "Scripture's Role" },
  { id: "hard-cases", label: "Hard Cases" },
  { id: "virtues", label: "Virtue Ethics" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ETHICS_TEXTS = [
  {
    ref: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    note: "Christian ethics requires renewed minds — not just rules, but transformed moral perception.",
  },
  {
    ref: "Micah 6:8",
    text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?",
    note: "A concise summary of moral life: justice, covenant love, and humility before God.",
  },
  {
    ref: "Matthew 22:37-40",
    text: "You shall love the Lord your God with all your heart... and your neighbor as yourself. On these two commandments depend all the Law and the Prophets.",
    note: "Jesus reduces the entire moral law to love — but love rightly ordered toward God and neighbor.",
  },
  {
    ref: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    note: "Virtue ethics: the goal of Christian moral life is Christlike character formed by the Spirit.",
  },
];

const FOUNDATIONS = [
  {
    name: "God's Character",
    desc: "Morality is grounded in who God is — not in arbitrary divine commands (voluntarism), but in God's own nature. What God commands, he commands because it reflects his character. The good is what is consistent with the character of the perfectly good God.",
    color: GREEN,
  },
  {
    name: "Creation Order",
    desc: "God built moral norms into the fabric of creation — marriage, family, work, justice, and care for the vulnerable are not cultural constructs but creation structures. Natural law theory holds that moral truth is partly accessible through reason applied to created human nature.",
    color: TEAL,
  },
  {
    name: "Scripture",
    desc: "The Bible reveals moral norms clearly and authoritatively, especially where natural law is obscured by sin. Scripture is the supreme norm, correcting and completing what reason can discover. It is not the only source of moral knowledge, but it is the highest.",
    color: PURPLE,
  },
  {
    name: "Conscience",
    desc: "God has written the moral law on human hearts (Romans 2:15). Conscience is not infallible — it must be formed, educated, and submitted to Scripture. But it is a real witness. An educated conscience is the proximate guide in moral decision-making.",
    color: GOLD,
  },
  {
    name: "Redemption and New Creation",
    desc: "Christian ethics is not merely law-keeping but participation in the new creation in Christ. The Spirit produces the fruit of Christlike character. Ethics is not a burden imposed on the Christian life but the natural overflow of a transformed heart.",
    color: BLUE,
  },
];

const FRAMEWORKS = [
  {
    name: "Divine Command Theory",
    tradition: "Voluntarist / Some Reformed",
    desc: "An action is right because God commands it. Morality is defined by God's will. Strength: grounds ethics in God's authority. Weakness: faces the Euthyphro dilemma — is it good because God commands it, or does God command it because it's good?",
    christian: "Most Christian ethicists prefer modified divine command theory: God commands what he commands because of his own perfectly good nature, not arbitrarily.",
    color: GREEN,
  },
  {
    name: "Natural Law",
    tradition: "Catholic / Aquinas / Some Reformed",
    desc: "Moral truth is accessible through reason applied to human nature and created order. The eternal law (God's reason) is participated in by human reason. The basic principles (do good, avoid evil; preserve life; raise children) are self-evident.",
    christian: "Allows dialogue with non-Christians on moral grounds. C.S. Lewis's Moral Law argument. Reformed critique: natural law is significantly distorted by sin and needs scriptural correction.",
    color: TEAL,
  },
  {
    name: "Virtue Ethics",
    tradition: "Aristotle / Aquinas / MacIntyre",
    desc: "Focus shifts from rules (what to do) and consequences (what results) to character (who to be). The goal is eudaimonia (flourishing), achieved by cultivating virtues. For Christians: flourishing means Christlikeness, virtues are infused by the Spirit.",
    christian: "Aligns well with NT language: fruit of the Spirit, Beatitudes, imitation of Christ. Stanley Hauerwas argues Christian ethics is fundamentally about character formed in community.",
    color: PURPLE,
  },
  {
    name: "Deontological Ethics",
    tradition: "Kant / Some Protestant",
    desc: "Morality consists of binding duties, regardless of consequences. Kant's categorical imperative: act only by maxims you could universalize. Some Protestant ethics emphasizes moral law as binding duty.",
    christian: "Scripture does command and prohibit. But pure deontology without virtue or consequences misses much. Christian ethics includes duties but is not reducible to duty-fulfillment.",
    color: GOLD,
  },
  {
    name: "Consequentialism",
    tradition: "Utilitarianism / Pragmatism",
    desc: "The right action is the one producing the best outcomes — usually defined as greatest happiness for greatest number. Common in public policy debates.",
    christian: "Christians do care about outcomes — love for neighbor means caring about welfare. But pure consequentialism allows almost anything if the outcome is good enough. Christian ethics sets moral constraints.",
    color: RED,
  },
];

const NATURAL_LAW_POINTS = [
  {
    title: "The Tradition",
    desc: "Natural law theory runs from Aristotle through the Stoics, Paul (Romans 2:14-15), Augustine, and reaches its fullest development in Aquinas's Summa Theologica (Prima Secundae, Q. 90-108). The Reformers largely retained it, though Luther was more skeptical than Calvin.",
    color: GREEN,
  },
  {
    title: "How It Works",
    desc: "Human reason, reflecting on human nature and created reality, can discern basic moral principles: preserve life, propagate the species, live in society, seek truth, worship God. These are not derived from Scripture but are accessible to all people through reason and conscience.",
    color: TEAL,
  },
  {
    title: "Strengths",
    desc: "Provides a basis for moral dialogue with non-Christians. Explains why unbelievers often do good things. Grounds public policy arguments that don't depend on biblical authority. C.S. Lewis's Mere Christianity uses natural law extensively.",
    color: PURPLE,
  },
  {
    title: "Limitations",
    desc: "Sin distorts natural moral reasoning (Romans 1:21-32). Cultures disagree on what natural law requires. Special revelation (Scripture) is needed to correct and supplement natural law. Most Reformed thinkers accept natural law but as a weaker form of moral knowledge than Scripture.",
    color: GOLD,
  },
];

const HARD_CASES = [
  {
    case: "Moral Absolutes vs. Exceptions",
    question: "Are there moral rules with no exceptions, or does every rule have edge cases?",
    views: "Absolutists (Kant, some Reformed) hold that some duties are absolute — lying is always wrong, even to protect the innocent. Qualified absolutists (Geisler) allow exceptions when two absolute duties conflict. Graded absolutists say when commands conflict, the higher obligation prevails.",
  },
  {
    case: "Individual vs. Community",
    question: "Is ethics primarily about individual choices or communal formation?",
    views: "Modern Western ethics is highly individualistic. Stanley Hauerwas argues this is a distortion: Christian ethics is about the kind of community (the church) that forms people of character. Individual decisions flow from communally-formed character.",
  },
  {
    case: "Rules vs. Principles",
    question: "Should we apply rules or principles to moral decisions?",
    views: "Rules provide clarity and prevent rationalization. Principles allow contextual wisdom but risk becoming excuses. Most Christian ethicists use both: biblical commands set moral parameters, wisdom applies them in particular cases. Casuistry is the art of applying principles to cases.",
  },
  {
    case: "The Role of Culture",
    question: "How much should cultural context affect moral conclusions?",
    views: "Some moral norms are trans-cultural (universal, rooted in creation). Others are cultural expressions of underlying principles. Relativism (all norms are culturally determined) is incompatible with Christianity. But insensitivity to cultural variation leads to moral imperialism.",
  },
  {
    case: "Double Effect",
    question: "Is it permissible to do something with both good and bad effects?",
    views: "Doctrine of Double Effect (Thomas Aquinas): it may be permissible to cause harm as a foreseen but unintended side effect of achieving a good end, if the harm is proportionate and the good effect is not achieved through the harm. Applied in medical ethics and just war theory.",
  },
];

const VIRTUES = [
  { virtue: "Prudence (Wisdom)", desc: "Right reason applied to action — the master virtue that knows what to do in particular situations. Not mere cleverness but practical wisdom ordered toward the good.", color: GREEN },
  { virtue: "Justice", desc: "Rendering to each their due — to God in worship, to neighbor in equity, to society in right ordering. The social virtue, governing relationships and institutions.", color: BLUE },
  { virtue: "Fortitude (Courage)", desc: "Firmness of soul in pursuing the good and enduring evil in its service. The virtue that sustains action under difficulty or threat. Requires knowing what is worth suffering for.", color: RED },
  { virtue: "Temperance", desc: "Ordering of desires toward what is genuinely good. Self-control, moderation, freedom from being ruled by appetite. Not asceticism (desires are bad) but mastery (desires are servants).", color: GOLD },
  { virtue: "Faith", desc: "Trusting God's revelation about what is true and good. For Augustine, all virtues must be ordered by faith to be genuine virtues — pagan 'virtues' without faith are 'splendid vices.'", color: PURPLE },
  { virtue: "Hope", desc: "Steadfast expectation of the promised good — the new creation. Shapes present action: we live in light of the future God promises. Hope prevents both despair (giving up) and presumption (taking shortcuts).", color: TEAL },
  { virtue: "Love (Charity)", desc: "The queen of virtues (Augustine). Not mere sentiment but ordered love: loving God above all things, and neighbors as ourselves, for God's sake. All other virtues are ordered by and toward love.", color: "#EC4899" },
];

const VIDEOS = [
  { videoId: "bIwOhIy35_w", title: "Introduction to Christian Ethics" },
  { videoId: "dR9NpPLMFHg", title: "Natural Law Theory Explained" },
  { videoId: "wH3DGFGXAoQ", title: "Virtue Ethics and the Christian Life" },
  { videoId: "n3nNkUKYQtE", title: "How to Make Moral Decisions — John Frame" },
];

export default function ChristianEthicsPage() {
  const [tab, setTab] = useLocalStorage("vine_ethics_tab", "overview");
  const [openFW, setOpenFW] = useLocalStorage("vine_ethics_fw", "");
  const [openHC, setOpenHC] = useLocalStorage("vine_ethics_hc", "");
  const [journal, setJournal] = useLocalStorage("vine_ethics_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🧭</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Christian Ethics</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            How do Christians make moral decisions? The foundations, frameworks, and practical tools for reasoning well about right and wrong — in light of God, Scripture, and the natural order.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>What Is Christian Ethics?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christian ethics asks: how should followers of Jesus live? It draws on Scripture, natural law, the tradition of the church, and practical wisdom to discern right from wrong — not as an external burden but as the natural expression of a life transformed by the gospel. The goal is not mere rule-following but Christlikeness.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {ETHICS_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>The Three-Source Problem</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>Christian ethicists must navigate three sources that can appear to conflict: Scripture, natural law (reason applied to creation), and tradition. Protestant ethics emphasizes Scripture&apos;s normativity over the others. Catholic ethics gives tradition more weight. All orthodox Christian ethics holds that these three, rightly understood, cohere — because all truth is God&apos;s truth.</p>
            </div>
          </div>
        )}

        {/* FOUNDATIONS */}
        {tab === "foundations" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Foundations of Christian Ethics</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FOUNDATIONS.map(f => (
                <div key={f.name} style={{ background: CARD, border: `1px solid ${f.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${f.color}` }}>
                  <div style={{ fontWeight: 700, color: f.color, marginBottom: "0.4rem" }}>{f.name}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FRAMEWORKS */}
        {tab === "frameworks" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Ethical Frameworks</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christian ethics does not commit to a single secular framework but uses insights from each while grounding everything in God&apos;s character and Scripture. Understanding the frameworks sharpens moral reasoning.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {FRAMEWORKS.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenFW(openFW === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: f.color }}>{f.name}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{f.tradition}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openFW === String(i) ? "−" : "+"}</span>
                  </button>
                  {openFW === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{f.desc}</p>
                      <div style={{ background: BG, borderRadius: 8, padding: "0.75rem", borderLeft: `3px solid ${f.color}` }}>
                        <span style={{ color: f.color, fontWeight: 700 }}>Christian appropriation: </span>
                        <span style={{ color: MUTED }}>{f.christian}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NATURAL LAW */}
        {tab === "natural-law" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Natural Law</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {NATURAL_LAW_POINTS.map(n => (
                <div key={n.title} style={{ background: CARD, border: `1px solid ${n.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${n.color}` }}>
                  <div style={{ fontWeight: 700, color: n.color, marginBottom: "0.4rem" }}>{n.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>Scripture&apos;s Role in Ethics</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Scripture is the supreme norm for Christian ethics — not the only source of moral knowledge, but the authoritative correction and completion of natural moral knowledge. It functions differently in different ethical traditions.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "Prescriptive Commands",
                  desc: "Scripture contains direct moral commands: the Ten Commandments, the Sermon on the Mount, the household codes of Ephesians and Colossians. These are binding, though hermeneutical care is needed to apply them across cultural contexts.",
                  color: GREEN,
                },
                {
                  title: "Narrative Formation",
                  desc: "The biblical story — creation, fall, redemption, new creation — provides the framework within which moral life makes sense. Virtues and vices are understood in terms of this story. Stanley Hauerwas: narrative is prior to principles.",
                  color: TEAL,
                },
                {
                  title: "Wisdom Literature",
                  desc: "Proverbs, Psalms, and Job model the kind of practical wisdom that discerns rightly in particular situations. Ethics requires not just rules but the capacity for wise judgment — phronesis. Scripture cultivates this wisdom.",
                  color: PURPLE,
                },
                {
                  title: "Jesus as Moral Center",
                  desc: "For Christians, Jesus is not just a moral teacher but the embodiment of perfect moral life. The imitation of Christ is the goal. The question 'What would Jesus do?' is imprecise but gestures at something real: Christ's character is the telos of Christian ethics.",
                  color: GOLD,
                },
                {
                  title: "Tensions and Hermeneutics",
                  desc: "OT civil and ceremonial law does not directly bind Christians. The NT reaffirms the moral law. Some passages address culture-specific situations, others state trans-cultural principles. Hermeneutical care — understanding genre, context, and redemptive-historical location — is required.",
                  color: BLUE,
                },
              ].map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HARD CASES */}
        {tab === "hard-cases" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Reasoning Through Hard Cases</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Not all moral situations are clear. Casuistry is the art of applying principles to cases — a respected tradition in both Catholic and Protestant ethics. The goal is not to find loopholes but to reason carefully in situations where principles conflict or circumstances are complex.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {HARD_CASES.map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenHC(openHC === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: GOLD }}>{h.case}</span>
                      <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.1rem" }}>{h.question}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openHC === String(i) ? "−" : "+"}</span>
                  </button>
                  {openHC === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{h.views}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIRTUES */}
        {tab === "virtues" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>The Virtues</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Christian virtue ethics integrates the four cardinal virtues (Greek) with the three theological virtues (Paul&apos;s &ldquo;faith, hope, and love&rdquo;). Virtue is habituated excellence of character — not a one-time decision but a pattern of life formed over time, ultimately by the Holy Spirit working through discipline and community.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {VIRTUES.map(v => (
                <div key={v.virtue} style={{ background: CARD, border: `1px solid ${v.color}40`, borderRadius: 10, padding: "1rem", borderLeft: `4px solid ${v.color}` }}>
                  <div style={{ fontWeight: 700, color: v.color, marginBottom: "0.3rem" }}>{v.virtue}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>Where are you facing a hard ethical question? What virtues do you most need to cultivate?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your moral reasoning. Where do you most often face ethical tensions? Which ethical framework do you find yourself naturally using? What would it mean to approach ethics more from the virtue/character angle?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
